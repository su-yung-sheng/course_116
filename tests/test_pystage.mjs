// 🐍 單元二 三段式挑戰（⭐ 看懂再改 → ⭐⭐ 引導 → ⭐⭐⭐ 自己完成）＋情境內容檢查＋🌐 變數英文小幫手
//    課程設計參考 teacheryimei/course115-1（經原作者同意）
import { launch, login, BASE, SHOTS } from './harness.mjs';
import fs from 'fs'; fs.mkdirSync(SHOTS, { recursive: true });
import { SOL_STEPS, SOL_11601 as SOL } from '../private/tests/answers.mjs';
let bad = 0;
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
const { browser, context } = await launch();
const page = await context.newPage(); const errors = [];
page.on('pageerror', e => errors.push(e.message)); page.on('dialog', d => d.accept());
await page.goto(BASE + '/11601/hub.html'); await login(page);
await page.goto(BASE + '/11601/python.html'); await page.waitForSelector('#engine.ok', { timeout: 60000 });

/* 1. 伺服器檢查（瀏覽器真的跑程式，再送 pyc）：20 題參考寫法都要過 */
async function check(lv, st, code, inputs) {
  return page.evaluate(async ([lv, st, code, inputs]) => {
    let r;
    if (inputs) r = await PYRUN.run(code, inputs, { seed: 7 });
    else {   // 猜數字：照「太大／太小」二分搜尋
      let lo = 1, hi = 20, ins = [];
      for (let k = 0; k < 10; k++) {
        r = await PYRUN.run(code, ins, { seed: 7 }); if (!r.need) break;
        const outs = r.events.filter(e => e[0] === 'out').map(e => e[1]).join('').trim().split('\n'), last = outs[outs.length - 1] || '';
        if (ins.length) { const g = +ins[ins.length - 1]; if (last.includes('太大')) hi = g - 1; else if (last.includes('太小')) lo = g + 1; }
        ins.push(String(Math.floor((lo + hi) / 2)));
      }
    }
    return API.call('pyc', { lv, st, code, events: r.events, error: !!r.error, who: STORE.me() }).catch(e => e);
  }, [lv, st, code, inputs]);
}
console.log('🧪 20 題參考寫法');
for (const [lv, st, code, inputs] of SOL_STEPS) {
  const g = await check(lv, st, code, inputs);
  ok(g.ok && g.stars === st + 1 && g.rc, lv + ' 第 ' + (st + 1) + ' 題', g.ok ? '★'.repeat(g.stars) : g.kind + '：' + g.msg);
}
console.log('🧪 擋得住的寫法');
const NO = [
  ['P1', 0, 'print("哈囉，旅伴！")', [], 'code', '照抄黑框示範'],
  ['P2', 0, 'food = input("你喜歡什麼食物？")\nprint(food)', ['拉麵'], 'code', '照抄黑框（只改輸入）'],
  ['P1', 1, "print('rdfkjlk')\nprint('ddddd')", [], 'content', '地點、活動打亂碼'],
  ['P2', 1, "a = input('目的地：')\nb = input('天數：')\nc = input('最期待的活動：')\nprint(a, b, c)", ['香蕉', '3', '拍照'], 'content', '目的地輸入「香蕉」'],
  ['P2', 1, "a = input('目的地：')\nb = input('天數：')\nc = input('最期待的活動：')\nprint(a, b, c)", ['台南', '99', '拍照'], 'content', '旅行 99 天'],
  ['P7', 0, "a = int(input('作業完成（1/0）：'))\nb = int(input('用品帶齊（1/0）：'))\nif a == 1 and b == 1:\n    print('可以出發')\nelse:\n    print('先完成準備')", ['2', '1'], 'content', '1／0 題輸入 2'],
  ['P5', 0, "s = int(input('分數：'))\n# 60\nif s > 59:\n    print('通過')\nelse:\n    print('再挑戰')", ['70'], 'code', '把 60 寫在註解裡'],
  ['P8', 1, "print(2)\nprint(4)\nprint(6)\nprint(8)\nprint(10)", [], 'code', '寫 5 個 print（沒用迴圈）'],
  ['P8', 0, "for i in range(1, 5):\n    print(i)", [], 'code', 'range 少一個（只到 4）']
];
for (const [lv, st, code, inputs, kind, why] of NO) {
  const g = await check(lv, st, code, inputs);
  ok(!g.ok && g.kind === kind, lv + ' 第 ' + (st + 1) + ' 題：' + why + ' → ' + kind, g.msg);
}

/* 2. 畫面：第 1 題 → 第 2 題 → 開下一關 → 第 3 題（測資）→ ⭐⭐⭐ */
console.log('🖥️ 畫面流程');
await page.evaluate(() => STORE.login('901', '40', '三段式'));   // 換一位全新的同學
await page.goto(BASE + '/11601/python.html#P1'); await page.reload(); await page.waitForSelector('#engine.ok', { timeout: 60000 });
const tabs = await page.$$eval('.stg', b => b.map(x => x.classList.contains('lock')));
ok(tabs.join() === 'false,true,true' && !!(await page.$('#btn-check')) && (await page.textContent('#stage')).includes('完成條件'), '第 1 題開著、第 2／3 題鎖著；有黑框示範、完成條件、「✅ 檢查挑戰」');
await page.click('.stg[data-s="2"]', { force: true }); ok(await page.$eval('.stg[data-s="0"]', b => b.classList.contains('on')), '點鎖住的第 3 題 → 不會打開');
await page.click('#btn-hint'); await page.waitForSelector('#hints .hint');
ok((await page.textContent('#hints .hint')).startsWith('線索 1'), '💡 我需要線索：從伺服器拿第 1 題的線索');
await page.fill('#code', 'print("大家早安，出發囉")'); await page.dispatchEvent('#code', 'input');
await page.click('#btn-check'); await page.waitForSelector('#result .res-star', { timeout: 30000 });
ok((await page.textContent('#result')).includes('第 1 題完成'), '✅ 檢查挑戰 → 第 1 題完成（⭐）');
await page.click('#btn-nextq'); await page.waitForSelector('.stg[data-s="1"].on');
await page.fill('#code', 'print("香蕉")\nprint("拍照")'); await page.dispatchEvent('#code', 'input');
await page.click('#btn-check'); await page.waitForSelector('#result .note.warn', { timeout: 30000 });
const cm = await page.textContent('#result');
ok(cm.includes('不符合題目情境') && cm.includes('香蕉') && cm.includes('程式裡顯示的文字'), '🌍 情境內容不對 → 分清楚「不是程式寫錯」，告訴學生改什麼');
await page.fill('#code', 'print("墾丁")\nprint("浮潛看海")'); await page.dispatchEvent('#code', 'input');
await page.click('#btn-check'); await page.waitForSelector('#result .res-star', { timeout: 30000 });
ok((await page.textContent('#result')).includes('下一關') && (await page.getAttribute('.lv[data-i="1"]', 'aria-disabled')) === null, '第 2 題完成（⭐⭐）→ 🔓 下一關開放');
await page.click('#btn-nextq'); await page.waitForSelector('#btn-grade');
await page.fill('#code', SOL.P1); await page.dispatchEvent('#code', 'input');
await page.click('#btn-grade'); await page.waitForSelector('#result .res-star', { timeout: 60000 });
const r3 = await page.textContent('#result');
ok(r3.includes('第 3 題完成') && await page.evaluate(() => STORE.level('python', 'P1').stars) === 3, '第 3 題：測資全過＋結構要求 → ⭐⭐⭐');
await page.screenshot({ path: SHOTS + 'py-stage3.png', fullPage: true });

/* 3. 第 3 題沒全過：不會把星星變少、也不會多給 */
await page.evaluate(() => STORE.saveLevel('python', 'P2', { stars: 2 }));
await page.goto(BASE + '/11601/python.html#P2'); await page.reload(); await page.waitForSelector('#btn-grade', { timeout: 60000 });
ok(await page.$eval('.stg[data-s="2"]', b => b.classList.contains('on')), '進到已經 ⭐⭐ 的關卡 → 直接打開第 3 題');
await page.fill('#code', "name = input('請輸入姓名：')\nprint(name)"); await page.dispatchEvent('#code', 'input');
await page.click('#btn-grade'); await page.waitForSelector('#result .res-star', { timeout: 60000 });
ok(await page.evaluate(() => STORE.level('python', 'P2').stars) === 2, '第 3 題只過一部分 → 還是 ⭐⭐（不扣也不加）');

/* 4. 🌐 變數英文小幫手＋保留字提醒 */
await page.click('.stg[data-s="0"]'); await page.waitForSelector('#btn-check');
await page.fill('#code', "class = input('班級：')\nprint(class)"); await page.dispatchEvent('#code', 'input');
await page.click('#btn-run'); await page.waitForSelector('#err .note');
ok((await page.textContent('#err')).includes('保留字'), '🐍 把 class 當變數 → 提醒是保留字，附「變數英文小幫手」按鈕');
await page.click('#err [data-varhelp]'); await page.fill('#vh-q', '剩餘預算'); await page.fill('#vh-name', '2nd score');
ok((await page.textContent('#vh-out')).includes('remaining_budget') && (await page.textContent('#vh-lint')).includes('數字開頭'), '🌐 查「剩餘預算」→ remaining_budget；檢查自己取的名字');
await page.screenshot({ path: SHOTS + 'py-varhelp.png' });

/* 5. 📱 手機 */
await page.setViewportSize({ width: 390, height: 844 });
ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '📱 手機寬度沒有橫向捲動');
console.log('errors', errors);
await browser.close();
if (bad || errors.length) process.exit(1);
