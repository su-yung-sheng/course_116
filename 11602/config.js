/* =====================================================================
   116-2 下學期設定（單一來源）
   ---------------------------------------------------------------------
   ★ 換學期、改單元名稱、改星數……只改這一支。
   ★ 每個頁面在其他 <script> 之前先載入：<script src="config.js"></script>
   ★ 11602/config.js 結構完全相同，差別只在內容。
   ===================================================================== */
window.CONFIG = {
  TERM: '11602',
  SCHOOL: '前峰國中 九年級',
  //   第 1 週的星期一（⚠️ 依 116 學年度行事曆確認後再改）
  TERM_START: '2028-02-14',
  HUB_PAGE: 'hub.html',

  /* Python 執行環境（Pyodide）—— 下學期的密碼特務改成不寫程式的互動版，目前沒有頁面用到；保留給之後擴充
     ⚠️ 學校網路擋 CDN 時：把 pyodide 整包放到 shared/pyodide/，
        這裡改成 '../shared/pyodide/'（結尾要有斜線）。 */
  PYODIDE_URL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',

  /* 備課用總開關：把「依序開放」（密碼特務）整個關掉。
     ⚠️ 一定要留到期日 —— 過了那天自動失效（「記得關掉」不是機制，是願望）。 */
  OPEN_ALL_UNITS: false,
  OPEN_ALL_UNTIL: '2028-02-01',

  /* 闖關地圖的卡片（順序即顯示順序）
     maxStars 是進度條的分母，一定要和這門課真的能拿到的星數一致。 */
  MODULES: [
    { id: 'media', no: '四', title: '多媒體專題：30 秒廣告', sub: '4 個概念關卡＋6 個 AI 素養關卡＋好好用 AI 廣告工作站', icon: '🎬', color: 'u1',
      href: 'media.html', maxStars: 30, levels: ['M1', 'M2', 'M3', 'M4', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'W1', 'W2', 'W3', 'W4', 'W5'],
      desc: '學會「好好用 AI」：和 AI 一起發想主角、寫三句文案、規劃鏡頭和配樂，最後自己實拍剪輯一支 30 秒廣告，讓平凡物品變主角。', chapter: '第 1 章' },
    { id: 'network', no: '五', title: '網路世界', sub: '7 個互動體驗遊戲', icon: '🌐', color: 'u2',
      href: 'network.html', maxStars: 21, levels: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7'],
      desc: '封包快遞、IP 位址偵探、網址拆解、無線網路選手，還有結帳時「嗶」的祕密。', chapter: '第 2 章' },
    /* 單元六：三個部分包成一張課程小卡（parts）。單元首頁 unit6.html 再分成三張小卡；
       各部分的進度仍存在自己的 id（data／sheet／cipher），闖關地圖把它們加起來。 */
    { id: 'unit6', no: '六', title: '進階資料處理', sub: '資料偵探 → 試算表實作 → 密碼特務', icon: '🗂️', color: 'u3',
      href: 'unit6.html', maxStars: 45, chapter: '第 3 章',
      levels: ['D1', 'D2', 'D3', 'D4', 'T1', 'T2', 'T3', 'T4', 'T5', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6'],
      desc: '看懂 → 動手 → 挑戰：先認識大數據與資料清理，再用小試算表寫公式統計，最後當密碼特務（🎲 每次隨機出題）。',
      parts: [
        { id: 'data', icon: '🕵️', title: '資料偵探', ds: '大數據 5V、資料清理、檔案轉換、凱薩與維吉尼亞入門', href: 'data.html',
          maxStars: 12, levels: ['D1', 'D2', 'D3', 'D4'] },
        { id: 'sheet', icon: '📊', title: '試算表實作', ds: '在網頁裡寫 SUM、AVERAGE、COUNTIF，清理資料再統計', href: 'sheet.html',
          maxStars: 15, levels: ['T1', 'T2', 'T3', 'T4', 'T5'] },
        { id: 'cipher', icon: '🔐', title: '密碼特務', ds: '不寫程式：加密、解密、暴力破解、答題統計，🎲 每次隨機', href: 'cipher.html',
          maxStars: 18, levels: ['K1', 'K2', 'K3', 'K4', 'K5', 'K6'], sequential: true }
      ] },
    { id: 'arduino', no: '＋', title: '5016B 專題：守護站 2.0 連上網路', sub: '延伸挑戰・五節', icon: '💡', color: 'u4',
      href: '5016b.html', maxStars: 0, levels: ['S1', 'S2', 'S3', 'S4', 'S5'],
      desc: '幫上學期的智慧教室守護站選無線技術、分配 IP、傳封包、加密上傳，做出連網小幫手。', chapter: '跨章專題' }
  ],

  /* 稱號（依總星數，下學期滿分 96：單元四 30＋網路 21＋資料 12＋試算表 15＋密碼特務 18）── 遊戲化：學生看得到自己「升級」 */
  RANKS: [
    [0,  '🎒 畢業倒數中'],
    [15, '🤖 AI 見習生'],
    [32, '📡 網路探險家'],
    [52, '🕵️ 資料偵探'],
    [72, '🔐 密碼特務'],
    [88, '🎓 畢業傳說']
  ]
};
