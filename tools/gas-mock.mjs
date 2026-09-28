/* =====================================================================
   🧪 在自己電腦模擬 Google Apps Script 驗證伺服器（開發、測試用）
   ---------------------------------------------------------------------
   載入 private/server/*.js（node tools/build.mjs 產生的整包），補上 Apps Script 的內建服務：
   CacheService、LockService、PropertiesService、Utilities、ContentService（SpreadsheetApp 不模擬，紀錄功能會自動略過）
   用法：
     import { createGas } from './gas-mock.mjs';
     const gas = createGas();          // 預設讀 private/server
     const text = gas.post('{"a":"ping"}');   // 回傳 JSON 字串（和網頁收到的一樣）
     gas.ctx                           // 伺服器的全域（測試可以直接看 run 的狀態：gas.run(id)）
   ===================================================================== */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function createGas(dir = path.join(ROOT, 'private', 'server')) {
  if (!fs.existsSync(path.join(dir, '90_answers.js'))) throw new Error('找不到 ' + dir + '/90_answers.js —— 先執行 node tools/build.mjs');
  const cache = new Map(), props = new Map();
  const ctx = {
    console,
    CacheService: { getScriptCache: () => ({
      get: k => { const e = cache.get(k); if (!e) return null; if (e.exp < Date.now()) { cache.delete(k); return null; } return e.v; },
      put: (k, v, ttl) => { if (String(v).length > 100000) throw new Error('Argument too large: value'); cache.set(k, { v: String(v), exp: Date.now() + (ttl || 600) * 1000 }); },
      remove: k => cache.delete(k)
    }) },
    LockService: { getScriptLock: () => ({ tryLock: () => true, waitLock: () => {}, releaseLock: () => {} }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: k => (props.has(k) ? props.get(k) : null), setProperty: (k, v) => { props.set(k, String(v)); } }) },
    Utilities: {
      getUuid: () => crypto.randomUUID(),
      computeHmacSha256Signature: (text, key) => [...crypto.createHmac('sha256', key).update(text, 'utf8').digest()].map(b => (b > 127 ? b - 256 : b)),
      base64EncodeWebSafe: bytes => Buffer.from(bytes.map(b => b & 255)).toString('base64').replace(/\+/g, '-').replace(/\//g, '_')
    },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: s => ({ setMimeType() { return this; }, getContent: () => s }) },
    SpreadsheetApp: { openById: () => { throw new Error('SpreadsheetApp 沒有模擬'); } }
  };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort()) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
  return {
    ctx,
    post: body => ctx.doPost({ postData: { contents: String(body || '') } }).getContent(),
    call: (a, data = {}) => JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify({ a, ...data }) } }).getContent()),
    run: id => { const e = cache.get('run:' + id); return e ? JSON.parse(e.v) : null; },
    runs: () => [...cache.keys()].filter(k => k.startsWith('run:')).map(k => JSON.parse(cache.get(k).v)),
    setRun: run => cache.set('run:' + run.id, { v: JSON.stringify(run), exp: Date.now() + 6 * 3600e3 })
  };
}
