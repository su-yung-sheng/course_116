/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/network.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.NET_LEVELS = [
 {
  "id": "N1",
  "icon": "🏘️",
  "title": "網路的範圍與設備",
  "book": "2-1 網路的連接",
  "learn": "網路依涵蓋範圍分成：<ul><li>🏠 <b>區域網路（LAN）</b>：連接<span class=\"hl\">小範圍</span>內的電腦和周邊設備，例如一間教室、一個家</li><li>🌏 <b>廣域網路（WAN）</b>：大範圍的網路，由許多區域網路組成；網際網路就是最大的廣域網路</li></ul>家裡或學校要連上網，會用到這些設備：<ul><li>📞 <b>數據機</b>：負責線路上的<span class=\"hl\">類比訊號</span>與電腦可識別的<span class=\"hl\">數位訊號</span>之間的轉換</li><li>🧭 <b>路由器</b>：安排資料的傳送路徑，通常有 WAN（對外）和 LAN（對內）兩種接孔</li><li>🔀 <b>網路交換器</b>：插孔不夠時用來擴充區域網路</li><li>🏢 <b>ISP（網際網路服務提供者）</b>：例如電信公司，提供連上網際網路的服務</li></ul>",
  "stages": [
   {
    "goal": "分辨區域／廣域網路、設備的工作（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這是區域網路還是廣域網路？",
      "pick": 5,
      "buckets": [
       {
        "id": "lan",
        "label": "區域網路 LAN",
        "icon": "🏠"
       },
       {
        "id": "wan",
        "label": "廣域網路 WAN",
        "icon": "🌏"
       }
      ],
      "items": [
       {
        "t": "電腦教室裡 35 台電腦連在一起",
        "icon": "🖥️",
        "s": "3cbb0018fb1e014e",
        "e": "iYktuAtcHJscDeeUt97pOkYLe7Ii9ZwdhLD9jPALoy9IqJSAPo/Q6PhD7qgb41XhuOt1BsOMv31WDZIks5TEz1XK+spppQWs56z27w1JXcsKrWM="
       },
       {
        "t": "家裡的手機、筆電都連同一台 Wi-Fi 分享器",
        "icon": "🏠",
        "s": "9955e204fb58118d",
        "e": "PSoEcMxUBcsboyQyIlPJCnJplhBv/w6O9GCo6YQ3jNp4a9h6ADYEFARVtneYT+akpHZs4bqGPKemVQz6MwYqarbrLSThIgIEDc5EM7c="
       },
       {
        "t": "銀行全國各地分行的電腦互相連線",
        "icon": "🏦",
        "s": "0266a57465f601e2",
        "e": "BTdVKh37DiNSGRnV24VIKB9B9QcFnp2aQ1RsqxOMNrJdwN08fCn/GVA1qnk9SVWp6hq1wvh0aYoeX/ylOdy8EYDL6ONPDAIKAGSIYd3kKnepuIZpOEfeK7RnJyKkYhwJ8EmZlyoy96EHTZ9nSf398fQ="
       },
       {
        "t": "連接全國各級學校的臺灣學術網路",
        "icon": "🏫",
        "s": "f439b9b5c716293d",
        "e": "BivtYtZk4sxzWcXon0G+/otfAW9VZF42ZCTjst2l7k12MAadk9C+2dGm/yKCNh5tb/fZ0K4ENoaoayj91FNZbHL14Zi0ry+oVUE9CGyu6srk0yFG5zPt64ojBo5eUa/Fh+c="
       },
       {
        "t": "網際網路（Internet）",
        "icon": "🌐",
        "s": "bb1f61edafec5ca5",
        "e": "wd4A4Gh9Y8tE3vAHkqsA8Ipo2FpEvj41pUob53YDzUcZD9dfIE33jyvoAwC9hgi5+IwbFsZy3SvyaC983rsGc8Lf7P/9pdsaU/ZQ5F3uKAWpXnCkEZs="
       },
       {
        "t": "學校三棟大樓的電腦連成一個網路",
        "icon": "🏫",
        "s": "9322b8d6ac11cc7d",
        "e": "4rN0lCPrlEZ9xOPcWxz5eGWoIo3j+/j6ZKcpfCeaH5SABbugz3RYb6MY9cBnpGnknR0wZ1OWFZQGyIYh/4ZKs3u9g7Gsd66qJZD0eoznKK2TLQrFlAkTsW4="
       },
       {
        "t": "臺北總公司和高雄分公司的電腦互相連線",
        "icon": "🏢",
        "s": "636ad00f8edd4b48",
        "e": "r9gpuh7tjb2uJ7Me5euYk4h/JwHN1gY1W/jx/5XuTXF1rAAgPsMALtfaIn1Mqp+TSws1L7iMEzZME5Fb98nSrfFC+KLFGBY="
       },
       {
        "t": "網咖裡 20 台電腦連在一起打電動",
        "icon": "🎮",
        "s": "794edf1f2fe5f0d4",
        "e": "7HSyOhjjEdLU+z9/Gz6GLmqeqJ7bFHF6heAvOR38d/14+n0hcvWz27uUCzIW0w5DrBwfa/y/ch1/LH3bXCk10SmDEodsWpu4e/YIc7M="
       },
       {
        "t": "全臺便利商店的收銀機連回總部",
        "icon": "🏪",
        "s": "ecb35223004470df",
        "e": "kry6gWXIvitIfzoLUBdrvi4Voe8TNR8XM8oD5dfbS55X9HFTry4EhOCf0z04eYQYXAsZHg3LGAbS3dhLYU4sYMgY3vi9PGOz4v65fRHStZOsXp4lH1ISXpc="
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "這是哪一個設備（或服務）的工作？",
      "pick": 5,
      "buckets": [
       {
        "id": "modem",
        "label": "數據機",
        "icon": "📞"
       },
       {
        "id": "router",
        "label": "路由器",
        "icon": "🧭"
       },
       {
        "id": "switch",
        "label": "交換器",
        "icon": "🔀"
       },
       {
        "id": "isp",
        "label": "ISP",
        "icon": "🏢"
       }
      ],
      "items": [
       {
        "t": "把線路上的類比訊號轉成電腦看得懂的數位訊號",
        "icon": "〰️",
        "s": "265deb0aeb8b96a8",
        "e": "R3WeaeRoGD1zn5crjsTWg52hHjcXeXw99Fxn/pH2TD7UomETLdXrFbzU9Y2r6nuRDZMSRy3wOWKaePEGGsoXG2ZaPkMzKIMsKX6iqRF1CD7b0QgyXjCW1Q=="
       },
       {
        "t": "決定封包要往哪條路走，有 WAN 和 LAN 兩種接孔",
        "icon": "🗺️",
        "s": "8b5e71501a4a79e2",
        "e": "0rbsXz2M4DTUQZYeSc4mTX7L52h2aX+FoMXOwPIbVSWO+kZO6XrJYKP1+MqeosqQM3dE+C2oP3qmYhXcg25T0jyJ1GxgkT8bKai1YIst0vA="
       },
       {
        "t": "教室的網路插孔不夠了，用它多接幾台電腦",
        "icon": "🔌",
        "s": "e966e9c41d41e238",
        "e": "ikPzShYsC0MXSjq2BDsa4WL96DqocM9pYOaMTObgkwuURgbVM/4xbrF0lnv/i3KVQDNWGFgrZl3wtHKfn2F8t5kwg0oRWy8KsPk="
       },
       {
        "t": "電信公司提供你家連上網際網路的服務",
        "icon": "📡",
        "s": "46dba07a8f04edf7",
        "e": "yB8yqBUifwvtDz+3uB+sDmUPaAoyL3TnoFByJ/RlNzdoAeU1NSFEwFsEtve4J9q1231MmlrQDVXinnRTfjVMHayPu9195iKInq5E"
       },
       {
        "t": "讓家裡好幾台裝置共用一個對外連線，並分配內部位址",
        "icon": "🏠",
        "s": "8ea65894f69bb543",
        "e": "k4KN4fs1FstDxkSLIP4CDOces2dPWnTZlqjrEs/urqLp1ul0YAi1WvLVnYr3DQp4Atv4hj3//Tk8KRA/D8gHATnG7fNkmLWKL2Ojn8XItUb8bYD3uJof"
       },
       {
        "t": "光纖傳進來的訊號，要先經過它才能給電腦用",
        "icon": "💡",
        "s": "6416c92a9f273e59",
        "e": "nTQk3gfVVeytlvVtFqnB5QMaMBBJB/2jc+QkVhAPBrNtZvjZt+TdgmA3bCRZGzw1YP838t4fHwUWgxhT50nNL455w46WT06t2LoBuqUiys3Mddv7iwLAT4u6qftlVXV6jrSHKcuXZ2h756DGrabjMRO8/+I="
       },
       {
        "t": "中華電信、台灣大哥大提供的「上網服務」",
        "icon": "📶",
        "s": "c7faed069c066161",
        "e": "a6a8jifxAtdVbGOVZHwMH7UTFEUrGpyq4qWVtBvYnzT6nvfkCcCoLPms27pW+wVEAuLKGNAmY42Il+DjeBjtsZpGZPka5OV9pZe6dKV41m+tHP4X"
       }
      ]
     }
    ]
   },
   {
    "goal": "幫教室、家裡接上網路：依序點出設備（🎲 每次電腦台數不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "netChain",
      "n": 3,
      "prompt": "幫這個地方接上網路"
     }
    ]
   },
   {
    "goal": "算算看：最少要幾台交換器（🎲 每次數字不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "portsCalc",
      "n": 3,
      "prompt": "網路孔夠不夠？"
     }
    ]
   }
  ]
 },
 {
  "id": "N2",
  "icon": "🧵",
  "title": "網路線材大比拼",
  "book": "2-1 網路的連接",
  "learn": "網路要靠「傳輸媒介」把設備連起來，有線網路常見三種線材：<ul><li>💡 <b>光纖</b>：用<span class=\"hl\">玻璃或塑膠纖維</span>傳光訊號，速度快、傳得遠，但成本高 → 多用在網路的<span class=\"hl\">主要幹道</span></li><li>🔀 <b>雙絞線</b>：<span class=\"hl\">成對的電線互相纏繞</span>，減少電磁波干擾；傳輸距離短但成本低 → 電腦教室、家裡最常見</li><li>📺 <b>同軸電纜</b>：以<span class=\"hl\">銅芯</span>為中心，外面包絕緣體和銅網，傳得遠 → 大部分有線電視訊號；以前也用在區域網路，價格較高，已被雙絞線取代</li></ul>資料到你家的路線：ISP 用<b>光纖</b>接到用戶端 → <b>數據機</b>轉換訊號 → <b>路由器</b>分配 → <b>雙絞線</b>（或 Wi-Fi）送到設備。",
  "stages": [
   {
    "goal": "認識三種線材（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這是哪一種線材？",
      "pick": 5,
      "buckets": [
       {
        "id": "fiber",
        "label": "光纖",
        "icon": "💡"
       },
       {
        "id": "tp",
        "label": "雙絞線",
        "icon": "🔀"
       },
       {
        "id": "coax",
        "label": "同軸電纜",
        "icon": "📺"
       }
      ],
      "items": [
       {
        "t": "用玻璃或塑膠纖維，靠「光」傳資料",
        "icon": "✨",
        "s": "d07f5a91aba9ecc0",
        "e": "ImeGo3YsMPsjl6RrPRhOrRKIhf6nNOJ+gIJT/SN/ncUqJN8ry07FAcyaiFaRKgAKOwJ7s8AH8tZAwBx/YTC5LMh0CqCCHZUU/WK1jiUl4TR4t34LOClgqVbbQzHOT0Zlm3U="
       },
       {
        "t": "兩條兩條的電線互相纏繞，減少電磁波干擾",
        "icon": "🧶",
        "s": "c14caaa1c9dec921",
        "e": "03Vk00XkHlh2ugXgD8ukgdCiyBYhAMtxGvUAwIQy879czB8FDL27+6c8tLmHT+5cdE+RVboFrrq2gJJl9Aubt3HRceGT7vX49kYBCCDCWet9oXaScxky5DLqb1Xkgs/SRYY="
       },
       {
        "t": "中間一根銅芯，外面包絕緣體和一層銅網",
        "icon": "🥢",
        "s": "6a7d6e7c2a06e24f",
        "e": "Tl/AsZNGJR8Raybb9A69VT0oi3HMI6tS4M7g5GBo55HoeKfl02Q4VsXlkmsBeFEpTci/vG9qoF6ZEHH9Gg+yP7iBqygrW/j+H+alHWGW49w5JeA+Magy2pjweV0k7BqPkRx6rwgLunygfA=="
       },
       {
        "t": "電腦教室裡，每台電腦接到交換器的那條線",
        "icon": "🖥️",
        "s": "924c4d8f2d975e91",
        "e": "YgXJPVaqZPI43+r4gn/9ALujHV1y7w36DfpdDlQXgU23EFFTs/8zkmIhptFUtUT/wSrLGu2MISzNlRgBWFpx+YTBhZn0hzgXsvUNd6DXiSkUvQ8/t2Z9MkVr3Zo="
       },
       {
        "t": "把有線電視訊號接到電視盒",
        "icon": "📺",
        "s": "a52b1681f0b266aa",
        "e": "Sd32GokruVPPBci3ZYFUNo4l/tDBg6rehl77+pJ2Pmtl7jmL4qMegE6Qhios7J5Rh2JWTx6owk6vm4y2IKrTxjsCSrOqpS97Dphch0td+wONuUN2hXEBogI="
       },
       {
        "t": "連接城市之間、甚至跨海的網路主幹道",
        "icon": "🌊",
        "s": "dc4f4f29558695f9",
        "e": "jndIvjd/5EdFHTlS9rhio7q3oQhuVBhsOAoE44YWRUm7FaP5GNbXX96D0Y+IDU4YJbxLWP83MTYpbj/h8PpHZK5pVGyFu9UQaKM8/SpuFvpOxqrfbsIZ3So="
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "光纖和雙絞線比一比：這句話說的是哪一種？",
      "buckets": [
       {
        "id": "fiber",
        "label": "光纖",
        "icon": "💡"
       },
       {
        "id": "tp",
        "label": "雙絞線",
        "icon": "🔀"
       }
      ],
      "items": [
       {
        "t": "傳輸速度快、傳得遠",
        "icon": "🚀",
        "s": "ef6505475dfcff63",
        "e": "p++ESFBaT1I4rf4UKWjXyDg+W+OlFfAg4R7Ezme06MdaTRu2J8/19dcPfORcbcSLzWOyUlS5sY9BJWNF5S6bA0keZu4U25U="
       },
       {
        "t": "成本低，適合一間教室這種小範圍",
        "icon": "💰",
        "s": "f8976420acdabf2a",
        "e": "SOuGg23loRhiTGl8yn0LF4Qmxbm+k1QXrNID0ENfNTmaMec42PNA0hjnpid0li0qY7PAVV1D2/fqa41/cHC68m61Xsj40QymWuqHcU0d8rDylGBTQprmlew="
       },
       {
        "t": "成本高，所以多用在主要幹道",
        "icon": "💸",
        "s": "ffa57311d789fc2d",
        "e": "pDiVhTGcoizliGkAH19ddntGQKe3+L9UHOOG9XgP4MYQotBaXnKZn0ZUNVzvwahYHoTHEI0G+JJPjbHd6ZXSq3/6RDtF4MhZ7l9Sqmrjtl+A1H4ssE7Km5458js="
       },
       {
        "t": "傳輸距離比較短",
        "icon": "📏",
        "s": "0c5ffa0c2ecc6300",
        "e": "NagsiZ0MOnQyUeLckivbw3sRLXh+ca+jRks5cN5GjiWKUIPSjnD40cdTA2TCaj5j8RSyNxt7NShtM4U2F5x3zeV1RPA5nrIN3bJkuX29vNmA2dmDrpFrmGM="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "把網路從 ISP 送到你家電腦的路線排好",
      "s": "450015bd264ff6c1",
      "items": [
       {
        "t": "光纖接到用戶端",
        "icon": "💡"
       },
       {
        "t": "你的電腦",
        "icon": "💻"
       },
       {
        "t": "路由器分配給各設備",
        "icon": "🧭"
       },
       {
        "t": "ISP（電信公司）",
        "icon": "🏢"
       },
       {
        "t": "雙絞線送到電腦",
        "icon": "🔀"
       },
       {
        "t": "數據機轉換訊號",
        "icon": "📞"
       }
      ],
      "seq": [
       "1tEYnXdQ+aYPToy2NSLJi8Nix6n517k9JkS9JPk4",
       "RdVobss3DVVswFavqjzQdW+ygta3VIH47BRDK7UW",
       "NxpbDXhXr+h9oLmwK25oaysUqbQy673pN/Jyfmqo",
       "2dOxURJD9V+q4zkL1kzs+HxveKWFOQ+7V3ADqUCi",
       "H0DhieVbDZvdZYsY3Q27ZrxaIc4hSxBzS4+KqbAk",
       "Fta3vE3/1OW2soOkXlitYRD//6ctRKQS4rZlI1EXPQXF6M3PN/j4JF4+05BnPc7GAxdU3U9ds8ZrZ8gxDvIaSsd3hzXF1CYmWji3VmJ9V5F93buuhmWzhp47pFkCnM/8ECL5P2uRNHbBp9eQucWC5G0i0GRCWLgNnqb1tMqM7DTTOcWjUDj1BDqLFzXsT4OeDYCLELaW2InkCrONJXvN0VWJPNgqXXgZgsAv"
      ]
     }
    ]
   },
   {
    "goal": "幫每一段線路選線材（🎲 每次抽不同的線路）",
    "rounds": [
     {
      "type": "gen",
      "gen": "cableAssign",
      "n": 2,
      "prompt": "選線材"
     }
    ]
   },
   {
    "goal": "更多段線路、一次全對才算（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "cableAssign",
      "n": 2,
      "prompt": "選線材：挑戰",
      "hard": true
     }
    ]
   }
  ]
 },
 {
  "id": "N3",
  "icon": "📦",
  "title": "封包快遞",
  "book": "2-1 TCP/IP 通訊協定",
  "learn": "網路上傳資料，不是整份一起送，而是<span class=\"hl\">切成很多小封包</span>，到了目的地再組回來。<ul><li>🔢 <b>TCP 協定</b>：幫每個封包<span class=\"hl\">編號</span>，並用確認訊息檢查封包有沒有送到，沒到就重送</li><li>📮 <b>IP 協定</b>：幫封包加上「網路位址」，標明<span class=\"hl\">從哪裡來、要送到哪裡</span>，像信封上的地址</li></ul>封包可能走不同的路、不照順序抵達 —— 接收端靠編號重新排好。",
  "stages": [
   {
    "goal": "TCP 和 IP 的分工、傳送流程（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這是 TCP 還是 IP 負責的？",
      "pick": 5,
      "buckets": [
       {
        "id": "tcp",
        "label": "TCP",
        "icon": "🔢"
       },
       {
        "id": "ip",
        "label": "IP",
        "icon": "📮"
       }
      ],
      "items": [
       {
        "t": "幫每個封包編上號碼",
        "icon": "#️⃣",
        "s": "2f5109db7341a8b4",
        "e": "PGCMcuH8CZaUGuQSEMYTDbuh0gSLW9MfCRnjrVmdnA91FeDR2IWfnfxoqSaotmYGV350L53q3Wb9nXR+cZPZAw=="
       },
       {
        "t": "檢查封包有沒有送到，沒到就重送",
        "icon": "🔁",
        "s": "0c3c82482e7eb6dc",
        "e": "wo7eYof6XRKEoMYZDzLljqzx1tcov9kn3DSFXs3Y9lNeFwyATiFGrRSQUmMQo9DJU1nuJKrObylHsIqkSRONREcypYd8Y/5j3ayFtLJxz1UBAfYz"
       },
       {
        "t": "在封包上寫上來源和目的地的網路位址",
        "icon": "🏷️",
        "s": "7a1f195522ab9c60",
        "e": "BM1NjdaVE2IQI/Clbuwf7uujGT2LOSFaG70s4U0NViSLXq3tB8yH2bZpLJeJZWehy2Nap7po+nMu0aBdgVoS15+oRFzA"
       },
       {
        "t": "像信封上的收件人地址",
        "icon": "✉️",
        "s": "2b33ab8925d76ee9",
        "e": "0eB1weLK77U0+kKXHm2WofgoXSIg/QuL535efosVe+L9gg33IwMOhE5/RQPUdR7ln9RXdwvYzbXYcnaYOYc8ucRMdswUtBEPL18="
       },
       {
        "t": "收到後依號碼把封包重新組回原本的資料",
        "icon": "🧩",
        "s": "77c239dc46f44ca6",
        "e": "iJHm7ZAz3cmTZWv/3v4c93J0iDk9hmFK7dnU6LL1oOHTD/Y9kL0af1N6BWyUGRjhydZMGm86S4kvewQ+Yl6pxAvhkgIJgVfpSjw7CJEawA=="
       },
       {
        "t": "沒收到對方的確認，就把封包再送一次",
        "icon": "📤",
        "s": "3632872866ea3c80",
        "e": "h/No50r5mSxfjc2FNkCPYZJfan5DqJRm3UqNptBAkIOd0BRJ0ZA1hh08OSba38cKJ4Q9+MU+wlgjTfF0i4Ti+kSthjIbKwBiyQ=="
       },
       {
        "t": "讓路由器知道封包要往哪裡送",
        "icon": "🧭",
        "s": "d14870f45e8cfb78",
        "e": "/UoA0Duzq++eRv/JrZRMZp7QzPs7w6XuwUwnzYbSlqzPhLjDMgem1aKzsfStCpU9OjR/jyMA89K1IhbkoGkzaJK6LMb8"
       },
       {
        "t": "每台上網的裝置都要有一個",
        "icon": "🖥️",
        "s": "0e43bfe3d651cc39",
        "e": "QhfmwvalajAoRKcnlzfZMUgNzTe2cCWVawEb1kSRqms/uV1+o8TISd1QC4ID1CS9j5W/P7C61f+691UW3KWzb/R/H94XUmj2"
       }
      ]
     },
     {
      "type": "order",
      "prompt": "把「傳一張照片給朋友」的過程排好順序",
      "s": "905cdbde210210cd",
      "items": [
       {
        "t": "IP 加上來源與目的地位址",
        "icon": "🏷️"
       },
       {
        "t": "路由器一站一站轉送",
        "icon": "🧭"
       },
       {
        "t": "TCP 幫封包編號",
        "icon": "🔢"
       },
       {
        "t": "回傳「收到了」的確認",
        "icon": "✅"
       },
       {
        "t": "照片被切成許多小封包",
        "icon": "✂️"
       },
       {
        "t": "接收端依編號重組",
        "icon": "🧩"
       }
      ],
      "seq": [
       "mlQEHJqxjWWgG1mwfKGTPweyrm7FWpZkKzkccSgK",
       "5ZRHdR/0no96zGrkdIm28NuFDXtaCsOqr/tiCnhd",
       "2DpyNPy0I7XBT8DFFRz47LUNxXdIGIWatqKv+J+Q",
       "slylwpVisUxShKc+Xy6T9vaPloNyX+fOiOg30tjK",
       "JDideYDeUw+AEe+xZDE6WifgjbP8jh08q2piipqq",
       "1UhbeKe1R/z2YoOABx9lILWLJhysanNfb0gSKs0UFbiqSYMuYN5RH85MRMSi6Q9yjUVTw+zWhy7GpxlFNL8ukrTzsqvSGTIvIIm0uCY9IEqO5QAssJ2oa/QiUz5f70zfX+7amacTGiQFa2663VILQloLhViY/iy8iWykdWjfXETj25nZ8XRLOPv2I3c="
      ]
     }
    ]
   },
   {
    "goal": "重組亂序的封包、找出遺失的封包（🎲 每次訊息不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "packetOrder",
      "n": 2,
      "prompt": "封包重組"
     },
     {
      "type": "gen",
      "gen": "packetLost",
      "n": 2,
      "prompt": "要重送幾號？"
     }
    ]
   },
   {
    "goal": "封包多、有遺失也有重複收到的（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "packetLost",
      "n": 3,
      "prompt": "要重送哪幾號？",
      "hard": true
     },
     {
      "type": "gen",
      "gen": "packetOrder",
      "n": 1,
      "prompt": "封包重組"
     }
    ]
   }
  ]
 },
 {
  "id": "N4",
  "icon": "🔎",
  "title": "IP 位址偵探",
  "book": "2-1 網路位址",
  "learn": "每一台上網的裝置都有一組網路位址（IP）。<ul><li><b>IPv4</b>：用 <span class=\"hl\">4 組 0～255</span> 的數字表示，例如 192.168.7.1。每一組其實是 8 個位元：11000000 ＝ 192（上學期學過的二進位！）</li><li><b>IPv6</b>：IPv4 不夠用了，改用 <span class=\"hl\">8 組</span>、每組 4 個十六進位數字，用「:」隔開</li><li><b>公有網路位址</b>：由 ISP 分派，連接外部網路</li><li><b>私有網路位址</b>：只在自己的區域網路內使用，要透過轉址服務換成公有位址才能上網。IPv4 的私有區段：<br><code>10.0.0.0～10.255.255.255</code>、<code>172.16.0.0～172.31.255.255</code>、<code>192.168.0.0～192.168.255.255</code></li></ul>",
  "stages": [
   {
    "goal": "判斷 IPv4 位址合不合法（🎲 每次都是新的位址）",
    "rounds": [
     {
      "type": "gen",
      "gen": "ipValid",
      "n": 5,
      "prompt": "合法的 IPv4 嗎？"
     }
    ]
   },
   {
    "goal": "點位元湊出數字、把 8 個位元換成十進位（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "octetBits",
      "n": 2,
      "prompt": "一組 IPv4 ＝ 8 個位元"
     },
     {
      "type": "gen",
      "gen": "bitsToDec",
      "n": 2,
      "prompt": "換成十進位"
     }
    ]
   },
   {
    "goal": "公有還是私有（含邊界陷阱）、整串 32 位元換成 IP（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "ipPrivate",
      "n": 5,
      "prompt": "公有還是私有？"
     },
     {
      "type": "gen",
      "gen": "ipBinary",
      "n": 1,
      "prompt": "32 個位元換成 IPv4"
     },
     {
      "type": "gen",
      "gen": "octetBits",
      "n": 1,
      "prompt": "不看總和湊出數字",
      "hard": true
     }
    ]
   }
  ]
 },
 {
  "id": "N5",
  "icon": "🔢",
  "title": "IPv6 新地址",
  "book": "2-1 網路位址（延伸學習：IPv6 位址表示）",
  "learn": "<b>IPv4</b> 只有 32 個位元，位址不夠用了 → 改用 <b>IPv6</b>：<span class=\"hl\">128 個位元</span>，可以提供 2¹²⁸ 個位址，比 IPv4 多約 8×10²⁸ 倍。<ul><li>128 個 0 和 1 太長了 → 每 <span class=\"hl\">4 個位元換成 1 個十六進位數字</span>，變成 32 個十六進位數字</li><li>再分成 <span class=\"hl\">8 組、每組 4 個</span>，用「:」隔開，例如 <code>2531:0cb7:03a6:0000:0000:0000:0000:0f12</code></li></ul><b>省略的三個規則</b><ol><li>每組<span class=\"hl\">開頭的 0</span> 可以省略：<code>0cb7 → cb7</code></li><li>整組都是 0000，可以寫成 <code>0</code></li><li>連續好幾組都是 0，可以用 <code>::</code> 代替，但<span class=\"hl\">只能用一次</span>（用兩次就不知道各代表幾組）</li></ol>例：<code>2531:0cb7:03a6:0000:0000:0000:0000:0f12</code> → <code>2531:cb7:3a6::f12</code>",
  "stages": [
   {
    "goal": "IPv4 和 IPv6 的差別、省略規則（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這是 IPv4 還是 IPv6？",
      "pick": 5,
      "buckets": [
       {
        "id": "v4",
        "label": "IPv4",
        "icon": "4️⃣"
       },
       {
        "id": "v6",
        "label": "IPv6",
        "icon": "6️⃣"
       }
      ],
      "items": [
       {
        "t": "由 32 個位元組成",
        "icon": "🔢",
        "s": "2bf862c0ec3133d0",
        "e": "GJuXkSAOfvnJKIs9YUdCtkHRls0ns96txyBaS8cAc50hZeuDJhkXfBtyeR0DOgfVNQOsGudz4ocOspYjl+iCIj+y+JYw4OR/5Ga6FENOJg=="
       },
       {
        "t": "由 128 個位元組成",
        "icon": "🔢",
        "s": "b180721ad8cc7dba",
        "e": "8P3pkJn69MyKx5wAajTkonrrCNmVvl9q3z/ZDWDR/bLG9u9TFQ1GExLXsRrRJNAF0J3YXlejPAw9hj9S2fWZf2cmxbANOFk32qbzMz5nOTMY"
       },
       {
        "t": "用「.」分成 4 組十進位數字",
        "icon": "⚫",
        "s": "28a6d4778ec04e77",
        "e": "oXHpuItFrf2Km1QmS04AY+R0dWyj9Nba3SZsz0wnvtF6xkq152D0OsTrwRfc06lJ2TcykQ6FNaosIno="
       },
       {
        "t": "用「:」分成 8 組十六進位數字",
        "icon": "➗",
        "s": "0423fbd79bb9afc1",
        "e": "t13BvjR+4rz4Mxq1BsjQtW31Z6/GbpmSq21oh08sp0Ae2tEI8LGlyzVOFTwOXYeCImFZ8O8bGvXB+gP28Sfk6PXFVL3kkZHI"
       },
       {
        "t": "2001:db8::1",
        "icon": "🏷️",
        "s": "141235cbde1ade1d",
        "e": "iQ387az6JW/cZBR0KKCBu9vCa+bodW+bZ2bdxACOtXWTsmOvIOiqKgPxeVyQpwsTss7u5wmdwdniGGovWfbh40DEzZiVBoRMdcS6DGecIJBdkYOL9jvPIwgpPnxuhUI5VsdDh7O3eowhWH4Z"
       },
       {
        "t": "140.112.53.15",
        "icon": "🏷️",
        "s": "21b9880d0e2f5077",
        "e": "WxPW7AF/CtEXlPxknJ8pR527CI5z4tvBQvgludMJzg+LBWy9IpEr3pSUeKYZnoVk1QEHOfwYGY+f9D26DSVMJDfIeU5g5pZrA3W5fEMypvajLX4GBw=="
       },
       {
        "t": "位址數量不夠用，才需要換新版",
        "icon": "😰",
        "s": "6b6edd4733e53d5b",
        "e": "+yGhYoRKK0oHUNVtrCiKcBS1LWmT1BrCDnHy1aRbde8ZCVJCUjKrMEKnB54o5SWjZ0w8iORwZm1nSjWEECkAra51vseghJpmkj7RYdw5a9vDTpZ0vWT8mNIlig=="
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "這樣省略，對不對？（原本的位址寫在題目裡）",
      "pick": 4,
      "buckets": [
       {
        "id": "ok",
        "label": "正確",
        "icon": "✅"
       },
       {
        "id": "bad",
        "label": "錯誤",
        "icon": "❌"
       }
      ],
      "items": [
       {
        "t": "2531:0cb7:03a6:0000:0000:0000:0000:0f12 → 2531:cb7:3a6:0:0:0:0:f12",
        "icon": "✂️",
        "s": "68a2e55a7b23bbf8",
        "e": "QA0B9EAOquuhj1YTqqjIyjxEYF/b158E8jvk3+uKysD1juN/rtmNd75JMzuguQu480pI5xDKiX3gJ4zf7N8Kwi6JE+ejpDh1IKdK98a0Pdjot8Hfy1PRmOlj0Qs9LZygdVlUqI+66dAibM5tzw=="
       },
       {
        "t": "2531:0cb7:03a6:0000:0000:0000:0000:0f12 → 2531:cb7:3a6::f12",
        "icon": "✂️",
        "s": "140bea8d25b7b5a1",
        "e": "XyKcQWhlHnLVF/xxnkzKnM25AitNfaHk7FE+z5gL19Wqmn2c0D19dSmAVg4gPzj1GpFnAcoQjONwbtTHrZKitOc9LQRb+ndQIo8H4UCsSr5pRTFUl7A5feQIvG4aJcdJwjs+fOQ="
       },
       {
        "t": "2531:0cb7:03a6:0000:0000:0000:0000:0f12 → 2531:cb7:3a6::f1",
        "icon": "✂️",
        "s": "79fe3d3c2931e3b6",
        "e": "bYMxDclCtLtqerNEPkXDr4M6ZZSV8UloroiphesuHeR8vg7zSzNBiUKoY2MpBcrzwJ67Mr3KU4kOiVD9bDN+nB1aEF0vkG15SrLxz5owX5totVqgM+DTj5WqpIEbdsQhtDbkW5/V4yxUpevg2FshNg=="
       },
       {
        "t": "2001:0db8:0000:0000:0001:0000:0000:0001 → 2001:db8::1::1",
        "icon": "✂️",
        "s": "5b2f3b7ab814d5e9",
        "e": "kIFJK1rkQQi0JKwBOqxWBp8hrWBDvroC0WNEK8YlUVuFfuCZJ0fqyL4MEXkFAefp0VUjoNiYlS9QcAsPpjJ2jUi9Ou422FqLZ9EMS+UsS0Kgv8ZtvHFjZxz3FOF17ZsVdBhzawdt1EnQm6TJgffa6OWQI3oUlhLZzXz8BstakNM="
       },
       {
        "t": "2001:0db8:0000:0000:0001:0000:0000:0001 → 2001:db8::1:0:0:1",
        "icon": "✂️",
        "s": "a7c3af03cd772338",
        "e": "cVWEe+vam2yZkZFkRMteJOWZFCJmgObm7pBX3tBkVEWSkBySVG2gFnltYHW3C9Hrioov8VSk60WkwqGDEa3r2Z174ZtrTnW9LiEZdKObsrC93sL3ouMvwo4zNoaKAaEZY+OaGIJq7HnLOg=="
       }
      ]
     }
    ]
   },
   {
    "goal": "位元換十六進位、用規則 1、2 省略（🎲 每次位址不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "hexBits",
      "n": 2,
      "prompt": "4 個位元 → 1 個十六進位數字"
     },
     {
      "type": "gen",
      "gen": "v6short",
      "n": 2,
      "prompt": "IPv6 省略"
     }
    ]
   },
   {
    "goal": "寫出最短寫法、把 :: 還原（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "v6short",
      "n": 2,
      "prompt": "IPv6 最短寫法",
      "hard": true
     },
     {
      "type": "gen",
      "gen": "v6expand",
      "n": 1,
      "prompt": "IPv6 還原"
     }
    ]
   }
  ]
 },
 {
  "id": "N6",
  "icon": "🌐",
  "title": "網址拆解員",
  "book": "2-1 網域名稱",
  "learn": "IP 位址是一串數字，很難記，所以有了好記的<b>網域名稱</b>。<b>DNS</b> 就像網路上的電話簿，負責<span class=\"hl\">把網域名稱查成 IP 位址</span>。<br>以臺灣大學 <code>www.ntu.edu.tw</code> 為例，由左到右是：<ul><li><b>主機名稱</b> www：依提供的服務命名</li><li><b>機構名稱</b> ntu：通常是英文縮寫</li><li><b>類別名稱</b> edu：機構的性質（edu 教育、gov 政府、com 公司、org 組織）</li><li><b>地區名稱</b> tw：國家或地區的英文縮寫</li></ul>",
  "stages": [
   {
    "goal": "網址的四個部分、機構類別、DNS 流程（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "標出來的這一段是網址的哪一部分？",
      "pick": 4,
      "buckets": [
       {
        "id": "host",
        "label": "主機名稱",
        "icon": "🖥️"
       },
       {
        "id": "org",
        "label": "機構名稱",
        "icon": "🏛️"
       },
       {
        "id": "cat",
        "label": "類別名稱",
        "icon": "🏷️"
       },
       {
        "id": "area",
        "label": "地區名稱",
        "icon": "🗺️"
       }
      ],
      "items": [
       {
        "t": "www.ntu.edu.tw 的「ntu」",
        "icon": "🌐",
        "s": "f8b2e1e46140adc8",
        "e": "mULVX8C86xN8iDjNvvAaWH6APxPEhJMv+c6spgajdbcSRHYv2K4Dgcws+l1IbQ75UuWo/ZIXTGw9Zkt7nevSoMpLSz3PrwDsYnkW"
       },
       {
        "t": "www.ntu.edu.tw 的「tw」",
        "icon": "🌐",
        "s": "b1390b4c72047581",
        "e": "5+fEKUBeQ5a8wm5Om1ICMB9dlOptLPx1HaDlTOA4mMXnIlCK+EfkyniceKHGs1YPfDFcP1caEfc="
       },
       {
        "t": "www.taichung.gov.tw 的「gov」",
        "icon": "🌐",
        "s": "5a9129979315531d",
        "e": "pzL2YiwDl3iVMOymvjGNxsW3fd4BeUVCYD+Y0X8yEkHRPx6o208DaU2Fij0JJCOspzkBK49JH6rKR0Y2FZwa"
       },
       {
        "t": "mail.google.com 的「mail」",
        "icon": "🌐",
        "s": "357fa82d91deef06",
        "e": "bpaEX7Xr1eOMTIa3wZQpEn2zDNEX9v92GLM8ZzOyEZUyjdiTQoNEioqRJ0PRb8oPw/Wa2i5aHrlNpdPC0tekr0VFs+cl3dEWK8WE6YZQ9OA0nfB7/uF2yHebXQ=="
       },
       {
        "t": "www.taichung.gov.tw 的「taichung」",
        "icon": "🌐",
        "s": "bb40441ba1f579fc",
        "e": "/7r6IvfbXmHfNRU+z2QKh/DYeVg8+8dqCZ5R7+D8XMGlWn3WD+nH/QYcCuQytAaxUbRg2GgA+WMetkg+fcmwGDddCy0ISYpPSWAwEZM="
       },
       {
        "t": "www.yahoo.co.jp 的「jp」",
        "icon": "🌐",
        "s": "0b9dc4520994c1cb",
        "e": "E/+0CNYZluMLRH+IzY24X00EVQS6X2QULxih2Cn+jpo1O/qUvhem/qapx8mSq/JeIthvDo/pgTk="
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "這個網址最可能屬於哪一類機構？",
      "pick": 4,
      "buckets": [
       {
        "id": "edu",
        "label": "學校",
        "icon": "🏫"
       },
       {
        "id": "gov",
        "label": "政府",
        "icon": "🏛️"
       },
       {
        "id": "com",
        "label": "公司",
        "icon": "🏢"
       },
       {
        "id": "org",
        "label": "非營利組織",
        "icon": "🤝"
       }
      ],
      "items": [
       {
        "t": "www.qfm.kh.edu.tw",
        "icon": "🌐",
        "s": "879923232b85ad70",
        "e": "Pge/hgMqpsNgsKTERWSeexPSF6hfdNJEKjJNPKjpYV+qXaZQbN0G4eko8uYLPmEcUyH72BFoT92firfmuawQl2tsFB6q1R1GQw=="
       },
       {
        "t": "www.taichung.gov.tw",
        "icon": "🌐",
        "s": "aa9900ae82dfdd18",
        "e": "ea/XEoKZnoIrzk6v7PiMCH20REXYOuGv3QVjUsXt3szqE9FlKfdhsjzGzZnbSJTb68UJtNB48YSe6qoOYg=="
       },
       {
        "t": "www.pchome.com.tw",
        "icon": "🌐",
        "s": "539336901c1b2647",
        "e": "w8t1n+kVsS3O21Qb5uxBlKV3k8r62vB+w7C07jc2RAlvmBx4x/zVv2dynBj/kQPVQTpnNzU8PA=="
       },
       {
        "t": "www.wikipedia.org",
        "icon": "🌐",
        "s": "0defce9f642d99bf",
        "e": "QeHHbJ/Whqnqol8uwrrP7Oy/4qak8Np2haSoOFWzL7OlU6ot1+/MGYQL3GvtVRRcg8gx/ZVu1r8UE7kUObtp8EE+/lXs3pM2jpaMdH4FNuT4Rg=="
       },
       {
        "t": "www.president.gov.tw",
        "icon": "🏛️",
        "s": "cf86b8655dbb06b0",
        "e": "N3OZS6CnCHFelifiUz4VUyTap6JpXFA3a09dzSQ/Awfp+YYFUw8ltJIKanJZQz9qtNae0Y5h/YsGJ7Bb"
       },
       {
        "t": "shopping.yahoo.com.tw",
        "icon": "🛍️",
        "s": "77794179f343e85a",
        "e": "tWEMozG6EUgCoYy2kxuPow9uMTe9b4nzyIy8MAxs+c6zMOLjrxDNHCHjmHhYGgszvTyAljfE4eVhtxoF3WM9UopvxTDsnwfD"
       },
       {
        "t": "www.ncku.edu.tw",
        "icon": "🎓",
        "s": "147aae273a80d189",
        "e": "gVJjILzbdmHCTygj0XdSsJ76YN7sGJCGW/8DNkOCho79muORNMzg8hKpxaArws6cXdsl5OfCx3B7O6xM"
       }
      ]
     },
     {
      "type": "order",
      "prompt": "在瀏覽器打入網址按 Enter 之後，依序發生什麼事？",
      "s": "4000f2ed1e606d23",
      "items": [
       {
        "t": "DNS 把網域名稱查成 IP 位址",
        "icon": "📒"
       },
       {
        "t": "瀏覽器把網頁顯示出來",
        "icon": "🪟"
       },
       {
        "t": "伺服器把網頁資料傳回來",
        "icon": "📦"
       },
       {
        "t": "瀏覽器拿到網域名稱",
        "icon": "⌨️"
       },
       {
        "t": "依 IP 位址連到網站伺服器",
        "icon": "🖥️"
       }
      ],
      "seq": [
       "q886kdyLcip18UtszZBJLUk2JLEYXnECWoyya1+u",
       "4Nlu15rPGUWN0BVoN5Tx4GFykZmO9Z2yMXD5mb7A",
       "imN0+opy5geEcAtd8KrZh75tEd0gA2G+yti7RP78",
       "efllZPHsI2+2h2//rZ8UZAowbIMmwzY1wGjwhxL6",
       "yroG2SQlC5CIrHV16vW6lhaANqkMsv4JQ6QPohqjJexlw0IH2DQagcc9nhIzkuxlK5ippTrqa+gxgTtxPkE5UkzVI7Sc6KPb2inuBGmALM2ReSAsg0w69gZpgqm/cPhor5Ogaw=="
      ]
     }
    ]
   },
   {
    "goal": "把網址拆成主機、機構、類別、地區（🎲 每次網址不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "urlSlots",
      "n": 2,
      "prompt": "網址拆解"
     }
    ]
   },
   {
    "goal": "看網址判斷是哪一國的什麼機構（🎲，含各國不同寫法）",
    "rounds": [
     {
      "type": "gen",
      "gen": "urlRead",
      "n": 4,
      "prompt": "這是誰的網站？"
     }
    ]
   }
  ]
 },
 {
  "id": "N7",
  "icon": "📨",
  "title": "網路服務百寶箱",
  "book": "2-1 網路服務應用",
  "learn": "常見的網路服務：<b>全球資訊網</b>（看網頁）、<b>電子郵件</b>、<b>即時通訊</b>、<b>社群平臺</b>、<b>隨選視訊</b>（想看就看）、<b>物聯網</b>。<ul><li>寄信用 <b>SMTP</b>，收信用 <b>POP3</b></li><li>網址開頭是 <b>http</b> 或 <b>https</b> 的，都用超文件傳輸協定傳資料；<span class=\"hl\">https 的 s（secure）表示傳輸過程有加密</span></li></ul>",
  "stages": [
   {
    "goal": "分辨六種網路服務（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這是哪一種網路服務？",
      "pick": 5,
      "buckets": [
       {
        "id": "www",
        "label": "全球資訊網",
        "icon": "🌐"
       },
       {
        "id": "mail",
        "label": "電子郵件",
        "icon": "📧"
       },
       {
        "id": "im",
        "label": "即時通訊",
        "icon": "💬"
       },
       {
        "id": "sns",
        "label": "社群平臺",
        "icon": "📸"
       },
       {
        "id": "vod",
        "label": "隨選視訊",
        "icon": "🎬"
       },
       {
        "id": "iot",
        "label": "物聯網",
        "icon": "📡"
       }
      ],
      "items": [
       {
        "t": "用瀏覽器查學校網站的行事曆",
        "icon": "🗓️",
        "s": "7f80f6d9d1ce9348",
        "e": "q74XclPTJFMcyV846gNnAjZFsMfdBcsLe1YqWPYeejCUnrRosqD1x/8KOOE9B+7b3+8SBYUY6M9FfMsxpYAehu6VAytVWJL7fi8="
       },
       {
        "t": "把專題報告當附件寄給老師",
        "icon": "📎",
        "s": "555e6b95cfc518c3",
        "e": "XscDyCYWBE4J6ChqdjHzR+U1Vif6JIsNbX9kreT33b7MVZc6BO6T41opGqUs/sOBvIuZouBALTzhg9JwmbVKZP8bodO4jGpotPikPgrWoWRZw3sRnunFEIfg39HDBSm4MoDiGtrZp43eUw=="
       },
       {
        "t": "畢旅群組大家即時討論要帶什麼",
        "icon": "🗨️",
        "s": "d0ae0add7351c9fe",
        "e": "Ta69p6LAm0ARxSmuA0TYuYqmoHwB6nDtuOzSL2h1LzRe8ph/BI/SsCe/nEcxJjDiPs9sw+2NWPPsGn9nZv0ViHbgcfjwTGtHtodu9S6iEEeT4Q=="
       },
       {
        "t": "發一則畢業照限時動態",
        "icon": "🎓",
        "s": "82d356f8d3689697",
        "e": "64t6pPVTbKZY2Zk4PsEUq3yIpFlblBYMLVYbn3eo6JcyMoYsSFon3FsBn7HlKwUzHDbxbODmeMLa/XelI2bl7FG6oAuD2ptk3hXpQj0K7j2ypWXaZeA8ECGJ2w=="
       },
       {
        "t": "晚上想看哪一集影集就點哪一集",
        "icon": "🍿",
        "s": "03f597335bf07d66",
        "e": "rjMOSK5e1ds1lzEfEuzCyQwx1vZueve82+2U50R7r+HR0+KVGgRi32HsBcDML6vr/RNTylc9YW70JCBEaU7zJmCxa8cgfg/fnIOLr6/rILXym04vuRSh9Y2MgSmvZw=="
       },
       {
        "t": "空氣盒子自動上傳 PM2.5 數值",
        "icon": "🌫️",
        "s": "52f9fc1006922150",
        "e": "lTHrk2ng9hl4MytYwgPyYZTaG54GgMHrFlKf/p/b5A5W13MoBTNcijQtBMop8HN3RnVXPiZtRrzquzZPtGRtBHqKnVNxfC0fi8fUiEuaKXoIodUuuw=="
       },
       {
        "t": "上網看老師上傳的教學影片，想看哪段就看哪段",
        "icon": "▶️",
        "s": "d5f3b3808290d092",
        "e": "G3rU0Sy7BzJHQlH5f2CuhXObumjVrYEBMxL23335ZwrgCVKnAe4a7UH4dRkGLX/+vppKMpnoagyLU2QkY6VVZsH2QlfbSPbzdw=="
       },
       {
        "t": "智慧插座讓你在學校就能關掉家裡的電風扇",
        "icon": "🔌",
        "s": "c9bda6fc3c3e119c",
        "e": "a+eTtw6m+ZrXhobg7Im3bEAv0QqNPuDWXB26hO/x4mNvH4RbdVmrZDruU5WPEqNEW168AbH4746Wv9Rk2lMgEqRptg7lBY/Dy1XDmoYIUn8CUhaUMhwZZA=="
       },
       {
        "t": "和同學用通訊軟體視訊討論報告",
        "icon": "📹",
        "s": "e995d07f60f63521",
        "e": "p7p+3UwJ+kVUDLqv1/GnZ8EKXWwRqcTqbEuYfa84DZ8qH8IiG1Tgrgf+bUWuUr5gtriCQIn3hhFjsXbnhGx6fsnq9AkIBZE2Cg=="
       }
      ]
     }
    ]
   },
   {
    "goal": "信件怎麼寄、怎麼收；每件事用哪個協定（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "mailFlow",
      "n": 1,
      "prompt": "一封 email 的旅程"
     },
     {
      "type": "gen",
      "gen": "protoSlots",
      "n": 1,
      "prompt": "配對協定"
     }
    ]
   },
   {
    "goal": "什麼時候一定要加密（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "httpsJudge",
      "n": 4,
      "prompt": "要不要 https？"
     },
     {
      "type": "gen",
      "gen": "protoSlots",
      "n": 1,
      "prompt": "配對協定"
     }
    ]
   }
  ]
 },
 {
  "id": "N8",
  "icon": "📶",
  "title": "無線網路選手",
  "book": "2-2 藍牙、Wi-Fi、行動網路",
  "learn": "<ul><li>🔵 <b>藍牙</b>：傳輸距離約 10～300 公尺，<span class=\"hl\">成本低、體積小、安全性高</span>，可傳語音和資料（耳機、手錶、滑鼠）</li><li>📶 <b>Wi-Fi</b>：傳輸距離約 50～300 公尺，速度快，但訊號容易受環境影響（牆壁、干擾）</li><li>📱 <b>行動網路</b>：手機和<span class=\"hl\">基地臺</span>通訊，走到哪用到哪；現在以 4G 和 5G 為主</li></ul><b>5G 三大特性</b>：高速度（約 4G 的 10～20 倍）、低延遲（約 1 毫秒）、多連結（每平方公里可連約一百萬個設備）。",
  "stages": [
   {
    "goal": "藍牙、Wi-Fi、行動網路、5G 特性（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這個情境最適合哪一種無線技術？",
      "pick": 5,
      "buckets": [
       {
        "id": "bt",
        "label": "藍牙",
        "icon": "🔵"
       },
       {
        "id": "wifi",
        "label": "Wi-Fi",
        "icon": "📶"
       },
       {
        "id": "mobile",
        "label": "行動網路",
        "icon": "📱"
       }
      ],
      "items": [
       {
        "t": "無線耳機連手機聽音樂",
        "icon": "🎧",
        "s": "06b8d71c8c62a290",
        "e": "2Ipvg9VYkqoX0dICroGMPdiEf9XUgo7Mwe/G8y5G1gU5yIFJxYibfCicXDuHIPCR2GAPKIw1R1pYBduHspGP8FctMO+MWQK6nrgSgZty+pZzqYCLzzY7Ag=="
       },
       {
        "t": "智慧手錶把步數同步到手機",
        "icon": "⌚",
        "s": "fffc4d11bf00d329",
        "e": "kPM572UtlzZuQFxEXXhXYsmJ35Rgt5WngNptQK9G1IAoRNNdRhtT8KJwt6kj4t9fJOhNXAHXIBHdotzhasftE1ChBsflODMFmEleidI="
       },
       {
        "t": "在家用筆電看高畫質影片",
        "icon": "💻",
        "s": "ac2fde20b698df94",
        "e": "/Zdpgl6SM0MyQqOJzGTjPDw0bw/y6ZpMPS5JjfnwgmRWh0ArN3QTKn6dPuueL267D8N2aud/zGGgywEd9GXScBZ67Nkh5TWSYWDsvxBpSLhhOHc="
       },
       {
        "t": "電腦教室的平板無線上網",
        "icon": "🏫",
        "s": "84413d9dbb1b2914",
        "e": "NMtZnudBpih218pgtm2DbcpE3xX/xDTr8b7KekpI5atabNZ8pDsZNxhBtuxyr8Uvvm/EwtVfpJxDDz7STqyVHONWZySy6PFylplU"
       },
       {
        "t": "搭公車時用手機查路線",
        "icon": "🚌",
        "s": "48c6b24aadc4a258",
        "e": "n09T0OFSzEu6F3FFjDa9AS1ddvQWU+PKFiZMjTasgbQcz69pPgrJ6SgfOo89WWvOyc2Ijz8rFb6HwwPOfd3Ipqa2TEkEYMYwf6S0urIBkFqRCdKJZHrceG1WMQ=="
       },
       {
        "t": "爬山時打電話報平安",
        "icon": "⛰️",
        "s": "4e7a2575d4401009",
        "e": "Bej2f6/WqMnQeP/cSE+ryP4svs9WPtu1rb+1w2b8697WE4DF8/wMbDHTo/gzkTtortTA2yr6M69+MDchjPTEjQApo1ycHPVbqlaopUuj3Ike2g=="
       },
       {
        "t": "用手機的熱點讓筆電在高鐵上上網",
        "icon": "🚄",
        "s": "8f23278686bdcd16",
        "e": "5cKnDPyHwyy+yJdfCL2EnXdh2dbUht1cMVTob95uSnThtN/8rlGixvApf0ei3Xs5UMgXO5Qnj/Qg469SjleDU2bpLYBbYJF/kst1Y894XPXbll1IEHc="
       },
       {
        "t": "把手機裡的照片傳到旁邊朋友的手機",
        "icon": "📲",
        "s": "334045e0d1924895",
        "e": "RYdrs0RXuUoteyJeJk3I78cWL8oBXsRsIez9NMXCRYKyzdCLM33u+izM8HjkguzeQTunB4zU8RjQz97cwsmEkzLbgaRFugiViByPWnlSlupjZw=="
       },
       {
        "t": "圖書館的公用電腦區無線上網",
        "icon": "📚",
        "s": "ce54d77919befacf",
        "e": "Mjj73lqZ3wgYu1h+hvZbd1Xyc7lWTOSwysQWJHPFxCwpawd8+vet+SLNHRLH0vfPbxttdzq7nDI4r0DlSSEuJEsD+azkEHcC"
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "這個應用最需要 5G 的哪一個特性？",
      "pick": 4,
      "buckets": [
       {
        "id": "fast",
        "label": "高速度",
        "icon": "🚀"
       },
       {
        "id": "low",
        "label": "低延遲",
        "icon": "⚡"
       },
       {
        "id": "many",
        "label": "多連結",
        "icon": "🕸️"
       }
      ],
      "items": [
       {
        "t": "幾秒鐘就下載完一部電影",
        "icon": "🎬",
        "s": "61bee6c880f85e5a",
        "e": "m2PCSOWj80MMts4WATFdZxJ83KDxFyUQDs0Zqaot7MRzmTOW/3SmJWqKR48xZ2h2spJZZy8yWfLan2mrxxpbTRfZ+WPvAVBgxX/vksgLEA=="
       },
       {
        "t": "醫生遠端操作手術機器手臂",
        "icon": "🩺",
        "s": "92f6fe8e9b17a93e",
        "e": "J6FbgJfXYHrc0mOtVqK7auwQt/jplWCgNLUKaJCZwZuUgFaz6OcYjSW2Ef8qtxpciSlbOcOAAUSaAZuJXtlR1mYOT3m8rmOp0dxKyVMrjRdhXeoepBMo9w=="
       },
       {
        "t": "自駕車看到障礙物要立刻煞車",
        "icon": "🚗",
        "s": "108d009702a90a4e",
        "e": "thkDLw6BisblRaE71iX3fGQ6JubzcPc9VnP4cjKCCtR9iRLNCRTxsxknsugNjZ8jphS86j/+Gx1EpN1J+EYMH1SZbOHRDMBkFPIpVpOU8Lu2gQ=="
       },
       {
        "t": "演唱會現場幾萬人同時上網",
        "icon": "🎤",
        "s": "bbebd3ff4d5a9e96",
        "e": "hgWQSmWLCXZ9XjJByfmKLz1vjtfSj2qC6pKUsmL1ZNzCwXi8XL98Ibg/8ekhnlEpc6okFVSqsmFsFqdYgUVdJAoWTSWAwaE93ytfp0oBSWK0s0tp6g=="
       },
       {
        "t": "智慧工廠上千個感測器同時連線",
        "icon": "🏭",
        "s": "27488d37c89ebec5",
        "e": "pv7VnKjAioRoti3c9IzEGIBRc9p5oM6A6f4DMW696e00QC93SmSbsFX1fdTYOy114KYXj0Lscj6/x5huTzS5EOdpLjEMn43iCWT4i0ISV6Iifg=="
       }
      ]
     }
    ]
   },
   {
    "goal": "依距離、要不要上網、有沒有基地臺，選無線技術（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "wirelessPick",
      "n": 4,
      "prompt": "選哪一種無線技術？"
     }
    ]
   },
   {
    "goal": "條件更多、有干擾選項（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "wirelessPick",
      "n": 4,
      "prompt": "選哪一種無線技術？",
      "hard": true
     }
    ]
   }
  ]
 },
 {
  "id": "N9",
  "icon": "🚀",
  "title": "網速計算機",
  "book": "2-2 Wi-Fi 的版本與頻寬",
  "learn": "<b>網路速度的單位是 bps</b>（bit per second，每秒傳幾個位元），檔案大小的單位是 <b>Byte</b>，而 <span class=\"hl\">1 Byte ＝ 8 bit</span>。<br>所以：<span class=\"hl\">網速 ÷ 8 ＝ 每秒可以下載幾 MB</span>。例：100 Mbps ÷ 8 ＝ 12.5 MB/s，下載 50 MB 最少要 50 ÷ 12.5 ＝ <b>4 秒</b>。<ul><li>📶 <b>Wi-Fi 5</b>（IEEE 802.11ac，2013 年）、<b>Wi-Fi 6</b>（IEEE 802.11ax，2019 年）都支援兩個頻段：<br><b>5GHz</b> 速度快、距離短；<b>2.4GHz</b> 速度慢、傳得比較遠</li><li>🐢 上網速度會被<span class=\"hl\">比較慢的那一段</span>卡住：租用的 ISP 頻寬只有 100 Mbps，基地臺再快也超過不了 100 Mbps</li><li>🔁 Wi-Fi 6 可以<span class=\"hl\">向下相容</span>：Wi-Fi 5 的電腦也能連，但只有 Wi-Fi 5 的速度</li><li>🛣️ <b>頻寬</b>是同一時間能容許的資料流通量，就像道路的寬度；同一台基地臺的頻寬由連上的人<span class=\"hl\">一起共用</span></li></ul>",
  "stages": [
   {
    "goal": "頻段與網速的觀念（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這個情況用哪一個頻段比較好？",
      "pick": 3,
      "buckets": [
       {
        "id": "g5",
        "label": "5GHz",
        "icon": "⚡"
       },
       {
        "id": "g24",
        "label": "2.4GHz",
        "icon": "📡"
       }
      ],
      "items": [
       {
        "t": "坐在基地臺旁邊看 4K 影片",
        "icon": "📺",
        "s": "c1335e3d719b7876",
        "e": "6o4F4wHJzNPNmM9lQrUgcCYCYKEIIoFaTGB4L/AunzjgLK7cYvy1OfEXInqHPiC+g3+Mw3i/5qT34aK72La0aEpDT4y8w5TEjTg="
       },
       {
        "t": "隔了兩道牆的房間，訊號要穩",
        "icon": "🧱",
        "s": "f04a64d4da9ef616",
        "e": "y4s2yzqcg68RhOtqOsj4AoUo8E1fzbDznb+R5DhmETPnvOIRnzvhegV30uSfe2gV5pQz+VT9PZ0bK1n2k5qZaxt/auSt8pcM7wWr0y71"
       },
       {
        "t": "同一個房間裡快速傳大檔案",
        "icon": "📁",
        "s": "57ab350d1ec3b842",
        "e": "xLvFjnQmRNELZvm+fBajM0o02D7+d8+bcNm+jLMDAHMhs73nP+mHbwhDHAxB3bxriGXEEPNKKKLyxsq601mJkVqxWA6FIIs="
       },
       {
        "t": "院子另一頭的監視器要連上網",
        "icon": "📷",
        "s": "37670e6094b6287a",
        "e": "mPwc9caMAMwT3zXYGmu3XbaLLG0Y/pd7kn3OkyOxkPmfXOLQK5hi/nvzJ8jowiQO1WLa0sMroJv1NTVy2SceYw=="
       }
      ]
     },
     {
      "type": "sort",
      "prompt": "這句話對不對？",
      "pick": 4,
      "buckets": [
       {
        "id": "ok",
        "label": "對",
        "icon": "✅"
       },
       {
        "id": "bad",
        "label": "不對",
        "icon": "❌"
       }
      ],
      "items": [
       {
        "t": "基地臺的天線越多，Wi-Fi 一定越快",
        "icon": "📡",
        "s": "7509a2e819717b82",
        "e": "VfL5HJLpEEj1FR/UZywB37taoG/5zORRH9+UeETj7zIlrtdeadN5AmJ8cBMwUrpkwSuDpjBuELjT7ydvXqpfHKkuRj8a3Piqql3FEQ16u8jQdtjKF4P/Dm5g/cX+QwTiAaH62kaXSETbsT8kHDVv95CERyhVzWSLGAU="
       },
       {
        "t": "Wi-Fi 5 的筆電可以連 Wi-Fi 6 基地臺，但只有 Wi-Fi 5 的速度",
        "icon": "💻",
        "s": "db1fc679d4bafa70",
        "e": "CRL96vIK7q7/H156PCNSQTeHr4ep0MLLbu380YQnAeeACAZGRQNHJx04Guio5fHQR/Rc7lmqFMD4Mz5htw=="
       },
       {
        "t": "同一台基地臺連的人越多，每個人分到的頻寬越少",
        "icon": "👥",
        "s": "4d1e956158ad4ada",
        "e": "/ysfvX7BoTnOnLZtUz0dHnG/MaHd/lDDr/y1urZtbSFBlvKm64KJ/vdsKV9MQFFSx7Neg282/3cKp+V32IBBAz2NyQdO3Fw158j4G5NUpaJBKyJrT6k="
       },
       {
        "t": "買了最快的基地臺，上網就一定比 ISP 租的速度快",
        "icon": "🛒",
        "s": "a143eba3c63887f4",
        "e": "oQfWL56tq2dk2+tTT8H8C3HQSiUYFMXj3nrCGJuRiywPdgt4K52t5WmHTbr2MKjd24Jq/+tBmXJRrcGq7pKUcHENdY5CjpYxXBSZZAAUsSv01tRmr+WgsaIGurfzr/9/3SvI67E7BDMlD5QbOJLKcA=="
       },
       {
        "t": "Wi-Fi 6 的標準是 IEEE 802.11ax",
        "icon": "📄",
        "s": "e8e2517a3d68010d",
        "e": "4wmFpS948mo9uZb0TlwnpTkXpENrTA2JG3AIuzrrO6Z/jHlFhGi3DnckbO+UuCVqv9MPZgdDsw/ul1F4dEVn7b+DtvJi1mKU3Gy9rjYacqKdFDak"
       }
      ]
     }
    ]
   },
   {
    "goal": "把 Mbps 換成 MB/s、算下載時間（🎲 每次數字不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "download",
      "n": 3,
      "prompt": "網速計算"
     }
    ]
   },
   {
    "goal": "速度被哪一段卡住、大家平分頻寬（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "bottleneck",
      "n": 2,
      "prompt": "網速計算：挑戰"
     },
     {
      "type": "gen",
      "gen": "download",
      "n": 1,
      "prompt": "網速計算"
     }
    ]
   }
  ]
 },
 {
  "id": "N10",
  "icon": "🛒",
  "title": "嗶一下就 OK",
  "book": "第 2 章 科技廣角：結帳時的資訊科技",
  "learn": "結帳時「嗶」的那一下有好幾種技術：<ul><li>▮▯ <b>條碼</b>（一維條碼）：黑白色塊寬度不同，掃描器照光讀出一串數字</li><li>▦ <b>QR code</b>（二維條碼）：能存更多資料，手機鏡頭就能讀</li><li>📳 <b>NFC</b>：非常近距離（幾公分）的無線感應，手機感應付款就是它</li><li>🏷️ <b>RFID</b>：無線射頻辨識，晶片標籤不必對準也能讀，悠遊卡、eTag 都是</li></ul>",
  "stages": [
   {
    "goal": "結帳的四種技術、條碼掃描的過程（題庫隨機抽）",
    "rounds": [
     {
      "type": "sort",
      "prompt": "這個「嗶」用的是哪一種技術？",
      "pick": 5,
      "buckets": [
       {
        "id": "bar",
        "label": "條碼",
        "icon": "▮"
       },
       {
        "id": "qr",
        "label": "QR code",
        "icon": "▦"
       },
       {
        "id": "nfc",
        "label": "NFC",
        "icon": "📳"
       },
       {
        "id": "rfid",
        "label": "RFID",
        "icon": "🏷️"
       }
      ],
      "items": [
       {
        "t": "超商店員掃描飲料瓶上的黑白線條",
        "icon": "🥤",
        "s": "522991b7b2619813",
        "e": "Ha2xXK5CHNF+Zv5TXOGMC9AwTN2OWldmr7CS6ktc5mHlWsmgAHp/C5jsL69rtSCP+W6Mf5b6TVwylPTazYic1NilkF318QYxe9SThVWSbi8qfKbxoynKgOg="
       },
       {
        "t": "用手機鏡頭掃描餐廳桌上的點餐碼",
        "icon": "🍜",
        "s": "d5d813a8d70519b2",
        "e": "foWkgutW/2hHHUylGeVHa3RrLu2YUpXH56HVaNj05KVHwvSOfGkkA29dcV/UuEFR7DwEdGK1Jo5lyYJ+hPqeRWyK7xbdvtnlDg=="
       },
       {
        "t": "把手機靠近收銀機感應付款",
        "icon": "📱",
        "s": "ef9be26fa87b15a2",
        "e": "FW6UMkmwK/VSGmrfW9bOMdYiYz5fUHADblV/W4H4edIq2E4Qu7RfRnQIjQ0Gh5JfiPQuOOHWG0M/9aUd2i37faKSQ1q3jqzF/XVg"
       },
       {
        "t": "開車經過高速公路門架自動扣款",
        "icon": "🚗",
        "s": "f6ae5317dfab3a69",
        "e": "lEEHFxac3RbGAnmLh50RTSVoGhC1cL0HbjUxa3dP4bE+qQU6V5dTZ5oGNEMlr+ag6Kuci3xxlVDSPZQZr4GlpMW7WRSNYnWSUJMVuTkqva4NOLEMj8Tc0wmtBD3eWQ=="
       },
       {
        "t": "拿悠遊卡刷捷運閘門",
        "icon": "🚇",
        "s": "e7b5af198ee3f166",
        "e": "TRhAFF08X9D0AHHbuMzT65uzXpkrsTS953RY5qh3W6sPT94xySbcJ/zkre1E4lY97YcIKwQfV26BfnvmVRrgICBFtFE="
       },
       {
        "t": "圖書館把一疊書放上去就自動借出",
        "icon": "📚",
        "s": "ce198cca0ab3b185",
        "e": "Qrk5G27EjNJSWhWkQb5Nm5UqyLU1szGFxdrehb/ilLEW5DO4qnAXqwSdVtCgLWJlohSj/tcphuf7Xl20YxYDciX+Bs/ZQYfENWFSVJAIiPokjoAdqg5JsEMF5U4Zigg="
       },
       {
        "t": "把一整籃商品放上結帳區，螢幕馬上列出全部",
        "icon": "🧺",
        "s": "95a7a9cb1233eca9",
        "e": "cerr0W7Lfm9dfRjcXwjW10jZuKcBo90d6JQ7OPoDLLGxKmnxTOwVGbgVU3/kI3DsGIbHkMLRyEqyZALr3T5O5Y8JhJBUDTgeCa/BmjDi0lKmqwnUDYHpI7h+QRsE0T8="
       },
       {
        "t": "掃描電影票上的方格圖案入場",
        "icon": "🎟️",
        "s": "57d91a6e3b274b40",
        "e": "b+BgLAgSxJPP1eGLtwXzVF4EjkVHnTqCxq8aZHtLkZbWX1vcVssBB92cIGLIVNk09aRJG1VueAojjk/lfk3IL54jFYteZhQdDvfLHz/e5Rg="
       },
       {
        "t": "書背上印著黑白直線的 ISBN",
        "icon": "📕",
        "s": "25f373a1875e2b3f",
        "e": "gjou4dA+HfzgKz9xhADgxOLhXC6mnG4jmEXnqJRjIGsZaeWq9ZyLRL9wtixJQb4PbihQU4UgiUpR0pLK1EF2IQKNJYBMIREi2A=="
       }
      ]
     },
     {
      "type": "order",
      "prompt": "條碼是怎麼被「嗶」出來的？依序排好",
      "s": "d75f74ebf108de69",
      "items": [
       {
        "t": "黑色吸收光線、白色反射光線",
        "icon": "▮"
       },
       {
        "t": "掃描器接收反射光，轉成數位訊號",
        "icon": "📡"
       },
       {
        "t": "解碼成數字，傳給電腦處理",
        "icon": "💻"
       },
       {
        "t": "掃描器發出光線照在條碼上",
        "icon": "🔦"
       }
      ],
      "seq": [
       "lY2YX1MYaW5IWnbGogWnTjIEUWjMiVEQEmwnCWRe",
       "I+asjb/HHbWtteYc9n6nL+X5x0hq+FPPM2VVv9Xq",
       "L6WQKihYwfJR6EHKjj7YXRXw/q5jiJz6mAAYORfj",
       "Q19EL/qTEFi7ngrqqyiXMESBoNkkYBPyyYtgwRM8KeT1WKTIb35LhJuyGDcWWa1xP16c4GC/Fg6tH04Rf2dtrjpD+A+HF19DbslfXI6z2bG7DOcFq2OmHCxYnzudkFf4hTzV5TtP6KaaxEkcBVESY4IwMKmrUUvK+ayLR2A="
      ]
     }
    ]
   },
   {
    "goal": "當掃描器：把黑白條碼讀成數字（🎲 每次條碼不同）",
    "rounds": [
     {
      "type": "gen",
      "gen": "barcode",
      "n": 2,
      "prompt": "簡化版條碼解碼"
     }
    ]
   },
   {
    "goal": "倒著掃的條碼、算 RFID 省多少時間（🎲）",
    "rounds": [
     {
      "type": "gen",
      "gen": "barcode",
      "n": 2,
      "prompt": "簡化版條碼解碼：挑戰",
      "hard": true
     },
     {
      "type": "gen",
      "gen": "checkout",
      "n": 1,
      "prompt": "結帳比一比"
     }
    ]
   }
  ]
 }
];
