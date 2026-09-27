/* =====================================================================
   🧪 多媒體概念闖關・視覺化實驗站（CARDGAME.labs）── M1～M4 三星三階的「操作」「挑戰」
   ---------------------------------------------------------------------
   resFrame（M1 解析度與影格）、flipbook（M2 視覺暫留與 fps）、timeline（M3 多重軌道）、licenseCheck（M4 素材授權）
   寫法同 shared/net-labs.js：情境每次隨機產生，學生做完按「確認」，照課本規則判斷，原始碼裡沒有答案清單。
   el.dataset 放「題目」（不放答案），給測試的解題器看。
   ===================================================================== */
(function () {
  function rnd(n) { try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; } catch (e) { return Math.floor(Math.random() * n); } }
  function pick(a) { return a[rnd(a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return UI.esc(s); }
  function tip(api, t) { return api.practice ? '<div class="note small mt1">💡 提示：' + esc(t) + '</div>' : ''; }
  function warn(api, t) { api.say('<div class="note warn small">' + esc(t) + '</div>'); }
  var L = {};

  /* =================================================================
     📺 解析度與影格（M1）：標示 → 像素、影格數；挑戰：像素是幾倍、分秒換影格、隔行掃描
     ================================================================= */
  var RES = [{ n: 'SD 480p', w: 720, h: 480 }, { n: 'HD 720p', w: 1280, h: 720 }, { n: 'Full HD 1080p', w: 1920, h: 1080 }, { n: '4K 2160p', w: 3840, h: 2160 }, { n: '8K 4320p', w: 7680, h: 4320 }];
  var PAIRS = [[1, 2, 2.25], [2, 3, 4], [3, 4, 4], [1, 3, 9], [2, 4, 16]];   // [低, 高, 像素倍數]
  L.resFrame = function (el, api) {
    var q = [];
    if (!api.hard) {
      var a = rnd(4), b = a + 1 + rnd(4 - a), sec = 2 + rnd(5), fps = pick([24, 30, 60]);
      q = [{ k: 'wh', t: '「' + RES[a].n + '」的畫面是 水平 × 垂直 多少像素？', w: RES[a].w, h: RES[a].h, r: a },
        { k: 'fr', t: '一段 ' + sec + ' 秒的影片，每秒 ' + fps + ' 格（' + fps + 'fps），一共有幾張畫面？', v: sec * fps },
        { k: 'hi', t: '「' + RES[b].n + '」和「' + RES[a].n + '」比，哪一個畫面比較細緻？', v: b, opts: shuffle([a, b]) }];
    } else {
      var p = pick(PAIRS), m = pick([0, 1]), s = 5 + rnd(50), fps2 = pick([24, 30, 60]), ir = pick([1, 2]);
      q = [{ k: 'x', t: '「' + RES[p[1]].n + '」的像素數量，是「' + RES[p[0]].n + '」的幾倍？', v: p[2], lo: p[0], hi: p[1] },
        { k: 'fr', t: '一段 ' + m + ' 分 ' + s + ' 秒的影片，' + fps2 + 'fps，一共有幾張畫面？', v: (m * 60 + s) * fps2 },
        { k: 'il', t: '「' + RES[ir].h + 'i」隔行掃描：每一格畫面只有奇數或偶數行，一格有幾行？', v: RES[ir].h / 2 }];
    }
    el.dataset.lab = 'resFrame'; el.dataset.q = JSON.stringify(q.map(function (x) { return { k: x.k, t: x.t }; }));
    el.innerHTML = '<div class="rf2"><div class="res-boxes" id="rb"></div>' +
      tip(api, api.hard ? '像素數量＝水平 × 垂直，兩個相除就是幾倍；影格數＝總秒數 × fps；隔行掃描一格只有一半的行數。' : '解析度常用「垂直」的數字簡稱；影格數＝秒數 × 每秒幾格。') +
      '<div class="stack mt1">' + q.map(function (x, i) {
        var inp = x.k === 'wh' ? '<span class="row" style="gap:.3rem"><input class="input rf-n" data-i="' + i + '" data-p="w" inputmode="numeric" placeholder="水平"> × <input class="input rf-n" data-i="' + i + '" data-p="h" inputmode="numeric" placeholder="垂直"></span>'
          : x.opts ? '<span class="row" style="gap:.3rem">' + x.opts.map(function (o) { return '<button type="button" class="btn sm rf-o" data-i="' + i + '" data-v="' + o + '">' + RES[o].n + '</button>'; }).join('') + '</span>'
            : '<input class="input rf-n" data-i="' + i + '" data-p="v" inputmode="decimal" placeholder="輸入數字">';
        return '<div class="card soft-bg" style="padding:.6rem .8rem"><p class="small bold">' + (i + 1) + '. ' + esc(x.t) + '</p><div class="mt1">' + inp + '</div></div>';
      }).join('') + '</div><div class="row mt2"><button type="button" class="btn go" id="rf-ok">✅ 確認</button></div></div>';
    var pickV = {};
    el.querySelectorAll('.rf-o').forEach(function (b) { b.onclick = function () { pickV[b.dataset.i] = +b.dataset.v; el.querySelectorAll('.rf-o[data-i="' + b.dataset.i + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    function boxes() {   // 依解析度畫出等比例的框（看得出大小差多少）
      var list = api.hard ? [q[0].lo, q[0].hi] : [q[0].r, q[2].v === q[0].r ? q[2].opts.filter(function (o) { return o !== q[0].r; })[0] : q[2].v];
      list = list.sort(function (x, y) { return x - y; });
      var mx = RES[list[1]].w;
      el.querySelector('#rb').innerHTML = list.map(function (r) { var pc = RES[r].w / mx * 100; return '<div class="res-box" style="width:' + pc + '%;aspect-ratio:' + RES[r].w + '/' + RES[r].h + '"><span>' + RES[r].n + '</span></div>'; }).join('');
    }
    boxes();
    el.querySelector('#rf-ok').onclick = function () {
      function v(i, p) { var e = el.querySelector('.rf-n[data-i="' + i + '"][data-p="' + p + '"]'); return e ? e.value.trim() : ''; }
      for (var i = 0; i < q.length; i++) {
        var x = q[i];
        if (x.k === 'wh') { if (!v(i, 'w') || !v(i, 'h')) return warn(api, '每一題都要作答'); }
        else if (x.opts) { if (pickV[i] == null) return warn(api, '每一題都要作答'); }
        else if (!v(i, 'v')) return warn(api, '每一題都要作答');
      }
      for (i = 0; i < q.length; i++) {
        x = q[i];
        if (x.k === 'wh' && (+v(i, 'w') !== x.w || +v(i, 'h') !== x.h)) return api.submit(false, '第 ' + (i + 1) + ' 題：' + RES[x.r].n + ' 不是 ' + v(i, 'w') + '×' + v(i, 'h') + '。', '480p＝720×480、720p＝1280×720、1080p＝1920×1080、2160p（4K）＝3840×2160。');
        if (x.opts && pickV[i] !== x.v) return api.submit(false, '第 ' + (i + 1) + ' 題：解析度的數字越大，像素越多、畫面越細緻。', '比比看垂直的數字：480 < 720 < 1080 < 2160 < 4320。');
        if (!x.opts && x.k !== 'wh' && Math.abs(parseFloat(v(i, 'v')) - x.v) > 1e-9) {
          var h = { fr: '影格數＝總秒數 × fps' + (api.hard ? '（先把分鐘換成秒：1 分 ＝ 60 秒）' : ''), x: '像素數量＝水平 × 垂直；兩個相除。例：1080p 是 1920×1080。', il: '隔行掃描一格只掃一半的行（奇數行或偶數行）。' }[x.k];
          return api.submit(false, '第 ' + (i + 1) + ' 題算得不對。', h);
        }
      }
      api.submit(true, api.hard ? '全對！像素多幾倍、檔案就大幾倍；影格越多動作越流暢。' : '全對！解析度越高畫面越細緻；fps 越高動作越流暢，檔案也越大。');
    };
  };

  /* =================================================================
     🎞️ 翻頁動畫（M2 視覺暫留）：把畫面排好順序、算出 fps，按播放看動起來
     ================================================================= */
  L.flipbook = function (el, api) {
    var N = api.hard ? pick([8, 10]) : pick([6, 8]), T = api.hard ? pick([0.25, 0.5, 2]) : pick([0.5, 1]), fps = N / T;
    var frames = []; for (var i = 0; i < N; i++) frames.push({ x: 10 + i * (80 / (N - 1)), y: 70 - Math.round(Math.sin(i / (N - 1) * Math.PI) * 45) });
    var order = shuffle(frames.map(function (_, i) { return i; })), picked = [], timer = null;
    var extra = api.hard ? { m: rnd(2), s: 10 + rnd(49), f: pick([24, 30, 60]) } : null;
    el.dataset.lab = 'flipbook'; el.dataset.n = N; el.dataset.t = T; if (extra) el.dataset.x = JSON.stringify(extra);
    function svg(f, big) { return '<svg viewBox="0 0 100 80" class="fb-svg' + (big ? ' big' : '') + '"><line x1="0" y1="76" x2="100" y2="76" stroke="#94a3b8" stroke-width="2"/><circle cx="' + f.x + '" cy="' + f.y + '" r="7" fill="#f97316"/></svg>'; }
    el.innerHTML = '<div class="fbk"><p class="small">一顆球被丟起來又落下，拍成 <b>' + N + '</b> 張畫面，但順序亂掉了。① <b>依時間順序點選畫面</b>（球從左邊飛到右邊）② 要在 <b>' + T + ' 秒</b>內播完，算出 fps ③ 按「▶ 播放」看看。</p>' +
      tip(api, '球越往右，時間越晚；fps ＝ 畫面張數 ÷ 播放秒數。') +
      '<div class="fb-grid" id="fb-g"></div><div class="row mt1"><span class="small bold">順序：</span><span id="fb-seq" class="small mono"></span><button type="button" class="btn sm" id="fb-clr">↺ 重排</button></div>' +
      '<div class="row mt1"><label class="small bold">fps：<input class="input" id="fb-fps" inputmode="decimal" style="max-width:6rem;display:inline-block;margin:0"></label><button type="button" class="btn sm" id="fb-play">▶ 播放</button><div id="fb-view"></div></div>' +
      (extra ? '<div class="card soft-bg mt1" style="padding:.6rem .8rem"><p class="small bold">再算一題：一段 ' + extra.m + ' 分 ' + extra.s + ' 秒的影片，' + extra.f + 'fps，一共有幾張畫面？</p><input class="input" id="fb-tot" inputmode="numeric" style="max-width:10rem;margin:0"></div>' : '') +
      '<div class="row mt2"><button type="button" class="btn go" id="fb-ok">✅ 確認</button></div></div>';
    function draw() {
      el.querySelector('#fb-g').innerHTML = order.map(function (fi, k) {
        var at = picked.indexOf(fi);
        return '<button type="button" class="fb-f' + (at >= 0 ? ' on' : '') + '" data-f="' + fi + '" aria-label="畫面 ' + String.fromCharCode(65 + k) + '"><b>' + String.fromCharCode(65 + k) + (at >= 0 ? ' · ' + (at + 1) : '') + '</b>' + svg(frames[fi]) + '</button>';
      }).join('');
      el.querySelector('#fb-seq').textContent = picked.map(function (fi) { return String.fromCharCode(65 + order.indexOf(fi)); }).join(' → ') || '（還沒點）';
      el.querySelectorAll('.fb-f').forEach(function (b) { b.onclick = function () { var f = +b.dataset.f; if (picked.indexOf(f) < 0) picked.push(f); draw(); }; });
    }
    el.querySelector('#fb-clr').onclick = function () { picked = []; draw(); };
    el.querySelector('#fb-play').onclick = function () {
      var f = parseFloat(el.querySelector('#fb-fps').value), seq = picked.length ? picked : order, k = 0, view = el.querySelector('#fb-view');
      if (!(f > 0 && f <= 60)) return warn(api, '先填 fps（1～60）');
      clearInterval(timer);
      timer = setInterval(function () { view.innerHTML = svg(frames[seq[k % seq.length]], true); k++; if (k > seq.length * 2) clearInterval(timer); }, 1000 / f);
    };
    el.querySelector('#fb-ok').onclick = function () {
      clearInterval(timer);
      if (picked.length < N) return warn(api, '先把 ' + N + ' 張畫面都依順序點完');
      var bad = picked.some(function (fi, k) { return fi !== k; });
      if (bad) { picked = []; draw(); return api.submit(false, '順序不對，球會跳來跳去。', '球越往右，時間越晚。從最左邊那張開始點。'); }
      var f = parseFloat(el.querySelector('#fb-fps').value);
      if (Math.abs(f - fps) > 1e-9) return api.submit(false, 'fps 算得不對：' + N + ' 張要在 ' + T + ' 秒內播完。', 'fps ＝ 張數 ÷ 秒數。');
      if (extra && +el.querySelector('#fb-tot').value !== (extra.m * 60 + extra.s) * extra.f) return api.submit(false, '最後一題的影格數不對。', '先換成秒：' + extra.m + ' 分 ' + extra.s + ' 秒 ＝ ' + extra.m + '×60＋' + extra.s + ' 秒，再乘 fps。');
      api.submit(true, '一張張靜止的畫面快速播放，眼睛來不及分辨，就覺得在動 —— 這就是「視覺暫留」。');
    };
    draw();
  };

  /* =================================================================
     🎚️ 多重軌道（M3）：把素材放到對的軌道；挑戰：還要排時間，同一軌不能重疊
     上層影像蓋住下層；聲音不會互相蓋住，但同一條音軌同一時間只能放一段
     ================================================================= */
  var CLIPS = [
    { id: 'bg', t: '🎞️ 主角全景影片', kind: 'base', len: 10 },
    { id: 'title', t: '🔤 標題文字', kind: 'over', len: 3 },
    { id: 'pip', t: '🖼️ 子母畫面（小畫面）', kind: 'over', len: 4 },
    { id: 'logo', t: '🏷️ 去背貼圖', kind: 'over', len: 3 },
    { id: 'music', t: '🎵 配樂', kind: 'audio', len: 10 },
    { id: 'voice', t: '🗣️ 旁白', kind: 'audio', len: 4 }
  ];
  var TRACKS = [{ id: 'V2', t: '🎬 影像軌 V2（上層）' }, { id: 'V1', t: '🎬 影像軌 V1（下層）' }, { id: 'A1', t: '🔊 音訊軌 A1' }, { id: 'A2', t: '🔊 音訊軌 A2' }];
  L.timeline = function (el, api) {
    var clips = [CLIPS[0]].concat(api.hard ? shuffle(CLIPS.slice(1, 4)).slice(0, 2) : [pick(CLIPS.slice(1, 4))]).concat(api.hard ? [CLIPS[4], CLIPS[5]] : [pick(CLIPS.slice(4))]);
    var want = {};   // 挑戰版：每一段指定出現的時間
    if (api.hard) {
      var ov = clips.filter(function (c) { return c.kind === 'over'; }), s1 = rnd(2), s2 = s1 + ov[0].len + 1 + rnd(2);
      want[ov[0].id] = s1; want[ov[1].id] = s2; want.bg = 0; want.music = 0; want.voice = 2 + rnd(4);
    }
    var place = {}, start = {}, sel = null;
    el.dataset.lab = 'timeline'; el.dataset.clips = JSON.stringify(clips.map(function (c) { return { id: c.id, kind: c.kind, len: c.len, at: want[c.id] }; }));
    el.innerHTML = '<div class="tl2"><p class="small">把素材放到軌道上（先點素材，再點軌道）。' + (api.hard ? '<b>還要照「出現時間」填開始秒數</b>；同一條軌道上，時間不能重疊。' : '畫面上要看得到每一個影像素材，聲音都要聽得到。') + '</p>' +
      tip(api, '上層影像會蓋住下層：文字、小畫面、貼圖放上層，全景影片放下層；聲音放音訊軌，兩段聲音同時播就要分開兩條音軌。') +
      '<div class="tl-clips" id="tl-c"></div><div class="tl-tracks mt1" id="tl-t"></div>' +
      '<div class="row mt1"><label class="small bold">預覽第 <input type="range" id="tl-s" min="0" max="9" value="1" style="vertical-align:middle"> <span id="tl-sv">1</span> 秒</label></div><div class="tl-view" id="tl-v"></div>' +
      '<div class="row mt2"><button type="button" class="btn go" id="tl-ok">✅ 確認</button></div></div>';
    function draw() {
      el.querySelector('#tl-c').innerHTML = clips.map(function (c) {
        return '<button type="button" class="tl-clip' + (sel === c.id ? ' on' : '') + (place[c.id] ? ' placed' : '') + '" data-c="' + c.id + '">' + c.t + '<small>' + c.len + ' 秒' + (api.hard ? '・出現在第 ' + want[c.id] + '～' + (want[c.id] + c.len) + ' 秒' : '') + (place[c.id] ? '・在 ' + place[c.id] : '') + '</small></button>';
      }).join('');
      el.querySelector('#tl-t').innerHTML = TRACKS.map(function (t) {
        var on = clips.filter(function (c) { return place[c.id] === t.id; });
        return '<div class="tl-row" data-t="' + t.id + '"><button type="button" class="tl-lab" data-t="' + t.id + '">' + t.t + '</button><div class="tl-lane">' + on.map(function (c) {
          var s = api.hard ? (start[c.id] != null ? start[c.id] : 0) : 0;
          return '<span class="tl-bar k-' + c.kind + '" style="left:' + (s * 10) + '%;width:' + (c.len * 10) + '%">' + c.t.split(' ')[1] +
            (api.hard ? ' <input class="tl-st" data-c="' + c.id + '" inputmode="numeric" value="' + (start[c.id] != null ? start[c.id] : '') + '" placeholder="秒" aria-label="' + c.t + ' 開始秒數">' : '') + '</span>';
        }).join('') + '</div></div>';
      }).join('');
      el.querySelectorAll('.tl-clip').forEach(function (b) { b.onclick = function () { sel = b.dataset.c; draw(); }; });
      el.querySelectorAll('.tl-lab,.tl-row').forEach(function (b) { b.onclick = function (e) { if (e.target.closest('.tl-st')) return; if (!sel) return warn(api, '先點一個素材'); place[sel] = b.dataset.t; sel = null; draw(); }; });
      el.querySelectorAll('.tl-st').forEach(function (inp) { inp.onclick = function (e) { e.stopPropagation(); }; inp.onchange = function () { start[inp.dataset.c] = inp.value === '' ? null : +inp.value; draw(); }; });
      view();
    }
    function view() {   // 預覽：這一秒畫面上看得到什麼（上層蓋下層）、聽得到什麼
      var t = +el.querySelector('#tl-s').value, st = function (c) { return api.hard ? (start[c.id] || 0) : 0; };
      el.querySelector('#tl-sv').textContent = t;
      var at = clips.filter(function (c) { return place[c.id] && t >= st(c) && t < st(c) + c.len; });
      var vis = ['V1', 'V2'].map(function (tr) { return at.filter(function (c) { return place[c.id] === tr; })[0]; }).filter(Boolean);
      var aud = at.filter(function (c) { return /^A/.test(place[c.id]); });
      el.querySelector('#tl-v').innerHTML = '<div class="tl-screen">' + (vis.length ? vis.map(function (c, i) { return '<span class="lay' + i + '">' + c.t + '</span>'; }).join('') : '<span class="soft">（黑畫面）</span>') + '</div>' +
        '<div class="tiny soft mt1">🔊 ' + (aud.map(function (c) { return c.t; }).join('＋') || '沒有聲音') + '</div>';
    }
    el.querySelector('#tl-s').oninput = view;
    el.querySelector('#tl-ok').onclick = function () {
      var miss = clips.filter(function (c) { return !place[c.id]; });
      if (miss.length) return warn(api, '還有素材沒放：' + miss.map(function (c) { return c.t; }).join('、'));
      if (api.hard && clips.some(function (c) { return start[c.id] == null; })) return warn(api, '每一段都要填開始秒數');
      for (var i = 0; i < clips.length; i++) {
        var c = clips[i], tr = place[c.id];
        if (c.kind === 'audio' && !/^A/.test(tr)) return api.submit(false, c.t + ' 是聲音，要放在音訊軌。', '影像軌放畫面，音訊軌放聲音。');
        if (c.kind !== 'audio' && /^A/.test(tr)) return api.submit(false, c.t + ' 是畫面，要放在影像軌。', '影像軌放畫面，音訊軌放聲音。');
        if (c.kind === 'base' && tr !== 'V1') return api.submit(false, '全景影片放在上層，會把其他畫面整個蓋住！', '上層蓋下層：全景影片放下層 V1，文字、小畫面、貼圖放上層 V2。');
        if (c.kind === 'over' && tr !== 'V2') return api.submit(false, c.t + ' 放在下層，會被全景影片蓋住，看不到。', '要疊在畫面上的東西，放上層 V2。');
        if (api.hard && start[c.id] !== want[c.id]) return api.submit(false, c.t + ' 要在第 ' + want[c.id] + ' 秒出現。', '把開始秒數填成它要出現的時間。');
      }
      if (!api.hard) {
        var au = clips.filter(function (c) { return c.kind === 'audio'; });
        if (au.length > 1 && place[au[0].id] === place[au[1].id]) return api.submit(false, '兩段聲音同時播，放在同一條音軌會重疊。', '同時播放的聲音，分開放兩條音軌。');
      } else {
        for (i = 0; i < clips.length; i++) for (var j = i + 1; j < clips.length; j++) {
          var a = clips[i], b = clips[j];
          if (place[a.id] === place[b.id] && start[a.id] < start[b.id] + b.len && start[b.id] < start[a.id] + a.len)
            return api.submit(false, a.t + ' 和 ' + b.t + ' 在同一條軌道上時間重疊了。', '同一條軌道同一時間只能有一段；時間重疊的聲音分到兩條音軌。');
        }
      }
      api.submit(true, '拖動預覽看看：上層的文字、小畫面疊在全景影片上面，聲音一起播放 —— 這就是多重軌道。');
    };
    draw();
  };

  /* =================================================================
     📜 素材授權檢查（M4）：這些素材放進廣告能不能用？要不要標示作者？
     挑戰：換成「店家付費的商業廣告」而且要剪輯加字 —— CC BY-NC、CC BY-ND 也不能用
     ================================================================= */
  var MATS = [
    { id: 'own', t: '🎥 自己拍的主角影片', lic: '自己拍的', rule: 'free' },
    { id: 'pixa', t: '🎵 Pixabay 的配樂', lic: 'Pixabay：免費使用、可商用、不用標示', rule: 'free' },
    { id: 'pop', t: '🎤 最新的流行歌', lic: '唱片公司所有，沒有授權', rule: 'no' },
    { id: 'ccby', t: '📷 CC BY 的風景照片', lic: '創用 CC 姓名標示（CC BY）', rule: 'credit' },
    { id: 'ccnc', t: '🔔 CC BY-NC 的音效', lic: '創用 CC 姓名標示－非商業性（CC BY-NC）', rule: 'nc' },
    { id: 'ccnd', t: '🎨 CC BY-ND 的插圖', lic: '創用 CC 姓名標示－禁止改作（CC BY-ND）', rule: 'nd' },
    { id: 'web', t: '🖼️ 網路搜尋到的漂亮圖片', lic: '沒有寫授權', rule: 'no' },
    { id: 'yt', t: '📺 YouTuber 影片的片段', lic: '創作者所有，沒有授權', rule: 'no' }
  ];
  var ANS = [['ok', '✅ 可以直接用'], ['credit', '📝 可以用，要標示作者'], ['no', '🚫 不能用']];
  function verdict(m, commercial, edit) {
    if (m.rule === 'free') return 'ok';
    if (m.rule === 'no') return 'no';
    if (m.rule === 'credit') return 'credit';
    if (m.rule === 'nc') return commercial ? 'no' : 'credit';
    if (m.rule === 'nd') return edit ? 'no' : 'credit';
  }
  L.licenseCheck = function (el, api) {
    var commercial = !!api.hard, edit = !!api.hard || rnd(2) === 0;
    var mats = shuffle(MATS.filter(function (m) { return api.hard ? true : m.rule !== 'nd' || !edit; })).slice(0, api.hard ? 6 : 5);
    if (api.hard && !mats.some(function (m) { return m.rule === 'nc'; })) mats[0] = MATS[4];
    if (api.hard && !mats.some(function (m) { return m.rule === 'nd'; })) mats[1] = MATS[5];
    var ans = {};
    el.dataset.lab = 'licenseCheck'; el.dataset.s = JSON.stringify({ commercial: commercial, edit: edit, mats: mats.map(function (m) { return m.id; }) });
    el.innerHTML = '<div class="lc"><div class="note small"><b>情境：</b>' + (commercial ? '附近的飲料店<b>付錢</b>請你拍一支廣告，要在店裡和網路上播放（<b>商業用途</b>）' : '你的 30 秒廣告要在學校成果展播放、放上班級網頁（<b>非商業</b>）') +
      '，而且' + (edit ? '素材會<b>剪短、加上字幕</b>（改作）' : '素材<b>照原樣</b>使用，不修改') + '。</div>' +
      tip(api, '創用 CC：BY＝要標示作者；NC＝不能商業使用；ND＝不能修改（剪輯、加字都算）。沒寫授權的，就當作不能用。') +
      '<div class="stack mt1">' + mats.map(function (m) {
        return '<div class="lc-row"><div><b>' + esc(m.t) + '</b><small>授權：' + esc(m.lic) + '</small></div><div class="pb-opts">' + ANS.map(function (a) { return '<button type="button" class="btn sm lc-a" data-m="' + m.id + '" data-a="' + a[0] + '">' + a[1] + '</button>'; }).join('') + '</div></div>';
      }).join('') + '</div><div class="row mt2"><button type="button" class="btn go" id="lc-ok">✅ 確認</button></div></div>';
    el.querySelectorAll('.lc-a').forEach(function (b) { b.onclick = function () { ans[b.dataset.m] = b.dataset.a; el.querySelectorAll('.lc-a[data-m="' + b.dataset.m + '"]').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
    el.querySelector('#lc-ok').onclick = function () {
      if (mats.some(function (m) { return !ans[m.id]; })) return warn(api, '每一項素材都要判斷');
      var wrong = mats.filter(function (m) { return ans[m.id] !== verdict(m, commercial, edit); });
      if (wrong.length) {
        var m = wrong[0], v = verdict(m, commercial, edit);
        var why = { ok: '這項可以直接使用。', credit: '可以用，但要在片尾標示作者和授權。', no: m.rule === 'nc' ? '這是商業廣告，NC（非商業性）的素材不能用。' : m.rule === 'nd' ? '素材要剪輯、加字，ND（禁止改作）的素材不能改。' : '沒有授權的素材不能放進要公開的影片。' }[v];
        return api.submit(false, wrong.length + ' 項判斷得不對，例如「' + m.t + '」：' + why, '一項一項看授權：BY 要標示、NC 不能商業、ND 不能修改、沒寫授權就不能用。');
      }
      api.submit(true, '素材都合法！自己拍的最安全；用別人的素材，要照授權的規定（標示作者、能不能商業、能不能修改）。');
    };
  };
  L._m = { RES: RES, verdict: verdict, MATS: MATS };

  CARDGAME.labs = Object.assign(CARDGAME.labs || {}, L);
})();
