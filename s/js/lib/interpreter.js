/* 2009dba22d21433b9541b39ecce3e46164b63678130b82f86b0fb4eb008eb795 */
/**
 * @license
 * Copyright 2012 Marijn Haverbeke
 * SPDX-License-Identifier: MIT
 */
! function(__id_0, __id_1) {
  return "object" == typeof exports && "object" == typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : void t(e.acorn || (e.acorn = {}));
}("undefined" == typeof globalThis ? this || window : globalThis, function(__id_2) {
  "use strict";

  e.version = "0.5.0";
  var __id_3,
    __id_4,
    __id_5,
    __id_6,
    __id_7,
    __id_8,
    __id_9,
    __id_10,
    __id_11,
    __id_12,
    __id_13,
    __id_14,
    __id_15,
    __id_16,
    __id_17,
    __id_18 = "";
  e.parse = function(__id_19, __id_20) {
    return __id_4 = (__id_18 = String(e)).length,
      function __id_21(__id_22) {
        for (var __id_23 in __id_3 = __id_4 || {}, __id_24) Object.prototype.hasOwnProperty.call(__id_3, __id_23) || (__id_3[__id_23] = __id_24[__id_23]);
        __id_5 = __id_3.sourceFile;
      }(__id_6), __id_11 = 1, __id_25 = __id_12 = 0, __id_10 = !0, __id_26(),
      function __id_27(__id_28) {
        __id_29 = __id_30 = __id_25, __id_3.locations && (__id_13 = new __id_31()), __id_14 = __id_16 = !1, __id_15 = [], __id_32();
        var __id_33 = __id_4 || __id_34(),
          __id_35 = !0;
        for (__id_4 || (__id_33.body = []); __id_8 !== __id_36;) {
          var __id_37 = __id_38();
          __id_33.body.push(__id_37), __id_35 && __id_39(__id_37) && __id_40(!0), __id_35 = !1;
        }
        return __id_41(__id_33, "Program");
      }(__id_3.program);
  };
  var __id_24 = {
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
    __id_42 = function(__id_43, __id_44) {
      for (var __id_45 = 1, __id_46 = 0;;) {
        __id_47.lastIndex = __id_46;
        var __id_48 = __id_47.exec(e);
        if (__id_48 && __id_48.index < __id_3) ++__id_45, __id_46 = __id_48.index + __id_48[0].length;
        else break;
      }
      return {
        line: __id_45,
        column: __id_3 - __id_46
      };
    },
    __id_25 = 0,
    __id_49 = 0,
    __id_50 = 0,
    __id_29 = 0,
    __id_30 = 0;

  function __id_51(__id_52, __id_53) {
    var __id_54 = __id_42(__id_18, e),
      __id_55 = SyntaxError(__id_3 += " (" + __id_54.line + ":" + __id_54.column + ")");
    throw __id_55.pos = e, __id_55.loc = __id_54, __id_55.raisedAt = __id_25, __id_55;
  }
  var __id_56 = [],
    __id_57 = {
      type: "num"
    },
    __id_58 = {
      type: "regexp"
    },
    __id_59 = {
      type: "string"
    },
    __id_60 = {
      type: "name"
    },
    __id_36 = {
      type: "eof"
    },
    __id_61 = {
      keyword: "break"
    },
    __id_62 = {
      keyword: "case",
      beforeExpr: !0
    },
    __id_63 = {
      keyword: "catch"
    },
    __id_64 = {
      keyword: "continue"
    },
    __id_65 = {
      keyword: "debugger"
    },
    __id_66 = {
      keyword: "default"
    },
    __id_67 = {
      keyword: "do",
      isLoop: !0
    },
    __id_68 = {
      keyword: "else",
      beforeExpr: !0
    },
    __id_69 = {
      keyword: "finally"
    },
    __id_70 = {
      keyword: "for",
      isLoop: !0
    },
    __id_71 = {
      keyword: "function"
    },
    __id_72 = {
      keyword: "if"
    },
    __id_73 = {
      keyword: "return",
      beforeExpr: !0
    },
    __id_74 = {
      keyword: "switch"
    },
    __id_75 = {
      keyword: "throw",
      beforeExpr: !0
    },
    __id_76 = {
      keyword: "try"
    },
    __id_77 = {
      keyword: "var"
    },
    __id_78 = {
      keyword: "while",
      isLoop: !0
    },
    __id_79 = {
      keyword: "with"
    },
    __id_80 = {
      keyword: "new",
      beforeExpr: !0
    },
    __id_81 = {
      keyword: "this"
    },
    __id_82 = {
      keyword: "null",
      atomValue: null
    },
    __id_83 = {
      keyword: "true",
      atomValue: !0
    },
    __id_84 = {
      keyword: "false",
      atomValue: !1
    },
    __id_85 = {
      keyword: "in",
      binop: 7,
      beforeExpr: !0
    },
    __id_86 = {
      break: __id_61,
      case: __id_62,
      catch: __id_63,
      continue: __id_64,
      debugger: __id_65,
      default: __id_66,
      do: __id_67,
      else: __id_68,
      finally: __id_69,
      for: __id_70,
      function: __id_71,
      if: __id_72,
      return: __id_73,
      switch: __id_74,
      throw: __id_75,
      try: __id_76,
      var: __id_77,
      while: __id_78,
      with: __id_79,
      null: __id_82,
      true: __id_83,
      false: __id_84,
      new: __id_80,
      in: __id_85,
      instanceof: {
        keyword: "instanceof",
        binop: 7,
        beforeExpr: !0
      },
      this: __id_81,
      typeof: {
        keyword: "typeof",
        prefix: !0,
        beforeExpr: !0
      },
      void: {
        keyword: "void",
        prefix: !0,
        beforeExpr: !0
      },
      delete: {
        keyword: "delete",
        prefix: !0,
        beforeExpr: !0
      }
    },
    __id_87 = {
      type: "[",
      beforeExpr: !0
    },
    __id_88 = {
      type: "]"
    },
    __id_89 = {
      type: "{",
      beforeExpr: !0
    },
    __id_90 = {
      type: "}"
    },
    __id_91 = {
      type: "(",
      beforeExpr: !0
    },
    __id_92 = {
      type: ")"
    },
    __id_93 = {
      type: ",",
      beforeExpr: !0
    },
    __id_94 = {
      type: ";",
      beforeExpr: !0
    },
    __id_95 = {
      type: ":",
      beforeExpr: !0
    },
    __id_96 = {
      type: "."
    },
    __id_97 = {
      type: "?",
      beforeExpr: !0
    },
    __id_98 = {
      binop: 10,
      beforeExpr: !0
    },
    __id_99 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __id_100 = {
      isAssign: !0,
      beforeExpr: !0
    },
    __id_101 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    __id_102 = {
      prefix: !0,
      beforeExpr: !0
    },
    __id_103 = {
      binop: 1,
      beforeExpr: !0
    },
    __id_104 = {
      binop: 2,
      beforeExpr: !0
    },
    __id_105 = {
      binop: 3,
      beforeExpr: !0
    },
    __id_106 = {
      binop: 4,
      beforeExpr: !0
    },
    __id_107 = {
      binop: 5,
      beforeExpr: !0
    },
    __id_108 = {
      binop: 6,
      beforeExpr: !0
    },
    __id_109 = {
      binop: 7,
      beforeExpr: !0
    },
    __id_110 = {
      binop: 8,
      beforeExpr: !0
    },
    __id_111 = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    __id_112 = {
      binop: 10,
      beforeExpr: !0
    };

  function __id_113(__id_114) {
    for (var __id_115 = e.split(" "), __id_116 = Object.create(null), __id_117 = 0; __id_117 < __id_115.length; __id_117++) __id_116[__id_115[__id_117]] = !0;
    return function(__id_118) {
      return __id_116[e] || !1;
    };
  }
  var __id_119 = __id_113("class enum extends super const export import"),
    __id_120 = __id_113("implements interface let package private protected public static yield"),
    __id_121 = __id_113("eval arguments"),
    __id_122 = __id_113("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
    __id_123 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    __id_124 = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    __id_125 = RegExp("[" + __id_124 + "]"),
    __id_126 = RegExp("[" + __id_124 + "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]"),
    __id_127 = /[\n\r\u2028\u2029]/,
    __id_47 = /\r\n|[\n\r\u2028\u2029]/g,
    __id_128 = function(__id_129) {
      return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __id_125.test(String.fromCharCode(e)));
    },
    __id_130 = function(__id_131) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || e >= 170 && __id_126.test(String.fromCharCode(e))));
    };

  function __id_31() {
    this.line = __id_11, this.column = __id_25 - __id_12;
  }

  function __id_132(__id_133, __id_134) {
    __id_50 = __id_25, __id_3.locations && (__id_7 = new __id_31()), __id_8 = e, __id_26(), __id_9 = __id_4, __id_10 = e.beforeExpr;
  }

  function __id_135() {
    var __id_136,
      __id_137 = __id_3.onComment && __id_3.locations && new __id_31(),
      __id_138 = __id_25,
      __id_139 = __id_18.indexOf("*/", __id_25 += 2);
    if (-1 === __id_139 && __id_51(__id_25 - 2, "Unterminated comment"), __id_25 = __id_139 + 2, __id_3.locations)
      for (__id_47.lastIndex = __id_138;
        (__id_136 = __id_47.exec(__id_18)) && __id_136.index < __id_25;) ++__id_11, __id_12 = __id_136.index + __id_136[0].length;
    __id_3.onComment && __id_3.onComment(!0, __id_18.slice(__id_138 + 2, __id_139), __id_138, __id_25, __id_137, __id_3.locations && new __id_31());
  }

  function __id_140() {
    for (var __id_141 = __id_25, __id_142 = __id_3.onComment && __id_3.locations && new __id_31(), __id_143 = __id_18.charCodeAt(__id_25 += 2); __id_25 < __id_4 && 10 !== __id_143 && 13 !== __id_143 && 8232 !== __id_143 && 8233 !== __id_143;) ++__id_25, __id_143 = __id_18.charCodeAt(__id_25);
    __id_3.onComment && __id_3.onComment(!1, __id_18.slice(__id_141 + 2, __id_25), __id_141, __id_25, __id_142, __id_3.locations && new __id_31());
  }

  function __id_26() {
    for (; __id_25 < __id_4;) {
      var __id_144 = __id_18.charCodeAt(__id_25);
      if (32 === __id_144) ++__id_25;
      else if (13 === __id_144) {
        ++__id_25;
        var __id_145 = __id_18.charCodeAt(__id_25);
        10 === __id_145 && ++__id_25, __id_3.locations && (++__id_11, __id_12 = __id_25);
      } else if (10 === __id_144 || 8232 === __id_144 || 8233 === __id_144) ++__id_25, __id_3.locations && (++__id_11, __id_12 = __id_25);
      else if (__id_144 > 8 && __id_144 < 14) ++__id_25;
      else if (47 === __id_144) {
        var __id_145 = __id_18.charCodeAt(__id_25 + 1);
        if (42 === __id_145) __id_135();
        else if (47 === __id_145) __id_140();
        else break;
      } else if (160 === __id_144) ++__id_25;
      else if (__id_144 >= 5760 && __id_123.test(String.fromCharCode(__id_144))) ++__id_25;
      else break;
    }
  }

  function __id_32(__id_146) {
    if (e ? __id_25 = __id_49 + 1 : __id_49 = __id_25, __id_3.locations && (__id_6 = new __id_31()), e) return __id_147();
    if (__id_25 >= __id_4) return __id_132(__id_36);
    var __id_148 = __id_18.charCodeAt(__id_25);
    if (__id_128(__id_148) || 92 === __id_148) return __id_149();
    if (!1 === function __id_150(__id_151) {
        switch (__id_148) {
          case 46:
            return void((__id_152 = __id_18.charCodeAt(__id_25 + 1)) >= 48 && __id_152 <= 57 ? __id_153(!0) : (++__id_25, __id_132(__id_96)));
          case 40:
            return ++__id_25, __id_132(__id_91);
          case 41:
            return ++__id_25, __id_132(__id_92);
          case 59:
            return ++__id_25, __id_132(__id_94);
          case 44:
            return ++__id_25, __id_132(__id_93);
          case 91:
            return ++__id_25, __id_132(__id_87);
          case 93:
            return ++__id_25, __id_132(__id_88);
          case 123:
            return ++__id_25, __id_132(__id_89);
          case 125:
            return ++__id_25, __id_132(__id_90);
          case 58:
            return ++__id_25, __id_132(__id_95);
          case 63:
            return ++__id_25, __id_132(__id_97);
          case 48:
            var __id_154,
              __id_152,
              __id_155,
              __id_156,
              __id_157,
              __id_158,
              __id_159 = __id_18.charCodeAt(__id_25 + 1);
            if (120 === __id_159 || 88 === __id_159) {
              return __id_25 += 2, __id_154 = __id_160(16), void(null === __id_154 && __id_51(__id_49 + 2, "Expected hexadecimal number"), __id_128(__id_18.charCodeAt(__id_25)) && __id_51(__id_25, "Identifier directly after number"), __id_132(__id_57, __id_154));
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
            return __id_153(!1);
          case 34:
          case 39:
            return function __id_161(__id_162) {
              __id_25++;
              for (var __id_163 = "";;) {
                __id_25 >= __id_4 && __id_51(__id_49, "Unterminated string constant");
                var __id_164 = __id_18.charCodeAt(__id_25);
                if (__id_164 === __id_148) {
                  ++__id_25, __id_132(__id_59, __id_163);
                  return;
                }
                if (92 === __id_164) {
                  __id_164 = __id_18.charCodeAt(++__id_25);
                  var __id_165 = /^[0-7]+/.exec(__id_18.slice(__id_25, __id_25 + 3));
                  for (__id_165 && (__id_165 = __id_165[0]); __id_165 && parseInt(__id_165, 8) > 255;) __id_165 = __id_165.slice(0, -1);
                  if ("0" === __id_165 && (__id_165 = null), ++__id_25, __id_165) __id_16 && __id_51(__id_25 - 2, "Octal literal in strict mode"), __id_163 += String.fromCharCode(parseInt(__id_165, 8)), __id_25 += __id_165.length - 1;
                  else switch (__id_164) {
                    case 110:
                      __id_163 += "\n";
                      break;
                    case 114:
                      __id_163 += "\r";
                      break;
                    case 120:
                      __id_163 += String.fromCharCode(__id_166(2));
                      break;
                    case 117:
                      __id_163 += String.fromCharCode(__id_166(4));
                      break;
                    case 85:
                      __id_163 += String.fromCharCode(__id_166(8));
                      break;
                    case 116:
                      __id_163 += "	";
                      break;
                    case 98:
                      __id_163 += "\b";
                      break;
                    case 118:
                      __id_163 += "\v";
                      break;
                    case 102:
                      __id_163 += "\f";
                      break;
                    case 48:
                      __id_163 += "\0";
                      break;
                    case 13:
                      10 === __id_18.charCodeAt(__id_25) && ++__id_25;
                    case 10:
                      __id_3.locations && (__id_12 = __id_25, ++__id_11);
                      break;
                    default:
                      __id_163 += String.fromCharCode(__id_164);
                  }
                } else(13 === __id_164 || 10 === __id_164 || 8232 === __id_164 || 8233 === __id_164) && __id_51(__id_49, "Unterminated string constant"), __id_163 += String.fromCharCode(__id_164), ++__id_25;
              }
            }(__id_148);
          case 47:
            return __id_155 = __id_18.charCodeAt(__id_25 + 1), void(__id_10 ? (++__id_25, __id_147()) : 61 === __id_155 ? __id_167(__id_100, 2) : __id_167(__id_98, 1));
          case 37:
          case 42:
            return void(61 === __id_18.charCodeAt(__id_25 + 1) ? __id_167(__id_100, 2) : __id_167(__id_112, 1));
          case 124:
          case 38:
            return __id_156 = __id_148, void((__id_157 = __id_18.charCodeAt(__id_25 + 1)) === __id_156 ? __id_167(124 === __id_156 ? __id_103 : __id_104, 2) : 61 === __id_157 ? __id_167(__id_100, 2) : __id_167(124 === __id_156 ? __id_105 : __id_107, 1));
          case 94:
            return void(61 === __id_18.charCodeAt(__id_25 + 1) ? __id_167(__id_100, 2) : __id_167(__id_106, 1));
          case 43:
          case 45:
            return function __id_168(__id_169) {
              var __id_170 = __id_18.charCodeAt(__id_25 + 1);
              if (__id_170 === __id_3) {
                if (45 === __id_170 && 62 === __id_18.charCodeAt(__id_25 + 2) && __id_127.test(__id_18.slice(__id_30, __id_25))) {
                  __id_25 += 3, __id_140(), __id_26(), __id_32();
                  return;
                }
                __id_167(__id_101, 2);
              } else 61 === __id_170 ? __id_167(__id_100, 2) : __id_167(__id_111, 1);
            }(__id_148);
          case 60:
          case 62:
            return function __id_171(__id_172) {
              var __id_173 = __id_18.charCodeAt(__id_25 + 1),
                __id_174 = 1;
              if (__id_173 === __id_3) {
                __id_174 = 62 === __id_3 && 62 === __id_18.charCodeAt(__id_25 + 2) ? 3 : 2, 61 === __id_18.charCodeAt(__id_25 + __id_174) ? __id_167(__id_100, __id_174 + 1) : __id_167(__id_110, __id_174);
                return;
              }
              if (33 === __id_173 && 60 === __id_3 && 45 === __id_18.charCodeAt(__id_25 + 2) && 45 === __id_18.charCodeAt(__id_25 + 3)) {
                __id_25 += 4, __id_140(), __id_26(), __id_32();
                return;
              }
              61 === __id_173 && (__id_174 = 61 === __id_18.charCodeAt(__id_25 + 2) ? 3 : 2), __id_167(__id_109, __id_174);
            }(__id_148);
          case 61:
          case 33:
            return __id_158 = __id_148, void(61 === __id_18.charCodeAt(__id_25 + 1) ? __id_167(__id_108, 61 === __id_18.charCodeAt(__id_25 + 2) ? 3 : 2) : __id_167(61 === __id_158 ? __id_99 : __id_102, 1));
          case 126:
            return __id_167(__id_102, 1);
        }
        return !1;
      }(__id_148)) {
      var __id_175 = String.fromCharCode(__id_148);
      if ("\\" === __id_175 || __id_125.test(__id_175)) return __id_149();
      __id_51(__id_25, "Unexpected character '" + __id_175 + "'");
    }
  }

  function __id_167(__id_176, __id_177) {
    var __id_178 = __id_18.slice(__id_25, __id_25 + __id_3);
    __id_25 += __id_3, __id_132(e, __id_178);
  }

  function __id_147() {
    for (var __id_179, __id_180, __id_181 = __id_25;;) {
      __id_25 >= __id_4 && __id_51(__id_181, "Unterminated regexp");
      var __id_182 = __id_18.charAt(__id_25);
      if (__id_127.test(__id_182) && __id_51(__id_181, "Unterminated regexp"), __id_179) __id_179 = !1;
      else {
        if ("[" === __id_182) __id_180 = !0;
        else if ("]" === __id_182 && __id_180) __id_180 = !1;
        else if ("/" === __id_182 && !__id_180) break;
        __id_179 = "\\" === __id_182;
      }
      ++__id_25;
    }
    var __id_183 = __id_18.slice(__id_181, __id_25);
    ++__id_25;
    var __id_184 = __id_185();
    __id_184 && !/^[gmi]*$/.test(__id_184) && __id_51(__id_181, "Invalid regexp flag");
    try {
      var __id_186 = RegExp(__id_183, __id_184);
    } catch (__id_187) {
      throw __id_10 instanceof SyntaxError && __id_51(__id_181, __id_10.message), __id_10;
    }
    __id_132(__id_58, __id_186);
  }

  function __id_160(__id_188, __id_189) {
    for (var __id_190 = __id_25, __id_191 = 0, __id_192 = void 0 === __id_3 ? 1 / 0 : __id_3, __id_193 = 0; __id_193 < __id_192; ++__id_193) {
      var __id_194,
        __id_195 = __id_18.charCodeAt(__id_25);
      if ((__id_194 = __id_195 >= 97 ? __id_195 - 97 + 10 : __id_195 >= 65 ? __id_195 - 65 + 10 : __id_195 >= 48 && __id_195 <= 57 ? __id_195 - 48 : 1 / 0) >= e) break;
      ++__id_25, __id_191 = __id_191 * e + __id_194;
    }
    return __id_25 === __id_190 || void 0 !== __id_3 && __id_25 - __id_190 !== __id_3 ? null : __id_191;
  }

  function __id_153(__id_196) {
    var __id_197,
      __id_198 = __id_25,
      __id_199 = !1,
      __id_200 = 48 === __id_18.charCodeAt(__id_25);
    e || null !== __id_160(10) || __id_51(__id_198, "Invalid number"), 46 === __id_18.charCodeAt(__id_25) && (++__id_25, __id_160(10), __id_199 = !0);
    var __id_201 = __id_18.charCodeAt(__id_25);
    (69 === __id_201 || 101 === __id_201) && ((43 === (__id_201 = __id_18.charCodeAt(++__id_25)) || 45 === __id_201) && ++__id_25, null === __id_160(10) && __id_51(__id_198, "Invalid number"), __id_199 = !0), __id_128(__id_18.charCodeAt(__id_25)) && __id_51(__id_25, "Identifier directly after number");
    var __id_202 = __id_18.slice(__id_198, __id_25);
    __id_199 ? __id_197 = parseFloat(__id_202) : __id_200 && 1 !== __id_202.length ? /[89]/.test(__id_202) || __id_16 ? __id_51(__id_198, "Invalid number") : __id_197 = parseInt(__id_202, 8) : __id_197 = parseInt(__id_202, 10), __id_132(__id_57, __id_197);
  }

  function __id_166(__id_203) {
    var __id_204 = __id_160(16, e);
    return null === __id_204 && __id_51(__id_49, "Bad character escape sequence"), __id_204;
  }

  function __id_185() {
    __id_17 = !1;
    for (var __id_205, __id_206 = !0, __id_207 = __id_25;;) {
      var __id_208 = __id_18.charCodeAt(__id_25);
      if (__id_130(__id_208)) __id_17 && (__id_205 += __id_18.charAt(__id_25)), ++__id_25;
      else if (92 === __id_208) {
        __id_17 || (__id_205 = __id_18.slice(__id_207, __id_25)), __id_17 = !0, 117 !== __id_18.charCodeAt(++__id_25) && __id_51(__id_25, "Expecting Unicode escape sequence \\uXXXX"), ++__id_25;
        var __id_209 = __id_166(4),
          __id_210 = String.fromCharCode(__id_209);
        __id_210 || __id_51(__id_25 - 1, "Invalid Unicode escape"), (__id_206 ? __id_128(__id_209) : __id_130(__id_209)) || __id_51(__id_25 - 4, "Invalid Unicode escape"), __id_205 += __id_210;
      } else break;
      __id_206 = !1;
    }
    return __id_17 ? __id_205 : __id_18.slice(__id_207, __id_25);
  }

  function __id_149() {
    var __id_211 = __id_185(),
      __id_212 = __id_60;
    !__id_17 && __id_122(__id_211) && (__id_212 = __id_86[__id_211]), __id_132(__id_212, __id_211);
  }

  function __id_213() {
    __id_29 = __id_49, __id_30 = __id_50, __id_13 = __id_7, __id_32();
  }

  function __id_40(__id_214) {
    if (__id_16 = e, __id_25 = __id_49, __id_3.locations)
      for (; __id_25 < __id_12;) __id_12 = __id_18.lastIndexOf("\n", __id_12 - 2) + 1, --__id_11;
    __id_26(), __id_32();
  }

  function __id_215() {
    this.type = null, this.start = __id_49, this.end = null;
  }

  function __id_216() {
    this.start = __id_6, this.end = null, __id_5 && (this.source = __id_5);
  }

  function __id_34() {
    var __id_217 = new __id_215();
    return __id_3.locations && (__id_217.loc = new __id_216()), __id_3.directSourceFile && (__id_217.sourceFile = __id_3.directSourceFile), __id_3.ranges && (__id_217.range = [__id_49, 0]), __id_217;
  }

  function __id_218(__id_219) {
    var __id_220 = new __id_215();
    return __id_220.start = e.start, __id_3.locations && (__id_220.loc = new __id_216(), __id_220.loc.start = e.loc.start), __id_3.ranges && (__id_220.range = [e.range[0], 0]), __id_220;
  }

  function __id_41(__id_221, __id_222) {
    return e.type = __id_4, e.end = __id_30, __id_3.locations && (e.loc.end = __id_13), __id_3.ranges && (e.range[1] = __id_30), e;
  }

  function __id_39(__id_223) {
    return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "use strict" === e.expression.value;
  }

  function __id_224(__id_225) {
    return __id_8 === e && (__id_213(), !0);
  }

  function __id_226() {
    return !__id_3.strictSemicolons && (__id_8 === __id_36 || __id_8 === __id_90 || __id_127.test(__id_18.slice(__id_30, __id_49)));
  }

  function __id_227() {
    __id_224(__id_94) || __id_226() || __id_228();
  }

  function __id_229(__id_230) {
    __id_8 === e ? __id_213() : __id_228();
  }

  function __id_228() {
    __id_51(__id_49, "Unexpected token");
  }

  function __id_231(__id_232) {
    "Identifier" !== e.type && "MemberExpression" !== e.type && __id_51(e.start, "Assigning to rvalue"), __id_16 && "Identifier" === e.type && __id_121(e.name) && __id_51(e.start, "Assigning to " + e.name + " in strict mode");
  }
  var __id_233 = {
      kind: "loop"
    },
    __id_234 = {
      kind: "switch"
    };

  function __id_38() {
    (__id_8 === __id_98 || __id_8 === __id_100 && "/=" === __id_9) && __id_32(!0);
    var __id_235,
      __id_236,
      __id_237 = __id_8,
      __id_238 = __id_34();
    switch (__id_237) {
      case __id_61:
      case __id_64:
        __id_213();
        var __id_239 = __id_237 === __id_61;
        __id_224(__id_94) || __id_226() ? __id_238.label = null : __id_8 !== __id_60 ? __id_228() : (__id_238.label = __id_240(), __id_227());
        for (var __id_241 = 0; __id_241 < __id_15.length; ++__id_241) {
          var __id_242 = __id_15[__id_241];
          if ((null === __id_238.label || __id_242.name === __id_238.label.name) && (null !== __id_242.kind && (__id_239 || "loop" === __id_242.kind) || __id_238.label && __id_239)) break;
        }
        return __id_241 === __id_15.length && __id_51(__id_238.start, "Unsyntactic " + __id_237.keyword), __id_41(__id_238, __id_239 ? "BreakStatement" : "ContinueStatement");
      case __id_65:
        return __id_213(), __id_227(), __id_41(__id_238, "DebuggerStatement");
      case __id_67:
        return __id_213(), __id_15.push(__id_233), __id_238.body = __id_38(), __id_15.pop(), __id_229(__id_78), __id_238.test = __id_243(), __id_227(), __id_41(__id_238, "DoWhileStatement");
      case __id_70:
        if (__id_213(), __id_15.push(__id_233), __id_229(__id_91), __id_8 === __id_94) return __id_244(__id_238, null);
        if (__id_8 === __id_77) {
          var __id_245 = __id_34();
          if (__id_213(), __id_246(__id_245, !0), __id_41(__id_245, "VariableDeclaration"), 1 === __id_245.declarations.length && __id_224(__id_85)) return __id_247(__id_238, __id_245);
          return __id_244(__id_238, __id_245);
        }
        var __id_245 = __id_248(!1, !0);
        if (__id_224(__id_85)) return __id_231(__id_245), __id_247(__id_238, __id_245);
        return __id_244(__id_238, __id_245);
      case __id_71:
        return __id_213(), __id_249(__id_238, !0);
      case __id_72:
        return __id_213(), __id_238.test = __id_243(), __id_238.consequent = __id_38(), __id_238.alternate = __id_224(__id_68) ? __id_38() : null, __id_41(__id_238, "IfStatement");
      case __id_73:
        return __id_14 || __id_3.allowReturnOutsideFunction || __id_51(__id_49, "'return' outside of function"), __id_213(), __id_224(__id_94) || __id_226() ? __id_238.argument = null : (__id_238.argument = __id_248(), __id_227()), __id_41(__id_238, "ReturnStatement");
      case __id_74:
        for (__id_213(), __id_238.discriminant = __id_243(), __id_238.cases = [], __id_229(__id_89), __id_15.push(__id_234); __id_8 !== __id_90;)
          if (__id_8 === __id_62 || __id_8 === __id_66) {
            var __id_250 = __id_8 === __id_62;
            __id_235 && __id_41(__id_235, "SwitchCase"), __id_238.cases.push(__id_235 = __id_34()), __id_235.consequent = [], __id_213(), __id_250 ? __id_235.test = __id_248() : (__id_236 && __id_51(__id_29, "Multiple default clauses"), __id_236 = !0, __id_235.test = null), __id_229(__id_95);
          } else __id_235 || __id_228(), __id_235.consequent.push(__id_38());
        return __id_235 && __id_41(__id_235, "SwitchCase"), __id_213(), __id_15.pop(), __id_41(__id_238, "SwitchStatement");
      case __id_75:
        return __id_213(), __id_127.test(__id_18.slice(__id_30, __id_49)) && __id_51(__id_30, "Illegal newline after throw"), __id_238.argument = __id_248(), __id_227(), __id_41(__id_238, "ThrowStatement");
      case __id_76:
        if (__id_213(), __id_238.block = __id_251(), __id_238.handler = null, __id_8 === __id_63) {
          var __id_252 = __id_34();
          __id_213(), __id_229(__id_91), __id_252.param = __id_240(), __id_16 && __id_121(__id_252.param.name) && __id_51(__id_252.param.start, "Binding " + __id_252.param.name + " in strict mode"), __id_229(__id_92), __id_252.body = __id_251(), __id_238.handler = __id_41(__id_252, "CatchClause");
        }
        return __id_238.finalizer = __id_224(__id_69) ? __id_251() : null, __id_238.handler || __id_238.finalizer || __id_51(__id_238.start, "Missing catch or finally clause"), __id_41(__id_238, "TryStatement");
      case __id_77:
        return __id_213(), __id_246(__id_238), __id_227(), __id_41(__id_238, "VariableDeclaration");
      case __id_78:
        return __id_213(), __id_238.test = __id_243(), __id_15.push(__id_233), __id_238.body = __id_38(), __id_15.pop(), __id_41(__id_238, "WhileStatement");
      case __id_79:
        return __id_16 && __id_51(__id_49, "'with' in strict mode"), __id_213(), __id_238.object = __id_243(), __id_238.body = __id_38(), __id_41(__id_238, "WithStatement");
      case __id_89:
        return __id_251();
      case __id_94:
        return __id_213(), __id_41(__id_238, "EmptyStatement");
      default:
        var __id_253 = __id_9,
          __id_254 = __id_248();
        if (!(__id_237 === __id_60 && "Identifier" === __id_254.type && __id_224(__id_95))) return __id_238.expression = __id_254, __id_227(), __id_41(__id_238, "ExpressionStatement");
        for (var __id_241 = 0; __id_241 < __id_15.length; ++__id_241) __id_15[__id_241].name === __id_253 && __id_51(__id_254.start, "Label '" + __id_253 + "' is already declared");
        var __id_255 = __id_8.isLoop ? "loop" : __id_8 === __id_74 ? "switch" : null;
        return __id_15.push({
          name: __id_253,
          kind: __id_255
        }), __id_238.body = __id_38(), __id_15.pop(), __id_238.label = __id_254, __id_41(__id_238, "LabeledStatement");
    }
  }

  function __id_243() {
    __id_229(__id_91);
    var __id_256 = __id_248();
    return __id_229(__id_92), __id_256;
  }

  function __id_251(__id_257) {
    var __id_258,
      __id_259 = __id_34(),
      __id_260 = !0,
      __id_261 = !1;
    for (__id_259.body = [], __id_229(__id_89); !__id_224(__id_90);) {
      var __id_262 = __id_38();
      __id_259.body.push(__id_262), __id_260 && e && __id_39(__id_262) && (__id_258 = __id_261, __id_40(__id_261 = !0)), __id_260 = !1;
    }
    return __id_261 && !__id_258 && __id_40(!1), __id_41(__id_259, "BlockStatement");
  }

  function __id_244(__id_263, __id_264) {
    return e.init = __id_3, __id_229(__id_94), e.test = __id_8 === __id_94 ? null : __id_248(), __id_229(__id_94), e.update = __id_8 === __id_92 ? null : __id_248(), __id_229(__id_92), e.body = __id_38(), __id_15.pop(), __id_41(e, "ForStatement");
  }

  function __id_247(__id_265, __id_266) {
    return e.left = __id_3, e.right = __id_248(), __id_229(__id_92), e.body = __id_38(), __id_15.pop(), __id_41(e, "ForInStatement");
  }

  function __id_246(__id_267, __id_268) {
    for (e.declarations = [], e.kind = "var";;) {
      var __id_269 = __id_34();
      if (__id_269.id = __id_240(), __id_16 && __id_121(__id_269.id.name) && __id_51(__id_269.id.start, "Binding " + __id_269.id.name + " in strict mode"), __id_269.init = __id_224(__id_99) ? __id_248(!0, __id_3) : null, e.declarations.push(__id_41(__id_269, "VariableDeclarator")), !__id_224(__id_93)) break;
    }
  }

  function __id_248(__id_270, __id_271) {
    var __id_272 = __id_273(__id_3);
    if (!e && __id_8 === __id_93) {
      var __id_274 = __id_218(__id_272);
      for (__id_274.expressions = [__id_272]; __id_224(__id_93);) __id_274.expressions.push(__id_273(__id_3));
      return __id_41(__id_274, "SequenceExpression");
    }
    return __id_272;
  }

  function __id_273(__id_275) {
    var __id_276 = function __id_277(__id_278) {
      var __id_279,
        __id_280 = (__id_279 = __id_276, function __id_281(__id_282, __id_283, __id_284) {
          var __id_285 = __id_8.binop;
          if (null !== __id_285 && (!__id_280 || __id_8 !== __id_85) && __id_285 > __id_279) {
            var __id_286 = __id_218(__id_276);
            __id_286.left = __id_276, __id_286.operator = __id_9;
            var __id_287 = __id_8;
            __id_213(), __id_286.right = e(__id_288(), __id_285, __id_280);
            var __id_289 = __id_41(__id_286, __id_287 === __id_103 || __id_287 === __id_104 ? "LogicalExpression" : "BinaryExpression");
            return e(__id_289, __id_279, __id_280);
          }
          return __id_276;
        }(__id_288(), -1, __id_279));
      if (__id_224(__id_97)) {
        var __id_290 = __id_218(__id_280);
        return __id_290.test = __id_280, __id_290.consequent = __id_248(!0), __id_229(__id_95), __id_290.alternate = __id_248(!0, __id_276), __id_41(__id_290, "ConditionalExpression");
      }
      return __id_280;
    }(e);
    if (__id_8.isAssign) {
      var __id_291 = __id_218(__id_276);
      return __id_291.operator = __id_9, __id_291.left = __id_276, __id_213(), __id_291.right = __id_273(e), __id_231(__id_276), __id_41(__id_291, "AssignmentExpression");
    }
    return __id_276;
  }

  function __id_288() {
    if (__id_8.prefix) {
      var __id_292 = __id_34(),
        __id_293 = __id_8.isUpdate;
      return __id_292.operator = __id_9, __id_292.prefix = !0, __id_10 = !0, __id_213(), __id_292.argument = __id_288(), __id_293 ? __id_231(__id_292.argument) : __id_16 && "delete" === __id_292.operator && "Identifier" === __id_292.argument.type && __id_51(__id_292.start, "Deleting local variable in strict mode"), __id_41(__id_292, __id_293 ? "UpdateExpression" : "UnaryExpression");
    }
    for (var __id_294 = __id_295(__id_296()); __id_8.postfix && !__id_226();) {
      var __id_292 = __id_218(__id_294);
      __id_292.operator = __id_9, __id_292.prefix = !1, __id_292.argument = __id_294, __id_231(__id_294), __id_213(), __id_294 = __id_41(__id_292, "UpdateExpression");
    }
    return __id_294;
  }

  function __id_295(__id_297, __id_298) {
    var __id_299;
    return __id_224(__id_96) ? ((__id_299 = __id_218(e)).object = e, __id_299.property = __id_240(!0), __id_299.computed = !1, __id_295(__id_41(__id_299, "MemberExpression"), __id_3)) : __id_224(__id_87) ? ((__id_299 = __id_218(e)).object = e, __id_299.property = __id_248(), __id_299.computed = !0, __id_229(__id_88), __id_295(__id_41(__id_299, "MemberExpression"), __id_3)) : !__id_3 && __id_224(__id_91) ? ((__id_299 = __id_218(e)).callee = e, __id_299.arguments = __id_300(__id_92, !1), __id_295(__id_41(__id_299, "CallExpression"), __id_3)) : e;
  }

  function __id_296() {
    switch (__id_8) {
      case __id_81:
        return __id_301 = __id_34(), __id_213(), __id_41(__id_301, "ThisExpression");
      case __id_60:
        return __id_240();
      case __id_57:
      case __id_59:
      case __id_58:
        return (__id_301 = __id_34()).value = __id_9, __id_301.raw = __id_18.slice(__id_49, __id_50), __id_213(), __id_41(__id_301, "Literal");
      case __id_82:
      case __id_83:
      case __id_84:
        return (__id_301 = __id_34()).value = __id_8.atomValue, __id_301.raw = __id_8.keyword, __id_213(), __id_41(__id_301, "Literal");
      case __id_91:
        var __id_301,
          __id_302,
          __id_303 = __id_6,
          __id_304 = __id_49;
        __id_213();
        var __id_305 = __id_248();
        return __id_305.start = __id_304, __id_305.end = __id_50, __id_3.locations && (__id_305.loc.start = __id_303, __id_305.loc.end = __id_7), __id_3.ranges && (__id_305.range = [__id_304, __id_50]), __id_229(__id_92), __id_305;
      case __id_87:
        return __id_301 = __id_34(), __id_213(), __id_301.elements = __id_300(__id_88, !0, !0), __id_41(__id_301, "ArrayExpression");
      case __id_89:
        return function __id_306() {
          var __id_307 = __id_34(),
            __id_308 = !0,
            __id_309 = !1;
          for (__id_307.properties = [], __id_213(); !__id_224(__id_90);) {
            if (__id_308) __id_308 = !1;
            else if (__id_229(__id_93), __id_3.allowTrailingCommas && __id_224(__id_90)) break;
            var __id_310,
              __id_311 = {
                key: __id_312()
              },
              __id_313 = !1;
            if (__id_224(__id_95) ? (__id_311.value = __id_248(!0), __id_310 = __id_311.kind = "init") : "Identifier" === __id_311.key.type && ("get" === __id_311.key.name || "set" === __id_311.key.name) ? (__id_313 = __id_309 = !0, __id_310 = __id_311.kind = __id_311.key.name, __id_311.key = __id_312(), __id_8 !== __id_91 && __id_228(), __id_311.value = __id_249(__id_34(), !1)) : __id_228(), "Identifier" === __id_311.key.type && (__id_16 || __id_309))
              for (var __id_314 = 0; __id_314 < __id_307.properties.length; ++__id_314) {
                var __id_315 = __id_307.properties[__id_314];
                if (__id_315.key.name === __id_311.key.name) {
                  var __id_316 = __id_310 === __id_315.kind || __id_313 && "init" === __id_315.kind || "init" === __id_310 && ("get" === __id_315.kind || "set" === __id_315.kind);
                  __id_316 && !__id_16 && "init" === __id_310 && "init" === __id_315.kind && (__id_316 = !1), __id_316 && __id_51(__id_311.key.start, "Redefinition of property");
                }
              }
            __id_307.properties.push(__id_311);
          }
          return __id_41(__id_307, "ObjectExpression");
        }();
      case __id_71:
        return __id_301 = __id_34(), __id_213(), __id_249(__id_301, !1);
      case __id_80:
        return __id_302 = __id_34(), __id_213(), __id_302.callee = __id_295(__id_296(), !0), __id_302.arguments = __id_224(__id_91) ? __id_300(__id_92, !1) : __id_56, __id_41(__id_302, "NewExpression");
    }
    __id_228();
  }

  function __id_312() {
    return __id_8 === __id_57 || __id_8 === __id_59 ? __id_296() : __id_240(!0);
  }

  function __id_249(__id_317, __id_318) {
    __id_8 === __id_60 ? e.id = __id_240() : __id_3 ? __id_228() : e.id = null, e.params = [];
    var __id_319 = !0;
    for (__id_229(__id_91); !__id_224(__id_92);) __id_319 ? __id_319 = !1 : __id_229(__id_93), e.params.push(__id_240());
    var __id_320 = __id_14,
      __id_321 = __id_15;
    if (__id_14 = !0, __id_15 = [], e.body = __id_251(!0), __id_14 = __id_320, __id_15 = __id_321, __id_16 || e.body.body.length && __id_39(e.body.body[0]))
      for (var __id_322 = e.id ? -1 : 0; __id_322 < e.params.length; ++__id_322) {
        var __id_323 = __id_322 < 0 ? e.id : e.params[__id_322];
        if ((__id_120(__id_323.name) || __id_121(__id_323.name)) && __id_51(__id_323.start, "Defining '" + __id_323.name + "' in strict mode"), __id_322 >= 0)
          for (var __id_324 = 0; __id_324 < __id_322; ++__id_324) __id_323.name === e.params[__id_324].name && __id_51(__id_323.start, "Argument name clash in strict mode");
      }
    return __id_41(e, __id_3 ? "FunctionDeclaration" : "FunctionExpression");
  }

  function __id_300(__id_325, __id_326, __id_327) {
    for (var __id_328 = [], __id_329 = !0; !__id_224(e);) {
      if (__id_329) __id_329 = !1;
      else if (__id_229(__id_93), __id_4 && __id_3.allowTrailingCommas && __id_224(e)) break;
      __id_328.push(__id_5 && __id_8 === __id_93 ? null : __id_248(!0));
    }
    return __id_328;
  }

  function __id_240(__id_330) {
    var __id_331 = __id_34();
    return e && "everywhere" === __id_3.forbidReserved && (e = !1), __id_8 === __id_60 ? (!e && (__id_3.forbidReserved && __id_119(__id_9) || __id_16 && __id_120(__id_9)) && -1 === __id_18.slice(__id_49, __id_50).indexOf("\\") && __id_51(__id_49, "The keyword '" + __id_9 + "' is reserved"), __id_331.name = __id_9) : e && __id_8.keyword ? __id_331.name = __id_8.keyword : __id_228(), __id_10 = !1, __id_213(), __id_41(__id_331, "Identifier");
  }
});
/**
 * @license
 * Copyright 2013 Neil Fraser
 * SPDX-License-Identifier: Apache-2.0
 */
var __id_332 = function(__id_333, __id_334) {
  "string" == typeof e && (e = this.parse_(e, "code"));
  var __id_335,
    __id_336 = e.constructor;
  this.newNode = function() {
    return new __id_336({
      options: {}
    });
  };
  var __id_337 = this.newNode();
  for (var __id_338 in e) __id_337[__id_338] = "body" === __id_338 ? e[__id_338].slice() : e[__id_338];
  this.ast = __id_337, this.tasks = [], this.initFunc_ = t, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var __id_339 = /^step([A-Z]\w*)$/;
  for (var __id_340 in this) "function" == typeof this[__id_340] && (__id_335 = __id_340.match(__id_339)) && (this.stepFunctions_[__id_335[1]] = this[__id_340].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join("\n"), "polyfills"), this.polyfills_ = void 0, __id_332.stripLocations_(this.ast, void 0, void 0);
  var __id_341 = new __id_332.State(this.ast, this.globalScope);
  __id_341.done = !1, this.stateStack = [__id_341], this.run(), this.value = void 0, this.ast = __id_337, (__id_341 = new __id_332.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = __id_341;
};
__id_332.Completion = {
  NORMAL: 0,
  BREAK: 1,
  CONTINUE: 2,
  RETURN: 3,
  THROW: 4
}, __id_332.Status = {
  DONE: 0,
  STEP: 1,
  TASK: 2,
  ASYNC: 3
}, __id_332.PARSE_OPTIONS = {
  locations: !0,
  ecmaVersion: 5
}, __id_332.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, __id_332.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, __id_332.VARIABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, __id_332.STEP_ERROR = {
  STEP_ERROR: !0
}, __id_332.SCOPE_REFERENCE = {
  SCOPE_REFERENCE: !0
}, __id_332.VALUE_IN_DESCRIPTOR = {
  VALUE_IN_DESCRIPTOR: !0
}, __id_332.REGEXP_TIMEOUT = {
  REGEXP_TIMEOUT: !0
}, __id_332.toStringCycles_ = [], __id_332.vm = null, __id_332.currentInterpreter_ = null, __id_332.nativeGlobal = "undefined" == typeof globalThis ? this || window : globalThis, __id_332.WORKER_CODE = ["onmessage = function(e) {", "var result;", "var data = e.data;", "switch (data[0]) {", "case 'split':", "result = data[1].split(data[2], data[3]);", "break;", "case 'match':", "result = data[1].match(data[2]);", "break;", "case 'search':", "result = data[1].search(data[2]);", "break;", "case 'replace':", "result = data[1].replace(data[2], data[3]);", "break;", "case 'exec':", "var regexp = data[1];", "regexp.lastIndex = data[2];", "result = [regexp.exec(data[3]), data[1].lastIndex];", "break;", "default:", "throw Error('Unknown RegExp operation: ' + data[0]);", "}", "postMessage(result);", "close();", "};"], __id_332.legalArrayLength = function(__id_342) {
  var __id_343 = e >>> 0;
  return __id_343 === Number(e) ? __id_343 : NaN;
}, __id_332.legalArrayIndex = function(__id_344) {
  var __id_345 = e >>> 0;
  return String(__id_345) === String(e) && 4294967295 !== __id_345 ? __id_345 : NaN;
}, __id_332.stripLocations_ = function(__id_346, __id_347, __id_348) {
  for (var __id_349 in t ? e.start = t : delete e.start, r ? e.end = r : delete e.end, e)
    if (e[__id_349] !== e.loc && e.hasOwnProperty(__id_349)) {
      var __id_350 = e[__id_349];
      __id_350 && "object" == typeof __id_350 && __id_332.stripLocations_(__id_350, t, r);
    }
}, __id_332.prototype.REGEXP_MODE = 2, __id_332.prototype.REGEXP_THREAD_TIMEOUT = 1e3, __id_332.prototype.POLYFILL_TIMEOUT = 1e3, __id_332.prototype.getterStep_ = !1, __id_332.prototype.setterStep_ = !1, __id_332.prototype.appendCodeNumber_ = 0, __id_332.prototype.taskCodeNumber_ = 0, __id_332.prototype.parse_ = function(__id_351, __id_352) {
  var __id_353 = {};
  for (var __id_354 in __id_332.PARSE_OPTIONS) __id_353[__id_354] = __id_332.PARSE_OPTIONS[__id_354];
  return __id_353.sourceFile = t, __id_332.nativeGlobal.acorn.parse(e, __id_353);
}, __id_332.prototype.appendCode = function(__id_355) {
  var __id_356 = this.stateStack[0];
  if (!__id_356 || "Program" !== __id_356.node.type) throw Error("Expecting original AST to start with a Program node");
  if ("string" == typeof e && (e = this.parse_(e, "appendCode" + this.appendCodeNumber_++)), !e || "Program" !== e.type) throw Error("Expecting new AST to start with a Program node");
  this.populateScope_(e, __id_356.scope), Array.prototype.push.apply(__id_356.node.body, e.body), __id_356.node.body.variableCache_ = null, __id_356.done = !1;
}, __id_332.prototype.step = function() {
  var __id_357,
    __id_358 = this.stateStack;
  do {
    var __id_359 = __id_358[__id_358.length - 1];
    if (this.paused_) break;
    if (!__id_359 || "Program" === __id_359.node.type && __id_359.done) {
      if (!this.tasks.length) return !1;
      if (!(__id_359 = this.nextTask_())) break;
    }
    var __id_360 = __id_359.node,
      __id_361 = __id_332.currentInterpreter_;
    __id_332.currentInterpreter_ = this;
    try {
      var __id_362 = this.stepFunctions_[__id_360.type](__id_358, __id_359, __id_360);
    } catch (__id_363) {
      if (a !== __id_332.STEP_ERROR) throw this.value !== a && (this.value = void 0), a;
    } finally {
      __id_332.currentInterpreter_ = __id_361;
    }
    if (__id_362 && __id_358.push(__id_362), this.getterStep_) throw this.value = void 0, Error("Getter not supported in this context");
    if (this.setterStep_) throw this.value = void 0, Error("Setter not supported in this context");
    __id_357 || __id_360.end || (__id_357 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!__id_360.end && __id_357 > Date.now());
  return !0;
}, __id_332.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, __id_332.prototype.getStatus = function() {
  if (this.paused_) return __id_332.Status.ASYNC;
  var __id_364 = this.stateStack,
    __id_365 = __id_364[__id_364.length - 1];
  if (__id_365 && ("Program" !== __id_365.node.type || !__id_365.done)) return __id_332.Status.STEP;
  var __id_366 = this.tasks[0];
  return __id_366 ? __id_366.time > Date.now() ? __id_332.Status.TASK : __id_332.Status.STEP : (0, __id_332.Status.DONE);
}, __id_332.prototype.initGlobal = function(__id_367) {
  this.setProperty(e, "NaN", NaN, __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "Infinity", 1 / 0, __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "undefined", void 0, __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "window", e, __id_332.READONLY_DESCRIPTOR), this.setProperty(e, "this", e, __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "self", e), this.OBJECT_PROTO = new __id_332.Object(null), this.FUNCTION_PROTO = new __id_332.Object(this.OBJECT_PROTO), this.initFunction(e), this.initObject(e), e.proto = this.OBJECT_PROTO, this.setProperty(e, "constructor", this.OBJECT, __id_332.NONENUMERABLE_DESCRIPTOR), this.initArray(e), this.initString(e), this.initBoolean(e), this.initNumber(e), this.initDate(e), this.initRegExp(e), this.initError(e), this.initMath(e), this.initJSON(e);
  var __id_368,
    __id_369 = this,
    __id_370 = this.createNativeFunction(function(__id_371) {
      throw EvalError("Can't happen");
    }, !1);
  __id_370.eval = !0, this.setProperty(e, "eval", __id_370, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "parseInt", this.createNativeFunction(parseInt, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "parseFloat", this.createNativeFunction(parseFloat, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "isNaN", this.createNativeFunction(isNaN, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "isFinite", this.createNativeFunction(isFinite, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_372 = [
      [escape, "escape"],
      [unescape, "unescape"],
      [decodeURI, "decodeURI"],
      [decodeURIComponent, "decodeURIComponent"],
      [encodeURI, "encodeURI"],
      [encodeURIComponent, "encodeURIComponent"]
    ], __id_373 = 0; __id_373 < __id_372.length; __id_373++) __id_368 = function(__id_374) {
    return function(__id_375) {
      try {
        return e(__id_368);
      } catch (__id_376) {
        __id_369.throwException(__id_369.URI_ERROR, __id_370.message);
      }
    };
  }(__id_372[__id_373][0]), this.setProperty(e, __id_372[__id_373][1], this.createNativeFunction(__id_368, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
  __id_368 = function __id_377(__id_378) {
    return __id_369.createTask_(!1, arguments);
  }, this.setProperty(e, "setTimeout", this.createNativeFunction(__id_368, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_368 = function __id_379(__id_380) {
    return __id_369.createTask_(!0, arguments);
  }, this.setProperty(e, "setInterval", this.createNativeFunction(__id_368, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_368 = function __id_381(__id_382) {
    __id_369.deleteTask_(__id_368);
  }, this.setProperty(e, "clearTimeout", this.createNativeFunction(__id_368, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_368 = function __id_383(__id_384) {
    __id_369.deleteTask_(__id_368);
  }, this.setProperty(e, "clearInterval", this.createNativeFunction(__id_368, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, e);
}, __id_332.prototype.functionCodeNumber_ = 0, __id_332.prototype.initFunction = function(__id_385) {
  var __id_386,
    __id_387 = this,
    __id_388 = /^[A-Za-z_$][\w$]*$/;
  __id_386 = function __id_389(__id_390) {
    if (arguments.length) var __id_391 = String(arguments[arguments.length - 1]);
    else var __id_391 = "";
    var __id_392 = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
    if (__id_392) {
      for (var __id_393 = __id_392.split(/\s*,\s*/), __id_394 = 0; __id_394 < __id_393.length; __id_394++) {
        var __id_395 = __id_393[__id_394];
        __id_388.test(__id_395) || __id_387.throwException(__id_387.SYNTAX_ERROR, "Invalid function argument: " + __id_395);
      }
      __id_392 = __id_393.join(", ");
    }
    try {
      var __id_396 = __id_387.parse_("(function(" + __id_392 + ") {" + __id_391 + "})", "function" + __id_387.functionCodeNumber_++);
    } catch (__id_397) {
      __id_387.throwException(__id_387.SYNTAX_ERROR, "Invalid code: " + c.message);
    }
    1 !== __id_396.body.length && __id_387.throwException(__id_387.SYNTAX_ERROR, "Invalid code in function body");
    var __id_398 = __id_396.body[0].expression;
    return __id_387.createFunction(__id_398, __id_387.globalScope, "anonymous");
  }, this.FUNCTION = this.createNativeFunction(__id_386, !0), this.setProperty(e, "Function", this.FUNCTION, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, "prototype", this.FUNCTION_PROTO, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, "constructor", this.FUNCTION, __id_332.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, "length", 0, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = "Function", __id_386 = function __id_399(__id_400, __id_401, __id_402) {
    var __id_403 = __id_387.stateStack[__id_387.stateStack.length - 1];
    __id_403.func_ = __id_386, __id_403.funcThis_ = __id_388, __id_403.arguments_ = [], null != o && (o instanceof __id_332.Object ? __id_403.arguments_ = Array.from(o.properties) : __id_387.throwException(__id_387.TYPE_ERROR, "CreateListFromArrayLike called on non-object")), __id_403.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, "apply", __id_386), this.polyfills_.push("(function() {", "var apply_ = Function.prototype.apply;", "Function.prototype.apply = function apply(thisArg, args) {", "var a2 = [];", "for (var i = 0; i < args.length; i++) {", "a2[i] = args[i];", "}", "return apply_(this, thisArg, a2);", "};", "})();"), __id_386 = function __id_404(__id_405) {
    var __id_406 = __id_387.stateStack[__id_387.stateStack.length - 1];
    __id_406.func_ = this, __id_406.funcThis_ = __id_386, __id_406.arguments_ = [];
    for (var __id_407 = 1; __id_407 < arguments.length; __id_407++) __id_406.arguments_.push(arguments[__id_407]);
    __id_406.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, "call", __id_386), this.polyfills_.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function bind(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},", "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", ""), __id_386 = function __id_408() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, "toString", __id_386), this.setProperty(this.FUNCTION, "toString", this.createNativeFunction(__id_386, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_386 = function __id_409() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", __id_386), this.setProperty(this.FUNCTION, "valueOf", this.createNativeFunction(__id_386, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.initObject = function(__id_410) {
  var __id_411,
    __id_412 = this;
  __id_411 = function __id_413(__id_414) {
    if (null == __id_411) return __id_412.calledWithNew() ? this : __id_412.createObjectProto(__id_412.OBJECT_PROTO);
    if (!(__id_411 instanceof __id_332.Object)) {
      var __id_415 = __id_412.createObjectProto(__id_412.getPrototype(__id_411));
      return __id_415.data = __id_411, __id_415;
    }
    return __id_411;
  }, this.OBJECT = this.createNativeFunction(__id_411, !0), this.setProperty(this.OBJECT, "prototype", this.OBJECT_PROTO, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, "constructor", this.OBJECT, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "Object", this.OBJECT, __id_332.NONENUMERABLE_DESCRIPTOR);
  var __id_416 = function(__id_417) {
    null == e && __id_412.throwException(__id_412.TYPE_ERROR, "Cannot convert '" + e + "' to object");
  };
  __id_411 = function __id_418(__id_419) {
    __id_416(__id_411);
    var __id_420 = __id_411 instanceof __id_332.Object ? __id_411.properties : __id_411;
    return __id_412.nativeToPseudo(Object.getOwnPropertyNames(__id_420));
  }, this.setProperty(this.OBJECT, "getOwnPropertyNames", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_411 = function __id_421(__id_422) {
    return __id_416(__id_411), __id_411 instanceof __id_332.Object && (__id_411 = __id_411.properties), __id_412.nativeToPseudo(Object.keys(__id_411));
  }, this.setProperty(this.OBJECT, "keys", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_411 = function __id_423(__id_424) {
    return null === __id_411 ? __id_412.createObjectProto(null) : (__id_411 instanceof __id_332.Object || __id_412.throwException(__id_412.TYPE_ERROR, "Object prototype may only be an Object or null, not " + __id_411), __id_412.createObjectProto(__id_411));
  }, this.setProperty(this.OBJECT, "create", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var create_ = Object.create;", "Object.create = function create(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", ""), __id_411 = function __id_425(__id_426, __id_427, __id_428) {
    return __id_416 = String(__id_416), __id_411 instanceof __id_332.Object || __id_412.throwException(__id_412.TYPE_ERROR, "Object.defineProperty called on non-object: " + __id_411), o instanceof __id_332.Object || __id_412.throwException(__id_412.TYPE_ERROR, "Property description must be an object"), !__id_411.preventExtensions || __id_416 in __id_411.properties || __id_412.throwException(__id_412.TYPE_ERROR, "Can't define property '" + __id_416 + "', object is not extensible"), __id_412.setProperty(__id_411, __id_416, __id_332.VALUE_IN_DESCRIPTOR, o.properties), __id_411;
  }, this.setProperty(this.OBJECT, "defineProperty", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function defineProperty(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;", "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function defineProperties(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);", "}", "return obj;", "}", "});", ""), __id_411 = function __id_429(__id_430, __id_431) {
    if (__id_411 instanceof __id_332.Object || __id_412.throwException(__id_412.TYPE_ERROR, "Object.getOwnPropertyDescriptor called on non-object: " + __id_411), (__id_416 = String(__id_416)) in __id_411.properties) {
      var __id_432 = Object.getOwnPropertyDescriptor(__id_411.properties, __id_416),
        __id_433 = __id_411.getter[__id_416],
        __id_434 = __id_411.setter[__id_416],
        __id_435 = __id_412.createObjectProto(__id_412.OBJECT_PROTO);
      return __id_433 || __id_434 ? (__id_412.setProperty(__id_435, "get", __id_433), __id_412.setProperty(__id_435, "set", __id_434)) : (__id_412.setProperty(__id_435, "value", __id_432.value), __id_412.setProperty(__id_435, "writable", __id_432.writable)), __id_412.setProperty(__id_435, "configurable", __id_432.configurable), __id_412.setProperty(__id_435, "enumerable", __id_432.enumerable), __id_435;
    }
  }, this.setProperty(this.OBJECT, "getOwnPropertyDescriptor", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_411 = function __id_436(__id_437) {
    return __id_416(__id_411), __id_412.getPrototype(__id_411);
  }, this.setProperty(this.OBJECT, "getPrototypeOf", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_411 = function __id_438(__id_439) {
    return Boolean(__id_411) && !__id_411.preventExtensions;
  }, this.setProperty(this.OBJECT, "isExtensible", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), __id_411 = function __id_440(__id_441) {
    return __id_411 instanceof __id_332.Object && (__id_411.preventExtensions = !0), __id_411;
  }, this.setProperty(this.OBJECT, "preventExtensions", this.createNativeFunction(__id_411, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, "toString", __id_332.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", __id_332.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, "valueOf", __id_332.Object.prototype.valueOf), __id_411 = function __id_442(__id_443) {
    return (__id_416(this), this instanceof __id_332.Object) ? String(__id_411) in this.properties : this.hasOwnProperty(__id_411);
  }, this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", __id_411), __id_411 = function __id_444(__id_445) {
    return (__id_416(this), this instanceof __id_332.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, __id_411) : this.propertyIsEnumerable(__id_411);
  }, this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", __id_411), __id_411 = function __id_446(__id_447) {
    for (;;) {
      if (!(__id_411 = __id_412.getPrototype(__id_411))) return !1;
      if (__id_411 === this) return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", __id_411);
}, __id_332.prototype.initArray = function(__id_448) {
  var __id_449,
    __id_450 = this;
  __id_449 = function __id_451(__id_452) {
    if (__id_450.calledWithNew()) var __id_453 = this;
    else var __id_453 = __id_450.createArray();
    var __id_454 = arguments[0];
    if (1 === arguments.length && "number" == typeof __id_454) isNaN(__id_332.legalArrayLength(__id_454)) && __id_450.throwException(__id_450.RANGE_ERROR, "Invalid array length: " + __id_454), __id_453.properties.length = __id_454;
    else {
      for (var __id_455 = 0; __id_455 < arguments.length; __id_455++) __id_453.properties[__id_455] = arguments[__id_455];
      __id_453.properties.length = __id_455;
    }
    return __id_453;
  }, this.ARRAY = this.createNativeFunction(__id_449, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(e, "Array", this.ARRAY, __id_332.NONENUMERABLE_DESCRIPTOR), __id_449 = function __id_456(__id_457) {
    return __id_449 && "Array" === __id_449.class;
  }, this.setProperty(this.ARRAY, "isArray", this.createNativeFunction(__id_449, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = "Array", this.polyfills_.push("(function() {", "function createArrayMethod_(name, func) {", "Object.defineProperty(func, 'name', {value: name});", "Object.defineProperty(Array.prototype, name,", "{configurable: true, writable: true, value: func});", "}", "createArrayMethod_('pop',", "function() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "len--;", "var x = o[len];", "delete o[len];", "o.length = len;", "return x;", "}", ");", "createArrayMethod_('push',", "function(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "for (var i = 0; i < arguments.length; i++) {", "o[len] = arguments[i];", "len++;", "}", "o.length = len;", "return len;", "}", ");", "createArrayMethod_('shift',", "function() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "o.length = 0;", "return undefined;", "}", "var value = o[0];", "for (var i = 0; i < len - 1; i++) {", "if ((i + 1) in o) {", "o[i] = o[i + 1];", "} else {", "delete o[i];", "}", "}", "delete o[i];", "o.length = len - 1;", "return value;", "}", ");", "createArrayMethod_('unshift',", "function(var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 0) {", "len = 0;", "}", "for (var i = len - 1; i >= 0; i--) {", "if (i in o) {", "o[i + arguments.length] = o[i];", "} else {", "delete o[i + arguments.length];", "}", "}", "for (var i = 0; i < arguments.length; i++) {", "o[i] = arguments[i];", "}", "return (o.length = len + arguments.length);", "}", ");", "createArrayMethod_('reverse',", "function() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len || len < 2) {", "return o;", "}", "for (var i = 0; i < len / 2 - 0.5; i++) {", "var x = o[i];", "var hasX = i in o;", "if ((len - i - 1) in o) {", "o[i] = o[len - i - 1];", "} else {", "delete o[i];", "}", "if (hasX) {", "o[len - i - 1] = x;", "} else {", "delete o[len - i - 1];", "}", "}", "return o;", "}", ");", "createArrayMethod_('indexOf',", "function(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var n = fromIndex | 0;", "if (!len || n >= len) {", "return -1;", "}", "var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);", "while (i < len) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i++;", "}", "return -1;", "}", ");", "createArrayMethod_('lastIndexOf',", "function(searchElement, fromIndex) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "if (!len) {", "return -1;", "}", "var n = len - 1;", "if (arguments.length > 1) {", "n = fromIndex | 0;", "if (n) {", "n = (n > 0 || -1) * Math.floor(Math.abs(n));", "}", "}", "var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);", "while (i >= 0) {", "if (i in o && o[i] === searchElement) {", "return i;", "}", "i--;", "}", "return -1;", "}", ");", "createArrayMethod_('slice',", "function(start, end) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "start = (start >= 0) ? start : Math.max(0, len + start);", "if (typeof end !== 'undefined') {", "if (end !== Infinity) {", "end |= 0;", "}", "if (end < 0) {", "end = len + end;", "} else {", "end = Math.min(end, len);", "}", "} else {", "end = len;", "}", "var size = end - start;", "var cloned = new Array(size);", "for (var i = 0; i < size; i++) {", "if ((start + i) in o) {", "cloned[i] = o[start + i];", "}", "}", "return cloned;", "}", ");", "createArrayMethod_('splice',", "function(start, deleteCount, var_args) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "start |= 0;", "if (start < 0) {", "start = Math.max(len + start, 0);", "} else {", "start = Math.min(start, len);", "}", "if (arguments.length < 2) {", "deleteCount = len - start;", "} else {", "deleteCount |= 0;", "deleteCount = Math.max(0, Math.min(deleteCount, len - start));", "}", "var removed = [];", "for (var i = start; i < start + deleteCount; i++) {", "if (i in o) {", "removed.push(o[i]);", "} else {", "removed.length++;", "}", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = start + deleteCount; i < len - deleteCount; i++) {", "if ((i + deleteCount) in o) {", "o[i] = o[i + deleteCount];", "} else {", "delete o[i];", "}", "}", "for (var i = len - deleteCount; i < len; i++) {", "delete o[i];", "}", "len -= deleteCount;", "if (arguments.length > 2) {", "var arl = arguments.length - 2;", "for (var i = len - 1; i >= start; i--) {", "if (i in o) {", "o[i + arl] = o[i];", "} else {", "delete o[i + arl];", "}", "}", "len += arl;", "for (var i = 2; i < arguments.length; i++) {", "o[start + i - 2] = arguments[i];", "}", "}", "o.length = len;", "return removed;", "}", ");", "createArrayMethod_('concat',", "function(var_args) {", "if (!this) throw TypeError();", "var o = Object(this);", "var cloned = [];", "for (var i = -1; i < arguments.length; i++) {", "var value = (i === -1) ? o : arguments[i];", "if (Array.isArray(value)) {", "for (var j = 0, l = value.length; j < l; j++) {", "if (j in value) {", "cloned.push(value[j]);", "} else {", "cloned.length++;", "}", "}", "} else {", "cloned.push(value);", "}", "}", "return cloned;", "}", ");", "createArrayMethod_('join',", "function(opt_separator) {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var sep = typeof opt_separator === 'undefined' ?", "',' : ('' + opt_separator);", "var str = '';", "for (var i = 0; i < len; i++) {", "if (i && sep) str += sep;", "str += (o[i] === null || o[i] === undefined) ? '' : o[i];", "}", "return str;", "}", ");", "createArrayMethod_('every',", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o && !callback.call(t, o[k], k, o)) return false;", "k++;", "}", "return true;", "}", ");", "createArrayMethod_('filter',", "function(callback, var_args) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o) {", "var val = o[i];", "if (callback.call(thisArg, val, i, o)) res.push(val);", "}", "}", "return res;", "}", ");", "createArrayMethod_('forEach',", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "while (k < len) {", "if (k in o) callback.call(t, o[k], k, o);", "k++;", "}", "}", ");", "createArrayMethod_('map',", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var t, k = 0;", "var o = Object(this), len = o.length >>> 0;", "if (arguments.length > 1) t = thisArg;", "var a = new Array(len);", "while (k < len) {", "if (k in o) a[k] = callback.call(t, o[k], k, o);", "k++;", "}", "return a;", "}", ");", "createArrayMethod_('reduce',", "function(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in o)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k++];", "}", "for (; k < len; k++) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_('reduceRight',", "function(callback /*, initialValue*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in o)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = o[k--];", "}", "for (; k >= 0; k--) {", "if (k in o) value = callback(value, o[k], k, o);", "}", "return value;", "}", ");", "createArrayMethod_('some',", "function(callback /*, thisArg*/) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in o && callback.call(thisArg, o[i], i, o)) return true;", "}", "return false;", "}", ");", "createArrayMethod_('sort',", "function(opt_comp) {", "if (!this) throw TypeError();", "if (typeof opt_comp !== 'function') {", "opt_comp = undefined;", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :", "(String(this[j]) > String(this[j + 1]))) {", "var swap = this[j];", "var hasSwap = j in this;", "if ((j + 1) in this) {", "this[j] = this[j + 1];", "} else {", "delete this[j];", "}", "if (hasSwap) {", "this[j + 1] = swap;", "} else {", "delete this[j + 1];", "}", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "}", ");", "createArrayMethod_('toLocaleString',", "function() {", "if (!this) throw TypeError();", "var o = Object(this), len = o.length >>> 0;", "var out = [];", "for (var i = 0; i < len; i++) {", "out[i] = (o[i] === null || o[i] === undefined) ? '' : o[i].toLocaleString();", "}", "return out.join(',');", "}", ");", "})();", "");
}, __id_332.prototype.initString = function(__id_458) {
  var __id_459,
    __id_460 = this;
  __id_459 = function __id_461(__id_462) {
    return (__id_459 = arguments.length ? __id_332.nativeGlobal.String(__id_459) : "", __id_460.calledWithNew()) ? (this.data = __id_459, this) : __id_459;
  }, this.STRING = this.createNativeFunction(__id_459, !0), this.setProperty(e, "String", this.STRING, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, "fromCharCode", this.createNativeFunction(String.fromCharCode, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_463 = ["charAt", "charCodeAt", "concat", "indexOf", "lastIndexOf", "slice", "substr", "substring", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim"], __id_464 = 0; __id_464 < __id_463.length; __id_464++) this.setNativeFunctionPrototype(this.STRING, __id_463[__id_464], String.prototype[__id_463[__id_464]]);
  __id_459 = function __id_465(__id_466, __id_467, __id_468) {
    __id_463 = __id_460.pseudoToNative(__id_463), __id_464 = __id_460.pseudoToNative(__id_464);
    try {
      return String(this).localeCompare(__id_459, __id_463, __id_464);
    } catch (__id_469) {
      __id_460.throwException(__id_460.ERROR, "localeCompare: " + i.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, "localeCompare", __id_459), __id_459 = function __id_470(__id_471, __id_472, __id_473) {
    var __id_474 = String(this);
    if (__id_463 = __id_463 ? Number(__id_463) : void 0, __id_460.isa(__id_459, __id_460.REGEXP) && (__id_459 = __id_459.data, __id_460.maybeThrowRegExp(__id_459, __id_464), 2 === __id_460.REGEXP_MODE)) {
      if (__id_332.vm) {
        var __id_475 = {
            string: __id_474,
            separator: __id_459,
            limit: __id_463
          },
          __id_476 = __id_460.vmCall("string.split(separator, limit)", __id_475, __id_459, __id_464);
        __id_476 !== __id_332.REGEXP_TIMEOUT && __id_464(__id_460.nativeToPseudo(__id_476));
      } else {
        var __id_477 = __id_460.createWorker(),
          __id_478 = __id_460.regExpTimeout(__id_459, __id_477, __id_464);
        __id_477.onmessage = function(__id_479) {
          clearTimeout(__id_478), __id_464(__id_460.nativeToPseudo(e.data));
        }, __id_477.postMessage(["split", __id_474, __id_459, __id_463]);
      }
      return;
    }
    var __id_476 = __id_474.split(__id_459, __id_463);
    __id_464(__id_460.nativeToPseudo(__id_476));
  }, this.setAsyncFunctionPrototype(this.STRING, "split", __id_459), __id_459 = function __id_480(__id_481, __id_482) {
    var __id_483 = String(this);
    if (__id_459 = __id_460.isa(__id_459, __id_460.REGEXP) ? __id_459.data : RegExp(__id_459), __id_460.maybeThrowRegExp(__id_459, __id_463), 2 === __id_460.REGEXP_MODE) {
      if (__id_332.vm) {
        var __id_484 = {
            string: __id_483,
            regexp: __id_459
          },
          __id_485 = __id_460.vmCall("string.match(regexp)", __id_484, __id_459, __id_463);
        __id_485 !== __id_332.REGEXP_TIMEOUT && __id_463(__id_485 && __id_460.matchToPseudo_(__id_485));
      } else {
        var __id_486 = __id_460.createWorker(),
          __id_487 = __id_460.regExpTimeout(__id_459, __id_486, __id_463);
        __id_486.onmessage = function(__id_488) {
          clearTimeout(__id_487), __id_463(e.data && __id_460.matchToPseudo_(e.data));
        }, __id_486.postMessage(["match", __id_483, __id_459]);
      }
      return;
    }
    var __id_485 = __id_483.match(__id_459);
    __id_463(__id_485 && __id_460.matchToPseudo_(__id_485));
  }, this.setAsyncFunctionPrototype(this.STRING, "match", __id_459), __id_459 = function __id_489(__id_490, __id_491) {
    var __id_492 = String(this);
    if (__id_459 = __id_460.isa(__id_459, __id_460.REGEXP) ? __id_459.data : RegExp(__id_459), __id_460.maybeThrowRegExp(__id_459, __id_463), 2 === __id_460.REGEXP_MODE) {
      if (__id_332.vm) {
        var __id_493 = {
            string: __id_492,
            regexp: __id_459
          },
          __id_494 = __id_460.vmCall("string.search(regexp)", __id_493, __id_459, __id_463);
        __id_494 !== __id_332.REGEXP_TIMEOUT && __id_463(__id_494);
      } else {
        var __id_495 = __id_460.createWorker(),
          __id_496 = __id_460.regExpTimeout(__id_459, __id_495, __id_463);
        __id_495.onmessage = function(__id_497) {
          clearTimeout(__id_496), __id_463(e.data);
        }, __id_495.postMessage(["search", __id_492, __id_459]);
      }
      return;
    }
    __id_463(__id_492.search(__id_459));
  }, this.setAsyncFunctionPrototype(this.STRING, "search", __id_459), __id_459 = function __id_498(__id_499, __id_500, __id_501) {
    var __id_502 = String(this);
    if (__id_463 = String(__id_463), __id_460.isa(__id_459, __id_460.REGEXP) && (__id_459 = __id_459.data, __id_460.maybeThrowRegExp(__id_459, __id_464), 2 === __id_460.REGEXP_MODE)) {
      if (__id_332.vm) {
        var __id_503 = {
            string: __id_502,
            substr: __id_459,
            newSubstr: __id_463
          },
          __id_504 = __id_460.vmCall("string.replace(substr, newSubstr)", __id_503, __id_459, __id_464);
        __id_504 !== __id_332.REGEXP_TIMEOUT && __id_464(__id_504);
      } else {
        var __id_505 = __id_460.createWorker(),
          __id_506 = __id_460.regExpTimeout(__id_459, __id_505, __id_464);
        __id_505.onmessage = function(__id_507) {
          clearTimeout(__id_506), __id_464(e.data);
        }, __id_505.postMessage(["replace", __id_502, __id_459, __id_463]);
      }
      return;
    }
    __id_464(__id_502.replace(__id_459, __id_463));
  }, this.setAsyncFunctionPrototype(this.STRING, "replace", __id_459), this.polyfills_.push("(function() {", "var replace_ = String.prototype.replace;", "String.prototype.replace = function replace(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + ", "str.substring(subs[i][0] + subs[i][1]);", "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + ", "str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "");
}, __id_332.prototype.initBoolean = function(__id_508) {
  var __id_509,
    __id_510 = this;
  __id_509 = function __id_511(__id_512) {
    return (__id_509 = __id_332.nativeGlobal.Boolean(__id_509), __id_510.calledWithNew()) ? (this.data = __id_509, this) : __id_509;
  }, this.BOOLEAN = this.createNativeFunction(__id_509, !0), this.setProperty(e, "Boolean", this.BOOLEAN, __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.initNumber = function(__id_513) {
  var __id_514,
    __id_515 = this;
  __id_514 = function __id_516(__id_517) {
    return (__id_514 = arguments.length ? __id_332.nativeGlobal.Number(__id_514) : 0, __id_515.calledWithNew()) ? (this.data = __id_514, this) : __id_514;
  }, this.NUMBER = this.createNativeFunction(__id_514, !0), this.setProperty(e, "Number", this.NUMBER, __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_518 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"], __id_519 = 0; __id_519 < __id_518.length; __id_519++) this.setProperty(this.NUMBER, __id_518[__id_519], Number[__id_518[__id_519]], __id_332.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  __id_514 = function __id_520(__id_521) {
    try {
      return Number(this).toExponential(__id_514);
    } catch (__id_522) {
      __id_515.throwException(__id_515.ERROR, __id_518.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, "toExponential", __id_514), __id_514 = function __id_523(__id_524) {
    try {
      return Number(this).toFixed(__id_514);
    } catch (__id_525) {
      __id_515.throwException(__id_515.ERROR, __id_518.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, "toFixed", __id_514), __id_514 = function __id_526(__id_527) {
    try {
      return Number(this).toPrecision(__id_514);
    } catch (__id_528) {
      __id_515.throwException(__id_515.ERROR, __id_518.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", __id_514), __id_514 = function __id_529(__id_530) {
    try {
      return Number(this).toString(__id_514);
    } catch (__id_531) {
      __id_515.throwException(__id_515.ERROR, __id_518.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, "toString", __id_514), __id_514 = function __id_532(__id_533, __id_534) {
    __id_514 = __id_514 ? __id_515.pseudoToNative(__id_514) : void 0, __id_518 = __id_518 ? __id_515.pseudoToNative(__id_518) : void 0;
    try {
      return Number(this).toLocaleString(__id_514, __id_518);
    } catch (__id_535) {
      __id_515.throwException(__id_515.ERROR, "toLocaleString: " + __id_519.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", __id_514);
}, __id_332.prototype.initDate = function(__id_536) {
  var __id_537,
    __id_538 = this;
  __id_537 = function __id_539(__id_540, __id_541) {
    if (!__id_538.calledWithNew()) return __id_332.nativeGlobal.Date();
    var __id_542 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(__id_332.nativeGlobal.Date, __id_542))(), this;
  }, this.DATE = this.createNativeFunction(__id_537, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(e, "Date", this.DATE, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "now", this.createNativeFunction(Date.now, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "parse", this.createNativeFunction(Date.parse, !1), __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, "UTC", this.createNativeFunction(Date.UTC, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_543 = ["getDate", "getDay", "getFullYear", "getHours", "getMilliseconds", "getMinutes", "getMonth", "getSeconds", "getTime", "getTimezoneOffset", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getYear", "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear", "toDateString", "toJSON", "toGMTString", "toLocaleDateString", "toLocaleString", "toLocaleTimeString", "toTimeString", "toUTCString"], __id_544 = 0; __id_544 < __id_543.length; __id_544++) __id_537 = function(__id_545) {
    return function(__id_546) {
      var __id_547 = this.data;
      __id_547 instanceof Date || __id_538.throwException(__id_538.TYPE_ERROR, e + " not called on a Date");
      for (var __id_548 = [], __id_549 = 0; __id_549 < arguments.length; __id_549++) __id_548[__id_549] = __id_538.pseudoToNative(arguments[__id_549]);
      return __id_547[e].apply(__id_547, __id_548);
    };
  }(__id_543[__id_544]), this.setNativeFunctionPrototype(this.DATE, __id_543[__id_544], __id_537);
  __id_537 = function __id_550() {
    try {
      return this.data.toISOString();
    } catch (__id_551) {
      __id_538.throwException(__id_538.RANGE_ERROR, "toISOString: " + __id_537.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, "toISOString", __id_537);
}, __id_332.prototype.initRegExp = function(__id_552) {
  var __id_553,
    __id_554 = this;
  __id_553 = function __id_555(__id_556, __id_557) {
    if (__id_554.calledWithNew()) var __id_558 = this;
    else {
      if (void 0 === n && __id_554.isa(__id_553, __id_554.REGEXP)) return __id_553;
      var __id_558 = __id_554.createObjectProto(__id_554.REGEXP_PROTO);
    }
    __id_553 = void 0 === __id_553 ? "" : String(__id_553), n = n ? String(n) : "", /^[gmi]*$/.test(n) || __id_554.throwException(__id_554.SYNTAX_ERROR, "Invalid regexp flag: " + n);
    try {
      var __id_559 = new __id_332.nativeGlobal.RegExp(__id_553, n);
    } catch (__id_560) {
      __id_554.throwException(__id_554.SYNTAX_ERROR, a.message);
    }
    return __id_554.populateRegExp(__id_558, __id_559), __id_558;
  }, this.REGEXP = this.createNativeFunction(__id_553, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(e, "RegExp", this.REGEXP, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "global", void 0, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "ignoreCase", void 0, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "multiline", void 0, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, "source", "(?:)", __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push("Object.defineProperty(RegExp.prototype, 'test',", "{configurable: true, writable: true, value:", "function test(str) {", "return !!this.exec(str);", "}", "});"), __id_553 = function __id_561(__id_562, __id_563) {
    var __id_564 = this.data;
    if (__id_553 = String(__id_553), __id_564.lastIndex = Number(__id_554.getProperty(this, "lastIndex")), __id_554.maybeThrowRegExp(__id_564, n), 2 === __id_554.REGEXP_MODE) {
      if (__id_332.vm) {
        var __id_565 = {
            string: __id_553,
            regexp: __id_564
          },
          __id_566 = __id_554.vmCall("regexp.exec(string)", __id_565, __id_564, n);
        __id_566 !== __id_332.REGEXP_TIMEOUT && (__id_554.setProperty(this, "lastIndex", __id_564.lastIndex), n(__id_554.matchToPseudo_(__id_566)));
      } else {
        var __id_567 = __id_554.createWorker(),
          __id_568 = __id_554.regExpTimeout(__id_564, __id_567, n),
          __id_569 = this;
        __id_567.onmessage = function(__id_570) {
          clearTimeout(__id_568), __id_554.setProperty(__id_569, "lastIndex", e.data[1]), n(__id_554.matchToPseudo_(e.data[0]));
        }, __id_567.postMessage(["exec", __id_564, __id_564.lastIndex, __id_553]);
      }
      return;
    }
    var __id_566 = __id_564.exec(__id_553);
    __id_554.setProperty(this, "lastIndex", __id_564.lastIndex), n(__id_554.matchToPseudo_(__id_566));
  }, this.setAsyncFunctionPrototype(this.REGEXP, "exec", __id_553);
}, __id_332.prototype.matchToPseudo_ = function(__id_571) {
  if (e) {
    for (var __id_572 = Object.getOwnPropertyNames(e), __id_573 = 0; __id_573 < __id_572.length; __id_573++) {
      var __id_574 = __id_572[__id_573];
      isNaN(Number(__id_574)) && "length" !== __id_574 && "input" !== __id_574 && "index" !== __id_574 && delete e[__id_574];
    }
    return this.nativeToPseudo(e);
  }
  return null;
}, __id_332.prototype.initError = function(__id_575) {
  var __id_576 = this;
  this.ERROR = this.createNativeFunction(function __id_577(__id_578) {
    if (__id_576.calledWithNew()) var __id_579 = this;
    else var __id_579 = __id_576.createObject(__id_576.ERROR);
    return __id_576.populateError(__id_579, __id_580), __id_579;
  }, !0), this.setProperty(e, "Error", this.ERROR, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "message", "", __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, "name", "Error", __id_332.NONENUMERABLE_DESCRIPTOR);
  var __id_580 = function(__id_581) {
    var __id_582 = __id_576.createNativeFunction(function(__id_583) {
      if (__id_576.calledWithNew()) var __id_584 = this;
      else var __id_584 = __id_576.createObject(__id_582);
      return __id_576.populateError(__id_584, e), __id_584;
    }, !0);
    return __id_576.setProperty(__id_582, "prototype", __id_576.createObject(__id_576.ERROR), __id_332.NONENUMERABLE_DESCRIPTOR), __id_576.setProperty(__id_582.properties.prototype, "name", __id_580, __id_332.NONENUMERABLE_DESCRIPTOR), __id_576.setProperty(e, __id_580, __id_582, __id_332.NONENUMERABLE_DESCRIPTOR), __id_582;
  };
  this.EVAL_ERROR = __id_580("EvalError"), this.RANGE_ERROR = __id_580("RangeError"), this.REFERENCE_ERROR = __id_580("ReferenceError"), this.SYNTAX_ERROR = __id_580("SyntaxError"), this.TYPE_ERROR = __id_580("TypeError"), this.URI_ERROR = __id_580("URIError");
}, __id_332.prototype.initMath = function(__id_585) {
  var __id_586 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(e, "Math", __id_586, __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_587 = ["E", "LN2", "LN10", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2"], __id_588 = 0; __id_588 < __id_587.length; __id_588++) this.setProperty(__id_586, __id_587[__id_588], Math[__id_587[__id_588]], __id_332.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var __id_589 = ["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", "max", "min", "pow", "random", "round", "sin", "sqrt", "tan"], __id_588 = 0; __id_588 < __id_589.length; __id_588++) this.setProperty(__id_586, __id_589[__id_588], this.createNativeFunction(Math[__id_589[__id_588]], !1), __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.initJSON = function(__id_590) {
  var __id_591,
    __id_592 = this,
    __id_593 = __id_592.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(e, "JSON", __id_593, __id_332.NONENUMERABLE_DESCRIPTOR), __id_591 = function __id_594(__id_595) {
    try {
      var __id_596 = JSON.parse(String(__id_591));
    } catch (__id_597) {
      __id_592.throwException(__id_592.SYNTAX_ERROR, o.message);
    }
    return __id_592.nativeToPseudo(__id_596);
  }, this.setProperty(__id_593, "parse", this.createNativeFunction(__id_591, !1)), __id_591 = function __id_598(__id_599, __id_600, __id_601) {
    __id_593 && "Function" === __id_593.class ? __id_592.throwException(__id_592.TYPE_ERROR, "Function replacer on JSON.stringify not supported") : __id_593 = __id_593 && "Array" === __id_593.class ? (__id_593 = __id_592.pseudoToNative(__id_593)).filter(function(__id_602) {
      return "string" == typeof e || "number" == typeof e;
    }) : null, "string" != typeof o && "number" != typeof o && (o = void 0);
    var __id_603 = __id_592.pseudoToNative(__id_591);
    try {
      var __id_604 = JSON.stringify(__id_603, __id_593, o);
    } catch (__id_605) {
      __id_592.throwException(__id_592.TYPE_ERROR, s.message);
    }
    return __id_604;
  }, this.setProperty(__id_593, "stringify", this.createNativeFunction(__id_591, !1));
}, __id_332.prototype.isa = function(__id_606, __id_607) {
  if (null == e || !t) return !1;
  var __id_608 = t.properties.prototype;
  if (e === __id_608) return !0;
  for (e = this.getPrototype(e); e;) {
    if (e === __id_608) return !0;
    e = e.proto;
  }
  return !1;
}, __id_332.prototype.populateRegExp = function(__id_609, __id_610) {
  e.data = RegExp(t.source, t.flags), this.setProperty(e, "lastIndex", t.lastIndex, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "source", t.source, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "global", t.global, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "ignoreCase", t.ignoreCase, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(e, "multiline", t.multiline, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.populateError = function(__id_611, __id_612) {
  t && this.setProperty(e, "message", String(t), __id_332.NONENUMERABLE_DESCRIPTOR);
  for (var __id_613 = [], __id_614 = this.stateStack.length - 1; __id_614 >= 0; __id_614--) {
    var __id_615 = this.stateStack[__id_614],
      __id_616 = __id_615.node;
    if ("CallExpression" === __id_616.type) {
      var __id_617 = __id_615.func_;
      __id_617 && __id_613.length && (__id_613[__id_613.length - 1].datumName = this.getProperty(__id_617, "name"));
    }
    __id_616.loc && (!__id_613.length || "CallExpression" === __id_616.type) && __id_613.push({
      datumLoc: __id_616.loc
    });
  }
  for (var __id_618 = String(this.getProperty(e, "name")), __id_619 = String(this.getProperty(e, "message")), __id_620 = __id_618 + ": " + __id_619 + "\n", __id_614 = 0; __id_614 < __id_613.length; __id_614++) {
    var __id_621 = __id_613[__id_614].datumLoc,
      __id_622 = __id_613[__id_614].datumName,
      __id_623 = __id_621.source + ":" + __id_621.start.line + ":" + __id_621.start.column;
    __id_622 ? __id_620 += "  at " + __id_622 + " (" + __id_623 + ")\n" : __id_620 += "  at " + __id_623 + "\n";
  }
  this.setProperty(e, "stack", __id_620.trim(), __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.createWorker = function() {
  var __id_624 = this.createWorker.blob_;
  return __id_624 || (__id_624 = new Blob([__id_332.WORKER_CODE.join("\n")], {
    type: "application/javascript"
  }), this.createWorker.blob_ = __id_624), new Worker(URL.createObjectURL(__id_624));
}, __id_332.prototype.vmCall = function(__id_625, __id_626, __id_627, __id_628) {
  var __id_629 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return __id_332.vm.runInNewContext(e, t, __id_629);
  } catch (__id_630) {
    n(null), this.throwException(this.ERROR, "RegExp Timeout: " + r);
  }
  return __id_332.REGEXP_TIMEOUT;
}, __id_332.prototype.maybeThrowRegExp = function(__id_631, __id_632) {
  var __id_633;
  if (0 === this.REGEXP_MODE) __id_633 = !1;
  else if (1 === this.REGEXP_MODE) __id_633 = !0;
  else if (__id_332.vm) __id_633 = !0;
  else if ("function" == typeof Worker && "function" == typeof URL) __id_633 = !0;
  else if ("function" == typeof require) {
    try {
      __id_332.vm = require("vm");
    } catch (__id_634) {}
    __id_633 = !!__id_332.vm;
  } else __id_633 = !1;
  __id_633 || (t(null), this.throwException(this.ERROR, "Regular expressions not supported: " + e));
}, __id_332.prototype.regExpTimeout = function(__id_635, __id_636, __id_637) {
  var __id_638 = this;
  return setTimeout(function() {
    t.terminate(), r(null);
    try {
      __id_638.throwException(__id_638.ERROR, "RegExp Timeout: " + e);
    } catch (__id_639) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, __id_332.prototype.createObject = function(__id_640) {
  return this.createObjectProto(e && e.properties.prototype);
}, __id_332.prototype.createObjectProto = function(__id_641) {
  if ("object" != typeof e) throw Error("Non object prototype");
  var __id_642 = new __id_332.Object(e);
  return this.isa(__id_642, this.ERROR) && (__id_642.class = "Error"), __id_642;
}, __id_332.prototype.createArray = function() {
  var __id_643 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(__id_643, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), __id_643.class = "Array", __id_643;
}, __id_332.prototype.createFunctionBase_ = function(__id_644, __id_645) {
  var __id_646 = this.createObjectProto(this.FUNCTION_PROTO);
  if (t) {
    var __id_647 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(__id_646, "prototype", __id_647, __id_332.NONENUMERABLE_DESCRIPTOR), this.setProperty(__id_647, "constructor", __id_646, __id_332.NONENUMERABLE_DESCRIPTOR);
  } else __id_646.illegalConstructor = !0;
  return this.setProperty(__id_646, "length", e, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), __id_646.class = "Function", __id_646;
}, __id_332.prototype.createFunction = function(__id_648, __id_649, __id_650) {
  var __id_651 = this.createFunctionBase_(e.params.length, !0);
  __id_651.parentScope = t, __id_651.node = e;
  var __id_652 = e.id ? String(e.id.name) : r || "";
  return this.setProperty(__id_651, "name", __id_652, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), __id_651;
}, __id_332.prototype.createNativeFunction = function(__id_653, __id_654) {
  var __id_655 = this.createFunctionBase_(e.length, t);
  return __id_655.nativeFunc = e, e.id = this.functionCounter_++, this.setProperty(__id_655, "name", e.name, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), __id_655;
}, __id_332.prototype.createAsyncFunction = function(__id_656) {
  var __id_657 = this.createFunctionBase_(e.length, !0);
  return __id_657.asyncFunc = e, e.id = this.functionCounter_++, this.setProperty(__id_657, "name", e.name, __id_332.READONLY_NONENUMERABLE_DESCRIPTOR), __id_657;
}, __id_332.prototype.nativeToPseudo = function(__id_658, __id_659) {
  if (null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e) return e;
  if (e instanceof __id_332.Object) throw Error("Object is already pseudo");
  var __id_660,
    __id_661,
    __id_662 = t || {
      pseudo: [],
      native: []
    },
    __id_663 = __id_662.native.indexOf(e);
  if (-1 !== __id_663) return __id_662.pseudo[__id_663];
  if (__id_662.native.push(e), e instanceof RegExp) {
    var __id_664 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(__id_664, e), __id_662.pseudo.push(__id_664), __id_664;
  }
  if (e instanceof Date) {
    var __id_665 = this.createObjectProto(this.DATE_PROTO);
    return __id_665.data = new Date(e.valueOf()), __id_662.pseudo.push(__id_665), __id_665;
  }
  if (e instanceof Number ? __id_660 = this.createObject(this.NUMBER) : e instanceof String ? __id_660 = this.createObject(this.STRING) : e instanceof Boolean && (__id_660 = this.createObject(this.BOOLEAN)), __id_660) return __id_660.data = e.valueOf(), __id_662.pseudo.push(__id_660), __id_660;
  if ("function" == typeof e) {
    var __id_666 = this,
      __id_667 = function() {
        var __id_668 = Array.prototype.slice.call(arguments).map(function(__id_669) {
            return __id_666.pseudoToNative(e);
          }),
          __id_670 = e.apply(__id_666, __id_668);
        return __id_666.nativeToPseudo(__id_670);
      },
      __id_671 = Object.getOwnPropertyDescriptor(e, "prototype"),
      __id_672 = this.createNativeFunction(__id_667, !!__id_671);
    return __id_662.pseudo.push(__id_672), __id_672;
  }
  for (var __id_673 in __id_661 = Array.isArray(e) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), __id_662.pseudo.push(__id_661), e) this.setProperty(__id_661, __id_673, this.nativeToPseudo(e[__id_673], __id_662));
  return __id_661;
}, __id_332.prototype.pseudoToNative = function(__id_674, __id_675) {
  if (null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e) return e;
  if (!(e instanceof __id_332.Object)) throw Error("Object is not pseudo");
  var __id_676,
    __id_677 = t || {
      pseudo: [],
      native: []
    },
    __id_678 = __id_677.pseudo.indexOf(e);
  if (-1 !== __id_678) return __id_677.native[__id_678];
  if (__id_677.pseudo.push(e), this.isa(e, this.REGEXP)) {
    var __id_679 = RegExp(e.data.source, e.data.flags);
    return __id_679.lastIndex = e.data.lastIndex, __id_677.native.push(__id_679), __id_679;
  }
  if (this.isa(e, this.DATE)) {
    var __id_680 = new Date(e.data.valueOf());
    return __id_677.native.push(__id_680), __id_680;
  }
  if (this.isa(e, this.NUMBER) || this.isa(e, this.STRING) || this.isa(e, this.BOOLEAN)) {
    var __id_681 = Object(e.data);
    return __id_677.native.push(__id_681), __id_681;
  }
  var __id_682 = this.isa(e, this.ARRAY) ? [] : {};
  for (var __id_683 in __id_677.native.push(__id_682), e.properties) __id_676 = this.pseudoToNative(e.properties[__id_683], __id_677), Object.defineProperty(__id_682, __id_683, {
    value: __id_676,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
  return __id_682;
}, __id_332.prototype.getPrototype = function(__id_684) {
  switch (typeof e) {
    case "number":
      return this.NUMBER.properties.prototype;
    case "boolean":
      return this.BOOLEAN.properties.prototype;
    case "string":
      return this.STRING.properties.prototype;
  }
  return e ? e.proto : null;
}, __id_332.prototype.getProperty = function(__id_685, __id_686) {
  if (this.getterStep_) throw Error("Getter not supported in that context");
  if (t = String(t), null == e && this.throwException(this.TYPE_ERROR, "Cannot read property '" + t + "' of " + e), "object" == typeof e && !(e instanceof __id_332.Object)) throw TypeError("Expecting native value or pseudo object");
  if ("length" === t) {
    if (this.isa(e, this.STRING)) return String(e).length;
  } else if (64 > t.charCodeAt(0) && this.isa(e, this.STRING)) {
    var __id_687 = __id_332.legalArrayIndex(t);
    if (!isNaN(__id_687) && __id_687 < String(e).length) return String(e)[__id_687];
  }
  do
    if (e.properties && t in e.properties) {
      var __id_688 = e.getter[t];
      if (__id_688) return this.getterStep_ = !0, __id_688;
      return e.properties[t];
    } while (e = this.getPrototype(e));
}, __id_332.prototype.hasProperty = function(__id_689, __id_690) {
  if (!(e instanceof __id_332.Object)) throw TypeError("Primitive data type has no properties");
  if ("length" === (t = String(t)) && this.isa(e, this.STRING)) return !0;
  if (this.isa(e, this.STRING)) {
    var __id_691 = __id_332.legalArrayIndex(t);
    if (!isNaN(__id_691) && __id_691 < String(e).length) return !0;
  }
  do
    if (e.properties && t in e.properties) return !0; while (e = this.getPrototype(e));
  return !1;
}, __id_332.prototype.setProperty = function(__id_692, __id_693, __id_694, __id_695) {
  if (this.setterStep_) throw Error("Setter not supported in that context");
  if (t = String(t), null == e && this.throwException(this.TYPE_ERROR, "Cannot set property '" + t + "' of " + e), "object" == typeof e && !(e instanceof __id_332.Object)) throw TypeError("Expecting native value or pseudo object");
  n && ("get" in n || "set" in n) && ("value" in n || "writable" in n) && this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  var __id_696 = !this.stateStack || this.getScope().strict;
  if (!(e instanceof __id_332.Object)) {
    __id_696 && this.throwException(this.TYPE_ERROR, "Can't create property '" + t + "' on '" + e + "'");
    return;
  }
  if (this.isa(e, this.STRING)) {
    var __id_697 = __id_332.legalArrayIndex(t);
    if ("length" === t || !isNaN(__id_697) && __id_697 < String(e).length) {
      __id_696 && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + t + "' of String '" + e.data + "'");
      return;
    }
  }
  if ("Array" === e.class) {
    var __id_698,
      __id_699 = e.properties.length;
    if ("length" === t) {
      if (n) {
        if (!("value" in n)) return;
        r = n.value;
      }
      if (isNaN(r = __id_332.legalArrayLength(r)) && this.throwException(this.RANGE_ERROR, "Invalid array length"), r < __id_699)
        for (__id_698 in e.properties) !isNaN(__id_698 = __id_332.legalArrayIndex(__id_698)) && r <= __id_698 && delete e.properties[__id_698];
    } else isNaN(__id_698 = __id_332.legalArrayIndex(t)) || (e.properties.length = Math.max(__id_699, __id_698 + 1));
  }
  if (e.preventExtensions && !(t in e.properties)) {
    __id_696 && this.throwException(this.TYPE_ERROR, "Can't add property '" + t + "', object is not extensible");
    return;
  }
  if (n) {
    var __id_700 = {};
    "get" in n && n.get && (e.getter[t] = n.get, __id_700.get = this.setProperty.placeholderGet_), "set" in n && n.set && (e.setter[t] = n.set, __id_700.set = this.setProperty.placeholderSet_), "configurable" in n && (__id_700.configurable = n.configurable), "enumerable" in n && (__id_700.enumerable = n.enumerable), "writable" in n && (__id_700.writable = n.writable, delete e.getter[t], delete e.setter[t]), "value" in n ? (__id_700.value = n.value, delete e.getter[t], delete e.setter[t]) : r !== __id_332.VALUE_IN_DESCRIPTOR && (__id_700.value = r, delete e.getter[t], delete e.setter[t]);
    try {
      Object.defineProperty(e.properties, t, __id_700);
    } catch (__id_701) {
      this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + t);
    }
    "get" in n && !n.get && delete e.getter[t], "set" in n && !n.set && delete e.setter[t];
  } else {
    if (r === __id_332.VALUE_IN_DESCRIPTOR) throw ReferenceError("Value not specified");
    for (var __id_702 = e; !(t in __id_702.properties);)
      if (!(__id_702 = this.getPrototype(__id_702))) {
        __id_702 = e;
        break;
      }
    if (__id_702.setter && __id_702.setter[t]) return this.setterStep_ = !0, __id_702.setter[t];
    if (__id_702.getter && __id_702.getter[t]) __id_696 && this.throwException(this.TYPE_ERROR, "Cannot set property '" + t + "' of object '" + e + "' which only has a getter");
    else try {
      e.properties[t] = r;
    } catch (__id_703) {
      __id_696 && this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + t + "' of object '" + e + "'");
    }
  }
}, __id_332.prototype.setProperty.placeholderGet_ = function() {
  throw Error("Placeholder getter");
}, __id_332.prototype.setProperty.placeholderSet_ = function() {
  throw Error("Placeholder setter");
}, __id_332.prototype.setNativeFunctionPrototype = function(__id_704, __id_705, __id_706) {
  this.setProperty(e.properties.prototype, t, this.createNativeFunction(r, !1), __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.setAsyncFunctionPrototype = function(__id_707, __id_708, __id_709) {
  this.setProperty(e.properties.prototype, t, this.createAsyncFunction(r), __id_332.NONENUMERABLE_DESCRIPTOR);
}, __id_332.prototype.getScope = function() {
  var __id_710 = this.stateStack[this.stateStack.length - 1].scope;
  if (!__id_710) throw Error("No scope found");
  return __id_710;
}, __id_332.prototype.createScope = function(__id_711, __id_712) {
  var __id_713 = !1;
  if (t && t.strict) __id_713 = !0;
  else {
    var __id_714 = e.body && e.body[0];
    __id_714 && __id_714.expression && "Literal" === __id_714.expression.type && "use strict" === __id_714.expression.value && (__id_713 = !0);
  }
  var __id_715 = this.createObjectProto(null),
    __id_716 = new __id_332.Scope(t, __id_713, __id_715);
  return t || this.initGlobal(__id_716.object), this.populateScope_(e, __id_716), __id_716;
}, __id_332.prototype.createSpecialScope = function(__id_717, __id_718) {
  if (!e) throw Error("parentScope required");
  var __id_719 = t || this.createObjectProto(null);
  return new __id_332.Scope(e, e.strict, __id_719);
}, __id_332.prototype.getValueFromScope = function(__id_720) {
  for (var __id_721 = this.getScope(); __id_721 && __id_721 !== this.globalScope;) {
    if (e in __id_721.object.properties) return __id_721.object.properties[e];
    __id_721 = __id_721.parentScope;
  }
  if (__id_721 === this.globalScope && this.hasProperty(__id_721.object, e)) return this.getProperty(__id_721.object, e);
  var __id_722 = this.stateStack[this.stateStack.length - 1].node;
  ("UnaryExpression" !== __id_722.type || "typeof" !== __id_722.operator) && this.throwException(this.REFERENCE_ERROR, e + " is not defined");
}, __id_332.prototype.setValueToScope = function(__id_723, __id_724) {
  for (var __id_725 = this.getScope(), __id_726 = __id_725.strict; __id_725 && __id_725 !== this.globalScope;) {
    if (e in __id_725.object.properties) {
      try {
        __id_725.object.properties[e] = t;
      } catch (__id_727) {
        __id_726 && this.throwException(this.TYPE_ERROR, "Cannot assign to read only variable '" + e + "'");
      }
      return;
    }
    __id_725 = __id_725.parentScope;
  }
  if (__id_725 === this.globalScope && (!__id_726 || this.hasProperty(__id_725.object, e))) return this.setProperty(__id_725.object, e, t);
  this.throwException(this.REFERENCE_ERROR, e + " is not defined");
}, __id_332.prototype.populateScope_ = function(__id_728, __id_729) {
  var __id_730;
  if (e.variableCache_) __id_730 = e.variableCache_;
  else {
    switch (__id_730 = Object.create(null), e.type) {
      case "VariableDeclaration":
        for (var __id_731 = 0; __id_731 < e.declarations.length; __id_731++) __id_730[e.declarations[__id_731].id.name] = !0;
        break;
      case "FunctionDeclaration":
        __id_730[e.id.name] = e;
        break;
      case "BlockStatement":
      case "CatchClause":
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "Program":
      case "SwitchCase":
      case "SwitchStatement":
      case "TryStatement":
      case "WithStatement":
      case "WhileStatement":
        var __id_732 = e.constructor;
        for (var __id_733 in e)
          if (e[__id_733] !== e.loc) {
            var __id_734,
              __id_735 = e[__id_733];
            if (__id_735 && "object" == typeof __id_735) {
              if (Array.isArray(__id_735)) {
                for (var __id_731 = 0; __id_731 < __id_735.length; __id_731++)
                  if (__id_735[__id_731] && __id_735[__id_731].constructor === __id_732)
                    for (var __id_733 in __id_734 = this.populateScope_(__id_735[__id_731], t)) __id_730[__id_733] = __id_734[__id_733];
              } else if (__id_735.constructor === __id_732)
                for (var __id_733 in __id_734 = this.populateScope_(__id_735, t)) __id_730[__id_733] = __id_734[__id_733];
            }
          }
    }
    e.variableCache_ = __id_730;
  }
  for (var __id_733 in __id_730) !0 === __id_730[__id_733] ? this.setProperty(t.object, __id_733, void 0, __id_332.VARIABLE_DESCRIPTOR) : this.setProperty(t.object, __id_733, this.createFunction(__id_730[__id_733], t), __id_332.VARIABLE_DESCRIPTOR);
  return __id_730;
}, __id_332.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, __id_332.prototype.getValue = function(__id_736) {
  return e[0] === __id_332.SCOPE_REFERENCE ? this.getValueFromScope(e[1]) : this.getProperty(e[0], e[1]);
}, __id_332.prototype.setValue = function(__id_737, __id_738) {
  return e[0] === __id_332.SCOPE_REFERENCE ? this.setValueToScope(e[1], t) : this.setProperty(e[0], e[1], t);
}, __id_332.prototype.throwException = function(__id_739, __id_740) {
  if (!this.globalScope) throw void 0 === t ? e : t;
  if (void 0 !== t && e instanceof __id_332.Object) {
    var __id_741 = this.createObject(e);
    this.populateError(__id_741, t);
  } else var __id_741 = e;
  throw this.unwind(__id_332.Completion.THROW, __id_741, void 0), __id_332.STEP_ERROR;
}, __id_332.prototype.unwind = function(__id_742, __id_743, __id_744) {
  if (e === __id_332.Completion.NORMAL) throw TypeError("Should not unwind for NORMAL completions");
  loop: for (var __id_745, __id_746 = this.stateStack; __id_746.length > 0; __id_746.pop()) {
    var __id_747 = __id_746[__id_746.length - 1];
    switch (__id_747.node.type) {
      case "TryStatement":
        __id_747.cv = {
          type: e,
          value: t,
          label: r
        };
        return;
      case "CallExpression":
      case "NewExpression":
        if (e === __id_332.Completion.RETURN) {
          __id_747.value = t;
          return;
        }
        if (e === __id_332.Completion.BREAK || e === __id_332.Completion.CONTINUE) throw Error("Unsyntactic break/continue not rejected by Acorn");
        break;
      case "Program":
        if (e === __id_332.Completion.RETURN) return;
        __id_747.done = !0;
        break loop;
    }
    if (e === __id_332.Completion.BREAK) {
      if (r ? __id_747.labels && -1 !== __id_747.labels.indexOf(r) : __id_747.isLoop || __id_747.isSwitch) {
        __id_746.pop();
        return;
      }
    } else if (e === __id_332.Completion.CONTINUE && (r ? __id_747.labels && -1 !== __id_747.labels.indexOf(r) : __id_747.isLoop)) return;
  }
  if (this.isa(t, this.ERROR)) {
    var __id_748 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      __id_749 = String(this.getProperty(t, "name")),
      __id_750 = this.getProperty(t, "message").valueOf();
    (__id_745 = (__id_748[__id_749] || Error)(__id_750)).stack = String(this.getProperty(t, "stack"));
  } else __id_745 = String(t);
  throw this.value = __id_745, __id_745;
}, __id_332.prototype.nodeSummary = function(__id_751) {
  switch (e.type) {
    case "ArrayExpression":
      return "[...]";
    case "BinaryExpression":
    case "LogicalExpression":
      return this.nodeSummary(e.left) + " " + e.operator + " " + this.nodeSummary(e.right);
    case "CallExpression":
      return this.nodeSummary(e.callee) + "(...)";
    case "ConditionalExpression":
      return this.nodeSummary(e.test) + " ? " + this.nodeSummary(e.consequent) + " : " + this.nodeSummary(e.alternate);
    case "Identifier":
      return e.name;
    case "Literal":
      return e.raw;
    case "MemberExpression":
      var __id_752 = this.nodeSummary(e.object),
        __id_753 = this.nodeSummary(e.property);
      return e.computed ? __id_752 + "[" + __id_753 + "]" : __id_752 + "." + __id_753;
    case "NewExpression":
      return "new " + this.nodeSummary(e.callee) + "(...)";
    case "ObjectExpression":
      return "{...}";
    case "ThisExpression":
      return "this";
    case "UnaryExpression":
      return e.operator + " " + this.nodeSummary(e.argument);
    case "UpdateExpression":
      var __id_754 = this.nodeSummary(e.argument);
      return e.prefix ? e.operator + __id_754 : __id_754 + e.operator;
  }
  return "???";
}, __id_332.prototype.createTask_ = function(__id_755, __id_756) {
  var __id_757,
    __id_758,
    __id_759,
    __id_760 = this.stateStack[this.stateStack.length - 1],
    __id_761 = Array.from(t),
    __id_762 = __id_761.shift(),
    __id_763 = Math.max(Number(__id_761.shift() || 0), 0),
    __id_764 = this.newNode();
  if (__id_762 instanceof __id_332.Object && "Function" === __id_762.class) __id_758 = __id_762, __id_764.type = "CallExpression", __id_757 = __id_760.scope;
  else {
    try {
      __id_759 = this.parse_(String(__id_762), "taskCode" + this.taskCodeNumber_++);
    } catch (__id_765) {
      this.throwException(this.SYNTAX_ERROR, "Invalid code: " + c.message);
    }
    __id_764.type = "EvalProgram_", __id_764.body = __id_759.body;
    var __id_766 = __id_760.node.arguments[0],
      __id_767 = __id_766 ? __id_766.start : void 0,
      __id_768 = __id_766 ? __id_766.end : void 0;
    __id_332.stripLocations_(__id_764, __id_767, __id_768), __id_757 = this.globalScope, __id_761.length = 0;
  }
  var __id_769 = new __id_332.Task(__id_758, __id_761, __id_757, __id_764, e ? __id_763 : -1);
  return this.scheduleTask_(__id_769, __id_763), __id_769.pid;
}, __id_332.prototype.scheduleTask_ = function(__id_770, __id_771) {
  e.time = Date.now() + t, this.tasks.push(e), this.tasks.sort(function(__id_772, __id_773) {
    return e.time - t.time;
  });
}, __id_332.prototype.deleteTask_ = function(__id_774) {
  for (var __id_775 = 0; __id_775 < this.tasks.length; __id_775++)
    if (this.tasks[__id_775].pid == e) {
      this.tasks.splice(__id_775, 1);
      break;
    }
}, __id_332.prototype.nextTask_ = function() {
  var __id_776 = this.tasks[0];
  if (!__id_776 || __id_776.time > Date.now()) return null;
  this.tasks.shift(), __id_776.interval >= 0 && this.scheduleTask_(__id_776, __id_776.interval);
  var __id_777 = new __id_332.State(__id_776.node, __id_776.scope);
  return __id_776.functionRef && (__id_777.doneCallee_ = 2, __id_777.funcThis_ = this.globalObject, __id_777.func_ = __id_776.functionRef, __id_777.doneArgs_ = !0, __id_777.arguments_ = __id_776.argsArray), __id_777;
}, __id_332.prototype.createGetter_ = function(__id_778, __id_779) {
  if (!this.getterStep_) throw Error("Unexpected call to createGetter");
  this.getterStep_ = !1;
  var __id_780 = Array.isArray(t) ? t[0] : t,
    __id_781 = this.newNode();
  __id_781.type = "CallExpression";
  var __id_782 = new __id_332.State(__id_781, this.stateStack[this.stateStack.length - 1].scope);
  return __id_782.doneCallee_ = 2, __id_782.funcThis_ = __id_780, __id_782.func_ = e, __id_782.doneArgs_ = !0, __id_782.arguments_ = [], __id_782;
}, __id_332.prototype.createSetter_ = function(__id_783, __id_784, __id_785) {
  if (!this.setterStep_) throw Error("Unexpected call to createSetter");
  this.setterStep_ = !1;
  var __id_786 = Array.isArray(t) ? t[0] : this.globalObject,
    __id_787 = this.newNode();
  __id_787.type = "CallExpression";
  var __id_788 = new __id_332.State(__id_787, this.stateStack[this.stateStack.length - 1].scope);
  return __id_788.doneCallee_ = 2, __id_788.funcThis_ = __id_786, __id_788.func_ = e, __id_788.doneArgs_ = !0, __id_788.arguments_ = [r], __id_788;
}, __id_332.prototype.boxThis_ = function(__id_789) {
  if (null == e) return this.globalObject;
  if (!(e instanceof __id_332.Object)) {
    var __id_790 = this.createObjectProto(this.getPrototype(e));
    return __id_790.data = e, __id_790;
  }
  return e;
}, __id_332.prototype.getGlobalScope = function() {
  return this.globalScope;
}, __id_332.prototype.setGlobalScope = function(__id_791) {
  this.globalScope = e, this.stateStack[0].scope = e;
}, __id_332.prototype.getStateStack = function() {
  return this.stateStack;
}, __id_332.prototype.setStateStack = function(__id_792) {
  this.stateStack = e;
}, __id_332.Value, __id_332.State = function(__id_793, __id_794) {
  this.node = e, this.scope = t;
}, __id_332.Scope = function(__id_795, __id_796, __id_797) {
  this.parentScope = e, this.strict = t, this.object = r;
}, __id_332.Object = function(__id_798) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = e;
}, __id_332.Object.prototype.proto = null, __id_332.Object.prototype.class = "Object", __id_332.Object.prototype.data = null, __id_332.Object.prototype.toString = function() {
  if (!__id_332.currentInterpreter_) return "[object Interpreter.Object]";
  if (!(this instanceof __id_332.Object)) return String(this);
  if ("Array" === this.class) {
    var __id_799 = __id_332.toStringCycles_;
    __id_799.push(this);
    try {
      var __id_800 = [],
        __id_801 = this.properties.length,
        __id_802 = !1;
      __id_801 > 1024 && (__id_801 = 1e3, __id_802 = !0);
      for (var __id_803 = 0; __id_803 < __id_801; __id_803++) {
        var __id_804 = this.properties[__id_803];
        __id_800[__id_803] = __id_804 instanceof __id_332.Object && -1 !== __id_799.indexOf(__id_804) ? "..." : __id_804;
      }
      __id_802 && __id_800.push("...");
    } finally {
      __id_799.pop();
    }
    return __id_800.join(",");
  }
  if ("Error" === this.class) {
    var __id_805,
      __id_806,
      __id_799 = __id_332.toStringCycles_;
    if (-1 !== __id_799.indexOf(this)) return "[object Error]";
    var __id_807 = this;
    do
      if ("name" in __id_807.properties) {
        __id_805 = __id_807.properties.name;
        break;
      } while (__id_807 = __id_807.proto);
    __id_807 = this;
    do
      if ("message" in __id_807.properties) {
        __id_806 = __id_807.properties.message;
        break;
      } while (__id_807 = __id_807.proto);
    __id_799.push(this);
    try {
      __id_805 = __id_805 && String(__id_805), __id_806 = __id_806 && String(__id_806);
    } finally {
      __id_799.pop();
    }
    return __id_806 ? __id_805 + ": " + __id_806 : String(__id_805);
  }
  return null !== this.data ? String(this.data) : "[object " + this.class + "]";
}, __id_332.Object.prototype.valueOf = function() {
  return !__id_332.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, __id_332.Task = function(__id_808, __id_809, __id_810, __id_811, __id_812) {
  this.functionRef = e, this.argsArray = t, this.scope = r, this.node = n, this.interval = o, this.pid = ++__id_332.Task.pid, this.time = 0;
}, __id_332.Task.pid = 0, __id_332.prototype.stepArrayExpression = function(__id_813, __id_814, __id_815) {
  var __id_816 = r.elements,
    __id_817 = t.n_ || 0;
  for (t.array_ ? (this.setProperty(t.array_, __id_817, t.value), __id_817++) : (t.array_ = this.createArray(), t.array_.properties.length = __id_816.length); __id_817 < __id_816.length;) {
    if (__id_816[__id_817]) return t.n_ = __id_817, new __id_332.State(__id_816[__id_817], t.scope);
    __id_817++;
  }
  e.pop(), e[e.length - 1].value = t.array_;
}, __id_332.prototype.stepAssignmentExpression = function(__id_818, __id_819, __id_820) {
  if (!t.doneLeft_) {
    t.doneLeft_ = !0;
    var __id_821 = new __id_332.State(r.left, t.scope);
    return __id_821.components = !0, __id_821;
  }
  if (!t.doneRight_) {
    if (t.leftReference_ || (t.leftReference_ = t.value), t.doneGetter_ && (t.leftValue_ = t.value), !t.doneGetter_ && "=" !== r.operator) {
      var __id_822 = this.getValue(t.leftReference_);
      if (t.leftValue_ = __id_822, this.getterStep_) return t.doneGetter_ = !0, this.createGetter_(__id_822, t.leftReference_);
    }
    return t.doneRight_ = !0, "=" === r.operator && "Identifier" === r.left.type && (t.destinationName = r.left.name), new __id_332.State(r.right, t.scope);
  }
  if (t.doneSetter_) {
    e.pop(), e[e.length - 1].value = t.setterValue_;
    return;
  }
  var __id_823 = t.leftValue_,
    __id_824 = t.value;
  switch (r.operator) {
    case "=":
      __id_823 = __id_824;
      break;
    case "+=":
      __id_823 += __id_824;
      break;
    case "-=":
      __id_823 -= __id_824;
      break;
    case "*=":
      __id_823 *= __id_824;
      break;
    case "/=":
      __id_823 /= __id_824;
      break;
    case "%=":
      __id_823 %= __id_824;
      break;
    case "<<=":
      __id_823 <<= __id_824;
      break;
    case ">>=":
      __id_823 >>= __id_824;
      break;
    case ">>>=":
      __id_823 >>>= __id_824;
      break;
    case "&=":
      __id_823 &= __id_824;
      break;
    case "^=":
      __id_823 ^= __id_824;
      break;
    case "|=":
      __id_823 |= __id_824;
      break;
    default:
      throw SyntaxError("Unknown assignment expression: " + r.operator);
  }
  var __id_825 = this.setValue(t.leftReference_, __id_823);
  if (__id_825) return t.doneSetter_ = !0, t.setterValue_ = __id_823, this.createSetter_(__id_825, t.leftReference_, __id_823);
  e.pop(), e[e.length - 1].value = __id_823;
}, __id_332.prototype.stepBinaryExpression = function(__id_826, __id_827, __id_828) {
  if (!t.doneLeft_) return t.doneLeft_ = !0, new __id_332.State(r.left, t.scope);
  if (!t.doneRight_) return t.doneRight_ = !0, t.leftValue_ = t.value, new __id_332.State(r.right, t.scope);
  e.pop();
  var __id_829,
    __id_830 = t.leftValue_,
    __id_831 = t.value;
  switch (r.operator) {
    case "==":
      __id_829 = __id_830 == __id_831;
      break;
    case "!=":
      __id_829 = __id_830 != __id_831;
      break;
    case "===":
      __id_829 = __id_830 === __id_831;
      break;
    case "!==":
      __id_829 = __id_830 !== __id_831;
      break;
    case ">":
      __id_829 = __id_830 > __id_831;
      break;
    case ">=":
      __id_829 = __id_830 >= __id_831;
      break;
    case "<":
      __id_829 = __id_830 < __id_831;
      break;
    case "<=":
      __id_829 = __id_830 <= __id_831;
      break;
    case "+":
      __id_829 = __id_830 + __id_831;
      break;
    case "-":
      __id_829 = __id_830 - __id_831;
      break;
    case "*":
      __id_829 = __id_830 * __id_831;
      break;
    case "/":
      __id_829 = __id_830 / __id_831;
      break;
    case "%":
      __id_829 = __id_830 % __id_831;
      break;
    case "&":
      __id_829 = __id_830 & __id_831;
      break;
    case "|":
      __id_829 = __id_830 | __id_831;
      break;
    case "^":
      __id_829 = __id_830 ^ __id_831;
      break;
    case "<<":
      __id_829 = __id_830 << __id_831;
      break;
    case ">>":
      __id_829 = __id_830 >> __id_831;
      break;
    case ">>>":
      __id_829 = __id_830 >>> __id_831;
      break;
    case "in":
      __id_831 instanceof __id_332.Object || this.throwException(this.TYPE_ERROR, "'in' expects an object, not '" + __id_831 + "'"), __id_829 = this.hasProperty(__id_831, __id_830);
      break;
    case "instanceof":
      this.isa(__id_831, this.FUNCTION) || this.throwException(this.TYPE_ERROR, "'instanceof' expects an object, not '" + __id_831 + "'"), __id_829 = __id_830 instanceof __id_332.Object && this.isa(__id_830, __id_831);
      break;
    default:
      throw SyntaxError("Unknown binary operator: " + r.operator);
  }
  e[e.length - 1].value = __id_829;
}, __id_332.prototype.stepBlockStatement = function(__id_832, __id_833, __id_834) {
  var __id_835 = t.n_ || 0,
    __id_836 = r.body[__id_835];
  if (__id_836) return t.n_ = __id_835 + 1, new __id_332.State(__id_836, t.scope);
  e.pop();
}, __id_332.prototype.stepBreakStatement = function(__id_837, __id_838, __id_839) {
  var __id_840 = r.label && r.label.name;
  this.unwind(__id_332.Completion.BREAK, void 0, __id_840);
}, __id_332.prototype.evalCodeNumber_ = 0, __id_332.prototype.stepCallExpression = function(__id_841, __id_842, __id_843) {
  if (!t.doneCallee_) {
    t.doneCallee_ = 1;
    var __id_844 = new __id_332.State(r.callee, t.scope);
    return __id_844.components = !0, __id_844;
  }
  if (1 === t.doneCallee_) {
    t.doneCallee_ = 2;
    var __id_845 = t.value;
    if (Array.isArray(__id_845)) {
      if (t.func_ = this.getValue(__id_845), __id_845[0] === __id_332.SCOPE_REFERENCE ? t.directEval_ = "eval" === __id_845[1] : t.funcThis_ = __id_845[0], __id_845 = t.func_, this.getterStep_) return t.doneCallee_ = 1, this.createGetter_(__id_845, t.value);
    } else t.func_ = __id_845;
    t.arguments_ = [], t.n_ = 0;
  }
  var __id_845 = t.func_;
  if (!t.doneArgs_) {
    if (0 !== t.n_ && t.arguments_.push(t.value), r.arguments[t.n_]) return new __id_332.State(r.arguments[t.n_++], t.scope);
    if ("NewExpression" === r.type) {
      if (__id_845 instanceof __id_332.Object && !__id_845.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(r.callee) + " is not a constructor"), __id_845 === this.ARRAY) t.funcThis_ = this.createArray();
      else {
        var __id_846 = __id_845.properties.prototype;
        ("object" != typeof __id_846 || null === __id_846) && (__id_846 = this.OBJECT_PROTO), t.funcThis_ = this.createObjectProto(__id_846);
      }
      t.isConstructor = !0;
    }
    t.doneArgs_ = !0;
  }
  if (t.doneExec_) e.pop(), t.isConstructor && "object" != typeof t.value ? e[e.length - 1].value = t.funcThis_ : e[e.length - 1].value = t.value;
  else {
    t.doneExec_ = !0, __id_845 instanceof __id_332.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(r.callee) + " is not a function");
    var __id_847 = __id_845.node;
    if (__id_847) {
      for (var __id_848 = this.createScope(__id_847.body, __id_845.parentScope), __id_849 = this.createArray(), __id_850 = 0; __id_850 < t.arguments_.length; __id_850++) this.setProperty(__id_849, __id_850, t.arguments_[__id_850]);
      this.setProperty(__id_848.object, "arguments", __id_849);
      for (var __id_850 = 0; __id_850 < __id_847.params.length; __id_850++) {
        var __id_851 = __id_847.params[__id_850].name,
          __id_852 = t.arguments_.length > __id_850 ? t.arguments_[__id_850] : void 0;
        this.setProperty(__id_848.object, __id_851, __id_852);
      }
      return __id_848.strict || (t.funcThis_ = this.boxThis_(t.funcThis_)), this.setProperty(__id_848.object, "this", t.funcThis_, __id_332.READONLY_DESCRIPTOR), t.value = void 0, new __id_332.State(__id_847.body, __id_848);
    }
    if (__id_845.eval) {
      var __id_853 = t.arguments_[0];
      if ("string" != typeof __id_853) t.value = __id_853;
      else {
        try {
          var __id_854 = this.parse_(String(__id_853), "eval" + this.evalCodeNumber_++);
        } catch (__id_855) {
          this.throwException(this.SYNTAX_ERROR, "Invalid code: " + d.message);
        }
        var __id_856 = this.newNode();
        __id_856.type = "EvalProgram_", __id_856.body = __id_854.body, __id_332.stripLocations_(__id_856, r.start, r.end);
        var __id_848 = t.directEval_ ? t.scope : this.globalScope;
        return __id_848.strict ? __id_848 = this.createScope(__id_854, __id_848) : this.populateScope_(__id_854, __id_848), this.value = void 0, new __id_332.State(__id_856, __id_848);
      }
    } else if (__id_845.nativeFunc) t.scope.strict || (t.funcThis_ = this.boxThis_(t.funcThis_)), t.value = __id_845.nativeFunc.apply(t.funcThis_, t.arguments_);
    else if (__id_845.asyncFunc) {
      var __id_857 = this,
        __id_858 = function(__id_859) {
          t.value = e, __id_857.paused_ = !1;
        },
        __id_860 = __id_845.asyncFunc.length - 1,
        __id_861 = t.arguments_.concat(Array(__id_860)).slice(0, __id_860);
      __id_861.push(__id_858), this.paused_ = !0, t.scope.strict || (t.funcThis_ = this.boxThis_(t.funcThis_)), __id_845.asyncFunc.apply(t.funcThis_, __id_861);
      return;
    } else this.throwException(this.TYPE_ERROR, this.nodeSummary(r.callee) + " is not callable");
  }
}, __id_332.prototype.stepConditionalExpression = function(__id_862, __id_863, __id_864) {
  var __id_865 = t.mode_ || 0;
  if (0 === __id_865) return t.mode_ = 1, new __id_332.State(r.test, t.scope);
  if (1 === __id_865) {
    t.mode_ = 2;
    var __id_866 = Boolean(t.value);
    if (__id_866 && r.consequent) return new __id_332.State(r.consequent, t.scope);
    if (!__id_866 && r.alternate) return new __id_332.State(r.alternate, t.scope);
    this.value = void 0;
  }
  e.pop(), "ConditionalExpression" === r.type && (e[e.length - 1].value = t.value);
}, __id_332.prototype.stepContinueStatement = function(__id_867, __id_868, __id_869) {
  var __id_870 = r.label && r.label.name;
  this.unwind(__id_332.Completion.CONTINUE, void 0, __id_870);
}, __id_332.prototype.stepDebuggerStatement = function(__id_871, __id_872, __id_873) {
  e.pop();
}, __id_332.prototype.stepDoWhileStatement = function(__id_874, __id_875, __id_876) {
  if ("DoWhileStatement" === r.type && void 0 === t.test_ && (t.value = !0, t.test_ = !0), !t.test_) return t.test_ = !0, new __id_332.State(r.test, t.scope);
  if (t.value) {
    if (r.body) return t.test_ = !1, t.isLoop = !0, new __id_332.State(r.body, t.scope);
  } else e.pop();
}, __id_332.prototype.stepEmptyStatement = function(__id_877, __id_878, __id_879) {
  e.pop();
}, __id_332.prototype.stepEvalProgram_ = function(__id_880, __id_881, __id_882) {
  var __id_883 = t.n_ || 0,
    __id_884 = r.body[__id_883];
  if (__id_884) return t.n_ = __id_883 + 1, new __id_332.State(__id_884, t.scope);
  e.pop(), e[e.length - 1].value = this.value;
}, __id_332.prototype.stepExpressionStatement = function(__id_885, __id_886, __id_887) {
  if (!t.done_) return this.value = void 0, t.done_ = !0, new __id_332.State(r.expression, t.scope);
  e.pop(), this.value = t.value;
}, __id_332.prototype.stepForInStatement = function(__id_888, __id_889, __id_890) {
  if (!t.doneInit_ && (t.doneInit_ = !0, r.left.declarations && r.left.declarations[0].init)) return t.scope.strict && this.throwException(this.SYNTAX_ERROR, "for-in loop variable declaration may not have an initializer"), new __id_332.State(r.left, t.scope);
  if (!t.doneObject_) return t.doneObject_ = !0, t.variable_ || (t.variable_ = t.value), new __id_332.State(r.right, t.scope);
  if (t.isLoop || (t.isLoop = !0, t.object_ = t.value, t.visited_ = Object.create(null)), void 0 === t.name_) gotPropName: for (;;) {
    if (t.object_ instanceof __id_332.Object)
      for (t.props_ || (t.props_ = Object.getOwnPropertyNames(t.object_.properties));;) {
        var __id_891 = t.props_.shift();
        if (void 0 === __id_891) break;
        if (Object.prototype.hasOwnProperty.call(t.object_.properties, __id_891) && !t.visited_[__id_891]) {
          if (t.visited_[__id_891] = !0, Object.prototype.propertyIsEnumerable.call(t.object_.properties, __id_891)) {
            t.name_ = __id_891;
            break gotPropName;
          }
        }
      } else if (null !== t.object_ && void 0 !== t.object_)
        for (t.props_ || (t.props_ = Object.getOwnPropertyNames(t.object_));;) {
          var __id_891 = t.props_.shift();
          if (void 0 === __id_891) break;
          if (t.visited_[__id_891] = !0, Object.prototype.propertyIsEnumerable.call(t.object_, __id_891)) {
            t.name_ = __id_891;
            break gotPropName;
          }
        }
    if (t.object_ = this.getPrototype(t.object_), t.props_ = null, null === t.object_) {
      e.pop();
      return;
    }
  }
  if (!t.doneVariable_) {
    t.doneVariable_ = !0;
    var __id_892 = r.left;
    if ("VariableDeclaration" === __id_892.type) t.variable_ = [__id_332.SCOPE_REFERENCE, __id_892.declarations[0].id.name];
    else {
      t.variable_ = null;
      var __id_893 = new __id_332.State(__id_892, t.scope);
      return __id_893.components = !0, __id_893;
    }
  }
  if (t.variable_ || (t.variable_ = t.value), !t.doneSetter_) {
    t.doneSetter_ = !0;
    var __id_894 = t.name_,
      __id_895 = this.setValue(t.variable_, __id_894);
    if (__id_895) return this.createSetter_(__id_895, t.variable_, __id_894);
  }
  if (t.name_ = void 0, t.doneVariable_ = !1, t.doneSetter_ = !1, r.body) return new __id_332.State(r.body, t.scope);
}, __id_332.prototype.stepForStatement = function(__id_896, __id_897, __id_898) {
  switch (t.mode_) {
    default:
      if (t.mode_ = 1, r.init) return new __id_332.State(r.init, t.scope);
      break;
    case 1:
      if (t.mode_ = 2, r.test) return new __id_332.State(r.test, t.scope);
      break;
    case 2:
      if (t.mode_ = 3, !r.test || t.value) return t.isLoop = !0, new __id_332.State(r.body, t.scope);
      e.pop();
      break;
    case 3:
      if (t.mode_ = 1, r.update) return new __id_332.State(r.update, t.scope);
  }
}, __id_332.prototype.stepFunctionDeclaration = function(__id_899, __id_900, __id_901) {
  e.pop();
}, __id_332.prototype.stepFunctionExpression = function(__id_902, __id_903, __id_904) {
  e.pop();
  var __id_905 = (t = e[e.length - 1]).scope;
  r.id && (__id_905 = this.createSpecialScope(__id_905)), t.value = this.createFunction(r, __id_905, t.destinationName), r.id && this.setProperty(__id_905.object, r.id.name, t.value, __id_332.READONLY_DESCRIPTOR);
}, __id_332.prototype.stepIdentifier = function(__id_906, __id_907, __id_908) {
  if (e.pop(), t.components) {
    e[e.length - 1].value = [__id_332.SCOPE_REFERENCE, r.name];
    return;
  }
  var __id_909 = this.getValueFromScope(r.name);
  if (this.getterStep_) return this.createGetter_(__id_909, this.globalObject);
  e[e.length - 1].value = __id_909;
}, __id_332.prototype.stepIfStatement = __id_332.prototype.stepConditionalExpression, __id_332.prototype.stepLabeledStatement = function(__id_910, __id_911, __id_912) {
  e.pop();
  var __id_913 = t.labels || [];
  __id_913.push(r.label.name);
  var __id_914 = new __id_332.State(r.body, t.scope);
  return __id_914.labels = __id_913, __id_914;
}, __id_332.prototype.stepLiteral = function(__id_915, __id_916, __id_917) {
  e.pop();
  var __id_918 = r.value;
  if (__id_918 instanceof RegExp) {
    var __id_919 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(__id_919, __id_918), __id_918 = __id_919;
  }
  e[e.length - 1].value = __id_918;
}, __id_332.prototype.stepLogicalExpression = function(__id_920, __id_921, __id_922) {
  if ("&&" !== r.operator && "||" !== r.operator) throw SyntaxError("Unknown logical operator: " + r.operator);
  if (!t.doneLeft_) return t.doneLeft_ = !0, new __id_332.State(r.left, t.scope);
  if (t.doneRight_) e.pop(), e[e.length - 1].value = t.value;
  else {
    if (("&&" !== r.operator || t.value) && ("||" !== r.operator || !t.value)) return t.doneRight_ = !0, new __id_332.State(r.right, t.scope);
    e.pop(), e[e.length - 1].value = t.value;
  }
}, __id_332.prototype.stepMemberExpression = function(__id_923, __id_924, __id_925) {
  if (!t.doneObject_) return t.doneObject_ = !0, new __id_332.State(r.object, t.scope);
  if (r.computed) {
    if (!t.doneProperty_) return t.object_ = t.value, t.doneProperty_ = !0, new __id_332.State(r.property, t.scope);
    __id_926 = t.value;
  } else t.object_ = t.value, __id_926 = r.property.name;
  if (e.pop(), t.components) e[e.length - 1].value = [t.object_, __id_926];
  else {
    var __id_926,
      __id_927 = this.getProperty(t.object_, __id_926);
    if (this.getterStep_) return this.createGetter_(__id_927, t.object_);
    e[e.length - 1].value = __id_927;
  }
}, __id_332.prototype.stepNewExpression = __id_332.prototype.stepCallExpression, __id_332.prototype.stepObjectExpression = function(__id_928, __id_929, __id_930) {
  var __id_931 = t.n_ || 0,
    __id_932 = r.properties[__id_931];
  if (t.object_) {
    var __id_933 = t.destinationName;
    t.properties_[__id_933] || (t.properties_[__id_933] = {}), t.properties_[__id_933][__id_932.kind] = t.value, t.n_ = ++__id_931, __id_932 = r.properties[__id_931];
  } else t.object_ = this.createObjectProto(this.OBJECT_PROTO), t.properties_ = Object.create(null);
  if (__id_932) {
    var __id_934 = __id_932.key;
    if ("Identifier" === __id_934.type) var __id_933 = __id_934.name;
    else if ("Literal" === __id_934.type) var __id_933 = __id_934.value;
    else throw SyntaxError("Unknown object structure: " + __id_934.type);
    return t.destinationName = __id_933, new __id_332.State(__id_932.value, t.scope);
  }
  for (var __id_934 in t.properties_) {
    var __id_935 = t.properties_[__id_934];
    if ("get" in __id_935 || "set" in __id_935) {
      var __id_936 = {
        configurable: !0,
        enumerable: !0,
        get: __id_935.get,
        set: __id_935.set
      };
      this.setProperty(t.object_, __id_934, __id_332.VALUE_IN_DESCRIPTOR, __id_936);
    } else this.setProperty(t.object_, __id_934, __id_935.init);
  }
  e.pop(), e[e.length - 1].value = t.object_;
}, __id_332.prototype.stepProgram = function(__id_937, __id_938, __id_939) {
  var __id_940 = r.body.shift();
  if (__id_940) return t.done = !1, new __id_332.State(__id_940, t.scope);
  t.done = !0;
}, __id_332.prototype.stepReturnStatement = function(__id_941, __id_942, __id_943) {
  if (r.argument && !t.done_) return t.done_ = !0, new __id_332.State(r.argument, t.scope);
  this.unwind(__id_332.Completion.RETURN, t.value, void 0);
}, __id_332.prototype.stepSequenceExpression = function(__id_944, __id_945, __id_946) {
  var __id_947 = t.n_ || 0,
    __id_948 = r.expressions[__id_947];
  if (__id_948) return t.n_ = __id_947 + 1, new __id_332.State(__id_948, t.scope);
  e.pop(), e[e.length - 1].value = t.value;
}, __id_332.prototype.stepSwitchStatement = function(__id_949, __id_950, __id_951) {
  if (!t.test_) return t.test_ = 1, new __id_332.State(r.discriminant, t.scope);
  for (1 === t.test_ && (t.test_ = 2, t.switchValue_ = t.value, t.defaultCase_ = -1);;) {
    var __id_952 = t.index_ || 0,
      __id_953 = r.cases[__id_952];
    if (!t.matched_ && __id_953 && !__id_953.test) {
      t.defaultCase_ = __id_952, t.index_ = __id_952 + 1;
      continue;
    }
    if (!__id_953 && !t.matched_ && -1 !== t.defaultCase_) {
      t.matched_ = !0, t.index_ = t.defaultCase_;
      continue;
    }
    if (__id_953) {
      if (!t.matched_ && !t.tested_ && __id_953.test) return t.tested_ = !0, new __id_332.State(__id_953.test, t.scope);
      if (t.matched_ || t.value === t.switchValue_) {
        t.matched_ = !0;
        var __id_954 = t.n_ || 0;
        if (__id_953.consequent[__id_954]) return t.isSwitch = !0, t.n_ = __id_954 + 1, new __id_332.State(__id_953.consequent[__id_954], t.scope);
      }
      t.tested_ = !1, t.n_ = 0, t.index_ = __id_952 + 1;
    } else {
      e.pop();
      return;
    }
  }
}, __id_332.prototype.stepThisExpression = function(__id_955, __id_956, __id_957) {
  e.pop(), e[e.length - 1].value = this.getValueFromScope("this");
}, __id_332.prototype.stepThrowStatement = function(__id_958, __id_959, __id_960) {
  if (!t.done_) return t.done_ = !0, new __id_332.State(r.argument, t.scope);
  this.throwException(t.value);
}, __id_332.prototype.stepTryStatement = function(__id_961, __id_962, __id_963) {
  if (!t.doneBlock_) return t.doneBlock_ = !0, new __id_332.State(r.block, t.scope);
  if (t.cv && t.cv.type === __id_332.Completion.THROW && !t.doneHandler_ && r.handler) {
    t.doneHandler_ = !0;
    var __id_964 = this.createSpecialScope(t.scope);
    return this.setProperty(__id_964.object, r.handler.param.name, t.cv.value), t.cv = void 0, new __id_332.State(r.handler.body, __id_964);
  }
  if (!t.doneFinalizer_ && r.finalizer) return t.doneFinalizer_ = !0, new __id_332.State(r.finalizer, t.scope);
  e.pop(), t.cv && this.unwind(t.cv.type, t.cv.value, t.cv.label);
}, __id_332.prototype.stepUnaryExpression = function(__id_965, __id_966, __id_967) {
  if (!t.done_) {
    t.done_ = !0;
    var __id_968 = new __id_332.State(r.argument, t.scope);
    return __id_968.components = "delete" === r.operator, __id_968;
  }
  e.pop();
  var __id_969 = t.value;
  switch (r.operator) {
    case "-":
      __id_969 = -__id_969;
      break;
    case "+":
      __id_969 = +__id_969;
      break;
    case "!":
      __id_969 = !__id_969;
      break;
    case "~":
      __id_969 = ~__id_969;
      break;
    case "delete":
      var __id_970 = !0;
      if (Array.isArray(__id_969)) {
        var __id_971 = __id_969[0];
        __id_971 === __id_332.SCOPE_REFERENCE && (__id_971 = t.scope);
        var __id_972 = String(__id_969[1]);
        try {
          delete __id_971.properties[__id_972];
        } catch (__id_973) {
          t.scope.strict ? this.throwException(this.TYPE_ERROR, "Cannot delete property '" + __id_972 + "' of '" + __id_971 + "'") : __id_970 = !1;
        }
      }
      __id_969 = __id_970;
      break;
    case "typeof":
      __id_969 = __id_969 && "Function" === __id_969.class ? "function" : typeof __id_969;
      break;
    case "void":
      __id_969 = void 0;
      break;
    default:
      throw SyntaxError("Unknown unary operator: " + r.operator);
  }
  e[e.length - 1].value = __id_969;
}, __id_332.prototype.stepUpdateExpression = function(__id_974, __id_975, __id_976) {
  if (!t.doneLeft_) {
    t.doneLeft_ = !0;
    var __id_977,
      __id_978 = new __id_332.State(r.argument, t.scope);
    return __id_978.components = !0, __id_978;
  }
  if (t.leftSide_ || (t.leftSide_ = t.value), t.doneGetter_ && (t.leftValue_ = t.value), !t.doneGetter_) {
    var __id_979 = this.getValue(t.leftSide_);
    if (t.leftValue_ = __id_979, this.getterStep_) {
      t.doneGetter_ = !0;
      var __id_980 = __id_979;
      return this.createGetter_(__id_980, t.leftSide_);
    }
  }
  if (t.doneSetter_) {
    e.pop(), e[e.length - 1].value = t.setterValue_;
    return;
  }
  var __id_979 = Number(t.leftValue_);
  if ("++" === r.operator) __id_977 = __id_979 + 1;
  else if ("--" === r.operator) __id_977 = __id_979 - 1;
  else throw SyntaxError("Unknown update expression: " + r.operator);
  var __id_981 = r.prefix ? __id_977 : __id_979,
    __id_982 = this.setValue(t.leftSide_, __id_977);
  if (__id_982) return t.doneSetter_ = !0, t.setterValue_ = __id_981, this.createSetter_(__id_982, t.leftSide_, __id_977);
  e.pop(), e[e.length - 1].value = __id_981;
}, __id_332.prototype.stepVariableDeclaration = function(__id_983, __id_984, __id_985) {
  var __id_986 = r.declarations,
    __id_987 = t.n_ || 0,
    __id_988 = __id_986[__id_987];
  for (t.init_ && __id_988 && (this.setValueToScope(__id_988.id.name, t.value), t.init_ = !1, __id_988 = __id_986[++__id_987]); __id_988;) {
    if (__id_988.init) return t.n_ = __id_987, t.init_ = !0, t.destinationName = __id_988.id.name, new __id_332.State(__id_988.init, t.scope);
    __id_988 = __id_986[++__id_987];
  }
  e.pop();
}, __id_332.prototype.stepWithStatement = function(__id_989, __id_990, __id_991) {
  if (!t.doneObject_) return t.doneObject_ = !0, new __id_332.State(r.object, t.scope);
  e.pop();
  var __id_992 = this.createSpecialScope(t.scope, t.value);
  return new __id_332.State(r.body, __id_992);
}, __id_332.prototype.stepWhileStatement = __id_332.prototype.stepDoWhileStatement, __id_332.nativeGlobal.__id_332 = __id_332, __id_332.prototype.step = __id_332.prototype.step, __id_332.prototype.run = __id_332.prototype.run, __id_332.prototype.getStatus = __id_332.prototype.getStatus, __id_332.prototype.appendCode = __id_332.prototype.appendCode, __id_332.prototype.createObject = __id_332.prototype.createObject, __id_332.prototype.createObjectProto = __id_332.prototype.createObjectProto, __id_332.prototype.createNativeFunction = __id_332.prototype.createNativeFunction, __id_332.prototype.createAsyncFunction = __id_332.prototype.createAsyncFunction, __id_332.prototype.getProperty = __id_332.prototype.getProperty, __id_332.prototype.setProperty = __id_332.prototype.setProperty, __id_332.prototype.nativeToPseudo = __id_332.prototype.nativeToPseudo, __id_332.prototype.pseudoToNative = __id_332.prototype.pseudoToNative, __id_332.prototype.getGlobalScope = __id_332.prototype.getGlobalScope, __id_332.prototype.setGlobalScope = __id_332.prototype.setGlobalScope, __id_332.prototype.getStateStack = __id_332.prototype.getStateStack, __id_332.prototype.setStateStack = __id_332.prototype.setStateStack, __id_332.Status = __id_332.Status, __id_332.VALUE_IN_DESCRIPTOR = __id_332.VALUE_IN_DESCRIPTOR;