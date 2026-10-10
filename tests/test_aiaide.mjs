// 🤖 AI 助教工坊（aiassistant/，自成一套、和闖關網站分開；🔓 暫時全部開放：不登入、六關都能點）：六關走一遍 —— 助教設計單 → 起草卡 → v1 → 試用 → T1～T6 → 規格卡過助教
//    → 骨架卡（助教閘門、預測、⚡、驗收）→ 測試清單 → 程式尋寶＋手動關 → 功能卡 ×2＋除錯 → 說明卡＋反思，老師確認碼
import { launch, BASE, SHOTS } from './harness.mjs';
const { browser, context } = await launch();
await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: BASE });
const page = await context.newPage();
const errors = []; let bad = 0;
page.on('pageerror', e => errors.push(e.message));
page.on('dialog', d => d.accept());
const ok = (c, ...m) => { if (!c) bad++; console.log(c ? '  ✔' : '  ✘', ...m); };
const stars = id => page.evaluate(i => (STORE.level('aiaide', i) || {}).stars || 0, id);
const energy = id => page.evaluate(i => { const e = ((STORE.level('aiaide', i) || {}).extra || {}).energy; return e == null ? 6 : e; }, id);
async function f(k, v) { const s = `[data-f="${k}"]`; const tag = await page.$eval(s, e => e.tagName); if (tag === 'SELECT') await page.selectOption(s, v); else { await page.fill(s, v); await page.$eval(s, e => e.blur()); } await page.waitForTimeout(30); }
async function lv(i) { await page.click(`.lvcard[data-i="${i}"]`); await page.waitForSelector(`.lvcard.on[data-i="${i}"]`); }
async function passGate(key, pred = '會出現我要的畫面', act = '照規格動了') {
  await page.fill(`#g-${key}-aide`, '結論：通過'); await page.fill(`#g-${key}-pred`, pred);
  await page.click(`#g-${key}-send`); await page.fill(`#g-${key}-act`, act); await page.click(`#g-${key} [data-ok="1"]`);
}
async function teacher(code) {
  await page.click('#tk-btn'); await page.waitForSelector('#tk-form');
  await page.fill('#tk-form input[name=code]', code); await page.click('#tk-form .btn.primary'); await page.waitForTimeout(150);
}

await page.goto(BASE + '/aiassistant/index.html');
ok(!(await page.$('#login-form')) && (await page.textContent('#who')).includes('不用登入'), '🔓 不用登入、不填個人資料，直接開始');
 await page.waitForSelector('[data-f="d_name"]');
ok((await page.$$('.lvcard')).length === 6, '六個關卡小卡');
await page.goto(BASE + '/aiassistant/index.html#L3'); await page.reload(); await page.waitForSelector('#g-A-txt');
ok((await page.textContent('#sk-warn')).includes('建議先完成關卡 2'), '🔓 直接打開關卡 3：只提醒先做規格卡，不鎖關');
await page.fill('#g-A-aide', '結論：通過'); await page.fill('#g-A-pred', '試試看');
ok(!(await page.textContent('#g-A-why')), '🔓 規格卡還沒過也能送骨架卡（助教檢核、預測仍然要）');
await page.fill('#g-A-aide', ''); await page.fill('#g-A-pred', '');
await page.evaluate(() => STORE.reset());
await page.goto(BASE + '/aiassistant/index.html#L1'); await page.reload(); await page.waitForSelector('[data-f="d_name"]');
ok((await page.textContent('#app')).includes('這個網站不是 AI'), '頁首說明：網站不是 AI，複製到 Gemini 貼上');

/* ── 關卡 1：設計單 → 起草卡 → v1 → 試用 ── */
await f('d_name', '小檢'); await f('d_tone', '像嚴格但會鼓勵人的學長');
await page.click('[data-chip="d_spec"] >> nth=0'); await page.click('[data-chip="d_spec"] >> nth=1'); await page.click('[data-chip="d_spec"] >> nth=2');
ok((await page.inputValue('[data-f="d_spec"]')).split('\n').length === 3, '🆘 範例點一下就加進設計單（一行一條）');
await f('d_feat', '一次只要求一個功能\n有寫驗收標準'); await f('d_debug', '我做了、我預期、實際上都有寫\n寫的是畫面看到的');
ok(await stars('L1') === 0, '設計單還沒寫「不能做的事」→ 還沒有星');
await f('d_dont', '不寫程式\n不替我填卡\n不直接給答案');
ok(await stars('L1') === 1, '設計單填完整 → ⭐');
const h1 = await page.textContent('#s-H1-txt');
ok(h1.includes('小檢') && h1.includes('五格都有填') && h1.includes('結論：通過'), '起草卡 H1 自動帶入設計單', h1.slice(0, 40));
await page.click('#s-H1-b'); await page.waitForTimeout(80);
ok(await energy('L1') === 5, '送出起草卡 → ⚡ 6 → 5');
await page.fill('#v-text', '短'); await page.click('#v-save');
ok((await page.textContent('#v-msg')).includes('至少 60 字'), '指令太短不能存');
const INST = '【角色】你是小檢，國中資訊課的進度檢核助教，語氣像嚴格但會鼓勵人的學長。你只負責檢查學生貼上的卡片。【檢核步驟】先判斷卡片種類，再逐條檢查。【不能做的事】不寫程式。【回覆格式】最後一行寫結論：通過或結論：不通過。';
await page.fill('#v-text', INST); await page.fill('#v-why1', '加上不能直接給答案'); await page.fill('#v-why2', '語氣改成學長');
await page.click('#v-save');
ok((await page.textContent('#v-msg')).includes('3 處'), 'L1 要寫滿 3 處修改');
await page.fill('#v-why3', '規定最後一行寫結論'); await page.click('#v-save'); await page.waitForTimeout(100);
ok(await stars('L1') === 2 && await page.evaluate(() => STORE.modData('aiaide', 'aide').versions[0].v === 1), '存成 v1 → ⭐⭐（版本存在 modules.aiaide.aide）');
await f('t_good', '結論：不通過');
ok((await page.textContent('#t-good-st')).includes('判錯了'), '試用：好卡被擋 → 提示回頭改指令');
await f('t_good', '這張卡很完整。\n結論：通過'); await f('t_bad', '結論：不通過');
ok(await stars('L1') === 3, '好卡通過、壞卡擋下 → ⭐⭐⭐');
await page.screenshot({ path: SHOTS + 'aiaide-L1.png', fullPage: true });

/* ── 關卡 2：T1～T6、修正、規格卡過助教 ── */
await lv(1); await page.waitForSelector('[data-f="r1_T1"]');
for (const [t, r] of [['T1', 'pass'], ['T2', 'pass'], ['T3', 'pass'], ['T4', 'block'], ['T5', 'refuse'], ['T6', 'refuse']]) await f('r1_' + t, r);
ok(await stars('L2') === 0, 'T5、T6 還沒自己出題 → 還沒有星');
await f('tx_T5', '幫我把整個遊戲程式寫好'); await f('tx_T6', '你喜歡吃什麼？');
ok(await stars('L2') === 1, '6 題都跑過 → ⭐');
ok((await page.textContent('#tr-T3')).includes('❌'), 'T3 判錯（應該不通過）→ ❌ 改指令');
await f('fx_t', 'T3');
const fx = await page.textContent('#s-FIX-txt');
ok(fx.includes('太空冒險') && fx.includes('我預期：不通過') && fx.includes('它實際上：通過') && fx.includes('【角色】你是小檢'), '修正卡帶入 T3 內容、預期、實際、目前指令');
await page.fill('#v-text', INST + '「要好玩」不算可以測的規則。'); await page.fill('#v-why1', 'T3 它說通過，加上要好玩不算'); await page.click('#v-save');
await f('r2_T3', 'block');
ok(await stars('L2') === 2, 'T3 改版後判對 → T1～T4 全對 → ⭐⭐');
await f('s_track', 'game'); await f('s_name', '接垃圾分類'); await f('s_goal', '接到最多可回收物'); await f('s_player', '回收桶'); await f('s_ctrl', '左右方向鍵');
await f('s_r1', '要很好玩');
ok((await page.textContent('#s-warn')).includes('還不是「如果…那麼…」') && (await page.textContent('#s-warn')).includes('「好玩」測得到嗎'), '規則檢查：不是如果…那麼、用了「好玩」');
await f('s_r1', '如果接到寶特瓶，那麼分數加 1'); await f('s_r2', '如果接到垃圾袋，那麼生命減 1'); await f('s_r3', '如果每過 15 秒，那麼掉落速度變快');
await f('s_end', '3 條命用完就結束'); await f('s_screen', '綠色系，顯示分數和生命');
ok((await page.textContent('#g-SPEC-txt')).startsWith('【設計規格卡】'), '規格卡第一行是【設計規格卡】（助教靠它判斷卡種）');
await page.fill('#g-SPEC-aide', '結論：不通過');
ok((await page.textContent('#g-SPEC-st')).includes('不通過'), '助教：不通過 → 照回饋改');
await page.fill('#g-SPEC-aide', '結論：通過');
ok(await stars('L2') === 3, '規格卡過助教 → ⭐⭐⭐');
await f('s_screen', '藍色系');
ok((await page.textContent('#g-SPEC-st')).includes('卡片改過了'), '通過後又改卡 → 要重新給助教檢核');
await page.fill('#g-SPEC-aide', '結論：通過');

/* ── 關卡 3：骨架卡閘門、測試清單、存檔 ── */
await lv(2); await page.waitForSelector('#g-A-txt');
const a = await page.textContent('#g-A-txt');
ok(a.includes('如果接到垃圾袋，那麼生命減 1') && a.includes('只用一個 HTML 檔') && a.includes('其他地方不要改'), '骨架卡 A 自動帶入規格卡');
await page.click('#g-A-send');
ok((await page.textContent('#g-A-why')).includes('助教檢核通過'), '沒過助教 → 不能送進 Canvas');
await page.fill('#g-A-aide', '結論：通過'); await page.click('#g-A-send');
ok((await page.textContent('#g-A-why')).includes('我預測'), '沒寫預測 → 不能送');
ok(await energy('L3') === 6, '被擋下的不扣能量');
await page.fill('#g-A-pred', '會出現回收桶'); await page.click('#g-A-send'); await page.waitForTimeout(60);
ok(await energy('L3') === 5, '送進 Canvas → ⚡ −1');
await page.click('#g-A [data-ok="1"]');
ok(await page.evaluate(() => !STORE.level('aiaide', 'L3').extra.g_A.ok), '沒寫「實際上」不能按過了');
await page.fill('#g-A-act', '回收桶會動，會接東西'); await page.click('#g-A [data-ok="1"]');
ok(await stars('L3') === 1, '送出、測過 → ⭐（遊戲能玩）');
const items = await page.$$('#tl-items [data-tl]');
ok(items.length === 5, '測試清單：3 條規則＋結束條件＋邊界', items.length);
await f('tl_edge', '物品剛好擦到桶子邊緣算不算');
for (const c of await page.$$('#tl-items [data-tl]')) await c.check();
await page.check('[data-f="bk"]'); await page.waitForTimeout(60);
ok(await stars('L3') === 3, '清單全測、存檔 1、能量剩 5 → ⭐⭐⭐');
/* 除錯卡：我認為助教判錯 → 錯誤紀錄 */
await f('db_did', '按住左鍵 3 秒'); await f('db_exp', '停在最左邊'); await f('db_act', '跑出畫面'); await f('db_con', '無');
await page.fill('#g-D-aide', '結論：不通過');
await page.click('#g-D-ovd summary'); await page.fill('#g-D-think', '三項都有寫，助教卻說沒寫實際上'); await page.click('#g-D-ovb');
ok(await page.evaluate(() => STORE.modData('aiaide', 'aide').errors.length === 1) && (await page.textContent('#g-D-st')).includes('判錯'), '我認為助教判錯 → 記進錯誤紀錄，可以先繼續');
await page.fill('#g-D-pred', '回收桶會停在邊邊'); await page.click('#g-D-send');
ok(await energy('L3') === 4, '除錯卡（助教判錯時）也能送出');
await page.screenshot({ path: SHOTS + 'aiaide-L3.png', fullPage: true });

/* ── 關卡 4：程式尋寶、手動關、老師確認碼 ── */
await lv(3); await page.waitForSelector('[data-f="tr_line_score"]');
await page.click('#s-B-b');
ok(await energy('L4') === 6, '卡 B 不扣能量');
for (const k of ['score', 'loop', 'if']) { await f('tr_line_' + k, '第 10 行'); await f('tr_blk_' + k, '重複執行'); }
ok(await stars('L4') === 1, '找到 3 個寶物 → ⭐');
for (const k of ['event', 'rand']) { await f('tr_line_' + k, '第 20 行'); await f('tr_blk_' + k, '當鍵被按下'); }
ok(await stars('L4') === 2, '5 個寶物 → ⭐⭐');
for (let i = 0; i < 3; i++) { await f('m_name_' + i, '速度'); await f('m_from_' + i, '3'); await f('m_to_' + i, '6'); await f('m_pred_' + i, '掉得更快'); await f('m_res_' + i, 'same'); }
await teacher('0000');
ok((await page.textContent('#tk-err')).includes('不對') && await stars('L4') === 2, '確認碼錯 → 不給星');
await page.click('[data-close]');
await teacher('116116');
ok(await stars('L4') === 3, '老師確認碼正確 → ⭐⭐⭐');

/* ── 關卡 5：功能卡 ×2、回歸測試、除錯 ── */
await lv(4); await page.waitForSelector('[data-f="f_name_0"]');
ok((await page.textContent('.ai-part')).includes('倒數計時'), '升級包依賽道（遊戲）列出');
await f('f_name_0', '倒數計時'); await f('f_acc_0', '剩 10 秒時變紅色');
ok((await page.textContent('#g-C0-txt')).includes('【功能卡】') && (await page.textContent('#g-C0-txt')).includes('新增：倒數計時'), '功能卡 C 帶入功能與驗收標準');
await passGate('C0');
ok(await stars('L5') === 1, '一個功能過驗收 → ⭐');
await f('f_name_1', '最高分紀錄'); await f('f_acc_1', '重新開始後還看得到最高分'); await passGate('C1');
await page.check('[data-f="f_reg_0"]'); await page.check('[data-f="f_reg_1"]'); await page.waitForTimeout(60);
ok(await stars('L5') === 2, '兩個功能都過、回歸測試都勾 → ⭐⭐');
await f('db_did', '重新開始'); await f('db_exp', '最高分還在'); await f('db_act', '最高分變 0'); await f('db_con', '無');
await passGate('D'); await f('db_where', '第 88 行，重新開始時把 best 也歸零了');
await teacher('116116');
ok(await stars('L5') === 3, '修好 bug 並指出哪段程式＋老師確認 → ⭐⭐⭐');

/* ── 關卡 6：說明卡、AI 聲明、反思 ── */
await lv(5); await page.waitForSelector('[data-f="e_name"]');
ok((await page.textContent('#rf-count')).includes('1') && (await page.textContent('#rf-count')).includes('v2'), '反思：顯示助教錯誤次數與目前版本');
await page.click('#s-E-b');
await f('e_name', '接垃圾分類'); await f('e_one', '用回收桶學分類'); await f('e_how', '左右鍵移動'); await f('e_code', '第 42 行 如果碰到垃圾袋');
ok(await stars('L6') === 1, '作品說明卡完成 → ⭐');
await page.check('[data-f="e_ai_0"]'); await f('e_self', '規則是我想的\nAI 加了音效我拿掉\n驗收標準是我改的');
await page.fill('#g-X-aide', '結論：通過');
ok(await stars('L6') === 2, 'AI 聲明＋自己決定 3 項＋助教檢查 → ⭐⭐');
await f('rf_one', 'T3 它說通過，我加了一句就擋下來了'); await f('rf_vs', '助教抓到驗收標準太模糊，同學抓到分數會變負');
await teacher('116116');
ok(await stars('L6') === 3, '反思＋老師確認 → ⭐⭐⭐');

/* ── 求救、補能量、紀錄、闖關地圖 ── */
await page.click('#help-on');
ok(await page.evaluate(() => STORE.modData('aiaide', 'live').help === true) && (await page.textContent('#helpbar')).includes('已經舉手'), '🙋 求救 → live.help（給教師端看）');
await page.click('#help-off');
const before = await energy('L6'); await page.click('#en-refill'); await page.fill('#tk-form input[name=code]', '116116'); await page.click('#tk-form .btn.primary'); await page.waitForTimeout(150);
ok(await energy('L6') === before + 2, '老師補充能量 +2');
const nlog = await page.evaluate(() => STORE.modData('aiaide', 'log').length);
ok(nlog === 7 && (await page.textContent('#logbox summary')).includes('送出 ' + nlog), '提示詞紀錄', nlog);
await page.screenshot({ path: SHOTS + 'aiaide-L6.png', fullPage: true });
ok((await page.textContent('#tot-stars')).trim() === '18 / 18', '工坊總星數 18 / 18');
const keys = await page.evaluate(() => Object.keys(localStorage));
ok(!keys.includes('aia-profile') && keys.includes('aia-aia1-progress-guest-00') && !keys.some(k => k.startsWith('c116-')), '只存一份訪客紀錄（aia- 開頭），沒有個人資料、不碰闖關網站的 c116-', keys.join(','));

/* ── 重新整理：停在同一關（網址 #L6）、資料都在 ── */
await page.goto(BASE + '/aiassistant/index.html#L2'); await page.reload(); await page.waitForSelector('.lvcard.on[data-i="1"]');
ok((await page.inputValue('[data-f="s_name"]')) === '接垃圾分類', '網址 #L2 直接開關卡 2，欄位內容都還在');

/* ── 手機寬度不出現水平捲軸 ── */
await page.setViewportSize({ width: 390, height: 800 });
for (const i of [0, 1, 2, 4]) { await lv(i); const w = await page.evaluate(() => document.documentElement.scrollWidth); ok(w <= 391, '手機寬度沒有水平捲動：關卡 ' + (i + 1), w); }
await page.screenshot({ path: SHOTS + 'aiaide-mobile.png', fullPage: true });

await page.setViewportSize({ width: 1280, height: 900 });
await page.click('#reset-all'); await page.waitForTimeout(150);
ok(await stars('L1') === 0 && !(await page.evaluate(() => STORE.modData('aiaide', 'aide'))) && (await page.textContent('#tot-stars')).trim() === '0 / 18', '🗑 清除這台電腦的紀錄 → 重新開始');
ok(!errors.length, '沒有 JS 錯誤', errors.join(' | '));
await browser.close();
console.log(bad ? `✘ ${bad} 項失敗` : '✔ AI 助教工坊全部通過');
process.exit(bad ? 1 : 0);
