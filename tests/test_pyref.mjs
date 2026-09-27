// 📚 Python 語法小抄：篩選、搜尋、#P5 只看那一關、🧪 試試看（真的用 Pyodide 跑，含輸入）、Python 闖關頁的連結、手機寬度
import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
const { browser, context } = await launch();
const page = await context.newPage();
const errors = []; let bad = 0;
page.on('pageerror', e => errors.push(e.message));
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
const cards = () => page.$$eval('.rf-card', cs => cs.map(c => c.id));

await page.goto(BASE + '/11601/hub.html'); await login(page);
await page.goto(BASE + '/11601/pyref.html'); await page.waitForSelector('.rf-card');
const all = await cards();
ok(all.length >= 20, '語法卡片', all.length, '種');
ok(await page.$$eval('#quick-t tr', r => r.length) > 15 && await page.$$eval('#err-list .card', c => c.length) >= 12, '速查表、常見錯誤都有');
ok(await page.$eval('.rf-card .rf-out', e => e.textContent.trim().length > 0), '每個範例都有執行結果');
await page.screenshot({ path: SHOTS + 'pyref.png' });

await page.fill('#q', '餘數'); await page.waitForTimeout(300);
ok((await cards()).includes('math'), '搜尋「餘數」→ 算術運算子', (await cards()).join(','));
await page.fill('#q', 'zzz不存在'); await page.waitForTimeout(300);
ok(!!(await page.$('.rf-empty')), '搜尋不到有提示');
await page.fill('#q', ''); await page.waitForTimeout(300);

await page.goto(BASE + '/11601/pyref.html#P6'); await page.waitForSelector('.rf-card');
const p6 = await cards();
ok(p6.includes('elif') && !p6.includes('for') && await page.$eval('[data-lv="P6"]', b => b.classList.contains('on')), '#P6 → 只看第 6 關用到的', p6.join(','));
await page.click('[data-lv="P6"]'); ok((await cards()).length === all.length, '再按一次 → 取消篩選');
await page.goto(BASE + '/11601/pyref.html#while'); await page.waitForTimeout(900);
ok(await page.$eval('#while', e => { const r = e.getBoundingClientRect(); return r.top < 400 && r.bottom > 0; }), '#while → 捲到 while 那一張');

/* 🧪 試試看：打開範例 → 載入 Python → 執行 → 需要輸入時在結果區打字 */
await page.click('#convert [data-try="' + await page.$eval('#convert', e => e.dataset.k) + ':0"]');
await page.waitForSelector('#lab:not(.hidden)');
await page.waitForSelector('#lab-run:not([disabled])', { timeout: 90000 });
await page.click('#lab-run'); await page.waitForSelector('#lab-in');
await page.fill('#lab-in', '7'); await page.press('#lab-in', 'Enter'); await page.waitForSelector('#lab-in');
await page.fill('#lab-in', '5'); await page.press('#lab-in', 'Enter');
await page.waitForFunction(() => /12\s*$/.test(document.getElementById('lab-out').textContent));
ok((await page.textContent('#lab-out')).includes('75'), '🧪 試試看：真的執行，輸入 7、5 → 75 和 12');
await page.fill('#lab-code', "age = 15\nprint('今年' + age + '歲')"); await page.click('#lab-run');
await page.waitForSelector('#lab-err .note');
ok((await page.textContent('#lab-err')).includes('文字和數字'), '🧪 改壞了 → 顯示中文錯誤說明');
await page.fill('#lab-code', "print（'hi'）"); await page.waitForTimeout(100);
ok((await page.textContent('#lab-fw')).includes('全形'), '🧪 全形符號即時提醒');
await page.screenshot({ path: SHOTS + 'pyref-lab.png' });

/* Python 闖關頁：頁首和每一關都有連結 */
await page.goto(BASE + '/11601/python.html'); await page.waitForSelector('#ref-link');
await page.click('.lv[data-i="0"]').catch(() => {}); await page.waitForSelector('#btn-ref');
ok((await page.getAttribute('#btn-ref', 'href')) === 'pyref.html#P1' && (await page.getAttribute('#btn-ref', 'target')) === '_blank', '闖關頁：「📚 這關用到的語法」→ pyref.html#P1（新分頁）');

/* 手機 */
const m = await context.newPage(); await m.setViewportSize({ width: 375, height: 760 });
await m.goto(BASE + '/11601/pyref.html#for'); await m.waitForSelector('.rf-card'); await m.waitForTimeout(600);
ok(await m.evaluate(() => document.documentElement.scrollWidth) <= 375, '手機沒有橫向捲動');
await m.screenshot({ path: SHOTS + 'pyref-m.png' });
await m.screenshot({ path: SHOTS + 'pyref-m-full.png', fullPage: true });
console.log('errors', errors);
await browser.close();
if (bad || errors.length) process.exit(1);
