/* =====================================================================
   單元一「數位時代」進度掛鉤
   ---------------------------------------------------------------------
   這個單元是 unforte_114 移植過來的，頁面本身不動，只在最後掛上這支：
     · 每一頁的「快速檢核」三題全對 → 記這一小關的星星
         一次都沒錯 3★、錯 1 次 2★、錯 2 次以上 1★（星星只會變多）
     · 課程首頁的四張單元卡旁邊顯示已拿到的星星
     · 左下角一顆「← 闖關地圖」
   ⚠️ 快速檢核的對錯原本寫在按鈕的 onclick 裡（F12 一看就知道），
      現在改成封存：按鈕只剩 answerReview(題號, this) 和 data-k，由這支負責試開。
   ===================================================================== */
(function () {
  /* 這幾頁用 Tailwind，不載 theme.css（會蓋掉原本的底色），
     所以登入對話框需要的樣式只在 .modal 底下補一份。 */
  var css = document.createElement('style');
  css.textContent =
    '.modal{position:fixed;inset:0;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;padding:1rem;z-index:3000;font-family:"Noto Sans TC",sans-serif}' +
    '.modal .card{background:#fff;border-radius:1rem;padding:1.4rem;width:min(28rem,100%);color:#1e293b}' +
    '.modal .kicker{font-size:.72rem;font-weight:900;letter-spacing:.18em;color:#64748b}' +
    '.modal .title{font-weight:900}.modal .small{font-size:.85rem}.modal .soft{color:#64748b}' +
    '.modal .mt1{margin-top:.5rem}.modal .mt2{margin-top:1rem}.modal .stack>*+*{margin-top:.75rem}.modal .grid{display:grid}' +
    '.modal .field{display:block;font-weight:700;font-size:.9rem}.modal .field input{width:100%;margin-top:.3rem;font-size:1rem;padding:.55rem .7rem;border:2px solid #e2e8f0;border-radius:.7rem}' +
    '.modal .btn{border:0;border-radius:.8rem;font-weight:800;padding:.75rem 1rem;cursor:pointer}.modal .btn.primary{background:#1e293b;color:#fff}' +
    '#c116-back{position:fixed;left:1rem;bottom:1rem;z-index:2500;background:#1e293b;color:#fff;font-weight:800;font-size:.85rem;padding:.5rem .9rem;border-radius:999px;text-decoration:none;box-shadow:0 8px 18px rgba(0,0,0,.2);font-family:"Noto Sans TC",sans-serif}' +
    '#c116-back:hover{background:#334155}' +
    '.c116-stars{display:inline-block;margin-left:.5rem;color:#f59e0b;font-weight:900;letter-spacing:.05em}.c116-stars .off{color:#d6d3d1}';
  document.head.appendChild(css);

  var back = document.createElement('a');
  back.id = 'c116-back'; back.href = '../hub.html'; back.textContent = '← 闖關地圖';
  document.body.appendChild(back);

  var unit = document.body.getAttribute('data-unit');     // '1'～'4'；課程首頁沒有
  var names = { '1': '二進位原理', '2': '文字數位化', '3': '音訊數位化', '4': '影像數位化' };

  // ⚠️ 要在登入前就換掉：按鈕的 onclick 已經改成 answerReview(題號, this)，原本的函式接不住
  if (unit) hookReview();
  UI.requireLogin(function () { if (!unit) showStarsOnMap(); });

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

  function showStarsOnMap() {
    var lv = STORE.levels('digital');
    ['1', '2', '3', '4'].forEach(function (u) {
      var a = document.querySelector('#course-map a[href="' + u + '.html"]') ||
              document.querySelectorAll('a[href="' + u + '.html"]')[1];
      if (!a) return;
      var n = (lv['u' + u] && lv['u' + u].stars) || 0;
      var s = document.createElement('span');
      s.className = 'c116-stars';
      s.innerHTML = [0, 1, 2].map(function (i) { return i < n ? '★' : '<span class="off">★</span>'; }).join('');
      s.setAttribute('aria-label', '已獲得 ' + n + ' 顆星');
      a.parentNode.appendChild(s);
    });
  }
})();
