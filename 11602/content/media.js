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

window.MEDIA_AI = [
 {
  "id": "A1",
  "icon": "🤖",
  "title": "AI 是什麼？",
  "ready": false,
  "question": "會自己「學」的程式，和照規則走的程式有什麼不同？",
  "goals": [
   "分辨「照規則執行的程式」和「從資料學習的 AI」",
   "找出生活中的 AI：推薦影片、語音助理、翻譯、拍照美顏、聊天機器人",
   "知道「生成式 AI」會產生新的文字、圖片、影片"
  ],
  "plan": [
   [
    "sort",
    "這是不是 AI？（電梯按鈕、紅綠燈、短影音推薦、翻譯 App、計算機…）"
   ],
   [
    "sort",
    "這是哪一種 AI？（辨識、推薦、生成）"
   ]
  ],
  "link": "連結：上學期「系統平臺」的嵌入式系統、Python 的 if 規則"
 },
 {
  "id": "A2",
  "icon": "🧠",
  "title": "AI 怎麼學會的？",
  "ready": false,
  "question": "AI 為什麼能寫出通順的句子？",
  "goals": [
   "說出「資料 → 訓練 → 模型 → 預測」四個步驟",
   "用「看了一萬張貓照片」的比喻解釋機器學習",
   "知道聊天 AI 的基本原理是「猜下一個最可能的字」"
  ],
  "plan": [
   [
    "order",
    "把 AI 學習的步驟排好"
   ],
   [
    "type",
    "文字接龍：猜下一個字（體驗「預測」）"
   ],
   [
    "sort",
    "資料不夠多或有偏差，AI 會學歪嗎？"
   ]
  ],
  "link": "連結：下學期「資料偵探」的大數據、資料清理"
 },
 {
  "id": "A3",
  "icon": "💬",
  "title": "好好問 AI：提示詞",
  "ready": false,
  "question": "同樣問 AI，為什麼別人得到的答案比較好？",
  "goals": [
   "寫出提示詞的四個要素：對象、特色、語氣、限制",
   "比較「模糊提示」和「具體提示」的結果差在哪",
   "會把 AI 的答案當「草稿」，再依實際畫面修改"
  ],
  "plan": [
   [
    "build",
    "組合一個好提示：從積木中挑出對象、特色、語氣、限制"
   ],
   [
    "sort",
    "這個提示好不好？缺了什麼？"
   ]
  ],
  "link": "直接用在：步驟 2 文案生成的「提示詞產生器」"
 },
 {
  "id": "A4",
  "icon": "🔍",
  "title": "AI 也會出錯",
  "ready": false,
  "question": "AI 說得很有自信，就一定是對的嗎？",
  "goals": [
   "認識 AI「一本正經地說錯」（幻覺）",
   "找出 AI 標語裡的誇大、不實或冒犯的地方",
   "學會查證三步驟：找來源、交叉比對、問老師或專家"
  ],
  "plan": [
   [
    "sort",
    "AI 寫的標語：OK／誇大／不實／可能冒犯"
   ],
   [
    "order",
    "查證的步驟排好"
   ]
  ],
  "link": "直接用在：步驟 2「每句不超過 15 字，避免誇大」"
 },
 {
  "id": "A5",
  "icon": "⚖️",
  "title": "AI 倫理與注意事項",
  "ready": false,
  "question": "用 AI 幫忙做作業，哪些可以、哪些不行？",
  "goals": [
   "不把個資（姓名、照片、學校、電話）輸入 AI",
   "作品要說清楚「哪些地方用了 AI」",
   "尊重著作權、肖像權：出鏡要同意、不冒用品牌",
   "遵守平臺的年齡限制與學校的規定"
  ],
  "plan": [
   [
    "sort",
    "情境判斷：可以／要小心／不可以"
   ],
   [
    "build",
    "寫一份自己的「AI 使用聲明」"
   ]
  ],
  "link": "直接用在：步驟 5 的 AI 使用聲明、步驟 4 的出鏡同意"
 },
 {
  "id": "A6",
  "icon": "👀",
  "title": "眼見不一定為真",
  "ready": false,
  "question": "看起來很真的影片，一定是拍出來的嗎？",
  "goals": [
   "知道 AI 可以生成逼真的影片與聲音（深偽）",
   "用示範影片練習找線索：光影、手指、文字、動作是否自然",
   "看到可疑內容時：先查來源、不急著轉傳"
  ],
  "plan": [
   [
    "sort",
    "這個畫面比較可能是實拍還是 AI 生成？說出線索"
   ],
   [
    "order",
    "看到可疑影片時的處理步驟"
   ]
  ],
  "link": "案例：「看示範」分頁的示範影片（原作標有 AI 標籤）"
 }
];

window.MEDIA_STEPS = [
 {
  "id": "W1",
  "icon": "🎯",
  "title": "選擇主題",
  "desc": "選一項容易取得、可以拍不同角度的物品（椅子、水壺、雨傘、書包…）。一支 30 秒廣告只聚焦「一個特色」和「一種感受」。"
 },
 {
  "id": "W2",
  "icon": "✍️",
  "title": "文案生成",
  "desc": "先列出 3 個看得見的特點，選最有畫面的一個，請 AI 幫忙發想標語，再自己挑一句、依實際畫面修改。"
 },
 {
  "id": "W3",
  "icon": "🎞️",
  "title": "鏡頭清單",
  "desc": "先列鏡頭再拍：8～12 個短片段，每段約 2～4 秒，放進 30 秒的五個時段；至少一個遠景、一個特寫。"
 },
 {
  "id": "W4",
  "icon": "📷",
  "title": "拍攝",
  "desc": "照鏡頭清單實拍。每個重要動作拍兩次，另補一個遠景、一個特寫，剪輯時才有得換。",
  "checks": [
   "手機固定好（腳架，或靠在桌面、牆邊），畫面穩定",
   "光線從側前方照亮主角，沒有逆光",
   "背景的雜物清掉了",
   "特寫拍到表面、材質，以及手接觸物品的瞬間",
   "每個重要動作都拍了兩次",
   "另外補拍了一個遠景、一個特寫",
   "試錄一段聽聽看，收音清楚",
   "出鏡的人都同意入鏡",
   "（挑戰）要發在手機社群：拍直式 9:16，文字和主角放中央"
  ]
 },
 {
  "id": "W5",
  "icon": "👀",
  "title": "剪輯・試看・修正",
  "desc": "剪成 30 秒，請同學試看回答三個問題，依回答修正，最後寫 AI 使用聲明、產生作品說明卡。"
 }
];
