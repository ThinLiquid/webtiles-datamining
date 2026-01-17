/* 743f4d7fc4703a5a0e4ff831beb9a63e52ab043482ad599220722d13e821214d */
! function(e, t) {
  return 'object' == typeof exports && 'object' == typeof module ? t(exports) : 'function' == typeof define && define.amd ? define(['exports'], t) : void t(e.acorn || (e.acorn = {}));
}('undefined' == typeof globalThis ? this || window : globalThis, function(e) {
  'use strict';
  e.version = '0.5.0';
  var __var_0, __var_1, __var_2, __var_3, __var_4, __var_5, __var_6, __var_7, __var_8, __var_9, __var_10, __var_11, __var_12, __var_13, __var_14, __var_15 = '';
  e.parse = function(e, __var_3) {
    return __var_1 = (__var_15 = String(e)).length,
      function e(__var_1) {
        for (var __var_3 in (__var_0 = __var_1 || {}, y))
          Object.prototype.hasOwnProperty.call(__var_0, __var_3) || (__var_0[__var_3] = y[__var_3]);
        __var_2 = __var_0.sourceFile;
      }(__var_3), __var_8 = 1, b = __var_9 = 0, __var_7 = !0, e4(),
      function e(__var_1) {
        O = g = b, __var_0.locations && (__var_10 = new eM()), __var_11 = __var_13 = !1, __var_12 = [], e3();
        var __var_2 = __var_1 || eH(),
          __var_3 = !0;
        for (__var_1 || (__var_2.body = []); __var_5 !== C;) {
          var __var_4 = ts();
          __var_2.body.push(__var_4), __var_3 && eQ(__var_4) && eW(!0), __var_3 = !1;
        }
        return e9(__var_2, 'Program');
      }(__var_0.program);
  };
  var __var_16 = {
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
    __var_17 = function(e, __var_0) {
      for (var __var_1 = 1, __var_2 = 0;;) {
        eL.lastIndex = __var_2;
        var __var_3 = eL.exec(e);
        if (__var_3 && __var_3.index < __var_0)
          ++__var_1, __var_2 = __var_3.index + __var_3[0].length;
        else
          break;
      }
      return {
        line: __var_1,
        column: __var_0 - __var_2
      };
    },
    __var_18 = 0,
    __var_19 = 0,
    __var_20 = 0,
    __var_21 = 0,
    __var_22 = 0;

  function __fn_23(e, __var_0) {
    var __var_1 = __var_17(__var_15, e),
      __var_2 = SyntaxError(__var_0 += ' (' + __var_1.line + ':' + __var_1.column + ')');
    throw __var_2.pos = e, __var_2.loc = __var_1, __var_2.raisedAt = __var_18, __var_2;
  }
  var __var_24 = [],
    __var_25 = {
      type: 'num'
    },
    __var_26 = {
      type: 'regexp'
    },
    __var_27 = {
      type: 'string'
    },
    __var_28 = {
      type: 'name'
    },
    __var_29 = {
      type: 'eof'
    },
    __var_30 = {
      keyword: 'break'
    },
    __var_31 = {
      keyword: 'case',
      beforeExpr: !0
    },
    __var_32 = {
      keyword: 'catch'
    },
    __var_33 = {
      keyword: 'continue'
    },
    __var_34 = {
      keyword: 'debugger'
    },
    __var_35 = {
      keyword: 'default'
    },
    __var_36 = {
      keyword: 'do',
      isLoop: !0
    },
    __var_37 = {
      keyword: 'else',
      beforeExpr: !0
    },
    __var_38 = {
      keyword: 'finally'
    },
    __var_39 = {
      keyword: 'for',
      isLoop: !0
    },
    __var_40 = {
      keyword: 'function'
    },
    __var_41 = {
      keyword: 'if'
    },
    __var_42 = {
      keyword: 'return',
      beforeExpr: !0
    },
    __var_43 = {
      keyword: 'switch'
    },
    __var_44 = {
      keyword: 'throw',
      beforeExpr: !0
    },
    __var_45 = {
      keyword: 'try'
    },
    __var_46 = {
      keyword: 'var'
    },
    __var_47 = {
      keyword: 'while',
      isLoop: !0
    },
    __var_48 = {
      keyword: 'with'
    },
    __var_49 = {
      keyword: 'new',
      beforeExpr: !0
    },
    __var_50 = {
      keyword: 'this'
    },
    __var_51 = {
      keyword: 'null',
      atomValue: null
    },
    __var_52 = {
      keyword: 'true',
      atomValue: !0
    },
    __var_53 = {
      keyword: 'false',
      atomValue: !1
    },
    __var_54 = {
      keyword: 'in',
      binop: 7,
      beforeExpr: !0
    },
    __var_55 = {
      break: __var_30,
      case: __var_31,
      catch: __var_32,
      continue: __var_33,
      debugger: __var_34,
      default: __var_35,
      do: __var_36,
      else: __var_37,
      finally: __var_38,
      for: __var_39,
      function: __var_40,
      if: __var_41,
      return: __var_42,
      switch: __var_43,
      throw: __var_44,
      try: __var_45,
      var: __var_46,
      while: __var_47,
      with: __var_48,
      null: __var_51,
      true: __var_52,
      false: __var_53,
      new: __var_49,
      in: __var_54,
      instanceof: {
        keyword: 'instanceof',
        binop: 7,
        beforeExpr: !0
      },
      this: __var_50,
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
    __var_56 = {
      type: '[',
      beforeExpr: !0
    },
    __var_57 = {
      type: ']'
    },
    __var_58 = {
      type: '{',
      beforeExpr: !0
    },
    __var_59 = {
      type: '}'
    },
    __var_60 = {
      type: '(',
      beforeExpr: !0
    },
    __var_61 = {
      type: ')'
    },
    __var_62 = {
      type: ',',
      beforeExpr: !0
    },
    __var_63 = {
      type: ';',
      beforeExpr: !0
    },
    __var_64 = {
      type: ':',
      beforeExpr: !0
    },
    __var_65 = {
      type: '.'
    },
    __var_66 = {
      type: '?',
      beforeExpr: !0
    },
    __var_67 = {
      binop: 10,
      beforeExpr: !0
    },
    __var_68 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __var_69 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __var_70 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    __var_71 = {
      prefix: !0,
      beforeExpr: !0
    },
    __var_72 = {
      binop: 1,
      beforeExpr: !0
    },
    __var_73 = {
      binop: 2,
      beforeExpr: !0
    },
    __var_74 = {
      binop: 3,
      beforeExpr: !0
    },
    __var_75 = {
      binop: 4,
      beforeExpr: !0
    },
    __var_76 = {
      binop: 5,
      beforeExpr: !0
    },
    __var_77 = {
      binop: 6,
      beforeExpr: !0
    },
    __var_78 = {
      binop: 7,
      beforeExpr: !0
    },
    __var_79 = {
      binop: 8,
      beforeExpr: !0
    },
    __var_80 = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    __var_81 = {
      binop: 10,
      beforeExpr: !0
    };

  function __fn_82(e) {
    for (var __var_0 = e.split(' '), __var_1 = Object.create(null), __var_2 = 0; __var_2 < __var_0.length; __var_2++)
      __var_1[__var_0[__var_2]] = !0;
    return function(e) {
      return __var_1[e] || !1;
    };
  }
  var __var_83 = __fn_82('class enum extends super const export import'),
    __var_84 = __fn_82('implements interface let package private protected public static yield'),
    __var_85 = __fn_82('eval arguments'),
    __var_86 = __fn_82('break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
    __var_87 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    __var_88 = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
    __var_89 = RegExp('[' + __var_88 + ']'),
    __var_90 = RegExp('[' + __var_88 + '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'),
    __var_91 = /[\n\r\u2028\u2029]/,
    __var_92 = /\r\n|[\n\r\u2028\u2029]/g,
    __var_93 = function(e) {
      return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __var_89.test(String.fromCharCode(e)));
    },
    __var_94 = function(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __var_90.test(String.fromCharCode(e))));
    };

  function __fn_95() {
    this.line = __var_8, this.column = __var_18 - __var_9;
  }

  function __fn_96(e, __var_1) {
    __var_20 = __var_18, __var_0.locations && (__var_4 = new __fn_95()), __var_5 = e, e4(), __var_6 = __var_1, __var_7 = e.beforeExpr;
  }

  function __fn_97() {
    var __var_98, __var_1 = __var_0.onComment && __var_0.locations && new __fn_95(),
      __var_2 = __var_18,
      __var_3 = __var_15.indexOf('*/', __var_18 += 2);
    if (-1 === __var_3 && __fn_23(__var_18 - 2, 'Unterminated comment'), __var_18 = __var_3 + 2, __var_0.locations)
      for (__var_92.lastIndex = __var_2;
        (__var_98 = __var_92.exec(__var_15)) && __var_98.index < __var_18;)
        ++__var_8, __var_9 = __var_98.index + __var_98[0].length;
    __var_0.onComment && __var_0.onComment(!0, __var_15.slice(__var_2 + 2, __var_3), __var_2, __var_18, __var_1, __var_0.locations && new __fn_95());
  }

  function __fn_99() {
    for (var __var_98 = __var_18, __var_2 = __var_0.onComment && __var_0.locations && new __fn_95(), __var_3 = __var_15.charCodeAt(__var_18 += 2); __var_18 < __var_1 && 10 !== __var_3 && 13 !== __var_3 && 8232 !== __var_3 && 8233 !== __var_3;)
      ++__var_18, __var_3 = __var_15.charCodeAt(__var_18);
    __var_0.onComment && __var_0.onComment(!1, __var_15.slice(__var_98 + 2, __var_18), __var_98, __var_18, __var_2, __var_0.locations && new __fn_95());
  }

  function __fn_100() {
    for (; __var_18 < __var_1;) {
      var __var_98 = __var_15.charCodeAt(__var_18);
      if (32 === __var_98)
        ++__var_18;
      else if (13 === __var_98) {
        ++__var_18;
        var __var_2 = __var_15.charCodeAt(__var_18);
        10 === __var_2 && ++__var_18, __var_0.locations && (++__var_8, __var_9 = __var_18);
      } else if (10 === __var_98 || 8232 === __var_98 || 8233 === __var_98)
        ++__var_18, __var_0.locations && (++__var_8, __var_9 = __var_18);
      else if (__var_98 > 8 && __var_98 < 14)
        ++__var_18;
      else if (47 === __var_98) {
        var __var_2 = __var_15.charCodeAt(__var_18 + 1);
        if (42 === __var_2)
          __fn_97();
        else if (47 === __var_2)
          __fn_99();
        else
          break;
      } else if (160 === __var_98)
        ++__var_18;
      else if (__var_98 >= 5760 && __var_87.test(String.fromCharCode(__var_98)))
        ++__var_18;
      else
        break;
    }
  }

  function __fn_101(__var_98) {
    if (__var_98 ? __var_18 = __var_19 + 1 : __var_19 = __var_18, __var_0.locations && (__var_3 = new __fn_95()), __var_98)
      return e5();
    if (__var_18 >= __var_1)
      return __fn_96(__var_29);
    var __var_2 = __var_15.charCodeAt(__var_18);
    if (__var_93(__var_2) || 92 === __var_2)
      return eX();
    if (!1 === function __var_98(__var_2) {
        switch (__var_2) {
          case 46:
            return void((__var_4 = __var_15.charCodeAt(__var_18 + 1)) >= 48 && __var_4 <= 57 ? eG(!0) : (++__var_18, __fn_96(__var_65)));
          case 40:
            return ++__var_18, __fn_96(__var_60);
          case 41:
            return ++__var_18, __fn_96(__var_61);
          case 59:
            return ++__var_18, __fn_96(__var_63);
          case 44:
            return ++__var_18, __fn_96(__var_62);
          case 91:
            return ++__var_18, __fn_96(__var_56);
          case 93:
            return ++__var_18, __fn_96(__var_57);
          case 123:
            return ++__var_18, __fn_96(__var_58);
          case 125:
            return ++__var_18, __fn_96(__var_59);
          case 58:
            return ++__var_18, __fn_96(__var_64);
          case 63:
            return ++__var_18, __fn_96(__var_66);
          case 48:
            var __var_3, __var_4, __var_5, __var_6, __var_10, __var_11, __var_12 = __var_15.charCodeAt(__var_18 + 1);
            if (120 === __var_12 || 88 === __var_12) {
              return __var_18 += 2, __var_3 = e2(16), void(null === __var_3 && __fn_23(__var_19 + 2, 'Expected hexadecimal number'), __var_93(__var_15.charCodeAt(__var_18)) && __fn_23(__var_18, 'Identifier directly after number'), __fn_96(__var_25, __var_3));
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
            return function __var_98(__var_2) {
              __var_18++;
              for (var __var_3 = '';;) {
                __var_18 >= __var_1 && __fn_23(__var_19, 'Unterminated string constant');
                var __var_4 = __var_15.charCodeAt(__var_18);
                if (__var_4 === __var_2) {
                  ++__var_18, __fn_96(__var_27, __var_3);
                  return;
                }
                if (92 === __var_4) {
                  __var_4 = __var_15.charCodeAt(++__var_18);
                  var __var_5 = /^[0-7]+/.exec(__var_15.slice(__var_18, __var_18 + 3));
                  for (__var_5 && (__var_5 = __var_5[0]); __var_5 && parseInt(__var_5, 8) > 255;)
                    __var_5 = __var_5.slice(0, -1);
                  if ('0' === __var_5 && (__var_5 = null), ++__var_18, __var_5)
                    __var_13 && __fn_23(__var_18 - 2, 'Octal literal in strict mode'), __var_3 += String.fromCharCode(parseInt(__var_5, 8)), __var_18 += __var_5.length - 1;
                  else
                    switch (__var_4) {
                      case 110:
                        __var_3 += '\n';
                        break;
                      case 114:
                        __var_3 += '\r';
                        break;
                      case 120:
                        __var_3 += String.fromCharCode(eY(2));
                        break;
                      case 117:
                        __var_3 += String.fromCharCode(eY(4));
                        break;
                      case 85:
                        __var_3 += String.fromCharCode(eY(8));
                        break;
                      case 116:
                        __var_3 += '\t';
                        break;
                      case 98:
                        __var_3 += '\b';
                        break;
                      case 118:
                        __var_3 += '\x0B';
                        break;
                      case 102:
                        __var_3 += '\f';
                        break;
                      case 48:
                        __var_3 += '\0';
                        break;
                      case 13:
                        10 === __var_15.charCodeAt(__var_18) && ++__var_18;
                      case 10:
                        __var_0.locations && (__var_9 = __var_18, ++__var_8);
                        break;
                      default:
                        __var_3 += String.fromCharCode(__var_4);
                    }
                } else
                  (13 === __var_4 || 10 === __var_4 || 8232 === __var_4 || 8233 === __var_4) && __fn_23(__var_19, 'Unterminated string constant'), __var_3 += String.fromCharCode(__var_4), ++__var_18;
              }
            }(__var_2);
          case 47:
            return __var_5 = __var_15.charCodeAt(__var_18 + 1), void(__var_7 ? (++__var_18, e5()) : 61 === __var_5 ? e7(__var_69, 2) : e7(__var_67, 1));
          case 37:
          case 42:
            return void(61 === __var_15.charCodeAt(__var_18 + 1) ? e7(__var_69, 2) : e7(__var_81, 1));
          case 124:
          case 38:
            return __var_6 = __var_2, void((__var_10 = __var_15.charCodeAt(__var_18 + 1)) === __var_6 ? e7(124 === __var_6 ? __var_72 : __var_73, 2) : 61 === __var_10 ? e7(__var_69, 2) : e7(124 === __var_6 ? __var_74 : __var_76, 1));
          case 94:
            return void(61 === __var_15.charCodeAt(__var_18 + 1) ? e7(__var_69, 2) : e7(__var_75, 1));
          case 43:
          case 45:
            return function __var_98(__var_0) {
              var __var_1 = __var_15.charCodeAt(__var_18 + 1);
              if (__var_1 === __var_0) {
                if (45 === __var_1 && 62 === __var_15.charCodeAt(__var_18 + 2) && __var_91.test(__var_15.slice(__var_22, __var_18))) {
                  __var_18 += 3, __fn_99(), __fn_100(), __fn_101();
                  return;
                }
                e7(__var_70, 2);
              } else
                61 === __var_1 ? e7(__var_69, 2) : e7(__var_80, 1);
            }(__var_2);
          case 60:
          case 62:
            return function __var_98(__var_0) {
              var __var_1 = __var_15.charCodeAt(__var_18 + 1),
                __var_2 = 1;
              if (__var_1 === __var_0) {
                __var_2 = 62 === __var_0 && 62 === __var_15.charCodeAt(__var_18 + 2) ? 3 : 2, 61 === __var_15.charCodeAt(__var_18 + __var_2) ? e7(__var_69, __var_2 + 1) : e7(__var_79, __var_2);
                return;
              }
              if (33 === __var_1 && 60 === __var_0 && 45 === __var_15.charCodeAt(__var_18 + 2) && 45 === __var_15.charCodeAt(__var_18 + 3)) {
                __var_18 += 4, __fn_99(), __fn_100(), __fn_101();
                return;
              }
              61 === __var_1 && (__var_2 = 61 === __var_15.charCodeAt(__var_18 + 2) ? 3 : 2), e7(__var_78, __var_2);
            }(__var_2);
          case 61:
          case 33:
            return __var_11 = __var_2, void(61 === __var_15.charCodeAt(__var_18 + 1) ? e7(__var_77, 61 === __var_15.charCodeAt(__var_18 + 2) ? 3 : 2) : e7(61 === __var_11 ? __var_68 : __var_71, 1));
          case 126:
            return e7(__var_71, 1);
        }
        return !1;
      }(__var_2)) {
      var __var_4 = String.fromCharCode(__var_2);
      if ('\\' === __var_4 || __var_89.test(__var_4))
        return eX();
      __fn_23(__var_18, 'Unexpected character \'' + __var_4 + '\'');
    }
  }

  function __fn_102(__var_98, __var_0) {
    var __var_1 = __var_15.slice(__var_18, __var_18 + __var_0);
    __var_18 += __var_0, __fn_96(__var_98, __var_1);
  }

  function __fn_103() {
    for (var __var_98, __var_0, __var_2 = __var_18;;) {
      __var_18 >= __var_1 && __fn_23(__var_2, 'Unterminated regexp');
      var __var_3 = __var_15.charAt(__var_18);
      if (__var_91.test(__var_3) && __fn_23(__var_2, 'Unterminated regexp'), __var_98)
        __var_98 = !1;
      else {
        if ('[' === __var_3)
          __var_0 = !0;
        else if (']' === __var_3 && __var_0)
          __var_0 = !1;
        else if ('/' === __var_3 && !__var_0)
          break;
        __var_98 = '\\' === __var_3;
      }
      ++__var_18;
    }
    var __var_4 = __var_15.slice(__var_2, __var_18);
    ++__var_18;
    var __var_5 = eV();
    __var_5 && !/^[gmi]*$/.test(__var_5) && __fn_23(__var_2, 'Invalid regexp flag');
    try {
      var __var_6 = RegExp(__var_4, __var_5);
    } catch (__var_7) {
      throw __var_7 instanceof SyntaxError && __fn_23(__var_2, __var_7.message), __var_7;
    }
    __fn_96(__var_26, __var_6);
  }

  function __fn_104(__var_98, __var_0) {
    for (var __var_1 = __var_18, __var_2 = 0, __var_3 = void 0 === __var_0 ? 1 / 0 : __var_0, __var_4 = 0; __var_4 < __var_3; ++__var_4) {
      var __var_5, __var_6 = __var_15.charCodeAt(__var_18);
      if ((__var_5 = __var_6 >= 97 ? __var_6 - 97 + 10 : __var_6 >= 65 ? __var_6 - 65 + 10 : __var_6 >= 48 && __var_6 <= 57 ? __var_6 - 48 : 1 / 0) >= __var_98)
        break;
      ++__var_18, __var_2 = __var_2 * __var_98 + __var_5;
    }
    return __var_18 === __var_1 || void 0 !== __var_0 && __var_18 - __var_1 !== __var_0 ? null : __var_2;
  }

  function __fn_105(__var_98) {
    var __var_0, __var_1 = __var_18,
      __var_2 = !1,
      __var_3 = 48 === __var_15.charCodeAt(__var_18);
    __var_98 || null !== __fn_104(10) || __fn_23(__var_1, 'Invalid number'), 46 === __var_15.charCodeAt(__var_18) && (++__var_18, __fn_104(10), __var_2 = !0);
    var __var_4 = __var_15.charCodeAt(__var_18);
    (69 === __var_4 || 101 === __var_4) && ((43 === (__var_4 = __var_15.charCodeAt(++__var_18)) || 45 === __var_4) && ++__var_18, null === __fn_104(10) && __fn_23(__var_1, 'Invalid number'), __var_2 = !0), __var_93(__var_15.charCodeAt(__var_18)) && __fn_23(__var_18, 'Identifier directly after number');
    var __var_5 = __var_15.slice(__var_1, __var_18);
    __var_2 ? __var_0 = parseFloat(__var_5) : __var_3 && 1 !== __var_5.length ? /[89]/.test(__var_5) || __var_13 ? __fn_23(__var_1, 'Invalid number') : __var_0 = parseInt(__var_5, 8) : __var_0 = parseInt(__var_5, 10), __fn_96(__var_25, __var_0);
  }

  function __fn_106(__var_98) {
    var __var_0 = __fn_104(16, __var_98);
    return null === __var_0 && __fn_23(__var_19, 'Bad character escape sequence'), __var_0;
  }

  function __fn_107() {
    __var_14 = !1;
    for (var __var_98, __var_0 = !0, __var_1 = __var_18;;) {
      var __var_2 = __var_15.charCodeAt(__var_18);
      if (__var_94(__var_2))
        __var_14 && (__var_98 += __var_15.charAt(__var_18)), ++__var_18;
      else if (92 === __var_2) {
        __var_14 || (__var_98 = __var_15.slice(__var_1, __var_18)), __var_14 = !0, 117 !== __var_15.charCodeAt(++__var_18) && __fn_23(__var_18, 'Expecting Unicode escape sequence \\uXXXX'), ++__var_18;
        var __var_3 = __fn_106(4),
          __var_4 = String.fromCharCode(__var_3);
        __var_4 || __fn_23(__var_18 - 1, 'Invalid Unicode escape'), (__var_0 ? __var_93(__var_3) : __var_94(__var_3)) || __fn_23(__var_18 - 4, 'Invalid Unicode escape'), __var_98 += __var_4;
      } else
        break;
      __var_0 = !1;
    }
    return __var_14 ? __var_98 : __var_15.slice(__var_1, __var_18);
  }

  function __fn_108() {
    var __var_98 = __fn_107(),
      __var_0 = __var_28;
    !__var_14 && __var_86(__var_98) && (__var_0 = __var_55[__var_98]), __fn_96(__var_0, __var_98);
  }

  function __fn_109() {
    __var_21 = __var_19, __var_22 = __var_20, __var_10 = __var_4, __fn_101();
  }

  function __fn_110(__var_98) {
    if (__var_13 = __var_98, __var_18 = __var_19, __var_0.locations)
      for (; __var_18 < __var_9;)
        __var_9 = __var_15.lastIndexOf('\n', __var_9 - 2) + 1, --__var_8;
    __fn_100(), __fn_101();
  }

  function __fn_111() {
    this.type = null, this.start = __var_19, this.end = null;
  }

  function __fn_112() {
    this.start = __var_3, this.end = null, __var_2 && (this.source = __var_2);
  }

  function __fn_113() {
    var __var_98 = new __fn_111();
    return __var_0.locations && (__var_98.loc = new __fn_112()), __var_0.directSourceFile && (__var_98.sourceFile = __var_0.directSourceFile), __var_0.ranges && (__var_98.range = [
      __var_19,
      0
    ]), __var_98;
  }

  function __fn_114(__var_98) {
    var __var_1 = new __fn_111();
    return __var_1.start = __var_98.start, __var_0.locations && (__var_1.loc = new __fn_112(), __var_1.loc.start = __var_98.loc.start), __var_0.ranges && (__var_1.range = [
      __var_98.range[0],
      0
    ]), __var_1;
  }

  function __fn_115(__var_98, __var_1) {
    return __var_98.type = __var_1, __var_98.end = __var_22, __var_0.locations && (__var_98.loc.end = __var_10), __var_0.ranges && (__var_98.range[1] = __var_22), __var_98;
  }

  function __fn_116(__var_98) {
    return 'ExpressionStatement' === __var_98.type && 'Literal' === __var_98.expression.type && 'use strict' === __var_98.expression.value;
  }

  function __fn_117(__var_98) {
    return __var_5 === __var_98 && (__fn_109(), !0);
  }

  function __fn_118() {
    return !__var_0.strictSemicolons && (__var_5 === __var_29 || __var_5 === __var_59 || __var_91.test(__var_15.slice(__var_22, __var_19)));
  }

  function __fn_119() {
    __fn_117(__var_63) || __fn_118() || tn();
  }

  function __fn_120(__var_98) {
    __var_5 === __var_98 ? __fn_109() : tn();
  }

  function __fn_121() {
    __fn_23(__var_19, 'Unexpected token');
  }

  function __fn_122(__var_98) {
    'Identifier' !== __var_98.type && 'MemberExpression' !== __var_98.type && __fn_23(__var_98.start, 'Assigning to rvalue'), __var_13 && 'Identifier' === __var_98.type && __var_85(__var_98.name) && __fn_23(__var_98.start, 'Assigning to ' + __var_98.name + ' in strict mode');
  }
  var __var_123 = {
      kind: 'loop'
    },
    __var_124 = {
      kind: 'switch'
    };

  function __fn_125() {
    (__var_5 === __var_67 || __var_5 === __var_69 && '/=' === __var_6) && __fn_101(!0);
    var __var_98, __var_1, __var_2 = __var_5,
      __var_3 = __fn_113();
    switch (__var_2) {
      case __var_30:
      case __var_33:
        __fn_109();
        var __var_4 = __var_2 === __var_30;
        __fn_117(__var_63) || __fn_118() ? __var_3.label = null : __var_5 !== __var_28 ? __fn_121() : (__var_3.label = tI(), __fn_119());
        for (var __var_7 = 0; __var_7 < __var_12.length; ++__var_7) {
          var __var_8 = __var_12[__var_7];
          if ((null === __var_3.label || __var_8.name === __var_3.label.name) && (null !== __var_8.kind && (__var_4 || 'loop' === __var_8.kind) || __var_3.label && __var_4))
            break;
        }
        return __var_7 === __var_12.length && __fn_23(__var_3.start, 'Unsyntactic ' + __var_2.keyword), __fn_115(__var_3, __var_4 ? 'BreakStatement' : 'ContinueStatement');
      case __var_34:
        return __fn_109(), __fn_119(), __fn_115(__var_3, 'DebuggerStatement');
      case __var_36:
        return __fn_109(), __var_12.push(__var_123), __var_3.body = __fn_125(), __var_12.pop(), __fn_120(__var_47), __var_3.test = tp(), __fn_119(), __fn_115(__var_3, 'DoWhileStatement');
      case __var_39:
        if (__fn_109(), __var_12.push(__var_123), __fn_120(__var_60), __var_5 === __var_63)
          return tc(__var_3, null);
        if (__var_5 === __var_46) {
          var __var_9 = __fn_113();
          if (__fn_109(), th(__var_9, !0), __fn_115(__var_9, 'VariableDeclaration'), 1 === __var_9.declarations.length && __fn_117(__var_54))
            return tl(__var_3, __var_9);
          return tc(__var_3, __var_9);
        }
        var __var_9 = tf(!1, !0);
        if (__fn_117(__var_54))
          return __fn_122(__var_9), tl(__var_3, __var_9);
        return tc(__var_3, __var_9);
      case __var_40:
        return __fn_109(), tb(__var_3, !0);
      case __var_41:
        return __fn_109(), __var_3.test = tp(), __var_3.consequent = __fn_125(), __var_3.alternate = __fn_117(__var_37) ? __fn_125() : null, __fn_115(__var_3, 'IfStatement');
      case __var_42:
        return __var_11 || __var_0.allowReturnOutsideFunction || __fn_23(__var_19, '\'return\' outside of function'), __fn_109(), __fn_117(__var_63) || __fn_118() ? __var_3.argument = null : (__var_3.argument = tf(), __fn_119()), __fn_115(__var_3, 'ReturnStatement');
      case __var_43:
        for (__fn_109(), __var_3.discriminant = tp(), __var_3.cases = [], __fn_120(__var_58), __var_12.push(__var_124); __var_5 !== __var_59;)
          if (__var_5 === __var_31 || __var_5 === __var_35) {
            var __var_10 = __var_5 === __var_31;
            __var_98 && __fn_115(__var_98, 'SwitchCase'), __var_3.cases.push(__var_98 = __fn_113()), __var_98.consequent = [], __fn_109(), __var_10 ? __var_98.test = tf() : (__var_1 && __fn_23(__var_21, 'Multiple default clauses'), __var_1 = !0, __var_98.test = null), __fn_120(__var_64);
          } else
            __var_98 || __fn_121(), __var_98.consequent.push(__fn_125());
        return __var_98 && __fn_115(__var_98, 'SwitchCase'), __fn_109(), __var_12.pop(), __fn_115(__var_3, 'SwitchStatement');
      case __var_44:
        return __fn_109(), __var_91.test(__var_15.slice(__var_22, __var_19)) && __fn_23(__var_22, 'Illegal newline after throw'), __var_3.argument = tf(), __fn_119(), __fn_115(__var_3, 'ThrowStatement');
      case __var_45:
        if (__fn_109(), __var_3.block = tu(), __var_3.handler = null, __var_5 === __var_32) {
          var __var_14 = __fn_113();
          __fn_109(), __fn_120(__var_60), __var_14.param = tI(), __var_13 && __var_85(__var_14.param.name) && __fn_23(__var_14.param.start, 'Binding ' + __var_14.param.name + ' in strict mode'), __fn_120(__var_61), __var_14.body = tu(), __var_3.handler = __fn_115(__var_14, 'CatchClause');
        }
        return __var_3.finalizer = __fn_117(__var_38) ? tu() : null, __var_3.handler || __var_3.finalizer || __fn_23(__var_3.start, 'Missing catch or finally clause'), __fn_115(__var_3, 'TryStatement');
      case __var_46:
        return __fn_109(), th(__var_3), __fn_119(), __fn_115(__var_3, 'VariableDeclaration');
      case __var_47:
        return __fn_109(), __var_3.test = tp(), __var_12.push(__var_123), __var_3.body = __fn_125(), __var_12.pop(), __fn_115(__var_3, 'WhileStatement');
      case __var_48:
        return __var_13 && __fn_23(__var_19, '\'with\' in strict mode'), __fn_109(), __var_3.object = tp(), __var_3.body = __fn_125(), __fn_115(__var_3, 'WithStatement');
      case __var_58:
        return tu();
      case __var_63:
        return __fn_109(), __fn_115(__var_3, 'EmptyStatement');
      default:
        var __var_16 = __var_6,
          __var_17 = tf();
        if (!(__var_2 === __var_28 && 'Identifier' === __var_17.type && __fn_117(__var_64)))
          return __var_3.expression = __var_17, __fn_119(), __fn_115(__var_3, 'ExpressionStatement');
        for (var __var_7 = 0; __var_7 < __var_12.length; ++__var_7)
          __var_12[__var_7].name === __var_16 && __fn_23(__var_17.start, 'Label \'' + __var_16 + '\' is already declared');
        var __var_18 = __var_5.isLoop ? 'loop' : __var_5 === __var_43 ? 'switch' : null;
        return __var_12.push({
          name: __var_16,
          kind: __var_18
        }), __var_3.body = __fn_125(), __var_12.pop(), __var_3.label = __var_17, __fn_115(__var_3, 'LabeledStatement');
    }
  }

  function __fn_126() {
    __fn_120(__var_60);
    var __var_98 = tf();
    return __fn_120(__var_61), __var_98;
  }

  function __fn_127(__var_98) {
    var __var_0, __var_1 = __fn_113(),
      __var_2 = !0,
      __var_3 = !1;
    for (__var_1.body = [], __fn_120(__var_58); !__fn_117(__var_59);) {
      var __var_4 = __fn_125();
      __var_1.body.push(__var_4), __var_2 && __var_98 && __fn_116(__var_4) && (__var_0 = __var_3, __fn_110(__var_3 = !0)), __var_2 = !1;
    }
    return __var_3 && !__var_0 && __fn_110(!1), __fn_115(__var_1, 'BlockStatement');
  }

  function __fn_128(__var_98, __var_0) {
    return __var_98.init = __var_0, __fn_120(__var_63), __var_98.test = __var_5 === __var_63 ? null : tf(), __fn_120(__var_63), __var_98.update = __var_5 === __var_61 ? null : tf(), __fn_120(__var_61), __var_98.body = __fn_125(), __var_12.pop(), __fn_115(__var_98, 'ForStatement');
  }

  function __fn_129(__var_98, __var_0) {
    return __var_98.left = __var_0, __var_98.right = tf(), __fn_120(__var_61), __var_98.body = __fn_125(), __var_12.pop(), __fn_115(__var_98, 'ForInStatement');
  }

  function __fn_130(__var_98, __var_0) {
    for (__var_98.declarations = [], __var_98.kind = 'var';;) {
      var __var_1 = __fn_113();
      if (__var_1.id = tI(), __var_13 && __var_85(__var_1.id.name) && __fn_23(__var_1.id.start, 'Binding ' + __var_1.id.name + ' in strict mode'), __var_1.init = __fn_117(__var_68) ? tf(!0, __var_0) : null, __var_98.declarations.push(__fn_115(__var_1, 'VariableDeclarator')), !__fn_117(__var_62))
        break;
    }
  }

  function __fn_131(__var_98, __var_0) {
    var __var_1 = td(__var_0);
    if (!__var_98 && __var_5 === __var_62) {
      var __var_2 = __fn_114(__var_1);
      for (__var_2.expressions = [__var_1]; __fn_117(__var_62);)
        __var_2.expressions.push(td(__var_0));
      return __fn_115(__var_2, 'SequenceExpression');
    }
    return __var_1;
  }

  function __fn_132(__var_98) {
    var __var_0 = function __var_98(__var_0) {
      var __var_1, __var_2 = (__var_1 = __var_0, function __var_98(__var_0, __var_1, __var_2) {
        var __var_3 = __var_5.binop;
        if (null !== __var_3 && (!__var_2 || __var_5 !== __var_54) && __var_3 > __var_1) {
          var __var_4 = __fn_114(__var_0);
          __var_4.left = __var_0, __var_4.operator = __var_6;
          var __var_7 = __var_5;
          __fn_109(), __var_4.right = __var_98(tE(), __var_3, __var_2);
          var __var_8 = __fn_115(__var_4, __var_7 === __var_72 || __var_7 === __var_73 ? 'LogicalExpression' : 'BinaryExpression');
          return __var_98(__var_8, __var_1, __var_2);
        }
        return __var_0;
      }(tE(), -1, __var_1));
      if (__fn_117(__var_66)) {
        var __var_3 = __fn_114(__var_2);
        return __var_3.test = __var_2, __var_3.consequent = __fn_131(!0), __fn_120(__var_64), __var_3.alternate = __fn_131(!0, __var_0), __fn_115(__var_3, 'ConditionalExpression');
      }
      return __var_2;
    }(__var_98);
    if (__var_5.isAssign) {
      var __var_1 = __fn_114(__var_0);
      return __var_1.operator = __var_6, __var_1.left = __var_0, __fn_109(), __var_1.right = __fn_132(__var_98), __fn_122(__var_0), __fn_115(__var_1, 'AssignmentExpression');
    }
    return __var_0;
  }

  function __fn_133() {
    if (__var_5.prefix) {
      var __var_98 = __fn_113(),
        __var_0 = __var_5.isUpdate;
      return __var_98.operator = __var_6, __var_98.prefix = !0, __var_7 = !0, __fn_109(), __var_98.argument = __fn_133(), __var_0 ? __fn_122(__var_98.argument) : __var_13 && 'delete' === __var_98.operator && 'Identifier' === __var_98.argument.type && __fn_23(__var_98.start, 'Deleting local variable in strict mode'), __fn_115(__var_98, __var_0 ? 'UpdateExpression' : 'UnaryExpression');
    }
    for (var __var_1 = t$(ty()); __var_5.postfix && !__fn_118();) {
      var __var_98 = __fn_114(__var_1);
      __var_98.operator = __var_6, __var_98.prefix = !1, __var_98.argument = __var_1, __fn_122(__var_1), __fn_109(), __var_1 = __fn_115(__var_98, 'UpdateExpression');
    }
    return __var_1;
  }

  function __fn_134(__var_98, __var_0) {
    var __var_1;
    return __fn_117(__var_65) ? ((__var_1 = __fn_114(__var_98)).object = __var_98, __var_1.property = tI(!0), __var_1.computed = !1, __fn_134(__fn_115(__var_1, 'MemberExpression'), __var_0)) : __fn_117(__var_56) ? ((__var_1 = __fn_114(__var_98)).object = __var_98, __var_1.property = __fn_131(), __var_1.computed = !0, __fn_120(__var_57), __fn_134(__fn_115(__var_1, 'MemberExpression'), __var_0)) : !__var_0 && __fn_117(__var_60) ? ((__var_1 = __fn_114(__var_98)).callee = __var_98, __var_1.arguments = tR(__var_61, !1), __fn_134(__fn_115(__var_1, 'CallExpression'), __var_0)) : __var_98;
  }

  function __fn_135() {
    switch (__var_5) {
      case __var_50:
        return __var_98 = __fn_113(), __fn_109(), __fn_115(__var_98, 'ThisExpression');
      case __var_28:
        return tI();
      case __var_25:
      case __var_27:
      case __var_26:
        return (__var_98 = __fn_113()).value = __var_6, __var_98.raw = __var_15.slice(__var_19, __var_20), __fn_109(), __fn_115(__var_98, 'Literal');
      case __var_51:
      case __var_52:
      case __var_53:
        return (__var_98 = __fn_113()).value = __var_5.atomValue, __var_98.raw = __var_5.keyword, __fn_109(), __fn_115(__var_98, 'Literal');
      case __var_60:
        var __var_98, __var_1, __var_2 = __var_3,
          __var_7 = __var_19;
        __fn_109();
        var __var_8 = __fn_131();
        return __var_8.start = __var_7, __var_8.end = __var_20, __var_0.locations && (__var_8.loc.start = __var_2, __var_8.loc.end = __var_4), __var_0.ranges && (__var_8.range = [
          __var_7,
          __var_20
        ]), __fn_120(__var_61), __var_8;
      case __var_56:
        return __var_98 = __fn_113(), __fn_109(), __var_98.elements = tR(__var_57, !0, !0), __fn_115(__var_98, 'ArrayExpression');
      case __var_58:
        return function __var_98() {
          var __var_1 = __fn_113(),
            __var_2 = !0,
            __var_3 = !1;
          for (__var_1.properties = [], __fn_109(); !__fn_117(__var_59);) {
            if (__var_2)
              __var_2 = !1;
            else if (__fn_120(__var_62), __var_0.allowTrailingCommas && __fn_117(__var_59))
              break;
            var __var_4, __var_6 = {
                key: tv()
              },
              __var_7 = !1;
            if (__fn_117(__var_64) ? (__var_6.value = __fn_131(!0), __var_4 = __var_6.kind = 'init') : 'Identifier' === __var_6.key.type && ('get' === __var_6.key.name || 'set' === __var_6.key.name) ? (__var_7 = __var_3 = !0, __var_4 = __var_6.kind = __var_6.key.name, __var_6.key = tv(), __var_5 !== __var_60 && __fn_121(), __var_6.value = tb(__fn_113(), !1)) : __fn_121(), 'Identifier' === __var_6.key.type && (__var_13 || __var_3))
              for (var __var_8 = 0; __var_8 < __var_1.properties.length; ++__var_8) {
                var __var_9 = __var_1.properties[__var_8];
                if (__var_9.key.name === __var_6.key.name) {
                  var __var_10 = __var_4 === __var_9.kind || __var_7 && 'init' === __var_9.kind || 'init' === __var_4 && ('get' === __var_9.kind || 'set' === __var_9.kind);
                  __var_10 && !__var_13 && 'init' === __var_4 && 'init' === __var_9.kind && (__var_10 = !1), __var_10 && __fn_23(__var_6.key.start, 'Redefinition of property');
                }
              }
            __var_1.properties.push(__var_6);
          }
          return __fn_115(__var_1, 'ObjectExpression');
        }();
      case __var_40:
        return __var_98 = __fn_113(), __fn_109(), tb(__var_98, !1);
      case __var_49:
        return __var_1 = __fn_113(), __fn_109(), __var_1.callee = __fn_134(__fn_135(), !0), __var_1.arguments = __fn_117(__var_60) ? tR(__var_61, !1) : __var_24, __fn_115(__var_1, 'NewExpression');
    }
    __fn_121();
  }

  function __fn_136() {
    return __var_5 === __var_25 || __var_5 === __var_27 ? __fn_135() : tI(!0);
  }

  function __fn_137(__var_98, __var_0) {
    __var_5 === __var_28 ? __var_98.id = tI() : __var_0 ? __fn_121() : __var_98.id = null, __var_98.params = [];
    var __var_1 = !0;
    for (__fn_120(__var_60); !__fn_117(__var_61);)
      __var_1 ? __var_1 = !1 : __fn_120(__var_62), __var_98.params.push(tI());
    var __var_2 = __var_11,
      __var_3 = __var_12;
    if (__var_11 = !0, __var_12 = [], __var_98.body = __fn_127(!0), __var_11 = __var_2, __var_12 = __var_3, __var_13 || __var_98.body.body.length && __fn_116(__var_98.body.body[0]))
      for (var __var_4 = __var_98.id ? -1 : 0; __var_4 < __var_98.params.length; ++__var_4) {
        var __var_6 = __var_4 < 0 ? __var_98.id : __var_98.params[__var_4];
        if ((__var_84(__var_6.name) || __var_85(__var_6.name)) && __fn_23(__var_6.start, 'Defining \'' + __var_6.name + '\' in strict mode'), __var_4 >= 0)
          for (var __var_7 = 0; __var_7 < __var_4; ++__var_7)
            __var_6.name === __var_98.params[__var_7].name && __fn_23(__var_6.start, 'Argument name clash in strict mode');
      }
    return __fn_115(__var_98, __var_0 ? 'FunctionDeclaration' : 'FunctionExpression');
  }

  function __fn_138(__var_98, __var_1, __var_2) {
    for (var __var_3 = [], __var_4 = !0; !__fn_117(__var_98);) {
      if (__var_4)
        __var_4 = !1;
      else if (__fn_120(__var_62), __var_1 && __var_0.allowTrailingCommas && __fn_117(__var_98))
        break;
      __var_3.push(__var_2 && __var_5 === __var_62 ? null : __fn_131(!0));
    }
    return __var_3;
  }

  function __fn_139(__var_98) {
    var __var_1 = __fn_113();
    return __var_98 && 'everywhere' === __var_0.forbidReserved && (__var_98 = !1), __var_5 === __var_28 ? (!__var_98 && (__var_0.forbidReserved && __var_83(__var_6) || __var_13 && __var_84(__var_6)) && -1 === __var_15.slice(__var_19, __var_20).indexOf('\\') && __fn_23(__var_19, 'The keyword \'' + __var_6 + '\' is reserved'), __var_1.name = __var_6) : __var_98 && __var_5.keyword ? __var_1.name = __var_5.keyword : __fn_121(), __var_7 = !1, __fn_109(), __fn_115(__var_1, 'Identifier');
  }
});
var __var_140 = function(__var_98, __var_0) {
  'string' == typeof __var_98 && (__var_98 = this.parse_(__var_98, 'code'));
  var __var_1, __var_2 = __var_98.constructor;
  this.newNode = function() {
    return new __var_2({
      options: {}
    });
  };
  var __var_3 = this.newNode();
  for (var __var_4 in __var_98)
    __var_3[__var_4] = 'body' === __var_4 ? __var_98[__var_4].slice() : __var_98[__var_4];
  this.ast = __var_3, this.tasks = [], this.initFunc_ = __var_0, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var __var_5 = /^step([A-Z]\w*)$/;
  for (var __var_6 in this)
    'function' == typeof this[__var_6] && (__var_1 = __var_6.match(__var_5)) && (this.stepFunctions_[__var_1[1]] = this[__var_6].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join('\n'), 'polyfills'), this.polyfills_ = void 0, __var_140.stripLocations_(this.ast, void 0, void 0);
  var __var_7 = new __var_140.State(this.ast, this.globalScope);
  __var_7.done = !1, this.stateStack = [__var_7], this.run(), this.value = void 0, this.ast = __var_3, (__var_7 = new __var_140.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = __var_7;
};
__var_140.Completion = {
  NORMAL: 0,
  BREAK: 1,
  CONTINUE: 2,
  RETURN: 3,
  THROW: 4
}, __var_140.Status = {
  DONE: 0,
  STEP: 1,
  TASK: 2,
  ASYNC: 3
}, __var_140.PARSE_OPTIONS = {
  locations: !0,
  ecmaVersion: 5
}, __var_140.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, __var_140.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, __var_140.VARIABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, __var_140.STEP_ERROR = {
  STEP_ERROR: !0
}, __var_140.SCOPE_REFERENCE = {
  SCOPE_REFERENCE: !0
}, __var_140.VALUE_IN_DESCRIPTOR = {
  VALUE_IN_DESCRIPTOR: !0
}, __var_140.REGEXP_TIMEOUT = {
  REGEXP_TIMEOUT: !0
}, __var_140.toStringCycles_ = [], __var_140.vm = null, __var_140.currentInterpreter_ = null, __var_140.nativeGlobal = 'undefined' == typeof globalThis ? this || window : globalThis, __var_140.WORKER_CODE = [
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
], __var_140.legalArrayLength = function(__var_98) {
  var __var_0 = __var_98 >>> 0;
  return __var_0 === Number(__var_98) ? __var_0 : NaN;
}, __var_140.legalArrayIndex = function(__var_98) {
  var __var_0 = __var_98 >>> 0;
  return String(__var_0) === String(__var_98) && 4294967295 !== __var_0 ? __var_0 : NaN;
}, __var_140.stripLocations_ = function(__var_98, __var_0, __var_1) {
  for (var __var_2 in (__var_0 ? __var_98.start = __var_0 : delete __var_98.start, __var_1 ? __var_98.end = __var_1 : delete __var_98.end, __var_98))
    if (__var_98[__var_2] !== __var_98.loc && __var_98.hasOwnProperty(__var_2)) {
      var __var_3 = __var_98[__var_2];
      __var_3 && 'object' == typeof __var_3 && __var_140.stripLocations_(__var_3, __var_0, __var_1);
    }
}, __var_140.prototype.REGEXP_MODE = 2, __var_140.prototype.REGEXP_THREAD_TIMEOUT = 1000, __var_140.prototype.POLYFILL_TIMEOUT = 1000, __var_140.prototype.getterStep_ = !1, __var_140.prototype.setterStep_ = !1, __var_140.prototype.appendCodeNumber_ = 0, __var_140.prototype.taskCodeNumber_ = 0, __var_140.prototype.parse_ = function(__var_98, __var_0) {
  var __var_1 = {};
  for (var __var_2 in __var_140.PARSE_OPTIONS)
    __var_1[__var_2] = __var_140.PARSE_OPTIONS[__var_2];
  return __var_1.sourceFile = __var_0, __var_140.nativeGlobal.acorn.parse(__var_98, __var_1);
}, __var_140.prototype.appendCode = function(__var_98) {
  var __var_0 = this.stateStack[0];
  if (!__var_0 || 'Program' !== __var_0.node.type)
    throw Error('Expecting original AST to start with a Program node');
  if ('string' == typeof __var_98 && (__var_98 = this.parse_(__var_98, 'appendCode' + this.appendCodeNumber_++)), !__var_98 || 'Program' !== __var_98.type)
    throw Error('Expecting new AST to start with a Program node');
  this.populateScope_(__var_98, __var_0.scope), Array.prototype.push.apply(__var_0.node.body, __var_98.body), __var_0.node.body.variableCache_ = null, __var_0.done = !1;
}, __var_140.prototype.step = function() {
  var __var_98, __var_0 = this.stateStack;
  do {
    var __var_1 = __var_0[__var_0.length - 1];
    if (this.paused_)
      break;
    if (!__var_1 || 'Program' === __var_1.node.type && __var_1.done) {
      if (!this.tasks.length)
        return !1;
      if (!(__var_1 = this.nextTask_()))
        break;
    }
    var __var_2 = __var_1.node,
      __var_3 = __var_140.currentInterpreter_;
    __var_140.currentInterpreter_ = this;
    try {
      var __var_4 = this.stepFunctions_[__var_2.type](__var_0, __var_1, __var_2);
    } catch (__var_5) {
      if (__var_5 !== __var_140.STEP_ERROR)
        throw this.value !== __var_5 && (this.value = void 0), __var_5;
    } finally {
      __var_140.currentInterpreter_ = __var_3;
    }
    if (__var_4 && __var_0.push(__var_4), this.getterStep_)
      throw this.value = void 0, Error('Getter not supported in this context');
    if (this.setterStep_)
      throw this.value = void 0, Error('Setter not supported in this context');
    __var_98 || __var_2.end || (__var_98 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!__var_2.end && __var_98 > Date.now());
  return !0;
}, __var_140.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, __var_140.prototype.getStatus = function() {
  if (this.paused_)
    return __var_140.Status.ASYNC;
  var __var_98 = this.stateStack,
    __var_0 = __var_98[__var_98.length - 1];
  if (__var_0 && ('Program' !== __var_0.node.type || !__var_0.done))
    return __var_140.Status.STEP;
  var __var_1 = this.tasks[0];
  return __var_1 ? __var_1.time > Date.now() ? __var_140.Status.TASK : __var_140.Status.STEP : (0, __var_140.Status.DONE);
}, __var_140.prototype.initGlobal = function(__var_98) {
  this.setProperty(__var_98, 'NaN', NaN, __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'Infinity', 1 / 0, __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'undefined', void 0, __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'window', __var_98, __var_140.READONLY_DESCRIPTOR), this.setProperty(__var_98, 'this', __var_98, __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'self', __var_98), this.OBJECT_PROTO = new __var_140.Object(null), this.FUNCTION_PROTO = new __var_140.Object(this.OBJECT_PROTO), this.initFunction(__var_98), this.initObject(__var_98), __var_98.proto = this.OBJECT_PROTO, this.setProperty(__var_98, 'constructor', this.OBJECT, __var_140.NONENUMERABLE_DESCRIPTOR), this.initArray(__var_98), this.initString(__var_98), this.initBoolean(__var_98), this.initNumber(__var_98), this.initDate(__var_98), this.initRegExp(__var_98), this.initError(__var_98), this.initMath(__var_98), this.initJSON(__var_98);
  var __var_0, __var_1 = this,
    __var_2 = this.createNativeFunction(function(__var_98) {
      throw EvalError('Can\'t happen');
    }, !1);
  __var_2.eval = !0, this.setProperty(__var_98, 'eval', __var_2, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'parseInt', this.createNativeFunction(parseInt, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'parseFloat', this.createNativeFunction(parseFloat, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'isNaN', this.createNativeFunction(isNaN, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'isFinite', this.createNativeFunction(isFinite, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_3 = [
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
    ], __var_4 = 0; __var_4 < __var_3.length; __var_4++)
    __var_0 = function(__var_98) {
      return function(__var_0) {
        try {
          return __var_98(__var_0);
        } catch (__var_2) {
          __var_1.throwException(__var_1.URI_ERROR, __var_2.message);
        }
      };
    }(__var_3[__var_4][0]), this.setProperty(__var_98, __var_3[__var_4][1], this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
  __var_0 = function __var_98(__var_0) {
    return __var_1.createTask_(!1, arguments);
  }, this.setProperty(__var_98, 'setTimeout', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return __var_1.createTask_(!0, arguments);
  }, this.setProperty(__var_98, 'setInterval', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    __var_1.deleteTask_(__var_0);
  }, this.setProperty(__var_98, 'clearTimeout', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    __var_1.deleteTask_(__var_0);
  }, this.setProperty(__var_98, 'clearInterval', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, __var_98);
}, __var_140.prototype.functionCodeNumber_ = 0, __var_140.prototype.initFunction = function(__var_98) {
  var __var_0, __var_1 = this,
    __var_2 = /^[A-Za-z_$][\w$]*$/;
  __var_0 = function __var_98(__var_0) {
    if (arguments.length)
      var __var_3 = String(arguments[arguments.length - 1]);
    else
      var __var_3 = '';
    var __var_4 = Array.prototype.slice.call(arguments, 0, -1).join(',').trim();
    if (__var_4) {
      for (var __var_5 = __var_4.split(/\s*,\s*/), __var_6 = 0; __var_6 < __var_5.length; __var_6++) {
        var __var_7 = __var_5[__var_6];
        __var_2.test(__var_7) || __var_1.throwException(__var_1.SYNTAX_ERROR, 'Invalid function argument: ' + __var_7);
      }
      __var_4 = __var_5.join(', ');
    }
    try {
      var __var_8 = __var_1.parse_('(function(' + __var_4 + ') {' + __var_3 + '})', 'function' + __var_1.functionCodeNumber_++);
    } catch (__var_9) {
      __var_1.throwException(__var_1.SYNTAX_ERROR, 'Invalid code: ' + __var_9.message);
    }
    1 !== __var_8.body.length && __var_1.throwException(__var_1.SYNTAX_ERROR, 'Invalid code in function body');
    var __var_10 = __var_8.body[0].expression;
    return __var_1.createFunction(__var_10, __var_1.globalScope, 'anonymous');
  }, this.FUNCTION = this.createNativeFunction(__var_0, !0), this.setProperty(__var_98, 'Function', this.FUNCTION, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, 'prototype', this.FUNCTION_PROTO, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, 'constructor', this.FUNCTION, __var_140.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, 'length', 0, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = 'Function', __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    var __var_4 = __var_1.stateStack[__var_1.stateStack.length - 1];
    __var_4.func_ = __var_0, __var_4.funcThis_ = __var_2, __var_4.arguments_ = [], null != __var_3 && (__var_3 instanceof __var_140.Object ? __var_4.arguments_ = Array.from(__var_3.properties) : __var_1.throwException(__var_1.TYPE_ERROR, 'CreateListFromArrayLike called on non-object')), __var_4.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'apply', __var_0), this.polyfills_.push('(function() {', 'var apply_ = Function.prototype.apply;', 'Function.prototype.apply = function apply(thisArg, args) {', 'var a2 = [];', 'for (var i = 0; i < args.length; i++) {', 'a2[i] = args[i];', '}', 'return apply_(this, thisArg, a2);', '};', '})();'), __var_0 = function __var_98(__var_0) {
    var __var_2 = __var_1.stateStack[__var_1.stateStack.length - 1];
    __var_2.func_ = this, __var_2.funcThis_ = __var_0, __var_2.arguments_ = [];
    for (var __var_3 = 1; __var_3 < arguments.length; __var_3++)
      __var_2.arguments_.push(arguments[__var_3]);
    __var_2.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'call', __var_0), this.polyfills_.push('Object.defineProperty(Function.prototype, \'bind\',', '{configurable: true, writable: true, value:', 'function bind(oThis) {', 'if (typeof this !== \'function\') {', 'throw TypeError(\'What is trying to be bound is not callable\');', '}', 'var aArgs   = Array.prototype.slice.call(arguments, 1),', 'fToBind = this,', 'fNOP    = function() {},', 'fBound  = function() {', 'return fToBind.apply(this instanceof fNOP', '? this', ': oThis,', 'aArgs.concat(Array.prototype.slice.call(arguments)));', '};', 'if (this.prototype) {', 'fNOP.prototype = this.prototype;', '}', 'fBound.prototype = new fNOP();', 'return fBound;', '}', '});', ''), __var_0 = function __var_98() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'toString', __var_0), this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'valueOf', __var_0), this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.initObject = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0) {
    if (null == __var_0)
      return __var_1.calledWithNew() ? this : __var_1.createObjectProto(__var_1.OBJECT_PROTO);
    if (!(__var_0 instanceof __var_140.Object)) {
      var __var_2 = __var_1.createObjectProto(__var_1.getPrototype(__var_0));
      return __var_2.data = __var_0, __var_2;
    }
    return __var_0;
  }, this.OBJECT = this.createNativeFunction(__var_0, !0), this.setProperty(this.OBJECT, 'prototype', this.OBJECT_PROTO, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, 'constructor', this.OBJECT, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'Object', this.OBJECT, __var_140.NONENUMERABLE_DESCRIPTOR);
  var __var_2 = function(__var_98) {
    null == __var_98 && __var_1.throwException(__var_1.TYPE_ERROR, 'Cannot convert \'' + __var_98 + '\' to object');
  };
  __var_0 = function __var_98(__var_0) {
    __var_2(__var_0);
    var __var_3 = __var_0 instanceof __var_140.Object ? __var_0.properties : __var_0;
    return __var_1.nativeToPseudo(Object.getOwnPropertyNames(__var_3));
  }, this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return __var_2(__var_0), __var_0 instanceof __var_140.Object && (__var_0 = __var_0.properties), __var_1.nativeToPseudo(Object.keys(__var_0));
  }, this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return null === __var_0 ? __var_1.createObjectProto(null) : (__var_0 instanceof __var_140.Object || __var_1.throwException(__var_1.TYPE_ERROR, 'Object prototype may only be an Object or null, not ' + __var_0), __var_1.createObjectProto(__var_0));
  }, this.setProperty(this.OBJECT, 'create', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var create_ = Object.create;', 'Object.create = function create(proto, props) {', 'var obj = create_(proto);', 'props && Object.defineProperties(obj, props);', 'return obj;', '};', '})();', ''), __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    return __var_2 = String(__var_2), __var_0 instanceof __var_140.Object || __var_1.throwException(__var_1.TYPE_ERROR, 'Object.defineProperty called on non-object: ' + __var_0), __var_3 instanceof __var_140.Object || __var_1.throwException(__var_1.TYPE_ERROR, 'Property description must be an object'), !__var_0.preventExtensions || __var_2 in __var_0.properties || __var_1.throwException(__var_1.TYPE_ERROR, 'Can\'t define property \'' + __var_2 + '\', object is not extensible'), __var_1.setProperty(__var_0, __var_2, __var_140.VALUE_IN_DESCRIPTOR, __var_3.properties), __var_0;
  }, this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var defineProperty_ = Object.defineProperty;', 'Object.defineProperty = function defineProperty(obj, prop, d1) {', 'var d2 = {};', 'if (\'configurable\' in d1) d2.configurable = d1.configurable;', 'if (\'enumerable\' in d1) d2.enumerable = d1.enumerable;', 'if (\'writable\' in d1) d2.writable = d1.writable;', 'if (\'value\' in d1) d2.value = d1.value;', 'if (\'get\' in d1) d2.get = d1.get;', 'if (\'set\' in d1) d2.set = d1.set;', 'return defineProperty_(obj, prop, d2);', '};', '})();', 'Object.defineProperty(Object, \'defineProperties\',', '{configurable: true, writable: true, value:', 'function defineProperties(obj, props) {', 'var keys = Object.keys(props);', 'for (var i = 0; i < keys.length; i++) {', 'Object.defineProperty(obj, keys[i], props[keys[i]]);', '}', 'return obj;', '}', '});', ''), __var_0 = function __var_98(__var_0, __var_2) {
    if (__var_0 instanceof __var_140.Object || __var_1.throwException(__var_1.TYPE_ERROR, 'Object.getOwnPropertyDescriptor called on non-object: ' + __var_0), (__var_2 = String(__var_2)) in __var_0.properties) {
      var __var_3 = Object.getOwnPropertyDescriptor(__var_0.properties, __var_2),
        __var_4 = __var_0.getter[__var_2],
        __var_5 = __var_0.setter[__var_2],
        __var_6 = __var_1.createObjectProto(__var_1.OBJECT_PROTO);
      return __var_4 || __var_5 ? (__var_1.setProperty(__var_6, 'get', __var_4), __var_1.setProperty(__var_6, 'set', __var_5)) : (__var_1.setProperty(__var_6, 'value', __var_3.value), __var_1.setProperty(__var_6, 'writable', __var_3.writable)), __var_1.setProperty(__var_6, 'configurable', __var_3.configurable), __var_1.setProperty(__var_6, 'enumerable', __var_3.enumerable), __var_6;
    }
  }, this.setProperty(this.OBJECT, 'getOwnPropertyDescriptor', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return __var_2(__var_0), __var_1.getPrototype(__var_0);
  }, this.setProperty(this.OBJECT, 'getPrototypeOf', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return Boolean(__var_0) && !__var_0.preventExtensions;
  }, this.setProperty(this.OBJECT, 'isExtensible', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return __var_0 instanceof __var_140.Object && (__var_0.preventExtensions = !0), __var_0;
  }, this.setProperty(this.OBJECT, 'preventExtensions', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, 'toString', __var_140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'toLocaleString', __var_140.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'valueOf', __var_140.Object.prototype.valueOf), __var_0 = function __var_98(__var_0) {
    return (__var_2(this), this instanceof __var_140.Object) ? String(__var_0) in this.properties : this.hasOwnProperty(__var_0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'hasOwnProperty', __var_0), __var_0 = function __var_98(__var_0) {
    return (__var_2(this), this instanceof __var_140.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, __var_0) : this.propertyIsEnumerable(__var_0);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'propertyIsEnumerable', __var_0), __var_0 = function __var_98(__var_0) {
    for (;;) {
      if (!(__var_0 = __var_1.getPrototype(__var_0)))
        return !1;
      if (__var_0 === this)
        return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, 'isPrototypeOf', __var_0);
}, __var_140.prototype.initArray = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0) {
    if (__var_1.calledWithNew())
      var __var_2 = this;
    else
      var __var_2 = __var_1.createArray();
    var __var_3 = arguments[0];
    if (1 === arguments.length && 'number' == typeof __var_3)
      isNaN(__var_140.legalArrayLength(__var_3)) && __var_1.throwException(__var_1.RANGE_ERROR, 'Invalid array length: ' + __var_3), __var_2.properties.length = __var_3;
    else {
      for (var __var_4 = 0; __var_4 < arguments.length; __var_4++)
        __var_2.properties[__var_4] = arguments[__var_4];
      __var_2.properties.length = __var_4;
    }
    return __var_2;
  }, this.ARRAY = this.createNativeFunction(__var_0, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(__var_98, 'Array', this.ARRAY, __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    return __var_0 && 'Array' === __var_0.class;
  }, this.setProperty(this.ARRAY, 'isArray', this.createNativeFunction(__var_0, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = 'Array', this.polyfills_.push('(function() {', 'function createArrayMethod_(name, func) {', 'Object.defineProperty(func, \'name\', {value: name});', 'Object.defineProperty(Array.prototype, name,', '{configurable: true, writable: true, value: func});', '}', 'createArrayMethod_(\'pop\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'len--;', 'var x = o[len];', 'delete o[len];', 'o.length = len;', 'return x;', '}', ');', 'createArrayMethod_(\'push\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'for (var i = 0; i < arguments.length; i++) {', 'o[len] = arguments[i];', 'len++;', '}', 'o.length = len;', 'return len;', '}', ');', 'createArrayMethod_(\'shift\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'var value = o[0];', 'for (var i = 0; i < len - 1; i++) {', 'if ((i + 1) in o) {', 'o[i] = o[i + 1];', '} else {', 'delete o[i];', '}', '}', 'delete o[i];', 'o.length = len - 1;', 'return value;', '}', ');', 'createArrayMethod_(\'unshift\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'len = 0;', '}', 'for (var i = len - 1; i >= 0; i--) {', 'if (i in o) {', 'o[i + arguments.length] = o[i];', '} else {', 'delete o[i + arguments.length];', '}', '}', 'for (var i = 0; i < arguments.length; i++) {', 'o[i] = arguments[i];', '}', 'return (o.length = len + arguments.length);', '}', ');', 'createArrayMethod_(\'reverse\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 2) {', 'return o;', '}', 'for (var i = 0; i < len / 2 - 0.5; i++) {', 'var x = o[i];', 'var hasX = i in o;', 'if ((len - i - 1) in o) {', 'o[i] = o[len - i - 1];', '} else {', 'delete o[i];', '}', 'if (hasX) {', 'o[len - i - 1] = x;', '} else {', 'delete o[len - i - 1];', '}', '}', 'return o;', '}', ');', 'createArrayMethod_(\'indexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var n = fromIndex | 0;', 'if (!len || n >= len) {', 'return -1;', '}', 'var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);', 'while (i < len) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i++;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'lastIndexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len) {', 'return -1;', '}', 'var n = len - 1;', 'if (arguments.length > 1) {', 'n = fromIndex | 0;', 'if (n) {', 'n = (n > 0 || -1) * Math.floor(Math.abs(n));', '}', '}', 'var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);', 'while (i >= 0) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i--;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'slice\',', 'function(start, end) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'start = (start >= 0) ? start : Math.max(0, len + start);', 'if (typeof end !== \'undefined\') {', 'if (end !== Infinity) {', 'end |= 0;', '}', 'if (end < 0) {', 'end = len + end;', '} else {', 'end = Math.min(end, len);', '}', '} else {', 'end = len;', '}', 'var size = end - start;', 'var cloned = new Array(size);', 'for (var i = 0; i < size; i++) {', 'if ((start + i) in o) {', 'cloned[i] = o[start + i];', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'splice\',', 'function(start, deleteCount, var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'if (start < 0) {', 'start = Math.max(len + start, 0);', '} else {', 'start = Math.min(start, len);', '}', 'if (arguments.length < 2) {', 'deleteCount = len - start;', '} else {', 'deleteCount |= 0;', 'deleteCount = Math.max(0, Math.min(deleteCount, len - start));', '}', 'var removed = [];', 'for (var i = start; i < start + deleteCount; i++) {', 'if (i in o) {', 'removed.push(o[i]);', '} else {', 'removed.length++;', '}', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = start + deleteCount; i < len - deleteCount; i++) {', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = len - deleteCount; i < len; i++) {', 'delete o[i];', '}', 'len -= deleteCount;', 'if (arguments.length > 2) {', 'var arl = arguments.length - 2;', 'for (var i = len - 1; i >= start; i--) {', 'if (i in o) {', 'o[i + arl] = o[i];', '} else {', 'delete o[i + arl];', '}', '}', 'len += arl;', 'for (var i = 2; i < arguments.length; i++) {', 'o[start + i - 2] = arguments[i];', '}', '}', 'o.length = len;', 'return removed;', '}', ');', 'createArrayMethod_(\'concat\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this);', 'var cloned = [];', 'for (var i = -1; i < arguments.length; i++) {', 'var value = (i === -1) ? o : arguments[i];', 'if (Array.isArray(value)) {', 'for (var j = 0, l = value.length; j < l; j++) {', 'if (j in value) {', 'cloned.push(value[j]);', '} else {', 'cloned.length++;', '}', '}', '} else {', 'cloned.push(value);', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'join\',', 'function(opt_separator) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var sep = typeof opt_separator === \'undefined\' ?', '\',\' : (\'\' + opt_separator);', 'var str = \'\';', 'for (var i = 0; i < len; i++) {', 'if (i && sep) str += sep;', 'str += (o[i] === null || o[i] === undefined) ? \'\' : o[i];', '}', 'return str;', '}', ');', 'createArrayMethod_(\'every\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o && !callback.call(t, o[k], k, o)) return false;', 'k++;', '}', 'return true;', '}', ');', 'createArrayMethod_(\'filter\',', 'function(callback, var_args) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var res = [];', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o) {', 'var val = o[i];', 'if (callback.call(thisArg, val, i, o)) res.push(val);', '}', '}', 'return res;', '}', ');', 'createArrayMethod_(\'forEach\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o) callback.call(t, o[k], k, o);', 'k++;', '}', '}', ');', 'createArrayMethod_(\'map\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'var a = new Array(len);', 'while (k < len) {', 'if (k in o) a[k] = callback.call(t, o[k], k, o);', 'k++;', '}', 'return a;', '}', ');', 'createArrayMethod_(\'reduce\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = 0, value;', 'if (arguments.length === 2) {', 'value = arguments[1];', '} else {', 'while (k < len && !(k in o)) k++;', 'if (k >= len) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k++];', '}', 'for (; k < len; k++) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'reduceRight\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = len - 1, value;', 'if (arguments.length >= 2) {', 'value = arguments[1];', '} else {', 'while (k >= 0 && !(k in o)) k--;', 'if (k < 0) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k--];', '}', 'for (; k >= 0; k--) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'some\',', 'function(callback /*, thisArg*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o && callback.call(thisArg, o[i], i, o)) return true;', '}', 'return false;', '}', ');', 'createArrayMethod_(\'sort\',', 'function(opt_comp) {', 'if (!this) throw TypeError();', 'if (typeof opt_comp !== \'function\') {', 'opt_comp = undefined;', '}', 'for (var i = 0; i < this.length; i++) {', 'var changes = 0;', 'for (var j = 0; j < this.length - i - 1; j++) {', 'if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :', '(String(this[j]) > String(this[j + 1]))) {', 'var swap = this[j];', 'var hasSwap = j in this;', 'if ((j + 1) in this) {', 'this[j] = this[j + 1];', '} else {', 'delete this[j];', '}', 'if (hasSwap) {', 'this[j + 1] = swap;', '} else {', 'delete this[j + 1];', '}', 'changes++;', '}', '}', 'if (!changes) break;', '}', 'return this;', '}', ');', 'createArrayMethod_(\'toLocaleString\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var out = [];', 'for (var i = 0; i < len; i++) {', 'out[i] = (o[i] === null || o[i] === undefined) ? \'\' : o[i].toLocaleString();', '}', 'return out.join(\',\');', '}', ');', '})();', '');
}, __var_140.prototype.initString = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0) {
    return (__var_0 = arguments.length ? __var_140.nativeGlobal.String(__var_0) : '', __var_1.calledWithNew()) ? (this.data = __var_0, this) : __var_0;
  }, this.STRING = this.createNativeFunction(__var_0, !0), this.setProperty(__var_98, 'String', this.STRING, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(String.fromCharCode, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_2 = [
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
    ], __var_3 = 0; __var_3 < __var_2.length; __var_3++)
    this.setNativeFunctionPrototype(this.STRING, __var_2[__var_3], String.prototype[__var_2[__var_3]]);
  __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    __var_2 = __var_1.pseudoToNative(__var_2), __var_3 = __var_1.pseudoToNative(__var_3);
    try {
      return String(this).localeCompare(__var_0, __var_2, __var_3);
    } catch (__var_4) {
      __var_1.throwException(__var_1.ERROR, 'localeCompare: ' + __var_4.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, 'localeCompare', __var_0), __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    var __var_4 = String(this);
    if (__var_2 = __var_2 ? Number(__var_2) : void 0, __var_1.isa(__var_0, __var_1.REGEXP) && (__var_0 = __var_0.data, __var_1.maybeThrowRegExp(__var_0, __var_3), 2 === __var_1.REGEXP_MODE)) {
      if (__var_140.vm) {
        var __var_5 = {
            string: __var_4,
            separator: __var_0,
            limit: __var_2
          },
          __var_6 = __var_1.vmCall('string.split(separator, limit)', __var_5, __var_0, __var_3);
        __var_6 !== __var_140.REGEXP_TIMEOUT && __var_3(__var_1.nativeToPseudo(__var_6));
      } else {
        var __var_7 = __var_1.createWorker(),
          __var_8 = __var_1.regExpTimeout(__var_0, __var_7, __var_3);
        __var_7.onmessage = function(__var_98) {
          clearTimeout(__var_8), __var_3(__var_1.nativeToPseudo(__var_98.data));
        }, __var_7.postMessage([
          'split',
          __var_4,
          __var_0,
          __var_2
        ]);
      }
      return;
    }
    var __var_6 = __var_4.split(__var_0, __var_2);
    __var_3(__var_1.nativeToPseudo(__var_6));
  }, this.setAsyncFunctionPrototype(this.STRING, 'split', __var_0), __var_0 = function __var_98(__var_0, __var_2) {
    var __var_3 = String(this);
    if (__var_0 = __var_1.isa(__var_0, __var_1.REGEXP) ? __var_0.data : RegExp(__var_0), __var_1.maybeThrowRegExp(__var_0, __var_2), 2 === __var_1.REGEXP_MODE) {
      if (__var_140.vm) {
        var __var_4 = {
            string: __var_3,
            regexp: __var_0
          },
          __var_5 = __var_1.vmCall('string.match(regexp)', __var_4, __var_0, __var_2);
        __var_5 !== __var_140.REGEXP_TIMEOUT && __var_2(__var_5 && __var_1.matchToPseudo_(__var_5));
      } else {
        var __var_6 = __var_1.createWorker(),
          __var_7 = __var_1.regExpTimeout(__var_0, __var_6, __var_2);
        __var_6.onmessage = function(__var_98) {
          clearTimeout(__var_7), __var_2(__var_98.data && __var_1.matchToPseudo_(__var_98.data));
        }, __var_6.postMessage([
          'match',
          __var_3,
          __var_0
        ]);
      }
      return;
    }
    var __var_5 = __var_3.match(__var_0);
    __var_2(__var_5 && __var_1.matchToPseudo_(__var_5));
  }, this.setAsyncFunctionPrototype(this.STRING, 'match', __var_0), __var_0 = function __var_98(__var_0, __var_2) {
    var __var_3 = String(this);
    if (__var_0 = __var_1.isa(__var_0, __var_1.REGEXP) ? __var_0.data : RegExp(__var_0), __var_1.maybeThrowRegExp(__var_0, __var_2), 2 === __var_1.REGEXP_MODE) {
      if (__var_140.vm) {
        var __var_4 = {
            string: __var_3,
            regexp: __var_0
          },
          __var_5 = __var_1.vmCall('string.search(regexp)', __var_4, __var_0, __var_2);
        __var_5 !== __var_140.REGEXP_TIMEOUT && __var_2(__var_5);
      } else {
        var __var_6 = __var_1.createWorker(),
          __var_7 = __var_1.regExpTimeout(__var_0, __var_6, __var_2);
        __var_6.onmessage = function(__var_98) {
          clearTimeout(__var_7), __var_2(__var_98.data);
        }, __var_6.postMessage([
          'search',
          __var_3,
          __var_0
        ]);
      }
      return;
    }
    __var_2(__var_3.search(__var_0));
  }, this.setAsyncFunctionPrototype(this.STRING, 'search', __var_0), __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    var __var_4 = String(this);
    if (__var_2 = String(__var_2), __var_1.isa(__var_0, __var_1.REGEXP) && (__var_0 = __var_0.data, __var_1.maybeThrowRegExp(__var_0, __var_3), 2 === __var_1.REGEXP_MODE)) {
      if (__var_140.vm) {
        var __var_5 = {
            string: __var_4,
            substr: __var_0,
            newSubstr: __var_2
          },
          __var_6 = __var_1.vmCall('string.replace(substr, newSubstr)', __var_5, __var_0, __var_3);
        __var_6 !== __var_140.REGEXP_TIMEOUT && __var_3(__var_6);
      } else {
        var __var_7 = __var_1.createWorker(),
          __var_8 = __var_1.regExpTimeout(__var_0, __var_7, __var_3);
        __var_7.onmessage = function(__var_98) {
          clearTimeout(__var_8), __var_3(__var_98.data);
        }, __var_7.postMessage([
          'replace',
          __var_4,
          __var_0,
          __var_2
        ]);
      }
      return;
    }
    __var_3(__var_4.replace(__var_0, __var_2));
  }, this.setAsyncFunctionPrototype(this.STRING, 'replace', __var_0), this.polyfills_.push('(function() {', 'var replace_ = String.prototype.replace;', 'String.prototype.replace = function replace(substr, newSubstr) {', 'if (typeof newSubstr !== \'function\') {', 'return replace_.call(this, substr, newSubstr);', '}', 'var str = this;', 'if (substr instanceof RegExp) {', 'var subs = [];', 'var m = substr.exec(str);', 'while (m) {', 'm.push(m.index, str);', 'var inject = newSubstr.apply(null, m);', 'subs.push([m.index, m[0].length, inject]);', 'm = substr.global ? substr.exec(str) : null;', '}', 'for (var i = subs.length - 1; i >= 0; i--) {', 'str = str.substring(0, subs[i][0]) + subs[i][2] + ', 'str.substring(subs[i][0] + subs[i][1]);', '}', '} else {', 'var i = str.indexOf(substr);', 'if (i !== -1) {', 'var inject = newSubstr(str.substr(i, substr.length), i, str);', 'str = str.substring(0, i) + inject + ', 'str.substring(i + substr.length);', '}', '}', 'return str;', '};', '})();', '');
}, __var_140.prototype.initBoolean = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0) {
    return (__var_0 = __var_140.nativeGlobal.Boolean(__var_0), __var_1.calledWithNew()) ? (this.data = __var_0, this) : __var_0;
  }, this.BOOLEAN = this.createNativeFunction(__var_0, !0), this.setProperty(__var_98, 'Boolean', this.BOOLEAN, __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.initNumber = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0) {
    return (__var_0 = arguments.length ? __var_140.nativeGlobal.Number(__var_0) : 0, __var_1.calledWithNew()) ? (this.data = __var_0, this) : __var_0;
  }, this.NUMBER = this.createNativeFunction(__var_0, !0), this.setProperty(__var_98, 'Number', this.NUMBER, __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_2 = [
      'MAX_VALUE',
      'MIN_VALUE',
      'NaN',
      'NEGATIVE_INFINITY',
      'POSITIVE_INFINITY'
    ], __var_3 = 0; __var_3 < __var_2.length; __var_3++)
    this.setProperty(this.NUMBER, __var_2[__var_3], Number[__var_2[__var_3]], __var_140.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  __var_0 = function __var_98(__var_0) {
    try {
      return Number(this).toExponential(__var_0);
    } catch (__var_2) {
      __var_1.throwException(__var_1.ERROR, __var_2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toExponential', __var_0), __var_0 = function __var_98(__var_0) {
    try {
      return Number(this).toFixed(__var_0);
    } catch (__var_2) {
      __var_1.throwException(__var_1.ERROR, __var_2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toFixed', __var_0), __var_0 = function __var_98(__var_0) {
    try {
      return Number(this).toPrecision(__var_0);
    } catch (__var_2) {
      __var_1.throwException(__var_1.ERROR, __var_2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toPrecision', __var_0), __var_0 = function __var_98(__var_0) {
    try {
      return Number(this).toString(__var_0);
    } catch (__var_2) {
      __var_1.throwException(__var_1.ERROR, __var_2.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toString', __var_0), __var_0 = function __var_98(__var_0, __var_2) {
    __var_0 = __var_0 ? __var_1.pseudoToNative(__var_0) : void 0, __var_2 = __var_2 ? __var_1.pseudoToNative(__var_2) : void 0;
    try {
      return Number(this).toLocaleString(__var_0, __var_2);
    } catch (__var_3) {
      __var_1.throwException(__var_1.ERROR, 'toLocaleString: ' + __var_3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toLocaleString', __var_0);
}, __var_140.prototype.initDate = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0, __var_2) {
    if (!__var_1.calledWithNew())
      return __var_140.nativeGlobal.Date();
    var __var_3 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(__var_140.nativeGlobal.Date, __var_3))(), this;
  }, this.DATE = this.createNativeFunction(__var_0, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(__var_98, 'Date', this.DATE, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'now', this.createNativeFunction(Date.now, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'parse', this.createNativeFunction(Date.parse, !1), __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'UTC', this.createNativeFunction(Date.UTC, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_2 = [
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
    ], __var_3 = 0; __var_3 < __var_2.length; __var_3++)
    __var_0 = function(__var_98) {
      return function(__var_0) {
        var __var_2 = this.data;
        __var_2 instanceof Date || __var_1.throwException(__var_1.TYPE_ERROR, __var_98 + ' not called on a Date');
        for (var __var_3 = [], __var_4 = 0; __var_4 < arguments.length; __var_4++)
          __var_3[__var_4] = __var_1.pseudoToNative(arguments[__var_4]);
        return __var_2[__var_98].apply(__var_2, __var_3);
      };
    }(__var_2[__var_3]), this.setNativeFunctionPrototype(this.DATE, __var_2[__var_3], __var_0);
  __var_0 = function __var_98() {
    try {
      return this.data.toISOString();
    } catch (__var_0) {
      __var_1.throwException(__var_1.RANGE_ERROR, 'toISOString: ' + __var_0.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, 'toISOString', __var_0);
}, __var_140.prototype.initRegExp = function(__var_98) {
  var __var_0, __var_1 = this;
  __var_0 = function __var_98(__var_0, __var_2) {
    if (__var_1.calledWithNew())
      var __var_3 = this;
    else {
      if (void 0 === __var_2 && __var_1.isa(__var_0, __var_1.REGEXP))
        return __var_0;
      var __var_3 = __var_1.createObjectProto(__var_1.REGEXP_PROTO);
    }
    __var_0 = void 0 === __var_0 ? '' : String(__var_0), __var_2 = __var_2 ? String(__var_2) : '', /^[gmi]*$/.test(__var_2) || __var_1.throwException(__var_1.SYNTAX_ERROR, 'Invalid regexp flag: ' + __var_2);
    try {
      var __var_4 = new __var_140.nativeGlobal.RegExp(__var_0, __var_2);
    } catch (__var_5) {
      __var_1.throwException(__var_1.SYNTAX_ERROR, __var_5.message);
    }
    return __var_1.populateRegExp(__var_3, __var_4), __var_3;
  }, this.REGEXP = this.createNativeFunction(__var_0, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(__var_98, 'RegExp', this.REGEXP, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'global', void 0, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'ignoreCase', void 0, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'multiline', void 0, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'source', '(?:)', __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('Object.defineProperty(RegExp.prototype, \'test\',', '{configurable: true, writable: true, value:', 'function test(str) {', 'return !!this.exec(str);', '}', '});'), __var_0 = function __var_98(__var_0, __var_2) {
    var __var_3 = this.data;
    if (__var_0 = String(__var_0), __var_3.lastIndex = Number(__var_1.getProperty(this, 'lastIndex')), __var_1.maybeThrowRegExp(__var_3, __var_2), 2 === __var_1.REGEXP_MODE) {
      if (__var_140.vm) {
        var __var_4 = {
            string: __var_0,
            regexp: __var_3
          },
          __var_5 = __var_1.vmCall('regexp.exec(string)', __var_4, __var_3, __var_2);
        __var_5 !== __var_140.REGEXP_TIMEOUT && (__var_1.setProperty(this, 'lastIndex', __var_3.lastIndex), __var_2(__var_1.matchToPseudo_(__var_5)));
      } else {
        var __var_6 = __var_1.createWorker(),
          __var_7 = __var_1.regExpTimeout(__var_3, __var_6, __var_2),
          __var_8 = this;
        __var_6.onmessage = function(__var_98) {
          clearTimeout(__var_7), __var_1.setProperty(__var_8, 'lastIndex', __var_98.data[1]), __var_2(__var_1.matchToPseudo_(__var_98.data[0]));
        }, __var_6.postMessage([
          'exec',
          __var_3,
          __var_3.lastIndex,
          __var_0
        ]);
      }
      return;
    }
    var __var_5 = __var_3.exec(__var_0);
    __var_1.setProperty(this, 'lastIndex', __var_3.lastIndex), __var_2(__var_1.matchToPseudo_(__var_5));
  }, this.setAsyncFunctionPrototype(this.REGEXP, 'exec', __var_0);
}, __var_140.prototype.matchToPseudo_ = function(__var_98) {
  if (__var_98) {
    for (var __var_0 = Object.getOwnPropertyNames(__var_98), __var_1 = 0; __var_1 < __var_0.length; __var_1++) {
      var __var_2 = __var_0[__var_1];
      isNaN(Number(__var_2)) && 'length' !== __var_2 && 'input' !== __var_2 && 'index' !== __var_2 && delete __var_98[__var_2];
    }
    return this.nativeToPseudo(__var_98);
  }
  return null;
}, __var_140.prototype.initError = function(__var_98) {
  var __var_0 = this;
  this.ERROR = this.createNativeFunction(function __var_98(__var_1) {
    if (__var_0.calledWithNew())
      var __var_2 = this;
    else
      var __var_2 = __var_0.createObject(__var_0.ERROR);
    return __var_0.populateError(__var_2, __var_1), __var_2;
  }, !0), this.setProperty(__var_98, 'Error', this.ERROR, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'message', '', __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'name', 'Error', __var_140.NONENUMERABLE_DESCRIPTOR);
  var __var_1 = function(__var_1) {
    var __var_2 = __var_0.createNativeFunction(function(__var_98) {
      if (__var_0.calledWithNew())
        var __var_1 = this;
      else
        var __var_1 = __var_0.createObject(__var_2);
      return __var_0.populateError(__var_1, __var_98), __var_1;
    }, !0);
    return __var_0.setProperty(__var_2, 'prototype', __var_0.createObject(__var_0.ERROR), __var_140.NONENUMERABLE_DESCRIPTOR), __var_0.setProperty(__var_2.properties.prototype, 'name', __var_1, __var_140.NONENUMERABLE_DESCRIPTOR), __var_0.setProperty(__var_98, __var_1, __var_2, __var_140.NONENUMERABLE_DESCRIPTOR), __var_2;
  };
  this.EVAL_ERROR = __var_1('EvalError'), this.RANGE_ERROR = __var_1('RangeError'), this.REFERENCE_ERROR = __var_1('ReferenceError'), this.SYNTAX_ERROR = __var_1('SyntaxError'), this.TYPE_ERROR = __var_1('TypeError'), this.URI_ERROR = __var_1('URIError');
}, __var_140.prototype.initMath = function(__var_98) {
  var __var_0 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__var_98, 'Math', __var_0, __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_1 = [
      'E',
      'LN2',
      'LN10',
      'LOG2E',
      'LOG10E',
      'PI',
      'SQRT1_2',
      'SQRT2'
    ], __var_2 = 0; __var_2 < __var_1.length; __var_2++)
    this.setProperty(__var_0, __var_1[__var_2], Math[__var_1[__var_2]], __var_140.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var __var_3 = [
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
    ], __var_2 = 0; __var_2 < __var_3.length; __var_2++)
    this.setProperty(__var_0, __var_3[__var_2], this.createNativeFunction(Math[__var_3[__var_2]], !1), __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.initJSON = function(__var_98) {
  var __var_0, __var_1 = this,
    __var_2 = __var_1.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(__var_98, 'JSON', __var_2, __var_140.NONENUMERABLE_DESCRIPTOR), __var_0 = function __var_98(__var_0) {
    try {
      var __var_2 = JSON.parse(String(__var_0));
    } catch (__var_3) {
      __var_1.throwException(__var_1.SYNTAX_ERROR, __var_3.message);
    }
    return __var_1.nativeToPseudo(__var_2);
  }, this.setProperty(__var_2, 'parse', this.createNativeFunction(__var_0, !1)), __var_0 = function __var_98(__var_0, __var_2, __var_3) {
    __var_2 && 'Function' === __var_2.class ? __var_1.throwException(__var_1.TYPE_ERROR, 'Function replacer on JSON.stringify not supported') : __var_2 = __var_2 && 'Array' === __var_2.class ? (__var_2 = __var_1.pseudoToNative(__var_2)).filter(function(__var_98) {
      return 'string' == typeof __var_98 || 'number' == typeof __var_98;
    }) : null, 'string' != typeof __var_3 && 'number' != typeof __var_3 && (__var_3 = void 0);
    var __var_4 = __var_1.pseudoToNative(__var_0);
    try {
      var __var_5 = JSON.stringify(__var_4, __var_2, __var_3);
    } catch (__var_6) {
      __var_1.throwException(__var_1.TYPE_ERROR, __var_6.message);
    }
    return __var_5;
  }, this.setProperty(__var_2, 'stringify', this.createNativeFunction(__var_0, !1));
}, __var_140.prototype.isa = function(__var_98, __var_0) {
  if (null == __var_98 || !__var_0)
    return !1;
  var __var_1 = __var_0.properties.prototype;
  if (__var_98 === __var_1)
    return !0;
  for (__var_98 = this.getPrototype(__var_98); __var_98;) {
    if (__var_98 === __var_1)
      return !0;
    __var_98 = __var_98.proto;
  }
  return !1;
}, __var_140.prototype.populateRegExp = function(__var_98, __var_0) {
  __var_98.data = RegExp(__var_0.source, __var_0.flags), this.setProperty(__var_98, 'lastIndex', __var_0.lastIndex, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'source', __var_0.source, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'global', __var_0.global, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'ignoreCase', __var_0.ignoreCase, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_98, 'multiline', __var_0.multiline, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.populateError = function(__var_98, __var_0) {
  __var_0 && this.setProperty(__var_98, 'message', String(__var_0), __var_140.NONENUMERABLE_DESCRIPTOR);
  for (var __var_1 = [], __var_2 = this.stateStack.length - 1; __var_2 >= 0; __var_2--) {
    var __var_3 = this.stateStack[__var_2],
      __var_4 = __var_3.node;
    if ('CallExpression' === __var_4.type) {
      var __var_5 = __var_3.func_;
      __var_5 && __var_1.length && (__var_1[__var_1.length - 1].datumName = this.getProperty(__var_5, 'name'));
    }
    __var_4.loc && (!__var_1.length || 'CallExpression' === __var_4.type) && __var_1.push({
      datumLoc: __var_4.loc
    });
  }
  for (var __var_6 = String(this.getProperty(__var_98, 'name')), __var_7 = String(this.getProperty(__var_98, 'message')), __var_8 = __var_6 + ': ' + __var_7 + '\n', __var_2 = 0; __var_2 < __var_1.length; __var_2++) {
    var __var_9 = __var_1[__var_2].datumLoc,
      __var_10 = __var_1[__var_2].datumName,
      __var_11 = __var_9.source + ':' + __var_9.start.line + ':' + __var_9.start.column;
    __var_10 ? __var_8 += '  at ' + __var_10 + ' (' + __var_11 + ')\n' : __var_8 += '  at ' + __var_11 + '\n';
  }
  this.setProperty(__var_98, 'stack', __var_8.trim(), __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.createWorker = function() {
  var __var_98 = this.createWorker.blob_;
  return __var_98 || (__var_98 = new Blob([__var_140.WORKER_CODE.join('\n')], {
    type: 'application/javascript'
  }), this.createWorker.blob_ = __var_98), new Worker(URL.createObjectURL(__var_98));
}, __var_140.prototype.vmCall = function(__var_98, __var_0, __var_1, __var_2) {
  var __var_3 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return __var_140.vm.runInNewContext(__var_98, __var_0, __var_3);
  } catch (__var_4) {
    __var_2(null), this.throwException(this.ERROR, 'RegExp Timeout: ' + __var_1);
  }
  return __var_140.REGEXP_TIMEOUT;
}, __var_140.prototype.maybeThrowRegExp = function(__var_98, __var_0) {
  var __var_1;
  if (0 === this.REGEXP_MODE)
    __var_1 = !1;
  else if (1 === this.REGEXP_MODE)
    __var_1 = !0;
  else if (__var_140.vm)
    __var_1 = !0;
  else if ('function' == typeof Worker && 'function' == typeof URL)
    __var_1 = !0;
  else if ('function' == typeof require) {
    try {
      __var_140.vm = require('vm');
    } catch (__var_2) {}
    __var_1 = !!__var_140.vm;
  } else
    __var_1 = !1;
  __var_1 || (__var_0(null), this.throwException(this.ERROR, 'Regular expressions not supported: ' + __var_98));
}, __var_140.prototype.regExpTimeout = function(__var_98, __var_0, __var_1) {
  var __var_2 = this;
  return setTimeout(function() {
    __var_0.terminate(), __var_1(null);
    try {
      __var_2.throwException(__var_2.ERROR, 'RegExp Timeout: ' + __var_98);
    } catch (__var_3) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, __var_140.prototype.createObject = function(__var_98) {
  return this.createObjectProto(__var_98 && __var_98.properties.prototype);
}, __var_140.prototype.createObjectProto = function(__var_98) {
  if ('object' != typeof __var_98)
    throw Error('Non object prototype');
  var __var_0 = new __var_140.Object(__var_98);
  return this.isa(__var_0, this.ERROR) && (__var_0.class = 'Error'), __var_0;
}, __var_140.prototype.createArray = function() {
  var __var_98 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(__var_98, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), __var_98.class = 'Array', __var_98;
}, __var_140.prototype.createFunctionBase_ = function(__var_98, __var_0) {
  var __var_1 = this.createObjectProto(this.FUNCTION_PROTO);
  if (__var_0) {
    var __var_2 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(__var_1, 'prototype', __var_2, __var_140.NONENUMERABLE_DESCRIPTOR), this.setProperty(__var_2, 'constructor', __var_1, __var_140.NONENUMERABLE_DESCRIPTOR);
  } else
    __var_1.illegalConstructor = !0;
  return this.setProperty(__var_1, 'length', __var_98, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), __var_1.class = 'Function', __var_1;
}, __var_140.prototype.createFunction = function(__var_98, __var_0, __var_1) {
  var __var_2 = this.createFunctionBase_(__var_98.params.length, !0);
  __var_2.parentScope = __var_0, __var_2.node = __var_98;
  var __var_3 = __var_98.id ? String(__var_98.id.name) : __var_1 || '';
  return this.setProperty(__var_2, 'name', __var_3, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), __var_2;
}, __var_140.prototype.createNativeFunction = function(__var_98, __var_0) {
  var __var_1 = this.createFunctionBase_(__var_98.length, __var_0);
  return __var_1.nativeFunc = __var_98, __var_98.id = this.functionCounter_++, this.setProperty(__var_1, 'name', __var_98.name, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), __var_1;
}, __var_140.prototype.createAsyncFunction = function(__var_98) {
  var __var_0 = this.createFunctionBase_(__var_98.length, !0);
  return __var_0.asyncFunc = __var_98, __var_98.id = this.functionCounter_++, this.setProperty(__var_0, 'name', __var_98.name, __var_140.READONLY_NONENUMERABLE_DESCRIPTOR), __var_0;
}, __var_140.prototype.nativeToPseudo = function(__var_98, __var_0) {
  if (null == __var_98 || !0 === __var_98 || !1 === __var_98 || 'string' == typeof __var_98 || 'number' == typeof __var_98)
    return __var_98;
  if (__var_98 instanceof __var_140.Object)
    throw Error('Object is already pseudo');
  var __var_1, __var_2, __var_3 = __var_0 || {
      pseudo: [],
      native: []
    },
    __var_4 = __var_3.native.indexOf(__var_98);
  if (-1 !== __var_4)
    return __var_3.pseudo[__var_4];
  if (__var_3.native.push(__var_98), __var_98 instanceof RegExp) {
    var __var_5 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(__var_5, __var_98), __var_3.pseudo.push(__var_5), __var_5;
  }
  if (__var_98 instanceof Date) {
    var __var_6 = this.createObjectProto(this.DATE_PROTO);
    return __var_6.data = new Date(__var_98.valueOf()), __var_3.pseudo.push(__var_6), __var_6;
  }
  if (__var_98 instanceof Number ? __var_1 = this.createObject(this.NUMBER) : __var_98 instanceof String ? __var_1 = this.createObject(this.STRING) : __var_98 instanceof Boolean && (__var_1 = this.createObject(this.BOOLEAN)), __var_1)
    return __var_1.data = __var_98.valueOf(), __var_3.pseudo.push(__var_1), __var_1;
  if ('function' == typeof __var_98) {
    var __var_7 = this,
      __var_8 = function() {
        var __var_0 = Array.prototype.slice.call(arguments).map(function(__var_98) {
            return __var_7.pseudoToNative(__var_98);
          }),
          __var_1 = __var_98.apply(__var_7, __var_0);
        return __var_7.nativeToPseudo(__var_1);
      },
      __var_9 = Object.getOwnPropertyDescriptor(__var_98, 'prototype'),
      __var_10 = this.createNativeFunction(__var_8, !!__var_9);
    return __var_3.pseudo.push(__var_10), __var_10;
  }
  for (var __var_11 in (__var_2 = Array.isArray(__var_98) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), __var_3.pseudo.push(__var_2), __var_98))
    this.setProperty(__var_2, __var_11, this.nativeToPseudo(__var_98[__var_11], __var_3));
  return __var_2;
}, __var_140.prototype.pseudoToNative = function(__var_98, __var_0) {
  if (null == __var_98 || !0 === __var_98 || !1 === __var_98 || 'string' == typeof __var_98 || 'number' == typeof __var_98)
    return __var_98;
  if (!(__var_98 instanceof __var_140.Object))
    throw Error('Object is not pseudo');
  var __var_1, __var_2 = __var_0 || {
      pseudo: [],
      native: []
    },
    __var_3 = __var_2.pseudo.indexOf(__var_98);
  if (-1 !== __var_3)
    return __var_2.native[__var_3];
  if (__var_2.pseudo.push(__var_98), this.isa(__var_98, this.REGEXP)) {
    var __var_4 = RegExp(__var_98.data.source, __var_98.data.flags);
    return __var_4.lastIndex = __var_98.data.lastIndex, __var_2.native.push(__var_4), __var_4;
  }
  if (this.isa(__var_98, this.DATE)) {
    var __var_5 = new Date(__var_98.data.valueOf());
    return __var_2.native.push(__var_5), __var_5;
  }
  if (this.isa(__var_98, this.NUMBER) || this.isa(__var_98, this.STRING) || this.isa(__var_98, this.BOOLEAN)) {
    var __var_6 = Object(__var_98.data);
    return __var_2.native.push(__var_6), __var_6;
  }
  var __var_7 = this.isa(__var_98, this.ARRAY) ? [] : {};
  for (var __var_8 in (__var_2.native.push(__var_7), __var_98.properties))
    __var_1 = this.pseudoToNative(__var_98.properties[__var_8], __var_2), Object.defineProperty(__var_7, __var_8, {
      value: __var_1,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return __var_7;
}, __var_140.prototype.getPrototype = function(__var_98) {
  switch (typeof __var_98) {
    case 'number':
      return this.NUMBER.properties.prototype;
    case 'boolean':
      return this.BOOLEAN.properties.prototype;
    case 'string':
      return this.STRING.properties.prototype;
  }
  return __var_98 ? __var_98.proto : null;
}, __var_140.prototype.getProperty = function(__var_98, __var_0) {
  if (this.getterStep_)
    throw Error('Getter not supported in that context');
  if (__var_0 = String(__var_0), null == __var_98 && this.throwException(this.TYPE_ERROR, 'Cannot read property \'' + __var_0 + '\' of ' + __var_98), 'object' == typeof __var_98 && !(__var_98 instanceof __var_140.Object))
    throw TypeError('Expecting native value or pseudo object');
  if ('length' === __var_0) {
    if (this.isa(__var_98, this.STRING))
      return String(__var_98).length;
  } else if (64 > __var_0.charCodeAt(0) && this.isa(__var_98, this.STRING)) {
    var __var_1 = __var_140.legalArrayIndex(__var_0);
    if (!isNaN(__var_1) && __var_1 < String(__var_98).length)
      return String(__var_98)[__var_1];
  }
  do
    if (__var_98.properties && __var_0 in __var_98.properties) {
      var __var_2 = __var_98.getter[__var_0];
      if (__var_2)
        return this.getterStep_ = !0, __var_2;
      return __var_98.properties[__var_0];
    }
  while (__var_98 = this.getPrototype(__var_98));
}, __var_140.prototype.hasProperty = function(__var_98, __var_0) {
  if (!(__var_98 instanceof __var_140.Object))
    throw TypeError('Primitive data type has no properties');
  if ('length' === (__var_0 = String(__var_0)) && this.isa(__var_98, this.STRING))
    return !0;
  if (this.isa(__var_98, this.STRING)) {
    var __var_1 = __var_140.legalArrayIndex(__var_0);
    if (!isNaN(__var_1) && __var_1 < String(__var_98).length)
      return !0;
  }
  do
    if (__var_98.properties && __var_0 in __var_98.properties)
      return !0;
  while (__var_98 = this.getPrototype(__var_98));
  return !1;
}, __var_140.prototype.setProperty = function(__var_98, __var_0, __var_1, __var_2) {
  if (this.setterStep_)
    throw Error('Setter not supported in that context');
  if (__var_0 = String(__var_0), null == __var_98 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __var_0 + '\' of ' + __var_98), 'object' == typeof __var_98 && !(__var_98 instanceof __var_140.Object))
    throw TypeError('Expecting native value or pseudo object');
  __var_2 && ('get' in __var_2 || 'set' in __var_2) && ('value' in __var_2 || 'writable' in __var_2) && this.throwException(this.TYPE_ERROR, 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  var __var_3 = !this.stateStack || this.getScope().strict;
  if (!(__var_98 instanceof __var_140.Object)) {
    __var_3 && this.throwException(this.TYPE_ERROR, 'Can\'t create property \'' + __var_0 + '\' on \'' + __var_98 + '\'');
    return;
  }
  if (this.isa(__var_98, this.STRING)) {
    var __var_4 = __var_140.legalArrayIndex(__var_0);
    if ('length' === __var_0 || !isNaN(__var_4) && __var_4 < String(__var_98).length) {
      __var_3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __var_0 + '\' of String \'' + __var_98.data + '\'');
      return;
    }
  }
  if ('Array' === __var_98.class) {
    var __var_5, __var_6 = __var_98.properties.length;
    if ('length' === __var_0) {
      if (__var_2) {
        if (!('value' in __var_2))
          return;
        __var_1 = __var_2.value;
      }
      if (isNaN(__var_1 = __var_140.legalArrayLength(__var_1)) && this.throwException(this.RANGE_ERROR, 'Invalid array length'), __var_1 < __var_6)
        for (__var_5 in __var_98.properties)
          !isNaN(__var_5 = __var_140.legalArrayIndex(__var_5)) && __var_1 <= __var_5 && delete __var_98.properties[__var_5];
    } else
      isNaN(__var_5 = __var_140.legalArrayIndex(__var_0)) || (__var_98.properties.length = Math.max(__var_6, __var_5 + 1));
  }
  if (__var_98.preventExtensions && !(__var_0 in __var_98.properties)) {
    __var_3 && this.throwException(this.TYPE_ERROR, 'Can\'t add property \'' + __var_0 + '\', object is not extensible');
    return;
  }
  if (__var_2) {
    var __var_7 = {};
    'get' in __var_2 && __var_2.get && (__var_98.getter[__var_0] = __var_2.get, __var_7.get = this.setProperty.placeholderGet_), 'set' in __var_2 && __var_2.set && (__var_98.setter[__var_0] = __var_2.set, __var_7.set = this.setProperty.placeholderSet_), 'configurable' in __var_2 && (__var_7.configurable = __var_2.configurable), 'enumerable' in __var_2 && (__var_7.enumerable = __var_2.enumerable), 'writable' in __var_2 && (__var_7.writable = __var_2.writable, delete __var_98.getter[__var_0], delete __var_98.setter[__var_0]), 'value' in __var_2 ? (__var_7.value = __var_2.value, delete __var_98.getter[__var_0], delete __var_98.setter[__var_0]) : __var_1 !== __var_140.VALUE_IN_DESCRIPTOR && (__var_7.value = __var_1, delete __var_98.getter[__var_0], delete __var_98.setter[__var_0]);
    try {
      Object.defineProperty(__var_98.properties, __var_0, __var_7);
    } catch (__var_8) {
      this.throwException(this.TYPE_ERROR, 'Cannot redefine property: ' + __var_0);
    }
    'get' in __var_2 && !__var_2.get && delete __var_98.getter[__var_0], 'set' in __var_2 && !__var_2.set && delete __var_98.setter[__var_0];
  } else {
    if (__var_1 === __var_140.VALUE_IN_DESCRIPTOR)
      throw ReferenceError('Value not specified');
    for (var __var_9 = __var_98; !(__var_0 in __var_9.properties);)
      if (!(__var_9 = this.getPrototype(__var_9))) {
        __var_9 = __var_98;
        break;
      }
    if (__var_9.setter && __var_9.setter[__var_0])
      return this.setterStep_ = !0, __var_9.setter[__var_0];
    if (__var_9.getter && __var_9.getter[__var_0])
      __var_3 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + __var_0 + '\' of object \'' + __var_98 + '\' which only has a getter');
    else
      try {
        __var_98.properties[__var_0] = __var_1;
      } catch (__var_10) {
        __var_3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + __var_0 + '\' of object \'' + __var_98 + '\'');
      }
  }
}, __var_140.prototype.setProperty.placeholderGet_ = function() {
  throw Error('Placeholder getter');
}, __var_140.prototype.setProperty.placeholderSet_ = function() {
  throw Error('Placeholder setter');
}, __var_140.prototype.setNativeFunctionPrototype = function(__var_98, __var_0, __var_1) {
  this.setProperty(__var_98.properties.prototype, __var_0, this.createNativeFunction(__var_1, !1), __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.setAsyncFunctionPrototype = function(__var_98, __var_0, __var_1) {
  this.setProperty(__var_98.properties.prototype, __var_0, this.createAsyncFunction(__var_1), __var_140.NONENUMERABLE_DESCRIPTOR);
}, __var_140.prototype.getScope = function() {
  var __var_98 = this.stateStack[this.stateStack.length - 1].scope;
  if (!__var_98)
    throw Error('No scope found');
  return __var_98;
}, __var_140.prototype.createScope = function(__var_98, __var_0) {
  var __var_1 = !1;
  if (__var_0 && __var_0.strict)
    __var_1 = !0;
  else {
    var __var_2 = __var_98.body && __var_98.body[0];
    __var_2 && __var_2.expression && 'Literal' === __var_2.expression.type && 'use strict' === __var_2.expression.value && (__var_1 = !0);
  }
  var __var_3 = this.createObjectProto(null),
    __var_4 = new __var_140.Scope(__var_0, __var_1, __var_3);
  return __var_0 || this.initGlobal(__var_4.object), this.populateScope_(__var_98, __var_4), __var_4;
}, __var_140.prototype.createSpecialScope = function(__var_98, __var_0) {
  if (!__var_98)
    throw Error('parentScope required');
  var __var_1 = __var_0 || this.createObjectProto(null);
  return new __var_140.Scope(__var_98, __var_98.strict, __var_1);
}, __var_140.prototype.getValueFromScope = function(__var_98) {
  for (var __var_0 = this.getScope(); __var_0 && __var_0 !== this.globalScope;) {
    if (__var_98 in __var_0.object.properties)
      return __var_0.object.properties[__var_98];
    __var_0 = __var_0.parentScope;
  }
  if (__var_0 === this.globalScope && this.hasProperty(__var_0.object, __var_98))
    return this.getProperty(__var_0.object, __var_98);
  var __var_1 = this.stateStack[this.stateStack.length - 1].node;
  ('UnaryExpression' !== __var_1.type || 'typeof' !== __var_1.operator) && this.throwException(this.REFERENCE_ERROR, __var_98 + ' is not defined');
}, __var_140.prototype.setValueToScope = function(__var_98, __var_0) {
  for (var __var_1 = this.getScope(), __var_2 = __var_1.strict; __var_1 && __var_1 !== this.globalScope;) {
    if (__var_98 in __var_1.object.properties) {
      try {
        __var_1.object.properties[__var_98] = __var_0;
      } catch (__var_3) {
        __var_2 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only variable \'' + __var_98 + '\'');
      }
      return;
    }
    __var_1 = __var_1.parentScope;
  }
  if (__var_1 === this.globalScope && (!__var_2 || this.hasProperty(__var_1.object, __var_98)))
    return this.setProperty(__var_1.object, __var_98, __var_0);
  this.throwException(this.REFERENCE_ERROR, __var_98 + ' is not defined');
}, __var_140.prototype.populateScope_ = function(__var_98, __var_0) {
  var __var_1;
  if (__var_98.variableCache_)
    __var_1 = __var_98.variableCache_;
  else {
    switch (__var_1 = Object.create(null), __var_98.type) {
      case 'VariableDeclaration':
        for (var __var_2 = 0; __var_2 < __var_98.declarations.length; __var_2++)
          __var_1[__var_98.declarations[__var_2].id.name] = !0;
        break;
      case 'FunctionDeclaration':
        __var_1[__var_98.id.name] = __var_98;
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
        var __var_3 = __var_98.constructor;
        for (var __var_4 in __var_98)
          if (__var_98[__var_4] !== __var_98.loc) {
            var __var_5, __var_6 = __var_98[__var_4];
            if (__var_6 && 'object' == typeof __var_6) {
              if (Array.isArray(__var_6)) {
                for (var __var_2 = 0; __var_2 < __var_6.length; __var_2++)
                  if (__var_6[__var_2] && __var_6[__var_2].constructor === __var_3)
                    for (var __var_4 in __var_5 = this.populateScope_(__var_6[__var_2], __var_0))
                      __var_1[__var_4] = __var_5[__var_4];
              } else if (__var_6.constructor === __var_3)
                for (var __var_4 in __var_5 = this.populateScope_(__var_6, __var_0))
                  __var_1[__var_4] = __var_5[__var_4];
            }
          }
    }
    __var_98.variableCache_ = __var_1;
  }
  for (var __var_4 in __var_1)
    !0 === __var_1[__var_4] ? this.setProperty(__var_0.object, __var_4, void 0, __var_140.VARIABLE_DESCRIPTOR) : this.setProperty(__var_0.object, __var_4, this.createFunction(__var_1[__var_4], __var_0), __var_140.VARIABLE_DESCRIPTOR);
  return __var_1;
}, __var_140.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, __var_140.prototype.getValue = function(__var_98) {
  return __var_98[0] === __var_140.SCOPE_REFERENCE ? this.getValueFromScope(__var_98[1]) : this.getProperty(__var_98[0], __var_98[1]);
}, __var_140.prototype.setValue = function(__var_98, __var_0) {
  return __var_98[0] === __var_140.SCOPE_REFERENCE ? this.setValueToScope(__var_98[1], __var_0) : this.setProperty(__var_98[0], __var_98[1], __var_0);
}, __var_140.prototype.throwException = function(__var_98, __var_0) {
  if (!this.globalScope)
    throw void 0 === __var_0 ? __var_98 : __var_0;
  if (void 0 !== __var_0 && __var_98 instanceof __var_140.Object) {
    var __var_1 = this.createObject(__var_98);
    this.populateError(__var_1, __var_0);
  } else
    var __var_1 = __var_98;
  throw this.unwind(__var_140.Completion.THROW, __var_1, void 0), __var_140.STEP_ERROR;
}, __var_140.prototype.unwind = function(__var_98, __var_0, __var_1) {
  if (__var_98 === __var_140.Completion.NORMAL)
    throw TypeError('Should not unwind for NORMAL completions');
  loop:
    for (var __var_2, __var_3 = this.stateStack; __var_3.length > 0; __var_3.pop()) {
      var __var_4 = __var_3[__var_3.length - 1];
      switch (__var_4.node.type) {
        case 'TryStatement':
          __var_4.cv = {
            type: __var_98,
            value: __var_0,
            label: __var_1
          };
          return;
        case 'CallExpression':
        case 'NewExpression':
          if (__var_98 === __var_140.Completion.RETURN) {
            __var_4.value = __var_0;
            return;
          }
          if (__var_98 === __var_140.Completion.BREAK || __var_98 === __var_140.Completion.CONTINUE)
            throw Error('Unsyntactic break/continue not rejected by Acorn');
          break;
        case 'Program':
          if (__var_98 === __var_140.Completion.RETURN)
            return;
          __var_4.done = !0;
          break loop;
      }
      if (__var_98 === __var_140.Completion.BREAK) {
        if (__var_1 ? __var_4.labels && -1 !== __var_4.labels.indexOf(__var_1) : __var_4.isLoop || __var_4.isSwitch) {
          __var_3.pop();
          return;
        }
      } else if (__var_98 === __var_140.Completion.CONTINUE && (__var_1 ? __var_4.labels && -1 !== __var_4.labels.indexOf(__var_1) : __var_4.isLoop))
        return;
    }
  if (this.isa(__var_0, this.ERROR)) {
    var __var_5 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      __var_6 = String(this.getProperty(__var_0, 'name')),
      __var_7 = this.getProperty(__var_0, 'message').valueOf();
    (__var_2 = (__var_5[__var_6] || Error)(__var_7)).stack = String(this.getProperty(__var_0, 'stack'));
  } else
    __var_2 = String(__var_0);
  throw this.value = __var_2, __var_2;
}, __var_140.prototype.nodeSummary = function(__var_98) {
  switch (__var_98.type) {
    case 'ArrayExpression':
      return '[...]';
    case 'BinaryExpression':
    case 'LogicalExpression':
      return this.nodeSummary(__var_98.left) + ' ' + __var_98.operator + ' ' + this.nodeSummary(__var_98.right);
    case 'CallExpression':
      return this.nodeSummary(__var_98.callee) + '(...)';
    case 'ConditionalExpression':
      return this.nodeSummary(__var_98.test) + ' ? ' + this.nodeSummary(__var_98.consequent) + ' : ' + this.nodeSummary(__var_98.alternate);
    case 'Identifier':
      return __var_98.name;
    case 'Literal':
      return __var_98.raw;
    case 'MemberExpression':
      var __var_0 = this.nodeSummary(__var_98.object),
        __var_1 = this.nodeSummary(__var_98.property);
      return __var_98.computed ? __var_0 + '[' + __var_1 + ']' : __var_0 + '.' + __var_1;
    case 'NewExpression':
      return 'new ' + this.nodeSummary(__var_98.callee) + '(...)';
    case 'ObjectExpression':
      return '{...}';
    case 'ThisExpression':
      return 'this';
    case 'UnaryExpression':
      return __var_98.operator + ' ' + this.nodeSummary(__var_98.argument);
    case 'UpdateExpression':
      var __var_2 = this.nodeSummary(__var_98.argument);
      return __var_98.prefix ? __var_98.operator + __var_2 : __var_2 + __var_98.operator;
  }
  return '???';
}, __var_140.prototype.createTask_ = function(__var_98, __var_0) {
  var __var_1, __var_2, __var_3, __var_4 = this.stateStack[this.stateStack.length - 1],
    __var_5 = Array.from(__var_0),
    __var_6 = __var_5.shift(),
    __var_7 = Math.max(Number(__var_5.shift() || 0), 0),
    __var_8 = this.newNode();
  if (__var_6 instanceof __var_140.Object && 'Function' === __var_6.class)
    __var_2 = __var_6, __var_8.type = 'CallExpression', __var_1 = __var_4.scope;
  else {
    try {
      __var_3 = this.parse_(String(__var_6), 'taskCode' + this.taskCodeNumber_++);
    } catch (__var_9) {
      this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __var_9.message);
    }
    __var_8.type = 'EvalProgram_', __var_8.body = __var_3.body;
    var __var_10 = __var_4.node.arguments[0],
      __var_11 = __var_10 ? __var_10.start : void 0,
      __var_12 = __var_10 ? __var_10.end : void 0;
    __var_140.stripLocations_(__var_8, __var_11, __var_12), __var_1 = this.globalScope, __var_5.length = 0;
  }
  var __var_13 = new __var_140.Task(__var_2, __var_5, __var_1, __var_8, __var_98 ? __var_7 : -1);
  return this.scheduleTask_(__var_13, __var_7), __var_13.pid;
}, __var_140.prototype.scheduleTask_ = function(__var_98, __var_0) {
  __var_98.time = Date.now() + __var_0, this.tasks.push(__var_98), this.tasks.sort(function(__var_98, __var_0) {
    return __var_98.time - __var_0.time;
  });
}, __var_140.prototype.deleteTask_ = function(__var_98) {
  for (var __var_0 = 0; __var_0 < this.tasks.length; __var_0++)
    if (this.tasks[__var_0].pid == __var_98) {
      this.tasks.splice(__var_0, 1);
      break;
    }
}, __var_140.prototype.nextTask_ = function() {
  var __var_98 = this.tasks[0];
  if (!__var_98 || __var_98.time > Date.now())
    return null;
  this.tasks.shift(), __var_98.interval >= 0 && this.scheduleTask_(__var_98, __var_98.interval);
  var __var_0 = new __var_140.State(__var_98.node, __var_98.scope);
  return __var_98.functionRef && (__var_0.doneCallee_ = 2, __var_0.funcThis_ = this.globalObject, __var_0.func_ = __var_98.functionRef, __var_0.doneArgs_ = !0, __var_0.arguments_ = __var_98.argsArray), __var_0;
}, __var_140.prototype.createGetter_ = function(__var_98, __var_0) {
  if (!this.getterStep_)
    throw Error('Unexpected call to createGetter');
  this.getterStep_ = !1;
  var __var_1 = Array.isArray(__var_0) ? __var_0[0] : __var_0,
    __var_2 = this.newNode();
  __var_2.type = 'CallExpression';
  var __var_3 = new __var_140.State(__var_2, this.stateStack[this.stateStack.length - 1].scope);
  return __var_3.doneCallee_ = 2, __var_3.funcThis_ = __var_1, __var_3.func_ = __var_98, __var_3.doneArgs_ = !0, __var_3.arguments_ = [], __var_3;
}, __var_140.prototype.createSetter_ = function(__var_98, __var_0, __var_1) {
  if (!this.setterStep_)
    throw Error('Unexpected call to createSetter');
  this.setterStep_ = !1;
  var __var_2 = Array.isArray(__var_0) ? __var_0[0] : this.globalObject,
    __var_3 = this.newNode();
  __var_3.type = 'CallExpression';
  var __var_4 = new __var_140.State(__var_3, this.stateStack[this.stateStack.length - 1].scope);
  return __var_4.doneCallee_ = 2, __var_4.funcThis_ = __var_2, __var_4.func_ = __var_98, __var_4.doneArgs_ = !0, __var_4.arguments_ = [__var_1], __var_4;
}, __var_140.prototype.boxThis_ = function(__var_98) {
  if (null == __var_98)
    return this.globalObject;
  if (!(__var_98 instanceof __var_140.Object)) {
    var __var_0 = this.createObjectProto(this.getPrototype(__var_98));
    return __var_0.data = __var_98, __var_0;
  }
  return __var_98;
}, __var_140.prototype.getGlobalScope = function() {
  return this.globalScope;
}, __var_140.prototype.setGlobalScope = function(__var_98) {
  this.globalScope = __var_98, this.stateStack[0].scope = __var_98;
}, __var_140.prototype.getStateStack = function() {
  return this.stateStack;
}, __var_140.prototype.setStateStack = function(__var_98) {
  this.stateStack = __var_98;
}, __var_140.Value, __var_140.State = function(__var_98, __var_0) {
  this.node = __var_98, this.scope = __var_0;
}, __var_140.Scope = function(__var_98, __var_0, __var_1) {
  this.parentScope = __var_98, this.strict = __var_0, this.object = __var_1;
}, __var_140.Object = function(__var_98) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = __var_98;
}, __var_140.Object.prototype.proto = null, __var_140.Object.prototype.class = 'Object', __var_140.Object.prototype.data = null, __var_140.Object.prototype.toString = function() {
  if (!__var_140.currentInterpreter_)
    return '[object Interpreter.Object]';
  if (!(this instanceof __var_140.Object))
    return String(this);
  if ('Array' === this.class) {
    var __var_98 = __var_140.toStringCycles_;
    __var_98.push(this);
    try {
      var __var_0 = [],
        __var_1 = this.properties.length,
        __var_2 = !1;
      __var_1 > 1024 && (__var_1 = 1000, __var_2 = !0);
      for (var __var_3 = 0; __var_3 < __var_1; __var_3++) {
        var __var_4 = this.properties[__var_3];
        __var_0[__var_3] = __var_4 instanceof __var_140.Object && -1 !== __var_98.indexOf(__var_4) ? '...' : __var_4;
      }
      __var_2 && __var_0.push('...');
    } finally {
      __var_98.pop();
    }
    return __var_0.join(',');
  }
  if ('Error' === this.class) {
    var __var_5, __var_6, __var_98 = __var_140.toStringCycles_;
    if (-1 !== __var_98.indexOf(this))
      return '[object Error]';
    var __var_7 = this;
    do
      if ('name' in __var_7.properties) {
        __var_5 = __var_7.properties.name;
        break;
      }
    while (__var_7 = __var_7.proto);
    __var_7 = this;
    do
      if ('message' in __var_7.properties) {
        __var_6 = __var_7.properties.message;
        break;
      }
    while (__var_7 = __var_7.proto);
    __var_98.push(this);
    try {
      __var_5 = __var_5 && String(__var_5), __var_6 = __var_6 && String(__var_6);
    } finally {
      __var_98.pop();
    }
    return __var_6 ? __var_5 + ': ' + __var_6 : String(__var_5);
  }
  return null !== this.data ? String(this.data) : '[object ' + this.class + ']';
}, __var_140.Object.prototype.valueOf = function() {
  return !__var_140.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, __var_140.Task = function(__var_98, __var_0, __var_1, __var_2, __var_3) {
  this.functionRef = __var_98, this.argsArray = __var_0, this.scope = __var_1, this.node = __var_2, this.interval = __var_3, this.pid = ++__var_140.Task.pid, this.time = 0;
}, __var_140.Task.pid = 0, __var_140.prototype.stepArrayExpression = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_1.elements,
    __var_3 = __var_0.n_ || 0;
  for (__var_0.array_ ? (this.setProperty(__var_0.array_, __var_3, __var_0.value), __var_3++) : (__var_0.array_ = this.createArray(), __var_0.array_.properties.length = __var_2.length); __var_3 < __var_2.length;) {
    if (__var_2[__var_3])
      return __var_0.n_ = __var_3, new __var_140.State(__var_2[__var_3], __var_0.scope);
    __var_3++;
  }
  __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.array_;
}, __var_140.prototype.stepAssignmentExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneLeft_) {
    __var_0.doneLeft_ = !0;
    var __var_2 = new __var_140.State(__var_1.left, __var_0.scope);
    return __var_2.components = !0, __var_2;
  }
  if (!__var_0.doneRight_) {
    if (__var_0.leftReference_ || (__var_0.leftReference_ = __var_0.value), __var_0.doneGetter_ && (__var_0.leftValue_ = __var_0.value), !__var_0.doneGetter_ && '=' !== __var_1.operator) {
      var __var_3 = this.getValue(__var_0.leftReference_);
      if (__var_0.leftValue_ = __var_3, this.getterStep_)
        return __var_0.doneGetter_ = !0, this.createGetter_(__var_3, __var_0.leftReference_);
    }
    return __var_0.doneRight_ = !0, '=' === __var_1.operator && 'Identifier' === __var_1.left.type && (__var_0.destinationName = __var_1.left.name), new __var_140.State(__var_1.right, __var_0.scope);
  }
  if (__var_0.doneSetter_) {
    __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.setterValue_;
    return;
  }
  var __var_4 = __var_0.leftValue_,
    __var_5 = __var_0.value;
  switch (__var_1.operator) {
    case '=':
      __var_4 = __var_5;
      break;
    case '+=':
      __var_4 += __var_5;
      break;
    case '-=':
      __var_4 -= __var_5;
      break;
    case '*=':
      __var_4 *= __var_5;
      break;
    case '/=':
      __var_4 /= __var_5;
      break;
    case '%=':
      __var_4 %= __var_5;
      break;
    case '<<=':
      __var_4 <<= __var_5;
      break;
    case '>>=':
      __var_4 >>= __var_5;
      break;
    case '>>>=':
      __var_4 >>>= __var_5;
      break;
    case '&=':
      __var_4 &= __var_5;
      break;
    case '^=':
      __var_4 ^= __var_5;
      break;
    case '|=':
      __var_4 |= __var_5;
      break;
    default:
      throw SyntaxError('Unknown assignment expression: ' + __var_1.operator);
  }
  var __var_6 = this.setValue(__var_0.leftReference_, __var_4);
  if (__var_6)
    return __var_0.doneSetter_ = !0, __var_0.setterValue_ = __var_4, this.createSetter_(__var_6, __var_0.leftReference_, __var_4);
  __var_98.pop(), __var_98[__var_98.length - 1].value = __var_4;
}, __var_140.prototype.stepBinaryExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneLeft_)
    return __var_0.doneLeft_ = !0, new __var_140.State(__var_1.left, __var_0.scope);
  if (!__var_0.doneRight_)
    return __var_0.doneRight_ = !0, __var_0.leftValue_ = __var_0.value, new __var_140.State(__var_1.right, __var_0.scope);
  __var_98.pop();
  var __var_2, __var_3 = __var_0.leftValue_,
    __var_4 = __var_0.value;
  switch (__var_1.operator) {
    case '==':
      __var_2 = __var_3 == __var_4;
      break;
    case '!=':
      __var_2 = __var_3 != __var_4;
      break;
    case '===':
      __var_2 = __var_3 === __var_4;
      break;
    case '!==':
      __var_2 = __var_3 !== __var_4;
      break;
    case '>':
      __var_2 = __var_3 > __var_4;
      break;
    case '>=':
      __var_2 = __var_3 >= __var_4;
      break;
    case '<':
      __var_2 = __var_3 < __var_4;
      break;
    case '<=':
      __var_2 = __var_3 <= __var_4;
      break;
    case '+':
      __var_2 = __var_3 + __var_4;
      break;
    case '-':
      __var_2 = __var_3 - __var_4;
      break;
    case '*':
      __var_2 = __var_3 * __var_4;
      break;
    case '/':
      __var_2 = __var_3 / __var_4;
      break;
    case '%':
      __var_2 = __var_3 % __var_4;
      break;
    case '&':
      __var_2 = __var_3 & __var_4;
      break;
    case '|':
      __var_2 = __var_3 | __var_4;
      break;
    case '^':
      __var_2 = __var_3 ^ __var_4;
      break;
    case '<<':
      __var_2 = __var_3 << __var_4;
      break;
    case '>>':
      __var_2 = __var_3 >> __var_4;
      break;
    case '>>>':
      __var_2 = __var_3 >>> __var_4;
      break;
    case 'in':
      __var_4 instanceof __var_140.Object || this.throwException(this.TYPE_ERROR, '\'in\' expects an object, not \'' + __var_4 + '\''), __var_2 = this.hasProperty(__var_4, __var_3);
      break;
    case 'instanceof':
      this.isa(__var_4, this.FUNCTION) || this.throwException(this.TYPE_ERROR, '\'instanceof\' expects an object, not \'' + __var_4 + '\''), __var_2 = __var_3 instanceof __var_140.Object && this.isa(__var_3, __var_4);
      break;
    default:
      throw SyntaxError('Unknown binary operator: ' + __var_1.operator);
  }
  __var_98[__var_98.length - 1].value = __var_2;
}, __var_140.prototype.stepBlockStatement = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_0.n_ || 0,
    __var_3 = __var_1.body[__var_2];
  if (__var_3)
    return __var_0.n_ = __var_2 + 1, new __var_140.State(__var_3, __var_0.scope);
  __var_98.pop();
}, __var_140.prototype.stepBreakStatement = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_1.label && __var_1.label.name;
  this.unwind(__var_140.Completion.BREAK, void 0, __var_2);
}, __var_140.prototype.evalCodeNumber_ = 0, __var_140.prototype.stepCallExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneCallee_) {
    __var_0.doneCallee_ = 1;
    var __var_2 = new __var_140.State(__var_1.callee, __var_0.scope);
    return __var_2.components = !0, __var_2;
  }
  if (1 === __var_0.doneCallee_) {
    __var_0.doneCallee_ = 2;
    var __var_3 = __var_0.value;
    if (Array.isArray(__var_3)) {
      if (__var_0.func_ = this.getValue(__var_3), __var_3[0] === __var_140.SCOPE_REFERENCE ? __var_0.directEval_ = 'eval' === __var_3[1] : __var_0.funcThis_ = __var_3[0], __var_3 = __var_0.func_, this.getterStep_)
        return __var_0.doneCallee_ = 1, this.createGetter_(__var_3, __var_0.value);
    } else
      __var_0.func_ = __var_3;
    __var_0.arguments_ = [], __var_0.n_ = 0;
  }
  var __var_3 = __var_0.func_;
  if (!__var_0.doneArgs_) {
    if (0 !== __var_0.n_ && __var_0.arguments_.push(__var_0.value), __var_1.arguments[__var_0.n_])
      return new __var_140.State(__var_1.arguments[__var_0.n_++], __var_0.scope);
    if ('NewExpression' === __var_1.type) {
      if (__var_3 instanceof __var_140.Object && !__var_3.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(__var_1.callee) + ' is not a constructor'), __var_3 === this.ARRAY)
        __var_0.funcThis_ = this.createArray();
      else {
        var __var_4 = __var_3.properties.prototype;
        ('object' != typeof __var_4 || null === __var_4) && (__var_4 = this.OBJECT_PROTO), __var_0.funcThis_ = this.createObjectProto(__var_4);
      }
      __var_0.isConstructor = !0;
    }
    __var_0.doneArgs_ = !0;
  }
  if (__var_0.doneExec_)
    __var_98.pop(), __var_0.isConstructor && 'object' != typeof __var_0.value ? __var_98[__var_98.length - 1].value = __var_0.funcThis_ : __var_98[__var_98.length - 1].value = __var_0.value;
  else {
    __var_0.doneExec_ = !0, __var_3 instanceof __var_140.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(__var_1.callee) + ' is not a function');
    var __var_5 = __var_3.node;
    if (__var_5) {
      for (var __var_6 = this.createScope(__var_5.body, __var_3.parentScope), __var_7 = this.createArray(), __var_8 = 0; __var_8 < __var_0.arguments_.length; __var_8++)
        this.setProperty(__var_7, __var_8, __var_0.arguments_[__var_8]);
      this.setProperty(__var_6.object, 'arguments', __var_7);
      for (var __var_8 = 0; __var_8 < __var_5.params.length; __var_8++) {
        var __var_9 = __var_5.params[__var_8].name,
          __var_10 = __var_0.arguments_.length > __var_8 ? __var_0.arguments_[__var_8] : void 0;
        this.setProperty(__var_6.object, __var_9, __var_10);
      }
      return __var_6.strict || (__var_0.funcThis_ = this.boxThis_(__var_0.funcThis_)), this.setProperty(__var_6.object, 'this', __var_0.funcThis_, __var_140.READONLY_DESCRIPTOR), __var_0.value = void 0, new __var_140.State(__var_5.body, __var_6);
    }
    if (__var_3.eval) {
      var __var_11 = __var_0.arguments_[0];
      if ('string' != typeof __var_11)
        __var_0.value = __var_11;
      else {
        try {
          var __var_12 = this.parse_(String(__var_11), 'eval' + this.evalCodeNumber_++);
        } catch (__var_13) {
          this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + __var_13.message);
        }
        var __var_14 = this.newNode();
        __var_14.type = 'EvalProgram_', __var_14.body = __var_12.body, __var_140.stripLocations_(__var_14, __var_1.start, __var_1.end);
        var __var_6 = __var_0.directEval_ ? __var_0.scope : this.globalScope;
        return __var_6.strict ? __var_6 = this.createScope(__var_12, __var_6) : this.populateScope_(__var_12, __var_6), this.value = void 0, new __var_140.State(__var_14, __var_6);
      }
    } else if (__var_3.nativeFunc)
      __var_0.scope.strict || (__var_0.funcThis_ = this.boxThis_(__var_0.funcThis_)), __var_0.value = __var_3.nativeFunc.apply(__var_0.funcThis_, __var_0.arguments_);
    else if (__var_3.asyncFunc) {
      var __var_15 = this,
        __var_16 = function(__var_98) {
          __var_0.value = __var_98, __var_15.paused_ = !1;
        },
        __var_17 = __var_3.asyncFunc.length - 1,
        __var_18 = __var_0.arguments_.concat(Array(__var_17)).slice(0, __var_17);
      __var_18.push(__var_16), this.paused_ = !0, __var_0.scope.strict || (__var_0.funcThis_ = this.boxThis_(__var_0.funcThis_)), __var_3.asyncFunc.apply(__var_0.funcThis_, __var_18);
      return;
    } else
      this.throwException(this.TYPE_ERROR, this.nodeSummary(__var_1.callee) + ' is not callable');
  }
}, __var_140.prototype.stepConditionalExpression = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_0.mode_ || 0;
  if (0 === __var_2)
    return __var_0.mode_ = 1, new __var_140.State(__var_1.test, __var_0.scope);
  if (1 === __var_2) {
    __var_0.mode_ = 2;
    var __var_3 = Boolean(__var_0.value);
    if (__var_3 && __var_1.consequent)
      return new __var_140.State(__var_1.consequent, __var_0.scope);
    if (!__var_3 && __var_1.alternate)
      return new __var_140.State(__var_1.alternate, __var_0.scope);
    this.value = void 0;
  }
  __var_98.pop(), 'ConditionalExpression' === __var_1.type && (__var_98[__var_98.length - 1].value = __var_0.value);
}, __var_140.prototype.stepContinueStatement = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_1.label && __var_1.label.name;
  this.unwind(__var_140.Completion.CONTINUE, void 0, __var_2);
}, __var_140.prototype.stepDebuggerStatement = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
}, __var_140.prototype.stepDoWhileStatement = function(__var_98, __var_0, __var_1) {
  if ('DoWhileStatement' === __var_1.type && void 0 === __var_0.test_ && (__var_0.value = !0, __var_0.test_ = !0), !__var_0.test_)
    return __var_0.test_ = !0, new __var_140.State(__var_1.test, __var_0.scope);
  if (__var_0.value) {
    if (__var_1.body)
      return __var_0.test_ = !1, __var_0.isLoop = !0, new __var_140.State(__var_1.body, __var_0.scope);
  } else
    __var_98.pop();
}, __var_140.prototype.stepEmptyStatement = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
}, __var_140.prototype.stepEvalProgram_ = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_0.n_ || 0,
    __var_3 = __var_1.body[__var_2];
  if (__var_3)
    return __var_0.n_ = __var_2 + 1, new __var_140.State(__var_3, __var_0.scope);
  __var_98.pop(), __var_98[__var_98.length - 1].value = this.value;
}, __var_140.prototype.stepExpressionStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.done_)
    return this.value = void 0, __var_0.done_ = !0, new __var_140.State(__var_1.expression, __var_0.scope);
  __var_98.pop(), this.value = __var_0.value;
}, __var_140.prototype.stepForInStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneInit_ && (__var_0.doneInit_ = !0, __var_1.left.declarations && __var_1.left.declarations[0].init))
    return __var_0.scope.strict && this.throwException(this.SYNTAX_ERROR, 'for-in loop variable declaration may not have an initializer'), new __var_140.State(__var_1.left, __var_0.scope);
  if (!__var_0.doneObject_)
    return __var_0.doneObject_ = !0, __var_0.variable_ || (__var_0.variable_ = __var_0.value), new __var_140.State(__var_1.right, __var_0.scope);
  if (__var_0.isLoop || (__var_0.isLoop = !0, __var_0.object_ = __var_0.value, __var_0.visited_ = Object.create(null)), void 0 === __var_0.name_)
    gotPropName:
    for (;;) {
      if (__var_0.object_ instanceof __var_140.Object)
        for (__var_0.props_ || (__var_0.props_ = Object.getOwnPropertyNames(__var_0.object_.properties));;) {
          var __var_2 = __var_0.props_.shift();
          if (void 0 === __var_2)
            break;
          if (Object.prototype.hasOwnProperty.call(__var_0.object_.properties, __var_2) && !__var_0.visited_[__var_2]) {
            if (__var_0.visited_[__var_2] = !0, Object.prototype.propertyIsEnumerable.call(__var_0.object_.properties, __var_2)) {
              __var_0.name_ = __var_2;
              break gotPropName;
            }
          }
        }
      else if (null !== __var_0.object_ && void 0 !== __var_0.object_)
        for (__var_0.props_ || (__var_0.props_ = Object.getOwnPropertyNames(__var_0.object_));;) {
          var __var_2 = __var_0.props_.shift();
          if (void 0 === __var_2)
            break;
          if (__var_0.visited_[__var_2] = !0, Object.prototype.propertyIsEnumerable.call(__var_0.object_, __var_2)) {
            __var_0.name_ = __var_2;
            break gotPropName;
          }
        }
      if (__var_0.object_ = this.getPrototype(__var_0.object_), __var_0.props_ = null, null === __var_0.object_) {
        __var_98.pop();
        return;
      }
    }
  if (!__var_0.doneVariable_) {
    __var_0.doneVariable_ = !0;
    var __var_3 = __var_1.left;
    if ('VariableDeclaration' === __var_3.type)
      __var_0.variable_ = [
        __var_140.SCOPE_REFERENCE,
        __var_3.declarations[0].id.name
      ];
    else {
      __var_0.variable_ = null;
      var __var_4 = new __var_140.State(__var_3, __var_0.scope);
      return __var_4.components = !0, __var_4;
    }
  }
  if (__var_0.variable_ || (__var_0.variable_ = __var_0.value), !__var_0.doneSetter_) {
    __var_0.doneSetter_ = !0;
    var __var_5 = __var_0.name_,
      __var_6 = this.setValue(__var_0.variable_, __var_5);
    if (__var_6)
      return this.createSetter_(__var_6, __var_0.variable_, __var_5);
  }
  if (__var_0.name_ = void 0, __var_0.doneVariable_ = !1, __var_0.doneSetter_ = !1, __var_1.body)
    return new __var_140.State(__var_1.body, __var_0.scope);
}, __var_140.prototype.stepForStatement = function(__var_98, __var_0, __var_1) {
  switch (__var_0.mode_) {
    default:
      if (__var_0.mode_ = 1, __var_1.init)
        return new __var_140.State(__var_1.init, __var_0.scope);
      break;
    case 1:
      if (__var_0.mode_ = 2, __var_1.test)
        return new __var_140.State(__var_1.test, __var_0.scope);
      break;
    case 2:
      if (__var_0.mode_ = 3, !__var_1.test || __var_0.value)
        return __var_0.isLoop = !0, new __var_140.State(__var_1.body, __var_0.scope);
      __var_98.pop();
      break;
    case 3:
      if (__var_0.mode_ = 1, __var_1.update)
        return new __var_140.State(__var_1.update, __var_0.scope);
  }
}, __var_140.prototype.stepFunctionDeclaration = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
}, __var_140.prototype.stepFunctionExpression = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
  var __var_2 = (__var_0 = __var_98[__var_98.length - 1]).scope;
  __var_1.id && (__var_2 = this.createSpecialScope(__var_2)), __var_0.value = this.createFunction(__var_1, __var_2, __var_0.destinationName), __var_1.id && this.setProperty(__var_2.object, __var_1.id.name, __var_0.value, __var_140.READONLY_DESCRIPTOR);
}, __var_140.prototype.stepIdentifier = function(__var_98, __var_0, __var_1) {
  if (__var_98.pop(), __var_0.components) {
    __var_98[__var_98.length - 1].value = [
      __var_140.SCOPE_REFERENCE,
      __var_1.name
    ];
    return;
  }
  var __var_2 = this.getValueFromScope(__var_1.name);
  if (this.getterStep_)
    return this.createGetter_(__var_2, this.globalObject);
  __var_98[__var_98.length - 1].value = __var_2;
}, __var_140.prototype.stepIfStatement = __var_140.prototype.stepConditionalExpression, __var_140.prototype.stepLabeledStatement = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
  var __var_2 = __var_0.labels || [];
  __var_2.push(__var_1.label.name);
  var __var_3 = new __var_140.State(__var_1.body, __var_0.scope);
  return __var_3.labels = __var_2, __var_3;
}, __var_140.prototype.stepLiteral = function(__var_98, __var_0, __var_1) {
  __var_98.pop();
  var __var_2 = __var_1.value;
  if (__var_2 instanceof RegExp) {
    var __var_3 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(__var_3, __var_2), __var_2 = __var_3;
  }
  __var_98[__var_98.length - 1].value = __var_2;
}, __var_140.prototype.stepLogicalExpression = function(__var_98, __var_0, __var_1) {
  if ('&&' !== __var_1.operator && '||' !== __var_1.operator)
    throw SyntaxError('Unknown logical operator: ' + __var_1.operator);
  if (!__var_0.doneLeft_)
    return __var_0.doneLeft_ = !0, new __var_140.State(__var_1.left, __var_0.scope);
  if (__var_0.doneRight_)
    __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.value;
  else {
    if (('&&' !== __var_1.operator || __var_0.value) && ('||' !== __var_1.operator || !__var_0.value))
      return __var_0.doneRight_ = !0, new __var_140.State(__var_1.right, __var_0.scope);
    __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.value;
  }
}, __var_140.prototype.stepMemberExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneObject_)
    return __var_0.doneObject_ = !0, new __var_140.State(__var_1.object, __var_0.scope);
  if (__var_1.computed) {
    if (!__var_0.doneProperty_)
      return __var_0.object_ = __var_0.value, __var_0.doneProperty_ = !0, new __var_140.State(__var_1.property, __var_0.scope);
    __var_2 = __var_0.value;
  } else
    __var_0.object_ = __var_0.value, __var_2 = __var_1.property.name;
  if (__var_98.pop(), __var_0.components)
    __var_98[__var_98.length - 1].value = [
      __var_0.object_,
      __var_2
    ];
  else {
    var __var_2, __var_3 = this.getProperty(__var_0.object_, __var_2);
    if (this.getterStep_)
      return this.createGetter_(__var_3, __var_0.object_);
    __var_98[__var_98.length - 1].value = __var_3;
  }
}, __var_140.prototype.stepNewExpression = __var_140.prototype.stepCallExpression, __var_140.prototype.stepObjectExpression = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_0.n_ || 0,
    __var_3 = __var_1.properties[__var_2];
  if (__var_0.object_) {
    var __var_4 = __var_0.destinationName;
    __var_0.properties_[__var_4] || (__var_0.properties_[__var_4] = {}), __var_0.properties_[__var_4][__var_3.kind] = __var_0.value, __var_0.n_ = ++__var_2, __var_3 = __var_1.properties[__var_2];
  } else
    __var_0.object_ = this.createObjectProto(this.OBJECT_PROTO), __var_0.properties_ = Object.create(null);
  if (__var_3) {
    var __var_5 = __var_3.key;
    if ('Identifier' === __var_5.type)
      var __var_4 = __var_5.name;
    else if ('Literal' === __var_5.type)
      var __var_4 = __var_5.value;
    else
      throw SyntaxError('Unknown object structure: ' + __var_5.type);
    return __var_0.destinationName = __var_4, new __var_140.State(__var_3.value, __var_0.scope);
  }
  for (var __var_5 in __var_0.properties_) {
    var __var_6 = __var_0.properties_[__var_5];
    if ('get' in __var_6 || 'set' in __var_6) {
      var __var_7 = {
        configurable: !0,
        enumerable: !0,
        get: __var_6.get,
        set: __var_6.set
      };
      this.setProperty(__var_0.object_, __var_5, __var_140.VALUE_IN_DESCRIPTOR, __var_7);
    } else
      this.setProperty(__var_0.object_, __var_5, __var_6.init);
  }
  __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.object_;
}, __var_140.prototype.stepProgram = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_1.body.shift();
  if (__var_2)
    return __var_0.done = !1, new __var_140.State(__var_2, __var_0.scope);
  __var_0.done = !0;
}, __var_140.prototype.stepReturnStatement = function(__var_98, __var_0, __var_1) {
  if (__var_1.argument && !__var_0.done_)
    return __var_0.done_ = !0, new __var_140.State(__var_1.argument, __var_0.scope);
  this.unwind(__var_140.Completion.RETURN, __var_0.value, void 0);
}, __var_140.prototype.stepSequenceExpression = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_0.n_ || 0,
    __var_3 = __var_1.expressions[__var_2];
  if (__var_3)
    return __var_0.n_ = __var_2 + 1, new __var_140.State(__var_3, __var_0.scope);
  __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.value;
}, __var_140.prototype.stepSwitchStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.test_)
    return __var_0.test_ = 1, new __var_140.State(__var_1.discriminant, __var_0.scope);
  for (1 === __var_0.test_ && (__var_0.test_ = 2, __var_0.switchValue_ = __var_0.value, __var_0.defaultCase_ = -1);;) {
    var __var_2 = __var_0.index_ || 0,
      __var_3 = __var_1.cases[__var_2];
    if (!__var_0.matched_ && __var_3 && !__var_3.test) {
      __var_0.defaultCase_ = __var_2, __var_0.index_ = __var_2 + 1;
      continue;
    }
    if (!__var_3 && !__var_0.matched_ && -1 !== __var_0.defaultCase_) {
      __var_0.matched_ = !0, __var_0.index_ = __var_0.defaultCase_;
      continue;
    }
    if (__var_3) {
      if (!__var_0.matched_ && !__var_0.tested_ && __var_3.test)
        return __var_0.tested_ = !0, new __var_140.State(__var_3.test, __var_0.scope);
      if (__var_0.matched_ || __var_0.value === __var_0.switchValue_) {
        __var_0.matched_ = !0;
        var __var_4 = __var_0.n_ || 0;
        if (__var_3.consequent[__var_4])
          return __var_0.isSwitch = !0, __var_0.n_ = __var_4 + 1, new __var_140.State(__var_3.consequent[__var_4], __var_0.scope);
      }
      __var_0.tested_ = !1, __var_0.n_ = 0, __var_0.index_ = __var_2 + 1;
    } else {
      __var_98.pop();
      return;
    }
  }
}, __var_140.prototype.stepThisExpression = function(__var_98, __var_0, __var_1) {
  __var_98.pop(), __var_98[__var_98.length - 1].value = this.getValueFromScope('this');
}, __var_140.prototype.stepThrowStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.done_)
    return __var_0.done_ = !0, new __var_140.State(__var_1.argument, __var_0.scope);
  this.throwException(__var_0.value);
}, __var_140.prototype.stepTryStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneBlock_)
    return __var_0.doneBlock_ = !0, new __var_140.State(__var_1.block, __var_0.scope);
  if (__var_0.cv && __var_0.cv.type === __var_140.Completion.THROW && !__var_0.doneHandler_ && __var_1.handler) {
    __var_0.doneHandler_ = !0;
    var __var_2 = this.createSpecialScope(__var_0.scope);
    return this.setProperty(__var_2.object, __var_1.handler.param.name, __var_0.cv.value), __var_0.cv = void 0, new __var_140.State(__var_1.handler.body, __var_2);
  }
  if (!__var_0.doneFinalizer_ && __var_1.finalizer)
    return __var_0.doneFinalizer_ = !0, new __var_140.State(__var_1.finalizer, __var_0.scope);
  __var_98.pop(), __var_0.cv && this.unwind(__var_0.cv.type, __var_0.cv.value, __var_0.cv.label);
}, __var_140.prototype.stepUnaryExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.done_) {
    __var_0.done_ = !0;
    var __var_2 = new __var_140.State(__var_1.argument, __var_0.scope);
    return __var_2.components = 'delete' === __var_1.operator, __var_2;
  }
  __var_98.pop();
  var __var_3 = __var_0.value;
  switch (__var_1.operator) {
    case '-':
      __var_3 = -__var_3;
      break;
    case '+':
      __var_3 = +__var_3;
      break;
    case '!':
      __var_3 = !__var_3;
      break;
    case '~':
      __var_3 = ~__var_3;
      break;
    case 'delete':
      var __var_4 = !0;
      if (Array.isArray(__var_3)) {
        var __var_5 = __var_3[0];
        __var_5 === __var_140.SCOPE_REFERENCE && (__var_5 = __var_0.scope);
        var __var_6 = String(__var_3[1]);
        try {
          delete __var_5.properties[__var_6];
        } catch (__var_7) {
          __var_0.scope.strict ? this.throwException(this.TYPE_ERROR, 'Cannot delete property \'' + __var_6 + '\' of \'' + __var_5 + '\'') : __var_4 = !1;
        }
      }
      __var_3 = __var_4;
      break;
    case 'typeof':
      __var_3 = __var_3 && 'Function' === __var_3.class ? 'function' : typeof __var_3;
      break;
    case 'void':
      __var_3 = void 0;
      break;
    default:
      throw SyntaxError('Unknown unary operator: ' + __var_1.operator);
  }
  __var_98[__var_98.length - 1].value = __var_3;
}, __var_140.prototype.stepUpdateExpression = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneLeft_) {
    __var_0.doneLeft_ = !0;
    var __var_2, __var_3 = new __var_140.State(__var_1.argument, __var_0.scope);
    return __var_3.components = !0, __var_3;
  }
  if (__var_0.leftSide_ || (__var_0.leftSide_ = __var_0.value), __var_0.doneGetter_ && (__var_0.leftValue_ = __var_0.value), !__var_0.doneGetter_) {
    var __var_4 = this.getValue(__var_0.leftSide_);
    if (__var_0.leftValue_ = __var_4, this.getterStep_) {
      __var_0.doneGetter_ = !0;
      var __var_5 = __var_4;
      return this.createGetter_(__var_5, __var_0.leftSide_);
    }
  }
  if (__var_0.doneSetter_) {
    __var_98.pop(), __var_98[__var_98.length - 1].value = __var_0.setterValue_;
    return;
  }
  var __var_4 = Number(__var_0.leftValue_);
  if ('++' === __var_1.operator)
    __var_2 = __var_4 + 1;
  else if ('--' === __var_1.operator)
    __var_2 = __var_4 - 1;
  else
    throw SyntaxError('Unknown update expression: ' + __var_1.operator);
  var __var_6 = __var_1.prefix ? __var_2 : __var_4,
    __var_7 = this.setValue(__var_0.leftSide_, __var_2);
  if (__var_7)
    return __var_0.doneSetter_ = !0, __var_0.setterValue_ = __var_6, this.createSetter_(__var_7, __var_0.leftSide_, __var_2);
  __var_98.pop(), __var_98[__var_98.length - 1].value = __var_6;
}, __var_140.prototype.stepVariableDeclaration = function(__var_98, __var_0, __var_1) {
  var __var_2 = __var_1.declarations,
    __var_3 = __var_0.n_ || 0,
    __var_4 = __var_2[__var_3];
  for (__var_0.init_ && __var_4 && (this.setValueToScope(__var_4.id.name, __var_0.value), __var_0.init_ = !1, __var_4 = __var_2[++__var_3]); __var_4;) {
    if (__var_4.init)
      return __var_0.n_ = __var_3, __var_0.init_ = !0, __var_0.destinationName = __var_4.id.name, new __var_140.State(__var_4.init, __var_0.scope);
    __var_4 = __var_2[++__var_3];
  }
  __var_98.pop();
}, __var_140.prototype.stepWithStatement = function(__var_98, __var_0, __var_1) {
  if (!__var_0.doneObject_)
    return __var_0.doneObject_ = !0, new __var_140.State(__var_1.object, __var_0.scope);
  __var_98.pop();
  var __var_2 = this.createSpecialScope(__var_0.scope, __var_0.value);
  return new __var_140.State(__var_1.body, __var_2);
}, __var_140.prototype.stepWhileStatement = __var_140.prototype.stepDoWhileStatement, __var_140.nativeGlobal.__var_140 = __var_140, __var_140.prototype.step = __var_140.prototype.step, __var_140.prototype.run = __var_140.prototype.run, __var_140.prototype.getStatus = __var_140.prototype.getStatus, __var_140.prototype.appendCode = __var_140.prototype.appendCode, __var_140.prototype.createObject = __var_140.prototype.createObject, __var_140.prototype.createObjectProto = __var_140.prototype.createObjectProto, __var_140.prototype.createNativeFunction = __var_140.prototype.createNativeFunction, __var_140.prototype.createAsyncFunction = __var_140.prototype.createAsyncFunction, __var_140.prototype.getProperty = __var_140.prototype.getProperty, __var_140.prototype.setProperty = __var_140.prototype.setProperty, __var_140.prototype.nativeToPseudo = __var_140.prototype.nativeToPseudo, __var_140.prototype.pseudoToNative = __var_140.prototype.pseudoToNative, __var_140.prototype.getGlobalScope = __var_140.prototype.getGlobalScope, __var_140.prototype.setGlobalScope = __var_140.prototype.setGlobalScope, __var_140.prototype.getStateStack = __var_140.prototype.getStateStack, __var_140.prototype.setStateStack = __var_140.prototype.setStateStack, __var_140.Status = __var_140.Status, __var_140.VALUE_IN_DESCRIPTOR = __var_140.VALUE_IN_DESCRIPTOR;