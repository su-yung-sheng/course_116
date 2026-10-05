/* =====================================================================
   🔐 單元一・實驗任務認證挑戰（每課三項，每項 1⭐，附收據）
   ---------------------------------------------------------------------
   網頁上的互動玩具照舊給學生玩（不計星）；星星改由這裡出題、判斷、發：
   xs { t, u, k, who }       → 開一局：照 SV_ANS.xtask.tasks[u][k] 出題（🎲 有種子，驗證時重新產生同一組），回傳題目（不含答案）
   xq { run, i, v }          → 第 i 題的答案；錯了扣 ❤️（3 顆用完這局就結束）；選擇題答錯會換一題（不能刪去法硬猜）
   xf { run, prev }          → 每一題都答對才結算：這一項的收據（lv＝x{課}.{任務}、1⭐）
                               ＋這一課的收據（lv＝x{課}、⭐＝驗證過的任務數；prev 是網頁存的其他任務收據，這裡逐一驗章）
   · 出題器只放「規則」（換算、編碼、計算），題目當場算；觀察題的題目和正解在 private（SV_ANS.xtask.obs），不在公開程式裡
   · 出題器回傳的 ans 只給測試用，送到網頁的欄位見 xPub
   ===================================================================== */
(function () {
  function rnd(n) { return Math.floor((CARDGAME.rand || Math.random)() * n); }
  function between(lo, hi) { return lo + rnd(hi - lo + 1); }
  function pick(a) { return a[rnd(a.length)]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function picks(a, n) { return shuffle(a).slice(0, n); }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }   // 1764000 → 1,764,000（不靠 toLocaleString，Apps Script 也一樣）
  function bin8(n) { var s = n.toString(2); while (s.length < 8) s = '0' + s; return s; }
  function weights(n) { var w = [128, 64, 32, 16, 8, 4, 2, 1].filter(function (x) { return n & x; }); return w.length ? w.join(' + ') : '0'; }
  function numOf(v) { var s = String(v).replace(/[,，\s]/g, ''); return /^\d+$/.test(s) ? +s : NaN; }
  function distinctInts(lo, hi, n) { var seen = {}, out = []; while (out.length < n) { var x = between(lo, hi); if (!seen[x]) { seen[x] = 1; out.push(x); } } return out; }

  var MORSE = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--',
    N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..' };
  var MWORDS = 'SOS HELP SHIP STAR MOON SUN SEA BOAT FIRE WATER LIGHT RADIO HOME CODE NIGHT ISLAND ROPE FOOD MAP RAIN WIND SAND TREE FISH'.split(' ');
  function toMorse(w) { return w.split('').map(function (c) { return MORSE[c]; }).join(' '); }
  function normMorse(v) {   // 點：. · • ●；劃：- − – — _ ；字母之間用空白或 /
    return String(v || '').replace(/[·•●∙]/g, '.').replace(/[−–—_ー－]/g, '-').trim().split(/[\s\/|]+/).filter(Boolean).join(' ');
  }
  var COLORS = [['紅色', [255, 0, 0]], ['綠色', [0, 255, 0]], ['藍色', [0, 0, 255]], ['黃色', [255, 255, 0]], ['洋紅色（紫紅）', [255, 0, 255]],
    ['青色（水藍）', [0, 255, 255]], ['白色', [255, 255, 255]], ['黑色', [0, 0, 0]]];
  var ZH = '學校電腦資訊台灣你好星空網路'.split(''), EN = 'ABCDEFGHKMNPRSTXYZ'.split('');

  var G = {
    /* 十進位 → 8 位元二進位 */
    xD2B: function (rd) {
      return distinctInts(rd.min || 3, rd.max || 255, rd.n || 3).map(function (n) {
        return { kind: 'input', icon: '💡', mono: true, t: '十進位 ' + n, sub: '換成 8 個位元的二進位（例如 00010110）', ph: '8 個 0 或 1', ans: bin8(n),
          check: function (v) { v = String(v).replace(/\s+/g, ''); return /^[01]{1,8}$/.test(v) && parseInt(v, 2) === n; },
          why: n + ' ＝ ' + weights(n) + ' → ' + bin8(n) + '。', hint: '權值由大到小是 128、64、32、16、8、4、2、1：放得下就點亮（1），放不下就是 0。' };
      });
    },
    /* 8 位元二進位 → 十進位 */
    xB2D: function (rd) {
      return distinctInts(rd.min || 3, rd.max || 255, rd.n || 2).map(function (n) {
        return { kind: 'input', icon: '🔢', mono: true, t: bin8(n), sub: rd.rgb ? '這個顏色值（8 個位元）換成十進位是多少？' : '換成十進位是多少？', ph: '輸入數字', ans: String(n),
          check: function (v) { return numOf(v) === n; }, why: '是 1 的位置加起來：' + weights(n) + ' ＝ ' + n + '。', hint: '由右往左的權值是 1、2、4、8、16、32、64、128，把是 1 的權值加起來。' };
      });
    },
    /* 四個二進位挑一個（BINARY BONANZA） */
    xBinPick: function (rd) {
      return distinctInts(20, 250, rd.n || 4).map(function (n) {
        var opts = [n], tries = 0;
        while (opts.length < 4 && tries++ < 50) {
          var d = pick([n + 1, n - 1, n + 2, n - 2, n ^ 16, n ^ 32, n ^ 64, n ^ 8, n + 16, n - 16]);
          if (d > 0 && d < 256 && opts.indexOf(d) < 0) opts.push(d);
        }
        return { kind: 'choice', icon: '💎', mono: true, t: '十進位 ' + n, sub: '哪一個二進位等於它？', ans: bin8(n),
          options: shuffle(opts).map(function (x) { return { id: bin8(x), label: bin8(x) }; }),
          check: function (v) { return v === bin8(n); }, why: n + ' ＝ ' + weights(n) + ' → ' + bin8(n) + '。', hint: '先看最大的權值 128、64 要不要點亮，再一位一位往右對。' };
      });
    },
    /* 摩斯電碼 → 單字（收報員） */
    xMorseDec: function (rd) {
      return picks(MWORDS, rd.n || 2).map(function (w) {
        return { kind: 'input', icon: '📻', mono: true, morse: true, t: toMorse(w).split(' ').join('  /  '), sub: '這段摩斯電碼是哪一個英文單字？（/ 隔開每個字母）', ph: '輸入英文單字', ans: w,
          check: function (v) { return String(v).replace(/\s+/g, '').toUpperCase() === w; }, why: w.split('').map(function (c) { return c + ' ' + MORSE[c]; }).join('、') + '。', hint: '對照頁面上的摩斯密碼全表，一個字母一個字母解。' };
      });
    },
    /* 單字 → 摩斯電碼（發報員） */
    xMorseEnc: function (rd) {
      return picks(MWORDS.filter(function (w) { return w.length <= 5; }), rd.n || 2).map(function (w) {
        return { kind: 'input', icon: '📡', mono: true, raw: true, t: w, sub: '發報成摩斯電碼：點用 .、劃用 -，每個字母之間空一格', ph: '例如 ... --- ...', ans: toMorse(w),
          check: function (v) { return normMorse(v) === toMorse(w); }, why: w.split('').map(function (c) { return c + ' ' + MORSE[c]; }).join('、') + '。', hint: '對照摩斯密碼全表；字母和字母之間記得空一格。' };
      });
    },
    /* 一段中英混合文字的編碼容量 */
    xCodec: function (rd) {
      var out = [];
      for (var i = 0; i < (rd.n || 1); i++) (function () {   // 每一題自己的變數（check 才不會拿到最後一題的答案）
        var e = between(1, 3), z = between(1, 3), s = shuffle(picks(EN, e).concat(picks(ZH, z))).join(''), u8 = rnd(2) === 0;
        var total = e + z * (u8 ? 3 : 2), name = u8 ? 'Unicode（UTF-8）' : 'Big-5';
        out.push({ kind: 'input', icon: '🔤', t: '「' + s + '」', sub: '用 ' + name + ' 存，總共要幾個 Byte？', ph: '輸入數字', ans: String(total),
          check: function (v) { return numOf(v) === total; }, why: '英文 ' + e + ' 個 × 1 ＋ 中文 ' + z + ' 個 × ' + (u8 ? 3 : 2) + ' ＝ ' + total + ' 個 Byte。',
          hint: name + '：英文字母 1 個 Byte，中文字 ' + (u8 ? 3 : 2) + ' 個 Byte。' });
      })();
      return out;
    },
    /* 量化位元 ↔ 刻度（階）數 */
    xQuant: function (rd) {
      var out = [];
      for (var i = 0; i < (rd.n || 1); i++) (function () {   // 每一題自己的變數（check 才不會拿到最後一題的答案）
        if (rnd(2) === 0) { var b = pick([1, 2, 3, 4, 5, 6, 8]), lv = Math.pow(2, b);
          out.push({ kind: 'input', icon: '📏', t: '量化用 ' + b + ' 個位元', sub: '最多可以分成幾個刻度（階）？', ph: '輸入數字', ans: String(lv),
            check: function (v) { return numOf(v) === lv; }, why: b + ' 個位元有 2 的 ' + b + ' 次方 ＝ ' + lv + ' 種組合，所以分成 ' + lv + ' 階。', hint: '1 個位元 2 階、2 個位元 4 階、3 個位元 8 階……' });
        } else { var b2 = pick([2, 3, 4, 5, 6]), n2 = Math.pow(2, b2);
          out.push({ kind: 'input', icon: '📏', t: '要分成 ' + n2 + ' 個刻度（階）', sub: '量化至少要用幾個位元？', ph: '輸入數字', ans: String(b2),
            check: function (v) { return numOf(v) === b2; }, why: '2 的 ' + b2 + ' 次方 ＝ ' + n2 + '，所以要 ' + b2 + ' 個位元。', hint: '2 自乘幾次會等於 ' + n2 + '？' });
        }
      })();
      return out;
    },
    /* 未壓縮的聲音檔案大小 */
    xAudio: function (rd) {
      var out = [];
      for (var i = 0; i < (rd.n || 1); i++) (function () {   // 每一題自己的變數（check 才不會拿到最後一題的答案）
        var hz = pick([8000, 11025, 22050, 44100]), b = pick([8, 16]), ch = pick([1, 2]), sec = between(1, 5), bytes = hz * b * ch * sec / 8;
        out.push({ kind: 'input', icon: '💾', t: '取樣頻率 ' + fmt(hz) + ' Hz、' + b + ' 位元、' + (ch === 2 ? '雙聲道' : '單聲道') + '、錄 ' + sec + ' 秒', sub: '沒有壓縮的 WAV 檔，大約是多少 Byte？',
          ph: '輸入數字（可以有逗號）', ans: String(bytes), check: function (v) { return numOf(v) === bytes; },
          why: fmt(hz) + ' × ' + b + ' × ' + ch + ' × ' + sec + ' ÷ 8 ＝ ' + fmt(bytes) + ' Byte。', hint: '取樣頻率 × 位元數 × 聲道數 × 秒數，算出幾個位元，再 ÷ 8 換成 Byte。' });
      })();
      return out;
    },
    /* 像素與色彩位元 */
    xPix: function (rd) {
      var kinds = shuffle(['count', 'bits', 'colors']).slice(0, rd.n || 2);
      return kinds.map(function (k) {
        if (k === 'count') { var w = between(4, 20), h = between(4, 20);
          return { kind: 'input', icon: '🔲', t: '把畫面切成寬 ' + w + ' 格、高 ' + h + ' 格', sub: '總共有幾個像素？', ph: '輸入數字', ans: String(w * h),
            check: function (v) { return numOf(v) === w * h; }, why: w + ' × ' + h + ' ＝ ' + (w * h) + ' 個像素。', hint: '像素數 ＝ 寬 × 高。' }; }
        if (k === 'bits') { var b = pick([1, 2, 3, 4, 8]), n = Math.pow(2, b);
          return { kind: 'input', icon: '🎨', t: '每個像素要能記 ' + n + ' 種顏色', sub: '每個像素至少要幾個位元？', ph: '輸入數字', ans: String(b),
            check: function (v) { return numOf(v) === b; }, why: '2 的 ' + b + ' 次方 ＝ ' + n + '，所以要 ' + b + ' 個位元。', hint: '1 個位元 2 種、2 個位元 4 種、3 個位元 8 種……' }; }
        var c = pick([1, 2, 3, 4, 8]), m = Math.pow(2, c);
        return { kind: 'input', icon: '🎨', t: '每個像素用 ' + c + ' 個位元', sub: '最多可以記幾種顏色？', ph: '輸入數字', ans: String(m),
          check: function (v) { return numOf(v) === m; }, why: c + ' 個位元有 2 的 ' + c + ' 次方 ＝ ' + m + ' 種組合。', hint: '1 個位元 2 種、2 個位元 4 種……' };
      });
    },
    /* RGB 二進位 → 顏色 */
    xRgb: function (rd) {
      return picks(COLORS, rd.n || 2).map(function (c) {
        var others = picks(COLORS.filter(function (x) { return x[0] !== c[0]; }), 3).map(function (x) { return x[0]; });
        return { kind: 'choice', icon: '🖍️', mono: true, t: 'R ' + bin8(c[1][0]) + '\nG ' + bin8(c[1][1]) + '\nB ' + bin8(c[1][2]), sub: '這個像素是什麼顏色？', ans: c[0],
          options: shuffle([c[0]].concat(others)).map(function (x) { return { id: x, label: x }; }),
          check: function (v) { return v === c[0]; }, why: '換成十進位是 (' + c[1].join(', ') + ')，' + c[0] + '。', hint: '11111111＝255（最亮）、00000000＝0（沒有）；紅＋綠＝黃、紅＋藍＝洋紅、綠＋藍＝青。' };
      });
    },
    /* 未壓縮的圖片檔案大小 */
    xImg: function (rd) {
      var out = [];
      for (var i = 0; i < (rd.n || 1); i++) (function () {   // 每一題自己的變數（check 才不會拿到最後一題的答案）
        var w, h, b, tries = 0;
        do { w = pick([8, 10, 16, 20, 32, 40, 50, 64, 100]); h = pick([8, 10, 16, 20, 32, 40, 50, 64]); b = pick([1, 2, 8, 24]); } while ((w * h * b) % 8 && tries++ < 20);
        var bytes = w * h * b / 8;
        out.push({ kind: 'input', icon: '🗜️', t: '寬 ' + w + ' × 高 ' + h + ' 像素、每個像素 ' + b + ' 位元', sub: '沒有壓縮時，檔案是多少 Byte？', ph: '輸入數字', ans: String(bytes),
          check: function (v) { return numOf(v) === bytes; }, why: w + ' × ' + h + ' × ' + b + ' ÷ 8 ＝ ' + fmt(bytes) + ' Byte。', hint: '寬 × 高 × 每個像素的位元數 ＝ 總位元數，再 ÷ 8 換成 Byte。' });
      })();
      return out;
    }
  };
  CARDGAME.gens = Object.assign(CARDGAME.gens || {}, G);
  CARDGAME.xtask = { normMorse: normMorse, toMorse: toMorse };
})();

/* 觀察題：從 private 題庫抽，選項打亂（題庫第一個選項是正解） */
function xObs(name, n) {
  var pool = ((SV_ANS.xtask || {}).obs || {})[name] || [], R = CARDGAME.rand || Math.random;
  var idx = pool.map(function (_, i) { return i; });
  for (var i = idx.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)), t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
  return idx.slice(0, n).map(function (k) {
    var q = pool[k], opts = q.o.slice();
    for (var a = opts.length - 1; a > 0; a--) { var b = Math.floor(R() * (a + 1)), tt = opts[a]; opts[a] = opts[b]; opts[b] = tt; }
    return { kind: 'choice', icon: '🔍', t: q.t, sub: '想一想剛剛的實驗，選出正確的說法', ans: q.o[0], options: opts.map(function (x) { return { id: x, label: x }; }),
      check: function (v) { return v === q.o[0]; }, why: q.why, hint: q.hint };
  });
}
var XQ_SPARE = 2;   // 每一部分多出幾題備用：選擇題答錯就換一題
/* 照種子產生這一局的所有題目（題目 ＋ 備用題），每一部分一組 */
function xBuild(run) {
  var spec = ((SV_ANS.xtask || {}).tasks || {})[run.u]; spec = spec && spec[run.k];
  if (!spec) svFail('bad-item');
  CARDGAME.rand = svSeeded(run.seed);
  try {
    return spec.map(function (p) {
      var n = p[2] + XQ_SPARE;
      if (p[0] === 'obs') return { n: p[2], items: xObs(p[1], n) };
      var g = CARDGAME.gens[p[1]]; if (!g) svFail('no-gen');
      return { n: p[2], items: g({ n: n, rgb: run.u === '4' }) };
    });
  } finally { CARDGAME.rand = null; }
}
function xItem(run, slot) { var s = run.slots[slot]; if (!s) svFail('bad-item'); return xBuild(run)[s[0]].items[s[1]]; }
function xPub(it, i) {
  var o = { i: i, kind: it.kind, t: it.t, sub: it.sub, icon: it.icon, ph: it.ph, mono: !!it.mono, morse: !!it.morse };
  if (it.options) o.options = it.options;
  return o;
}
/* 收據用的字串和 svReceipt 一樣：學期|班|號|姓名|單元|關卡|星|時間 */
function xSignFor(run, lv, stars, ts) { var w = run.who || {}; return svSign([run.term, w.cls || '', w.seat || '', w.name || '', 'digital', lv, stars, ts].join('|')); }

SV_ACTIONS.xs = function (req) {
  var u = String(req.u), k = String(req.k), tasks = ((SV_ANS.xtask || {}).tasks || {})[u];
  if (!tasks || !tasks[k]) svFail('bad-item');
  var run = { id: svId(16), kind: 'x', term: String(req.t), mod: 'digital', lv: 'x' + u + '.' + k, u: u, k: k, st: null, hearts: SV_HEARTS,
    seed: (Math.random() * 4294967296) >>> 0, slots: [], next: {}, got: {}, t0: Date.now(), who: req.who || null };
  var parts = xBuild(run);
  parts.forEach(function (p, pi) { for (var j = 0; j < p.n; j++) run.slots.push([pi, j]); run.next[pi] = p.n; });
  svSave(run);
  return { run: run.id, hearts: run.hearts, qs: run.slots.map(function (s, i) { return xPub(parts[s[0]].items[s[1]], i); }) };
};
SV_ACTIONS.xq = function (req) {
  return svWithLock(function () {
    var run = svRun(req.run); if (run.kind !== 'x') svFail('bad-run'); svAlive(run);
    var i = +req.i, it = xItem(run, i); if (run.got[i]) svFail('answered');
    var v = it.kind === 'choice' || it.raw ? String(req.v == null ? '' : req.v) : String(req.v == null ? '' : req.v).trim();
    var ok = !!it.check(v), res;
    if (ok) { run.got[i] = 1; res = { ok: true, why: it.why }; }
    else {
      run.hearts--; if (run.hearts <= 0) run.dead = true;
      res = { ok: false, hint: it.hint };
      if (it.kind === 'choice' && !run.dead) {   // 選擇題答錯：換一題（同一部分的備用題），不能刪去法硬猜
        var p = run.slots[i][0], parts = xBuild(run);
        if (run.next[p] < parts[p].items.length) { run.slots[i] = [p, run.next[p]++]; res.swap = xPub(parts[p].items[run.slots[i][1]], i); }
      }
    }
    svSave(run);
    res.hearts = run.hearts; if (run.dead) res.dead = true;
    return res;
  });
};
SV_ACTIONS.xf = function (req) {
  return svWithLock(function () {
    var run = svRun(req.run); if (run.kind !== 'x') svFail('bad-run'); svAlive(run);
    if (Object.keys(run.got).length < run.slots.length) svFail('incomplete');
    run.done = true; svSave(run);
    var task = svReceipt(run, 1);
    svLog(run, 1, '認證挑戰 ' + run.k + '，剩 ' + run.hearts + ' 顆❤️');
    /* 這一課的總星數：網頁送來其他任務的收據，逐一驗章（只算這一課、這個學生的） */
    var keys = Object.keys(SV_ANS.xtask.tasks[run.u]), ok = {}; ok[run.k] = 1;
    (Array.isArray(req.prev) ? req.prev : []).slice(0, 6).forEach(function (p) {
      if (!p || keys.indexOf(String(p.k)) < 0 || ok[p.k]) return;
      if (xSignFor(run, 'x' + run.u + '.' + p.k, 1, +p.ts) === String(p.rc)) ok[p.k] = 1;
    });
    var stars = Object.keys(ok).length, lvRun = { term: run.term, who: run.who, mod: 'digital', lv: 'x' + run.u }, rc = svReceipt(lvRun, stars);
    return { ok: true, task: { k: run.k, rc: task.rc, ts: task.ts }, stars: stars, done: Object.keys(ok), rc: rc.rc, ts: rc.ts };
  });
};
