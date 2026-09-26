/* =====================================================================
   🎲 密碼特務・隨機出題器（CARDGAME.gens）與答題工具
   ---------------------------------------------------------------------
   關卡裡寫 { type: 'gen', gen: '出題器名稱', n: 題數, prompt, tool }，
   每次「開始挑戰」都重新出題 → 每位學生、每一次的題目都不一樣，背答案沒有用。

   為什麼 F12 看不到答案？
     · 題目是當場隨機產生的，原始碼裡沒有「題目＋答案」的清單
     · 檢查答案時，是把學生的答案「照規則算回去」，看看是不是和題目對得上
       （例如解密題：把學生打的明文再加密一次，和畫面上的密文比對）
   出題器回傳：[{ t, sub, icon, ph, hint, check(答案)→true/false, why(答案)→答對後的解說, tool, … }]
   ===================================================================== */
(function () {
  var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // 單字庫：國中生認得的英文單字（大寫，3～6 個字母）
  var WORDS = ('CAT DOG SUN MOON STAR BOOK CODE FISH GAME BIRD RAIN TREE SNOW MILK RICE CAKE BEAR LION FROG DUCK KITE SHIP ' +
    'BEACH CLOUD APPLE MANGO PIZZA ROBOT MUSIC PHONE TIGER PANDA HAPPY SMILE LIGHT WATER PLANT TRAIN CHAIR BREAD SPACE EARTH ' +
    'OCEAN CANDY HELLO WORLD SCHOOL FRIEND TAIWAN SECRET AGENT CLASS MOUSE HORSE SHEEP LEMON GRAPE PEACH JUICE DREAM ' +
    'RIVER HOUSE GREEN QUEEN TEACH LEARN PAPER PENCIL WINDOW GARDEN ORANGE BANANA MONKEY RABBIT DRAGON SUMMER WINTER').split(' ');
  var DICT = {}; WORDS.forEach(function (w) { DICT[w] = 1; });

  /* 亂數：優先用瀏覽器的密碼學亂數 */
  function rnd(n) {
    try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); }
  }
  function pick(arr) { return arr[rnd(arr.length)]; }
  function picks(arr, n) { var a = arr.slice(), out = []; while (out.length < n && a.length) out.push(a.splice(rnd(a.length), 1)[0]); return out; }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }

  function num(c) { return A.indexOf(c); }
  function shift(word, k) { return word.split('').map(function (c) { var i = num(c); return i < 0 ? c : A[((i + k) % 26 + 26) % 26]; }).join(''); }
  function vig(word, keys, dir) { return word.split('').map(function (c, i) { return A[((num(c) + dir * keys[i % keys.length]) % 26 + 26) % 26]; }).join(''); }
  function pairs(a, b, n) { return a.split('').slice(0, n || 3).map(function (c, i) { return c + '→' + b[i]; }).join('、') + (a.length > (n || 3) ? '…' : ''); }

  var G = {
    /* 字母 ↔ 編號（A＝0 … Z＝25） */
    letterNum: function (rd) {
      var n = rd.n || 4, letters = picks(A.split(''), n);
      return letters.map(function (c, i) {
        var idx = num(c);
        if (i % 2 === 0) return { t: c, sub: 'A＝0，這個字母的編號是？', icon: '🔤', ph: '輸入數字',
          check: function (v) { return v === String(idx); }, why: c + ' 前面有 ' + idx + ' 個字母，從 0 開始數 → ' + idx + '。', hint: '從 A＝0 開始數，第一個字母是 0 不是 1。' };
        return { t: '編號 ' + idx, sub: '是哪一個字母？', icon: '🔢', ph: '輸入字母',
          check: function (v) { return v === c; }, why: '編號 ' + idx + ' → ' + c + '。', hint: 'A＝0、B＝1、C＝2…' };
      });
    },

    /* 轉盤繞圈：(編號 ± 位移) 超過就繞回來 */
    wrap: function (rd) {
      var n = rd.n || 4, out = [];
      for (var i = 0; i < n; i++) {
        var back = i === n - 1, a, s, ans;
        if (back) { a = between(0, 5); s = between(a + 1, a + 9); ans = (a - s + 26) % 26; }
        else if (i % 2 === 0) { a = between(19, 25); s = between(26 - a, 12); ans = (a + s) % 26; }   // 一定會繞圈
        else { a = between(0, 14); s = between(2, 9); ans = (a + s) % 26; }                          // 不會繞圈
        out.push((function (a, s, ans, back) {
          return { t: '編號 ' + a + (back ? ' 往前移 ' : ' 往後移 ') + s + ' 格', sub: back ? '小於 0 就從 25 繞回來' : '超過 25 就從 0 繞回來', icon: '🎡', ph: '新的編號',
            check: function (v) { return v === String(ans); },
            why: back ? '(' + a + ' − ' + s + ' + 26) % 26 ＝ ' + ans + '：往前走過 A 就繞到 Z。' : (a + s > 25 ? '(' + a + ' + ' + s + ') % 26 ＝ ' + ans + '：超過 25，減掉 26 繞回來。' : a + ' + ' + s + ' ＝ ' + ans + '，沒有超過 25，不用繞。'),
            hint: back ? '先減，如果變成負的就再加 26。' : '先加，如果超過 25 就再減 26。' };
        })(a, s, ans, back));
      }
      return out;
    },

    /* 凱薩加密：隨機單字＋隨機金鑰 */
    caesarEnc: function (rd) {
      return picks(WORDS.filter(function (w) { return w.length <= (rd.max || 6); }), rd.n || 3).map(function (w) {
        var k = between(1, 25);
        return { t: w, sub: '加密，金鑰 ' + k + '（每個字母往後移 ' + k + ' 格）', icon: '🔒', ph: '輸入密文', toolShift: 0,
          check: function (v) { return v.length === w.length && shift(v, -k) === w; },
          why: function (v) { return pairs(w, v) + ' —— 每個字母都往後移 ' + k + ' 格。'; },
          hint: '轉動轉盤到位移 ' + k + '，上排找明文、下排讀密文。' };
      });
    },

    /* 凱薩解密：只保留密文和金鑰；檢查時把學生的答案再加密一次比對 */
    caesarDec: function (rd) {
      return picks(WORDS, rd.n || 2).map(function (w) {
        var k = between(1, 25), c = shift(w, k); w = null;
        return { t: c, sub: '解密，金鑰 ' + k + '（每個字母往前移 ' + k + ' 格）', icon: '🔓', ph: '輸入明文', toolShift: 0,
          check: function (v) { return v.length === c.length && shift(v, k) === c; },
          why: function (v) { return pairs(c, v) + ' —— 解密就是往回移 ' + k + ' 格。'; },
          hint: '解密要反過來：在轉盤下排找密文，讀上排的明文。' };
      });
    },

    /* 暴力破解：不知道金鑰，只知道原文是一個英文單字 */
    bruteForce: function (rd) {
      return picks(WORDS.filter(function (w) { return w.length >= 4; }), rd.n || 2).map(function (w) {
        var c = shift(w, between(1, 25)); w = null;
        return { t: c, sub: '攔截到的密文！金鑰不知道，只知道原文是一個英文單字', icon: '🕵️', ph: '輸入破解出的單字', toolShift: 0,
          check: function (v) { return !!DICT[v] && v.length === c.length && shift(v, (num(c[0]) - num(v[0]) + 26) % 26) === c; },
          why: function (v) { var k = (num(c[0]) - num(v[0]) + 26) % 26; return '金鑰是 ' + k + '！凱薩密碼只有 25 種金鑰，一個一個試完就破解了 —— 這叫「暴力破解」，電腦一眨眼就能做完。'; },
          hint: '轉動轉盤，一格一格試，看哪一個位移會讓密文變成一個英文單字。' };
      });
    },

    /* 維吉尼亞加密：每個位置用不同金鑰 */
    vigEnc: function (rd) {
      return picks(WORDS.filter(function (w) { return w.length >= 4 && w.length <= 6; }), rd.n || 2).map(function (w) {
        var keys = [between(1, 9), between(1, 9), between(1, 9)];
        return { t: w, sub: '維吉尼亞加密，金鑰依序 ' + keys.join('、') + '（用完再從頭）', icon: '📜', ph: '輸入密文',
          check: function (v) { return v.length === w.length && vig(v, keys, -1) === w; },
          why: function (v) { return w.split('').map(function (ch, i) { return ch + '+' + keys[i % 3] + '＝' + v[i]; }).join('、') + '。同一個字母可能變成不同的密文，比凱薩難破解。'; },
          hint: '第 1 個字母移 ' + keys[0] + ' 格、第 2 個移 ' + keys[1] + ' 格、第 3 個移 ' + keys[2] + ' 格，第 4 個又從 ' + keys[0] + ' 開始。' };
      });
    },

    /* 答題統計：隨機產生全班的作答，問答對人數、選某個選項的人數、答對率 */
    tally: function (rd) {
      var n = between(10, 14), key = pick(['A', 'B', 'C', 'D']), ans = [];
      for (var i = 0; i < n; i++) ans.push(rnd(100) < 55 ? key : pick(['A', 'B', 'C', 'D']));
      var right = ans.filter(function (x) { return x === key; }).length;
      var other = pick(['A', 'B', 'C', 'D'].filter(function (x) { return x !== key; })), cnt = ans.filter(function (x) { return x === other; }).length;
      var rate = Math.round(right / n * 100), data = { ans: ans, key: key };
      var sub = '全班 ' + n + ' 人作答，正解是 ' + key;
      return [
        { t: '答對的有幾人？', sub: sub, icon: '✅', ph: '輸入人數', data: data, tool: 'tally',
          check: function (v) { return v === String(right); }, why: '一個一個看，是 ' + key + ' 就 +1 —— 這就是 COUNTIF 在做的事。', hint: '用下面的表，把選 ' + key + ' 的點起來。' },
        { t: '選 ' + other + ' 的有幾人？', sub: sub, icon: '🔍', ph: '輸入人數', data: data, tool: 'tally',
          check: function (v) { return v === String(cnt); }, why: '換一個條件（' + other + '）再數一次。錯最多的選項，就是大家最容易誤會的地方。', hint: '這次數的是 ' + other + '，不是正解。' },
        { t: '答對率是幾 %？', sub: sub + '（四捨五入到整數）', icon: '📊', ph: '輸入數字（不用打 %）', data: data, tool: 'tally',
          check: function (v) { return v.replace('%', '') === String(rate); }, why: '答對率 ＝ 答對人數 ÷ 作答人數 × 100 ＝ ' + right + ' ÷ ' + n + ' × 100 ≈ ' + rate + '%。', hint: '答對人數 ÷ 作答人數 × 100，再四捨五入。' }
      ];
    }
  };

  window.CARDGAME = window.CARDGAME || {};
  CARDGAME.gens = Object.assign(CARDGAME.gens || {}, G);
  CARDGAME.cipher = { shift: shift, vig: vig, WORDS: WORDS };      // 給測試與其他頁面用

  /* ── 答題工具 ── */
  CARDGAME.tools = CARDGAME.tools || {};
  /* 字母編號表 */
  CARDGAME.tools.abc = function (el) {
    el.innerHTML = '<div class="card soft-bg" style="padding:.8rem"><b class="small">🔤 字母編號表</b><div class="scroll-x mt1"><table class="t mono" style="min-width:40rem"><tr>' +
      A.split('').map(function (c) { return '<td style="text-align:center;padding:.25rem">' + c + '</td>'; }).join('') + '</tr><tr>' +
      A.split('').map(function (c, i) { return '<td style="text-align:center;padding:.25rem;color:var(--u3);font-weight:900">' + i + '</td>'; }).join('') + '</tr></table></div></div>';
  };
  /* 計數表：點一下作答格子做記號，自動算有幾格被點 */
  CARDGAME.tools.tally = function (el, it) {
    var d = it.data, on = {};
    function draw() {
      var n = Object.keys(on).length;
      el.innerHTML = '<div class="card soft-bg" style="padding:.8rem"><div class="row between"><b class="small">📋 全班作答（點一下做記號）</b><span class="chip">已點 ' + n + ' 格</span></div>' +
        '<div class="row mt1" style="gap:.35rem">' + d.ans.map(function (a, i) {
          return '<button type="button" class="pick mono" data-i="' + i + '" style="min-width:3.2rem;padding:.35rem;text-align:center' + (on[i] ? ';border-color:var(--ok);background:var(--ok-bg)' : '') + '">' +
            '<div class="tiny soft">' + (i + 1) + ' 號</div><div class="black">' + a + (on[i] ? ' ✔' : '') + '</div></button>';
        }).join('') + '</div><div class="row mt1"><button type="button" class="btn sm" id="tally-clear">清除記號</button></div></div>';
      el.querySelectorAll('[data-i]').forEach(function (b) { b.onclick = function () { var i = +b.dataset.i; if (on[i]) delete on[i]; else on[i] = 1; draw(); }; });
      el.querySelector('#tally-clear').onclick = function () { on = {}; draw(); };
    }
    draw();
  };
})();
