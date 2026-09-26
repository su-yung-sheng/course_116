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

  /* Python 執行環境（Pyodide）
     ⚠️ 學校網路擋 CDN 時：把 pyodide 整包放到 shared/pyodide/，
        這裡改成 '../shared/pyodide/'（結尾要有斜線）。 */
  PYODIDE_URL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',

  /* 備課用總開關：把 Python 的「依序開放」整個關掉。
     ⚠️ 一定要留到期日 —— 過了那天自動失效（「記得關掉」不是機制，是願望）。 */
  OPEN_ALL_UNITS: false,
  OPEN_ALL_UNTIL: '2028-02-01',

  /* 闖關地圖的卡片（順序即顯示順序）
     maxStars 是進度條的分母，一定要和這門課真的能拿到的星數一致。 */
  MODULES: [
    { id: 'media', no: '四', title: '多媒體專題：30 秒廣告', sub: '4 個概念關卡＋AI 前導關＋好好用 AI 廣告工作站', icon: '🎬', color: 'u1',
      href: 'media.html', maxStars: 12, levels: ['M1', 'M2', 'M3', 'M4', 'W1', 'W2', 'W3', 'W4', 'W5'],
      desc: '學會「好好用 AI」：和 AI 一起發想主角、寫三句文案、規劃鏡頭和配樂，最後自己實拍剪輯一支 30 秒廣告，讓平凡物品變主角。', chapter: '第 1 章' },
    { id: 'network', no: '五', title: '網路世界', sub: '7 個互動體驗遊戲', icon: '🌐', color: 'u3',
      href: 'network.html', maxStars: 21, levels: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7'],
      desc: '封包快遞、IP 位址偵探、網址拆解、無線網路選手，還有結帳時「嗶」的祕密。', chapter: '第 2 章' },
    { id: 'data', no: '六', title: '資料偵探與密碼', sub: '4 個概念關卡', icon: '🕵️', color: 'u2',
      href: 'data.html', maxStars: 12, levels: ['D1', 'D2', 'D3', 'D4'],
      desc: '大數據 5V、資料清理、開放文件格式與壓縮，最後用凱薩和維吉尼亞密碼解謎。', chapter: '第 3 章' },
    { id: 'sheet', no: '六', title: '試算表實作', sub: '5 關・公式自動評分', icon: '📊', color: 'u2',
      href: 'sheet.html', maxStars: 15, levels: ['T1', 'T2', 'T3', 'T4', 'T5'],
      desc: '在網頁裡的小試算表寫 SUM、AVERAGE、COUNTIF，清理資料，最後統計模擬考答題。', chapter: '第 3 章' },
    { id: 'python', no: '六', title: 'Python 密碼特務', sub: '6 個任務・延續上學期', icon: '🐍', color: 'u2',
      href: 'python.html', maxStars: 18, levels: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6'], sequential: true,
      desc: '把凱薩密碼寫成 Python 程式，最後用程式做答題統計（Python 版的 COUNTIF）。2 星開下一關。', chapter: '第 3 章' },
    { id: 'arduino', no: '＋', title: '5016B 專題：守護站 2.0 連上網路', sub: '延伸挑戰・五節', icon: '💡', color: 'u4',
      href: '5016b.html', maxStars: 0, levels: ['S1', 'S2', 'S3', 'S4', 'S5'],
      desc: '幫上學期的智慧教室守護站選無線技術、分配 IP、傳封包、加密上傳，做出連網小幫手。', chapter: '跨章專題' }
  ],

  /* 稱號（依總星數，下學期滿分 78）── 遊戲化：學生看得到自己「升級」 */
  RANKS: [
    [0,  '🎒 畢業倒數中'],
    [12, '🎬 剪輯新手'],
    [26, '📡 網路探險家'],
    [42, '🕵️ 資料偵探'],
    [58, '🔐 密碼特務'],
    [72, '🎓 畢業傳說']
  ]
};
