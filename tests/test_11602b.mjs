// 116-2 下學期：多媒體專題（概念闖關、看示範、AI 前導關、30 秒廣告工作站）、5016B 守護站 2.0、闖關地圖
import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
import { priv } from './harness.mjs';

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
const ML = priv('11602/content/media.js').MEDIA_LEVELS;
for (let i = 0; i < ML.length; i++) {
  const lv = ML[i];
  await page.click(`#games .lvcard[data-i="${i}"]`); await page.click('#go');
  for (const rd of lv.rounds) {
    if (rd.type === 'sort') for (let k = 0; k < rd.items.length; k++) {
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
  }
  await page.waitForSelector('.end-star');
  ok((await page.$eval('.end-star .stars', e => e.getAttribute('aria-label'))).startsWith('3'), 'media', lv.id);
  await page.click('#menu');
}

/* ── 多媒體：看示範、AI 前導關 ─────────────── */
await page.click('.mtab[data-t="demo"]');
await page.waitForSelector('.move');
const nMoves = (await page.$$('.move')).length;
for (let i = 0; i < nMoves; i++) await page.click(`.move[data-i="${i}"]`);
ok((await page.textContent('#demo')).includes('都找到了') && (await page.$eval('#demo a[target=_blank]', a => a.href)).includes('douyin'), '看示範：手法全部找到、附原作連結', nMoves);
await page.screenshot({ path: SHOTS + 'media-demo.png', fullPage: true });
await page.click('#to-ai');
await page.waitForSelector('.aicard');
ok((await page.$$('.aicard')).length === 6 && (await page.textContent('#ai')).includes('準備中'), 'AI 前導關：6 關骨架');
await page.screenshot({ path: SHOTS + 'media-ai.png', fullPage: true });

/* ── 多媒體：30 秒廣告工作站 ─────────────────── */
await page.click('#to-studio');
await page.waitForSelector('#w1-obj');
await page.fill('#w1-obj', '塑膠椅');
await page.click('#w1-sv');
ok((await page.textContent('#w1-msg')).includes('還差'), 'W1 沒填完會提醒');
await page.fill('#w1-who', '同學');
await page.fill('#w1-usual', '很普通，隨便一張');
await page.fill('#w1-find', '輕到可以帶去任何地方');
await page.selectOption('#w1-feel', '好笑');
await page.click('#w1-sv');
await page.waitForSelector('#w2-f0');
ok(await page.evaluate(() => !!(STORE.level('media', 'W1') || {}).done), 'W1 選擇主題完成，自動到下一步');
await page.fill('#w2-f0', '輕巧、方便搬動'); await page.fill('#w2-f1', '可以疊起來收'); await page.fill('#w2-f2', '有很多顏色');
await page.check('input[name=w2-pick][value="0"]');
await page.selectOption('#w2-tone', '幽默');
const prompt = await page.textContent('#w2-prompt');
console.log('  提示詞：', prompt);
ok(prompt.includes('塑膠椅') && prompt.includes('同學') && prompt.includes('輕巧、方便搬動') && prompt.includes('幽默') && prompt.includes('15 字'), 'W2 提示詞自動帶入主角、對象、特色、語氣');
await page.fill('#w2-tool', '老師指定的 AI 工具');
await page.fill('#w2-slogan', '全世界最輕最好坐的椅子');
ok((await page.textContent('#w2-hype')).includes('誇大'), 'W2 標語太誇大會提醒');
await page.fill('#w2-slogan', '想坐哪裡，就坐哪裡。');
await page.fill('#w2-edit', '把「全世界最輕」改掉，太誇張');
await page.fill('#w2-narr', '短');
await page.click('#w2-sv');
ok((await page.textContent('#w2-msg')).includes('旁白'), 'W2 旁白字數不足會擋');
await page.check('input[name=w2-mode][value="sub"]');
await page.fill('#w2-narr', '想坐哪裡，就坐哪裡。');
await page.click('#w2-sv');
await page.waitForSelector('.shotrow');
ok(await page.evaluate(() => !!(STORE.level('media', 'W2') || {}).done), 'W2 文案完成（字幕模式）');
const plan = [[0, '椅腳特寫慢慢拉開', '特寫', 3], [1, '手指滑過椅面紋路', '特寫', 2], [1, '從側面看椅子弧線', '中景', 3],
  [2, '同學單手提起椅子', '中景', 3], [2, '拿到操場樹下坐', '遠景', 4], [2, '疊起四張椅子', '低角度', 3],
  [3, '坐在椅子上看夕陽', '低角度', 4], [4, '椅子全景＋主標語', '遠景', 4]];
await page.click('#sv');
ok((await page.textContent('#msg')).includes('還差'), 'W3 空白鏡頭清單會擋');
for (const [i, [seg, what, angle, sec]] of plan.entries()) {
  await page.selectOption(`select[data-k="seg"][data-i="${i}"]`, String(seg));
  await page.fill(`input[data-k="what"][data-i="${i}"]`, what);
  await page.selectOption(`select[data-k="angle"][data-i="${i}"]`, angle);
  await page.fill(`input[data-k="sec"][data-i="${i}"]`, String(sec)); await page.press(`input[data-k="sec"][data-i="${i}"]`, 'Tab');
}
await page.screenshot({ path: SHOTS + 'media-W3.png', fullPage: true });
await page.click('#sv');
console.log('  W3：', (await page.textContent('#msg')).trim());
await page.waitForSelector('#cl .chk');
ok(await page.evaluate(() => !!(STORE.level('media', 'W3') || {}).done), 'W3 鏡頭清單完成（8 個、五個時段、有遠景特寫、共 26 秒）');
ok((await page.$$eval('#body .chip', cs => cs.filter(c => c.textContent.startsWith('✅')).length)) === 4, 'W4 拍攝前檢查自動帶入 4 項');
const cbs = await page.$$('#cl .chk input');
for (let k = 0; k < cbs.length - 1; k++) await cbs[k].check();   // 「挑戰」不勾也算完成
await page.waitForSelector('#w5-len');
ok(await page.evaluate(() => !!(STORE.level('media', 'W4') || {}).done), 'W4 拍攝檢核完成（挑戰項可不做）');
await page.fill('#w5-len', '30');
await page.fill('#w5-peer', '12 號');
for (let i = 0; i < 3; i++) await page.check(`input[name=pq${i}][value="${i === 2 ? 1 : 0}"]`);
await page.check('input[name=w5-fix][value="2"]');
await page.fill('#w5-what', '結尾標語停久一點，字放大');
await page.check('input[name=w5-ai][value="0"]'); await page.check('input[name=w5-ai][value="4"]');
await page.click('#w5-make');
ok((await page.textContent('#w5-err')).includes('AI 使用聲明'), 'W5「沒有使用 AI」和其他項目互斥');
await page.uncheck('input[name=w5-ai][value="4"]');
await page.click('#w5-make');
await page.waitForSelector('#card-canvas');
await page.screenshot({ path: SHOTS + 'media-W5.png', fullPage: true });
ok(await page.evaluate(() => STORE.moduleDone('media')) === 9, 'media 模組 9 / 9 完成');

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
console.log('errors', errors);
ok(errors.length === 0, '沒有頁面錯誤');
await browser.close();
process.exit(bad ? 1 : 0);
