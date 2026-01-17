! function(e, t) {
  return 'object' == typeof exports && 'object' == typeof module ? t(exports) : 'function' == typeof define && define.amd ? define(['exports'], t) : void t(e.acorn || (e.acorn = {}));
}('undefined' == typeof globalThis ? this || window : globalThis, function(e) {
  'use strict';
  e.version = '0.5.0';
  var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15 = '';
  e.parse = function(e, v3) {
    return v1 = (v15 = String(e)).length,
      function e(v1) {
        for (var v3 in (v0 = v1 || {}, y))
          Object.prototype.hasOwnProperty.call(v0, v3) || (v0[v3] = y[v3]);
        v2 = v0.sourceFile;
      }(v3), v8 = 1, b = v9 = 0, v7 = !0, e4(),
      function e(v1) {
        O = g = b, v0.locations && (v10 = new eM()), v11 = v13 = !1, v12 = [], e3();
        var v2 = v1 || eH(),
          v3 = !0;
        for (v1 || (v2.body = []); v5 !== C;) {
          var v4 = ts();
          v2.body.push(v4), v3 && eQ(v4) && eW(!0), v3 = !1;
        }
        return e9(v2, 'Program');
      }(v0.program);
  };
  var v16 = {
      strictSemicolons: !1,
      allowTrailingCommas: !0,
      forbidReserved: !1,
      allowReturnOutsideFunction: !1,
      locations: !1,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null
    },
    v17 = function(e, v0) {
      for (var v1 = 1, v2 = 0;;) {
        eL.lastIndex = v2;
        var v3 = eL.exec(e);
        if (v3 && v3.index < v0)
          ++v1, v2 = v3.index + v3[0].length;
        else
          break;
      }
      return {
        line: v1,
        column: v0 - v2
      };
    },
    v18 = 0,
    v19 = 0,
    v20 = 0,
    v21 = 0,
    v22 = 0;

  function v23(e, v0) {
    var v1 = v17(v15, e),
      v2 = SyntaxError(v0 += ' (' + v1.line + ':' + v1.column + ')');
    throw v2.pos = e, v2.loc = v1, v2.raisedAt = v18, v2;
  }
  var v24 = [],
    v25 = {
      type: 'num'
    },
    v26 = {
      type: 'regexp'
    },
    v27 = {
      type: 'string'
    },
    v28 = {
      type: 'name'
    },
    v29 = {
      type: 'eof'
    },
    v30 = {
      keyword: 'break'
    },
    v31 = {
      keyword: 'case',
      beforeExpr: !0
    },
    v32 = {
      keyword: 'catch'
    },
    v33 = {
      keyword: 'continue'
    },
    v34 = {
      keyword: 'debugger'
    },
    v35 = {
      keyword: 'default'
    },
    v36 = {
      keyword: 'do',
      isLoop: !0
    },
    v37 = {
      keyword: 'else',
      beforeExpr: !0
    },
    v38 = {
      keyword: 'finally'
    },
    v39 = {
      keyword: 'for',
      isLoop: !0
    },
    v40 = {
      keyword: 'function'
    },
    v41 = {
      keyword: 'if'
    },
    v42 = {
      keyword: 'return',
      beforeExpr: !0
    },
    v43 = {
      keyword: 'switch'
    },
    v44 = {
      keyword: 'throw',
      beforeExpr: !0
    },
    v45 = {
      keyword: 'try'
    },
    v46 = {
      keyword: 'var'
    },
    v47 = {
      keyword: 'while',
      isLoop: !0
    },
    v48 = {
      keyword: 'with'
    },
    v49 = {
      keyword: 'new',
      beforeExpr: !0
    },
    v50 = {
      keyword: 'this'
    },
    v51 = {
      keyword: 'null',
      atomValue: null
    },
    v52 = {
      keyword: 'true',
      atomValue: !0
    },
    v53 = {
      keyword: 'false',
      atomValue: !1
    },
    v54 = {
      keyword: 'in',
      binop: 7,
      beforeExpr: !0
    },
    v55 = {
      break: v30,
      case: v31,
      catch: v32,
      continue: v33,
      debugger: v34,
      default: v35,
      do: v36,
      else: v37,
      finally: v38,
      for: v39,
      function: v40,
      if: v41,
      return: v42,
      switch: v43,
      throw: v44,
      try: v45,
      var: v46,
      while: v47,
      with: v48,
      null: v51,
      true: v52,
      false: v53,
      new: v49,
      in: v54,
      instanceof: {
        keyword: 'instanceof',
        binop: 7,
        beforeExpr: !0
      },
      this: v50,
      typeof: {
        keyword: 'typeof',
        prefix: !0,
        beforeExpr: !0
      },
      void: {
        keyword: 'void',
        prefix: !0,
        beforeExpr: !0
      },
      delete: {
        keyword: 'delete',
        prefix: !0,
        beforeExpr: !0
      }
    },
    v56 = {
      type: '[',
      beforeExpr: !0
    },
    v57 = {
      type: ']'
    },
    v58 = {
      type: '{',
      beforeExpr: !0
    },
    v59 = {
      type: '}'
    },
    v60 = {
      type: '(',
      beforeExpr: !0
    },
    v61 = {
      type: ')'
    },
    v62 = {
      type: ',',
      beforeExpr: !0
    },
    v63 = {
      type: ';',
      beforeExpr: !0
    },
    v64 = {
      type: ':',
      beforeExpr: !0
    },
    v65 = {
      type: '.'
    },
    v66 = {
      type: '?',
      beforeExpr: !0
    },
    v67 = {
      binop: 10,
      beforeExpr: !0
    },
    v68 = {
      isAssign: !0,
      beforeExpr: !0
    },
    v69 = {
      isAssign: !0,
      beforeExpr: !0
    },
    v70 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    v71 = {
      prefix: !0,
      beforeExpr: !0
    },
    v72 = {
      binop: 1,
      beforeExpr: !0
    },
    v73 = {
      binop: 2,
      beforeExpr: !0
    },
    v74 = {
      binop: 3,
      beforeExpr: !0
    },
    v75 = {
      binop: 4,
      beforeExpr: !0
    },
    v76 = {
      binop: 5,
      beforeExpr: !0
    },
    v77 = {
      binop: 6,
      beforeExpr: !0
    },
    v78 = {
      binop: 7,
      beforeExpr: !0
    },
    v79 = {
      binop: 8,
      beforeExpr: !0
    },
    v80 = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    v81 = {
      binop: 10,
      beforeExpr: !0
    };

  function v82(e) {
    for (var v0 = e.split(' '), v1 = Object.create(null), v2 = 0; v2 < v0.length; v2++)
      v1[v0[v2]] = !0;
    return function(e) {
      return v1[e] || !1;
    };
  }
  var v83 = v82('class enum extends super const export import'),
    v84 = v82('implements interface let package private protected public static yield'),
    v85 = v82('eval arguments'),
    v86 = v82('break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
    v87 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    v88 = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
    v89 = RegExp('[' + v88 + ']'),
    v90 = RegExp('[' + v88 + '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'),
    v91 = /[\n\r\u2028\u2029]/,
    v92 = /\r\n|[\n\r\u2028\u2029]/g,
    v93 = function(e) {
      return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && v89.test(String.fromCharCode(e)));
    },
    v94 = function(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && v90.test(String.fromCharCode(e))));
    };

  function v95() {
    this.line = v8, this.column = v18 - v9;
  }

  function v96(e, v1) {
    v20 = v18, v0.locations && (v4 = new v95()), v5 = e, e4(), v6 = v1, v7 = e.beforeExpr;
  }

  function v97() {
    var v98, v1 = v0.onComment && v0.locations && new v95(),
      v2 = v18,
      v3 = v15.indexOf('*/', v18 += 2);
    if (-1 === v3 && v23(v18 - 2, 'Unterminated comment'), v18 = v3 + 2, v0.locations)
      for (v92.lastIndex = v2;
        (v98 = v92.exec(v15)) && v98.index < v18;)
        ++v8, v9 = v98.index + v98[0].length;
    v0.onComment && v0.onComment(!0, v15.slice(v2 + 2, v3), v2, v18, v1, v0.locations && new v95());
  }

  function v99() {
    for (var v98 = v18, v2 = v0.onComment && v0.locations && new v95(), v3 = v15.charCodeAt(v18 += 2); v18 < v1 && 10 !== v3 && 13 !== v3 && 8232 !== v3 && 8233 !== v3;)
      ++v18, v3 = v15.charCodeAt(v18);
    v0.onComment && v0.onComment(!1, v15.slice(v98 + 2, v18), v98, v18, v2, v0.locations && new v95());
  }

  function v100() {
    for (; v18 < v1;) {
      var v98 = v15.charCodeAt(v18);
      if (32 === v98)
        ++v18;
      else if (13 === v98) {
        ++v18;
        var v2 = v15.charCodeAt(v18);
        10 === v2 && ++v18, v0.locations && (++v8, v9 = v18);
      } else if (10 === v98 || 8232 === v98 || 8233 === v98)
        ++v18, v0.locations && (++v8, v9 = v18);
      else if (v98 > 8 && v98 < 14)
        ++v18;
      else if (47 === v98) {
        var v2 = v15.charCodeAt(v18 + 1);
        if (42 === v2)
          v97();
        else if (47 === v2)
          v99();
        else
          break;
      } else if (160 === v98)
        ++v18;
      else if (v98 >= 5760 && v87.test(String.fromCharCode(v98)))
        ++v18;
      else
        break;
    }
  }

  function v101(v98) {
    if (v98 ? v18 = v19 + 1 : v19 = v18, v0.locations && (v3 = new v95()), v98)
      return e5();
    if (v18 >= v1)
      return v96(v29);
    var v2 = v15.charCodeAt(v18);
    if (v93(v2) || 92 === v2)
      return eX();
    if (!1 === function v98(v2) {
        switch (v2) {
          case 46:
            return void((v4 = v15.charCodeAt(v18 + 1)) >= 48 && v4 <= 57 ? eG(!0) : (++v18, v96(v65)));
          case 40:
            return ++v18, v96(v60);
          case 41:
            return ++v18, v96(v61);
          case 59:
            return ++v18, v96(v63);
          case 44:
            return ++v18, v96(v62);
          case 91:
            return ++v18, v96(v56);
          case 93:
            return ++v18, v96(v57);
          case 123:
            return ++v18, v96(v58);
          case 125:
            return ++v18, v96(v59);
          case 58:
            return ++v18, v96(v64);
          case 63:
            return ++v18, v96(v66);
          case 48:
            var v3, v4, v5, v6, v10, v11, v12 = v15.charCodeAt(v18 + 1);
            if (120 === v12 || 88 === v12) {
              return v18 += 2, v3 = e2(16), void(null === v3 && v23(v19 + 2, 'Expected hexadecimal number'), v93(v15.charCodeAt(v18)) && v23(v18, 'Identifier directly after number'), v96(v25, v3));
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return eG(!1);
          case 34:
          case 39:
            return function v98(v2) {
              v18++;
              for (var v3 = '';;) {
                v18 >= v1 && v23(v19, 'Unterminated string constant');
                var v4 = v15.charCodeAt(v18);
                if (v4 === v2) {
                  ++v18, v96(v27, v3);
                  return;
                }
                if (92 === v4) {
                  v4 = v15.charCodeAt(++v18);
                  var v5 = /^[0-7]+/.exec(v15.slice(v18, v18 + 3));
                  for (v5 && (v5 = v5[0]); v5 && parseInt(v5, 8) > 255;)
                    v5 = v5.slice(0, -1);
                  if ('0' === v5 && (v5 = null), ++v18, v5)
                    v13 && v23(v18 - 2, 'Octal literal in strict mode'), v3 += String.fromCharCode(parseInt(v5, 8)), v18 += v5.length - 1;
                  else
                    switch (v4) {
                      case 110:
                        v3 += '\n';
                        break;
                      case 114:
                        v3 += '\r';
                        break;
                      case 120:
                        v3 += String.fromCharCode(eY(2));
                        break;
                      case 117:
                        v3 += String.fromCharCode(eY(4));
                        break;
                      case 85:
                        v3 += String.fromCharCode(eY(8));
                        break;
                      case 116:
                        v3 += '\t';
                        break;
                      case 98:
                        v3 += '\b';
                        break;
                      case 118:
                        v3 += '\x0B';
                        break;
                      case 102:
                        v3 += '\f';
                        break;
                      case 48:
                        v3 += '\0';
                        break;
                      case 13:
                        10 === v15.charCodeAt(v18) && ++v18;
                      case 10:
                        v0.locations && (v9 = v18, ++v8);
                        break;
                      default:
                        v3 += String.fromCharCode(v4);
                    }
                } else
                  (13 === v4 || 10 === v4 || 8232 === v4 || 8233 === v4) && v23(v19, 'Unterminated string constant'), v3 += String.fromCharCode(v4), ++v18;
              }
            }(v2);
          case 47:
            return v5 = v15.charCodeAt(v18 + 1), void(v7 ? (++v18, e5()) : 61 === v5 ? e7(v69, 2) : e7(v67, 1));
          case 37:
          case 42:
            return void(61 === v15.charCodeAt(v18 + 1) ? e7(v69, 2) : e7(v81, 1));
          case 124:
          case 38:
            return v6 = v2, void((v10 = v15.charCodeAt(v18 + 1)) === v6 ? e7(124 === v6 ? v72 : v73, 2) : 61 === v10 ? e7(v69, 2) : e7(124 === v6 ? v74 : v76, 1));
          case 94:
            return void(61 === v15.charCodeAt(v18 + 1) ? e7(v69, 2) : e7(v75, 1));
          case 43:
          case 45:
            return function v98(v0) {
              var v1 = v15.charCodeAt(v18 + 1);
              if (v1 === v0) {
                if (45 === v1 && 62 === v15.charCodeAt(v18 + 2) && v91.test(v15.slice(v22, v18))) {
                  v18 += 3, v99(), v100(), v101();
                  return;
                }
                e7(v70, 2);
              } else
                61 === v1 ? e7(v69, 2) : e7(v80, 1);
            }(v2);
          case 60:
          case 62:
            return function v98(v0) {
              var v1 = v15.charCodeAt(v18 + 1),
                v2 = 1;
              if (v1 === v0) {
                v2 = 62 === v0 && 62 === v15.charCodeAt(v18 + 2) ? 3 : 2, 61 === v15.charCodeAt(v18 + v2) ? e7(v69, v2 + 1) : e7(v79, v2);
                return;
              }
              if (33 === v1 && 60 === v0 && 45 === v15.charCodeAt(v18 + 2) && 45 === v15.charCodeAt(v18 + 3)) {
                v18 += 4, v99(), v100(), v101();
                return;
              }
              61 === v1 && (v2 = 61 === v15.charCodeAt(v18 + 2) ? 3 : 2), e7(v78, v2);
            }(v2);
          case 61:
          case 33:
            return v11 = v2, void(61 === v15.charCodeAt(v18 + 1) ? e7(v77, 61 === v15.charCodeAt(v18 + 2) ? 3 : 2) : e7(61 === v11 ? v68 : v71, 1));
          case 126:
            return e7(v71, 1);
        }
        return !1;
      }(v2)) {
      var v4 = String.fromCharCode(v2);
      if ('\\' === v4 || v89.test(v4))
        return eX();
      v23(v18, 'Unexpected character \'' + v4 + '\'');
    }
  }

  function v102(v98, v0) {
    var v1 = v15.slice(v18, v18 + v0);
    v18 += v0, v96(v98, v1);
  }

  function v103() {
    for (var v98, v0, v2 = v18;;) {
      v18 >= v1 && v23(v2, 'Unterminated regexp');
      var v3 = v15.charAt(v18);
      if (v91.test(v3) && v23(v2, 'Unterminated regexp'), v98)
        v98 = !1;
      else {
        if ('[' === v3)
          v0 = !0;
        else if (']' === v3 && v0)
          v0 = !1;
        else if ('/' === v3 && !v0)
          break;
        v98 = '\\' === v3;
      }
      ++v18;
    }
    var v4 = v15.slice(v2, v18);
    ++v18;
    var v5 = eV();
    v5 && !/^[gmi]*$/.test(v5) && v23(v2, 'Invalid regexp flag');
    try {
      var v6 = RegExp(v4, v5);
    } catch (v7) {
      throw v7 instanceof SyntaxError && v23(v2, v7.message), v7;
    }
    v96(v26, v6);
  }

  function v104(v98, v0) {
    for (var v1 = v18, v2 = 0, v3 = void 0 === v0 ? 1 / 0 : v0, v4 = 0; v4 < v3; ++v4) {
      var v5, v6 = v15.charCodeAt(v18);
      if ((v5 = v6 >= 97 ? v6 - 97 + 10 : v6 >= 65 ? v6 - 65 + 10 : v6 >= 48 && v6 <= 57 ? v6 - 48 : 1 / 0) >= v98)
        break;
      ++v18, v2 = v2 * v98 + v5;
    }
    return v18 === v1 || void 0 !== v0 && v18 - v1 !== v0 ? null : v2;
  }

  function v105(v98) {
    var v0, v1 = v18,
      v2 = !1,
      v3 = 48 === v15.charCodeAt(v18);
    v98 || null !== v104(10) || v23(v1, 'Invalid number'), 46 === v15.charCodeAt(v18) && (++v18, v104(10), v2 = !0);
    var v4 = v15.charCodeAt(v18);
    (69 === v4 || 101 === v4) && ((43 === (v4 = v15.charCodeAt(++v18)) || 45 === v4) && ++v18, null === v104(10) && v23(v1, 'Invalid number'), v2 = !0), v93(v15.charCodeAt(v18)) && v23(v18, 'Identifier directly after number');
    var v5 = v15.slice(v1, v18);
    v2 ? v0 = parseFloat(v5) : v3 && 1 !== v5.length ? /[89]/.test(v5) || v13 ? v23(v1, 'Invalid number') : v0 = parseInt(v5, 8) : v0 = parseInt(v5, 10), v96(v25, v0);
  }

  function v106(v98) {
    var v0 = v104(16, v98);
    return null === v0 && v23(v19, 'Bad character escape sequence'), v0;
  }

  function v107() {
    v14 = !1;
    for (var v98, v0 = !0, v1 = v18;;) {
      var v2 = v15.charCodeAt(v18);
      if (v94(v2))
        v14 && (v98 += v15.charAt(v18)), ++v18;
      else if (92 === v2) {
        v14 || (v98 = v15.slice(v1, v18)), v14 = !0, 117 !== v15.charCodeAt(++v18) && v23(v18, 'Expecting Unicode escape sequence \\uXXXX'), ++v18;
        var v3 = v106(4),
          v4 = String.fromCharCode(v3);
        v4 || v23(v18 - 1, 'Invalid Unicode escape'), (v0 ? v93(v3) : v94(v3)) || v23(v18 - 4, 'Invalid Unicode escape'), v98 += v4;
      } else
        break;
      v0 = !1;
    }
    return v14 ? v98 : v15.slice(v1, v18);
  }

  function v108() {
    var v98 = v107(),
      v0 = v28;
    !v14 && v86(v98) && (v0 = v55[v98]), v96(v0, v98);
  }

  function v109() {
    v21 = v19, v22 = v20, v10 = v4, v101();
  }

  function v110(v98) {
    if (v13 = v98, v18 = v19, v0.locations)
      for (; v18 < v9;)
        v9 = v15.lastIndexOf('\n', v9 - 2) + 1, --v8;
    v100(), v101();
  }

  function v111() {
    this.type = null, this.start = v19, this.end = null;
  }

  function v112() {
    this.start = v3, this.end = null, v2 && (this.source = v2);
  }

  function v113() {
    var v98 = new v111();
    return v0.locations && (v98.loc = new v112()), v0.directSourceFile && (v98.sourceFile = v0.directSourceFile), v0.ranges && (v98.range = [
      v19,
      0
    ]), v98;
  }

  function v114(v98) {
    var v1 = new v111();
    return v1.start = v98.start, v0.locations && (v1.loc = new v112(), v1.loc.start = v98.loc.start), v0.ranges && (v1.range = [
      v98.range[0],
      0
    ]), v1;
  }

  function v115(v98, v1) {
    return v98.type = v1, v98.end = v22, v0.locations && (v98.loc.end = v10), v0.ranges && (v98.range[1] = v22), v98;
  }

  function v116(v98) {
    return 'ExpressionStatement' === v98.type && 'Literal' === v98.expression.type && 'use strict' === v98.expression.value;
  }

  function v117(v98) {
    return v5 === v98 && (v109(), !0);
  }

  function v118() {
    return !v0.strictSemicolons && (v5 === v29 || v5 === v59 || v91.test(v15.slice(v22, v19)));
  }

  function v119() {
    v117(v63) || v118() || tn();
  }

  function v120(v98) {
    v5 === v98 ? v109() : tn();
  }

  function v121() {
    v23(v19, 'Unexpected token');
  }

  function v122(v98) {
    'Identifier' !== v98.type && 'MemberExpression' !== v98.type && v23(v98.start, 'Assigning to rvalue'), v13 && 'Identifier' === v98.type && v85(v98.name) && v23(v98.start, 'Assigning to ' + v98.name + ' in strict mode');
  }
  var v123 = {
      kind: 'loop'
    },
    v124 = {
      kind: 'switch'
    };

  function v125() {
    (v5 === v67 || v5 === v69 && '/=' === v6) && v101(!0);
    var v98, v1, v2 = v5,
      v3 = v113();
    switch (v2) {
      case v30:
      case v33:
        v109();
        var v4 = v2 === v30;
        v117(v63) || v118() ? v3.label = null : v5 !== v28 ? v121() : (v3.label = tI(), v119());
        for (var v7 = 0; v7 < v12.length; ++v7) {
          var v8 = v12[v7];
          if ((null === v3.label || v8.name === v3.label.name) && (null !== v8.kind && (v4 || 'loop' === v8.kind) || v3.label && v4))
            break;
        }
        return v7 === v12.length && v23(v3.start, 'Unsyntactic ' + v2.keyword), v115(v3, v4 ? 'BreakStatement' : 'ContinueStatement');
      case v34:
        return v109(), v119(), v115(v3, 'DebuggerStatement');
      case v36:
        return v109(), v12.push(v123), v3.body = v125(), v12.pop(), v120(v47), v3.test = tp(), v119(), v115(v3, 'DoWhileStatement');
      case v39:
        if (v109(), v12.push(v123), v120(v60), v5 === v63)
          return tc(v3, null);
        if (v5 === v46) {
          var v9 = v113();
          if (v109(), th(v9, !0), v115(v9, 'VariableDeclaration'), 1 === v9.declarations.length && v117(v54))
            return tl(v3, v9);
          return tc(v3, v9);
        }
        var v9 = tf(!1, !0);
        if (v117(v54))
          return v122(v9), tl(v3, v9);
        return tc(v3, v9);
      case v40:
        return v109(), tb(v3, !0);
      case v41:
        return v109(), v3.test = tp(), v3.consequent = v125(), v3.alternate = v117(v37) ? v125() : null, v115(v3, 'IfStatement');
      case v42:
        return v11 || v0.allowReturnOutsideFunction || v23(v19, '\'return\' outside of function'), v109(), v117(v63) || v118() ? v3.argument = null : (v3.argument = tf(), v119()), v115(v3, 'ReturnStatement');
      case v43:
        for (v109(), v3.discriminant = tp(), v3.cases = [], v120(v58), v12.push(v124); v5 !== v59;)
          if (v5 === v31 || v5 === v35) {
            var v10 = v5 === v31;
            v98 && v115(v98, 'SwitchCase'), v3.cases.push(v98 = v113()), v98.consequent = [], v109(), v10 ? v98.test = tf() : (v1 && v23(v21, 'Multiple default clauses'), v1 = !0, v98.test = null), v120(v64);
          } else
            v98 || v121(), v98.consequent.push(v125());
        return v98 && v115(v98, 'SwitchCase'), v109(), v12.pop(), v115(v3, 'SwitchStatement');
      case v44:
        return v109(), v91.test(v15.slice(v22, v19)) && v23(v22, 'Illegal newline after throw'), v3.argument = tf(), v119(), v115(v3, 'ThrowStatement');
      case v45:
        if (v109(), v3.block = tu(), v3.handler = null, v5 === v32) {
          var v14 = v113();
          v109(), v120(v60), v14.param = tI(), v13 && v85(v14.param.name) && v23(v14.param.start, 'Binding ' + v14.param.name + ' in strict mode'), v120(v61), v14.body = tu(), v3.handler = v115(v14, 'CatchClause');
        }
        return v3.finalizer = v117(v38) ? tu() : null, v3.handler || v3.finalizer || v23(v3.start, 'Missing catch or finally clause'), v115(v3, 'TryStatement');
      case v46:
        return v109(), th(v3), v119(), v115(v3, 'VariableDeclaration');
      case v47:
        return v109(), v3.test = tp(), v12.push(v123), v3.body = v125(), v12.pop(), v115(v3, 'WhileStatement');
      case v48:
        return v13 && v23(v19, '\'with\' in strict mode'), v109(), v3.object = tp(), v3.body = v125(), v115(v3, 'WithStatement');
      case v58:
        return tu();
      case v63:
        return v109(), v115(v3, 'EmptyStatement');
      default:
        var v16 = v6,
          v17 = tf();
        if (!(v2 === v28 && 'Identifier' === v17.type && v117(v64)))
          return v3.expression = v17, v119(), v115(v3, 'ExpressionStatement');
        for (var v7 = 0; v7 < v12.length; ++v7)
          v12[v7].name === v16 && v23(v17.start, 'Label \'' + v16 + '\' is already declared');
        var v18 = v5.isLoop ? 'loop' : v5 === v43 ? 'switch' : null;
        return v12.push({
          name: v16,
          kind: v18
        }), v3.body = v125(), v12.pop(), v3.label = v17, v115(v3, 'LabeledStatement');
    }
  }

  function v126() {
    v120(v60);
    var v98 = tf();
    return v120(v61), v98;
  }

  function v127(v98) {
    var v0, v1 = v113(),
      v2 = !0,
      v3 = !1;
    for (v1.body = [], v120(v58); !v117(v59);) {
      var v4 = v125();
      v1.body.push(v4), v2 && v98 && v116(v4) && (v0 = v3, v110(v3 = !0)), v2 = !1;
    }
    return v3 && !v0 && v110(!1), v115(v1, 'BlockStatement');
  }

  function v128(v98, v0) {
    return v98.init = v0, v120(v63), v98.test = v5 === v63 ? null : tf(), v120(v63), v98.update = v5 === v61 ? null : tf(), v120(v61), v98.body = v125(), v12.pop(), v115(v98, 'ForStatement');
  }

  function v129(v98, v0) {
    return v98.left = v0, v98.right = tf(), v120(v61), v98.body = v125(), v12.pop(), v115(v98, 'ForInStatement');
  }

  function v130(v98, v0) {
    for (v98.declarations = [], v98.kind = 'var';;) {
      var v1 = v113();
      if (v1.id = tI(), v13 && v85(v1.id.name) && v23(v1.id.start, 'Binding ' + v1.id.name + ' in strict mode'), v1.init = v117(v68) ? tf(!0, v0) : null, v98.declarations.push(v115(v1, 'VariableDeclarator')), !v117(v62))
        break;
    }
  }

  function v131(v98, v0) {
    var v1 = td(v0);
    if (!v98 && v5 === v62) {
      var v2 = v114(v1);
      for (v2.expressions = [v1]; v117(v62);)
        v2.expressions.push(td(v0));
      return v115(v2, 'SequenceExpression');
    }
    return v1;
  }

  function v132(v98) {
    var v0 = function v98(v0) {
      var v1, v2 = (v1 = v0, function v98(v0, v1, v2) {
        var v3 = v5.binop;
        if (null !== v3 && (!v2 || v5 !== v54) && v3 > v1) {
          var v4 = v114(v0);
          v4.left = v0, v4.operator = v6;
          var v7 = v5;
          v109(), v4.right = v98(tE(), v3, v2);
          var v8 = v115(v4, v7 === v72 || v7 === v73 ? 'LogicalExpression' : 'BinaryExpression');
          return v98(v8, v1, v2);
        }
        return v0;
      }(tE(), -1, v1));
      if (v117(v66)) {
        var v3 = v114(v2);
        return v3.test = v2, v3.consequent = v131(!0), v120(v64), v3.alternate = v131(!0, v0), v115(v3, 'ConditionalExpression');
      }
      return v2;
    }(v98);
    if (v5.isAssign) {
      var v1 = v114(v0);
      return v1.operator = v6, v1.left = v0, v109(), v1.right = v132(v98), v122(v0), v115(v1, 'AssignmentExpression');
    }
    return v0;
  }

  function v133() {
    if (v5.prefix) {
      var v98 = v113(),
        v0 = v5.isUpdate;
      return v98.operator = v6, v98.prefix = !0, v7 = !0, v109(), v98.argument = v133(), v0 ? v122(v98.argument) : v13 && 'delete' === v98.operator && 'Identifier' === v98.argument.type && v23(v98.start, 'Deleting local variable in strict mode'), v115(v98, v0 ? 'UpdateExpression' : 'UnaryExpression');
    }
    for (var v1 = t$(ty()); v5.postfix && !v118();) {
      var v98 = v114(v1);
      v98.operator = v6, v98.prefix = !1, v98.argument = v1, v122(v1), v109(), v1 = v115(v98, 'UpdateExpression');
    }
    return v1;
  }

  function v134(v98, v0) {
    var v1;
    return v117(v65) ? ((v1 = v114(v98)).object = v98, v1.property = tI(!0), v1.computed = !1, v134(v115(v1, 'MemberExpression'), v0)) : v117(v56) ? ((v1 = v114(v98)).object = v98, v1.property = v131(), v1.computed = !0, v120(v57), v134(v115(v1, 'MemberExpression'), v0)) : !v0 && v117(v60) ? ((v1 = v114(v98)).callee = v98, v1.arguments = tR(v61, !1), v134(v115(v1, 'CallExpression'), v0)) : v98;
  }

  function v135() {
    switch (v5) {
      case v50:
        return v98 = v113(), v109(), v115(v98, 'ThisExpression');
      case v28:
        return tI();
      case v25:
      case v27:
      case v26:
        return (v98 = v113()).value = v6, v98.raw = v15.slice(v19, v20), v109(), v115(v98, 'Literal');
      case v51:
      case v52:
      case v53:
        return (v98 = v113()).value = v5.atomValue, v98.raw = v5.keyword, v109(), v115(v98, 'Literal');
      case v60:
        var v98, v1, v2 = v3,
          v7 = v19;
        v109();
        var v8 = v131();
        return v8.start = v7, v8.end = v20, v0.locations && (v8.loc.start = v2, v8.loc.end = v4), v0.ranges && (v8.range = [
          v7,
          v20
        ]), v120(v61), v8;
      case v56:
        return v98 = v113(), v109(), v98.elements = tR(v57, !0, !0), v115(v98, 'ArrayExpression');
      case v58:
        return function v98() {
          var v1 = v113(),
            v2 = !0,
            v3 = !1;
          for (v1.properties = [], v109(); !v117(v59);) {
            if (v2)
              v2 = !1;
            else if (v120(v62), v0.allowTrailingCommas && v117(v59))
              break;
            var v4, v6 = {
                key: tv()
              },
              v7 = !1;
            if (v117(v64) ? (v6.value = v131(!0), v4 = v6.kind = 'init') : 'Identifier' === v6.key.type && ('get' === v6.key.name || 'set' === v6.key.name) ? (v7 = v3 = !0, v4 = v6.kind = v6.key.name, v6.key = tv(), v5 !== v60 && v121(), v6.value = tb(v113(), !1)) : v121(), 'Identifier' === v6.key.type && (v13 || v3))
              for (var v8 = 0; v8 < v1.properties.length; ++v8) {
                var v9 = v1.properties[v8];
                if (v9.key.name === v6.key.name) {
                  var v10 = v4 === v9.kind || v7 && 'init' === v9.kind || 'init' === v4 && ('get' === v9.kind || 'set' === v9.kind);
                  v10 && !v13 && 'init' === v4 && 'init' === v9.kind && (v10 = !1), v10 && v23(v6.key.start, 'Redefinition of property');
                }
              }
            v1.properties.push(v6);
          }
          return v115(v1, 'ObjectExpression');
        }();
      case v40:
        return v98 = v113(), v109(), tb(v98, !1);
      case v49:
        return v1 = v113(), v109(), v1.callee = v134(v135(), !0), v1.arguments = v117(v60) ? tR(v61, !1) : v24, v115(v1, 'NewExpression');
    }
    v121();
  }

  function v136() {
    return v5 === v25 || v5 === v27 ? v135() : tI(!0);
  }

  function v137(v98, v0) {
    v5 === v28 ? v98.id = tI() : v0 ? v121() : v98.id = null, v98.params = [];
    var v1 = !0;
    for (v120(v60); !v117(v61);)
      v1 ? v1 = !1 : v120(v62), v98.params.push(tI());
    var v2 = v11,
      v3 = v12;
    if (v11 = !0, v12 = [], v98.body = v127(!0), v11 = v2, v12 = v3, v13 || v98.body.body.length && v116(v98.body.body[0]))
      for (var v4 = v98.id ? -1 : 0; v4 < v98.params.length; ++v4) {
        var v6 = v4 < 0 ? v98.id : v98.params[v4];
        if ((v84(v6.name) || v85(v6.name)) && v23(v6.start, 'Defining \'' + v6.name + '\' in strict mode'), v4 >= 0)
          for (var v7 = 0; v7 < v4; ++v7)
            v6.name === v98.params[v7].name && v23(v6.start, 'Argument name clash in strict mode');
      }
    return v115(v98, v0 ? 'FunctionDeclaration' : 'FunctionExpression');
  }

  function v138(v98, v1, v2) {
    for (var v3 = [], v4 = !0; !v117(v98);) {
      if (v4)
        v4 = !1;
      else if (v120(v62), v1 && v0.allowTrailingCommas && v117(v98))
        break;
      v3.push(v2 && v5 === v62 ? null : v131(!0));
    }
    return v3;
  }

  function v139(v98) {
    var v1 = v113();
    return v98 && 'everywhere' === v0.forbidReserved && (v98 = !1), v5 === v28 ? (!v98 && (v0.forbidReserved && v83(v6) || v13 && v84(v6)) && -1 === v15.slice(v19, v20).indexOf('\\') && v23(v19, 'The keyword \'' + v6 + '\' is reserved'), v1.name = v6) : v98 && v5.keyword ? v1.name = v5.keyword : v121(), v7 = !1, v109(), v115(v1, 'Identifier');
  }
});
var v140 = function(v98, v0) {
  'string' == typeof v98 && (v98 = this.parse_(v98, 'code'));
  var v1, v2 = v98.constructor;
  this.newNode = function() {
    return new v2({
      options: {}
    });
  };
  var v3 = this.newNode();
  for (var v4 in v98)
    v3[v4] = 'body' === v4 ? v98[v4].slice() : v98[v4];
  this.ast = v3, this.tasks = [], this.initFunc_ = v0, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var v5 = /^step([A-Z]\w*)$/;
  for (var v6 in this)
    'function' == typeof this[v6] && (v1 = v6.match(v5)) && (this.stepFunctions_[v1[1]] = this[v6].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join('\n'), 'polyfills'), this.polyfills_ = void 0, v140.stripLocations_(this.ast, void 0, void 0);
  var v7 = new v140.State(this.ast, this.globalScope);
  v7.done = !1, this.stateStack = [v7], this.run(), this.value = void 0, this.ast = v3, (v7 = new v140.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = v7;
};
v140.Completion = {
  NORMAL: 0,
  BREAK: 1,
  CONTINUE: 2,
  RETURN: 3,
  THROW: 4
}, v140.Status = {
  DONE: 0,
  STEP: 1,
  TASK: 2,
  ASYNC: 3
}, v140.PARSE_OPTIONS = {
  locations: !0,
  ecmaVersion: 5
}, v140.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, v140.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, v140.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, v140.VARIABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, v140.STEP_ERROR = {
  STEP_ERROR: !0
}, v140.SCOPE_REFERENCE = {
  SCOPE_REFERENCE: !0
}, v140.VALUE_IN_DESCRIPTOR = {
  VALUE_IN_DESCRIPTOR: !0
}, v140.REGEXP_TIMEOUT = {
  REGEXP_TIMEOUT: !0
}, v140.toStringCycles_ = [], v140.vm = null, v140.currentInterpreter_ = null, v140.nativeGlobal = 'undefined' == typeof globalThis ? this || window : globalThis, v140.WORKER_CODE = [
  'onmessage = function(e) {',
  'var result;',
  'var data = e.data;',
  'switch (data[0]) {',
  'case \'split\':',
  'result = data[1].split(data[2], data[3]);',
  'break;',
  'case \'match\':',
  'result = data[1].match(data[2]);',
  'break;',
  'case \'search\':',
  'result = data[1].search(data[2]);',
  'break;',
  'case \'replace\':',
  'result = data[1].replace(data[2], data[3]);',
  'break;',
  'case \'exec\':',
  'var regexp = data[1];',
  'regexp.lastIndex = data[2];',
  'result = [regexp.exec(data[3]), data[1].lastIndex];',
  'break;',
  'default:',
  'throw Error(\'Unknown RegExp operation: \' + data[0]);',
  '}',
  'postMessage(result);',
  'close();',
  '};'
], v140.legalArrayLength = function(v98) {
  var v0 = v98 >>> 0;
  return v0 === Number(v98) ? v0 : NaN;
}, v140.legalArrayIndex = function(v98) {
  var v0 = v98 >>> 0;
  return String(v0) === String(v98) && 4294967295 !== v0 ? v0 : NaN;
}, v140.stripLocations_ = function(v98, v0, v1) {
  for (var v2 in (v0 ? v98.start = v0 : delete v98.start, v1 ? v98.end = v1 : delete v98.end, v98))
    if (v98[v2] !== v98.loc && v98.hasOwnProperty(v2)) {
      var v3 = v98[v2];
      v3 && 'object' == typeof v3 && v140.stripLocations_(v3, v0, v1);
    }
}, v140.prototype.REGEXP_MODE = 2, v140.prototype.REGEXP_THREAD_TIMEOUT = 1000, v140.prototype.POLYFILL_TIMEOUT = 1000, v140.prototype.getterStep_ = !1, v140.prototype.setterStep_ = !1, v140.prototype.appendCodeNumber_ = 0, v140.prototype.taskCodeNumber_ = 0, v140.prototype.parse_ = function(v98, v0) {
  var v1 = {};
  for (var v2 in v140.PARSE_OPTIONS)
    v1[v2] = v140.PARSE_OPTIONS[v2];
  return v1.sourceFile = v0, v140.nativeGlobal.acorn.parse(v98, v1);
}, v140.prototype.appendCode = function(v98) {
  var v0 = this.stateStack[0];
  if (!v0 || 'Program' !== v0.node.type)
    throw Error('Expecting original AST to start with a Program node');
  if ('string' == typeof v98 && (v98 = this.parse_(v98, 'appendCode' + this.appendCodeNumber_++)), !v98 || 'Program' !== v98.type)
    throw Error('Expecting new AST to start with a Program node');
  this.populateScope_(v98, v0.scope), Array.prototype.push.apply(v0.node.body, v98.body), v0.node.body.variableCache_ = null, v0.done = !1;
}, v140.prototype.step = function() {
  var v98, v0 = this.stateStack;
  do {
    var v1 = v0[v0.length - 1];
    if (this.paused_)
      break;
    if (!v1 || 'Program' === v1.node.type && v1.done) {
      if (!this.tasks.length)
        return !1;
      if (!(v1 = this.nextTask_()))
        break;
    }
    var v2 = v1.node,
      v3 = v140.currentInterpreter_;
    v140.currentInterpreter_ = this;
    try {
      var v4 = this.stepFunctions_[v2.type](v0, v1, v2);
    } catch (v5) {
      if (v5 !== v140.STEP_ERROR)
        throw this.value !== v5 && (this.value = void 0), v5;
    } finally {
      v140.currentInterpreter_ = v3;
    }
    if (v4 && v0.push(v4), this.getterStep_)
      throw this.value = void 0, Error('Getter not supported in this context');
    if (this.setterStep_)
      throw this.value = void 0, Error('Setter not supported in this context');
    v98 || v2.end || (v98 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!v2.end && v98 > Date.now());
  return !0;
}, v140.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, v140.prototype.getStatus = function() {
  if (this.paused_)
    return v140.Status.ASYNC;
  var v98 = this.stateStack,
    v0 = v98[v98.length - 1];
  if (v0 && ('Program' !== v0.node.type || !v0.done))
    return v140.Status.STEP;
  var v1 = this.tasks[0];
  return v1 ? v1.time > Date.now() ? v140.Status.TASK : v140.Status.STEP : (0, v140.Status.DONE);
}, v140.prototype.initGlobal = function(v98) {
  this.setProperty(v98, 'NaN', NaN, v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'Infinity', 1 / 0, v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'undefined', void 0, v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'window', v98, v140.READONLY_DESCRIPTOR), this.setProperty(v98, 'this', v98, v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'self', v98), this.OBJECT_PROTO = new v140.Object(null), this.FUNCTION_PROTO = new v140.Object(this.OBJECT_PROTO), this.initFunction(v98), this.initObject(v98), v98.proto = this.OBJECT_PROTO, this.setProperty(v98, 'constructor', this.OBJECT, v140.NONENUMERABLE_DESCRIPTOR), this.initArray(v98), this.initString(v98), this.initBoolean(v98), this.initNumber(v98), this.initDate(v98), this.initRegExp(v98), this.initError(v98), this.initMath(v98), this.initJSON(v98);
  var v0, v1 = this,
    v2 = this.createNativeFunction(function(v98) {
      throw EvalError('Can\'t happen');
    }, !1);
  v2.eval = !0, this.setProperty(v98, 'eval', v2, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'parseInt', this.createNativeFunction(parseInt, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'parseFloat', this.createNativeFunction(parseFloat, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'isNaN', this.createNativeFunction(isNaN, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'isFinite', this.createNativeFunction(isFinite, !1), v140.NONENUMERABLE_DESCRIPTOR);
  for (var v3 = [
      [
        escape,
        'escape'
      ],
      [
        unescape,
        'unescape'
      ],
      [
        decodeURI,
        'decodeURI'
      ],
      [
        decodeURIComponent,
        'decodeURIComponent'
      ],
      [
        encodeURI,
        'encodeURI'
      ],
      [
        encodeURIComponent,
        'encodeURIComponent'
      ]
    ], v4 = 0; v4 < v3.length; v4++)
    v0 = function(v98) {
      return function(v0) {
        try {
          return v98(v0);
        } catch (v2) {
          v1.throwException(v1.URI_ERROR, v2.message);
        }
      };
    }(v3[v4][0]), this.setProperty(v98, v3[v4][1], this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR);
  v0 = function v98(v0) {
    return v1.createTask_(!1, arguments);
  }, this.setProperty(v98, 'setTimeout', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return v1.createTask_(!0, arguments);
  }, this.setProperty(v98, 'setInterval', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    v1.deleteTask_(v0);
  }, this.setProperty(v98, 'clearTimeout', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    v1.deleteTask_(v0);
  }, this.setProperty(v98, 'clearInterval', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, v98);
}, v140.prototype.functionCodeNumber_ = 0, v140.prototype.initFunction = function(v98) {
  var v0, v1 = this,
    v2 = /^[A-Za-z_$][\w$]*$/;
  v0 = function v98(v0) {
    if (arguments.length)
      var v3 = String(arguments[arguments.length - 1]);
    else
      var v3 = '';
    var v4 = Array.prototype.slice.call(arguments, 0, -1).join(',').trim();
    if (v4) {
      for (var v5 = v4.split(/\s*,\s*/), v6 = 0; v6 < v5.length; v6++) {
        var v7 = v5[v6];
        v2.test(v7) || v1.throwException(v1.SYNTAX_ERROR, 'Invalid function argument: ' + v7);
      }
      v4 = v5.join(', ');
    }
    try {
      var v8 = v1.parse_('(function(' + v4 + ') {' + v3 + '})', 'function' + v1.functionCodeNumber_++);
    } catch (v9) {
      v1.throwException(v1.SYNTAX_ERROR, 'Invalid code: ' + v9.message);
    }
    1 !== v8.body.length && v1.throwException(v1.SYNTAX_ERROR, 'Invalid code in function body');
    var v10 = v8.body[0].expression;
    return v1.createFunction(v10, v1.globalScope, 'anonymous');
  }, this.FUNCTION = this.createNativeFunction(v0, !0), this.setProperty(v98, 'Function', this.FUNCTION, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, 'prototype', this.FUNCTION_PROTO, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, 'constructor', this.FUNCTION, v140.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, 'length', 0, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = 'Function', v0 = function v98(v0, v2, v3) {
    var v4 = v1.stateStack[v1.stateStack.length - 1];
    v4.func_ = v0, v4.funcThis_ = v2, v4.arguments_ = [], null != v3 && (v3 instanceof v140.Object ? v4.arguments_ = Array.from(v3.properties) : v1.throwException(v1.TYPE_ERROR, 'CreateListFromArrayLike called on non-object')), v4.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'apply', v0), this.polyfills_.push('(function() {', 'var apply_ = Function.prototype.apply;', 'Function.prototype.apply = function apply(thisArg, args) {', 'var a2 = [];', 'for (var i = 0; i < args.length; i++) {', 'a2[i] = args[i];', '}', 'return apply_(this, thisArg, a2);', '};', '})();'), v0 = function v98(v0) {
    var v2 = v1.stateStack[v1.stateStack.length - 1];
    v2.func_ = this, v2.funcThis_ = v0, v2.arguments_ = [];
    for (var v3 = 1; v3 < arguments.length; v3++)
      v2.arguments_.push(arguments[v3]);
    v2.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'call', v0), this.polyfills_.push('Object.defineProperty(Function.prototype, \'bind\',', '{configurable: true, writable: true, value:', 'function bind(oThis) {', 'if (typeof this !== \'function\') {', 'throw TypeError(\'What is trying to be bound is not callable\');', '}', 'var aArgs   = Array.prototype.slice.call(arguments, 1),', 'fToBind = this,', 'fNOP    = function() {},', 'fBound  = function() {', 'return fToBind.apply(this instanceof fNOP', '? this', ': oThis,', 'aArgs.concat(Array.prototype.slice.call(arguments)));', '};', 'if (this.prototype) {', 'fNOP.prototype = this.prototype;', '}', 'fBound.prototype = new fNOP();', 'return fBound;', '}', '});', ''), v0 = function v98() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'toString', v0), this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'valueOf', v0), this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.initObject = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0) {
    if (null == v0)
      return v1.calledWithNew() ? this : v1.createObjectProto(v1.OBJECT_PROTO);
    if (!(v0 instanceof v140.Object)) {
      var v2 = v1.createObjectProto(v1.getPrototype(v0));
      return v2.data = v0, v2;
    }
    return v0;
  }, this.OBJECT = this.createNativeFunction(v0, !0), this.setProperty(this.OBJECT, 'prototype', this.OBJECT_PROTO, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, 'constructor', this.OBJECT, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'Object', this.OBJECT, v140.NONENUMERABLE_DESCRIPTOR);
  var v2 = function(v98) {
    null == v98 && v1.throwException(v1.TYPE_ERROR, 'Cannot convert \'' + v98 + '\' to object');
  };
  v0 = function v98(v0) {
    v2(v0);
    var v3 = v0 instanceof v140.Object ? v0.properties : v0;
    return v1.nativeToPseudo(Object.getOwnPropertyNames(v3));
  }, this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return v2(v0), v0 instanceof v140.Object && (v0 = v0.properties), v1.nativeToPseudo(Object.keys(v0));
  }, this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return null === v0 ? v1.createObjectProto(null) : (v0 instanceof v140.Object || v1.throwException(v1.TYPE_ERROR, 'Object prototype may only be an Object or null, not ' + v0), v1.createObjectProto(v0));
  }, this.setProperty(this.OBJECT, 'create', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var create_ = Object.create;', 'Object.create = function create(proto, props) {', 'var obj = create_(proto);', 'props && Object.defineProperties(obj, props);', 'return obj;', '};', '})();', ''), v0 = function v98(v0, v2, v3) {
    return v2 = String(v2), v0 instanceof v140.Object || v1.throwException(v1.TYPE_ERROR, 'Object.defineProperty called on non-object: ' + v0), v3 instanceof v140.Object || v1.throwException(v1.TYPE_ERROR, 'Property description must be an object'), !v0.preventExtensions || v2 in v0.properties || v1.throwException(v1.TYPE_ERROR, 'Can\'t define property \'' + v2 + '\', object is not extensible'), v1.setProperty(v0, v2, v140.VALUE_IN_DESCRIPTOR, v3.properties), v0;
  }, this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var defineProperty_ = Object.defineProperty;', 'Object.defineProperty = function defineProperty(obj, prop, d1) {', 'var d2 = {};', 'if (\'configurable\' in d1) d2.configurable = d1.configurable;', 'if (\'enumerable\' in d1) d2.enumerable = d1.enumerable;', 'if (\'writable\' in d1) d2.writable = d1.writable;', 'if (\'value\' in d1) d2.value = d1.value;', 'if (\'get\' in d1) d2.get = d1.get;', 'if (\'set\' in d1) d2.set = d1.set;', 'return defineProperty_(obj, prop, d2);', '};', '})();', 'Object.defineProperty(Object, \'defineProperties\',', '{configurable: true, writable: true, value:', 'function defineProperties(obj, props) {', 'var keys = Object.keys(props);', 'for (var i = 0; i < keys.length; i++) {', 'Object.defineProperty(obj, keys[i], props[keys[i]]);', '}', 'return obj;', '}', '});', ''), v0 = function v98(v0, v2) {
    if (v0 instanceof v140.Object || v1.throwException(v1.TYPE_ERROR, 'Object.getOwnPropertyDescriptor called on non-object: ' + v0), (v2 = String(v2)) in v0.properties) {
      var v3 = Object.getOwnPropertyDescriptor(v0.properties, v2),
        v4 = v0.getter[v2],
        v5 = v0.setter[v2],
        v6 = v1.createObjectProto(v1.OBJECT_PROTO);
      return v4 || v5 ? (v1.setProperty(v6, 'get', v4), v1.setProperty(v6, 'set', v5)) : (v1.setProperty(v6, 'value', v3.value), v1.setProperty(v6, 'writable', v3.writable)), v1.setProperty(v6, 'configurable', v3.configurable), v1.setProperty(v6, 'enumerable', v3.enumerable), v6;
    }
  }, this.setProperty(this.OBJECT, 'getOwnPropertyDescriptor', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return v2(v0), v1.getPrototype(v0);
  }, this.setProperty(this.OBJECT, 'getPrototypeOf', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return Boolean(v0) && !v0.preventExtensions;
  }, this.setProperty(this.OBJECT, 'isExtensible', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return v0 instanceof v140.Object && (v0.preventExtensions = !0), v0;
  }, this.setProperty(this.OBJECT, 'preventExtensions', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, 'toString', v140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'toLocaleString', v140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'valueOf', v140.Object.prototype.valueOf), v0 = function v98(v0) {
    return (v2(this), this instanceof v140.Object) ? String(v0) in this.properties : this.hasOwnProperty(v0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'hasOwnProperty', v0), v0 = function v98(v0) {
    return (v2(this), this instanceof v140.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, v0) : this.propertyIsEnumerable(v0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'propertyIsEnumerable', v0), v0 = function v98(v0) {
    for (;;) {
      if (!(v0 = v1.getPrototype(v0)))
        return !1;
      if (v0 === this)
        return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, 'isPrototypeOf', v0);
}, v140.prototype.initArray = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0) {
    if (v1.calledWithNew())
      var v2 = this;
    else
      var v2 = v1.createArray();
    var v3 = arguments[0];
    if (1 === arguments.length && 'number' == typeof v3)
      isNaN(v140.legalArrayLength(v3)) && v1.throwException(v1.RANGE_ERROR, 'Invalid array length: ' + v3), v2.properties.length = v3;
    else {
      for (var v4 = 0; v4 < arguments.length; v4++)
        v2.properties[v4] = arguments[v4];
      v2.properties.length = v4;
    }
    return v2;
  }, this.ARRAY = this.createNativeFunction(v0, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(v98, 'Array', this.ARRAY, v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    return v0 && 'Array' === v0.class;
  }, this.setProperty(this.ARRAY, 'isArray', this.createNativeFunction(v0, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = 'Array', this.polyfills_.push('(function() {', 'function createArrayMethod_(name, func) {', 'Object.defineProperty(func, \'name\', {value: name});', 'Object.defineProperty(Array.prototype, name,', '{configurable: true, writable: true, value: func});', '}', 'createArrayMethod_(\'pop\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'len--;', 'var x = o[len];', 'delete o[len];', 'o.length = len;', 'return x;', '}', ');', 'createArrayMethod_(\'push\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'for (var i = 0; i < arguments.length; i++) {', 'o[len] = arguments[i];', 'len++;', '}', 'o.length = len;', 'return len;', '}', ');', 'createArrayMethod_(\'shift\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'var value = o[0];', 'for (var i = 0; i < len - 1; i++) {', 'if ((i + 1) in o) {', 'o[i] = o[i + 1];', '} else {', 'delete o[i];', '}', '}', 'delete o[i];', 'o.length = len - 1;', 'return value;', '}', ');', 'createArrayMethod_(\'unshift\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'len = 0;', '}', 'for (var i = len - 1; i >= 0; i--) {', 'if (i in o) {', 'o[i + arguments.length] = o[i];', '} else {', 'delete o[i + arguments.length];', '}', '}', 'for (var i = 0; i < arguments.length; i++) {', 'o[i] = arguments[i];', '}', 'return (o.length = len + arguments.length);', '}', ');', 'createArrayMethod_(\'reverse\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 2) {', 'return o;', '}', 'for (var i = 0; i < len / 2 - 0.5; i++) {', 'var x = o[i];', 'var hasX = i in o;', 'if ((len - i - 1) in o) {', 'o[i] = o[len - i - 1];', '} else {', 'delete o[i];', '}', 'if (hasX) {', 'o[len - i - 1] = x;', '} else {', 'delete o[len - i - 1];', '}', '}', 'return o;', '}', ');', 'createArrayMethod_(\'indexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var n = fromIndex | 0;', 'if (!len || n >= len) {', 'return -1;', '}', 'var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);', 'while (i < len) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i++;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'lastIndexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len) {', 'return -1;', '}', 'var n = len - 1;', 'if (arguments.length > 1) {', 'n = fromIndex | 0;', 'if (n) {', 'n = (n > 0 || -1) * Math.floor(Math.abs(n));', '}', '}', 'var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);', 'while (i >= 0) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i--;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'slice\',', 'function(start, end) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'start = (start >= 0) ? start : Math.max(0, len + start);', 'if (typeof end !== \'undefined\') {', 'if (end !== Infinity) {', 'end |= 0;', '}', 'if (end < 0) {', 'end = len + end;', '} else {', 'end = Math.min(end, len);', '}', '} else {', 'end = len;', '}', 'var size = end - start;', 'var cloned = new Array(size);', 'for (var i = 0; i < size; i++) {', 'if ((start + i) in o) {', 'cloned[i] = o[start + i];', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'splice\',', 'function(start, deleteCount, var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'if (start < 0) {', 'start = Math.max(len + start, 0);', '} else {', 'start = Math.min(start, len);', '}', 'if (arguments.length < 2) {', 'deleteCount = len - start;', '} else {', 'deleteCount |= 0;', 'deleteCount = Math.max(0, Math.min(deleteCount, len - start));', '}', 'var removed = [];', 'for (var i = start; i < start + deleteCount; i++) {', 'if (i in o) {', 'removed.push(o[i]);', '} else {', 'removed.length++;', '}', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = start + deleteCount; i < len - deleteCount; i++) {', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = len - deleteCount; i < len; i++) {', 'delete o[i];', '}', 'len -= deleteCount;', 'if (arguments.length > 2) {', 'var arl = arguments.length - 2;', 'for (var i = len - 1; i >= start; i--) {', 'if (i in o) {', 'o[i + arl] = o[i];', '} else {', 'delete o[i + arl];', '}', '}', 'len += arl;', 'for (var i = 2; i < arguments.length; i++) {', 'o[start + i - 2] = arguments[i];', '}', '}', 'o.length = len;', 'return removed;', '}', ');', 'createArrayMethod_(\'concat\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this);', 'var cloned = [];', 'for (var i = -1; i < arguments.length; i++) {', 'var value = (i === -1) ? o : arguments[i];', 'if (Array.isArray(value)) {', 'for (var j = 0, l = value.length; j < l; j++) {', 'if (j in value) {', 'cloned.push(value[j]);', '} else {', 'cloned.length++;', '}', '}', '} else {', 'cloned.push(value);', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'join\',', 'function(opt_separator) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var sep = typeof opt_separator === \'undefined\' ?', '\',\' : (\'\' + opt_separator);', 'var str = \'\';', 'for (var i = 0; i < len; i++) {', 'if (i && sep) str += sep;', 'str += (o[i] === null || o[i] === undefined) ? \'\' : o[i];', '}', 'return str;', '}', ');', 'createArrayMethod_(\'every\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o && !callback.call(t, o[k], k, o)) return false;', 'k++;', '}', 'return true;', '}', ');', 'createArrayMethod_(\'filter\',', 'function(callback, var_args) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var res = [];', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o) {', 'var val = o[i];', 'if (callback.call(thisArg, val, i, o)) res.push(val);', '}', '}', 'return res;', '}', ');', 'createArrayMethod_(\'forEach\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o) callback.call(t, o[k], k, o);', 'k++;', '}', '}', ');', 'createArrayMethod_(\'map\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'var a = new Array(len);', 'while (k < len) {', 'if (k in o) a[k] = callback.call(t, o[k], k, o);', 'k++;', '}', 'return a;', '}', ');', 'createArrayMethod_(\'reduce\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = 0, value;', 'if (arguments.length === 2) {', 'value = arguments[1];', '} else {', 'while (k < len && !(k in o)) k++;', 'if (k >= len) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k++];', '}', 'for (; k < len; k++) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'reduceRight\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = len - 1, value;', 'if (arguments.length >= 2) {', 'value = arguments[1];', '} else {', 'while (k >= 0 && !(k in o)) k--;', 'if (k < 0) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k--];', '}', 'for (; k >= 0; k--) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'some\',', 'function(callback /*, thisArg*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o && callback.call(thisArg, o[i], i, o)) return true;', '}', 'return false;', '}', ');', 'createArrayMethod_(\'sort\',', 'function(opt_comp) {', 'if (!this) throw TypeError();', 'if (typeof opt_comp !== \'function\') {', 'opt_comp = undefined;', '}', 'for (var i = 0; i < this.length; i++) {', 'var changes = 0;', 'for (var j = 0; j < this.length - i - 1; j++) {', 'if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :', '(String(this[j]) > String(this[j + 1]))) {', 'var swap = this[j];', 'var hasSwap = j in this;', 'if ((j + 1) in this) {', 'this[j] = this[j + 1];', '} else {', 'delete this[j];', '}', 'if (hasSwap) {', 'this[j + 1] = swap;', '} else {', 'delete this[j + 1];', '}', 'changes++;', '}', '}', 'if (!changes) break;', '}', 'return this;', '}', ');', 'createArrayMethod_(\'toLocaleString\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var out = [];', 'for (var i = 0; i < len; i++) {', 'out[i] = (o[i] === null || o[i] === undefined) ? \'\' : o[i].toLocaleString();', '}', 'return out.join(\',\');', '}', ');', '})();', '');
}, v140.prototype.initString = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0) {
    return (v0 = arguments.length ? v140.nativeGlobal.String(v0) : '', v1.calledWithNew()) ? (this.data = v0, this) : v0;
  }, this.STRING = this.createNativeFunction(v0, !0), this.setProperty(v98, 'String', this.STRING, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(String.fromCharCode, !1), v140.NONENUMERABLE_DESCRIPTOR);
  for (var v2 = [
      'charAt',
      'charCodeAt',
      'concat',
      'indexOf',
      'lastIndexOf',
      'slice',
      'substr',
      'substring',
      'toLocaleLowerCase',
      'toLocaleUpperCase',
      'toLowerCase',
      'toUpperCase',
      'trim'
    ], v3 = 0; v3 < v2.length; v3++)
    this.setNativeFunctionPrototype(this.STRING, v2[v3], String.prototype[v2[v3]]);
  v0 = function v98(v0, v2, v3) {
    v2 = v1.pseudoToNative(v2), v3 = v1.pseudoToNative(v3);
    try {
      return String(this).localeCompare(v0, v2, v3);
    } catch (v4) {
      v1.throwException(v1.ERROR, 'localeCompare: ' + v4.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, 'localeCompare', v0), v0 = function v98(v0, v2, v3) {
    var v4 = String(this);
    if (v2 = v2 ? Number(v2) : void 0, v1.isa(v0, v1.REGEXP) && (v0 = v0.data, v1.maybeThrowRegExp(v0, v3), 2 === v1.REGEXP_MODE)) {
      if (v140.vm) {
        var v5 = {
            string: v4,
            separator: v0,
            limit: v2
          },
          v6 = v1.vmCall('string.split(separator, limit)', v5, v0, v3);
        v6 !== v140.REGEXP_TIMEOUT && v3(v1.nativeToPseudo(v6));
      } else {
        var v7 = v1.createWorker(),
          v8 = v1.regExpTimeout(v0, v7, v3);
        v7.onmessage = function(v98) {
          clearTimeout(v8), v3(v1.nativeToPseudo(v98.data));
        }, v7.postMessage([
          'split',
          v4,
          v0,
          v2
        ]);
      }
      return;
    }
    var v6 = v4.split(v0, v2);
    v3(v1.nativeToPseudo(v6));
  }, this.setAsyncFunctionPrototype(this.STRING, 'split', v0), v0 = function v98(v0, v2) {
    var v3 = String(this);
    if (v0 = v1.isa(v0, v1.REGEXP) ? v0.data : RegExp(v0), v1.maybeThrowRegExp(v0, v2), 2 === v1.REGEXP_MODE) {
      if (v140.vm) {
        var v4 = {
            string: v3,
            regexp: v0
          },
          v5 = v1.vmCall('string.match(regexp)', v4, v0, v2);
        v5 !== v140.REGEXP_TIMEOUT && v2(v5 && v1.matchToPseudo_(v5));
      } else {
        var v6 = v1.createWorker(),
          v7 = v1.regExpTimeout(v0, v6, v2);
        v6.onmessage = function(v98) {
          clearTimeout(v7), v2(v98.data && v1.matchToPseudo_(v98.data));
        }, v6.postMessage([
          'match',
          v3,
          v0
        ]);
      }
      return;
    }
    var v5 = v3.match(v0);
    v2(v5 && v1.matchToPseudo_(v5));
  }, this.setAsyncFunctionPrototype(this.STRING, 'match', v0), v0 = function v98(v0, v2) {
    var v3 = String(this);
    if (v0 = v1.isa(v0, v1.REGEXP) ? v0.data : RegExp(v0), v1.maybeThrowRegExp(v0, v2), 2 === v1.REGEXP_MODE) {
      if (v140.vm) {
        var v4 = {
            string: v3,
            regexp: v0
          },
          v5 = v1.vmCall('string.search(regexp)', v4, v0, v2);
        v5 !== v140.REGEXP_TIMEOUT && v2(v5);
      } else {
        var v6 = v1.createWorker(),
          v7 = v1.regExpTimeout(v0, v6, v2);
        v6.onmessage = function(v98) {
          clearTimeout(v7), v2(v98.data);
        }, v6.postMessage([
          'search',
          v3,
          v0
        ]);
      }
      return;
    }
    v2(v3.search(v0));
  }, this.setAsyncFunctionPrototype(this.STRING, 'search', v0), v0 = function v98(v0, v2, v3) {
    var v4 = String(this);
    if (v2 = String(v2), v1.isa(v0, v1.REGEXP) && (v0 = v0.data, v1.maybeThrowRegExp(v0, v3), 2 === v1.REGEXP_MODE)) {
      if (v140.vm) {
        var v5 = {
            string: v4,
            substr: v0,
            newSubstr: v2
          },
          v6 = v1.vmCall('string.replace(substr, newSubstr)', v5, v0, v3);
        v6 !== v140.REGEXP_TIMEOUT && v3(v6);
      } else {
        var v7 = v1.createWorker(),
          v8 = v1.regExpTimeout(v0, v7, v3);
        v7.onmessage = function(v98) {
          clearTimeout(v8), v3(v98.data);
        }, v7.postMessage([
          'replace',
          v4,
          v0,
          v2
        ]);
      }
      return;
    }
    v3(v4.replace(v0, v2));
  }, this.setAsyncFunctionPrototype(this.STRING, 'replace', v0), this.polyfills_.push('(function() {', 'var replace_ = String.prototype.replace;', 'String.prototype.replace = function replace(substr, newSubstr) {', 'if (typeof newSubstr !== \'function\') {', 'return replace_.call(this, substr, newSubstr);', '}', 'var str = this;', 'if (substr instanceof RegExp) {', 'var subs = [];', 'var m = substr.exec(str);', 'while (m) {', 'm.push(m.index, str);', 'var inject = newSubstr.apply(null, m);', 'subs.push([m.index, m[0].length, inject]);', 'm = substr.global ? substr.exec(str) : null;', '}', 'for (var i = subs.length - 1; i >= 0; i--) {', 'str = str.substring(0, subs[i][0]) + subs[i][2] + ', 'str.substring(subs[i][0] + subs[i][1]);', '}', '} else {', 'var i = str.indexOf(substr);', 'if (i !== -1) {', 'var inject = newSubstr(str.substr(i, substr.length), i, str);', 'str = str.substring(0, i) + inject + ', 'str.substring(i + substr.length);', '}', '}', 'return str;', '};', '})();', '');
}, v140.prototype.initBoolean = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0) {
    return (v0 = v140.nativeGlobal.Boolean(v0), v1.calledWithNew()) ? (this.data = v0, this) : v0;
  }, this.BOOLEAN = this.createNativeFunction(v0, !0), this.setProperty(v98, 'Boolean', this.BOOLEAN, v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.initNumber = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0) {
    return (v0 = arguments.length ? v140.nativeGlobal.Number(v0) : 0, v1.calledWithNew()) ? (this.data = v0, this) : v0;
  }, this.NUMBER = this.createNativeFunction(v0, !0), this.setProperty(v98, 'Number', this.NUMBER, v140.NONENUMERABLE_DESCRIPTOR);
  for (var v2 = [
      'MAX_VALUE',
      'MIN_VALUE',
      'NaN',
      'NEGATIVE_INFINITY',
      'POSITIVE_INFINITY'
    ], v3 = 0; v3 < v2.length; v3++)
    this.setProperty(this.NUMBER, v2[v3], Number[v2[v3]], v140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  v0 = function v98(v0) {
    try {
      return Number(this).toExponential(v0);
    } catch (v2) {
      v1.throwException(v1.ERROR, v2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toExponential', v0), v0 = function v98(v0) {
    try {
      return Number(this).toFixed(v0);
    } catch (v2) {
      v1.throwException(v1.ERROR, v2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toFixed', v0), v0 = function v98(v0) {
    try {
      return Number(this).toPrecision(v0);
    } catch (v2) {
      v1.throwException(v1.ERROR, v2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toPrecision', v0), v0 = function v98(v0) {
    try {
      return Number(this).toString(v0);
    } catch (v2) {
      v1.throwException(v1.ERROR, v2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toString', v0), v0 = function v98(v0, v2) {
    v0 = v0 ? v1.pseudoToNative(v0) : void 0, v2 = v2 ? v1.pseudoToNative(v2) : void 0;
    try {
      return Number(this).toLocaleString(v0, v2);
    } catch (v3) {
      v1.throwException(v1.ERROR, 'toLocaleString: ' + v3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toLocaleString', v0);
}, v140.prototype.initDate = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0, v2) {
    if (!v1.calledWithNew())
      return v140.nativeGlobal.Date();
    var v3 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(v140.nativeGlobal.Date, v3))(), this;
  }, this.DATE = this.createNativeFunction(v0, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(v98, 'Date', this.DATE, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'now', this.createNativeFunction(Date.now, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'parse', this.createNativeFunction(Date.parse, !1), v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'UTC', this.createNativeFunction(Date.UTC, !1), v140.NONENUMERABLE_DESCRIPTOR);
  for (var v2 = [
      'getDate',
      'getDay',
      'getFullYear',
      'getHours',
      'getMilliseconds',
      'getMinutes',
      'getMonth',
      'getSeconds',
      'getTime',
      'getTimezoneOffset',
      'getUTCDate',
      'getUTCDay',
      'getUTCFullYear',
      'getUTCHours',
      'getUTCMilliseconds',
      'getUTCMinutes',
      'getUTCMonth',
      'getUTCSeconds',
      'getYear',
      'setDate',
      'setFullYear',
      'setHours',
      'setMilliseconds',
      'setMinutes',
      'setMonth',
      'setSeconds',
      'setTime',
      'setUTCDate',
      'setUTCFullYear',
      'setUTCHours',
      'setUTCMilliseconds',
      'setUTCMinutes',
      'setUTCMonth',
      'setUTCSeconds',
      'setYear',
      'toDateString',
      'toJSON',
      'toGMTString',
      'toLocaleDateString',
      'toLocaleString',
      'toLocaleTimeString',
      'toTimeString',
      'toUTCString'
    ], v3 = 0; v3 < v2.length; v3++)
    v0 = function(v98) {
      return function(v0) {
        var v2 = this.data;
        v2 instanceof Date || v1.throwException(v1.TYPE_ERROR, v98 + ' not called on a Date');
        for (var v3 = [], v4 = 0; v4 < arguments.length; v4++)
          v3[v4] = v1.pseudoToNative(arguments[v4]);
        return v2[v98].apply(v2, v3);
      };
    }(v2[v3]), this.setNativeFunctionPrototype(this.DATE, v2[v3], v0);
  v0 = function v98() {
    try {
      return this.data.toISOString();
    } catch (v0) {
      v1.throwException(v1.RANGE_ERROR, 'toISOString: ' + v0.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, 'toISOString', v0);
}, v140.prototype.initRegExp = function(v98) {
  var v0, v1 = this;
  v0 = function v98(v0, v2) {
    if (v1.calledWithNew())
      var v3 = this;
    else {
      if (void 0 === v2 && v1.isa(v0, v1.REGEXP))
        return v0;
      var v3 = v1.createObjectProto(v1.REGEXP_PROTO);
    }
    v0 = void 0 === v0 ? '' : String(v0), v2 = v2 ? String(v2) : '', /^[gmi]*$/.test(v2) || v1.throwException(v1.SYNTAX_ERROR, 'Invalid regexp flag: ' + v2);
    try {
      var v4 = new v140.nativeGlobal.RegExp(v0, v2);
    } catch (v5) {
      v1.throwException(v1.SYNTAX_ERROR, v5.message);
    }
    return v1.populateRegExp(v3, v4), v3;
  }, this.REGEXP = this.createNativeFunction(v0, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(v98, 'RegExp', this.REGEXP, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'global', void 0, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'ignoreCase', void 0, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'multiline', void 0, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'source', '(?:)', v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('Object.defineProperty(RegExp.prototype, \'test\',', '{configurable: true, writable: true, value:', 'function test(str) {', 'return !!this.exec(str);', '}', '});'), v0 = function v98(v0, v2) {
    var v3 = this.data;
    if (v0 = String(v0), v3.lastIndex = Number(v1.getProperty(this, 'lastIndex')), v1.maybeThrowRegExp(v3, v2), 2 === v1.REGEXP_MODE) {
      if (v140.vm) {
        var v4 = {
            string: v0,
            regexp: v3
          },
          v5 = v1.vmCall('regexp.exec(string)', v4, v3, v2);
        v5 !== v140.REGEXP_TIMEOUT && (v1.setProperty(this, 'lastIndex', v3.lastIndex), v2(v1.matchToPseudo_(v5)));
      } else {
        var v6 = v1.createWorker(),
          v7 = v1.regExpTimeout(v3, v6, v2),
          v8 = this;
        v6.onmessage = function(v98) {
          clearTimeout(v7), v1.setProperty(v8, 'lastIndex', v98.data[1]), v2(v1.matchToPseudo_(v98.data[0]));
        }, v6.postMessage([
          'exec',
          v3,
          v3.lastIndex,
          v0
        ]);
      }
      return;
    }
    var v5 = v3.exec(v0);
    v1.setProperty(this, 'lastIndex', v3.lastIndex), v2(v1.matchToPseudo_(v5));
  }, this.setAsyncFunctionPrototype(this.REGEXP, 'exec', v0);
}, v140.prototype.matchToPseudo_ = function(v98) {
  if (v98) {
    for (var v0 = Object.getOwnPropertyNames(v98), v1 = 0; v1 < v0.length; v1++) {
      var v2 = v0[v1];
      isNaN(Number(v2)) && 'length' !== v2 && 'input' !== v2 && 'index' !== v2 && delete v98[v2];
    }
    return this.nativeToPseudo(v98);
  }
  return null;
}, v140.prototype.initError = function(v98) {
  var v0 = this;
  this.ERROR = this.createNativeFunction(function v98(v1) {
    if (v0.calledWithNew())
      var v2 = this;
    else
      var v2 = v0.createObject(v0.ERROR);
    return v0.populateError(v2, v1), v2;
  }, !0), this.setProperty(v98, 'Error', this.ERROR, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'message', '', v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'name', 'Error', v140.NONENUMERABLE_DESCRIPTOR);
  var v1 = function(v1) {
    var v2 = v0.createNativeFunction(function(v98) {
      if (v0.calledWithNew())
        var v1 = this;
      else
        var v1 = v0.createObject(v2);
      return v0.populateError(v1, v98), v1;
    }, !0);
    return v0.setProperty(v2, 'prototype', v0.createObject(v0.ERROR), v140.NONENUMERABLE_DESCRIPTOR), v0.setProperty(v2.properties.prototype, 'name', v1, v140.NONENUMERABLE_DESCRIPTOR), v0.setProperty(v98, v1, v2, v140.NONENUMERABLE_DESCRIPTOR), v2;
  };
  this.EVAL_ERROR = v1('EvalError'), this.RANGE_ERROR = v1('RangeError'), this.REFERENCE_ERROR = v1('ReferenceError'), this.SYNTAX_ERROR = v1('SyntaxError'), this.TYPE_ERROR = v1('TypeError'), this.URI_ERROR = v1('URIError');
}, v140.prototype.initMath = function(v98) {
  var v0 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(v98, 'Math', v0, v140.NONENUMERABLE_DESCRIPTOR);
  for (var v1 = [
      'E',
      'LN2',
      'LN10',
      'LOG2E',
      'LOG10E',
      'PI',
      'SQRT1_2',
      'SQRT2'
    ], v2 = 0; v2 < v1.length; v2++)
    this.setProperty(v0, v1[v2], Math[v1[v2]], v140.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var v3 = [
      'abs',
      'acos',
      'asin',
      'atan',
      'atan2',
      'ceil',
      'cos',
      'exp',
      'floor',
      'log',
      'max',
      'min',
      'pow',
      'random',
      'round',
      'sin',
      'sqrt',
      'tan'
    ], v2 = 0; v2 < v3.length; v2++)
    this.setProperty(v0, v3[v2], this.createNativeFunction(Math[v3[v2]], !1), v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.initJSON = function(v98) {
  var v0, v1 = this,
    v2 = v1.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(v98, 'JSON', v2, v140.NONENUMERABLE_DESCRIPTOR), v0 = function v98(v0) {
    try {
      var v2 = JSON.parse(String(v0));
    } catch (v3) {
      v1.throwException(v1.SYNTAX_ERROR, v3.message);
    }
    return v1.nativeToPseudo(v2);
  }, this.setProperty(v2, 'parse', this.createNativeFunction(v0, !1)), v0 = function v98(v0, v2, v3) {
    v2 && 'Function' === v2.class ? v1.throwException(v1.TYPE_ERROR, 'Function replacer on JSON.stringify not supported') : v2 = v2 && 'Array' === v2.class ? (v2 = v1.pseudoToNative(v2)).filter(function(v98) {
      return 'string' == typeof v98 || 'number' == typeof v98;
    }) : null, 'string' != typeof v3 && 'number' != typeof v3 && (v3 = void 0);
    var v4 = v1.pseudoToNative(v0);
    try {
      var v5 = JSON.stringify(v4, v2, v3);
    } catch (v6) {
      v1.throwException(v1.TYPE_ERROR, v6.message);
    }
    return v5;
  }, this.setProperty(v2, 'stringify', this.createNativeFunction(v0, !1));
}, v140.prototype.isa = function(v98, v0) {
  if (null == v98 || !v0)
    return !1;
  var v1 = v0.properties.prototype;
  if (v98 === v1)
    return !0;
  for (v98 = this.getPrototype(v98); v98;) {
    if (v98 === v1)
      return !0;
    v98 = v98.proto;
  }
  return !1;
}, v140.prototype.populateRegExp = function(v98, v0) {
  v98.data = RegExp(v0.source, v0.flags), this.setProperty(v98, 'lastIndex', v0.lastIndex, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'source', v0.source, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'global', v0.global, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'ignoreCase', v0.ignoreCase, v140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(v98, 'multiline', v0.multiline, v140.READONLY_NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.populateError = function(v98, v0) {
  v0 && this.setProperty(v98, 'message', String(v0), v140.NONENUMERABLE_DESCRIPTOR);
  for (var v1 = [], v2 = this.stateStack.length - 1; v2 >= 0; v2--) {
    var v3 = this.stateStack[v2],
      v4 = v3.node;
    if ('CallExpression' === v4.type) {
      var v5 = v3.func_;
      v5 && v1.length && (v1[v1.length - 1].datumName = this.getProperty(v5, 'name'));
    }
    v4.loc && (!v1.length || 'CallExpression' === v4.type) && v1.push({
      datumLoc: v4.loc
    });
  }
  for (var v6 = String(this.getProperty(v98, 'name')), v7 = String(this.getProperty(v98, 'message')), v8 = v6 + ': ' + v7 + '\n', v2 = 0; v2 < v1.length; v2++) {
    var v9 = v1[v2].datumLoc,
      v10 = v1[v2].datumName,
      v11 = v9.source + ':' + v9.start.line + ':' + v9.start.column;
    v10 ? v8 += '  at ' + v10 + ' (' + v11 + ')\n' : v8 += '  at ' + v11 + '\n';
  }
  this.setProperty(v98, 'stack', v8.trim(), v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.createWorker = function() {
  var v98 = this.createWorker.blob_;
  return v98 || (v98 = new Blob([v140.WORKER_CODE.join('\n')], {
    type: 'application/javascript'
  }), this.createWorker.blob_ = v98), new Worker(URL.createObjectURL(v98));
}, v140.prototype.vmCall = function(v98, v0, v1, v2) {
  var v3 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return v140.vm.runInNewContext(v98, v0, v3);
  } catch (v4) {
    v2(null), this.throwException(this.ERROR, 'RegExp Timeout: ' + v1);
  }
  return v140.REGEXP_TIMEOUT;
}, v140.prototype.maybeThrowRegExp = function(v98, v0) {
  var v1;
  if (0 === this.REGEXP_MODE)
    v1 = !1;
  else if (1 === this.REGEXP_MODE)
    v1 = !0;
  else if (v140.vm)
    v1 = !0;
  else if ('function' == typeof Worker && 'function' == typeof URL)
    v1 = !0;
  else if ('function' == typeof require) {
    try {
      v140.vm = require('vm');
    } catch (v2) {}
    v1 = !!v140.vm;
  } else
    v1 = !1;
  v1 || (v0(null), this.throwException(this.ERROR, 'Regular expressions not supported: ' + v98));
}, v140.prototype.regExpTimeout = function(v98, v0, v1) {
  var v2 = this;
  return setTimeout(function() {
    v0.terminate(), v1(null);
    try {
      v2.throwException(v2.ERROR, 'RegExp Timeout: ' + v98);
    } catch (v3) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, v140.prototype.createObject = function(v98) {
  return this.createObjectProto(v98 && v98.properties.prototype);
}, v140.prototype.createObjectProto = function(v98) {
  if ('object' != typeof v98)
    throw Error('Non object prototype');
  var v0 = new v140.Object(v98);
  return this.isa(v0, this.ERROR) && (v0.class = 'Error'), v0;
}, v140.prototype.createArray = function() {
  var v98 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(v98, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), v98.class = 'Array', v98;
}, v140.prototype.createFunctionBase_ = function(v98, v0) {
  var v1 = this.createObjectProto(this.FUNCTION_PROTO);
  if (v0) {
    var v2 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(v1, 'prototype', v2, v140.NONENUMERABLE_DESCRIPTOR), this.setProperty(v2, 'constructor', v1, v140.NONENUMERABLE_DESCRIPTOR);
  } else
    v1.illegalConstructor = !0;
  return this.setProperty(v1, 'length', v98, v140.READONLY_NONENUMERABLE_DESCRIPTOR), v1.class = 'Function', v1;
}, v140.prototype.createFunction = function(v98, v0, v1) {
  var v2 = this.createFunctionBase_(v98.params.length, !0);
  v2.parentScope = v0, v2.node = v98;
  var v3 = v98.id ? String(v98.id.name) : v1 || '';
  return this.setProperty(v2, 'name', v3, v140.READONLY_NONENUMERABLE_DESCRIPTOR), v2;
}, v140.prototype.createNativeFunction = function(v98, v0) {
  var v1 = this.createFunctionBase_(v98.length, v0);
  return v1.nativeFunc = v98, v98.id = this.functionCounter_++, this.setProperty(v1, 'name', v98.name, v140.READONLY_NONENUMERABLE_DESCRIPTOR), v1;
}, v140.prototype.createAsyncFunction = function(v98) {
  var v0 = this.createFunctionBase_(v98.length, !0);
  return v0.asyncFunc = v98, v98.id = this.functionCounter_++, this.setProperty(v0, 'name', v98.name, v140.READONLY_NONENUMERABLE_DESCRIPTOR), v0;
}, v140.prototype.nativeToPseudo = function(v98, v0) {
  if (null == v98 || !0 === v98 || !1 === v98 || 'string' == typeof v98 || 'number' == typeof v98)
    return v98;
  if (v98 instanceof v140.Object)
    throw Error('Object is already pseudo');
  var v1, v2, v3 = v0 || {
      pseudo: [],
      native: []
    },
    v4 = v3.native.indexOf(v98);
  if (-1 !== v4)
    return v3.pseudo[v4];
  if (v3.native.push(v98), v98 instanceof RegExp) {
    var v5 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(v5, v98), v3.pseudo.push(v5), v5;
  }
  if (v98 instanceof Date) {
    var v6 = this.createObjectProto(this.DATE_PROTO);
    return v6.data = new Date(v98.valueOf()), v3.pseudo.push(v6), v6;
  }
  if (v98 instanceof Number ? v1 = this.createObject(this.NUMBER) : v98 instanceof String ? v1 = this.createObject(this.STRING) : v98 instanceof Boolean && (v1 = this.createObject(this.BOOLEAN)), v1)
    return v1.data = v98.valueOf(), v3.pseudo.push(v1), v1;
  if ('function' == typeof v98) {
    var v7 = this,
      v8 = function() {
        var v0 = Array.prototype.slice.call(arguments).map(function(v98) {
            return v7.pseudoToNative(v98);
          }),
          v1 = v98.apply(v7, v0);
        return v7.nativeToPseudo(v1);
      },
      v9 = Object.getOwnPropertyDescriptor(v98, 'prototype'),
      v10 = this.createNativeFunction(v8, !!v9);
    return v3.pseudo.push(v10), v10;
  }
  for (var v11 in (v2 = Array.isArray(v98) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), v3.pseudo.push(v2), v98))
    this.setProperty(v2, v11, this.nativeToPseudo(v98[v11], v3));
  return v2;
}, v140.prototype.pseudoToNative = function(v98, v0) {
  if (null == v98 || !0 === v98 || !1 === v98 || 'string' == typeof v98 || 'number' == typeof v98)
    return v98;
  if (!(v98 instanceof v140.Object))
    throw Error('Object is not pseudo');
  var v1, v2 = v0 || {
      pseudo: [],
      native: []
    },
    v3 = v2.pseudo.indexOf(v98);
  if (-1 !== v3)
    return v2.native[v3];
  if (v2.pseudo.push(v98), this.isa(v98, this.REGEXP)) {
    var v4 = RegExp(v98.data.source, v98.data.flags);
    return v4.lastIndex = v98.data.lastIndex, v2.native.push(v4), v4;
  }
  if (this.isa(v98, this.DATE)) {
    var v5 = new Date(v98.data.valueOf());
    return v2.native.push(v5), v5;
  }
  if (this.isa(v98, this.NUMBER) || this.isa(v98, this.STRING) || this.isa(v98, this.BOOLEAN)) {
    var v6 = Object(v98.data);
    return v2.native.push(v6), v6;
  }
  var v7 = this.isa(v98, this.ARRAY) ? [] : {};
  for (var v8 in (v2.native.push(v7), v98.properties))
    v1 = this.pseudoToNative(v98.properties[v8], v2), Object.defineProperty(v7, v8, {
      value: v1,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return v7;
}, v140.prototype.getPrototype = function(v98) {
  switch (typeof v98) {
    case 'number':
      return this.NUMBER.properties.prototype;
    case 'boolean':
      return this.BOOLEAN.properties.prototype;
    case 'string':
      return this.STRING.properties.prototype;
  }
  return v98 ? v98.proto : null;
}, v140.prototype.getProperty = function(v98, v0) {
  if (this.getterStep_)
    throw Error('Getter not supported in that context');
  if (v0 = String(v0), null == v98 && this.throwException(this.TYPE_ERROR, 'Cannot read property \'' + v0 + '\' of ' + v98), 'object' == typeof v98 && !(v98 instanceof v140.Object))
    throw TypeError('Expecting native value or pseudo object');
  if ('length' === v0) {
    if (this.isa(v98, this.STRING))
      return String(v98).length;
  } else if (64 > v0.charCodeAt(0) && this.isa(v98, this.STRING)) {
    var v1 = v140.legalArrayIndex(v0);
    if (!isNaN(v1) && v1 < String(v98).length)
      return String(v98)[v1];
  }
  do
    if (v98.properties && v0 in v98.properties) {
      var v2 = v98.getter[v0];
      if (v2)
        return this.getterStep_ = !0, v2;
      return v98.properties[v0];
    }
  while (v98 = this.getPrototype(v98));
}, v140.prototype.hasProperty = function(v98, v0) {
  if (!(v98 instanceof v140.Object))
    throw TypeError('Primitive data type has no properties');
  if ('length' === (v0 = String(v0)) && this.isa(v98, this.STRING))
    return !0;
  if (this.isa(v98, this.STRING)) {
    var v1 = v140.legalArrayIndex(v0);
    if (!isNaN(v1) && v1 < String(v98).length)
      return !0;
  }
  do
    if (v98.properties && v0 in v98.properties)
      return !0;
  while (v98 = this.getPrototype(v98));
  return !1;
}, v140.prototype.setProperty = function(v98, v0, v1, v2) {
  if (this.setterStep_)
    throw Error('Setter not supported in that context');
  if (v0 = String(v0), null == v98 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + v0 + '\' of ' + v98), 'object' == typeof v98 && !(v98 instanceof v140.Object))
    throw TypeError('Expecting native value or pseudo object');
  v2 && ('get' in v2 || 'set' in v2) && ('value' in v2 || 'writable' in v2) && this.throwException(this.TYPE_ERROR, 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  var v3 = !this.stateStack || this.getScope().strict;
  if (!(v98 instanceof v140.Object)) {
    v3 && this.throwException(this.TYPE_ERROR, 'Can\'t create property \'' + v0 + '\' on \'' + v98 + '\'');
    return;
  }
  if (this.isa(v98, this.STRING)) {
    var v4 = v140.legalArrayIndex(v0);
    if ('length' === v0 || !isNaN(v4) && v4 < String(v98).length) {
      v3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + v0 + '\' of String \'' + v98.data + '\'');
      return;
    }
  }
  if ('Array' === v98.class) {
    var v5, v6 = v98.properties.length;
    if ('length' === v0) {
      if (v2) {
        if (!('value' in v2))
          return;
        v1 = v2.value;
      }
      if (isNaN(v1 = v140.legalArrayLength(v1)) && this.throwException(this.RANGE_ERROR, 'Invalid array length'), v1 < v6)
        for (v5 in v98.properties)
          !isNaN(v5 = v140.legalArrayIndex(v5)) && v1 <= v5 && delete v98.properties[v5];
    } else
      isNaN(v5 = v140.legalArrayIndex(v0)) || (v98.properties.length = Math.max(v6, v5 + 1));
  }
  if (v98.preventExtensions && !(v0 in v98.properties)) {
    v3 && this.throwException(this.TYPE_ERROR, 'Can\'t add property \'' + v0 + '\', object is not extensible');
    return;
  }
  if (v2) {
    var v7 = {};
    'get' in v2 && v2.get && (v98.getter[v0] = v2.get, v7.get = this.setProperty.placeholderGet_), 'set' in v2 && v2.set && (v98.setter[v0] = v2.set, v7.set = this.setProperty.placeholderSet_), 'configurable' in v2 && (v7.configurable = v2.configurable), 'enumerable' in v2 && (v7.enumerable = v2.enumerable), 'writable' in v2 && (v7.writable = v2.writable, delete v98.getter[v0], delete v98.setter[v0]), 'value' in v2 ? (v7.value = v2.value, delete v98.getter[v0], delete v98.setter[v0]) : v1 !== v140.VALUE_IN_DESCRIPTOR && (v7.value = v1, delete v98.getter[v0], delete v98.setter[v0]);
    try {
      Object.defineProperty(v98.properties, v0, v7);
    } catch (v8) {
      this.throwException(this.TYPE_ERROR, 'Cannot redefine property: ' + v0);
    }
    'get' in v2 && !v2.get && delete v98.getter[v0], 'set' in v2 && !v2.set && delete v98.setter[v0];
  } else {
    if (v1 === v140.VALUE_IN_DESCRIPTOR)
      throw ReferenceError('Value not specified');
    for (var v9 = v98; !(v0 in v9.properties);)
      if (!(v9 = this.getPrototype(v9))) {
        v9 = v98;
        break;
      }
    if (v9.setter && v9.setter[v0])
      return this.setterStep_ = !0, v9.setter[v0];
    if (v9.getter && v9.getter[v0])
      v3 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + v0 + '\' of object \'' + v98 + '\' which only has a getter');
    else
      try {
        v98.properties[v0] = v1;
      } catch (v10) {
        v3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + v0 + '\' of object \'' + v98 + '\'');
      }
  }
}, v140.prototype.setProperty.placeholderGet_ = function() {
  throw Error('Placeholder getter');
}, v140.prototype.setProperty.placeholderSet_ = function() {
  throw Error('Placeholder setter');
}, v140.prototype.setNativeFunctionPrototype = function(v98, v0, v1) {
  this.setProperty(v98.properties.prototype, v0, this.createNativeFunction(v1, !1), v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.setAsyncFunctionPrototype = function(v98, v0, v1) {
  this.setProperty(v98.properties.prototype, v0, this.createAsyncFunction(v1), v140.NONENUMERABLE_DESCRIPTOR);
}, v140.prototype.getScope = function() {
  var v98 = this.stateStack[this.stateStack.length - 1].scope;
  if (!v98)
    throw Error('No scope found');
  return v98;
}, v140.prototype.createScope = function(v98, v0) {
  var v1 = !1;
  if (v0 && v0.strict)
    v1 = !0;
  else {
    var v2 = v98.body && v98.body[0];
    v2 && v2.expression && 'Literal' === v2.expression.type && 'use strict' === v2.expression.value && (v1 = !0);
  }
  var v3 = this.createObjectProto(null),
    v4 = new v140.Scope(v0, v1, v3);
  return v0 || this.initGlobal(v4.object), this.populateScope_(v98, v4), v4;
}, v140.prototype.createSpecialScope = function(v98, v0) {
  if (!v98)
    throw Error('parentScope required');
  var v1 = v0 || this.createObjectProto(null);
  return new v140.Scope(v98, v98.strict, v1);
}, v140.prototype.getValueFromScope = function(v98) {
  for (var v0 = this.getScope(); v0 && v0 !== this.globalScope;) {
    if (v98 in v0.object.properties)
      return v0.object.properties[v98];
    v0 = v0.parentScope;
  }
  if (v0 === this.globalScope && this.hasProperty(v0.object, v98))
    return this.getProperty(v0.object, v98);
  var v1 = this.stateStack[this.stateStack.length - 1].node;
  ('UnaryExpression' !== v1.type || 'typeof' !== v1.operator) && this.throwException(this.REFERENCE_ERROR, v98 + ' is not defined');
}, v140.prototype.setValueToScope = function(v98, v0) {
  for (var v1 = this.getScope(), v2 = v1.strict; v1 && v1 !== this.globalScope;) {
    if (v98 in v1.object.properties) {
      try {
        v1.object.properties[v98] = v0;
      } catch (v3) {
        v2 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only variable \'' + v98 + '\'');
      }
      return;
    }
    v1 = v1.parentScope;
  }
  if (v1 === this.globalScope && (!v2 || this.hasProperty(v1.object, v98)))
    return this.setProperty(v1.object, v98, v0);
  this.throwException(this.REFERENCE_ERROR, v98 + ' is not defined');
}, v140.prototype.populateScope_ = function(v98, v0) {
  var v1;
  if (v98.variableCache_)
    v1 = v98.variableCache_;
  else {
    switch (v1 = Object.create(null), v98.type) {
      case 'VariableDeclaration':
        for (var v2 = 0; v2 < v98.declarations.length; v2++)
          v1[v98.declarations[v2].id.name] = !0;
        break;
      case 'FunctionDeclaration':
        v1[v98.id.name] = v98;
        break;
      case 'BlockStatement':
      case 'CatchClause':
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'Program':
      case 'SwitchCase':
      case 'SwitchStatement':
      case 'TryStatement':
      case 'WithStatement':
      case 'WhileStatement':
        var v3 = v98.constructor;
        for (var v4 in v98)
          if (v98[v4] !== v98.loc) {
            var v5, v6 = v98[v4];
            if (v6 && 'object' == typeof v6) {
              if (Array.isArray(v6)) {
                for (var v2 = 0; v2 < v6.length; v2++)
                  if (v6[v2] && v6[v2].constructor === v3)
                    for (var v4 in v5 = this.populateScope_(v6[v2], v0))
                      v1[v4] = v5[v4];
              } else if (v6.constructor === v3)
                for (var v4 in v5 = this.populateScope_(v6, v0))
                  v1[v4] = v5[v4];
            }
          }
    }
    v98.variableCache_ = v1;
  }
  for (var v4 in v1)
    !0 === v1[v4] ? this.setProperty(v0.object, v4, void 0, v140.VARIABLE_DESCRIPTOR) : this.setProperty(v0.object, v4, this.createFunction(v1[v4], v0), v140.VARIABLE_DESCRIPTOR);
  return v1;
}, v140.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, v140.prototype.getValue = function(v98) {
  return v98[0] === v140.SCOPE_REFERENCE ? this.getValueFromScope(v98[1]) : this.getProperty(v98[0], v98[1]);
}, v140.prototype.setValue = function(v98, v0) {
  return v98[0] === v140.SCOPE_REFERENCE ? this.setValueToScope(v98[1], v0) : this.setProperty(v98[0], v98[1], v0);
}, v140.prototype.throwException = function(v98, v0) {
  if (!this.globalScope)
    throw void 0 === v0 ? v98 : v0;
  if (void 0 !== v0 && v98 instanceof v140.Object) {
    var v1 = this.createObject(v98);
    this.populateError(v1, v0);
  } else
    var v1 = v98;
  throw this.unwind(v140.Completion.THROW, v1, void 0), v140.STEP_ERROR;
}, v140.prototype.unwind = function(v98, v0, v1) {
  if (v98 === v140.Completion.NORMAL)
    throw TypeError('Should not unwind for NORMAL completions');
  loop:
    for (var v2, v3 = this.stateStack; v3.length > 0; v3.pop()) {
      var v4 = v3[v3.length - 1];
      switch (v4.node.type) {
        case 'TryStatement':
          v4.cv = {
            type: v98,
            value: v0,
            label: v1
          };
          return;
        case 'CallExpression':
        case 'NewExpression':
          if (v98 === v140.Completion.RETURN) {
            v4.value = v0;
            return;
          }
          if (v98 === v140.Completion.BREAK || v98 === v140.Completion.CONTINUE)
            throw Error('Unsyntactic break/continue not rejected by Acorn');
          break;
        case 'Program':
          if (v98 === v140.Completion.RETURN)
            return;
          v4.done = !0;
          break loop;
      }
      if (v98 === v140.Completion.BREAK) {
        if (v1 ? v4.labels && -1 !== v4.labels.indexOf(v1) : v4.isLoop || v4.isSwitch) {
          v3.pop();
          return;
        }
      } else if (v98 === v140.Completion.CONTINUE && (v1 ? v4.labels && -1 !== v4.labels.indexOf(v1) : v4.isLoop))
        return;
    }
  if (this.isa(v0, this.ERROR)) {
    var v5 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      v6 = String(this.getProperty(v0, 'name')),
      v7 = this.getProperty(v0, 'message').valueOf();
    (v2 = (v5[v6] || Error)(v7)).stack = String(this.getProperty(v0, 'stack'));
  } else
    v2 = String(v0);
  throw this.value = v2, v2;
}, v140.prototype.nodeSummary = function(v98) {
  switch (v98.type) {
    case 'ArrayExpression':
      return '[...]';
    case 'BinaryExpression':
    case 'LogicalExpression':
      return this.nodeSummary(v98.left) + ' ' + v98.operator + ' ' + this.nodeSummary(v98.right);
    case 'CallExpression':
      return this.nodeSummary(v98.callee) + '(...)';
    case 'ConditionalExpression':
      return this.nodeSummary(v98.test) + ' ? ' + this.nodeSummary(v98.consequent) + ' : ' + this.nodeSummary(v98.alternate);
    case 'Identifier':
      return v98.name;
    case 'Literal':
      return v98.raw;
    case 'MemberExpression':
      var v0 = this.nodeSummary(v98.object),
        v1 = this.nodeSummary(v98.property);
      return v98.computed ? v0 + '[' + v1 + ']' : v0 + '.' + v1;
    case 'NewExpression':
      return 'new ' + this.nodeSummary(v98.callee) + '(...)';
    case 'ObjectExpression':
      return '{...}';
    case 'ThisExpression':
      return 'this';
    case 'UnaryExpression':
      return v98.operator + ' ' + this.nodeSummary(v98.argument);
    case 'UpdateExpression':
      var v2 = this.nodeSummary(v98.argument);
      return v98.prefix ? v98.operator + v2 : v2 + v98.operator;
  }
  return '???';
}, v140.prototype.createTask_ = function(v98, v0) {
  var v1, v2, v3, v4 = this.stateStack[this.stateStack.length - 1],
    v5 = Array.from(v0),
    v6 = v5.shift(),
    v7 = Math.max(Number(v5.shift() || 0), 0),
    v8 = this.newNode();
  if (v6 instanceof v140.Object && 'Function' === v6.class)
    v2 = v6, v8.type = 'CallExpression', v1 = v4.scope;
  else {
    try {
      v3 = this.parse_(String(v6), 'taskCode' + this.taskCodeNumber_++);
    } catch (v9) {
      this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + v9.message);
    }
    v8.type = 'EvalProgram_', v8.body = v3.body;
    var v10 = v4.node.arguments[0],
      v11 = v10 ? v10.start : void 0,
      v12 = v10 ? v10.end : void 0;
    v140.stripLocations_(v8, v11, v12), v1 = this.globalScope, v5.length = 0;
  }
  var v13 = new v140.Task(v2, v5, v1, v8, v98 ? v7 : -1);
  return this.scheduleTask_(v13, v7), v13.pid;
}, v140.prototype.scheduleTask_ = function(v98, v0) {
  v98.time = Date.now() + v0, this.tasks.push(v98), this.tasks.sort(function(v98, v0) {
    return v98.time - v0.time;
  });
}, v140.prototype.deleteTask_ = function(v98) {
  for (var v0 = 0; v0 < this.tasks.length; v0++)
    if (this.tasks[v0].pid == v98) {
      this.tasks.splice(v0, 1);
      break;
    }
}, v140.prototype.nextTask_ = function() {
  var v98 = this.tasks[0];
  if (!v98 || v98.time > Date.now())
    return null;
  this.tasks.shift(), v98.interval >= 0 && this.scheduleTask_(v98, v98.interval);
  var v0 = new v140.State(v98.node, v98.scope);
  return v98.functionRef && (v0.doneCallee_ = 2, v0.funcThis_ = this.globalObject, v0.func_ = v98.functionRef, v0.doneArgs_ = !0, v0.arguments_ = v98.argsArray), v0;
}, v140.prototype.createGetter_ = function(v98, v0) {
  if (!this.getterStep_)
    throw Error('Unexpected call to createGetter');
  this.getterStep_ = !1;
  var v1 = Array.isArray(v0) ? v0[0] : v0,
    v2 = this.newNode();
  v2.type = 'CallExpression';
  var v3 = new v140.State(v2, this.stateStack[this.stateStack.length - 1].scope);
  return v3.doneCallee_ = 2, v3.funcThis_ = v1, v3.func_ = v98, v3.doneArgs_ = !0, v3.arguments_ = [], v3;
}, v140.prototype.createSetter_ = function(v98, v0, v1) {
  if (!this.setterStep_)
    throw Error('Unexpected call to createSetter');
  this.setterStep_ = !1;
  var v2 = Array.isArray(v0) ? v0[0] : this.globalObject,
    v3 = this.newNode();
  v3.type = 'CallExpression';
  var v4 = new v140.State(v3, this.stateStack[this.stateStack.length - 1].scope);
  return v4.doneCallee_ = 2, v4.funcThis_ = v2, v4.func_ = v98, v4.doneArgs_ = !0, v4.arguments_ = [v1], v4;
}, v140.prototype.boxThis_ = function(v98) {
  if (null == v98)
    return this.globalObject;
  if (!(v98 instanceof v140.Object)) {
    var v0 = this.createObjectProto(this.getPrototype(v98));
    return v0.data = v98, v0;
  }
  return v98;
}, v140.prototype.getGlobalScope = function() {
  return this.globalScope;
}, v140.prototype.setGlobalScope = function(v98) {
  this.globalScope = v98, this.stateStack[0].scope = v98;
}, v140.prototype.getStateStack = function() {
  return this.stateStack;
}, v140.prototype.setStateStack = function(v98) {
  this.stateStack = v98;
}, v140.Value, v140.State = function(v98, v0) {
  this.node = v98, this.scope = v0;
}, v140.Scope = function(v98, v0, v1) {
  this.parentScope = v98, this.strict = v0, this.object = v1;
}, v140.Object = function(v98) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = v98;
}, v140.Object.prototype.proto = null, v140.Object.prototype.class = 'Object', v140.Object.prototype.data = null, v140.Object.prototype.toString = function() {
  if (!v140.currentInterpreter_)
    return '[object Interpreter.Object]';
  if (!(this instanceof v140.Object))
    return String(this);
  if ('Array' === this.class) {
    var v98 = v140.toStringCycles_;
    v98.push(this);
    try {
      var v0 = [],
        v1 = this.properties.length,
        v2 = !1;
      v1 > 1024 && (v1 = 1000, v2 = !0);
      for (var v3 = 0; v3 < v1; v3++) {
        var v4 = this.properties[v3];
        v0[v3] = v4 instanceof v140.Object && -1 !== v98.indexOf(v4) ? '...' : v4;
      }
      v2 && v0.push('...');
    } finally {
      v98.pop();
    }
    return v0.join(',');
  }
  if ('Error' === this.class) {
    var v5, v6, v98 = v140.toStringCycles_;
    if (-1 !== v98.indexOf(this))
      return '[object Error]';
    var v7 = this;
    do
      if ('name' in v7.properties) {
        v5 = v7.properties.name;
        break;
      }
    while (v7 = v7.proto);
    v7 = this;
    do
      if ('message' in v7.properties) {
        v6 = v7.properties.message;
        break;
      }
    while (v7 = v7.proto);
    v98.push(this);
    try {
      v5 = v5 && String(v5), v6 = v6 && String(v6);
    } finally {
      v98.pop();
    }
    return v6 ? v5 + ': ' + v6 : String(v5);
  }
  return null !== this.data ? String(this.data) : '[object ' + this.class + ']';
}, v140.Object.prototype.valueOf = function() {
  return !v140.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, v140.Task = function(v98, v0, v1, v2, v3) {
  this.functionRef = v98, this.argsArray = v0, this.scope = v1, this.node = v2, this.interval = v3, this.pid = ++v140.Task.pid, this.time = 0;
}, v140.Task.pid = 0, v140.prototype.stepArrayExpression = function(v98, v0, v1) {
  var v2 = v1.elements,
    v3 = v0.n_ || 0;
  for (v0.array_ ? (this.setProperty(v0.array_, v3, v0.value), v3++) : (v0.array_ = this.createArray(), v0.array_.properties.length = v2.length); v3 < v2.length;) {
    if (v2[v3])
      return v0.n_ = v3, new v140.State(v2[v3], v0.scope);
    v3++;
  }
  v98.pop(), v98[v98.length - 1].value = v0.array_;
}, v140.prototype.stepAssignmentExpression = function(v98, v0, v1) {
  if (!v0.doneLeft_) {
    v0.doneLeft_ = !0;
    var v2 = new v140.State(v1.left, v0.scope);
    return v2.components = !0, v2;
  }
  if (!v0.doneRight_) {
    if (v0.leftReference_ || (v0.leftReference_ = v0.value), v0.doneGetter_ && (v0.leftValue_ = v0.value), !v0.doneGetter_ && '=' !== v1.operator) {
      var v3 = this.getValue(v0.leftReference_);
      if (v0.leftValue_ = v3, this.getterStep_)
        return v0.doneGetter_ = !0, this.createGetter_(v3, v0.leftReference_);
    }
    return v0.doneRight_ = !0, '=' === v1.operator && 'Identifier' === v1.left.type && (v0.destinationName = v1.left.name), new v140.State(v1.right, v0.scope);
  }
  if (v0.doneSetter_) {
    v98.pop(), v98[v98.length - 1].value = v0.setterValue_;
    return;
  }
  var v4 = v0.leftValue_,
    v5 = v0.value;
  switch (v1.operator) {
    case '=':
      v4 = v5;
      break;
    case '+=':
      v4 += v5;
      break;
    case '-=':
      v4 -= v5;
      break;
    case '*=':
      v4 *= v5;
      break;
    case '/=':
      v4 /= v5;
      break;
    case '%=':
      v4 %= v5;
      break;
    case '<<=':
      v4 <<= v5;
      break;
    case '>>=':
      v4 >>= v5;
      break;
    case '>>>=':
      v4 >>>= v5;
      break;
    case '&=':
      v4 &= v5;
      break;
    case '^=':
      v4 ^= v5;
      break;
    case '|=':
      v4 |= v5;
      break;
    default:
      throw SyntaxError('Unknown assignment expression: ' + v1.operator);
  }
  var v6 = this.setValue(v0.leftReference_, v4);
  if (v6)
    return v0.doneSetter_ = !0, v0.setterValue_ = v4, this.createSetter_(v6, v0.leftReference_, v4);
  v98.pop(), v98[v98.length - 1].value = v4;
}, v140.prototype.stepBinaryExpression = function(v98, v0, v1) {
  if (!v0.doneLeft_)
    return v0.doneLeft_ = !0, new v140.State(v1.left, v0.scope);
  if (!v0.doneRight_)
    return v0.doneRight_ = !0, v0.leftValue_ = v0.value, new v140.State(v1.right, v0.scope);
  v98.pop();
  var v2, v3 = v0.leftValue_,
    v4 = v0.value;
  switch (v1.operator) {
    case '==':
      v2 = v3 == v4;
      break;
    case '!=':
      v2 = v3 != v4;
      break;
    case '===':
      v2 = v3 === v4;
      break;
    case '!==':
      v2 = v3 !== v4;
      break;
    case '>':
      v2 = v3 > v4;
      break;
    case '>=':
      v2 = v3 >= v4;
      break;
    case '<':
      v2 = v3 < v4;
      break;
    case '<=':
      v2 = v3 <= v4;
      break;
    case '+':
      v2 = v3 + v4;
      break;
    case '-':
      v2 = v3 - v4;
      break;
    case '*':
      v2 = v3 * v4;
      break;
    case '/':
      v2 = v3 / v4;
      break;
    case '%':
      v2 = v3 % v4;
      break;
    case '&':
      v2 = v3 & v4;
      break;
    case '|':
      v2 = v3 | v4;
      break;
    case '^':
      v2 = v3 ^ v4;
      break;
    case '<<':
      v2 = v3 << v4;
      break;
    case '>>':
      v2 = v3 >> v4;
      break;
    case '>>>':
      v2 = v3 >>> v4;
      break;
    case 'in':
      v4 instanceof v140.Object || this.throwException(this.TYPE_ERROR, '\'in\' expects an object, not \'' + v4 + '\''), v2 = this.hasProperty(v4, v3);
      break;
    case 'instanceof':
      this.isa(v4, this.FUNCTION) || this.throwException(this.TYPE_ERROR, '\'instanceof\' expects an object, not \'' + v4 + '\''), v2 = v3 instanceof v140.Object && this.isa(v3, v4);
      break;
    default:
      throw SyntaxError('Unknown binary operator: ' + v1.operator);
  }
  v98[v98.length - 1].value = v2;
}, v140.prototype.stepBlockStatement = function(v98, v0, v1) {
  var v2 = v0.n_ || 0,
    v3 = v1.body[v2];
  if (v3)
    return v0.n_ = v2 + 1, new v140.State(v3, v0.scope);
  v98.pop();
}, v140.prototype.stepBreakStatement = function(v98, v0, v1) {
  var v2 = v1.label && v1.label.name;
  this.unwind(v140.Completion.BREAK, void 0, v2);
}, v140.prototype.evalCodeNumber_ = 0, v140.prototype.stepCallExpression = function(v98, v0, v1) {
  if (!v0.doneCallee_) {
    v0.doneCallee_ = 1;
    var v2 = new v140.State(v1.callee, v0.scope);
    return v2.components = !0, v2;
  }
  if (1 === v0.doneCallee_) {
    v0.doneCallee_ = 2;
    var v3 = v0.value;
    if (Array.isArray(v3)) {
      if (v0.func_ = this.getValue(v3), v3[0] === v140.SCOPE_REFERENCE ? v0.directEval_ = 'eval' === v3[1] : v0.funcThis_ = v3[0], v3 = v0.func_, this.getterStep_)
        return v0.doneCallee_ = 1, this.createGetter_(v3, v0.value);
    } else
      v0.func_ = v3;
    v0.arguments_ = [], v0.n_ = 0;
  }
  var v3 = v0.func_;
  if (!v0.doneArgs_) {
    if (0 !== v0.n_ && v0.arguments_.push(v0.value), v1.arguments[v0.n_])
      return new v140.State(v1.arguments[v0.n_++], v0.scope);
    if ('NewExpression' === v1.type) {
      if (v3 instanceof v140.Object && !v3.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(v1.callee) + ' is not a constructor'), v3 === this.ARRAY)
        v0.funcThis_ = this.createArray();
      else {
        var v4 = v3.properties.prototype;
        ('object' != typeof v4 || null === v4) && (v4 = this.OBJECT_PROTO), v0.funcThis_ = this.createObjectProto(v4);
      }
      v0.isConstructor = !0;
    }
    v0.doneArgs_ = !0;
  }
  if (v0.doneExec_)
    v98.pop(), v0.isConstructor && 'object' != typeof v0.value ? v98[v98.length - 1].value = v0.funcThis_ : v98[v98.length - 1].value = v0.value;
  else {
    v0.doneExec_ = !0, v3 instanceof v140.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(v1.callee) + ' is not a function');
    var v5 = v3.node;
    if (v5) {
      for (var v6 = this.createScope(v5.body, v3.parentScope), v7 = this.createArray(), v8 = 0; v8 < v0.arguments_.length; v8++)
        this.setProperty(v7, v8, v0.arguments_[v8]);
      this.setProperty(v6.object, 'arguments', v7);
      for (var v8 = 0; v8 < v5.params.length; v8++) {
        var v9 = v5.params[v8].name,
          v10 = v0.arguments_.length > v8 ? v0.arguments_[v8] : void 0;
        this.setProperty(v6.object, v9, v10);
      }
      return v6.strict || (v0.funcThis_ = this.boxThis_(v0.funcThis_)), this.setProperty(v6.object, 'this', v0.funcThis_, v140.READONLY_DESCRIPTOR), v0.value = void 0, new v140.State(v5.body, v6);
    }
    if (v3.eval) {
      var v11 = v0.arguments_[0];
      if ('string' != typeof v11)
        v0.value = v11;
      else {
        try {
          var v12 = this.parse_(String(v11), 'eval' + this.evalCodeNumber_++);
        } catch (v13) {
          this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + v13.message);
        }
        var v14 = this.newNode();
        v14.type = 'EvalProgram_', v14.body = v12.body, v140.stripLocations_(v14, v1.start, v1.end);
        var v6 = v0.directEval_ ? v0.scope : this.globalScope;
        return v6.strict ? v6 = this.createScope(v12, v6) : this.populateScope_(v12, v6), this.value = void 0, new v140.State(v14, v6);
      }
    } else if (v3.nativeFunc)
      v0.scope.strict || (v0.funcThis_ = this.boxThis_(v0.funcThis_)), v0.value = v3.nativeFunc.apply(v0.funcThis_, v0.arguments_);
    else if (v3.asyncFunc) {
      var v15 = this,
        v16 = function(v98) {
          v0.value = v98, v15.paused_ = !1;
        },
        v17 = v3.asyncFunc.length - 1,
        v18 = v0.arguments_.concat(Array(v17)).slice(0, v17);
      v18.push(v16), this.paused_ = !0, v0.scope.strict || (v0.funcThis_ = this.boxThis_(v0.funcThis_)), v3.asyncFunc.apply(v0.funcThis_, v18);
      return;
    } else
      this.throwException(this.TYPE_ERROR, this.nodeSummary(v1.callee) + ' is not callable');
  }
}, v140.prototype.stepConditionalExpression = function(v98, v0, v1) {
  var v2 = v0.mode_ || 0;
  if (0 === v2)
    return v0.mode_ = 1, new v140.State(v1.test, v0.scope);
  if (1 === v2) {
    v0.mode_ = 2;
    var v3 = Boolean(v0.value);
    if (v3 && v1.consequent)
      return new v140.State(v1.consequent, v0.scope);
    if (!v3 && v1.alternate)
      return new v140.State(v1.alternate, v0.scope);
    this.value = void 0;
  }
  v98.pop(), 'ConditionalExpression' === v1.type && (v98[v98.length - 1].value = v0.value);
}, v140.prototype.stepContinueStatement = function(v98, v0, v1) {
  var v2 = v1.label && v1.label.name;
  this.unwind(v140.Completion.CONTINUE, void 0, v2);
}, v140.prototype.stepDebuggerStatement = function(v98, v0, v1) {
  v98.pop();
}, v140.prototype.stepDoWhileStatement = function(v98, v0, v1) {
  if ('DoWhileStatement' === v1.type && void 0 === v0.test_ && (v0.value = !0, v0.test_ = !0), !v0.test_)
    return v0.test_ = !0, new v140.State(v1.test, v0.scope);
  if (v0.value) {
    if (v1.body)
      return v0.test_ = !1, v0.isLoop = !0, new v140.State(v1.body, v0.scope);
  } else
    v98.pop();
}, v140.prototype.stepEmptyStatement = function(v98, v0, v1) {
  v98.pop();
}, v140.prototype.stepEvalProgram_ = function(v98, v0, v1) {
  var v2 = v0.n_ || 0,
    v3 = v1.body[v2];
  if (v3)
    return v0.n_ = v2 + 1, new v140.State(v3, v0.scope);
  v98.pop(), v98[v98.length - 1].value = this.value;
}, v140.prototype.stepExpressionStatement = function(v98, v0, v1) {
  if (!v0.done_)
    return this.value = void 0, v0.done_ = !0, new v140.State(v1.expression, v0.scope);
  v98.pop(), this.value = v0.value;
}, v140.prototype.stepForInStatement = function(v98, v0, v1) {
  if (!v0.doneInit_ && (v0.doneInit_ = !0, v1.left.declarations && v1.left.declarations[0].init))
    return v0.scope.strict && this.throwException(this.SYNTAX_ERROR, 'for-in loop variable declaration may not have an initializer'), new v140.State(v1.left, v0.scope);
  if (!v0.doneObject_)
    return v0.doneObject_ = !0, v0.variable_ || (v0.variable_ = v0.value), new v140.State(v1.right, v0.scope);
  if (v0.isLoop || (v0.isLoop = !0, v0.object_ = v0.value, v0.visited_ = Object.create(null)), void 0 === v0.name_)
    gotPropName:
    for (;;) {
      if (v0.object_ instanceof v140.Object)
        for (v0.props_ || (v0.props_ = Object.getOwnPropertyNames(v0.object_.properties));;) {
          var v2 = v0.props_.shift();
          if (void 0 === v2)
            break;
          if (Object.prototype.hasOwnProperty.call(v0.object_.properties, v2) && !v0.visited_[v2]) {
            if (v0.visited_[v2] = !0, Object.prototype.propertyIsEnumerable.call(v0.object_.properties, v2)) {
              v0.name_ = v2;
              break gotPropName;
            }
          }
        }
      else if (null !== v0.object_ && void 0 !== v0.object_)
        for (v0.props_ || (v0.props_ = Object.getOwnPropertyNames(v0.object_));;) {
          var v2 = v0.props_.shift();
          if (void 0 === v2)
            break;
          if (v0.visited_[v2] = !0, Object.prototype.propertyIsEnumerable.call(v0.object_, v2)) {
            v0.name_ = v2;
            break gotPropName;
          }
        }
      if (v0.object_ = this.getPrototype(v0.object_), v0.props_ = null, null === v0.object_) {
        v98.pop();
        return;
      }
    }
  if (!v0.doneVariable_) {
    v0.doneVariable_ = !0;
    var v3 = v1.left;
    if ('VariableDeclaration' === v3.type)
      v0.variable_ = [
        v140.SCOPE_REFERENCE,
        v3.declarations[0].id.name
      ];
    else {
      v0.variable_ = null;
      var v4 = new v140.State(v3, v0.scope);
      return v4.components = !0, v4;
    }
  }
  if (v0.variable_ || (v0.variable_ = v0.value), !v0.doneSetter_) {
    v0.doneSetter_ = !0;
    var v5 = v0.name_,
      v6 = this.setValue(v0.variable_, v5);
    if (v6)
      return this.createSetter_(v6, v0.variable_, v5);
  }
  if (v0.name_ = void 0, v0.doneVariable_ = !1, v0.doneSetter_ = !1, v1.body)
    return new v140.State(v1.body, v0.scope);
}, v140.prototype.stepForStatement = function(v98, v0, v1) {
  switch (v0.mode_) {
    default:
      if (v0.mode_ = 1, v1.init)
        return new v140.State(v1.init, v0.scope);
      break;
    case 1:
      if (v0.mode_ = 2, v1.test)
        return new v140.State(v1.test, v0.scope);
      break;
    case 2:
      if (v0.mode_ = 3, !v1.test || v0.value)
        return v0.isLoop = !0, new v140.State(v1.body, v0.scope);
      v98.pop();
      break;
    case 3:
      if (v0.mode_ = 1, v1.update)
        return new v140.State(v1.update, v0.scope);
  }
}, v140.prototype.stepFunctionDeclaration = function(v98, v0, v1) {
  v98.pop();
}, v140.prototype.stepFunctionExpression = function(v98, v0, v1) {
  v98.pop();
  var v2 = (v0 = v98[v98.length - 1]).scope;
  v1.id && (v2 = this.createSpecialScope(v2)), v0.value = this.createFunction(v1, v2, v0.destinationName), v1.id && this.setProperty(v2.object, v1.id.name, v0.value, v140.READONLY_DESCRIPTOR);
}, v140.prototype.stepIdentifier = function(v98, v0, v1) {
  if (v98.pop(), v0.components) {
    v98[v98.length - 1].value = [
      v140.SCOPE_REFERENCE,
      v1.name
    ];
    return;
  }
  var v2 = this.getValueFromScope(v1.name);
  if (this.getterStep_)
    return this.createGetter_(v2, this.globalObject);
  v98[v98.length - 1].value = v2;
}, v140.prototype.stepIfStatement = v140.prototype.stepConditionalExpression, v140.prototype.stepLabeledStatement = function(v98, v0, v1) {
  v98.pop();
  var v2 = v0.labels || [];
  v2.push(v1.label.name);
  var v3 = new v140.State(v1.body, v0.scope);
  return v3.labels = v2, v3;
}, v140.prototype.stepLiteral = function(v98, v0, v1) {
  v98.pop();
  var v2 = v1.value;
  if (v2 instanceof RegExp) {
    var v3 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(v3, v2), v2 = v3;
  }
  v98[v98.length - 1].value = v2;
}, v140.prototype.stepLogicalExpression = function(v98, v0, v1) {
  if ('&&' !== v1.operator && '||' !== v1.operator)
    throw SyntaxError('Unknown logical operator: ' + v1.operator);
  if (!v0.doneLeft_)
    return v0.doneLeft_ = !0, new v140.State(v1.left, v0.scope);
  if (v0.doneRight_)
    v98.pop(), v98[v98.length - 1].value = v0.value;
  else {
    if (('&&' !== v1.operator || v0.value) && ('||' !== v1.operator || !v0.value))
      return v0.doneRight_ = !0, new v140.State(v1.right, v0.scope);
    v98.pop(), v98[v98.length - 1].value = v0.value;
  }
}, v140.prototype.stepMemberExpression = function(v98, v0, v1) {
  if (!v0.doneObject_)
    return v0.doneObject_ = !0, new v140.State(v1.object, v0.scope);
  if (v1.computed) {
    if (!v0.doneProperty_)
      return v0.object_ = v0.value, v0.doneProperty_ = !0, new v140.State(v1.property, v0.scope);
    v2 = v0.value;
  } else
    v0.object_ = v0.value, v2 = v1.property.name;
  if (v98.pop(), v0.components)
    v98[v98.length - 1].value = [
      v0.object_,
      v2
    ];
  else {
    var v2, v3 = this.getProperty(v0.object_, v2);
    if (this.getterStep_)
      return this.createGetter_(v3, v0.object_);
    v98[v98.length - 1].value = v3;
  }
}, v140.prototype.stepNewExpression = v140.prototype.stepCallExpression, v140.prototype.stepObjectExpression = function(v98, v0, v1) {
  var v2 = v0.n_ || 0,
    v3 = v1.properties[v2];
  if (v0.object_) {
    var v4 = v0.destinationName;
    v0.properties_[v4] || (v0.properties_[v4] = {}), v0.properties_[v4][v3.kind] = v0.value, v0.n_ = ++v2, v3 = v1.properties[v2];
  } else
    v0.object_ = this.createObjectProto(this.OBJECT_PROTO), v0.properties_ = Object.create(null);
  if (v3) {
    var v5 = v3.key;
    if ('Identifier' === v5.type)
      var v4 = v5.name;
    else if ('Literal' === v5.type)
      var v4 = v5.value;
    else
      throw SyntaxError('Unknown object structure: ' + v5.type);
    return v0.destinationName = v4, new v140.State(v3.value, v0.scope);
  }
  for (var v5 in v0.properties_) {
    var v6 = v0.properties_[v5];
    if ('get' in v6 || 'set' in v6) {
      var v7 = {
        configurable: !0,
        enumerable: !0,
        get: v6.get,
        set: v6.set
      };
      this.setProperty(v0.object_, v5, v140.VALUE_IN_DESCRIPTOR, v7);
    } else
      this.setProperty(v0.object_, v5, v6.init);
  }
  v98.pop(), v98[v98.length - 1].value = v0.object_;
}, v140.prototype.stepProgram = function(v98, v0, v1) {
  var v2 = v1.body.shift();
  if (v2)
    return v0.done = !1, new v140.State(v2, v0.scope);
  v0.done = !0;
}, v140.prototype.stepReturnStatement = function(v98, v0, v1) {
  if (v1.argument && !v0.done_)
    return v0.done_ = !0, new v140.State(v1.argument, v0.scope);
  this.unwind(v140.Completion.RETURN, v0.value, void 0);
}, v140.prototype.stepSequenceExpression = function(v98, v0, v1) {
  var v2 = v0.n_ || 0,
    v3 = v1.expressions[v2];
  if (v3)
    return v0.n_ = v2 + 1, new v140.State(v3, v0.scope);
  v98.pop(), v98[v98.length - 1].value = v0.value;
}, v140.prototype.stepSwitchStatement = function(v98, v0, v1) {
  if (!v0.test_)
    return v0.test_ = 1, new v140.State(v1.discriminant, v0.scope);
  for (1 === v0.test_ && (v0.test_ = 2, v0.switchValue_ = v0.value, v0.defaultCase_ = -1);;) {
    var v2 = v0.index_ || 0,
      v3 = v1.cases[v2];
    if (!v0.matched_ && v3 && !v3.test) {
      v0.defaultCase_ = v2, v0.index_ = v2 + 1;
      continue;
    }
    if (!v3 && !v0.matched_ && -1 !== v0.defaultCase_) {
      v0.matched_ = !0, v0.index_ = v0.defaultCase_;
      continue;
    }
    if (v3) {
      if (!v0.matched_ && !v0.tested_ && v3.test)
        return v0.tested_ = !0, new v140.State(v3.test, v0.scope);
      if (v0.matched_ || v0.value === v0.switchValue_) {
        v0.matched_ = !0;
        var v4 = v0.n_ || 0;
        if (v3.consequent[v4])
          return v0.isSwitch = !0, v0.n_ = v4 + 1, new v140.State(v3.consequent[v4], v0.scope);
      }
      v0.tested_ = !1, v0.n_ = 0, v0.index_ = v2 + 1;
    } else {
      v98.pop();
      return;
    }
  }
}, v140.prototype.stepThisExpression = function(v98, v0, v1) {
  v98.pop(), v98[v98.length - 1].value = this.getValueFromScope('this');
}, v140.prototype.stepThrowStatement = function(v98, v0, v1) {
  if (!v0.done_)
    return v0.done_ = !0, new v140.State(v1.argument, v0.scope);
  this.throwException(v0.value);
}, v140.prototype.stepTryStatement = function(v98, v0, v1) {
  if (!v0.doneBlock_)
    return v0.doneBlock_ = !0, new v140.State(v1.block, v0.scope);
  if (v0.cv && v0.cv.type === v140.Completion.THROW && !v0.doneHandler_ && v1.handler) {
    v0.doneHandler_ = !0;
    var v2 = this.createSpecialScope(v0.scope);
    return this.setProperty(v2.object, v1.handler.param.name, v0.cv.value), v0.cv = void 0, new v140.State(v1.handler.body, v2);
  }
  if (!v0.doneFinalizer_ && v1.finalizer)
    return v0.doneFinalizer_ = !0, new v140.State(v1.finalizer, v0.scope);
  v98.pop(), v0.cv && this.unwind(v0.cv.type, v0.cv.value, v0.cv.label);
}, v140.prototype.stepUnaryExpression = function(v98, v0, v1) {
  if (!v0.done_) {
    v0.done_ = !0;
    var v2 = new v140.State(v1.argument, v0.scope);
    return v2.components = 'delete' === v1.operator, v2;
  }
  v98.pop();
  var v3 = v0.value;
  switch (v1.operator) {
    case '-':
      v3 = -v3;
      break;
    case '+':
      v3 = +v3;
      break;
    case '!':
      v3 = !v3;
      break;
    case '~':
      v3 = ~v3;
      break;
    case 'delete':
      var v4 = !0;
      if (Array.isArray(v3)) {
        var v5 = v3[0];
        v5 === v140.SCOPE_REFERENCE && (v5 = v0.scope);
        var v6 = String(v3[1]);
        try {
          delete v5.properties[v6];
        } catch (v7) {
          v0.scope.strict ? this.throwException(this.TYPE_ERROR, 'Cannot delete property \'' + v6 + '\' of \'' + v5 + '\'') : v4 = !1;
        }
      }
      v3 = v4;
      break;
    case 'typeof':
      v3 = v3 && 'Function' === v3.class ? 'function' : typeof v3;
      break;
    case 'void':
      v3 = void 0;
      break;
    default:
      throw SyntaxError('Unknown unary operator: ' + v1.operator);
  }
  v98[v98.length - 1].value = v3;
}, v140.prototype.stepUpdateExpression = function(v98, v0, v1) {
  if (!v0.doneLeft_) {
    v0.doneLeft_ = !0;
    var v2, v3 = new v140.State(v1.argument, v0.scope);
    return v3.components = !0, v3;
  }
  if (v0.leftSide_ || (v0.leftSide_ = v0.value), v0.doneGetter_ && (v0.leftValue_ = v0.value), !v0.doneGetter_) {
    var v4 = this.getValue(v0.leftSide_);
    if (v0.leftValue_ = v4, this.getterStep_) {
      v0.doneGetter_ = !0;
      var v5 = v4;
      return this.createGetter_(v5, v0.leftSide_);
    }
  }
  if (v0.doneSetter_) {
    v98.pop(), v98[v98.length - 1].value = v0.setterValue_;
    return;
  }
  var v4 = Number(v0.leftValue_);
  if ('++' === v1.operator)
    v2 = v4 + 1;
  else if ('--' === v1.operator)
    v2 = v4 - 1;
  else
    throw SyntaxError('Unknown update expression: ' + v1.operator);
  var v6 = v1.prefix ? v2 : v4,
    v7 = this.setValue(v0.leftSide_, v2);
  if (v7)
    return v0.doneSetter_ = !0, v0.setterValue_ = v6, this.createSetter_(v7, v0.leftSide_, v2);
  v98.pop(), v98[v98.length - 1].value = v6;
}, v140.prototype.stepVariableDeclaration = function(v98, v0, v1) {
  var v2 = v1.declarations,
    v3 = v0.n_ || 0,
    v4 = v2[v3];
  for (v0.init_ && v4 && (this.setValueToScope(v4.id.name, v0.value), v0.init_ = !1, v4 = v2[++v3]); v4;) {
    if (v4.init)
      return v0.n_ = v3, v0.init_ = !0, v0.destinationName = v4.id.name, new v140.State(v4.init, v0.scope);
    v4 = v2[++v3];
  }
  v98.pop();
}, v140.prototype.stepWithStatement = function(v98, v0, v1) {
  if (!v0.doneObject_)
    return v0.doneObject_ = !0, new v140.State(v1.object, v0.scope);
  v98.pop();
  var v2 = this.createSpecialScope(v0.scope, v0.value);
  return new v140.State(v1.body, v2);
}, v140.prototype.stepWhileStatement = v140.prototype.stepDoWhileStatement, v140.nativeGlobal.v140 = v140, v140.prototype.step = v140.prototype.step, v140.prototype.run = v140.prototype.run, v140.prototype.getStatus = v140.prototype.getStatus, v140.prototype.appendCode = v140.prototype.appendCode, v140.prototype.createObject = v140.prototype.createObject, v140.prototype.createObjectProto = v140.prototype.createObjectProto, v140.prototype.createNativeFunction = v140.prototype.createNativeFunction, v140.prototype.createAsyncFunction = v140.prototype.createAsyncFunction, v140.prototype.getProperty = v140.prototype.getProperty, v140.prototype.setProperty = v140.prototype.setProperty, v140.prototype.nativeToPseudo = v140.prototype.nativeToPseudo, v140.prototype.pseudoToNative = v140.prototype.pseudoToNative, v140.prototype.getGlobalScope = v140.prototype.getGlobalScope, v140.prototype.setGlobalScope = v140.prototype.setGlobalScope, v140.prototype.getStateStack = v140.prototype.getStateStack, v140.prototype.setStateStack = v140.prototype.setStateStack, v140.Status = v140.Status, v140.VALUE_IN_DESCRIPTOR = v140.VALUE_IN_DESCRIPTOR;