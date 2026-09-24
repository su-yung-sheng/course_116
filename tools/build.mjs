#!/usr/bin/env node
/* =====================================================================
   建置：把 private/ 裡的明碼答案封存成公開網站用的 content 檔
   ---------------------------------------------------------------------
   用法（在 repo 根目錄）：  node tools/build.mjs
   ★ 改題目、改答案、改測資 → 改 private/ 裡的檔案 → 跑這支 → 提交產生出來的檔案
   ★ private/ 不進 git（.gitignore），只在老師的電腦上 —— 請另外備份
   ★ 公開 repo 裡的 content/*.js、content/lab.js、digital/*.html 的 data-k 都是這支產生的，不要手改

   產出
     {學期}/content/*.js      遊戲、Python、試算表（答案封存）
     {學期}/content/lab.js    5016B 預測檢核的封存鑰匙
     11601/digital/1～4.html  快速檢核按鈕的 data-k
   ===================================================================== */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const P = (...a) => path.join(ROOT, ...a);
const SEAL = (await import(P('shared/seal.js'))).default || globalThis.SEAL;

/* ── 私有鹽（第一次建置時產生；遺失的話重新建置即可，只是封存結果全部換新） ── */
const pepperFile = P('private/pepper.txt');
if (!fs.existsSync(P('private'))) { console.error('找不到 private/ —— 這台電腦沒有明碼答案來源，無法建置。'); process.exit(1); }
if (!fs.existsSync(pepperFile)) fs.writeFileSync(pepperFile, crypto.randomBytes(24).toString('hex') + '\n');
const PEPPER = fs.readFileSync(pepperFile, 'utf8').trim();
const salt = (...parts) => SEAL.sha(PEPPER + '|' + parts.join('|')).slice(0, 16);

/* ── 在沙箱裡載入 private 的內容檔與需要的共用引擎 ── */
function load(files) {
  const ctx = { window: {}, console };
  ctx.window.window = ctx.window;
  vm.createContext(ctx);
  for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
  return ctx.window;
}
const ENGINE = load([P('shared/pyrunner.js'), P('shared/sheet.js')]);
const PYRUN = ENGINE.PYRUN, SHEET = ENGINE.SHEET;
const normPy = s => PYRUN._norm(s), halfPy = s => PYRUN._half(s);
const normType = s => String(s).replace(/[！-～]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).replace(/\s+/g, '').toUpperCase();

let count = { blobs: 0, hashes: 0 };
const seal = async (s, key, obj) => { count.blobs++; return SEAL.seal(s, key, obj, PEPPER); };
const H = (s, v) => { count.hashes++; return SEAL.h(s, v); };
function within(s, wants, tol) {          // 誤差範圍內所有「小數第 2 位」的值 → 雜湊
  const out = new Set();
  for (const w of wants) {
    const lo = Math.ceil((w - tol) * 100 - 1e-6), hi = Math.floor((w + tol) * 100 + 1e-6);
    for (let k = lo; k <= hi; k++) out.add(H(s, SEAL.num2(k / 100)));
  }
  return [...out];
}
// 漸進提示（最後一則常常就是答案）：不是加密，只是不讓 F12 一眼看到；按「提示」才解開
const hideHints = (id, hints) => (hints && hints.length ? { hx: SEAL.obscure('hint/' + id, hints), hn: hints.length } : {});
function seededShuffle(arr, seed) {
  const a = arr.slice(); let x = parseInt(SEAL.sha(seed).slice(0, 8), 16);
  for (let i = a.length - 1; i > 0; i--) { x = (x * 1103515245 + 12345) >>> 0; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  if (a.every((v, i) => v === arr[i]) && a.length > 1) a.push(a.shift());   // 不要剛好是正解順序
  return a;
}

/* ── Python ───────────────────────────────────── */
async function sealPython(levels) {
  return levels.map(({ hints, ...lv }) => ({
    ...lv, ...hideHints(lv.id, hints),
    tests: lv.tests.map((t, ti) => {
      const s = salt('py', lv.id, ti);
      const checks = t.checks.map(c => {
        const o = t.hidden ? {} : (c.msg ? { msg: c.msg } : {});
        if (c.line != null) return { ...o, t: 'line', h: H(s, normPy(c.line)) };
        if (c.has != null) return { ...o, t: 'has', h: H(s, normPy(c.has)), n: normPy(c.has).length };
        if (c.not != null) return { ...o, t: 'not', h: H(s, normPy(c.not)), n: normPy(c.not).length };
        if (c.word != null) return { ...o, t: 'word', h: H(s, halfPy(c.word)), n: halfPy(c.word).length };
        if (c.order) return { ...o, t: 'order', seq: c.order.map(x => ({ h: H(s, normPy(x)), n: normPy(x).length })) };
        if (c.count != null) return { ...o, t: 'count', h: H(s, normPy(c.count)), n: normPy(c.count).length, min: c.min, max: c.max, eq: c.eq };
        if (c.num != null) return { ...o, t: 'num', hs: within(s, [c.num], c.tol == null ? 0.01 : c.tol) };
        if (c.nums) return { ...o, t: 'nums', h: H(s, c.nums.map(Number).join(',')), k: c.nums.length, tail: !!c.tail };
        throw new Error(lv.id + ' 不認得的檢查：' + JSON.stringify(c));
      });
      const base = { name: t.name, s, checks };
      if (t.hidden) return { ...base, hidden: true, xw: t.why ? SEAL.obscure(s + '/why', t.why) : undefined, xin: SEAL.obscure(s, t.inputs || []) };
      return { ...base, inputs: t.inputs || [] };
    })
  }));
}

/* ── 互動遊戲（sort／order／build／type） ─────── */
async function sealCards(levels) {
  const out = [];
  for (const lv of levels) {
    const rounds = [];
    for (let ri = 0; ri < lv.rounds.length; ri++) {
      const rd = lv.rounds[ri], s0 = salt('card', lv.id, ri);
      if (rd.type === 'sort') {
        const items = [];
        for (let i = 0; i < rd.items.length; i++) {
          const it = rd.items[i], s = salt('card', lv.id, ri, i);
          if (!rd.buckets.some(b => b.id === it.a)) throw new Error(lv.id + ' 答案不在選項裡：' + it.t);
          items.push({ t: it.t, icon: it.icon, scene: it.scene, s, e: await seal(s, it.a, { why: it.why }) });
        }
        rounds.push({ type: 'sort', prompt: rd.prompt, pick: rd.pick, ordered: rd.ordered, buckets: rd.buckets, items });
      } else if (rd.type === 'order') {
        const seq = [];
        for (let i = 0; i < rd.items.length; i++) seq.push(await seal(s0 + '#' + i, rd.items[i].t, i === rd.items.length - 1 ? { why: rd.why } : {}));
        rounds.push({ type: 'order', prompt: rd.prompt, hint: rd.hint, s: s0, items: seededShuffle(rd.items, s0).map(x => ({ t: x.t, icon: x.icon })), seq });
      } else if (rd.type === 'build') {
        const combos = rd.slots.reduce((acc, sl) => acc.flatMap(c => sl.options.map(o => [...c, [sl.id, o]])), [[]]);
        const customers = [];
        for (let ci = 0; ci < rd.customers.length; ci++) {
          const cu = rd.customers[ci], s = salt('card', lv.id, ri, 'c', ci), outcomes = {};
          let valid = 0;
          for (const combo of combos) {
            const chosen = Object.fromEntries(combo), props = { price: rd.base ? rd.base.price : 0 };
            for (const [, o] of combo) { if (o.price) props.price += o.price; for (const k in o) if (!['id', 'label', 'price'].includes(k)) props[k] = o[k]; }
            const fails = cu.rules.filter(r => r.sum ? props[r.sum] > r.max : r.pick ? chosen[r.pick].id !== r.is
              : ((r.min != null && !(props[r.prop] >= r.min)) || (r.eq != null && props[r.prop] !== r.eq)));
            const key = combo.map(([, o]) => o.id).join('|');
            if (!fails.length) valid++;
            outcomes[H(s, key)] = await seal(s, key, fails.length ? { ok: false, msgs: fails.map(f => f.msg) } : { ok: true, good: cu.good });
          }
          if (!valid) throw new Error(lv.id + ' 客人「' + cu.who + '」沒有任何組合能過關');
          customers.push({ who: cu.who, need: cu.need, s, outcomes });
        }
        rounds.push({ type: 'build', title: rd.title, base: rd.base,
          slots: rd.slots.map(sl => ({ id: sl.id, label: sl.label, options: sl.options.map(o => ({ id: o.id, label: o.label, price: o.price })) })), customers });
      } else if (rd.type === 'type') {
        const items = [];
        for (let i = 0; i < rd.items.length; i++) {
          const it = rd.items[i], s = salt('card', lv.id, ri, i), keys = [...new Set(it.a.map(normType))], e = [];
          for (const k of keys) e.push(await seal(s, k, { why: it.why, ans: it.a[0] }));
          items.push({ t: it.t, sub: it.sub, icon: it.icon, ph: it.ph, hint: it.hint, toolShift: it.toolShift, s, e });
        }
        rounds.push({ type: 'type', prompt: rd.prompt, tool: rd.tool, shuffle: rd.shuffle, items });
      } else throw new Error('不認得的回合：' + rd.type);
    }
    out.push({ id: lv.id, icon: lv.icon, title: lv.title, book: lv.book, learn: lv.learn, rounds });
  }
  return out;
}

/* ── 試算表 ───────────────────────────────────── */
async function sealSheet(levels) {
  const out = [];
  for (const lv of levels) {
    const grid = SHEET.makeGrid(lv.clean ? lv.clean.fixed : lv.data, lv.labels);
    lv.targets.forEach(t => grid.set(t.cell, t.ref));   // 先把標準公式填進去：後面的格子可能引用前面的答案（例如 B13 用到 B11）
    const targets = lv.targets.map((t, i) => {
      const s = salt('sheet', lv.id, i), want = SHEET.evaluate(t.ref, grid);
      if (typeof want !== 'number') throw new Error(lv.id + ' ' + t.cell + ' 標準答案不是數字');
      return { cell: t.cell, label: t.label, must: t.must, tx: t.tip ? SEAL.obscure(s, t.tip) : undefined, s, ok: within(s, [want].concat(t.alt || []), t.tol == null ? 0.01 : t.tol) };
    });
    const o = { id: lv.id, icon: lv.icon, title: lv.title, book: lv.book, story: lv.story, data: lv.data, labels: lv.labels, targets, after: lv.after, ...hideHints(lv.id, lv.hints) };
    if (lv.clean) {
      const s = salt('sheet', lv.id, 'clean'), rows = {}, marks = [];
      for (let r = 2; r <= lv.data.length; r++) { const is = lv.clean.issues[r] || 'ok'; rows[r] = H(s, r + ':' + is); marks.push(is); }
      o.clean = { prompt: lv.clean.prompt, s, rows, e: await seal(s, marks.join(','), { fixed: lv.clean.fixed, note: lv.clean.note }) };
    }
    out.push(o);
  }
  return out;
}

/* ── 寫檔 ─────────────────────────────────────── */
function writeJS(file, globals, src) {
  const body = Object.entries(globals).map(([k, v]) => 'window.' + k + ' = ' + JSON.stringify(v, null, 1) + ';').join('\n\n');
  fs.writeFileSync(file, '/* ⚠️ 自動產生，請勿手改。來源：' + src + '（私有，不進 git）；產生方式：node tools/build.mjs\n' +
    '   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */\n' + body + '\n');
}

for (const term of ['11601', '11602']) {
  const dir = P('private', term, 'content');
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
    const W = load([path.join(dir, f)]), outG = {};
    for (const [k, v] of Object.entries(W)) {
      if (k === 'window') continue;
      if (k === 'PY_LEVELS') outG[k] = await sealPython(v);
      else if (k === 'SHEET_LEVELS') outG[k] = await sealSheet(v);
      else if (/_LEVELS$/.test(k)) outG[k] = await sealCards(v);
      else outG[k] = v;                     // 沒有答案的資料（例如 MEDIA_STEPS）原樣輸出
    }
    writeJS(P(term, 'content', f), outG, 'private/' + term + '/content/' + f);
    console.log('✔', term + '/content/' + f, Object.keys(outG).join(', '));
  }
  /* 5016B */
  const labSrc = P('private', term, 'lab.js');
  if (fs.existsSync(labSrc)) {
    const A = load([labSrc]).LAB_ANSWERS, keys = {};
    for (const [sid, list] of Object.entries(A)) {
      keys[sid] = [];
      for (let i = 0; i < list.length; i++) { const s = salt('lab', term, sid, i); keys[sid].push({ s, e: await seal(s, String(list[i].answer), { why: list[i].why }) }); }
    }
    writeJS(P(term, 'content', 'lab.js'), { LAB_KEYS: keys }, 'private/' + term + '/lab.js');
    console.log('✔', term + '/content/lab.js');
  }
}

/* 單元一：快速檢核按鈕 */
const REV = P('private', '11601', 'digital', 'review.json');
if (fs.existsSync(REV)) {
  const R = JSON.parse(fs.readFileSync(REV, 'utf8'));
  for (const [u, list] of Object.entries(R)) {
    const file = P('11601', 'digital', u + '.html');
    let html = fs.readFileSync(file, 'utf8'), i = 0;
    const blobs = [];
    for (const b of list) blobs.push(await seal('digital/' + u + '/' + b.q, b.label.replace(/\s+/g, ''), b.ok ? { ok: true } : { ok: false, hint: b.hint }));
    html = html.replace(/onclick="answerReview\((\d+), this\)" data-k="[^"]*"/g, (m, q) => {
      const b = list[i]; if (!b || String(b.q) !== q) throw new Error('單元一 ' + u + '.html 按鈕順序和 review.json 對不上');
      return 'onclick="answerReview(' + q + ', this)" data-k="' + blobs[i++] + '"';
    });
    if (i !== list.length) throw new Error('單元一 ' + u + '.html 按鈕數量和 review.json 對不上');
    fs.writeFileSync(file, html);
  }
  console.log('✔ 11601/digital/1～4.html 快速檢核');
}
console.log('完成：封存 ' + count.blobs + ' 份、雜湊 ' + count.hashes + ' 筆。');
