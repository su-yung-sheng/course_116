// 掃描「公開檔案」裡有沒有出現 private/ 的明碼答案（正解、解說、提示、標準公式、參考程式）
// 用法：node tests/leak_scan.mjs（需要 private/）；有可疑的就列出來並回傳 1
import fs from 'fs'; import vm from 'vm'; import path from 'path';
process.chdir(new URL('..', import.meta.url).pathname);
const pub = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { if (['private', 'tests', '.git', 'node_modules', 'tools'].includes(f)) continue; const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (/\.(js|html|json|md)$/.test(f)) pub.push([p, fs.readFileSync(p, 'utf8')]); } })('.');
const load = f => { const c = { window: {} }; vm.createContext(c); vm.runInContext(fs.readFileSync(f, 'utf8'), c); return c.window; };
const N = new Map(); const add = (n, why) => { n = String(n); if (n.length >= 6) N.set(n, why); };
for (const t of ['11601', '11602']) Object.values(load(`private/${t}/lab.js`).LAB_ANSWERS).flat().forEach(x => add(x.why.slice(0, 16), 'lab why'));
Object.values(JSON.parse(fs.readFileSync('private/11601/digital/review.json'))).flat().forEach(x => x.hint && add(x.hint.slice(0, 14), 'review hint'));
load('private/11602/content/sheet.js').SHEET_LEVELS.forEach(l => { l.targets.forEach(t => add(t.ref, 'sheet ref')); (l.hints || []).forEach(h => add(h.slice(0, 18), 'sheet hint')); });
for (const t of ['11601']) load(`private/${t}/content/python.js`).PY_LEVELS.forEach(l => { (l.hints || []).forEach(h => add(h.slice(0, 18), 'py hint ' + l.id)); l.tests.forEach(t => t.hidden && t.why && add(t.why, 'hidden why ' + l.id)); });
// 互動遊戲（所有 *_LEVELS）：答對後的解說、組合題的過關說明
for (const [t, f] of [['11601', 'platform'], ['11602', 'media'], ['11602', 'network'], ['11602', 'data']]) {
  const W = load(`private/${t}/content/${f}.js`);
  for (const [k, L] of Object.entries(W)) if (/_LEVELS$/.test(k)) L.forEach(lv => lv.rounds.forEach(rd => {
    (rd.items || []).forEach(it => it.why && add(it.why.slice(0, 16), 'card why ' + lv.id));
    (rd.customers || []).forEach(cu => cu.good && add(cu.good.slice(0, 16), 'card good ' + lv.id));
  }));
}
const A = await import(new URL('../private/tests/answers.mjs', import.meta.url));
// 參考程式裡 input( ) 那一行本來就在範本（starter）裡，不算
for (const k of ['SOL_11601']) Object.entries(A[k]).forEach(([id, code]) => code.split('\n').map(s => s.trim()).filter(s => s.length > 22 && !/input\(/.test(s)).forEach(s => add(s, 'solution ' + id)));
// 刻意公開的（頁面上本來就看得到）
const ALLOW = [['lab why', '11601/5016b.html'],   // 學習目標
  ['py hint P10', '11601/content/python.js']];     // Scratch 對照表本來就列出 while guess != answer:
let hits = 0;
for (const [n, why] of N) for (const [p, s] of pub) if (s.includes(n) && !ALLOW.some(([w, f]) => why === w && p === f)) { hits++; console.log('HIT', why, p, JSON.stringify(n).slice(0, 60)); }
console.log('檢查', N.size, '段明碼，公開檔案中發現', hits, '處');
process.exit(hits ? 1 : 0);
