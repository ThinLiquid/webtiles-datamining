/* 0accf157c554c588cb4dd34d17717547546b862bbc6dbac4099ba996daabc5c6 */
! function(e, t) {
  return 'object' == typeof exports && 'object' == typeof module ? t(exports) : 'function' == typeof define && define.amd ? define(['exports'], t) : void t(e.acorn || (e.acorn = {}));
}('undefined' == typeof globalThis ? this || window : globalThis, function(e) {
  'use strict';
  e.version = '0.5.0';
  var __0, __1, __2, __3, __4, __5, __6, __7, __8, __9, __10, __11, __12, __13, __14, __15 = '';
  e.parse = function(e, __3) {
    return __1 = (__15 = String(e)).length,
      function e(__1) {
        for (var __3 in (__0 = __1 || {}, y))
          Object.prototype.hasOwnProperty.call(__0, __3) || (__0[__3] = y[__3]);
        __2 = __0.sourceFile;
      }(__3), __8 = 1, b = __9 = 0, __7 = !0, e4(),
      function e(__1) {
        O = g = b, __0.locations && (__10 = new eM()), __11 = __13 = !1, __12 = [], e3();
        var __2 = __1 || eH(),
          __3 = !0;
        for (__1 || (__2.body = []); __5 !== C;) {
          var __4 = ts();
          __2.body.push(__4), __3 && eQ(__4) && eW(!0), __3 = !1;
        }
        return e9(__2, 'Program');
      }(__0.program);
  };
  var __16 = {
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
    __17 = function(e, __0) {
      for (var __1 = 1, __2 = 0;;) {
        eL.lastIndex = __2;
        var __3 = eL.exec(e);
        if (__3 && __3.index < __0)
          ++__1, __2 = __3.index + __3[0].length;
        else
          break;
      }
      return {
        line: __1,
        column: __0 - __2
      };
    },
    __18 = 0,
    __19 = 0,
    __20 = 0,
    __21 = 0,
    __22 = 0;

  function __23(e, __0) {
    var __1 = __17(__15, e),
      __2 = SyntaxError(__0 += ' (' + __1.line + ':' + __1.column + ')');
    throw __2.pos = e, __2.loc = __1, __2.raisedAt = __18, __2;
  }
  var __24 = [],
    __25 = {
      type: 'num'
    },
    __26 = {
      type: 'regexp'
    },
    __27 = {
      type: 'string'
    },
    __28 = {
      type: 'name'
    },
    __29 = {
      type: 'eof'
    },
    __30 = {
      keyword: 'break'
    },
    __31 = {
      keyword: 'case',
      beforeExpr: !0
    },
    __32 = {
      keyword: 'catch'
    },
    __33 = {
      keyword: 'continue'
    },
    __34 = {
      keyword: 'debugger'
    },
    __35 = {
      keyword: 'default'
    },
    __36 = {
      keyword: 'do',
      isLoop: !0
    },
    __37 = {
      keyword: 'else',
      beforeExpr: !0
    },
    __38 = {
      keyword: 'finally'
    },
    __39 = {
      keyword: 'for',
      isLoop: !0
    },
    __40 = {
      keyword: 'function'
    },
    __41 = {
      keyword: 'if'
    },
    __42 = {
      keyword: 'return',
      beforeExpr: !0
    },
    __43 = {
      keyword: 'switch'
    },
    __44 = {
      keyword: 'throw',
      beforeExpr: !0
    },
    __45 = {
      keyword: 'try'
    },
    __46 = {
      keyword: 'var'
    },
    __47 = {
      keyword: 'while',
      isLoop: !0
    },
    __48 = {
      keyword: 'with'
    },
    __49 = {
      keyword: 'new',
      beforeExpr: !0
    },
    __50 = {
      keyword: 'this'
    },
    __51 = {
      keyword: 'null',
      atomValue: null
    },
    __52 = {
      keyword: 'true',
      atomValue: !0
    },
    __53 = {
      keyword: 'false',
      atomValue: !1
    },
    __54 = {
      keyword: 'in',
      binop: 7,
      beforeExpr: !0
    },
    __55 = {
      break: __30,
      case: __31,
      catch: __32,
      continue: __33,
      debugger: __34,
      default: __35,
      do: __36,
      else: __37,
      finally: __38,
      for: __39,
      function: __40,
      if: __41,
      return: __42,
      switch: __43,
      throw: __44,
      try: __45,
      var: __46,
      while: __47,
      with: __48,
      null: __51,
      true: __52,
      false: __53,
      new: __49,
      in: __54,
      instanceof: {
        keyword: 'instanceof',
        binop: 7,
        beforeExpr: !0
      },
      this: __50,
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
    __56 = {
      type: '[',
      beforeExpr: !0
    },
    __57 = {
      type: ']'
    },
    __58 = {
      type: '{',
      beforeExpr: !0
    },
    __59 = {
      type: '}'
    },
    __60 = {
      type: '(',
      beforeExpr: !0
    },
    __61 = {
      type: ')'
    },
    __62 = {
      type: ',',
      beforeExpr: !0
    },
    __63 = {
      type: ';',
      beforeExpr: !0
    },
    __64 = {
      type: ':',
      beforeExpr: !0
    },
    __65 = {
      type: '.'
    },
    __66 = {
      type: '?',
      beforeExpr: !0
    },
    __67 = {
      binop: 10,
      beforeExpr: !0
    },
    __68 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __69 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __70 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    __71 = {
      prefix: !0,
      beforeExpr: !0
    },
    __72 = {
      binop: 1,
      beforeExpr: !0
    },
    __73 = {
      binop: 2,
      beforeExpr: !0
    },
    __74 = {
      binop: 3,
      beforeExpr: !0
    },
    __75 = {
      binop: 4,
      beforeExpr: !0
    },
    __76 = {
      binop: 5,
      beforeExpr: !0
    },
    __77 = {
      binop: 6,
      beforeExpr: !0
    },
    __78 = {
      binop: 7,
      beforeExpr: !0
    },
    __79 = {
      binop: 8,
      beforeExpr: !0
    },
    __80 = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    __81 = {
      binop: 10,
      beforeExpr: !0
    };

  function __82(e) {
    for (var __0 = e.split(' '), __1 = Object.create(null), __2 = 0; __2 < __0.length; __2++)
      __1[__0[__2]] = !0;
    return function(e) {
      return __1[e] || !1;
    };
  }
  var __83 = __82('class enum extends super const export import'),
    __84 = __82('implements interface let package private protected public static yield'),
    __85 = __82('eval arguments'),
    __86 = __82('break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
    __87 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    __88 = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
    __89 = RegExp('[' + __88 + ']'),
    __90 = RegExp('[' + __88 + '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'),
    __91 = /[\n\r\u2028\u2029]/,
    __92 = /\r\n|[\n\r\u2028\u2029]/g,
    __93 = function(e) {
      return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __89.test(String.fromCharCode(e)));
    },
    __94 = function(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __90.test(String.fromCharCode(e))));
    };

  function __95() {
    this.line = __8, this.column = __18 - __9;
  }

  function __96(e, __1) {
    __20 = __18, __0.locations && (__4 = new __95()), __5 = e, e4(), __6 = __1, __7 = e.beforeExpr;
  }

  function __97() {
    var __98, __1 = __0.onComment && __0.locations && new __95(),
      __2 = __18,
      __3 = __15.indexOf('*/', __18 += 2);
    if (-1 === __3 && __23(__18 - 2, 'Unterminated comment'), __18 = __3 + 2, __0.locations)
      for (__92.lastIndex = __2;
        (__98 = __92.exec(__15)) && __98.index < __18;)
        ++__8, __9 = __98.index + __98[0].length;
    __0.onComment && __0.onComment(!0, __15.slice(__2 + 2, __3), __2, __18, __1, __0.locations && new __95());
  }

  function __99() {
    for (var __98 = __18, __2 = __0.onComment && __0.locations && new __95(), __3 = __15.charCodeAt(__18 += 2); __18 < __1 && 10 !== __3 && 13 !== __3 && 8232 !== __3 && 8233 !== __3;)
      ++__18, __3 = __15.charCodeAt(__18);
    __0.onComment && __0.onComment(!1, __15.slice(__98 + 2, __18), __98, __18, __2, __0.locations && new __95());
  }

  function __100() {
    for (; __18 < __1;) {
      var __98 = __15.charCodeAt(__18);
      if (32 === __98)
        ++__18;
      else if (13 === __98) {
        ++__18;
        var __2 = __15.charCodeAt(__18);
        10 === __2 && ++__18, __0.locations && (++__8, __9 = __18);
      } else if (10 === __98 || 8232 === __98 || 8233 === __98)
        ++__18, __0.locations && (++__8, __9 = __18);
      else if (__98 > 8 && __98 < 14)
        ++__18;
      else if (47 === __98) {
        var __2 = __15.charCodeAt(__18 + 1);
        if (42 === __2)
          __97();
        else if (47 === __2)
          __99();
        else
          break;
      } else if (160 === __98)
        ++__18;
      else if (__98 >= 5760 && __87.test(String.fromCharCode(__98)))
        ++__18;
      else
        break;
    }
  }

  function __101(__98) {
    if (__98 ? __18 = __19 + 1 : __19 = __18, __0.locations && (__3 = new __95()), __98)
      return e5();
    if (__18 >= __1)
      return __96(__29);
    var __2 = __15.charCodeAt(__18);
    if (__93(__2) || 92 === __2)
      return eX();
    if (!1 === function __98(__2) {
        switch (__2) {
          case 46:
            return void((__4 = __15.charCodeAt(__18 + 1)) >= 48 && __4 <= 57 ? eG(!0) : (++__18, __96(__65)));
          case 40:
            return ++__18, __96(__60);
          case 41:
            return ++__18, __96(__61);
          case 59:
            return ++__18, __96(__63);
          case 44:
            return ++__18, __96(__62);
          case 91:
            return ++__18, __96(__56);
          case 93:
            return ++__18, __96(__57);
          case 123:
            return ++__18, __96(__58);
          case 125:
            return ++__18, __96(__59);
          case 58:
            return ++__18, __96(__64);
          case 63:
            return ++__18, __96(__66);
          case 48:
            var __3, __4, __5, __6, __10, __11, __12 = __15.charCodeAt(__18 + 1);
            if (120 === __12 || 88 === __12) {
              return __18 += 2, __3 = e2(16), void(null === __3 && __23(__19 + 2, 'Expected hexadecimal number'), __93(__15.charCodeAt(__18)) && __23(__18, 'Identifier directly after number'), __96(__25, __3));
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
            return function __98(__2) {
              __18++;
              for (var __3 = '';;) {
                __18 >= __1 && __23(__19, 'Unterminated string constant');
                var __4 = __15.charCodeAt(__18);
                if (__4 === __2) {
                  ++__18, __96(__27, __3);
                  return;
                }
                if (92 === __4) {
                  __4 = __15.charCodeAt(++__18);
                  var __5 = /^[0-7]+/.exec(__15.slice(__18, __18 + 3));
                  for (__5 && (__5 = __5[0]); __5 && parseInt(__5, 8) > 255;)
                    __5 = __5.slice(0, -1);
                  if ('0' === __5 && (__5 = null), ++__18, __5)
                    __13 && __23(__18 - 2, 'Octal literal in strict mode'), __3 += String.fromCharCode(parseInt(__5, 8)), __18 += __5.length - 1;
                  else
                    switch (__4) {
                      case 110:
                        __3 += '\n';
                        break;
                      case 114:
                        __3 += '\r';
                        break;
                      case 120:
                        __3 += String.fromCharCode(eY(2));
                        break;
                      case 117:
                        __3 += String.fromCharCode(eY(4));
                        break;
                      case 85:
                        __3 += String.fromCharCode(eY(8));
                        break;
                      case 116:
                        __3 += '\t';
                        break;
                      case 98:
                        __3 += '\b';
                        break;
                      case 118:
                        __3 += '\x0B';
                        break;
                      case 102:
                        __3 += '\f';
                        break;
                      case 48:
                        __3 += '\0';
                        break;
                      case 13:
                        10 === __15.charCodeAt(__18) && ++__18;
                      case 10:
                        __0.locations && (__9 = __18, ++__8);
                        break;
                      default:
                        __3 += String.fromCharCode(__4);
                    }
                } else
                  (13 === __4 || 10 === __4 || 8232 === __4 || 8233 === __4) && __23(__19, 'Unterminated string constant'), __3 += String.fromCharCode(__4), ++__18;
              }
            }(__2);
          case 47:
            return __5 = __15.charCodeAt(__18 + 1), void(__7 ? (++__18, e5()) : 61 === __5 ? e7(__69, 2) : e7(__67, 1));
          case 37:
          case 42:
            return void(61 === __15.charCodeAt(__18 + 1) ? e7(__69, 2) : e7(__81, 1));
          case 124:
          case 38:
            return __6 = __2, void((__10 = __15.charCodeAt(__18 + 1)) === __6 ? e7(124 === __6 ? __72 : __73, 2) : 61 === __10 ? e7(__69, 2) : e7(124 === __6 ? __74 : __76, 1));
          case 94:
            return void(61 === __15.charCodeAt(__18 + 1) ? e7(__69, 2) : e7(__75, 1));
          case 43:
          case 45:
            return function __98(__0) {
              var __1 = __15.charCodeAt(__18 + 1);
              if (__1 === __0) {
                if (45 === __1 && 62 === __15.charCodeAt(__18 + 2) && __91.test(__15.slice(__22, __18))) {
                  __18 += 3, __99(), __100(), __101();
                  return;
                }
                e7(__70, 2);
              } else
                61 === __1 ? e7(__69, 2) : e7(__80, 1);
            }(__2);
          case 60:
          case 62:
            return function __98(__0) {
              var __1 = __15.charCodeAt(__18 + 1),
                __2 = 1;
              if (__1 === __0) {
                __2 = 62 === __0 && 62 === __15.charCodeAt(__18 + 2) ? 3 : 2, 61 === __15.charCodeAt(__18 + __2) ? e7(__69, __2 + 1) : e7(__79, __2);
                return;
              }
              if (33 === __1 && 60 === __0 && 45 === __15.charCodeAt(__18 + 2) && 45 === __15.charCodeAt(__18 + 3)) {
                __18 += 4, __99(), __100(), __101();
                return;
              }
              61 === __1 && (__2 = 61 === __15.charCodeAt(__18 + 2) ? 3 : 2), e7(__78, __2);
            }(__2);
          case 61:
          case 33:
            return __11 = __2, void(61 === __15.charCodeAt(__18 + 1) ? e7(__77, 61 === __15.charCodeAt(__18 + 2) ? 3 : 2) : e7(61 === __11 ? __68 : __71, 1));
          case 126:
            return e7(__71, 1);
        }
        return !1;
      }(__2)) {
      var __4 = String.fromCharCode(__2);
      if ('\\' === __4 || __89.test(__4))
        return eX();
      __23(__18, 'Unexpected character \'' + __4 + '\'');
    }
  }

  function __102(__98, __0) {
    var __1 = __15.slice(__18, __18 + __0);
    __18 += __0, __96(__98, __1);
  }

  function __103() {
    for (var __98, __0, __2 = __18;;) {
      __18 >= __1 && __23(__2, 'Unterminated regexp');
      var __3 = __15.charAt(__18);
      if (__91.test(__3) && __23(__2, 'Unterminated regexp'), __98)
        __98 = !1;
      else {
        if ('[' === __3)
          __0 = !0;
        else if (']' === __3 && __0)
          __0 = !1;
        else if ('/' === __3 && !__0)
          break;
        __98 = '\\' === __3;
      }
      ++__18;
    }
    var __4 = __15.slice(__2, __18);
    ++__18;
    var __5 = eV();
    __5 && !/^[gmi]*$/.test(__5) && __23(__2, 'Invalid regexp flag');
    try {
      var __6 = RegExp(__4, __5);
    } catch (__7) {
      throw __7 instanceof SyntaxError && __23(__2, __7.message), __7;
    }
    __96(__26, __6);
  }

  function __104(__98, __0) {
    for (var __1 = __18, __2 = 0, __3 = void 0 === __0 ? 1 / 0 : __0, __4 = 0; __4 < __3; ++__4) {
      var __5, __6 = __15.charCodeAt(__18);
      if ((__5 = __6 >= 97 ? __6 - 97 + 10 : __6 >= 65 ? __6 - 65 + 10 : __6 >= 48 && __6 <= 57 ? __6 - 48 : 1 / 0) >= __98)
        break;
      ++__18, __2 = __2 * __98 + __5;
    }
    return __18 === __1 || void 0 !== __0 && __18 - __1 !== __0 ? null : __2;
  }

  function __105(__98) {
    var __0, __1 = __18,
      __2 = !1,
      __3 = 48 === __15.charCodeAt(__18);
    __98 || null !== __104(10) || __23(__1, 'Invalid number'), 46 === __15.charCodeAt(__18) && (++__18, __104(10), __2 = !0);
    var __4 = __15.charCodeAt(__18);
    (69 === __4 || 101 === __4) && ((43 === (__4 = __15.charCodeAt(++__18)) || 45 === __4) && ++__18, null === __104(10) && __23(__1, 'Invalid number'), __2 = !0), __93(__15.charCodeAt(__18)) && __23(__18, 'Identifier directly after number');
    var __5 = __15.slice(__1, __18);
    __2 ? __0 = parseFloat(__5) : __3 && 1 !== __5.length ? /[89]/.test(__5) || __13 ? __23(__1, 'Invalid number') : __0 = parseInt(__5, 8) : __0 = parseInt(__5, 10), __96(__25, __0);
  }

  function __106(__98) {
    var __0 = __104(16, __98);
    return null === __0 && __23(__19, 'Bad character escape sequence'), __0;
  }

  function __107() {
    __14 = !1;
    for (var __98, __0 = !0, __1 = __18;;) {
      var __2 = __15.charCodeAt(__18);
      if (__94(__2))
        __14 && (__98 += __15.charAt(__18)), ++__18;
      else if (92 === __2) {
        __14 || (__98 = __15.slice(__1, __18)), __14 = !0, 117 !== __15.charCodeAt(++__18) && __23(__18, 'Expecting Unicode escape sequence \\uXXXX'), ++__18;
        var __3 = __106(4),
          __4 = String.fromCharCode(__3);
        __4 || __23(__18 - 1, 'Invalid Unicode escape'), (__0 ? __93(__3) : __94(__3)) || __23(__18 - 4, 'Invalid Unicode escape'), __98 += __4;
      } else
        break;
      __0 = !1;
    }
    return __14 ? __98 : __15.slice(__1, __18);
  }

  function __108() {
    var __98 = __107(),
      __0 = __28;
    !__14 && __86(__98) && (__0 = __55[__98]), __96(__0, __98);
  }

  function __109() {
    __21 = __19, __22 = __20, __10 = __4, __101();
  }

  function __110(__98) {
    if (__13 = __98, __18 = __19, __0.locations)
      for (; __18 < __9;)
        __9 = __15.lastIndexOf('\n', __9 - 2) + 1, --__8;
    __100(), __101();
  }

  function __111() {
    this.type = null, this.start = __19, this.end = null;
  }

  function __112() {
    this.start = __3, this.end = null, __2 && (this.source = __2);
  }

  function __113() {
    var __98 = new __111();
    return __0.locations && (__98.loc = new __112()), __0.directSourceFile && (__98.sourceFile = __0.directSourceFile), __0.ranges && (__98.range = [
      __19,
      0
    ]), __98;
  }

  function __114(__98) {
    var __1 = new __111();
    return __1.start = __98.start, __0.locations && (__1.loc = new __112(), __1.loc.start = __98.loc.start), __0.ranges && (__1.range = [
      __98.range[0],
      0
    ]), __1;
  }

  function __115(__98, __1) {
    return __98.type = __1, __98.end = __22, __0.locations && (__98.loc.end = __10), __0.ranges && (__98.range[1] = __22), __98;
  }

  function __116(__98) {
    return 'ExpressionStatement' === __98.type && 'Literal' === __98.expression.type && 'use strict' === __98.expression.value;
  }

  function __117(__98) {
    return __5 === __98 && (__109(), !0);
  }

  function __118() {
    return !__0.strictSemicolons && (__5 === __29 || __5 === __59 || __91.test(__15.slice(__22, __19)));
  }

  function __119() {
    __117(__63) || __118() || tn();
  }

  function __120(__98) {
    __5 === __98 ? __109() : tn();
  }

  function __121() {
    __23(__19, 'Unexpected token');
  }

  function __122(__98) {
    'Identifier' !== __98.type && 'MemberExpression' !== __98.type && __23(__98.start, 'Assigning to rvalue'), __13 && 'Identifier' === __98.type && __85(__98.name) && __23(__98.start, 'Assigning to ' + __98.name + ' in strict mode');
  }
  var __123 = {
      kind: 'loop'
    },
    __124 = {
      kind: 'switch'
    };

  function __125() {
    (__5 === __67 || __5 === __69 && '/=' === __6) && __101(!0);
    var __98, __1, __2 = __5,
      __3 = __113();
    switch (__2) {
      case __30:
      case __33:
        __109();
        var __4 = __2 === __30;
        __117(__63) || __118() ? __3.label = null : __5 !== __28 ? __121() : (__3.label = tI(), __119());
        for (var __7 = 0; __7 < __12.length; ++__7) {
          var __8 = __12[__7];
          if ((null === __3.label || __8.name === __3.label.name) && (null !== __8.kind && (__4 || 'loop' === __8.kind) || __3.label && __4))
            break;
        }
        return __7 === __12.length && __23(__3.start, 'Unsyntactic ' + __2.keyword), __115(__3, __4 ? 'BreakStatement' : 'ContinueStatement');
      case __34:
        return __109(), __119(), __115(__3, 'DebuggerStatement');
      case __36:
        return __109(), __12.push(__123), __3.body = __125(), __12.pop(), __120(__47), __3.test = tp(), __119(), __115(__3, 'DoWhileStatement');
      case __39:
        if (__109(), __12.push(__123), __120(__60), __5 === __63)
          return tc(__3, null);
        if (__5 === __46) {
          var __9 = __113();
          if (__109(), th(__9, !0), __115(__9, 'VariableDeclaration'), 1 === __9.declarations.length && __117(__54))
            return tl(__3, __9);
          return tc(__3, __9);
        }
        var __9 = tf(!1, !0);
        if (__117(__54))
          return __122(__9), tl(__3, __9);
        return tc(__3, __9);
      case __40:
        return __109(), tb(__3, !0);
      case __41:
        return __109(), __3.test = tp(), __3.consequent = __125(), __3.alternate = __117(__37) ? __125() : null, __115(__3, 'IfStatement');
      case __42:
        return __11 || __0.allowReturnOutsideFunction || __23(__19, '\'return\' outside of function'), __109(), __117(__63) || __118() ? __3.argument = null : (__3.argument = tf(), __119()), __115(__3, 'ReturnStatement');
      case __43:
        for (__109(), __3.discriminant = tp(), __3.cases = [], __120(__58), __12.push(__124); __5 !== __59;)
          if (__5 === __31 || __5 === __35) {
            var __10 = __5 === __31;
            __98 && __115(__98, 'SwitchCase'), __3.cases.push(__98 = __113()), __98.consequent = [], __109(), __10 ? __98.test = tf() : (__1 && __23(__21, 'Multiple default clauses'), __1 = !0, __98.test = null), __120(__64);
          } else
            __98 || __121(), __98.consequent.push(__125());
        return __98 && __115(__98, 'SwitchCase'), __109(), __12.pop(), __115(__3, 'SwitchStatement');
      case __44:
        return __109(), __91.test(__15.slice(__22, __19)) && __23(__22, 'Illegal newline after throw'), __3.argument = tf(), __119(), __115(__3, 'ThrowStatement');
      case __45:
        if (__109(), __3.block = tu(), __3.handler = null, __5 === __32) {
          var __14 = __113();
          __109(), __120(__60), __14.param = tI(), __13 && __85(__14.param.name) && __23(__14.param.start, 'Binding ' + __14.param.name + ' in strict mode'), __120(__61), __14.body = tu(), __3.handler = __115(__14, 'CatchClause');
        }
        return __3.finalizer = __117(__38) ? tu() : null, __3.handler || __3.finalizer || __23(__3.start, 'Missing catch or finally clause'), __115(__3, 'TryStatement');
      case __46:
        return __109(), th(__3), __119(), __115(__3, 'VariableDeclaration');
      case __47:
        return __109(), __3.test = tp(), __12.push(__123), __3.body = __125(), __12.pop(), __115(__3, 'WhileStatement');
      case __48:
        return __13 && __23(__19, '\'with\' in strict mode'), __109(), __3.object = tp(), __3.body = __125(), __115(__3, 'WithStatement');
      case __58:
        return tu();
      case __63:
        return __109(), __115(__3, 'EmptyStatement');
      default:
        var __16 = __6,
          __17 = tf();
        if (!(__2 === __28 && 'Identifier' === __17.type && __117(__64)))
          return __3.expression = __17, __119(), __115(__3, 'ExpressionStatement');
        for (var __7 = 0; __7 < __12.length; ++__7)
          __12[__7].name === __16 && __23(__17.start, 'Label \'' + __16 + '\' is already declared');
        var __18 = __5.isLoop ? 'loop' : __5 === __43 ? 'switch' : null;
        return __12.push({
          name: __16,
          kind: __18
        }), __3.body = __125(), __12.pop(), __3.label = __17, __115(__3, 'LabeledStatement');
    }
  }

  function __126() {
    __120(__60);
    var __98 = tf();
    return __120(__61), __98;
  }

  function __127(__98) {
    var __0, __1 = __113(),
      __2 = !0,
      __3 = !1;
    for (__1.body = [], __120(__58); !__117(__59);) {
      var __4 = __125();
      __1.body.push(__4), __2 && __98 && __116(__4) && (__0 = __3, __110(__3 = !0)), __2 = !1;
    }
    return __3 && !__0 && __110(!1), __115(__1, 'BlockStatement');
  }

  function __128(__98, __0) {
    return __98.init = __0, __120(__63), __98.test = __5 === __63 ? null : tf(), __120(__63), __98.update = __5 === __61 ? null : tf(), __120(__61), __98.body = __125(), __12.pop(), __115(__98, 'ForStatement');
  }

  function __129(__98, __0) {
    return __98.left = __0, __98.right = tf(), __120(__61), __98.body = __125(), __12.pop(), __115(__98, 'ForInStatement');
  }

  function __130(__98, __0) {
    for (__98.declarations = [], __98.kind = 'var';;) {
      var __1 = __113();
      if (__1.id = tI(), __13 && __85(__1.id.name) && __23(__1.id.start, 'Binding ' + __1.id.name + ' in strict mode'), __1.init = __117(__68) ? tf(!0, __0) : null, __98.declarations.push(__115(__1, 'VariableDeclarator')), !__117(__62))
        break;
    }
  }

  function __131(__98, __0) {
    var __1 = td(__0);
    if (!__98 && __5 === __62) {
      var __2 = __114(__1);
      for (__2.expressions = [__1]; __117(__62);)
        __2.expressions.push(td(__0));
      return __115(__2, 'SequenceExpression');
    }
    return __1;
  }

  function __132(__98) {
    var __0 = function __98(__0) {
      var __1, __2 = (__1 = __0, function __98(__0, __1, __2) {
        var __3 = __5.binop;
        if (null !== __3 && (!__2 || __5 !== __54) && __3 > __1) {
          var __4 = __114(__0);
          __4.left = __0, __4.operator = __6;
          var __7 = __5;
          __109(), __4.right = __98(tE(), __3, __2);
          var __8 = __115(__4, __7 === __72 || __7 === __73 ? 'LogicalExpression' : 'BinaryExpression');
          return __98(__8, __1, __2);
        }
        return __0;
      }(tE(), -1, __1));
      if (__117(__66)) {
        var __3 = __114(__2);
        return __3.test = __2, __3.consequent = __131(!0), __120(__64), __3.alternate = __131(!0, __0), __115(__3, 'ConditionalExpression');
      }
      return __2;
    }(__98);
    if (__5.isAssign) {
      var __1 = __114(__0);
      return __1.operator = __6, __1.left = __0, __109(), __1.right = __132(__98), __122(__0), __115(__1, 'AssignmentExpression');
    }
    return __0;
  }

  function __133() {
    if (__5.prefix) {
      var __98 = __113(),
        __0 = __5.isUpdate;
      return __98.operator = __6, __98.prefix = !0, __7 = !0, __109(), __98.argument = __133(), __0 ? __122(__98.argument) : __13 && 'delete' === __98.operator && 'Identifier' === __98.argument.type && __23(__98.start, 'Deleting local variable in strict mode'), __115(__98, __0 ? 'UpdateExpression' : 'UnaryExpression');
    }
    for (var __1 = t$(ty()); __5.postfix && !__118();) {
      var __98 = __114(__1);
      __98.operator = __6, __98.prefix = !1, __98.argument = __1, __122(__1), __109(), __1 = __115(__98, 'UpdateExpression');
    }
    return __1;
  }

  function __134(__98, __0) {
    var __1;
    return __117(__65) ? ((__1 = __114(__98)).object = __98, __1.property = tI(!0), __1.computed = !1, __134(__115(__1, 'MemberExpression'), __0)) : __117(__56) ? ((__1 = __114(__98)).object = __98, __1.property = __131(), __1.computed = !0, __120(__57), __134(__115(__1, 'MemberExpression'), __0)) : !__0 && __117(__60) ? ((__1 = __114(__98)).callee = __98, __1.arguments = tR(__61, !1), __134(__115(__1, 'CallExpression'), __0)) : __98;
  }

  function __135() {
    switch (__5) {
      case __50:
        return __98 = __113(), __109(), __115(__98, 'ThisExpression');
      case __28:
        return tI();
      case __25:
      case __27:
      case __26:
        return (__98 = __113()).value = __6, __98.raw = __15.slice(__19, __20), __109(), __115(__98, 'Literal');
      case __51:
      case __52:
      case __53:
        return (__98 = __113()).value = __5.atomValue, __98.raw = __5.keyword, __109(), __115(__98, 'Literal');
      case __60:
        var __98, __1, __2 = __3,
          __7 = __19;
        __109();
        var __8 = __131();
        return __8.start = __7, __8.end = __20, __0.locations && (__8.loc.start = __2, __8.loc.end = __4), __0.ranges && (__8.range = [
          __7,
          __20
        ]), __120(__61), __8;
      case __56:
        return __98 = __113(), __109(), __98.elements = tR(__57, !0, !0), __115(__98, 'ArrayExpression');
      case __58:
        return function __98() {
          var __1 = __113(),
            __2 = !0,
            __3 = !1;
          for (__1.properties = [], __109(); !__117(__59);) {
            if (__2)
              __2 = !1;
            else if (__120(__62), __0.allowTrailingCommas && __117(__59))
              break;
            var __4, __6 = {
                key: tv()
              },
              __7 = !1;
            if (__117(__64) ? (__6.value = __131(!0), __4 = __6.kind = 'init') : 'Identifier' === __6.key.type && ('get' === __6.key.name || 'set' === __6.key.name) ? (__7 = __3 = !0, __4 = __6.kind = __6.key.name, __6.key = tv(), __5 !== __60 && __121(), __6.value = tb(__113(), !1)) : __121(), 'Identifier' === __6.key.type && (__13 || __3))
              for (var __8 = 0; __8 < __1.properties.length; ++__8) {
                var __9 = __1.properties[__8];
                if (__9.key.name === __6.key.name) {
                  var __10 = __4 === __9.kind || __7 && 'init' === __9.kind || 'init' === __4 && ('get' === __9.kind || 'set' === __9.kind);
                  __10 && !__13 && 'init' === __4 && 'init' === __9.kind && (__10 = !1), __10 && __23(__6.key.start, 'Redefinition of property');
                }
              }
            __1.properties.push(__6);
          }
          return __115(__1, 'ObjectExpression');
        }();
      case __40:
        return __98 = __113(), __109(), tb(__98, !1);
      case __49:
        return __1 = __113(), __109(), __1.callee = __134(__135(), !0), __1.arguments = __117(__60) ? tR(__61, !1) : __24, __115(__1, 'NewExpression');
    }
    __121();
  }

  function __136() {
    return __5 === __25 || __5 === __27 ? __135() : tI(!0);
  }

  function __137(__98, __0) {
    __5 === __28 ? __98.id = tI() : __0 ? __121() : __98.id = null, __98.params = [];
    var __1 = !0;
    for (__120(__60); !__117(__61);)
      __1 ? __1 = !1 : __120(__62), __98.params.push(tI());
    var __2 = __11,
      __3 = __12;
    if (__11 = !0, __12 = [], __98.body = __127(!0), __11 = __2, __12 = __3, __13 || __98.body.body.length && __116(__98.body.body[0]))
      for (var __4 = __98.id ? -1 : 0; __4 < __98.params.length; ++__4) {
        var __6 = __4 < 0 ? __98.id : __98.params[__4];
        if ((__84(__6.name) || __85(__6.name)) && __23(__6.start, 'Defining \'' + __6.name + '\' in strict mode'), __4 >= 0)
          for (var __7 = 0; __7 < __4; ++__7)
            __6.name === __98.params[__7].name && __23(__6.start, 'Argument name clash in strict mode');
      }
    return __115(__98, __0 ? 'FunctionDeclaration' : 'FunctionExpression');
  }

  function __138(__98, __1, __2) {
    for (var __3 = [], __4 = !0; !__117(__98);) {
      if (__4)
        __4 = !1;
      else if (__120(__62), __1 && __0.allowTrailingCommas && __117(__98))
        break;
      __3.push(__2 && __5 === __62 ? null : __131(!0));
    }
    return __3;
  }

  function __139(__98) {
    var __1 = __113();
    return __98 && 'everywhere' === __0.forbidReserved && (__98 = !1), __5 === __28 ? (!__98 && (__0.forbidReserved && __83(__6) || __13 && __84(__6)) && -1 === __15.slice(__19, __20).indexOf('\\') && __23(__19, 'The keyword \'' + __6 + '\' is reserved'), __1.name = __6) : __98 && __5.keyword ? __1.name = __5.keyword : __121(), __7 = !1, __109(), __115(__1, 'Identifier');
  }
});
var __140 = function(__98, __0) {
  'string' == typeof __98 && (__98 = this.parse_(__98, 'code'));
  var __1, __2 = __98.constructor;
  this.newNode = function() {
    return new __2({
      options: {}
    });
  };
  var __3 = this.newNode();
  for (var __4 in __98)
    __3[__4] = 'body' === __4 ? __98[__4].slice() : __98[__4];
  this.ast = __3, this.tasks = [], this.initFunc_ = __0, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var __5 = /^step([A-Z]\w*)$/;
  for (var __6 in this)
    'function' == typeof this[__6] && (__1 = __6.match(__5)) && (this.stepFunctions_[__1[1]] = this[__6].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join('\n'), 'polyfills'), this.polyfills_ = void 0, __140.stripLocations_(this.ast, void 0, void 0);
  var __7 = new __140.State(this.ast, this.globalScope);
  __7.done = !1, this.stateStack = [__7], this.run(), this.value = void 0, this.ast = __3, (__7 = new __140.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = __7;
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
], __140.legalArrayLength = function(__98) {
  var __0 = __98 >>> 0;
  return __0 === Number(__98) ? __0 : NaN;
}, __140.legalArrayIndex = function(__98) {
  var __0 = __98 >>> 0;
  return String(__0) === String(__98) && 4294967295 !== __0 ? __0 : NaN;
}, __140.stripLocations_ = function(__98, __0, __1) {
  for (var __2 in (__0 ? __98.start = __0 : delete __98.start, __1 ? __98.end = __1 : delete __98.end, __98))
    if (__98[__2] !== __98.loc && __98.hasOwnProperty(__2)) {
      var __3 = __98[__2];
      __3 && 'object' == typeof __3 && __140.stripLocations_(__3, __0, __1);
    }
}, __140.prototype.REGEXP_MODE = 2, __140.prototype.REGEXP_THREAD_TIMEOUT = 1000, __140.prototype.POLYFILL_TIMEOUT = 1000, __140.prototype.getterStep_ = !1, __140.prototype.setterStep_ = !1, __140.prototype.appendCodeNumber_ = 0, __140.prototype.taskCodeNumber_ = 0, __140.prototype.parse_ = function(__98, __0) {
  var __1 = {};
  for (var __2 in __140.PARSE_OPTIONS)
    __1[__2] = __140.PARSE_OPTIONS[__2];
  return __1.sourceFile = __0, __140.nativeGlobal.acorn.parse(__98, __1);
}, __140.prototype.appendCode = function(__98) {
  var __0 = this.stateStack[0];
  if (!__0 || 'Program' !== __0.node.type)
    throw Error('Expecting original AST to start with a Program node');
  if ('string' == typeof __98 && (__98 = this.parse_(__98, 'appendCode' + this.appendCodeNumber_++)), !__98 || 'Program' !== __98.type)
    throw Error('Expecting new AST to start with a Program node');
  this.populateScope_(__98, __0.scope), Array.prototype.push.apply(__0.node.body, __98.body), __0.node.body.variableCache_ = null, __0.done = !1;
}, __140.prototype.step = function() {
  var __98, __0 = this.stateStack;
  do {
    var __1 = __0[__0.length - 1];
    if (this.paused_)
      break;
    if (!__1 || 'Program' === __1.node.type && __1.done) {
      if (!this.tasks.length)
        return !1;
      if (!(__1 = this.nextTask_()))
        break;
    }
    var __2 = __1.node,
      __3 = __140.currentInterpreter_;
    __140.currentInterpreter_ = this;
    try {
      var __4 = this.stepFunctions_[__2.type](__0, __1, __2);
    } catch (__5) {
      if (__5 !== __140.STEP_ERROR)
        throw this.value !== __5 && (this.value = void 0), __5;
    } finally {
      __140.currentInterpreter_ = __3;
    }
    if (__4 && __0.push(__4), this.getterStep_)
      throw this.value = void 0, Error('Getter not supported in this context');
    if (this.setterStep_)
      throw this.value = void 0, Error('Setter not supported in this context');
    __98 || __2.end || (__98 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!__2.end && __98 > Date.now());
  return !0;
}, __140.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, __140.prototype.getStatus = function() {
  if (this.paused_)
    return __140.Status.ASYNC;
  var __98 = this.stateStack,
    __0 = __98[__98.length - 1];
  if (__0 && ('Program' !== __0.node.type || !__0.done))
    return __140.Status.STEP;
  var __1 = this.tasks[0];
  return __1 ? __1.time > Date.now() ? __140.Status.TASK : __140.Status.STEP : (0, __140.Status.DONE);
}, __140.prototype.initGlobal = function(__98) {
  this.setProperty(__98, 'NaN', NaN, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'Infinity', 1 / 0, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'undefined', void 0, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'window', __98, __140.READONLY_DESCRIPTOR), this.setProperty(__98, 'this', __98, __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'self', __98), this.OBJECT_PROTO = new __140.Object(null), this.FUNCTION_PROTO = new __140.Object(this.OBJECT_PROTO), this.initFunction(__98), this.initObject(__98), __98.proto = this.OBJECT_PROTO, this.setProperty(__98, 'constructor', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR), this.initArray(__98), this.initString(__98), this.initBoolean(__98), this.initNumber(__98), this.initDate(__98), this.initRegExp(__98), this.initError(__98), this.initMath(__98), this.initJSON(__98);
  var __0, __1 = this,
    __2 = this.createNativeFunction(function(__98) {
      throw EvalError('Can\'t happen');
    }, !1);
  __2.eval = !0, this.setProperty(__98, 'eval', __2, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'parseInt', this.createNativeFunction(parseInt, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'parseFloat', this.createNativeFunction(parseFloat, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'isNaN', this.createNativeFunction(isNaN, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'isFinite', this.createNativeFunction(isFinite, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __3 = [
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
    ], __4 = 0; __4 < __3.length; __4++)
    __0 = function(__98) {
      return function(__0) {
        try {
          return __98(__0);
        } catch (__2) {
          __1.throwException(__1.URI_ERROR, __2.message);
        }
      };
    }(__3[__4][0]), this.setProperty(__98, __3[__4][1], this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR);
  __0 = function __98(__0) {
    return __1.createTask_(!1, arguments);
  }, this.setProperty(__98, 'setTimeout', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return __1.createTask_(!0, arguments);
  }, this.setProperty(__98, 'setInterval', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    __1.deleteTask_(__0);
  }, this.setProperty(__98, 'clearTimeout', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    __1.deleteTask_(__0);
  }, this.setProperty(__98, 'clearInterval', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, __98);
}, __140.prototype.functionCodeNumber_ = 0, __140.prototype.initFunction = function(__98) {
  var __0, __1 = this,
    __2 = /^[A-Za-z_$][\w$]*$/;
  __0 = function __98(__0) {
    if (arguments.length)
      var __3 = String(arguments[arguments.length - 1]);
    else
      var __3 = '';
    var __4 = Array.prototype.slice.call(arguments, 0, -1).join(',').trim();
    if (__4) {
      for (var __5 = __4.split(/\s*,\s*/), __6 = 0; __6 < __5.length; __6++) {
        var __7 = __5[__6];
        __2.test(__7) || __1.throwException(__1.SYNTAX_ERROR, 'Invalid function argument: ' + __7);
      }
      __4 = __5.join(', ');
    }
    try {
      var __8 = __1.parse_('(function(' + __4 + ') {' + __3 + '})', 'function' + __1.functionCodeNumber_++);
    } catch (__9) {
      __1.throwException(__1.SYNTAX_ERROR, 'Invalid code: ' + __9.message);
    }
    1 !== __8.body.length && __1.throwException(__1.SYNTAX_ERROR, 'Invalid code in function body');
    var __10 = __8.body[0].expression;
    return __1.createFunction(__10, __1.globalScope, 'anonymous');
  }, this.FUNCTION = this.createNativeFunction(__0, !0), this.setProperty(__98, 'Function', this.FUNCTION, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, 'prototype', this.FUNCTION_PROTO, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, 'constructor', this.FUNCTION, __140.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, 'length', 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = 'Function', __0 = function __98(__0, __2, __3) {
    var __4 = __1.stateStack[__1.stateStack.length - 1];
    __4.func_ = __0, __4.funcThis_ = __2, __4.arguments_ = [], null != __3 && (__3 instanceof __140.Object ? __4.arguments_ = Array.from(__3.properties) : __1.throwException(__1.TYPE_ERROR, 'CreateListFromArrayLike called on non-object')), __4.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'apply', __0), this.polyfills_.push('(function() {', 'var apply_ = Function.prototype.apply;', 'Function.prototype.apply = function apply(thisArg, args) {', 'var a2 = [];', 'for (var i = 0; i < args.length; i++) {', 'a2[i] = args[i];', '}', 'return apply_(this, thisArg, a2);', '};', '})();'), __0 = function __98(__0) {
    var __2 = __1.stateStack[__1.stateStack.length - 1];
    __2.func_ = this, __2.funcThis_ = __0, __2.arguments_ = [];
    for (var __3 = 1; __3 < arguments.length; __3++)
      __2.arguments_.push(arguments[__3]);
    __2.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'call', __0), this.polyfills_.push('Object.defineProperty(Function.prototype, \'bind\',', '{configurable: true, writable: true, value:', 'function bind(oThis) {', 'if (typeof this !== \'function\') {', 'throw TypeError(\'What is trying to be bound is not callable\');', '}', 'var aArgs   = Array.prototype.slice.call(arguments, 1),', 'fToBind = this,', 'fNOP    = function() {},', 'fBound  = function() {', 'return fToBind.apply(this instanceof fNOP', '? this', ': oThis,', 'aArgs.concat(Array.prototype.slice.call(arguments)));', '};', 'if (this.prototype) {', 'fNOP.prototype = this.prototype;', '}', 'fBound.prototype = new fNOP();', 'return fBound;', '}', '});', ''), __0 = function __98() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'toString', __0), this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'valueOf', __0), this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initObject = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0) {
    if (null == __0)
      return __1.calledWithNew() ? this : __1.createObjectProto(__1.OBJECT_PROTO);
    if (!(__0 instanceof __140.Object)) {
      var __2 = __1.createObjectProto(__1.getPrototype(__0));
      return __2.data = __0, __2;
    }
    return __0;
  }, this.OBJECT = this.createNativeFunction(__0, !0), this.setProperty(this.OBJECT, 'prototype', this.OBJECT_PROTO, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, 'constructor', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'Object', this.OBJECT, __140.NONENUMERABLE_DESCRIPTOR);
  var __2 = function(__98) {
    null == __98 && __1.throwException(__1.TYPE_ERROR, 'Cannot convert \'' + __98 + '\' to object');
  };
  __0 = function __98(__0) {
    __2(__0);
    var __3 = __0 instanceof __140.Object ? __0.properties : __0;
    return __1.nativeToPseudo(Object.getOwnPropertyNames(__3));
  }, this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return __2(__0), __0 instanceof __140.Object && (__0 = __0.properties), __1.nativeToPseudo(Object.keys(__0));
  }, this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return null === __0 ? __1.createObjectProto(null) : (__0 instanceof __140.Object || __1.throwException(__1.TYPE_ERROR, 'Object prototype may only be an Object or null, not ' + __0), __1.createObjectProto(__0));
  }, this.setProperty(this.OBJECT, 'create', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var create_ = Object.create;', 'Object.create = function create(proto, props) {', 'var obj = create_(proto);', 'props && Object.defineProperties(obj, props);', 'return obj;', '};', '})();', ''), __0 = function __98(__0, __2, __3) {
    return __2 = String(__2), __0 instanceof __140.Object || __1.throwException(__1.TYPE_ERROR, 'Object.defineProperty called on non-object: ' + __0), __3 instanceof __140.Object || __1.throwException(__1.TYPE_ERROR, 'Property description must be an object'), !__0.preventExtensions || __2 in __0.properties || __1.throwException(__1.TYPE_ERROR, 'Can\'t define property \'' + __2 + '\', object is not extensible'), __1.setProperty(__0, __2, __140.VALUE_IN_DESCRIPTOR, __3.properties), __0;
  }, this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var defineProperty_ = Object.defineProperty;', 'Object.defineProperty = function defineProperty(obj, prop, d1) {', 'var d2 = {};', 'if (\'configurable\' in d1) d2.configurable = d1.configurable;', 'if (\'enumerable\' in d1) d2.enumerable = d1.enumerable;', 'if (\'writable\' in d1) d2.writable = d1.writable;', 'if (\'value\' in d1) d2.value = d1.value;', 'if (\'get\' in d1) d2.get = d1.get;', 'if (\'set\' in d1) d2.set = d1.set;', 'return defineProperty_(obj, prop, d2);', '};', '})();', 'Object.defineProperty(Object, \'defineProperties\',', '{configurable: true, writable: true, value:', 'function defineProperties(obj, props) {', 'var keys = Object.keys(props);', 'for (var i = 0; i < keys.length; i++) {', 'Object.defineProperty(obj, keys[i], props[keys[i]]);', '}', 'return obj;', '}', '});', ''), __0 = function __98(__0, __2) {
    if (__0 instanceof __140.Object || __1.throwException(__1.TYPE_ERROR, 'Object.getOwnPropertyDescriptor called on non-object: ' + __0), (__2 = String(__2)) in __0.properties) {
      var __3 = Object.getOwnPropertyDescriptor(__0.properties, __2),
        __4 = __0.getter[__2],
        __5 = __0.setter[__2],
        __6 = __1.createObjectProto(__1.OBJECT_PROTO);
      return __4 || __5 ? (__1.setProperty(__6, 'get', __4), __1.setProperty(__6, 'set', __5)) : (__1.setProperty(__6, 'value', __3.value), __1.setProperty(__6, 'writable', __3.writable)), __1.setProperty(__6, 'configurable', __3.configurable), __1.setProperty(__6, 'enumerable', __3.enumerable), __6;
    }
  }, this.setProperty(this.OBJECT, 'getOwnPropertyDescriptor', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return __2(__0), __1.getPrototype(__0);
  }, this.setProperty(this.OBJECT, 'getPrototypeOf', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return Boolean(__0) && !__0.preventExtensions;
  }, this.setProperty(this.OBJECT, 'isExtensible', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return __0 instanceof __140.Object && (__0.preventExtensions = !0), __0;
  }, this.setProperty(this.OBJECT, 'preventExtensions', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, 'toString', __140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'toLocaleString', __140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'valueOf', __140.Object.prototype.valueOf), __0 = function __98(__0) {
    return (__2(this), this instanceof __140.Object) ? String(__0) in this.properties : this.hasOwnProperty(__0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'hasOwnProperty', __0), __0 = function __98(__0) {
    return (__2(this), this instanceof __140.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, __0) : this.propertyIsEnumerable(__0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'propertyIsEnumerable', __0), __0 = function __98(__0) {
    for (;;) {
      if (!(__0 = __1.getPrototype(__0)))
        return !1;
      if (__0 === this)
        return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, 'isPrototypeOf', __0);
}, __140.prototype.initArray = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0) {
    if (__1.calledWithNew())
      var __2 = this;
    else
      var __2 = __1.createArray();
    var __3 = arguments[0];
    if (1 === arguments.length && 'number' == typeof __3)
      isNaN(__140.legalArrayLength(__3)) && __1.throwException(__1.RANGE_ERROR, 'Invalid array length: ' + __3), __2.properties.length = __3;
    else {
      for (var __4 = 0; __4 < arguments.length; __4++)
        __2.properties[__4] = arguments[__4];
      __2.properties.length = __4;
    }
    return __2;
  }, this.ARRAY = this.createNativeFunction(__0, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(__98, 'Array', this.ARRAY, __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    return __0 && 'Array' === __0.class;
  }, this.setProperty(this.ARRAY, 'isArray', this.createNativeFunction(__0, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = 'Array', this.polyfills_.push('(function() {', 'function createArrayMethod_(name, func) {', 'Object.defineProperty(func, \'name\', {value: name});', 'Object.defineProperty(Array.prototype, name,', '{configurable: true, writable: true, value: func});', '}', 'createArrayMethod_(\'pop\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'len--;', 'var x = o[len];', 'delete o[len];', 'o.length = len;', 'return x;', '}', ');', 'createArrayMethod_(\'push\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'for (var i = 0; i < arguments.length; i++) {', 'o[len] = arguments[i];', 'len++;', '}', 'o.length = len;', 'return len;', '}', ');', 'createArrayMethod_(\'shift\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'var value = o[0];', 'for (var i = 0; i < len - 1; i++) {', 'if ((i + 1) in o) {', 'o[i] = o[i + 1];', '} else {', 'delete o[i];', '}', '}', 'delete o[i];', 'o.length = len - 1;', 'return value;', '}', ');', 'createArrayMethod_(\'unshift\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'len = 0;', '}', 'for (var i = len - 1; i >= 0; i--) {', 'if (i in o) {', 'o[i + arguments.length] = o[i];', '} else {', 'delete o[i + arguments.length];', '}', '}', 'for (var i = 0; i < arguments.length; i++) {', 'o[i] = arguments[i];', '}', 'return (o.length = len + arguments.length);', '}', ');', 'createArrayMethod_(\'reverse\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 2) {', 'return o;', '}', 'for (var i = 0; i < len / 2 - 0.5; i++) {', 'var x = o[i];', 'var hasX = i in o;', 'if ((len - i - 1) in o) {', 'o[i] = o[len - i - 1];', '} else {', 'delete o[i];', '}', 'if (hasX) {', 'o[len - i - 1] = x;', '} else {', 'delete o[len - i - 1];', '}', '}', 'return o;', '}', ');', 'createArrayMethod_(\'indexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var n = fromIndex | 0;', 'if (!len || n >= len) {', 'return -1;', '}', 'var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);', 'while (i < len) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i++;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'lastIndexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len) {', 'return -1;', '}', 'var n = len - 1;', 'if (arguments.length > 1) {', 'n = fromIndex | 0;', 'if (n) {', 'n = (n > 0 || -1) * Math.floor(Math.abs(n));', '}', '}', 'var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);', 'while (i >= 0) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i--;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'slice\',', 'function(start, end) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'start = (start >= 0) ? start : Math.max(0, len + start);', 'if (typeof end !== \'undefined\') {', 'if (end !== Infinity) {', 'end |= 0;', '}', 'if (end < 0) {', 'end = len + end;', '} else {', 'end = Math.min(end, len);', '}', '} else {', 'end = len;', '}', 'var size = end - start;', 'var cloned = new Array(size);', 'for (var i = 0; i < size; i++) {', 'if ((start + i) in o) {', 'cloned[i] = o[start + i];', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'splice\',', 'function(start, deleteCount, var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'if (start < 0) {', 'start = Math.max(len + start, 0);', '} else {', 'start = Math.min(start, len);', '}', 'if (arguments.length < 2) {', 'deleteCount = len - start;', '} else {', 'deleteCount |= 0;', 'deleteCount = Math.max(0, Math.min(deleteCount, len - start));', '}', 'var removed = [];', 'for (var i = start; i < start + deleteCount; i++) {', 'if (i in o) {', 'removed.push(o[i]);', '} else {', 'removed.length++;', '}', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = start + deleteCount; i < len - deleteCount; i++) {', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = len - deleteCount; i < len; i++) {', 'delete o[i];', '}', 'len -= deleteCount;', 'if (arguments.length > 2) {', 'var arl = arguments.length - 2;', 'for (var i = len - 1; i >= start; i--) {', 'if (i in o) {', 'o[i + arl] = o[i];', '} else {', 'delete o[i + arl];', '}', '}', 'len += arl;', 'for (var i = 2; i < arguments.length; i++) {', 'o[start + i - 2] = arguments[i];', '}', '}', 'o.length = len;', 'return removed;', '}', ');', 'createArrayMethod_(\'concat\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this);', 'var cloned = [];', 'for (var i = -1; i < arguments.length; i++) {', 'var value = (i === -1) ? o : arguments[i];', 'if (Array.isArray(value)) {', 'for (var j = 0, l = value.length; j < l; j++) {', 'if (j in value) {', 'cloned.push(value[j]);', '} else {', 'cloned.length++;', '}', '}', '} else {', 'cloned.push(value);', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'join\',', 'function(opt_separator) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var sep = typeof opt_separator === \'undefined\' ?', '\',\' : (\'\' + opt_separator);', 'var str = \'\';', 'for (var i = 0; i < len; i++) {', 'if (i && sep) str += sep;', 'str += (o[i] === null || o[i] === undefined) ? \'\' : o[i];', '}', 'return str;', '}', ');', 'createArrayMethod_(\'every\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o && !callback.call(t, o[k], k, o)) return false;', 'k++;', '}', 'return true;', '}', ');', 'createArrayMethod_(\'filter\',', 'function(callback, var_args) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var res = [];', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o) {', 'var val = o[i];', 'if (callback.call(thisArg, val, i, o)) res.push(val);', '}', '}', 'return res;', '}', ');', 'createArrayMethod_(\'forEach\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o) callback.call(t, o[k], k, o);', 'k++;', '}', '}', ');', 'createArrayMethod_(\'map\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'var a = new Array(len);', 'while (k < len) {', 'if (k in o) a[k] = callback.call(t, o[k], k, o);', 'k++;', '}', 'return a;', '}', ');', 'createArrayMethod_(\'reduce\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = 0, value;', 'if (arguments.length === 2) {', 'value = arguments[1];', '} else {', 'while (k < len && !(k in o)) k++;', 'if (k >= len) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k++];', '}', 'for (; k < len; k++) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'reduceRight\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = len - 1, value;', 'if (arguments.length >= 2) {', 'value = arguments[1];', '} else {', 'while (k >= 0 && !(k in o)) k--;', 'if (k < 0) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k--];', '}', 'for (; k >= 0; k--) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'some\',', 'function(callback /*, thisArg*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o && callback.call(thisArg, o[i], i, o)) return true;', '}', 'return false;', '}', ');', 'createArrayMethod_(\'sort\',', 'function(opt_comp) {', 'if (!this) throw TypeError();', 'if (typeof opt_comp !== \'function\') {', 'opt_comp = undefined;', '}', 'for (var i = 0; i < this.length; i++) {', 'var changes = 0;', 'for (var j = 0; j < this.length - i - 1; j++) {', 'if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :', '(String(this[j]) > String(this[j + 1]))) {', 'var swap = this[j];', 'var hasSwap = j in this;', 'if ((j + 1) in this) {', 'this[j] = this[j + 1];', '} else {', 'delete this[j];', '}', 'if (hasSwap) {', 'this[j + 1] = swap;', '} else {', 'delete this[j + 1];', '}', 'changes++;', '}', '}', 'if (!changes) break;', '}', 'return this;', '}', ');', 'createArrayMethod_(\'toLocaleString\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var out = [];', 'for (var i = 0; i < len; i++) {', 'out[i] = (o[i] === null || o[i] === undefined) ? \'\' : o[i].toLocaleString();', '}', 'return out.join(\',\');', '}', ');', '})();', '');
}, __140.prototype.initString = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0) {
    return (__0 = arguments.length ? __140.nativeGlobal.String(__0) : '', __1.calledWithNew()) ? (this.data = __0, this) : __0;
  }, this.STRING = this.createNativeFunction(__0, !0), this.setProperty(__98, 'String', this.STRING, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(String.fromCharCode, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __2 = [
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
    ], __3 = 0; __3 < __2.length; __3++)
    this.setNativeFunctionPrototype(this.STRING, __2[__3], String.prototype[__2[__3]]);
  __0 = function __98(__0, __2, __3) {
    __2 = __1.pseudoToNative(__2), __3 = __1.pseudoToNative(__3);
    try {
      return String(this).localeCompare(__0, __2, __3);
    } catch (__4) {
      __1.throwException(__1.ERROR, 'localeCompare: ' + __4.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, 'localeCompare', __0), __0 = function __98(__0, __2, __3) {
    var __4 = String(this);
    if (__2 = __2 ? Number(__2) : void 0, __1.isa(__0, __1.REGEXP) && (__0 = __0.data, __1.maybeThrowRegExp(__0, __3), 2 === __1.REGEXP_MODE)) {
      if (__140.vm) {
        var __5 = {
            string: __4,
            separator: __0,
            limit: __2
          },
          __6 = __1.vmCall('string.split(separator, limit)', __5, __0, __3);
        __6 !== __140.REGEXP_TIMEOUT && __3(__1.nativeToPseudo(__6));
      } else {
        var __7 = __1.createWorker(),
          __8 = __1.regExpTimeout(__0, __7, __3);
        __7.onmessage = function(__98) {
          clearTimeout(__8), __3(__1.nativeToPseudo(__98.data));
        }, __7.postMessage([
          'split',
          __4,
          __0,
          __2
        ]);
      }
      return;
    }
    var __6 = __4.split(__0, __2);
    __3(__1.nativeToPseudo(__6));
  }, this.setAsyncFunctionPrototype(this.STRING, 'split', __0), __0 = function __98(__0, __2) {
    var __3 = String(this);
    if (__0 = __1.isa(__0, __1.REGEXP) ? __0.data : RegExp(__0), __1.maybeThrowRegExp(__0, __2), 2 === __1.REGEXP_MODE) {
      if (__140.vm) {
        var __4 = {
            string: __3,
            regexp: __0
          },
          __5 = __1.vmCall('string.match(regexp)', __4, __0, __2);
        __5 !== __140.REGEXP_TIMEOUT && __2(__5 && __1.matchToPseudo_(__5));
      } else {
        var __6 = __1.createWorker(),
          __7 = __1.regExpTimeout(__0, __6, __2);
        __6.onmessage = function(__98) {
          clearTimeout(__7), __2(__98.data && __1.matchToPseudo_(__98.data));
        }, __6.postMessage([
          'match',
          __3,
          __0
        ]);
      }
      return;
    }
    var __5 = __3.match(__0);
    __2(__5 && __1.matchToPseudo_(__5));
  }, this.setAsyncFunctionPrototype(this.STRING, 'match', __0), __0 = function __98(__0, __2) {
    var __3 = String(this);
    if (__0 = __1.isa(__0, __1.REGEXP) ? __0.data : RegExp(__0), __1.maybeThrowRegExp(__0, __2), 2 === __1.REGEXP_MODE) {
      if (__140.vm) {
        var __4 = {
            string: __3,
            regexp: __0
          },
          __5 = __1.vmCall('string.search(regexp)', __4, __0, __2);
        __5 !== __140.REGEXP_TIMEOUT && __2(__5);
      } else {
        var __6 = __1.createWorker(),
          __7 = __1.regExpTimeout(__0, __6, __2);
        __6.onmessage = function(__98) {
          clearTimeout(__7), __2(__98.data);
        }, __6.postMessage([
          'search',
          __3,
          __0
        ]);
      }
      return;
    }
    __2(__3.search(__0));
  }, this.setAsyncFunctionPrototype(this.STRING, 'search', __0), __0 = function __98(__0, __2, __3) {
    var __4 = String(this);
    if (__2 = String(__2), __1.isa(__0, __1.REGEXP) && (__0 = __0.data, __1.maybeThrowRegExp(__0, __3), 2 === __1.REGEXP_MODE)) {
      if (__140.vm) {
        var __5 = {
            string: __4,
            substr: __0,
            newSubstr: __2
          },
          __6 = __1.vmCall('string.replace(substr, newSubstr)', __5, __0, __3);
        __6 !== __140.REGEXP_TIMEOUT && __3(__6);
      } else {
        var __7 = __1.createWorker(),
          __8 = __1.regExpTimeout(__0, __7, __3);
        __7.onmessage = function(__98) {
          clearTimeout(__8), __3(__98.data);
        }, __7.postMessage([
          'replace',
          __4,
          __0,
          __2
        ]);
      }
      return;
    }
    __3(__4.replace(__0, __2));
  }, this.setAsyncFunctionPrototype(this.STRING, 'replace', __0), this.polyfills_.push('(function() {', 'var replace_ = String.prototype.replace;', 'String.prototype.replace = function replace(substr, newSubstr) {', 'if (typeof newSubstr !== \'function\') {', 'return replace_.call(this, substr, newSubstr);', '}', 'var str = this;', 'if (substr instanceof RegExp) {', 'var subs = [];', 'var m = substr.exec(str);', 'while (m) {', 'm.push(m.index, str);', 'var inject = newSubstr.apply(null, m);', 'subs.push([m.index, m[0].length, inject]);', 'm = substr.global ? substr.exec(str) : null;', '}', 'for (var i = subs.length - 1; i >= 0; i--) {', 'str = str.substring(0, subs[i][0]) + subs[i][2] + ', 'str.substring(subs[i][0] + subs[i][1]);', '}', '} else {', 'var i = str.indexOf(substr);', 'if (i !== -1) {', 'var inject = newSubstr(str.substr(i, substr.length), i, str);', 'str = str.substring(0, i) + inject + ', 'str.substring(i + substr.length);', '}', '}', 'return str;', '};', '})();', '');
}, __140.prototype.initBoolean = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0) {
    return (__0 = __140.nativeGlobal.Boolean(__0), __1.calledWithNew()) ? (this.data = __0, this) : __0;
  }, this.BOOLEAN = this.createNativeFunction(__0, !0), this.setProperty(__98, 'Boolean', this.BOOLEAN, __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initNumber = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0) {
    return (__0 = arguments.length ? __140.nativeGlobal.Number(__0) : 0, __1.calledWithNew()) ? (this.data = __0, this) : __0;
  }, this.NUMBER = this.createNativeFunction(__0, !0), this.setProperty(__98, 'Number', this.NUMBER, __140.NONENUMERABLE_DESCRIPTOR);
  for (var __2 = [
      'MAX_VALUE',
      'MIN_VALUE',
      'NaN',
      'NEGATIVE_INFINITY',
      'POSITIVE_INFINITY'
    ], __3 = 0; __3 < __2.length; __3++)
    this.setProperty(this.NUMBER, __2[__3], Number[__2[__3]], __140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  __0 = function __98(__0) {
    try {
      return Number(this).toExponential(__0);
    } catch (__2) {
      __1.throwException(__1.ERROR, __2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toExponential', __0), __0 = function __98(__0) {
    try {
      return Number(this).toFixed(__0);
    } catch (__2) {
      __1.throwException(__1.ERROR, __2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toFixed', __0), __0 = function __98(__0) {
    try {
      return Number(this).toPrecision(__0);
    } catch (__2) {
      __1.throwException(__1.ERROR, __2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toPrecision', __0), __0 = function __98(__0) {
    try {
      return Number(this).toString(__0);
    } catch (__2) {
      __1.throwException(__1.ERROR, __2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toString', __0), __0 = function __98(__0, __2) {
    __0 = __0 ? __1.pseudoToNative(__0) : void 0, __2 = __2 ? __1.pseudoToNative(__2) : void 0;
    try {
      return Number(this).toLocaleString(__0, __2);
    } catch (__3) {
      __1.throwException(__1.ERROR, 'toLocaleString: ' + __3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toLocaleString', __0);
}, __140.prototype.initDate = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0, __2) {
    if (!__1.calledWithNew())
      return __140.nativeGlobal.Date();
    var __3 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(__140.nativeGlobal.Date, __3))(), this;
  }, this.DATE = this.createNativeFunction(__0, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(__98, 'Date', this.DATE, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'now', this.createNativeFunction(Date.now, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'parse', this.createNativeFunction(Date.parse, !1), __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'UTC', this.createNativeFunction(Date.UTC, !1), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __2 = [
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
    ], __3 = 0; __3 < __2.length; __3++)
    __0 = function(__98) {
      return function(__0) {
        var __2 = this.data;
        __2 instanceof Date || __1.throwException(__1.TYPE_ERROR, __98 + ' not called on a Date');
        for (var __3 = [], __4 = 0; __4 < arguments.length; __4++)
          __3[__4] = __1.pseudoToNative(arguments[__4]);
        return __2[__98].apply(__2, __3);
      };
    }(__2[__3]), this.setNativeFunctionPrototype(this.DATE, __2[__3], __0);
  __0 = function __98() {
    try {
      return this.data.toISOString();
    } catch (__0) {
      __1.throwException(__1.RANGE_ERROR, 'toISOString: ' + __0.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, 'toISOString', __0);
}, __140.prototype.initRegExp = function(__98) {
  var __0, __1 = this;
  __0 = function __98(__0, __2) {
    if (__1.calledWithNew())
      var __3 = this;
    else {
      if (void 0 === __2 && __1.isa(__0, __1.REGEXP))
        return __0;
      var __3 = __1.createObjectProto(__1.REGEXP_PROTO);
    }
    __0 = void 0 === __0 ? '' : String(__0), __2 = __2 ? String(__2) : '', /^[gmi]*$/.test(__2) || __1.throwException(__1.SYNTAX_ERROR, 'Invalid regexp flag: ' + __2);
    try {
      var __4 = new __140.nativeGlobal.RegExp(__0, __2);
    } catch (__5) {
      __1.throwException(__1.SYNTAX_ERROR, __5.message);
    }
    return __1.populateRegExp(__3, __4), __3;
  }, this.REGEXP = this.createNativeFunction(__0, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(__98, 'RegExp', this.REGEXP, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'global', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'ignoreCase', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'multiline', void 0, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'source', '(?:)', __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('Object.defineProperty(RegExp.prototype, \'test\',', '{configurable: true, writable: true, value:', 'function test(str) {', 'return !!this.exec(str);', '}', '});'), __0 = function __98(__0, __2) {
    var __3 = this.data;
    if (__0 = String(__0), __3.lastIndex = Number(__1.getProperty(this, 'lastIndex')), __1.maybeThrowRegExp(__3, __2), 2 === __1.REGEXP_MODE) {
      if (__140.vm) {
        var __4 = {
            string: __0,
            regexp: __3
          },
          __5 = __1.vmCall('regexp.exec(string)', __4, __3, __2);
        __5 !== __140.REGEXP_TIMEOUT && (__1.setProperty(this, 'lastIndex', __3.lastIndex), __2(__1.matchToPseudo_(__5)));
      } else {
        var __6 = __1.createWorker(),
          __7 = __1.regExpTimeout(__3, __6, __2),
          __8 = this;
        __6.onmessage = function(__98) {
          clearTimeout(__7), __1.setProperty(__8, 'lastIndex', __98.data[1]), __2(__1.matchToPseudo_(__98.data[0]));
        }, __6.postMessage([
          'exec',
          __3,
          __3.lastIndex,
          __0
        ]);
      }
      return;
    }
    var __5 = __3.exec(__0);
    __1.setProperty(this, 'lastIndex', __3.lastIndex), __2(__1.matchToPseudo_(__5));
  }, this.setAsyncFunctionPrototype(this.REGEXP, 'exec', __0);
}, __140.prototype.matchToPseudo_ = function(__98) {
  if (__98) {
    for (var __0 = Object.getOwnPropertyNames(__98), __1 = 0; __1 < __0.length; __1++) {
      var __2 = __0[__1];
      isNaN(Number(__2)) && 'length' !== __2 && 'input' !== __2 && 'index' !== __2 && delete __98[__2];
    }
    return this.nativeToPseudo(__98);
  }
  return null;
}, __140.prototype.initError = function(__98) {
  var __0 = this;
  this.ERROR = this.createNativeFunction(function __98(__1) {
    if (__0.calledWithNew())
      var __2 = this;
    else
      var __2 = __0.createObject(__0.ERROR);
    return __0.populateError(__2, __1), __2;
  }, !0), this.setProperty(__98, 'Error', this.ERROR, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'message', '', __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'name', 'Error', __140.NONENUMERABLE_DESCRIPTOR);
  var __1 = function(__1) {
    var __2 = __0.createNativeFunction(function(__98) {
      if (__0.calledWithNew())
        var __1 = this;
      else
        var __1 = __0.createObject(__2);
      return __0.populateError(__1, __98), __1;
    }, !0);
    return __0.setProperty(__2, 'prototype', __0.createObject(__0.ERROR), __140.NONENUMERABLE_DESCRIPTOR), __0.setProperty(__2.properties.prototype, 'name', __1, __140.NONENUMERABLE_DESCRIPTOR), __0.setProperty(__98, __1, __2, __140.NONENUMERABLE_DESCRIPTOR), __2;
  };
  this.EVAL_ERROR = __1('EvalError'), this.RANGE_ERROR = __1('RangeError'), this.REFERENCE_ERROR = __1('ReferenceError'), this.SYNTAX_ERROR = __1('SyntaxError'), this.TYPE_ERROR = __1('TypeError'), this.URI_ERROR = __1('URIError');
}, __140.prototype.initMath = function(__98) {
  var __0 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__98, 'Math', __0, __140.NONENUMERABLE_DESCRIPTOR);
  for (var __1 = [
      'E',
      'LN2',
      'LN10',
      'LOG2E',
      'LOG10E',
      'PI',
      'SQRT1_2',
      'SQRT2'
    ], __2 = 0; __2 < __1.length; __2++)
    this.setProperty(__0, __1[__2], Math[__1[__2]], __140.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var __3 = [
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
    ], __2 = 0; __2 < __3.length; __2++)
    this.setProperty(__0, __3[__2], this.createNativeFunction(Math[__3[__2]], !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.initJSON = function(__98) {
  var __0, __1 = this,
    __2 = __1.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__98, 'JSON', __2, __140.NONENUMERABLE_DESCRIPTOR), __0 = function __98(__0) {
    try {
      var __2 = JSON.parse(String(__0));
    } catch (__3) {
      __1.throwException(__1.SYNTAX_ERROR, __3.message);
    }
    return __1.nativeToPseudo(__2);
  }, this.setProperty(__2, 'parse', this.createNativeFunction(__0, !1)), __0 = function __98(__0, __2, __3) {
    __2 && 'Function' === __2.class ? __1.throwException(__1.TYPE_ERROR, 'Function replacer on JSON.stringify not supported') : __2 = __2 && 'Array' === __2.class ? (__2 = __1.pseudoToNative(__2)).filter(function(__98) {
      return 'string' == typeof __98 || 'number' == typeof __98;
    }) : null, 'string' != typeof __3 && 'number' != typeof __3 && (__3 = void 0);
    var __4 = __1.pseudoToNative(__0);
    try {
      var __5 = JSON.stringify(__4, __2, __3);
    } catch (__6) {
      __1.throwException(__1.TYPE_ERROR, __6.message);
    }
    return __5;
  }, this.setProperty(__2, 'stringify', this.createNativeFunction(__0, !1));
}, __140.prototype.isa = function(__98, __0) {
  if (null == __98 || !__0)
    return !1;
  var __1 = __0.properties.prototype;
  if (__98 === __1)
    return !0;
  for (__98 = this.getPrototype(__98); __98;) {
    if (__98 === __1)
      return !0;
    __98 = __98.proto;
  }
  return !1;
}, __140.prototype.populateRegExp = function(__98, __0) {
  __98.data = RegExp(__0.source, __0.flags), this.setProperty(__98, 'lastIndex', __0.lastIndex, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'source', __0.source, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'global', __0.global, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'ignoreCase', __0.ignoreCase, __140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__98, 'multiline', __0.multiline, __140.READONLY_NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.populateError = function(__98, __0) {
  __0 && this.setProperty(__98, 'message', String(__0), __140.NONENUMERABLE_DESCRIPTOR);
  for (var __1 = [], __2 = this.stateStack.length - 1; __2 >= 0; __2--) {
    var __3 = this.stateStack[__2],
      __4 = __3.node;
    if ('CallExpression' === __4.type) {
      var __5 = __3.func_;
      __5 && __1.length && (__1[__1.length - 1].datumName = this.getProperty(__5, 'name'));
    }
    __4.loc && (!__1.length || 'CallExpression' === __4.type) && __1.push({
      datumLoc: __4.loc
    });
  }
  for (var __6 = String(this.getProperty(__98, 'name')), __7 = String(this.getProperty(__98, 'message')), __8 = __6 + ': ' + __7 + '\n', __2 = 0; __2 < __1.length; __2++) {
    var __9 = __1[__2].datumLoc,
      __10 = __1[__2].datumName,
      __11 = __9.source + ':' + __9.start.line + ':' + __9.start.column;
    __10 ? __8 += '  at ' + __10 + ' (' + __11 + ')\n' : __8 += '  at ' + __11 + '\n';
  }
  this.setProperty(__98, 'stack', __8.trim(), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.createWorker = function() {
  var __98 = this.createWorker.blob_;
  return __98 || (__98 = new Blob([__140.WORKER_CODE.join('\n')], {
    type: 'application/javascript'
  }), this.createWorker.blob_ = __98), new Worker(URL.createObjectURL(__98));
}, __140.prototype.vmCall = function(__98, __0, __1, __2) {
  var __3 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return __140.vm.runInNewContext(__98, __0, __3);
  } catch (__4) {
    __2(null), this.throwException(this.ERROR, 'RegExp Timeout: ' + __1);
  }
  return __140.REGEXP_TIMEOUT;
}, __140.prototype.maybeThrowRegExp = function(__98, __0) {
  var __1;
  if (0 === this.REGEXP_MODE)
    __1 = !1;
  else if (1 === this.REGEXP_MODE)
    __1 = !0;
  else if (__140.vm)
    __1 = !0;
  else if ('function' == typeof Worker && 'function' == typeof URL)
    __1 = !0;
  else if ('function' == typeof require) {
    try {
      __140.vm = require('vm');
    } catch (__2) {}
    __1 = !!__140.vm;
  } else
    __1 = !1;
  __1 || (__0(null), this.throwException(this.ERROR, 'Regular expressions not supported: ' + __98));
}, __140.prototype.regExpTimeout = function(__98, __0, __1) {
  var __2 = this;
  return setTimeout(function() {
    __0.terminate(), __1(null);
    try {
      __2.throwException(__2.ERROR, 'RegExp Timeout: ' + __98);
    } catch (__3) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, __140.prototype.createObject = function(__98) {
  return this.createObjectProto(__98 && __98.properties.prototype);
}, __140.prototype.createObjectProto = function(__98) {
  if ('object' != typeof __98)
    throw Error('Non object prototype');
  var __0 = new __140.Object(__98);
  return this.isa(__0, this.ERROR) && (__0.class = 'Error'), __0;
}, __140.prototype.createArray = function() {
  var __98 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(__98, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), __98.class = 'Array', __98;
}, __140.prototype.createFunctionBase_ = function(__98, __0) {
  var __1 = this.createObjectProto(this.FUNCTION_PROTO);
  if (__0) {
    var __2 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(__1, 'prototype', __2, __140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__2, 'constructor', __1, __140.NONENUMERABLE_DESCRIPTOR);
  } else
    __1.illegalConstructor = !0;
  return this.setProperty(__1, 'length', __98, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __1.class = 'Function', __1;
}, __140.prototype.createFunction = function(__98, __0, __1) {
  var __2 = this.createFunctionBase_(__98.params.length, !0);
  __2.parentScope = __0, __2.node = __98;
  var __3 = __98.id ? String(__98.id.name) : __1 || '';
  return this.setProperty(__2, 'name', __3, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __2;
}, __140.prototype.createNativeFunction = function(__98, __0) {
  var __1 = this.createFunctionBase_(__98.length, __0);
  return __1.nativeFunc = __98, __98.id = this.functionCounter_++, this.setProperty(__1, 'name', __98.name, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __1;
}, __140.prototype.createAsyncFunction = function(__98) {
  var __0 = this.createFunctionBase_(__98.length, !0);
  return __0.asyncFunc = __98, __98.id = this.functionCounter_++, this.setProperty(__0, 'name', __98.name, __140.READONLY_NONENUMERABLE_DESCRIPTOR), __0;
}, __140.prototype.nativeToPseudo = function(__98, __0) {
  if (null == __98 || !0 === __98 || !1 === __98 || 'string' == typeof __98 || 'number' == typeof __98)
    return __98;
  if (__98 instanceof __140.Object)
    throw Error('Object is already pseudo');
  var __1, __2, __3 = __0 || {
      pseudo: [],
      native: []
    },
    __4 = __3.native.indexOf(__98);
  if (-1 !== __4)
    return __3.pseudo[__4];
  if (__3.native.push(__98), __98 instanceof RegExp) {
    var __5 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(__5, __98), __3.pseudo.push(__5), __5;
  }
  if (__98 instanceof Date) {
    var __6 = this.createObjectProto(this.DATE_PROTO);
    return __6.data = new Date(__98.valueOf()), __3.pseudo.push(__6), __6;
  }
  if (__98 instanceof Number ? __1 = this.createObject(this.NUMBER) : __98 instanceof String ? __1 = this.createObject(this.STRING) : __98 instanceof Boolean && (__1 = this.createObject(this.BOOLEAN)), __1)
    return __1.data = __98.valueOf(), __3.pseudo.push(__1), __1;
  if ('function' == typeof __98) {
    var __7 = this,
      __8 = function() {
        var __0 = Array.prototype.slice.call(arguments).map(function(__98) {
            return __7.pseudoToNative(__98);
          }),
          __1 = __98.apply(__7, __0);
        return __7.nativeToPseudo(__1);
      },
      __9 = Object.getOwnPropertyDescriptor(__98, 'prototype'),
      __10 = this.createNativeFunction(__8, !!__9);
    return __3.pseudo.push(__10), __10;
  }
  for (var __11 in (__2 = Array.isArray(__98) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), __3.pseudo.push(__2), __98))
    this.setProperty(__2, __11, this.nativeToPseudo(__98[__11], __3));
  return __2;
}, __140.prototype.pseudoToNative = function(__98, __0) {
  if (null == __98 || !0 === __98 || !1 === __98 || 'string' == typeof __98 || 'number' == typeof __98)
    return __98;
  if (!(__98 instanceof __140.Object))
    throw Error('Object is not pseudo');
  var __1, __2 = __0 || {
      pseudo: [],
      native: []
    },
    __3 = __2.pseudo.indexOf(__98);
  if (-1 !== __3)
    return __2.native[__3];
  if (__2.pseudo.push(__98), this.isa(__98, this.REGEXP)) {
    var __4 = RegExp(__98.data.source, __98.data.flags);
    return __4.lastIndex = __98.data.lastIndex, __2.native.push(__4), __4;
  }
  if (this.isa(__98, this.DATE)) {
    var __5 = new Date(__98.data.valueOf());
    return __2.native.push(__5), __5;
  }
  if (this.isa(__98, this.NUMBER) || this.isa(__98, this.STRING) || this.isa(__98, this.BOOLEAN)) {
    var __6 = Object(__98.data);
    return __2.native.push(__6), __6;
  }
  var __7 = this.isa(__98, this.ARRAY) ? [] : {};
  for (var __8 in (__2.native.push(__7), __98.properties))
    __1 = this.pseudoToNative(__98.properties[__8], __2), Object.defineProperty(__7, __8, {
      value: __1,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return __7;
}, __140.prototype.getPrototype = function(__98) {
  switch (typeof __98) {
    case 'number':
      return this.NUMBER.properties.prototype;
    case 'boolean':
      return this.BOOLEAN.properties.prototype;
    case 'string':
      return this.STRING.properties.prototype;
  }
  return __98 ? __98.proto : null;
}, __140.prototype.getProperty = function(__98, __0) {
  if (this.getterStep_)
    throw Error('Getter not supported in that context');
  if (__0 = String(__0), null == __98 && this.throwException(this.TYPE_ERROR, 'Cannot read property \'' + __0 + '\' of ' + __98), 'object' == typeof __98 && !(__98 instanceof __140.Object))
    throw TypeError('Expecting native value or pseudo object');
  if ('length' === __0) {
    if (this.isa(__98, this.STRING))
      return String(__98).length;
  } else if (64 > __0.charCodeAt(0) && this.isa(__98, this.STRING)) {
    var __1 = __140.legalArrayIndex(__0);
    if (!isNaN(__1) && __1 < String(__98).length)
      return String(__98)[__1];
  }
  do
    if (__98.properties && __0 in __98.properties) {
      var __2 = __98.getter[__0];
      if (__2)
        return this.getterStep_ = !0, __2;
      return __98.properties[__0];
    }
  while (__98 = this.getPrototype(__98));
}, __140.prototype.hasProperty = function(__98, __0) {
  if (!(__98 instanceof __140.Object))
    throw TypeError('Primitive data type has no properties');
  if ('length' === (__0 = String(__0)) && this.isa(__98, this.STRING))
    return !0;
  if (this.isa(__98, this.STRING)) {
    var __1 = __140.legalArrayIndex(__0);
    if (!isNaN(__1) && __1 < String(__98).length)
      return !0;
  }
  do
    if (__98.properties && __0 in __98.properties)
      return !0;
  while (__98 = this.getPrototype(__98));
  return !1;
}, __140.prototype.setProperty = function(__98, __0, __1, __2) {
  if (this.setterStep_)
    throw Error('Setter not supported in that context');
  if (__0 = String(__0), null == __98 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __0 + '\' of ' + __98), 'object' == typeof __98 && !(__98 instanceof __140.Object))
    throw TypeError('Expecting native value or pseudo object');
  __2 && ('get' in __2 || 'set' in __2) && ('value' in __2 || 'writable' in __2) && this.throwException(this.TYPE_ERROR, 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  var __3 = !this.stateStack || this.getScope().strict;
  if (!(__98 instanceof __140.Object)) {
    __3 && this.throwException(this.TYPE_ERROR, 'Can\'t create property \'' + __0 + '\' on \'' + __98 + '\'');
    return;
  }
  if (this.isa(__98, this.STRING)) {
    var __4 = __140.legalArrayIndex(__0);
    if ('length' === __0 || !isNaN(__4) && __4 < String(__98).length) {
      __3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __0 + '\' of String \'' + __98.data + '\'');
      return;
    }
  }
  if ('Array' === __98.class) {
    var __5, __6 = __98.properties.length;
    if ('length' === __0) {
      if (__2) {
        if (!('value' in __2))
          return;
        __1 = __2.value;
      }
      if (isNaN(__1 = __140.legalArrayLength(__1)) && this.throwException(this.RANGE_ERROR, 'Invalid array length'), __1 < __6)
        for (__5 in __98.properties)
          !isNaN(__5 = __140.legalArrayIndex(__5)) && __1 <= __5 && delete __98.properties[__5];
    } else
      isNaN(__5 = __140.legalArrayIndex(__0)) || (__98.properties.length = Math.max(__6, __5 + 1));
  }
  if (__98.preventExtensions && !(__0 in __98.properties)) {
    __3 && this.throwException(this.TYPE_ERROR, 'Can\'t add property \'' + __0 + '\', object is not extensible');
    return;
  }
  if (__2) {
    var __7 = {};
    'get' in __2 && __2.get && (__98.getter[__0] = __2.get, __7.get = this.setProperty.placeholderGet_), 'set' in __2 && __2.set && (__98.setter[__0] = __2.set, __7.set = this.setProperty.placeholderSet_), 'configurable' in __2 && (__7.configurable = __2.configurable), 'enumerable' in __2 && (__7.enumerable = __2.enumerable), 'writable' in __2 && (__7.writable = __2.writable, delete __98.getter[__0], delete __98.setter[__0]), 'value' in __2 ? (__7.value = __2.value, delete __98.getter[__0], delete __98.setter[__0]) : __1 !== __140.VALUE_IN_DESCRIPTOR && (__7.value = __1, delete __98.getter[__0], delete __98.setter[__0]);
    try {
      Object.defineProperty(__98.properties, __0, __7);
    } catch (__8) {
      this.throwException(this.TYPE_ERROR, 'Cannot redefine property: ' + __0);
    }
    'get' in __2 && !__2.get && delete __98.getter[__0], 'set' in __2 && !__2.set && delete __98.setter[__0];
  } else {
    if (__1 === __140.VALUE_IN_DESCRIPTOR)
      throw ReferenceError('Value not specified');
    for (var __9 = __98; !(__0 in __9.properties);)
      if (!(__9 = this.getPrototype(__9))) {
        __9 = __98;
        break;
      }
    if (__9.setter && __9.setter[__0])
      return this.setterStep_ = !0, __9.setter[__0];
    if (__9.getter && __9.getter[__0])
      __3 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __0 + '\' of object \'' + __98 + '\' which only has a getter');
    else
      try {
        __98.properties[__0] = __1;
      } catch (__10) {
        __3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __0 + '\' of object \'' + __98 + '\'');
      }
  }
}, __140.prototype.setProperty.placeholderGet_ = function() {
  throw Error('Placeholder getter');
}, __140.prototype.setProperty.placeholderSet_ = function() {
  throw Error('Placeholder setter');
}, __140.prototype.setNativeFunctionPrototype = function(__98, __0, __1) {
  this.setProperty(__98.properties.prototype, __0, this.createNativeFunction(__1, !1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.setAsyncFunctionPrototype = function(__98, __0, __1) {
  this.setProperty(__98.properties.prototype, __0, this.createAsyncFunction(__1), __140.NONENUMERABLE_DESCRIPTOR);
}, __140.prototype.getScope = function() {
  var __98 = this.stateStack[this.stateStack.length - 1].scope;
  if (!__98)
    throw Error('No scope found');
  return __98;
}, __140.prototype.createScope = function(__98, __0) {
  var __1 = !1;
  if (__0 && __0.strict)
    __1 = !0;
  else {
    var __2 = __98.body && __98.body[0];
    __2 && __2.expression && 'Literal' === __2.expression.type && 'use strict' === __2.expression.value && (__1 = !0);
  }
  var __3 = this.createObjectProto(null),
    __4 = new __140.Scope(__0, __1, __3);
  return __0 || this.initGlobal(__4.object), this.populateScope_(__98, __4), __4;
}, __140.prototype.createSpecialScope = function(__98, __0) {
  if (!__98)
    throw Error('parentScope required');
  var __1 = __0 || this.createObjectProto(null);
  return new __140.Scope(__98, __98.strict, __1);
}, __140.prototype.getValueFromScope = function(__98) {
  for (var __0 = this.getScope(); __0 && __0 !== this.globalScope;) {
    if (__98 in __0.object.properties)
      return __0.object.properties[__98];
    __0 = __0.parentScope;
  }
  if (__0 === this.globalScope && this.hasProperty(__0.object, __98))
    return this.getProperty(__0.object, __98);
  var __1 = this.stateStack[this.stateStack.length - 1].node;
  ('UnaryExpression' !== __1.type || 'typeof' !== __1.operator) && this.throwException(this.REFERENCE_ERROR, __98 + ' is not defined');
}, __140.prototype.setValueToScope = function(__98, __0) {
  for (var __1 = this.getScope(), __2 = __1.strict; __1 && __1 !== this.globalScope;) {
    if (__98 in __1.object.properties) {
      try {
        __1.object.properties[__98] = __0;
      } catch (__3) {
        __2 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only variable \'' + __98 + '\'');
      }
      return;
    }
    __1 = __1.parentScope;
  }
  if (__1 === this.globalScope && (!__2 || this.hasProperty(__1.object, __98)))
    return this.setProperty(__1.object, __98, __0);
  this.throwException(this.REFERENCE_ERROR, __98 + ' is not defined');
}, __140.prototype.populateScope_ = function(__98, __0) {
  var __1;
  if (__98.variableCache_)
    __1 = __98.variableCache_;
  else {
    switch (__1 = Object.create(null), __98.type) {
      case 'VariableDeclaration':
        for (var __2 = 0; __2 < __98.declarations.length; __2++)
          __1[__98.declarations[__2].id.name] = !0;
        break;
      case 'FunctionDeclaration':
        __1[__98.id.name] = __98;
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
        var __3 = __98.constructor;
        for (var __4 in __98)
          if (__98[__4] !== __98.loc) {
            var __5, __6 = __98[__4];
            if (__6 && 'object' == typeof __6) {
              if (Array.isArray(__6)) {
                for (var __2 = 0; __2 < __6.length; __2++)
                  if (__6[__2] && __6[__2].constructor === __3)
                    for (var __4 in __5 = this.populateScope_(__6[__2], __0))
                      __1[__4] = __5[__4];
              } else if (__6.constructor === __3)
                for (var __4 in __5 = this.populateScope_(__6, __0))
                  __1[__4] = __5[__4];
            }
          }
    }
    __98.variableCache_ = __1;
  }
  for (var __4 in __1)
    !0 === __1[__4] ? this.setProperty(__0.object, __4, void 0, __140.VARIABLE_DESCRIPTOR) : this.setProperty(__0.object, __4, this.createFunction(__1[__4], __0), __140.VARIABLE_DESCRIPTOR);
  return __1;
}, __140.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, __140.prototype.getValue = function(__98) {
  return __98[0] === __140.SCOPE_REFERENCE ? this.getValueFromScope(__98[1]) : this.getProperty(__98[0], __98[1]);
}, __140.prototype.setValue = function(__98, __0) {
  return __98[0] === __140.SCOPE_REFERENCE ? this.setValueToScope(__98[1], __0) : this.setProperty(__98[0], __98[1], __0);
}, __140.prototype.throwException = function(__98, __0) {
  if (!this.globalScope)
    throw void 0 === __0 ? __98 : __0;
  if (void 0 !== __0 && __98 instanceof __140.Object) {
    var __1 = this.createObject(__98);
    this.populateError(__1, __0);
  } else
    var __1 = __98;
  throw this.unwind(__140.Completion.THROW, __1, void 0), __140.STEP_ERROR;
}, __140.prototype.unwind = function(__98, __0, __1) {
  if (__98 === __140.Completion.NORMAL)
    throw TypeError('Should not unwind for NORMAL completions');
  loop:
    for (var __2, __3 = this.stateStack; __3.length > 0; __3.pop()) {
      var __4 = __3[__3.length - 1];
      switch (__4.node.type) {
        case 'TryStatement':
          __4.cv = {
            type: __98,
            value: __0,
            label: __1
          };
          return;
        case 'CallExpression':
        case 'NewExpression':
          if (__98 === __140.Completion.RETURN) {
            __4.value = __0;
            return;
          }
          if (__98 === __140.Completion.BREAK || __98 === __140.Completion.CONTINUE)
            throw Error('Unsyntactic break/continue not rejected by Acorn');
          break;
        case 'Program':
          if (__98 === __140.Completion.RETURN)
            return;
          __4.done = !0;
          break loop;
      }
      if (__98 === __140.Completion.BREAK) {
        if (__1 ? __4.labels && -1 !== __4.labels.indexOf(__1) : __4.isLoop || __4.isSwitch) {
          __3.pop();
          return;
        }
      } else if (__98 === __140.Completion.CONTINUE && (__1 ? __4.labels && -1 !== __4.labels.indexOf(__1) : __4.isLoop))
        return;
    }
  if (this.isa(__0, this.ERROR)) {
    var __5 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      __6 = String(this.getProperty(__0, 'name')),
      __7 = this.getProperty(__0, 'message').valueOf();
    (__2 = (__5[__6] || Error)(__7)).stack = String(this.getProperty(__0, 'stack'));
  } else
    __2 = String(__0);
  throw this.value = __2, __2;
}, __140.prototype.nodeSummary = function(__98) {
  switch (__98.type) {
    case 'ArrayExpression':
      return '[...]';
    case 'BinaryExpression':
    case 'LogicalExpression':
      return this.nodeSummary(__98.left) + ' ' + __98.operator + ' ' + this.nodeSummary(__98.right);
    case 'CallExpression':
      return this.nodeSummary(__98.callee) + '(...)';
    case 'ConditionalExpression':
      return this.nodeSummary(__98.test) + ' ? ' + this.nodeSummary(__98.consequent) + ' : ' + this.nodeSummary(__98.alternate);
    case 'Identifier':
      return __98.name;
    case 'Literal':
      return __98.raw;
    case 'MemberExpression':
      var __0 = this.nodeSummary(__98.object),
        __1 = this.nodeSummary(__98.property);
      return __98.computed ? __0 + '[' + __1 + ']' : __0 + '.' + __1;
    case 'NewExpression':
      return 'new ' + this.nodeSummary(__98.callee) + '(...)';
    case 'ObjectExpression':
      return '{...}';
    case 'ThisExpression':
      return 'this';
    case 'UnaryExpression':
      return __98.operator + ' ' + this.nodeSummary(__98.argument);
    case 'UpdateExpression':
      var __2 = this.nodeSummary(__98.argument);
      return __98.prefix ? __98.operator + __2 : __2 + __98.operator;
  }
  return '???';
}, __140.prototype.createTask_ = function(__98, __0) {
  var __1, __2, __3, __4 = this.stateStack[this.stateStack.length - 1],
    __5 = Array.from(__0),
    __6 = __5.shift(),
    __7 = Math.max(Number(__5.shift() || 0), 0),
    __8 = this.newNode();
  if (__6 instanceof __140.Object && 'Function' === __6.class)
    __2 = __6, __8.type = 'CallExpression', __1 = __4.scope;
  else {
    try {
      __3 = this.parse_(String(__6), 'taskCode' + this.taskCodeNumber_++);
    } catch (__9) {
      this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __9.message);
    }
    __8.type = 'EvalProgram_', __8.body = __3.body;
    var __10 = __4.node.arguments[0],
      __11 = __10 ? __10.start : void 0,
      __12 = __10 ? __10.end : void 0;
    __140.stripLocations_(__8, __11, __12), __1 = this.globalScope, __5.length = 0;
  }
  var __13 = new __140.Task(__2, __5, __1, __8, __98 ? __7 : -1);
  return this.scheduleTask_(__13, __7), __13.pid;
}, __140.prototype.scheduleTask_ = function(__98, __0) {
  __98.time = Date.now() + __0, this.tasks.push(__98), this.tasks.sort(function(__98, __0) {
    return __98.time - __0.time;
  });
}, __140.prototype.deleteTask_ = function(__98) {
  for (var __0 = 0; __0 < this.tasks.length; __0++)
    if (this.tasks[__0].pid == __98) {
      this.tasks.splice(__0, 1);
      break;
    }
}, __140.prototype.nextTask_ = function() {
  var __98 = this.tasks[0];
  if (!__98 || __98.time > Date.now())
    return null;
  this.tasks.shift(), __98.interval >= 0 && this.scheduleTask_(__98, __98.interval);
  var __0 = new __140.State(__98.node, __98.scope);
  return __98.functionRef && (__0.doneCallee_ = 2, __0.funcThis_ = this.globalObject, __0.func_ = __98.functionRef, __0.doneArgs_ = !0, __0.arguments_ = __98.argsArray), __0;
}, __140.prototype.createGetter_ = function(__98, __0) {
  if (!this.getterStep_)
    throw Error('Unexpected call to createGetter');
  this.getterStep_ = !1;
  var __1 = Array.isArray(__0) ? __0[0] : __0,
    __2 = this.newNode();
  __2.type = 'CallExpression';
  var __3 = new __140.State(__2, this.stateStack[this.stateStack.length - 1].scope);
  return __3.doneCallee_ = 2, __3.funcThis_ = __1, __3.func_ = __98, __3.doneArgs_ = !0, __3.arguments_ = [], __3;
}, __140.prototype.createSetter_ = function(__98, __0, __1) {
  if (!this.setterStep_)
    throw Error('Unexpected call to createSetter');
  this.setterStep_ = !1;
  var __2 = Array.isArray(__0) ? __0[0] : this.globalObject,
    __3 = this.newNode();
  __3.type = 'CallExpression';
  var __4 = new __140.State(__3, this.stateStack[this.stateStack.length - 1].scope);
  return __4.doneCallee_ = 2, __4.funcThis_ = __2, __4.func_ = __98, __4.doneArgs_ = !0, __4.arguments_ = [__1], __4;
}, __140.prototype.boxThis_ = function(__98) {
  if (null == __98)
    return this.globalObject;
  if (!(__98 instanceof __140.Object)) {
    var __0 = this.createObjectProto(this.getPrototype(__98));
    return __0.data = __98, __0;
  }
  return __98;
}, __140.prototype.getGlobalScope = function() {
  return this.globalScope;
}, __140.prototype.setGlobalScope = function(__98) {
  this.globalScope = __98, this.stateStack[0].scope = __98;
}, __140.prototype.getStateStack = function() {
  return this.stateStack;
}, __140.prototype.setStateStack = function(__98) {
  this.stateStack = __98;
}, __140.Value, __140.State = function(__98, __0) {
  this.node = __98, this.scope = __0;
}, __140.Scope = function(__98, __0, __1) {
  this.parentScope = __98, this.strict = __0, this.object = __1;
}, __140.Object = function(__98) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = __98;
}, __140.Object.prototype.proto = null, __140.Object.prototype.class = 'Object', __140.Object.prototype.data = null, __140.Object.prototype.toString = function() {
  if (!__140.currentInterpreter_)
    return '[object Interpreter.Object]';
  if (!(this instanceof __140.Object))
    return String(this);
  if ('Array' === this.class) {
    var __98 = __140.toStringCycles_;
    __98.push(this);
    try {
      var __0 = [],
        __1 = this.properties.length,
        __2 = !1;
      __1 > 1024 && (__1 = 1000, __2 = !0);
      for (var __3 = 0; __3 < __1; __3++) {
        var __4 = this.properties[__3];
        __0[__3] = __4 instanceof __140.Object && -1 !== __98.indexOf(__4) ? '...' : __4;
      }
      __2 && __0.push('...');
    } finally {
      __98.pop();
    }
    return __0.join(',');
  }
  if ('Error' === this.class) {
    var __5, __6, __98 = __140.toStringCycles_;
    if (-1 !== __98.indexOf(this))
      return '[object Error]';
    var __7 = this;
    do
      if ('name' in __7.properties) {
        __5 = __7.properties.name;
        break;
      }
    while (__7 = __7.proto);
    __7 = this;
    do
      if ('message' in __7.properties) {
        __6 = __7.properties.message;
        break;
      }
    while (__7 = __7.proto);
    __98.push(this);
    try {
      __5 = __5 && String(__5), __6 = __6 && String(__6);
    } finally {
      __98.pop();
    }
    return __6 ? __5 + ': ' + __6 : String(__5);
  }
  return null !== this.data ? String(this.data) : '[object ' + this.class + ']';
}, __140.Object.prototype.valueOf = function() {
  return !__140.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, __140.Task = function(__98, __0, __1, __2, __3) {
  this.functionRef = __98, this.argsArray = __0, this.scope = __1, this.node = __2, this.interval = __3, this.pid = ++__140.Task.pid, this.time = 0;
}, __140.Task.pid = 0, __140.prototype.stepArrayExpression = function(__98, __0, __1) {
  var __2 = __1.elements,
    __3 = __0.n_ || 0;
  for (__0.array_ ? (this.setProperty(__0.array_, __3, __0.value), __3++) : (__0.array_ = this.createArray(), __0.array_.properties.length = __2.length); __3 < __2.length;) {
    if (__2[__3])
      return __0.n_ = __3, new __140.State(__2[__3], __0.scope);
    __3++;
  }
  __98.pop(), __98[__98.length - 1].value = __0.array_;
}, __140.prototype.stepAssignmentExpression = function(__98, __0, __1) {
  if (!__0.doneLeft_) {
    __0.doneLeft_ = !0;
    var __2 = new __140.State(__1.left, __0.scope);
    return __2.components = !0, __2;
  }
  if (!__0.doneRight_) {
    if (__0.leftReference_ || (__0.leftReference_ = __0.value), __0.doneGetter_ && (__0.leftValue_ = __0.value), !__0.doneGetter_ && '=' !== __1.operator) {
      var __3 = this.getValue(__0.leftReference_);
      if (__0.leftValue_ = __3, this.getterStep_)
        return __0.doneGetter_ = !0, this.createGetter_(__3, __0.leftReference_);
    }
    return __0.doneRight_ = !0, '=' === __1.operator && 'Identifier' === __1.left.type && (__0.destinationName = __1.left.name), new __140.State(__1.right, __0.scope);
  }
  if (__0.doneSetter_) {
    __98.pop(), __98[__98.length - 1].value = __0.setterValue_;
    return;
  }
  var __4 = __0.leftValue_,
    __5 = __0.value;
  switch (__1.operator) {
    case '=':
      __4 = __5;
      break;
    case '+=':
      __4 += __5;
      break;
    case '-=':
      __4 -= __5;
      break;
    case '*=':
      __4 *= __5;
      break;
    case '/=':
      __4 /= __5;
      break;
    case '%=':
      __4 %= __5;
      break;
    case '<<=':
      __4 <<= __5;
      break;
    case '>>=':
      __4 >>= __5;
      break;
    case '>>>=':
      __4 >>>= __5;
      break;
    case '&=':
      __4 &= __5;
      break;
    case '^=':
      __4 ^= __5;
      break;
    case '|=':
      __4 |= __5;
      break;
    default:
      throw SyntaxError('Unknown assignment expression: ' + __1.operator);
  }
  var __6 = this.setValue(__0.leftReference_, __4);
  if (__6)
    return __0.doneSetter_ = !0, __0.setterValue_ = __4, this.createSetter_(__6, __0.leftReference_, __4);
  __98.pop(), __98[__98.length - 1].value = __4;
}, __140.prototype.stepBinaryExpression = function(__98, __0, __1) {
  if (!__0.doneLeft_)
    return __0.doneLeft_ = !0, new __140.State(__1.left, __0.scope);
  if (!__0.doneRight_)
    return __0.doneRight_ = !0, __0.leftValue_ = __0.value, new __140.State(__1.right, __0.scope);
  __98.pop();
  var __2, __3 = __0.leftValue_,
    __4 = __0.value;
  switch (__1.operator) {
    case '==':
      __2 = __3 == __4;
      break;
    case '!=':
      __2 = __3 != __4;
      break;
    case '===':
      __2 = __3 === __4;
      break;
    case '!==':
      __2 = __3 !== __4;
      break;
    case '>':
      __2 = __3 > __4;
      break;
    case '>=':
      __2 = __3 >= __4;
      break;
    case '<':
      __2 = __3 < __4;
      break;
    case '<=':
      __2 = __3 <= __4;
      break;
    case '+':
      __2 = __3 + __4;
      break;
    case '-':
      __2 = __3 - __4;
      break;
    case '*':
      __2 = __3 * __4;
      break;
    case '/':
      __2 = __3 / __4;
      break;
    case '%':
      __2 = __3 % __4;
      break;
    case '&':
      __2 = __3 & __4;
      break;
    case '|':
      __2 = __3 | __4;
      break;
    case '^':
      __2 = __3 ^ __4;
      break;
    case '<<':
      __2 = __3 << __4;
      break;
    case '>>':
      __2 = __3 >> __4;
      break;
    case '>>>':
      __2 = __3 >>> __4;
      break;
    case 'in':
      __4 instanceof __140.Object || this.throwException(this.TYPE_ERROR, '\'in\' expects an object, not \'' + __4 + '\''), __2 = this.hasProperty(__4, __3);
      break;
    case 'instanceof':
      this.isa(__4, this.FUNCTION) || this.throwException(this.TYPE_ERROR, '\'instanceof\' expects an object, not \'' + __4 + '\''), __2 = __3 instanceof __140.Object && this.isa(__3, __4);
      break;
    default:
      throw SyntaxError('Unknown binary operator: ' + __1.operator);
  }
  __98[__98.length - 1].value = __2;
}, __140.prototype.stepBlockStatement = function(__98, __0, __1) {
  var __2 = __0.n_ || 0,
    __3 = __1.body[__2];
  if (__3)
    return __0.n_ = __2 + 1, new __140.State(__3, __0.scope);
  __98.pop();
}, __140.prototype.stepBreakStatement = function(__98, __0, __1) {
  var __2 = __1.label && __1.label.name;
  this.unwind(__140.Completion.BREAK, void 0, __2);
}, __140.prototype.evalCodeNumber_ = 0, __140.prototype.stepCallExpression = function(__98, __0, __1) {
  if (!__0.doneCallee_) {
    __0.doneCallee_ = 1;
    var __2 = new __140.State(__1.callee, __0.scope);
    return __2.components = !0, __2;
  }
  if (1 === __0.doneCallee_) {
    __0.doneCallee_ = 2;
    var __3 = __0.value;
    if (Array.isArray(__3)) {
      if (__0.func_ = this.getValue(__3), __3[0] === __140.SCOPE_REFERENCE ? __0.directEval_ = 'eval' === __3[1] : __0.funcThis_ = __3[0], __3 = __0.func_, this.getterStep_)
        return __0.doneCallee_ = 1, this.createGetter_(__3, __0.value);
    } else
      __0.func_ = __3;
    __0.arguments_ = [], __0.n_ = 0;
  }
  var __3 = __0.func_;
  if (!__0.doneArgs_) {
    if (0 !== __0.n_ && __0.arguments_.push(__0.value), __1.arguments[__0.n_])
      return new __140.State(__1.arguments[__0.n_++], __0.scope);
    if ('NewExpression' === __1.type) {
      if (__3 instanceof __140.Object && !__3.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(__1.callee) + ' is not a constructor'), __3 === this.ARRAY)
        __0.funcThis_ = this.createArray();
      else {
        var __4 = __3.properties.prototype;
        ('object' != typeof __4 || null === __4) && (__4 = this.OBJECT_PROTO), __0.funcThis_ = this.createObjectProto(__4);
      }
      __0.isConstructor = !0;
    }
    __0.doneArgs_ = !0;
  }
  if (__0.doneExec_)
    __98.pop(), __0.isConstructor && 'object' != typeof __0.value ? __98[__98.length - 1].value = __0.funcThis_ : __98[__98.length - 1].value = __0.value;
  else {
    __0.doneExec_ = !0, __3 instanceof __140.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(__1.callee) + ' is not a function');
    var __5 = __3.node;
    if (__5) {
      for (var __6 = this.createScope(__5.body, __3.parentScope), __7 = this.createArray(), __8 = 0; __8 < __0.arguments_.length; __8++)
        this.setProperty(__7, __8, __0.arguments_[__8]);
      this.setProperty(__6.object, 'arguments', __7);
      for (var __8 = 0; __8 < __5.params.length; __8++) {
        var __9 = __5.params[__8].name,
          __10 = __0.arguments_.length > __8 ? __0.arguments_[__8] : void 0;
        this.setProperty(__6.object, __9, __10);
      }
      return __6.strict || (__0.funcThis_ = this.boxThis_(__0.funcThis_)), this.setProperty(__6.object, 'this', __0.funcThis_, __140.READONLY_DESCRIPTOR), __0.value = void 0, new __140.State(__5.body, __6);
    }
    if (__3.eval) {
      var __11 = __0.arguments_[0];
      if ('string' != typeof __11)
        __0.value = __11;
      else {
        try {
          var __12 = this.parse_(String(__11), 'eval' + this.evalCodeNumber_++);
        } catch (__13) {
          this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __13.message);
        }
        var __14 = this.newNode();
        __14.type = 'EvalProgram_', __14.body = __12.body, __140.stripLocations_(__14, __1.start, __1.end);
        var __6 = __0.directEval_ ? __0.scope : this.globalScope;
        return __6.strict ? __6 = this.createScope(__12, __6) : this.populateScope_(__12, __6), this.value = void 0, new __140.State(__14, __6);
      }
    } else if (__3.nativeFunc)
      __0.scope.strict || (__0.funcThis_ = this.boxThis_(__0.funcThis_)), __0.value = __3.nativeFunc.apply(__0.funcThis_, __0.arguments_);
    else if (__3.asyncFunc) {
      var __15 = this,
        __16 = function(__98) {
          __0.value = __98, __15.paused_ = !1;
        },
        __17 = __3.asyncFunc.length - 1,
        __18 = __0.arguments_.concat(Array(__17)).slice(0, __17);
      __18.push(__16), this.paused_ = !0, __0.scope.strict || (__0.funcThis_ = this.boxThis_(__0.funcThis_)), __3.asyncFunc.apply(__0.funcThis_, __18);
      return;
    } else
      this.throwException(this.TYPE_ERROR, this.nodeSummary(__1.callee) + ' is not callable');
  }
}, __140.prototype.stepConditionalExpression = function(__98, __0, __1) {
  var __2 = __0.mode_ || 0;
  if (0 === __2)
    return __0.mode_ = 1, new __140.State(__1.test, __0.scope);
  if (1 === __2) {
    __0.mode_ = 2;
    var __3 = Boolean(__0.value);
    if (__3 && __1.consequent)
      return new __140.State(__1.consequent, __0.scope);
    if (!__3 && __1.alternate)
      return new __140.State(__1.alternate, __0.scope);
    this.value = void 0;
  }
  __98.pop(), 'ConditionalExpression' === __1.type && (__98[__98.length - 1].value = __0.value);
}, __140.prototype.stepContinueStatement = function(__98, __0, __1) {
  var __2 = __1.label && __1.label.name;
  this.unwind(__140.Completion.CONTINUE, void 0, __2);
}, __140.prototype.stepDebuggerStatement = function(__98, __0, __1) {
  __98.pop();
}, __140.prototype.stepDoWhileStatement = function(__98, __0, __1) {
  if ('DoWhileStatement' === __1.type && void 0 === __0.test_ && (__0.value = !0, __0.test_ = !0), !__0.test_)
    return __0.test_ = !0, new __140.State(__1.test, __0.scope);
  if (__0.value) {
    if (__1.body)
      return __0.test_ = !1, __0.isLoop = !0, new __140.State(__1.body, __0.scope);
  } else
    __98.pop();
}, __140.prototype.stepEmptyStatement = function(__98, __0, __1) {
  __98.pop();
}, __140.prototype.stepEvalProgram_ = function(__98, __0, __1) {
  var __2 = __0.n_ || 0,
    __3 = __1.body[__2];
  if (__3)
    return __0.n_ = __2 + 1, new __140.State(__3, __0.scope);
  __98.pop(), __98[__98.length - 1].value = this.value;
}, __140.prototype.stepExpressionStatement = function(__98, __0, __1) {
  if (!__0.done_)
    return this.value = void 0, __0.done_ = !0, new __140.State(__1.expression, __0.scope);
  __98.pop(), this.value = __0.value;
}, __140.prototype.stepForInStatement = function(__98, __0, __1) {
  if (!__0.doneInit_ && (__0.doneInit_ = !0, __1.left.declarations && __1.left.declarations[0].init))
    return __0.scope.strict && this.throwException(this.SYNTAX_ERROR, 'for-in loop variable declaration may not have an initializer'), new __140.State(__1.left, __0.scope);
  if (!__0.doneObject_)
    return __0.doneObject_ = !0, __0.variable_ || (__0.variable_ = __0.value), new __140.State(__1.right, __0.scope);
  if (__0.isLoop || (__0.isLoop = !0, __0.object_ = __0.value, __0.visited_ = Object.create(null)), void 0 === __0.name_)
    gotPropName:
    for (;;) {
      if (__0.object_ instanceof __140.Object)
        for (__0.props_ || (__0.props_ = Object.getOwnPropertyNames(__0.object_.properties));;) {
          var __2 = __0.props_.shift();
          if (void 0 === __2)
            break;
          if (Object.prototype.hasOwnProperty.call(__0.object_.properties, __2) && !__0.visited_[__2]) {
            if (__0.visited_[__2] = !0, Object.prototype.propertyIsEnumerable.call(__0.object_.properties, __2)) {
              __0.name_ = __2;
              break gotPropName;
            }
          }
        }
      else if (null !== __0.object_ && void 0 !== __0.object_)
        for (__0.props_ || (__0.props_ = Object.getOwnPropertyNames(__0.object_));;) {
          var __2 = __0.props_.shift();
          if (void 0 === __2)
            break;
          if (__0.visited_[__2] = !0, Object.prototype.propertyIsEnumerable.call(__0.object_, __2)) {
            __0.name_ = __2;
            break gotPropName;
          }
        }
      if (__0.object_ = this.getPrototype(__0.object_), __0.props_ = null, null === __0.object_) {
        __98.pop();
        return;
      }
    }
  if (!__0.doneVariable_) {
    __0.doneVariable_ = !0;
    var __3 = __1.left;
    if ('VariableDeclaration' === __3.type)
      __0.variable_ = [
        __140.SCOPE_REFERENCE,
        __3.declarations[0].id.name
      ];
    else {
      __0.variable_ = null;
      var __4 = new __140.State(__3, __0.scope);
      return __4.components = !0, __4;
    }
  }
  if (__0.variable_ || (__0.variable_ = __0.value), !__0.doneSetter_) {
    __0.doneSetter_ = !0;
    var __5 = __0.name_,
      __6 = this.setValue(__0.variable_, __5);
    if (__6)
      return this.createSetter_(__6, __0.variable_, __5);
  }
  if (__0.name_ = void 0, __0.doneVariable_ = !1, __0.doneSetter_ = !1, __1.body)
    return new __140.State(__1.body, __0.scope);
}, __140.prototype.stepForStatement = function(__98, __0, __1) {
  switch (__0.mode_) {
    default:
      if (__0.mode_ = 1, __1.init)
        return new __140.State(__1.init, __0.scope);
      break;
    case 1:
      if (__0.mode_ = 2, __1.test)
        return new __140.State(__1.test, __0.scope);
      break;
    case 2:
      if (__0.mode_ = 3, !__1.test || __0.value)
        return __0.isLoop = !0, new __140.State(__1.body, __0.scope);
      __98.pop();
      break;
    case 3:
      if (__0.mode_ = 1, __1.update)
        return new __140.State(__1.update, __0.scope);
  }
}, __140.prototype.stepFunctionDeclaration = function(__98, __0, __1) {
  __98.pop();
}, __140.prototype.stepFunctionExpression = function(__98, __0, __1) {
  __98.pop();
  var __2 = (__0 = __98[__98.length - 1]).scope;
  __1.id && (__2 = this.createSpecialScope(__2)), __0.value = this.createFunction(__1, __2, __0.destinationName), __1.id && this.setProperty(__2.object, __1.id.name, __0.value, __140.READONLY_DESCRIPTOR);
}, __140.prototype.stepIdentifier = function(__98, __0, __1) {
  if (__98.pop(), __0.components) {
    __98[__98.length - 1].value = [
      __140.SCOPE_REFERENCE,
      __1.name
    ];
    return;
  }
  var __2 = this.getValueFromScope(__1.name);
  if (this.getterStep_)
    return this.createGetter_(__2, this.globalObject);
  __98[__98.length - 1].value = __2;
}, __140.prototype.stepIfStatement = __140.prototype.stepConditionalExpression, __140.prototype.stepLabeledStatement = function(__98, __0, __1) {
  __98.pop();
  var __2 = __0.labels || [];
  __2.push(__1.label.name);
  var __3 = new __140.State(__1.body, __0.scope);
  return __3.labels = __2, __3;
}, __140.prototype.stepLiteral = function(__98, __0, __1) {
  __98.pop();
  var __2 = __1.value;
  if (__2 instanceof RegExp) {
    var __3 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(__3, __2), __2 = __3;
  }
  __98[__98.length - 1].value = __2;
}, __140.prototype.stepLogicalExpression = function(__98, __0, __1) {
  if ('&&' !== __1.operator && '||' !== __1.operator)
    throw SyntaxError('Unknown logical operator: ' + __1.operator);
  if (!__0.doneLeft_)
    return __0.doneLeft_ = !0, new __140.State(__1.left, __0.scope);
  if (__0.doneRight_)
    __98.pop(), __98[__98.length - 1].value = __0.value;
  else {
    if (('&&' !== __1.operator || __0.value) && ('||' !== __1.operator || !__0.value))
      return __0.doneRight_ = !0, new __140.State(__1.right, __0.scope);
    __98.pop(), __98[__98.length - 1].value = __0.value;
  }
}, __140.prototype.stepMemberExpression = function(__98, __0, __1) {
  if (!__0.doneObject_)
    return __0.doneObject_ = !0, new __140.State(__1.object, __0.scope);
  if (__1.computed) {
    if (!__0.doneProperty_)
      return __0.object_ = __0.value, __0.doneProperty_ = !0, new __140.State(__1.property, __0.scope);
    __2 = __0.value;
  } else
    __0.object_ = __0.value, __2 = __1.property.name;
  if (__98.pop(), __0.components)
    __98[__98.length - 1].value = [
      __0.object_,
      __2
    ];
  else {
    var __2, __3 = this.getProperty(__0.object_, __2);
    if (this.getterStep_)
      return this.createGetter_(__3, __0.object_);
    __98[__98.length - 1].value = __3;
  }
}, __140.prototype.stepNewExpression = __140.prototype.stepCallExpression, __140.prototype.stepObjectExpression = function(__98, __0, __1) {
  var __2 = __0.n_ || 0,
    __3 = __1.properties[__2];
  if (__0.object_) {
    var __4 = __0.destinationName;
    __0.properties_[__4] || (__0.properties_[__4] = {}), __0.properties_[__4][__3.kind] = __0.value, __0.n_ = ++__2, __3 = __1.properties[__2];
  } else
    __0.object_ = this.createObjectProto(this.OBJECT_PROTO), __0.properties_ = Object.create(null);
  if (__3) {
    var __5 = __3.key;
    if ('Identifier' === __5.type)
      var __4 = __5.name;
    else if ('Literal' === __5.type)
      var __4 = __5.value;
    else
      throw SyntaxError('Unknown object structure: ' + __5.type);
    return __0.destinationName = __4, new __140.State(__3.value, __0.scope);
  }
  for (var __5 in __0.properties_) {
    var __6 = __0.properties_[__5];
    if ('get' in __6 || 'set' in __6) {
      var __7 = {
        configurable: !0,
        enumerable: !0,
        get: __6.get,
        set: __6.set
      };
      this.setProperty(__0.object_, __5, __140.VALUE_IN_DESCRIPTOR, __7);
    } else
      this.setProperty(__0.object_, __5, __6.init);
  }
  __98.pop(), __98[__98.length - 1].value = __0.object_;
}, __140.prototype.stepProgram = function(__98, __0, __1) {
  var __2 = __1.body.shift();
  if (__2)
    return __0.done = !1, new __140.State(__2, __0.scope);
  __0.done = !0;
}, __140.prototype.stepReturnStatement = function(__98, __0, __1) {
  if (__1.argument && !__0.done_)
    return __0.done_ = !0, new __140.State(__1.argument, __0.scope);
  this.unwind(__140.Completion.RETURN, __0.value, void 0);
}, __140.prototype.stepSequenceExpression = function(__98, __0, __1) {
  var __2 = __0.n_ || 0,
    __3 = __1.expressions[__2];
  if (__3)
    return __0.n_ = __2 + 1, new __140.State(__3, __0.scope);
  __98.pop(), __98[__98.length - 1].value = __0.value;
}, __140.prototype.stepSwitchStatement = function(__98, __0, __1) {
  if (!__0.test_)
    return __0.test_ = 1, new __140.State(__1.discriminant, __0.scope);
  for (1 === __0.test_ && (__0.test_ = 2, __0.switchValue_ = __0.value, __0.defaultCase_ = -1);;) {
    var __2 = __0.index_ || 0,
      __3 = __1.cases[__2];
    if (!__0.matched_ && __3 && !__3.test) {
      __0.defaultCase_ = __2, __0.index_ = __2 + 1;
      continue;
    }
    if (!__3 && !__0.matched_ && -1 !== __0.defaultCase_) {
      __0.matched_ = !0, __0.index_ = __0.defaultCase_;
      continue;
    }
    if (__3) {
      if (!__0.matched_ && !__0.tested_ && __3.test)
        return __0.tested_ = !0, new __140.State(__3.test, __0.scope);
      if (__0.matched_ || __0.value === __0.switchValue_) {
        __0.matched_ = !0;
        var __4 = __0.n_ || 0;
        if (__3.consequent[__4])
          return __0.isSwitch = !0, __0.n_ = __4 + 1, new __140.State(__3.consequent[__4], __0.scope);
      }
      __0.tested_ = !1, __0.n_ = 0, __0.index_ = __2 + 1;
    } else {
      __98.pop();
      return;
    }
  }
}, __140.prototype.stepThisExpression = function(__98, __0, __1) {
  __98.pop(), __98[__98.length - 1].value = this.getValueFromScope('this');
}, __140.prototype.stepThrowStatement = function(__98, __0, __1) {
  if (!__0.done_)
    return __0.done_ = !0, new __140.State(__1.argument, __0.scope);
  this.throwException(__0.value);
}, __140.prototype.stepTryStatement = function(__98, __0, __1) {
  if (!__0.doneBlock_)
    return __0.doneBlock_ = !0, new __140.State(__1.block, __0.scope);
  if (__0.cv && __0.cv.type === __140.Completion.THROW && !__0.doneHandler_ && __1.handler) {
    __0.doneHandler_ = !0;
    var __2 = this.createSpecialScope(__0.scope);
    return this.setProperty(__2.object, __1.handler.param.name, __0.cv.value), __0.cv = void 0, new __140.State(__1.handler.body, __2);
  }
  if (!__0.doneFinalizer_ && __1.finalizer)
    return __0.doneFinalizer_ = !0, new __140.State(__1.finalizer, __0.scope);
  __98.pop(), __0.cv && this.unwind(__0.cv.type, __0.cv.value, __0.cv.label);
}, __140.prototype.stepUnaryExpression = function(__98, __0, __1) {
  if (!__0.done_) {
    __0.done_ = !0;
    var __2 = new __140.State(__1.argument, __0.scope);
    return __2.components = 'delete' === __1.operator, __2;
  }
  __98.pop();
  var __3 = __0.value;
  switch (__1.operator) {
    case '-':
      __3 = -__3;
      break;
    case '+':
      __3 = +__3;
      break;
    case '!':
      __3 = !__3;
      break;
    case '~':
      __3 = ~__3;
      break;
    case 'delete':
      var __4 = !0;
      if (Array.isArray(__3)) {
        var __5 = __3[0];
        __5 === __140.SCOPE_REFERENCE && (__5 = __0.scope);
        var __6 = String(__3[1]);
        try {
          delete __5.properties[__6];
        } catch (__7) {
          __0.scope.strict ? this.throwException(this.TYPE_ERROR, 'Cannot delete property \'' + __6 + '\' of \'' + __5 + '\'') : __4 = !1;
        }
      }
      __3 = __4;
      break;
    case 'typeof':
      __3 = __3 && 'Function' === __3.class ? 'function' : typeof __3;
      break;
    case 'void':
      __3 = void 0;
      break;
    default:
      throw SyntaxError('Unknown unary operator: ' + __1.operator);
  }
  __98[__98.length - 1].value = __3;
}, __140.prototype.stepUpdateExpression = function(__98, __0, __1) {
  if (!__0.doneLeft_) {
    __0.doneLeft_ = !0;
    var __2, __3 = new __140.State(__1.argument, __0.scope);
    return __3.components = !0, __3;
  }
  if (__0.leftSide_ || (__0.leftSide_ = __0.value), __0.doneGetter_ && (__0.leftValue_ = __0.value), !__0.doneGetter_) {
    var __4 = this.getValue(__0.leftSide_);
    if (__0.leftValue_ = __4, this.getterStep_) {
      __0.doneGetter_ = !0;
      var __5 = __4;
      return this.createGetter_(__5, __0.leftSide_);
    }
  }
  if (__0.doneSetter_) {
    __98.pop(), __98[__98.length - 1].value = __0.setterValue_;
    return;
  }
  var __4 = Number(__0.leftValue_);
  if ('++' === __1.operator)
    __2 = __4 + 1;
  else if ('--' === __1.operator)
    __2 = __4 - 1;
  else
    throw SyntaxError('Unknown update expression: ' + __1.operator);
  var __6 = __1.prefix ? __2 : __4,
    __7 = this.setValue(__0.leftSide_, __2);
  if (__7)
    return __0.doneSetter_ = !0, __0.setterValue_ = __6, this.createSetter_(__7, __0.leftSide_, __2);
  __98.pop(), __98[__98.length - 1].value = __6;
}, __140.prototype.stepVariableDeclaration = function(__98, __0, __1) {
  var __2 = __1.declarations,
    __3 = __0.n_ || 0,
    __4 = __2[__3];
  for (__0.init_ && __4 && (this.setValueToScope(__4.id.name, __0.value), __0.init_ = !1, __4 = __2[++__3]); __4;) {
    if (__4.init)
      return __0.n_ = __3, __0.init_ = !0, __0.destinationName = __4.id.name, new __140.State(__4.init, __0.scope);
    __4 = __2[++__3];
  }
  __98.pop();
}, __140.prototype.stepWithStatement = function(__98, __0, __1) {
  if (!__0.doneObject_)
    return __0.doneObject_ = !0, new __140.State(__1.object, __0.scope);
  __98.pop();
  var __2 = this.createSpecialScope(__0.scope, __0.value);
  return new __140.State(__1.body, __2);
}, __140.prototype.stepWhileStatement = __140.prototype.stepDoWhileStatement, __140.nativeGlobal.__140 = __140, __140.prototype.step = __140.prototype.step, __140.prototype.run = __140.prototype.run, __140.prototype.getStatus = __140.prototype.getStatus, __140.prototype.appendCode = __140.prototype.appendCode, __140.prototype.createObject = __140.prototype.createObject, __140.prototype.createObjectProto = __140.prototype.createObjectProto, __140.prototype.createNativeFunction = __140.prototype.createNativeFunction, __140.prototype.createAsyncFunction = __140.prototype.createAsyncFunction, __140.prototype.getProperty = __140.prototype.getProperty, __140.prototype.setProperty = __140.prototype.setProperty, __140.prototype.nativeToPseudo = __140.prototype.nativeToPseudo, __140.prototype.pseudoToNative = __140.prototype.pseudoToNative, __140.prototype.getGlobalScope = __140.prototype.getGlobalScope, __140.prototype.setGlobalScope = __140.prototype.setGlobalScope, __140.prototype.getStateStack = __140.prototype.getStateStack, __140.prototype.setStateStack = __140.prototype.setStateStack, __140.Status = __140.Status, __140.VALUE_IN_DESCRIPTOR = __140.VALUE_IN_DESCRIPTOR;