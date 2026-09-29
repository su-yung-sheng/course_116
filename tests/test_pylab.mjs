// 🐍 Python 教師試用版（pylab/）：和闖關網站分開、10 關全開、評分走伺服器、📮 回報寫進試算表、連不上時可以複製回報
import { launch, BASE, SHOTS, gas } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
import { SOL_11601 as SOL } from '../private/tests/answers.mjs';
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };

const { browser, context } = await launch();
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('dialog', d => d.accept());
await page.goto(BASE + '/pylab/');
await page.waitForSelector('#engine.ok', { timeout: 60000 });

/* 獨立：不用登入、不載入闖關網站的程式 */
ok(!(await page.$('#login, .login')) && await page.evaluate(() => !window.STORE && !window.HUB && !window.UI), '不用登入、沒有載入闖關網站的 STORE／HUB／UI');
const srcs = await page.$$eval('script[src], link[rel=stylesheet]', e => e.map(x => x.getAttribute('src') || x.getAttribute('href')));
ok(srcs.every(s => !s.includes('../shared/') && !s.includes('../1160')), '所有程式、樣式都在 pylab/ 裡（複本）', srcs.join(' '));
ok((await page.$$('.lv')).length === 10 && !(await page.$('.lv.lock')), '10 關全部開放');

/* 評分：參考解答 → 3⭐（和學生版同一個伺服器、同一份測資） */
await page.click('.lv[data-i="2"]');
ok((await page.textContent('#stage')).includes('評分測資'), '每一關顯示測資組數（公開／隱藏）與結構要求');
await page.fill('#code', SOL.P3); await page.dispatchEvent('#code', 'input');
await page.click('#btn-grade'); await page.waitForSelector('#result .res-star', { timeout: 60000 });
ok((await page.$eval('#result .res-star .stars', e => e.getAttribute('aria-label'))).startsWith('3'), 'P3 參考解答 → 3⭐');
ok(await page.evaluate(() => localStorage.getItem('pylab-best-P3')) === '3' && (await page.textContent('#lv-got')).startsWith('3'), '成績只存在這台電腦（pylab- 開頭）');
await page.click('#btn-hint'); await page.waitForSelector('#hints .hint');
ok(true, '💡 提示從伺服器拿：' + (await page.textContent('#hints .hint')).slice(0, 20));

/* 📮 回報：送到伺服器 → 試算表 */
await page.fill('#code', "print('hello')"); await page.dispatchEvent('#code', 'input');
await page.click('#btn-grade'); await page.waitForSelector('#result .res-star', { timeout: 60000 });
await page.click('#to-fb'); await page.waitForSelector('#fb[open]');
await page.check('input[name="fb-kind"][value="strict"]');
await page.fill('#fb-msg', '輸入 0 的時候題目沒說要怎麼處理');
await page.fill('#fb-who', '王老師'); await page.fill('#fb-from', '測試國中');
await page.click('#fb-send'); await page.waitForSelector('#fb-note .ok-c');
const rows = gas.sheet() || [];
const last = rows[rows.length - 1] || [];
ok(rows.length >= 2 && last[2].startsWith('P3') && last[3] === '測資太嚴' && last[5] === '王老師' && last[11].includes("print('hello')") && /\d+\/\d+/.test(last[8]),
  '📮 回報寫進試算表：任務、類別、稱呼、程式碼、評分結果', last.slice(1, 9).join(' | '));
await page.reload(); await page.waitForSelector('.lv'); await page.click('#fb summary');
ok(await page.inputValue('#fb-who') === '王老師', '📮 稱呼會記住（下次不用再打）');
await page.screenshot({ path: SHOTS + 'pylab.png', fullPage: true });

/* 手機寬度不橫向捲動 */
await page.setViewportSize({ width: 390, height: 800 });
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機寬度沒有橫向捲動');
await browser.close();

/* 連不上伺服器：回報改成「複製」 */
{
  const { browser: b2, context: c2 } = await launch({ offline: true });
  const p = await c2.newPage();
  await p.goto(BASE + '/pylab/#P1'); await p.waitForSelector('#fb');
  await p.click('#fb summary'); await p.fill('#fb-msg', '離線時的回報測試');
  await p.click('#fb-send'); await p.waitForSelector('#fb-copy');
  ok(true, '📴 連不上伺服器 → 出現「📋 複製回報內容」，可以用 email／LINE 傳');
  await b2.close();
}
console.log('errors', errors);
if (bad || errors.length) process.exit(1);
