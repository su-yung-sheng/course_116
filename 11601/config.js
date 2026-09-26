/* =====================================================================
   116-1 上學期設定（單一來源）
   ---------------------------------------------------------------------
   ★ 換學期、改單元名稱、改星數……只改這一支。
   ★ 每個頁面在其他 <script> 之前先載入：<script src="config.js"></script>
   ★ 11602/config.js 結構完全相同，差別只在內容。
   ===================================================================== */
window.CONFIG = {
  TERM: '11601',
  SCHOOL: '前峰國中 九年級',
  //   第 1 週的星期一（⚠️ 依 116 學年度行事曆確認後再改）
  TERM_START: '2027-08-30',
  HUB_PAGE: 'hub.html',

  /* Python 執行環境（Pyodide）
     ⚠️ 學校網路擋 CDN 時：把 pyodide 整包放到 shared/pyodide/，
        這裡改成 '../shared/pyodide/'（結尾要有斜線）。 */
  PYODIDE_URL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',

  /* 備課用總開關：把 Python 的「依序開放」整個關掉。
     ⚠️ 一定要留到期日 —— 過了那天自動失效（「記得關掉」不是機制，是願望）。 */
  OPEN_ALL_UNITS: false,
  OPEN_ALL_UNTIL: '2027-08-15',

  /* 闖關地圖的卡片（順序即顯示順序）
     maxStars 是進度條的分母，一定要和這門課真的能拿到的星數一致。 */
  MODULES: [
    { id: 'digital', no: '一', title: '數位時代', sub: '0 與 1 的藝術', icon: '💾', color: 'u1',
      href: 'digital/index.html', maxStars: 12, levels: ['u1', 'u2', 'u3', 'u4'],
      desc: '二進位、文字編碼、聲音與影像的取樣和量化，四個互動實驗站。', chapter: '第 1 章',
      /* 四課的課程小卡（href 相對於 digital/ 資料夾；進度都存在 digital 模組；color 和各課內容的主色一致） */
      parts: [
        { id: 'd1', mod: 'digital', levels: ['u1'], maxStars: 3, color: '#2563eb', bg: '#eff6ff', icon: '🔢', title: '1-1 二進位原理', ds: '位元、權值，十進位與二進位互換', href: '1.html' },
        { id: 'd2', mod: 'digital', levels: ['u2'], maxStars: 3, color: '#4f46e5', bg: '#eef2ff', icon: '🔤', title: '1-2 文字數位化', ds: '摩斯電碼、ASCII、Big-5、Unicode', href: '2.html' },
        { id: 'd3', mod: 'digital', levels: ['u3'], maxStars: 3, color: '#0d9488', bg: '#f0fdfa', icon: '🎵', title: '1-3 音訊數位化', ds: '聲波、取樣頻率、量化位元', href: '3.html' },
        { id: 'd4', mod: 'digital', levels: ['u4'], maxStars: 3, color: '#e11d48', bg: '#fff1f2', icon: '🖼️', title: '1-4 影像數位化', ds: '像素、解析度、色彩與壓縮', href: '4.html' }
      ] },
    { id: 'python', no: '二', title: '進入 Python 的世界', sub: '畢旅籌備處・10 個任務', icon: '🐍', color: 'u2',
      href: 'python.html', maxStars: 30, levels: ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10'], sequential: true,
      desc: '在瀏覽器裡直接寫 Python，送出後用測資自動評分。拿到 2 星才開下一關。', chapter: '第 2 章' },
    { id: 'platform', no: '三', title: '系統平臺大冒險', sub: '8 個互動體驗遊戲', icon: '🖥️', color: 'u3',
      href: 'platform.html', maxStars: 24, levels: ['G1','G2','G3','G4','G5','G6','G7','G8'],
      desc: '組電腦、當作業系統總管、開電腦急診室、經營雲端披薩店。', chapter: '第 3 章' },
    { id: 'arduino', no: '＋', title: '5016B 專題：AIoT 智慧教室守護站', sub: '延伸挑戰・五節', icon: '💡', color: 'u4',
      href: '5016b.html', maxStars: 0, levels: ['S1','S2','S3','S4','S5'],
      desc: '感測器取樣、條件判斷、主迴圈、資料上雲端，最後做出自己的教室小幫手。', chapter: '跨章專題' }
  ],

  /* 稱號（依總星數）── 遊戲化：學生看得到自己「升級」 */
  RANKS: [
    [0,  '🥚 數位新鮮人'],
    [10, '🐣 位元見習生'],
    [22, '🐥 程式學徒'],
    [36, '🦅 系統工程師'],
    [50, '🐉 資訊架構師'],
    [62, '👑 九年級傳說']
  ]
};
