/* =====================================================================
   🧪 網路世界・視覺化實驗站（CARDGAME.labs）── 三星三階的「操作」「挑戰」用
   ---------------------------------------------------------------------
   關卡裡寫 { type: 'lab', lab: '名稱', n: 題數, hard: 挑戰版, prompt }
   每個實驗站：make(el, api)
     · 在 el 裡畫出可以動手操作的畫面（點、拖、調整），情境每次隨機產生
     · 學生按「確認／測試」時自己判斷，呼叫 api.submit(對不對, 說明, 提示, 步驟提示)
     · api.hard 挑戰版、api.practice 修復站（一開始就給提示）
   不需要封存答案：答案是「學生做出來的結果」合不合規則，原始碼裡沒有答案清單。
   ===================================================================== */
(function () {
  function rnd(n) { try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
  function pick(a) { return a[rnd(a.length)]; }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return UI.esc(s); }
  function tip(api, text) { return api.practice ? '<div class="note small mt1">💡 提示：' + esc(text) + '</div>' : ''; }

  var L = {};

  /* =================================================================
     📦 封包快遞模擬器（N3）
     訊息切成封包 → 按「傳送」看封包走不同路線、亂序抵達、有的遺失 →
     把收件匣的封包放進正確編號的格子；缺的格子選起來按「請求重送」→ 組好了就送出
     ================================================================= */
  var PH = ['畢業快樂', '明天見喔', '會考加油', '週末去爬山', '記得帶便當', '放學去打球', '謝謝老師'];
  var PH2 = ['明天早上七點集合', '畢業旅行要出發囉', '記得帶水壺和帽子', '資訊課在電腦教室', '週五下午練大隊接力'];
  L.packetSim = function (el, api) {
    var msg = pick(api.hard ? PH2 : PH), n = msg.length, chars = msg.split('');
    var lostN = api.hard ? 2 : 1, lost = shuffle(chars.map(function (_, i) { return i + 1; })).slice(0, lostN);
    var dup = api.hard ? pick(chars.map(function (_, i) { return i + 1; }).filter(function (x) { return lost.indexOf(x) < 0; })) : 0;
    var LANES = [{ name: '路線 A', via: '路由器 1 → 3', sp: 1.4 }, { name: '路線 B', via: '路由器 2 → 4 → 5', sp: 2.2 }, { name: '路線 C', via: '路由器 2 → 6', sp: 1.8 }];
    var sent = false, landed = false, tray = [], slots = chars.map(function () { return null; }), sel = null, want = null, resent = {};
    el.innerHTML = '<div class="pk">' +
      '<div class="row between"><div><b>📤 傳送端</b>：訊息已切成 <b>' + n + '</b> 個封包（TCP 幫每個封包編了號）</div><button type="button" class="btn go" id="pk-send">▶ 傳送</button></div>' +
      tip(api, '封包會走不同路線、不照順序到。依 # 編號放進格子；空著的格子就是遺失的，選它再按「請求重送」。') +
      '<div class="pk-net mt1" id="pk-net">' + LANES.map(function (l, i) { return '<div class="pk-lane" data-l="' + i + '"><span class="pk-lab">' + l.name + '<small>' + l.via + '</small></span><div class="pk-track"></div></div>'; }).join('') + '</div>' +
      '<p class="small bold mt2">📥 收件匣（依抵達順序）<span class="tiny soft">　點一個封包，再點下面的格子放進去</span></p><div class="pk-tray" id="pk-tray"><span class="tiny soft">還沒收到封包，先按「傳送」</span></div>' +
      '<p class="small bold mt2">🧩 組回訊息<span class="tiny soft">　點已放好的格子可以拿回來</span></p><div class="pk-slots" id="pk-slots"></div>' +
      '<div class="row mt2"><button type="button" class="btn" id="pk-re" disabled>📨 請求重送</button><button type="button" class="btn go" id="pk-ok" disabled>✅ 組好了</button><span class="tiny soft" id="pk-msg"></span></div></div>';
    var trayEl = el.querySelector('#pk-tray'), slotEl = el.querySelector('#pk-slots'), msgEl = el.querySelector('#pk-msg');
    function draw() {
      trayEl.innerHTML = tray.length ? tray.map(function (p, i) { return '<button type="button" class="pk-pkt' + (sel === i ? ' on' : '') + '" data-i="' + i + '" data-n="' + p.n + '">#' + p.n + '<b>' + esc(p.c) + '</b></button>'; }).join('') : '<span class="tiny soft">' + (sent ? '收件匣空了' : '還沒收到封包，先按「傳送」') + '</span>';
      slotEl.innerHTML = slots.map(function (p, i) { return '<button type="button" class="pk-slot' + (p ? ' full' : '') + (want === i ? ' want' : '') + '" data-s="' + i + '"><small>#' + (i + 1) + '</small><b>' + (p ? esc(p.c) : '？') + '</b></button>'; }).join('');
      trayEl.querySelectorAll('.pk-pkt').forEach(function (b) { b.onclick = function () { sel = sel === +b.dataset.i ? null : +b.dataset.i; want = null; draw(); }; });
      slotEl.querySelectorAll('.pk-slot').forEach(function (b) {
        b.onclick = function () {
          var i = +b.dataset.s;
          if (sel != null) { if (slots[i]) tray.push(slots[i]); slots[i] = tray.splice(sel, 1)[0]; sel = null; want = null; }
          else if (slots[i]) { tray.push(slots[i]); slots[i] = null; }
          else want = want === i ? null : i;
          draw();
        };
      });
      el.querySelector('#pk-re').disabled = !landed || want == null;
      el.querySelector('#pk-ok').disabled = !landed;
    }
    function fly(p, lane, delay, dur, drop, done) {
      var tr = el.querySelectorAll('.pk-track')[lane], d = document.createElement('span');
      d.className = 'pk-fly'; d.textContent = '#' + p.n; tr.appendChild(d);
      d.style.transition = 'left ' + dur + 's linear ' + delay + 's, opacity .3s';
      requestAnimationFrame(function () { requestAnimationFrame(function () { d.style.left = drop ? '48%' : 'calc(100% - 2.6rem)'; }); });
      setTimeout(function () {
        if (drop) { d.textContent = '💥'; d.classList.add('lost'); setTimeout(function () { d.remove(); }, 700); }
        else { d.remove(); tray.push(p); draw(); }
        done && done();
      }, (delay + dur * (drop ? 0.5 : 1)) * 1000 + 50);
    }
    el.querySelector('#pk-send').onclick = function () {
      if (sent) return; sent = true; this.disabled = true; msgEl.textContent = '傳送中…';
      var list = chars.map(function (c, i) { return { n: i + 1, c: c }; }); if (dup) list.push({ n: dup, c: chars[dup - 1] });
      var left = list.length;
      shuffle(list).forEach(function (p, k) {
        var lane = rnd(3), delay = k * 0.25 + rnd(5) * 0.1, drop = lost.indexOf(p.n) >= 0 && !(p === list[list.length - 1] && dup === p.n);
        fly(p, lane, delay, LANES[lane].sp, drop, function () { if (--left === 0) { landed = true; msgEl.textContent = '全部送完了！看看少了哪幾號？'; draw(); } });
      });
      draw();
    };
    el.querySelector('#pk-re').onclick = function () {
      if (want == null) return;
      var num = want + 1;
      if (lost.indexOf(num) < 0 || resent[num]) {
        api.submit(false, '#' + num + ' 已經收到了，不需要重送 —— 看看收件匣或格子裡。', '只有「完全沒收到」的編號才要請對方重送。');
        want = null; draw(); return;
      }
      resent[num] = 1; want = null; draw(); msgEl.textContent = '📨 已請求重送 #' + num + '…';
      fly({ n: num, c: chars[num - 1] }, 0, 0, LANES[0].sp, false, function () { msgEl.textContent = '✅ #' + num + ' 重送到了'; });
    };
    el.querySelector('#pk-ok').onclick = function () {
      var empty = slots.map(function (p, i) { return p ? 0 : i + 1; }).filter(Boolean);
      if (empty.length) { msgEl.textContent = '還有空格：#' + empty.join('、#') + '（遺失的要請求重送）'; return; }
      var wrong = slots.filter(function (p, i) { return p.n !== i + 1; }).length;
      if (wrong) return api.submit(false, '有 ' + wrong + ' 個格子放錯了，組出來是「' + slots.map(function (p) { return p.c; }).join('') + '」。', '看封包上的 # 編號，#1 放第 1 格、#2 放第 2 格…', '先把格子裡的封包都拿回來，再從 #1 開始一個一個放。');
      api.submit(true, '組回「' + msg + '」！封包走不同路線、不照順序到，TCP 靠編號重組；遺失的 #' + lost.join('、#') + ' 請對方重送' + (dup ? '；#' + dup + ' 收到兩次，只留一份' : '') + '。');
    };
    el.dataset.lab = 'packetSim';
    draw();
  };

  /* =================================================================
     📶 Wi-Fi 覆蓋地圖（N8）
     點平面圖放基地臺（雙頻：2.4GHz 範圍大、5GHz 範圍小，穿牆都會變弱），
     幫每個裝置選頻段：4K 電視一定要用 5GHz；每個裝置選的頻段都要收得到
     ================================================================= */
  var W = 12, H = 8, CS = 40;
  var BAND = { g24: { range: 6.8, loss: 2.2, label: '2.4GHz' }, g5: { range: 4.6, loss: 2.6, label: '5GHz' } };
  var DEV = [{ id: 'tv', ic: '📺', t: '4K 電視', need5: true }, { id: 'nb', ic: '💻', t: '筆電' }, { id: 'ph', ic: '📱', t: '手機' }, { id: 'pr', ic: '🖨️', t: '印表機' }, { id: 'cam', ic: '📷', t: '監視器' }];
  function segCross(ax, ay, bx, by, w) {   // 線段 (a→b) 有沒有穿過牆 w（避開門）
    if (w.v) {   // 垂直牆 x = w.x，從 y0 到 y1
      if ((ax - w.x) * (bx - w.x) > 0 || ax === bx) return false;
      var t = (w.x - ax) / (bx - ax), y = ay + t * (by - ay);
      return y >= w.y0 && y <= w.y1 && !(y >= w.d0 && y <= w.d1);
    }
    if ((ay - w.y) * (by - w.y) > 0 || ay === by) return false;
    var t2 = (w.y - ay) / (by - ay), x = ax + t2 * (bx - ax);
    return x >= w.x0 && x <= w.x1 && !(x >= w.d0 && x <= w.d1);
  }
  function sig(lay, ap, p, band) {
    var ax = ap.x + 0.5, ay = ap.y + 0.5, bx = p.x + 0.5, by = p.y + 0.5, d = Math.hypot(ax - bx, ay - by), walls = 0;
    lay.walls.forEach(function (w) { if (segCross(ax, ay, bx, by, w)) walls++; });
    return BAND[band].range - d - walls * BAND[band].loss;
  }
  function wifiLayout(hard) {
    for (var tries = 0; tries < 1200; tries++) {
      var a = between(3, 5), b = between(7, 9), walls = [];
      [a, b].forEach(function (x) { var d = between(1, H - 3); walls.push({ v: true, x: x, y0: 0, y1: H, d0: d, d1: d + 1.4 }); });
      if (hard) { var y = between(3, 5), d = between(b + 1, W - 3); walls.push({ v: false, y: y, x0: b, x1: W, d0: d, d1: d + 1.4 }); }
      var cells = []; for (var x = 0; x < W; x++) for (var yy = 0; yy < H; yy++) cells.push({ x: x, y: yy });
      var kinds = hard ? ['tv', 'tv', pick(['nb', 'ph']), pick(['pr', 'cam'])] : ['tv', pick(['nb', 'ph']), pick(['pr', 'cam'])];
      var devs = shuffle(cells).slice(0, kinds.length).map(function (c, i) { var k = DEV.filter(function (d) { return d.id === kinds[i]; })[0]; return { x: c.x, y: c.y, id: kinds[i], ic: k.ic, t: k.t, need5: !!k.need5 }; });
      if (devs.some(function (d, i) { return devs.some(function (e, j) { return j !== i && Math.abs(d.x - e.x) + Math.abs(d.y - e.y) < 3; }); })) continue;
      var lay = { walls: walls, devs: devs };
      var good = cells.filter(function (c) { return !devs.some(function (d) { return d.x === c.x && d.y === c.y; }) && ok(lay, c); });
      var frac = good.length / cells.length;
      if (good.length >= 2 && (tries > 600 || frac <= (hard ? 0.12 : 0.25))) return lay;
    }
    return lay;
  }
  function ok(lay, ap) { return lay.devs.every(function (d) { return d.need5 ? sig(lay, ap, d, 'g5') > 0 : sig(lay, ap, d, 'g24') > 0 || sig(lay, ap, d, 'g5') > 0; }); }
  function bars(s) { return s > 2.5 ? '▂▄▆' : s > 1 ? '▂▄' : s > 0 ? '▂' : '✕'; }
  L.wifiMap = function (el, api) {
    var lay = wifiLayout(api.hard), ap = null, view = 'g5', pickBand = lay.devs.map(function () { return null; });
    el.dataset.lab = 'wifiMap'; el.dataset.layout = JSON.stringify(lay);
    el.innerHTML = '<div class="wf">' +
      '<p class="small">點平面圖放<b>📡 雙頻基地臺</b>，再幫每個裝置選頻段。<b>2.4GHz</b> 範圍大、速度慢；<b>5GHz</b> 速度快、範圍小；穿過牆都會變弱（門口不會）。<b>📺 4K 電視一定要用 5GHz</b>。</p>' +
      tip(api, '先讓 4K 電視在 5GHz 的範圍裡（放近一點、別隔牆），再看其他裝置用 2.4GHz 收不收得到。') +
      '<div class="row mt1"><span class="tiny bold">顯示範圍：</span><button type="button" class="btn sm wf-v on" data-v="g5">5GHz</button><button type="button" class="btn sm wf-v" data-v="g24">2.4GHz</button></div>' +
      '<svg class="wf-map mt1" viewBox="0 0 ' + (W * CS) + ' ' + (H * CS) + '" id="wf-map" role="img" aria-label="平面圖"></svg>' +
      '<div class="wf-legend tiny"><span><i style="background:var(--wf-3)"></i>訊號強</span><span><i style="background:var(--wf-2)"></i>中</span><span><i style="background:var(--wf-1)"></i>弱</span><span><i style="background:#fff"></i>收不到</span><span>▮ 牆（缺口是門）</span></div>' +
      '<div class="wf-devs mt1" id="wf-devs"></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="wf-ok">✅ 確認</button><span class="tiny soft" id="wf-msg">還沒放基地臺</span></div></div>';
    var svg = el.querySelector('#wf-map');
    function draw() {
      var h = '';
      for (var x = 0; x < W; x++) for (var y = 0; y < H; y++) {
        var s = ap ? sig(lay, ap, { x: x, y: y }, view) : -1, col = s > 2.5 ? 'var(--wf-3)' : s > 1 ? 'var(--wf-2)' : s > 0 ? 'var(--wf-1)' : '#fff';
        h += '<rect class="wf-c" data-x="' + x + '" data-y="' + y + '" x="' + (x * CS) + '" y="' + (y * CS) + '" width="' + CS + '" height="' + CS + '" fill="' + col + '" stroke="#e2e8f0"/>';
      }
      lay.walls.forEach(function (w) {
        if (w.v) h += '<line x1="' + w.x * CS + '" y1="' + w.y0 * CS + '" x2="' + w.x * CS + '" y2="' + w.d0 * CS + '" class="wf-w"/><line x1="' + w.x * CS + '" y1="' + w.d1 * CS + '" x2="' + w.x * CS + '" y2="' + w.y1 * CS + '" class="wf-w"/>';
        else h += '<line x1="' + w.x0 * CS + '" y1="' + w.y * CS + '" x2="' + w.d0 * CS + '" y2="' + w.y * CS + '" class="wf-w"/><line x1="' + w.d1 * CS + '" y1="' + w.y * CS + '" x2="' + w.x1 * CS + '" y2="' + w.y * CS + '" class="wf-w"/>';
      });
      lay.devs.forEach(function (d) { h += '<text x="' + (d.x * CS + CS / 2) + '" y="' + (d.y * CS + CS / 2 + 9) + '" text-anchor="middle" font-size="26" pointer-events="none">' + d.ic + '</text>'; });
      if (ap) h += '<text x="' + (ap.x * CS + CS / 2) + '" y="' + (ap.y * CS + CS / 2 + 9) + '" text-anchor="middle" font-size="28" pointer-events="none">📡</text>';
      svg.innerHTML = h;
      svg.querySelectorAll('.wf-c').forEach(function (r) {
        r.onclick = function () {
          var c = { x: +r.dataset.x, y: +r.dataset.y };
          if (lay.devs.some(function (d) { return d.x === c.x && d.y === c.y; })) return;
          ap = c; draw();
        };
      });
      el.querySelector('#wf-devs').innerHTML = lay.devs.map(function (d, i) {
        var s24 = ap ? sig(lay, ap, d, 'g24') : -1, s5 = ap ? sig(lay, ap, d, 'g5') : -1;
        return '<div class="wf-dev" data-i="' + i + '"><span class="ic">' + d.ic + '</span><b>' + d.t + '</b>' + (d.need5 ? '<span class="chip">要 5GHz</span>' : '') +
          '<span class="tiny soft">2.4GHz ' + (ap ? bars(s24) : '—') + '　5GHz ' + (ap ? bars(s5) : '—') + '</span>' +
          '<span class="wf-bands">' + ['g24', 'g5'].map(function (b) { return '<button type="button" class="btn sm wf-b' + (pickBand[i] === b ? ' on' : '') + '" data-i="' + i + '" data-b="' + b + '">' + BAND[b].label + '</button>'; }).join('') + '</span></div>';
      }).join('');
      el.querySelectorAll('.wf-b').forEach(function (b) { b.onclick = function () { pickBand[+b.dataset.i] = b.dataset.b; draw(); }; });
      el.querySelector('#wf-msg').textContent = ap ? '基地臺放在第 ' + (ap.y + 1) + ' 列、第 ' + (ap.x + 1) + ' 行（可以再點別的地方移動）' : '還沒放基地臺';
    }
    el.querySelectorAll('.wf-v').forEach(function (b) { b.onclick = function () { view = b.dataset.v; el.querySelectorAll('.wf-v').forEach(function (x) { x.classList.toggle('on', x === b); }); draw(); }; });
    el.querySelector('#wf-ok').onclick = function () {
      if (!ap) { el.querySelector('#wf-msg').textContent = '先點平面圖放基地臺'; return; }
      if (pickBand.indexOf(null) >= 0) { el.querySelector('#wf-msg').textContent = '每個裝置都要選頻段'; return; }
      var bad = [];
      lay.devs.forEach(function (d, i) {
        var b = pickBand[i], s = sig(lay, ap, d, b);
        if (d.need5 && b !== 'g5') bad.push(d.ic + d.t + ' 要看 4K，要用速度快的 5GHz');
        else if (s <= 0) bad.push(d.ic + d.t + ' 用 ' + BAND[b].label + ' 收不到（太遠或隔了牆）');
      });
      if (bad.length) return api.submit(false, bad.join('；') + '。', '5GHz 範圍小：要看 4K 的電視，基地臺要靠近它、最好同一個房間；遠的裝置改用 2.4GHz。', '先切到「顯示 5GHz 範圍」，把基地臺移到電視附近，讓電視在深色區；再看其他裝置 2.4GHz 有沒有訊號。');
      api.submit(true, '每個裝置都連上了！5GHz 速度快但範圍小、穿牆衰減大，所以 4K 電視要靠近基地臺；遠的裝置用 2.4GHz 比較穩。');
    };
    draw();
  };
  L._wifi = { sig: sig, ok: ok, BAND: BAND };   // 給測試用（算訊號的規則本來就寫在畫面上，不是答案）

  /* =================================================================
     🔌 教室拉線（N1）
     點一個孔、再點另一個孔就接一條線（點有線的孔可以拔掉）→ 按「測試連線」
     正確：光纖孔 → 數據機 → 路由器 WAN → 路由器 LAN → 電腦（孔不夠 → 交換器）
     ================================================================= */
  L.wireRoom = function (el, api) {
    var pcs = api.hard ? between(8, 12) : pick([between(2, 4), between(5, 7)]), SW = api.hard ? 2 : 1, SWP = 8;
    var nodes = [{ id: 'wall', ic: '🧱', t: '牆上的光纖孔', ports: ['out'] }, { id: 'modem', ic: '📞', t: '數據機', ports: ['in', 'out'] },
      { id: 'router', ic: '🧭', t: '路由器', ports: ['wan', 'l1', 'l2', 'l3', 'l4'] }];
    for (var s = 1; s <= SW; s++) nodes.push({ id: 'sw' + s, ic: '🔀', t: '交換器' + (SW > 1 ? ' ' + s : ''), ports: ['up'].concat([1, 2, 3, 4, 5, 6, 7].map(function (x) { return 'p' + x; })) });
    for (var p = 1; p <= pcs; p++) nodes.push({ id: 'pc' + p, ic: '🖥️', t: '電腦 ' + p, ports: ['nic'], pc: true });
    var cables = [], selPort = null;
    var PN = { out: '出', in: '入', wan: 'WAN', up: '上行', nic: '網路孔' };
    function pname(pid) { return PN[pid] || (pid[0] === 'l' ? 'LAN' + pid.slice(1) : pid.slice(1)); }
    el.dataset.lab = 'wireRoom'; el.dataset.pcs = pcs;
    el.innerHTML = '<div class="wr">' +
      '<p class="small">教室要讓 <b>' + pcs + ' 台電腦</b>用網路線上網。<b>點一個孔、再點另一個孔</b>就接上一條線；點有線的孔可以拔掉。接好按「🔌 測試連線」。</p>' +
      tip(api, '訊號從牆上的光纖孔進來：光纖孔 → 數據機（轉換訊號）→ 路由器 WAN（對外）→ 路由器 LAN（對內）→ 電腦。路由器只有 4 個 LAN 孔，不夠就接交換器。') +
      '<div class="wr-board" id="wr-board"><svg class="wr-lines" id="wr-lines"></svg>' +
      '<div class="wr-row">' + nodes.filter(function (n) { return !n.pc; }).map(nodeHTML).join('') + '</div>' +
      '<div class="wr-row wr-pcs">' + nodes.filter(function (n) { return n.pc; }).map(nodeHTML).join('') + '</div></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="wr-test">🔌 測試連線</button><button type="button" class="btn sm" id="wr-clear">全部拔掉</button><span class="tiny soft" id="wr-msg">還沒接線</span></div></div>';
    function nodeHTML(n) {
      return '<div class="wr-node' + (n.pc ? ' pc' : '') + '" data-node="' + n.id + '"><div class="wr-t"><span class="ic">' + n.ic + '</span>' + esc(n.t) + '</div><div class="wr-ports">' +
        n.ports.map(function (pp) { return '<button type="button" class="wr-port" data-p="' + n.id + '.' + pp + '" title="' + esc(n.t + ' ' + pname(pp)) + '">' + pname(pp) + '</button>'; }).join('') + '</div></div>';
    }
    var board = el.querySelector('#wr-board'), lines = el.querySelector('#wr-lines'), msg = el.querySelector('#wr-msg');
    function cableOf(p) { for (var i = 0; i < cables.length; i++) if (cables[i][0] === p || cables[i][1] === p) return i; return -1; }
    function center(p) { var b = board.querySelector('[data-p="' + p + '"]').getBoundingClientRect(), o = board.getBoundingClientRect(); return [b.left - o.left + b.width / 2, b.top - o.top + b.height / 2]; }
    var COLORS = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#db2777', '#65a30d', '#b45309'];
    function draw() {
      var o = board.getBoundingClientRect();
      lines.setAttribute('viewBox', '0 0 ' + o.width + ' ' + o.height); lines.setAttribute('width', o.width); lines.setAttribute('height', o.height);
      lines.innerHTML = cables.map(function (c, i) { var a = center(c[0]), b = center(c[1]); return '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" stroke="' + COLORS[i % COLORS.length] + '" stroke-width="3" stroke-linecap="round" opacity=".85"/>'; }).join('');
      board.querySelectorAll('.wr-port').forEach(function (b) { b.classList.toggle('on', cableOf(b.dataset.p) >= 0); b.classList.toggle('sel', b.dataset.p === selPort); });
      msg.textContent = selPort ? '選了「' + selPort.replace('.', ' ') + '」，再點另一個孔接上' : '已接 ' + cables.length + ' 條線';
    }
    board.querySelectorAll('.wr-port').forEach(function (b) {
      b.onclick = function () {
        var p = b.dataset.p;
        board.querySelectorAll('.wr-node').forEach(function (x) { x.classList.remove('lit', 'dead'); });
        if (!selPort) { var ci = cableOf(p); if (ci >= 0) { cables.splice(ci, 1); draw(); return; } selPort = p; draw(); return; }
        if (selPort === p) { selPort = null; draw(); return; }
        if (selPort.split('.')[0] === p.split('.')[0]) { msg.textContent = '同一台設備的兩個孔不能互接'; selPort = null; draw(); return; }
        [selPort, p].forEach(function (q) { var ci = cableOf(q); if (ci >= 0) cables.splice(ci, 1); });
        cables.push([selPort, p]); selPort = null; draw();
      };
    });
    el.querySelector('#wr-clear').onclick = function () { cables = []; selPort = null; draw(); };
    window.addEventListener('resize', function () { if (document.body.contains(board)) draw(); });
    /* 判斷：每一條線合不合規則、每台電腦有沒有一路通到光纖孔 */
    function kind(p) { var n = p.split('.')[0], q = p.split('.')[1]; return n === 'wall' ? 'wall' : n === 'modem' ? 'modem.' + q : n === 'router' ? (q === 'wan' ? 'rwan' : 'rlan') : n.indexOf('sw') === 0 ? (q === 'up' ? 'swup' : 'swp') : 'pc'; }
    var RULE = { 'wall|modem.in': 1, 'modem.out|rwan': 1, 'rlan|pc': 1, 'rlan|swup': 1, 'swp|pc': 1, 'swp|swup': 1 };
    function why(a, b) {
      var k = [a, b].sort().join('|');
      if (/pc/.test(k) && /modem/.test(k)) return '電腦直接接數據機：數據機只負責轉換訊號，要經過路由器分配給各台電腦';
      if (/wall/.test(k) && !/modem\.in/.test(k)) return '光纖孔進來的訊號要先接「數據機」轉換';
      if (/modem\.in/.test(k)) return '數據機的「入」要接牆上的光纖孔，「出」才接路由器';
      if (/rwan/.test(k)) return '路由器的 WAN 孔是「對外」的，要接數據機；對內的電腦、交換器接 LAN 孔';
      if (/rlan/.test(k) && /modem/.test(k)) return '數據機要接路由器的 WAN 孔（對外），不是 LAN 孔';
      if (/swp/.test(k) && /rlan/.test(k)) return '交換器接路由器要用「上行」孔';
      if (/swup/.test(k) && /pc/.test(k)) return '電腦要接交換器的一般孔，上行孔是用來接回路由器的';
      if (/pc\|pc/.test(k) || (/pc/.test(k) && k.split('|').every(function (x) { return x === 'pc'; }))) return '兩台電腦互接不能上網';
      return '這條線接的位置不對';
    }
    el.querySelector('#wr-test').onclick = function () {
      var bad = [];
      cables.forEach(function (c) { var k2 = [kind(c[1]), kind(c[0])].join('|'), k1 = [kind(c[0]), kind(c[1])].join('|'); if (!RULE[k1] && !RULE[k2]) bad.push(why(kind(c[0]), kind(c[1]))); });
      // 連通：從光纖孔出發，照規則走
      var adj = {}; function add(a, b) { var A = a.split('.')[0], B = b.split('.')[0]; (adj[A] = adj[A] || []).push(B); (adj[B] = adj[B] || []).push(A); }
      cables.forEach(function (c) { var k1 = [kind(c[0]), kind(c[1])].join('|'), k2 = [kind(c[1]), kind(c[0])].join('|'); if (RULE[k1] || RULE[k2]) add(c[0], c[1]); });
      var seen = { wall: 1 }, q = ['wall'];
      while (q.length) { var x = q.shift(); (adj[x] || []).forEach(function (y) { if (!seen[y]) { seen[y] = 1; q.push(y); } }); }
      var up = nodes.filter(function (n) { return n.pc; }).map(function (n) { return n.id; }), okPcs = up.filter(function (id) { return seen[id]; });
      board.querySelectorAll('.wr-node').forEach(function (d) { var id = d.dataset.node; d.classList.toggle('lit', !!seen[id]); d.classList.toggle('dead', /^pc/.test(id) && !seen[id]); });
      if (!cables.length) { msg.textContent = '還沒接線'; return; }
      if (bad.length) return api.submit(false, bad[0] + (bad.length > 1 ? '（還有 ' + (bad.length - 1) + ' 條也接錯）' : '') + '。', '順序：光纖孔 → 數據機 入；數據機 出 → 路由器 WAN；路由器 LAN → 電腦或交換器上行；交換器一般孔 → 電腦。');
      if (okPcs.length < pcs) return api.submit(false, '還有 ' + (pcs - okPcs.length) + ' 台電腦沒接通（紅色的）。', pcs > 4 ? '路由器只有 4 個 LAN 孔：把交換器的「上行」接到路由器 LAN，其他電腦接交換器。' : '每台電腦都要一路通到光纖孔。', '從光纖孔開始沿著線走一遍：數據機 → 路由器 → （交換器）→ 電腦，看哪裡斷掉了。');
      api.submit(true, pcs + ' 台電腦都連上了！光纖孔 → 數據機（轉換訊號）→ 路由器（分配、對外 WAN／對內 LAN）' + (pcs > 4 ? '→ 交換器（孔不夠時擴充）' : '') + '→ 電腦。');
    };
    setTimeout(draw, 0);
  };

  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
