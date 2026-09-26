/* =====================================================================
   共用小元件：跳脫、星星、提示、對話框、登入閘門、頁首
   ---------------------------------------------------------------------
   需要先載入 store.js。
   ===================================================================== */
(function () {
  var UI = {};

  UI.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>'"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c];
    });
  };

  /** ★★☆ */
  UI.stars = function (n, max) {
    max = max == null ? 3 : max; n = Math.max(0, Math.min(max, n || 0));
    var s = '';
    for (var i = 0; i < max; i++) s += i < n ? '★' : '<span class="off">★</span>';
    return '<span class="stars" aria-label="' + n + ' 顆星，共 ' + max + ' 顆">' + s + '</span>';
  };

  UI.hearts = function (n, max) {
    var s = '';
    for (var i = 0; i < max; i++) s += i < n ? '❤️' : '🤍';
    return '<span class="hearts" aria-label="剩下 ' + n + ' 顆愛心">' + s + '</span>';
  };

  var toastEl = null, toastTimer = null;
  UI.toast = function (msg, ms) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.setAttribute('role', 'status');
      toastEl.style.cssText = 'position:fixed;left:50%;bottom:1.5rem;transform:translateX(-50%);background:#1e293b;color:#fff;font-weight:800;padding:.7rem 1.2rem;border-radius:999px;box-shadow:0 10px 25px rgba(0,0,0,.25);z-index:2000;max-width:90vw;text-align:center;transition:opacity .2s';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg; toastEl.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.style.opacity = '0'; }, ms || 2200);
  };

  /** 開一個對話框，回傳關閉函式。html 內有 [data-close] 的按鈕會關閉它 */
  UI.modal = function (html, opts) {
    opts = opts || {};
    var m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = '<div class="card pop" role="dialog" aria-modal="true">' + html + '</div>';
    document.body.appendChild(m);
    function close() { if (m.parentNode) m.parentNode.removeChild(m); }
    m.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) close();
      else if (e.target === m && !opts.sticky) close();
    });
    var f = m.querySelector('input,button'); if (f) setTimeout(function () { f.focus(); }, 30);
    return { el: m, close: close };
  };

  /**
   * 登入閘門：沒登入就跳出「班級／座號／姓名」，登入後才呼叫 ready()。
   * ⚠️ 日後接學校 Google 帳號時，這一段換成 Google 登入按鈕即可。
   */
  UI.requireLogin = function (ready) {
    if (STORE.me()) { ready && ready(STORE.me()); return; }
    var dlg = UI.modal(
      '<p class="kicker">登入</p><h2 class="title" style="font-size:1.4rem">先告訴我你是誰</h2>' +
      '<p class="small soft mt1">進度會記在這台電腦的瀏覽器裡。</p>' +
      '<form class="stack mt2" id="login-form">' +
      '<div class="grid" style="grid-template-columns:1fr 1fr;gap:.75rem">' +
      '<label class="field">班級<input name="cls" inputmode="numeric" placeholder="901" maxlength="3" autocomplete="off"></label>' +
      '<label class="field">座號<input name="seat" inputmode="numeric" placeholder="5" maxlength="2" autocomplete="off"></label></div>' +
      '<label class="field">姓名<input name="name" placeholder="王小明" maxlength="12" autocomplete="off"></label>' +
      '<p id="login-err" class="small bold" style="color:var(--bad);min-height:1.2em" aria-live="polite"></p>' +
      '<button class="btn primary big" style="width:100%">開始闖關 →</button></form>',
      { sticky: true });
    dlg.el.querySelector('#login-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target;
      var err = STORE.login(f.cls.value, f.seat.value, f.name.value);
      if (err) { dlg.el.querySelector('#login-err').textContent = err; return; }
      dlg.close(); ready && ready(STORE.me());
    });
  };

  /** 頁首：返回基地＋學生名牌。放在 <header id="topbar"> 裡 */
  UI.topbar = function (el, opts) {
    opts = opts || {};
    if (typeof el === 'string') el = document.querySelector(el);
    if (!el) return;
    var hub = opts.hub || 'hub.html';
    function render() {
      var p = STORE.me();
      el.className = 'topbar';
      el.innerHTML =
        (opts.noBack ? '' : '<a class="back" href="' + hub + '">' + UI.esc(opts.backLabel || '← 闖關地圖') + '</a>') +
        (opts.title ? '<div><p class="kicker">' + UI.esc(opts.kicker || '') + '</p><h1 class="title">' + UI.esc(opts.title) + '</h1></div>' : '') +
        '<span class="who" id="who">' + (p ? UI.esc(p.cls + ' 班 ' + p.seat + ' 號 ' + p.name) : '尚未登入') + '</span>';
    }
    render();
    window.addEventListener('store:change', render);
  };

  window.UI = UI;
})();
