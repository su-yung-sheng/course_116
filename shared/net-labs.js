/* =====================================================================
   🧪 網路世界・視覺化實驗站（CARDGAME.labs）── 三星三階的「操作」「挑戰」用
   ---------------------------------------------------------------------
   十個實驗站：N1 教室拉線、N2 佈線工程師、N3 封包快遞、N4 IP 設定面板、N5 IPv6 壓縮機、N6 DNS 電話簿、
   N7 郵件旅程＋偷看者、N8 Wi-Fi 覆蓋地圖、N9 下載模擬器、N10 條碼掃描器／印條碼
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

  /* =================================================================
     🧵 佈線工程師（N2）
     每一段線路選線材：雙絞線便宜但只能約 100 公尺；光纖可以很遠但很貴；有線電視訊號用同軸電纜。
     全部合規而且總花費不超過預算才算完成。
     ================================================================= */
  var CAB = { tp: { t: '雙絞線', ic: '🔀', cost: 1, max: 100, col: '#2563eb' }, fiber: { t: '光纖', ic: '💡', cost: 5, max: 5000, col: '#ea580c' }, coax: { t: '同軸電纜', ic: '📺', cost: 2, max: 500, col: '#7c3aed' } };
  var SPOTS = [
    { a: '電信機房', b: '學校機房', d: [800, 2500], kind: 'data' }, { a: '學校機房', b: '教學大樓', d: [150, 400], kind: 'data' }, { a: '學校機房', b: '圖書館', d: [120, 300], kind: 'data' },
    { a: '教學大樓交換器', b: '電腦教室', d: [20, 90], kind: 'data' }, { a: '電腦教室交換器', b: '老師電腦', d: [5, 30], kind: 'data' }, { a: '圖書館交換器', b: '查詢電腦', d: [10, 60], kind: 'data' },
    { a: '有線電視盒', b: '會議室電視', d: [10, 40], kind: 'tv' }, { a: '警衛室', b: '門口監視器（有線電視系統）', d: [30, 120], kind: 'tv' }, { a: '辦公室交換器', b: '事務印表機', d: [5, 40], kind: 'data' }
  ];
  L.cablePlan = function (el, api) {
    var n = api.hard ? 6 : 4, spots;
    for (;;) {   // 至少一段長距離、至少一段短的
      spots = shuffle(SPOTS).slice(0, n).map(function (s) { return { a: s.a, b: s.b, kind: s.kind, dist: Math.round(between(s.d[0], s.d[1]) / 5) * 5 }; });
      if (spots.some(function (s) { return s.kind === 'data' && s.dist > 100; }) && spots.some(function (s) { return s.kind === 'data' && s.dist <= 100; })) break;
    }
    if (api.hard && !spots.some(function (s) { return s.kind === 'tv'; })) spots[0] = { a: '有線電視盒', b: '會議室電視', kind: 'tv', dist: between(2, 8) * 5 };
    var best = spots.reduce(function (a, s) { var c = s.kind === 'tv' ? 'coax' : s.dist <= 100 ? 'tp' : 'fiber'; return a + CAB[c].cost * s.dist; }, 0);
    var budget = Math.ceil(best * (api.hard ? 1.03 : 1.15) / 10) * 10, pick = spots.map(function () { return null; });
    el.dataset.lab = 'cablePlan'; el.dataset.spots = JSON.stringify(spots);
    el.innerHTML = '<div class="cp"><p class="small">幫學校拉網路線：每一段選一種線材。<b>預算 $' + budget.toLocaleString() + '</b>。</p>' +
      '<div class="cp-rule">' + Object.keys(CAB).map(function (k) { var c = CAB[k]; return '<span style="border-color:' + c.col + '">' + c.ic + ' <b>' + c.t + '</b> 每公尺 $' + c.cost + (k === 'tp' ? '・最長約 100 公尺' : k === 'fiber' ? '・可到數公里' : '・有線電視訊號用') + '</span>'; }).join('') + '</div>' +
      tip(api, '超過 100 公尺的網路線只能用光纖；100 公尺以內用便宜的雙絞線才不會超支；電視訊號用同軸電纜。') +
      '<div class="cp-list mt1" id="cp-list"></div>' +
      '<div class="row between mt2"><div class="bold" id="cp-sum"></div><button type="button" class="btn go" id="cp-ok">✅ 驗收</button></div></div>';
    function draw() {
      var sum = 0;
      el.querySelector('#cp-list').innerHTML = spots.map(function (s, i) {
        var c = pick[i]; if (c) sum += CAB[c].cost * s.dist;
        return '<div class="cp-row"' + (c ? ' style="border-left-color:' + CAB[c].col + '"' : '') + '><div><b>' + esc(s.a) + ' → ' + esc(s.b) + '</b><span class="tiny soft">' + (s.kind === 'tv' ? '📺 傳有線電視訊號' : '🌐 網路資料') + '・距離 <b>' + s.dist + ' 公尺</b></span></div>' +
          '<div class="cp-btns">' + Object.keys(CAB).map(function (k) { return '<button type="button" class="btn sm cp-c' + (c === k ? ' on' : '') + '" data-i="' + i + '" data-c="' + k + '">' + CAB[k].ic + ' ' + CAB[k].t + '</button>'; }).join('') + '</div>' +
          (c ? '<span class="tiny bold cp-cost">$' + (CAB[c].cost * s.dist).toLocaleString() + '</span>' : '') + '</div>';
      }).join('');
      el.querySelector('#cp-sum').innerHTML = '花費 <span style="color:' + (sum > budget ? 'var(--bad)' : 'var(--ok)') + '">$' + sum.toLocaleString() + '</span> / 預算 $' + budget.toLocaleString();
      el.querySelectorAll('.cp-c').forEach(function (b) { b.onclick = function () { pick[+b.dataset.i] = b.dataset.c; draw(); }; });
      return sum;
    }
    el.querySelector('#cp-ok').onclick = function () {
      var sum = draw();
      if (pick.indexOf(null) >= 0) return api.say('<div class="note warn small">每一段都要選線材</div>');
      var bad = [];
      spots.forEach(function (s, i) {
        var c = pick[i];
        if (s.kind === 'tv' && c !== 'coax') bad.push(s.b + '：有線電視訊號要用同軸電纜');
        else if (s.kind === 'data' && c === 'coax') bad.push(s.a + ' → ' + s.b + '：同軸電纜已經被雙絞線取代，網路資料不用它');
        else if (s.kind === 'data' && s.dist > CAB[c].max) bad.push(s.a + ' → ' + s.b + '：' + s.dist + ' 公尺太遠了，雙絞線只能約 100 公尺');
      });
      if (bad.length) return api.submit(false, bad[0] + (bad.length > 1 ? '（還有 ' + (bad.length - 1) + ' 段也不合規）' : '') + '。', '先看距離：超過 100 公尺的網路線一定要光纖。', '再看用途：📺 電視訊號 → 同軸；🌐 網路 100 公尺內 → 雙絞線最省。');
      if (sum > budget) return api.submit(false, '全部合規，但超出預算 $' + (sum - budget).toLocaleString() + '。', '光纖很貴：100 公尺以內的網路線改用雙絞線。');
      api.submit(true, '驗收通過！花費 $' + sum.toLocaleString() + '。長距離的主幹道用光纖、室內短距離用便宜的雙絞線、電視訊號用同軸電纜。');
    };
    draw();
  };

  /* =================================================================
     🔎 IP 設定面板（N4）：4 組 × 8 個位元開關，調出指定的 IPv4 位址
     挑戰版：只給條件（例：172.16～172.31 的私有位址，第 3、4 組是…），自己決定第 2 組
     ================================================================= */
  L.ipPanel = function (el, api) {
    var target, cond, W8 = [128, 64, 32, 16, 8, 4, 2, 1];
    if (!api.hard) {
      var base = pick([[192, 168], [10, between(0, 255)], [172, between(16, 31)]]);
      target = base.concat([between(0, 255), between(1, 254)]);
      cond = '把這台電腦的位址設定成 <b class="mono">' + target.join('.') + '</b>';
    } else {
      var t3 = between(0, 255), t4 = between(1, 254);
      target = null; cond = '設定一個 <b>172.16～172.31 開頭的私有位址</b>，第 3 組是 <b>' + t3 + '</b>、第 4 組是 <b>' + t4 + '</b>（第 2 組自己決定）';
      el.dataset.t3 = t3; el.dataset.t4 = t4;
    }
    var bits = [0, 0, 0, 0].map(function () { return [0, 0, 0, 0, 0, 0, 0, 0]; });
    el.dataset.lab = 'ipPanel'; if (target) el.dataset.target = target.join('.');
    el.innerHTML = '<div class="ip"><p class="small">' + cond + '。每一組是 8 個位元，點開關切換 0／1。</p>' +
      tip(api, '每一組從 128 開始：放得下就打開，再看剩下多少。192 ＝ 128＋64；168 ＝ 128＋32＋8。') +
      '<div class="ip-rows" id="ip-rows"></div><div class="ip-out mt1">目前的位址：<b class="mono" id="ip-now"></b></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="ip-ok">✅ 套用設定</button><button type="button" class="btn sm" id="ip-clr">全部歸零</button></div></div>';
    function val(o) { return bits[o].reduce(function (a, b, j) { return a + b * W8[j]; }, 0); }
    function draw() {
      el.querySelector('#ip-rows').innerHTML = bits.map(function (row, o) {
        return '<div class="ip-row"><span class="tiny bold">第 ' + (o + 1) + ' 組</span><div class="ip-bits">' + row.map(function (b, j) { return '<button type="button" class="ip-bit' + (b ? ' on' : '') + '" data-o="' + o + '" data-j="' + j + '"><small>' + W8[j] + '</small>' + b + '</button>'; }).join('') + '</div><b class="mono ip-dec">' + val(o) + '</b></div>';
      }).join('');
      el.querySelector('#ip-now').textContent = [0, 1, 2, 3].map(val).join('.');
      el.querySelectorAll('.ip-bit').forEach(function (b) { b.onclick = function () { bits[+b.dataset.o][+b.dataset.j] ^= 1; draw(); }; });
    }
    el.querySelector('#ip-clr').onclick = function () { bits = bits.map(function () { return [0, 0, 0, 0, 0, 0, 0, 0]; }); draw(); };
    el.querySelector('#ip-ok').onclick = function () {
      var v = [0, 1, 2, 3].map(val);
      if (target) {
        var wrong = v.map(function (x, i) { return x === target[i] ? 0 : i + 1; }).filter(Boolean);
        if (wrong.length) return api.submit(false, '第 ' + wrong.join('、') + ' 組不對：你設定的是 ' + v.join('.') + '。', '一組一組對：每組目標數字從 128 開始拆。', '例：168 → 128（剩 40）→ 32（剩 8）→ 8 → 10101000。');
        return api.submit(true, '設定好了：' + v.join('.') + ' ＝ ' + bits.map(function (r) { return r.join(''); }).join('.') + '。');
      }
      var t3 = +el.dataset.t3, t4 = +el.dataset.t4, why = [];
      if (v[0] !== 172) why.push('第 1 組要是 172');
      if (v[1] < 16 || v[1] > 31) why.push('第 2 組要在 16～31 之間（現在是 ' + v[1] + '）');
      if (v[2] !== t3) why.push('第 3 組要是 ' + t3);
      if (v[3] !== t4) why.push('第 4 組要是 ' + t4);
      if (why.length) return api.submit(false, why.join('；') + '。', '172.16～172.31 是私有區段：第 2 組 16 ＝ 00010000、31 ＝ 00011111，中間任一個都可以。');
      api.submit(true, v.join('.') + ' 是 172.16～172.31 的私有位址 ✔（第 2 組 ' + v[1] + ' ＝ ' + bits[1].join('') + '）。');
    };
    draw();
  };

  /* =================================================================
     ✂️ IPv6 壓縮機（N5）：點「開頭的 0」讓它消失；選連續的 0 組合併成 ::；壓到最短
     ================================================================= */
  function v6strip(g) { return g.map(function (x) { return x.replace(/^0+/, '') || '0'; }); }
  function v6short(g) {
    var s = v6strip(g), best = -1, bl = 1, i = 0;
    while (i < 8) { if (s[i] === '0') { var j = i; while (j < 8 && s[j] === '0') j++; if (j - i > bl) { bl = j - i; best = i; } i = j; } else i++; }
    return best < 0 ? s.join(':') : s.slice(0, best).join(':') + '::' + s.slice(best + bl).join(':');
  }
  function v6make(hard) {
    function grp() { var r = pick([[0x1000, 0xffff], [0x100, 0xfff], [0x10, 0xff], [1, 0xf]]); return ('0000' + between(r[0], r[1]).toString(16)).slice(-4); }
    for (;;) {
      var g = [0, 1, 2, 3, 4, 5, 6, 7].map(grp), L1 = hard ? between(2, 3) : between(2, 4), a = between(0, 8 - L1), i;
      for (i = 0; i < L1; i++) g[a + i] = '0000';
      if (hard) { var L2 = L1 - 1, b = between(0, 8 - L2); var okb = true; for (i = -1; i <= L2; i++) if (b + i >= a - 1 && b + i <= a + L1) okb = false; if (!okb) continue; for (i = 0; i < L2; i++) g[b + i] = '0000'; }
      return g;
    }
  }
  L.v6Press = function (el, api) {
    var orig = v6make(api.hard), g = orig.slice(), sel = {}, col = null;   // col = { s, len }
    el.dataset.lab = 'v6Press'; el.dataset.orig = orig.join(':');
    el.innerHTML = '<div class="v6"><p class="small">把這個 IPv6 位址壓到<b>最短</b>：點每組<b>開頭的 0</b> 讓它消失；點選連續的 <b>0000</b> 方塊，按「合併成 ::」（只能用一次）。</p>' +
      tip(api, '規則：① 開頭的 0 可以省略（0db8 → db8）② 0000 可以寫成 0 ③ 連續好幾組 0 用 :: 代替，只能用一次，要用在最長的那一段。') +
      '<div class="v6-grid mt1" id="v6-grid"></div><div class="ip-out mt1">現在的寫法：<b class="mono" id="v6-now"></b>　<span class="tiny soft" id="v6-len"></span></div>' +
      '<div class="row mt2"><button type="button" class="btn" id="v6-col">🔗 合併成 ::</button><button type="button" class="btn sm" id="v6-reset">↺ 重來</button><button type="button" class="btn go" id="v6-ok">✅ 壓好了</button><span class="tiny soft" id="v6-msg"></span></div></div>';
    function text() {
      var s = g.slice();
      if (!col) return s.join(':');
      return s.slice(0, col.s).join(':') + '::' + s.slice(col.s + col.len).join(':');
    }
    function draw() {
      el.querySelector('#v6-grid').innerHTML = g.map(function (x, i) {
        var inCol = col && i >= col.s && i < col.s + col.len;
        return '<div class="v6-g' + (sel[i] ? ' sel' : '') + (inCol ? ' col' : '') + '" data-g="' + i + '">' + (inCol ? '<span class="v6-c">::</span>' :
          x.split('').map(function (ch, j) { var lead = /^0+$/.test(x.slice(0, j + 1)) && x.length > 1; return '<button type="button" class="v6-ch' + (lead ? ' lead' : '') + '" data-g="' + i + '" data-j="' + j + '">' + ch + '</button>'; }).join('')) +
          (inCol ? '' : '<button type="button" class="v6-pick" data-g="' + i + '" title="選這一組">' + (sel[i] ? '☑' : '☐') + '</button>') + '</div>';
      }).join('');
      var t = text();
      el.querySelector('#v6-now').textContent = t; el.querySelector('#v6-len').textContent = '（' + t.length + ' 個字）';
      el.querySelectorAll('.v6-ch').forEach(function (b) {
        b.onclick = function () {
          var i = +b.dataset.g, j = +b.dataset.j, x = g[i];
          if (x.length === 1) return msg('這一組只剩一個數字了，不能再刪');
          if (!/^0+$/.test(x.slice(0, j + 1))) return msg('只有「開頭」的 0 可以省略 —— 這個不能刪');
          g[i] = x.slice(1); msg(''); draw();
        };
      });
      el.querySelectorAll('.v6-pick').forEach(function (b) { b.onclick = function () { var i = +b.dataset.g; sel[i] = !sel[i]; draw(); }; });
    }
    function msg(t) { el.querySelector('#v6-msg').textContent = t; }
    el.querySelector('#v6-col').onclick = function () {
      var ids = Object.keys(sel).filter(function (k) { return sel[k]; }).map(Number).sort(function (a, b) { return a - b; });
      if (col) return msg(':: 只能用一次！');
      if (!ids.length) return msg('先點方塊右上角的 ☐，選要合併的 0 組');
      if (ids.some(function (i, k) { return k && i !== ids[k - 1] + 1; })) return msg('要選「連續」的組');
      if (ids.some(function (i) { return !/^0+$/.test(g[i]); })) return msg('只有全部是 0 的組才能合併');
      col = { s: ids[0], len: ids.length }; sel = {}; msg(''); draw();
    };
    el.querySelector('#v6-reset').onclick = function () { g = orig.slice(); sel = {}; col = null; msg(''); draw(); };
    el.querySelector('#v6-ok').onclick = function () {
      var t = text(), ans = v6short(orig);
      if (t === ans) return api.submit(true, '最短寫法：' + ans + '（' + ans.length + ' 個字，原本 39 個字）。');
      var why = t.length > ans.length ? '還可以更短（最短是 ' + ans.length + ' 個字，你現在 ' + t.length + ' 個字）' : '不是最短的標準寫法';
      if (col && v6strip(orig).slice(col.s, col.s + col.len).length === col.len && ans.indexOf('::') >= 0) {
        var s = v6strip(orig), best = 0, i = 0; while (i < 8) { if (s[i] === '0') { var j = i; while (j < 8 && s[j] === '0') j++; best = Math.max(best, j - i); i = j; } else i++; }
        if (col.len < best) why = ':: 要用在「最長」的那一段 0（有一段連續 ' + best + ' 組）';
      }
      api.submit(false, why + '。', '每組開頭的 0 都要刪到不能再刪；0000 要剩一個 0 或被 :: 合併。', '步驟：① 每組刪開頭的 0 → ② 找最長的連續 0 → ③ 選起來按「合併成 ::」。');
    };
    draw();
  };
  L._v6 = { short: v6short };

  /* =================================================================
     🌐 DNS 電話簿（N6）：拆網址 → 查 DNS 電話簿找 IP → 連到那台伺服器
     ================================================================= */
  var ORGS = { edu: ['ntu', 'ncku', 'nthu', 'nccu'], gov: ['moe', 'taichung', 'cwa'], com: ['pchome', 'momo', 'asus'], org: ['redcross', 'wwf'] };
  function ipr() { return between(20, 223) + '.' + between(0, 255) + '.' + between(0, 255) + '.' + between(1, 254); }
  L.dnsBook = function (el, api) {
    var cat = pick(Object.keys(ORGS)), org = pick(ORGS[cat]), host = pick(['www', 'mail', 'news']), dom = host + '.' + org + '.' + cat + '.tw';
    var decoys = [pick(['www', 'mail', 'news'].filter(function (h) { return h !== host; })) + '.' + org + '.' + cat + '.tw', host + '.' + org + '.' + cat + '.jp',
      host + '.' + pick(ORGS[cat].filter(function (o) { return o !== org; }).concat(['abc'])) + '.' + cat + '.tw'];
    if (api.hard) decoys.push(host + '.' + org + '.' + pick(Object.keys(ORGS).filter(function (c) { return c !== cat; })) + '.tw', host + '.' + org + '.' + cat + '.tw.example');
    var rows = shuffle([dom].concat(decoys).map(function (d) { return { d: d, ip: ipr() }; })), ip = rows.filter(function (r) { return r.d === dom; })[0].ip;
    var servers = shuffle(rows.slice(0, api.hard ? 5 : 4).map(function (r) { return r.ip; }).concat(rows.some(function (r, i) { return i < (api.hard ? 5 : 4) && r.ip === ip; }) ? [] : [ip]));
    var parts = dom.split('.'), labels = parts.map(function () { return null; }), step = 1, chosenRow = null, O = [['host', '主機'], ['org', '機構'], ['cat', '類別'], ['area', '地區']];
    el.dataset.lab = 'dnsBook'; el.dataset.dom = dom;
    el.innerHTML = '<div class="dn"><div class="dn-bar">🌐 <span class="mono">https://' + esc(dom) + '</span></div>' +
      tip(api, '網址由左到右：主機 → 機構 → 類別 → 地區。DNS 電話簿要找「一模一樣」的網域名稱。') +
      '<div id="dn-step" class="mt1"></div></div>';
    function draw() {
      var box = el.querySelector('#dn-step');
      if (step === 1) {
        box.innerHTML = '<p class="small bold">① 拆網址：每一段是什麼？</p><div class="dn-parts">' + parts.map(function (p, i) {
          return '<div class="dn-part"><b class="mono">' + esc(p) + '</b><select class="input" data-i="' + i + '"><option value="">— 選 —</option>' + O.map(function (o) { return '<option value="' + o[0] + '"' + (labels[i] === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
        }).join('') + '</div><div class="row mt2"><button type="button" class="btn go" id="dn-1">下一步：查 DNS →</button></div>';
        box.querySelectorAll('select').forEach(function (s) { s.onchange = function () { labels[+s.dataset.i] = s.value || null; }; });
        box.querySelector('#dn-1').onclick = function () {
          if (labels.indexOf(null) >= 0) return api.say('<div class="note warn small">每一段都要選</div>');
          var want = ['host', 'org', 'cat', 'area'];
          if (labels.join() !== want.join()) return api.submit(false, '有 ' + labels.filter(function (l, i) { return l !== want[i]; }).length + ' 段標錯了。', '由左到右：主機 → 機構 → 類別 → 地區。');
          api.say('<div class="note ok small">✔ 拆對了：' + parts.map(function (p, i) { return p + '＝' + O[i][1]; }).join('、') + '</div>'); step = 2; draw();
        };
      } else if (step === 2) {
        box.innerHTML = '<p class="small bold">② 查 DNS 電話簿：「' + esc(dom) + '」的 IP 是？（點那一列）</p><table class="t dn-book"><tr><th>網域名稱</th><th>IP 位址</th></tr>' +
          rows.map(function (r, i) { return '<tr class="dn-row" data-i="' + i + '"><td class="mono">' + esc(r.d) + '</td><td class="mono">' + r.ip + '</td></tr>'; }).join('') + '</table>';
        box.querySelectorAll('.dn-row').forEach(function (tr) {
          tr.onclick = function () {
            var r = rows[+tr.dataset.i];
            if (r.d !== dom) return api.submit(false, '「' + r.d + '」和網址不一樣！', 'DNS 要找一模一樣的網域名稱：主機、機構、類別、地區每一段都要一樣。');
            chosenRow = r; api.say('<div class="note ok small">✔ DNS 查到了：' + dom + ' → ' + r.ip + '</div>'); step = 3; draw();
          };
        });
      } else {
        box.innerHTML = '<p class="small bold">③ 瀏覽器要連到哪一台伺服器？（點它）</p><div class="dn-srv">' + servers.map(function (s) { return '<button type="button" class="dn-s" data-ip="' + s + '">🖥️<span class="mono">' + s + '</span></button>'; }).join('') + '</div>';
        box.querySelectorAll('.dn-s').forEach(function (b) {
          b.onclick = function () {
            if (b.dataset.ip !== ip) return api.submit(false, '連到 ' + b.dataset.ip + '，不是剛剛查到的 IP。', '看剛剛 DNS 查到的 IP：' + ip + '。');
            b.classList.add('on'); api.submit(true, '網頁打開了！瀏覽器拿到網域名稱 → DNS 查成 IP（' + ip + '）→ 依 IP 連到伺服器。');
          };
        });
      }
    }
    draw();
  };

  /* =================================================================
     📨 郵件旅程（N7）：一站一站把信送到收件人，每一段選對協定
     🕵️ 偷看者：同一份表單用 http／https 送出，看偷看者看到什麼
     ================================================================= */
  var NAMES = ['小潔', '阿凱', '小芸', '志明', '怡君', '家豪'];
  L.mailTrip = function (el, api) {
    var nm = shuffle(NAMES).slice(0, 2), ST = [{ id: 'pcA', t: nm[0] + '的電腦', ic: '💻' }, { id: 'mA', t: nm[0] + '的郵件伺服器', ic: '📮' }, { id: 'mB', t: nm[1] + '的郵件伺服器', ic: '📬' }, { id: 'pcB', t: nm[1] + '的電腦', ic: '💻' }];
    var route = ['pcA', 'mA', 'mB', 'pcB'], proto = { 'pcA>mA': 'SMTP', 'mA>mB': 'SMTP', 'mB>pcB': 'POP3' };
    var all = ST.concat(api.hard ? [{ id: 'web', t: '網站伺服器', ic: '🌐' }, { id: 'dns', t: 'DNS 伺服器', ic: '📒' }] : []), at = 0, pSel = null, sSel = null;
    el.dataset.lab = 'mailTrip'; el.dataset.names = nm.join(',');
    el.innerHTML = '<div class="mt"><p class="small">把 <b>' + nm[0] + '</b> 寫給 <b>' + nm[1] + '</b> 的信，一站一站送過去：每一段先選<b>下一站</b>，再選<b>用什麼協定</b>。</p>' +
      tip(api, '寄出去（電腦 → 伺服器、伺服器 → 伺服器）用 SMTP；收件人把信從自己的伺服器下載到電腦用 POP3。') +
      '<div class="mt-map" id="mt-map"></div><div id="mt-ctl" class="mt1"></div></div>';
    function draw() {
      el.querySelector('#mt-map').innerHTML = shuffleOnce.map(function (s) { var i = route.indexOf(s.id), here = route[at] === s.id; return '<div class="mt-st' + (here ? ' here' : '') + (i >= 0 && i < at ? ' done' : '') + '"><span class="ic">' + s.ic + '</span>' + esc(s.t) + (here ? '<span class="mt-env">✉️</span>' : '') + '</div>'; }).join('');
      if (at === route.length - 1) { el.querySelector('#mt-ctl').innerHTML = ''; return; }
      el.querySelector('#mt-ctl').innerHTML = '<p class="small bold">✉️ 信現在在「' + esc(ST.filter(function (s) { return s.id === route[at]; })[0].t) + '」。下一站？</p><div class="mt-opts">' +
        all.filter(function (s) { return s.id !== route[at]; }).map(function (s) { return '<button type="button" class="btn sm mt-s' + (sSel === s.id ? ' on' : '') + '" data-s="' + s.id + '">' + s.ic + ' ' + esc(s.t) + '</button>'; }).join('') + '</div>' +
        '<p class="small bold mt1">用什麼協定？</p><div class="mt-opts">' + ['SMTP', 'POP3', 'HTTPS'].map(function (p) { return '<button type="button" class="btn sm mt-p' + (pSel === p ? ' on' : '') + '" data-p="' + p + '">' + p + '</button>'; }).join('') + '</div>' +
        '<div class="row mt1"><button type="button" class="btn go" id="mt-go">✉️ 送出這一段</button></div>';
      el.querySelectorAll('.mt-s').forEach(function (b) { b.onclick = function () { sSel = b.dataset.s; draw(); }; });
      el.querySelectorAll('.mt-p').forEach(function (b) { b.onclick = function () { pSel = b.dataset.p; draw(); }; });
      el.querySelector('#mt-go').onclick = function () {
        if (!sSel || !pSel) return api.say('<div class="note warn small">下一站和協定都要選</div>');
        var nx = route[at + 1], key = route[at] + '>' + nx;
        if (sSel !== nx) return api.submit(false, '信不會送到「' + all.filter(function (s) { return s.id === sSel; })[0].t + '」。', '寄信的路線：寄件人電腦 → 自己的郵件伺服器 → 對方的郵件伺服器 → 收件人電腦。');
        if (pSel !== proto[key]) return api.submit(false, '這一段不是用 ' + pSel + '。', '寄出去用 SMTP，收信下載用 POP3；HTTPS 是瀏覽網頁用的。');
        at++; sSel = null; pSel = null; api.say('<div class="note ok small">✔ ' + key.replace('>', ' → ').replace('pcA', nm[0] + '的電腦').replace('mA', nm[0] + '的伺服器').replace('mB', nm[1] + '的伺服器').replace('pcB', nm[1] + '的電腦') + '（' + proto[key] + '）</div>');
        draw();
        if (at === route.length - 1) api.submit(true, nm[1] + ' 收到信了！電腦 →（SMTP）→ 郵件伺服器 →（SMTP）→ 對方的郵件伺服器 →（POP3）→ 收件人電腦。');
      };
    }
    var shuffleOnce = api.hard ? shuffle(all) : ST;
    draw();
  };
  function scramble(t) { var c = '█▓▒░#@%&*$?'; return t.split('').map(function () { return c[rnd(c.length)]; }).join('') + '…'; }
  L.spy = function (el, api) {
    var acct = 's' + between(1100000, 1199999), pw = pick(['Sun', 'Moon', 'Cat', 'Tea', 'Fox']) + between(1000, 9999) + pick(['!', '#', '$']);
    var mode = null;
    el.dataset.lab = 'spy';
    el.innerHTML = '<div class="sp"><p class="small">登入學校系統：先選要用 <b>http</b> 還是 <b>https</b> 送出，再按「登入」。右邊的 🕵️ 偷看者會攔截網路上傳的資料。<b>任務：不能讓偷看者看到密碼。</b></p>' +
      tip(api, 'https 的 s ＝ secure，傳送的資料會加密；http 是明文，偷看者看得一清二楚。') +
      '<div class="sp-grid"><div class="sp-form"><div class="row"><button type="button" class="btn sm sp-m" data-m="http">http://</button><button type="button" class="btn sm sp-m" data-m="https">🔒 https://</button></div>' +
      '<label class="tiny bold mt1">帳號<input class="input" value="' + acct + '" readonly></label><label class="tiny bold">密碼<input class="input" type="password" value="' + esc(pw) + '" readonly></label>' +
      '<button type="button" class="btn go mt1" id="sp-go">登入</button></div><div class="sp-spy"><b>🕵️ 偷看者攔截到的內容</b><pre id="sp-see">（還沒送出）</pre></div></div></div>';
    el.querySelectorAll('.sp-m').forEach(function (b) { b.onclick = function () { mode = b.dataset.m; el.querySelectorAll('.sp-m').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    el.querySelector('#sp-go').onclick = function () {
      if (!mode) return api.say('<div class="note warn small">先選 http 或 https</div>');
      var see = el.querySelector('#sp-see');
      if (mode === 'http') {
        see.textContent = 'POST /login\naccount=' + acct + '\npassword=' + pw;
        return api.submit(false, '偷看者看到你的密碼「' + pw + '」了！http 是明文傳送。', '改用 https（有鎖頭的網址）再登入一次。');
      }
      see.textContent = scramble('account=' + acct + '&password=' + pw) + '\n（加密了，看不懂）';
      api.submit(true, '用 https 加密傳送，偷看者只看到一堆亂碼！要輸入帳號密碼、個資、付款資料的網頁一定要用 https。');
    };
  };

  /* =================================================================
     🚀 下載模擬器（N9）：選網路方案和基地臺，按「開始下載」看進度條跑
     條件：時間內下載完（大家同時上網、平分頻寬）；挑戰版還要花費最低
     ================================================================= */
  var PLAN = [{ id: 'p50', t: '50 Mbps', v: 50, $: 399 }, { id: 'p100', t: '100 Mbps', v: 100, $: 499 }, { id: 'p300', t: '300 Mbps', v: 300, $: 699 }, { id: 'p500', t: '500 Mbps', v: 500, $: 899 }];
  var APS = [{ id: 'w4', t: 'Wi-Fi 4 基地臺（最快 150 Mbps）', v: 150, $: 600 }, { id: 'w5', t: 'Wi-Fi 5 基地臺（最快 866 Mbps）', v: 866, $: 1500 }, { id: 'w6', t: 'Wi-Fi 6 基地臺（最快 1200 Mbps）', v: 1200, $: 2800 }];
  function dlTime(p, a, n, mb) { return mb / (Math.min(p.v, a.v) / n / 8); }
  function dlCost(p, a) { return p.$ + Math.round(a.$ / 24); }   // 每月花費：方案月付＋基地臺攤成 24 個月
  L.dlSim = function (el, api) {
    var sc;
    for (;;) {
      var n = pick([2, 3, 4, 5]), mb = pick([300, 500, 750, 1000, 1500, 2000]), T = pick([30, 45, 60, 90, 120]);
      var ok = []; PLAN.forEach(function (p) { APS.forEach(function (a) { if (dlTime(p, a, n, mb) <= T) ok.push({ p: p, a: a, $: dlCost(p, a) }); }); });
      if (ok.length >= 2 && ok.length <= 8) { ok.sort(function (x, y) { return x.$ - y.$; }); sc = { n: n, mb: mb, T: T, best: ok[0] }; break; }
    }
    var P = null, A = null, running = false;
    el.dataset.lab = 'dlSim'; el.dataset.sc = JSON.stringify({ n: sc.n, mb: sc.mb, T: sc.T });
    el.innerHTML = '<div class="dl"><p class="small">家裡 <b>' + sc.n + ' 個人同時上網</b>（平分頻寬）。你要下載 <b>' + sc.mb + ' MB</b> 的遊戲更新，要在 <b>' + sc.T + ' 秒內</b>完成' + (api.hard ? '，而且<b>每月花費最少</b>' : '') + '。選方案再按「開始下載」。</p>' +
      tip(api, '速度被「網路方案」和「基地臺」比較慢的那個卡住，再除以人數、除以 8 變成 MB/s。') +
      '<div class="dl-grid"><div><p class="tiny bold">🏢 網路方案（ISP）</p>' + PLAN.map(function (p) { return '<button type="button" class="btn sm dl-p" data-id="' + p.id + '">' + p.t + '<small>月付 $' + p.$ + '</small></button>'; }).join('') + '</div>' +
      '<div><p class="tiny bold">📶 基地臺</p>' + APS.map(function (a) { return '<button type="button" class="btn sm dl-a" data-id="' + a.id + '">' + a.t + '<small>$' + a.$ + '（攤成月付約 $' + Math.round(a.$ / 24) + '）</small></button>'; }).join('') + '</div></div>' +
      '<div class="dl-bar mt2"><i id="dl-fill"></i><span id="dl-txt">還沒開始</span></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="dl-go">▶ 開始下載</button><span class="tiny soft" id="dl-msg"></span></div></div>';
    function mark() { el.querySelectorAll('.dl-p').forEach(function (b) { b.classList.toggle('on', P && b.dataset.id === P.id); }); el.querySelectorAll('.dl-a').forEach(function (b) { b.classList.toggle('on', A && b.dataset.id === A.id); }); }
    el.querySelectorAll('.dl-p').forEach(function (b) { b.onclick = function () { if (running) return; P = PLAN.filter(function (p) { return p.id === b.dataset.id; })[0]; mark(); }; });
    el.querySelectorAll('.dl-a').forEach(function (b) { b.onclick = function () { if (running) return; A = APS.filter(function (a) { return a.id === b.dataset.id; })[0]; mark(); }; });
    el.querySelector('#dl-go').onclick = function () {
      if (!P || !A || running) { if (!running) el.querySelector('#dl-msg').textContent = '網路方案和基地臺都要選'; return; }
      running = true;
      var t = dlTime(P, A, sc.n, sc.mb), each = Math.min(P.v, A.v) / sc.n, fill = el.querySelector('#dl-fill'), txt = el.querySelector('#dl-txt');
      var anim = Math.min(3, Math.max(1.2, t / 40)), t0 = performance.now();
      el.querySelector('#dl-msg').textContent = '每人約 ' + (Math.round(each * 10) / 10) + ' Mbps ＝ ' + (Math.round(each / 8 * 100) / 100) + ' MB/s';
      (function step() {
        var f = Math.min(1, (performance.now() - t0) / 1000 / anim);
        fill.style.width = (f * 100) + '%'; fill.style.background = t <= sc.T ? 'var(--ok)' : 'var(--bad)';
        txt.textContent = '⏱ ' + (Math.round(f * t * 10) / 10) + ' 秒　' + Math.round(f * sc.mb) + ' / ' + sc.mb + ' MB';
        if (f < 1) return requestAnimationFrame(step);
        running = false;
        var tt = Math.round(t * 10) / 10;
        if (t > sc.T) return api.submit(false, '下載要 ' + tt + ' 秒，超過 ' + sc.T + ' 秒了。', '慢的那一段是瓶頸：' + (P.v < A.v ? '網路方案太慢' : '基地臺太慢') + '。', '算法：min(方案, 基地臺) ÷ ' + sc.n + ' 人 ÷ 8 ＝ MB/s；' + sc.mb + ' MB ÷ MB/s ＝ 秒。');
        if (api.hard && dlCost(P, A) > sc.best.$) return api.submit(false, tt + ' 秒下載完，但還有更便宜的組合也能在時間內完成。', '基地臺比網路方案快很多的話，多出來的速度用不到 —— 選剛好夠的就好。');
        api.submit(true, tt + ' 秒下載完！每人 ' + (Math.round(each * 10) / 10) + ' Mbps（' + (P.v <= A.v ? '網路方案' : '基地臺') + '是比較慢的那一段）÷ 8 ＝ ' + (Math.round(each / 8 * 100) / 100) + ' MB/s。');
      })();
    };
  };
  L._dl = { PLAN: PLAN, APS: APS, time: dlTime, cost: dlCost };

  /* =================================================================
     ▮ 條碼掃描器（N10）：按「掃描」讓雷射劃過條碼，一格一格讀出 1／0，再換成數字
     挑戰版（印條碼）：點格子塗黑／塗白，印出代表指定數字的條碼（不顯示總和）
     ================================================================= */
  L.barcodeScan = function (el, api) {
    var d = between(api.hard ? 100 : 20, 255), b = ('00000000' + d.toString(2)).slice(-8), read = 0;
    el.dataset.lab = 'barcodeScan';
    el.innerHTML = '<div class="bc"><p class="small">簡化版條碼：<b>黑色吸光＝1、白色反光＝0</b>。按「🔦 掃描」讓雷射劃過條碼，看掃描器讀出什麼，再換成十進位數字。</p>' +
      tip(api, '讀出 8 個位元後，權值由左到右是 128、64、32、16、8、4、2、1，把 1 的權值加起來。') +
      '<div class="bc-code" id="bc-code">' + b.split('').map(function (x) { return '<i class="' + (x === '1' ? 'k' : 'w') + '"></i>'; }).join('') + '<span class="bc-laser" id="bc-laser"></span></div>' +
      '<div class="bc-read" id="bc-read">' + b.split('').map(function (_, i) { return '<span data-i="' + i + '">?</span>'; }).join('') + '</div>' +
      '<div class="row mt2"><button type="button" class="btn" id="bc-scan">🔦 掃描</button><input class="input" id="bc-ans" placeholder="換成十進位" style="max-width:10rem;margin:0" disabled><button type="button" class="btn go" id="bc-ok" disabled>確定</button></div></div>';
    var laser = el.querySelector('#bc-laser');
    el.querySelector('#bc-scan').onclick = function () {
      this.disabled = true; read = 0; laser.style.display = 'block';
      var iv = setInterval(function () {
        laser.style.left = (read * 12.5 + 6) + '%';
        var s = el.querySelector('#bc-read [data-i="' + read + '"]'); s.textContent = b[read]; s.classList.add('on');
        if (++read >= 8) { clearInterval(iv); setTimeout(function () { laser.style.display = 'none'; }, 250); el.querySelector('#bc-ans').disabled = false; el.querySelector('#bc-ok').disabled = false; el.querySelector('#bc-ans').focus(); }
      }, 260);
    };
    el.querySelector('#bc-ok').onclick = function () {
      var v = el.querySelector('#bc-ans').value.replace(/\s/g, '');
      if (!/^\d+$/.test(v)) return api.say('<div class="note warn small">請輸入數字</div>');
      if (+v !== d) return api.submit(false, '讀到的 ' + b + ' 不是 ' + v + '。', '把 1 的位置的權值加起來：128、64、32、16、8、4、2、1。', '例：10000011 ＝ 128＋2＋1 ＝ 131。');
      api.submit(true, '掃描器讀到 ' + b + ' ＝ ' + d + '。真實的條碼用寬窄不同的黑白色塊，原理一樣：照光 → 黑吸白反 → 轉成數位訊號 → 解碼。');
    };
  };
  L.barcodePrint = function (el, api) {
    var d = between(100, 255), bits = [0, 0, 0, 0, 0, 0, 0, 0];
    el.dataset.lab = 'barcodePrint'; el.dataset.d = d;
    el.innerHTML = '<div class="bc"><p class="small">印一張代表 <b class="mono" style="font-size:1.3rem">' + d + '</b> 的條碼：點格子塗黑（1）或塗白（0）。<b>這次不顯示總和</b>，自己算！</p>' +
      tip(api, '從 128 開始：放得下就塗黑，再看剩下多少。') +
      '<div class="bc-code print" id="bc-print"></div><div class="tiny soft mt1">權值：128　64　32　16　8　4　2　1</div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="bc-pok">🖨️ 印出來</button></div></div>';
    function draw() {
      el.querySelector('#bc-print').innerHTML = bits.map(function (x, i) { return '<button type="button" class="bc-cell ' + (x ? 'k' : 'w') + '" data-i="' + i + '" aria-label="第 ' + (i + 1) + ' 格"></button>'; }).join('');
      el.querySelectorAll('.bc-cell').forEach(function (c) { c.onclick = function () { bits[+c.dataset.i] ^= 1; draw(); }; });
    }
    el.querySelector('#bc-pok').onclick = function () {
      var v = parseInt(bits.join(''), 2);
      if (v !== d) return api.submit(false, '你印的條碼代表 ' + v + '，不是 ' + d + '。', d + ' 從 128 開始拆：放得下就塗黑。', '例：200 ＝ 128＋64＋8 → 黑黑白白黑白白白。');
      api.submit(true, '印好了：' + bits.join('') + ' ＝ ' + d + '。');
    };
    draw();
  };

  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
