/* =====================================================================
   單元課程小卡（UNIT）── 一個單元包好幾個部分時使用（例如 116-2 單元六）
   ---------------------------------------------------------------------
   config.js 的單元寫 parts：[{ id, icon, title, ds, href, levels, maxStars }]
   UNIT.cards('#ucards', 'unit6', 'sheet')   ← 第三個參數是「目前在哪一部分」（單元首頁給 null）
   每張小卡是連結，顯示這一部分的星數／完成關數，目前這張會標「目前在這裡」。
   ===================================================================== */
window.UNIT = {
  find: function (id) { return (CONFIG.MODULES || []).filter(function (m) { return m.id === id; })[0]; },
  cards: function (el, unitId, current) {
    if (typeof el === 'string') el = document.querySelector(el);
    var u = UNIT.find(unitId); if (!el || !u) return;
    function draw() {
      el.className = 'ucards' + (current ? ' compact' : ''); el.style.setProperty('--n', u.parts.length);
      el.setAttribute('aria-label', '單元' + u.no + '課程小卡');
      el.innerHTML = u.parts.map(function (p, i) {
        var got = p.maxStars ? STORE.moduleStars(p.id) : STORE.moduleDone(p.id), max = p.maxStars || p.levels.length, unit = p.maxStars ? '⭐' : '關';
        var on = p.id === current, pct = max ? Math.round(got / max * 100) : 0;
        return '<a class="ucard uc-' + (i + 1) + (on ? ' on' : '') + '" href="' + UI.esc(p.href) + '"' + (on ? ' aria-current="page"' : '') + ' data-part="' + UI.esc(p.id) + '">' +
          '<span class="no">' + (i + 1) + '</span><span class="here">目前在這裡 👇</span>' +
          '<span class="ic">' + p.icon + '</span><span class="tt">' + UI.esc(p.title) + '</span><span class="ds">' + UI.esc(p.ds || '') + '</span>' +
          '<span class="pg"><span>' + (got >= max ? '✅ 完成' : (p.sequential ? '🔒 依序開放' : '進度')) + '</span><span>' + got + ' / ' + max + ' ' + unit + '</span></span>' +
          '<span class="bar"><i style="width:' + pct + '%"></i></span></a>';
      }).join('');
    }
    draw();
    window.addEventListener('store:change', draw);
  }
};
