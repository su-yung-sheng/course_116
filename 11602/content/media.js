/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/media.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.MEDIA_LEVELS = [
 {
  "id": "M1",
  "icon": "📺",
  "title": "畫質標示解碼",
  "book": "1-1 解析度、每秒影格數、掃描方式",
  "learn": "影片畫質常用「<b>解析度＋掃描方式＋每秒影格數</b>」來標示，例如 <code>1080p 30fps</code>。<ul><li>🔲 <b>解析度</b>：畫面有多少像素（水平 × 垂直），常用垂直的數字簡稱。SD 480p（720×480）、HD 720p（1280×720）、Full HD 1080p（1920×1080）、4K 2160p（3840×2160）、8K 4320p（7680×4320）。<span class=\"hl\">數字越大畫質越好，檔案也越大</span></li><li>🎞️ <b>每秒影格數（fps）</b>：一秒鐘分成幾張畫面，數字越大越流暢</li><li>↕️ <b>掃描方式</b>：<b>p 逐行掃描</b>每一格都是完整畫面（現在的主流）；<b>i 隔行掃描</b>每一格只有奇數或偶數行，靠視覺暫留拼成完整畫面</li></ul>還記得上學期的「影像數位化」嗎？解析度就是影像的取樣，影片只是一秒鐘連續播好幾十張。",
  "stages": [
   {
    "goal": "解析度等級、掃描方式",
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
        "s": "9b3b608ef92909e8",
        "e": "cUaPFndiUGIU8uNXcl90GoJAwsNnfwfXX7sm88MeQxTE4DcT4wrkwFAWKme8Mp3HM14j3b2E7LSJ4LtJdNXFP4IIFjLeTD2yraokLbh2ka8YyljjjJpjslPLDA=="
       },
       {
        "t": "1280 × 720（720p）",
        "icon": "🔲",
        "s": "710a0d11854f351d",
        "e": "/KZ3N6Lnd5oK7oYTd0vDNY5Qa9rVCoLzMY8YjU3mp3i2I3ww00dCgwgkn1vDhHq8kwWOzVTkpmGOY3ZeLw=="
       },
       {
        "t": "1920 × 1080（1080p）",
        "icon": "🔲",
        "s": "74c02f94b90c8f05",
        "e": "UyfUVrsPFwa11crNQ4uobgk/YKh3l3viRG54nI2H5B+QeFM7hFGVmwLSg2lEUJfa8ppJaVk/Pc42uuf3In+iBb9MCFXGSBM+8rSi6YKiPD0DE8SHURA="
       },
       {
        "t": "3840 × 2160（2160p）",
        "icon": "🔲",
        "s": "a5ee7b6ac9b9a7ad",
        "e": "Lz/oS1t47NoAA+jJApGr8jIEPcftol3Imq80etfUG1zbkNqLfWsS1bd4Wp5k5EN3MBS5PzITBiR6T+0MUNFXGcSdrDVt"
       },
       {
        "t": "7680 × 4320（4320p）",
        "icon": "🔲",
        "s": "cb3231489a6f184e",
        "e": "QRyxYl/TZYhRbNFl5eFRBhbXdC1hCnayVismSmiBMiRE/t+IoxC4D2REvchA1N0SYmZIITe+ePBFaUN9l49u2TBWhr5a+ZU="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "把解析度從低排到高",
      "hint": "依序點選：先點畫質最低的。",
      "s": "c4edbb69f0177a8c",
      "items": [
       {
        "t": "1080p",
        "icon": "📺"
       },
       {
        "t": "2160p",
        "icon": "🖥️"
       },
       {
        "t": "720p",
        "icon": "📺"
       },
       {
        "t": "4320p",
        "icon": "🖥️"
       },
       {
        "t": "480p",
        "icon": "📼"
       }
      ],
      "seq": [
       "ezZjqOMADWAmS+EGap3qJFeK/ebeyaYcGfRi4iL9",
       "Dhc/74JSXMVSE2wl6nOhgLC/C1RcTg6b3+CEvCrg",
       "GKupJW8p7lJMk1bvq6zZ+IqnO5yKBc1SOKp9mx51",
       "wRwUNHknIW1AMKe19nVa146Fq1JE0YzEQDUmop7B",
       "ErokJm8jQlreU/QuXl5XXQlLzMViePMBaSRmjec/+7z531EEozlDwD3MITamp9xikMBYxanFDJFrvNGyK2hkrM5oihAnMzus0yc4Z08eGslXY4MPpVataXgyrgg3lMc="
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
        "s": "ef07dd2f9c184c36",
        "e": "cH3wcTimGCPV6awEbNMGMQtv7EMzoaoMOfy4T/fhtSUHNtyjGuc7rNtsJXGRIYdCdcLevph3eVriWHWF3IWBPWJW3a8soGmFf92wTND1GwR8nXYjNR79FuNxpR2KdutuPg27Lzji9g=="
       },
       {
        "t": "1080i 60fps",
        "icon": "🎞️",
        "s": "5e296740f28c7b26",
        "e": "OFNczAIYKqrlkUIUo25GD3MqkBkSLXl6WxOoc0iVvfRI7H303uzdxtXAh/IZfmc4ebFQ7joPOSjA0A+XGzlbLoQ4TeS4R9sU4QUQYNJ2ycbr6RTPfRn01W5qK6dbER603avT9p93"
       },
       {
        "t": "每一格畫面都是完整的，現在的主流",
        "icon": "✅",
        "s": "febb231a33e741e4",
        "e": "T0PRTUUv/lfiHU5DzPucBss0CiozTrNebvyyZzkkL1zfsyLeMshCAcKBIJxcjG/8qfpiBDmhpkQO6PPrzzM2I0fRvHk="
       },
       {
        "t": "奇數行、偶數行輪流顯示，靠視覺暫留拼起來",
        "icon": "👀",
        "s": "f182c76e634c07ee",
        "e": "R6fBR4WRnXPq/GVXOlVL/GFVJJyXBmemCFK3PgD+lPARA+GAuaDZKJsMlti655THUYtgkzZqow5GpmEDJiEy71Xj0WEAgw8="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 解析度與影格：換算像素、算出影格數（🎲 題目每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "resFrame",
      "n": 1,
      "prompt": "解析度與影格"
     }
    ]
   },
   {
    "goal": "🧪 像素是幾倍？分秒換影格、隔行掃描（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "resFrame",
      "n": 1,
      "prompt": "解析度與影格：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "編解碼標準 vs. 影片容器、視覺暫留",
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
        "s": "5ef20875d46e1a4d",
        "e": "xOxAItiszXH2y7biBYELeLCU+kTzLmpLTORyd6y2METtpOWUax7H0r10Apqw3QsMFhOP9HWZ8zcUw7H+0zE3i5mrghXFAnzUyoZxoO6qw6U="
       },
       {
        "t": "MPEG-4",
        "icon": "🔧",
        "s": "0fa7a5c876cb181c",
        "e": "m+mRFao41zrWmcaWPk1eLIg6WpTIVZ5LcGwpln8jAa77qVobiyrVlI8xVWcsitQCZzzYXtFQ4YQDGU1S0e7o4RWxn+Qc"
       },
       {
        "t": "水壺廣告.mp4",
        "icon": "🎬",
        "s": "40800a690aa943e6",
        "e": "vD9gGoT3zvNctsmPDNfjZm3v5O7fopbcJ8ALTYcK8a7w9g5KOGYXzbVuqNx7UL0uE5qU/Q8HpYYNVU/ze4elqSDx/C0auDInIRZASw=="
       },
       {
        "t": "家庭錄影.mov",
        "icon": "🎬",
        "s": "62c03afbd7b2102b",
        "e": "s3v3deb0iNB+FQDMxXS8VzPjAj2cFT3P14/LjKU/26ImCe0XASVgjPhrkI0r4W3vCCLAbBxz1GY+Cjn4yGxy5mvnohgJfkWcJ2S4Bw=="
       },
       {
        "t": "簡報錄影.wmv",
        "icon": "🎬",
        "s": "0435c6f59f4530e6",
        "e": "INZp3RcCXjNqDHMoDKBlCMuBTBooLWcK3UV/3tMy1XEGAeqHk2opbi17K+Mkvn9PzjI7etk0p98cZhyJtstsZtd+MVZ4jOTU4grqaryQiw=="
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
        "s": "e708e646d6b71729",
        "e": [
         "MZi/C6PwnVIfx3A1Efgv+nl/oABqpRw40fD5wuBEkYDVR3zieeCwFaT/VwM8aO4V41C2XQQ6rzdi3Jf4xw0a/7fS/1ppC+ocTQgiUgnGpvOc+xWSv884erQ40PRXe5cBGHkQD/SccoW1lhklranb5mupygHsbYmsxjr5v3uMl6g="
        ]
       },
       {
        "t": "一支 10 秒的 30fps 影片，總共有幾格畫面？",
        "icon": "🧮",
        "ph": "輸入數字",
        "hint": "fps 是「每秒幾格」。",
        "s": "4bfc800729824ead",
        "e": [
         "YZo5Vz0+awMoBmrHmUQLJxIs4SodeK3kHl4Rd+shNtVBjKieP2dZktXnw3qPdxEgBXfra7zIjIbVgOs1lIsf6gRysbCshT0mONLj3G93ewrNgfdFXTIX"
        ]
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 翻頁動畫：排好畫面、算出 fps、播放看看（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "flipbook",
      "n": 1,
      "prompt": "翻頁動畫"
     }
    ]
   },
   {
    "goal": "🧪 更多張、更短的時間，再算總影格數（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "flipbook",
      "n": 1,
      "prompt": "翻頁動畫：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "軌道位置、製作流程",
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
        "s": "652e02a7e3f97ec6",
        "e": "pPTWMKXq/O766FObR3MdsU10LG+SNmPqNSKL0GtT9nMOdInxI8pkhbObKkoOmVb1mv4OHh3xBUvtarZuxUxDkXYqYTNqnhtfhjgsYUa1vrzlAtZ63HCXHh+dCIOoidI="
       },
       {
        "t": "子母畫面裡右下角的小畫面",
        "icon": "🔳",
        "s": "a506db2b88e530d7",
        "e": "lvV8m7Fl7OGhYTmdlw97f6QKZbeM46puwNYw7i8ZYqy3JZ9ZexdI0P2/jt9ObJjzQLzA1CSA34xrbl9hgjxGtjuHwzLumJMkThWo5aMLIVRqGOA="
       },
       {
        "t": "結尾的主標語字幕",
        "icon": "🔤",
        "s": "4ed24d766d141762",
        "e": "ZAHhdZb9AL9zvc59JImoXdeQSPx+nv0tXgcP9Kdcov/gwxOPmYKFGzZIGmUQY9Kogv6/dqNoRDUZn6ce0Y3fSf1EiUi2jGwxM7LkBZl3pgzFwJF+RXCrRh0="
       },
       {
        "t": "透明去背的品牌小圖示 PNG",
        "icon": "🛡️",
        "s": "44e85cc4e72e12e6",
        "e": "3WbAtyJWZMjZiqtp7KS12Vqy8hE31UjJbmn/e9UA0DKDs8miYA4ZYJsMvjk8hcvxUAbTkGVHZDw5+eZ3k/Chx7Md0RXKPyNujzNvY5Y+6ovlSnn9ESUezE5pMoUdhelga28="
       },
       {
        "t": "背景音樂",
        "icon": "🎵",
        "s": "5e6748f4ef3a82bc",
        "e": "t7bZ0c0IL01j6q0O/DCaoUgCE1pAeWJxJCST9kO+X/Zv03YT2TXk4d5fbqssX0ye4c8r6NfuR40tEZo="
       },
       {
        "t": "介紹特色的旁白錄音",
        "icon": "🎙️",
        "s": "b0269842f4575dac",
        "e": "7IcuqN1z9IjtK0JtPN4Tkxi4PzaKon1j18WDWESSz3Xo3iOjN8oqBKoifm8PBpDUBqQQ6z7rZBLRZ/63byU7hBTN5sz2tUYrSTSWSPzlpA28XU67g3JINt0SQHg6XV75d14="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "把做廣告影片的步驟排好",
      "hint": "依序點選：先點第一步。",
      "s": "b887724f16f60164",
      "items": [
       {
        "t": "拍攝片段並依順序編號命名",
        "icon": "🗂️"
       },
       {
        "t": "預覽檢查後匯出影片",
        "icon": "📤"
       },
       {
        "t": "匯入 Shotcut、排到時間軸",
        "icon": "🎚️"
       },
       {
        "t": "選題、寫文案和鏡頭清單",
        "icon": "📝"
       },
       {
        "t": "裁切長度、加上轉場",
        "icon": "✂️"
       },
       {
        "t": "濾鏡、文字、配樂等後製",
        "icon": "✨"
       }
      ],
      "seq": [
       "+jpnM+0Dn0R7GcT54kNIP+ctONcQybHKiKYTYAdP",
       "0dMsgeSdbUem7uooA6BKSYc9vmmEEFBuoCmPFkOb",
       "u0UfWnsCn/wCC/KavMxIYBJ/fkBtGXngq2ZaGuJp",
       "FM105IjGZ1jQnueVY2po8OIlnSzNLOfDUvzsE/YF",
       "+dmDMuh8/UcsdvIVTZSMb18wGqxkcrJVFZ7o9YI/",
       "bipfw1S2RCsFtrgmCsi1e0GBlTRiu4Iimk61Meh8sML1fdniI9yML0GuP2vnI+6TkFeq7RdGmqO45OqwY7lyuGjXOwKIYPMA9wZdx8ysp9KZn9wM/G3mXUNK5h3vvgh6q0em1T0Aat5em93L/FOp2f7XgpkIDDGHfe/gU7koLLxK9ENt+g=="
      ]
     }
    ]
   },
   {
    "goal": "🧪 多重軌道：把素材放到對的軌道，預覽看看（🎲 素材每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "timeline",
      "n": 1,
      "prompt": "多重軌道"
     }
    ]
   },
   {
    "goal": "🧪 還要照時間排，同一軌不能重疊（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "timeline",
      "n": 1,
      "prompt": "多重軌道：挑戰",
      "hard": true
     }
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
  "stages": [
   {
    "goal": "後製功能、素材能不能用",
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
        "s": "ccad559fd5f3415e",
        "e": "A0LeOTB7is0MtfZn57y+7wW+5/XRKf964+CH55jGzuuf9mgUEuMYpHnxZ/adflzm/crFHIZ9Mbp7FeD9ppJV34K47ZY="
       },
       {
        "t": "從特寫柔和地換到遠景",
        "icon": "🌫️",
        "s": "45aaafbe7b215ca4",
        "e": "IMzpEoucbJDtcEWhKJ0zJnJTjrx8bj6J0PjufG3BY8ozhpciyD0hxndgV07o1vb1eaMKO+Ces0tAdOu+tFfDtfaTtlfZUOY="
       },
       {
        "t": "片尾打上主標語",
        "icon": "📜",
        "s": "39cd21194bc6af0e",
        "e": "XxQ8c4jAHNKtBj7r+rzI/77JOmPDoUOPved4UtVP5U51BItqmN7KJhz69VvQQWUr43UnimE="
       },
       {
        "t": "最後一幕音樂慢慢變小聲",
        "icon": "🔉",
        "s": "7150179a31f371c8",
        "e": "NYetX2ziUNkEP5eKrkl+VU2o81gvj0pgikWNNjvWfYCdfMHhQhshd24VAGnWfVfXdVGgYtw="
       },
       {
        "t": "逆光拍得太暗，把亮度調高",
        "icon": "☀️",
        "s": "a3b9c8a3b12d73f5",
        "e": "mSDd/3SJ4EnqZw7QsxYB+X5t5Y7ndcyx0TsnUnsAAVliNTp19BVS95HCXgB+4mqVWcAlnuDuCSZ6BU1UrzEmXgoAOxqUjVLhCeY="
       },
       {
        "t": "把路人的臉模糊處理",
        "icon": "🫥",
        "s": "0a48665938968b21",
        "e": "1z/O+aSFABsK5bQ7SiWw0MibEIz1rk9cruoXm8QT1HSCcnLXRNyv6ZFVh2WD5eQS+5XsoGygg7N3xxFNg8p7E0TjVZGLzE6f60ebZbel+YBxdDcrDmjaPEXdvf3JQw=="
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
        "s": "b720e4110a6dda69",
        "e": "wBR7XlvhVb0TsiZeg4zZQvjeIl2IZXKADHRMtfn753wRYUA4E8wSfWi1IMJIxLT1lO8zV5uA34/hFuf5Iji+NMyiMJ/bXOcNcwbsIZq4DWjbQ3Jh5TkuWp6HlQ8Z693WoIM="
       },
       {
        "t": "Pixabay 上標明可免費使用的照片",
        "icon": "🖼️",
        "s": "41db83888b43ca16",
        "e": "l610Rh73Oye7ST830wJtZDKmpDTBjv4Ob9c1xCZBS1bNo5ODfTGXmiKiUP6qMQMCOWFmlwd6B5pN5j+mw9gJBkKMAGokF+0FO3urSc6Vx58Bp4c="
       },
       {
        "t": "創用 CC「姓名標示」的音樂，片尾有註明作者",
        "icon": "🎼",
        "s": "bfdc84d51d09a8cc",
        "e": "X+K4PWvqx1OpzSvObMeA7tjXCI6WPKjS9dWNrKZxdoyNFrYMFRZWMTY0N2r6vxe9IYJ4XCf4cZUKMbWHUufDOjNpn4nJrYpJRbs+bcfK7Fm3OF5POpU="
       },
       {
        "t": "直接下載偶像的 MV 當背景音樂上傳",
        "icon": "🎤",
        "s": "3578f9bf7601b680",
        "e": "xX4i9HNc1AzCobdsu8+rL1Z14/eb7i+XQtWxoDCE85KYsu8PBRkO0FMO8XlBcus83Hlw7xHot1rIZXt6TWJDkOGYsJLiTNG883TKZ28I0Uyar625tAc="
       },
       {
        "t": "搜尋引擎隨便找到、不知道出處的圖片",
        "icon": "❓",
        "s": "bf8ed5d72377751b",
        "e": "LlFgPCHBf9eB3PS8sxPp0oZPRuiT/bAuVaxfPBqLKdUR93YVaPM8CPIknaJdFJGq4nEuZkZ+XxShr0tRCJBKtmfI/6fgo6zgChPrJxE="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 素材授權檢查：成果展要用的素材（🎲 素材每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "licenseCheck",
      "n": 1,
      "prompt": "素材授權檢查"
     }
    ]
   },
   {
    "goal": "🧪 商業廣告＋要剪輯：NC、ND 也要注意（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "licenseCheck",
      "n": 1,
      "prompt": "素材授權檢查：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "有沒有用 AI、五大核心概念",
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
        "s": "3848ce3db5d9d177",
        "e": "ui+RpWawBMB5VeSfQNGrKmQxQrFD4lh3HU302YOBXaVftAhV9+i+6xP7G4V0gVzP9TeXEnQD/IMaMAn0sYKFYyMZKTa4xZUHEYh1wbBgd7mrWyEfGykQeCgjLh/968lP9lprfEhtG7Vz8hrwQRw47tbznFLtfSja4CmzHA=="
       },
       {
        "t": "感應到有人就打開的自動門",
        "icon": "🚪",
        "s": "ad9c00055a1abcc6",
        "e": "kCPDMvxhZBSjUqNMKDo6mnFH3JdpjfB9iVn/AjyOolBMCukGC+car7vCDTVwHJM1Cb5/r7f6ig9I/EF9zXk2OdS9NBLIC7U/knfy1Xt++hgVwSIZjzAT2u3YXAwSy4NE+L4="
       },
       {
        "t": "依你看過的影片，推薦新影片",
        "icon": "📺",
        "s": "fbbf20534df585cc",
        "e": "TA20Jsab10Q/Bub5O3KbpRy5j8EFSr3OdampMAtIoTUyHHntw159a00/pdPjIeZXU0PzOYIKKdW7EHaRABdkcDExT+5UqVgPUP89MCc+0Om1BnaffguugnNE+PhQn6qm5Pl/8+E="
       },
       {
        "t": "用臉就能解鎖的手機",
        "icon": "📱",
        "s": "69941b3d775d4371",
        "e": "hzx7kJpQfi/JCORez4mcHnNu23SdipY4pROkFEJVbS2Q8lov4ULhYDsoYIkc0ZzfAePkOwTFFYAgdQ16vFEudLCAZO2vgHW2Y7qkOcDJ56OFvMicYLkbU37D5Z8="
       },
       {
        "t": "前面塞車，地圖建議改走別條路",
        "icon": "🗺️",
        "s": "8253a490f640fb94",
        "e": "KFS+EQ9nFdULEmTKbKRnACY1rQnCpjUpsC6Rvc3f5KpCh8h9uE4tHqPU/OxzFodpl4ngXFqd3XK3TuLsxB6h4BUrRywhF/9c5bxgo9kMiP9ZKMO61yU="
       },
       {
        "t": "定時 3 分鐘就停的微波爐",
        "icon": "♨️",
        "s": "993d1c665ba1c49e",
        "e": "b5oEK1OaGhMzpu2JFIkm7ZGQtLI6JKiw59I70lDIiYPRWap5hmx0Xah1b8COf+eE77iI0M5j7BqE/B0ZTcqbBgAes9JYy/cwU0w="
       },
       {
        "t": "聽得懂「明天七點叫我起床」的語音助理",
        "icon": "🗣️",
        "s": "4b7971d1318e9576",
        "e": "dHcI2uoOrGYRf45smeU30TROdqsjscihlswgGcCWj7OUjIvLa57WvNsphlWW5TRFnaIXsP4V+oURBSx/Y9FVJkKT7E2y5yreCJNtF46Rs40gli3HOOsS/PHr"
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
        "s": "77233d6e763555c9",
        "e": "BO1EAh8PAhXD8QiAVbK5crXrbU0qyt7V6tfxXdNb7yZZcU9lg+NBj5QCngzf/VHsYIydk/6tG0wn3yxnjQ21dKmP1kck7Q8aLqV5QQ=="
       },
       {
        "t": "判斷前方是準備過馬路的行人，還是路邊的交通標誌",
        "icon": "🚶",
        "s": "6bd5a4da8d2fe599",
        "e": "Li8qItv4tElBZyX8B6NK9oHKwR4L0xAGsnLwHQ8xVmSZoYycn1LWlZKX2WkW/VZQZcgzU0UPUQXkACG6qmf1tcdduptiGAxP2x3GtvC39w=="
       },
       {
        "t": "決定要減速、停車，還是變換車道",
        "icon": "🛑",
        "s": "e358607235b13a29",
        "e": "KEi/gSE3n1lSF1sAAbI5rErO/WVqKwNDBfvnjrzVLCCfouMvn0wgrw/fdJQvbqMT+i24WHeABJjVaVD5issSy1JlGL/sBEBMaygLYE8jTg=="
       },
       {
        "t": "看過很多牽狗行人的資料，學會他們比較難預測",
        "icon": "🐕",
        "s": "6963d784b2dbd2b3",
        "e": "5/UhdJoXgnvWD3taUc+41iE6b92G5ijqu71IRdgCMmG6hsOlaUh8cri0ye7CKrd9QpXcCxQ4rsRsLsHOluGS5HlyRtF68RJISRu33VPzi3dl3g=="
       },
       {
        "t": "乘客用說的告訴車子：「我要去車站」",
        "icon": "🗨️",
        "s": "1a4011f1ebb9a08c",
        "e": "H83S0dm/ndnlKnxfpAg0WBLuqjxqRnxc1KgwTvfjtaN262XworDCFMn0FKe8VE0O7Nbi8nQiGPqbiBsTUiNm8JI44T4EFHXCiu4njhxYkpmeuyzFotZ2hA=="
       },
       {
        "t": "車禍可能變少，但攝影機會不會拍到路人的隱私？",
        "icon": "⚖️",
        "s": "c9c3a2a28a0c0b38",
        "e": "bnae7ZoZyfe8IhzKFg8bU99wZa917YtgsaU2vDIxSaP9ZqB0ZtJ5169oc/A37Z+Lnv1ro7F/YcyJetVzBilHNy7qgYtIwXW810hDRkFEamQxlQ=="
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
        "s": "47d9fb2ee08fe601",
        "e": "E2Es3TqEZkE7YFTb8QB+D7U+C1uhfv6z9+hLFRaHx6MV5iZ6pTzvicXk5BOc1+myNB1wul/2JuBHDqSz+bllWaQ="
       },
       {
        "t": "AI 有自己的生命和感覺",
        "icon": "💓",
        "s": "d96ad1f1d6605dcb",
        "e": "w7gzEFBBJWRGhIsiCXCHU+Iz59pnfq4pGLcLje6Lbf8v0W6GrIsi3s9JLDAm9S0AgP/NBr4A+1HIOzlGdPWtAMEohKvicpQ7C0PBEgrrxuCFHSRVEshYH9N2o2QdB5Os3WjIblI="
       },
       {
        "t": "只要電腦算得很快，就是 AI",
        "icon": "⚡",
        "s": "7d5485862369df50",
        "e": "KX+Kb5q0cDeQG94H+EZMmP2ZKTA3hx8cUHYzrr3jy6564vDcgT+5/7lJPJcea6Ryl2VyqyclfE1LGJ3MdaEJPfCRKuRVQM8Nw4O+cuPPoFLa3fJn1cfq/5nNpNKcCh4Jaog9rcyTfKUlLvpJY9jbOIo="
       },
       {
        "t": "AI 帶來的影響有好有壞，需要大家一起思考",
        "icon": "🌏",
        "s": "e9e42d9374271c69",
        "e": "bqTUh0kKyarJIgDrlxsnzsHze1eSlhAam2mkqkNjTtxl7sT9LN/Pqq02DxpEoOIMXWeWLHD7nrxKbVb8i77lBlNtRy0hrVN5yrLdMw5AucPW3w0="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 黑盒子實驗室：做實驗找出會學習的機器，並把它教會（🎲 每次機器不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "blackBox",
      "n": 1,
      "prompt": "黑盒子實驗室"
     }
    ]
   },
   {
    "goal": "🧪 四台機器，還有一台會亂猜（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "blackBox",
      "n": 1,
      "prompt": "黑盒子實驗室：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "機器學習三步驟、偏見",
    "rounds": [
     {
      "type": "order",
      "prompt": "把機器學習的三個步驟排好",
      "hint": "依序點選：先點第一步。",
      "s": "904b290620738b20",
      "items": [
       {
        "t": "學習演算法：在資料裡找規律",
        "icon": "⚙️"
       },
       {
        "t": "預測：判斷沒看過的新東西",
        "icon": "🔮"
       },
       {
        "t": "資料集：蒐集大量的範例",
        "icon": "📦"
       }
      ],
      "seq": [
       "ORumbWXu3goQqxhoeThqvHk1cAwvTv6YqBLc4W4m",
       "k87fgjCOH9WZ6LauI7JCMMYgA55ZUML9hzzzWdnX",
       "21l3h9tFSEUOjwaaiAf9UahYBW298XYTgrMBPpNB/hyWWsCkm1dexK3N5MfNkXN9up9dCY0IZIFeRgFy3t35x0GlElI8UsyRd74+T4HXwb+K3/B2sFn5xOZ4gT0RXQTtGULa2C+QSgo="
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
        "s": "46406517c96dec49",
        "e": "CIOUrJ1Q7tCH6BRIpP+lO7varFnEXP8wBX8xLWU/8i0KHXTI6OSvUouV72hIY9wnR6McglmEQSXnZ1PTqxAk505DJnpZSA=="
       },
       {
        "t": "電腦從大量的貓塗鴉中，找出「三角形耳朵、鬍鬚」這些共同特徵",
        "icon": "🐱",
        "s": "6a4da4582460288d",
        "e": "g6LLf7PNjV2tWOhm0Owu3jxCPJmfb4Vjh061WaeIQKJabqpXsBBtH0lCtcUCKv3Gf4XYy0J2TG0sErMUYPCWl3Az2DqhJv1G5A=="
       },
       {
        "t": "你才畫到一半，它就喊出「我知道了，這是貓！」",
        "icon": "💡",
        "s": "d2dcc0a620f66bb6",
        "e": "UXZT+zoxvE3vFcAJG585sLB8veqn/LmCDHK5obLXO7d/EFDOdoRDX2FlKjgeR6k4bpVzvOfQpEnDus0vbr8XURBCTfoan8VZxEbwbw=="
       },
       {
        "t": "手機記錄你從不同角度拍的臉部照片",
        "icon": "🤳",
        "s": "80aa5add4d791e3f",
        "e": "x2OgOvpT96JWF8YpOW1xkoA10oEtxc4lrN8yIZIKHtK05iQQ+o03eaz5hDKbeyewnUVFWCCzxqfMqEWXJl6YAERYJMReXHX5idGEBirYVsidio3Khw=="
       },
       {
        "t": "手機看到一張臉，判斷「是主人，解鎖」",
        "icon": "🔓",
        "s": "788fb1dd460c1389",
        "e": "o9ubQJISx6eoFrIxu1D4/fLgkkhNdgwEXFc41YxTPwI1LN6yjCBP8uqorQlyRvBAKymKPKNW6qj1CJREqXruSRhCi6dBWHjbTZzP9DVkbg=="
       },
       {
        "t": "影音平台分析幾百萬人的觀看紀錄，發現「看了 A 的人常常也看 B」",
        "icon": "📊",
        "s": "c21148604ce3d8a9",
        "e": "f335rI6zRjrbF0aLuiLk6XmlI+WOv8d6eN4bVjHJWVKI1hl993WU0uQQxtkIQxVROI9tjQ3AnlrZYya37xTDzehzRUTkZT2jUifB23Gq2g9vAuRfA7LY4Q=="
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
        "s": "43a139ad5d79afe0",
        "e": "+a4m9CAJ/Hfr1Z4FN9zX5qK/ey/Y4K3+EKcscTtwR/yqP7vuuN8IPhY2j/8JKw2MTYTLsOUcvfuDGrmpaLeS8uMOyH+VqFljYm9YAO6OImUyMNH2jhXaTQ=="
       },
       {
        "t": "「早餐」塗鴉大多是培根蛋，AI 認不出蛋餅",
        "icon": "🍳",
        "s": "dc6e3cf21107777d",
        "e": "lO9GY+A515ixczXOmqry/TYM0lf7FRZmhyI+kzOZSs6HCz/IsXrLg60nGRm8tt46Oue+1cmDHAcX7iLXIaIBR5VqTbY+mQaqpek="
       },
       {
        "t": "有人把「貓」的圖標成「狗」，AI 學錯了",
        "icon": "🏷️",
        "s": "cb63ff86c73298b6",
        "e": "4dRurBDu310LIsJBV1HzEKXZdAKgtUCavxkVjBKITghJoZZ7EVXVamkMN0Vf0jiCsVtEjGBJfm8nfvYoLIwRvuJdZY2W6hEgVoXVBo/iNr2F1w=="
       },
       {
        "t": "用全校平均身高，幫每個人訂同一個尺寸的運動服",
        "icon": "👕",
        "s": "a8a242381e583225",
        "e": "XiPl/ZaiOz5Ft5olnKoXoMeFeEd0IPF0IRqnY/VGxz9ZRjKauymPeAs4A71DK6/2QexswWPvR8sII1Wnckn6ZgbDpjYGJlDMQwf1Y7GSIKAHHuxeO2pNkNT2jQ=="
       },
       {
        "t": "簡單的卡通畫法很容易被猜中，寫實的素描反而猜不出來",
        "icon": "✏️",
        "s": "249cb7c7fb24c16d",
        "e": "JLTyeo/L7ze9YyQMQWGv2kUMxmzfIHMIOlrnS6lH94apKW9lS5Y1DsY+sQXeMWB9XXSQ8N3/GsiLhhOyK2CaXXao2YIfpc171xJn2nKQNMeobOg2FXH9s9h4aRe6NA=="
       },
       {
        "t": "小學生畫的「電腦」和大人畫的差很多，AI 只認得大人的畫法",
        "icon": "🖥️",
        "s": "b70401d3b9bccdd9",
        "e": "KAlgJD+eR2H3IN9bpLuURybuNSLceDboCDGH0GETeIByxylx4Ef+FgbiKplo4XPuheQZICKZe/rwbkdesTDiWlXNkjLhR6jKGEDDc+IUGS7qDVOj6Q=="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 AI 訓練師：挑資料放進資料集，讓 AI 認對貓狗（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "trainer",
      "n": 1,
      "prompt": "AI 訓練師"
     }
    ]
   },
   {
    "goal": "🧪 測試題有「大型貓」：資料集缺了誰？（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "trainer",
      "n": 1,
      "prompt": "AI 訓練師：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "輸入、處理、輸出、順序、優化",
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
        "s": "20728e94ebf2a146",
        "e": "n0+bLvUbN/aBwaGHQi7VbqfJp3XPyhhu+pZnhwbq8V/uOaoinW82Ra5t0fYP13LHqM5vLw9AfPuQ8Ym9SXkRKxnup4sPSQ=="
       },
       {
        "t": "預熱烤箱",
        "icon": "🔥",
        "s": "482e10fc34cabe9c",
        "e": "IQDCBI/1mAgSKWBoZzDyGh87TWnhj55QxVeH82NxmJs6HNI9Xue7BxO8iFLN7G01XqfHvR+/kn1EmPNFl2Cx4iY6zHYxIHtpao8NmMt3yEiRjA=="
       },
       {
        "t": "把濕的食材拌進乾的食材",
        "icon": "🥣",
        "s": "73df790f7ec0411e",
        "e": "z0lBv+AS3FDFIxbbXuVjaZcXVjITXa8cBVUdPUa/vxldIF9pMYAHcaBh/3laUXLDBjZAL6c="
       },
       {
        "t": "放進烤箱烤 30 分鐘",
        "icon": "⏲️",
        "s": "c9ad9a65c4c48e8e",
        "e": "u46oAJeBs6nL6e1KPsc6ldHyExZjzVIMHLeeqs7IZeKEdMwf5W9IT114LO86Hy12AwMS78s="
       },
       {
        "t": "香噴噴的蛋糕",
        "icon": "🎂",
        "s": "6be2641513887c1d",
        "e": "FYUZXlzJ1yzpVsHhGakrssyn60zT7bddsY5LlmHMQB/oT4Ilrxusv2/+7fyT38HFbUdYXmz7dV3pZnoUOBC6bplYx6HyNXxxS40ViQ=="
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
        "s": "9e4925f2c9f29f3e",
        "e": "nN5rDoThDoI4Rb+m9gs2cQrhdoUD1nAtGbuqB6aAuFqFSLh7CGGNVRaHr7pSofpgTstlSZ0hkoUDUUEVWJDi7xpGQw=="
       },
       {
        "t": "學習演算法",
        "icon": "⚙️",
        "s": "4d4080bf7b6d68a3",
        "e": "V/UrTpg053Gz5Lo7RKjabTwjfZFO+2GNspIk24sM4gvBd3p6vAdMjejkOH6s07ImwHKG4JdSM6fLLpIa7YlAnUzwwOJhdjXlrU140YyAELjtKg=="
       },
       {
        "t": "預測",
        "icon": "🔮",
        "s": "35f9acfdec5a7f3b",
        "e": "el8E4ZMejZZ9jFPjj6/iIz/tpsMuGAXD92Mv3e7E5QL/Jzx/GpixTRgWh7H1NYARPfLCLfxkfudtSxTSxZbiAXfj+DsuKrcEANLmEQ=="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "洗手演算法：把步驟排好（順序錯了就洗不乾淨）",
      "hint": "依序點選：先點第一步。",
      "s": "c8358f5572883e51",
      "items": [
       {
        "t": "關水，把手擦乾",
        "icon": "🧻"
       },
       {
        "t": "用清水沖乾淨",
        "icon": "💧"
       },
       {
        "t": "抹上肥皂",
        "icon": "🧼"
       },
       {
        "t": "打開水龍頭，把手沖濕",
        "icon": "🚰"
       },
       {
        "t": "搓洗手心、手背、指縫至少 20 秒",
        "icon": "👐"
       }
      ],
      "seq": [
       "eMk92VL41jVEf9nYKPN+JCkJuq+XIhk9bZLVLx5s",
       "+c5xI3HRUOXrqE9OxsHh4VD3bOVnSGTngKoIRgQg",
       "dpcmE/bSAdy2yZ7XXr3yNCDmdYiOHYzOXkieGHIN",
       "fNv/3oDzb9AuddVh8X3RtTLGCO969GqRBWnfux84",
       "V2pLhsXZc7EdgYlNJ3G4uRyQJgNhjgpqvzFwAJcjDmyMS4vt/wXzYPEUsAzXQB/ztZnmnLhQp9vjuKwM1+iH2DH0Sqx/PPK6SynIs9jBlu4s5u2BdZMdlWBZJ6eunLlaYOlyYyYYaBE="
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
        "s": "dcc129e60296618c",
        "e": "DddxJIL6GxN2yv1codhNY17jKtgvb1Rx6dSZS6cxXUVFh48tsr99oNTgeQtg9Zygx8BgOUVTGzl3Ir+nOs84XvkbilnQHwpDTA=="
       },
       {
        "t": "寫清楚「鹽 1 小匙、醬油 2 大匙」",
        "icon": "🥄",
        "s": "3071bcc5e5d078fa",
        "e": "d41Q+kwnKq8QPj9J8WxNXaUMXGrHmJJ/c1gLaZ8mhhBXL1O043IXRec70FxO9qJfZzKJ/0YtVXvZhvrToxwd3kuSxUXI7wApGjMYWp7dkyUR79r8Ig=="
       },
       {
        "t": "把蛋炒飯壓成愛心形狀",
        "icon": "❤️",
        "s": "919f461dfca2252b",
        "e": "4UADLTSyRJR/lcf4/Jdc7zvn/jwag2BaCX2AQV1r7u4Dsp0qWrx6sCmFQKmKfSe51AgLQj4Ar85JkOFvHoNb6+758O3DU1nwZA=="
       },
       {
        "t": "先打蛋再切蔥，等鍋子熱的時間一起做",
        "icon": "⏱️",
        "s": "f27348d3776314d7",
        "e": "X7dP/S/h9fHqsBZkpjMQa018XDegQcZFT3eF3Bp0xt+ZlweT4l1jawZXtBdQjL7I+j50ClSqRXO3l/aEUuj36eKHGDSRkJxvNbkCrQ=="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 死板的機器人：用積木排步驟拿到牙刷（🎲 地圖每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "robotAlgo",
      "n": 1,
      "prompt": "死板的機器人"
     }
    ]
   },
   {
    "goal": "🧪 積木有上限：用「重複執行」優化（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "robotAlgo",
      "n": 1,
      "prompt": "死板的機器人：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "下一個字、養成過程、搜尋 vs. 生成",
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
        "s": "19add798fed75523",
        "e": "qy/iGDZfWKzxadZNYHcrv4K9B0fkExAj2UhoVYQPdUQYr/v5tZBh8RPb2b9O2iHXYp1qkPmlZhuYlWh66Su/6pKKbKPHqaYs1Qo1WmqeKo+Efw=="
       },
       {
        "t": "小女孩",
        "icon": "👧",
        "s": "bc1692772a009571",
        "e": "dJ/QyUR2vNKkCCfQvCqGcnSViE2LEka3Zy1LJEoXo/NAho+2SFNZGYDAf1lTdqOCqTFW0ATqPkXTk49LycLhzlmemcLuVs8lIykQp228mNA8wQ=="
       },
       {
        "t": "冰箱門",
        "icon": "🚪",
        "s": "1f22cccabd79401f",
        "e": "y3rRxKagt8H8RUiiH3rKxEChIFDEaOMyluvR3NQO87w/MV45AIZ3OwHGC5rKWu9B5y3vP+0Ne6HhniEYatBzsZhtYzKmhFHEMCRUpi9DxIuJH2L2IQ=="
       },
       {
        "t": "攝氏 25 度",
        "icon": "🌡️",
        "s": "5e272bee38986c2f",
        "e": "hwFI/9zhhJ70kDfJK9v3Sh3fkV0xd2dZiP4+aHtoikHqO9QrObAFx4wDpiVGt8RBX6wboH9cL8buaf2mS5VAPSXGc2QYUzfM98XqtRIZKzhposzoEQ=="
       },
       {
        "t": "老爺爺",
        "icon": "👴",
        "s": "9c414aa2596dab9c",
        "e": "nkdvWlymcjfAZIx/vGFJb9w+eSX3N1z1YLqdPJNAkjJ/QpXVw+V4E3lBCEAL4dy5tWPd99FbO529KHrL00SgjcsaszUe5+tP8Cq7ixrgCA=="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "生成式 AI 的養成過程",
      "hint": "依序點選：先點第一步。",
      "s": "9cae472421e76214",
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
       "7ULC1gQuLLagXrwK97xt78OvLCML/fiLC7NDX16P",
       "9aYFz2+UCJTENQMTv1Jwk+6qx3I7uLmOQBfBmbDB",
       "QK0hDd8esoWSAHXD84Fg/yyXUDg57GbSPVl/R/y2",
       "1J+jlIrrI3GbiGXAyWC9VHQD1E0bNXrVlDw17Xxv7GX9+q2T/dNI0Z04VNIdXI60oLrEfUwYGk/VVSBBOb4rOOzd9rj1gWfQHkTwcFaZe3UW5uLj+nypnmmnqYyooL9zRwJhWbnSZKcXk/UbPqSsbJIVdJ9fj1juqo70KGw8goRq/cCkiTVa5plVC0fg23yk6i/o6eM1v2dsjz77SxyAlGjRdbZxnThjxgTY1QM="
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
        "s": "22e415a241e872f0",
        "e": "x+SrLuSzVVNj+7yB+Z3kCi/jTjWfz626GxCJwFKb7I7yZ/vKP6lx5r+2HDMysJpQbOwgkFCkLFbkTb9avriWspi1Lpe5+ILOUQ=="
       },
       {
        "t": "直接寫出一段新的文字回答你",
        "icon": "📝",
        "s": "0fc0667de4130f6c",
        "e": "rU+TrtP/ElE4/8C5VEj7UyiNf2Vs0Qy5EAFgsnQIUhoxlZ6ZmElIrPRNsbWvRkdCXTlOORWmm/aZpQXHCVujbZlGKD6FAg=="
       },
       {
        "t": "要自己點進網頁閱讀、整理資料",
        "icon": "📖",
        "s": "8229b48ffe667360",
        "e": "U50Lu5rOgb0wagnetgvEigZBAAWkmsuGirCA4QZSBBzV973v/clH1PXEr+FC72N5FRiX04xBsoepSlnOpHi5v/Mcny8="
       },
       {
        "t": "同一個問題問兩次，字句可能不一樣",
        "icon": "🔄",
        "s": "20e859ce85e29606",
        "e": "2JHVg/fSm03CV1nPEZtmCGDAX83F6oterQgvAQYHRAdMHVBO2ZcCxIpFrFqgAOAbvZk8GMVpQU0kwHMes/gnjp5IIzpsAjc9Iu0="
       },
       {
        "t": "一字一字接出「最可能」的下一個字",
        "icon": "🔮",
        "s": "a0ac98b0c25a1c2a",
        "e": "8kv9AD6izMcFvPJl0Jz3xEz/+O7HJA2BZOTXb0nx18mHzccopNknLUDsR1EkoPMoFMAOAVuuEFSOLBN940fKFWyNr2w="
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 下一個詞預測機：從訓練資料數一數（🎲 資料每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "nextWord",
      "n": 1,
      "prompt": "下一個詞預測機"
     }
    ]
   },
   {
    "goal": "🧪 一個詞一個詞接成新句子（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "nextWord",
      "n": 1,
      "prompt": "下一個詞預測機：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "AI 擅長什麼、回答的問題、好提示詞",
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
        "s": "b641aad7a8133b87",
        "e": "tZk/NK5WvwW9tzgQJeGw1cflU9XA+y3O3xOmGLu95K0HmRr6WZTWIoHGU2hpYJ8HZqt4gSvQ5dGczR9G+Bk8X/LpR8Yt7p2MbmFAemXj56A8JqSQlKEHb8b/lIk="
       },
       {
        "t": "把一段文字改寫得更口語",
        "icon": "✍️",
        "s": "0448dea48c9dcce1",
        "e": "0ZCltpCNhSKX1tibvBhk6qL6FoZ9l7WIsAlFecHmKVHWbdxSAGQTErkzKnNzJj6sq9CScW4mBtaQBlReEWgtWw5agc6f2Go="
       },
       {
        "t": "預測明年金曲獎誰得獎",
        "icon": "🏆",
        "s": "411370e3dd9563cf",
        "e": "HZg77+bbdRfYgJhy5Vwa6OpnFxxV1hRg2Qqs/oVGkWDs/IC0YgX5xk7JN4HOmcs61xSkE8Qga/4B4N3KDfX/8mb/Nbmfi+wfOKrMxjteqqjJL0GcaWmw/yk="
       },
       {
        "t": "告訴你昨天晚上比賽的結果",
        "icon": "⚾",
        "s": "0a9d64d3f4fa89a5",
        "e": "0FgTuV9UhswVbuijH0lYy533NB16GVVrtc6zJTb10A7NSy5EsSLzjUxJkvneeTz9Hld2MrPhlGPodUb7aF04FuCaR5c3btbuuZuXIapYdcuuLsHSbOlceHwaZF4hgEJ4g14="
       },
       {
        "t": "寫出你和好朋友之間才懂的回憶",
        "icon": "🤝",
        "s": "2aec8e5034e38c8e",
        "e": "m7s4oRXVVcrtCGm9jNq/+eG1o/sxNYyLz7PT0EmT5vLtp9T65IVVBczv6PHBtWV9+5U+yDjE02O68kaValhUhd5gtFue31jyWpR8U/OTuBc="
       },
       {
        "t": "把長文章整理成三個重點",
        "icon": "📋",
        "s": "493bba59ffc45e7e",
        "e": "8lf2N8dqf8FYAdwSPl2VMIN4BSpSpFJ7O+deO9n85OEmYfl1RLDPpIrco3ctnNJUJUbbVbNVBtd9uHhHhvRNZC1860U6YsgUFvxWGr+fp7PIEMbDgw=="
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
        "s": "e9965d2abc2efc4a",
        "e": "h30QtOoVtbmZKHbnT9eaOYpBjWi+rrDlNiNkvyMqC5sfXxslle2gf2gXCfUsHr0ABXANafBTUmT9Yrtpy/eQCM9PPieiaPsDisP6PlIzqiTROHyt8Kr+PVdmJVGKA/FAwN4fQg=="
       },
       {
        "t": "AI 畫的手有六根手指",
        "icon": "🖐️",
        "s": "1079da49c368989e",
        "e": "yi0Fo11a+WSWhQqr6vbbzezCRDgdqcM0CVLz02YCbUKkm4LBX/3869bKMR9AdHVUffDYhkxBUhPbRLKFydSrtt4z+sBDUbfyLAo="
       },
       {
        "t": "問「10 位偉大的發明家」，名單幾乎都是歐美男性",
        "icon": "👨‍🔬",
        "s": "fae2e3283a225b1d",
        "e": "l0ZpKv+iUtIyyzHDrSXLrlrk6BVwtYLxa9Fl/Qdfdc7zVixYe4wlFVGxnMuzbvoEkr5tAKOulOh+OlwaZDU="
       },
       {
        "t": "問「最新一集演了什麼」，它講的是半年前的內容",
        "icon": "📺",
        "s": "61fc150e394d0d6c",
        "e": "BTjDCPumoJHzW3yO3y1cBZpnXom02TYfw5fV4bo3DjJ/npTz8js93PVSTDhfoZXOEyItqspyE3RUTUBkLq+NtZlnPfqWrjQiHig="
       },
       {
        "t": "AI 幫水壺寫：「全世界最好喝，喝了保證考一百分」",
        "icon": "🥤",
        "s": "2f2c2d158b24f9cb",
        "e": "LgkFmYJgTUzkkf+6qLJACgBddvPMaXnQ+6P2zTzVPXKpFnRzrakfjW35KI1rbKsh0bP8M/ucS3/f7xp0tf/Tw+KIN0cQUMQ8828+lf23HCtk5JKuDtmRFBjKos3TsRfwtFfAtQ=="
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
        "s": "2b7f143e8082118f",
        "outcomes": {
         "5f19c50598b984a387357aac": "WoLi+RWitGWl+gAcQh3zRNLnwooK+/kt/gJ19ewpLAP8fQlzsGLSflDyLIlN99jnx+sEsIDR71OTQzXeptXTkP3oVg6xvQv+m3A/eLfATeLQ27gu4O6wcmRCjHhQLsyhT8tBgNBU4aIUKvaTZSBB4uH1BoAEb1CRw2t3NAKeh+O26aYc7rj9jeSLDXCaM8t2QCPmG3IhDbsBnLdQaQwQMpX52dYvHUZ8DkKMFxK2zYz3yU8UooqW/PQPMN+uTLDN1jY+uEMhCoXZWiEBzC5D",
         "7fc33fa0bb1cc8fe3bd8ea28": "9k/FNSbBwfadaxl0MeVtFMmsvPpXQILEfjI/AGqPb7ee93Xx73jDtY1wjzkaQ/5vUyqa2gXYMqx/mVsOC7hsOHlyemSIFKvxcaXaS7yFvTcE9h3RMxibZs34LcXd8M0o/BusJBsQ2iUtJZIaidsu3m5nFNoCN0qRfBrC62Eq0L/d9R/wsA==",
         "f94ef32ea47d44021e5436b4": "IPcZKuXSn2DMOqbT0be5B2JQo4/VouqI9lxK82mh0NCECC78GBANXcDjJbq3DXBYLm/BzraK8eeVcZi1CLY4/0aGAy8MU6B9TXJw9P4aP+Vk7wpcRJmxRFArZ4xVNcOw+fRmRgfkKYZDOegtZpOFoObQijWUc6Wm86BZig1BD+yY0An8kA==",
         "2813994f9c5954a442793bec": "QbR9uAl954VL4F6D/Nc4lP/sVD0VVH80YXatS1mw0eRtbUVYg2KvrgOtwGacco+0RhwrKwt8+K8t3GJrzsahdOD9RfCTmpjtJWMk3pK/9DpMOkzb9fEpyIkO5Q==",
         "688544e72d3f85db994de018": "X+uIx+FUwCh02exo/y9JI2jPxOxhj4plprE3mGkXqmTdaKYaI9qgXSUvD1xTe/a860jCjtnCDzz+wcbotxtn85ll+ZbHmfizPrf6ffSFJ2ps9kOhdiaUL/WgD/HD0R0Qp5PuNc/q1ohyx+RoP/lNWeG8SmtauJm7jnKM4t+RZNVi9967qh5xs0mEnKEDDNVmnKsDJEx4lJa/32KZBuoDd+5TF4ln2mWRCGhStjp3rw==",
         "aacd233902838236601761ea": "OMPTSLzGdIr+V93pdJP6FSsjv+/M/FMnITSsyVsuAOaIhy4uINJszL1+2dEWV5idYhZQgxxxzkPjkWavds6bh4YFK/UD47dlYJJnKezLKJwyZAoc7cO/G9lX0CMsSmZrv/JbkyJp/6GKPk/RbaQZrVbbLTt/xXy6+tBcNWCm7XotV36P6s6VoG6bxGP82hYccaGjkEeq39c84XfeU4wl3KcbK3SK8G4tYLXFjxxlDQ==",
         "e5811dd1724e4228d1bcf903": "U+90G5+mPRbuqy8ASrVHZMPAlJ0Yva1v8cN06iPAViyOEXEzFPfo8bpqT9PT9Mat1To0B9ThspMNTdU/1LVAmvnm7Gisp1QWYUZGF4rL4x0Ttr8+1QUfCzEFNw==",
         "24d9aadd6318232a6291a843": "mu60Zobafa51fBWeqQ9LBJ2SBLwJF9u7wfUDrx1+eAcZhUbD7QlZauPdMrE50o4te1sguy0CStSUVxw6oVZW5BBWy2WU17IL8FPWBD9P6u7kPZHJLFkEZyWA3d9mSiWpZsyVKGsDogGXeybiSw/SQ02QW2bgF012sln7Zf+a2mWL2+EVi10jK5bcAq9vp5wpfAMptb+Bfo86oAzyDQXg34+0OTNq+BA39iJwIYwqRw==",
         "10ae3fd3d5a693189f84cded": "lyE8hnc8lnFkaVQ46MkqzI5eohD86OCAeuM4cwPhan7HGuP5C6wLS+wwkvpvC98eeGZ7SI1pHrv6ATIkmvgavSjjxFrKiSaUYVo0ph29M1hZsdlq7HwT3bhDAwmb+ShiLyLpjGx0/7r+VfStd3l+BD1eOzS064ALCxRo5DZrzBXkuNo3+j5L/gnukMoRoiVgOGDAyWQvW93Iw6Pn1c8jS3k0Bh2M+8rqkVFpRPu0TA==",
         "3f05f2bb0b8d3bb8a03fd791": "8Cu52P9rowVZ10fa1NPZog9xtXLWBA9pLjtrVWfbcFVdfn4nPTwcraHczXN4UbI5ayQGRdvVQXWKc0gftV7xB5Dc7LydM2RSiOL3sn1wlithRbNFYrlf0J02d7Nlj3Tij5qj48norJvSGgDR+aHpdKhoYfx6GbCTv2VcwA==",
         "8975db147539352c5af72125": "Byhxd46ZfA9XXDDLV8Y86BHYrENBT/fA29F/DNNQ8M8hCvI3NyZEqbxIQIAMzzi5LA7Mng+vVfWlPBBI7AJkC8SYOzPOUyhr5XvJKkV3s0UpY1GiPBjLk7ldF7I70adSvUb29DjeE33e7lvDdqa3TLR/tCXQ5A2eawmfDnMasfAIBVjQCp6cFF57eLZAY5sMxJfevaFTVpVA4Z6VaREATI7S8aQR61fpAXEU3yTbByLLzF9GjwxN01KW2eQ/R9Bs7nBoVNWPffXkxkvMNrrA4g==",
         "0e3508bc0c411a2d2a913560": "CDtBirCVLV2ZQkHUluSVPqrb7eUR62fpr9tvWhsbd2UDDEYe0dyqe6vBoGf/RDTK8SX0E9UedZXmzhgurO7qTbx86LLS4Yk720dwtFDUTLEkIBGAfR8lUsTEW33bAUFlzT46G0UydleJwaj5SQxBFepKK6Q8VSoDOgVBsSkBj8OPF0JxSxq1e7GmkoVrnFZYgenNqFeJzPevskjZgDBUWR3S+btoKxB3xCKHQgPfsJ7oNGdpeDv1kvVrQ80BAtD/TeLxuQAve/o5FqRfpItaVw==",
         "88b0f9d32f609ad41fdf0f8f": "+bvLUyFvIV3W0lm0un54Ts7CG7sXg9/jToTg5+M76qUVHUH2uxfoOKzwKNihCP1fYklWhQkzmHESif/LaANdyfRoTcJClfJ9NxVgAc65FKVN+urKTL9QGOuxoRxMbTntG4ju1ywouTdlNLI1sfbxqTfQfMjtmofsmqfWIB9HnAvhVCLIBFetWVHMtolixb1iDqYkCoHd8ficeEG9Xz5VZRqTT89H6w==",
         "37446894e21d4c99d8dc0e47": "KodwhnPxUvR0xe8o8sX3S887+sYnNhooAkK6BpLjYBP9FymORMSIHbhs32BiiZzBPGGpaA5RMCjM2JUTKo+H1WTC3osKeix4s1fP81CQR4Wzhw4aHmSv1z2OZyPGPD3V4PHtOuVJ7/3ypNYk7tfKeuqUbsU8OWC3qsCpjE8R7ISgI0fPGjWMtpzMoMhnVwXRGgcMPlF1tXyCQEx+JY3o7hiEhFE3AeVXnGqqxptnXfqyqNDDnVN2LA3/VntVKIouWqeA+1pz8ycVBlPWUMZsPscafWeeAsSLjjbdv5M8MtAncFEv7ENpWRkmbKwUPsO+SpSexGhWQ9+/0w==",
         "7b3bee6402a3dcd21f153aae": "ktoDS92XfKBbh0KkpVyNaVa2t1jHsDfTkhBQ128pIsF4O448zMQOHIQzvKYWelHCvxKta/mHCiUZwRmwb6oS/2/TWUBeM4K8tKjGlYh1KIka/tAQeXIZMXoR4f6DsftcLncRqE/l4VpYpCvhRDVylrmWOKxeZ9aliq9LzDE9ha2wEdDottLRo+ZRE3q98ggGWq5DhSfMyGmQrehFoW3bSXA7InL+A/y5HmI9/zm2s6wUUNdkUlzgUoivKd/LjLwsb5DDMVEB/OCygv+1mecc0YYdpYVnJVBD0CZ0Ki0c0Q8/0DrleB12hW8LLddjwVVz2ZRBYSQtRci5Mg==",
         "db8111a70109784ee59e43ca": "2czhDRV/zPIcG+KSGxgyqjxBlk0BJb59E2sgOT29WM92CI5bnP2viBIgBIUIbnQM+53yB3O+MYIb0EslFaiTY64D0ZmhXZMREieB1AXI4huuqgopm/2VJa9fXoEz5MHx19dcToa4uNTEh3bZRSsdqm47aVvGS78IsjoZDKWoRc4cR8DUSjN/GbN3gR8XS5YOTIxy6TSWoLtRDjqSPBkrpIQahmuPpg==",
         "bbe74af8934c9e4c90c72844": "6YcMvsso90FKTURMdpBPmym13jXzqUbsrSgcT1a5WtYbirW64+M0OU5/Q7Z1qJusnlxNrDquMGhd5M3yZw3kXzTpon/XZYznQFzuGjbv1wxpj7S8BJwB+bTI7RB+64YEmYO4s3sddBidZfVC8pZAMrpN4ZYOXXEBm7HGeVlONHV1LYVfwW/scw9oXUyP/XzZBHDGE7um0dPY6vgLfmbVuDyncW33CbE2KCUUfAje5fX2HPsFpvs4ayd0FzaMzQnQfG1g+m1yRoPE5/S/Usue0FMvnhXVi0q95DE12Aup8+Om/snkxkETr4t/G+kUSCpYbrLCPmurW1Mt5Q==",
         "ead0966e4df2b02aff62e856": "lGtPlc8NUVWOITw40rqvWc2LoJmqEwHf3cUSoueKq02Z5IkJp618ubaUoLFqI+yNMOfhgIntEcjjkRkOJXOJkPe+X5RS6HG0i/uoKuBWn8Bd325rV4l9ctH4n/7P24aEhK3fOVWrAi0Y9NYTjs5HjTuihKyiMI7X4EbzzbSsZFb5oAMkM1HgGdWE5g1ITIhEjMGi4No7CObol9Cx3Cukebz7uUgqElRf0rsqD0rwI4Ng5eAx7PuQocknzODUalTbZIG+5K5GqXXvfosKGYc35huztLb6VYF7AFg0L8UhW5ulovVIoIWCNT6ADyayuxggcutK8OWvdouV4A==",
         "e5c68a8c418b07e57d9b1df7": "Omh7UhJ2JYyNWhELDP1xw6rPzcks20hfiVivQwZ+bdTPC/Pn3KlKTd8tW5rGwX7dXvr+vBldi/bx42C4Qy9jJwkDVR6FnDOg1N3hghjMSRzcTPGqgk0E/RmWzk14YhT/M9HfO80QjLTfUq8ukC2yBH45t9wP0lh1ImM/Aw==",
         "6af35ca08415ed2eef57c1b9": "BtWzP2XDrgdrvE7G/RoKXY55Fvy2gp+41r+zseEw9S/1jUHAukzwPJ99hKf7xy/ctIbt1QxSkLbIvZXVzV5LtcKeLHEJNw81X706dBMUAQA0zG76wpraHqy+h43J7+dZD8csUP1/MxA5grEsvkZAls0e1kr96Ueya5V8pKcWtT4NhmMj4KZS4RHyagsr8ia2YxYu6mazKx2FPhEGWgtDmit1dCuliX9S9jefgxXSwlRXXFIbHJIFrvcjCNbbMhCSFsktgqHAeUS/Jpm0F4F3Gw==",
         "cde3e6fbfb24cf5b7a377df0": "fDM7dvRIkGNzovyAKVXFqpDYBq6mUa8fILbmhb+e0bWYzOx70HZv49hJbiDPFfUczP8AvG9Cq7LIZuC0TCx6zQI2BGF59MLaVkUm5GtIX4dE+bEG8qcQ66+98DmgTANSsJ5LKc6MW7phY9ERnh61nVJRdoEcRAFQjqxV10dtZ/8CrQ5lQE8WnG09qDKf58eEvFYtEURCPqOlEH/feYCU6PwQ/XeEeXwkpNW3pH7gT1SNDrB3oJORm6Uoi5sTp2GvA1ASU44KPf1i+0cWZXB/eg==",
         "27c0d1f02eb69828437f748c": "IXqCtA169hfQf5aawXXv851qk1XlDMPKtK+W8sSxSMa/389Ou4eTtocVUhIK0r2S6akmryGxX0nllI1QFJfkRAv/6gBjutAx73GQaTtw1siLCuMdGir+sjg89i9Jdr7+BR2PQVVcs6TGr3S1bF8VTTZh/tGmxM7NCCE3AGiFX29PiQfCuYTfO+5loZXliC/VpYemzAqqdnRUUouj2gLJoe5c1eFAyA==",
         "1a97b44714fd46658492534e": "M20u1wRG+KThfHDwJCvQ2QG/O998BSnGSifNRHdEMq0R4kt5ATmc+40mvXOOiJdBKvm+jukgFcyR/T/AT+xsnfgztBgWe6SQmQxyqFO9H+sDUzgmiXKyTrYgnBQ0ITovuP0LhvV67FvoCceYVY+wM0idC+iDhJZa3EORil4zrPWRijocWVeu49T0meC1TEC4+jUn6jPLA4lDf4YhqweUA/kDMgtMTMF/qy/EfH0Nr7dRB6I5JzpKjjR8rT7wnyC1hyd8w2KiijSz3aqKOhDekdrqIfjKTaZrUsj6gXgYKZ6MpoukHvDiF1RUIoXbzUux37W5fVWVqM+IRA==",
         "309231f758eb6e9234fe7514": "PfcDKbEl1JhwO6av5lfOAEDQRKqlKA6KJ3b63SHlVoFj9cwkaV7YHcpkXBbYo7aghDlnCj5yFy+QAVNfxMEyPFMK1Kboto1qDjhw5W1DwUNPiHnGVuKvQf4zyBz+0E/ZGznPJ3vU50tE8cZ3j08pjNEhHGoHorer26glZwKCSIrXiTNiGI5/u4CxSdB92emWAhtHyyslzXqk8JiGVVC+7TbyVUvC7xOtMjbmFXIyZS5S1WJixv3T7iq6z+6diOAHdYHJTG1FnHYsw8COi/oyOt70vd+6nP51BF0slu+koDx0oFtkA5YLogOVHGd24Hxr82q1h3dGHjkwIw==",
         "035ab62b5a8a7ce443ab48c3": "+5gz3UC7LyUjBBaBXABb6pWYxU0P3ob6yLYqe7qzpmewxCmYrQ7LFZ/1tsuxZND4Ww6z7+OfJjP94sGjSVsMSYz7Jj1hoVXnv3HFMcs6Z5kUtCWt+Q6KamjE6031DXXPf7KKoP3P2fQugKxSjl/Dn0cg24kpfWXBsqQnVfFRpej4dMysHaar56pQ9sGbPQIWuTluD2ZkahVY22wvdUpBJIdsmuoKGw==",
         "af9b2914bec66e9b97a229df": "LvuQyjwymp8gt1mdFePFXEjpDQ1McxSSfmEsiJEH9I015VUTmLOn8RPb7amK3DEZMdv3xU4JejXvM00o+cts5jC/bY9GyhNEUlHzg6rtggW45KL4k3Ugs00BlY21ftnoDPimixPiA55gJMXvJESnKynAOwN9/X0nuIl87IvZKMUFDCxy7mWIwskbKEInyvSYwAL1hdbjQtjfdwaxnM5pUUz4Rhm8zZEtgbx7CYlBX3IYw4kT5STa8Tb1HZoSrjSqF8e9SPAvHeOzSPbf6mM8dFDu298/mJTgg8/u4EJr9qYlZ69ROIZWWOkcrslRtMm2uTLtY3mWEDsZKg==",
         "bd1d02c35f6da3e2127d3dba": "W+HWy89AHE68xEg3vZP0Jl16Qmbm0QVUYg/Z3vACQqEhQEo2AFUW75YQsMADQrgB9p1TFUdrJBOwAQMp25gGt/TUotH1NDzr6Duk0CPUP2VtKBPeOamECl8CqA7Nt5KhnYbOYamBxyE+4EINUMg8tv9KN/KAJwrRSwHZ+LerJsFN3uqMKLPXFOIIUZXxhchnzKxCSYBj9KfdRw66Pd95tNeWT+Y15BXik17pzXuH/lXUlecbPsqrLqaGP0jGUzGsobsAF1XM5RmkVsMZ5j5842RSSg+SHxCIHIQXZ2Lj5YOMmZe7yG1nyIcBeuY1H8edRKxL10Mr2LR1mQ==",
         "70d525c35bfbd4b7e1d0be86": "pCqYT/m5yGEnBhlorp+oCF+ZhpRaadrBQKJGbFstYWWD+b889YZH3/DpoA9DnigotYIak3SldcbBLw1FfooYreQMzFsojv05jtmhH7R6Id5xN++LlzdEBg==",
         "5d191a55b7f5dd45fa29aa46": "fzM470VQU9O87Idg7l0NBf4JNYpIxqJYndp7nTtVl+JuQ1uTcC/ast3ZpA0jYPcioJb3ZH8C9g7eo+6X4HCNoQV9AU+Pqu77CbRIJDsb8DB4KpqG75p7um+y7ze7KUVdRugLTApZkdCEA27E+u3c8NvIdlq/DUzJlDqMkh6gjfY7IVNX3qCKMiJyLRW456r4MGN4s+imlT0OrVo6N1LRIh1PyNpBdsLssqD1/w==",
         "d6b3a32fcc0500865e0bec1c": "hwbm3uZwgaxMrO0PlW5VGNjbWCnBQvx4s06buekmSIfFBPJbOL5Kl8DGGtfxC8kVo4L9rcxXs03DSJMNBoHxMgAcUl8Nd4YnLYhhlnCPvXmk/akoPht2L4SmwieFx+ZaD4X7JSG606rvoR7ANHaFUTHTSO6tUGGJIA30s933mGAPNmELLZguQ+go6e5K7mkZbJkYFe4WbwwyDY8DShs6S2RbqJgmZWDP77LBBw==",
         "1e2c4d15f9837454a5e6b4ff": "9qMw4awSr6XgEap9Nu1HE2w59aQpJH0YHBiQAnhVCp+atQ3xVCcaLr1L6gHW5thy6DCyEBfjZAuBAMZAAH3sjRvQ1CQX0YAp2fNMaRAhi8UY6hvAACrK+ROt4Xnkcr7H4ZLdDp2PpRrnF04gMx48SL5GG5FxPzWySxkR1knO0fD70w==",
         "41c6347e9a7124d8f0d71738": "XwZ1hAdFkhEtyzZR2zaHCADKUTjnjUjNZCVG+TiGxLMnMYAwanvhq4nvxpilcYGQLWpeB7Onbz+8DeYUYtF3jS/jC/AXGNDbmi+qnVrHJiFNoiTkPPiYzqNqCvwW7txjkYRPdmsTKKyPbGb7xfTpuubhqqRmavsOIa7TtSzmS+514zV1pV4bOPTfphKM+XFhjnKKpS94rrLKhjr+PTvifybZOud/rKaGUkQkBCKEkgS2nB8FNH/eI3bjatZkrdStfDcOGNEixSI2emJUH636p9VDbFKxgw==",
         "ab830ee7b5fc993821e0b4bf": "+rfJ6iItq2ZwyS5vaAFAzeQiSzx6Ynv5PY/fCTa0r1zkwv0WlbbOqfR2QIo4Agda4XxL+UZmI7rIj0OtHeFnROdG3RAFqTBYLViMldPARAoMhJW3/PEeOY4WS1VqMec49YK90PBRy+lepRmWv2e/JSffqqLs9RYPLwG67kHOtbbrh/uueo5sNwcysRP6l/RtaGk9qx3+tyUZhiVe85z4vv8/XxSHoZ0giOxsTlbvyj+0ulU9VhAnbS3BRMip22C7yCiwmq/+h2EKg7SCS88jYbKIcP64TQ==",
         "bce6b09c6a65529dac5e106b": "fCyXFaQyvdi8nNdgbmoaNykstDXKzjCH/bVsAnO/GqyD8q4KHiHMUPNuJxSWnxgpA83CpKZZO/tQ8LyM3pQ90bFEEHWaVHTN8dQcMTBhBTkjSbmGf5n6QMQC8acbHT+9o9Sw4Fmo2h0k78+4mz/cgaWh+3namfDVSoDrs/yoLRZZ7Q==",
         "a65d7b5c1d7c9a725b0c7d28": "WHpMcz1bGy9bauUdYm9nWCv1PsRycS4piPDEa3BWBJBFWwzWRy8wfwxueeDydEl9NpsOeHjZpLyFF2s5Gqnin+nOG4TP/NGhHCQTOsc3mztos+BWJ5Dm52zoI0t5jhTiZkmBiUO9drCkr/ofymZRwRxbRvAPWV0LGdhj2r0uiVobsBs0TJtkd2G2nabXZRdcZcfjtijUkqS1Jx2t+fQIxzzsRk2C38cm6MKto+Mmj1yNTEn45pZA9/ry6vj4CHm/7VoHpkEHuVNRu3uOodNxhPVTnvpHYA==",
         "bb5bdf1cc4b5f892f6b28945": "QoOUD5hd5Ok8CSnxqpnjyhXswIezcHINrmzF7iYPc05o1kH4J1sPB4kp5uWUymMzl3M59pSv/WveETw/yXimGOrURf3eyOv77CQ2dqnVtCqv/Mj/b2FV07Wkt4MgXxB8QeTjpt8cBg1h2ph/4sRLaUZ7jyQFiWQBx4yzXlqn32qFazdHoiqBJLubL072+UM9/YYbB+mLNtVOfZaZ4khWUGnDm1xnVIBjkQ3/+nE+kPJBUqO4KQuyq2BFTadImR+wmMmE+P5kvsgnQ1KvwQV3XsrgyWnNew==",
         "699c4557692bfae8f4c9a653": "hw7z38QPXqX9vMMIu8pmiw883A4YZwAQNYAiv8M8iOm2eff1cLrTncZL8vVjFgT4x6g1KuN60PoVTpyPitTRE6zO1q3hXl5G/zJg52Ig1cAMohLDWYHh9yEu/oB93gfVcd7FI6Fd2TZrVjcWevY1cMOXOA80/5GMW6RXf2itWvH/vOroRG3PBYTFQ11XqmF0sHjzuk/33uCwvPf51YDMnYuvng==",
         "745afde4dc6a7e134e8af873": "/efdEsLnkGwJQNUGxLN4y57tQDlY3/40yLhLOHGrMQkIEI0h7ccXwiLDZV5wYPBZqsfYobIu9Z4/bcGi8f63+SLiqqqBLes3zGdrrXZb9IYLWqkA0Zm2f5uYavV22Wq2pr1+wUQ9ZXpe3W6Fkhzkg+oGN1suMXQNEuqMr7Amb2Yg1zIqoJOK+mQfRbLrGpORBR2uZaF0dengggt8T5Yx8D4fobvCBqF/l86isSAuqknNwcp8zTzU9iYpJFAlki3XXskTECBXKz6UXINrDHAI/IeM2Cs0cgFHgOfP2oAgWUshbm7lf0RWg4Md2z2GnwI6MP8u9iBUwg==",
         "7375cc90536669630570bc9e": "Li71cnDWN5PkN79oxyeaXtvLpPh+++RAdsD7Pn+x8b4VGf/eHHrLwT/09E+K7ZWvRz9gmwsrnC+tLoi8H5Z1odYTu/CdAqVC6cxTYLdzGoh84EH8sd/YCEloNz2y3Gt14peBAdCTR1Zfgb4AqobVtA3mu19tKHALL2hNZyOFQzjz1qeCA+U1JIlWSKpmq/nIgMrPmAKgq2XQPQQjbiZjPh9T/JXPICTWtNwgTazy1evF7AN7Kbvlg7NMTAvo6yE0TMwipSxx8gVAfm+1gpNPt9/93ynFPrZGr0xrQsostv5fRDs394SUhHiyfgfcOgN/Cq0vFiAsww==",
         "7988e970e2b34fb69e4a203f": "kcYY5wlhyzzX1aPNV7bo7uq3YCb+cfSPqmT72kHEKyeV7Enzkll/Dg6tcuQEZRfa/gjnzEhnoSrX2h1q8yT++lmmNOBbIuuvWoRBko9GGct0jtIVBe7oQxswoSb6jm7jpicisyNP0wT40Gt3xgXYmaj9AIDirAyAUGD7ZTcw9iuTqqVBA4J87Bt1PyA2s55Gx1aThopsADnjEOsrV56AbJ2IkyPF7k09gPYlLvTL4rqAMv2q28NZ+rpBGF+Eh6ilWQQ3Ss8oxlzwzK7oHA==",
         "b240f662ae05657e7d14e52d": "JxvSzQTNzCScAXqvKueyySs5QgrhSZo5SdsG+4XqHeFlM3qqyN1egX42G3a6LeIaL/NU0JSnVOloLIi6YU157L4ni0PpGFVDPvqjIHgNHsaIZnTDYCM+9DK0h+zBQDwozWVEpCIYOzpprj5o56WE207QCJoKNniqsmobNwSbmeI/tg9n+FFd9eJSD9tdr+p2fXndeMoKatkouJPr+DkXIw4g7qtUsYwDb5HYHbzNCdBv6oREuRaDxo5eoUUTWs0bqPCU8YTMu/1hVsSCdP+To/JIv9/z71NxfyAbuNIF/XFbVCkXbGmUeTchqEioUWgIoEpohyHcafmtGc7qHhLpr1EUdWf0X8YjobPOFvTWtpo0abwU7xVyhkNndwpayorb3g==",
         "da1f801d778758c1888d0007": "0NdevEaYwYAsmyvc7cvVMqLjP0UHZR9L7EbGSBOONpLJJR1JUKlneOo5fP6HOMpuAbaB1p1nOQYycgaNRieGli113wnjK1bYusmCfnuTjn4kO5Yg6Wu+iDXTLyb9EieQUtu8koX4XdpblzbiGIfLfT5lQjsWam8eWS/CZGGFdw+u+WdiHr50IPf1maZ9gyYXKlofg436qhvjAWafN4XlQTFCPwhyWag9TWK3p9GIBrvyD/fJ4vUHB0UjQMZQO01VsBeG6jE3EQk5pgSDGMUnaPLKQ0WjI+ZSUaOx2a2q1/zr7onulukvh2OEr85J9YsQMeaZINMOl+6aJl0+iyIHNZBZhuj3mDRRbGM/o4GfJsCzlaRM9HW2CBHzN4TPgyzsyw==",
         "aeaa747da015278c1dbf4ef8": "nVZyk8Qv/Isd7kJ0UXw1GyOyk8/IB+AaQGWQzogqAZ+V7d4JT7YFcKo/BMrMQIjDOSioBu18b8PJA8gPREBtqyS9r7Y8wlKRJKnnmT0qZwC2e4EsGU1aOgw/BvaHhZGJ4+eoPEvvcQuCLSqZmk5+Nm8c7FhWM6e0a7DKtukre5fIPgSvzmTSWjPs4lAjXaNhcVe/GGe0pK2u05BAl7Vn8fRgCuTvO52yqlfegy0iaCsB9uhYqaE6ynuU5FKWmobk0QKwqk4UNTvsG3fwag==",
         "94f6fe9eb3a57913a0c907ff": "vKhWT2mxMX+Bp1edu/XYolpxUT7IbWtXi3pyNebXDuUr6Y3qJDcupCzdbOFfwBIBCQ3ey6YHf9J8cK98XYZ2i9LaljmRhZj1dZhwsbmFizFn1nNoViVkz8IO3OQD/nzztsWgoY6klJxklFhLnnOpUAGQ8mQge01pGJvzn+j0zDvVfuIduhKsO1Jsc1b1WqPPRJXnNkoO04+K49tb9L0jviFekEUjAFeiFOw/w1yH4oPEJ7pkKzUKSoLR8uFhNEa9oX2XyJxJWQ4M5nKegG63gtJWaoFNH67wnKix+1fOZB30tT3s5mqGYfZk+2Sd/dwV2w9XtkTaip6M0p2wjOkeqoLrWEjaDJutLnQRTxCtGr2l8HcKOti97u8r/tkUuFFe2A==",
         "5311727da8cd48e50bc8840b": "4TregYRvHeUYK/tuUS17ObnjA9a6CbucHKOqBOSXms7ZqETRIQG5j7Miz6CRFgGyElF/tilJhJ07fcC3PnIlwOuVVhmZtYdLLyTIIf3IDrPyNk9vGI7IHedM23PvNbLbYRsakzWke7QWIQ0+6skzff8nzTRJVHwhWyF55lEXxgzC9xsyQQtp5XlmCmj4z7twpVDAbfRJi0yn+/XngDm369SmqjEE5rTB5+M+ER4tRt9u5rF1TVDeCPBpq0Ahw5OlBtsqs/83FheeuGHIEq31D9bhnxIacUy17JvBLtajSnrNR/VYXgUvcd6mrR+0aO+VBYPIr87XsjTSiWsatU4abMr79kGgDsYRUQZBBhTWwFMTLN2pUlAY03br83ZlOU4naQ==",
         "8b62e20b6f09910fcf94b3c1": "4x2o9JCn8wrTDY0R01+sECJUTuKChmHF2psoj9RZCR/F1I5IaYyAbCGTvH9/pe7O7PDBW/njbe1bgmrat+2hbBo+Z7GVlcsPeh5KanEJEPJ2RRH+FuC5aUGNNKqvr+1z9Q48G1r0YtCQ/OAMnNxPq+hYnUQuxUZWflj0Sbqm46PYAgScAGSVKXshRNGRwBWvZrVi+LUeph0ORBNymYp/91DQLg==",
         "298102795bf4c73705ffe776": "GrXEaqoOI3LUihK20u9jnxvNjSPmx3Q+GSaNjSO67mUDB4Z6dpQ6hqxVoMcc/dKmV7CYt57/nUNnszQnTDIJ6hgsn7q+PxxgYiEXdBqosWe7xNaW5T5gIcJ/3DuFqH9CbZJ3oHsFtcbQwunuXpIHtOhFo/ge4PUFd44+I4ZMPmFrKh44ak+X10RkT2jADUd20mcowVcqqb8xTY94u3rcOthDNN8yjx0mNnkyc2gN4V+o7klljx8FxOns/7OHmbQif7RvJXUAhmDyXiNV58wkuQrWD07K9ySsR8tJ0Rgn+HQqoK+FWg3fCGkucyR8NhB3eDtz5uE1Tw==",
         "8e8b5e455c794614054c31fd": "DOzZEq3sVPS4curYEut9qzctx+lGmTtjVVk38YtQ0C7XbtEMWQ2oU6X52/D7A+D6eIXc54goR8DNx2C/xK/GAD69g4ohASEimUyX6pYcPR9+7n5sv1rDlYd9hYiz8Wlur66IWuuiuFqX72luJTrRq0PrWUbqE9qmv7e4xegJZJAbeeakDYRE9lk22S5cN/OG4k0zZizU3cNAxR1KtUF6GWUrlyHbmq5NLUCgh/qrVlZtAc3D5IuTKMVcr3nN77u8DhqLABm0b92mZNfplhsDA152S2wOaff+jgop3S+gjkdRNMYGYSIynbvdUZqrmK8CcKemZw4iHw==",
         "f1d13a5b7956706c78af3bca": "CqshOSN7TxYDyxP4iCCrAfOMdsebL0g47Y5hcygj56apFjjgB5JW5xd8IksbPc2bnY5XndXx+zQRYqotSdYxr8zdUWhKZgNDyNHr2rtG20X108IB36BnStym/Wb6A4gQC6viYFCEuwKKfmIBK8MUdimmx9HO/YjuWPeoAF4+zWh35/Uxf31YVE3gRuxMOgCYhI7pIjHmQ03Vi4s73HgFpjoAniv8LFK7Gv5ABjhih4DvvJs28Mid5/DJnlhS6JV3hRQSbFyxoUHu8znwTQ==",
         "3a105478c9b586fc25209f44": "L9BWcjh0XAwG7ZJ0fBMsBpNeeIpn9x3tOrRJJ+ffyWj5+qgSpExPLt4csJtEBKlmss+Id4OE+rTdK+Q4LbhMeVAWRz28krZyV1zLSLvDWGR9DY1G/7F6qEH1F/3UOjWUcZ0qr9N7th0GHVrSIWOUKjSdwpEQiJ2eB7d/hP50Pt0ldPtUM4loVq5PgH24b9fs4MQe7pDiqCQxwH+klJ4NF7LSat55JbTHXcX3+duNsF9/J4v29fShECzxvTRhJKH4OsrX4WYQJR900tuKkZamb6sfhFq9jw8JkLCydtTqzw08/Ct0EtIjbl87R4grqpSedRmMDUC75IZop4yLWGzaPQTIxkwcBp+hjip9wyJYzb7UHEExfA101jVng5k7GRNIwQ==",
         "95eb53e2ea384a115aa70941": "/vBfD1ORDYgR+FkNT367bnSOgFC3Wi1lS780blpWcaqZahCjcUPBEK2eBYDjpg1lG6G2a6aDaFHKhID8v9l1qBi/RVrqeun+dIHntekpd4+8vy2ew84oc61YzXYM9ep77j1VJAKVIp97tCjAeokD51HXr7u4BW4YMJUiuzzOxUUPlGtrW//tEJgTQZmpAfWX/UIavAS9uXs1kUJ+xNElkATX2kK3SCtM9QagH1nddhONYJRpqIW1tZfh+ET1ycUYUHGSKpXiqLhyBINiXkqPDK3qlabJkchmSB57koMQhBrWIKC0xTqB9lro0BtLZtZgwjD3MOp6ZMBsFKJIvcqo/eFcRnI4/gXdVtrTp/Ql/dhU6FHVLqb6IIv8WiqUqGpfUw==",
         "b963402dd45537c495e862bf": "swTW+gez2sbN8dKIQjXWOY9ba7FgMcijG4cQ57j8YM4UDl9DbnTO1oog3vP95/WFU1nJtlWeqljWSSmhR9vNZOZBjwnXZLLkIJ2wrWysq0FC/B3jQPBep0MaDEkwP+KweFbpP5owDUuuM/bvZNbkl/JZcZD2Kj3fdUPODCS2UgAfUrlHK4mBYolkhLjCEg4iVpBqhzXOwq37/R4I+UjycCERPPUD7xJkXQeVqozWAQ7ss35N431tLQxk2ZNriqPP0MHR83yhmhQH7VO3GQ==",
         "d2179702e78ed74ce26d7146": "4+JA7OdLGAtGo2vOmYmMEbJlLgD3lbq0ZMIp9MDBkQl8ZWb9RXpWeviOrxMGztGFejO1cEHfiBsJ82vay129VurmC8RDM7+Umfs+Vb7VCJehwH0sO7psBNA3Iv1AMKjTaArbAacz3+gQCr6PjEBEn4mTsvPoJr7di4MmVh/YVhs7IUmzHedFjA1nmYAaP49W8rJp0ud4jhoSCJkCK2ncY9Vdj9D1VBLt+6V4Lug6uzrVF0zdNcBllSH8eW9ruCUfMk2Cda4jse21pLD63iAyIJqFnCZRgL9JBNQyHwONut2yywhdgD/9hOkqyrX6k6YSj/nRgHhV2oF46zk/6gGdVT+oiEof1UKVWeSbjxyj2QY90Pv+Ekd4/UqY8BtctajgSw==",
         "777308db2e37218326d026fd": "c7dFt3bFqVemvFQtVkRFOIt/izrTkEghk+cxR7EluiHuhVU4TRlhLZGAsTX5qWyN4r7HsVrQk6/L+mXMWoJOoq0WZiJQA0m8/IIjt9GNNs+FdYMZWQWj3gbDhVURBj4O5PTvYEa7lEUjZNh/YyFxUFs8KaLAaFW8soZsAa8Soj2s/Fjmg3dZD2u2i+VaQUX3H0KlZN6HzxQaAtOdqgqoip+6l+hUY+/1htkiaT+viyxqfNhIPls1S5i7+yEQoyQOhKDna5NTM3icUV91Iz09RbksphofQ7Jq0wdkGPna/wVFpnPRU9IuBCn+7rNUvvRo6Sa7rzrSiFCTCQJzl1xBsW+CJsfiXKvnFDEQLXAgRPM12i5DZDnGMcsok2lZMUrA8A==",
         "fbf64a3e0ce6b33f7218c071": "0lHXKTQDfoKGLju1XzASdlOP4U1ASJ/QqY+3RYGvamv03KhYza499hSdUczsGf5tP05yZeKqR8t+wb3H2+mJRcGUM5WkRaaKzHH9JOaNU+ASh91mRAN8Kw==",
         "53f0258a2e8b66d281ca1831": "n23ZWFPW4+SeZji8izxpFMUXqobzOyf3MyaatpyUl+nQMp5cvZN8Yk+iExZDjlTIdBmrxA3ZPWx4CP2kXc/y8sPPU42rKpELMxgHQ5EygDMwgS35DZC3GFSFiD29TGstS8441I5f9QOLqzla4qqVCyZrMXQlx9Db+WsjYrvvKRtkZlhI9mB7g8njBd2+eXDieLRN+0G9yJ07w9thY9Yb7LVAbx7YdpSv27LwEQ==",
         "d1c87eb0a264bafe64903dec": "fFC91C5vPiaEE+5jlnXExg3Rj+p+s0GJfvADJSMP5q7XZx92o8PLxavsQOu/NSuE3rDuMgOIrXPjd839KRG4K8iT4RgdMe0F58wnQgL3NhLve0XHllkO/C62ssvzgWSqMaqZ9BXKEpHtIj/jgJPKsH+Gs12xs2EY6i1vm3myC44fusaeLRGreJDuUrNdXhPv+sItxDoaWm/yPUGUW0a9Ln0qmIDFUz9v43njLg==",
         "5416e08b44a66e2bf023ab5e": "cEmFe+pY7o/b4cMDJ+ue4reGc3DUUQlkhbYUx9aFPjsfqosD9SnB56sdEs1whFotx/ylLrtAn486CXAPQdPVAGai8vKPh9Pz2jWZQ5kWjN2oRdsv+H2dWf0EijyfdjfrEMXxTHrXqvDymltMNiJRWogPfQtBBy/YLCwhpFSs9J4Nfw==",
         "28f15d77198b5a45cf18d82c": "H55VrWlJVM2hZn1l19rgmNTV9ooI+rOYpDJNpjuqh8vWYXH0MvgF9NEcfoJy+fqtcb0gWAqxKbp1tBTQEJvf+TmC+RwaI6ubMxBEA6mWVTa8KwvG5fG1Yp9jEUn5jWnvXWRsWZ23f9yVSUCCtXnlKgRcMcTPr6+5FhFSxe7QPX1EedW/uLOse6xsk5d5t2aWckQnIiWKQev4sEQGAWsUxLM503pfH50dN82r1IuX/94XJveSMwYWV/R+PUUNlNl4IKLj2HIX6XEAWpKeqa669ow2icRiIw==",
         "1af773e8e4bf01e2a16338ca": "gbduOgFf3Z86SCx3Ze0Q7fz0EiplQ7YFwU9+N1S/gOI6eyCBzc3ud0LU5zW5+AUCNORihhLexoIp15JnHgiVGTXo78CxC4jt3xLsRKiqdGEk9zFR69UZbigQ1Cx5z0VvvFIjM5O5RxDLxd7MjyyBhQpszDisb95KwAwWWx1qbMg/CGwwJ2Fx4gxv16tN3g4sS2uCZFjP9GLa/7v5hPpl2z/GoF5qmF7DLgbSYiI90yD6OAvCRi+htHQLsLhck8X8K/Dq65RGWaEJowPC0iiaQE8I4uX3Cg==",
         "43d19189b0d54abaffce80f1": "nLUzxp+jqVY4G1UzuHgak1mpjJZNK05Bb6JOxLHfOW4i2IALzcvYmVaNh5y1RrTPATwnCnjnJ1Dp0GyrAKAiDYeai/5iXGM/4WwxYzDaRiSMHq5+uBAbnFH8jOtFSwIiCjEcrgYjoEVgubSBQry2g+KJCB1gh2mYZHOLN3R8SaK1Vg==",
         "75b538848ad24fba6c9f4ccc": "uqyLAowJQMJEMbgu1ZRum+Sy1KyV4P38e98VR2zqFRZK+dCzqS5t+hIANfs2DDDh90bGhzWZMtZF6b2GTSSrJeJ4e+ND309Swyinnee5UNQel1DH03D8zdfZCGFsU216gNSk4l7kPIEEG09/l81K1DhaQbebj2649YOlUE9CHl12wXSNRNFp5iMf04EAQ8EC6sr78v6sYGguB8vJHKPAXYkziEK4+bZ9/16bPCUTeURHSqYuB7g0uEWSJ2wfwa6GzLmsGy1OL5tmvZAwumH9//JfeTwiHw==",
         "c8b9a68b078f0eba0aa91323": "/dmBumyomhPjJ+i2T1y6cf6+wQXvQ56LZ2qTlky0g8GxdtLXPbY6OLUl9Nobug+KLby1aiBImplXx2g0rI8ayjceSxBW5NMb6A+AwG7pcy0DPiVDKHPZZ3ZgvKkYbb1xZNQ/OjOhi7b6cx1+K7/Q3RAmbLxaHRP20Tl1UABVmcCXi9t7kJQkRKUf7gBiPRRVQd1Pegp0KUXJP3jtkKiuC0/AZ86rO4RGO9+5tRU8PU7y5kB/5o0Stye7foRTK40zWaEYkGfV7SXDZIzNt5/DxG8ESWhx1w==",
         "388207f66eee25ffaa496df2": "TEFdkdolt6yIh5XCrrs7IGWtOgHPt3vkzWkaHnHwvb3GHMPPdEI0T9EK86hE9MfsPO0RfaTzFmtYuQxGRuzWA+Kdaemz6YvKMIh6+QS1G2xn/pftdgy07yY4q3z3/V0auRDB7fALfAmuU5voidsJq0d2v6vtfdiabHy/HANdS1urhX+q1xNGn8dmRh41pyTO/3hyBnV7yc9JI4s7DJxqHcibMg==",
         "f87ee233b8ed8ad67cd05081": "ACpmDK6UkjUPhCgu2sEWxaM3tMdDNUJP5xbcXTivksmHeLq04mhnGz19HsVycpC0LDx7PYCfbF9z0sU2qTMwIGvzw6GyOGXR56yMDDI+X65vDtBILH8/8fQKVo4KXngz6wFx1M8+nuGaCAhAddm+mjjBhu7buHJXpa0kKGxFgPfMoY86XNIX5C5fap+WhIMIFUG40oNWNVqvi45ssrou+CV75FuloGcudySi/uUHmP1juPHy6YfgsQenq3BbHM6ZCyxPluhW/vaCjciR2OiZkRTBALhg7RpdCq/Yydrgz31VmyQaBmF8jTllf1658LVDiwOUDFCyoQ==",
         "4dc099e6ee98eb1f26297e16": "4gpeawt2MXGoeivswzdTXrVvlKvUIuSdVpvel3IpZxL8hhruvvWkMwznYwlPxvASL2z1Z7HDmYnMKZ+KexZtVDqUWZOuqbRZgpRDXlZX3oKKkgsCgrGG3u/CpzRAuHhmy8N7AEP8ziIgfyh7R2ZEzULBIx+cxlRwRA4E1KKF5ANQUTk/Ya1RFy5NgWcTyG2vQFHIwxF1gc8RBksCkPuZbKVdQV7EtBLdaPE/8jCI/nBrro4YmuOzNu3q3nRyWRD1owixmLWuR6YGqUOAqDTN4eAeI/UuCkWIl5Uc5VY3VHG/uHg/9A2ApcNTVvwt8qocWEXsj+9oSA==",
         "24adbaf3a27f3d4590e03ada": "iUhwcAl5WwbubNFJon5drkkFMhWtmnzYajgLeblqCA54VMB09VzcS5i+UhybQd+PymyBvzfa63NbK6KeIHErV885rD1l3Or4cLGgVrHREOttfEHZaONp7VTQHQ8Wrwr09VbKQ4nXzwl/jWHzHnANtXAwygWPTtlW+kL/ba+FYdPXSsAZEYN7U9TKC2Ov/dTmdxgZC46LpHQMY0OHwRtTZMrHplbBg8K6CWCRPe6RHqzZ6Xv5g/pku86y2syZFVoEivxHlHmgRdOMKtlF8Q==",
         "f2d526d9174e523932c9e3ba": "Ppun5FwcRX8y3DQ18L3OvhlpJva049cUtRdKUbpYUY91g/Hr2POR0CiERQjzlyJP8MQhW7SS3WZG3sN/67bnKJEhp7cwlJ1AJJBbXn9fqzCmJigeWg6z+0QHGFUHdlRCgjOSDixwWqfcXcCPb79FYFOGGXwOW9FridKyK7pP49uqpoCLlbYyBVVxGM7SHLkiNpUeCoQMwFvwx2PT6AF+M9YRCYrGzBN0TdVJXGikMQRyNxLC9PFdleETGbtPhl7f9FUcBMC95+tBVHXdG3p1JSZycDwK1Wy5OXuUE6DAmv5ErmH/HT6ftwvDtDYkpQ+1KZ4OSjrLyrkugfn3Rf8Nd/cQS9+W9amooZhGpwslS/QJp8/mJyZ7Os8lHjdA+aHR2w==",
         "98c6c3552379444f16f82e95": "4dgqTURoT5Hz/y+sxAk3TLEqqpeJpARWB/HBGGyN36yAyRNpyUPvgGGbvJQH95ZqqsEh4PfDQJxa5iIgU367aLvmCPsGKEZe2iy3ncAPDvsRFeotg6GncmbcL4lmhBAkMXPKRX41ucDi+/ptZ1vFnWr5RcdfB2CJIyzu4jLEG5AEN8hJMNb82P4dDRxX0SulRFdArO3aYR0bXa6CQmWmu5PzV6gbTj2IuC6ujNl+2LVSKd7iH63p8xZqiYjpxNTFooVyw59FQCIDtBc2PWcKBxDUxnIxZSaMTSMY0pGhJSkjz6y5Js+BfwUFSDWpMmnvdvZS5JlZwDMVoQz49eF++qvuPchCzX9bgy0mmYMS7j/N/BpteCflPyk0Hhaboq646g==",
         "ed3c31f03910b284faa8891b": "9RAuknnZqfmJQ+Bo9JPO1egyOBZ2TfwzJvQolax6EyCs8S5tjAN2DCXIXR7pwIvTH89jSfGrX1lqS44DZvBcxRRrh7O8CsjKMY42tRhQGP6X/LpYD+PR5GGCZ+OLOc1up9He9boRFJuFbXpff/mY4Ts4KK8+OchSmc/naRUmeAlMrmaVn7g1A3uqWjzpCFpcb/1LbPSsTS4W1qJ39HPT6go5v+uaHJ5P94z4Ip8wiLw51XGAvdsMs7Aajc7Lg8nrFY0OFW3a7EEcBwjvSw==",
         "9feafaf525818b7f3435f895": "DGBtlgskzOwxeTVpGVXqpLeCIsodisxKGWc0pzMqzl/Q1VHqfUJhKwDgKJmck4Zg+vpv0d0774hRbFITFMU51YcWk/g4vDXzbeTrStScAlpKZyVUb1PDPJK/IZ6bbPwC5JKH1yCtGeVVfeJguGuzDHLF6Mn3nMDzS3deX++OVIKYd5GysKkEnp6B92mq5vh0uSkdrCe1+VDOR6Qzq3pG6XclspHcvNVyl/xHq2IkPmAqVEhCpCXVkyoxutfOf8S9PCqVTKcozuxcDnELA8+BX6EVZ1oCDREH6gIBKLrMRbisp87juLCoY7M8UcpJnjO6SbOuYRTq5HNRbiM+yQNMPwF8FJZApsrxUfHPa49G4ud4OQz2R94JvyIrPOvApQ1qfA==",
         "0e55d2e60a51837128dec366": "oHu3VPIFDX63ID3XkH35Hf8ibt37AlqXZHPd9O8DkTECu0bwFnrR8Syamo/KIWVJ/PRUeHKVKEyB1rVyxOe8rDrkAWbgNf1jGYwPI3YJIK8WPdKCjIp22Bb2LNcSm/wTnsM8pHp78WzF/cQWcOgXlucQEd2TIeRY14lVIZZdXBPO9slSVco0Yj3UQqa8EoqntuMpBDQmf7vpt17ci21lc71I75enCesSP/REAMDG5Vpy0WjusLq9G75isl+oU8851d4r1xfAz/6X+MX7rQb5Ix4CPjRpgWIcNAMkXAl0xy14J0oL4pbHFqAFDDopIOcs5sTol3Dh6273PKrQGrNR1XQAc1Too+ubIhW7wFZuReNszRRYhJAbiGMFYad7W0Z10g==",
         "f87a5c9d4fca88611db99d1e": "FtGINlBBWQvvshsIxGrP9F8J3PSPftbzrKswPkZXlMcJvtBPJHsCxISdwIb2t+Atq+rs40liP4t24M5zu2PjC7/vC0+5XPC3dXyDLSWAjHvyx0mj079FEIYwAEOcg0rMoEjkMtnOU3NLoWbbdxVRN/VtSV5R0/Glun1etCiMC5HSzHfcUqKlgwRl2nqDdgxa7oBXZKdoDEzplsL/ZvzPFL3enA==",
         "3c429969e969e199436165b0": "3PqMwoeLidARWNL5Ip8MwBHdsAMrvbn3c4LxxOKQl50EIgZ9nPIuPTio8i95UVwxymTiyq4A0N29OmiBpMXhSPS7KWBNLTW99/DTgQgs2Bwqsd457nzmD8Ucgl+124/4hb5GUISsphdw6uul2tGODeFwNES53/5jUEhTTVqhlV2IcXGuPJ+VPTFee2UkhF7Q7AuIdmb6J+ZgGZoawMFNbUB0j1u0/2EUFOflor8hNrjWArO2S+Y/t08DkouB0pf4sFRTbLcS2LXiFODsItKok8oSXjwi/cysmlAJk5YpJsxOFkLWDJdXdYOCY3/hmIWas0pqjD4E5g==",
         "4dd113eaa1489dfab09a968b": "WtjeT4VtxwZPggt7tSvttoTk1HTuqGZe+bBg3OKsOBFcwUmL/QZGDeOtAw/+8FRccuTAxlL17qadNCF3uggOIyrQdEhyQVkrYWzqeD8apsxK3x2x4UETn2KSQlg1HUJjDnO2x4HLnU5Vl/ADxUdB6Y8UTfzfLkNnLJGAaGcOEuIs7D7n5HjFoLPY0AVO102NJJ5k5MJQlO0VzUfN81TVAlDxwT/mRhwkw61scZJXxIUNgGmEdIKDomTUM3EFUJKms2Bn/iwDlpSANxfHN+vb/QRWHEg2a97GrP9k3x5hZyzyqKHHQ8V/BW0f0UcMwLjxzyrN3kXMFg==",
         "a9d7399c1f2e0658e90a6a76": "TZcpMc3YpfYZooOQeln6+C5/kjRHwqvLOspxwUliOcCVKY2NIKtPZ2kP4ril9d78UGOmN3CC0uwgrWtZM/YxTCe5ifLWRNInZFEVy0M9JL3vBhAnD1Dc7fuAvSfiPfPmMjiGPTBTTb55UsYVgm1a5CuLm2hwiRbp39PTQMaazMMl1uR4ZWji57fwE1Q7zxxCP6OtJKGF9VsiJxhrKF2xeuot/gpahdtQ8rnf4RWIw8+ZfKkroYudIVs01Pd+9CW2ERUDYY9pLtjiKijdYw==",
         "795c468e3b543fb9a92818ce": "RAmp9+uPMEjxFyKZAfMDRoWM7IHU25XteQFqpK7baALb1RPGHO9hAxaFNfkoHdDD6GMZk8XhHLeDc6DaLZrdJibCM7r7z7fL2hwuLXpIbtYyhGrZGaeqh32cci0GFceKC9wlsG2jl4KGFfvWe/YPfi8xn4sp4F6YuVSIu45kvofCnkBoGDcHkNnbQZbn6uDanOCsD9TJ0IOfZ7epl+o/t39m+yfyA0Dq/hVFCJoTE2z6SJCrBUrxcV5LA3FpHfZXQucP/yCTz39eK37Mlobesx8/vdd4DBwnlcZoXbtsyp8qAf4J9p02nhdEGnEjvROJzqayF7Tq+k4jKDp2orMUrGgwtnuGi7jJWu62WQqlL4v840KJfASHe2/DnvFuK0FVnw==",
         "06b61a240c53cc56177f5e54": "BKDYYQzVbTTvhz3zb/03cSUMJuVyruNSF+4fG30+az+CPgPBHDQwQaLIYdsWbp52Rf7i/qA8wkJnaGzZOa9A437buXGLes/I3fjYHm73JuNMGfkbjnV2ZClgwDW7b9Vv1DaYsexg9mlcnv3l9sNKHAKU/CRWIwaSBEdbfuVaC4jmVEJzvqEvcYBM0jMcIHnYMMpPqFdT1IxjBmdlNkHNM+fH0MNEb84pf0wGOT+wyObgVnDLNsyyeTf/eUWhuRZWsrAinxRcrDCs7FHNyvpBQwvk1JB4nYk+Rs02WF4km2i3oZ0raPMzwyetAUKXrE/bfZpO8QjE1IKbIgUU59I5xePK1LcHfWRMkJvYYFB8ZUI0H34VcRNCXohbWzE0muB4Wg==",
         "12c7ba78192b03a40ea45c26": "y7sBGJqMyAKqoI6gDPsMV9w+drNMUNw9EFhM5cWKEj/DoPCaCE2rU40SG0nVxx/xygIYyR15Gm1bmIGKFvS5XwEsQaguXtsFVM1q0/LgHlf71bHqpuX8YPWuYR8O8S7SMGGbjYDENsmck0zVjhjkPu+iG9750hj0iIqa/qvYkRG7URTlvRma/KfVGPGtHWg9VuMOCQwlaMBCFO4tkIfbvfXw1CCTzfld1B6HVBXof7/RmnCNaP34VYAhyufQTncejtsNISHPO88WHDTKpA==",
         "148716636106a5659beaf605": "qtAlhlouk/HMNjeM5pl4LVfiJuHRO/b7oexS8c2r4b6/Ua2iJDEFB+yypBF2IbHc2/iRsTDlP5g1lJ9zzGyY0/ezrSWNBKGGJXF1L7W3e90g2V65LmgyppJCNnDyb9aALtDngIjxcR9wVb8anczJ/psDMEt1kvAhOvR5jjQYZzOYaG8tAf9HaGr89zAvoC+lHZzRsD9Yeol09WLtj/QlAG6gca0U+e4iQvrKML9QEmb/EyRhaZZe7WJmX3oWnOp0rnKI7o5iinguHvi3HuhxJcE2Ux5/Sc0wQMzQdukzueYj0nhvS9njr7gqS/yB4trRK7OazhvaHgwlLbuxPQA3703tNGCTCsmQyKD3uSuWaGhIdILQUsVuO9O920ltQ/82AQ==",
         "dee90faa178954adf9941091": "aZazvyAd1hfZs7KxXBASJLhOU2TZfWAmWCBM0gEyO9AHrD4yrnRknwb3PYtsiWkPYjM1GBvwazHi8un+JELwFYY1gAIurpmAfzvCmy56E4jhgHSovQRejuoE5ojj1dLvhEB0BqYbR9Y9H62zq+gySxx/VKadW6tdVrUEfzVnvpZs6zwP6ke32jELGQT3QRg7t1k8sXRvY+hEwQjoUt8VRAVh9wI6ru86wbgQEDLirUomt7T72mYfY1SFcoq0vZyOMPga24LIw7+txks8JMotKide8grD8O5fTgbNfnTzriGMiCkzipTuYYkaXKujs/JGWWGCjoW9GjEP3qCJMh+46BEq0G9sctvjqORbtGGc3PycpCDilvy+O/sPET07rhCQEQ=="
        }
       },
       {
        "who": "☂️ 雨傘廣告",
        "need": "要給<b>爸媽</b>看，想讓人覺得<b>安心、溫暖</b>。",
        "s": "447d016916bdfbd0",
        "outcomes": {
         "13ee220c5eff337f2ebd195d": "MtOXB4Ea4dGPe1Vfcbx331Oln0/g07LxzXXOZ3kFy9gDubehUieGfFmwr5orKZMl7HuSXCFSUWl+bjf0w3UqYruUrTaPoOLNNKb0TzyQIaman5r+BGrZ/z7XIMrTWPe4Qnwl3ECei/o2cwyuQ1buBQCBsgEwLo8mH+tmgKhM+CBPMvWYk4egUT9SUXYHS3zKQCT8Nx+pg6sdH2mU05ByEF+W2ouZbW7PXVeT+glhow==",
         "325331f4c03cfd796dfb2b06": "azt95D8eDziB0IEMg8iMk+MiVtBK3V9S9VniQVJafU84y7clmJpxX2Aq71x7SNGerC7pm6bHvpidtkhMKWZrIVTx8LxVGxVA565njihrVnSXzszLUwYqM3c69s8M59MONLz/5VUMelpRIMpghL+y6JvOuRVD7KD7i0mAlPTGVdSlZL01Q+WEir45duftD9y6IburpOfF1W5aif/YiHNsK62x4slDeOs2tN5Pv8kvYr9MZxi5TkHhjh9PA4oT5JAIlULoEDe6IASaGYMwsPh5p88WLnH8V3VYxxGdH2gsX5Q324E0hQ==",
         "86a554f57828c638f1050254": "8UjIFE01V7G5xcNzxTB8q8bOu+ATqoJ5epgUZYPBseF6WUr8czZroNR1VtoODgf1ufU1/myvHpubiDzBNJGjuyw9D8tZUhmrqEfLWO2aborI0DrvdcthrQagZ58jltqR3+LsK1xFbNwT/C7T58xTMek8aV8eFQtaTIwJfDGcwKkjneWlpB6SZSSj2y1rDSA3XY+CIOuISE61wPKXdXVrgWY/GewhwHGpZvFLQZ+am5vVyTOpJW+LGYa6BffogNJxGZxxwq4M0N5T8qzpPgLQhcwqef0s1oteyxeu0ULP319mXU4KUw==",
         "d2c0b79f8545dce371fc00a7": "vkXeRKhpK7iB+SQgGy1MuXz3trBBtv3RFZtbY47FRfHZzzvYBley/yadSqmoDv9Jc1nSRfO2sVT5SQfnMOcPX9KVrwEez1c4QpS4HkS45vY3vm3f2QMgNnvohgl31AG+4QqQx+n6wJYHptGrqlXZJM7p0Qn6y5qNe+N3gPZuorQaXA==",
         "5200bdad98f4069e8b9bad28": "Pm+TDoQsnYrXPeSIcTWeu3vXIFD7ICSZ5WKQ1Hl9Puq8RKhV6ILdw8byvDwkGmIwUZBPP42n0kND4rfXweLVdaWDmbQv0TDQZtLJBbAKszauFx4XRbpKT/mBCzy766vu3UXKcQkIgQm2RTe9tFbMvU2I/L1MyYOeUxh5VLg12zfG7ZcQTh21YRLwSdmN0ByKELAQRkfkbHEZjkbW5fWauTNSLSS+DpgLHCsyXWeGvZIkyb0KRssT4A==",
         "712ceaa1765a23af9ebe1fcc": "yqwYf2M+VMIM6dx9us78WfdQKvpdH9LYZ9tc3pzjfmR/9kbY4xDPCYVw5IjQck0Pb8tbAK13HNhnXYILkBi/nnFjZkcOSfyPCWMHvYYut5clIsqPIEpjXdOvjP03Uc6bAsmhXNCCC6AXpN2PsntQqhBUbrJzJqAarKyiqwvDju+htX2PThmB1RF6YssVu5vdDCMIcdEHio1Gv3HzmrAMyT4cWyWkRXQd6TE0Jc0ttmyz7kUCeAvkVg==",
         "a4f0bfc0a6dfcbdb7976fa7b": "C6AolYGiygmU8Huo+WitVCuQFkq9qkdLQtWHNJO+H2HZL/1CQ4AYoGiR0I3vpxs3Q8NZq8VoQijq0yExCAEqXhlJjNEtUdx+kQhDMxCmRRJvxUmVqmewHuRlVpVwB0oeD6CTF0ZebB0wElR0h4KmBsoloTRdURHkD8pxVmi/ZXjPIWm1Yy2Y/JnbhL8OOQ3+WAFmyoANfJX08twoKapzMKBXz1E9CmhCTDgzsiV8Og==",
         "43631d906619d41c91020d24": "b03oZea2i/R/HnuFnkqlDvuk7O6rVZ/tXMkJ3/zIP0ZcdRDWDNVVvwIW//iHWI06MJHWwdw1hG6pX0jkAuNlH8SK9gBi2nNrWT7ukilL/d+1OVhnefJLTYknWU5EamK2N+vtU3e4Q+zc2a1rUXVFqz1gQ4KqwY16yOLLOb4V6zG1kuhH+x8Gd2m6NzxJsvOuO+9XuQV3pzLEMKFYF69+vPe2cAGyFKQItIyhfrpwNIYnQ0ofOthfnqRIGdYtEEVdkdDskKVVPQvfwwdEGUyRqw2vYU5fJZqv+ghCmj+e1GAf3x51NA==",
         "858520b473e96e7cd2b6eddf": "lRJwMAgmtUVI/vmqHXZKlX7GrCuZJ2uE10wvP7lpOW2ABbkokqI0CZ/FtdfWy/VvYIROfhPMtiVk7LpQf2fJEQz23wL+slxmDu3W1zcPB2FWnovajUhg1IYytN+4QbYdQm5pmfhiuB1BsLZGU6ldfRG5IJVpZrPBFOhmBIEaYHRa21xVRyehM2Gq5rYKA+yGbc//PHYpOsSmQTD4pb5n+UW6GhFeWqTzuCTuxuUStMracgetbKqN5sle9qJq/WeBBT+TE6n8CqgysViWD3fHBSO75cgUSURxKXJCteFTZ0ZYBVba3w==",
         "7acc71b0e3c218f2d1bca98e": "id8c8z2cELGi5MqHq1su/zpheQhvGnnDzVn0zhfrT7t6diHquLyfxM1cUOS3+rKhDp+QjFb0BOg4enmyXJtK3DOA5XdVtOevHBwjrQ6EVXqBwz+FfnWB5Plem9RbMLcDxZUu3Db8mgMitTOnR89ciTssMw==",
         "bf0696b54a8b52059a40ec17": "fJQyTNCJk3Q+fRYU8S7/hOtBfxpWTdJXntd5bNECtwUFqhrN6kWHJIHEG9Hw+cEDRvD01pmdCqXFK5kikC90XAeBNpP+kreDQmMdu7Rbysp4sop0neuLxpQHMLAHJV3haf4G7KN0iYqZPnIW2+9qc4OOSTFnXJ4e36j6I3AvJ5eRqUGfq9l1XLOOPT6lnuLeB1bIWZH91URV8M0PxdOFu4Sc6LSFtnngyQ==",
         "94f46b5294b5481e74a5e1c7": "K6cg/dCzaTa6agbPB6urBBXeASVxKK7If5h8MCyqGoQoOMw3tej4s8FuU+smTxXbGEIW4XR8hQUC8ri7F5gxwzJujCRjsR58eXXAXGcR7k5V2+sCfh9gmjx//RRj7qSM6CJuuE9HoKtFmaLKnu118OrPXisMkRtoqZo1QUKaF8vQM26TWtlJY3rrI3Jft37/usTcDiWMoI9rkqLfxFpiYeB27Jt3vSIYWQ==",
         "4d0b0f24dab66d7b054fb2ce": "OvxitnuEV7/S/tV9ALF9Wk3xxmWvvK2wQ8ZwBkuwvzF01UfxDdpOJ/QbJUJIYWuWZN1T5peC92bn3qj6NR7oBZhFj1S6Vw==",
         "64a06d1a7f689d3a4542a17c": "RZ9Z9z5+XamxTPmxIZnsl3s4RFcbBcLZV97BSoD8g6ydoKi7tcBTWBiVqhS+iaOXQoC06K1SpdrKk8FUor7m5MzFiZAyNZhTa1/BijmgScfi20fiSUFIWauVrhJvEFpJDqagXeIdi/cm5EQ/NHS9yO6cALrV+HdF0QdM9g==",
         "779a4f2868af3529ffb74af5": "pYLrE6ePkCgdELBK0wzogV/t61nWfj0oAhsgFW7hZp7m3hgc6laR3yrBu+mjmkjNlgzPYJfuMaFijC0lQvXOV63uxhu4AYtwYam6aJApRFlOHloibrYqHU4MD0rCyO2xIuHi616aWf/OFRkMSbSsRes9sdWpZKGGic448g==",
         "6482ac4fd87c77928bae7065": "FbI0ezJTe4R2FrI+oGQxZjImSwkHJbwsnJ0M1tLaNNs8W/YeaSdkUI0foRWi7RckxTUViJVZmFcv2wkOmCurDYLFuCzobZDWxS1//+XfJspPWzEEDjX04NIzMGWp8QD87i4jjYZfnCczjjiJWkFrgOqJOQ==",
         "9f84be4c46e71aa89dee6b00": "OMSdo5YxSM0rRsacTlDlwpgH50GklsFFwkk8nsy1YbPAUm+X5WemNrcVPxP8GSim9EqnvrGdgLSn+9KEtJyy7/I8wT25BfDwaTwIZB6KRv5urmobbeyzoLSbzY+zgbYM3/TD1vMGiOkb645/13DGMR/G4KeJORK9NZgn44YOM9dZyzThDfujJxColaC9sBxSkV02i9iB4PxGDIRxj68oRkPn+CbxkX7IWg==",
         "bfb4985e76c90b576b8ce096": "Qhub3SIC3cVco9knf59pd7o7087ZGHCDnrVKMPjfG77kDh1SsXvtQSUO2RmRLeaERBiu/qa9K3QFXneQfxzbsRIPk7yuEKMtOHC7eymHrKjtKSeSqlEC26lXj/JBGS0i3sgynZJ9hrW54csSH+L47leOvp09t4wsq1hUfXITLiymmLy0NOvqe6Y1rI2YG9pUpQcU3LB3oL6BvRUlyHsMNdlgVxulPIOf7A==",
         "99364d430a8cae4c736ddc77": "dFEzHiBu2c1nQe0MB1cJ6HyWMJ9uO++HbMjeZ/beJP6PpsVMo4OWh2l+v5GB6j9Pki/Fbsqp4xsbDqoqhbwD8oHJrEwNPLHb1sKckO7YlJYMGBGTEC5bMB5p8J/z1fAPaPmX2VfQOTVb4PVkBgUvkDAxJp8ri5A+xWJip2N/gHAqY97CKO9FWuHDKhH4w9q6XUqccpDzSCDXyA2/TsGOezT4Q4XG0DwugjCqjGEcUw==",
         "7951e04678662a3d1509aba4": "Ly46OxG0EggSlYOdScj8nrZDgp+FFuf7Tax6RFOrChwcoSuu4lPoxdRe/1pNiv+a9BTY6djhKEI16r3qU/2HQoTlMZ8QZzSgiYzLYOZW9IYG91npDSMeWtlVRMA2CwHU6FzVRPFznZelrlgZresyFR9YvoVjEa265PSzqNpS2yi2V2pO28WVSp22AYUumgFHnFwq95vT5gmtERyQZr4Mf0P0t+EmdvHj/RHwyDBdIodPg4n6j/HbihasVWMwfVSe0EvQ6IWVEDSgB8BEgIzoHzqKTvwmmWgFEK9QUFhiLcjSYokCVA==",
         "10ab608b540c05556501b356": "AgEexDytyIoJ81mgMDO5D43b+2ZUiFZ5gyf/3CcAg1Ynz9f+JWGuM8IJrHk/EEmDyHawE1MewufO1E9EJjq7VnIHW4BrcGuODf1MrSx7e3ffiLlL04vn9pmHuoXEc9hIJo89+itE3omrNJ624BCkG10ruIcRTOJNkPzAjcLqUvb/FVCn5TRuzYMPn3d09+xZUIeB01vPWuANLAIsE5+TT1xFrf/mcM0MaxbQ+Q+6UH7O1RDYWMXQOA+H0BL9/gpkQgLln3ap1XkC2XxS+myfH9sGD7quLoOHsNoVCWrMAMyKxB47Tg==",
         "8e9fa5720a767ab8c40e304a": "ID48Qa4ufiwRtospuMA6S8imVrn5s/xIohaxlyjDxJDYMxB+9aKeWCX6bruP2mDbN6c/OeaO1BHr4iheDkflznD66wjtMkqXXSms3ZiKFX4e6Kis3L94adIDvDKqM03f1jPl5Pr6EQw+5muMENI/664pjsnuIApz9jEBIgckB70nsw==",
         "84b947889c411636b2e4551f": "CRAH8iFs+BrcgJWsQ4d4n/zC095LVInDuuh9GqEWSeNRwSsOtv+5HZZo/Qxr/JJ2nI87Ma3Ph1DkOg1I6ZzV3xnMPyPheup8elOx1Ji7xgYFcwUd4mIztP1xeCh5DbuJHw9SjjQFq46ijUWnIWolWCtWtNx0fbFE9wXYT97K6w+if69z/QpfIyXnKBYOrBT571rmkCOnQn+fedZdMfM0oP2m+MPylb4zVnx0/ekLcwN5d2mJ/cZ2dQ==",
         "813182c49c431e04ed1660fe": "RVqV5WLgm/Cd5pxNLTDqplWT195JuX+PP5XtCsFpoa8uHpUO4OtCxOXLW/GmNj5Y5u9bJD9387ZA1Nx8KqutPUhVFScFt5T99OVzBugDHhNBEojuRYbhMqsk9otZBJjXtPPRdWggfacFmsQtXLC/ueIBwIbJQcM8vN2z3MrKR2yVXzl9vnENiTCl3Tex6bh+xLmk34C9qBUU4lEaXBLqSGLAeDtQu3sQRtzOSkZgPpYq6LHCVeiJWA==",
         "e83ec73dab9c64027428a2c1": "zoNcRLKOfR1tYIswxk/NGVEPJ/e9Isa1wTZbdxO1OgN7MErLVtidyKjgMFRGyNzy/pEYScDiizcUhipYb4KIbv4v70QHjFSeV/SPo7Uy1mlDtYzUo5UzP+BJFU5hQeDJ1NJXq15GMIGDy2LLzmnMaQEnt8xf5o9E+Rxnz923y48ySt25OL34VsNNJpH6b8ZBDSPHL3QC2k0hmm+1h1jHgOD+/l5f2CfF7v6bZRdFTQ==",
         "7b08e09064f04479b28ea548": "ZQFFGAMDcNMaKNo2hbTPe5bh71PT+hRW9ZZXXhHoQFFXojzqZ1JL8NiMjE4yQ0yFcXmOPpAc1l8TUXScR+lwqAciDITj/S7TzwBqftG37EYtx0p4rOxPiU2ij3wEGi+0V471xc7TZwziK3Lqp1EDqQ23XOaDNhTBno8bwEq0zlUUN0gFQ8cIoqfFbnMn6Opo2rk68sZOLfaXOKi+6AyntzBvs8rQtu5MuEV1rNWfS9kDfbVrCpAXOBA/FGuhHq4yRt9o1UDqzrVTMJ1dYRHmhmrJqFDL34eHg/NaXCtQkGEjPvjMsA==",
         "f2198c06da8f9ceddcdbd223": "UWv/UQrJD9QCAqZg9X7ukvICwhiiZGRi9AbM78qRYChaoV04uyTgKdbtdAq7+KI8bI2d7K2nGfd7QUKG7sfe4qNjGVuSZFvRlIwz4zV1/WomNSoLjKqFXa0L4w/WXEUYVrDfqQJSAxPTt8n4jzmE8eKbLQMT1yI3mpw3aXwr9SE4nyTcs+1IpVo7jY0vk+8ZNFWdv5hrdbX4wCdqUKTNlErR8WbY0V6nm/inC4cob3jIliHxfnn2gjOHurdEaE5h7btDGPlJnHtnx3awqKCtJ0N2v+Qi65QOlwZgK9KGrjsJsgilkw==",
         "158d632ad9457e4f45205283": "9K8KlfinwNZZcj/ntPynf7ypHzJ75QIXGg56M4rQi+/7EIDEStxlWZdKSuEsAXVXAXyhMqx56r/v3vLchLM5DSBG+6zmDPtzR0khQrmPwWJ9AN3j4w2XgXFWoCX/bJfgcfmDOaI1NmJrpdrXk5jx2Y3kmYIekn57d3mQj1jCShKD9PXsobisl2FRMe+E97//rs40v0VoICNUrA==",
         "b0f155a24ad7cf395aa10738": "SCh77JFEqnzMu852hn/p2iLkBxbglYLA8ucV5C7vEXZqA7Xqac5sKJufEsopVe83oaiYz2MfpZlzTRF3MdyYsFewLwk2Pt962CX9Ja/6LvQr0Z4LXQlO1NCDEOnCgBwwZvIbUcesd4pKZR/C2jkWR8ecgG+3afW+pk1CdPRw0dLidVReC8CXdc27GGoPrAqshW87sKg5KJamx+u1hah/M8BWoeTr20e73u/XMcLZOAlCsT+wHvMYvMwkoh/nVD6j3nuKrBqx3fMwhcXGcJB3nQ==",
         "56d5643dc72a23762a46e7aa": "VSZglzv/Sk2fKpieZy6QQrL0DUFGefrQLaaekk1rJsL05TEaHJHcNjTcxf0GdURa7Na2WXB9ZoBVcRmfUiaYX0on3jGXXG3CS/IiA8M90UywcREbT0pOMS3FLY8BLwqPpCJ5lxU08XCbaSu71F4rnr3yFb/yOPpKpGCy3dcvz8msoTeBMHfiD3gC4NfMy9QRfcwws1rQQ3kKEEiKv5KRHBVTvIhAvrmjDmOmdIpwX6GKL8pVzuxFs4Z3rDG4t/ns9oOHYSXVZNIGhhoTyZJBpA==",
         "d4496277af930a82d0c2d9b6": "y1CMoKWd8IPqWCms4QDmI9I3r6N0EgYNo0uXxQHvy4+1Q5P4tYQ5ftpDVrj6iywnL0TUo12jRXjWb28u1dfgBAnpkkHYKx1ChD6d/Vub86+c9YIRLrK63YgFYpdvvLmMKh7Ue33yQg7oehPqYA==",
         "59bee21e9c24fc74df34275d": "E4ZAOlR98tQpu1fg/7YKMwYeUAj9WsBZOSWUE0CfeW10RhPjTkS3NU2k9CcIqxwbKjEPziXmdw43BIwmFSLRS6HB4Moek58YPe4BcOuf9QzADwRgVryExm2pwA4jd18gSVzTfoiSbCKBLTvTW2xoFx16/8slYTeQP3rWy45l3Y2Pi80KJ58r+pwOdsUXNMZ/Vw/9O6lPimNq/4TBGdUXgZpgHA==",
         "228c190597034bdbf3f5dbbc": "dGG4T9sH6yExGmSbgITI3+iTBzh2U7r0RK3tdWWonmBl25267gz9WMV/JaO9zheGFgvsrFo7sT+OKsGWKE3iFX3FYguRlYEQKtJD3CXdl9HXvoVREWJ4jqqxR5AGHluxiebgb690XIFn4a2I89RwACDGsVVauNng9n+jSgZz9xjvMWseU+3Fyp3XK2qO66wh5OB/tsiMLgK+vmgPbp3+0vtvrQ==",
         "f7730ce4b07dba040d98a1ce": "J9kfEKx17ShxD37P7L6T6kOqffvWYvra64m4yp4AV1p4XX2qlIRZ9K9u2kkZd/tupARWqp85fmyighLhbzyb5ymQCvFFaTOVZEkCH/OIUTePBq6Ldsoaa+18zH3ZYb1lJHC0ZoO0+BEisvrmbL7djmEAH0S5ewPn7QMRi/KWCdnn0u/i2ntIdhmWxEc1ycHU4w8lUvkkVFZ4VQ==",
         "02cb15fe0c306c5a22d1cc02": "HXk+CCz3fiOP7ZeG8/xlrB399fKRfTPQVD/k2S1EnS0jfgfft3qMpDL/IQjKql+qFC/wt3CUpgt4zf34/8HqqDBmG6yrNzyObKUmEl5xW1E1+73huVvEKW3jYj29GsZ6vlfqI8mfRh65+bIl79HCBnworEQq114L1+UY0cHx/e5nAzpSce8lg63yxMsmDz1slPqM8VT4imz17HpCeW77J3czvMTP3h/g0PAv4I3XO8jCs6Elugc9+LSnT05I2V75PEZlsTtXL1J5vWdyvhW70w==",
         "d7128f35fb4db19ebef5f6da": "1YOymTOqyqpuFYMb8NDoD27d9G6uFliMnx8ms+fmmQ/R9WiHIiIwWks5/YlLucfnzxLhxQnFDVisDXJdEeT6RoJ6mnguCHSPvLnfHgKjXpI/9hKFlpWlSXKhR+h1TBVujC06FWyudvvd6kB6Vo5cl/UbhkZjkwAtia0oBn0Jvb1EYtIGtbP47M/evRLgq6g8mlqHfWfPcJR49gKJQF2CqwD3lYgzj0ZnNMy+8J7ekpAJJaJO+GQrntCdZCZBHLztXhVFGP3fQ1vYaRMa9f5W5A==",
         "fbe5da25f522ae6e3bf3d951": "pzEhzrRt3fCVnhHznbf6V73amxfYVCU6CGioWym1frTrMaELso/zphME/BhAVcqQwzm6OBd+iFBEgH/vsVwUKUqqE1e9SxFUbiJeD6eUCdK+eWV7TzUNzoSXD+n31g==",
         "df301fbbe7e56113769482a5": "gQpT/R7LWulJO6AfT/0XnWUbxYnxI1dz5zs3vlDn+gDr6NEgrgHdbuMjMH7xsTN+y1V0Kjg2DC26hahWepmxVE4hsFqh6/jFHoo9haIi7oj1ctGTjaZbaBPL4y5P61Zz3HTyXGMTZuuo5OO64uHnYXu02sDtTP2j7X0clLeua0izmFNwS0SYaoaXhmNdb8iizdLc1Q==",
         "9654f891b0a24719a65e7c01": "xf1TbhVEtyx2Sfa7ZHsU77R9wc2AGIShOqUo5srTtbKl1NkqC0XYGhobyE0a1xbv2gwzq9OrpRVm/HRcsmT1UQMDqqUoP5A31WpIVwDDWOqxb942UCA78RJROxVwnTDllhz/GQkLJcqcNqtzF3Ev4DbFwyahzdJ4KOyB+WlMzisejtgKKuFRYkztKB8IfjGK+uTWwQ==",
         "1c16a4a8ebbba09e1364a2ba": "u3ock7Wxm+1Hfb2uB2sTTbIaddCW+ILNNnO1M8ZBT5w5+1g5Gcxq+Yi8Vu4C7Efzg90qXnjgO4USMaH4GK2/NDNnYng9uux3nJSHrtKLBkdc68XXYQTN24tTViXgF76Ayezbk6yWv+bwDERNIHl07dHcZtj32vSHYCP4Fm+p3eDZFaAOSF9/h2/pG9SgjxXjvExlsLfmNBS8MG5XOFRvv/12oUjQA3fTECi2P00jJdnVbPkSqIZRU8dPs3FovxsPYoQ=",
         "2dc463324c6be6348d75c308": "OckzvNnkdV3J1RTJNGRvISg2d5uIr5zeEZtSoNXmq+V48poLxjON6nGDmX5t430Hoh5ZDgvqiEVrHr7l9l60kkHUkreeX6y2uMU5UhqIk4FFzvjrnyRiMMnHNKdVKFfwBdZzpqT2tg==",
         "4a758fb4e11c86714344d6fe": "WF7MEyzSSIHvX5HqgQIF4Sg3KN8CjKHYNUMQ3L0LHeaMxAyr1q98IJiQVtnP9wAVTOlV7uswticzVmnRQSt0kaQY4ceIwW17vCWff7SYHFYyYJ34c4olzvweXL9tAmRNwmZef0Uj3Q==",
         "8550981cb93e5d7a9ba3da33": "WoIcz8qZv+iE4erdm7EONIlHUFZkX9t7PykHlKofLJQeNzq8MKdRclq9lPhBNfhR9o7ztXRTF+87rc1n+bUJ/0mIpUX8alcYJ9sRnZeV+eQOBm8wMZKhIweeBm5w2g==",
         "236e9bb285c6ccd20d40d167": "c60hNWCYqqERoKtExcKM1OnsDv+hV3NA8RWnLJ6F6TeXtLn6kfp2uNpx/w/OISwwgESuiRoBAKc9Q4KCenOorFomngPl5Iqp1ZyamrDTodp8s05uEYwL9atlFdYHJCQQodGcKqQQB6gHwLUVM9J+wnbGajZ3l07MAlYnOGTypBP4c4aQ/rZ1pUqd2PFBGHZLmgaFEw==",
         "cbc9ab22da25ae21c6e8cabc": "FsKcj8Eoz58ynsz1n9ZkcRTydTKk6PWj5vzoIORIPyFYmxAmm6ND7IxR6lRkFJkR6MlgZAaLfE/YaELAuTp+3w2feBPiva+pTqYogmwQb6QcZiPE1OKgBR+MFhCAi6aWZPvCScxR6fz8Ozo8v4rfVwQW2J8bKSaFZ0M+8waGoDwgOr7wjqysBeAmhHJB/EEEjo78rQ==",
         "76cd48f67794f01428ef9584": "InUVUbVpzRlhGc9ZE03GHI4LRCadwCAnc6JuQ4RkkweJPZqV41BypDGUIiDaYDWQcUC5TCwCjXnLmcxpaVC8fhUzEHcR7WLwugYyxfRWjKxUojkWt2CS0nkktygswr1hOjUWrs7yn8nvudLGXLEp2/ywk3+shkpFNqUmXO7S/AUJsIJvRnPENbHXXTxPoBIY0zixyaBBwmUG7w==",
         "acfecb1e89c8982970720a93": "DFAA8BEYWQF77X74WZwAGdy2Gcffh7XWJnb9HiqFFqCvDwATx8A4lo1FBrX1qHnaAPA8bDUlu8soDKJHKg1TLiR8L2SUJSNND/0HHpybp4qbHhvy3BlHFnvveaUXcCYcUI3IOzR0jWMSCGk+JyO476rWQAnKLl6Kl7rA8JefC3xJ9kFJrfhzpO+0PN3VEpxFCvcegNcYPuRiAMei0a6CM32rvOsLaxmnbN2Lphp1AUUHOCKjwqsoDEV0CzIfItmBDGR4bUE/kV4EHOraaAwdtg==",
         "720c9a95b538af7fe3593c71": "C6tqlJwQc9Ra/RsN3z0T0EyHHO7/8fz4TNYsqMy1nuKocpCdMUXGFRNgsymIeyC3HearulQbQJRVTKSdfDMPc0l9sFFmjJ+gzgNHh7fPL76vUtZgUL+WEo7WpTmdFRuz5xvMMkDS7utTcx41sSqCx5XRFThSxnk5tMp7Oss62WZt13GMcs73OGEWneNti4cfkr+P4jlro4UCgn/AmtMiXgEb1oNJ6BrT2vBR2z6dQFImyanDv6oYeFcQ42yyXHK3Lbf6XX6x5aoIXyig+Nc1hg==",
         "76f6ca9674a7d65219fa9f55": "BP9X2qgZSC9dPjjhSCmOKUpz2TKHCRKRslUxLkHhPlRLWMYi4/2WN4vG2Bnw7VZlz3xrXmJ41tCsV3wedjthU6YJm0jXNyXCcqG3sK8ivxYCcsMpYI9ReT3Kyf+xVrVav4KV8TrkHsaWUSecew==",
         "ce2ff32bd51a0c54191632c5": "SZMJq2UpmD4WZl4/XDFaPapytJTEFm6rZCEJMxYa8MjURQJq12b7C3JMhVyc7faq5HObmrtmnI6Ta+UZGMdV4XArpHz1nBKU7lBj4OEmv2YVv4VwR6O5B1vVHh27zsa9vT3o2AI9lIXc4R68gzMz1JBQI6mu5dmSjwkMIc+iN4sayM0LmW6zGaQW2jVv8T5Uj6qpBNXsAQNfW2fYR9eccb2adA==",
         "726890e3a8e19a77ee0e3381": "byMDkNyU2R6LmCE0TUozfdrzHr/LDnuY5/eP5Z03cQ2QMzrSNqnj52ovCfLplEadgvW2d/7Da/x2nRKW3ek7jSYdz2LEresc6nvd9gttz4m8G/VnwZ1VSKwDwb7wHzbVMYIgtIwBRK68jB00dNA0vOUWWD4f85h9mW/P4hMVUi299uIgZsRnZ9IK/Rbw5z0Rz8q7yIfR6fnXWf9Z9BVtTreL+Q==",
         "27291657d00c401a48d734e7": "eNSz6Wpp6yHmn64ZLoMRW2N+K+DM07jPk4dY+dV5Q1iGibeIHn9QBKH1ZAdkoJEnztl447j8dnY3LbYiTVcnshbY5tGgfZdSCHoFuI7ZFo+RM4Igt9UcjDauqMWyIPoS55cGNimmL7nJehQWGFEYOkr17uVR3VPFg7bwSnKEDxsKbebetsyvzhUwgESYPzgA4FWwkrOtfttwyQ==",
         "6efdabc09ee3f16ba5f0bc42": "aNb+h0rxQo+wCL/z7t8MSSnbHyEERPnqlshg+ahyfm7Ds88prNMUItXJF+zn7Je4Xlo2LIc67fQQSnbYsSH8ytrVNElsaPf1r7RrRL71eR0s8U8ocd0ZWyrjvzgsPSiWDXrxOb01UyLKNHXypPPlmL/sGgLk9ILHn85SryElv5+8nmWgedxTT1pWssS7G1Md4rCbLq1jLQm6OGQx+KXOEnhczGmNBOS3DZGOwB+Z6AEqtQ+u9Gg9tlbqZO4GQrJ+0lhAvgZZw1EzOMNCLyG/7w==",
         "88acb2ca80dfba4f7478722c": "7YlRdUmha63ImzeAAiHBDcWgJzD36c0TEqmIcF4wsqIu3+FaTIMMB3+3Dh1hdyyUZV632Tc9M4GPLqWVKpsHHlF2KG/WEW7GgQCjP/zXHnf/ZqVXhcXf1jY0Kt414QSyedrLkt/mqrCJIYbQvawzHquKwrU1UOljkCg5yoqcr03lWWiWkxTioj9vRO7qojzh4KlguoQZzFfHmRyIQyDLVtUyF98M94kRgaDb1r7+rXcSI3K0UyH52JN4ww2L9QMgs46slMIAVnDYvBi6odLEQw==",
         "fa37aa8ba7bb9d36c72a62f1": "FoeL6Jq06hK+4VC+9qb6IB3vTiLAOO4XeQ0sED0V3i2SxStIwD+DjSOGL1llaoDorEM+4plUSDpMXeBPL+zC8ClGys+NX08NSBVnovL9ovhRGV76J5qRvkhqCKDtRV6VCMg5nM1/WTLL+uFRJ5I6Fy5IV9yBrm/BcLQG5o81ZqfDvFx/iJ49CBKumTAB9Hmm1TwIspykG+uDV9uOL0/9KZPMaB94EmnGiunRnk33jA==",
         "e7393383a5333c31a1ed7b28": "pHtmW5tDbxAJXZa0pVDYMOk/iqDtyX+EPNmXAjIlueg5srLiBqTnp1qnTeDip1nhoLd+1LrEu5+VFpP1EcLFjeUpc/Lz7WDyvdb0/S7FkJ0hkB8Y3M/1L/MhpDYN4NdEDafPLyqor4cdkdUixr4uLFw55mHmY9a9pUrgsdQbIKFDBBdZob7R3flUX4sVWGs/qsUUh3YGBgrK6/SmtjHRMqGsjDv2ApyaImZ0gqDk+MOdJloMG5K54UN6bAfLN/5hntjBj/rHjSYagqT4topY0kyxEnQHQASkcV71BWbczK548eKUgA==",
         "b20721886ae56d18942b6c66": "RosWV6jPLOz+2rXdZaDwjtIhY9EaNZRkJldLHwJ4cBM8ehDK+A63baMXQlJoBa3jv+uwvbVs7gM6prDHaiUxdAFmjIilbtn4OzOo6VtbTJ+0q8jbSdO7dHuDK4Oyks1St8AszR4BnkmUaPJcqUChthy62pkoDDOqBwPLT+t6qS6aHA873QQl6khzLLsKrmErRAVhO/4Ie658lQ0aOGdiW1766wLe9TYQDavvN/cn7sdgvlH8b2AEc0TbBtCBQlmCm0xomViG8s7K8oOAQlfVey7KL5zmku/wC90TIuXnCYCEPVvV5g==",
         "a531223be816fd9a57d59d9b": "4ma9e+yH6MCn0Q+N0jvndA0Ydu2tARHodNnGYvUMsMYPDNaHzJXz5oqP4+Vo5qr3FveWFdoCmJONVke/J7v8iKHbsAT2wcAoc+jJ/6ug59MKBh5LpSzKqwfVMndZp3RAwxeLWHjk1jpp7f+VETJMbIboHNFK6AniE4crI3mypWoshQ==",
         "b5196d95f8bc6c7cd7190483": "VpwaEFR9+RbzWsG87Su8orib11ZQQolmVuAwrKd1VYPn795wnyfxxt/9jPIg06LqRKweBDibfOoDA1Txj2pfoeH/B+zsScxLPSdHJ7hIJDn43oz4MZUaHNZLiu0E3IOqwkpOFZCGW3fUyaLzrTA//kc7PukwITKtZiN7UJnJS1Ib3OVOBijQwKEHqe89O/OZ8BWvqf8s1E7A33vDPtsl15OJoEUyp9uOYRyJkUCdmt8IaVsv4nkN0g==",
         "93cc80e24a5d3f243685cc12": "P2/miPZbn4O7T/qLd2u6pXPr3qWvDy3dQLt2bkvKfiZYgP5qjenMaYTAQskCWvR/T+GIccB3SClm0JoppDnrQHhUC8BDs/4peZDlLbZ2wl0IWFTAOy+Hf1aGkgUHcbQP15TOj33rIUtWudr/TWaOIrSM8jWmhBgDk6gwCwwJk3RHEhvNBxkZlo6gyd7uWnqVJGXMP+59qwk9/oVNaFqKArTFblD4PJef8tauEWZ0gckApoLRbcWv5w==",
         "e93bb7286f65b2e76f96a105": "p5LnWjPXie4KfY0spCyTWyHPTMtTXOb/JE4SlJSXar1pNsf5+xbIIYgNhGIWgWvTwlItqKW1dzSATyUxEdADF86lvr4gNWCXHZY602n3CPeNOZo5RONxiSIu34EdDY26yoZJTGbpvTB00P98Q44iCWbP/cjqDf6mubD3ley70Hn6mrldaHaEzsR9Ao5my0IWTAmmYMlsY0zC0s4ucphQ1za4VUakV+idGNG/HcKkXQ==",
         "fbdd9235b64da4d1997d7e98": "Fjfr8QsBvV4iQJrWtMd6GEcRQ8V489KpXsBUYC4TTLbBfIEQj0HWU0aMuZ3s9T2bdVvSSVwukl2k0j/KM8+MimCcV5PtjtiFCqAMs3bQ337HixajICZ2iaE1OslNWyjW73Pnoh9xGv7TnWpBhNthmsuqIWfEx79v88PM8lUskixbHJ1UCV9YpKScnkBImhdnEr6mgUl44L7qkV0vZOJS8FEzFqhOeSC/uRJGUV+yEt5P886DRIAmftoglqmWVsyEMt9WcB1yjmixid7NzXvlJQF/1W0hP5kUamORWFWsn4g711Lf5Q==",
         "59d8a887347ecef005dc73e5": "bDdmUXQl3Rn0Aj48JXU0awjyXuugrxOEu6afvAY0jQNvWy1pzKGJ62seY8tmB03bVkFM/sZp+ETGHeOFZ/tikiW6Cr7z4RB7zp53D/IiBIv4laK64vHqUZl96KQnal0Me+Lo/cpWZMW0mKLZoeSgmI9BVKeAABH1Nemq/vLBNfhBcsZVQslbi8uZtru7rINnVOMpkMzLFIHeUj8tn5+mmyYdEnMsMPlACM6c/wWUC1Ak4W08OED08ZYR0n+BDXCQ/41f9j+q6xUfu8fP5v4wOlsNB+xo/MqkXBj4jW8Vcawijm0Cxw==",
         "5dc3ed84fe29f290e8377442": "ivhxWfnWlHzgVV/551G3gNpF55AG2/KxJNH3wBtGL4K4gJML/pI/N+Yr2JXcmkrGAvWeyFv47FEbwUSefVs60svcIbmieE1O4kJDJTdNN8uEKpTX9rY7nik3sHg8M3bNTcB7ek80UdfSIuzPUMp0r5hpow==",
         "ea3fd6bcdb049ec2442a3084": "oAd5XtfzbnFRb3Jx4DFPmev1z0A4bWyQNVAxODNYg4cj/16NKnSAeNzUIVk1eguKAqpQ6/uYXwzsMvdScpzPCloxuttX1eTUdlf58WuADfuAuYELDc1/zYbQjmp907E7dcfQX3+9uKFcgE4bKqOb/FxXllE/rxiCEu5hChk7UHL2pKyBNyBLZPnVcDCXy4IgUvzUBDkhMQgQ9DQdJnyleiUs0lpd7war+g==",
         "050096c66e23bfade3733bb4": "ehZprCZxUss6k9F/GIN5L+iQ0B5tJAdPgxty7SjKhmxXyxoFlbAod/6GwXylvBCZ3GAxe5bU1Tdwr4848xM2KxL7T+A7+ahoPEpaWpyaamhPkq9aBV2K0JtLnVgDxaMXH7F2cg/pO5+urWRl4LTAStJDtbLQm+EOuN1LW6yg4zocrDnETJyNU9fUhvmb6bGTNY8nNAU29jLZv+2fqNXEqmaq1/JG5BEZfg==",
         "4a4011e46950c951a943e3de": "nPZj8jxg9k0TUrsUR8SYg8y/66ioNnzXESmQNLayRtbcm84P5IGcrderidaA45+wEtCarF9vmE3AMAuDmaCBKhDueLFtIA==",
         "5436c4aaa7f6c49bc83a1f93": "xd9PD03e9yXj7OVVeUxQypyLy7wxCZBTkUyoQvJveivArj4mpWYLBFUsObbZwSm48RHEHuqShtIC5Nm5OWncuCpyWyPKLVHNfRVlt5sIj3lfMr/8ps9yQuay2Mn7T02HthYy85oJZVFj9+qklcqQumPtUFXzcUViUVshHw==",
         "8e167555fb4752bf6eb11f6b": "vbUbfGw6tEkjdY2YtQrhJNGHwGHgzEG0l+y3SC1TPmFba130ocUNrtyTDukPHinPV7PQ+oDdX7jOg6uAmyIh6+JLHoBU/lBIYlzPqtZtmR55DTyJck2u9tHAq1pP8nnSb+BUNzmCfPxWXd6XUMZj6VPlPebQFyB5wsIzZw==",
         "780341a3d390e20a3b18c43c": "N333bntoVkvTfzDt6d9mZw8zN/Dhso3K30mCcoLvB3DFsE3IgybLzxWy6xm9HDSrs7p9ZJOl+hB4rLfwXCZBsOWwDVrt4vY2bNRyJamxRtg1f0f/VopAEZz0Vk6im4liIe8t+5n5hMY0No8C1cCmjXDE+Q==",
         "268633c534301d7cafa7f827": "m/wTU6+n8I95L2eE/tuBDDltnIxsmgLplVa4n8cLodszVEfGaiqBdCvKyfixRpYXZWAD7PY86W0HxuSoFG/fp7EdryvcB2MdNfwhGKD2jAJTGejKST7tr6hUMo7S+5kQ5Ttf6tajbGh0U5WtcVKzErE7ZWr350A3RUjjbs/M2Wb00yotlPiHjfcZjrxe5cDTtp6nKbrwNNauXbeOKwsxjOqMecZcBLRDVg==",
         "3b80bfa0ce30db69db9cd149": "g9fXYsh5ZPOzXCoksDW3gZPGt03z+7OFMjlZ2cEhJ8MmKDf7BOt/8bNiy82pPjyh7c9a/Jt/FGXPxPeL6J4ZLlrY/8RyPfjZxny+WBvlUAh5QMcCxYHUPNC7gdx0hBm9RsyxHsAsz3jI3El7vBoUOdkaw8t5dvIauw9vVUJomtgX+LCOm9g2i4xVTa0iZDllPh3ttzE6VR/aoKxCcpUdobcSySqOP7EOGA==",
         "cc74b048e601432276a1d894": "0zZBj75q8Xn5PtXZYLE3TBy5WV99TDAXOATrzsIY3bd8TDEsMeusmHo/+BoJJlX7jcEhNF8A9sH7+JErAfvnSse84YXri5eGlFpp+ycAeglsf6qM01DzEYrDLFfswKS8a/3K+CQbqVrCqUUtpfUD+iHqZOvYCCBAg+GjEa/3oZIKqxseOzstNNgLzqoeIATUhe4p3KU7Vbqza9OTxEWMxNXYVu4ubfUlOzHeWlf6rg==",
         "1cf8c5854b4be4d71b76a75e": "NWdFst/EEDDLfco7Xe+9ghxGKRoirysPjf3YfwgpscwuCiWH6G604+NJWF9mm/VOl5N9ssudfHq5GmBLHxVS5etp6zJGbVO7BklUKv1ynrt5gowjDsa+XieX7mk4+hgbHOIINLF4uTFyBKzFyxv6YGL3MLYj+g0vl0MnTKFhEdZ9u4OtocObiBEyJsNvemO2dYYlpxAycdUiSyAeHQTXQKjvET7ZBQWeEtkUF8X4RsYkNNI5MH9u9ZR8Aqy5o3uitVx7kTJizLjK0Feb0timfGrUWVWe3cEOLFbG1QCGLFZBKTd46A==",
         "b21fec52ffc5f0c6cb4b9333": "Jc56MH9rob7tRYeNHRVxNKBvAyB2QYOs0iFVooVhsd7wxoNHAe4VC2XZWX+laob5FR0dkToSBjgPQ1STlgidZhiaXj5NAdmshHgonKGwjy6j5puNDuZFv4bEVyGZCLf2T9ue9a0lSLFP8HvRIj/aqvlzJRCj1dW1ydUNv5YId++29q20ptFDkLkBWJIBaud5u22X2UciwxxuYP3TPrXoJ631igMg5ArbCXgnasJL20SbJQBeuxubS5k4bPQgPQFvXR1qKRmiIYJIork5dOjlvwg1CLvD3LRHZZQdaaXUS7HBiHhX6w==",
         "fa3e01b0c7524714ed4c5c97": "BN9/QGdFKOvUUDcEZjOpRFuuc3/XYDnZv7CqlU3PN8hLpDrRa2z7qUXVmPG3t5dopzT9F8A/bPHdffO6UJ1mDEftXOsqBBWWlv8nrXIC3qT11j/8sL5dbzu9doqWB8JZPDMWWDsfSUduqGebphv0tqqEC27YixVdXExsfoSs+imJpA==",
         "11df3818de10616556316caf": "M4q0ztIJxddyp47QtUf94DImZ/HIASJ1ZV5p4S/yBF8p383/DBMFlzt+KQAMqnBVkZcC7wkCimyXqS0f+zmcZ0HapYaUo2RoHcxH1OoSMuHPhI0fNqdoaGLb7l10dAM3KT4HwZl7Y1xxTDpVdSvEcmarI+zSmSo4fR6Bu4ClScVbzU1UiYWDElHcBa0ElYux/rtPb8I6/yQFHV70ODwkTBZmi7VED4xWu3X8C3vi5/70MVHabCJ7nA==",
         "9d809eda72b53dd3658e6bb2": "Tixthc6LGnTGadVX+jAzpbcgk7BNoLyl80+iLvrvDSPpFwqJjw3OujKPW7UMD5XP8Qn4F8C7TxyZiVCKQGKIXPzzvFCzmxsJWHr+C2Tv55RUCbx/rharsOp97BViuMxsaDZMUk2WcBK1+2Uj7HPImgim5LEnW/UWD8fL3YxKP1XTu6ePDZJzhgG5pKtFIEgwSffM8r1CDibjJMTXCEqmkP3dINIBeFV8ZZ/QOXW03dplecVcZHv/cg==",
         "de9344a76dbd53ee74918877": "QqPML7Deb3uJmHAftkN/6debEWHghwS2MuRNyo2nUVhrq6jUbuMEONplKJXD4SSDSA26AGy9Ie5NNO9VDZojNf2pnaUYZI4t3l/ldSgEmWEvtEDzIYHOuJ71p/QnoPWU2XHzFuBL8RnbcY7od5+LBdmhcsLCoyZyvnpkSzlaCrDWlIjunWgiDiG4e+69ieb/onaiThrXVSN75Xug/8KIvf/i5lm7gqlFkoQIgblvIA==",
         "0b9c46f964e37fd4672459d5": "oELfACaWxoIdcWHzScJKAeiBGQhlr2Dkx+SE0+OdROjpgIxE91Zd2OSIUv18Q3NAQga1nulGmh/QXaMgiiiGeYMftYR7xv3otY8QJj2lDKahePJce01PHXDsdnWMj6TTnqUTEjRQU/uxOMRedPl1IHxTEsFsonE/0fL6z5wAra2jTMKv0SMsiMWVSO9dKyn1kk8lHIZTIO6NE1u+ynoK0nEeE1cCBB7QoU0m8KY5O8RKfoTjgdXTiChc6EE+odtLsL+QDy2UDGWPSlHAG8CTYmieIToE0cduQ3H870SoapLQCrHlIg==",
         "80c46311661ca90db8325d99": "DvUVHZCUc2y0wxpMy54GKhIBDi89WsJEbnnUEqc4OsBgDaz55zbtluRiEnf+o4jWAXVrs7/krvzYFcBuycv82WW+YvCv6Co3+fJns8E6MwkWZuHnfIwcNOznV/ecfsiuJiP6u501rHYc2FGwQNcOFQ7WdnEtyFpyEOXOUUUpu4rqxI/rsVCV1g/4ajHf0U17asJcMoLHhtA9oHvWE2yNj7Ugw0kDMLRihEUFaBsyvYvjQUGxzQT2ZwwEsvT7GcOvOIo0hh081+ii1vLaxLBEHHDOo9rSelDFmJ4o6asZwaYYjtVx7Q=="
        }
       }
      ]
     }
    ]
   },
   {
    "goal": "🧪 提示詞實驗室：組提示詞、檢查 AI 草稿（🎲 任務每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "promptLab",
      "n": 1,
      "prompt": "提示詞實驗室"
     }
    ]
   },
   {
    "goal": "🧪 草稿更多，最後寫一句自己的（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "promptLab",
      "n": 1,
      "prompt": "提示詞實驗室：挑戰",
      "hard": true
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
  "stages": [
   {
    "goal": "五大擔憂、拍廣告怎麼用 AI、看到驚人影片",
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
        "s": "62170abd1543b641",
        "e": "jnxthDhwPWha4Z559wOImPQqHvxr8H2tdTEp+ztejglmJ/iu0mXNodE6/LzpuB8OXEYG9q7G4fYLtIb/EP/dxXWYBFEwYmmbMe57oL/w3R/cp1Cbbl3Ksek="
       },
       {
        "t": "一段「名人說了奇怪的話」的影片，其實是 AI 做的",
        "icon": "🎭",
        "s": "3f49fcee9ed4c273",
        "e": "1z4nuRcuCQdteCOWvIWX6Xq3DOK0Mtfgpl9Tql7Cuz9TBmjbFEOZSw79bL7QNLvc/oHysmkTcrBOSf+qJSUMcuZ4NSLHvbq1UA=="
       },
       {
        "t": "AI 決定誰可以拿獎學金，但沒有人知道它怎麼決定的",
        "icon": "🎓",
        "s": "525fd6355fd415d3",
        "e": "a2bhUbcjHSDmo14PBQDJIfMLMvK4dnnx+OJI96lcPC2HRXgwT1wVQXrlwVAvVMZmFpN3DHmFuH5UzVAA8hbW1fI="
       },
       {
        "t": "徵才 AI 只推薦男生，因為過去的資料大多是男生",
        "icon": "💼",
        "s": "92dcb6e8efdf465b",
        "e": "XH6VYKSDzjs9oeeZ+NuB8WH5svwchviBmP7tUpmE9QLyIKqu+JHdDim1KdHjvw9yzOrtq1AM7C73qq1JgtA4mnVrhzbV0eQ="
       },
       {
        "t": "把 AI 寫的心得直接交出去，沒有修改也沒有說明",
        "icon": "📄",
        "s": "d5ff23274f63e98a",
        "e": "Y9CeeQwAnTh0Z1ECJAp9Lve9bw+vdt1AMbo5AlsHdrgyXg3MY0XX7h4+tkLY9a8vUVT+i96p1/UA6zkZFn00njlbdFOw0n/+VA=="
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
        "s": "f293b6c7cdfe4de5",
        "e": "E+xjOTRindxi9/PU+bX7Dibvb1nMqDFTr70/CrTA6L/5k1dUU2+WOeljf0+8PMKDJa+o0Y1gB1W7jnN2yEnMknGK14s="
       },
       {
        "t": "請 AI 檢查字幕有沒有錯字",
        "icon": "🔤",
        "s": "60075ead584ac5aa",
        "e": "Q+rAF3TYRCWTeR6z+Y9yYIDThHSkLtj1vIdDn9H7s8pHp1cc9nTxZSBjBvCFLbcP8g6mePsQuLuNlYQ="
       },
       {
        "t": "在說明卡寫下「標語由 AI 發想、我修改」",
        "icon": "🏷️",
        "s": "9917ed49a3f6b03f",
        "e": "/JdX/gESOZa9sneWpmExTuLn0cQQAV6NqB+Bf0rdDd4q7U3rOwBuYXYkEPcFicuzn9JdQ0M="
       },
       {
        "t": "用 AI 生成一段配樂",
        "icon": "🎵",
        "s": "ed1f0b5dee55e344",
        "e": "MVjaMaX4m4g6kOWFb8K6PxfkKKnycqUK6fUGg/PAwPl6FZwkXBQqCZZrGbD/CZjXiHkvQvTfoaSVz3CJ0wKuwFbg1YaahZix8dnKXAe3+2L9955/QPHQ59iZXROU/DMOJIJz"
       },
       {
        "t": "沒問過同學，就把拍到他正臉的照片上傳給 AI",
        "icon": "🙅",
        "s": "b6f5fadf154c5047",
        "e": "NRomedY6O6E2p16v7qTLCtFNfHG5W0u2pzczHxbJ4SA98ut8X9FGfTt+FU9m6ZUulegMrdFsPqqOutGKy5F5c56VbYupRds="
       },
       {
        "t": "AI 說「這張椅子能承重 500 公斤」，直接寫進廣告",
        "icon": "🪑",
        "s": "1d613d76ee2c6000",
        "e": "bhJM8Qu1kSMFa49SJGEw50nfs93/Gvjppz5kbPLU1XtKU2K9yIL3KNSc8UWfWqUMMwGDuFcx3QOVpVwwOOHdqY3fV4bQTqKjRhuQHx1HpGW3Dx36TQ=="
       },
       {
        "t": "把 AI 寫的作品說明整段貼上，說是自己寫的",
        "icon": "📋",
        "s": "2f6ef0205c5a3924",
        "e": "XYXYiwXTINbGHjR4Z6pL9QxvUJ/Ffo51UC75IO810WxpU3r+OHazLn1bkmx40hbQ0oe5zj1EUBfmlja9xo4="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "看到一段很驚人的影片，好好處理的順序",
      "hint": "依序點選：先點第一步。",
      "s": "baa2428416352a15",
      "items": [
       {
        "t": "找原始來源和發布者",
        "icon": "🔎"
       },
       {
        "t": "用其他可信的新聞或資料交叉比對",
        "icon": "📰"
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
        "t": "看有沒有 AI 生成的標示或破綻",
        "icon": "🤖"
       }
      ],
      "seq": [
       "WSIqb4Ws5HsbdLzOrZaXWAqKZDf9t289cHtrLhNN",
       "NUyMCyorEiAJLPhBDQKMusO5jP3kgFm+xkCFmTP6",
       "zqI/WIXt2MyGsPZu0gOPB74M9TCNrFAIzDKV1LeE",
       "RLGbz+hPqpVsN9KELBXHoajGP/6B9AMjFFNTrTh1",
       "tTmxUxauZTU+SyzOmvb2MzOn+0QH7HQflKVbSgxywPTAR2wxe/+xrgQr7k7kL+PSE6O17HZOIKg1zQyw76+6wncVpq6Fho9ZoG0RFPvCyAQzb0Tw8U2bzB9V/2nV7D/TObNicxqFOaEhK8hDph3d8u0HAbQLgw=="
      ]
     }
    ]
   },
   {
    "goal": "🧪 深偽偵探：找出 AI 圖片的破綻（🎲 圖片每次不同）",
    "rounds": [
     {
      "type": "lab",
      "lab": "fakeSpot",
      "n": 1,
      "prompt": "深偽偵探"
     }
    ]
   },
   {
    "goal": "🧪 手和時鐘，更多張（🎲）",
    "rounds": [
     {
      "type": "lab",
      "lab": "fakeSpot",
      "n": 1,
      "prompt": "深偽偵探：挑戰",
      "hard": true
     }
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
  "time": "建議：第 1 節前半",
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
  "time": "建議：第 1 節後半",
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
  "time": "建議：第 2 節（寫清單＋實拍）",
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
  "time": "建議：第 3 節（15 秒版可以接著開始剪）",
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
  "time": "建議：第 4 節（剪輯＋試看＋說明卡）",
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
