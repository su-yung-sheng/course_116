/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/media.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.MEDIA_LEVELS = [
 {
  "id": "M1",
  "icon": "📺",
  "title": "畫質標示解碼",
  "book": "1-1 解析度、每秒影格數、掃描方式",
  "learn": "影片畫質常用「<b>解析度＋掃描方式＋每秒影格數</b>」來標示，例如 <code>1080p 30fps</code>。<ul><li>🔲 <b>解析度</b>：畫面有多少像素（水平 × 垂直），常用垂直的數字簡稱。SD 480p（720×480）、HD 720p（1280×720）、Full HD 1080p（1920×1080）、4K 2160p（3840×2160）、8K 4320p（7680×4320）。<span class=\"hl\">數字越大畫質越好，檔案也越大</span></li><li>🎞️ <b>每秒影格數（fps）</b>：一秒鐘分成幾張畫面，數字越大越流暢</li><li>↕️ <b>掃描方式</b>：<b>p 逐行掃描</b>每一格都是完整畫面（現在的主流）；<b>i 隔行掃描</b>每一格只有奇數或偶數行，靠視覺暫留拼成完整畫面</li></ul>還記得上學期的「影像數位化」嗎？解析度就是影像的取樣，影片只是一秒鐘連續播好幾十張。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這個解析度屬於哪一級？",
    "buckets": [
     {
      "id": "sd",
      "label": "SD 標準",
      "icon": "📼"
     },
     {
      "id": "hd",
      "label": "HD 高解析",
      "icon": "📺"
     },
     {
      "id": "uhd",
      "label": "UHD 超高解析",
      "icon": "🖥️"
     }
    ],
    "items": [
     {
      "t": "720 × 480（480p）",
      "icon": "🔲",
      "s": "4a1121cecc0daa21",
      "e": "oUt3e6ULTDooYGvyGNVTusbCkgR3E6sf4CxjMePRmCCJaKiMlM4a4EYat+AP8Wklod8iMuPmaWdYXzCn4sITSuCIkTIdmTauoYONPmExBqE480hQLvZG1h5MPw=="
     },
     {
      "t": "1280 × 720（720p）",
      "icon": "🔲",
      "s": "c4aef51e2e62904d",
      "e": "PkLQT1gj4o2twO5PCyKTji/q99vk2c7qo+qVcaozffSeWZumxJB44yJlVc3TQRHTPlPDDbUD5xty+36B3w=="
     },
     {
      "t": "1920 × 1080（1080p）",
      "icon": "🔲",
      "s": "c1ef21b4e1dfac9b",
      "e": "npVyh5xLm4+z9rRgSeJV6erVb92VILPwKAuaY3Xsk0l6l1MpOyTk52GTqm+/HqJho1BdJfLdfOnuR/lmO0hdKqRtEJsKvbrhZEWvvEsMnTFTEGgl9Ko="
     },
     {
      "t": "3840 × 2160（2160p）",
      "icon": "🔲",
      "s": "be91835d4cdeeec0",
      "e": "x6pVD+SUXHF7zegLwrfU55Aqh7P6AERyKNE/2Snbp/+ofFYPRkBZ3zCVBpICK0XHtw8rE9LFShJ3y0u8SGh61giYFwN/"
     },
     {
      "t": "7680 × 4320（4320p）",
      "icon": "🔲",
      "s": "85427fbe3bf9598a",
      "e": "n4HsdSpOqokchc1GTlxWtSQnIcZoPrjv/2RKU8VHa4uUfOvLfq/j2Y/PDvUprvUUCt4m1ZBHEFw1H8BpbmG2uObN96xB24w="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把解析度從低排到高",
    "hint": "依序點選：先點畫質最低的。",
    "s": "2e4872bf732d7ca1",
    "items": [
     {
      "t": "1080p",
      "icon": "📺"
     },
     {
      "t": "4320p",
      "icon": "🖥️"
     },
     {
      "t": "720p",
      "icon": "📺"
     },
     {
      "t": "480p",
      "icon": "📼"
     },
     {
      "t": "2160p",
      "icon": "🖥️"
     }
    ],
    "seq": [
     "/myZrHhxNyrnnKWsOXOQRIAMi3lJA24hBS10dqf3",
     "cL2NTzoa0u1zm4XsCNK8gr6JDKCBSBIc9WJL3lZh",
     "R83704H5FtzStRw76XBtlG1CqGG/kk13Pqqmc9Qz",
     "1RDZwq6YR0uBg9kHE2RTQv1HBN3xgfNPoJbjakya",
     "YRImAmxUsmoPkLaUDTPaXmBFJkK8Kgvpx3KL/TkaQyi+ZRWRyLrT9j/mRDe5VeTQZl29J8dEUjlrlBObYIydyjrsEinrX3dkDQG8Mt3Lv+uR71urrxFa21pJKVGLxlE="
    ]
   },
   {
    "type": "sort",
    "prompt": "看標示回答：這是哪一種掃描方式？",
    "buckets": [
     {
      "id": "p",
      "label": "逐行掃描 p",
      "icon": "▤"
     },
     {
      "id": "i",
      "label": "隔行掃描 i",
      "icon": "▥"
     }
    ],
    "items": [
     {
      "t": "1080p 30fps",
      "icon": "🎞️",
      "s": "744596230aa5fc95",
      "e": "p2yaGzzdq1S7TFKUHa2MVjET/V4i9ehT26TgPMecTR0IqULhpD9rFJJgQqwEqIJ7+SbvpAzlnACubyF8HY9ZMoyZV642Id4ZOcbTDAnriDCugkZYk7JcH4EErUaqwqBvap3wiGV8nw=="
     },
     {
      "t": "1080i 60fps",
      "icon": "🎞️",
      "s": "b6f50caf14814cd8",
      "e": "vB1g1gmh9x3fhKpndtKrf5bx7Mru6t5BydVba11JmGsevSHnp+Em8TGopW8fuu1TMYON04dPAk6Ilw6S15BuiLgqyygiwRiUN1o8b3um/RIFmPHaEulhzvG0hq0tDpxMpeQJbODR"
     },
     {
      "t": "每一格畫面都是完整的，現在的主流",
      "icon": "✅",
      "s": "d0cd557ac366d49d",
      "e": "ldrds59HvipQm7VArc39MFp3suWUNuoTQ4ngL6wyjydjMkTF5ko+l0SHRE9GaRKiX3rJj12foFmlnOmeOvq/kMmcKxo="
     },
     {
      "t": "奇數行、偶數行輪流顯示，靠視覺暫留拼起來",
      "icon": "👀",
      "s": "c4e5db7b089c91fd",
      "e": "7rdyhR3WwuxAepg+N3RfK6NOu7y5EsjZTskQjIwbhrDBGNN9STBV4XstwxBzMQQU6BASklA5SDNe9hVAJ78fryWTfVsuWFs="
     }
    ]
   }
  ]
 },
 {
  "id": "M2",
  "icon": "📦",
  "title": "影片格式偵探",
  "book": "1-1 影片格式：編解碼標準、影片容器",
  "learn": "一支影片檔其實有兩層：<ul><li>⚙️ <b>編解碼標準</b>：怎麼把畫面和聲音<span class=\"hl\">編碼壓縮</span>，常見有 H.264、MPEG-4</li><li>📦 <b>影片容器</b>：把編碼好的影像、聲音<span class=\"hl\">包裝在一起</span>的檔案格式，也就是副檔名，常見有 .mp4、.wmv、.mov</li></ul>所以「.mp4」不代表畫質，它只是箱子；箱子裡用什麼方法壓縮才決定畫質和大小。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是編解碼標準，還是影片容器（副檔名）？",
    "buckets": [
     {
      "id": "codec",
      "label": "編解碼標準",
      "icon": "⚙️"
     },
     {
      "id": "box",
      "label": "影片容器",
      "icon": "📦"
     }
    ],
    "items": [
     {
      "t": "H.264",
      "icon": "🔧",
      "s": "e38384fb6c9c3a66",
      "e": "XIwKA1XgSnHLvTndTvXE1fkHFptLzmMsoGFL0yHkOIkXZCjGpXD7sfnQGyPTxEJeTlIbKYV20ZKkyBwYKIZ2DiE66M5Fm0vYU/ywDfreYFI="
     },
     {
      "t": "MPEG-4",
      "icon": "🔧",
      "s": "d7cf9d5cebaebaf8",
      "e": "nlkakIv7ZsOcnTngsqIKprCjoRkmbb6pULY+akhVxwdO5IA2jzw8ZdIwvjBZnkBIklu4d24HAG0qr7fkcoU24eoeV7IP"
     },
     {
      "t": "水壺廣告.mp4",
      "icon": "🎬",
      "s": "2573b915c02334e1",
      "e": "sH1ye3uYuFG9U0JSqNp+rk86lhaAO6GbiMVbY3Af5nU1CeBNMkmn5oiBnoWlUXHq18m0qdmSuHBi6k8PSIyThcSS9Fknoea7ndB+/w=="
     },
     {
      "t": "家庭錄影.mov",
      "icon": "🎬",
      "s": "ad6756acab62bc4d",
      "e": "q58WvqY+AUdl+fMX7OB969t4nXg1XeF1f0TRlS4IL9pKcZajFsgdfRDUugOWnKa32TNuYI0gGG2Guike79TztdARizucRXBzhtVbBg=="
     },
     {
      "t": "簡報錄影.wmv",
      "icon": "🎬",
      "s": "ece6f8135fac3d42",
      "e": "yorhihNPxBM9xsFbomH1fjrCHbJ3BnGHiT77SQPvy5ntqeVZCcQD7Ib/S30nK+WUd4dk0vEF32PE99fBbf/lbpveTUDTG+ZS5z/KzEAOPw=="
     }
    ]
   },
   {
    "type": "type",
    "prompt": "動畫的祕密：視覺暫留",
    "items": [
     {
      "t": "電影通常把一秒分成至少幾格畫面？",
      "icon": "🎞️",
      "ph": "輸入數字",
      "s": "e40951fc4287a4c8",
      "e": [
       "RHEzprKVpZhtEiDF8RdlWCF3Z8pXKVYyWo/xLDfURC0RdKFazB4jYUr8xEMeUzwqr1mMhKuysBOzpMNBoPZMD5Rhmg5yLlKnudvy3yAjDB6zarizpBbFf0pwM8GPIsiHX8ZJE3KWj/Pco5XJiHo/6+TcutRN6HrRwu6D2Gufc6k="
      ]
     },
     {
      "t": "一支 10 秒的 30fps 影片，總共有幾格畫面？",
      "icon": "🧮",
      "ph": "輸入數字",
      "hint": "fps 是「每秒幾格」。",
      "s": "477d57288ad8c7c2",
      "e": [
       "fs0spmRas/GQ1KI/ZQ1j7yRs/pAR/W+2J5dGmhoHyke/Q4N8OFPfhFV9MXrMWOpz9AXzvR0Mec0d8Ae1CAlnAKtwyeUiDL1ALMpXasallTnaMOZJ+6vh"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "M3",
  "icon": "🎚️",
  "title": "時間軸剪輯師",
  "book": "1-1 剪輯實作、1-2 多重軌道",
  "learn": "剪輯軟體（課本用 <b>Shotcut</b>）的核心是<b>時間軸</b>：由左到右是時間，由上到下是<b>軌道</b>。<ul><li>🖼️ <b>影像軌道</b>：<span class=\"hl\">上層的畫面會蓋住下層</span> —— 所以文字、小畫面、去背貼圖要放上層</li><li>🔊 <b>音訊軌道</b>：聲音不會互相蓋住，會一起播放</li><li>利用多軌道可以做<b>子母畫面</b>、加上<b>文字</b>和<b>配樂</b></li></ul>剪輯前先把素材<span class=\"hl\">依出場順序編號命名</span>（01_特寫.mp4、02_遠景.mp4…），匯入後就會自動排好。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這個素材要放在哪一條軌道？",
    "buckets": [
     {
      "id": "top",
      "label": "上層影像軌",
      "icon": "⬆️"
     },
     {
      "id": "bottom",
      "label": "下層影像軌",
      "icon": "⬇️"
     },
     {
      "id": "audio",
      "label": "音訊軌",
      "icon": "🔊"
     }
    ],
    "items": [
     {
      "t": "整支影片的主畫面（物品使用的片段）",
      "icon": "🎬",
      "s": "7c52f5727a0938e3",
      "e": "tCO5HPaXcC54zw+lnCcxXFwYPpYpC3kN2XjNwZ68OR6QroHbjjEqsuuGMTFFzoWRcENTT0VaiiE29sunFU5iZ4dj4SkJraWnUVNCzJmdRYr5l2ewzFLFMD3yjozQJyk="
     },
     {
      "t": "子母畫面裡右下角的小畫面",
      "icon": "🔳",
      "s": "6dee1e6f01a6cf92",
      "e": "gL0fdSPckWzoZprEKNXtY+a3bmja59I4IWYevoFEJDKZLiUilVKTvdzQLDZfjoRo67pIWbBcw0qJcEnw3PN0rSIfl4pqa9NELSUAAzGJ8+xskpE="
     },
     {
      "t": "結尾的主標語字幕",
      "icon": "🔤",
      "s": "6c83a0264b138767",
      "e": "m4ZSgl6T1D0Zfcvv0C/maJfF6XzT9HcpefrTOCVbhSmk7pBBYHyJjB7xMLZRyXYwuYjTMH4ilZUhwtoYZNKOqwPjkj1UmhEchM6aCvBxQTL+LBun3WKMQSY="
     },
     {
      "t": "透明去背的品牌小圖示 PNG",
      "icon": "🛡️",
      "s": "af15c1f934ec9816",
      "e": "KG9+NiKndCPQTFADvauqSXDy088lZP1oTcnDiR1n0GAmxtASlQkw4UfwFdqe43q1o32ZVboFFJ/TzYtsl3cUz+sk8vbbpSWslvsk2slqEKmDEV5ChtiTqPHz0RA2xUypjHM="
     },
     {
      "t": "背景音樂",
      "icon": "🎵",
      "s": "f6736f57bde4cfc5",
      "e": "ll1IjAt1Wd4goTbHeDiKhHpSJvptAGH8b+gYRj/IABaZ5lB5TzGB84up3Ks2c2nCIEQW79Jcoj2avY8="
     },
     {
      "t": "介紹特色的旁白錄音",
      "icon": "🎙️",
      "s": "eff9ba505945e6d5",
      "e": "iWKTtoaeh05R6FDOm2JS95CJpvG/nTVi3uhWf0By2INjNK+Q6CD1uLJIZF//fXBXyUqnKt8J8NleS4zdkFo8+tq73MXcaKqb3qM0dq7oxbe5ambf+ZOfadVzgMN87X/Ppas="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把做廣告影片的步驟排好",
    "hint": "依序點選：先點第一步。",
    "s": "84de8b1018e88b1c",
    "items": [
     {
      "t": "預覽檢查後匯出影片",
      "icon": "📤"
     },
     {
      "t": "裁切長度、加上轉場",
      "icon": "✂️"
     },
     {
      "t": "濾鏡、文字、配樂等後製",
      "icon": "✨"
     },
     {
      "t": "選題、寫文案和鏡頭清單",
      "icon": "📝"
     },
     {
      "t": "拍攝片段並依順序編號命名",
      "icon": "🗂️"
     },
     {
      "t": "匯入 Shotcut、排到時間軸",
      "icon": "🎚️"
     }
    ],
    "seq": [
     "Z0j1sUSSJPi2r7BEYjFfnF551hV3WfNhcKHVmXEZ",
     "TxwiiEfak02/gGJsyvMaCLS2H9Wjbp2Ov+zi6Siw",
     "w9P23rTuUrwgY0ULxXnTcOHH8zgU4SCevopqZMZp",
     "MuoAnyY9Waxe2/cla7fky5ZxSgylfa9xCvtK6X47",
     "bk/ljxCISWkLJwnPk7fJ9qq/TlbNH/WkoGZWgYcb",
     "X4q+fLGD3kL78sZWj9O9iGNWN8XpZVfc5sH2A6B0LhLygUSlmJ03wV0UjSx+n76uU+tYL6Fdjs9umPqQpLAiDn8xtannQUcz7BwqD6P1ITiygaCAaxQsJ7hCFLfadFuIeLbK5FSfmUHRTsbIw57yH56KSWiTwYWU0tGyVMGRQ0LjG0kd9A=="
    ]
   }
  ]
 },
 {
  "id": "M4",
  "icon": "✨",
  "title": "後製特效與著作權",
  "book": "1-2 濾鏡、子母畫面、文字、背景音樂；素材著作權",
  "learn": "<ul><li>🎨 <b>濾鏡</b>：改變畫面效果（黑白、調亮度、模糊…），同一段素材可以疊好幾個濾鏡，還能調整屬性值</li><li>🔀 <b>轉場</b>：兩段素材之間的過渡（淡入淡出、溶解）</li><li>🔤 <b>文字</b>：標題、字幕；🔊 <b>音訊</b>：配樂、淡入淡出</li></ul>📜 <b>素材著作權</b>：自己拍的最安全；網路素材要找<span class=\"hl\">標明可免費使用或創用 CC 授權</span>的（如 Pixabay），並遵守它的規定（例如標示作者）。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "想做出這個效果，要用哪一種功能？",
    "buckets": [
     {
      "id": "filter",
      "label": "濾鏡",
      "icon": "🎨"
     },
     {
      "id": "trans",
      "label": "轉場",
      "icon": "🔀"
     },
     {
      "id": "text",
      "label": "文字",
      "icon": "🔤"
     },
     {
      "id": "audio",
      "label": "音訊",
      "icon": "🔊"
     }
    ],
    "items": [
     {
      "t": "把畫面調成黑白懷舊風",
      "icon": "🖤",
      "s": "6ff8e653d497df90",
      "e": "u/+fCuAKCSF8kF3gMHjzXdkZHdSW07+eQpepQLc2tnUgPEodnEORT1AYul1awq+Hg0/3VVpFSZtzeb+EExB9tsR9li0="
     },
     {
      "t": "從特寫柔和地換到遠景",
      "icon": "🌫️",
      "s": "4f5ff80582e06791",
      "e": "3AhqDobEHvXOLVGFIi29CvHyCBnMeNqCoE0qQr+fMcjdObKfTTaDkPWkFY2AarV8rBCtT0jo0uTL5OHpgb2ZyAw2K3OvixI="
     },
     {
      "t": "片尾打上主標語",
      "icon": "📜",
      "s": "0fb57784d602621c",
      "e": "DdSm7UvnKaqXz5HOLI5LE++9GCl1d7hlJpj13olxJRWpGNPj1/CEhYjHboy13LitrfeXS2k="
     },
     {
      "t": "最後一幕音樂慢慢變小聲",
      "icon": "🔉",
      "s": "aa9a23d6b41d3044",
      "e": "iiS3gunCW6EEJqsQPVmpjZujKOsgsW327xnQl1hE3vEMtZvA0GWfpqfooBLhWaRld1baXyI="
     },
     {
      "t": "逆光拍得太暗，把亮度調高",
      "icon": "☀️",
      "s": "6f65b6d2ef160d40",
      "e": "+c551AZpxoQGr/elVaf/7BXeU2C/Ss7C9/ZCL+3Cz87qkye3YYlIbv5ZL96lBSVEbvo6GJXusaELy3hATvvimXvbmI4N4COFEQ0="
     },
     {
      "t": "把路人的臉模糊處理",
      "icon": "🫥",
      "s": "89d2571e84c0f494",
      "e": "NUnyaToWHq4SBTG+XU2ptGptEyUmAS2bBvvMOc49KJGY0tJuHLrilitoh9R5Er+WUEOIGkmUP8JBANYxJ/LpGq2NN9fayA/2+hczKLs2LnXKXbuWYQQMYMHG9zXRZA=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這個素材可以直接放進要公開的廣告影片嗎？",
    "buckets": [
     {
      "id": "yes",
      "label": "可以用",
      "icon": "✅"
     },
     {
      "id": "no",
      "label": "不能直接用",
      "icon": "⛔"
     }
    ],
    "items": [
     {
      "t": "自己拍的物品特寫",
      "icon": "📱",
      "s": "348be63fe1e04fa8",
      "e": "sGdRmTSM2e4o+LwNNm/+SA75GpfMidcml2T+CpT03gU4sD5LALnvdA4mMfREjwGedaHkDabXek0M+dRC1TpNxrKBXuTZd7STNddY+2qZeUwMGdx9VzC1UET4lpAV83SJCoc="
     },
     {
      "t": "Pixabay 上標明可免費使用的照片",
      "icon": "🖼️",
      "s": "82aa406932d79db2",
      "e": "pE7PJ+3KqoumrCp1R4cogeoxO29WDnmPJwBXMBzv34/3EZzBVVicI43CJUj0TNifCxtbG0GZWw7zNrT+I32R3atQcw+ayXUthUwlQNrLZOYr2O4="
     },
     {
      "t": "創用 CC「姓名標示」的音樂，片尾有註明作者",
      "icon": "🎼",
      "s": "7a38e32dff089637",
      "e": "20+MAAV3TROGrA32h8N8f1bTFuhmL6qN/piF9eI5DkOhWxlWHDwezum7QsLlvOSyy7Ap/Y/71GUYyP9SwQiHkHMhgrPz9uUNxVwx+VjzlsI0laXhYDc="
     },
     {
      "t": "直接下載偶像的 MV 當背景音樂上傳",
      "icon": "🎤",
      "s": "77ff253a0c17fe1c",
      "e": "XNrXO9Zn4fDtDU9MnzjxEcju9T9ttHlQy31YD2to08+XInUXJmVPjVLiER6p5iVr+DaQlPs8Oe34iL03VtE3ZjaXFxIHZDNUEh+bNn4NlqWReZJG2jU="
     },
     {
      "t": "搜尋引擎隨便找到、不知道出處的圖片",
      "icon": "❓",
      "s": "8d3273c82fa797a0",
      "e": "8fDFI1EebLZy43mYDOZ4eMKXxBwtVu0jym+eApdGaOLW+JpuWLKFW3VI3O9s28ihfThMtBiEHg385LQlOICKmQqnBVB+MHLi9NdFyDI="
     }
    ]
   }
  ]
 }
];

window.MEDIA_DEMO = {
 "title": "如何把廣東省凳拍成買不起的樣子",
 "creator": "王左導演",
 "platform": "抖音",
 "url": "https://m.douyin.com/share/user/MS4wLjABAAAANO3p7zrd2YObHBP4TgwFuvh-rkP_paOIrnYXbC9NMw8",
 "length": "約 2 分 30 秒",
 "schoolUrl": "https://drive.google.com/file/d/15KXrUkAlpxdQlL8LHBuGzaCO57F4rFbY/view",
 "aiNote": "原作品標有「剪映 AI」相關標籤，畫面可能部分或全部是 AI 生成的。我們看的是「廣告怎麼讓人心動」的手法；我們自己的作品要實拍。",
 "moves": [
  {
   "at": "開場",
   "icon": "🎬",
   "what": "一開口就說要做什麼：把一張普通的塑膠凳，拍成奢侈品廣告",
   "why": "開頭 3 秒就讓人想知道「怎麼可能？」",
   "ours": "0–3 秒：物品特寫或有趣動作"
  },
  {
   "at": "材質特寫",
   "icon": "🔍",
   "what": "鏡頭貼得非常近，只拍表面的紋路、弧線和反光",
   "why": "看不出全貌，反而覺得「很有質感」",
   "ours": "3–8 秒：材質、外形、細節"
  },
  {
   "at": "設計圖",
   "icon": "📐",
   "what": "出現手繪設計圖和尺寸標示",
   "why": "讓人覺得這是「精心設計」的作品",
   "ours": "可以用手寫小卡或草圖當一個鏡頭"
  },
  {
   "at": "替顏色取名字",
   "icon": "🏷️",
   "what": "把紅、粉、藍取了聽起來很高級的名字",
   "why": "有了專屬名字，普通顏色也變特別 —— 這就是文案的力量",
   "ours": "步驟 2：從特色寫到感受"
  },
  {
   "at": "款式展示",
   "icon": "🎨",
   "what": "不同顏色的凳子排在一起、在光影中出現",
   "why": "一次展示所有款式，畫面也更豐富",
   "ours": "一個遠景交代全部"
  },
  {
   "at": "大字標語",
   "icon": "🔤",
   "what": "畫面中間出現很短、字距拉很開的標語",
   "why": "短句比長句好記",
   "ours": "主標語每句不超過 15 字"
  },
  {
   "at": "人物登場",
   "icon": "🧑",
   "what": "模特兒在老街拿起、坐上、端詳凳子，很多低角度鏡頭",
   "why": "有人使用，觀眾才想像得到「我用它的樣子」",
   "ours": "8–25 秒：人物使用、最有情緒的畫面"
  },
  {
   "at": "收尾",
   "icon": "🏁",
   "what": "凳子全景＋品牌字樣＋一句標語",
   "why": "最後一句最容易被記住",
   "ours": "25–30 秒：物品全景＋一句主標語"
  }
 ],
 "think": [
  "這支影片約 2 分半，我們只有 30 秒 —— 你會留下哪 5 個畫面？",
  "哪些畫面你覺得可能是 AI 做的？從哪裡看出來？（光線、手指、背景文字…）",
  "影片用了很像名牌的花紋和名稱。我們的作品可以用真的品牌名稱或商標嗎？",
  "「把平凡東西拍成買不起」讓人發笑，也提醒我們：廣告會用畫面讓人想買。下次看廣告，你會注意什麼？"
 ]
};

window.MEDIA_AI_SOURCE = {
 "name": "Day of AI（MIT RAISE）課程台灣中文版",
 "url": "https://www.dayofai.org",
 "license": "CC BY-NC-SA 4.0",
 "note": "本頁關卡改編自 Day of AI 課程（MIT RAISE 開發，台灣團隊翻譯），依 CC BY-NC-SA 4.0 授權使用；Day of AI 與 MIT 的名稱標誌為 MIT 商標。"
};

window.MEDIA_AI_LEVELS = [
 {
  "id": "A1",
  "icon": "🤖",
  "title": "AI 是什麼？",
  "book": "AI 素養 1 · 什麼是人工智慧",
  "learn": "🍬 <b>西瓜口香糖</b>是「人工」的：它模仿西瓜的味道。<b>人工智慧（AI）</b>也是模仿 —— 模仿人類的思考。<ul><li>📖 <b>定義</b>：由人類開發或撰寫的程式，讓電腦用<span class=\"hl\">類似人類智慧的方式</span>，完成看起來很聰明的任務</li><li>🧮 計算機算 999×999 很快，卻<b>不算 AI</b>：它每次都照同一條規則算；🗺️ 地圖 App 看到塞車會建議改道，<b>是 AI</b>：它從路況資料<b>判斷、預測</b></li></ul><b>AI 的五大核心概念</b>（以自動駕駛車為例）<ul><li>👀 <b>感知</b>：用攝影機、光學雷達「看懂」路況</li><li>🧭 <b>推理與計畫</b>：判斷那是行人還是三角錐，決定要減速還是換車道</li><li>📚 <b>學習</b>：看過大量資料，學會預測牽狗的行人走得比較慢</li><li>💬 <b>自然互動</b>：乘客用說的就能告訴車子要去哪裡</li><li>🌏 <b>影響</b>：車禍可能變少，但也有隱私、倫理的問題要一起想</li></ul>🔗 廣告工作站步驟 1 請 AI「看照片找特色」，用的就是 AI 的<b>感知</b>能力。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "它有使用 AI 嗎？",
    "buckets": [
     {
      "id": "ai",
      "label": "有用 AI",
      "icon": "🤖"
     },
     {
      "id": "rule",
      "label": "照固定規則（不是 AI）",
      "icon": "⚙️"
     }
    ],
    "items": [
     {
      "t": "計算機按 5＋5，顯示 10",
      "icon": "🧮",
      "s": "867f22bbee71df2f",
      "e": "B/IQC6dwCOHQY/SaJGU8ZRGkwSnOPeyzojbfnFEYGVfqdAB87o/A3/n/Ol/VNxBJ8D+77fRhsM10ARV/twBojJYqVlSpfY/H5kEaa8x2H3M9AwIZugSlor8qgc2kSgoPHazG+eT75uwAVQWvqZLgJEHxYGjUXSALDRY/pw=="
     },
     {
      "t": "感應到有人就打開的自動門",
      "icon": "🚪",
      "s": "f0a3728234ed4d13",
      "e": "PqCL++xRV4kOv6/xlT2ws7JV8dqEN9MXzYJMaBYCSfVGeSpOhuo1SDdcl55kwmdL5HyoUq8pbQcxpzdt/FzGK9Aj39CIS3hYN5qiSxO+G4JpdllLWfpQ1vhD1jqRzFtK7tE="
     },
     {
      "t": "依你看過的影片，推薦新影片",
      "icon": "📺",
      "s": "a6443d204972ad3a",
      "e": "IAn8S+xiu4qBAQT5OL/wK0uhST++g3Isjb/5vPpLy93F9fyALIA/wc0kDVapf0Wt7jftwezc3+lMDoaWsnVZzCt6Pn6G7kEjXJepaYOqOJNRkAKei6N4YxPzCaGuoQYhFkKZGzw="
     },
     {
      "t": "用臉就能解鎖的手機",
      "icon": "📱",
      "s": "b92bbbd3777933f7",
      "e": "BbS/gMN2B5TL6gx7fjfAX+OY8USrG6g5+pKTEkQB2b+sGorE999hbuPw1AP0BNoNIXYXuuSyqCHzFCKtAGbT+9Ai8PtElPXpWH8hbvY6s8tIRHsrcqdM/9SRQck="
     },
     {
      "t": "前面塞車，地圖建議改走別條路",
      "icon": "🗺️",
      "s": "7edfa6b1db1ca0cf",
      "e": "NUtObl160zXunfUc/ucwFzEJ3gSkSM5iync+biNcmqIjX1tBoo+YnY+h11cV9QvlhXh9/Pjy4hC7R+S8Pb+vbPKvZxdxBn09ieRBIQAfT0pYQVKtdN0="
     },
     {
      "t": "定時 3 分鐘就停的微波爐",
      "icon": "♨️",
      "s": "71ca1d48557b3fe1",
      "e": "7Y/hDgB5QDNSK/A1UXwEAG2bx7ljwrZXsVexzSRnHqosbZcHbsthU3Ei9ofJdxyRw9SUMh/BS/qZ+jT1lG7C5okGvxP+ynjuW7s="
     },
     {
      "t": "聽得懂「明天七點叫我起床」的語音助理",
      "icon": "🗣️",
      "s": "03aef3b3d8a0ba59",
      "e": "3FJJrPHCagENgIpOuKEoQ8jbvLRsYGxlyqG3dxaY5PfZ744NAzfGBN45+KM+gnkPEpEsqxTocm74pdbNE0Jxo9dRtCdfbz5IgtjZUl2crkOWWLEXg1GOIdeV"
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "自動駕駛車的這件事，屬於哪一個核心概念？",
    "buckets": [
     {
      "id": "see",
      "label": "感知",
      "icon": "👀"
     },
     {
      "id": "plan",
      "label": "推理與計畫",
      "icon": "🧭"
     },
     {
      "id": "learn",
      "label": "學習",
      "icon": "📚"
     },
     {
      "id": "talk",
      "label": "自然互動",
      "icon": "💬"
     },
     {
      "id": "impact",
      "label": "影響",
      "icon": "🌏"
     }
    ],
    "items": [
     {
      "t": "車頂的光學雷達發射雷射光，測量四周的距離",
      "icon": "📡",
      "s": "ef1279e00bae28a2",
      "e": "/KATvnw+S1SWcyigBI5yDnD0DLNCx0jcqNh2lL2ba6EjMjvk+xORb23qdAaRKXTCty0U5xMC6t6w5xz5aM11gT1aMM3v57oPlXlIhQ=="
     },
     {
      "t": "判斷前方是準備過馬路的行人，還是路邊的交通標誌",
      "icon": "🚶",
      "s": "81a84e7ee962cb42",
      "e": "fE09N74ZzSftCP5+cmdb8sPs0DVBEzeGzY5UcAOn7t4YwLhQm5nTbYysPgUprUIt0aRWA+vksk2i/j3utJ++0LJTLWiMud4MgbO2OUD53Q=="
     },
     {
      "t": "決定要減速、停車，還是變換車道",
      "icon": "🛑",
      "s": "278dda81947a40f7",
      "e": "nL7zDpSfUfXUUaog12QBLx5E5lZslg8Dm7fY1cEOEM3SLk7mx8v3NGdAovfYz367AB0RAY4s/ln/Z9rLvdREs7AP0sWiOU6l8DAaOn8OoA=="
     },
     {
      "t": "看過很多牽狗行人的資料，學會他們比較難預測",
      "icon": "🐕",
      "s": "32e316755a78f439",
      "e": "pdj0le5mswQ05ISaoLLvHq6BdIBY/RcX0UpPsS7jXcNM7AKfgVSyPKYt+mlkG0FcyUcSB5bp3v4NL3J+61mPb7bfVST9NRSYM6bOKaEqYOTLAw=="
     },
     {
      "t": "乘客用說的告訴車子：「我要去車站」",
      "icon": "🗨️",
      "s": "702849f9a985d217",
      "e": "S88rg4wOEY9fp/Npby06fjliV7WflEOgx2o/c9QfcgM/5aIZ0QZVQAyboeOX0tPY4RNLkhyl9kxpcdcEgYQXnmNWU6CxBuFqRhzBnkD+xlBTI+yf6d0w4Q=="
     },
     {
      "t": "車禍可能變少，但攝影機會不會拍到路人的隱私？",
      "icon": "⚖️",
      "s": "1a9d379c5d74c866",
      "e": "z/gLveOg0Jxxe14e9hxF/HBwq/7+hyWn3Fl27tTj9MJZdrESfj8QlUjnm8Oi7hdoekA6TJHRZcuwb57StLVKnD4hVVK5/PuakkK3iTcjiUBARA=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "關於 AI，這句話對不對？",
    "buckets": [
     {
      "id": "yes",
      "label": "對",
      "icon": "✅"
     },
     {
      "id": "no",
      "label": "不對",
      "icon": "❌"
     }
    ],
    "items": [
     {
      "t": "AI 是由人類開發或撰寫的程式",
      "icon": "👩‍💻",
      "s": "7bdb58db1d2b8131",
      "e": "lBmfk7O3+xTAyt+fXCULgGd4rc3UFH4hWiQrhLe+53TQKhiqhUhBtUySJ7lvm7ND8HKPcxZR2vdiTghO6oac05Q="
     },
     {
      "t": "AI 有自己的生命和感覺",
      "icon": "💓",
      "s": "0b4b31c0b4a96100",
      "e": "Vsek+aBMyAFs30oPfu3uIU0tzopi/KIr8Lc737UAiqgQfc8n2Ly1SjDk8xADNFsUFxAoFvj2m0E/jQuVOxmH6IU+FUVNIEounXRY9x++nJWlGMiaRL3RyJS1TJYUNFby/UsaxdY="
     },
     {
      "t": "只要電腦算得很快，就是 AI",
      "icon": "⚡",
      "s": "131ddc3238e9c25d",
      "e": "fdlV8vu4k2SfbLE/VExQts1maBroWYWHF5Mdd+WUaB8QC+A1+M3jfXyZ+a3cSAEmh6TCIXdSiGYhe0+FE6n890NAxGTxF5NwdtDt0Yq2nF20g8m4s7ncS2AEZo0cIO+m4L1VbHs/fS3R3A52XjpQANs="
     },
     {
      "t": "AI 帶來的影響有好有壞，需要大家一起思考",
      "icon": "🌏",
      "s": "4c5c04dafe3ad379",
      "e": "K4pF7cgW8kA9vyqmZfaHjHs0qYbzTWD6D1Nm+dlk7NKbhICFq06Ik4PCOs+apteikjk7atNTJbYhqWKcKQ9OlFWmqhgQbhrIHOMeMYqWO1XdhzU="
     }
    ]
   }
  ]
 },
 {
  "id": "A2",
  "icon": "🧠",
  "title": "機器真的能學習嗎？",
  "book": "AI 素養 2 · 資料集、學習演算法、預測、偏見",
  "learn": "✏️ 玩「你畫我猜」時，老師還沒畫完你就猜到了 —— 因為你腦中有一個<b>個人資料集</b>：從小看過的房子、鳥、時鐘。<br><b>機器學習的三個步驟</b><ul><li>📦 <b>資料集</b>：AI 的教科書，可以是圖片、文字、影片、測量數據…（而且要很多很多：人看 5 棟房子就會認，機器可能要看 5 萬張）</li><li>⚙️ <b>學習演算法</b>：在資料裡找規律，例如「三角形耳朵＋鬍鬚＝貓」</li><li>🔮 <b>預測</b>：用學到的規律，判斷沒看過的新東西</li></ul>⚠️ <b>偏見</b>：Google「Quick, Draw!」的「房子」塗鴉幾乎都是三角形屋頂，AI 就可能認不出公寓大樓。<br>常見的偏見：<b>代表性偏見</b>（資料缺少某些群體）、<b>測量偏見</b>（標錯或品質差的資料）、<b>聚合偏見</b>（用一個標準套用所有人）、<b>風格偏見</b>（某種畫法比較容易被認出）、<b>年齡偏見</b>（大人小孩的畫法不同）。<br><span class=\"hl\">AI 的智慧是人給的，AI 的偏見也是人給的。</span>",
  "rounds": [
   {
    "type": "order",
    "prompt": "把機器學習的三個步驟排好",
    "hint": "依序點選：先點第一步。",
    "s": "372feda2b4c76115",
    "items": [
     {
      "t": "學習演算法：在資料裡找規律",
      "icon": "⚙️"
     },
     {
      "t": "資料集：蒐集大量的範例",
      "icon": "📦"
     },
     {
      "t": "預測：判斷沒看過的新東西",
      "icon": "🔮"
     }
    ],
    "seq": [
     "F9pACkLJwnXJPshSD0+tPzb0TrfY+vW0/N1ktb2g",
     "eH6lMosEEDBRpV5UXuTeMRFEvUWkIJraPUcyMwCJ",
     "fdXs8Per0Y97cPYyGiRUwUS/739g1kipvWu+1Aoo8z+buJt0NG6DiCPBcJ45jguRR1rdLKoNmW3SZJZvN6JH7QCbbLW2Mr+ueWFogQFLpyMe6MGm2rzQyU144AC+F5XGZU1b86wXgZM="
    ]
   },
   {
    "type": "sort",
    "prompt": "這是機器學習的哪一步？",
    "buckets": [
     {
      "id": "data",
      "label": "資料集",
      "icon": "📦"
     },
     {
      "id": "algo",
      "label": "學習演算法",
      "icon": "⚙️"
     },
     {
      "id": "pred",
      "label": "預測",
      "icon": "🔮"
     }
    ],
    "items": [
     {
      "t": "Quick, Draw! 收集了全世界玩家畫的幾千萬張塗鴉",
      "icon": "🖍️",
      "s": "7065d0b6628285e0",
      "e": "9yAOMtHQghufebU4priWS7U3yO4OU/eHe08KgRGUnuFi+nYvpZiEbhwbfAE+HaUgRoihEA2WsXe95OqUQEMwgwFVP+33Hg=="
     },
     {
      "t": "電腦從大量的貓塗鴉中，找出「三角形耳朵、鬍鬚」這些共同特徵",
      "icon": "🐱",
      "s": "5350663f4bfd10c4",
      "e": "MTenc8ltk8ONKd9tqSz1qD1cOx6MQSCcDYGF0uagr6i0V1xMLD+CCRpKaqxVZrSge24gDPpl0Aw3Xnuvia5DMfdZeuV1SNusVg=="
     },
     {
      "t": "你才畫到一半，它就喊出「我知道了，這是貓！」",
      "icon": "💡",
      "s": "271f5cfbd4a3d636",
      "e": "wdWqtxFZ44LcF1qRKP8SXXz5AX/WO1UGkN5ZUXfLobNfMejuFFCvri9aA7kwhkIckH7kMw0na7L8xuQohzw2rckY4HGXN+3Szb0qvg=="
     },
     {
      "t": "手機記錄你從不同角度拍的臉部照片",
      "icon": "🤳",
      "s": "c833f531bc832d4a",
      "e": "k57Yyyw4CP/6JgMxBVcbrTg5AFHpIAzgcG4mx0MLkrpmkzLUSnH2dNn84lKERCPK3bLQbHzwkosC6ZwXRTDNBfQ1qiGW94PH5zx75Dvqf9euI6epgA=="
     },
     {
      "t": "手機看到一張臉，判斷「是主人，解鎖」",
      "icon": "🔓",
      "s": "9e53ed0188cd8c33",
      "e": "6ekKDrahfdvRB8oiCy9dbLxFxL+98oXGEKeX3TLTJEpO/eyDoWEjN2wLannW7lqZ+AC9TMXBXR3swwcDR1c8i77xLeGxuyzD3jh4CbCKnQ=="
     },
     {
      "t": "影音平台分析幾百萬人的觀看紀錄，發現「看了 A 的人常常也看 B」",
      "icon": "📊",
      "s": "5b66a4a179214f44",
      "e": "4pTLNEsOTELbcw6Sdi4ubOkJ6RtkhkfhKm4EjSuiXdLT8eojDpKrbYssUtZYDEchqzD3ntOZocttQplQjK52qdH8he4GVVksP4yvDDVcp3KHDOE9aFmxXg=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這是哪一種偏見？",
    "buckets": [
     {
      "id": "rep",
      "label": "代表性偏見",
      "icon": "👥"
     },
     {
      "id": "meas",
      "label": "測量偏見",
      "icon": "🏷️"
     },
     {
      "id": "agg",
      "label": "聚合偏見",
      "icon": "📏"
     },
     {
      "id": "style",
      "label": "風格偏見",
      "icon": "🎨"
     },
     {
      "id": "age",
      "label": "年齡偏見",
      "icon": "👶"
     }
    ],
    "items": [
     {
      "t": "資料集的「房子」幾乎都是三角形屋頂，AI 認不出公寓大樓",
      "icon": "🏠",
      "s": "51c54dce77855c7d",
      "e": "cVXXI9exRKypec4Tzz1ehmC5MebzkGUzKu6AiOaFFs9+r843h9Pc7df2CvxUzdkUNQZn9ZTO00qnA6rJvEK5ri7bUwnWtMSs9n3mQaXVbbD6gPg+EgSEOQ=="
     },
     {
      "t": "「早餐」塗鴉大多是培根蛋，AI 認不出蛋餅",
      "icon": "🍳",
      "s": "6e0a422d1b16f3a1",
      "e": "03ax3FZDFsYjE5M7ExmXWDZeTcIj+Sd7PdnvAmhaao95HSWbK9tqCS8ikx0IX5PUjXnVNfXRtVmSiejlDF6eD5JPUIt0FJIdWx0="
     },
     {
      "t": "有人把「貓」的圖標成「狗」，AI 學錯了",
      "icon": "🏷️",
      "s": "062963749ed0521a",
      "e": "I0Y1XDvCe2CjT5PdsDq4uDk4L5bf8jDUtk7YvVDeW0R07SQgzCCGkWKVvyoDfzuGM0x8sPDSaiagZ6MPE68feEYEhaWnyqGNFqU4eYuvcp/cdQ=="
     },
     {
      "t": "用全校平均身高，幫每個人訂同一個尺寸的運動服",
      "icon": "👕",
      "s": "c68a827fdc2faefa",
      "e": "azNezOkHgEvvCID1F7+pORcq9ZyQVnZ8hhbcavpYW5ppogz1pDPgvfPNixNENzRgxw8b5rsHJB99WxS1xGAhU8HQRNBO3axz9GNKaKnQx4uZMtk1MHq68EkxCg=="
     },
     {
      "t": "簡單的卡通畫法很容易被猜中，寫實的素描反而猜不出來",
      "icon": "✏️",
      "s": "80da77c71b9d054a",
      "e": "HpwkUzylx7kDtyrEzgH2EpPeQVqWd3871kbZ+YvpiFto1EebFRUzAwM3uAOM94pYIQTNQuzEmDdPBJj38WYO+vjTZ/oBCPYgQ5J4ZRf6CSJ5tnVgzO6/Ayhya6dUpQ=="
     },
     {
      "t": "小學生畫的「電腦」和大人畫的差很多，AI 只認得大人的畫法",
      "icon": "🖥️",
      "s": "9eaa3aaf62e59be3",
      "e": "cp9vOTVJEcRSBO9YyHsgolp82QpPS+PADkLqTPtfGMSph+THvKy8jbDoe5GQtTEgzdMCaUPcUzC2cYjl9W1sjTOmuuwAhZ8TfdzMZeWeLaC2SQDlUA=="
     }
    ]
   }
  ]
 },
 {
  "id": "A3",
  "icon": "📋",
  "title": "什麼是演算法？",
  "book": "AI 素養 3 · 輸入、處理步驟、輸出、優化",
  "learn": "<b>演算法</b>：為了解決問題或達成目標，而遵循的一套<span class=\"hl\">步驟或規則</span>。<ul><li>📥 <b>輸入</b> → ⚙️ <b>處理步驟</b> → 📤 <b>輸出</b>。例：蘋果 → 蓋上蓋子、按開關攪 1 分鐘 → 蘋果汁</li><li>🤖 電腦很<b>死板</b>：完全照指令做。叫機器人「拿刷子刷牙」，它可能拿馬桶刷！所以指令要<b>明確</b>、順序要<b>正確</b>。寫成電腦看得懂的指令（Scratch 積木、Python）就是<b>程式碼</b></li><li>🎯 <b>優化</b>：目標不同，步驟就不同 —— 同一道菜可以追求整潔、口味、趣味或速度</li><li>🧠 機器學習也是演算法：資料集（輸入）→ 學習演算法（處理）→ 預測（輸出）</li></ul>📱 推薦演算法決定你<b>先看到什麼</b>：同樣搜尋「健康飲食」，每個人看到的結果都不一樣，也慢慢影響你看世界的方式。<br>🔗 廣告工作站的 5 個步驟，本身就是一套「做廣告的演算法」。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "做蛋糕演算法：這是輸入、處理步驟，還是輸出？",
    "buckets": [
     {
      "id": "in",
      "label": "輸入",
      "icon": "📥"
     },
     {
      "id": "step",
      "label": "處理步驟",
      "icon": "⚙️"
     },
     {
      "id": "out",
      "label": "輸出",
      "icon": "📤"
     }
    ],
    "items": [
     {
      "t": "麵粉、雞蛋、砂糖、牛奶",
      "icon": "🥚",
      "s": "199e79d31eb38880",
      "e": "TyXm6sLZU7bfkZ3f4kSEdgH4N2Vlm1IoqHWx/eWPPMtNkvmyhV6O5f97J3cu1mPrdFUPnuM5oa+D41X0B/hCrEWLTb78mQ=="
     },
     {
      "t": "預熱烤箱",
      "icon": "🔥",
      "s": "b4b90b3949bb7661",
      "e": "AjP09IoMx2LcDsvOWMxrTW006gYiqJyYjWGqnp/zgGxV1OnDcG5MV1aZDIyWwyMF/CP8FIuEJSBM/99KeT3oG1k3jgyMKbmg/Ka1wVMbrMcUjg=="
     },
     {
      "t": "把濕的食材拌進乾的食材",
      "icon": "🥣",
      "s": "2c749127980b7bda",
      "e": "HFr4iciOC7uXzChs38mSekW8kyZnKEjozgoroj+WCY/WYPr8Q+OPM4KIJvf8wPjbGs7M7yA="
     },
     {
      "t": "放進烤箱烤 30 分鐘",
      "icon": "⏲️",
      "s": "1bc52c6fab7f4b06",
      "e": "HzjTHqe3ALajuh8qM6Uxp/dpq6VWIAGWI2fPfozk37AdAou5HVqix9x7UhLDNtgFyXlpzOc="
     },
     {
      "t": "香噴噴的蛋糕",
      "icon": "🎂",
      "s": "20e1e6dfdd5e9189",
      "e": "zDOrtdBJKxrNA1DOQW+fCliEuVTnsCAurkAMhSD9nG6b2HCATf0HPJFGyNOihqjBPfaONN9MKtSiNKFDTF3qYl/QKnqeVl0sJwms9Q=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "機器學習也是演算法：這是哪一部分？",
    "buckets": [
     {
      "id": "in",
      "label": "輸入",
      "icon": "📥"
     },
     {
      "id": "step",
      "label": "處理步驟",
      "icon": "⚙️"
     },
     {
      "id": "out",
      "label": "輸出",
      "icon": "📤"
     }
    ],
    "items": [
     {
      "t": "資料集",
      "icon": "📦",
      "s": "50dda4cfc8a3bd04",
      "e": "fzVy+uAIMX2Hs0rIYu+lZweNoJ453JoHwKBlZHOjd6oONJp1k83zfGYfeYUpG5/ekjObTJSMxT7XeHEoyAtihlmKLg=="
     },
     {
      "t": "學習演算法",
      "icon": "⚙️",
      "s": "6383e46dbd2419e9",
      "e": "WQSQy41sDDNQCFruwwU8O6M7LyOmAA9K2b32EsWCiND22EMDwWqYcF1VVJU1iYaeZ9Hy/pxfS7p/NxNXYBaRMIDESOBkdxHOq4nVHwziCNG5aw=="
     },
     {
      "t": "預測",
      "icon": "🔮",
      "s": "276e28f552257de7",
      "e": "ykSEEs4eA/oWKShdfXSIes8akokmmcL7gI1uQbi3dtB+pVLkhM8FYjA7/7sWb/BbuUqpyvhoqcqOvy5bmlpFX82exC/F2jw8zb6xxA=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "洗手演算法：把步驟排好（順序錯了就洗不乾淨）",
    "hint": "依序點選：先點第一步。",
    "s": "e90c01df4716dda0",
    "items": [
     {
      "t": "搓洗手心、手背、指縫至少 20 秒",
      "icon": "👐"
     },
     {
      "t": "用清水沖乾淨",
      "icon": "💧"
     },
     {
      "t": "關水，把手擦乾",
      "icon": "🧻"
     },
     {
      "t": "打開水龍頭，把手沖濕",
      "icon": "🚰"
     },
     {
      "t": "抹上肥皂",
      "icon": "🧼"
     }
    ],
    "seq": [
     "/jfD3va3uut0eb5CYlPR52bTZbwF4WveKdh0mtIn",
     "f50Z9HP1Y6pRMewUMw2VDnA6dVGuCObNomxovMTo",
     "zrOqSiXxERyjXPj3D1b3xv9+r0daqMQwJ5LfjMcU",
     "a3VGFtXR2/IyaSvy8uLbQpjdbm/YGnAFtdanpX0W",
     "OLm/XA82rxQUPdGEePqew/fuHcOqGZnkIy5ZOrCvY/fUgfHW/etDE+fuwRluJvQND2h/mbMMSTkaUR057Bz1f3zi9sHVObNS4CZoWH+94eMA6ITH1OZIMoeJranbQhSKPF00WurbZ9Q="
    ]
   },
   {
    "type": "sort",
    "prompt": "這份蛋炒飯食譜是針對哪個目標「優化」？",
    "buckets": [
     {
      "id": "tidy",
      "label": "整潔",
      "icon": "🧽"
     },
     {
      "id": "taste",
      "label": "口味",
      "icon": "😋"
     },
     {
      "id": "fun",
      "label": "趣味",
      "icon": "🎨"
     },
     {
      "id": "fast",
      "label": "速度",
      "icon": "⚡"
     }
    ],
    "items": [
     {
      "t": "最後加一步：把鍋子和桌面擦乾淨",
      "icon": "🧽",
      "s": "ba6368cad635733f",
      "e": "ZHN1nkNOft3zmj3IavhMwN65On7mqHhEC0OJjHHmweM8Slon+cz1D/UskvZsGv5WwfGIKQ+dWx5AY0bsNfLbcMU0g1YSW4i7JQ=="
     },
     {
      "t": "寫清楚「鹽 1 小匙、醬油 2 大匙」",
      "icon": "🥄",
      "s": "e667b6bca88ceeed",
      "e": "DS5J9sCSaJxyqBSQEtsyyrYx++osowLEYTY+51ygsMcQtk8WkMUr1LkkLoJX6Z1tisBuAkyZkW1iij2hwPYfumpSen3Pr/FeXfnOZK127XLZ22g4AA=="
     },
     {
      "t": "把蛋炒飯壓成愛心形狀",
      "icon": "❤️",
      "s": "83aef3bd0d572c82",
      "e": "0GEQsirkX/+SyIcBFxsoKTXTIzAnhqmSTEXtaE7Wd5xLtoqYlyXu/4ox147BOfX2VX9pfQmfst7ocCJoYJpnhlNvhv5za+2OwQ=="
     },
     {
      "t": "先打蛋再切蔥，等鍋子熱的時間一起做",
      "icon": "⏱️",
      "s": "a606342191a20559",
      "e": "s0wqM0Zh5s8ms2ip2g4N93X/CtHzK4YG21liEwVLT8uP9I0A8S509fkFD8JQRPex3Xf5zcnzDCThSVM0uDAhOgc3xgidjerO2ALJRg=="
     }
    ]
   }
  ]
 },
 {
  "id": "A4",
  "icon": "💬",
  "title": "生成式 AI 怎麼寫句子？",
  "book": "AI 素養 4 · 大型語言模型、訓練過程、搜尋 vs. 生成",
  "learn": "<b>生成式 AI</b> 會「產生新的內容」：文字、圖片、音樂、影片。聊天機器人（例如 ChatGPT）用的是<b>大型語言模型</b>。<ul><li>🔮 它學會預測<span class=\"hl\">「下一個字最可能是什麼」</span>：「很久很久以前，有一個＿」後面接「國王」的機率很高，接「冰箱門」就很低。一個字一個字接下去，就成了一段話 —— 所以是「最可能」，<b>不是保證正確</b></li><li>🏫 養成三階段：① <b>學習語言</b>：讀數十億個網頁、書籍、文章（先清掉不當內容，再把文字拆成小片段）② <b>學習對話</b>：用真人的對話練習接話 ③ <b>學習人類喜歡的回答</b>：先給幾個回答，由人類排出好壞，好的方式被加強</li><li>🔎 <b>搜尋引擎</b>：找出<b>已經存在</b>的網頁，你要自己讀、自己整理（累但踏實）</li><li>✨ <b>生成式 AI</b>：把學過的規律重新組合，<b>寫出新的文字</b>（快，但可能出錯，要查證）</li></ul>🔗 廣告工作站步驟 2 請 AI 發想標語 —— 它給的是「最可能」的句子，所以常常很普通，要靠你挑、改，才會有特色。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "「很久很久以前，有一個＿＿」語言模型覺得下一個詞…",
    "buckets": [
     {
      "id": "hi",
      "label": "很可能",
      "icon": "📈"
     },
     {
      "id": "lo",
      "label": "不太可能",
      "icon": "📉"
     }
    ],
    "items": [
     {
      "t": "國王",
      "icon": "👑",
      "s": "6c852f0572dc5af6",
      "e": "89R/r8x1RLTqndNSy2RocaASHA8iOvD3b08YmzAyDT2T4cTBzmrEQsKU7X6VsbdUKLUB29dsn9a45+NGnkXXrN88Y545TKxZfE8nun/hH4+v8w=="
     },
     {
      "t": "小女孩",
      "icon": "👧",
      "s": "0f03f47300c47fc8",
      "e": "JXhhbhlHOBdFKfZJ+ZiGvBh6qgcryVQi/pCvDe3AztyqsbRf8qYinL32BX5LUK7lFqLyl3TxSUqrJ6G0pCOZqHU3UDEIonPfHf5OZlwxsnaStw=="
     },
     {
      "t": "冰箱門",
      "icon": "🚪",
      "s": "3c91e854559e1075",
      "e": "PH7Svb70z9LybU+Cz4stN0Qbv/OvtKzyzmJvu8Sje26xmkZiW8ISUcoWlAVq4ywz3JNMgzC0xj45za0tDr9M+yWaqKgACY33L393bdyxMl5JnZogcw=="
     },
     {
      "t": "攝氏 25 度",
      "icon": "🌡️",
      "s": "bfc183c05b55ec1a",
      "e": "86nArVAxGxzpnvfFMHIJRVLJJtJRGn1Bw+Cm3RsHHX4YtgZ52fruu+tIMrBdcmB3QtLZW4N21PwlecPEbnEN1f6wPndiX4ve1Rccush0+470riqz+A=="
     },
     {
      "t": "老爺爺",
      "icon": "👴",
      "s": "b9e1495e6c91023b",
      "e": "uGsLLphP6Mo5dSMb97ttjXvJFRS2vnr50EOHX2Jo+XbHt/Vp1+KJXh3LUiKcz55mwl2U9Yn8iedBZ+60MNXZ6aHXS5pwhD/u1bNgIox0QQ=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "生成式 AI 的養成過程",
    "hint": "依序點選：先點第一步。",
    "s": "97c34c5c79a09f4a",
    "items": [
     {
      "t": "學習語言：練習預測下一個字",
      "icon": "🔤"
     },
     {
      "t": "學習人類喜歡的回答：由人類幫回答排好壞",
      "icon": "👍"
     },
     {
      "t": "學習對話：用真人對話練習接話",
      "icon": "💬"
     },
     {
      "t": "蒐集並清理大量文字資料",
      "icon": "📚"
     }
    ],
    "seq": [
     "p2oTcrRN1SfOrMUY3YJ0w+8W8H5VLmapXfxSWuo3",
     "ZVccYulbHQokzGDSi8sWrCI6EBGGYdtnbBQjSDP0",
     "ooXJniZ5SB8gHFRhPW78HHuUlscFV5jaIGSy9xIv",
     "SMh26/A/OO2UCmmHr+2lOFAcGUdN1sQLJDE3tvzhswJlLQzhtGWcUMn5iy5/hGZN/0F4VuVWWa3JogrZqY3VUBejohs3aXhOgdD5ZpnnbvGnapypBRv2Zuk+uG6SpETWtaG61hjGmwSmQhVF55G5i7nlqTfXj5PWL3ov3mWhMsr/p5//3IwcjDcmdOmxNnwMdyqfjOA/Gu5AXo5h5bm5Bn5cKERsVuYyUwzIhsc="
    ]
   },
   {
    "type": "sort",
    "prompt": "這是搜尋引擎，還是生成式 AI 的特色？",
    "buckets": [
     {
      "id": "search",
      "label": "搜尋引擎",
      "icon": "🔎"
     },
     {
      "id": "gen",
      "label": "生成式 AI",
      "icon": "✨"
     }
    ],
    "items": [
     {
      "t": "給你一串已經存在的網頁連結",
      "icon": "🔗",
      "s": "2c54bb21f2f4f154",
      "e": "ga/fTo1ihSNZXjbunOPAXhnIZcvnBvHAC3/aLIUfJZBHczM+133U6jh9/IWiTOtRP0xBaMIhzlu5eXZwAfnMLk461b0xb4fINw=="
     },
     {
      "t": "直接寫出一段新的文字回答你",
      "icon": "📝",
      "s": "d96dc14692d48e1f",
      "e": "Cfng4G3B7DXyC+mG14ktWW7Wyc/SA1OxbTmNb0nJcDOXCX0VYUqLCsyh6JkwyfUsW4kkQBh4WBXIP59NHNG0R3ETPBHQaA=="
     },
     {
      "t": "要自己點進網頁閱讀、整理資料",
      "icon": "📖",
      "s": "1125644af81676fb",
      "e": "UyOqcEQdsdAfd2EODcFltrhCl35bcZASQIuvrKU3Xvr0olF16g9p5hnoGqi8L2rgCMA/jKcZ3hA9FS5M3T+C+Q4aQ7U="
     },
     {
      "t": "同一個問題問兩次，字句可能不一樣",
      "icon": "🔄",
      "s": "cbe87ecc2b376f00",
      "e": "x0bfe4+6/B9UPyByhkuxyE3EPG7iXOIPIB2RMujlBUJLTqcYsnIKAuywPfBd2upmJ/cmoOklpwkfVDZaT/+LQkT/p65Kywdx3Vg="
     },
     {
      "t": "一字一字接出「最可能」的下一個字",
      "icon": "🔮",
      "s": "3fecd733673e81a0",
      "e": "zgLDHtlPvxcNMBGioWqhcMal2E5JUAE6wF6+tmAw3upHIvJHGBUcrN/mrXB2vu7eZGm84BXQvkBSCRadUTw9G+e7GU4="
     }
    ]
   }
  ]
 },
 {
  "id": "A5",
  "icon": "🔍",
  "title": "好好問、用心查",
  "book": "AI 素養 5 · 生成式 AI 的限制、提示詞",
  "learn": "<b>AI 擅長</b>：快速發想、整理重點、改寫、給草稿。<br><b>AI 的限制</b><ul><li>❌ <b>可能說錯</b>：一本正經地胡說八道；圖片乍看很美，細節卻不合理（例如六根手指）</li><li>🕰️ <b>不知道最近的事</b>：昨天的比賽結果，它可能給你舊的或錯的答案</li><li>🔮 <b>不能預測未來</b>：它的資料都是過去的</li><li>⚖️ <b>可能有偏見</b>：問「著名科學家」，名單大多是歐美男性</li><li>❤️ <b>沒有真的感受</b>：AI 寫的 Pizza 歌押韻工整，卻沒有「跟好朋友搶最後一片」的回憶 —— 這只有你寫得出來</li></ul><b>好好問 AI 的四要素</b>：<span class=\"hl\">對象、特色、語氣、限制</span>（字數、不要誇大）。問得越清楚，答得越好。<br>🔗 廣告工作站步驟 2 的提示詞 A、B，就是用這四要素寫的。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這件事 AI 擅長，還是要靠人？",
    "buckets": [
     {
      "id": "ai",
      "label": "AI 擅長",
      "icon": "👍"
     },
     {
      "id": "human",
      "label": "要靠人（或一定要查證）",
      "icon": "🙋"
     }
    ],
    "items": [
     {
      "t": "幫你想 10 個標語點子",
      "icon": "💡",
      "s": "5196547e5bf34006",
      "e": "1lUlZpvM1AQm+MwGawqO//TiiX+RyvU0udAHWuRb/bNEeVQdjs8T/DpZ6hwu47Ule2wd9vptH5CGsObwSGiBKxvFwJyqJgi6X8YH57vxYOuHfxEb+ZyJZ2yIHYg="
     },
     {
      "t": "把一段文字改寫得更口語",
      "icon": "✍️",
      "s": "8ef1f3822e430313",
      "e": "0zAZ40WLFQQQ7/aZYw+9pRo/fYbq5kMLW6le67O5zbqJhzay8hTC2wtW3EMnsveCmnz+SB7XU0qlMmrNpDcEKXSnkenNAnU="
     },
     {
      "t": "預測明年金曲獎誰得獎",
      "icon": "🏆",
      "s": "7e9cc20d2db018b6",
      "e": "vzKj3U+A9Czgx72mPYwTGA47KFphXuy1qNC42UcdLKtyx0m+sjnnx5Q19wgRLIgb7aARBlYyuRWUa2vkqslGpmmXaMOG2AjB97EXgGwT4feWU+0FVdbRems="
     },
     {
      "t": "告訴你昨天晚上比賽的結果",
      "icon": "⚾",
      "s": "3d58f382cf88c52a",
      "e": "UzQvO5DfYp0G9OZ2eHXghcqmEpFfPNrE8buDqAu1MtstMGSvvltzMGmgFOp6qmCjGDjdQtr3+NSk62w+nolo9u8tvMZPMjjlmesCBqdO8kdcdC3CO7WSQTUEt5tWWTjoP0o="
     },
     {
      "t": "寫出你和好朋友之間才懂的回憶",
      "icon": "🤝",
      "s": "3ea70ca26bb90410",
      "e": "hiyNmGfWUbY0q+ZXyX5P7Lm0PHfjpaplvhvwFfpzSyXvb+cEzHGbexBMARvYLtdZrco4nvKkyIFziE+NZnSyGtrqEkR9eYML1ZW+eXzNjsk="
     },
     {
      "t": "把長文章整理成三個重點",
      "icon": "📋",
      "s": "ba376344babce0f0",
      "e": "xxTkO/746FnBkUWbX0H3QS4S/g5JmcO15eLAXTIGxdT4AFikVonjQ0KRtu8qKQVGGPWcB1ggsSlq9fDZwR3C812a5BTXGasFuPaDEtjSVM4BcUQvfg=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這個 AI 的回答出了什麼問題？",
    "buckets": [
     {
      "id": "wrong",
      "label": "說錯了",
      "icon": "❌"
     },
     {
      "id": "old",
      "label": "資訊過時",
      "icon": "🕰️"
     },
     {
      "id": "bias",
      "label": "有偏見",
      "icon": "⚖️"
     },
     {
      "id": "hype",
      "label": "太誇大",
      "icon": "📢"
     }
    ],
    "items": [
     {
      "t": "AI 說：「台灣最高的山是阿里山」",
      "icon": "⛰️",
      "s": "fea3962eb0ac7329",
      "e": "ecyXWlsxRSfkSqKMKKjHRrZtlYqiwAqAteGuaRaa+HHqVSLhzrKCY0ONEaYpKnFUICmUxGgHX2Uvmn75QEJb/FZgXJz1GJVmscTLisJJKzwbvX8ehpuQGiXesW1QSeBDtBT2Bg=="
     },
     {
      "t": "AI 畫的手有六根手指",
      "icon": "🖐️",
      "s": "635b863885cecbcf",
      "e": "pkW1l23r8eav/ObjO/SW4kRAP5BeMhOvIjPBVHzx3/ZdTxrxe1PBY2Its9oZpdsSj9A+DObNO4SMBmNIZKHnhx0s3bHRuqOtDSA="
     },
     {
      "t": "問「10 位偉大的發明家」，名單幾乎都是歐美男性",
      "icon": "👨‍🔬",
      "s": "e054b81c36d634e5",
      "e": "b17FaZPC1f0wFwjJqLmwStu6AmX7TWPys47O6Mvw1YUsDv6bOAE+JLbFSeWjgdb1cYNzeJ7ZhtKybac12Q4="
     },
     {
      "t": "問「最新一集演了什麼」，它講的是半年前的內容",
      "icon": "📺",
      "s": "d89bf1965e814d71",
      "e": "sAnTLhMSP+9mKeE2wrTmxxX89WmOBs4Zl4kX2ivYZeFZMIK3WdsrudaKWyXznP0SYE4LX5iEMtnIeWJgpmmb56pXo6OXT3FN1ZE="
     },
     {
      "t": "AI 幫水壺寫：「全世界最好喝，喝了保證考一百分」",
      "icon": "🥤",
      "s": "f0e684e78c3ca902",
      "e": "/hqmSpnDdnajSpDmZSFVQ56DbKsuJ5n+OaDJUCvx0rzk+gN1AWmpgookfh9KIIiy23pmu+JvSLF2aGydhCnDCpGIqTYWbbvKQV431TeloWaluOgPhp91zwy8T+zQc2cYvUzjhA=="
     }
    ]
   },
   {
    "type": "build",
    "title": "組出一個好提示詞",
    "slots": [
     {
      "id": "who",
      "label": "對象",
      "options": [
       {
        "id": "mates",
        "label": "同學"
       },
       {
        "id": "parents",
        "label": "爸媽"
       },
       {
        "id": "all",
        "label": "（不寫）"
       }
      ]
     },
     {
      "id": "feat",
      "label": "特色",
      "options": [
       {
        "id": "lift",
        "label": "單手就能提起來"
       },
       {
        "id": "cover",
        "label": "傘面大，兩個人也不會淋濕"
       },
       {
        "id": "best",
        "label": "全世界最棒"
       }
      ]
     },
     {
      "id": "tone",
      "label": "語氣",
      "options": [
       {
        "id": "fun",
        "label": "幽默"
       },
       {
        "id": "warm",
        "label": "溫暖"
       },
       {
        "id": "none",
        "label": "（不寫）"
       }
      ]
     },
     {
      "id": "limit",
      "label": "限制",
      "options": [
       {
        "id": "short",
        "label": "每句不超過 15 字、不要誇大"
       },
       {
        "id": "long",
        "label": "越長越好"
       },
       {
        "id": "none",
        "label": "（不寫）"
       }
      ]
     }
    ],
    "customers": [
     {
      "who": "🪑 塑膠椅廣告",
      "need": "要給<b>同學</b>看，想讓大家<b>笑出來</b>；特色是拍得出來的「很輕」。",
      "s": "b16233651a0e7824",
      "outcomes": {
       "1dbc48902f6f4965fda9dafe": "EqzFAkFrLf05St5w2Hx91fFo+BHJgJGtRz59FBBt7JV3vQ/DWfIpq57+4IxZ/aUF8Hyzo38Kx+B7VDju35tbU1T/aiv6kP0N8+8npolnxyD6DD708pNroPChO0dDosZufyBDHDXxRAIEwmAEg5vzhb4IGUU+LkFsIjouFIi5YvDS+vMbViwRW1FSVbB40YyOddz9x5cd2Z8xkTdmerezLzMs6jNNcm76Q4tJNL+vG9ZXAZjllR5G3WCNVDktdRMrxZ7/VEHZw7ArmpHjEwRx",
       "9b36ea0a65c7f4524342b442": "oEK+KXTmV5IBUb+stv6YoisCS7R4I4Ip03J7YOMnYGdYVBO9W1qg9+GfyZdhKmyFRUE9kTSx+srWKPbAiYYT3bM9g99VMHB0deebRfKRY/QowxWyci+iKwfyDjSNSf6LN/zIp3sM6TUNJB++IczXs6uQoHMPRK2t1qePcSduR803kOv89Q==",
       "b739e2f7feb22f8c6c5a2de1": "SB91hkgSyoMoEwFjVvahv9qwSVr4oXLkRnlsjkLGjBBp3Ly6663IpfiD9SQuT/uwcuBoB/Uoztmr35lGRYILdbhmaTJbcrQuOKAU9vDKNsWAyJ357rDRlAE1lT1VOvh2ivzzSw7uMLAyME/grLTstw8yOaGYX6BU61VgMZtXvNiFDWUanA==",
       "16c4aea8180f79ec58d138ae": "9oZWUxx19IK+HZWBvJGwXxhq8dJmk6wh6f1PdE0a++Q5OL7NHbgkc5ZQxYLFEmwWdtmXOJsLUDCXn6wEY4l65bwDnuaZAFCA/sNDem4Um4Yj+2mMCcN2MO4epw==",
       "58012d577d21c89570620416": "ocNv2338VPAI1AKkZS9P0pZ4kGoecrX3GSyEIAjqAMLSoXane2qXuF5ghqFYwFU5FObSFe00xRxbmVQ0vRVyVajTSAMqgpImBDGj6U/hUwmv/XacER6naxsogVRmbTtfYgAMbY0MttnewJfMR3OBX4btuheSSHBj6B3b59tpKztuTKsklV7B1tMejniMJWGXFu1sVEHK8x7Nt+59dQTFKad9be2gcior1/eUYIFWkw==",
       "3d17d85a2809f53a1d05208d": "u5YbFgCkh1a7Cc24A2uPGzVeG5AU2Jb4ez8Limk26joFRXYhIirgbVCd1DAi/WMTtqORLyRRLpYu6dO1NYzkiGcRLxFeEUILoO9KkXrlOwTfbEjnTNXzkSyNX8k3dgiXjfZhmjg4T830Yq19g5JZQR7R3t6oZFkQX5xu7Ld5lXi5OdEa3DyYtm4Bk3ARRWUt58nbdRH2/hi7C8K4FJD537vqHPuBG9CdqvxSsw+plQ==",
       "50dbd0836416b9b28c198f8c": "KR1NOLuIo72IZ3Xz3G7GakGNPHM/TfMUH5IisY0c3xMMAvu0TIuDIN7nI4bHEfRq3Y2I2bXNOytFttFQMpoaMCVioC2GsmrZVP1gwxqqV4MMnWILTyz9oRy7hw==",
       "2c5aa9d5af057ac723cea3be": "15tmhUE2A1oMoSiUGCrsySaTSOq42O30vorSSTLN72mtdJHjuIqwdMPRX5wS7449NdXUzb2RQiWGHcDTDJ78IDZCWtyhBWokBgS90j27wfPSBB9kljTZqhjJoEfm2d1F5HWNxQCCAYrPq3LtiT6POtuNceiLelbONZcQr/1+2S9fQSywE/VatXyMang3LANuhIuwatn8fFepMigg3ZvE6xtog54OVtZkjsJnGGnIiw==",
       "d0cde2c873113acab0da7f80": "saNv6jEKv58iUWBRKiyrWKMPZinwDkgzAWGfJVdbiVuLXseU8Fc+UVimfUA0ZiDVVLQJgMDtW+8E2ecimsfs04fpvY9g2HxaDSBQCfEfb1dRHHvM22+0ADvepmg05rDTi6+vaZGwIzFg6prGUuMdg+WTWmPuSy2qeYd1zk4PmHG/hVfTJn7UJPdS5XxsgidzcsesZHjpeCmABPK0nJnf759TPgqlfh9PUooPl/bYhA==",
       "bd7d51a3d4b7c24c53134b08": "Qs7lddiTDesbqL87SGeV9OBbg+158iDqFwWCFBRbh6crgWTvGHlX4EXgwkHWmtAwLMNrYvSnKQ40RQO5dsKzIzqpOr7aO6LSaQ+Syng/vV6EoYPYEUnN9UeH877/qIPm7AJqM9xpkwgmhzW3Wu2G1Dr9M9lBmVpyY01a2g==",
       "4c20afa3fd862289a516d554": "/FmmJxIJS/09uYtkWdOlUp56F3+Np1AUbfGJUZZY2bx0tENmUp8Le01++Kqdba1EiggQNm4jACq2nsMHF8dfY6+Pk5F9RESCQIqr+Bvr6ZuT09ORvWbxESonsMNo5JELYzc/MPinDFyBurvatnLX0CQxTYqqaGiow1g9lRK+7MQsaWdRGSCYqbn1qmJR+X/zKVgXKwpg6v2wbWUWmFFNzj6jPu77sXzvYVcsO8jf0Q6ra9tl1jqL3bpCsSxUXenvkR+PRZzH11pfPjhM/wRJ3g==",
       "97efc34f964eb40403e4c870": "q9VlgxmohILnI3+QNiHGOIN3q5AsB9LqwylQDC17JkyiLC3Hp/s9eKCAlxYBs4w5YcXJukZOLpGmreUCl/Jta/uVugdM5uzlAmNNVPdor/5GJnjoZiZZHouwNfSUGIoEIJpiWLwzoLlFHtapY+EvwUIWim3mRAbTto9YnRjKfqaZAOMfut4C1+D63mlWglJe36EsMxIrU/19no+3cSuVw9eJWqkjRqGg8gxiO6Lt5j00pKs51KA9kO5HWnE/Qa7028ramnN6JyI5ee78612wkw==",
       "53e397080d0b2c7a77bef077": "rcEnIBmUbXUp/bz8hamma5nKuwxIG1DoydFKqcMEKqPP4Jj8sJW5PzxJJ/GTfQTMTav0YfAfYrtZli8GBnixz114JgznE/lNjh/NNrIGUgiy6IjDQEoNeZRLVZ5SVUqtX4HSacJb8fQvDJj1gJPEdSJUqrWgPulUVz0snznJFnNgDJQGxqZu4XVaFMYdMrxtxcgJHQ21aJisfkc1imdeB5Wfrmxrkw==",
       "2f54b94e4e8602232f1bef77": "f125HxA+igG0Si920FlX9koqZn9T/r4v0FZZccyx2AHyPFnU6F+IPpr0+oB6Y2AVN7JOeCQGUfVdR95mPfxc+Ih8Xw1mIGiI8ChC3AK/9Tfj46eUpgK3sTLTzG930xXuameRt70dNkLvVt+CK/wV7ssNjK+nUJN/9NqPhCBrsk3JUEsfRVBn9mY+n+wM9qEYTK+gFbdLEM3PiBvQG9LgkQVUUZ/iypHF38FAamfUX7ItcbExSUiUV5njiBtPs4UFSE7F2FKQGNV0Qv9vXoniThr7jYv9rxb6JjXo09POH8TKpENihLZi+n20Lvf05PpX29nrKuQ2ciK+vw==",
       "4b2981b365ae6243cd04b20f": "8A9bDF/L9hD5jDIdNFGzKuneD2UX/GqBVcHb7t1PgdQaUAWbeiuwtdmY4uozI7/Q7oUjgBOu4BTK33wvkYqEPFoUVX/j6/ANzBKvBjxlCcwUfRG8EyptA8fQjU4Hkj/dZAbMol8xMHY4zAT8rkabbXuWbR/eW7Pq5lnwW15v/VJf2U8uW2FbDEG/EHrmKRd+ONKZjAsudrTBm4sP4DboveZ2tWVR04qC/VRAekkzggGgHaMZ1rhYNC0I5R5GRtS6GSDoqioTywYk0ifFOTO2vAkGRrLbGpd79vKn68Vlnvw5o2g8198IWJrq78EQhFj/zR4qLNe7VUN50Q==",
       "62ac380bab3316a10c754b50": "788YTXewDO6fSw2MqxAg5qlzE1ymWeyPVg39rREFWzNjy+K75RSRqqr5xsU6+sOLy6xOHsXsn/MLb496MJ1BSwa5E9/iu5hpX2m+8yyC5FuFj7QZL965tL9j4pAC3KlKbZK3sbPlLO3o1GSaHJvIUjN4djIVCU8mxnzwG4lIExJ2EPn9GSva193aDz2AoqMOcNk5VkcXg+2c77t2gLJOvD2MOxW/8w==",
       "b2aa8cece90bde438b7f2155": "HBcuNmCaa6bfxbFwUv8YaUVxUujZUM+Ach2YcJxGaUHG/AQCGqWXgVn4LrHoJGVAhZzOKYXfZfs/tLByy8Hn126nLp1qXK/lra1cGdi4zwOc39/sJNidrZ1QVSwlocwGowoOC0wPikL4L6UuFYpdo6cz+isChEelaIVR9oZ6V1FQQma1lkidETTA2HOGRZjCHBtjqCJhRH36o5L4UIW7t0y/V/o91vXIM3dZ3EPK9ogQqed438FWrSEjWDphdJu2DQwR4ROiLM3c8Be9ULvB2qJ7agbh/OW8xU10tIUEiGI4azj7wkF1w0THieQcI8nj6RekNqvkmaQ1Dw==",
       "93913a5fe5dcaa09760fe6d2": "n3zpQNRTC4YiM+KkBAu6OtdQSlioCIXVGly1EKYozRBmCJtpUSNh0mTe+Co7Uv+YeHCnc4z471KrJanulBlmgJqxCyv6sAAaiAO5OD7sqcSWio1Lr7bDuwn0tg36Lm4hl5/9Hs8Q1CmH1K/iDZV6FTHOImuzKK0vVvvds56O7CirHImCxbkEhCsiMemdYCWwJ5vOT92NarmjYS9gViOALfUlgAuJic1w/nI9BJpZvRXCJgaU1M3048MbS//Xqw20+auLucfHMwim/3LSMny3Ug92dOFj0gWBk1X8IqKPr7aRuektFGl5t2KPiCh8XldZuy+a+jg74hwb1g==",
       "c15a7c19c792aa93eba0be35": "TQ7K8S04j4QBcNZDLjjI5jBEBeBzd5rk67eZtk24niiVYZ4YuPCvu4T/QC75njP2vehW6XV1+mgb2NfqZ1L/knYwthX4iriFbCo1AICHfOnLP4gnW36SjgZPGlWBEyfgzDhayOICsDrjotuAKjvzXKiAadVLuLyDwflkQA==",
       "81376c2222a8e2e88f621af8": "P8VwAfARfrvIlXbgUpDQIo/F4aorMC74xLPxKM3KB5d+7pE5ODL4XKL5yMctO3kSlvL9utWSG4+InCTx7oQqBpTjO6DvcGcqW9l6PiLV9fiPuxvwKU5U2/nNZwbbsjKrFp1rrEMNKaLPOvtMZ/WaQ7+FHbdp4BY8LhIFaesh8ic0KeJu1H1K75vnpD6ukQXt26oPatM/sInOsVxv54z0auxWYFCCg3c8YqYHfXj1Wj8u4zxnk9E5fexygIvMc5FIrSpPespZAMnR3hQYQhm3Fw==",
       "aefd33c046c58dffeddb6e47": "S6Port7ZBO1JD4spyrW5cbwewrOsQUTQPYAKvpmEg0S1gPMiDC02F9lmb81QKFsdc+AsfGgYjNqqMRV9Z+hBiKRt+py7vwFRWQwwKdJ4D9a7buhOJWF3E2Uf1taNPdO3NKIIS601w1YcUf0cBClbmeH+plhmkrCIaE81OElh2xc9uArOGfgnoKH2g98Q3ibLv/L3lQrzoRBkXxSTz21G5POB3cFicPUoAOvV4oEpsuqIGLeo5gI9GK0vIvXNoUnNimNXWZCXdvCRNFmbUfCbIQ==",
       "9800241e11a78eac718e7523": "BDHdxZx+XSuNNDu7LMIYAInQML4t4J1nb6xusBA2lVl/Eyiw7g9cqMZ4HPeMi26FFM7OLLSCaaci9SR2lcnksGD/sbGr6Zr2aHzCmAWv4Ecp2dLh6v63sZpK4CCaJIi6eoQPH0G/bwq2eoGdI1DxyN3q/ccvq9joizy5xs9+3u+7qDWgyLMnxKsoOSLljlQnTjSbssureREDQ5lHcYc7JbPFZwprkg==",
       "626088eb8d607131a29128a3": "LQ5BTa6na+ZHdXN2c1Q8yq12ggTWwP6ZJyFSlsePoMVl6Tn0xuutO1tONUtdkZJdwcfHnVMzm7xEeBJ3CRBIe/aeTMW2brNWy2aqwf6J6jYuDcf1Eq56hEmv4NEJBNT/y5Z3nm5ugjCb8WjyAGjna26en5C1uh6sCBXj2A+flQuX5jQBRhBVPpiBu9kP9pzsTFv8Lq+WG+Uo7/sALIU3an9E3i1aLCcbxiG1RY+QTbOnsrkksvDSBzCsHbtJmeBvcnpb0dCvccMz6QWVNq27cnUfYBnyWrDzIVc7XKwwZvjNluKJuZX2/Wj7wJ0sbzTpKmQ+xNLRWmLn9Q==",
       "b2beb4a1466e2504e1edb888": "P2jTQR5AihCMxSqQMXFq9DJTZ4ZvXss5yEmEAdFJgFEVLNbXnWXwfXxdUPOmIl46bfE8alx52yqNxqgjPZ/771rr08izjpt7upjcFL0RqFz+KpbQ1E/yeVsIdXLaHYqZubNTgvpMS0kTeyRuYuXgMeQs9YSy0ZMrsztuwu+h/CJ6ch0fzUjR+cFGFk+YJPD6jxXB6JdoZeA/U37kCky7RQOoUrwcmsrNtsVUXHVEsX7vAQk6dldkZxkOyvvSdkJ128jdvqsOP+dtb7brzrXhNxk1wDDveIjnQybTr4XMdKjs/wy5buq0qjV7XThN2qbvahrbBQfoYEa2lA==",
       "31a7cc9b7b027faedfcd5caa": "cQfpzwc9l/WwyLUd/6uEjc9Ou7+qtWBjcwNw6fhq0tz1g5aHvauCr8oVcU0ZsOx41NfMTCxXpBIlxUGwD46yUOBZtNR10KYFf6aOjnDTX81EGVWhktDAdsDtKz4pY4FDlcW/r4bZ0Emw5nycK8fg6ZsD8HxWFOiLVZZGWYf8jMD8d3Xuj/vCdGpX9sbYFuQ+MQGxJoo8PspNjZ/jc2aiO4pCSZkjJg==",
       "79cb9a9a10e9c4baf2e81d3d": "dJpWTtGHpCGebvZX9oOd1bt/HhlrhYuEtZGLqq0FUbThWSlkeIvDDUvqIdo4ws2JxkTh5+OhC1CqRMOTSC4HD5gVEyunvfYLx4E7/Nam9iiDModd7Oe+lDpDPHCD69Cb3Cmj6f2wpyPrDGiHZnPwc469tDb+Yncu3NB/MjYfKKRoqk3iXoAdgdy0StOVtTfG+83FYf8iABxIxc7ubbUN7fXqrxWqrxKHVM5+31oVNNccvJ5nfwzf8WWtuf/uYTFe8mFNhdi/Aej+aWLpSDka1EX2arAHVE9Xo9v3xQmLccLK8DAmp/YOZvL+NAZfL9Mq/b7lsts47nZ/nA==",
       "6b4dd8353eec4846878a506f": "zT/8I3xr0kLUlsBOMflJC5mXTCdrQkKaiQtYGngDYFsWWwKR48AB4b7c0xTZhZRv64ox9qAtIGrChp7idksnFehGBe6KZjBopsLM6PneJqFeGrchNtbfXxNvndy21O/tV+pt/HA6rza45TI+ogent+0n2MH6OrJk3HuX9FWOWrk+oX6x2E1s6rYEOd3L6/06XF7yGoFRw+UDktmTXGRKfGLLuRHuha21X3drj0LQZB8NDLcR/c5CT0ohVuUtZADCyUQUNPOEYcRycm7q2j3v7nD+mfMNSGOoIGOz+VzPCKInHvK+fAG8fSuxEC5wxNiPvL+C/MPiyb2+mQ==",
       "5995babc00acd5b4f48a818a": "iFwfX09b/+vCXJR68JrCe95fC3DNNxNMBJzAqTQhfmpn/ACEM5QlwmXrp38n4sItMqa1rmiCkUwH7zOIvoMwZhs2gg/6NhQS0htoJ0zOtckFP36MJ2p6cQ==",
       "9e4587a66723b3b5a39c0134": "GDE2p/wJtkbWbgFNc3iUuJDXY/g4LLojFsS0ipJceTlM8K4I628A1JAf2o/eDwtXVMBIUC8hQx+CJ312W1HkeyD0O6HyPrSYWVfI60HNx5+hTwiKkMu5BqtybC44+dMnMz7NNSii8KwpSICGhqceQTgZzvo0rsk5/FtgEin089jM6b0c1X0ySj7B6OUcI0Kw+FeJPA2gmQ9D2wOB8WoRUzZe7xzJTtRRZ9Bojw==",
       "16d347352081f20e3be4adfb": "GHLjDyatmrcLuL+PqPoZ3Qg1xE8e8TL7gYIv5Fu1+OUG5tBbRC+ukN6hozV2Owodbny/PAWO/FrPAFS6s0ORMsPmgTqayQbCr2DcjtMGDH0fl7ehP6XBKiUzuiboI/kn+HF8XXDaSfHSiB2/11h7V4pyTum20V4T0crm/N9dOzVhiRakjiWYkC+qc4DXuQbAHR87bosMq4nDbtgjBCHILCvet59PwkuJMRYhsQ==",
       "12b6051b213de1ae12d8d6af": "ffWj4TbwZJdl771QrBizBJq5IDD7sSstd1J1PqwRnEL6y5BDcX/UuNG5Tuq5thlpegTXPjP70Cw/lUQaP+8KMIb6ajGN424k/L2oZsClhYHjHJ6JoZScT3jW1kyHlAeJWu3ij8WtmieRorlQHONguhFqa6/qKsghf+M03YQtzRUBQg==",
       "48a1809685c95724876bbc69": "reKQ+Ya0qhasc04+2LTeNjfWzZtunHiVO8VkEu/Q8uNsluvgFZ+YU+v5UZ5vT0UBI0hLKStP0TlXCc9zz3YFySLNkmtecOfjHhMlEZFDWk146QNqnXQQN4ZEukrBJSIZUxdj4OxH0l8I/RgCo65wP2SQ5LGxJnvgJFPh626eUmhisNbP+BR6yC7XMlA+bRWSSIGnHjpBHMdBsY1vC8k6JfKeqoe3PJVbvgDXjkEeTm4+cNqqx+Z1SbfigutsHxlXqCdKnKBWOoLXbZs1kzpgET6GeXI8Ag==",
       "afebfccfd2e39252ca7968ec": "040Zq0sWioJ0hggitidLn+dVu6GIt0BVprR/WowIe6JIy1mJ1xMmGl/vwc5zycTCaLI48Uqd4iZaGheNZa2qLb2UOyj2KKOfLJAdN0MfWy2Mw7nzgU8lqgibnjc6Pn0W5o+C5ojPqFK+lWaU9XJf9OgVE7s9s4bdOaNK0r0y8kC74OnkCZLH5EPVW8gykiaPN9D4kZS+2afpsj8Gj4wf6A6pVzi9x6wTXnR6RCIF3k84Ymsf891RzMdrK+j+87/KDproumpuBmCXWQvOeJv1JsuLmJY0Xg==",
       "2b0e737f7545ebbfc8e8940f": "Zjfibq8lMhalsPvzzO99RjnU1RnkhONoMewgqdswTC4cwSKbbuBW61jbMaqmd8620lvddienUd1FqjG9ixR4ldtrVqDmqCq2O7lkjEXOZKzJdZw+KVWBVgi5cqGbykitljgp6gx7F62kvG+FXjoazmt+Xx5FMV7A818T11x8wcol6Q==",
       "c755d071fac8dbfa8e8c0265": "/eNswjyJnTpl86IXS+G8F6RR3adKnBH7cyVIrXtzegJ5FxVz36VNv3kpkQuAM4vnr/M7dceDCsZgWdLpjk94KH9piipLqa1OdIz1NCrOCF559R/lMh/5JkIZ31v3Z/JEERp0MVo7P/uWfBpiqLgItbKZJxiFy0dKAWiB96un7+aVnFjbMzGUu2E8TiGt7MNcrAiktGh8wCIIrn39pZVg6rCGjs8DtXWDvPCzEc+DwekN4pbPQPzAgLo6HLsVBteP1fapJMKIKIvWW9UiEQjAi6Bhzh9PeA==",
       "fe7caf55c04a72580ec7106b": "e9bO+MNwMt085xCpIbSUYcbGoBAss4Brz6gw+i16ICZLdH9l3Z7JzxUVhR1kZzcIswN+un9oO77bE6s1GuCPnz5wK40iFvAgSbu8DLaTbE56XHl4Qq8FZ8UqK+JaffCuvdNnVSJ35ITY6PCWroMjV+Y/A4cA9nxoweIQ62mraDc7abmSpiaH8/DZGO3bgRnFy39odX60Z02vYYe8TfvW7l4Hstki/z080VW/wkYYwsTqgTys0k0GILwBTB4zrSlC2/qI2V3/EQwkmKvjwqeDPlhqYsE6Ig==",
       "cc70d33d413eb804e3d20428": "TYQDF2xrRZ5IMc8KHYZmKjl9K8T7QSpQ3BV4wXt9+6weTFNufCwZkr1hX2bHG7eullwPtB4HV4L/FWpMYnd9m7L8gTDl8+jZuX8VB1w6gVKb3hDLu4SJO3CqEC2tzZt85Ya/tl4UUtpiaH7lFy5Z51sM5Ef281Fy3jU3sb7K+kc5paLGwq6hooKwYwOFAi3rkSuSOfavU/wtt2a1MsLCNI5SSg==",
       "fb665b1b8127d29a8d51548f": "Z42iMFEHpWC/y+EfFbM70Im7f1LL5FShtu2JTYfYeoJaFILd0t+vpwDwluhzcPuo18I2dtnZLm0Vcd8laZk/AM4EMWwNWnMQriUQ49TDcf22XzbOLKW469vVkoxG4xMCpCJZ92hyW+zvmMkXIXh0wKKRsSNiP7/CVoAC3Uj9MvPkyqWnmA5Yo/WlB9ucmbG8iEfphvkZEdcc/DV0R2x2+Vt5ov96piH/bgvhj4t05t080TjQwnQChThg63bx2rsWG7GgveTeG71RfysOvf8uUklrc5jMS8POQt/6zqviVwSFRdNzkrt37tKlRbPXWSO0ZilAvavsyA==",
       "6dbedef2e9694948acbb1558": "YsUhd2W8JdHbv2jMr3J4Wt8W8zD1mCsDnsNOl31jStuvDQhilMwAcj6+nEg8VP4oWDvjsTHDCGizab9SJoJ+PLFrgXJ6emwVg1Ov0xvDMhsizcN0/qa/2L362DPjxMaqLZ7vDNhMSTfSj4uRe1guSY0eDDdjFdGugfJ5TuPc1FMeUsUh6wdKGpUJEf7tuhfiitv3w7pa1Wf6za4QEsNefyoNHbW1631g4jpNIHeBLRJczg2NRB0uQuZXS7pxivAr43SNqSvaL6sslwXo52itXf/C2R4rJq59tHFI4Ab5obfhez/qrRiihKo8tGYm9uG53TF53asJGw==",
       "c6996e0af6c14ca1b8e1dd6d": "YMHCR87DEnXOD55S7VlTeaDGFxmqbONfcH9pBDYyfkLkAzK1WqL4Bdt7iKtRLVNvh5ncGFgtv9dBW13IidfehvipZ+QDM8PmBPY8ZzyklBDfizWpnAsarg9niZE/kkvI2d9L8c64S+TUe8EC9ZCe9xFsTRqjDUXcTDxoSbSJHELIzVVBTB6m1aQws2ZxW4DG6n8cX8dwoduwIVCjYOrXTAolZi2zBzP0U3LW3fKB5z/hcW0Mw7sN7KI3W57WN7zhDDyRd1xpkxSBFovF/w==",
       "578d36dd2201fe0aaf73af0b": "fKZIKNtjTXJ/ORsPA4615Y5XEA25Tkh2nEWaKUtfSAqSWq7nN1MNWE1NmHRrxWXS7/7hvd0Mc7wFvYioRIxeppX0+C8uyaiRSRHZQhWCl9YIv3UdLZKlzH0xHhRljuEQ+FtseqyR5qiBB5GMJ+Eiselg/FRrEVEEUS6Fb0RfLdYhIxB53r3blxt7ROiqEBOqcy4XcEnpuU+p1+3LVB723vTlxbEIfPs59tWOTVfeZsVd9Eqd5CK76QN1hcRBZPYqNwau1kYf/3Z8YlETmCn8KwkP0bAVEEiNy9PtbmqrlL2vYcztgDmL89u5aCiI7ggpbW/PIXcIsKUO/SbxNjfRpbTWaM8dhIA+lNL4/Wdrp1NbtKpv4KAwEQ3hEtW7O1ATxQ==",
       "65a88e3eedfd8c8e13087c09": "m2+QWdlpATHxMKRB5w/+oZ7kLjp0vKwKhlqA8NC7PSwBiwxucgDuTZRgQN1XDdA3qofRFjPJTPP5nyjM0QeBu5gWIu32WSRVcgrl4fUfAVrkrl/Y/Nzqv8Xmq2GVb5pU3NNGtUAWdcbJ8Rj8LJeSwwrJXE8wZG+p7osbkNii5vOMMlYnIz01CK7RSsvjosWM5K2VXROrFUCbiekBNfXxRpixt+l3CSONxoZpwlUieGrueCtTRKWtn0ZHEHKr6NCJtT7W5eJ82lqIYTn2Pl8/5oQZHIqlnfCXXfoJ1CEdPIug4jXJPPnek7b58/fMLAijFi22n8TXAQmAUhgmKUMIaYJqGN7AlugxYLqphZz9p6DFlIVFN3UiTsxHeKTIxAO81w==",
       "c8ca68fc678da66be4c5456d": "c6yHxAcw7WltddTeicnN1RjkcRyX7IxIjzGhiEj6op1YxnaZLOgfz8GpNeLoVwuQm6bgJjx/S/YLaN9qUP+6Y9Hyfm9EXP2JeOFGQcqymZ/D+mS/RrPuJ1MyTcZ6/K4qRNMushtENjKxSVmk6ISb2y5MVr8iqw6TPYlNSeeY+ZyD+NN69N4Ze0WmhCDqnGfpuNjQEiN2hHMT92FlvKIkAr/bs+0QGnlp8AB3UaxYR4lErfUqA71ACzAhteQhzJ+hMzaJg/53IXtt5DhEOg==",
       "f407d5fd5462a6986c33c712": "TahuEo4VadloFtiyOTel71v33FVi9eKrPdmNZrs2qAiAY7anmPmIQbFPQeNcEHG/GgnpTKn93ENMbA9Nt0uhLCi2k2NhhSwpOCmsnhRE1pRXb0tTJUjAtIyDX7iAbo7aD+B54SLXvY3ENZPRyWBPBv3MoIPCSoyTnJxvInOWaLhrOXHZaM4ezmcyTWWZo2gcNJTW8Si8Beo5cUa4x6K0NiR3rpgHG4AyNWJ/GMgYNLqHogHqD9J8/c3Cw7S4+leheBSWZevh+28WdHDyCbuLO104fgu66zL23/TNJml+vpQiCwwjhE/Y0Jz4ATUxztfzG0CKn/v/1YaLJBuy1uxUteRwhTinAWw0R5cghwFHfmr8goOhaeLIzgXBVd8O+HEakg==",
       "9b63ab00ecc7a48cf5773e26": "IesgSkmkk3Xi07iuyu3sMh7fEcuXYqCW5ZwARjgBv59dNFcOmpc4ejF898nbPJibOOn9mmf1ilfKAxviPUtwL1oCH93bJ1eKanA0j5CoXmegRxL1gKVSCv88p8ruanNEyqN+ZBCeGzf4K0ojXABltG/E3pGBauYRzonHQOHgVdnUQsb5RlidkJUz/82RUW2XpH4+QQ7qc8JUG1PBA2g4XCI4HDf6cIGBdLXGCOSs4sZAa2uuPQVw01PejtuuLDJ8THGE7SkudTO/WsBDl25P3YoE17xyq5CFcQacoAsKCVA69ND7bcXOJRhqnGPsLLYwYilFITij/19nsqMZXtaI17TZUQuVANyVIdICnRUh+sctQGJpaqzuT9MTVXJiQYWFfA==",
       "8cdb2ccfc59fe9cba9d01874": "e4NJBsjxBrJgP3nHLDkxMdnWssTavlFFwOVssnNttbPECXSoXagBMPhtmm2mq3A+GL+xZUd2vZt6uagx0mx9F0qcwWPlPPgFu6wVcjPamQX9jsRh1g9jM8DnyzjmVThuQa1ctE2IR8uL+jtN098RO767c/yO24Tbzn+KWMTHz+9V8XAgREBfCGbykxa8nFaDHJS6vlWVKY09r4Zm78N9XUWA8Q==",
       "63c48857b7a0f42425c8b33f": "tEg26bih0TY/bV0HmYjgTTTL68Jg50cWEvMftpMsoYIW6zb+72G5oa43ISHXioGekdA9tJlqgP29LKPOeWXSUb/mYFey/gbCCYktBG4yEiUKkGIvaMeCPuibcrwf5wsOSjAsUFQOJDLYb3rEZZHqYVDGWm1nEk/zrRLk3cfOGLzjE2qoPofSZpz+2SdAIV58B1TvJO64Mulbi8ojgD5uNpEgYKTX9gCa5maLMJnT+2slJH+JCnf5RwcA2OPhbwz+FlvNRAoMgJ8hGoYbJw6zgQY1+1RD1myRPGb5PYjMd7IHaqX3llvhg9Sr7uxed7pxwbXKvpoQ6Q==",
       "bb87f714ca4cb1e7e8fd0859": "NokQv/fARnJ9FcLRSybcp3pNmX6a8+mwUk4Qvl5x7WAi5kB/xNeZ9l2oxaqctIcSX7jpcop4KCpvaD+eBDNGD3XeI4hp+DCYMDdcf49RRL3fmvxBtlyHVD7PZih32Hcm80+fTY5DhqPqp77EADgzATi+qQriXKQYbmkt55tkh7I1isfPK1tCZu9VYb6GRKaK48PoGUvXGBlIyfECWFFb1WghsF1E0RjUVtf6lW6QipZyGXE4cfK8xCvsIj4A/hAXpfeulHcrie5OLGz0Duk/3S1UuepljZg1ApOzOPFBOesmrTFIQ2FQUkHy7ltkh58w7QcJiRRAvw==",
       "0d52435c9382740e6964e22e": "zQo4YctSLiQsmamacmhzoorPP4WcVFhjagYEi8dqwvpsuiwLZzbSDMIRbY+uVlBc+mFlXA1VzW0+eNVsUp8Zs6Y14Sf+c3AAoAa9vJ0h6F3nr0GoTluFXX9mQ3YKFVElMQFXk0LFcmEYyBRIGBquMxSe8RyV5iiZmMm7TEylR/DIo8UPO2xWLgG7FrUjk4QmZsxC8Ft2GprotXaLC+CsCOYNtZsmFYP9V+1eQEZL248NbxdvcJAZCmPszELLTbpP6TkAVvegruBElUfx0w==",
       "b0c77c8908215e020633e69d": "e9XJD3ngE+eL4c2M2JtRGv+36frSeIwQaiNDJrFC9Trq2B/AInbjBLPBRblpiHMWL1VEYUkILZxiybpCU2aai2PV727T44PD3rGxmZMe07P4jATRSh5AETipK2tyYvK9GoBKGPY2+bK5sxDNBH4KKLGVBwYNuCm/+b2mSxiSoQpFrYU5ykGtnov3cZUhqETHe6mT7hAnvxDpat1DqbIbY5YTBjwhcs65wxOdZ0q+ZLK0f7CLQnOtzcNnvK5hRVzBNHvFeBYxAwlbMSKtpCGBgE2wz1mwDkYD2ztsi7cnoBwtuvHUmFUkgWXcqqyo9DVnyRFIVavjv9M+l6Pbd59tTrlV8HatX97qE6xHuDx/DxLd47kA8/AjORRyFP2rHQwgRw==",
       "be579a40d4259dcf9c4a6b83": "DmWuW7DCLjiQ/La05VP817NAY2dH4HaQ15FoK+7RZDaQtAkM8EHYZZYDQdJVongfwpg+4S34vIIVok6cULd3H6zNrnTQHtGp011me2y1U3Zqin+Eh4M3EmVT2O11cwkxXwSxxuXcslCxhmzm7jHbkgaSCwTMdxjKq4T1VWAKkxqhRpbx21QtPVbvffPwkpxsXInjbW6HqZPPqUH86o/J4cQE/wBJgPoe7CTP9KkpPfrWHf/AFnbp4fHERCyGCfwqWCZICPP9xfFoNOCNZTz9fYdCSjRXPN0LLYD2/SXDC2NmiRXaSzKEqSMYXtL+zHMq6GFeX3ix9gPUi3ZlDwmE6sT4F7C61Yio18pls2SO0XwceaY7U1RB1EdZohufusUNMw==",
       "7053fefb7ca6c9314e5743c5": "PcOYQ0+/tp2REBnMtlD31fraUco1HFi6rknXixJa9l8Sop4AeYjNh5m9OLugsFbwMUPbcRZ7tuBtIY5r5YLQ4cvRQdeapEqlWrCXkMC7heSIBjZ+XBtVdsQ4GKi8ykWxD8yXqiYYe0xdMw202n6Ihf2vlLLPlEL/8ZMo5J326d4GkVvIl4140s2maCEqZnpdVusaSP5EP0f7rq1Tqx5hMVUboX4YZq9EuajkEXMm3m1/OtYu9Fohq0u3FLwLsn67mIsfHqw2gDLaZ+x+Wg==",
       "3f19f7407f162520194f7807": "vOaQK0Qdj59VreSWZ5CYop23mfR6nA5LLzTu4ugnQi2nqS1zD19uOsEebaytI44dk05VhtKnXaGuApy9BOok1HPPcBF7vtYwRwWRgyqpDS+oQB5zW0Hdd+/U1at47/oqx3IJ3Gyl+8nC42F2Tg+lS+uftJN2WPQAep2BsWedXRc66u+VGhw8YN7NgcZC62ETrQ1vr8RrNOJ46RsCmlqhzrJdgy0em3d2/iDoBoayjm9PFLZOmds9RsANe8Wy+R57pHO/CWU+V5ruy5+3PUySzCkggZ8MpSHmUjUzQmQ6UHp/uyclfFHEjrF8wFbeZDWkbk2kkJAdaJdQnIcX1mFFAxNnPX61IiGwkG7BSsRXq4u02KRABvfYMAw+75K5xpc/ZA==",
       "b6fa2dad5b46676c587e7e54": "ZtxVMzhFkIPGFuMtAhSgg5tM3OBmfTsABhS1naf6j4iFtzvwXQNkZW5O93SKtU9AgtUv/cx1B+69FbinF1TIBfqq/z54Yk7Q9noNu7mz7gy3XBGHuvk8ZOaKi7z/0TUDanvV3/g94qQIvsq4oJ+RoLkRvd5FCYCMp3RG0BafNRWRXhHDVA0tZQlg9Ik7R0M2pmlkYHkg7tX31DBrANXo0B01LF+YxSciOb9ECKFo4i/bnP0oSyxk04Sn9t3JCTNfEkOIIzeYk6o11Wxt4AzkkP9a6WrjTgFiIcuZ9HolDBnWbctN+Npql+14H46xGnlJ7V3SQAQ+ViqW+qXprzhNVSmv+eHU2KKlk9OBnElx+UeRbC+RnoCXPZsg1IaTdebyPQ==",
       "4d4cdc09463bede4c0f56adf": "ne/NoPR0LaOntE4fPfF+PqElnvd+NMW9vN6buive4dGpVM12nl0hIUw69Hju0DFINBhypNzobpQYKQ5hlmASsWTOqcOxEKIBJLSjL/a8jQylVkhh+BtvQA==",
       "3ac05daf6583c3e7ea2ccf70": "Ey1EgGxcQUj1dS2PBZbXEUHy7hWBss8Dv37N8kwQJY+R3L7/FK9Nj0tqPL0cA45JdEgc30pW7jBeBzpzXWbO8MKIF1wv9DNako6SOb1qBILVaKNXdVr/O5MKh/dUEQr9F1E9HGwvmnTWtRMW28i+N208YIVk3GATWnBWAb4DEgh3q1qcTgCXFudksIKfjb7F4bC350d4uK3KWOydhS808SjkmdlyoyWzQZe8Zw==",
       "db80b5ff33ecbb4c904ee924": "oqL1LQya0oFb0p4KfxQm1alzUXByUfS4Chm7/CBEFRFTcRGp3qkvGFwadgvRbL3eI0Hhz1TidRMB03l4Pxil8c2GfraFcvTMVLqXrOJwNGZ6hIH+UFUBo+VqWmsVivkNCDceRnz2lqtLIgEMWMLTq2iZJjI2PLiju0KwiH/SUMXtxQqWEF2WJoLR1SHCs2YHJGbJjrW6+USW0imVwGkfizoPG1bMUi0rp85UFQ==",
       "ead97df09f410d3a36179701": "rkT/sR77ZQO+SpEWuzZtfTq4Yx+78CBQO/Wrq51WY8Nxy438RiXg8E17BqaqBCLo9rG4+drdzVYnz8puLFlh2qXSfAAz0NAgIJSsHUzPth3//dOxmXNgGvkykp3p92NkmINYUfPOVVgaCDnd8XC8QhD40Er1vXIwxH+vYdKrn0i3JQ==",
       "d310c0d71ecae1f9b678a717": "HLmIWbHclftuIMtt5kXHNr2WAXzYhr8ikrcc+yhXQr4c2ZOKTQN1pRBx9Y3DuVcPN5H/wAIAz3wl6XKxLuLzR6+ftOP9tP2fuonoki89MX/SFgSmQ5porKgYDeCbv2YSsuJfDx6Z4OHaEBHI19MOIINmbjpqLJeeHPWk4PVn3Pxhqy5hXyfpngwX50jCjOm7hq6uRY/Pe7+c4BRgLYVku25jj6IXzZNUSSq7v31ouBix0G0ZEVxoqkYjw6ZYYLRTBRnM1YlhKh3XK6PVHItqEmDXuY4mbQ==",
       "05f9b5a0477ffa5a80109f46": "Btu3YoKs2n06b04GI6QAQNUCiUNLIRKhcT6VHdZDAOYWWDSLfdBeWZAwceqvfkEJU9qdTGU2TlUmqHzQ45yHxG2pHgv8D5R6Dex5SgLU28BDTM9Rl7Iv97K7c/kWVx0S/NaatqIYoq9AJVtOsaDUBy02588nIn/1mKESDWSdcSJ47rtQaZGfpAe5fDRzaJm3FGYfA5ET9j1oBOn7Ho+rK0s9bDvM2BNAmHt39e+JI0cD9LVgxhpI9SjV9lZ6KPyxwe+67NludGCmTMUKvDbU3m5B7FZ9cg==",
       "1961d6eda29e9219bf29da7b": "4KrmCKwys++VUVF8vpKrC1X+c/HDAS9UVycq8Z0ZyVQYSldWqO1GywES3NksxAJ/Y2v2lvlf96EcFBn7WGj3m3I8CEZInh6AGmNkOFGrqgj1xkF70J4tiUKtiw5qHY6/fL3eQO1unSKuFbEcLCtISnYsNvS0O7xuhQ/kDi7kqnnFBQ==",
       "090ca51dc3a04afa69fccbf0": "N0W5u1F5oonSHMiQhkDgEdYbBtOEl59+aMC3NqVKWCL31ibZBvD5RZ8KkC2UHuDrIJutWif9ZWF+Q4xPOAC0yWDgDb4tpGRZKWyiIjx386Rmdhvb8eNFPb0qlK/s6o4IafFRV6VWtVmKHsUSzowsU14td/kUQCuuBaP+muJ1C7ERVusHoUEfRnOw0PLTYvv3ABRKCwhYChn1mdn6CNilkMeWDTICzmxkvxwV4tVlPQ4t/7JxpJz6nHptWxXboCqQfXuVghtIAa7xmHLRY/rN9KIMh/czGg==",
       "aaf47d71f7faac0a5cfaee60": "2PbRxIKtIVr+rgs/qeejCS5+5WY7id3h/22GHMbyVb1caJ/N/rG8ZZeIveFbw6a0TvWSNd3SUP36y3f71xQyYO+Kt8KE/78BLRGQCxxTau9Qph8TdvUr/wCyx2ZrtSbBXJbCC9Xm3Hwxb20ia5LECV04H/HNeWotAy3/qLY12bYkJtTg9E5Hs7bkeg0/RUrHPswqY05HLYxVxkNMIYQcZ5QDq5oomABcQ9ivHIjEXH8DND6CC3Sfk1p5tY+33f9D7WXYj3HO5U+UzhNfnsNI7+dgt2GxYw==",
       "0eb0281effab1a343eb1991c": "qkHVIfz8kqtA0+9BiIzZCPKtmdtXVvlHDSLzkOL9nDZZdrG45r5NjKvM/ymK4t8fIorwJviYgCntUxYzt3CILWY070DAbe0R28kbxwmramb1le6UFzuKV8kn+HWWMs1cZhelaK6AUwaNDkewdm1bzbGxGme71cof9Asg7PPVdj7ga1HSVyg+VDcr4zI21/caDLuA7rHosa8sJhZ+WybHeWkUNA==",
       "5756ae0207aa47ebb57848c0": "N3px3UUtmMTr2h5kTaz/2azoMYWN5uzZy43+2Bf1go5BhKimYYZ+EZK9T0EsLqsCwJe7c/UTCOzYgv7APs9OOJy+oDhjDcm1FDQtrwXRCiQjcsxg0TBILuVNMPQ7ImyGLpINa2Xo1hmV6RiCHX/rM8vcGRt4wAtGkhq20O99UzZKDEvZEXsktOdN0AbhFN64Vquw5w0wt0AZTJaXHQwWc1BJnywzgibRVdVZhygM2Wlnzp2jpwQjhDZVATgGhA+afriCrvca+4OHOS/rcrquUl2ucaCNFJQKoELlogj7SFeOpLKRZpKeSOydaZr5bhSM27dPtXnX5A==",
       "7398c185bd96a5d04729894b": "jrCoiIVZpy7b/AeZ5I60s3EcPJ8+5E1abVsujwRJuWHJD6OqsJvbPKxmC2q1w+jl2F6UW5pIazaGEiQpD4XdWPDBPXxR7DmwgcXbT7m0L76mEb8IlIZZv8EaeeqbT5y3zujzqNdtK23GJZJQX+jBwnygI8jWZmvFuH2vQWIiEpfOzWNi9wCOz+BerCWZGi+BBzh+OSpaaTKFFHSFA0iUDfOIuwMaIysbwtUK0ieBUFJTL3wOADvhQp58Z/3gfE0owg4Ly5BOlrkeXcX/bLsPcZ8KTNjkTiTVyAxWNYr03wRjcDKqwpBYWfPjdXpk7/pkpMtqtd4A0w==",
       "7a30276add9d0e37f21bdf72": "eM4KvCMUy+Unj0wZWYDdQJX5iWLmZdMTKz1CEhoLrwskkSiPMl1YqtPpJjFgL6JB70h9HglqRnjl1qD9AA9zpTb3JN+zuznGKy2nxmAN44wQ5YWXWLJad31ibeZmtKJyEQwEBCvkZmt/WfGWGfdXYoRoSVpTSoJ+pKOMMvzVVV7RymxkhXJQIf/+4efMfhonSoE/qx8vkUDMMo1RWwDU9SpV02GmUbfN2vAc7gmcV85TzyHcolOVgWCiu9GWOBCRyT27bKB1Q+KKeoM1aA==",
       "e8f7a10aab1e16426f6ed0b5": "3LloQNHGD/YCQVY+uqTgwo1UNsjVIqGUXszrE5nxGjiYdmc8k8d9km3OIeBhDrdjeUryr2zFOTPULlwkB7jjPhXIMSRwN9lEhVUf7Z3rMQgDk44YIURKDQrDPwqqTRzEfpbGxq2CfC10SOgBxMJqCYiP/WWbJq0pMwk9ssLyE25xnWLgISX/d2mMf/yYyVf3izm0LhpWAUPma9mRM+27RYm4/XiRahKNL167iTqwH4HyoXkiU1or5XKY3vUHuCgTxEMeXN+kEopBvaOWQlGJwFC/SB9gep/ZZTqe21kVnXVTU5NJRFnqdaFSxJpnWauKEGH9pf9RzVALmHOsfW+UZsPh4MZhgYb5+/ljAADuoddKbrxGCZYPHRSeZiR6oLuzrg==",
       "bba787c9fe765b8289a96bb2": "Iwqi5EjsKQEwI5j1KVHNuI7Ip2FxIUqOVEF1qzDF4oQ4sNlbEIe2prMk3KtNi78VLyIeAAiZoPOB6PCvSU8Z2CYDi2QO0QflLFL71zAbrJMULdRhmqyoH9H47ozDcrZepYEdNioTi06Z1UqZXbnhVYcTupLOq4b43gU/k/4byU4ReEfpTjHONMN7hq9gPNZzBQ0xfcXill5eZYmAVqM5lqb2FALnm5b4ZH6hgyNrLT4cezwuQCMlSJg3fWBz3zXmefPpRRrcXIUCGCqSWPNjsDwJiNH893buxnX9eeDMQ2nClSyngYAc5owlO2dJoYBpmaJiST/SHG87/rcfrHCjOYKTjCG3XU0XeXxqKX/Tvxxu4jkKNtqleucXvZafd4QP6A==",
       "f17efbb7ae1e9256a018a42b": "bynpMZUP5L3UU48HXA7jb7TxVmF0eDQEuKsA4DDtHeJF6+DhAE/NU5oZCqACo/0b1a5RFHIKD/kr9U4LcaEg8gSRNVVmw/y8ZubGyMfMFGUSc3OgcJOueoqpfsSZBKRvBBO9UkbCcwAyAcEJVZU0QGbwp6pOlYpRtXcDCNo4yOkDfrZphrNpcMiOrBl5suxKVTClmVOJUNUADDMhzt5PWsLxuBIcnx3eUNYgoW4dg0K46tEfXcUejfydKHuVF8H9ZQkyOz3iOmNB3Bc6sg==",
       "848a2c7a1232c43323ce454e": "28Ft+Rtac+MC6pdGHSLXZF68G43PB56J1KoWBv0I0puu11kNOuQTSgjogXNfTGNWlFfoVZNU3531RGHrOa4Pvyh2LY1RJfKcjFISmIKSynAg+qQbbxsPqbFVlg+P6qiW0/KWebdE8loFLQfpFXP4JOE73zClzSZDz72SJIah1qJ5f9KZK3/3FvSs5fAw/Vmksvx7aaQO5LfuWrHYPEi3lTZsPsrQ2ZH9DrhJKq6HZQlbAQehFhoO5vtZ6YPFhoZxghpbGxcUHfgpEbVJ21PA1gRLhAsja7jvLLZ4n0Pquau66u8bOAkT5ur23emFL/MfyHKkkEt2/S3nnd1j+SrtJdBhecvd/R5RpNDKKziw/Q5NztAQRcTP2wb/TBdpD0jSQQ==",
       "7b551e78f26398263d1753ff": "ll5wLSuija8Oj6Jlpmk72ockncxx5mfTW+KbO6xD68SwavKt/he8fet9ZGV7sDb4FNlpsS5nosrfST1Maqe14wSG1bemQeDgBtQc6X2yqIgygVMMfc1nAbjWCaUFFraB+Svw3Y/mhZMg2sBZVzrgKJb/Kc7bt41pmG/gR6JjEBZZIfepT5WEHgFLvG8khGf7msT40E7OfCWC4Cp4BlFrb/K1KYCJgbg4dSQumyB2ijYuJmdi0SOSfAd/xjLQtqoU+rahvZR8gpyGg2YOKfd/styRCO8yYxtp2TNt/KRHt18US7nEgabZw+8CjqwkIpgWMcb+NCK7FcjRLA3/IqD9CSKyF3DYKOtvNqrrlB8zqklhOoE6n1p1pOWcPuiTMMTljQ==",
       "5dab0b9db456261f42e428d4": "swy4IfA7+hU0BqSj8isCa0dYfPH/7AxByn+kBLsMksrpnVJEztBRJ/8hciUbgbeb/Ozhx7mWaWvM36sEfp6mxpqFkdSWzCgodDg6TWf88ilhRJTYJl2pVrPOUkk2HiXN+1pZPhdZMFTVVDWVqMAEQ3XoZMhxzwW605abF50fVdWDBi2N68jLYXYc8vp/WEbGybsEHzRNot9x2B+81TktZK8BGA==",
       "94f856e2effed0547519a006": "d+xCJdGR1f/wg6i00CpbAFmqKFpxh1Zk6jkiZcV+9vrHHlwh+tYAIwOxAz+oNhSma164nhB/f3o2YwwcixwuFRfhARXas4tAfPKI0FQVXpk9B22L7FXI6oc3As9hJwW/tmQcdLHefBHllfn8wsFeb/UD90sO7rE9eS4UeY7IFJ6hJfvzED4pMGfkOk3LgW5iio4UlAs7RqQQAypWyu3R/vAXdzbG1p9POu7JvP2IxW97tFsYtL+mss7Zf8qLA0++c3X6C7hV0T+KkBVXNJGgB3wiPyj0APu6B3S7DlaLkUECHX/iPy2Rh82v3BL09achVmiPOBuX6Q==",
       "a9b955fc451db210184dd571": "72Za8vbn/9tQ4ZKLynEIE1xel8f5zwKojXaCpNbn26lKDeEIdPFK/8TzgEfF1TrTXSZsNo81dmEgnREJERqZ9x6q8Qber+TMXgc+bXpb00Y1EjOtUZQtOYGXwbZV+ZKGDUc3b+uSMLMMxAlNRdXNXAUg71zrRNcZA05BwPlC71PlpAypv9Omals6Y3f2DqlPvcGpEP52ZkW/9yVxTbKzVTQMWsswMGBejtmsIRxeDCHiqyhhXhQMTmts99LDIH2GuJ/RqMbTQXIwBnMIxLGetEDE9dq+dPqZqtLD4SPpBa005V3+RRyBRF3ZTICKXhYvJ2gnho2NBQ==",
       "6204c2c6f908a43a02ff32cd": "gV40R/3MdPLTtE6yXOS6w9uKPvyJWkSgi9VrUiO1ImA20p+HhibC9F+S5ul7yyODXK+piqsZX4+31joO93fgSVScAiSiKY+XhOcf5Yz2P0XKXDSDZldvMmtgIXZKdH1k+e/TNZmYD9Q5py/vDwYykGnqe51Lun4yiLsJizJ78ETxSthS07XO1IXgkPd5CbG7SOZVToOgAU8IrwUPVMwTcgj7KrbGDA2yI8/QvR5hf5Opj8UCvX2UqfORrae9MWSg3227SbTQNYykk1Yd4A==",
       "4620e4f1020165528f3e1196": "roO5UsFFTwWb1hOvlYZQhSisRjyHYGYintXABpoUKDQgh2LSd3ikGexUfffXPc+aBimd41qKKhJdxVsuKMliZGFHRW5151f4CMT4ykIaHQO8IM8Lhqa1ewzJsnATITBEe+327h9u0UmXXtDiV2erpqRE/7np0CRrRIxZCCIEVSCGwZ/nM77KujkU4yGmi7cEEPCVMqgTt/P5QiOQslopO0aCXQS11dQ7pSZAHNKFmbQLYyC6fhKR7y9aByh302nyTiy4PvMChMJZdXzesw8UCIsOlP2Z6ix16jed3omEK9AdH/KBBP0RwrWI+Tseu0tgFzMnooIMMVeheNV3DpgJjPkPndeX1auwbUnqEaD34yr2g8jzq8LdVQp0xLeeVFHx6w==",
       "4fababa718fdb611ea28b713": "CG4LwI6nJ9dNwLA7JnK4lO/HJIw6odZbT2TcrPX6NEFC5enPw1Yc07keQE/PxJc88FIOpOcrubccciW1mqWpPItOwvYGqUREwCxeC06FuV6Z/2/uKKd51SDGYC6tf25q1ajf3XsLR7OxQu0btLAmOhoSRseK1XY56SWSQxzaJTZYLChNWYQcURiygSkm80RT9RqTToLHhDzcHtmZdbtfl/Byc1u8TUe9OrDXk7NRu6Ti5N1kDMM/QQcR7RJSae+fn4HGARRMsNoMBHPEd/GZY1VhNwrmGkI559XTmgGE7abWXgWxwpHY9Z3WJ5XvVnf4Le5fyMdF2WI51kc/KrRTn1rAd5lKSn/pDRlAvQ5vyBNWFIkqvtpVUmos0FABzcce2w==",
       "d68a6b24ef5a3016dee04612": "25Fx94TOCt8nz1UsGGFwWiLQYW3qOhqq3DgQBKQkpWruAg3dQyT4txkoZ46mkEnD+FPqB/uY5bQODT0E4ExxFib2duT0rF1/dcdSMsuvHZfwK27FTl7x5TaiXD0/R3bFlsHf5Y2Jo4hfGOn1mITAUyizHk98PV2qop4hzVgx/9nAwYAXf+Kn5XkR9jzZ73xnT8UcaOX66q+Syp9EqMJp9PID7iQH0cYnRx+oJvp5k3QI4wiAPwuOERNUeMItAHaDKWitwENaYTlaHmMCVw==",
       "f530664118efca45676eae77": "Nmbb8AktJgU9FEWZNONK9mqxMAAAyp4JNLAZj4/6ynazeFpzol/lJ8lmPIL/fguC6dDkqScrm+JOxeJc+moT0uvfaj6E+FgxnXg7nz/mfI4kPmAcA4Ftgm9nKpj59kzCzIQwbNfjM7nJfZnDw/IRnIYFOxGBgS1TmTfG60PiO5FOXNM1S35xbwhSFDdLN8dCMBI05kApJQNZArFoR5NlCQiSAq1Urhyxzy1LfVeUwqjRI+a2jBTGDlo8RL5uRGhqah/hn/HSO9g2rw7TKRIjj5yIJmdnoQzQIp5PJgjf5/KXSOwic76syAW/VmvbnAt+K7Hb4yQzmEUgp8AkUMA6zJtDNvz7rZ/Py0PH+mb4DbfeWEDBhplrsdSDvOrq730Yig==",
       "f4603c9da2b6b1bede055c16": "ru0e3VuZbatQS3wM3p/8OQC36EWRwSgWIUqoVmiTS6GNlmdKDJgm/Hf/QblOm4flKULzTPTFsjF+WZG8SlN8KHkX/kaQkGqHSYj8qh7czE8OlAsP3q2ZkuHlmT8FshjPXKBfiMoLGk8SsIYyHw4imPgpFoT97Zf0uCoLj4PSyfym1Lm4ve202VcWQR1MkbgOd/0yEB0fOy8XK+ml0ARVvUcDLvRb1WdzFoNtB/kyivFInIv4OLLS42cawWzQnwhytw9XduVH9xjMh6iuFxsJ/TbU5Y6jAsBeEXv6h4dJ90PG8QkrXArY46sejrncGWQ4zQhMPylZYRiJjq2wjP4uHpB2DAIYr0mG63hMy9RrJbbosvP9mCbEXXP4wYPBG/eD1Q=="
      }
     },
     {
      "who": "☂️ 雨傘廣告",
      "need": "要給<b>爸媽</b>看，想讓人覺得<b>安心、溫暖</b>。",
      "s": "2384254255e6a8df",
      "outcomes": {
       "9d96663b463c8a56041b4cf5": "R4QX0FrNL3ZXpX7JYL6znT9qV0gCxrClh8kLSPlI5ppWlyWCbJxrXUf+96R78iZTHwdUsFzib+sfxagnQ2AU2g6+Xc9RSYaUlUd1l8H6EujXcgxavGegw+FXwHPDdrbbQ0MbJhjNSZTQ5PfhJK1jSt+l3+hVGP5dqzq1h6MUU4xIrpkZjIBe4EqamHRelH151U+Jhg2fK4FjDDeTfXWVNT08FmlssQpwoa4fiqi7vg==",
       "904c632ce0f3381debce36d4": "8atZ815rA3BNSvXOfAY/PoRY2s5clUOslBsM16QZrWHhpek+KwLLWf//09lsAfI4h8IBkbRD3nUgttluqDUZ+QthT6XzneJgyTN+vN/A0TrEqOiPlHv9hZNE/PrpoVR+JMfJMDWYpvY6qaHUy8JjqAOauDIRc9KWbSOHDLlpzo8MjbLIm5VccLEfOOAfY/S/qajnWlDuUrl+gY+f2hXSwDS/Z9anUHdteRVHvsKX7VCNJ0i5zhTZA+p40MQua35u22Lv2tBKR5eUkOQvo3gRNrgaKRXhK2SrgR04ZUdx4NzA2l193A==",
       "7ba65883a6ff38329a47afde": "44Xua2vCKoVs7Tn1j539qHhckwujF3e3ssUpt+dedkVz3lLljoYH5FPEAcH3dLp8znHSiJy5tgeHzxfEiOtGSw/ZQau8fUzzbObhM7PJy8TPAfwoITCEgX9tncOoELi6U7h2BK185b/o9r+FQDGdyjXaPPoRIe7DDWOSdTL4lGMJv0GXrJhPG6if+nT6/CeY9lCcj1s5mM2gzefieAvt1uyLa4rsQteFiWd2B474D1GtuwrNNS7lXqyocg5t5s/DbPw5EQ4JWwk3AlTc+pfUa4X41lLzhMrG8jpJ49KJ4RMVK4JXyg==",
       "983417d75693c8788c3338c5": "pCz/Cc9QHIAN3YWNWDtM16i6I2nmJp2FDmhL2kF+lnP78n0tvcyQvxWxqVTTfJ6PxKeoQdNb6aUnlcDm50+4/CrKKDMLAeEShtE5RGXIIjDWSlQpD1ty1gUZu4yQFirYR5mMxQjk5+LVTMT86h2Smt8bsz5pgq7wyb+hmx8SlJd1lA==",
       "066dd5269bdd7cd5748934ee": "n1gmA0O+oFwrOkiXpqKmSjLcUENheeAQSXmguOFosIk1pgfbGeLk2cTKb+KTrlLmZK63wLP5MOebsN/fqAJ6WczVQoUD141TSX7eT5mXcB8oYttXKqOKKmovj3J9cEbp00PETtm+Aq37DxNAX387xd5h4D1/0edutJFlOMaxwhLKhs3v844CNqfz3ER9/tqsvoBynJe5IdYa2CZvKu/LM3BRGuMc0PcnKGqBcjFGY5/Jv+DirDP1EA==",
       "aec3a84fb00a173a4a7b2dc5": "2QUUF0Pou8IJMjlatbOUpU6T/lBSr36Bg32OzPm9b6kHS8tDKJ//n6XeTnznCd8f46haWaEpNDc9qW5n3WEobWRpiKIhgb8gKqdp1UQB/XRj0Ayj5aXtuS515LApztC6vlxItt20VRo7fO7TslZ0owxwr0ZHjxmgk/UZKfEZwD2ZyJRhX4HAO/hW/widRJvX2iNsOZMK3ivfsM/JkPqbR50FSfJU5Duj3YwPT2Enf6HD69ooQXTlzA==",
       "87ac713e91ae3e70c8efb325": "Bu3yv4ZO0rbbQnMGgH+7TrbRBjH7zsm/XAaCOZNvrPJzoTnhoUBbt3wLni2iOLDzQ4cp6uT/kLi5uPqifsR29NdOh218pFv8pIJ5w8iq06MBtk1d0gmvXr7eD1O2NFokELQzlSvqx1RRIhytScqwS62BShWs59NEqHm3+8+AQk9mFeO810o6SvL6BuNBhq5qEsKFpYLUbuLdtnCb+7kn/32nuH6kARiCIL4c9zjWHQ==",
       "7f654e945e354c1604553af3": "vXKN/lmJCuGTeInPuH0Gr7Vj+/nORy+NJhkrUIdBMi+34PQZsKVh/Wv2ThiwcPaHbVdZEQVUQPn+/RDVzxmi94QsmiCMrdnM9bij3AoVrGToeyQijTsKg7//0kKKQJu2Yx4zlaBrzoJ0TPFeVCLu2ioe6gxF2rSi94OTk20TJGGkJh4095ZNUgAu82+7PNMe9NE3S3DjwwLrVX1hEjMXknxKWqOjY/nhqWJhaPR37WARfbBzz7U90dVHqe08gRWRRmtRHMx6fMSTU+3FogkhHQ7XZAGQCoboHL3EbYaixWKDxBqkqQ==",
       "844f76e46aa9956082d2d7e7": "EikjdnS0d1ApnpPX0P7zv9QfYDdDFDz26a1Z5WTx8v7sECtcPMu7H0UUgTlrp3o0QxxwZHDA+C5iIaA7wCkj0NOEm4y0x9QWpf2zsYyjC2TfNOwYQQoRW4/I9XQEGo/wKGzuc9rONa5xfp86a0I/dvEHrMyxTBdk28WOo257bORI5r7JaaS/WkZFtLo6z0OoU9J0Ja2mt8vgp5mNXZY//Kjg4XjZyLKGEpWUOz5r6ntm+dE5w03rRruDxam0i8Ej2MjsSk8ruaRng61BpyR+bjw0oGB12S1Rta4srekWsMI545qTwA==",
       "809aa471b16452c2a7cd965d": "+cgnmpTgg1VNthztnVZgChsYPj7H8BBFhABEnD6LSZkTUvMaks/UKP+Mw6xAo+/wxh1gX8zJZNve1ILbQgiB9MUkfhf/CdJwf+h92JsEpEgP8tBnG5Rf/gYUymYAHxzuR6WYaJakOJLDMNV9y0/lMJyZ0Q==",
       "7a99fb83c7b5b0bf6ef825f0": "R1O3Z3noqldTOJhT5GMeEv1FeYOwPXokDZB1PTTlnUzMdN3u0xaE1ja8WaImRpY6in25Yhpd3PQiK0Lqgj1PNqUmku3b2MD+NCiZcSGR5Wdlx8qOrd7FPb5CJpnQ7kEh0BH5MiYc62onVSXisFsmX3gH2mtnumtMcYx79R+BJJUP0hHXYiXWamcaRdLWT0QzQ6vxtHvQebAulDGM/xS+rAIG4vfxqRXyCw==",
       "82c1b0ad55bc7c05ede94168": "kecELJV9Id14z2EQpegF1qveoeJy73DpOOqKEsQAf6RLers7pgNoybcDQhUepRIlENohZkk7XbrA2O54OqkA8wigL0RU+bcDT0mfu9rWzLHPoKe0bYO3FT7PkmEOOACYzu+8CY1cGdTSy3tXhtOLGRt/f16tau1ceoPZ2Wcx+iF3Lpb5isHxMec1OW3XkC2n9i+WXg/Qm67L8kl6VbezZxOP1gtS38syjw==",
       "32521b3dd087682f27d1e96c": "hWr2yg0ijuU/VMkB03MmdJfm9daJlUuOecnz31dzik8LxVv68ugLsqXkQvyg0QnN/TqUhLIyin07tS+9mHgZ6RpZpa3URg==",
       "182fa44403dc41e9d556b1a8": "NtLZl350PVyDuORqEnZ2wnvGm9Jbpk2L/ki/D8+f9hk3DxtbUN6C8P+sqx2sLKwNnIXsElsWSTzL/Zod3TvDAjSu5768HFZXN6/ZufCArvTs7mMVyFNcw/k7HEek7XGnoohEus6/t5wOiAoRhH9b9RZYPsx9eGtXQA2xag==",
       "9e0d1eaba1fd5296b876079f": "+7a28O9dwU723TAJXxQ24TzpzKPLts6MQsJ++a58vBvPjB8lZ68Vyhi8VGYPhl3eRiPx+BNHtsPfUCrg5H8fjVH3v23HnYFk0/WaWvBuYbQVDFDfSNmwDCy7DyreJzywruXWF4/kzihM6vaj+3gRC3XajNkU5/NeG/KqIA==",
       "c200d63de93be2afebab04d4": "6wKOuA8oCZc6MGlQqTqDvnpVNocADIc+W7kubI1D9l1yoDOIT8lZi2nCVdkRd5TyL4qoFJc6Mmm1JnVvcStR+XoIxUs1FBgGT2bV3kh1Y1NJYreevZvVMDX43YiUC6QmQciQMChS+EeC/AvYSFOgHeWODQ==",
       "500a3415eba4333001e2e9bf": "KNvYgRI1NiVUWCPg9EyHOjpHgKryfxIpk8Jh8LWPWJfRDShIy7R8QSHgXaqCfnPpwcHnBV7K5y0cF3ze82e56Bnwl7x+PN0/X6Vq9r/KT5b6nV3xHy59eAPSgjbvwWZ5lr8WPhAghKMVd+Z3jkMO0vl81g4ezmW8/m1oDDa5vEC1ZLxLvRTBmsTYnPRw3Deh8RoWhfeObTfd/soPhb1gLY2Mhl3SorEXyA==",
       "868fb17ec86546a9ac0ee335": "p4nr8R3XI4q++e3i2rrn2RdRTKH4bo+pB9Pf/ROn0Rt34Tq/7/JCEKYQgaTo5BqkFISrIN69XmKpgXZZADO7XRYxkoPRV0KSO+spaiQOreqJC6YPZoPb/oKicatGZ+2zEjLdvAzMOzaxjVsvjwrHH58/ZDk1aEmnvjwvxZFvryD44NCUNtzQPGiZuQ0CH+d5KPEWYOKiAjRWH82t1SUOqvh7kPjkuhgGSQ==",
       "099375e1f6d13a0a5dd8d6af": "kUstGyzgdpQuXEAUyatjhl+M3fqwBxHh01l7+0biQWSyRvOIM8wb/k2JEKesZ3xTHmV8gAOj9JCbB0NwPlFDGkztwr54a2iSWfAuCeCKpeAiwjQz6igqaVUSCz2Vaid0kmGL6NdUmJrAY25grE4i7mxYFhkp5SB+im9LZAANp/+UsBiywOOSObI2FU8oYG5Pg1POIhnYzQF6seQI8mM3l8vXcM9IzRCp6/EoGInJGw==",
       "ad178fb02caf5e058a40858c": "jtZWMjwd1dIHu2etu6aGjOiaW6AOH3X2+GYJJu2H22kwuaE8jocvNSR8oNhHMReKgLvpYSOWz7gneT4vzeITnGoxFR8hfVAZrK3dqKOvEL1p+8fjA5vvy3y0exl7q1Lmvs9Bf/iB8Eu6YA6rNU/emtQbWzEKsxAijip2uh29G8TGv0e+/I1KpIO6LkcfXAPb92tFrZpqLb9RfyHmo484a1/EjekbrUJlAu2OgSXRUwv5DJDdZzgVpuLi1fy2Q/UJX3d98eSB1wr83ac/TD7pxC56DoLV/Oq3DQCbszOQxAWOD/aoBg==",
       "85d76b65bb7f3551f3966bda": "8uSuxuV1H3HzisDd3jqu7tRpYXuOB8CJQDXXqcafLnGpnmslhn2m3EmHmDm3UX7k/GXiy/0mBgWQPYZEjXqQ4ZpnUDly1AFL7trtBcmc7OF4E1lHWJQY8i/5Y7QQwAkP8Gi5YRAyeb7S89fCBoQKuCBhYKiPjkdt+wMVYglIU4QuyyHHezqe1p4hzgePZOR8L3z1hP/16Y4SNUV7wbLlsdJqNyCHfY17Cu76a3qZVJ7cIslVShRiWCz8/Mv4ND7dIXBgNtV65KN2VDsUPnJmPZ5MuA/0fKOJLimHO5HicdUaMW5NPw==",
       "1c0eef627071f5d729119544": "NvP/hT/1y66I1wO6tkOidOtjLGO+Ismvui6ReagrXx9jhxUpQdzw4k2KUpe0myRmmuR55pnmbwsMMs723lJ0VAWglTex3+SuM3qAVS0UtpOGAMhjarHjMdlwequdbpoLJLIWwE/LSHqsxHhZklNLQknpLBIdgttVfNNU/zB19V1sQQ==",
       "dc0b1c0f1a58a613cd50c3b7": "J/XV1SGsEGMsTkMdekaTEWg651sRDANjavPuAvGGK8Pa4NT3NQnAWXT2k1IuR8qwuBlYsdEk8M11ohhubI4RdEsUOERgnjeCJSlXMCSSQArJE+/El0vFTcrt7U41U/JjkqWC4A1DL1KHwWENeLuJ0muD+WdO4ulhvqrz+t8x1vkwKYUn4IsRVlPoRueLtMP+MS6kZtlHN6Lzbpz0R+lHZl4EuQpGMKOqxC2geNt59NMTF8EZj0L3tA==",
       "da5e4a0f6d1af90f0512a482": "J6bdmb+HC3KEd0nvn9a+V4p49rvfshqUrbeyT7XT5DjG4TmaxF59bbqsrIJcDb06b162QWGX05XzFoSu81jQrsR1RNhHccUQD/630TAeY3i++GitgobYCObRQ2CKydFdfEPbVE2UtfVIClnhZmOWrcRSK/Qy0ebsgrR9Im4CCIB1zqHTUn+F1oIxR/QdMfuPpvYX3iGW+lkO9mISUeH0ad2wCEo9yNnU1QUopcRCJPabSxxCkOsXpg==",
       "f61ea53ca79ec3cc6648d4e6": "YkaluN1yNgl4gl6V7ZOuRts+uGph3ms9PCLmcXuFmWdZ0xIa0R0Z1Na1JrrR+FkBfpPw6RhuIlzbEIswWWgn7A2ubxJz8j1uSLjFwwD6iED9ykfhSjnjeWPqfDusjTfs94ZIgD+XWsPdl1OlA7HCNOCi6lalVTIv9Bu0GZ2HY3VRfWvqIT32VrVsS64ghQYRBXxx1iKaP2diqLLnanfKNir/qYcnWOO0vWjuQzzs8g==",
       "be8084bec7349d21610b4621": "aEi3HZuJmhADRAPskjgktZRHNrRJ6AeT60qY8iPUVm/7JF40+23FmNlfhc9e5HzpLlXvPQ6uciOx8D2X+66nhp94c8CN6hiskBTcIaszJAXamDqEEn28Rp/FhPUG0GHWnZj6SKQLE6TY7IWwlbKIpH+WrFPmIlGiBUyuOhFeEpQjVjUh9iHHm148L+5RyAecG2qHAN7Ki5f8lQVcvxfEjNcS0wenVUesgz15+ryuaNpA7wwTwQ53kkkgKsGVt1RPCAuBz4MGJBMnj0AYahW3NN1STNTIZqNxl3Z4J9pmR+2TK4bh7w==",
       "15d67aee8a885d4384f114d2": "OjciZkDfPrdOhdNszBLFXK3l3l2yoYhvHJ+1bU7pNmTbLNkFdoHVOHFdgcN0+Kjq4dc21TJyJxdU6l4SOIqh/8nuRofn8ZOiDaBMMj906Fm7kThcvFdAR1yF/ywP0ZkkVgQWc3MTsU03AxpW4yC/FfEQG259PHb3wvABvYaD69BaodgvvxpfyzuosmJt/U8OwkylVx+6GLdNf6pEBliQHd9aWQ/Fz/YOUdgFaFbjTteLAERwsQ+jSKqjvebcCPruQlhenoaATDhFd5l7x/zl2hzRvvmPnq1/nj2FLROaTOxwd8CtZQ==",
       "be80bfd703e2c279dffbea73": "S9DpX9dRNSfPqpyvhxshzcn+ZGzrOKrnGWFsSQ00CIW1NTEvNXfeJrN3+fy8W+BDaqf0n/SIqvlqxC2bNycaZ954rrec/TckQ2KZhveDPhktGMWjdGFextLTHGNzuGczKTh6NkT2WrG+kmmn2bmtm591q9nHGi7U5txbiNNJgi/kTmF5pWrFWNzAOzN9SMpwDst+vxcz2UmgZQ==",
       "e3f3f109ef4dc7d7c877c033": "v8sSofjr9mv7cnfqmvFWvnV1fXX1+CiHk0U6ue2ktp+LjpsdHbbH+d+w/n1vbGgDvIfmq3nG+NbyZdBvafbxItNt6hSZ3yGQzs5js7oGAO9Mqgt8HdOXM7VtFD/Esc2GYm2p1nHivDZYZKIiC/rY09eXtwA+lgYc+6XrnCiP6oLmloD1AHxtbvEZcNTeaNZ5fcwzwE4qMtpnmp92HAloc2m6ArwXDV50lvHuXn3zg757PRv7zT3VSVh9haJ6w5jy8V+Xw44wRee9esnHTMoPoQ==",
       "8b766af62ee97a33ca71a10a": "DBjDkTndOpzvgK9yO7rMq114GwKQgmvf4A8qMs6lk08f4anEUrEqR66JWwXRScByLGC4PC02EjW//EefuX6yvxwkQQu08dNu+B/NRJR+RsmvvI3V7tDTWakXtN1vIqzuwPiivwpUSXe+72E2fbD7VptuGvK4XdEgKbW1APsw07dIiVbvZGV5knV+J9OFt7ectbRFTc8aj4kTtH1Mc0mCSoyxLXTMu/I3VdjHmLKFbDlOiOC8F9/x74aY8Q70EbRBG8tzes7oh+JkXRTSd++kZA==",
       "4bfd0ded61bd5119ad45e7bf": "DGvRQGctYiFxDNZcAYcANInSmm+Vw7pKMf/k2h6I6LKpv72DOBCfaFEzD3Ifnp7V3y6GvrT5ge85OT4e/4JCKk4WhLVbPx6pvQ8LQIllz8UtVeSZDqpY3vqCgyejiH5MK22QbugGBVYoDGAHWA==",
       "12ca86ea8b50164dfdcc25d9": "r4G3cqZWg/rlX5rUP0Tgu5jVjRYkrt8iQ/gHEWzgNvA+I7JzKE63OX7QVsm1fWh1NAZPfGrPzOvBnZxmXsT9p9piAD9wQRS1WbfVwA1OBOhdFf+oSyZSQq6APC5/2ts9HiT9qsBrXOrsX7EGHktR4AQpxjNFzAvKIUPVj555+KBi9GTaFM441BE+n7k5aeOvB4fBDiCPz/W43nCpu0k0j8mElA==",
       "2fd2e5ff7fe0382fcfb31e25": "UBRbFwwGaAG6xBUTdHjOwnSX29qLtHY6zX/lpkfh5yk1rLSvULhdflfaIzIpyRJwmSiwMtvo4CTIuXzln7cmt5M8H8OwHzaDfuJiu00zuxsZg+UYm7gU/YCq4DVKU48XxqRdClxeHvknpvRA+ZWPZDA2MDEFwcJtAs7dUbbbch2HgG8bv4B8TlhqdFhL0Dc7hOCZgqjz4Xc9gGdchBU0XVaCng==",
       "55c208f4bc544e976297e421": "cKZTsHNmeKlK6RkH+zxEmuiWISLBwxibCuVmD+1H5NYflvQ+zmYZVfpXqpKd0xhrpr+CvizcqprGSDvzrfOEsg7xEn764UCzcy9ARi2JAETvLIz2BBHDpd6qT1eb15GmuOTUolsmdHXI5uK8O3JVLxxUXarwMVsHoKE7Nrln2hqZYN8taHMtLL8dfW/GeO9or8FExscyYNcoUA==",
       "1e7a512d173f59a3157027ba": "H325PrfHt85cmrqLLdWlbkqSPuLa639+WXHWK+YMHk02lSdaRP2RIyntPPvon+lanjxCrnQhJsp+AII2fo4VkHz/XqqfIG7ZXrUTimXHch0rpfcC+zu2VUlGO8fxEIj1O8n2axKhg58GBg6/mjAgSfXSps5CAKcEU7gKSEVhsMeyxp0ZV+26hDgfJTKS3i57Hm9uHpmv3ffOhEzkkFgODGk83jBAZRgVPh0v2WAlPKJjOzftYFO1pkNEnOCCuNlp663WhgBepPesmiGVMcdZ2A==",
       "9b265662142845da9c101a69": "nioOe6w2iXJSgA9WlXByWkHgNkje+WF+BzksZZPdOAsupsgPWp3Z+R23yLAz680pacmGdTl8/JWAMYxIfld4cmwlEyomF43ogVujXGe3QZttQrb0JPTJBMGVnvHYv4ShUptqV6AYnv2odtQUqSO3RFY8juzWRUaBtGFL7dFg/AeBx1Yts99jcZj+rtvJyHX7tolWC5xiAp17SrPPk0KH8oNXGY1yHp+CVi+E+g+BPrCoKpPkj+EBYly0fKAWiAH0sVyNU3dJYQw1NsJJ+kJf5A==",
       "0b1392b602e9237afe63b067": "IyP04pQ8fWJr2yQVz3jLlezQ8FP7BWQ3RblVFOYiVtMDy3hO6Q81e0cYay+BcZ2HXZ5zRA92/WZY1JNitCgiAZHBX9eyBGcjdnfGLS/odaWHR6hXu5YbCxpItANndw==",
       "88991d1b243822534ce2dc36": "PXSyTAXUz5NUkrKwKJ2aTYdRjKV8DClx2wcBdCto6gpKAYlWpwJPsc4gIhXVbnPp0EIrKB6wxVV7WX7C6yCcPW7eUMH7kxo0cFXvohQaY269bJueNMHcdlOrXGfJqFEpZM0hV2PlKO8/ZZ5CZyyh5sx1432q6hdHXkbvTHT11e4Q9PYK7C6raHM1dAApo4lArB/kdA==",
       "4c20260df86924bf0007a741": "kKxB9+YUa9LFdEtVpKJ68RgdUC2GiI+Gj4J4JgIpRgcsdvtBTsCPc3jp8YGeeC/dLXt68Nxqd5cJ7vzozPulbOwPoxQJSOz8y1Jpnhit2N4twZSRWb6bCeB+Riqp5vvNKLLRFkjNdL9oP3izWjGl5wjq/dSpGQV2KQknZxR0LyOJ2HY6dS/n7o0bHUsdw55ENs3FIw==",
       "07cd1d51231bf145d9e94c3d": "lpiLhT6wRRzVrhlIUbqw23V3YAGnt94K0tYn8a6PYmlK7EHfftMw/DFT9u54Ype1Ta0dck2/0AcS5zpcfDdH6dUOgY5kbJBrp6z/WHTyC4zmMketyN9ofSH1dB52S5QitOpEcfLKkRh3SjThZsvfPCGdDgbHsG6tqCcHyvPnLN1fiqwUzlACfuo6/WxQvvxgihbX1U8O3UGdOwlpnYHKcK4rNhVS1wdD9zMI+5AnBXB6JP10MUA3cOHdA3NR1iG69WQ=",
       "b7b93eda5a139322db7f468b": "IAeUqmwyeIoHZP5pNA7o+rzWlqc74TzIqH60aYx/RsqCDI4YX0MG+zUVnSqHHjgMXdw4hoAHxa72YEWj09l0pYxc/4rR9Y6EFqtl3AxYNVqLk/OyNEEvpj1N/nE+zmiOGNrVYHA5Ig==",
       "7740d94e17401ef237b1e505": "Zv8tHWpJvuaQtbkh4pujTpzm2ToufP7k6Dlf1hxLHjRPCMXJRilZFDmH46F2LlIsIRvbwmxhy3ArqUwWq0xL/kmw2l90hlNzrfA9cpBjgW30yD5tdb+AAv7FbRTaFcArrjmZUWE4Bw==",
       "cea71083884c5e14c35ad694": "0IG6NaDOxla2xcaatx0HN4LGvt8Bu5iSiuomajhTAByDUrRRjPTTAEQVG+vZ/bFrekdaMUnwPUKgw+spXZm2kpkXVs0IQXryA64ZCnpRzzcbA7zmRS+ur1adCkR7Pg==",
       "3857c2afe321781f7e81c299": "CD0VKYSq6vdJNJWfe9VSWB8UvfX0L5cJWp2vQBvk37A2Nzx6MwYz3AV2QYPY86ifBytg7R22WeT9J3SZbhyKi+TWZ17E3T4mC7hRvLLOWrcFTX4PInUnZDdQz5CaSfbMdmM/Rr2qv767uZZp19kzZTX9O35n1EFjJm/qNNrvzNbG4lgLRy+jVFjtonAegRd2sKHNNQ==",
       "13433e9bacb19f10365b6d67": "2G1CpbR5dfp3FSo8LxCyILSurktSl7CzZF3rtwzc3VH5DbogyOonqLqhyWYUznIcRiiWFSzX0SkQPGXURJ+SmqYNKY+nK6sSrHNy021F4zd3YgFe3RNl2ilLUw+06VEW1M4SIvBAq+Pi2nDXPU/k/c0n8or0w9lVFKbtgqQsxfXPiqnEssThPXmY/8Gv305MwPdb4A==",
       "33cee2d6337fd81c2e742d4a": "bfhmntOCNCp1ZSrghCI84ieIpMlPXn8znu3g3/bepwHePdCED/btROhD4454IsWHR+hpMIr2ACUgfoNezVik+yIiRylJKXgqtQBYVuLOAduFP3r0anr8RkNC+3aTzDu1gjlp24Uy4474ujCAyHMAmX15ndBzg1shgUHBix0YK7HbpHAaGAM7jcf2zz0CSGgjWggUsTu0xaN7Bw==",
       "113f070dec11fda3293e25aa": "d6BTgwjClfFGfCvLrM+OzG8LH0IybQycedGUs/r3VafXGNil6jQ8W1pkzCL9a6nw5UnrTSZREVlfhl+hRVat9IF6DJhrEXtFaPZN2DAA7VV+4xXF0X/2xExiMNafIB1DBbXZR0TUygfMHfmFuTVIodN4bOsl228+TbThaLO3cRJI+MpGeDv7uJyEhNRPtc5HwbKWo+NFRSgBK5towDn+VQ8PwEqZTuoLfYASVSBVYHAQd47VT6SASEE3FTBiliD4DFyf7GW90fgEnfq4xWOPSQ==",
       "e1b472aadf6f342650fc7e36": "PzIbaL0Q+GagI7Ub5NQUfRYMBqrZWAvU7W4DV6oZfJ/55JRzyXtMlohPQQ0pHyodf6eZawJkLl2UCcTNhuZkGjxK2U9wpuDKa6OVbRk+OxsJi+pUGrfWaTJH+TVGrbFHfYVkOauPhHVrLZUw8C8jYMtWSeZLYxAApIwcVQ4C+DNxEhIVO0lWj7PY5UkqYs+Nxm9b94iUUTKv9dOI+Rb+I1idjzM8+CtrmsXHQ4DCx37ZJt8Q9R5+cQ+gJ2GMueLoiFhqH7u8cByK93TRc12Dvg==",
       "8c5b10932ddab737684fbfe3": "p3LakIfTQVXCt7qxHHcoxh+wgrqu0u1sfwnx9qpAr39//l9Ah+hgrAka5wERvapxg8TASfOfRGyGU99dBP5YAoCV50dwI7wNMHxFgaAwqloCow1WZJqT4hmjbSCia94KzB54UUKfMPLlDwhDEA==",
       "2d6317f98f459fad2cc74828": "ZWo765Cg7GWabn7d7jCFkUid8v9EG+uPqz+z6RQV/fhpV8N5vNd7jnKZnl61Gl4nfXYDqCYd2v6/rAIgwgGaXpclKcdAH6Yc5ZhVxZ3rbViKWjDmbojkjFk/Uocij9hn0ZS+9xYWNcDQvpxf8BFCrIjZf9/yaXgU1u6/jmJCLreg+n7ZwRaO8ap9vOpttqyezowW4Bz3j4hGNPFjwM5KPD9xwQ==",
       "a0dac4ff2f602d873bb5264e": "4R6onnzStzQFTZy19didyoihaPKYUJVLk6oRvA5YpDGu+Lxg/8U1DBqG7Uo4xB9urJ1ROmNS5siPhk05WGmOYXis4Z2pSp7tA0jECvxDnpv6g+RnU9NouUGpxozhRq+3nro6o+H2hbvTfen5hBt/24doaE+T8VE9vwWLG0yCqDrevVgfketHPs2rGod96brQ5MX+7f2nVFsS6z5zMqP3mbEs2g==",
       "7355a9497809e7d2116ad797": "lMe02MVF0JcegxlKPqTIxLzXH1lhFYPDNWh+Sem3l+NoKPigw56/JGjy7C9KaLXL6xcnBi2orkN6qvwpu8knHJarmr/d2WQn7lq0tzQmqpIU/rfaK3I5IlrcXzsx4Wp6X40zmezoP8l5YcHMfscfrGCfZXVPMKTIDV1xv+K/cGdFgzeVU8Tc8l7czJ6Vofxvhf8qujoBNc2N2Q==",
       "c5339d2b1d873405268c32ee": "0iASyvocGD2ouznpmmcbube3taXaHXDjClal3L4fs5ck4zW3iSpQjVi0vS6GmIpPAcsThZ91ShPLZ6Oy78r2cj8S3id23A0QQ2rjGj3fZ51Yz/bIgioAV7MVmhMGJkugdIY2ndVPk+sLKT+Uv5iPzsfD0No/HFEv24TOz9pDutkTvv56r2DysfsrX40fWe93aD6pEE9DioR/joXgeguvxjn5JzZPAU8kKnOGI6INjK6CndkxoGOK0vspYm7l6PwOivFd+tUDKvnCd/3VVQRhhQ==",
       "4fc2efeb472ede744238acdb": "/lwVftUdGXpmC7N5QBhUy95m9E41kBACtlIIcgkYCPb7TAJutUVKHYrq8ycDjd0M7sYVYAwzFahc2fwnecDeSGrCINZe19wAYyCKKomR4UQuzshBXdmOGfINhyR7dQBkHW7/tup2gKgmxyxU/m0cpB0HsIKgZ2xcTzJS9kmdGkfT+xFGdccf8WInXaOovwYL8Fa25etiaOUGwtPNg8Y8rIZ2XOPiYg5z+QWQo5FxpZm0qXAYsa1Y5Rcjt5dRz5bmstijW8rosS9icHVp+n+3jg==",
       "3e6772a03cb63aac2e170275": "nqZfWrBoQ/Ry8ip2Pj8NPwuUTB/GOfwRrLZMTPLuLBYKTsLp/huxw2MgaqP+aD2dCdqjnDzaIwj0l31HTlogRiAUD83YE5HeQ44REe0ZPmi+x5B600iC0BMBw1M1UINTYCB+JVWVAuvcau0Et/mpadtsl5WTbYx+Kfv7VTL9Uwd1+Qpi0OXWCydtRqQ4Ixt7pnpdQSKYi8woDXwINYaz0tCwyrjCpZhsN5RkLMn53w==",
       "02737eb2d3fc29477960a8b5": "R0P1N9M+nci4WMHj9NB7XiNbiTWlUoHkU6vYfQDDm2woh0m4t0En2RlXYXvmhJvykzjr9rApx0hppSv581jJNz4jTTT+DWEAk5HVD4RvFTnNgAcDg+ApktW0p9KMWBbUvnwdP0BAQcZs0lVLWOpAoDVNSRI1+zDCtdJhtNvKWblaOypSpTyh5m7m3OYyKl4H8pMG1LzDWwSKl4sh4pMVs7aDG+CuEMvtwC62nmIg5yB34N1Z4w5ZLpRtT7T/KPX1Farz3AoPew95n4ge9QUWCvGV7KjdyGIPbxV8AfgLDA25r88hcg==",
       "74a0789979f5698e24ea6b77": "R4hIE1D4szXaekoHo/4QsjsbtRidoosWBCBDpOCAkmYWbKGLUfZ6LoagbEs5X43//NtPFPyiTNTalL6XK55YAwYFlzz0I4+MQIWcCo5mq84IG4xNvBpopX0kOBlL7fNChVpLpKdbUSJPM4s469Q5kyU37I+cbPiSeZ5mBvFh87JTu7rwZIqV2585B7wCPPoDtUgu18Vmmq1qx8ojSIEHP+00qGeaCMfha65QQ72jDY+tjZVFo2oISPfBsFXwYnOuieBTQ0z+xHW6s9tDpAyrHpV1DTzm+mXsAIrv0uLC0Hf90S6IcA==",
       "083482494a4989d8d049a1a3": "1KkxWvnxEl6SYMAemG7l4LI38jM2UByPV4Bxbdp4TrYzFmMcqBsDfPAvBERwVFkYtZREh0AP6KlOEtSnmmzzxbOksy0VQEnyautV/7ewXRVmpHsbAcxMxSZf6U5Ky47WIBkWMm1uOACVulmLAOKT7J9CKUV4dktQUSmLlXEme//ynQ==",
       "9d311975c47ba4f72535c9a9": "NJTrSecQHgBJ/nCYwH2FgUBHB4F1Oqmr3TvoQxkm94y2HSFvEuLR000J+OkJ/jcCv2wOlZpz+C3er5Hvh0HxZnvskaTxqyllywIoNRF5vR+b2IjB1zs2FxlLOltWAp9x3qtOqtskQlq7w236PjpClPgSUj+uZ8JiYO/Mb47Ft3nHUrmymrfTUL/7mLNHpYF/sqs6ktD7/T+hgEUrmAfyffQs1kezQ06bI6o2xJWfbNgvLfIYXt7OFw==",
       "9d19bd99198af66c2e62cf23": "jbTFdju8LhMsZFTKoL0Ar1C5ewLsLh3II4oik0g7HiqgElkAJbfJDhRhkl92UeAQbQ3uDCOv3cYDKg2YOMfrgBA8bwa89S4/9P7fYxKxWuQoQc8Uuh+hoSisyH4PjKU/HybGEpae7+EASZjVntiFA0hDoi56NLRKBFdhcHsrshqws1X9+Zuy3ckGkyXtj67E6omf9NUgVQLiW+hDhAJGDeFsEECMB0fBDytwheq3SlolXtnqwOS50A==",
       "53f37c2a30a15f4bd3043a68": "ODZBPGT+xprZFdhMaPaquHXxBG/jYLxIp8WpMAZK6qaEjq/FgloHLweVdh8xxFxbthW8XOEio92pK4P77lx3p6+yPV84XUHnwFZSHdIeSg91GPHMUkO/cthNTuVxMnTWdfylgNAew3Pul2FLq7zPFVFhxWi79zhMpCYk3IRvJdFAFWOS0ICBGMFv3+3CIyKQpFUlr2EPq+Ov5a9jPtPuqqXfWzJpzc2Vie2IFyehKw==",
       "aed67f9a22caedd396bf2d09": "LfkV76WolfIEBhaQhreB9M4r3OwGZfEqMedSNUuapNyNXA1KH5y5T3Pwf3yFdBtOz0kNYZVYMBr70STR+F4oM0uMK8aQh6W9a053ZH68dcmrvbR3Wm3FdYT617/873KH0L+YVQMtrucAtgMXpv4gXLClEcu0QgPNVrwY4g4zTXMVGz81x9qGIpPp6WsXxbJmuyEhWEZ7MH7ZprT2ICeBmCsWhvdEhwYiT1Y6ocyCP/1SFW2JRclmoblU/7BgKydo4sV76jowx91H0z1uVIoJCDpPm2TR+9G48aY8HbRu3vhzOTDwZw==",
       "d8813525aaedf446a6cb6d3c": "vPQ+4lKP9RJWvvCfZ3FpHNHmPyFVcsjW1QGsdpgghp3aCOgJa7+xi6eYsf1s7zIPsRrjEhRwCEVH4IIk+hMT6PJN9NLne1Lb/J5doh61YgoHfPG/hzBHfszG956d9FEDFqMeaEbNUqFWwOBDn/0jARup/n4uwijmqemnMzWwAK6GauCHCY37bQ+bE3FYglo8FBUs5DEzBVwUc8kfOTOtJctXn+fgnJL/E8UNnTkvv93LWWGa6lWPGSqaaVjEnhJslm9kWsV2/Wd1uPqrNKNet4P765O2LCrKlyMlqUBL/tOk8vCyDQ==",
       "7737ace458e8c6881a2d723f": "qODQBSLoXQ0Hf51nWGftFcr01gc0KOt8IfyFwCaGe0RGqFmpulgdAxklBylbPBL92qi7mMbGeWuHGv1hXemUJSQPyeLbWLCXWjnXLP/uWb2NLOLhJN2R2HNDwaZU7NXn89yJ2/fRQLK13175Bkt79pEX7g==",
       "e21995f6e13483025cb466e2": "sggdHkTcZrXOYg824RGOC0YcX2XhpHI1R+QLLLA70La6BmwynwkEy0+cApxd8P/uBFztW7VTQkAL7M/O6NFboS48skiJFlMEvdMz+l4oRQ3OJk1zWW+kQDjAD2BrkAiOTk9inkVPhDT7pADvGSL2RXR2oztvBR7ML7oYOmyAIx80IEtuaju93yBcDNkRMKjNq9nrJgJo9fet3n/5lgCSHug2DXnClXv1yQ==",
       "90310879d6e8e2283fff2891": "t9Dt5alb5SBvB+H4vU7O/SU+Y3VHq+uST+rqw5ByLdd/eDOsC9yL32E6axzPwtN9n1Melau6XVUQe8PTrGGp4JxQ6QMeT2aZynGLcs/L0UesbqnrJwS1odReeO8yrAHV9Va6MMLNwUW5pOD4nJaAt7akjPZTUbXyBFIdbqKl0JTvCTh8qAmf6R4yNwMhGQpQTJzTWKRimvZiBddtankXnQC97C73eixdzA==",
       "55098932daa5782fc0d60382": "aEHcjP15p2sFwPEVUBuzsUd7sOphIGrQIlBJYyrZSKMNM5ZukIYJSOtVOA6JW+XK42GUCFQyw+3c7j6EtQzU1Ks6Di51NQ==",
       "e6db3353a25a582d2630af3d": "fFi3r+1naWKEBeopgTdqbboS3HqoaLKCf73/lDj6TlZgz9vlECXq7SJuFsQiUtD7TTLcvIYSjRre5eXDXD/+Mp3pTD/WhaK9ON55pJ1ZNjGB5NJ8qLP3eKD9aYu93ggTe1UG/YX/KDHrQjwTG/cxZBWVYTWv7HjMYo1VpA==",
       "8ed0c04741d0108b107c84dd": "sT2gDqLvXunsaWHxentxBP6vHvblSluDlziFwB13HKUyBOzcQrTmkCxkssJKEg5FhTALVuwZUNlm13OJnd/I++9lHNRun6wRaKtGj4T/uDiC1qpU+T/rdxCsJpzUkQjKqxGG8Fd3s3kh+joa8InwnVYZ3ZihHCDhxWO4uQ==",
       "9d125c473de2516f17edccbf": "exanPCvQO4oPlaRNbi6VqLHCGwWBNJRnszVJrUjGMtiOSxsRNLeUMBoT3HTLbkocFPesApb1W6HmBtfpqXpTJn9SfETAfSk7CZ6u64qCDwAKK4D6Wxn7Q5yK//itzFq5BDDo76PNireBDDYJZJtneujblQ==",
       "6c70e41d10a44b0b4c1fe63a": "dliA0N0DdvfYQmAlgIm098VKDesCsR+Q6lV1Wc4ZvCSOYyoGiQitXxTwfD3/1rklHU6OOlo3/fr2gX7BUy304PTal9vneHlYn5jlEedFwEWtHPbwaofFWo7DBBKspgwKRj0OqOlzXdV7Xbv5QXAHtZGfxbFY6P3v34agjYDUCynM29dnydCsxK/P8uuxzjTcgF1NmIL7KULybC5bBRh1eA8vSKN6KmZlgA==",
       "a8f7dcbfa59ac8b9f719940a": "N65w0vwqaxXKpe5OOfmG2wTER/0aLjWbli8eeWehvQMcMhSeqZ7AAgvgMk/WJ/S1e4Td+qLiVa2+NfvW0bpIe69C11KZNOqV72SG07UhrTrGA1DeF1+ezRgZhlG5JNcUT1IgwRGMkn2rFY44rKIcJbBxtxTvjN7zIC4C6zQ0HEQWSlj2kqtcy7D8ROibME3kcf2i+pOR9OUoTsCFYe4JUTPzVWBbO6GznA==",
       "9783060403f42c32a1720757": "/9eALuAbCINPmk7l740xkataJis6fCxV2JbN5uGGBvuhSBTqNOpk4dFymvWI/ZUQvv1Slqu9paJj6igdRpiqaHY3wWLl9W7HlW1bailN/BjLzIciLMv4JpHHWNN5YWuHttxNZZvXXug+w4U7xZwV6UjWL4C3sKuqTXjQm1lLBD3uSJP0dcttkZN2sFxqyCL9b9ueYoqptVf+DpzeWEtHVndhPEBikmHeo2A7GVxHmw==",
       "f5d1bc69a040092de89ad1d3": "YtTq0DAvZU/+TGe1hwz0A7mPjrtLuNtgYs6ihKFuBAUYM8y4/MtDj3k7+CuaS7FufnNjr7CxFhotBOdPNFuLDaaofv8HozIs+N5TyJ/4coojD6n6B8kBsuMD245ropSzNzPIu35ukhnfYzUvfoSsoMi3DJf2poLZigQC6op3P3yIzl7UKxZ3s3BnyEWKNxLKpmM3q3tZxhP54pXsDbhIYH8KLNPgjBKiQkmCG1C96hZxcunwFyNan5QvjFEFYRGuv+sV2TNG12R0UWsRoH+f007BN8D/ntAO560j8CdEpEhvOQ9BPg==",
       "747d8f235a8a49aeceb428bd": "KF08dkBfw/kCGJPB5SkTtffDpLmHAt6+lqjGAlLw/TmNntdzKgwHAhRLH+WZIwApj1auTFdkSxMbuL03xPk3Vvb+yhDMBzL7rJjz+Boi5SZaU6AhEyGw9MzIFQBawYTTtWUEgPiEj5YofJI/ifk2gjbQnLshj3IRI5iH2deLmYyVirMgrm+uf0jjGELDjoTHka+UM+km6wqibZ1s9JqU0UxsmIHzBs+sn6nhhkb/TK7FXwbs/G2hELAtUW5K38fNUwzXosedY5e42ZjKUjUafzZLBgwBk0/yCG5kKtBQnrXZOYS7WA==",
       "10863a2c0cf419670331fa2d": "gK79ebHV+U+NmXLcg5he9W1xlzy6XnZz678f3ilXq5/MpV1iJkffshUy62z0mUEbU2QYylwcPuk4R/zMjGiOSiV5XxhtRne8WNTV/TTs405Gu+aqKZQww7VfyFEU47sKBe2d2wnr9y+4UiW7N4VOk/qD4FCIlsDcW3Qn2zDiL9H1GQ==",
       "7f16d3b301e69da8ff85aa2a": "H9ZP2a4t6pL8UNMjFJ6VU9oSv4Eb91iFE4Kqzx1JnXVMiYm6hFIsxcQJEZatd/WpwJQRocenoPUecA67painFzDxlJrf6HHOSfV3RZYIx1vxbpGobqhLYIun6mJ0havV4LIjkCFMsN3ZuIe7K2h6EqGhrB5u2jIA2SJsKZs5kOORULSswyOvIqB0txCTwSDXkhmbmmFC8TWfYt62JukKBiURDLYAYS2p25I5fNlcLYVu+C/njKKhHw==",
       "0aee3a999728a049af6ea1c2": "nMGqN3IOn9S7bN+5XgUn7dvZIua9bpO827sPiUaCAQSakYgcawbbRXlMg486b3+KN2dt1WLkC+PtO0dvNBjYWtIXLT1QPJvGxJxovS8B5nW9EYEyonMSa6gVv3sTqhpcfPKtelus6cV+35na9ThiEHfX4GtmbWhKCsEvfF790SMBHfsF2QHyDwNvqKbiKPRfxg2nBI+htD3P68dEkuIOzfn8RaWOqMiLR4sZdCicnZGP5xdhOxyPvw==",
       "25488cb83e5724cc39bc7fc3": "xoq8ct/9oPkMS4DN+kyG8gzsRlvmUJkG0RBljuwW97tZ4ZfmWP1nZbuwzv5Asr7tjb3uE9Zzjh+Qb/Reu08nD22671Tj7e4cRMMhoKSZvA0AbRdK80U1V+hVail4KuQ6YwqcDxfr2zeL00Zo+hnWDb1lDgl4eUUQ1eqc1KnLLr4O8uIgWKMpAveJ6JvIMNEoNLKEEIc1F8omFAEZm+mdTUNpiAji+3YaJ1U6QgnZUg==",
       "f33dc7dd7b93195b143edd6c": "8K0fFL8rDKBJOYTdGnTqyFPIk/1UGWBUqeZ3XJH7z99PfWWVZPytqsPelD77bX1+05aBa4VlI85kMsl9K9ZrHiDuabILhDXHzHT33wLHUyFZ/AfaGCtmHmxz7B44HJ3OAfmIyS9dMKpgbFY1KEa6ttcwJpcYz+4M18rN6PLyIKaMiMyq9jFbgTHa+/ecPHmeAmH5sV6hHC3YUBUwV2fzciCxSZ/szOh/bVUh1DGHKbymbJc8iRNFVpoCIFLu0DJMedEcJTD2W2tIYew5X06oai2PKQqEOuJ4c6O/erAGHtTHfEIwqA==",
       "f29c09da25ec2e38bcb6c149": "ELr/XWypvOCN33cupHPZNLp/ve0aE005ja3jMO0ZNbnM8E5vEVTw3Vlk6Hy28+Luv6qvE71CM6U2PB3QjEJ2YAfWYxrIO9JmDpVORJZZ+XK8D2pvXEIUTFkdAXZJ1uHEjbIlwYD7bnzSQUZuypRyisvL0PzfdxK+GDdqC+VdOL8asPZvE9Fh5VP4QgYhsOYE5tsaGNbrBt+XYRm+kH0K4k8oxLLf+mGl5cnpTBMh7W+w85q4JLL3UFjveyD8TXn2CNVlgAxaLqAu8oSEHqG3nhYqx1PBwQnwFmFViB16Gvf4PVI/YQ=="
      }
     }
    ]
   }
  ]
 },
 {
  "id": "A6",
  "icon": "⚖️",
  "title": "AI 倫理：用 AI 的責任",
  "book": "AI 素養 6 · 五大倫理擔憂、深偽、我的 AI 使用規則",
  "learn": "<b>倫理</b>是幫助我們判斷對錯的原則，讓行動做到<span class=\"hl\">公平、尊重、善意</span>。<br><b>使用 AI 的五大擔憂</b><ul><li>🔒 <b>隱私與安全</b>：不把姓名、人臉照片、學校、電話交給 AI</li><li>📰 <b>錯假資訊</b>：AI 能做出逼真的假圖片、假影片（<b>深偽</b>）。先查來源，不急著轉傳</li><li>❓ <b>可解釋性</b>：AI 做重要決定時，要能說明「為什麼」</li><li>⚖️ <b>演算法偏見與公平</b>：資料不公平，結果就不公平</li><li>📝 <b>抄襲</b>：把 AI 寫的當成自己的。要<b>自己修改</b>，並<b>標示</b>哪裡用了 AI</li></ul>🗣️ 同一件事（例如學校用人臉辨識），科技公司、政府、老師、學生家長的看法都不一樣 —— 課堂上我們會分組辯論。<br>📺 「看示範」的影片標有 AI 標籤：看起來很真，不一定是拍出來的。<br>🔗 廣告工作站的「AI 建議紀錄」和「AI 使用聲明」，就是在練習誠實使用 AI。",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這個情況屬於哪一種擔憂？",
    "buckets": [
     {
      "id": "privacy",
      "label": "隱私與安全",
      "icon": "🔒"
     },
     {
      "id": "fake",
      "label": "錯假資訊",
      "icon": "📰"
     },
     {
      "id": "explain",
      "label": "可解釋性",
      "icon": "❓"
     },
     {
      "id": "bias",
      "label": "偏見與公平",
      "icon": "⚖️"
     },
     {
      "id": "plag",
      "label": "抄襲",
      "icon": "📝"
     }
    ],
    "items": [
     {
      "t": "把全班同學的照片和名字上傳給 AI，比「誰最像明星」",
      "icon": "📸",
      "s": "678277816302874f",
      "e": "2qj1XyOOz9EJeJK3ebpJJiUr2SeVTzTWH7WXheObUS0eIOStFGNB2Nf2ymEIw51J4QkQ5VrVoF5fg20EeAnY4EwkGYM/LIRN3pTs3Q9DydhvY4BgjNiH/8E="
     },
     {
      "t": "一段「名人說了奇怪的話」的影片，其實是 AI 做的",
      "icon": "🎭",
      "s": "02c8dbbf2e9a73d7",
      "e": "mOyju/XMoDlsHcOUUdK2sBITefJIC7zKb5/YVYKaB5hAk07i38GLDmgA/fkWbqDwqLcQmfpKp4AfoM7wW3wQizRqEx3sz/0SVw=="
     },
     {
      "t": "AI 決定誰可以拿獎學金，但沒有人知道它怎麼決定的",
      "icon": "🎓",
      "s": "7b75ea0bbeb995c6",
      "e": "p9tPcS/VHaiIQNEe4ZoCZET4rFTu4Y1EVohvPNPHK2tLaIx+Wr2ZHQvdELPOfcy8jz8cB/Nt0f1Bk6eFhEYfVUc="
     },
     {
      "t": "徵才 AI 只推薦男生，因為過去的資料大多是男生",
      "icon": "💼",
      "s": "ea5382751bfb0046",
      "e": "FBKB3IjqDQTDZ4DIbXzGblQmkr5gJnEnjpdAZXQU4M5t3MBCcUNEMjbnHv0Ahi3vSTkqegPTPy88lA9xgK2UPPgIZfwDPdM="
     },
     {
      "t": "把 AI 寫的心得直接交出去，沒有修改也沒有說明",
      "icon": "📄",
      "s": "77d0bed584991810",
      "e": "41yd4Ltx/Q9ngyyRdbDKD3w3ysJcAfbsVe6MfnVany0uJnvXtH2/1hoKSquZ2QX7ZyE4ygMe8sC55e6JjSovzl67x1NuUogFCw=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "拍 30 秒廣告時，這樣用 AI 可以嗎？",
    "buckets": [
     {
      "id": "ok",
      "label": "可以",
      "icon": "✅"
     },
     {
      "id": "care",
      "label": "要小心",
      "icon": "⚠️"
     },
     {
      "id": "no",
      "label": "不可以",
      "icon": "⛔"
     }
    ],
    "items": [
     {
      "t": "請 AI 想 10 個標語，再自己挑選、修改",
      "icon": "💡",
      "s": "faa9bd2bad5b56fd",
      "e": "2loe930+QrBLqKKoTIewaQsTiaNLHmjfMbZ7DfhJ3qIe7wop+1MmcR2NGFAdR8PcazaaD6a3OoyhFuhR0RCieZ0JV5g="
     },
     {
      "t": "請 AI 檢查字幕有沒有錯字",
      "icon": "🔤",
      "s": "87947d1e4100f3fa",
      "e": "Wj7h+OpIpEpl8iga9Zsm74iy6J31/vo2v7r+s5kd87GOSydnXaGEN3zlb/Gl5eo2lJindnLCNye7flk="
     },
     {
      "t": "在說明卡寫下「標語由 AI 發想、我修改」",
      "icon": "🏷️",
      "s": "8ee080bdf08baf41",
      "e": "uAPRK7jyRbXfJNH4IYTV+xrqOOqZzvzqrOn2bBDId/4tVqW83Igsi3ScUYP2Ad4F1Ww+MIU="
     },
     {
      "t": "用 AI 生成一段配樂",
      "icon": "🎵",
      "s": "963d3d4e4b305060",
      "e": "B+7DDSuxLK1SKeqRPKLLlrdnpqldvbds+G1+cQKvtiXJDTuHWlBUUDRHtmnlPUl3Ym1xFNvBF/EpJ1OUDT71ylTXz3xlSOVSle/2dVF/YCMBaLfqCE8CvfR663uk6hS6x2qJ"
     },
     {
      "t": "沒問過同學，就把拍到他正臉的照片上傳給 AI",
      "icon": "🙅",
      "s": "ada61eb101585291",
      "e": "IR7Y55nSBNx3KXvNJzl9xhSeKEMra1OEWyun7W2iSBAqNtEFgM0GXXUP4goX4Qa2cRe/slmfM3le1LDV7GvZx4DjBYvci/0="
     },
     {
      "t": "AI 說「這張椅子能承重 500 公斤」，直接寫進廣告",
      "icon": "🪑",
      "s": "76e3d8ae47e07613",
      "e": "Tmrh6KICrD0hNOIleJaTM8e5i27f4upYBSeCDsA6MQrPBUOGe+qKwkk/Apy9Y/IyY4QotJ6Cz3EudccOx0Lp5LwvrsuXwG5gUxzMQMQvJyG4Np/4lg=="
     },
     {
      "t": "把 AI 寫的作品說明整段貼上，說是自己寫的",
      "icon": "📋",
      "s": "bd64c3ffcc5ccd94",
      "e": "PGLaMTY3dLvMBF7qoEETaFm5+T6v3+QEyQDe0DCx9/0YEKCP3nmRWzxizD9VtXGLXBfFx6z2mIk/V7x+YRQ="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "看到一段很驚人的影片，好好處理的順序",
    "hint": "依序點選：先點第一步。",
    "s": "c2a7095f8fd1d40a",
    "items": [
     {
      "t": "找原始來源和發布者",
      "icon": "🔎"
     },
     {
      "t": "看有沒有 AI 生成的標示或破綻",
      "icon": "🤖"
     },
     {
      "t": "確定是真的，再決定要不要分享",
      "icon": "✅"
     },
     {
      "t": "先停一下，不急著轉傳",
      "icon": "✋"
     },
     {
      "t": "用其他可信的新聞或資料交叉比對",
      "icon": "📰"
     }
    ],
    "seq": [
     "c1k7MSex1QhRenVQQYeZqr9iO9MV6x/tTEZt3ZHY",
     "0o99Umo2EoiVTtlvAu/MyKAjxsbDtuJVlzqS8caa",
     "c5RUwDeQedQds0/c213zETLzYbU3cm+KeNIrBP2U",
     "x28WdcVso/+aY70XcLmg6tfsLxsQPyVw80HcjGka",
     "OsSAsc4oPDfp3waDkdO3Lblj7FeGsQuj2DGzVi2ORS5f07BDrFuhrkahlI4DjRn5zonghwYlVXf64cJw/pnsCMCE+D1zSbMucipK2skP14xp4TpP5o/NI4Vz8uf0MVboZRZRDshoW0srNJgQpnoaP3oo05V9PQ=="
    ]
   }
  ]
 }
];

window.MEDIA_AI_RULES = [
 {
  "icon": "🧠",
  "t": "先自己想，再問 AI",
  "d": "先寫下自己的想法，AI 才是幫你「加分」，不是代替你想。"
 },
 {
  "icon": "🎯",
  "t": "說清楚再問",
  "d": "告訴 AI：主角、對象、特色、語氣、限制（字數、不要誇大）。問得越清楚，答得越好。"
 },
 {
  "icon": "✍️",
  "t": "AI 給草稿，我做決定",
  "d": "從 AI 的選項裡挑、改、混搭，並記下「我改了什麼、為什麼」。"
 },
 {
  "icon": "🔍",
  "t": "檢查再用",
  "d": "AI 會說錯、會誇大。對照實物和畫面，拍不出來的就不要用。"
 },
 {
  "icon": "🛡️",
  "t": "保護自己、誠實標示",
  "d": "不給 AI 人臉、姓名、學校；作品要寫清楚哪裡用了 AI。"
 }
];

window.MEDIA_STEPS = [
 {
  "id": "W1",
  "icon": "🎯",
  "title": "決定主題",
  "desc": "選一項容易取得、可以拍不同角度的物品，拍一張照片給 AI 看，一起找出「拍得出來」的特色；最後自己決定 3 個特色和 1 個核心特色。",
  "ai": {
   "can": "想不到主角時請 AI 給點子；看照片幫你找特色、想怎麼拍",
   "self": "選哪個主角、哪 3 個特色、哪一個是核心特色"
  }
 },
 {
  "id": "W2",
  "icon": "✍️",
  "title": "三句文案",
  "desc": "30 秒只要三句話：開場句抓注意、特色句說出核心特色、收尾標語讓人記住。請 AI 發想、再請 AI 檢查，最後自己決定。",
  "ai": {
   "can": "依句型發想很多選項、檢查誇大和通不通順、提供更口語的說法",
   "self": "最後用哪三句、怎麼改，而且要拍得出來"
  }
 },
 {
  "id": "W3",
  "icon": "🎞️",
  "title": "拍攝重點",
  "desc": "依特色決定每個鏡頭拍什麼：8～12 個短片段、每段 2～4 秒，核心特色至少拍 2 個鏡頭；列好清單再實拍。",
  "ai": {
   "can": "依五個時段建議鏡頭、角度、秒數",
   "self": "哪些鏡頭真的拍得到；畫面一定要自己實拍"
  },
  "checks": [
   "手機固定好（腳架，或靠在桌面、牆邊），畫面穩定",
   "光線從側前方照亮主角，沒有逆光",
   "背景的雜物清掉了",
   "特寫拍到表面、材質，以及手接觸物品的瞬間",
   "每個重要動作都拍了兩次",
   "另外補拍了一個遠景、一個特寫",
   "出鏡的人都同意入鏡",
   "（挑戰）要發在手機社群：拍直式 9:16，文字和主角放中央"
  ]
 },
 {
  "id": "W4",
  "icon": "🎵",
  "title": "配樂",
  "desc": "依你想要的感受選音樂，確認可以合法使用、記下出處，讓音樂的轉折對準收尾標語。",
  "ai": {
   "can": "推薦音樂風格和搜尋關鍵字；（和老師討論後）生成配樂",
   "self": "用哪一首、授權是否可以用、出處怎麼標示"
  },
  "checks": [
   "音樂的感覺和我想要的感受一致",
   "開頭 3 秒內就有聲音（音樂或音效）",
   "有字幕或旁白時，音樂音量調小",
   "結尾音樂淡出，沒有突然切斷",
   "片尾或說明卡標示了音樂出處"
  ]
 },
 {
  "id": "W5",
  "icon": "✂️",
  "title": "剪輯",
  "desc": "照鏡頭清單剪成 30 秒，放上三句話和配樂；請同學試看回答三個問題，依回答修正，最後寫 AI 使用聲明、產生作品說明卡。",
  "ai": {
   "can": "依同學的回饋給修改建議、檢查字幕錯字",
   "self": "實際剪輯、要不要採用建議、誠實寫 AI 使用聲明"
  },
  "checks": [
   "依檔名編號匯入，照鏡頭清單排好",
   "每個鏡頭剪到 2～4 秒，刪掉晃動和多餘的地方",
   "三句話放在對的時段（開場、特色、收尾）",
   "配樂和畫面對拍，結尾淡出",
   "收尾標語停留至少 2 秒",
   "匯出 1080p、.mp4（H.264）"
  ]
 }
];
