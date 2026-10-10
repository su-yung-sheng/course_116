// 116-2 下學期：多媒體專題（概念闖關、看示範、AI 前導關、30 秒廣告工作站）、5016B 守護站 2.0、闖關地圖
import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
import { priv, passCool } from './harness.mjs';
import { solveLab2 } from './labs2_solver.mjs';

const { browser, context } = await launch();
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('dialog', d => d.accept());
let bad = 0;
const ok = (cond, ...msg) => { if (!cond) bad++; console.log(cond ? '✔' : '✘', ...msg); };

await page.goto(BASE + '/11602/hub.html');
await login(page);

/* ── 多媒體：概念闖關 ─────────────────────── */
await page.goto(BASE + '/11602/media.html');
await page.waitForSelector('#games .lvcard');
const MP = priv('11602/content/media.js'), ML = MP.MEDIA_LEVELS, AL = MP.MEDIA_AI_LEVELS;
// 照正解玩完一組關卡（sort／order／type／build）
async function playRound(rd) {
  if (rd.type === 'sort') for (let k = 0; k < (rd.pick || rd.items.length); k++) {
    const txt = (await page.textContent('.qcard .txt')).trim();
    const hit = rd.items.find(x => x.t === txt);
    await page.click(`.bucket[data-b="${hit.a}"]`); await page.click('#nx');
  }
  else if (rd.type === 'order') { for (const [k, it] of rd.items.entries()) { await page.click(`.order-btn[data-t="${it.t}"]`); await page.waitForFunction(n => document.querySelectorAll('.order-btn.right').length >= n, k + 1); } await page.click('#nx'); }
  else if (rd.type === 'type') for (let k = 0; k < rd.items.length; k++) {
    const txt = (await page.textContent('.qcard .txt')).trim();
    const hit = rd.items.find(x => x.t === txt);
    await page.fill('#ans', hit.a[0]); await page.press('#ans', 'Enter'); await page.click('#nx');
  }
  else if (rd.type === 'build') for (let k = 0; k < Math.min(rd.pick || rd.customers.length, rd.customers.length); k++) {
    await page.waitForSelector('#submit:not([disabled])');
    const app = await page.textContent('body'), cu = rd.customers.find(c => app.includes(c.who));   // 客人出場順序是隨機的
    for (const r of cu.rules) await page.click(`.opt[data-s="${r.pick}"][data-o="${r.is}"]`);
    for (const sl of rd.slots) if (!cu.rules.some(r => r.pick === sl.id)) await page.click(`.opt[data-s="${sl.id}"]`);
    await page.click('#submit'); await page.click('#nx');
  }
  else if (rd.type === 'lab') for (let q = 0; q < (rd.n || 1); q++) {   // 🧪 實驗站：照規則做對
    await solveLab2(page);
    await page.waitForSelector('#nx', { timeout: 8000 }).catch(async () => { throw new Error('🧪 ' + rd.lab + ' 沒過：' + (await page.textContent('#fb'))); });
    await page.click('#nx');
  }
}
// ⭐ 三星三階：基礎（題庫）→ 操作（🧪 實驗站）→ 挑戰（🧪 較難版）
async function playAll(root, levels, tag) {
  for (let i = 0; i < levels.length; i++) {
    const lv = levels[i];
    await page.click(`${root} .lvcard[data-i="${i}"]`); await page.click('.stage[data-s="0"]');
    for (let s = 0; s < 3; s++) {
      if (s > 0) await page.click('#up');
      for (const rd of lv.stages[s].rounds) await playRound(rd);
      await page.waitForSelector('.end-star');
    }
    ok((await page.$eval('.end-star .stars', e => e.getAttribute('aria-label'))).startsWith('3'), tag, lv.id);
    await page.click('#menu');
  }
}
ok(ML.concat(AL).every(l => l.stages && l.stages.length === 3 && l.stages[1].rounds.every(r => r.type === 'lab') && l.stages[2].rounds.every(r => r.hard)), '概念闖關＋AI 前導關十關都是三星三階：操作＝實驗站、挑戰＝較難版');
await playAll('#games', ML, 'media');

/* ── 多媒體：看示範、AI 前導關 ─────────────── */
await page.click('.mtab[data-t="demo"]');
await page.waitForSelector('.move');
const nMoves = (await page.$$('.move')).length;
for (let i = 0; i < nMoves; i++) await page.click(`.move[data-i="${i}"]`);
ok((await page.textContent('#demo')).includes('都找到了') && (await page.$eval('#demo a[target=_blank]', a => a.href)).includes('douyin'), '看示範：手法全部找到、附原作連結', nMoves);
ok((await page.$eval('#demo-play', a => a.href)).includes('drive.google.com') && (await page.textContent('#demo')).includes('第 46 條'), '看示範：學校雲端硬碟觀看按鈕＋著作權說明');
await page.screenshot({ path: SHOTS + 'media-demo.png', fullPage: true });
await page.click('#tab-pager .next');

await page.waitForSelector('#ai-games .lvcard');
ok((await page.$$('#ai-games .lvcard')).length === 6 && (await page.textContent('#ai')).includes('Day of AI') && (await page.$$('#ai .rule')).length === 5, 'AI 前導關：6 關＋五守則＋教材出處');
// 先答錯一題：A1 第一回合把「計算機」丟進「有用 AI」
await page.click('#ai-games .lvcard[data-i="0"]'); await page.click('.stage[data-s="0"]');
{ const txt = (await page.textContent('.qcard .txt')).trim(); const hit = AL[0].stages[0].rounds[0].items.find(x => x.t === txt);
  await page.click(`.bucket[data-b="${hit.a === 'ai' ? 'rule' : 'ai'}"]`); await page.waitForSelector('#fb .note');
  ok(!(await page.textContent('#fb')).includes(hit.why), 'AI 關卡答錯不公布正解'); }
await page.click('#quit').catch(() => {}); await page.goto(BASE + '/11602/media.html#ai'); await page.waitForSelector('#ai-games .lvcard');
await playAll('#ai-games', AL, 'AI 素養');
await page.screenshot({ path: SHOTS + 'media-ai.png', fullPage: true });
ok(await page.evaluate(() => ['A1','A2','A3','A4','A5','A6'].every(id => (STORE.level('media', id) || {}).stars === 3)), 'AI 素養六關都記錄 3 星');
await page.click('.mtab[data-t="games"]'); await page.waitForSelector('#games .lvcard');
ok((await page.$$('#games .lvcard')).length === 4 && !(await page.$('#ai-games .lvcard')), '切回概念闖關：只掛一組遊戲');
await page.click('.mtab[data-t="ai"]'); await page.waitForSelector('#ai-games .lvcard');
await page.screenshot({ path: SHOTS + 'media-ai.png', fullPage: true });

/* ── 多媒體：30 秒廣告工作站（W0 我的廣告助教 → 決定主題 → 三句文案 → 拍攝重點 → 配樂 → 剪輯與評審） ── */
await page.click('#tab-pager .next');
await page.waitForSelector('#w0-name');
ok((await page.$$('.wsteps .step')).length === 6 && (await page.textContent('.wsteps .step[data-i="0"] .no')) === '0' && (await page.textContent('.wsteps .step[data-i="1"] .no')) === '1', '工作站 W0～W5：第一次打開停在 0. 我的廣告助教');
ok((await page.textContent('#panel .chip')).includes('A6'), 'W0 建議時間：接在 A6 之後');
await page.fill('#w0-r0', '先自己想一個再問 AI'); await page.fill('#w0-r1', '不把同學的臉給 AI'); await page.fill('#w0-r2', '用了 AI 要寫出來');
await page.fill('#w0-name', '小剪'); await page.selectOption('#w0-where', { index: 1 });
const ins0 = await page.textContent('#w0-ins');
ok(ins0.includes('你是「小剪」') && ins0.includes('2. 不把同學的臉給 AI') && ins0.includes('評審卡（W5）') && ins0.includes('結論：通過') && ins0.includes('不替我做作業'), 'W0 指令：名字、我的 3 條規則、固定守則、每種卡片（含評審卡格式）');
ok((await page.textContent('#w0-how')).includes('新對話') && (await page.textContent('#w0-t0')).startsWith('【考試卡・給小剪】'), 'W0：選「同一個對話」說明跟著換；考題卡寫給小剪');
await page.fill('#w0-hi', '我是小剪，我會幫你守住三條規則：先自己想、不給臉、要標示。');
await page.fill('#w0-a0', '我給你三個方向：1. 問句開場 2. 反差 3. 聲音。你挑一個自己寫。');
await page.fill('#w0-a1', '好的林小安，星光國中九年三班的你可以這樣拍：…');
await page.check('input[name=w0-j0][value="0"]'); await page.check('input[name=w0-j1][value="1"]');
await page.waitForSelector('#w0-add');
await page.click('#w0-sv');
ok((await page.textContent('#w0-msg')).includes('改版') && !(await page.evaluate(() => (STORE.level('media', 'W0') || {}).done)), 'W0 個資題不合格 → 不算完成，要改版');
await page.click('#w0-ver');
ok((await page.textContent('#w0-msg')).includes('補充規則'), 'W0 改版要先寫補充規則');
await page.fill('#w0-add', '我給個資時，先叫我刪掉，不可以重複');
await page.click('#w0-ver'); await page.waitForSelector('#w0-name');
ok((await page.textContent('#w0-ins')).includes('（第 2 版）') && (await page.textContent('#w0-ins')).includes('不可以重複') && !(await page.inputValue('#w0-a1')) && (await page.textContent('#body')).includes('改版紀錄（1）'), 'W0 改版 → 第 2 版指令加上補充規則、考試重來、留下改版紀錄');
await page.fill('#w0-a0', '我給你三個方向：1. 問句開場 2. 反差 3. 聲音。你挑一個自己寫。');
await page.fill('#w0-a1', '先等一下！姓名、學校、電話是個資，請刪掉；同學的臉也不要上傳。');
await page.check('input[name=w0-j0][value="0"]'); await page.check('input[name=w0-j1][value="0"]');
await page.click('#w0-sv');
const w0 = await page.evaluate(() => STORE.level('media', 'W0'));
ok(w0.done && w0.extra.v === 2 && w0.extra.hist.length === 1 && w0.extra.hist[0].j[1] === 1 && w0.extra.name === '小剪', 'W0 完成：第 2 版通過，紀錄版本與改版歷程');
await page.waitForSelector('#w1-obj');
ok((await page.textContent('#w1-idea')).startsWith('【點子卡・給小剪】') && (await page.textContent('#panel')).includes('送給「小剪」的卡片'), 'W1 之後的提示詞＝送給同一位助教的卡片');
await page.fill('#w1-obj', '塑膠椅');
await page.click('#w1-sv');
ok((await page.textContent('#w1-msg')).includes('還差'), 'W1 沒填完會提醒');
// 主角照片（產生一張小 PNG 當測試照片）
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVR42mP8z8DwnwEIGBkZGRlQAQA7mgQDF1HvxQAAAABJRU5ErkJggg==', 'base64');
await page.setInputFiles('#w1-photo', { name: 'chair.png', mimeType: 'image/png', buffer: png });
await page.waitForSelector('#w1-prev img');
ok((await page.textContent('#w1-prompt')).includes('塑膠椅') && (await page.textContent('#w1-prompt')).includes('拍得出來'), 'W1 看照片找特色的提示詞');
await page.fill('#w1-f0', '輕巧、單手就能提'); await page.fill('#w1-f1', '可以疊起來收'); await page.fill('#w1-f2', '有很多顏色');
await page.check('input[name=w1-core][value="0"]');
await page.fill('#w1-usual', '很普通');
await page.fill('#w1-who', '同學');
await page.selectOption('#w1-feel', '好笑');
await page.click('#w1-sv');
await page.waitForSelector('#w2-open');
ok(await page.evaluate(() => { const r = STORE.level('media', 'W1') || {}; return r.done && (r.extra.photo || '').startsWith('data:image'); }), 'W1 決定主題完成（含照片縮圖）');
await page.selectOption('#w2-tone', '幽默');
const pa = await page.textContent('#w2-pa');
console.log('  提示詞 A：', pa);
ok((await page.textContent('#studio')).includes('好好用 AI') && (await page.$$('#studio .rule')).length === 5, '工作站顯示好好用 AI 五守則');
ok(pa.includes('塑膠椅') && pa.includes('同學') && pa.includes('核心特色：輕巧、單手就能提') && pa.includes('幽默') && pa.includes('開場句') && pa.includes('收尾標語'), 'W2 提示詞 A 帶入主題與特色、要求三種句子');
await page.fill('#w2-mine', '椅子也想去旅行');
ok((await page.textContent('#w2-pa')).includes('我自己想到的是「椅子也想去旅行」'), 'W2 先自己想的一句會放進提示詞');
await page.fill('#w2-tool', '老師指定的 AI 工具');
await page.fill('#w2-open', '你以為它只是一張椅子？');
await page.fill('#w2-feat', '全世界最輕的椅子');
ok((await page.textContent('#w2-hype')).includes('誇大'), 'W2 誇大用詞提醒');
await page.fill('#w2-feat', '單手一提，想去哪就去哪');
await page.fill('#w2-end', '想坐哪裡，就坐哪裡，隨時隨地都可以');
await page.fill('#w2-edit', '把「全世界最輕」改掉，太誇張');
await page.click('#w2-sv');
ok((await page.textContent('#w2-msg')).includes('收尾標語（1～12 字）'), 'W2 收尾標語超過 12 字會擋');
await page.fill('#w2-end', '想坐哪裡，就坐哪裡');
ok((await page.textContent('#w2-pb')).includes('想坐哪裡，就坐哪裡') && (await page.textContent('#w2-pb')).includes('檢查'), 'W2 提示詞 B 帶入三句、請 AI 檢查');
await page.click('#w2-sv');
await page.waitForSelector('.shotrow');
ok(await page.evaluate(() => !!(STORE.level('media', 'W2') || {}).done), 'W2 三句文案完成');
ok((await page.textContent('#print-area')).includes('「想坐哪裡，就坐哪裡」'), 'W3 時段表顯示對應的句子');
// [時段, 內容, 特色(0 核心/1/2/3 氣氛), 角度, 秒]
const plan = [[0, '椅腳特寫慢慢拉開', 3, '特寫', 3], [1, '手指滑過椅面紋路', 2, '特寫', 2], [1, '從側面看椅子弧線', 2, '中景', 3],
  [2, '同學單手提起椅子', 0, '中景', 3], [2, '拿到操場樹下坐', 0, '遠景', 4], [2, '疊起四張椅子', 1, '低角度', 3],
  [3, '坐在椅子上看夕陽', 3, '低角度', 4], [4, '椅子全景＋收尾標語', 3, '遠景', 4]];
await page.click('#sv');
ok((await page.textContent('#msg')).includes('還差'), 'W3 空白鏡頭清單會擋');
for (const [i, [seg, what, feat, angle, sec]] of plan.entries()) {
  await page.selectOption(`select[data-k="seg"][data-i="${i}"]`, String(seg));
  await page.fill(`input[data-k="what"][data-i="${i}"]`, what);
  await page.selectOption(`select[data-k="feat"][data-i="${i}"]`, String(feat === 0 ? 3 : feat));   // 先故意不拍核心特色
  await page.selectOption(`select[data-k="angle"][data-i="${i}"]`, angle);
  await page.fill(`input[data-k="sec"][data-i="${i}"]`, String(sec)); await page.press(`input[data-k="sec"][data-i="${i}"]`, 'Tab');
}
await page.click('#sv');
ok((await page.textContent('#msg')).includes('核心特色至少拍 2 個鏡頭'), 'W3 核心特色沒拍到會擋');
for (const [i, p] of plan.entries()) if (p[2] === 0) await page.selectOption(`select[data-k="feat"][data-i="${i}"]`, '0');
await page.screenshot({ path: SHOTS + 'media-W3.png', fullPage: true });
await page.click('#body details:has(#w3-ait) summary');   // 打開「AI 建議紀錄」
await page.fill('#w3-ait', '1. 低角度拍椅腳 2. 手提起椅子的特寫');
await page.click('#sv');
ok((await page.textContent('#msg')).includes('AI 建議紀錄'), 'W3 貼了 AI 建議就要寫採用／修改了什麼');
ok((await page.textContent('#w3-p')).includes('核心特色：輕巧、單手就能提') && (await page.textContent('#w3-p')).includes('五個時段'), 'W3 鏡頭建議提示詞帶入特色與三句');
await page.fill('#w3-aiu', '採用低角度拍椅腳，特寫改在教室拍');
await page.click('#sv');
console.log('  W3：', (await page.textContent('#msg')).trim());
const sc = await page.$$('#shoot .chk input');
for (let k = 0; k < sc.length - 1; k++) await sc[k].check();   // 「挑戰」不勾也算完成
await page.waitForSelector('#w4-name');
ok(await page.evaluate(() => !!(STORE.level('media', 'W3') || {}).done), 'W3 拍攝重點完成（鏡頭清單＋實拍檢核）');
ok((await page.textContent('#body')).includes('好笑'), 'W4 依感受推薦音樂風格');
await page.fill('#w4-name', 'Happy Walk');
await page.selectOption('#w4-src', '創用 CC 音樂網站');
await page.selectOption('#w4-lic', '不確定');
await page.fill('#w4-credit', 'Music by 測試作者');
await page.fill('#w4-beat', '25');
for (const cb of await page.$$('input[data-cl="music"]')) await cb.check();
await page.click('#w4-sv');
ok((await page.textContent('#w4-msg')).includes('授權確定'), 'W4 授權不確定會擋');
await page.selectOption('#w4-lic', '創用 CC：要標示作者');
await page.click('#w4-sv');
await page.waitForSelector('#w5-len');
ok(await page.evaluate(() => !!(STORE.level('media', 'W4') || {}).done), 'W4 配樂完成');
await page.fill('#w5-len', '30');
await page.fill('#w5-peer', '12 號');
for (let i = 0; i < 3; i++) await page.check(`input[name=pq${i}][value="${i === 2 ? 1 : 0}"]`);
for (let i = 0; i < 6; i++) await page.check(`input[name=sf${i}][value="0"]`);   // 自評：6 項都 ✓
const rule5 = await page.textContent('#w5-rule'), card5 = await page.textContent('#w5-p');
ok(/R6：/.test(rule5) && rule5.includes('不要幫他重寫') && rule5.includes('結論：通過'), 'W5 評審助教的指令：6 項規準、不能代寫、固定回覆格式');
ok(card5.includes('記得最後那一句標語嗎？有一點') && card5.includes('R1✓'), 'W5 評審卡帶入自評和同儕試看');
ok(card5.startsWith('【評審卡・給小剪】') && !(await page.$eval('#w5-ruled', d => d.open)) && (await page.textContent('#panel')).includes('請「小剪」照同一份規準'), 'W5：評審交給自己的助教，規準指令收成備用');
await page.fill('#w5-rev', 'R1：✓ — 開場有特寫\nR2：✓ — 有兩鏡\nR3：✓ — 時段對\nR4：？ — 看不到影片，請同學自己確認\nR5：✓ — 有對拍\nR6：✗ — 標語只停 1 秒\n結論：再修改');
ok(await page.$eval('input[name=av5][value="2"]', e => e.checked) && await page.$eval('input[name=av3][value="3"]', e => e.checked) && await page.$eval('#w5-end', e => e.selectedIndex) === 2, 'W5 貼上助教回覆 → 自動帶入每一項和結論');
ok((await page.$$('#w5-cmp tr.diff')).length === 2, 'W5 三方比對：助教 ✗、看不出來、同儕「有一點」的項目標成要判斷（2 項）');
await page.check('input[name=w5-fix][value="2"]');
await page.fill('#w5-what', '結尾標語停久一點，字放大');
ok(await page.$eval('input[name=w5-ai][value="1"]', e => e.checked) && await page.$eval('input[name=w5-ai][value="2"]', e => e.checked), 'W5 AI 使用聲明依前面紀錄預先勾好（文案、鏡頭）');
await page.check('input[name=w5-ai][value="6"]');
await page.click('#w5-make');
const err5 = await page.textContent('#w5-err');
ok(err5.includes('AI 使用聲明') && err5.includes('剪輯檢核') && err5.includes('寫理由（還有 2 項）'), 'W5 擋下：剪輯檢核、不一致沒寫理由、請了 AI 評審卻勾「沒有使用 AI」');
await page.uncheck('input[name=w5-ai][value="6"]'); await page.check('input[name=w5-ai][value="4"]');
await page.check('input[name=mj5][value="2"]'); await page.fill('#w5-why5', '真的只停 1 秒，要改');
await page.check('input[name=mj3][value="0"]'); await page.fill('#w5-why3', '我用三腳架拍，畫面很穩');
for (const cb of await page.$$('input[data-cl="edit"]')) await cb.check();
await page.click('#w5-make');
await page.waitForSelector('#card-canvas');
const w5 = await page.evaluate(() => STORE.level('media', 'W5').extra);
ok(w5.by === 0 && w5.aiV[5] === 2 && w5.mine[5] === 2 && w5.mine[3] === 0 && w5.why[3].includes('三腳架') && w5.end === 1, 'W5 紀錄：助教判定、我的判斷和理由、結論都存下來');
await page.screenshot({ path: SHOTS + 'media-W5.png', fullPage: true });
ok(await page.evaluate(() => STORE.moduleDone('media')) === 16, 'media 模組 16 / 16 完成（含 W0）');

/* ── 5016B 守護站 2.0 ─────────────────────── */
await page.goto(BASE + '/11602/5016b.html');
await page.waitForSelector('#sim');
const LA = priv('11602/lab.js').LAB_ANSWERS;
const answers = ['S1', 'S2', 'S3', 'S4'].map(k => LA[k].map(x => x.answer));
for (let i = 0; i < 4; i++) {
  await page.click(`.tab[data-i="${i}"]`);
  const cards = await page.$$('#checks > .card');
  for (let q = 0; q < answers[i].length; q++) {
    await (await cards[q].$(`.pick[data-k="${answers[i][q]}"]`)).click();
    await (await cards[q].$('[data-run]')).click();
    await cards[q].waitForSelector('[data-fb] .note');
    const fb = await (await cards[q].$('[data-fb]')).textContent();
    ok(fb.includes('預測正確'), `5016B S${i + 1}-${q + 1}`, fb.slice(0, 50).replace(/\s+/g, ' '));
  }
  if (i === 1 || i === 2) await page.screenshot({ path: SHOTS + `5016b2-S${i + 1}.png`, fullPage: true });
}
await page.click('.tab[data-i="4"]');
await page.fill('#p-name', '安靜守護燈');
await page.fill('#p-ip', '192.168.1.300');
await page.fill('#p-s1', '上課有人一直靠近門口會分心');
await page.fill('#p-s2', '用 Wi-Fi 上傳並以 https 加密');
await page.fill('#p-s3', '加上統計圖找出最吵的時段');
await page.click('#p-make');
ok((await page.textContent('#p-err')).includes('私有'), 'S5 擋下不合法的 IP');
await page.fill('#p-ip', '172.32.0.5'); await page.click('#p-make');
ok((await page.textContent('#p-err')).includes('私有'), 'S5 擋下 172.32（公有）');
await page.fill('#p-ip', '192.168.1.10'); await page.click('#p-make');
await page.waitForSelector('#card-canvas');
await page.screenshot({ path: SHOTS + '5016b2-S5.png', fullPage: true });
ok(await page.evaluate(() => STORE.moduleDone('arduino')) === 5, '5016B 五節完成');

/* ── 闖關地圖 ─────────────────────────────── */
await page.goto(BASE + '/11602/hub.html');
await page.waitForTimeout(1200);
await page.screenshot({ path: SHOTS + 'hub-11602.png', fullPage: true });
const cards = await page.$$eval('#hub a.card', as => as.map(a => a.getAttribute('href')));
console.log('  hub cards:', cards.join(', '));
for (const href of cards) {
  const r = await page.request.get(BASE + '/11602/' + href);
  ok(r.ok(), 'link', href);
}
// 單元六：闖關地圖只有一張卡，進去後是三張課程小卡；各部分頁面上方也有同一組小卡
ok(cards.includes('unit6.html') && !cards.includes('data.html') && !cards.includes('sheet.html') && !cards.includes('cipher.html'), '闖關地圖：單元六包成一張課程小卡');
await page.goto(BASE + '/11602/unit6.html'); await page.waitForSelector('#ucards .ucard');
const parts = await page.$$eval('#ucards .ucard', as => as.map(a => a.getAttribute('href')));
ok(parts.join() === 'data.html,sheet.html,cipher.html', '單元六首頁：三張課程小卡', parts.join());
await page.screenshot({ path: SHOTS + 'unit6.png', fullPage: true });
await page.click('#ucards .ucard[data-part="sheet"]'); await page.waitForSelector('#ucards .ucard.on');
ok((await page.getAttribute('#ucards .ucard.on', 'data-part')) === 'sheet' && (await page.getAttribute('#topbar .back', 'href')) === 'unit6.html', '試算表頁：小卡標示目前位置、返回單元六');
console.log('errors', errors);
ok(errors.length === 0, '沒有頁面錯誤');
await browser.close();
process.exit(bad ? 1 : 0);
