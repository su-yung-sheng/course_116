/* =====================================================================
   單元一「數位時代」進度掛鉤
   ---------------------------------------------------------------------
   這個單元是 unforte_114 移植過來的，內容區保留原本的互動；116 在外面套上全站外框：
     · 全站頁首（← 單元一／闖關地圖、學生名牌）＋四課的課程小卡（進度、目前在這裡）
     · 每一頁的「快速檢核」三題全對 → 記這一課的星星
         一次都沒錯 3★、錯 1 次 2★、錯 2 次以上 1★（星星只會變多）
   ⚠️ 快速檢核的對錯原本寫在按鈕的 onclick 裡（F12 一看就知道），
      現在改成封存：按鈕只剩 answerReview(題號, this) 和 data-k，由這支負責試開。
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
  UI.requireLogin(function () {});
  var names = { '1': '1-1 二進位原理', '2': '1-2 文字數位化', '3': '1-3 音訊數位化', '4': '1-4 影像數位化' };

  /* 快速檢核：對錯與提示都封存在按鈕的 data-k（tools/build.mjs 產生，來源 private/11601/digital/review.json）
     鑰匙＝按鈕上的字：按哪一顆就用哪一顆去試開，打開的內容告訴你對不對、錯的話提示是什麼。 */
  function hookReview() {
    var wrong = 0, saved = false, right = {};
    window.answerReview = function (q, btn) {
      if (!btn || btn.dataset.busy) return;
      btn.dataset.busy = '1';
      SEAL.open(btn.getAttribute('data-k'), 'digital/' + unit + '/' + q, btn.textContent.replace(/\s+/g, '')).then(function (r) {
        delete btn.dataset.busy;
        if (!r) return;
        var fb = document.getElementById('review-feedback'), sc = document.getElementById('review-score');
        if (r.ok) {
          right[q] = true;
          btn.className = 'bg-emerald-500 text-white border-emerald-600 rounded px-2 py-1';
          if (fb) fb.innerText = '✅ 第 ' + q + ' 題答對了！';
        } else {
          wrong++;
          if (fb) fb.innerText = '💡 ' + r.hint;
        }
        var n = Object.keys(right).length;
        if (sc) sc.innerText = n + ' / 3';
        if (n >= 3) {
          var badge = document.getElementById('review-badge'); if (badge) badge.classList.remove('hidden');
          if (!saved && STORE.me()) {
            saved = true;
            var stars = wrong === 0 ? 3 : (wrong === 1 ? 2 : 1);
            var res = STORE.saveLevel('digital', 'u' + unit, { stars: stars, score: Math.max(0, 100 - wrong * 20) });
            var best = res.record ? res.record.stars : stars;
            UI.toast('🏅 ' + names[unit] + '：這次 ' + '★'.repeat(stars) + (res.improved ? '（新紀錄！）' : '（最佳 ' + '★'.repeat(best) + '）'), 3500);
          }
        }
      });
    };
  }


})();
