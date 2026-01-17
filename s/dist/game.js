/* 01d7227461d151b154ae891fbbc330a521645757a38c452845aec354895a33fb */
var __id_0 = Object.defineProperty;
var __id_1 = (__id_2, __id_3, __id_4) => __id_3 in __id_2 ? __id_0(__id_2, __id_3, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: __id_4
}) : __id_2[__id_3] = __id_4;
var __id_5 = (__id_6, __id_7, __id_8) => __id_1(__id_6, typeof __id_7 != "symbol" ? __id_7 + "" : __id_7, __id_8);
var __id_9 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === "true",
      disableJS: localStorage.disableJS === "true"
    }
  },
  __id_10 = document.getElementById("user-data");
if (__id_10) try {
  let __id_11 = JSON.parse(__id_10.textContent);
  __id_11 && __id_11.email_verified && (__id_9.user = __id_11);
} catch (__id_12) {
  console.error(e);
}
var __id_13 = __id_9;
var __id_14 = class __id_15 {
  static init() {
    __id_15.container || (__id_15.container = document.createElement("div"), __id_15.container.id = "modal-container", __id_15.container.className = "modal-overlay", __id_15.container.addEventListener("click", __id_16 => {
      t.target === __id_15.container && __id_15.activeModal && __id_15.activeModal.close();
    }), document.body.appendChild(__id_15.container));
  }
  constructor(__id_17 = {}) {
    this.title = t.title || "", this.content = t.content || "", this.warning = t.warning || null, this.buttons = t.buttons || [], this.onClose = t.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(__id_18) {
    let __id_19 = document.createElement("button");
    return __id_19.className = `modal-btn modal-btn-${t.type || "default"}`, __id_19.textContent = t.text, t.disabled && (__id_19.disabled = !0), __id_19.addEventListener("click", async () => {
      t.onClick && (await t.onClick(this, __id_19));
    }), this._buttonElements.set(t.id || t.text, __id_19), __id_19;
  }
  _build() {
    let __id_20 = document.createElement("div");
    if (__id_20.className = "modal-content", this.title) {
      let __id_21 = document.createElement("h3");
      __id_21.className = "modal-title", __id_21.textContent = this.title, __id_20.appendChild(__id_21);
    }
    if (this.content) {
      let __id_22 = document.createElement("div");
      __id_22.className = "modal-body", typeof this.content == "string" ? __id_22.innerHTML = this.content : this.content instanceof HTMLElement && __id_22.appendChild(this.content), __id_20.appendChild(__id_22);
    }
    if (this._warningEl = document.createElement("div"), this._warningEl.className = "modal-warning", this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = "block") : this._warningEl.style.display = "none", __id_20.appendChild(this._warningEl), this.buttons.length > 0) {
      let __id_23 = document.createElement("div");
      __id_23.className = "modal-actions";
      for (let __id_24 of this.buttons) __id_23.appendChild(this._createButton(__id_24));
      __id_20.appendChild(__id_23);
    }
    return this.element = __id_20, __id_20;
  }
  open() {
    return __id_15.init(), __id_15.activeModal && __id_15.activeModal.close(), this._build(), __id_15.container.innerHTML = "", __id_15.container.appendChild(this.element), __id_15.container.classList.add("active"), __id_15.activeModal = this, __id_13.camera && __id_13.camera.setZoomEnabled(!1), this;
  }
  close() {
    return __id_15.container && __id_15.container.classList.remove("active"), __id_15.activeModal = null, this._buttonElements.clear(), __id_13.camera && __id_13.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(__id_25) {
    let __id_26 = this.element?.querySelector(".modal-body");
    return __id_26 && (typeof t == "string" ? __id_26.innerHTML = t : t instanceof HTMLElement && (__id_26.innerHTML = "", __id_26.appendChild(t))), this.content = t, this;
  }
  setWarning(__id_27) {
    return this._warningEl && (t ? (this._warningEl.innerHTML = t, this._warningEl.style.display = "block") : this._warningEl.style.display = "none"), this.warning = t, this;
  }
  getButton(__id_28) {
    return this._buttonElements.get(t);
  }
  setButtonLoading(__id_29, __id_30, __id_31) {
    let __id_32 = this.getButton(t);
    return __id_32 ? (n ? (__id_32._originalText = __id_32._originalText || __id_32.textContent, __id_32.textContent = i || "Loading...", __id_32.disabled = !0) : (__id_32.textContent = __id_32._originalText || __id_32.textContent, __id_32.disabled = !1), this) : this;
  }
};
__id_5(__id_14, "container", null), __id_5(__id_14, "activeModal", null);
var __id_33 = __id_14;

function __id_34() {
  return document.querySelector('meta[name="turnstile-sitekey"]')?.content || "";
}
var __id_35 = __id_34(),
  __id_36 = localStorage.getItem("captchaToken"),
  __id_37 = parseInt(localStorage.getItem("captchaExpiresAt") || "0"),
  __id_38 = null,
  __id_39 = [],
  __id_40 = !1,
  __id_41 = 0,
  __id_42 = 5e3;
__id_37 < Date.now() && (__id_36 = null, localStorage.removeItem("captchaToken"), localStorage.removeItem("captchaExpiresAt"));

function __id_43() {
  __id_36 = null, localStorage.removeItem("captchaToken"), localStorage.removeItem("captchaExpiresAt");
}

function __id_44(__id_45, __id_46) {
  __id_36 = e, __id_37 = t, localStorage.setItem("captchaToken", e), localStorage.setItem("captchaExpiresAt", t);
}

function __id_47() {
  return __id_40 ? !0 : window.turnstile ? (__id_40 = !0, !0) : !1;
}

function __id_48(__id_49, __id_50) {
  if (!__id_47()) return console.error("[Captcha] Turnstile not ready"), !1;
  let __id_51 = __id_34() || __id_35 || "";
  if (!__id_51) return !0;
  let __id_52 = typeof e == "string" ? document.querySelector(e) : e;
  if (!__id_52) return console.error("[Captcha] Container not found:", e), !1;
  __id_52.innerHTML = "";
  let __id_53 = window.turnstile;
  return __id_53.render(__id_52, {
    sitekey: __id_51,
    callback: async function(__id_54) {
      let __id_55 = document.getElementById("loading-text");
      __id_55 && (__id_55.textContent = "Verifying...");
      try {
        let __id_56 = await (await fetch("/api/captcha/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            turnstileToken: r
          })
        })).json();
        if (__id_56.success) {
          if (__id_44(__id_56.token, __id_56.expiresAt), __id_55 && (__id_55.textContent = "Loading..."), t && __id_38) {
            __id_38.close(), __id_38 = null;
            let __id_57 = [...__id_39];
            __id_39 = [], __id_57.forEach(__id_58 => __id_58());
          }
        } else __id_55 && (__id_55.textContent = "Verification failed. Please try again."), __id_53.reset(__id_52);
      } catch (__id_59) {
        console.error("[Captcha] Verification error:", p), __id_55 && (__id_55.textContent = "Verification failed. Please try again."), __id_53.reset(__id_52);
      }
    },
    "error-callback": function() {
      let __id_60 = document.getElementById("loading-text");
      __id_60 && (__id_60.textContent = "Captcha failed. Please refresh.");
    },
    "expired-callback": function() {
      __id_53.reset(__id_52);
    }
  }), !0;
}

function __id_61() {
  if (__id_34()) return new Promise(__id_62 => {
    if (Date.now() - __id_41 < __id_42) {
      e();
      return;
    }
    if (__id_33.activeModal) {
      __id_39.push(e);
      return;
    }
    __id_41 = Date.now(), __id_39.push(e);
    let __id_63 = document.createElement("div");
    __id_63.id = "captcha-modal-turnstile", __id_63.style.display = "flex", __id_63.style.justifyContent = "center", __id_63.style.padding = "20px";
    let __id_64 = document.createElement("div"),
      __id_65 = document.createElement("p");
    if (__id_65.textContent = "Please complete the captcha to continue.", __id_64.appendChild(__id_65), __id_64.appendChild(__id_63), __id_38 = new __id_33({
        title: "Verification Required",
        content: __id_64,
        buttons: [{
          text: "Cancel",
          type: "cancel",
          onClick: __id_66 => {
            r.close(), __id_38 = null, __id_39 = [];
          }
        }],
        onClose: () => {
          __id_38 = null;
        }
      }), __id_38.open(), __id_47()) __id_48(__id_63, !0);
    else {
      let __id_67 = setInterval(() => {
        __id_47() && (clearInterval(__id_67), __id_48(__id_63, !0));
      }, 100);
      setTimeout(() => clearInterval(__id_67), 1e4);
    }
  });
}

function __id_68() {
  if (__id_36) return;
  let __id_69 = document.querySelector("#turnstile-container");
  if (__id_69)
    if (__id_47()) __id_48(__id_69, !1);
    else {
      let __id_70 = setInterval(() => {
        __id_47() && (clearInterval(__id_70), __id_36 || __id_48(__id_69, !1));
      }, 100);
      setTimeout(() => clearInterval(__id_70), 1e4);
    }
}
window.onTurnstileLoad = function() {
  __id_40 = !0, __id_36 || __id_68();
};
window.turnstile && (__id_40 = !0, __id_36 || __id_68());
__id_13.api = {
  getToken() {
    return __id_36;
  },
  getTokenExpiry() {
    return __id_37;
  },
  clearToken: __id_43,
  showCaptchaModal: __id_61,
  renderCaptchaOnLoadingScreen: __id_68,
  getTurnstileSiteKey: __id_34,
  async makeRequest(__id_71, __id_72 = {}) {
    let __id_73 = (t.method || "GET").toUpperCase();
    __id_73 !== "GET" && __id_36 && (t.headers = t.headers || {}, t.headers["X-Captcha-Token"] = __id_36);
    let __id_74 = await fetch(e, t);
    if (__id_74.status === 403) {
      let __id_75 = __id_74.clone();
      try {
        if ((await __id_75.json()).code === "CAPTCHA_REQUIRED") return __id_43(), await __id_61(), __id_73 !== "GET" && __id_36 && (t.headers = t.headers || {}, t.headers["X-Captcha-Token"] = __id_36), fetch(e, t);
      } catch {}
    }
    return __id_74;
  }
};
var __id_76 = __id_13.api;
var __id_77 = [.25, .5, .75, 1, 1.5],
  __id_78 = 50;

function __id_79(__id_80, __id_81, __id_82) {
  let __id_83 = new WeakMap(),
    __id_84 = 2048,
    __id_85 = 1e4,
    __id_86 = new WeakMap();

  function __id_87(__id_88) {}

  function __id_89() {
    __id_86.clear = new WeakMap();
  }

  function __id_90(__id_91, __id_92) {
    if (!l) return null;
    if (__id_83.has(l)) return __id_83.get(l);
    let __id_93 = e.createObject(__id_94);
    return __id_93.native = l, __id_93.canvas = m, __id_83.set(l, __id_93), __id_93;
  }
  let __id_95 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "CanvasGradient", __id_95);
  let __id_96 = e.getProperty(__id_95, "prototype");
  e.setProperty(__id_96, "addColorStop", e.createNativeFunction(function(__id_97, __id_98) {
    this.native.addColorStop(l, m);
  }));

  function __id_99(__id_100) {
    let __id_101 = e.createObject(__id_95);
    return __id_101.native = l, __id_101;
  }
  let __id_102 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "CanvasPattern", __id_102);

  function __id_103(__id_104) {
    let __id_105 = e.createObject(__id_102);
    return __id_105.native = l, __id_105;
  }
  let __id_106 = e.createNativeFunction(function(__id_107, __id_108) {
    if (l > __id_84 || m > __id_84) throw new Error(`ImageData size exceeds maximum (${__id_84}x${__id_84})`);
    __id_13.settings.logCalls && console.log(n.domain, "create ImageData", this, l, m);
    let __id_109 = new ImageData(l, m);
    this.native = __id_109, this.width = l, this.height = m;
  }, !0);
  e.setProperty(t, "ImageData", __id_106);
  let __id_110 = e.getProperty(__id_106, "prototype");
  e.setProperty(__id_110, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native.width;
    })
  }), e.setProperty(__id_110, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native.height;
    })
  }), e.setProperty(__id_110, "data", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_111 = this.native.data,
        __id_112 = e.createObjectProto(e.ARRAY_PROTO);
      e.setProperty(__id_112, "length", __id_111.length);
      let __id_113 = e.nativeToPseudo({});
      e.setProperty(__id_113, "length", __id_111.length), e.setProperty(__id_113, "get", e.createNativeFunction(function(__id_114) {
        return __id_111[x];
      })), e.setProperty(__id_113, "set", e.createNativeFunction(function(__id_115, __id_116) {
        __id_13.settings.logCalls && console.log(n.domain, "setImageData", this, x, P), __id_111[x] = P;
      }));
      for (let __id_117 = 0; __id_117 < Math.min(__id_111.length, 1e3); __id_117++)(__id_118 => {
        e.setProperty(__id_113, P, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: e.createNativeFunction(function() {
            return __id_111[P];
          }),
          set: e.createNativeFunction(function(__id_119) {
            __id_13.settings.logCalls && console.log(n.domain, "setImageData", this, P, N), __id_111[P] = N;
          })
        });
      })(__id_117);
      return __id_113;
    })
  });

  function __id_120(__id_121) {
    let __id_122 = e.createObject(__id_106);
    return __id_122.native = l, __id_122;
  }
  let __id_123 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "TextMetrics", __id_123);
  let __id_124 = e.getProperty(__id_123, "prototype"),
    __id_125 = ["width", "actualBoundingBoxLeft", "actualBoundingBoxRight", "fontBoundingBoxAscent", "fontBoundingBoxDescent", "actualBoundingBoxAscent", "actualBoundingBoxDescent", "emHeightAscent", "emHeightDescent", "hangingBaseline", "alphabeticBaseline", "ideographicBaseline"];
  for (let __id_126 of __id_125) e.setProperty(__id_124, __id_126, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native[__id_126];
    })
  });

  function __id_127(__id_128) {
    let __id_129 = e.createObject(__id_123);
    return __id_129.native = l, __id_129;
  }
  let __id_130 = e.createNativeFunction(function(__id_131) {
    l && l.native ? this.native = new Path2D(l.native) : typeof l == "string" ? this.native = new Path2D(l) : this.native = new Path2D();
  }, !0);
  e.setProperty(t, "Path2D", __id_130);
  let __id_132 = e.getProperty(__id_130, "prototype"),
    __id_133 = {
      addPath: function(__id_134, __id_135) {
        l?.native && this.native.addPath(l.native, m);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__id_136, __id_137) {
        this.native.moveTo(l, m);
      },
      lineTo: function(__id_138, __id_139) {
        this.native.lineTo(l, m);
      },
      bezierCurveTo: function(__id_140, __id_141, __id_142, __id_143, __id_144, __id_145) {
        this.native.bezierCurveTo(l, m, E, x, P, N);
      },
      quadraticCurveTo: function(__id_146, __id_147, __id_148, __id_149) {
        this.native.quadraticCurveTo(l, m, E, x);
      },
      arc: function(__id_150, __id_151, __id_152, __id_153, __id_154, __id_155) {
        this.native.arc(l, m, E, x, P, N);
      },
      arcTo: function(__id_156, __id_157, __id_158, __id_159, __id_160) {
        this.native.arcTo(l, m, E, x, P);
      },
      ellipse: function(__id_161, __id_162, __id_163, __id_164, __id_165, __id_166, __id_167, __id_168) {
        this.native.ellipse(l, m, E, x, P, N, D, q);
      },
      rect: function(__id_169, __id_170, __id_171, __id_172) {
        this.native.rect(l, m, E, x);
      },
      roundRect: function(__id_173, __id_174, __id_175, __id_176, __id_177) {
        this.native.roundRect(l, m, E, x, P);
      }
    };
  for (let [__id_178, __id_179] of Object.entries(__id_133)) e.setProperty(__id_132, __id_178, e.createNativeFunction(__id_179));
  let __id_94 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "CanvasRenderingContext2D", __id_94);
  let __id_180 = e.getProperty(__id_94, "prototype"),
    __id_181 = ["globalAlpha", "globalCompositeOperation", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "textAlign", "textBaseline", "direction", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "imageSmoothingEnabled", "imageSmoothingQuality", "filter"];
  for (let __id_182 of __id_181) e.setProperty(__id_180, __id_182, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native[__id_182];
    }),
    set: e.createNativeFunction(function(__id_183) {
      __id_13.settings.logCalls && console.log(n.domain, "context set " + __id_182, this, m), this.native[__id_182] = m;
    })
  });
  for (let __id_184 of ["fillStyle", "strokeStyle"]) e.setProperty(__id_180, __id_184, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_185 = this.native[__id_184];
      return __id_185;
    }),
    set: e.createNativeFunction(function(__id_186) {
      m?.native ? this.native[__id_184] = m.native : this.native[__id_184] = m;
    })
  });
  e.setProperty(__id_180, "canvas", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __id_187 = {
    clearRect: function(__id_188, __id_189, __id_190, __id_191) {
      this.native, this.native.clearRect(l, m, E, x);
    },
    fillRect: function(__id_192, __id_193, __id_194, __id_195) {
      this.native, this.native.fillRect(l, m, E, x);
    },
    strokeRect: function(__id_196, __id_197, __id_198, __id_199) {
      this.native, this.native.strokeRect(l, m, E, x);
    },
    fillText: function(__id_200, __id_201, __id_202, __id_203) {
      this.native, x !== void 0 ? this.native.fillText(String(l).slice(0, 1e3), m, E, x) : this.native.fillText(String(l).slice(0, 1e3), m, E);
    },
    strokeText: function(__id_204, __id_205, __id_206, __id_207) {
      this.native, x !== void 0 ? this.native.strokeText(String(l).slice(0, 1e3), m, E, x) : this.native.strokeText(String(l).slice(0, 1e3), m, E);
    },
    measureText: function(__id_208) {
      return __id_127(this.native.measureText(String(l).slice(0, 1e3)));
    },
    getLineDash: function() {
      return e.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__id_209) {
      let __id_210 = e.pseudoToNative(l);
      this.native.setLineDash(__id_210);
    },
    createLinearGradient: function(__id_211, __id_212, __id_213, __id_214) {
      return __id_99(this.native.createLinearGradient(l, m, E, x));
    },
    createRadialGradient: function(__id_215, __id_216, __id_217, __id_218, __id_219, __id_220) {
      return __id_99(this.native.createRadialGradient(l, m, E, x, P, N));
    },
    createConicGradient: function(__id_221, __id_222, __id_223) {
      return __id_99(this.native.createConicGradient(l, m, E));
    },
    createPattern: function(__id_224, __id_225) {
      let __id_226 = l?.native || l;
      if (!__id_226) return null;
      let __id_227 = this.native.createPattern(__id_226, m);
      return __id_227 ? __id_103(__id_227) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__id_228, __id_229) {
      this.native.moveTo(l, m);
    },
    lineTo: function(__id_230, __id_231) {
      this.native.lineTo(l, m);
    },
    bezierCurveTo: function(__id_232, __id_233, __id_234, __id_235, __id_236, __id_237) {
      this.native.bezierCurveTo(l, m, E, x, P, N);
    },
    quadraticCurveTo: function(__id_238, __id_239, __id_240, __id_241) {
      this.native.quadraticCurveTo(l, m, E, x);
    },
    arc: function(__id_242, __id_243, __id_244, __id_245, __id_246, __id_247) {
      this.native.arc(l, m, E, x, P, N);
    },
    arcTo: function(__id_248, __id_249, __id_250, __id_251, __id_252) {
      this.native.arcTo(l, m, E, x, P);
    },
    ellipse: function(__id_253, __id_254, __id_255, __id_256, __id_257, __id_258, __id_259, __id_260) {
      this.native.ellipse(l, m, E, x, P, N, D, q);
    },
    rect: function(__id_261, __id_262, __id_263, __id_264) {
      this.native.rect(l, m, E, x);
    },
    roundRect: function(__id_265, __id_266, __id_267, __id_268, __id_269) {
      let __id_270 = e.pseudoToNative(P);
      this.native.roundRect(l, m, E, x, __id_270);
    },
    fill: function(__id_271, __id_272) {
      this.native, l?.native ? this.native.fill(l.native, m) : this.native.fill(l);
    },
    stroke: function(__id_273) {
      this.native, l?.native ? this.native.stroke(l.native) : this.native.stroke();
    },
    clip: function(__id_274, __id_275) {
      l?.native ? this.native.clip(l.native, m) : this.native.clip(l);
    },
    isPointInPath: function(__id_276, __id_277, __id_278, __id_279) {
      return l?.native ? this.native.isPointInPath(l.native, m, E, x) : this.native.isPointInPath(l, m, E);
    },
    isPointInStroke: function(__id_280, __id_281, __id_282) {
      return l?.native ? this.native.isPointInStroke(l.native, m, E) : this.native.isPointInStroke(l, m);
    },
    getTransform: function() {
      let __id_283 = this.native.getTransform();
      return e.nativeToPseudo({
        a: __id_283.a,
        __id_99: __id_283.__id_99,
        __id_86: __id_283.__id_86,
        __id_95: __id_283.__id_95,
        e: __id_283.e,
        __id_106: __id_283.__id_106
      });
    },
    rotate: function(__id_284) {
      this.native.rotate(l);
    },
    scale: function(__id_285, __id_286) {
      this.native.scale(l, m);
    },
    translate: function(__id_287, __id_288) {
      this.native.translate(l, m);
    },
    transform: function(__id_289, __id_290, __id_291, __id_292, __id_293, __id_294) {
      this.native.transform(l, m, E, x, P, N);
    },
    setTransform: function(__id_295, __id_296, __id_297, __id_298, __id_299, __id_300) {
      if (typeof l == "object" && l !== null) {
        let __id_301 = e.pseudoToNative(l);
        this.native.setTransform(__id_301);
      } else this.native.setTransform(l, m, E, x, P, N);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__id_302, __id_303, __id_304, __id_305, __id_306, __id_307, __id_308, __id_309, __id_310) {
      this.native;
      let __id_311 = l?.native || l;
      __id_311 && (q !== void 0 ? this.native.drawImage(__id_311, m, E, x, P, N, D, q, ie) : x !== void 0 ? this.native.drawImage(__id_311, m, E, x, P) : this.native.drawImage(__id_311, m, E));
    },
    createImageData: function(__id_312, __id_313) {
      if (l?.native) return __id_120(this.native.createImageData(l.native));
      if (l > __id_84 || m > __id_84) throw new Error(`ImageData size exceeds maximum (${__id_84}x${__id_84})`);
      return __id_120(this.native.createImageData(l, m));
    },
    getImageData: function(__id_314, __id_315, __id_316, __id_317) {
      if (E > __id_84 || x > __id_84) throw new Error(`ImageData size exceeds maximum (${__id_84}x${__id_84})`);
      return __id_120(this.native.getImageData(l, m, E, x));
    },
    putImageData: function(__id_318, __id_319, __id_320, __id_321, __id_322, __id_323, __id_324) {
      this.native, l?.native && (x !== void 0 ? this.native.putImageData(l.native, m, E, x, P, N, D) : this.native.putImageData(l.native, m, E));
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
  for (let [__id_325, __id_326] of Object.entries(__id_187)) e.setProperty(__id_180, __id_325, e.createNativeFunction(__id_326));
  return {
    extendElement: function(__id_327, __id_328) {
      e.setProperty(l, "getContext", e.createNativeFunction(function(__id_329, __id_330) {
        __id_13.settings.logCalls && console.log(n.domain, "getContext", this, E, x);
        let __id_331 = this.native;
        if (__id_331.tagName !== "CANVAS") throw new Error("getContext is only available on canvas elements");
        if (__id_331.width > __id_84 && (__id_331.width = __id_84), __id_331.height > __id_84 && (__id_331.height = __id_84), E === "2d") {
          let __id_332 = __id_331.getContext("2d", x ? e.pseudoToNative(x) : void 0);
          return __id_90(__id_332, this);
        }
        throw new Error(`Context type "${E}" is not supported`);
      })), e.setProperty(l, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.width : this.native.width;
        }),
        set: e.createNativeFunction(function(__id_333) {
          __id_13.settings.logCalls && console.log(n.domain, "set width", this, E), this.native.tagName === "CANVAS" && (this.native.width = Math.min(E, __id_84));
        })
      }), e.setProperty(l, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.height : this.native.height;
        }),
        set: e.createNativeFunction(function(__id_334) {
          __id_13.settings.logCalls && console.log(n.domain, "set height", this, E), this.native.tagName === "CANVAS" && (this.native.height = Math.min(E, __id_84));
        })
      }), e.setProperty(l, "toDataURL", e.createNativeFunction(function(__id_335, __id_336) {
        if (this.native.tagName !== "CANVAS") throw new Error("toDataURL is only available on canvas elements");
        return __id_13.settings.logCalls && console.log(n.domain, "toDataURL", this, E, x), this.native.toDataURL(E, x);
      }));
    },
    resetDrawCounts: __id_89,
    contextToPseudo: __id_90
  };
}

function __id_337(__id_338, __id_339, __id_340) {
  let __id_341 = 0,
    __id_342 = window.location.origin;

  function __id_343(__id_344) {
    if (typeof f != "string" || f.startsWith("/") || f.startsWith("./") || f.startsWith("../") || !f.startsWith("http://") && !f.startsWith("https://")) return !1;
    try {
      let __id_345 = new URL(f);
      if (__id_345.origin === __id_342 || __id_345.hostname === "kicya.net" || __id_345.hostname.endsWith(".kicya.net") || __id_345.hostname === "nekoweb.org") return !1;
      let __id_346 = __id_345.hostname.toLowerCase();
      return !(__id_346 === "localhost" || __id_346 === "127.0.0.1" || __id_346 === "0.0.0.0" || __id_346.startsWith("192.168.") || __id_346.startsWith("10.") || __id_346.startsWith("172.16.") || __id_346.startsWith("172.17.") || __id_346.startsWith("172.18.") || __id_346.startsWith("172.19.") || __id_346.startsWith("172.2") || __id_346.startsWith("172.30.") || __id_346.startsWith("172.31.") || __id_346 === "[::1]");
    } catch {
      return !1;
    }
  }
  let __id_347 = 0,
    __id_348 = e.nativeToPseudo({});
  e.setProperty(t, "__xhrCallbacks", __id_348);

  function __id_349(__id_350, ...__id_351) {
    if (!f || typeof f != "object") return;
    let __id_352 = __id_347++;
    e.setProperty(__id_348, "fn" + __id_352, f);
    let __id_353 = w.map((__id_354, __id_355) => {
        let __id_356 = "arg" + __id_352 + "_" + J;
        return e.setProperty(__id_348, __id_356, H), __id_356;
      }),
      __id_357 = __id_353.map(__id_358 => `__xhrCallbacks.${__id_358}`).join(",");
    e.appendCode(`__xhrCallbacks.fn${__id_352}(${__id_357}); delete __xhrCallbacks.fn${__id_352}; ${__id_353.map(__id_359 => `delete __xhrCallbacks.${__id_359}`).join("; ")};`);
  }
  let __id_360 = e.createNativeFunction(function() {
    __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest", this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __id_361 = this;
    this.native.onreadystatechange = function() {
      e.setProperty(__id_361, "readyState", __id_361.native.readyState), __id_361.native.readyState === 4 && (e.setProperty(__id_361, "status", __id_361.native.status), e.setProperty(__id_361, "statusText", __id_361.native.statusText), e.setProperty(__id_361, "responseText", __id_361.native.responseText?.slice(0, 5242880) || ""), e.setProperty(__id_361, "responseURL", __id_361.native.responseURL), __id_341 = Math.max(0, __id_341 - 1)), __id_361._eventHandlers.onreadystatechange && __id_349(__id_361._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __id_361._eventHandlers.onload && __id_349(__id_361._eventHandlers.onload);
    }, this.native.onerror = function() {
      __id_341 = Math.max(0, __id_341 - 1), __id_361._eventHandlers.onerror && __id_349(__id_361._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __id_341 = Math.max(0, __id_341 - 1), __id_361._eventHandlers.ontimeout && __id_349(__id_361._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __id_341 = Math.max(0, __id_341 - 1), __id_361._eventHandlers.onabort && __id_349(__id_361._eventHandlers.onabort);
    }, this.native.onprogress = function(__id_362) {
      if (__id_361._eventHandlers.onprogress) {
        let __id_363 = e.nativeToPseudo({
          loaded: k.loaded,
          total: k.total,
          lengthComputable: k.lengthComputable
        });
        __id_349(__id_361._eventHandlers.onprogress, __id_363);
      }
    }, this.native.onloadstart = function() {
      __id_361._eventHandlers.onloadstart && __id_349(__id_361._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __id_361._eventHandlers.onloadend && __id_349(__id_361._eventHandlers.onloadend);
    }, e.setProperty(this, "readyState", 0), e.setProperty(this, "status", 0), e.setProperty(this, "statusText", ""), e.setProperty(this, "responseText", ""), e.setProperty(this, "responseURL", "");
  }, !0);
  e.setProperty(t, "XMLHttpRequest", __id_360);
  let __id_364 = e.getProperty(__id_360, "prototype");
  e.setProperty(__id_360, "UNSENT", 0), e.setProperty(__id_360, "OPENED", 1), e.setProperty(__id_360, "HEADERS_RECEIVED", 2), e.setProperty(__id_360, "LOADING", 3), e.setProperty(__id_360, "DONE", 4), e.setProperty(__id_364, "UNSENT", 0), e.setProperty(__id_364, "OPENED", 1), e.setProperty(__id_364, "HEADERS_RECEIVED", 2), e.setProperty(__id_364, "LOADING", 3), e.setProperty(__id_364, "DONE", 4);
  let __id_365 = ["onreadystatechange", "onload", "onerror", "ontimeout", "onabort", "onprogress", "onloadstart", "onloadend"];
  for (let __id_366 of __id_365) e.setProperty(__id_364, __id_366, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this._eventHandlers[__id_366] || null;
    }),
    set: e.createNativeFunction(function(__id_367) {
      __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest set " + __id_366, this, w), this._eventHandlers[__id_366] = w;
    })
  });
  e.setProperty(__id_364, "timeout", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: e.createNativeFunction(function(__id_368) {
      this.native.timeout = Math.min(f, 3e4);
    })
  }), e.setProperty(__id_364, "withCredentials", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: e.createNativeFunction(function(__id_369) {
      this.native.withCredentials = !1;
    })
  }), e.setProperty(__id_364, "responseType", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: e.createNativeFunction(function(__id_370) {
      (f === "" || f === "text" || f === "json") && (this.native.responseType = f);
    })
  }), e.setProperty(__id_364, "response", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_371 = this.native.response;
      return this.native.responseType === "json" ? e.nativeToPseudo(__id_371) : typeof __id_371 == "string" ? __id_371.slice(0, 5242880) : __id_371;
    })
  }), e.setProperty(__id_364, "open", e.createNativeFunction(function(__id_372, __id_373, __id_374, __id_375, __id_376) {
    if (!__id_343(w)) throw new Error(`XHR request blocked: URL "${w}" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __id_377 = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (f = String(f).toUpperCase(), !__id_377.includes(f)) throw new Error(`HTTP method "${f}" is not allowed`);
    __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest open", this, f, w, k, I, j), this._method = f, this._url = w, this._async = k !== !1, this.native.open(f, w, this._async), this.native.timeout = 3e4, e.setProperty(this, "readyState", this.native.readyState);
  })), e.setProperty(__id_364, "setRequestHeader", e.createNativeFunction(function(__id_378, __id_379) {
    if (["cookie", "cookie2", "set-cookie", "set-cookie2", "host", "origin", "referer"].includes(f.toLowerCase())) throw new Error(`Setting header "${f}" is not allowed`);
    __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest setRequestHeader", this, f, w), this._headers[f] = w, this.native.setRequestHeader(f, w);
  })), e.setProperty(__id_364, "send", e.createNativeFunction(function(__id_380) {
    if (__id_341 >= 5) throw new Error("Maximum concurrent requests (5) exceeded");
    __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest send", this, f), __id_341++;
    let __id_381 = null;
    f != null && (typeof f == "string" ? __id_381 = f.slice(0, 5242880) : typeof f == "object" && (__id_381 = JSON.stringify(e.pseudoToNative(f)))), this.native.send(__id_381);
  })), e.setProperty(__id_364, "abort", e.createNativeFunction(function() {
    __id_13.settings.logCalls && console.log(n.domain, "XMLHttpRequest abort", this), this.native.abort(), __id_341 = Math.max(0, __id_341 - 1);
  })), e.setProperty(__id_364, "getResponseHeader", e.createNativeFunction(function(__id_382) {
    return this.native.getResponseHeader(f);
  })), e.setProperty(__id_364, "getAllResponseHeaders", e.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), e.setProperty(__id_364, "overrideMimeType", e.createNativeFunction(function(__id_383) {
    this.native.overrideMimeType(f);
  }));
}
var __id_384 = "webtiles_storage",
  __id_385 = 1,
  __id_386 = "localStorage",
  __id_387 = 1024 * 1024,
  __id_388 = 100,
  __id_389 = null,
  __id_390 = null;

function __id_391() {
  return __id_390 || (__id_390 = new Promise((__id_392, __id_393) => {
    let __id_394 = indexedDB.open(__id_384, __id_385);
    __id_394.onerror = () => t(__id_394.error), __id_394.onsuccess = () => {
      __id_389 = __id_394.result, e(__id_389);
    }, __id_394.onupgradeneeded = __id_395 => {
      let __id_396 = i.target.result;
      __id_396.objectStoreNames.contains(__id_386) || __id_396.createObjectStore(__id_386, {
        keyPath: ["site", "key"]
      }).createIndex("site", "site", {
        unique: !1
      });
    };
  }), __id_390);
}
async function __id_397(__id_398, __id_399) {
  return await __id_391(), new Promise((__id_400, __id_401) => {
    let __id_402 = __id_389.transaction(__id_386, "readonly").objectStore(__id_386).get([e, t]);
    __id_402.onsuccess = () => n(__id_402.result?.value ?? null), __id_402.onerror = () => i(__id_402.error);
  });
}
async function __id_403(__id_404, __id_405, __id_406) {
  return await __id_391(), new Promise((__id_407, __id_408) => {
    let __id_409 = __id_389.transaction(__id_386, "readwrite").objectStore(__id_386).put({
      site: e,
      key: t,
      value: n
    });
    __id_409.onsuccess = () => i(), __id_409.onerror = () => o(__id_409.error);
  });
}
async function __id_410(__id_411, __id_412) {
  return await __id_391(), new Promise((__id_413, __id_414) => {
    let __id_415 = __id_389.transaction(__id_386, "readwrite").objectStore(__id_386).delete([e, t]);
    __id_415.onsuccess = () => n(), __id_415.onerror = () => i(__id_415.error);
  });
}
async function __id_416(__id_417) {
  return await __id_391(), new Promise((__id_418, __id_419) => {
    let __id_420 = __id_389.transaction(__id_386, "readonly").objectStore(__id_386).index("site").getAll(e);
    __id_420.onsuccess = () => {
      let __id_421 = __id_420.result.map(__id_422 => __id_422.key);
      t(__id_421);
    }, __id_420.onerror = () => n(__id_420.error);
  });
}
async function __id_423(__id_424) {
  return await __id_391(), new Promise((__id_425, __id_426) => {
    let __id_427 = __id_389.transaction(__id_386, "readonly").objectStore(__id_386).index("site").getAll(e);
    __id_427.onsuccess = () => {
      let __id_428 = 0;
      for (let __id_429 of __id_427.result) __id_428 += (__id_429.key.length + __id_429.value.length) * 2;
      t({
        size: __id_428,
        count: __id_427.result.length
      });
    }, __id_427.onerror = () => n(__id_427.error);
  });
}
async function __id_430(__id_431) {
  return await __id_391(), new Promise((__id_432, __id_433) => {
    let __id_434 = __id_389.transaction(__id_386, "readwrite").objectStore(__id_386).index("site").openCursor(e);
    __id_434.onsuccess = __id_435 => {
      let __id_436 = p.target.result;
      __id_436 ? (__id_436.delete(), __id_436.continue()) : t();
    }, __id_434.onerror = () => n(__id_434.error);
  });
}

function __id_437(__id_438, __id_439, __id_440) {
  let __id_441 = e.nativeToPseudo({});
  e.setProperty(__id_441, "getItem", e.createAsyncFunction(function(__id_442, __id_443) {
    if (__id_13.settings.logCalls && console.log(n, "localStorage.getItem", this, o), o == null) {
      r(null);
      return;
    }
    o = String(o), __id_397(n, o).then(__id_444 => r(__id_444)).catch(__id_445 => {
      console.error("localStorage.getItem error:", c), r(null);
    });
  })), e.setProperty(__id_441, "setItem", e.createAsyncFunction(function(__id_446, __id_447, __id_448) {
    if (__id_13.settings.logCalls && console.log(n, "localStorage.setItem", this, o, r), o == null) {
      c();
      return;
    }
    o = String(o), r = String(r), __id_423(n).then(({
      size: __id_449,
      count: __id_450
    }) => {
      __id_397(n, o).then(__id_451 => {
        if (v === null && g >= __id_388) throw new Error(`localStorage item limit exceeded (max ${__id_388} items)`);
        let __id_452 = v ? (o.length + v.length) * 2 : 0,
          __id_453 = (o.length + r.length) * 2;
        if (p - __id_452 + __id_453 > __id_387) throw new Error(`localStorage size limit exceeded (max ${__id_387 / 1024}KB)`);
        return __id_403(n, o, r);
      }).then(() => c()).catch(__id_454 => {
        throw console.error("localStorage.setItem error:", v), v;
      });
    }).catch(__id_455 => {
      console.error("localStorage.setItem error:", p), c();
    });
  })), e.setProperty(__id_441, "removeItem", e.createAsyncFunction(function(__id_456, __id_457) {
    if (__id_13.settings.logCalls && console.log(n, "localStorage.removeItem", this, o), o == null) {
      r();
      return;
    }
    o = String(o), __id_410(n, o).then(() => r()).catch(__id_458 => {
      console.error("localStorage.removeItem error:", c), r();
    });
  })), e.setProperty(__id_441, "clear", e.createAsyncFunction(function(__id_459) {
    __id_13.settings.logCalls && console.log(n, "localStorage.clear", this), __id_430(n).then(() => o()).catch(__id_460 => {
      console.error("localStorage.clear error:", r), o();
    });
  })), e.setProperty(__id_441, "key", e.createAsyncFunction(function(__id_461, __id_462) {
    o = parseInt(o) || 0, __id_416(n).then(__id_463 => {
      r(o >= 0 && o < c.length ? c[o] : null);
    }).catch(__id_464 => {
      console.error("localStorage.key error:", c), r(null);
    });
  })), e.setProperty(__id_441, "getLength", e.createAsyncFunction(function(__id_465) {
    __id_423(n).then(({
      count: __id_466
    }) => o(__id_466)).catch(__id_467 => {
      console.error("localStorage.getLength error:", r), o(0);
    });
  })), e.setProperty(t, "localStorage", __id_441), e.setProperty(t, "sessionStorage", __id_441);
}
__id_391().catch(__id_468 => {
  console.error("Failed to initialize storage DB:", e);
});

function __id_469(__id_470, __id_471, __id_472, __id_473) {
  let __id_474 = e.createNativeFunction(function() {}, !0);
  e.setProperty(t, "DOMParser", __id_474);
  let __id_475 = e.getProperty(__id_474, "prototype");
  e.setProperty(__id_475, "parseFromString", e.createNativeFunction(function(__id_476, __id_477) {
    if (__id_13.settings.logCalls && console.log(i.domain, "DOMParser parseFromString", this, c, p), !["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"].includes(p)) throw new Error(`DOMParser: Unsupported MIME type "${p}"`);
    if (typeof c != "string" && (c = String(c)), c.length > 1e5) throw new Error("DOMParser: Input string too large (max 100KB)");
    let __id_478 = new DOMParser().parseFromString(c, p),
      __id_479 = e.createObjectProto(e.OBJECT_PROTO);

    function __id_480(__id_481) {
      if (T == null) return null;
      let __id_482 = e.createObjectProto(e.OBJECT_PROTO);
      return __id_482.native = T, __id_482.fromDOMParser = !0, e.setProperty(__id_482, "nodeName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), e.setProperty(__id_482, "nodeType", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), e.setProperty(__id_482, "nodeValue", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: e.createNativeFunction(function(__id_483) {
          __id_13.settings.logCalls && console.log(i.domain, "DOMParser set nodeValue", this, f), this.native.nodeValue = f;
        })
      }), e.setProperty(__id_482, "textContent", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: e.createNativeFunction(function(__id_484) {
          __id_13.settings.logCalls && console.log(i.domain, "DOMParser set textContent", this, f), this.native.textContent = String(f).slice(0, 5e4);
        })
      }), e.setProperty(__id_482, "tagName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), e.setProperty(__id_482, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.id;
        }),
        set: e.createNativeFunction(function(__id_485) {
          __id_13.settings.logCalls && console.log(i.domain, "DOMParser set id", this, f), this.native.id = String(f).slice(0, 100);
        })
      }), e.setProperty(__id_482, "className", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.className;
        }),
        set: e.createNativeFunction(function(__id_486) {
          __id_13.settings.logCalls && console.log(i.domain, "DOMParser set className", this, f), this.native.className = String(f).slice(0, 1e3);
        })
      }), e.setProperty(__id_482, "innerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: e.createNativeFunction(function(__id_487) {
          throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.");
        })
      }), e.setProperty(__id_482, "outerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), e.setProperty(__id_482, "children", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          let __id_488 = Array.from(this.native.children),
            __id_489 = e.createObjectProto(e.ARRAY_PROTO);
          for (let __id_490 = 0; __id_490 < __id_488.length; __id_490++) e.setProperty(__id_489, __id_490, __id_480(__id_488[__id_490]));
          return e.setProperty(__id_489, "length", __id_488.length), __id_489;
        })
      }), e.setProperty(__id_482, "childNodes", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          let __id_491 = Array.from(this.native.childNodes),
            __id_492 = e.createObjectProto(e.ARRAY_PROTO);
          for (let __id_493 = 0; __id_493 < __id_491.length; __id_493++) e.setProperty(__id_492, __id_493, __id_480(__id_491[__id_493]));
          return e.setProperty(__id_492, "length", __id_491.length), __id_492;
        })
      }), e.setProperty(__id_482, "firstChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_480(this.native.firstChild);
        })
      }), e.setProperty(__id_482, "lastChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_480(this.native.lastChild);
        })
      }), e.setProperty(__id_482, "firstElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_480(this.native.firstElementChild);
        })
      }), e.setProperty(__id_482, "lastElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_480(this.native.lastElementChild);
        })
      }), e.setProperty(__id_482, "parentNode", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(n) ? null : (__id_13.settings.logCalls && console.log(i.domain, "DOMParser get parentNode", this), __id_480(this.native.parentNode));
        })
      }), e.setProperty(__id_482, "parentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(n) ? null : (__id_13.settings.logCalls && console.log(i.domain, "DOMParser get parentElement", this), __id_480(this.native.parentElement));
        })
      }), e.setProperty(__id_482, "nextSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(n) ? null : (__id_13.settings.logCalls && console.log(i.domain, "DOMParser get nextSibling", this), __id_480(this.native.nextSibling));
        })
      }), e.setProperty(__id_482, "previousSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(n) ? null : (__id_13.settings.logCalls && console.log(i.domain, "DOMParser get previousSibling", this), __id_480(this.native.previousSibling));
        })
      }), e.setProperty(__id_482, "getAttributeNames", e.createNativeFunction(function() {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_494 = Array.from(this.native.getAttributeNames()),
          __id_495 = e.createObjectProto(e.ARRAY_PROTO);
        for (let __id_496 = 0; __id_496 < __id_494.length; __id_496++) e.setProperty(__id_495, __id_496, __id_494[__id_496]);
        return e.setProperty(__id_495, "length", __id_494.length), __id_495;
      })), e.setProperty(__id_482, "getAttribute", e.createNativeFunction(function(__id_497) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.getAttribute(f);
      })), e.setProperty(__id_482, "setAttribute", e.createNativeFunction(function(__id_498, __id_499) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (f = String(f).toLowerCase(), f.startsWith("on")) throw new Error("Event handlers are not allowed");
        this.native.setAttribute(f, String(w)), __id_13.settings.logCalls && console.log(i.domain, "DOMParser set attribute", this, f, w);
      })), e.setProperty(__id_482, "hasAttribute", e.createNativeFunction(function(__id_500) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.hasAttribute(f);
      })), e.setProperty(__id_482, "removeAttribute", e.createNativeFunction(function(__id_501) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (this.native.isSameNode(n)) throw new Error("No access.");
        this.native.removeAttribute(f), __id_13.settings.logCalls && console.log(i.domain, "DOMParser remove attribute", this, f);
      })), e.setProperty(__id_482, "querySelector", e.createNativeFunction(function(__id_502) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return __id_480(this.native.querySelector(f));
      })), e.setProperty(__id_482, "querySelectorAll", e.createNativeFunction(function(__id_503) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_504 = Array.from(this.native.querySelectorAll(f)),
          __id_505 = e.createObjectProto(e.ARRAY_PROTO);
        for (let __id_506 = 0; __id_506 < __id_504.length; __id_506++) e.setProperty(__id_505, __id_506, __id_480(__id_504[__id_506]));
        return e.setProperty(__id_505, "length", __id_504.length), __id_505;
      })), e.setProperty(__id_482, "getElementsByTagName", e.createNativeFunction(function(__id_507) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_508 = Array.from(this.native.getElementsByTagName(f)),
          __id_509 = e.createObjectProto(e.ARRAY_PROTO);
        for (let __id_510 = 0; __id_510 < __id_508.length; __id_510++) e.setProperty(__id_509, __id_510, __id_480(__id_508[__id_510]));
        return e.setProperty(__id_509, "length", __id_508.length), __id_509;
      })), e.setProperty(__id_482, "getElementsByClassName", e.createNativeFunction(function(__id_511) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let __id_512 = Array.from(this.native.getElementsByClassName(f)),
          __id_513 = e.createObjectProto(e.ARRAY_PROTO);
        for (let __id_514 = 0; __id_514 < __id_512.length; __id_514++) e.setProperty(__id_513, __id_514, __id_480(__id_512[__id_514]));
        return e.setProperty(__id_513, "length", __id_512.length), __id_513;
      })), e.setProperty(__id_482, "getElementById", e.createNativeFunction(function(__id_515) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return __id_480(this.native.getElementById ? this.native.getElementById(f) : null);
      })), __id_482;
    }
    return e.setProperty(__id_479, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return __id_480(__id_478.documentElement);
      })
    }), e.setProperty(__id_479, "head", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return __id_13.settings.logCalls && console.log(i.domain, "DOMParser get head", this), __id_480(__id_478.head);
      })
    }), e.setProperty(__id_479, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return __id_13.settings.logCalls && console.log(i.domain, "DOMParser get body", this), __id_480(__id_478.body);
      })
    }), e.setProperty(__id_479, "title", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return __id_478.title;
      })
    }), e.setProperty(__id_479, "querySelector", e.createNativeFunction(function(__id_516) {
      return __id_480(__id_478.querySelector(T));
    })), e.setProperty(__id_479, "querySelectorAll", e.createNativeFunction(function(__id_517) {
      let __id_518 = Array.from(__id_478.querySelectorAll(T)),
        __id_519 = e.createObjectProto(e.ARRAY_PROTO);
      for (let __id_520 = 0; __id_520 < __id_518.length; __id_520++) e.setProperty(__id_519, __id_520, __id_480(__id_518[__id_520]));
      return e.setProperty(__id_519, "length", __id_518.length), __id_519;
    })), e.setProperty(__id_479, "getElementById", e.createNativeFunction(function(__id_521) {
      return __id_480(__id_478.getElementById(T));
    })), e.setProperty(__id_479, "getElementsByTagName", e.createNativeFunction(function(__id_522) {
      let __id_523 = Array.from(__id_478.getElementsByTagName(T)),
        __id_524 = e.createObjectProto(e.ARRAY_PROTO);
      for (let __id_525 = 0; __id_525 < __id_523.length; __id_525++) e.setProperty(__id_524, __id_525, __id_480(__id_523[__id_525]));
      return e.setProperty(__id_524, "length", __id_523.length), __id_524;
    })), e.setProperty(__id_479, "getElementsByClassName", e.createNativeFunction(function(__id_526) {
      let __id_527 = Array.from(__id_478.getElementsByClassName(T)),
        __id_528 = e.createObjectProto(e.ARRAY_PROTO);
      for (let __id_529 = 0; __id_529 < __id_527.length; __id_529++) e.setProperty(__id_528, __id_529, __id_480(__id_527[__id_529]));
      return e.setProperty(__id_528, "length", __id_527.length), __id_528;
    })), __id_479;
  }));
}

function __id_530(__id_531, __id_532, __id_533, __id_534) {
  let __id_535 = new WeakMap(),
    __id_536 = 1e3,
    __id_537 = 5,
    __id_538 = new WeakMap(),
    __id_539 = 0,
    __id_540 = e.nativeToPseudo({});
  e.setProperty(t, "__eventCallbacks", __id_540);

  function __id_541(__id_542, __id_543) {
    let __id_544 = __id_539++;
    e.setProperty(__id_540, "fn" + __id_544, a), e.setProperty(__id_540, "ev" + __id_544, h), e.appendCode(`__eventCallbacks.fn${__id_544}(__eventCallbacks.ev${__id_544}); delete __eventCallbacks.fn${__id_544}; delete __eventCallbacks.ev${__id_544};`);
  }

  function __id_545() {
    return n.getElementsByTagName("*").length;
  }

  function __id_546(__id_547 = 1) {
    if (__id_545() + a > __id_536) throw new Error(`DOM element limit exceeded (max ${__id_536})`);
  }

  function __id_548(__id_549) {
    return a instanceof Element ? 1 + a.getElementsByTagName("*").length : 0;
  }

  function __id_550(__id_551, __id_552 = !1) {
    if (a == null) return null;
    if (__id_535.has(a)) return __id_535.get(a);
    let __id_553 = a instanceof Element ? __id_554 : __id_555,
      __id_556 = e.createObject(__id_553);
    return __id_556.native = a, __id_556.fromDOMParser || (__id_556.fromDOMParser = h), __id_535.set(a, __id_556), __id_556;
  }

  function __id_557(__id_558) {
    return a && n.contains(a);
  }

  function __id_559(__id_560) {
    return __id_557(a) ? a : null;
  }

  function __id_561(__id_562) {
    let __id_563 = e.createObjectProto(e.ARRAY_PROTO);
    for (let __id_564 = 0; __id_564 < a.length; __id_564++) e.setProperty(__id_563, __id_564, __id_550(a[__id_564]));
    return e.setProperty(__id_563, "length", a.length), __id_563;
  }
  let __id_555 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "Node", __id_555);
  let __id_565 = e.getProperty(__id_555, "prototype"),
    __id_566 = {
      firstChild: function() {
        return __id_550(__id_559(this.native.firstChild));
      },
      lastChild: function() {
        return __id_550(__id_559(this.native.lastChild));
      },
      parentNode: function() {
        return __id_550(__id_559(this.native.parentNode));
      },
      parentElement: function() {
        return __id_550(__id_559(this.native.parentElement));
      },
      nextSibling: function() {
        return __id_550(__id_559(this.native.nextSibling));
      },
      previousSibling: function() {
        return __id_550(__id_559(this.native.previousSibling));
      },
      childNodes: function() {
        let __id_567 = Array.from(this.native.childNodes).filter(__id_557);
        return __id_561(__id_567);
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
    __id_568 = {
      textContent: function(__id_569) {
        __id_13.settings.logCalls && console.log(i.domain, "set textContent", this, a), this.native.textContent = a;
      },
      nodeValue: function(__id_570) {
        __id_13.settings.logCalls && console.log(i.domain, "set nodeValue", this, a), this.native.nodeValue = a;
      }
    };
  for (let [__id_571, __id_572] of Object.entries(__id_566)) {
    let __id_573 = {
      get: e.createNativeFunction(__id_572)
    };
    __id_568[__id_571] && (__id_573.set = e.createNativeFunction(__id_568[__id_571])), e.setProperty(__id_565, __id_571, Interpreter.VALUE_IN_DESCRIPTOR, __id_573);
  }
  let __id_574 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__id_575) {
      if (!a?.native) return null;
      if (a.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
      return __id_546(__id_548(a.native)), this.native.appendChild(a.native), __id_13.settings.logCalls && console.log(i.domain, "appendChild", this, a), a;
    },
    append: function(__id_576) {
      for (let __id_577 of a)
        if (__id_577?.native) {
          if (__id_577.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
          __id_546(__id_548(__id_577.native)), this.native.appendChild(__id_577.native);
        }
      return __id_13.settings.logCalls && console.log(i.domain, "append", this, a), a;
    },
    removeChild: function(__id_578) {
      return !a?.native || !__id_557(a.native) ? null : (__id_13.settings.logCalls && console.log(i.domain, "removeChild", this, a), __id_550(this.native.removeChild(a.native)));
    },
    insertBefore: function(__id_579, __id_580) {
      if (!a?.native) return null;
      if (a.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(n)) throw new Error("No access.");
      __id_546(__id_548(a.native));
      let __id_581 = h?.native || null;
      return this.native.insertBefore(a.native, __id_581), __id_13.settings.logCalls && console.log(i.domain, "insertBefore", this, a, __id_581), a;
    },
    cloneNode: function(__id_582) {
      return __id_13.settings.logCalls && console.log(i.domain, "cloneNode", this, a), __id_550(this.native.cloneNode(a), this.fromDOMParser);
    },
    contains: function(__id_583) {
      return a?.native ? this.native.contains(a.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(n)) throw new Error("No access.");
      this.native.remove(), __id_13.settings.logCalls && console.log(i.domain, "remove", this);
    },
    after: function(__id_584) {
      if (!a?.native) return null;
      if (a.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(n)) throw new Error("No access.");
      return __id_546(__id_548(a.native)), this.native.after(a.native), __id_13.settings.logCalls && console.log(i.domain, "after", this, a), a;
    },
    before: function(__id_585) {
      if (!a?.native) return null;
      if (a.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(n)) throw new Error("No access.");
      return __id_546(__id_548(a.native)), this.native.before(a.native), __id_13.settings.logCalls && console.log(i.domain, "before", this, a), a;
    }
  };
  for (let [__id_586, __id_587] of Object.entries(__id_574)) e.setProperty(__id_565, __id_586, e.createNativeFunction(__id_587));
  let __id_554 = e.createNativeFunction(function() {
    throw TypeError("Illegal constructor");
  }, !0);
  e.setProperty(t, "Element", __id_554);
  let __id_588 = e.createObject(__id_555);
  e.setProperty(__id_554, "prototype", __id_588);

  function __id_589(__id_590) {
    if (!a) return "";
    a = String(a);
    let __id_591 = a.toLowerCase().trim();
    if (__id_591.startsWith("javascript:") || __id_591.startsWith("vbscript:")) throw new Error("javascript: URLs are not allowed");
    if (__id_591.startsWith("data:")) return a;
    try {
      let __id_592 = new URL(a, location.href);
      if (__id_592.hostname !== location.hostname) throw new Error("External URLs are not allowed");
      let __id_593 = __id_592.pathname + __id_592.search + __id_592.hash;
      return __id_593.startsWith(`/t/${i.domain}/`) || (__id_593 = `/t/${i.domain}/${__id_593}`.replaceAll("//", "/")), __id_593;
    } catch (__id_594) {
      if (y.message.includes("not allowed")) throw y;
      let __id_595 = a;
      return !__id_595.startsWith(`/t/${i.domain}/`) && !__id_595.startsWith("#") && (__id_595 = `/t/${i.domain}/${__id_595}`.replaceAll("//", "/")), __id_595;
    }
  }
  let __id_596 = {
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
        let __id_597 = Array.from(this.native.children).filter(__id_557);
        return __id_561(__id_597);
      },
      firstElementChild: function() {
        return __id_550(__id_559(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __id_550(__id_559(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __id_550(__id_559(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __id_550(__id_559(this.native.previousElementSibling));
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
    __id_598 = {
      innerText: function(__id_599) {
        this.native.innerText = a.slice(0, 1e3);
      },
      innerHTML: function(__id_600) {
        throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.");
      },
      id: function(__id_601) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.id = a, __id_13.settings.logCalls && console.log(i.domain, "set id", this, a);
      },
      className: function(__id_602) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.className = a, __id_13.settings.logCalls && console.log(i.domain, "set className", this, a);
      },
      src: function(__id_603) {
        this.native.src = __id_589(a), __id_13.settings.logCalls && console.log(i.domain, "set src", this, a);
      },
      href: function(__id_604) {
        this.native.href = this.native.tagName === "A" ? a : __id_589(a), __id_13.settings.logCalls && console.log(i.domain, "set href", this, a);
      },
      hidden: function(__id_605) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.hidden = !!a;
      },
      disabled: function(__id_606) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.disabled = !!a;
      },
      checked: function(__id_607) {
        this.native.checked = !!a;
      },
      selected: function(__id_608) {
        this.native.selected = !!a;
      },
      readOnly: function(__id_609) {
        this.native.readOnly = !!a;
      },
      required: function(__id_610) {
        this.native.required = !!a;
      },
      draggable: function(__id_611) {
        this.native.draggable = !!a;
      },
      title: function(__id_612) {
        this.native.title = String(a).slice(0, 1e3);
      },
      alt: function(__id_613) {
        this.native.alt = String(a).slice(0, 1e3);
      },
      name: function(__id_614) {
        this.native.name = String(a).slice(0, 100);
      },
      type: function(__id_615) {
        this.native.type = String(a).slice(0, 50);
      },
      value: function(__id_616) {
        this.native.value = String(a).slice(0, 1e4);
      },
      placeholder: function(__id_617) {
        this.native.placeholder = String(a).slice(0, 500);
      },
      tabIndex: function(__id_618) {
        this.native.tabIndex = parseInt(a) || 0;
      },
      scrollTop: function(__id_619) {
        this.native.scrollTop = a;
      },
      scrollLeft: function(__id_620) {
        this.native.scrollLeft = a;
      },
      currentTime: function(__id_621) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(a) || 0));
      },
      muted: function(__id_622) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!a);
      },
      volume: function(__id_623) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(a) || 0)));
      },
      loop: function(__id_624) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!a);
      },
      autoplay: function(__id_625) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!a);
      },
      controls: function(__id_626) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!a);
      },
      playbackRate: function(__id_627) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(.25, Math.min(4, Number(a) || 1)));
      },
      defaultPlaybackRate: function(__id_628) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(.25, Math.min(4, Number(a) || 1)));
      },
      preload: function(__id_629) {
        if (this.native instanceof HTMLMediaElement) {
          let __id_630 = ["none", "metadata", "auto"];
          this.native.preload = __id_630.includes(a) ? a : "auto";
        }
      },
      poster: function(__id_631) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __id_589(a));
      }
    };
  for (let [__id_632, __id_633] of Object.entries(__id_596)) {
    let __id_634 = {
      get: e.createNativeFunction(__id_633)
    };
    __id_598[__id_632] && (__id_634.set = e.createNativeFunction(__id_598[__id_632])), e.setProperty(__id_588, __id_632, Interpreter.VALUE_IN_DESCRIPTOR, __id_634);
  }
  let __id_635 = {
    getAttributeNames: function() {
      let __id_636 = Array.from(this.native.getAttributeNames()),
        __id_637 = e.createObjectProto(e.ARRAY_PROTO);
      for (let __id_638 = 0; __id_638 < __id_636.length; __id_638++) e.setProperty(__id_637, __id_638, __id_636[__id_638]);
      return e.setProperty(__id_637, "length", __id_636.length), __id_637;
    },
    getAttribute: function(__id_639) {
      return this.native.getAttribute(a);
    },
    setAttribute: function(__id_640, __id_641) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (a = String(a).toLowerCase(), h = String(h), __id_13.settings.logCalls && console.log(i.domain, "setAttribute", this, a, h), a === "style" && h.includes("animation-play-state") && h.includes("!important")) throw new Error("Cannot set animation-play-state to !important");
      if (a === "src" || a === "poster" || a === "data" || this.native.tagName !== "A" && a === "href") {
        this.native.setAttribute(a, __id_589(h));
        return;
      }
      if (a === "autoplay") throw new Error("autoplay is not allowed");
      if (a === "srcset") throw new Error("srcset is not allowed");
      if (a === "action" || a === "formaction") throw new Error("action and formaction are not allowed");
      if (a.startsWith("on")) throw new Error("Event handlers are not allowed. Use addEventListener instead.");
      if (a === "width" || a === "height") {
        let __id_642 = parseFloat(h);
        if (isNaN(__id_642) || __id_642 < 0 || __id_642 > 4096) throw new Error("Invalid width or height");
      }
      this.native.setAttribute(a, h);
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
    scrollIntoView: function(__id_643) {
      a && typeof a == "object" ? this.native.scrollIntoView(e.pseudoToNative(a)) : this.native.scrollIntoView(a);
    },
    scrollTo: function(__id_644, __id_645) {
      this.native.scrollTo(a, h);
    },
    scrollBy: function(__id_646, __id_647) {
      this.native.scrollBy(a, h);
    },
    removeAttribute: function(__id_648) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (a = String(a).toLowerCase(), a === "target") throw new Error("removing target is not allowed");
      __id_13.settings.logCalls && console.log(i.domain, "removeAttribute", this, a), this.native.removeAttribute(a);
    },
    hasAttribute: function(__id_649) {
      return this.native.hasAttribute(a);
    },
    querySelector: function(__id_650) {
      let __id_651 = this.native.querySelector(a);
      return __id_550(__id_559(__id_651));
    },
    querySelectorAll: function(__id_652) {
      let __id_653 = Array.from(this.native.querySelectorAll(a)).filter(__id_557);
      return __id_561(__id_653);
    },
    getElementsByClassName: function(__id_654) {
      let __id_655 = Array.from(this.native.getElementsByClassName(a)).filter(__id_557);
      return __id_561(__id_655);
    },
    getElementsByTagName: function(__id_656) {
      let __id_657 = Array.from(this.native.getElementsByTagName(a)).filter(__id_557);
      return __id_561(__id_657);
    },
    closest: function(__id_658) {
      let __id_659 = this.native.closest(a);
      for (; __id_659 && !n.contains(__id_659);) __id_659 = null;
      return __id_550(__id_659);
    },
    matches: function(__id_660) {
      return this.native.matches(a);
    },
    classList: function() {
      if (this.native.className === "tile-body") throw new Error("No access.");
      let __id_661 = this.native.classList;
      return e.nativeToPseudo({
        add: (...__id_662) => __id_661.add(...__id_662),
        remove: (...__id_663) => __id_661.remove(...__id_663),
        toggle: (__id_664, __id_665) => __id_661.toggle(__id_664, __id_665),
        contains: __id_666 => __id_661.contains(__id_666),
        replace: (__id_667, __id_668) => __id_661.replace(__id_667, __id_668)
      });
    },
    getBoundingClientRect: function() {
      let __id_669 = this.native.getBoundingClientRect();
      return e.nativeToPseudo({
        __id_670: __id_669.__id_670,
        y: __id_669.y,
        width: __id_669.width,
        height: __id_669.height,
        top: __id_669.top,
        right: __id_669.right,
        bottom: __id_669.bottom,
        left: __id_669.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement)) return e.createObjectProto(e.OBJECT_PROTO);
      if (!this.native.isConnected) throw new Error("Element is not connected to the DOM. Append it to the DOM before playing.");
      let __id_671 = e.createObjectProto(e.OBJECT_PROTO),
        __id_672 = this,
        __id_673 = null,
        __id_674 = null;
      return __id_13.settings.logCalls && console.log(i.domain, "play", this), e.setProperty(__id_671, "then", e.createNativeFunction(function(__id_675) {
        return __id_673 = L, __id_671;
      })), e.setProperty(__id_671, "catch", e.createNativeFunction(function(__id_676) {
        return __id_674 = L, __id_671;
      })), __id_672.native.play().then(() => {
        __id_673 && __id_541(__id_673, e.nativeToPseudo(void 0));
      }).catch(__id_677 => {
        __id_674 && __id_541(__id_674, e.nativeToPseudo({
          message: L.message,
          name: L.name
        }));
      }), __id_671;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__id_678) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(a || "")) : "";
    },
    fastSeek: function(__id_679) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == "function" && this.native.fastSeek(Math.max(0, Number(a) || 0));
    },
    getAnimations: function(__id_680) {
      if (!this.native.getAnimations) return __id_561([]);
      let __id_681 = a ? {
          subtree: !!e.pseudoToNative(a)?.subtree
        } : {},
        __id_682 = this.native.getAnimations(__id_681),
        __id_683 = e.createObjectProto(e.ARRAY_PROTO);
      for (let __id_684 = 0; __id_684 < __id_682.length; __id_684++) __id_683.properties[__id_684] = __id_685(__id_682[__id_684]);
      return e.setProperty(__id_683, "length", __id_682.length), __id_683;
    }
  };
  for (let [__id_686, __id_687] of Object.entries(__id_635)) e.setProperty(__id_588, __id_686, e.createNativeFunction(__id_687));

  function __id_685(__id_688) {
    let __id_689 = e.createObjectProto(e.OBJECT_PROTO);
    return e.setProperty(__id_689, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.id;
      })
    }), e.setProperty(__id_689, "playState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.playState;
      })
    }), e.setProperty(__id_689, "pending", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.pending;
      })
    }), e.setProperty(__id_689, "replaceState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.replaceState;
      })
    }), e.setProperty(__id_689, "currentTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.currentTime;
      }),
      set: e.createNativeFunction(function(__id_690) {
        a.currentTime = y;
      })
    }), e.setProperty(__id_689, "playbackRate", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.playbackRate;
      }),
      set: e.createNativeFunction(function(__id_691) {
        a.playbackRate = Math.max(-10, Math.min(10, Number(y) || 1));
      })
    }), e.setProperty(__id_689, "startTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        return a.startTime;
      }),
      set: e.createNativeFunction(function(__id_692) {
        a.startTime = y;
      })
    }), e.setProperty(__id_689, "play", e.createNativeFunction(function() {
      a.play();
    })), e.setProperty(__id_689, "pause", e.createNativeFunction(function() {
      a.pause();
    })), e.setProperty(__id_689, "cancel", e.createNativeFunction(function() {
      a.cancel();
    })), e.setProperty(__id_689, "finish", e.createNativeFunction(function() {
      a.finish();
    })), e.setProperty(__id_689, "reverse", e.createNativeFunction(function() {
      a.reverse();
    })), e.setProperty(__id_689, "updatePlaybackRate", e.createNativeFunction(function(__id_693) {
      a.updatePlaybackRate(Math.max(-10, Math.min(10, Number(y) || 1)));
    })), __id_689;
  }

  function __id_694(__id_695) {
    let __id_696 = e.createObjectProto(e.OBJECT_PROTO),
      __id_697 = a ? a.length : 0;
    return e.setProperty(__id_696, "length", __id_697), e.setProperty(__id_696, "start", e.createNativeFunction(function(__id_698) {
      if (!a || S < 0 || S >= a.length) throw new Error("Index out of bounds");
      return a.start(S);
    })), e.setProperty(__id_696, "end", e.createNativeFunction(function(__id_699) {
      if (!a || S < 0 || S >= a.length) throw new Error("Index out of bounds");
      return a.end(S);
    })), __id_696;
  }
  e.setProperty(__id_588, "buffered", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_694(this.native.buffered) : __id_694(null);
    })
  }), e.setProperty(__id_588, "played", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_694(this.native.played) : __id_694(null);
    })
  }), e.setProperty(__id_588, "seekable", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __id_694(this.native.seekable) : __id_694(null);
    })
  }), e.setProperty(__id_588, "classList", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_700 = this.native.classList,
        __id_701 = e.nativeToPseudo({});
      return e.setProperty(__id_701, "add", e.createNativeFunction(function(...__id_702) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        __id_700.add(...y);
      })), e.setProperty(__id_701, "remove", e.createNativeFunction(function(...__id_703) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        __id_700.remove(...y);
      })), e.setProperty(__id_701, "toggle", e.createNativeFunction(function(__id_704, __id_705) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return __id_700.toggle(y, S);
      })), e.setProperty(__id_701, "contains", e.createNativeFunction(function(__id_706) {
        return __id_700.contains(y);
      })), e.setProperty(__id_701, "replace", e.createNativeFunction(function(__id_707, __id_708) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return __id_700.replace(y, S);
      })), __id_701;
    })
  }), e.setProperty(__id_588, "style", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_709 = this.native.style,
        __id_710 = e.nativeToPseudo({}),
        __id_711 = ["color", "backgroundColor", "width", "height", "margin", "padding", "border", "display", "position", "top", "left", "right", "bottom", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "opacity", "visibility", "overflow", "zIndex", "transform", "transition", "animation", "flexDirection", "justifyContent", "alignItems", "gap", "gridTemplateColumns", "gridTemplateRows"];
      for (let __id_712 of __id_711) e.setProperty(__id_710, __id_712, Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_709[__id_712];
        }),
        set: e.createNativeFunction(function(__id_713) {
          __id_709[__id_712] = L, __id_13.settings.logCalls && console.log(i.domain, "set style", this, __id_712, L);
        })
      });
      return e.setProperty(__id_710, "cssText", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: e.createNativeFunction(function() {
          return __id_709.cssText;
        }),
        set: e.createNativeFunction(function(__id_714) {
          __id_709.cssText = S, __id_13.settings.logCalls && console.log(i.domain, "set cssText", this, S);
        })
      }), e.setProperty(__id_710, "setProperty", e.createNativeFunction(function(__id_715, __id_716, __id_717) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        __id_709.setProperty(S, L, O), __id_13.settings.logCalls && console.log(i.domain, "setProperty", this, S, L, O);
      })), e.setProperty(__id_710, "getPropertyValue", e.createNativeFunction(function(__id_718) {
        return __id_709.getPropertyValue(S);
      })), e.setProperty(__id_710, "removeProperty", e.createNativeFunction(function(__id_719) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        return __id_13.settings.logCalls && console.log(i.domain, "removeProperty", this, S), __id_709.removeProperty(S);
      })), __id_710;
    })
  }), e.setProperty(__id_588, "dataset", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      let __id_720 = this.native.dataset,
        __id_721 = e.nativeToPseudo({});
      for (let __id_722 in __id_720) e.setProperty(__id_721, __id_722, __id_720[__id_722]);
      return e.setProperty(__id_721, "get", e.createNativeFunction(function(__id_723) {
        return __id_720[y];
      })), e.setProperty(__id_721, "set", e.createNativeFunction(function(__id_724, __id_725) {
        __id_720[y] = String(S).slice(0, 1e3), __id_13.settings.logCalls && console.log(i.domain, "set dataset", this, y, S);
      })), e.setProperty(__id_721, "delete", e.createNativeFunction(function(__id_726) {
        delete __id_720[y], __id_13.settings.logCalls && console.log(i.domain, "delete dataset", this, y);
      })), e.setProperty(__id_721, "has", e.createNativeFunction(function(__id_727) {
        return y in __id_720;
      })), __id_721;
    })
  }), e.setProperty(__id_588, "offsetParent", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return __id_550(__id_559(this.native.offsetParent));
    })
  });
  let __id_728 = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "focusin", "focusout", "input", "change", "submit", "reset", "touchstart", "touchend", "touchmove", "touchcancel", "wheel", "scroll", "resize", "dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop", "animationstart", "animationend", "animationiteration", "transitionstart", "transitionend", "transitioncancel", "contextmenu", "pointerdown", "pointerup", "pointermove", "pointerenter", "pointerleave", "pointerover", "pointerout", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];

  function __id_670(__id_729) {
    let __id_730 = e.nativeToPseudo({}),
      __id_731 = ["type", "bubbles", "cancelable", "defaultPrevented", "timeStamp"];
    for (let __id_732 of __id_731) e.setProperty(__id_730, __id_732, a[__id_732]);
    if (a instanceof MouseEvent || a instanceof PointerEvent) {
      let __id_733 = ["clientX", "clientY", "pageX", "pageY", "screenX", "screenY", "offsetX", "offsetY", "movementX", "movementY", "button", "buttons", "altKey", "ctrlKey", "shiftKey", "metaKey"];
      for (let __id_734 of __id_733) e.setProperty(__id_730, __id_734, a[__id_734]);
    }
    if (a instanceof KeyboardEvent) {
      let __id_735 = ["key", "code", "keyCode", "charCode", "altKey", "ctrlKey", "shiftKey", "metaKey", "repeat"];
      for (let __id_736 of __id_735) e.setProperty(__id_730, __id_736, a[__id_736]);
    }
    return typeof TouchEvent == "function" && a instanceof TouchEvent && (e.setProperty(__id_730, "touches", e.nativeToPseudo({
      length: a.touches.length
    })), e.setProperty(__id_730, "changedTouches", e.nativeToPseudo({
      length: a.changedTouches.length
    }))), typeof WheelEvent == "function" && a instanceof WheelEvent && (e.setProperty(__id_730, "deltaX", a.deltaX), e.setProperty(__id_730, "deltaY", a.deltaY), e.setProperty(__id_730, "deltaZ", a.deltaZ), e.setProperty(__id_730, "deltaMode", a.deltaMode)), a.target && __id_557(a.target) && e.setProperty(__id_730, "target", __id_550(a.target)), a.currentTarget && __id_557(a.currentTarget) && e.setProperty(__id_730, "currentTarget", __id_550(a.currentTarget)), e.setProperty(__id_730, "preventDefault", e.createNativeFunction(function() {
      a.preventDefault();
    })), e.setProperty(__id_730, "stopPropagation", e.createNativeFunction(function() {
      a.stopPropagation();
    })), e.setProperty(__id_730, "stopImmediatePropagation", e.createNativeFunction(function() {
      a.stopImmediatePropagation();
    })), __id_730;
  }
  e.setProperty(__id_588, "addEventListener", e.createNativeFunction(function(__id_737, __id_738) {
    if (!a || typeof a != "string" || !h || typeof h != "object") return;
    if (a = a.toLowerCase(), !__id_728.includes(a)) throw new Error(`Event type "${a}" is not allowed`);
    __id_13.settings.logCalls && console.log(i.domain, "addEventListener", this, a, h);
    let __id_739 = this.native;
    __id_538.has(__id_739) || __id_538.set(__id_739, new Map());
    let __id_740 = __id_538.get(__id_739);
    __id_740.has(a) || __id_740.set(a, []);
    let __id_741 = __id_740.get(a);
    if (__id_741.length >= __id_537) throw new Error(`Maximum listeners (${__id_537}) reached for event "${a}"`);
    if (__id_741.some(__id_742 => __id_742.pseudo === h)) return;
    let __id_743 = function(__id_744) {
      let __id_745 = __id_670(U);
      __id_541(h, __id_745);
    };
    __id_741.push({
      pseudo: h,
      native: __id_743
    }), __id_739.addEventListener(a, __id_743);
  })), e.setProperty(__id_588, "removeEventListener", e.createNativeFunction(function(__id_746, __id_747) {
    if (!a || typeof a != "string" || !h || typeof h != "object") return;
    __id_13.settings.logCalls && console.log(i.domain, "removeEventListener", this, a, h), a = a.toLowerCase();
    let __id_748 = this.native;
    if (!__id_538.has(__id_748)) return;
    let __id_749 = __id_538.get(__id_748);
    if (!__id_749.has(a)) return;
    let __id_750 = __id_749.get(a),
      __id_751 = __id_750.findIndex(__id_752 => __id_752.pseudo === h);
    __id_751 !== -1 && (__id_748.removeEventListener(a, __id_750[__id_751].native), __id_750.splice(__id_751, 1));
  }));
  let __id_753 = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "input", "change", "submit", "touchstart", "touchend", "touchmove", "wheel", "scroll", "contextmenu", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];
  for (let __id_754 of __id_753) {
    let __id_755 = "on" + __id_754;
    e.setProperty(__id_588, __id_755, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: e.createNativeFunction(function() {
        let __id_756 = this.native;
        if (!__id_538.has(__id_756)) return null;
        let __id_757 = __id_538.get(__id_756),
          __id_758 = `__${__id_755}`;
        return __id_757.get(__id_758) || null;
      }),
      set: e.createNativeFunction(function(__id_759) {
        let __id_760 = this.native;
        __id_538.has(__id_760) || __id_538.set(__id_760, new Map());
        let __id_761 = __id_538.get(__id_760),
          __id_762 = `__${__id_755}`;
        __id_13.settings.logCalls && console.log(i.domain, "setOn" + __id_754, this, y);
        let __id_763 = __id_761.get(__id_762 + "_native");
        if (__id_763 && (__id_760.removeEventListener(__id_754, __id_763), __id_761.delete(__id_762), __id_761.delete(__id_762 + "_native")), y && typeof y == "object") {
          let __id_764 = function(__id_765) {
            let __id_766 = __id_670(Ke);
            __id_541(y, __id_766);
          };
          __id_760.addEventListener(__id_754, __id_764), __id_761.set(__id_762, y), __id_761.set(__id_762 + "_native", __id_764);
        }
      })
    });
  }
  __id_79(e, t, i).extendElement(__id_588, __id_550), __id_337(e, t, i), __id_437(e, t, i.domain), __id_469(e, t, n, i);
  let __id_767 = e.nativeToPseudo({});
  e.setProperty(t, "document", __id_767);
  let __id_768 = {
    getElementById: function(__id_769) {
      let __id_770 = n.querySelector(`#${CSS.escape(a)}`);
      return __id_550(__id_770);
    },
    getElementsByClassName: function(__id_771) {
      let __id_772 = Array.from(n.getElementsByClassName(a));
      return __id_561(__id_772);
    },
    getElementsByTagName: function(__id_773) {
      let __id_774 = Array.from(n.getElementsByTagName(a));
      return __id_561(__id_774);
    },
    querySelector: function(__id_775) {
      return __id_550(n.querySelector(a));
    },
    querySelectorAll: function(__id_776) {
      let __id_777 = Array.from(n.querySelectorAll(a));
      return __id_561(__id_777);
    },
    createElement: function(__id_778) {
      if (typeof a != "string") throw new Error("Invalid tag");
      if (a = a.toLowerCase().trim(), ["script", "style", "iframe", "embed", "object", "frame", "frameset", "layer", "ilayer", "applet", "meta", "base", "link", "title", "source", "geolocation", "permission"].includes(a)) throw new Error("Creating " + a + " elements is not allowed");
      return __id_13.settings.logCalls && console.log(i.domain, "createElement", this, a), __id_550(document.createElement(a));
    },
    createTextNode: function(__id_779) {
      return __id_13.settings.logCalls && console.log(i.domain, "createTextNode", this, a), __id_550(document.createTextNode(a));
    }
  };
  for (let [__id_780, __id_781] of Object.entries(__id_768)) e.setProperty(__id_767, __id_780, e.createNativeFunction(__id_781));
  e.setProperty(__id_767, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return __id_13.settings.logCalls && console.log(i.domain, "get body", this), __id_550(n);
    })
  }), e.setProperty(__id_767, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return __id_13.settings.logCalls && console.log(i.domain, "get documentElement", this), __id_550(n);
    })
  });
  let __id_782 = e.nativeToPseudo({});
  e.setProperty(t, "location", __id_782), e.setProperty(__id_782, "href", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: e.createNativeFunction(function() {
      return `/t/${i.domain}${i.path}`;
    }),
    set: e.createNativeFunction(function(__id_783) {
      if (typeof a == "string") {
        __id_13.settings.logCalls && console.log(i.domain, "set href", this, a);
        try {
          let __id_784 = new URL(a, `http://${i.domain}`);
          if (__id_784.hostname && __id_784.hostname !== location.hostname) throw new Error("External URLs are not allowed");
          let __id_785 = __id_784.pathname + __id_784.search + __id_784.hash;
          if (__id_785.startsWith(`/t/${i.domain}/`) ? __id_785 = __id_785.substring(`/t/${i.domain}`.length) : __id_785 === `/t/${i.domain}` && (__id_785 = "/"), __id_785.startsWith("/") || (__id_785 = "/" + __id_785), __id_785.endsWith(".html") || __id_785 === "/" || __id_785 === "") i.fetchContent(__id_785 || "/index.html"), i.setActive(!0);
          else throw new Error("Only HTML files can be navigated to");
        } catch (__id_786) {
          if (h.message.includes("not allowed") || h.message.includes("Only HTML")) throw h;
          let __id_787 = a;
          if (__id_787.startsWith("/") || (__id_787 = "/" + __id_787), __id_787.endsWith(".html") || __id_787 === "/" || __id_787 === "") i.fetchContent(__id_787 || "/index.html").then(() => i.setActive(!0));
          else throw new Error("Only HTML files can be navigated to");
        }
      }
    })
  }), e.setProperty(__id_782, "reload", e.createNativeFunction(function() {
    i.fetchContent(i.path, !0).then(() => i.setActive(!0));
  }));
}
var __id_788 = {
    console: {
      log: function(...__id_789) {
        this.logCount++ > 1e3 || console.log(`[${this.tile.domain}]`, ...e);
      },
      error: function(...__id_790) {
        this.logCount++ > 1e3 || console.error(`[${this.tile.domain}]`, ...e);
      },
      warn: function(...__id_791) {
        this.logCount++ > 1e3 || console.warn(`[${this.tile.domain}]`, ...e);
      }
    },
    alert(__id_792) {
      this.alertCount++ > 10 || alert(`[${this.tile.domain}] ${e}`);
    },
    prompt(__id_793) {
      if (!(this.alertCount++ > 10)) return prompt(`[${this.tile.domain}] ${e}`);
    },
    confirm(__id_794) {
      if (!(this.alertCount++ > 10)) return confirm(`[${this.tile.domain}] ${e}`);
    },
    atob(__id_795) {
      return atob(e);
    },
    btoa(__id_796) {
      return btoa(e);
    }
  },
  __id_797 = class {
    constructor(__id_798) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = t, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter("", (__id_799, __id_800) => {
        let __id_801 = (__id_802, __id_803) => {
          for (let [__id_804, __id_805] of Object.entries(r))
            if (typeof __id_805 == "function") n.setProperty(c, __id_804, n.createNativeFunction(__id_805.bind(this)));
            else if (typeof __id_805 == "object" && __id_805 !== null) {
            let __id_806 = n.nativeToPseudo({});
            __id_801(__id_805, __id_806), n.setProperty(c, __id_804, __id_806);
          }
        };
        __id_801(__id_788, i), __id_530(n, i, this.tile.contentElement, this.tile), n.setProperty(i, "embedded", n.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __id_807 = new Set(),
        __id_808 = [this.interpreter.getStateStack()],
        __id_809 = 0;
      for (; __id_808.length;) {
        let __id_810 = __id_808.pop(),
          __id_811 = typeof __id_810;
        if (__id_809 += 8, __id_811 === "string" && !__id_807.has(__id_810)) __id_807.add(__id_810), __id_809 += __id_810.length * 2;
        else if (__id_811 === "object" && __id_810 !== null && !__id_807.has(__id_810)) {
          __id_807.add(__id_810);
          try {
            __id_808.push(...Object.keys(__id_810), ...Object.values(__id_810));
          } catch {}
        }
      }
      return __id_809;
    }
    start() {
      this.running || __id_13.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __id_812 = 0; __id_812 < 5e3; __id_812++) try {
            if (!this.interpreter.step()) {
              this.waitUntil = Date.now() + 50;
              break;
            }
            if (this.index++ % 500 === 0) {
              let __id_813 = this.roughValueMemorySize();
              if (__id_813 > 3e6) {
                this.sizeLimitReached = !0, this.stop(), console.log(`[${this.tile.domain}] Memory size limit reached: ${__id_813} bytes`);
                break;
              }
            }
          } catch (__id_814) {
            console.error(n), this.stop();
            break;
          }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__id_815) {
      __id_13.settings.disableJS || this.interpreter.appendCode(t);
    }
  },
  __id_816 = __id_797;
var __id_817 = document.getElementById("plot"),
  __id_818 = new CSSStyleSheet(),
  __id_819 = () => {
    __id_818.replaceSync(`
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
__id_819();
var __id_820 = new CSSStyleSheet();
__id_820.replaceSync(`
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
var __id_821 = class __id_822 {
  constructor(__id_823) {
    this.x = t.x ?? 0, this.y = t.y ?? 0, this.domain = t.domain, this.free = !t.domain, this.locked = !1, this.id = `${this.x},${this.y}`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = t.path || "/index.html", this.content = "", this.lastRender = 0, this.preview = t.nocontrols || !1, this.embed = t.embed || !1, this.container = t.container || __id_817, this.interpreter = null, this.render();
  }
  static toTilePosition(__id_824, __id_825) {
    return {
      x: Math.floor(t / 250),
      y: Math.floor(n / 250)
    };
  }
  render() {
    if (this.rendered || this.element) return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __id_826 = document.createElement("div");
    __id_826.classList.add("tile"), this.free && __id_826.classList.add("f"), this.preview ? __id_826.style.cssText = "width: 100%; height: 100%; position: relative;" : (__id_826.style.left = `${this.x * 250}px`, __id_826.style.top = `${this.y * 250}px`, this.x % 10 === 0 && __id_826.classList.add("b-left"), this.y % 10 === 0 && __id_826.classList.add("b-top")), this.element = __id_826;
    let __id_827 = document.createElement("div");
    __id_827.classList.add("tile-content"), this.preview && (__id_827.style.cssText = "width: 100%; height: 100%;"), __id_827.addEventListener("click", async __id_828 => {
      let __id_829 = o.composedPath()?.filter(__id_830 => __id_830 instanceof Element);
      if (!__id_829) return;
      let __id_831 = __id_829.findIndex(__id_832 => __id_832.isSameNode(__id_827));
      if (__id_831 === -1) return;
      let __id_833 = __id_829.slice(0, __id_831).find(__id_834 => __id_834.tagName === "A");
      if (__id_833) {
        o.preventDefault();
        try {
          let __id_835 = new URL(__id_833.href);
          if (__id_835.hostname !== location.hostname) {
            let __id_836 = document.createElement("a");
            __id_836.href = __id_833.href, __id_836.target = "_blank", __id_836.click();
            return;
          }
          let __id_837 = __id_835.pathname;
          if (__id_837.startsWith(`/t/${this.domain}/`) || (__id_837 = `/t/${this.domain}/${__id_837}`.replaceAll("//", "/")), __id_837.startsWith(`/t/${this.domain}`) && (__id_837.endsWith(".html") || __id_837 === `/t/${this.domain}/` || __id_837 === `/t/${this.domain}`)) await this.fetchContent(__id_837.replace(`/t/${this.domain}`, "")), this.setActive(!0);
          else {
            let __id_838 = document.createElement("a");
            __id_838.href = __id_833.href, __id_838.target = "_blank", __id_838.click();
          }
        } catch (__id_839) {
          console.error(v);
        }
      }
    }), this.shadow = __id_827.attachShadow({
      mode: "open"
    });
    let __id_840 = document.createElement("div");
    __id_840.className = "tile-body", this.embed && __id_840.classList.add("embedded"), __id_840.style = "width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;", this.contentElement = __id_840, this.contentElement.innerHTML = this.preview ? "Loading preview..." : `Loading ${this.x}, ${this.y}...`, this.shadow.appendChild(__id_840), __id_826.appendChild(__id_827), this.fonts = document.createElement("style"), __id_826.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__id_826), __id_13.plot?.lockCache[this.x + "," + this.y] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__id_841, __id_842 = !1) {
    t.startsWith("/") || (t = "/" + t);
    let __id_843 = this.free ? `<div class="free">
                <p>${this.locked ? "Locked tile" : "Free tile"} ${this.x}, ${this.y}</p>
            </div>` : this.path === t && this.content && !n ? this.content : await fetch(`/t/${this.domain}${t}`).then(__id_844 => __id_844.text()).catch(__id_845 => "<p>Error loading tile</p>");
    this.free ? this.shadow.adoptedStyleSheets = [__id_820] : this.shadow.adoptedStyleSheets = [__id_818], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = t, this.contentElement.innerHTML = __id_843, this.content = __id_843;
    let __id_846 = this.contentElement.querySelectorAll("style");
    this.fonts.textContent = "";
    let __id_847 = 0;
    for (let __id_848 of __id_846) {
      if (__id_847 >= 3) break;
      let __id_849 = __id_848.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__id_849)
        for (let __id_850 of __id_849) {
          if (__id_847 >= 3) break;
          this.fonts.textContent += __id_850, __id_847++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __id_851 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __id_852 of __id_851) this.interpreter.runCode(__id_852.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__id_853) {
    if (this.element && (t && (this.interpreter || (this.interpreter = new __id_816(this), this.executeScripts()), this.interpreter.start()), t !== this.active)) {
      if (this.active = t, t) {
        if (this.element.classList.add("active"), this.contentElement.classList.add("active"), !this.preview && __id_13.ui) {
          let __id_854 = __id_13.ui.createVoteMenu(this);
          __id_854 && this.element.appendChild(__id_854);
          let __id_855 = __id_13.ui.createTileControl(this);
          if (this.element.appendChild(__id_855), __id_13.user?.admin || __id_13.user?.moderator) {
            let __id_856 = __id_13.ui.createAdminControl(this);
            this.element.appendChild(__id_856);
          }
          __id_13.plot?.activeTile && __id_13.plot.activeTile.setActive(!1), __id_13.plot && (__id_13.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __id_857 = this.contentElement.querySelectorAll("audio, video");
        for (let __id_858 of __id_857) __id_858.dataset.webtilesPaused === "true" && (__id_858.dataset.webtilesPaused = !1, __id_858.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __id_13.plot.activeTile = null, this.element.classList.remove("active"), this.contentElement.classList.remove("active"), this.preview || (this.element.querySelector(".tile-vote-menu")?.remove(), this.element.querySelector(".tile-info")?.remove(), this.element.querySelector(".tile-admin-panel")?.remove(), __id_13.plot && (__id_13.plot.activeTile = null)), __id_822.clearClanBorders();
        let __id_859 = this.contentElement.querySelectorAll("audio, video");
        for (let __id_860 of __id_859) __id_860.paused || (__id_860.dataset.webtilesPaused = !0, __id_860.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain)) try {
      let __id_861 = await (await __id_13.api.makeRequest(`/api/clans/tile-clan?domain=${encodeURIComponent(this.domain)}`)).json();
      if (!__id_861.success || !__id_861.clan) return;
      let __id_862 = __id_861.clan.members;
      if (!__id_862 || __id_862.length <= 1) return;
      let __id_863 = new Set(__id_862.map(__id_864 => `${__id_864.x},${__id_864.y}`));
      for (let __id_865 of __id_862) {
        let __id_866 = __id_13.plot.tiles[`${__id_865.x},${__id_865.y}`];
        if (!__id_866?.element) continue;
        __id_866.element.classList.add("clan-highlight");
        let __id_867 = __id_863.has(`${__id_865.x},${__id_865.y - 1}`),
          __id_868 = __id_863.has(`${__id_865.x},${__id_865.y + 1}`),
          __id_869 = __id_863.has(`${__id_865.x - 1},${__id_865.y}`),
          __id_870 = __id_863.has(`${__id_865.x + 1},${__id_865.y}`);
        if (!__id_867) {
          let __id_871 = document.createElement("div");
          __id_871.className = "clan-border clan-border-top", __id_866.element.appendChild(__id_871);
        }
        if (!__id_868) {
          let __id_872 = document.createElement("div");
          __id_872.className = "clan-border clan-border-bottom", __id_866.element.appendChild(__id_872);
        }
        if (!__id_869) {
          let __id_873 = document.createElement("div");
          __id_873.className = "clan-border clan-border-left", __id_866.element.appendChild(__id_873);
        }
        if (!__id_870) {
          let __id_874 = document.createElement("div");
          __id_874.className = "clan-border clan-border-right", __id_866.element.appendChild(__id_874);
        }
      }
    } catch (__id_875) {
      console.error("Failed to fetch clan borders:", t);
    }
  }
  static clearClanBorders() {
    if (__id_13.plot?.tiles)
      for (let __id_876 of Object.values(__id_13.plot.tiles)) __id_876.element && (__id_876.element.classList.remove("clan-highlight"), __id_876.element.querySelectorAll(".clan-border").forEach(__id_877 => __id_877.remove()));
  }
  setDomain(__id_878) {
    this.domain = t, this.free = !1, this.content = "", this.element && this.element.classList.remove("f"), this.fetchContent("/index.html");
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = "", this.element && this.element.classList.add("f"), this.fetchContent("/index.html");
  }
  setLocked(__id_879) {
    this.locked = t, this.element && this.element.classList.toggle("locked", t), this.fetchContent("/index.html", !0);
  }
};
__id_13.ui = {
  coords: document.querySelector("#coords"),
  zoomSlider: document.querySelector("#zoom-slider > input"),
  siteSelector: document.querySelector("#kicya-site-selector"),
  siteJumpButton: document.querySelector("#kicya-site-jump"),
  siteCenterButton: document.querySelector("#kicya-site-center"),
  siteEditButton: document.querySelector("#kicya-site-edit"),
  siteClanButton: document.querySelector("#kicya-site-clan"),
  siteEmbedButton: document.querySelector("#kicya-site-embed"),
  clanIndicator: document.querySelector("#kicya-clan-indicator"),
  pendingClanInvites: [],
  createElement: (__id_880, __id_881 = {}) => {
    let __id_882 = document.createElement(e);
    for (let [__id_883, __id_884] of Object.entries(t)) __id_883 === "innerText" ? __id_882.innerText = __id_884 : __id_883 === "innerHTML" ? __id_882.innerHTML = __id_884 : __id_883.startsWith("on") ? __id_882.addEventListener(__id_883.slice(2).toLowerCase(), __id_884) : __id_882.setAttribute(__id_883, __id_884);
    return __id_882;
  },
  escapeHTML: __id_885 => __id_885 ? __id_885.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "",
  showDashboard: __id_886 => {
    __id_887.src = `/dashboard?site=${encodeURIComponent(e)}&path=/`, __id_888 && (__id_888.textContent = `File Manager - ${e}`), __id_889.classList.add("active"), __id_890 && (__id_890.style.display = "none"), __id_13.camera && __id_13.camera.setZoomEnabled(!1), __id_13.ws?.isConnected && setTimeout(() => {
      let __id_891 = new Int16Array(3);
      __id_891[0] = 0, __id_891[1] = 0, __id_891[2] = 0, __id_13.ws.send(__id_891.buffer);
    }, 100);
  },
  showClaimModal: __id_892 => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    let __id_893 = __id_13.user.selectedSite;
    if (!__id_893) {
      alert("Please select a site first");
      return;
    }
    let __id_894 = __id_893.domain,
      __id_895 = __id_893.tile ? `<strong>Warning</strong>Your current tile at (${__id_893.tile.x}, ${__id_893.tile.y}) will be unclaimed and your site will be moved to this new tile.` : null;
    new __id_33({
      title: "Claim Tile",
      content: `<p>Do you want to claim tile (${e.x}, ${e.y}) for <strong>${__id_13.ui.escapeHTML(__id_894)}</strong>?</p>`,
      warning: __id_895,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_896 => __id_896.close()
      }, {
        text: "Claim",
        type: "confirm",
        id: "confirm",
        onClick: async __id_897 => {
          r.setButtonLoading("confirm", !0, "Claiming...");
          try {
            let __id_898 = await (await __id_13.api.makeRequest("/api/claim", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y
              })
            })).json();
            if (__id_898.success) {
              if (__id_13.user.selectedSite) {
                if (__id_13.user.selectedSite.tile) {
                  let __id_899 = __id_13.plot.getTile(__id_13.user.selectedSite.tile.x, __id_13.user.selectedSite.tile.y);
                  __id_899 && __id_899.setFree();
                }
                __id_13.user.selectedSite.tile = {
                  x: e.x,
                  y: e.y,
                  code: __id_898.code,
                  domain: __id_13.user.selectedSite.domain,
                  created_at: Date.now()
                };
              }
              setTimeout(() => {
                e.setDomain(__id_13.user.selectedSite.domain), e.setActive(!1), e.element && e.element.classList.toggle("locked", !1);
              }, 400), r.close(), __id_900();
            } else alert(__id_898.error || "Failed to claim tile"), r.setButtonLoading("confirm", !1);
          } catch (__id_901) {
            console.error(c), alert("Failed to claim tile: " + c.message), r.setButtonLoading("confirm", !1);
          }
        }
      }]
    }).open();
  },
  showUnlockModal: __id_902 => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    let __id_903 = __id_13.user.selectedSite;
    if (!__id_903) {
      alert("Please select a site first");
      return;
    }
    let __id_904 = __id_903.domain,
      __id_905 = __id_903.tile ? `<strong>Warning</strong>Your current tile at (${__id_903.tile.x}, ${__id_903.tile.y}) will be unclaimed and your site will be moved to this new tile.` : null,
      __id_906 = new __id_33({
        title: "Unlock & Claim Tile",
        content: `
                <p>Enter the unlock code to claim the tile at (${e.x}, ${e.y}) for <strong>${__id_13.ui.escapeHTML(__id_904)}</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: __id_905,
        buttons: [{
          text: "Cancel",
          type: "cancel",
          id: "cancel",
          onClick: __id_907 => __id_907.close()
        }, {
          text: "Unlock & Claim",
          type: "confirm",
          id: "confirm",
          onClick: async __id_908 => {
            let __id_909 = __id_906.element.querySelector("#unlock-code-input").value.trim();
            if (!__id_909) {
              alert("Please enter a code");
              return;
            }
            r.setButtonLoading("confirm", !0, "Unlocking...");
            try {
              let __id_910 = await (await __id_13.api.makeRequest("/api/claim", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  x: e.x,
                  y: e.y,
                  code: __id_909
                })
              })).json();
              if (__id_910.success) {
                if (delete __id_13.plot.lockCache[e.x + "," + e.y], __id_13.user.selectedSite) {
                  if (__id_13.user.selectedSite.tile) {
                    let __id_911 = __id_13.plot.getTile(__id_13.user.selectedSite.tile.x, __id_13.user.selectedSite.tile.y);
                    __id_911 && __id_911.setFree();
                  }
                  __id_13.user.selectedSite.tile = {
                    x: e.x,
                    y: e.y,
                    code: __id_910.code,
                    domain: __id_13.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                e.setDomain(__id_13.user.selectedSite.domain), e.setActive(!1), r.close(), __id_900();
              } else alert(__id_910.error || "Failed to unlock tile"), r.setButtonLoading("confirm", !1);
            } catch (__id_912) {
              console.error(g), alert("Failed to unlock tile: " + g.message), r.setButtonLoading("confirm", !1);
            }
          }
        }]
      });
    __id_906.open(), setTimeout(() => {
      let __id_913 = __id_906.element.querySelector("#unlock-code-input");
      __id_913 && __id_913.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    __id_13.ui.clanIndicator && (__id_13.ui.clanIndicator.hidden = __id_13.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!__id_13.user || !__id_13.user.selectedSite)) try {
      let __id_914 = await (await __id_13.api.makeRequest("/api/clans/invites")).json();
      __id_914.success && (__id_13.ui.pendingClanInvites = __id_914.invites || [], __id_13.ui.updateClanIndicator());
    } catch (__id_915) {
      console.error("Failed to fetch clan invites:", e);
    }
  },
  showClanModal: async () => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    if (!__id_13.user.selectedSite) {
      alert("Please select a site first");
      return;
    }
    let __id_916 = new __id_33({
      title: "Clan Management",
      content: "<p>Loading...</p>",
      buttons: [{
        text: "Close",
        type: "cancel",
        id: "close",
        onClick: __id_917 => __id_917.close()
      }]
    });
    __id_916.open();
    try {
      let [__id_918, __id_919] = await Promise.all([__id_13.api.makeRequest("/api/clans/current"), __id_13.api.makeRequest("/api/clans/invites")]),
        __id_920 = await __id_918.json(),
        __id_921 = await __id_919.json();
      __id_13.ui.pendingClanInvites = __id_921.invites || [], __id_13.ui.updateClanIndicator();
      let __id_922 = __id_13.user?.admin || __id_13.user?.moderator;
      __id_920.success && __id_920.clan ? __id_13.ui.renderClanInfo(__id_916, __id_920.clan, __id_922) : __id_13.ui.renderNoClan(__id_916, __id_921.invites || [], __id_922);
    } catch (__id_923) {
      console.error(t), __id_916.setContent("<p>Failed to load clan data: " + __id_13.ui.escapeHTML(t.message) + "</p>");
    }
  },
  renderClanInfo: (__id_924, __id_925, __id_926) => {
    let __id_927 = `
            <div class="clan-name-display">${__id_13.ui.escapeHTML(t.name)}</div>
            <div class="clan-stats">${t.members.length}/5 members. ${t.members.length < 3 ? "Unprotected! Reach 3 members to protect your tiles." : "Your tiles are protected."}</div>
        `;
    __id_927 += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let __id_928 of t.members) {
      let __id_929 = __id_928.domain === __id_13.user.sites.find(__id_930 => __id_930.tile?.x === __id_928.x && __id_930.tile?.y === __id_928.y)?.domain;
      __id_927 += `<div class="clan-member-item">
                <span class="clan-member-domain">${__id_13.ui.escapeHTML(__id_928.domain)}</span>
                <div>`, t.isOwner && __id_928.domain !== __id_13.user.selectedSite?.domain && (__id_927 += `<button class="clan-member-kick" data-domain="${__id_13.ui.escapeHTML(__id_928.domain)}">Kick</button>`), __id_927 += `</div>
            </div>`;
    }
    if (__id_927 += "</div></div>", t.isOwner && t.pendingInvites && t.pendingInvites.length > 0) {
      __id_927 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let __id_931 of t.pendingInvites) __id_927 += `<div class="clan-pending-item">
                    <span>${__id_13.ui.escapeHTML(__id_931.domain)}</span>
                    <button class="clan-pending-cancel" data-invite="${__id_931.id}">Cancel</button>
                </div>`;
      __id_927 += "</div></div>";
    }
    t.isOwner && t.members.length < 5 && (__id_927 += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), n && (__id_927 += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), e.setContent(__id_927);
    let __id_932 = [{
      text: "Close",
      type: "cancel",
      id: "close",
      onClick: __id_933 => __id_933.close()
    }];
    t.isOwner ? __id_932.unshift({
      text: "Disband Clan",
      type: "cancel",
      id: "disband",
      onClick: async __id_934 => {
        if (confirm("Are you sure you want to disband this clan?")) {
          d.setButtonLoading("disband", !0, "Disbanding...");
          try {
            let __id_935 = await (await __id_13.api.makeRequest("/api/clans/disband", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            })).json();
            __id_935.success ? (d.close(), __id_13.ui.showClanModal()) : (alert(__id_935.error || "Failed to disband clan"), d.setButtonLoading("disband", !1));
          } catch (__id_936) {
            alert("Failed to disband clan: " + u.message), d.setButtonLoading("disband", !1);
          }
        }
      }
    }) : __id_932.unshift({
      text: "Leave Clan",
      type: "cancel",
      id: "leave",
      onClick: async __id_937 => {
        if (confirm("Are you sure you want to leave this clan?")) {
          d.setButtonLoading("leave", !0, "Leaving...");
          try {
            let __id_938 = await (await __id_13.api.makeRequest("/api/clans/leave", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            })).json();
            __id_938.success ? (d.close(), __id_13.ui.showClanModal()) : (alert(__id_938.error || "Failed to leave clan"), d.setButtonLoading("leave", !1));
          } catch (__id_939) {
            alert("Failed to leave clan: " + u.message), d.setButtonLoading("leave", !1);
          }
        }
      }
    }), e.buttons = __id_932;
    let __id_940 = e.element.querySelector(".modal-actions");
    __id_940.innerHTML = "", e._buttonElements.clear();
    for (let __id_941 of e.buttons) __id_940.appendChild(e._createButton(__id_941));
    e.element.querySelectorAll(".clan-member-kick").forEach(__id_942 => {
      d.addEventListener("click", async () => {
        let __id_943 = d.dataset.domain;
        if (confirm(`Are you sure you want to kick ${__id_943}?`)) {
          d.disabled = !0, d.textContent = "...";
          try {
            let __id_944 = await (await __id_13.api.makeRequest("/api/clans/kick", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                domain: __id_943
              })
            })).json();
            __id_944.success ? (__id_13.ui.showClanModal(), e.close()) : (alert(__id_944.error || "Failed to kick member"), d.disabled = !1, d.textContent = "Kick");
          } catch (__id_945) {
            alert("Failed to kick member: " + b.message), d.disabled = !1, d.textContent = "Kick";
          }
        }
      });
    }), e.element.querySelectorAll(".clan-pending-cancel").forEach(__id_946 => {
      d.addEventListener("click", async () => {
        let __id_947 = d.dataset.invite;
        d.disabled = !0, d.textContent = "...";
        try {
          let __id_948 = await (await __id_13.api.makeRequest("/api/clans/cancel-invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              invite: parseInt(__id_947)
            })
          })).json();
          __id_948.success ? d.closest(".clan-pending-item").remove() : (alert(__id_948.error || "Failed to cancel invite"), d.disabled = !1, d.textContent = "Cancel");
        } catch (__id_949) {
          alert("Failed to cancel invite: " + b.message), d.disabled = !1, d.textContent = "Cancel";
        }
      });
    });
    let __id_950 = e.element.querySelector("#clan-invite-btn"),
      __id_951 = e.element.querySelector("#clan-invite-domain");
    __id_950 && __id_951 && __id_950.addEventListener("click", async () => {
      let __id_952 = __id_951.value.trim();
      if (!__id_952) {
        alert("Please enter a domain");
        return;
      }
      __id_950.disabled = !0, __id_950.textContent = "Sending...";
      try {
        let __id_953 = await (await __id_13.api.makeRequest("/api/clans/invite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            domain: __id_952
          })
        })).json();
        __id_953.success ? (__id_951.value = "", __id_13.ui.showClanModal(), e.close()) : (alert(__id_953.error || "Failed to send invite"), __id_950.disabled = !1, __id_950.textContent = "Send Invite");
      } catch (__id_954) {
        alert("Failed to send invite: " + u.message), __id_950.disabled = !1, __id_950.textContent = "Send Invite";
      }
    });
    let __id_955 = e.element.querySelector("#clan-admin-invites-btn");
    __id_955 && __id_955.addEventListener("click", () => {
      e.close(), setTimeout(() => __id_13.ui.showAdminInvitesModal(), 50);
    });
    let __id_956 = e.element.querySelector("#clan-admin-clans-btn");
    __id_956 && __id_956.addEventListener("click", () => {
      e.close(), setTimeout(() => __id_13.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (__id_957, __id_958, __id_959) => {
    let __id_960 = "";
    if (t.length > 0) {
      __id_960 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let __id_961 of t) __id_960 += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${__id_13.ui.escapeHTML(__id_961.clan_name)}</strong>
                        ${__id_961.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${__id_13.ui.escapeHTML(__id_961.inviter_domain)}</span>` : ""}
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${__id_961.id}">Accept</button>
                        <button class="clan-invite-reject" data-invite="${__id_961.id}">Reject</button>
                    </div>
                </div>`;
      __id_960 += "</div></div>";
    }
    __id_960 += `<div class="clan-section">
            <div class="clan-section-title">Create a New Clan</div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">Create a clan to group neighboring tiles together (max 5 tiles).</p>
            <div class="code-input-container" style="margin: 5px 0;">
                <input type="text" id="clan-create-name" class="modal-input" placeholder="Clan name (3-20 chars, alphanumeric)" autocomplete="off" style="font-family: inherit;" maxlength="20" />
            </div>
            <button class="modal-btn modal-btn-confirm" id="clan-create-btn" style="margin-top: 5px;">Create Clan</button>
        </div>`, n && (__id_960 += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), e.setContent(__id_960), e.element.querySelectorAll(".clan-invite-accept").forEach(__id_962 => {
      g.addEventListener("click", async () => {
        let __id_963 = g.dataset.invite;
        g.disabled = !0, g.textContent = "...";
        try {
          let __id_964 = await (await __id_13.api.makeRequest("/api/clans/accept-invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              invite: parseInt(__id_963)
            })
          })).json();
          __id_964.success ? (__id_13.ui.pendingClanInvites = __id_13.ui.pendingClanInvites.filter(__id_965 => __id_965.id !== parseInt(__id_963)), __id_13.ui.updateClanIndicator(), __id_13.ui.showClanModal(), e.close()) : (alert(__id_964.error || "Failed to accept invite"), g.disabled = !1, g.textContent = "Accept");
        } catch (__id_966) {
          alert("Failed to accept invite: " + d.message), g.disabled = !1, g.textContent = "Accept";
        }
      });
    }), e.element.querySelectorAll(".clan-invite-reject").forEach(__id_967 => {
      g.addEventListener("click", async () => {
        let __id_968 = g.dataset.invite;
        g.disabled = !0, g.textContent = "...";
        try {
          let __id_969 = await (await __id_13.api.makeRequest("/api/clans/reject-invite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              invite: parseInt(__id_968)
            })
          })).json();
          __id_969.success ? (__id_13.ui.pendingClanInvites = __id_13.ui.pendingClanInvites.filter(__id_970 => __id_970.id !== parseInt(__id_968)), __id_13.ui.updateClanIndicator(), g.closest(".clan-invite-item").remove()) : (alert(__id_969.error || "Failed to reject invite"), g.disabled = !1, g.textContent = "Reject");
        } catch (__id_971) {
          alert("Failed to reject invite: " + d.message), g.disabled = !1, g.textContent = "Reject";
        }
      });
    });
    let __id_972 = e.element.querySelector("#clan-create-btn"),
      __id_973 = e.element.querySelector("#clan-create-name");
    __id_972 && __id_973 && __id_972.addEventListener("click", async () => {
      let __id_974 = __id_973.value.trim();
      if (!__id_974) {
        alert("Please enter a clan name");
        return;
      }
      if (__id_974.length < 3 || __id_974.length > 20) {
        alert("Clan name must be between 3 and 20 characters");
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(__id_974)) {
        alert("Clan name must only contain letters and numbers");
        return;
      }
      __id_972.disabled = !0, __id_972.textContent = "Creating...";
      try {
        let __id_975 = await (await __id_13.api.makeRequest("/api/clans/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: __id_974
          })
        })).json();
        __id_975.success ? (__id_13.ui.showClanModal(), e.close()) : (alert(__id_975.error || "Failed to create clan"), __id_972.disabled = !1, __id_972.textContent = "Create Clan");
      } catch (__id_976) {
        alert("Failed to create clan: " + v.message), __id_972.disabled = !1, __id_972.textContent = "Create Clan";
      }
    });
    let __id_977 = e.element.querySelector("#clan-admin-invites-btn");
    __id_977 && __id_977.addEventListener("click", () => {
      e.close(), setTimeout(() => __id_13.ui.showAdminInvitesModal(), 50);
    });
    let __id_978 = e.element.querySelector("#clan-admin-clans-btn");
    __id_978 && __id_978.addEventListener("click", () => {
      e.close(), setTimeout(() => __id_13.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let __id_979 = new __id_33({
      title: "Admin: All Clan Invites",
      content: "<p>Loading...</p>",
      buttons: [{
        text: "Back",
        type: "cancel",
        id: "back",
        onClick: __id_980 => {
          t.close(), __id_13.ui.showClanModal();
        }
      }, {
        text: "Close",
        type: "cancel",
        id: "close",
        onClick: __id_981 => __id_981.close()
      }]
    });
    __id_979.open();
    try {
      let __id_982 = await (await __id_13.api.makeRequest("/api/clans/admin/invites")).json();
      if (__id_982.success) {
        if (__id_982.invites.length === 0) __id_979.setContent("<p>No pending invites.</p>");
        else {
          let __id_983 = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let __id_984 of __id_982.invites) __id_983 += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${__id_13.ui.escapeHTML(__id_984.domain)}</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${__id_13.ui.escapeHTML(__id_984.clan_name)}</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${__id_984.id}">Delete</button>
                        </div>`;
          __id_983 += "</div>", __id_979.setContent(__id_983), __id_979.element.querySelectorAll(".clan-invite-reject").forEach(__id_985 => {
            o.addEventListener("click", async () => {
              let __id_986 = o.dataset.invite;
              o.disabled = !0, o.textContent = "...";
              try {
                let __id_987 = await (await __id_13.api.makeRequest("/api/clans/admin/delete-invite", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    invite: parseInt(__id_986)
                  })
                })).json();
                __id_987.success ? o.closest(".clan-invite-item").remove() : (alert(__id_987.error || "Failed to delete invite"), o.disabled = !1, o.textContent = "Delete");
              } catch (__id_988) {
                alert("Failed to delete invite: " + c.message), o.disabled = !1, o.textContent = "Delete";
              }
            });
          });
        }
      } else __id_979.setContent("<p>Failed to load invites: " + __id_13.ui.escapeHTML(__id_982.error) + "</p>");
    } catch (__id_989) {
      __id_979.setContent("<p>Failed to load invites: " + __id_13.ui.escapeHTML(t.message) + "</p>");
    }
  },
  showAdminClansModal: async () => {
    let __id_990 = new __id_33({
      title: "Admin: All Clans",
      content: "<p>Loading...</p>",
      buttons: [{
        text: "Back",
        type: "cancel",
        id: "back",
        onClick: __id_991 => {
          t.close(), __id_13.ui.showClanModal();
        }
      }, {
        text: "Close",
        type: "cancel",
        id: "close",
        onClick: __id_992 => __id_992.close()
      }]
    });
    __id_990.open();
    try {
      let __id_993 = await (await __id_13.api.makeRequest("/api/clans/admin/clans")).json();
      if (__id_993.success) {
        if (__id_993.clans.length === 0) __id_990.setContent("<p>No clans.</p>");
        else {
          let __id_994 = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let __id_995 of __id_993.clans) __id_994 += `<div class="clan-member-item">
                            <div>
                                <div><strong>${__id_13.ui.escapeHTML(__id_995.name)}</strong></div>
                                <div style="font-size: 11px; color: #888;">${__id_995.member_count}/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${__id_995.owner_x !== null && __id_995.owner_y !== null ? `<button class="clan-jump-owner" data-x="${__id_995.owner_x}" data-y="${__id_995.owner_y}">Jump</button>` : ""}
                                <button class="clan-member-kick" data-clan="${__id_995.id}">Disband</button>
                            </div>
                        </div>`;
          __id_994 += "</div>", __id_990.setContent(__id_994), __id_990.element.querySelectorAll(".clan-jump-owner").forEach(__id_996 => {
            o.addEventListener("click", () => {
              let __id_997 = parseInt(o.dataset.x),
                __id_998 = parseInt(o.dataset.y);
              __id_13.camera && !isNaN(__id_997) && !isNaN(__id_998) && (__id_13.camera.centerOn(__id_997 * 250 + 250 / 2, __id_998 * 250 + 250 / 2), __id_990.close());
            });
          }), __id_990.element.querySelectorAll(".clan-member-kick").forEach(__id_999 => {
            o.addEventListener("click", async () => {
              let __id_1000 = o.dataset.clan;
              if (confirm("Are you sure you want to disband this clan?")) {
                o.disabled = !0, o.textContent = "...";
                try {
                  let __id_1001 = await (await __id_13.api.makeRequest("/api/clans/admin/disband", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(__id_1000)
                    })
                  })).json();
                  __id_1001.success ? o.closest(".clan-member-item").remove() : (alert(__id_1001.error || "Failed to disband clan"), o.disabled = !1, o.textContent = "Disband");
                } catch (__id_1002) {
                  alert("Failed to disband clan: " + c.message), o.disabled = !1, o.textContent = "Disband";
                }
              }
            });
          });
        }
      } else __id_990.setContent("<p>Failed to load clans: " + __id_13.ui.escapeHTML(__id_993.error) + "</p>");
    } catch (__id_1003) {
      __id_990.setContent("<p>Failed to load clans: " + __id_13.ui.escapeHTML(t.message) + "</p>");
    }
  },
  showFreeModal: __id_1004 => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    let __id_1005 = new __id_33({
      title: "Free Tile",
      content: `
                <p>What would you like to do with the tile at (${e.x}, ${e.y})?</p>
                <div class="modal-options">
                    <button class="modal-option" id="option-transfer">
                        <strong>Transfer to Someone</strong>
                        <span>Get a code to share with another person. They can use this code to take the tile.</span>
                    </button>
                    <button class="modal-option" id="option-free">
                        <strong>Free Completely</strong>
                        <span>Make this tile available for anyone to claim.</span>
                    </button>
                </div>
            `,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1006 => __id_1006.close()
      }]
    });
    __id_1005.open();
    let __id_1007 = __id_1005.element.querySelector("#option-transfer"),
      __id_1008 = __id_1005.element.querySelector("#option-free");
    __id_1007.addEventListener("click", async () => {
      __id_1007.disabled = !0, __id_1008.disabled = !0, __id_1007.innerHTML = "<strong>Loading...</strong>";
      try {
        let __id_1009 = await (await __id_13.api.makeRequest("/api/getcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            x: e.x,
            y: e.y
          })
        })).json();
        if (__id_1009.success) {
          __id_1005.setContent(`
                        <p>Share this code with another person to let them take your tile at (${e.x}, ${e.y}):</p>
                        <div class="code-display">
                            <code id="tile-code">${__id_13.ui.escapeHTML(__id_1009.code)}</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let __id_1010 = __id_1005.element.querySelector("#copy-code-btn");
          __id_1010.addEventListener("click", () => {
            navigator.clipboard.writeText(__id_1009.code), __id_1010.textContent = "Copied!", setTimeout(() => {
              __id_1010.textContent = "Copy";
            }, 1500);
          });
        } else alert(__id_1009.error || "Failed to get tile code"), __id_1007.disabled = !1, __id_1008.disabled = !1, __id_1007.innerHTML = "<strong>\u{1F511} Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>";
      } catch (__id_1011) {
        console.error(o), alert("Failed to get tile code: " + o.message), __id_1007.disabled = !1, __id_1008.disabled = !1, __id_1007.innerHTML = "<strong>\u{1F511} Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>";
      }
    }), __id_1008.addEventListener("click", () => {
      __id_1005.setContent(`<p>Are you sure you want to free the tile at (${e.x}, ${e.y})?</p><p>The tile for <strong>${__id_13.ui.escapeHTML(e.domain)}</strong> will become available for <strong>anyone</strong> to claim.</p>`), __id_1005.buttons = [{
        text: "Back",
        type: "cancel",
        id: "back",
        onClick: __id_1012 => {
          r.close(), __id_13.ui.showFreeModal(e);
        }
      }, {
        text: "Free Tile",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1013 => {
          r.setButtonLoading("confirm", !0, "Freeing...");
          try {
            let __id_1014 = await (await __id_13.api.makeRequest("/api/free", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y
              })
            })).json();
            if (__id_1014.success) {
              let __id_1015 = __id_13.user.sites.find(__id_1016 => __id_1016.domain === e.domain);
              __id_1015 && (__id_1015.tile = null), e.setFree(), e.setActive(!1), r.close(), __id_900();
            } else alert(__id_1014.error || "Failed to free tile"), r.setButtonLoading("confirm", !1);
          } catch (__id_1017) {
            console.error(c), alert("Failed to free tile: " + c.message), r.setButtonLoading("confirm", !1);
          }
        }
      }];
      let __id_1018 = __id_1005.element.querySelector(".modal-actions");
      __id_1018.innerHTML = "", __id_1005._buttonElements.clear();
      for (let __id_1019 of __id_1005.buttons) __id_1018.appendChild(__id_1005._createButton(__id_1019));
    });
  },
  showTakeModal: __id_1020 => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    let __id_1021 = __id_13.user.selectedSite;
    if (!__id_1021) {
      alert("Please select a site first");
      return;
    }
    let __id_1022 = __id_1021.domain,
      __id_1023 = __id_1021.tile ? `<strong>Warning</strong>Your current tile at (${__id_1021.tile.x}, ${__id_1021.tile.y}) will be freed and your site will be moved to this new tile.` : null,
      __id_1024 = new __id_33({
        title: "Take Tile",
        content: `
                <p>Enter the code to take the tile at (${e.x}, ${e.y}) for <strong>${__id_13.ui.escapeHTML(__id_1022)}</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: __id_1023,
        buttons: [{
          text: "Cancel",
          type: "cancel",
          id: "cancel",
          onClick: __id_1025 => __id_1025.close()
        }, {
          text: "Take Tile",
          type: "confirm",
          id: "confirm",
          onClick: async __id_1026 => {
            let __id_1027 = __id_1024.element.querySelector("#take-code-input").value.trim();
            if (!__id_1027) {
              alert("Please enter a code");
              return;
            }
            r.setButtonLoading("confirm", !0, "Taking...");
            try {
              let __id_1028 = await (await __id_13.api.makeRequest("/api/take", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  x: e.x,
                  y: e.y,
                  code: __id_1027
                })
              })).json();
              if (__id_1028.success) {
                if (__id_13.user.selectedSite && __id_13.user.selectedSite.tile) {
                  let __id_1029 = __id_13.plot.getTile(__id_13.user.selectedSite.tile.x, __id_13.user.selectedSite.tile.y);
                  __id_1029 && __id_1029.setFree();
                }
                __id_13.user.selectedSite && (__id_13.user.selectedSite.tile = {
                  x: e.x,
                  y: e.y,
                  domain: __id_13.user.selectedSite.domain,
                  created_at: Date.now()
                }), e.setDomain(__id_1022), e.setActive(!1), r.close(), __id_900();
              } else alert(__id_1028.error || "Failed to take tile"), r.setButtonLoading("confirm", !1);
            } catch (__id_1030) {
              console.error(g), alert("Failed to take tile: " + g.message), r.setButtonLoading("confirm", !1);
            }
          }
        }]
      });
    __id_1024.open(), setTimeout(() => {
      let __id_1031 = __id_1024.element.querySelector("#take-code-input");
      __id_1031 && __id_1031.focus();
    }, 100);
  },
  showAdminFreeModal: __id_1032 => {
    new __id_33({
      title: "Admin: Free Tile",
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${e.x}, ${e.y})?</p>
                <p>This will remove <strong>${__id_13.ui.escapeHTML(e.domain)}</strong> from this tile.</p>
            `,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1033 => __id_1033.close()
      }, {
        text: "Free Tile",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1034 => {
          n.setButtonLoading("confirm", !0, "Freeing...");
          try {
            let __id_1035 = await (await __id_13.api.makeRequest("/api/admin/free", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y
              })
            })).json();
            __id_1035.success ? (e.setFree(), e.setActive(!1), n.close()) : (alert(__id_1035.error || "Failed to free tile"), n.setButtonLoading("confirm", !1));
          } catch (__id_1036) {
            console.error(i), alert("Failed to free tile: " + i.message), n.setButtonLoading("confirm", !1);
          }
        }
      }]
    }).open();
  },
  showAdminBanModal: __id_1037 => {
    new __id_33({
      title: "Admin: Ban User",
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${__id_13.ui.escapeHTML(e.domain)}</strong>?</p>
                <p>This will:</p>
                <ul style="margin: 10px 0; padding-left: 20px; color: #555;">
                    <li>Ban the user from creating new tiles</li>
                    <li>Remove <strong>all</strong> of their tiles</li>
                </ul>
            `,
      warning: "<strong>Destructive Action</strong>This action cannot be undone easily!",
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1038 => __id_1038.close()
      }, {
        text: "Ban User",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1039 => {
          n.setButtonLoading("confirm", !0, "Banning...");
          try {
            let __id_1040 = await (await __id_13.api.makeRequest("/api/admin/ban", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y
              })
            })).json();
            __id_1040.success ? (e.setFree(), e.setActive(!1), n.close(), alert("User banned.")) : (alert(__id_1040.error || "Failed to ban user"), n.setButtonLoading("confirm", !1));
          } catch (__id_1041) {
            console.error(i), alert("Failed to ban user: " + i.message), n.setButtonLoading("confirm", !1);
          }
        }
      }]
    }).open();
  },
  showAdminLockModal: (__id_1042, __id_1043) => {
    let __id_1044 = t ? "unlock" : "lock",
      __id_1045 = t ? "unlocked" : "locked";
    new __id_33({
      title: `Admin: ${t ? "Unlock" : "Lock"} Tile`,
      content: `
                <p>Are you sure you want to <strong>${__id_1044}</strong> the tile at (${e.x}, ${e.y})?</p>
                ${t ? "<p>This tile will become available for claiming again.</p>" : "<p>This tile will be reserved and cannot be claimed by regular users.</p>"}
            `,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1046 => __id_1046.close()
      }, {
        text: t ? "Unlock Tile" : "Lock Tile",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1047 => {
          r.setButtonLoading("confirm", !0, t ? "Unlocking..." : "Locking...");
          try {
            let __id_1048 = await (await __id_13.api.makeRequest("/api/admin/lock", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y,
                lock: !t
              })
            })).json();
            __id_1048.success ? (t ? delete __id_13.plot.lockCache[e.x + "," + e.y] : __id_13.plot.lockCache[e.x + "," + e.y] = !0, r.close(), e.setActive(!1), e.setActive(!0)) : (alert(__id_1048.error || `Failed to ${__id_1044} tile`), r.setButtonLoading("confirm", !1));
          } catch (__id_1049) {
            console.error(c), alert(`Failed to ${__id_1044} tile: ` + c.message), r.setButtonLoading("confirm", !1);
          }
        }
      }]
    }).open();
  },
  showAdminLockCodeModal: async __id_1050 => {
    try {
      let __id_1051 = await (await __id_13.api.makeRequest(`/api/admin/lockcode?x=${e.x}&y=${e.y}`)).json();
      if (__id_1051.success) {
        let __id_1052 = new __id_33({
          title: "Lock Code",
          content: `
                        <p>Lock code for tile at (${e.x}, ${e.y}):</p>
                        <div class="code-display">
                            <code id="lock-code">${__id_13.ui.escapeHTML(__id_1051.code)}</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: "Close",
            type: "cancel",
            id: "close",
            onClick: __id_1053 => __id_1053.close()
          }]
        });
        __id_1052.open();
        let __id_1054 = __id_1052.element.querySelector("#copy-lock-code-btn");
        __id_1054.addEventListener("click", () => {
          navigator.clipboard.writeText(__id_1051.code), __id_1054.textContent = "Copied!", setTimeout(() => {
            __id_1054.textContent = "Copy";
          }, 1500);
        });
      } else alert(__id_1051.error || "Failed to get lock code");
    } catch (__id_1055) {
      console.error(t), alert("Failed to get lock code: " + t.message);
    }
  },
  showAdminTileCodeModal: async __id_1056 => {
    try {
      let __id_1057 = await (await __id_13.api.makeRequest(`/api/admin/tilecode?x=${e.x}&y=${e.y}`)).json();
      if (__id_1057.success) {
        let __id_1058 = new __id_33({
          title: "Tile Secret Code",
          content: `
                        <p>Secret code for tile at (${e.x}, ${e.y}):</p>
                        <div class="code-display">
                            <code id="tile-code">${__id_13.ui.escapeHTML(__id_1057.code)}</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: "Close",
            type: "cancel",
            id: "close",
            onClick: __id_1059 => __id_1059.close()
          }]
        });
        __id_1058.open();
        let __id_1060 = __id_1058.element.querySelector("#copy-tile-code-btn");
        __id_1060.addEventListener("click", () => {
          navigator.clipboard.writeText(__id_1057.code), __id_1060.textContent = "Copied!", setTimeout(() => {
            __id_1060.textContent = "Copy";
          }, 1500);
        });
      } else alert(__id_1057.error || "Failed to get tile code");
    } catch (__id_1061) {
      console.error(t), alert("Failed to get tile code: " + t.message);
    }
  },
  showAdminSwapModal: __id_1062 => {
    let __id_1063 = new __id_33({
      title: "Admin: Swap Tiles",
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${e.x}, ${e.y}):</p>
                <div class="code-input-container">
                    <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #555;">X coordinate:</label>
                    <input type="number" id="swap-x-input" class="modal-input" placeholder="Enter X..." autocomplete="off" />
                </div>
                <div class="code-input-container">
                    <label style="display: block; margin-bottom: 5px; font-size: 12px; color: #555;">Y coordinate:</label>
                    <input type="number" id="swap-y-input" class="modal-input" placeholder="Enter Y..." autocomplete="off" />
                </div>
            `,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1064 => __id_1064.close()
      }, {
        text: "Swap",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1065 => {
          let __id_1066 = __id_1063.element.querySelector("#swap-x-input"),
            __id_1067 = __id_1063.element.querySelector("#swap-y-input"),
            __id_1068 = parseInt(__id_1066.value.trim()),
            __id_1069 = parseInt(__id_1067.value.trim());
          if (isNaN(__id_1068) || isNaN(__id_1069)) {
            alert("Please enter valid X and Y coordinates");
            return;
          }
          if (e.x === __id_1068 && e.y === __id_1069) {
            alert("Cannot swap a tile with itself");
            return;
          }
          n.setButtonLoading("confirm", !0, "Swapping...");
          try {
            let __id_1070 = await (await __id_13.api.makeRequest("/api/admin/swap", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x1: e.x,
                y1: e.y,
                x2: __id_1068,
                y2: __id_1069
              })
            })).json();
            __id_1070.success ? (n.close(), e.setActive(!1), setTimeout(() => {
              let __id_1071 = __id_13.plot.getTile(e.x, e.y),
                __id_1072 = __id_13.plot.getTile(__id_1068, __id_1069);
              __id_1071 && (__id_1071.setActive(!1), __id_1071.fetchContent("/index.html", !0)), __id_1072 && (__id_1072.setActive(!1), __id_1072.fetchContent("/index.html", !0));
            }, 100)) : (alert(__id_1070.error || "Failed to swap tiles"), n.setButtonLoading("confirm", !1));
          } catch (__id_1073) {
            console.error(p), alert("Failed to swap tiles: " + p.message), n.setButtonLoading("confirm", !1);
          }
        }
      }]
    });
    __id_1063.open(), setTimeout(() => {
      let __id_1074 = __id_1063.element.querySelector("#swap-x-input");
      __id_1074 && __id_1074.focus();
    }, 100);
  },
  createAdminControl: __id_1075 => {
    let __id_1076 = __id_13.ui.createElement("div", {
      class: "tile-admin-panel"
    });
    e.free || (__id_1076.appendChild(__id_13.ui.createElement("button", {
      innerText: "Edit",
      onclick: () => {
        __id_13.ui.showDashboard(e.domain);
      }
    })), __id_1076.appendChild(__id_13.ui.createElement("span", {
      class: "separator"
    })), __id_1076.appendChild(__id_13.ui.createElement("button", {
      innerText: "Free",
      onclick: () => {
        __id_13.ui.showAdminFreeModal(e);
      }
    })), __id_1076.appendChild(__id_13.ui.createElement("button", {
      class: "danger",
      innerText: "Ban",
      onclick: () => {
        __id_13.ui.showAdminBanModal(e);
      }
    })), __id_1076.appendChild(__id_13.ui.createElement("button", {
      innerText: "Swap",
      onclick: () => {
        __id_13.ui.showAdminSwapModal(e);
      }
    })));
    let __id_1077 = __id_13.plot.lockCache[e.x + "," + e.y],
      __id_1078 = __id_13.ui.createElement("button", {
        innerText: __id_1077 ? "Unlock" : "Lock",
        onclick: async () => {
          try {
            let __id_1079 = await (await __id_13.api.makeRequest(`/api/admin/lockstatus?x=${e.x}&y=${e.y}`)).json();
            __id_1079.success ? __id_13.ui.showAdminLockModal(e, __id_1079.locked) : alert(__id_1079.error || "Failed to check lock status");
          } catch (__id_1080) {
            console.error(o), alert("Failed to check lock status: " + o.message);
          }
        }
      });
    if (e.free || __id_1076.appendChild(__id_13.ui.createElement("span", {
        class: "separator"
      })), __id_1076.appendChild(__id_1078), __id_1077) {
      let __id_1081 = __id_13.ui.createElement("button", {
        innerText: "Show",
        onclick: () => {
          __id_13.ui.showAdminLockCodeModal(e);
        }
      });
      __id_1076.appendChild(__id_1081);
    }
    if (!e.free) {
      let __id_1082 = __id_13.ui.createElement("button", {
        innerText: "Show",
        onclick: () => {
          __id_13.ui.showAdminTileCodeModal(e);
        }
      });
      __id_1076.appendChild(__id_1082);
    }
    return __id_1076;
  },
  createTileControl: __id_1083 => {
    let __id_1084 = __id_13.ui.createElement("div", {
        class: "tile-info",
        innerHTML: `
                <div class="tile-domain">
                    ${e.domain ? `<a href="https://${__id_13.ui.escapeHTML(e.domain)}" target="_blank">${__id_13.ui.escapeHTML(e.domain)}</a>` : `${e.locked ? "Locked tile" : "Free tile"} ${e.x}, ${e.y}`}
                </div>
                <div class="tile-controls">
            `
      }),
      __id_1085 = __id_1084.querySelector(".tile-controls");
    if (e.free) __id_13.plot.lockCache[e.x + "," + e.y] ? __id_1085.appendChild(__id_13.ui.createElement("button", {
      class: "btn",
      innerText: "Unlock",
      onclick: () => {
        __id_13.ui.showUnlockModal(e);
      }
    })) : __id_1085.appendChild(__id_13.ui.createElement("button", {
      class: "btn",
      innerText: "Claim",
      onclick: () => {
        __id_13.ui.showClaimModal(e);
      }
    }));
    else {
      let __id_1086 = __id_13?.user?.sites?.find(__id_1087 => __id_1087.domain === e.domain);
      if (__id_1086 && (__id_1085.appendChild(__id_13.ui.createElement("button", {
          class: "btn",
          innerText: "Edit",
          onclick: () => {
            __id_13.ui.showDashboard(e.domain);
          }
        })), __id_1085.appendChild(__id_13.ui.createElement("button", {
          class: "btn",
          innerText: "Give",
          onclick: () => {
            __id_13.ui.showFreeModal(e);
          }
        }))), (!__id_1086 || __id_13?.user?.selectedSite?.domain !== e.domain && __id_13?.user?.sites?.length >= 2) && __id_1085.appendChild(__id_13.ui.createElement("button", {
          class: "btn",
          innerText: "Take",
          onclick: () => {
            __id_13.ui.showTakeModal(e);
          }
        })), !__id_1086 && __id_13?.user?.selectedSite?.tile) {
        let __id_1088 = __id_13.user.selectedSite.tile;
        Math.abs(__id_1088.x - e.x) <= 1 && Math.abs(__id_1088.y - e.y) <= 1 && __id_13.ui.checkAndShowAttackButton(e, __id_1085);
      }
    }
    return __id_1085.appendChild(__id_13.ui.createElement("button", {
      class: "btn",
      innerHTML: "Link",
      onclick: __id_1089 => {
        i.target.innerText = "Copied!", setTimeout(() => {
          i.target.innerText = "Link";
        }, 500);
        let __id_1090 = e.x * 250 + 250 / 2,
          __id_1091 = e.y * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${__id_1090},${__id_1091}`);
      }
    })), __id_1085.appendChild(__id_13.ui.createElement("button", {
      class: "btn",
      innerHTML: "\u27F3",
      onclick: () => {
        e.fetchContent(e.path, !0), e.setActive(!1);
      }
    })), __id_1085.appendChild(__id_13.ui.createElement("button", {
      class: "btn",
      innerHTML: "&times;",
      onclick: () => {
        e.setActive(!1);
      }
    })), __id_1084.appendChild(__id_1085), __id_1084;
  },
  createVoteMenu: __id_1092 => {
    if (e.free || !e.domain) return null;
    let __id_1093 = __id_13.ui.createElement("div", {
        class: "tile-vote-menu"
      }),
      __id_1094 = __id_13.ui.createElement("button", {
        class: "vote-btn vote-up",
        innerHTML: "\u25B2",
        onclick: () => __id_13.ui.handleVote(e, 1, __id_1094, __id_1095, __id_1096)
      }),
      __id_1096 = __id_13.ui.createElement("div", {
        class: "vote-score",
        innerText: "..."
      }),
      __id_1095 = __id_13.ui.createElement("button", {
        class: "vote-btn vote-down",
        innerHTML: "\u25BC",
        onclick: () => __id_13.ui.handleVote(e, -1, __id_1094, __id_1095, __id_1096)
      });
    return __id_1093.appendChild(__id_1094), __id_1093.appendChild(__id_1096), __id_1093.appendChild(__id_1095), __id_13.ui.fetchVoteData(e, __id_1094, __id_1095, __id_1096), __id_1093;
  },
  fetchVoteData: async (__id_1097, __id_1098, __id_1099, __id_1100) => {
    try {
      let __id_1101 = await (await __id_13.api.makeRequest(`/api/votes/score?domain=${encodeURIComponent(e.domain)}`)).json();
      if (__id_1101.success) {
        let __id_1102 = __id_1101.score || 0;
        i.textContent = __id_1102;
        let __id_1103 = __id_1101.myVote || 0;
        t.classList.remove("active"), n.classList.remove("active"), __id_1103 === 1 ? t.classList.add("active") : __id_1103 === -1 && n.classList.add("active");
      } else i.textContent = "0";
    } catch (__id_1104) {
      console.error("Failed to fetch vote score:", o), i.textContent = "0";
    }
  },
  handleVote: async (__id_1105, __id_1106, __id_1107, __id_1108, __id_1109) => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    let __id_1110 = n.classList.contains("active"),
      __id_1111 = i.classList.contains("active"),
      __id_1112 = t;
    (t === 1 && __id_1110 || t === -1 && __id_1111) && (__id_1112 = 0), n.disabled = !0, i.disabled = !0;
    try {
      let __id_1113 = await (await __id_13.api.makeRequest("/api/votes/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          domain: e.domain,
          vote: __id_1112
        })
      })).json();
      if (__id_1113.success) {
        let __id_1114 = __id_1113.score || 0;
        o.textContent = __id_1114, n.classList.remove("active"), i.classList.remove("active"), __id_1112 === 1 ? n.classList.add("active") : __id_1112 === -1 && i.classList.add("active");
      } else alert(__id_1113.error || "Failed to vote");
    } catch (__id_1115) {
      console.error("Failed to vote:", g), alert("Failed to vote: " + g.message);
    } finally {
      n.disabled = !1, i.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (__id_1116, __id_1117) => {
    try {
      let __id_1118 = await (await __id_13.api.makeRequest(`/api/clans/tile-clan?domain=${encodeURIComponent(e.domain)}`)).json();
      if (__id_1118.success && __id_1118.clan && __id_1118.clan.members && __id_1118.clan.members.length >= 3) return;
      t.prepend(__id_13.ui.createElement("button", {
        class: "btn",
        innerText: "Attack",
        onclick: () => {
          __id_13.ui.showAttackModal(e);
        }
      }));
    } catch (__id_1119) {
      console.error("Failed to check clan for attack button:", n), t.prepend(__id_13.ui.createElement("button", {
        class: "btn",
        innerText: "Attack",
        onclick: () => {
          __id_13.ui.showAttackModal(e);
        }
      }));
    }
  },
  showAttackModal: async __id_1120 => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    if (!__id_13.user.selectedSite) {
      alert("Please select a site first");
      return;
    }
    if (!__id_13.user.selectedSite.tile) {
      alert("You must have a tile to attack from");
      return;
    }
    let __id_1121 = __id_13.user.selectedSite.domain,
      __id_1122 = e.domain,
      __id_1123 = 0,
      __id_1124 = null,
      __id_1125 = null;
    try {
      let __id_1126 = await (await __id_13.api.makeRequest(`/api/attack/success-chance?attacked_domain=${encodeURIComponent(__id_1122)}`)).json();
      __id_1126.success ? (__id_1123 = __id_1126.successChance, __id_1124 = __id_1126.cooldown) : __id_1125 = __id_1126.error || "Failed to get attack success chance";
    } catch (__id_1127) {
      console.error(v), __id_1125 = "Failed to get attack success chance: " + v.message;
    }
    if (__id_1125) {
      alert(__id_1125);
      return;
    }
    if (__id_1123 < 1) {
      alert("Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.");
      return;
    }
    let __id_1128 = "";
    if (__id_1124 && __id_1124.isOnCooldown) {
      let __id_1129 = __id_1124.hoursRemaining;
      __id_1128 = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${__id_1129 > 1 ? `Approximately ${__id_1129} hours remaining until full chance.` : "Less than 1 hour remaining until full chance."}
                </p>
            `;
    }
    new __id_33({
      title: "Attack Tile",
      content: `
                <p>
                    Attack the tile at (${e.x}, ${e.y}) owned by <strong>${__id_13.ui.escapeHTML(__id_1122)}</strong>?<br>
                    Attack success chance: ${__id_1123.toFixed(1)}%
                </p>
                ${__id_1128}
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
        text: "Cancel",
        type: "cancel",
        id: "cancel",
        onClick: __id_1130 => __id_1130.close()
      }, {
        text: "Attack",
        type: "confirm",
        id: "confirm",
        onClick: async __id_1131 => {
          v.setButtonLoading("confirm", !0, "Attacking...");
          try {
            let __id_1132 = await (await __id_13.api.makeRequest("/api/attack/perform", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                x: e.x,
                y: e.y
              })
            })).json();
            if (__id_1132.success) {
              v.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                let __id_1133 = __id_13.plot.getTile(__id_13.user.selectedSite.tile.x, __id_13.user.selectedSite.tile.y);
                __id_1133 && (__id_1133.fetchContent("/index.html", !0), __id_1133.setActive(!1)), e.fetchContent("/index.html", !0), e.setActive(!1), __id_13.user.selectedSite && (__id_13.user.selectedSite.tile = {
                  x: e.x,
                  y: e.y,
                  domain: __id_1121,
                  created_at: Date.now()
                });
              }, 500), v.buttons = [{
                text: "Close",
                type: "cancel",
                id: "close",
                onClick: __id_1134 => __id_1134.close()
              }];
              let __id_1135 = v.element.querySelector(".modal-actions");
              __id_1135.innerHTML = "", v._buttonElements.clear();
              for (let __id_1136 of v.buttons) __id_1135.appendChild(v._createButton(__id_1136));
            } else {
              v.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${__id_13.ui.escapeHTML(__id_1132.error || "The attack was unsuccessful.")}
                                    </p>
                                `), v.buttons = [{
                text: "Close",
                type: "cancel",
                id: "close",
                onClick: __id_1137 => __id_1137.close()
              }];
              let __id_1138 = v.element.querySelector(".modal-actions");
              __id_1138.innerHTML = "", v._buttonElements.clear();
              for (let __id_1139 of v.buttons) __id_1138.appendChild(v._createButton(__id_1139));
            }
          } catch (__id_1140) {
            console.error(d), alert("Failed to attack tile: " + d.message), v.setButtonLoading("confirm", !1);
          }
        }
      }]
    }).open();
  },
  showEmbedModal: () => {
    if (!__id_13.user) {
      location.href = "https://kicya.net/auth/login?redirect=" + encodeURIComponent("https://webtiles.kicya.net/");
      return;
    }
    if (!__id_13.user.selectedSite) {
      alert("Please select a site first");
      return;
    }
    if (!__id_13.user.selectedSite.tile) {
      alert("Your site must have a tile to embed it");
      return;
    }
    let __id_1141 = __id_13.user.selectedSite.domain,
      __id_1142 = !1,
      __id_1143 = __id_1144 => {
        let __id_1145 = `/e/${__id_1141}`;
        return k ? `${__id_1145}?dark=true` : __id_1145;
      },
      __id_1146 = __id_1147 => `<iframe src="https://webtiles.kicya.net${__id_1143(__id_1147)}" width="250" height="270" frameborder="0"></iframe>`,
      __id_1148 = document.createElement("div");
    __id_1148.style.cssText = "display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;";
    let __id_1149 = document.createElement("div");
    __id_1149.style.cssText = "min-width: 250px; max-width: 100%;";
    let __id_1150 = document.createElement("h4");
    __id_1150.textContent = "Preview", __id_1150.style.cssText = "margin: 0 0 10px 0; font-size: 14px;", __id_1149.appendChild(__id_1150);
    let __id_1151 = document.createElement("iframe");
    __id_1151.src = __id_1143(__id_1142), __id_1151.width = "250", __id_1151.height = "270", __id_1151.style.cssText = "border: 1px solid #ddd; border-radius: 4px;", __id_1151.setAttribute("frameborder", "0"), __id_1149.appendChild(__id_1151);
    let __id_1152 = document.createElement("div");
    __id_1152.style.cssText = "flex: 1; min-width: 300px; max-width: 100%;";
    let __id_1153 = document.createElement("h4");
    __id_1153.textContent = "Embed Code", __id_1153.style.cssText = "margin: 0 0 10px 0; font-size: 14px;", __id_1152.appendChild(__id_1153);
    let __id_1154 = document.createElement("div");
    __id_1154.style.cssText = "margin-bottom: 10px; display: flex; align-items: center; gap: 3px;";
    let __id_1155 = document.createElement("input");
    __id_1155.type = "checkbox", __id_1155.id = "embed-dark-mode", __id_1155.style.cssText = "cursor: pointer;";
    let __id_1156 = document.createElement("label");
    __id_1156.setAttribute("for", "embed-dark-mode"), __id_1156.textContent = "Dark mode", __id_1156.style.cssText = "cursor: pointer; font-size: 13px; user-select: none;", __id_1154.appendChild(__id_1155), __id_1154.appendChild(__id_1156), __id_1149.appendChild(__id_1154);
    let __id_1157 = document.createElement("textarea");
    __id_1157.value = __id_1146(__id_1142), __id_1157.style.cssText = "width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;", __id_1157.readOnly = !0, __id_1152.appendChild(__id_1157);
    let __id_1158 = document.createElement("button");
    __id_1158.textContent = "Copy Code", __id_1158.style.cssText = "margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;", __id_1158.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(__id_1157.value), __id_1158.textContent = "Copied!", setTimeout(() => {
          __id_1158.textContent = "Copy Code";
        }, 2e3);
      } catch {
        __id_1157.select(), document.execCommand("copy"), __id_1158.textContent = "Copied!", setTimeout(() => {
          __id_1158.textContent = "Copy Code";
        }, 2e3);
      }
    }), __id_1152.appendChild(__id_1158);
    let __id_1159 = document.createElement("div");
    __id_1159.style.cssText = "font-size: 12px; color: #666; margin-top: 10px;", __id_1159.innerHTML = "You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.", __id_1152.appendChild(__id_1159), __id_1155.addEventListener("change", __id_1160 => {
      __id_1142 = k.target.checked, __id_1151.src = __id_1143(__id_1142), __id_1157.value = __id_1146(__id_1142);
    }), __id_1148.appendChild(__id_1149), __id_1148.appendChild(__id_1152);
    let __id_1161 = new __id_33({
      title: "Embed Tile",
      content: __id_1148,
      buttons: [{
        text: "Close",
        type: "cancel",
        id: "close",
        onClick: __id_1162 => __id_1162.close()
      }]
    });
    __id_1161.open(), __id_1161.element && (__id_1161.element.style.maxWidth = "700px");
  }
};

function __id_900() {
  if (!__id_13.user) return;
  let __id_1163 = __id_13.ui.siteSelector.value,
    __id_1164 = __id_13.user.sites.find(__id_1165 => __id_1165.domain === __id_1163);
  __id_1163 === "select" || __id_1163 === "add" || !__id_1164 ? (__id_13.ui.siteJumpButton.hidden = !0, __id_13.ui.siteEditButton.hidden = !0, __id_13.ui.siteEmbedButton.hidden = !0, __id_13.ui.siteClanButton.hidden = !0) : (__id_13.ui.siteEditButton.hidden = !1, __id_13.ui.siteJumpButton.hidden = !__id_1164.tile, __id_13.ui.siteClanButton.hidden = !__id_1164.tile, __id_13.ui.siteEmbedButton.hidden = !__id_1164.tile), __id_13.user.selectedSite = __id_1164;
  let __id_1166 = __id_13?.plot?.activeTile;
  __id_1166 && (__id_1166.setActive(!1), __id_1166.setActive(!0));
}
__id_13.ui.siteSelector && __id_13.ui.siteSelector.addEventListener("change", () => {
  if (!__id_13.user) return;
  let __id_1167 = __id_13.ui.siteSelector.value;
  __id_1167 === "add" && (location.href = __id_13.user ? "https://kicya.net/account/sites" : "https://kicya.net/auth/register");
  let __id_1168 = __id_13.user.sites.find(__id_1169 => __id_1169.domain === __id_1167);
  if (__id_1168) {
    document.cookie = `site=${__id_1168.domain}; path=/`;
    let __id_1170 = document.querySelector("#kicya-site-select-option");
    __id_1170 && __id_1170.remove(), __id_13.ui.fetchClanInvites();
  }
  __id_900();
});
__id_900();
var __id_889 = document.getElementById("dashboard-modal"),
  __id_887 = document.getElementById("dashboard-iframe"),
  __id_1171 = document.getElementById("dashboard-modal-close"),
  __id_888 = document.getElementById("dashboard-modal-title"),
  __id_890 = document.getElementById("app");
__id_13.ui.siteEditButton && __id_13.ui.siteEditButton.addEventListener("click", () => {
  !__id_13.user || !__id_13.user.selectedSite || __id_13.ui.showDashboard(__id_13.user.selectedSite.domain);
});
__id_13.ui.siteJumpButton && __id_13.ui.siteJumpButton.addEventListener("click", () => {
  if (!__id_13.user || !__id_13.user.selectedSite || !__id_13.user.selectedSite.tile) return;
  let __id_1172 = __id_13.user.selectedSite.tile,
    __id_1173 = __id_1172.x * 250 + 250 / 2,
    __id_1174 = __id_1172.y * 250 + 250 / 2;
  __id_13.camera.centerOn(__id_1173, __id_1174);
});
__id_13.ui.siteCenterButton && __id_13.ui.siteCenterButton.addEventListener("click", () => {
  __id_13.camera && __id_13.camera.centerOn(100, 100);
});
__id_13.ui.siteClanButton && __id_13.ui.siteClanButton.addEventListener("click", () => {
  __id_13.ui.showClanModal();
});
__id_13.ui.siteEmbedButton && __id_13.ui.siteEmbedButton.addEventListener("click", () => {
  __id_13.ui.showEmbedModal();
});

function __id_1175() {
  __id_889.classList.remove("active"), __id_887.src = "", __id_890 && (__id_890.style.display = ""), __id_13.camera && __id_13.camera.setZoomEnabled(!0);
}
__id_1171 && __id_1171.addEventListener("click", __id_1175);
__id_13.ui.zoomSlider.addEventListener("input", __id_1176 => {
  __id_13.camera.zoomTo(__id_13.camera.width / 2, __id_13.camera.height / 2, +e.target.value);
});
var __id_1177 = document.getElementById("kicya-menu-toggle"),
  __id_1178 = document.getElementById("kicya-links");
__id_1177 && __id_1178 && (__id_1177.addEventListener("click", function(__id_1179) {
  e.stopPropagation(), __id_1178.classList.toggle("active");
}), document.addEventListener("click", function(__id_1180) {
  !__id_1178.contains(e.target) && !__id_1177.contains(e.target) && __id_1178.classList.remove("active");
}), __id_1178.querySelectorAll("a").forEach(function(__id_1181) {
  e.addEventListener("click", function() {
    __id_1178.classList.remove("active");
  });
}));

function __id_1182() {
  if (!__id_13.user || localStorage.getItem("rules_accepted")) return;
  new __id_33({
    title: "Rules",
    content: `
            <p>Please read and accept the following rules:</p>
            <ul style="margin: 10px 0; padding-left: 20px; color: #555;">
                <li><b>Absolutely no NSFW content allowed on tiles.</b></li>
                <li>No illegal content or copyright infringement.</li>
                <li>No harrassment, bullying, or trolling.</li>
                <li>Do not try to hack, DDOS, or otherwise attack the website or any other users.</li>
                <li>Do not create extremely eye-bleeding tiles that contain flashing lights, rapidly changing colors, or patterns that may trigger seizures in individuals with epilepsy.</li>
                <li>Do not create multiple tiles unless you legitimately have multiple real sites.</li>
            </ul>
        `,
    buttons: [{
      text: "OK",
      type: "confirm",
      id: "ok",
      onClick: __id_1183 => {
        localStorage.setItem("rules_accepted", "1"), t.close();
      }
    }]
  }).open();
}
__id_1182();
__id_13.user && __id_13.user.selectedSite && __id_13.ui.fetchClanInvites();
var __id_1184 = __id_13.ui;
var __id_1185 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let __id_1186 = __id_13.api.getToken(),
      __id_1187 = __id_13.api.getTokenExpiry();
    if (!__id_13.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!__id_1186 || __id_1187 < Date.now()) && (await __id_13.api.showCaptchaModal());
    let __id_1188 = 6e4,
      __id_1189 = Date.now();
    for (; !__id_13.api.getToken() || __id_13.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - __id_1189 > __id_1188) {
        console.error("[WS] Captcha timeout");
        let __id_1190 = document.getElementById("loading-text");
        __id_1190 && (__id_1190.textContent = "Verification timeout. Please refresh.");
        return;
      }
      await new Promise(__id_1191 => setTimeout(__id_1191, 100));
    }
    this.connect();
  }
  connect() {
    let __id_1192 = location.protocol === "https:" ? "wss:" : "ws:",
      __id_1193 = __id_13.api.getToken() || "";
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${__id_1192}//${location.host}/ws?t=${encodeURIComponent(__id_1193)}`), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => {
      console.log("[WS] Connected"), this.connected = !0, this.consecutiveFailures = 0, this.emit("open");
      for (let __id_1194 of this.messageQueue) this.ws.send(__id_1194);
      this.messageQueue = [];
    }, this.ws.onmessage = __id_1195 => {
      if (i.data instanceof ArrayBuffer)
        for (let __id_1196 of this.binaryHandlers) __id_1196(i.data);
      else try {
        let __id_1197 = JSON.parse(i.data);
        this.emit(__id_1197.type, __id_1197);
      } catch (__id_1198) {
        console.error("[WS] Failed to parse message:", o);
      }
    }, this.ws.onclose = __id_1199 => {
      console.log("[WS] Disconnected, reconnecting...", i.code, i.reason);
      let __id_1200 = this.connected;
      this.connected = !1, this.emit("close");
      let __id_1201 = Date.now() - this.lastConnectionTime;
      !__id_1200 && __id_1201 < 1e3 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = __id_1202 => {
      console.error("[WS] Error:", i);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout) return;
    let __id_1203 = Math.min(3e3 * Math.pow(2, this.consecutiveFailures), 3e4);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let __id_1204 = __id_13.api.getToken(),
        __id_1205 = __id_13.api.getTokenExpiry();
      (!__id_1204 || __id_1205 < Date.now()) && (await __id_13.api.showCaptchaModal());
      let __id_1206 = 3e4,
        __id_1207 = Date.now();
      for (; !__id_13.api.getToken() || __id_13.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - __id_1207 > __id_1206) {
          console.error("[WS] Reconnect captcha timeout");
          return;
        }
        await new Promise(__id_1208 => setTimeout(__id_1208, 100));
      }
      this.connect();
    }, __id_1203);
  }
  on(__id_1209, __id_1210) {
    this.handlers.has(t) || this.handlers.set(t, []), this.handlers.get(t).push(n);
  }
  off(__id_1211, __id_1212) {
    if (!this.handlers.has(t)) return;
    let __id_1213 = this.handlers.get(t),
      __id_1214 = __id_1213.indexOf(n);
    __id_1214 !== -1 && __id_1213.splice(__id_1214, 1);
  }
  onBinary(__id_1215) {
    this.binaryHandlers.push(t);
  }
  emit(__id_1216, __id_1217) {
    if (this.handlers.has(t))
      for (let __id_1218 of this.handlers.get(t)) __id_1218(n);
  }
  send(__id_1219) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(t) : typeof t == "string" && this.messageQueue.push(t);
  }
  sendJSON(__id_1220) {
    this.send(JSON.stringify(t));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
__id_13.ws = new __id_1185();
var __id_1221 = __id_13.ws;
var __id_1222 = new Set(["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volvo", "vote", "voting", "voto", "voyage", "vu", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"]),
  __id_1223 = 100,
  __id_1224 = 3,
  __id_1225 = 5e3,
  __id_1226 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById("chat-container"), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector("#chat-header"), this.body = this.container.querySelector("#chat-body"), this.messagesEl = this.container.querySelector("#chat-messages"), this.input = this.container.querySelector("#chat-input"), this.sendBtn = this.container.querySelector("#chat-send"), this.toggleBtn = this.container.querySelector("#chat-toggle"), this.unreadEl = this.container.querySelector("#chat-unread"), this.header.addEventListener("click", () => this.toggle()), this.container.addEventListener("wheel", __id_1227 => {
        t.stopPropagation();
      }), this.messagesEl.addEventListener("click", __id_1228 => {
        let __id_1229 = t.target.closest(".chat-coord-link");
        if (__id_1229) {
          t.preventDefault();
          let __id_1230 = parseInt(__id_1229.dataset.x),
            __id_1231 = parseInt(__id_1229.dataset.y),
            __id_1232 = 50 / 2;
          !isNaN(__id_1230) && !isNaN(__id_1231) && __id_13.camera && __id_1230 >= -__id_1232 && __id_1230 <= __id_1232 && __id_1231 >= -__id_1232 && __id_1231 <= __id_1232 && __id_13.camera.centerOn(__id_1230 * 250 + 250 / 2, __id_1231 * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let __id_1233 = document.createElement("div");
      __id_1233.id = "chat-resize-left", __id_1233.className = "chat-resize-handle", this.container.appendChild(__id_1233);
      let __id_1234 = document.createElement("div");
      __id_1234.id = "chat-resize-top", __id_1234.className = "chat-resize-handle", this.container.appendChild(__id_1234);
      let __id_1235 = document.createElement("div");
      __id_1235.id = "chat-resize-corner", __id_1235.className = "chat-resize-handle", this.container.appendChild(__id_1235);
      let __id_1236 = null,
        __id_1237 = 0,
        __id_1238 = 0,
        __id_1239 = 0,
        __id_1240 = 0,
        __id_1241 = (__id_1242, __id_1243) => {
          this.isOpen && (__id_1236 = u, __id_1237 = d.clientX, __id_1238 = d.clientY, __id_1239 = this.container.offsetWidth, __id_1240 = this.container.offsetHeight, document.body.style.userSelect = "none", u === "left" ? document.body.style.cursor = "ew-resize" : u === "top" ? document.body.style.cursor = "ns-resize" : document.body.style.cursor = "nwse-resize", d.preventDefault());
        };
      __id_1233.addEventListener("mousedown", __id_1244 => __id_1241(__id_1244, "left")), __id_1234.addEventListener("mousedown", __id_1245 => __id_1241(__id_1245, "top")), __id_1235.addEventListener("mousedown", __id_1246 => __id_1241(__id_1246, "corner")), document.addEventListener("mousemove", __id_1247 => {
        if (__id_1236) {
          if (__id_1236 === "left" || __id_1236 === "corner") {
            let __id_1248 = __id_1237 - d.clientX,
              __id_1249 = Math.min(Math.max(__id_1239 + __id_1248, 250), 800);
            this.container.style.width = __id_1249 + "px";
          }
          if (__id_1236 === "top" || __id_1236 === "corner") {
            let __id_1250 = __id_1238 - d.clientY,
              __id_1251 = Math.min(Math.max(__id_1240 + __id_1250, 100), 700);
            this.container.style.height = __id_1251 + "px";
          }
        }
      }), document.addEventListener("mouseup", () => {
        __id_1236 && (__id_1236 = null, document.body.style.cursor = "", document.body.style.userSelect = "", this.saveSize());
      });
    }
    saveSize() {
      localStorage.setItem("chat-width", this.container.offsetWidth), localStorage.setItem("chat-height", this.container.offsetHeight);
    }
    restoreSize() {
      let __id_1252 = localStorage.getItem("chat-width") ?? 525;
      if (__id_1252) {
        let __id_1253 = parseInt(__id_1252, 10);
        __id_1253 >= 250 && __id_1253 <= 800 && (this.container.style.width = __id_1253 + "px");
      }
      let __id_1254 = localStorage.getItem("chat-height") ?? 330;
      if (__id_1254) {
        let __id_1255 = parseInt(__id_1254, 10);
        __id_1255 >= 100 && __id_1255 <= 700 && (this.container.style.height = __id_1255 + "px");
      }
    }
    createModMenu() {
      this.modMenu = document.createElement("div"), this.modMenu.id = "chat-mod-menu", this.modMenu.hidden = !0, this.modMenu.innerHTML = `
            <div class="mod-menu-info">
                <div class="mod-menu-info-row"><span>User ID:</span> <span id="mod-menu-user-id">-</span></div>
                <div class="mod-menu-info-row"><span>IP:</span> <span id="mod-menu-ip">-</span></div>
            </div>
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
            <button data-action="clear">Clear messages</button>
            <button data-action="mute">Mute</button>
            <button data-action="ban">Ban</button>
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener("click", __id_1256 => {
        let __id_1257 = t.target.dataset.action;
        if (!(!__id_1257 || !this.modMenuTarget)) {
          if (__id_1257 === "jump") this.jumpToUserTile(this.modMenuTarget.nick);
          else if (__id_1257 === "tell") {
            let __id_1258 = `/tell ${this.modMenuTarget.nick} `;
            this.input.value = __id_1258 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__id_1257 === "reply") {
            let __id_1259 = `@${this.modMenuTarget.nick} `;
            this.input.value = __id_1259 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__id_1257 === "clear") __id_13.ws.sendJSON({
            type: "mod_action",
            action: "clear_messages",
            target: this.modMenuTarget
          });
          else if (__id_1257 === "mute") {
            let __id_1260 = prompt("Mute duration (e.g. 10m, 1h, 1d):", "1d");
            __id_1260 && __id_13.ws.sendJSON({
              type: "mod_action",
              action: "mute",
              target: this.modMenuTarget,
              duration: __id_1260
            });
          } else __id_1257 === "ban" && confirm(`Ban ${this.modMenuTarget.nick}? This will also delete all their tiles.`) && __id_13.ws.sendJSON({
            type: "mod_action",
            action: "ban",
            target: this.modMenuTarget
          });
          this.hideModMenu();
        }
      }), document.addEventListener("click", __id_1261 => {
        !this.modMenu.contains(t.target) && !this.userMenu.contains(t.target) && !t.target.classList.contains("chat-nick") && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement("div"), this.userMenu.id = "chat-user-menu", this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener("click", __id_1262 => {
        let __id_1263 = t.target.dataset.action;
        if (!(!__id_1263 || !this.userMenuTarget)) {
          if (__id_1263 === "jump") this.jumpToUserTile(this.userMenuTarget);
          else if (__id_1263 === "tell") {
            let __id_1264 = `/tell ${this.userMenuTarget} `;
            this.input.value = __id_1264 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__id_1263 === "reply") {
            let __id_1265 = `@${this.userMenuTarget} `;
            this.input.value = __id_1265 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(__id_1266, __id_1267, __id_1268) {
      this.userMenuTarget = t, this.userMenu.hidden = !1;
      let __id_1269 = this.userMenu.getBoundingClientRect(),
        __id_1270 = window.innerHeight,
        __id_1271 = window.innerWidth;
      i + __id_1269.height > __id_1270 && (i = __id_1270 - __id_1269.height - 5), n + __id_1269.width > __id_1271 && (n = __id_1271 - __id_1269.width - 5), this.userMenu.style.left = n + "px", this.userMenu.style.top = i + "px";
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(__id_1272) {
      if (!__id_13.plot?.tileCache) return null;
      for (let __id_1273 in __id_13.plot.tileCache)
        for (let __id_1274 in __id_13.plot.tileCache[__id_1273]) {
          let __id_1275 = __id_13.plot.tileCache[__id_1273][__id_1274];
          if ((typeof __id_1275 == "string" ? __id_1275 : __id_1275?.domain ?? null) === t) return {
            x: parseInt(__id_1273),
            y: parseInt(__id_1274)
          };
        }
      return null;
    }
    findTileByDomain(__id_1276) {
      if (!__id_13.plot?.tileCache) return null;
      for (let __id_1277 in __id_13.plot.tileCache)
        for (let __id_1278 in __id_13.plot.tileCache[__id_1277]) {
          let __id_1279 = __id_13.plot.tileCache[__id_1277][__id_1278];
          if ((typeof __id_1279 == "string" ? __id_1279 : __id_1279?.domain ?? null) === t) return {
            x: parseInt(__id_1277),
            y: parseInt(__id_1278)
          };
        }
      return null;
    }
    jumpToUserTile(__id_1280) {
      if (!__id_13.camera) return;
      let __id_1281 = this.findUserTile(t);
      __id_1281 && __id_13.camera.centerOn(__id_1281.x * 250 + 250 / 2, __id_1281.y * 250 + 250 / 2);
    }
    jumpToDomain(__id_1282) {
      if (!__id_13.camera) return !1;
      let __id_1283 = this.findTileByDomain(t);
      return __id_1283 ? (__id_13.camera.centerOn(__id_1283.x * 250 + 250 / 2, __id_1283.y * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(__id_1284, __id_1285, __id_1286) {
      if (t.admin || t.discord) return;
      this.modMenuTarget = t, this.modMenu.querySelector("#mod-menu-user-id").textContent = t.id || "-", this.modMenu.querySelector("#mod-menu-ip").textContent = t.ip || "-", this.modMenu.hidden = !1;
      let __id_1287 = this.modMenu.getBoundingClientRect(),
        __id_1288 = window.innerHeight,
        __id_1289 = window.innerWidth;
      i + __id_1287.height > __id_1288 && (i = __id_1288 - __id_1287.height - 5), n + __id_1287.width > __id_1289 && (n = __id_1289 - __id_1287.width - 5), this.modMenu.style.left = n + "px", this.modMenu.style.top = i + "px";
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let __id_1290 = __id_13.ws;
      __id_1290.on("chat_history", __id_1291 => {
        this.messages = n.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage("Welcome to the chat! The rules are as follows:"), this.showSystemMessage("1. There is zero tolerance for NSFW conversations. Do not discuss it in chat."), this.showSystemMessage("2. Do not spam the chat."), this.showSystemMessage("3. Do not troll, be edgy, annoying, or disruptive. Be kind to others."), this.showSystemMessage("4. Keep conversations in English."), this.showSystemMessage("Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands."), this.showedRules = !0);
      }), __id_1290.on("message", __id_1292 => {
        this.addMessage(n);
      }), __id_1290.on("system_message", __id_1293 => {
        this.showSystemMessage(n.message);
      }), __id_1290.on("chat_cleared", () => {
        this.messages = [], this.messagesEl.innerHTML = "", this.showSystemMessage("Chat has been cleared");
      }), __id_1290.on("clear_user_messages", __id_1294 => {
        this.messages = this.messages.filter(__id_1295 => __id_1295.nick !== n.nick), this.renderMessages(), (__id_13.user?.admin || __id_13.user?.moderator) && this.showSystemMessage(`Messages from ${n.nick} have been cleared`);
      }), __id_1290.on("user_muted", __id_1296 => {
        this.showSystemMessage(`${n.nick} has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener("keydown", __id_1297 => {
        t.stopPropagation(), t.key === "Enter" && !t.shiftKey && (t.preventDefault(), this.sendMessage());
      }), this.input.addEventListener("keyup", __id_1298 => {
        t.stopPropagation();
      }), this.input.addEventListener("keypress", __id_1299 => {
        t.stopPropagation();
      }), this.sendBtn.addEventListener("click", () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? "\u2212" : "+", this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = "auto";
    }
    addMessage(__id_1300) {
      t.time = Date.now();
      let __id_1301 = __id_13.cursors?.currentNick,
        __id_1302 = __id_13.user?.sites?.map(__id_1303 => __id_1303.domain);
      if (__id_1301 && t.message) {
        let __id_1304 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          __id_1305 = t.message.matchAll(__id_1304);
        for (let __id_1306 of __id_1305)
          if (__id_1302.includes(__id_1306[1])) {
            t.isPinged = !0;
            try {
              let __id_1307 = new Audio("/s/ping.mp3");
              __id_1307.volume = .5, __id_1307.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(t), this.messages.length > __id_1223 && this.messages.shift(), this.appendMessageEl(t), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(__id_1308) {
      return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
    escapeURL(__id_1309) {
      return t.replaceAll('"', "%22").replaceAll("'", "%27").replaceAll("`", "%60");
    }
    escapeURLDisplay(__id_1310) {
      return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    parseMessage(__id_1311) {
      let __id_1312 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        __id_1313 = [];
      t = t.replace(__id_1312, (__id_1314, __id_1315) => (__id_1313.push(__id_1315), `<span class="chat-ping">@${this.escapeHTML(__id_1315)}</span>`));
      let __id_1316 = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        __id_1317 = 250,
        __id_1318 = 50 / 2;
      t = t.replace(__id_1316, (__id_1319, __id_1320, __id_1321, __id_1322) => {
        if (u) {
          let __id_1323 = u.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (__id_1323) {
            let __id_1324 = parseInt(__id_1323[1]),
              __id_1325 = parseInt(__id_1323[2]),
              __id_1326 = Math.floor(__id_1324 / __id_1317),
              __id_1327 = Math.floor(__id_1325 / __id_1317);
            if (__id_1326 >= -__id_1318 && __id_1326 <= __id_1318 && __id_1327 >= -__id_1318 && __id_1327 <= __id_1318) return `<a href="#" class="chat-coord-link" data-x="${__id_1326}" data-y="${__id_1327}">${__id_1326}, ${__id_1327}</a>`;
          }
          return `<a href="${this.escapeURL(u)}" target="_blank" rel="noopener noreferrer">${this.escapeURLDisplay(this.escapeURL(u))}</a>`;
        }
        if (b && __id_1222.has(T.toLowerCase()) && !__id_1313.includes(b)) {
          let __id_1328 = "https://" + b;
          return `<a href="${this.escapeURL(__id_1328)}" target="_blank" rel="noopener noreferrer">${this.escapeURLDisplay(b)}</a>`;
        }
        return d;
      });
      let __id_1329 = /(-?\d+),\s*(-?\d+)/g;
      t = t.replace(__id_1329, (__id_1330, __id_1331, __id_1332) => {
        let __id_1333 = parseInt(u),
          __id_1334 = parseInt(b);
        return __id_1333 >= -__id_1318 && __id_1333 <= __id_1318 && __id_1334 >= -__id_1318 && __id_1334 <= __id_1318 ? `<a href="#" class="chat-coord-link" data-x="${u}" data-y="${b}">${d}</a>` : d;
      });
      let __id_1335 = (__id_1336, __id_1337, __id_1338, __id_1339) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${__id_1339}.${__id_1337 ? "gif" : "png"}?v=1" alt=":${this.escapeHTML(__id_1338)}:" title=":${this.escapeHTML(__id_1338)}:" width="20">`;
      return t = t.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, __id_1335), t = t.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, __id_1335), t = t.replace(/\*\*([^*]+)\*\*/g, (__id_1340, __id_1341) => `<strong>${__id_1341}</strong>`), t = t.replace(/\*([^*]+)\*/g, (__id_1342, __id_1343) => `<em>${__id_1343}</em>`), t = t.replace(/~~([^~]+)~~/g, (__id_1344, __id_1345) => `<s>${__id_1345}</s>`), t = t.replace(/__([^_]+)__/g, (__id_1346, __id_1347) => `<u>${__id_1347}</u>`), t = t.replace(/\|\|([^|]+)\|\|/g, (__id_1348, __id_1349) => `<span class="chat-spoiler">${__id_1349}</span>`), t;
    }
    appendMessageEl(__id_1350) {
      let __id_1351 = document.createElement("div");
      __id_1351.className = "chat-message", t.admin && __id_1351.classList.add("chat-admin"), t.mod && __id_1351.classList.add("chat-mod"), t.discord && __id_1351.classList.add("chat-discord"), t.isPinged && __id_1351.classList.add("chat-pinged");
      let __id_1352 = document.createElement("span");
      __id_1352.className = "chat-nick", __id_1352.dataset.nick = t.nick;
      let __id_1353 = __id_13.user?.admin || __id_13.user?.moderator;
      t.discord || (__id_1352.classList.add("chat-nick-clickable"), __id_1352.addEventListener("click", __id_1354 => {
        d.stopPropagation(), __id_1353 && !t.admin ? this.showModMenu(t, d.clientX, d.clientY) : this.findUserTile(t.nick) && this.showUserMenu(t.nick, d.clientX, d.clientY);
      })), t.admin ? __id_1352.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(t.nick) + ": " : t.mod ? __id_1352.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(t.nick) + ": " : t.discord ? __id_1352.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(t.nick) + ": " : __id_1352.textContent = t.nick + ": ";
      let __id_1355 = document.createElement("span");
      __id_1355.className = "chat-text", t.admin || t.mod ? __id_1355.innerHTML = this.parseMessage(t.message).replace(/\n/g, "<br>") : __id_1355.innerHTML = this.parseMessage(this.escapeHTML(t.message)).replace(/\n/g, "<br>");
      let __id_1356 = __id_1355.querySelectorAll(".emoji");
      for (let __id_1357 of __id_1356) __id_1357.addEventListener("error", __id_1358 => {
        u.target.remove();
      });
      let __id_1359 = __id_1355.querySelectorAll(".chat-spoiler");
      for (let __id_1360 of __id_1359) __id_1360.addEventListener("click", __id_1361 => {
        u.target.closest(".chat-spoiler").classList.toggle("chat-spoiler-revealed");
      });
      let __id_1362 = document.createElement("span");
      __id_1362.className = "chat-time";
      let __id_1363 = new Date(t.time || Date.now());
      for (__id_1362.textContent = __id_1363.getHours().toString().padStart(2, "0") + ":" + __id_1363.getMinutes().toString().padStart(2, "0"), __id_1351.appendChild(__id_1352), __id_1351.appendChild(__id_1355), __id_1351.appendChild(__id_1362), this.messagesEl.appendChild(__id_1351); this.messagesEl.children.length > __id_1223;) this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = "";
      for (let __id_1364 of this.messages) this.appendMessageEl(__id_1364);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(__id_1365 = !1) {
      let __id_1366 = this.messagesEl;
      (__id_1366.scrollHeight - __id_1366.scrollTop - __id_1366.clientHeight <= 120 || t) && (__id_1366.scrollTop = __id_1366.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? "99+" : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!__id_13.user) {
        this.showSystemMessage("Please login to chat");
        return;
      }
      let __id_1367 = this.input.value.trim();
      if (!__id_1367 || __id_1367.length > 500) return;
      let __id_1368 = __id_1367.split(`
`);
      if (__id_1368.length > 5 && (__id_1367 = __id_1368.slice(0, 5).join(`
`)), __id_1367 === "/help") {
        this.showSystemMessage("Available commands:"), this.showSystemMessage("/jump [domain] - Jump to a tile by domain"), this.showSystemMessage("/jump X Y - Jump to coordinates X, Y"), this.showSystemMessage("/tell [domain] [msg] - Send a message to a specific domain"), this.input.value = "";
        return;
      }
      if (__id_1367.startsWith("/jump ") || __id_1367.startsWith("/tp ")) {
        let __id_1369 = __id_1367.split(" ").slice(1).join(" ");
        if (__id_1369) {
          let __id_1370 = __id_1369.match(/^(-?\d+)\s+(-?\d+)$/);
          if (__id_1370) {
            let __id_1371 = parseInt(__id_1370[1]),
              __id_1372 = parseInt(__id_1370[2]),
              __id_1373 = 50 / 2;
            !isNaN(__id_1371) && !isNaN(__id_1372) && __id_13.camera && __id_1371 >= -__id_1373 && __id_1371 <= __id_1373 && __id_1372 >= -__id_1373 && __id_1372 <= __id_1373 ? (__id_13.camera.centerOn(__id_1371 * 250 + 250 / 2, __id_1372 * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${__id_1371}, ${__id_1372}`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${__id_1373} and ${__id_1373}`);
          } else {
            let __id_1374 = __id_1369;
            this.jumpToDomain(__id_1374) ? this.showSystemMessage(`Jumped to ${__id_1374}`) : this.showSystemMessage(`Tile with domain "${__id_1374}" not found`);
          }
        } else this.showSystemMessage("Usage: /jump [domain] or /jump X Y");
        this.input.value = "";
        return;
      }
      if (!__id_13.cursors?.currentNick) {
        this.showSystemMessage("Select a site to chat");
        return;
      }
      if (!__id_1367.startsWith("/")) {
        let __id_1375 = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(__id_1376 => __id_1375 - __id_1376 < __id_1225), this.messageTimestamps.length >= __id_1224) return;
        this.messageTimestamps.push(__id_1375);
      }
      __id_13.ws.sendJSON({
        type: "message",
        value: __id_1367
      }), this.input.value = "";
    }
    showSystemMessage(__id_1377) {
      let __id_1378 = document.createElement("div");
      __id_1378.className = "chat-message chat-system", __id_1378.innerHTML = this.parseMessage(this.escapeHTML(t)).replace(/\n/g, "<br>"), this.messagesEl.appendChild(__id_1378), this.scrollToBottom();
    }
  };
__id_13.chat = new __id_1226();
var __id_1379 = __id_13.chat;
var __id_1380 = document.getElementById("loading-text"),
  __id_1381 = 0,
  __id_1382 = setInterval(() => {
    __id_1380.innerText = `Loading${".".repeat(__id_1381++ % 4)}`;
  }, 200),
  __id_1383 = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById("plot"), this.worldSize = __id_78, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let __id_1384 in this.tiles) {
          let __id_1385 = this.tiles[__id_1384];
          !__id_1385.rendered && Date.now() - __id_1385.lastRender > 3e4 && delete this.tiles[__id_1384];
        }
      }, 1e4), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1e3 * 60), setInterval(() => this.fetchTiles(), 1e3 * 60), this.editorChannel = new BroadcastChannel("editor"), this.editorChannel.onmessage = __id_1386 => {
        if (t.data.type === "saved") {
          let {
            path: __id_1387,
            site: __id_1388
          } = t.data;
          this.refreshTile(__id_1388, __id_1387);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      __id_13.ws && (__id_13.ws.on("refresh", __id_1389 => {
        if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
          let __id_1390 = null;
          for (let __id_1391 in this.tileCache) {
            for (let __id_1392 in this.tileCache[__id_1391]) {
              let __id_1393 = this.tileCache[__id_1391][__id_1392];
              if ((typeof __id_1393 == "string" ? null : __id_1393?.domain ?? null) === t.domain) {
                __id_1390 = typeof __id_1393 == "object" && __id_1393.updated_at ? __id_1393.updated_at : Math.floor(Date.now() / 1e3);
                break;
              }
            }
            if (__id_1390 !== null) break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: "tile-refresh",
            domain: t.domain,
            lastUpdate: __id_1390 || Math.floor(Date.now() / 1e3)
          });
        }
        setTimeout(() => {
          this.refreshTile(t.domain, t.path);
        }, 500);
      }), __id_13.ws.on("claim", __id_1394 => {
        this.tileCache[t.x] = this.tileCache[t.x] || {}, this.tileCache[t.x][t.y] = typeof t.domain == "string" ? {
          domain: t.domain,
          updated_at: Math.floor(Date.now() / 1e3)
        } : t.domain;
        let __id_1395 = this.tiles[`${t.x},${t.y}`];
        if (__id_1395) {
          let __id_1396 = typeof this.tileCache[t.x][t.y] == "string" ? this.tileCache[t.x][t.y] : this.tileCache[t.x][t.y].domain;
          __id_1395.setDomain(__id_1396);
        }
      }), __id_13.ws.on("free", __id_1397 => {
        this.tileCache[t.x] && delete this.tileCache[t.x][t.y];
        let __id_1398 = this.tiles[`${t.x},${t.y}`];
        __id_1398 && __id_1398.setFree();
      }), __id_13.ws.on("lock", __id_1399 => {
        t.locked ? this.lockCache[t.x + "," + t.y] = !0 : delete this.lockCache[t.x + "," + t.y];
        let __id_1400 = this.tiles[`${t.x},${t.y}`];
        __id_1400 && __id_1400.setLocked(t.locked);
      }), __id_13.ws.on("user_count", __id_1401 => {
        let __id_1402 = document.getElementById("user-count");
        __id_1402 && (__id_1402.textContent = `${t.count} online`);
      }), __id_13.ws.on("clan_invite", __id_1403 => {
        t.invite && (__id_13.ui.pendingClanInvites.find(__id_1404 => __id_1404.id === t.invite.id) || (__id_13.ui.pendingClanInvites.push({
          id: t.invite.id,
          clan_id: t.invite.clan_id,
          clan_name: t.invite.clan_name
        }), __id_13.ui.updateClanIndicator()));
      }));
    }
    refreshTile(__id_1405, __id_1406) {
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        let __id_1407 = null;
        for (let __id_1408 in this.tileCache) {
          for (let __id_1409 in this.tileCache[__id_1408]) {
            let __id_1410 = this.tileCache[__id_1408][__id_1409];
            if ((typeof __id_1410 == "string" ? null : __id_1410?.domain ?? null) === t) {
              __id_1407 = typeof __id_1410 == "object" && __id_1410.updated_at ? __id_1410.updated_at : Math.floor(Date.now() / 1e3);
              break;
            }
          }
          if (__id_1407 !== null) break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: "tile-refresh",
          domain: t,
          lastUpdate: __id_1407 || Math.floor(Date.now() / 1e3)
        });
      }
      for (let __id_1411 in this.tiles) {
        let __id_1412 = this.tiles[__id_1411];
        if (__id_1412.domain === t && __id_1412.path === n) {
          if (__id_1412.active) break;
          __id_1412.fetchContent(__id_1412.path, !0);
          break;
        }
      }
    }
    addTile(__id_1413) {
      this.tiles[`${t.x},${t.y}`] = t;
    }
    getTile(__id_1414, __id_1415) {
      if (t > this.worldSize / 2 || t < -this.worldSize / 2 || n > this.worldSize / 2 || n < -this.worldSize / 2) return null;
      if (!this.tiles[`${t},${n}`]) {
        let __id_1416 = this.tileCache?.[t]?.[n],
          __id_1417 = typeof __id_1416 == "string" ? __id_1416 : __id_1416?.domain ?? null;
        this.tiles[`${t},${n}`] = new __id_821({
          x: t,
          y: n,
          domain: __id_1417 ?? null
        });
      }
      return this.tiles[`${t},${n}`];
    }
    removeTile(__id_1418) {
      t.unrender(), delete this.tiles[`${t.x},${t.y}`];
    }
    clear() {
      Object.values(this.tiles).forEach(__id_1419 => __id_1419.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await __id_13.api.makeRequest("/api/tiles").then(__id_1420 => __id_1420.json())).tiles, "serviceWorker" in navigator && navigator.serviceWorker.controller) {
        let __id_1421 = {};
        for (let __id_1422 in this.tileCache)
          for (let __id_1423 in this.tileCache[__id_1422]) {
            let __id_1424 = this.tileCache[__id_1422][__id_1423];
            typeof __id_1424 == "object" && __id_1424.domain && __id_1424.updated_at && (__id_1421[__id_1424.domain] = __id_1424.updated_at.toString());
          }
        Object.keys(__id_1421).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: "tile-updates",
          updates: __id_1421
        });
      }
      for (let __id_1425 in this.tileCache)
        for (let __id_1426 in this.tileCache[__id_1425]) {
          let __id_1427 = this.tileCache[__id_1425][__id_1426],
            __id_1428 = typeof __id_1427 == "string" ? __id_1427 : __id_1427?.domain ?? null,
            __id_1429 = this.tiles[`${__id_1425},${__id_1426}`];
          __id_1429 && __id_1429.domain !== __id_1428 && __id_1429.setDomain(__id_1428);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let __id_1430 = document.getElementById("loading"),
          __id_1431 = document.getElementById("app");
        __id_1430.hidden = !0, __id_1431.hidden = !1, clearInterval(__id_1382);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await __id_13.api.makeRequest("/api/locks").then(__id_1432 => __id_1432.json())).locks;
      for (let __id_1433 in this.lockCache) {
        let __id_1434 = this.tiles[__id_1433];
        __id_1434 && __id_1434.element && __id_1434.setLocked(!0);
      }
    }
  };
__id_13.plot = new __id_1383();
var __id_1435 = document.getElementById("plot"),
  __id_1436 = class {
    constructor() {
      if (this.x = 0, this.y = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith("#") && location.hash.includes(",")) try {
        let [__id_1437, __id_1438] = location.hash.slice(1).split(",");
        this.centerOn(parseInt(__id_1437), parseInt(__id_1438)), location.hash = "";
      } catch {}
      let __id_1439 = 0,
        __id_1440 = 0;
      setInterval(() => {
        let __id_1441 = this.x + this.width / 2,
          __id_1442 = this.y + this.height / 2;
        (__id_1441 != __id_1439 || __id_1442 != __id_1440) && (__id_1439 = __id_1441, __id_1440 = __id_1442);
      }, 1e3), window.addEventListener("resize", () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let __id_1443 = 0;
      this.zoomEnabled = !0, this.wheelHandler = __id_1444 => {
        if (!this.zoomEnabled || u.target.closest(".tile.active")) return;
        u.preventDefault();
        let __id_1445 = u.deltaY;
        if (Math.abs(__id_1445) > 1 && Date.now() - __id_1443 > 100) {
          let __id_1446 = __id_77.indexOf(this.zoom) + (__id_1445 > 0 ? -1 : 1);
          if (__id_1446 >= 1 && __id_1446 < __id_77.length) {
            let __id_1447 = __id_13.mouse?.x || this.width / 2,
              __id_1448 = __id_13.mouse?.y || this.height / 2;
            this.zoomTo(__id_1447, __id_1448, __id_77[__id_1446]), __id_1443 = Date.now();
          }
        }
      }, window.addEventListener("wheel", this.wheelHandler, {
        passive: !1
      });
      let __id_1449 = 0,
        __id_1450 = {
          x: 0,
          y: 0
        },
        __id_1451 = __id_1452 => {
          let __id_1453 = u[0].clientX - u[1].clientX,
            __id_1454 = u[0].clientY - u[1].clientY;
          return Math.sqrt(__id_1453 * __id_1453 + __id_1454 * __id_1454);
        },
        __id_1455 = __id_1456 => ({
          x: (__id_1456[0].clientX + __id_1456[1].clientX) / 2,
          y: (__id_1456[0].clientY + __id_1456[1].clientY) / 2
        });
      document.addEventListener("touchstart", __id_1457 => {
        u.touches.length === 2 && (__id_1449 = __id_1451(u.touches), __id_1450 = __id_1455(u.touches));
      }, {
        passive: !0
      }), document.addEventListener("touchmove", __id_1458 => {
        if (this.zoomEnabled && u.touches.length === 2) {
          if (u.target.closest(".tile.active")) return;
          let __id_1459 = __id_1451(u.touches),
            __id_1460 = __id_1455(u.touches);
          if (__id_1449 > 0) {
            let __id_1461 = __id_1459 / __id_1449,
              __id_1462 = __id_77.indexOf(this.zoom);
            __id_1461 > 1.1 && __id_1462 < __id_77.length - 1 ? (this.zoomTo(__id_1460.x, __id_1460.y, __id_77[__id_1462 + 1]), __id_1449 = __id_1459) : __id_1461 < .9 && __id_1462 > 1 && (this.zoomTo(__id_1460.x, __id_1460.y, __id_77[__id_1462 - 1]), __id_1449 = __id_1459);
          }
          __id_1450 = __id_1460, u.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener("touchend", __id_1463 => {
        u.touches.length < 2 && (__id_1449 = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let __id_1464 = __id_1465 => {
          u.key in this.keysPressed && (u.preventDefault(), this.keysPressed[u.key] = !0);
        },
        __id_1466 = __id_1467 => {
          u.key in this.keysPressed && (u.preventDefault(), this.keysPressed[u.key] = !1);
        };
      window.addEventListener("keydown", __id_1464), window.addEventListener("keyup", __id_1466);
      let __id_1468 = () => {
        if (!__id_13.plot?.activeTile) {
          let __id_1469 = 0,
            __id_1470 = 0;
          this.keysPressed.ArrowLeft && (__id_1469 -= this.moveSpeed), this.keysPressed.ArrowRight && (__id_1469 += this.moveSpeed), this.keysPressed.ArrowUp && (__id_1470 -= this.moveSpeed), this.keysPressed.ArrowDown && (__id_1470 += this.moveSpeed), (__id_1469 !== 0 || __id_1470 !== 0) && this.move(this.x + __id_1469, this.y + __id_1470);
        }
        requestAnimationFrame(__id_1468);
      };
      __id_1468();
    }
    move(__id_1471, __id_1472) {
      this.x = Math.round(t), this.y = Math.round(n), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      __id_1435.style.transform = `translate3d(${-this.x}px, ${-this.y}px, 0) scale(${this.zoom})`;
    }
    zoomTo(__id_1473, __id_1474, __id_1475) {
      let __id_1476 = (this.x + t) / this.zoom,
        __id_1477 = (this.y + n) / this.zoom;
      this.zoom = i, this.x = __id_1476 * this.zoom - t, this.y = __id_1477 * this.zoom - n, __id_13.ui.zoomSlider.value = this.zoom, this.move(this.x, this.y);
    }
    centerOn(__id_1478, __id_1479) {
        let __id_1480 = t * this.zoom - this.width / 2,
          __id_1481 = n * this.zoom - this.height / 2;
        this.move(__id_1480, __id_1481);
      }
      * getTilesInView() {
        let __id_1482 = __id_821.toTilePosition((this.x - 250 * this.zoom) / this.zoom, (this.y - 250 * this.zoom) / this.zoom),
          __id_1483 = __id_821.toTilePosition((this.x + 250 * this.zoom + this.width) / this.zoom, (this.y + 250 * this.zoom + this.height) / this.zoom);
        for (let __id_1484 = __id_1482.x; __id_1484 < __id_1483.x; __id_1484++)
          for (let __id_1485 = __id_1482.y; __id_1485 < __id_1483.y; __id_1485++) {
            let __id_1486 = __id_13.plot.getTile(__id_1484, __id_1485);
            __id_1486 && (yield __id_1486);
          }
      }
      * getTilesInViewWithBuffer(__id_1487 = 500) {
        let __id_1488 = __id_821.toTilePosition((this.x - 250 * this.zoom - t) / this.zoom, (this.y - 250 * this.zoom - t) / this.zoom),
          __id_1489 = __id_821.toTilePosition((this.x + 250 * this.zoom + this.width + t) / this.zoom, (this.y + 250 * this.zoom + this.height + t) / this.zoom);
        for (let __id_1490 = __id_1488.x; __id_1490 < __id_1489.x; __id_1490++)
          for (let __id_1491 = __id_1488.y; __id_1491 < __id_1489.y; __id_1491++) {
            let __id_1492 = __id_13.plot.getTile(__id_1490, __id_1491);
            __id_1492 && (yield __id_1492);
          }
      }
    isTileWithinBuffer(__id_1493, __id_1494 = 500) {
      let __id_1495 = t.x * 250,
        __id_1496 = t.y * 250,
        __id_1497 = 250,
        __id_1498 = this.x / this.zoom,
        __id_1499 = (this.x + this.width) / this.zoom,
        __id_1500 = this.y / this.zoom,
        __id_1501 = (this.y + this.height) / this.zoom,
        __id_1502 = __id_1495 + __id_1497,
        __id_1503 = __id_1496 + __id_1497,
        __id_1504 = n / this.zoom,
        __id_1505 = 0;
      __id_1502 < __id_1498 ? __id_1505 = __id_1498 - __id_1502 : __id_1495 > __id_1499 && (__id_1505 = __id_1495 - __id_1499);
      let __id_1506 = 0;
      return __id_1503 < __id_1500 ? __id_1506 = __id_1500 - __id_1503 : __id_1496 > __id_1501 && (__id_1506 = __id_1496 - __id_1501), Math.sqrt(__id_1505 * __id_1505 + __id_1506 * __id_1506) <= __id_1504;
    }
    renderTilesInView() {
      let __id_1507 = new Set(),
        __id_1508 = 260;
      for (let __id_1509 of this.getTilesInViewWithBuffer(__id_1508)) __id_1509.render(), __id_1507.add(__id_1509);
      if (this.renderedTiles)
        for (let __id_1510 of this.renderedTiles) __id_1507.has(__id_1510) || (this.isTileWithinBuffer(__id_1510, __id_1508) ? __id_1507.add(__id_1510) : __id_1510.unrender());
      this.renderedTiles = __id_1507;
    }
    setZoomEnabled(__id_1511) {
      this.zoomEnabled = t;
    }
  };
__id_13.camera = new __id_1436();
var __id_1512 = class {
  constructor() {
    this.x = 0, this.y = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let __id_1513 = 0,
      __id_1514 = 0,
      __id_1515 = 0,
      __id_1516 = 0,
      __id_1517 = 0,
      __id_1518 = (__id_1519, __id_1520, __id_1521) => {
        if (!u.closest("#plot") || u.closest(".tile-info, .tile-admin-panel, .tile-vote-menu")) return !1;
        let __id_1522 = __id_13.plot.getTile(this.tileX, this.tileY);
        return __id_13.plot.activeTile && __id_13.plot.activeTile.id === __id_1522.id ? !1 : (this.down = !0, __id_1515 = v, __id_1516 = d, __id_1513 = __id_13.camera.x, __id_1514 = __id_13.camera.y, __id_1517 = Date.now(), !0);
      },
      __id_1523 = () => {
        if (!this.down) return;
        this.down = !1;
        let __id_1524 = Math.abs(this.x - __id_1515),
          __id_1525 = Math.abs(this.y - __id_1516);
        Date.now() - __id_1517 < 400 && __id_1524 < 10 && __id_1525 < 10 && __id_13.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      __id_1526 = (__id_1527, __id_1528) => {
        this.x = v, this.y = d;
        let __id_1529 = __id_13.camera;
        this.worldX = (__id_1529.x + this.x) / __id_1529.zoom, this.worldY = (__id_1529.y + this.y) / __id_1529.zoom;
        let __id_1530 = __id_821.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = __id_1530.x, this.tileY = __id_1530.y, __id_13.ui.coords.textContent = `${this.tileX}, ${this.tileY}`, document.documentElement.style.setProperty("--coords-width", __id_13.ui.coords.offsetWidth + "px"), this.down) {
          let __id_1531 = this.x - __id_1515,
            __id_1532 = this.y - __id_1516;
          __id_1529.move(__id_1513 - __id_1531, __id_1514 - __id_1532);
        }
      };
    document.addEventListener("mousedown", __id_1533 => {
      __id_1518(v.clientX, v.clientY, v.target) && v.preventDefault();
    }), document.addEventListener("mouseup", __id_1534 => {
      __id_1523();
    }), document.addEventListener("mousemove", __id_1535 => {
      __id_1526(v.clientX, v.clientY);
    }), document.addEventListener("touchstart", __id_1536 => {
      if (v.touches.length === 1) {
        let __id_1537 = v.touches[0];
        __id_1518(__id_1537.clientX, __id_1537.clientY, __id_1537.target);
      }
    }, {
      passive: !0
    }), document.addEventListener("touchend", __id_1538 => {
      __id_1523();
    }), document.addEventListener("touchcancel", __id_1539 => {
      this.down = !1;
    }), document.addEventListener("touchmove", __id_1540 => {
      if (v.touches.length === 1) {
        let __id_1541 = v.touches[0];
        __id_1526(__id_1541.clientX, __id_1541.clientY), this.down && __id_1541.target.closest("#plot") && !__id_1541.target.closest(".tile.active") && v.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
__id_13.mouse = new __id_1512();
var __id_1542 = document.getElementById("plot"),
  __id_1543 = document.getElementById("dashboard-modal"),
  __id_1544 = "/s/img/cursor.png",
  __id_1545 = 150,
  __id_1546 = 50,
  __id_1547 = 100,
  __id_1548 = 100,
  __id_1549 = 150,
  __id_1550 = 500,
  __id_1551 = .6,
  __id_1552 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let __id_1553 = __id_13.ws;
      __id_1553.on("open", () => {
        this.sendNickIfSelected();
      }), __id_1553.on("close", () => {
        this.clearAllCursors();
      }), __id_1553.on("cursors", __id_1554 => {
        for (let __id_1555 of n.cursors) this.addCursor(__id_1555.id, __id_1555.nick, __id_1555.x, __id_1555.y);
      }), __id_1553.on("join", __id_1556 => {
        this.addCursor(n.id, n.nick, 0, 0);
      }), __id_1553.on("leave", __id_1557 => {
        this.removeCursor(n.id);
      }), __id_1553.onBinary(__id_1558 => {
        let __id_1559 = new Int32Array(n);
        if (__id_1559.length >= 3) {
          let __id_1560 = __id_1559[0],
            __id_1561 = __id_1559[1],
            __id_1562 = __id_1559[2];
          this.updateCursorPosition(__id_1560, __id_1561, __id_1562);
        }
      });
    }
    addCursor(__id_1563, __id_1564, __id_1565, __id_1566) {
      if (n === this.currentNick) return;
      if (this.cursors.has(t)) {
        this.updateCursorPosition(t, i, o);
        return;
      }
      this.cursors.set(t, {
        id: t,
        nick: n,
        x: i,
        y: o,
        element: null
      }), this.updateElementPosition(t, i, o);
      let __id_1567 = this.cursors.get(t);
      __id_1567.element && (__id_1567.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(__id_1568) {
      let __id_1569 = this.cursors.get(t);
      __id_1569 && (__id_1569.element && __id_1569.element.parentNode && __id_1569.element.remove(), this.cursors.delete(t));
    }
    updateCursorPosition(__id_1570, __id_1571, __id_1572) {
      let __id_1573 = this.cursors.get(t);
      __id_1573 && (__id_1573.x = n, __id_1573.y = i, this.updateElementPosition(t, n, i));
    }
    isCursorOnScreen(__id_1574, __id_1575) {
      let __id_1576 = __id_13.camera;
      if (!__id_1576) return !0;
      let __id_1577 = __id_1576.x / __id_1576.zoom,
        __id_1578 = (__id_1576.x + __id_1576.width) / __id_1576.zoom,
        __id_1579 = __id_1576.y / __id_1576.zoom,
        __id_1580 = (__id_1576.y + __id_1576.height) / __id_1576.zoom;
      return t >= __id_1577 && t <= __id_1578 && n >= __id_1579 && n <= __id_1580;
    }
    updateElementPosition(__id_1581, __id_1582, __id_1583) {
      let __id_1584 = this.cursors.get(t);
      if (!__id_1584) return;
      let __id_1585 = this.isCursorOnScreen(n, i);
      if (n === 0 && i === 0 || !__id_1585) __id_1584.element && __id_1584.element.parentNode && (__id_1584.element.remove(), __id_1584.element = null);
      else {
        if (!__id_1584.element || !__id_1584.element.parentNode) {
          let __id_1586 = document.createElement("div");
          __id_1586.className = "cursor-container", __id_1586.innerHTML = `
                    <img class="cursor-image" src="${__id_1544}" alt="cursor" />
                    <div class="cursor-nick">${this.escapeHTML(__id_1584.nick)}</div>
                `, __id_1586.style.opacity = this.getCursorOpacityFromCenter(), __id_1584.element = __id_1586, __id_1542.appendChild(__id_1586);
        }
        __id_1584.element.style.transform = `translate(${n}px, ${i}px)`, this.updateNickOpacity(__id_1584.element, n, i);
      }
    }
    updateNickOpacity(__id_1587, __id_1588, __id_1589) {
      let __id_1590 = t.querySelector(".cursor-nick");
      if (!__id_1590) return;
      let __id_1591 = this.mouseWorldX - n,
        __id_1592 = this.mouseWorldY - i,
        __id_1593 = Math.sqrt(__id_1591 * __id_1591 + __id_1592 * __id_1592),
        __id_1594 = Math.max(0, 1 - __id_1593 / __id_1545);
      __id_1590.style.opacity = __id_1594;
    }
    updateAllNickOpacities() {
      for (let __id_1595 of this.cursors.values()) __id_1595.element && this.updateNickOpacity(__id_1595.element, __id_1595.x, __id_1595.y);
    }
    getCursorOpacityFromCenter() {
      let __id_1596 = this.mouseWorldX - __id_1547,
        __id_1597 = this.mouseWorldY - __id_1548,
        __id_1598 = Math.sqrt(__id_1596 * __id_1596 + __id_1597 * __id_1597);
      return __id_1598 <= __id_1549 ? 0 : __id_1598 >= __id_1550 ? __id_1551 : (__id_1598 - __id_1549) / (__id_1550 - __id_1549) * __id_1551;
    }
    updateAllCursorOpacities() {
      let __id_1599 = this.getCursorOpacityFromCenter();
      for (let __id_1600 of this.cursors.values()) __id_1600.element && (__id_1600.element.style.opacity = __id_1599);
    }
    clearAllCursors() {
      for (let __id_1601 of this.cursors.values()) __id_1601.element && __id_1601.element.parentNode && __id_1601.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let __id_1602 of this.cursors.values()) this.updateElementPosition(__id_1602.id, __id_1602.x, __id_1602.y);
    }
    setupMouseTracking() {
      document.addEventListener("mousemove", __id_1603 => {
        let __id_1604 = __id_13.camera;
        if (!__id_1604 || (this.mouseWorldX = Math.round((__id_1604.x + t.clientX) / __id_1604.zoom), this.mouseWorldY = Math.round((__id_1604.y + t.clientY) / __id_1604.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !__id_13.ws.isConnected) || !this.currentNick || __id_33.activeModal || __id_1543?.classList.contains("active") || Date.now() - this.lastPositionSent < 25) return;
        let __id_1605 = new Int16Array(3);
        __id_1605[0] = this.mouseWorldX, __id_1605[1] = this.mouseWorldY, __id_1605[2] = 0, __id_13.ws.send(__id_1605.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let __id_1606 = __id_13.ui?.siteSelector;
      __id_1606 && __id_1606.addEventListener("change", () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener("resize", () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener("mousedown", __id_1607 => {
        if (t.button !== 1 || this.getCursorOpacityFromCenter() < .05) return;
        let __id_1608 = this.getClosestCursor();
        __id_1608 && __id_1608.distance <= __id_1546 && (t.preventDefault(), window.open(`https://${__id_1608.cursor.nick}`, "_blank"));
      });
    }
    getClosestCursor() {
      let __id_1609 = null,
        __id_1610 = 1 / 0;
      for (let __id_1611 of this.cursors.values()) {
        let __id_1612 = this.mouseWorldX - __id_1611.x,
          __id_1613 = this.mouseWorldY - __id_1611.y,
          __id_1614 = Math.sqrt(__id_1612 * __id_1612 + __id_1613 * __id_1613);
        __id_1614 < __id_1610 && (__id_1610 = __id_1614, __id_1609 = __id_1611);
      }
      return __id_1609 ? {
        cursor: __id_1609,
        distance: __id_1610
      } : null;
    }
    sendNickIfSelected() {
      if (!__id_13.ws.isConnected) return;
      let __id_1615 = __id_13.user?.selectedSite;
      if (!__id_1615 || !__id_1615.domain) {
        this.currentNick = null;
        return;
      }
      let __id_1616 = __id_1615.domain;
      this.currentNick = __id_1616;
      for (let [__id_1617, __id_1618] of this.cursors.entries()) __id_1618.nick === __id_1616 && this.removeCursor(__id_1617);
      __id_13.ws.sendJSON({
        type: "nick",
        value: __id_1616
      });
    }
    escapeHTML(__id_1619) {
      return t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
    }
  },
  __id_1620 = __id_1552;
if ("serviceWorker" in navigator) {
  let __id_1621 = "sw_version",
    __id_1622 = async () => {
      try {
        let __id_1623 = await navigator.serviceWorker.register("/sw.js");
        return console.log("[SW] Service Worker registered:", __id_1623.scope), __id_1623;
      } catch (__id_1624) {
        return console.error("[SW] Service Worker registration failed:", o), null;
      }
    };
  (async () => {
    let __id_1625 = localStorage.getItem(__id_1621),
      __id_1626 = "12";
    if (__id_1625 !== __id_1626) {
      console.log(`[SW] Version mismatch: stored=${__id_1625}, current=${__id_1626}`);
      let __id_1627 = await navigator.serviceWorker.getRegistrations();
      for (let __id_1628 of __id_1627) await __id_1628.unregister(), console.log("[SW] Unregistered old service worker");
      let __id_1629 = await caches.keys();
      await Promise.all(__id_1629.map(__id_1630 => {
        if (g.includes("webtiles")) return console.log(`[SW] Deleting cache: ${g}`), caches.delete(g);
      })), localStorage.setItem(__id_1621, __id_1626), await __id_1622();
    } else(await navigator.serviceWorker.getRegistrations()).length === 0 && (await __id_1622());
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: "clear-cache"
    });
  });
}
__id_13.cursors = new __id_1620();
__id_13.user?.admin && (window.WebTiles = {
  ...__id_13,
  classes: {
    Tile: __id_821,
    Camera: __id_1436,
    Plot: __id_1383,
    Mouse: __id_1512,
    Cursors: __id_1620
  }
});
var __id_1631 = Date.now();
async function __id_1632() {
  let __id_1633 = await (await __id_13.api.makeRequest("/s/dist/buildtime.txt")).text();
  return parseInt(__id_1633);
}
__id_1632().then(__id_1634 => {
  __id_1631 = e;
});
var __id_1635 = setInterval(async () => {
  let __id_1636 = await __id_1632();
  if (__id_1636 !== __id_1631) {
    clearInterval(__id_1635), __id_1631 = __id_1636;
    let __id_1637 = document.createElement("div");
    __id_1637.id = "update-toast", __id_1637.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(__id_1637), document.getElementById("refresh-btn").addEventListener("click", () => {
      location.reload();
    });
  }
}, 6e4);