// ☁️ 網路世界「科技修仙篇」：只換外框與用語，題目、判斷、計星不變；境界進度、雷劫戰鬥、用語都換成修仙版
import { launch, login, BASE, SHOTS, priv } from './harness.mjs';
import fs from 'fs'; import vm from 'vm'; fs.mkdirSync(SHOTS, { recursive: true });
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
/* 劇本完整性 */
const c = { window: {} }; vm.createContext(c); vm.runInContext(fs.readFileSync(new URL('../11602/network-story.js', import.meta.url), 'utf8'), c);
const S = c.window.NET_STORY, ids = ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'N10'];
ok(ids.every(id => { const x = S.chapters[id]; return x && x.intro.length >= 3 && x.quests.length === 3 && x.win.length === 3 && x.lose && x.real && x.skill && x.skill.name && x.foe && S.realms.includes(x.realm); }) && S.prologue.length && S.epilogue.length,
  '劇本：10 重都有境界、雷劫、開場、三階任務、過關台詞、提醒、出關、功法');
const words = { N1: ['區域網路', '廣域網路', '數據機', '路由器', '交換器'], N2: ['光纖', '雙絞線', '同軸電纜'], N3: ['封包', 'TCP', 'IP'], N4: ['IPv4', '公有', '私有'], N5: ['IPv6', '128', '::'],
  N6: ['網域名稱', 'DNS', '主機名稱', '機構名稱', '類別名稱', '地區名稱'], N7: ['SMTP', 'POP3', 'https'], N8: ['藍牙', 'Wi‑Fi', '行動網路', '5G'], N9: ['bps', 'Byte', '頻寬'], N10: ['條碼', 'QR code', 'NFC', 'RFID'] };
ok(Object.entries(words).every(([id, w]) => { const t = S.chapters[id].intro.join(''); return w.every(x => t.includes(x)); }), '雙名制：每一重的開場都附上課本名詞');
const code = fs.readFileSync(new URL('../11602/network-story.js', import.meta.url), 'utf8'), NET = priv('11602/content/network.js').NET_LEVELS;
ok(NET.every(l => ids.includes(l.id)) && !/"a"\s*:|why:/.test(code), '劇本裡沒有答案，關卡 id 一一對應');

const { browser, context } = await launch();
const page = await context.newPage(); const errors = [];
page.on('pageerror', e => errors.push(e.message)); page.on('dialog', d => d.accept());
await page.goto(BASE + '/11602/hub.html'); await login(page);
await page.evaluate(() => STORE.login('902', '41', '修仙生'));
await page.goto(BASE + '/11602/network.html'); await page.waitForSelector('.story-head');
const head = await page.textContent('.story-head');
ok(head.includes('科技修仙篇') && head.includes('天網宗') && head.includes('📜 功法 0 / 10'), '選單：科技修仙篇・天網宗、功法 0 / 10');
ok(await page.$eval('.story-realms li.now', e => e.textContent) === '練氣', '境界進度：一開始在「練氣」');
ok((await page.textContent('.lvcard[data-i="0"]')).includes('練氣初期・外門・護山大陣') && (await page.textContent('.lvcard[data-i="0"]')).includes('🧘 修煉中'), '關卡卡片：境界＋舞臺、🧘 修煉中');
await page.screenshot({ path: SHOTS + 'net-xx-menu.png', fullPage: true });
await page.click('.lvcard[data-i="0"]'); await page.waitForSelector('.stage');
ok((await page.textContent('#app')).includes('🏮 宗門任務：'), '概念小卡：三階都是「🏮 宗門任務」');
await page.click('.stage[data-s="0"]'); await page.waitForSelector('.rpg-enc');
ok((await page.textContent('.rpg-enc')).includes('迷陣劫 降臨'), '進入作答：「⚡ 迷陣劫 降臨！」');
const hud = await page.textContent('.hud');
ok(hud.includes('遁走') && hud.includes('功法玉簡') && /HP\s*\d+\s*\/\s*\d+/.test(hud), 'HUD：🌫️ 遁走、📖 功法玉簡、雷劫 HP');
await page.waitForTimeout(1900);
/* 答一題（正解從 private 讀），用方向鍵＋Enter */
const rd = NET.find(l => l.id === 'N1').stages[0].rounds[0];
if (rd.type === 'sort') {
  const q1 = (await page.textContent('.qcard .txt')).trim(), it = rd.items.find(x => x.t === q1);
  await page.keyboard.press('ArrowRight');
  for (let k = 0; k < 10 && (await page.evaluate(() => document.activeElement.dataset.b)) !== it.a; k++) await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Enter');
  ok(!!(await page.waitForSelector('.rpg-dmg.hit', { timeout: 1500 }).catch(() => null)) && (await page.textContent('#rpg-live')).includes('化解'), 'Enter 決定 → ✨ 扛住一道（報讀「被你化解一道」）');
} else ok(false, 'N1 第 1 回合不是分類題，要改測試', rd.type);
await page.waitForSelector('#nx');
const nx = await page.$eval('#nx', b => { const s = getComputedStyle(b); return [s.color, s.backgroundColor]; });
ok(nx[0] !== nx[1], '「下一張 →」看得見（墨底金字）', nx.join(' on '));
await page.screenshot({ path: SHOTS + 'net-xx-battle.png' });
/* 全部修完 → 飛升、道號 */
await page.evaluate(() => ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9', 'N10'].forEach(id => STORE.saveLevel('network', id, { stars: 3 })));
await page.goto(BASE + '/11602/network.html'); await page.reload(); await page.waitForSelector('.story-head');
const h2 = await page.textContent('.story-head');
ok(h2.includes('道號') && h2.includes('天網真人') && h2.includes('📕 飛升（重看）') && await page.$eval('.story-realms li.now', e => e.textContent) === '飛升', '十部功法齊 → 境界「飛升」、道號「☁️ 天網真人」、可以重看飛升');
await page.screenshot({ path: SHOTS + 'net-xx-all.png', fullPage: true });
/* 系統平臺的異世界篇用語不受影響 */
await page.goto(BASE + '/11601/platform.html'); await page.waitForSelector('.story-head');
ok((await page.textContent('.story-head')).includes('異世界轉生篇') && (await page.textContent('.story-head')).includes('🎴 技能卡') && !(await page.$('.story-realms')), '系統平臺仍是異世界轉生篇（技能卡、沒有境界條）');
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/11602/network.html#N4'); await page.reload(); await page.waitForSelector('.stage');
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機：概念小卡沒有橫向捲動');
await page.click('.stage[data-s="0"]'); await page.waitForSelector('#rpg-foe'); await page.waitForTimeout(1900);
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機：渡劫畫面沒有橫向捲動');
await page.screenshot({ path: SHOTS + 'net-xx-mobile.png' });
await page.goto(BASE + '/11602/network.html'); await page.waitForSelector('.story-head');
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機：選單沒有橫向捲動');
await page.screenshot({ path: SHOTS + 'net-xx-menu-m.png', fullPage: true });
console.log('errors', errors); await browser.close();
if (bad || errors.length) process.exit(1);
