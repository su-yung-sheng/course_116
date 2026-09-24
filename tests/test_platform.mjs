import { launch, login, BASE, SHOTS, priv } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
const mobile = process.argv[2] === 'mobile';
const { browser, context } = await launch({ viewport: mobile ? { width: 390, height: 844 } : { width: 1280, height: 900 } });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/11601/hub.html');
await login(page);
await page.goto(BASE + '/11601/platform.html?r=2');
await page.waitForSelector('.lvcard');
if (!mobile) await page.screenshot({ path: SHOTS + 'pf-menu.png', fullPage: true });
const levels = priv('11601/content/platform.js').PF_LEVELS;   // 正解從 private 讀

async function playLevel(i, mistakes = 0) {
  const lv = levels[i];
  await page.click(`.lvcard[data-i="${i}"]`);
  await page.click('#go');
  let wrongLeft = mistakes;
  for (const rd of lv.rounds) {
    if (rd.type === 'sort') {
      const n = rd.pick || rd.items.length;
      for (let k = 0; k < n; k++) {
        const txt = (await page.textContent('.qcard .txt')).trim();
        const it = rd.items.find(x => x.t === txt);
        if (wrongLeft > 0) {        // 故意答錯：不會顯示正解，扣一顆心、同一張卡再答
          wrongLeft--;
          await page.click(`.bucket[data-b="${rd.buckets.find(x => x.id !== it.a).id}"]`);
          await page.waitForSelector('#fb .note');
          if (await page.$('#nx')) { await page.click('#nx'); return 'over'; }
        }
        await page.click(`.bucket[data-b="${it.a}"]`);
        await page.click('#nx');
      }
    } else if (rd.type === 'order') {
      for (const [k, it] of rd.items.entries()) { await page.click(`.order-btn[data-t="${it.t}"]`); await page.waitForFunction(n => document.querySelectorAll('.order-btn.right').length >= n, k + 1); }
      await page.click('#nx');
    } else if (rd.type === 'build') {
      for (const cu of rd.customers) {
        // 找一組合格的：暴力搜尋
        const pick = await page.evaluate(([rd, cu]) => {
          const combos = [[]];
          for (const s of rd.slots) { const nxt = []; for (const c of combos) for (const o of s.options) nxt.push([...c, [s.id, o]]); combos.length = 0; combos.push(...nxt); }
          for (const c of combos) {
            const chosen = Object.fromEntries(c); const props = { price: (rd.base ? rd.base.price : 0) };
            for (const [, o] of c) { if (o.price) props.price += o.price; for (const k in o) if (!['id','label','price'].includes(k)) props[k] = o[k]; }
            const bad = cu.rules.some(r => r.sum ? props[r.sum] > r.max : r.pick ? chosen[r.pick].id !== r.is : ((r.min != null && !(props[r.prop] >= r.min)) || (r.eq != null && props[r.prop] !== r.eq)));
            if (!bad) return c.map(([s, o]) => [s, o.id]);
          }
          return null;
        }, [rd, cu]);
        if (!pick) throw new Error('no valid build for ' + cu.who);
        for (const [s, o] of pick) await page.click(`.opt[data-s="${s}"][data-o="${o}"]`);
        await page.click('#submit');
        await page.click('#nx');
      }
    }
  }
  await page.waitForSelector('.end-star');
  const s = await page.$$eval('.end-star .stars', e => e[0].getAttribute('aria-label'));
  if (i === 3 && !mobile) await page.screenshot({ path: SHOTS + 'pf-end.png' });
  await page.click('#menu');
  return s;
}
for (let i = 0; i < levels.length; i++) console.log(levels[i].id, await playLevel(i, i === 1 ? 1 : 0));
// 遊戲畫面截圖
await page.click('.lvcard[data-i="3"]');
if (!mobile) await page.screenshot({ path: SHOTS + 'pf-learn.png', fullPage: true });
await page.click('#go');
await page.click('.opt[data-s="cpu"][data-o="c16"]'); await page.click('.opt[data-s="ram"][data-o="r32"]'); await page.click('.opt[data-s="disk"][data-o="s2"]');
await page.click('#submit');
await page.screenshot({ path: `${SHOTS}pf-build${mobile ? '-m' : ''}.png`, fullPage: true });
await page.click('#quit').catch(()=>{});
page.on('dialog', d => d.accept());
await page.goto(BASE + '/11601/platform.html?r=1#G1'); await page.click('#go');
await page.screenshot({ path: `${SHOTS}pf-sort${mobile ? '-m' : ''}.png`, fullPage: true });
// game over
await page.goto(BASE + '/11601/platform.html?r=2');
console.log('G7 3 mistakes:', await playLevel(6, 3));
console.log('stars in store:', await page.evaluate(() => STORE.moduleStars('platform')));
console.log('errors', errors);
await browser.close();
