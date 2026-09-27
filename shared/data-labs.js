/* =====================================================================
   🧪 資料偵探・視覺化實驗站（CARDGAME.labs）── D1～D3 三星三階的「操作」「挑戰」
   ---------------------------------------------------------------------
   dataToInfo（D1 資料 → 資訊）、cleanLab（D2 資料清潔隊）、rleLab（D3 無失真壓縮：連續長度編碼）
   D4 密碼特務入門用 shared/cipher-gen.js 的出題器。
   情境每次隨機產生，按「確認」時照規則計算判斷，原始碼裡沒有答案清單。
   el.dataset 只放「題目」，給測試的解題器看。
   ===================================================================== */
(function () {
  function rnd(n) { try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }
  function pick(a) { return a[rnd(a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return UI.esc(s); }
  function tip(api, t) { return api.practice ? '<div class="note small mt1">💡 提示：' + esc(t) + '</div>' : ''; }
  function warn(api, t) { api.say('<div class="note warn small">' + esc(t) + '</div>'); }
  var NAMES = ['小安', '阿哲', '小雯', '柏宇', '若晴', '子涵', '冠廷', '雅婷', '承恩', '品妍', '宥辰', '芷若'];
  var L = {};

  /* =================================================================
     🔎 資料 → 資訊（D1）：一堆原始數字，整理出能做決定的資訊
     基本：體溫紀錄 → 幾人發燒、最高是誰、要不要通報
     挑戰：兩週步數 → 各週平均、成長幾 %、結論
     ================================================================= */
  L.dataToInfo = function (el, api) {
    el.dataset.lab = 'dataToInfo';
    var q, table, ask;
    if (!api.hard) {
      var n = between(7, 9), names = shuffle(NAMES).slice(0, n), temps, fever;
      for (;;) {
        temps = names.map(function () { return (363 + rnd(20)) / 10; });   // 36.3～38.2
        fever = temps.filter(function (t) { return t >= 37.5; }).length;
        var mx = Math.max.apply(null, temps);
        if (temps.filter(function (t) { return t === mx; }).length === 1) break;
      }
      table = '<table class="t mono di-t"><tr><th>座號</th><th>姓名</th><th>體溫 °C</th></tr>' + names.map(function (nm, i) { return '<tr><td>' + (i + 1) + '</td><td>' + nm + '</td><td>' + temps[i].toFixed(1) + '</td></tr>'; }).join('') + '</table>';
      ask = [{ k: 'fever', t: '體溫 37.5°C（含）以上算發燒，有幾人發燒？', inp: 'num' },
        { k: 'max', t: '體溫最高的是幾號？', inp: 'num' },
        { k: 'act', t: '所以，今天要不要通報？', inp: 'yn' }];
      q = { temps: temps };
      el.dataset.d = JSON.stringify({ kind: 'temp', temps: temps });
      var calc = { fever: fever, max: temps.indexOf(Math.max.apply(null, temps)) + 1, act: fever > 0 ? 'y' : 'n' };
    } else {
      var w1, w2, a1, a2, pct;
      for (;;) {   // 兩週各 7 天；平均是整數、成長率算得出來
        w1 = []; w2 = []; for (var d = 0; d < 7; d++) { w1.push(between(40, 90) * 100); w2.push(between(40, 90) * 100); }
        var s1 = w1.reduce(function (a, b) { return a + b; }, 0), s2 = w2.reduce(function (a, b) { return a + b; }, 0);
        if (s1 % 7 || s2 % 7) continue;
        a1 = s1 / 7; a2 = s2 / 7; pct = Math.round((a2 - a1) / a1 * 100);
        if (Math.abs(pct) >= 3) break;
      }
      var days = ['一', '二', '三', '四', '五', '六', '日'];
      table = '<div class="scroll-x"><table class="t mono di-t"><tr><th>哪一週</th>' + days.map(function (x) { return '<th>週' + x + '</th>'; }).join('') + '</tr>' +
        '<tr><th>上週</th>' + w1.map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr><tr><th>這週</th>' + w2.map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr></table></div>';
      ask = [{ k: 'a1', t: '上週平均每天走幾步？', inp: 'num' }, { k: 'a2', t: '這週平均每天走幾步？', inp: 'num' },
        { k: 'pct', t: '這週比上週多（或少）幾 %？（少了就打負的，四捨五入到整數）', inp: 'num' },
        { k: 'act', t: '結論：這週運動量有沒有比上週多？', inp: 'yn' }];
      el.dataset.d = JSON.stringify({ kind: 'steps', w1: w1, w2: w2 });
      calc = { a1: a1, a2: a2, pct: pct, act: a2 > a1 ? 'y' : 'n' };
    }
    el.innerHTML = '<div class="di"><p class="small">左邊是一堆<b>原始資料</b>：看不出結論。把它整理、計算，變成<b>能幫我們做決定的資訊</b>。</p>' +
      tip(api, api.hard ? '平均 ＝ 七天加起來 ÷ 7；成長率 ＝（這週 − 上週）÷ 上週 × 100。' : '一個一個看，37.5 以上的就數 1。') +
      '<div class="di-grid"><div>' + table + '</div><div class="stack">' + ask.map(function (a, i) {
        return '<div class="card soft-bg" style="padding:.55rem .75rem"><p class="small bold">' + (i + 1) + '. ' + esc(a.t) + '</p><div class="mt1">' +
          (a.inp === 'yn' ? '<span class="row" style="gap:.3rem"><button type="button" class="btn sm di-yn" data-k="' + a.k + '" data-v="y">' + (api.hard ? '📈 有' : '📢 要通報') + '</button><button type="button" class="btn sm di-yn" data-k="' + a.k + '" data-v="n">' + (api.hard ? '📉 沒有' : '🙆 不用') + '</button></span>'
            : '<input class="input di-n" data-k="' + a.k + '" inputmode="numeric" style="max-width:9rem;margin:0" aria-label="' + esc(a.t) + '">') + '</div></div>';
      }).join('') + '</div></div><div class="row mt2"><button type="button" class="btn go" id="di-ok">✅ 確認</button></div></div>';
    var yn = {};
    el.querySelectorAll('.di-yn').forEach(function (b) { b.onclick = function () { yn[b.dataset.k] = b.dataset.v; el.querySelectorAll('.di-yn[data-k="' + b.dataset.k + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    el.querySelector('#di-ok').onclick = function () {
      var got = {};
      for (var i = 0; i < ask.length; i++) {
        var a = ask[i];
        if (a.inp === 'yn') { if (!yn[a.k]) return warn(api, '每一題都要作答'); got[a.k] = yn[a.k]; }
        else { var v = el.querySelector('.di-n[data-k="' + a.k + '"]').value.trim().replace('%', '').replace('−', '-'); if (v === '') return warn(api, '每一題都要作答'); got[a.k] = +v; }
      }
      var H = { fever: ['發燒人數不對。', '37.5 也算發燒（含）。'], max: ['體溫最高的不是這一號。', '從上到下比一遍，記住最大的。'], act: ['結論和你算出來的資訊對不上。', api.hard ? '平均變大就是有比較多。' : '有人發燒就要通報。'],
        a1: ['上週平均算錯了。', '七天加起來再除以 7。'], a2: ['這週平均算錯了。', '七天加起來再除以 7。'], pct: ['成長率算錯了。', '（這週 − 上週）÷ 上週 × 100，四捨五入；變少就是負的。'] };
      for (i = 0; i < ask.length; i++) { var k = ask[i].k; if (got[k] !== calc[k]) return api.submit(false, (i + 1) + '. ' + H[k][0], H[k][1]); }
      api.submit(true, api.hard ? '一串步數（資料）→ 平均、成長率（資訊）→「運動量變多了」（可以拿來做判斷）。' : '一串體溫（資料）→「' + calc.fever + ' 人發燒」（資訊）→ 決定要不要通報。整理過、能幫忙做決定的，才是資訊。');
    };
  };

  /* =================================================================
     🧹 資料清潔隊（D2）
     基本：每一筆會員資料判斷問題：正常／不完整／有雜訊／格式不一致
     挑戰：真的動手清：有雜訊的刪除、漏填成績用平均填補、日期統一成 YYYY/M/D
     ================================================================= */
  var BAD = ['miss', 'noise', 'fmt'], LAB = { ok: '✅ 正常', miss: '🕳️ 不完整', noise: '⚡ 有雜訊', fmt: '🔀 格式不一致' };
  function mkDate() { return { y: between(1995, 2012), m: between(1, 12), d: between(1, 28) }; }
  function std(dt) { return dt.y + '/' + dt.m + '/' + dt.d; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function oddFmt(dt) { return pick([dt.y + '.' + pad2(dt.m) + '.' + pad2(dt.d), dt.y + '-' + pad2(dt.m) + '-' + pad2(dt.d), dt.y + '年' + dt.m + '月' + dt.d + '日']); }
  L.cleanLab = function (el, api) {
    el.dataset.lab = 'cleanLab';
    var n = api.hard ? 7 : 6, rows = [], kinds;
    if (!api.hard) {
      kinds = shuffle(['ok', 'miss', 'noise', 'fmt'].concat([pick(BAD), pick(['ok'].concat(BAD))])).slice(0, n);
      kinds.forEach(function (k, i) {
        var dt = mkDate(), r = { name: NAMES[i], birth: std(dt), phone: '09' + String(between(10000000, 99999999)), age: 2026 - dt.y };
        if (k === 'miss') r[pick(['phone', 'birth'])] = '';
        if (k === 'noise') { var how = rnd(3); if (how === 0) r.age = between(150, 230); else if (how === 1) r.phone = r.phone + between(0, 9); else { r.birth = std({ y: between(1860, 1890), m: dt.m, d: dt.d }); r.age = 2026 - +r.birth.split('/')[0]; } }
        if (k === 'fmt') r.birth = oddFmt(dt);
        rows.push(r);
      });
      el.dataset.rows = JSON.stringify(rows);
      el.innerHTML = '<div class="cl"><p class="small">會員資料要拿來分析之前，先檢查每一筆：它有什麼問題？</p>' +
        tip(api, '空白＝不完整；不可能的數值（200 歲、11 碼手機、一百多年前出生）＝雜訊；同一種資料寫法不同＝格式不一致。') +
        '<div class="scroll-x"><table class="t cl-t"><tr><th>姓名</th><th>年齡</th><th>生日</th><th>手機</th><th>這一筆…</th></tr>' + rows.map(function (r, i) {
          return '<tr><td>' + r.name + '</td><td class="mono">' + r.age + '</td><td class="mono">' + (r.birth || '<i class="cl-empty">（空白）</i>') + '</td><td class="mono">' + (r.phone || '<i class="cl-empty">（空白）</i>') + '</td><td><span class="pb-opts">' +
            Object.keys(LAB).map(function (k) { return '<button type="button" class="btn sm cl-k" data-i="' + i + '" data-k="' + k + '">' + LAB[k] + '</button>'; }).join('') + '</span></td></tr>';
        }).join('') + '</table></div><div class="row mt2"><button type="button" class="btn go" id="cl-ok">✅ 確認</button></div></div>';
      var mark = {};
      el.querySelectorAll('.cl-k').forEach(function (b) { b.onclick = function () { mark[b.dataset.i] = b.dataset.k; el.querySelectorAll('.cl-k[data-i="' + b.dataset.i + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
      el.querySelector('#cl-ok').onclick = function () {
        if (Object.keys(mark).length < rows.length) return warn(api, '每一筆都要判斷');
        for (var i = 0; i < rows.length; i++) {
          var k = judge(rows[i]);
          if (mark[i] !== k) return api.submit(false, rows[i].name + ' 這一筆判斷得不對。', k === 'ok' ? '仔細看，每一欄都合理嗎？都合理就是正常。' : { miss: '有欄位是空白的。', noise: '有一個數值不可能是真的。', fmt: '生日的寫法和其他人不一樣。' }[k]);
        }
        api.submit(true, '找出問題之後，才知道要刪除、填補還是轉換 —— 這就是「資料前處理」。');
      };
      return;
    }
    /* 挑戰：成績單清理 */
    var scores = [], i2, others;
    for (;;) {
      scores = []; for (i2 = 0; i2 < n; i2++) scores.push(between(55, 98));
      var missI = rnd(n), noiseI = (missI + 1 + rnd(n - 1)) % n; others = scores.filter(function (_, j) { return j !== missI && j !== noiseI; });
      if (others.reduce(function (a, b) { return a + b; }, 0) % others.length === 0) break;
    }
    var fmtIs = shuffle(scores.map(function (_, j) { return j; }).filter(function (j) { return j !== missI && j !== noiseI; })).slice(0, 2);
    rows = scores.map(function (s, j) { var dt = mkDate(); dt.y = 2026; dt.m = between(3, 5); return { name: NAMES[j], score: j === missI ? '' : j === noiseI ? between(150, 400) : s, date: fmtIs.indexOf(j) >= 0 ? oddFmt(dt) : std(dt), std: std(dt) }; });
    el.dataset.rows = JSON.stringify(rows.map(function (r) { return { name: r.name, score: r.score, date: r.date }; }));
    el.innerHTML = '<div class="cl"><p class="small">這是全班小考成績（滿分 100），要算平均之前先清理：每一筆選一個處理方式，需要的話填上新的值。</p>' +
      '<div class="note small">規則：<b>有雜訊</b>的整筆刪除；<b>漏登成績</b>用其他（刪除後剩下的）同學的平均填補；<b>日期</b>統一寫成 <code>2026/4/2</code> 這種格式。</div>' +
      tip(api, '先找出不可能的分數（超過 100）刪掉，再用剩下有分數的同學算平均。') +
      '<div class="scroll-x"><table class="t cl-t"><tr><th>姓名</th><th>成績</th><th>考試日期</th><th>處理</th><th>新的值</th></tr>' + rows.map(function (r, j) {
        return '<tr><td>' + r.name + '</td><td class="mono">' + (r.score === '' ? '<i class="cl-empty">（空白）</i>' : r.score) + '</td><td class="mono">' + r.date + '</td><td><span class="pb-opts">' +
          [['keep', '保留'], ['del', '🗑️ 刪除'], ['fill', '🩹 填補成績'], ['conv', '🔄 轉換日期']].map(function (a) { return '<button type="button" class="btn sm cl-a" data-i="' + j + '" data-a="' + a[0] + '">' + a[1] + '</button>'; }).join('') +
          '</span></td><td><input class="input cl-v" data-i="' + j + '" style="max-width:8rem;margin:0" aria-label="' + r.name + ' 新的值" disabled></td></tr>';
      }).join('') + '</table></div><div class="row mt2"><button type="button" class="btn go" id="cl-ok">✅ 確認</button></div></div>';
    var act = {};
    el.querySelectorAll('.cl-a').forEach(function (b) { b.onclick = function () {
      var j = b.dataset.i; act[j] = b.dataset.a;
      el.querySelectorAll('.cl-a[data-i="' + j + '"]').forEach(function (x) { x.classList.toggle('on', x === b); });
      var inp = el.querySelector('.cl-v[data-i="' + j + '"]'); inp.disabled = !(act[j] === 'fill' || act[j] === 'conv'); if (inp.disabled) inp.value = ''; else inp.focus();
    }; });
    el.querySelector('#cl-ok').onclick = function () {
      if (Object.keys(act).length < rows.length) return warn(api, '每一筆都要選處理方式');
      var avg = others.reduce(function (a, b) { return a + b; }, 0) / others.length;   // 刪掉雜訊、不算空白之後的平均
      for (var j = 0; j < rows.length; j++) {
        var r = rows[j], a = act[j], v = el.querySelector('.cl-v[data-i="' + j + '"]').value.trim().replace(/\s/g, '');
        var noise = typeof r.score === 'number' && r.score > 100, miss = r.score === '', odd = r.date !== r.std;
        if (noise) { if (a !== 'del') return api.submit(false, r.name + ' 的成績 ' + r.score + ' 分不可能（滿分 100），這是雜訊。', '有雜訊的整筆刪除。'); continue; }
        if (a === 'del') return api.submit(false, r.name + ' 這筆資料可以救，不用刪。', '只有「不可能」的資料才刪除；漏填可以填補、格式可以轉換。');
        if (miss) { if (a !== 'fill') return api.submit(false, r.name + ' 漏登了成績。', '人數不多，刪掉可惜 —— 用平均填補。');
          if (+v !== avg) return api.submit(false, r.name + ' 填的平均不對。', '把雜訊刪掉之後，其他有成績的同學加起來 ÷ 人數。', '不要把被刪除的那一筆，也不要把空白的算進去。'); continue; }
        if (odd) { if (a !== 'conv') return api.submit(false, r.name + ' 的日期寫法和別人不一樣。', '選「轉換日期」，改成 2026/4/2 的格式。');
          if (v !== r.std) return api.submit(false, r.name + ' 的日期轉換得不對：' + (v || '（空白）') + '。', '年/月/日，月和日前面不用補 0。'); continue; }
        if (a !== 'keep') return api.submit(false, r.name + ' 這一筆沒有問題，保留就好。', '不需要處理的資料，不要動它。');
      }
      api.submit(true, '清理完成！平均是 ' + avg + ' 分 —— 如果沒刪掉 ' + rows[noiseIdx()].score + ' 分那一筆，平均會被拉高很多。', '');
    };
    function noiseIdx() { for (var j = 0; j < rows.length; j++) if (typeof rows[j].score === 'number' && rows[j].score > 100) return j; }
  };
  function judge(r) {
    if (!r.phone || !r.birth) return 'miss';
    if (r.age > 120 || r.phone.length !== 10) return 'noise';
    if (!/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(r.birth)) return 'fmt';
    return 'ok';
  }

  /* =================================================================
     🗜️ 無失真壓縮：連續長度編碼（D3 科技廣角）
     一排黑白格子 → 「白幾格、黑幾格…」的數字（從白色開始，第一段沒有白就寫 0）
     基本：把兩排編碼；挑戰：照數字把圖畫回來（證明可以完全還原），再算省了多少
     ================================================================= */
  function rle(row) { var out = [], cur = 0, c = 0; row.forEach(function (px) { if (px === cur) c++; else { out.push(c); cur = px; c = 1; } }); out.push(c); return out; }
  function mkRow(w) { var r = [], v = rnd(2); while (r.length < w) { var len = between(1, 4); for (var i = 0; i < len && r.length < w; i++) r.push(v); v = 1 - v; } return r; }
  L.rleLab = function (el, api) {
    el.dataset.lab = 'rleLab';
    var W = api.hard ? 8 : 10;
    if (!api.hard) {
      var rows = [mkRow(W), mkRow(W)];
      el.dataset.rows = JSON.stringify(rows);
      el.innerHTML = '<div class="rl"><p class="small">傳真機的壓縮法：一排格子不要一格一格記，改記<b>「白幾格、黑幾格、白幾格…」</b>。<b>一定從白色開始數</b>，開頭是黑色就先寫 0。數字用逗號隔開。</p>' +
        '<div class="note small">例：⬜⬜⬛⬛⬛⬜ → <code>2,3,1</code>　　⬛⬛⬜⬜⬜⬜ → <code>0,2,4</code></div>' +
        tip(api, '數一數同樣顏色連在一起有幾格，換顏色就換下一個數字。') +
        rows.map(function (r, i) { return '<div class="rl-row mt1"><div class="px-row" aria-label="第 ' + (i + 1) + ' 排">' + r.map(function (p) { return '<i class="px' + (p ? ' on' : '') + '"></i>'; }).join('') + '</div><input class="input rl-in" data-i="' + i + '" placeholder="例如 2,3,1" inputmode="numeric" aria-label="第 ' + (i + 1) + ' 排的編碼"></div>'; }).join('') +
        '<div class="card soft-bg mt1" style="padding:.55rem .75rem"><p class="small bold">原本要記 ' + W * 2 + ' 格，壓縮後兩排一共只要記幾個數字？</p><input class="input" id="rl-cnt" inputmode="numeric" style="max-width:8rem;margin:0"></div>' +
        '<div class="row mt2"><button type="button" class="btn go" id="rl-ok">✅ 確認</button></div></div>';
      el.querySelector('#rl-ok').onclick = function () {
        var vals = [0, 1].map(function (i) { return el.querySelector('.rl-in[data-i="' + i + '"]').value.replace(/[，、\s]/g, ',').split(',').filter(function (x) { return x !== ''; }).map(Number); });
        var cnt = el.querySelector('#rl-cnt').value.trim();
        if (!vals[0].length || !vals[1].length || cnt === '') return warn(api, '兩排都要編碼，也要填數字個數');
        for (var i = 0; i < 2; i++) {
          var want = rle(rows[i]);
          if (vals[i].join(',') !== want.join(',')) {
            var sum = vals[i].reduce(function (a, b) { return a + b; }, 0);
            return api.submit(false, '第 ' + (i + 1) + ' 排的編碼不對' + (sum !== W ? '（加起來是 ' + sum + ' 格，應該是 ' + W + ' 格）' : '') + '。', rows[i][0] ? '這一排開頭是黑色：第一個數字要寫 0（白色 0 格）。' : '從白色開始，一段一段數。');
          }
        }
        if (+cnt !== rle(rows[0]).length + rle(rows[1]).length) return api.submit(false, '數字個數算錯了。', '把兩排編碼的數字個數加起來。');
        api.submit(true, '用數字就能把圖「一格不差」地還原 —— 這是無失真壓縮（PNG、ZIP 的想法）。同樣顏色連得越長，省得越多。');
      };
      return;
    }
    /* 挑戰：解碼畫圖 */
    var H = 6, img = [], codes;
    for (var y = 0; y < H; y++) img.push(mkRow(W));
    codes = img.map(rle);
    var grid = img.map(function (r) { return r.map(function () { return 0; }); });
    el.dataset.codes = JSON.stringify(codes);
    el.innerHTML = '<div class="rl"><p class="small">收到一張傳真的「壓縮碼」：每一排都是「白幾格、黑幾格…」（從白色開始）。<b>點格子把圖畫回來</b>（點一下變黑、再點變白）。</p>' +
      tip(api, '第一個數字是白色的格數，第二個是黑色，第三個又是白色……0 表示開頭就是黑色。') +
      '<div class="rl-dec"><div class="rl-codes mono">' + codes.map(function (c) { return '<div>' + c.join(',') + '</div>'; }).join('') + '</div><div class="px-grid" id="rl-g"></div></div>' +
      '<div class="card soft-bg mt1" style="padding:.55rem .75rem"><p class="small bold">原本 ' + W * H + ' 格，壓縮碼一共幾個數字？這是失真還是無失真壓縮？</p><div class="row" style="gap:.4rem"><input class="input" id="rl-cnt" inputmode="numeric" style="max-width:7rem;margin:0" aria-label="數字個數">' +
      '<button type="button" class="btn sm rl-k" data-k="lossless">🗜️ 無失真</button><button type="button" class="btn sm rl-k" data-k="lossy">📉 失真</button></div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="rl-ok">✅ 確認</button></div></div>';
    var kind = null;
    el.querySelectorAll('.rl-k').forEach(function (b) { b.onclick = function () { kind = b.dataset.k; el.querySelectorAll('.rl-k').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    function draw() {
      el.querySelector('#rl-g').innerHTML = grid.map(function (r, yy) { return '<div class="px-row">' + r.map(function (p, xx) { return '<button type="button" class="px' + (p ? ' on' : '') + '" data-x="' + xx + '" data-y="' + yy + '" aria-label="第 ' + (yy + 1) + ' 排第 ' + (xx + 1) + ' 格"></button>'; }).join('') + '</div>'; }).join('');
      el.querySelectorAll('#rl-g .px').forEach(function (b) { b.onclick = function () { grid[+b.dataset.y][+b.dataset.x] ^= 1; draw(); }; });
    }
    draw();
    el.querySelector('#rl-ok').onclick = function () {
      if (el.querySelector('#rl-cnt').value.trim() === '' || !kind) return warn(api, '畫完圖，也要回答下面兩題');
      for (var yy = 0; yy < H; yy++) if (rle(grid[yy]).join(',') !== codes[yy].join(',')) return api.submit(false, '第 ' + (yy + 1) + ' 排畫得和壓縮碼 ' + codes[yy].join(',') + ' 對不上。', '從左邊開始：先留白幾格、再塗黑幾格……');
      var total = codes.reduce(function (a, c) { return a + c.length; }, 0);
      if (+el.querySelector('#rl-cnt').value.trim() !== total) return api.submit(false, '數字個數算錯了。', '每一排的數字個數加起來。');
      if (kind !== 'lossless') return api.submit(false, '你剛剛把圖一格不差地畫回來了 —— 能完全還原的是哪一種？', '可以完全還原＝無失真。');
      api.submit(true, '照著 ' + total + ' 個數字就畫回 ' + W * H + ' 格，一格都沒錯 —— 可以完全還原，就是無失真壓縮。');
    };
  };
  L._d = { rle: rle, judge: judge, std: std };

  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
