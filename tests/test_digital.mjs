import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs';
const REVIEW = JSON.parse(fs.readFileSync(new URL('../private/11601/digital/review.json', import.meta.url))); fs.mkdirSync(SHOTS, { recursive: true });
const { browser, context } = await launch();
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/11601/hub.html');
await login(page);
for (const u of ['1', '2']) {
  await page.goto(BASE + `/11601/digital/${u}.html`);
  await page.waitForSelector('#c116-back');
  // 對錯封存在 data-k，測試改從 private/11601/digital/review.json 讀；u=1 先按一個錯的
  const rv = REVIEW[u];
  const btns = await page.$$('button[onclick*="answerReview"]');
  const labels = await page.$$eval('button[onclick*="answerReview"]', bs => bs.map(b => b.textContent.replace(/\s+/g, '')));
  const isOk = i => rv.find(x => x.label.replace(/\s+/g, '') === labels[i]).ok;
  if (u === '1') {
    const w = labels.findIndex((_, i) => !isOk(i));
    await btns[w].click();
    await page.waitForFunction(() => document.getElementById('review-feedback').innerText.startsWith('💡'));
    console.log('wrong hint:', await page.textContent('#review-feedback'));
  }
  for (let i = 0; i < btns.length; i++) if (isOk(i)) await btns[i].click();
  await page.waitForFunction(() => document.getElementById('review-score').innerText.startsWith('3'));
  await page.waitForTimeout(300);
  console.log('unit', u, 'badge visible:', await page.isVisible('#review-badge'), 'rec:', JSON.stringify(await page.evaluate(k => STORE.level('digital', 'u' + k), u)));
}
await page.goto(BASE + '/11601/digital/index.html');
await page.waitForSelector('.c116-stars');
console.log('stars on map:', await page.$$eval('.c116-stars', e => e.map(x => x.getAttribute('aria-label'))));
await page.screenshot({ path: SHOTS + 'digital-index.png' });
await page.goto(BASE + '/11601/hub.html');
await page.waitForTimeout(1200);
await page.screenshot({ path: SHOTS + 'hub.png', fullPage: true });
console.log('errors', errors);
await browser.close();
