/* 2a51c81d5d64d884540dbc622cd27a1b2f1028017b891e756a347a7d25c8aafe */
! function(_0x0, _0x1) {
  return 'object' == typeof exports && 'object' == typeof module ? _0x1(exports) : 'function' == typeof define && define.amd ? define(['exports'], _0x1) : void _0x1(_0x0.acorn || (_0x0.acorn = {}));
}('undefined' == typeof globalThis ? this || window : globalThis, function(_0x0) {
  'use strict';
  _0x0.version = '0.5.0';
  var _0x1, _0x2, _0x3, _0x4, _0x5, _0x6, _0x7, _0x8, _0x9, _0xa, _0xb, _0xc, _0xd, _0xe, _0xf, _0x10 = '';
  _0x0.parse = function(_0x0, _0x4) {
    return _0x2 = (_0x10 = String(_0x0)).length,
      function _0x0(_0x2) {
        for (var _0x4 in (_0x1 = _0x2 || {}, _0x11))
          Object.prototype.hasOwnProperty.call(_0x1, _0x4) || (_0x1[_0x4] = _0x11[_0x4]);
        _0x3 = _0x1.sourceFile;
      }(_0x4), _0x9 = 1, _0x12 = _0xa = 0, _0x8 = !0, _0x13(),
      function _0x0(_0x2) {
        _0x14 = _0x15 = _0x12, _0x1.locations && (_0xb = new _0x16()), _0xc = _0xe = !1, _0xd = [], _0x17();
        var _0x3 = _0x2 || _0x18(),
          _0x4 = !0;
        for (_0x2 || (_0x3.body = []); _0x6 !== _0x19;) {
          var _0x5 = _0x1a();
          _0x3.body.push(_0x5), _0x4 && _0x1b(_0x5) && _0x1c(!0), _0x4 = !1;
        }
        return _0x1d(_0x3, 'Program');
      }(_0x1.program);
  };
  var _0x11 = {
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
    _0x1e = function(_0x0, _0x1) {
      for (var _0x2 = 1, _0x3 = 0;;) {
        _0x1f.lastIndex = _0x3;
        var _0x4 = _0x1f.exec(_0x0);
        if (_0x4 && _0x4.index < _0x1)
          ++_0x2, _0x3 = _0x4.index + _0x4[0].length;
        else
          break;
      }
      return {
        line: _0x2,
        column: _0x1 - _0x3
      };
    },
    _0x12 = 0,
    _0x20 = 0,
    _0x21 = 0,
    _0x14 = 0,
    _0x15 = 0;

  function _0x22(_0x0, _0x1) {
    var _0x2 = _0x1e(_0x10, _0x0),
      _0x3 = SyntaxError(_0x1 += ' (' + _0x2.line + ':' + _0x2.column + ')');
    throw _0x3.pos = _0x0, _0x3.loc = _0x2, _0x3.raisedAt = _0x12, _0x3;
  }
  var _0x23 = [],
    _0x24 = {
      type: 'num'
    },
    _0x25 = {
      type: 'regexp'
    },
    _0x26 = {
      type: 'string'
    },
    _0x27 = {
      type: 'name'
    },
    _0x19 = {
      type: 'eof'
    },
    _0x28 = {
      keyword: 'break'
    },
    _0x29 = {
      keyword: 'case',
      beforeExpr: !0
    },
    _0x2a = {
      keyword: 'catch'
    },
    _0x2b = {
      keyword: 'continue'
    },
    _0x2c = {
      keyword: 'debugger'
    },
    _0x2d = {
      keyword: 'default'
    },
    _0x2e = {
      keyword: 'do',
      isLoop: !0
    },
    _0x2f = {
      keyword: 'else',
      beforeExpr: !0
    },
    _0x30 = {
      keyword: 'finally'
    },
    _0x31 = {
      keyword: 'for',
      isLoop: !0
    },
    _0x32 = {
      keyword: 'function'
    },
    _0x33 = {
      keyword: 'if'
    },
    _0x34 = {
      keyword: 'return',
      beforeExpr: !0
    },
    _0x35 = {
      keyword: 'switch'
    },
    _0x36 = {
      keyword: 'throw',
      beforeExpr: !0
    },
    _0x37 = {
      keyword: 'try'
    },
    _0x38 = {
      keyword: 'var'
    },
    _0x39 = {
      keyword: 'while',
      isLoop: !0
    },
    _0x3a = {
      keyword: 'with'
    },
    _0x3b = {
      keyword: 'new',
      beforeExpr: !0
    },
    _0x3c = {
      keyword: 'this'
    },
    _0x3d = {
      keyword: 'null',
      atomValue: null
    },
    _0x3e = {
      keyword: 'true',
      atomValue: !0
    },
    _0x3f = {
      keyword: 'false',
      atomValue: !1
    },
    _0x40 = {
      keyword: 'in',
      binop: 7,
      beforeExpr: !0
    },
    _0x41 = {
      break: _0x28,
      case: _0x29,
      catch: _0x2a,
      continue: _0x2b,
      debugger: _0x2c,
      default: _0x2d,
      do: _0x2e,
      else: _0x2f,
      finally: _0x30,
      for: _0x31,
      function: _0x32,
      if: _0x33,
      return: _0x34,
      switch: _0x35,
      throw: _0x36,
      try: _0x37,
      var: _0x38,
      while: _0x39,
      with: _0x3a,
      null: _0x3d,
      true: _0x3e,
      false: _0x3f,
      new: _0x3b,
      in: _0x40,
      instanceof: {
        keyword: 'instanceof',
        binop: 7,
        beforeExpr: !0
      },
      this: _0x3c,
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
    _0x42 = {
      type: '[',
      beforeExpr: !0
    },
    _0x43 = {
      type: ']'
    },
    _0x44 = {
      type: '{',
      beforeExpr: !0
    },
    _0x45 = {
      type: '}'
    },
    _0x46 = {
      type: '(',
      beforeExpr: !0
    },
    _0x47 = {
      type: ')'
    },
    _0x48 = {
      type: ',',
      beforeExpr: !0
    },
    _0x49 = {
      type: ';',
      beforeExpr: !0
    },
    _0x4a = {
      type: ':',
      beforeExpr: !0
    },
    _0x4b = {
      type: '.'
    },
    _0x4c = {
      type: '?',
      beforeExpr: !0
    },
    _0x4d = {
      binop: 10,
      beforeExpr: !0
    },
    _0x4e = {
      isAssign: !0,
      beforeExpr: !0
    },
    _0x4f = {
      isAssign: !0,
      beforeExpr: !0
    },
    _0x50 = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    _0x51 = {
      prefix: !0,
      beforeExpr: !0
    },
    _0x52 = {
      binop: 1,
      beforeExpr: !0
    },
    _0x53 = {
      binop: 2,
      beforeExpr: !0
    },
    _0x54 = {
      binop: 3,
      beforeExpr: !0
    },
    _0x55 = {
      binop: 4,
      beforeExpr: !0
    },
    _0x56 = {
      binop: 5,
      beforeExpr: !0
    },
    _0x57 = {
      binop: 6,
      beforeExpr: !0
    },
    _0x58 = {
      binop: 7,
      beforeExpr: !0
    },
    _0x59 = {
      binop: 8,
      beforeExpr: !0
    },
    _0x5a = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    _0x5b = {
      binop: 10,
      beforeExpr: !0
    };

  function _0x5c(_0x0) {
    for (var _0x1 = _0x0.split(' '), _0x2 = Object.create(null), _0x3 = 0; _0x3 < _0x1.length; _0x3++)
      _0x2[_0x1[_0x3]] = !0;
    return function(_0x0) {
      return _0x2[_0x0] || !1;
    };
  }
  var _0x5d = _0x5c('class enum extends super const export import'),
    _0x5e = _0x5c('implements interface let package private protected public static yield'),
    _0x5f = _0x5c('eval arguments'),
    _0x60 = _0x5c('break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'),
    _0x61 = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    _0x62 = 'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
    _0x63 = RegExp('[' + _0x62 + ']'),
    _0x64 = RegExp('[' + _0x62 + '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]'),
    _0x65 = /[\n\r\u2028\u2029]/,
    _0x1f = /\r\n|[\n\r\u2028\u2029]/g,
    _0x66 = function(_0x0) {
      return _0x0 < 65 ? 36 === _0x0 : _0x0 < 91 || (_0x0 < 97 ? 95 === _0x0 : _0x0 < 123 || _0x0 >= 170 && _0x63.test(String.fromCharCode(_0x0)));
    },
    _0x67 = function(_0x0) {
      return _0x0 < 48 ? 36 === _0x0 : _0x0 < 58 || !(_0x0 < 65) && (_0x0 < 91 || (_0x0 < 97 ? 95 === _0x0 : _0x0 < 123 || _0x0 >= 170 && _0x64.test(String.fromCharCode(_0x0))));
    };

  function _0x16() {
    this.line = _0x9, this.column = _0x12 - _0xa;
  }

  function _0x68(_0x0, _0x2) {
    _0x21 = _0x12, _0x1.locations && (_0x5 = new _0x16()), _0x6 = _0x0, _0x13(), _0x7 = _0x2, _0x8 = _0x0.beforeExpr;
  }

  function _0x69() {
    var _0x0, _0x2 = _0x1.onComment && _0x1.locations && new _0x16(),
      _0x3 = _0x12,
      _0x4 = _0x10.indexOf('*/', _0x12 += 2);
    if (-1 === _0x4 && _0x22(_0x12 - 2, 'Unterminated comment'), _0x12 = _0x4 + 2, _0x1.locations)
      for (_0x1f.lastIndex = _0x3;
        (_0x0 = _0x1f.exec(_0x10)) && _0x0.index < _0x12;)
        ++_0x9, _0xa = _0x0.index + _0x0[0].length;
    _0x1.onComment && _0x1.onComment(!0, _0x10.slice(_0x3 + 2, _0x4), _0x3, _0x12, _0x2, _0x1.locations && new _0x16());
  }

  function _0x6a() {
    for (var _0x0 = _0x12, _0x3 = _0x1.onComment && _0x1.locations && new _0x16(), _0x4 = _0x10.charCodeAt(_0x12 += 2); _0x12 < _0x2 && 10 !== _0x4 && 13 !== _0x4 && 8232 !== _0x4 && 8233 !== _0x4;)
      ++_0x12, _0x4 = _0x10.charCodeAt(_0x12);
    _0x1.onComment && _0x1.onComment(!1, _0x10.slice(_0x0 + 2, _0x12), _0x0, _0x12, _0x3, _0x1.locations && new _0x16());
  }

  function _0x13() {
    for (; _0x12 < _0x2;) {
      var _0x0 = _0x10.charCodeAt(_0x12);
      if (32 === _0x0)
        ++_0x12;
      else if (13 === _0x0) {
        ++_0x12;
        var _0x3 = _0x10.charCodeAt(_0x12);
        10 === _0x3 && ++_0x12, _0x1.locations && (++_0x9, _0xa = _0x12);
      } else if (10 === _0x0 || 8232 === _0x0 || 8233 === _0x0)
        ++_0x12, _0x1.locations && (++_0x9, _0xa = _0x12);
      else if (_0x0 > 8 && _0x0 < 14)
        ++_0x12;
      else if (47 === _0x0) {
        var _0x3 = _0x10.charCodeAt(_0x12 + 1);
        if (42 === _0x3)
          _0x69();
        else if (47 === _0x3)
          _0x6a();
        else
          break;
      } else if (160 === _0x0)
        ++_0x12;
      else if (_0x0 >= 5760 && _0x61.test(String.fromCharCode(_0x0)))
        ++_0x12;
      else
        break;
    }
  }

  function _0x17(_0x0) {
    if (_0x0 ? _0x12 = _0x20 + 1 : _0x20 = _0x12, _0x1.locations && (_0x4 = new _0x16()), _0x0)
      return _0x6b();
    if (_0x12 >= _0x2)
      return _0x68(_0x19);
    var _0x3 = _0x10.charCodeAt(_0x12);
    if (_0x66(_0x3) || 92 === _0x3)
      return _0x6c();
    if (!1 === function _0x0(_0x3) {
        switch (_0x3) {
          case 46:
            return void((_0x5 = _0x10.charCodeAt(_0x12 + 1)) >= 48 && _0x5 <= 57 ? _0x6d(!0) : (++_0x12, _0x68(_0x4b)));
          case 40:
            return ++_0x12, _0x68(_0x46);
          case 41:
            return ++_0x12, _0x68(_0x47);
          case 59:
            return ++_0x12, _0x68(_0x49);
          case 44:
            return ++_0x12, _0x68(_0x48);
          case 91:
            return ++_0x12, _0x68(_0x42);
          case 93:
            return ++_0x12, _0x68(_0x43);
          case 123:
            return ++_0x12, _0x68(_0x44);
          case 125:
            return ++_0x12, _0x68(_0x45);
          case 58:
            return ++_0x12, _0x68(_0x4a);
          case 63:
            return ++_0x12, _0x68(_0x4c);
          case 48:
            var _0x4, _0x5, _0x6, _0x7, _0xb, _0xc, _0xd = _0x10.charCodeAt(_0x12 + 1);
            if (120 === _0xd || 88 === _0xd) {
              return _0x12 += 2, _0x4 = _0x6e(16), void(null === _0x4 && _0x22(_0x20 + 2, 'Expected hexadecimal number'), _0x66(_0x10.charCodeAt(_0x12)) && _0x22(_0x12, 'Identifier directly after number'), _0x68(_0x24, _0x4));
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
            return _0x6d(!1);
          case 34:
          case 39:
            return function _0x0(_0x3) {
              _0x12++;
              for (var _0x4 = '';;) {
                _0x12 >= _0x2 && _0x22(_0x20, 'Unterminated string constant');
                var _0x5 = _0x10.charCodeAt(_0x12);
                if (_0x5 === _0x3) {
                  ++_0x12, _0x68(_0x26, _0x4);
                  return;
                }
                if (92 === _0x5) {
                  _0x5 = _0x10.charCodeAt(++_0x12);
                  var _0x6 = /^[0-7]+/.exec(_0x10.slice(_0x12, _0x12 + 3));
                  for (_0x6 && (_0x6 = _0x6[0]); _0x6 && parseInt(_0x6, 8) > 255;)
                    _0x6 = _0x6.slice(0, -1);
                  if ('0' === _0x6 && (_0x6 = null), ++_0x12, _0x6)
                    _0xe && _0x22(_0x12 - 2, 'Octal literal in strict mode'), _0x4 += String.fromCharCode(parseInt(_0x6, 8)), _0x12 += _0x6.length - 1;
                  else
                    switch (_0x5) {
                      case 110:
                        _0x4 += '\n';
                        break;
                      case 114:
                        _0x4 += '\r';
                        break;
                      case 120:
                        _0x4 += String.fromCharCode(_0x6f(2));
                        break;
                      case 117:
                        _0x4 += String.fromCharCode(_0x6f(4));
                        break;
                      case 85:
                        _0x4 += String.fromCharCode(_0x6f(8));
                        break;
                      case 116:
                        _0x4 += '\t';
                        break;
                      case 98:
                        _0x4 += '\b';
                        break;
                      case 118:
                        _0x4 += '\x0B';
                        break;
                      case 102:
                        _0x4 += '\f';
                        break;
                      case 48:
                        _0x4 += '\0';
                        break;
                      case 13:
                        10 === _0x10.charCodeAt(_0x12) && ++_0x12;
                      case 10:
                        _0x1.locations && (_0xa = _0x12, ++_0x9);
                        break;
                      default:
                        _0x4 += String.fromCharCode(_0x5);
                    }
                } else
                  (13 === _0x5 || 10 === _0x5 || 8232 === _0x5 || 8233 === _0x5) && _0x22(_0x20, 'Unterminated string constant'), _0x4 += String.fromCharCode(_0x5), ++_0x12;
              }
            }(_0x3);
          case 47:
            return _0x6 = _0x10.charCodeAt(_0x12 + 1), void(_0x8 ? (++_0x12, _0x6b()) : 61 === _0x6 ? _0x70(_0x4f, 2) : _0x70(_0x4d, 1));
          case 37:
          case 42:
            return void(61 === _0x10.charCodeAt(_0x12 + 1) ? _0x70(_0x4f, 2) : _0x70(_0x5b, 1));
          case 124:
          case 38:
            return _0x7 = _0x3, void((_0xb = _0x10.charCodeAt(_0x12 + 1)) === _0x7 ? _0x70(124 === _0x7 ? _0x52 : _0x53, 2) : 61 === _0xb ? _0x70(_0x4f, 2) : _0x70(124 === _0x7 ? _0x54 : _0x56, 1));
          case 94:
            return void(61 === _0x10.charCodeAt(_0x12 + 1) ? _0x70(_0x4f, 2) : _0x70(_0x55, 1));
          case 43:
          case 45:
            return function _0x0(_0x1) {
              var _0x2 = _0x10.charCodeAt(_0x12 + 1);
              if (_0x2 === _0x1) {
                if (45 === _0x2 && 62 === _0x10.charCodeAt(_0x12 + 2) && _0x65.test(_0x10.slice(_0x15, _0x12))) {
                  _0x12 += 3, _0x6a(), _0x13(), _0x17();
                  return;
                }
                _0x70(_0x50, 2);
              } else
                61 === _0x2 ? _0x70(_0x4f, 2) : _0x70(_0x5a, 1);
            }(_0x3);
          case 60:
          case 62:
            return function _0x0(_0x1) {
              var _0x2 = _0x10.charCodeAt(_0x12 + 1),
                _0x3 = 1;
              if (_0x2 === _0x1) {
                _0x3 = 62 === _0x1 && 62 === _0x10.charCodeAt(_0x12 + 2) ? 3 : 2, 61 === _0x10.charCodeAt(_0x12 + _0x3) ? _0x70(_0x4f, _0x3 + 1) : _0x70(_0x59, _0x3);
                return;
              }
              if (33 === _0x2 && 60 === _0x1 && 45 === _0x10.charCodeAt(_0x12 + 2) && 45 === _0x10.charCodeAt(_0x12 + 3)) {
                _0x12 += 4, _0x6a(), _0x13(), _0x17();
                return;
              }
              61 === _0x2 && (_0x3 = 61 === _0x10.charCodeAt(_0x12 + 2) ? 3 : 2), _0x70(_0x58, _0x3);
            }(_0x3);
          case 61:
          case 33:
            return _0xc = _0x3, void(61 === _0x10.charCodeAt(_0x12 + 1) ? _0x70(_0x57, 61 === _0x10.charCodeAt(_0x12 + 2) ? 3 : 2) : _0x70(61 === _0xc ? _0x4e : _0x51, 1));
          case 126:
            return _0x70(_0x51, 1);
        }
        return !1;
      }(_0x3)) {
      var _0x5 = String.fromCharCode(_0x3);
      if ('\\' === _0x5 || _0x63.test(_0x5))
        return _0x6c();
      _0x22(_0x12, 'Unexpected character \'' + _0x5 + '\'');
    }
  }

  function _0x70(_0x0, _0x1) {
    var _0x2 = _0x10.slice(_0x12, _0x12 + _0x1);
    _0x12 += _0x1, _0x68(_0x0, _0x2);
  }

  function _0x6b() {
    for (var _0x0, _0x1, _0x3 = _0x12;;) {
      _0x12 >= _0x2 && _0x22(_0x3, 'Unterminated regexp');
      var _0x4 = _0x10.charAt(_0x12);
      if (_0x65.test(_0x4) && _0x22(_0x3, 'Unterminated regexp'), _0x0)
        _0x0 = !1;
      else {
        if ('[' === _0x4)
          _0x1 = !0;
        else if (']' === _0x4 && _0x1)
          _0x1 = !1;
        else if ('/' === _0x4 && !_0x1)
          break;
        _0x0 = '\\' === _0x4;
      }
      ++_0x12;
    }
    var _0x5 = _0x10.slice(_0x3, _0x12);
    ++_0x12;
    var _0x6 = _0x71();
    _0x6 && !/^[gmi]*$/.test(_0x6) && _0x22(_0x3, 'Invalid regexp flag');
    try {
      var _0x7 = RegExp(_0x5, _0x6);
    } catch (_0x8) {
      throw _0x8 instanceof SyntaxError && _0x22(_0x3, _0x8.message), _0x8;
    }
    _0x68(_0x25, _0x7);
  }

  function _0x6e(_0x0, _0x1) {
    for (var _0x2 = _0x12, _0x3 = 0, _0x4 = void 0 === _0x1 ? 1 / 0 : _0x1, _0x5 = 0; _0x5 < _0x4; ++_0x5) {
      var _0x6, _0x7 = _0x10.charCodeAt(_0x12);
      if ((_0x6 = _0x7 >= 97 ? _0x7 - 97 + 10 : _0x7 >= 65 ? _0x7 - 65 + 10 : _0x7 >= 48 && _0x7 <= 57 ? _0x7 - 48 : 1 / 0) >= _0x0)
        break;
      ++_0x12, _0x3 = _0x3 * _0x0 + _0x6;
    }
    return _0x12 === _0x2 || void 0 !== _0x1 && _0x12 - _0x2 !== _0x1 ? null : _0x3;
  }

  function _0x6d(_0x0) {
    var _0x1, _0x2 = _0x12,
      _0x3 = !1,
      _0x4 = 48 === _0x10.charCodeAt(_0x12);
    _0x0 || null !== _0x6e(10) || _0x22(_0x2, 'Invalid number'), 46 === _0x10.charCodeAt(_0x12) && (++_0x12, _0x6e(10), _0x3 = !0);
    var _0x5 = _0x10.charCodeAt(_0x12);
    (69 === _0x5 || 101 === _0x5) && ((43 === (_0x5 = _0x10.charCodeAt(++_0x12)) || 45 === _0x5) && ++_0x12, null === _0x6e(10) && _0x22(_0x2, 'Invalid number'), _0x3 = !0), _0x66(_0x10.charCodeAt(_0x12)) && _0x22(_0x12, 'Identifier directly after number');
    var _0x6 = _0x10.slice(_0x2, _0x12);
    _0x3 ? _0x1 = parseFloat(_0x6) : _0x4 && 1 !== _0x6.length ? /[89]/.test(_0x6) || _0xe ? _0x22(_0x2, 'Invalid number') : _0x1 = parseInt(_0x6, 8) : _0x1 = parseInt(_0x6, 10), _0x68(_0x24, _0x1);
  }

  function _0x6f(_0x0) {
    var _0x1 = _0x6e(16, _0x0);
    return null === _0x1 && _0x22(_0x20, 'Bad character escape sequence'), _0x1;
  }

  function _0x71() {
    _0xf = !1;
    for (var _0x0, _0x1 = !0, _0x2 = _0x12;;) {
      var _0x3 = _0x10.charCodeAt(_0x12);
      if (_0x67(_0x3))
        _0xf && (_0x0 += _0x10.charAt(_0x12)), ++_0x12;
      else if (92 === _0x3) {
        _0xf || (_0x0 = _0x10.slice(_0x2, _0x12)), _0xf = !0, 117 !== _0x10.charCodeAt(++_0x12) && _0x22(_0x12, 'Expecting Unicode escape sequence \\uXXXX'), ++_0x12;
        var _0x4 = _0x6f(4),
          _0x5 = String.fromCharCode(_0x4);
        _0x5 || _0x22(_0x12 - 1, 'Invalid Unicode escape'), (_0x1 ? _0x66(_0x4) : _0x67(_0x4)) || _0x22(_0x12 - 4, 'Invalid Unicode escape'), _0x0 += _0x5;
      } else
        break;
      _0x1 = !1;
    }
    return _0xf ? _0x0 : _0x10.slice(_0x2, _0x12);
  }

  function _0x6c() {
    var _0x0 = _0x71(),
      _0x1 = _0x27;
    !_0xf && _0x60(_0x0) && (_0x1 = _0x41[_0x0]), _0x68(_0x1, _0x0);
  }

  function _0x72() {
    _0x14 = _0x20, _0x15 = _0x21, _0xb = _0x5, _0x17();
  }

  function _0x1c(_0x0) {
    if (_0xe = _0x0, _0x12 = _0x20, _0x1.locations)
      for (; _0x12 < _0xa;)
        _0xa = _0x10.lastIndexOf('\n', _0xa - 2) + 1, --_0x9;
    _0x13(), _0x17();
  }

  function _0x73() {
    this.type = null, this.start = _0x20, this.end = null;
  }

  function _0x74() {
    this.start = _0x4, this.end = null, _0x3 && (this.source = _0x3);
  }

  function _0x18() {
    var _0x0 = new _0x73();
    return _0x1.locations && (_0x0.loc = new _0x74()), _0x1.directSourceFile && (_0x0.sourceFile = _0x1.directSourceFile), _0x1.ranges && (_0x0.range = [
      _0x20,
      0
    ]), _0x0;
  }

  function _0x75(_0x0) {
    var _0x2 = new _0x73();
    return _0x2.start = _0x0.start, _0x1.locations && (_0x2.loc = new _0x74(), _0x2.loc.start = _0x0.loc.start), _0x1.ranges && (_0x2.range = [
      _0x0.range[0],
      0
    ]), _0x2;
  }

  function _0x1d(_0x0, _0x2) {
    return _0x0.type = _0x2, _0x0.end = _0x15, _0x1.locations && (_0x0.loc.end = _0xb), _0x1.ranges && (_0x0.range[1] = _0x15), _0x0;
  }

  function _0x1b(_0x0) {
    return 'ExpressionStatement' === _0x0.type && 'Literal' === _0x0.expression.type && 'use strict' === _0x0.expression.value;
  }

  function _0x76(_0x0) {
    return _0x6 === _0x0 && (_0x72(), !0);
  }

  function _0x77() {
    return !_0x1.strictSemicolons && (_0x6 === _0x19 || _0x6 === _0x45 || _0x65.test(_0x10.slice(_0x15, _0x20)));
  }

  function _0x78() {
    _0x76(_0x49) || _0x77() || _0x79();
  }

  function _0x7a(_0x0) {
    _0x6 === _0x0 ? _0x72() : _0x79();
  }

  function _0x79() {
    _0x22(_0x20, 'Unexpected token');
  }

  function _0x7b(_0x0) {
    'Identifier' !== _0x0.type && 'MemberExpression' !== _0x0.type && _0x22(_0x0.start, 'Assigning to rvalue'), _0xe && 'Identifier' === _0x0.type && _0x5f(_0x0.name) && _0x22(_0x0.start, 'Assigning to ' + _0x0.name + ' in strict mode');
  }
  var _0x7c = {
      kind: 'loop'
    },
    _0x7d = {
      kind: 'switch'
    };

  function _0x1a() {
    (_0x6 === _0x4d || _0x6 === _0x4f && '/=' === _0x7) && _0x17(!0);
    var _0x0, _0x2, _0x3 = _0x6,
      _0x4 = _0x18();
    switch (_0x3) {
      case _0x28:
      case _0x2b:
        _0x72();
        var _0x5 = _0x3 === _0x28;
        _0x76(_0x49) || _0x77() ? _0x4.label = null : _0x6 !== _0x27 ? _0x79() : (_0x4.label = _0x7e(), _0x78());
        for (var _0x8 = 0; _0x8 < _0xd.length; ++_0x8) {
          var _0x9 = _0xd[_0x8];
          if ((null === _0x4.label || _0x9.name === _0x4.label.name) && (null !== _0x9.kind && (_0x5 || 'loop' === _0x9.kind) || _0x4.label && _0x5))
            break;
        }
        return _0x8 === _0xd.length && _0x22(_0x4.start, 'Unsyntactic ' + _0x3.keyword), _0x1d(_0x4, _0x5 ? 'BreakStatement' : 'ContinueStatement');
      case _0x2c:
        return _0x72(), _0x78(), _0x1d(_0x4, 'DebuggerStatement');
      case _0x2e:
        return _0x72(), _0xd.push(_0x7c), _0x4.body = _0x1a(), _0xd.pop(), _0x7a(_0x39), _0x4.test = _0x7f(), _0x78(), _0x1d(_0x4, 'DoWhileStatement');
      case _0x31:
        if (_0x72(), _0xd.push(_0x7c), _0x7a(_0x46), _0x6 === _0x49)
          return _0x80(_0x4, null);
        if (_0x6 === _0x38) {
          var _0xa = _0x18();
          if (_0x72(), _0x81(_0xa, !0), _0x1d(_0xa, 'VariableDeclaration'), 1 === _0xa.declarations.length && _0x76(_0x40))
            return _0x82(_0x4, _0xa);
          return _0x80(_0x4, _0xa);
        }
        var _0xa = _0x83(!1, !0);
        if (_0x76(_0x40))
          return _0x7b(_0xa), _0x82(_0x4, _0xa);
        return _0x80(_0x4, _0xa);
      case _0x32:
        return _0x72(), _0x84(_0x4, !0);
      case _0x33:
        return _0x72(), _0x4.test = _0x7f(), _0x4.consequent = _0x1a(), _0x4.alternate = _0x76(_0x2f) ? _0x1a() : null, _0x1d(_0x4, 'IfStatement');
      case _0x34:
        return _0xc || _0x1.allowReturnOutsideFunction || _0x22(_0x20, '\'return\' outside of function'), _0x72(), _0x76(_0x49) || _0x77() ? _0x4.argument = null : (_0x4.argument = _0x83(), _0x78()), _0x1d(_0x4, 'ReturnStatement');
      case _0x35:
        for (_0x72(), _0x4.discriminant = _0x7f(), _0x4.cases = [], _0x7a(_0x44), _0xd.push(_0x7d); _0x6 !== _0x45;)
          if (_0x6 === _0x29 || _0x6 === _0x2d) {
            var _0xb = _0x6 === _0x29;
            _0x0 && _0x1d(_0x0, 'SwitchCase'), _0x4.cases.push(_0x0 = _0x18()), _0x0.consequent = [], _0x72(), _0xb ? _0x0.test = _0x83() : (_0x2 && _0x22(_0x14, 'Multiple default clauses'), _0x2 = !0, _0x0.test = null), _0x7a(_0x4a);
          } else
            _0x0 || _0x79(), _0x0.consequent.push(_0x1a());
        return _0x0 && _0x1d(_0x0, 'SwitchCase'), _0x72(), _0xd.pop(), _0x1d(_0x4, 'SwitchStatement');
      case _0x36:
        return _0x72(), _0x65.test(_0x10.slice(_0x15, _0x20)) && _0x22(_0x15, 'Illegal newline after throw'), _0x4.argument = _0x83(), _0x78(), _0x1d(_0x4, 'ThrowStatement');
      case _0x37:
        if (_0x72(), _0x4.block = _0x85(), _0x4.handler = null, _0x6 === _0x2a) {
          var _0xf = _0x18();
          _0x72(), _0x7a(_0x46), _0xf.param = _0x7e(), _0xe && _0x5f(_0xf.param.name) && _0x22(_0xf.param.start, 'Binding ' + _0xf.param.name + ' in strict mode'), _0x7a(_0x47), _0xf.body = _0x85(), _0x4.handler = _0x1d(_0xf, 'CatchClause');
        }
        return _0x4.finalizer = _0x76(_0x30) ? _0x85() : null, _0x4.handler || _0x4.finalizer || _0x22(_0x4.start, 'Missing catch or finally clause'), _0x1d(_0x4, 'TryStatement');
      case _0x38:
        return _0x72(), _0x81(_0x4), _0x78(), _0x1d(_0x4, 'VariableDeclaration');
      case _0x39:
        return _0x72(), _0x4.test = _0x7f(), _0xd.push(_0x7c), _0x4.body = _0x1a(), _0xd.pop(), _0x1d(_0x4, 'WhileStatement');
      case _0x3a:
        return _0xe && _0x22(_0x20, '\'with\' in strict mode'), _0x72(), _0x4.object = _0x7f(), _0x4.body = _0x1a(), _0x1d(_0x4, 'WithStatement');
      case _0x44:
        return _0x85();
      case _0x49:
        return _0x72(), _0x1d(_0x4, 'EmptyStatement');
      default:
        var _0x11 = _0x7,
          _0x1e = _0x83();
        if (!(_0x3 === _0x27 && 'Identifier' === _0x1e.type && _0x76(_0x4a)))
          return _0x4.expression = _0x1e, _0x78(), _0x1d(_0x4, 'ExpressionStatement');
        for (var _0x8 = 0; _0x8 < _0xd.length; ++_0x8)
          _0xd[_0x8].name === _0x11 && _0x22(_0x1e.start, 'Label \'' + _0x11 + '\' is already declared');
        var _0x12 = _0x6.isLoop ? 'loop' : _0x6 === _0x35 ? 'switch' : null;
        return _0xd.push({
          name: _0x11,
          kind: _0x12
        }), _0x4.body = _0x1a(), _0xd.pop(), _0x4.label = _0x1e, _0x1d(_0x4, 'LabeledStatement');
    }
  }

  function _0x7f() {
    _0x7a(_0x46);
    var _0x0 = _0x83();
    return _0x7a(_0x47), _0x0;
  }

  function _0x85(_0x0) {
    var _0x1, _0x2 = _0x18(),
      _0x3 = !0,
      _0x4 = !1;
    for (_0x2.body = [], _0x7a(_0x44); !_0x76(_0x45);) {
      var _0x5 = _0x1a();
      _0x2.body.push(_0x5), _0x3 && _0x0 && _0x1b(_0x5) && (_0x1 = _0x4, _0x1c(_0x4 = !0)), _0x3 = !1;
    }
    return _0x4 && !_0x1 && _0x1c(!1), _0x1d(_0x2, 'BlockStatement');
  }

  function _0x80(_0x0, _0x1) {
    return _0x0.init = _0x1, _0x7a(_0x49), _0x0.test = _0x6 === _0x49 ? null : _0x83(), _0x7a(_0x49), _0x0.update = _0x6 === _0x47 ? null : _0x83(), _0x7a(_0x47), _0x0.body = _0x1a(), _0xd.pop(), _0x1d(_0x0, 'ForStatement');
  }

  function _0x82(_0x0, _0x1) {
    return _0x0.left = _0x1, _0x0.right = _0x83(), _0x7a(_0x47), _0x0.body = _0x1a(), _0xd.pop(), _0x1d(_0x0, 'ForInStatement');
  }

  function _0x81(_0x0, _0x1) {
    for (_0x0.declarations = [], _0x0.kind = 'var';;) {
      var _0x2 = _0x18();
      if (_0x2.id = _0x7e(), _0xe && _0x5f(_0x2.id.name) && _0x22(_0x2.id.start, 'Binding ' + _0x2.id.name + ' in strict mode'), _0x2.init = _0x76(_0x4e) ? _0x83(!0, _0x1) : null, _0x0.declarations.push(_0x1d(_0x2, 'VariableDeclarator')), !_0x76(_0x48))
        break;
    }
  }

  function _0x83(_0x0, _0x1) {
    var _0x2 = _0x86(_0x1);
    if (!_0x0 && _0x6 === _0x48) {
      var _0x3 = _0x75(_0x2);
      for (_0x3.expressions = [_0x2]; _0x76(_0x48);)
        _0x3.expressions.push(_0x86(_0x1));
      return _0x1d(_0x3, 'SequenceExpression');
    }
    return _0x2;
  }

  function _0x86(_0x0) {
    var _0x1 = function _0x0(_0x1) {
      var _0x2, _0x3 = (_0x2 = _0x1, function _0x0(_0x1, _0x2, _0x3) {
        var _0x4 = _0x6.binop;
        if (null !== _0x4 && (!_0x3 || _0x6 !== _0x40) && _0x4 > _0x2) {
          var _0x5 = _0x75(_0x1);
          _0x5.left = _0x1, _0x5.operator = _0x7;
          var _0x8 = _0x6;
          _0x72(), _0x5.right = _0x0(_0x87(), _0x4, _0x3);
          var _0x9 = _0x1d(_0x5, _0x8 === _0x52 || _0x8 === _0x53 ? 'LogicalExpression' : 'BinaryExpression');
          return _0x0(_0x9, _0x2, _0x3);
        }
        return _0x1;
      }(_0x87(), -1, _0x2));
      if (_0x76(_0x4c)) {
        var _0x4 = _0x75(_0x3);
        return _0x4.test = _0x3, _0x4.consequent = _0x83(!0), _0x7a(_0x4a), _0x4.alternate = _0x83(!0, _0x1), _0x1d(_0x4, 'ConditionalExpression');
      }
      return _0x3;
    }(_0x0);
    if (_0x6.isAssign) {
      var _0x2 = _0x75(_0x1);
      return _0x2.operator = _0x7, _0x2.left = _0x1, _0x72(), _0x2.right = _0x86(_0x0), _0x7b(_0x1), _0x1d(_0x2, 'AssignmentExpression');
    }
    return _0x1;
  }

  function _0x87() {
    if (_0x6.prefix) {
      var _0x0 = _0x18(),
        _0x1 = _0x6.isUpdate;
      return _0x0.operator = _0x7, _0x0.prefix = !0, _0x8 = !0, _0x72(), _0x0.argument = _0x87(), _0x1 ? _0x7b(_0x0.argument) : _0xe && 'delete' === _0x0.operator && 'Identifier' === _0x0.argument.type && _0x22(_0x0.start, 'Deleting local variable in strict mode'), _0x1d(_0x0, _0x1 ? 'UpdateExpression' : 'UnaryExpression');
    }
    for (var _0x2 = _0x88(_0x89()); _0x6.postfix && !_0x77();) {
      var _0x0 = _0x75(_0x2);
      _0x0.operator = _0x7, _0x0.prefix = !1, _0x0.argument = _0x2, _0x7b(_0x2), _0x72(), _0x2 = _0x1d(_0x0, 'UpdateExpression');
    }
    return _0x2;
  }

  function _0x88(_0x0, _0x1) {
    var _0x2;
    return _0x76(_0x4b) ? ((_0x2 = _0x75(_0x0)).object = _0x0, _0x2.property = _0x7e(!0), _0x2.computed = !1, _0x88(_0x1d(_0x2, 'MemberExpression'), _0x1)) : _0x76(_0x42) ? ((_0x2 = _0x75(_0x0)).object = _0x0, _0x2.property = _0x83(), _0x2.computed = !0, _0x7a(_0x43), _0x88(_0x1d(_0x2, 'MemberExpression'), _0x1)) : !_0x1 && _0x76(_0x46) ? ((_0x2 = _0x75(_0x0)).callee = _0x0, _0x2.arguments = _0x8a(_0x47, !1), _0x88(_0x1d(_0x2, 'CallExpression'), _0x1)) : _0x0;
  }

  function _0x89() {
    switch (_0x6) {
      case _0x3c:
        return _0x0 = _0x18(), _0x72(), _0x1d(_0x0, 'ThisExpression');
      case _0x27:
        return _0x7e();
      case _0x24:
      case _0x26:
      case _0x25:
        return (_0x0 = _0x18()).value = _0x7, _0x0.raw = _0x10.slice(_0x20, _0x21), _0x72(), _0x1d(_0x0, 'Literal');
      case _0x3d:
      case _0x3e:
      case _0x3f:
        return (_0x0 = _0x18()).value = _0x6.atomValue, _0x0.raw = _0x6.keyword, _0x72(), _0x1d(_0x0, 'Literal');
      case _0x46:
        var _0x0, _0x2, _0x3 = _0x4,
          _0x8 = _0x20;
        _0x72();
        var _0x9 = _0x83();
        return _0x9.start = _0x8, _0x9.end = _0x21, _0x1.locations && (_0x9.loc.start = _0x3, _0x9.loc.end = _0x5), _0x1.ranges && (_0x9.range = [
          _0x8,
          _0x21
        ]), _0x7a(_0x47), _0x9;
      case _0x42:
        return _0x0 = _0x18(), _0x72(), _0x0.elements = _0x8a(_0x43, !0, !0), _0x1d(_0x0, 'ArrayExpression');
      case _0x44:
        return function _0x0() {
          var _0x2 = _0x18(),
            _0x3 = !0,
            _0x4 = !1;
          for (_0x2.properties = [], _0x72(); !_0x76(_0x45);) {
            if (_0x3)
              _0x3 = !1;
            else if (_0x7a(_0x48), _0x1.allowTrailingCommas && _0x76(_0x45))
              break;
            var _0x5, _0x7 = {
                key: _0x8b()
              },
              _0x8 = !1;
            if (_0x76(_0x4a) ? (_0x7.value = _0x83(!0), _0x5 = _0x7.kind = 'init') : 'Identifier' === _0x7.key.type && ('get' === _0x7.key.name || 'set' === _0x7.key.name) ? (_0x8 = _0x4 = !0, _0x5 = _0x7.kind = _0x7.key.name, _0x7.key = _0x8b(), _0x6 !== _0x46 && _0x79(), _0x7.value = _0x84(_0x18(), !1)) : _0x79(), 'Identifier' === _0x7.key.type && (_0xe || _0x4))
              for (var _0x9 = 0; _0x9 < _0x2.properties.length; ++_0x9) {
                var _0xa = _0x2.properties[_0x9];
                if (_0xa.key.name === _0x7.key.name) {
                  var _0xb = _0x5 === _0xa.kind || _0x8 && 'init' === _0xa.kind || 'init' === _0x5 && ('get' === _0xa.kind || 'set' === _0xa.kind);
                  _0xb && !_0xe && 'init' === _0x5 && 'init' === _0xa.kind && (_0xb = !1), _0xb && _0x22(_0x7.key.start, 'Redefinition of property');
                }
              }
            _0x2.properties.push(_0x7);
          }
          return _0x1d(_0x2, 'ObjectExpression');
        }();
      case _0x32:
        return _0x0 = _0x18(), _0x72(), _0x84(_0x0, !1);
      case _0x3b:
        return _0x2 = _0x18(), _0x72(), _0x2.callee = _0x88(_0x89(), !0), _0x2.arguments = _0x76(_0x46) ? _0x8a(_0x47, !1) : _0x23, _0x1d(_0x2, 'NewExpression');
    }
    _0x79();
  }

  function _0x8b() {
    return _0x6 === _0x24 || _0x6 === _0x26 ? _0x89() : _0x7e(!0);
  }

  function _0x84(_0x0, _0x1) {
    _0x6 === _0x27 ? _0x0.id = _0x7e() : _0x1 ? _0x79() : _0x0.id = null, _0x0.params = [];
    var _0x2 = !0;
    for (_0x7a(_0x46); !_0x76(_0x47);)
      _0x2 ? _0x2 = !1 : _0x7a(_0x48), _0x0.params.push(_0x7e());
    var _0x3 = _0xc,
      _0x4 = _0xd;
    if (_0xc = !0, _0xd = [], _0x0.body = _0x85(!0), _0xc = _0x3, _0xd = _0x4, _0xe || _0x0.body.body.length && _0x1b(_0x0.body.body[0]))
      for (var _0x5 = _0x0.id ? -1 : 0; _0x5 < _0x0.params.length; ++_0x5) {
        var _0x7 = _0x5 < 0 ? _0x0.id : _0x0.params[_0x5];
        if ((_0x5e(_0x7.name) || _0x5f(_0x7.name)) && _0x22(_0x7.start, 'Defining \'' + _0x7.name + '\' in strict mode'), _0x5 >= 0)
          for (var _0x8 = 0; _0x8 < _0x5; ++_0x8)
            _0x7.name === _0x0.params[_0x8].name && _0x22(_0x7.start, 'Argument name clash in strict mode');
      }
    return _0x1d(_0x0, _0x1 ? 'FunctionDeclaration' : 'FunctionExpression');
  }

  function _0x8a(_0x0, _0x2, _0x3) {
    for (var _0x4 = [], _0x5 = !0; !_0x76(_0x0);) {
      if (_0x5)
        _0x5 = !1;
      else if (_0x7a(_0x48), _0x2 && _0x1.allowTrailingCommas && _0x76(_0x0))
        break;
      _0x4.push(_0x3 && _0x6 === _0x48 ? null : _0x83(!0));
    }
    return _0x4;
  }

  function _0x7e(_0x0) {
    var _0x2 = _0x18();
    return _0x0 && 'everywhere' === _0x1.forbidReserved && (_0x0 = !1), _0x6 === _0x27 ? (!_0x0 && (_0x1.forbidReserved && _0x5d(_0x7) || _0xe && _0x5e(_0x7)) && -1 === _0x10.slice(_0x20, _0x21).indexOf('\\') && _0x22(_0x20, 'The keyword \'' + _0x7 + '\' is reserved'), _0x2.name = _0x7) : _0x0 && _0x6.keyword ? _0x2.name = _0x6.keyword : _0x79(), _0x8 = !1, _0x72(), _0x1d(_0x2, 'Identifier');
  }
});
var _0x8c = function(_0x0, _0x1) {
  'string' == typeof _0x0 && (_0x0 = this.parse_(_0x0, 'code'));
  var _0x2, _0x3 = _0x0.constructor;
  this.newNode = function() {
    return new _0x3({
      options: {}
    });
  };
  var _0x4 = this.newNode();
  for (var _0x5 in _0x0)
    _0x4[_0x5] = 'body' === _0x5 ? _0x0[_0x5].slice() : _0x0[_0x5];
  this.ast = _0x4, this.tasks = [], this.initFunc_ = _0x1, this.paused_ = !1, this.polyfills_ = [], this.functionCounter_ = 0, this.stepFunctions_ = Object.create(null);
  var _0x6 = /^step([A-Z]\w*)$/;
  for (var _0x7 in this)
    'function' == typeof this[_0x7] && (_0x2 = _0x7.match(_0x6)) && (this.stepFunctions_[_0x2[1]] = this[_0x7].bind(this));
  this.globalScope = this.createScope(this.ast, null), this.globalObject = this.globalScope.object, this.ast = this.parse_(this.polyfills_.join('\n'), 'polyfills'), this.polyfills_ = void 0, _0x8c.stripLocations_(this.ast, void 0, void 0);
  var _0x8 = new _0x8c.State(this.ast, this.globalScope);
  _0x8.done = !1, this.stateStack = [_0x8], this.run(), this.value = void 0, this.ast = _0x4, (_0x8 = new _0x8c.State(this.ast, this.globalScope)).done = !1, this.stateStack.length = 0, this.stateStack[0] = _0x8;
};
_0x8c.Completion = {
  NORMAL: 0,
  BREAK: 1,
  CONTINUE: 2,
  RETURN: 3,
  THROW: 4
}, _0x8c.Status = {
  DONE: 0,
  STEP: 1,
  TASK: 2,
  ASYNC: 3
}, _0x8c.PARSE_OPTIONS = {
  locations: !0,
  ecmaVersion: 5
}, _0x8c.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1
}, _0x8c.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0
}, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1
}, _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !1,
  writable: !1
}, _0x8c.VARIABLE_DESCRIPTOR = {
  configurable: !1,
  enumerable: !0,
  writable: !0
}, _0x8c.STEP_ERROR = {
  STEP_ERROR: !0
}, _0x8c.SCOPE_REFERENCE = {
  SCOPE_REFERENCE: !0
}, _0x8c.VALUE_IN_DESCRIPTOR = {
  VALUE_IN_DESCRIPTOR: !0
}, _0x8c.REGEXP_TIMEOUT = {
  REGEXP_TIMEOUT: !0
}, _0x8c.toStringCycles_ = [], _0x8c.vm = null, _0x8c.currentInterpreter_ = null, _0x8c.nativeGlobal = 'undefined' == typeof globalThis ? this || window : globalThis, _0x8c.WORKER_CODE = [
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
], _0x8c.legalArrayLength = function(_0x0) {
  var _0x1 = _0x0 >>> 0;
  return _0x1 === Number(_0x0) ? _0x1 : NaN;
}, _0x8c.legalArrayIndex = function(_0x0) {
  var _0x1 = _0x0 >>> 0;
  return String(_0x1) === String(_0x0) && 4294967295 !== _0x1 ? _0x1 : NaN;
}, _0x8c.stripLocations_ = function(_0x0, _0x1, _0x2) {
  for (var _0x3 in (_0x1 ? _0x0.start = _0x1 : delete _0x0.start, _0x2 ? _0x0.end = _0x2 : delete _0x0.end, _0x0))
    if (_0x0[_0x3] !== _0x0.loc && _0x0.hasOwnProperty(_0x3)) {
      var _0x4 = _0x0[_0x3];
      _0x4 && 'object' == typeof _0x4 && _0x8c.stripLocations_(_0x4, _0x1, _0x2);
    }
}, _0x8c.prototype.REGEXP_MODE = 2, _0x8c.prototype.REGEXP_THREAD_TIMEOUT = 1000, _0x8c.prototype.POLYFILL_TIMEOUT = 1000, _0x8c.prototype.getterStep_ = !1, _0x8c.prototype.setterStep_ = !1, _0x8c.prototype.appendCodeNumber_ = 0, _0x8c.prototype.taskCodeNumber_ = 0, _0x8c.prototype.parse_ = function(_0x0, _0x1) {
  var _0x2 = {};
  for (var _0x3 in _0x8c.PARSE_OPTIONS)
    _0x2[_0x3] = _0x8c.PARSE_OPTIONS[_0x3];
  return _0x2.sourceFile = _0x1, _0x8c.nativeGlobal.acorn.parse(_0x0, _0x2);
}, _0x8c.prototype.appendCode = function(_0x0) {
  var _0x1 = this.stateStack[0];
  if (!_0x1 || 'Program' !== _0x1.node.type)
    throw Error('Expecting original AST to start with a Program node');
  if ('string' == typeof _0x0 && (_0x0 = this.parse_(_0x0, 'appendCode' + this.appendCodeNumber_++)), !_0x0 || 'Program' !== _0x0.type)
    throw Error('Expecting new AST to start with a Program node');
  this.populateScope_(_0x0, _0x1.scope), Array.prototype.push.apply(_0x1.node.body, _0x0.body), _0x1.node.body.variableCache_ = null, _0x1.done = !1;
}, _0x8c.prototype.step = function() {
  var _0x0, _0x1 = this.stateStack;
  do {
    var _0x2 = _0x1[_0x1.length - 1];
    if (this.paused_)
      break;
    if (!_0x2 || 'Program' === _0x2.node.type && _0x2.done) {
      if (!this.tasks.length)
        return !1;
      if (!(_0x2 = this.nextTask_()))
        break;
    }
    var _0x3 = _0x2.node,
      _0x4 = _0x8c.currentInterpreter_;
    _0x8c.currentInterpreter_ = this;
    try {
      var _0x5 = this.stepFunctions_[_0x3.type](_0x1, _0x2, _0x3);
    } catch (_0x6) {
      if (_0x6 !== _0x8c.STEP_ERROR)
        throw this.value !== _0x6 && (this.value = void 0), _0x6;
    } finally {
      _0x8c.currentInterpreter_ = _0x4;
    }
    if (_0x5 && _0x1.push(_0x5), this.getterStep_)
      throw this.value = void 0, Error('Getter not supported in this context');
    if (this.setterStep_)
      throw this.value = void 0, Error('Setter not supported in this context');
    _0x0 || _0x3.end || (_0x0 = Date.now() + this.POLYFILL_TIMEOUT);
  } while (!_0x3.end && _0x0 > Date.now());
  return !0;
}, _0x8c.prototype.run = function() {
  for (; !this.paused_ && this.step(););
  return this.paused_;
}, _0x8c.prototype.getStatus = function() {
  if (this.paused_)
    return _0x8c.Status.ASYNC;
  var _0x0 = this.stateStack,
    _0x1 = _0x0[_0x0.length - 1];
  if (_0x1 && ('Program' !== _0x1.node.type || !_0x1.done))
    return _0x8c.Status.STEP;
  var _0x2 = this.tasks[0];
  return _0x2 ? _0x2.time > Date.now() ? _0x8c.Status.TASK : _0x8c.Status.STEP : (0, _0x8c.Status.DONE);
}, _0x8c.prototype.initGlobal = function(_0x0) {
  this.setProperty(_0x0, 'NaN', NaN, _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'Infinity', 1 / 0, _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'undefined', void 0, _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'window', _0x0, _0x8c.READONLY_DESCRIPTOR), this.setProperty(_0x0, 'this', _0x0, _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'self', _0x0), this.OBJECT_PROTO = new _0x8c.Object(null), this.FUNCTION_PROTO = new _0x8c.Object(this.OBJECT_PROTO), this.initFunction(_0x0), this.initObject(_0x0), _0x0.proto = this.OBJECT_PROTO, this.setProperty(_0x0, 'constructor', this.OBJECT, _0x8c.NONENUMERABLE_DESCRIPTOR), this.initArray(_0x0), this.initString(_0x0), this.initBoolean(_0x0), this.initNumber(_0x0), this.initDate(_0x0), this.initRegExp(_0x0), this.initError(_0x0), this.initMath(_0x0), this.initJSON(_0x0);
  var _0x1, _0x2 = this,
    _0x3 = this.createNativeFunction(function(_0x0) {
      throw EvalError('Can\'t happen');
    }, !1);
  _0x3.eval = !0, this.setProperty(_0x0, 'eval', _0x3, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'parseInt', this.createNativeFunction(parseInt, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'parseFloat', this.createNativeFunction(parseFloat, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'isNaN', this.createNativeFunction(isNaN, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'isFinite', this.createNativeFunction(isFinite, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x4 = [
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
    ], _0x5 = 0; _0x5 < _0x4.length; _0x5++)
    _0x1 = function(_0x0) {
      return function(_0x1) {
        try {
          return _0x0(_0x1);
        } catch (_0x3) {
          _0x2.throwException(_0x2.URI_ERROR, _0x3.message);
        }
      };
    }(_0x4[_0x5][0]), this.setProperty(_0x0, _0x4[_0x5][1], this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
  _0x1 = function _0x0(_0x1) {
    return _0x2.createTask_(!1, arguments);
  }, this.setProperty(_0x0, 'setTimeout', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return _0x2.createTask_(!0, arguments);
  }, this.setProperty(_0x0, 'setInterval', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    _0x2.deleteTask_(_0x1);
  }, this.setProperty(_0x0, 'clearTimeout', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    _0x2.deleteTask_(_0x1);
  }, this.setProperty(_0x0, 'clearInterval', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.OBJECT = this.OBJECT, this.OBJECT_PROTO = this.OBJECT_PROTO, this.FUNCTION = this.FUNCTION, this.FUNCTION_PROTO = this.FUNCTION_PROTO, this.ARRAY = this.ARRAY, this.ARRAY_PROTO = this.ARRAY_PROTO, this.REGEXP = this.REGEXP, this.REGEXP_PROTO = this.REGEXP_PROTO, this.DATE = this.DATE, this.DATE_PROTO = this.DATE_PROTO, this.initFunc_ && this.initFunc_(this, _0x0);
}, _0x8c.prototype.functionCodeNumber_ = 0, _0x8c.prototype.initFunction = function(_0x0) {
  var _0x1, _0x2 = this,
    _0x3 = /^[A-Za-z_$][\w$]*$/;
  _0x1 = function _0x0(_0x1) {
    if (arguments.length)
      var _0x4 = String(arguments[arguments.length - 1]);
    else
      var _0x4 = '';
    var _0x5 = Array.prototype.slice.call(arguments, 0, -1).join(',').trim();
    if (_0x5) {
      for (var _0x6 = _0x5.split(/\s*,\s*/), _0x7 = 0; _0x7 < _0x6.length; _0x7++) {
        var _0x8 = _0x6[_0x7];
        _0x3.test(_0x8) || _0x2.throwException(_0x2.SYNTAX_ERROR, 'Invalid function argument: ' + _0x8);
      }
      _0x5 = _0x6.join(', ');
    }
    try {
      var _0x9 = _0x2.parse_('(function(' + _0x5 + ') {' + _0x4 + '})', 'function' + _0x2.functionCodeNumber_++);
    } catch (_0xa) {
      _0x2.throwException(_0x2.SYNTAX_ERROR, 'Invalid code: ' + _0xa.message);
    }
    1 !== _0x9.body.length && _0x2.throwException(_0x2.SYNTAX_ERROR, 'Invalid code in function body');
    var _0xb = _0x9.body[0].expression;
    return _0x2.createFunction(_0xb, _0x2.globalScope, 'anonymous');
  }, this.FUNCTION = this.createNativeFunction(_0x1, !0), this.setProperty(_0x0, 'Function', this.FUNCTION, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION, 'prototype', this.FUNCTION_PROTO, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.FUNCTION_PROTO, 'constructor', this.FUNCTION, _0x8c.NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.nativeFunc = function() {}, this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++, this.FUNCTION_PROTO.illegalConstructor = !0, this.setProperty(this.FUNCTION_PROTO, 'length', 0, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.FUNCTION_PROTO.class = 'Function', _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    var _0x5 = _0x2.stateStack[_0x2.stateStack.length - 1];
    _0x5.func_ = _0x1, _0x5.funcThis_ = _0x3, _0x5.arguments_ = [], null != _0x4 && (_0x4 instanceof _0x8c.Object ? _0x5.arguments_ = Array.from(_0x4.properties) : _0x2.throwException(_0x2.TYPE_ERROR, 'CreateListFromArrayLike called on non-object')), _0x5.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'apply', _0x1), this.polyfills_.push('(function() {', 'var apply_ = Function.prototype.apply;', 'Function.prototype.apply = function apply(thisArg, args) {', 'var a2 = [];', 'for (var i = 0; i < args.length; i++) {', 'a2[i] = args[i];', '}', 'return apply_(this, thisArg, a2);', '};', '})();'), _0x1 = function _0x0(_0x1) {
    var _0x3 = _0x2.stateStack[_0x2.stateStack.length - 1];
    _0x3.func_ = this, _0x3.funcThis_ = _0x1, _0x3.arguments_ = [];
    for (var _0x4 = 1; _0x4 < arguments.length; _0x4++)
      _0x3.arguments_.push(arguments[_0x4]);
    _0x3.doneExec_ = !1;
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'call', _0x1), this.polyfills_.push('Object.defineProperty(Function.prototype, \'bind\',', '{configurable: true, writable: true, value:', 'function bind(oThis) {', 'if (typeof this !== \'function\') {', 'throw TypeError(\'What is trying to be bound is not callable\');', '}', 'var aArgs   = Array.prototype.slice.call(arguments, 1),', 'fToBind = this,', 'fNOP    = function() {},', 'fBound  = function() {', 'return fToBind.apply(this instanceof fNOP', '? this', ': oThis,', 'aArgs.concat(Array.prototype.slice.call(arguments)));', '};', 'if (this.prototype) {', 'fNOP.prototype = this.prototype;', '}', 'fBound.prototype = new fNOP();', 'return fBound;', '}', '});', ''), _0x1 = function _0x0() {
    return String(this);
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'toString', _0x1), this.setProperty(this.FUNCTION, 'toString', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0() {
    return this.valueOf();
  }, this.setNativeFunctionPrototype(this.FUNCTION, 'valueOf', _0x1), this.setProperty(this.FUNCTION, 'valueOf', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.initObject = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1) {
    if (null == _0x1)
      return _0x2.calledWithNew() ? this : _0x2.createObjectProto(_0x2.OBJECT_PROTO);
    if (!(_0x1 instanceof _0x8c.Object)) {
      var _0x3 = _0x2.createObjectProto(_0x2.getPrototype(_0x1));
      return _0x3.data = _0x1, _0x3;
    }
    return _0x1;
  }, this.OBJECT = this.createNativeFunction(_0x1, !0), this.setProperty(this.OBJECT, 'prototype', this.OBJECT_PROTO, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.OBJECT_PROTO, 'constructor', this.OBJECT, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'Object', this.OBJECT, _0x8c.NONENUMERABLE_DESCRIPTOR);
  var _0x3 = function(_0x0) {
    null == _0x0 && _0x2.throwException(_0x2.TYPE_ERROR, 'Cannot convert \'' + _0x0 + '\' to object');
  };
  _0x1 = function _0x0(_0x1) {
    _0x3(_0x1);
    var _0x4 = _0x1 instanceof _0x8c.Object ? _0x1.properties : _0x1;
    return _0x2.nativeToPseudo(Object.getOwnPropertyNames(_0x4));
  }, this.setProperty(this.OBJECT, 'getOwnPropertyNames', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return _0x3(_0x1), _0x1 instanceof _0x8c.Object && (_0x1 = _0x1.properties), _0x2.nativeToPseudo(Object.keys(_0x1));
  }, this.setProperty(this.OBJECT, 'keys', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return null === _0x1 ? _0x2.createObjectProto(null) : (_0x1 instanceof _0x8c.Object || _0x2.throwException(_0x2.TYPE_ERROR, 'Object prototype may only be an Object or null, not ' + _0x1), _0x2.createObjectProto(_0x1));
  }, this.setProperty(this.OBJECT, 'create', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var create_ = Object.create;', 'Object.create = function create(proto, props) {', 'var obj = create_(proto);', 'props && Object.defineProperties(obj, props);', 'return obj;', '};', '})();', ''), _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    return _0x3 = String(_0x3), _0x1 instanceof _0x8c.Object || _0x2.throwException(_0x2.TYPE_ERROR, 'Object.defineProperty called on non-object: ' + _0x1), _0x4 instanceof _0x8c.Object || _0x2.throwException(_0x2.TYPE_ERROR, 'Property description must be an object'), !_0x1.preventExtensions || _0x3 in _0x1.properties || _0x2.throwException(_0x2.TYPE_ERROR, 'Can\'t define property \'' + _0x3 + '\', object is not extensible'), _0x2.setProperty(_0x1, _0x3, _0x8c.VALUE_IN_DESCRIPTOR, _0x4.properties), _0x1;
  }, this.setProperty(this.OBJECT, 'defineProperty', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('(function() {', 'var defineProperty_ = Object.defineProperty;', 'Object.defineProperty = function defineProperty(obj, prop, d1) {', 'var d2 = {};', 'if (\'configurable\' in d1) d2.configurable = d1.configurable;', 'if (\'enumerable\' in d1) d2.enumerable = d1.enumerable;', 'if (\'writable\' in d1) d2.writable = d1.writable;', 'if (\'value\' in d1) d2.value = d1.value;', 'if (\'get\' in d1) d2.get = d1.get;', 'if (\'set\' in d1) d2.set = d1.set;', 'return defineProperty_(obj, prop, d2);', '};', '})();', 'Object.defineProperty(Object, \'defineProperties\',', '{configurable: true, writable: true, value:', 'function defineProperties(obj, props) {', 'var keys = Object.keys(props);', 'for (var i = 0; i < keys.length; i++) {', 'Object.defineProperty(obj, keys[i], props[keys[i]]);', '}', 'return obj;', '}', '});', ''), _0x1 = function _0x0(_0x1, _0x3) {
    if (_0x1 instanceof _0x8c.Object || _0x2.throwException(_0x2.TYPE_ERROR, 'Object.getOwnPropertyDescriptor called on non-object: ' + _0x1), (_0x3 = String(_0x3)) in _0x1.properties) {
      var _0x4 = Object.getOwnPropertyDescriptor(_0x1.properties, _0x3),
        _0x5 = _0x1.getter[_0x3],
        _0x6 = _0x1.setter[_0x3],
        _0x7 = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
      return _0x5 || _0x6 ? (_0x2.setProperty(_0x7, 'get', _0x5), _0x2.setProperty(_0x7, 'set', _0x6)) : (_0x2.setProperty(_0x7, 'value', _0x4.value), _0x2.setProperty(_0x7, 'writable', _0x4.writable)), _0x2.setProperty(_0x7, 'configurable', _0x4.configurable), _0x2.setProperty(_0x7, 'enumerable', _0x4.enumerable), _0x7;
    }
  }, this.setProperty(this.OBJECT, 'getOwnPropertyDescriptor', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return _0x3(_0x1), _0x2.getPrototype(_0x1);
  }, this.setProperty(this.OBJECT, 'getPrototypeOf', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return Boolean(_0x1) && !_0x1.preventExtensions;
  }, this.setProperty(this.OBJECT, 'isExtensible', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return _0x1 instanceof _0x8c.Object && (_0x1.preventExtensions = !0), _0x1;
  }, this.setProperty(this.OBJECT, 'preventExtensions', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setNativeFunctionPrototype(this.OBJECT, 'toString', _0x8c.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'toLocaleString', _0x8c.Object.prototype.toString), this.setNativeFunctionPrototype(this.OBJECT, 'valueOf', _0x8c.Object.prototype.valueOf), _0x1 = function _0x0(_0x1) {
    return (_0x3(this), this instanceof _0x8c.Object) ? String(_0x1) in this.properties : this.hasOwnProperty(_0x1);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'hasOwnProperty', _0x1), _0x1 = function _0x0(_0x1) {
    return (_0x3(this), this instanceof _0x8c.Object) ? Object.prototype.propertyIsEnumerable.call(this.properties, _0x1) : this.propertyIsEnumerable(_0x1);
  }, this.setNativeFunctionPrototype(this.OBJECT, 'propertyIsEnumerable', _0x1), _0x1 = function _0x0(_0x1) {
    for (;;) {
      if (!(_0x1 = _0x2.getPrototype(_0x1)))
        return !1;
      if (_0x1 === this)
        return !0;
    }
  }, this.setNativeFunctionPrototype(this.OBJECT, 'isPrototypeOf', _0x1);
}, _0x8c.prototype.initArray = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1) {
    if (_0x2.calledWithNew())
      var _0x3 = this;
    else
      var _0x3 = _0x2.createArray();
    var _0x4 = arguments[0];
    if (1 === arguments.length && 'number' == typeof _0x4)
      isNaN(_0x8c.legalArrayLength(_0x4)) && _0x2.throwException(_0x2.RANGE_ERROR, 'Invalid array length: ' + _0x4), _0x3.properties.length = _0x4;
    else {
      for (var _0x5 = 0; _0x5 < arguments.length; _0x5++)
        _0x3.properties[_0x5] = arguments[_0x5];
      _0x3.properties.length = _0x5;
    }
    return _0x3;
  }, this.ARRAY = this.createNativeFunction(_0x1, !0), this.ARRAY_PROTO = this.ARRAY.properties.prototype, this.setProperty(_0x0, 'Array', this.ARRAY, _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    return _0x1 && 'Array' === _0x1.class;
  }, this.setProperty(this.ARRAY, 'isArray', this.createNativeFunction(_0x1, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ARRAY_PROTO, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), this.ARRAY_PROTO.class = 'Array', this.polyfills_.push('(function() {', 'function createArrayMethod_(name, func) {', 'Object.defineProperty(func, \'name\', {value: name});', 'Object.defineProperty(Array.prototype, name,', '{configurable: true, writable: true, value: func});', '}', 'createArrayMethod_(\'pop\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'len--;', 'var x = o[len];', 'delete o[len];', 'o.length = len;', 'return x;', '}', ');', 'createArrayMethod_(\'push\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'for (var i = 0; i < arguments.length; i++) {', 'o[len] = arguments[i];', 'len++;', '}', 'o.length = len;', 'return len;', '}', ');', 'createArrayMethod_(\'shift\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'o.length = 0;', 'return undefined;', '}', 'var value = o[0];', 'for (var i = 0; i < len - 1; i++) {', 'if ((i + 1) in o) {', 'o[i] = o[i + 1];', '} else {', 'delete o[i];', '}', '}', 'delete o[i];', 'o.length = len - 1;', 'return value;', '}', ');', 'createArrayMethod_(\'unshift\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 0) {', 'len = 0;', '}', 'for (var i = len - 1; i >= 0; i--) {', 'if (i in o) {', 'o[i + arguments.length] = o[i];', '} else {', 'delete o[i + arguments.length];', '}', '}', 'for (var i = 0; i < arguments.length; i++) {', 'o[i] = arguments[i];', '}', 'return (o.length = len + arguments.length);', '}', ');', 'createArrayMethod_(\'reverse\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len || len < 2) {', 'return o;', '}', 'for (var i = 0; i < len / 2 - 0.5; i++) {', 'var x = o[i];', 'var hasX = i in o;', 'if ((len - i - 1) in o) {', 'o[i] = o[len - i - 1];', '} else {', 'delete o[i];', '}', 'if (hasX) {', 'o[len - i - 1] = x;', '} else {', 'delete o[len - i - 1];', '}', '}', 'return o;', '}', ');', 'createArrayMethod_(\'indexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var n = fromIndex | 0;', 'if (!len || n >= len) {', 'return -1;', '}', 'var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);', 'while (i < len) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i++;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'lastIndexOf\',', 'function(searchElement, fromIndex) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'if (!len) {', 'return -1;', '}', 'var n = len - 1;', 'if (arguments.length > 1) {', 'n = fromIndex | 0;', 'if (n) {', 'n = (n > 0 || -1) * Math.floor(Math.abs(n));', '}', '}', 'var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);', 'while (i >= 0) {', 'if (i in o && o[i] === searchElement) {', 'return i;', '}', 'i--;', '}', 'return -1;', '}', ');', 'createArrayMethod_(\'slice\',', 'function(start, end) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'start = (start >= 0) ? start : Math.max(0, len + start);', 'if (typeof end !== \'undefined\') {', 'if (end !== Infinity) {', 'end |= 0;', '}', 'if (end < 0) {', 'end = len + end;', '} else {', 'end = Math.min(end, len);', '}', '} else {', 'end = len;', '}', 'var size = end - start;', 'var cloned = new Array(size);', 'for (var i = 0; i < size; i++) {', 'if ((start + i) in o) {', 'cloned[i] = o[start + i];', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'splice\',', 'function(start, deleteCount, var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'start |= 0;', 'if (start < 0) {', 'start = Math.max(len + start, 0);', '} else {', 'start = Math.min(start, len);', '}', 'if (arguments.length < 2) {', 'deleteCount = len - start;', '} else {', 'deleteCount |= 0;', 'deleteCount = Math.max(0, Math.min(deleteCount, len - start));', '}', 'var removed = [];', 'for (var i = start; i < start + deleteCount; i++) {', 'if (i in o) {', 'removed.push(o[i]);', '} else {', 'removed.length++;', '}', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = start + deleteCount; i < len - deleteCount; i++) {', 'if ((i + deleteCount) in o) {', 'o[i] = o[i + deleteCount];', '} else {', 'delete o[i];', '}', '}', 'for (var i = len - deleteCount; i < len; i++) {', 'delete o[i];', '}', 'len -= deleteCount;', 'if (arguments.length > 2) {', 'var arl = arguments.length - 2;', 'for (var i = len - 1; i >= start; i--) {', 'if (i in o) {', 'o[i + arl] = o[i];', '} else {', 'delete o[i + arl];', '}', '}', 'len += arl;', 'for (var i = 2; i < arguments.length; i++) {', 'o[start + i - 2] = arguments[i];', '}', '}', 'o.length = len;', 'return removed;', '}', ');', 'createArrayMethod_(\'concat\',', 'function(var_args) {', 'if (!this) throw TypeError();', 'var o = Object(this);', 'var cloned = [];', 'for (var i = -1; i < arguments.length; i++) {', 'var value = (i === -1) ? o : arguments[i];', 'if (Array.isArray(value)) {', 'for (var j = 0, l = value.length; j < l; j++) {', 'if (j in value) {', 'cloned.push(value[j]);', '} else {', 'cloned.length++;', '}', '}', '} else {', 'cloned.push(value);', '}', '}', 'return cloned;', '}', ');', 'createArrayMethod_(\'join\',', 'function(opt_separator) {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var sep = typeof opt_separator === \'undefined\' ?', '\',\' : (\'\' + opt_separator);', 'var str = \'\';', 'for (var i = 0; i < len; i++) {', 'if (i && sep) str += sep;', 'str += (o[i] === null || o[i] === undefined) ? \'\' : o[i];', '}', 'return str;', '}', ');', 'createArrayMethod_(\'every\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o && !callback.call(t, o[k], k, o)) return false;', 'k++;', '}', 'return true;', '}', ');', 'createArrayMethod_(\'filter\',', 'function(callback, var_args) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var res = [];', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o) {', 'var val = o[i];', 'if (callback.call(thisArg, val, i, o)) res.push(val);', '}', '}', 'return res;', '}', ');', 'createArrayMethod_(\'forEach\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'while (k < len) {', 'if (k in o) callback.call(t, o[k], k, o);', 'k++;', '}', '}', ');', 'createArrayMethod_(\'map\',', 'function(callback, thisArg) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var t, k = 0;', 'var o = Object(this), len = o.length >>> 0;', 'if (arguments.length > 1) t = thisArg;', 'var a = new Array(len);', 'while (k < len) {', 'if (k in o) a[k] = callback.call(t, o[k], k, o);', 'k++;', '}', 'return a;', '}', ');', 'createArrayMethod_(\'reduce\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = 0, value;', 'if (arguments.length === 2) {', 'value = arguments[1];', '} else {', 'while (k < len && !(k in o)) k++;', 'if (k >= len) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k++];', '}', 'for (; k < len; k++) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'reduceRight\',', 'function(callback /*, initialValue*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var k = len - 1, value;', 'if (arguments.length >= 2) {', 'value = arguments[1];', '} else {', 'while (k >= 0 && !(k in o)) k--;', 'if (k < 0) {', 'throw TypeError(\'Reduce of empty array with no initial value\');', '}', 'value = o[k--];', '}', 'for (; k >= 0; k--) {', 'if (k in o) value = callback(value, o[k], k, o);', '}', 'return value;', '}', ');', 'createArrayMethod_(\'some\',', 'function(callback /*, thisArg*/) {', 'if (!this || typeof callback !== \'function\') throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var thisArg = arguments.length >= 2 ? arguments[1] : void 0;', 'for (var i = 0; i < len; i++) {', 'if (i in o && callback.call(thisArg, o[i], i, o)) return true;', '}', 'return false;', '}', ');', 'createArrayMethod_(\'sort\',', 'function(opt_comp) {', 'if (!this) throw TypeError();', 'if (typeof opt_comp !== \'function\') {', 'opt_comp = undefined;', '}', 'for (var i = 0; i < this.length; i++) {', 'var changes = 0;', 'for (var j = 0; j < this.length - i - 1; j++) {', 'if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :', '(String(this[j]) > String(this[j + 1]))) {', 'var swap = this[j];', 'var hasSwap = j in this;', 'if ((j + 1) in this) {', 'this[j] = this[j + 1];', '} else {', 'delete this[j];', '}', 'if (hasSwap) {', 'this[j + 1] = swap;', '} else {', 'delete this[j + 1];', '}', 'changes++;', '}', '}', 'if (!changes) break;', '}', 'return this;', '}', ');', 'createArrayMethod_(\'toLocaleString\',', 'function() {', 'if (!this) throw TypeError();', 'var o = Object(this), len = o.length >>> 0;', 'var out = [];', 'for (var i = 0; i < len; i++) {', 'out[i] = (o[i] === null || o[i] === undefined) ? \'\' : o[i].toLocaleString();', '}', 'return out.join(\',\');', '}', ');', '})();', '');
}, _0x8c.prototype.initString = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1) {
    return (_0x1 = arguments.length ? _0x8c.nativeGlobal.String(_0x1) : '', _0x2.calledWithNew()) ? (this.data = _0x1, this) : _0x1;
  }, this.STRING = this.createNativeFunction(_0x1, !0), this.setProperty(_0x0, 'String', this.STRING, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.STRING, 'fromCharCode', this.createNativeFunction(String.fromCharCode, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x3 = [
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
    ], _0x4 = 0; _0x4 < _0x3.length; _0x4++)
    this.setNativeFunctionPrototype(this.STRING, _0x3[_0x4], String.prototype[_0x3[_0x4]]);
  _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    _0x3 = _0x2.pseudoToNative(_0x3), _0x4 = _0x2.pseudoToNative(_0x4);
    try {
      return String(this).localeCompare(_0x1, _0x3, _0x4);
    } catch (_0x5) {
      _0x2.throwException(_0x2.ERROR, 'localeCompare: ' + _0x5.message);
    }
  }, this.setNativeFunctionPrototype(this.STRING, 'localeCompare', _0x1), _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    var _0x5 = String(this);
    if (_0x3 = _0x3 ? Number(_0x3) : void 0, _0x2.isa(_0x1, _0x2.REGEXP) && (_0x1 = _0x1.data, _0x2.maybeThrowRegExp(_0x1, _0x4), 2 === _0x2.REGEXP_MODE)) {
      if (_0x8c.vm) {
        var _0x6 = {
            string: _0x5,
            separator: _0x1,
            limit: _0x3
          },
          _0x7 = _0x2.vmCall('string.split(separator, limit)', _0x6, _0x1, _0x4);
        _0x7 !== _0x8c.REGEXP_TIMEOUT && _0x4(_0x2.nativeToPseudo(_0x7));
      } else {
        var _0x8 = _0x2.createWorker(),
          _0x9 = _0x2.regExpTimeout(_0x1, _0x8, _0x4);
        _0x8.onmessage = function(_0x0) {
          clearTimeout(_0x9), _0x4(_0x2.nativeToPseudo(_0x0.data));
        }, _0x8.postMessage([
          'split',
          _0x5,
          _0x1,
          _0x3
        ]);
      }
      return;
    }
    var _0x7 = _0x5.split(_0x1, _0x3);
    _0x4(_0x2.nativeToPseudo(_0x7));
  }, this.setAsyncFunctionPrototype(this.STRING, 'split', _0x1), _0x1 = function _0x0(_0x1, _0x3) {
    var _0x4 = String(this);
    if (_0x1 = _0x2.isa(_0x1, _0x2.REGEXP) ? _0x1.data : RegExp(_0x1), _0x2.maybeThrowRegExp(_0x1, _0x3), 2 === _0x2.REGEXP_MODE) {
      if (_0x8c.vm) {
        var _0x5 = {
            string: _0x4,
            regexp: _0x1
          },
          _0x6 = _0x2.vmCall('string.match(regexp)', _0x5, _0x1, _0x3);
        _0x6 !== _0x8c.REGEXP_TIMEOUT && _0x3(_0x6 && _0x2.matchToPseudo_(_0x6));
      } else {
        var _0x7 = _0x2.createWorker(),
          _0x8 = _0x2.regExpTimeout(_0x1, _0x7, _0x3);
        _0x7.onmessage = function(_0x0) {
          clearTimeout(_0x8), _0x3(_0x0.data && _0x2.matchToPseudo_(_0x0.data));
        }, _0x7.postMessage([
          'match',
          _0x4,
          _0x1
        ]);
      }
      return;
    }
    var _0x6 = _0x4.match(_0x1);
    _0x3(_0x6 && _0x2.matchToPseudo_(_0x6));
  }, this.setAsyncFunctionPrototype(this.STRING, 'match', _0x1), _0x1 = function _0x0(_0x1, _0x3) {
    var _0x4 = String(this);
    if (_0x1 = _0x2.isa(_0x1, _0x2.REGEXP) ? _0x1.data : RegExp(_0x1), _0x2.maybeThrowRegExp(_0x1, _0x3), 2 === _0x2.REGEXP_MODE) {
      if (_0x8c.vm) {
        var _0x5 = {
            string: _0x4,
            regexp: _0x1
          },
          _0x6 = _0x2.vmCall('string.search(regexp)', _0x5, _0x1, _0x3);
        _0x6 !== _0x8c.REGEXP_TIMEOUT && _0x3(_0x6);
      } else {
        var _0x7 = _0x2.createWorker(),
          _0x8 = _0x2.regExpTimeout(_0x1, _0x7, _0x3);
        _0x7.onmessage = function(_0x0) {
          clearTimeout(_0x8), _0x3(_0x0.data);
        }, _0x7.postMessage([
          'search',
          _0x4,
          _0x1
        ]);
      }
      return;
    }
    _0x3(_0x4.search(_0x1));
  }, this.setAsyncFunctionPrototype(this.STRING, 'search', _0x1), _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    var _0x5 = String(this);
    if (_0x3 = String(_0x3), _0x2.isa(_0x1, _0x2.REGEXP) && (_0x1 = _0x1.data, _0x2.maybeThrowRegExp(_0x1, _0x4), 2 === _0x2.REGEXP_MODE)) {
      if (_0x8c.vm) {
        var _0x6 = {
            string: _0x5,
            substr: _0x1,
            newSubstr: _0x3
          },
          _0x7 = _0x2.vmCall('string.replace(substr, newSubstr)', _0x6, _0x1, _0x4);
        _0x7 !== _0x8c.REGEXP_TIMEOUT && _0x4(_0x7);
      } else {
        var _0x8 = _0x2.createWorker(),
          _0x9 = _0x2.regExpTimeout(_0x1, _0x8, _0x4);
        _0x8.onmessage = function(_0x0) {
          clearTimeout(_0x9), _0x4(_0x0.data);
        }, _0x8.postMessage([
          'replace',
          _0x5,
          _0x1,
          _0x3
        ]);
      }
      return;
    }
    _0x4(_0x5.replace(_0x1, _0x3));
  }, this.setAsyncFunctionPrototype(this.STRING, 'replace', _0x1), this.polyfills_.push('(function() {', 'var replace_ = String.prototype.replace;', 'String.prototype.replace = function replace(substr, newSubstr) {', 'if (typeof newSubstr !== \'function\') {', 'return replace_.call(this, substr, newSubstr);', '}', 'var str = this;', 'if (substr instanceof RegExp) {', 'var subs = [];', 'var m = substr.exec(str);', 'while (m) {', 'm.push(m.index, str);', 'var inject = newSubstr.apply(null, m);', 'subs.push([m.index, m[0].length, inject]);', 'm = substr.global ? substr.exec(str) : null;', '}', 'for (var i = subs.length - 1; i >= 0; i--) {', 'str = str.substring(0, subs[i][0]) + subs[i][2] + ', 'str.substring(subs[i][0] + subs[i][1]);', '}', '} else {', 'var i = str.indexOf(substr);', 'if (i !== -1) {', 'var inject = newSubstr(str.substr(i, substr.length), i, str);', 'str = str.substring(0, i) + inject + ', 'str.substring(i + substr.length);', '}', '}', 'return str;', '};', '})();', '');
}, _0x8c.prototype.initBoolean = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1) {
    return (_0x1 = _0x8c.nativeGlobal.Boolean(_0x1), _0x2.calledWithNew()) ? (this.data = _0x1, this) : _0x1;
  }, this.BOOLEAN = this.createNativeFunction(_0x1, !0), this.setProperty(_0x0, 'Boolean', this.BOOLEAN, _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.initNumber = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1) {
    return (_0x1 = arguments.length ? _0x8c.nativeGlobal.Number(_0x1) : 0, _0x2.calledWithNew()) ? (this.data = _0x1, this) : _0x1;
  }, this.NUMBER = this.createNativeFunction(_0x1, !0), this.setProperty(_0x0, 'Number', this.NUMBER, _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x3 = [
      'MAX_VALUE',
      'MIN_VALUE',
      'NaN',
      'NEGATIVE_INFINITY',
      'POSITIVE_INFINITY'
    ], _0x4 = 0; _0x4 < _0x3.length; _0x4++)
    this.setProperty(this.NUMBER, _0x3[_0x4], Number[_0x3[_0x4]], _0x8c.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR);
  _0x1 = function _0x0(_0x1) {
    try {
      return Number(this).toExponential(_0x1);
    } catch (_0x3) {
      _0x2.throwException(_0x2.ERROR, _0x3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toExponential', _0x1), _0x1 = function _0x0(_0x1) {
    try {
      return Number(this).toFixed(_0x1);
    } catch (_0x3) {
      _0x2.throwException(_0x2.ERROR, _0x3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toFixed', _0x1), _0x1 = function _0x0(_0x1) {
    try {
      return Number(this).toPrecision(_0x1);
    } catch (_0x3) {
      _0x2.throwException(_0x2.ERROR, _0x3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toPrecision', _0x1), _0x1 = function _0x0(_0x1) {
    try {
      return Number(this).toString(_0x1);
    } catch (_0x3) {
      _0x2.throwException(_0x2.ERROR, _0x3.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toString', _0x1), _0x1 = function _0x0(_0x1, _0x3) {
    _0x1 = _0x1 ? _0x2.pseudoToNative(_0x1) : void 0, _0x3 = _0x3 ? _0x2.pseudoToNative(_0x3) : void 0;
    try {
      return Number(this).toLocaleString(_0x1, _0x3);
    } catch (_0x4) {
      _0x2.throwException(_0x2.ERROR, 'toLocaleString: ' + _0x4.message);
    }
  }, this.setNativeFunctionPrototype(this.NUMBER, 'toLocaleString', _0x1);
}, _0x8c.prototype.initDate = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1, _0x3) {
    if (!_0x2.calledWithNew())
      return _0x8c.nativeGlobal.Date();
    var _0x4 = [null].concat(Array.from(arguments));
    return this.data = new(Function.prototype.bind.apply(_0x8c.nativeGlobal.Date, _0x4))(), this;
  }, this.DATE = this.createNativeFunction(_0x1, !0), this.DATE_PROTO = this.DATE.properties.prototype, this.setProperty(_0x0, 'Date', this.DATE, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'now', this.createNativeFunction(Date.now, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'parse', this.createNativeFunction(Date.parse, !1), _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.DATE, 'UTC', this.createNativeFunction(Date.UTC, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x3 = [
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
    ], _0x4 = 0; _0x4 < _0x3.length; _0x4++)
    _0x1 = function(_0x0) {
      return function(_0x1) {
        var _0x3 = this.data;
        _0x3 instanceof Date || _0x2.throwException(_0x2.TYPE_ERROR, _0x0 + ' not called on a Date');
        for (var _0x4 = [], _0x5 = 0; _0x5 < arguments.length; _0x5++)
          _0x4[_0x5] = _0x2.pseudoToNative(arguments[_0x5]);
        return _0x3[_0x0].apply(_0x3, _0x4);
      };
    }(_0x3[_0x4]), this.setNativeFunctionPrototype(this.DATE, _0x3[_0x4], _0x1);
  _0x1 = function _0x0() {
    try {
      return this.data.toISOString();
    } catch (_0x1) {
      _0x2.throwException(_0x2.RANGE_ERROR, 'toISOString: ' + _0x1.message);
    }
  }, this.setNativeFunctionPrototype(this.DATE, 'toISOString', _0x1);
}, _0x8c.prototype.initRegExp = function(_0x0) {
  var _0x1, _0x2 = this;
  _0x1 = function _0x0(_0x1, _0x3) {
    if (_0x2.calledWithNew())
      var _0x4 = this;
    else {
      if (void 0 === _0x3 && _0x2.isa(_0x1, _0x2.REGEXP))
        return _0x1;
      var _0x4 = _0x2.createObjectProto(_0x2.REGEXP_PROTO);
    }
    _0x1 = void 0 === _0x1 ? '' : String(_0x1), _0x3 = _0x3 ? String(_0x3) : '', /^[gmi]*$/.test(_0x3) || _0x2.throwException(_0x2.SYNTAX_ERROR, 'Invalid regexp flag: ' + _0x3);
    try {
      var _0x5 = new _0x8c.nativeGlobal.RegExp(_0x1, _0x3);
    } catch (_0x6) {
      _0x2.throwException(_0x2.SYNTAX_ERROR, _0x6.message);
    }
    return _0x2.populateRegExp(_0x4, _0x5), _0x4;
  }, this.REGEXP = this.createNativeFunction(_0x1, !0), this.REGEXP_PROTO = this.REGEXP.properties.prototype, this.setProperty(_0x0, 'RegExp', this.REGEXP, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'global', void 0, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'ignoreCase', void 0, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'multiline', void 0, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(this.REGEXP.properties.prototype, 'source', '(?:)', _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.polyfills_.push('Object.defineProperty(RegExp.prototype, \'test\',', '{configurable: true, writable: true, value:', 'function test(str) {', 'return !!this.exec(str);', '}', '});'), _0x1 = function _0x0(_0x1, _0x3) {
    var _0x4 = this.data;
    if (_0x1 = String(_0x1), _0x4.lastIndex = Number(_0x2.getProperty(this, 'lastIndex')), _0x2.maybeThrowRegExp(_0x4, _0x3), 2 === _0x2.REGEXP_MODE) {
      if (_0x8c.vm) {
        var _0x5 = {
            string: _0x1,
            regexp: _0x4
          },
          _0x6 = _0x2.vmCall('regexp.exec(string)', _0x5, _0x4, _0x3);
        _0x6 !== _0x8c.REGEXP_TIMEOUT && (_0x2.setProperty(this, 'lastIndex', _0x4.lastIndex), _0x3(_0x2.matchToPseudo_(_0x6)));
      } else {
        var _0x7 = _0x2.createWorker(),
          _0x8 = _0x2.regExpTimeout(_0x4, _0x7, _0x3),
          _0x9 = this;
        _0x7.onmessage = function(_0x0) {
          clearTimeout(_0x8), _0x2.setProperty(_0x9, 'lastIndex', _0x0.data[1]), _0x3(_0x2.matchToPseudo_(_0x0.data[0]));
        }, _0x7.postMessage([
          'exec',
          _0x4,
          _0x4.lastIndex,
          _0x1
        ]);
      }
      return;
    }
    var _0x6 = _0x4.exec(_0x1);
    _0x2.setProperty(this, 'lastIndex', _0x4.lastIndex), _0x3(_0x2.matchToPseudo_(_0x6));
  }, this.setAsyncFunctionPrototype(this.REGEXP, 'exec', _0x1);
}, _0x8c.prototype.matchToPseudo_ = function(_0x0) {
  if (_0x0) {
    for (var _0x1 = Object.getOwnPropertyNames(_0x0), _0x2 = 0; _0x2 < _0x1.length; _0x2++) {
      var _0x3 = _0x1[_0x2];
      isNaN(Number(_0x3)) && 'length' !== _0x3 && 'input' !== _0x3 && 'index' !== _0x3 && delete _0x0[_0x3];
    }
    return this.nativeToPseudo(_0x0);
  }
  return null;
}, _0x8c.prototype.initError = function(_0x0) {
  var _0x1 = this;
  this.ERROR = this.createNativeFunction(function _0x0(_0x2) {
    if (_0x1.calledWithNew())
      var _0x3 = this;
    else
      var _0x3 = _0x1.createObject(_0x1.ERROR);
    return _0x1.populateError(_0x3, _0x2), _0x3;
  }, !0), this.setProperty(_0x0, 'Error', this.ERROR, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'message', '', _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(this.ERROR.properties.prototype, 'name', 'Error', _0x8c.NONENUMERABLE_DESCRIPTOR);
  var _0x2 = function(_0x2) {
    var _0x3 = _0x1.createNativeFunction(function(_0x0) {
      if (_0x1.calledWithNew())
        var _0x2 = this;
      else
        var _0x2 = _0x1.createObject(_0x3);
      return _0x1.populateError(_0x2, _0x0), _0x2;
    }, !0);
    return _0x1.setProperty(_0x3, 'prototype', _0x1.createObject(_0x1.ERROR), _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1.setProperty(_0x3.properties.prototype, 'name', _0x2, _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1.setProperty(_0x0, _0x2, _0x3, _0x8c.NONENUMERABLE_DESCRIPTOR), _0x3;
  };
  this.EVAL_ERROR = _0x2('EvalError'), this.RANGE_ERROR = _0x2('RangeError'), this.REFERENCE_ERROR = _0x2('ReferenceError'), this.SYNTAX_ERROR = _0x2('SyntaxError'), this.TYPE_ERROR = _0x2('TypeError'), this.URI_ERROR = _0x2('URIError');
}, _0x8c.prototype.initMath = function(_0x0) {
  var _0x1 = this.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(_0x0, 'Math', _0x1, _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x2 = [
      'E',
      'LN2',
      'LN10',
      'LOG2E',
      'LOG10E',
      'PI',
      'SQRT1_2',
      'SQRT2'
    ], _0x3 = 0; _0x3 < _0x2.length; _0x3++)
    this.setProperty(_0x1, _0x2[_0x3], Math[_0x2[_0x3]], _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR);
  for (var _0x4 = [
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
    ], _0x3 = 0; _0x3 < _0x4.length; _0x3++)
    this.setProperty(_0x1, _0x4[_0x3], this.createNativeFunction(Math[_0x4[_0x3]], !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.initJSON = function(_0x0) {
  var _0x1, _0x2 = this,
    _0x3 = _0x2.createObjectProto(this.OBJECT_PROTO);
  this.setProperty(_0x0, 'JSON', _0x3, _0x8c.NONENUMERABLE_DESCRIPTOR), _0x1 = function _0x0(_0x1) {
    try {
      var _0x3 = JSON.parse(String(_0x1));
    } catch (_0x4) {
      _0x2.throwException(_0x2.SYNTAX_ERROR, _0x4.message);
    }
    return _0x2.nativeToPseudo(_0x3);
  }, this.setProperty(_0x3, 'parse', this.createNativeFunction(_0x1, !1)), _0x1 = function _0x0(_0x1, _0x3, _0x4) {
    _0x3 && 'Function' === _0x3.class ? _0x2.throwException(_0x2.TYPE_ERROR, 'Function replacer on JSON.stringify not supported') : _0x3 = _0x3 && 'Array' === _0x3.class ? (_0x3 = _0x2.pseudoToNative(_0x3)).filter(function(_0x0) {
      return 'string' == typeof _0x0 || 'number' == typeof _0x0;
    }) : null, 'string' != typeof _0x4 && 'number' != typeof _0x4 && (_0x4 = void 0);
    var _0x5 = _0x2.pseudoToNative(_0x1);
    try {
      var _0x6 = JSON.stringify(_0x5, _0x3, _0x4);
    } catch (_0x7) {
      _0x2.throwException(_0x2.TYPE_ERROR, _0x7.message);
    }
    return _0x6;
  }, this.setProperty(_0x3, 'stringify', this.createNativeFunction(_0x1, !1));
}, _0x8c.prototype.isa = function(_0x0, _0x1) {
  if (null == _0x0 || !_0x1)
    return !1;
  var _0x2 = _0x1.properties.prototype;
  if (_0x0 === _0x2)
    return !0;
  for (_0x0 = this.getPrototype(_0x0); _0x0;) {
    if (_0x0 === _0x2)
      return !0;
    _0x0 = _0x0.proto;
  }
  return !1;
}, _0x8c.prototype.populateRegExp = function(_0x0, _0x1) {
  _0x0.data = RegExp(_0x1.source, _0x1.flags), this.setProperty(_0x0, 'lastIndex', _0x1.lastIndex, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'source', _0x1.source, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'global', _0x1.global, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'ignoreCase', _0x1.ignoreCase, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x0, 'multiline', _0x1.multiline, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.populateError = function(_0x0, _0x1) {
  _0x1 && this.setProperty(_0x0, 'message', String(_0x1), _0x8c.NONENUMERABLE_DESCRIPTOR);
  for (var _0x2 = [], _0x3 = this.stateStack.length - 1; _0x3 >= 0; _0x3--) {
    var _0x4 = this.stateStack[_0x3],
      _0x5 = _0x4.node;
    if ('CallExpression' === _0x5.type) {
      var _0x6 = _0x4.func_;
      _0x6 && _0x2.length && (_0x2[_0x2.length - 1].datumName = this.getProperty(_0x6, 'name'));
    }
    _0x5.loc && (!_0x2.length || 'CallExpression' === _0x5.type) && _0x2.push({
      datumLoc: _0x5.loc
    });
  }
  for (var _0x7 = String(this.getProperty(_0x0, 'name')), _0x8 = String(this.getProperty(_0x0, 'message')), _0x9 = _0x7 + ': ' + _0x8 + '\n', _0x3 = 0; _0x3 < _0x2.length; _0x3++) {
    var _0xa = _0x2[_0x3].datumLoc,
      _0xb = _0x2[_0x3].datumName,
      _0xc = _0xa.source + ':' + _0xa.start.line + ':' + _0xa.start.column;
    _0xb ? _0x9 += '  at ' + _0xb + ' (' + _0xc + ')\n' : _0x9 += '  at ' + _0xc + '\n';
  }
  this.setProperty(_0x0, 'stack', _0x9.trim(), _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.createWorker = function() {
  var _0x0 = this.createWorker.blob_;
  return _0x0 || (_0x0 = new Blob([_0x8c.WORKER_CODE.join('\n')], {
    type: 'application/javascript'
  }), this.createWorker.blob_ = _0x0), new Worker(URL.createObjectURL(_0x0));
}, _0x8c.prototype.vmCall = function(_0x0, _0x1, _0x2, _0x3) {
  var _0x4 = {
    timeout: this.REGEXP_THREAD_TIMEOUT
  };
  try {
    return _0x8c.vm.runInNewContext(_0x0, _0x1, _0x4);
  } catch (_0x5) {
    _0x3(null), this.throwException(this.ERROR, 'RegExp Timeout: ' + _0x2);
  }
  return _0x8c.REGEXP_TIMEOUT;
}, _0x8c.prototype.maybeThrowRegExp = function(_0x0, _0x1) {
  var _0x2;
  if (0 === this.REGEXP_MODE)
    _0x2 = !1;
  else if (1 === this.REGEXP_MODE)
    _0x2 = !0;
  else if (_0x8c.vm)
    _0x2 = !0;
  else if ('function' == typeof Worker && 'function' == typeof URL)
    _0x2 = !0;
  else if ('function' == typeof require) {
    try {
      _0x8c.vm = require('vm');
    } catch (_0x3) {}
    _0x2 = !!_0x8c.vm;
  } else
    _0x2 = !1;
  _0x2 || (_0x1(null), this.throwException(this.ERROR, 'Regular expressions not supported: ' + _0x0));
}, _0x8c.prototype.regExpTimeout = function(_0x0, _0x1, _0x2) {
  var _0x3 = this;
  return setTimeout(function() {
    _0x1.terminate(), _0x2(null);
    try {
      _0x3.throwException(_0x3.ERROR, 'RegExp Timeout: ' + _0x0);
    } catch (_0x4) {}
  }, this.REGEXP_THREAD_TIMEOUT);
}, _0x8c.prototype.createObject = function(_0x0) {
  return this.createObjectProto(_0x0 && _0x0.properties.prototype);
}, _0x8c.prototype.createObjectProto = function(_0x0) {
  if ('object' != typeof _0x0)
    throw Error('Non object prototype');
  var _0x1 = new _0x8c.Object(_0x0);
  return this.isa(_0x1, this.ERROR) && (_0x1.class = 'Error'), _0x1;
}, _0x8c.prototype.createArray = function() {
  var _0x0 = this.createObjectProto(this.ARRAY_PROTO);
  return this.setProperty(_0x0, 'length', 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  }), _0x0.class = 'Array', _0x0;
}, _0x8c.prototype.createFunctionBase_ = function(_0x0, _0x1) {
  var _0x2 = this.createObjectProto(this.FUNCTION_PROTO);
  if (_0x1) {
    var _0x3 = this.createObjectProto(this.OBJECT_PROTO);
    this.setProperty(_0x2, 'prototype', _0x3, _0x8c.NONENUMERABLE_DESCRIPTOR), this.setProperty(_0x3, 'constructor', _0x2, _0x8c.NONENUMERABLE_DESCRIPTOR);
  } else
    _0x2.illegalConstructor = !0;
  return this.setProperty(_0x2, 'length', _0x0, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), _0x2.class = 'Function', _0x2;
}, _0x8c.prototype.createFunction = function(_0x0, _0x1, _0x2) {
  var _0x3 = this.createFunctionBase_(_0x0.params.length, !0);
  _0x3.parentScope = _0x1, _0x3.node = _0x0;
  var _0x4 = _0x0.id ? String(_0x0.id.name) : _0x2 || '';
  return this.setProperty(_0x3, 'name', _0x4, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), _0x3;
}, _0x8c.prototype.createNativeFunction = function(_0x0, _0x1) {
  var _0x2 = this.createFunctionBase_(_0x0.length, _0x1);
  return _0x2.nativeFunc = _0x0, _0x0.id = this.functionCounter_++, this.setProperty(_0x2, 'name', _0x0.name, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), _0x2;
}, _0x8c.prototype.createAsyncFunction = function(_0x0) {
  var _0x1 = this.createFunctionBase_(_0x0.length, !0);
  return _0x1.asyncFunc = _0x0, _0x0.id = this.functionCounter_++, this.setProperty(_0x1, 'name', _0x0.name, _0x8c.READONLY_NONENUMERABLE_DESCRIPTOR), _0x1;
}, _0x8c.prototype.nativeToPseudo = function(_0x0, _0x1) {
  if (null == _0x0 || !0 === _0x0 || !1 === _0x0 || 'string' == typeof _0x0 || 'number' == typeof _0x0)
    return _0x0;
  if (_0x0 instanceof _0x8c.Object)
    throw Error('Object is already pseudo');
  var _0x2, _0x3, _0x4 = _0x1 || {
      pseudo: [],
      native: []
    },
    _0x5 = _0x4.native.indexOf(_0x0);
  if (-1 !== _0x5)
    return _0x4.pseudo[_0x5];
  if (_0x4.native.push(_0x0), _0x0 instanceof RegExp) {
    var _0x6 = this.createObjectProto(this.REGEXP_PROTO);
    return this.populateRegExp(_0x6, _0x0), _0x4.pseudo.push(_0x6), _0x6;
  }
  if (_0x0 instanceof Date) {
    var _0x7 = this.createObjectProto(this.DATE_PROTO);
    return _0x7.data = new Date(_0x0.valueOf()), _0x4.pseudo.push(_0x7), _0x7;
  }
  if (_0x0 instanceof Number ? _0x2 = this.createObject(this.NUMBER) : _0x0 instanceof String ? _0x2 = this.createObject(this.STRING) : _0x0 instanceof Boolean && (_0x2 = this.createObject(this.BOOLEAN)), _0x2)
    return _0x2.data = _0x0.valueOf(), _0x4.pseudo.push(_0x2), _0x2;
  if ('function' == typeof _0x0) {
    var _0x8 = this,
      _0x9 = function() {
        var _0x1 = Array.prototype.slice.call(arguments).map(function(_0x0) {
            return _0x8.pseudoToNative(_0x0);
          }),
          _0x2 = _0x0.apply(_0x8, _0x1);
        return _0x8.nativeToPseudo(_0x2);
      },
      _0xa = Object.getOwnPropertyDescriptor(_0x0, 'prototype'),
      _0xb = this.createNativeFunction(_0x9, !!_0xa);
    return _0x4.pseudo.push(_0xb), _0xb;
  }
  for (var _0xc in (_0x3 = Array.isArray(_0x0) ? this.createArray() : this.createObjectProto(this.OBJECT_PROTO), _0x4.pseudo.push(_0x3), _0x0))
    this.setProperty(_0x3, _0xc, this.nativeToPseudo(_0x0[_0xc], _0x4));
  return _0x3;
}, _0x8c.prototype.pseudoToNative = function(_0x0, _0x1) {
  if (null == _0x0 || !0 === _0x0 || !1 === _0x0 || 'string' == typeof _0x0 || 'number' == typeof _0x0)
    return _0x0;
  if (!(_0x0 instanceof _0x8c.Object))
    throw Error('Object is not pseudo');
  var _0x2, _0x3 = _0x1 || {
      pseudo: [],
      native: []
    },
    _0x4 = _0x3.pseudo.indexOf(_0x0);
  if (-1 !== _0x4)
    return _0x3.native[_0x4];
  if (_0x3.pseudo.push(_0x0), this.isa(_0x0, this.REGEXP)) {
    var _0x5 = RegExp(_0x0.data.source, _0x0.data.flags);
    return _0x5.lastIndex = _0x0.data.lastIndex, _0x3.native.push(_0x5), _0x5;
  }
  if (this.isa(_0x0, this.DATE)) {
    var _0x6 = new Date(_0x0.data.valueOf());
    return _0x3.native.push(_0x6), _0x6;
  }
  if (this.isa(_0x0, this.NUMBER) || this.isa(_0x0, this.STRING) || this.isa(_0x0, this.BOOLEAN)) {
    var _0x7 = Object(_0x0.data);
    return _0x3.native.push(_0x7), _0x7;
  }
  var _0x8 = this.isa(_0x0, this.ARRAY) ? [] : {};
  for (var _0x9 in (_0x3.native.push(_0x8), _0x0.properties))
    _0x2 = this.pseudoToNative(_0x0.properties[_0x9], _0x3), Object.defineProperty(_0x8, _0x9, {
      value: _0x2,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return _0x8;
}, _0x8c.prototype.getPrototype = function(_0x0) {
  switch (typeof _0x0) {
    case 'number':
      return this.NUMBER.properties.prototype;
    case 'boolean':
      return this.BOOLEAN.properties.prototype;
    case 'string':
      return this.STRING.properties.prototype;
  }
  return _0x0 ? _0x0.proto : null;
}, _0x8c.prototype.getProperty = function(_0x0, _0x1) {
  if (this.getterStep_)
    throw Error('Getter not supported in that context');
  if (_0x1 = String(_0x1), null == _0x0 && this.throwException(this.TYPE_ERROR, 'Cannot read property \'' + _0x1 + '\' of ' + _0x0), 'object' == typeof _0x0 && !(_0x0 instanceof _0x8c.Object))
    throw TypeError('Expecting native value or pseudo object');
  if ('length' === _0x1) {
    if (this.isa(_0x0, this.STRING))
      return String(_0x0).length;
  } else if (64 > _0x1.charCodeAt(0) && this.isa(_0x0, this.STRING)) {
    var _0x2 = _0x8c.legalArrayIndex(_0x1);
    if (!isNaN(_0x2) && _0x2 < String(_0x0).length)
      return String(_0x0)[_0x2];
  }
  do
    if (_0x0.properties && _0x1 in _0x0.properties) {
      var _0x3 = _0x0.getter[_0x1];
      if (_0x3)
        return this.getterStep_ = !0, _0x3;
      return _0x0.properties[_0x1];
    }
  while (_0x0 = this.getPrototype(_0x0));
}, _0x8c.prototype.hasProperty = function(_0x0, _0x1) {
  if (!(_0x0 instanceof _0x8c.Object))
    throw TypeError('Primitive data type has no properties');
  if ('length' === (_0x1 = String(_0x1)) && this.isa(_0x0, this.STRING))
    return !0;
  if (this.isa(_0x0, this.STRING)) {
    var _0x2 = _0x8c.legalArrayIndex(_0x1);
    if (!isNaN(_0x2) && _0x2 < String(_0x0).length)
      return !0;
  }
  do
    if (_0x0.properties && _0x1 in _0x0.properties)
      return !0;
  while (_0x0 = this.getPrototype(_0x0));
  return !1;
}, _0x8c.prototype.setProperty = function(_0x0, _0x1, _0x2, _0x3) {
  if (this.setterStep_)
    throw Error('Setter not supported in that context');
  if (_0x1 = String(_0x1), null == _0x0 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + _0x1 + '\' of ' + _0x0), 'object' == typeof _0x0 && !(_0x0 instanceof _0x8c.Object))
    throw TypeError('Expecting native value or pseudo object');
  _0x3 && ('get' in _0x3 || 'set' in _0x3) && ('value' in _0x3 || 'writable' in _0x3) && this.throwException(this.TYPE_ERROR, 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  var _0x4 = !this.stateStack || this.getScope().strict;
  if (!(_0x0 instanceof _0x8c.Object)) {
    _0x4 && this.throwException(this.TYPE_ERROR, 'Can\'t create property \'' + _0x1 + '\' on \'' + _0x0 + '\'');
    return;
  }
  if (this.isa(_0x0, this.STRING)) {
    var _0x5 = _0x8c.legalArrayIndex(_0x1);
    if ('length' === _0x1 || !isNaN(_0x5) && _0x5 < String(_0x0).length) {
      _0x4 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + _0x1 + '\' of String \'' + _0x0.data + '\'');
      return;
    }
  }
  if ('Array' === _0x0.class) {
    var _0x6, _0x7 = _0x0.properties.length;
    if ('length' === _0x1) {
      if (_0x3) {
        if (!('value' in _0x3))
          return;
        _0x2 = _0x3.value;
      }
      if (isNaN(_0x2 = _0x8c.legalArrayLength(_0x2)) && this.throwException(this.RANGE_ERROR, 'Invalid array length'), _0x2 < _0x7)
        for (_0x6 in _0x0.properties)
          !isNaN(_0x6 = _0x8c.legalArrayIndex(_0x6)) && _0x2 <= _0x6 && delete _0x0.properties[_0x6];
    } else
      isNaN(_0x6 = _0x8c.legalArrayIndex(_0x1)) || (_0x0.properties.length = Math.max(_0x7, _0x6 + 1));
  }
  if (_0x0.preventExtensions && !(_0x1 in _0x0.properties)) {
    _0x4 && this.throwException(this.TYPE_ERROR, 'Can\'t add property \'' + _0x1 + '\', object is not extensible');
    return;
  }
  if (_0x3) {
    var _0x8 = {};
    'get' in _0x3 && _0x3.get && (_0x0.getter[_0x1] = _0x3.get, _0x8.get = this.setProperty.placeholderGet_), 'set' in _0x3 && _0x3.set && (_0x0.setter[_0x1] = _0x3.set, _0x8.set = this.setProperty.placeholderSet_), 'configurable' in _0x3 && (_0x8.configurable = _0x3.configurable), 'enumerable' in _0x3 && (_0x8.enumerable = _0x3.enumerable), 'writable' in _0x3 && (_0x8.writable = _0x3.writable, delete _0x0.getter[_0x1], delete _0x0.setter[_0x1]), 'value' in _0x3 ? (_0x8.value = _0x3.value, delete _0x0.getter[_0x1], delete _0x0.setter[_0x1]) : _0x2 !== _0x8c.VALUE_IN_DESCRIPTOR && (_0x8.value = _0x2, delete _0x0.getter[_0x1], delete _0x0.setter[_0x1]);
    try {
      Object.defineProperty(_0x0.properties, _0x1, _0x8);
    } catch (_0x9) {
      this.throwException(this.TYPE_ERROR, 'Cannot redefine property: ' + _0x1);
    }
    'get' in _0x3 && !_0x3.get && delete _0x0.getter[_0x1], 'set' in _0x3 && !_0x3.set && delete _0x0.setter[_0x1];
  } else {
    if (_0x2 === _0x8c.VALUE_IN_DESCRIPTOR)
      throw ReferenceError('Value not specified');
    for (var _0xa = _0x0; !(_0x1 in _0xa.properties);)
      if (!(_0xa = this.getPrototype(_0xa))) {
        _0xa = _0x0;
        break;
      }
    if (_0xa.setter && _0xa.setter[_0x1])
      return this.setterStep_ = !0, _0xa.setter[_0x1];
    if (_0xa.getter && _0xa.getter[_0x1])
      _0x4 && this.throwException(this.TYPE_ERROR, 'Cannot set property \'' + _0x1 + '\' of object \'' + _0x0 + '\' which only has a getter');
    else
      try {
        _0x0.properties[_0x1] = _0x2;
      } catch (_0xb) {
        _0x4 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only property \'' + _0x1 + '\' of object \'' + _0x0 + '\'');
      }
  }
}, _0x8c.prototype.setProperty.placeholderGet_ = function() {
  throw Error('Placeholder getter');
}, _0x8c.prototype.setProperty.placeholderSet_ = function() {
  throw Error('Placeholder setter');
}, _0x8c.prototype.setNativeFunctionPrototype = function(_0x0, _0x1, _0x2) {
  this.setProperty(_0x0.properties.prototype, _0x1, this.createNativeFunction(_0x2, !1), _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.setAsyncFunctionPrototype = function(_0x0, _0x1, _0x2) {
  this.setProperty(_0x0.properties.prototype, _0x1, this.createAsyncFunction(_0x2), _0x8c.NONENUMERABLE_DESCRIPTOR);
}, _0x8c.prototype.getScope = function() {
  var _0x0 = this.stateStack[this.stateStack.length - 1].scope;
  if (!_0x0)
    throw Error('No scope found');
  return _0x0;
}, _0x8c.prototype.createScope = function(_0x0, _0x1) {
  var _0x2 = !1;
  if (_0x1 && _0x1.strict)
    _0x2 = !0;
  else {
    var _0x3 = _0x0.body && _0x0.body[0];
    _0x3 && _0x3.expression && 'Literal' === _0x3.expression.type && 'use strict' === _0x3.expression.value && (_0x2 = !0);
  }
  var _0x4 = this.createObjectProto(null),
    _0x5 = new _0x8c.Scope(_0x1, _0x2, _0x4);
  return _0x1 || this.initGlobal(_0x5.object), this.populateScope_(_0x0, _0x5), _0x5;
}, _0x8c.prototype.createSpecialScope = function(_0x0, _0x1) {
  if (!_0x0)
    throw Error('parentScope required');
  var _0x2 = _0x1 || this.createObjectProto(null);
  return new _0x8c.Scope(_0x0, _0x0.strict, _0x2);
}, _0x8c.prototype.getValueFromScope = function(_0x0) {
  for (var _0x1 = this.getScope(); _0x1 && _0x1 !== this.globalScope;) {
    if (_0x0 in _0x1.object.properties)
      return _0x1.object.properties[_0x0];
    _0x1 = _0x1.parentScope;
  }
  if (_0x1 === this.globalScope && this.hasProperty(_0x1.object, _0x0))
    return this.getProperty(_0x1.object, _0x0);
  var _0x2 = this.stateStack[this.stateStack.length - 1].node;
  ('UnaryExpression' !== _0x2.type || 'typeof' !== _0x2.operator) && this.throwException(this.REFERENCE_ERROR, _0x0 + ' is not defined');
}, _0x8c.prototype.setValueToScope = function(_0x0, _0x1) {
  for (var _0x2 = this.getScope(), _0x3 = _0x2.strict; _0x2 && _0x2 !== this.globalScope;) {
    if (_0x0 in _0x2.object.properties) {
      try {
        _0x2.object.properties[_0x0] = _0x1;
      } catch (_0x4) {
        _0x3 && this.throwException(this.TYPE_ERROR, 'Cannot assign to read only variable \'' + _0x0 + '\'');
      }
      return;
    }
    _0x2 = _0x2.parentScope;
  }
  if (_0x2 === this.globalScope && (!_0x3 || this.hasProperty(_0x2.object, _0x0)))
    return this.setProperty(_0x2.object, _0x0, _0x1);
  this.throwException(this.REFERENCE_ERROR, _0x0 + ' is not defined');
}, _0x8c.prototype.populateScope_ = function(_0x0, _0x1) {
  var _0x2;
  if (_0x0.variableCache_)
    _0x2 = _0x0.variableCache_;
  else {
    switch (_0x2 = Object.create(null), _0x0.type) {
      case 'VariableDeclaration':
        for (var _0x3 = 0; _0x3 < _0x0.declarations.length; _0x3++)
          _0x2[_0x0.declarations[_0x3].id.name] = !0;
        break;
      case 'FunctionDeclaration':
        _0x2[_0x0.id.name] = _0x0;
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
        var _0x4 = _0x0.constructor;
        for (var _0x5 in _0x0)
          if (_0x0[_0x5] !== _0x0.loc) {
            var _0x6, _0x7 = _0x0[_0x5];
            if (_0x7 && 'object' == typeof _0x7) {
              if (Array.isArray(_0x7)) {
                for (var _0x3 = 0; _0x3 < _0x7.length; _0x3++)
                  if (_0x7[_0x3] && _0x7[_0x3].constructor === _0x4)
                    for (var _0x5 in _0x6 = this.populateScope_(_0x7[_0x3], _0x1))
                      _0x2[_0x5] = _0x6[_0x5];
              } else if (_0x7.constructor === _0x4)
                for (var _0x5 in _0x6 = this.populateScope_(_0x7, _0x1))
                  _0x2[_0x5] = _0x6[_0x5];
            }
          }
    }
    _0x0.variableCache_ = _0x2;
  }
  for (var _0x5 in _0x2)
    !0 === _0x2[_0x5] ? this.setProperty(_0x1.object, _0x5, void 0, _0x8c.VARIABLE_DESCRIPTOR) : this.setProperty(_0x1.object, _0x5, this.createFunction(_0x2[_0x5], _0x1), _0x8c.VARIABLE_DESCRIPTOR);
  return _0x2;
}, _0x8c.prototype.calledWithNew = function() {
  return this.stateStack[this.stateStack.length - 1].isConstructor;
}, _0x8c.prototype.getValue = function(_0x0) {
  return _0x0[0] === _0x8c.SCOPE_REFERENCE ? this.getValueFromScope(_0x0[1]) : this.getProperty(_0x0[0], _0x0[1]);
}, _0x8c.prototype.setValue = function(_0x0, _0x1) {
  return _0x0[0] === _0x8c.SCOPE_REFERENCE ? this.setValueToScope(_0x0[1], _0x1) : this.setProperty(_0x0[0], _0x0[1], _0x1);
}, _0x8c.prototype.throwException = function(_0x0, _0x1) {
  if (!this.globalScope)
    throw void 0 === _0x1 ? _0x0 : _0x1;
  if (void 0 !== _0x1 && _0x0 instanceof _0x8c.Object) {
    var _0x2 = this.createObject(_0x0);
    this.populateError(_0x2, _0x1);
  } else
    var _0x2 = _0x0;
  throw this.unwind(_0x8c.Completion.THROW, _0x2, void 0), _0x8c.STEP_ERROR;
}, _0x8c.prototype.unwind = function(_0x0, _0x1, _0x2) {
  if (_0x0 === _0x8c.Completion.NORMAL)
    throw TypeError('Should not unwind for NORMAL completions');
  loop:
    for (var _0x3, _0x4 = this.stateStack; _0x4.length > 0; _0x4.pop()) {
      var _0x5 = _0x4[_0x4.length - 1];
      switch (_0x5.node.type) {
        case 'TryStatement':
          _0x5.cv = {
            type: _0x0,
            value: _0x1,
            label: _0x2
          };
          return;
        case 'CallExpression':
        case 'NewExpression':
          if (_0x0 === _0x8c.Completion.RETURN) {
            _0x5.value = _0x1;
            return;
          }
          if (_0x0 === _0x8c.Completion.BREAK || _0x0 === _0x8c.Completion.CONTINUE)
            throw Error('Unsyntactic break/continue not rejected by Acorn');
          break;
        case 'Program':
          if (_0x0 === _0x8c.Completion.RETURN)
            return;
          _0x5.done = !0;
          break loop;
      }
      if (_0x0 === _0x8c.Completion.BREAK) {
        if (_0x2 ? _0x5.labels && -1 !== _0x5.labels.indexOf(_0x2) : _0x5.isLoop || _0x5.isSwitch) {
          _0x4.pop();
          return;
        }
      } else if (_0x0 === _0x8c.Completion.CONTINUE && (_0x2 ? _0x5.labels && -1 !== _0x5.labels.indexOf(_0x2) : _0x5.isLoop))
        return;
    }
  if (this.isa(_0x1, this.ERROR)) {
    var _0x6 = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError
      },
      _0x7 = String(this.getProperty(_0x1, 'name')),
      _0x8 = this.getProperty(_0x1, 'message').valueOf();
    (_0x3 = (_0x6[_0x7] || Error)(_0x8)).stack = String(this.getProperty(_0x1, 'stack'));
  } else
    _0x3 = String(_0x1);
  throw this.value = _0x3, _0x3;
}, _0x8c.prototype.nodeSummary = function(_0x0) {
  switch (_0x0.type) {
    case 'ArrayExpression':
      return '[...]';
    case 'BinaryExpression':
    case 'LogicalExpression':
      return this.nodeSummary(_0x0.left) + ' ' + _0x0.operator + ' ' + this.nodeSummary(_0x0.right);
    case 'CallExpression':
      return this.nodeSummary(_0x0.callee) + '(...)';
    case 'ConditionalExpression':
      return this.nodeSummary(_0x0.test) + ' ? ' + this.nodeSummary(_0x0.consequent) + ' : ' + this.nodeSummary(_0x0.alternate);
    case 'Identifier':
      return _0x0.name;
    case 'Literal':
      return _0x0.raw;
    case 'MemberExpression':
      var _0x1 = this.nodeSummary(_0x0.object),
        _0x2 = this.nodeSummary(_0x0.property);
      return _0x0.computed ? _0x1 + '[' + _0x2 + ']' : _0x1 + '.' + _0x2;
    case 'NewExpression':
      return 'new ' + this.nodeSummary(_0x0.callee) + '(...)';
    case 'ObjectExpression':
      return '{...}';
    case 'ThisExpression':
      return 'this';
    case 'UnaryExpression':
      return _0x0.operator + ' ' + this.nodeSummary(_0x0.argument);
    case 'UpdateExpression':
      var _0x3 = this.nodeSummary(_0x0.argument);
      return _0x0.prefix ? _0x0.operator + _0x3 : _0x3 + _0x0.operator;
  }
  return '???';
}, _0x8c.prototype.createTask_ = function(_0x0, _0x1) {
  var _0x2, _0x3, _0x4, _0x5 = this.stateStack[this.stateStack.length - 1],
    _0x6 = Array.from(_0x1),
    _0x7 = _0x6.shift(),
    _0x8 = Math.max(Number(_0x6.shift() || 0), 0),
    _0x9 = this.newNode();
  if (_0x7 instanceof _0x8c.Object && 'Function' === _0x7.class)
    _0x3 = _0x7, _0x9.type = 'CallExpression', _0x2 = _0x5.scope;
  else {
    try {
      _0x4 = this.parse_(String(_0x7), 'taskCode' + this.taskCodeNumber_++);
    } catch (_0xa) {
      this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + _0xa.message);
    }
    _0x9.type = 'EvalProgram_', _0x9.body = _0x4.body;
    var _0xb = _0x5.node.arguments[0],
      _0xc = _0xb ? _0xb.start : void 0,
      _0xd = _0xb ? _0xb.end : void 0;
    _0x8c.stripLocations_(_0x9, _0xc, _0xd), _0x2 = this.globalScope, _0x6.length = 0;
  }
  var _0xe = new _0x8c.Task(_0x3, _0x6, _0x2, _0x9, _0x0 ? _0x8 : -1);
  return this.scheduleTask_(_0xe, _0x8), _0xe.pid;
}, _0x8c.prototype.scheduleTask_ = function(_0x0, _0x1) {
  _0x0.time = Date.now() + _0x1, this.tasks.push(_0x0), this.tasks.sort(function(_0x0, _0x1) {
    return _0x0.time - _0x1.time;
  });
}, _0x8c.prototype.deleteTask_ = function(_0x0) {
  for (var _0x1 = 0; _0x1 < this.tasks.length; _0x1++)
    if (this.tasks[_0x1].pid == _0x0) {
      this.tasks.splice(_0x1, 1);
      break;
    }
}, _0x8c.prototype.nextTask_ = function() {
  var _0x0 = this.tasks[0];
  if (!_0x0 || _0x0.time > Date.now())
    return null;
  this.tasks.shift(), _0x0.interval >= 0 && this.scheduleTask_(_0x0, _0x0.interval);
  var _0x1 = new _0x8c.State(_0x0.node, _0x0.scope);
  return _0x0.functionRef && (_0x1.doneCallee_ = 2, _0x1.funcThis_ = this.globalObject, _0x1.func_ = _0x0.functionRef, _0x1.doneArgs_ = !0, _0x1.arguments_ = _0x0.argsArray), _0x1;
}, _0x8c.prototype.createGetter_ = function(_0x0, _0x1) {
  if (!this.getterStep_)
    throw Error('Unexpected call to createGetter');
  this.getterStep_ = !1;
  var _0x2 = Array.isArray(_0x1) ? _0x1[0] : _0x1,
    _0x3 = this.newNode();
  _0x3.type = 'CallExpression';
  var _0x4 = new _0x8c.State(_0x3, this.stateStack[this.stateStack.length - 1].scope);
  return _0x4.doneCallee_ = 2, _0x4.funcThis_ = _0x2, _0x4.func_ = _0x0, _0x4.doneArgs_ = !0, _0x4.arguments_ = [], _0x4;
}, _0x8c.prototype.createSetter_ = function(_0x0, _0x1, _0x2) {
  if (!this.setterStep_)
    throw Error('Unexpected call to createSetter');
  this.setterStep_ = !1;
  var _0x3 = Array.isArray(_0x1) ? _0x1[0] : this.globalObject,
    _0x4 = this.newNode();
  _0x4.type = 'CallExpression';
  var _0x5 = new _0x8c.State(_0x4, this.stateStack[this.stateStack.length - 1].scope);
  return _0x5.doneCallee_ = 2, _0x5.funcThis_ = _0x3, _0x5.func_ = _0x0, _0x5.doneArgs_ = !0, _0x5.arguments_ = [_0x2], _0x5;
}, _0x8c.prototype.boxThis_ = function(_0x0) {
  if (null == _0x0)
    return this.globalObject;
  if (!(_0x0 instanceof _0x8c.Object)) {
    var _0x1 = this.createObjectProto(this.getPrototype(_0x0));
    return _0x1.data = _0x0, _0x1;
  }
  return _0x0;
}, _0x8c.prototype.getGlobalScope = function() {
  return this.globalScope;
}, _0x8c.prototype.setGlobalScope = function(_0x0) {
  this.globalScope = _0x0, this.stateStack[0].scope = _0x0;
}, _0x8c.prototype.getStateStack = function() {
  return this.stateStack;
}, _0x8c.prototype.setStateStack = function(_0x0) {
  this.stateStack = _0x0;
}, _0x8c.Value, _0x8c.State = function(_0x0, _0x1) {
  this.node = _0x0, this.scope = _0x1;
}, _0x8c.Scope = function(_0x0, _0x1, _0x2) {
  this.parentScope = _0x0, this.strict = _0x1, this.object = _0x2;
}, _0x8c.Object = function(_0x0) {
  this.getter = Object.create(null), this.setter = Object.create(null), this.properties = Object.create(null), this.proto = _0x0;
}, _0x8c.Object.prototype.proto = null, _0x8c.Object.prototype.class = 'Object', _0x8c.Object.prototype.data = null, _0x8c.Object.prototype.toString = function() {
  if (!_0x8c.currentInterpreter_)
    return '[object Interpreter.Object]';
  if (!(this instanceof _0x8c.Object))
    return String(this);
  if ('Array' === this.class) {
    var _0x0 = _0x8c.toStringCycles_;
    _0x0.push(this);
    try {
      var _0x1 = [],
        _0x2 = this.properties.length,
        _0x3 = !1;
      _0x2 > 1024 && (_0x2 = 1000, _0x3 = !0);
      for (var _0x4 = 0; _0x4 < _0x2; _0x4++) {
        var _0x5 = this.properties[_0x4];
        _0x1[_0x4] = _0x5 instanceof _0x8c.Object && -1 !== _0x0.indexOf(_0x5) ? '...' : _0x5;
      }
      _0x3 && _0x1.push('...');
    } finally {
      _0x0.pop();
    }
    return _0x1.join(',');
  }
  if ('Error' === this.class) {
    var _0x6, _0x7, _0x0 = _0x8c.toStringCycles_;
    if (-1 !== _0x0.indexOf(this))
      return '[object Error]';
    var _0x8 = this;
    do
      if ('name' in _0x8.properties) {
        _0x6 = _0x8.properties.name;
        break;
      }
    while (_0x8 = _0x8.proto);
    _0x8 = this;
    do
      if ('message' in _0x8.properties) {
        _0x7 = _0x8.properties.message;
        break;
      }
    while (_0x8 = _0x8.proto);
    _0x0.push(this);
    try {
      _0x6 = _0x6 && String(_0x6), _0x7 = _0x7 && String(_0x7);
    } finally {
      _0x0.pop();
    }
    return _0x7 ? _0x6 + ': ' + _0x7 : String(_0x6);
  }
  return null !== this.data ? String(this.data) : '[object ' + this.class + ']';
}, _0x8c.Object.prototype.valueOf = function() {
  return !_0x8c.currentInterpreter_ || void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data;
}, _0x8c.Task = function(_0x0, _0x1, _0x2, _0x3, _0x4) {
  this.functionRef = _0x0, this.argsArray = _0x1, this.scope = _0x2, this.node = _0x3, this.interval = _0x4, this.pid = ++_0x8c.Task.pid, this.time = 0;
}, _0x8c.Task.pid = 0, _0x8c.prototype.stepArrayExpression = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x2.elements,
    _0x4 = _0x1.n_ || 0;
  for (_0x1.array_ ? (this.setProperty(_0x1.array_, _0x4, _0x1.value), _0x4++) : (_0x1.array_ = this.createArray(), _0x1.array_.properties.length = _0x3.length); _0x4 < _0x3.length;) {
    if (_0x3[_0x4])
      return _0x1.n_ = _0x4, new _0x8c.State(_0x3[_0x4], _0x1.scope);
    _0x4++;
  }
  _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.array_;
}, _0x8c.prototype.stepAssignmentExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneLeft_) {
    _0x1.doneLeft_ = !0;
    var _0x3 = new _0x8c.State(_0x2.left, _0x1.scope);
    return _0x3.components = !0, _0x3;
  }
  if (!_0x1.doneRight_) {
    if (_0x1.leftReference_ || (_0x1.leftReference_ = _0x1.value), _0x1.doneGetter_ && (_0x1.leftValue_ = _0x1.value), !_0x1.doneGetter_ && '=' !== _0x2.operator) {
      var _0x4 = this.getValue(_0x1.leftReference_);
      if (_0x1.leftValue_ = _0x4, this.getterStep_)
        return _0x1.doneGetter_ = !0, this.createGetter_(_0x4, _0x1.leftReference_);
    }
    return _0x1.doneRight_ = !0, '=' === _0x2.operator && 'Identifier' === _0x2.left.type && (_0x1.destinationName = _0x2.left.name), new _0x8c.State(_0x2.right, _0x1.scope);
  }
  if (_0x1.doneSetter_) {
    _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.setterValue_;
    return;
  }
  var _0x5 = _0x1.leftValue_,
    _0x6 = _0x1.value;
  switch (_0x2.operator) {
    case '=':
      _0x5 = _0x6;
      break;
    case '+=':
      _0x5 += _0x6;
      break;
    case '-=':
      _0x5 -= _0x6;
      break;
    case '*=':
      _0x5 *= _0x6;
      break;
    case '/=':
      _0x5 /= _0x6;
      break;
    case '%=':
      _0x5 %= _0x6;
      break;
    case '<<=':
      _0x5 <<= _0x6;
      break;
    case '>>=':
      _0x5 >>= _0x6;
      break;
    case '>>>=':
      _0x5 >>>= _0x6;
      break;
    case '&=':
      _0x5 &= _0x6;
      break;
    case '^=':
      _0x5 ^= _0x6;
      break;
    case '|=':
      _0x5 |= _0x6;
      break;
    default:
      throw SyntaxError('Unknown assignment expression: ' + _0x2.operator);
  }
  var _0x7 = this.setValue(_0x1.leftReference_, _0x5);
  if (_0x7)
    return _0x1.doneSetter_ = !0, _0x1.setterValue_ = _0x5, this.createSetter_(_0x7, _0x1.leftReference_, _0x5);
  _0x0.pop(), _0x0[_0x0.length - 1].value = _0x5;
}, _0x8c.prototype.stepBinaryExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneLeft_)
    return _0x1.doneLeft_ = !0, new _0x8c.State(_0x2.left, _0x1.scope);
  if (!_0x1.doneRight_)
    return _0x1.doneRight_ = !0, _0x1.leftValue_ = _0x1.value, new _0x8c.State(_0x2.right, _0x1.scope);
  _0x0.pop();
  var _0x3, _0x4 = _0x1.leftValue_,
    _0x5 = _0x1.value;
  switch (_0x2.operator) {
    case '==':
      _0x3 = _0x4 == _0x5;
      break;
    case '!=':
      _0x3 = _0x4 != _0x5;
      break;
    case '===':
      _0x3 = _0x4 === _0x5;
      break;
    case '!==':
      _0x3 = _0x4 !== _0x5;
      break;
    case '>':
      _0x3 = _0x4 > _0x5;
      break;
    case '>=':
      _0x3 = _0x4 >= _0x5;
      break;
    case '<':
      _0x3 = _0x4 < _0x5;
      break;
    case '<=':
      _0x3 = _0x4 <= _0x5;
      break;
    case '+':
      _0x3 = _0x4 + _0x5;
      break;
    case '-':
      _0x3 = _0x4 - _0x5;
      break;
    case '*':
      _0x3 = _0x4 * _0x5;
      break;
    case '/':
      _0x3 = _0x4 / _0x5;
      break;
    case '%':
      _0x3 = _0x4 % _0x5;
      break;
    case '&':
      _0x3 = _0x4 & _0x5;
      break;
    case '|':
      _0x3 = _0x4 | _0x5;
      break;
    case '^':
      _0x3 = _0x4 ^ _0x5;
      break;
    case '<<':
      _0x3 = _0x4 << _0x5;
      break;
    case '>>':
      _0x3 = _0x4 >> _0x5;
      break;
    case '>>>':
      _0x3 = _0x4 >>> _0x5;
      break;
    case 'in':
      _0x5 instanceof _0x8c.Object || this.throwException(this.TYPE_ERROR, '\'in\' expects an object, not \'' + _0x5 + '\''), _0x3 = this.hasProperty(_0x5, _0x4);
      break;
    case 'instanceof':
      this.isa(_0x5, this.FUNCTION) || this.throwException(this.TYPE_ERROR, '\'instanceof\' expects an object, not \'' + _0x5 + '\''), _0x3 = _0x4 instanceof _0x8c.Object && this.isa(_0x4, _0x5);
      break;
    default:
      throw SyntaxError('Unknown binary operator: ' + _0x2.operator);
  }
  _0x0[_0x0.length - 1].value = _0x3;
}, _0x8c.prototype.stepBlockStatement = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x1.n_ || 0,
    _0x4 = _0x2.body[_0x3];
  if (_0x4)
    return _0x1.n_ = _0x3 + 1, new _0x8c.State(_0x4, _0x1.scope);
  _0x0.pop();
}, _0x8c.prototype.stepBreakStatement = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x2.label && _0x2.label.name;
  this.unwind(_0x8c.Completion.BREAK, void 0, _0x3);
}, _0x8c.prototype.evalCodeNumber_ = 0, _0x8c.prototype.stepCallExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneCallee_) {
    _0x1.doneCallee_ = 1;
    var _0x3 = new _0x8c.State(_0x2.callee, _0x1.scope);
    return _0x3.components = !0, _0x3;
  }
  if (1 === _0x1.doneCallee_) {
    _0x1.doneCallee_ = 2;
    var _0x4 = _0x1.value;
    if (Array.isArray(_0x4)) {
      if (_0x1.func_ = this.getValue(_0x4), _0x4[0] === _0x8c.SCOPE_REFERENCE ? _0x1.directEval_ = 'eval' === _0x4[1] : _0x1.funcThis_ = _0x4[0], _0x4 = _0x1.func_, this.getterStep_)
        return _0x1.doneCallee_ = 1, this.createGetter_(_0x4, _0x1.value);
    } else
      _0x1.func_ = _0x4;
    _0x1.arguments_ = [], _0x1.n_ = 0;
  }
  var _0x4 = _0x1.func_;
  if (!_0x1.doneArgs_) {
    if (0 !== _0x1.n_ && _0x1.arguments_.push(_0x1.value), _0x2.arguments[_0x1.n_])
      return new _0x8c.State(_0x2.arguments[_0x1.n_++], _0x1.scope);
    if ('NewExpression' === _0x2.type) {
      if (_0x4 instanceof _0x8c.Object && !_0x4.illegalConstructor || this.throwException(this.TYPE_ERROR, this.nodeSummary(_0x2.callee) + ' is not a constructor'), _0x4 === this.ARRAY)
        _0x1.funcThis_ = this.createArray();
      else {
        var _0x5 = _0x4.properties.prototype;
        ('object' != typeof _0x5 || null === _0x5) && (_0x5 = this.OBJECT_PROTO), _0x1.funcThis_ = this.createObjectProto(_0x5);
      }
      _0x1.isConstructor = !0;
    }
    _0x1.doneArgs_ = !0;
  }
  if (_0x1.doneExec_)
    _0x0.pop(), _0x1.isConstructor && 'object' != typeof _0x1.value ? _0x0[_0x0.length - 1].value = _0x1.funcThis_ : _0x0[_0x0.length - 1].value = _0x1.value;
  else {
    _0x1.doneExec_ = !0, _0x4 instanceof _0x8c.Object || this.throwException(this.TYPE_ERROR, this.nodeSummary(_0x2.callee) + ' is not a function');
    var _0x6 = _0x4.node;
    if (_0x6) {
      for (var _0x7 = this.createScope(_0x6.body, _0x4.parentScope), _0x8 = this.createArray(), _0x9 = 0; _0x9 < _0x1.arguments_.length; _0x9++)
        this.setProperty(_0x8, _0x9, _0x1.arguments_[_0x9]);
      this.setProperty(_0x7.object, 'arguments', _0x8);
      for (var _0x9 = 0; _0x9 < _0x6.params.length; _0x9++) {
        var _0xa = _0x6.params[_0x9].name,
          _0xb = _0x1.arguments_.length > _0x9 ? _0x1.arguments_[_0x9] : void 0;
        this.setProperty(_0x7.object, _0xa, _0xb);
      }
      return _0x7.strict || (_0x1.funcThis_ = this.boxThis_(_0x1.funcThis_)), this.setProperty(_0x7.object, 'this', _0x1.funcThis_, _0x8c.READONLY_DESCRIPTOR), _0x1.value = void 0, new _0x8c.State(_0x6.body, _0x7);
    }
    if (_0x4.eval) {
      var _0xc = _0x1.arguments_[0];
      if ('string' != typeof _0xc)
        _0x1.value = _0xc;
      else {
        try {
          var _0xd = this.parse_(String(_0xc), 'eval' + this.evalCodeNumber_++);
        } catch (_0xe) {
          this.throwException(this.SYNTAX_ERROR, 'Invalid code: ' + _0xe.message);
        }
        var _0xf = this.newNode();
        _0xf.type = 'EvalProgram_', _0xf.body = _0xd.body, _0x8c.stripLocations_(_0xf, _0x2.start, _0x2.end);
        var _0x7 = _0x1.directEval_ ? _0x1.scope : this.globalScope;
        return _0x7.strict ? _0x7 = this.createScope(_0xd, _0x7) : this.populateScope_(_0xd, _0x7), this.value = void 0, new _0x8c.State(_0xf, _0x7);
      }
    } else if (_0x4.nativeFunc)
      _0x1.scope.strict || (_0x1.funcThis_ = this.boxThis_(_0x1.funcThis_)), _0x1.value = _0x4.nativeFunc.apply(_0x1.funcThis_, _0x1.arguments_);
    else if (_0x4.asyncFunc) {
      var _0x10 = this,
        _0x11 = function(_0x0) {
          _0x1.value = _0x0, _0x10.paused_ = !1;
        },
        _0x1e = _0x4.asyncFunc.length - 1,
        _0x12 = _0x1.arguments_.concat(Array(_0x1e)).slice(0, _0x1e);
      _0x12.push(_0x11), this.paused_ = !0, _0x1.scope.strict || (_0x1.funcThis_ = this.boxThis_(_0x1.funcThis_)), _0x4.asyncFunc.apply(_0x1.funcThis_, _0x12);
      return;
    } else
      this.throwException(this.TYPE_ERROR, this.nodeSummary(_0x2.callee) + ' is not callable');
  }
}, _0x8c.prototype.stepConditionalExpression = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x1.mode_ || 0;
  if (0 === _0x3)
    return _0x1.mode_ = 1, new _0x8c.State(_0x2.test, _0x1.scope);
  if (1 === _0x3) {
    _0x1.mode_ = 2;
    var _0x4 = Boolean(_0x1.value);
    if (_0x4 && _0x2.consequent)
      return new _0x8c.State(_0x2.consequent, _0x1.scope);
    if (!_0x4 && _0x2.alternate)
      return new _0x8c.State(_0x2.alternate, _0x1.scope);
    this.value = void 0;
  }
  _0x0.pop(), 'ConditionalExpression' === _0x2.type && (_0x0[_0x0.length - 1].value = _0x1.value);
}, _0x8c.prototype.stepContinueStatement = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x2.label && _0x2.label.name;
  this.unwind(_0x8c.Completion.CONTINUE, void 0, _0x3);
}, _0x8c.prototype.stepDebuggerStatement = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
}, _0x8c.prototype.stepDoWhileStatement = function(_0x0, _0x1, _0x2) {
  if ('DoWhileStatement' === _0x2.type && void 0 === _0x1.test_ && (_0x1.value = !0, _0x1.test_ = !0), !_0x1.test_)
    return _0x1.test_ = !0, new _0x8c.State(_0x2.test, _0x1.scope);
  if (_0x1.value) {
    if (_0x2.body)
      return _0x1.test_ = !1, _0x1.isLoop = !0, new _0x8c.State(_0x2.body, _0x1.scope);
  } else
    _0x0.pop();
}, _0x8c.prototype.stepEmptyStatement = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
}, _0x8c.prototype.stepEvalProgram_ = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x1.n_ || 0,
    _0x4 = _0x2.body[_0x3];
  if (_0x4)
    return _0x1.n_ = _0x3 + 1, new _0x8c.State(_0x4, _0x1.scope);
  _0x0.pop(), _0x0[_0x0.length - 1].value = this.value;
}, _0x8c.prototype.stepExpressionStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.done_)
    return this.value = void 0, _0x1.done_ = !0, new _0x8c.State(_0x2.expression, _0x1.scope);
  _0x0.pop(), this.value = _0x1.value;
}, _0x8c.prototype.stepForInStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneInit_ && (_0x1.doneInit_ = !0, _0x2.left.declarations && _0x2.left.declarations[0].init))
    return _0x1.scope.strict && this.throwException(this.SYNTAX_ERROR, 'for-in loop variable declaration may not have an initializer'), new _0x8c.State(_0x2.left, _0x1.scope);
  if (!_0x1.doneObject_)
    return _0x1.doneObject_ = !0, _0x1.variable_ || (_0x1.variable_ = _0x1.value), new _0x8c.State(_0x2.right, _0x1.scope);
  if (_0x1.isLoop || (_0x1.isLoop = !0, _0x1.object_ = _0x1.value, _0x1.visited_ = Object.create(null)), void 0 === _0x1.name_)
    gotPropName:
    for (;;) {
      if (_0x1.object_ instanceof _0x8c.Object)
        for (_0x1.props_ || (_0x1.props_ = Object.getOwnPropertyNames(_0x1.object_.properties));;) {
          var _0x3 = _0x1.props_.shift();
          if (void 0 === _0x3)
            break;
          if (Object.prototype.hasOwnProperty.call(_0x1.object_.properties, _0x3) && !_0x1.visited_[_0x3]) {
            if (_0x1.visited_[_0x3] = !0, Object.prototype.propertyIsEnumerable.call(_0x1.object_.properties, _0x3)) {
              _0x1.name_ = _0x3;
              break gotPropName;
            }
          }
        }
      else if (null !== _0x1.object_ && void 0 !== _0x1.object_)
        for (_0x1.props_ || (_0x1.props_ = Object.getOwnPropertyNames(_0x1.object_));;) {
          var _0x3 = _0x1.props_.shift();
          if (void 0 === _0x3)
            break;
          if (_0x1.visited_[_0x3] = !0, Object.prototype.propertyIsEnumerable.call(_0x1.object_, _0x3)) {
            _0x1.name_ = _0x3;
            break gotPropName;
          }
        }
      if (_0x1.object_ = this.getPrototype(_0x1.object_), _0x1.props_ = null, null === _0x1.object_) {
        _0x0.pop();
        return;
      }
    }
  if (!_0x1.doneVariable_) {
    _0x1.doneVariable_ = !0;
    var _0x4 = _0x2.left;
    if ('VariableDeclaration' === _0x4.type)
      _0x1.variable_ = [
        _0x8c.SCOPE_REFERENCE,
        _0x4.declarations[0].id.name
      ];
    else {
      _0x1.variable_ = null;
      var _0x5 = new _0x8c.State(_0x4, _0x1.scope);
      return _0x5.components = !0, _0x5;
    }
  }
  if (_0x1.variable_ || (_0x1.variable_ = _0x1.value), !_0x1.doneSetter_) {
    _0x1.doneSetter_ = !0;
    var _0x6 = _0x1.name_,
      _0x7 = this.setValue(_0x1.variable_, _0x6);
    if (_0x7)
      return this.createSetter_(_0x7, _0x1.variable_, _0x6);
  }
  if (_0x1.name_ = void 0, _0x1.doneVariable_ = !1, _0x1.doneSetter_ = !1, _0x2.body)
    return new _0x8c.State(_0x2.body, _0x1.scope);
}, _0x8c.prototype.stepForStatement = function(_0x0, _0x1, _0x2) {
  switch (_0x1.mode_) {
    default:
      if (_0x1.mode_ = 1, _0x2.init)
        return new _0x8c.State(_0x2.init, _0x1.scope);
      break;
    case 1:
      if (_0x1.mode_ = 2, _0x2.test)
        return new _0x8c.State(_0x2.test, _0x1.scope);
      break;
    case 2:
      if (_0x1.mode_ = 3, !_0x2.test || _0x1.value)
        return _0x1.isLoop = !0, new _0x8c.State(_0x2.body, _0x1.scope);
      _0x0.pop();
      break;
    case 3:
      if (_0x1.mode_ = 1, _0x2.update)
        return new _0x8c.State(_0x2.update, _0x1.scope);
  }
}, _0x8c.prototype.stepFunctionDeclaration = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
}, _0x8c.prototype.stepFunctionExpression = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
  var _0x3 = (_0x1 = _0x0[_0x0.length - 1]).scope;
  _0x2.id && (_0x3 = this.createSpecialScope(_0x3)), _0x1.value = this.createFunction(_0x2, _0x3, _0x1.destinationName), _0x2.id && this.setProperty(_0x3.object, _0x2.id.name, _0x1.value, _0x8c.READONLY_DESCRIPTOR);
}, _0x8c.prototype.stepIdentifier = function(_0x0, _0x1, _0x2) {
  if (_0x0.pop(), _0x1.components) {
    _0x0[_0x0.length - 1].value = [
      _0x8c.SCOPE_REFERENCE,
      _0x2.name
    ];
    return;
  }
  var _0x3 = this.getValueFromScope(_0x2.name);
  if (this.getterStep_)
    return this.createGetter_(_0x3, this.globalObject);
  _0x0[_0x0.length - 1].value = _0x3;
}, _0x8c.prototype.stepIfStatement = _0x8c.prototype.stepConditionalExpression, _0x8c.prototype.stepLabeledStatement = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
  var _0x3 = _0x1.labels || [];
  _0x3.push(_0x2.label.name);
  var _0x4 = new _0x8c.State(_0x2.body, _0x1.scope);
  return _0x4.labels = _0x3, _0x4;
}, _0x8c.prototype.stepLiteral = function(_0x0, _0x1, _0x2) {
  _0x0.pop();
  var _0x3 = _0x2.value;
  if (_0x3 instanceof RegExp) {
    var _0x4 = this.createObjectProto(this.REGEXP_PROTO);
    this.populateRegExp(_0x4, _0x3), _0x3 = _0x4;
  }
  _0x0[_0x0.length - 1].value = _0x3;
}, _0x8c.prototype.stepLogicalExpression = function(_0x0, _0x1, _0x2) {
  if ('&&' !== _0x2.operator && '||' !== _0x2.operator)
    throw SyntaxError('Unknown logical operator: ' + _0x2.operator);
  if (!_0x1.doneLeft_)
    return _0x1.doneLeft_ = !0, new _0x8c.State(_0x2.left, _0x1.scope);
  if (_0x1.doneRight_)
    _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.value;
  else {
    if (('&&' !== _0x2.operator || _0x1.value) && ('||' !== _0x2.operator || !_0x1.value))
      return _0x1.doneRight_ = !0, new _0x8c.State(_0x2.right, _0x1.scope);
    _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.value;
  }
}, _0x8c.prototype.stepMemberExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneObject_)
    return _0x1.doneObject_ = !0, new _0x8c.State(_0x2.object, _0x1.scope);
  if (_0x2.computed) {
    if (!_0x1.doneProperty_)
      return _0x1.object_ = _0x1.value, _0x1.doneProperty_ = !0, new _0x8c.State(_0x2.property, _0x1.scope);
    _0x3 = _0x1.value;
  } else
    _0x1.object_ = _0x1.value, _0x3 = _0x2.property.name;
  if (_0x0.pop(), _0x1.components)
    _0x0[_0x0.length - 1].value = [
      _0x1.object_,
      _0x3
    ];
  else {
    var _0x3, _0x4 = this.getProperty(_0x1.object_, _0x3);
    if (this.getterStep_)
      return this.createGetter_(_0x4, _0x1.object_);
    _0x0[_0x0.length - 1].value = _0x4;
  }
}, _0x8c.prototype.stepNewExpression = _0x8c.prototype.stepCallExpression, _0x8c.prototype.stepObjectExpression = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x1.n_ || 0,
    _0x4 = _0x2.properties[_0x3];
  if (_0x1.object_) {
    var _0x5 = _0x1.destinationName;
    _0x1.properties_[_0x5] || (_0x1.properties_[_0x5] = {}), _0x1.properties_[_0x5][_0x4.kind] = _0x1.value, _0x1.n_ = ++_0x3, _0x4 = _0x2.properties[_0x3];
  } else
    _0x1.object_ = this.createObjectProto(this.OBJECT_PROTO), _0x1.properties_ = Object.create(null);
  if (_0x4) {
    var _0x6 = _0x4.key;
    if ('Identifier' === _0x6.type)
      var _0x5 = _0x6.name;
    else if ('Literal' === _0x6.type)
      var _0x5 = _0x6.value;
    else
      throw SyntaxError('Unknown object structure: ' + _0x6.type);
    return _0x1.destinationName = _0x5, new _0x8c.State(_0x4.value, _0x1.scope);
  }
  for (var _0x6 in _0x1.properties_) {
    var _0x7 = _0x1.properties_[_0x6];
    if ('get' in _0x7 || 'set' in _0x7) {
      var _0x8 = {
        configurable: !0,
        enumerable: !0,
        get: _0x7.get,
        set: _0x7.set
      };
      this.setProperty(_0x1.object_, _0x6, _0x8c.VALUE_IN_DESCRIPTOR, _0x8);
    } else
      this.setProperty(_0x1.object_, _0x6, _0x7.init);
  }
  _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.object_;
}, _0x8c.prototype.stepProgram = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x2.body.shift();
  if (_0x3)
    return _0x1.done = !1, new _0x8c.State(_0x3, _0x1.scope);
  _0x1.done = !0;
}, _0x8c.prototype.stepReturnStatement = function(_0x0, _0x1, _0x2) {
  if (_0x2.argument && !_0x1.done_)
    return _0x1.done_ = !0, new _0x8c.State(_0x2.argument, _0x1.scope);
  this.unwind(_0x8c.Completion.RETURN, _0x1.value, void 0);
}, _0x8c.prototype.stepSequenceExpression = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x1.n_ || 0,
    _0x4 = _0x2.expressions[_0x3];
  if (_0x4)
    return _0x1.n_ = _0x3 + 1, new _0x8c.State(_0x4, _0x1.scope);
  _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.value;
}, _0x8c.prototype.stepSwitchStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.test_)
    return _0x1.test_ = 1, new _0x8c.State(_0x2.discriminant, _0x1.scope);
  for (1 === _0x1.test_ && (_0x1.test_ = 2, _0x1.switchValue_ = _0x1.value, _0x1.defaultCase_ = -1);;) {
    var _0x3 = _0x1.index_ || 0,
      _0x4 = _0x2.cases[_0x3];
    if (!_0x1.matched_ && _0x4 && !_0x4.test) {
      _0x1.defaultCase_ = _0x3, _0x1.index_ = _0x3 + 1;
      continue;
    }
    if (!_0x4 && !_0x1.matched_ && -1 !== _0x1.defaultCase_) {
      _0x1.matched_ = !0, _0x1.index_ = _0x1.defaultCase_;
      continue;
    }
    if (_0x4) {
      if (!_0x1.matched_ && !_0x1.tested_ && _0x4.test)
        return _0x1.tested_ = !0, new _0x8c.State(_0x4.test, _0x1.scope);
      if (_0x1.matched_ || _0x1.value === _0x1.switchValue_) {
        _0x1.matched_ = !0;
        var _0x5 = _0x1.n_ || 0;
        if (_0x4.consequent[_0x5])
          return _0x1.isSwitch = !0, _0x1.n_ = _0x5 + 1, new _0x8c.State(_0x4.consequent[_0x5], _0x1.scope);
      }
      _0x1.tested_ = !1, _0x1.n_ = 0, _0x1.index_ = _0x3 + 1;
    } else {
      _0x0.pop();
      return;
    }
  }
}, _0x8c.prototype.stepThisExpression = function(_0x0, _0x1, _0x2) {
  _0x0.pop(), _0x0[_0x0.length - 1].value = this.getValueFromScope('this');
}, _0x8c.prototype.stepThrowStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.done_)
    return _0x1.done_ = !0, new _0x8c.State(_0x2.argument, _0x1.scope);
  this.throwException(_0x1.value);
}, _0x8c.prototype.stepTryStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneBlock_)
    return _0x1.doneBlock_ = !0, new _0x8c.State(_0x2.block, _0x1.scope);
  if (_0x1.cv && _0x1.cv.type === _0x8c.Completion.THROW && !_0x1.doneHandler_ && _0x2.handler) {
    _0x1.doneHandler_ = !0;
    var _0x3 = this.createSpecialScope(_0x1.scope);
    return this.setProperty(_0x3.object, _0x2.handler.param.name, _0x1.cv.value), _0x1.cv = void 0, new _0x8c.State(_0x2.handler.body, _0x3);
  }
  if (!_0x1.doneFinalizer_ && _0x2.finalizer)
    return _0x1.doneFinalizer_ = !0, new _0x8c.State(_0x2.finalizer, _0x1.scope);
  _0x0.pop(), _0x1.cv && this.unwind(_0x1.cv.type, _0x1.cv.value, _0x1.cv.label);
}, _0x8c.prototype.stepUnaryExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.done_) {
    _0x1.done_ = !0;
    var _0x3 = new _0x8c.State(_0x2.argument, _0x1.scope);
    return _0x3.components = 'delete' === _0x2.operator, _0x3;
  }
  _0x0.pop();
  var _0x4 = _0x1.value;
  switch (_0x2.operator) {
    case '-':
      _0x4 = -_0x4;
      break;
    case '+':
      _0x4 = +_0x4;
      break;
    case '!':
      _0x4 = !_0x4;
      break;
    case '~':
      _0x4 = ~_0x4;
      break;
    case 'delete':
      var _0x5 = !0;
      if (Array.isArray(_0x4)) {
        var _0x6 = _0x4[0];
        _0x6 === _0x8c.SCOPE_REFERENCE && (_0x6 = _0x1.scope);
        var _0x7 = String(_0x4[1]);
        try {
          delete _0x6.properties[_0x7];
        } catch (_0x8) {
          _0x1.scope.strict ? this.throwException(this.TYPE_ERROR, 'Cannot delete property \'' + _0x7 + '\' of \'' + _0x6 + '\'') : _0x5 = !1;
        }
      }
      _0x4 = _0x5;
      break;
    case 'typeof':
      _0x4 = _0x4 && 'Function' === _0x4.class ? 'function' : typeof _0x4;
      break;
    case 'void':
      _0x4 = void 0;
      break;
    default:
      throw SyntaxError('Unknown unary operator: ' + _0x2.operator);
  }
  _0x0[_0x0.length - 1].value = _0x4;
}, _0x8c.prototype.stepUpdateExpression = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneLeft_) {
    _0x1.doneLeft_ = !0;
    var _0x3, _0x4 = new _0x8c.State(_0x2.argument, _0x1.scope);
    return _0x4.components = !0, _0x4;
  }
  if (_0x1.leftSide_ || (_0x1.leftSide_ = _0x1.value), _0x1.doneGetter_ && (_0x1.leftValue_ = _0x1.value), !_0x1.doneGetter_) {
    var _0x5 = this.getValue(_0x1.leftSide_);
    if (_0x1.leftValue_ = _0x5, this.getterStep_) {
      _0x1.doneGetter_ = !0;
      var _0x6 = _0x5;
      return this.createGetter_(_0x6, _0x1.leftSide_);
    }
  }
  if (_0x1.doneSetter_) {
    _0x0.pop(), _0x0[_0x0.length - 1].value = _0x1.setterValue_;
    return;
  }
  var _0x5 = Number(_0x1.leftValue_);
  if ('++' === _0x2.operator)
    _0x3 = _0x5 + 1;
  else if ('--' === _0x2.operator)
    _0x3 = _0x5 - 1;
  else
    throw SyntaxError('Unknown update expression: ' + _0x2.operator);
  var _0x7 = _0x2.prefix ? _0x3 : _0x5,
    _0x8 = this.setValue(_0x1.leftSide_, _0x3);
  if (_0x8)
    return _0x1.doneSetter_ = !0, _0x1.setterValue_ = _0x7, this.createSetter_(_0x8, _0x1.leftSide_, _0x3);
  _0x0.pop(), _0x0[_0x0.length - 1].value = _0x7;
}, _0x8c.prototype.stepVariableDeclaration = function(_0x0, _0x1, _0x2) {
  var _0x3 = _0x2.declarations,
    _0x4 = _0x1.n_ || 0,
    _0x5 = _0x3[_0x4];
  for (_0x1.init_ && _0x5 && (this.setValueToScope(_0x5.id.name, _0x1.value), _0x1.init_ = !1, _0x5 = _0x3[++_0x4]); _0x5;) {
    if (_0x5.init)
      return _0x1.n_ = _0x4, _0x1.init_ = !0, _0x1.destinationName = _0x5.id.name, new _0x8c.State(_0x5.init, _0x1.scope);
    _0x5 = _0x3[++_0x4];
  }
  _0x0.pop();
}, _0x8c.prototype.stepWithStatement = function(_0x0, _0x1, _0x2) {
  if (!_0x1.doneObject_)
    return _0x1.doneObject_ = !0, new _0x8c.State(_0x2.object, _0x1.scope);
  _0x0.pop();
  var _0x3 = this.createSpecialScope(_0x1.scope, _0x1.value);
  return new _0x8c.State(_0x2.body, _0x3);
}, _0x8c.prototype.stepWhileStatement = _0x8c.prototype.stepDoWhileStatement, _0x8c.nativeGlobal.Interpreter = _0x8c, _0x8c.prototype.step = _0x8c.prototype.step, _0x8c.prototype.run = _0x8c.prototype.run, _0x8c.prototype.getStatus = _0x8c.prototype.getStatus, _0x8c.prototype.appendCode = _0x8c.prototype.appendCode, _0x8c.prototype.createObject = _0x8c.prototype.createObject, _0x8c.prototype.createObjectProto = _0x8c.prototype.createObjectProto, _0x8c.prototype.createNativeFunction = _0x8c.prototype.createNativeFunction, _0x8c.prototype.createAsyncFunction = _0x8c.prototype.createAsyncFunction, _0x8c.prototype.getProperty = _0x8c.prototype.getProperty, _0x8c.prototype.setProperty = _0x8c.prototype.setProperty, _0x8c.prototype.nativeToPseudo = _0x8c.prototype.nativeToPseudo, _0x8c.prototype.pseudoToNative = _0x8c.prototype.pseudoToNative, _0x8c.prototype.getGlobalScope = _0x8c.prototype.getGlobalScope, _0x8c.prototype.setGlobalScope = _0x8c.prototype.setGlobalScope, _0x8c.prototype.getStateStack = _0x8c.prototype.getStateStack, _0x8c.prototype.setStateStack = _0x8c.prototype.setStateStack, _0x8c.Status = _0x8c.Status, _0x8c.VALUE_IN_DESCRIPTOR = _0x8c.VALUE_IN_DESCRIPTOR;