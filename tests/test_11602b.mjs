// 116-2 下學期：多媒體專題（概念闖關＋專題工作站）、5016B 守護站 2.0、闖關地圖
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

/* ── 多媒體：專題工作站 ───────────────────── */
await page.click('.mtab[data-t="studio"]');
await page.waitForSelector('.shot');
const descs = ['七年級新生訓練大合照', '運動會大隊接力', '八年級校外教學', '畢業旅行在花蓮', '畢業典禮丟帽子'];
await page.click('#add');
for (let i = 0; i < 5; i++) {
  await page.fill(`textarea[data-k="desc"][data-i="${i}"]`, descs[i]);
  await page.fill(`input[data-k="sec"][data-i="${i}"]`, '20');
}
await page.fill('input[data-k="file"][data-i="3"]', '04_花蓮.mp4');
await page.screenshot({ path: SHOTS + 'media-W1.png', fullPage: true });
await page.click('#sv');
await page.waitForTimeout(1200);
ok(await page.evaluate(() => !!(STORE.level('media', 'W1') || {}).done), 'W1 分鏡腳本完成');
await page.click('.step[data-i="1"]');
const files = await page.textContent('.files');
console.log('  建議檔名：', files.replace(/\n/g, ' | '));
ok(files.includes('04_畢業旅行在花.mp4') && files.startsWith('01_'), 'W2 依腳本產生檔名');
for (const cb of await page.$$('.chk input')) await cb.check();
await page.waitForTimeout(1100);
ok(await page.evaluate(() => !!(STORE.level('media', 'W2') || {}).done), 'W2 素材整理完成');
for (const step of [2, 3]) {
  await page.click(`.step[data-i="${step}"]`);
  const cbs = await page.$$('.chk input');
  for (let k = 0; k < cbs.length - (step === 3 ? 1 : 0); k++) await cbs[k].check();   // W4 的「挑戰」不勾也算完成
  await page.waitForTimeout(1100);
}
ok(await page.evaluate(() => !!(STORE.level('media', 'W3') || {}).done && !!(STORE.level('media', 'W4') || {}).done), 'W3、W4 檢核完成（挑戰項可不做）');
await page.click('.step[data-i="4"]');
await page.selectOption('#e-box', '.wmv');
await page.click('#e-make');
ok((await page.textContent('#e-err')).includes('匯出設定'), 'W5 擋下不建議的匯出設定');
await page.selectOption('#e-box', '.mp4');
for (let i = 0; i < 4; i++) await page.check(`input[name=rub${i}][value="3"]`);
await page.fill('#e-name', '我們的畢經之路');
await page.fill('#e-s1', '記錄國中三年的點點滴滴');
await page.fill('#e-s2', '用子母畫面對照七年級和九年級');
await page.fill('#e-s3', '謝謝一起長大的你們');
await page.click('#e-make');
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
