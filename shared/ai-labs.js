/* =====================================================================
   🧪 AI 前導關・視覺化實驗站（CARDGAME.labs）── A1～A6 三星三階的「操作」「挑戰」
   ---------------------------------------------------------------------
   blackBox（A1 規則機器 vs 會學習的機器）、trainer（A2 挑資料訓練 AI、代表性偏見）、
   robotAlgo（A3 死板的機器人：步驟要明確、順序要正確；挑戰要優化）、nextWord（A4 預測下一個詞）、
   promptLab（A5 好好問、檢查 AI 的草稿）、fakeSpot（A6 找出 AI 生成圖片的破綻）
   情境每次隨機產生，按「確認」時照規則模擬、計算判斷，原始碼裡沒有答案清單。
   ===================================================================== */
(function () {
  function rnd(n) { try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }
  function pick(a) { return a[rnd(a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return UI.esc(s); }
  function tip(api, t) { return api.practice ? '<div class="note small mt1">💡 提示：' + esc(t) + '</div>' : ''; }
  function warn(api, t) { api.say('<div class="note warn small">' + esc(t) + '</div>'); }
  var L = {};

  /* =================================================================
     🤖 黑盒子實驗室（A1）：三台水果辨識機，哪一台會「學習」？
     規則機：永遠照工程師寫好的規則（教它也不會變）；學習機：記住你教的例子，用最像的例子預測；
     亂猜機（挑戰）：每次答案都不一樣，但不是因為學到東西。
     還要把會學習的機器教到全部認得。
     ================================================================= */
  var FRUIT = [{ e: '🍎', n: '蘋果', c: 'red', s: 'round' }, { e: '🍌', n: '香蕉', c: 'yellow', s: 'long' }, { e: '🍇', n: '葡萄', c: 'purple', s: 'small' }, { e: '🍊', n: '橘子', c: 'orange', s: 'round' }, { e: '🍓', n: '草莓', c: 'red', s: 'small' }];
  function mkMachine(type) {
    var m = { type: type, mem: [] };
    if (type === 'rule') { var r = pick(FRUIT), color = r.c; m.guess = function (f) { return f.c === color ? r.n : '不知道'; }; m.rule = color; }
    if (type === 'learn') m.guess = function (f) {
      var best = null, bs = 0;
      m.mem.forEach(function (x) { var sc = (x.f.c === f.c ? 2 : 0) + (x.f.s === f.s ? 1 : 0) + (x.f === f ? 5 : 0); if (sc >= bs && sc > 0) { bs = sc; best = x.n; } });
      return best || '不知道';
    };
    if (type === 'rand') m.guess = function () { return pick(FRUIT).n; };
    return m;
  }
  L.blackBox = function (el, api) {
    var types = api.hard ? shuffle(['rule', 'learn', 'learn', 'rand']) : shuffle(['rule', 'learn', pick(['rule', 'learn'])]);
    var fruits = api.hard ? FRUIT : FRUIT.slice(0, 4);
    var ms = types.map(mkMachine), log = ms.map(function () { return []; }), taught = ms.map(function () { return false; }), testedAfter = ms.map(function () { return false; });
    var cls = {}, sel = 0, fsel = null;
    var KIND = api.hard ? [['rule', '⚙️ 固定規則'], ['learn', '🧠 會學習（AI）'], ['rand', '🎲 亂猜']] : [['rule', '⚙️ 固定規則（不是 AI）'], ['learn', '🧠 會學習（AI）']];
    el.dataset.lab = 'blackBox'; el.dataset.n = ms.length; el.dataset.fruits = fruits.map(function (f) { return f.n; }).join(',');
    el.innerHTML = '<div class="bb"><p class="small">這裡有 ' + ms.length + ' 台水果辨識機，外表一模一樣。做實驗找出<b>哪一台會學習</b>：先「🔍 測試」看它怎麼答，再「📚 教它」正確答案，然後再測一次。</p>' +
      '<div class="note small">✅ 過關條件：① 每一台都判斷出是哪一種機器 ② 把<b>會學習的機器</b>教到 ' + fruits.map(function (f) { return f.e; }).join('') + ' 全部認得。</div>' +
      tip(api, '教完再測一次：答案「因為你教了它」而變對的，就是會學習的機器。' + (api.hard ? '沒教它答案也一直變的，是亂猜。' : '')) +
      '<div class="bb-tabs" id="bb-tabs"></div><div class="bb-body" id="bb-body"></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="bb-ok">✅ 確認</button></div></div>';
    function tabs() {
      el.querySelector('#bb-tabs').innerHTML = ms.map(function (m, i) { return '<button type="button" class="bb-tab' + (i === sel ? ' on' : '') + '" data-i="' + i + '">🤖 機器 ' + 'ABCD'[i] + (cls[i] ? '<small>' + KIND.filter(function (k) { return k[0] === cls[i]; })[0][1] + '</small>' : '') + '</button>'; }).join('');
      el.querySelectorAll('.bb-tab').forEach(function (b) { b.onclick = function () { sel = +b.dataset.i; fsel = null; tabs(); body(); }; });
    }
    function body() {
      var i = sel;
      el.querySelector('#bb-body').innerHTML = '<div class="row" style="gap:.35rem">' + fruits.map(function (f, k) { return '<button type="button" class="btn bb-f' + (fsel === k ? ' on' : '') + '" data-k="' + k + '" aria-label="' + f.n + '">' + f.e + '</button>'; }).join('') + '</div>' +
        '<div class="row mt1" style="gap:.4rem"><button type="button" class="btn sm" id="bb-test">🔍 測試這個水果</button><button type="button" class="btn sm" id="bb-teach">📚 教它「這是' + (fsel != null ? fruits[fsel].n : '…') + '」</button></div>' +
        '<ol class="bb-log small mono">' + (log[i].length ? log[i].slice(-8).map(function (x) { return '<li>' + x + '</li>'; }).join('') : '<li class="soft">（還沒做實驗）</li>') + '</ol>' +
        '<div class="row mt1" style="gap:.35rem"><b class="small">我判斷機器 ' + 'ABCD'[i] + ' 是：</b>' + KIND.map(function (k) { return '<button type="button" class="btn sm bb-k' + (cls[i] === k[0] ? ' on' : '') + '" data-k="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>';
      el.querySelectorAll('.bb-f').forEach(function (b) { b.onclick = function () { fsel = +b.dataset.k; body(); }; });
      el.querySelector('#bb-test').onclick = function () {
        if (fsel == null) return warn(api, '先點一個水果');
        var f = fruits[fsel], g = ms[i].guess(f); if (taught[i]) testedAfter[i] = true;
        log[i].push('🔍 ' + f.e + ' → 「' + g + '」' + (g === f.n ? ' ✔' : '')); body();
      };
      el.querySelector('#bb-teach').onclick = function () {
        if (fsel == null) return warn(api, '先點一個水果');
        var f = fruits[fsel]; if (ms[i].type === 'learn') ms[i].mem.push({ f: f, n: f.n }); taught[i] = true;
        log[i].push('📚 教它：' + f.e + ' 是「' + f.n + '」'); body();
      };
      el.querySelectorAll('.bb-k').forEach(function (b) { b.onclick = function () { cls[i] = b.dataset.k; tabs(); body(); }; });
    }
    tabs(); body();
    el.querySelector('#bb-ok').onclick = function () {
      for (var i = 0; i < ms.length; i++) {
        if (!cls[i]) return warn(api, '機器 ' + 'ABCD'[i] + ' 還沒判斷');
        if (!taught[i] || !testedAfter[i]) return warn(api, '機器 ' + 'ABCD'[i] + ' 還沒做完實驗：要「教它」之後再「測試」，才有證據');
      }
      for (i = 0; i < ms.length; i++) if (cls[i] !== ms[i].type) {
        var t = ms[i].type;
        return api.submit(false, '機器 ' + 'ABCD'[i] + ' 判斷錯了。', t === 'learn' ? '教了它之後，同一個水果的答案有沒有變對？' : t === 'rule' ? '不管你教它什麼，它的答案都一樣 —— 只是照規則做。' : '沒教它，答案也一直亂變 —— 那不是學習。');
      }
      for (i = 0; i < ms.length; i++) if (ms[i].type === 'learn') {
        var miss = fruits.filter(function (f) { return ms[i].guess(f) !== f.n; });
        if (miss.length) return api.submit(false, '機器 ' + 'ABCD'[i] + ' 還認不得 ' + miss.map(function (f) { return f.e; }).join('') + '。', '把每一種水果都教它一次（資料集要夠多、夠完整）。');
      }
      api.submit(true, '規則機器只會照工程師寫好的規則做；會學習的機器從你給的「資料」找規律、做預測 —— 這就是 AI 的「學習」。');
    };
  };

  /* =================================================================
     🐱🐶 AI 訓練師（A2）：從題庫挑資料放進資料集，AI 用「最像的例子」預測（1-NN）
     基本：挑 4 筆，測試的動物都要認對（兩種都要有）
     挑戰：測試題有「體型很大的貓」—— 資料集裡沒有牠的代表，就會被認成狗（代表性偏見）
     ================================================================= */
  function truth(p) { return p.big ? 'cat' : p.ear >= 5 ? 'cat' : 'dog'; }
  function nn(set, p) { var b = null, bd = 1e9; set.forEach(function (q) { var d = (q.ear - p.ear) * (q.ear - p.ear) + (q.size - p.size) * (q.size - p.size); if (d < bd) { bd = d; b = q; } }); return b ? truth(b) : null; }
  function subsets(pool, tests, max) {   // 所有 ≤ max 張的組合裡，有沒有讓測試全對的
    var r = { ok: false, okNoBig: false, okOneClass: false }, n = pool.length;
    for (var m = 1; m < (1 << n); m++) {
      var set = [], c = 0; for (var i = 0; i < n; i++) if (m & (1 << i)) { set.push(pool[i]); c++; }
      if (c > max) continue;
      if (tests.every(function (p) { return nn(set, p) === truth(p); })) {
        r.ok = true; if (!set.some(function (p) { return p.big; })) r.okNoBig = true;
        if (set.every(function (p) { return truth(p) === truth(set[0]); })) r.okOneClass = true;
      }
    }
    return r;
  }
  L.trainer = function (el, api) {
    var pool = [], tests = [], max = api.hard ? 5 : 4, i;
    function pt(kind) {
      if (kind === 'cat') return { ear: between(6, 9), size: between(1, 4) };
      if (kind === 'dog') return { ear: between(1, 4), size: between(3, 9) };
      return { ear: between(5, 6), size: between(8, 9), big: true };   // 大型貓（緬因貓）：耳朵沒那麼尖、體型很大，像狗
    }
    for (;;) {
      pool = []; tests = [];
      for (i = 0; i < 5; i++) pool.push(pt('cat')); for (i = 0; i < 5; i++) pool.push(pt('dog'));
      if (api.hard) { pool.push(pt('big')); pool[rnd(5)] = pt('cat'); }
      tests = [pt('cat'), pt('dog'), pt('cat'), pt('dog')];
      if (api.hard) tests.push(pt('big'));
      var key = function (p) { return p.ear + ',' + p.size; }, seen = {};
      if (pool.concat(tests).some(function (p) { if (seen[key(p)]) return true; seen[key(p)] = 1; return false; })) continue;
      var sv = subsets(pool, tests, max);
      if (!sv.ok) continue;                       // 一定挑得出來
      if (api.hard && sv.okNoBig) continue;       // 挑戰：一定要放「大貓」的代表才會過
      if (!api.hard && sv.okOneClass) continue;   // 基本：只放一種動物一定不會過
      break;
    }
    pool = shuffle(pool); var chosen = {};
    el.dataset.lab = 'trainer'; el.dataset.pool = JSON.stringify(pool.map(function (p) { return { ear: p.ear, size: p.size, a: truth(p) }; })); el.dataset.tests = JSON.stringify(tests.map(function (p) { return { ear: p.ear, size: p.size }; })); el.dataset.max = max;
    var X = function (v) { return 20 + v * 26; }, Y = function (v) { return 270 - v * 26; };
    el.innerHTML = '<div class="tr"><p class="small">你是 AI 訓練師！右邊題庫有 ' + pool.length + ' 張已標好答案的動物照片（用「耳朵多尖」「體型多大」兩個特徵畫在圖上）。<b>最多挑 ' + max + ' 張</b>放進資料集，AI 會用「資料集裡最像的那一張」來猜 ❓ 是什麼。</p>' +
      tip(api, api.hard ? '看看 ❓ 分布在哪裡：每一群 ❓ 附近，資料集裡都要有牠的代表。' : '貓和狗都要放；挑靠近 ❓ 的例子最有用。') +
      '<div class="tr-grid"><svg viewBox="0 0 290 290" class="tr-svg" id="tr-svg" role="img" aria-label="特徵分布圖"></svg><div><div class="tr-pool" id="tr-pool"></div>' +
      '<div class="row mt1"><span class="chip" id="tr-n"></span><button type="button" class="btn sm" id="tr-run">🧠 訓練並預測</button></div><div id="tr-res" class="small mt1"></div></div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="tr-ok">✅ 確認</button></div></div>';
    var pred = null;
    function draw() {
      var s = '<line x1="20" y1="270" x2="285" y2="270" stroke="#94a3b8"/><line x1="20" y1="5" x2="20" y2="270" stroke="#94a3b8"/><text x="150" y="287" font-size="11" text-anchor="middle" fill="#475569">耳朵越尖 →</text><text x="10" y="140" font-size="11" fill="#475569" transform="rotate(-90 10 140)" text-anchor="middle">體型越大 →</text>';
      pool.forEach(function (p, k) { s += '<text x="' + X(p.ear) + '" y="' + Y(p.size) + '" font-size="' + (chosen[k] ? 20 : 14) + '" text-anchor="middle" dominant-baseline="middle" opacity="' + (chosen[k] ? 1 : .45) + '">' + (truth(p) === 'cat' ? '🐱' : '🐶') + '</text>' + (chosen[k] ? '<circle cx="' + X(p.ear) + '" cy="' + Y(p.size) + '" r="13" fill="none" stroke="#1d4ed8" stroke-width="2"/>' : ''); });
      tests.forEach(function (p, k) { s += '<text x="' + X(p.ear) + '" y="' + Y(p.size) + '" font-size="16" text-anchor="middle" dominant-baseline="middle">' + (pred ? (pred[k] === 'cat' ? '🐱' : '🐶') : '❓') + '</text><text x="' + (X(p.ear) + 11) + '" y="' + (Y(p.size) - 9) + '" font-size="10" font-weight="900" fill="#b45309">' + (k + 1) + '</text>'; });
      el.querySelector('#tr-svg').innerHTML = s;
      el.querySelector('#tr-pool').innerHTML = pool.map(function (p, k) { return '<button type="button" class="tr-p' + (chosen[k] ? ' on' : '') + '" data-k="' + k + '">' + (truth(p) === 'cat' ? '🐱 貓' : '🐶 狗') + '<small>耳 ' + p.ear + '・體型 ' + p.size + (p.big ? '・緬因貓' : '') + '</small></button>'; }).join('');
      el.querySelector('#tr-n').textContent = '資料集 ' + Object.keys(chosen).length + '／' + max + ' 張';
      el.querySelectorAll('.tr-p').forEach(function (b) { b.onclick = function () { var k = +b.dataset.k; if (chosen[k]) delete chosen[k]; else { if (Object.keys(chosen).length >= max) return warn(api, '最多 ' + max + ' 張，先拿掉一張'); chosen[k] = 1; } pred = null; el.querySelector('#tr-res').innerHTML = ''; draw(); }; });
    }
    function set() { return Object.keys(chosen).map(function (k) { return pool[k]; }); }
    el.querySelector('#tr-run').onclick = function () {
      if (!Object.keys(chosen).length) return warn(api, '資料集是空的：先挑幾張照片');
      pred = tests.map(function (p) { return nn(set(), p); }); draw();
      el.querySelector('#tr-res').innerHTML = 'AI 的預測：' + pred.map(function (x, k) { return (k + 1) + ' 號 ' + (x === 'cat' ? '🐱' : '🐶'); }).join('、') + '<br><span class="soft">按「確認」看看猜對幾隻。</span>';
    };
    el.querySelector('#tr-ok').onclick = function () {
      if (!pred) return warn(api, '先按「🧠 訓練並預測」');
      var wrong = tests.map(function (p, k) { return pred[k] !== truth(p) ? k : -1; }).filter(function (k) { return k >= 0; });
      if (wrong.length) {
        var big = wrong.some(function (k) { return tests[k].big; });
        return api.submit(false, wrong.map(function (k) { return (k + 1) + ' 號其實是' + (truth(tests[k]) === 'cat' ? (tests[k].big ? '體型很大的貓（緬因貓）' : '貓') : '狗'); }).join('、') + '，AI 猜錯了。',
          big ? '資料集裡沒有「大貓」的代表，AI 只好拿最像的狗來猜 —— 這就是代表性偏見。' : '每一群 ❓ 附近，資料集裡都要有正確答案的例子。', '換掉離 ❓ 很遠的照片，改放靠近猜錯的那一隻的例子。');
      }
      api.submit(true, api.hard ? '資料集裡有了大型貓的代表，AI 就認得了 —— AI 的偏見，常常來自資料集缺了誰。' : 'AI 只會從你給的資料學；資料挑得好，預測就準。');
    };
    draw();
  };

  /* =================================================================
     🤖 死板的機器人（A3）：用積木排出步驟，讓機器人拿到牙刷（不要拿到馬桶刷！）
     挑戰：積木數有上限，要用「重複執行」優化
     ================================================================= */
  var DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]], ARROW = ['➡️', '⬇️', '⬅️', '⬆️'];
  function bfsCost(G, W, H, s, goal) {   // 最少積木數（前進 k 格：k＝1 用 1 塊，k≥2 用「重複＋前進」2 塊；轉彎 1 塊；最後「拿起」1 塊）
    var best = {}, q = [[s.x, s.y, s.d, 0]], key = function (x, y, d) { return x + ',' + y + ',' + d; };
    best[key(s.x, s.y, s.d)] = 0;
    while (q.length) {
      q.sort(function (a, b) { return a[3] - b[3]; }); var c = q.shift();
      if (c[0] === goal.x && c[1] === goal.y) return c[3] + 1;
      var nx = [[c[0], c[1], (c[2] + 1) % 4, c[3] + 1], [c[0], c[1], (c[2] + 3) % 4, c[3] + 1]];
      for (var k = 1; k < 6; k++) { var x = c[0] + DIRS[c[2]][0] * k, y = c[1] + DIRS[c[2]][1] * k; if (x < 0 || y < 0 || x >= W || y >= H || G[y][x] === 'wall') break; nx.push([x, y, c[2], c[3] + (k === 1 ? 1 : 2)]); }
      nx.forEach(function (n) { var kk = key(n[0], n[1], n[2]); if (best[kk] == null || best[kk] > n[3]) { best[kk] = n[3]; q.push(n); } });
    }
    return null;
  }
  L.robotAlgo = function (el, api) {
    var W = api.hard ? 6 : 5, H = api.hard ? 6 : 5, G, s, goal, trap, minC;
    for (;;) {
      G = []; for (var y = 0; y < H; y++) { G.push([]); for (var x = 0; x < W; x++) G[y].push(rnd(100) < (api.hard ? 18 : 12) ? 'wall' : ''); }
      s = { x: 0, y: rnd(H), d: 0 }; goal = { x: W - 1 - rnd(2), y: rnd(H) }; trap = { x: between(1, W - 2), y: rnd(H) };
      if (G[s.y][s.x] || G[goal.y][goal.x] || G[trap.y][trap.x] || (trap.x === goal.x && trap.y === goal.y)) continue;
      G[goal.y][goal.x] = 'goal'; G[trap.y][trap.x] = 'trap';
      minC = bfsCost(G, W, H, s, goal);
      if (minC && minC >= (api.hard ? 6 : 4)) break;
    }
    var limit = api.hard ? minC + 1 : null, prog = [], lastRun = null;
    el.dataset.lab = 'robotAlgo'; el.dataset.map = JSON.stringify({ G: G, s: s, goal: goal, limit: limit });
    var BL = [['fwd', '⬆ 前進 1 格'], ['left', '↺ 左轉'], ['right', '↻ 右轉'], ['pick', '✋ 拿起']];
    if (api.hard) BL.splice(3, 0, ['rep', '🔁 重複執行 _ 次（下一塊）']);
    el.innerHTML = '<div class="ra"><p class="small">機器人很<b>死板</b>：只會照積木一步一步做。排出步驟，讓 🤖 走到 🪥 牙刷那一格再「拿起」。碰到牆壁 🧱 或走出地圖就會停；在 🚽 那格拿起，就拿到馬桶刷了！' + (limit ? '<br>⚡ <b>挑戰：最多只能用 ' + limit + ' 塊積木</b>（用「重複執行」讓程式變短 —— 這就是<b>優化</b>）。' : '') + '</p>' +
      tip(api, '機器人的「前進」是朝它面對的方向。先想好路線，轉彎時想想它現在面向哪裡。') +
      '<div class="ra-grid"><div class="ra-map" id="ra-map" style="grid-template-columns:repeat(' + W + ',1fr)"></div><div><div class="ra-pal">' + BL.map(function (b) { return '<button type="button" class="blk ra-b" data-b="' + b[0] + '">' + b[1] + '</button>'; }).join('') + '</div>' +
      '<ol class="ra-prog" id="ra-prog"></ol><div class="row mt1" style="gap:.35rem"><button type="button" class="btn sm" id="ra-run">▶ 試跑</button><button type="button" class="btn sm" id="ra-clr">🗑️ 清空</button><span class="chip" id="ra-n"></span></div><div id="ra-msg" class="small mt1"></div></div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="ra-ok">✅ 交出程式</button></div></div>';
    function run() {   // 模擬：回傳 { path, end, err }
      var p = { x: s.x, y: s.y, d: s.d }, path = [[p.x, p.y]], rep = 1;
      for (var i = 0; i < prog.length; i++) {
        var b = prog[i];
        if (b.t === 'rep') { rep = Math.max(1, Math.min(9, +b.n || 1)); continue; }
        for (var r = 0; r < rep; r++) {
          if (b.t === 'left') p.d = (p.d + 3) % 4;
          else if (b.t === 'right') p.d = (p.d + 1) % 4;
          else if (b.t === 'fwd') {
            var x = p.x + DIRS[p.d][0], y = p.y + DIRS[p.d][1];
            if (x < 0 || y < 0 || x >= W || y >= H) return { path: path, p: p, err: '第 ' + (i + 1) + ' 塊：走出地圖了！' };
            if (G[y][x] === 'wall') return { path: path, p: p, err: '第 ' + (i + 1) + ' 塊：撞到牆壁 🧱！' };
            p.x = x; p.y = y; path.push([x, y]);
          } else if (b.t === 'pick') {
            var c = G[p.y][p.x];
            if (c === 'trap') return { path: path, p: p, err: '拿到馬桶刷了！🚽 機器人不會分辨，完全照你的步驟做。' };
            if (c !== 'goal') return { path: path, p: p, err: '第 ' + (i + 1) + ' 塊：這一格沒有東西可以拿。' };
            return { path: path, p: p, done: true, i: i };
          }
        }
        rep = 1;
      }
      return { path: path, p: p, err: '程式跑完了，但還沒拿到牙刷。' };
    }
    function draw() {
      var on = {}; (lastRun ? lastRun.path : []).forEach(function (q) { on[q[0] + ',' + q[1]] = 1; });
      var rp = lastRun ? lastRun.p : s, h = '';
      for (var y = 0; y < H; y++) for (var x = 0; x < W; x++) {
        var c = G[y][x], here = rp.x === x && rp.y === y;
        h += '<div class="ra-c' + (c === 'wall' ? ' wall' : '') + (on[x + ',' + y] ? ' trail' : '') + '">' + (here ? '<b>🤖<i>' + ARROW[rp.d] + '</i></b>' : c === 'wall' ? '🧱' : c === 'goal' ? '🪥' : c === 'trap' ? '🚽' : '') + '</div>';
      }
      el.querySelector('#ra-map').innerHTML = h;
      el.querySelector('#ra-prog').innerHTML = prog.length ? prog.map(function (b, i) { return '<li><span class="blk ra-k-' + b.t + '">' + (b.t === 'rep' ? '🔁 重複執行 <input class="ra-rep" data-i="' + i + '" value="' + (b.n || '') + '" inputmode="numeric" aria-label="重複次數"> 次' : BL.filter(function (x) { return x[0] === b.t; })[0][1]) + '</span><button type="button" class="ra-x" data-i="' + i + '" aria-label="刪除第 ' + (i + 1) + ' 塊">✕</button></li>'; }).join('') : '<li class="soft small">（點上面的積木加進來）</li>';
      el.querySelector('#ra-n').textContent = '積木 ' + prog.length + (limit ? '／' + limit : '') + ' 塊';
      el.querySelectorAll('.ra-x').forEach(function (b) { b.onclick = function () { prog.splice(+b.dataset.i, 1); lastRun = null; draw(); }; });
      el.querySelectorAll('.ra-rep').forEach(function (inp) { inp.onchange = function () { prog[+inp.dataset.i].n = +inp.value; lastRun = null; }; });
    }
    el.querySelectorAll('.ra-b').forEach(function (b) { b.onclick = function () { prog.push({ t: b.dataset.b, n: b.dataset.b === 'rep' ? 2 : null }); lastRun = null; el.querySelector('#ra-msg').textContent = ''; draw(); }; });
    el.querySelector('#ra-clr').onclick = function () { prog = []; lastRun = null; draw(); };
    el.querySelector('#ra-run').onclick = function () { lastRun = run(); draw(); el.querySelector('#ra-msg').innerHTML = lastRun.done ? '🎉 拿到牙刷了！' + (limit && prog.length > limit ? '<br>⚠️ 但是用了 ' + prog.length + ' 塊，超過 ' + limit + ' 塊。' : '') : '❌ ' + esc(lastRun.err); };
    el.querySelector('#ra-ok').onclick = function () {
      if (!prog.length) return warn(api, '先排積木');
      var r = run(); lastRun = r; draw();
      if (!r.done) return api.submit(false, r.err, '按「▶ 試跑」看機器人走到哪裡停下來，從那裡開始修改。');
      if (r.i !== prog.length - 1) return api.submit(false, '拿到牙刷之後還有多餘的積木。', '「拿起」應該是最後一塊。');
      if (limit && prog.length > limit) return api.submit(false, '用了 ' + prog.length + ' 塊積木，超過 ' + limit + ' 塊。', '連續好幾個「前進」，可以換成「重複執行 N 次」＋一個「前進」。', '也想想看：換一條轉彎比較少的路線。');
      api.submit(true, limit ? '同樣走到終點，積木更少 —— 目標是「程式短」，所以演算法就往這個方向優化。' : '步驟明確、順序正確，死板的機器人也能完成任務 —— 這就是演算法。');
    };
    draw();
  };
  L._tr = { nn: nn, truth: truth };
  L._ra = { bfsCost: bfsCost, DIRS: DIRS };

  /* =================================================================
     💬 下一個詞預測機（A4）：從小小的「訓練資料」數一數，哪個詞最常接在後面
     基本：兩個詞的「下一個詞」＋出現幾次；挑戰：從開頭一個詞一個詞接成一句話，再看它有沒有在資料裡出現過
     ================================================================= */
  var WS = { S: ['我', '小明', '阿嬤', '小貓'], V: ['喜歡', '看到', '想要'], A: ['紅紅的', '可愛的', '大大的'], O: ['蘋果', '小狗', '氣球', '書包'] };
  function counts(corpus, w) { var c = {}; corpus.forEach(function (s) { var i = s.indexOf(w); if (i >= 0 && i < s.length - 1) c[s[i + 1]] = (c[s[i + 1]] || 0) + 1; }); return c; }
  function top(c) { var ks = Object.keys(c).sort(function (a, b) { return c[b] - c[a]; }); return ks.length && (ks.length === 1 || c[ks[0]] > c[ks[1]]) ? ks[0] : null; }
  L.nextWord = function (el, api) {
    var N = api.hard ? 10 : 8, corpus, asks, chain;
    for (;;) {
      var fav = { V: pick(WS.V), A: pick(WS.A), O: pick(WS.O) };   // 讓某些詞比較常出現
      corpus = []; for (var i = 0; i < N; i++) corpus.push([pick(WS.S), rnd(100) < 55 ? fav.V : pick(WS.V), rnd(100) < 50 ? fav.A : pick(WS.A), rnd(100) < 50 ? fav.O : pick(WS.O)]);
      if (!api.hard) {
        asks = shuffle([].concat(WS.V, WS.A)).filter(function (w) { return top(counts(corpus, w)); }).slice(0, 2);
        if (asks.length === 2) break;
      } else {
        var s0 = pick(corpus)[0]; chain = [s0];
        for (var k = 0; k < 3; k++) { var t = top(counts(corpus, chain[k])); if (!t) break; chain.push(t); }
        if (chain.length === 4) break;
      }
    }
    el.dataset.lab = 'nextWord'; el.dataset.corpus = JSON.stringify(corpus);
    var show = '<div class="nw-corpus">' + corpus.map(function (s, i) { return '<span><b>' + (i + 1) + '</b> ' + s.join(' ') + '</span>'; }).join('') + '</div>';
    if (!api.hard) {
      el.dataset.asks = asks.join(',');
      el.innerHTML = '<div class="nw"><p class="small">這是一個超迷你語言模型的<b>訓練資料</b>（' + N + ' 句話）。語言模型的祕密：數一數哪個詞<b>最常接在後面</b>，就預測它。</p>' + show +
        tip(api, '找出所有含有這個詞的句子，看它後面接什麼，數一數。') +
        '<div class="stack mt1">' + asks.map(function (w, i) {
          var opts = WS[WS.V.indexOf(w) >= 0 ? 'A' : 'O'];
          return '<div class="card soft-bg" style="padding:.55rem .75rem"><p class="small bold">' + (i + 1) + '.「' + w + '」下一個詞最可能是？</p><div class="row" style="gap:.3rem">' + opts.map(function (o) { return '<button type="button" class="btn sm nw-o" data-i="' + i + '" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>' +
            '<p class="small mt1">它在「' + w + '」後面出現了幾次？ <input class="input nw-c" data-i="' + i + '" inputmode="numeric" style="max-width:5rem;display:inline-block;margin:0"></p></div>';
        }).join('') + '</div><div class="row mt2"><button type="button" class="btn go" id="nw-ok">✅ 確認</button></div></div>';
      var pk = {};
      el.querySelectorAll('.nw-o').forEach(function (b) { b.onclick = function () { pk[b.dataset.i] = b.dataset.v; el.querySelectorAll('.nw-o[data-i="' + b.dataset.i + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
      el.querySelector('#nw-ok').onclick = function () {
        for (var i = 0; i < asks.length; i++) if (!pk[i] || el.querySelector('.nw-c[data-i="' + i + '"]').value.trim() === '') return warn(api, '每一題都要選詞、填次數');
        for (i = 0; i < asks.length; i++) {
          var c = counts(corpus, asks[i]), t = top(c);
          if (pk[i] !== t) return api.submit(false, (i + 1) + '.「' + asks[i] + '」後面接「' + pk[i] + '」的只有 ' + (c[pk[i]] || 0) + ' 次，不是最多。', '把含有「' + asks[i] + '」的句子都找出來，一個一個數。');
          if (+el.querySelector('.nw-c[data-i="' + i + '"]').value.trim() !== c[t]) return api.submit(false, (i + 1) + '. 次數數錯了。', '再數一次「' + asks[i] + ' ' + t + '」一起出現的句子。');
        }
        api.submit(true, '語言模型就是這樣「接話」：看過的資料裡，哪個詞最常接在後面，就選它。真正的模型讀了幾十億句話，所以接得很通順。');
      };
      return;
    }
    el.dataset.start = chain[0];
    var built = [chain[0]];
    el.innerHTML = '<div class="nw"><p class="small">訓練資料（' + N + ' 句）：</p>' + show +
      '<p class="small mt1">從「<b>' + chain[0] + '</b>」開始，每一次都選<b>最常接在後面</b>的詞，接出一句 4 個詞的話。</p>' +
      tip(api, '每一步只看「前一個詞」後面最常出現什麼。') +
      '<div class="nw-built" id="nw-b"></div><div class="row mt1" style="gap:.3rem" id="nw-opts"></div>' +
      '<div class="card soft-bg mt1" style="padding:.55rem .75rem"><p class="small bold">接出來的這句話，在訓練資料裡一模一樣出現過嗎？</p><div class="row" style="gap:.3rem"><button type="button" class="btn sm nw-y" data-v="y">出現過</button><button type="button" class="btn sm nw-y" data-v="n">沒出現過（是新句子）</button></div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="nw-ok">✅ 確認</button></div></div>';
    var seen = null;
    function draw() {
      el.querySelector('#nw-b').innerHTML = built.map(function (w) { return '<span>' + w + '</span>'; }).join('→') + (built.length < 4 ? '→<span class="soft">？</span>' : '') + (built.length > 1 ? ' <button type="button" class="btn sm" id="nw-undo">↶</button>' : '');
      var cat = ['S', 'V', 'A', 'O'][built.length];
      el.querySelector('#nw-opts').innerHTML = cat ? WS[cat].map(function (w) { return '<button type="button" class="btn sm nw-w" data-w="' + w + '">' + w + '</button>'; }).join('') : '';
      el.querySelectorAll('.nw-w').forEach(function (b) { b.onclick = function () { built.push(b.dataset.w); draw(); }; });
      var u = el.querySelector('#nw-undo'); if (u) u.onclick = function () { built.pop(); draw(); };
    }
    el.querySelectorAll('.nw-y').forEach(function (b) { b.onclick = function () { seen = b.dataset.v; el.querySelectorAll('.nw-y').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    el.querySelector('#nw-ok').onclick = function () {
      if (built.length < 4 || !seen) return warn(api, '接滿 4 個詞，也要回答下面那一題');
      for (var k = 1; k < 4; k++) { var c = counts(corpus, built[k - 1]), t = top(c); if (built[k] !== t) { var bad = built[k]; built = built.slice(0, k); draw(); return api.submit(false, '「' + built[k - 1] + '」後面接「' + bad + '」只有 ' + (c[bad] || 0) + ' 次，不是最多。', '找出含有「' + built[k - 1] + '」的句子，數它後面每個詞出現幾次。'); } }
      var inData = corpus.some(function (s) { return s.join(' ') === built.join(' '); });
      if ((seen === 'y') !== inData) return api.submit(false, '再對照一次訓練資料：這句話' + (inData ? '有' : '沒有') + '一模一樣出現過？', '一句一句比對 4 個詞。');
      api.submit(true, inData ? '這次剛好接出資料裡有的句子。' : '每一步都是資料裡「最常見」的接法，卻接出一句資料裡沒有的新句子 —— 這就是「生成」。但它不知道這句話是不是真的！');
    };
    draw();
  };
  L._nw = { counts: counts, top: top, WS: WS };

  /* =================================================================
     🔍 提示詞實驗室（A5）：四要素組提示詞 → 檢查 AI 給的標語草稿（太長？誇大？沒提到特色？）
     挑戰：草稿更多，還要自己寫一句合格的標語
     ================================================================= */
  var PROD = [
    { o: '雨傘', f: ['一按就開', '傘面很大', '收起來很小'] }, { o: '水壺', f: ['單手就能開', '保冷一整天', '很輕'] },
    { o: '椅子', f: ['可以摺起來', '坐起來很軟', '很輕'] }, { o: '鉛筆盒', f: ['有兩層', '磁鐵扣', '可以站著放'] }, { o: '書包', f: ['有反光條', '背起來很輕', '口袋很多'] }
  ];
  var WHO = ['同學', '爸媽', '老師'], TONE = ['幽默', '溫暖', '熱血'], HYPE = ['最', '保證', '第一', '全世界', '100%', '絕對'];
  function plen(s) { return s.replace(/[，。！？、「」\s,.!?]/g, '').length; }
  function hype(s) { return HYPE.filter(function (h) { return s.indexOf(h) >= 0; }); }
  function judgeDraft(s, feat, lim) { if (hype(s).length) return 'hype'; if (plen(s) > lim) return 'long'; if (s.indexOf(feat) < 0) return 'nofeat'; return 'ok'; }
  L.promptLab = function (el, api) {
    var P = pick(PROD), feat = pick(P.f), who = pick(WHO), tone = pick(TONE), lim = pick([12, 15]);
    var OK = [feat + '，天天都好用', '就是' + feat + '，你會愛上它', feat + '，換我陪你', '你的' + P.o + '，' + feat],
      LONG = [feat + '，不管是上學、放學、出去玩還是回家的路上都很方便', '只要擁有這個' + P.o + '，' + feat + '，你每天的生活都會變得更加輕鬆愉快'],
      HY = ['全世界' + feat + '的' + P.o, feat + '，保證你考一百分', '最棒的' + P.o + '，' + feat, feat + '，第一名的選擇'],
      NF = ['快來買，心情好好', '有了它，天天開心', P.o + '，好看又好用'];
    var n = api.hard ? 6 : 5, drafts;
    for (;;) {
      drafts = shuffle([pick(OK), pick(LONG), pick(HY), pick(NF)].concat(shuffle(OK.concat(HY, NF)).slice(0, n - 4)));
      var ks = drafts.map(function (d) { return judgeDraft(d, feat, lim); });
      if (drafts.filter(function (d, i) { return drafts.indexOf(d) === i; }).length === n && ks.indexOf('ok') >= 0 && ks.indexOf('long') >= 0) break;
    }
    el.dataset.lab = 'promptLab'; el.dataset.s = JSON.stringify({ o: P.o, feat: feat, who: who, tone: tone, lim: lim, drafts: drafts, fopts: P.f });
    var slot = {}, mark = {};
    var SL = [['who', '對象', WHO], ['feat', '特色', P.f.concat(['全世界最好用'])], ['tone', '語氣', TONE], ['lim', '限制', ['每句不超過 ' + lim + ' 字、不要誇大', '越長越好', '（不寫）']]];
    var KD = [['ok', '✅ 可以用'], ['long', '📏 太長'], ['hype', '📢 誇大'], ['nofeat', '❓ 沒提到特色']];
    el.innerHTML = '<div class="pl"><div class="note small"><b>任務：</b>幫<b>' + P.o + '</b>的廣告想標語。要給<b>' + who + '</b>看，想要<b>' + tone + '</b>的感覺，特色是「<b>' + feat + '</b>」，每句不超過 <b>' + lim + '</b> 個字。</div>' +
      tip(api, '四要素：對象、特色、語氣、限制。誇大的字（最、保證、第一、全世界、100%、絕對）不能用；字數不算標點。') +
      '<p class="small bold mt1">① 組出提示詞</p>' + SL.map(function (s) { return '<div class="pl-slot"><b class="small">' + s[1] + '</b><span class="pb-opts">' + s[2].map(function (o, k) { return '<button type="button" class="btn sm pl-s" data-s="' + s[0] + '" data-k="' + k + '">' + esc(o) + '</button>'; }).join('') + '</span></div>'; }).join('') +
      '<div class="pl-prompt small mono" id="pl-p"></div>' +
      '<p class="small bold mt2">② AI 給了這些草稿，每一句檢查一下</p><div class="stack">' + drafts.map(function (d, i) { return '<div class="pl-d"><span>「' + esc(d) + '」<small class="soft">' + plen(d) + ' 字</small></span><span class="pb-opts">' + KD.map(function (k) { return '<button type="button" class="btn sm pl-k" data-i="' + i + '" data-k="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</span></div>'; }).join('') + '</div>' +
      (api.hard ? '<p class="small bold mt2">③ 最後由你決定：寫一句自己的標語（要有特色「' + esc(feat) + '」、不超過 ' + lim + ' 字、不誇大）</p><input class="input" id="pl-mine" maxlength="40" aria-label="我自己的標語">' : '') +
      '<div class="row mt2"><button type="button" class="btn go" id="pl-ok">✅ 確認</button></div></div>';
    function prompt() {
      var g = function (k) { return slot[k] != null ? SL.filter(function (s) { return s[0] === k; })[0][2][slot[k]] : '＿＿'; };
      el.querySelector('#pl-p').textContent = '請為' + P.o + '寫 5 句給「' + g('who') + '」看的「' + g('tone') + '」標語，特色是「' + g('feat') + '」，限制：' + g('lim') + '。';
    }
    el.querySelectorAll('.pl-s').forEach(function (b) { b.onclick = function () { slot[b.dataset.s] = +b.dataset.k; el.querySelectorAll('.pl-s[data-s="' + b.dataset.s + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); prompt(); }; });
    el.querySelectorAll('.pl-k').forEach(function (b) { b.onclick = function () { mark[b.dataset.i] = b.dataset.k; el.querySelectorAll('.pl-k[data-i="' + b.dataset.i + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    prompt();
    el.querySelector('#pl-ok').onclick = function () {
      if (Object.keys(slot).length < 4) return warn(api, '提示詞的四個要素都要選');
      if (Object.keys(mark).length < drafts.length) return warn(api, '每一句草稿都要檢查');
      var want = { who: WHO.indexOf(who), feat: P.f.indexOf(feat), tone: TONE.indexOf(tone), lim: 0 };
      for (var k in want) if (slot[k] !== want[k]) return api.submit(false, '提示詞的「' + SL.filter(function (s) { return s[0] === k; })[0][1] + '」和任務不一樣。', '回去看任務：對象、特色、語氣、字數都寫在裡面。');
      for (var i = 0; i < drafts.length; i++) {
        var j = judgeDraft(drafts[i], feat, lim);
        if (mark[i] !== j) return api.submit(false, '「' + drafts[i] + '」檢查得不對。', j === 'hype' ? '裡面有誇大的字：' + hype(drafts[i]).join('、') + '。' : j === 'long' ? '數一數：' + plen(drafts[i]) + ' 字，超過 ' + lim + ' 字。' : j === 'nofeat' ? '它有提到「' + feat + '」嗎？' : '字數、誇大、特色都沒問題，可以用。');
      }
      if (api.hard) {
        var m = el.querySelector('#pl-mine').value.trim(), jm = judgeDraft(m, feat, lim);
        if (!m) return warn(api, '寫一句你自己的標語');
        if (jm !== 'ok') return api.submit(false, '你的標語' + { hype: '用了誇大的字（' + hype(m).join('、') + '）', long: '有 ' + plen(m) + ' 字，太長了', nofeat: '沒有提到「' + feat + '」' }[jm] + '。', '把特色放進去、刪掉多餘的字。');
        if (drafts.indexOf(m) >= 0) return api.submit(false, '這是 AI 的原句，改成你自己的說法。', 'AI 給草稿，你做決定 —— 至少改幾個字，變成你的。');
      }
      api.submit(true, '提示詞四要素都有，AI 才寫得對方向；AI 的草稿還是要一句一句檢查 —— 太長、誇大、沒提到特色的都不能用。');
    };
  };
  L._pl = { judgeDraft: judgeDraft, plen: plen, hype: hype, WHO: WHO, TONE: TONE };

  /* =================================================================
     🕵️ 深偽偵探（A6）：AI 生成的圖片常常有破綻 —— 手指數不對、時鐘的數字不對
     點出所有「有破綻」的圖片（手要 5 根手指；時鐘要剛好 1～12 各一次）
     ================================================================= */
  function handSVG(n, hue) {
    var s = '<svg viewBox="0 0 100 110" class="fk-svg"><rect x="28" y="52" width="46" height="46" rx="14" fill="hsl(' + hue + ',55%,78%)" stroke="#475569" stroke-width="1.5"/>';
    var fingers = n - 1, w = 44 / fingers;
    for (var i = 0; i < fingers; i++) s += '<rect x="' + (30 + i * w + 1) + '" y="' + (14 + Math.abs(i - (fingers - 1) / 2) * 5) + '" width="' + (w - 2.5) + '" height="44" rx="5" fill="hsl(' + hue + ',55%,78%)" stroke="#475569" stroke-width="1.5"/>';
    s += '<rect x="8" y="58" width="26" height="12" rx="6" transform="rotate(-30 20 64)" fill="hsl(' + hue + ',55%,78%)" stroke="#475569" stroke-width="1.5"/></svg>';
    return s;
  }
  function clockSVG(nums) {
    var s = '<svg viewBox="0 0 100 100" class="fk-svg"><circle cx="50" cy="50" r="44" fill="#fff" stroke="#334155" stroke-width="3"/>';
    nums.forEach(function (v, i) { var a = (i + 1) / nums.length * 2 * Math.PI - Math.PI / 2; s += '<text x="' + (50 + Math.cos(a) * 34) + '" y="' + (50 + Math.sin(a) * 34) + '" font-size="' + (nums.length > 12 ? 8 : 10) + '" text-anchor="middle" dominant-baseline="middle" font-weight="700">' + v + '</text>'; });
    return s + '<line x1="50" y1="50" x2="50" y2="24" stroke="#334155" stroke-width="3"/><line x1="50" y1="50" x2="68" y2="56" stroke="#334155" stroke-width="2"/></svg>';
  }
  function clockOk(nums) { return nums.length === 12 && nums.every(function (v, i) { return v === i + 1; }); }
  L.fakeSpot = function (el, api) {
    var N = api.hard ? 10 : 8, imgs;
    for (;;) {
      imgs = [];
      for (var i = 0; i < N; i++) {
        var fake = rnd(100) < 40;
        if (api.hard && i % 2) {
          var nums = []; for (var k = 1; k <= 12; k++) nums.push(k);
          if (fake) { var how = rnd(3); if (how === 0) nums[between(1, 10)] = nums[between(1, 10)] === 7 ? 3 : 7; else if (how === 1) nums.push(13); else { var a = between(1, 10); var t = nums[a]; nums[a] = nums[a + 1]; nums[a + 1] = t; } }
          imgs.push({ k: 'clock', nums: nums });
        } else imgs.push({ k: 'hand', n: fake ? pick([4, 6, 6, 7]) : 5, hue: between(15, 35) });
      }
      var f = imgs.filter(function (x) { return !ok(x); }).length;
      if (f >= 2 && f <= N - 2) break;
    }
    function ok(x) { return x.k === 'hand' ? x.n === 5 : clockOk(x.nums); }
    el.dataset.lab = 'fakeSpot'; el.dataset.imgs = JSON.stringify(imgs);
    var mark = {};
    el.innerHTML = '<div class="fk"><p class="small">這些圖片有些是 AI 生成的，乍看很正常，<b>細節卻不合理</b>。點出所有有破綻的圖片（可以點很多張，再點一次取消）。</p>' +
      tip(api, '一張一張數：手（含大拇指）應該有 5 根手指' + (api.hard ? '；時鐘應該剛好是 1～12，順序正確、不重複、不多也不少' : '') + '。') +
      '<div class="fk-grid" id="fk-g"></div><div class="row mt2"><button type="button" class="btn go" id="fk-ok">✅ 確認</button></div></div>';
    function draw() {
      el.querySelector('#fk-g').innerHTML = imgs.map(function (x, i) { return '<button type="button" class="fk-i' + (mark[i] ? ' on' : '') + '" data-i="' + i + '" aria-label="第 ' + (i + 1) + ' 張' + (mark[i] ? '（已標記）' : '') + '"><b>' + (i + 1) + '</b>' + (x.k === 'hand' ? handSVG(x.n, x.hue) : clockSVG(x.nums)) + (mark[i] ? '<span class="fk-tag">🤖 有破綻</span>' : '') + '</button>'; }).join('');
      el.querySelectorAll('.fk-i').forEach(function (b) { b.onclick = function () { var i = +b.dataset.i; if (mark[i]) delete mark[i]; else mark[i] = 1; draw(); }; });
    }
    draw();
    el.querySelector('#fk-ok').onclick = function () {
      var miss = [], wrong = [];
      imgs.forEach(function (x, i) { if (!ok(x) && !mark[i]) miss.push(i + 1); if (ok(x) && mark[i]) wrong.push(i + 1); });
      if (wrong.length) return api.submit(false, '第 ' + wrong.join('、') + ' 張其實沒有破綻。', '不要只憑感覺：數清楚手指、檢查時鐘的數字。');
      if (miss.length) return api.submit(false, '還有 ' + miss.length + ' 張有破綻沒找到。', '一張一張數，不要跳過。', '手：大拇指＋其他手指一共 5 根。' + (api.hard ? '時鐘：1、2、3…12 依序排一圈。' : ''));
      api.submit(true, 'AI 生成的圖片乍看很真，細節常常露出破綻。看到驚人的圖片：先停、查來源、找破綻、交叉比對，再決定要不要分享。');
    };
  };
  L._fk = { clockOk: clockOk };

  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
