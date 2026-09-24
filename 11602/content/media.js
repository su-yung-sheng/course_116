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
      "t": "畢業影片.mp4",
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
  "learn": "剪輯軟體（課本用 <b>Shotcut</b>）的核心是<b>時間軸</b>：由左到右是時間，由上到下是<b>軌道</b>。<ul><li>🖼️ <b>影像軌道</b>：<span class=\"hl\">上層的畫面會蓋住下層</span> —— 所以文字、小畫面、去背貼圖要放上層</li><li>🔊 <b>音訊軌道</b>：聲音不會互相蓋住，會一起播放</li><li>利用多軌道可以做<b>子母畫面</b>、加上<b>文字</b>和<b>配樂</b></li></ul>剪輯前先把素材<span class=\"hl\">依出場順序編號命名</span>（01_入學.jpg、02_運動會.mp4…），匯入後就會自動排好。",
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
      "t": "整支影片的主畫面（班遊影片）",
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
      "t": "片頭大標題「畢經之路」",
      "icon": "🔤",
      "s": "6c83a0264b138767",
      "e": "m4ZSgl6T1D0Zfcvv0C/maJfF6XzT9HcpefrTOCVbhSmk7pBBYHyJjB7xMLZRyXYwuYjTMH4ilZUhwtoYZNKOqwPjkj1UmhEchM6aCvBxQTL+LBun3WKMQSY="
     },
     {
      "t": "透明去背的班徽 PNG",
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
      "t": "畢業感言的旁白錄音",
      "icon": "🎙️",
      "s": "eff9ba505945e6d5",
      "e": "iWKTtoaeh05R6FDOm2JS95CJpvG/nTVi3uhWf0By2INjNK+Q6CD1uLJIZF//fXBXyUqnKt8J8NleS4zdkFo8+tq73MXcaKqb3qM0dq7oxbe5ambf+ZOfadVzgMN87X/Ppas="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把做畢業影片的步驟排好",
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
      "t": "寫分鏡腳本",
      "icon": "📝"
     },
     {
      "t": "蒐集素材並依順序編號命名",
      "icon": "🗂️"
     },
     {
      "t": "匯入 Shotcut、排到時間軸",
      "icon": "🎚️"
     }
    ],
    "seq": [
     "HM2yZ189TbI02Ik6l7iPbGMafi5cBXvIFplemQyj",
     "QA+Ur/acx6KLMe0rRv5RPa/5G1mrDfX7dNzn2K8M",
     "w9P23rTuUrwgY0ULxXnTcOHH8zgU4SCevopqZMZp",
     "MuoAnyY9Waxe2/cla7fky5ZxSgylfa9xCvtK6X47",
     "bk/ljxCISWkLJwnPk7fJ9qq/TlbNH/WkoGZWgYcb",
     "uc9rx7A1QxDgCn7eiVHl+vecCVLTJ+Mj7SlQ8jXaGe0E/IPuio5R4bjIzg3m1NndapdBK42YMCsFCxzwKUC+OsPAb2WCCNkV0K8E1fZfZ0+YYcgL/oLK4c3fFJwZ1sIKVPAmA1od3SB46wR01EoXJzAB1zXnuwg7fbi0LQ=="
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
      "t": "把七年級的照片變成黑白懷舊風",
      "icon": "🖤",
      "s": "6ff8e653d497df90",
      "e": "u/+fCuAKCSF8kF3gMHjzXdkZHdSW07+eQpepQLc2tnUgPEodnEORT1AYul1awq+Hg0/3VVpFSZtzeb+EExB9tsR9li0="
     },
     {
      "t": "從運動會的片段柔和地換到畢業典禮",
      "icon": "🌫️",
      "s": "4f5ff80582e06791",
      "e": "3AhqDobEHvXOLVGFIi29CvHyCBnMeNqCoE0qQr+fMcjdObKfTTaDkPWkFY2AarV8rBCtT0jo0uTL5OHpgb2ZyAw2K3OvixI="
     },
     {
      "t": "片尾捲動感謝名單",
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
      "t": "陰天拍的照片太暗，把亮度調高",
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
    "prompt": "這個素材可以直接放進要公開的畢業影片嗎？",
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
      "t": "自己和同學在班遊拍的影片",
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

window.MEDIA_STEPS = [
 {
  "id": "W1",
  "icon": "📝",
  "title": "分鏡腳本",
  "desc": "先規劃再動手：寫下每一幕的畫面、素材、秒數、轉場和文字配樂。至少 4 幕，總長 1～3 分鐘。"
 },
 {
  "id": "W2",
  "icon": "🗂️",
  "title": "素材整理",
  "desc": "依分鏡的順序把素材編號命名，確認每一個素材都可以合法使用。",
  "checks": [
   "照片、影片都已經蒐集好，放在同一個資料夾",
   "依出場順序編號命名（例如 01_入學.jpg、02_運動會.mp4）",
   "網路素材都有標明可免費使用或創用 CC，並記下來源",
   "要入鏡的同學都同意公開"
  ]
 },
 {
  "id": "W3",
  "icon": "🎚️",
  "title": "基礎剪輯（Shotcut）",
  "desc": "在 Shotcut 裡把素材排到時間軸上。",
  "checks": [
   "素材已匯入並依序排在時間軸上",
   "每一段都裁切到分鏡寫的秒數",
   "段落之間加上轉場",
   "從頭到尾預覽過一次，沒有黑畫面或跳動"
  ]
 },
 {
  "id": "W4",
  "icon": "✨",
  "title": "進階後製",
  "desc": "用多重軌道和濾鏡讓影片更好看。",
  "checks": [
   "至少用了一種濾鏡（並調整過屬性值）",
   "有片頭標題或片尾字幕（文字放在上層軌道）",
   "加上背景音樂，結尾有淡出",
   "（挑戰）做出一段子母畫面或去背貼圖"
  ]
 },
 {
  "id": "W5",
  "icon": "📤",
  "title": "匯出與自評",
  "desc": "選好匯出設定、自我評量，產生一張作品說明卡。"
 }
];
