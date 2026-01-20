/* be5e3cd763aecf5cdc533e83fc38b2617378913fb09fe2b6d68cacd0e2c7281a */
var _0x0 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === "true",
      disableJS: localStorage.disableJS === "true",
    },
  },
  _0x1 = document.getElementById("user-data");
if (_0x1)
  try {
    let _0x2 = JSON.parse(_0x1.textContent);
    _0x2 && _0x2.email_verified && (_0x0.user = _0x2);
  } catch (_0x2) {
    console.error(_0x2);
  }
var _0x3 = _0x0;
function _0x4(_0x2, _0x5, _0x6) {
  let _0x7 = new WeakMap(),
    _0x8 = 2048,
    _0x9 = 10000,
    _0xa = new WeakMap();
  function _0xb(_0xc) {}
  function _0xd() {
    _0xa.clear = new WeakMap();
  }
  function _0xe(_0xc, _0xf) {
    if (!_0xc) return null;
    if (_0x7.has(_0xc)) return _0x7.get(_0xc);
    let _0x10 = _0x2.createObject(_0x11);
    return (
      (_0x10.native = _0xc),
      (_0x10.canvas = _0xf),
      _0x7.set(_0xc, _0x10),
      _0x10
    );
  }
  let _0x12 = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "CanvasGradient", _0x12);
  let _0x13 = _0x2.getProperty(_0x12, "prototype");
  _0x2.setProperty(
    _0x13,
    "addColorStop",
    _0x2.createNativeFunction(function (_0xc, _0xf) {
      this.native.addColorStop(_0xc, _0xf);
    }),
  );
  function _0x14(_0xc) {
    let _0xf = _0x2.createObject(_0x12);
    return ((_0xf.native = _0xc), _0xf);
  }
  let _0x15 = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "CanvasPattern", _0x15);
  function _0x16(_0xc) {
    let _0xf = _0x2.createObject(_0x15);
    return ((_0xf.native = _0xc), _0xf);
  }
  let _0x17 = _0x2.createNativeFunction(function (_0xc, _0xf) {
    if (_0xc > _0x8 || _0xf > _0x8)
      throw new Error(`ImageData size exceeds maximum (${_0x8}x${_0x8})`);
    _0x3.settings.logCalls &&
      console.log(_0x6.domain, "create ImageData", this, _0xc, _0xf);
    let _0x10 = new ImageData(_0xc, _0xf);
    ((this.native = _0x10), (this.width = _0xc), (this.height = _0xf));
  }, !0);
  _0x2.setProperty(_0x5, "ImageData", _0x17);
  let _0x18 = _0x2.getProperty(_0x17, "prototype");
  (_0x2.setProperty(_0x18, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function () {
      return this.native.width;
    }),
  }),
    _0x2.setProperty(_0x18, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native.height;
      }),
    }),
    _0x2.setProperty(_0x18, "data", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0xc = this.native.data,
          _0xf = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
        _0x2.setProperty(_0xf, "length", _0xc.length);
        let _0x10 = _0x2.nativeToPseudo({});
        (_0x2.setProperty(_0x10, "length", _0xc.length),
          _0x2.setProperty(
            _0x10,
            "get",
            _0x2.createNativeFunction(function (_0x19) {
              return _0xc[_0x19];
            }),
          ),
          _0x2.setProperty(
            _0x10,
            "set",
            _0x2.createNativeFunction(function (_0x19, _0x1a) {
              (_0x3.settings.logCalls &&
                console.log(_0x6.domain, "setImageData", this, _0x19, _0x1a),
                (_0xc[_0x19] = _0x1a));
            }),
          ));
        for (let _0x19 = 0; _0x19 < Math.min(_0xc.length, 1000); _0x19++)
          ((_0x1a) => {
            _0x2.setProperty(_0x10, _0x1a, Interpreter.VALUE_IN_DESCRIPTOR, {
              get: _0x2.createNativeFunction(function () {
                return _0xc[_0x1a];
              }),
              set: _0x2.createNativeFunction(function (_0x1b) {
                (_0x3.settings.logCalls &&
                  console.log(_0x6.domain, "setImageData", this, _0x1a, _0x1b),
                  (_0xc[_0x1a] = _0x1b));
              }),
            });
          })(_0x19);
        return _0x10;
      }),
    }));
  function _0x1c(_0xc) {
    let _0xf = _0x2.createObject(_0x17);
    return ((_0xf.native = _0xc), _0xf);
  }
  let _0x1d = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "TextMetrics", _0x1d);
  let _0x1e = _0x2.getProperty(_0x1d, "prototype"),
    _0x1f = [
      "width",
      "actualBoundingBoxLeft",
      "actualBoundingBoxRight",
      "fontBoundingBoxAscent",
      "fontBoundingBoxDescent",
      "actualBoundingBoxAscent",
      "actualBoundingBoxDescent",
      "emHeightAscent",
      "emHeightDescent",
      "hangingBaseline",
      "alphabeticBaseline",
      "ideographicBaseline",
    ];
  for (let _0xc of _0x1f)
    _0x2.setProperty(_0x1e, _0xc, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native[_0xc];
      }),
    });
  function _0x20(_0xc) {
    let _0xf = _0x2.createObject(_0x1d);
    return ((_0xf.native = _0xc), _0xf);
  }
  let _0x21 = _0x2.createNativeFunction(function (_0xc) {
    _0xc && _0xc.native
      ? (this.native = new Path2D(_0xc.native))
      : typeof _0xc == "string"
        ? (this.native = new Path2D(_0xc))
        : (this.native = new Path2D());
  }, !0);
  _0x2.setProperty(_0x5, "Path2D", _0x21);
  let _0x22 = _0x2.getProperty(_0x21, "prototype"),
    _0x23 = {
      addPath: function (_0xc, _0xf) {
        _0xc?.native && this.native.addPath(_0xc.native, _0xf);
      },
      closePath: function () {
        this.native.closePath();
      },
      moveTo: function (_0xc, _0xf) {
        this.native.moveTo(_0xc, _0xf);
      },
      lineTo: function (_0xc, _0xf) {
        this.native.lineTo(_0xc, _0xf);
      },
      bezierCurveTo: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
        this.native.bezierCurveTo(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
      },
      quadraticCurveTo: function (_0xc, _0xf, _0x10, _0x19) {
        this.native.quadraticCurveTo(_0xc, _0xf, _0x10, _0x19);
      },
      arc: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
        this.native.arc(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
      },
      arcTo: function (_0xc, _0xf, _0x10, _0x19, _0x1a) {
        this.native.arcTo(_0xc, _0xf, _0x10, _0x19, _0x1a);
      },
      ellipse: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b, _0x24, _0x25) {
        this.native.ellipse(
          _0xc,
          _0xf,
          _0x10,
          _0x19,
          _0x1a,
          _0x1b,
          _0x24,
          _0x25,
        );
      },
      rect: function (_0xc, _0xf, _0x10, _0x19) {
        this.native.rect(_0xc, _0xf, _0x10, _0x19);
      },
      roundRect: function (_0xc, _0xf, _0x10, _0x19, _0x1a) {
        this.native.roundRect(_0xc, _0xf, _0x10, _0x19, _0x1a);
      },
    };
  for (let [_0xc, _0xf] of Object.entries(_0x23))
    _0x2.setProperty(_0x22, _0xc, _0x2.createNativeFunction(_0xf));
  let _0x11 = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "CanvasRenderingContext2D", _0x11);
  let _0x26 = _0x2.getProperty(_0x11, "prototype"),
    _0x27 = [
      "globalAlpha",
      "globalCompositeOperation",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "lineDashOffset",
      "font",
      "textAlign",
      "textBaseline",
      "direction",
      "shadowBlur",
      "shadowColor",
      "shadowOffsetX",
      "shadowOffsetY",
      "imageSmoothingEnabled",
      "imageSmoothingQuality",
      "filter",
    ];
  for (let _0xc of _0x27)
    _0x2.setProperty(_0x26, _0xc, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native[_0xc];
      }),
      set: _0x2.createNativeFunction(function (_0xf) {
        (_0x3.settings.logCalls &&
          console.log(_0x6.domain, "context set " + _0xc, this, _0xf),
          (this.native[_0xc] = _0xf));
      }),
    });
  for (let _0xc of ["fillStyle", "strokeStyle"])
    _0x2.setProperty(_0x26, _0xc, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0xf = this.native[_0xc];
        return _0xf;
      }),
      set: _0x2.createNativeFunction(function (_0xf) {
        _0xf?.native
          ? (this.native[_0xc] = _0xf.native)
          : (this.native[_0xc] = _0xf);
      }),
    });
  _0x2.setProperty(_0x26, "canvas", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function () {
      return this.canvas;
    }),
  });
  let _0x28 = {
    clearRect: function (_0xc, _0xf, _0x10, _0x19) {
      (this.native, this.native.clearRect(_0xc, _0xf, _0x10, _0x19));
    },
    fillRect: function (_0xc, _0xf, _0x10, _0x19) {
      (this.native, this.native.fillRect(_0xc, _0xf, _0x10, _0x19));
    },
    strokeRect: function (_0xc, _0xf, _0x10, _0x19) {
      (this.native, this.native.strokeRect(_0xc, _0xf, _0x10, _0x19));
    },
    fillText: function (_0xc, _0xf, _0x10, _0x19) {
      (this.native,
        _0x19 !== void 0
          ? this.native.fillText(
              String(_0xc).slice(0, 1000),
              _0xf,
              _0x10,
              _0x19,
            )
          : this.native.fillText(String(_0xc).slice(0, 1000), _0xf, _0x10));
    },
    strokeText: function (_0xc, _0xf, _0x10, _0x19) {
      (this.native,
        _0x19 !== void 0
          ? this.native.strokeText(
              String(_0xc).slice(0, 1000),
              _0xf,
              _0x10,
              _0x19,
            )
          : this.native.strokeText(String(_0xc).slice(0, 1000), _0xf, _0x10));
    },
    measureText: function (_0xc) {
      return _0x20(this.native.measureText(String(_0xc).slice(0, 1000)));
    },
    getLineDash: function () {
      return _0x2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function (_0xc) {
      let _0xf = _0x2.pseudoToNative(_0xc);
      this.native.setLineDash(_0xf);
    },
    createLinearGradient: function (_0xc, _0xf, _0x10, _0x19) {
      return _0x14(this.native.createLinearGradient(_0xc, _0xf, _0x10, _0x19));
    },
    createRadialGradient: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
      return _0x14(
        this.native.createRadialGradient(
          _0xc,
          _0xf,
          _0x10,
          _0x19,
          _0x1a,
          _0x1b,
        ),
      );
    },
    createConicGradient: function (_0xc, _0xf, _0x10) {
      return _0x14(this.native.createConicGradient(_0xc, _0xf, _0x10));
    },
    createPattern: function (_0xc, _0xf) {
      let _0x10 = _0xc?.native || _0xc;
      if (!_0x10) return null;
      let _0x19 = this.native.createPattern(_0x10, _0xf);
      return _0x19 ? _0x16(_0x19) : null;
    },
    beginPath: function () {
      this.native.beginPath();
    },
    closePath: function () {
      this.native.closePath();
    },
    moveTo: function (_0xc, _0xf) {
      this.native.moveTo(_0xc, _0xf);
    },
    lineTo: function (_0xc, _0xf) {
      this.native.lineTo(_0xc, _0xf);
    },
    bezierCurveTo: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
      this.native.bezierCurveTo(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
    },
    quadraticCurveTo: function (_0xc, _0xf, _0x10, _0x19) {
      this.native.quadraticCurveTo(_0xc, _0xf, _0x10, _0x19);
    },
    arc: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
      this.native.arc(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
    },
    arcTo: function (_0xc, _0xf, _0x10, _0x19, _0x1a) {
      this.native.arcTo(_0xc, _0xf, _0x10, _0x19, _0x1a);
    },
    ellipse: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b, _0x24, _0x25) {
      this.native.ellipse(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b, _0x24, _0x25);
    },
    rect: function (_0xc, _0xf, _0x10, _0x19) {
      this.native.rect(_0xc, _0xf, _0x10, _0x19);
    },
    roundRect: function (_0xc, _0xf, _0x10, _0x19, _0x1a) {
      let _0x1b = _0x2.pseudoToNative(_0x1a);
      this.native.roundRect(_0xc, _0xf, _0x10, _0x19, _0x1b);
    },
    fill: function (_0xc, _0xf) {
      (this.native,
        _0xc?.native
          ? this.native.fill(_0xc.native, _0xf)
          : this.native.fill(_0xc));
    },
    stroke: function (_0xc) {
      (this.native,
        _0xc?.native ? this.native.stroke(_0xc.native) : this.native.stroke());
    },
    clip: function (_0xc, _0xf) {
      _0xc?.native
        ? this.native.clip(_0xc.native, _0xf)
        : this.native.clip(_0xc);
    },
    isPointInPath: function (_0xc, _0xf, _0x10, _0x19) {
      return _0xc?.native
        ? this.native.isPointInPath(_0xc.native, _0xf, _0x10, _0x19)
        : this.native.isPointInPath(_0xc, _0xf, _0x10);
    },
    isPointInStroke: function (_0xc, _0xf, _0x10) {
      return _0xc?.native
        ? this.native.isPointInStroke(_0xc.native, _0xf, _0x10)
        : this.native.isPointInStroke(_0xc, _0xf);
    },
    getTransform: function () {
      let _0xc = this.native.getTransform();
      return _0x2.nativeToPseudo({
        a: _0xc.a,
        b: _0xc.b,
        c: _0xc.c,
        d: _0xc.d,
        e: _0xc.e,
        f: _0xc.f,
      });
    },
    rotate: function (_0xc) {
      this.native.rotate(_0xc);
    },
    scale: function (_0xc, _0xf) {
      this.native.scale(_0xc, _0xf);
    },
    translate: function (_0xc, _0xf) {
      this.native.translate(_0xc, _0xf);
    },
    transform: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
      this.native.transform(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
    },
    setTransform: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b) {
      if (typeof _0xc == "object" && _0xc !== null) {
        let _0x24 = _0x2.pseudoToNative(_0xc);
        this.native.setTransform(_0x24);
      } else this.native.setTransform(_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b);
    },
    resetTransform: function () {
      this.native.resetTransform();
    },
    drawImage: function (
      _0xc,
      _0xf,
      _0x10,
      _0x19,
      _0x1a,
      _0x1b,
      _0x24,
      _0x25,
      _0x29,
    ) {
      this.native;
      let _0x2a = _0xc?.native || _0xc;
      _0x2a &&
        (_0x25 !== void 0
          ? this.native.drawImage(
              _0x2a,
              _0xf,
              _0x10,
              _0x19,
              _0x1a,
              _0x1b,
              _0x24,
              _0x25,
              _0x29,
            )
          : _0x19 !== void 0
            ? this.native.drawImage(_0x2a, _0xf, _0x10, _0x19, _0x1a)
            : this.native.drawImage(_0x2a, _0xf, _0x10));
    },
    createImageData: function (_0xc, _0xf) {
      if (_0xc?.native) return _0x1c(this.native.createImageData(_0xc.native));
      if (_0xc > _0x8 || _0xf > _0x8)
        throw new Error(`ImageData size exceeds maximum (${_0x8}x${_0x8})`);
      return _0x1c(this.native.createImageData(_0xc, _0xf));
    },
    getImageData: function (_0xc, _0xf, _0x10, _0x19) {
      if (_0x10 > _0x8 || _0x19 > _0x8)
        throw new Error(`ImageData size exceeds maximum (${_0x8}x${_0x8})`);
      return _0x1c(this.native.getImageData(_0xc, _0xf, _0x10, _0x19));
    },
    putImageData: function (_0xc, _0xf, _0x10, _0x19, _0x1a, _0x1b, _0x24) {
      (this.native,
        _0xc?.native &&
          (_0x19 !== void 0
            ? this.native.putImageData(
                _0xc.native,
                _0xf,
                _0x10,
                _0x19,
                _0x1a,
                _0x1b,
                _0x24,
              )
            : this.native.putImageData(_0xc.native, _0xf, _0x10)));
    },
    save: function () {
      this.native.save();
    },
    restore: function () {
      this.native.restore();
    },
    reset: function () {
      this.native.reset();
    },
  };
  for (let [_0xc, _0xf] of Object.entries(_0x28))
    _0x2.setProperty(_0x26, _0xc, _0x2.createNativeFunction(_0xf));
  return {
    extendElement: function (_0xc, _0xf) {
      (_0x2.setProperty(
        _0xc,
        "getContext",
        _0x2.createNativeFunction(function (_0x10, _0x19) {
          _0x3.settings.logCalls &&
            console.log(_0x6.domain, "getContext", this, _0x10, _0x19);
          let _0x1a = this.native;
          if (_0x1a.tagName !== "CANVAS")
            throw new Error("getContext is only available on canvas elements");
          if (
            (_0x1a.width > _0x8 && (_0x1a.width = _0x8),
            _0x1a.height > _0x8 && (_0x1a.height = _0x8),
            _0x10 === "2d")
          ) {
            let _0x1b = _0x1a.getContext(
              "2d",
              _0x19 ? _0x2.pseudoToNative(_0x19) : void 0,
            );
            return _0xe(_0x1b, this);
          }
          throw new Error(`Context type "${_0x10}" is not supported`);
        }),
      ),
        _0x2.setProperty(_0xc, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function () {
            return this.native.tagName === "CANVAS"
              ? this.native.width
              : this.native.width;
          }),
          set: _0x2.createNativeFunction(function (_0x10) {
            (_0x3.settings.logCalls &&
              console.log(_0x6.domain, "set width", this, _0x10),
              this.native.tagName === "CANVAS" &&
                (this.native.width = Math.min(_0x10, _0x8)));
          }),
        }),
        _0x2.setProperty(_0xc, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function () {
            return this.native.tagName === "CANVAS"
              ? this.native.height
              : this.native.height;
          }),
          set: _0x2.createNativeFunction(function (_0x10) {
            (_0x3.settings.logCalls &&
              console.log(_0x6.domain, "set height", this, _0x10),
              this.native.tagName === "CANVAS" &&
                (this.native.height = Math.min(_0x10, _0x8)));
          }),
        }),
        _0x2.setProperty(
          _0xc,
          "toDataURL",
          _0x2.createNativeFunction(function (_0x10, _0x19) {
            if (this.native.tagName !== "CANVAS")
              throw new Error("toDataURL is only available on canvas elements");
            return (
              _0x3.settings.logCalls &&
                console.log(_0x6.domain, "toDataURL", this, _0x10, _0x19),
              this.native.toDataURL(_0x10, _0x19)
            );
          }),
        ));
    },
    resetDrawCounts: _0xd,
    contextToPseudo: _0xe,
  };
}
function _0x2b(_0x2, _0x5, _0x6) {
  let _0xa = 0,
    _0xb = window.location.origin;
  function _0xd(_0x17) {
    if (
      typeof _0x17 != "string" ||
      _0x17.startsWith("/") ||
      _0x17.startsWith("./") ||
      _0x17.startsWith("../") ||
      (!_0x17.startsWith("http://") && !_0x17.startsWith("https://"))
    )
      return !1;
    try {
      let _0x18 = new URL(_0x17);
      if (
        _0x18.origin === _0xb ||
        _0x18.hostname === "kicya.net" ||
        _0x18.hostname.endsWith(".kicya.net") ||
        _0x18.hostname === "nekoweb.org"
      )
        return !1;
      let _0x1c = _0x18.hostname.toLowerCase();
      return !(
        _0x1c === "localhost" ||
        _0x1c === "127.0.0.1" ||
        _0x1c === "0.0.0.0" ||
        _0x1c.startsWith("192.168.") ||
        _0x1c.startsWith("10.") ||
        _0x1c.startsWith("172.16.") ||
        _0x1c.startsWith("172.17.") ||
        _0x1c.startsWith("172.18.") ||
        _0x1c.startsWith("172.19.") ||
        _0x1c.startsWith("172.2") ||
        _0x1c.startsWith("172.30.") ||
        _0x1c.startsWith("172.31.") ||
        _0x1c === "[::1]"
      );
    } catch {
      return !1;
    }
  }
  let _0xe = 0,
    _0x12 = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x5, "__xhrCallbacks", _0x12);
  function _0x13(_0x17, ..._0x18) {
    if (!_0x17 || typeof _0x17 != "object") return;
    let _0x1c = _0xe++;
    _0x2.setProperty(_0x12, "fn" + _0x1c, _0x17);
    let _0x1d = _0x18.map((_0x1f, _0x20) => {
        let _0x21 = "arg" + _0x1c + "_" + _0x20;
        return (_0x2.setProperty(_0x12, _0x21, _0x1f), _0x21);
      }),
      _0x1e = _0x1d.map((_0x1f) => `__xhrCallbacks.${_0x1f}`).join(",");
    _0x2.appendCode(
      `__xhrCallbacks.fn${_0x1c}(${_0x1e}); delete __xhrCallbacks.fn${_0x1c}; ${_0x1d.map((_0x1f) => `delete __xhrCallbacks.${_0x1f}`).join("; ")};`,
    );
  }
  let _0x14 = _0x2.createNativeFunction(function () {
    (_0x3.settings.logCalls && console.log(_0x6.domain, "XMLHttpRequest", this),
      (this.native = new window.XMLHttpRequest()),
      (this._method = null),
      (this._url = null),
      (this._async = !0),
      (this._headers = {}),
      (this._eventHandlers = {}));
    let _0x18 = this;
    ((this.native.onreadystatechange = function () {
      (_0x2.setProperty(_0x18, "readyState", _0x18.native.readyState),
        _0x18.native.readyState === 4 &&
          (_0x2.setProperty(_0x18, "status", _0x18.native.status),
          _0x2.setProperty(_0x18, "statusText", _0x18.native.statusText),
          _0x2.setProperty(
            _0x18,
            "responseText",
            _0x18.native.responseText?.slice(0, 5242880) || "",
          ),
          _0x2.setProperty(_0x18, "responseURL", _0x18.native.responseURL),
          (_0xa = Math.max(0, _0xa - 1))),
        _0x18._eventHandlers.onreadystatechange &&
          _0x13(_0x18._eventHandlers.onreadystatechange));
    }),
      (this.native.onload = function () {
        _0x18._eventHandlers.onload && _0x13(_0x18._eventHandlers.onload);
      }),
      (this.native.onerror = function () {
        ((_0xa = Math.max(0, _0xa - 1)),
          _0x18._eventHandlers.onerror && _0x13(_0x18._eventHandlers.onerror));
      }),
      (this.native.ontimeout = function () {
        ((_0xa = Math.max(0, _0xa - 1)),
          _0x18._eventHandlers.ontimeout &&
            _0x13(_0x18._eventHandlers.ontimeout));
      }),
      (this.native.onabort = function () {
        ((_0xa = Math.max(0, _0xa - 1)),
          _0x18._eventHandlers.onabort && _0x13(_0x18._eventHandlers.onabort));
      }),
      (this.native.onprogress = function (_0x1c) {
        if (_0x18._eventHandlers.onprogress) {
          let _0x1d = _0x2.nativeToPseudo({
            loaded: _0x1c.loaded,
            total: _0x1c.total,
            lengthComputable: _0x1c.lengthComputable,
          });
          _0x13(_0x18._eventHandlers.onprogress, _0x1d);
        }
      }),
      (this.native.onloadstart = function () {
        _0x18._eventHandlers.onloadstart &&
          _0x13(_0x18._eventHandlers.onloadstart);
      }),
      (this.native.onloadend = function () {
        _0x18._eventHandlers.onloadend && _0x13(_0x18._eventHandlers.onloadend);
      }),
      _0x2.setProperty(this, "readyState", 0),
      _0x2.setProperty(this, "status", 0),
      _0x2.setProperty(this, "statusText", ""),
      _0x2.setProperty(this, "responseText", ""),
      _0x2.setProperty(this, "responseURL", ""));
  }, !0);
  _0x2.setProperty(_0x5, "XMLHttpRequest", _0x14);
  let _0x15 = _0x2.getProperty(_0x14, "prototype");
  (_0x2.setProperty(_0x14, "UNSENT", 0),
    _0x2.setProperty(_0x14, "OPENED", 1),
    _0x2.setProperty(_0x14, "HEADERS_RECEIVED", 2),
    _0x2.setProperty(_0x14, "LOADING", 3),
    _0x2.setProperty(_0x14, "DONE", 4),
    _0x2.setProperty(_0x15, "UNSENT", 0),
    _0x2.setProperty(_0x15, "OPENED", 1),
    _0x2.setProperty(_0x15, "HEADERS_RECEIVED", 2),
    _0x2.setProperty(_0x15, "LOADING", 3),
    _0x2.setProperty(_0x15, "DONE", 4));
  let _0x16 = [
    "onreadystatechange",
    "onload",
    "onerror",
    "ontimeout",
    "onabort",
    "onprogress",
    "onloadstart",
    "onloadend",
  ];
  for (let _0x17 of _0x16)
    _0x2.setProperty(_0x15, _0x17, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this._eventHandlers[_0x17] || null;
      }),
      set: _0x2.createNativeFunction(function (_0x18) {
        (_0x3.settings.logCalls &&
          console.log(_0x6.domain, "XMLHttpRequest set " + _0x17, this, _0x18),
          (this._eventHandlers[_0x17] = _0x18));
      }),
    });
  (_0x2.setProperty(_0x15, "timeout", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function () {
      return this.native.timeout;
    }),
    set: _0x2.createNativeFunction(function (_0x17) {
      this.native.timeout = Math.min(_0x17, 30000);
    }),
  }),
    _0x2.setProperty(
      _0x15,
      "withCredentials",
      Interpreter.VALUE_IN_DESCRIPTOR,
      {
        get: _0x2.createNativeFunction(function () {
          return this.native.withCredentials;
        }),
        set: _0x2.createNativeFunction(function (_0x17) {
          this.native.withCredentials = !1;
        }),
      },
    ),
    _0x2.setProperty(_0x15, "responseType", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native.responseType;
      }),
      set: _0x2.createNativeFunction(function (_0x17) {
        (_0x17 === "" || _0x17 === "text" || _0x17 === "json") &&
          (this.native.responseType = _0x17);
      }),
    }),
    _0x2.setProperty(_0x15, "response", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0x17 = this.native.response;
        return this.native.responseType === "json"
          ? _0x2.nativeToPseudo(_0x17)
          : typeof _0x17 == "string"
            ? _0x17.slice(0, 5242880)
            : _0x17;
      }),
    }),
    _0x2.setProperty(
      _0x15,
      "open",
      _0x2.createNativeFunction(function (_0x17, _0x18, _0x1c, _0x1d, _0x1e) {
        if (!_0xd(_0x18))
          throw new Error(
            `XHR request blocked: URL "${_0x18}" is not allowed. Only absolute URLs to external origins are permitted.`,
          );
        let _0x1f = [
          "GET",
          "POST",
          "PUT",
          "DELETE",
          "PATCH",
          "HEAD",
          "OPTIONS",
        ];
        if (((_0x17 = String(_0x17).toUpperCase()), !_0x1f.includes(_0x17)))
          throw new Error(`HTTP method "${_0x17}" is not allowed`);
        (_0x3.settings.logCalls &&
          console.log(
            _0x6.domain,
            "XMLHttpRequest open",
            this,
            _0x17,
            _0x18,
            _0x1c,
            _0x1d,
            _0x1e,
          ),
          (this._method = _0x17),
          (this._url = _0x18),
          (this._async = _0x1c !== !1),
          this.native.open(_0x17, _0x18, this._async),
          (this.native.timeout = 30000),
          _0x2.setProperty(this, "readyState", this.native.readyState));
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "setRequestHeader",
      _0x2.createNativeFunction(function (_0x17, _0x18) {
        if (
          [
            "cookie",
            "cookie2",
            "set-cookie",
            "set-cookie2",
            "host",
            "origin",
            "referer",
          ].includes(_0x17.toLowerCase())
        )
          throw new Error(`Setting header "${_0x17}" is not allowed`);
        (_0x3.settings.logCalls &&
          console.log(
            _0x6.domain,
            "XMLHttpRequest setRequestHeader",
            this,
            _0x17,
            _0x18,
          ),
          (this._headers[_0x17] = _0x18),
          this.native.setRequestHeader(_0x17, _0x18));
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "send",
      _0x2.createNativeFunction(function (_0x17) {
        if (_0xa >= 5)
          throw new Error("Maximum concurrent requests (5) exceeded");
        (_0x3.settings.logCalls &&
          console.log(_0x6.domain, "XMLHttpRequest send", this, _0x17),
          _0xa++);
        let _0x18 = null;
        (_0x17 != null &&
          (typeof _0x17 == "string"
            ? (_0x18 = _0x17.slice(0, 5242880))
            : typeof _0x17 == "object" &&
              (_0x18 = JSON.stringify(_0x2.pseudoToNative(_0x17)))),
          this.native.send(_0x18));
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "abort",
      _0x2.createNativeFunction(function () {
        (_0x3.settings.logCalls &&
          console.log(_0x6.domain, "XMLHttpRequest abort", this),
          this.native.abort(),
          (_0xa = Math.max(0, _0xa - 1)));
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "getResponseHeader",
      _0x2.createNativeFunction(function (_0x17) {
        return this.native.getResponseHeader(_0x17);
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "getAllResponseHeaders",
      _0x2.createNativeFunction(function () {
        return this.native.getAllResponseHeaders();
      }),
    ),
    _0x2.setProperty(
      _0x15,
      "overrideMimeType",
      _0x2.createNativeFunction(function (_0x17) {
        this.native.overrideMimeType(_0x17);
      }),
    ));
}
var _0x2c = "webtiles_storage",
  _0x2d = 1,
  _0x2e = "localStorage",
  _0x2f = 1024 * 1024,
  _0x30 = 100,
  _0x31 = null,
  _0x32 = null;
function _0x33() {
  return (
    _0x32 ||
    ((_0x32 = new Promise((_0x2, _0x5) => {
      let _0x6 = indexedDB.open(_0x2c, _0x2d);
      ((_0x6.onerror = () => _0x5(_0x6.error)),
        (_0x6.onsuccess = () => {
          ((_0x31 = _0x6.result), _0x2(_0x31));
        }),
        (_0x6.onupgradeneeded = (_0x7) => {
          let _0x8 = _0x7.target.result;
          _0x8.objectStoreNames.contains(_0x2e) ||
            _0x8
              .createObjectStore(_0x2e, {
                keyPath: ["site", "key"],
              })
              .createIndex("site", "site", { unique: !1 });
        }));
    })),
    _0x32)
  );
}
async function _0x34(_0x2, _0x5) {
  return (
    await _0x33(),
    new Promise((_0x6, _0x7) => {
      let _0xa = _0x31
        .transaction(_0x2e, "readonly")
        .objectStore(_0x2e)
        .get([_0x2, _0x5]);
      ((_0xa.onsuccess = () => _0x6(_0xa.result?.value ?? null)),
        (_0xa.onerror = () => _0x7(_0xa.error)));
    })
  );
}
async function _0x35(_0x2, _0x5, _0x6) {
  return (
    await _0x33(),
    new Promise((_0x7, _0x8) => {
      let _0xb = _0x31.transaction(_0x2e, "readwrite").objectStore(_0x2e).put({
        site: _0x2,
        key: _0x5,
        value: _0x6,
      });
      ((_0xb.onsuccess = () => _0x7()),
        (_0xb.onerror = () => _0x8(_0xb.error)));
    })
  );
}
async function _0x36(_0x2, _0x5) {
  return (
    await _0x33(),
    new Promise((_0x6, _0x7) => {
      let _0xa = _0x31
        .transaction(_0x2e, "readwrite")
        .objectStore(_0x2e)
        .delete([_0x2, _0x5]);
      ((_0xa.onsuccess = () => _0x6()),
        (_0xa.onerror = () => _0x7(_0xa.error)));
    })
  );
}
async function _0x37(_0x2) {
  return (
    await _0x33(),
    new Promise((_0x5, _0x6) => {
      let _0xa = _0x31
        .transaction(_0x2e, "readonly")
        .objectStore(_0x2e)
        .index("site")
        .getAll(_0x2);
      ((_0xa.onsuccess = () => {
        let _0xb = _0xa.result.map((_0xd) => _0xd.key);
        _0x5(_0xb);
      }),
        (_0xa.onerror = () => _0x6(_0xa.error)));
    })
  );
}
async function _0x38(_0x2) {
  return (
    await _0x33(),
    new Promise((_0x5, _0x6) => {
      let _0xa = _0x31
        .transaction(_0x2e, "readonly")
        .objectStore(_0x2e)
        .index("site")
        .getAll(_0x2);
      ((_0xa.onsuccess = () => {
        let _0xb = 0;
        for (let _0xd of _0xa.result)
          _0xb += (_0xd.key.length + _0xd.value.length) * 2;
        _0x5({
          size: _0xb,
          count: _0xa.result.length,
        });
      }),
        (_0xa.onerror = () => _0x6(_0xa.error)));
    })
  );
}
async function _0x39(_0x2) {
  return (
    await _0x33(),
    new Promise((_0x5, _0x6) => {
      let _0xa = _0x31
        .transaction(_0x2e, "readwrite")
        .objectStore(_0x2e)
        .index("site")
        .openCursor(_0x2);
      ((_0xa.onsuccess = (_0xb) => {
        let _0xd = _0xb.target.result;
        _0xd ? (_0xd.delete(), _0xd.continue()) : _0x5();
      }),
        (_0xa.onerror = () => _0x6(_0xa.error)));
    })
  );
}
function _0x3a(_0x2, _0x5, _0x6) {
  let _0x7 = _0x2.nativeToPseudo({});
  (_0x2.setProperty(
    _0x7,
    "getItem",
    _0x2.createAsyncFunction(function (_0x8, _0x9) {
      if (
        (_0x3.settings.logCalls &&
          console.log(_0x6, "localStorage.getItem", this, _0x8),
        _0x8 == null)
      ) {
        _0x9(null);
        return;
      }
      ((_0x8 = String(_0x8)),
        _0x34(_0x6, _0x8)
          .then((_0xa) => _0x9(_0xa))
          .catch((_0xa) => {
            (console.error("localStorage.getItem error:", _0xa), _0x9(null));
          }));
    }),
  ),
    _0x2.setProperty(
      _0x7,
      "setItem",
      _0x2.createAsyncFunction(function (_0x8, _0x9, _0xa) {
        if (
          (_0x3.settings.logCalls &&
            console.log(_0x6, "localStorage.setItem", this, _0x8, _0x9),
          _0x8 == null)
        ) {
          _0xa();
          return;
        }
        ((_0x8 = String(_0x8)),
          (_0x9 = String(_0x9)),
          _0x38(_0x6)
            .then(({ size: _0xb, count: _0xd }) => {
              _0x34(_0x6, _0x8)
                .then((_0xe) => {
                  if (_0xe === null && _0xd >= _0x30)
                    throw new Error(
                      `localStorage item limit exceeded (max ${_0x30} items)`,
                    );
                  let _0x13 = _0xe ? (_0x8.length + _0xe.length) * 2 : 0,
                    _0x14 = (_0x8.length + _0x9.length) * 2;
                  if (_0xb - _0x13 + _0x14 > _0x2f)
                    throw new Error(
                      `localStorage size limit exceeded (max ${_0x2f / 1024}KB)`,
                    );
                  return _0x35(_0x6, _0x8, _0x9);
                })
                .then(() => _0xa())
                .catch((_0xe) => {
                  throw (
                    console.error("localStorage.setItem error:", _0xe),
                    _0xe
                  );
                });
            })
            .catch((_0xb) => {
              (console.error("localStorage.setItem error:", _0xb), _0xa());
            }));
      }),
    ),
    _0x2.setProperty(
      _0x7,
      "removeItem",
      _0x2.createAsyncFunction(function (_0x8, _0x9) {
        if (
          (_0x3.settings.logCalls &&
            console.log(_0x6, "localStorage.removeItem", this, _0x8),
          _0x8 == null)
        ) {
          _0x9();
          return;
        }
        ((_0x8 = String(_0x8)),
          _0x36(_0x6, _0x8)
            .then(() => _0x9())
            .catch((_0xa) => {
              (console.error("localStorage.removeItem error:", _0xa), _0x9());
            }));
      }),
    ),
    _0x2.setProperty(
      _0x7,
      "clear",
      _0x2.createAsyncFunction(function (_0x8) {
        (_0x3.settings.logCalls &&
          console.log(_0x6, "localStorage.clear", this),
          _0x39(_0x6)
            .then(() => _0x8())
            .catch((_0x9) => {
              (console.error("localStorage.clear error:", _0x9), _0x8());
            }));
      }),
    ),
    _0x2.setProperty(
      _0x7,
      "key",
      _0x2.createAsyncFunction(function (_0x8, _0x9) {
        ((_0x8 = parseInt(_0x8) || 0),
          _0x37(_0x6)
            .then((_0xa) => {
              _0x9(_0x8 >= 0 && _0x8 < _0xa.length ? _0xa[_0x8] : null);
            })
            .catch((_0xa) => {
              (console.error("localStorage.key error:", _0xa), _0x9(null));
            }));
      }),
    ),
    _0x2.setProperty(
      _0x7,
      "getLength",
      _0x2.createAsyncFunction(function (_0x8) {
        _0x38(_0x6)
          .then(({ count: _0x9 }) => _0x8(_0x9))
          .catch((_0x9) => {
            (console.error("localStorage.getLength error:", _0x9), _0x8(0));
          });
      }),
    ),
    _0x2.setProperty(_0x5, "localStorage", _0x7),
    _0x2.setProperty(_0x5, "sessionStorage", _0x7));
}
_0x33().catch((_0x2) => {
  console.error("Failed to initialize storage DB:", _0x2);
});
function _0x3b(_0x2, _0x5, _0x6, _0x7) {
  let _0x8 = _0x2.createNativeFunction(function () {}, !0);
  _0x2.setProperty(_0x5, "DOMParser", _0x8);
  let _0x9 = _0x2.getProperty(_0x8, "prototype");
  _0x2.setProperty(
    _0x9,
    "parseFromString",
    _0x2.createNativeFunction(function (_0xa, _0xb) {
      if (
        (_0x3.settings.logCalls &&
          console.log(
            _0x7.domain,
            "DOMParser parseFromString",
            this,
            _0xa,
            _0xb,
          ),
        ![
          "text/html",
          "text/xml",
          "application/xml",
          "application/xhtml+xml",
          "image/svg+xml",
        ].includes(_0xb))
      )
        throw new Error(`DOMParser: Unsupported MIME type "${_0xb}"`);
      if (
        (typeof _0xa != "string" && (_0xa = String(_0xa)), _0xa.length > 100000)
      )
        throw new Error("DOMParser: Input string too large (max 100KB)");
      let _0x12 = new DOMParser().parseFromString(_0xa, _0xb),
        _0x13 = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
      function _0x14(_0x15) {
        if (_0x15 == null) return null;
        let _0x16 = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
        return (
          (_0x16.native = _0x15),
          (_0x16.fromDOMParser = !0),
          _0x2.setProperty(_0x16, "nodeName", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return this.native.nodeName;
            }),
          }),
          _0x2.setProperty(_0x16, "nodeType", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return this.native.nodeType;
            }),
          }),
          _0x2.setProperty(
            _0x16,
            "nodeValue",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return this.native.nodeValue;
              }),
              set: _0x2.createNativeFunction(function (_0x17) {
                (_0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "DOMParser set nodeValue",
                    this,
                    _0x17,
                  ),
                  (this.native.nodeValue = _0x17));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "textContent",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return this.native.textContent;
              }),
              set: _0x2.createNativeFunction(function (_0x17) {
                (_0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "DOMParser set textContent",
                    this,
                    _0x17,
                  ),
                  (this.native.textContent = String(_0x17).slice(0, 50000)));
              }),
            },
          ),
          _0x2.setProperty(_0x16, "tagName", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return this.native.tagName;
            }),
          }),
          _0x2.setProperty(_0x16, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return this.native.id;
            }),
            set: _0x2.createNativeFunction(function (_0x17) {
              (_0x3.settings.logCalls &&
                console.log(_0x7.domain, "DOMParser set id", this, _0x17),
                (this.native.id = String(_0x17).slice(0, 100)));
            }),
          }),
          _0x2.setProperty(
            _0x16,
            "className",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return this.native.className;
              }),
              set: _0x2.createNativeFunction(function (_0x17) {
                (_0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "DOMParser set className",
                    this,
                    _0x17,
                  ),
                  (this.native.className = String(_0x17).slice(0, 1000)));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "innerHTML",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return this.native.innerHTML;
              }),
              set: _0x2.createNativeFunction(function (_0x17) {
                throw new Error(
                  "innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.",
                );
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "outerHTML",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return this.native.outerHTML;
              }),
            },
          ),
          _0x2.setProperty(_0x16, "children", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              let _0x17 = Array.from(this.native.children),
                _0x18 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
              for (let _0x1c = 0; _0x1c < _0x17.length; _0x1c++)
                _0x2.setProperty(_0x18, _0x1c, _0x14(_0x17[_0x1c]));
              return (_0x2.setProperty(_0x18, "length", _0x17.length), _0x18);
            }),
          }),
          _0x2.setProperty(
            _0x16,
            "childNodes",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                let _0x17 = Array.from(this.native.childNodes),
                  _0x18 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
                for (let _0x1c = 0; _0x1c < _0x17.length; _0x1c++)
                  _0x2.setProperty(_0x18, _0x1c, _0x14(_0x17[_0x1c]));
                return (_0x2.setProperty(_0x18, "length", _0x17.length), _0x18);
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "firstChild",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return _0x14(this.native.firstChild);
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "lastChild",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return _0x14(this.native.lastChild);
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "firstElementChild",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return _0x14(this.native.firstElementChild);
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "lastElementChild",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                return _0x14(this.native.lastElementChild);
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "parentNode",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                if (!this.fromDOMParser) throw new Error("No access.");
                return this.native.isSameNode(_0x6)
                  ? null
                  : (_0x3.settings.logCalls &&
                      console.log(
                        _0x7.domain,
                        "DOMParser get parentNode",
                        this,
                      ),
                    _0x14(this.native.parentNode));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "parentElement",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                if (!this.fromDOMParser) throw new Error("No access.");
                return this.native.isSameNode(_0x6)
                  ? null
                  : (_0x3.settings.logCalls &&
                      console.log(
                        _0x7.domain,
                        "DOMParser get parentElement",
                        this,
                      ),
                    _0x14(this.native.parentElement));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "nextSibling",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                if (!this.fromDOMParser) throw new Error("No access.");
                return this.native.isSameNode(_0x6)
                  ? null
                  : (_0x3.settings.logCalls &&
                      console.log(
                        _0x7.domain,
                        "DOMParser get nextSibling",
                        this,
                      ),
                    _0x14(this.native.nextSibling));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "previousSibling",
            Interpreter.VALUE_IN_DESCRIPTOR,
            {
              get: _0x2.createNativeFunction(function () {
                if (!this.fromDOMParser) throw new Error("No access.");
                return this.native.isSameNode(_0x6)
                  ? null
                  : (_0x3.settings.logCalls &&
                      console.log(
                        _0x7.domain,
                        "DOMParser get previousSibling",
                        this,
                      ),
                    _0x14(this.native.previousSibling));
              }),
            },
          ),
          _0x2.setProperty(
            _0x16,
            "getAttributeNames",
            _0x2.createNativeFunction(function () {
              if (!this.fromDOMParser) throw new Error("No access.");
              let _0x17 = Array.from(this.native.getAttributeNames()),
                _0x18 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
              for (let _0x1c = 0; _0x1c < _0x17.length; _0x1c++)
                _0x2.setProperty(_0x18, _0x1c, _0x17[_0x1c]);
              return (_0x2.setProperty(_0x18, "length", _0x17.length), _0x18);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "getAttribute",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              return this.native.getAttribute(_0x17);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "setAttribute",
            _0x2.createNativeFunction(function (_0x17, _0x18) {
              if (!this.fromDOMParser) throw new Error("No access.");
              if (
                ((_0x17 = String(_0x17).toLowerCase()), _0x17.startsWith("on"))
              )
                throw new Error("Event handlers are not allowed");
              (this.native.setAttribute(_0x17, String(_0x18)),
                _0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "DOMParser set attribute",
                    this,
                    _0x17,
                    _0x18,
                  ));
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "hasAttribute",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              return this.native.hasAttribute(_0x17);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "removeAttribute",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              if (this.native.isSameNode(_0x6)) throw new Error("No access.");
              (this.native.removeAttribute(_0x17),
                _0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "DOMParser remove attribute",
                    this,
                    _0x17,
                  ));
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "querySelector",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              return _0x14(this.native.querySelector(_0x17));
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "querySelectorAll",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              let _0x18 = Array.from(this.native.querySelectorAll(_0x17)),
                _0x1c = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
              for (let _0x1d = 0; _0x1d < _0x18.length; _0x1d++)
                _0x2.setProperty(_0x1c, _0x1d, _0x14(_0x18[_0x1d]));
              return (_0x2.setProperty(_0x1c, "length", _0x18.length), _0x1c);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "getElementsByTagName",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              let _0x18 = Array.from(this.native.getElementsByTagName(_0x17)),
                _0x1c = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
              for (let _0x1d = 0; _0x1d < _0x18.length; _0x1d++)
                _0x2.setProperty(_0x1c, _0x1d, _0x14(_0x18[_0x1d]));
              return (_0x2.setProperty(_0x1c, "length", _0x18.length), _0x1c);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "getElementsByClassName",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              let _0x18 = Array.from(this.native.getElementsByClassName(_0x17)),
                _0x1c = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
              for (let _0x1d = 0; _0x1d < _0x18.length; _0x1d++)
                _0x2.setProperty(_0x1c, _0x1d, _0x14(_0x18[_0x1d]));
              return (_0x2.setProperty(_0x1c, "length", _0x18.length), _0x1c);
            }),
          ),
          _0x2.setProperty(
            _0x16,
            "getElementById",
            _0x2.createNativeFunction(function (_0x17) {
              if (!this.fromDOMParser) throw new Error("No access.");
              return _0x14(
                this.native.getElementById
                  ? this.native.getElementById(_0x17)
                  : null,
              );
            }),
          ),
          _0x16
        );
      }
      return (
        _0x2.setProperty(
          _0x13,
          "documentElement",
          Interpreter.VALUE_IN_DESCRIPTOR,
          {
            get: _0x2.createNativeFunction(function () {
              return _0x14(_0x12.documentElement);
            }),
          },
        ),
        _0x2.setProperty(_0x13, "head", Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function () {
            return (
              _0x3.settings.logCalls &&
                console.log(_0x7.domain, "DOMParser get head", this),
              _0x14(_0x12.head)
            );
          }),
        }),
        _0x2.setProperty(_0x13, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function () {
            return (
              _0x3.settings.logCalls &&
                console.log(_0x7.domain, "DOMParser get body", this),
              _0x14(_0x12.body)
            );
          }),
        }),
        _0x2.setProperty(_0x13, "title", Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function () {
            return _0x12.title;
          }),
        }),
        _0x2.setProperty(
          _0x13,
          "querySelector",
          _0x2.createNativeFunction(function (_0x15) {
            return _0x14(_0x12.querySelector(_0x15));
          }),
        ),
        _0x2.setProperty(
          _0x13,
          "querySelectorAll",
          _0x2.createNativeFunction(function (_0x15) {
            let _0x16 = Array.from(_0x12.querySelectorAll(_0x15)),
              _0x17 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
            for (let _0x18 = 0; _0x18 < _0x16.length; _0x18++)
              _0x2.setProperty(_0x17, _0x18, _0x14(_0x16[_0x18]));
            return (_0x2.setProperty(_0x17, "length", _0x16.length), _0x17);
          }),
        ),
        _0x2.setProperty(
          _0x13,
          "getElementById",
          _0x2.createNativeFunction(function (_0x15) {
            return _0x14(_0x12.getElementById(_0x15));
          }),
        ),
        _0x2.setProperty(
          _0x13,
          "getElementsByTagName",
          _0x2.createNativeFunction(function (_0x15) {
            let _0x16 = Array.from(_0x12.getElementsByTagName(_0x15)),
              _0x17 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
            for (let _0x18 = 0; _0x18 < _0x16.length; _0x18++)
              _0x2.setProperty(_0x17, _0x18, _0x14(_0x16[_0x18]));
            return (_0x2.setProperty(_0x17, "length", _0x16.length), _0x17);
          }),
        ),
        _0x2.setProperty(
          _0x13,
          "getElementsByClassName",
          _0x2.createNativeFunction(function (_0x15) {
            let _0x16 = Array.from(_0x12.getElementsByClassName(_0x15)),
              _0x17 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
            for (let _0x18 = 0; _0x18 < _0x16.length; _0x18++)
              _0x2.setProperty(_0x17, _0x18, _0x14(_0x16[_0x18]));
            return (_0x2.setProperty(_0x17, "length", _0x16.length), _0x17);
          }),
        ),
        _0x13
      );
    }),
  );
}
function _0x3c(_0x2, _0x5, _0x6, _0x7) {
  let _0x8 = new WeakMap(),
    _0x9 = 1000,
    _0xa = 5,
    _0xb = new WeakMap(),
    _0xd = 0,
    _0xe = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x5, "__eventCallbacks", _0xe);
  function _0x12(_0x2a, _0x3d) {
    let _0x3e = _0xd++;
    (_0x2.setProperty(_0xe, "fn" + _0x3e, _0x2a),
      _0x2.setProperty(_0xe, "ev" + _0x3e, _0x3d),
      _0x2.appendCode(
        `__eventCallbacks.fn${_0x3e}(__eventCallbacks.ev${_0x3e}); delete __eventCallbacks.fn${_0x3e}; delete __eventCallbacks.ev${_0x3e};`,
      ));
  }
  function _0x13() {
    return _0x6.getElementsByTagName("*").length;
  }
  function _0x14(_0x2a = 1) {
    if (_0x13() + _0x2a > _0x9)
      throw new Error(`DOM element limit exceeded (max ${_0x9})`);
  }
  function _0x15(_0x2a) {
    return _0x2a instanceof Element
      ? 1 + _0x2a.getElementsByTagName("*").length
      : 0;
  }
  function _0x16(_0x2a, _0x3d = !1) {
    if (_0x2a == null) return null;
    if (_0x8.has(_0x2a)) return _0x8.get(_0x2a);
    let _0x3e = _0x2a instanceof Element ? _0x22 : _0x1d,
      _0x3f = _0x2.createObject(_0x3e);
    return (
      (_0x3f.native = _0x2a),
      _0x3f.fromDOMParser || (_0x3f.fromDOMParser = _0x3d),
      _0x8.set(_0x2a, _0x3f),
      _0x3f
    );
  }
  function _0x17(_0x2a) {
    return _0x2a && _0x6.contains(_0x2a);
  }
  function _0x18(_0x2a) {
    return _0x17(_0x2a) ? _0x2a : null;
  }
  function _0x1c(_0x2a) {
    let _0x3d = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
    for (let _0x3e = 0; _0x3e < _0x2a.length; _0x3e++)
      _0x2.setProperty(_0x3d, _0x3e, _0x16(_0x2a[_0x3e]));
    return (_0x2.setProperty(_0x3d, "length", _0x2a.length), _0x3d);
  }
  let _0x1d = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "Node", _0x1d);
  let _0x1e = _0x2.getProperty(_0x1d, "prototype"),
    _0x1f = {
      firstChild: function () {
        return _0x16(_0x18(this.native.firstChild));
      },
      lastChild: function () {
        return _0x16(_0x18(this.native.lastChild));
      },
      parentNode: function () {
        return _0x16(_0x18(this.native.parentNode));
      },
      parentElement: function () {
        return _0x16(_0x18(this.native.parentElement));
      },
      nextSibling: function () {
        return _0x16(_0x18(this.native.nextSibling));
      },
      previousSibling: function () {
        return _0x16(_0x18(this.native.previousSibling));
      },
      childNodes: function () {
        let _0x2a = Array.from(this.native.childNodes).filter(_0x17);
        return _0x1c(_0x2a);
      },
      nodeName: function () {
        return this.native.nodeName;
      },
      nodeType: function () {
        return this.native.nodeType;
      },
      nodeValue: function () {
        return this.native.nodeValue;
      },
      textContent: function () {
        return this.native.textContent;
      },
    },
    _0x20 = {
      textContent: function (_0x2a) {
        (_0x3.settings.logCalls &&
          console.log(_0x7.domain, "set textContent", this, _0x2a),
          (this.native.textContent = _0x2a));
      },
      nodeValue: function (_0x2a) {
        (_0x3.settings.logCalls &&
          console.log(_0x7.domain, "set nodeValue", this, _0x2a),
          (this.native.nodeValue = _0x2a));
      },
    };
  for (let [_0x2a, _0x3d] of Object.entries(_0x1f)) {
    let _0x3e = { get: _0x2.createNativeFunction(_0x3d) };
    (_0x20[_0x2a] && (_0x3e.set = _0x2.createNativeFunction(_0x20[_0x2a])),
      _0x2.setProperty(_0x1e, _0x2a, Interpreter.VALUE_IN_DESCRIPTOR, _0x3e));
  }
  let _0x21 = {
    hasChildNodes: function () {
      return this.native.hasChildNodes();
    },
    appendChild: function (_0x2a) {
      if (!_0x2a?.native) return null;
      if (_0x2a.fromDOMParser)
        throw new Error("You cannot append DOMParser elements to the DOM.");
      return (
        _0x14(_0x15(_0x2a.native)),
        this.native.appendChild(_0x2a.native),
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "appendChild", this, _0x2a),
        _0x2a
      );
    },
    append: function (_0x2a) {
      for (let _0x3d of _0x2a)
        if (_0x3d?.native) {
          if (_0x3d.fromDOMParser)
            throw new Error("You cannot append DOMParser elements to the DOM.");
          (_0x14(_0x15(_0x3d.native)), this.native.appendChild(_0x3d.native));
        }
      return (
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "append", this, _0x2a),
        _0x2a
      );
    },
    removeChild: function (_0x2a) {
      return !_0x2a?.native || !_0x17(_0x2a.native)
        ? null
        : (_0x3.settings.logCalls &&
            console.log(_0x7.domain, "removeChild", this, _0x2a),
          _0x16(this.native.removeChild(_0x2a.native)));
    },
    insertBefore: function (_0x2a, _0x3d) {
      if (!_0x2a?.native) return null;
      if (_0x2a.fromDOMParser)
        throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      _0x14(_0x15(_0x2a.native));
      let _0x3e = _0x3d?.native || null;
      return (
        this.native.insertBefore(_0x2a.native, _0x3e),
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "insertBefore", this, _0x2a, _0x3e),
        _0x2a
      );
    },
    cloneNode: function (_0x2a) {
      return (
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "cloneNode", this, _0x2a),
        _0x16(this.native.cloneNode(_0x2a), this.fromDOMParser)
      );
    },
    contains: function (_0x2a) {
      return _0x2a?.native ? this.native.contains(_0x2a.native) : !1;
    },
    remove: function () {
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      (this.native.remove(),
        _0x3.settings.logCalls && console.log(_0x7.domain, "remove", this));
    },
    after: function (_0x2a) {
      if (!_0x2a?.native) return null;
      if (_0x2a.fromDOMParser)
        throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      return (
        _0x14(_0x15(_0x2a.native)),
        this.native.after(_0x2a.native),
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "after", this, _0x2a),
        _0x2a
      );
    },
    before: function (_0x2a) {
      if (!_0x2a?.native) return null;
      if (_0x2a.fromDOMParser)
        throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      return (
        _0x14(_0x15(_0x2a.native)),
        this.native.before(_0x2a.native),
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "before", this, _0x2a),
        _0x2a
      );
    },
  };
  for (let [_0x2a, _0x3d] of Object.entries(_0x21))
    _0x2.setProperty(_0x1e, _0x2a, _0x2.createNativeFunction(_0x3d));
  let _0x22 = _0x2.createNativeFunction(function () {
    throw TypeError("Illegal constructor");
  }, !0);
  _0x2.setProperty(_0x5, "Element", _0x22);
  let _0x23 = _0x2.createObject(_0x1d);
  _0x2.setProperty(_0x22, "prototype", _0x23);
  function _0x11(_0x2a) {
    if (!_0x2a) return "";
    _0x2a = String(_0x2a);
    let _0x3d = _0x2a.toLowerCase().trim();
    if (_0x3d.startsWith("javascript:") || _0x3d.startsWith("vbscript:"))
      throw new Error("javascript: URLs are not allowed");
    if (_0x3d.startsWith("data:")) return _0x2a;
    try {
      let _0x3e = new URL(_0x2a, location.href);
      if (_0x3e.hostname !== location.hostname)
        throw new Error("External URLs are not allowed");
      let _0x3f = _0x3e.pathname + _0x3e.search + _0x3e.hash;
      return (
        _0x3f.startsWith(`/t/${_0x7.domain}/`) ||
          (_0x3f = `/t/${_0x7.domain}/${_0x3f}`.replaceAll("//", "/")),
        _0x3f
      );
    } catch (_0x3e) {
      if (_0x3e.message.includes("not allowed")) throw _0x3e;
      let _0x3f = _0x2a;
      return (
        !_0x3f.startsWith(`/t/${_0x7.domain}/`) &&
          !_0x3f.startsWith("#") &&
          (_0x3f = `/t/${_0x7.domain}/${_0x3f}`.replaceAll("//", "/")),
        _0x3f
      );
    }
  }
  let _0x26 = {
      innerText: function () {
        return this.native.innerText;
      },
      innerHTML: function () {
        return this.native.innerHTML;
      },
      outerHTML: function () {
        return this.native.outerHTML;
      },
      id: function () {
        return this.native.id;
      },
      className: function () {
        return this.native.className;
      },
      tagName: function () {
        return this.native.tagName;
      },
      children: function () {
        let _0x2a = Array.from(this.native.children).filter(_0x17);
        return _0x1c(_0x2a);
      },
      firstElementChild: function () {
        return _0x16(_0x18(this.native.firstElementChild));
      },
      lastElementChild: function () {
        return _0x16(_0x18(this.native.lastElementChild));
      },
      nextElementSibling: function () {
        return _0x16(_0x18(this.native.nextElementSibling));
      },
      previousElementSibling: function () {
        return _0x16(_0x18(this.native.previousElementSibling));
      },
      childElementCount: function () {
        return this.native.childElementCount;
      },
      src: function () {
        return this.native.src;
      },
      href: function () {
        return this.native.href;
      },
      hidden: function () {
        return this.native.hidden;
      },
      disabled: function () {
        return this.native.disabled;
      },
      checked: function () {
        return this.native.checked;
      },
      selected: function () {
        return this.native.selected;
      },
      readOnly: function () {
        return this.native.readOnly;
      },
      required: function () {
        return this.native.required;
      },
      draggable: function () {
        return this.native.draggable;
      },
      title: function () {
        return this.native.title;
      },
      alt: function () {
        return this.native.alt;
      },
      name: function () {
        return this.native.name;
      },
      type: function () {
        return this.native.type;
      },
      value: function () {
        return this.native.value;
      },
      placeholder: function () {
        return this.native.placeholder;
      },
      tabIndex: function () {
        return this.native.tabIndex;
      },
      offsetWidth: function () {
        return this.native.offsetWidth;
      },
      offsetHeight: function () {
        return this.native.offsetHeight;
      },
      offsetTop: function () {
        return this.native.offsetTop;
      },
      offsetLeft: function () {
        return this.native.offsetLeft;
      },
      clientWidth: function () {
        return this.native.clientWidth;
      },
      clientHeight: function () {
        return this.native.clientHeight;
      },
      scrollWidth: function () {
        return this.native.scrollWidth;
      },
      scrollHeight: function () {
        return this.native.scrollHeight;
      },
      scrollTop: function () {
        return this.native.scrollTop;
      },
      scrollLeft: function () {
        return this.native.scrollLeft;
      },
      currentTime: function () {
        return this.native.currentTime || 0;
      },
      duration: function () {
        return this.native.duration || 0;
      },
      paused: function () {
        return this.native.paused !== void 0 ? this.native.paused : !0;
      },
      ended: function () {
        return this.native.ended || !1;
      },
      muted: function () {
        return this.native.muted || !1;
      },
      volume: function () {
        return this.native.volume !== void 0 ? this.native.volume : 1;
      },
      loop: function () {
        return this.native.loop || !1;
      },
      autoplay: function () {
        return this.native.autoplay || !1;
      },
      controls: function () {
        return this.native.controls || !1;
      },
      playbackRate: function () {
        return this.native.playbackRate !== void 0
          ? this.native.playbackRate
          : 1;
      },
      defaultPlaybackRate: function () {
        return this.native.defaultPlaybackRate !== void 0
          ? this.native.defaultPlaybackRate
          : 1;
      },
      currentSrc: function () {
        return this.native.currentSrc || "";
      },
      readyState: function () {
        return this.native.readyState || 0;
      },
      networkState: function () {
        return this.native.networkState || 0;
      },
      seeking: function () {
        return this.native.seeking || !1;
      },
      preload: function () {
        return this.native.preload || "auto";
      },
      poster: function () {
        return this.native.poster || "";
      },
      videoWidth: function () {
        return this.native.videoWidth || 0;
      },
      videoHeight: function () {
        return this.native.videoHeight || 0;
      },
    },
    _0x27 = {
      innerText: function (_0x2a) {
        if (this.native.isSameNode(_0x6)) throw new Error("No access.");
        if (this.native.tagName === "SCRIPT" || this.native.tagName === "STYLE")
          throw new Error(
            "You're not allowed to set innerText on script or style elements.",
          );
        this.native.innerText = _0x2a.slice(0, 1000);
      },
      innerHTML: function (_0x2a) {
        throw new Error(
          "innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.",
        );
      },
      id: function (_0x2a) {
        if (this.native.isSameNode(_0x6)) throw new Error("No access.");
        ((this.native.id = _0x2a),
          _0x3.settings.logCalls &&
            console.log(_0x7.domain, "set id", this, _0x2a));
      },
      className: function (_0x2a) {
        if (this.native.isSameNode(_0x6)) throw new Error("No access.");
        ((this.native.className = _0x2a),
          _0x3.settings.logCalls &&
            console.log(_0x7.domain, "set className", this, _0x2a));
      },
      src: function (_0x2a) {
        ((this.native.src = _0x11(_0x2a)),
          _0x3.settings.logCalls &&
            console.log(_0x7.domain, "set src", this, _0x2a));
      },
      href: function (_0x2a) {
        ((this.native.href =
          this.native.tagName === "A" ? _0x2a : _0x11(_0x2a)),
          _0x3.settings.logCalls &&
            console.log(_0x7.domain, "set href", this, _0x2a));
      },
      hidden: function (_0x2a) {
        if (this.native.isSameNode(_0x6)) throw new Error("No access.");
        this.native.hidden = !!_0x2a;
      },
      disabled: function (_0x2a) {
        if (this.native.isSameNode(_0x6)) throw new Error("No access.");
        this.native.disabled = !!_0x2a;
      },
      checked: function (_0x2a) {
        this.native.checked = !!_0x2a;
      },
      selected: function (_0x2a) {
        this.native.selected = !!_0x2a;
      },
      readOnly: function (_0x2a) {
        this.native.readOnly = !!_0x2a;
      },
      required: function (_0x2a) {
        this.native.required = !!_0x2a;
      },
      draggable: function (_0x2a) {
        this.native.draggable = !!_0x2a;
      },
      title: function (_0x2a) {
        this.native.title = String(_0x2a).slice(0, 1000);
      },
      alt: function (_0x2a) {
        this.native.alt = String(_0x2a).slice(0, 1000);
      },
      name: function (_0x2a) {
        this.native.name = String(_0x2a).slice(0, 100);
      },
      type: function (_0x2a) {
        this.native.type = String(_0x2a).slice(0, 50);
      },
      value: function (_0x2a) {
        this.native.value = String(_0x2a).slice(0, 10000);
      },
      placeholder: function (_0x2a) {
        this.native.placeholder = String(_0x2a).slice(0, 500);
      },
      tabIndex: function (_0x2a) {
        this.native.tabIndex = parseInt(_0x2a) || 0;
      },
      scrollTop: function (_0x2a) {
        this.native.scrollTop = _0x2a;
      },
      scrollLeft: function (_0x2a) {
        this.native.scrollLeft = _0x2a;
      },
      currentTime: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.currentTime = Math.max(0, Number(_0x2a) || 0));
      },
      muted: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.muted = !!_0x2a);
      },
      volume: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.volume = Math.max(0, Math.min(1, Number(_0x2a) || 0)));
      },
      loop: function (_0x2a) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!_0x2a);
      },
      autoplay: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.autoplay = !!_0x2a);
      },
      controls: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.controls = !!_0x2a);
      },
      playbackRate: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.playbackRate = Math.max(
            0.25,
            Math.min(4, Number(_0x2a) || 1),
          ));
      },
      defaultPlaybackRate: function (_0x2a) {
        this.native instanceof HTMLMediaElement &&
          (this.native.defaultPlaybackRate = Math.max(
            0.25,
            Math.min(4, Number(_0x2a) || 1),
          ));
      },
      preload: function (_0x2a) {
        if (this.native instanceof HTMLMediaElement) {
          let _0x3d = ["none", "metadata", "auto"];
          this.native.preload = _0x3d.includes(_0x2a) ? _0x2a : "auto";
        }
      },
      poster: function (_0x2a) {
        this.native instanceof HTMLVideoElement &&
          (this.native.poster = _0x11(_0x2a));
      },
    };
  for (let [_0x2a, _0x3d] of Object.entries(_0x26)) {
    let _0x3e = { get: _0x2.createNativeFunction(_0x3d) };
    (_0x27[_0x2a] && (_0x3e.set = _0x2.createNativeFunction(_0x27[_0x2a])),
      _0x2.setProperty(_0x23, _0x2a, Interpreter.VALUE_IN_DESCRIPTOR, _0x3e));
  }
  let _0x28 = {
    getAttributeNames: function () {
      let _0x2a = Array.from(this.native.getAttributeNames()),
        _0x3d = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x3e = 0; _0x3e < _0x2a.length; _0x3e++)
        _0x2.setProperty(_0x3d, _0x3e, _0x2a[_0x3e]);
      return (_0x2.setProperty(_0x3d, "length", _0x2a.length), _0x3d);
    },
    getAttribute: function (_0x2a) {
      return this.native.getAttribute(_0x2a);
    },
    setAttribute: function (_0x2a, _0x3d) {
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      if (
        ((_0x2a = String(_0x2a).toLowerCase()),
        (_0x3d = String(_0x3d)),
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "setAttribute", this, _0x2a, _0x3d),
        _0x2a === "style" &&
          _0x3d.includes("animation-play-state") &&
          _0x3d.includes("!important"))
      )
        throw new Error("Cannot set animation-play-state to !important");
      if (
        _0x2a === "src" ||
        _0x2a === "poster" ||
        _0x2a === "data" ||
        (this.native.tagName !== "A" && _0x2a === "href")
      ) {
        this.native.setAttribute(_0x2a, _0x11(_0x3d));
        return;
      }
      if (_0x2a === "autoplay") throw new Error("autoplay is not allowed");
      if (_0x2a === "srcset") throw new Error("srcset is not allowed");
      if (_0x2a === "action" || _0x2a === "formaction")
        throw new Error("action and formaction are not allowed");
      if (_0x2a.startsWith("on"))
        throw new Error(
          "Event handlers are not allowed. Use addEventListener instead.",
        );
      if (_0x2a === "width" || _0x2a === "height") {
        let _0x3e = parseFloat(_0x3d);
        if (isNaN(_0x3e) || _0x3e < 0 || _0x3e > 4096)
          throw new Error("Invalid width or height");
      }
      this.native.setAttribute(_0x2a, _0x3d);
    },
    focus: function () {
      this.native.focus();
    },
    blur: function () {
      this.native.blur();
    },
    click: function () {
      this.native.click();
    },
    scrollIntoView: function (_0x2a) {
      _0x2a && typeof _0x2a == "object"
        ? this.native.scrollIntoView(_0x2.pseudoToNative(_0x2a))
        : this.native.scrollIntoView(_0x2a);
    },
    scrollTo: function (_0x2a, _0x3d) {
      this.native.scrollTo(_0x2a, _0x3d);
    },
    scrollBy: function (_0x2a, _0x3d) {
      this.native.scrollBy(_0x2a, _0x3d);
    },
    removeAttribute: function (_0x2a) {
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      if (((_0x2a = String(_0x2a).toLowerCase()), _0x2a === "target"))
        throw new Error("removing target is not allowed");
      (_0x3.settings.logCalls &&
        console.log(_0x7.domain, "removeAttribute", this, _0x2a),
        this.native.removeAttribute(_0x2a));
    },
    hasAttribute: function (_0x2a) {
      return this.native.hasAttribute(_0x2a);
    },
    querySelector: function (_0x2a) {
      let _0x3d = this.native.querySelector(_0x2a);
      return _0x16(_0x18(_0x3d));
    },
    querySelectorAll: function (_0x2a) {
      let _0x3d = Array.from(this.native.querySelectorAll(_0x2a)).filter(_0x17);
      return _0x1c(_0x3d);
    },
    getElementsByClassName: function (_0x2a) {
      let _0x3d = Array.from(this.native.getElementsByClassName(_0x2a)).filter(
        _0x17,
      );
      return _0x1c(_0x3d);
    },
    getElementsByTagName: function (_0x2a) {
      let _0x3d = Array.from(this.native.getElementsByTagName(_0x2a)).filter(
        _0x17,
      );
      return _0x1c(_0x3d);
    },
    closest: function (_0x2a) {
      let _0x3d = this.native.closest(_0x2a);
      for (; _0x3d && !_0x6.contains(_0x3d); ) _0x3d = null;
      return _0x16(_0x3d);
    },
    matches: function (_0x2a) {
      return this.native.matches(_0x2a);
    },
    classList: function () {
      if (this.native.isSameNode(_0x6)) throw new Error("No access.");
      let _0x2a = this.native.classList;
      return _0x2.nativeToPseudo({
        add: (..._0x3d) => _0x2a.add(..._0x3d),
        remove: (..._0x3d) => _0x2a.remove(..._0x3d),
        toggle: (_0x3d, _0x3e) => _0x2a.toggle(_0x3d, _0x3e),
        contains: (_0x3d) => _0x2a.contains(_0x3d),
        replace: (_0x3d, _0x3e) => _0x2a.replace(_0x3d, _0x3e),
      });
    },
    getBoundingClientRect: function () {
      let _0x2a = this.native.getBoundingClientRect();
      return _0x2.nativeToPseudo({
        x: _0x2a.x,
        y: _0x2a.y,
        width: _0x2a.width,
        height: _0x2a.height,
        top: _0x2a.top,
        right: _0x2a.right,
        bottom: _0x2a.bottom,
        left: _0x2a.left,
      });
    },
    play: function () {
      if (!(this.native instanceof HTMLMediaElement))
        return _0x2.createObjectProto(_0x2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error(
          "Element is not connected to the DOM. Append it to the DOM before playing.",
        );
      let _0x2a = _0x2.createObjectProto(_0x2.OBJECT_PROTO),
        _0x3d = this,
        _0x3e = null,
        _0x3f = null;
      return (
        _0x3.settings.logCalls && console.log(_0x7.domain, "play", this),
        _0x2.setProperty(
          _0x2a,
          "then",
          _0x2.createNativeFunction(function (_0x40) {
            return ((_0x3e = _0x40), _0x2a);
          }),
        ),
        _0x2.setProperty(
          _0x2a,
          "catch",
          _0x2.createNativeFunction(function (_0x40) {
            return ((_0x3f = _0x40), _0x2a);
          }),
        ),
        _0x3d.native
          .play()
          .then(() => {
            _0x3e && _0x12(_0x3e, _0x2.nativeToPseudo(void 0));
          })
          .catch((_0x40) => {
            _0x3f &&
              _0x12(
                _0x3f,
                _0x2.nativeToPseudo({
                  message: _0x40.message,
                  name: _0x40.name,
                }),
              );
          }),
        _0x2a
      );
    },
    pause: function () {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function () {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function (_0x2a) {
      return this.native instanceof HTMLMediaElement
        ? this.native.canPlayType(String(_0x2a || ""))
        : "";
    },
    fastSeek: function (_0x2a) {
      this.native instanceof HTMLMediaElement &&
        typeof this.native.fastSeek == "function" &&
        this.native.fastSeek(Math.max(0, Number(_0x2a) || 0));
    },
    getAnimations: function (_0x2a) {
      if (!this.native.getAnimations) return _0x1c([]);
      let _0x3d = _0x2a
          ? { subtree: !!_0x2.pseudoToNative(_0x2a)?.subtree }
          : {},
        _0x3e = this.native.getAnimations(_0x3d),
        _0x3f = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x40 = 0; _0x40 < _0x3e.length; _0x40++)
        _0x3f.properties[_0x40] = _0xc(_0x3e[_0x40]);
      return (_0x2.setProperty(_0x3f, "length", _0x3e.length), _0x3f);
    },
  };
  for (let [_0x2a, _0x3d] of Object.entries(_0x28))
    _0x2.setProperty(_0x23, _0x2a, _0x2.createNativeFunction(_0x3d));
  function _0xc(_0x2a) {
    let _0x3d = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
    return (
      _0x2.setProperty(_0x3d, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.id;
        }),
      }),
      _0x2.setProperty(_0x3d, "playState", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.playState;
        }),
      }),
      _0x2.setProperty(_0x3d, "pending", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.pending;
        }),
      }),
      _0x2.setProperty(_0x3d, "replaceState", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.replaceState;
        }),
      }),
      _0x2.setProperty(_0x3d, "currentTime", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.currentTime;
        }),
        set: _0x2.createNativeFunction(function (_0x3e) {
          _0x2a.currentTime = _0x3e;
        }),
      }),
      _0x2.setProperty(_0x3d, "playbackRate", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.playbackRate;
        }),
        set: _0x2.createNativeFunction(function (_0x3e) {
          _0x2a.playbackRate = Math.max(-10, Math.min(10, Number(_0x3e) || 1));
        }),
      }),
      _0x2.setProperty(_0x3d, "startTime", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function () {
          return _0x2a.startTime;
        }),
        set: _0x2.createNativeFunction(function (_0x3e) {
          _0x2a.startTime = _0x3e;
        }),
      }),
      _0x2.setProperty(
        _0x3d,
        "play",
        _0x2.createNativeFunction(function () {
          _0x2a.play();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "pause",
        _0x2.createNativeFunction(function () {
          _0x2a.pause();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "cancel",
        _0x2.createNativeFunction(function () {
          _0x2a.cancel();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "finish",
        _0x2.createNativeFunction(function () {
          _0x2a.finish();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "reverse",
        _0x2.createNativeFunction(function () {
          _0x2a.reverse();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "updatePlaybackRate",
        _0x2.createNativeFunction(function (_0x3e) {
          _0x2a.updatePlaybackRate(
            Math.max(-10, Math.min(10, Number(_0x3e) || 1)),
          );
        }),
      ),
      _0x3d
    );
  }
  function _0xf(_0x2a) {
    let _0x3d = _0x2.createObjectProto(_0x2.OBJECT_PROTO),
      _0x3e = _0x2a ? _0x2a.length : 0;
    return (
      _0x2.setProperty(_0x3d, "length", _0x3e),
      _0x2.setProperty(
        _0x3d,
        "start",
        _0x2.createNativeFunction(function (_0x3f) {
          if (!_0x2a || _0x3f < 0 || _0x3f >= _0x2a.length)
            throw new Error("Index out of bounds");
          return _0x2a.start(_0x3f);
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "end",
        _0x2.createNativeFunction(function (_0x3f) {
          if (!_0x2a || _0x3f < 0 || _0x3f >= _0x2a.length)
            throw new Error("Index out of bounds");
          return _0x2a.end(_0x3f);
        }),
      ),
      _0x3d
    );
  }
  (_0x2.setProperty(_0x23, "buffered", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function () {
      return this.native instanceof HTMLMediaElement
        ? _0xf(this.native.buffered)
        : _0xf(null);
    }),
  }),
    _0x2.setProperty(_0x23, "played", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native instanceof HTMLMediaElement
          ? _0xf(this.native.played)
          : _0xf(null);
      }),
    }),
    _0x2.setProperty(_0x23, "seekable", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return this.native instanceof HTMLMediaElement
          ? _0xf(this.native.seekable)
          : _0xf(null);
      }),
    }),
    _0x2.setProperty(_0x23, "classList", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0x2a = this.native.classList,
          _0x3d = _0x2.nativeToPseudo({});
        return (
          _0x2.setProperty(
            _0x3d,
            "add",
            _0x2.createNativeFunction(function (..._0x3e) {
              if (this.native.isSameNode(_0x6)) throw new Error("No access.");
              _0x2a.add(..._0x3e);
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "remove",
            _0x2.createNativeFunction(function (..._0x3e) {
              if (this.native.isSameNode(_0x6)) throw new Error("No access.");
              _0x2a.remove(..._0x3e);
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "toggle",
            _0x2.createNativeFunction(function (_0x3e, _0x3f) {
              if (this.native.isSameNode(_0x6)) throw new Error("No access.");
              return _0x2a.toggle(_0x3e, _0x3f);
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "contains",
            _0x2.createNativeFunction(function (_0x3e) {
              return _0x2a.contains(_0x3e);
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "replace",
            _0x2.createNativeFunction(function (_0x3e, _0x3f) {
              if (this.native.isSameNode(_0x6)) throw new Error("No access.");
              return _0x2a.replace(_0x3e, _0x3f);
            }),
          ),
          _0x3d
        );
      }),
    }),
    _0x2.setProperty(_0x23, "style", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0x2a = this.native.style,
          _0x3d = _0x2.nativeToPseudo({}),
          _0x3e = [
            "color",
            "backgroundColor",
            "width",
            "height",
            "margin",
            "padding",
            "border",
            "display",
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "fontSize",
            "fontFamily",
            "fontWeight",
            "textAlign",
            "lineHeight",
            "opacity",
            "visibility",
            "overflow",
            "zIndex",
            "transform",
            "transition",
            "animation",
            "flexDirection",
            "justifyContent",
            "alignItems",
            "gap",
            "gridTemplateColumns",
            "gridTemplateRows",
          ];
        for (let _0x3f of _0x3e)
          _0x2.setProperty(_0x3d, _0x3f, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return _0x2a[_0x3f];
            }),
            set: _0x2.createNativeFunction(function (_0x40) {
              ((_0x2a[_0x3f] = _0x40),
                _0x3.settings.logCalls &&
                  console.log(_0x7.domain, "set style", this, _0x3f, _0x40));
            }),
          });
        return (
          _0x2.setProperty(_0x3d, "cssText", Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function () {
              return _0x2a.cssText;
            }),
            set: _0x2.createNativeFunction(function (_0x3f) {
              ((_0x2a.cssText = _0x3f),
                _0x3.settings.logCalls &&
                  console.log(_0x7.domain, "set cssText", this, _0x3f));
            }),
          }),
          _0x2.setProperty(
            _0x3d,
            "setProperty",
            _0x2.createNativeFunction(function (_0x3f, _0x40, _0x41) {
              if (this.native?.isSameNode(_0x6)) throw new Error("No access.");
              (_0x2a.setProperty(_0x3f, _0x40, _0x41),
                _0x3.settings.logCalls &&
                  console.log(
                    _0x7.domain,
                    "setProperty",
                    this,
                    _0x3f,
                    _0x40,
                    _0x41,
                  ));
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "getPropertyValue",
            _0x2.createNativeFunction(function (_0x3f) {
              return _0x2a.getPropertyValue(_0x3f);
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "removeProperty",
            _0x2.createNativeFunction(function (_0x3f) {
              if (this.native?.isSameNode(_0x6)) throw new Error("No access.");
              return (
                _0x3.settings.logCalls &&
                  console.log(_0x7.domain, "removeProperty", this, _0x3f),
                _0x2a.removeProperty(_0x3f)
              );
            }),
          ),
          _0x3d
        );
      }),
    }),
    _0x2.setProperty(_0x23, "dataset", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0x2a = this.native.dataset,
          _0x3d = _0x2.nativeToPseudo({});
        for (let _0x3e in _0x2a) _0x2.setProperty(_0x3d, _0x3e, _0x2a[_0x3e]);
        return (
          _0x2.setProperty(
            _0x3d,
            "get",
            _0x2.createNativeFunction(function (_0x3e) {
              return _0x2a[_0x3e];
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "set",
            _0x2.createNativeFunction(function (_0x3e, _0x3f) {
              ((_0x2a[_0x3e] = String(_0x3f).slice(0, 1000)),
                _0x3.settings.logCalls &&
                  console.log(_0x7.domain, "set dataset", this, _0x3e, _0x3f));
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "delete",
            _0x2.createNativeFunction(function (_0x3e) {
              (delete _0x2a[_0x3e],
                _0x3.settings.logCalls &&
                  console.log(_0x7.domain, "delete dataset", this, _0x3e));
            }),
          ),
          _0x2.setProperty(
            _0x3d,
            "has",
            _0x2.createNativeFunction(function (_0x3e) {
              return _0x3e in _0x2a;
            }),
          ),
          _0x3d
        );
      }),
    }),
    _0x2.setProperty(_0x23, "offsetParent", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return _0x16(_0x18(this.native.offsetParent));
      }),
    }));
  let _0x10 = [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "mouseover",
    "mouseout",
    "keydown",
    "keyup",
    "keypress",
    "focus",
    "blur",
    "focusin",
    "focusout",
    "input",
    "change",
    "submit",
    "reset",
    "touchstart",
    "touchend",
    "touchmove",
    "touchcancel",
    "wheel",
    "scroll",
    "resize",
    "dragstart",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "drop",
    "animationstart",
    "animationend",
    "animationiteration",
    "transitionstart",
    "transitionend",
    "transitioncancel",
    "contextmenu",
    "pointerdown",
    "pointerup",
    "pointermove",
    "pointerenter",
    "pointerleave",
    "pointerover",
    "pointerout",
    "play",
    "pause",
    "playing",
    "waiting",
    "seeking",
    "seeked",
    "ended",
    "loadstart",
    "loadeddata",
    "loadedmetadata",
    "progress",
    "canplay",
    "canplaythrough",
    "timeupdate",
    "durationchange",
    "volumechange",
    "ratechange",
    "stalled",
    "suspend",
    "emptied",
    "abort",
    "error",
    "load",
  ];
  function _0x19(_0x2a) {
    let _0x3d = _0x2.nativeToPseudo({}),
      _0x3e = [
        "type",
        "bubbles",
        "cancelable",
        "defaultPrevented",
        "timeStamp",
      ];
    for (let _0x3f of _0x3e) _0x2.setProperty(_0x3d, _0x3f, _0x2a[_0x3f]);
    if (_0x2a instanceof MouseEvent || _0x2a instanceof PointerEvent) {
      let _0x3f = [
        "clientX",
        "clientY",
        "pageX",
        "pageY",
        "screenX",
        "screenY",
        "offsetX",
        "offsetY",
        "movementX",
        "movementY",
        "button",
        "buttons",
        "altKey",
        "ctrlKey",
        "shiftKey",
        "metaKey",
      ];
      for (let _0x40 of _0x3f) _0x2.setProperty(_0x3d, _0x40, _0x2a[_0x40]);
    }
    if (_0x2a instanceof KeyboardEvent) {
      let _0x3f = [
        "key",
        "code",
        "keyCode",
        "charCode",
        "altKey",
        "ctrlKey",
        "shiftKey",
        "metaKey",
        "repeat",
      ];
      for (let _0x40 of _0x3f) _0x2.setProperty(_0x3d, _0x40, _0x2a[_0x40]);
    }
    return (
      typeof TouchEvent == "function" &&
        _0x2a instanceof TouchEvent &&
        (_0x2.setProperty(
          _0x3d,
          "touches",
          _0x2.nativeToPseudo({ length: _0x2a.touches.length }),
        ),
        _0x2.setProperty(
          _0x3d,
          "changedTouches",
          _0x2.nativeToPseudo({ length: _0x2a.changedTouches.length }),
        )),
      typeof WheelEvent == "function" &&
        _0x2a instanceof WheelEvent &&
        (_0x2.setProperty(_0x3d, "deltaX", _0x2a.deltaX),
        _0x2.setProperty(_0x3d, "deltaY", _0x2a.deltaY),
        _0x2.setProperty(_0x3d, "deltaZ", _0x2a.deltaZ),
        _0x2.setProperty(_0x3d, "deltaMode", _0x2a.deltaMode)),
      _0x2a.target &&
        _0x17(_0x2a.target) &&
        _0x2.setProperty(_0x3d, "target", _0x16(_0x2a.target)),
      _0x2a.currentTarget &&
        _0x17(_0x2a.currentTarget) &&
        _0x2.setProperty(_0x3d, "currentTarget", _0x16(_0x2a.currentTarget)),
      _0x2.setProperty(
        _0x3d,
        "preventDefault",
        _0x2.createNativeFunction(function () {
          _0x2a.preventDefault();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "stopPropagation",
        _0x2.createNativeFunction(function () {
          _0x2a.stopPropagation();
        }),
      ),
      _0x2.setProperty(
        _0x3d,
        "stopImmediatePropagation",
        _0x2.createNativeFunction(function () {
          _0x2a.stopImmediatePropagation();
        }),
      ),
      _0x3d
    );
  }
  (_0x2.setProperty(
    _0x23,
    "addEventListener",
    _0x2.createNativeFunction(function (_0x2a, _0x3d) {
      if (
        !_0x2a ||
        typeof _0x2a != "string" ||
        !_0x3d ||
        typeof _0x3d != "object"
      )
        return;
      if (((_0x2a = _0x2a.toLowerCase()), !_0x10.includes(_0x2a)))
        throw new Error(`Event type "${_0x2a}" is not allowed`);
      _0x3.settings.logCalls &&
        console.log(_0x7.domain, "addEventListener", this, _0x2a, _0x3d);
      let _0x3e = this.native;
      _0xb.has(_0x3e) || _0xb.set(_0x3e, new Map());
      let _0x3f = _0xb.get(_0x3e);
      _0x3f.has(_0x2a) || _0x3f.set(_0x2a, []);
      let _0x40 = _0x3f.get(_0x2a);
      if (_0x40.length >= _0xa)
        throw new Error(
          `Maximum listeners (${_0xa}) reached for event "${_0x2a}"`,
        );
      if (_0x40.some((_0x42) => _0x42.pseudo === _0x3d)) return;
      let _0x41 = function (_0x42) {
        let _0x43 = _0x19(_0x42);
        _0x12(_0x3d, _0x43);
      };
      (_0x40.push({
        pseudo: _0x3d,
        native: _0x41,
      }),
        _0x3e.addEventListener(_0x2a, _0x41));
    }),
  ),
    _0x2.setProperty(
      _0x23,
      "removeEventListener",
      _0x2.createNativeFunction(function (_0x2a, _0x3d) {
        if (
          !_0x2a ||
          typeof _0x2a != "string" ||
          !_0x3d ||
          typeof _0x3d != "object"
        )
          return;
        (_0x3.settings.logCalls &&
          console.log(_0x7.domain, "removeEventListener", this, _0x2a, _0x3d),
          (_0x2a = _0x2a.toLowerCase()));
        let _0x3e = this.native;
        if (!_0xb.has(_0x3e)) return;
        let _0x3f = _0xb.get(_0x3e);
        if (!_0x3f.has(_0x2a)) return;
        let _0x40 = _0x3f.get(_0x2a),
          _0x41 = _0x40.findIndex((_0x42) => _0x42.pseudo === _0x3d);
        _0x41 !== -1 &&
          (_0x3e.removeEventListener(_0x2a, _0x40[_0x41].native),
          _0x40.splice(_0x41, 1));
      }),
    ));
  let _0x1a = [
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "mouseover",
    "mouseout",
    "keydown",
    "keyup",
    "keypress",
    "focus",
    "blur",
    "input",
    "change",
    "submit",
    "touchstart",
    "touchend",
    "touchmove",
    "wheel",
    "scroll",
    "contextmenu",
    "play",
    "pause",
    "playing",
    "waiting",
    "seeking",
    "seeked",
    "ended",
    "loadstart",
    "loadeddata",
    "loadedmetadata",
    "progress",
    "canplay",
    "canplaythrough",
    "timeupdate",
    "durationchange",
    "volumechange",
    "ratechange",
    "stalled",
    "suspend",
    "emptied",
    "abort",
    "error",
    "load",
  ];
  for (let _0x2a of _0x1a) {
    let _0x3d = "on" + _0x2a;
    _0x2.setProperty(_0x23, _0x3d, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        let _0x3e = this.native;
        if (!_0xb.has(_0x3e)) return null;
        let _0x3f = _0xb.get(_0x3e),
          _0x40 = `__${_0x3d}`;
        return _0x3f.get(_0x40) || null;
      }),
      set: _0x2.createNativeFunction(function (_0x3e) {
        let _0x3f = this.native;
        _0xb.has(_0x3f) || _0xb.set(_0x3f, new Map());
        let _0x40 = _0xb.get(_0x3f),
          _0x41 = `__${_0x3d}`;
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "setOn" + _0x2a, this, _0x3e);
        let _0x42 = _0x40.get(_0x41 + "_native");
        if (
          (_0x42 &&
            (_0x3f.removeEventListener(_0x2a, _0x42),
            _0x40.delete(_0x41),
            _0x40.delete(_0x41 + "_native")),
          _0x3e && typeof _0x3e == "object")
        ) {
          let _0x43 = function (_0x44) {
            let _0x45 = _0x19(_0x44);
            _0x12(_0x3e, _0x45);
          };
          (_0x3f.addEventListener(_0x2a, _0x43),
            _0x40.set(_0x41, _0x3e),
            _0x40.set(_0x41 + "_native", _0x43));
        }
      }),
    });
  }
  (_0x4(_0x2, _0x5, _0x7).extendElement(_0x23, _0x16),
    _0x2b(_0x2, _0x5, _0x7),
    _0x3a(_0x2, _0x5, _0x7.domain),
    _0x3b(_0x2, _0x5, _0x6, _0x7));
  let _0x24 = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x5, "document", _0x24);
  let _0x25 = {
    getElementById: function (_0x2a) {
      let _0x3d = _0x6.querySelector(`#${CSS.escape(_0x2a)}`);
      return _0x16(_0x3d);
    },
    getElementsByClassName: function (_0x2a) {
      let _0x3d = Array.from(_0x6.getElementsByClassName(_0x2a));
      return _0x1c(_0x3d);
    },
    getElementsByTagName: function (_0x2a) {
      let _0x3d = Array.from(_0x6.getElementsByTagName(_0x2a));
      return _0x1c(_0x3d);
    },
    querySelector: function (_0x2a) {
      return _0x16(_0x6.querySelector(_0x2a));
    },
    querySelectorAll: function (_0x2a) {
      let _0x3d = Array.from(_0x6.querySelectorAll(_0x2a));
      return _0x1c(_0x3d);
    },
    createElement: function (_0x2a) {
      if (typeof _0x2a != "string") throw new Error("Invalid tag");
      if (
        ((_0x2a = _0x2a.toLowerCase().trim()),
        [
          "script",
          "style",
          "iframe",
          "embed",
          "object",
          "frame",
          "frameset",
          "layer",
          "ilayer",
          "applet",
          "meta",
          "base",
          "link",
          "title",
          "source",
          "geolocation",
          "permission",
        ].includes(_0x2a))
      )
        throw new Error("Creating " + _0x2a + " elements is not allowed");
      return (
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "createElement", this, _0x2a),
        _0x16(document.createElement(_0x2a))
      );
    },
    createTextNode: function (_0x2a) {
      return (
        _0x3.settings.logCalls &&
          console.log(_0x7.domain, "createTextNode", this, _0x2a),
        _0x16(document.createTextNode(_0x2a))
      );
    },
  };
  for (let [_0x2a, _0x3d] of Object.entries(_0x25))
    _0x2.setProperty(_0x24, _0x2a, _0x2.createNativeFunction(_0x3d));
  (_0x2.setProperty(_0x24, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function () {
      return (
        _0x3.settings.logCalls && console.log(_0x7.domain, "get body", this),
        _0x16(_0x6)
      );
    }),
  }),
    _0x2.setProperty(
      _0x24,
      "documentElement",
      Interpreter.VALUE_IN_DESCRIPTOR,
      {
        get: _0x2.createNativeFunction(function () {
          return (
            _0x3.settings.logCalls &&
              console.log(_0x7.domain, "get documentElement", this),
            _0x16(_0x6)
          );
        }),
      },
    ));
  let _0x29 = _0x2.nativeToPseudo({});
  (_0x2.setProperty(_0x5, "location", _0x29),
    _0x2.setProperty(_0x29, "href", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function () {
        return `/t/${_0x7.domain}${_0x7.path}`;
      }),
      set: _0x2.createNativeFunction(function (_0x2a) {
        if (typeof _0x2a == "string") {
          _0x3.settings.logCalls &&
            console.log(_0x7.domain, "set href", this, _0x2a);
          try {
            let _0x3d = new URL(_0x2a, `http://${_0x7.domain}`);
            if (_0x3d.hostname && _0x3d.hostname !== location.hostname)
              throw new Error("External URLs are not allowed");
            let _0x3e = _0x3d.pathname + _0x3d.search + _0x3d.hash;
            if (
              (_0x3e.startsWith(`/t/${_0x7.domain}/`)
                ? (_0x3e = _0x3e.substring(`/t/${_0x7.domain}`.length))
                : _0x3e === `/t/${_0x7.domain}` && (_0x3e = "/"),
              _0x3e.startsWith("/") || (_0x3e = "/" + _0x3e),
              _0x3e.endsWith(".html") || _0x3e === "/" || _0x3e === "")
            )
              (_0x7.fetchContent(_0x3e || "/index.html"), _0x7.setActive(!0));
            else throw new Error("Only HTML files can be navigated to");
          } catch (_0x3d) {
            if (
              _0x3d.message.includes("not allowed") ||
              _0x3d.message.includes("Only HTML")
            )
              throw _0x3d;
            let _0x3e = _0x2a;
            if (
              (_0x3e.startsWith("/") || (_0x3e = "/" + _0x3e),
              _0x3e.endsWith(".html") || _0x3e === "/" || _0x3e === "")
            )
              _0x7
                .fetchContent(_0x3e || "/index.html")
                .then(() => _0x7.setActive(!0));
            else throw new Error("Only HTML files can be navigated to");
          }
        }
      }),
    }),
    _0x2.setProperty(
      _0x29,
      "reload",
      _0x2.createNativeFunction(function () {
        _0x7.fetchContent(_0x7.path, !0).then(() => _0x7.setActive(!0));
      }),
    ));
}
var _0x46 = {
    console: {
      log: function (..._0x2) {
        this.logCount++ > 1000 || console.log(`[${this.tile.domain}]`, ..._0x2);
      },
      error: function (..._0x2) {
        this.logCount++ > 1000 ||
          console.error(`[${this.tile.domain}]`, ..._0x2);
      },
      warn: function (..._0x2) {
        this.logCount++ > 1000 ||
          console.warn(`[${this.tile.domain}]`, ..._0x2);
      },
    },
    alert(_0x2) {
      this.alertCount++ > 10 || alert(`[${this.tile.domain}] ${_0x2}`);
    },
    prompt(_0x2) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${this.tile.domain}] ${_0x2}`);
    },
    confirm(_0x2) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${this.tile.domain}] ${_0x2}`);
    },
    atob(_0x2) {
      return atob(_0x2);
    },
    btoa(_0x2) {
      return btoa(_0x2);
    },
  },
  _0x47 = class {
    constructor(_0x5) {
      ((this.running = !1),
        (this.logCount = 0),
        (this.alertCount = 0),
        (this.tile = _0x5),
        (this.waitUntil = null),
        (this.index = 0),
        (this.sizeLimitReached = !1),
        (this.interpreter = new Interpreter("", (_0x6, _0x7) => {
          let _0x8 = (_0x9, _0xa) => {
            for (let [_0xb, _0xd] of Object.entries(_0x9))
              if (typeof _0xd == "function")
                _0x6.setProperty(
                  _0xa,
                  _0xb,
                  _0x6.createNativeFunction(_0xd.bind(this)),
                );
              else if (typeof _0xd == "object" && _0xd !== null) {
                let _0xe = _0x6.nativeToPseudo({});
                (_0x8(_0xd, _0xe), _0x6.setProperty(_0xa, _0xb, _0xe));
              }
          };
          (_0x8(_0x46, _0x7),
            _0x3c(_0x6, _0x7, this.tile.contentElement, this.tile),
            _0x6.setProperty(
              _0x7,
              "embedded",
              _0x6.nativeToPseudo(!!this.tile.embed),
            ));
        })),
        (this.runInterval = null),
        (this.running = !1));
    }
    roughValueMemorySize() {
      let _0x5 = new Set(),
        _0x6 = [this.interpreter.getStateStack()],
        _0x7 = 0;
      for (; _0x6.length; ) {
        let _0x8 = _0x6.pop(),
          _0x9 = typeof _0x8;
        if (((_0x7 += 8), _0x9 === "string" && !_0x5.has(_0x8)))
          (_0x5.add(_0x8), (_0x7 += _0x8.length * 2));
        else if (_0x9 === "object" && _0x8 !== null && !_0x5.has(_0x8)) {
          _0x5.add(_0x8);
          try {
            _0x6.push(...Object.keys(_0x8), ...Object.values(_0x8));
          } catch {}
        }
      }
      return _0x7;
    }
    start() {
      this.running ||
        _0x3.settings.disableJS ||
        this.sizeLimitReached ||
        ((this.running = !0),
        (this.runInterval = setInterval(() => {
          if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
            for (let _0x5 = 0; _0x5 < 5000; _0x5++)
              try {
                if (!this.interpreter.step()) {
                  this.waitUntil = Date.now() + 50;
                  break;
                }
                if (this.index++ % 500 === 0) {
                  let _0x6 = this.roughValueMemorySize();
                  if (_0x6 > 3000000) {
                    ((this.sizeLimitReached = !0),
                      this.stop(),
                      console.log(
                        `[${this.tile.domain}] Memory size limit reached: ${_0x6} bytes`,
                      ));
                    break;
                  }
                }
              } catch (_0x6) {
                (console.error(_0x6), this.stop());
                break;
              }
        }, 0)));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), (this.running = !1));
    }
    runCode(_0x5) {
      _0x3.settings.disableJS || this.interpreter.appendCode(_0x5);
    }
  },
  _0x48 = _0x47;
var _0x49 = document.getElementById("plot"),
  _0x4a = new CSSStyleSheet(),
  _0x4b = () => {
    _0x4a.replaceSync(`
        .tile-body:not(.active) * {
            animation-play-state: paused !important;
        }
        .tile-body:not(.active) * {
            text-shadow: none !important;
            box-shadow: none !important;
            filter: none !important;
            backdrop-filter: none !important;
        }
    `);
  };
_0x4b();
var _0x4c = new CSSStyleSheet();
_0x4c.replaceSync(`
    .free {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .free > p {
        text-align: center;
        color: #777;
        user-select: none;
    }    
`);
var _0x4d = class _0x2 {
  constructor(_0x5) {
    ((this.x = _0x5.x ?? 0),
      (this.y = _0x5.y ?? 0),
      (this.domain = _0x5.domain),
      (this.free = !_0x5.domain),
      (this.locked = !1),
      (this.id = `${this.x},${this.y}`),
      (this.rendered = !1),
      (this.active = !1),
      (this.element = null),
      (this.contentElement = null),
      (this.path = _0x5.path || "/index.html"),
      (this.content = ""),
      (this.lastRender = 0),
      (this.preview = _0x5.nocontrols || !1),
      (this.embed = _0x5.embed || !1),
      (this.container = _0x5.container || _0x49),
      (this.interpreter = null),
      this.render());
  }
  static toTilePosition(_0x5, _0x6) {
    return {
      x: Math.floor(_0x5 / 250),
      y: Math.floor(_0x6 / 250),
    };
  }
  render() {
    if (this.rendered || this.element) return;
    ((this.lastRender = Date.now()), (this.rendered = !0));
    let _0x5 = document.createElement("div");
    (_0x5.classList.add("tile"),
      this.free && _0x5.classList.add("f"),
      this.preview
        ? (_0x5.style.cssText =
            "width: 100%; height: 100%; position: relative;")
        : ((_0x5.style.left = `${this.x * 250}px`),
          (_0x5.style.top = `${this.y * 250}px`),
          this.x % 10 === 0 && _0x5.classList.add("b-left"),
          this.y % 10 === 0 && _0x5.classList.add("b-top")),
      (this.element = _0x5));
    let _0x6 = document.createElement("div");
    (_0x6.classList.add("tile-content"),
      this.preview && (_0x6.style.cssText = "width: 100%; height: 100%;"),
      _0x6.addEventListener("click", async (_0x8) => {
        let _0x9 = _0x8
          .composedPath()
          ?.filter((_0xe) => _0xe instanceof Element);
        if (!_0x9) return;
        let _0xa = _0x9.findIndex((_0xe) => _0xe.isSameNode(_0x6));
        if (_0xa === -1) return;
        let _0xd = _0x9.slice(0, _0xa).find((_0xe) => _0xe.tagName === "A");
        if (_0xd) {
          _0x8.preventDefault();
          try {
            let _0xe = new URL(_0xd.href);
            if (_0xe.hostname !== location.hostname) {
              let _0x13 = document.createElement("a");
              ((_0x13.href = _0xd.href),
                (_0x13.target = "_blank"),
                _0x13.click());
              return;
            }
            let _0x12 = _0xe.pathname;
            if (
              (_0x12.startsWith(`/t/${this.domain}/`) ||
                (_0x12 = `/t/${this.domain}/${_0x12}`.replaceAll("//", "/")),
              _0x12.startsWith(`/t/${this.domain}`) &&
                (_0x12.endsWith(".html") ||
                  _0x12 === `/t/${this.domain}/` ||
                  _0x12 === `/t/${this.domain}`))
            )
              (await this.fetchContent(_0x12.replace(`/t/${this.domain}`, "")),
                this.setActive(!0));
            else {
              let _0x13 = document.createElement("a");
              ((_0x13.href = _0xd.href),
                (_0x13.target = "_blank"),
                _0x13.click());
            }
          } catch (_0xe) {
            console.error(_0xe);
          }
        }
      }),
      (this.shadow = _0x6.attachShadow({ mode: "open" })));
    let _0x7 = document.createElement("div");
    ((_0x7.className = "tile-body"),
      this.embed && _0x7.classList.add("embedded"),
      (_0x7.style =
        "width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;"),
      (this.contentElement = _0x7),
      (this.contentElement.innerHTML = this.preview
        ? "Loading preview..."
        : `Loading ${this.x}, ${this.y}...`),
      this.shadow.appendChild(_0x7),
      _0x5.appendChild(_0x6),
      (this.fonts = document.createElement("style")),
      _0x5.appendChild(this.fonts),
      this.fetchContent(this.path),
      this.container && this.container.appendChild(_0x5),
      _0x3.plot?.lockCache[this.x + "," + this.y] && this.setLocked(!0));
  }
  unrender() {
    !this.rendered ||
      !this.element ||
      (this.active && this.setActive(!1),
      this.element.remove(),
      (this.element = null),
      (this.rendered = !1),
      this.interpreter && (this.interpreter.stop(), (this.interpreter = null)));
  }
  async fetchContent(_0x5, _0x6 = !1) {
    _0x5.startsWith("/") || (_0x5 = "/" + _0x5);
    let _0x7 = this.free
      ? `<div class="free">
                <p>${this.locked ? "Locked tile" : "Free tile"} ${this.x}, ${this.y}</p>
            </div>`
      : this.path === _0x5 && this.content && !_0x6
        ? this.content
        : await fetch(`/t/${this.domain}${_0x5}`)
            .then((_0xa) => _0xa.text())
            .catch((_0xa) => "<p>Error loading tile</p>");
    (this.free
      ? (this.shadow.adoptedStyleSheets = [_0x4c])
      : (this.shadow.adoptedStyleSheets = [_0x4a]),
      this.interpreter && (this.interpreter.stop(), (this.interpreter = null)),
      (this.path = _0x5),
      (this.contentElement.innerHTML = _0x7),
      (this.content = _0x7));
    let _0x8 = this.contentElement.querySelectorAll("style");
    this.fonts.textContent = "";
    let _0x9 = 0;
    for (let _0xa of _0x8) {
      if (_0x9 >= 3) break;
      let _0xb = _0xa.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (_0xb)
        for (let _0xd of _0xb) {
          if (_0x9 >= 3) break;
          ((this.fonts.textContent += _0xd), _0x9++);
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let _0x5 = this.contentElement.querySelectorAll(
      'script[type="text/tilescript"]',
    );
    for (let _0x6 of _0x5) this.interpreter.runCode(_0x6.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(_0x5) {
    if (
      this.element &&
      (_0x5 &&
        (this.interpreter ||
          ((this.interpreter = new _0x48(this)), this.executeScripts()),
        this.interpreter.start()),
      _0x5 !== this.active)
    ) {
      if (((this.active = _0x5), _0x5)) {
        if (
          (this.element.classList.add("active"),
          this.contentElement.classList.add("active"),
          !this.preview && _0x3.ui)
        ) {
          let _0x7 = _0x3.ui.createVoteMenu(this);
          _0x7 && this.element.appendChild(_0x7);
          let _0x8 = _0x3.ui.createTileControl(this);
          if (
            (this.element.appendChild(_0x8),
            _0x3.user?.admin || _0x3.user?.moderator)
          ) {
            let _0x9 = _0x3.ui.createAdminControl(this);
            this.element.appendChild(_0x9);
          }
          (_0x3.plot?.activeTile && _0x3.plot.activeTile.setActive(!1),
            _0x3.plot && (_0x3.plot.activeTile = this),
            this.fetchAndShowClanBorders());
        }
        let _0x6 = this.contentElement.querySelectorAll("audio, video");
        for (let _0x7 of _0x6)
          _0x7.dataset.webtilesPaused === "true" &&
            ((_0x7.dataset.webtilesPaused = !1), _0x7.play());
      } else if (!this.preview) {
        (this.interpreter && this.interpreter.stop(),
          (_0x3.plot.activeTile = null),
          this.element.classList.remove("active"),
          this.contentElement.classList.remove("active"),
          this.preview ||
            (this.element.querySelector(".tile-vote-menu")?.remove(),
            this.element.querySelector(".tile-info")?.remove(),
            this.element.querySelector(".tile-admin-panel")?.remove(),
            _0x3.plot && (_0x3.plot.activeTile = null)),
          _0x2.clearClanBorders());
        let _0x6 = this.contentElement.querySelectorAll("audio, video");
        for (let _0x7 of _0x6)
          _0x7.paused || ((_0x7.dataset.webtilesPaused = !0), _0x7.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let _0x6 = await (
          await _0x3.api.makeRequest(
            `/api/clans/tile-clan?domain=${encodeURIComponent(this.domain)}`,
          )
        ).json();
        if (!_0x6.success || !_0x6.clan) return;
        let _0x7 = _0x6.clan.members;
        if (!_0x7 || _0x7.length <= 1) return;
        let _0x8 = new Set(_0x7.map((_0x9) => `${_0x9.x},${_0x9.y}`));
        for (let _0x9 of _0x7) {
          let _0xa = _0x3.plot.tiles[`${_0x9.x},${_0x9.y}`];
          if (!_0xa?.element) continue;
          _0xa.element.classList.add("clan-highlight");
          let _0xb = _0x8.has(`${_0x9.x},${_0x9.y - 1}`),
            _0xd = _0x8.has(`${_0x9.x},${_0x9.y + 1}`),
            _0xe = _0x8.has(`${_0x9.x - 1},${_0x9.y}`),
            _0x12 = _0x8.has(`${_0x9.x + 1},${_0x9.y}`);
          if (!_0xb) {
            let _0x13 = document.createElement("div");
            ((_0x13.className = "clan-border clan-border-top"),
              _0xa.element.appendChild(_0x13));
          }
          if (!_0xd) {
            let _0x13 = document.createElement("div");
            ((_0x13.className = "clan-border clan-border-bottom"),
              _0xa.element.appendChild(_0x13));
          }
          if (!_0xe) {
            let _0x13 = document.createElement("div");
            ((_0x13.className = "clan-border clan-border-left"),
              _0xa.element.appendChild(_0x13));
          }
          if (!_0x12) {
            let _0x13 = document.createElement("div");
            ((_0x13.className = "clan-border clan-border-right"),
              _0xa.element.appendChild(_0x13));
          }
        }
      } catch (_0x5) {
        console.error("Failed to fetch clan borders:", _0x5);
      }
  }
  static clearClanBorders() {
    if (_0x3.plot?.tiles)
      for (let _0x5 of Object.values(_0x3.plot.tiles))
        _0x5.element &&
          (_0x5.element.classList.remove("clan-highlight"),
          _0x5.element
            .querySelectorAll(".clan-border")
            .forEach((_0x7) => _0x7.remove()));
  }
  setDomain(_0x5) {
    ((this.domain = _0x5),
      (this.free = !1),
      (this.content = ""),
      this.element && this.element.classList.remove("f"),
      this.fetchContent("/index.html"));
  }
  setFree() {
    (this.interpreter && this.interpreter.stop(),
      (this.domain = null),
      (this.free = !0),
      (this.content = ""),
      this.element && this.element.classList.add("f"),
      this.fetchContent("/index.html"));
  }
  setLocked(_0x5) {
    ((this.locked = _0x5),
      this.element && this.element.classList.toggle("locked", _0x5),
      this.fetchContent("/index.html", !0));
  }
};
var _0x4e = JSON.parse(document.getElementById("embed-data").textContent),
  _0x4f = document.getElementById("tile");
window.tile = new _0x4d({
  domain: _0x4e.domain,
  container: _0x4f,
  nocontrols: !0,
  embed: !0,
  path: "/index.html",
  x: _0x4e.x,
  y: _0x4e.y,
});
window.onmessage = (_0x2) => {
  _0x2.data.type === "update" &&
    (window.tile.unrender(),
    (_0x4f.innerHTML = ""),
    (window.tile = new _0x4d({
      domain: _0x4e.domain,
      container: _0x4f,
      nocontrols: !0,
      embed: !0,
      path: _0x2.data.path,
      x: _0x4e.x,
      y: _0x4e.y,
    })));
};
