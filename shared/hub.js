/* =====================================================================
   闖關地圖引擎（兩學期共用）
   ---------------------------------------------------------------------
   內容全部來自 config.js 的 MODULES／RANKS，這支只管「怎麼畫」。
   需要：config.js、store.js、ui.js
   ===================================================================== */
(function () {
  var C = window.CONFIG, esc = UI.esc;

  // 一個單元可以包好幾個部分（parts，例如單元六：資料偵探＋試算表＋密碼特務），進度就把各部分加起來
  function modStars(m) { return m.parts ? m.parts.reduce(function (a, p) { return a + STORE.partStars(p); }, 0) : STORE.moduleStars(m.id); }
  function modDone(m) { return m.parts ? m.parts.reduce(function (a, p) { return a + STORE.partDone(p); }, 0) : STORE.moduleDone(m.id); }

  function rankOf(total) {
    var r = C.RANKS || [[0, '']], cur = r[0], next = null;
    for (var i = 0; i < r.length; i++) {
      if (total >= r[i][0]) { cur = r[i]; next = r[i + 1] || null; }
    }
    return { cur: cur, next: next };
  }

  function render() {
    var root = document.getElementById('hub');
    var p = STORE.me();
    var mods = C.MODULES;
    var total = 0, max = 0;
    mods.forEach(function (m) { total += modStars(m); max += m.maxStars; });
    var rk = rankOf(total);
    var toNext = rk.next ? (rk.next[0] - total) : 0;
    var nextMod = mods.filter(function (m) { return !m.soon && modDone(m) < m.levels.length; })[0];

    var head =
      '<section class="card pop" style="padding:1.5rem"><div class="tape"></div>' +
      '<div class="row between">' +
      '<div><p class="kicker">' + esc(C.SCHOOL) + ' · ' + esc(SEMESTER.name(C.TERM)) + '（' + esc(C.TERM) + '）</p>' +
      '<h1 class="title">資訊科技闖關地圖</h1>' +
      (p ? '<p class="soft bold mt1">' + esc(p.name) + '，歡迎回來！</p>' : '') + '</div>' +
      '<div class="center" style="min-width:12rem">' +
      '<div class="black" style="font-size:1.35rem">' + esc(rk.cur[1]) + '</div>' +
      '<div class="small soft bold">總星數 <span class="black" style="color:var(--star);font-size:1.2rem">' + total + '</span> / ' + max + '</div>' +
      '<div class="bar mt1"><i style="width:' + (max ? Math.round(total / max * 100) : 0) + '%"></i></div>' +
      '<div class="tiny soft mt1">' + (rk.next ? '再 ' + toNext + ' 顆星升級為 ' + esc(rk.next[1]) : '已達最高稱號！') + '</div>' +
      '</div></div>' +
      (nextMod ? '<div class="note mt2 small"><b>下一步建議：</b>單元' + esc(nextMod.no) + '「' + esc(nextMod.title) + '」—— <a href="' + esc(nextMod.href) + '" class="bold">前往 →</a></div>' : '<div class="note ok mt2 small"><b>全部完成！</b>去 5016B 做一個自己的專題吧。</div>') +
      openAllBanner() +
      '</section>';

    var cards = mods.map(function (m, i) {
      var s = modStars(m), d = modDone(m), n = m.levels.length;
      var pct = m.maxStars ? Math.round(s / m.maxStars * 100) : Math.round(d / n * 100);
      var status = m.soon ? '🚧 規劃中' : (d >= n ? '✅ 完成' : (d > 0 ? '進行中' : '尚未開始'));
      var tag = m.soon ? 'div' : 'a';
      return '<' + tag + ' class="card pop" ' + (m.soon ? 'aria-disabled="true"' : 'href="' + esc(m.href) + '"') + ' style="' + (m.soon ? 'opacity:.7;' : '') + 'text-decoration:none;animation-delay:' + (i * 60) + 'ms;border-top:6px solid var(--' + m.color + ')">' +
        '<div class="row between"><span class="chip" style="background:var(--' + m.color + '-bg);border-color:transparent;color:var(--' + m.color + ')">' +
        (m.no === '＋' ? '延伸挑戰' : '單元' + esc(m.no)) + ' · ' + esc(m.chapter) + '</span><span class="tiny bold soft">' + status + '</span></div>' +
        '<div class="row mt2" style="align-items:flex-start;flex-wrap:nowrap"><div style="font-size:2.4rem;line-height:1">' + m.icon + '</div>' +
        '<div><h2 style="font-size:1.25rem" class="black">' + esc(m.title) + '</h2><p class="small soft bold">' + esc(m.sub) + '</p></div></div>' +
        '<p class="small mt1">' + esc(m.desc) + '</p>' +
        '<div class="mt2 row between small bold">' +
        (m.maxStars ? '<span>⭐ ' + s + ' / ' + m.maxStars + '</span>' : '<span>不計星 · 記錄完成</span>') +
        '<span class="soft">' + d + ' / ' + n + (m.id === 'arduino' ? ' 節' : ' 關') + '</span></div>' +
        '<div class="bar mt1"><i style="width:' + pct + '%;' + (m.maxStars ? '' : 'background:var(--u4)') + '"></i></div>' +
        '</' + tag + '>';
    }).join('');

    var foot =
      '<section class="mt3 row small soft" style="justify-content:center">' +
      '<button class="btn sm" id="btn-export">⬇ 下載我的進度</button>' +
      '<label class="btn sm" style="cursor:pointer">⬆ 匯入進度<input type="file" id="file-import" accept=".json" hidden></label>' +
      '<button class="btn sm" id="btn-logout">換人登入</button></section>' +
      '<p class="tiny faint center mt2">目前為本機版：進度只存在這台電腦的瀏覽器。換電腦前請先「下載我的進度」。</p>';

    root.innerHTML = head + '<section class="grid g2 mt3">' + cards + '</section>' + foot;

    root.querySelector('#btn-logout').onclick = function () {
      if (confirm('確定要登出嗎？（進度不會被刪除）')) { STORE.logout(); UI.requireLogin(render); }
    };
    root.querySelector('#btn-export').onclick = function () {
      var me = STORE.me(); if (!me) return;
      var blob = new Blob([STORE.exportJSON()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '進度-' + C.TERM + '-' + me.cls + '_' + me.seat + '_' + me.name + '.json';
      a.click();
    };
    root.querySelector('#file-import').onchange = function (e) {
      var f = e.target.files[0]; if (!f) return;
      f.text().then(function (t) {
        var err = STORE.importJSON(t);
        UI.toast(err || '進度已匯入！');
      });
    };
  }

  function openAllBanner() {
    if (!window.HUB || !HUB.openAll()) return '';
    return '<div class="note warn mt2 small"><b>備課模式：</b>「依序開放」已暫時關閉，到 ' + esc(C.OPEN_ALL_UNTIL) + ' 自動恢復。</div>';
  }

  window.HUB = {
    render: render,
    /** 依序開放的總開關（有到期日） */
    openAll: function () {
      if (!C.OPEN_ALL_UNITS) return false;
      var today = new Date().toISOString().slice(0, 10);
      return !C.OPEN_ALL_UNTIL || today <= C.OPEN_ALL_UNTIL;
    }
  };

  window.addEventListener('store:change', function () { if (document.getElementById('hub') && STORE.me()) render(); });
})();
