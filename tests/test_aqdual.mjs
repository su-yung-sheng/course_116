// 🔬 1-3 進階挑戰：雙面板取樣與量化對照（11601/digital/aq-dual.js）
import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
const AXE = fs.readFileSync(new URL('./node_modules/axe-core/axe.min.js', import.meta.url).pathname, 'utf8');
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
const { browser, context } = await launch();
const page = await context.newPage(); const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/11601/hub.html'); await login(page);
await page.goto(BASE + '/11601/digital/3.html'); await page.waitForSelector('#sub-audio-digit');
await page.click('#sub-audio-digit'); await page.waitForSelector('#aq-A canvas');
await page.waitForTimeout(300);
ok(await page.$$eval('.aq-p', p => p.length) === 2 && await page.evaluate(() => AQDUAL.A.cv.clientWidth > 200), '兩個面板都畫出來了（分頁切換後也看得到）');
// 共用同一段聲波、不是單一正弦波
ok(await page.evaluate(() => { const v = []; for (let i = 0; i <= 50; i++) v.push(AQDUAL.sig(i / 50)); return Math.max(...v) <= 0.951 && Math.min(...v) >= -0.951 && new Set(v.map(x => x.toFixed(3))).size > 40; }), '聲波在 ±0.95 之內，而且不規則');

/* 用滑鼠點：找出紅點最接近的刻度，點那一條線 */
async function clickLevel(k, idx) {
  const box = await page.$eval(`#aq-${k} canvas`, c => { const r = c.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width }; });
  const y = await page.evaluate(([k, idx]) => { const P = AQDUAL[k], g = P.geo(); return g.y(P.levels[idx]); }, [k, idx]);
  await page.mouse.move(box.x + box.w / 2, box.y + y); await page.mouse.down(); await page.mouse.up();
}
async function waitStop(k) { await page.waitForFunction(k => { const P = AQDUAL[k]; return !P.anim; }, k); }
async function want(k) { return page.evaluate(k => { const P = AQDUAL[k]; return AQDUAL.nearestIdx(P.levels, AQDUAL.sig(P.i / P.rate)); }, k); }

await page.click('#aq-A .aq-go'); await waitStop('A');
ok((await page.textContent('#aq-A .aq-prog')) === '0 / 11' && (await page.$eval('#aq-A .aq-rate', s => s.disabled)), '面板 A 開始：10 Hz → 11 個點，設定鎖住');
const w0 = await want('A'), wrong = w0 === 0 ? 1 : w0 - 1;
await clickLevel('A', wrong); await page.waitForSelector('#aq-A .aq-toast.on.no');
ok((await page.textContent('#aq-A .aq-toast')).includes(wrong > w0 ? '太高' : '太低') && (await page.textContent('#aq-A .aq-err')) === '1', '點錯 → 只提示太高／太低（先不說答案）、錯誤 +1');
await page.waitForTimeout(100); await clickLevel('A', wrong);
ok((await page.textContent('#aq-A .aq-toast')).includes('應該是'), '同一點錯第二次 → 才告訴答案');
for (let n = 0; n < 11; n++) { await waitStop('A'); await clickLevel('A', await want('A')); }
await page.waitForFunction(() => AQDUAL.A.done);
const listA = await page.$$eval('#aq-A .aq-list div', d => d.map(x => x.textContent));
ok(listA.length === 11 && /^\[1\][01]{2}$/.test(listA[0]), '面板 A 完成：陣列紀錄 11 筆二進位編碼（2 bits）', listA.slice(0, 3).join(' '));

/* 鍵盤：面板 B 用 ↑↓ + Enter，做 5 個點後用「⚡ 自動量化」 */
await page.click('#aq-B .aq-go'); await waitStop('B');
for (let n = 0; n < 5; n++) {
  await waitStop('B');
  const [cur, w] = await page.evaluate(() => [AQDUAL.B.hover, AQDUAL.nearestIdx(AQDUAL.B.levels, AQDUAL.sig(AQDUAL.B.i / AQDUAL.B.rate))]);
  await page.focus('#aq-B canvas');
  const d = w - cur; for (let s = 0; s < Math.abs(d); s++) await page.keyboard.press(d > 0 ? 'ArrowUp' : 'ArrowDown');
  await page.keyboard.press('Enter');
}
await waitStop('B');
ok(await page.evaluate(() => AQDUAL.B.i) === 5 && !(await page.$eval('#aq-B .aq-ff', b => b.classList.contains('aq-hide'))), '⌨️ 鍵盤 ↑↓＋Enter 也能量化；做滿 5 點出現「⚡ 剩下的點自動量化」');
await page.click('#aq-B .aq-ff'); await page.waitForSelector('#aq-res:not(.aq-hide) [data-g]');
ok((await page.$$eval('#aq-B .aq-list div', d => d.length)) === 21, '面板 B 自動完成（20 Hz → 21 點）→ 兩邊都完成，先問「你覺得哪一個比較接近？」');
await page.click('#aq-res [data-g="B"]'); await page.waitForSelector('#aq-res table');
const res = await page.textContent('#aq-res');
const [ea, eb] = await page.evaluate(() => [AQDUAL.A.meanError(), AQDUAL.B.meanError()]);
ok(res.includes('平均誤差') && res.includes('11 × 2 = 22') && res.includes('21 × 3 = 63') && eb < ea, '📏 量一量：平均誤差、資料量（點數 × 位元）；B（20 Hz／3 bits）比 A 接近', ea.toFixed(3) + ' vs ' + eb.toFixed(3));
await page.screenshot({ path: SHOTS + 'aq-dual.png', fullPage: true });
/* 換新聲波 → 兩邊重來 */
await page.click('#aq-new');
ok(await page.evaluate(() => !AQDUAL.A.done && !AQDUAL.B.done) && await page.$eval('#aq-res', r => r.classList.contains('aq-hide')), '🔀 產生新聲波 → 兩邊都重來、結果收起來');
/* ♿ 無障礙 */
await page.addScriptTag({ content: AXE });
const v = await page.evaluate(async () => (await axe.run('#aq-dual', { resultTypes: ['violations'] })).violations.map(x => x.id + ':' + x.nodes.length));
ok(!v.length, '♿ axe 無障礙檢查', v.join(' '));
/* 📱 手機 */
await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(300);
console.log(await page.evaluate(() => [document.documentElement.scrollWidth, innerWidth, AQDUAL.A.cv.clientWidth, [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(e => e.tagName + '#' + e.id + '.' + String(e.className).slice(0, 40) + ' ' + Math.round(e.getBoundingClientRect().right))]));
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1) && await page.evaluate(() => AQDUAL.A.cv.clientWidth > 150), '📱 手機寬度沒有橫向捲動、圖還畫得出來');
console.log('errors', errors); await browser.close();
if (bad || errors.length) process.exit(1);
