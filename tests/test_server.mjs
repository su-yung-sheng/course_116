// 🔐 驗證伺服器（server/，用 tools/gas-mock.mjs 模擬 Apps Script）：不經過網頁，直接用「作弊的方式」打伺服器
//    確認：跳過題目拿不到星、❤️ 扣完就結束、題目資料裡沒有答案、收據簽章對得上、亂送資料不會當掉
import crypto from 'crypto'; import { fileURLToPath } from 'url';
import { createGas } from '../tools/gas-mock.mjs';
import fs from 'fs'; import vm from 'vm';
const priv = rel => { const c = { window: {} }; c.window.window = c.window; vm.createContext(c); vm.runInContext(fs.readFileSync(new URL('../private/' + rel, import.meta.url), 'utf8'), c); return c.window; };   // 不用瀏覽器：不經過 harness
const gas = createGas(), A = gas.ctx.SV_ANS;
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '✔' : '✘', ...m); };
const call = (a, d) => gas.call(a, { t: '11602', ...d });

// 找一關第 1 階全部是 sort 的關卡
const NET = priv('11602/content/network.js').NET_LEVELS;
const lv = NET.find(l => l.stages[0].rounds.every(r => r.type === 'sort'));
const rounds = lv.stages[0].rounds;

/* 1. 開局就結算 → incomplete */
let s = call('start', { lv: lv.id, st: 0, who: { cls: '901', seat: '01', name: '測' } });
ok(s.run && s.hearts === 3 && s.sizes.length === rounds.length, '開局：拿到 run、3 顆 ❤️、每回合題數', s.sizes.join(','));
ok(call('fin', { run: s.run }).err === 'incomplete', '沒作答就結算 → incomplete（拿不到星）');

/* 2. 同一題重複答對不能灌題數：必須答對「不同」的題 */
const r0 = rounds[0], it0 = r0.items[0];
for (let k = 0; k < 5; k++) call('ans', { run: s.run, r: 0, i: 0, v: it0.a });
ok(call('fin', { run: s.run }).err === 'incomplete', '同一張卡答對 5 次 → 還是 incomplete');

/* 3. 亂猜：答錯扣心，3 次就 dead，之後什麼都不能做 */
const wrong = r0.buckets.find(b => b.id !== it0.a).id;
let r = call('ans', { run: s.run, r: 0, i: 0, v: wrong }); ok(r.ok === false && r.hearts === 2 && !('why' in r), '答錯 → 扣一顆 ❤️、不給解說');
call('ans', { run: s.run, r: 0, i: 0, v: wrong }); r = call('ans', { run: s.run, r: 0, i: 0, v: wrong });
ok(r.dead === true && r.hearts === 0, '答錯 3 次 → ❤️ 用完');
ok(call('ans', { run: s.run, r: 0, i: 1, v: 'x' }).err === 'dead' && call('fin', { run: s.run }).err === 'dead', '❤️ 用完之後：不能再答、不能結算');

/* 4. 正常過關 → 星數＝第幾階，收據簽章對得上；同一局不能結算兩次 */
s = call('start', { lv: lv.id, st: 0, who: { cls: '901', seat: '01', name: '測' } });
rounds.forEach((rd, ri) => { const need = s.sizes[ri]; for (let i = 0; i < need; i++) call('ans', { run: s.run, r: ri, i, v: rd.items[i].a }); });
const f = call('fin', { run: s.run });
ok(f.ok && f.stars === 1 && f.rc, '全部答對 → 第 1 階 1 顆星＋收據');
const secret = gas.ctx.PropertiesService.getScriptProperties().getProperty('SECRET');
const body = ['11602', '901', '01', '測', '', lv.id, 1, f.ts].join('|');
const sig = crypto.createHmac('sha256', secret).update(body).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
ok(sig === f.rc, '收據＝HMAC(學期|班|號|姓名|單元|關卡|星|時間)：老師可以驗證');
ok(call('fin', { run: s.run }).err === 'done', '同一局不能結算第二次');

/* 5. 🎲 出題器：網頁拿到的題目裡沒有 check／why／答案 */
const genLv = NET.find(l => l.stages[1].rounds.some(r => r.type === 'gen'));
s = call('start', { lv: genLv.id, st: 1 });
const gi = genLv.stages[1].rounds.findIndex(r => r.type === 'gen');
const g = call('gen', { run: s.run, r: gi });
ok(g.qs.length > 0 && g.qs.every(q => q.q && !('check' in q) && !('why' in q) && !('hint' in q) && !('answer' in q)), '🎲 題目只有畫面資料（沒有 check、why、提示）', Object.keys(g.qs[0]).join(','));
ok(g.qs.every(q => !q.items || q.items.every(x => Object.keys(x).every(k => k === 't' || k === 'icon'))), '🎲 依序點的題目：選項沒有 id（id 會洩漏順序）');
r = call('gq', { run: s.run, q: g.qs[0].q, v: '___' }); ok(r.ok === false && r.hearts === 2, '🎲 答錯 → 伺服器扣心');
ok(call('gq', { run: s.run, q: 'nope', v: '1' }).err === 'bad-q', '🎲 亂編題號 → 拒絕');

/* 6. 🧪 實驗站：藏起來的資訊不在 pub 裡 */
const hidden = { flipbook: 'order', timeline: 'want', pcDoctor: 'keys', dlSim: 'best', packetSim: 'lost', fiveUnits: 'steps', cloudPizza: 'svc', embedded: 'v', trainer: 'truth', blackBox: 'ms' };
for (const [name, key] of Object.entries(hidden)) {
  const m = gas.ctx.SV.labs[name].make(true, false), pubTxt = JSON.stringify(m.pub);
  ok(!(key in m.pub) && !pubTxt.includes('"' + key + '"'), '🧪 ' + name + '：pub 沒有「' + key + '」');
}
const pd = gas.ctx.SV.labs.pcDoctor.make(true, false);
ok(!JSON.stringify(pd.pub).match(/"need"|"sys"|"hang"/), '🧪 pcDoctor：畫面資料不帶「要用／系統程式／當掉」標記');

/* 7. 亂送資料：不當掉，只回錯誤代碼 */
ok(JSON.parse(gas.post('not json')).err === 'bad-json', '亂送 → bad-json');
ok(gas.call('nope').err === 'no-action', '不存在的動作 → no-action');
ok(call('ans', { run: 'fake', r: 0, i: 0, v: 'a' }).err === 'run-expired', '假的 run → run-expired');
ok(gas.call('start', { t: '99999', lv: 'X' }).err === 'no-term', '不存在的學期 → no-term');
ok(call('start', { comp: [{ src: '11602/' + lv.id + '/0/0', pick: 99 }] }).sizes[0] <= rounds[0].items.length, '總複習組局：題數有上限');
ok(call('start', { comp: [{ gen: 'nope' }] }).err === 'bad-comp', '總複習組局：不存在的出題器 → 拒絕');

/* 8. Python：預期輸出、隱藏測資只在伺服器；只送輸出上來 */
const py = gas.call('py', { t: '11601', lv: 'P1' });
ok(py.run && py.tests.length > 0 && py.tests.every(t => !('checks' in t)), '🐍 評分測資：只有輸入，沒有預期輸出');
const pg = gas.call('pyg', { run: py.run, outs: py.tests.map(() => ({ events: [['out', '亂打']] })), feats: {} });
ok(pg.stars === 0 && !pg.rc, '🐍 輸出亂打 → 0 星、沒有收據');
ok(gas.call('pyg', { run: py.run, outs: [] }).err === 'bad-answer', '🐍 少送測資結果 → 拒絕');

/* 8b. 5016B：星星看「預測錯幾次」，由伺服器算 */
{
  const LA = priv('11601/lab.js').LAB_ANSWERS, S1 = LA.S1, c1 = (a, d) => gas.call(a, { t: '11601', ...d });
  const k = c1('lks', { sid: 'S1', who: { cls: '901', seat: '01', name: '測' } });
  ok(k.run && k.n === S1.length, '🔬 5016B 開局：一節一局', k.n + ' 題');
  ok(c1('lkf', { run: k.run }).err === 'incomplete', '🔬 還沒全部說對就結算 → 拒絕');
  const wrongV = String((S1[0].answer + 1) % 3);
  let r = c1('lk', { run: k.run, i: 0, v: wrongV }); ok(r.ok === false && r.wrong === 1 && !('why' in r), '🔬 預測錯 → 記一次、不給解說');
  S1.forEach((q, i) => c1('lk', { run: k.run, i, v: String(q.answer) }));
  const f = c1('lkf', { run: k.run }); ok(f.stars === 2 && f.rc, '🔬 錯 1 次 → 2⭐＋收據');
  ok(c1('lkf', { run: k.run }).err === 'done' && c1('lk', { run: k.run, i: 0, v: '0' }).err === 'done', '🔬 結算過的局不能再用');
  const k2 = c1('lks', { sid: 'S1' }); S1.forEach((q, i) => c1('lk', { run: k2.run, i, v: String(q.answer) }));
  ok(c1('lkf', { run: k2.run }).stars === 3, '🔬 一次都沒錯 → 3⭐');
  ok(c1('lkp', { sid: 'S5', v: { 'p-name': 'x', 'p-s1': '短' } }).ok === false, '🏆 S5 成果卡沒填完整 → 不給星');
  ok(c1('lkp', { sid: 'S5', v: { 'p-name': '守護燈', 'p-in': '超音波', 'p-num': '50', 'p-s1': '上課有人靠近門口', 'p-s2': '偵測到就亮黃燈提醒', 'p-s3': '把次數上傳雲端' } }).stars === 3, '🏆 S5 成果卡填完整 → 3⭐');
  ok(c1('lkp', { sid: 'S1', v: {} }).err === 'bad-item' && c1('lks', { sid: 'S5' }).err === 'bad-item', '🔬 有檢核的節不能走專題的路、專題節沒有檢核局');
}

/* 9. 📋 一鍵貼上版（全部檔案合成一個）也要能跑，而且和分開的檔案一樣 */
{
  const one = createGas(fileURLToPath(new URL('../private/伺服器一鍵貼上/一鍵貼上_course116.gs', import.meta.url))), h = JSON.parse(one.ctx.doGet().getContent());
  ok(h.ok && h.labs === Object.keys(gas.ctx.SV.labs).length && h.gens === Object.keys(gas.ctx.CARDGAME.gens).length, '📋 一鍵貼上版：健康檢查通過', h.labs + ' 個實驗站、' + h.gens + ' 個出題器');
  const s1 = one.call('start', { t: '11602', lv: lv.id, st: 0 });
  rounds.forEach((rd, ri) => { for (let i = 0; i < s1.sizes[ri]; i++) one.call('ans', { t: '11602', run: s1.run, r: ri, i, v: rd.items[i].a }); });
  ok(one.call('fin', { t: '11602', run: s1.run }).stars === 1, '📋 一鍵貼上版：可以過關拿星');
}

console.log(bad ? '✘ ' + bad + ' 項沒過' : '✔ 伺服器驗證全部通過');
process.exit(bad ? 1 : 0);
