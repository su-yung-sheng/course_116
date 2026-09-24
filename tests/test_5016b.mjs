import { launch, login, BASE, SHOTS, priv } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
const { browser, context } = await launch();
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/11601/hub.html');
await login(page);
await page.goto(BASE + '/11601/5016b.html');
await page.waitForSelector('#sim');
const LA = priv('11601/lab.js').LAB_ANSWERS;
const answers = Object.fromEntries(Object.entries(LA).map(([k, v]) => [k, v.map(x => x.answer)]));
let i = 0;
for (const [sid, ans] of Object.entries(answers)) {
  await page.click(`.tab[data-i="${i}"]`);
  const cards = await page.$$('#checks > .card');
  for (let q = 0; q < ans.length; q++) {
    const c = cards[q];
    if (q === 0 && sid === 'S2') {   // 先答錯一次，再重新預測
      await (await c.$(`.pick[data-k="0"]`)).click();
      await (await c.$('[data-run]')).click();
      await c.waitForSelector('[data-again]');
      console.log('wrong fb:', (await (await c.$('[data-fb]')).textContent()).slice(0, 60));
      await (await c.$('[data-again]')).click();
    }
    await (await c.$(`.pick[data-k="${ans[q]}"]`)).click();
    await (await c.$('[data-run]')).click();
    await c.waitForSelector('[data-fb] .note');
    console.log(sid, q, (await (await c.$('[data-fb]')).textContent()).slice(0, 70).replace(/\s+/g, ' '));
  }
  if (sid === 'S2' || sid === 'S1' || sid === 'S3') await page.screenshot({ path: `${SHOTS}5016-${sid}.png`, fullPage: true });
  i++;
}
await page.click('.tab[data-i="4"]');
await page.fill('#p-name', '專注守護燈');
await page.fill('#p-s1', '上課時有人一直靠近門口會分心');
await page.fill('#p-s2', '超音波偵測到有人靠近就亮黃燈');
await page.fill('#p-s3', '把次數上傳雲端找出最常被打擾的時段');
await page.click('#p-make');
await page.waitForSelector('#card-canvas');
await page.screenshot({ path: SHOTS + '5016-S5.png', fullPage: true });
console.log('tabs:', await page.textContent('#tabs'));
console.log('done:', await page.evaluate(() => STORE.moduleDone('arduino')));
console.log('errors', errors);
await browser.close();
