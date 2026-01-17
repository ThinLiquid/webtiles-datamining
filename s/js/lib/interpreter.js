/* 27d3a5adceccfa0fcb756e9a13ccf871a56fb98de655e0e78610e7176cd59551 */
! function(__0, __1) {
  return 'object' == typeof exports && 'object' == typeof module ? __1(exports) : 'function' == typeof define && define.amd ? define(['exports'], __1) : void __1(__0.acorn || (__0.acorn = {}));
}('undefined' == typeof globalThis ? this || window : globalThis, function(__0) {
  'use strict';
  __0.version = '0.5.0';
  var __1, __2, __3, __4, __5, __6, __7, __8, __9, __10, __11, __12, __13, __14, __15, __16 = '';
  __0.parse = function(__0, __4) {
    return __2 = (__16 = String(__0)).length,
      function __0(__2) {
        for (var __4 in (__1 = __2 || {}, y))
          Object.prototype.hasOwnProperty.call(__1, __4) || (__1[__4] = y[__4]);
        __3 = __1.sourceFile;
      }(__4), __9 = 1, b = __10 = 0, __8 = !0, e4(),
      function __0(__2) {
        O = g = b, __1.locations && (__11 = new eM()), __12 = __14 = !1, __13 = [], e3();
        var __3 = __2 || eH(),
          __4 = !0;
        for (__2 || (__3.body = []); __6 !== C;) {
          var __5 = ts();
          __3.body.push(__5), __4 && eQ(__5) && eW(!0), __4 = !1;
        }
        return e9(__3, 'Program');
      }(__1.program);
  };
  var __17 = {
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
    __18 = function(__0, __1) {
      for (var __2 = 1, __3 = 0;;) {
        eL.lastIndex = __3;
        var __4 = eL.exec(__0);
        if (__4 && __4.index < __1)
          ++__2, __3 = __4.index + __4[0].length;
        else
          break;
      }
      return {
        line: __2,
        column: __1 - __3
      };
    },
    __19 = 0,
    __20 = 0,
    __21 = 0,
    __22 = 0,
    __23 = 0;

  function __24(__0, __1) {
    var __2 = __18(__16, __0),
      __3 = SyntaxError(__1 += ' (' + __2.line + ':' + __2.column + ')');
    throw __3.pos = __0, __3.loc = __2, __3.raisedAt = __19, __3;
  }
  var __25 = [],
    __26 = {
      type: 'num'
    },
    __27 = {
      type: 'regexp'
    },
    __28 = {
      type: 'string'
    },
    __29 = {
      type: 'name'
    },
    __30 = {
      type: 'eof'
    },
    __31 = {
      keyword: 'break'
    },
    __32 = {
      keyword: 'case',
      beforeExpr: !0
    },
    __33 = {
      keyword: 'catch'
    },
    __34 = {
      keyword: 'continue'
    },
    __35 = {
      keyword: 'debugger'
    },
    __36 = {
      keyword: 'default'
    },
    __37 = {
      keyword: 'do',
      isLoop: !0
    },
    __38 = {
      keyword: 'else',
      beforeExpr: !0
    },
    __39 = {
      keyword: 'finally'
    },
    __40 = {
      keyword: 'for',
      isLoop: !0
    },
    __41 = {
      keyword: 'function'
    },
    __42 = {
      keyword: 'if'
    },
    __43 = {
      keyword: 'return',
      beforeExpr: !0
    },
    __44 = {
      keyword: 'switch'
    },
    __45 = {
      keyword: 'throw',
      beforeExpr: !0
    },
    __46 = {
      keyword: 'try'
    },
    __47 = {
      keyword: 'var'
    },
    __48 = {
      keyword: 'while',
      isLoop: !0
    },
    __49 = {
      keyword: 'with'
    },
    __50 = {
      keyword: 'new',
      beforeExpr: !0
    },
    __51 = {
      keyword: 'this'
    },
    __52 = {
      keyword: 'null',
      atomValue: null
    },
    __53 = {
      keyword: 'true',
      atomValue: !0
    },
    __54 = {
      keyword: 'false',
      atomValue: !1
    },
    __55 = {
      keyword: 'in',
      binop: 7,
      beforeExpr: !0
    },
    __56 = {
      break: __31,
      case: __32,
      catch: __33,
      continue: __34,
      debugger: __35,
      default: __36,
      do: __37,
      else: __38,
      finally: __39,
      for: __40,
      function: __41,
      if: __42,
      return: __43,
      switch: __44,
      throw: __45,
      try: __46,
      var: __47,
      while: __48,
      with: __49,
      null: __52,
      true: __53,
      false: __54,
      new: __50,
      in: __55,
      instanceof: {
        keyword: 'instanceof',
        binop: 7,
        beforeExpr: !0
      },
      this: __51,
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
    __57 = {
      type: '[',
      beforeExpr: !0
    },
    __58 = {
      type: ']'
    },
    __59 = {
      type: '{',
      beforeExpr: !0
    },
    __60 = {
      type: '}'
    },
    __61 = {
      type: '(',
      beforeExpr: !0
    },
    __62 = {
      type: ')'
    },
    __63 = {
      type: ',',
      beforeExpr: !0
    },
    __64 = {
      type: ';',
      beforeExpr: !0
    },
    __65 = {
      type: ':',
      beforeExpr: !0
    },
    __66 = {
      type: '.'
    },
    __67 = {
      type: '?',
      beforeExpr: !0
    },
    __68 = {
      binop: 10,
      beforeExpr: !0
    },
    __69 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __70 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __71 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    __72 = {
      prefix: !0,
      beforeExpr: !0
    },
    __73 = {
      binop: 1,
      beforeExpr: !0
    },
    __74 = {
      binop: 2,
      beforeExpr: !0
    },
    __75 = {
      binop: 3,
      beforeExpr: !0
    },
    __76 = {
      binop: 4,
      beforeExpr: !0
    },
    __77 = {
      binop: 5,
      beforeExpr: !0
    },
    __78 = {
      binop: 6,
      beforeExpr: !0
    },
    __79 = {
      binop: 7,
      beforeExpr: !0
    },
    __80 = {
      binop: 8,
      beforeExpr: !0
    },
    __81 = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    __82 = {
      binop: 10,
      beforeExpr: !0
    };

  function __83(__0) {
    for (var __1 = __0.split(' '), __2 = Object.create(null), __3 = 0; __3 < __1.length; __3++)
      __2[__1[__3]] = !0;
    return function(__0) {
      return __2[__0] || !1;
    };
  }
  var __84 = __83('class enum extends super const export import'),
    __85 = __83('implements interface let package private protected public static yield'),
    __86 = __83('eval arguments'),
    __87 = __83('break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
    __88 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    __89 = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
    __90 = RegExp('[' + __89 + ']'),
    __91 = RegExp('[' + __89 + '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'),
    __92 = /[\n\r\u2028\u2029]/,
    __93 = /\r\n|[\n\r\u2028\u2029]/g,
    __94 = function(__0) {
      return __0 < 65 ? 36 === __0 : __0 < 91 || (__0 < 97 ? 95 === __0 : __0 < 123 || __0 >= 170 && __90.test(String.fromCharCode(__0)));
    },
    __95 = function(__0) {
      return __0 < 48 ? 36 === __0 : __0 < 58 || !(__0 < 65) && (__0 < 91 || (__0 < 97 ? 95 === __0 : __0 < 123 || __0 >= 170 && __91.test(String.fromCharCode(__0))));
    };

  function __96() {
    this.line = __9, this.column = __19 - __10;
  }

  function __97(__0, __2) {
    __21 = __19, __1.locations && (__5 = new __96()), __6 = __0, e4(), __7 = __2, __8 = __0.beforeExpr;
  }

  function __98() {
    var __0, __2 = __1.onComment && __1.locations && new __96(),
      __3 = __19,
      __4 = __16.indexOf('*/', __19 += 2);
    if (-1 === __4 && __24(__19 - 2, 'Unterminated comment'), __19 = __4 + 2, __1.locations)
      for (__93.lastIndex = __3;
        (__0 = __93.exec(__16)) && __0.index < __19;)
        ++__9, __10 = __0.index + __0[0].length;
    __1.onComment && __1.onComment(!0, __16.slice(__3 + 2, __4), __3, __19, __2, __1.locations && new __96());
  }

  function __99() {
    for (var __0 = __19, __3 = __1.onComment && __1.locations && new __96(), __4 = __16.charCodeAt(__19 += 2); __19 < __2 && 10 !== __4 && 13 !== __4 && 8232 !== __4 && 8233 !== __4;)
      ++__19, __4 = __16.charCodeAt(__19);
    __1.onComment && __1.onComment(!1, __16.slice(__0 + 2, __19), __0, __19, __3, __1.locations && new __96());
  }

  function __100() {
    for (; __19 < __2;) {
      var __0 = __16.charCodeAt(__19);
      if (32 === __0)
        ++__19;
      else if (13 === __0) {
        ++__19;
        var __3 = __16.charCodeAt(__19);
        10 === __3 && ++__19, __1.locations && (++__9, __10 = __19);
      } else if (10 === __0 || 8232 === __0 || 8233 === __0)
        ++__19, __1.locations && (++__9, __10 = __19);
      else if (__0 > 8 && __0 < 14)
        ++__19;
      else if (47 === __0) {
        var __3 = __16.charCodeAt(__19 + 1);
        if (42 === __3)
          __98();
        else if (47 === __3)
          __99();
        else
          break;
      } else if (160 === __0)
        ++__19;
      else if (__0 >= 5760 && __88.test(String.fromCharCode(__0)))
        ++__19;
      else
        break;
    }
  }

  function __101(__0) {
    if (__0 ? __19 = __20 + 1 : __20 = __19, __1.locations && (__4 = new __96()), __0)
      return e5();
    if (__19 >= __2)
      return __97(__30);
    var __3 = __16.charCodeAt(__19);
    if (__94(__3) || 92 === __3)
      return eX();
    if (!1 === function __0(__3) {
        switch (__3) {
          case 46:
            return void((__5 = __16.charCodeAt(__19 + 1)) >= 48 && __5 <= 57 ? eG(!0) : (++__19, __97(__66)));
          case 40:
            return ++__19, __97(__61);
          case 41:
            return ++__19, __97(__62);
          case 59:
            return ++__19, __97(__64);
          case 44:
            return ++__19, __97(__63);
          case 91:
            return ++__19, __97(__57);
          case 93:
            return ++__19, __97(__58);
          case 123:
            return ++__19, __97(__59);
          case 125:
            return ++__19, __97(__60);
          case 58:
            return ++__19, __97(__65);
          case 63:
            return ++__19, __97(__67);
          case 48:
            var __4, __5, __6, __7, __11, __12, __13 = __16.charCodeAt(__19 + 1);
            if (120 === __13 || 88 === __13) {
              return __19 += 2, __4 = e2(16), void(null === __4 && __24(__20 + 2, 'Expected hexadecimal number'), __94(__16.charCodeAt(__19)) && __24(__19, 'Identifier directly after number'), __97(__26, __4));
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
            return function __0(__3) {
              __19++;
              for (var __4 = '';;) {
                __19 >= __2 && __24(__20, 'Unterminated string constant');
                var __5 = __16.charCodeAt(__19);
                if (__5 === __3) {
                  ++__19, __97(__28, __4);
                  return;
                }
                if (92 === __5) {
                  __5 = __16.charCodeAt(++__19);
                  var __6 = /^[0-7]+/.exec(__16.slice(__19, __19 + 3));
                  for (__6 && (__6 = __6[0]); __6 && parseInt(__6, 8) > 255;)
                    __6 = __6.slice(0, -1);
                  if ('0' === __6 && (__6 = null), ++__19, __6)
                    __14 && __24(__19 - 2, 'Octal literal in strict mode'), __4 += String.fromCharCode(parseInt(__6, 8)), __19 += __6.length - 1;
                  else
                    switch (__5) {
                      case 110:
                        __4 += '\n';
                        break;
                      case 114:
                        __4 += '\r';
                        break;
                      case 120:
                        __4 += String.fromCharCode(eY(2));
                        break;
                      case 117:
                        __4 += String.fromCharCode(eY(4));
                        break;
                      case 85:
                        __4 += String.fromCharCode(eY(8));
                        break;
                      case 116:
                        __4 += '\t';
                        break;
                      case 98:
                        __4 += '\b';
                        break;
                      case 118:
                        __4 += '\x0B';
                        break;
                      case 102:
                        __4 += '\f';
                        break;
                      case 48:
                        __4 += '\0';
                        break;
                      case 13:
                        10 === __16.charCodeAt(__19) && ++__19;
                      case 10:
                        __1.locations && (__10 = __19, ++__9);
                        break;
                      default:
                        __4 += String.fromCharCode(__5);
                    }
                } else
                  (13 === __5 || 10 === __5 || 8232 === __5 || 8233 === __5) && __24(__20, 'Unterminated string constant'), __4 += String.fromCharCode(__5), ++__19;
              }
            }(__3);
          case 47:
            return __6 = __16.charCodeAt(__19 + 1), void(__8 ? (++__19, e5()) : 61 === __6 ? e7(__70, 2) : e7(__68, 1));
          case 37:
          case 42:
            return void(61 === __16.charCodeAt(__19 + 1) ? e7(__70, 2) : e7(__82, 1));
          case 124:
          case 38:
            return __7 = __3, void((__11 = __16.charCodeAt(__19 + 1)) === __7 ? e7(124 === __7 ? __73 : __74, 2) : 61 === __11 ? e7(__70, 2) : e7(124 === __7 ? __75 : __77, 1));
          case 94:
            return void(61 === __16.charCodeAt(__19 + 1) ? e7(__70, 2) : e7(__76, 1));
          case 43:
          case 45:
            return function __0(__1) {
              var __2 = __16.charCodeAt(__19 + 1);
              if (__2 === __1) {
                if (45 === __2 && 62 === __16.charCodeAt(__19 + 2) && __92.test(__16.slice(__23, __19))) {
                  __19 += 3, __99(), __100(), __101();
                  return;
                }
                e7(__71, 2);
              } else
                61 === __2 ? e7(__70, 2) : e7(__81, 1);
            }(__3);
          case 60:
          case 62:
            return function __0(__1) {
              var __2 = __16.charCodeAt(__19 + 1),
                __3 = 1;
              if (__2 === __1) {
                __3 = 62 === __1 && 62 === __16.charCodeAt(__19 + 2) ? 3 : 2, 61 === __16.charCodeAt(__19 + __3) ? e7(__70, __3 + 1) : e7(__80, __3);
                return;
              }
              if (33 === __2 && 60 === __1 && 45 === __16.charCodeAt(__19 + 2) && 45 === __16.charCodeAt(__19 + 3)) {
                __19 += 4, __99(), __100(), __101();
                return;
              }
              61 === __2 && (__3 = 61 === __16.charCodeAt(__19 + 2) ? 3 : 2), e7(__79, __3);
            }(__3);
          case 61:
          case 33:
            return __12 = __3, void(61 === __16.charCodeAt(__19 + 1) ? e7(__78, 61 === __16.charCodeAt(__19 + 2) ? 3 : 2) : e7(61 === __12 ? __69 : __72, 1));
          case 126:
            return e7(__72, 1);
        }
        return !1;
      }(__3)) {
      var __5 = String.fromCharCode(__3);
      if ('\\' === __5 || __90.test(__5))
        return eX();
      __24(__19, 'Unexpected character \'' + __5 + '\'');
    }
  }

  function __102(__0, __1) {
    var __2 = __16.slice(__19, __19 + __1);
    __19 += __1, __97(__0, __2);
  }

  function __103() {
    for (var __0, __1, __3 = __19;;) {
      __19 >= __2 && __24(__3, 'Unterminated regexp');
      var __4 = __16.charAt(__19);
      if (__92.test(__4) && __24(__3, 'Unterminated regexp'), __0)
        __0 = !1;
      else {
        if ('[' === __4)
          __1 = !0;
        else if (']' === __4 && __1)
          __1 = !1;
        else if ('/' === __4 && !__1)
          break;
        __0 = '\\' === __4;
      }
      ++__19;
    }
    var __5 = __16.slice(__3, __19);
    ++__19;
    var __6 = eV();
    __6 && !/^[gmi]*$/.test(__6) && __24(__3, 'Invalid regexp flag');
    try {
      var __7 = RegExp(__5, __6);
    } catch (__8) {
      throw __8 instanceof SyntaxError && __24(__3, __8.message), __8;
    }
    __97(__27, __7);
  }

  function __104(__0, __1) {
    for (var __2 = __19, __3 = 0, __4 = void 0 === __1 ? 1 / 0 : __1, __5 = 0; __5 < __4; ++__5) {
      var __6, __7 = __16.charCodeAt(__19);
      if ((__6 = __7 >= 97 ? __7 - 97 + 10 : __7 >= 65 ? __7 - 65 + 10 : __7 >= 48 && __7 <= 57 ? __7 - 48 : 1 / 0) >= __0)
        break;
      ++__19, __3 = __3 * __0 + __6;
    }
    return __19 === __2 || void 0 !== __1 && __19 - __2 !== __1 ? null : __3;
  }

  function __105(__0) {
    var __1, __2 = __19,
      __3 = !1,
      __4 = 48 === __16.charCodeAt(__19);
    __0 || null !== __104(10) || __24(__2, 'Invalid number'), 46 === __16.charCodeAt(__19) && (++__19, __104(10), __3 = !0);
    var __5 = __16.charCodeAt(__19);
    (69 === __5 || 101 === __5) && ((43 === (__5 = __16.charCodeAt(++__19)) || 45 === __5) && ++__19, null === __104(10) && __24(__2, 'Invalid number'), __3 = !0), __94(__16.charCodeAt(__19)) && __24(__19, 'Identifier directly after number');
    var __6 = __16.slice(__2, __19);
    __3 ? __1 = parseFloat(__6) : __4 && 1 !== __6.length ? /[89]/.test(__6) || __14 ? __24(__2, 'Invalid number') : __1 = parseInt(__6, 8) : __1 = parseInt(__6, 10), __97(__26, __1);
  }

  function __106(__0) {
    var __1 = __104(16, __0);
    return null === __1 && __24(__20, 'Bad character escape sequence'), __1;
  }

  function __107() {
    __15 = !1;
    for (var __0, __1 = !0, __2 = __19;;) {
      var __3 = __16.charCodeAt(__19);
      if (__95(__3))
        __15 && (__0 += __16.charAt(__19)), ++__19;
      else if (92 === __3) {
        __15 || (__0 = __16.slice(__2, __19)), __15 = !0, 117 !== __16.charCodeAt(++__19) && __24(__19, 'Expecting Unicode escape sequence \\uXXXX'), ++__19;
        var __4 = __106(4),
          __5 = String.fromCharCode(__4);
        __5 || __24(__19 - 1, 'Invalid Unicode escape'), (__1 ? __94(__4) : __95(__4)) || __24(__19 - 4, 'Invalid Unicode escape'), __0 += __5;
      } else
        break;
      __1 = !1;
    }
    return __15 ? __0 : __16.slice(__2, __19);
  }

  function __108() {
    var __0 = __107(),
      __1 = __29;
    !__15 && __87(__0) && (__1 = __56[__0]), __97(__1, __0);
  }

  function __109() {
    __22 = __20, __23 = __21, __11 = __5, __101();
  }

  function __110(__0) {
    if (__14 = __0, __19 = __20, __1.locations)
      for (; __19 < __10;)
        __10 = __16.lastIndexOf('\n', __10 - 2) + 1, --__9;
    __100(), __101();
  }

  function __111() {
    this.type = null, this.start = __20, this.end = null;
  }

  function __112() {
    this.start = __4, this.end = null, __3 && (this.source = __3);
  }

  function __113() {
    var __0 = new __111();
    return __1.locations && (__0.loc = new __112()), __1.directSourceFile && (__0.sourceFile = __1.directSourceFile), __1.ranges && (__0.range = [
      __20,
      0
    ]), __0;
  }

  function __114(__0) {
    var __2 = new __111();
    return __2.start = __0.start, __1.locations && (__2.loc = new __112(), __2.loc.start = __0.loc.start), __1.ranges && (__2.range = [
      __0.range[0],
      0
    ]), __2;
  }

  function __115(__0, __2) {
    return __0.type = __2, __0.end = __23, __1.locations && (__0.loc.end = __11), __1.ranges && (__0.range[1] = __23), __0;
  }

  function __116(__0) {
    return 'ExpressionStatement' === __0.type && 'Literal' === __0.expression.type && 'use strict' === __0.expression.value;
  }

  function __117(__0) {
    return __6 === __0 && (__109(), !0);
  }

  function __118() {
    return !__1.strictSemicolons && (__6 === __30 || __6 === __60 || __92.test(__16.slice(__23, __20)));
  }

  function __119() {
    __117(__64) || __118() || tn();
  }

  function __120(__0) {
    __6 === __0 ? __109() : tn();
  }

  function __121() {
    __24(__20, 'Unexpected token');
  }

  function __122(__0) {
    'Identifier' !== __0.type && 'MemberExpression' !== __0.type && __24(__0.start, 'Assigning to rvalue'), __14 && 'Identifier' === __0.type && __86(__0.name) && __24(__0.start, 'Assigning to ' + __0.name + ' in strict mode');
  }
  var __123 = {
      kind: 'loop'
    },
    __124 = {
      kind: 'switch'
    };

  function __125() {
    (__6 === __68 || __6 === __70 && '/=' === __7) && __101(!0);
    var __0, __2, __3 = __6,
      __4 = __113();
    switch (__3) {
      case __31:
      case __34:
        __109();
        var __5 = __3 === __31;
        __117(__64) || __118() ? __4.label = null : __6 !== __29 ? __121() : (__4.label = tI(), __119());
        for (var __8 = 0; __8 < __13.length; ++__8) {
          var __9 = __13[__8];
          if ((null === __4.label || __9.name === __4.label.name) && (null !== __9.kind && (__5 || 'loop' === __9.kind) || __4.label && __5))
            break;
        }
        return __8 === __13.length && __24(__4.start, 'Unsyntactic ' + __3.keyword), __115(__4, __5 ? 'BreakStatement' : 'ContinueStatement');
      case __35:
        return __109(), __119(), __115(__4, 'DebuggerStatement');
      case __37:
        return __109(), __13.push(__123), __4.body = __125(), __13.pop(), __120(__48), __4.test = tp(), __119(), __115(__4, 'DoWhileStatement');
      case __40:
        if (__109(), __13.push(__123), __120(__61), __6 === __64)
          return tc(__4, null);
        if (__6 === __47) {
          var __10 = __113();
          if (__109(), th(__10, !0), __115(__10, 'VariableDeclaration'), 1 === __10.declarations.length && __117(__55))
            return tl(__4, __10);
          return tc(__4, __10);
        }
        var __10 = tf(!1, !0);
        if (__117(__55))
          return __122(__10), tl(__4, __10);
        return tc(__4, __10);
      case __41:
        return __109(), tb(__4, !0);
      case __42:
        return __109(), __4.test = tp(), __4.consequent = __125(), __4.alternate = __117(__38) ? __125() : null, __115(__4, 'IfStatement');
      case __43:
        return __12 || __1.allowReturnOutsideFunction || __24(__20, '\'return\' outside of function'), __109(), __117(__64) || __118() ? __4.argument = null : (__4.argument = tf(), __119()), __115(__4, 'ReturnStatement');
      case __44:
        for (__109(), __4.discriminant = tp(), __4.cases = [], __120(__59), __13.push(__124); __6 !== __60;)
          if (__6 === __32 || __6 === __36) {
            var __11 = __6 === __32;
            __0 && __115(__0, 'SwitchCase'), __4.cases.push(__0 = __113()), __0.consequent = [], __109(), __11 ? __0.test = tf() : (__2 && __24(__22, 'Multiple default clauses'), __2 = !0, __0.test = null), __120(__65);
          } else
            __0 || __121(), __0.consequent.push(__125());
        return __0 && __115(__0, 'SwitchCase'), __109(), __13.pop(), __115(__4, 'SwitchStatement');
      case __45:
        return __109(), __92.test(__16.slice(__23, __20)) && __24(__23, 'Illegal newline after throw'), __4.argument = tf(), __119(), __115(__4, 'ThrowStatement');
      case __46:
        if (__109(), __4.block = tu(), __4.handler = null, __6 === __33) {
          var __15 = __113();
          __109(), __120(__61), __15.param = tI(), __14 && __86(__15.param.name) && __24(__15.param.start, 'Binding ' + __15.param.name + ' in strict mode'), __120(__62), __15.body = tu(), __4.handler = __115(__15, 'CatchClause');
        }
        return __4.finalizer = __117(__39) ? tu() : null, __4.handler || __4.finalizer || __24(__4.start, 'Missing catch or finally clause'), __115(__4, 'TryStatement');
      case __47:
        return __109(), th(__4), __119(), __115(__4, 'VariableDeclaration');
      case __48:
        return __109(), __4.test = tp(), __13.push(__123), __4.body = __125(), __13.pop(), __115(__4, 'WhileStatement');
      case __49:
        return __14 && __24(__20, '\'with\' in strict mode'), __109(), __4.object = tp(), __4.body = __125(), __115(__4, 'WithStatement');
      case __59:
        return tu();
      case __64:
        return __109(), __115(__4, 'EmptyStatement');
      default:
        var __17 = __7,
          __18 = tf();
        if (!(__3 === __29 && 'Identifier' === __18.type && __117(__65)))
          return __4.expression = __18, __119(), __115(__4, 'ExpressionStatement');
        for (var __8 = 0; __8 < __13.length; ++__8)
          __13[__8].name === __17 && __24(__18.start, 'Label \'' + __17 + '\' is already declared');
        var __19 = __6.isLoop ? 'loop' : __6 === __44 ? 'switch' : null;
        return __13.push({
          name: __17,
          kind: __19
        }), __4.body = __125(), __13.pop(), __4.label = __18, __115(__4, 'LabeledStatement');
    }
  }

  function __126() {
    __120(__61);
    var __0 = tf();
    return __120(__62), __0;
  }

  function __127(__0) {
    var __1, __2 = __113(),
      __3 = !0,
      __4 = !1;
    for (__2.body = [], __120(__59); !__117(__60);) {
      var __5 = __125();
      __2.body.push(__5), __3 && __0 && __116(__5) && (__1 = __4, __110(__4 = !0)), __3 = !1;
    }
    return __4 && !__1 && __110(!1), __115(__2, 'BlockStatement');
  }

  function __128(__0, __1) {
    return __0.init = __1, __120(__64), __0.test = __6 === __64 ? null : tf(), __120(__64), __0.update = __6 === __62 ? null : tf(), __120(__62), __0.body = __125(), __13.pop(), __115(__0, 'ForStatement');
  }

  function __129(__0, __1) {
    return __0.left = __1, __0.right = tf(), __120(__62), __0.body = __125(), __13.pop(), __115(__0, 'ForInStatement');
  }

  function __130(__0, __1) {
    for (__0.declarations = [], __0.kind = 'var';;) {
      var __2 = __113();
      if (__2.id = tI(), __14 && __86(__2.id.name) && __24(__2.id.start, 'Binding ' + __2.id.name + ' in strict mode'), __2.init = __117(__69) ? tf(!0, __1) : null, __0.declarations.push(__115(__2, 'VariableDeclarator')), !__117(__63))
        break;
    }
  }

  function __131(__0, __1) {
    var __2 = td(__1);
    if (!__0 && __6 === __63) {
      var __3 = __114(__2);
      for (__3.expressions = [__2]; __117(__63);)
        __3.expressions.push(td(__1));
      return __115(__3, 'SequenceExpression');
    }
    return __2;
  }

  function __132(__0) {
    var __1 = function __0(__1) {
      var __2, __3 = (__2 = __1, function __0(__1, __2, __3) {
        var __4 = __6.binop;
        if (null !== __4 && (!__3 || __6 !== __55) && __4 > __2) {
          var __5 = __114(__1);
          __5.left = __1, __5.operator = __7;
          var __8 = __6;
          __109(), __5.right = __0(tE(), __4, __3);
          var __9 = __115(__5, __8 === __73 || __8 === __74 ? 'LogicalExpression' : 'BinaryExpression');
          return __0(__9, __2, __3);
        }
        return __1;
      }(tE(), -1, __2));
      if (__117(__67)) {
        var __4 = __114(__3);
        return __4.test = __3, __4.consequent = __131(!0), __120(__65), __4.alternate = __131(!0, __1), __115(__4, 'ConditionalExpression');
      }
      return __3;
    }(__0);
    if (__6.isAssign) {
      var __2 = __114(__1);
      return __2.operator = __7, __2.left = __1, __109(), __2.right = __132(__0), __122(__1), __115(__2, 'AssignmentExpression');
    }
    return __1;
  }

  function __133() {
    if (__6.prefix) {
      var __0 = __113(),
        __1 = __6.isUpdate;
      return __0.operator = __7, __0.prefix = !0, __8 = !0, __109(), __0.argument = __133(), __1 ? __122(__0.argument) : __14 && 'delete' === __0.operator && 'Identifier' === __0.argument.type && __24(__0.start, 'Deleting local variable in strict mode'), __115(__0, __1 ? 'UpdateExpression' : 'UnaryExpression');
    }
    for (var __2 = t$(ty()); __6.postfix && !__118();) {
      var __0 = __114(__2);
      __0.operator = __7, __0.prefix = !1, __0.argument = __2, __122(__2), __109(), __2 = __115(__0, 'UpdateExpression');
    }
    return __2;
  }

  function __134(__0, __1) {
    var __2;
    return __117(__66) ? ((__2 = __114(__0)).object = __0, __2.property = tI(!0), __2.computed = !1, __134(__115(__2, 'MemberExpression'), __1)) : __117(__57) ? ((__2 = __114(__0)).object = __0, __2.property = __131(), __2.computed = !0, __120(__58), __134(__115(__2, 'MemberExpression'), __1)) : !__1 && __117(__61) ? ((__2 = __114(__0)).callee = __0, __2.arguments = tR(__62, !1), __134(__115(__2, 'CallExpression'), __1)) : __0;
  }

  function __135() {
    switch (__6) {
      case __51:
        return __0 = __113(), __109(), __115(__0, 'ThisExpression');
      case __29:
        return tI();
      case __26:
      case __28:
      case __27:
        return (__0 = __113()).value = __7, __0.raw = __16.slice(__20, __21), __109(), __115(__0, 'Literal');
      case __52:
      case __53:
      case __54:
        return (__0 = __113()).value = __6.atomValue, __0.raw = __6.keyword, __109(), __115(__0, 'Literal');
      case __61:
        var __0, __2, __3 = __4,
          __8 = __20;
        __109();
        var __9 = __131();
        return __9.start = __8, __9.end = __21, __1.locations && (__9.loc.start = __3, __9.loc.end = __5), __1.ranges && (__9.range = [
          __8,
          __21
        ]), __120(__62), __9;
      case __57:
        return __0 = __113(), __109(), __0.elements = tR(__58, !0, !0), __115(__0, 'ArrayExpression');
      case __59:
        return function __0() {
          var __2 = __113(),
            __3 = !0,
            __4 = !1;
          for (__2.properties = [], __109(); !__117(__60);) {
            if (__3)
              __3 = !1;
            else if (__120(__63), __1.allowTrailingCommas && __117(__60))
              break;
            var __5, __7 = {
                key: tv()
              },
              __8 = !1;
            if (__117(__65) ? (__7.value = __131(!0), __5 = __7.kind = 'init') : 'Identifier' === __7.key.type && ('get' === __7.key.name || 'set' === __7.key.name) ? (__8 = __4 = !0, __5 = __7.kind = __7.key.name, __7.key = tv(), __6 !== __61 && __121(), __7.value = tb(__113(), !1)) : __121(), 'Identifier' === __7.key.type && (__14 || __4))
              for (var __9 = 0; __9 < __2.properties.length; ++__9) {
                var __10 = __2.properties[__9];
                if (__10.key.name === __7.key.name) {
                  var __11 = __5 === __10.kind || __8 && 'init' === __10.kind || 'init' === __5 && ('get' === __10.kind || 'set' === __10.kind);
                  __11 && !__14 && 'init' === __5 && 'init' === __10.kind && (__11 = !1), __11 && __24(__7.key.start, 'Redefinition of property');
                }
              }
            __2.properties.push(__7);
          }
          return __115(__2, 'ObjectExpression');
        }();
      case __41:
        return __0 = __113(), __109(), tb(__0, !1);
      case __50:
        return __2 = __113(), __109(), __2.callee = __134(__135(), !0), __2.arguments = __117(__61) ? tR(__62, !1) : __25, __115(__2, 'NewExpression');
    }
    __121();
  }

  function __136() {
    return __6 === __26 || __6 === __28 ? __135() : tI(!0);
  }

  function __137(__0, __1) {
    __6 === __29 ? __0.id = tI() : __1 ? __121() : __0.id = null, __0.params = [];
    var __2 = !0;
    for (__120(__61); !__117(__62);)
      __2 ? __2 = !1 : __120(__63), __0.params.push(tI());
    var __3 = __12,
      __4 = __13;
    if (__12 = !0, __13 = [], __0.body = __127(!0), __12 = __3, __13 = __4, __14 || __0.body.body.length && __116(__0.body.body[0]))
      for (var __5 = __0.id ? -1 : 0; __5 < __0.params.length; ++__5) {
        var __7 = __5 < 0 ? __0.id : __0.params[__5];
        if ((__85(__7.name) || __86(__7.name)) && __24(__7.start, 'Defining \'' + __7.name + '\' in strict mode'), __5 >= 0)
          for (var __8 = 0; __8 < __5; ++__8)
            __7.name === __0.params[__8].name && __24(__7.start, 'Argument name clash in strict mode');
      }
    return __115(__0, __1 ? 'FunctionDeclaration' : 'FunctionExpression');
  }

  function __138(__0, __2, __3) {
    for (var __4 = [], __5 = !0; !__117(__0);) {
      if (__5)
        __5 = !1;
      else if (__120(__63), __2 && __1.allowTrailingCommas && __117(__0))
        break;
      __4.push(__3 && __6 === __63 ? null : __131(!0));
    }
    return __4;
  }

  function __139(__0) {
    var __2 = __113();
    return __0 && 'everywhere' === __1.forbidReserved && (__0 = !1), __6 === __29 ? (!__0 && (__1.forbidReserved && __84(__7) || __14 && __85(__7)) && -1 === __16.slice(__20, __21).indexOf('\\') && __24(__20, 'The keyword \'' + __7 + '\' is reserved'), __2.name = __7) : __0 && __6.keyword ? __2.name = __6.keyword : __121(), __8 = !1, __109(), __115(__2, 'Identifier');
  }
});
var __140 = function(__0, __1) {
  'string' == typeof __0 && (__0 = this.parse_(__0, 'code'));
  var __2, __3 = __0.constructor;
  this.newNode = function() {
    return new __3({
      options: {}
    });
  };
  var __4 = this.newNode();
  for (var __5 in __0)
    __4[__5] = 'body' === __5 ? __0[__5].slice() : __0[__5];
  this.ast = __4, this.tasks = [], this.initFunc_ = __1, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var __6 = /^step([A-Z]\w*)$/;
  for (var __7 in this)
    'function' == typeof this[__7] && (__2 = __7.match(__6)) && (this.stepFunctions_[__2[1]] = this[__7].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join('\n'), 'polyfills'), this.polyfills_ = void 0, __140.stripLocations_(this.ast, void 0, void 0);
  var __8 = new __140.State(this.ast, this.globalScope);
  __8.done = !1, this.stateStack = [__8], this.run(), this.value = void 0, this.ast = __4, (__8 = new __140.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = __8;
};
__140.Completion = {
  NORMAL: 0,
  BREAK: 1,
  CONTINUE: 2,
  RETURN: 3,
  THROW: 4
}, __140.Status = {
  DONE: 0,
  STEP: 1,
  TASK: 2,
  ASYNC: 3
}, __140.PARSE_OPTIONS = {
  locations: !0,
  ecmaVersion: 5
}, __140.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, __140.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, __140.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, __140.VARIABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, __140.STEP_ERROR = {
  STEP_ERROR: !0
}, __140.SCOPE_REFERENCE = {
  SCOPE_REFERENCE: !0
}, __140.VALUE_IN_DESCRIPTOR = {
  VALUE_IN_DESCRIPTOR: !0
}, __140.REGEXP_TIMEOUT = {
  REGEXP_TIMEOUT: !0
}, __140.toStringCycles_ = [], __140.vm = null, __140.currentInterpreter_ = null, __140.nativeGlobal = 'undefined' == typeof globalThis ? this || window : globalThis, __140.WORKER_CODE = [
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
], __140.legalArrayLength = function(__0) {
  var __1 = __0 >>> 0;
  return __1 === Number(__0) ? __1 : NaN;
}, __140.legalArrayIndex = function(__0) {
  var __1 = __0 >>> 0;
  return String(__1) === String(__0) && 4294967295 !== __1 ? __1 : NaN;
}, __140.stripLocations_ = function(__0, __1, __2) {
  for (var __3 in (__1 ? __0.start = __1 : delete __0.start, __2 ? __0.end = __2 : delete __0.end, __0))
    if (__0[__3] !== __0.loc && __0.hasOwnProperty(__3)) {
      var __4 = __0[__3];
      __4 && 'object' == typeof __4 && __140.stripLocations_(__4, __1, __2);
    }
}, __140.prototype.REGEXP_MODE = 2, __140.prototype.REGEXP_THREAD_TIMEOUT = 1000, __140.prototype.POLYFILL_TIMEOUT = 1000, __140.prototype.getterStep_ = !1, __140.prototype.setterStep_ = !1, __140.prototype.appendCodeNumber_ = 0, __140.prototype.taskCodeNumber_ = 0, __140.prototype.parse_ = function(__0, __1) {
  var __2 = {};
  for (var __3 in __140.PARSE_OPTIONS)
    __2[__3] = __140.PARSE_OPTIONS[__3];
  return __2.sourceFile = __1, __140.nativeGlobal.acorn.parse(__0, __2);
}, __140.prototype.appendCode = function(__0) {
  var __1 = this.stateStack[0];
  if (!__1 || 'Program' !== __1.node.type)
    throw Error('Expecting original AST to start with a Program node');
  if ('string' == typeof __0 && (__0 = this.parse_(__0, 'appendCode' + this.appendCodeNumber_++)), !__0 || 'Program' !== __0.type)
    throw Error('Expecting new AST to start with a Program node');
  this.populateScope_(__0, __1.scope), Array.prototype.push.apply(__1.node.body, __0.body), __1.node.body.variableCache_ = null, __1.done = !1;
}, __140.prototype.step = function() {
  var __0, __1 = this.stateStack;
  do {
    var __2 = __1[__1.length - 1];
    if (this.paused_)
      break;
    if (!__2 || 'Program' === __2.node.type && __2.done) {
      if (!this.tasks.length)
        return !1;
      if (!(__2 = this.nextTask_()))
        break;
    }
    var __3 = __2.node,
      __4 = __140.currentInterpreter_;
    __140.currentInterpreter_ = this;
    try {
      var __5 = this.stepFunctions_[__3.type](__1, __2, __3);
    } catch (__6) {
      if (__6 !== __140.STEP_ERROR)
        throw this.value !== __6 && (this.value = void 0), __6;
    } finally {
      __140.currentInterpreter_ = __4;
    }
    if (__5 && __1.push(__5), this.getterStep_)
      throw this.value = void 0, Error('Getter not supported in this context');
    if (this.setterStep_)
      throw this.value = void 0, Error('Setter not supported in this context');
    __0 || __3.end || (__0 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!__3.end && __0 > Date.now());
  return !0;
}, __140.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, __140.prototype.getStatus = function() {
  if (this.paused_)
    return __140.Status.ASYNC;
  var __0 = this.stateStack,
    __1 = __0[__0.length - 1];
  if (__1 && ('Program' !== __1.node.type || !__1.done))
    return __140.Status.STEP;
  var __2 = this.tasks[0];
  return __2 ? __2.time > Date.now() ? __140.Status.TASK : __140.Status.STEP : (0, __140.Status.DONE);
}, __140.prototype.initGlobal = function(__0) {
  this.setProperty(__0, 'NaN', NaN, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'Infinity', 1 / 0, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'undefined', void 0, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'window', __0, __140.READONLY_DESCRIPTOR), this.setProperty(__0, 'this', __0, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'self', __0), this.OBJECT_PROTO = new __140.Object(null), this.FUNCTION_PROTO = new __140.Object(this.OBJECT_PROTO), this.initFunction(__0), this.initObject(__0), __0.proto = this.OBJECT_PROTO, this.setProperty(__0, 'constructor', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR), this.initArray(__0), this.initString(__0), this.initBoolean(__0), this.initNumber(__0), this.initDate(__0), this.initRegExp(__0), this.initError(__0), this.initMath(__0), this.initJSON(__0);
  var __1, __2 = this,
    __3 = this.createNativeFunction(function(__0) {
      throw EvalError('Can\'t happen');
    }, !1);
  __3.eval = !0, this.setProperty(__0, 'eval', __3, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'parseInt', this.createNativeFunction(parseInt, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'parseFloat', this.createNativeFunction(parseFloat, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'isNaN', this.createNativeFunction(isNaN, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'isFinite', this.createNativeFunction(isFinite, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __4 = [
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
    ], __5 = 0; __5 < __4.length; __5++)
    __1 = function(__0) {
      return function(__1) {
        try {
          return __0(__1);
        } catch (__3) {
          __2.throwException(__2.URI_ERROR, __3.message);
        }
      };
    }(__4[__5][0]), this.setProperty(__0, __4[__5][1], this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR);
  __1 = function __0(__1) {
    return __2.createTask_(!1, arguments);
  }, this.setProperty(__0, 'setTimeout', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return __2.createTask_(!0, arguments);
  }, this.setProperty(__0, 'setInterval', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    __2.deleteTask_(__1);
  }, this.setProperty(__0, 'clearTimeout', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    __2.deleteTask_(__1);
  }, this.setProperty(__0, 'clearInterval', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, __0);
}, __140.prototype.functionCodeNumber_ = 0, __140.prototype.initFunction = function(__0) {
  var __1, __2 = this,
    __3 = /^[A-Za-z_$][\w$]*$/;
  __1 = function __0(__1) {
    if (arguments.length)
      var __4 = String(arguments[arguments.length - 1]);
    else
      var __4 = '';
    var __5 = Array.prototype.slice.call(arguments, 0, -1).join(',').trim();
    if (__5) {
      for (var __6 = __5.split(/\s*,\s*/), __7 = 0; __7 < __6.length; __7++) {
        var __8 = __6[__7];
        __3.test(__8) || __2.throwException(__2.SYNTAX_ERROR, 'Invalid function argument: ' + __8);
      }
      __5 = __6.join(', ');
    }
    try {
      var __9 = __2.parse_('(function(' + __5 + ') {' + __4 + '})', 'function' + __2.functionCodeNumber_++);
    } catch (__10) {
      __2.throwException(__2.SYNTAX_ERROR, 'Invalid code: ' + __10.message);
    }
    1 !== __9.body.length && __2.throwException(__2.SYNTAX_ERROR, 'Invalid code in function body');
    var __11 = __9.body[0].expression;
    return __2.createFunction(__11, __2.globalScope, 'anonymous');
  }, this.FUNCTION = this.createNativeFunction(__1, !0), this.setProperty(__0, 'Function', this.FUNCTION, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, 'prototype', this.FUNCTION_PROTO, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, 'constructor', this.FUNCTION, __140.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, 'length', 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = 'Function', __1 = function __0(__1, __3, __4) {
    var __5 = __2.stateStack[__2.stateStack.length - 1];
    __5.func_ = __1, __5.funcThis_ = __3, __5.arguments_ = [], null != __4 && (__4 instanceof __140.Object ? __5.arguments_ = Array.from(__4.properties) : __2.throwException(__2.TYPE_ERROR, 'CreateListFromArrayLike called on non-object')), __5.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'apply', __1), this.polyfills_.push('(function() {', 'var apply_ = Function.prototype.apply;', 'Function.prototype.apply = function apply(thisArg, args) {', 'var a2 = [];', 'for (var i = 0; i < args.length; i++) {', 'a2[i] = args[i];', '}', 'return apply_(this, thisArg, a2);', '};', '})();'), __1 = function __0(__1) {
    var __3 = __2.stateStack[__2.stateStack.length - 1];
    __3.func_ = this, __3.funcThis_ = __1, __3.arguments_ = [];
    for (var __4 = 1; __4 < arguments.length; __4++)
      __3.arguments_.push(arguments[__4]);
    __3.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'call', __1), this.polyfills_.push('Object.defineProperty(Function.prototype, \'bind\',', '{configurable: true, writable: true, value:', 'function bind(oThis) {', 'if (typeof this !== \'function\') {', 'throw TypeError(\'What is trying to be bound is not callable\');', '}', 'var aArgs   = Array.prototype.slice.call(arguments, 1),', 'fToBind = this,', 'fNOP    = function() {},', 'fBound  = function() {', 'return fToBind.apply(this instanceof fNOP', '? this', ': oThis,', 'aArgs.concat(Array.prototype.slice.call(arguments)));', '};', 'if (this.prototype) {', 'fNOP.prototype = this.prototype;', '}', 'fBound.prototype = new fNOP();', 'return fBound;', '}', '});', ''), __1 = function __0() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'toString', __1), this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'valueOf', __1), this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initObject = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1) {
    if (null == __1)
      return __2.calledWithNew() ? this : __2.createObjectProto(__2.OBJECT_PROTO);
    if (!(__1 instanceof __140.Object)) {
      var __3 = __2.createObjectProto(__2.getPrototype(__1));
      return __3.data = __1, __3;
    }
    return __1;
  }, this.OBJECT = this.createNativeFunction(__1, !0), this.setProperty(this.OBJECT, 'prototype', this.OBJECT_PROTO, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, 'constructor', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'Object', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR);
  var __3 = function(__0) {
    null == __0 && __2.throwException(__2.TYPE_ERROR, 'Cannot convert \'' + __0 + '\' to object');
  };
  __1 = function __0(__1) {
    __3(__1);
    var __4 = __1 instanceof __140.Object ? __1.properties : __1;
    return __2.nativeToPseudo(Object.getOwnPropertyNames(__4));
  }, this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return __3(__1), __1 instanceof __140.Object && (__1 = __1.properties), __2.nativeToPseudo(Object.keys(__1));
  }, this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return null === __1 ? __2.createObjectProto(null) : (__1 instanceof __140.Object || __2.throwException(__2.TYPE_ERROR, 'Object prototype may only be an Object or null, not ' + __1), __2.createObjectProto(__1));
  }, this.setProperty(this.OBJECT, 'create', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var create_ = Object.create;', 'Object.create = function create(proto, props) {', 'var obj = create_(proto);', 'props && Object.defineProperties(obj, props);', 'return obj;', '};', '})();', ''), __1 = function __0(__1, __3, __4) {
    return __3 = String(__3), __1 instanceof __140.Object || __2.throwException(__2.TYPE_ERROR, 'Object.defineProperty called on non-object: ' + __1), __4 instanceof __140.Object || __2.throwException(__2.TYPE_ERROR, 'Property description must be an object'), !__1.preventExtensions || __3 in __1.properties || __2.throwException(__2.TYPE_ERROR, 'Can\'t define property \'' + __3 + '\', object is not extensible'), __2.setProperty(__1, __3, __140.VALUE_IN_DESCRIPTOR, __4.properties), __1;
  }, this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var defineProperty_ = Object.defineProperty;', 'Object.defineProperty = function defineProperty(obj, prop, d1) {', 'var d2 = {};', 'if (\'configurable\' in d1) d2.configurable = d1.configurable;', 'if (\'enumerable\' in d1) d2.enumerable = d1.enumerable;', 'if (\'writable\' in d1) d2.writable = d1.writable;', 'if (\'value\' in d1) d2.value = d1.value;', 'if (\'get\' in d1) d2.get = d1.get;', 'if (\'set\' in d1) d2.set = d1.set;', 'return defineProperty_(obj, prop, d2);', '};', '})();', 'Object.defineProperty(Object, \'defineProperties\',', '{configurable: true, writable: true, value:', 'function defineProperties(obj, props) {', 'var keys = Object.keys(props);', 'for (var i = 0; i < keys.length; i++) {', 'Object.defineProperty(obj, keys[i], props[keys[i]]);', '}', 'return obj;', '}', '});', ''), __1 = function __0(__1, __3) {
    if (__1 instanceof __140.Object || __2.throwException(__2.TYPE_ERROR, 'Object.getOwnPropertyDescriptor called on non-object: ' + __1), (__3 = String(__3)) in __1.properties) {
      var __4 = Object.getOwnPropertyDescriptor(__1.properties, __3),
        __5 = __1.getter[__3],
        __6 = __1.setter[__3],
        __7 = __2.createObjectProto(__2.OBJECT_PROTO);
      return __5 || __6 ? (__2.setProperty(__7, 'get', __5), __2.setProperty(__7, 'set', __6)) : (__2.setProperty(__7, 'value', __4.value), __2.setProperty(__7, 'writable', __4.writable)), __2.setProperty(__7, 'configurable', __4.configurable), __2.setProperty(__7, 'enumerable', __4.enumerable), __7;
    }
  }, this.setProperty(this.OBJECT, 'getOwnPropertyDescriptor', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return __3(__1), __2.getPrototype(__1);
  }, this.setProperty(this.OBJECT, 'getPrototypeOf', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return Boolean(__1) && !__1.preventExtensions;
  }, this.setProperty(this.OBJECT, 'isExtensible', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return __1 instanceof __140.Object && (__1.preventExtensions = !0), __1;
  }, this.setProperty(this.OBJECT, 'preventExtensions', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, 'toString', __140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'toLocaleString', __140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'valueOf', __140.Object.prototype.valueOf), __1 = function __0(__1) {
    return (__3(this), this instanceof __140.Object) ? String(__1) in this.properties : this.hasOwnProperty(__1);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'hasOwnProperty', __1), __1 = function __0(__1) {
    return (__3(this), this instanceof __140.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, __1) : this.propertyIsEnumerable(__1);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'propertyIsEnumerable', __1), __1 = function __0(__1) {
    for (;;) {
      if (!(__1 = __2.getPrototype(__1)))
        return !1;
      if (__1 === this)
        return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, 'isPrototypeOf', __1);
}, __140.prototype.initArray = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1) {
    if (__2.calledWithNew())
      var __3 = this;
    else
      var __3 = __2.createArray();
    var __4 = arguments[0];
    if (1 === arguments.length && 'number' == typeof __4)
      isNaN(__140.legalArrayLength(__4)) && __2.throwException(__2.RANGE_ERROR, 'Invalid array length: ' + __4), __3.properties.length = __4;
    else {
      for (var __5 = 0; __5 < arguments.length; __5++)
        __3.properties[__5] = arguments[__5];
      __3.properties.length = __5;
    }
    return __3;
  }, this.ARRAY = this.createNativeFunction(__1, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(__0, 'Array', this.ARRAY, __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    return __1 && 'Array' === __1.class;
  }, this.setProperty(this.ARRAY, 'isArray', this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = 'Array', this.polyfills_.push('(function() {', 'function createArrayMethod_(name, func) {', 'Object.defineProperty(func, \'name\', {value: name});', 'Object.defineProperty(Array.prototype, name,', '{configurable: true, writable: true, value: func});', '}', 'createArrayMethod_(\'pop\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'len--;', 'var x = o[len];', 'delete o[len];', 'o.length = len;', 'return x;', '}', ');', 'createArrayMethod_(\'push\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'for (var i = 0; i < arguments.length; i++) {', 'o[len] = arguments[i];', 'len++;', '}', 'o.length = len;', 'return len;', '}', ');', 'createArrayMethod_(\'shift\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'var value = o[0];', 'for (var i = 0; i < len - 1; i++) {', 'if ((i + 1) in o) {', 'o[i] = o[i + 1];', '} else {', 'delete o[i];', '}', '}', 'delete o[i];', 'o.length = len - 1;', 'return value;', '}', ');', 'createArrayMethod_(\'unshift\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'len = 0;', '}', 'for (var i = len - 1; i >= 0; i--) {', 'if (i in o) {', 'o[i + arguments.length] = o[i];', '} else {', 'delete o[i + arguments.length];', '}', '}', 'for (var i = 0; i < arguments.length; i++) {', 'o[i] = arguments[i];', '}', 'return (o.length = len + arguments.length);', '}', ');', 'createArrayMethod_(\'reverse\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 2) {', 'return o;', '}', 'for (var i = 0; i < len / 2 - 0.5; i++) {', 'var x = o[i];', 'var hasX = i in o;', 'if ((len - i - 1) in o) {', 'o[i] = o[len - i - 1];', '} else {', 'delete o[i];', '}', 'if (hasX) {', 'o[len - i - 1] = x;', '} else {', 'delete o[len - i - 1];', '}', '}', 'return o;', '}', ');', 'createArrayMethod_(\'indexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var n = fromIndex | 0;', 'if (!len || n >= len) {', 'return -1;', '}', 'var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);', 'while (i < len) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i++;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'lastIndexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len) {', 'return -1;', '}', 'var n = len - 1;', 'if (arguments.length > 1) {', 'n = fromIndex | 0;', 'if (n) {', 'n = (n > 0 || -1) * Math.floor(Math.abs(n));', '}', '}', 'var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);', 'while (i >= 0) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i--;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'slice\',', 'function(start, end) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'start = (start >= 0) ? start : Math.max(0, len + start);', 'if (typeof end !== \'undefined\') {', 'if (end !== Infinity) {', 'end |= 0;', '}', 'if (end < 0) {', 'end = len + end;', '} else {', 'end = Math.min(end, len);', '}', '} else {', 'end = len;', '}', 'var size = end - start;', 'var cloned = new Array(size);', 'for (var i = 0; i < size; i++) {', 'if ((start + i) in o) {', 'cloned[i] = o[start + i];', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'splice\',', 'function(start, deleteCount, var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'if (start < 0) {', 'start = Math.max(len + start, 0);', '} else {', 'start = Math.min(start, len);', '}', 'if (arguments.length < 2) {', 'deleteCount = len - start;', '} else {', 'deleteCount |= 0;', 'deleteCount = Math.max(0, Math.min(deleteCount, len - start));', '}', 'var removed = [];', 'for (var i = start; i < start + deleteCount; i++) {', 'if (i in o) {', 'removed.push(o[i]);', '} else {', 'removed.length++;', '}', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = start + deleteCount; i < len - deleteCount; i++) {', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = len - deleteCount; i < len; i++) {', 'delete o[i];', '}', 'len -= deleteCount;', 'if (arguments.length > 2) {', 'var arl = arguments.length - 2;', 'for (var i = len - 1; i >= start; i--) {', 'if (i in o) {', 'o[i + arl] = o[i];', '} else {', 'delete o[i + arl];', '}', '}', 'len += arl;', 'for (var i = 2; i < arguments.length; i++) {', 'o[start + i - 2] = arguments[i];', '}', '}', 'o.length = len;', 'return removed;', '}', ');', 'createArrayMethod_(\'concat\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this);', 'var cloned = [];', 'for (var i = -1; i < arguments.length; i++) {', 'var value = (i === -1) ? o : arguments[i];', 'if (Array.isArray(value)) {', 'for (var j = 0, l = value.length; j < l; j++) {', 'if (j in value) {', 'cloned.push(value[j]);', '} else {', 'cloned.length++;', '}', '}', '} else {', 'cloned.push(value);', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'join\',', 'function(opt_separator) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var sep = typeof opt_separator === \'undefined\' ?', '\',\' : (\'\' + opt_separator);', 'var str = \'\';', 'for (var i = 0; i < len; i++) {', 'if (i && sep) str += sep;', 'str += (o[i] === null || o[i] === undefined) ? \'\' : o[i];', '}', 'return str;', '}', ');', 'createArrayMethod_(\'every\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o && !callback.call(t, o[k], k, o)) return false;', 'k++;', '}', 'return true;', '}', ');', 'createArrayMethod_(\'filter\',', 'function(callback, var_args) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var res = [];', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o) {', 'var val = o[i];', 'if (callback.call(thisArg, val, i, o)) res.push(val);', '}', '}', 'return res;', '}', ');', 'createArrayMethod_(\'forEach\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o) callback.call(t, o[k], k, o);', 'k++;', '}', '}', ');', 'createArrayMethod_(\'map\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'var a = new Array(len);', 'while (k < len) {', 'if (k in o) a[k] = callback.call(t, o[k], k, o);', 'k++;', '}', 'return a;', '}', ');', 'createArrayMethod_(\'reduce\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = 0, value;', 'if (arguments.length === 2) {', 'value = arguments[1];', '} else {', 'while (k < len && !(k in o)) k++;', 'if (k >= len) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k++];', '}', 'for (; k < len; k++) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'reduceRight\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = len - 1, value;', 'if (arguments.length >= 2) {', 'value = arguments[1];', '} else {', 'while (k >= 0 && !(k in o)) k--;', 'if (k < 0) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k--];', '}', 'for (; k >= 0; k--) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'some\',', 'function(callback /*, thisArg*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o && callback.call(thisArg, o[i], i, o)) return true;', '}', 'return false;', '}', ');', 'createArrayMethod_(\'sort\',', 'function(opt_comp) {', 'if (!this) throw TypeError();', 'if (typeof opt_comp !== \'function\') {', 'opt_comp = undefined;', '}', 'for (var i = 0; i < this.length; i++) {', 'var changes = 0;', 'for (var j = 0; j < this.length - i - 1; j++) {', 'if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :', '(String(this[j]) > String(this[j + 1]))) {', 'var swap = this[j];', 'var hasSwap = j in this;', 'if ((j + 1) in this) {', 'this[j] = this[j + 1];', '} else {', 'delete this[j];', '}', 'if (hasSwap) {', 'this[j + 1] = swap;', '} else {', 'delete this[j + 1];', '}', 'changes++;', '}', '}', 'if (!changes) break;', '}', 'return this;', '}', ');', 'createArrayMethod_(\'toLocaleString\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var out = [];', 'for (var i = 0; i < len; i++) {', 'out[i] = (o[i] === null || o[i] === undefined) ? \'\' : o[i].toLocaleString();', '}', 'return out.join(\',\');', '}', ');', '})();', '');
}, __140.prototype.initString = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1) {
    return (__1 = arguments.length ? __140.nativeGlobal.String(__1) : '', __2.calledWithNew()) ? (this.data = __1, this) : __1;
  }, this.STRING = this.createNativeFunction(__1, !0), this.setProperty(__0, 'String', this.STRING, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(String.fromCharCode, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __3 = [
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
    ], __4 = 0; __4 < __3.length; __4++)
    this.setNativeFunctionPrototype(this.STRING, __3[__4], String.prototype[__3[__4]]);
  __1 = function __0(__1, __3, __4) {
    __3 = __2.pseudoToNative(__3), __4 = __2.pseudoToNative(__4);
    try {
      return String(this).localeCompare(__1, __3, __4);
    } catch (__5) {
      __2.throwException(__2.ERROR, 'localeCompare: ' + __5.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, 'localeCompare', __1), __1 = function __0(__1, __3, __4) {
    var __5 = String(this);
    if (__3 = __3 ? Number(__3) : void 0, __2.isa(__1, __2.REGEXP) && (__1 = __1.data, __2.maybeThrowRegExp(__1, __4), 2 === __2.REGEXP_MODE)) {
      if (__140.vm) {
        var __6 = {
            string: __5,
            separator: __1,
            limit: __3
          },
          __7 = __2.vmCall('string.split(separator, limit)', __6, __1, __4);
        __7 !== __140.REGEXP_TIMEOUT && __4(__2.nativeToPseudo(__7));
      } else {
        var __8 = __2.createWorker(),
          __9 = __2.regExpTimeout(__1, __8, __4);
        __8.onmessage = function(__0) {
          clearTimeout(__9), __4(__2.nativeToPseudo(__0.data));
        }, __8.postMessage([
          'split',
          __5,
          __1,
          __3
        ]);
      }
      return;
    }
    var __7 = __5.split(__1, __3);
    __4(__2.nativeToPseudo(__7));
  }, this.setAsyncFunctionPrototype(this.STRING, 'split', __1), __1 = function __0(__1, __3) {
    var __4 = String(this);
    if (__1 = __2.isa(__1, __2.REGEXP) ? __1.data : RegExp(__1), __2.maybeThrowRegExp(__1, __3), 2 === __2.REGEXP_MODE) {
      if (__140.vm) {
        var __5 = {
            string: __4,
            regexp: __1
          },
          __6 = __2.vmCall('string.match(regexp)', __5, __1, __3);
        __6 !== __140.REGEXP_TIMEOUT && __3(__6 && __2.matchToPseudo_(__6));
      } else {
        var __7 = __2.createWorker(),
          __8 = __2.regExpTimeout(__1, __7, __3);
        __7.onmessage = function(__0) {
          clearTimeout(__8), __3(__0.data && __2.matchToPseudo_(__0.data));
        }, __7.postMessage([
          'match',
          __4,
          __1
        ]);
      }
      return;
    }
    var __6 = __4.match(__1);
    __3(__6 && __2.matchToPseudo_(__6));
  }, this.setAsyncFunctionPrototype(this.STRING, 'match', __1), __1 = function __0(__1, __3) {
    var __4 = String(this);
    if (__1 = __2.isa(__1, __2.REGEXP) ? __1.data : RegExp(__1), __2.maybeThrowRegExp(__1, __3), 2 === __2.REGEXP_MODE) {
      if (__140.vm) {
        var __5 = {
            string: __4,
            regexp: __1
          },
          __6 = __2.vmCall('string.search(regexp)', __5, __1, __3);
        __6 !== __140.REGEXP_TIMEOUT && __3(__6);
      } else {
        var __7 = __2.createWorker(),
          __8 = __2.regExpTimeout(__1, __7, __3);
        __7.onmessage = function(__0) {
          clearTimeout(__8), __3(__0.data);
        }, __7.postMessage([
          'search',
          __4,
          __1
        ]);
      }
      return;
    }
    __3(__4.search(__1));
  }, this.setAsyncFunctionPrototype(this.STRING, 'search', __1), __1 = function __0(__1, __3, __4) {
    var __5 = String(this);
    if (__3 = String(__3), __2.isa(__1, __2.REGEXP) && (__1 = __1.data, __2.maybeThrowRegExp(__1, __4), 2 === __2.REGEXP_MODE)) {
      if (__140.vm) {
        var __6 = {
            string: __5,
            substr: __1,
            newSubstr: __3
          },
          __7 = __2.vmCall('string.replace(substr, newSubstr)', __6, __1, __4);
        __7 !== __140.REGEXP_TIMEOUT && __4(__7);
      } else {
        var __8 = __2.createWorker(),
          __9 = __2.regExpTimeout(__1, __8, __4);
        __8.onmessage = function(__0) {
          clearTimeout(__9), __4(__0.data);
        }, __8.postMessage([
          'replace',
          __5,
          __1,
          __3
        ]);
      }
      return;
    }
    __4(__5.replace(__1, __3));
  }, this.setAsyncFunctionPrototype(this.STRING, 'replace', __1), this.polyfills_.push('(function() {', 'var replace_ = String.prototype.replace;', 'String.prototype.replace = function replace(substr, newSubstr) {', 'if (typeof newSubstr !== \'function\') {', 'return replace_.call(this, substr, newSubstr);', '}', 'var str = this;', 'if (substr instanceof RegExp) {', 'var subs = [];', 'var m = substr.exec(str);', 'while (m) {', 'm.push(m.index, str);', 'var inject = newSubstr.apply(null, m);', 'subs.push([m.index, m[0].length, inject]);', 'm = substr.global ? substr.exec(str) : null;', '}', 'for (var i = subs.length - 1; i >= 0; i--) {', 'str = str.substring(0, subs[i][0]) + subs[i][2] + ', 'str.substring(subs[i][0] + subs[i][1]);', '}', '} else {', 'var i = str.indexOf(substr);', 'if (i !== -1) {', 'var inject = newSubstr(str.substr(i, substr.length), i, str);', 'str = str.substring(0, i) + inject + ', 'str.substring(i + substr.length);', '}', '}', 'return str;', '};', '})();', '');
}, __140.prototype.initBoolean = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1) {
    return (__1 = __140.nativeGlobal.Boolean(__1), __2.calledWithNew()) ? (this.data = __1, this) : __1;
  }, this.BOOLEAN = this.createNativeFunction(__1, !0), this.setProperty(__0, 'Boolean', this.BOOLEAN, __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initNumber = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1) {
    return (__1 = arguments.length ? __140.nativeGlobal.Number(__1) : 0, __2.calledWithNew()) ? (this.data = __1, this) : __1;
  }, this.NUMBER = this.createNativeFunction(__1, !0), this.setProperty(__0, 'Number', this.NUMBER, __140.NONENUMERABLE_DESCRIPTOR);
  for (var __3 = [
      'MAX_VALUE',
      'MIN_VALUE',
      'NaN',
      'NEGATIVE_INFINITY',
      'POSITIVE_INFINITY'
    ], __4 = 0; __4 < __3.length; __4++)
    this.setProperty(this.NUMBER, __3[__4], Number[__3[__4]], __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  __1 = function __0(__1) {
    try {
      return Number(this).toExponential(__1);
    } catch (__3) {
      __2.throwException(__2.ERROR, __3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toExponential', __1), __1 = function __0(__1) {
    try {
      return Number(this).toFixed(__1);
    } catch (__3) {
      __2.throwException(__2.ERROR, __3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toFixed', __1), __1 = function __0(__1) {
    try {
      return Number(this).toPrecision(__1);
    } catch (__3) {
      __2.throwException(__2.ERROR, __3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toPrecision', __1), __1 = function __0(__1) {
    try {
      return Number(this).toString(__1);
    } catch (__3) {
      __2.throwException(__2.ERROR, __3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toString', __1), __1 = function __0(__1, __3) {
    __1 = __1 ? __2.pseudoToNative(__1) : void 0, __3 = __3 ? __2.pseudoToNative(__3) : void 0;
    try {
      return Number(this).toLocaleString(__1, __3);
    } catch (__4) {
      __2.throwException(__2.ERROR, 'toLocaleString: ' + __4.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toLocaleString', __1);
}, __140.prototype.initDate = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1, __3) {
    if (!__2.calledWithNew())
      return __140.nativeGlobal.Date();
    var __4 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(__140.nativeGlobal.Date, __4))(), this;
  }, this.DATE = this.createNativeFunction(__1, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(__0, 'Date', this.DATE, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'now', this.createNativeFunction(Date.now, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'parse', this.createNativeFunction(Date.parse, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'UTC', this.createNativeFunction(Date.UTC, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __3 = [
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
    ], __4 = 0; __4 < __3.length; __4++)
    __1 = function(__0) {
      return function(__1) {
        var __3 = this.data;
        __3 instanceof Date || __2.throwException(__2.TYPE_ERROR, __0 + ' not called on a Date');
        for (var __4 = [], __5 = 0; __5 < arguments.length; __5++)
          __4[__5] = __2.pseudoToNative(arguments[__5]);
        return __3[__0].apply(__3, __4);
      };
    }(__3[__4]), this.setNativeFunctionPrototype(this.DATE, __3[__4], __1);
  __1 = function __0() {
    try {
      return this.data.toISOString();
    } catch (__1) {
      __2.throwException(__2.RANGE_ERROR, 'toISOString: ' + __1.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, 'toISOString', __1);
}, __140.prototype.initRegExp = function(__0) {
  var __1, __2 = this;
  __1 = function __0(__1, __3) {
    if (__2.calledWithNew())
      var __4 = this;
    else {
      if (void 0 === __3 && __2.isa(__1, __2.REGEXP))
        return __1;
      var __4 = __2.createObjectProto(__2.REGEXP_PROTO);
    }
    __1 = void 0 === __1 ? '' : String(__1), __3 = __3 ? String(__3) : '', /^[gmi]*$/.test(__3) || __2.throwException(__2.SYNTAX_ERROR, 'Invalid regexp flag: ' + __3);
    try {
      var __5 = new __140.nativeGlobal.RegExp(__1, __3);
    } catch (__6) {
      __2.throwException(__2.SYNTAX_ERROR, __6.message);
    }
    return __2.populateRegExp(__4, __5), __4;
  }, this.REGEXP = this.createNativeFunction(__1, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(__0, 'RegExp', this.REGEXP, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'global', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'ignoreCase', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'multiline', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'source', '(?:)', __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('Object.defineProperty(RegExp.prototype, \'test\',', '{configurable: true, writable: true, value:', 'function test(str) {', 'return !!this.exec(str);', '}', '});'), __1 = function __0(__1, __3) {
    var __4 = this.data;
    if (__1 = String(__1), __4.lastIndex = Number(__2.getProperty(this, 'lastIndex')), __2.maybeThrowRegExp(__4, __3), 2 === __2.REGEXP_MODE) {
      if (__140.vm) {
        var __5 = {
            string: __1,
            regexp: __4
          },
          __6 = __2.vmCall('regexp.exec(string)', __5, __4, __3);
        __6 !== __140.REGEXP_TIMEOUT && (__2.setProperty(this, 'lastIndex', __4.lastIndex), __3(__2.matchToPseudo_(__6)));
      } else {
        var __7 = __2.createWorker(),
          __8 = __2.regExpTimeout(__4, __7, __3),
          __9 = this;
        __7.onmessage = function(__0) {
          clearTimeout(__8), __2.setProperty(__9, 'lastIndex', __0.data[1]), __3(__2.matchToPseudo_(__0.data[0]));
        }, __7.postMessage([
          'exec',
          __4,
          __4.lastIndex,
          __1
        ]);
      }
      return;
    }
    var __6 = __4.exec(__1);
    __2.setProperty(this, 'lastIndex', __4.lastIndex), __3(__2.matchToPseudo_(__6));
  }, this.setAsyncFunctionPrototype(this.REGEXP, 'exec', __1);
}, __140.prototype.matchToPseudo_ = function(__0) {
  if (__0) {
    for (var __1 = Object.getOwnPropertyNames(__0), __2 = 0; __2 < __1.length; __2++) {
      var __3 = __1[__2];
      isNaN(Number(__3)) && 'length' !== __3 && 'input' !== __3 && 'index' !== __3 && delete __0[__3];
    }
    return this.nativeToPseudo(__0);
  }
  return null;
}, __140.prototype.initError = function(__0) {
  var __1 = this;
  this.ERROR = this.createNativeFunction(function __0(__2) {
    if (__1.calledWithNew())
      var __3 = this;
    else
      var __3 = __1.createObject(__1.ERROR);
    return __1.populateError(__3, __2), __3;
  }, !0), this.setProperty(__0, 'Error', this.ERROR, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'message', '', __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'name', 'Error', __140.NONENUMERABLE_DESCRIPTOR);
  var __2 = function(__2) {
    var __3 = __1.createNativeFunction(function(__0) {
      if (__1.calledWithNew())
        var __2 = this;
      else
        var __2 = __1.createObject(__3);
      return __1.populateError(__2, __0), __2;
    }, !0);
    return __1.setProperty(__3, 'prototype', __1.createObject(__1.ERROR), __140.NONENUMERABLE_DESCRIPTOR), __1.setProperty(__3.properties.prototype, 'name', __2, __140.NONENUMERABLE_DESCRIPTOR), __1.setProperty(__0, __2, __3, __140.NONENUMERABLE_DESCRIPTOR), __3;
  };
  this.EVAL_ERROR = __2('EvalError'), this.RANGE_ERROR = __2('RangeError'), this.REFERENCE_ERROR = __2('ReferenceError'), this.SYNTAX_ERROR = __2('SyntaxError'), this.TYPE_ERROR = __2('TypeError'), this.URI_ERROR = __2('URIError');
}, __140.prototype.initMath = function(__0) {
  var __1 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__0, 'Math', __1, __140.NONENUMERABLE_DESCRIPTOR);
  for (var __2 = [
      'E',
      'LN2',
      'LN10',
      'LOG2E',
      'LOG10E',
      'PI',
      'SQRT1_2',
      'SQRT2'
    ], __3 = 0; __3 < __2.length; __3++)
    this.setProperty(__1, __2[__3], Math[__2[__3]], __140.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var __4 = [
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
    ], __3 = 0; __3 < __4.length; __3++)
    this.setProperty(__1, __4[__3], this.createNativeFunction(Math[__4[__3]], !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initJSON = function(__0) {
  var __1, __2 = this,
    __3 = __2.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__0, 'JSON', __3, __140.NONENUMERABLE_DESCRIPTOR), __1 = function __0(__1) {
    try {
      var __3 = JSON.parse(String(__1));
    } catch (__4) {
      __2.throwException(__2.SYNTAX_ERROR, __4.message);
    }
    return __2.nativeToPseudo(__3);
  }, this.setProperty(__3, 'parse', this.createNativeFunction(__1, !1)), __1 = function __0(__1, __3, __4) {
    __3 && 'Function' === __3.class ? __2.throwException(__2.TYPE_ERROR, 'Function replacer on JSON.stringify not supported') : __3 = __3 && 'Array' === __3.class ? (__3 = __2.pseudoToNative(__3)).filter(function(__0) {
      return 'string' == typeof __0 || 'number' == typeof __0;
    }) : null, 'string' != typeof __4 && 'number' != typeof __4 && (__4 = void 0);
    var __5 = __2.pseudoToNative(__1);
    try {
      var __6 = JSON.stringify(__5, __3, __4);
    } catch (__7) {
      __2.throwException(__2.TYPE_ERROR, __7.message);
    }
    return __6;
  }, this.setProperty(__3, 'stringify', this.createNativeFunction(__1, !1));
}, __140.prototype.isa = function(__0, __1) {
  if (null == __0 || !__1)
    return !1;
  var __2 = __1.properties.prototype;
  if (__0 === __2)
    return !0;
  for (__0 = this.getPrototype(__0); __0;) {
    if (__0 === __2)
      return !0;
    __0 = __0.proto;
  }
  return !1;
}, __140.prototype.populateRegExp = function(__0, __1) {
  __0.data = RegExp(__1.source, __1.flags), this.setProperty(__0, 'lastIndex', __1.lastIndex, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'source', __1.source, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'global', __1.global, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'ignoreCase', __1.ignoreCase, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__0, 'multiline', __1.multiline, __140.READONLY_NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.populateError = function(__0, __1) {
  __1 && this.setProperty(__0, 'message', String(__1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __2 = [], __3 = this.stateStack.length - 1; __3 >= 0; __3--) {
    var __4 = this.stateStack[__3],
      __5 = __4.node;
    if ('CallExpression' === __5.type) {
      var __6 = __4.func_;
      __6 && __2.length && (__2[__2.length - 1].datumName = this.getProperty(__6, 'name'));
    }
    __5.loc && (!__2.length || 'CallExpression' === __5.type) && __2.push({
      datumLoc: __5.loc
    });
  }
  for (var __7 = String(this.getProperty(__0, 'name')), __8 = String(this.getProperty(__0, 'message')), __9 = __7 + ': ' + __8 + '\n', __3 = 0; __3 < __2.length; __3++) {
    var __10 = __2[__3].datumLoc,
      __11 = __2[__3].datumName,
      __12 = __10.source + ':' + __10.start.line + ':' + __10.start.column;
    __11 ? __9 += '  at ' + __11 + ' (' + __12 + ')\n' : __9 += '  at ' + __12 + '\n';
  }
  this.setProperty(__0, 'stack', __9.trim(), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.createWorker = function() {
  var __0 = this.createWorker.blob_;
  return __0 || (__0 = new Blob([__140.WORKER_CODE.join('\n')], {
    type: 'application/javascript'
  }), this.createWorker.blob_ = __0), new Worker(URL.createObjectURL(__0));
}, __140.prototype.vmCall = function(__0, __1, __2, __3) {
  var __4 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return __140.vm.runInNewContext(__0, __1, __4);
  } catch (__5) {
    __3(null), this.throwException(this.ERROR, 'RegExp Timeout: ' + __2);
  }
  return __140.REGEXP_TIMEOUT;
}, __140.prototype.maybeThrowRegExp = function(__0, __1) {
  var __2;
  if (0 === this.REGEXP_MODE)
    __2 = !1;
  else if (1 === this.REGEXP_MODE)
    __2 = !0;
  else if (__140.vm)
    __2 = !0;
  else if ('function' == typeof Worker && 'function' == typeof URL)
    __2 = !0;
  else if ('function' == typeof require) {
    try {
      __140.vm = require('vm');
    } catch (__3) {}
    __2 = !!__140.vm;
  } else
    __2 = !1;
  __2 || (__1(null), this.throwException(this.ERROR, 'Regular expressions not supported: ' + __0));
}, __140.prototype.regExpTimeout = function(__0, __1, __2) {
  var __3 = this;
  return setTimeout(function() {
    __1.terminate(), __2(null);
    try {
      __3.throwException(__3.ERROR, 'RegExp Timeout: ' + __0);
    } catch (__4) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, __140.prototype.createObject = function(__0) {
  return this.createObjectProto(__0 && __0.properties.prototype);
}, __140.prototype.createObjectProto = function(__0) {
  if ('object' != typeof __0)
    throw Error('Non object prototype');
  var __1 = new __140.Object(__0);
  return this.isa(__1, this.ERROR) && (__1.class = 'Error'), __1;
}, __140.prototype.createArray = function() {
  var __0 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(__0, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), __0.class = 'Array', __0;
}, __140.prototype.createFunctionBase_ = function(__0, __1) {
  var __2 = this.createObjectProto(this.FUNCTION_PROTO);
  if (__1) {
    var __3 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(__2, 'prototype', __3, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__3, 'constructor', __2, __140.NONENUMERABLE_DESCRIPTOR);
  } else
    __2.illegalConstructor = !0;
  return this.setProperty(__2, 'length', __0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __2.class = 'Function', __2;
}, __140.prototype.createFunction = function(__0, __1, __2) {
  var __3 = this.createFunctionBase_(__0.params.length, !0);
  __3.parentScope = __1, __3.node = __0;
  var __4 = __0.id ? String(__0.id.name) : __2 || '';
  return this.setProperty(__3, 'name', __4, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __3;
}, __140.prototype.createNativeFunction = function(__0, __1) {
  var __2 = this.createFunctionBase_(__0.length, __1);
  return __2.nativeFunc = __0, __0.id = this.functionCounter_++, this.setProperty(__2, 'name', __0.name, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __2;
}, __140.prototype.createAsyncFunction = function(__0) {
  var __1 = this.createFunctionBase_(__0.length, !0);
  return __1.asyncFunc = __0, __0.id = this.functionCounter_++, this.setProperty(__1, 'name', __0.name, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __1;
}, __140.prototype.nativeToPseudo = function(__0, __1) {
  if (null == __0 || !0 === __0 || !1 === __0 || 'string' == typeof __0 || 'number' == typeof __0)
    return __0;
  if (__0 instanceof __140.Object)
    throw Error('Object is already pseudo');
  var __2, __3, __4 = __1 || {
      pseudo: [],
      native: []
    },
    __5 = __4.native.indexOf(__0);
  if (-1 !== __5)
    return __4.pseudo[__5];
  if (__4.native.push(__0), __0 instanceof RegExp) {
    var __6 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(__6, __0), __4.pseudo.push(__6), __6;
  }
  if (__0 instanceof Date) {
    var __7 = this.createObjectProto(this.DATE_PROTO);
    return __7.data = new Date(__0.valueOf()), __4.pseudo.push(__7), __7;
  }
  if (__0 instanceof Number ? __2 = this.createObject(this.NUMBER) : __0 instanceof String ? __2 = this.createObject(this.STRING) : __0 instanceof Boolean && (__2 = this.createObject(this.BOOLEAN)), __2)
    return __2.data = __0.valueOf(), __4.pseudo.push(__2), __2;
  if ('function' == typeof __0) {
    var __8 = this,
      __9 = function() {
        var __1 = Array.prototype.slice.call(arguments).map(function(__0) {
            return __8.pseudoToNative(__0);
          }),
          __2 = __0.apply(__8, __1);
        return __8.nativeToPseudo(__2);
      },
      __10 = Object.getOwnPropertyDescriptor(__0, 'prototype'),
      __11 = this.createNativeFunction(__9, !!__10);
    return __4.pseudo.push(__11), __11;
  }
  for (var __12 in (__3 = Array.isArray(__0) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), __4.pseudo.push(__3), __0))
    this.setProperty(__3, __12, this.nativeToPseudo(__0[__12], __4));
  return __3;
}, __140.prototype.pseudoToNative = function(__0, __1) {
  if (null == __0 || !0 === __0 || !1 === __0 || 'string' == typeof __0 || 'number' == typeof __0)
    return __0;
  if (!(__0 instanceof __140.Object))
    throw Error('Object is not pseudo');
  var __2, __3 = __1 || {
      pseudo: [],
      native: []
    },
    __4 = __3.pseudo.indexOf(__0);
  if (-1 !== __4)
    return __3.native[__4];
  if (__3.pseudo.push(__0), this.isa(__0, this.REGEXP)) {
    var __5 = RegExp(__0.data.source, __0.data.flags);
    return __5.lastIndex = __0.data.lastIndex, __3.native.push(__5), __5;
  }
  if (this.isa(__0, this.DATE)) {
    var __6 = new Date(__0.data.valueOf());
    return __3.native.push(__6), __6;
  }
  if (this.isa(__0, this.NUMBER) || this.isa(__0, this.STRING) || this.isa(__0, this.BOOLEAN)) {
    var __7 = Object(__0.data);
    return __3.native.push(__7), __7;
  }
  var __8 = this.isa(__0, this.ARRAY) ? [] : {};
  for (var __9 in (__3.native.push(__8), __0.properties))
    __2 = this.pseudoToNative(__0.properties[__9], __3), Object.defineProperty(__8, __9, {
      value: __2,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return __8;
}, __140.prototype.getPrototype = function(__0) {
  switch (typeof __0) {
    case 'number':
      return this.NUMBER.properties.prototype;
    case 'boolean':
      return this.BOOLEAN.properties.prototype;
    case 'string':
      return this.STRING.properties.prototype;
  }
  return __0 ? __0.proto : null;
}, __140.prototype.getProperty = function(__0, __1) {
  if (this.getterStep_)
    throw Error('Getter not supported in that context');
  if (__1 = String(__1), null == __0 && this.throwException(this.TYPE_ERROR, 'Cannot read property \'' + __1 + '\' of ' + __0), 'object' == typeof __0 && !(__0 instanceof __140.Object))
    throw TypeError('Expecting native value or pseudo object');
  if ('length' === __1) {
    if (this.isa(__0, this.STRING))
      return String(__0).length;
  } else if (64 > __1.charCodeAt(0) && this.isa(__0, this.STRING)) {
    var __2 = __140.legalArrayIndex(__1);
    if (!isNaN(__2) && __2 < String(__0).length)
      return String(__0)[__2];
  }
  do
    if (__0.properties && __1 in __0.properties) {
      var __3 = __0.getter[__1];
      if (__3)
        return this.getterStep_ = !0, __3;
      return __0.properties[__1];
    }
  while (__0 = this.getPrototype(__0));
}, __140.prototype.hasProperty = function(__0, __1) {
  if (!(__0 instanceof __140.Object))
    throw TypeError('Primitive data type has no properties');
  if ('length' === (__1 = String(__1)) && this.isa(__0, this.STRING))
    return !0;
  if (this.isa(__0, this.STRING)) {
    var __2 = __140.legalArrayIndex(__1);
    if (!isNaN(__2) && __2 < String(__0).length)
      return !0;
  }
  do
    if (__0.properties && __1 in __0.properties)
      return !0;
  while (__0 = this.getPrototype(__0));
  return !1;
}, __140.prototype.setProperty = function(__0, __1, __2, __3) {
  if (this.setterStep_)
    throw Error('Setter not supported in that context');
  if (__1 = String(__1), null == __0 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __1 + '\' of ' + __0), 'object' == typeof __0 && !(__0 instanceof __140.Object))
    throw TypeError('Expecting native value or pseudo object');
  __3 && ('get' in __3 || 'set' in __3) && ('value' in __3 || 'writable' in __3) && this.throwException(this.TYPE_ERROR, 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  var __4 = !this.stateStack || this.getScope().strict;
  if (!(__0 instanceof __140.Object)) {
    __4 && this.throwException(this.TYPE_ERROR, 'Can\'t create property \'' + __1 + '\' on \'' + __0 + '\'');
    return;
  }
  if (this.isa(__0, this.STRING)) {
    var __5 = __140.legalArrayIndex(__1);
    if ('length' === __1 || !isNaN(__5) && __5 < String(__0).length) {
      __4 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __1 + '\' of String \'' + __0.data + '\'');
      return;
    }
  }
  if ('Array' === __0.class) {
    var __6, __7 = __0.properties.length;
    if ('length' === __1) {
      if (__3) {
        if (!('value' in __3))
          return;
        __2 = __3.value;
      }
      if (isNaN(__2 = __140.legalArrayLength(__2)) && this.throwException(this.RANGE_ERROR, 'Invalid array length'), __2 < __7)
        for (__6 in __0.properties)
          !isNaN(__6 = __140.legalArrayIndex(__6)) && __2 <= __6 && delete __0.properties[__6];
    } else
      isNaN(__6 = __140.legalArrayIndex(__1)) || (__0.properties.length = Math.max(__7, __6 + 1));
  }
  if (__0.preventExtensions && !(__1 in __0.properties)) {
    __4 && this.throwException(this.TYPE_ERROR, 'Can\'t add property \'' + __1 + '\', object is not extensible');
    return;
  }
  if (__3) {
    var __8 = {};
    'get' in __3 && __3.get && (__0.getter[__1] = __3.get, __8.get = this.setProperty.placeholderGet_), 'set' in __3 && __3.set && (__0.setter[__1] = __3.set, __8.set = this.setProperty.placeholderSet_), 'configurable' in __3 && (__8.configurable = __3.configurable), 'enumerable' in __3 && (__8.enumerable = __3.enumerable), 'writable' in __3 && (__8.writable = __3.writable, delete __0.getter[__1], delete __0.setter[__1]), 'value' in __3 ? (__8.value = __3.value, delete __0.getter[__1], delete __0.setter[__1]) : __2 !== __140.VALUE_IN_DESCRIPTOR && (__8.value = __2, delete __0.getter[__1], delete __0.setter[__1]);
    try {
      Object.defineProperty(__0.properties, __1, __8);
    } catch (__9) {
      this.throwException(this.TYPE_ERROR, 'Cannot redefine property: ' + __1);
    }
    'get' in __3 && !__3.get && delete __0.getter[__1], 'set' in __3 && !__3.set && delete __0.setter[__1];
  } else {
    if (__2 === __140.VALUE_IN_DESCRIPTOR)
      throw ReferenceError('Value not specified');
    for (var __10 = __0; !(__1 in __10.properties);)
      if (!(__10 = this.getPrototype(__10))) {
        __10 = __0;
        break;
      }
    if (__10.setter && __10.setter[__1])
      return this.setterStep_ = !0, __10.setter[__1];
    if (__10.getter && __10.getter[__1])
      __4 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __1 + '\' of object \'' + __0 + '\' which only has a getter');
    else
      try {
        __0.properties[__1] = __2;
      } catch (__11) {
        __4 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __1 + '\' of object \'' + __0 + '\'');
      }
  }
}, __140.prototype.setProperty.placeholderGet_ = function() {
  throw Error('Placeholder getter');
}, __140.prototype.setProperty.placeholderSet_ = function() {
  throw Error('Placeholder setter');
}, __140.prototype.setNativeFunctionPrototype = function(__0, __1, __2) {
  this.setProperty(__0.properties.prototype, __1, this.createNativeFunction(__2, !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.setAsyncFunctionPrototype = function(__0, __1, __2) {
  this.setProperty(__0.properties.prototype, __1, this.createAsyncFunction(__2), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.getScope = function() {
  var __0 = this.stateStack[this.stateStack.length - 1].scope;
  if (!__0)
    throw Error('No scope found');
  return __0;
}, __140.prototype.createScope = function(__0, __1) {
  var __2 = !1;
  if (__1 && __1.strict)
    __2 = !0;
  else {
    var __3 = __0.body && __0.body[0];
    __3 && __3.expression && 'Literal' === __3.expression.type && 'use strict' === __3.expression.value && (__2 = !0);
  }
  var __4 = this.createObjectProto(null),
    __5 = new __140.Scope(__1, __2, __4);
  return __1 || this.initGlobal(__5.object), this.populateScope_(__0, __5), __5;
}, __140.prototype.createSpecialScope = function(__0, __1) {
  if (!__0)
    throw Error('parentScope required');
  var __2 = __1 || this.createObjectProto(null);
  return new __140.Scope(__0, __0.strict, __2);
}, __140.prototype.getValueFromScope = function(__0) {
  for (var __1 = this.getScope(); __1 && __1 !== this.globalScope;) {
    if (__0 in __1.object.properties)
      return __1.object.properties[__0];
    __1 = __1.parentScope;
  }
  if (__1 === this.globalScope && this.hasProperty(__1.object, __0))
    return this.getProperty(__1.object, __0);
  var __2 = this.stateStack[this.stateStack.length - 1].node;
  ('UnaryExpression' !== __2.type || 'typeof' !== __2.operator) && this.throwException(this.REFERENCE_ERROR, __0 + ' is not defined');
}, __140.prototype.setValueToScope = function(__0, __1) {
  for (var __2 = this.getScope(), __3 = __2.strict; __2 && __2 !== this.globalScope;) {
    if (__0 in __2.object.properties) {
      try {
        __2.object.properties[__0] = __1;
      } catch (__4) {
        __3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only variable \'' + __0 + '\'');
      }
      return;
    }
    __2 = __2.parentScope;
  }
  if (__2 === this.globalScope && (!__3 || this.hasProperty(__2.object, __0)))
    return this.setProperty(__2.object, __0, __1);
  this.throwException(this.REFERENCE_ERROR, __0 + ' is not defined');
}, __140.prototype.populateScope_ = function(__0, __1) {
  var __2;
  if (__0.variableCache_)
    __2 = __0.variableCache_;
  else {
    switch (__2 = Object.create(null), __0.type) {
      case 'VariableDeclaration':
        for (var __3 = 0; __3 < __0.declarations.length; __3++)
          __2[__0.declarations[__3].id.name] = !0;
        break;
      case 'FunctionDeclaration':
        __2[__0.id.name] = __0;
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
        var __4 = __0.constructor;
        for (var __5 in __0)
          if (__0[__5] !== __0.loc) {
            var __6, __7 = __0[__5];
            if (__7 && 'object' == typeof __7) {
              if (Array.isArray(__7)) {
                for (var __3 = 0; __3 < __7.length; __3++)
                  if (__7[__3] && __7[__3].constructor === __4)
                    for (var __5 in __6 = this.populateScope_(__7[__3], __1))
                      __2[__5] = __6[__5];
              } else if (__7.constructor === __4)
                for (var __5 in __6 = this.populateScope_(__7, __1))
                  __2[__5] = __6[__5];
            }
          }
    }
    __0.variableCache_ = __2;
  }
  for (var __5 in __2)
    !0 === __2[__5] ? this.setProperty(__1.object, __5, void 0, __140.VARIABLE_DESCRIPTOR) : this.setProperty(__1.object, __5, this.createFunction(__2[__5], __1), __140.VARIABLE_DESCRIPTOR);
  return __2;
}, __140.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, __140.prototype.getValue = function(__0) {
  return __0[0] === __140.SCOPE_REFERENCE ? this.getValueFromScope(__0[1]) : this.getProperty(__0[0], __0[1]);
}, __140.prototype.setValue = function(__0, __1) {
  return __0[0] === __140.SCOPE_REFERENCE ? this.setValueToScope(__0[1], __1) : this.setProperty(__0[0], __0[1], __1);
}, __140.prototype.throwException = function(__0, __1) {
  if (!this.globalScope)
    throw void 0 === __1 ? __0 : __1;
  if (void 0 !== __1 && __0 instanceof __140.Object) {
    var __2 = this.createObject(__0);
    this.populateError(__2, __1);
  } else
    var __2 = __0;
  throw this.unwind(__140.Completion.THROW, __2, void 0), __140.STEP_ERROR;
}, __140.prototype.unwind = function(__0, __1, __2) {
  if (__0 === __140.Completion.NORMAL)
    throw TypeError('Should not unwind for NORMAL completions');
  loop:
    for (var __3, __4 = this.stateStack; __4.length > 0; __4.pop()) {
      var __5 = __4[__4.length - 1];
      switch (__5.node.type) {
        case 'TryStatement':
          __5.cv = {
            type: __0,
            value: __1,
            label: __2
          };
          return;
        case 'CallExpression':
        case 'NewExpression':
          if (__0 === __140.Completion.RETURN) {
            __5.value = __1;
            return;
          }
          if (__0 === __140.Completion.BREAK || __0 === __140.Completion.CONTINUE)
            throw Error('Unsyntactic break/continue not rejected by Acorn');
          break;
        case 'Program':
          if (__0 === __140.Completion.RETURN)
            return;
          __5.done = !0;
          break loop;
      }
      if (__0 === __140.Completion.BREAK) {
        if (__2 ? __5.labels && -1 !== __5.labels.indexOf(__2) : __5.isLoop || __5.isSwitch) {
          __4.pop();
          return;
        }
      } else if (__0 === __140.Completion.CONTINUE && (__2 ? __5.labels && -1 !== __5.labels.indexOf(__2) : __5.isLoop))
        return;
    }
  if (this.isa(__1, this.ERROR)) {
    var __6 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      __7 = String(this.getProperty(__1, 'name')),
      __8 = this.getProperty(__1, 'message').valueOf();
    (__3 = (__6[__7] || Error)(__8)).stack = String(this.getProperty(__1, 'stack'));
  } else
    __3 = String(__1);
  throw this.value = __3, __3;
}, __140.prototype.nodeSummary = function(__0) {
  switch (__0.type) {
    case 'ArrayExpression':
      return '[...]';
    case 'BinaryExpression':
    case 'LogicalExpression':
      return this.nodeSummary(__0.left) + ' ' + __0.operator + ' ' + this.nodeSummary(__0.right);
    case 'CallExpression':
      return this.nodeSummary(__0.callee) + '(...)';
    case 'ConditionalExpression':
      return this.nodeSummary(__0.test) + ' ? ' + this.nodeSummary(__0.consequent) + ' : ' + this.nodeSummary(__0.alternate);
    case 'Identifier':
      return __0.name;
    case 'Literal':
      return __0.raw;
    case 'MemberExpression':
      var __1 = this.nodeSummary(__0.object),
        __2 = this.nodeSummary(__0.property);
      return __0.computed ? __1 + '[' + __2 + ']' : __1 + '.' + __2;
    case 'NewExpression':
      return 'new ' + this.nodeSummary(__0.callee) + '(...)';
    case 'ObjectExpression':
      return '{...}';
    case 'ThisExpression':
      return 'this';
    case 'UnaryExpression':
      return __0.operator + ' ' + this.nodeSummary(__0.argument);
    case 'UpdateExpression':
      var __3 = this.nodeSummary(__0.argument);
      return __0.prefix ? __0.operator + __3 : __3 + __0.operator;
  }
  return '???';
}, __140.prototype.createTask_ = function(__0, __1) {
  var __2, __3, __4, __5 = this.stateStack[this.stateStack.length - 1],
    __6 = Array.from(__1),
    __7 = __6.shift(),
    __8 = Math.max(Number(__6.shift() || 0), 0),
    __9 = this.newNode();
  if (__7 instanceof __140.Object && 'Function' === __7.class)
    __3 = __7, __9.type = 'CallExpression', __2 = __5.scope;
  else {
    try {
      __4 = this.parse_(String(__7), 'taskCode' + this.taskCodeNumber_++);
    } catch (__10) {
      this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __10.message);
    }
    __9.type = 'EvalProgram_', __9.body = __4.body;
    var __11 = __5.node.arguments[0],
      __12 = __11 ? __11.start : void 0,
      __13 = __11 ? __11.end : void 0;
    __140.stripLocations_(__9, __12, __13), __2 = this.globalScope, __6.length = 0;
  }
  var __14 = new __140.Task(__3, __6, __2, __9, __0 ? __8 : -1);
  return this.scheduleTask_(__14, __8), __14.pid;
}, __140.prototype.scheduleTask_ = function(__0, __1) {
  __0.time = Date.now() + __1, this.tasks.push(__0), this.tasks.sort(function(__0, __1) {
    return __0.time - __1.time;
  });
}, __140.prototype.deleteTask_ = function(__0) {
  for (var __1 = 0; __1 < this.tasks.length; __1++)
    if (this.tasks[__1].pid == __0) {
      this.tasks.splice(__1, 1);
      break;
    }
}, __140.prototype.nextTask_ = function() {
  var __0 = this.tasks[0];
  if (!__0 || __0.time > Date.now())
    return null;
  this.tasks.shift(), __0.interval >= 0 && this.scheduleTask_(__0, __0.interval);
  var __1 = new __140.State(__0.node, __0.scope);
  return __0.functionRef && (__1.doneCallee_ = 2, __1.funcThis_ = this.globalObject, __1.func_ = __0.functionRef, __1.doneArgs_ = !0, __1.arguments_ = __0.argsArray), __1;
}, __140.prototype.createGetter_ = function(__0, __1) {
  if (!this.getterStep_)
    throw Error('Unexpected call to createGetter');
  this.getterStep_ = !1;
  var __2 = Array.isArray(__1) ? __1[0] : __1,
    __3 = this.newNode();
  __3.type = 'CallExpression';
  var __4 = new __140.State(__3, this.stateStack[this.stateStack.length - 1].scope);
  return __4.doneCallee_ = 2, __4.funcThis_ = __2, __4.func_ = __0, __4.doneArgs_ = !0, __4.arguments_ = [], __4;
}, __140.prototype.createSetter_ = function(__0, __1, __2) {
  if (!this.setterStep_)
    throw Error('Unexpected call to createSetter');
  this.setterStep_ = !1;
  var __3 = Array.isArray(__1) ? __1[0] : this.globalObject,
    __4 = this.newNode();
  __4.type = 'CallExpression';
  var __5 = new __140.State(__4, this.stateStack[this.stateStack.length - 1].scope);
  return __5.doneCallee_ = 2, __5.funcThis_ = __3, __5.func_ = __0, __5.doneArgs_ = !0, __5.arguments_ = [__2], __5;
}, __140.prototype.boxThis_ = function(__0) {
  if (null == __0)
    return this.globalObject;
  if (!(__0 instanceof __140.Object)) {
    var __1 = this.createObjectProto(this.getPrototype(__0));
    return __1.data = __0, __1;
  }
  return __0;
}, __140.prototype.getGlobalScope = function() {
  return this.globalScope;
}, __140.prototype.setGlobalScope = function(__0) {
  this.globalScope = __0, this.stateStack[0].scope = __0;
}, __140.prototype.getStateStack = function() {
  return this.stateStack;
}, __140.prototype.setStateStack = function(__0) {
  this.stateStack = __0;
}, __140.Value, __140.State = function(__0, __1) {
  this.node = __0, this.scope = __1;
}, __140.Scope = function(__0, __1, __2) {
  this.parentScope = __0, this.strict = __1, this.object = __2;
}, __140.Object = function(__0) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = __0;
}, __140.Object.prototype.proto = null, __140.Object.prototype.class = 'Object', __140.Object.prototype.data = null, __140.Object.prototype.toString = function() {
  if (!__140.currentInterpreter_)
    return '[object Interpreter.Object]';
  if (!(this instanceof __140.Object))
    return String(this);
  if ('Array' === this.class) {
    var __0 = __140.toStringCycles_;
    __0.push(this);
    try {
      var __1 = [],
        __2 = this.properties.length,
        __3 = !1;
      __2 > 1024 && (__2 = 1000, __3 = !0);
      for (var __4 = 0; __4 < __2; __4++) {
        var __5 = this.properties[__4];
        __1[__4] = __5 instanceof __140.Object && -1 !== __0.indexOf(__5) ? '...' : __5;
      }
      __3 && __1.push('...');
    } finally {
      __0.pop();
    }
    return __1.join(',');
  }
  if ('Error' === this.class) {
    var __6, __7, __0 = __140.toStringCycles_;
    if (-1 !== __0.indexOf(this))
      return '[object Error]';
    var __8 = this;
    do
      if ('name' in __8.properties) {
        __6 = __8.properties.name;
        break;
      }
    while (__8 = __8.proto);
    __8 = this;
    do
      if ('message' in __8.properties) {
        __7 = __8.properties.message;
        break;
      }
    while (__8 = __8.proto);
    __0.push(this);
    try {
      __6 = __6 && String(__6), __7 = __7 && String(__7);
    } finally {
      __0.pop();
    }
    return __7 ? __6 + ': ' + __7 : String(__6);
  }
  return null !== this.data ? String(this.data) : '[object ' + this.class + ']';
}, __140.Object.prototype.valueOf = function() {
  return !__140.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, __140.Task = function(__0, __1, __2, __3, __4) {
  this.functionRef = __0, this.argsArray = __1, this.scope = __2, this.node = __3, this.interval = __4, this.pid = ++__140.Task.pid, this.time = 0;
}, __140.Task.pid = 0, __140.prototype.stepArrayExpression = function(__0, __1, __2) {
  var __3 = __2.elements,
    __4 = __1.n_ || 0;
  for (__1.array_ ? (this.setProperty(__1.array_, __4, __1.value), __4++) : (__1.array_ = this.createArray(), __1.array_.properties.length = __3.length); __4 < __3.length;) {
    if (__3[__4])
      return __1.n_ = __4, new __140.State(__3[__4], __1.scope);
    __4++;
  }
  __0.pop(), __0[__0.length - 1].value = __1.array_;
}, __140.prototype.stepAssignmentExpression = function(__0, __1, __2) {
  if (!__1.doneLeft_) {
    __1.doneLeft_ = !0;
    var __3 = new __140.State(__2.left, __1.scope);
    return __3.components = !0, __3;
  }
  if (!__1.doneRight_) {
    if (__1.leftReference_ || (__1.leftReference_ = __1.value), __1.doneGetter_ && (__1.leftValue_ = __1.value), !__1.doneGetter_ && '=' !== __2.operator) {
      var __4 = this.getValue(__1.leftReference_);
      if (__1.leftValue_ = __4, this.getterStep_)
        return __1.doneGetter_ = !0, this.createGetter_(__4, __1.leftReference_);
    }
    return __1.doneRight_ = !0, '=' === __2.operator && 'Identifier' === __2.left.type && (__1.destinationName = __2.left.name), new __140.State(__2.right, __1.scope);
  }
  if (__1.doneSetter_) {
    __0.pop(), __0[__0.length - 1].value = __1.setterValue_;
    return;
  }
  var __5 = __1.leftValue_,
    __6 = __1.value;
  switch (__2.operator) {
    case '=':
      __5 = __6;
      break;
    case '+=':
      __5 += __6;
      break;
    case '-=':
      __5 -= __6;
      break;
    case '*=':
      __5 *= __6;
      break;
    case '/=':
      __5 /= __6;
      break;
    case '%=':
      __5 %= __6;
      break;
    case '<<=':
      __5 <<= __6;
      break;
    case '>>=':
      __5 >>= __6;
      break;
    case '>>>=':
      __5 >>>= __6;
      break;
    case '&=':
      __5 &= __6;
      break;
    case '^=':
      __5 ^= __6;
      break;
    case '|=':
      __5 |= __6;
      break;
    default:
      throw SyntaxError('Unknown assignment expression: ' + __2.operator);
  }
  var __7 = this.setValue(__1.leftReference_, __5);
  if (__7)
    return __1.doneSetter_ = !0, __1.setterValue_ = __5, this.createSetter_(__7, __1.leftReference_, __5);
  __0.pop(), __0[__0.length - 1].value = __5;
}, __140.prototype.stepBinaryExpression = function(__0, __1, __2) {
  if (!__1.doneLeft_)
    return __1.doneLeft_ = !0, new __140.State(__2.left, __1.scope);
  if (!__1.doneRight_)
    return __1.doneRight_ = !0, __1.leftValue_ = __1.value, new __140.State(__2.right, __1.scope);
  __0.pop();
  var __3, __4 = __1.leftValue_,
    __5 = __1.value;
  switch (__2.operator) {
    case '==':
      __3 = __4 == __5;
      break;
    case '!=':
      __3 = __4 != __5;
      break;
    case '===':
      __3 = __4 === __5;
      break;
    case '!==':
      __3 = __4 !== __5;
      break;
    case '>':
      __3 = __4 > __5;
      break;
    case '>=':
      __3 = __4 >= __5;
      break;
    case '<':
      __3 = __4 < __5;
      break;
    case '<=':
      __3 = __4 <= __5;
      break;
    case '+':
      __3 = __4 + __5;
      break;
    case '-':
      __3 = __4 - __5;
      break;
    case '*':
      __3 = __4 * __5;
      break;
    case '/':
      __3 = __4 / __5;
      break;
    case '%':
      __3 = __4 % __5;
      break;
    case '&':
      __3 = __4 & __5;
      break;
    case '|':
      __3 = __4 | __5;
      break;
    case '^':
      __3 = __4 ^ __5;
      break;
    case '<<':
      __3 = __4 << __5;
      break;
    case '>>':
      __3 = __4 >> __5;
      break;
    case '>>>':
      __3 = __4 >>> __5;
      break;
    case 'in':
      __5 instanceof __140.Object || this.throwException(this.TYPE_ERROR, '\'in\' expects an object, not \'' + __5 + '\''), __3 = this.hasProperty(__5, __4);
      break;
    case 'instanceof':
      this.isa(__5, this.FUNCTION) || this.throwException(this.TYPE_ERROR, '\'instanceof\' expects an object, not \'' + __5 + '\''), __3 = __4 instanceof __140.Object && this.isa(__4, __5);
      break;
    default:
      throw SyntaxError('Unknown binary operator: ' + __2.operator);
  }
  __0[__0.length - 1].value = __3;
}, __140.prototype.stepBlockStatement = function(__0, __1, __2) {
  var __3 = __1.n_ || 0,
    __4 = __2.body[__3];
  if (__4)
    return __1.n_ = __3 + 1, new __140.State(__4, __1.scope);
  __0.pop();
}, __140.prototype.stepBreakStatement = function(__0, __1, __2) {
  var __3 = __2.label && __2.label.name;
  this.unwind(__140.Completion.BREAK, void 0, __3);
}, __140.prototype.evalCodeNumber_ = 0, __140.prototype.stepCallExpression = function(__0, __1, __2) {
  if (!__1.doneCallee_) {
    __1.doneCallee_ = 1;
    var __3 = new __140.State(__2.callee, __1.scope);
    return __3.components = !0, __3;
  }
  if (1 === __1.doneCallee_) {
    __1.doneCallee_ = 2;
    var __4 = __1.value;
    if (Array.isArray(__4)) {
      if (__1.func_ = this.getValue(__4), __4[0] === __140.SCOPE_REFERENCE ? __1.directEval_ = 'eval' === __4[1] : __1.funcThis_ = __4[0], __4 = __1.func_, this.getterStep_)
        return __1.doneCallee_ = 1, this.createGetter_(__4, __1.value);
    } else
      __1.func_ = __4;
    __1.arguments_ = [], __1.n_ = 0;
  }
  var __4 = __1.func_;
  if (!__1.doneArgs_) {
    if (0 !== __1.n_ && __1.arguments_.push(__1.value), __2.arguments[__1.n_])
      return new __140.State(__2.arguments[__1.n_++], __1.scope);
    if ('NewExpression' === __2.type) {
      if (__4 instanceof __140.Object && !__4.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(__2.callee) + ' is not a constructor'), __4 === this.ARRAY)
        __1.funcThis_ = this.createArray();
      else {
        var __5 = __4.properties.prototype;
        ('object' != typeof __5 || null === __5) && (__5 = this.OBJECT_PROTO), __1.funcThis_ = this.createObjectProto(__5);
      }
      __1.isConstructor = !0;
    }
    __1.doneArgs_ = !0;
  }
  if (__1.doneExec_)
    __0.pop(), __1.isConstructor && 'object' != typeof __1.value ? __0[__0.length - 1].value = __1.funcThis_ : __0[__0.length - 1].value = __1.value;
  else {
    __1.doneExec_ = !0, __4 instanceof __140.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(__2.callee) + ' is not a function');
    var __6 = __4.node;
    if (__6) {
      for (var __7 = this.createScope(__6.body, __4.parentScope), __8 = this.createArray(), __9 = 0; __9 < __1.arguments_.length; __9++)
        this.setProperty(__8, __9, __1.arguments_[__9]);
      this.setProperty(__7.object, 'arguments', __8);
      for (var __9 = 0; __9 < __6.params.length; __9++) {
        var __10 = __6.params[__9].name,
          __11 = __1.arguments_.length > __9 ? __1.arguments_[__9] : void 0;
        this.setProperty(__7.object, __10, __11);
      }
      return __7.strict || (__1.funcThis_ = this.boxThis_(__1.funcThis_)), this.setProperty(__7.object, 'this', __1.funcThis_, __140.READONLY_DESCRIPTOR), __1.value = void 0, new __140.State(__6.body, __7);
    }
    if (__4.eval) {
      var __12 = __1.arguments_[0];
      if ('string' != typeof __12)
        __1.value = __12;
      else {
        try {
          var __13 = this.parse_(String(__12), 'eval' + this.evalCodeNumber_++);
        } catch (__14) {
          this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __14.message);
        }
        var __15 = this.newNode();
        __15.type = 'EvalProgram_', __15.body = __13.body, __140.stripLocations_(__15, __2.start, __2.end);
        var __7 = __1.directEval_ ? __1.scope : this.globalScope;
        return __7.strict ? __7 = this.createScope(__13, __7) : this.populateScope_(__13, __7), this.value = void 0, new __140.State(__15, __7);
      }
    } else if (__4.nativeFunc)
      __1.scope.strict || (__1.funcThis_ = this.boxThis_(__1.funcThis_)), __1.value = __4.nativeFunc.apply(__1.funcThis_, __1.arguments_);
    else if (__4.asyncFunc) {
      var __16 = this,
        __17 = function(__0) {
          __1.value = __0, __16.paused_ = !1;
        },
        __18 = __4.asyncFunc.length - 1,
        __19 = __1.arguments_.concat(Array(__18)).slice(0, __18);
      __19.push(__17), this.paused_ = !0, __1.scope.strict || (__1.funcThis_ = this.boxThis_(__1.funcThis_)), __4.asyncFunc.apply(__1.funcThis_, __19);
      return;
    } else
      this.throwException(this.TYPE_ERROR, this.nodeSummary(__2.callee) + ' is not callable');
  }
}, __140.prototype.stepConditionalExpression = function(__0, __1, __2) {
  var __3 = __1.mode_ || 0;
  if (0 === __3)
    return __1.mode_ = 1, new __140.State(__2.test, __1.scope);
  if (1 === __3) {
    __1.mode_ = 2;
    var __4 = Boolean(__1.value);
    if (__4 && __2.consequent)
      return new __140.State(__2.consequent, __1.scope);
    if (!__4 && __2.alternate)
      return new __140.State(__2.alternate, __1.scope);
    this.value = void 0;
  }
  __0.pop(), 'ConditionalExpression' === __2.type && (__0[__0.length - 1].value = __1.value);
}, __140.prototype.stepContinueStatement = function(__0, __1, __2) {
  var __3 = __2.label && __2.label.name;
  this.unwind(__140.Completion.CONTINUE, void 0, __3);
}, __140.prototype.stepDebuggerStatement = function(__0, __1, __2) {
  __0.pop();
}, __140.prototype.stepDoWhileStatement = function(__0, __1, __2) {
  if ('DoWhileStatement' === __2.type && void 0 === __1.test_ && (__1.value = !0, __1.test_ = !0), !__1.test_)
    return __1.test_ = !0, new __140.State(__2.test, __1.scope);
  if (__1.value) {
    if (__2.body)
      return __1.test_ = !1, __1.isLoop = !0, new __140.State(__2.body, __1.scope);
  } else
    __0.pop();
}, __140.prototype.stepEmptyStatement = function(__0, __1, __2) {
  __0.pop();
}, __140.prototype.stepEvalProgram_ = function(__0, __1, __2) {
  var __3 = __1.n_ || 0,
    __4 = __2.body[__3];
  if (__4)
    return __1.n_ = __3 + 1, new __140.State(__4, __1.scope);
  __0.pop(), __0[__0.length - 1].value = this.value;
}, __140.prototype.stepExpressionStatement = function(__0, __1, __2) {
  if (!__1.done_)
    return this.value = void 0, __1.done_ = !0, new __140.State(__2.expression, __1.scope);
  __0.pop(), this.value = __1.value;
}, __140.prototype.stepForInStatement = function(__0, __1, __2) {
  if (!__1.doneInit_ && (__1.doneInit_ = !0, __2.left.declarations && __2.left.declarations[0].init))
    return __1.scope.strict && this.throwException(this.SYNTAX_ERROR, 'for-in loop variable declaration may not have an initializer'), new __140.State(__2.left, __1.scope);
  if (!__1.doneObject_)
    return __1.doneObject_ = !0, __1.variable_ || (__1.variable_ = __1.value), new __140.State(__2.right, __1.scope);
  if (__1.isLoop || (__1.isLoop = !0, __1.object_ = __1.value, __1.visited_ = Object.create(null)), void 0 === __1.name_)
    gotPropName:
    for (;;) {
      if (__1.object_ instanceof __140.Object)
        for (__1.props_ || (__1.props_ = Object.getOwnPropertyNames(__1.object_.properties));;) {
          var __3 = __1.props_.shift();
          if (void 0 === __3)
            break;
          if (Object.prototype.hasOwnProperty.call(__1.object_.properties, __3) && !__1.visited_[__3]) {
            if (__1.visited_[__3] = !0, Object.prototype.propertyIsEnumerable.call(__1.object_.properties, __3)) {
              __1.name_ = __3;
              break gotPropName;
            }
          }
        }
      else if (null !== __1.object_ && void 0 !== __1.object_)
        for (__1.props_ || (__1.props_ = Object.getOwnPropertyNames(__1.object_));;) {
          var __3 = __1.props_.shift();
          if (void 0 === __3)
            break;
          if (__1.visited_[__3] = !0, Object.prototype.propertyIsEnumerable.call(__1.object_, __3)) {
            __1.name_ = __3;
            break gotPropName;
          }
        }
      if (__1.object_ = this.getPrototype(__1.object_), __1.props_ = null, null === __1.object_) {
        __0.pop();
        return;
      }
    }
  if (!__1.doneVariable_) {
    __1.doneVariable_ = !0;
    var __4 = __2.left;
    if ('VariableDeclaration' === __4.type)
      __1.variable_ = [
        __140.SCOPE_REFERENCE,
        __4.declarations[0].id.name
      ];
    else {
      __1.variable_ = null;
      var __5 = new __140.State(__4, __1.scope);
      return __5.components = !0, __5;
    }
  }
  if (__1.variable_ || (__1.variable_ = __1.value), !__1.doneSetter_) {
    __1.doneSetter_ = !0;
    var __6 = __1.name_,
      __7 = this.setValue(__1.variable_, __6);
    if (__7)
      return this.createSetter_(__7, __1.variable_, __6);
  }
  if (__1.name_ = void 0, __1.doneVariable_ = !1, __1.doneSetter_ = !1, __2.body)
    return new __140.State(__2.body, __1.scope);
}, __140.prototype.stepForStatement = function(__0, __1, __2) {
  switch (__1.mode_) {
    default:
      if (__1.mode_ = 1, __2.init)
        return new __140.State(__2.init, __1.scope);
      break;
    case 1:
      if (__1.mode_ = 2, __2.test)
        return new __140.State(__2.test, __1.scope);
      break;
    case 2:
      if (__1.mode_ = 3, !__2.test || __1.value)
        return __1.isLoop = !0, new __140.State(__2.body, __1.scope);
      __0.pop();
      break;
    case 3:
      if (__1.mode_ = 1, __2.update)
        return new __140.State(__2.update, __1.scope);
  }
}, __140.prototype.stepFunctionDeclaration = function(__0, __1, __2) {
  __0.pop();
}, __140.prototype.stepFunctionExpression = function(__0, __1, __2) {
  __0.pop();
  var __3 = (__1 = __0[__0.length - 1]).scope;
  __2.id && (__3 = this.createSpecialScope(__3)), __1.value = this.createFunction(__2, __3, __1.destinationName), __2.id && this.setProperty(__3.object, __2.id.name, __1.value, __140.READONLY_DESCRIPTOR);
}, __140.prototype.stepIdentifier = function(__0, __1, __2) {
  if (__0.pop(), __1.components) {
    __0[__0.length - 1].value = [
      __140.SCOPE_REFERENCE,
      __2.name
    ];
    return;
  }
  var __3 = this.getValueFromScope(__2.name);
  if (this.getterStep_)
    return this.createGetter_(__3, this.globalObject);
  __0[__0.length - 1].value = __3;
}, __140.prototype.stepIfStatement = __140.prototype.stepConditionalExpression, __140.prototype.stepLabeledStatement = function(__0, __1, __2) {
  __0.pop();
  var __3 = __1.labels || [];
  __3.push(__2.label.name);
  var __4 = new __140.State(__2.body, __1.scope);
  return __4.labels = __3, __4;
}, __140.prototype.stepLiteral = function(__0, __1, __2) {
  __0.pop();
  var __3 = __2.value;
  if (__3 instanceof RegExp) {
    var __4 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(__4, __3), __3 = __4;
  }
  __0[__0.length - 1].value = __3;
}, __140.prototype.stepLogicalExpression = function(__0, __1, __2) {
  if ('&&' !== __2.operator && '||' !== __2.operator)
    throw SyntaxError('Unknown logical operator: ' + __2.operator);
  if (!__1.doneLeft_)
    return __1.doneLeft_ = !0, new __140.State(__2.left, __1.scope);
  if (__1.doneRight_)
    __0.pop(), __0[__0.length - 1].value = __1.value;
  else {
    if (('&&' !== __2.operator || __1.value) && ('||' !== __2.operator || !__1.value))
      return __1.doneRight_ = !0, new __140.State(__2.right, __1.scope);
    __0.pop(), __0[__0.length - 1].value = __1.value;
  }
}, __140.prototype.stepMemberExpression = function(__0, __1, __2) {
  if (!__1.doneObject_)
    return __1.doneObject_ = !0, new __140.State(__2.object, __1.scope);
  if (__2.computed) {
    if (!__1.doneProperty_)
      return __1.object_ = __1.value, __1.doneProperty_ = !0, new __140.State(__2.property, __1.scope);
    __3 = __1.value;
  } else
    __1.object_ = __1.value, __3 = __2.property.name;
  if (__0.pop(), __1.components)
    __0[__0.length - 1].value = [
      __1.object_,
      __3
    ];
  else {
    var __3, __4 = this.getProperty(__1.object_, __3);
    if (this.getterStep_)
      return this.createGetter_(__4, __1.object_);
    __0[__0.length - 1].value = __4;
  }
}, __140.prototype.stepNewExpression = __140.prototype.stepCallExpression, __140.prototype.stepObjectExpression = function(__0, __1, __2) {
  var __3 = __1.n_ || 0,
    __4 = __2.properties[__3];
  if (__1.object_) {
    var __5 = __1.destinationName;
    __1.properties_[__5] || (__1.properties_[__5] = {}), __1.properties_[__5][__4.kind] = __1.value, __1.n_ = ++__3, __4 = __2.properties[__3];
  } else
    __1.object_ = this.createObjectProto(this.OBJECT_PROTO), __1.properties_ = Object.create(null);
  if (__4) {
    var __6 = __4.key;
    if ('Identifier' === __6.type)
      var __5 = __6.name;
    else if ('Literal' === __6.type)
      var __5 = __6.value;
    else
      throw SyntaxError('Unknown object structure: ' + __6.type);
    return __1.destinationName = __5, new __140.State(__4.value, __1.scope);
  }
  for (var __6 in __1.properties_) {
    var __7 = __1.properties_[__6];
    if ('get' in __7 || 'set' in __7) {
      var __8 = {
        configurable: !0,
        enumerable: !0,
        get: __7.get,
        set: __7.set
      };
      this.setProperty(__1.object_, __6, __140.VALUE_IN_DESCRIPTOR, __8);
    } else
      this.setProperty(__1.object_, __6, __7.init);
  }
  __0.pop(), __0[__0.length - 1].value = __1.object_;
}, __140.prototype.stepProgram = function(__0, __1, __2) {
  var __3 = __2.body.shift();
  if (__3)
    return __1.done = !1, new __140.State(__3, __1.scope);
  __1.done = !0;
}, __140.prototype.stepReturnStatement = function(__0, __1, __2) {
  if (__2.argument && !__1.done_)
    return __1.done_ = !0, new __140.State(__2.argument, __1.scope);
  this.unwind(__140.Completion.RETURN, __1.value, void 0);
}, __140.prototype.stepSequenceExpression = function(__0, __1, __2) {
  var __3 = __1.n_ || 0,
    __4 = __2.expressions[__3];
  if (__4)
    return __1.n_ = __3 + 1, new __140.State(__4, __1.scope);
  __0.pop(), __0[__0.length - 1].value = __1.value;
}, __140.prototype.stepSwitchStatement = function(__0, __1, __2) {
  if (!__1.test_)
    return __1.test_ = 1, new __140.State(__2.discriminant, __1.scope);
  for (1 === __1.test_ && (__1.test_ = 2, __1.switchValue_ = __1.value, __1.defaultCase_ = -1);;) {
    var __3 = __1.index_ || 0,
      __4 = __2.cases[__3];
    if (!__1.matched_ && __4 && !__4.test) {
      __1.defaultCase_ = __3, __1.index_ = __3 + 1;
      continue;
    }
    if (!__4 && !__1.matched_ && -1 !== __1.defaultCase_) {
      __1.matched_ = !0, __1.index_ = __1.defaultCase_;
      continue;
    }
    if (__4) {
      if (!__1.matched_ && !__1.tested_ && __4.test)
        return __1.tested_ = !0, new __140.State(__4.test, __1.scope);
      if (__1.matched_ || __1.value === __1.switchValue_) {
        __1.matched_ = !0;
        var __5 = __1.n_ || 0;
        if (__4.consequent[__5])
          return __1.isSwitch = !0, __1.n_ = __5 + 1, new __140.State(__4.consequent[__5], __1.scope);
      }
      __1.tested_ = !1, __1.n_ = 0, __1.index_ = __3 + 1;
    } else {
      __0.pop();
      return;
    }
  }
}, __140.prototype.stepThisExpression = function(__0, __1, __2) {
  __0.pop(), __0[__0.length - 1].value = this.getValueFromScope('this');
}, __140.prototype.stepThrowStatement = function(__0, __1, __2) {
  if (!__1.done_)
    return __1.done_ = !0, new __140.State(__2.argument, __1.scope);
  this.throwException(__1.value);
}, __140.prototype.stepTryStatement = function(__0, __1, __2) {
  if (!__1.doneBlock_)
    return __1.doneBlock_ = !0, new __140.State(__2.block, __1.scope);
  if (__1.cv && __1.cv.type === __140.Completion.THROW && !__1.doneHandler_ && __2.handler) {
    __1.doneHandler_ = !0;
    var __3 = this.createSpecialScope(__1.scope);
    return this.setProperty(__3.object, __2.handler.param.name, __1.cv.value), __1.cv = void 0, new __140.State(__2.handler.body, __3);
  }
  if (!__1.doneFinalizer_ && __2.finalizer)
    return __1.doneFinalizer_ = !0, new __140.State(__2.finalizer, __1.scope);
  __0.pop(), __1.cv && this.unwind(__1.cv.type, __1.cv.value, __1.cv.label);
}, __140.prototype.stepUnaryExpression = function(__0, __1, __2) {
  if (!__1.done_) {
    __1.done_ = !0;
    var __3 = new __140.State(__2.argument, __1.scope);
    return __3.components = 'delete' === __2.operator, __3;
  }
  __0.pop();
  var __4 = __1.value;
  switch (__2.operator) {
    case '-':
      __4 = -__4;
      break;
    case '+':
      __4 = +__4;
      break;
    case '!':
      __4 = !__4;
      break;
    case '~':
      __4 = ~__4;
      break;
    case 'delete':
      var __5 = !0;
      if (Array.isArray(__4)) {
        var __6 = __4[0];
        __6 === __140.SCOPE_REFERENCE && (__6 = __1.scope);
        var __7 = String(__4[1]);
        try {
          delete __6.properties[__7];
        } catch (__8) {
          __1.scope.strict ? this.throwException(this.TYPE_ERROR, 'Cannot delete property \'' + __7 + '\' of \'' + __6 + '\'') : __5 = !1;
        }
      }
      __4 = __5;
      break;
    case 'typeof':
      __4 = __4 && 'Function' === __4.class ? 'function' : typeof __4;
      break;
    case 'void':
      __4 = void 0;
      break;
    default:
      throw SyntaxError('Unknown unary operator: ' + __2.operator);
  }
  __0[__0.length - 1].value = __4;
}, __140.prototype.stepUpdateExpression = function(__0, __1, __2) {
  if (!__1.doneLeft_) {
    __1.doneLeft_ = !0;
    var __3, __4 = new __140.State(__2.argument, __1.scope);
    return __4.components = !0, __4;
  }
  if (__1.leftSide_ || (__1.leftSide_ = __1.value), __1.doneGetter_ && (__1.leftValue_ = __1.value), !__1.doneGetter_) {
    var __5 = this.getValue(__1.leftSide_);
    if (__1.leftValue_ = __5, this.getterStep_) {
      __1.doneGetter_ = !0;
      var __6 = __5;
      return this.createGetter_(__6, __1.leftSide_);
    }
  }
  if (__1.doneSetter_) {
    __0.pop(), __0[__0.length - 1].value = __1.setterValue_;
    return;
  }
  var __5 = Number(__1.leftValue_);
  if ('++' === __2.operator)
    __3 = __5 + 1;
  else if ('--' === __2.operator)
    __3 = __5 - 1;
  else
    throw SyntaxError('Unknown update expression: ' + __2.operator);
  var __7 = __2.prefix ? __3 : __5,
    __8 = this.setValue(__1.leftSide_, __3);
  if (__8)
    return __1.doneSetter_ = !0, __1.setterValue_ = __7, this.createSetter_(__8, __1.leftSide_, __3);
  __0.pop(), __0[__0.length - 1].value = __7;
}, __140.prototype.stepVariableDeclaration = function(__0, __1, __2) {
  var __3 = __2.declarations,
    __4 = __1.n_ || 0,
    __5 = __3[__4];
  for (__1.init_ && __5 && (this.setValueToScope(__5.id.name, __1.value), __1.init_ = !1, __5 = __3[++__4]); __5;) {
    if (__5.init)
      return __1.n_ = __4, __1.init_ = !0, __1.destinationName = __5.id.name, new __140.State(__5.init, __1.scope);
    __5 = __3[++__4];
  }
  __0.pop();
}, __140.prototype.stepWithStatement = function(__0, __1, __2) {
  if (!__1.doneObject_)
    return __1.doneObject_ = !0, new __140.State(__2.object, __1.scope);
  __0.pop();
  var __3 = this.createSpecialScope(__1.scope, __1.value);
  return new __140.State(__2.body, __3);
}, __140.prototype.stepWhileStatement = __140.prototype.stepDoWhileStatement, __140.nativeGlobal.__140 = __140, __140.prototype.step = __140.prototype.step, __140.prototype.run = __140.prototype.run, __140.prototype.getStatus = __140.prototype.getStatus, __140.prototype.appendCode = __140.prototype.appendCode, __140.prototype.createObject = __140.prototype.createObject, __140.prototype.createObjectProto = __140.prototype.createObjectProto, __140.prototype.createNativeFunction = __140.prototype.createNativeFunction, __140.prototype.createAsyncFunction = __140.prototype.createAsyncFunction, __140.prototype.getProperty = __140.prototype.getProperty, __140.prototype.setProperty = __140.prototype.setProperty, __140.prototype.nativeToPseudo = __140.prototype.nativeToPseudo, __140.prototype.pseudoToNative = __140.prototype.pseudoToNative, __140.prototype.getGlobalScope = __140.prototype.getGlobalScope, __140.prototype.setGlobalScope = __140.prototype.setGlobalScope, __140.prototype.getStateStack = __140.prototype.getStateStack, __140.prototype.setStateStack = __140.prototype.setStateStack, __140.Status = __140.Status, __140.VALUE_IN_DESCRIPTOR = __140.VALUE_IN_DESCRIPTOR;