/* =====================================================================
   單元一「數位時代」進度掛鉤
   ---------------------------------------------------------------------
   這個單元是 unforte_114 移植過來的，內容區保留原本的互動；116 在外面套上全站外框：
     · 全站頁首（← 單元一／闖關地圖、學生名牌）＋四課的課程小卡（進度、目前在這裡）
     · 每一課兩種星星（一課最多 6★，單元一共 24★）：
         🧪 實驗任務（x1～x4）：頁面裡的互動遊戲完成三項任務，每項 1★
         ✅ 快速檢核（u1～u4）：三題全對 → 一次都沒錯 3★、錯 1 次 2★、錯 2 次以上 1★（星星只會變多）
   ⚠️ 實驗任務只挑「算得出來」的操作（二進位、摩斯、RGB 解碼、動手調參數），
      不挑選擇題 —— 選擇題的答案寫在原本的頁面程式裡，F12 看得到，不拿來計星。
   ⚠️ 快速檢核的對錯原本寫在按鈕的 onclick 裡（F12 一看就知道），
      現在按鈕只剩 answerReview(題號, this)：由這支把「按了哪一顆」送到驗證伺服器判斷（dqs → dq → dqf），
      星星也由伺服器照「錯幾次」發、附收據（2026-10-03 起）。
   ===================================================================== */
(function () {
  /* 116：頁首、課程小卡、登入框都用全站樣式（theme.css + ui.js + unit.js），和其他單元長得一樣。 */
  var unit = document.body.getAttribute('data-unit');     // '1'～'4'；課程首頁沒有
  UI.topbar('#topbar', { title: '💾 數位時代', kicker: '單元一 · 3上 第 1 章 · 0 與 1 的藝術',
    hub: unit ? 'index.html' : '../hub.html', backLabel: unit ? '← 單元一' : '← 闖關地圖' });
  UNIT.cards('#ucards', 'digital', unit ? 'd' + unit : null);
  if (unit) UNIT.pager('#pager', 'digital', 'd' + unit, 'index.html');   // 每一課結尾：← 上一課／下一課 →

  // ⚠️ 要在登入前就換掉：按鈕的 onclick 已經改成 answerReview(題號, this)，原本的函式接不住
  if (unit) hookReview();
  var names = { '1': '1-1 二進位原理', '2': '1-2 文字數位化', '3': '1-3 音訊數位化', '4': '1-4 影像數位化' };

  /* 快速檢核：對錯、錯幾次、星星都在驗證伺服器（來源 private/11601/digital/review.json）
     一課一局（和 5016B 同一套）：第一次作答時開局（dqs）→ 每按一次送「第幾題、按鈕上的字」（dq）
     → 三題都答對才結算（dqf）：伺服器照「錯幾次」發星、附收據，網頁只負責存起來。 */
  function hookReview() {
    var saved = false, right = {}, total = 3, run = null, opening = null;
    function openRun() {
      if (!opening) opening = API.call('dqs', { u: unit, who: STORE.me() }).then(function (r) { run = r.run; total = r.n || 3; return run; }, function (e) { opening = null; throw e; });
      return opening;
    }
    function reset() {   // 局過期（放超過 6 小時）：重來一次
      run = null; opening = null; right = {}; saved = false;
      document.querySelectorAll('.review-btn').forEach(function (b) { b.classList.remove('right', 'wrong'); });
      var sc = document.getElementById('review-score'); if (sc) sc.innerText = '0 / ' + total;
    }
    window.answerReview = function (q, btn) {
      if (!btn || btn.dataset.busy || right[q]) return;   // 這題已經答對：不再送（伺服器也不會再記錯）
      btn.dataset.busy = '1';
      var v = btn.textContent.replace(/\s+/g, '');
      openRun().then(function (id) { return API.call('dq', { run: id, q: q, v: v }); }).then(function (r) {
        delete btn.dataset.busy;
        var fb = document.getElementById('review-feedback'), sc = document.getElementById('review-score');
        if (r.ok) {
          right[q] = true;
          btn.classList.remove('wrong'); btn.classList.add('right');   // 全站選項樣式：答對綠框
          if (fb) fb.innerText = '✅ 第 ' + q + ' 題答對了！';
        } else {
          btn.classList.add('wrong');   // 答錯紅框（不公布正解，看提示再想）
          if (fb) fb.innerText = '💡 ' + r.hint;
        }
        var n = Object.keys(right).length;
        if (sc) sc.innerText = n + ' / ' + total;
        if (n >= total) {
          var badge = document.getElementById('review-badge'); if (badge) badge.classList.remove('hidden');
          finish();
        }
      }, function (e) {
        delete btn.dataset.busy;
        if (e && (e.err === 'run-expired' || e.err === 'done')) reset();
        var fb = document.getElementById('review-feedback'); if (fb) fb.innerText = '📴 ' + API.msg(e);
      });
    };
    function finish() {
      if (saved) return; saved = true;
      API.call('dqf', { run: run }).then(function (res) {
        if (!STORE.me()) return;
        var rec = STORE.saveLevel('digital', 'u' + unit, { stars: res.stars, rc: res.rc, ts: res.ts, score: Math.max(0, 100 - res.wrong * 20) });
        var best = rec.record ? rec.record.stars : res.stars;
        UI.toast('🏅 ' + names[unit] + '：這次 ' + '★'.repeat(res.stars) + (rec.improved ? '（新紀錄！）' : '（最佳 ' + '★'.repeat(best) + '）'), 3500);
      }, function (e) {
        saved = false;
        var fb = document.getElementById('review-feedback'); if (fb) fb.innerText = '📴 星星沒有存到：' + API.msg(e);
      });
    }
  }


  /* ================================================================
     🧪 實驗任務 → 🔐 認證挑戰（2026-10-05 起）：每一課三項，每通過一項 1⭐（進度存在 digital 模組的 x1～x4）
     · 頁面上的互動實驗照舊給學生玩：這裡偵測到「玩過了」只標 🧭，不給星
     · 星星要按「🔐 認證」：驗證伺服器當場出題（server/55_xtask.js，🎲 每次不同）、判斷、發收據
       每局 3 顆 ❤️；選擇題答錯會換一題；全對 → 這一項的收據＋這一課的收據（伺服器逐一驗過其他任務的收據才算進總星數）
     · 舊的「網頁自己發的星星」沒有收據：有收據的成績會取代它（shared/store.js）
     頁面的狀態變數（currentLevel、bonanzaScore…）是原本程式的全域變數，直接讀。
     ================================================================ */
  function V(name) { try { return (0, eval)(name); } catch (e) { return undefined; } }   // 讀頁面程式的全域 let 變數
  function $(id) { return document.getElementById(id); }
  /* 認證挑戰的名稱（題數要和 private/11601/digital/xtask.json 一致） */
  var CERT = {
    bits: '💡 位元燈泡：十進位換成二進位（3 題）', bonanza: '💎 BINARY BONANZA：從 4 個二進位挑出正確的（4 題）', quiz: '🔁 雙向換算：二進位 ↔ 十進位（4 題）',
    listen: '📻 收報員：把摩斯電碼解成單字（2 題）', send: '📡 發報員：把單字發報成摩斯電碼（2 題）', codec: '🔤 編碼實驗室：ASCII、Big-5、Unicode（3 題）',
    wave: '🎚️ 聲音三要素：響度、音調、音色（4 題）', digit: '📉 取樣與量化（3 題）', format: '💾 格式與容量：WAV、MP3、MIDI（3 題）',
    explorer: '🔍 像素探險家：像素與色彩位元（3 題）', decode: '🎨 色彩解碼：RGB 的 0 和 1（3 題）', compress: '🗜️ 壓縮實驗室：顏色、尺寸與格式（3 題）'
  };
  var LAB = {
    '1': [
      { k: 'bits', t: '🔦 位元燈泡：拼出 3 個不同的目標數字', mem: {},
        fn: { calculateDecimal: function (m) { var lv = V('currentLevel'), g = V('gameLevels'); if (g && $('decimal-result') && +$('decimal-result').innerText === g[lv]) m[lv] = 1; return Object.keys(m).length >= 3; } } },
      { k: 'bonanza', t: '💎 BINARY BONANZA：一局裡拿到 100 分', fn: { evaluateSelection: function () { return (V('bonanzaScore') || 0) >= 100; }, endBonanzaGame: function () { return (V('bonanzaScore') || 0) >= 100; } } },
      { k: 'quiz', t: '🔁 雙向換算：十進位 → 二進位、二進位 → 十進位各答對 5 題', fn: { nextQuizQuestion: function () { return !!(V('isD2BCompleted') && V('isB2DCompleted')); } } }
    ],
    '2': [
      { k: 'listen', t: '📻 收報員：聽神祕訊號，成功解碼一個單字', fn: { checkDecryption: function () { return /^✅/.test(($('decrypt-feedback') || {}).innerText || ''); } } },
      { k: 'send', t: '📡 發報員：把單字正確發報成摩斯電碼', fn: { checkSendChallenge: function () { return /^✅/.test(($('send-feedback') || {}).innerText || ''); } } },
      { k: 'codec', t: '🔤 編碼實驗室：自己輸入一段「中英混合」的文字，比較 ASCII、Big-5、UTF-8', fn: { runMultiCodec: function () { var el = $('cipher-input-text') || {}, v = el.value || ''; return v !== el.defaultValue && /[A-Za-z0-9]/.test(v) && /[^\x00-\x7f]/.test(v); } } }
    ],
    '3': [
      { k: 'wave', t: '🎚️ 聲音三要素：調過響度和音調，並試過 3 種音色', mem: { t: {} },
        fn: { changeTimbre: function (m, a) { m.t[a[0]] = 1; return done3(m); } },
        input: { 'sound-loudness': function (m) { m.l = 1; return done3(m); }, 'sound-pitch': function (m) { m.p = 1; return done3(m); } } },
      { k: 'digit', t: '📉 取樣與量化：取樣點、量化位元都拉到最少，再拉到最多，比較波形', mem: {},
        input: { 'range-sampling': edge, 'range-quantize': edge } },
      { k: 'format', t: '💾 格式與容量：WAV、MP3、MIDI 三種都比較過，並試算錄音容量', mem: { f: {} },
        fn: { setCompareFormat: function (m, a) { m.f[a[0]] = 1; return Object.keys(m.f).length >= 3 && m.c; } },
        input: { 'audio-calc-slider': function (m) { m.c = 1; return Object.keys(m.f).length >= 3; } } }
    ],
    '4': [
      { k: 'explorer', t: '🔍 像素探險家：自己取樣、量化一張圖，和電腦的結果比對', fn: { peCompleteExplorer: function () { return true; } } },
      { k: 'decode', t: '🎨 色彩解碼：把二進位換成 RGB，解開 3 種顏色', mem: { n: 0 },
        fn: { submitImageDecode: function (m) { var u = V('unlockedColors'); m.n = Math.max(m.n, u ? u.size : 0); return m.n >= 3; } } },
      { k: 'compress', t: '🗜️ 壓縮實驗室：原圖、減少顏色、縮小尺寸三種都試過，比較檔案重量', mem: { c: {} },
        fn: { renderCompressDemo: function (m, a) { m.c[a[0]] = 1; return Object.keys(m.c).length >= 3; } } }
    ]
  };
  function done3(m) { return !!(m.l && m.p && Object.keys(m.t).length >= 3); }
  function edge(m, a, el) {   // 同一個滑桿碰過最小值和最大值
    var id = el.id; m[id] = m[id] || {};
    if (+el.value <= +el.min) m[id].lo = 1; if (+el.value >= +el.max) m[id].hi = 1;
    return ['range-sampling', 'range-quantize'].every(function (k) { return m[k] && m[k].lo && m[k].hi; });
  }

  function hookLab() {
    var tasks = LAB[unit]; if (!tasks) return;
    var ID = 'x' + unit, rec = STORE.level('digital', ID) || {}, ex = rec.extra || {};
    var xr = Object.assign({}, ex.xr || {}), seen = Object.assign({}, ex.explored || {});
    var nav = $('ucards'), anchor = nav && (nav.closest('.ucards-ph') || nav);
    var box = document.createElement('section'); box.className = 'card labtasks'; box.id = 'lab-tasks'; box.setAttribute('aria-label', '本課實驗任務');
    if (anchor) anchor.insertAdjacentElement('afterend', box);
    var G = null;   // 進行中的認證：{ t, run, qs, i, hearts }
    function n() { return tasks.filter(function (t) { return xr[t.k]; }).length; }
    function draw() {
      box.innerHTML = '<div class="row between"><div><p class="kicker">🧪 本課實驗任務 · 每通過一項認證 1⭐</p><h2 class="bold" style="font-size:1.05rem">先玩下面的實驗，再按「🔐 認證」證明你懂了</h2></div>' +
        '<span class="chip" id="lab-stars">' + n() + ' / 3 ⭐</span></div><div class="grid g3 mt1">' +
        tasks.map(function (t) {
          var ok = !!xr[t.k];
          return '<div class="labtask' + (ok ? ' done' : '') + '" data-k="' + t.k + '"><span class="ck">' + (ok ? '✅' : '⬜') + '</span><div class="lt-bd"><p class="bold">' + UI.esc(CERT[t.k] || t.t) + '</p>' +
            '<p class="tiny soft mt1">怎麼玩：' + UI.esc(t.t.replace(/^\S+\s*[^：]*：/, '')) + (seen[t.k] ? ' <span class="lt-seen">🧭 玩過了</span>' : '') + '</p>' +
            (ok ? '<p class="tiny bold mt1 lt-ok">已認證 ⭐</p>' : '<button type="button" class="btn sm mt1 lt-go" data-k="' + t.k + '">🔐 認證</button>') + '</div></div>';
        }).join('') + '</div><div id="xt-panel" class="xt-panel" aria-live="polite"></div>' +
        '<p class="tiny soft mt1">認證題目由伺服器當場出（每次都不一樣），每局 3 顆 ❤️。再加上最後的「快速檢核」（最多 3⭐），這一課最多 6⭐。</p>';
      box.querySelectorAll('.lt-go').forEach(function (b) { b.onclick = function () { start(tasks.filter(function (t) { return t.k === b.dataset.k; })[0]); }; });
    }
    function panel(html) { var p = $('xt-panel'); if (p) p.innerHTML = html; return p; }
    function start(t) {
      if (!STORE.me()) return UI.toast('請先登入（班級、座號）再認證。', 3000);
      panel('<div class="note mt2">⏳ 正在向伺服器拿題目…</div>');
      API.call('xs', { u: unit, k: t.k, who: STORE.me() }).then(function (r) {
        G = { t: t, run: r.run, qs: r.qs, i: 0, hearts: r.hearts }; ask();
      }, function (e) { panel('<div class="note bad mt2">📴 ' + UI.esc(API.msg(e)) + '</div>'); });
    }
    function head() {
      return '<div class="row between xt-head"><p class="bold">🔐 ' + UI.esc(CERT[G.t.k]) + '</p><span class="row" style="gap:.5rem"><span class="chip">第 ' + (G.i + 1) + ' / ' + G.qs.length + ' 題</span>' + UI.hearts(G.hearts, 3) + '</span></div>';
    }
    function ask() {
      var q = G.qs[G.i];
      var body = q.kind === 'choice'
        ? '<div class="xt-opts mt1">' + q.options.map(function (o) { return '<button type="button" class="pick xt-opt' + (q.mono ? ' mono' : '') + '" data-v="' + UI.esc(o.id) + '">' + UI.esc(o.label) + '</button>'; }).join('') + '</div>'
        : '<form class="row mt1 xt-form" style="gap:.5rem;flex-wrap:wrap"><label class="sr-only" for="xt-in">你的答案</label><input id="xt-in" class="xt-in' + (q.mono ? ' mono' : '') + '" autocomplete="off" placeholder="' + UI.esc(q.ph || '') + '"><button class="btn primary" type="submit">送出</button></form>';
      panel('<div class="xt-box mt2">' + head() + '<div class="xt-q mt1"><span class="xt-ic" aria-hidden="true">' + (q.icon || '❓') + '</span><div><p class="xt-t' + (q.mono ? ' mono' : '') + '">' + UI.esc(q.t) + '</p><p class="small soft">' + UI.esc(q.sub || '') + '</p>' +
        (q.morse ? '<button type="button" class="btn sm mt1" id="xt-play">▶ 播放這段電碼</button>' : '') + '</div></div>' + body + '<div id="xt-fb" class="mt1"></div>' +
        '<div class="row mt1"><button type="button" class="btn sm" id="xt-quit">✕ 先不認證</button></div></div>');
      $('xt-quit').onclick = function () { G = null; panel(''); };
      if ($('xt-play')) $('xt-play').onclick = function () { playMorse(q.t); };
      if (q.kind === 'choice') box.querySelectorAll('.xt-opt').forEach(function (b) { b.onclick = function () { send(b.dataset.v, b); }; });
      else { var f = box.querySelector('.xt-form'), inp = $('xt-in'); inp.focus(); f.onsubmit = function (e) { e.preventDefault(); if (inp.value.trim()) send(inp.value, null); }; }
    }
    var busy = false;
    function send(v, btn) {
      if (busy || !G) return; busy = true;
      var q = G.qs[G.i];
      API.call('xq', { run: G.run, i: q.i, v: v }).then(function (r) {
        busy = false; G.hearts = r.hearts;
        var fb = $('xt-fb');
        if (r.ok) {
          if (btn) btn.classList.add('right');
          box.querySelectorAll('.xt-opt, .xt-form input, .xt-form button').forEach(function (x) { x.disabled = true; });
          var last = G.i + 1 >= G.qs.length;
          fb.innerHTML = '<div class="note ok"><b>✅ 答對了！</b> ' + UI.esc(r.why || '') + '</div><div class="row mt1"><button type="button" class="btn primary" id="xt-next">' + (last ? '完成認證 🔐' : '下一題 →') + '</button></div>';
          var nx = $('xt-next'); nx.focus(); nx.onclick = last ? finish : function () { G.i++; ask(); };
          return;
        }
        if (r.dead) {
          panel('<div class="xt-box mt2">' + head() + '<div class="note bad mt1"><b>💔 ❤️ 用完了</b>，這一局結束。' + UI.esc(r.hint ? '提示：' + r.hint : '') + '<br>回去再玩一下上面的實驗，再挑戰一次（題目會換一組）。</div>' +
            '<div class="row mt1"><button type="button" class="btn primary" id="xt-again">🔁 重新認證</button><button type="button" class="btn" id="xt-quit2">先不認證</button></div></div>');
          var t = G.t; G = null; $('xt-again').onclick = function () { start(t); }; $('xt-quit2').onclick = function () { panel(''); };
          return;
        }
        if (r.swap) {   // 選擇題答錯：換一題
          G.qs[G.i] = r.swap; ask();
          $('xt-fb').innerHTML = '<div class="note bad">❌ 不對喔，換一題。' + UI.esc(r.hint ? '提示：' + r.hint : '') + '</div>';
          return;
        }
        if (btn) { btn.classList.add('wrong'); btn.disabled = true; }
        var h = box.querySelector('.xt-head'); if (h) h.outerHTML = head();
        fb.innerHTML = '<div class="note bad">❌ 再想想。' + UI.esc(r.hint ? '提示：' + r.hint : '') + '</div>';
        var inp = $('xt-in'); if (inp) { inp.select(); inp.focus(); }
      }, function (e) {
        busy = false; var fb = $('xt-fb'); if (fb) fb.innerHTML = '<div class="note bad">📴 ' + UI.esc(API.msg(e)) + '</div>';
      });
    }
    function finish() {
      var prev = Object.keys(xr).map(function (k) { return { k: k, rc: xr[k].rc, ts: xr[k].ts }; });
      API.call('xf', { run: G.run, prev: prev }).then(function (r) {
        xr[r.task.k] = { rc: r.task.rc, ts: r.task.ts };
        var saved = STORE.saveLevel('digital', ID, { stars: r.stars, rc: r.rc, ts: r.ts, extra: { xr: xr } });
        var t = G.t; G = null; draw();
        UI.toast('🔐 認證通過：' + (CERT[t.k] || '').split('（')[0] + '（' + n() + ' / 3 ⭐）', 3000);
        return saved;
      }, function (e) { var fb = $('xt-fb'); if (fb) fb.innerHTML = '<div class="note bad">📴 星星沒有存到：' + UI.esc(API.msg(e)) + '</div>'; });
    }
    /* ▶ 摩斯電碼播放（點 0.1 秒、劃 0.3 秒） */
    var actx = null;
    function playMorse(code) {
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume();
        var t0 = actx.currentTime + 0.05, u = 0.1;
        String(code).split('').forEach(function (c) {
          if (c === '.' || c === '-') { var o = actx.createOscillator(), g = actx.createGain(), d = c === '.' ? u : 3 * u;
            o.frequency.value = 650; o.connect(g); g.connect(actx.destination); g.gain.setValueAtTime(0.2, t0); o.start(t0); o.stop(t0 + d); t0 += d + u; }
          else t0 += 2 * u;
        });
      } catch (e) {}
    }
    /* 玩過頁面上的實驗 → 標 🧭（不給星） */
    function explored(t) {
      if (seen[t.k]) return; seen[t.k] = 1;
      STORE.saveLevel('digital', ID, { extra: { explored: seen } });
      if (!G) draw();
    }
    tasks.forEach(function (t) {
      var m = t.mem || {};
      Object.keys(t.fn || {}).forEach(function (name) {
        var orig = window[name]; if (typeof orig !== 'function') return;
        window[name] = function () {
          var args = arguments, r = orig.apply(this, args);
          function chk() { try { if (t.fn[name](m, args)) explored(t); } catch (e) {} }
          if (r && typeof r.then === 'function') r.then(chk, chk); else chk();
          return r;
        };
      });
      Object.keys(t.input || {}).forEach(function (id) {
        var el = $(id); if (!el) return;
        el.addEventListener('input', function () { try { if (t.input[id](m, null, el)) explored(t); } catch (e) {} });
      });
    });
    draw();
  }


  // 放在最後：上面的 LAB 表要先建好（已登入時 requireLogin 會立刻呼叫）
  UI.requireLogin(function () { if (unit) hookLab(); });
})();
