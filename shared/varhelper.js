/* =====================================================================
   🌐 變數英文小幫手（VARHELP）── 輸入中文概念，查適合的 Python 英文變數名稱
   ---------------------------------------------------------------------
   課程設計參考：teacheryimei/course115-1「Python 畢旅冒險」（經原作者同意）
   · 只幫忙「命名」，不產生程式碼；順便教命名規則（小寫、底線、不能數字開頭、不能用保留字）
   · VARHELP.button(size)  回傳按鈕 HTML（任何地方都能放，點了就開小幫手）
   · VARHELP.bind(root)    在頁面上放好小幫手視窗（只要呼叫一次）
   · VARHELP.reserved(code) 找出「把保留字當變數名稱」的那一行（例：class = input()）→ { word, line } 或 null
   ===================================================================== */
(function () {
  var WORDS = {
    '姓名': ['name', 'student_name'], '名字': ['name', 'student_name'], '班級': ['class_name', 'my_class'], '座號': ['seat_no', 'student_no'],
    '年齡': ['age'], '身高': ['height'], '體重': ['weight'], 'BMI': ['bmi'], '分數': ['score'], '成績': ['score', 'grade'],
    '目的地': ['destination'], '城市': ['city'], '地點': ['place'], '天數': ['days'], '活動': ['activity'],
    '票價': ['ticket_price', 'price'], '價格': ['price'], '張數': ['ticket_count'], '數量': ['count', 'quantity'], '人數': ['people_count', 'people'],
    '總數': ['total'], '總額': ['total_amount'], '總金額': ['total_amount'], '每人': ['per_person'], '剩下': ['remain', 'left_over'], '餘數': ['remainder'],
    '預算': ['budget'], '總預算': ['total_budget'], '交通費': ['transport_cost'], '餐費': ['meal_cost'], '剩餘預算': ['remaining_budget'],
    '距離': ['distance'], '時間': ['time', 'hours'], '速度': ['speed'], '平均': ['average', 'avg'], '面積': ['area'], '邊長': ['side_length'],
    '氣溫': ['temperature', 'temp'], '溫度': ['temperature', 'temp'], '降雨機率': ['rain_chance'], '電量': ['battery_level'],
    '密碼': ['password'], '答案': ['answer'], '謎底': ['answer'], '猜測': ['guess'], '猜的數字': ['guess'], '次數': ['attempts', 'count'], '計數': ['count', 'counter'],
    '倒數': ['countdown', 'seconds'], '秒數': ['seconds'], '號碼': ['number', 'num'], '數字': ['number', 'num'], '結果': ['result'],
    '訊息': ['message', 'msg'], '是否完成': ['is_done', 'finished'], '學生證': ['has_student_card'], '活動證': ['has_event_pass']
  };
  var RESERVED = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
    'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
  var BUILTIN = ['print', 'input', 'int', 'float', 'str', 'list', 'len', 'max', 'min', 'sum', 'round', 'range', 'type'];   // 不是保留字，但拿來當變數名稱會蓋掉同名的函式
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>'"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]; }); }

  function find(q) {
    q = String(q || '').trim();
    if (!q) return [];
    if (WORDS[q]) return WORDS[q];
    var hit = [];   // 部分符合：「剩餘的預算」也找得到「剩餘預算」
    Object.keys(WORDS).forEach(function (k) { if ((q.indexOf(k) >= 0 || k.indexOf(q) >= 0) && k.length >= 2) WORDS[k].forEach(function (w) { if (hit.indexOf(w) < 0) hit.push(w); }); });
    return hit.slice(0, 6);
  }
  /* 自己取的英文名字合不合規則 */
  function lint(name) {
    name = String(name || '').trim();
    if (!name) return '';
    if (RESERVED.indexOf(name) >= 0) return '❌「' + name + '」是 Python 的保留字，不能當變數名稱' + (name === 'class' ? '（可以用 class_name）' : '') + '。';
    if (/^\d/.test(name)) return '❌ 不能用數字開頭（可以把數字放後面，例如 score1）。';
    if (/\s/.test(name)) return '❌ 不能有空格，多個單字用底線 _ 連起來（例如 ticket_price）。';
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) return '⚠️ 建議只用英文字母、數字、底線（中文名字在 Python 可以跑，但和同學、老師溝通比較不方便）。';
    if (BUILTIN.indexOf(name) >= 0) return '⚠️「' + name + '」是 Python 內建的函式名稱，拿來當變數會把它蓋掉，換一個吧。';
    if (/[A-Z]/.test(name)) return '✅ 可以用；Python 習慣全部小寫、單字用底線分開（例如 ' + name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase() + '）。';
    return '✅「' + name + '」是好名字！';
  }

  window.VARHELP = {
    words: WORDS,
    button: function (size) { return '<button class="btn sm" type="button" data-varhelp="1">🌐 變數英文小幫手</button>'; },
    reserved: function (code) {
      var lines = String(code || '').split('\n');
      for (var i = 0; i < lines.length; i++) {
        var m = lines[i].match(/^\s*([A-Za-z_]\w*)\s*=(?!=)/);
        if (m && RESERVED.indexOf(m[1]) >= 0) return { word: m[1], line: i + 1 };
      }
      return null;
    },
    bind: function () {
      if (document.getElementById('varhelp')) return;
      var box = document.createElement('div');
      box.id = 'varhelp'; box.className = 'varhelp card hidden'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', '變數英文小幫手');
      box.innerHTML = '<div class="row between"><b>🌐 變數英文小幫手</b><button class="btn sm" type="button" id="vh-x" aria-label="關閉">✕</button></div>' +
        '<p class="tiny soft mt1">輸入中文（例如：班級、剩餘預算），查適合的英文變數名稱。只幫你取名字，程式還是要自己寫喔。</p>' +
        '<label class="small bold mt1" style="display:block">我要存的資料是…<input class="input" id="vh-q" placeholder="例：班級" autocomplete="off"></label>' +
        '<div id="vh-out" class="mt1" aria-live="polite"></div>' +
        '<label class="small bold mt1" style="display:block">我自己想的英文名字<input class="input mono" id="vh-name" placeholder="例：class_name" autocomplete="off" spellcheck="false"></label>' +
        '<p id="vh-lint" class="small mt1" aria-live="polite"></p>' +
        '<div class="vh-rules tiny mt1"><b>Python 變數命名規則</b><br>✓ 小寫英文　✓ 多個單字用 _ 連起來（ticket_price）　✓ 可以有數字，但不能放開頭<br>✗ 不能有空格　✗ 不能用保留字（class、if、for、while…）</div>';
      document.body.appendChild(box);
      var q = box.querySelector('#vh-q'), out = box.querySelector('#vh-out'), nm = box.querySelector('#vh-name'), li = box.querySelector('#vh-lint');
      function show() {
        var v = q.value.trim(), r = find(v);
        out.innerHTML = !v ? '' : r.length ? '<div class="row" style="gap:.4rem;flex-wrap:wrap">' + r.map(function (w) { return '<button class="btn sm vh-w" type="button" data-w="' + esc(w) + '"><code>' + esc(w) + '</code></button>'; }).join('') + '</div><p class="tiny soft mt1">點一下可以複製。' + (v === '班級' ? '注意：不能直接用 <code>class</code>（保留字）。' : '') + '</p>' :
          '<p class="tiny soft">小字典裡還沒有「' + esc(v) + '」。換個簡單的詞試試，或自己用小寫英文＋底線命名，下面幫你檢查。</p>';
      }
      q.addEventListener('input', show);
      nm.addEventListener('input', function () { li.textContent = lint(nm.value); });
      out.addEventListener('click', function (e) {
        var b = e.target.closest('.vh-w'); if (!b) return;
        var w = b.dataset.w;
        (navigator.clipboard ? navigator.clipboard.writeText(w) : Promise.reject()).then(function () { b.innerHTML = '✓ 已複製 <code>' + esc(w) + '</code>'; }, function () { nm.value = w; li.textContent = lint(w); });
      });
      box.querySelector('#vh-x').onclick = function () { box.classList.add('hidden'); };
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.classList.add('hidden'); });
      document.addEventListener('click', function (e) {
        if (e.target.closest('[data-varhelp]')) { box.classList.remove('hidden'); q.focus(); }
      });
    }
  };
})();
