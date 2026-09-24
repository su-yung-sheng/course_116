/* =====================================================================
   SEAL：答案封存（瀏覽器與 Node 共用）
   ---------------------------------------------------------------------
   公開網站裡不放任何明碼答案。答案、解說、預期輸出一律由 tools/build.mjs
   從 private/（不進 git）產生成下面兩種形式：

   ① 雜湊  SEAL.h(salt, 值) → 24 字元十六進位
      用在「比對」：學生的輸出、公式結果算出雜湊，和存的雜湊比。（同步，快）
   ② 封存  SEAL.seal(salt, 鑰匙, 物件) → 字串；SEAL.open(字串, salt, 鑰匙) → 物件或 null
      鑰匙就是「正確答案本身」。學生選對，才打得開、才看得到解說；選錯就是打不開。
      用 PBKDF2（20,000 次）＋ AES-GCM。（非同步）

   ⚠️ 誠實的限制（寫在這裡，免得以為這是防線）：
      · 選項只有幾個的題目，會寫程式的人可以把每個選項都拿去試開 —— 能擋「看」，擋不了「試」。
        真正防暴力破解要把評分搬到伺服器、由伺服器限制次數（見 docs/05_安全性.md）。
      · Python 的隱藏測資「輸入」一定要在瀏覽器裡執行，只能混淆（obscure），不是加密。
        預期的「輸出」則是雜湊，看不到。
   ===================================================================== */
(function (root) {
  var ITER = 20000;
  var enc = new TextEncoder(), dec = new TextDecoder();

  /* ── 同步 SHA-256（比對用；不依賴 WebCrypto 的非同步介面） ── */
  var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  function sha256Bytes(bytes) {
    var l = bytes.length, bl = ((l + 9 + 63) >> 6) << 6, m = new Uint8Array(bl);
    m.set(bytes); m[l] = 0x80;
    var bits = l * 8; for (var i = 0; i < 8; i++) m[bl - 1 - i] = (i < 4 ? (bits >>> (8 * i)) : Math.floor(bits / Math.pow(2, 8 * i))) & 0xff;
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], W = new Array(64);
    for (var o = 0; o < bl; o += 64) {
      for (var t = 0; t < 16; t++) W[t] = (m[o + 4 * t] << 24) | (m[o + 4 * t + 1] << 16) | (m[o + 4 * t + 2] << 8) | m[o + 4 * t + 3];
      for (t = 16; t < 64; t++) {
        var a0 = W[t - 15], a1 = W[t - 2];
        var s0 = ((a0 >>> 7) | (a0 << 25)) ^ ((a0 >>> 18) | (a0 << 14)) ^ (a0 >>> 3);
        var s1 = ((a1 >>> 17) | (a1 << 15)) ^ ((a1 >>> 19) | (a1 << 13)) ^ (a1 >>> 10);
        W[t] = (W[t - 16] + s0 + W[t - 7] + s1) | 0;
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (t = 0; t < 64; t++) {
        var S1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        var ch = (e & f) ^ (~e & g), t1 = (h + S1 + ch + K[t] + W[t]) | 0;
        var S0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        var mj = (a & b) ^ (a & c) ^ (b & c), t2 = (S0 + mj) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    var out = new Uint8Array(32);
    for (i = 0; i < 8; i++) { out[4 * i] = H[i] >>> 24; out[4 * i + 1] = (H[i] >>> 16) & 255; out[4 * i + 2] = (H[i] >>> 8) & 255; out[4 * i + 3] = H[i] & 255; }
    return out;
  }
  function hex(b) { var s = ''; for (var i = 0; i < b.length; i++) s += (b[i] < 16 ? '0' : '') + b[i].toString(16); return s; }
  function sha(str) { return hex(sha256Bytes(enc.encode(String(str)))); }
  function b64(bytes) { var s = ''; for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return (typeof btoa === 'function' ? btoa(s) : Buffer.from(s, 'binary').toString('base64')); }
  function unb64(str) { var s = typeof atob === 'function' ? atob(str) : Buffer.from(str, 'base64').toString('binary'); var b = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return b; }

  function subtle() { return (root.crypto && root.crypto.subtle) || null; }
  function keyFor(salt, secret) {
    var S = subtle();
    return S.importKey('raw', enc.encode(String(secret)), 'PBKDF2', false, ['deriveKey']).then(function (base) {
      return S.deriveKey({ name: 'PBKDF2', salt: enc.encode('c116|' + salt), iterations: ITER, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
    });
  }

  var SEAL = {
    ITER: ITER,
    sha: sha,
    /** 比對用雜湊（同步）。salt 讓同樣的答案在不同題目有不同的雜湊。 */
    h: function (salt, value) { return sha(salt + '\u0001' + value).slice(0, 24); },
    /** 封存（建置時用）：鑰匙＝正確答案；iv 由內容決定，重新建置不會無端變動 */
    seal: function (salt, secret, obj, pepper) {
      var iv = sha256Bytes(enc.encode((pepper || '') + '|' + salt + '|' + secret + '|' + JSON.stringify(obj))).slice(0, 12);
      return keyFor(salt, secret).then(function (k) {
        return subtle().encrypt({ name: 'AES-GCM', iv: iv }, k, enc.encode(JSON.stringify(obj)));
      }).then(function (ct) { var all = new Uint8Array(12 + ct.byteLength); all.set(iv); all.set(new Uint8Array(ct), 12); return b64(all); });
    },
    /** 用學生的答案試開；鑰匙錯就回 null */
    open: function (blob, salt, secret) {
      if (!blob) return Promise.resolve(null);
      var all = unb64(blob);
      return keyFor(salt, secret).then(function (k) {
        return subtle().decrypt({ name: 'AES-GCM', iv: all.slice(0, 12) }, k, all.slice(12));
      }).then(function (pt) { return JSON.parse(dec.decode(pt)); }, function () { return null; });
    },
    /** 混淆（不是加密）：Python 隱藏測資的輸入必須在瀏覽器執行，只能做到「F12 看不到明碼」 */
    obscure: function (salt, obj) {
      var pt = enc.encode(JSON.stringify(obj)), ks = sha256Bytes(enc.encode('obscure|' + salt)), out = new Uint8Array(pt.length);
      for (var i = 0; i < pt.length; i++) { if (i % 32 === 0 && i) ks = sha256Bytes(ks); out[i] = pt[i] ^ ks[i % 32]; }
      return b64(out);
    },
    reveal: function (salt, str) {
      var ct = unb64(str), ks = sha256Bytes(enc.encode('obscure|' + salt)), out = new Uint8Array(ct.length);
      for (var i = 0; i < ct.length; i++) { if (i % 32 === 0 && i) ks = sha256Bytes(ks); out[i] = ct[i] ^ ks[i % 32]; }
      return JSON.parse(dec.decode(out));
    },
    /** 數值比對：四捨五入到小數第 2 位的字串（公式、BMI 都用這個） */
    num2: function (x) { var n = Math.round(Number(x) * 100) / 100; if (Object.is(n, -0)) n = 0; return n.toFixed(2); }
  };

  root.SEAL = SEAL;
  if (typeof module !== 'undefined' && module.exports) module.exports = SEAL;
})(typeof window !== 'undefined' ? window : globalThis);
