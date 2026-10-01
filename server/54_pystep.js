/* =====================================================================
   🐍 Python 三段式挑戰（⭐ 看懂再改 → ⭐⭐ 引導）── 開放式題目的檢查
   ---------------------------------------------------------------------
   課程設計與檢查規則參考：teacheryimei/course115-1「Python 畢旅冒險」（經原作者同意）。
   原版的檢查寫在網頁裡（F12 看得到），這裡改成在驗證伺服器上檢查。
   pyc { t, lv, st, code, events, error, who }
     · st：0＝看懂再改、1＝引導（⭐⭐⭐ 自己完成＝原本的測資評分 py／pyg）
     · events：學生按「✅ 檢查挑戰」時，瀏覽器重新執行一次程式的過程（輸出、提示、學生輸入的值）
     → { ok, kind:'code'|'content'|'run', msg, stars, rc, ts }
       kind：code＝程式寫法還沒符合完成條件；content＝程式沒問題，但輸入的內容不符合情境（例如目的地打「香蕉」）
   ===================================================================== */
var PS_PLACE = ['台北', '臺北', '新北', '桃園', '台中', '臺中', '台南', '臺南', '高雄', '基隆', '新竹', '苗栗', '彰化', '南投', '雲林', '嘉義', '屏東', '宜蘭', '花蓮', '台東', '臺東',
  '澎湖', '金門', '馬祖', '墾丁', '日月潭', '阿里山', '九份', '淡水', '太魯閣', '綠島', '蘭嶼', '小琉球', '清境', '合歡山', '六福村', '劍湖山', '義大', '迪士尼', '環球影城',
  '日本', '韓國', '美國', '英國', '法國', '德國', '泰國', '越南', '澳洲', '加拿大', '義大利', '西班牙', '瑞士', '紐西蘭', '菲律賓', '馬來西亞', '印尼', '杜拜',
  '東京', '大阪', '京都', '北海道', '沖繩', '首爾', '釜山', '濟州', '巴黎', '倫敦', '紐約', '洛杉磯', '新加坡', '曼谷', '雪梨', '墨爾本', '香港', '澳門', '上海', '北京', '福岡', '名古屋', '神戶',
  'tokyo', 'osaka', 'kyoto', 'seoul', 'busan', 'paris', 'london', 'new york', 'singapore', 'bangkok', 'sydney', 'melbourne', 'hong kong', 'macau', 'shanghai', 'beijing', 'taipei', 'kaohsiung', 'japan', 'korea'];
var PS_ACT = ['拍照', '攝影', '逛街', '逛夜市', '購物', '吃美食', '吃東西', '看風景', '看夜景', '看海', '爬山', '登山', '散步', '騎車', '騎腳踏車', '游泳', '泡溫泉', '參觀', '遊覽', '玩水', '搭船', '搭纜車',
  '看展', '看電影', '唱歌', '露營', '野餐', '滑雪', '浮潛', '潛水', '衝浪', '賞花', '賞雪', '看日出', '看夕陽', '逛博物館', '逛園區', '坐摩天輪', '玩遊樂設施', '吃小吃', '旅遊', '旅行'];
var PS_ACT_EN = ['take photos', 'take pictures', 'shopping', 'swimming', 'hiking', 'camping', 'sightseeing', 'eat food', 'visit museum', 'cycling', 'skiing', 'surfing', 'snorkeling'];
var PS_NOT_PLACE = ['香蕉', '蘋果', '西瓜', '橘子', '芒果', '葡萄', '便當', '雞排', '珍珠奶茶', '漢堡', '薯條', '鉛筆', '橡皮擦', '桌子', '椅子', '手機', '電腦', '作業', '數學', '英文', '哈哈', '不知道', '隨便'];
var PS_PROMPT = { place: ['城市', '地點', '地方', '目的地', '想去', '哪裡', 'where', 'city', 'destination'], days: ['天數', '幾天', 'days', 'day'], activity: ['活動', '事情', '想做', '期待', 'activity'] };

/* ── 讀程式：先拿掉註解（# 後面的字不算，免得寫在註解裡的數字也被當成條件） ── */
function psNoComment(code) {
  return String(code || '').split('\n').map(function (line) {
    var q = null;
    for (var i = 0; i < line.length; i++) {
      var c = line.charAt(i);
      if (q) { if (c === '\\') i++; else if (c === q) q = null; }
      else if (c === '"' || c === "'") q = c;
      else if (c === '#') return line.slice(0, i);
    }
    return line;
  }).join('\n');
}
function psCount(s, rx) { return (s.match(rx) || []).length; }
function psPrintLits(code) { var out = [], m, rx = /print\s*\(\s*(["'])(.*?)\1\s*\)/g; while ((m = rx.exec(code)) !== null) out.push(m[2].trim()); return out; }
function psPromptLits(code) { var out = [], m, rx = /input\s*\(\s*(["'])(.*?)\1\s*\)/g; while ((m = rx.exec(code)) !== null) out.push(m[2].trim()); return out; }
function psInputVars(code) {
  var out = [];
  code.split('\n').forEach(function (line) { var m = line.match(/^\s*([A-Za-z_]\w*)\s*=\s*(?:(?:int|float)\s*\(\s*)?input\s*\(/); if (m && out.indexOf(m[1]) < 0) out.push(m[1]); });
  return out;
}
function psPrintUses(code, vars, min) {
  var prints = [], m, rx = /print\s*\(([^\n]*)\)/g; while ((m = rx.exec(code)) !== null) prints.push(m[1]);
  var used = vars.filter(function (v) { return prints.some(function (p) { return new RegExp('\\b' + v + '\\b').test(p); }); });
  return used.length >= (min || 1);
}
/* ── 執行過程：輸出的數字、學生輸入的值（依 input 提示配對） ── */
function psOuts(events) { return (events || []).filter(function (e) { return e && e[0] === 'out'; }).map(function (e) { return String(e[1]); }).join(''); }
function psOutNums(events) { var m = pyHalf(psOuts(events)).match(/-?\d+(?:\.\d+)?/g); return m ? m.map(Number) : []; }
function psTalk(events) {
  var out = [], last = '';
  (events || []).forEach(function (e) { if (!e) return; if (e[0] === 'prompt') last = String(e[1]); if (e[0] === 'in') { out.push({ prompt: last, value: String(e[1]).trim() }); last = ''; } });
  return out;
}
function psVal(talk, keys, i) {
  for (var k = 0; k < talk.length; k++) if (keys.some(function (w) { return talk[k].prompt.indexOf(w) >= 0; })) return talk[k].value;
  return talk[i] ? talk[i].value : '';
}
/* ── 情境內容：像不像地點、活動、合理的數字 ── */
function psGibberish(x) {
  x = String(x || '').trim();
  if (!x) return true;
  if (/^(.)\1{3,}$/i.test(x)) return true;                 // ddddd、aaaaa
  if (/^[A-Za-z]{5,}$/.test(x)) {
    var lo = x.toLowerCase(), v = (lo.match(/[aeiou]/g) || []).length;
    if (PS_PLACE.indexOf(lo) < 0 && PS_ACT_EN.indexOf(lo) < 0 && (v === 0 || v / x.length < 0.18)) return true;
  }
  return false;
}
function psPlace(x) {
  x = String(x || '').trim(); var lo = x.toLowerCase();
  if (x.length < 2 || psGibberish(x)) return false;
  if (PS_NOT_PLACE.some(function (w) { return x.indexOf(w) >= 0; })) return false;
  if (PS_PLACE.some(function (w) { return lo.indexOf(w) >= 0; })) return true;
  return /[市縣區鄉鎮村國島山湖海港站館園場街城]$/.test(x);
}
function psActivity(x) {
  x = String(x || '').trim();
  if (x.length < 2 || psGibberish(x) || PS_NOT_PLACE.indexOf(x) >= 0) return false;
  if (PS_ACT.some(function (w) { return x.indexOf(w) >= 0; }) || PS_ACT_EN.some(function (w) { return x.toLowerCase().indexOf(w) >= 0; })) return true;
  return /[去看吃玩逛拍買游泳爬登騎搭坐泡參觀賞唱走跑露營滑潛衝]/.test(x) && /[㐀-鿿]/.test(x);
}
function psPromptOk(text, kind) {
  var x = String(text || '').trim(); if (x.length < 2 || psGibberish(x)) return false;
  return (PS_PROMPT[kind] || []).some(function (w) { return x.toLowerCase().indexOf(w) >= 0; });
}
function psNum(v, min, max, integer) {
  var x = String(v == null ? '' : v).trim(); if (x === '') return false;
  var n = Number(pyHalf(x)); if (!isFinite(n) || (integer && Math.floor(n) !== n)) return false;
  return n >= min && n <= max;
}

/* ── 每一題的完成條件（程式寫法）：回傳 null＝通過，字串＝還差什麼 ── */
var PS_RULES = {
  p1_greeting: function (c, raw, S) {
    var p = psPrintLits(c), d = psPrintLits(S.demo || '');
    if (psCount(c, /print\s*\(/g) < 1) return '還沒有使用 print()。';
    if (!p.length || p.every(function (x) { return x.length < 2; })) return '招呼語需要有實際文字內容。';
    if (d.length && p.some(function (x) { return d.indexOf(x) >= 0; })) return '目前文字和黑框示範相同，請改成自己的招呼語。';
  },
  p1_two_distinct: function (c) {
    var p = psPrintLits(c);
    if (psCount(c, /print\s*\(/g) < 2) return '題目要求顯示兩行，所以需要 2 次 print()。';
    if (p.length < 2 || p.some(function (x) { return x.length < 2; })) return '兩行都要有實際文字內容。';
    if (p[0] === p[1]) return '兩行內容目前相同；第一行是地點，第二行是活動，請寫成不同內容。';
  },
  p2_one_input_var: function (c) {
    var v = psInputVars(c), pr = psPromptLits(c);
    if (psCount(c, /input\s*\(/g) < 1) return '還沒有使用 input() 詢問資料。';
    if (v.length < 1) return '需要把 input() 的回答存進變數。';
    if (!psPrintUses(c, v, 1)) return '最後要用 print() 顯示剛才保存的變數。';
    if (!pr.length || !psPromptOk(pr[0], 'place')) return 'input() 裡的提示要清楚詢問城市／地點／目的地，不要用 ddddd 這類無意義文字。';
  },
  p2_three_inputs_print: function (c) {
    var v = psInputVars(c), pr = psPromptLits(c);
    if (psCount(c, /input\s*\(/g) < 3) return '題目要求目的地、天數、活動三項資料，需要 3 次 input()。';
    if (v.length < 3) return '三項回答要分別存進 3 個不同變數。';
    if (!psPrintUses(c, v, 3)) return '輸出時還沒有使用到全部 3 個變數。';
    if (pr.length < 3) return '三次 input() 都要有清楚的提示文字。';
    if (!psPromptOk(pr[0], 'place')) return '第一個 input() 要清楚詢問目的地。';
    if (!psPromptOk(pr[1], 'days')) return '第二個 input() 要清楚詢問旅行天數。';
    if (!psPromptOk(pr[2], 'activity')) return '第三個 input() 要清楚詢問想做的活動。';
  },
  p3_multiply_int: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 2) return '票價和張數兩次輸入都要用 int() 轉成整數。';
    if (c.indexOf('*') < 0) return '總額需要使用乘法 *。';
    if (psCount(c, /print\s*\(/g) < 1) return '要把計算結果顯示出來。';
  },
  p3_budget: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 3) return '總預算、交通費、餐費都要使用 int(input())。';
    if (psCount(c, /-/g) < 2) return '要從總預算扣掉兩筆費用，需要完成兩次減法。';
    if (psCount(c, /print\s*\(/g) < 1) return '最後要顯示剩餘預算。';
  },
  p4_square: function (c) {
    if (psCount(c, /float\s*\(\s*input\s*\(/g) < 1) return '邊長可能有小數，需要 float(input())。';
    if (!/\*\*\s*2/.test(c)) return '面積需要使用 ** 2 計算平方。';
    if (!/round\s*\([^\n]+,\s*2\s*\)/.test(c)) return '結果需要用 round(..., 2) 整理到小數第 2 位。';
    if (psCount(c, /print\s*\(/g) < 1) return '最後要顯示面積。';
  },
  p4_speed: function (c) {
    if (psCount(c, /float\s*\(\s*input\s*\(/g) < 2) return '距離和時間兩次輸入都需要 float()。';
    if (!/[^/]\/[^/]/.test(c)) return '平均速度需要使用除法 /。';
    if (!/round\s*\([^\n]+,\s*1\s*\)/.test(c)) return '結果需要用 round(..., 1) 整理到小數第 1 位。';
    if (psCount(c, /print\s*\(/g) < 1) return '最後要顯示平均速度。';
  },
  p5_pass: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 1) return '先用 int(input()) 取得分數。';
    if (!/\bif\b/.test(c) || !/\belse\b/.test(c)) return '需要使用 if 和 else 形成兩個分支。';
    if (!/[<>]=?\s*60\b|\b60\s*[<>]=?/.test(c)) return '條件中還沒有使用 60 作為分界。';
    if (psCount(c, /print\s*\(/g) < 2) return '兩個分支都要有輸出。';
  },
  p5_rain: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 1) return '先用 int(input()) 取得降雨機率。';
    if (!/\bif\b/.test(c) || !/\belse\b/.test(c)) return '需要使用 if / else。';
    if (!/>=\s*50\b|\b50\s*<=/.test(c)) return '題目指定以 >= 50 作為判斷。';
    if (psCount(c, /print\s*\(/g) < 2) return '兩個分支都要有輸出。';
  },
  p6_age3: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 1) return '先用 int(input()) 取得年齡。';
    if (!/\bif\b/.test(c) || psCount(c, /\belif\b/g) < 1 || !/\belse\b/.test(c)) return '三種結果需要 if、elif、else。';
    if (!/\b6\b/.test(c) || !/\b18\b/.test(c)) return '條件中需要使用 6 和 18 作為分界。';
    if (psCount(c, /print\s*\(/g) < 3) return '三個分支都要有輸出。';
  },
  p6_temp4: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 1) return '先用 int(input()) 取得氣溫。';
    if (!/\bif\b/.test(c) || psCount(c, /\belif\b/g) < 2 || !/\belse\b/.test(c)) return '四種結果需要 if、至少 2 個 elif、else。';
    if (!['15', '25', '32'].every(function (x) { return new RegExp('\\b' + x + '\\b').test(c); })) return '條件中需要使用 15、25、32 三個分界。';
    if (psCount(c, /print\s*\(/g) < 4) return '四個分支都要有輸出。';
  },
  p7_and: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 2) return '需要取得兩個整數輸入。';
    if (!/\band\b/.test(c)) return '題目要求兩個條件都成立，需要使用 and。';
    if (!/\bif\b/.test(c) || !/\belse\b/.test(c)) return '需要使用 if / else。';
  },
  p7_or: function (c) {
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 2) return '需要取得兩個整數輸入。';
    if (!/\bor\b/.test(c)) return '題目要求其中一個成立即可，需要使用 or。';
    if (!/\bif\b/.test(c) || !/\belse\b/.test(c)) return '需要使用 if / else。';
  },
  p8_1to5: function (c, raw, S, ev) {
    if (!/\bfor\b/.test(c) || !/\brange\s*\(/.test(c)) return '需要使用 for + range()。';
    if (psOutNums(ev).join() !== '1,2,3,4,5') return '執行結果要依序顯示 1、2、3、4、5（range() 的停止位置本身不會被包含）。';
  },
  p8_even: function (c, raw, S, ev) {
    if (!/\bfor\b/.test(c) || !/\brange\s*\(/.test(c)) return '需要使用 for + range()。';
    if (!/range\s*\([^\n)]*,[^\n)]*,\s*2\s*\)/.test(c)) return 'range() 要用第三個參數：步進 2。';
    if (psCount(c, /print\s*\(/g) > 2) return '這題要利用迴圈規律，不要寫 5 個獨立 print()。';
    if (psOutNums(ev).join() !== '2,4,6,8,10') return '執行結果要依序顯示 2、4、6、8、10。';
  },
  p9_count5: function (c, raw, S, ev) {
    if (!/\bwhile\b/.test(c)) return '這題要求使用 while。';
    if (!/=\s*1\b/.test(c)) return '計數要從 1 開始。';
    if (!/(\+=\s*1\b|=\s*\w+\s*\+\s*1\b)/.test(c)) return '每輪都要更新計數變數，否則可能無限重複。';
    if (psOutNums(ev).join() !== '1,2,3,4,5') return '執行結果要依序顯示 1、2、3、4、5（while 的條件要讓 5 也被執行）。';
  },
  p9_password: function (c, raw) {
    if (!/\bwhile\b/.test(c)) return '密碼不正確時要繼續詢問，需要 while。';
    if (psCount(c, /int\s*\(\s*input\s*\(/g) < 1) return 'while 中要取得整數密碼輸入。';
    if (!/!=/.test(c)) return '可以用 != 表示「還沒猜中」。';
    if (!/print\s*\(\s*["']解鎖！?["']\s*\)/.test(raw)) return '答對後要顯示「解鎖！」。';
    if (!/\b\d{4}\b/.test(c)) return '請先設定一個四位數整數答案。';
  },
  p10_random10: function (c, raw, S, ev) {
    if (!/import\s+random/.test(c)) return '要先 import random。';
    if (!/random\.randint\s*\(\s*1\s*,\s*10\s*\)/.test(c)) return '隨機範圍要設定為 1～10。';
    var n = psOutNums(ev); if (!n.length || n.some(function (x) { return x < 1 || x > 10; })) return '要把產生的隨機數（1～10）顯示出來。';
  },
  p10_guess20: function (c) {
    if (!/random\.randint\s*\(\s*1\s*,\s*20\s*\)/.test(c)) return '隨機答案範圍要是 1～20。';
    if (!/\bwhile\b/.test(c)) return '要使用 while 讓玩家持續猜。';
    if (!/\bif\b/.test(c) || !/\belif\b/.test(c)) return '要使用 if / elif 提示太大或太小。';
    if (c.indexOf('>') < 0 || c.indexOf('<') < 0) return '大小提示要比較 > 和 <。';
  }
};
/* ── 情境內容（學生執行時輸入的值）：回傳 null＝合理 ── */
var PS_CONTENT = {
  p1_two_distinct: function (talk, ev, c) {
    var p = psPrintLits(c);
    if (!psPlace(p[0])) return '第一行「' + p[0] + '」不像實際地點。請寫例如「高雄」、「台北」、「東京」等想去的地方。';
    if (!psActivity(p[1])) return '第二行「' + p[1] + '」不像旅行活動。請寫例如「拍照」、「逛夜市」、「看風景」等想做的事情。';
  },
  p2_one_input_var: function (talk) { var x = psVal(talk, ['城市', '地點', '目的地'], 0); if (!psPlace(x)) return '「' + (x || '空白') + '」不像實際的城市或地點。請輸入例如「高雄」、「台北」、「東京」。'; },
  p2_three_inputs_print: function (talk) {
    var d = psVal(talk, ['目的地', '城市', '地點'], 0), n = psVal(talk, ['天數', '幾天'], 1), a = psVal(talk, ['活動', '期待'], 2);
    if (!psPlace(d)) return '目的地「' + (d || '空白') + '」不像實際地點。請輸入真實城市或旅遊地點。';
    if (!psNum(n, 1, 30, true)) return '旅行天數請輸入 1～30 的整數。';
    if (a.length < 2 || /^(不知道|隨便|無|沒有|123|abc)$/i.test(a) || psGibberish(a)) return '「最期待的活動」請輸入有意義的活動，例如參觀、拍照、逛夜市。';
  },
  p3_multiply_int: function (talk) {
    if (!psNum(psVal(talk, ['票價', '單張', '價格'], 0), 1, 100000, true)) return '單張票價要輸入大於 0 的整數。';
    if (!psNum(psVal(talk, ['張數', '幾張', '數量'], 1), 1, 1000, true)) return '張數要輸入大於 0 的整數。';
  },
  p3_budget: function (talk) {
    var ks = [['總預算', 0], ['交通費', 1], ['餐費', 2]];
    for (var i = 0; i < ks.length; i++) if (!psNum(psVal(talk, [ks[i][0]], ks[i][1]), 0, 10000000, true)) return ks[i][0] + '請輸入 0 以上的整數。';
  },
  p4_square: function (talk) { if (!psNum(psVal(talk, ['邊長', '長度'], 0), 0.01, 100000, false)) return '邊長要輸入大於 0 的數字。'; },
  p4_speed: function (talk) {
    if (!psNum(psVal(talk, ['距離'], 0), 0, 1000000, false)) return '距離請輸入 0 以上的數字。';
    if (!psNum(psVal(talk, ['時間', '小時'], 1), 0.01, 100000, false)) return '時間必須大於 0，否則無法計算平均速度。';
  },
  p5_pass: function (talk) { if (!psNum(psVal(talk, ['分數', '成績'], 0), 0, 100, true)) return '分數請輸入 0～100 的整數。'; },
  p5_rain: function (talk) { if (!psNum(psVal(talk, ['降雨', '機率'], 0), 0, 100, true)) return '降雨機率請輸入 0～100 的整數。'; },
  p6_age3: function (talk) { if (!psNum(psVal(talk, ['年齡', '歲'], 0), 0, 120, true)) return '年齡請輸入 0～120 的整數。'; },
  p6_temp4: function (talk) { if (!psNum(psVal(talk, ['氣溫', '溫度'], 0), -50, 60, true)) return '氣溫請輸入合理範圍內的整數，例如 -10～40。'; },
  p7_and: function (talk) { for (var i = 0; i < Math.min(2, talk.length); i++) if (talk[i].value !== '0' && talk[i].value !== '1') return '這一題指定用 1／0 回答，請只輸入 1 或 0。'; },
  p7_or: function (talk) { return PS_CONTENT.p7_and(talk); }
};

SV_ACTIONS.pyc = function (req) {
  var term = String(req.t), L = pyLevel(term, String(req.lv)), st = +req.st, S = L.steps && L.steps[st];
  if (!S || !(st === 0 || st === 1)) svFail('no-level');
  var raw = String(req.code || '').slice(0, 8000), c = psNoComment(raw), ev = Array.isArray(req.events) ? req.events.slice(0, 3000) : [];
  var rule = PS_RULES[S.rule]; if (!rule) svFail('server');
  function no(kind, msg) { return { ok: false, kind: kind, msg: msg, stars: 0 }; }
  if (S.demo && pyNorm(psNoComment(S.demo)) === pyNorm(c)) return no('code', '和黑框示範一模一樣 —— 黑框只是示範，請照「你的任務」改寫。');
  var m = rule(c, raw, S, ev);
  if (m) return no('code', m);
  if (req.error) return no('run', '程式執行時出錯了，先把錯誤修好再檢查。');
  if (!psOuts(ev).trim()) return no('run', '程式執行完了，但沒有顯示任何東西。');
  var talk = psTalk(ev), ck = PS_CONTENT[S.rule], cm = ck ? ck(talk, ev, raw) : null;
  if (cm) return no('content', cm);
  var stars = st + 1, run = { term: term, mod: 'python', lv: L.id || String(req.lv), who: req.who || null, st: st, hearts: stars, t0: Date.now() };
  var rc = svReceipt(run, stars); svLog(run, stars, '三段式第 ' + stars + ' 題');
  return { ok: true, stars: stars, rc: rc.rc, ts: rc.ts };
};
