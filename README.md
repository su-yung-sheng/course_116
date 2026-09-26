# course_116 · 116 學年度九年級資訊科技課程系統

九年級資訊科技闖關學習網站。延續 [course_115](https://github.com/su-yung-sheng/course_115) 的架構：
**一個 repo、一套 `shared/`，服務上下兩個學期**；兩學期資料夾結構相同，差別只在 `config.js` 與 `content/`。

- 總入口 `index.html`（依日期倒數 3 秒導向，可取消；`?term=11601` 直接進、`?stay` 停留）
- 上學期 `11601/hub.html`
- 下學期 `11602/hub.html`

---

## 📚 116-1 上學期有哪些課

| 單元 | 頁面 | 課本 | 星數 | 內容 |
|---|---|---|---|---|
| 💾 一 數位時代 | `digital/` | 第 1 章 | 12 | 二進位、文字、聲音、影像四個互動實驗站（[unforte_114](https://github.com/byte-core-su/unforte_114) 移植） |
| 🐍 二 進入 Python 的世界 | `python.html` | 第 2 章 | 30 | 「畢旅籌備處」10 個任務，**瀏覽器內執行＋測資自動評分**，2⭐ 開下一關 |
| 🖥️ 三 系統平臺大冒險 | `platform.html` | 第 3 章 | 24 | 8 個互動體驗遊戲：分類局、組電腦、OS 總管、電腦急診室、雲端披薩店… |
| 💡 5016B 專題 | `5016b.html` | 跨章 | **0** | AIoT 智慧教室守護站：取樣、if 警示燈、節能風扇、資料上雲端、專題成果卡 |

## 📚 116-2 下學期有哪些課

| 單元 | 頁面 | 課本 | 星數 | 內容 |
|---|---|---|---|---|
| 🎬 四 多媒體專題：30 秒廣告 | `media.html` | 3下 第 1 章 | 12 | 概念闖關 ＋ 看示範（手法拆解）＋ 🤖 AI 前導關（骨架）＋ 廣告工作站（選題 → AI 文案 → 鏡頭清單 → 實拍 → 試看修正 → 說明卡） |
| 🌐 五 網路世界 | `network.html` | 3下 第 2 章 | 21 | 7 個遊戲：封包快遞、IP 位址偵探、網址拆解、無線網路選手… |
| 🕵️ 六 資料偵探與密碼 | `data.html` | 3下 第 3 章 | 12 | 大數據 5V、資料清理、ODF 與壓縮、凱薩／維吉尼亞解謎 |
| 📊 六 試算表實作 | `sheet.html` | 3下 第 3 章 | 15 | 網頁裡的小試算表，SUM／AVERAGE／COUNTIF **公式自動評分**、資料清理 |
| 🐍 六 Python 密碼特務 | `python.html` | 3-2 × 上學期 Python | 18 | 把凱薩密碼寫成程式，最後做答題統計，2⭐ 開下一關 |
| 💡 5016B 守護站 2.0 | `5016b.html` | 跨章 | **0** | 選無線技術、私有 IP、封包重送、加密上傳、連網小幫手成果卡 |

完整規劃（關卡表、計星規則、建議週次）：**[docs/01_課程規劃.md](docs/01_課程規劃.md)**

## 📄 文件

| 主題 | 檔案 |
|---|---|
| 課程規劃（兩學期各單元＋5016B 的關卡與計星） | [docs/01_課程規劃.md](docs/01_課程規劃.md) |
| 系統架構、進度 API、接回 Firebase 的步驟 | [docs/02_系統架構.md](docs/02_系統架構.md) |
| Python 評分規格（測資寫法、錯誤翻譯機） | [docs/03_Python評分規格.md](docs/03_Python評分規格.md) |

## ⚠️ 目前是「可運作骨架」（本機版）

進度存在瀏覽器的 localStorage，登入只填班級／座號／姓名。**可以直接上課試用**，但：

- 電腦教室有還原卡 → 關機進度就清掉（學生可先按「下載我的進度」帶走）
- 沒有教師端、沒有學期鎖

正式上課前要把 `shared/store.js` 換成 course_115 的 Google 登入＋Firestore 版本 —— **API 不變，各頁面不用改**。步驟見 `docs/02_系統架構.md`。

## 🛠️ 改內容看這裡

> 🔒 **有答案的內容一律改 `private/`，改完執行 `node tools/build.mjs`**，它會產生封存版的 `content/*.js` 等公開檔案。
> 公開檔案裡的 `content/*.js` 是自動產生的，**不要直接改**（下次建置會被蓋掉）。`private/` 不會進 Git，**請自己備份**。詳見 `docs/05_安全性.md`。

| 要改什麼 | 改哪支 |
|---|---|
| 單元名稱、星數、稱號、Pyodide 位置、備課全開 | `{學期}/config.js` |
| Python 關卡、測資、提示、Scratch 對照 | `private/{學期}/content/python.js` → 建置 |
| 互動遊戲的題目與說明 | `private/11601/content/platform.js`、`private/11602/content/{media,network,data}.js` → 建置 |
| 試算表關卡的資料與公式 | `private/11602/content/sheet.js` → 建置 |
| 專題工作站的步驟與檢核項目 | `private/11602/content/media.js` 的 `MEDIA_STEPS` → 建置 |
| 5016B 檢核的正確選項與解說 | `private/{學期}/lab.js` → 建置 |
| 5016B 五節內容（題目、選項、模擬器） | `{學期}/5016b.html` 裡的 `SECTIONS`（不放答案） |
| 單元一快速檢核的對錯與提示 | `private/11601/digital/review.json` → 建置 |
| 全站配色 | `shared/theme.css` |

建置（需要 Node.js 18 以上）：

```
node tools/build.mjs          ← 在 repo 根目錄；讀 private/，寫出封存後的公開檔案
```

## 🔍 本機預覽與測試

```
python -m http.server 8116        ← 在 repo 根目錄，開 http://localhost:8116/
```

不要直接雙擊 HTML：`file://` 下 Web Worker 會被擋，Python 引擎起不來。

自動測試（Playwright；CDN 會導到本機檔案，不需要連網）：

```
cd tests
npm install
npx playwright install chromium
npm test
```

`npm test` 第一步是 `leak_scan.mjs`：把 `private/` 裡的正解、解說、提示、標準公式逐段拿去比對公開檔案，發現明碼就失敗 —— **推送前跑一次**。

涵蓋：兩學期 16 關 Python 參考解答都拿 3⭐、11 種「不該滿分」的寫法被擋下、12 種錯誤翻譯、無窮迴圈會被砍掉且引擎自動恢復；
23 個遊戲關卡都能 3⭐ 通關、愛心歸零；試算表公式計算與 5 關評分（含寫死數字被擋、資料清理）；
30 秒廣告工作站五個步驟（含看示範、AI 前導關）；兩學期 5016B 十節的預測檢核與成果卡；單元一進度掛鉤；12 個頁面在手機寬度沒有橫向捲動。

## 📄 授權

同 course_115：**CC BY-NC-SA 4.0**。翰林課本內容不在授權範圍內（註解裡的頁碼只是備課對照）。
單元一的互動頁面來自 byte-core-su/unforte_114。
