/* =====================================================================
   互動體驗遊戲引擎（CARDGAME）── 單元三、單元五、單元六共用
   ---------------------------------------------------------------------
   CARDGAME.mount({ app: '#app', levels: [...], mod: 'platform', blurb: '…' })

   四種回合（內容寫在各學期的 content/*.js）
     sort   一張一張出卡，選它屬於哪一類（buckets）
     order  依規則排出順序（點選的先後）
     build  每個欄位挑一個零件，組出符合需求的東西（rules 檢查）
     type   自己打出答案（answers 任一個都算對；比對前全形轉半形、去空白、不分大小寫）
            可以帶 tool：'caesar'（凱薩轉盤）、'vigenere'（維吉尼亞密碼表）、'binary'（位元權值表）
     gen    🎲 隨機出題：每次開始都由 CARDGAME.gens[rd.gen](rd) 產生新題目（shared/cipher-gen.js），
            每位學生、每一次挑戰的題目都不一樣，背答案沒有用；題目自己帶 check(答案)，不存正解
   opts.sequential：上一關 ≥ 2⭐ 才開下一關（HUB.openAll() 備課模式可暫時全開）
   每一關 3 顆 ❤️，答錯扣一顆；過關時剩幾顆 ❤️ 就拿幾顆 ⭐。❤️ 用完要重來。
   ⚠️ 內容檔是 tools/build.mjs 從 private/ 產生的「封存版」：答案與解說都要用學生的答案試開（shared/seal.js）。
   ===================================================================== */
window.CARDGAME = { mount: function (opts) {
  var L = opts.levels, esc = UI.esc, MOD = opts.mod, HEARTS = 3;
  var app = typeof opts.app === 'string' ? document.querySelector(opts.app) : opts.app;
  var G = null;   // 遊戲狀態

  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function best(id) { var r = STORE.level(MOD, id); return r ? (r.stars || 0) : 0; }
  function open(i) { return !opts.sequential || i === 0 || best(L[i - 1].id) >= 2 || !!(window.HUB && HUB.openAll && HUB.openAll()); }
  function norm(s) { return String(s).replace(/[！-～]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); }).replace(/\s+/g, '').toUpperCase(); }

  /* ── 關卡選單 ─────────────────────────────── */
  function menu() {
    G = null;
    var total = L.reduce(function (s, lv) { return s + best(lv.id); }, 0);
    app.innerHTML =
      '<section class="card pop"><div class="tape"></div><div class="row between"><div>' +
      '<p class="kicker">' + L.length + ' 個互動體驗關卡 · ' + (opts.sequential ? '依序開放（上一關 2⭐ 開下一關）' : '自由挑戰順序') + '</p><h2 class="black" style="font-size:1.35rem">' + esc(opts.headline || '先讀「概念小卡」，再用遊戲證明你懂了') + '</h2>' +
      '<p class="small soft mt1">每關 3 顆 ❤️，答錯扣一顆；過關時剩幾顆 ❤️ 就拿幾顆 ⭐。可以一直重玩刷新紀錄。</p></div>' +
      '<div class="center"><div class="black" style="font-size:1.8rem;color:var(--star)">' + total + ' / ' + (L.length * 3) + '</div><div class="tiny soft bold">⭐ 總星數</div></div></div></section>' +
      '<section class="grid ' + UI.gridCols(L.length) + ' mt3">' + L.map(function (lv, i) {
        if (!open(i)) return '<button class="card lvcard locked" data-i="' + i + '" disabled aria-disabled="true"><div class="row between"><span style="font-size:2rem">🔒</span>' + UI.stars(0) + '</div>' +
          '<h3 class="black mt1">第 ' + (i + 1) + ' 關　' + esc(lv.title) + '</h3><p class="tiny soft bold mt1">上一關拿到 2 顆星就會開放</p></button>';
        return '<button class="card lvcard pop" data-i="' + i + '" style="animation-delay:' + (i * 40) + 'ms">' +
          '<div class="row between"><span style="font-size:2rem">' + lv.icon + '</span>' + UI.stars(best(lv.id)) + '</div>' +
          '<h3 class="black mt1">第 ' + (i + 1) + ' 關　' + esc(lv.title) + '</h3>' +
          '<p class="tiny soft bold mt1">' + esc(lv.book) + '</p></button>';
      }).join('') + '</section>';
    app.querySelectorAll('.lvcard:not(.locked)').forEach(function (b) { b.onclick = function () { learn(+b.dataset.i); }; });
  }

  /* ── 概念小卡 ─────────────────────────────── */
  function learn(i) {
    var lv = L[i];
    try { history.replaceState(null, '', '#' + lv.id); } catch (e) {}
    app.innerHTML =
      '<section class="card pop"><div class="tape"></div>' +
      '<p class="kicker">第 ' + (i + 1) + ' 關 · ' + esc(lv.book) + '</p>' +
      '<h2 class="black" style="font-size:1.6rem">' + lv.icon + ' ' + esc(lv.title) + '</h2>' +
      '<div class="note mt2 learn"><b>📖 概念小卡</b><div class="mt1">' + lv.learn + '</div></div>' +
      '<p class="small soft mt2">共 ' + lv.rounds.length + ' 回合 · 最佳紀錄 ' + UI.stars(best(lv.id)) + '</p>' +
      '<div class="row mt2"><button class="btn go big" id="go">開始挑戰 ▶</button><button class="btn" id="back">← 關卡選單</button></div></section>';
    document.getElementById('go').onclick = function () { start(i); };
    document.getElementById('back').onclick = menu;
    document.getElementById('go').focus();
  }

  /* ── 遊戲流程 ─────────────────────────────── */
  function start(i) {
    G = { i: i, lv: L[i], r: 0, hearts: HEARTS, right: 0, total: 0, combo: 0, maxCombo: 0 };
    round();
  }

  function hud() {
    var lv = G.lv;
    return '<div class="hud"><button class="btn sm" id="quit">✕ 離開</button>' +
      '<b>' + lv.icon + ' ' + esc(lv.title) + '</b><span class="chip">回合 ' + (G.r + 1) + ' / ' + lv.rounds.length + '</span>' +
      '<span style="margin-left:auto" class="combo">' + (G.combo >= 2 ? '🔥 連對 ' + G.combo : '') + '</span>' + UI.hearts(G.hearts, HEARTS) + '</div>';
  }
  function bindQuit() { var q = document.getElementById('quit'); if (q) q.onclick = function () { if (confirm('離開這一關？這次的進度不會保留。')) menu(); }; }

  function round() {
    var rd = G.lv.rounds[G.r];
    if (rd.type === 'sort') playSort(rd);
    else if (rd.type === 'order') playOrder(rd);
    else if (rd.type === 'build') playBuild(rd);
    else if (rd.type === 'type') playType(rd);
    else if (rd.type === 'gen') playGen(rd);
  }

  function hit(ok) {
    G.total++;
    if (ok) { G.right++; G.combo++; G.maxCombo = Math.max(G.maxCombo, G.combo); }
    else { G.combo = 0; G.hearts--; }
    return G.hearts > 0;
  }

  function nextRound() {
    G.r++;
    if (G.r >= G.lv.rounds.length) finish(); else round();
  }

  /* ⚠️ 下面四種回合用的都是「封存版」內容（tools/build.mjs 產生）：
       正確答案只能用學生的選擇去「試開」（SEAL.open），打得開才算對、才看得到解說。
       所以答錯時不會顯示正確答案 —— 扣一顆 ❤️、讓學生再想一次。 */
  var busy = false;
  function lock(b) { busy = b; app.classList.toggle('busy', b); }
  function outOfHearts(fb, disableSel) {
    app.querySelectorAll(disableSel).forEach(function (x) { x.disabled = true; });
    fb.innerHTML = '<div class="note bad pop"><b>💔 愛心用完了</b> 回去看看概念小卡，再挑戰一次。</div><div class="row mt2"><button class="btn primary" id="nx">看結果</button></div>';
    document.getElementById('nx').onclick = gameOver;
  }
  function refreshHud() { document.querySelector('.hud').outerHTML = hud(); bindQuit(); }

  /* sort：一張一張出卡 */
  function playSort(rd) {
    var items = rd.ordered ? rd.items.slice() : shuffle(rd.items);
    if (rd.pick) items = items.slice(0, rd.pick);
    var k = 0;
    function card() {
      var it = items[k];
      app.innerHTML = '<section class="card">' + hud() +
        '<p class="small soft bold mt2">' + esc(rd.prompt) + '（' + (k + 1) + ' / ' + items.length + '）</p>' +
        (it.scene ? '<p class="scene mt1">' + esc(it.scene) + '</p>' : '') +
        '<div class="qcard mt1 pop"><div class="big">' + it.icon + '</div><div class="txt">' + esc(it.t) + '</div></div>' +
        '<div class="buckets mt2">' + rd.buckets.map(function (b) {
          return '<button class="pick bucket" data-b="' + b.id + '"><span class="ic">' + b.icon + '</span><span>' + esc(b.label) + '</span></button>';
        }).join('') + '</div><div class="fb mt2" id="fb" aria-live="polite"></div></section>';
      bindQuit();
      app.querySelectorAll('.bucket').forEach(function (btn) {
        btn.onclick = function () {
          if (busy || btn.disabled) return;
          lock(true);
          SEAL.open(it.e, it.s, btn.dataset.b).then(function (r) {
            lock(false);
            var ok = !!r, alive = hit(ok), fb = document.getElementById('fb');
            refreshHud();
            if (ok) {
              app.querySelectorAll('.bucket').forEach(function (x) { x.disabled = true; });
              btn.classList.add('right');
              fb.innerHTML = '<div class="note ok pop"><b>✅ 答對了！</b> ' + esc(r.why) + '</div>' +
                '<div class="row mt2"><button class="btn primary" id="nx">' + (k + 1 < items.length ? '下一張 →' : '完成這回合 →') + '</button></div>';
              var nx = document.getElementById('nx'); nx.focus();
              nx.onclick = function () { k++; if (k < items.length) card(); else nextRound(); };
            } else {
              btn.classList.add('wrong'); btn.disabled = true;
              if (!alive) return outOfHearts(fb, '.bucket');
              var lab = rd.buckets.filter(function (b) { return b.id === btn.dataset.b; })[0];
              fb.innerHTML = '<div class="note bad pop">❌ 不是「' + esc(lab.label) + '」—— 再想想，換一個答案。</div>';
            }
          });
        };
      });
    }
    card();
  }

  /* order：依序點選 */
  function playOrder(rd) {
    var shown = shuffle(rd.items), got = 0, n = rd.items.length;
    app.innerHTML = '<section class="card">' + hud() +
      '<p class="bold mt2">🔢 ' + esc(rd.prompt) + '</p><p class="tiny soft">' + esc(rd.hint || '依序點選：先點排第一的。') + '</p>' +
      '<div class="order-grid mt2">' + shown.map(function (x) {
        return '<button class="pick order-btn" data-t="' + esc(x.t) + '"><div style="font-size:2rem">' + x.icon + '</div><div>' + esc(x.t) + '</div></button>';
      }).join('') + '</div><div class="fb mt2" id="fb" aria-live="polite"></div></section>';
    bindQuit();
    app.querySelectorAll('.order-btn').forEach(function (btn) {
      btn.onclick = function () {
        if (busy || btn.classList.contains('right')) return;
        lock(true);
        SEAL.open(rd.seq[got], rd.s + '#' + got, btn.dataset.t).then(function (r) {
          lock(false);
          var ok = !!r, alive = hit(ok), fb = document.getElementById('fb');
          refreshHud();
          if (ok) {
            btn.classList.add('right'); btn.insertAdjacentHTML('afterbegin', '<span class="n">' + (got + 1) + '</span>');
            got++;
            if (got === n) {
              fb.innerHTML = '<div class="note ok pop"><b>✅ 順序正確！</b> ' + esc(r.why || '') + '</div><div class="row mt2"><button class="btn primary" id="nx">下一回合 →</button></div>';
              document.getElementById('nx').onclick = nextRound; document.getElementById('nx').focus();
            } else fb.innerHTML = '';
          } else {
            btn.classList.remove('wrong'); void btn.offsetWidth; btn.classList.add('wrong');
            setTimeout(function () { btn.classList.remove('wrong'); }, 400);
            if (!alive) return outOfHearts(fb, '.order-btn');
            fb.innerHTML = '<div class="note bad pop">❌ 第 ' + (got + 1) + ' 個不是「' + esc(btn.dataset.t) + '」，再想想概念小卡裡的比喻。</div>';
          }
        });
      };
    });
  }

  /* build：挑零件組出符合需求的東西（每一種組合的結果都封存，鑰匙就是那個組合） */
  function playBuild(rd) {
    var c = 0;
    function customer() {
      var cu = rd.customers[c], chosen = {};
      app.innerHTML = '<section class="card">' + hud() +
        '<p class="small soft bold mt2">' + esc(rd.title || '接單組裝') + '（' + (c + 1) + ' / ' + rd.customers.length + '）</p>' +
        '<div class="note mt1 pop"><b style="font-size:1.1rem">' + esc(cu.who) + '</b><p class="mt1">' + cu.need + '</p></div>' +
        rd.slots.map(function (s) {
          return '<div class="slot"><b>' + esc(s.label) + '</b><div class="opts">' + s.options.map(function (o) {
            return '<button class="pick opt" data-s="' + s.id + '" data-o="' + o.id + '">' + esc(o.label) + (o.price ? '<div class="price">$' + o.price.toLocaleString() + '</div>' : '') + '</button>';
          }).join('') + '</div></div>';
        }).join('') +
        (rd.base ? '<p class="mt2 row between"><span class="small soft">含基本配備 $' + rd.base.price.toLocaleString() + '</span><span class="total" id="total"></span></p>' : '') +
        '<div class="row mt2"><button class="btn go big" id="submit">📦 交件</button></div><div class="fb mt2" id="fb" aria-live="polite"></div></section>';
      bindQuit();
      function price() {
        var p = rd.base ? rd.base.price : 0;
        rd.slots.forEach(function (s) { var o = chosen[s.id]; if (o && o.price) p += o.price; });
        return p;
      }
      function drawTotal() { var t = document.getElementById('total'); if (t) t.textContent = '合計 $' + price().toLocaleString(); }
      drawTotal();
      app.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () {
          var s = rd.slots.filter(function (x) { return x.id === b.dataset.s; })[0];
          chosen[s.id] = s.options.filter(function (o) { return o.id === b.dataset.o; })[0];
          app.querySelectorAll('.opt[data-s="' + s.id + '"]').forEach(function (x) { x.classList.toggle('on', x === b); });
          drawTotal();
        };
      });
      document.getElementById('submit').onclick = function () {
        var fb = document.getElementById('fb');
        if (busy) return;
        var missing = rd.slots.filter(function (s) { return !chosen[s.id]; });
        if (missing.length) { fb.innerHTML = '<div class="note warn">還沒選：' + missing.map(function (s) { return esc(s.label); }).join('、') + '</div>'; return; }
        var key = rd.slots.map(function (s) { return chosen[s.id].id; }).join('|');
        lock(true);
        SEAL.open(cu.outcomes[SEAL.h(cu.s, key)], cu.s, key).then(function (r) {
          lock(false);
          r = r || { ok: false, msgs: ['這個組合不符合客人的需求。'] };
          var alive = hit(r.ok);
          refreshHud();
          if (r.ok) {
            app.querySelectorAll('.opt,#submit').forEach(function (x) { x.disabled = true; });
            fb.innerHTML = '<div class="note ok pop"><b>✅ 客人很滿意！</b> ' + esc(r.good) + '</div><div class="row mt2"><button class="btn primary" id="nx">' + (c + 1 < rd.customers.length ? '下一位客人 →' : '完成這回合 →') + '</button></div>';
            var nx = document.getElementById('nx'); nx.focus();
            nx.onclick = function () { c++; if (c < rd.customers.length) customer(); else nextRound(); };
          } else {
            if (!alive) return outOfHearts(fb, '.opt,#submit');
            fb.innerHTML = '<div class="note bad pop"><b>❌ 退貨！</b><ul style="margin:.3rem 0 0;padding-left:1.2rem">' + r.msgs.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>' +
              '<p class="small soft mt1">改一改零件，再交件一次。</p>';
          }
        });
      };
    }
    customer();
  }

  /* type：自己打答案（可附工具）；每一種可接受的寫法各封存一份 */
  function playType(rd) {
    var qs = rd.shuffle ? shuffle(rd.items) : rd.items.slice(), k = 0;
    function tryOpen(it, v) {
      var i = 0;
      return (function next() {
        if (i >= it.e.length) return Promise.resolve(null);
        return SEAL.open(it.e[i++], it.s, v).then(function (r) { return r || next(); });
      })();
    }
    function q() {
      var it = qs[k];
      app.innerHTML = '<section class="card">' + hud() +
        '<p class="small soft bold mt2">' + esc(rd.prompt) + '（' + (k + 1) + ' / ' + qs.length + '）</p>' +
        '<div class="qcard mt1 pop"><div class="big">' + (it.icon || '✏️') + '</div><div class="txt">' + esc(it.t) + '</div>' +
        (it.sub ? '<div class="small soft bold mt1">' + esc(it.sub) + '</div>' : '') + '</div>' +
        (rd.tool ? '<div class="mt2" id="tool"></div>' : '') +
        '<form class="row mt2" id="tf"><input class="input" id="ans" autocomplete="off" style="flex:1;min-width:10rem;margin:0" placeholder="' + esc(it.ph || '輸入答案') + '" aria-label="答案">' +
        '<button class="btn go">確定</button></form><div class="fb mt2" id="fb" aria-live="polite"></div></section>';
      bindQuit();
      if (rd.tool && CARDGAME.tools[rd.tool]) CARDGAME.tools[rd.tool](document.getElementById('tool'), it);
      var inp = document.getElementById('ans'); inp.focus();
      document.getElementById('tf').onsubmit = function (e) {
        e.preventDefault();
        var v = norm(inp.value); if (!v || busy) return;
        lock(true);
        tryOpen(it, v).then(function (r) {
          lock(false);
          var ok = !!r, alive = hit(ok), fb = document.getElementById('fb');
          refreshHud();
          if (ok) {
            inp.disabled = true; document.querySelector('#tf button').disabled = true;
            fb.innerHTML = '<div class="note ok pop"><b>✅ 答對了！</b> ' + esc(r.why || '') + '</div>' +
              '<div class="row mt2"><button class="btn primary" id="nx">' + (k + 1 < qs.length ? '下一題 →' : '完成這回合 →') + '</button></div>';
            var nx = document.getElementById('nx'); nx.focus();
            nx.onclick = function () { k++; if (k < qs.length) q(); else nextRound(); };
          } else if (!alive) {
            inp.disabled = true; outOfHearts(fb, '#tf button');
          } else {
            inp.select();
            fb.innerHTML = '<div class="note bad pop">❌ 不對喔，再試一次。' + (it.hint ? ' 💡 ' + esc(it.hint) : '') + '</div>';
          }
        });
      };
    }
    q();
  }

  /* gen：🎲 隨機出題。題目在「開始這一回合」時才產生，答錯扣心、不公布答案；答對才顯示解說 */
  function playGen(rd) {
    var make = CARDGAME.gens && CARDGAME.gens[rd.gen];
    if (!make) { app.innerHTML = '<section class="card"><p class="note bad">找不到出題器：' + esc(rd.gen) + '</p></section>'; return; }
    var qs = make(rd), k = 0;
    function q() {
      var it = qs[k], tool = it.tool || rd.tool;
      app.innerHTML = '<section class="card">' + hud() +
        '<p class="small soft bold mt2">🎲 ' + esc(rd.prompt) + '（' + (k + 1) + ' / ' + qs.length + '）</p>' +
        '<div class="qcard mt1 pop"><div class="big">' + (it.icon || '✏️') + '</div><div class="txt mono">' + esc(it.t) + '</div>' +
        (it.sub ? '<div class="small soft bold mt1">' + esc(it.sub) + '</div>' : '') + '</div>' +
        (tool ? '<div class="mt2" id="tool"></div>' : '') +
        '<form class="row mt2" id="tf"><input class="input" id="ans" autocomplete="off" style="flex:1;min-width:10rem;margin:0" placeholder="' + esc(it.ph || '輸入答案') + '" aria-label="答案">' +
        '<button class="btn go">確定</button></form><div class="fb mt2" id="fb" aria-live="polite"></div></section>';
      bindQuit();
      if (tool && CARDGAME.tools[tool]) CARDGAME.tools[tool](document.getElementById('tool'), it);
      var inp = document.getElementById('ans'); inp.focus();
      document.getElementById('tf').onsubmit = function (e) {
        e.preventDefault();
        var v = norm(inp.value); if (!v) return;
        var ok = !!it.check(v), alive = hit(ok), fb = document.getElementById('fb');
        refreshHud();
        if (ok) {
          inp.disabled = true; document.querySelector('#tf button').disabled = true;
          fb.innerHTML = '<div class="note ok pop"><b>✅ 答對了！</b> ' + esc(typeof it.why === 'function' ? it.why(v) : (it.why || '')) + '</div>' +
            '<div class="row mt2"><button class="btn primary" id="nx">' + (k + 1 < qs.length ? '下一題 →' : '完成這回合 →') + '</button></div>';
          var nx = document.getElementById('nx'); nx.focus();
          nx.onclick = function () { k++; if (k < qs.length) q(); else nextRound(); };
        } else if (!alive) {
          inp.disabled = true; outOfHearts(fb, '#tf button');
        } else {
          inp.select();
          fb.innerHTML = '<div class="note bad pop">❌ 不對喔，再試一次。' + (it.hint ? ' 💡 ' + esc(it.hint) : '') + '</div>';
        }
      };
    }
    q();
  }

  /* ── 結束 ─────────────────────────────────── */
  function finish() {
    var stars = G.hearts, lv = G.lv, i = G.i;
    var r = STORE.saveLevel(MOD, lv.id, { stars: stars, score: Math.round(G.right / Math.max(1, G.total) * 100), extra: { maxCombo: G.maxCombo } });
    app.innerHTML = '<section class="card pop center"><div class="tape"></div><p class="kicker">過關！</p>' +
      '<h2 class="black" style="font-size:1.6rem">' + lv.icon + ' ' + esc(lv.title) + '</h2>' +
      '<div class="end-star mt1">' + UI.stars(stars) + '</div>' +
      '<p class="bold">答對 ' + G.right + ' / ' + G.total + ' · 最高連對 ' + G.maxCombo + '</p>' +
      (r.improved ? '<p class="note ok small mt2" style="display:inline-block">⭐ 新紀錄已儲存！</p>' : '<p class="small soft mt1">最佳紀錄：' + UI.stars(best(lv.id)) + '</p>') +
      '<div class="row mt3" style="justify-content:center"><button class="btn" id="again">🔁 再玩一次</button>' +
      (i + 1 < L.length ? '<button class="btn go" id="next">下一關：' + esc(L[i + 1].title) + ' →</button>' : '') +
      '<button class="btn" id="menu">關卡選單</button></div></section>';
    document.getElementById('again').onclick = function () { start(i); };
    document.getElementById('menu').onclick = menu;
    var n = document.getElementById('next'); if (n) n.onclick = function () { learn(i + 1); };
    if (r.improved) UI.toast('⭐ ' + lv.title + '：' + '★'.repeat(stars));
  }

  function gameOver() {
    var i = G.i, lv = G.lv;
    app.innerHTML = '<section class="card pop center"><p style="font-size:3rem">💔</p><h2 class="black">愛心用完了</h2>' +
      '<p class="soft mt1">回去看看概念小卡，再挑戰一次！這次的結果不會記錄。</p>' +
      '<div class="row mt3" style="justify-content:center"><button class="btn go" id="retry">📖 看小卡再挑戰</button><button class="btn" id="menu">關卡選單</button></div></section>';
    document.getElementById('retry').onclick = function () { learn(i); };
    document.getElementById('menu').onclick = menu;
  }

  UI.requireLogin(function () {
    var want = (location.hash || '').slice(1);
    var i = L.findIndex(function (lv) { return lv.id === want; });
    if (i >= 0 && open(i)) learn(i); else menu();
  });
  return { menu: menu, learn: learn };
} };

/* ── 答題工具 ─────────────────────────────── */
CARDGAME.tools = {
  /* 凱薩轉盤：外圈明文、內圈密文，可以自己轉 */
  caesar: function (el, it) {
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', shift = it.toolShift != null ? it.toolShift : 0;
    function draw() {
      el.innerHTML = '<div class="card soft-bg" style="padding:.8rem"><div class="row between"><b class="small">🎡 凱薩轉盤（上排明文 → 下排密文）</b>' +
        '<span class="row"><button type="button" class="btn sm" data-d="-1">◀</button><span class="bold mono">位移 ' + shift + '</span><button type="button" class="btn sm" data-d="1">▶</button></span></div>' +
        '<div class="scroll-x mt1"><table class="t mono" style="text-align:center;min-width:40rem"><tr>' + A.split('').map(function (c) { return '<td style="text-align:center;padding:.25rem">' + c + '</td>'; }).join('') + '</tr><tr>' +
        A.split('').map(function (c, i) { return '<td style="text-align:center;padding:.25rem;color:var(--unit);font-weight:900">' + A[(i + shift + 26) % 26] + '</td>'; }).join('') + '</tr></table></div></div>';
      el.querySelectorAll('[data-d]').forEach(function (b) { b.onclick = function () { shift = (shift + (+b.dataset.d) + 26) % 26; draw(); }; });
    }
    draw();
  },
  /* 維吉尼亞：列出每個位置的金鑰，並附一小張密碼表 */
  vigenere: function (el) {
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    el.innerHTML = '<details class="card soft-bg" style="padding:.8rem"><summary class="bold small" style="cursor:pointer">📜 維吉尼亞密碼表（點開）</summary><div class="scroll-x mt1"><table class="t mono" style="min-width:44rem;font-size:.78rem"><tr><th>金鑰</th>' +
      A.split('').map(function (c) { return '<th style="text-align:center;padding:.15rem">' + c + '</th>'; }).join('') + '</tr>' +
      A.split('').map(function (_, r) { return '<tr><th>' + r + '</th>' + A.split('').map(function (c, i) { return '<td style="text-align:center;padding:.15rem">' + A[(i + r) % 26] + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</table></div></details>';
  },
  /* 位元權值表：8 個位元，點一下切換 0／1 */
  binary: function (el) {
    var bits = [0, 0, 0, 0, 0, 0, 0, 0], W = [128, 64, 32, 16, 8, 4, 2, 1];
    function draw() {
      var sum = bits.reduce(function (s, b, i) { return s + b * W[i]; }, 0);
      el.innerHTML = '<div class="card soft-bg" style="padding:.8rem"><b class="small">🔢 位元計算機（點格子切換 0／1）</b><div class="row mt1" style="flex-wrap:nowrap;overflow-x:auto">' +
        bits.map(function (b, i) { return '<button type="button" class="pick mono" data-i="' + i + '" style="text-align:center;min-width:3rem;padding:.4rem"><div class="tiny soft">' + W[i] + '</div><div class="black" style="font-size:1.2rem">' + b + '</div></button>'; }).join('') +
        '<span class="bold mono" style="margin-left:.5rem">＝ ' + sum + '</span></div></div>';
      el.querySelectorAll('[data-i]').forEach(function (b) { b.onclick = function () { bits[+b.dataset.i] ^= 1; draw(); }; });
    }
    draw();
  }
};
