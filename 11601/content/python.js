/* ⚠️ 自動產生，請勿手改。來源：private/11601/content/python.js（私有，不進 git）；產生方式：node tools/build.mjs
   公開版只有題目：答案、解說、提示、預期輸出都在驗證伺服器（server/，見 server/README.md）。 */
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
  "req": [
   {
    "need": "calls.print>=2",
    "msg": "用兩個 print( )，一個印一行"
   }
  ],
  "bonus": "試試看 print(123) 和 print('123') 有什麼不同？再試試 print(1 + 2) 和 print('1 + 2')。",
  "hn": 3,
  "tests": [
   {
    "name": "顯示兩行文字",
    "inputs": []
   }
  ],
  "steps": [
   {
    "title": "自己的招呼語",
    "mode": "demo",
    "prompt": "先看黑框學會 print() 的寫法，再自己寫一句不同的招呼語。",
    "demo": "print(\"哈囉，旅伴！\")",
    "starter": "# 看懂黑框後，在下面自己寫\n",
    "requirements": [
     "使用 print()",
     "招呼語要有內容",
     "不能和黑框示範完全相同"
    ],
    "ref": "print",
    "hn": 3
   },
   {
    "title": "旅行出發畫面",
    "mode": "guided",
    "prompt": "讓 Python 顯示兩行：第一行是「你想去的地方」，第二行是「你想做的事情」。兩行內容要不同。",
    "demo": "",
    "starter": "# 第一行：想去的地方\n# 第二行：想做的事情\n",
    "requirements": [
     "使用 2 次 print()",
     "顯示 2 行有內容的文字",
     "兩行文字不能完全相同"
    ],
    "ref": "print",
    "hn": 3
   }
  ]
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
  "req": [
   {
    "need": "calls.input>=2",
    "msg": "用兩個 input( ) 分別問姓名和年齡"
   }
  ],
  "bonus": "再多問一個「最想去的景點」，把它也放進自我介紹裡。",
  "hn": 3,
  "tests": [
   {
    "name": "小明 15 歲",
    "inputs": [
     "王小明",
     "15"
    ]
   },
   {
    "name": "Amy 14 歲",
    "inputs": [
     "Amy",
     "14"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "問一個問題並記住",
    "mode": "demo",
    "prompt": "黑框示範詢問食物。你的任務改成：詢問「最想去的城市」，把回答存進變數，再顯示那個變數。",
    "demo": "food = input(\"你喜歡什麼食物？\")\nprint(food)",
    "starter": "# 改成詢問最想去的城市\n",
    "requirements": [
     "使用 input() 詢問 1 次",
     "把回答存進變數",
     "使用 print() 顯示該變數"
    ],
    "ref": "input",
    "hn": 3
   },
   {
    "title": "迷你旅行報名表",
    "mode": "guided",
    "prompt": "詢問「目的地、天數、最期待的活動」三項資料，分別記住，最後至少用一個 print() 把三項資料一起顯示。",
    "demo": "",
    "starter": "# 自己設計三個變數完成報名表\n",
    "requirements": [
     "使用 input() 詢問 3 次",
     "使用 3 個不同變數保存回答",
     "輸出時使用到這 3 個變數"
    ],
    "ref": "variable",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "兩份資料：姓名與班級",
    "prompt": "詢問「姓名」和「班級」兩項資料，分別存進兩個不同變數，最後把兩項資料都顯示出來。",
    "requirements": [
     "使用 input() 詢問 2 次",
     "使用 2 個不同變數保存回答",
     "最後顯示兩項資料"
    ]
   }
  ]
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
  "hn": 3,
  "tests": [
   {
    "name": "1000 元 3 人",
    "inputs": [
     "1000",
     "3"
    ]
   },
   {
    "name": "2400 元 30 人",
    "inputs": [
     "2400",
     "30"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "票價總額",
    "mode": "demo",
    "prompt": "黑框示範兩個整數相加。你的任務是詢問「單張票價」和「張數」，用乘法算出總額並顯示。",
    "demo": "a = int(input(\"第一個整數：\"))\nb = int(input(\"第二個整數：\"))\nprint(a + b)",
    "starter": "# 單張票價 × 張數\n",
    "requirements": [
     "兩次輸入都用 int() 轉成整數",
     "使用乘法 *",
     "顯示計算結果"
    ],
    "ref": "int",
    "hn": 3
   },
   {
    "title": "旅行預算",
    "mode": "guided",
    "prompt": "詢問「總預算、交通費、餐費」，算出扣掉交通費和餐費後還剩多少錢。",
    "demo": "",
    "starter": "# 剩餘預算 = 總預算 - 交通費 - 餐費\n",
    "requirements": [
     "使用 3 次 int(input())",
     "使用減法 - 計算",
     "顯示剩餘預算"
    ],
    "ref": "operator",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "平均分配：每人多少、剩多少",
    "prompt": "詢問「點心總數」和「人數」，算出每人可以拿幾個，以及最後剩幾個。",
    "requirements": [
     "使用 2 次 int(input())",
     "使用 // 算每人幾個",
     "使用 % 算剩幾個",
     "把兩個結果都顯示"
    ]
   }
  ]
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
  "hn": 3,
  "tests": [
   {
    "name": "48.5 公斤 160 公分",
    "inputs": [
     "48.5",
     "160"
    ]
   },
   {
    "name": "70 公斤 175 公分",
    "inputs": [
     "70",
     "175"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "正方形面積",
    "mode": "demo",
    "prompt": "黑框示範小數乘法。你的任務是詢問正方形邊長（可有小數），用 ** 2 算面積，再用 round(..., 2) 顯示到小數第 2 位。",
    "demo": "length = float(input(\"長度：\"))\nprint(round(length * 2, 2))",
    "starter": "# 面積 = 邊長 ** 2\n",
    "requirements": [
     "使用 float(input())",
     "使用 ** 2",
     "使用 round(..., 2)",
     "顯示結果"
    ],
    "ref": "round",
    "hn": 3
   },
   {
    "title": "平均速度",
    "mode": "guided",
    "prompt": "詢問「距離（公里）」和「時間（小時）」，計算平均速度＝距離 ÷ 時間，最後四捨五入到小數第 1 位。",
    "demo": "",
    "starter": "# 平均速度 = 距離 / 時間\n",
    "requirements": [
     "兩次輸入都使用 float()",
     "使用除法 /",
     "使用 round(..., 1)",
     "顯示平均速度"
    ],
    "ref": "round",
    "hn": 3
   }
  ]
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
  "hn": 3,
  "tests": [
   {
    "name": "150 公分",
    "inputs": [
     "150"
    ]
   },
   {
    "name": "110 公分",
    "inputs": [
     "110"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "是否達標",
    "mode": "demo",
    "prompt": "黑框示範溫度判斷。你的任務是詢問一個分數：60 分以上顯示「通過」，否則顯示「再挑戰」。",
    "demo": "temp = 30\nif temp >= 28:\n    print(\"很熱\")\nelse:\n    print(\"還好\")",
    "starter": "# 60 分以上通過，否則再挑戰\n",
    "requirements": [
     "使用 int(input()) 取得分數",
     "使用 if 和 else",
     "條件中比較 60",
     "兩個分支都要有輸出"
    ],
    "ref": "if",
    "hn": 3
   },
   {
    "title": "要不要帶傘",
    "mode": "guided",
    "prompt": "詢問降雨機率（0～100）。如果大於等於 50，顯示「帶傘」；否則顯示「不用帶傘」。",
    "demo": "",
    "starter": "# 以 50 為分界\n",
    "requirements": [
     "使用 int(input())",
     "使用 if / else",
     "使用 >= 50 的比較",
     "兩個分支都輸出"
    ],
    "ref": "if",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "自訂門檻",
    "prompt": "自己選一個「數字門檻」情境，例如剩餘電量、作業完成數等。程式要詢問一個整數，並用 if / else 顯示兩種不同結果。",
    "requirements": [
     "使用 int(input())",
     "使用 if / else",
     "至少使用一個比較運算",
     "兩個分支的輸出文字要不同"
    ]
   }
  ]
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
  "req": [
   {
    "need": "branches>=4",
    "msg": "用 if／elif／else 一次分出四種票（不要寫四個獨立的 if）"
   }
  ],
  "bonus": "加上「票價」：全票 800 元、兒童票 400 元、敬老票 400 元，並算出一家四口的總金額。",
  "hn": 3,
  "tests": [
   {
    "name": "5 歲",
    "inputs": [
     "5"
    ]
   },
   {
    "name": "10 歲",
    "inputs": [
     "10"
    ]
   },
   {
    "name": "30 歲",
    "inputs": [
     "30"
    ]
   },
   {
    "name": "70 歲",
    "inputs": [
     "70"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "三種結果",
    "mode": "demo",
    "prompt": "黑框示範三段分數分類。你的任務是詢問年齡：未滿 6 顯示「幼童」、未滿 18 顯示「學生」、其餘顯示「成人」。",
    "demo": "score=75\nif score>=90:\n    print(\"A\")\nelif score>=60:\n    print(\"B\")\nelse:\n    print(\"C\")",
    "starter": "# 三種年齡分類\n",
    "requirements": [
     "使用 int(input())",
     "使用 if、至少 1 個 elif、else",
     "使用 6 和 18 作為分界",
     "三個分支都要有輸出"
    ],
    "ref": "elif",
    "hn": 3
   },
   {
    "title": "四級天氣提醒",
    "mode": "guided",
    "prompt": "詢問氣溫：低於 15 顯示「偏冷」、低於 25 顯示「舒適」、低於 32 顯示「偏熱」、其餘顯示「炎熱」。",
    "demo": "",
    "starter": "# 需要四種結果\n",
    "requirements": [
     "使用 int(input())",
     "使用 if、至少 2 個 elif、else",
     "條件中使用 15、25、32",
     "四個分支都有輸出"
    ],
    "ref": "elif",
    "hn": 3
   }
  ]
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
  "req": [
   {
    "need": "and>=1",
    "msg": "用 and 把兩個條件接在同一個 if（不要用兩層 if）"
   }
  ],
  "bonus": "改成「身高 140 以上，或是有大人陪同（輸入 y/n）」就可以玩 —— 這時要用 or。",
  "hn": 3,
  "tests": [
   {
    "name": "130 公分 12 歲",
    "inputs": [
     "130",
     "12"
    ]
   },
   {
    "name": "130 公分 8 歲",
    "inputs": [
     "130",
     "8"
    ]
   },
   {
    "name": "110 公分 12 歲",
    "inputs": [
     "110",
     "12"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "兩個都要：and",
    "mode": "demo",
    "prompt": "黑框示範 and。你的任務是詢問「作業是否完成（1/0）」和「用品是否帶齊（1/0）」，兩者都等於 1 才顯示「可以出發」，否則顯示「先完成準備」。",
    "demo": "sunny=True\nfree=True\nif sunny and free:\n    print(\"去公園\")\nelse:\n    print(\"留在家\")",
    "starter": "# 兩個條件都成立才可以出發\n",
    "requirements": [
     "取得 2 個整數輸入",
     "使用 and",
     "使用 if / else",
     "兩個條件都要參與判斷"
    ],
    "ref": "logic",
    "hn": 3
   },
   {
    "title": "其中一個即可：or",
    "mode": "guided",
    "prompt": "詢問「有學生證（1/0）」和「有活動證（1/0）」。只要其中一個等於 1 就顯示「可以入場」，兩個都沒有才顯示「無法入場」。",
    "demo": "",
    "starter": "# 其中一個成立即可\n",
    "requirements": [
     "取得 2 個整數輸入",
     "使用 or",
     "使用 if / else",
     "兩個條件都要參與判斷"
    ],
    "ref": "logic",
    "hn": 3
   }
  ]
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
  "hn": 3,
  "tests": [
   {
    "name": "倒數 5 秒",
    "inputs": [
     "5"
    ]
   },
   {
    "name": "倒數 3 秒",
    "inputs": [
     "3"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "range：顯示 1～5",
    "mode": "demo",
    "prompt": "黑框示範 range(3)。你的任務用 for + range() 顯示 1、2、3、4、5。",
    "demo": "for i in range(3):\n    print(i)",
    "starter": "# 顯示 1 到 5\n",
    "requirements": [
     "使用 for",
     "使用 range()",
     "輸出 1～5 的數字"
    ],
    "ref": "for",
    "hn": 3
   },
   {
    "title": "偶數 2～10",
    "mode": "guided",
    "prompt": "用 for + range() 顯示 2、4、6、8、10。不要在程式中寫 5 個 print()。",
    "demo": "",
    "starter": "# 用 range() 的步進完成\n",
    "requirements": [
     "使用 for + range()",
     "range() 的步進為 2",
     "不能使用 5 個獨立 print()"
    ],
    "ref": "for",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "發車倒數：5～1",
    "prompt": "用 for + range() 依序顯示 5、4、3、2、1，最後再顯示一次「出發！」。",
    "requirements": [
     "使用 for + range()",
     "range() 使用負的步進",
     "倒數 5 到 1",
     "迴圈結束後顯示「出發！」"
    ]
   }
  ]
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
  "req": [
   {
    "need": "while>=1",
    "msg": "用 while 迴圈重複詢問"
   }
  ],
  "bonus": "加一條規則：錯 3 次就顯示「鎖定，請找老師」並結束（提示：多一個變數數次數，條件用 and）。",
  "hn": 3,
  "tests": [
   {
    "name": "錯一次再打對",
    "inputs": [
     "1234",
     "2027"
    ]
   },
   {
    "name": "一次就打對",
    "inputs": [
     "2027"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "while：數到 5",
    "mode": "demo",
    "prompt": "黑框示範數到 3。你的任務改成依序顯示 1、2、3、4、5，而且要用 while。",
    "demo": "count=1\nwhile count<=3:\n    print(count)\n    count=count+1",
    "starter": "# 改成數到 5\n",
    "requirements": [
     "使用 while",
     "計數從 1 開始",
     "條件讓迴圈做到 5",
     "每次迴圈更新計數變數"
    ],
    "ref": "while",
    "hn": 3
   },
   {
    "title": "密碼鎖：答對才停止",
    "mode": "guided",
    "prompt": "先設定一個你自己決定的四位數密碼。使用 while 重複詢問密碼；輸入不正確時繼續問，正確後才顯示「解鎖！」。",
    "demo": "",
    "starter": "# 設定答案，再用 while 重複詢問\n",
    "requirements": [
     "先設定一個四位數整數答案",
     "使用 while",
     "迴圈中使用 int(input())",
     "正確後在迴圈外顯示「解鎖！」"
    ],
    "ref": "while",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "密碼高低提示",
    "prompt": "延續密碼鎖：密碼猜錯時，用 if / elif 顯示「太大」或「太小」；猜中後離開 while 並顯示「解鎖！」。",
    "requirements": [
     "使用 while",
     "迴圈中使用 if 與 elif",
     "至少比較 > 和 <",
     "答對後離開迴圈並顯示解鎖訊息"
    ]
   }
  ]
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
  "hn": 3,
  "tests": [
   {
    "name": "50 → 3 → 7",
    "inputs": [
     "50",
     "3",
     "7"
    ]
   },
   {
    "name": "一次猜中",
    "inputs": [
     "7"
    ]
   },
   {
    "name": "隱藏測資",
    "hidden": true
   },
   {
    "name": "隱藏測資",
    "hidden": true
   }
  ],
  "steps": [
   {
    "title": "隨機數：1～10",
    "mode": "demo",
    "prompt": "黑框示範骰子 1～6。你的任務改成產生 1～10 的隨機整數並顯示。",
    "demo": "import random\ndice = random.randint(1, 6)\nprint(dice)",
    "starter": "# 產生 1 到 10 的隨機整數\n",
    "requirements": [
     "import random",
     "使用 random.randint()",
     "範圍是 1 到 10",
     "顯示產生的數字"
    ],
    "ref": "random",
    "hn": 3
   },
   {
    "title": "猜數字：太大／太小",
    "mode": "guided",
    "prompt": "讓電腦隨機選 1～20 的答案。玩家一直猜到正確為止；太大顯示「太大」，太小顯示「太小」。",
    "demo": "",
    "starter": "# random + while + if / elif\n",
    "requirements": [
     "隨機答案範圍 1～20",
     "使用 while 重複輸入",
     "使用 if / elif 提示太大或太小",
     "猜中後能結束迴圈"
    ],
    "ref": "random",
    "hn": 3
   }
  ],
  "extra": [
   {
    "title": "完整猜數字遊戲",
    "prompt": "完成 1～100 猜數字遊戲。除了太大／太小提示，還要用一個變數記錄猜了幾次，答對時顯示總次數。",
    "requirements": [
     "隨機答案範圍 1～100",
     "使用 while",
     "使用 if / elif 做大小提示",
     "使用一個計次變數，每猜一次增加 1",
     "答對後顯示猜測次數"
    ]
   }
  ]
 }
];
