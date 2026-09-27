// 🧪 系統平臺大冒險・實驗站解題器：只看畫面上的情境（和 dataset 裡的情境描述），照課本規則算出正確操作
export async function solvePfLab(page) {
  const lab = await page.$eval('#lab', e => e.dataset.lab);
  const ds = await page.$eval('#lab', e => ({ ...e.dataset }));
  if (lab === 'platformBuilder') {
    const t = JSON.parse(ds.task);
    const p = await page.evaluate(t => {
      const { HW, APP } = CARDGAME.labs._pb, app = APP.find(a => a.id === t.app);
      const hw = HW.find(h => h.id === (t.small ? 'watch' : t.carry ? 'phone' : 'desk'));
      return { hw: hw.id, os: hw.os.find(o => app.os.includes(o)), type: hw.type };
    }, t);
    for (const [k, v] of [['app', t.app], ['os', p.os], ['hw', p.hw], ['type', p.type]]) await page.click(`.pb-o[data-k="${k}"][data-v="${v}"]`);
    await page.click('#pb-ok');
  } else if (lab === 'fiveUnits') {
    const steps = ds.steps.split(','), qs = JSON.parse(ds.calc);
    const val = q => { const m = q.replace(/＋/g, '+').replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/'); return Function('return ' + m)(); };
    let c = 0;
    for (const u of steps) {
      await page.click(`.fu-u[data-u="${u}"]`);
      if (u === 'alu') { await page.fill('#fu-ans', String(val(qs[c++]))); await page.click('#fu-go'); await page.waitForSelector('#fu-calc .note'); }
    }
  } else if (lab === 'memPlan') {
    const items = JSON.parse(ds.items);
    const order = items.map((_, i) => i).filter(i => !items[i].keep).sort((a, b) => items[b].n - items[a].n);
    const place = items.map(it => it.keep ? 'disk' : null);
    order.forEach((i, k) => { place[i] = k < 2 ? 'cache' : k < 5 ? 'ram' : 'disk'; });
    for (const [i, l] of place.entries()) await page.click(`.mp-b[data-i="${i}"][data-l="${l}"]`);
    await page.click('#mp-ok');
  } else if (lab === 'pcBuild') {
    const need = JSON.parse(ds.need);
    const s = await page.evaluate(need => { const b = CARDGAME.labs._pc.cheapest(need); return { cpu: b.cpu.id, ram: b.ram.id, disk: b.disk.id }; }, need);
    for (const k of ['cpu', 'ram', 'disk']) await page.click(`.pc-o[data-k="${k}"][data-id="${s[k]}"]`);
    await page.click('#pc-ok');
  } else if (lab === 'osManager') {
    const st = JSON.parse(ds.state);
    const free = st.TOTAL - st.osG - st.run.reduce((a, p) => a + p.g, 0);
    const cand = st.run.map((_, i) => i).filter(i => i !== st.keepI).sort((a, b) => st.run[b].g - st.run[a].g);
    let got = free;
    for (const i of cand) {
      if (got >= st.newP.g) break;
      if (!st.run[i].saved) await page.click(`.om-save[data-i="${i}"]`);
      await page.click(`.om-x[data-i="${i}"]`); got += st.run[i].g;
    }
    await page.click('#om-go');
  } else if (lab === 'pcDoctor') {
    const keys = ds.keys.split(',');
    const used = async () => +(await page.textContent('#dr-stat span:first-child b')).replace('%', '');
    for (const k of keys) {
      if (k === 'disk') {
        await page.click('.dr-t[data-t="clean"]'); await page.click('#dr-clean');
        if (await used() > 85) {
          await page.click('.dr-t[data-t="uninst"]');
          const rows = await page.$$eval('#dr-panel .om-p', rs => rs.map(r => r.textContent));
          for (const [i, t] of rows.entries()) if (/沒玩|試用期/.test(t) && await used() > 85) await page.click(`.dr-un[data-i="${i}"]`);
        }
      }
      if (k === 'update') { await page.click('.dr-t[data-t="update"]'); await page.click('#dr-upd'); }
      if (k === 'fw') { await page.click('.dr-t[data-t="fw"]'); await page.click('#dr-fw'); }
      if (k === 'backup') { await page.click('.dr-t[data-t="backup"]'); await page.click('.dr-bk[data-b="ext"]'); }
      if (k === 'hang') {
        await page.click('.dr-t[data-t="task"]');
        const rows = await page.$$eval('#dr-panel .om-p', rs => rs.map(r => r.textContent));
        await page.click(`.dr-end[data-i="${rows.findIndex(t => t.includes('沒有回應'))}"]`);
      }
    }
    await page.click('#dr-ok');
  } else if (lab === 'cloudPizza') {
    const svc = await page.evaluate(line => { const { WANT, WANT2 } = CARDGAME.labs._cz, w = WANT.concat(WANT2).find(w => w.t.includes(line)); return w.os ? 'iaas' : w.code ? 'paas' : 'saas'; }, ds.line);
    const n = { iaas: 2, paas: 4, saas: 5 }[svc];
    await page.click(`.cz-s[data-s="${svc}"]`);
    for (let i = 0; i < 5; i++) await page.click(`.cz-w[data-i="${i}"][data-w="${i < n ? 'cloud' : 'me'}"]`);
    await page.click('#cz-ok');
  } else if (lab === 'embedded') {
    const sp = JSON.parse(ds.spec);
    const [op, v] = sp.mode === 'incl' ? (sp.op === '<' ? ['<', sp.v + 1] : ['>', sp.v - 1]) : [sp.op, sp.v];
    await page.selectOption('#em-s', sp.s); await page.selectOption('#em-o', op); await page.fill('#em-n', String(v)); await page.selectOption('#em-a', sp.a);
    await page.click('#em-run');
  } else throw new Error('不認得的實驗站 ' + lab);
}
