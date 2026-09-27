/* =====================================================================
   🧪 系統平臺大冒險・視覺化實驗站（CARDGAME.labs）── 三星三階的「操作」「挑戰」用
   ---------------------------------------------------------------------
   八個實驗站：G1 平臺組合機、G2 五大單元傳令兵、G3 記憶體調度員、G4 電腦組裝師、
   G5 作業系統總管、G6 電腦急診室、G7 雲端披薩店、G8 嵌入式工程師
   寫法和網路世界的實驗站一樣（見 shared/net-labs.js 開頭）：情境每次隨機產生，
   學生做完按「確認」，由實驗站照規則判斷（規則就是課本觀念，畫面上看得到），原始碼裡沒有答案清單。
   ===================================================================== */
(function () {
  function rnd(n) { try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
  function pick(a) { return a[rnd(a.length)]; }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return UI.esc(s); }
  function tip(api, text) { return api.practice ? '<div class="note small mt1">💡 提示：' + esc(text) + '</div>' : ''; }
  function warn(api, t) { api.say('<div class="note warn small">' + esc(t) + '</div>'); }
  var L = {};

  /* =================================================================
     🧩 平臺組合機（G1）：系統平臺＝硬體＋作業系統＋應用軟體
     依任務挑一組「相容」的硬體、作業系統、App，再判斷它是哪一種系統平臺
     ================================================================= */
  var HW = [{ id: 'desk', t: '🖥️ 桌上型電腦', os: ['win', 'mac', 'linux'], type: 'pc', carry: false }, { id: 'nb', t: '💻 筆記型電腦', os: ['win', 'mac', 'linux'], type: 'pc', carry: false },
    { id: 'phone', t: '📱 手機', os: ['android', 'ios'], type: 'mobile', carry: true }, { id: 'watch', t: '⌚ 智慧手錶', os: ['wearos', 'watchos'], type: 'mobile', carry: true }];
  var OS = { win: 'Windows', mac: 'macOS', linux: 'Linux', android: 'Android', ios: 'iOS', wearos: 'Wear OS', watchos: 'watchOS' };
  var APP = [{ id: 'nav', t: '🗺️ 地圖導航', os: ['android', 'ios', 'wearos', 'watchos'] }, { id: 'edit', t: '🎬 專業影片剪輯', os: ['win', 'mac'] }, { id: 'heart', t: '❤️ 心跳紀錄', os: ['wearos', 'watchos'] },
    { id: 'office', t: '📝 文書處理', os: ['win', 'mac', 'linux', 'android', 'ios'] }, { id: 'code', t: '🐍 寫 Python 程式', os: ['win', 'mac', 'linux'] }, { id: 'chat', t: '💬 即時通訊', os: ['android', 'ios', 'win', 'mac'] }];
  var TASKS = [{ t: '騎腳踏車時手腕一抬就看路線', app: 'nav', carry: true, small: true }, { t: '在電腦教室剪輯畢業影片', app: 'edit', carry: false },
    { t: '跑步時隨時記錄心跳', app: 'heart', carry: true, small: true }, { t: '在家用大螢幕寫 Python 作業', app: 'code', carry: false },
    { t: '搭公車時打報告（要能放進口袋）', app: 'office', carry: true }, { t: '走在路上用地圖找餐廳', app: 'nav', carry: true, small: false }];
  var TYPE = { pc: '🖥️ 電腦系統平臺', mobile: '📱 可攜式系統平臺' }, TYPE4 = { pc: TYPE.pc, mobile: TYPE.mobile, cloud: '☁️ 雲端系統平臺', emb: '🔌 嵌入式系統平臺' };
  L.platformBuilder = function (el, api) {
    var task = pick(TASKS), sel = { hw: null, os: null, app: null, type: null };
    el.dataset.lab = 'platformBuilder'; el.dataset.task = JSON.stringify(task);
    el.innerHTML = '<div class="pb"><p class="small">任務：<b>' + esc(task.t) + '</b>。挑一組能用的<b>硬體＋作業系統＋應用軟體</b>，再判斷它是哪一種系統平臺。</p>' +
      tip(api, '先看任務要不要隨身帶著；硬體決定能裝哪些作業系統，作業系統決定能裝哪些 App（看下面的相容表）。') +
      '<details class="small mt1"><summary class="bold">📋 相容表（點開）</summary><table class="t tiny mt1"><tr><th>硬體</th><th>能裝的作業系統</th></tr>' + HW.map(function (h) { return '<tr><td>' + h.t + '</td><td>' + h.os.map(function (o) { return OS[o]; }).join('、') + '</td></tr>'; }).join('') +
      '</table><table class="t tiny mt1"><tr><th>App</th><th>支援的作業系統</th></tr>' + APP.map(function (a) { return '<tr><td>' + a.t + '</td><td>' + a.os.map(function (o) { return OS[o]; }).join('、') + '</td></tr>'; }).join('') + '</table></details>' +
      '<div class="pb-stack mt1" id="pb"></div><div class="row mt2"><button type="button" class="btn go" id="pb-ok">✅ 組好了</button></div></div>';
    function row(key, title, opts) {
      return '<div class="pb-row"><b class="tiny">' + title + '</b><div class="pb-opts">' + opts.map(function (o) { return '<button type="button" class="btn sm pb-o' + (sel[key] === o.id ? ' on' : '') + '" data-k="' + key + '" data-v="' + o.id + '">' + esc(o.t) + '</button>'; }).join('') + '</div></div>';
    }
    function draw() {
      el.querySelector('#pb').innerHTML = row('app', '📦 應用軟體', APP) + row('os', '⚙️ 作業系統', Object.keys(OS).map(function (k) { return { id: k, t: OS[k] }; })) + row('hw', '🔩 硬體', HW) +
        row('type', '🏷️ 這是哪一種系統平臺？', Object.keys(api.hard ? TYPE4 : TYPE).map(function (k) { return { id: k, t: TYPE4[k] }; }));
      el.querySelectorAll('.pb-o').forEach(function (b) { b.onclick = function () { sel[b.dataset.k] = b.dataset.v; draw(); }; });
    }
    el.querySelector('#pb-ok').onclick = function () {
      if (!sel.hw || !sel.os || !sel.app || !sel.type) return warn(api, '硬體、作業系統、應用軟體、平臺種類都要選');
      var h = HW.filter(function (x) { return x.id === sel.hw; })[0], a = APP.filter(function (x) { return x.id === sel.app; })[0];
      if (sel.app !== task.app) return api.submit(false, '這個任務要用的是「' + APP.filter(function (x) { return x.id === task.app; })[0].t + '」。', '先看任務要做什麼，挑對應的應用軟體。');
      if (h.os.indexOf(sel.os) < 0) return api.submit(false, h.t + ' 不能裝 ' + OS[sel.os] + '。', '看相容表：硬體決定能裝哪些作業系統。');
      if (a.os.indexOf(sel.os) < 0) return api.submit(false, a.t + ' 不支援 ' + OS[sel.os] + '。', '看相容表：作業系統決定能裝哪些 App。');
      if (task.carry && !h.carry) return api.submit(false, '任務要隨身帶著，' + h.t + ' 不適合。', '要能帶著走（放口袋、戴手上）的是可攜式裝置。');
      if (task.small && h.id !== 'watch') return api.submit(false, '任務要在手腕上直接看，選手錶比較適合。', '「手腕一抬」「跑步時」—— 戴在身上的裝置。');
      if (sel.type !== h.type) return api.submit(false, h.t + ' 屬於「' + TYPE[h.type] + '」。', '桌電、筆電 → 電腦系統平臺；手機、手錶等隨身帶著、穿戴的 → 可攜式系統平臺。' + (api.hard ? '雲端是運算在遠方機房；嵌入式是藏在裝置裡、外表看不出是電腦。' : ''));
      api.submit(true, h.t + ' ＋ ' + OS[sel.os] + ' ＋ ' + a.t + ' ＝ 一個' + TYPE[h.type] + '。系統平臺就是硬體、作業系統、應用軟體組在一起。');
    };
    draw();
  };

  /* =================================================================
     🏭 五大單元傳令兵（G2）：讓資料依序經過五大單元，走到算術與邏輯單元時自己算
     ================================================================= */
  var UNITS = [{ id: 'in', t: '⌨️ 輸入單元' }, { id: 'mem', t: '🗄️ 記憶單元' }, { id: 'ctl', t: '🎛️ 控制單元' }, { id: 'alu', t: '🧮 算術與邏輯單元' }, { id: 'out', t: '🖥️ 輸出單元' }];
  L.fiveUnits = function (el, api) {
    var task, steps;
    if (!api.hard) {
      var kind = rnd(3);
      if (kind === 0) { var a = between(12, 89), b = between(11, 79); task = { t: '用計算機算 ' + a + ' ＋ ' + b, calc: [{ q: a + ' ＋ ' + b, v: a + b }] }; }
      else if (kind === 1) { var price = pick([15, 20, 25, 35, 45]), pay = pick([50, 100]); task = { t: '自動販賣機：投 ' + pay + ' 元買 ' + price + ' 元的飲料，要找多少錢', calc: [{ q: pay + ' − ' + price, v: pay - price }] }; }
      else { var x = between(3, 12), y = between(3, 9); task = { t: '算 ' + x + ' 個人、每人 ' + y + ' 元，一共多少錢', calc: [{ q: x + ' × ' + y, v: x * y }] }; }
      steps = ['in', 'mem', 'ctl', 'alu', 'mem', 'out'];
    } else {
      var n = [between(60, 99), between(60, 99), between(60, 99)], s = n[0] + n[1] + n[2];
      while (s % 3) { n[2]++; s++; }
      task = { t: '算三次小考的平均：' + n.join('、') + ' 分', calc: [{ q: n.join(' ＋ '), v: s }, { q: s + ' ÷ 3', v: s / 3 }] };
      steps = ['in', 'mem', 'ctl', 'alu', 'mem', 'ctl', 'alu', 'mem', 'out'];
    }
    var at = 0, ci = 0, path = [];
    el.dataset.lab = 'fiveUnits'; el.dataset.steps = steps.join(','); el.dataset.calc = JSON.stringify(task.calc.map(function (c) { return c.q; }));
    el.innerHTML = '<div class="fu"><p class="small">任務：<b>' + esc(task.t) + '</b>。點下一個要工作的單元，讓 📨 資料一站一站走完。走到「算術與邏輯單元」時要自己算！</p>' +
      tip(api, '資料從輸入進來 → 先存進記憶 → 控制單元下指令 → 算術與邏輯單元計算 → 結果存回記憶 → 輸出。') +
      '<div class="fu-map"><div class="fu-cpu"><span class="tiny bold">中央處理器 CPU</span><div class="fu-cpu-in" id="fu-cpu"></div></div><div class="fu-side" id="fu-side"></div></div>' +
      '<div class="fu-path mt1" id="fu-path"></div><div id="fu-calc" class="mt1"></div></div>';
    function unitBtn(u) { return '<button type="button" class="fu-u' + (path.length && path[path.length - 1] === u.id ? ' here' : '') + '" data-u="' + u.id + '">' + u.t + (path.length && path[path.length - 1] === u.id ? '<span class="fu-tok">📨</span>' : '') + '</button>'; }
    function draw() {
      el.querySelector('#fu-cpu').innerHTML = UNITS.filter(function (u) { return u.id === 'ctl' || u.id === 'alu'; }).map(unitBtn).join('');
      el.querySelector('#fu-side').innerHTML = UNITS.filter(function (u) { return u.id !== 'ctl' && u.id !== 'alu'; }).map(unitBtn).join('');
      el.querySelector('#fu-path').innerHTML = path.length ? path.map(function (p) { return '<span class="chip">' + UNITS.filter(function (u) { return u.id === p; })[0].t + '</span>'; }).join(' → ') : '<span class="tiny soft">資料還在外面，先點第一個單元</span>';
      el.querySelectorAll('.fu-u').forEach(function (b) { b.onclick = function () { go(b.dataset.u); }; });
    }
    function go(u) {
      if (el.querySelector('#fu-ans')) return warn(api, '先把算術與邏輯單元的計算做完');
      if (u !== steps[at]) {
        var want = steps[at], msg = { in: '資料要先從「輸入單元」進來', mem: '資料（或算好的結果）要先存進「記憶單元」', ctl: '要先由「控制單元」下指令，其他單元才知道做什麼', alu: '控制單元下了指令，接著由「算術與邏輯單元」計算', out: '結果存好了，最後由「輸出單元」顯示' }[want];
        return api.submit(false, '下一步不是' + UNITS.filter(function (x) { return x.id === u; })[0].t + '：' + msg + '。', '順序：輸入 → 記憶 → 控制 → 算術與邏輯 → 記憶 → 輸出。');
      }
      path.push(u); at++; draw();
      if (u === 'alu') {
        var c = task.calc[ci];
        el.querySelector('#fu-calc').innerHTML = '<div class="row"><b>🧮 計算：' + esc(c.q) + ' ＝</b><input class="input" id="fu-ans" style="max-width:8rem;margin:0" inputmode="numeric"><button type="button" class="btn go" id="fu-go">算好了</button></div>';
        el.querySelector('#fu-ans').focus();
        el.querySelector('#fu-ans').onkeydown = function (e) { if (e.key === 'Enter') el.querySelector('#fu-go').click(); };
        el.querySelector('#fu-go').onclick = function () {
          var v = +el.querySelector('#fu-ans').value;
          if (v !== c.v) return api.submit(false, esc(c.q) + ' 不是 ' + v + '，再算一次。', '慢慢算，算術與邏輯單元不能算錯！');
          el.querySelector('#fu-calc').innerHTML = '<div class="note ok small">✔ ' + esc(c.q) + ' ＝ ' + c.v + '</div>'; ci++;
        };
      }
      if (at === steps.length) api.submit(true, '完成！' + path.map(function (p) { return UNITS.filter(function (x) { return x.id === p; })[0].t.slice(2); }).join(' → ') + '。控制單元＋算術與邏輯單元就是 CPU。');
    }
    draw();
  };

  /* =================================================================
     📦 記憶體調度員（G3）：把資料放到快取／RAM／輔助記憶體，讓 CPU 找資料的總時間最短
     快取最快但只有 2 格、RAM 3 格、輔助記憶體最慢但放得下全部；挑戰版：有些資料關機後還要留著
     ================================================================= */
  var LV = [{ id: 'cache', t: '📝 快取記憶體', cap: 2, ns: 1 }, { id: 'ram', t: '📒 RAM', cap: 3, ns: 10 }, { id: 'disk', t: '📚 輔助記憶體', cap: 99, ns: 200 }];
  var DATA = ['🎮 遊戲角色位置', '🎵 正在播的歌', '📊 試算表公式', '🖼️ 桌布圖片', '📨 聊天訊息', '🗺️ 地圖圖塊', '🔤 輸入法字庫', '📄 作業檔案', '📷 相簿縮圖', '⏰ 鬧鐘設定'];
  function memCost(items, place) { return items.reduce(function (a, it, i) { return a + it.n * LV.filter(function (l) { return l.id === place[i]; })[0].ns; }, 0); }
  function memBest(items) {
    // 必須留著的放輔助記憶體；其餘依次數由多到少放快取、RAM
    var place = items.map(function (it) { return it.keep ? 'disk' : null; }), order = items.map(function (it, i) { return i; }).filter(function (i) { return !items[i].keep; }).sort(function (a, b) { return items[b].n - items[a].n; });
    order.forEach(function (i, k) { place[i] = k < 2 ? 'cache' : k < 5 ? 'ram' : 'disk'; });
    return memCost(items, place);
  }
  L.memPlan = function (el, api) {
    var cnt = api.hard ? 7 : 6, names = shuffle(DATA).slice(0, cnt), used = {};
    var items = names.map(function (t) { var n; do { n = between(1, 60); } while (used[n]); used[n] = 1; return { t: t, n: n, keep: false }; });
    if (api.hard) { var hi = items.slice().sort(function (a, b) { return b.n - a.n; }); hi[1].keep = true; }   // 挑戰：一筆常用的資料關機後也要留著
    var place = items.map(function () { return null; }), best = memBest(items);
    el.dataset.lab = 'memPlan'; el.dataset.items = JSON.stringify(items);
    el.innerHTML = '<div class="mp"><p class="small">CPU 等一下要讀這些資料很多次。把每筆資料放到一層記憶體，讓<b>總讀取時間最短</b>。' + (api.hard ? '<b>🔒 標了「關機後要留著」的，只能放在關機不會消失的地方。</b>' : '') + '</p>' +
      '<div class="mp-lv">' + LV.map(function (l) { return '<span><b>' + l.t + '</b> 每次 ' + l.ns + ' 單位・' + (l.cap > 50 ? '放得下全部' : '最多 ' + l.cap + ' 筆') + (l.id === 'disk' ? '・關機還在' : '・關機就消失') + '</span>'; }).join('') + '</div>' +
      tip(api, '越常用的資料放越快的地方：次數最多的 2 筆放快取、接下來 3 筆放 RAM，其他放輔助記憶體。') +
      '<div class="mp-list mt1" id="mp-list"></div><div class="row between mt2"><b id="mp-sum"></b><button type="button" class="btn go" id="mp-ok">▶ 讓 CPU 讀讀看</button></div></div>';
    function draw() {
      el.querySelector('#mp-list').innerHTML = items.map(function (it, i) {
        return '<div class="mp-row"><span><b>' + esc(it.t) + '</b>' + (it.keep ? ' <span class="chip">🔒 關機後要留著</span>' : '') + '<small>要讀 ' + it.n + ' 次</small></span><span class="mp-btns">' +
          LV.map(function (l) { return '<button type="button" class="btn sm mp-b' + (place[i] === l.id ? ' on' : '') + '" data-i="' + i + '" data-l="' + l.id + '">' + l.t.split(' ')[1] + '</button>'; }).join('') + '</span></div>';
      }).join('');
      var full = place.indexOf(null) < 0;
      el.querySelector('#mp-sum').textContent = full ? '預估總時間：' + memCost(items, place).toLocaleString() + ' 單位' : '還有資料沒放';
      el.querySelectorAll('.mp-b').forEach(function (b) { b.onclick = function () { place[+b.dataset.i] = b.dataset.l; draw(); }; });
    }
    el.querySelector('#mp-ok').onclick = function () {
      if (place.indexOf(null) >= 0) return warn(api, '每筆資料都要放');
      var over = LV.filter(function (l) { return place.filter(function (p) { return p === l.id; }).length > l.cap; });
      if (over.length) return api.submit(false, over[0].t + ' 放太多了（最多 ' + over[0].cap + ' 筆）。', '快取、RAM 越快越貴，容量都很小。');
      var lost = items.filter(function (it, i) { return it.keep && place[i] !== 'disk'; });
      if (lost.length) return api.submit(false, '「' + lost[0].t + '」放在 ' + LV.filter(function (l) { return l.id === place[items.indexOf(lost[0])]; })[0].t + '，關機就消失了！', '只有輔助記憶體（硬碟、隨身碟）關機後資料還在。');
      var c = memCost(items, place);
      if (c > best) return api.submit(false, '總時間 ' + c.toLocaleString() + ' 單位，還可以更快（最快 ' + best.toLocaleString() + '）。', '讀越多次的，越要放在快的地方。', '把「要讀的次數」由多到少排：前 2 名放快取、接下來 3 名放 RAM。');
      api.submit(true, '總時間 ' + c.toLocaleString() + ' 單位，最快了！CPU 找資料由近而遠：快取 → RAM → 輔助記憶體；常用的放快的地方。');
    };
    draw();
  };
  L._mem = { cost: memCost, best: memBest, LV: LV };

  /* =================================================================
     🔧 電腦組裝師（G4）：照客人的需求和預算挑零件（每台另加 8,000 元主機板、電源、機殼、螢幕）
     ================================================================= */
  var PARTS = { cpu: [{ id: 'c2', t: '雙核心', v: 2, $: 3000 }, { id: 'c4', t: '四核心', v: 4, $: 6000 }, { id: 'c8', t: '八核心', v: 8, $: 12000 }, { id: 'c16', t: '十六核心', v: 16, $: 22000 }],
    ram: [{ id: 'r8', t: '8 GB', v: 8, $: 1500 }, { id: 'r16', t: '16 GB', v: 16, $: 3000 }, { id: 'r32', t: '32 GB', v: 32, $: 6000 }],
    disk: [{ id: 'h1', t: 'HDD 1TB', v: 1000, ssd: false, $: 1500 }, { id: 's512', t: 'SSD 512GB', v: 512, ssd: true, $: 2000 }, { id: 's1', t: 'SSD 1TB', v: 1000, ssd: true, $: 3500 }, { id: 's2', t: 'SSD 2TB', v: 2000, ssd: true, $: 6500 }, { id: 'h4', t: 'HDD 4TB', v: 4000, ssd: false, $: 3500 }] };
  var WHO = ['👵 阿嬤', '🎮 電競玩家', '🎬 影片剪輯師', '🧑‍🏫 老師', '📚 國中生', '📸 攝影社'];
  function pcCost(s) { return 8000 + s.cpu.$ + s.ram.$ + s.disk.$; }
  function pcOk(need, s) { return s.cpu.v >= need.cores && s.ram.v >= need.ram && s.disk.v >= need.cap && (!need.ssd || s.disk.ssd); }
  function pcCheapest(need) { var b = null; PARTS.cpu.forEach(function (c) { PARTS.ram.forEach(function (r) { PARTS.disk.forEach(function (d) { var s = { cpu: c, ram: r, disk: d }; if (pcOk(need, s) && (!b || pcCost(s) < pcCost(b))) b = s; }); }); }); return b; }
  L.pcBuild = function (el, api) {
    var need = { cores: pick([2, 4, 8]), ram: pick([8, 16, 32]), ssd: rnd(2) === 0, cap: pick([500, 1000, 2000]) };
    var cheap = pcCheapest(need), budget = Math.ceil(pcCost(cheap) * (api.hard ? 1.0 : 1.25) / 500) * 500, who = pick(WHO), sel = { cpu: null, ram: null, disk: null };
    el.dataset.lab = 'pcBuild'; el.dataset.need = JSON.stringify(need); el.dataset.budget = budget;
    el.innerHTML = '<div class="pc"><p class="small"><b>' + who + '</b> 的需求：至少 <b>' + need.cores + ' 核心</b>、RAM 至少 <b>' + need.ram + ' GB</b>、儲存空間至少 <b>' + (need.cap >= 1000 ? need.cap / 1000 + ' TB' : need.cap + ' GB') + '</b>' + (need.ssd ? '、<b>開機和讀檔要快（要 SSD）</b>' : '') + '。預算 <b>$' + budget.toLocaleString() + '</b>' + (api.hard ? '（剛好夠買最省的組合）' : '') + '。</p>' +
      '<p class="tiny soft">每台另加 $8,000（主機板、電源、機殼、螢幕）。HDD 便宜、容量大但比較慢；SSD 快很多但比較貴。</p>' +
      tip(api, '每一項都挑「剛好達到需求」的最便宜選項；需要快就一定要 SSD。') +
      '<div class="pc-parts" id="pc-parts"></div><div class="row between mt2"><b id="pc-sum"></b><button type="button" class="btn go" id="pc-ok">🔧 組裝</button></div></div>';
    function draw() {
      el.querySelector('#pc-parts').innerHTML = [['cpu', '處理器 CPU'], ['ram', '記憶體 RAM'], ['disk', '儲存裝置']].map(function (k) {
        return '<div class="pc-row"><b class="tiny">' + k[1] + '</b><div class="pb-opts">' + PARTS[k[0]].map(function (p) { return '<button type="button" class="btn sm pc-o' + (sel[k[0]] === p ? ' on' : '') + '" data-k="' + k[0] + '" data-id="' + p.id + '">' + p.t + '<small>$' + p.$.toLocaleString() + '</small></button>'; }).join('') + '</div></div>';
      }).join('');
      var full = sel.cpu && sel.ram && sel.disk, c = full ? pcCost(sel) : 0;
      el.querySelector('#pc-sum').innerHTML = full ? '總價 <span style="color:' + (c > budget ? 'var(--bad)' : 'var(--ok)') + '">$' + c.toLocaleString() + '</span> / 預算 $' + budget.toLocaleString() : '三樣零件都要選';
      el.querySelectorAll('.pc-o').forEach(function (b) { b.onclick = function () { sel[b.dataset.k] = PARTS[b.dataset.k].filter(function (p) { return p.id === b.dataset.id; })[0]; draw(); }; });
    }
    el.querySelector('#pc-ok').onclick = function () {
      if (!sel.cpu || !sel.ram || !sel.disk) return warn(api, '三樣零件都要選');
      var bad = [];
      if (sel.cpu.v < need.cores) bad.push('核心數不夠（要 ' + need.cores + ' 核心）');
      if (sel.ram.v < need.ram) bad.push('RAM 不夠（要 ' + need.ram + ' GB）');
      if (sel.disk.v < need.cap) bad.push('儲存空間不夠');
      if (need.ssd && !sel.disk.ssd) bad.push('要開機快，HDD 太慢了，要 SSD');
      if (bad.length) return api.submit(false, bad.join('；') + '。', '一項一項對照客人的需求。');
      if (pcCost(sel) > budget) return api.submit(false, '需求都有達到，但超出預算 $' + (pcCost(sel) - budget).toLocaleString() + '。', '每一項挑「剛好夠」的就好，多的效能要花錢。', '例：需要 1TB 又不用快 → HDD 1TB 最便宜；需要快又要 1TB → SSD 1TB。');
      api.submit(true, who + ' 很滿意！總價 $' + pcCost(sel).toLocaleString() + '。挑電腦就是在需求和預算之間取捨。');
    };
    draw();
  };
  L._em = { want: emWant };
  L._pb = { HW: HW, APP: APP };
  L._pc = { PARTS: PARTS, cost: pcCost, ok: pcOk, cheapest: pcCheapest };

  /* =================================================================
     🧑‍💼 作業系統總管（G5）：記憶體管理 —— RAM 不夠開新程式時，關掉哪些？
     作業系統本身不能關；沒存檔的要先存檔再關；挑戰版：指定的程式不能關、而且要關最少個
     ================================================================= */
  var PROGS = [{ t: '🌐 瀏覽器（20 個分頁）', g: 3 }, { t: '🎮 遊戲', g: 4 }, { t: '💬 聊天軟體', g: 1 }, { t: '🎵 音樂播放器', g: 1 }, { t: '📊 試算表', g: 2 }, { t: '🖼️ 修圖軟體', g: 3 }, { t: '📹 視訊會議', g: 2 }];
  L.osManager = function (el, api) {
    var TOTAL = 16, osG = 3, run, newP, keepI = -1;
    for (;;) {
      run = shuffle(PROGS).slice(0, api.hard ? 5 : 4).map(function (p) { return { t: p.t, g: p.g, open: true, saved: true }; });
      run.push({ t: '📝 文書（作業還沒存檔！）', g: 2, open: true, saved: false });
      if (api.hard) keepI = rnd(run.length - 1);
      newP = { t: pick(['🎬 影片剪輯軟體', '🧊 3D 建模軟體', '🐍 Python 編輯器＋模擬器']), g: pick([4, 5, 6]) };
      var used = osG + run.reduce(function (a, p) { return a + p.g; }, 0), free = TOTAL - used;
      if (free < newP.g && free >= 0) break;
    }
    function freeG() { return TOTAL - osG - run.reduce(function (a, p) { return a + (p.open ? p.g : 0); }, 0); }
    function minClose() {   // 最少要關幾個（不能關指定的）
      var c = run.map(function (p, i) { return i; }).filter(function (i) { return i !== keepI; }).sort(function (a, b) { return run[b].g - run[a].g; }), need = newP.g - (TOTAL - osG - run.reduce(function (a, p) { return a + p.g; }, 0)), k = 0, got = 0;
      while (got < need) { got += run[c[k]].g; k++; }
      return k;
    }
    var mc = minClose(), lostWork = false;
    el.dataset.lab = 'osManager'; el.dataset.state = JSON.stringify({ run: run, newP: newP, keepI: keepI, osG: osG, TOTAL: TOTAL });
    el.innerHTML = '<div class="om"><p class="small">RAM 共 <b>' + TOTAL + ' GB</b>。你要開 <b>' + esc(newP.t) + '（需要 ' + newP.g + ' GB）</b>，但記憶體不夠了。當一次作業系統：關掉一些程式讓出空間。' +
      (api.hard ? '<b>「' + esc(run[keepI].t) + '」正在用，不能關</b>；而且<b>關越少個越好</b>。' : '') + '</p>' +
      tip(api, '作業系統本身不能關；還沒存檔的要先存檔再關，不然作業就不見了。挑佔用大的關，比較快讓出空間。') +
      '<div class="om-ram" id="om-ram"></div><div class="om-list mt1" id="om-list"></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="om-go">▶ 開啟 ' + esc(newP.t) + '</button><span class="tiny soft" id="om-msg"></span></div></div>';
    function draw() {
      var f = freeG();
      el.querySelector('#om-ram').innerHTML = '<div class="om-bar"><i class="os" style="width:' + (osG / TOTAL * 100) + '%">⚙️ 作業系統 ' + osG + 'G</i>' +
        run.filter(function (p) { return p.open; }).map(function (p) { return '<i style="width:' + (p.g / TOTAL * 100) + '%" title="' + esc(p.t) + '">' + esc(p.t.split(' ')[0].split('（')[0]) + ' ' + p.g + 'G</i>'; }).join('') +
        '<i class="free" style="width:' + (Math.max(0, f) / TOTAL * 100) + '%">空 ' + f + 'G</i></div><p class="tiny bold mt1">可用 ' + f + ' GB / 需要 ' + newP.g + ' GB</p>';
      el.querySelector('#om-list').innerHTML = '<div class="om-p"><span>⚙️ 作業系統</span><b>' + osG + ' GB</b><button type="button" class="btn sm" id="om-os">✕ 關閉</button></div>' + run.map(function (p, i) {
        return '<div class="om-p' + (p.open ? '' : ' off') + '"><span>' + esc(p.t) + (p.saved ? '' : ' <span class="chip">未存檔</span>') + (i === keepI ? ' <span class="chip">正在用</span>' : '') + '</span><b>' + p.g + ' GB</b>' +
          (p.open ? (!p.saved ? '<button type="button" class="btn sm om-save" data-i="' + i + '">💾 存檔</button>' : '') + '<button type="button" class="btn sm om-x" data-i="' + i + '">✕ 關閉</button>' : '<button type="button" class="btn sm om-re" data-i="' + i + '">↺ 重開</button>') + '</div>';
      }).join('');
      el.querySelector('#om-os').onclick = function () { api.submit(false, '作業系統不能關！關掉整台電腦就停了。', '作業系統是總管，其他程式都靠它才能用硬體。'); };
      el.querySelectorAll('.om-x').forEach(function (b) { b.onclick = function () { var p = run[+b.dataset.i]; if (!p.saved) { lostWork = true; } p.open = false; draw(); }; });
      el.querySelectorAll('.om-re').forEach(function (b) { b.onclick = function () { run[+b.dataset.i].open = true; draw(); }; });
      el.querySelectorAll('.om-save').forEach(function (b) { b.onclick = function () { run[+b.dataset.i].saved = true; el.querySelector('#om-msg').textContent = '💾 已存檔（存到輔助記憶體）'; draw(); }; });
    }
    el.querySelector('#om-go').onclick = function () {
      if (lostWork) { lostWork = false; run.forEach(function (p) { if (!p.saved) { p.open = true; } }); draw(); return api.submit(false, '文書還沒存檔就被關掉，作業不見了！（這次先幫你救回來）', '沒存檔的程式要先按「💾 存檔」再關。'); }
      var f = freeG();
      if (f < newP.g) return api.submit(false, '還差 ' + (newP.g - f) + ' GB，開不起來。', '再關掉一些佔用大的程式。');
      if (keepI >= 0 && !run[keepI].open) return api.submit(false, '「' + run[keepI].t + '」正在用，不能關。', '按「↺ 重開」把它開回來，改關別的。');
      var extra = run.filter(function (p) { return !p.open && f - p.g >= newP.g; })[0];
      if (extra) return api.submit(false, '開得起來，但「' + extra.t + '」其實不用關（把它開回來也還夠）。', '只關「需要關」的程式，別人還在用呢。', '算算看：可用 ' + f + ' GB，需要 ' + newP.g + ' GB，多出來的空間夠不夠把它開回來？');
      var closed = run.filter(function (p) { return !p.open; }).length;
      if (api.hard && closed > mc) return api.submit(false, '開得起來，但關了 ' + closed + ' 個程式，其實 ' + mc + ' 個就夠了。', '優先關佔用記憶體大的程式。');
      api.submit(true, newP.t + ' 開起來了！作業系統的「記憶體管理」：分配 RAM 給程式、用完收回來；沒存檔的先存到輔助記憶體再關。');
    };
    draw();
  };

  /* =================================================================
     🚑 電腦急診室（G6）：看病人的電腦狀態，用對工具修好
     ================================================================= */
  var ISSUES = {
    disk: { say: '「硬碟快滿了，新照片存不進去！」', ok: function (s) { return s.used <= 85; } },
    hang: { say: '「有個程式當掉了，整個畫面卡住不動！」', ok: function (s) { return !s.procs.some(function (p) { return p.hang && p.on; }); } },
    update: { say: '「右下角一直跳『有安全性更新』，聽說不更新會中毒…」', ok: function (s) { return s.updates === 0; } },
    fw: { say: '「網路上來路不明的連線一直想連進我的電腦。」', ok: function (s) { return s.fw; } },
    backup: { say: '「硬碟一直發出怪聲，裡面有三年的班級照片…」', ok: function (s) { return s.backup === 'ext'; } }
  };
  L.pcDoctor = function (el, api) {
    var keys = shuffle(Object.keys(ISSUES)).slice(0, api.hard ? 4 : 2);
    if (keys.indexOf('disk') < 0 && api.hard) keys[0] = 'disk';
    var s = { used: keys.indexOf('disk') >= 0 ? between(94, 98) : between(40, 60), temp: 12, updates: keys.indexOf('update') >= 0 ? between(2, 5) : 0, fw: keys.indexOf('fw') < 0, backup: keys.indexOf('backup') >= 0 ? null : 'ext',
      apps: shuffle([{ t: '🎮 兩年沒玩的大型遊戲', g: 15, need: false }, { t: '📝 學校要用的文書軟體', g: 3, need: true }, { t: '🧰 試用期過了的影音軟體', g: 5, need: false }, { t: '🐍 資訊課的 Python', g: 2, need: true }]),
      procs: [{ t: '⚙️ 系統程式（Windows 檔案總管）', sys: true, on: true }, { t: '🎵 音樂播放器', on: true }].concat(keys.indexOf('hang') >= 0 ? [{ t: pick(['🌐 瀏覽器', '🖼️ 修圖軟體', '📊 試算表']) + '（沒有回應）', hang: true, on: true }] : []) };
    var harm = null, panel = null;
    el.dataset.lab = 'pcDoctor'; el.dataset.keys = keys.join(',');
    el.innerHTML = '<div class="dr"><p class="small">🩺 病人說：' + keys.map(function (k) { return '<br>' + ISSUES[k].say; }).join('') + '</p>' +
      tip(api, '空間不夠 → 磁碟清理、解除安裝不用的程式；程式當掉 → 工作管理員；安全性更新 → 系統更新；可疑連線 → 防火牆；硬碟怪聲 → 趕快備份到另一個地方。') +
      '<div class="dr-stat" id="dr-stat"></div><div class="dr-tools">' + [['clean', '🧹 磁碟清理'], ['uninst', '🗑️ 解除安裝'], ['update', '🔄 系統更新'], ['fw', '🧱 防火牆'], ['task', '📋 工作管理員'], ['backup', '💾 備份']].map(function (t) { return '<button type="button" class="btn sm dr-t" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>' +
      '<div id="dr-panel" class="dr-panel mt1"></div><div class="row mt2"><button type="button" class="btn go" id="dr-ok">🩺 看診結束</button></div></div>';
    function stat() {
      el.querySelector('#dr-stat').innerHTML = '<span>💽 硬碟 <b style="color:' + (s.used > 85 ? 'var(--bad)' : 'var(--ok)') + '">' + s.used + '%</b></span><span>🔄 待安裝更新 <b>' + s.updates + '</b></span><span>🧱 防火牆 <b>' + (s.fw ? '開' : '關') + '</b></span>' +
        '<span>💾 備份 <b>' + (s.backup === 'ext' ? '外接硬碟' : s.backup === 'same' ? '同一顆硬碟' : '沒有') + '</b></span><span>📋 沒有回應 <b>' + s.procs.filter(function (p) { return p.hang && p.on; }).length + '</b></span>';
    }
    function show(t) {
      panel = t; var p = el.querySelector('#dr-panel'), h = '';
      if (t === 'clean') h = '<p class="small">暫存檔 ' + s.temp + '% 的空間</p><button type="button" class="btn sm" id="dr-clean">刪除暫存檔</button>';
      if (t === 'uninst') h = s.apps.map(function (a, i) { return '<div class="om-p"><span>' + esc(a.t) + '</span><b>' + a.g + '%</b>' + (a.gone ? '<span class="tiny soft">已移除</span>' : '<button type="button" class="btn sm dr-un" data-i="' + i + '">解除安裝</button>') + '</div>'; }).join('');
      if (t === 'update') h = '<p class="small">待安裝的更新：' + s.updates + ' 個</p><button type="button" class="btn sm" id="dr-upd">安裝更新</button>';
      if (t === 'fw') h = '<p class="small">防火牆目前：<b>' + (s.fw ? '開啟' : '關閉') + '</b></p><button type="button" class="btn sm" id="dr-fw">' + (s.fw ? '關閉防火牆' : '開啟防火牆') + '</button>';
      if (t === 'task') h = s.procs.map(function (q, i) { return '<div class="om-p"><span>' + esc(q.t) + '</span>' + (q.on ? '<button type="button" class="btn sm dr-end" data-i="' + i + '">結束工作</button>' : '<span class="tiny soft">已結束</span>') + '</div>'; }).join('');
      if (t === 'backup') h = '<p class="small">重要檔案要備份到哪裡？</p><button type="button" class="btn sm dr-bk" data-b="ext">外接硬碟</button> <button type="button" class="btn sm dr-bk" data-b="same">同一顆硬碟的另一個資料夾</button>';
      p.innerHTML = h;
      var q = function (id) { return p.querySelector(id); };
      if (q('#dr-clean')) q('#dr-clean').onclick = function () { s.used = Math.max(0, s.used - s.temp); s.temp = 0; stat(); show('clean'); };
      p.querySelectorAll('.dr-un').forEach(function (b) { b.onclick = function () { var a = s.apps[+b.dataset.i]; a.gone = true; s.used -= a.g; if (a.need) harm = '「' + a.t + '」是要用的軟體，被你移除了'; stat(); show('uninst'); }; });
      if (q('#dr-upd')) q('#dr-upd').onclick = function () { s.updates = 0; stat(); show('update'); };
      if (q('#dr-fw')) q('#dr-fw').onclick = function () { s.fw = !s.fw; stat(); show('fw'); };
      p.querySelectorAll('.dr-end').forEach(function (b) { b.onclick = function () { var x = s.procs[+b.dataset.i]; x.on = false; if (x.sys) harm = '結束了系統程式，桌面整個不見了'; else if (!x.hang) harm = '「' + x.t + '」好好的，不用結束'; stat(); show('task'); }; });
      p.querySelectorAll('.dr-bk').forEach(function (b) { b.onclick = function () { s.backup = b.dataset.b; stat(); show('backup'); }; });
    }
    el.querySelectorAll('.dr-t').forEach(function (b) { b.onclick = function () { show(b.dataset.t); }; });
    el.querySelector('#dr-ok').onclick = function () {
      if (harm) { var h = harm; harm = null; return api.submit(false, h + '！', '只處理病人說的問題，別動正常的東西。'); }
      var left = keys.filter(function (k) { return !ISSUES[k].ok(s); });
      if (!s.fw) left = left.concat(keys.indexOf('fw') < 0 ? ['fwoff'] : []);
      if (left.length) {
        var name = { disk: '硬碟還是太滿（要降到 85% 以下）', hang: '還有程式沒有回應', update: '更新還沒裝', fw: '防火牆還沒開', backup: s.backup === 'same' ? '備份在同一顆硬碟，硬碟壞了一起不見' : '重要檔案還沒備份', fwoff: '防火牆被你關掉了，很危險' };
        return api.submit(false, left.map(function (k) { return name[k]; }).join('；') + '。', '看上面的狀態列，哪一項還是紅的？', '磁碟清理只刪暫存檔；還不夠就解除安裝「不用的」大程式。');
      }
      api.submit(true, '病人康復了！定期清理、更新、開防火牆、備份到另一個地方，電腦就不容易生病。');
    };
    stat();
  };

  /* =================================================================
     🍕 雲端披薩店（G7）：依客人要自己做到哪裡，判斷 IaaS／PaaS／SaaS，並標出每一層誰負責
     ================================================================= */
  var LAYERS = [{ id: 'net', t: '🏢 機房、網路', p: '店面、水電' }, { id: 'srv', t: '🖥️ 伺服器、儲存', p: '廚房、烤箱' }, { id: 'os', t: '💿 作業系統', p: '廚具、爐火設定' }, { id: 'plat', t: '🧰 開發平臺（資料庫、API）', p: '現成餅皮、醬料' }, { id: 'app', t: '📱 應用程式', p: '做好的披薩' }];
  var SVC = { iaas: { t: '🏗️ IaaS 租設備', n: 2 }, paas: { t: '🧰 PaaS 給平臺', n: 4 }, saas: { t: '🍕 SaaS 直接用', n: 5 } };
  var WANT = [
    { os: true, t: ['想自己挑作業系統、自己架設班級遊戲伺服器', '要自己安裝作業系統和所有軟體，只想租一台雲端主機'] },
    { os: false, code: true, t: ['寫好了一個網站程式，只想上傳就能跑，不想管作業系統', '要用雲端資料庫幫自己寫的 App 存資料'] },
    { os: false, code: false, t: ['打開瀏覽器就能寫報告、和同學一起編輯', '用網頁版信箱收發 email'] }];
  var WANT2 = [
    { os: true, t: ['公司不想買機器，但要在雲端主機上裝自己熟悉的 Linux 版本架網站', '研究團隊租雲端的運算主機，自己安裝作業系統和模擬程式'] },
    { os: false, code: true, t: ['資訊社用雲端的 App 開發平臺做校園 App，不想管伺服器和作業系統', '工程師在自己的網站裡套用雲端的翻譯 API'] },
    { os: false, code: false, t: ['老師用線上表單收作業、自動統計', '全班用雲端簡報軟體一起做期末報告'] }];
  L.cloudPizza = function (el, api) {
    var w = pick(api.hard ? WANT2 : WANT), line = pick(w.t), svc = w.os ? 'iaas' : w.code ? 'paas' : 'saas', sel = null, who = LAYERS.map(function () { return null; });
    el.dataset.lab = 'cloudPizza'; el.dataset.line = line;
    el.innerHTML = '<div class="cz"><p class="small">客人說：<b>「' + esc(line) + '」</b>。選一種雲端服務，再把每一層標成<b>雲端業者負責</b>或<b>客人自己來</b>。</p>' +
      tip(api, 'IaaS 只租機房和伺服器；PaaS 連作業系統、開發平臺都準備好；SaaS 整個做好給你用。') +
      '<div class="pb-opts">' + Object.keys(SVC).map(function (k) { return '<button type="button" class="btn sm cz-s" data-s="' + k + '">' + SVC[k].t + '</button>'; }).join('') + '</div>' +
      '<div class="cz-stack mt1" id="cz-stack"></div><div class="row mt2"><button type="button" class="btn go" id="cz-ok">🍕 開店</button></div></div>';
    function draw() {
      el.querySelectorAll('.cz-s').forEach(function (b) { b.classList.toggle('on', b.dataset.s === sel); });
      el.querySelector('#cz-stack').innerHTML = LAYERS.slice().reverse().map(function (l) {
        var i = LAYERS.indexOf(l);
        return '<div class="cz-l ' + (who[i] || '') + '"><span><b>' + l.t + '</b><small>🍕 ' + l.p + '</small></span><span class="pb-opts"><button type="button" class="btn sm cz-w' + (who[i] === 'cloud' ? ' on' : '') + '" data-i="' + i + '" data-w="cloud">☁️ 雲端業者</button><button type="button" class="btn sm cz-w' + (who[i] === 'me' ? ' on' : '') + '" data-i="' + i + '" data-w="me">🙋 客人自己</button></span></div>';
      }).join('');
      el.querySelectorAll('.cz-w').forEach(function (b) { b.onclick = function () { who[+b.dataset.i] = b.dataset.w; draw(); }; });
    }
    el.querySelectorAll('.cz-s').forEach(function (b) { b.onclick = function () { sel = b.dataset.s; draw(); }; });
    el.querySelector('#cz-ok').onclick = function () {
      if (!sel || who.indexOf(null) >= 0) return warn(api, '服務種類和每一層都要選');
      if (sel !== svc) return api.submit(false, '客人的需求不適合「' + SVC[sel].t + '」。', w.os ? '客人要自己管作業系統 → 只租設備。' : w.code ? '客人自己寫程式，但不想管作業系統 → 給平臺。' : '客人只想打開就用 → 直接用做好的。');
      var n = SVC[svc].n, wrong = who.map(function (x, i) { return x === (i < n ? 'cloud' : 'me') ? 0 : LAYERS[i].t; }).filter(Boolean);
      if (wrong.length) return api.submit(false, wrong.length + ' 層標錯了：' + wrong.join('、') + '。', SVC[svc].t + '：雲端業者負責到「' + LAYERS[n - 1].t + '」，上面的客人自己來。');
      api.submit(true, SVC[svc].t + '：雲端業者負責 ' + LAYERS.slice(0, n).map(function (l) { return l.t.slice(2); }).join('、') + (n < 5 ? '；客人自己負責 ' + LAYERS.slice(n).map(function (l) { return l.t.slice(2); }).join('、') : '；客人打開就能用') + '。');
    };
    draw();
  };

  /* =================================================================
     🔌 嵌入式工程師（G8）：用積木寫出「如果 感測器 比較 數值 那麼 致動器 開 否則 關」，再跑測試
     ================================================================= */
  var SENS = { light: { t: '光感測器（亮度 0～100）', u: '亮度' }, temp: { t: '溫度感測器（°C）', u: '溫度' }, dist: { t: '超音波距離感測器（公分）', u: '距離' }, soil: { t: '土壤濕度感測器（0～100）', u: '濕度' } };
  var ACT = { led: '💡 LED 燈', motor: '⚙️ 開門馬達', heat: '🔥 加熱器', pump: '💧 抽水馬達', fan: '🌀 風扇' };
  var DEVS = [{ t: '🌃 自動路燈', s: 'light', a: 'led', op: '<', lo: 20, hi: 45, q: '亮度', u: '', on: '開燈', off: '關燈' },
    { t: '🚪 自動門', s: 'dist', a: 'motor', op: '<', lo: 60, hi: 150, q: '人和門的距離', u: ' 公分', on: '開門', off: '關門' },
    { t: '🌱 自動澆水器', s: 'soil', a: 'pump', op: '<', lo: 25, hi: 45, q: '土壤濕度', u: '', on: '澆水', off: '停止澆水' },
    { t: '🌀 教室自動風扇', s: 'temp', a: 'fan', op: '>', lo: 26, hi: 30, q: '溫度', u: '°C', on: '開風扇', off: '關風扇' },
    { t: '🐠 魚缸加熱棒', s: 'temp', a: 'heat', op: '<', lo: 22, hi: 26, q: '水溫', u: '°C', on: '加熱', off: '停止加熱' }];
  function emSay(d, v, mode) {
    var lt = d.op === '<';
    if (mode === 'incl') return d.q + ' ' + v + d.u + (lt ? ' 以下' : ' 以上') + '（含 ' + v + '）就' + d.on;
    if (mode === 'inv') return d.q + ' ' + v + d.u + (lt ? ' 以上' : ' 以下') + '（含 ' + v + '）就' + d.off + '，其他時候' + d.on;
    return d.q + (lt ? '低於 ' : '高於 ') + v + d.u + ' 就' + d.on + '（剛好 ' + v + ' 時不動作）';
  }
  function emWant(d, v, mode, x) { var lt = d.op === '<'; return mode === 'incl' ? (lt ? x <= v : x >= v) : (lt ? x < v : x > v); }
  L.embedded = function (el, api) {
    var d = pick(DEVS), v = between(d.lo, d.hi), mode = api.hard ? pick(['incl', 'inv']) : 'plain', rule;
    var tests = shuffle([v - between(3, 8), v + between(3, 8), v - 1, v + 1, v]).map(function (x) { return Math.max(0, x); });
    if (api.hard) tests = tests.concat([v - 12, v + 12].map(function (x) { return Math.max(0, x); }));
    el.dataset.lab = 'embedded'; el.dataset.spec = JSON.stringify({ s: d.s, a: d.a, op: d.op, v: v, mode: mode });
    el.innerHTML = '<div class="em"><p class="small">做一個 <b>' + d.t + '</b>：<b>' + emSay(d, v, mode) + '</b>。用積木拼出微控制器的程式，再按「▶ 測試」。</p>' +
      (api.hard ? '<p class="tiny soft">⚠️ 積木只有「如果…那麼 打開…否則 關掉」，條件要怎麼寫才能讓每一個測試值都對？</p>' : '') +
      tip(api, '感測器量什麼（亮度、距離、溫度、濕度）？致動器做什麼動作（開燈、開門、加熱…）？「低於」用 <、「高於」用 >。') +
      '<div class="em-code"><div class="blk ctl">重複執行</div><div class="em-in"><div class="blk ctl">如果 <select class="input em-s" id="em-s"><option value="">感測器</option>' + Object.keys(SENS).map(function (k) { return '<option value="' + k + '">' + SENS[k].t + '</option>'; }).join('') +
      '</select> <select class="input em-o" id="em-o"><option value="">比較</option><option>&lt;</option><option>&gt;</option><option>=</option></select> <input class="input em-n" id="em-n" inputmode="numeric" placeholder="數值"> 那麼</div>' +
      '<div class="em-in"><div class="blk act">打開 <select class="input" id="em-a"><option value="">致動器</option>' + Object.keys(ACT).map(function (k) { return '<option value="' + k + '">' + ACT[k] + '</option>'; }).join('') + '</select></div></div>' +
      '<div class="blk ctl">否則</div><div class="em-in"><div class="blk act">關掉它</div></div></div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="em-run">▶ 測試</button></div><div class="em-tests mt1" id="em-tests"></div></div>';
    function want(x) { return emWant(d, v, mode, x); }
    el.querySelector('#em-run').onclick = function () {
      rule = { s: el.querySelector('#em-s').value, op: el.querySelector('#em-o').value, n: el.querySelector('#em-n').value.trim(), a: el.querySelector('#em-a').value };
      if (!rule.s || !rule.op || rule.n === '' || !rule.a) return warn(api, '積木的每個空格都要填');
      if (rule.s !== d.s) return api.submit(false, SENS[rule.s].t + ' 量不到「' + SENS[d.s].u + '」。', '先想：這個裝置要偵測什麼？');
      if (rule.a !== d.a) return api.submit(false, '要控制的是 ' + ACT[d.a].slice(2) + '，不是 ' + ACT[rule.a].slice(2) + '。', '致動器就是「做出動作」的零件。');
      var n = +rule.n, res = tests.map(function (x) { var on = rule.op === '<' ? x < n : rule.op === '>' ? x > n : x === n; return { x: x, on: on, ok: on === want(x) }; });
      el.querySelector('#em-tests').innerHTML = '<p class="tiny bold">🧪 測試（' + SENS[d.s].u + '）</p>' + res.map(function (r) { return '<span class="em-t ' + (r.ok ? 'ok' : 'bad') + '">' + r.x + ' → ' + (r.on ? '開' : '關') + (r.ok ? ' ✔' : ' ✘') + '</span>'; }).join('');
      var bad = res.filter(function (r) { return !r.ok; });
      if (bad.length) return api.submit(false, bad.length + ' 個測試沒過（例如 ' + SENS[d.s].u + ' ' + bad[0].x + ' 時應該' + (want(bad[0].x) ? '開' : '關') + '）。', '「' + emSay(d, v, mode) + '」→ 比較符號和數值要照這句話寫。', mode === 'incl' ? '「' + v + ' 以下（含 ' + v + '）」＝ 比 ' + (v + 1) + ' 小，所以寫 < ' + (v + 1) + '；「以上（含）」同理寫 > ' + (v - 1) + '。' : mode === 'inv' ? '先把句子反過來：什麼時候要「打開」？那就是「如果」後面的條件。' : '「低於 ' + v + '」＝ < ' + v + '；「高於 ' + v + '」＝ > ' + v + '。');
      api.submit(true, '全部測試通過！感測器（輸入）→ 微控制器判斷 → 致動器（輸出），這就是嵌入式系統的主迴圈。');
    };
  };

  L._cz = { WANT: WANT, WANT2: WANT2, SVC: SVC };
  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
