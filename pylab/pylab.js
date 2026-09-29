/* =====================================================================
   🐍 Python 畢旅籌備處（pylab）── 和闖關網站完全分開的獨立版，兩種模式
   ---------------------------------------------------------------------
   PYLAB.mount('student')  index.html   學生版：填班級座號姓名、上一關 2⭐ 才開下一關、🧾 成績卡下載
   PYLAB.mount('teacher')  teacher.html 教師試用版：不用登入、10 關全開、每一關可以 📮 回報問題
   · 成績與草稿只存在這台電腦的瀏覽器（localStorage，pylab- 開頭；學生版依「班級_座號」分開存）
   · 評分和闖關網站一樣：程式在瀏覽器跑，輸出送到驗證伺服器比對（測資、提示都在伺服器，看不到）
   需要（依序載入）：config.js、api.js、pyrunner.js、levels.js（PY_LEVELS）
   ===================================================================== */
window.PYLAB = { mount: function (MODE) {
  var C = window.CONFIG, L = window.PY_LEVELS || [], TEACHER = MODE === 'teacher';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>'"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]; }); }
  function starsHTML(n) { var s = ''; for (var i = 0; i < 3; i++) s += i < n ? '★' : '<span class="off">★</span>'; return '<span class="stars" aria-label="' + (n || 0) + ' 顆星，共 3 顆">' + s + '</span>'; }
  var toastEl = null, toastTimer = null;
  function toast(msg, ms) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('on');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, ms || 2600);
  }
  /* 只存在這台電腦：最佳星數、草稿、回報者稱呼。學生版每位學生一組（pylab-s{班級}_{座號}-…） */
  var NS = TEACHER ? 'pylab-' : null, ME = null;
  function raw(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function get(k) { return raw(NS + k); }
  function set(k, v) { raw(NS + k, v); }
  function best(id) { return +(get('best-' + id) || 0); }
  function unlocked(i) { return TEACHER || i === 0 || best(L[i - 1].id) >= 2; }

  var root = document.getElementById('pylab');
  if (!TEACHER) return loginGate();
  build();

  /* ── 學生版：先填班級座號姓名（只存在這台電腦，換人按「換人」） ── */
  function loginGate() {
    try { ME = JSON.parse(raw('pylab-me') || 'null'); } catch (e) { ME = null; }
    if (ME && ME.cls && ME.seat && ME.name) { NS = 'pylab-s' + ME.cls + '_' + ME.seat + '-'; return build(); }
    root.innerHTML = '<section class="card pop login-card"><div class="tape"></div><p class="kicker">🐍 ' + esc(C.TITLE_STUDENT || C.TITLE) + '</p><h1 class="black" style="font-size:1.4rem">先告訴我你是誰</h1>' +
      '<p class="small soft mt1">成績只存在這台電腦的瀏覽器。換電腦或清除瀏覽紀錄就會不見，做完記得下載 🧾 成績卡交給老師。</p>' +
      '<form id="login" class="mt2" novalidate><div class="grid g3"><label class="small bold">班級<input class="input" id="in-cls" maxlength="8" inputmode="numeric" placeholder="例：901" required></label>' +
      '<label class="small bold">座號<input class="input" id="in-seat" maxlength="3" inputmode="numeric" placeholder="例：5" required></label>' +
      '<label class="small bold">姓名<input class="input" id="in-name" maxlength="12" placeholder="例：王小明" required></label></div>' +
      '<p id="login-err" class="small bold mt1" style="color:var(--bad)" aria-live="polite"></p><button class="btn go mt1">開始 ▶</button></form></section>';
    document.getElementById('login').onsubmit = function (e) {
      e.preventDefault();
      var cls = document.getElementById('in-cls').value.trim(), seat = document.getElementById('in-seat').value.trim().replace(/^0+(?=\d)/, ''), name = document.getElementById('in-name').value.trim();
      if (!/^[0-9A-Za-z一-鿿]{1,8}$/.test(cls) || !/^\d{1,3}$/.test(seat) || !name) { document.getElementById('login-err').textContent = '班級、座號（數字）、姓名都要填'; return; }
      ME = { cls: cls, seat: seat, name: name }; raw('pylab-me', JSON.stringify(ME));
      loginGate();
    };
    document.getElementById('in-cls').focus();
  }

  function build() {
  root.innerHTML =
    '<header class="topbar"><div><p class="kicker">' + (TEACHER ? '🧑‍🏫 教師試用版 · 10 關全部開放 · 不用登入' : '👤 ' + esc(ME.cls + ' 班 ' + ME.seat + ' 號 ' + ME.name) + ' <button class="btn sm" id="who-x" type="button">換人</button>') + '</p><h1 class="black" style="font-size:1.5rem">' + esc(TEACHER ? C.TITLE : (C.TITLE_STUDENT || C.TITLE)) + '</h1></div>' +
    '<span class="row" style="gap:.5rem">' + (C.REF_URL ? '<a class="btn sm" href="' + C.REF_URL + '" target="_blank" rel="noopener">📚 語法小抄</a>' : '') + '<span id="engine" class="engine">⏳ Python 引擎載入中…</span></span></header>' +
    (TEACHER ? '<div class="note small mt1">👋 謝謝老師幫忙試用！這是九年級「進入 Python 的世界」10 個任務，<b>評分方式和學生版一模一樣</b>（測資在伺服器，看不到）。' +
    '覺得測資太嚴／太鬆、題目看不懂、提示或錯誤說明怪怪的，請按每一關最下面的 <b>📮 回報問題</b>，會自動附上你的程式和評分結果。成績只存在這台電腦，不會影響任何學生。<br>🎒 學生用的版本：<a href="index.html">' + esc(location.href.replace(/teacher\.html.*$/, '')) + '</a>（要填班級座號、2⭐ 才開下一關）</div>' :
      '<p class="small soft">九年級「進入 Python 的世界」：幫畢旅籌備處寫 10 個小程式。寫完按「✅ 送出評分」，拿到 2⭐ 就開下一關。</p>') +
    '<div class="py-grid mt2"><aside class="card" style="padding:.8rem"><p class="kicker" style="margin:.2rem .2rem .6rem">任務清單' + (TEACHER ? '' : ' · 2⭐ 開下一關') + '</p>' +
    '<div class="lv-prog"><span>' + (TEACHER ? '我試過的' : '進度') + '</span><span id="lv-got"></span></div><div class="lv-bar"><i id="lv-bar"></i></div>' +
    '<nav id="lv-list" class="lv-list" aria-label="關卡"></nav>' +
    '<p class="tiny soft mt2" style="padding:0 .2rem">1⭐ 至少過一組測資<br>2⭐ 全部測資都過' + (TEACHER ? '（學生版要 2⭐ 才開下一關）' : '') + '<br>3⭐ 再加上程式結構要求</p>' +
    (TEACHER ? '' : '<button class="btn sm mt1" id="btn-card" type="button" style="width:100%">🧾 下載成績卡</button>') + '</aside>' +
    '<section id="stage" class="stack"></section></div>';
  if (!TEACHER) {
    document.getElementById('who-x').onclick = function () { if (confirm('換成另一位同學？（你的成績還會留在這台電腦）')) { raw('pylab-me', ''); location.reload(); } };
    document.getElementById('btn-card').onclick = scoreCard;
  }

  var cur = null, session = { inputs: [], seed: 116 }, running = false, lastGrade = null;

  /* ── 引擎 ── */
  var eng = document.getElementById('engine');
  PYRUN.onStatus(function (s, info) {
    if (s === 'loading') { eng.className = 'engine'; eng.textContent = '⏳ Python 引擎載入中…（第一次約 10 秒）'; }
    if (s === 'ready') { eng.className = 'engine ok'; eng.textContent = '✅ Python ' + info + ' 就緒'; setBusy(false); }
    if (s === 'fail') { eng.className = 'engine bad'; eng.textContent = '❌ 引擎載入失敗：請檢查網路後重新整理'; }
  });
  PYRUN.init(C.PYODIDE_URL).catch(function () {});

  /* ── 任務清單（全部開放） ── */
  function renderList() {
    document.getElementById('lv-list').innerHTML = L.map(function (lv, i) {
      var on = cur && cur.id === lv.id;
      var ok = unlocked(i);
      return '<button class="lv' + (on ? ' on' : '') + (ok ? '' : ' lock') + (best(lv.id) >= 2 ? ' done' : '') + '" data-i="' + i + '"' + (ok ? '' : ' aria-disabled="true"') + (on ? ' aria-current="step"' : '') + '>' +
        '<span class="no">' + (i + 1) + '</span><span class="ic">' + (ok ? lv.icon : '🔒') + '</span><span class="bd"><span class="tt">' + esc(lv.title) + '</span><span class="st">' + starsHTML(best(lv.id)) + '</span></span></button>';
    }).join('');
    var got = L.reduce(function (a, lv) { return a + best(lv.id); }, 0), max = L.length * 3;
    document.getElementById('lv-got').textContent = got + ' / ' + max + ' ⭐';
    document.getElementById('lv-bar').style.width = Math.round(got / max * 100) + '%';
  }
  document.getElementById('lv-list').addEventListener('click', function (e) {
    var b = e.target.closest('.lv'); if (!b) return;
    if (!unlocked(+b.dataset.i)) return toast('先在上一關拿到 2 顆星，這一關才會開放');
    open(+b.dataset.i);
  });

  /* ── 關卡畫面 ── */
  function open(i) {
    cur = L[i]; lastGrade = null;
    session = { inputs: [], seed: Math.floor(Math.random() * 1e6) };
    try { history.replaceState(null, '', '#' + cur.id); } catch (e) {}
    renderList();
    var lv = cur, draft = get('draft-' + lv.id);
    document.getElementById('stage').innerHTML =
      '<article class="card pop"><div class="tape"></div>' +
      '<div class="row between"><div class="row"><span style="font-size:2.2rem">' + lv.icon + '</span><div>' +
      '<p class="kicker">任務 ' + (i + 1) + ' / ' + L.length + ' · ' + esc(lv.book) + '</p><h2 class="black" style="font-size:1.5rem">' + esc(lv.title) + '</h2></div></div>' +
      '<div class="center"><span class="chip">' + esc(lv.concept) + '</span><div class="mt1" id="lv-best">' + starsHTML(best(lv.id)) + '</div></div></div>' +
      '<p class="mt2">' + lv.story + '</p>' +
      '<div class="grid g2 mt2"><div><h3 class="bold small soft">📋 任務說明</h3><ol class="small" style="margin:.4rem 0 0;padding-left:1.3rem">' +
      lv.task.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol></div>' +
      '<div><h3 class="bold small soft">🖥️ 執行起來像這樣</h3><div class="sample mt1">' + sampleHTML(lv.sample) + '</div>' +
      (lv.sample.inputs.length ? '<p class="tiny soft mt1"><span class="io-in">黃色</span>是使用者打的字</p>' : '') + '</div></div>' +
      '<details class="mt2"><summary class="bold small" style="cursor:pointer">🐱 和 Scratch 積木對照</summary><div class="scroll-x mt1"><table class="t map-t"><tr><th>Scratch 積木</th><th>Python</th></tr>' +
      lv.scratch.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table></div></details>' +
      (!TEACHER ? '' : '<p class="small mt2">🧪 評分測資：' + lv.tests.length + ' 組（公開 ' + lv.tests.filter(function (t) { return !t.hidden; }).length + ' 組、隱藏 ' + lv.tests.filter(function (t) { return t.hidden; }).length + ' 組）' +
      (lv.req && lv.req.length ? '　·　3⭐ 結構要求：' + lv.req.map(function (q) { return esc(q.msg); }).join('、') : '') + '</p>') +
      '<div class="row mt1"><button class="btn sm" id="btn-hint">💡 提示（0 / ' + (lv.hn || 0) + '）</button></div><div id="hints" class="stack mt1"></div></article>' +
      '<article class="card"><div class="row between"><h3 class="bold">✏️ 程式</h3><span class="tiny soft">Tab 縮排 4 格 · Ctrl＋Enter 試跑</span></div>' +
      '<div class="ed mt1"><div class="gut" id="gut">1</div><textarea id="code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Python 程式碼"></textarea></div>' +
      '<p id="fw" class="small bold mt1" style="color:var(--warn);min-height:1.3em" aria-live="polite"></p>' +
      '<div class="row"><button class="btn primary" id="btn-run" disabled>▶ 試跑</button><button class="btn go" id="btn-grade" disabled>✅ 送出評分</button>' +
      '<button class="btn sm" id="btn-reset" style="margin-left:auto">↺ 回到範本</button></div></article>' +
      '<article class="card"><div class="row between"><h3 class="bold">🖥️ 執行結果</h3><span id="run-note" class="tiny soft"></span></div>' +
      '<div id="console" class="console mt1" aria-live="polite">按「▶ 試跑」看看程式會做什麼。</div><div id="err" class="mt1"></div></article>' +
      '<article class="card hidden" id="result"></article>' +
      (TEACHER ? feedbackHTML(lv) : '');

    var ta = document.getElementById('code');
    ta.value = draft != null ? draft : lv.starter;
    bindEditor(ta);
    document.getElementById('btn-run').onclick = function () { tryRun(true); };
    document.getElementById('btn-grade').onclick = grade;
    document.getElementById('btn-reset').onclick = function () { if (confirm('要把程式換回範本嗎？（目前寫的會不見）')) { ta.value = lv.starter; onEdit(); } };
    var shown = 0, nHint = lv.hn || 0, hb = document.getElementById('btn-hint'), asking = false;
    if (!nHint) hb.disabled = true;
    hb.onclick = function () {
      if (shown >= nHint || asking) return;
      asking = true;
      API.call('hint', { kind: 'py', lv: lv.id, i: shown }).then(function (r) {
        asking = false;
        var d = document.createElement('div'); d.className = 'hint small pop';
        d.innerHTML = '<b>提示 ' + (shown + 1) + '：</b>' + esc(r.hint);
        document.getElementById('hints').appendChild(d);
        shown++; hb.textContent = '💡 提示（' + shown + ' / ' + nHint + '）';
        if (shown >= nHint) hb.disabled = true;
      }, function (e) { asking = false; toast(API.msg(e)); });
    };
    if (TEACHER) bindFeedback(lv);
    if (PYRUN.ready()) PYRUN.ready().then(function () { setBusy(false); }, function () {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function sampleHTML(s) {
    var html = esc(s.output), k = 0;
    s.inputs.forEach(function (v) { var at = html.indexOf(esc(v), k); if (at >= 0) { html = html.slice(0, at) + '<span class="io-in">' + esc(v) + '</span>' + html.slice(at + esc(v).length); k = at + 30; } });
    return html;
  }

  /* ── 編輯器 ── */
  var saveTimer = null, errLine = null;
  function bindEditor(ta) {
    ta.addEventListener('input', onEdit);
    ta.addEventListener('scroll', function () { document.getElementById('gut').scrollTop = ta.scrollTop; });
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); tryRun(true); return; }
      var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
      if (e.key === 'Tab') {
        e.preventDefault();
        var ls = v.lastIndexOf('\n', s - 1) + 1;
        if (e.shiftKey) { var m = /^ {1,4}/.exec(v.slice(ls)); if (m) { ta.value = v.slice(0, ls) + v.slice(ls + m[0].length); ta.selectionStart = ta.selectionEnd = Math.max(ls, s - m[0].length); } }
        else { ta.value = v.slice(0, s) + '    ' + v.slice(en); ta.selectionStart = ta.selectionEnd = s + 4; }
        onEdit();
      } else if (e.key === 'Enter') {
        var lineStart = v.lastIndexOf('\n', s - 1) + 1, line = v.slice(lineStart, s), ind = (/^ */.exec(line) || [''])[0];
        if (/:\s*$/.test(line)) ind += '    ';
        e.preventDefault(); ta.value = v.slice(0, s) + '\n' + ind + v.slice(en); ta.selectionStart = ta.selectionEnd = s + 1 + ind.length;
        onEdit();
      }
    });
    onEdit(true);
  }
  function onEdit(first) {
    var ta = document.getElementById('code'); if (!ta) return;
    if (first !== true) errLine = null;
    drawGutter();
    var fw = PYRUN.fullwidthOutsideStrings(ta.value);
    document.getElementById('fw').textContent = fw.length ? '⚠️ 第 ' + fw[0].line + ' 行有全形符號「' + fw[0].ch + '」—— 程式符號要用半形' : '';
    clearTimeout(saveTimer); saveTimer = setTimeout(function () { set('draft-' + cur.id, ta.value); }, 400);
  }
  function drawGutter() {
    var ta = document.getElementById('code'), n = ta.value.split('\n').length, s = [];
    for (var i = 1; i <= n; i++) s.push(i === errLine ? '<b>' + i + '</b>' : i);
    var g = document.getElementById('gut'); g.innerHTML = s.join('\n'); g.scrollTop = ta.scrollTop;
  }
  function setBusy(b) {
    running = b;
    ['btn-run', 'btn-grade'].forEach(function (id) { var el = document.getElementById(id); if (el) el.disabled = b || !(eng.className.indexOf('ok') >= 0); });
  }

  /* ── 試跑 ── */
  function tryRun(fresh) {
    if (running) return;
    var code = document.getElementById('code').value;
    if (fresh) session.inputs = [];
    setBusy(true); document.getElementById('run-note').textContent = '執行中…';
    PYRUN.run(code, session.inputs, { seed: session.seed }).then(function (r) {
      setBusy(false);
      document.getElementById('run-note').textContent = r.need ? '程式在等你輸入 ↓' : '執行完畢';
      renderConsole(r, !r.need); showError(r.error, code);
    });
  }
  function renderConsole(r, animate) {
    var box = document.getElementById('console'), evs = r.events || [], hasSleep = animate && evs.some(function (e) { return e[0] === 'sleep'; });
    function html(list) { return list.map(function (ev) { if (ev[0] === 'out') return esc(ev[1]); if (ev[0] === 'prompt') return '<span class="io-prompt">' + esc(ev[1]) + '</span>'; if (ev[0] === 'in') return '<span class="io-in">' + esc(ev[1]) + '</span>\n'; return ''; }).join(''); }
    function tail() {
      if (r.need) {
        box.insertAdjacentHTML('beforeend', '<input id="stdin" aria-label="輸入" placeholder="在這裡輸入，按 Enter">');
        var inp = document.getElementById('stdin'); inp.focus();
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { session.inputs.push(inp.value); tryRun(false); } });
      } else if (!evs.length && !r.error) box.innerHTML = '<span style="color:#94a3b8">（程式執行完了，但沒有顯示任何東西）</span>';
    }
    if (!hasSleep) { box.innerHTML = html(evs); tail(); return; }
    box.innerHTML = ''; var k = 0;
    (function step() { var chunk = []; while (k < evs.length && evs[k][0] !== 'sleep') chunk.push(evs[k++]); box.insertAdjacentHTML('beforeend', html(chunk)); if (k < evs.length) { k++; setTimeout(step, 400); } else tail(); })();
  }
  function showError(err, code) {
    var box = document.getElementById('err'), ex = PYRUN.explain(err, code);
    errLine = ex && ex.line ? ex.line : null; drawGutter();
    box.innerHTML = ex ? '<div class="note bad pop errbox"><b>' + esc(ex.title) + '</b>' +
      (ex.yours != null && ex.yours.trim() ? '<div class="errrow mt1"><div class="lbl">第 ' + ex.line + ' 行</div><pre class="ecode ebad"><span class="ln">' + ex.line + '</span>' + esc(ex.yours) + '</pre></div>' +
        (ex.fixed != null ? '<div class="errrow"><div class="lbl">✅ 可以改成</div><pre class="ecode egood"><span class="ln">' + ex.line + '</span>' + esc(ex.fixed) + '</pre></div>' : '') : '') +
      '<p class="small mt1">💡 ' + esc(ex.tip) + '</p><details class="tiny soft mt1"><summary>Python 的原始訊息（英文）</summary><code>' + esc(ex.raw) + '</code></details></div>' : '';
  }

  /* ── 評分（和學生版同一套：伺服器比對） ── */
  function grade() {
    if (running) return;
    var code = document.getElementById('code').value, lv = cur;
    if (code.trim() === lv.starter.trim()) { toast('先寫一點程式再送出吧！'); return; }
    setBusy(true);
    var res = document.getElementById('result'); res.classList.remove('hidden');
    res.innerHTML = '<p class="bold">⏳ 評分中…（' + lv.tests.length + ' 組測資）</p>';
    var before = best(lv.id), idx = L.indexOf(lv);
    PYRUN.grade(lv, code, { mod: TEACHER ? 'pylab-teacher' : 'pylab', who: ME }).then(function (g) {
      setBusy(false);
      if (!g.offline && g.stars > best(lv.id)) set('best-' + lv.id, g.stars);
      if (!TEACHER && !g.offline) set('code-' + lv.id, code.slice(0, 4000));
      renderList(); document.getElementById('lv-best').innerHTML = starsHTML(best(lv.id));
      var firstErr = g.tests.filter(function (t) { return t.error; })[0];
      showError(firstErr ? firstErr.error : null, code);
      lastGrade = { stars: g.stars, passed: g.passed, total: g.total, offline: !!g.offline,
        fails: g.tests.map(function (t, i) { return t.pass ? null : (i + 1) + '. ' + t.test.name + '：' + (t.error ? PYRUN.explain(t.error, code).title : (t.msg || '輸出和預期不一樣')); }).filter(Boolean),
        reqs: g.reqs.filter(function (r) { return !r.ok; }).map(function (r) { return r.req.msg; }) };
      var rows = g.tests.map(function (t, i) {
        var tt = t.test, why = t.pass ? '' : t.error ? PYRUN.explain(t.error, code).title : (t.msg || (tt.hidden ? '再想想特殊情況' : '輸出和預期不一樣'));
        var inp = tt.hidden ? '🔒 隱藏' : ((tt.inputs || []).length ? tt.inputs.map(esc).join('、') : '（沒有輸入）');
        var out = tt.hidden || !t.run.events ? '' : '<details class="tiny"><summary>看輸出</summary><div class="sample mt1">' + esc(PYRUN.transcript(t.run.events)) + '</div></details>';
        return '<tr><td>' + (i + 1) + '. ' + esc(tt.name) + '</td><td>' + inp + '</td><td>' + (t.pass == null ? '<span class="soft">📴 沒有判斷</span>' : t.pass ? '<span class="ok-c">✔ 通過</span>' : '<span class="bad-c">✘</span> <span class="small">' + esc(why) + '</span>') + out + '</td></tr>';
      }).join('');
      var reqs = g.reqs.map(function (r) { return '<li>' + (r.ok ? '<span class="ok-c">✔</span> ' : '<span class="bad-c">✘</span> ') + esc(r.req.msg) + '</li>'; }).join('');
      var N = L[idx + 1], openedNext = !TEACHER && N && before < 2 && best(lv.id) >= 2;
      res.innerHTML = '<div class="row between"><div><p class="kicker">評分結果' + (TEACHER ? '（和學生看到的一樣）' : '') + '</p><div class="res-star">' + starsHTML(g.stars) + '</div>' +
        '<p class="bold">' + (g.offline ? '📴 連不上驗證伺服器：只跑了公開的範例測資，沒有判斷。' : g.stars === 3 ? '🎉 滿分。' : g.stars === 2 ? '👍 測資全過，差結構要求。' : g.stars === 1 ? '💪 過了一部分。' : '🧐 還沒有任何一組通過。') + '</p></div>' +
        '<div class="center"><div class="black" style="font-size:2rem">' + g.passed + ' / ' + g.total + '</div><div class="tiny soft bold">組測資通過</div></div></div>' +
        '<div class="scroll-x mt2"><table class="t"><tr><th>測資</th><th>輸入</th><th>結果</th></tr>' + rows + '</table></div>' +
        (reqs ? '<h4 class="bold small mt2">🏗️ 程式結構要求（3 星條件）</h4><ul class="small" style="margin:.3rem 0 0;padding-left:1.2rem;list-style:none">' + reqs + '</ul>' : '') +
        (TEACHER ? '<p class="small mt2">評分結果和你想的不一樣？👉 <a href="#fb" id="to-fb">📮 回報問題</a>（會自動附上這次的結果）</p>' :
          (best(lv.id) >= 2 && N ? '<div class="row mt2"><button class="btn primary" id="btn-next">' + (openedNext ? '🔓 下一關已開放：' : '下一關：') + esc(N.icon + ' ' + N.title) + ' →</button></div>' :
           best(lv.id) >= 2 && !N ? '<div class="note ok mt2"><b>🏆 你打倒魔王了！</b> 10 關全部完成，記得按左邊的「🧾 下載成績卡」交給老師。</div>' :
           '<p class="small soft mt2">拿到 2⭐（全部測資通過）就能開下一關。卡住了？按上面的「💡 提示」。</p>'));
      if (TEACHER) document.getElementById('to-fb').onclick = function (e) { e.preventDefault(); var f = document.getElementById('fb'); f.open = true; f.scrollIntoView({ behavior: 'smooth' }); document.getElementById('fb-msg').focus(); };
      var nb = document.getElementById('btn-next'); if (nb) nb.onclick = function () { open(idx + 1); };
      if (openedNext) toast('🔓 下一關開放了：' + N.title);
      res.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, function (e) { setBusy(false); res.innerHTML = '<div class="note bad">⚠️ ' + esc(API.msg(e)) + '</div>'; });
  }

  /* ── 📮 回報問題：自動附上關卡、程式碼、最近一次評分結果 → 驗證伺服器 → 老師的 Google 試算表 ── */
  var KINDS = [['strict', '測資太嚴（程式對卻沒過）'], ['loose', '測資太鬆（程式錯卻過了）'], ['task', '題目或範例看不懂'], ['hint', '提示不好用'], ['error', '錯誤說明怪怪的'], ['other', '其他建議']];
  function feedbackHTML(lv) {
    return '<details class="card fb-card" id="fb"><summary class="bold" style="cursor:pointer">📮 回報問題給' + esc(C.AUTHOR || '出題老師') + '（任務 ' + esc(lv.id) + '）</summary>' +
      '<div class="mt1"><p class="bold small">哪一類？</p><div class="fb-kinds">' + KINDS.map(function (k, i) { return '<label class="chip fb-k"><input type="radio" name="fb-kind" value="' + k[0] + '"' + (i === 0 ? ' checked' : '') + '> ' + k[1] + '</label>'; }).join('') + '</div>' +
      '<label class="small bold mt1" for="fb-msg" style="display:block">說明（哪一組測資、你覺得應該怎樣）</label><textarea id="fb-msg" class="input" rows="3" maxlength="1000" placeholder="例：輸入 0 的時候，我的程式印「免費」，但被判錯；題目沒有說 0 要怎麼處理。"></textarea>' +
      '<div class="grid g2 mt1"><label class="small bold">稱呼（選填）<input id="fb-who" class="input" maxlength="40" placeholder="例：王老師"></label><label class="small bold">學校／聯絡方式（選填）<input id="fb-from" class="input" maxlength="80" placeholder="例：XX 國中、email"></label></div>' +
      '<label class="small mt1" style="display:block"><input type="checkbox" id="fb-code" checked> 附上我目前的程式碼和最近一次評分結果</label>' +
      '<div class="row mt1"><button class="btn go" id="fb-send">📮 送出回報</button><span id="fb-note" class="small" aria-live="polite"></span></div></div></details>';
  }
  function bindFeedback(lv) {
    var who = document.getElementById('fb-who'), from = document.getElementById('fb-from');
    who.value = get('who') || ''; from.value = get('from') || '';
    who.oninput = function () { set('who', who.value); }; from.oninput = function () { set('from', from.value); };
    document.getElementById('fb-send').onclick = function () {
      var btn = this, note = document.getElementById('fb-note'), msg = document.getElementById('fb-msg').value.trim();
      if (msg.length < 4) { note.textContent = '請寫一句說明（哪裡有問題、你覺得應該怎樣）'; return; }
      var kind = (document.querySelector('input[name="fb-kind"]:checked') || {}).value || 'other';
      var withCode = document.getElementById('fb-code').checked;
      var body = { lv: lv.id, kind: kind, msg: msg, who: who.value.trim(), from: from.value.trim(),
        code: withCode ? document.getElementById('code').value.slice(0, 5000) : '', result: withCode && lastGrade ? lastGrade : null, ua: navigator.userAgent.slice(0, 160) };
      btn.disabled = true; note.textContent = '⏳ 送出中…';
      API.call('fb', body).then(function () {
        btn.disabled = false; note.innerHTML = '<span class="ok-c">✅ 收到了，謝謝老師！</span>'; document.getElementById('fb-msg').value = '';
      }, function (e) {   // 伺服器還沒設定好或連不上：改成複製，老師可以用 email／LINE 傳
        btn.disabled = false;
        var text = '【Python 教師試用版回報】任務 ' + lv.id + '（' + lv.title + '）\n類別：' + KINDS.filter(function (k) { return k[0] === kind; })[0][1] + '\n說明：' + msg +
          '\n稱呼：' + body.who + '　學校／聯絡：' + body.from + (body.result ? '\n評分：' + body.result.stars + '⭐，' + body.result.passed + '/' + body.result.total + ' 組通過\n' + body.result.fails.join('\n') : '') + (body.code ? '\n--- 程式 ---\n' + body.code : '');
        note.innerHTML = '⚠️ 送不出去（' + esc(API.msg(e)) + '）。<button class="btn sm" id="fb-copy">📋 複製回報內容</button> 再用 email 或 LINE 傳給' + esc(C.AUTHOR || '出題老師');
        document.getElementById('fb-copy').onclick = function () {
          (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { toast('已複製'); }, function () { window.prompt('複製下面的內容：', text); });
        };
      });
    };
  }

  /* ── 進場：網址 #P3 直接開那一關（要已經開放）；學生版預設開最新開放的那一關 ── */
  var want = (location.hash || '').slice(1), hi = L.findIndex(function (lv) { return lv.id === want; }), start = 0;
  L.forEach(function (lv, i) { if (unlocked(i)) start = i; });
  if (TEACHER) start = 0;
  if (hi >= 0 && unlocked(hi)) start = hi;
  renderList(); open(start);
  }   // build()

  /* ── 🧾 學生版成績卡（PNG）：姓名、每一關的星星、日期 → 下載交給老師 ── */
  function scoreCard() {
    var W = 900, H = 170 + L.length * 44 + 90, cv = document.createElement('canvas'), x = cv.getContext('2d'), F = '"Noto Sans TC","Microsoft JhengHei",sans-serif';
    cv.width = W; cv.height = H;
    x.fillStyle = '#f0fdf4'; x.fillRect(0, 0, W, H);
    x.fillStyle = '#15803d'; x.fillRect(0, 0, W, 96);
    x.fillStyle = '#fff'; x.font = '900 32px ' + F; x.fillText('🐍 ' + (C.TITLE_STUDENT || C.TITLE), 32, 60);
    x.fillStyle = '#0f172a'; x.font = '800 26px ' + F; x.fillText(ME.cls + ' 班　' + ME.seat + ' 號　' + ME.name, 32, 140);
    var total = 0;
    L.forEach(function (lv, i) {
      var s = best(lv.id), y = 190 + i * 44; total += s;
      x.fillStyle = i % 2 ? '#ffffff' : '#dcfce7'; x.fillRect(24, y - 30, W - 48, 42);
      x.fillStyle = '#0f172a'; x.font = '700 21px ' + F; x.fillText((i + 1) + '. ' + lv.title, 40, y);
      x.fillStyle = s ? '#b45309' : '#94a3b8'; x.font = '800 22px ' + F; x.fillText(s ? '★'.repeat(s) + '☆'.repeat(3 - s) : '尚未完成', W - 190, y);
    });
    x.fillStyle = '#15803d'; x.font = '900 24px ' + F; x.fillText('合計 ' + total + ' / ' + L.length * 3 + ' ⭐', 32, H - 36);
    x.fillStyle = '#64748b'; x.font = '700 16px ' + F; x.textAlign = 'right'; x.fillText(new Date().toLocaleString('zh-TW'), W - 32, H - 36);
    cv.toBlob(function (b) {
      var u = URL.createObjectURL(b), a = document.createElement('a');
      a.download = 'Python成績卡-' + ME.cls + '_' + ME.seat + '_' + ME.name + '.png'; a.href = u;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(u); }, 4000);
      toast('🧾 成績卡已下載，交給老師吧！');
    }, 'image/png');
  }
} };
