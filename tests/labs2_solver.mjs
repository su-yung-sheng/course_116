// 🧪 資料偵探／多媒體／AI 前導關的實驗站解題器＋🎲 密碼出題器解題器
// 只看畫面上的題目、el.dataset 裡的情境描述，照課本規則算出正確操作（和學生一樣），不讀答案資料。

/** 🎲 密碼特務的出題器：看題目算答案；不是密碼題就回傳 null */
export async function cipherAnswer(page, S = { txt: '.qcard .txt', sub: '.qcard .small', ans: '#ans' }) {
  return page.evaluate(S => {
    if (!window.CARDGAME || !CARDGAME.cipher || !document.querySelector(S.txt) || !document.querySelector(S.ans)) return null;
    const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', C = CARDGAME.cipher;
    const t = document.querySelector(S.txt).textContent.trim(), sub = (document.querySelector(S.sub) || {}).textContent || '';
    let m;
    if (/把整個單字換成編號/.test(sub)) return t.split('').map(c => A.indexOf(c)).join(',');
    if (/這串編號是哪一個英文單字/.test(sub)) return t.split(' ').map(x => A[+x]).join('');
    if ((m = t.match(/編號 (\d+) 先往後移 (\d+) 格，再往前移 (\d+) 格/))) return String(((+m[1] + +m[2] - +m[3]) % 26 + 26) % 26);
    if (/編號是？/.test(sub)) return String(A.indexOf(t));
    if ((m = t.match(/^字母 ([A-Z]) 往後移 (\d+) 格/))) return A[(A.indexOf(m[1]) + +m[2]) % 26];
    if (/哪一個字母/.test(sub)) return A[+t.replace(/\D/g, '')];
    if ((m = t.match(/編號 (\d+) 往(後|前)移 (\d+) 格/))) return String(((+m[1] + (m[2] === '後' ? 1 : -1) * +m[3]) % 26 + 26) % 26);
    if ((m = sub.match(/^加密，金鑰 (\d+)/))) return C.shift(t, +m[1] % 26);
    if ((m = sub.match(/^解密，金鑰 (\d+)/))) return C.shift(t, -m[1]);
    if (/兩個單字（同一把金鑰）/.test(sub)) { const ws = t.split(' '); for (let k = 1; k < 26; k++) { const w = ws.map(x => C.shift(x, -k)); if (w.every(x => C.WORDS.includes(x))) return w.join(' '); } }
    if (/金鑰不知道/.test(sub)) { for (let k = 1; k < 26; k++) { const w = C.shift(t, -k); if (C.WORDS.includes(w)) return w; } }
    if (/加密法 1/.test(sub)) return C.vig(t, t.split('').map((_, i) => i + 1), 1);
    if ((m = sub.match(/維吉尼亞解密，金鑰依序 ([\d、]+)/))) return C.vig(t, m[1].split('、').map(Number), -1);
    if ((m = sub.match(/金鑰依序 ([\d、]+)/))) return C.vig(t, m[1].split('、').map(Number), 1);
    const cells = [...document.querySelectorAll('#tool [data-i] .black')];
    const km = sub.match(/正解是 ([A-D])/);
    if (!cells.length || !km) return null;
    const ans = cells.map(e => e.textContent.replace('✔', '').trim()), key = km[1];
    if (/答對的有幾人/.test(t)) return String(ans.filter(x => x === key).length);
    if (/答錯的有幾人/.test(t)) return String(ans.filter(x => x !== key).length);
    if (/錯誤選項.*最多人選/.test(t)) { const c = {}; ans.filter(x => x !== key).forEach(x => c[x] = (c[x] || 0) + 1); return Object.keys(c).sort((a, b) => c[b] - c[a])[0]; }
    if ((m = t.match(/選 ([A-D]) 的有幾人/))) return String(ans.filter(x => x === m[1]).length);
    if (/答對率/.test(t)) return String(Math.round(ans.filter(x => x === key).length / ans.length * 100));
    return null;
  }, S);
}

export const LABS2 = ['resFrame', 'flipbook', 'timeline', 'licenseCheck', 'dataToInfo', 'cleanLab', 'rleLab', 'blackBox', 'trainer', 'robotAlgo', 'nextWord', 'promptLab', 'fakeSpot'];
const ds = page => page.$eval('#lab', e => ({ ...e.dataset }));
const change = (page, sel, v) => page.$eval(sel, (e, v) => { e.value = v; e.dispatchEvent(new Event('change', { bubbles: true })); }, v);

/** 🧪 把目前畫面上的實驗站做對（最後按確認） */
export async function solveLab2(page) {
  const d = await ds(page), lab = d.lab || (await page.$eval('#lab > div', e => e.className));
  if (d.q && (await page.$('.rf2'))) {   // 📺 resFrame
    const q = JSON.parse(d.q), RES = await page.evaluate(() => CARDGAME.labs._m.RES);
    const res = name => RES.find(r => r.n === name);
    for (const [i, x] of q.entries()) {
      if (x.k === 'wh') { const r = res(x.t.match(/「(.+?)」/)[1]); await page.fill(`.rf-n[data-i="${i}"][data-p="w"]`, String(r.w)); await page.fill(`.rf-n[data-i="${i}"][data-p="h"]`, String(r.h)); }
      else if (x.k === 'hi') { const vs = await page.$$eval(`.rf-o[data-i="${i}"]`, bs => bs.map(b => +b.dataset.v)); await page.click(`.rf-o[data-i="${i}"][data-v="${Math.max(...vs)}"]`); }
      else {
        let v;
        if (x.k === 'fr') { const a = x.t.match(/(\d+) 分 (\d+) 秒.*?(\d+)fps/), b = x.t.match(/(\d+) 秒.*?每秒 (\d+) 格/); v = a ? (+a[1] * 60 + +a[2]) * +a[3] : +b[1] * +b[2]; }
        if (x.k === 'x') { const [a, b] = [...x.t.matchAll(/「(.+?)」/g)].map(m => res(m[1])); v = a.w * a.h / (b.w * b.h); }
        if (x.k === 'il') v = +x.t.match(/(\d+)i/)[1] / 2;
        await page.fill(`.rf-n[data-i="${i}"][data-p="v"]`, String(v));
      }
    }
    return page.click('#rf-ok');
  }
  if (await page.$('.fbk')) {   // 🎞️ flipbook
    const N = +d.n, T = +d.t;
    for (let f = 0; f < N; f++) await page.click(`.fb-f[data-f="${f}"]`);
    await page.fill('#fb-fps', String(N / T));
    if (d.x) { const x = JSON.parse(d.x); await page.fill('#fb-tot', String((x.m * 60 + x.s) * x.f)); }
    return page.click('#fb-ok');
  }
  if (d.clips) {   // 🎚️ timeline
    const clips = JSON.parse(d.clips), hard = clips.some(c => c.at != null);
    for (const c of clips) {
      const tr = c.kind === 'base' ? 'V1' : c.kind === 'over' ? 'V2' : c.id === 'voice' ? 'A2' : 'A1';
      await page.click(`.tl-clip[data-c="${c.id}"]`); await page.click(`.tl-lab[data-t="${tr}"]`);
    }
    if (hard) for (const c of clips) await change(page, `.tl-st[data-c="${c.id}"]`, String(c.at));
    return page.click('#tl-ok');
  }
  if (await page.$('.lc')) {   // 📜 licenseCheck
    const s = JSON.parse(d.s);
    const v = await page.evaluate(s => { const M = CARDGAME.labs._m; return s.mats.map(id => M.verdict(M.MATS.find(m => m.id === id), s.commercial, s.edit)); }, s);
    for (const [i, id] of s.mats.entries()) await page.click(`.lc-a[data-m="${id}"][data-a="${v[i]}"]`);
    return page.click('#lc-ok');
  }
  if (await page.$('.di')) {   // 🔎 dataToInfo
    const x = JSON.parse(d.d), put = (k, v) => page.fill(`.di-n[data-k="${k}"]`, String(v));
    if (x.kind === 'temp') {
      const fever = x.temps.filter(t => t >= 37.5).length;
      await put('fever', fever); await put('max', x.temps.indexOf(Math.max(...x.temps)) + 1);
      await page.click(`.di-yn[data-k="act"][data-v="${fever ? 'y' : 'n'}"]`);
    } else {
      const a1 = x.w1.reduce((a, b) => a + b) / 7, a2 = x.w2.reduce((a, b) => a + b) / 7;
      await put('a1', a1); await put('a2', a2); await put('pct', Math.round((a2 - a1) / a1 * 100));
      await page.click(`.di-yn[data-k="act"][data-v="${a2 > a1 ? 'y' : 'n'}"]`);
    }
    return page.click('#di-ok');
  }
  if (await page.$('.cl-k')) {   // 🧹 cleanLab 基本
    const rows = JSON.parse(d.rows), k = await page.evaluate(rows => rows.map(r => CARDGAME.labs._d.judge(r)), rows);
    for (const [i, v] of k.entries()) await page.click(`.cl-k[data-i="${i}"][data-k="${v}"]`);
    return page.click('#cl-ok');
  }
  if (await page.$('.cl-a')) {   // 🧹 cleanLab 挑戰
    const rows = JSON.parse(d.rows), valid = rows.filter(r => typeof r.score === 'number' && r.score <= 100);
    const avg = valid.reduce((a, r) => a + r.score, 0) / valid.length;
    for (const [i, r] of rows.entries()) {
      const std = /^\d{4}\/\d{1,2}\/\d{1,2}$/.test(r.date) ? null : r.date.match(/\d+/g).map(Number).join('/');
      const a = typeof r.score === 'number' && r.score > 100 ? 'del' : r.score === '' ? 'fill' : std ? 'conv' : 'keep';
      await page.click(`.cl-a[data-i="${i}"][data-a="${a}"]`);
      if (a === 'fill') await page.fill(`.cl-v[data-i="${i}"]`, String(avg));
      if (a === 'conv') await page.fill(`.cl-v[data-i="${i}"]`, std);
    }
    return page.click('#cl-ok');
  }
  if (await page.$('.rl')) {   // 🗜️ rleLab
    const rle = row => { const o = []; let cur = 0, c = 0; for (const p of row) { if (p === cur) c++; else { o.push(c); cur = p; c = 1; } } o.push(c); return o; };
    if (d.rows) {
      const rows = JSON.parse(d.rows), codes = rows.map(rle);
      for (const [i, c] of codes.entries()) await page.fill(`.rl-in[data-i="${i}"]`, c.join(','));
      await page.fill('#rl-cnt', String(codes[0].length + codes[1].length));
    } else {
      const codes = JSON.parse(d.codes);
      for (const [y, c] of codes.entries()) { let x = 0; for (const [k, n] of c.entries()) { if (k % 2) for (let j = 0; j < n; j++) await page.click(`#rl-g .px[data-x="${x + j}"][data-y="${y}"]`); x += n; } }
      await page.fill('#rl-cnt', String(codes.reduce((a, c) => a + c.length, 0)));
      await page.click('.rl-k[data-k="lossless"]');
    }
    return page.click('#rl-ok');
  }
  if (d.lab === 'blackBox') {   // 🤖 做實驗：每個水果測兩次 → 全部教一遍 → 再測一遍
    const n = +d.n, fruits = d.fruits.split(','), hard = !!(await page.$('.bb-k[data-k="rand"]'));
    const lastOut = async () => (await page.$$eval('.bb-log li', ls => ls.map(l => l.textContent))).pop().match(/「(.+?)」/)[1];
    for (let i = 0; i < n; i++) {
      await page.click(`.bb-tab[data-i="${i}"]`);
      let changed = false;
      for (let k = 0; k < fruits.length; k++) {
        await page.click(`.bb-f[data-k="${k}"]`); const outs = [];
        for (let r = 0; r < 3; r++) { await page.click('#bb-test'); outs.push(await lastOut()); }
        if (new Set(outs).size > 1) changed = true;
      }
      for (let k = 0; k < fruits.length; k++) { await page.click(`.bb-f[data-k="${k}"]`); await page.click('#bb-teach'); }
      let right = 0;
      for (let k = 0; k < fruits.length; k++) { await page.click(`.bb-f[data-k="${k}"]`); await page.click('#bb-test'); if (await lastOut() === fruits[k]) right++; }
      const type = changed && hard ? 'rand' : right === fruits.length ? 'learn' : 'rule';
      await page.click(`.bb-k[data-k="${type}"]`);
    }
    return page.click('#bb-ok');
  }
  if (d.lab === 'trainer') {   // 🐱🐶 暴力找一組 ≤ max 張、讓測試全對的資料集（測試的真實答案：耳朵 ≥ 5 是貓）
    const pool = JSON.parse(d.pool), tests = JSON.parse(d.tests), max = +d.max;
    const nn = (set, p) => { let b = null, bd = 1e9; for (const q of set) { const dd = (q.ear - p.ear) ** 2 + (q.size - p.size) ** 2; if (dd < bd) { bd = dd; b = q; } } return b && b.a; };
    let best = null;
    for (let m = 1; m < (1 << pool.length) && !best; m++) {
      const idx = pool.map((_, i) => i).filter(i => m & (1 << i)); if (idx.length > max) continue;
      if (tests.every(p => nn(idx.map(i => pool[i]), p) === (p.ear >= 5 ? 'cat' : 'dog'))) best = idx;
    }
    for (const i of best) await page.click(`.tr-p[data-k="${i}"]`);
    await page.click('#tr-run');
    return page.click('#tr-ok');
  }
  if (d.lab === 'robotAlgo') {   // 🤖 最少積木的路線（Dijkstra），挑戰版用「重複執行」
    const { G, s, goal, limit } = JSON.parse(d.map), H = G.length, W = G[0].length, DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const key = (x, y, dd) => x + ',' + y + ',' + dd, best = { [key(s.x, s.y, s.d)]: 0 }, prev = {};
    const q = [[s.x, s.y, s.d, 0]]; let end = null;
    while (q.length) {
      q.sort((a, b) => a[3] - b[3]); const c = q.shift();
      if (c[0] === goal.x && c[1] === goal.y) { end = c; break; }
      const nx = [[c[0], c[1], (c[2] + 3) % 4, c[3] + 1, { t: 'left' }], [c[0], c[1], (c[2] + 1) % 4, c[3] + 1, { t: 'right' }]];
      for (let k = 1; k < 6; k++) { const x = c[0] + DIRS[c[2]][0] * k, y = c[1] + DIRS[c[2]][1] * k; if (x < 0 || y < 0 || x >= W || y >= H || G[y][x] === 'wall') break; nx.push([x, y, c[2], c[3] + (limit ? (k === 1 ? 1 : 2) : k), { t: 'fwd', k }]); }
      for (const n of nx) { const kk = key(n[0], n[1], n[2]); if (best[kk] == null || best[kk] > n[3]) { best[kk] = n[3]; prev[kk] = [key(c[0], c[1], c[2]), n[4]]; q.push(n.slice(0, 4)); } }
    }
    const moves = []; let kk = key(end[0], end[1], end[2]);
    while (prev[kk]) { moves.unshift(prev[kk][1]); kk = prev[kk][0]; }
    const blocks = [];
    for (const mv of moves) { if (mv.t !== 'fwd') blocks.push({ t: mv.t }); else if (limit && mv.k > 1) blocks.push({ t: 'rep', n: mv.k }, { t: 'fwd' }); else for (let j = 0; j < mv.k; j++) blocks.push({ t: 'fwd' }); }
    blocks.push({ t: 'pick' });
    for (const [i, b] of blocks.entries()) { await page.click(`.ra-b[data-b="${b.t}"]`); if (b.t === 'rep') await change(page, `.ra-rep[data-i="${i}"]`, String(b.n)); }
    return page.click('#ra-ok');
  }
  if (d.lab === 'nextWord') {   // 💬 數一數哪個詞最常接在後面
    const corpus = JSON.parse(d.corpus);
    const top = w => { const c = {}; for (const s of corpus) { const i = s.indexOf(w); if (i >= 0 && i < s.length - 1) c[s[i + 1]] = (c[s[i + 1]] || 0) + 1; } const k = Object.keys(c).sort((a, b) => c[b] - c[a])[0]; return [k, c[k]]; };
    if (d.asks) {
      for (const [i, w] of d.asks.split(',').entries()) { const [t, c] = top(w); await page.click(`.nw-o[data-i="${i}"][data-v="${t}"]`); await page.fill(`.nw-c[data-i="${i}"]`, String(c)); }
    } else {
      const chain = [d.start]; for (let k = 0; k < 3; k++) { const t = top(chain[k])[0]; chain.push(t); await page.click(`.nw-w[data-w="${t}"]`); }
      await page.click(`.nw-y[data-v="${corpus.some(s => s.join(' ') === chain.join(' ')) ? 'y' : 'n'}"]`);
    }
    return page.click('#nw-ok');
  }
  if (d.lab === 'promptLab') {   // 🔍 四要素＋一句一句檢查
    const s = JSON.parse(d.s);
    const r = await page.evaluate(s => { const P = CARDGAME.labs._pl; return { who: P.WHO.indexOf(s.who), tone: P.TONE.indexOf(s.tone), k: s.drafts.map(x => P.judgeDraft(x, s.feat, s.lim)) }; }, s);
    for (const [k, v] of [['who', r.who], ['feat', s.fopts.indexOf(s.feat)], ['tone', r.tone], ['lim', 0]]) await page.click(`.pl-s[data-s="${k}"][data-k="${v}"]`);
    for (const [i, v] of r.k.entries()) await page.click(`.pl-k[data-i="${i}"][data-k="${v}"]`);
    if (await page.$('#pl-mine')) await page.fill('#pl-mine', s.feat + '真方便');
    return page.click('#pl-ok');
  }
  if (d.lab === 'fakeSpot') {   // 🕵️ 數手指、檢查時鐘
    const imgs = JSON.parse(d.imgs), okClock = n => n.length === 12 && n.every((v, i) => v === i + 1);
    for (const [i, x] of imgs.entries()) if (x.k === 'hand' ? x.n !== 5 : !okClock(x.nums)) await page.click(`.fk-i[data-i="${i}"]`);
    return page.click('#fk-ok');
  }
  throw new Error('labs2_solver 不認得的實驗站：' + lab);
}
