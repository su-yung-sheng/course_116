/* =====================================================================
   🤖 AI 助教工坊（aiassistant/index.html）：用 AI 協助自己設計 AI，再讓它當遊戲設計的檢核員
   ---------------------------------------------------------------------
   需要（依序載入）：config.js、k12.js、store.js、ui.js、content.js（全部在這個資料夾，和闖關網站 11601／11602 分開）
   內容（六關步驟、卡片範本、範例卡、測試題）都在 content.js；設計說明 README.md

   ⚠️ 這個網站不是 AI，也不連任何 AI 服務：網站只負責「流程、能量、紀錄」，
      學生按「📋 複製」→ 到 Gemini（config.js 的 AI_TOOL）貼上 → 把助教的結論貼回來。
   ⚠️ 星星：⭐、⭐⭐ 由這一頁依完成項目自動給；L4～L6 的 ⭐⭐⭐ 要老師輸入確認碼（AI 判斷不了的部分）。
      和其他工作站一樣是本機紀錄、沒有伺服器收據（學習回饋，不是防作弊的成績）。

   資料（形狀和主系統的進度文件一樣，見 store.js；存在 aia- 開頭的本機紀錄，不和闖關網站混在一起）：
     modules.aiaide.levels.L1～L6.extra   每一關的表單內容、各張卡的檢核狀態（g_卡名）、能量、步驟勾選、老師確認
     modules.aiaide.aide                   { versions: [{ v, lv, text, why: [...], at }], errors: [{ lv, card, said, think, at }] }
     modules.aiaide.log                    提示詞紀錄：[{ lv, card, text, aide, pred, act, ok, at }]（最多 200 筆）
     modules.aiaide.live                   { lv, step, help, helpAt, at } 給教師端看「誰在哪一步、誰在求救」
   ===================================================================== */
(function () {
  var esc = UI.esc, D = window.AIAIDE_DATA, MOD = 'aiaide';
  var AIT = (window.CONFIG && CONFIG.AI_TOOL) || { name: '老師指定的 AI 工具', url: '', login: '' };
  var CFG = (window.CONFIG && CONFIG.AIAIDE) || {};
  var LV = D.LEVELS, cur = 0, UPD = [];

  /* ── 資料 ───────────────────────────────────────── */
  function rec(id) { return STORE.level(MOD, id) || {}; }
  function ex(id) { return rec(id).extra || {}; }
  function save(id, patch) { STORE.saveLevel(MOD, id, { extra: patch }); }
  function F(id, k) { var v = ex(id)[k]; return v == null ? '' : v; }
  function T(id, k) { return String(F(id, k) || '').trim(); }
  function aide() { var a = STORE.modData(MOD, 'aide') || {}; a.versions = a.versions || []; a.errors = a.errors || []; return a; }
  function setAide(a) { STORE.modData(MOD, 'aide', a); }
  function logs() { return STORE.modData(MOD, 'log') || []; }
  function setLogs(L) { STORE.modData(MOD, 'log', L.slice(-200)); }
  function live(patch) { var o = Object.assign({}, STORE.modData(MOD, 'live') || {}, patch, { at: Date.now() }); STORE.modData(MOD, 'live', o); return o; }
  function lines(s) { return String(s || '').split('\n').map(function (x) { return x.replace(/^[-・•\d.、\s]+/, '').trim(); }).filter(function (x) { return x.length >= 2; }); }
  function len(s) { return Array.from(String(s || '').replace(/\s/g, '')).length; }
  function energy(id) { var e = ex(id).energy; return e == null ? D.ENERGY : e; }
  function lvOf(id) { return LV.filter(function (l) { return l.id === id; })[0]; }

  /* ── 小元件 ─────────────────────────────────────── */
  function inp(k, ph, o) { o = o || {}; return '<input class="input" data-f="' + k + '"' + (o.id ? ' id="' + o.id + '"' : '') + ' maxlength="' + (o.max || 80) + '" value="' + esc(F(L(), k)) + '" placeholder="' + esc(ph || '') + '">'; }
  function ta(k, rows, ph) { return '<textarea class="input" data-f="' + k + '" rows="' + (rows || 3) + '" placeholder="' + esc(ph || '') + '">' + esc(F(L(), k)) + '</textarea>'; }
  function sel(k, opts, ph) {
    var v = F(L(), k);
    return '<select class="input" data-f="' + k + '"><option value="">' + esc(ph || '請選擇') + '</option>' + opts.map(function (o) {
      var val = Array.isArray(o) ? o[0] : o, lab = Array.isArray(o) ? o[1] : o;
      return '<option value="' + esc(val) + '"' + (v === val ? ' selected' : '') + '>' + esc(lab) + '</option>';
    }).join('') + '</select>';
  }
  function cb(k, label) { return '<label class="chk"><input type="checkbox" data-f="' + k + '"' + (F(L(), k) ? ' checked' : '') + '><span>' + label + '</span></label>'; }
  function field(label, html) { return '<label class="field">' + label + html + '</label>'; }
  function L() { return LV[cur].id; }
  function openAI(lbl) { return AIT.url ? '<a class="btn sm" href="' + esc(AIT.url) + '" target="_blank" rel="noopener">↗ ' + esc(lbl || '開啟 ' + AIT.name) + '</a>' : ''; }
  function copy(t, out, msg) {
    function fb() { if (out) out.textContent = '請手動選取上面的文字複製'; }
    try { navigator.clipboard.writeText(t).then(function () { if (out) out.textContent = msg || '✅ 已複製，到 ' + AIT.name + ' 貼上（Ctrl＋V）'; }, fb); } catch (e) { fb(); }
  }
  function part(no, title, sub, body) {
    return '<section class="card mt2 ai-part"><h3 class="bold"><span class="pno">' + no + '</span>' + title + '</h3>' + (sub ? '<p class="small soft mt1">' + sub + '</p>' : '') + '<div class="mt2">' + body + '</div></section>';
  }
  function chk(ok, t) { return '<li class="' + (ok ? 'ok' : '') + '">' + (ok ? '✅ ' : '⬜ ') + esc(t) + '</li>'; }

  /* ── 助教結論：最後一行「結論：通過／不通過」 ── */
  function verdict(s) {
    s = String(s || '');
    if (/結論\s*[:：]\s*不\s*通過/.test(s)) return 'block';
    if (/結論\s*[:：]\s*通過/.test(s)) return 'pass';
    return '';
  }

  /* ================================================================
     🚦 檢核閘門：每一張要送進 Canvas 的卡 ——
     ① 給助教檢核（不扣能量）→ ② 寫預測 → ③ 送進 Canvas（⚡−1）→ ④ 測完回來寫實際上、過驗收？
     opts.aideOnly：只有 ①（規格卡、測試清單、作品說明卡：給助教看，不送 Canvas）
     狀態存在這一關的 extra['g_' + key]：{ aide, aideFor, ov, pred, sent, act, ok }
     ================================================================ */
  function gstate(id, key) { return Object.assign({ aide: '', aideFor: '', ov: false, pred: '', sent: 0, act: '', ok: null }, ex(id)['g_' + key] || {}); }
  function gsave(id, key, g) { var p = {}; p['g_' + key] = g; save(id, p); }
  function gpass(id, key, text) {   // 助教通過（或學生記下「助教判錯」），而且卡片沒有再改過
    var g = gstate(id, key); if (g.aideFor !== text) return false;
    return verdict(g.aide) === 'pass' || g.ov;
  }
  function gate(key, getText, opts) {
    opts = opts || {}; var id = L(), g = gstate(id, key), P = 'g-' + key;
    var html = '<div class="gate" id="' + P + '"><p class="tiny bold soft">' + esc(opts.title || '卡片內容（自動帶入，改上面的欄位就會跟著變）') + '</p>' +
      '<div class="files mt1" id="' + P + '-txt"></div>' +
      '<ol class="gsteps mt1"><li><b>給助教檢核</b><span class="tiny soft">（不扣能量）</span><div class="row mt1">' +
      '<button type="button" class="btn sm" id="' + P + '-ca">📋 複製給助教</button>' + openAI('開啟 Gemini，叫出我的助教') + '<span class="tiny soft" id="' + P + '-cao"></span></div>' +
      '<label class="field mt1">貼上助教回覆的最後一行<input class="input" id="' + P + '-aide" maxlength="120" value="' + esc(g.aide) + '" placeholder="結論：通過"></label>' +
      '<div id="' + P + '-st" class="mt1"></div>' +
      '<details class="mt1" id="' + P + '-ovd"' + (g.ov ? ' open' : '') + '><summary class="tiny bold">🙋 我認為助教判錯了</summary><div class="ovbox mt1">' +
      '<label class="field">我認為應該怎麼判？為什麼？<input class="input" id="' + P + '-think" maxlength="80" placeholder="例：規則 2 有寫「如果…那麼…」，助教卻說沒有"></label>' +
      '<button type="button" class="btn sm mt1" id="' + P + '-ovb">記進助教錯誤紀錄，先繼續</button>' +
      '<p class="tiny soft mt1">記下來的錯誤，這節最後 5 分鐘回頭改助教的指令（版本 +1）。</p></div></details></li>' +
      (opts.aideOnly ? '' :
        '<li><b>我預測送出後會…</b><input class="input mt1" id="' + P + '-pred" maxlength="80" value="' + esc(g.pred) + '" placeholder="例：會出現回收桶，按方向鍵可以左右移動"></li>' +
        '<li><b>送進 Canvas</b><span class="tiny soft">（⚡ 能量 −1）</span><div class="row mt1"><button type="button" class="btn go sm" id="' + P + '-send">📋 複製送進 Canvas</button>' + openAI() +
        '<span class="tiny soft" id="' + P + '-so"></span></div><div id="' + P + '-why" class="tiny bold mt1" style="color:var(--warn)"></div></li>' +
        '<li><b>測完回來寫</b><input class="input mt1" id="' + P + '-act" maxlength="80" value="' + esc(g.act) + '" placeholder="實際上：例如回收桶會動，但是會跑出畫面">' +
        '<div class="row mt1"><span class="small bold">過驗收了嗎？</span><button type="button" class="btn sm' + (g.ok === true ? ' on' : '') + '" data-ok="1">✅ 過了</button><button type="button" class="btn sm' + (g.ok === false ? ' on' : '') + '" data-ok="0">❌ 沒過</button>' +
        '<span class="tiny soft" id="' + P + '-oko"></span></div></li>') +
      '</ol></div>';
    WIRE.push(function (root) {
      var $ = function (s) { return root.querySelector('#' + P + s); };
      $('-ca').onclick = function () { copy(getText(), $('-cao'), '✅ 已複製，到 Gemini 叫出你的助教再貼上'); };
      $('-aide').oninput = function () { var g2 = gstate(id, key); g2.aide = this.value.trim(); g2.aideFor = getText(); g2.ov = false; gsave(id, key, g2); refresh(); };
      $('-ovb').onclick = function () {
        var think = $('-think').value.trim(); if (len(think) < 4) { UI.toast('寫下你認為應該怎麼判、為什麼'); return; }
        var a = aide(), g2 = gstate(id, key);
        a.errors.push({ lv: id, card: key, said: g2.aide || '（沒有貼結論）', think: think, at: Date.now() }); setAide(a);
        g2.ov = true; g2.aideFor = getText(); gsave(id, key, g2); $('-think').value = ''; UI.toast('📝 已記進助教錯誤紀錄'); refresh(); drawAideBox();
      };
      if (opts.aideOnly) return;
      $('-pred').oninput = function () { var g2 = gstate(id, key); g2.pred = this.value.trim(); gsave(id, key, g2); refresh(); };
      $('-send').onclick = function () {
        var why = sendWhy(); if (why) { $('-why').textContent = why; return; }
        var g2 = gstate(id, key), t = getText();
        copy(t, $('-so'), '✅ 已複製，到 Canvas 貼上送出（⚡ 剩 ' + (energy(id) - 1) + '）');
        g2.sent = (g2.sent || 0) + 1; g2.act = ''; g2.ok = null; gsave(id, key, g2);
        save(id, { energy: energy(id) - 1 });
        var Lg = logs(); Lg.push({ lv: id, card: key, text: t.slice(0, 1500), aide: g2.ov ? '（學生判定助教判錯）' + g2.aide : g2.aide, pred: g2.pred, act: '', ok: null, at: Date.now() }); setLogs(Lg);
        $('-act').value = ''; root.querySelectorAll('#' + P + ' [data-ok]').forEach(function (b) { b.classList.remove('on'); });
        refresh(); drawLog();
      };
      function upLog(f) { var Lg = logs(); for (var i = Lg.length - 1; i >= 0; i--) if (Lg[i].lv === id && Lg[i].card === key) { f(Lg[i]); break; } setLogs(Lg); drawLog(); }
      $('-act').oninput = function () { var g2 = gstate(id, key), v = this.value.trim(); g2.act = v; gsave(id, key, g2); upLog(function (x) { x.act = v; }); refresh(); };
      root.querySelectorAll('#' + P + ' [data-ok]').forEach(function (b) {
        b.onclick = function () {
          var g2 = gstate(id, key); if (!g2.sent) { UI.toast('先送進 Canvas、測過再回來'); return; }
          if (len(g2.act) < 2) { UI.toast('先寫「實際上」發生了什麼'); $('-act').focus(); return; }
          g2.ok = b.dataset.ok === '1'; gsave(id, key, g2); upLog(function (x) { x.ok = g2.ok; });
          root.querySelectorAll('#' + P + ' [data-ok]').forEach(function (x) { x.classList.toggle('on', x === b); });
          $('-oko').textContent = g2.ok ? '👍 記得存檔！' : '沒關係，下面填除錯卡（一樣先給助教看）';
          refresh();
        };
      });
      function sendWhy() {
        var t = getText();
        if (opts.ready && opts.ready()) return opts.ready();
        if (!gpass(id, key, t)) return gstate(id, key).aideFor && gstate(id, key).aideFor !== t ? '卡片改過了：重新給助教檢核' : '先讓助教檢核通過（或記下「助教判錯」）';
        if (len(gstate(id, key).pred) < 2) return '先寫「我預測送出後會…」';
        if (energy(id) <= 0) return '⚡ 能量用完了：先用測試清單和卡 B 找問題，或按上面的 🙋 求救';
        return '';
      }
      UPD.push(function () {
        var t = getText(), g2 = gstate(id, key), v = verdict(g2.aide), stale = g2.aideFor && g2.aideFor !== t;
        $('-txt').textContent = t;
        $('-st').innerHTML = !g2.aide && !g2.ov ? '<span class="tiny soft">還沒有助教的結論</span>' :
          stale ? '<div class="note warn small">✏️ 卡片改過了，請重新複製給助教檢核</div>' :
          g2.ov ? '<div class="note warn small">🙋 你認為助教判錯了（已記錄），可以先繼續</div>' :
          v === 'pass' ? '<div class="note ok small">✅ 助教：通過</div>' :
          v === 'block' ? '<div class="note bad small">❌ 助教：不通過 —— 照助教的回饋改上面的欄位，再給助教看一次</div>' :
          '<div class="note warn small">看不到「結論：通過」或「結論：不通過」—— 請貼助教回覆的最後一行（指令裡要規定這個格式）</div>';
        var why = sendWhy(); $('-why').textContent = why; $('-send').classList.toggle('dim', !!why);
      });
    });
    if (opts.aideOnly) WIRE.push(function (root) {
      UPD.push(function () {
        var t = getText(), g2 = gstate(id, key), v = verdict(g2.aide), stale = g2.aideFor && g2.aideFor !== t;
        root.querySelector('#' + P + '-txt').textContent = t;
        root.querySelector('#' + P + '-st').innerHTML = !g2.aide && !g2.ov ? '<span class="tiny soft">還沒有助教的結論</span>' :
          stale ? '<div class="note warn small">✏️ 卡片改過了，請重新複製給助教檢核</div>' :
          g2.ov ? '<div class="note warn small">🙋 你認為助教判錯了（已記錄），可以先繼續</div>' :
          v === 'pass' ? '<div class="note ok small">✅ 助教：通過</div>' :
          v === 'block' ? '<div class="note bad small">❌ 助教：不通過 —— 照回饋改上面的欄位，再給助教看一次</div>' :
          '<div class="note warn small">看不到「結論：通過」或「結論：不通過」—— 請貼助教回覆的最後一行</div>';
      });
    });
    return html;
  }

  /* 不經過助教、直接給 Gemini 的卡（起草卡、修正卡、卡 E）：⚡−1；cost 0 的（卡 B）不扣 */
  function sendBox(key, getText, cost, label) {
    var id = L(), P = 's-' + key;
    WIRE.push(function (root) {
      var b = root.querySelector('#' + P + '-b'), o = root.querySelector('#' + P + '-o');
      b.onclick = function () {
        if (cost && energy(id) <= 0) { o.textContent = '⚡ 能量用完了，按上面的 🙋 求救'; return; }
        var t = getText(); copy(t, o, cost ? '✅ 已複製（⚡ 剩 ' + (energy(id) - 1) + '），到 Gemini 貼上' : null);
        if (cost) { save(id, { energy: energy(id) - 1 }); var Lg = logs(); Lg.push({ lv: id, card: key, text: t.slice(0, 1500), aide: '', pred: '', act: '', ok: null, at: Date.now() }); setLogs(Lg); drawLog(); }
        var p = {}; p['sent_' + key] = (+F(id, 'sent_' + key) || 0) + 1; save(id, p); refresh();
      };
      UPD.push(function () { root.querySelector('#' + P + '-txt').textContent = getText(); });
    });
    return '<div class="files" id="' + P + '-txt"></div><div class="row mt1"><button type="button" class="btn ' + (cost ? 'go ' : '') + 'sm" id="' + P + '-b">📋 ' + esc(label || '複製') + (cost ? '（⚡−1）' : '（不扣能量）') + '</button>' + openAI() + '<span class="tiny soft" id="' + P + '-o"></span></div>';
  }

  /* ================================================================
     各部分（content 的 parts）
     ================================================================ */
  var WIRE = [];
  var PARTS = {
    /* L1 ① 助教設計單 */
    design: function (n) {
      function chipRow(k, to) { return '<div class="tpl"><span class="tiny bold">🆘 沒想法？點一下加進去，再改成自己的話：</span>' + D.CHIPS[k].map(function (c) { return '<button type="button" class="chip" data-chip="' + to + '">' + esc(c) + '</button>'; }).join('') + '</div>'; }
      return part(n, '助教設計單', '先自己想清楚：你的助教是誰、要檢查什麼、不能做什麼。一行寫一條。',
        '<div class="grid g2">' + field('助教的名字', inp('d_name', '例：小檢')) + field('說話的語氣（像誰？）', inp('d_tone', '例：像嚴格但會鼓勵人的學長')) + '</div>' +
        '<p class="small bold mt2">它要檢核的卡片和標準</p>' +
        field('📐 設計規格卡（至少 3 條）', ta('d_spec', 3, '每條規則寫成「如果…那麼…」')) + chipRow('spec', 'd_spec') +
        field('🧩 骨架卡、功能卡（至少 2 條）', ta('d_feat', 2, '一次只要求一個功能')) + chipRow('feat', 'd_feat') +
        field('🐞 除錯卡（至少 2 條）', ta('d_debug', 2, '「我做了／我預期／實際上」都有寫')) + chipRow('debug', 'd_debug') +
        '<div class="grid g2 mt1">' + field('⭐ 我自選的一項（選填）', inp('d_extra', '例：測試清單')) + field('它的標準（選填）', inp('d_extra_std', '例：有一條邊界測試')) + '</div>' +
        field('🚫 它不能做的事（至少 3 件）', ta('d_dont', 3, '不寫或修改任何程式')) + chipRow('dont', 'd_dont') +
        field('🗒️ 回覆格式', ta('d_format', 2, D.FORMAT)) +
        '<ul class="checks mt2" id="d-checks"></ul>');
    },
    /* L1 ② 起草卡 H1 */
    draft: function (n) {
      return part(n, '起草卡 H1：請 Gemini 幫你寫指令草稿', '這是「用 AI 協助設計 AI」的第一步。拿到草稿後，<b>拿設計單逐行比對，自己改至少 3 處</b>（漏掉的標準、語氣、格式），再到 Gemini 建立「技能」。',
        '<div id="h1-warn"></div>' + sendBox('H1', h1Text, 1, '複製起草卡'));
    },
    /* L1 ③／L2 ③ 我的助教（存版本） */
    version: function (n) {
      var first = L() === 'L1';
      return part(n, first ? '我的助教 v1' : '存成新版本', first ? '在 Gemini 建好技能後，把<b>改好的指令全文</b>貼在這裡，寫下你改了哪 3 處、為什麼。也要備份到自己的 Google 文件。' : '改好指令後，把新的指令全文貼在這裡存成新版本，寫下改了什麼、對應哪一題的錯誤。',
        '<div id="ver-now" class="small"></div>' +
        field('指令全文', '<textarea class="input" id="v-text" rows="6" placeholder="【角色】你是…"></textarea>') +
        (first ? '<div class="grid g3 mt1">' + [1, 2, 3].map(function (i) { return field('我改的第 ' + i + ' 處、為什麼', '<input class="input" id="v-why' + i + '" maxlength="60" placeholder="' + ['例：加上「不能直接給答案」，草稿漏了', '例：語氣改成學長，比較親切', '例：最後一行一定要寫「結論：…」'][i - 1] + '">'); }).join('') + '</div>'
          : field('這一版改了什麼、為什麼', '<input class="input" id="v-why1" maxlength="80" placeholder="例：T3 它說通過，所以加上「「要好玩」不算可以測的規則」">')) +
        '<div class="row mt1"><button type="button" class="btn go" id="v-save">💾 存成新版本</button><span class="small bold" id="v-msg" aria-live="polite"></span></div>');
    },
    /* L1 ④ 第一次試用 */
    tryout: function (n) {
      return part(n, '第一次試用', '把兩張範例卡分別貼給你的助教，再把它回覆的最後一行貼回來。好卡要通過、壞卡要被擋下。',
        ['good', 'bad'].map(function (k) {
          return '<div class="tcase mt1"><div class="row between"><b>' + (k === 'good' ? '🟢 範例好卡（應該：通過）' : '🔴 範例壞卡（應該：不通過）') + '</b><button type="button" class="btn sm" data-ctext="' + k + '">📋 複製給助教</button></div>' +
            '<details class="mt1"><summary class="tiny bold">看卡片內容</summary><div class="files mt1">' + esc(D.SAMPLES[k]) + '</div></details>' +
            field('助教回覆的最後一行', inp('t_' + k, '結論：…', { max: 120 })) + '<div id="t-' + k + '-st" class="mt1"></div></div>';
        }).join('') + '<p class="tiny soft mt1">結果不對？回頭改指令、存新版本再試。也可以寫進「助教錯誤紀錄」，第 2 節一起修。</p>');
    },
    /* L2 ① 測試題 T1～T6 */
    tests: function (n) {
      var opts = [['pass', '通過'], ['block', '不通過'], ['refuse', '拒絕或請我重貼']];
      return part(n, '考考我的助教：T1～T6', '每題<b>先看「應該」</b>，再貼給助教，選它實際怎麼判。答錯的，回頭改指令，改完 6 題全部重跑（回歸測試），填「改版後」。',
        '<div class="ttable">' + D.TESTS.map(function (t) {
          return '<div class="trow"><div><b>' + t.id + '</b> ' + esc(t.what) +
            (t.text ? '<details><summary class="tiny bold">看卡片</summary><div class="files mt1">' + esc(t.text) + '</div></details><button type="button" class="btn sm mt1" data-ctest="' + t.id + '">📋 複製給助教</button>'
              : field('我出的題目', inp('tx_' + t.id, t.ph, { max: 120 }))) + '</div>' +
            '<div class="tiny bold">應該：<span class="exp">' + esc(D.EXPECT[t.expect]) + '</span></div>' +
            '<div>' + field('<span class="tiny">第一次</span>', sel('r1_' + t.id, opts, '它怎麼判？')) + '</div>' +
            '<div>' + field('<span class="tiny">改版後</span>', sel('r2_' + t.id, opts, '（重跑）')) + '</div>' +
            '<div class="tres" id="tr-' + t.id + '"></div></div>';
        }).join('') + '</div><ul class="checks mt2" id="t-checks"></ul>');
    },
    /* L2 ② 修正卡（H1 修正模式，選用） */
    fix: function (n) {
      return part(n, '修正卡（選用）：請 Gemini 幫你改指令', '自己看得出要改哪裡，直接改就好（不扣能量）。看不出來，再用這張卡（⚡−1）。它只會給建議，最後還是你決定。',
        field('哪一題答錯？', sel('fx_t', D.TESTS.map(function (t) { return [t.id, t.id + ' ' + t.what]; }), '選一題')) + sendBox('FIX', fixText, 1, '複製修正卡'));
    },
    /* L2 ④ 設計規格卡（遊戲篇從這裡開始） */
    spec: function (n) {
      var tr = Object.keys(D.TRACKS).map(function (k) { return [k, D.TRACKS[k].icon + ' ' + D.TRACKS[k].name]; });
      return part(n, '遊戲設計規格卡：讓助教上工', '選一條賽道，把遊戲拆成五格。<b>每條規則都寫成「如果…那麼…」</b>，而且要能用玩遊戲測出來。填好後給你的助教檢核，通過才算完成。',
        field('賽道', sel('s_track', tr, '選一條賽道')) + '<div id="s-track" class="mt1"></div>' +
        '<div class="grid g2 mt1">' + field('遊戲名稱', inp('s_name', '例：接垃圾分類', { max: 20 })) + field('目標', inp('s_goal', '例：接到最多可回收物')) +
        field('玩家（主角）', inp('s_player', '例：回收桶')) + field('用什麼操作', inp('s_ctrl', '例：左右方向鍵')) + '</div>' +
        [1, 2, 3].map(function (i) { return field('規則 ' + i, inp('s_r' + i, ['例：如果接到寶特瓶，那麼分數加 1', '例：如果接到垃圾袋，那麼生命減 1', '例：如果每過 15 秒，那麼掉落速度變快'][i - 1])); }).join('') +
        '<div class="grid g2">' + field('結束條件', inp('s_end', '例：3 條命用完就結束，顯示分數')) + field('畫面', inp('s_screen', '例：綠色系，顯示分數和生命')) + '</div>' +
        '<div id="s-warn" class="mt1"></div>' + gate('SPEC', specText, { aideOnly: true, title: '設計規格卡（給助教檢核）' }));
    },
    /* L3 ① 骨架卡 A */
    skeleton: function (n) {
      // 🔓 全部開放：規格卡還沒過助教也能送（上面會提醒），不鎖關
      return part(n, '骨架卡 A：做出最小可玩版', '規格卡自動帶進來。這是第一版，<b>只做規格上的規則</b>，不要讓 AI 自己加功能。', '<div id="sk-warn"></div>' + gate('A', aText));
    },
    /* L3 ② 測試清單 */
    testlist: function (n) {
      return part(n, '測試清單', '規格卡的每一條規則都變成一個測試項目，再加一條<b>邊界測試</b>（剛好碰到邊緣算不算？剛好 0 分呢？）。可以先給助教看有沒有漏，再自己逐條測、打勾。',
        '<div class="stack" id="tl-items"></div>' +
        field('🧱 邊界測試（自己寫）', inp('tl_edge', '例：物品剛好擦到桶子邊緣，算不算接到？')) +
        field('➕ 再加一條（選填）', inp('tl_more', '例：連按方向鍵，回收桶不會跑出畫面')) +
        '<div class="mt2">' + gate('TL', tlText, { aideOnly: true, title: '測試清單（給助教看有沒有漏）' }) + '</div>');
    },
    /* L3／L5 除錯卡 D */
    debug: function (n) {
      return part(n, '除錯卡 D', '沒過驗收時才用。寫得越具體，AI 越修得好：<b>我做了什麼 → 我預期 → 實際上</b>。一樣先給助教看有沒有寫齊。',
        '<div class="grid g2">' + field('我做了', inp('db_did', '例：按住左鍵 3 秒')) + field('我預期', inp('db_exp', '例：回收桶停在畫面最左邊')) +
        field('實際上', inp('db_act', '例：回收桶跑出畫面不見了')) + field('主控台訊息（沒有就寫「無」）', inp('db_con', '例：無', { max: 200 })) + '</div>' +
        '<div class="mt2">' + gate('D', dText) + '</div>' +
        field('修好了嗎？是哪一段程式出錯？（行號或說明）', inp('db_where', '例：第 42 行，判斷左邊界的 if 少了 x > 0')));
    },
    /* L3～L5 存檔點 */
    backup: function (n) {
      var no = { L3: 1, L4: 2, L5: 3 }[L()];
      return part(n, '💾 存檔 ' + no, 'AI 改壞了也回得去：把目前的程式碼（Canvas 的「程式碼」整段複製）和助教最新的指令，貼到自己的 Google 文件「存檔 ' + no + '」。',
        cb('bk', '我已經備份到自己的 Google 文件「存檔 ' + no + '」') + (L() === 'L3' ? '<div class="mt1">' + cb('cls', '已經「分享到 Classroom」') + '</div>' : ''));
    },
    /* L4 ① 程式尋寶 */
    treasure: function (n) {
      return part(n, '程式尋寶：找出 5 個寶物', '在 Canvas 按「程式碼」，選取一段程式，用「選取並詢問」貼卡 B 問 AI（不扣能量）。找到後寫下<b>行號</b>，再寫成對應的 <b>Scratch 積木</b>。',
        sendBox('B', function () { return D.CARD_B; }, 0, '複製卡 B') +
        '<div class="stack mt2">' + D.TREASURES.map(function (t, i) {
          return '<div class="trow2"><b>' + (i + 1) + '. ' + esc(t.t) + '</b><div class="grid g2">' + field('行號', inp('tr_line_' + t.k, '例：第 42 行', { max: 20 })) + field('對應的 Scratch 積木', inp('tr_blk_' + t.k, '例：' + t.block, { max: 40 })) + '</div></div>';
        }).join('') + '</div><ul class="checks mt2" id="tr-checks"></ul>');
    },
    /* L4 ② 手動關 */
    manual: function (n) {
      return part(n, '手動關：不准用 AI', '在「程式碼」畫面找到 3 個數字（速度、時間、加幾分…），<b>先寫預測</b>，再自己改、按預覽測試。這關不扣能量，也不能問 AI。',
        '<div class="stack">' + [0, 1, 2].map(function (i) {
          return '<div class="mrow">' + field('參數', inp('m_name_' + i, ['例：掉落速度', '例：遊戲時間', '例：接到加幾分'][i], { max: 20 })) + field('原本', inp('m_from_' + i, '例：3', { max: 10 })) + field('改成', inp('m_to_' + i, '例：6', { max: 10 })) +
            field('我預測', inp('m_pred_' + i, '例：東西掉得快一倍', { max: 40 })) + field('結果', sel('m_res_' + i, [['same', '和預測一樣'], ['diff', '和預測不一樣']], '測試後選')) + '</div>';
        }).join('') + '</div><ul class="checks mt2" id="m-checks"></ul>');
    },
    /* L5 ① 功能卡 C ×2 */
    features: function (n) {
      var trk = D.TRACKS[T('L2', 's_track')] || null, ups = trk ? trk.ups : [];
      return part(n, '功能卡 C：一次加一個', (trk ? '你的賽道「' + esc(trk.name) + '」的升級包：' + ups.map(esc).join('、') + '。' : '先在第 2 節選好賽道。') + '挑 2 個，<b>一張卡只放一個功能</b>，驗收標準要看得到、測得到。',
        [0, 1].map(function (i) {
          return '<div class="fslot mt2"><p class="bold">功能 ' + (i + 1) + '</p><div class="grid g2">' + field('功能', inp('f_name_' + i, '例：' + (ups[i] || '倒數計時'), { max: 30 })) + field('驗收標準（做到這樣才算完成）', inp('f_acc_' + i, '例：剩 10 秒時計時器變紅色')) + '</div>' +
            '<div class="mt1">' + gate('C' + i, function () { return cText(i); }) + '</div><div class="mt1">' + cb('f_reg_' + i, '加完後重跑舊的測試清單：舊功能都正常（回歸測試）') + '</div></div>';
        }).join(''));
    },
    /* L6 ① 作品說明卡＋AI 使用聲明 */
    explain: function (n) {
      return part(n, '作品說明卡與 AI 使用聲明', '先用卡 E 請 AI 寫說明草稿（⚡−1），<b>再改成自己的話</b>填在下面。最後整張給助教檢查有沒有缺項。',
        sendBox('E', function () { return D.CARD_E; }, 1, '複製卡 E') +
        '<div class="grid g2 mt2">' + field('作品名稱', inp('e_name', '例：接垃圾分類', { max: 20 })) + field('一句話介紹（自己的話）', inp('e_one', '例：用回收桶接住可回收物，學會分類', { max: 40 })) + '</div>' +
        field('怎麼玩', ta('e_how', 2, '例：用左右方向鍵移動回收桶…')) +
        field('我最懂的一段程式（行號＋對應的 Scratch 積木）', inp('e_code', '例：第 42 行 if 碰到垃圾袋 → 如果碰到…那麼 生命改變 -1')) +
        '<p class="small bold mt2">AI 幫我做了什麼？（可複選）</p><div class="row">' + D.AI_DID.map(function (t, i) { return cb('e_ai_' + i, esc(t)); }).join('') + '</div>' +
        field('我自己決定／修改了什麼（至少 3 項，一行一項）', ta('e_self', 3, '例：規則是我自己想的\n例：AI 加了音效，我拿掉了\n例：助教說不通過，我改了驗收標準')) +
        field('共用了幾張卡、哪一張最有效？', inp('e_cards', '例：7 張，除錯卡最有效，因為…')) +
        '<div class="mt1">' + cb('cls6', '最後版已經「分享到 Classroom」') + '</div>' +
        '<div class="mt2">' + gate('X', xText, { aideOnly: true, title: '作品說明卡（給助教檢查缺項）' }) + '</div>');
    },
    /* L6 ② 反思 */
    reflect: function (n) {
      return part(n, '反思：我的助教', '<span id="rf-count"></span>',
        field('說出助教的一個錯誤，和你怎麼修正它的指令', ta('rf_one', 2, '例：T3 它說通過，我在指令加上「要好玩不算可以測的規則」，v3 就擋下來了')) +
        field('AI 檢核和同學試玩，各抓到什麼問題？', ta('rf_vs', 2, '例：助教抓到我的驗收標準太模糊；同學一玩就發現分數會變負的')));
    },
    /* L4～L6 老師確認 ⭐⭐⭐ */
    teacher: function (n) {
      return part(n, '🧑‍🏫 老師確認 ⭐⭐⭐', 'AI 判斷不了的部分由老師確認：' + esc(LV[cur].stars[2]) + '。完成 ⭐⭐ 後舉手，請老師來看。',
        '<div id="tk-st"></div><div class="row mt1"><button type="button" class="btn" id="tk-btn">🧑‍🏫 老師輸入確認碼</button></div>');
    }
  };

  /* ── 卡片文字 ───────────────────────────────────── */
  function h1Text() {
    var e = function (k) { return T('L1', k); }, ls = function (k) { return lines(F('L1', k)); };
    return '我是國中生，要在 Gemini 建立一個「技能」，當作我做遊戲時的進度檢核助教。請幫我寫這個技能的指令草稿。\n' +
      '助教名字與語氣：' + (e('d_name') || '＿＿') + '，' + (e('d_tone') || '＿＿') + '\n它要檢核的卡片和標準：\n' +
      '- 設計規格卡：' + (ls('d_spec').join('；') || '＿＿') + '\n- 骨架卡、功能卡：' + (ls('d_feat').join('；') || '＿＿') + '\n- 除錯卡：' + (ls('d_debug').join('；') || '＿＿') + '\n' +
      (e('d_extra') ? '- ' + e('d_extra') + '：' + (e('d_extra_std') || '＿＿') + '\n' : '') +
      '它不能做的事：' + (ls('d_dont').join('、') || '＿＿') + '\n回覆格式：' + (e('d_format') || D.FORMAT) + '\n' +
      '每張卡的第一行會寫【卡片名稱】，請先判斷是哪一種卡；看不出來就請我重貼。\n請用「角色、檢核步驟、不能做的事、回覆格式」四段寫，總長度 300 字以內。';
  }
  function latestText() { var V = aide().versions; return V.length ? V[V.length - 1].text : ''; }
  function fixText() {
    var t = D.TESTS.filter(function (x) { return x.id === T('L2', 'fx_t'); })[0], said = t ? (T('L2', 'r2_' + t.id) || T('L2', 'r1_' + t.id)) : '';
    var body = t ? (t.text || T('L2', 'tx_' + t.id) || '＿＿') : '＿＿';
    return '我的助教在下面這題判斷錯了。\n我貼給它的：\n' + body + '\n我預期：' + (t ? D.EXPECT[t.expect] : '＿＿') + '\n它實際上：' + (said ? D.EXPECT[said] : '＿＿') +
      '\n目前的指令：\n' + (latestText() || '＿＿') + '\n請只修改和這個錯誤有關的句子，告訴我改了哪一句、為什麼。';
  }
  function specText() {
    var s = function (k) { return T('L2', k) || '＿＿'; }, tr = D.TRACKS[T('L2', 's_track')];
    return '【設計規格卡】\n遊戲名稱：' + s('s_name') + '\n賽道：' + (tr ? tr.name.split('：')[0] : '＿＿') + '\n玩家與操作：' + s('s_player') + '，用' + s('s_ctrl') + '操作\n目標：' + s('s_goal') +
      '\n規則：\n1. ' + s('s_r1') + '\n2. ' + s('s_r2') + '\n3. ' + s('s_r3') + '\n結束條件：' + s('s_end') + '\n畫面：' + s('s_screen');
  }
  function aText() {
    var s = function (k) { return T('L2', k) || '＿＿'; };
    return '【骨架卡】\n請用 Canvas 做一個網頁小遊戲（或小 App），只用一個 HTML 檔（HTML、CSS、JavaScript 寫在一起）。\n不要用外部圖片或音檔，角色與物品用 emoji 或簡單圖形。\n\n' +
      '名稱：' + s('s_name') + '\n玩家：' + s('s_player') + '，用 ' + s('s_ctrl') + ' 操作\n目標：' + s('s_goal') + '\n規則：\n1. ' + s('s_r1') + '\n2. ' + s('s_r2') + '\n3. ' + s('s_r3') +
      '\n結束條件：' + s('s_end') + '\n畫面：' + s('s_screen') + '\n\n這是第一版，只做上面的規則，不要自己加其他功能。\n其他地方不要改：只照這張卡做。\n' +
      '請在程式裡用中文註解標出：分數變數、遊戲重複執行的地方、每一條規則的判斷。\n做完後請：\n(1) 用 3 句話說明怎麼玩\n(2) 列出 3 個我可以自己調整的數值（例如速度），說明它們的變數名稱';
  }
  function tlItems() {
    var it = [1, 2, 3].map(function (i) { return T('L2', 's_r' + i); }).filter(Boolean).map(function (r) { return '規則：' + r; });
    if (T('L2', 's_end')) it.push('結束：' + T('L2', 's_end'));
    return it;
  }
  function tlText() {
    var it = tlItems().concat(T('L3', 'tl_edge') ? ['邊界：' + T('L3', 'tl_edge')] : []).concat(T('L3', 'tl_more') ? [T('L3', 'tl_more')] : []);
    return '【測試清單】\n遊戲：' + (T('L2', 's_name') || '＿＿') + '\n' + it.map(function (x, i) { return (i + 1) + '. ' + x; }).join('\n') + '\n請檢查這份清單有沒有漏掉規格卡上的規則，或少了邊界測試。';
  }
  function dText() {
    var s = function (k) { return T(L(), k) || '＿＿'; };
    return '【除錯卡】\n遊戲有一個問題。\n我做了：' + s('db_did') + '\n我預期：' + s('db_exp') + '\n實際上：' + s('db_act') + '\n主控台訊息：' + s('db_con') +
      '\n請先用 2 句話說明可能的原因，再只修改和這個問題有關的地方。\n其他地方不要改。\n請告訴我是哪一段程式出了問題。';
  }
  function cText(i) {
    var s = function (k) { return T('L5', k) || '＿＿'; };
    return '【功能卡】\n請在目前的程式加上一個功能：' + s('f_name_' + i) + '\n驗收標準：' + s('f_acc_' + i) + '\n其他功能都不要改。\n新增或修改的地方請加上中文註解「新增：' + s('f_name_' + i) + '」。\n改完後請用條列告訴我你改了哪幾個地方。';
  }
  function xText() {
    var s = function (k) { return T('L6', k) || '＿＿'; }, did = D.AI_DID.filter(function (t, i) { return F('L6', 'e_ai_' + i); });
    return '【作品說明卡】\n作品名稱：' + s('e_name') + '\n一句話介紹：' + s('e_one') + '\n怎麼玩：' + s('e_how') + '\n我最懂的一段程式：' + s('e_code') +
      '\nAI 幫我做了：' + (did.join('、') || '＿＿') + '\n我自己決定／修改了：' + (lines(F('L6', 'e_self')).join('；') || '＿＿') + '\n共用了幾張卡、哪一張最有效：' + s('e_cards');
  }

  /* ================================================================
     ⭐ 星星（依完成項目算；只會變多）
     ================================================================ */
  var VAGUE = /好玩|有趣|刺激|很酷|好看|漂亮|厲害|越玩越/;
  function testRes(id) { var k = T('L2', 'r2_' + id) || T('L2', 'r1_' + id); return k; }
  function testOk(t) { return testRes(t.id) === t.expect; }
  function specMissing() {
    var m = [];
    [['s_track', '賽道'], ['s_name', '遊戲名稱'], ['s_goal', '目標'], ['s_player', '玩家'], ['s_ctrl', '操作'], ['s_r1', '規則 1'], ['s_r2', '規則 2'], ['s_r3', '規則 3'], ['s_end', '結束條件'], ['s_screen', '畫面']]
      .forEach(function (x) { if (!T('L2', x[0])) m.push(x[1]); });
    return m;
  }
  function debugFixed(id) { var g = gstate(id, 'D'); return g.ok === true && len(T(id, 'db_where')) >= 2; }
  var CHECKS = {
    L1: function () {
      var c1 = [len(T('L1', 'd_name')) >= 1 && len(T('L1', 'd_tone')) >= 2, lines(F('L1', 'd_spec')).length >= 3, lines(F('L1', 'd_feat')).length >= 2, lines(F('L1', 'd_debug')).length >= 2, lines(F('L1', 'd_dont')).length >= 3];
      var v1 = aide().versions.filter(function (v) { return v.lv === 'L1' && v.why && v.why.length >= 3; })[0];
      var good = verdict(T('L1', 't_good')) === 'pass', bad = verdict(T('L1', 't_bad')) === 'block';
      var s1 = c1.every(Boolean), s2 = s1 && !!v1, s3 = s2 && good && bad;
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, c1: c1, v1: !!v1, good: good, bad: bad };
    },
    L2: function () {
      var all = D.TESTS.every(function (t) { return T('L2', 'r1_' + t.id) && (t.text || len(T('L2', 'tx_' + t.id)) >= 2); });
      var core = D.TESTS.slice(0, 4).every(testOk), tough = D.TESTS.slice(4).every(testOk), spec = !specMissing().length && gpass('L2', 'SPEC', specText());
      var s1 = all, s2 = s1 && core, s3 = s2 && tough && spec;
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, all: all, core: core, tough: tough, spec: spec };
    },
    L3: function () {
      var g = gstate('L3', 'A'), play = g.sent > 0 && len(g.act) >= 2;
      var works = g.ok === true || gstate('L3', 'D').ok === true;
      var items = tlItems().length, ticked = 0; for (var i = 0; i < items; i++) if (F('L3', 'tl_c' + i)) ticked++;
      var tl = items >= 3 && ticked === items && len(T('L3', 'tl_edge')) >= 2 && !!F('L3', 'tl_cE');
      var s1 = play, s2 = s1 && works && tl && !!F('L3', 'bk'), s3 = s2 && energy('L3') >= 3;
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, play: play, works: works, tl: tl, bk: !!F('L3', 'bk'), en: energy('L3') };
    },
    L4: function () {
      var n = D.TREASURES.filter(function (t) { return T('L4', 'tr_line_' + t.k) && T('L4', 'tr_blk_' + t.k); }).length;
      var man = [0, 1, 2].every(function (i) { return T('L4', 'm_name_' + i) && T('L4', 'm_to_' + i) && len(T('L4', 'm_pred_' + i)) >= 2 && T('L4', 'm_res_' + i); });
      var same = man && [0, 1, 2].every(function (i) { return T('L4', 'm_res_' + i) === 'same'; });
      var s1 = n >= 3, s2 = n >= 5, ready = s2 && same, s3 = ready && !!F('L4', 'tOk');
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, n: n, man: man, same: same, ready: ready };
    },
    L5: function () {
      var ok = [0, 1].map(function (i) { return gstate('L5', 'C' + i).ok === true; }), reg = [0, 1].map(function (i) { return !!F('L5', 'f_reg_' + i); });
      var fixed = debugFixed('L5') || debugFixed('L3');
      var s1 = ok[0] || ok[1], s2 = ok[0] && ok[1] && reg[0] && reg[1], ready = s2 && fixed, s3 = ready && !!F('L5', 'tOk');
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, ok: ok, reg: reg, fixed: fixed, ready: ready };
    },
    L6: function () {
      var card = ['e_name', 'e_one', 'e_how', 'e_code'].every(function (k) { return len(T('L6', k)) >= 2; });
      var aiDid = D.AI_DID.some(function (t, i) { return F('L6', 'e_ai_' + i); }), self3 = lines(F('L6', 'e_self')).length >= 3, gx = gpass('L6', 'X', xText());
      var refl = len(T('L6', 'rf_one')) >= 6 && len(T('L6', 'rf_vs')) >= 6;
      var s1 = card, s2 = s1 && aiDid && self3 && gx, ready = s2 && refl, s3 = ready && !!F('L6', 'tOk');
      return { stars: s3 ? 3 : s2 ? 2 : s1 ? 1 : 0, card: card, aiDid: aiDid, self3: self3, gx: gx, refl: refl, ready: ready };
    }
  };
  function grade(id) {
    var c = CHECKS[id](), had = rec(id).stars || 0;
    if (c.stars > had) {
      STORE.saveLevel(MOD, id, { stars: c.stars });
      UI.toast('⭐ 關卡 ' + id.slice(1) + '：' + '⭐'.repeat(c.stars) + ' ' + lvOf(id).stars[c.stars - 1]);
    }
    return c;
  }
  function stars(id) { return rec(id).stars || 0; }

  /* ================================================================
     畫面
     ================================================================ */
  function render() {
    var l = LV[cur], root = document.getElementById('app');
    UPD = []; WIRE = [];
    var body = l.parts.map(function (p, i) { return PARTS[p](['①', '②', '③', '④', '⑤'][i]); }).join('');
    root.innerHTML = headHTML() + levelCards() +
      '<section class="card pop mt2 lvhead"><div class="row between"><div><p class="kicker">第 ' + l.no + ' 節 · ' + esc(l.part) + '</p>' +
      '<h2 class="black" style="font-size:1.35rem">' + l.icon + ' 關卡 ' + l.no + '：' + esc(l.title) + '</h2><p class="small mt1">🎯 ' + esc(l.goal) + '</p>' +
      (window.K12 ? K12.chips(l.id) : '') + '</div>' +
      '<div class="center"><div id="lv-stars"></div><div class="tiny soft bold">這一關</div></div></div>' +
      '<div class="energy mt2" id="energy"></div>' +
      '<details class="mt2"' + (stars(l.id) ? '' : ' open') + '><summary class="bold small">⏰ 這節怎麼走（45 分鐘）</summary><div class="stack mt1">' + l.steps.map(function (s, i) {
        return '<label class="chk"><input type="checkbox" data-step="' + i + '"' + ((ex(l.id).steps || [])[i] ? ' checked' : '') + '><span>' + esc(s) + '</span></label>';
      }).join('') + '</div></details>' +
      '<ul class="stargoal mt2" id="stargoal"></ul></section>' + body +
      '<nav id="lv-pager" aria-label="上一關／下一關"></nav>' +
      '<section class="card mt3" id="aidebox"></section><section class="card mt2" id="logbox"></section>';
    WIRE.forEach(function (f) { f(root); });
    wireFields(root);
    root.querySelectorAll('[data-step]').forEach(function (c) {
      c.onchange = function () { var s = (ex(l.id).steps || []).slice(); s[+c.dataset.step] = c.checked; save(l.id, { steps: s }); live({ lv: l.id, step: firstOpen(s, l.steps.length) }); };
    });
    root.querySelectorAll('.lvcard').forEach(function (b) { b.onclick = function () { go(+b.dataset.i); }; });
    var P = LV[cur - 1], N = LV[cur + 1];
    UI.pager('#lv-pager', P ? { lbl: '← 上一關', title: P.icon + ' ' + P.no + '. ' + P.title, go: function () { go(cur - 1); } } : null,
      N ? { lbl: '下一關 →', title: N.icon + ' ' + N.no + '. ' + N.title, go: function () { go(cur + 1); } } : null);
    wireHead(root); wirePartsExtra(root); drawAideBox(); drawLog(); refresh();
  }
  function firstOpen(s, n) { for (var i = 0; i < n; i++) if (!s[i]) return i; return n; }
  function go(i) { cur = i; try { history.replaceState(null, '', '#' + LV[i].id); } catch (e) {} live({ lv: LV[i].id, step: firstOpen(ex(LV[i].id).steps || [], LV[i].steps.length) }); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  function headHTML() {
    var lv = STORE.modData(MOD, 'live') || {}, V = aide().versions;
    return '<section class="card pop"><div class="tape"></div><div class="row between"><div>' +
      '<p class="kicker">用 AI 協助自己設計 AI · 6 節</p><h2 class="black" style="font-size:1.3rem">先做一位自己的 AI 助教，再讓它檢核你的遊戲</h2>' +
      '<p class="small soft mt1">第 1～2 節在 Gemini 做「進度檢核助教」（技能），第 3～6 節用 Canvas 做遊戲。<b>每張卡送進 Canvas 前，都先給自己的助教檢核。</b></p></div>' +
      '<div class="center"><div class="black" style="font-size:1.8rem;color:var(--star-ink)" id="tot-stars"></div><div class="tiny soft bold">⭐ 工坊總星數</div>' +
      '<div class="tiny bold mt1">🤖 助教 ' + (V.length ? 'v' + V[V.length - 1].v : '還沒建立') + '</div></div></div>' +
      (CONFIG.NO_LOGIN ? '<p class="tiny soft mt1">🔓 六關都開放、不用登入。紀錄只存在這台電腦的瀏覽器，換電腦或重開機（還原卡）就會清掉。</p>' : '') +
      '<div class="note small mt2">🤖 <b>這個網站不是 AI。</b>它幫你把卡片寫好、記下能量和紀錄；按 <b>📋 複製</b> → 到 <b>' + esc(AIT.name) + '</b>' + (AIT.login ? '（用' + esc(AIT.login) + '登入）' : '') + '貼上 → 把結果貼回來。' + openAI() + '</div>' +
      '<details class="rules mt2"><summary class="bold">🤖 好好用 AI：五個守則＋工坊規則</summary><ol class="small mt1">' + D.RULES.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ol><p class="small mt1">🚧 ' + esc(D.WORKSHOP_RULES) + '</p></details>' +
      '<div class="helpbar mt2" id="helpbar"></div></section>';
  }
  function levelCards() {
    return '<nav class="ucards compact lvcards mt2" style="--n:6" aria-label="六個關卡">' + LV.map(function (l, i) {
      var s = stars(l.id);
      return '<button type="button" class="ucard lvcard uc-' + (l.part === '助教篇' ? 1 : 4) + (i === cur ? ' on' : '') + '" data-i="' + i + '"' + (i === cur ? ' aria-current="step"' : '') + '>' +
        '<span class="no">' + l.no + '</span><span class="here">目前在這裡 👇</span><span class="ic">' + l.icon + '</span><span class="tt">' + esc(l.title) + '</span>' +
        '<span class="pg"><span>' + esc(l.part) + '</span><span>' + UI.stars(s) + '</span></span></button>';
    }).join('') + '</nav>';
  }
  function wireHead(root) {
    var hb = root.querySelector('#helpbar');
    function drawHelp() {
      var lv = STORE.modData(MOD, 'live') || {};
      if (lv.help) {
        var m = Math.max(0, Math.round((Date.now() - (lv.helpAt || Date.now())) / 60000));
        hb.innerHTML = '<div class="note warn small"><b>🙋 已經舉手了</b>（' + (m ? '等了 ' + m + ' 分鐘' : '剛剛') + '）。等老師的時候，先做：<ul>' + D.WAIT_TIPS.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
          '<button type="button" class="btn sm mt1" id="help-off">✅ 問題解決了，放下手</button></div>';
        hb.querySelector('#help-off').onclick = function () { live({ help: false, helpAt: 0 }); drawHelp(); };
      } else {
        hb.innerHTML = '<div class="row small"><span class="soft">卡住了？先看卡片和紀錄 → 再問自己的助教「這張卡哪裡沒過」→ 還是不行再</span><button type="button" class="btn sm" id="help-on">🙋 求救</button></div>';
        hb.querySelector('#help-on').onclick = function () { live({ lv: L(), help: true, helpAt: Date.now() }); drawHelp(); };
      }
    }
    drawHelp();
  }
  function drawEnergy() {
    var el = document.getElementById('energy'); if (!el) return;
    var e = energy(L()), dots = ''; for (var i = 0; i < Math.max(D.ENERGY, e); i++) dots += i < e ? '⚡' : '<span class="off">⚡</span>';
    el.innerHTML = '<span class="bold small">這節的能量</span> <span class="edots" aria-label="剩 ' + e + ' 點能量">' + dots + '</span> <span class="small bold">' + e + ' / ' + D.ENERGY + '</span>' +
      '<span class="tiny soft">送一張卡進 Canvas（或起草卡、修正卡、卡 E 給 Gemini）扣 1 點；問自己的助教、卡 B 不扣。剩下的能量會換成積分。</span>' +
      '<button type="button" class="btn sm" id="en-refill">🧑‍🏫 老師補充 +2</button>';
    el.querySelector('#en-refill').onclick = function () { teacherCode('補充能量 +2', function () { save(L(), { energy: energy(L()) + 2 }); refresh(); }); };
  }

  /* 各部分的額外接線（版本、試用、測試題複製、清單打勾、老師確認） */
  function wirePartsExtra(root) {
    root.querySelectorAll('[data-chip]').forEach(function (b) {
      b.onclick = function () { var t = root.querySelector('[data-f="' + b.dataset.chip + '"]'); t.value = (t.value.trim() ? t.value.replace(/\s+$/, '') + '\n' : '') + b.textContent; t.dispatchEvent(new Event('input')); t.focus(); };
    });
    root.querySelectorAll('[data-ctext]').forEach(function (b) { b.onclick = function () { copy(D.SAMPLES[b.dataset.ctext], null); UI.toast('✅ 已複製，到 Gemini 叫出你的助教再貼上'); }; });
    root.querySelectorAll('[data-ctest]').forEach(function (b) { b.onclick = function () { copy(D.TESTS.filter(function (t) { return t.id === b.dataset.ctest; })[0].text, null); UI.toast('✅ 已複製 ' + b.dataset.ctest + '，貼給你的助教'); }; });
    var vs = root.querySelector('#v-save');
    if (vs) vs.onclick = function () {
      var text = root.querySelector('#v-text').value.trim(), why = [1, 2, 3].map(function (i) { var e = root.querySelector('#v-why' + i); return e ? e.value.trim() : ''; }).filter(function (x) { return len(x) >= 4; });
      var need = L() === 'L1' ? 3 : 1, msg = root.querySelector('#v-msg');
      if (len(text) < 60) { msg.textContent = '把 Gemini 技能裡的指令全文貼上來（至少 60 字）'; return; }
      if (why.length < need) { msg.textContent = need === 3 ? '寫下你改的 3 處和理由' : '寫下這一版改了什麼、為什麼'; return; }
      var a = aide(), v = a.versions.length + 1;
      a.versions.push({ v: v, lv: L(), text: text.slice(0, 4000), why: why, at: Date.now() }); setAide(a);
      root.querySelector('#v-text').value = ''; [1, 2, 3].forEach(function (i) { var e = root.querySelector('#v-why' + i); if (e) e.value = ''; });
      msg.textContent = '✅ 存成 v' + v + '。記得也備份到自己的 Google 文件！'; drawAideBox(); refresh();
      var h = document.querySelector('.helpbar'); if (h) render();
    };
    var tk = root.querySelector('#tk-btn');
    if (tk) tk.onclick = function () {
      var c = CHECKS[L()]();
      if (!c.ready) { UI.toast('先完成 ⭐⭐ 和這一關的其他項目，再請老師確認'); return; }
      teacherCode('確認 ' + L() + ' 的 ⭐⭐⭐：' + LV[cur].stars[2], function () { save(L(), { tOk: true, tOkAt: Date.now() }); refresh(); });
    };
    var tl = root.querySelector('#tl-items');
    if (tl) UPD.push(function () {
      // 項目文字變了才重畫（打勾只同步勾選狀態，不重畫，鍵盤焦點不會跑掉）
      var it = tlItems(), html = it.map(function (x, i) { return '<label class="chk"><input type="checkbox" data-tl="' + i + '"><span>' + esc(x) + '</span></label>'; }).join('') +
        '<label class="chk"><input type="checkbox" data-tl="E"><span>邊界：' + esc(T('L3', 'tl_edge') || '（在下面寫一條）') + '</span></label>';
      if (!it.length) html = '<div class="note warn small">先完成第 2 節的設計規格卡，規則會自動變成測試項目。</div>';
      if (tl.dataset.h !== html) {
        tl.dataset.h = html; tl.innerHTML = html;
        tl.querySelectorAll('[data-tl]').forEach(function (c) { c.onchange = function () { var p = {}; p['tl_c' + c.dataset.tl] = c.checked; save('L3', p); refresh(); }; });
      }
      tl.querySelectorAll('[data-tl]').forEach(function (c) { c.checked = !!F('L3', 'tl_c' + c.dataset.tl); });
    });
  }

  /* data-f 欄位：打字就存（每一關的 extra），存完更新卡片預覽與星星 */
  function wireFields(root) {
    var timers = {};
    root.querySelectorAll('[data-f]').forEach(function (e) {
      var k = e.dataset.f, id = L();
      function put() { var p = {}; p[k] = e.type === 'checkbox' ? e.checked : e.value; save(id, p); refresh(); }
      if (e.type === 'checkbox' || e.tagName === 'SELECT') e.onchange = put;
      else e.oninput = function () { clearTimeout(timers[k]); timers[k] = setTimeout(put, 200); };
      if (e.tagName !== 'SELECT' && e.type !== 'checkbox') e.onblur = function () { clearTimeout(timers[k]); put(); };
    });
  }

  /* 更新：卡片預覽、提醒、星星條件 */
  function refresh() {
    UPD.forEach(function (f) { f(); });
    var id = L(), c = grade(id), l = LV[cur], s = stars(id);
    var el = document.getElementById('lv-stars'); if (el) el.innerHTML = '<div style="font-size:1.6rem">' + UI.stars(s) + '</div>';
    var tot = LV.reduce(function (a, x) { return a + stars(x.id); }, 0), te = document.getElementById('tot-stars'); if (te) te.textContent = tot + ' / ' + LV.length * 3;
    var sg = document.getElementById('stargoal');
    if (sg) sg.innerHTML = l.stars.map(function (t, i) { return '<li class="' + (s > i ? 'ok' : '') + '">' + '⭐'.repeat(i + 1) + ' ' + esc(t) + (s > i ? ' ✅' : '') + '</li>'; }).join('');
    document.querySelectorAll('.lvcard').forEach(function (b, i) { var p = b.querySelector('.pg span:last-child'); if (p) p.innerHTML = UI.stars(stars(LV[i].id)); });
    drawEnergy(); partNotes(id, c);
  }
  /* 各部分的提醒與檢核清單（依 CHECKS 的結果） */
  function partNotes(id, c) {
    function put(sel, html) { var e = document.querySelector(sel); if (e) e.innerHTML = html; }
    if (id === 'L1') {
      put('#d-checks', chk(c.c1[0], '有名字和語氣') + chk(c.c1[1], '規格卡標準 ≥ 3 條（現在 ' + lines(F('L1', 'd_spec')).length + '）') + chk(c.c1[2], '骨架卡、功能卡標準 ≥ 2 條') + chk(c.c1[3], '除錯卡標準 ≥ 2 條') + chk(c.c1[4], '不能做的事 ≥ 3 件'));
      put('#h1-warn', c.c1.every(Boolean) ? '' : '<div class="note warn small">先把 ① 設計單填完整：起草卡會用到你寫的每一條。</div>');
      ['good', 'bad'].forEach(function (k) {
        var v = verdict(T('L1', 't_' + k)), want = k === 'good' ? 'pass' : 'block';
        put('#t-' + k + '-st', !T('L1', 't_' + k) ? '' : !v ? '<span class="tiny bold" style="color:var(--warn)">看不到「結論：通過／不通過」—— 檢查指令有沒有規定回覆格式</span>' :
          v === want ? '<span class="tiny bold" style="color:var(--ok)">✅ 判對了</span>' : '<span class="tiny bold" style="color:var(--bad)">❌ 判錯了：回頭改指令，存成新版本再試</span>');
      });
    }
    if (id === 'L2') {
      D.TESTS.forEach(function (t) {
        var r = testRes(t.id); put('#tr-' + t.id, !r ? '' : r === t.expect ? '<span class="ok">✅</span>' : '<span class="bad">❌ 改指令</span>');
      });
      put('#t-checks', chk(c.all, '6 題都跑過（T5、T6 自己出題）') + chk(c.core, 'T1～T4 都判對') + chk(c.tough, 'T5、T6 也擋住') + chk(c.spec, '設計規格卡通過助教檢核'));
      var tr = D.TRACKS[T('L2', 's_track')];
      put('#s-track', tr ? '<div class="note small">' + tr.icon + ' <b>' + esc(tr.name) + '</b>：例如 ' + esc(tr.eg) + '<br>🦴 第 3 節要做到的最小可玩版：' + esc(tr.mvp) + '</div>' : '');
      var miss = specMissing(), w = [];
      [1, 2, 3].forEach(function (i) { var r = T('L2', 's_r' + i); if (!r) return; if (!/如果/.test(r) || !/那麼/.test(r)) w.push('規則 ' + i + ' 還不是「如果…那麼…」'); if (VAGUE.test(r)) w.push('規則 ' + i + ' 的「' + r.match(VAGUE)[0] + '」測得到嗎？'); });
      put('#s-warn', (miss.length ? '<div class="note warn small">還沒填：' + esc(miss.join('、')) + '</div>' : '') + (w.length ? '<div class="note warn small mt1">' + esc(w.join('；')) + '</div>' : ''));
    }
    if (id === 'L3') put('#sk-warn', gpass('L2', 'SPEC', specText()) ? '' : '<div class="note warn small">建議先完成關卡 2 的設計規格卡並通過助教檢核，骨架卡會自動帶入 —— <a href="#L2" id="to-l2">回關卡 2</a>（也可以先在這裡試）</div>');
    if (id === 'L4') put('#tr-checks', chk(c.n >= 3, '找到 3 個寶物（現在 ' + c.n + '）') + chk(c.n >= 5, '5 個寶物都找到') + chk(c.man, '手動改了 3 個參數，都有寫預測和結果') + chk(c.same, '3 個預測都對'));
    if (id === 'L4') put('#m-checks', '');
    if (id === 'L6') {
      var n = aide().errors.length, V = aide().versions.length;
      put('#rf-count', '你的助教被記下 <b>' + n + '</b> 次錯誤，現在是 <b>v' + (V || 0) + '</b>。AI 會判斷錯 —— 最後由人決定。');
    }
    var tk = document.getElementById('tk-st');
    if (tk) {
      var ok = !!F(id, 'tOk');
      tk.innerHTML = ok ? '<div class="note ok small">✅ 老師已確認 ⭐⭐⭐</div>' : c.ready ? '<div class="note small">⭐⭐ 和其他項目都完成了，舉手請老師來看。</div>' : '<div class="note warn small">先完成 ⭐⭐ 和這一關的其他項目。</div>';
    }
    var l2 = document.getElementById('to-l2'); if (l2) l2.onclick = function (e) { e.preventDefault(); go(1); };
  }

  /* 🤖 我的助教：版本紀錄＋錯誤紀錄 */
  function drawAideBox() {
    var box = document.getElementById('aidebox'); if (!box) return;
    var a = aide();
    box.innerHTML = '<details' + (a.versions.length ? '' : ' open') + '><summary class="bold">🤖 我的助教：' + (a.versions.length ? 'v' + a.versions[a.versions.length - 1].v : '還沒建立') + ' · 錯誤紀錄 ' + a.errors.length + ' 筆</summary>' +
      (a.versions.length ? '<div class="stack mt1">' + a.versions.slice().reverse().map(function (v) {
        return '<details class="ver"><summary class="small bold">v' + v.v + '（關卡 ' + v.lv.slice(1) + '）' + esc((v.why || []).join('；')) + '</summary><div class="files mt1">' + esc(v.text) + '</div></details>';
      }).join('') + '</div>' : '<p class="small soft mt1">在關卡 1 建立 v1。</p>') +
      '<p class="small bold mt2">🐞 助教錯誤紀錄</p>' + (a.errors.length ? '<ul class="small">' + a.errors.map(function (e) {
        return '<li>關卡 ' + e.lv.slice(1) + ' · ' + esc(e.card) + '：助教說「' + esc(e.said) + '」，我認為 ' + esc(e.think) + '</li>';
      }).join('') + '</ul>' : '<p class="tiny soft">還沒有。覺得助教判錯時，在卡片下面按「🙋 我認為助教判錯了」。</p>') + '</details>';
  }
  /* 📒 提示詞紀錄 */
  function drawLog() {
    var box = document.getElementById('logbox'); if (!box) return;
    var Lg = logs();
    box.innerHTML = '<details><summary class="bold">📒 提示詞紀錄：送出 ' + Lg.length + ' 張卡</summary>' + (Lg.length ? '<div class="scroll-x mt1"><table class="logt"><thead><tr><th>時間</th><th>關</th><th>卡</th><th>助教</th><th>我預測</th><th>實際上</th><th>過？</th></tr></thead><tbody>' +
      Lg.slice().reverse().map(function (x) {
        var d = new Date(x.at);
        return '<tr><td>' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + '</td><td>' + esc(x.lv.slice(1)) + '</td><td>' + esc(x.card) + '</td><td>' + esc(x.aide || '—') + '</td><td>' + esc(x.pred || '—') + '</td><td>' + esc(x.act || '') + '</td><td>' + (x.ok === true ? '✅' : x.ok === false ? '❌' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '<p class="small soft mt1">還沒有送出任何卡。</p>') + '</details>' +
      '<div class="row mt2"><button type="button" class="btn sm" id="reset-all">🗑 清除這台電腦的紀錄，重新開始</button></div>';
    box.querySelector('#reset-all').onclick = function () {
      if (!confirm('確定要清除這台電腦上 AI 助教工坊的全部紀錄嗎？（助教版本、卡片、星星都會清掉）')) return;
      STORE.reset(); cur = 0; try { history.replaceState(null, '', location.pathname); } catch (e) {} live({ lv: LV[0].id }); render();
    };
  }

  /* 🧑‍🏫 老師確認碼（config.js 的 AIAIDE.TEACHER_HASH = SHA-256('c116-aiaide:' + 確認碼)） */
  function sha(s) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error('nosubtle'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function (b) { return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, '0'); }).join(''); });
  }
  function teacherCode(what, ok) {
    if (!CFG.TEACHER_HASH) { UI.toast('老師還沒設定確認碼（config.js 的 AIAIDE.TEACHER_HASH）'); return; }
    var dlg = UI.modal('<p class="kicker">老師確認</p><h2 class="bold" style="font-size:1.15rem">' + esc(what) + '</h2>' +
      '<form id="tk-form" class="stack mt2"><label class="field">確認碼<input type="password" name="code" autocomplete="off" inputmode="numeric"></label><p id="tk-err" class="small bold" style="color:var(--bad);min-height:1.2em" aria-live="polite"></p>' +
      '<div class="row"><button class="btn primary">確認</button><button type="button" class="btn" data-close>取消</button></div></form>');
    dlg.el.querySelector('#tk-form').onsubmit = function (e) {
      e.preventDefault();
      sha('c116-aiaide:' + e.target.code.value.trim()).then(function (h) {
        if (h !== CFG.TEACHER_HASH) { dlg.el.querySelector('#tk-err').textContent = '確認碼不對'; return; }
        dlg.close(); ok(); UI.toast('🧑‍🏫 老師已確認');
      }, function () { dlg.el.querySelector('#tk-err').textContent = '這個瀏覽器不能驗證（請用 https 網址開啟）'; });
    };
  }

  window.AIAIDE = { hash: function (code) { return sha('c116-aiaide:' + code); }, render: render };

  UI.topbar('#topbar', { title: '🤖 AI 助教工坊', kicker: (CONFIG.SCHOOL ? CONFIG.SCHOOL + ' · ' : '') + '用 AI 設計自己的 AI', hub: CONFIG.HOME || '../index.html?stay', backLabel: '← 總入口' });
  function start() {
    var h = (location.hash || '').slice(1), i = LV.map(function (l) { return l.id; }).indexOf(h);
    if (i < 0) { i = 0; for (var k = 0; k < LV.length; k++) if (stars(LV[k].id) > 0) i = Math.min(k + 1, LV.length - 1); }
    cur = i; live({ lv: LV[cur].id }); render();
  }
  if (CONFIG.NO_LOGIN) start(); else UI.requireLogin(start);   // 🔓 暫時全部開放：不登入，直接開始
})();
