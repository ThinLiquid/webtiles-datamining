/* 5d149dda7478e4d328016fbb67903352898793fb8c90ae4fcb21cd03e6818fdc */
var __id_0 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === "true",
      disableJS: localStorage.disableJS === "true"
    }
  },
  __id_1 = document.getElementById("user-data");
if (__id_1) try {
  let __id_2 = JSON.parse(__id_1.textContent);
  __id_2 && __id_2.email_verified && (__id_0.user = __id_2);
} catch (__id_3) {
  console.error(t);
}
var __id_4 = __id_0;

function __id_5(__id_6, __id_7, __id_8) {
  let __id_9 = new WeakMap(),
    __id_10 = 2048,
    __id_11 = 1e4,
    __id_12 = new WeakMap();

  function __id_13(__id_14) {}

  function __id_15() {
    __id_12.clear = new WeakMap();
  }

  function __id_16(__id_17, __id_18) {
    if (!n) return null;
    if (__id_9.has(n)) return __id_9.get(n);
    let __id_19 = t.createObject(__id_20);
    return __id_19.native = n, __id_19.canvas = s, __id_9.set(n, __id_19), __id_19;
  }
  let __id_21 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "CanvasGradient", __id_21);
  let __id_22 = t.getProperty(__id_21, "prototype");
  t.setProperty(__id_22, "addColorStop", t.createNativeFunction(function(__id_23, __id_24) {
    this.native.addColorStop(n, s);
  }));

  function __id_25(__id_26) {
    let __id_27 = t.createObject(__id_21);
    return __id_27.native = n, __id_27;
  }
  let __id_28 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "CanvasPattern", __id_28);

  function __id_29(__id_30) {
    let __id_31 = t.createObject(__id_28);
    return __id_31.native = n, __id_31;
  }
  let __id_32 = t.createNativeFunction(function(__id_33, __id_34) {
    if (n > __id_10 || s > __id_10) throw new Error(`ImageData size exceeds maximum (${__id_10}x${__id_10})`);
    __id_4.settings.logCalls && console.log(l.domain, "create ImageData", this, n, s);
    let __id_35 = new ImageData(n, s);
    this.native = __id_35, this.width = n, this.height = s;
  }, !0);
  t.setProperty(u, "ImageData", __id_32);
  let __id_36 = t.getProperty(__id_32, "prototype");
  t.setProperty(__id_36, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.width;
    })
  }), t.setProperty(__id_36, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.height;
    })
  }), t.setProperty(__id_36, "data", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_37 = this.native.data,
        __id_38 = t.createObjectProto(t.ARRAY_PROTO);
      t.setProperty(__id_38, "length", __id_37.length);
      let __id_39 = t.nativeToPseudo({});
      t.setProperty(__id_39, "length", __id_37.length), t.setProperty(__id_39, "get", t.createNativeFunction(function(__id_40) {
        return __id_37[v];
      })), t.setProperty(__id_39, "set", t.createNativeFunction(function(__id_41, __id_42) {
        __id_4.settings.logCalls && console.log(l.domain, "setImageData", this, v, E), __id_37[v] = E;
      }));
      for (let __id_43 = 0; __id_43 < Math.min(__id_37.length, 1e3); __id_43++)(__id_44 => {
        t.setProperty(__id_39, E, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: t.createNativeFunction(function() {
            return __id_37[E];
          }),
          set: t.createNativeFunction(function(__id_45) {
            __id_4.settings.logCalls && console.log(l.domain, "setImageData", this, E, A), __id_37[E] = A;
          })
        });
      })(__id_43);
      return __id_39;
    })
  });

  function __id_46(__id_47) {
    let __id_48 = t.createObject(__id_32);
    return __id_48.native = n, __id_48;
  }
  let __id_49 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "TextMetrics", __id_49);
  let __id_50 = t.getProperty(__id_49, "prototype"),
    __id_51 = ["width", "actualBoundingBoxLeft", "actualBoundingBoxRight", "fontBoundingBoxAscent", "fontBoundingBoxDescent", "actualBoundingBoxAscent", "actualBoundingBoxDescent", "emHeightAscent", "emHeightDescent", "hangingBaseline", "alphabeticBaseline", "ideographicBaseline"];
  for (let __id_52 of __id_51) t.setProperty(__id_50, __id_52, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[__id_52];
    })
  });

  function __id_53(__id_54) {
    let __id_55 = t.createObject(__id_49);
    return __id_55.native = n, __id_55;
  }
  let __id_56 = t.createNativeFunction(function(__id_57) {
    n && n.native ? this.native = new Path2D(n.native) : typeof n == "string" ? this.native = new Path2D(n) : this.native = new Path2D();
  }, !0);
  t.setProperty(u, "Path2D", __id_56);
  let __id_58 = t.getProperty(__id_56, "prototype"),
    __id_59 = {
      addPath: function(__id_60, __id_61) {
        n?.native && this.native.addPath(n.native, s);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__id_62, __id_63) {
        this.native.moveTo(n, s);
      },
      lineTo: function(__id_64, __id_65) {
        this.native.lineTo(n, s);
      },
      bezierCurveTo: function(__id_66, __id_67, __id_68, __id_69, __id_70, __id_71) {
        this.native.bezierCurveTo(n, s, f, v, E, A);
      },
      quadraticCurveTo: function(__id_72, __id_73, __id_74, __id_75) {
        this.native.quadraticCurveTo(n, s, f, v);
      },
      arc: function(__id_76, __id_77, __id_78, __id_79, __id_80, __id_81) {
        this.native.arc(n, s, f, v, E, A);
      },
      arcTo: function(__id_82, __id_83, __id_84, __id_85, __id_86) {
        this.native.arcTo(n, s, f, v, E);
      },
      ellipse: function(__id_87, __id_88, __id_89, __id_90, __id_91, __id_92, __id_93, __id_94) {
        this.native.ellipse(n, s, f, v, E, A, D, k);
      },
      rect: function(__id_95, __id_96, __id_97, __id_98) {
        this.native.rect(n, s, f, v);
      },
      roundRect: function(__id_99, __id_100, __id_101, __id_102, __id_103) {
        this.native.roundRect(n, s, f, v, E);
      }
    };
  for (let [__id_104, __id_105] of Object.entries(__id_59)) t.setProperty(__id_58, __id_104, t.createNativeFunction(__id_105));
  let __id_20 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "CanvasRenderingContext2D", __id_20);
  let __id_106 = t.getProperty(__id_20, "prototype"),
    __id_107 = ["globalAlpha", "globalCompositeOperation", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "textAlign", "textBaseline", "direction", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "imageSmoothingEnabled", "imageSmoothingQuality", "filter"];
  for (let __id_108 of __id_107) t.setProperty(__id_106, __id_108, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[__id_108];
    }),
    set: t.createNativeFunction(function(__id_109) {
      __id_4.settings.logCalls && console.log(l.domain, "context set " + __id_108, this, s), this.native[__id_108] = s;
    })
  });
  for (let __id_110 of ["fillStyle", "strokeStyle"]) t.setProperty(__id_106, __id_110, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_111 = this.native[__id_110];
      return __id_111;
    }),
    set: t.createNativeFunction(function(__id_112) {
      s?.native ? this.native[__id_110] = s.native : this.native[__id_110] = s;
    })
  });
  t.setProperty(__id_106, "canvas", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __id_113 = {
    clearRect: function(__id_114, __id_115, __id_116, __id_117) {
      this.native, this.native.clearRect(n, s, f, v);
    },
    fillRect: function(__id_118, __id_119, __id_120, __id_121) {
      this.native, this.native.fillRect(n, s, f, v);
    },
    strokeRect: function(__id_122, __id_123, __id_124, __id_125) {
      this.native, this.native.strokeRect(n, s, f, v);
    },
    fillText: function(__id_126, __id_127, __id_128, __id_129) {
      this.native, v !== void 0 ? this.native.fillText(String(n).slice(0, 1e3), s, f, v) : this.native.fillText(String(n).slice(0, 1e3), s, f);
    },
    strokeText: function(__id_130, __id_131, __id_132, __id_133) {
      this.native, v !== void 0 ? this.native.strokeText(String(n).slice(0, 1e3), s, f, v) : this.native.strokeText(String(n).slice(0, 1e3), s, f);
    },
    measureText: function(__id_134) {
      return __id_53(this.native.measureText(String(n).slice(0, 1e3)));
    },
    getLineDash: function() {
      return t.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__id_135) {
      let __id_136 = t.pseudoToNative(n);
      this.native.setLineDash(__id_136);
    },
    createLinearGradient: function(__id_137, __id_138, __id_139, __id_140) {
      return __id_25(this.native.createLinearGradient(n, s, f, v));
    },
    createRadialGradient: function(__id_141, __id_142, __id_143, __id_144, __id_145, __id_146) {
      return __id_25(this.native.createRadialGradient(n, s, f, v, E, A));
    },
    createConicGradient: function(__id_147, __id_148, __id_149) {
      return __id_25(this.native.createConicGradient(n, s, f));
    },
    createPattern: function(__id_150, __id_151) {
      let __id_152 = n?.native || n;
      if (!__id_152) return null;
      let __id_153 = this.native.createPattern(__id_152, s);
      return __id_153 ? __id_29(__id_153) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__id_154, __id_155) {
      this.native.moveTo(n, s);
    },
    lineTo: function(__id_156, __id_157) {
      this.native.lineTo(n, s);
    },
    bezierCurveTo: function(__id_158, __id_159, __id_160, __id_161, __id_162, __id_163) {
      this.native.bezierCurveTo(n, s, f, v, E, A);
    },
    quadraticCurveTo: function(__id_164, __id_165, __id_166, __id_167) {
      this.native.quadraticCurveTo(n, s, f, v);
    },
    arc: function(__id_168, __id_169, __id_170, __id_171, __id_172, __id_173) {
      this.native.arc(n, s, f, v, E, A);
    },
    arcTo: function(__id_174, __id_175, __id_176, __id_177, __id_178) {
      this.native.arcTo(n, s, f, v, E);
    },
    ellipse: function(__id_179, __id_180, __id_181, __id_182, __id_183, __id_184, __id_185, __id_186) {
      this.native.ellipse(n, s, f, v, E, A, D, k);
    },
    rect: function(__id_187, __id_188, __id_189, __id_190) {
      this.native.rect(n, s, f, v);
    },
    roundRect: function(__id_191, __id_192, __id_193, __id_194, __id_195) {
      let __id_196 = t.pseudoToNative(E);
      this.native.roundRect(n, s, f, v, __id_196);
    },
    fill: function(__id_197, __id_198) {
      this.native, n?.native ? this.native.fill(n.native, s) : this.native.fill(n);
    },
    stroke: function(__id_199) {
      this.native, n?.native ? this.native.stroke(n.native) : this.native.stroke();
    },
    clip: function(__id_200, __id_201) {
      n?.native ? this.native.clip(n.native, s) : this.native.clip(n);
    },
    isPointInPath: function(__id_202, __id_203, __id_204, __id_205) {
      return n?.native ? this.native.isPointInPath(n.native, s, f, v) : this.native.isPointInPath(n, s, f);
    },
    isPointInStroke: function(__id_206, __id_207, __id_208) {
      return n?.native ? this.native.isPointInStroke(n.native, s, f) : this.native.isPointInStroke(n, s);
    },
    getTransform: function() {
      let __id_209 = this.native.getTransform();
      return t.nativeToPseudo({
        a: __id_209.a,
        __id_15: __id_209.__id_15,
        __id_36: __id_209.__id_36,
        __id_4: __id_209.__id_4,
        e: __id_209.e,
        f: __id_209.f
      });
    },
    rotate: function(__id_210) {
      this.native.rotate(n);
    },
    scale: function(__id_211, __id_212) {
      this.native.scale(n, s);
    },
    translate: function(__id_213, __id_214) {
      this.native.translate(n, s);
    },
    transform: function(__id_215, __id_216, __id_217, __id_218, __id_219, __id_220) {
      this.native.transform(n, s, f, v, E, A);
    },
    setTransform: function(__id_221, __id_222, __id_223, __id_224, __id_225, __id_226) {
      if (typeof n == "object" && n !== null) {
        let __id_227 = t.pseudoToNative(n);
        this.native.setTransform(__id_227);
      } else this.native.setTransform(n, s, f, v, E, A);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__id_228, __id_229, __id_230, __id_231, __id_232, __id_233, __id_234, __id_235, __id_236) {
      this.native;
      let __id_237 = n?.native || n;
      __id_237 && (k !== void 0 ? this.native.drawImage(__id_237, s, f, v, E, A, D, k, Y) : v !== void 0 ? this.native.drawImage(__id_237, s, f, v, E) : this.native.drawImage(__id_237, s, f));
    },
    createImageData: function(__id_238, __id_239) {
      if (n?.native) return __id_46(this.native.createImageData(n.native));
      if (n > __id_10 || s > __id_10) throw new Error(`ImageData size exceeds maximum (${__id_10}x${__id_10})`);
      return __id_46(this.native.createImageData(n, s));
    },
    getImageData: function(__id_240, __id_241, __id_242, __id_243) {
      if (f > __id_10 || v > __id_10) throw new Error(`ImageData size exceeds maximum (${__id_10}x${__id_10})`);
      return __id_46(this.native.getImageData(n, s, f, v));
    },
    putImageData: function(__id_244, __id_245, __id_246, __id_247, __id_248, __id_249, __id_250) {
      this.native, n?.native && (v !== void 0 ? this.native.putImageData(n.native, s, f, v, E, A, D) : this.native.putImageData(n.native, s, f));
    },
    save: function() {
      this.native.save();
    },
    restore: function() {
      this.native.restore();
    },
    reset: function() {
      this.native.reset();
    }
  };
  for (let [__id_251, __id_252] of Object.entries(__id_113)) t.setProperty(__id_106, __id_251, t.createNativeFunction(__id_252));
  return {
    extendElement: function(__id_253, __id_254) {
      t.setProperty(n, "getContext", t.createNativeFunction(function(__id_255, __id_256) {
        __id_4.settings.logCalls && console.log(l.domain, "getContext", this, f, v);
        let __id_257 = this.native;
        if (__id_257.tagName !== "CANVAS") throw new Error("getContext is only available on canvas elements");
        if (__id_257.width > __id_10 && (__id_257.width = __id_10), __id_257.height > __id_10 && (__id_257.height = __id_10), f === "2d") {
          let __id_258 = __id_257.getContext("2d", v ? t.pseudoToNative(v) : void 0);
          return __id_16(__id_258, this);
        }
        throw new Error(`Context type "${f}" is not supported`);
      })), t.setProperty(n, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.width : this.native.width;
        }),
        set: t.createNativeFunction(function(__id_259) {
          __id_4.settings.logCalls && console.log(l.domain, "set width", this, f), this.native.tagName === "CANVAS" && (this.native.width = Math.min(f, __id_10));
        })
      }), t.setProperty(n, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.height : this.native.height;
        }),
        set: t.createNativeFunction(function(__id_260) {
          __id_4.settings.logCalls && console.log(l.domain, "set height", this, f), this.native.tagName === "CANVAS" && (this.native.height = Math.min(f, __id_10));
        })
      }), t.setProperty(n, "toDataURL", t.createNativeFunction(function(__id_261, __id_262) {
        if (this.native.tagName !== "CANVAS") throw new Error("toDataURL is only available on canvas elements");
        return __id_4.settings.logCalls && console.log(l.domain, "toDataURL", this, f, v), this.native.toDataURL(f, v);
      }));
    },
    resetDrawCounts: __id_15,
    contextToPseudo: __id_16
  };
}

function __id_263(__id_264, __id_265, __id_266) {
  let __id_267 = 0,
    __id_268 = window.location.origin;

  function __id_269(__id_270) {
    if (typeof i != "string" || i.startsWith("/") || i.startsWith("./") || i.startsWith("../") || !i.startsWith("http://") && !i.startsWith("https://")) return !1;
    try {
      let __id_271 = new URL(i);
      if (__id_271.origin === __id_268 || __id_271.hostname === "kicya.net" || __id_271.hostname.endsWith(".kicya.net") || __id_271.hostname === "nekoweb.org") return !1;
      let __id_272 = __id_271.hostname.toLowerCase();
      return !(__id_272 === "localhost" || __id_272 === "127.0.0.1" || __id_272 === "0.0.0.0" || __id_272.startsWith("192.168.") || __id_272.startsWith("10.") || __id_272.startsWith("172.16.") || __id_272.startsWith("172.17.") || __id_272.startsWith("172.18.") || __id_272.startsWith("172.19.") || __id_272.startsWith("172.2") || __id_272.startsWith("172.30.") || __id_272.startsWith("172.31.") || __id_272 === "[::1]");
    } catch {
      return !1;
    }
  }
  let __id_273 = 0,
    __id_274 = t.nativeToPseudo({});
  t.setProperty(u, "__xhrCallbacks", __id_274);

  function __id_275(__id_276, ...__id_277) {
    if (!i || typeof i != "object") return;
    let __id_278 = __id_273++;
    t.setProperty(__id_274, "fn" + __id_278, i);
    let __id_279 = c.map((__id_280, __id_281) => {
        let __id_282 = "arg" + __id_278 + "_" + j;
        return t.setProperty(__id_274, __id_282, x), __id_282;
      }),
      __id_283 = __id_279.map(__id_284 => `__xhrCallbacks.${__id_284}`).join(",");
    t.appendCode(`__xhrCallbacks.fn${__id_278}(${__id_283}); delete __xhrCallbacks.fn${__id_278}; ${__id_279.map(__id_285 => `delete __xhrCallbacks.${__id_285}`).join("; ")};`);
  }
  let __id_286 = t.createNativeFunction(function() {
    __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest", this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __id_287 = this;
    this.native.onreadystatechange = function() {
      t.setProperty(__id_287, "readyState", __id_287.native.readyState), __id_287.native.readyState === 4 && (t.setProperty(__id_287, "status", __id_287.native.status), t.setProperty(__id_287, "statusText", __id_287.native.statusText), t.setProperty(__id_287, "responseText", __id_287.native.responseText?.slice(0, 5242880) || ""), t.setProperty(__id_287, "responseURL", __id_287.native.responseURL), __id_267 = Math.max(0, __id_267 - 1)), __id_287._eventHandlers.onreadystatechange && __id_275(__id_287._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __id_287._eventHandlers.onload && __id_275(__id_287._eventHandlers.onload);
    }, this.native.onerror = function() {
      __id_267 = Math.max(0, __id_267 - 1), __id_287._eventHandlers.onerror && __id_275(__id_287._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __id_267 = Math.max(0, __id_267 - 1), __id_287._eventHandlers.ontimeout && __id_275(__id_287._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __id_267 = Math.max(0, __id_267 - 1), __id_287._eventHandlers.onabort && __id_275(__id_287._eventHandlers.onabort);
    }, this.native.onprogress = function(__id_288) {
      if (__id_287._eventHandlers.onprogress) {
        let __id_289 = t.nativeToPseudo({
          loaded: P.loaded,
          total: P.total,
          lengthComputable: P.lengthComputable
        });
        __id_275(__id_287._eventHandlers.onprogress, __id_289);
      }
    }, this.native.onloadstart = function() {
      __id_287._eventHandlers.onloadstart && __id_275(__id_287._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __id_287._eventHandlers.onloadend && __id_275(__id_287._eventHandlers.onloadend);
    }, t.setProperty(this, "readyState", 0), t.setProperty(this, "status", 0), t.setProperty(this, "statusText", ""), t.setProperty(this, "responseText", ""), t.setProperty(this, "responseURL", "");
  }, !0);
  t.setProperty(u, "XMLHttpRequest", __id_286);
  let __id_290 = t.getProperty(__id_286, "prototype");
  t.setProperty(__id_286, "UNSENT", 0), t.setProperty(__id_286, "OPENED", 1), t.setProperty(__id_286, "HEADERS_RECEIVED", 2), t.setProperty(__id_286, "LOADING", 3), t.setProperty(__id_286, "DONE", 4), t.setProperty(__id_290, "UNSENT", 0), t.setProperty(__id_290, "OPENED", 1), t.setProperty(__id_290, "HEADERS_RECEIVED", 2), t.setProperty(__id_290, "LOADING", 3), t.setProperty(__id_290, "DONE", 4);
  let __id_291 = ["onreadystatechange", "onload", "onerror", "ontimeout", "onabort", "onprogress", "onloadstart", "onloadend"];
  for (let __id_292 of __id_291) t.setProperty(__id_290, __id_292, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this._eventHandlers[__id_292] || null;
    }),
    set: t.createNativeFunction(function(__id_293) {
      __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest set " + __id_292, this, c), this._eventHandlers[__id_292] = c;
    })
  });
  t.setProperty(__id_290, "timeout", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: t.createNativeFunction(function(__id_294) {
      this.native.timeout = Math.min(i, 3e4);
    })
  }), t.setProperty(__id_290, "withCredentials", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: t.createNativeFunction(function(__id_295) {
      this.native.withCredentials = !1;
    })
  }), t.setProperty(__id_290, "responseType", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: t.createNativeFunction(function(__id_296) {
      (i === "" || i === "text" || i === "json") && (this.native.responseType = i);
    })
  }), t.setProperty(__id_290, "response", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_297 = this.native.response;
      return this.native.responseType === "json" ? t.nativeToPseudo(__id_297) : typeof __id_297 == "string" ? __id_297.slice(0, 5242880) : __id_297;
    })
  }), t.setProperty(__id_290, "open", t.createNativeFunction(function(__id_298, __id_299, __id_300, __id_301, __id_302) {
    if (!__id_269(c)) throw new Error(`XHR request blocked: URL "${c}" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __id_303 = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (i = String(i).toUpperCase(), !__id_303.includes(i)) throw new Error(`HTTP method "${i}" is not allowed`);
    __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest open", this, i, c, P, _, F), this._method = i, this._url = c, this._async = P !== !1, this.native.open(i, c, this._async), this.native.timeout = 3e4, t.setProperty(this, "readyState", this.native.readyState);
  })), t.setProperty(__id_290, "setRequestHeader", t.createNativeFunction(function(__id_304, __id_305) {
    if (["cookie", "cookie2", "set-cookie", "set-cookie2", "host", "origin", "referer"].includes(i.toLowerCase())) throw new Error(`Setting header "${i}" is not allowed`);
    __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest setRequestHeader", this, i, c), this._headers[i] = c, this.native.setRequestHeader(i, c);
  })), t.setProperty(__id_290, "send", t.createNativeFunction(function(__id_306) {
    if (__id_267 >= 5) throw new Error("Maximum concurrent requests (5) exceeded");
    __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest send", this, i), __id_267++;
    let __id_307 = null;
    i != null && (typeof i == "string" ? __id_307 = i.slice(0, 5242880) : typeof i == "object" && (__id_307 = JSON.stringify(t.pseudoToNative(i)))), this.native.send(__id_307);
  })), t.setProperty(__id_290, "abort", t.createNativeFunction(function() {
    __id_4.settings.logCalls && console.log(l.domain, "XMLHttpRequest abort", this), this.native.abort(), __id_267 = Math.max(0, __id_267 - 1);
  })), t.setProperty(__id_290, "getResponseHeader", t.createNativeFunction(function(__id_308) {
    return this.native.getResponseHeader(i);
  })), t.setProperty(__id_290, "getAllResponseHeaders", t.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), t.setProperty(__id_290, "overrideMimeType", t.createNativeFunction(function(__id_309) {
    this.native.overrideMimeType(i);
  }));
}
var __id_310 = "webtiles_storage",
  __id_311 = 1,
  __id_312 = "localStorage",
  __id_313 = 1024 * 1024,
  __id_314 = 100,
  __id_315 = null,
  __id_316 = null;

function __id_317() {
  return __id_316 || (__id_316 = new Promise((__id_318, __id_319) => {
    let __id_320 = indexedDB.open(__id_310, __id_311);
    __id_320.onerror = () => u(__id_320.error), __id_320.onsuccess = () => {
      __id_315 = __id_320.result, t(__id_315);
    }, __id_320.onupgradeneeded = __id_321 => {
      let __id_322 = r.target.result;
      __id_322.objectStoreNames.contains(__id_312) || __id_322.createObjectStore(__id_312, {
        keyPath: ["site", "key"]
      }).createIndex("site", "site", {
        unique: !1
      });
    };
  }), __id_316);
}
async function __id_323(__id_324, __id_325) {
  return await __id_317(), new Promise((__id_326, __id_327) => {
    let __id_328 = __id_315.transaction(__id_312, "readonly").objectStore(__id_312).get([t, u]);
    __id_328.onsuccess = () => l(__id_328.result?.value ?? null), __id_328.onerror = () => r(__id_328.error);
  });
}
async function __id_329(__id_330, __id_331, __id_332) {
  return await __id_317(), new Promise((__id_333, __id_334) => {
    let __id_335 = __id_315.transaction(__id_312, "readwrite").objectStore(__id_312).put({
      site: t,
      key: u,
      value: l
    });
    __id_335.onsuccess = () => r(), __id_335.onerror = () => h(__id_335.error);
  });
}
async function __id_336(__id_337, __id_338) {
  return await __id_317(), new Promise((__id_339, __id_340) => {
    let __id_341 = __id_315.transaction(__id_312, "readwrite").objectStore(__id_312).delete([t, u]);
    __id_341.onsuccess = () => l(), __id_341.onerror = () => r(__id_341.error);
  });
}
async function __id_342(__id_343) {
  return await __id_317(), new Promise((__id_344, __id_345) => {
    let __id_346 = __id_315.transaction(__id_312, "readonly").objectStore(__id_312).index("site").getAll(t);
    __id_346.onsuccess = () => {
      let __id_347 = __id_346.result.map(__id_348 => __id_348.key);
      u(__id_347);
    }, __id_346.onerror = () => l(__id_346.error);
  });
}
async function __id_349(__id_350) {
  return await __id_317(), new Promise((__id_351, __id_352) => {
    let __id_353 = __id_315.transaction(__id_312, "readonly").objectStore(__id_312).index("site").getAll(t);
    __id_353.onsuccess = () => {
      let __id_354 = 0;
      for (let __id_355 of __id_353.result) __id_354 += (__id_355.key.length + __id_355.value.length) * 2;
      u({
        size: __id_354,
        count: __id_353.result.length
      });
    }, __id_353.onerror = () => l(__id_353.error);
  });
}
async function __id_356(__id_357) {
  return await __id_317(), new Promise((__id_358, __id_359) => {
    let __id_360 = __id_315.transaction(__id_312, "readwrite").objectStore(__id_312).index("site").openCursor(t);
    __id_360.onsuccess = __id_361 => {
      let __id_362 = w.target.result;
      __id_362 ? (__id_362.delete(), __id_362.continue()) : u();
    }, __id_360.onerror = () => l(__id_360.error);
  });
}

function __id_363(__id_364, __id_365, __id_366) {
  let __id_367 = t.nativeToPseudo({});
  t.setProperty(__id_367, "getItem", t.createAsyncFunction(function(__id_368, __id_369) {
    if (__id_4.settings.logCalls && console.log(l, "localStorage.getItem", this, h), h == null) {
      N(null);
      return;
    }
    h = String(h), __id_323(l, h).then(__id_370 => N(__id_370)).catch(__id_371 => {
      console.error("localStorage.getItem error:", m), N(null);
    });
  })), t.setProperty(__id_367, "setItem", t.createAsyncFunction(function(__id_372, __id_373, __id_374) {
    if (__id_4.settings.logCalls && console.log(l, "localStorage.setItem", this, h, N), h == null) {
      m();
      return;
    }
    h = String(h), N = String(N), __id_349(l).then(({
      size: __id_375,
      count: __id_376
    }) => {
      __id_323(l, h).then(__id_377 => {
        if (R === null && b >= __id_314) throw new Error(`localStorage item limit exceeded (max ${__id_314} items)`);
        let __id_378 = R ? (h.length + R.length) * 2 : 0,
          __id_379 = (h.length + N.length) * 2;
        if (w - __id_378 + __id_379 > __id_313) throw new Error(`localStorage size limit exceeded (max ${__id_313 / 1024}KB)`);
        return __id_329(l, h, N);
      }).then(() => m()).catch(__id_380 => {
        throw console.error("localStorage.setItem error:", R), R;
      });
    }).catch(__id_381 => {
      console.error("localStorage.setItem error:", w), m();
    });
  })), t.setProperty(__id_367, "removeItem", t.createAsyncFunction(function(__id_382, __id_383) {
    if (__id_4.settings.logCalls && console.log(l, "localStorage.removeItem", this, h), h == null) {
      N();
      return;
    }
    h = String(h), __id_336(l, h).then(() => N()).catch(__id_384 => {
      console.error("localStorage.removeItem error:", m), N();
    });
  })), t.setProperty(__id_367, "clear", t.createAsyncFunction(function(__id_385) {
    __id_4.settings.logCalls && console.log(l, "localStorage.clear", this), __id_356(l).then(() => h()).catch(__id_386 => {
      console.error("localStorage.clear error:", N), h();
    });
  })), t.setProperty(__id_367, "key", t.createAsyncFunction(function(__id_387, __id_388) {
    h = parseInt(h) || 0, __id_342(l).then(__id_389 => {
      N(h >= 0 && h < m.length ? m[h] : null);
    }).catch(__id_390 => {
      console.error("localStorage.key error:", m), N(null);
    });
  })), t.setProperty(__id_367, "getLength", t.createAsyncFunction(function(__id_391) {
    __id_349(l).then(({
      count: __id_392
    }) => h(__id_392)).catch(__id_393 => {
      console.error("localStorage.getLength error:", N), h(0);
    });
  })), t.setProperty(u, "localStorage", __id_367), t.setProperty(u, "sessionStorage", __id_367);
}
__id_317().catch(__id_394 => {
  console.error("Failed to initialize storage DB:", t);
});

function __id_395(__id_396, __id_397, __id_398, __id_399) {
  let __id_400 = t.createNativeFunction(function() {}, !0);
  t.setProperty(u, "DOMParser", __id_400);
  let __id_401 = t.getProperty(__id_400, "prototype");
  t.setProperty(__id_401, "parseFromString", t.createNativeFunction(function(__id_402, __id_403) {
    if (__id_4.settings.logCalls && console.log(r.domain, "DOMParser parseFromString", this, m, w), !["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"].includes(w)) throw new Error(`DOMParser: Unsupported MIME type "${w}"`);
    if (typeof m != "string" && (m = String(m)), m.length > 1e5) throw new Error("DOMParser: Input string too large (max 100KB)");
    let __id_404 = new DOMParser().parseFromString(m, w),
      __id_405 = t.createObjectProto(t.OBJECT_PROTO);

    function __id_406(__id_407) {
      if (T == null) return null;
      let __id_408 = t.createObjectProto(t.OBJECT_PROTO);
      return __id_408.native = T, __id_408.fromDOMParser = !0, t.setProperty(__id_408, "nodeName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), t.setProperty(__id_408, "nodeType", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), t.setProperty(__id_408, "nodeValue", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: t.createNativeFunction(function(__id_409) {
          __id_4.settings.logCalls && console.log(r.domain, "DOMParser set nodeValue", this, i), this.native.nodeValue = i;
        })
      }), t.setProperty(__id_408, "textContent", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: t.createNativeFunction(function(__id_410) {
          __id_4.settings.logCalls && console.log(r.domain, "DOMParser set textContent", this, i), this.native.textContent = String(i).slice(0, 5e4);
        })
      }), t.setProperty(__id_408, "tagName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), t.setProperty(__id_408, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.id;
        }),
        set: t.createNativeFunction(function(__id_411) {
          __id_4.settings.logCalls && console.log(r.domain, "DOMParser set id", this, i), this.native.id = String(i).slice(0, 100);
        })
      }), t.setProperty(__id_408, "className", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.className;
        }),
        set: t.createNativeFunction(function(__id_412) {
          __id_4.settings.logCalls && console.log(r.domain, "DOMParser set className", this, i), this.native.className = String(i).slice(0, 1e3);
        })
      }), t.setProperty(__id_408, "innerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: t.createNativeFunction(function(__id_413) {
          throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.");
        })
      }), t.setProperty(__id_408, "outerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), t.setProperty(__id_408, "children", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let __id_414 = Array.from(this.native.children),
            __id_415 = t.createObjectProto(t.ARRAY_PROTO);
          for (let __id_416 = 0; __id_416 < __id_414.length; __id_416++) t.setProperty(__id_415, __id_416, __id_406(__id_414[__id_416]));
          return t.setProperty(__id_415, "length", __id_414.length), __id_415;
        })
      }), t.setProperty(__id_408, "childNodes", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let __id_417 = Array.from(this.native.childNodes),
            __id_418 = t.createObjectProto(t.ARRAY_PROTO);
          for (let __id_419 = 0; __id_419 < __id_417.length; __id_419++) t.setProperty(__id_418, __id_419, __id_406(__id_417[__id_419]));
          return t.setProperty(__id_418, "length", __id_417.length), __id_418;
        })
      }), t.setProperty(__id_408, "firstChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_406(this.native.firstChild);
        })
      }), t.setProperty(__id_408, "lastChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_406(this.native.lastChild);
        })
      }), t.setProperty(__id_408, "firstElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_406(this.native.firstElementChild);
        })
      }), t.setProperty(__id_408, "lastElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_406(this.native.lastElementChild);
        })
      }), t.setProperty(__id_408, "parentNode", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (__id_4.settings.logCalls && console.log(r.domain, "DOMParser get parentNode", this), __id_406(this.native.parentNode));
        })
      }), t.setProperty(__id_408, "parentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (__id_4.settings.logCalls && console.log(r.domain, "DOMParser get parentElement", this), __id_406(this.native.parentElement));
        })
      }), t.setProperty(__id_408, "nextSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (__id_4.settings.logCalls && console.log(r.domain, "DOMParser get nextSibling", this), __id_406(this.native.nextSibling));
        })
      }), t.setProperty(__id_408, "previousSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (__id_4.settings.logCalls && console.log(r.domain, "DOMParser get previousSibling", this), __id_406(this.native.previousSibling));
        })
      }), t.setProperty(__id_408, "getAttributeNames", t.createNativeFunction(function() {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_420 = Array.from(this.native.getAttributeNames()),
          __id_421 = t.createObjectProto(t.ARRAY_PROTO);
        for (let __id_422 = 0; __id_422 < __id_420.length; __id_422++) t.setProperty(__id_421, __id_422, __id_420[__id_422]);
        return t.setProperty(__id_421, "length", __id_420.length), __id_421;
      })), t.setProperty(__id_408, "getAttribute", t.createNativeFunction(function(__id_423) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.getAttribute(i);
      })), t.setProperty(__id_408, "setAttribute", t.createNativeFunction(function(__id_424, __id_425) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (i = String(i).toLowerCase(), i.startsWith("on")) throw new Error("Event handlers are not allowed");
        this.native.setAttribute(i, String(c)), __id_4.settings.logCalls && console.log(r.domain, "DOMParser set attribute", this, i, c);
      })), t.setProperty(__id_408, "hasAttribute", t.createNativeFunction(function(__id_426) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.hasAttribute(i);
      })), t.setProperty(__id_408, "removeAttribute", t.createNativeFunction(function(__id_427) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (this.native.isSameNode(l)) throw new Error("No access.");
        this.native.removeAttribute(i), __id_4.settings.logCalls && console.log(r.domain, "DOMParser remove attribute", this, i);
      })), t.setProperty(__id_408, "querySelector", t.createNativeFunction(function(__id_428) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return __id_406(this.native.querySelector(i));
      })), t.setProperty(__id_408, "querySelectorAll", t.createNativeFunction(function(__id_429) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_430 = Array.from(this.native.querySelectorAll(i)),
          __id_431 = t.createObjectProto(t.ARRAY_PROTO);
        for (let __id_432 = 0; __id_432 < __id_430.length; __id_432++) t.setProperty(__id_431, __id_432, __id_406(__id_430[__id_432]));
        return t.setProperty(__id_431, "length", __id_430.length), __id_431;
      })), t.setProperty(__id_408, "getElementsByTagName", t.createNativeFunction(function(__id_433) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_434 = Array.from(this.native.getElementsByTagName(i)),
          __id_435 = t.createObjectProto(t.ARRAY_PROTO);
        for (let __id_436 = 0; __id_436 < __id_434.length; __id_436++) t.setProperty(__id_435, __id_436, __id_406(__id_434[__id_436]));
        return t.setProperty(__id_435, "length", __id_434.length), __id_435;
      })), t.setProperty(__id_408, "getElementsByClassName", t.createNativeFunction(function(__id_437) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_438 = Array.from(this.native.getElementsByClassName(i)),
          __id_439 = t.createObjectProto(t.ARRAY_PROTO);
        for (let __id_440 = 0; __id_440 < __id_438.length; __id_440++) t.setProperty(__id_439, __id_440, __id_406(__id_438[__id_440]));
        return t.setProperty(__id_439, "length", __id_438.length), __id_439;
      })), t.setProperty(__id_408, "getElementById", t.createNativeFunction(function(__id_441) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return __id_406(this.native.getElementById ? this.native.getElementById(i) : null);
      })), __id_408;
    }
    return t.setProperty(__id_405, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return __id_406(__id_404.documentElement);
      })
    }), t.setProperty(__id_405, "head", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return __id_4.settings.logCalls && console.log(r.domain, "DOMParser get head", this), __id_406(__id_404.head);
      })
    }), t.setProperty(__id_405, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return __id_4.settings.logCalls && console.log(r.domain, "DOMParser get body", this), __id_406(__id_404.body);
      })
    }), t.setProperty(__id_405, "title", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return __id_404.title;
      })
    }), t.setProperty(__id_405, "querySelector", t.createNativeFunction(function(__id_442) {
      return __id_406(__id_404.querySelector(T));
    })), t.setProperty(__id_405, "querySelectorAll", t.createNativeFunction(function(__id_443) {
      let __id_444 = Array.from(__id_404.querySelectorAll(T)),
        __id_445 = t.createObjectProto(t.ARRAY_PROTO);
      for (let __id_446 = 0; __id_446 < __id_444.length; __id_446++) t.setProperty(__id_445, __id_446, __id_406(__id_444[__id_446]));
      return t.setProperty(__id_445, "length", __id_444.length), __id_445;
    })), t.setProperty(__id_405, "getElementById", t.createNativeFunction(function(__id_447) {
      return __id_406(__id_404.getElementById(T));
    })), t.setProperty(__id_405, "getElementsByTagName", t.createNativeFunction(function(__id_448) {
      let __id_449 = Array.from(__id_404.getElementsByTagName(T)),
        __id_450 = t.createObjectProto(t.ARRAY_PROTO);
      for (let __id_451 = 0; __id_451 < __id_449.length; __id_451++) t.setProperty(__id_450, __id_451, __id_406(__id_449[__id_451]));
      return t.setProperty(__id_450, "length", __id_449.length), __id_450;
    })), t.setProperty(__id_405, "getElementsByClassName", t.createNativeFunction(function(__id_452) {
      let __id_453 = Array.from(__id_404.getElementsByClassName(T)),
        __id_454 = t.createObjectProto(t.ARRAY_PROTO);
      for (let __id_455 = 0; __id_455 < __id_453.length; __id_455++) t.setProperty(__id_454, __id_455, __id_406(__id_453[__id_455]));
      return t.setProperty(__id_454, "length", __id_453.length), __id_454;
    })), __id_405;
  }));
}

function __id_456(__id_457, __id_458, __id_459, __id_460) {
  let __id_461 = new WeakMap(),
    __id_462 = 1e3,
    __id_463 = 5,
    __id_464 = new WeakMap(),
    __id_465 = 0,
    __id_466 = t.nativeToPseudo({});
  t.setProperty(u, "__eventCallbacks", __id_466);

  function __id_467(__id_468, __id_469) {
    let __id_470 = __id_465++;
    t.setProperty(__id_466, "fn" + __id_470, e), t.setProperty(__id_466, "ev" + __id_470, o), t.appendCode(`__eventCallbacks.fn${__id_470}(__eventCallbacks.ev${__id_470}); delete __eventCallbacks.fn${__id_470}; delete __eventCallbacks.ev${__id_470};`);
  }

  function __id_471() {
    return l.getElementsByTagName("*").length;
  }

  function __id_472(__id_473 = 1) {
    if (__id_471() + e > __id_462) throw new Error(`DOM element limit exceeded (max ${__id_462})`);
  }

  function __id_474(__id_475) {
    return e instanceof Element ? 1 + e.getElementsByTagName("*").length : 0;
  }

  function __id_476(__id_477, __id_478 = !1) {
    if (e == null) return null;
    if (__id_461.has(e)) return __id_461.get(e);
    let __id_479 = e instanceof Element ? __id_480 : __id_481,
      __id_482 = t.createObject(__id_479);
    return __id_482.native = e, __id_482.fromDOMParser || (__id_482.fromDOMParser = o), __id_461.set(e, __id_482), __id_482;
  }

  function __id_483(__id_484) {
    return e && l.contains(e);
  }

  function __id_485(__id_486) {
    return __id_483(e) ? e : null;
  }

  function __id_487(__id_488) {
    let __id_489 = t.createObjectProto(t.ARRAY_PROTO);
    for (let __id_490 = 0; __id_490 < e.length; __id_490++) t.setProperty(__id_489, __id_490, __id_476(e[__id_490]));
    return t.setProperty(__id_489, "length", e.length), __id_489;
  }
  let __id_481 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "Node", __id_481);
  let __id_491 = t.getProperty(__id_481, "prototype"),
    __id_492 = {
      firstChild: function() {
        return __id_476(__id_485(this.native.firstChild));
      },
      lastChild: function() {
        return __id_476(__id_485(this.native.lastChild));
      },
      parentNode: function() {
        return __id_476(__id_485(this.native.parentNode));
      },
      parentElement: function() {
        return __id_476(__id_485(this.native.parentElement));
      },
      nextSibling: function() {
        return __id_476(__id_485(this.native.nextSibling));
      },
      previousSibling: function() {
        return __id_476(__id_485(this.native.previousSibling));
      },
      childNodes: function() {
        let __id_493 = Array.from(this.native.childNodes).filter(__id_483);
        return __id_487(__id_493);
      },
      nodeName: function() {
        return this.native.nodeName;
      },
      nodeType: function() {
        return this.native.nodeType;
      },
      nodeValue: function() {
        return this.native.nodeValue;
      },
      textContent: function() {
        return this.native.textContent;
      }
    },
    __id_494 = {
      textContent: function(__id_495) {
        __id_4.settings.logCalls && console.log(r.domain, "set textContent", this, e), this.native.textContent = e;
      },
      nodeValue: function(__id_496) {
        __id_4.settings.logCalls && console.log(r.domain, "set nodeValue", this, e), this.native.nodeValue = e;
      }
    };
  for (let [__id_497, __id_498] of Object.entries(__id_492)) {
    let __id_499 = {
      get: t.createNativeFunction(__id_498)
    };
    __id_494[__id_497] && (__id_499.set = t.createNativeFunction(__id_494[__id_497])), t.setProperty(__id_491, __id_497, Interpreter.VALUE_IN_DESCRIPTOR, __id_499);
  }
  let __id_500 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__id_501) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
      return __id_472(__id_474(e.native)), this.native.appendChild(e.native), __id_4.settings.logCalls && console.log(r.domain, "appendChild", this, e), e;
    },
    append: function(__id_502) {
      for (let __id_503 of e)
        if (__id_503?.native) {
          if (__id_503.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
          __id_472(__id_474(__id_503.native)), this.native.appendChild(__id_503.native);
        }
      return __id_4.settings.logCalls && console.log(r.domain, "append", this, e), e;
    },
    removeChild: function(__id_504) {
      return !e?.native || !__id_483(e.native) ? null : (__id_4.settings.logCalls && console.log(r.domain, "removeChild", this, e), __id_476(this.native.removeChild(e.native)));
    },
    insertBefore: function(__id_505, __id_506) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      __id_472(__id_474(e.native));
      let __id_507 = o?.native || null;
      return this.native.insertBefore(e.native, __id_507), __id_4.settings.logCalls && console.log(r.domain, "insertBefore", this, e, __id_507), e;
    },
    cloneNode: function(__id_508) {
      return __id_4.settings.logCalls && console.log(r.domain, "cloneNode", this, e), __id_476(this.native.cloneNode(e), this.fromDOMParser);
    },
    contains: function(__id_509) {
      return e?.native ? this.native.contains(e.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(l)) throw new Error("No access.");
      this.native.remove(), __id_4.settings.logCalls && console.log(r.domain, "remove", this);
    },
    after: function(__id_510) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      return __id_472(__id_474(e.native)), this.native.after(e.native), __id_4.settings.logCalls && console.log(r.domain, "after", this, e), e;
    },
    before: function(__id_511) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      return __id_472(__id_474(e.native)), this.native.before(e.native), __id_4.settings.logCalls && console.log(r.domain, "before", this, e), e;
    }
  };
  for (let [__id_512, __id_513] of Object.entries(__id_500)) t.setProperty(__id_491, __id_512, t.createNativeFunction(__id_513));
  let __id_480 = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  t.setProperty(u, "Element", __id_480);
  let __id_514 = t.createObject(__id_481);
  t.setProperty(__id_480, "prototype", __id_514);

  function __id_515(__id_516) {
    if (!e) return "";
    e = String(e);
    let __id_517 = e.toLowerCase().trim();
    if (__id_517.startsWith("javascript:") || __id_517.startsWith("vbscript:")) throw new Error("javascript: URLs are not allowed");
    if (__id_517.startsWith("data:")) return e;
    try {
      let __id_518 = new URL(e, location.href);
      if (__id_518.hostname !== location.hostname) throw new Error("External URLs are not allowed");
      let __id_519 = __id_518.pathname + __id_518.search + __id_518.hash;
      return __id_519.startsWith(`/t/${r.domain}/`) || (__id_519 = `/t/${r.domain}/${__id_519}`.replaceAll("//", "/")), __id_519;
    } catch (__id_520) {
      if (a.message.includes("not allowed")) throw a;
      let __id_521 = e;
      return !__id_521.startsWith(`/t/${r.domain}/`) && !__id_521.startsWith("#") && (__id_521 = `/t/${r.domain}/${__id_521}`.replaceAll("//", "/")), __id_521;
    }
  }
  let __id_522 = {
      innerText: function() {
        return this.native.innerText;
      },
      innerHTML: function() {
        return this.native.innerHTML;
      },
      outerHTML: function() {
        return this.native.outerHTML;
      },
      id: function() {
        return this.native.id;
      },
      className: function() {
        return this.native.className;
      },
      tagName: function() {
        return this.native.tagName;
      },
      children: function() {
        let __id_523 = Array.from(this.native.children).filter(__id_483);
        return __id_487(__id_523);
      },
      firstElementChild: function() {
        return __id_476(__id_485(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __id_476(__id_485(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __id_476(__id_485(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __id_476(__id_485(this.native.previousElementSibling));
      },
      childElementCount: function() {
        return this.native.childElementCount;
      },
      src: function() {
        return this.native.src;
      },
      href: function() {
        return this.native.href;
      },
      hidden: function() {
        return this.native.hidden;
      },
      disabled: function() {
        return this.native.disabled;
      },
      checked: function() {
        return this.native.checked;
      },
      selected: function() {
        return this.native.selected;
      },
      readOnly: function() {
        return this.native.readOnly;
      },
      required: function() {
        return this.native.required;
      },
      draggable: function() {
        return this.native.draggable;
      },
      title: function() {
        return this.native.title;
      },
      alt: function() {
        return this.native.alt;
      },
      name: function() {
        return this.native.name;
      },
      type: function() {
        return this.native.type;
      },
      value: function() {
        return this.native.value;
      },
      placeholder: function() {
        return this.native.placeholder;
      },
      tabIndex: function() {
        return this.native.tabIndex;
      },
      offsetWidth: function() {
        return this.native.offsetWidth;
      },
      offsetHeight: function() {
        return this.native.offsetHeight;
      },
      offsetTop: function() {
        return this.native.offsetTop;
      },
      offsetLeft: function() {
        return this.native.offsetLeft;
      },
      clientWidth: function() {
        return this.native.clientWidth;
      },
      clientHeight: function() {
        return this.native.clientHeight;
      },
      scrollWidth: function() {
        return this.native.scrollWidth;
      },
      scrollHeight: function() {
        return this.native.scrollHeight;
      },
      scrollTop: function() {
        return this.native.scrollTop;
      },
      scrollLeft: function() {
        return this.native.scrollLeft;
      },
      currentTime: function() {
        return this.native.currentTime || 0;
      },
      duration: function() {
        return this.native.duration || 0;
      },
      paused: function() {
        return this.native.paused !== void 0 ? this.native.paused : !0;
      },
      ended: function() {
        return this.native.ended || !1;
      },
      muted: function() {
        return this.native.muted || !1;
      },
      volume: function() {
        return this.native.volume !== void 0 ? this.native.volume : 1;
      },
      loop: function() {
        return this.native.loop || !1;
      },
      autoplay: function() {
        return this.native.autoplay || !1;
      },
      controls: function() {
        return this.native.controls || !1;
      },
      playbackRate: function() {
        return this.native.playbackRate !== void 0 ? this.native.playbackRate : 1;
      },
      defaultPlaybackRate: function() {
        return this.native.defaultPlaybackRate !== void 0 ? this.native.defaultPlaybackRate : 1;
      },
      currentSrc: function() {
        return this.native.currentSrc || "";
      },
      readyState: function() {
        return this.native.readyState || 0;
      },
      networkState: function() {
        return this.native.networkState || 0;
      },
      seeking: function() {
        return this.native.seeking || !1;
      },
      preload: function() {
        return this.native.preload || "auto";
      },
      poster: function() {
        return this.native.poster || "";
      },
      videoWidth: function() {
        return this.native.videoWidth || 0;
      },
      videoHeight: function() {
        return this.native.videoHeight || 0;
      }
    },
    __id_524 = {
      innerText: function(__id_525) {
        this.native.innerText = e.slice(0, 1e3);
      },
      innerHTML: function(__id_526) {
        throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.");
      },
      id: function(__id_527) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.id = e, __id_4.settings.logCalls && console.log(r.domain, "set id", this, e);
      },
      className: function(__id_528) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.className = e, __id_4.settings.logCalls && console.log(r.domain, "set className", this, e);
      },
      src: function(__id_529) {
        this.native.src = __id_515(e), __id_4.settings.logCalls && console.log(r.domain, "set src", this, e);
      },
      href: function(__id_530) {
        this.native.href = this.native.tagName === "A" ? e : __id_515(e), __id_4.settings.logCalls && console.log(r.domain, "set href", this, e);
      },
      hidden: function(__id_531) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.hidden = !!e;
      },
      disabled: function(__id_532) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.disabled = !!e;
      },
      checked: function(__id_533) {
        this.native.checked = !!e;
      },
      selected: function(__id_534) {
        this.native.selected = !!e;
      },
      readOnly: function(__id_535) {
        this.native.readOnly = !!e;
      },
      required: function(__id_536) {
        this.native.required = !!e;
      },
      draggable: function(__id_537) {
        this.native.draggable = !!e;
      },
      title: function(__id_538) {
        this.native.title = String(e).slice(0, 1e3);
      },
      alt: function(__id_539) {
        this.native.alt = String(e).slice(0, 1e3);
      },
      name: function(__id_540) {
        this.native.name = String(e).slice(0, 100);
      },
      type: function(__id_541) {
        this.native.type = String(e).slice(0, 50);
      },
      value: function(__id_542) {
        this.native.value = String(e).slice(0, 1e4);
      },
      placeholder: function(__id_543) {
        this.native.placeholder = String(e).slice(0, 500);
      },
      tabIndex: function(__id_544) {
        this.native.tabIndex = parseInt(e) || 0;
      },
      scrollTop: function(__id_545) {
        this.native.scrollTop = e;
      },
      scrollLeft: function(__id_546) {
        this.native.scrollLeft = e;
      },
      currentTime: function(__id_547) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(e) || 0));
      },
      muted: function(__id_548) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!e);
      },
      volume: function(__id_549) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(e) || 0)));
      },
      loop: function(__id_550) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!e);
      },
      autoplay: function(__id_551) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!e);
      },
      controls: function(__id_552) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!e);
      },
      playbackRate: function(__id_553) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(.25, Math.min(4, Number(e) || 1)));
      },
      defaultPlaybackRate: function(__id_554) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(.25, Math.min(4, Number(e) || 1)));
      },
      preload: function(__id_555) {
        if (this.native instanceof HTMLMediaElement) {
          let __id_556 = ["none", "metadata", "auto"];
          this.native.preload = __id_556.includes(e) ? e : "auto";
        }
      },
      poster: function(__id_557) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __id_515(e));
      }
    };
  for (let [__id_558, __id_559] of Object.entries(__id_522)) {
    let __id_560 = {
      get: t.createNativeFunction(__id_559)
    };
    __id_524[__id_558] && (__id_560.set = t.createNativeFunction(__id_524[__id_558])), t.setProperty(__id_514, __id_558, Interpreter.VALUE_IN_DESCRIPTOR, __id_560);
  }
  let __id_561 = {
    getAttributeNames: function() {
      let __id_562 = Array.from(this.native.getAttributeNames()),
        __id_563 = t.createObjectProto(t.ARRAY_PROTO);
      for (let __id_564 = 0; __id_564 < __id_562.length; __id_564++) t.setProperty(__id_563, __id_564, __id_562[__id_564]);
      return t.setProperty(__id_563, "length", __id_562.length), __id_563;
    },
    getAttribute: function(__id_565) {
      return this.native.getAttribute(e);
    },
    setAttribute: function(__id_566, __id_567) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (e = String(e).toLowerCase(), o = String(o), __id_4.settings.logCalls && console.log(r.domain, "setAttribute", this, e, o), e === "style" && o.includes("animation-play-state") && o.includes("!important")) throw new Error("Cannot set animation-play-state to !important");
      if (e === "src" || e === "poster" || e === "data" || this.native.tagName !== "A" && e === "href") {
        this.native.setAttribute(e, __id_515(o));
        return;
      }
      if (e === "autoplay") throw new Error("autoplay is not allowed");
      if (e === "srcset") throw new Error("srcset is not allowed");
      if (e === "action" || e === "formaction") throw new Error("action and formaction are not allowed");
      if (e.startsWith("on")) throw new Error("Event handlers are not allowed. Use addEventListener instead.");
      if (e === "width" || e === "height") {
        let __id_568 = parseFloat(o);
        if (isNaN(__id_568) || __id_568 < 0 || __id_568 > 4096) throw new Error("Invalid width or height");
      }
      this.native.setAttribute(e, o);
    },
    focus: function() {
      this.native.focus();
    },
    blur: function() {
      this.native.blur();
    },
    click: function() {
      this.native.click();
    },
    scrollIntoView: function(__id_569) {
      e && typeof e == "object" ? this.native.scrollIntoView(t.pseudoToNative(e)) : this.native.scrollIntoView(e);
    },
    scrollTo: function(__id_570, __id_571) {
      this.native.scrollTo(e, o);
    },
    scrollBy: function(__id_572, __id_573) {
      this.native.scrollBy(e, o);
    },
    removeAttribute: function(__id_574) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (e = String(e).toLowerCase(), e === "target") throw new Error("removing target is not allowed");
      __id_4.settings.logCalls && console.log(r.domain, "removeAttribute", this, e), this.native.removeAttribute(e);
    },
    hasAttribute: function(__id_575) {
      return this.native.hasAttribute(e);
    },
    querySelector: function(__id_576) {
      let __id_577 = this.native.querySelector(e);
      return __id_476(__id_485(__id_577));
    },
    querySelectorAll: function(__id_578) {
      let __id_579 = Array.from(this.native.querySelectorAll(e)).filter(__id_483);
      return __id_487(__id_579);
    },
    getElementsByClassName: function(__id_580) {
      let __id_581 = Array.from(this.native.getElementsByClassName(e)).filter(__id_483);
      return __id_487(__id_581);
    },
    getElementsByTagName: function(__id_582) {
      let __id_583 = Array.from(this.native.getElementsByTagName(e)).filter(__id_483);
      return __id_487(__id_583);
    },
    closest: function(__id_584) {
      let __id_585 = this.native.closest(e);
      for (; __id_585 && !l.contains(__id_585);) __id_585 = null;
      return __id_476(__id_585);
    },
    matches: function(__id_586) {
      return this.native.matches(e);
    },
    classList: function() {
      if (this.native.className === "tile-body") throw new Error("No access.");
      let __id_587 = this.native.classList;
      return t.nativeToPseudo({
        add: (...__id_588) => __id_587.add(...__id_588),
        remove: (...__id_589) => __id_587.remove(...__id_589),
        toggle: (__id_590, __id_591) => __id_587.toggle(__id_590, __id_591),
        contains: __id_592 => __id_587.contains(__id_592),
        replace: (__id_593, __id_594) => __id_587.replace(__id_593, __id_594)
      });
    },
    getBoundingClientRect: function() {
      let __id_595 = this.native.getBoundingClientRect();
      return t.nativeToPseudo({
        __id_492: __id_595.__id_492,
        __id_476: __id_595.__id_476,
        width: __id_595.width,
        height: __id_595.height,
        top: __id_595.top,
        right: __id_595.right,
        bottom: __id_595.bottom,
        left: __id_595.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement)) return t.createObjectProto(t.OBJECT_PROTO);
      if (!this.native.isConnected) throw new Error("Element is not connected to the DOM. Append it to the DOM before playing.");
      let __id_596 = t.createObjectProto(t.OBJECT_PROTO),
        __id_597 = this,
        __id_598 = null,
        __id_599 = null;
      return __id_4.settings.logCalls && console.log(r.domain, "play", this), t.setProperty(__id_596, "then", t.createNativeFunction(function(__id_600) {
        return __id_598 = S, __id_596;
      })), t.setProperty(__id_596, "catch", t.createNativeFunction(function(__id_601) {
        return __id_599 = S, __id_596;
      })), __id_597.native.play().then(() => {
        __id_598 && __id_467(__id_598, t.nativeToPseudo(void 0));
      }).catch(__id_602 => {
        __id_599 && __id_467(__id_599, t.nativeToPseudo({
          message: S.message,
          name: S.name
        }));
      }), __id_596;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__id_603) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(e || "")) : "";
    },
    fastSeek: function(__id_604) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == "function" && this.native.fastSeek(Math.max(0, Number(e) || 0));
    },
    getAnimations: function(__id_605) {
      if (!this.native.getAnimations) return __id_487([]);
      let __id_606 = e ? {
          subtree: !!t.pseudoToNative(e)?.subtree
        } : {},
        __id_607 = this.native.getAnimations(__id_606),
        __id_608 = t.createObjectProto(t.ARRAY_PROTO);
      for (let __id_609 = 0; __id_609 < __id_607.length; __id_609++) __id_608.properties[__id_609] = __id_610(__id_607[__id_609]);
      return t.setProperty(__id_608, "length", __id_607.length), __id_608;
    }
  };
  for (let [__id_611, __id_612] of Object.entries(__id_561)) t.setProperty(__id_514, __id_611, t.createNativeFunction(__id_612));

  function __id_610(__id_613) {
    let __id_614 = t.createObjectProto(t.OBJECT_PROTO);
    return t.setProperty(__id_614, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.id;
      })
    }), t.setProperty(__id_614, "playState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.playState;
      })
    }), t.setProperty(__id_614, "pending", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.pending;
      })
    }), t.setProperty(__id_614, "replaceState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.replaceState;
      })
    }), t.setProperty(__id_614, "currentTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.currentTime;
      }),
      set: t.createNativeFunction(function(__id_615) {
        e.currentTime = a;
      })
    }), t.setProperty(__id_614, "playbackRate", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.playbackRate;
      }),
      set: t.createNativeFunction(function(__id_616) {
        e.playbackRate = Math.max(-10, Math.min(10, Number(a) || 1));
      })
    }), t.setProperty(__id_614, "startTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.startTime;
      }),
      set: t.createNativeFunction(function(__id_617) {
        e.startTime = a;
      })
    }), t.setProperty(__id_614, "play", t.createNativeFunction(function() {
      e.play();
    })), t.setProperty(__id_614, "pause", t.createNativeFunction(function() {
      e.pause();
    })), t.setProperty(__id_614, "cancel", t.createNativeFunction(function() {
      e.cancel();
    })), t.setProperty(__id_614, "finish", t.createNativeFunction(function() {
      e.finish();
    })), t.setProperty(__id_614, "reverse", t.createNativeFunction(function() {
      e.reverse();
    })), t.setProperty(__id_614, "updatePlaybackRate", t.createNativeFunction(function(__id_618) {
      e.updatePlaybackRate(Math.max(-10, Math.min(10, Number(a) || 1)));
    })), __id_614;
  }

  function __id_619(__id_620) {
    let __id_621 = t.createObjectProto(t.OBJECT_PROTO),
      __id_622 = e ? e.length : 0;
    return t.setProperty(__id_621, "length", __id_622), t.setProperty(__id_621, "start", t.createNativeFunction(function(__id_623) {
      if (!e || g < 0 || g >= e.length) throw new Error("Index out of bounds");
      return e.start(g);
    })), t.setProperty(__id_621, "end", t.createNativeFunction(function(__id_624) {
      if (!e || g < 0 || g >= e.length) throw new Error("Index out of bounds");
      return e.end(g);
    })), __id_621;
  }
  t.setProperty(__id_514, "buffered", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_619(this.native.buffered) : __id_619(null);
    })
  }), t.setProperty(__id_514, "played", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_619(this.native.played) : __id_619(null);
    })
  }), t.setProperty(__id_514, "seekable", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_619(this.native.seekable) : __id_619(null);
    })
  }), t.setProperty(__id_514, "classList", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_625 = this.native.classList,
        __id_626 = t.nativeToPseudo({});
      return t.setProperty(__id_626, "add", t.createNativeFunction(function(...__id_627) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        __id_625.add(...a);
      })), t.setProperty(__id_626, "remove", t.createNativeFunction(function(...__id_628) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        __id_625.remove(...a);
      })), t.setProperty(__id_626, "toggle", t.createNativeFunction(function(__id_629, __id_630) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return __id_625.toggle(a, g);
      })), t.setProperty(__id_626, "contains", t.createNativeFunction(function(__id_631) {
        return __id_625.contains(a);
      })), t.setProperty(__id_626, "replace", t.createNativeFunction(function(__id_632, __id_633) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return __id_625.replace(a, g);
      })), __id_626;
    })
  }), t.setProperty(__id_514, "style", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_634 = this.native.style,
        __id_635 = t.nativeToPseudo({}),
        __id_636 = ["color", "backgroundColor", "width", "height", "margin", "padding", "border", "display", "position", "top", "left", "right", "bottom", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "opacity", "visibility", "overflow", "zIndex", "transform", "transition", "animation", "flexDirection", "justifyContent", "alignItems", "gap", "gridTemplateColumns", "gridTemplateRows"];
      for (let __id_637 of __id_636) t.setProperty(__id_635, __id_637, Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_634[__id_637];
        }),
        set: t.createNativeFunction(function(__id_638) {
          __id_634[__id_637] = S, __id_4.settings.logCalls && console.log(r.domain, "set style", this, __id_637, S);
        })
      });
      return t.setProperty(__id_635, "cssText", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return __id_634.cssText;
        }),
        set: t.createNativeFunction(function(__id_639) {
          __id_634.cssText = g, __id_4.settings.logCalls && console.log(r.domain, "set cssText", this, g);
        })
      }), t.setProperty(__id_635, "setProperty", t.createNativeFunction(function(__id_640, __id_641, __id_642) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        __id_634.setProperty(g, S, L), __id_4.settings.logCalls && console.log(r.domain, "setProperty", this, g, S, L);
      })), t.setProperty(__id_635, "getPropertyValue", t.createNativeFunction(function(__id_643) {
        return __id_634.getPropertyValue(g);
      })), t.setProperty(__id_635, "removeProperty", t.createNativeFunction(function(__id_644) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        return __id_4.settings.logCalls && console.log(r.domain, "removeProperty", this, g), __id_634.removeProperty(g);
      })), __id_635;
    })
  }), t.setProperty(__id_514, "dataset", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let __id_645 = this.native.dataset,
        __id_646 = t.nativeToPseudo({});
      for (let __id_647 in __id_645) t.setProperty(__id_646, __id_647, __id_645[__id_647]);
      return t.setProperty(__id_646, "get", t.createNativeFunction(function(__id_648) {
        return __id_645[a];
      })), t.setProperty(__id_646, "set", t.createNativeFunction(function(__id_649, __id_650) {
        __id_645[a] = String(g).slice(0, 1e3), __id_4.settings.logCalls && console.log(r.domain, "set dataset", this, a, g);
      })), t.setProperty(__id_646, "delete", t.createNativeFunction(function(__id_651) {
        delete __id_645[a], __id_4.settings.logCalls && console.log(r.domain, "delete dataset", this, a);
      })), t.setProperty(__id_646, "has", t.createNativeFunction(function(__id_652) {
        return a in __id_645;
      })), __id_646;
    })
  }), t.setProperty(__id_514, "offsetParent", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return __id_476(__id_485(this.native.offsetParent));
    })
  });
  let __id_653 = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "focusin", "focusout", "input", "change", "submit", "reset", "touchstart", "touchend", "touchmove", "touchcancel", "wheel", "scroll", "resize", "dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop", "animationstart", "animationend", "animationiteration", "transitionstart", "transitionend", "transitioncancel", "contextmenu", "pointerdown", "pointerup", "pointermove", "pointerenter", "pointerleave", "pointerover", "pointerout", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];

  function __id_654(__id_655) {
    let __id_656 = t.nativeToPseudo({}),
      __id_657 = ["type", "bubbles", "cancelable", "defaultPrevented", "timeStamp"];
    for (let __id_658 of __id_657) t.setProperty(__id_656, __id_658, e[__id_658]);
    if (e instanceof MouseEvent || e instanceof PointerEvent) {
      let __id_659 = ["clientX", "clientY", "pageX", "pageY", "screenX", "screenY", "offsetX", "offsetY", "movementX", "movementY", "button", "buttons", "altKey", "ctrlKey", "shiftKey", "metaKey"];
      for (let __id_660 of __id_659) t.setProperty(__id_656, __id_660, e[__id_660]);
    }
    if (e instanceof KeyboardEvent) {
      let __id_661 = ["key", "code", "keyCode", "charCode", "altKey", "ctrlKey", "shiftKey", "metaKey", "repeat"];
      for (let __id_662 of __id_661) t.setProperty(__id_656, __id_662, e[__id_662]);
    }
    return typeof TouchEvent == "function" && e instanceof TouchEvent && (t.setProperty(__id_656, "touches", t.nativeToPseudo({
      length: e.touches.length
    })), t.setProperty(__id_656, "changedTouches", t.nativeToPseudo({
      length: e.changedTouches.length
    }))), typeof WheelEvent == "function" && e instanceof WheelEvent && (t.setProperty(__id_656, "deltaX", e.deltaX), t.setProperty(__id_656, "deltaY", e.deltaY), t.setProperty(__id_656, "deltaZ", e.deltaZ), t.setProperty(__id_656, "deltaMode", e.deltaMode)), e.target && __id_483(e.target) && t.setProperty(__id_656, "target", __id_476(e.target)), e.currentTarget && __id_483(e.currentTarget) && t.setProperty(__id_656, "currentTarget", __id_476(e.currentTarget)), t.setProperty(__id_656, "preventDefault", t.createNativeFunction(function() {
      e.preventDefault();
    })), t.setProperty(__id_656, "stopPropagation", t.createNativeFunction(function() {
      e.stopPropagation();
    })), t.setProperty(__id_656, "stopImmediatePropagation", t.createNativeFunction(function() {
      e.stopImmediatePropagation();
    })), __id_656;
  }
  t.setProperty(__id_514, "addEventListener", t.createNativeFunction(function(__id_663, __id_664) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    if (e = e.toLowerCase(), !__id_653.includes(e)) throw new Error(`Event type "${e}" is not allowed`);
    __id_4.settings.logCalls && console.log(r.domain, "addEventListener", this, e, o);
    let __id_665 = this.native;
    __id_464.has(__id_665) || __id_464.set(__id_665, new Map());
    let __id_666 = __id_464.get(__id_665);
    __id_666.has(e) || __id_666.set(e, []);
    let __id_667 = __id_666.get(e);
    if (__id_667.length >= __id_463) throw new Error(`Maximum listeners (${__id_463}) reached for event "${e}"`);
    if (__id_667.some(__id_668 => __id_668.pseudo === o)) return;
    let __id_669 = function(__id_670) {
      let __id_671 = __id_654(H);
      __id_467(o, __id_671);
    };
    __id_667.push({
      pseudo: o,
      native: __id_669
    }), __id_665.addEventListener(e, __id_669);
  })), t.setProperty(__id_514, "removeEventListener", t.createNativeFunction(function(__id_672, __id_673) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    __id_4.settings.logCalls && console.log(r.domain, "removeEventListener", this, e, o), e = e.toLowerCase();
    let __id_674 = this.native;
    if (!__id_464.has(__id_674)) return;
    let __id_675 = __id_464.get(__id_674);
    if (!__id_675.has(e)) return;
    let __id_676 = __id_675.get(e),
      __id_677 = __id_676.findIndex(__id_678 => __id_678.pseudo === o);
    __id_677 !== -1 && (__id_674.removeEventListener(e, __id_676[__id_677].native), __id_676.splice(__id_677, 1));
  }));
  let __id_679 = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "input", "change", "submit", "touchstart", "touchend", "touchmove", "wheel", "scroll", "contextmenu", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];
  for (let __id_680 of __id_679) {
    let __id_681 = "on" + __id_680;
    t.setProperty(__id_514, __id_681, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        let __id_682 = this.native;
        if (!__id_464.has(__id_682)) return null;
        let __id_683 = __id_464.get(__id_682),
          __id_684 = `__${__id_681}`;
        return __id_683.get(__id_684) || null;
      }),
      set: t.createNativeFunction(function(__id_685) {
        let __id_686 = this.native;
        __id_464.has(__id_686) || __id_464.set(__id_686, new Map());
        let __id_687 = __id_464.get(__id_686),
          __id_688 = `__${__id_681}`;
        __id_4.settings.logCalls && console.log(r.domain, "setOn" + __id_680, this, a);
        let __id_689 = __id_687.get(__id_688 + "_native");
        if (__id_689 && (__id_686.removeEventListener(__id_680, __id_689), __id_687.delete(__id_688), __id_687.delete(__id_688 + "_native")), a && typeof a == "object") {
          let __id_690 = function(__id_691) {
            let __id_692 = __id_654(gt);
            __id_467(a, __id_692);
          };
          __id_686.addEventListener(__id_680, __id_690), __id_687.set(__id_688, a), __id_687.set(__id_688 + "_native", __id_690);
        }
      })
    });
  }
  __id_5(t, u, r).extendElement(__id_514, __id_476), __id_263(t, u, r), __id_363(t, u, r.domain), __id_395(t, u, l, r);
  let __id_693 = t.nativeToPseudo({});
  t.setProperty(u, "document", __id_693);
  let __id_694 = {
    getElementById: function(__id_695) {
      let __id_696 = l.querySelector(`#${CSS.escape(e)}`);
      return __id_476(__id_696);
    },
    getElementsByClassName: function(__id_697) {
      let __id_698 = Array.from(l.getElementsByClassName(e));
      return __id_487(__id_698);
    },
    getElementsByTagName: function(__id_699) {
      let __id_700 = Array.from(l.getElementsByTagName(e));
      return __id_487(__id_700);
    },
    querySelector: function(__id_701) {
      return __id_476(l.querySelector(e));
    },
    querySelectorAll: function(__id_702) {
      let __id_703 = Array.from(l.querySelectorAll(e));
      return __id_487(__id_703);
    },
    createElement: function(__id_704) {
      if (typeof e != "string") throw new Error("Invalid tag");
      if (e = e.toLowerCase().trim(), ["script", "style", "iframe", "embed", "object", "frame", "frameset", "layer", "ilayer", "applet", "meta", "base", "link", "title", "source", "geolocation", "permission"].includes(e)) throw new Error("Creating " + e + " elements is not allowed");
      return __id_4.settings.logCalls && console.log(r.domain, "createElement", this, e), __id_476(document.createElement(e));
    },
    createTextNode: function(__id_705) {
      return __id_4.settings.logCalls && console.log(r.domain, "createTextNode", this, e), __id_476(document.createTextNode(e));
    }
  };
  for (let [__id_706, __id_707] of Object.entries(__id_694)) t.setProperty(__id_693, __id_706, t.createNativeFunction(__id_707));
  t.setProperty(__id_693, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return __id_4.settings.logCalls && console.log(r.domain, "get body", this), __id_476(l);
    })
  }), t.setProperty(__id_693, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return __id_4.settings.logCalls && console.log(r.domain, "get documentElement", this), __id_476(l);
    })
  });
  let __id_708 = t.nativeToPseudo({});
  t.setProperty(u, "location", __id_708), t.setProperty(__id_708, "href", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return `/t/${r.domain}${r.path}`;
    }),
    set: t.createNativeFunction(function(__id_709) {
      if (typeof e == "string") {
        __id_4.settings.logCalls && console.log(r.domain, "set href", this, e);
        try {
          let __id_710 = new URL(e, `http://${r.domain}`);
          if (__id_710.hostname && __id_710.hostname !== location.hostname) throw new Error("External URLs are not allowed");
          let __id_711 = __id_710.pathname + __id_710.search + __id_710.hash;
          if (__id_711.startsWith(`/t/${r.domain}/`) ? __id_711 = __id_711.substring(`/t/${r.domain}`.length) : __id_711 === `/t/${r.domain}` && (__id_711 = "/"), __id_711.startsWith("/") || (__id_711 = "/" + __id_711), __id_711.endsWith(".html") || __id_711 === "/" || __id_711 === "") r.fetchContent(__id_711 || "/index.html"), r.setActive(!0);
          else throw new Error("Only HTML files can be navigated to");
        } catch (__id_712) {
          if (o.message.includes("not allowed") || o.message.includes("Only HTML")) throw o;
          let __id_713 = e;
          if (__id_713.startsWith("/") || (__id_713 = "/" + __id_713), __id_713.endsWith(".html") || __id_713 === "/" || __id_713 === "") r.fetchContent(__id_713 || "/index.html").then(() => r.setActive(!0));
          else throw new Error("Only HTML files can be navigated to");
        }
      }
    })
  }), t.setProperty(__id_708, "reload", t.createNativeFunction(function() {
    r.fetchContent(r.path, !0).then(() => r.setActive(!0));
  }));
}
var __id_714 = {
    console: {
      log: function(...__id_715) {
        this.logCount++ > 1e3 || console.log(`[${this.tile.domain}]`, ...t);
      },
      error: function(...__id_716) {
        this.logCount++ > 1e3 || console.error(`[${this.tile.domain}]`, ...t);
      },
      warn: function(...__id_717) {
        this.logCount++ > 1e3 || console.warn(`[${this.tile.domain}]`, ...t);
      }
    },
    alert(__id_718) {
      this.alertCount++ > 10 || alert(`[${this.tile.domain}] ${t}`);
    },
    prompt(__id_719) {
      if (!(this.alertCount++ > 10)) return prompt(`[${this.tile.domain}] ${t}`);
    },
    confirm(__id_720) {
      if (!(this.alertCount++ > 10)) return confirm(`[${this.tile.domain}] ${t}`);
    },
    atob(__id_721) {
      return atob(t);
    },
    btoa(__id_722) {
      return btoa(t);
    }
  },
  __id_723 = class {
    constructor(__id_724) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = u, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter("", (__id_725, __id_726) => {
        let __id_727 = (__id_728, __id_729) => {
          for (let [__id_730, __id_731] of Object.entries(N))
            if (typeof __id_731 == "function") l.setProperty(m, __id_730, l.createNativeFunction(__id_731.bind(this)));
            else if (typeof __id_731 == "object" && __id_731 !== null) {
            let __id_732 = l.nativeToPseudo({});
            __id_727(__id_731, __id_732), l.setProperty(m, __id_730, __id_732);
          }
        };
        __id_727(__id_714, r), __id_456(l, r, this.tile.contentElement, this.tile), l.setProperty(r, "embedded", l.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __id_733 = new Set(),
        __id_734 = [this.interpreter.getStateStack()],
        __id_735 = 0;
      for (; __id_734.length;) {
        let __id_736 = __id_734.pop(),
          __id_737 = typeof __id_736;
        if (__id_735 += 8, __id_737 === "string" && !__id_733.has(__id_736)) __id_733.add(__id_736), __id_735 += __id_736.length * 2;
        else if (__id_737 === "object" && __id_736 !== null && !__id_733.has(__id_736)) {
          __id_733.add(__id_736);
          try {
            __id_734.push(...Object.keys(__id_736), ...Object.values(__id_736));
          } catch {}
        }
      }
      return __id_735;
    }
    start() {
      this.running || __id_4.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __id_738 = 0; __id_738 < 5e3; __id_738++) try {
            if (!this.interpreter.step()) {
              this.waitUntil = Date.now() + 50;
              break;
            }
            if (this.index++ % 500 === 0) {
              let __id_739 = this.roughValueMemorySize();
              if (__id_739 > 3e6) {
                this.sizeLimitReached = !0, this.stop(), console.log(`[${this.tile.domain}] Memory size limit reached: ${__id_739} bytes`);
                break;
              }
            }
          } catch (__id_740) {
            console.error(l), this.stop();
            break;
          }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__id_741) {
      __id_4.settings.disableJS || this.interpreter.appendCode(u);
    }
  },
  __id_742 = __id_723;
var __id_743 = document.getElementById("plot"),
  __id_744 = new CSSStyleSheet(),
  __id_745 = () => {
    __id_744.replaceSync(`
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
__id_745();
var __id_746 = new CSSStyleSheet();
__id_746.replaceSync(`
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
var __id_747 = class __id_748 {
  constructor(__id_749) {
    this.x = u.x ?? 0, this.y = u.y ?? 0, this.domain = u.domain, this.free = !u.domain, this.locked = !1, this.id = `${this.x},${this.y}`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = u.path || "/index.html", this.content = "", this.lastRender = 0, this.preview = u.nocontrols || !1, this.embed = u.embed || !1, this.container = u.container || __id_743, this.interpreter = null, this.render();
  }
  static toTilePosition(__id_750, __id_751) {
    return {
      x: Math.floor(u / 250),
      y: Math.floor(l / 250)
    };
  }
  render() {
    if (this.rendered || this.element) return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __id_752 = document.createElement("div");
    __id_752.classList.add("tile"), this.free && __id_752.classList.add("f"), this.preview ? __id_752.style.cssText = "width: 100%; height: 100%; position: relative;" : (__id_752.style.left = `${this.x * 250}px`, __id_752.style.top = `${this.y * 250}px`, this.x % 10 === 0 && __id_752.classList.add("b-left"), this.y % 10 === 0 && __id_752.classList.add("b-top")), this.element = __id_752;
    let __id_753 = document.createElement("div");
    __id_753.classList.add("tile-content"), this.preview && (__id_753.style.cssText = "width: 100%; height: 100%;"), __id_753.addEventListener("click", async __id_754 => {
      let __id_755 = h.composedPath()?.filter(__id_756 => __id_756 instanceof Element);
      if (!__id_755) return;
      let __id_757 = __id_755.findIndex(__id_758 => __id_758.isSameNode(__id_753));
      if (__id_757 === -1) return;
      let __id_759 = __id_755.slice(0, __id_757).find(__id_760 => __id_760.tagName === "A");
      if (__id_759) {
        h.preventDefault();
        try {
          let __id_761 = new URL(__id_759.href);
          if (__id_761.hostname !== location.hostname) {
            let __id_762 = document.createElement("a");
            __id_762.href = __id_759.href, __id_762.target = "_blank", __id_762.click();
            return;
          }
          let __id_763 = __id_761.pathname;
          if (__id_763.startsWith(`/t/${this.domain}/`) || (__id_763 = `/t/${this.domain}/${__id_763}`.replaceAll("//", "/")), __id_763.startsWith(`/t/${this.domain}`) && (__id_763.endsWith(".html") || __id_763 === `/t/${this.domain}/` || __id_763 === `/t/${this.domain}`)) await this.fetchContent(__id_763.replace(`/t/${this.domain}`, "")), this.setActive(!0);
          else {
            let __id_764 = document.createElement("a");
            __id_764.href = __id_759.href, __id_764.target = "_blank", __id_764.click();
          }
        } catch (__id_765) {
          console.error(R);
        }
      }
    }), this.shadow = __id_753.attachShadow({
      mode: "open"
    });
    let __id_766 = document.createElement("div");
    __id_766.className = "tile-body", this.embed && __id_766.classList.add("embedded"), __id_766.style = "width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;", this.contentElement = __id_766, this.contentElement.innerHTML = this.preview ? "Loading preview..." : `Loading ${this.x}, ${this.y}...`, this.shadow.appendChild(__id_766), __id_752.appendChild(__id_753), this.fonts = document.createElement("style"), __id_752.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__id_752), __id_4.plot?.lockCache[this.x + "," + this.y] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__id_767, __id_768 = !1) {
    u.startsWith("/") || (u = "/" + u);
    let __id_769 = this.free ? `<div class="free">
                <p>${this.locked ? "Locked tile" : "Free tile"} ${this.x}, ${this.y}</p>
            </div>` : this.path === u && this.content && !l ? this.content : await fetch(`/t/${this.domain}${u}`).then(__id_770 => __id_770.text()).catch(__id_771 => "<p>Error loading tile</p>");
    this.free ? this.shadow.adoptedStyleSheets = [__id_746] : this.shadow.adoptedStyleSheets = [__id_744], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = u, this.contentElement.innerHTML = __id_769, this.content = __id_769;
    let __id_772 = this.contentElement.querySelectorAll("style");
    this.fonts.textContent = "";
    let __id_773 = 0;
    for (let __id_774 of __id_772) {
      if (__id_773 >= 3) break;
      let __id_775 = __id_774.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__id_775)
        for (let __id_776 of __id_775) {
          if (__id_773 >= 3) break;
          this.fonts.textContent += __id_776, __id_773++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __id_777 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __id_778 of __id_777) this.interpreter.runCode(__id_778.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__id_779) {
    if (this.element && (u && (this.interpreter || (this.interpreter = new __id_742(this), this.executeScripts()), this.interpreter.start()), u !== this.active)) {
      if (this.active = u, u) {
        if (this.element.classList.add("active"), this.contentElement.classList.add("active"), !this.preview && __id_4.ui) {
          let __id_780 = __id_4.ui.createVoteMenu(this);
          __id_780 && this.element.appendChild(__id_780);
          let __id_781 = __id_4.ui.createTileControl(this);
          if (this.element.appendChild(__id_781), __id_4.user?.admin || __id_4.user?.moderator) {
            let __id_782 = __id_4.ui.createAdminControl(this);
            this.element.appendChild(__id_782);
          }
          __id_4.plot?.activeTile && __id_4.plot.activeTile.setActive(!1), __id_4.plot && (__id_4.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __id_783 = this.contentElement.querySelectorAll("audio, video");
        for (let __id_784 of __id_783) __id_784.dataset.webtilesPaused === "true" && (__id_784.dataset.webtilesPaused = !1, __id_784.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __id_4.plot.activeTile = null, this.element.classList.remove("active"), this.contentElement.classList.remove("active"), this.preview || (this.element.querySelector(".tile-vote-menu")?.remove(), this.element.querySelector(".tile-info")?.remove(), this.element.querySelector(".tile-admin-panel")?.remove(), __id_4.plot && (__id_4.plot.activeTile = null)), __id_748.clearClanBorders();
        let __id_785 = this.contentElement.querySelectorAll("audio, video");
        for (let __id_786 of __id_785) __id_786.paused || (__id_786.dataset.webtilesPaused = !0, __id_786.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain)) try {
      let __id_787 = await (await __id_4.api.makeRequest(`/api/clans/tile-clan?domain=${encodeURIComponent(this.domain)}`)).json();
      if (!__id_787.success || !__id_787.clan) return;
      let __id_788 = __id_787.clan.members;
      if (!__id_788 || __id_788.length <= 1) return;
      let __id_789 = new Set(__id_788.map(__id_790 => `${__id_790.x},${__id_790.y}`));
      for (let __id_791 of __id_788) {
        let __id_792 = __id_4.plot.tiles[`${__id_791.x},${__id_791.y}`];
        if (!__id_792?.element) continue;
        __id_792.element.classList.add("clan-highlight");
        let __id_793 = __id_789.has(`${__id_791.x},${__id_791.y - 1}`),
          __id_794 = __id_789.has(`${__id_791.x},${__id_791.y + 1}`),
          __id_795 = __id_789.has(`${__id_791.x - 1},${__id_791.y}`),
          __id_796 = __id_789.has(`${__id_791.x + 1},${__id_791.y}`);
        if (!__id_793) {
          let __id_797 = document.createElement("div");
          __id_797.className = "clan-border clan-border-top", __id_792.element.appendChild(__id_797);
        }
        if (!__id_794) {
          let __id_798 = document.createElement("div");
          __id_798.className = "clan-border clan-border-bottom", __id_792.element.appendChild(__id_798);
        }
        if (!__id_795) {
          let __id_799 = document.createElement("div");
          __id_799.className = "clan-border clan-border-left", __id_792.element.appendChild(__id_799);
        }
        if (!__id_796) {
          let __id_800 = document.createElement("div");
          __id_800.className = "clan-border clan-border-right", __id_792.element.appendChild(__id_800);
        }
      }
    } catch (__id_801) {
      console.error("Failed to fetch clan borders:", u);
    }
  }
  static clearClanBorders() {
    if (__id_4.plot?.tiles)
      for (let __id_802 of Object.values(__id_4.plot.tiles)) __id_802.element && (__id_802.element.classList.remove("clan-highlight"), __id_802.element.querySelectorAll(".clan-border").forEach(__id_803 => __id_803.remove()));
  }
  setDomain(__id_804) {
    this.domain = u, this.free = !1, this.content = "", this.element && this.element.classList.remove("f"), this.fetchContent("/index.html");
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = "", this.element && this.element.classList.add("f"), this.fetchContent("/index.html");
  }
  setLocked(__id_805) {
    this.locked = u, this.element && this.element.classList.toggle("locked", u), this.fetchContent("/index.html", !0);
  }
};
var __id_806 = JSON.parse(document.getElementById("embed-data").textContent),
  __id_807 = document.getElementById("tile");
window.tile = new __id_747({
  domain: __id_806.domain,
  container: __id_807,
  nocontrols: !0,
  embed: !0,
  path: "/index.html",
  x: __id_806.x,
  y: __id_806.y
});
window.onmessage = __id_808 => {
  t.data.type === "update" && (window.tile.unrender(), __id_807.innerHTML = "", window.tile = new __id_747({
    domain: __id_806.domain,
    container: __id_807,
    nocontrols: !0,
    embed: !0,
    path: t.data.path,
    x: __id_806.x,
    y: __id_806.y
  }));
};