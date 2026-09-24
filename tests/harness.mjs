// 測試共用：啟動瀏覽器，把 CDN 導到本機檔案（不用連網也能測）
// 用法：cd tests && npm install && npx playwright install chromium
//       另開一個視窗在 repo 根目錄：python -m http.server 8116
//       node test_python.mjs （其他 test_*.mjs 同）
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PYO = new URL('./node_modules/pyodide/', import.meta.url).pathname;
const TW = new URL('./node_modules/@tailwindcss/browser/dist/index.global.js', import.meta.url).pathname;
export const BASE = process.env.BASE || 'http://localhost:8116';
export const SHOTS = process.env.SHOTS || new URL('./shots/', import.meta.url).pathname;

const types = { '.js': 'application/javascript', '.mjs': 'application/javascript', '.wasm': 'application/wasm', '.json': 'application/json', '.zip': 'application/zip' };

export async function launch(opts = {}) {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  const context = await browser.newContext({ viewport: opts.viewport || { width: 1280, height: 900 }, deviceScaleFactor: 1 });
  await context.route('https://cdn.jsdelivr.net/pyodide/**', route => {
    const f = PYO + route.request().url().split('/full/')[1].split('?')[0];
    if (!fs.existsSync(f)) return route.fulfill({ status: 404, body: 'nf' });
    route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': types[path.extname(f)] || 'application/octet-stream', 'access-control-allow-origin': '*' } });
  });
  await context.route('https://cdn.tailwindcss.com/**', route => route.fulfill({ status: 200, body: fs.readFileSync(TW), headers: { 'content-type': 'application/javascript' } }));
  await context.route(/fonts\.(googleapis|gstatic)\.com/, route => route.fulfill({ status: 200, body: '', headers: { 'content-type': 'text/css' } }));
  return { browser, context };
}

export async function login(page, cls = '901', seat = '5', name = '測試生') {
  await page.evaluate(([c, s, n]) => localStorage.setItem('c116-profile', JSON.stringify({ cls: c, seat: String(+s).padStart(2, '0'), name: n })), [cls, seat, name]);
}

// 讀 private/ 裡的明碼內容（題目的正解只在這裡；公開網站的 content 是封存版）
import vm from 'vm';
export function priv(rel) {
  const file = new URL('../private/' + rel, import.meta.url).pathname;
  if (!fs.existsSync(file)) { console.error('找不到 private/' + rel + ' —— 測試需要老師電腦上的 private/ 資料夾'); process.exit(2); }
  const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
  return ctx.window;
}
