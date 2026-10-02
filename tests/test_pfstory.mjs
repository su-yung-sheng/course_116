// 🌀 系統平臺「異世界轉生篇」故事外框：只換外框，題目、判斷、計星不變
import { launch, login, BASE, SHOTS, priv } from './harness.mjs';
import fs from 'fs'; import vm from 'vm'; fs.mkdirSync(SHOTS, { recursive: true });
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
/* 劇本完整性：8 章都有開場、三階委託、三句過關台詞、提醒、回到現實、技能卡 */
const c = { window: {} }; vm.createContext(c); vm.runInContext(fs.readFileSync(new URL('../11601/platform-story.js', import.meta.url), 'utf8'), c);
const S = c.window.PF_STORY, ids = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'];
ok(ids.every(id => { const x = S.chapters[id]; return x && x.intro.length >= 3 && x.quests.length === 3 && x.win.length === 3 && x.lose && x.real && x.skill && x.skill.name; }) && S.prologue.length && S.epilogue.length,
  '劇本：8 章都有開場、三階委託、過關台詞、提醒、回到現實、技能卡');
const words = { G1: ['電腦系統平臺', '可攜式', '雲端', '嵌入式'], G2: ['輸入單元', '控制單元', '算術與邏輯單元', '記憶單元', '輸出單元'], G3: ['快取記憶體', '主記憶體', '輔助記憶體'], G5: ['作業系統', '系統軟體', '應用軟體'], G7: ['IaaS', 'PaaS', 'SaaS'], G8: ['感測器', '致動器', '嵌入式系統'] };
ok(Object.entries(words).every(([id, w]) => { const t = S.chapters[id].intro.join(''); return w.every(x => t.includes(x)); }), '雙名制：每章開場都附上課本名詞');

const { browser, context } = await launch();
const page = await context.newPage(); const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/11601/hub.html'); await login(page);
await page.evaluate(() => STORE.login('901', '41', '轉生者'));
await page.goto(BASE + '/11601/platform.html'); await page.waitForSelector('.story-head');
ok(await page.$eval('.story-head .story-talk', d => d.open) && (await page.textContent('.story-head')).includes('矽之大陸'), '第一次進來：序章對話自動展開');
ok((await page.$$('.story-card')).length === 8 && (await page.$$('.story-card.on')).length === 0, '🎴 技能卡 0 / 8');
ok((await page.textContent('.lvcard[data-i="0"]')).includes('序章・轉生鑑定所') && (await page.textContent('.lvcard[data-i="0"]')).includes('第 1 關　平臺分類局'), '關卡卡片：章名＋舞臺，原本的關卡名稱保留');
await page.screenshot({ path: SHOTS + 'pf-story-menu.png', fullPage: true });
await page.click('.lvcard[data-i="0"]'); await page.waitForSelector('.stage');
const learn = await page.textContent('#app');
ok(learn.includes('四大國度') && learn.includes('概念小卡') && learn.includes('📜 委託：'), '進入序章：比特的開場對話＋概念小卡＋三階委託');
await page.click('.story-talk summary');
ok(await page.evaluate(() => localStorage.getItem('story-platform-ch')) === '0', '收起對話 → 記住（下一章預設收起）');
/* 三階全過（直接記星，模擬伺服器發星）→ 回到現實＋技能卡 */
await page.evaluate(() => STORE.saveLevel('platform', 'G1', { stars: 3 }));
await page.goto(BASE + '/11601/platform.html'); await page.reload(); await page.waitForSelector('.story-head');
ok((await page.$$('.story-card.on')).length === 1 && (await page.textContent('.story-card.on')).includes('鑑定'), '序章 3⭐ → 技能卡「👁️ 鑑定」亮起');
ok(!(await page.$eval('.story-head .story-talk', d => d.open)), '已經有星星 → 序章對話預設收起');
await page.evaluate(() => ['G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'].forEach(id => STORE.saveLevel('platform', id, { stars: 3 })));
await page.reload(); await page.waitForSelector('.story-head');
ok((await page.textContent('.story-head')).includes('傳說鑑定師') && (await page.textContent('.story-head')).includes('尾聲'), '集滿 8 張 → 稱號「👑 傳說鑑定師」，可以重看尾聲');
await page.screenshot({ path: SHOTS + 'pf-story-all.png', fullPage: true });
/* 其他單元沒有故事外框 */
await page.goto(BASE + '/11602/network.html'); await page.waitForSelector('.lvcard');
ok(!(await page.$('.story-head')) && !(await page.$('.story-ch')), '網路世界（同一個引擎）沒有故事外框');
await page.click('.lvcard[data-i="0"]'); await page.waitForSelector('.stage'); await page.click('.stage[data-s="0"]'); await page.waitForSelector('.hud');
ok(!(await page.$('.rpg-foe')) && !(await page.$('.rpg-enc')) && (await page.textContent('#quit')).includes('離開'), '網路世界的作答畫面沒有 RPG 戰鬥介面');
/* ⚔️ RPG 戰鬥：遭遇、魔物 HP、方向鍵＋Enter 操作、命中特效、「下一張」看得見 */
await page.goto(BASE + '/11601/platform.html#G1'); await page.reload(); await page.waitForSelector('.stage');
await page.click('.stage[data-s="0"]'); await page.waitForSelector('.rpg-enc');
ok((await page.textContent('.rpg-enc')).includes('混亂迷霧 出現了'), '進入戰鬥：遭遇橫幅「混亂迷霧 出現了！」');
const hud = await page.textContent('.hud');
ok(hud.includes('撤退') && hud.includes('魔導書') && /HP\s*8\s*\/\s*8/.test(hud), '戰鬥 HUD：🏃 撤退、📖 魔導書、魔物 HP 8 / 8');
await page.waitForTimeout(1900);
await page.keyboard.press('ArrowRight');
ok(await page.evaluate(() => document.activeElement && document.activeElement.classList.contains('pick')), '⌨️ 方向鍵 → 游標移到選項');
/* 用方向鍵把游標移到正解（正解從 private 讀），Enter 決定 → 命中、魔物 HP -1 */
const rd = priv('11601/content/platform.js').PF_LEVELS.find(l => l.id === 'G1').stages[0].rounds[0];
const q1 = (await page.textContent('.qcard .txt')).trim(), it = rd.items.find(x => x.t === q1);
for (let k = 0; k < 8 && (await page.evaluate(() => document.activeElement.dataset.b)) !== it.a; k++) await page.keyboard.press('ArrowRight');
await page.keyboard.press('Enter');
ok(!!(await page.waitForSelector('.rpg-dmg.hit', { timeout: 1500 }).catch(() => null)) && (await page.textContent('#rpg-live')).includes('受到攻擊'), 'Enter 決定 → 命中特效＋螢幕報讀「受到攻擊」');
await page.waitForSelector('#nx');
ok(/HP\s*7\s*\/\s*8/.test(await page.textContent('#rpg-foe')), '答對 → 魔物 HP 8 → 7');
const nx = await page.$eval('#nx', b => { const s = getComputedStyle(b); return [s.color, s.backgroundColor]; });
ok(nx[0] !== nx[1] && !/255, 25[0-5], 2[34]\d/.test(nx[1]), '「下一張 →」不用滑過去就看得見（深底金字）', nx.join(' on '));
await page.screenshot({ path: SHOTS + 'pf-rpg-battle.png' });
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/11601/platform.html#G3'); await page.reload(); await page.waitForSelector('.stage');
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機寬度沒有橫向捲動');
await page.click('.stage[data-s="0"]'); await page.waitForSelector('#rpg-foe'); await page.waitForTimeout(1900);
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機戰鬥畫面沒有橫向捲動');
await page.screenshot({ path: SHOTS + 'pf-rpg-mobile.png' });
console.log('errors', errors); await browser.close();
if (bad || errors.length) process.exit(1);
