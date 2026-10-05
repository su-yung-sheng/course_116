import { launch, login, BASE, SHOTS, gas, lastRun } from './harness.mjs';
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
  await page.waitForSelector('#ucards .ucard.on');
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
  await page.waitForFunction(k => !!(STORE.level('digital', 'u' + k) || {}).rc, u, { timeout: 8000 }).catch(() => {});
  const rec = await page.evaluate(k => STORE.level('digital', 'u' + k), u);
  console.log('unit', u, 'badge visible:', await page.isVisible('#review-badge'), 'rec:', JSON.stringify(rec));
  const want = u === '1' ? 2 : 3, okRec = rec && rec.stars === want && !!rec.rc && !!rec.ts;
  console.log((okRec ? '  ✔ ' : '  ✘ ') + `1-${u} 快速檢核：伺服器發 ${want}⭐、附收據`); if (!okRec) process.exitCode = 1;
}
/* ── 🧪 實驗任務 → 🔐 認證挑戰：玩實驗只標 🧭；星星要通過伺服器出的認證題（x1～x4，附收據） ── */
const labRec = u => page.evaluate(k => STORE.level('digital', 'x' + k) || {}, u);
const labStars = async u => (await labRec(u)).stars || 0;
let lfail = 0; const lok = (c, m) => { console.log((c ? '  ✔ ' : '  ✘ ') + m); if (!c) lfail++; };
const cur = () => { const r = lastRun(); return { r, i: r.slots.findIndex((_, k) => !r.got[k]) }; };
async function certify(k, wrongFirst) {
  await page.click(`.lt-go[data-k="${k}"]`); await page.waitForSelector('.xt-box');
  for (let guard = 0; guard < 12; guard++) {
    const { r, i } = cur(); if (i < 0) break;
    const it = gas.ctx.xItem(r, i);
    if (wrongFirst && guard === 0) {
      if (it.kind === 'choice') await page.click(`.xt-opt:not([data-v="${it.ans}"])`);
      else { await page.fill('#xt-in', '99999'); await page.press('#xt-in', 'Enter'); }
      await page.waitForFunction(() => /❌/.test(document.getElementById('xt-fb').textContent));
      continue;
    }
    if (it.kind === 'choice') await page.click(`.xt-opt[data-v="${it.ans}"]`);
    else { await page.fill('#xt-in', it.ans); await page.press('#xt-in', 'Enter'); }
    await page.waitForSelector('#xt-next'); await page.click('#xt-next');
    await page.waitForTimeout(150);
  }
  await page.waitForFunction(() => !document.querySelector('.xt-box'), null, { timeout: 8000 }).catch(() => {});
}
await page.goto(BASE + '/11601/digital/1.html'); await page.waitForSelector('#lab-tasks .labtask');
lok((await page.$$('#lab-tasks .labtask')).length === 3 && (await page.$$('#lab-tasks .lt-go')).length === 3, '1-1 顯示三項實驗任務，各有「🔐 認證」');
await page.evaluate(() => { for (let k = 0; k < 3; k++) { resetBits(); const t = gameLevels[currentLevel]; [16, 8, 4, 2, 1].forEach(v => { const i = bitValues.indexOf(v); if ((t & v) && bitStates[i] === 0) toggleBit(i, v); }); nextLevel(); } });
await page.waitForTimeout(200);
lok(await labStars(1) === 0 && !!(await page.$('.labtask[data-k="bits"] .lt-seen')), '1-1 玩位元燈泡只標 🧭 玩過了，不給星');
await certify('bonanza', true);
const b1 = await labRec(1);
lok(b1.stars === 1 && !!b1.rc && !!(b1.extra.xr || {}).bonanza, '1-1 BONANZA 認證（答錯一次換題）→ 1⭐、附收據', JSON.stringify({ stars: b1.stars }));
await page.goto(BASE + '/11601/digital/2.html'); await page.waitForSelector('#lab-tasks .labtask');
await certify('send', true);
lok(await labStars(2) === 1, '1-2 發報員認證（摩斯電碼；輸入錯一次扣 ❤️ 可以再答）→ 1⭐');
await page.goto(BASE + '/11601/digital/3.html'); await page.waitForSelector('#lab-tasks .labtask');
await page.evaluate(() => { for (const id of ['range-sampling', 'range-quantize']) for (const v of ['min', 'max']) { const el = document.getElementById(id); el.value = el[v]; el.dispatchEvent(new Event('input')); } });
lok(!!(await page.$('.labtask[data-k="digit"] .lt-seen')) && await labStars(3) === 0, '1-3 取樣、量化都拉到最少和最多 → 🧭，還沒有星');
await certify('digit');
lok(await labStars(3) === 1, '1-3 取樣與量化認證 → 1⭐');
await page.goto(BASE + '/11601/digital/4.html'); await page.waitForSelector('#lab-tasks .labtask');
/* 🔍 1-4 認識解析度：觀察任務先判斷、再展開解說 */
{
  const hid = () => page.$eval('#res-explain', e => e.hidden), qs = await page.$$('[data-obs-q]');
  lok(qs.length === 3 && await hid(), '1-4 觀察任務：3 題，解說一開始收起來');
  await (await qs[1].$('.pick:not([data-ok])')).click();
  lok((await (await qs[1].$('[data-obs-fb]')).textContent()).includes('🤔') && await hid(), '1-4 觀察任務：答錯給提示、可以再選，解說還不展開');
  for (const q of qs) await (await q.$('.pick[data-ok]')).click();
  lok(!(await hid()) && (await page.textContent('[data-obs-score]')).trim() === '3 / 3', '1-4 觀察任務：3 題都答對 → 展開解說');
}
await page.evaluate(() => scrollTo(0, 0));
await certify('decode');
lok(await labStars(4) === 1, '1-4 色彩解碼認證 → 1⭐');
/* 第二項認證：伺服器驗過第一項的收據，這一課變 2⭐ */
await certify('compress');
const r4 = await labRec(4);
lok(r4.stars === 2 && !!r4.rc && Object.keys(r4.extra.xr || {}).length === 2, '1-4 第二項認證 → 這一課 2⭐（伺服器驗過前一項的收據）');
/* 舊的「網頁自己發的星星」沒有收據 → 被有收據的成績取代；沒收據的新高分不能沿用舊收據 */
{
  const t = await page.evaluate(() => { STORE.saveLevel('zztest', 't', { stars: 3 }); const a = STORE.saveLevel('zztest', 't', { stars: 1, rc: 'r1', ts: 1 }).record;
    const b = STORE.saveLevel('zztest', 't', { stars: 2 }).record; return [a.stars, a.rc, b.stars, b.rc || null]; });
  lok(t[0] === 1 && t[1] === 'r1' && t[2] === 2 && t[3] === null, '進度：有收據的成績取代沒收據的舊星；沒收據的新高分不沿用舊收據', JSON.stringify(t));
}
await page.screenshot({ path: SHOTS + 'digital-lab.png' });
if (lfail) process.exitCode = 1;

await page.goto(BASE + '/11601/digital/index.html');
await page.waitForSelector('#ucards .ucard');
const prog = await page.$$eval('#ucards .ucard .pg', e => e.map(x => x.textContent.replace(/\s+/g, '')));
console.log('unit cards:', prog);
if (!(prog[0].includes('3/6') && prog[1].includes('4/6') && prog[2].includes('1/6') && prog[3].includes('2/6'))) { console.log('✘ 課程小卡進度不對'); process.exitCode = 1; }
console.log('topbar back:', await page.getAttribute('#topbar .back', 'href'), 'unit color:', await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--unit').trim()));
await page.screenshot({ path: SHOTS + 'digital-index.png' });
await page.goto(BASE + '/11601/hub.html');
await page.waitForTimeout(1200);
{ // 闖關地圖：稱號看「平均完成度」＝各單元完成 % 的平均（5016B 不算）
  const want = await page.evaluate(() => { const M = CONFIG.MODULES.filter(m => m.maxStars); const st = m => m.parts ? m.parts.reduce((a, p) => a + STORE.partStars(p), 0) : STORE.moduleStars(m.id); return Math.floor(M.reduce((a, m) => a + st(m) / m.maxStars, 0) / M.length * 100); });
  const shown = await page.textContent('#avg-pct');
  lok(shown === want + '%' && want > 0, '闖關地圖顯示平均完成度 ' + shown);
  if (lfail) process.exitCode = 1;
}
await page.screenshot({ path: SHOTS + 'hub.png', fullPage: true });
console.log('errors', errors);
await browser.close();
