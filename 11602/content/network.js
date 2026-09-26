/* ⚠️ 自動產生，請勿手改。來源：private/11602/content/network.js（私有，不進 git）；產生方式：node tools/build.mjs
   答案、解說、預期輸出都已封存（見 shared/seal.js）。 */
window.NET_LEVELS = [
 {
  "id": "N1",
  "icon": "🏘️",
  "title": "網路的範圍與設備",
  "book": "2-1 網路的連接",
  "learn": "網路依涵蓋範圍分成：<ul><li>🏠 <b>區域網路（LAN）</b>：連接<span class=\"hl\">小範圍</span>內的電腦和周邊設備，例如一間教室、一個家</li><li>🌏 <b>廣域網路（WAN）</b>：大範圍的網路，由許多區域網路組成；網際網路就是最大的廣域網路</li></ul>家裡或學校要連上網，會用到這些設備：<ul><li>📞 <b>數據機</b>：負責線路上的<span class=\"hl\">類比訊號</span>與電腦可識別的<span class=\"hl\">數位訊號</span>之間的轉換</li><li>🧭 <b>路由器</b>：安排資料的傳送路徑，通常有 WAN（對外）和 LAN（對內）兩種接孔</li><li>🔀 <b>網路交換器</b>：插孔不夠時用來擴充區域網路</li><li>🏢 <b>ISP（網際網路服務提供者）</b>：例如電信公司，提供連上網際網路的服務</li></ul>",
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是區域網路還是廣域網路？",
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
      "s": "f190d389333c8a07",
      "e": "xafm8S4TAjFqBPsKLPanmFGuEDbGiXVEGiySB8GU06I7QhLFtg8iFfa1g6iBaOHu9gFixFk0gKoAsnzlq6nkR+aXTau+qYK+QjYp0T0+HoTZe/I="
     },
     {
      "t": "家裡的手機、筆電都連同一台 Wi-Fi 分享器",
      "icon": "🏠",
      "s": "2cd0a0fc8774f2f8",
      "e": "qD+RB4ygmoKdNynozgrAvdjwOfj+a/p8o02sQBZ6IyyzdYteRphShxpDgG3DP33yXwrVdv/uufp2v0xsuYAnIqWTbseNm5f4t9S+Ud8="
     },
     {
      "t": "銀行全國各地分行的電腦互相連線",
      "icon": "🏦",
      "s": "6ca246f4eaa96f5b",
      "e": "znP9CpluxBes/8GeeAIB+T2mkV5EaGZbt/zVz5TS/2kxCtE8gBjpSvOmQZwif3d35K4Dp4BQYpCCXW4YTVBanzEinsHufP8FafTsN+jboVzz+IGAoqQKLHwHZEiToXCZcl/iA4glNQDLQHmcEps+z2E="
     },
     {
      "t": "連接全國各級學校的臺灣學術網路",
      "icon": "🏫",
      "s": "52b6b3ec70d4a406",
      "e": "tXgwIJ79Et3GW1t4tlzlgf8DPRuDuvSStDD6lc51/s2p/WCfxjmtGVQ5GxDhqc92/VsUbmTKCEK2B9oVwmtQ1vdYY9WOiwm7g9KcNBuMLsxkO4vRju9ftXFPyFEJk5b8os4="
     },
     {
      "t": "網際網路（Internet）",
      "icon": "🌐",
      "s": "80949a4b44261842",
      "e": "WKbabG+A2KFrb8gfNpjTForEl1D+I0NkGqBIH+4RIFio9opLz5Gx/EKx+FAwP6TM1UKFzqT1Lj0arxYN8i33xI5vH/AkrsgpXxLPrxLWge9DDqab1lg="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這是哪一個設備（或服務）的工作？",
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
      "s": "d29244831ef84fcb",
      "e": "fOFXHQyO8nJkx08g7AmgCMSX/Wjqtj0An0YobGysHWzNqnsGliTUSbkRDs9qABdgWeTXmojEDXq5Cu/qkgMeD7kKClS6zFH1jCCETLyMiWeoD6rxD+Pmkw=="
     },
     {
      "t": "決定封包要往哪條路走，有 WAN 和 LAN 兩種接孔",
      "icon": "🗺️",
      "s": "d0208ebf2a4f8dd3",
      "e": "Gq9PGIxJnRGqYFQgDnCSJWIFHWh6STrwt4xcK+CNuyfcktl0p2IepZXIPQdJ1mB4C7BAj2pj8xZUVOiIwWN87UXWM+cVud/hLxMISF954ug="
     },
     {
      "t": "教室的網路插孔不夠了，用它多接幾台電腦",
      "icon": "🔌",
      "s": "dce0ddff530478a9",
      "e": "pUDHXzEKFCyj+8DAm6HGHgbPxoS5mreyp+7OWmHSLz9tCX4E983kuSQG5IBEFOPWCDpdD7G79F8u2DD5VZb/rBnDN+v9qbOSyuI="
     },
     {
      "t": "電信公司提供你家連上網際網路的服務",
      "icon": "📡",
      "s": "aa816e709049d3ff",
      "e": "5KEUrJyIiVpTUII/oltawEZSuWcJN5mx6GqS9YGJLh+X9Twjcvhpz7D3wt9AFOLK4EeuTYX7ZNk4x/DMuZz7JMnqkNknXC0lzyJK"
     },
     {
      "t": "讓家裡好幾台裝置共用一個對外連線，並分配內部位址",
      "icon": "🏠",
      "s": "5b79f9d5ec2077df",
      "e": "nif65ro/UDl4IVEVxid+6E3JSgXDd0vxPEEOc5fI1Lw44LmYlnEMX7rqfSpmSxb8VHDv038eIefVuAx1FAkxOlGQ2A5mH2lvoHNyUmGiX/O14YMJLSBd"
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是哪一種線材？",
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
      "s": "a12929262bb4c733",
      "e": "gF1+Vhtm4wPyr/mZee39/Xu9Kw+K+2zrHexoXJMFnE/IxMBcEma/uzyvAOb1Su191MkEx6xnFqrUzPnZSsI4ycHXWsjU5ZEFzaeUyZlU3/GUXWmqtV8Wzb17nZRO5IQEaiM="
     },
     {
      "t": "兩條兩條的電線互相纏繞，減少電磁波干擾",
      "icon": "🧶",
      "s": "faa9e4bd3083804f",
      "e": "uatuI2yQrForw4YKxz4eJCX6Z7f3hZOyquhXImzKBgRmtKRsneCGruLf9QChSYzLzK68SODIOtbO2rJxkDWuD8FIoMKsDGDHg2t7siI261n3Y83qAxyngMVhFeYNRcIwuDc="
     },
     {
      "t": "中間一根銅芯，外面包絕緣體和一層銅網",
      "icon": "🥢",
      "s": "d8922501ee5907e4",
      "e": "xSvfyT89HhWb9NucCCmSbX2nLxm0oRiuX1qNONjsFl0OkSkhvgzEnd5NKiohklv5+AoCNHfvsGd5YoMWarilpTVkp1s0XJJHeKmkxYzDkNKN5xX1ytHuOcigTKN4utqblaqVSt0nR/RmvA=="
     },
     {
      "t": "電腦教室裡，每台電腦接到交換器的那條線",
      "icon": "🖥️",
      "s": "e746aa2f01b3eee6",
      "e": "yi4ECM7b3ecIc3K0Yb6CU7q5W5QYavIcL+8G1i6eAjXI6qJ3AL9vgzLJvn/jyA7MngK901EiE2fW1EpSYFgAx5l1nmB8HENX2SYhw/WH+DJG+ptWMn6LsFMRlQ4="
     },
     {
      "t": "把有線電視訊號接到電視盒",
      "icon": "📺",
      "s": "02575a41a0818fb1",
      "e": "YBQcKeXqd6BgI6aVcUnk20naPftfBZ/kMfP4oLEPx95fooMNZW8kGU7gqGO+lps/hUccCxT4O/x5W2er5TBJq633qANIi3PbmDU+TK3WOa/eHAEqoATTToM="
     },
     {
      "t": "連接城市之間、甚至跨海的網路主幹道",
      "icon": "🌊",
      "s": "ef6979c37cdd9f15",
      "e": "e9kIMDMaKAvRQ4btpO8ROJ9G/R7YSIHkCuvnQIVV4SMA4jJvax2+nOjhK9h0cOPaUdeE02A0gKMOh/Wm74oHGIPO1Xyljb5N+Hjp9IVJoe8zEVSYE3fRouI="
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
      "s": "60679c0deea0e7f2",
      "e": "Tfp8CVy7kPRjjfMVNT1ggLJmCqS70XnDq4T0bV0V0NfAKLRT0n1iRQU1nbb+BaNOQak3EnYP9lI/1PoX5EY6Vb6YqV+Zf5U="
     },
     {
      "t": "成本低，適合一間教室這種小範圍",
      "icon": "💰",
      "s": "7fb8fb2fea4106cd",
      "e": "S6ZpNEsL5+jxZKwOVSVQ8tqrTscoLTCY1oXU2y+9biJ9XF/xmGMveyWuwW2PH2vweIDLwMVFzDqRepah7wE7leuWggXdqJu/DIkp9MfXCCLX6MyU+bRVKF4="
     },
     {
      "t": "成本高，所以多用在主要幹道",
      "icon": "💸",
      "s": "d2ccf19b190281a3",
      "e": "N8Sp2YhDjdYBAEN+VlG5d4Sl5/l2z1nT+wHjcefM+Op+cqC5hNkAOP0QsV09XdXhVCX25M8QnV/pkRglejqauRgNw8oi4aaqjBPdIOsSKt6Q/krXdFQNlyt6YN8="
     },
     {
      "t": "傳輸距離比較短",
      "icon": "📏",
      "s": "55809c3df0088f79",
      "e": "itYP0fPqZtU+MVBD0hkLgCEZsrlh65maS9W6jCwVcpPwh1n8Mx7n6J3WJgcOSsEnH830LWR3iblUUr69l9fdMzrpalxcdIcwQ1dN5KS+6gKV3Y91QntpxRI="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把網路從 ISP 送到你家電腦的路線排好",
    "s": "f14d57dfc18acc94",
    "items": [
     {
      "t": "你的電腦",
      "icon": "💻"
     },
     {
      "t": "路由器分配給各設備",
      "icon": "🧭"
     },
     {
      "t": "光纖接到用戶端",
      "icon": "💡"
     },
     {
      "t": "雙絞線送到電腦",
      "icon": "🔀"
     },
     {
      "t": "ISP（電信公司）",
      "icon": "🏢"
     },
     {
      "t": "數據機轉換訊號",
      "icon": "📞"
     }
    ],
    "seq": [
     "mhpthm98y7zyVrfKW8UGVez+YEV6jD+InadrH4Rl",
     "pb8wkSH646+F8lFsvU8tebuvfII8x8dnhNJDrC1X",
     "27cv/Vx1VeoJc4vQXNTh6M11TuRIcdMlg5G1A9Jd",
     "4jkiO+4KD7vNLhklu5mT/zpoKJwINRfmGV4DXnu+",
     "BQDd9Aswz1QDXnPTScr6sBNZZlurLDjAkGtMEU+z",
     "kZwFiXAZbpZKdGUmbAn7XizVPiFSR6jHSJrtioMawrpddVnIu1lDS1y0aXRxiN0NjXmN+z5Yox/HUNUy+SPfS802GyqQ6HbpZ6PE4Eeaiv+3xVYywSVxk73zFx9Jhtks3Myp7G4CmJYZwfQlkOcgaLNjsmFbIlUoHOrOM/W90oumYOZt893S8ekYYy4ygdiLfd/48r0P6cjYZRc5tau4i4Eb6BmBgKaekZnj"
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
  "rounds": [
   {
    "type": "order",
    "prompt": "四個封包亂序抵達了！依編號把「畢業快樂」組回來",
    "s": "d736a810d073c441",
    "items": [
     {
      "t": "#2 業",
      "icon": "📦"
     },
     {
      "t": "#3 快",
      "icon": "📦"
     },
     {
      "t": "#4 樂",
      "icon": "📦"
     },
     {
      "t": "#1 畢",
      "icon": "📦"
     }
    ],
    "seq": [
     "JPzCPuWkVT/5tcvJyp17pASVTdOxb9OdJm9xmZxq",
     "lIjAjhQVK31Vq31TFNYzImPY82+1ans8K8ajVWEi",
     "gLzM6Bhmd3jQGZxRSFQs6Omou6z/ydMNynfTMF2D",
     "afDhLOPM5btVqEBzr230NqGqCTvpYwvrAOKRPcq59+2V7Qm0i1iF17T+JlnOKHlhFKMqygnz+Yvg3OjXVxfo50jMWA3C9hz+gtTDD8IDP1N0/GEoTDkJRSxdUhgYXApRlb7dIGvEZ02Apuw+GKxWC67DUzBHQTP/nCKfk9t/sQUFMTOAjiJvUHhj"
    ]
   },
   {
    "type": "sort",
    "prompt": "這是 TCP 還是 IP 負責的？",
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
      "s": "377e72da7b643f4e",
      "e": "CsI9/9F8KZZinQdoz+8LSaKYU5N6HpQ4tKo923H2sDEG4caFDdgox6g2PIkzWAuZjE31mAGnTqkcqX022yKeyw=="
     },
     {
      "t": "檢查封包有沒有送到，沒到就重送",
      "icon": "🔁",
      "s": "622619ec4e19ea85",
      "e": "C1saLPEocZDrP+88fNqYYYmA4SqXIsOh2y2qrNxP57p7jw9O3WgZRDJVvtRR/TsNUwahzY7qs39lmPsGbWPOZjSqHALlUrbVzaz1LVcl5un5f4z7"
     },
     {
      "t": "在封包上寫上來源和目的地的網路位址",
      "icon": "🏷️",
      "s": "cb5235879a7c8564",
      "e": "apqh7F5mq7uzt4Lv5a0uIuP/zCnarcozIQhre4hv9GeMZJxz15wvmINC9iz/0ZPB2tHoVwRAU13xFxaDJf0CkzkBfrcT"
     },
     {
      "t": "像信封上的收件人地址",
      "icon": "✉️",
      "s": "3083548ea2a592aa",
      "e": "+5gfFskplrK7z5hot3KoD0QGzapPRwxl3vpmkNQFj9cVc5cYko1tzx5EB5iC+bW60/7nI+4E5OiMOeNAIP4GXvFo2gDNSlpS5cY="
     },
     {
      "t": "收到後依號碼把封包重新組回原本的資料",
      "icon": "🧩",
      "s": "ee6985a0c835b163",
      "e": "D1yeGd0NbjWUbk41Aqy50r4hi7Njrv6ekLUNEP24uEr67qvzh9Z1Xt0a0MlvdPDL9wxMCcL8WzEVwdQDR3Zzaj1gX2kDR0acyh9Cr5/NGg=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把「傳一張照片給朋友」的過程排好順序",
    "s": "3ce42ca351fe5e77",
    "items": [
     {
      "t": "TCP 幫封包編號",
      "icon": "🔢"
     },
     {
      "t": "回傳「收到了」的確認",
      "icon": "✅"
     },
     {
      "t": "路由器一站一站轉送",
      "icon": "🧭"
     },
     {
      "t": "照片被切成許多小封包",
      "icon": "✂️"
     },
     {
      "t": "IP 加上來源與目的地位址",
      "icon": "🏷️"
     },
     {
      "t": "接收端依編號重組",
      "icon": "🧩"
     }
    ],
    "seq": [
     "3FhdGj/SRUHCImdFdr2ONveWpx/gK9FTHMxJRwCg",
     "J7B60SyvDq+st9u8nIgpocnEiU86eyuuUubnn95Y",
     "QuQLzEOjBzOSDcu0hF9veVIo9czPlN2LdArSVu0u",
     "GalVRNL+oykK+xb9LP12HeaExo1R83Rv+LuX3dd/",
     "6CDDzcsKmTDXIzEBV/62gYGkjQ+atij28R5aEUk6",
     "2M4ZMraTU5H7Jq3fv2jAWIKqlVy6tvLcgZk07a45hC5B3LcTxMjCeWrImVg2LlvS4pikf7hZH/aB4OR5oF31bXCx+4J5yRsz/Egylo/YvBwAdU4z+2rKTMNfSUrWtu7XT55acKL2ebn8d296qNIVdboCpWcNRVEIb0Uyk6ARhZcUrDQpXAx/pKoYa/k="
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是合法的 IPv4 位址嗎？",
    "buckets": [
     {
      "id": "ok",
      "label": "合法",
      "icon": "✅"
     },
     {
      "id": "bad",
      "label": "不合法",
      "icon": "❌"
     }
    ],
    "items": [
     {
      "t": "192.168.7.1",
      "icon": "🔢",
      "s": "dd4ca577bc47a32f",
      "e": "TIJhgMz9PjLj9sc64Y9j4WzfHU2fyFurIrYbY7JYQnOBIiEt+edYWI2PKidR/b55yAEsNDQOa1sv6MTs86VP4AVU+OPYzCYrsBdJxA=="
     },
     {
      "t": "140.112.53.15",
      "icon": "🔢",
      "s": "f523158984630751",
      "e": "wASy9yfk8IPJQGUH0J1Ha2B/2/gQMNWBDUWfQy/wsCg1og0G9mskOKUoqOKVNXrD/HitrzN5aIGiQloTFIMiIv+BOXGT5UqNCuSiqw=="
     },
     {
      "t": "256.10.1.1",
      "icon": "🔢",
      "s": "59c248d2d906d853",
      "e": "CY8GW1PTnEi1QqEpOFzJZDThvjSBp1lPcAM/WiHRGH+En+WJRufMoGB1epBnkGqudevLtyNnDKS+iycAx/FHDb1wDDeBxk/Rby49IvOFrXny80rSvUzvXH738nkehU6mtCnJ"
     },
     {
      "t": "10.0.0.300",
      "icon": "🔢",
      "s": "0a527498bf5a5073",
      "e": "grPE5Z1msj9sXDNk121M6lRqZdZqaX/RLs0fM7M/uwdhE++w8UyE0kPq2IOAXoZ/VA5GavoIXw=="
     },
     {
      "t": "163.21.236",
      "icon": "🔢",
      "s": "74845466d77c4de5",
      "e": "F5x4elX6Xw8A6Dino3y9fG69tQAPt1ptj/daWYZ7d4uLsy7gzjk/3dILcJSH9OQsbDQCeRAFCkeqfuXDfFYoQCORMVnR+w=="
     },
     {
      "t": "172.16.33.98",
      "icon": "🔢",
      "s": "8ea1a33aabd483d8",
      "e": "rukjrQdOHoWaxvOAJtiJh9eHZTl53a0siBKbfNWX4iOlRR3Z/prCOyAvsqNdUwJrvo0PgkgxQVLgtOnx85LEWFyfn+avMMUi7ILzyA=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這是公有還是私有網路位址？",
    "buckets": [
     {
      "id": "pub",
      "label": "公有",
      "icon": "🌐"
     },
     {
      "id": "pri",
      "label": "私有",
      "icon": "🏠"
     }
    ],
    "items": [
     {
      "t": "192.168.1.55",
      "icon": "🔢",
      "s": "1ac1e6fcf3a8033d",
      "e": "F6TqKKcSYO8GkqM1gVQrHsHqRYwcjNYXx8An9tyM1C9H2fFFoCO9+vl1IazFIjTL8B2QwbHN98JCER6HuuBcjh+r66k="
     },
     {
      "t": "10.2.3.4",
      "icon": "🔢",
      "s": "cabd64fb62296584",
      "e": "8RvUYTJoEG3Kz+ZR48qSS+1ge340SDkeMXOYAZ1YAQdMu6PSUtrXdj4lmQ8mH5nntxjy07EUdzpvFXn7ZOpS8PU="
     },
     {
      "t": "172.20.1.1",
      "icon": "🔢",
      "s": "811b90f61d7ddba5",
      "e": "nCOXo8ehSAewa6oxzc6F2va+qqZ6RQa3KlTICEzxilHExbT0XvmseFYuiO8JQfitBERf74G/X9rXtiXa43HmKQ9J6UbNwelLxHsZqFzvjU1YTTqolenozDTEFxQ3QoTfkcVG"
     },
     {
      "t": "172.32.0.1",
      "icon": "🔢",
      "s": "404361d173684b99",
      "e": "0vGSI1eNjk09NggqUdGLTGGLCpcWM8w9b7BFCZd4Vg1jADoDcyPG9Qm3lUFBSpY5IMeLo92ouLISiQTfiohs/w9GkCXZINZH/Tuce/bVKMrMw2SVJQiRK43dSS0w7Gxp4gBf0of0wQ=="
     },
     {
      "t": "140.112.53.15",
      "icon": "🔢",
      "s": "62448080288b0b87",
      "e": "0PYOWaA+w0ci0/RNY9juvQ2xvPyQnJlh4U4rKlT4xLE91IxAVCHPIEhqiKGOwa8XJbNJRwfcTxMdAIPgtjqMwRsVFjhEk0+L3bpxkhJzKNYxzmeUDn8="
     },
     {
      "t": "8.8.8.8",
      "icon": "🔢",
      "s": "3cee4eaa1fabda60",
      "e": "C+Z6i98CIv+dezn3f3LPFRybIL8/gxnGcczyzMdHKwybUj4FJIrnaDBdyjqj1kh+n8X39ElZ+E19CMRsD08wS5yBjunWFsTK3ZhGa+Cnn3s="
     }
    ]
   },
   {
    "type": "type",
    "prompt": "用位元計算機算算看",
    "tool": "binary",
    "items": [
     {
      "t": "11000000 換成十進位是多少？",
      "icon": "🔢",
      "s": "8edc41f382ded751",
      "e": [
       "k261YCJ+QGC6w3Jz/FgKMO2JYUFU4gH+dKeKV4TUsFcqSF5FtDkLo+5Fn8ZFrDN9qqZWLa0PhGrW+OxsNjTUEXuyAZK2ZZY="
      ]
     },
     {
      "t": "10101000 換成十進位是多少？",
      "icon": "🔢",
      "s": "fbc02fa661866e2a",
      "e": [
       "RHN1FjsjEAkRVvYiZFh5ZY8L4FCfs8823m+aVZ6s81PxgkE2cxbVimg7MYQ1WdJ46nGip0EGt/uLhgPWeRNwU2YN7XnS9xqqPcaiRGWBqo4kaIwsq6xsRk5LZWFU0so6xxRpKZParmJ4Kxw+a6Mk7HATxcRy6CE="
      ]
     },
     {
      "t": "IPv4 每一組最大是多少？",
      "icon": "🔝",
      "s": "df1cefbd8944d905",
      "e": [
       "iUeoPJVYBqy415yoiGfsytnuvj8oIf+2a66YTvlrBFgwUWmNwF1lCs83j/t+J0ai4r+fekq3dAlO64XFz7ebpTNKR4nmjMZeDwnvaodT6DvwoFOteeDp+rZSujxdas+IyWkQ+Winxaq+/+T2uvXlDSbph6+oGXY1"
      ]
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是 IPv4 還是 IPv6？",
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
      "s": "b4f7d15849c74bc0",
      "e": "FNRFEQL2sZJ7/rE1a8dGhwcq3xcKFs2qtECkTNoDTOn4J0ZgCXbv0CIbcfbZs4l0OvOvpnCzkp/xKIxExbGSuk1YlWp3W0FoRv4/hSZEhg=="
     },
     {
      "t": "由 128 個位元組成",
      "icon": "🔢",
      "s": "429f0dd66f08fade",
      "e": "7nBLJiN9u9D3uuacDoNRoiIwqkhXewGA5v3Apuavv+LsvwD3EzT8JzYdaiRfJ1FGNqAkOwzqEHHNgPE+Ho3NxY7XMW776+waIPxbUFw/qmzQ"
     },
     {
      "t": "用「.」分成 4 組十進位數字",
      "icon": "⚫",
      "s": "8541c6bb3e446a98",
      "e": "+lI2rjcuhinrMZTletsNIkqjqX9wg+tvlwAD2D/8oHiFH5U5HHVM1lHDjxpD1Inmv59zEgW9lQIQxE8="
     },
     {
      "t": "用「:」分成 8 組十六進位數字",
      "icon": "➗",
      "s": "4a66a4aa488080e1",
      "e": "UXWOrj5OLkPRtS/CnqPyj6AHu+kB/HG0DUfiEl5vYKnAl7j8h4VJqoE9EMRaMWzMSgqcExH0LPlfKWrC92G4RNLFVOiYpFai"
     },
     {
      "t": "2001:db8::1",
      "icon": "🏷️",
      "s": "43f54b6cf7f212f0",
      "e": "pu6OyuWlq7rYvPOlmJs2CosLPTJT9V2r2fI8l2fRoUSdUnjMbs+ZHRsOBoEO3aBkgS0p9kzM+9NpxeMiNHnREag0FbLD7S7aMjEyp0x79YY/U2e07KAMq/IIdbE0jSfSevPopjmf4Q6a23yg"
     },
     {
      "t": "140.112.53.15",
      "icon": "🏷️",
      "s": "33140116e0deb4d7",
      "e": "XXtB89vVCJ7bsi3O4Jhd6rO0rg3l3i4yGnCxsVGOPDusz3NN6HpcuzeHpHV66y8rkz9Q+xHkgdiEkDCvGO4rBB+X2AvgnltvkYhmRDBd8QQQEuScHw=="
     },
     {
      "t": "位址數量不夠用，才需要換新版",
      "icon": "😰",
      "s": "323c5755f51e7280",
      "e": "iDlHYV/ZweyUxNioVDfpCF9VCnAQcN9vwCHKDavIYsQi/YxsgkwLhHjPq3TPsDHg6nDyxcKsjiv3WbFQtrwG04OnoMML7+grcvSc8w2Nu2yWIiWIiRUdhm0vkQ=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這樣省略，對不對？（原本的位址寫在題目裡）",
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
      "s": "60cb027e50bd387e",
      "e": "6W6IwCKGV8ZT5UbXm/Hb7cyXPgA9cJOtYbLBJo3A5islZ0tnVr+C2wHYPMoR7WUCyV6YMXwawsbeD7ck9Fz3Gxx8M3SSInyrObL5bQlaYOT2sF0MdDxxRN0sjIGtYx8FSvdkqJ/o1nhrXRFalA=="
     },
     {
      "t": "2531:0cb7:03a6:0000:0000:0000:0000:0f12 → 2531:cb7:3a6::f12",
      "icon": "✂️",
      "s": "384c8cc799918b36",
      "e": "SiV9AuaWIgFx0hiTtViLa6sTUfzkp5J9m4oum+N73XajswUpsWb+/z+6de4P7Q8cGskE4WtJZIQgIO2cmls6ZvDDPJ4yQV6VMklaoK8B1wSfzLxsr6BxN+fdFtfwomToci+5qWo="
     },
     {
      "t": "2531:0cb7:03a6:0000:0000:0000:0000:0f12 → 2531:cb7:3a6::f1",
      "icon": "✂️",
      "s": "1583474286a837c5",
      "e": "3PSv12a8bBLnqcNuvRgJlQ6whwx7sHuIrbQpkWYX8+hAL0d/sQwBh9kkJJyA2DnU2UIa9HM/epHqLlPSj7znuraYD3jreDK4eVJPqMZcZXM8eeABl+MHbZhhe1m6WXJKinl8pG+wUpzExVBt0MfEsA=="
     },
     {
      "t": "2001:0db8:0000:0000:0001:0000:0000:0001 → 2001:db8::1::1",
      "icon": "✂️",
      "s": "1551762b846993a0",
      "e": "v3Ly+XlMbR/HcGIpReun0yZGx7rHIu6CpaepxwtCFU3U01vYC5sAfbeYjdUtXw92aiLoYDGOcXw9xyH45P8af+kpug+8SUWPXd+Zr6BZ96gpAQmSJ2xa1UNoZZ8UZHZUvmQu4PtFEeplEbUCezMkpNsdm424P4SPlQTQFAVEFgc="
     },
     {
      "t": "2001:0db8:0000:0000:0001:0000:0000:0001 → 2001:db8::1:0:0:1",
      "icon": "✂️",
      "s": "651a2ea05b8a80b2",
      "e": "OIg6TysvfXa3Cs2vsJrS2KsiYczdb4onu/iUN6BL0xjVfFwJ+QMWFGBSGdj3crvxncKA6tGrSpeu5d2QqqM+QRINS/2yxZi34jgQiSFIfeg6OQI/rvWXch23w2w7V/LZgEjkDEMuem1szQ=="
     }
    ]
   },
   {
    "type": "type",
    "prompt": "動手算算看、寫寫看（寫出最短的寫法）",
    "items": [
     {
      "t": "IPv6 有 128 個位元，每 4 個位元換成 1 個十六進位數字，一共是幾個十六進位數字？",
      "icon": "🧮",
      "s": "bc6b7a1df256e740",
      "e": [
       "fJcNDiEvpURPzU34OL2ezYOkgGcFHK6AwVsOcAOg013a4K/aHYrooIeq4ZBC5k7jS3WXpn+MuZ/0dStfKj9QsrNBCuUz9+HMdLPciuRnCIMAvyTFPysbQt1RW4nsVwr5Wah0yw=="
      ]
     },
     {
      "t": "2001:0db8:0000:0000:0000:0000:0000:0001 最短怎麼寫？",
      "icon": "✂️",
      "s": "7816462d886850f3",
      "e": [
       "/zdIQyJAaBwZnut+TKhUQR9YY+FECGFCOkE2JWY08FKq3c4L3Gx5qNGuVXqgvM90zKWf1axdkqieBQW37JnN/umz/qb44jTpSClRZ3JHkOi4OZoPe7tx4axA1mU8vcT5XRidLO3+NGk8LtwHBch2NvMdu+Ni"
      ]
     },
     {
      "t": "fe80:0000:0000:0000:0204:61ff:fe9d:f156 最短怎麼寫？",
      "icon": "✂️",
      "s": "c556c8cbfc125f04",
      "e": [
       "PNdppz1HYqiGUIL3Tkxc3jZOTwlWQNh20NZoIGoBMcALxxnq7z7BxW6+OLcMC/MUuRmC0Daqb0SIQ5DSRtlbujDZFX8Ru1icwlzBnWNksv92ldFHMPSCSl/qvjszjlCrhn3tyK+A/oMYOyz2t3/E4wWRT8bBKTlL6FQPNQBdXU02ssJq"
      ]
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "標出來的這一段是網址的哪一部分？",
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
      "s": "afee2c36a07b4f4a",
      "e": "FHlXyHVSPIAVDEb5jJlLnb6D37okrHYU4IxAVw2r1Fckg3NQi0xHOjW/Zi11fovqkW5g3VGBExWLM7OzEuAjEC/In+xoUxfcxR3L"
     },
     {
      "t": "www.ntu.edu.tw 的「tw」",
      "icon": "🌐",
      "s": "e84007d634e32aa4",
      "e": "0EMxxHuvShNppkeS7upgRwNgPlf8JRks8x8jBDRMIATyGrTjOURO588iX+zC7OHeOe+bwM2ljl0="
     },
     {
      "t": "www.taichung.gov.tw 的「gov」",
      "icon": "🌐",
      "s": "fe12d25ddc651773",
      "e": "E8smxTeWH/8BFxQQpeWRounWBvFIhZkIOYhT+RLAEM7RUvU23mLnYA01KePdh5Syt6WR8N97Gt4oayJmrmIu"
     },
     {
      "t": "mail.google.com 的「mail」",
      "icon": "🌐",
      "s": "5100d80cf8e90740",
      "e": "WVeKkiOBf4mxJgX5ECMA4bYI1G3A2TCqKAUHaYWoEF1YAtOfeG/TU3TK5nEJYo9+S3LypTfU1zaZL2s0bcCxNzyVP0AXet2HXAra6W7ZtMAf829rQ4AaeDXmfw=="
     },
     {
      "t": "www.taichung.gov.tw 的「taichung」",
      "icon": "🌐",
      "s": "843cfb230e24fe28",
      "e": "zxp45n8Jox6awMrj03YIbYICZyl6dPkzjOfFp2u+brarUGteubs+BVKH4MJR8PFu+6XI2Ss8c/HmThMdiXhuAkCPu3kVtQUj42Xn9Qc="
     },
     {
      "t": "www.yahoo.co.jp 的「jp」",
      "icon": "🌐",
      "s": "d27f084826033867",
      "e": "5hICfTlmWb3ROvfIOCQBU/aDTKT+J4E6zvgztbp6z6EfG+R+200l1cJ+F7XHfktt/AKN2vzUQf0="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這個網址最可能屬於哪一類機構？",
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
      "s": "afde37509b924727",
      "e": "WBZJ3o6Y9Vwz2E2A319R4R/ZwqCJjKeRIYYyiTxTdmPdqhRgQo6y+RhUe7k7JQea5ljKPCaH6cK6k7+3g3gwWCeAk1C2RrknkA=="
     },
     {
      "t": "www.taichung.gov.tw",
      "icon": "🌐",
      "s": "8c4cf4b8709c8d5d",
      "e": "w3iia+ULqc3DTsO4SxsljtO/LP8DCXxOShqLWdW2iPrwj9C2mByTi3g68fHJ9TPMTEvgp1fHtrDIaNaoog=="
     },
     {
      "t": "www.pchome.com.tw",
      "icon": "🌐",
      "s": "7b9c723cff7b25ec",
      "e": "Tuk6nondCebKjzrlw++KSxSS3a0a+86OmP+V0UMddbJbSNT2Koe8yV7Od4lZX9Me3/bwaDH/zQ=="
     },
     {
      "t": "www.wikipedia.org",
      "icon": "🌐",
      "s": "69e7444e5f854edb",
      "e": "VhIowPcd3GG+/ziRRx/7Yw16Y9d8lNjC55QhVMDvWv2cK088llBE9VKqy3L3id9Xpg7oeqjfO+sp3P89N1aWIxFY9PpTVNYVL0DM53Tvc+pF3A=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "在瀏覽器打入網址按 Enter 之後，依序發生什麼事？",
    "s": "993774221c71f0da",
    "items": [
     {
      "t": "瀏覽器把網頁顯示出來",
      "icon": "🪟"
     },
     {
      "t": "伺服器把網頁資料傳回來",
      "icon": "📦"
     },
     {
      "t": "依 IP 位址連到網站伺服器",
      "icon": "🖥️"
     },
     {
      "t": "瀏覽器拿到網域名稱",
      "icon": "⌨️"
     },
     {
      "t": "DNS 把網域名稱查成 IP 位址",
      "icon": "📒"
     }
    ],
    "seq": [
     "2M4AQKism2x9LN/xwxdmEKy86WEmWjV29oyqZhHT",
     "Yml2d+BwYfIusdv7TDHgZA7+d9O4d14r8v/s0Wdo",
     "B62e6znYyq+aeAzjjjg7L0AYxI3HLqio3m7pZdOb",
     "G2W5M2PjkwGPNaG/WYLyygzu5RvJqZ6oIPaHD+cc",
     "N1nk8W2nCLEif8G7Bjaz+Ong6gvG6WZ1uxhGyiURnxfmQwE59Ig4ii1GzWzM4qsk0HDhWzKh6Jkqz7SD/ShRmnaUfOYNHR2NgUvwsY6FtX8wwsvSkuvFXjG47cJwwPF7UaRnPw=="
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這是哪一種網路服務？",
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
      "s": "97a73cb1d240d2cb",
      "e": "btMRmF7GUzXoxFhkmszX34pEz/73j7Aq7mCTEx6K02d2/U9FLCGM0WMk6Zv+UdT/92GJRMhGX8yzTinzc6soTK/fv16VEH8ne88="
     },
     {
      "t": "把專題報告當附件寄給老師",
      "icon": "📎",
      "s": "c501908cf508a55d",
      "e": "AJbZ9HnfKCdyhvv1NdqogSd5CSavSQb9wbO8NXtTHKx3YC25yfDZ4AJ4itxGwX9IGsks2mw1iqg0F7Lv/GNlQeHpC85g+4g6ybNuI6DsENdFoWGKnAi8f5f83ybM7MhoHmXVmHN+u+RyYA=="
     },
     {
      "t": "畢旅群組大家即時討論要帶什麼",
      "icon": "🗨️",
      "s": "dd105eada4fc7f1f",
      "e": "1C0vjrkdcE6R8xXmf9dDLStoYj/CDXpCgVvPMrN02w1OQ+ElV/ApI8Th8oIrc2jhgZGLVwiHc6KJMFc5bCK78U+JZRLAhUtvUIMeWt9Z/2t4Bw=="
     },
     {
      "t": "發一則畢業照限時動態",
      "icon": "🎓",
      "s": "2fc756de62a25fd4",
      "e": "6xooUTZXtlflrduwF17NjK2iWQwNPgefcTLP0WhbM96fd9x6XpDtVdL1PJTsSvgg5vmLOYISAUdZ54TIDGq4HHEmUbwda7P3cjTRdS96J+ZTeK+s3lPSHykDKA=="
     },
     {
      "t": "晚上想看哪一集影集就點哪一集",
      "icon": "🍿",
      "s": "353e5a93524b3f3c",
      "e": "qhKenIGw0mv6KZHt7MQUBhW+ynxpW8dFIrIe4BI0yqRJpLBzNVDR+372xBjnLVPJvjgZEchWRnV29+4fH0QU+ljAHetylwt8zxdHDoKKNMOEOCkNOA6Uy0dnRdHUvQ=="
     },
     {
      "t": "空氣盒子自動上傳 PM2.5 數值",
      "icon": "🌫️",
      "s": "476343c15dfb1e38",
      "e": "o2VnCjv8MVlhxvnkCHYcMCmlV2rU7eeKhWRnqGW85VjP4vtZLgiNyebsF7RiqWGufdK1JyzaFkuma45hWL1/lwFUUl7Onw1fdKvQ5M231AETOY+Bdg=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這件事用到哪一個協定？",
    "buckets": [
     {
      "id": "smtp",
      "label": "SMTP",
      "icon": "📤"
     },
     {
      "id": "pop3",
      "label": "POP3",
      "icon": "📥"
     },
     {
      "id": "https",
      "label": "HTTPS",
      "icon": "🔒"
     }
    ],
    "items": [
     {
      "t": "按下「寄出」，信件送往收件人的郵件伺服器",
      "icon": "📤",
      "s": "4b73bb7ee828067d",
      "e": "BSCtrYJduFMwmcrKJAwIxgQH6E6dn+UoV5y1OrY9+6OmcDYiEwiXIhI6PMALNHmzjOWJXoclTw=="
     },
     {
      "t": "從郵件伺服器把信件下載到自己的電腦",
      "icon": "📥",
      "s": "3bdf8f7accf6ca66",
      "e": "sTp4VRGdlggtrlEUg1HbC+UxenarFQkj228B3+lbzlGuHSGYSEcMzVG89u1TZf9PuL5Vlu563g=="
     },
     {
      "t": "在網路商店輸入信用卡資料，網址列有鎖頭",
      "icon": "🔒",
      "s": "527d49c82c56f978",
      "e": "2jyPMIwrvYxGySjXtLz2BcetU6nHuPnoMs394pCjytwWer0wQyZjwrGlIqqdPEsarBez+G8eH2MmgTydRzs1cNRZT2d21e3NmM/wiq4="
     },
     {
      "t": "登入學校帳號的網頁，資料要加密傳送",
      "icon": "🔐",
      "s": "408f93f1a94cb828",
      "e": "3mMKLh0QFapO9yosni0FIVRMFgssy/B5TbY/Xj3j/A7cNkEtWf9LyTRI3WPReAAh0+5nh+O8t/FDQoiBpkWvDipo319Yi51jkHV63U8="
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這個情境最適合哪一種無線技術？",
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
      "s": "69b62d850503af21",
      "e": "Lt8SejBKiChVAQxjdW+iyJdP+FTgjIdnp72qry2TzNEbx8Pbe8CWyotnb7foKa21cMDKBtQpw7lVlCXHH5SP5pBK5whetRDxwFWI+zft/ltFA9qNNX4tHQ=="
     },
     {
      "t": "智慧手錶把步數同步到手機",
      "icon": "⌚",
      "s": "f29b059967d3f3e3",
      "e": "Oi2D7P9yndirxBJbYNJWeHoH0rZdi27Mq8MVHE/JavvumMbCe2dlFEsrC1LBzFvKDINuQicpZwACLcL3+G3HDATwRAab/GTQyLzWo/U="
     },
     {
      "t": "在家用筆電看高畫質影片",
      "icon": "💻",
      "s": "9a3f1b5360de300e",
      "e": "ruuw+U3IVBUXc/TtUHAEZSW3Prn+8KH2zX1YgzKHGjfGJojVWVDHYRsoCvs3cF1CuksPJtra7xUTOHqY30yMIVkgTELD+qTeP849lwoLhE9uAGE="
     },
     {
      "t": "電腦教室的平板無線上網",
      "icon": "🏫",
      "s": "741dea71e011a1fe",
      "e": "AvyJhCa5jgggqjkN+q4Dh67t2lKVy6216SQrIc9R+NygaFf1IlVPxMU3GOM+4neiuQiRvKKb+OnoOtRN9Dvq0CpW6rjIlerxWbg7"
     },
     {
      "t": "搭公車時用手機查路線",
      "icon": "🚌",
      "s": "ed978f363500d058",
      "e": "6dBhHbv0IaAAA6L+uMemoMh+GJ74V7I7tOlHap4jghPBqDywFXXyoYt4Ak2oeD5hhU6NB0tJXmTGhOLerhUhYKgOZXEUx8Pt64vtr2KtVwR0RBiObVtJUKuWjg=="
     },
     {
      "t": "爬山時打電話報平安",
      "icon": "⛰️",
      "s": "98781c0b4d9edd08",
      "e": "8eyTn7JmzlgWCkRbLwFWRd2iadaL77i4Lta5ddXRUmLsDa4D+VjbuM+k3S7oFnpAdZZ25/X428/W4ybUs0c7BNzVIu4liSUXsn7mScKhY1iWUg=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這個應用最需要 5G 的哪一個特性？",
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
      "s": "f677b143a6f91e28",
      "e": "hpHSE9tZjjJO0kJujjzqNyt0kzLAMU/JXTumnhTXedIiRPnBYZQ2t7M6MKLvaIjb82v6wizCLwMtdxeW0Oc04cr5J/8JkaXJD52XZe9hDw=="
     },
     {
      "t": "醫生遠端操作手術機器手臂",
      "icon": "🩺",
      "s": "f5dc00f446a359f3",
      "e": "Q+IE9JX4Q0WyVNcyPF1gpwoLMtuMiDAq0JznSps74AFWqQTe3aDBax3Kg+Ry7caSRKHrqH6Tw4AOkCQQZ5Qf1gx2GAlgbIAIZ3XuckqXJXE1lVcSAQ4nOw=="
     },
     {
      "t": "自駕車看到障礙物要立刻煞車",
      "icon": "🚗",
      "s": "bbbe1f1328ccc223",
      "e": "unOrZ5BqRefyh+13W5tO6uVRdr7JAyYN+dOqxVMMGL6UJoLiFQBBGrg0TZCzDhvk423au0+Q9/hNZ/cB9YQ+zMHGjmjnXs02H0//OSnLwVs4zA=="
     },
     {
      "t": "演唱會現場幾萬人同時上網",
      "icon": "🎤",
      "s": "10718ce5b787e6db",
      "e": "49WDshAZfKXFqWpLnyJRrk2A68P51MVJ5tRfUSpHn+aPCiEssDwXjh7aD7QOwx3xntfk85CWkA5SQUpCsyeAb0FBJ0/uxRO6rlCmNhs6d7K/HTk3Vg=="
     },
     {
      "t": "智慧工廠上千個感測器同時連線",
      "icon": "🏭",
      "s": "1472a1c27dad0369",
      "e": "XK7tn1TsNIWxwP2v/qbbOBCxPfTEhkAsi7yZOEcVXoJBofDitvekGqf0BudMmZU7CjQH5G3xprLbiF/OS59ajla7eWYWSPrrWyltW8PY3UzOYg=="
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
  "rounds": [
   {
    "type": "type",
    "prompt": "算算看（只要寫數字）",
    "items": [
     {
      "t": "100 Mbps 的網路，每秒最多下載幾 MB？",
      "icon": "🧮",
      "s": "b0eb1156e392ed55",
      "e": [
       "+sWD6ZtwjimM7KHVnlAOxcPx1sWqLdvD02ANDHKBsIR5ufUCS6pbxix2UfPuqs+pcpO+jo7KMpP10ywIMlPCbByidtaGEPVgCtWXCt/G/bPty7rH0VZbN7si4nyretDRZUA="
      ]
     },
     {
      "t": "用 100 Mbps 下載 50 MB 的檔案，最少要幾秒？",
      "icon": "⏱️",
      "s": "0244fa3a6e4cdbff",
      "e": [
       "EgXTmN7A7uk0SXOgf9Is/v9JOzYVU19tbT9/Ijjn5eApfO146B6n4DRAOlYa3oDwxb6MdMcP04xwkl5MXjZpF3iL0HCzZ0Zl89Z27KDYu6avPKqCuLHfiTRwqx2QfdAV"
      ]
     },
     {
      "t": "用 400 Mbps 下載 1000 MB 的影片，最少要幾秒？",
      "icon": "🎬",
      "s": "b0f0f3f612657b51",
      "e": [
       "+rhLepg5yb5CBslCEm2rrL7tJ/djppLL+y5CwMcEsxpqgAkXC36lUWFS7ed+bLhYE1tOjzmtrSf0js4P4IdlWd8CfjO3DZGLsO5M5eXT9QdbqqDw2I/LBrR5t1xTKaoG"
      ]
     },
     {
      "t": "家裡租 100 Mbps，基地臺最高 1750 Mbps，上網最快是幾 Mbps？",
      "icon": "🐢",
      "s": "9066bb5db82229b2",
      "e": [
       "e+DC0puihCRsT0ymTGEK7Qka8YSLU3BLICa1cF0sfb7PcT8MmGGklCm0VHTCTT/nS8FBSXZf7NJdzRum1rZl0YQVitkBhfUzZeSVpsigOMIqxNyvRqfdKPmx3DCt66D1nPuiUnmB3HTsHWpb"
      ]
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這個情況用哪一個頻段比較好？",
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
      "s": "08a3287b146abebd",
      "e": "UIng4waZ3snMjAyawcHDYQ5v9mz3Jo9jG1RGN5Ls5YRlbBsIbGLNlNc2xu1mwb59FH3Mwz5cDpBxjKVflYxf62yhnVqv3laDW8Y="
     },
     {
      "t": "隔了兩道牆的房間，訊號要穩",
      "icon": "🧱",
      "s": "cc34615f35f66f41",
      "e": "1Sy0UCMxbKidKoA0M64B6i/kvgSzkSq28OT4VsqHd5K8wt8/owj7J8HmDvf1y6HsxhhzkXqQbPGFXVoBk93NFBzXrPLsCpv5MIIeu8R7"
     },
     {
      "t": "同一個房間裡快速傳大檔案",
      "icon": "📁",
      "s": "ddff76aa37dc0297",
      "e": "A+Qom+FQKziNVVTSSaERS0e15UHOX6kkOY1o+M39g0b7IwRDhw3Wlp+NEPOt9AVd5Qj4o6VKtAXudHs39mWgwJVN1JqKQrE="
     },
     {
      "t": "院子另一頭的監視器要連上網",
      "icon": "📷",
      "s": "28f7f5a7764a621d",
      "e": "KbcLzW7mXZWyCEexkvD9S6Rbnorlf8XMWcT0y/aIW1E3wo8pL2Kmn0dirlo6kuf3i/YIiUhIS31kI9mzMsrnrg=="
     }
    ]
   },
   {
    "type": "sort",
    "prompt": "這句話對不對？",
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
      "s": "abb92071a0b0631c",
      "e": "FvI/o/TExMJ7eWupJXhcdYr7rthcLwrpshYfRQNKGk5EDS9YcjwHK+4XIesB3phjqi3VwOPZuz3fr/LZ+I1jFtIDBB/IF7fNjjBcKp9+68zfLyarC068RvgWDLwxQFzgmz0cbyHOw1DsbjJ1uFx6i7gmxtx4MvLGXpM="
     },
     {
      "t": "Wi-Fi 5 的筆電可以連 Wi-Fi 6 基地臺，但只有 Wi-Fi 5 的速度",
      "icon": "💻",
      "s": "7bd7e0d2728868ef",
      "e": "D5aGVp6CEduwZ3W9RxyizohwaBWqINJPivU7FVyuj01be91QE96a3QoixOgVRyhYECLKXSYhbKSgkokWwg=="
     },
     {
      "t": "同一台基地臺連的人越多，每個人分到的頻寬越少",
      "icon": "👥",
      "s": "b00738018055a013",
      "e": "mqC8UKEdGwu+tX0ILm709Q6lWzT+Gv6zQ/COaiqFYe3TYJYUORgLFr/o2qIwBW0W6TczZ9R+rEgRsVMpG0mz+Jce2o4HRrDkhifch4Ig+izf7Htm/yI="
     },
     {
      "t": "買了最快的基地臺，上網就一定比 ISP 租的速度快",
      "icon": "🛒",
      "s": "308115e0c65b8aa2",
      "e": "Yo+u1ROe8sY+AUGwmB9OmrfNmbN5QrsTk9gMr3itm1kOsr8fraZFwV9CltY1cWytxxybe32Xrn+3ihbgDp3t/HCLOxMz67Z5cbBsNeLSRa+szX5t1g5gAMN14ljMmDrom4tDJ4rUWLECx0CU4n2c0Q=="
     },
     {
      "t": "Wi-Fi 6 的標準是 IEEE 802.11ax",
      "icon": "📄",
      "s": "52e54fec5479717e",
      "e": "6L7Jz38g4tWrrQusHmC/jPcsD8oxW699QzZxX/qhlQPjaUhd+tFh9rp8ZvSagfRLASBvxXfTCFJnakQLA6izbY13AcJPosw7nt/rZvsM9krktbBm"
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
  "rounds": [
   {
    "type": "sort",
    "prompt": "這個「嗶」用的是哪一種技術？",
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
      "s": "243052fa828ae365",
      "e": "Qc+mqT/HEnJrdc44hpGkwM8HG+X+Zewvh1YpDMPkmfomkCvhS47pWMXbNE9ODJ7Hqs9MQvWLOHdufodHkTrDQsy6Hjf5xwWc3CqQoz5E+QD6LkOPMqGRnQw="
     },
     {
      "t": "用手機鏡頭掃描餐廳桌上的點餐碼",
      "icon": "🍜",
      "s": "b78275da6e4b268d",
      "e": "znzjDTuvVsSQcSAlzBVHd2xXNAJ0lIG03YwOB67o1VU9w2BNxcxazm7ffPoUV4aR29/Z2KcCBli6ATjGd3D8VxhNYS5EgwC1TA=="
     },
     {
      "t": "把手機靠近收銀機感應付款",
      "icon": "📱",
      "s": "1bdd048e0513839d",
      "e": "vXaRZX0O/PMgM/TYuFWAP+k8QZqzWavjeLi49XzylKu932Kb5pSZyCt9BodfwyBCQsiGQ0rqRNFYE1eQoKDs4FDNCzIn5UYmH9i3"
     },
     {
      "t": "開車經過高速公路門架自動扣款",
      "icon": "🚗",
      "s": "cd538ddd24fbbb17",
      "e": "74rS4qfVJonp0jkCWvj/Vu4kHAUbMh+tVh7S98OZZ5PQ2383I5ds1fVccZ0npIdr45dMWsh1UfHMc67DofWrSjSmVUcTcyPn+f5+uBgoHl+BMLdoxeCq3luFt4sw1w=="
     },
     {
      "t": "拿悠遊卡刷捷運閘門",
      "icon": "🚇",
      "s": "1456f33b8f1b4e70",
      "e": "HBBz7CNdu90AQywKPbGXHLASY1vSSJaarodQSkt3kXoTIUd/AxKewhLNqiCY00SVbktKqO0+QdZSdHh3Y/bx1xewl8s="
     },
     {
      "t": "圖書館把一疊書放上去就自動借出",
      "icon": "📚",
      "s": "d181a8f1950cca39",
      "e": "OEBNG8ZqKUai8Oy/WU4Loq41u2I8NePJoUbzM71zdcu3//0ACvEjgWUg8wN/GK7SX7qZNZ3BF8IkmR9N6Gy3Rm4zXYG9GTD09GKoDsvA78EfiIyHs9MNCH9IHL0fc6c="
     }
    ]
   }
  ]
 }
];
