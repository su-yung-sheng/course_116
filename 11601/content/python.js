/* ⚠️ 自動產生，請勿手改。來源：private/11601/content/python.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.PY_LEVELS = [
 {
  "id": "P1",
  "icon": "👋",
  "title": "哈囉，旅伴！",
  "concept": "print() 輸出",
  "book": "2-1 概念1 文字輸出",
  "story": "畢旅籌備處開張了！第一件事，讓電腦向大家<span class=\"hl\">打聲招呼</span>，確認你的 Python 環境可以正常運作。",
  "task": [
   "第一行顯示：<code>Hello, World!</code>",
   "第二行顯示：<code>畢業旅行，出發！</code>"
  ],
  "sample": {
   "inputs": [],
   "output": "Hello, World!\n畢業旅行，出發！"
  },
  "scratch": [
   [
    "說出 (Hello, World!)",
    "print('Hello, World!')"
   ]
  ],
  "starter": "# 在下面寫你的程式\n",
  "tests": [
   {
    "name": "顯示兩行文字",
    "s": "1c5797b3020bcd8a",
    "checks": [
     {
      "msg": "第一行要一字不差：Hello, World!（大小寫、逗號、驚嘆號都要對）",
      "t": "line",
      "h": "b0d2baee45875d8eb6fcdb3e"
     },
     {
      "msg": "第二行要顯示「畢業旅行，出發！」",
      "t": "has",
      "h": "753b7bc230411ea8b5ac1c3d",
      "n": 7
     }
    ],
    "inputs": []
   }
  ],
  "req": [
   {
    "need": "calls.print>=2",
    "msg": "用兩個 print( )，一個印一行"
   }
  ],
  "bonus": "試試看 print(123) 和 print('123') 有什麼不同？再試試 print(1 + 2) 和 print('1 + 2')。",
  "hx": "uM5PNc1cG7ZdpxKcGOiYoX4WTeJzcHEibR0jXOGUeLIk+gA834GVCrrRjMccwCaVSF8vMTL+Ww01cg1D02CirA2crdCjf1FanvNUb6pudn1nzlHkydPlO1eWwl+3R+QLhwLtxTxJ7GLWeqAFflAgn2dkCpavfypk8/ZxjHk0c9Vp2WRLPFwMOE8pNA4KiDMTPXWre0r81UMK3Mv9Nn0zJOEr6Kr/0kN1s/8HZNvVrwNyLOz3xJW+F4zyLgQTMhC2Gbibps7oqYhjduwjSSclxlQWwm+ZjPMAiEfL19az",
  "hn": 3
 },
 {
  "id": "P2",
  "icon": "📝",
  "title": "畢旅報名表",
  "concept": "input() 與變數",
  "book": "2-1 任務1 自我介紹",
  "story": "報名開始！請做一個報名小程式：先問<span class=\"hl\">姓名</span>、再問<span class=\"hl\">年齡</span>，最後用一句話介紹這位同學。",
  "task": [
   "詢問「請輸入姓名：」，把答案存進變數",
   "詢問「請輸入年齡：」，把答案存進變數",
   "顯示：<code>我是○○○，今年○○歲。</code>"
  ],
  "sample": {
   "inputs": [
    "王小明",
    "15"
   ],
   "output": "請輸入姓名：王小明\n請輸入年齡：15\n我是王小明，今年15歲。"
  },
  "scratch": [
   [
    "詢問 (請輸入姓名：) 並等待",
    "name = input('請輸入姓名：')"
   ],
   [
    "變數 name 設為 (答案)",
    "（上面那一行已經存進 name 了）"
   ],
   [
    "說出 (字串組合 我是 name)",
    "print('我是' + name + …)"
   ]
  ],
  "starter": "# 1. 詢問姓名\n\n# 2. 詢問年齡\n\n# 3. 自我介紹\n",
  "tests": [
   {
    "name": "小明 15 歲",
    "s": "b72c456fbdbc4aa9",
    "checks": [
     {
      "msg": "要顯示「我是王小明，今年15歲。」",
      "t": "order",
      "seq": [
       {
        "h": "ab37715f17f65d024a80095f",
        "n": 2
       },
       {
        "h": "66750faa9c5bc603de52c6b3",
        "n": 3
       },
       {
        "h": "e38f88f350dc8efbaa18c05e",
        "n": 2
       },
       {
        "h": "8b13ab2d9a3b10cf83868e42",
        "n": 2
       },
       {
        "h": "d9f7f1414f888ca7a6bdeac5",
        "n": 1
       }
      ]
     }
    ],
    "inputs": [
     "王小明",
     "15"
    ]
   },
   {
    "name": "Amy 14 歲",
    "s": "b8b91cf4c4ec136e",
    "checks": [
     {
      "msg": "姓名和年齡要用使用者輸入的，不可以寫死",
      "t": "order",
      "seq": [
       {
        "h": "645e4891915fe65453fb9538",
        "n": 2
       },
       {
        "h": "6d228bfb4a11deb1fbf68148",
        "n": 3
       },
       {
        "h": "79d88f9bc666dc5d5b767bfa",
        "n": 2
       },
       {
        "h": "68fa2e81c0a0dac513f9b3ed",
        "n": 2
       },
       {
        "h": "7ba375a86dfe5780057aeeeb",
        "n": 1
       }
      ]
     }
    ],
    "inputs": [
     "Amy",
     "14"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "df19e062203f04dc",
    "checks": [
     {
      "t": "order",
      "seq": [
       {
        "h": "381a7a7b25c3ed63a43b8639",
        "n": 2
       },
       {
        "h": "a091e2f87571ebf6431f790b",
        "n": 3
       },
       {
        "h": "ba3c75a57c8dcfab59ab8dc4",
        "n": 2
       },
       {
        "h": "7d1e6d0ab38b0e5ae1d9df76",
        "n": 2
       },
       {
        "h": "f48f9a1cfbf522d993671c48",
        "n": 1
       }
      ]
     }
    ],
    "hidden": true,
    "xw": "8F9awiMbKJN+YkEuDduXxLNBCwux4kG1qH4UwzY=",
    "xin": "gApRNUArWB//8TaIdgm4yD9x"
   }
  ],
  "req": [
   {
    "need": "calls.input>=2",
    "msg": "用兩個 input( ) 分別問姓名和年齡"
   }
  ],
  "bonus": "再多問一個「最想去的景點」，把它也放進自我介紹裡。",
  "hx": "3bukYjNWNcu5ck9QLP4rw4+KhkGDmQLbtbFFMvEwUiKtgc4uFgy9wZVEGureUuJQICCfBDHnoqLKZYx9uqIkhPWy+cgaUH0ImsnFdwrNLygF/4V0DsqHgI3cMPIcFiCI6MTql+jaJ9iWOi89717VgemwbDjBRLMYCftU4IdPDovhEEJBFNl/b3ffOruIvKzu7nReE3QVWa1OpKuuaNt6ErxyVqRcTpz3cXkVMBN1BGs7eM/ryg5M4bKUWEVy2MVDdXsC6cLSV26fqsrKJiNM+Dt/tSHmFcumx8VK++Tgj9QmR0JXzEpBKYT4Y5K3JZr8f0P/fcOQWy3JBMeOVpvqkMAvDf0hMZa893ounmby4a0ynI6BPf/BBGxnDLX8nOcz0hzTN5DZyGU9SmuO9hCV1r2jZN0KmEwwidzjWdVbUA==",
  "hn": 3
 },
 {
  "id": "P3",
  "icon": "💰",
  "title": "旅費分攤",
  "concept": "型態轉換與算術運算子",
  "book": "2-1 概念 資料型態轉換、算術運算子",
  "story": "包車的錢要全班平分，<span class=\"hl\">每人付整數元</span>，除不盡的零頭由班費補。請幫總務股長算出每人要付多少、班費要補多少。",
  "task": [
   "詢問「總金額：」和「人數：」（都是整數）",
   "顯示每人要付多少元（整數，無條件捨去）",
   "顯示班費要補多少元（除不盡剩下的）"
  ],
  "sample": {
   "inputs": [
    "1000",
    "3"
   ],
   "output": "總金額：1000\n人數：3\n每人付 333 元\n班費補 1 元"
  },
  "scratch": [
   [
    "( ) / ( ) 再「無條件捨去」",
    "total // people"
   ],
   [
    "( ) 除以 ( ) 的餘數",
    "total % people"
   ],
   [
    "（Scratch 的答案可以直接算）",
    "int(input('總金額：'))  ← Python 要先轉成整數"
   ]
  ],
  "starter": "total = int(input('總金額：'))\n# 接著問人數，再算出每人付多少、班費補多少\n",
  "tests": [
   {
    "name": "1000 元 3 人",
    "s": "78c0dc020e41e03f",
    "checks": [
     {
      "msg": "每人 333 元、班費補 1 元（順序：先每人、再班費）",
      "t": "nums",
      "h": "b0a68f776323087e6c2b4b2b",
      "k": 2,
      "tail": false
     }
    ],
    "inputs": [
     "1000",
     "3"
    ]
   },
   {
    "name": "2400 元 30 人",
    "s": "d08b5447fca267a4",
    "checks": [
     {
      "msg": "剛好除盡時，班費補 0 元也要顯示出來",
      "t": "nums",
      "h": "1035d1a7dfbd7c543c3b30a2",
      "k": 2,
      "tail": false
     }
    ],
    "inputs": [
     "2400",
     "30"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "0b1a07452365f002",
    "checks": [
     {
      "t": "nums",
      "h": "96cd94c49fd458bea0ec1655",
      "k": 2,
      "tail": false
     }
    ],
    "hidden": true,
    "xw": "nbux/ZNnx92AWdDnbx4Bbp7NKD2pNDkDUfk=",
    "xin": "AG3i1J21wiRHN9Sa"
   },
   {
    "name": "隱藏測資",
    "s": "f92b7f6395309b6e",
    "checks": [
     {
      "t": "nums",
      "h": "65bc8c6ae2ff61308dffa7ba",
      "k": 2,
      "tail": false
     }
    ],
    "hidden": true,
    "xw": "SeCb41/BWkE03O0M+rBnROvPt4zBuVs97JsMAmRQHLDWIzXSBu5VPsYRN9ogs9E2qDUa3056isQ=",
    "xin": "Infsidz8hkHIKg=="
   }
  ],
  "req": [
   {
    "need": "calls.int>=2",
    "msg": "兩個輸入都要用 int( ) 轉成整數"
   },
   {
    "need": "binops.FloorDiv>=1",
    "msg": "用 // 算每人付多少"
   },
   {
    "need": "binops.Mod>=1",
    "msg": "用 % 算零頭"
   }
  ],
  "bonus": "把 1000 秒換算成「幾分幾秒」—— 一樣是 // 和 % 的好朋友。",
  "hx": "vblajIPAm3QET9PHhlW8t71XGs6f/lwQxWcWfuVaBX2VCJEyz+cVuRWlQWlx64jnwef7/Js97RpMzv26jN+MzEh8wa4W4OSe/N/fBwlflJNu1zadksHJjYTDXroae8u2QnSYHtNDgY9czzyN2Ti2Xp9rY5amgTBsG0jRjV9fNXRhiFB3trwfCsJzsUXQgklduZEKMupil578pqg9JYZ4IteKHvOiyxYuCjbTEBxDAOMq1qstPRDBFCeH1OL8smekeF3oa7pMrYxN4rRdVAMOSDKFQncn3Lojxoj0ky1roICS7eeVPHqmFeEuq4SNJ4rNbhcNEBBpHyab9MsNV/+IccBv91efC6/uTKy277MlrAdTz2PTe6mI+YvdlABObSUM9XQae2NfWQndIw==",
  "hn": 3
 },
 {
  "id": "P4",
  "icon": "⚖️",
  "title": "健康檢查 BMI",
  "concept": "float() 與運算順序",
  "book": "2-1 任務2 計算 BMI 值",
  "story": "出發前的健康檢查！BMI 可以看出體重和身高的比例。公式是 <b>BMI ＝ 體重（公斤）÷ 身高（公尺）²</b>，但大家量身高習慣用<span class=\"hl\">公分</span>。",
  "task": [
   "詢問「請問體重幾公斤：」和「請問身高幾公分：」（可能有小數）",
   "計算 BMI（身高要先換成公尺）",
   "顯示 BMI 值（要不要四捨五入到小數第 2 位都可以）"
  ],
  "sample": {
   "inputs": [
    "48.5",
    "160"
   ],
   "output": "請問體重幾公斤：48.5\n請問身高幾公分：160\nBMI = 18.95"
  },
  "scratch": [
   [
    "( 體重 ) / (( 身高 / 100 ) * ( 身高 / 100 ))",
    "w / (h / 100) ** 2"
   ],
   [
    "四捨五入 ( )",
    "round(bmi, 2)"
   ]
  ],
  "starter": "w = float(input('請問體重幾公斤：'))\n# 接著問身高，再算 BMI\n",
  "tests": [
   {
    "name": "48.5 公斤 160 公分",
    "s": "fae3e8e15c68ecfc",
    "checks": [
     {
      "msg": "BMI 應該約是 18.95（身高有先換成公尺嗎？）",
      "t": "num",
      "hs": [
       "910f1c13e379843ee63f61f9",
       "017dda7d448cfa9083ab6c00",
       "f97039acf06f70c5c0235d78",
       "a0d38162aaf52fffac6fcc66",
       "d686d114fec7428c4e2bbbb6",
       "0ecb0df7152af0633d492139",
       "bd3e996429ef8e6159b87675",
       "e0615ef43fbe4a7f93c5de98",
       "4ff9939142ed69247c1eca5a",
       "a66a7e027c7395d3a322a799",
       "ef2ef060765acdf4b7cab7bb"
      ]
     }
    ],
    "inputs": [
     "48.5",
     "160"
    ]
   },
   {
    "name": "70 公斤 175 公分",
    "s": "aa52d9707c292921",
    "checks": [
     {
      "msg": "BMI 應該約是 22.86",
      "t": "num",
      "hs": [
       "4e44e9805549844aab9b5351",
       "792de5455268d1688ad20a0c",
       "6ccd0cd27179ca1158fe8bd0",
       "356dfcd026d2e361638aa61d",
       "5c57deb39eb913e751b55a77",
       "23d505da7633d992fb875789",
       "b4c58e77254affa106a962fd",
       "040745c8f1499198a57b456d",
       "816bee1c3701ffe4b23fbf16",
       "9a072617ef633d8c8237ace9",
       "0dd523c283eeb3938b586f9e"
      ]
     }
    ],
    "inputs": [
     "70",
     "175"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "d6e97b728b87a8ed",
    "checks": [
     {
      "t": "num",
      "hs": [
       "7b037ab741e4a21d09c6c934",
       "84713f4b89fab9ad8dfee9d6",
       "26a579db4e08aa2f62fd0496",
       "468d608b79e9949148ce16db",
       "063f6e44b518ca8d0834e2a1",
       "d39ed80a2f46268afcb2e90c",
       "0a424e5f1dfb68d3da2d65c8",
       "350904a210fd6ac8b6c9a4d9",
       "02995ca13c38847d2ca1b05e",
       "87e217cb504bceaa2c9a9693",
       "b7ad6f1da6c3e59f9ad994d7"
      ]
     }
    ],
    "hidden": true,
    "xw": "kUffIkMDLoXVUfqKNLqxepsuuxgqm1siw/57L0r+Hihbxm+x/Ubpqn01vZARNbx4EN9tDd5TBivEGBqG7qw4gzI/",
    "xin": "rBzz+qDc8OwV75EdQtg="
   }
  ],
  "req": [
   {
    "need": "calls.float>=2",
    "msg": "體重、身高都可能有小數，兩個都用 float( )"
   },
   {
    "need": "binops.Div>=1",
    "msg": "用 / 做除法"
   }
  ],
  "bonus": "用 round(bmi, 1) 只留一位小數；再想想看：為什麼 round 不寫第二個數字時，結果會變成整數？",
  "hx": "U/mmQE+yip1ROnFFuqfaRMh27NUcX7WWLZhDjKZI5GckyCna9zJ++TpOaFniXLNIF0TcPx/nYNwl21yBlkJ4bgq/R2dUzRACS1zm5d7zTKJXHsTRq0qufa2f1HezHqXNiyuxlETar/vf8ShNFs2lnWW4CsY5Kxek7pqLvNFDGBC1JUwk09hNfQjn/9UhvguAHNXCzUZSH1Xx5ta8FzzL6gAqqQOW4NG7NpFrRowhJeoGeLabY1hla5p62atfUgs/ujCyCSc5DbjrxjipeIQyGcFdGqJm1EGDv9sPix+zBMI6sfF23kGJ4mt0wqv0f4qctNrYxnXX2kG8xg0mUTM=",
  "hn": 3
 },
 {
  "id": "P5",
  "icon": "🎢",
  "title": "雲霄飛車身高檢查",
  "concept": "關係運算子、雙向選擇 if／else",
  "book": "2-2 概念 關係運算子、選擇結構",
  "story": "遊樂園的雲霄飛車規定：身高 <span class=\"hl\">120 公分以上（含 120）</span>才能搭乘。請做一個入口的自動檢查機。",
  "task": [
   "詢問「請輸入身高：」（整數）",
   "120 公分以上 → 顯示 <code>可以搭乘</code>",
   "其他 → 顯示 <code>還不能搭乘</code>"
  ],
  "sample": {
   "inputs": [
    "150"
   ],
   "output": "請輸入身高：150\n可以搭乘"
  },
  "scratch": [
   [
    "如果 < 身高 > 119 > 那麼 … 否則 …",
    "if h >= 120:\n    …\nelse:\n    …"
   ],
   [
    "（Scratch 沒有「≥」積木）",
    "Python 有 >=、<=、==、!="
   ]
  ],
  "starter": "h = int(input('請輸入身高：'))\n",
  "tests": [
   {
    "name": "150 公分",
    "s": "486a809575c4cd96",
    "checks": [
     {
      "msg": "150 公分可以搭乘",
      "t": "has",
      "h": "77d52dbf0eb546fafef05f23",
      "n": 4
     },
     {
      "msg": "150 公分不該出現「還不能搭乘」",
      "t": "not",
      "h": "4df554f84a10eef1befe9df6",
      "n": 3
     }
    ],
    "inputs": [
     "150"
    ]
   },
   {
    "name": "110 公分",
    "s": "8388c2ad12f91607",
    "checks": [
     {
      "msg": "110 公分要顯示「還不能搭乘」",
      "t": "has",
      "h": "3b4cb6058745d40a6513ba9d",
      "n": 5
     }
    ],
    "inputs": [
     "110"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "7b474dd3eeb49d71",
    "checks": [
     {
      "t": "has",
      "h": "e61956a9a312a9ef1d79aa61",
      "n": 4
     },
     {
      "t": "not",
      "h": "137bbd5684065b0a0f49866a",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "lFejM906mRIqhfBw+oW30XPVw6j47aiFbSEFOVdfp2Oq5CFhWV1UkfcHF8vzpOX6zuwZFPYBgr6xWkICHH+syP5Hq7rCiyIgfAA=",
    "xin": "SUd0G+ZuFA=="
   },
   {
    "name": "隱藏測資",
    "s": "076c4fdcd7a8a379",
    "checks": [
     {
      "t": "has",
      "h": "a982904e7ba634321364a31a",
      "n": 5
     }
    ],
    "hidden": true,
    "xw": "G4ix/9NCuwUFe6R/h8Vn2vqU1EUvxhUrrl1boqxkDxevO8w=",
    "xin": "ezP+9ED1Ww=="
   }
  ],
  "req": [
   {
    "need": "if>=1",
    "msg": "用 if 判斷"
   },
   {
    "need": "else>=1",
    "msg": "用 else 處理「其他」的情況"
   }
  ],
  "bonus": "讓身高不到 120 的人，還能知道「差幾公分」。",
  "hx": "jpTTJiCeu/Sgs1TnvioXsxjSgByZqFMkRuyk5Emu3P38E4Tz8YsdTDhjpw5LkCiqZLVV4dn+JnJURfO1lj+1OjlMZlt6cEGhwkqtkBYic5NoVyHq7vYx4VlujOo2W3vOY2sni44MLn1KBmrBMcvG5c7HJgYlxpm81WuQjHLz+Ezn5A6oaMOi0HhifQU9jKVHBSbVC0OrGTQP/N3XV58hBT8IegiagSJtBTu/n24Z6plA9wp7k64HI0cxAB0YeMLvFmFJCSqDY3T6HNJ4ZpR5c+5jysY=",
  "hn": 3
 },
 {
  "id": "P6",
  "icon": "🎫",
  "title": "自動購票機",
  "concept": "多向選擇 if／elif／else",
  "book": "2-2 任務3 自動購票機",
  "story": "遊樂園的票價依年齡分成四種。請做一台自動購票機，<span class=\"hl\">一次只能印出一種票</span>。",
  "task": [
   "詢問「今年幾歲？」",
   "6 歲以下（含 6 歲）→ <code>免購票</code>",
   "13 歲以下（含 13 歲）→ <code>兒童票</code>",
   "65 歲以上（含 65 歲）→ <code>敬老票</code>",
   "其餘 → <code>全票</code>"
  ],
  "sample": {
   "inputs": [
    "10"
   ],
   "output": "今年幾歲？10\n請購買：兒童票"
  },
  "scratch": [
   [
    "如果 … 那麼 … 否則（如果 … 那麼 … 否則 …）",
    "if …:\nelif …:\nelse:"
   ],
   [
    "（Scratch 要一層一層包）",
    "Python 用 elif 排成一排，比較好讀"
   ]
  ],
  "starter": "age = int(input('今年幾歲？'))\n",
  "tests": [
   {
    "name": "5 歲",
    "s": "30e3f3ccd90096d6",
    "checks": [
     {
      "t": "has",
      "h": "57fafbc7ccb3f5c18fe9e427",
      "n": 3
     },
     {
      "msg": "5 歲只能印「免購票」，一次只能印一種票",
      "t": "not",
      "h": "38874ccdeeeca2c2e984c183",
      "n": 3
     }
    ],
    "inputs": [
     "5"
    ]
   },
   {
    "name": "10 歲",
    "s": "55bfffc1001076e1",
    "checks": [
     {
      "t": "has",
      "h": "f6818c80648f86aa7c8a61cc",
      "n": 3
     },
     {
      "t": "not",
      "h": "35e1342d2e2c43f3b4f32afb",
      "n": 2
     }
    ],
    "inputs": [
     "10"
    ]
   },
   {
    "name": "30 歲",
    "s": "f9bd4e0d0a39085c",
    "checks": [
     {
      "t": "has",
      "h": "abfd9326221a8fe496d8db11",
      "n": 2
     },
     {
      "t": "not",
      "h": "81d88e0ece93ed23c1cb0f09",
      "n": 3
     }
    ],
    "inputs": [
     "30"
    ]
   },
   {
    "name": "70 歲",
    "s": "96721fed76364feb",
    "checks": [
     {
      "t": "has",
      "h": "9da2f7eb2b253582a42e8a7b",
      "n": 3
     },
     {
      "t": "not",
      "h": "f2f384a5e7ea44e721c2198c",
      "n": 2
     }
    ],
    "inputs": [
     "70"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "e92faeeb488661be",
    "checks": [
     {
      "t": "has",
      "h": "0a1f3f49a117cb3652ed1f29",
      "n": 3
     },
     {
      "t": "not",
      "h": "718f55e3d5d9f239b20e36cc",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "h4oxZVKSc1C0yPjesKs5EPvMTd8B7GW2FaY=",
    "xin": "5FWh/3Q="
   },
   {
    "name": "隱藏測資",
    "s": "a0bbd3e126e95d6a",
    "checks": [
     {
      "t": "has",
      "h": "5911c72d3c7ac0e4f13c760b",
      "n": 3
     },
     {
      "t": "not",
      "h": "7a170cb72bf08531a92107aa",
      "n": 2
     }
    ],
    "hidden": true,
    "xw": "rCDjK/xZyXtKJw40h5Jz5eNh7g6qs+12DFV+",
    "xin": "x2KljPTz"
   },
   {
    "name": "隱藏測資",
    "s": "85d3d0e928c0f267",
    "checks": [
     {
      "t": "has",
      "h": "81ef65134a3535fbd2199932",
      "n": 2
     },
     {
      "t": "not",
      "h": "50e4901dba3c1f48fe768ac7",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "QSMFTubwzzH66a0TBLuwMYjOSAg=",
    "xin": "Wu/fTINM"
   },
   {
    "name": "隱藏測資",
    "s": "57abeebce2fe3774",
    "checks": [
     {
      "t": "has",
      "h": "fabc487365aa5629f74974de",
      "n": 3
     },
     {
      "t": "not",
      "h": "111e92ffee054b4672de2990",
      "n": 2
     }
    ],
    "hidden": true,
    "xw": "2OyOIdESII2niz7En2zEWlKkdsr+jifsgbH2",
    "xin": "MVh29X+K"
   }
  ],
  "req": [
   {
    "need": "branches>=4",
    "msg": "用 if／elif／else 一次分出四種票（不要寫四個獨立的 if）"
   }
  ],
  "bonus": "加上「票價」：全票 800 元、兒童票 400 元、敬老票 400 元，並算出一家四口的總金額。",
  "hx": "ek5uA8442A7jy/eFTjF3E5ddPfhpr8D68gxDCPjEGmkqs9oFsQzAZO8uPuUuZhcQCIWadigIAZVgsD5/sLNEPbEOS/gjWerd5DZHuXjXnmRG2XoT/4+fwueNwAf8rZ8Bd962V2WTsO7Wafqf9BnHqxmUeJDCld8KF1aefQCntPOUdJlJJTgXXEkf67mDecPeoce6lcnqsidYbNJPOEeYmWmc9so6gygKLJhQy6pw6eOCcm4bdlSl9jsF3gyTOB0takr6TYeI5+dGMPHGZ0SbatWKucvK1+/z3C/6fmmjVmuj47Hw1NL2UZwkPYCIumCkc1zXKkCzkj0GJLTaiOcDq+nEx2rbcz0cUh4M11g3JI5QdmzihRUPATAZH+XDBvES2yCEfDNpkmAtn4/NGbc=",
  "hn": 3
 },
 {
  "id": "P7",
  "icon": "🚀",
  "title": "極速飛車雙重關卡",
  "concept": "邏輯運算子 and／or",
  "book": "2-2 概念 邏輯運算子",
  "story": "最刺激的「極速飛車」有兩個條件：身高 120 公分以上<span class=\"hl\">而且</span>年齡 10 歲以上，兩個都要符合才能玩。",
  "task": [
   "詢問「身高：」與「年齡：」",
   "兩個條件都符合 → <code>可以玩極速飛車！</code>",
   "只要有一個不符合 → <code>先去玩旋轉木馬吧</code>"
  ],
  "sample": {
   "inputs": [
    "130",
    "12"
   ],
   "output": "身高：130\n年齡：12\n可以玩極速飛車！"
  },
  "scratch": [
   [
    "< … > 且 < … >",
    "h >= 120 and age >= 10"
   ],
   [
    "< … > 或 < … >",
    "… or …"
   ],
   [
    "< … > 不成立",
    "not …"
   ]
  ],
  "starter": "h = int(input('身高：'))\nage = int(input('年齡：'))\n",
  "tests": [
   {
    "name": "130 公分 12 歲",
    "s": "f9bc2830076df724",
    "checks": [
     {
      "t": "has",
      "h": "49b10e0ad6e91f15faf580f9",
      "n": 3
     },
     {
      "t": "not",
      "h": "5ecee35463e23d432b6cc215",
      "n": 4
     }
    ],
    "inputs": [
     "130",
     "12"
    ]
   },
   {
    "name": "130 公分 8 歲",
    "s": "0157dc9b14cee041",
    "checks": [
     {
      "msg": "年齡不到 10 歲不能玩",
      "t": "has",
      "h": "666f0eddfb8088ea8ba262ab",
      "n": 4
     },
     {
      "t": "not",
      "h": "f96a9969f34dcf9e8ae0c0d8",
      "n": 3
     }
    ],
    "inputs": [
     "130",
     "8"
    ]
   },
   {
    "name": "110 公分 12 歲",
    "s": "710df331e2599429",
    "checks": [
     {
      "msg": "身高不到 120 不能玩",
      "t": "has",
      "h": "383617d49b000abc408c1081",
      "n": 4
     },
     {
      "t": "not",
      "h": "44e696b0edcc69074b165247",
      "n": 3
     }
    ],
    "inputs": [
     "110",
     "12"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "cf19f6c482bfacb2",
    "checks": [
     {
      "t": "has",
      "h": "07ed03a17c65213b0cf02cf7",
      "n": 3
     },
     {
      "t": "not",
      "h": "c306a9d1720f26bd9e47b19b",
      "n": 4
     }
    ],
    "hidden": true,
    "xw": "4KNfokDAvZS1doqJqTc3CnyfpeAw0fT7O7Kp8rBoAxNQwPU=",
    "xin": "O+v5bHixy5UW4Gdk"
   },
   {
    "name": "隱藏測資",
    "s": "4c180902b64e90d5",
    "checks": [
     {
      "t": "has",
      "h": "ca96dec732b54c6a9fcbe967",
      "n": 4
     },
     {
      "t": "not",
      "h": "1590f0967e7651af1814cf7a",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "2iHbMgkA3l4r5TzJsrj8/GnIC/LWrBbyiBFJyCI=",
    "xin": "kBkL5565AuV0cW6B"
   },
   {
    "name": "隱藏測資",
    "s": "74745ca54057bd48",
    "checks": [
     {
      "t": "has",
      "h": "cdbf756775db6f0b857d7785",
      "n": 4
     },
     {
      "t": "not",
      "h": "5b7c4b069bb9758079e1dccf",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "NmpAICnnwGmrJrXpI4e2i8tLkMbL3X4=",
    "xin": "hqikr9zdIQm5nB0="
   }
  ],
  "req": [
   {
    "need": "and>=1",
    "msg": "用 and 把兩個條件接在同一個 if（不要用兩層 if）"
   }
  ],
  "bonus": "改成「身高 140 以上，或是有大人陪同（輸入 y/n）」就可以玩 —— 這時要用 or。",
  "hx": "PofMVJOZU/phaIeLAQ1ZegPbLCbUsZfRLWz7inkdiMpKv/o1DCqXwKithyg6qRC18NLKIceX79e7zpcc01z5AAoLvqVb6Y6fbFlCMv3+i/yOu7uHe7vzMEeNz2TPQI9V3xCb8A3O0DrHhFDdycHDNDuyXD0VzPlDYyudGi31/l69itB+HCtJ5eMf/7dnYT5yylTJMWhpYVL+2xiWV17mdpqB+IXpe+QCdsVX5lGhcArHRMos11nq7PbhwQ==",
  "hn": 3
 },
 {
  "id": "P8",
  "icon": "🚌",
  "title": "遊覽車發車倒數",
  "concept": "計次迴圈 for 與 range()",
  "book": "2-2 概念 計次迴圈、倒數計時挑戰",
  "story": "遊覽車要出發了！司機要從指定的秒數開始<span class=\"hl\">倒數</span>，數到 1 之後喊「出發！」。",
  "task": [
   "詢問「倒數幾秒？」",
   "從那個數字倒數到 1，每個數字一行",
   "最後顯示 <code>出發！</code>"
  ],
  "sample": {
   "inputs": [
    "5"
   ],
   "output": "倒數幾秒？5\n5\n4\n3\n2\n1\n出發！"
  },
  "scratch": [
   [
    "重複 (n) 次",
    "for i in range(…):"
   ],
   [
    "變數 i 改變 (-1)",
    "range(n, 0, -1) 會自己一個一個減"
   ]
  ],
  "starter": "n = int(input('倒數幾秒？'))\n",
  "tests": [
   {
    "name": "倒數 5 秒",
    "s": "66a29fb2a08a3064",
    "checks": [
     {
      "msg": "要依序印出 5、4、3、2、1",
      "t": "nums",
      "h": "48efe1d4fc759cdf791fb3e7",
      "k": 5,
      "tail": true
     },
     {
      "msg": "「出發！」要印一次（在迴圈外面）",
      "t": "count",
      "h": "65b5d969280bae2e09576b98",
      "n": 2,
      "eq": 1
     }
    ],
    "inputs": [
     "5"
    ]
   },
   {
    "name": "倒數 3 秒",
    "s": "d7fa43de4f272993",
    "checks": [
     {
      "msg": "輸入 3 要印出 3、2、1（數字不可以寫死）",
      "t": "nums",
      "h": "d64605fd43d176926086e24a",
      "k": 3,
      "tail": true
     },
     {
      "t": "count",
      "h": "0f2165f424348c8e2541715b",
      "n": 2,
      "eq": 1
     }
    ],
    "inputs": [
     "3"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "9e4ffb86f57082c4",
    "checks": [
     {
      "t": "nums",
      "h": "4c12d95fe881b3fc37efaea8",
      "k": 1,
      "tail": true
     },
     {
      "t": "count",
      "h": "782d3cbcacb6ca7ef1a81b7a",
      "n": 2,
      "eq": 1
     }
    ],
    "hidden": true,
    "xw": "MjRjL22hlXrxfVOXgrpAfyDgliSFMMdzdfU=",
    "xin": "ULS4Af0="
   },
   {
    "name": "隱藏測資",
    "s": "54c7befff9a194c8",
    "checks": [
     {
      "t": "nums",
      "h": "00883f0164f0969128745b0a",
      "k": 10,
      "tail": true
     },
     {
      "t": "count",
      "h": "59f05822071182717903ae61",
      "n": 2,
      "eq": 1
     }
    ],
    "hidden": true,
    "xw": "4kYspN03A0ehvkwkxUAdfC/r0zY=",
    "xin": "wBxqrCEG"
   }
  ],
  "req": [
   {
    "need": "for>=1",
    "msg": "用 for 迴圈"
   },
   {
    "need": "calls.range>=1",
    "msg": "用 range( ) 產生倒數的數字"
   },
   {
    "need": "calls.print<=3",
    "msg": "不要一行一行寫 print，交給迴圈重複"
   }
  ],
  "bonus": "在程式最前面加上 import time，迴圈裡加 time.sleep(1)，就會真的一秒一秒倒數（在這個網頁上會用動畫表現）。",
  "hx": "IuanptM1WtxkXlo8IL2F3fGlQEqYUd1QlhzlMkHjGxmV5lXKJSAa1/aXqSHLmqLpReZ3sitIxtWB/bf73/ET4bM+TukNDBcVC2DkdvdYq8691sDfwoE0V40foKAP/88+oenxiSQs/SgXEJZya4OH293GwT0wqXmj1IB2M3u3tT6Asv7kHOfr8BbVyR+5/PlNlOkmoG1LaMX6l+qNspGXslizfCOyoEmP3YmpNvsVPn/Dh405dk2MhZit4QBpt8f4b1bTi1JgtoisxA6rOHFUWBvehz5lihwUzAhKqLcHX2pkYf01itop4N9OeHdLojkzabnHamSdbGP2tysSTne+2SRToK/nKT/1XeRjWSbVMP782OXMkVnFSMYOBUV6YM8yHmwz5QH1G724SFUS46DaK9TM2zRvkvx4kNA=",
  "hn": 3
 },
 {
  "id": "P9",
  "icon": "🔐",
  "title": "置物櫃密碼鎖",
  "concept": "條件迴圈 while",
  "book": "2-2 概念 條件迴圈",
  "story": "飯店置物櫃的密碼是 <b>2027</b>（畢業那一年）。密碼<span class=\"hl\">打錯就要一直重打</span>，直到打對為止。",
  "task": [
   "在程式裡設定密碼 2027",
   "請使用者輸入密碼",
   "錯了就顯示 <code>密碼錯誤</code> 並再問一次",
   "對了顯示 <code>門開了！</code>，程式結束"
  ],
  "sample": {
   "inputs": [
    "1234",
    "2027"
   ],
   "output": "請輸入密碼：1234\n密碼錯誤\n請輸入密碼：2027\n門開了！"
  },
  "scratch": [
   [
    "重複直到 < 答案 = 2027 >",
    "while ans != '2027':"
   ],
   [
    "⚠️ 注意條件相反",
    "Scratch「直到成立就停」／Python「成立就繼續」"
   ]
  ],
  "starter": "password = '2027'\n",
  "tests": [
   {
    "name": "錯一次再打對",
    "s": "69369838d7c0348b",
    "checks": [
     {
      "msg": "打錯要顯示「密碼錯誤」",
      "t": "count",
      "h": "05284c2ba57108c502959532",
      "n": 2,
      "min": 1
     },
     {
      "msg": "打對要顯示「門開了！」",
      "t": "has",
      "h": "68b96f6ca64e808378ba4ab5",
      "n": 3
     }
    ],
    "inputs": [
     "1234",
     "2027"
    ]
   },
   {
    "name": "一次就打對",
    "s": "c78002fe97c49dc9",
    "checks": [
     {
      "t": "has",
      "h": "d7c44063ed2c33f7d3862b98",
      "n": 3
     },
     {
      "msg": "第一次就打對，不應該出現「密碼錯誤」",
      "t": "not",
      "h": "00b1b386920a1bbe99e849f5",
      "n": 2
     }
    ],
    "inputs": [
     "2027"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "ee0eed158322f849",
    "checks": [
     {
      "t": "count",
      "h": "a8fe9bc580b79e5caa1a3bfa",
      "n": 2,
      "min": 3
     },
     {
      "t": "has",
      "h": "d810b17491e58e46686263fa",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "fnKIZZSk8i8zkWFL191bAn1CcJ0MG968Jk9GbveUBeE96gY=",
    "xin": "oV1SSP+cCPZnlzCB2bc51GP+XFoAwtI+Idem4aE="
   },
   {
    "name": "隱藏測資",
    "s": "5629d8539e1de4c5",
    "checks": [
     {
      "t": "count",
      "h": "b06834717f9a83b13bc39a7f",
      "n": 3,
      "eq": 1
     }
    ],
    "hidden": true,
    "xw": "3LlmQ8r35PjLEdFzVjJSYc13WGaD+lhwbemrv2L3ox1icqgKFWBHXGi6+oQwDZA=",
    "xin": "R817l39Rx0oluXDD9xsvB9UtPk2gAA=="
   }
  ],
  "req": [
   {
    "need": "while>=1",
    "msg": "用 while 迴圈重複詢問"
   }
  ],
  "bonus": "加一條規則：錯 3 次就顯示「鎖定，請找老師」並結束（提示：多一個變數數次數，條件用 and）。",
  "hx": "jp/7XlMvGHi7i5OKIRT6ODl5PvUa8ag9QD929zuXV5tokhfMpKpdQ+GrB+ZTXKrpCDj6DTSttSzMbp50YaZC4cZ8K6Vwi4tUQCL66NZczNMRk0o+ELhpB3KIXg1OkqXVKk5fQRGpdvn7GZroiehKA2qyXPPmetM5fO3z2qL3poKHXApa2K/GunuIiDL/S4CAjT97g9MBBisRMOK1Bw1+ZSQbR5pTJ1BvXFI0NvmCDjO2A9zMOtSBbeXTHWqDDUppAS1AeShsvkST6u68efopWG53MumgBsdn/idmM+o8Gqd7kOlfzoaTTfpYvhcOkXuD6XND5kGhmCx7NNHRewQSids7sk2i7eNVG3XXlAq0t//7JmbfHACSfyFfa8Rm0vKnfVeQqb7jlTRDBElIH2r3I90rGROip1ayzYCjROTg",
  "hn": 3
 },
 {
  "id": "P10",
  "icon": "🎲",
  "title": "魔王關：營火晚會猜數字",
  "concept": "while ＋ if 綜合應用",
  "book": "2-2 任務4 猜數字",
  "story": "營火晚會的遊戲時間！主持人心裡想了一個 1～99 的數字，大家輪流猜，主持人只會說<span class=\"hl\">太大</span>或<span class=\"hl\">太小</span>，直到有人猜中。",
  "task": [
   "謎底先固定設為 <code>answer = 7</code>（評分用；延伸挑戰再改成隨機）",
   "請使用者猜一個數字",
   "猜太大 → 顯示「太大，請重猜」；太小 → 顯示「太小，請重猜」",
   "重複猜，直到猜中為止",
   "猜中顯示 <code>答對了！</code>"
  ],
  "sample": {
   "inputs": [
    "50",
    "3",
    "7"
   ],
   "output": "請猜一個數字：50\n太大，請重猜：3\n太小，請重猜：7\n答對了！"
  },
  "scratch": [
   [
    "重複直到 < 答案 = 謎底 >",
    "while guess != answer:"
   ],
   [
    "如果 < 答案 > 謎底 > 那麼 … 否則 …",
    "if guess > answer: … else: …"
   ]
  ],
  "starter": "answer = 7\n",
  "tests": [
   {
    "name": "50 → 3 → 7",
    "s": "c1cd848c1177cdac",
    "checks": [
     {
      "msg": "要依序出現：太大、太小、答對了",
      "t": "order",
      "seq": [
       {
        "h": "6af9c5ddbf29f87cb423f00d",
        "n": 2
       },
       {
        "h": "1244cff4f0b3a39d1a6b08de",
        "n": 2
       },
       {
        "h": "32a2d77ab30fe3935a3bdf0f",
        "n": 2
       }
      ]
     }
    ],
    "inputs": [
     "50",
     "3",
     "7"
    ]
   },
   {
    "name": "一次猜中",
    "s": "604bf4d0b65ddadb",
    "checks": [
     {
      "t": "has",
      "h": "dd83eeef257663c2149b4621",
      "n": 2
     },
     {
      "t": "not",
      "h": "66bcf43025ac5e47c0b3a686",
      "n": 2
     },
     {
      "t": "not",
      "h": "37dcd058dcf596e7ecab77cd",
      "n": 2
     }
    ],
    "inputs": [
     "7"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "dd4d845e5f8643b5",
    "checks": [
     {
      "t": "order",
      "seq": [
       {
        "h": "63dc67e99ceef920545fc177",
        "n": 2
       },
       {
        "h": "cc0b32d96bfecb7242a8e847",
        "n": 2
       },
       {
        "h": "63dc67e99ceef920545fc177",
        "n": 2
       },
       {
        "h": "cc0b32d96bfecb7242a8e847",
        "n": 2
       },
       {
        "h": "567764e13b632b338de352f0",
        "n": 2
       }
      ]
     },
     {
      "t": "count",
      "h": "567764e13b632b338de352f0",
      "n": 2,
      "eq": 1
     }
    ],
    "hidden": true,
    "xw": "E/MjRfINdeWpLpfPUDBNR2xhHqmC6veYMfr2HUpY56DIaWOZeR2VlCG61+9dejw=",
    "xin": "nuymHff6fx4LrrYw/T+i+xs5Qrt7dA=="
   },
   {
    "name": "隱藏測資",
    "s": "85ca0efbc751908a",
    "checks": [
     {
      "t": "order",
      "seq": [
       {
        "h": "483b2bdee21084ee78457961",
        "n": 2
       },
       {
        "h": "1cada04c0599185eb02e75a2",
        "n": 2
       }
      ]
     }
    ],
    "hidden": true,
    "xw": "7hVHa4jhvGfdHK0=",
    "xin": "tYw/bjgXUgdDfw=="
   }
  ],
  "req": [
   {
    "need": "while>=1",
    "msg": "用 while 重複猜"
   },
   {
    "need": "if>=1",
    "msg": "用 if 判斷太大或太小"
   }
  ],
  "bonus": "改成 import random 和 answer = random.randint(1, 99)，並在答對時顯示「你猜了幾次」。",
  "hx": "xdWHxahw0S9pWhpNenv0ya5gHu1ZcAunCO7lQXilDqDiCHBOySeVhiYJHQ7QlQZIiJ5toHXCe5hneovGfnHLa7liebV+Dji5/W7JukDQud22jCtt3LohNONAnPURkGZwY7UcD8AMmraB13tw6Sm2yo++ZDeuK2jvIIPdDrMQYkafN9cGVamo1lQJRfEM9jUAqOzdSU73ZW+9HY1shmgNwwX8lB6XaniLn9J/AjpjQ2w3B50+Tv78wuORKLXEnObsEEiWO+ZM8bOfuiE7H4smGRk5xWnw7yHK9/iQ8thXN2lha/VkSiqTh5SPuRdrqrfiSA==",
  "hn": 3
 }
];
