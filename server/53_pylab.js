/* ── 🐍 pylab 學生版：進度碼（伺服器端鎖關＋成績卡驗證＋換電腦還原）─────────
   進度碼 12 碼（XXXX-XXXX-XXXX）：前 4 碼＝10 關的星數（每關 0～3，壓成 20 位元），後 8 碼＝伺服器簽章。
   簽章只綁「學期｜班級｜座號」，不綁姓名 —— 姓名打錯可以隨時改，不影響進度。
   ・py （mod = 'pylab'）：要附進度碼；第 N 關要進度碼裡第 N−1 關 ≥ 2⭐ 才能評分（F12 改瀏覽器紀錄跳不了關）
   ・pyg：評分後把這一關的星數（只增不減）寫進新的進度碼回傳
   ・pcv：驗證進度碼 → 各關星數（老師驗證成績卡、學生換電腦還原進度）
   學生自己改不出正確的簽章（金鑰是指令碼屬性 SECRET）。 */
var PL_B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';   // Crockford Base32：沒有 I L O U，比較不會抄錯

function plLevels(term) { var T = SV_ANS.py[term]; if (!T) svFail('no-term'); var ks = Object.keys(T); if (ks.length > 10) svFail('server'); return ks; }
function plWho(w) {
  w = w || {};
  var cls = String(w.cls == null ? '' : w.cls).trim().slice(0, 8), seat = String(w.seat == null ? '' : w.seat).trim().replace(/^0+(?=\d)/, '');
  if (!cls || !/^\d{1,3}$/.test(seat)) svFail('bad-who');
  return { cls: cls, seat: seat };
}
function plNorm(code) { return String(code || '').toUpperCase().replace(/[\s\-]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1'); }
function plSig(term, w, packed) {
  var b = Utilities.computeHmacSha256Signature(['pylab', term, w.cls, w.seat, packed].join('|'), svSecret()), bits = '', s = '';
  for (var i = 0; i < 5; i++) bits += ('0000000' + ((b[i] + 256) % 256).toString(2)).slice(-8);
  for (var j = 0; j < 40; j += 5) s += PL_B32.charAt(parseInt(bits.substr(j, 5), 2));
  return s;
}
function plPack(stars) {
  var v = 0, s = '';
  for (var i = stars.length - 1; i >= 0; i--) v = v * 4 + Math.max(0, Math.min(3, stars[i] | 0));
  for (var k = 0; k < 4; k++) { s = PL_B32.charAt(v % 32) + s; v = Math.floor(v / 32); }
  return s;
}
function plUnpack(p, n) {
  var v = 0, out = [];
  for (var i = 0; i < 4; i++) { var d = PL_B32.indexOf(p.charAt(i)); if (d < 0) svFail('bad-code'); v = v * 32 + d; }
  for (var k = 0; k < n; k++) { out.push(v % 4); v = Math.floor(v / 4); }
  if (v) svFail('bad-code');
  return out;
}
/* 讀進度碼：空的＝全新的學生（全部 0⭐）；簽章對不上 → bad-code */
function plRead(term, w, code) {
  var n = plLevels(term).length, c = plNorm(code);
  if (!c) { var z = []; for (var i = 0; i < n; i++) z.push(0); return z; }
  if (!/^[0-9A-Z]{12}$/.test(c) || plSig(term, w, c.slice(0, 4)) !== c.slice(4)) svFail('bad-code');
  return plUnpack(c.slice(0, 4), n);
}
function plMake(term, w, stars) { var p = plPack(stars), c = p + plSig(term, w, p); return c.slice(0, 4) + '-' + c.slice(4, 8) + '-' + c.slice(8); }

/* py 開局時呼叫（mod = 'pylab'）：檢查鎖關，把目前的星數記在這一局 */
function plStart(req, term, lv) {
  var w = plWho(req.who), stars = plRead(term, w, req.pc), i = plLevels(term).indexOf(lv);
  if (i < 0) svFail('no-level');
  if (i > 0 && stars[i - 1] < 2) svFail('locked');
  return { w: w, stars: stars };
}
/* pyg 評分後呼叫：這一關的星數只增不減，回傳新的進度碼 */
function plFinish(run, stars, out) {
  var st = run.pl.stars.slice(), i = plLevels(run.term).indexOf(run.lv);
  if (stars > st[i]) st[i] = stars;
  out.pc = plMake(run.term, run.pl.w, st); out.pstars = st;
}

SV_ACTIONS.pcv = function (req) {
  var term = String(req.t), w = plWho(req.who), stars = plRead(term, w, req.pc);
  return { ok: true, pc: plMake(term, w, stars), stars: stars, total: stars.reduce(function (a, b) { return a + b; }, 0), max: stars.length * 3 };
};
