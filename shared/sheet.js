/* =====================================================================
   迷你試算表關卡引擎（SHEET）
   ---------------------------------------------------------------------
   SHEET.mount({ app:'#app', levels: SHEET_LEVELS, mod:'sheet' })
   SHEET.evaluate(formula, grid)   → 數值／字串，錯誤時丟出 { code:'#NAME?', msg }

   支援：= 開頭的公式、+ - * / 與括號、儲存格 B2、範圍 B2:B9、
         SUM AVERAGE COUNT COUNTA MAX MIN ROUND COUNTIF
         COUNTIF 條件：數字、"女"、">=140"、"<>A"、儲存格（B10）
   全形符號（＝，（）＂）會先轉成半形 —— 真的試算表不會幫你轉，所以畫面上會提醒。

   關卡欄位
     data     二維陣列，第一列是標題（A1 開始）
     labels   { 'A7': '總和' } 固定文字
     targets  [{ cell:'C9', ref:'=SUM(C2:C8)', must:['SUM'], tol, alt:[另一個可接受的值] , tip }]
              ref 用同一張表算出標準答案；學生的公式必須用到 must 的函式、而且要參照儲存格（不能直接打答案）
     clean    （選用）先清理再計算：{ issues:{ 列號: 'dup'|'miss'|'noise'|'unit' }, fixed: 清理後的 data, note }
   ⚠️ 上面是 private/ 裡的寫法；公開的 content 由 tools/build.mjs 封存：
      targets 的 ref／alt／tol 換成 ok（可接受數值的雜湊），clean 換成 rows（每列雜湊）＋ e（清理後資料，全部判對才打得開）
   計星：3 顆 ❤️，每按一次「檢查」有錯就扣一顆；全部正確時剩幾顆 ❤️ 就拿幾顆 ⭐。
   ===================================================================== */
(function () {
  var COLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function half(s) {
    return String(s).replace(/[！-～]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); })
      .replace(/[“”]/g, '"').replace(/　/g, ' ');
  }
  function colIdx(c) { return COLS.indexOf(c); }
  function parseRef(r) { var m = /^([A-Z])(\d+)$/.exec(r); return m ? { c: colIdx(m[1]), r: +m[2] } : null; }

  function err(code, msg) { return { code: code, msg: msg }; }

  /* ── 公式計算 ─────────────────────────────── */
  function evaluate(formula, grid, depth) {
    depth = depth || 0;
    if (depth > 20) throw err('#REF!', '公式互相參照，繞不出來了');
    var src = half(formula).trim();
    if (src[0] !== '=') return src;
    src = src.slice(1);
    var toks = [], i = 0, m;
    var re = /\s*(?:(\d+(?:\.\d+)?%?)|("[^"]*")|([A-Z]+\d+(?::[A-Z]+\d+)?)|([A-Z]+)(?=\s*\()|(>=|<=|<>|[+\-*\/(),:&<>=]))/iy;
    while (i < src.length) {
      re.lastIndex = i;
      m = re.exec(src);
      if (!m || m[0].length === 0) { if (/\s/.test(src[i])) { i++; continue; } throw err('#ERROR!', '看不懂「' + src.slice(i, i + 6) + '」'); }
      i = re.lastIndex;
      if (m[1]) toks.push({ t: 'num', v: m[1].slice(-1) === '%' ? parseFloat(m[1]) / 100 : parseFloat(m[1]) });
      else if (m[2]) toks.push({ t: 'str', v: m[2].slice(1, -1) });
      else if (m[3]) toks.push({ t: 'ref', v: m[3].toUpperCase() });
      else if (m[4]) toks.push({ t: 'fn', v: m[4].toUpperCase() });
      else toks.push({ t: 'op', v: m[5] });
    }
    var p = 0;
    function peek() { return toks[p]; }
    function eat(v) { var k = toks[p]; if (!k || (v && k.v !== v)) throw err('#ERROR!', v ? '少了「' + v + '」' : '公式沒寫完'); p++; return k; }
    function cell(ref) {
      var rc = parseRef(ref);
      if (!rc) throw err('#REF!', ref + ' 不是儲存格');
      var raw = grid.get(ref);
      if (raw == null || raw === '') return null;
      if (typeof raw === 'string' && raw[0] === '=') return evaluate(raw, grid, depth + 1);
      return raw;
    }
    function range(a, b) {
      var A = parseRef(a), B = parseRef(b), out = [];
      if (!A || !B) throw err('#REF!', '範圍寫錯了');
      for (var r = Math.min(A.r, B.r); r <= Math.max(A.r, B.r); r++)
        for (var c = Math.min(A.c, B.c); c <= Math.max(A.c, B.c); c++) out.push(cell(COLS[c] + r));
      out.isRange = true;
      return out;
    }
    function expr() {
      var v = term();
      while (peek() && (peek().v === '+' || peek().v === '-')) { var o = eat().v, w = term(); v = o === '+' ? num(v) + num(w) : num(v) - num(w); }
      return v;
    }
    function term() {
      var v = factor();
      while (peek() && (peek().v === '*' || peek().v === '/')) {
        var o = eat().v, w = factor();
        if (o === '/' && num(w) === 0) throw err('#DIV/0!', '除以 0 了');
        v = o === '*' ? num(v) * num(w) : num(v) / num(w);
      }
      return v;
    }
    function factor() {
      var k = peek();
      if (!k) throw err('#ERROR!', '公式沒寫完');
      if (k.v === '-') { eat(); return -num(factor()); }
      if (k.v === '(') { eat('('); var v = expr(); eat(')'); return v; }
      if (k.t === 'num' || k.t === 'str') { eat(); return k.v; }
      if (k.t === 'ref') { eat(); var parts = k.v.split(':'); return parts.length === 2 ? range(parts[0], parts[1]) : cell(parts[0]); }
      if (k.t === 'fn') {
        eat(); eat('(');
        var args = [];
        if (peek() && peek().v !== ')') { args.push(expr()); while (peek() && peek().v === ',') { eat(','); args.push(expr()); } }
        eat(')');
        return call(k.v, args);
      }
      throw err('#ERROR!', '這裡不該出現「' + k.v + '」');
    }
    var v = expr();
    if (p < toks.length) throw err('#ERROR!', '多了「' + toks[p].v + '」');
    return v;
  }

  function num(v) {
    if (v && v.isRange) throw err('#VALUE!', '範圍不能直接拿來加減，要放進函式裡');
    if (v == null || v === '') return 0;
    var n = typeof v === 'number' ? v : parseFloat(v);
    if (isNaN(n)) throw err('#VALUE!', '「' + v + '」不是數字');
    return n;
  }
  function flat(args) { var out = []; args.forEach(function (a) { if (a && a.isRange) out.push.apply(out, a); else out.push(a); }); return out; }
  function nums(args) { return flat(args).filter(function (x) { return typeof x === 'number'; }); }

  function match(v, crit) {
    if (typeof crit === 'number') return typeof v === 'number' ? v === crit : String(v) === String(crit);
    var m = /^(>=|<=|<>|>|<|=)?(.*)$/.exec(String(crit)), op = m[1] || '=', rhs = m[2];
    var rn = rhs !== '' && !isNaN(+rhs) ? +rhs : null;
    if (rn !== null && typeof v === 'number') {
      return { '=': v === rn, '<>': v !== rn, '>': v > rn, '<': v < rn, '>=': v >= rn, '<=': v <= rn }[op];
    }
    var a = String(v == null ? '' : v).toLowerCase(), b = rhs.toLowerCase();
    return op === '<>' ? a !== b : (op === '=' ? a === b : false);
  }

  function call(fn, args) {
    switch (fn) {
      case 'SUM': return nums(args).reduce(function (a, b) { return a + b; }, 0);
      case 'AVERAGE': var ns = nums(args); if (!ns.length) throw err('#DIV/0!', '範圍裡沒有數字'); return ns.reduce(function (a, b) { return a + b; }, 0) / ns.length;
      case 'COUNT': return nums(args).length;
      case 'COUNTA': return flat(args).filter(function (x) { return x != null && x !== ''; }).length;
      case 'MAX': return Math.max.apply(null, nums(args));
      case 'MIN': return Math.min.apply(null, nums(args));
      case 'ROUND': var f = Math.pow(10, num(args[1] || 0)); return Math.round(num(args[0]) * f) / f;
      case 'COUNTIF':
        if (args.length !== 2) throw err('#N/A', 'COUNTIF 要兩個引數：COUNTIF(範圍, 條件)');
        if (!args[0] || !args[0].isRange) throw err('#VALUE!', 'COUNTIF 的第一個引數要是範圍，例如 B2:B9');
        var crit = args[1];
        if (crit && crit.isRange) throw err('#VALUE!', 'COUNTIF 的條件只能是一個值');
        return args[0].filter(function (x) { return match(x, crit); }).length;
      default: throw err('#NAME?', '沒有「' + fn + '」這個函式（拼錯了嗎？）');
    }
  }

  function fmt(v) {
    if (v == null) return '';
    if (typeof v === 'number') return Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : String(Math.round(v * 100) / 100);
    return String(v);
  }

  /* ── 表格資料 ─────────────────────────────── */
  function makeGrid(data, labels) {
    var g = {};
    data.forEach(function (row, r) { row.forEach(function (v, c) { if (v !== null && v !== undefined) g[COLS[c] + (r + 1)] = v; }); });
    for (var k in (labels || {})) g[k] = labels[k];
    return { cells: g, get: function (ref) { return g[ref]; }, set: function (ref, v) { g[ref] = v; } };
  }

  /* ── 評分 ─────────────────────────────────── */
  function gradeTarget(t, grid) {
    var f = String(grid.get(t.cell) || '').trim(), F = half(f).toUpperCase();
    if (!f) return { ok: false, why: '還沒寫公式' };
    if (F[0] !== '=') return { ok: false, why: '公式要用「=」開頭' };
    var v;
    try { v = evaluate(f, grid); } catch (e) { return { ok: false, why: e.code + ' ' + e.msg }; }
    if (!/[A-Z]+\d+/.test(F.slice(1))) return { ok: false, why: '不要直接打答案，要用公式從表格裡的資料算出來' };
    var miss = (t.must || []).filter(function (fn) { return F.indexOf(fn + '(') < 0; });
    if (miss.length) return { ok: false, why: '這一格要用 ' + miss.join('、') + ' 函式' };
    var okv;
    if (t.ok) {   // 封存版：標準答案只剩「可接受數值（小數第 2 位）」的雜湊
      okv = typeof v === 'number' && t.ok.indexOf(SEAL.h(t.s, SEAL.num2(v))) >= 0;
    } else {      // 明碼版（只在 private/ 與建置工具裡出現）
      var want = evaluate(t.ref, grid), tol = t.tol == null ? 0.01 : t.tol;
      okv = [want].concat(t.alt || []).some(function (w) { return typeof w === 'number' ? Math.abs(num(v) - w) <= tol : String(v) === String(w); });
    }
    if (!okv) return { ok: false, why: '算出來是 ' + fmt(v) + '，和正確結果不一樣' + (t.tx ? '（' + SEAL.reveal(t.s, t.tx) + '）' : (t.tip ? '（' + t.tip + '）' : '')) };
    return { ok: true, v: v };
  }

  var ISSUES = [['ok', '✅ 沒問題'], ['dup', '🔁 重複'], ['miss', '🕳️ 缺值'], ['noise', '⚡ 不合理'], ['unit', '📏 單位不一致']];

  /* ── 畫面 ─────────────────────────────────── */
  function mount(opts) {
    var L = opts.levels, MOD = opts.mod || 'sheet', esc = UI.esc, HEARTS = 3;
    var app = typeof opts.app === 'string' ? document.querySelector(opts.app) : opts.app;
    var S = null;

    function best(id) { var r = STORE.level(MOD, id); return r ? (r.stars || 0) : 0; }

    function menu() {
      S = null;
      var total = L.reduce(function (s, lv) { return s + best(lv.id); }, 0);
      app.innerHTML = '<section class="card pop"><div class="tape"></div><div class="row between"><div>' +
        '<p class="kicker">' + L.length + ' 關 · 在網頁裡直接寫公式</p><h2 class="black" style="font-size:1.35rem">點黃色格子 → 在公式列輸入 → 按「檢查」</h2>' +
        '<p class="small soft mt1">每關 3 顆 ❤️，檢查時有錯扣一顆，剩幾顆就拿幾顆 ⭐。學會之後，到 Google 試算表做課本的實作。</p></div>' +
        '<div class="center"><div class="black" style="font-size:1.8rem;color:var(--star)">' + total + ' / ' + (L.length * 3) + '</div><div class="tiny soft bold">⭐ 總星數</div></div></div></section>' +
        '<section class="grid g3 mt3">' + L.map(function (lv, i) {
          return '<button class="card lvcard pop" data-i="' + i + '"><div class="row between"><span style="font-size:2rem">' + lv.icon + '</span>' + UI.stars(best(lv.id)) + '</div>' +
            '<h3 class="black mt1">第 ' + (i + 1) + ' 關　' + esc(lv.title) + '</h3><p class="tiny soft bold mt1">' + esc(lv.book) + '</p></button>';
        }).join('') + '</section>';
      app.querySelectorAll('.lvcard').forEach(function (b) { b.onclick = function () { start(+b.dataset.i); }; });
    }

    function start(i) {
      var lv = L[i];
      try { history.replaceState(null, '', '#' + lv.id); } catch (e) {}
      S = { i: i, lv: lv, hearts: HEARTS, stage: lv.clean ? 'clean' : 'calc', sel: null, marks: {} };
      S.grid = lv.clean ? makeGrid(lv.data, {}) : makeGrid(lv.data, lv.labels);
      draw();
    }

    function draw() {
      var lv = S.lv, grid = S.grid, data = S.stage === 'clean' ? lv.data : (lv.clean ? S.fixed : lv.data);
      var clean = S.stage === 'clean';
      var nRows = clean ? data.length : Math.max(data.length, maxRow(lv)), nCols = clean ? data[0].length : Math.max(data[0].length, maxCol(lv));
      var tmap = {}; if (S.stage === 'calc') lv.targets.forEach(function (t) { tmap[t.cell] = t; });
      var head = '<tr><th></th>' + COLS.slice(0, nCols).split('').map(function (c) { return '<th>' + c + '</th>'; }).join('') + (S.stage === 'clean' ? '<th>🧹 判斷</th>' : '') + '</tr>';
      var rows = '';
      for (var r = 1; r <= nRows; r++) {
        rows += '<tr><th>' + r + '</th>';
        for (var c = 0; c < nCols; c++) {
          var ref = COLS[c] + r, raw = grid.get(ref), t = tmap[ref], shown = '';
          if (t) { try { shown = raw ? fmt(evaluate(raw, grid)) : ''; } catch (e) { shown = e.code; } }
          else shown = fmt(raw);
          rows += '<td class="' + (t ? 'tgt' : '') + (S.sel === ref ? ' sel' : '') + (r === 1 ? ' hd' : '') + '"' + (t ? ' data-ref="' + ref + '" tabindex="0"' : '') + '>' + esc(shown) + '</td>';
        }
        if (S.stage === 'clean') rows += '<td>' + (r === 1 ? '' : '<select class="issue" data-r="' + r + '" aria-label="第 ' + r + ' 列的問題">' + ISSUES.map(function (o) { return '<option value="' + o[0] + '"' + ((S.marks[r] || 'ok') === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>') + '</td>';
        rows += '</tr>';
      }
      var selT = S.sel && tmap[S.sel];
      app.innerHTML = '<section class="card">' +
        '<div class="hud"><button class="btn sm" id="quit">✕ 離開</button><b>' + lv.icon + ' ' + esc(lv.title) + '</b>' +
        '<span class="chip">' + (S.stage === 'clean' ? '步驟 1：清理資料' : (lv.clean ? '步驟 2：計算' : '寫公式')) + '</span>' +
        '<span style="margin-left:auto"></span>' + UI.hearts(S.hearts, HEARTS) + '</div>' +
        '<p class="mt2">' + lv.story + '</p>' +
        (S.stage === 'clean' ? '<div class="note warn mt1 small">' + lv.clean.prompt + '</div>' :
          '<ol class="small mt1" style="padding-left:1.3rem">' + lv.targets.map(function (t) { return '<li><b class="mono">' + t.cell + '</b>：' + esc(t.label) + '</li>'; }).join('') + '</ol>') +
        (S.stage === 'calc' ? '<div class="fbar mt2"><span class="mono bold" style="min-width:2.6rem">' + (S.sel || '') + '</span><span class="mono bold">fx</span>' +
          '<input id="fx" class="input mono" autocomplete="off" spellcheck="false" placeholder="' + (selT ? '輸入公式，例如 =' + (selT.must && selT.must[0] || 'SUM') + '(…)' : '先點一個黃色格子') + '"' + (selT ? '' : ' disabled') + ' value="' + esc(selT ? (grid.get(S.sel) || '') : '') + '"></div>' +
          '<p id="fwarn" class="tiny bold mt1" style="color:var(--warn);min-height:1.1em"></p>' : '') +
        '<div class="scroll-x mt1"><table class="sheet">' + head + rows + '</table></div>' +
        '<div class="row mt2"><button class="btn go" id="check">✅ 檢查</button>' +
        (lv.hx || lv.hints ? '<button class="btn sm" id="hint">💡 提示</button>' : '') + '</div>' +
        '<div class="fb mt2" id="fb" aria-live="polite"></div></section>';
      document.getElementById('quit').onclick = function () { if (confirm('離開這一關？這次的進度不會保留。')) menu(); };
      app.querySelectorAll('td[data-ref]').forEach(function (td) {
        td.onclick = function () { S.sel = td.dataset.ref; draw(); var fx = document.getElementById('fx'); fx.focus(); fx.setSelectionRange(fx.value.length, fx.value.length); };
        td.onkeydown = function (e) { if (e.key === 'Enter') td.onclick(); };
      });
      app.querySelectorAll('select.issue').forEach(function (s) { s.onchange = function () { S.marks[s.dataset.r] = s.value; }; });
      var fx = document.getElementById('fx');
      if (fx) {
        var commit = function () { S.grid.set(S.sel, fx.value.trim()); draw(); };
        fx.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); commit(); } };
        fx.onblur = function () { if (S && S.sel) S.grid.set(S.sel, fx.value.trim()); };   // 只存值不重畫：重畫會把「檢查」的回饋洗掉
        fx.oninput = function () { document.getElementById('fwarn').textContent = /[！-～“”]/.test(fx.value) ? '⚠️ 有全形符號（＝，（）＂）—— 真正的試算表會出錯，請切換成半形' : ''; };
        fx.oninput();
      }
      var hb = document.getElementById('hint');
      if (hb) hb.onclick = function () { S.hint = Math.min((S.hint || 0) + 1, lv.hx ? lv.hn : lv.hints.length); showHints(); };
      showHints();
      document.getElementById('check').onclick = check;
    }

    function showHints() {
      if (!S.hint) return;
      var fb = document.getElementById('fb');
      fb.innerHTML = (S.lv.hx ? SEAL.reveal('hint/' + S.lv.id, S.lv.hx) : S.lv.hints).slice(0, S.hint).map(function (h, i) { return '<div class="hint small mt1">💡 提示 ' + (i + 1) + '：' + esc(h) + '</div>'; }).join('') + (S.msg || '');
    }

    function check() {
      var lv = S.lv, fb = document.getElementById('fb');
      if (S.stage === 'clean') {
        var wrong = 0, marks = [];
        for (var r = 2; r <= lv.data.length; r++) {
          var m = S.marks[r] || 'ok'; marks.push(m);
          if (SEAL.h(lv.clean.s, r + ':' + m) !== lv.clean.rows[r]) wrong++;
        }
        if (wrong) return miss('<div class="note bad pop">❌ 還有 <b>' + wrong + '</b> 列判斷得不對。一列一列看：有沒有一模一樣的？有沒有空白？數字合不合理？單位一樣嗎？</div>');
        // 全部判對，才打得開「清理後的資料」
        SEAL.open(lv.clean.e, lv.clean.s, marks.join(',')).then(function (res) {
          if (!res) return;
          S.fixed = res.fixed; S.stage = 'calc'; S.grid = makeGrid(res.fixed, lv.labels); S.sel = null; S.msg = '';
          draw();
          document.getElementById('fb').innerHTML = '<div class="note ok pop"><b>✅ 清理完成！</b> ' + res.note + '</div>';
        });
        return;
      }
      var res = lv.targets.map(function (t) { return { t: t, r: gradeTarget(t, S.grid) }; });
      var bad = res.filter(function (x) { return !x.r.ok; });
      if (bad.length) {
        return miss('<div class="note bad pop"><b>❌ 還有 ' + bad.length + ' 格不對</b><ul style="margin:.3rem 0 0;padding-left:1.2rem">' +
          bad.map(function (x) { return '<li><b class="mono">' + x.t.cell + '</b>：' + esc(x.r.why) + '</li>'; }).join('') + '</ul></div>');
      }
      finish();
    }

    function miss(html) {
      S.hearts--;
      S.msg = html;
      if (S.hearts <= 0) return over();
      draw();
      document.getElementById('fb').innerHTML = html;
      showHints();
    }

    function finish() {
      var lv = S.lv, i = S.i, stars = S.hearts;
      var formulas = {}; lv.targets.forEach(function (t) { formulas[t.cell] = S.grid.get(t.cell); });
      var r = STORE.saveLevel(MOD, lv.id, { stars: stars, score: Math.round(stars / 3 * 100), extra: { formulas: formulas } });
      app.innerHTML = '<section class="card pop center"><div class="tape"></div><p class="kicker">過關！</p>' +
        '<h2 class="black" style="font-size:1.6rem">' + lv.icon + ' ' + esc(lv.title) + '</h2><div class="end-star mt1">' + UI.stars(stars) + '</div>' +
        '<div class="note small mt2" style="text-align:left;display:inline-block">' + lv.targets.map(function (t) { return '<div><b class="mono">' + t.cell + '</b>　<code>' + esc(formulas[t.cell]) + '</code></div>'; }).join('') + '</div>' +
        (lv.after ? '<p class="small mt2">' + lv.after + '</p>' : '') +
        (r.improved ? '<p class="note ok small mt2" style="display:inline-block">⭐ 新紀錄已儲存！</p>' : '<p class="small soft mt1">最佳紀錄：' + UI.stars(best(lv.id)) + '</p>') +
        '<div class="row mt3" style="justify-content:center"><button class="btn" id="again">🔁 再做一次</button>' +
        (i + 1 < L.length ? '<button class="btn go" id="next">下一關：' + esc(L[i + 1].title) + ' →</button>' : '') + '<button class="btn" id="menu">關卡選單</button></div></section>';
      document.getElementById('again').onclick = function () { start(i); };
      document.getElementById('menu').onclick = menu;
      var n = document.getElementById('next'); if (n) n.onclick = function () { start(i + 1); };
      if (r.improved) UI.toast('⭐ ' + lv.title + '：' + '★'.repeat(stars));
    }

    function over() {
      var i = S.i;
      app.innerHTML = '<section class="card pop center"><p style="font-size:3rem">💔</p><h2 class="black">愛心用完了</h2>' +
        '<p class="soft mt1">看看提示，再挑戰一次！這次的結果不會記錄。</p>' + (S.msg || '') +
        '<div class="row mt3" style="justify-content:center"><button class="btn go" id="retry">🔁 重新挑戰</button><button class="btn" id="menu">關卡選單</button></div></section>';
      document.getElementById('retry').onclick = function () { start(i); };
      document.getElementById('menu').onclick = menu;
    }

    function maxRow(lv) { var m = 0; (lv.targets || []).concat(Object.keys(lv.labels || {}).map(function (k) { return { cell: k }; })).forEach(function (t) { m = Math.max(m, parseRef(t.cell).r); }); return m; }
    function maxCol(lv) { var m = 0; (lv.targets || []).concat(Object.keys(lv.labels || {}).map(function (k) { return { cell: k }; })).forEach(function (t) { m = Math.max(m, parseRef(t.cell).c + 1); }); return m; }

    UI.requireLogin(function () {
      var want = (location.hash || '').slice(1);
      var i = L.findIndex(function (lv) { return lv.id === want; });
      if (i >= 0) start(i); else menu();
    });
    return { menu: menu, start: start };
  }

  window.SHEET = { mount: mount, evaluate: function (f, data) { return evaluate(f, data && data.get ? data : makeGrid(data || [[]])); }, makeGrid: makeGrid, grade: gradeTarget, fmt: fmt };
})();
