/* =====================================================================
   🔬 1-3 進階挑戰：雙面板「取樣與量化」對照（AQDUAL）
   ---------------------------------------------------------------------
   原型：老師用 Gemini Canvas 做的「聲音取樣量化對照實驗」，改寫成不用 Chart.js／Tailwind CDN 的單檔版本。
   · 兩個面板共用同一段不規則聲波（3～5 個非整數頻率的正弦波疊加，不是規律的正弦波）
   · 各自選「取樣頻率」（每秒幾次）與「量化位元」（幾階），按「開始挑戰」後紅線一格一格前進，
     學生自己點紅點最接近的刻度（動手量化），做完畫出綠色的數位波形
   · 兩邊都做完 → 先猜哪一邊比較接近原始聲波，再「量一量」：平均誤差、資料量（取樣點數 × 位元）
   · 滑鼠、觸控、鍵盤（↑↓ 選刻度、Enter 確認）都能操作
   · 這是練習活動，不計星；答案就是畫面上看得到的波形，沒有需要藏起來的東西
   用法：頁面放 <div id="aq-dual"></div>，載入本檔即可
   ===================================================================== */
(function () {
  var root = document.getElementById('aq-dual'); if (!root) return;
  var RATES = [10, 20, 30, 40], BITS = [2, 3, 4, 5];
  var wave = [];

  /* ── 共用聲波：3～5 個非整數頻率的正弦波疊加，正規化到 ±0.95 ── */
  function newWave() {
    var n = 3 + Math.floor(Math.random() * 3), sum = 0; wave = [];
    for (var i = 0; i < n; i++) { var c = { f: 1.23 + Math.random() * 5, a: 0.2 + Math.random() * 0.8, p: Math.random() * Math.PI * 2 }; sum += c.a; wave.push(c); }
    wave.forEach(function (c) { c.a = c.a / sum * 0.95; });
  }
  function sig(t) { var v = 0; for (var i = 0; i < wave.length; i++) v += wave[i].a * Math.sin(2 * Math.PI * wave[i].f * t + wave[i].p); return v; }
  function levelsOf(bits) { var n = Math.pow(2, bits), out = []; for (var i = 0; i < n; i++) out.push(-1 + i * 2 / (n - 1)); return out; }
  function nearestIdx(levels, v) { var b = 0; for (var i = 1; i < levels.length; i++) if (Math.abs(v - levels[i]) < Math.abs(v - levels[b])) b = i; return b; }
  function bin(i, bits) { return (i >>> 0).toString(2).padStart(bits, '0'); }

  /* ── 畫面 ── */
  var css = document.createElement('style');
  css.textContent =
    '.aq{background:#fff;border:1px solid #e2e8f0;border-radius:1.5rem;padding:1.25rem;box-shadow:0 1px 2px rgba(15,23,42,.05)}' +
    '.aq h3{font-size:1.15rem;font-weight:800;color:#1e293b;margin:0}.aq .aq-sub{font-size:.85rem;color:#475569;margin:.35rem 0 0;line-height:1.6}' +
    '.aq-top{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-top:.8rem}' +
    '.aq-btn{border:0;border-radius:.6rem;padding:.5rem .9rem;font-weight:800;font-size:.9rem;cursor:pointer;color:#fff;background:#0f766e}.aq-btn:disabled{opacity:.45;cursor:not-allowed}' +
    '.aq-btn.alt{background:#4f46e5}.aq-btn.stop{background:#dc2626}.aq-btn.ghost{background:#fff;color:#334155;border:1px solid #cbd5e1}.aq-btn:focus-visible,.aq canvas:focus-visible{outline:3px solid #2563eb;outline-offset:2px}' +
    '.aq-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1rem}@media(min-width:1100px){.aq-grid{grid-template-columns:1fr 1fr}}' +
    '.aq-p{position:relative;border:2px solid #e2e8f0;border-radius:1rem;padding:2rem .8rem .8rem;background:#f8fafc}.aq-p.A{border-color:#93c5fd}.aq-p.B{border-color:#d8b4fe}' +
    '.aq-tag{position:absolute;top:0;left:0;color:#fff;font-size:.75rem;font-weight:800;padding:.2rem .7rem;border-radius:.85rem 0 .6rem 0}.A .aq-tag{background:#2563eb}.B .aq-tag{background:#7c3aed}' +
    '.aq-ctl{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;align-items:end}@media(min-width:700px){.aq-ctl{grid-template-columns:1fr 1fr auto auto}}' +
    '.aq-ctl label{font-size:.75rem;font-weight:800;color:#334155}.aq-ctl select{width:100%;margin-top:.2rem;border:1px solid #cbd5e1;border-radius:.5rem;padding:.4rem;font-size:.9rem;background:#fff;color:#1e293b}' +
    '.aq-st{display:flex;flex-wrap:wrap;justify-content:space-between;gap:.4rem;margin-top:.6rem;font-size:.82rem;font-weight:700;color:#1e3a8a;background:#eff6ff;border:1px solid #bfdbfe;border-radius:.6rem;padding:.4rem .6rem}' +
    '.B .aq-st{color:#4c1d95;background:#f5f3ff;border-color:#ddd6fe}.aq-st .bad{color:#b91c1c}' +
    '.aq-body{display:flex;gap:.5rem;margin-top:.6rem}.aq-cv{flex:1;min-width:0;background:#fff;border:1px solid #cbd5e1;border-radius:.6rem;position:relative;overflow:hidden}' +
    '.aq canvas{display:block;width:100%;height:320px;touch-action:none;cursor:crosshair;border-radius:.6rem}@media(max-width:640px){.aq canvas{height:260px}}' +
    '.aq-arr{width:6.5rem;flex-shrink:0;background:#fff;border:1px solid #cbd5e1;border-radius:.6rem;display:flex;flex-direction:column;overflow:hidden}' +
    '.aq-arr b{display:block;text-align:center;font-size:.72rem;background:#f1f5f9;color:#334155;padding:.3rem 0;border-bottom:1px solid #e2e8f0}' +
    '.aq-list{flex:1;overflow-y:auto;max-height:290px;padding:.25rem;display:flex;flex-direction:column;gap:.2rem;font:600 .72rem/1.3 ui-monospace,Consolas,monospace}' +
    '.aq-list div{display:flex;justify-content:space-between;gap:.25rem;padding:.15rem .3rem;border-radius:.3rem;background:#dbeafe;color:#1e3a8a}.B .aq-list div{background:#ede9fe;color:#4c1d95}.aq-list i{font-style:normal;opacity:.65}' +
    '.aq-toast{position:absolute;left:50%;top:.5rem;transform:translateX(-50%);background:#fff;border:1px solid #cbd5e1;border-radius:.6rem;padding:.3rem .7rem;font-weight:800;font-size:.85rem;box-shadow:0 6px 18px rgba(15,23,42,.15);opacity:0;transition:opacity .2s;pointer-events:none;max-width:92%;text-align:center}' +
    '.aq-toast.on{opacity:1}.aq-toast.ok{color:#047857;border-color:#6ee7b7}.aq-toast.no{color:#b91c1c;border-color:#fca5a5}' +
    '.aq-res{margin-top:1rem;border-radius:1rem;border:2px dashed #a5b4fc;background:#eef2ff;padding:1rem}.aq-res h4{margin:0;font-weight:800;color:#312e81}' +
    '.aq-res .row3{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.6rem}.aq-res table{width:100%;border-collapse:collapse;margin-top:.6rem;font-size:.85rem;background:#fff;border-radius:.5rem;overflow:hidden}' +
    '.aq-res th,.aq-res td{border:1px solid #e2e8f0;padding:.35rem .5rem;text-align:center}.aq-res th{background:#f8fafc;color:#334155}.aq-res p{margin:.5rem 0 0;font-size:.9rem;color:#1e293b;line-height:1.7}' +
    '@media(max-width:640px){.aq-body{flex-direction:column}.aq-arr{width:auto}.aq-list{flex-direction:row;flex-wrap:wrap;max-height:6.5rem}.aq-p{padding-left:.5rem;padding-right:.5rem}}' +
    '.aq-hide{display:none!important}.aq-sr{position:absolute;left:-9999px}';
  document.head.appendChild(css);

  function panelHTML(k, rate, bits) {
    return '<div class="aq-p ' + k + '" id="aq-' + k + '"><span class="aq-tag">面板 ' + k + '</span>' +
      '<div class="aq-ctl"><label>取樣頻率（每秒幾次，x 軸）<select class="aq-rate" aria-label="面板 ' + k + ' 取樣頻率">' + RATES.map(function (r) { return '<option value="' + r + '"' + (r === rate ? ' selected' : '') + '>' + r + ' Hz（' + (r + 1) + ' 個點）</option>'; }).join('') + '</select></label>' +
      '<label>量化位元（幾階，y 軸）<select class="aq-bits" aria-label="面板 ' + k + ' 量化位元">' + BITS.map(function (b) { return '<option value="' + b + '"' + (b === bits ? ' selected' : '') + '>' + b + ' bits（' + Math.pow(2, b) + ' 階）</option>'; }).join('') + '</select></label>' +
      '<button type="button" class="aq-btn aq-go">▶ 開始挑戰</button><button type="button" class="aq-btn stop aq-stop" disabled>■ 停止／重來</button></div>' +
      '<div class="aq-st" aria-live="polite"><span class="aq-msg">設定好之後按「開始挑戰」</span><span>進度 <span class="aq-prog">0 / 0</span>　量化錯誤 <span class="aq-err bad">0</span></span></div>' +
      '<div class="aq-body"><div class="aq-cv"><canvas tabindex="0" aria-label="面板 ' + k + ' 波形圖：用滑鼠點、手指點，或用上下鍵選刻度再按 Enter"></canvas><div class="aq-toast" role="status"></div></div>' +
      '<div class="aq-arr"><b>陣列紀錄</b><div class="aq-list" role="log" aria-label="面板 ' + k + ' 量化結果"></div></div></div>' +
      '<div class="row3" style="margin-top:.5rem;display:flex;gap:.5rem;flex-wrap:wrap"><button type="button" class="aq-btn ghost aq-ff aq-hide">⚡ 剩下的點自動量化</button></div></div>';
  }
  root.innerHTML = '<section class="aq" aria-labelledby="aq-title"><h3 id="aq-title">🔬 進階挑戰：雙面板「取樣與量化」對照</h3>' +
    '<p class="aq-sub">兩個面板是<b>同一段聲波</b>。各自選不同的取樣頻率與量化位元，按「開始挑戰」：紅線每停一次（取樣），就點紅點<b>最接近的那一條刻度</b>（量化）。兩邊都做完，比比看哪一個數位波形比較接近原始聲波。</p>' +
    '<div class="aq-top"><button type="button" class="aq-btn alt" id="aq-new">🔀 產生新聲波</button><span class="aq-sub" style="margin:0">💡 刻度旁的 <b>00、01、10、11</b> 就是存進電腦的二進位編碼</span></div>' +
    '<div class="aq-grid">' + panelHTML('A', 10, 2) + panelHTML('B', 20, 3) + '</div>' +
    '<div class="aq-res aq-hide" id="aq-res" aria-live="polite"></div></section>';

  /* ── 一個面板 ── */
  function Panel(k, color) {
    var el = document.getElementById('aq-' + k), self = this;
    this.k = k; this.color = color; this.el = el;
    this.cv = el.querySelector('canvas'); this.ctx = this.cv.getContext('2d');
    this.rateSel = el.querySelector('.aq-rate'); this.bitsSel = el.querySelector('.aq-bits');
    this.go = el.querySelector('.aq-go'); this.stop = el.querySelector('.aq-stop'); this.ff = el.querySelector('.aq-ff');
    this.msg = el.querySelector('.aq-msg'); this.prog = el.querySelector('.aq-prog'); this.err = el.querySelector('.aq-err');
    this.list = el.querySelector('.aq-list'); this.toastEl = el.querySelector('.aq-toast');
    this.go.onclick = function () { self.start(); };
    this.stop.onclick = function () { self.reset('已重來，可以重新設定'); };
    this.ff.onclick = function () { self.fastForward(); };
    this.rateSel.onchange = this.bitsSel.onchange = function () { self.reset(); onPanelChange(); };
    this.cv.addEventListener('pointermove', function (e) { self.hoverAt(e); });
    this.cv.addEventListener('pointerleave', function () { if (self.hover != null && !self.kb) { self.hover = null; self.draw(); } });
    this.cv.addEventListener('pointerdown', function (e) { if (!self.playing || self.anim) return; self.hoverAt(e); self.answer(); });
    this.cv.addEventListener('keydown', function (e) { self.key(e); });
    this.reset();
  }
  Panel.prototype.reset = function (msg) {
    cancelAnimationFrame(this.raf);
    this.rate = +this.rateSel.value; this.bits = +this.bitsSel.value; this.levels = levelsOf(this.bits);
    this.n = this.rate + 1; this.i = 0; this.errors = 0; this.wrongHere = 0; this.done = false; this.playing = false; this.anim = false; this.hover = null; this.kb = false;
    this.pts = []; this.t = 0; this.target = 0;
    this.rateSel.disabled = this.bitsSel.disabled = false; this.go.disabled = false; this.stop.disabled = true; this.ff.classList.add('aq-hide');
    this.go.textContent = '▶ 開始挑戰';
    this.msg.textContent = msg || '設定好之後按「開始挑戰」';
    this.prog.textContent = '0 / ' + this.n; this.err.textContent = '0'; this.list.innerHTML = '';
    this.draw();
  };
  Panel.prototype.start = function () {
    this.reset(); this.playing = true;
    this.rateSel.disabled = this.bitsSel.disabled = true; this.go.disabled = true; this.stop.disabled = false;
    this.msg.textContent = '紅線前進中…'; this.target = 0; this.t = -0.02; this.animate();
    this.cv.focus({ preventScroll: true });
  };
  Panel.prototype.animate = function () {
    var self = this; this.anim = true;
    (function step() {
      self.t = Math.min(self.target, self.t + 0.02);
      self.draw();
      if (self.t < self.target - 1e-9) { self.raf = requestAnimationFrame(step); return; }
      self.anim = false;
      if (self.i >= self.n) return self.finish();
      self.msg.textContent = '第 ' + (self.i + 1) + ' 個取樣點：紅點最接近哪一條刻度？點它（或用 ↑↓ 選、Enter 確認）';
      if (self.hover == null) self.hover = nearestIdx(self.levels, 0);   // 鍵盤從中間開始
      self.draw();
    })();
  };
  /* 繪圖區域 */
  Panel.prototype.geo = function () {
    var w = this.cv.clientWidth, h = this.cv.clientHeight, L = this.levels.length <= 16 ? 58 : 46;
    return { w: w, h: h, l: L, r: w - 10, t: 12, b: h - 26, x: function (t) { return L + t * (w - 10 - L); }, y: function (v) { return 12 + (1.1 - v) / 2.2 * (h - 38); } };
  };
  Panel.prototype.hoverAt = function (e) {
    if (!this.playing || this.anim) return;
    var r = this.cv.getBoundingClientRect(), g = this.geo(), y = e.clientY - r.top, v = 1.1 - (y - g.t) / (g.b - g.t) * 2.2;
    this.kb = false; var h = nearestIdx(this.levels, v);
    if (h !== this.hover) { this.hover = h; this.draw(); }
  };
  Panel.prototype.key = function (e) {
    if (!this.playing || this.anim) return;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault(); this.kb = true;
      this.hover = Math.max(0, Math.min(this.levels.length - 1, (this.hover == null ? 0 : this.hover) + (e.key === 'ArrowUp' ? 1 : -1)));
      this.draw();
    } else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.answer(); }
  };
  Panel.prototype.toast = function (txt, ok) {
    var t = this.toastEl; t.textContent = txt; t.className = 'aq-toast on ' + (ok ? 'ok' : 'no');
    clearTimeout(this.tt); this.tt = setTimeout(function () { t.classList.remove('on'); }, 1300);
  };
  Panel.prototype.answer = function () {
    if (!this.playing || this.anim || this.hover == null) return;
    var tt = this.i / this.rate, want = nearestIdx(this.levels, sig(tt));
    if (this.hover !== want) {
      this.errors++; this.wrongHere++; this.err.textContent = this.errors;
      // 第一次錯：只說方向；同一點錯第二次：告訴他答案
      if (this.wrongHere >= 2) this.toast('❌ 應該是 ' + bin(want, this.bits) + '（' + this.levels[want].toFixed(2) + '）', false);
      else this.toast(this.hover > want ? '❌ 太高了，紅點在下面一點' : '❌ 太低了，紅點在上面一點', false);
      return;
    }
    this.toast('✅ 正確！編碼 ' + bin(want, this.bits), true);
    this.record(want);
    if (this.i >= 5 && this.i < this.n) this.ff.classList.remove('aq-hide');
    this.target = this.i < this.n ? this.i / this.rate : 1; this.msg.textContent = '紅線前進中…';
    this.animate();
  };
  Panel.prototype.record = function (idx) {
    var tt = this.i / this.rate;
    this.pts.push({ t: tt, i: idx, v: this.levels[idx] });
    var d = document.createElement('div');
    d.innerHTML = '<i>[' + (this.i + 1) + ']</i><span>' + bin(idx, this.bits) + '</span>';
    d.title = '振幅 ' + this.levels[idx].toFixed(2);
    this.list.appendChild(d); this.list.scrollTop = this.list.scrollHeight;
    this.i++; this.wrongHere = 0; this.prog.textContent = this.i + ' / ' + this.n;
  };
  Panel.prototype.fastForward = function () {
    if (!this.playing) return;
    cancelAnimationFrame(this.raf); this.anim = false;
    while (this.i < this.n) this.record(nearestIdx(this.levels, sig(this.i / this.rate)));
    this.t = this.target = 1; this.finish(true);
  };
  Panel.prototype.finish = function (ff) {
    this.playing = false; this.done = true; this.hover = null;
    this.go.disabled = false; this.go.textContent = '↻ 再做一次'; this.stop.disabled = true; this.ff.classList.add('aq-hide');
    this.rateSel.disabled = this.bitsSel.disabled = false;
    this.msg.textContent = '✅ 量化完成！' + (ff ? '（後面是自動完成的）' : '') + '共 ' + this.n + ' 個點 × ' + this.bits + ' bits';
    this.draw(); onPanelChange();
  };
  /* 數位波形在時間 t 的值（和圖上一樣：每一點的值維持到左右兩點的中間） */
  Panel.prototype.digitalAt = function (t) {
    var k = Math.round(t * this.rate); k = Math.max(0, Math.min(this.pts.length - 1, k));
    return this.pts.length ? this.pts[k].v : 0;
  };
  Panel.prototype.meanError = function () {
    var s = 0, N = 400; for (var j = 0; j <= N; j++) { var t = j / N; s += Math.abs(sig(t) - this.digitalAt(t)); } return s / (N + 1);
  };
  Panel.prototype.draw = function () {
    var cv = this.cv, dpr = window.devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !h) return;
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    var c = this.ctx, g = this.geo(), self = this, lv = this.levels, many = lv.length > 16;
    c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, h);
    c.font = 'bold 11px ui-monospace,Consolas,monospace'; c.textAlign = 'right'; c.textBaseline = 'middle';
    // 量化刻度（左邊標二進位編碼；32 階時每 4 階標一次）
    lv.forEach(function (v, i) {
      var y = g.y(v); c.strokeStyle = 'rgba(148,163,184,.55)'; c.setLineDash([3, 3]); c.lineWidth = 1;
      c.beginPath(); c.moveTo(g.l, y); c.lineTo(g.r, y); c.stroke(); c.setLineDash([]);
      if (!many || i % 4 === 0 || i === lv.length - 1) { c.fillStyle = '#334155'; c.fillText(bin(i, self.bits), g.l - 5, y); }
    });
    // 取樣時間（淡淡的直線）
    c.strokeStyle = 'rgba(15,118,110,.12)'; c.lineWidth = 1;
    for (var s = 0; s < this.n; s++) { var sx = g.x(s / this.rate); c.beginPath(); c.moveTo(sx, g.t); c.lineTo(sx, g.b); c.stroke(); }
    // x 軸
    c.fillStyle = '#475569'; c.textAlign = 'center'; c.textBaseline = 'top'; c.font = 'bold 11px system-ui,sans-serif';
    [0, 0.25, 0.5, 0.75, 1].forEach(function (t) { c.fillText(t + (t === 1 ? ' 秒' : ''), g.x(t), g.b + 8); });
    // 原始聲波（灰色）
    c.strokeStyle = '#94a3b8'; c.lineWidth = 3; c.beginPath();
    for (var j = 0; j <= 300; j++) { var t = j / 300, x = g.x(t), y = g.y(sig(t)); if (j) c.lineTo(x, y); else c.moveTo(x, y); }
    c.stroke();
    // 數位波形（綠色階梯：每一點維持到左右兩點的中間）
    if (this.pts.length) {
      c.strokeStyle = 'rgba(22,163,74,.85)'; c.lineWidth = 2.5; c.beginPath();
      this.pts.forEach(function (p, i) {
        var x0 = g.x(Math.max(0, p.t - 0.5 / self.rate)), x1 = g.x(Math.min(1, p.t + 0.5 / self.rate)), y = g.y(p.v);
        if (i === 0) c.moveTo(x0, y); else c.lineTo(x0, y);
        if (i < self.pts.length - 1 || self.done) c.lineTo(x1, y);
      });
      c.stroke();
      this.pts.forEach(function (p) { c.beginPath(); c.arc(g.x(p.t), g.y(p.v), 4.5, 0, Math.PI * 2); c.fillStyle = '#16a34a'; c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke(); });
    }
    // 紅色掃描線＋紅點
    if (this.playing) {
      var px = g.x(Math.max(0, this.t));
      c.strokeStyle = 'rgba(220,38,38,.85)'; c.setLineDash([4, 4]); c.lineWidth = 2; c.beginPath(); c.moveTo(px, g.t); c.lineTo(px, g.b); c.stroke(); c.setLineDash([]);
      if (!this.anim && this.i < this.n) {
        var ty = g.y(sig(this.i / this.rate));
        if (this.hover != null) {
          var hy = g.y(lv[this.hover]);
          c.strokeStyle = this.color; c.lineWidth = 3; c.beginPath(); c.moveTo(g.l, hy); c.lineTo(g.r, hy); c.stroke();
          c.beginPath(); c.arc(px, hy, 6.5, 0, Math.PI * 2); c.fillStyle = '#fff'; c.fill(); c.strokeStyle = this.color; c.lineWidth = 2.5; c.stroke();
        }
        c.beginPath(); c.arc(px, ty, 5.5, 0, Math.PI * 2); c.fillStyle = '#dc2626'; c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke();
      }
    }
  };

  /* ── 兩邊都完成：先猜，再量一量 ── */
  var A, B, guessed = null, res = document.getElementById('aq-res');
  function onPanelChange() {
    if (!(A && B && A.done && B.done)) { res.classList.add('aq-hide'); guessed = null; return; }
    res.classList.remove('aq-hide');
    if (guessed == null) {
      res.innerHTML = '<h4>🎉 兩邊都量化完成了！</h4><p>看一看兩個綠色的數位波形，你覺得<b>哪一個比較接近</b>灰色的原始聲波？</p>' +
        '<div class="row3"><button type="button" class="aq-btn" style="background:#2563eb" data-g="A">面板 A 比較接近</button><button type="button" class="aq-btn" style="background:#7c3aed" data-g="B">面板 B 比較接近</button><button type="button" class="aq-btn ghost" data-g="=">差不多</button></div>';
      res.querySelectorAll('[data-g]').forEach(function (b) { b.onclick = function () { guessed = b.dataset.g; onPanelChange(); }; });
      return;
    }
    var ea = A.meanError(), eb = B.meanError(), close = Math.abs(ea - eb) < 0.1 * Math.max(ea, eb), better = close ? '=' : (ea < eb ? 'A' : 'B');
    var sa = A.n * A.bits, sb = B.n * B.bits, name = { A: '面板 A', B: '面板 B', '=': '差不多' };
    res.innerHTML = '<h4>📏 量一量：誰比較接近原始聲波？</h4>' +
      '<table><tr><th></th><th>取樣頻率</th><th>量化位元</th><th>取樣點數</th><th>資料量</th><th>平均誤差</th></tr>' +
      [[A, ea, sa], [B, eb, sb]].map(function (r) { return '<tr><th>面板 ' + r[0].k + '</th><td>' + r[0].rate + ' Hz</td><td>' + r[0].bits + ' bits（' + r[0].levels.length + ' 階）</td><td>' + r[0].n + '</td><td>' + r[0].n + ' × ' + r[0].bits + ' = <b>' + r[2] + '</b> bits</td><td><b>' + r[1].toFixed(3) + '</b></td></tr>'; }).join('') + '</table>' +
      '<p>你選的是「' + name[guessed] + '」，量出來' + (better === '=' ? '兩邊差不多' : '<b>' + name[better] + '</b> 比較接近') + '。' + (guessed === better ? '✅ 你的眼睛很準！' : '🤔 和你想的不一樣？把兩張圖再對照看看。') + '</p>' +
      '<p>💡 <b>取樣頻率越高</b>（點越密）、<b>量化位元越多</b>（刻度越細），數位聲音就越接近原音 —— 但要存的 0 與 1 也越多' +
      (sa !== sb ? '（這裡 ' + (sa > sb ? '面板 A' : '面板 B') + ' 的資料量是另一邊的 ' + (Math.max(sa, sb) / Math.min(sa, sb)).toFixed(1) + ' 倍）' : '') + '。這就是 WAV 檔比較大、音質也比較好的原因。</p>' +
      '<div class="row3"><button type="button" class="aq-btn ghost" id="aq-again">換一組設定再比一次</button></div>';
    document.getElementById('aq-again').onclick = function () { A.reset(); B.reset(); onPanelChange(); document.getElementById('aq-A').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  }

  newWave();
  A = new Panel('A', 'rgba(37,99,235,.9)'); B = new Panel('B', 'rgba(124,58,237,.9)');
  document.getElementById('aq-new').onclick = function () { newWave(); A.reset('已換新聲波'); B.reset('已換新聲波'); onPanelChange(); };
  // 分頁切換後才看得到：大小一變就重畫
  if (window.ResizeObserver) { var ro = new ResizeObserver(function () { A.draw(); B.draw(); }); ro.observe(A.cv); ro.observe(B.cv); }
  window.addEventListener('resize', function () { A.draw(); B.draw(); });
  window.AQDUAL = { A: A, B: B, sig: sig, levelsOf: levelsOf, nearestIdx: nearestIdx };   // 測試用
})();
