/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/sheet.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.SHEET_LEVELS = [
 {
  "id": "T1",
  "icon": "💰",
  "title": "畢旅零用錢",
  "book": "3-1 試算表：SUM、AVERAGE、MAX",
  "story": "五位同學登記了畢旅要帶的零用錢。用函式算出<span class=\"hl\">總和、平均、最多的人帶多少</span>。函式的寫法是 <code>=函式名稱(範圍)</code>，範圍用「起點:終點」表示，例如 <code>B2:B6</code>。",
  "data": [
   [
    "姓名",
    "零用錢"
   ],
   [
    "小明",
    800
   ],
   [
    "小華",
    1200
   ],
   [
    "阿傑",
    500
   ],
   [
    "怡君",
    1000
   ],
   [
    "志豪",
    1500
   ]
  ],
  "labels": {
   "A7": "總和",
   "A8": "平均",
   "A9": "最多"
  },
  "targets": [
   {
    "cell": "B7",
    "label": "五個人的零用錢總和",
    "must": [
     "SUM"
    ],
    "s": "8af68f0c1ab7eb3c",
    "ok": [
     "13df22d7c6554c3c4cb2ce79",
     "15c0f0498a869ce6754984c6",
     "e6c94fab776f1d3579b5e798"
    ]
   },
   {
    "cell": "B8",
    "label": "平均每人帶多少",
    "must": [
     "AVERAGE"
    ],
    "s": "7993df4b51920a41",
    "ok": [
     "93e0995ce293d401699a69ae",
     "b553a78d10d73c1522291382",
     "cb3424589424551007045e0d"
    ]
   },
   {
    "cell": "B9",
    "label": "帶最多的人帶多少",
    "must": [
     "MAX"
    ],
    "s": "91b8245c123039b4",
    "ok": [
     "7baab9c2cfa2c4bffdb46fde",
     "7133df7061ca24f00f113598",
     "8e634055961a4515be52d734"
    ]
   }
  ],
  "hx": "1//ehpAh0Rkbz6rg1ThKxpdqx9AUbDxiPxCXp472CAvNSzzHDY2PYzqRZc8x0725byTltYqARqYassaL5t+JX2ugdATzzxZ/KRVW/ha20b5/TOtLl/vDdj6KicI1BUrM7ilNNpZi6ZMjm7KxucdEmJfR8NVxwXZ/cl65uh8X1o5tfL848YoUmPss1T5lp9mvCGWW8WotZ4GLSMauAZrM7Fo=",
  "hn": 3
 },
 {
  "id": "T2",
  "icon": "📏",
  "title": "COUNTIF 數字條件",
  "book": "3-1 試算表：COUNTIF 函式",
  "story": "<code>COUNTIF(範圍, 條件)</code> 會數出範圍裡<span class=\"hl\">符合條件的有幾格</span>。條件是數字時直接寫；要比大小時，條件要用引號包起來，例如 <code>\"&gt;=160\"</code>。",
  "data": [
   [
    "姓名",
    "性別",
    "年齡",
    "身高"
   ],
   [
    "王小明",
    "男",
    15,
    168
   ],
   [
    "李小華",
    "女",
    14,
    156
   ],
   [
    "陳大文",
    "男",
    15,
    172
   ],
   [
    "林怡君",
    "女",
    15,
    160
   ],
   [
    "張志豪",
    "男",
    14,
    159
   ],
   [
    "黃雅婷",
    "女",
    15,
    163
   ],
   [
    "吳家豪",
    "男",
    15,
    175
   ],
   [
    "蔡佩君",
    "女",
    14,
    152
   ]
  ],
  "labels": {
   "F1": "統計項目",
   "F2": "身高 160 以上",
   "F3": "15 歲的人數",
   "F4": "身高未滿 160"
  },
  "targets": [
   {
    "cell": "G2",
    "label": "身高 160 公分以上（含）有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "c056aeed4533cc7c",
    "ok": [
     "27c6d3aa25d89b834c71d34e",
     "161304eef17037e94dcb250a",
     "013f2e9b214081e484239a91"
    ]
   },
   {
    "cell": "G3",
    "label": "年齡剛好 15 歲有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "209ae1cb7e5797ad",
    "ok": [
     "a23b3d15416c70285b2dc31a",
     "cc24ee84df6eb26dcd00e584",
     "2ac20df17ba414bf68ca30fa"
    ]
   },
   {
    "cell": "G4",
    "label": "身高未滿 160 公分有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "e24dff0e8b4824e4",
    "ok": [
     "a5e6dc70392c38b1f7962f2a",
     "9e570b4c4618fedccd9f7c60",
     "334fc5fbb5fa4af25fde77c2"
    ]
   }
  ],
  "hx": "lA7LF1rhoTKaXjzGl/ny6YzWHyov9lobgo4HPaIZKtXC8ljeaBEVo6JtrCAg3H6MqQ4bqSi0XH+i0RFGqDclaQW02merzwTXyny0DPxGvnFuktB3jxh6JfvNqx7EZ1cxHgqb82IYbEEeM008EsmozLR4ke3N6PjcNMDWpfA+F0Sf1lCVKjBn+kvVrW3w2Iw+Pu3azU5W7MTBV4oCPiZfBmLhw/A6W4I1aPrbyyLOZJysET3k9oQYbnfVd5mdVs/WGpWNJPoq96g6zbo9HMh+YBCgT2eGK1B+bi8prpi2CxPaDCblasXdR4AYfQ==",
  "hn": 3
 },
 {
  "id": "T3",
  "icon": "🔤",
  "title": "COUNTIF 文字與儲存格",
  "book": "3-1 試算表：COUNTIF 函式",
  "story": "條件也可以是<span class=\"hl\">文字</span>（要加引號，例如 <code>\"女\"</code>），或是<span class=\"hl\">另一個儲存格</span>（不加引號，例如 <code>B3</code>，意思是「和 B3 一樣的」）。",
  "data": [
   [
    "姓名",
    "性別",
    "年齡",
    "身高"
   ],
   [
    "王小明",
    "男",
    15,
    168
   ],
   [
    "李小華",
    "女",
    14,
    156
   ],
   [
    "陳大文",
    "男",
    15,
    172
   ],
   [
    "林怡君",
    "女",
    15,
    160
   ],
   [
    "張志豪",
    "男",
    14,
    159
   ],
   [
    "黃雅婷",
    "女",
    15,
    163
   ],
   [
    "吳家豪",
    "男",
    15,
    175
   ],
   [
    "蔡佩君",
    "女",
    14,
    152
   ]
  ],
  "labels": {
   "F1": "統計項目",
   "F2": "女生人數",
   "F3": "男生人數",
   "F4": "和李小華同性別"
  },
  "targets": [
   {
    "cell": "G2",
    "label": "女生有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "a3277c3165ec1703",
    "ok": [
     "427d38fe34b4b7e995f64a88",
     "62a8e25443b10c27b400ae76",
     "a8a17acec0acd209acd320b8"
    ]
   },
   {
    "cell": "G3",
    "label": "男生有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "30dfceda4b43be4a",
    "ok": [
     "b424ebf91fbfbc09c79533b0",
     "55512313786d4ebd08cbbc61",
     "d9af6cf824b472c2e98e772b"
    ]
   },
   {
    "cell": "G4",
    "label": "和李小華（B3）同性別的有幾人（含她自己）",
    "must": [
     "COUNTIF"
    ],
    "tx": "Bys852IPSGiOs4tq3z6tgjd4wqt6FcqFb0kTAZOtsoJOKArISqb6NW7//YpirBlodoxGxxKdqiUBtmZylbjnoXveVHk52u5W",
    "s": "168b7c4041374986",
    "ok": [
     "40ecbce6e15a3e51369f185f",
     "f82449b188bb34f208e7bf75",
     "f6b96d3c7ac207937b3b2ce6"
    ]
   }
  ],
  "hx": "QwKnZhkOT7P/PYleIllCa8bJLyYu16CnndToLbC2J7mNY32j9oxANHz3XNeEgeYlAPV8oplHKIGrM7p/NISttWF/pEF4Wc7+M74sUEbktj7MGoytuQFDNTcaJFQTy++IFWIxZVpix8+gasOArzJvZf0Uvv+DanczVbWDl0KbP+FxJnKFsod0xZC28cASVbSzwD+vJHTylvI=",
  "hn": 3
 },
 {
  "id": "T4",
  "icon": "🧹",
  "title": "資料清潔隊",
  "book": "3-1 資料前處理：整合、清理、轉換",
  "story": "901 和 902 的身高資料<span class=\"hl\">合併</span>成一張表了，但裡面藏著問題。先把每一列的問題找出來，清理好之後再算平均身高。",
  "data": [
   [
    "班級",
    "姓名",
    "性別",
    "身高"
   ],
   [
    901,
    "王小明",
    "男",
    165
   ],
   [
    901,
    "李美華",
    "女",
    158
   ],
   [
    901,
    "陳大文",
    "男",
    1.72
   ],
   [
    901,
    "林怡君",
    "女",
    155
   ],
   [
    902,
    "張志豪",
    "男",
    170
   ],
   [
    901,
    "王小明",
    "男",
    165
   ],
   [
    902,
    "黃雅婷",
    "",
    160
   ],
   [
    902,
    "吳家豪",
    "男",
    1650
   ],
   [
    902,
    "蔡佩君",
    "女",
    162
   ]
  ],
  "labels": {
   "F1": "統計項目",
   "F2": "平均身高",
   "F3": "女生人數"
  },
  "targets": [
   {
    "cell": "G2",
    "label": "清理後的平均身高",
    "must": [
     "AVERAGE"
    ],
    "s": "54d0ac1a07a2e2e5",
    "ok": [
     "b5b07ce1c50251630b218f45",
     "27ce0846c51177c424d637fd",
     "598bef439453f6ca6648d79b",
     "c14fd57fbf7a3561058dda80",
     "ea57b102959da4ff5e9b5e5b",
     "06e5ddf7a953f01ac8dc24fd",
     "77bdedb5a4f8238aa2b7b5bf",
     "bce2b02b2da2c18cd6919287",
     "334eccd9a94e3613fd58022e",
     "6ad9787f9f75430458e8ada6"
    ]
   },
   {
    "cell": "G3",
    "label": "清理後的女生人數",
    "must": [
     "COUNTIF"
    ],
    "s": "dff9d57f493bf6e6",
    "ok": [
     "3d4fa3c1f03bc66f423b8978",
     "a6f964b81c59e2b02d2bdac8",
     "f412ef45d11f25724e7fe72f"
    ]
   }
  ],
  "after": "💡 如果沒有清理就直接算，平均身高會變成 <b>309.6 公分</b> —— 一筆錯誤的 1650 就讓結果完全失真。這就是「資料前處理」的重要性。",
  "hx": "6i3zZo522fG3od8gpNgGsn25lK5uYsVzl2MOeDpUb9pM8m7Wjzi2NBOeZjKB1Q8wP8Ft1NadV8toXqOlqY1jjuLEwSdNnrRuaqX187EED17lGla0UeljMOpEHYKGbG918FEAj8YB/LUje+Sl8X6PKUa6CZ/85hzymtxpyL0EOcDZ4qTvFilhB4okra+dcvsOTNjJ5hG2TIKy/mmTGA1OJljqOeETtGGvQjXSPnOcVmY6qSa31MLWo1UIhrzmCqjVk1bvPNhb328=",
  "hn": 3,
  "clean": {
   "prompt": "用每一列右邊的選單標出問題：🔁 重複（和上面某一列一模一樣）、🕳️ 缺值（有空白）、⚡ 不合理（不可能的數字）、📏 單位不一致（用了不同單位）。都沒問題就選 ✅。",
   "s": "e67954162a158604",
   "rows": {
    "2": "c7a0032eb8ca98bacb5e1331",
    "3": "c1baecbbbb324af24297951d",
    "4": "a0018c7de01498e502e6b77f",
    "5": "1b7d8235b6be782f4af8f72d",
    "6": "e1faf77ac0adf84a6a812fce",
    "7": "f499db2967950cd2c1dee391",
    "8": "d454e48a8ae2f0c1e9fe099b",
    "9": "32a6d009dab9bf696d1cda53",
    "10": "4e6ba2fc533e1da942a9e5cd"
   },
   "e": "ZZ9JaZMD4kMK9poefLRfAm8tcOJUazFbMHfoGkA7IQKsJQOe068+GILweQGwvI/4yBOCCMpwhwLUMeJR5YXH9Lm6nx3Qr36Me584ULooAUXPO6KqmSqedtgiCzZMat09Woz85lqUANeT7H4nlgg7ism1UDbPcFrOZrDzKGa5U9qWyokBubimVcwlLdQOp9lniFUUahVhZ1UhPFa3LvSna4s+iX3Yqhm4vfQFO4hp2ldIf3Rie1oi4b9wruu8sLXX+Uczm3LK81fsc/WrdE1SfFEn7H8NULuUGC5Hcs16fgvXb90MURQ4b4fkZNWD4ut7L22605YvUYMNP8FKQ47rvA91ItK/EnI9J0rFyFqwe0hiYLDpqVgb9s2pj1K/b4bm5smyJQYBz5tEl7r47gFTCFqaYe2XrhyMxtSrsgdyexuTk6dbZKI+/u75oWPfLv1nSpqu7JOnp/TzdVeiJ2swP33vGuV319tGaWkxTTDkU1q0/TZOM4ijmbuRCekme7QvnJn4kf7w/5Xi9QfMl27V+Op49NZohPLu1eSg8sDggoOV3n6o4ybMjWh/3LPuVolAQETWW2hOvFfhcGg7aJqFRnBcf80DUXonjsj3F8tQDGrUuY091kku2xQChLmLMw/7CussIYop7wIW"
  }
 },
 {
  "id": "T5",
  "icon": "📝",
  "title": "魔王關：模擬考答題統計",
  "book": "3-1 資料處理實作（國文模擬考統計）",
  "story": "課本的實作：統計每一題<span class=\"hl\">答對的人數</span>。第 10 列是正確答案，所以條件可以直接寫那一格（例如 <code>B10</code>），三題的公式幾乎一樣。最後再算第 1 題的答對率。",
  "data": [
   [
    "座號",
    "第1題",
    "第2題",
    "第3題"
   ],
   [
    1,
    "B",
    "D",
    "A"
   ],
   [
    2,
    "B",
    "C",
    "A"
   ],
   [
    3,
    "A",
    "D",
    "C"
   ],
   [
    4,
    "B",
    "D",
    "A"
   ],
   [
    5,
    "C",
    "D",
    "A"
   ],
   [
    6,
    "B",
    "A",
    "B"
   ],
   [
    7,
    "B",
    "D",
    "A"
   ],
   [
    8,
    "D",
    "D",
    "C"
   ],
   [
    "正解",
    "B",
    "D",
    "A"
   ]
  ],
  "labels": {
   "A11": "答對人數",
   "A12": "選 A 的人數",
   "A13": "答對率"
  },
  "targets": [
   {
    "cell": "B11",
    "label": "第 1 題答對人數",
    "must": [
     "COUNTIF"
    ],
    "s": "ef2342248a905d9e",
    "ok": [
     "fcd5c2edae3562978852a751",
     "511dfb17daadf25149cccec1",
     "c38483fd8fb60576ddd1ba44"
    ]
   },
   {
    "cell": "C11",
    "label": "第 2 題答對人數",
    "must": [
     "COUNTIF"
    ],
    "s": "3c63ed88c7e4dbfe",
    "ok": [
     "f7efa33d2e89186cb1274cfc",
     "7b1b4686b93163af4af52c05",
     "5cb4e33c65f6d22a558e4077"
    ]
   },
   {
    "cell": "D11",
    "label": "第 3 題答對人數",
    "must": [
     "COUNTIF"
    ],
    "s": "6c8f5aab559c9b92",
    "ok": [
     "ec4ed24d2b9032b8077dd8c6",
     "3134f0bf5443d19701748212",
     "544154dfd8acdcad5833629f"
    ]
   },
   {
    "cell": "B12",
    "label": "第 1 題選 A 的有幾人",
    "must": [
     "COUNTIF"
    ],
    "s": "58440b5cd5bf226e",
    "ok": [
     "b17a6ae2319d0e42668044ef",
     "0101e81ea5c42353e650059d",
     "de0906c0dd5b25aa6bd479f3"
    ]
   },
   {
    "cell": "B13",
    "label": "第 1 題答對率（答對人數 ÷ 作答人數；寫成 0.625 或 62.5 都可以）",
    "s": "7e9bd70d1197f9c8",
    "ok": [
     "dfc0863db282b1da1d70a06a",
     "1db3c79266af1758119c3d3c",
     "838933f745b1d7d5ff84e4ca",
     "9069f75c8e843f6819cb1b9e",
     "a49eaefc0f2ad6568dca308b"
    ]
   }
  ],
  "after": "🎉 這就是課本「國文模擬考統計」的做法。用 Google 試算表開課本的資料檔，同樣的公式可以一次統計 50 題！",
  "hx": "qcxC/x7AiCqSoKEulNV58ZuFSBJaCrej9kxasSyYmhvnZfxUH1i/yALflk6GvY3FiimTHD6uJyJNNLQjODnV2eBRKH0b+NNyXr8xf0cnnWR70AfIxY1Xdh8OycH7n0QcS26oOYVJFHixzPKVPzPxhBpnLPTH+9q72/sl+k8fMRvr4MGiS6XCgB8omvV0LgCTniiRZQ9hC2Qc0htZb8nH3v9KxINJeirKnLfevYWDYcx1/MhLCwrkNyG609QMJmIIbYqv3t/WaXh3sdrOBtX5hFW8bLKomqElgHKyf1QmPR56ym8zhZl7y+504V33Khs=",
  "hn": 3
 }
];
