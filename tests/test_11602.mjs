// 116-2 下學期：網路世界、資料偵探（遊戲）、試算表、密碼特務（🎲 隨機出題）
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

/* ── 遊戲：照正解玩完每一關 ───────────────── */
async function playCard(levels, i) {
  const lv = levels[i];
  await page.click(`.lvcard[data-i="${i}"]`);
  await page.click('#go');
  for (const rd of lv.rounds) {
    if (rd.type === 'sort') {
      const n = rd.pick || rd.items.length;
      for (let k = 0; k < n; k++) {
        const txt = (await page.textContent('.qcard .txt')).trim();
        const it = rd.items.find(x => x.t === txt);
        await page.click(`.bucket[data-b="${it.a}"]`);
        await page.click('#nx');
      }
    } else if (rd.type === 'order') {
      for (const [k, it] of rd.items.entries()) { await page.click(`.order-btn[data-t="${it.t}"]`); await page.waitForFunction(n => document.querySelectorAll('.order-btn.right').length >= n, k + 1); }
      await page.click('#nx');
    } else if (rd.type === 'type') {
      for (let k = 0; k < rd.items.length; k++) {
        const txt = (await page.textContent('.qcard .txt')).trim();
        const it = rd.items.find(x => x.t === txt);
        await page.fill('#ans', it.a[0].toLowerCase());   // 小寫也要算對
        await page.press('#ans', 'Enter');
        await page.click('#nx');
      }
    }
  }
  await page.waitForSelector('.end-star');
  const s = await page.$eval('.end-star .stars', e => e.getAttribute('aria-label'));
  await page.click('#menu');
  return s;
}
for (const [file, varName] of [['network', 'NET_LEVELS'], ['data', 'DATA_LEVELS']]) {
  await page.goto(`${BASE}/11602/${file}.html`);
  await page.waitForSelector('.lvcard');
  const levels = priv('11602/content/' + file + '.js')[varName];   // 正解從 private 讀
  for (let i = 0; i < levels.length; i++) { const s = await playCard(levels, i); ok(s.startsWith('3'), file, levels[i].id, s); }
}
// 凱薩轉盤與位元計算機截圖
await page.goto(`${BASE}/11602/data.html?r=1#D4`); await page.click('#go');
await page.click('[data-d="1"]'); await page.click('[data-d="1"]'); await page.click('[data-d="1"]');
await page.screenshot({ path: SHOTS + 'data-caesar.png', fullPage: true });
await page.fill('#ans', 'XXX'); await page.press('#ans', 'Enter');
await page.waitForFunction(() => document.getElementById('fb').textContent.trim().length > 0);
ok((await page.textContent('#fb')).includes('不對'), 'type 答錯會提示並可重答');

/* ── 試算表 ─────────────────────────────── */
await page.goto(`${BASE}/11602/sheet.html`);
await page.waitForSelector('.lvcard');
const ev = await page.evaluate(() => {
  const g = SHEET.makeGrid([['a', 'b'], [1, 'B'], [5, 'A'], [3, 'B'], [8, ''], [null, 'B']]);
  const t = f => { try { return SHEET.fmt(SHEET.evaluate(f, g)); } catch (e) { return e.code; } };
  return {
    sum: t('=SUM(A2:A5)'), avg: t('=AVERAGE(A2:A6)'), cif: t('=COUNTIF(B2:B6,"B")'), gt: t('=COUNTIF(A2:A5,">=5")'),
    cell: t('=COUNTIF(B2:B6,B2)'), ne: t('=COUNTIF(B2:B6,"<>B")'), fw: t('＝ＳＵＭ（A2:A3）'), name: t('=SUMM(A2:A3)'),
    div: t('=A2/0'), arith: t('=(A2+A3)*2/4'), counta: t('=COUNTA(B2:B6)'), pct: t('=50%*A5')
  };
});
console.log(JSON.stringify(ev));
ok(ev.sum === '17' && ev.avg === '4.25' && ev.cif === '3' && ev.gt === '2' && ev.cell === '3' && ev.ne === '2' && ev.fw === '6' &&
   ev.name === '#NAME?' && ev.div === '#DIV/0!' && ev.arith === '3' && ev.counta === '4' && ev.pct === '4', '公式計算');

const SL = priv('11602/content/sheet.js').SHEET_LEVELS;
async function fill(cell, f) {
  await page.click(`td[data-ref="${cell}"]`);
  await page.fill('#fx', f); await page.press('#fx', 'Enter');
}
for (let i = 0; i < SL.length; i++) {
  const lv = SL[i];
  await page.click(`.lvcard[data-i="${i}"]`);
  if (lv.clean) {
    if (i === 3) {   // 先故意全部判「沒問題」扣一顆心
      await page.click('#check');
      ok((await page.textContent('#fb')).includes('判斷得不對'), 'T4 清理檢查會擋');
    }
    for (const [r, v] of Object.entries(lv.clean.issues)) await page.selectOption(`select.issue[data-r="${r}"]`, v);
    await page.click('#check');
    await page.waitForFunction(() => document.getElementById('fb').textContent.includes('清理完成'), null, { timeout: 8000 }).catch(() => {});
    ok((await page.textContent('#fb')).includes('清理完成'), 'T4 清理通過');
  }
  if (i === 1) {   // 寫死數字要被擋
    await fill(lv.targets[0].cell, '=5');
    await page.click('#check');
    ok((await page.textContent('#fb')).includes('不要直接打答案'), 'T2 寫死數字被擋');
  }
  for (const t of lv.targets) await fill(t.cell, t.ref);
  if (i === 0) await page.screenshot({ path: SHOTS + 'sheet-T1.png', fullPage: true });
  await page.click('#check');
  await page.waitForSelector('.end-star');
  const s = await page.$eval('.end-star .stars', e => e.getAttribute('aria-label'));
  ok(s.startsWith(i === 1 || i === 3 ? '2' : '3'), 'sheet', lv.id, s);
  if (i === 3) await page.screenshot({ path: SHOTS + 'sheet-T4-end.png', fullPage: true });
  await page.click('#menu');
}
// T4 清理畫面截圖
await page.click('.lvcard[data-i="3"]');
await page.screenshot({ path: SHOTS + 'sheet-T4.png', fullPage: true });

/* ── 密碼特務（🎲 隨機出題）──────────────── */
// 解題機器人：只看畫面上的題目算答案（和學生一樣），不讀任何答案資料
const solve = () => page.evaluate(() => {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', C = CARDGAME.cipher;
  const t = document.querySelector('.qcard .txt').textContent.trim(), sub = (document.querySelector('.qcard .small') || {}).textContent || '';
  let m;
  if (/編號是？/.test(sub)) return String(A.indexOf(t));
  if (/哪一個字母/.test(sub)) return A[+t.replace(/\D/g, '')];
  if ((m = t.match(/編號 (\d+) 往(後|前)移 (\d+) 格/))) return String(((+m[1] + (m[2] === '後' ? 1 : -1) * +m[3]) % 26 + 26) % 26);
  if ((m = sub.match(/^加密，金鑰 (\d+)/))) return C.shift(t, +m[1]);
  if ((m = sub.match(/^解密，金鑰 (\d+)/))) return C.shift(t, -m[1]);
  if (/金鑰不知道/.test(sub)) { for (let k = 1; k < 26; k++) { const w = C.shift(t, -k); if (C.WORDS.includes(w)) return w; } }
  if ((m = sub.match(/金鑰依序 (\d+)、(\d+)、(\d+)/))) return C.vig(t, [+m[1], +m[2], +m[3]], 1);
  const ans = [...document.querySelectorAll('#tool [data-i] .black')].map(e => e.textContent.trim()), key = sub.match(/正解是 ([A-D])/)[1];
  if (/答對的有幾人/.test(t)) return String(ans.filter(x => x === key).length);
  if ((m = t.match(/選 ([A-D]) 的有幾人/))) return String(ans.filter(x => x === m[1]).length);
  if (/答對率/.test(t)) return String(Math.round(ans.filter(x => x === key).length / ans.length * 100));
  return '??';
});
await page.goto(`${BASE}/11602/cipher.html`);
await page.waitForSelector('.lvcard');
ok((await page.$$('.lvcard.locked')).length === 5, '密碼特務：一開始只開放第 1 關');
// 隨機：同一關連開兩次，題目應該不一樣
const firstQs = async () => { await page.click('.lvcard[data-i="0"]'); await page.click('#go'); const q = []; for (let r = 0; r < 1; r++) q.push(await page.textContent('.qcard .txt')); return q.join(); };
const q1 = await firstQs(); await page.goto(`${BASE}/11602/cipher.html`); await page.waitForSelector('.lvcard');
const q2 = await firstQs(); await page.goto(`${BASE}/11602/cipher.html`); await page.waitForSelector('.lvcard');
const q3 = await firstQs();
ok(new Set([q1, q2, q3]).size >= 2, '密碼特務：每次開始題目都隨機', q1, q2, q3);
await page.goto(`${BASE}/11602/cipher.html`); await page.waitForSelector('.lvcard');
const CL = priv('11602/content/cipher.js').CIPHER_LEVELS;
for (let i = 0; i < CL.length; i++) {
  await page.click(`.lvcard[data-i="${i}"]`); await page.click('#go');
  let wrongDone = i !== 2;
  for (let guard = 0; guard < 40 && !(await page.$('.end-star')); guard++) {
    await page.waitForSelector('#ans:not([disabled])');
    if (!wrongDone) {          // K3 先故意答錯一次：扣心、不公布答案
      await page.fill('#ans', 'ZZZZZZ'); await page.press('#ans', 'Enter');
      const fb = await page.textContent('#fb'); ok(fb.includes('不對') && !/→/.test(fb), '密碼特務答錯：扣心、不給答案'); wrongDone = true;
    }
    const a = await solve();
    await page.fill('#ans', a); await page.press('#ans', 'Enter');
    await page.waitForSelector('#nx'); await page.click('#nx');
    await page.waitForTimeout(50);
  }
  const s = await page.$eval('.end-star .stars', e => e.getAttribute('aria-label'));
  ok(s.startsWith(i === 2 ? '2' : '3'), 'cipher', CL[i].id, s);
  if (i === 5) await page.screenshot({ path: SHOTS + 'cipher-end.png', fullPage: true });
  await page.click('#menu');
}
await page.click('.lvcard[data-i="5"]'); await page.click('#go');
await page.screenshot({ path: SHOTS + 'cipher-K6.png', fullPage: true });

console.log('errors', errors);
ok(errors.length === 0, '沒有頁面錯誤');
await browser.close();
process.exit(bad ? 1 : 0);
