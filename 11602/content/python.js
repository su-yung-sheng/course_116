/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/python.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.PY_LEVELS = [
 {
  "id": "Y1",
  "icon": "🔢",
  "title": "字母編號器",
  "concept": "ord() 與 算術",
  "book": "3-2 凱薩密碼（字母的序號）",
  "story": "加密前要先把字母變成數字。在電腦裡每個字元都有編號（還記得上學期的 ASCII 嗎？）：<code>ord('A')</code> 是 65、<code>ord('B')</code> 是 66…。請做一個程式，算出字母是<span class=\"hl\">第幾個字母（A 算 0）</span>。",
  "task": [
   "詢問「請輸入一個大寫字母：」",
   "顯示這個字母的編號：A → 0、B → 1、…、Z → 25"
  ],
  "sample": {
   "inputs": [
    "C"
   ],
   "output": "請輸入一個大寫字母：C\n2"
  },
  "scratch": [
   [
    "( 字母 ) 的 Unicode 編碼（擴充功能）",
    "ord('C')  → 67"
   ],
   [
    "( 67 ) - ( 65 )",
    "ord(c) - 65  或  ord(c) - ord('A')"
   ]
  ],
  "starter": "c = input('請輸入一個大寫字母：')\n",
  "tests": [
   {
    "name": "C",
    "s": "dd989a4af197bebc",
    "checks": [
     {
      "msg": "C 是第 2 號（A 是 0）",
      "t": "nums",
      "h": "49103f7af5e040405c1be0af",
      "k": 1,
      "tail": true
     }
    ],
    "inputs": [
     "C"
    ]
   },
   {
    "name": "A",
    "s": "3947aa8a071c5eb5",
    "checks": [
     {
      "msg": "A 要是 0，不是 65 也不是 1",
      "t": "nums",
      "h": "04ad80f01cfb1e3f212e0d88",
      "k": 1,
      "tail": true
     }
    ],
    "inputs": [
     "A"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "eac64087c7a073d4",
    "checks": [
     {
      "t": "nums",
      "h": "603229ea6bd2096e36960dfc",
      "k": 1,
      "tail": true
     }
    ],
    "hidden": true,
    "xw": "CK82vQjTLGBm7GlB00wvvd5zSAQjpQ==",
    "xin": "o6EGmpA="
   },
   {
    "name": "隱藏測資",
    "s": "395746768512c492",
    "checks": [
     {
      "t": "nums",
      "h": "efc980f5c0cc280a630f9e17",
      "k": 1,
      "tail": true
     }
    ],
    "hidden": true,
    "xw": "rhBdL0hj0PTnHCYUargxtB0i437UTDUqKqxruWVDGMTcTUDyxe8MyMRtRH4=",
    "xin": "lFWp7GY="
   }
  ],
  "req": [
   {
    "need": "calls.ord>=1",
    "msg": "用 ord( ) 取得字母的編號"
   }
  ],
  "bonus": "反過來試試：print(chr(65 + 2)) 會印出什麼？",
  "hx": "Pjc0w9ctvu3O+RAPf52VOLiqYMl1UiQwJxnpnjVWI3r4mim2ud0r1u11yBOxLeG4IJhGynJFJqtGBPEv99OIfOn0G49CP1MXS+LnFmzDYRvlmTbk6WuCgrGXqfNejdFo0NPdLBppnWX7qVFsxPSx6B+B9x+cgM+u0PGtjQs/QrkTwGMO9N4ChoBsbgcNBQHXgPWOZzoLZ1puaTo7ZRe/HkOMlZMUzJlWNGD5EsB1kGvHvOSErhhSNHLdRqZQ",
  "hn": 3
 },
 {
  "id": "Y2",
  "icon": "🎡",
  "title": "轉盤位移計算",
  "concept": "% 讓數字繞圈",
  "book": "3-2 凱薩密碼（固定偏移量）",
  "story": "凱薩密碼就是「往後移 k 格」。可是 Z（25 號）往後移 3 格要<span class=\"hl\">繞回開頭</span>變成 C（2 號）。上學期旅費分攤用過的 <code>%</code>（取餘數）剛好能讓數字繞圈！",
  "task": [
   "詢問「字母編號：」（0～25）和「金鑰：」",
   "顯示往後移「金鑰」格之後的新編號（超過 25 要繞回 0）"
  ],
  "sample": {
   "inputs": [
    "24",
    "3"
   ],
   "output": "字母編號：24\n金鑰：3\n1"
  },
  "scratch": [
   [
    "( ( 編號 ) + ( 金鑰 ) ) 除以 ( 26 ) 的餘數",
    "(n + k) % 26"
   ]
  ],
  "starter": "n = int(input('字母編號：'))\n",
  "tests": [
   {
    "name": "7 移 3",
    "s": "ea4135555c4ffc21",
    "checks": [
     {
      "msg": "7 + 3 = 10",
      "t": "nums",
      "h": "d1f2e82ec7dffad2f67bddaf",
      "k": 1,
      "tail": true
     }
    ],
    "inputs": [
     "7",
     "3"
    ]
   },
   {
    "name": "24 移 3",
    "s": "0a63db81254fd6fd",
    "checks": [
     {
      "msg": "24 + 3 = 27，繞一圈回來是 1",
      "t": "nums",
      "h": "7c377d7abe972498fee65297",
      "k": 1,
      "tail": true
     }
    ],
    "inputs": [
     "24",
     "3"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "5029db839c8c162e",
    "checks": [
     {
      "t": "nums",
      "h": "ad661f4cc6049d7d80224061",
      "k": 1,
      "tail": true
     }
    ],
    "hidden": true,
    "xw": "onKDgq/ga+MqSq3Ry8hsUUkv2UEbH0qNYK35Ihp+fakpJw==",
    "xin": "+ttIeufttXURzQ=="
   },
   {
    "name": "隱藏測資",
    "s": "d00e0e2c913da3c3",
    "checks": [
     {
      "t": "nums",
      "h": "240ead4753e3b4f2049ca617",
      "k": 1,
      "tail": true
     }
    ],
    "hidden": true,
    "xw": "JgNazJ8GCZWJsZdwJM2nr28l9Eq9uqZYiC1oUkRGGOE=",
    "xin": "EsMPry0W5GakDA=="
   }
  ],
  "req": [
   {
    "need": "binops.Mod>=1",
    "msg": "用 % 讓數字繞回來（不要用 if 一個一個減）"
   }
  ],
  "bonus": "金鑰輸入 29 會怎樣？為什麼金鑰 29 和金鑰 3 效果一樣？",
  "hx": "gTlAN/G/SD2TVZBQ2vOutA8qTtMMVVxqwIGscH9DnjEDMGo6f0BDpx/O+IALXDCBS7hl3xcikWFSFXoiPPb1CYBuNOaqASiV+tZiMn3yYNpOf8DeU5mhT+3X1cc+O1cyW4wbCFfFKtG1bsuONcNjfl+Lqbsqitt9vm5ptNR7uBPrBYKOSjK3Ikr5lmVL9WFuESF2uZpQtfR9aFfDztd/h/DXFesZC3tVd9WNki+m",
  "hn": 3
 },
 {
  "id": "Y3",
  "icon": "🔒",
  "title": "加密一個字母",
  "concept": "ord() ＋ % ＋ chr()",
  "book": "3-2 凱薩密碼",
  "story": "把前兩關接起來：字母 → 編號 → 位移 → 再變回字母。<code>chr(數字)</code> 和 <code>ord()</code> 相反，會把編號變回字元，例如 <code>chr(68)</code> 是 D。",
  "task": [
   "詢問「明文字母：」（一個大寫字母）和「金鑰：」",
   "顯示加密後的字母"
  ],
  "sample": {
   "inputs": [
    "A",
    "3"
   ],
   "output": "明文字母：A\n金鑰：3\nD"
  },
  "scratch": [
   [
    "字母 → 編號 → 位移 → 字母",
    "chr((ord(c) - 65 + k) % 26 + 65)"
   ]
  ],
  "starter": "c = input('明文字母：')\nk = int(input('金鑰：'))\n",
  "tests": [
   {
    "name": "A 金鑰 3",
    "s": "5ef74fecea614b94",
    "checks": [
     {
      "msg": "A 往後 3 格是 D",
      "t": "word",
      "h": "5a3ea00deba487a14321d6a7",
      "n": 1
     }
    ],
    "inputs": [
     "A",
     "3"
    ]
   },
   {
    "name": "H 金鑰 13",
    "s": "0e75040db935cad6",
    "checks": [
     {
      "msg": "H 往後 13 格是 U",
      "t": "word",
      "h": "2d8f5cb1e095a3bc5354802b",
      "n": 1
     }
    ],
    "inputs": [
     "H",
     "13"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "f495699141058f61",
    "checks": [
     {
      "t": "word",
      "h": "352899718297a0f15344bf7e",
      "n": 1
     }
    ],
    "hidden": true,
    "xw": "CNxKRyryQWQukTGV3+b8gHMwKR5uYb3AkDjd",
    "xin": "YP75rqS61ZQE"
   },
   {
    "name": "隱藏測資",
    "s": "4156e1d60402a798",
    "checks": [
     {
      "t": "word",
      "h": "504764ed9aae1af4dffaf3f3",
      "n": 1
     }
    ],
    "hidden": true,
    "xw": "HxmUn/KgDs17X4feBIk+JA==",
    "xin": "1de/mW8OPGRF"
   }
  ],
  "req": [
   {
    "need": "calls.ord>=1",
    "msg": "用 ord( ) 把字母變數字"
   },
   {
    "need": "calls.chr>=1",
    "msg": "用 chr( ) 把數字變回字母"
   },
   {
    "need": "binops.Mod>=1",
    "msg": "用 % 處理繞圈"
   }
  ],
  "bonus": "讓小寫字母也能加密（小寫 a 的編號是 97）。",
  "hx": "WEtXp4WaM+35kbaZOoguYjisDZzKW2k6Vk0GbgBzrZN0ZnOvTZ943GrVWrJzCP9ORA8Rvkdf+Hc5E8Lod+8rg7H9kRmh2T0pUEqc+6Wq7sWlQWSbP1sQ2FouRM3CXnvmgvpMbyw4gCyNMgrxhFd2rLHVHnOZ5dGfgU7VeTNP123HOBU1ijepaCml34Gg29am3HIuUb62xMkWaJfTKfk/kIpFHHsh+Mw0mlSdf/wPJ2E=",
  "hn": 3
 },
 {
  "id": "Y4",
  "icon": "📨",
  "title": "加密整句暗號",
  "concept": "for 走過每一個字",
  "book": "3-2 凱薩密碼",
  "story": "學生會的暗號不只一個字母。<code>for ch in 文字:</code> 會<span class=\"hl\">一個字元一個字元</span>拿出來處理，就像上學期 for 一個一個數數字。<span class=\"hl\">空白和數字不加密</span>，保持原樣。",
  "task": [
   "詢問「明文：」（大寫英文，可能有空白或數字）和「金鑰：」",
   "把每個大寫字母都用凱薩密碼加密，其他字元原樣保留",
   "一行顯示完整的密文"
  ],
  "sample": {
   "inputs": [
    "HELLO",
    "3"
   ],
   "output": "明文：HELLO\n金鑰：3\nKHOOR"
  },
  "scratch": [
   [
    "對 ( 明文 ) 的每一個字（重複 長度 次 ＋ 第 i 個字）",
    "for ch in text:"
   ],
   [
    "變數 密文 設為 ( 字串組合 密文 新字 )",
    "result = result + new_ch"
   ]
  ],
  "starter": "text = input('明文：')\nk = int(input('金鑰：'))\nresult = ''\n",
  "tests": [
   {
    "name": "HELLO 金鑰 3",
    "s": "176eb27810ee9d8f",
    "checks": [
     {
      "msg": "HELLO 加密後是 KHOOR",
      "t": "word",
      "h": "7ba5d9d4a504a6c0f2528cb1",
      "n": 5
     }
    ],
    "inputs": [
     "HELLO",
     "3"
    ]
   },
   {
    "name": "有空白",
    "s": "ddda1344794ef1ed",
    "checks": [
     {
      "msg": "空白要保留：SEE YOU → TFF ZPV",
      "t": "word",
      "h": "dfa24dcfd443a33169693c37",
      "n": 7
     }
    ],
    "inputs": [
     "SEE YOU",
     "1"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "b9008ea49fe5f9b3",
    "checks": [
     {
      "t": "word",
      "h": "6169dcb92801dafae189218d",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "+tpGoH+CaPBi1l36yI5mh9x58AHKqIOwVhU=",
    "xin": "E3YzDSvKRxcTHLA="
   },
   {
    "name": "隱藏測資",
    "s": "77b207e62d88048d",
    "checks": [
     {
      "t": "word",
      "h": "b64f501d10477d51c83dd6d9",
      "n": 7
     }
    ],
    "hidden": true,
    "xw": "oux3F2XrLDkJYGV/TfNXpNo9tbzjKbDashMqFWUiIsY7otU=",
    "xin": "/Nwt9/e2ryFUKSvYuHBj"
   }
  ],
  "req": [
   {
    "need": "for>=1",
    "msg": "用 for 一個字一個字處理"
   },
   {
    "need": "if>=1",
    "msg": "用 if 判斷是不是大寫字母"
   },
   {
    "need": "calls.chr>=1",
    "msg": "用 chr( ) 轉回字母"
   }
  ],
  "bonus": "把程式改成維吉尼亞密碼的「加密法 1」：第 1 個字母金鑰 1、第 2 個金鑰 2…（提示：多一個變數數第幾個字母）。",
  "hx": "+JoUtSXMT1jIP5fBwQ/pQtKRu0exdIo3NFv8CQCoId6+G7LSutOUeNO+vMH6r3NLbLTPcEDtB1y1GInE6mlKj3YwthZ19Fx/tHbjhHvyiJaSjBhN8TqSwL9P+nUWnrnR6cLsaijt+vn3sEq+L0yJzXjSdpz4yl9NajfZ5WsJSWuo2dBY2KmLsOlOc290HI3BHkhEh9K+dNbfBakcxp89qNXX/Zu2TMnHtoa89r2r4oD+TwZ7eUel4vFVB9R+J/K81arKtYV3gqzvAr1oKFxY9mnIE0l9J0l0RIxafq9W4auiNWbPByT36A7JpoJVIdlfCOY=",
  "hn": 3
 },
 {
  "id": "Y5",
  "icon": "🔓",
  "title": "攔截密文",
  "concept": "解密：反向位移",
  "book": "3-2 加密與解密",
  "story": "你攔截到另一班的暗號，也打聽到他們的金鑰。<span class=\"hl\">解密就是往前移</span>。好消息：Python 的 <code>%</code> 遇到負數也會自動繞回來，<code>(1 - 3) % 26</code> 是 24。",
  "task": [
   "詢問「密文：」和「金鑰：」",
   "把大寫字母往前移「金鑰」格，其他字元原樣保留",
   "顯示解密後的明文"
  ],
  "sample": {
   "inputs": [
    "KHOOR",
    "3"
   ],
   "output": "密文：KHOOR\n金鑰：3\nHELLO"
  },
  "scratch": [
   [
    "和加密一樣，只是 + 金鑰 變成 - 金鑰",
    "(n - k) % 26"
   ]
  ],
  "starter": "text = input('密文：')\nk = int(input('金鑰：'))\nresult = ''\n",
  "tests": [
   {
    "name": "KHOOR 金鑰 3",
    "s": "c130e60bcea6ca89",
    "checks": [
     {
      "t": "word",
      "h": "2e6b456b8c3968ac6b97465c",
      "n": 5
     }
    ],
    "inputs": [
     "KHOOR",
     "3"
    ]
   },
   {
    "name": "有空白",
    "s": "e1ec5a2c9bb8b1d6",
    "checks": [
     {
      "msg": "YHUB JRRG 解密後是 VERY GOOD",
      "t": "word",
      "h": "afec928082bdae1f3da1a132",
      "n": 9
     }
    ],
    "inputs": [
     "YHUB JRRG",
     "3"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "321ac234f4de61f5",
    "checks": [
     {
      "t": "word",
      "h": "c2d328cf9fdc823093f698f4",
      "n": 3
     }
    ],
    "hidden": true,
    "xw": "e6WGwzCvjQo04FIelt7G2LF4guyjoEvgkdIey3a7hJVXR0dLofqATX4L3W15",
    "xin": "lJ0x1Yt9TDtD8GU="
   },
   {
    "name": "隱藏測資",
    "s": "b93ebadfe83fe9b7",
    "checks": [
     {
      "t": "word",
      "h": "e1c0444f65590467d0c3ccaf",
      "n": 10
     }
    ],
    "hidden": true,
    "xw": "6azoQMyNqcRuvtf2gT5fwsZbnhE=",
    "xin": "y9jgt3kQb8aFw0K6sSFF5T7n"
   }
  ],
  "req": [
   {
    "need": "for>=1",
    "msg": "用 for 一個字一個字處理"
   },
   {
    "need": "binops.Mod>=1",
    "msg": "用 % 處理繞圈"
   }
  ],
  "bonus": "不知道金鑰怎麼辦？用 for k in range(26) 把 26 種可能全部印出來，找出看得懂的那一行 —— 這叫「暴力破解」，也說明了凱薩密碼為什麼不安全。",
  "hx": "HvBbgvb0+qlJhUk6XWaZ9J3e7fvviWA+o/PLWHyo6tgYQ6E75dj+8zpJ00tjzKhjCfeYyFY8+n2f/29OdHPnJNh3JqI0XeD5UoRPqhvp57nxV3O6U9Ej2G5yaVoSpJUi/STuUr1Pk+RNbBNK7SgEoZR9fsxJkNd15I2FQjMRd4JlkeZ63mJHyzEtTyYGeK6bfJmWe8vi74wMFROAUw4cHm6QKrn3GciybgX+79jqmM7U//c=",
  "hn": 3
 },
 {
  "id": "Y6",
  "icon": "📊",
  "title": "魔王關：模擬考答題統計",
  "concept": "計數與比率（Python 版 COUNTIF）",
  "book": "3-1 資料處理實作（COUNTIF）",
  "story": "試算表用 <code>COUNTIF</code> 算「選 B 的有幾人」。現在用 Python 自己做一次！全班某一題的作答連成一串文字（例如 <code>ABBCB</code> 代表 5 個人的答案），算出<span class=\"hl\">答對人數</span>和<span class=\"hl\">答對率</span>。",
  "task": [
   "詢問「全班作答：」（一串 A～D）和「正確答案：」",
   "顯示答對人數",
   "顯示答對率（百分比，例如 60）"
  ],
  "sample": {
   "inputs": [
    "ABBCB",
    "B"
   ],
   "output": "全班作答：ABBCB\n正確答案：B\n答對 3 人\n答對率 60.0 %"
  },
  "scratch": [
   [
    "變數 答對 設為 0",
    "count = 0"
   ],
   [
    "重複 ( 作答 的長度 ) 次 ＋ 如果 第 i 個字 = 答案",
    "for ch in answers:\n    if ch == key:"
   ],
   [
    "( 答對 ) / ( 作答 的長度 ) * 100",
    "count / len(answers) * 100"
   ]
  ],
  "starter": "answers = input('全班作答：')\nkey = input('正確答案：')\n",
  "tests": [
   {
    "name": "ABBCB 答案 B",
    "s": "8301f4b664b88c6e",
    "checks": [
     {
      "msg": "答對 3 人、答對率 60",
      "t": "nums",
      "h": "01b6a67da74378070dbdfe21",
      "k": 2,
      "tail": false
     }
    ],
    "inputs": [
     "ABBCB",
     "B"
    ]
   },
   {
    "name": "DDADC 答案 D",
    "s": "ef1a6dd405c69dc5",
    "checks": [
     {
      "t": "nums",
      "h": "60d6df45874bf508e1494bdb",
      "k": 2,
      "tail": false
     }
    ],
    "inputs": [
     "DDADC",
     "D"
    ]
   },
   {
    "name": "隱藏測資",
    "s": "37aa9ea01eea59f5",
    "checks": [
     {
      "t": "nums",
      "h": "bad1dffce99ed93de93b1786",
      "k": 2,
      "tail": false
     }
    ],
    "hidden": true,
    "xw": "Sb5hCWmTMImWFqC8OC0+hf08MgY9XTSExZ5fZyJEZWOOCA==",
    "xin": "CnthdvZMnnYN1iHU"
   },
   {
    "name": "隱藏測資",
    "s": "1f0889c3013c597b",
    "checks": [
     {
      "t": "nums",
      "h": "0c55f8d9036d92c3dc30cf34",
      "k": 2,
      "tail": false
     }
    ],
    "hidden": true,
    "xw": "rKq4PrNkw0pXHqGcZOfynG3IMZJXLVbT",
    "xin": "AOXDID8LiNS/i3rUDHwuDYV9"
   },
   {
    "name": "隱藏測資",
    "s": "206c522406e09fd1",
    "checks": [
     {
      "t": "nums",
      "h": "ed9a02dcf0a8f8788d25d564",
      "k": 2,
      "tail": false
     }
    ],
    "hidden": true,
    "xw": "Cdt5NdnyhTL20MA+B/9G0AGcAhB9tYf6O611Upj5gdVSh10/sOcGIspjmMm/zoPFNxM=",
    "xin": "4vAonbWw2j/Zf8oEcfOa2Q=="
   }
  ],
  "req": [
   {
    "need": "for>=1",
    "msg": "用 for 走過每個人的答案"
   },
   {
    "need": "if>=1",
    "msg": "用 if 比對答案"
   },
   {
    "need": "calls.len>=1",
    "msg": "用 len( ) 算人數，不要寫死"
   }
  ],
  "bonus": "再算出「選 A、B、C、D 各有幾人」—— 這正是課本用 COUNTIF 做的那張統計表。",
  "hx": "35ZrUnbfX9PPy64UttJpSPEC3rtOrioSKBMkVEh9eUd21Rgzxt5mtKEKKT0HzFr+nZzVH32fDMPl8RNMwaO8oWfiM9qyI4HfJos6GGSdbBsjQh/EhjlLTnyupbuoqpTYocZnrIA0shScEu5KCce7lgaDtPpWj7/4MY0pfPHzsR0Q+m1PwI7Zvn3Wyp7ihVXWVaKsN+279+1tzYfHb48hneJWXTyz7T+o656oi80JR5KfzCJSzyLN3Mw77Lsh+j00",
  "hn": 3
 }
];
