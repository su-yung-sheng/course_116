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
  "icon": "📦",
  "title": "封包快遞",
  "book": "2-1 TCP/IP 通訊協定",
  "learn": "網路上傳資料，不是整份一起送，而是<span class=\"hl\">切成很多小封包</span>，到了目的地再組回來。<ul><li>🔢 <b>TCP 協定</b>：幫每個封包<span class=\"hl\">編號</span>，並用確認訊息檢查封包有沒有送到，沒到就重送</li><li>📮 <b>IP 協定</b>：幫封包加上「網路位址」，標明<span class=\"hl\">從哪裡來、要送到哪裡</span>，像信封上的地址</li></ul>封包可能走不同的路、不照順序抵達 —— 接收端靠編號重新排好。",
  "rounds": [
   {
    "type": "order",
    "prompt": "四個封包亂序抵達了！依編號把「畢業快樂」組回來",
    "s": "f653aeca1e865a3f",
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
     "WrNGKz4FbKRpsx9qKmLus1dGQSDHRv0B1K5GmWOy",
     "xYbQe3S4yey2w6X22b6HakKyNJ7ByNTjwf/2cs63",
     "LATgT+4Z2URuRPBalxPyRxWrdiiK8hluZagm3lo3",
     "rPLx/VDPJhwN9iPIVJfdKbTXaZzzuD/xLyFfINN1U9OsmoA/4I+1iQ2Tyie+fDrLw5XHj/nMdkoauhBi/koBBYFKz7xT2lxGO7XFPbBqhyrZW4nRlwlBnKgzHUBGaxZmU6uIm20XDORWoVez9P4B8ux9mPYuBMmCeANhy3eeNomBEzwNaVWC23Zk"
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
      "s": "60679c0deea0e7f2",
      "e": "mTdiZa3djA9aJx7lF6itrdpp2tL+0r1ec+vKRDXIUSS68kogoriUAKtVYHSY69y7ejxaipYofv0+vB04ca+OnA=="
     },
     {
      "t": "檢查封包有沒有送到，沒到就重送",
      "icon": "🔁",
      "s": "7fb8fb2fea4106cd",
      "e": "kEChrjLGvPfjvlsmcR4eBycJjjA27daJO/nnoKK7yFx4qZ8NOKFjlN/wldopjoDBdbNMMFt3qbbXAHwrnVvAvKDekGRG03BbDtSFQySnOI/8GHFz"
     },
     {
      "t": "在封包上寫上來源和目的地的網路位址",
      "icon": "🏷️",
      "s": "d2ccf19b190281a3",
      "e": "VVMeA/0rcgn/Hg0tJDiuFMmq2s7W6l+pThl6mt6dGojElp/otyIgFB80vHSimHr8DsP4Z3LRvMH/asoQ3Sn1+4DvMmwV"
     },
     {
      "t": "像信封上的收件人地址",
      "icon": "✉️",
      "s": "55809c3df0088f79",
      "e": "0w6hbTGROLnsZ0kSQQtQnOs6V5zVfg9q/qc/k2zI1aJvtcrKc6x5aHg/ydmXKvFKnOcc3heFfkWbKKPRHnHd6SVOUHC8O+FDKXs="
     },
     {
      "t": "收到後依號碼把封包重新組回原本的資料",
      "icon": "🧩",
      "s": "c75192662d4c73e6",
      "e": "A6mAV3Q9rp/YEZ6Q3mDHhQACY2rHh3lnLcKXndHYJHPjHeCMkJqVlRwqlGVcz5CBvNFIEwCc35BCCEmp5vvOtVdvZKhuZcmTt3yoHiXKGg=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "把「傳一張照片給朋友」的過程排好順序",
    "s": "f14d57dfc18acc94",
    "items": [
     {
      "t": "回傳「收到了」的確認",
      "icon": "✅"
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
      "t": "接收端依編號重組",
      "icon": "🧩"
     },
     {
      "t": "照片被切成許多小封包",
      "icon": "✂️"
     },
     {
      "t": "IP 加上來源與目的地位址",
      "icon": "🏷️"
     }
    ],
    "seq": [
     "A8KxEcv6kzIKMZViH1p+gpVk9xN1avifGdbpxJxA",
     "NxjMTpjv2lJVKg6ZbbvjEeC5P4RsT0ZTO7G1Imkg",
     "pFDffd8ceRko1J9/X0b7Lbz4YbsIZlBMXUUfd6Zo",
     "Z1xS5QBaioPzBEnyH/+KCZo++0AdBJYlGm8CD9tg",
     "tuEmlh9iq/oHOYXIq7IYM6uWImWHUeQ4szE/1O2E",
     "74xU2rXfufQXZUvBVomWzV2T7gZdaHjje6Z0FpKPoqZOhgmWv+/71xs4duoXf1/ZlARRb/92MvnVRavgWez1mMxdEMxVP+JMGxAxtK3KRQvdUG/vUaiUrXoXYToY50gFBU0DIKqZvD9d7zfITEF+rT01IJojibGtvavhePOZvctCNuc9JF4WngFe+Vk="
    ]
   }
  ]
 },
 {
  "id": "N3",
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
      "s": "af9b234ca6b90ea0",
      "e": "u/4je9q7sPCUyvsz3bL1bgZU6hNL2Gj2GviknMGat7IaU/dZayQvy0cYiMrZKFtFueyk1nHGrueWUP0OaR7a6NrLfKFG4yN0vm1vBA=="
     },
     {
      "t": "140.112.53.15",
      "icon": "🔢",
      "s": "d2864e4d802e687d",
      "e": "qhghyRSYRMxMpsv8sx782Qr/i9/NJrDGsWj3TlOwumjW/Syjkh1PX+lLxoTO4vIokLYve2mlTt1EaHoELk5XYi+KvdFQdcG0FsZxJQ=="
     },
     {
      "t": "256.10.1.1",
      "icon": "🔢",
      "s": "a88875146fa3985d",
      "e": "j7w1HjGQBJZ8QkYMBy6PzfHVtIeHRxZmfpESNETN137hcgTODTz61VUFGULMDW2uMZWxz5J61z1buDA0ZO387H9FcAvrfw5A4F9CFCdThYiB5eP0OvWX48EJnlxGE3SQekQt"
     },
     {
      "t": "10.0.0.300",
      "icon": "🔢",
      "s": "811d73ca431d7c92",
      "e": "XywMnvecdcEeOEhUCm9HSE+vJhyNyluG8UXL8iEnzR6OHh9T75Ews2x+Q8rpykAgETE+MFDcZQ=="
     },
     {
      "t": "163.21.236",
      "icon": "🔢",
      "s": "45224dde4bf5d839",
      "e": "n2mum8Eydt8HKde/cXRFIw06cwRw4RDP3F537m9XdIPTLqFLAZFAjSnOvJ3YyvCUOgGRGo6l61EUvufOIM3W04bGCtaGLw=="
     },
     {
      "t": "172.16.33.98",
      "icon": "🔢",
      "s": "e7db729dc94b9bea",
      "e": "mUXE8y2gpV/fbWu7LWJD0rNl3Pt7oKqstVOvzONR/Wu8ZfPaJoSe5eAxFR7vf8BLTBbfe+cpdYiCHVwHXGayXVhJ0guDajbGq7jWPA=="
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
      "s": "377e72da7b643f4e",
      "e": "t+4tHMs4c4hEXzkuQA9UhzGbjwD6vAa5iiOyp0ebaRaANZND0mvVtc9zbI6+smqqsnzqPxXOON+t0wn6QvmiA83205Q="
     },
     {
      "t": "10.2.3.4",
      "icon": "🔢",
      "s": "622619ec4e19ea85",
      "e": "gkyFEtSfrBis3Dv7uWVLFBHNTOFxYy1INpHB+U0ZpLHv6pHuoY//a55ctPbOElneD3d9v0SzEmfoR67zpML73uI="
     },
     {
      "t": "172.20.1.1",
      "icon": "🔢",
      "s": "cb5235879a7c8564",
      "e": "4CFzGPnqrcMSSRgrtpWGqk6EfwZDnWNobECbFzRTNMNFqPaIzOLL+ff9aH3/13SzTeh/c6sZ/B+Xba9JuAtPyp9csoSrudGRvFnqsElusu6urN6CbnFBsoRmwbQ3QjfvPbq9"
     },
     {
      "t": "172.32.0.1",
      "icon": "🔢",
      "s": "3083548ea2a592aa",
      "e": "e5lCM6hAiFnE5NoWk43KrzD8rdtzyPQhQ+onJJSRXvPaKY0uqpCVUIV0brXjUkkr1WRalwM9iOvi5onIA57zHn9awUarU4nNubsNS8+IgSA9VDoHTMc+p+ZAYoi97Ejmo6GdWMolkg=="
     },
     {
      "t": "140.112.53.15",
      "icon": "🔢",
      "s": "ee6985a0c835b163",
      "e": "LApAL0T1g+mNe5eJmS58B2gdbGzphM+Np/8GewTDq+Fb7V4SJrThPQnccQKH6Jo4YzOwCcRFWx+IxShbRr1z1My/rxxjh6iGlcPDrjtgP7fsa3ZsoWU="
     },
     {
      "t": "8.8.8.8",
      "icon": "🔢",
      "s": "70c46184f81df247",
      "e": "HXcCF11iGGQeDo5/WKh5KX44Er2ikLQQo5NuHI4beFDlXZ2BkDy7JDWgByBRDFBOFOfENj/zWcpcco3OItEyfqfLuYlgcjyBCHJqoTOkJ5U="
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
      "s": "ebf1a2f463937c21",
      "e": [
       "VSzq4HPurz2cpGNuWf1qaUOkCf3b5In4IX3ePaAEi0+Y7HK13UVQTwrmSuheQ6Q48cS05bl1DVyiVwx21G5/j6cJnOTBgMM="
      ]
     },
     {
      "t": "10101000 換成十進位是多少？",
      "icon": "🔢",
      "s": "c14a101acaea276f",
      "e": [
       "u5qo9WLbevdWCgqCiMZm7uVVmQ4ESK0vgT5vSvcvuKFtvRGNOxS+B+7SXy6MfEQ/ctdkNm4V/NFbY2C1b9LuB4QLSsfQBfbeLwzgnyiMy5GWyqKi95umkWsp2C8ZqBPW++r8IRI2hKjPe/xqvQJDgG40kBpptik="
      ]
     },
     {
      "t": "IPv4 每一組最大是多少？",
      "icon": "🔝",
      "s": "9b597ecbd74fc5f3",
      "e": [
       "ZohBdC6BrEx2Kq4/GyfBTkC5Q0jsyQXJ7ubTWrX0bhY/sS/b+fvTt38sfLQtVTbvGg4ulvxxCKAxDyuoQY2d52860ti8Y69cneYHgstHniLZMswXNrlCAXXfEDGNrIF7EF+od0xt4qo36wcN8HVLfIYbSDaGpjY9"
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "N4",
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
      "s": "dd4ca577bc47a32f",
      "e": "Y1Ss/MBZAGXSCz0ZsPuieRCWJer7cNzVL/EnZpq1vI1TllY9vZSFvdcIRRBgXD/kwp/Yw9JaklKZeFLSwerFUFGZ0Wo0xXMvJ4xk"
     },
     {
      "t": "www.ntu.edu.tw 的「tw」",
      "icon": "🌐",
      "s": "f523158984630751",
      "e": "L39nAZm9Vwxd5PkMkobWEt9/caQ157JyPnUQzr2CJ9trTNLIoJppfQso3ZdKwiONgQ+Bdy9ghNM="
     },
     {
      "t": "www.taichung.gov.tw 的「gov」",
      "icon": "🌐",
      "s": "59c248d2d906d853",
      "e": "USaZ4aLP5VKenU1ur+7XZrKhgW/cOmt8j3R3HzUu3/njzghiCjM+u1cBNeFvLacqPCuJAZY+5VvnBp6niA0s"
     },
     {
      "t": "mail.google.com 的「mail」",
      "icon": "🌐",
      "s": "0a527498bf5a5073",
      "e": "LW+PNdZuTvXwhgG0lss8Vd9fT2+49GFp3Qz5c/V/QwDmHsUN7SlunbXRHSN4ibIPh7KuHrmOeLYMeLiO3MBn1VCt7tpub4wl5oGWb4fOIhIJz+1ypnuPiwYm7g=="
     },
     {
      "t": "www.taichung.gov.tw 的「taichung」",
      "icon": "🌐",
      "s": "74845466d77c4de5",
      "e": "6JO0sxm/f1V64IAF31/Ht3fovxFQ4YMbUSA+AjJNTq6yq2jKsmytnDAFwZ8mLt8qi9tC8iFlIw1VZ6o4L6OrxJ5aPE4gkEpBEncb0rU="
     },
     {
      "t": "www.yahoo.co.jp 的「jp」",
      "icon": "🌐",
      "s": "8ea1a33aabd483d8",
      "e": "yI6nM561/PLoyOFmxB5ThsknVhb6KWi9cv5zGWZD73h49mvI9Mvjn4Xl4BV5UEzbVj9kRzBuNP0="
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
      "s": "1ac1e6fcf3a8033d",
      "e": "sfCycsCZ6uj549AeEDRV0bO6SdWJ2943V58aEzZuBNr4eZw2y/k5FEVDu8vc6eVd+MAJjra/fSG/Exhk+XnRQd/10DaNSqwD1Q=="
     },
     {
      "t": "www.taichung.gov.tw",
      "icon": "🌐",
      "s": "cabd64fb62296584",
      "e": "ecxsQf5duGpGsFAQ8WAjpCsw9ALPF+6/r4NRQN4swbWm76YJVPvLE/ng+e7o0ex1n/S6f2hMZ+hNXslnJg=="
     },
     {
      "t": "www.pchome.com.tw",
      "icon": "🌐",
      "s": "811b90f61d7ddba5",
      "e": "0mdZj+S63XOmxx80X9f0x9pQa709a8rkJnEY8cAUJF3m1HBGz390SxOzaeiKDa3NXBz7iCboHw=="
     },
     {
      "t": "www.wikipedia.org",
      "icon": "🌐",
      "s": "404361d173684b99",
      "e": "cnpkDkv7493vOID3nbXBvGZYTOEFOe6DlEyK5XjTr06HkCfkObMGu3uV/B1jLEphOt1zmI8djSUiQvjrYTvIU6jcIuxnR00et4UP7Hj2PmHTRw=="
     }
    ]
   },
   {
    "type": "order",
    "prompt": "在瀏覽器打入網址按 Enter 之後，依序發生什麼事？",
    "s": "890e180a5efc77d8",
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
     "BaBiFT3MVn4ZJ9g2G8FYwY3sPIZfqLqfT7Ig6HNy",
     "/3+wb9Bl5pZcdv0QEf+iKA6eB6tI2ySD+tRE6XRY",
     "ryXIWJ94qPaLfLDu4Nbo/Z/9xeoNylaWPeLngSSd",
     "WJCyz3oggursVXoV3nfLnZcPp+i6GuXMsGKief14",
     "k907VOQegSRJplwjupRlvWTpz8OZxlGMtUAYnZYK756WExhMK9rMor6XLv1xr2i4BgUOQ5OUzP5urgkcHePu9PQsuJxLBbJQv5t3MqGS8xqy4Yrett0M0MMnLwrjLgysYrNdcw=="
    ]
   }
  ]
 },
 {
  "id": "N5",
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
      "s": "b4f7d15849c74bc0",
      "e": "rhJx+3WqSaw/Ts2fU8lXvVkjnwv/iRpmIEOwUQCVYAnDgJfqzG7pwGXgpJGMsvZ5pFHeSXlNKHKRxzSarntegq+SmOtozqTdpMc="
     },
     {
      "t": "把專題報告當附件寄給老師",
      "icon": "📎",
      "s": "429f0dd66f08fade",
      "e": "iBj2PJ/vCc9IluCD9LpsMzTEeWGboADkxS/z4SMZ57VRNLmQTGLzPGsDcOadGyIgYbbxeCPSO2KU3RX7R2Sf4oFNdheoYLISNRjrYBz25/YPtEnL/O+U8pLOwZzEsx+LFEx90ektuSyfQA=="
     },
     {
      "t": "畢旅群組大家即時討論要帶什麼",
      "icon": "🗨️",
      "s": "8541c6bb3e446a98",
      "e": "UW9YPuSBmJsI+7dV8mGTyi8ju8lujOD0PaZpCohB2lMJZ26U4hskVgJSMt/jlU24saEvDC7VxcGT6HXszcQcSw3qojv/oFaGki8eSznndeY8aw=="
     },
     {
      "t": "發一則畢業照限時動態",
      "icon": "🎓",
      "s": "4a66a4aa488080e1",
      "e": "xeCB6YjE+z5gdGGjfpiJNwoz0KaiU//yf9YZspVLe8v9bpYcOvd/Qe9hhAMbK8nJYFABGqEvq6Rqw1ACTYlpJ1zf07f3U5/fI9iovhNSLbu8AnUSlLI16MsmOw=="
     },
     {
      "t": "晚上想看哪一集影集就點哪一集",
      "icon": "🍿",
      "s": "43f54b6cf7f212f0",
      "e": "6oZDwCC4R4lvvIO8yUX/SRuUvqa3OImYchgY3MEvCf3tr8aJRaJEX3eNVM9tamgxLi9lpJzc/7Poy7Xkbs0EUIqQeMO+OmCKsr1vdoRx5xFd1RCB4V/0P+AYtip+9A=="
     },
     {
      "t": "空氣盒子自動上傳 PM2.5 數值",
      "icon": "🌫️",
      "s": "33140116e0deb4d7",
      "e": "23dWrSns8tvjPEAeVPqwdcdmuDEZS7xBXC1PBlpE+hLtBxK0rktkTSTYu5jZRAh2dE3Yyg0JWAAhayd9YbQxwaalxX6GanxjDSV3ltJQ39V16QtwKQ=="
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
      "s": "60cb027e50bd387e",
      "e": "6uuE6nX4Ue9nLljUPGwivbWu+yPtXmEUvjqy0BpXxwaMUdnyYe97/HX5NuuYykbnVZVN/FVJmw=="
     },
     {
      "t": "從郵件伺服器把信件下載到自己的電腦",
      "icon": "📥",
      "s": "384c8cc799918b36",
      "e": "JjUQNsz1P9As9gDKgu/r/AX/LIizWGajEF6cfwxVB4i/0NfBsR3lVaio0O9otxPVg1gAOLZYXg=="
     },
     {
      "t": "在網路商店輸入信用卡資料，網址列有鎖頭",
      "icon": "🔒",
      "s": "1583474286a837c5",
      "e": "D7pbHihKiF1u2PnxQcXsYWtEzUssWKg0b51lMX1WF8qO2wwa/Yl3cD60YsF3svFqOATL0sVMR+tqkeT4tMTcsWhqT2cTTzZ9oxLcCXQ="
     },
     {
      "t": "登入學校帳號的網頁，資料要加密傳送",
      "icon": "🔐",
      "s": "1551762b846993a0",
      "e": "HP4NUIy+9WGFh9GJUMNlTTqok+/N2jmYs+wrC5nkK5nImxlMLup33TWUByq8LNCOecCiZLEMPFJ+aqtbTLHn+881nQaSPqEzlzCeVEY="
     }
    ]
   }
  ]
 },
 {
  "id": "N6",
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
      "s": "afee2c36a07b4f4a",
      "e": "aMpGp3ZRGDLlOwd08A89JHOtxgEBjdFjg0lMk7MoPlP+OM2f9ctm+O6Dhq8Y84p6Iu/dZrAhVhPQtxGt2cYEAT1TfXnV5/obo8PwproALohvfOwbaYaiIA=="
     },
     {
      "t": "智慧手錶把步數同步到手機",
      "icon": "⌚",
      "s": "e84007d634e32aa4",
      "e": "O2uFYurbKNvwXLyuqUQOVGttaE9GcYRYV3raXmdWd5tnay1ISfrbCVWesFvIy2sCsYg1o7bQLaXbtJcRSBQG9oesXtvrX5oimhTxGi0="
     },
     {
      "t": "在家用筆電看高畫質影片",
      "icon": "💻",
      "s": "fe12d25ddc651773",
      "e": "iMKSgEl1i9UuDbQ49vTvnTB4ZqVzAYU3HWfOHhmAuAf/KB97yAJu7pwh58YKIZKgpfjDCrUG1XzgY4UlNTa4+d1Q54O4w3h6Dt/TR4t8gZ8+CY8="
     },
     {
      "t": "電腦教室的平板無線上網",
      "icon": "🏫",
      "s": "5100d80cf8e90740",
      "e": "f/xW2mElyeclikcO1BqEaSB3fXyGHsVGO0XyJyD3cudso1ZjdAqLj3gWLHFyjGg+z1KHmRlhaeetzHq2+meuDvvSO9bgkKo6QwB4"
     },
     {
      "t": "搭公車時用手機查路線",
      "icon": "🚌",
      "s": "843cfb230e24fe28",
      "e": "AnQen3nc/etI9iNap9Mp/HMaroncNmqsICgGfvlV22cs/cXvPFtfjFg6h0faU3Hvs7iuZOtND+cu3HrkXBNNS8yf9UIsYPXobPdolvOdbLBpvJi2mhv/pQuLDA=="
     },
     {
      "t": "爬山時打電話報平安",
      "icon": "⛰️",
      "s": "d27f084826033867",
      "e": "tlaUDaZSfPiEb797XMt5aBAxhBnB6DUmij61wNAxVFeWIsBXGmPhVa0J3C07RTgUkZotMfWs6fRyyxybCkwmhCLu3tq0jw6FQIBzoj2L7LAb4A=="
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
      "s": "afde37509b924727",
      "e": "mJJWJK4HYNNDIzHCEh1qKnOPakoQXVJWB6mu2LSnlmJF3g6cUL1Jan4Umi+GCOyJyhcQnbI3sjxKqM8TFgb8EpQG1vMvKKk4zYCKEj5CZA=="
     },
     {
      "t": "醫生遠端操作手術機器手臂",
      "icon": "🩺",
      "s": "8c4cf4b8709c8d5d",
      "e": "gLWcVITfchUiRvPnKP2l87Qgr/43slKN345CI8eo8V4CHiAKvuMTPmoPSlOGugM346NHahIvTqh2A4gIQ4+rAfHbWv7vCKxxUNxgQX/cYQUEV0eC9ZQU+g=="
     },
     {
      "t": "自駕車看到障礙物要立刻煞車",
      "icon": "🚗",
      "s": "7b9c723cff7b25ec",
      "e": "v6qJbNHQAfNQlm8yzFB3AXCsNdcQ22t2AMm2IgKIQ5KGYp4uxWNMNRMIy02ASJibNUK7CMAMxENG8tgQzdCQbw9+x/msZ9wDN4eQjBbCGlqVVA=="
     },
     {
      "t": "演唱會現場幾萬人同時上網",
      "icon": "🎤",
      "s": "69e7444e5f854edb",
      "e": "DOcf105zkHqigfXwn+2m33gMyjcE+Gqe9xC2cqCieTM55ptru01+3vFhNJSxCFRRhY2nwHHBxQTFQt0NUvT4D2TqNRonLJ8g0EsN17NUdh/mxa/wZg=="
     },
     {
      "t": "智慧工廠上千個感測器同時連線",
      "icon": "🏭",
      "s": "0128196760a59fd8",
      "e": "MG/6+qW+buAzKRIIIWJhS0S3OoXFShaFovJcQ4XBYjqbA8ikOUjoMFB1xKaoUAfTA/wY4sImcaV8sAOxoow2iae04Kf3wnXD5fDu0QqM7si7nw=="
     }
    ]
   }
  ]
 },
 {
  "id": "N7",
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
      "s": "97a73cb1d240d2cb",
      "e": "d3LxWkR0wBZG2yQ5aXXI86my83SSRu00wP4yfrEvIJwZIm/cjyCJmj7wrc5TvIOk1PrfZ5PT9vllwgexmKnl8KS6Yt/mr03s8QXDdrOHlxvzN6Ks7vXByUg="
     },
     {
      "t": "用手機鏡頭掃描餐廳桌上的點餐碼",
      "icon": "🍜",
      "s": "c501908cf508a55d",
      "e": "Qqzi1eSGSCymnbDo7+pFtSfl1WWQGRSe8Adh+Owcvk7Ib0hKh/Qua6jWaqzfU3Jw2YCRdZfcBELzTcD0hWR3Why2RH63zBHtNg=="
     },
     {
      "t": "把手機靠近收銀機感應付款",
      "icon": "📱",
      "s": "dd105eada4fc7f1f",
      "e": "OnOKQPMuPy7mOfhXR7G/5DklmefOHLmuiFV1JHh1OtQkcq4FMXWcA6wGdrMehrSRgOZ5Cw2/rpaaTxjwlKkzh6jELx7UXs1Zybhl"
     },
     {
      "t": "開車經過高速公路門架自動扣款",
      "icon": "🚗",
      "s": "2fc756de62a25fd4",
      "e": "iM0BXeXWY3V0MYREd2o0yDwmzLCl1pwTTRcDesFWmZ9XX9X+YMwIDmhUTjKcovwJ510PwxmEAtzZSOEME3laS6W/W2wutCr4H7w9yGi39/U7V0nYkq4C2sPHpM9arQ=="
     },
     {
      "t": "拿悠遊卡刷捷運閘門",
      "icon": "🚇",
      "s": "353e5a93524b3f3c",
      "e": "beuKppphIhI3BSZZB5wxUdT3l9xfL0oWBuUgCEQ2RW5h+vMkLNftMuGKSsSPG7oWpS3aSY6iQS11PT9NoqquLWzhjno="
     },
     {
      "t": "圖書館把一疊書放上去就自動借出",
      "icon": "📚",
      "s": "476343c15dfb1e38",
      "e": "Hq0mgN+6IIWqeFc/Jk/UTdHIwB/KdeW3ZAJFsvjJvZTqV6tIt1EWdcW908o9fYaKxG+ZZ8jiR0Pj8AP2e17pmcWyjQGjSfgo+1+CodUioPUcNjtoqhTqroUZoj97TCc="
     }
    ]
   }
  ]
 }
];
