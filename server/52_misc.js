/* =====================================================================
   其他：5016B 預測檢核、單元一快速檢核、漸進提示
   ===================================================================== */
/* 5016B：{ t, sid, i, v } → 預測對不對＋解說 */
SV_ACTIONS.lk = function (req) {
  var T = SV_ANS.labkit[String(req.t)] || {}, list = T[String(req.sid)] || [], q = list[+req.i];
  if (!q) svFail('bad-item');
  return String(q.answer) === String(req.v) ? { ok: true, why: q.why } : { ok: false };
};
/* 單元一：{ u, q, v } → v 是學生按的按鈕上的字 */
SV_ACTIONS.dq = function (req) {
  var list = SV_ANS.digital[String(req.u)] || [], v = String(req.v || '').replace(/\s+/g, '');
  var b = list.filter(function (x) { return String(x.q) === String(req.q) && x.label.replace(/\s+/g, '') === v; })[0];
  if (!b) svFail('bad-item');
  return b.ok ? { ok: true } : { ok: false, hint: b.hint };
};
/* 漸進提示：按一次給一則（Python、試算表） */
SV_ACTIONS.hint = function (req) {
  var src = req.kind === 'sheet' ? SV_ANS.sheet : SV_ANS.py, T = src[String(req.t)] || {}, L = T[String(req.lv)];
  if (!L || !L.hints) svFail('no-hint');
  var i = +req.i; if (!(i >= 0 && i < L.hints.length)) svFail('no-hint');
  return { hint: L.hints[i], n: L.hints.length };
};
