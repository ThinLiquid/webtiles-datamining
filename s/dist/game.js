/* 5463898b5ec2aa5f65d96b3f1ac87c941594f5319d28b25fbefe5cdfbdd2f384 */
var __var_0 = Object.defineProperty;
var __var_1 = (e, t, n) => t in e ? __var_0(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var __var_2 = (e, t, n) => __var_1(e, typeof t != 'symbol' ? t + '' : t, n);
var __var_3 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  __var_4 = document.getElementById('user-data');
if (__var_4)
  try {
    let __var_5 = JSON.parse(__var_4.textContent);
    __var_5 && __var_5.email_verified && (__var_3.user = __var_5);
  } catch (__var_5) {
    console.error(__var_5);
  }
var __var_6 = __var_3;
var __var_7 = class __var_7 {
  static init() {
    __var_7.container || (__var_7.container = document.createElement('div'), __var_7.container.id = 'modal-container', __var_7.container.className = 'modal-overlay', __var_7.container.addEventListener('click', t => {
      t.target === __var_7.container && __var_7.activeModal && __var_7.activeModal.close();
    }), document.body.appendChild(__var_7.container));
  }
  constructor(t = {}) {
    this.title = t.title || '', this.content = t.content || '', this.warning = t.warning || null, this.buttons = t.buttons || [], this.onClose = t.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(t) {
    let __var_8 = document.createElement('button');
    return __var_8.className = `modal-btn modal-btn-${ t.type || 'default' }`, __var_8.textContent = t.text, t.disabled && (__var_8.disabled = !0), __var_8.addEventListener('click', async () => {
      t.onClick && await t.onClick(this, __var_8);
    }), this._buttonElements.set(t.id || t.text, __var_8), __var_8;
  }
  _build() {
    let __var_9 = document.createElement('div');
    if (__var_9.className = 'modal-content', this.title) {
      let __var_8 = document.createElement('h3');
      __var_8.className = 'modal-title', __var_8.textContent = this.title, __var_9.appendChild(__var_8);
    }
    if (this.content) {
      let __var_8 = document.createElement('div');
      __var_8.className = 'modal-body', typeof this.content == 'string' ? __var_8.innerHTML = this.content : this.content instanceof HTMLElement && __var_8.appendChild(this.content), __var_9.appendChild(__var_8);
    }
    if (this._warningEl = document.createElement('div'), this._warningEl.className = 'modal-warning', this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none', __var_9.appendChild(this._warningEl), this.buttons.length > 0) {
      let __var_8 = document.createElement('div');
      __var_8.className = 'modal-actions';
      for (let __var_10 of this.buttons)
        __var_8.appendChild(this._createButton(__var_10));
      __var_9.appendChild(__var_8);
    }
    return this.element = __var_9, __var_9;
  }
  open() {
    return __var_7.init(), __var_7.activeModal && __var_7.activeModal.close(), this._build(), __var_7.container.innerHTML = '', __var_7.container.appendChild(this.element), __var_7.container.classList.add('active'), __var_7.activeModal = this, __var_6.camera && __var_6.camera.setZoomEnabled(!1), this;
  }
  close() {
    return __var_7.container && __var_7.container.classList.remove('active'), __var_7.activeModal = null, this._buttonElements.clear(), __var_6.camera && __var_6.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(__var_9) {
    let __var_8 = this.element?.querySelector('.modal-body');
    return __var_8 && (typeof __var_9 == 'string' ? __var_8.innerHTML = __var_9 : __var_9 instanceof HTMLElement && (__var_8.innerHTML = '', __var_8.appendChild(__var_9))), this.content = __var_9, this;
  }
  setWarning(__var_9) {
    return this._warningEl && (__var_9 ? (this._warningEl.innerHTML = __var_9, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none'), this.warning = __var_9, this;
  }
  getButton(__var_9) {
    return this._buttonElements.get(__var_9);
  }
  setButtonLoading(__var_9, __var_8, __var_10) {
    let __var_11 = this.getButton(__var_9);
    return __var_11 ? (__var_8 ? (__var_11._originalText = __var_11._originalText || __var_11.textContent, __var_11.textContent = __var_10 || 'Loading...', __var_11.disabled = !0) : (__var_11.textContent = __var_11._originalText || __var_11.textContent, __var_11.disabled = !1), this) : this;
  }
};
__var_2(__var_7, 'container', null), __var_2(__var_7, 'activeModal', null);
var __var_12 = __var_7;

function __fn_13() {
  return document.querySelector('meta[name="turnstile-sitekey"]')?.content || '';
}
var __var_14 = __fn_13(),
  __var_15 = localStorage.getItem('captchaToken'),
  __var_16 = parseInt(localStorage.getItem('captchaExpiresAt') || '0'),
  __var_17 = null,
  __var_18 = [],
  __var_19 = !1,
  __var_20 = 0,
  __var_21 = 5000;
__var_16 < Date.now() && (__var_15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt'));

function __fn_22() {
  __var_15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt');
}

function __fn_23(__var_5, __var_9) {
  __var_15 = __var_5, __var_16 = __var_9, localStorage.setItem('captchaToken', __var_5), localStorage.setItem('captchaExpiresAt', __var_9);
}

function __fn_24() {
  return __var_19 ? !0 : window.turnstile ? (__var_19 = !0, !0) : !1;
}

function __fn_25(__var_5, __var_9) {
  if (!__fn_24())
    return console.error('[Captcha] Turnstile not ready'), !1;
  let __var_8 = __fn_13() || __var_14 || '';
  if (!__var_8)
    return !0;
  let __var_10 = typeof __var_5 == 'string' ? document.querySelector(__var_5) : __var_5;
  if (!__var_10)
    return console.error('[Captcha] Container not found:', __var_5), !1;
  __var_10.innerHTML = '';
  let __var_11 = window.turnstile;
  return __var_11.render(__var_10, {
    sitekey: __var_8,
    callback: async function(r) {
      let __var_26 = document.getElementById('loading-text');
      __var_26 && (__var_26.textContent = 'Verifying...');
      try {
        let __var_27 = await (await fetch('/api/captcha/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnstileToken: r
          })
        })).json();
        if (__var_27.success) {
          if (__fn_23(__var_27.token, __var_27.expiresAt), __var_26 && (__var_26.textContent = 'Loading...'), __var_9 && __var_17) {
            __var_17.close(), __var_17 = null;
            let __var_28 = [...__var_18];
            __var_18 = [], __var_28.forEach(d => d());
          }
        } else
          __var_26 && (__var_26.textContent = 'Verification failed. Please try again.'), __var_11.reset(__var_10);
      } catch (p) {
        console.error('[Captcha] Verification error:', p), __var_26 && (__var_26.textContent = 'Verification failed. Please try again.'), __var_11.reset(__var_10);
      }
    },
    'error-callback': function() {
      let __var_29 = document.getElementById('loading-text');
      __var_29 && (__var_29.textContent = 'Captcha failed. Please refresh.');
    },
    'expired-callback': function() {
      __var_11.reset(__var_10);
    }
  }), !0;
}

function __fn_30() {
  if (__fn_13())
    return new Promise(__var_5 => {
      if (Date.now() - __var_20 < __var_21) {
        __var_5();
        return;
      }
      if (__var_12.activeModal) {
        __var_18.push(__var_5);
        return;
      }
      __var_20 = Date.now(), __var_18.push(__var_5);
      let __var_8 = document.createElement('div');
      __var_8.id = 'captcha-modal-turnstile', __var_8.style.display = 'flex', __var_8.style.justifyContent = 'center', __var_8.style.padding = '20px';
      let __var_10 = document.createElement('div'),
        __var_11 = document.createElement('p');
      if (__var_11.textContent = 'Please complete the captcha to continue.', __var_10.appendChild(__var_11), __var_10.appendChild(__var_8), __var_17 = new __var_12({
          title: 'Verification Required',
          content: __var_10,
          buttons: [{
            text: 'Cancel',
            type: 'cancel',
            onClick: __var_29 => {
              __var_29.close(), __var_17 = null, __var_18 = [];
            }
          }],
          onClose: () => {
            __var_17 = null;
          }
        }), __var_17.open(), __fn_24())
        __fn_25(__var_8, !0);
      else {
        let __var_29 = setInterval(() => {
          __fn_24() && (clearInterval(__var_29), __fn_25(__var_8, !0));
        }, 100);
        setTimeout(() => clearInterval(__var_29), 10000);
      }
    });
}

function __fn_31() {
  if (__var_15)
    return;
  let __var_5 = document.querySelector('#turnstile-container');
  if (__var_5)
    if (__fn_24())
      __fn_25(__var_5, !1);
    else {
      let __var_9 = setInterval(() => {
        __fn_24() && (clearInterval(__var_9), __var_15 || __fn_25(__var_5, !1));
      }, 100);
      setTimeout(() => clearInterval(__var_9), 10000);
    }
}
window.onTurnstileLoad = function() {
  __var_19 = !0, __var_15 || __fn_31();
};
window.turnstile && (__var_19 = !0, __var_15 || __fn_31());
__var_6.api = {
  getToken() {
    return __var_15;
  },
  getTokenExpiry() {
    return __var_16;
  },
  clearToken: __fn_22,
  showCaptchaModal: __fn_30,
  renderCaptchaOnLoadingScreen: __fn_31,
  getTurnstileSiteKey: __fn_13,
  async makeRequest(__var_5, __var_9 = {}) {
    let __var_8 = (__var_9.method || 'GET').toUpperCase();
    __var_8 !== 'GET' && __var_15 && (__var_9.headers = __var_9.headers || {}, __var_9.headers['X-Captcha-Token'] = __var_15);
    let __var_10 = await fetch(__var_5, __var_9);
    if (__var_10.status === 403) {
      let __var_11 = __var_10.clone();
      try {
        if ((await __var_11.json()).code === 'CAPTCHA_REQUIRED')
          return __fn_22(), await __fn_30(), __var_8 !== 'GET' && __var_15 && (__var_9.headers = __var_9.headers || {}, __var_9.headers['X-Captcha-Token'] = __var_15), fetch(__var_5, __var_9);
      } catch {}
    }
    return __var_10;
  }
};
var __var_32 = __var_6.api;
var __var_33 = [
    0.25,
    0.5,
    0.75,
    1,
    1.5
  ],
  __var_34 = 50;

function __fn_35(__var_5, __var_9, __var_8) {
  let __var_10 = new WeakMap(),
    __var_11 = 2048,
    __var_29 = 10000,
    __var_26 = new WeakMap();

  function __fn_36(l) {}

  function __var_27() {
    __var_26.clear = new WeakMap();
  }

  function __var_28(l, m) {
    if (!l)
      return null;
    if (__var_10.has(l))
      return __var_10.get(l);
    let __var_37 = __var_5.createObject(z);
    return __var_37.native = l, __var_37.canvas = m, __var_10.set(l, __var_37), __var_37;
  }
  let __var_38 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'CanvasGradient', __var_38);
  let __var_39 = __var_5.getProperty(__var_38, 'prototype');
  __var_5.setProperty(__var_39, 'addColorStop', __var_5.createNativeFunction(function(l, m) {
    this.native.addColorStop(l, m);
  }));

  function __fn_40(l) {
    let __var_41 = __var_5.createObject(__var_38);
    return __var_41.native = l, __var_41;
  }
  let __var_42 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'CanvasPattern', __var_42);

  function __fn_43(l) {
    let __var_41 = __var_5.createObject(__var_42);
    return __var_41.native = l, __var_41;
  }
  let __var_44 = __var_5.createNativeFunction(function(l, __var_41) {
    if (l > __var_11 || __var_41 > __var_11)
      throw new Error(`ImageData size exceeds maximum (${ __var_11 }x${ __var_11 })`);
    __var_6.settings.logCalls && console.log(__var_8.domain, 'create ImageData', this, l, __var_41);
    let __var_37 = new ImageData(l, __var_41);
    this.native = __var_37, this.width = l, this.height = __var_41;
  }, !0);
  __var_5.setProperty(__var_9, 'ImageData', __var_44);
  let __var_45 = __var_5.getProperty(__var_44, 'prototype');
  __var_5.setProperty(__var_45, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native.width;
    })
  }), __var_5.setProperty(__var_45, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native.height;
    })
  }), __var_5.setProperty(__var_45, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      let __var_46 = this.native.data,
        __var_41 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      __var_5.setProperty(__var_41, 'length', __var_46.length);
      let __var_37 = __var_5.nativeToPseudo({});
      __var_5.setProperty(__var_37, 'length', __var_46.length), __var_5.setProperty(__var_37, 'get', __var_5.createNativeFunction(function(x) {
        return __var_46[x];
      })), __var_5.setProperty(__var_37, 'set', __var_5.createNativeFunction(function(x, P) {
        __var_6.settings.logCalls && console.log(__var_8.domain, 'setImageData', this, x, P), __var_46[x] = P;
      }));
      for (let __var_47 = 0; __var_47 < Math.min(__var_46.length, 1000); __var_47++)
        (P => {
          __var_5.setProperty(__var_37, P, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __var_5.createNativeFunction(function() {
              return __var_46[P];
            }),
            set: __var_5.createNativeFunction(function(N) {
              __var_6.settings.logCalls && console.log(__var_8.domain, 'setImageData', this, P, N), __var_46[P] = N;
            })
          });
        })(__var_47);
      return __var_37;
    })
  });

  function __fn_48(__var_46) {
    let __var_41 = __var_5.createObject(__var_44);
    return __var_41.native = __var_46, __var_41;
  }
  let __var_49 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'TextMetrics', __var_49);
  let __var_50 = __var_5.getProperty(__var_49, 'prototype'),
    __var_51 = [
      'width',
      'actualBoundingBoxLeft',
      'actualBoundingBoxRight',
      'fontBoundingBoxAscent',
      'fontBoundingBoxDescent',
      'actualBoundingBoxAscent',
      'actualBoundingBoxDescent',
      'emHeightAscent',
      'emHeightDescent',
      'hangingBaseline',
      'alphabeticBaseline',
      'ideographicBaseline'
    ];
  for (let __var_46 of __var_51)
    __var_5.setProperty(__var_50, __var_46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return this.native[__var_46];
      })
    });

  function __fn_52(__var_46) {
    let __var_41 = __var_5.createObject(__var_49);
    return __var_41.native = __var_46, __var_41;
  }
  let __var_53 = __var_5.createNativeFunction(function(__var_46) {
    __var_46 && __var_46.native ? this.native = new Path2D(__var_46.native) : typeof __var_46 == 'string' ? this.native = new Path2D(__var_46) : this.native = new Path2D();
  }, !0);
  __var_5.setProperty(__var_9, 'Path2D', __var_53);
  let __var_54 = __var_5.getProperty(__var_53, 'prototype'),
    __var_55 = {
      addPath: function(__var_46, __var_41) {
        __var_46?.native && this.native.addPath(__var_46.native, __var_41);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__var_46, __var_41) {
        this.native.moveTo(__var_46, __var_41);
      },
      lineTo: function(__var_46, __var_41) {
        this.native.lineTo(__var_46, __var_41);
      },
      bezierCurveTo: function(__var_46, __var_41, __var_37, __var_47, P, N) {
        this.native.bezierCurveTo(__var_46, __var_41, __var_37, __var_47, P, N);
      },
      quadraticCurveTo: function(__var_46, __var_41, __var_37, __var_47) {
        this.native.quadraticCurveTo(__var_46, __var_41, __var_37, __var_47);
      },
      arc: function(__var_46, __var_41, __var_37, __var_47, P, N) {
        this.native.arc(__var_46, __var_41, __var_37, __var_47, P, N);
      },
      arcTo: function(__var_46, __var_41, __var_37, __var_47, P) {
        this.native.arcTo(__var_46, __var_41, __var_37, __var_47, P);
      },
      ellipse: function(__var_46, __var_41, __var_37, __var_47, P, N, D, q) {
        this.native.ellipse(__var_46, __var_41, __var_37, __var_47, P, N, D, q);
      },
      rect: function(__var_46, __var_41, __var_37, __var_47) {
        this.native.rect(__var_46, __var_41, __var_37, __var_47);
      },
      roundRect: function(__var_46, __var_41, __var_37, __var_47, P) {
        this.native.roundRect(__var_46, __var_41, __var_37, __var_47, P);
      }
    };
  for (let [__var_46, __var_41] of Object.entries(__var_55))
    __var_5.setProperty(__var_54, __var_46, __var_5.createNativeFunction(__var_41));
  let __var_56 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'CanvasRenderingContext2D', __var_56);
  let __var_57 = __var_5.getProperty(__var_56, 'prototype'),
    __var_58 = [
      'globalAlpha',
      'globalCompositeOperation',
      'lineWidth',
      'lineCap',
      'lineJoin',
      'miterLimit',
      'lineDashOffset',
      'font',
      'textAlign',
      'textBaseline',
      'direction',
      'shadowBlur',
      'shadowColor',
      'shadowOffsetX',
      'shadowOffsetY',
      'imageSmoothingEnabled',
      'imageSmoothingQuality',
      'filter'
    ];
  for (let __var_46 of __var_58)
    __var_5.setProperty(__var_57, __var_46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return this.native[__var_46];
      }),
      set: __var_5.createNativeFunction(function(__var_41) {
        __var_6.settings.logCalls && console.log(__var_8.domain, 'context set ' + __var_46, this, __var_41), this.native[__var_46] = __var_41;
      })
    });
  for (let __var_46 of [
      'fillStyle',
      'strokeStyle'
    ])
    __var_5.setProperty(__var_57, __var_46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        let __var_41 = this.native[__var_46];
        return __var_41;
      }),
      set: __var_5.createNativeFunction(function(__var_41) {
        __var_41?.native ? this.native[__var_46] = __var_41.native : this.native[__var_46] = __var_41;
      })
    });
  __var_5.setProperty(__var_57, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __var_59 = {
    clearRect: function(__var_46, __var_41, __var_37, __var_47) {
      this.native, this.native.clearRect(__var_46, __var_41, __var_37, __var_47);
    },
    fillRect: function(__var_46, __var_41, __var_37, __var_47) {
      this.native, this.native.fillRect(__var_46, __var_41, __var_37, __var_47);
    },
    strokeRect: function(__var_46, __var_41, __var_37, __var_47) {
      this.native, this.native.strokeRect(__var_46, __var_41, __var_37, __var_47);
    },
    fillText: function(__var_46, __var_41, __var_37, __var_47) {
      this.native, __var_47 !== void 0 ? this.native.fillText(String(__var_46).slice(0, 1000), __var_41, __var_37, __var_47) : this.native.fillText(String(__var_46).slice(0, 1000), __var_41, __var_37);
    },
    strokeText: function(__var_46, __var_41, __var_37, __var_47) {
      this.native, __var_47 !== void 0 ? this.native.strokeText(String(__var_46).slice(0, 1000), __var_41, __var_37, __var_47) : this.native.strokeText(String(__var_46).slice(0, 1000), __var_41, __var_37);
    },
    measureText: function(__var_46) {
      return __fn_52(this.native.measureText(String(__var_46).slice(0, 1000)));
    },
    getLineDash: function() {
      return __var_5.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__var_46) {
      let __var_41 = __var_5.pseudoToNative(__var_46);
      this.native.setLineDash(__var_41);
    },
    createLinearGradient: function(__var_46, __var_41, __var_37, __var_47) {
      return __fn_40(this.native.createLinearGradient(__var_46, __var_41, __var_37, __var_47));
    },
    createRadialGradient: function(__var_46, __var_41, __var_37, __var_47, P, N) {
      return __fn_40(this.native.createRadialGradient(__var_46, __var_41, __var_37, __var_47, P, N));
    },
    createConicGradient: function(__var_46, __var_41, __var_37) {
      return __fn_40(this.native.createConicGradient(__var_46, __var_41, __var_37));
    },
    createPattern: function(__var_46, __var_41) {
      let __var_37 = __var_46?.native || __var_46;
      if (!__var_37)
        return null;
      let __var_47 = this.native.createPattern(__var_37, __var_41);
      return __var_47 ? __fn_43(__var_47) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__var_46, __var_41) {
      this.native.moveTo(__var_46, __var_41);
    },
    lineTo: function(__var_46, __var_41) {
      this.native.lineTo(__var_46, __var_41);
    },
    bezierCurveTo: function(__var_46, __var_41, __var_37, __var_47, P, N) {
      this.native.bezierCurveTo(__var_46, __var_41, __var_37, __var_47, P, N);
    },
    quadraticCurveTo: function(__var_46, __var_41, __var_37, __var_47) {
      this.native.quadraticCurveTo(__var_46, __var_41, __var_37, __var_47);
    },
    arc: function(__var_46, __var_41, __var_37, __var_47, P, N) {
      this.native.arc(__var_46, __var_41, __var_37, __var_47, P, N);
    },
    arcTo: function(__var_46, __var_41, __var_37, __var_47, P) {
      this.native.arcTo(__var_46, __var_41, __var_37, __var_47, P);
    },
    ellipse: function(__var_46, __var_41, __var_37, __var_47, P, N, D, q) {
      this.native.ellipse(__var_46, __var_41, __var_37, __var_47, P, N, D, q);
    },
    rect: function(__var_46, __var_41, __var_37, __var_47) {
      this.native.rect(__var_46, __var_41, __var_37, __var_47);
    },
    roundRect: function(__var_46, __var_41, __var_37, __var_47, P) {
      let __var_60 = __var_5.pseudoToNative(P);
      this.native.roundRect(__var_46, __var_41, __var_37, __var_47, __var_60);
    },
    fill: function(__var_46, __var_41) {
      this.native, __var_46?.native ? this.native.fill(__var_46.native, __var_41) : this.native.fill(__var_46);
    },
    stroke: function(__var_46) {
      this.native, __var_46?.native ? this.native.stroke(__var_46.native) : this.native.stroke();
    },
    clip: function(__var_46, __var_41) {
      __var_46?.native ? this.native.clip(__var_46.native, __var_41) : this.native.clip(__var_46);
    },
    isPointInPath: function(__var_46, __var_41, __var_37, __var_47) {
      return __var_46?.native ? this.native.isPointInPath(__var_46.native, __var_41, __var_37, __var_47) : this.native.isPointInPath(__var_46, __var_41, __var_37);
    },
    isPointInStroke: function(__var_46, __var_41, __var_37) {
      return __var_46?.native ? this.native.isPointInStroke(__var_46.native, __var_41, __var_37) : this.native.isPointInStroke(__var_46, __var_41);
    },
    getTransform: function() {
      let __var_46 = this.native.getTransform();
      return __var_5.nativeToPseudo({
        a: __var_46.a,
        __fn_40: __var_46.__fn_40,
        __var_26: __var_46.__var_26,
        __var_38: __var_46.__var_38,
        __var_5: __var_46.__var_5,
        __var_44: __var_46.__var_44
      });
    },
    rotate: function(__var_46) {
      this.native.rotate(__var_46);
    },
    scale: function(__var_46, __var_41) {
      this.native.scale(__var_46, __var_41);
    },
    translate: function(__var_46, __var_41) {
      this.native.translate(__var_46, __var_41);
    },
    transform: function(__var_46, __var_41, __var_37, __var_47, P, __var_60) {
      this.native.transform(__var_46, __var_41, __var_37, __var_47, P, __var_60);
    },
    setTransform: function(__var_46, __var_41, __var_37, __var_47, P, __var_60) {
      if (typeof __var_46 == 'object' && __var_46 !== null) {
        let __var_61 = __var_5.pseudoToNative(__var_46);
        this.native.setTransform(__var_61);
      } else
        this.native.setTransform(__var_46, __var_41, __var_37, __var_47, P, __var_60);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__var_46, __var_41, __var_37, __var_47, P, __var_60, __var_61, q, ie) {
      this.native;
      let __var_62 = __var_46?.native || __var_46;
      __var_62 && (q !== void 0 ? this.native.drawImage(__var_62, __var_41, __var_37, __var_47, P, __var_60, __var_61, q, ie) : __var_47 !== void 0 ? this.native.drawImage(__var_62, __var_41, __var_37, __var_47, P) : this.native.drawImage(__var_62, __var_41, __var_37));
    },
    createImageData: function(__var_46, __var_41) {
      if (__var_46?.native)
        return __fn_48(this.native.createImageData(__var_46.native));
      if (__var_46 > __var_11 || __var_41 > __var_11)
        throw new Error(`ImageData size exceeds maximum (${ __var_11 }x${ __var_11 })`);
      return __fn_48(this.native.createImageData(__var_46, __var_41));
    },
    getImageData: function(__var_46, __var_41, __var_37, __var_47) {
      if (__var_37 > __var_11 || __var_47 > __var_11)
        throw new Error(`ImageData size exceeds maximum (${ __var_11 }x${ __var_11 })`);
      return __fn_48(this.native.getImageData(__var_46, __var_41, __var_37, __var_47));
    },
    putImageData: function(__var_46, __var_41, __var_37, __var_47, P, __var_60, __var_61) {
      this.native, __var_46?.native && (__var_47 !== void 0 ? this.native.putImageData(__var_46.native, __var_41, __var_37, __var_47, P, __var_60, __var_61) : this.native.putImageData(__var_46.native, __var_41, __var_37));
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
  for (let [__var_46, __var_41] of Object.entries(__var_59))
    __var_5.setProperty(__var_57, __var_46, __var_5.createNativeFunction(__var_41));
  return {
    extendElement: function(__var_46, __var_41) {
      __var_5.setProperty(__var_46, 'getContext', __var_5.createNativeFunction(function(__var_37, __var_47) {
        __var_6.settings.logCalls && console.log(__var_8.domain, 'getContext', this, __var_37, __var_47);
        let __var_63 = this.native;
        if (__var_63.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__var_63.width > __var_11 && (__var_63.width = __var_11), __var_63.height > __var_11 && (__var_63.height = __var_11), __var_37 === '2d') {
          let __var_60 = __var_63.getContext('2d', __var_47 ? __var_5.pseudoToNative(__var_47) : void 0);
          return __var_28(__var_60, this);
        }
        throw new Error(`Context type "${ __var_37 }" is not supported`);
      })), __var_5.setProperty(__var_46, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __var_5.createNativeFunction(function(__var_37) {
          __var_6.settings.logCalls && console.log(__var_8.domain, 'set width', this, __var_37), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__var_37, __var_11));
        })
      }), __var_5.setProperty(__var_46, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __var_5.createNativeFunction(function(__var_37) {
          __var_6.settings.logCalls && console.log(__var_8.domain, 'set height', this, __var_37), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__var_37, __var_11));
        })
      }), __var_5.setProperty(__var_46, 'toDataURL', __var_5.createNativeFunction(function(__var_37, __var_47) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __var_6.settings.logCalls && console.log(__var_8.domain, 'toDataURL', this, __var_37, __var_47), this.native.toDataURL(__var_37, __var_47);
      }));
    },
    resetDrawCounts: __var_27,
    contextToPseudo: __var_28
  };
}

function __fn_64(__var_5, __var_9, __var_8) {
  let __var_26 = 0,
    __fn_36 = window.location.origin;

  function __var_27(__var_44) {
    if (typeof __var_44 != 'string' || __var_44.startsWith('/') || __var_44.startsWith('./') || __var_44.startsWith('../') || !__var_44.startsWith('http://') && !__var_44.startsWith('https://'))
      return !1;
    try {
      let __var_45 = new URL(__var_44);
      if (__var_45.origin === __fn_36 || __var_45.hostname === 'kicya.net' || __var_45.hostname.endsWith('.kicya.net') || __var_45.hostname === 'nekoweb.org')
        return !1;
      let __fn_48 = __var_45.hostname.toLowerCase();
      return !(__fn_48 === 'localhost' || __fn_48 === '127.0.0.1' || __fn_48 === '0.0.0.0' || __fn_48.startsWith('192.168.') || __fn_48.startsWith('10.') || __fn_48.startsWith('172.16.') || __fn_48.startsWith('172.17.') || __fn_48.startsWith('172.18.') || __fn_48.startsWith('172.19.') || __fn_48.startsWith('172.2') || __fn_48.startsWith('172.30.') || __fn_48.startsWith('172.31.') || __fn_48 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __var_28 = 0,
    __var_38 = __var_5.nativeToPseudo({});
  __var_5.setProperty(__var_9, '__xhrCallbacks', __var_38);

  function __var_39(__var_44, ...__var_45) {
    if (!__var_44 || typeof __var_44 != 'object')
      return;
    let __fn_48 = __var_28++;
    __var_5.setProperty(__var_38, 'fn' + __fn_48, __var_44);
    let __var_49 = __var_45.map((__var_51, __fn_52) => {
        let __var_53 = 'arg' + __fn_48 + '_' + __fn_52;
        return __var_5.setProperty(__var_38, __var_53, __var_51), __var_53;
      }),
      __var_50 = __var_49.map(__var_51 => `__xhrCallbacks.${ __var_51 }`).join(',');
    __var_5.appendCode(`__xhrCallbacks.fn${ __fn_48 }(${ __var_50 }); delete __xhrCallbacks.fn${ __fn_48 }; ${ __var_49.map(__var_51 => `delete __xhrCallbacks.${ __var_51 }`).join('; ') };`);
  }
  let __fn_40 = __var_5.createNativeFunction(function() {
    __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __var_45 = this;
    this.native.onreadystatechange = function() {
      __var_5.setProperty(__var_45, 'readyState', __var_45.native.readyState), __var_45.native.readyState === 4 && (__var_5.setProperty(__var_45, 'status', __var_45.native.status), __var_5.setProperty(__var_45, 'statusText', __var_45.native.statusText), __var_5.setProperty(__var_45, 'responseText', __var_45.native.responseText?.slice(0, 5242880) || ''), __var_5.setProperty(__var_45, 'responseURL', __var_45.native.responseURL), __var_26 = Math.max(0, __var_26 - 1)), __var_45._eventHandlers.onreadystatechange && __var_39(__var_45._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __var_45._eventHandlers.onload && __var_39(__var_45._eventHandlers.onload);
    }, this.native.onerror = function() {
      __var_26 = Math.max(0, __var_26 - 1), __var_45._eventHandlers.onerror && __var_39(__var_45._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __var_26 = Math.max(0, __var_26 - 1), __var_45._eventHandlers.ontimeout && __var_39(__var_45._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __var_26 = Math.max(0, __var_26 - 1), __var_45._eventHandlers.onabort && __var_39(__var_45._eventHandlers.onabort);
    }, this.native.onprogress = function(__fn_48) {
      if (__var_45._eventHandlers.onprogress) {
        let __var_49 = __var_5.nativeToPseudo({
          loaded: __fn_48.loaded,
          total: __fn_48.total,
          lengthComputable: __fn_48.lengthComputable
        });
        __var_39(__var_45._eventHandlers.onprogress, __var_49);
      }
    }, this.native.onloadstart = function() {
      __var_45._eventHandlers.onloadstart && __var_39(__var_45._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __var_45._eventHandlers.onloadend && __var_39(__var_45._eventHandlers.onloadend);
    }, __var_5.setProperty(this, 'readyState', 0), __var_5.setProperty(this, 'status', 0), __var_5.setProperty(this, 'statusText', ''), __var_5.setProperty(this, 'responseText', ''), __var_5.setProperty(this, 'responseURL', '');
  }, !0);
  __var_5.setProperty(__var_9, 'XMLHttpRequest', __fn_40);
  let __var_42 = __var_5.getProperty(__fn_40, 'prototype');
  __var_5.setProperty(__fn_40, 'UNSENT', 0), __var_5.setProperty(__fn_40, 'OPENED', 1), __var_5.setProperty(__fn_40, 'HEADERS_RECEIVED', 2), __var_5.setProperty(__fn_40, 'LOADING', 3), __var_5.setProperty(__fn_40, 'DONE', 4), __var_5.setProperty(__var_42, 'UNSENT', 0), __var_5.setProperty(__var_42, 'OPENED', 1), __var_5.setProperty(__var_42, 'HEADERS_RECEIVED', 2), __var_5.setProperty(__var_42, 'LOADING', 3), __var_5.setProperty(__var_42, 'DONE', 4);
  let __fn_43 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __var_44 of __fn_43)
    __var_5.setProperty(__var_42, __var_44, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return this._eventHandlers[__var_44] || null;
      }),
      set: __var_5.createNativeFunction(function(__var_45) {
        __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest set ' + __var_44, this, __var_45), this._eventHandlers[__var_44] = __var_45;
      })
    });
  __var_5.setProperty(__var_42, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __var_5.createNativeFunction(function(__var_44) {
      this.native.timeout = Math.min(__var_44, 30000);
    })
  }), __var_5.setProperty(__var_42, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __var_5.createNativeFunction(function(__var_44) {
      this.native.withCredentials = !1;
    })
  }), __var_5.setProperty(__var_42, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __var_5.createNativeFunction(function(__var_44) {
      (__var_44 === '' || __var_44 === 'text' || __var_44 === 'json') && (this.native.responseType = __var_44);
    })
  }), __var_5.setProperty(__var_42, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      let __var_44 = this.native.response;
      return this.native.responseType === 'json' ? __var_5.nativeToPseudo(__var_44) : typeof __var_44 == 'string' ? __var_44.slice(0, 5242880) : __var_44;
    })
  }), __var_5.setProperty(__var_42, 'open', __var_5.createNativeFunction(function(__var_44, __var_45, __fn_48, __var_49, __var_50) {
    if (!__var_27(__var_45))
      throw new Error(`XHR request blocked: URL "${ __var_45 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __var_51 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__var_44 = String(__var_44).toUpperCase(), !__var_51.includes(__var_44))
      throw new Error(`HTTP method "${ __var_44 }" is not allowed`);
    __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest open', this, __var_44, __var_45, __fn_48, __var_49, __var_50), this._method = __var_44, this._url = __var_45, this._async = __fn_48 !== !1, this.native.open(__var_44, __var_45, this._async), this.native.timeout = 30000, __var_5.setProperty(this, 'readyState', this.native.readyState);
  })), __var_5.setProperty(__var_42, 'setRequestHeader', __var_5.createNativeFunction(function(__var_44, __var_45) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__var_44.toLowerCase()))
      throw new Error(`Setting header "${ __var_44 }" is not allowed`);
    __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest setRequestHeader', this, __var_44, __var_45), this._headers[__var_44] = __var_45, this.native.setRequestHeader(__var_44, __var_45);
  })), __var_5.setProperty(__var_42, 'send', __var_5.createNativeFunction(function(__var_44) {
    if (__var_26 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest send', this, __var_44), __var_26++;
    let __var_45 = null;
    __var_44 != null && (typeof __var_44 == 'string' ? __var_45 = __var_44.slice(0, 5242880) : typeof __var_44 == 'object' && (__var_45 = JSON.stringify(__var_5.pseudoToNative(__var_44)))), this.native.send(__var_45);
  })), __var_5.setProperty(__var_42, 'abort', __var_5.createNativeFunction(function() {
    __var_6.settings.logCalls && console.log(__var_8.domain, 'XMLHttpRequest abort', this), this.native.abort(), __var_26 = Math.max(0, __var_26 - 1);
  })), __var_5.setProperty(__var_42, 'getResponseHeader', __var_5.createNativeFunction(function(__var_44) {
    return this.native.getResponseHeader(__var_44);
  })), __var_5.setProperty(__var_42, 'getAllResponseHeaders', __var_5.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __var_5.setProperty(__var_42, 'overrideMimeType', __var_5.createNativeFunction(function(__var_44) {
    this.native.overrideMimeType(__var_44);
  }));
}
var __var_65 = 'webtiles_storage',
  __var_66 = 1,
  __var_67 = 'localStorage',
  __var_68 = 1024 * 1024,
  __var_69 = 100,
  __var_70 = null,
  __var_71 = null;

function __fn_72() {
  return __var_71 || (__var_71 = new Promise((__var_5, __var_9) => {
    let __var_8 = indexedDB.open(__var_65, __var_66);
    __var_8.onerror = () => __var_9(__var_8.error), __var_8.onsuccess = () => {
      __var_70 = __var_8.result, __var_5(__var_70);
    }, __var_8.onupgradeneeded = __var_10 => {
      let __var_11 = __var_10.target.result;
      __var_11.objectStoreNames.contains(__var_67) || __var_11.createObjectStore(__var_67, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __var_71);
}
async function __fn_73(__var_5, __var_9) {
  return await __fn_72(), new Promise((__var_8, __var_10) => {
    let __var_26 = __var_70.transaction(__var_67, 'readonly').objectStore(__var_67).get([
      __var_5,
      __var_9
    ]);
    __var_26.onsuccess = () => __var_8(__var_26.result?.value ?? null), __var_26.onerror = () => __var_10(__var_26.error);
  });
}
async function __fn_74(__var_5, __var_9, __var_8) {
  return await __fn_72(), new Promise((__var_10, __var_11) => {
    let __fn_36 = __var_70.transaction(__var_67, 'readwrite').objectStore(__var_67).put({
      site: __var_5,
      key: __var_9,
      value: __var_8
    });
    __fn_36.onsuccess = () => __var_10(), __fn_36.onerror = () => __var_11(__fn_36.error);
  });
}
async function __fn_75(__var_5, __var_9) {
  return await __fn_72(), new Promise((__var_8, __var_10) => {
    let __var_26 = __var_70.transaction(__var_67, 'readwrite').objectStore(__var_67).delete([
      __var_5,
      __var_9
    ]);
    __var_26.onsuccess = () => __var_8(), __var_26.onerror = () => __var_10(__var_26.error);
  });
}
async function __fn_76(__var_5) {
  return await __fn_72(), new Promise((__var_9, __var_8) => {
    let __var_26 = __var_70.transaction(__var_67, 'readonly').objectStore(__var_67).index('site').getAll(__var_5);
    __var_26.onsuccess = () => {
      let __fn_36 = __var_26.result.map(__var_27 => __var_27.key);
      __var_9(__fn_36);
    }, __var_26.onerror = () => __var_8(__var_26.error);
  });
}
async function __fn_77(__var_5) {
  return await __fn_72(), new Promise((__var_9, __var_8) => {
    let __var_26 = __var_70.transaction(__var_67, 'readonly').objectStore(__var_67).index('site').getAll(__var_5);
    __var_26.onsuccess = () => {
      let __fn_36 = 0;
      for (let __var_27 of __var_26.result)
        __fn_36 += (__var_27.key.length + __var_27.value.length) * 2;
      __var_9({
        size: __fn_36,
        count: __var_26.result.length
      });
    }, __var_26.onerror = () => __var_8(__var_26.error);
  });
}
async function __fn_78(__var_5) {
  return await __fn_72(), new Promise((__var_9, __var_8) => {
    let __var_26 = __var_70.transaction(__var_67, 'readwrite').objectStore(__var_67).index('site').openCursor(__var_5);
    __var_26.onsuccess = __fn_36 => {
      let __var_27 = __fn_36.target.result;
      __var_27 ? (__var_27.delete(), __var_27.continue()) : __var_9();
    }, __var_26.onerror = () => __var_8(__var_26.error);
  });
}

function __fn_79(__var_5, __var_9, __var_8) {
  let __var_10 = __var_5.nativeToPseudo({});
  __var_5.setProperty(__var_10, 'getItem', __var_5.createAsyncFunction(function(__var_11, __var_29) {
    if (__var_6.settings.logCalls && console.log(__var_8, 'localStorage.getItem', this, __var_11), __var_11 == null) {
      __var_29(null);
      return;
    }
    __var_11 = String(__var_11), __fn_73(__var_8, __var_11).then(__var_26 => __var_29(__var_26)).catch(__var_26 => {
      console.error('localStorage.getItem error:', __var_26), __var_29(null);
    });
  })), __var_5.setProperty(__var_10, 'setItem', __var_5.createAsyncFunction(function(__var_11, __var_29, __var_26) {
    if (__var_6.settings.logCalls && console.log(__var_8, 'localStorage.setItem', this, __var_11, __var_29), __var_11 == null) {
      __var_26();
      return;
    }
    __var_11 = String(__var_11), __var_29 = String(__var_29), __fn_77(__var_8).then(({
      size: __fn_36,
      count: __var_27
    }) => {
      __fn_73(__var_8, __var_11).then(__var_28 => {
        if (__var_28 === null && __var_27 >= __var_69)
          throw new Error(`localStorage item limit exceeded (max ${ __var_69 } items)`);
        let __var_39 = __var_28 ? (__var_11.length + __var_28.length) * 2 : 0,
          __fn_40 = (__var_11.length + __var_29.length) * 2;
        if (__fn_36 - __var_39 + __fn_40 > __var_68)
          throw new Error(`localStorage size limit exceeded (max ${ __var_68 / 1024 }KB)`);
        return __fn_74(__var_8, __var_11, __var_29);
      }).then(() => __var_26()).catch(__var_28 => {
        throw console.error('localStorage.setItem error:', __var_28), __var_28;
      });
    }).catch(__fn_36 => {
      console.error('localStorage.setItem error:', __fn_36), __var_26();
    });
  })), __var_5.setProperty(__var_10, 'removeItem', __var_5.createAsyncFunction(function(__var_11, __var_29) {
    if (__var_6.settings.logCalls && console.log(__var_8, 'localStorage.removeItem', this, __var_11), __var_11 == null) {
      __var_29();
      return;
    }
    __var_11 = String(__var_11), __fn_75(__var_8, __var_11).then(() => __var_29()).catch(__var_26 => {
      console.error('localStorage.removeItem error:', __var_26), __var_29();
    });
  })), __var_5.setProperty(__var_10, 'clear', __var_5.createAsyncFunction(function(__var_11) {
    __var_6.settings.logCalls && console.log(__var_8, 'localStorage.clear', this), __fn_78(__var_8).then(() => __var_11()).catch(__var_29 => {
      console.error('localStorage.clear error:', __var_29), __var_11();
    });
  })), __var_5.setProperty(__var_10, 'key', __var_5.createAsyncFunction(function(__var_11, __var_29) {
    __var_11 = parseInt(__var_11) || 0, __fn_76(__var_8).then(__var_26 => {
      __var_29(__var_11 >= 0 && __var_11 < __var_26.length ? __var_26[__var_11] : null);
    }).catch(__var_26 => {
      console.error('localStorage.key error:', __var_26), __var_29(null);
    });
  })), __var_5.setProperty(__var_10, 'getLength', __var_5.createAsyncFunction(function(__var_11) {
    __fn_77(__var_8).then(({
      count: __var_29
    }) => __var_11(__var_29)).catch(__var_29 => {
      console.error('localStorage.getLength error:', __var_29), __var_11(0);
    });
  })), __var_5.setProperty(__var_9, 'localStorage', __var_10), __var_5.setProperty(__var_9, 'sessionStorage', __var_10);
}
__fn_72().catch(__var_5 => {
  console.error('Failed to initialize storage DB:', __var_5);
});

function __fn_80(__var_5, __var_9, __var_8, __var_10) {
  let __var_11 = __var_5.createNativeFunction(function() {}, !0);
  __var_5.setProperty(__var_9, 'DOMParser', __var_11);
  let __var_29 = __var_5.getProperty(__var_11, 'prototype');
  __var_5.setProperty(__var_29, 'parseFromString', __var_5.createNativeFunction(function(__var_26, __fn_36) {
    if (__var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser parseFromString', this, __var_26, __fn_36), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__fn_36))
      throw new Error(`DOMParser: Unsupported MIME type "${ __fn_36 }"`);
    if (typeof __var_26 != 'string' && (__var_26 = String(__var_26)), __var_26.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __var_38 = new DOMParser().parseFromString(__var_26, __fn_36),
      __var_39 = __var_5.createObjectProto(__var_5.OBJECT_PROTO);

    function __fn_40(__var_42) {
      if (__var_42 == null)
        return null;
      let __fn_43 = __var_5.createObjectProto(__var_5.OBJECT_PROTO);
      return __fn_43.native = __var_42, __fn_43.fromDOMParser = !0, __var_5.setProperty(__fn_43, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __var_5.setProperty(__fn_43, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __var_5.setProperty(__fn_43, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __var_5.createNativeFunction(function(__var_44) {
          __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser set nodeValue', this, __var_44), this.native.nodeValue = __var_44;
        })
      }), __var_5.setProperty(__fn_43, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __var_5.createNativeFunction(function(__var_44) {
          __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser set textContent', this, __var_44), this.native.textContent = String(__var_44).slice(0, 50000);
        })
      }), __var_5.setProperty(__fn_43, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __var_5.setProperty(__fn_43, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __var_5.createNativeFunction(function(__var_44) {
          __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser set id', this, __var_44), this.native.id = String(__var_44).slice(0, 100);
        })
      }), __var_5.setProperty(__fn_43, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __var_5.createNativeFunction(function(__var_44) {
          __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser set className', this, __var_44), this.native.className = String(__var_44).slice(0, 1000);
        })
      }), __var_5.setProperty(__fn_43, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __var_5.createNativeFunction(function(__var_44) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __var_5.setProperty(__fn_43, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __var_5.setProperty(__fn_43, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          let __var_44 = Array.from(this.native.children),
            __var_45 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
          for (let __fn_48 = 0; __fn_48 < __var_44.length; __fn_48++)
            __var_5.setProperty(__var_45, __fn_48, __fn_40(__var_44[__fn_48]));
          return __var_5.setProperty(__var_45, 'length', __var_44.length), __var_45;
        })
      }), __var_5.setProperty(__fn_43, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          let __var_44 = Array.from(this.native.childNodes),
            __var_45 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
          for (let __fn_48 = 0; __fn_48 < __var_44.length; __fn_48++)
            __var_5.setProperty(__var_45, __fn_48, __fn_40(__var_44[__fn_48]));
          return __var_5.setProperty(__var_45, 'length', __var_44.length), __var_45;
        })
      }), __var_5.setProperty(__fn_43, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return __fn_40(this.native.firstChild);
        })
      }), __var_5.setProperty(__fn_43, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return __fn_40(this.native.lastChild);
        })
      }), __var_5.setProperty(__fn_43, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return __fn_40(this.native.firstElementChild);
        })
      }), __var_5.setProperty(__fn_43, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return __fn_40(this.native.lastElementChild);
        })
      }), __var_5.setProperty(__fn_43, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_8) ? null : (__var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get parentNode', this), __fn_40(this.native.parentNode));
        })
      }), __var_5.setProperty(__fn_43, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_8) ? null : (__var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get parentElement', this), __fn_40(this.native.parentElement));
        })
      }), __var_5.setProperty(__fn_43, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_8) ? null : (__var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get nextSibling', this), __fn_40(this.native.nextSibling));
        })
      }), __var_5.setProperty(__fn_43, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_8) ? null : (__var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get previousSibling', this), __fn_40(this.native.previousSibling));
        })
      }), __var_5.setProperty(__fn_43, 'getAttributeNames', __var_5.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_44 = Array.from(this.native.getAttributeNames()),
          __var_45 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
        for (let __fn_48 = 0; __fn_48 < __var_44.length; __fn_48++)
          __var_5.setProperty(__var_45, __fn_48, __var_44[__fn_48]);
        return __var_5.setProperty(__var_45, 'length', __var_44.length), __var_45;
      })), __var_5.setProperty(__fn_43, 'getAttribute', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__var_44);
      })), __var_5.setProperty(__fn_43, 'setAttribute', __var_5.createNativeFunction(function(__var_44, __var_45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__var_44 = String(__var_44).toLowerCase(), __var_44.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__var_44, String(__var_45)), __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser set attribute', this, __var_44, __var_45);
      })), __var_5.setProperty(__fn_43, 'hasAttribute', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__var_44);
      })), __var_5.setProperty(__fn_43, 'removeAttribute', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__var_8))
          throw new Error('No access.');
        this.native.removeAttribute(__var_44), __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser remove attribute', this, __var_44);
      })), __var_5.setProperty(__fn_43, 'querySelector', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __fn_40(this.native.querySelector(__var_44));
      })), __var_5.setProperty(__fn_43, 'querySelectorAll', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_45 = Array.from(this.native.querySelectorAll(__var_44)),
          __fn_48 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
        for (let __var_49 = 0; __var_49 < __var_45.length; __var_49++)
          __var_5.setProperty(__fn_48, __var_49, __fn_40(__var_45[__var_49]));
        return __var_5.setProperty(__fn_48, 'length', __var_45.length), __fn_48;
      })), __var_5.setProperty(__fn_43, 'getElementsByTagName', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_45 = Array.from(this.native.getElementsByTagName(__var_44)),
          __fn_48 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
        for (let __var_49 = 0; __var_49 < __var_45.length; __var_49++)
          __var_5.setProperty(__fn_48, __var_49, __fn_40(__var_45[__var_49]));
        return __var_5.setProperty(__fn_48, 'length', __var_45.length), __fn_48;
      })), __var_5.setProperty(__fn_43, 'getElementsByClassName', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_45 = Array.from(this.native.getElementsByClassName(__var_44)),
          __fn_48 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
        for (let __var_49 = 0; __var_49 < __var_45.length; __var_49++)
          __var_5.setProperty(__fn_48, __var_49, __fn_40(__var_45[__var_49]));
        return __var_5.setProperty(__fn_48, 'length', __var_45.length), __fn_48;
      })), __var_5.setProperty(__fn_43, 'getElementById', __var_5.createNativeFunction(function(__var_44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __fn_40(this.native.getElementById ? this.native.getElementById(__var_44) : null);
      })), __fn_43;
    }
    return __var_5.setProperty(__var_39, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __fn_40(__var_38.documentElement);
      })
    }), __var_5.setProperty(__var_39, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get head', this), __fn_40(__var_38.head);
      })
    }), __var_5.setProperty(__var_39, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_6.settings.logCalls && console.log(__var_10.domain, 'DOMParser get body', this), __fn_40(__var_38.body);
      })
    }), __var_5.setProperty(__var_39, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_38.title;
      })
    }), __var_5.setProperty(__var_39, 'querySelector', __var_5.createNativeFunction(function(__var_42) {
      return __fn_40(__var_38.querySelector(__var_42));
    })), __var_5.setProperty(__var_39, 'querySelectorAll', __var_5.createNativeFunction(function(__var_42) {
      let __fn_43 = Array.from(__var_38.querySelectorAll(__var_42)),
        __var_44 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      for (let __var_45 = 0; __var_45 < __fn_43.length; __var_45++)
        __var_5.setProperty(__var_44, __var_45, __fn_40(__fn_43[__var_45]));
      return __var_5.setProperty(__var_44, 'length', __fn_43.length), __var_44;
    })), __var_5.setProperty(__var_39, 'getElementById', __var_5.createNativeFunction(function(__var_42) {
      return __fn_40(__var_38.getElementById(__var_42));
    })), __var_5.setProperty(__var_39, 'getElementsByTagName', __var_5.createNativeFunction(function(__var_42) {
      let __fn_43 = Array.from(__var_38.getElementsByTagName(__var_42)),
        __var_44 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      for (let __var_45 = 0; __var_45 < __fn_43.length; __var_45++)
        __var_5.setProperty(__var_44, __var_45, __fn_40(__fn_43[__var_45]));
      return __var_5.setProperty(__var_44, 'length', __fn_43.length), __var_44;
    })), __var_5.setProperty(__var_39, 'getElementsByClassName', __var_5.createNativeFunction(function(__var_42) {
      let __fn_43 = Array.from(__var_38.getElementsByClassName(__var_42)),
        __var_44 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      for (let __var_45 = 0; __var_45 < __fn_43.length; __var_45++)
        __var_5.setProperty(__var_44, __var_45, __fn_40(__fn_43[__var_45]));
      return __var_5.setProperty(__var_44, 'length', __fn_43.length), __var_44;
    })), __var_39;
  }));
}

function __fn_81(__var_5, __var_9, __var_8, __var_10) {
  let __var_11 = new WeakMap(),
    __var_29 = 1000,
    __var_26 = 5,
    __fn_36 = new WeakMap(),
    __var_27 = 0,
    __var_28 = __var_5.nativeToPseudo({});
  __var_5.setProperty(__var_9, '__eventCallbacks', __var_28);

  function __var_38(__var_62, h) {
    let __var_82 = __var_27++;
    __var_5.setProperty(__var_28, 'fn' + __var_82, __var_62), __var_5.setProperty(__var_28, 'ev' + __var_82, h), __var_5.appendCode(`__eventCallbacks.fn${ __var_82 }(__eventCallbacks.ev${ __var_82 }); delete __eventCallbacks.fn${ __var_82 }; delete __eventCallbacks.ev${ __var_82 };`);
  }

  function __var_39() {
    return __var_8.getElementsByTagName('*').length;
  }

  function __fn_40(__var_62 = 1) {
    if (__var_39() + __var_62 > __var_29)
      throw new Error(`DOM element limit exceeded (max ${ __var_29 })`);
  }

  function __var_42(__var_62) {
    return __var_62 instanceof Element ? 1 + __var_62.getElementsByTagName('*').length : 0;
  }

  function __fn_43(__var_62, h = !1) {
    if (__var_62 == null)
      return null;
    if (__var_11.has(__var_62))
      return __var_11.get(__var_62);
    let __var_82 = __var_62 instanceof Element ? __var_54 : __var_49,
      __var_83 = __var_5.createObject(__var_82);
    return __var_83.native = __var_62, __var_83.fromDOMParser || (__var_83.fromDOMParser = h), __var_11.set(__var_62, __var_83), __var_83;
  }

  function __var_44(__var_62) {
    return __var_62 && __var_8.contains(__var_62);
  }

  function __var_45(__var_62) {
    return __var_44(__var_62) ? __var_62 : null;
  }

  function __fn_48(__var_62) {
    let __var_84 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
    for (let __var_82 = 0; __var_82 < __var_62.length; __var_82++)
      __var_5.setProperty(__var_84, __var_82, __fn_43(__var_62[__var_82]));
    return __var_5.setProperty(__var_84, 'length', __var_62.length), __var_84;
  }
  let __var_49 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'Node', __var_49);
  let __var_50 = __var_5.getProperty(__var_49, 'prototype'),
    __var_51 = {
      firstChild: function() {
        return __fn_43(__var_45(this.native.firstChild));
      },
      lastChild: function() {
        return __fn_43(__var_45(this.native.lastChild));
      },
      parentNode: function() {
        return __fn_43(__var_45(this.native.parentNode));
      },
      parentElement: function() {
        return __fn_43(__var_45(this.native.parentElement));
      },
      nextSibling: function() {
        return __fn_43(__var_45(this.native.nextSibling));
      },
      previousSibling: function() {
        return __fn_43(__var_45(this.native.previousSibling));
      },
      childNodes: function() {
        let __var_62 = Array.from(this.native.childNodes).filter(__var_44);
        return __fn_48(__var_62);
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
    __fn_52 = {
      textContent: function(__var_62) {
        __var_6.settings.logCalls && console.log(__var_10.domain, 'set textContent', this, __var_62), this.native.textContent = __var_62;
      },
      nodeValue: function(__var_62) {
        __var_6.settings.logCalls && console.log(__var_10.domain, 'set nodeValue', this, __var_62), this.native.nodeValue = __var_62;
      }
    };
  for (let [__var_62, __var_84] of Object.entries(__var_51)) {
    let __var_82 = {
      get: __var_5.createNativeFunction(__var_84)
    };
    __fn_52[__var_62] && (__var_82.set = __var_5.createNativeFunction(__fn_52[__var_62])), __var_5.setProperty(__var_50, __var_62, Interpreter.VALUE_IN_DESCRIPTOR, __var_82);
  }
  let __var_53 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__var_62) {
      if (!__var_62?.native)
        return null;
      if (__var_62.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __fn_40(__var_42(__var_62.native)), this.native.appendChild(__var_62.native), __var_6.settings.logCalls && console.log(__var_10.domain, 'appendChild', this, __var_62), __var_62;
    },
    append: function(__var_62) {
      for (let __var_84 of __var_62)
        if (__var_84?.native) {
          if (__var_84.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __fn_40(__var_42(__var_84.native)), this.native.appendChild(__var_84.native);
        }
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'append', this, __var_62), __var_62;
    },
    removeChild: function(__var_62) {
      return !__var_62?.native || !__var_44(__var_62.native) ? null : (__var_6.settings.logCalls && console.log(__var_10.domain, 'removeChild', this, __var_62), __fn_43(this.native.removeChild(__var_62.native)));
    },
    insertBefore: function(__var_62, __var_84) {
      if (!__var_62?.native)
        return null;
      if (__var_62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_8))
        throw new Error('No access.');
      __fn_40(__var_42(__var_62.native));
      let __var_82 = __var_84?.native || null;
      return this.native.insertBefore(__var_62.native, __var_82), __var_6.settings.logCalls && console.log(__var_10.domain, 'insertBefore', this, __var_62, __var_82), __var_62;
    },
    cloneNode: function(__var_62) {
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'cloneNode', this, __var_62), __fn_43(this.native.cloneNode(__var_62), this.fromDOMParser);
    },
    contains: function(__var_62) {
      return __var_62?.native ? this.native.contains(__var_62.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__var_8))
        throw new Error('No access.');
      this.native.remove(), __var_6.settings.logCalls && console.log(__var_10.domain, 'remove', this);
    },
    after: function(__var_62) {
      if (!__var_62?.native)
        return null;
      if (__var_62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_8))
        throw new Error('No access.');
      return __fn_40(__var_42(__var_62.native)), this.native.after(__var_62.native), __var_6.settings.logCalls && console.log(__var_10.domain, 'after', this, __var_62), __var_62;
    },
    before: function(__var_62) {
      if (!__var_62?.native)
        return null;
      if (__var_62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_8))
        throw new Error('No access.');
      return __fn_40(__var_42(__var_62.native)), this.native.before(__var_62.native), __var_6.settings.logCalls && console.log(__var_10.domain, 'before', this, __var_62), __var_62;
    }
  };
  for (let [__var_62, __var_84] of Object.entries(__var_53))
    __var_5.setProperty(__var_50, __var_62, __var_5.createNativeFunction(__var_84));
  let __var_54 = __var_5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_5.setProperty(__var_9, 'Element', __var_54);
  let __var_55 = __var_5.createObject(__var_49);
  __var_5.setProperty(__var_54, 'prototype', __var_55);

  function __var_56(__var_62) {
    if (!__var_62)
      return '';
    __var_62 = String(__var_62);
    let __var_84 = __var_62.toLowerCase().trim();
    if (__var_84.startsWith('javascript:') || __var_84.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__var_84.startsWith('data:'))
      return __var_62;
    try {
      let __var_82 = new URL(__var_62, location.href);
      if (__var_82.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __var_83 = __var_82.pathname + __var_82.search + __var_82.hash;
      return __var_83.startsWith(`/t/${ __var_10.domain }/`) || (__var_83 = `/t/${ __var_10.domain }/${ __var_83 }`.replaceAll('//', '/')), __var_83;
    } catch (__var_82) {
      if (__var_82.message.includes('not allowed'))
        throw __var_82;
      let __var_83 = __var_62;
      return !__var_83.startsWith(`/t/${ __var_10.domain }/`) && !__var_83.startsWith('#') && (__var_83 = `/t/${ __var_10.domain }/${ __var_83 }`.replaceAll('//', '/')), __var_83;
    }
  }
  let __var_57 = {
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
        let __var_62 = Array.from(this.native.children).filter(__var_44);
        return __fn_48(__var_62);
      },
      firstElementChild: function() {
        return __fn_43(__var_45(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __fn_43(__var_45(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __fn_43(__var_45(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __fn_43(__var_45(this.native.previousElementSibling));
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
        return this.native.currentSrc || '';
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
        return this.native.preload || 'auto';
      },
      poster: function() {
        return this.native.poster || '';
      },
      videoWidth: function() {
        return this.native.videoWidth || 0;
      },
      videoHeight: function() {
        return this.native.videoHeight || 0;
      }
    },
    __var_58 = {
      innerText: function(__var_62) {
        this.native.innerText = __var_62.slice(0, 1000);
      },
      innerHTML: function(__var_62) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__var_62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __var_62, __var_6.settings.logCalls && console.log(__var_10.domain, 'set id', this, __var_62);
      },
      className: function(__var_62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __var_62, __var_6.settings.logCalls && console.log(__var_10.domain, 'set className', this, __var_62);
      },
      src: function(__var_62) {
        this.native.src = __var_56(__var_62), __var_6.settings.logCalls && console.log(__var_10.domain, 'set src', this, __var_62);
      },
      href: function(__var_62) {
        this.native.href = this.native.tagName === 'A' ? __var_62 : __var_56(__var_62), __var_6.settings.logCalls && console.log(__var_10.domain, 'set href', this, __var_62);
      },
      hidden: function(__var_62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__var_62;
      },
      disabled: function(__var_62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__var_62;
      },
      checked: function(__var_62) {
        this.native.checked = !!__var_62;
      },
      selected: function(__var_62) {
        this.native.selected = !!__var_62;
      },
      readOnly: function(__var_62) {
        this.native.readOnly = !!__var_62;
      },
      required: function(__var_62) {
        this.native.required = !!__var_62;
      },
      draggable: function(__var_62) {
        this.native.draggable = !!__var_62;
      },
      title: function(__var_62) {
        this.native.title = String(__var_62).slice(0, 1000);
      },
      alt: function(__var_62) {
        this.native.alt = String(__var_62).slice(0, 1000);
      },
      name: function(__var_62) {
        this.native.name = String(__var_62).slice(0, 100);
      },
      type: function(__var_62) {
        this.native.type = String(__var_62).slice(0, 50);
      },
      value: function(__var_62) {
        this.native.value = String(__var_62).slice(0, 10000);
      },
      placeholder: function(__var_62) {
        this.native.placeholder = String(__var_62).slice(0, 500);
      },
      tabIndex: function(__var_62) {
        this.native.tabIndex = parseInt(__var_62) || 0;
      },
      scrollTop: function(__var_62) {
        this.native.scrollTop = __var_62;
      },
      scrollLeft: function(__var_62) {
        this.native.scrollLeft = __var_62;
      },
      currentTime: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__var_62) || 0));
      },
      muted: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__var_62);
      },
      volume: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__var_62) || 0)));
      },
      loop: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__var_62);
      },
      autoplay: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__var_62);
      },
      controls: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__var_62);
      },
      playbackRate: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__var_62) || 1)));
      },
      defaultPlaybackRate: function(__var_62) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__var_62) || 1)));
      },
      preload: function(__var_62) {
        if (this.native instanceof HTMLMediaElement) {
          let __var_84 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __var_84.includes(__var_62) ? __var_62 : 'auto';
        }
      },
      poster: function(__var_62) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __var_56(__var_62));
      }
    };
  for (let [__var_62, __var_84] of Object.entries(__var_57)) {
    let __var_82 = {
      get: __var_5.createNativeFunction(__var_84)
    };
    __var_58[__var_62] && (__var_82.set = __var_5.createNativeFunction(__var_58[__var_62])), __var_5.setProperty(__var_55, __var_62, Interpreter.VALUE_IN_DESCRIPTOR, __var_82);
  }
  let __var_59 = {
    getAttributeNames: function() {
      let __var_62 = Array.from(this.native.getAttributeNames()),
        __var_84 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      for (let __var_82 = 0; __var_82 < __var_62.length; __var_82++)
        __var_5.setProperty(__var_84, __var_82, __var_62[__var_82]);
      return __var_5.setProperty(__var_84, 'length', __var_62.length), __var_84;
    },
    getAttribute: function(__var_62) {
      return this.native.getAttribute(__var_62);
    },
    setAttribute: function(__var_62, __var_84) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__var_62 = String(__var_62).toLowerCase(), __var_84 = String(__var_84), __var_6.settings.logCalls && console.log(__var_10.domain, 'setAttribute', this, __var_62, __var_84), __var_62 === 'style' && __var_84.includes('animation-play-state') && __var_84.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__var_62 === 'src' || __var_62 === 'poster' || __var_62 === 'data' || this.native.tagName !== 'A' && __var_62 === 'href') {
        this.native.setAttribute(__var_62, __var_56(__var_84));
        return;
      }
      if (__var_62 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__var_62 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__var_62 === 'action' || __var_62 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__var_62.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__var_62 === 'width' || __var_62 === 'height') {
        let __var_82 = parseFloat(__var_84);
        if (isNaN(__var_82) || __var_82 < 0 || __var_82 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__var_62, __var_84);
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
    scrollIntoView: function(__var_62) {
      __var_62 && typeof __var_62 == 'object' ? this.native.scrollIntoView(__var_5.pseudoToNative(__var_62)) : this.native.scrollIntoView(__var_62);
    },
    scrollTo: function(__var_62, __var_84) {
      this.native.scrollTo(__var_62, __var_84);
    },
    scrollBy: function(__var_62, __var_84) {
      this.native.scrollBy(__var_62, __var_84);
    },
    removeAttribute: function(__var_62) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__var_62 = String(__var_62).toLowerCase(), __var_62 === 'target')
        throw new Error('removing target is not allowed');
      __var_6.settings.logCalls && console.log(__var_10.domain, 'removeAttribute', this, __var_62), this.native.removeAttribute(__var_62);
    },
    hasAttribute: function(__var_62) {
      return this.native.hasAttribute(__var_62);
    },
    querySelector: function(__var_62) {
      let __var_84 = this.native.querySelector(__var_62);
      return __fn_43(__var_45(__var_84));
    },
    querySelectorAll: function(__var_62) {
      let __var_84 = Array.from(this.native.querySelectorAll(__var_62)).filter(__var_44);
      return __fn_48(__var_84);
    },
    getElementsByClassName: function(__var_62) {
      let __var_84 = Array.from(this.native.getElementsByClassName(__var_62)).filter(__var_44);
      return __fn_48(__var_84);
    },
    getElementsByTagName: function(__var_62) {
      let __var_84 = Array.from(this.native.getElementsByTagName(__var_62)).filter(__var_44);
      return __fn_48(__var_84);
    },
    closest: function(__var_62) {
      let __var_84 = this.native.closest(__var_62);
      for (; __var_84 && !__var_8.contains(__var_84);)
        __var_84 = null;
      return __fn_43(__var_84);
    },
    matches: function(__var_62) {
      return this.native.matches(__var_62);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __var_62 = this.native.classList;
      return __var_5.nativeToPseudo({
        add: (...__var_84) => __var_62.add(...__var_84),
        remove: (...__var_84) => __var_62.remove(...__var_84),
        toggle: (__var_84, __var_82) => __var_62.toggle(__var_84, __var_82),
        contains: __var_84 => __var_62.contains(__var_84),
        replace: (__var_84, __var_82) => __var_62.replace(__var_84, __var_82)
      });
    },
    getBoundingClientRect: function() {
      let __var_62 = this.native.getBoundingClientRect();
      return __var_5.nativeToPseudo({
        __var_47: __var_62.__var_47,
        __var_82: __var_62.__var_82,
        width: __var_62.width,
        height: __var_62.height,
        top: __var_62.top,
        right: __var_62.right,
        bottom: __var_62.bottom,
        left: __var_62.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __var_5.createObjectProto(__var_5.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __var_62 = __var_5.createObjectProto(__var_5.OBJECT_PROTO),
        __var_84 = this,
        __var_82 = null,
        __var_83 = null;
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'play', this), __var_5.setProperty(__var_62, 'then', __var_5.createNativeFunction(function(L) {
        return __var_82 = L, __var_62;
      })), __var_5.setProperty(__var_62, 'catch', __var_5.createNativeFunction(function(L) {
        return __var_83 = L, __var_62;
      })), __var_84.native.play().then(() => {
        __var_82 && __var_38(__var_82, __var_5.nativeToPseudo(void 0));
      }).catch(L => {
        __var_83 && __var_38(__var_83, __var_5.nativeToPseudo({
          message: L.message,
          name: L.name
        }));
      }), __var_62;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__var_62) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__var_62 || '')) : '';
    },
    fastSeek: function(__var_62) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__var_62) || 0));
    },
    getAnimations: function(__var_62) {
      if (!this.native.getAnimations)
        return __fn_48([]);
      let __var_84 = __var_62 ? {
          subtree: !!__var_5.pseudoToNative(__var_62)?.subtree
        } : {},
        __var_82 = this.native.getAnimations(__var_84),
        __var_83 = __var_5.createObjectProto(__var_5.ARRAY_PROTO);
      for (let __var_85 = 0; __var_85 < __var_82.length; __var_85++)
        __var_83.properties[__var_85] = __var_46(__var_82[__var_85]);
      return __var_5.setProperty(__var_83, 'length', __var_82.length), __var_83;
    }
  };
  for (let [__var_62, __var_84] of Object.entries(__var_59))
    __var_5.setProperty(__var_55, __var_62, __var_5.createNativeFunction(__var_84));

  function __var_46(__var_62) {
    let __var_84 = __var_5.createObjectProto(__var_5.OBJECT_PROTO);
    return __var_5.setProperty(__var_84, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.id;
      })
    }), __var_5.setProperty(__var_84, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.playState;
      })
    }), __var_5.setProperty(__var_84, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.pending;
      })
    }), __var_5.setProperty(__var_84, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.replaceState;
      })
    }), __var_5.setProperty(__var_84, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.currentTime;
      }),
      set: __var_5.createNativeFunction(function(__var_82) {
        __var_62.currentTime = __var_82;
      })
    }), __var_5.setProperty(__var_84, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.playbackRate;
      }),
      set: __var_5.createNativeFunction(function(__var_82) {
        __var_62.playbackRate = Math.max(-10, Math.min(10, Number(__var_82) || 1));
      })
    }), __var_5.setProperty(__var_84, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        return __var_62.startTime;
      }),
      set: __var_5.createNativeFunction(function(__var_82) {
        __var_62.startTime = __var_82;
      })
    }), __var_5.setProperty(__var_84, 'play', __var_5.createNativeFunction(function() {
      __var_62.play();
    })), __var_5.setProperty(__var_84, 'pause', __var_5.createNativeFunction(function() {
      __var_62.pause();
    })), __var_5.setProperty(__var_84, 'cancel', __var_5.createNativeFunction(function() {
      __var_62.cancel();
    })), __var_5.setProperty(__var_84, 'finish', __var_5.createNativeFunction(function() {
      __var_62.finish();
    })), __var_5.setProperty(__var_84, 'reverse', __var_5.createNativeFunction(function() {
      __var_62.reverse();
    })), __var_5.setProperty(__var_84, 'updatePlaybackRate', __var_5.createNativeFunction(function(__var_82) {
      __var_62.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__var_82) || 1)));
    })), __var_84;
  }

  function __var_41(__var_62) {
    let __var_84 = __var_5.createObjectProto(__var_5.OBJECT_PROTO),
      __var_82 = __var_62 ? __var_62.length : 0;
    return __var_5.setProperty(__var_84, 'length', __var_82), __var_5.setProperty(__var_84, 'start', __var_5.createNativeFunction(function(__var_83) {
      if (!__var_62 || __var_83 < 0 || __var_83 >= __var_62.length)
        throw new Error('Index out of bounds');
      return __var_62.start(__var_83);
    })), __var_5.setProperty(__var_84, 'end', __var_5.createNativeFunction(function(__var_83) {
      if (!__var_62 || __var_83 < 0 || __var_83 >= __var_62.length)
        throw new Error('Index out of bounds');
      return __var_62.end(__var_83);
    })), __var_84;
  }
  __var_5.setProperty(__var_55, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_41(this.native.buffered) : __var_41(null);
    })
  }), __var_5.setProperty(__var_55, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_41(this.native.played) : __var_41(null);
    })
  }), __var_5.setProperty(__var_55, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_41(this.native.seekable) : __var_41(null);
    })
  }), __var_5.setProperty(__var_55, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      let __var_62 = this.native.classList,
        __var_84 = __var_5.nativeToPseudo({});
      return __var_5.setProperty(__var_84, 'add', __var_5.createNativeFunction(function(...__var_82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __var_62.add(...__var_82);
      })), __var_5.setProperty(__var_84, 'remove', __var_5.createNativeFunction(function(...__var_82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __var_62.remove(...__var_82);
      })), __var_5.setProperty(__var_84, 'toggle', __var_5.createNativeFunction(function(__var_82, __var_83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __var_62.toggle(__var_82, __var_83);
      })), __var_5.setProperty(__var_84, 'contains', __var_5.createNativeFunction(function(__var_82) {
        return __var_62.contains(__var_82);
      })), __var_5.setProperty(__var_84, 'replace', __var_5.createNativeFunction(function(__var_82, __var_83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __var_62.replace(__var_82, __var_83);
      })), __var_84;
    })
  }), __var_5.setProperty(__var_55, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      let __var_62 = this.native.style,
        __var_84 = __var_5.nativeToPseudo({}),
        __var_82 = [
          'color',
          'backgroundColor',
          'width',
          'height',
          'margin',
          'padding',
          'border',
          'display',
          'position',
          'top',
          'left',
          'right',
          'bottom',
          'fontSize',
          'fontFamily',
          'fontWeight',
          'textAlign',
          'lineHeight',
          'opacity',
          'visibility',
          'overflow',
          'zIndex',
          'transform',
          'transition',
          'animation',
          'flexDirection',
          'justifyContent',
          'alignItems',
          'gap',
          'gridTemplateColumns',
          'gridTemplateRows'
        ];
      for (let __var_83 of __var_82)
        __var_5.setProperty(__var_84, __var_83, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __var_5.createNativeFunction(function() {
            return __var_62[__var_83];
          }),
          set: __var_5.createNativeFunction(function(__var_85) {
            __var_62[__var_83] = __var_85, __var_6.settings.logCalls && console.log(__var_10.domain, 'set style', this, __var_83, __var_85);
          })
        });
      return __var_5.setProperty(__var_84, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_5.createNativeFunction(function() {
          return __var_62.cssText;
        }),
        set: __var_5.createNativeFunction(function(__var_83) {
          __var_62.cssText = __var_83, __var_6.settings.logCalls && console.log(__var_10.domain, 'set cssText', this, __var_83);
        })
      }), __var_5.setProperty(__var_84, 'setProperty', __var_5.createNativeFunction(function(__var_83, __var_85, O) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __var_62.setProperty(__var_83, __var_85, O), __var_6.settings.logCalls && console.log(__var_10.domain, 'setProperty', this, __var_83, __var_85, O);
      })), __var_5.setProperty(__var_84, 'getPropertyValue', __var_5.createNativeFunction(function(__var_83) {
        return __var_62.getPropertyValue(__var_83);
      })), __var_5.setProperty(__var_84, 'removeProperty', __var_5.createNativeFunction(function(__var_83) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __var_6.settings.logCalls && console.log(__var_10.domain, 'removeProperty', this, __var_83), __var_62.removeProperty(__var_83);
      })), __var_84;
    })
  }), __var_5.setProperty(__var_55, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      let __var_62 = this.native.dataset,
        __var_84 = __var_5.nativeToPseudo({});
      for (let __var_82 in __var_62)
        __var_5.setProperty(__var_84, __var_82, __var_62[__var_82]);
      return __var_5.setProperty(__var_84, 'get', __var_5.createNativeFunction(function(__var_82) {
        return __var_62[__var_82];
      })), __var_5.setProperty(__var_84, 'set', __var_5.createNativeFunction(function(__var_82, __var_83) {
        __var_62[__var_82] = String(__var_83).slice(0, 1000), __var_6.settings.logCalls && console.log(__var_10.domain, 'set dataset', this, __var_82, __var_83);
      })), __var_5.setProperty(__var_84, 'delete', __var_5.createNativeFunction(function(__var_82) {
        delete __var_62[__var_82], __var_6.settings.logCalls && console.log(__var_10.domain, 'delete dataset', this, __var_82);
      })), __var_5.setProperty(__var_84, 'has', __var_5.createNativeFunction(function(__var_82) {
        return __var_82 in __var_62;
      })), __var_84;
    })
  }), __var_5.setProperty(__var_55, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return __fn_43(__var_45(this.native.offsetParent));
    })
  });
  let __var_37 = [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'keydown',
    'keyup',
    'keypress',
    'focus',
    'blur',
    'focusin',
    'focusout',
    'input',
    'change',
    'submit',
    'reset',
    'touchstart',
    'touchend',
    'touchmove',
    'touchcancel',
    'wheel',
    'scroll',
    'resize',
    'dragstart',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'drop',
    'animationstart',
    'animationend',
    'animationiteration',
    'transitionstart',
    'transitionend',
    'transitioncancel',
    'contextmenu',
    'pointerdown',
    'pointerup',
    'pointermove',
    'pointerenter',
    'pointerleave',
    'pointerover',
    'pointerout',
    'play',
    'pause',
    'playing',
    'waiting',
    'seeking',
    'seeked',
    'ended',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'progress',
    'canplay',
    'canplaythrough',
    'timeupdate',
    'durationchange',
    'volumechange',
    'ratechange',
    'stalled',
    'suspend',
    'emptied',
    'abort',
    'error',
    'load'
  ];

  function __var_47(__var_62) {
    let __var_84 = __var_5.nativeToPseudo({}),
      __var_82 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __var_83 of __var_82)
      __var_5.setProperty(__var_84, __var_83, __var_62[__var_83]);
    if (__var_62 instanceof MouseEvent || __var_62 instanceof PointerEvent) {
      let __var_83 = [
        'clientX',
        'clientY',
        'pageX',
        'pageY',
        'screenX',
        'screenY',
        'offsetX',
        'offsetY',
        'movementX',
        'movementY',
        'button',
        'buttons',
        'altKey',
        'ctrlKey',
        'shiftKey',
        'metaKey'
      ];
      for (let __var_85 of __var_83)
        __var_5.setProperty(__var_84, __var_85, __var_62[__var_85]);
    }
    if (__var_62 instanceof KeyboardEvent) {
      let __var_83 = [
        'key',
        'code',
        'keyCode',
        'charCode',
        'altKey',
        'ctrlKey',
        'shiftKey',
        'metaKey',
        'repeat'
      ];
      for (let __var_85 of __var_83)
        __var_5.setProperty(__var_84, __var_85, __var_62[__var_85]);
    }
    return typeof TouchEvent == 'function' && __var_62 instanceof TouchEvent && (__var_5.setProperty(__var_84, 'touches', __var_5.nativeToPseudo({
      length: __var_62.touches.length
    })), __var_5.setProperty(__var_84, 'changedTouches', __var_5.nativeToPseudo({
      length: __var_62.changedTouches.length
    }))), typeof WheelEvent == 'function' && __var_62 instanceof WheelEvent && (__var_5.setProperty(__var_84, 'deltaX', __var_62.deltaX), __var_5.setProperty(__var_84, 'deltaY', __var_62.deltaY), __var_5.setProperty(__var_84, 'deltaZ', __var_62.deltaZ), __var_5.setProperty(__var_84, 'deltaMode', __var_62.deltaMode)), __var_62.target && __var_44(__var_62.target) && __var_5.setProperty(__var_84, 'target', __fn_43(__var_62.target)), __var_62.currentTarget && __var_44(__var_62.currentTarget) && __var_5.setProperty(__var_84, 'currentTarget', __fn_43(__var_62.currentTarget)), __var_5.setProperty(__var_84, 'preventDefault', __var_5.createNativeFunction(function() {
      __var_62.preventDefault();
    })), __var_5.setProperty(__var_84, 'stopPropagation', __var_5.createNativeFunction(function() {
      __var_62.stopPropagation();
    })), __var_5.setProperty(__var_84, 'stopImmediatePropagation', __var_5.createNativeFunction(function() {
      __var_62.stopImmediatePropagation();
    })), __var_84;
  }
  __var_5.setProperty(__var_55, 'addEventListener', __var_5.createNativeFunction(function(__var_62, __var_84) {
    if (!__var_62 || typeof __var_62 != 'string' || !__var_84 || typeof __var_84 != 'object')
      return;
    if (__var_62 = __var_62.toLowerCase(), !__var_37.includes(__var_62))
      throw new Error(`Event type "${ __var_62 }" is not allowed`);
    __var_6.settings.logCalls && console.log(__var_10.domain, 'addEventListener', this, __var_62, __var_84);
    let __var_82 = this.native;
    __fn_36.has(__var_82) || __fn_36.set(__var_82, new Map());
    let __var_83 = __fn_36.get(__var_82);
    __var_83.has(__var_62) || __var_83.set(__var_62, []);
    let __var_85 = __var_83.get(__var_62);
    if (__var_85.length >= __var_26)
      throw new Error(`Maximum listeners (${ __var_26 }) reached for event "${ __var_62 }"`);
    if (__var_85.some(U => U.pseudo === __var_84))
      return;
    let __var_86 = function(U) {
      let __var_87 = __var_47(U);
      __var_38(__var_84, __var_87);
    };
    __var_85.push({
      pseudo: __var_84,
      native: __var_86
    }), __var_82.addEventListener(__var_62, __var_86);
  })), __var_5.setProperty(__var_55, 'removeEventListener', __var_5.createNativeFunction(function(__var_62, __var_84) {
    if (!__var_62 || typeof __var_62 != 'string' || !__var_84 || typeof __var_84 != 'object')
      return;
    __var_6.settings.logCalls && console.log(__var_10.domain, 'removeEventListener', this, __var_62, __var_84), __var_62 = __var_62.toLowerCase();
    let __var_82 = this.native;
    if (!__fn_36.has(__var_82))
      return;
    let __var_83 = __fn_36.get(__var_82);
    if (!__var_83.has(__var_62))
      return;
    let __var_85 = __var_83.get(__var_62),
      __var_86 = __var_85.findIndex(U => U.pseudo === __var_84);
    __var_86 !== -1 && (__var_82.removeEventListener(__var_62, __var_85[__var_86].native), __var_85.splice(__var_86, 1));
  }));
  let __var_63 = [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mousemove',
    'mouseenter',
    'mouseleave',
    'mouseover',
    'mouseout',
    'keydown',
    'keyup',
    'keypress',
    'focus',
    'blur',
    'input',
    'change',
    'submit',
    'touchstart',
    'touchend',
    'touchmove',
    'wheel',
    'scroll',
    'contextmenu',
    'play',
    'pause',
    'playing',
    'waiting',
    'seeking',
    'seeked',
    'ended',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'progress',
    'canplay',
    'canplaythrough',
    'timeupdate',
    'durationchange',
    'volumechange',
    'ratechange',
    'stalled',
    'suspend',
    'emptied',
    'abort',
    'error',
    'load'
  ];
  for (let __var_62 of __var_63) {
    let __var_84 = 'on' + __var_62;
    __var_5.setProperty(__var_55, __var_84, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_5.createNativeFunction(function() {
        let __var_82 = this.native;
        if (!__fn_36.has(__var_82))
          return null;
        let __var_83 = __fn_36.get(__var_82),
          __var_85 = `__${ __var_84 }`;
        return __var_83.get(__var_85) || null;
      }),
      set: __var_5.createNativeFunction(function(__var_82) {
        let __var_83 = this.native;
        __fn_36.has(__var_83) || __fn_36.set(__var_83, new Map());
        let __var_85 = __fn_36.get(__var_83),
          __var_86 = `__${ __var_84 }`;
        __var_6.settings.logCalls && console.log(__var_10.domain, 'setOn' + __var_62, this, __var_82);
        let __var_88 = __var_85.get(__var_86 + '_native');
        if (__var_88 && (__var_83.removeEventListener(__var_62, __var_88), __var_85.delete(__var_86), __var_85.delete(__var_86 + '_native')), __var_82 && typeof __var_82 == 'object') {
          let __var_87 = function(Ke) {
            let __var_89 = __var_47(Ke);
            __var_38(__var_82, __var_89);
          };
          __var_83.addEventListener(__var_62, __var_87), __var_85.set(__var_86, __var_82), __var_85.set(__var_86 + '_native', __var_87);
        }
      })
    });
  }
  __fn_35(__var_5, __var_9, __var_10).extendElement(__var_55, __fn_43), __fn_64(__var_5, __var_9, __var_10), __fn_79(__var_5, __var_9, __var_10.domain), __fn_80(__var_5, __var_9, __var_8, __var_10);
  let __var_61 = __var_5.nativeToPseudo({});
  __var_5.setProperty(__var_9, 'document', __var_61);
  let __var_90 = {
    getElementById: function(__var_62) {
      let __var_84 = __var_8.querySelector(`#${ CSS.escape(__var_62) }`);
      return __fn_43(__var_84);
    },
    getElementsByClassName: function(__var_62) {
      let __var_84 = Array.from(__var_8.getElementsByClassName(__var_62));
      return __fn_48(__var_84);
    },
    getElementsByTagName: function(__var_62) {
      let __var_84 = Array.from(__var_8.getElementsByTagName(__var_62));
      return __fn_48(__var_84);
    },
    querySelector: function(__var_62) {
      return __fn_43(__var_8.querySelector(__var_62));
    },
    querySelectorAll: function(__var_62) {
      let __var_84 = Array.from(__var_8.querySelectorAll(__var_62));
      return __fn_48(__var_84);
    },
    createElement: function(__var_62) {
      if (typeof __var_62 != 'string')
        throw new Error('Invalid tag');
      if (__var_62 = __var_62.toLowerCase().trim(), [
          'script',
          'style',
          'iframe',
          'embed',
          'object',
          'frame',
          'frameset',
          'layer',
          'ilayer',
          'applet',
          'meta',
          'base',
          'link',
          'title',
          'source',
          'geolocation',
          'permission'
        ].includes(__var_62))
        throw new Error('Creating ' + __var_62 + ' elements is not allowed');
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'createElement', this, __var_62), __fn_43(document.createElement(__var_62));
    },
    createTextNode: function(__var_62) {
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'createTextNode', this, __var_62), __fn_43(document.createTextNode(__var_62));
    }
  };
  for (let [__var_62, __var_84] of Object.entries(__var_90))
    __var_5.setProperty(__var_61, __var_62, __var_5.createNativeFunction(__var_84));
  __var_5.setProperty(__var_61, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'get body', this), __fn_43(__var_8);
    })
  }), __var_5.setProperty(__var_61, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return __var_6.settings.logCalls && console.log(__var_10.domain, 'get documentElement', this), __fn_43(__var_8);
    })
  });
  let __var_91 = __var_5.nativeToPseudo({});
  __var_5.setProperty(__var_9, 'location', __var_91), __var_5.setProperty(__var_91, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_5.createNativeFunction(function() {
      return `/t/${ __var_10.domain }${ __var_10.path }`;
    }),
    set: __var_5.createNativeFunction(function(__var_62) {
      if (typeof __var_62 == 'string') {
        __var_6.settings.logCalls && console.log(__var_10.domain, 'set href', this, __var_62);
        try {
          let __var_84 = new URL(__var_62, `http://${ __var_10.domain }`);
          if (__var_84.hostname && __var_84.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __var_82 = __var_84.pathname + __var_84.search + __var_84.hash;
          if (__var_82.startsWith(`/t/${ __var_10.domain }/`) ? __var_82 = __var_82.substring(`/t/${ __var_10.domain }`.length) : __var_82 === `/t/${ __var_10.domain }` && (__var_82 = '/'), __var_82.startsWith('/') || (__var_82 = '/' + __var_82), __var_82.endsWith('.html') || __var_82 === '/' || __var_82 === '')
            __var_10.fetchContent(__var_82 || '/index.html'), __var_10.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__var_84) {
          if (__var_84.message.includes('not allowed') || __var_84.message.includes('Only HTML'))
            throw __var_84;
          let __var_82 = __var_62;
          if (__var_82.startsWith('/') || (__var_82 = '/' + __var_82), __var_82.endsWith('.html') || __var_82 === '/' || __var_82 === '')
            __var_10.fetchContent(__var_82 || '/index.html').then(() => __var_10.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __var_5.setProperty(__var_91, 'reload', __var_5.createNativeFunction(function() {
    __var_10.fetchContent(__var_10.path, !0).then(() => __var_10.setActive(!0));
  }));
}
var __var_92 = {
    console: {
      log: function(...__var_5) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...__var_5);
      },
      error: function(...__var_5) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...__var_5);
      },
      warn: function(...__var_5) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...__var_5);
      }
    },
    alert(__var_5) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ __var_5 }`);
    },
    prompt(__var_5) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ __var_5 }`);
    },
    confirm(__var_5) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ __var_5 }`);
    },
    atob(__var_5) {
      return atob(__var_5);
    },
    btoa(__var_5) {
      return btoa(__var_5);
    }
  },
  __var_93 = class {
    constructor(__var_9) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = __var_9, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__var_8, __var_10) => {
        let __var_11 = (__var_29, __var_26) => {
          for (let [__fn_36, __var_27] of Object.entries(__var_29))
            if (typeof __var_27 == 'function')
              __var_8.setProperty(__var_26, __fn_36, __var_8.createNativeFunction(__var_27.bind(this)));
            else if (typeof __var_27 == 'object' && __var_27 !== null) {
            let __var_28 = __var_8.nativeToPseudo({});
            __var_11(__var_27, __var_28), __var_8.setProperty(__var_26, __fn_36, __var_28);
          }
        };
        __var_11(__var_92, __var_10), __fn_81(__var_8, __var_10, this.tile.contentElement, this.tile), __var_8.setProperty(__var_10, 'embedded', __var_8.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __var_9 = new Set(),
        __var_8 = [this.interpreter.getStateStack()],
        __var_10 = 0;
      for (; __var_8.length;) {
        let __var_11 = __var_8.pop(),
          __var_29 = typeof __var_11;
        if (__var_10 += 8, __var_29 === 'string' && !__var_9.has(__var_11))
          __var_9.add(__var_11), __var_10 += __var_11.length * 2;
        else if (__var_29 === 'object' && __var_11 !== null && !__var_9.has(__var_11)) {
          __var_9.add(__var_11);
          try {
            __var_8.push(...Object.keys(__var_11), ...Object.values(__var_11));
          } catch {}
        }
      }
      return __var_10;
    }
    start() {
      this.running || __var_6.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __var_9 = 0; __var_9 < 5000; __var_9++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __var_8 = this.roughValueMemorySize();
                if (__var_8 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __var_8 } bytes`);
                  break;
                }
              }
            } catch (__var_8) {
              console.error(__var_8), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__var_9) {
      __var_6.settings.disableJS || this.interpreter.appendCode(__var_9);
    }
  },
  __var_94 = __var_93;
var __var_95 = document.getElementById('plot'),
  __var_96 = new CSSStyleSheet(),
  __var_97 = () => {
    __var_96.replaceSync(`
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
__var_97();
var __var_98 = new CSSStyleSheet();
__var_98.replaceSync(`
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
var __var_99 = class __var_5 {
  constructor(__var_9) {
    this.__var_47 = __var_9.__var_47 ?? 0, this.__var_82 = __var_9.__var_82 ?? 0, this.domain = __var_9.domain, this.free = !__var_9.domain, this.locked = !1, this.id = `${ this.__var_47 },${ this.__var_82 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __var_9.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __var_9.nocontrols || !1, this.embed = __var_9.embed || !1, this.container = __var_9.container || __var_95, this.interpreter = null, this.render();
  }
  static toTilePosition(__var_9, __var_8) {
    return {
      __var_47: Math.floor(__var_9 / 250),
      __var_82: Math.floor(__var_8 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __var_9 = document.createElement('div');
    __var_9.classList.add('tile'), this.free && __var_9.classList.add('f'), this.preview ? __var_9.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__var_9.style.left = `${ this.__var_47 * 250 }px`, __var_9.style.top = `${ this.__var_82 * 250 }px`, this.__var_47 % 10 === 0 && __var_9.classList.add('b-left'), this.__var_82 % 10 === 0 && __var_9.classList.add('b-top')), this.element = __var_9;
    let __var_8 = document.createElement('div');
    __var_8.classList.add('tile-content'), this.preview && (__var_8.style.cssText = 'width: 100%; height: 100%;'), __var_8.addEventListener('click', async __var_11 => {
      let __var_29 = __var_11.composedPath()?.filter(__var_28 => __var_28 instanceof Element);
      if (!__var_29)
        return;
      let __var_26 = __var_29.findIndex(__var_28 => __var_28.isSameNode(__var_8));
      if (__var_26 === -1)
        return;
      let __var_27 = __var_29.slice(0, __var_26).find(__var_28 => __var_28.tagName === 'A');
      if (__var_27) {
        __var_11.preventDefault();
        try {
          let __var_28 = new URL(__var_27.href);
          if (__var_28.hostname !== location.hostname) {
            let __var_39 = document.createElement('a');
            __var_39.href = __var_27.href, __var_39.target = '_blank', __var_39.click();
            return;
          }
          let __var_38 = __var_28.pathname;
          if (__var_38.startsWith(`/t/${ this.domain }/`) || (__var_38 = `/t/${ this.domain }/${ __var_38 }`.replaceAll('//', '/')), __var_38.startsWith(`/t/${ this.domain }`) && (__var_38.endsWith('.html') || __var_38 === `/t/${ this.domain }/` || __var_38 === `/t/${ this.domain }`))
            await this.fetchContent(__var_38.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __var_39 = document.createElement('a');
            __var_39.href = __var_27.href, __var_39.target = '_blank', __var_39.click();
          }
        } catch (__var_28) {
          console.error(__var_28);
        }
      }
    }), this.shadow = __var_8.attachShadow({
      mode: 'open'
    });
    let __var_10 = document.createElement('div');
    __var_10.className = 'tile-body', this.embed && __var_10.classList.add('embedded'), __var_10.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __var_10, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__var_47 }, ${ this.__var_82 }...`, this.shadow.appendChild(__var_10), __var_9.appendChild(__var_8), this.fonts = document.createElement('style'), __var_9.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__var_9), __var_6.plot?.lockCache[this.__var_47 + ',' + this.__var_82] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__var_9, __var_8 = !1) {
    __var_9.startsWith('/') || (__var_9 = '/' + __var_9);
    let __var_10 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__var_47 }, ${ this.__var_82 }</p>
            </div>` : this.path === __var_9 && this.content && !__var_8 ? this.content : await fetch(`/t/${ this.domain }${ __var_9 }`).then(__var_26 => __var_26.text()).catch(__var_26 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__var_98] : this.shadow.adoptedStyleSheets = [__var_96], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __var_9, this.contentElement.innerHTML = __var_10, this.content = __var_10;
    let __var_11 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __var_29 = 0;
    for (let __var_26 of __var_11) {
      if (__var_29 >= 3)
        break;
      let __fn_36 = __var_26.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__fn_36)
        for (let __var_27 of __fn_36) {
          if (__var_29 >= 3)
            break;
          this.fonts.textContent += __var_27, __var_29++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __var_9 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __var_8 of __var_9)
      this.interpreter.runCode(__var_8.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__var_9) {
    if (this.element && (__var_9 && (this.interpreter || (this.interpreter = new __var_94(this), this.executeScripts()), this.interpreter.start()), __var_9 !== this.active)) {
      if (this.active = __var_9, __var_9) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __var_6.ui) {
          let __var_10 = __var_6.ui.createVoteMenu(this);
          __var_10 && this.element.appendChild(__var_10);
          let __var_11 = __var_6.ui.createTileControl(this);
          if (this.element.appendChild(__var_11), __var_6.user?.admin || __var_6.user?.moderator) {
            let __var_29 = __var_6.ui.createAdminControl(this);
            this.element.appendChild(__var_29);
          }
          __var_6.plot?.activeTile && __var_6.plot.activeTile.setActive(!1), __var_6.plot && (__var_6.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __var_8 = this.contentElement.querySelectorAll('audio, video');
        for (let __var_10 of __var_8)
          __var_10.dataset.webtilesPaused === 'true' && (__var_10.dataset.webtilesPaused = !1, __var_10.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __var_6.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __var_6.plot && (__var_6.plot.activeTile = null)), __var_5.clearClanBorders();
        let __var_8 = this.contentElement.querySelectorAll('audio, video');
        for (let __var_10 of __var_8)
          __var_10.paused || (__var_10.dataset.webtilesPaused = !0, __var_10.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __var_8 = await (await __var_6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__var_8.success || !__var_8.clan)
          return;
        let __var_10 = __var_8.clan.members;
        if (!__var_10 || __var_10.length <= 1)
          return;
        let __var_11 = new Set(__var_10.map(__var_29 => `${ __var_29.__var_47 },${ __var_29.__var_82 }`));
        for (let __var_29 of __var_10) {
          let __var_26 = __var_6.plot.tiles[`${ __var_29.__var_47 },${ __var_29.__var_82 }`];
          if (!__var_26?.element)
            continue;
          __var_26.element.classList.add('clan-highlight');
          let __fn_36 = __var_11.has(`${ __var_29.__var_47 },${ __var_29.__var_82 - 1 }`),
            __var_27 = __var_11.has(`${ __var_29.__var_47 },${ __var_29.__var_82 + 1 }`),
            __var_28 = __var_11.has(`${ __var_29.__var_47 - 1 },${ __var_29.__var_82 }`),
            __var_38 = __var_11.has(`${ __var_29.__var_47 + 1 },${ __var_29.__var_82 }`);
          if (!__fn_36) {
            let __var_39 = document.createElement('div');
            __var_39.className = 'clan-border clan-border-top', __var_26.element.appendChild(__var_39);
          }
          if (!__var_27) {
            let __var_39 = document.createElement('div');
            __var_39.className = 'clan-border clan-border-bottom', __var_26.element.appendChild(__var_39);
          }
          if (!__var_28) {
            let __var_39 = document.createElement('div');
            __var_39.className = 'clan-border clan-border-left', __var_26.element.appendChild(__var_39);
          }
          if (!__var_38) {
            let __var_39 = document.createElement('div');
            __var_39.className = 'clan-border clan-border-right', __var_26.element.appendChild(__var_39);
          }
        }
      } catch (__var_9) {
        console.error('Failed to fetch clan borders:', __var_9);
      }
  }
  static clearClanBorders() {
    if (__var_6.plot?.tiles)
      for (let __var_9 of Object.values(__var_6.plot.tiles))
        __var_9.element && (__var_9.element.classList.remove('clan-highlight'), __var_9.element.querySelectorAll('.clan-border').forEach(__var_10 => __var_10.remove()));
  }
  setDomain(__var_9) {
    this.domain = __var_9, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__var_9) {
    this.locked = __var_9, this.element && this.element.classList.toggle('locked', __var_9), this.fetchContent('/index.html', !0);
  }
};
__var_6.ui = {
  coords: document.querySelector('#coords'),
  zoomSlider: document.querySelector('#zoom-slider > input'),
  siteSelector: document.querySelector('#kicya-site-selector'),
  siteJumpButton: document.querySelector('#kicya-site-jump'),
  siteCenterButton: document.querySelector('#kicya-site-center'),
  siteEditButton: document.querySelector('#kicya-site-edit'),
  siteClanButton: document.querySelector('#kicya-site-clan'),
  siteEmbedButton: document.querySelector('#kicya-site-embed'),
  clanIndicator: document.querySelector('#kicya-clan-indicator'),
  pendingClanInvites: [],
  createElement: (__var_5, __var_9 = {}) => {
    let __var_8 = document.createElement(__var_5);
    for (let [__var_10, __var_11] of Object.entries(__var_9))
      __var_10 === 'innerText' ? __var_8.innerText = __var_11 : __var_10 === 'innerHTML' ? __var_8.innerHTML = __var_11 : __var_10.startsWith('on') ? __var_8.addEventListener(__var_10.slice(2).toLowerCase(), __var_11) : __var_8.setAttribute(__var_10, __var_11);
    return __var_8;
  },
  escapeHTML: __var_5 => __var_5 ? __var_5.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '',
  showDashboard: __var_5 => {
    Ye.src = `/dashboard?site=${ encodeURIComponent(__var_5) }&path=/`, We && (We.textContent = `File Manager - ${ __var_5 }`), Ve.classList.add('active'), fe && (fe.style.display = 'none'), __var_6.camera && __var_6.camera.setZoomEnabled(!1), __var_6.ws?.isConnected && setTimeout(() => {
      let __var_9 = new Int16Array(3);
      __var_9[0] = 0, __var_9[1] = 0, __var_9[2] = 0, __var_6.ws.send(__var_9.buffer);
    }, 100);
  },
  showClaimModal: __var_5 => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __var_9 = __var_6.user.selectedSite;
    if (!__var_9) {
      alert('Please select a site first');
      return;
    }
    let __var_8 = __var_9.domain,
      __var_10 = __var_9.tile ? `<strong>Warning</strong>Your current tile at (${ __var_9.tile.__var_47 }, ${ __var_9.tile.__var_82 }) will be unclaimed and your site will be moved to this new tile.` : null;
    new __var_12({
      title: 'Claim Tile',
      content: `<p>Do you want to claim tile (${ __var_5.__var_47 }, ${ __var_5.__var_82 }) for <strong>${ __var_6.ui.escapeHTML(__var_8) }</strong>?</p>`,
      warning: __var_10,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_29 => __var_29.close()
        },
        {
          text: 'Claim',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_29 => {
            __var_29.setButtonLoading('confirm', !0, 'Claiming...');
            try {
              let __fn_36 = await (await __var_6.api.makeRequest('/api/claim', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82
                })
              })).json();
              if (__fn_36.success) {
                if (__var_6.user.selectedSite) {
                  if (__var_6.user.selectedSite.tile) {
                    let __var_27 = __var_6.plot.getTile(__var_6.user.selectedSite.tile.__var_47, __var_6.user.selectedSite.tile.__var_82);
                    __var_27 && __var_27.setFree();
                  }
                  __var_6.user.selectedSite.tile = {
                    __var_47: __var_5.__var_47,
                    __var_82: __var_5.__var_82,
                    code: __fn_36.code,
                    domain: __var_6.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                setTimeout(() => {
                  __var_5.setDomain(__var_6.user.selectedSite.domain), __var_5.setActive(!1), __var_5.element && __var_5.element.classList.toggle('locked', !1);
                }, 400), __var_29.close(), Q();
              } else
                alert(__fn_36.error || 'Failed to claim tile'), __var_29.setButtonLoading('confirm', !1);
            } catch (__var_26) {
              console.error(__var_26), alert('Failed to claim tile: ' + __var_26.message), __var_29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showUnlockModal: __var_5 => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __var_9 = __var_6.user.selectedSite;
    if (!__var_9) {
      alert('Please select a site first');
      return;
    }
    let __var_8 = __var_9.domain,
      __var_10 = __var_9.tile ? `<strong>Warning</strong>Your current tile at (${ __var_9.tile.__var_47 }, ${ __var_9.tile.__var_82 }) will be unclaimed and your site will be moved to this new tile.` : null,
      __var_11 = new __var_12({
        title: 'Unlock & Claim Tile',
        content: `
                <p>Enter the unlock code to claim the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }) for <strong>${ __var_6.ui.escapeHTML(__var_8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: __var_10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __var_29 => __var_29.close()
          },
          {
            text: 'Unlock & Claim',
            type: 'confirm',
            id: 'confirm',
            onClick: async __var_29 => {
              let __fn_36 = __var_11.element.querySelector('#unlock-code-input').value.trim();
              if (!__fn_36) {
                alert('Please enter a code');
                return;
              }
              __var_29.setButtonLoading('confirm', !0, 'Unlocking...');
              try {
                let __var_28 = await (await __var_6.api.makeRequest('/api/claim', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __var_47: __var_5.__var_47,
                    __var_82: __var_5.__var_82,
                    code: __fn_36
                  })
                })).json();
                if (__var_28.success) {
                  if (delete __var_6.plot.lockCache[__var_5.__var_47 + ',' + __var_5.__var_82], __var_6.user.selectedSite) {
                    if (__var_6.user.selectedSite.tile) {
                      let __var_38 = __var_6.plot.getTile(__var_6.user.selectedSite.tile.__var_47, __var_6.user.selectedSite.tile.__var_82);
                      __var_38 && __var_38.setFree();
                    }
                    __var_6.user.selectedSite.tile = {
                      __var_47: __var_5.__var_47,
                      __var_82: __var_5.__var_82,
                      code: __var_28.code,
                      domain: __var_6.user.selectedSite.domain,
                      created_at: Date.now()
                    };
                  }
                  __var_5.setDomain(__var_6.user.selectedSite.domain), __var_5.setActive(!1), __var_29.close(), Q();
                } else
                  alert(__var_28.error || 'Failed to unlock tile'), __var_29.setButtonLoading('confirm', !1);
              } catch (__var_27) {
                console.error(__var_27), alert('Failed to unlock tile: ' + __var_27.message), __var_29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __var_11.open(), setTimeout(() => {
      let __var_29 = __var_11.element.querySelector('#unlock-code-input');
      __var_29 && __var_29.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    __var_6.ui.clanIndicator && (__var_6.ui.clanIndicator.hidden = __var_6.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!__var_6.user || !__var_6.user.selectedSite))
      try {
        let __var_9 = await (await __var_6.api.makeRequest('/api/clans/invites')).json();
        __var_9.success && (__var_6.ui.pendingClanInvites = __var_9.invites || [], __var_6.ui.updateClanIndicator());
      } catch (__var_5) {
        console.error('Failed to fetch clan invites:', __var_5);
      }
  },
  showClanModal: async () => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__var_6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    let __var_5 = new __var_12({
      title: 'Clan Management',
      content: '<p>Loading...</p>',
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __var_9 => __var_9.close()
      }]
    });
    __var_5.open();
    try {
      let [__var_9, __var_8] = await Promise.all([
        __var_6.api.makeRequest('/api/clans/current'),
        __var_6.api.makeRequest('/api/clans/invites')
      ]), __var_10 = await __var_9.json(), __var_11 = await __var_8.json();
      __var_6.ui.pendingClanInvites = __var_11.invites || [], __var_6.ui.updateClanIndicator();
      let __var_29 = __var_6.user?.admin || __var_6.user?.moderator;
      __var_10.success && __var_10.clan ? __var_6.ui.renderClanInfo(__var_5, __var_10.clan, __var_29) : __var_6.ui.renderNoClan(__var_5, __var_11.invites || [], __var_29);
    } catch (__var_9) {
      console.error(__var_9), __var_5.setContent('<p>Failed to load clan data: ' + __var_6.ui.escapeHTML(__var_9.message) + '</p>');
    }
  },
  renderClanInfo: (__var_5, __var_9, __var_8) => {
    let __var_10 = `
            <div class="clan-name-display">${ __var_6.ui.escapeHTML(__var_9.name) }</div>
            <div class="clan-stats">${ __var_9.members.length }/5 members. ${ __var_9.members.length < 3 ? 'Unprotected! Reach 3 members to protect your tiles.' : 'Your tiles are protected.' }</div>
        `;
    __var_10 += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let __var_38 of __var_9.members) {
      let __var_39 = __var_38.domain === __var_6.user.sites.find(__fn_40 => __fn_40.tile?.__var_47 === __var_38.__var_47 && __fn_40.tile?.__var_82 === __var_38.__var_82)?.domain;
      __var_10 += `<div class="clan-member-item">
                <span class="clan-member-domain">${ __var_6.ui.escapeHTML(__var_38.domain) }</span>
                <div>`, __var_9.isOwner && __var_38.domain !== __var_6.user.selectedSite?.domain && (__var_10 += `<button class="clan-member-kick" data-domain="${ __var_6.ui.escapeHTML(__var_38.domain) }">Kick</button>`), __var_10 += `</div>
            </div>`;
    }
    if (__var_10 += '</div></div>', __var_9.isOwner && __var_9.pendingInvites && __var_9.pendingInvites.length > 0) {
      __var_10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let __var_38 of __var_9.pendingInvites)
        __var_10 += `<div class="clan-pending-item">
                    <span>${ __var_6.ui.escapeHTML(__var_38.domain) }</span>
                    <button class="clan-pending-cancel" data-invite="${ __var_38.id }">Cancel</button>
                </div>`;
      __var_10 += '</div></div>';
    }
    __var_9.isOwner && __var_9.members.length < 5 && (__var_10 += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), __var_8 && (__var_10 += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __var_5.setContent(__var_10);
    let __var_11 = [{
      text: 'Close',
      type: 'cancel',
      id: 'close',
      onClick: __var_38 => __var_38.close()
    }];
    __var_9.isOwner ? __var_11.unshift({
      text: 'Disband Clan',
      type: 'cancel',
      id: 'disband',
      onClick: async __var_38 => {
        if (confirm('Are you sure you want to disband this clan?')) {
          __var_38.setButtonLoading('disband', !0, 'Disbanding...');
          try {
            let __fn_40 = await (await __var_6.api.makeRequest('/api/clans/disband', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __fn_40.success ? (__var_38.close(), __var_6.ui.showClanModal()) : (alert(__fn_40.error || 'Failed to disband clan'), __var_38.setButtonLoading('disband', !1));
          } catch (__var_39) {
            alert('Failed to disband clan: ' + __var_39.message), __var_38.setButtonLoading('disband', !1);
          }
        }
      }
    }) : __var_11.unshift({
      text: 'Leave Clan',
      type: 'cancel',
      id: 'leave',
      onClick: async __var_38 => {
        if (confirm('Are you sure you want to leave this clan?')) {
          __var_38.setButtonLoading('leave', !0, 'Leaving...');
          try {
            let __fn_40 = await (await __var_6.api.makeRequest('/api/clans/leave', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __fn_40.success ? (__var_38.close(), __var_6.ui.showClanModal()) : (alert(__fn_40.error || 'Failed to leave clan'), __var_38.setButtonLoading('leave', !1));
          } catch (__var_39) {
            alert('Failed to leave clan: ' + __var_39.message), __var_38.setButtonLoading('leave', !1);
          }
        }
      }
    }), __var_5.buttons = __var_11;
    let __var_29 = __var_5.element.querySelector('.modal-actions');
    __var_29.innerHTML = '', __var_5._buttonElements.clear();
    for (let __var_38 of __var_5.buttons)
      __var_29.appendChild(__var_5._createButton(__var_38));
    __var_5.element.querySelectorAll('.clan-member-kick').forEach(__var_38 => {
      __var_38.addEventListener('click', async () => {
        let __var_39 = __var_38.dataset.domain;
        if (confirm(`Are you sure you want to kick ${ __var_39 }?`)) {
          __var_38.disabled = !0, __var_38.textContent = '...';
          try {
            let __var_42 = await (await __var_6.api.makeRequest('/api/clans/kick', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                domain: __var_39
              })
            })).json();
            __var_42.success ? (__var_6.ui.showClanModal(), __var_5.close()) : (alert(__var_42.error || 'Failed to kick member'), __var_38.disabled = !1, __var_38.textContent = 'Kick');
          } catch (__fn_40) {
            alert('Failed to kick member: ' + __fn_40.message), __var_38.disabled = !1, __var_38.textContent = 'Kick';
          }
        }
      });
    }), __var_5.element.querySelectorAll('.clan-pending-cancel').forEach(__var_38 => {
      __var_38.addEventListener('click', async () => {
        let __var_39 = __var_38.dataset.invite;
        __var_38.disabled = !0, __var_38.textContent = '...';
        try {
          let __var_42 = await (await __var_6.api.makeRequest('/api/clans/cancel-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__var_39)
            })
          })).json();
          __var_42.success ? __var_38.closest('.clan-pending-item').remove() : (alert(__var_42.error || 'Failed to cancel invite'), __var_38.disabled = !1, __var_38.textContent = 'Cancel');
        } catch (__fn_40) {
          alert('Failed to cancel invite: ' + __fn_40.message), __var_38.disabled = !1, __var_38.textContent = 'Cancel';
        }
      });
    });
    let __var_26 = __var_5.element.querySelector('#clan-invite-btn'),
      __fn_36 = __var_5.element.querySelector('#clan-invite-domain');
    __var_26 && __fn_36 && __var_26.addEventListener('click', async () => {
      let __var_38 = __fn_36.value.trim();
      if (!__var_38) {
        alert('Please enter a domain');
        return;
      }
      __var_26.disabled = !0, __var_26.textContent = 'Sending...';
      try {
        let __fn_40 = await (await __var_6.api.makeRequest('/api/clans/invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            domain: __var_38
          })
        })).json();
        __fn_40.success ? (__fn_36.value = '', __var_6.ui.showClanModal(), __var_5.close()) : (alert(__fn_40.error || 'Failed to send invite'), __var_26.disabled = !1, __var_26.textContent = 'Send Invite');
      } catch (__var_39) {
        alert('Failed to send invite: ' + __var_39.message), __var_26.disabled = !1, __var_26.textContent = 'Send Invite';
      }
    });
    let __var_27 = __var_5.element.querySelector('#clan-admin-invites-btn');
    __var_27 && __var_27.addEventListener('click', () => {
      __var_5.close(), setTimeout(() => __var_6.ui.showAdminInvitesModal(), 50);
    });
    let __var_28 = __var_5.element.querySelector('#clan-admin-clans-btn');
    __var_28 && __var_28.addEventListener('click', () => {
      __var_5.close(), setTimeout(() => __var_6.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (__var_5, __var_9, __var_8) => {
    let __var_10 = '';
    if (__var_9.length > 0) {
      __var_10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let __var_27 of __var_9)
        __var_10 += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${ __var_6.ui.escapeHTML(__var_27.clan_name) }</strong>
                        ${ __var_27.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${ __var_6.ui.escapeHTML(__var_27.inviter_domain) }</span>` : '' }
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${ __var_27.id }">Accept</button>
                        <button class="clan-invite-reject" data-invite="${ __var_27.id }">Reject</button>
                    </div>
                </div>`;
      __var_10 += '</div></div>';
    }
    __var_10 += `<div class="clan-section">
            <div class="clan-section-title">Create a New Clan</div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">Create a clan to group neighboring tiles together (max 5 tiles).</p>
            <div class="code-input-container" style="margin: 5px 0;">
                <input type="text" id="clan-create-name" class="modal-input" placeholder="Clan name (3-20 chars, alphanumeric)" autocomplete="off" style="font-family: inherit;" maxlength="20" />
            </div>
            <button class="modal-btn modal-btn-confirm" id="clan-create-btn" style="margin-top: 5px;">Create Clan</button>
        </div>`, __var_8 && (__var_10 += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __var_5.setContent(__var_10), __var_5.element.querySelectorAll('.clan-invite-accept').forEach(__var_27 => {
      __var_27.addEventListener('click', async () => {
        let __var_28 = __var_27.dataset.invite;
        __var_27.disabled = !0, __var_27.textContent = '...';
        try {
          let __var_39 = await (await __var_6.api.makeRequest('/api/clans/accept-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__var_28)
            })
          })).json();
          __var_39.success ? (__var_6.ui.pendingClanInvites = __var_6.ui.pendingClanInvites.filter(__fn_40 => __fn_40.id !== parseInt(__var_28)), __var_6.ui.updateClanIndicator(), __var_6.ui.showClanModal(), __var_5.close()) : (alert(__var_39.error || 'Failed to accept invite'), __var_27.disabled = !1, __var_27.textContent = 'Accept');
        } catch (__var_38) {
          alert('Failed to accept invite: ' + __var_38.message), __var_27.disabled = !1, __var_27.textContent = 'Accept';
        }
      });
    }), __var_5.element.querySelectorAll('.clan-invite-reject').forEach(__var_27 => {
      __var_27.addEventListener('click', async () => {
        let __var_28 = __var_27.dataset.invite;
        __var_27.disabled = !0, __var_27.textContent = '...';
        try {
          let __var_39 = await (await __var_6.api.makeRequest('/api/clans/reject-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__var_28)
            })
          })).json();
          __var_39.success ? (__var_6.ui.pendingClanInvites = __var_6.ui.pendingClanInvites.filter(__fn_40 => __fn_40.id !== parseInt(__var_28)), __var_6.ui.updateClanIndicator(), __var_27.closest('.clan-invite-item').remove()) : (alert(__var_39.error || 'Failed to reject invite'), __var_27.disabled = !1, __var_27.textContent = 'Reject');
        } catch (__var_38) {
          alert('Failed to reject invite: ' + __var_38.message), __var_27.disabled = !1, __var_27.textContent = 'Reject';
        }
      });
    });
    let __var_11 = __var_5.element.querySelector('#clan-create-btn'),
      __var_29 = __var_5.element.querySelector('#clan-create-name');
    __var_11 && __var_29 && __var_11.addEventListener('click', async () => {
      let __var_27 = __var_29.value.trim();
      if (!__var_27) {
        alert('Please enter a clan name');
        return;
      }
      if (__var_27.length < 3 || __var_27.length > 20) {
        alert('Clan name must be between 3 and 20 characters');
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(__var_27)) {
        alert('Clan name must only contain letters and numbers');
        return;
      }
      __var_11.disabled = !0, __var_11.textContent = 'Creating...';
      try {
        let __var_38 = await (await __var_6.api.makeRequest('/api/clans/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: __var_27
          })
        })).json();
        __var_38.success ? (__var_6.ui.showClanModal(), __var_5.close()) : (alert(__var_38.error || 'Failed to create clan'), __var_11.disabled = !1, __var_11.textContent = 'Create Clan');
      } catch (__var_28) {
        alert('Failed to create clan: ' + __var_28.message), __var_11.disabled = !1, __var_11.textContent = 'Create Clan';
      }
    });
    let __var_26 = __var_5.element.querySelector('#clan-admin-invites-btn');
    __var_26 && __var_26.addEventListener('click', () => {
      __var_5.close(), setTimeout(() => __var_6.ui.showAdminInvitesModal(), 50);
    });
    let __fn_36 = __var_5.element.querySelector('#clan-admin-clans-btn');
    __fn_36 && __fn_36.addEventListener('click', () => {
      __var_5.close(), setTimeout(() => __var_6.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let __var_5 = new __var_12({
      title: 'Admin: All Clan Invites',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __var_9 => {
            __var_9.close(), __var_6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __var_9 => __var_9.close()
        }
      ]
    });
    __var_5.open();
    try {
      let __var_8 = await (await __var_6.api.makeRequest('/api/clans/admin/invites')).json();
      if (__var_8.success)
        if (__var_8.invites.length === 0)
          __var_5.setContent('<p>No pending invites.</p>');
        else {
          let __var_10 = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let __var_11 of __var_8.invites)
            __var_10 += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${ __var_6.ui.escapeHTML(__var_11.domain) }</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${ __var_6.ui.escapeHTML(__var_11.clan_name) }</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${ __var_11.id }">Delete</button>
                        </div>`;
          __var_10 += '</div>', __var_5.setContent(__var_10), __var_5.element.querySelectorAll('.clan-invite-reject').forEach(__var_11 => {
            __var_11.addEventListener('click', async () => {
              let __var_29 = __var_11.dataset.invite;
              __var_11.disabled = !0, __var_11.textContent = '...';
              try {
                let __fn_36 = await (await __var_6.api.makeRequest('/api/clans/admin/delete-invite', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    invite: parseInt(__var_29)
                  })
                })).json();
                __fn_36.success ? __var_11.closest('.clan-invite-item').remove() : (alert(__fn_36.error || 'Failed to delete invite'), __var_11.disabled = !1, __var_11.textContent = 'Delete');
              } catch (__var_26) {
                alert('Failed to delete invite: ' + __var_26.message), __var_11.disabled = !1, __var_11.textContent = 'Delete';
              }
            });
          });
        }
      else
        __var_5.setContent('<p>Failed to load invites: ' + __var_6.ui.escapeHTML(__var_8.error) + '</p>');
    } catch (__var_9) {
      __var_5.setContent('<p>Failed to load invites: ' + __var_6.ui.escapeHTML(__var_9.message) + '</p>');
    }
  },
  showAdminClansModal: async () => {
    let __var_5 = new __var_12({
      title: 'Admin: All Clans',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __var_9 => {
            __var_9.close(), __var_6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __var_9 => __var_9.close()
        }
      ]
    });
    __var_5.open();
    try {
      let __var_8 = await (await __var_6.api.makeRequest('/api/clans/admin/clans')).json();
      if (__var_8.success)
        if (__var_8.clans.length === 0)
          __var_5.setContent('<p>No clans.</p>');
        else {
          let __var_10 = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let __var_11 of __var_8.clans)
            __var_10 += `<div class="clan-member-item">
                            <div>
                                <div><strong>${ __var_6.ui.escapeHTML(__var_11.name) }</strong></div>
                                <div style="font-size: 11px; color: #888;">${ __var_11.member_count }/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${ __var_11.owner_x !== null && __var_11.owner_y !== null ? `<button class="clan-jump-owner" data-x="${ __var_11.owner_x }" data-y="${ __var_11.owner_y }">Jump</button>` : '' }
                                <button class="clan-member-kick" data-clan="${ __var_11.id }">Disband</button>
                            </div>
                        </div>`;
          __var_10 += '</div>', __var_5.setContent(__var_10), __var_5.element.querySelectorAll('.clan-jump-owner').forEach(__var_11 => {
            __var_11.addEventListener('click', () => {
              let __var_29 = parseInt(__var_11.dataset.__var_47),
                __var_26 = parseInt(__var_11.dataset.__var_82);
              __var_6.camera && !isNaN(__var_29) && !isNaN(__var_26) && (__var_6.camera.centerOn(__var_29 * 250 + 250 / 2, __var_26 * 250 + 250 / 2), __var_5.close());
            });
          }), __var_5.element.querySelectorAll('.clan-member-kick').forEach(__var_11 => {
            __var_11.addEventListener('click', async () => {
              let __var_29 = __var_11.dataset.clan;
              if (confirm('Are you sure you want to disband this clan?')) {
                __var_11.disabled = !0, __var_11.textContent = '...';
                try {
                  let __fn_36 = await (await __var_6.api.makeRequest('/api/clans/admin/disband', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(__var_29)
                    })
                  })).json();
                  __fn_36.success ? __var_11.closest('.clan-member-item').remove() : (alert(__fn_36.error || 'Failed to disband clan'), __var_11.disabled = !1, __var_11.textContent = 'Disband');
                } catch (__var_26) {
                  alert('Failed to disband clan: ' + __var_26.message), __var_11.disabled = !1, __var_11.textContent = 'Disband';
                }
              }
            });
          });
        }
      else
        __var_5.setContent('<p>Failed to load clans: ' + __var_6.ui.escapeHTML(__var_8.error) + '</p>');
    } catch (__var_9) {
      __var_5.setContent('<p>Failed to load clans: ' + __var_6.ui.escapeHTML(__var_9.message) + '</p>');
    }
  },
  showFreeModal: __var_5 => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __var_9 = new __var_12({
      title: 'Free Tile',
      content: `
                <p>What would you like to do with the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 })?</p>
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
        text: 'Cancel',
        type: 'cancel',
        id: 'cancel',
        onClick: __var_11 => __var_11.close()
      }]
    });
    __var_9.open();
    let __var_8 = __var_9.element.querySelector('#option-transfer'),
      __var_10 = __var_9.element.querySelector('#option-free');
    __var_8.addEventListener('click', async () => {
      __var_8.disabled = !0, __var_10.disabled = !0, __var_8.innerHTML = '<strong>Loading...</strong>';
      try {
        let __var_29 = await (await __var_6.api.makeRequest('/api/getcode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            __var_47: __var_5.__var_47,
            __var_82: __var_5.__var_82
          })
        })).json();
        if (__var_29.success) {
          __var_9.setContent(`
                        <p>Share this code with another person to let them take your tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __var_6.ui.escapeHTML(__var_29.code) }</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let __var_26 = __var_9.element.querySelector('#copy-code-btn');
          __var_26.addEventListener('click', () => {
            navigator.clipboard.writeText(__var_29.code), __var_26.textContent = 'Copied!', setTimeout(() => {
              __var_26.textContent = 'Copy';
            }, 1500);
          });
        } else
          alert(__var_29.error || 'Failed to get tile code'), __var_8.disabled = !1, __var_10.disabled = !1, __var_8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      } catch (__var_11) {
        console.error(__var_11), alert('Failed to get tile code: ' + __var_11.message), __var_8.disabled = !1, __var_10.disabled = !1, __var_8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      }
    }), __var_10.addEventListener('click', () => {
      __var_9.setContent(`<p>Are you sure you want to free the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 })?</p><p>The tile for <strong>${ __var_6.ui.escapeHTML(__var_5.domain) }</strong> will become available for <strong>anyone</strong> to claim.</p>`), __var_9.buttons = [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __var_29 => {
            __var_29.close(), __var_6.ui.showFreeModal(__var_5);
          }
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_29 => {
            __var_29.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __fn_36 = await (await __var_6.api.makeRequest('/api/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82
                })
              })).json();
              if (__fn_36.success) {
                let __var_27 = __var_6.user.sites.find(__var_28 => __var_28.domain === __var_5.domain);
                __var_27 && (__var_27.tile = null), __var_5.setFree(), __var_5.setActive(!1), __var_29.close(), Q();
              } else
                alert(__fn_36.error || 'Failed to free tile'), __var_29.setButtonLoading('confirm', !1);
            } catch (__var_26) {
              console.error(__var_26), alert('Failed to free tile: ' + __var_26.message), __var_29.setButtonLoading('confirm', !1);
            }
          }
        }
      ];
      let __var_11 = __var_9.element.querySelector('.modal-actions');
      __var_11.innerHTML = '', __var_9._buttonElements.clear();
      for (let __var_29 of __var_9.buttons)
        __var_11.appendChild(__var_9._createButton(__var_29));
    });
  },
  showTakeModal: __var_5 => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __var_9 = __var_6.user.selectedSite;
    if (!__var_9) {
      alert('Please select a site first');
      return;
    }
    let __var_8 = __var_9.domain,
      __var_10 = __var_9.tile ? `<strong>Warning</strong>Your current tile at (${ __var_9.tile.__var_47 }, ${ __var_9.tile.__var_82 }) will be freed and your site will be moved to this new tile.` : null,
      __var_11 = new __var_12({
        title: 'Take Tile',
        content: `
                <p>Enter the code to take the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }) for <strong>${ __var_6.ui.escapeHTML(__var_8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: __var_10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __var_29 => __var_29.close()
          },
          {
            text: 'Take Tile',
            type: 'confirm',
            id: 'confirm',
            onClick: async __var_29 => {
              let __fn_36 = __var_11.element.querySelector('#take-code-input').value.trim();
              if (!__fn_36) {
                alert('Please enter a code');
                return;
              }
              __var_29.setButtonLoading('confirm', !0, 'Taking...');
              try {
                let __var_28 = await (await __var_6.api.makeRequest('/api/take', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __var_47: __var_5.__var_47,
                    __var_82: __var_5.__var_82,
                    code: __fn_36
                  })
                })).json();
                if (__var_28.success) {
                  if (__var_6.user.selectedSite && __var_6.user.selectedSite.tile) {
                    let __var_38 = __var_6.plot.getTile(__var_6.user.selectedSite.tile.__var_47, __var_6.user.selectedSite.tile.__var_82);
                    __var_38 && __var_38.setFree();
                  }
                  __var_6.user.selectedSite && (__var_6.user.selectedSite.tile = {
                    __var_47: __var_5.__var_47,
                    __var_82: __var_5.__var_82,
                    domain: __var_6.user.selectedSite.domain,
                    created_at: Date.now()
                  }), __var_5.setDomain(__var_8), __var_5.setActive(!1), __var_29.close(), Q();
                } else
                  alert(__var_28.error || 'Failed to take tile'), __var_29.setButtonLoading('confirm', !1);
              } catch (__var_27) {
                console.error(__var_27), alert('Failed to take tile: ' + __var_27.message), __var_29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __var_11.open(), setTimeout(() => {
      let __var_29 = __var_11.element.querySelector('#take-code-input');
      __var_29 && __var_29.focus();
    }, 100);
  },
  showAdminFreeModal: __var_5 => {
    new __var_12({
      title: 'Admin: Free Tile',
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 })?</p>
                <p>This will remove <strong>${ __var_6.ui.escapeHTML(__var_5.domain) }</strong> from this tile.</p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_8 => __var_8.close()
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_8 => {
            __var_8.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __var_11 = await (await __var_6.api.makeRequest('/api/admin/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82
                })
              })).json();
              __var_11.success ? (__var_5.setFree(), __var_5.setActive(!1), __var_8.close()) : (alert(__var_11.error || 'Failed to free tile'), __var_8.setButtonLoading('confirm', !1));
            } catch (__var_10) {
              console.error(__var_10), alert('Failed to free tile: ' + __var_10.message), __var_8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminBanModal: __var_5 => {
    new __var_12({
      title: 'Admin: Ban User',
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${ __var_6.ui.escapeHTML(__var_5.domain) }</strong>?</p>
                <p>This will:</p>
                <ul style="margin: 10px 0; padding-left: 20px; color: #555;">
                    <li>Ban the user from creating new tiles</li>
                    <li>Remove <strong>all</strong> of their tiles</li>
                </ul>
            `,
      warning: '<strong>Destructive Action</strong>This action cannot be undone easily!',
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_8 => __var_8.close()
        },
        {
          text: 'Ban User',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_8 => {
            __var_8.setButtonLoading('confirm', !0, 'Banning...');
            try {
              let __var_11 = await (await __var_6.api.makeRequest('/api/admin/ban', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82
                })
              })).json();
              __var_11.success ? (__var_5.setFree(), __var_5.setActive(!1), __var_8.close(), alert('User banned.')) : (alert(__var_11.error || 'Failed to ban user'), __var_8.setButtonLoading('confirm', !1));
            } catch (__var_10) {
              console.error(__var_10), alert('Failed to ban user: ' + __var_10.message), __var_8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockModal: (__var_5, __var_9) => {
    let __var_8 = __var_9 ? 'unlock' : 'lock',
      __var_10 = __var_9 ? 'unlocked' : 'locked';
    new __var_12({
      title: `Admin: ${ __var_9 ? 'Unlock' : 'Lock' } Tile`,
      content: `
                <p>Are you sure you want to <strong>${ __var_8 }</strong> the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 })?</p>
                ${ __var_9 ? '<p>This tile will become available for claiming again.</p>' : '<p>This tile will be reserved and cannot be claimed by regular users.</p>' }
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_29 => __var_29.close()
        },
        {
          text: __var_9 ? 'Unlock Tile' : 'Lock Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_29 => {
            __var_29.setButtonLoading('confirm', !0, __var_9 ? 'Unlocking...' : 'Locking...');
            try {
              let __fn_36 = await (await __var_6.api.makeRequest('/api/admin/lock', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82,
                  lock: !__var_9
                })
              })).json();
              __fn_36.success ? (__var_9 ? delete __var_6.plot.lockCache[__var_5.__var_47 + ',' + __var_5.__var_82] : __var_6.plot.lockCache[__var_5.__var_47 + ',' + __var_5.__var_82] = !0, __var_29.close(), __var_5.setActive(!1), __var_5.setActive(!0)) : (alert(__fn_36.error || `Failed to ${ __var_8 } tile`), __var_29.setButtonLoading('confirm', !1));
            } catch (__var_26) {
              console.error(__var_26), alert(`Failed to ${ __var_8 } tile: ` + __var_26.message), __var_29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockCodeModal: async __var_5 => {
    try {
      let __var_8 = await (await __var_6.api.makeRequest(`/api/admin/lockcode?x=${ __var_5.__var_47 }&y=${ __var_5.__var_82 }`)).json();
      if (__var_8.success) {
        let __var_10 = new __var_12({
          title: 'Lock Code',
          content: `
                        <p>Lock code for tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }):</p>
                        <div class="code-display">
                            <code id="lock-code">${ __var_6.ui.escapeHTML(__var_8.code) }</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __var_29 => __var_29.close()
          }]
        });
        __var_10.open();
        let __var_11 = __var_10.element.querySelector('#copy-lock-code-btn');
        __var_11.addEventListener('click', () => {
          navigator.clipboard.writeText(__var_8.code), __var_11.textContent = 'Copied!', setTimeout(() => {
            __var_11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__var_8.error || 'Failed to get lock code');
    } catch (__var_9) {
      console.error(__var_9), alert('Failed to get lock code: ' + __var_9.message);
    }
  },
  showAdminTileCodeModal: async __var_5 => {
    try {
      let __var_8 = await (await __var_6.api.makeRequest(`/api/admin/tilecode?x=${ __var_5.__var_47 }&y=${ __var_5.__var_82 }`)).json();
      if (__var_8.success) {
        let __var_10 = new __var_12({
          title: 'Tile Secret Code',
          content: `
                        <p>Secret code for tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __var_6.ui.escapeHTML(__var_8.code) }</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __var_29 => __var_29.close()
          }]
        });
        __var_10.open();
        let __var_11 = __var_10.element.querySelector('#copy-tile-code-btn');
        __var_11.addEventListener('click', () => {
          navigator.clipboard.writeText(__var_8.code), __var_11.textContent = 'Copied!', setTimeout(() => {
            __var_11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__var_8.error || 'Failed to get tile code');
    } catch (__var_9) {
      console.error(__var_9), alert('Failed to get tile code: ' + __var_9.message);
    }
  },
  showAdminSwapModal: __var_5 => {
    let __var_9 = new __var_12({
      title: 'Admin: Swap Tiles',
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }):</p>
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
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_8 => __var_8.close()
        },
        {
          text: 'Swap',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_8 => {
            let __var_10 = __var_9.element.querySelector('#swap-x-input'),
              __var_11 = __var_9.element.querySelector('#swap-y-input'),
              __var_29 = parseInt(__var_10.value.trim()),
              __var_26 = parseInt(__var_11.value.trim());
            if (isNaN(__var_29) || isNaN(__var_26)) {
              alert('Please enter valid X and Y coordinates');
              return;
            }
            if (__var_5.__var_47 === __var_29 && __var_5.__var_82 === __var_26) {
              alert('Cannot swap a tile with itself');
              return;
            }
            __var_8.setButtonLoading('confirm', !0, 'Swapping...');
            try {
              let __var_27 = await (await __var_6.api.makeRequest('/api/admin/swap', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  x1: __var_5.__var_47,
                  y1: __var_5.__var_82,
                  x2: __var_29,
                  y2: __var_26
                })
              })).json();
              __var_27.success ? (__var_8.close(), __var_5.setActive(!1), setTimeout(() => {
                let __var_28 = __var_6.plot.getTile(__var_5.__var_47, __var_5.__var_82),
                  __var_38 = __var_6.plot.getTile(__var_29, __var_26);
                __var_28 && (__var_28.setActive(!1), __var_28.fetchContent('/index.html', !0)), __var_38 && (__var_38.setActive(!1), __var_38.fetchContent('/index.html', !0));
              }, 100)) : (alert(__var_27.error || 'Failed to swap tiles'), __var_8.setButtonLoading('confirm', !1));
            } catch (__fn_36) {
              console.error(__fn_36), alert('Failed to swap tiles: ' + __fn_36.message), __var_8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    });
    __var_9.open(), setTimeout(() => {
      let __var_8 = __var_9.element.querySelector('#swap-x-input');
      __var_8 && __var_8.focus();
    }, 100);
  },
  createAdminControl: __var_5 => {
    let __var_9 = __var_6.ui.createElement('div', {
      class: 'tile-admin-panel'
    });
    __var_5.free || (__var_9.appendChild(__var_6.ui.createElement('button', {
      innerText: 'Edit',
      onclick: () => {
        __var_6.ui.showDashboard(__var_5.domain);
      }
    })), __var_9.appendChild(__var_6.ui.createElement('span', {
      class: 'separator'
    })), __var_9.appendChild(__var_6.ui.createElement('button', {
      innerText: 'Free',
      onclick: () => {
        __var_6.ui.showAdminFreeModal(__var_5);
      }
    })), __var_9.appendChild(__var_6.ui.createElement('button', {
      class: 'danger',
      innerText: 'Ban',
      onclick: () => {
        __var_6.ui.showAdminBanModal(__var_5);
      }
    })), __var_9.appendChild(__var_6.ui.createElement('button', {
      innerText: 'Swap',
      onclick: () => {
        __var_6.ui.showAdminSwapModal(__var_5);
      }
    })));
    let __var_8 = __var_6.plot.lockCache[__var_5.__var_47 + ',' + __var_5.__var_82],
      __var_10 = __var_6.ui.createElement('button', {
        innerText: __var_8 ? 'Unlock' : 'Lock',
        onclick: async () => {
          try {
            let __var_29 = await (await __var_6.api.makeRequest(`/api/admin/lockstatus?x=${ __var_5.__var_47 }&y=${ __var_5.__var_82 }`)).json();
            __var_29.success ? __var_6.ui.showAdminLockModal(__var_5, __var_29.locked) : alert(__var_29.error || 'Failed to check lock status');
          } catch (__var_11) {
            console.error(__var_11), alert('Failed to check lock status: ' + __var_11.message);
          }
        }
      });
    if (__var_5.free || __var_9.appendChild(__var_6.ui.createElement('span', {
        class: 'separator'
      })), __var_9.appendChild(__var_10), __var_8) {
      let __var_11 = __var_6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __var_6.ui.showAdminLockCodeModal(__var_5);
        }
      });
      __var_9.appendChild(__var_11);
    }
    if (!__var_5.free) {
      let __var_11 = __var_6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __var_6.ui.showAdminTileCodeModal(__var_5);
        }
      });
      __var_9.appendChild(__var_11);
    }
    return __var_9;
  },
  createTileControl: __var_5 => {
    let __var_9 = __var_6.ui.createElement('div', {
        class: 'tile-info',
        innerHTML: `
                <div class="tile-domain">
                    ${ __var_5.domain ? `<a href="https://${ __var_6.ui.escapeHTML(__var_5.domain) }" target="_blank">${ __var_6.ui.escapeHTML(__var_5.domain) }</a>` : `${ __var_5.locked ? 'Locked tile' : 'Free tile' } ${ __var_5.__var_47 }, ${ __var_5.__var_82 }` }
                </div>
                <div class="tile-controls">
            `
      }),
      __var_8 = __var_9.querySelector('.tile-controls');
    if (__var_5.free)
      __var_6.plot.lockCache[__var_5.__var_47 + ',' + __var_5.__var_82] ? __var_8.appendChild(__var_6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Unlock',
        onclick: () => {
          __var_6.ui.showUnlockModal(__var_5);
        }
      })) : __var_8.appendChild(__var_6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Claim',
        onclick: () => {
          __var_6.ui.showClaimModal(__var_5);
        }
      }));
    else {
      let __var_10 = __var_6?.user?.sites?.find(__var_11 => __var_11.domain === __var_5.domain);
      if (__var_10 && (__var_8.appendChild(__var_6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Edit',
          onclick: () => {
            __var_6.ui.showDashboard(__var_5.domain);
          }
        })), __var_8.appendChild(__var_6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Give',
          onclick: () => {
            __var_6.ui.showFreeModal(__var_5);
          }
        }))), (!__var_10 || __var_6?.user?.selectedSite?.domain !== __var_5.domain && __var_6?.user?.sites?.length >= 2) && __var_8.appendChild(__var_6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Take',
          onclick: () => {
            __var_6.ui.showTakeModal(__var_5);
          }
        })), !__var_10 && __var_6?.user?.selectedSite?.tile) {
        let __var_11 = __var_6.user.selectedSite.tile;
        Math.abs(__var_11.__var_47 - __var_5.__var_47) <= 1 && Math.abs(__var_11.__var_82 - __var_5.__var_82) <= 1 && __var_6.ui.checkAndShowAttackButton(__var_5, __var_8);
      }
    }
    return __var_8.appendChild(__var_6.ui.createElement('button', {
      class: 'btn',
      innerHTML: 'Link',
      onclick: __var_10 => {
        __var_10.target.innerText = 'Copied!', setTimeout(() => {
          __var_10.target.innerText = 'Link';
        }, 500);
        let __var_11 = __var_5.__var_47 * 250 + 250 / 2,
          __var_29 = __var_5.__var_82 * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${ __var_11 },${ __var_29 }`);
      }
    })), __var_8.appendChild(__var_6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '\u27F3',
      onclick: () => {
        __var_5.fetchContent(__var_5.path, !0), __var_5.setActive(!1);
      }
    })), __var_8.appendChild(__var_6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '&times;',
      onclick: () => {
        __var_5.setActive(!1);
      }
    })), __var_9.appendChild(__var_8), __var_9;
  },
  createVoteMenu: __var_5 => {
    if (__var_5.free || !__var_5.domain)
      return null;
    let __var_9 = __var_6.ui.createElement('div', {
        class: 'tile-vote-menu'
      }),
      __var_8 = __var_6.ui.createElement('button', {
        class: 'vote-btn vote-up',
        innerHTML: '\u25B2',
        onclick: () => __var_6.ui.handleVote(__var_5, 1, __var_8, __var_11, __var_10)
      }),
      __var_10 = __var_6.ui.createElement('div', {
        class: 'vote-score',
        innerText: '...'
      }),
      __var_11 = __var_6.ui.createElement('button', {
        class: 'vote-btn vote-down',
        innerHTML: '\u25BC',
        onclick: () => __var_6.ui.handleVote(__var_5, -1, __var_8, __var_11, __var_10)
      });
    return __var_9.appendChild(__var_8), __var_9.appendChild(__var_10), __var_9.appendChild(__var_11), __var_6.ui.fetchVoteData(__var_5, __var_8, __var_11, __var_10), __var_9;
  },
  fetchVoteData: async (__var_5, __var_9, __var_8, __var_10) => {
    try {
      let __var_29 = await (await __var_6.api.makeRequest(`/api/votes/score?domain=${ encodeURIComponent(__var_5.domain) }`)).json();
      if (__var_29.success) {
        let __var_26 = __var_29.score || 0;
        __var_10.textContent = __var_26;
        let __fn_36 = __var_29.myVote || 0;
        __var_9.classList.remove('active'), __var_8.classList.remove('active'), __fn_36 === 1 ? __var_9.classList.add('active') : __fn_36 === -1 && __var_8.classList.add('active');
      } else
        __var_10.textContent = '0';
    } catch (__var_11) {
      console.error('Failed to fetch vote score:', __var_11), __var_10.textContent = '0';
    }
  },
  handleVote: async (__var_5, __var_9, __var_8, __var_10, __var_11) => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __var_29 = __var_8.classList.contains('active'),
      __var_26 = __var_10.classList.contains('active'),
      __fn_36 = __var_9;
    (__var_9 === 1 && __var_29 || __var_9 === -1 && __var_26) && (__fn_36 = 0), __var_8.disabled = !0, __var_10.disabled = !0;
    try {
      let __var_28 = await (await __var_6.api.makeRequest('/api/votes/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: __var_5.domain,
          vote: __fn_36
        })
      })).json();
      if (__var_28.success) {
        let __var_38 = __var_28.score || 0;
        __var_11.textContent = __var_38, __var_8.classList.remove('active'), __var_10.classList.remove('active'), __fn_36 === 1 ? __var_8.classList.add('active') : __fn_36 === -1 && __var_10.classList.add('active');
      } else
        alert(__var_28.error || 'Failed to vote');
    } catch (__var_27) {
      console.error('Failed to vote:', __var_27), alert('Failed to vote: ' + __var_27.message);
    } finally {
      __var_8.disabled = !1, __var_10.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (__var_5, __var_9) => {
    try {
      let __var_10 = await (await __var_6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(__var_5.domain) }`)).json();
      if (__var_10.success && __var_10.clan && __var_10.clan.members && __var_10.clan.members.length >= 3)
        return;
      __var_9.prepend(__var_6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __var_6.ui.showAttackModal(__var_5);
        }
      }));
    } catch (__var_8) {
      console.error('Failed to check clan for attack button:', __var_8), __var_9.prepend(__var_6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __var_6.ui.showAttackModal(__var_5);
        }
      }));
    }
  },
  showAttackModal: async __var_5 => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__var_6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__var_6.user.selectedSite.tile) {
      alert('You must have a tile to attack from');
      return;
    }
    let __var_8 = __var_6.user.selectedSite.domain,
      __var_10 = __var_5.domain,
      __var_11 = 0,
      __var_29 = null,
      __var_26 = null;
    try {
      let __var_38 = await (await __var_6.api.makeRequest(`/api/attack/success-chance?attacked_domain=${ encodeURIComponent(__var_10) }`)).json();
      __var_38.success ? (__var_11 = __var_38.successChance, __var_29 = __var_38.cooldown) : __var_26 = __var_38.error || 'Failed to get attack success chance';
    } catch (__var_28) {
      console.error(__var_28), __var_26 = 'Failed to get attack success chance: ' + __var_28.message;
    }
    if (__var_26) {
      alert(__var_26);
      return;
    }
    if (__var_11 < 1) {
      alert('Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.');
      return;
    }
    let __fn_36 = '';
    if (__var_29 && __var_29.isOnCooldown) {
      let __var_28 = __var_29.hoursRemaining;
      __fn_36 = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${ __var_28 > 1 ? `Approximately ${ __var_28 } hours remaining until full chance.` : 'Less than 1 hour remaining until full chance.' }
                </p>
            `;
    }
    new __var_12({
      title: 'Attack Tile',
      content: `
                <p>
                    Attack the tile at (${ __var_5.__var_47 }, ${ __var_5.__var_82 }) owned by <strong>${ __var_6.ui.escapeHTML(__var_10) }</strong>?<br>
                    Attack success chance: ${ __var_11.toFixed(1) }%
                </p>
                ${ __fn_36 }
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __var_28 => __var_28.close()
        },
        {
          text: 'Attack',
          type: 'confirm',
          id: 'confirm',
          onClick: async __var_28 => {
            __var_28.setButtonLoading('confirm', !0, 'Attacking...');
            try {
              let __var_39 = await (await __var_6.api.makeRequest('/api/attack/perform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __var_47: __var_5.__var_47,
                  __var_82: __var_5.__var_82
                })
              })).json();
              if (__var_39.success) {
                __var_28.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                  let __var_42 = __var_6.plot.getTile(__var_6.user.selectedSite.tile.__var_47, __var_6.user.selectedSite.tile.__var_82);
                  __var_42 && (__var_42.fetchContent('/index.html', !0), __var_42.setActive(!1)), __var_5.fetchContent('/index.html', !0), __var_5.setActive(!1), __var_6.user.selectedSite && (__var_6.user.selectedSite.tile = {
                    __var_47: __var_5.__var_47,
                    __var_82: __var_5.__var_82,
                    domain: __var_8,
                    created_at: Date.now()
                  });
                }, 500), __var_28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __var_42 => __var_42.close()
                }];
                let __fn_40 = __var_28.element.querySelector('.modal-actions');
                __fn_40.innerHTML = '', __var_28._buttonElements.clear();
                for (let __var_42 of __var_28.buttons)
                  __fn_40.appendChild(__var_28._createButton(__var_42));
              } else {
                __var_28.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${ __var_6.ui.escapeHTML(__var_39.error || 'The attack was unsuccessful.') }
                                    </p>
                                `), __var_28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __var_42 => __var_42.close()
                }];
                let __fn_40 = __var_28.element.querySelector('.modal-actions');
                __fn_40.innerHTML = '', __var_28._buttonElements.clear();
                for (let __var_42 of __var_28.buttons)
                  __fn_40.appendChild(__var_28._createButton(__var_42));
              }
            } catch (__var_38) {
              console.error(__var_38), alert('Failed to attack tile: ' + __var_38.message), __var_28.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showEmbedModal: () => {
    if (!__var_6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__var_6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__var_6.user.selectedSite.tile) {
      alert('Your site must have a tile to embed it');
      return;
    }
    let __var_5 = __var_6.user.selectedSite.domain,
      __var_9 = !1,
      __var_8 = __fn_48 => {
        let __var_49 = `/e/${ __var_5 }`;
        return __fn_48 ? `${ __var_49 }?dark=true` : __var_49;
      },
      __var_10 = __fn_48 => `<iframe src="https://webtiles.kicya.net${ __var_8(__fn_48) }" width="250" height="270" frameborder="0"></iframe>`,
      __var_11 = document.createElement('div');
    __var_11.style.cssText = 'display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;';
    let __var_29 = document.createElement('div');
    __var_29.style.cssText = 'min-width: 250px; max-width: 100%;';
    let __var_26 = document.createElement('h4');
    __var_26.textContent = 'Preview', __var_26.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __var_29.appendChild(__var_26);
    let __fn_36 = document.createElement('iframe');
    __fn_36.src = __var_8(__var_9), __fn_36.width = '250', __fn_36.height = '270', __fn_36.style.cssText = 'border: 1px solid #ddd; border-radius: 4px;', __fn_36.setAttribute('frameborder', '0'), __var_29.appendChild(__fn_36);
    let __var_27 = document.createElement('div');
    __var_27.style.cssText = 'flex: 1; min-width: 300px; max-width: 100%;';
    let __var_28 = document.createElement('h4');
    __var_28.textContent = 'Embed Code', __var_28.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __var_27.appendChild(__var_28);
    let __var_38 = document.createElement('div');
    __var_38.style.cssText = 'margin-bottom: 10px; display: flex; align-items: center; gap: 3px;';
    let __var_39 = document.createElement('input');
    __var_39.type = 'checkbox', __var_39.id = 'embed-dark-mode', __var_39.style.cssText = 'cursor: pointer;';
    let __fn_40 = document.createElement('label');
    __fn_40.setAttribute('for', 'embed-dark-mode'), __fn_40.textContent = 'Dark mode', __fn_40.style.cssText = 'cursor: pointer; font-size: 13px; user-select: none;', __var_38.appendChild(__var_39), __var_38.appendChild(__fn_40), __var_29.appendChild(__var_38);
    let __var_42 = document.createElement('textarea');
    __var_42.value = __var_10(__var_9), __var_42.style.cssText = 'width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;', __var_42.readOnly = !0, __var_27.appendChild(__var_42);
    let __fn_43 = document.createElement('button');
    __fn_43.textContent = 'Copy Code', __fn_43.style.cssText = 'margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;', __fn_43.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(__var_42.value), __fn_43.textContent = 'Copied!', setTimeout(() => {
          __fn_43.textContent = 'Copy Code';
        }, 2000);
      } catch {
        __var_42.select(), document.execCommand('copy'), __fn_43.textContent = 'Copied!', setTimeout(() => {
          __fn_43.textContent = 'Copy Code';
        }, 2000);
      }
    }), __var_27.appendChild(__fn_43);
    let __var_44 = document.createElement('div');
    __var_44.style.cssText = 'font-size: 12px; color: #666; margin-top: 10px;', __var_44.innerHTML = 'You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.', __var_27.appendChild(__var_44), __var_39.addEventListener('change', __fn_48 => {
      __var_9 = __fn_48.target.checked, __fn_36.src = __var_8(__var_9), __var_42.value = __var_10(__var_9);
    }), __var_11.appendChild(__var_29), __var_11.appendChild(__var_27);
    let __var_45 = new __var_12({
      title: 'Embed Tile',
      content: __var_11,
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __fn_48 => __fn_48.close()
      }]
    });
    __var_45.open(), __var_45.element && (__var_45.element.style.maxWidth = '700px');
  }
};

function __fn_100() {
  if (!__var_6.user)
    return;
  let __var_5 = __var_6.ui.siteSelector.value,
    __var_9 = __var_6.user.sites.find(__var_10 => __var_10.domain === __var_5);
  __var_5 === 'select' || __var_5 === 'add' || !__var_9 ? (__var_6.ui.siteJumpButton.hidden = !0, __var_6.ui.siteEditButton.hidden = !0, __var_6.ui.siteEmbedButton.hidden = !0, __var_6.ui.siteClanButton.hidden = !0) : (__var_6.ui.siteEditButton.hidden = !1, __var_6.ui.siteJumpButton.hidden = !__var_9.tile, __var_6.ui.siteClanButton.hidden = !__var_9.tile, __var_6.ui.siteEmbedButton.hidden = !__var_9.tile), __var_6.user.selectedSite = __var_9;
  let __var_8 = __var_6?.plot?.activeTile;
  __var_8 && (__var_8.setActive(!1), __var_8.setActive(!0));
}
__var_6.ui.siteSelector && __var_6.ui.siteSelector.addEventListener('change', () => {
  if (!__var_6.user)
    return;
  let __var_5 = __var_6.ui.siteSelector.value;
  __var_5 === 'add' && (location.href = __var_6.user ? 'https://kicya.net/account/sites' : 'https://kicya.net/auth/register');
  let __var_9 = __var_6.user.sites.find(__var_8 => __var_8.domain === __var_5);
  if (__var_9) {
    document.cookie = `site=${ __var_9.domain }; path=/`;
    let __var_8 = document.querySelector('#kicya-site-select-option');
    __var_8 && __var_8.remove(), __var_6.ui.fetchClanInvites();
  }
  __fn_100();
});
__fn_100();
var __var_101 = document.getElementById('dashboard-modal'),
  __var_102 = document.getElementById('dashboard-iframe'),
  __var_103 = document.getElementById('dashboard-modal-close'),
  __var_104 = document.getElementById('dashboard-modal-title'),
  __var_105 = document.getElementById('app');
__var_6.ui.siteEditButton && __var_6.ui.siteEditButton.addEventListener('click', () => {
  !__var_6.user || !__var_6.user.selectedSite || __var_6.ui.showDashboard(__var_6.user.selectedSite.domain);
});
__var_6.ui.siteJumpButton && __var_6.ui.siteJumpButton.addEventListener('click', () => {
  if (!__var_6.user || !__var_6.user.selectedSite || !__var_6.user.selectedSite.tile)
    return;
  let __var_5 = __var_6.user.selectedSite.tile,
    __var_9 = __var_5.__var_47 * 250 + 250 / 2,
    __var_8 = __var_5.__var_82 * 250 + 250 / 2;
  __var_6.camera.centerOn(__var_9, __var_8);
});
__var_6.ui.siteCenterButton && __var_6.ui.siteCenterButton.addEventListener('click', () => {
  __var_6.camera && __var_6.camera.centerOn(100, 100);
});
__var_6.ui.siteClanButton && __var_6.ui.siteClanButton.addEventListener('click', () => {
  __var_6.ui.showClanModal();
});
__var_6.ui.siteEmbedButton && __var_6.ui.siteEmbedButton.addEventListener('click', () => {
  __var_6.ui.showEmbedModal();
});

function __fn_106() {
  __var_101.classList.remove('active'), __var_102.src = '', __var_105 && (__var_105.style.display = ''), __var_6.camera && __var_6.camera.setZoomEnabled(!0);
}
__var_103 && __var_103.addEventListener('click', __fn_106);
__var_6.ui.zoomSlider.addEventListener('input', __var_5 => {
  __var_6.camera.zoomTo(__var_6.camera.width / 2, __var_6.camera.height / 2, +__var_5.target.value);
});
var __var_107 = document.getElementById('kicya-menu-toggle'),
  __var_108 = document.getElementById('kicya-links');
__var_107 && __var_108 && (__var_107.addEventListener('click', function(__var_5) {
  __var_5.stopPropagation(), __var_108.classList.toggle('active');
}), document.addEventListener('click', function(__var_5) {
  !__var_108.contains(__var_5.target) && !__var_107.contains(__var_5.target) && __var_108.classList.remove('active');
}), __var_108.querySelectorAll('a').forEach(function(__var_5) {
  __var_5.addEventListener('click', function() {
    __var_108.classList.remove('active');
  });
}));

function __fn_109() {
  if (!__var_6.user || localStorage.getItem('rules_accepted'))
    return;
  new __var_12({
    title: 'Rules',
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
      text: 'OK',
      type: 'confirm',
      id: 'ok',
      onClick: __var_9 => {
        localStorage.setItem('rules_accepted', '1'), __var_9.close();
      }
    }]
  }).open();
}
__fn_109();
__var_6.user && __var_6.user.selectedSite && __var_6.ui.fetchClanInvites();
var __var_110 = __var_6.ui;
var __var_111 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let __var_9 = __var_6.api.getToken(),
      __var_8 = __var_6.api.getTokenExpiry();
    if (!__var_6.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!__var_9 || __var_8 < Date.now()) && await __var_6.api.showCaptchaModal();
    let __var_10 = 60000,
      __var_11 = Date.now();
    for (; !__var_6.api.getToken() || __var_6.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - __var_11 > __var_10) {
        console.error('[WS] Captcha timeout');
        let __var_29 = document.getElementById('loading-text');
        __var_29 && (__var_29.textContent = 'Verification timeout. Please refresh.');
        return;
      }
      await new Promise(__var_29 => setTimeout(__var_29, 100));
    }
    this.connect();
  }
  connect() {
    let __var_9 = location.protocol === 'https:' ? 'wss:' : 'ws:',
      __var_8 = __var_6.api.getToken() || '';
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${ __var_9 }//${ location.host }/ws?t=${ encodeURIComponent(__var_8) }`), this.ws.binaryType = 'arraybuffer', this.ws.onopen = () => {
      console.log('[WS] Connected'), this.connected = !0, this.consecutiveFailures = 0, this.emit('open');
      for (let __var_10 of this.messageQueue)
        this.ws.send(__var_10);
      this.messageQueue = [];
    }, this.ws.onmessage = __var_10 => {
      if (__var_10.data instanceof ArrayBuffer)
        for (let __var_11 of this.binaryHandlers)
          __var_11(__var_10.data);
      else
        try {
          let __var_11 = JSON.parse(__var_10.data);
          this.emit(__var_11.type, __var_11);
        } catch (__var_11) {
          console.error('[WS] Failed to parse message:', __var_11);
        }
    }, this.ws.onclose = __var_10 => {
      console.log('[WS] Disconnected, reconnecting...', __var_10.code, __var_10.reason);
      let __var_11 = this.connected;
      this.connected = !1, this.emit('close');
      let __var_29 = Date.now() - this.lastConnectionTime;
      !__var_11 && __var_29 < 1000 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = __var_10 => {
      console.error('[WS] Error:', __var_10);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout)
      return;
    let __var_9 = Math.min(3000 * Math.pow(2, this.consecutiveFailures), 30000);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let __var_8 = __var_6.api.getToken(),
        __var_10 = __var_6.api.getTokenExpiry();
      (!__var_8 || __var_10 < Date.now()) && await __var_6.api.showCaptchaModal();
      let __var_11 = 30000,
        __var_29 = Date.now();
      for (; !__var_6.api.getToken() || __var_6.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - __var_29 > __var_11) {
          console.error('[WS] Reconnect captcha timeout');
          return;
        }
        await new Promise(__var_26 => setTimeout(__var_26, 100));
      }
      this.connect();
    }, __var_9);
  }
  on(__var_9, __var_8) {
    this.handlers.has(__var_9) || this.handlers.set(__var_9, []), this.handlers.get(__var_9).push(__var_8);
  }
  off(__var_9, __var_8) {
    if (!this.handlers.has(__var_9))
      return;
    let __var_10 = this.handlers.get(__var_9),
      __var_11 = __var_10.indexOf(__var_8);
    __var_11 !== -1 && __var_10.splice(__var_11, 1);
  }
  onBinary(__var_9) {
    this.binaryHandlers.push(__var_9);
  }
  emit(__var_9, __var_8) {
    if (this.handlers.has(__var_9))
      for (let __var_10 of this.handlers.get(__var_9))
        __var_10(__var_8);
  }
  send(__var_9) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(__var_9) : typeof __var_9 == 'string' && this.messageQueue.push(__var_9);
  }
  sendJSON(__var_9) {
    this.send(JSON.stringify(__var_9));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
__var_6.ws = new __var_111();
var __var_112 = __var_6.ws;
var __var_113 = new Set([
    'aaa',
    'aarp',
    'abb',
    'abbott',
    'abbvie',
    'abc',
    'able',
    'abogado',
    'abudhabi',
    'ac',
    'academy',
    'accenture',
    'accountant',
    'accountants',
    'aco',
    'actor',
    'ad',
    'ads',
    'adult',
    'ae',
    'aeg',
    'aero',
    'aetna',
    'af',
    'afl',
    'africa',
    'ag',
    'agakhan',
    'agency',
    'ai',
    'aig',
    'airbus',
    'airforce',
    'airtel',
    'akdn',
    'al',
    'alibaba',
    'alipay',
    'allfinanz',
    'allstate',
    'ally',
    'alsace',
    'alstom',
    'am',
    'amazon',
    'americanexpress',
    'americanfamily',
    'amex',
    'amfam',
    'amica',
    'amsterdam',
    'analytics',
    'android',
    'anquan',
    'anz',
    'ao',
    'aol',
    'apartments',
    'app',
    'apple',
    'aq',
    'aquarelle',
    'ar',
    'arab',
    'aramco',
    'archi',
    'army',
    'arpa',
    'art',
    'arte',
    'as',
    'asda',
    'asia',
    'associates',
    'at',
    'athleta',
    'attorney',
    'au',
    'auction',
    'audi',
    'audible',
    'audio',
    'auspost',
    'author',
    'auto',
    'autos',
    'aw',
    'aws',
    'ax',
    'axa',
    'az',
    'azure',
    'ba',
    'baby',
    'baidu',
    'banamex',
    'band',
    'bank',
    'bar',
    'barcelona',
    'barclaycard',
    'barclays',
    'barefoot',
    'bargains',
    'baseball',
    'basketball',
    'bauhaus',
    'bayern',
    'bb',
    'bbc',
    'bbt',
    'bbva',
    'bcg',
    'bcn',
    'bd',
    'be',
    'beats',
    'beauty',
    'beer',
    'berlin',
    'best',
    'bestbuy',
    'bet',
    'bf',
    'bg',
    'bh',
    'bharti',
    'bi',
    'bible',
    'bid',
    'bike',
    'bing',
    'bingo',
    'bio',
    'biz',
    'bj',
    'black',
    'blackfriday',
    'blockbuster',
    'blog',
    'bloomberg',
    'blue',
    'bm',
    'bms',
    'bmw',
    'bn',
    'bnpparibas',
    'bo',
    'boats',
    'boehringer',
    'bofa',
    'bom',
    'bond',
    'boo',
    'book',
    'booking',
    'bosch',
    'bostik',
    'boston',
    'bot',
    'boutique',
    'box',
    'br',
    'bradesco',
    'bridgestone',
    'broadway',
    'broker',
    'brother',
    'brussels',
    'bs',
    'bt',
    'build',
    'builders',
    'business',
    'buy',
    'buzz',
    'bv',
    'bw',
    'by',
    'bz',
    'bzh',
    'ca',
    'cab',
    'cafe',
    'cal',
    'call',
    'calvinklein',
    'cam',
    'camera',
    'camp',
    'canon',
    'capetown',
    'capital',
    'capitalone',
    'car',
    'caravan',
    'cards',
    'care',
    'career',
    'careers',
    'cars',
    'casa',
    'case',
    'cash',
    'casino',
    'cat',
    'catering',
    'catholic',
    'cba',
    'cbn',
    'cbre',
    'cc',
    'cd',
    'center',
    'ceo',
    'cern',
    'cf',
    'cfa',
    'cfd',
    'cg',
    'ch',
    'chanel',
    'channel',
    'charity',
    'chase',
    'chat',
    'cheap',
    'chintai',
    'christmas',
    'chrome',
    'church',
    'ci',
    'cipriani',
    'circle',
    'cisco',
    'citadel',
    'citi',
    'citic',
    'city',
    'ck',
    'cl',
    'claims',
    'cleaning',
    'click',
    'clinic',
    'clinique',
    'clothing',
    'cloud',
    'club',
    'clubmed',
    'cm',
    'cn',
    'co',
    'coach',
    'codes',
    'coffee',
    'college',
    'cologne',
    'com',
    'commbank',
    'community',
    'company',
    'compare',
    'computer',
    'comsec',
    'condos',
    'construction',
    'consulting',
    'contact',
    'contractors',
    'cooking',
    'cool',
    'coop',
    'corsica',
    'country',
    'coupon',
    'coupons',
    'courses',
    'cpa',
    'cr',
    'credit',
    'creditcard',
    'creditunion',
    'cricket',
    'crown',
    'crs',
    'cruise',
    'cruises',
    'cu',
    'cuisinella',
    'cv',
    'cw',
    'cx',
    'cy',
    'cymru',
    'cyou',
    'cz',
    'dad',
    'dance',
    'data',
    'date',
    'dating',
    'datsun',
    'day',
    'dclk',
    'dds',
    'de',
    'deal',
    'dealer',
    'deals',
    'degree',
    'delivery',
    'dell',
    'deloitte',
    'delta',
    'democrat',
    'dental',
    'dentist',
    'desi',
    'design',
    'dev',
    'dhl',
    'diamonds',
    'diet',
    'digital',
    'direct',
    'directory',
    'discount',
    'discover',
    'dish',
    'diy',
    'dj',
    'dk',
    'dm',
    'dnp',
    'do',
    'docs',
    'doctor',
    'dog',
    'domains',
    'dot',
    'download',
    'drive',
    'dtv',
    'dubai',
    'dupont',
    'durban',
    'dvag',
    'dvr',
    'dz',
    'earth',
    'eat',
    'ec',
    'eco',
    'edeka',
    'edu',
    'education',
    'ee',
    'eg',
    'email',
    'emerck',
    'energy',
    'engineer',
    'engineering',
    'enterprises',
    'epson',
    'equipment',
    'er',
    'ericsson',
    'erni',
    'es',
    'esq',
    'estate',
    'et',
    'eu',
    'eurovision',
    'eus',
    'events',
    'exchange',
    'expert',
    'exposed',
    'express',
    'extraspace',
    'fage',
    'fail',
    'fairwinds',
    'faith',
    'family',
    'fan',
    'fans',
    'farm',
    'farmers',
    'fashion',
    'fast',
    'fedex',
    'feedback',
    'ferrari',
    'ferrero',
    'fi',
    'fidelity',
    'fido',
    'film',
    'final',
    'finance',
    'financial',
    'fire',
    'firestone',
    'firmdale',
    'fish',
    'fishing',
    'fit',
    'fitness',
    'fj',
    'fk',
    'flickr',
    'flights',
    'flir',
    'florist',
    'flowers',
    'fly',
    'fm',
    'fo',
    'foo',
    'food',
    'football',
    'ford',
    'forex',
    'forsale',
    'forum',
    'foundation',
    'fox',
    'fr',
    'free',
    'fresenius',
    'frl',
    'frogans',
    'frontier',
    'ftr',
    'fujitsu',
    'fun',
    'fund',
    'furniture',
    'futbol',
    'fyi',
    'ga',
    'gal',
    'gallery',
    'gallo',
    'gallup',
    'game',
    'games',
    'gap',
    'garden',
    'gay',
    'gb',
    'gbiz',
    'gd',
    'gdn',
    'ge',
    'gea',
    'gent',
    'genting',
    'george',
    'gf',
    'gg',
    'ggee',
    'gh',
    'gi',
    'gift',
    'gifts',
    'gives',
    'giving',
    'gl',
    'glass',
    'gle',
    'global',
    'globo',
    'gm',
    'gmail',
    'gmbh',
    'gmo',
    'gmx',
    'gn',
    'godaddy',
    'gold',
    'goldpoint',
    'golf',
    'goo',
    'goodyear',
    'goog',
    'google',
    'gop',
    'got',
    'gov',
    'gp',
    'gq',
    'gr',
    'grainger',
    'graphics',
    'gratis',
    'green',
    'gripe',
    'grocery',
    'group',
    'gs',
    'gt',
    'gu',
    'gucci',
    'guge',
    'guide',
    'guitars',
    'guru',
    'gw',
    'gy',
    'hair',
    'hamburg',
    'hangout',
    'haus',
    'hbo',
    'hdfc',
    'hdfcbank',
    'health',
    'healthcare',
    'help',
    'helsinki',
    'here',
    'hermes',
    'hiphop',
    'hisamitsu',
    'hitachi',
    'hiv',
    'hk',
    'hkt',
    'hm',
    'hn',
    'hockey',
    'holdings',
    'holiday',
    'homedepot',
    'homegoods',
    'homes',
    'homesense',
    'honda',
    'horse',
    'hospital',
    'host',
    'hosting',
    'hot',
    'hotels',
    'hotmail',
    'house',
    'how',
    'hr',
    'hsbc',
    'ht',
    'hu',
    'hughes',
    'hyatt',
    'hyundai',
    'ibm',
    'icbc',
    'ice',
    'icu',
    'id',
    'ie',
    'ieee',
    'ifm',
    'ikano',
    'il',
    'im',
    'imamat',
    'imdb',
    'immo',
    'immobilien',
    'in',
    'inc',
    'industries',
    'infiniti',
    'info',
    'ing',
    'ink',
    'institute',
    'insurance',
    'insure',
    'int',
    'international',
    'intuit',
    'investments',
    'io',
    'ipiranga',
    'iq',
    'ir',
    'irish',
    'is',
    'ismaili',
    'ist',
    'istanbul',
    'it',
    'itau',
    'itv',
    'jaguar',
    'java',
    'jcb',
    'je',
    'jeep',
    'jetzt',
    'jewelry',
    'jio',
    'jll',
    'jm',
    'jmp',
    'jnj',
    'jo',
    'jobs',
    'joburg',
    'jot',
    'joy',
    'jp',
    'jpmorgan',
    'jprs',
    'juegos',
    'juniper',
    'kaufen',
    'kddi',
    'ke',
    'kerryhotels',
    'kerryproperties',
    'kfh',
    'kg',
    'kh',
    'ki',
    'kia',
    'kids',
    'kim',
    'kindle',
    'kitchen',
    'kiwi',
    'km',
    'kn',
    'koeln',
    'komatsu',
    'kosher',
    'kp',
    'kpmg',
    'kpn',
    'kr',
    'krd',
    'kred',
    'kuokgroup',
    'kw',
    'ky',
    'kyoto',
    'kz',
    'la',
    'lacaixa',
    'lamborghini',
    'lamer',
    'land',
    'landrover',
    'lanxess',
    'lasalle',
    'lat',
    'latino',
    'latrobe',
    'law',
    'lawyer',
    'lb',
    'lc',
    'lds',
    'lease',
    'leclerc',
    'lefrak',
    'legal',
    'lego',
    'lexus',
    'lgbt',
    'li',
    'lidl',
    'life',
    'lifeinsurance',
    'lifestyle',
    'lighting',
    'like',
    'lilly',
    'limited',
    'limo',
    'lincoln',
    'link',
    'live',
    'living',
    'lk',
    'llc',
    'llp',
    'loan',
    'loans',
    'locker',
    'locus',
    'lol',
    'london',
    'lotte',
    'lotto',
    'love',
    'lpl',
    'lplfinancial',
    'lr',
    'ls',
    'lt',
    'ltd',
    'ltda',
    'lu',
    'lundbeck',
    'luxe',
    'luxury',
    'lv',
    'ly',
    'ma',
    'madrid',
    'maif',
    'maison',
    'makeup',
    'man',
    'management',
    'mango',
    'map',
    'market',
    'marketing',
    'markets',
    'marriott',
    'marshalls',
    'mattel',
    'mba',
    'mc',
    'mckinsey',
    'md',
    'me',
    'med',
    'media',
    'meet',
    'melbourne',
    'meme',
    'memorial',
    'men',
    'menu',
    'merckmsd',
    'mg',
    'mh',
    'miami',
    'microsoft',
    'mil',
    'mini',
    'mint',
    'mit',
    'mitsubishi',
    'mk',
    'ml',
    'mlb',
    'mls',
    'mm',
    'mma',
    'mn',
    'mo',
    'mobi',
    'mobile',
    'moda',
    'moe',
    'moi',
    'mom',
    'monash',
    'money',
    'monster',
    'mormon',
    'mortgage',
    'moscow',
    'moto',
    'motorcycles',
    'mov',
    'movie',
    'mp',
    'mq',
    'mr',
    'ms',
    'msd',
    'mt',
    'mtn',
    'mtr',
    'mu',
    'museum',
    'music',
    'mv',
    'mw',
    'mx',
    'my',
    'mz',
    'na',
    'nab',
    'nagoya',
    'name',
    'navy',
    'nba',
    'nc',
    'ne',
    'nec',
    'net',
    'netbank',
    'netflix',
    'network',
    'neustar',
    'new',
    'news',
    'next',
    'nextdirect',
    'nexus',
    'nf',
    'nfl',
    'ng',
    'ngo',
    'nhk',
    'ni',
    'nico',
    'nike',
    'nikon',
    'ninja',
    'nissan',
    'nissay',
    'nl',
    'no',
    'nokia',
    'norton',
    'now',
    'nowruz',
    'nowtv',
    'np',
    'nr',
    'nra',
    'nrw',
    'ntt',
    'nu',
    'nyc',
    'nz',
    'obi',
    'observer',
    'office',
    'okinawa',
    'olayan',
    'olayangroup',
    'ollo',
    'om',
    'omega',
    'one',
    'ong',
    'onl',
    'online',
    'ooo',
    'open',
    'oracle',
    'orange',
    'org',
    'organic',
    'origins',
    'osaka',
    'otsuka',
    'ott',
    'ovh',
    'pa',
    'page',
    'panasonic',
    'paris',
    'pars',
    'partners',
    'parts',
    'party',
    'pay',
    'pccw',
    'pe',
    'pet',
    'pf',
    'pfizer',
    'pg',
    'ph',
    'pharmacy',
    'phd',
    'philips',
    'phone',
    'photo',
    'photography',
    'photos',
    'physio',
    'pics',
    'pictet',
    'pictures',
    'pid',
    'pin',
    'ping',
    'pink',
    'pioneer',
    'pizza',
    'pk',
    'pl',
    'place',
    'play',
    'playstation',
    'plumbing',
    'plus',
    'pm',
    'pn',
    'pnc',
    'pohl',
    'poker',
    'politie',
    'porn',
    'post',
    'pr',
    'praxi',
    'press',
    'prime',
    'pro',
    'prod',
    'productions',
    'prof',
    'progressive',
    'promo',
    'properties',
    'property',
    'protection',
    'pru',
    'prudential',
    'ps',
    'pt',
    'pub',
    'pw',
    'pwc',
    'py',
    'qa',
    'qpon',
    'quebec',
    'quest',
    'racing',
    'radio',
    're',
    'read',
    'realestate',
    'realtor',
    'realty',
    'recipes',
    'red',
    'redumbrella',
    'rehab',
    'reise',
    'reisen',
    'reit',
    'reliance',
    'ren',
    'rent',
    'rentals',
    'repair',
    'report',
    'republican',
    'rest',
    'restaurant',
    'review',
    'reviews',
    'rexroth',
    'rich',
    'richardli',
    'ricoh',
    'ril',
    'rio',
    'rip',
    'ro',
    'rocks',
    'rodeo',
    'rogers',
    'room',
    'rs',
    'rsvp',
    'ru',
    'rugby',
    'ruhr',
    'run',
    'rw',
    'rwe',
    'ryukyu',
    'sa',
    'saarland',
    'safe',
    'safety',
    'sakura',
    'sale',
    'salon',
    'samsclub',
    'samsung',
    'sandvik',
    'sandvikcoromant',
    'sanofi',
    'sap',
    'sarl',
    'sas',
    'save',
    'saxo',
    'sb',
    'sbi',
    'sbs',
    'sc',
    'scb',
    'schaeffler',
    'schmidt',
    'scholarships',
    'school',
    'schule',
    'schwarz',
    'science',
    'scot',
    'sd',
    'se',
    'search',
    'seat',
    'secure',
    'security',
    'seek',
    'select',
    'sener',
    'services',
    'seven',
    'sew',
    'sex',
    'sexy',
    'sfr',
    'sg',
    'sh',
    'shangrila',
    'sharp',
    'shell',
    'shia',
    'shiksha',
    'shoes',
    'shop',
    'shopping',
    'shouji',
    'show',
    'si',
    'silk',
    'sina',
    'singles',
    'site',
    'sj',
    'sk',
    'ski',
    'skin',
    'sky',
    'skype',
    'sl',
    'sling',
    'sm',
    'smart',
    'smile',
    'sn',
    'sncf',
    'so',
    'soccer',
    'social',
    'softbank',
    'software',
    'sohu',
    'solar',
    'solutions',
    'song',
    'sony',
    'soy',
    'spa',
    'space',
    'sport',
    'spot',
    'sr',
    'srl',
    'ss',
    'st',
    'stada',
    'staples',
    'star',
    'statebank',
    'statefarm',
    'stc',
    'stcgroup',
    'stockholm',
    'storage',
    'store',
    'stream',
    'studio',
    'study',
    'style',
    'su',
    'sucks',
    'supplies',
    'supply',
    'support',
    'surf',
    'surgery',
    'suzuki',
    'sv',
    'swatch',
    'swiss',
    'sx',
    'sy',
    'sydney',
    'systems',
    'sz',
    'tab',
    'taipei',
    'talk',
    'taobao',
    'target',
    'tatamotors',
    'tatar',
    'tattoo',
    'tax',
    'taxi',
    'tc',
    'tci',
    'td',
    'tdk',
    'team',
    'tech',
    'technology',
    'tel',
    'temasek',
    'tennis',
    'teva',
    'tf',
    'tg',
    'th',
    'thd',
    'theater',
    'theatre',
    'tiaa',
    'tickets',
    'tienda',
    'tips',
    'tires',
    'tirol',
    'tj',
    'tjmaxx',
    'tjx',
    'tk',
    'tkmaxx',
    'tl',
    'tm',
    'tmall',
    'tn',
    'to',
    'today',
    'tokyo',
    'tools',
    'top',
    'toray',
    'toshiba',
    'total',
    'tours',
    'town',
    'toyota',
    'toys',
    'tr',
    'trade',
    'trading',
    'training',
    'travel',
    'travelers',
    'travelersinsurance',
    'trust',
    'trv',
    'tt',
    'tube',
    'tui',
    'tunes',
    'tushu',
    'tv',
    'tvs',
    'tw',
    'tz',
    'ua',
    'ubank',
    'ubs',
    'ug',
    'uk',
    'unicom',
    'university',
    'uno',
    'uol',
    'ups',
    'us',
    'uy',
    'uz',
    'va',
    'vacations',
    'vana',
    'vanguard',
    'vc',
    've',
    'vegas',
    'ventures',
    'verisign',
    'versicherung',
    'vet',
    'vg',
    'vi',
    'viajes',
    'video',
    'vig',
    'viking',
    'villas',
    'vin',
    'vip',
    'virgin',
    'visa',
    'vision',
    'viva',
    'vivo',
    'vlaanderen',
    'vn',
    'vodka',
    'volvo',
    'vote',
    'voting',
    'voto',
    'voyage',
    'vu',
    'wales',
    'walmart',
    'walter',
    'wang',
    'wanggou',
    'watch',
    'watches',
    'weather',
    'weatherchannel',
    'webcam',
    'weber',
    'website',
    'wed',
    'wedding',
    'weibo',
    'weir',
    'wf',
    'whoswho',
    'wien',
    'wiki',
    'williamhill',
    'win',
    'windows',
    'wine',
    'winners',
    'wme',
    'wolterskluwer',
    'woodside',
    'work',
    'works',
    'world',
    'wow',
    'ws',
    'wtc',
    'wtf',
    'xbox',
    'xerox',
    'xihuan',
    'xin',
    'xxx',
    'xyz',
    'yachts',
    'yahoo',
    'yamaxun',
    'yandex',
    'ye',
    'yodobashi',
    'yoga',
    'yokohama',
    'you',
    'youtube',
    'yt',
    'yun',
    'za',
    'zappos',
    'zara',
    'zero',
    'zip',
    'zm',
    'zone',
    'zuerich',
    'zw'
  ]),
  __var_114 = 100,
  __var_115 = 3,
  __var_116 = 5000,
  __var_117 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById('chat-container'), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector('#chat-header'), this.body = this.container.querySelector('#chat-body'), this.messagesEl = this.container.querySelector('#chat-messages'), this.input = this.container.querySelector('#chat-input'), this.sendBtn = this.container.querySelector('#chat-send'), this.toggleBtn = this.container.querySelector('#chat-toggle'), this.unreadEl = this.container.querySelector('#chat-unread'), this.header.addEventListener('click', () => this.toggle()), this.container.addEventListener('wheel', __var_9 => {
        __var_9.stopPropagation();
      }), this.messagesEl.addEventListener('click', __var_9 => {
        let __var_8 = __var_9.target.closest('.chat-coord-link');
        if (__var_8) {
          __var_9.preventDefault();
          let __var_10 = parseInt(__var_8.dataset.__var_47),
            __var_11 = parseInt(__var_8.dataset.__var_82),
            __var_26 = 50 / 2;
          !isNaN(__var_10) && !isNaN(__var_11) && __var_6.camera && __var_10 >= -__var_26 && __var_10 <= __var_26 && __var_11 >= -__var_26 && __var_11 <= __var_26 && __var_6.camera.centerOn(__var_10 * 250 + 250 / 2, __var_11 * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let __var_9 = document.createElement('div');
      __var_9.id = 'chat-resize-left', __var_9.className = 'chat-resize-handle', this.container.appendChild(__var_9);
      let __var_8 = document.createElement('div');
      __var_8.id = 'chat-resize-top', __var_8.className = 'chat-resize-handle', this.container.appendChild(__var_8);
      let __var_10 = document.createElement('div');
      __var_10.id = 'chat-resize-corner', __var_10.className = 'chat-resize-handle', this.container.appendChild(__var_10);
      let __var_11 = null,
        __var_29 = 0,
        __var_26 = 0,
        __fn_36 = 0,
        __var_27 = 0,
        __var_28 = (__var_38, __var_39) => {
          this.isOpen && (__var_11 = __var_39, __var_29 = __var_38.clientX, __var_26 = __var_38.clientY, __fn_36 = this.container.offsetWidth, __var_27 = this.container.offsetHeight, document.body.style.userSelect = 'none', __var_39 === 'left' ? document.body.style.cursor = 'ew-resize' : __var_39 === 'top' ? document.body.style.cursor = 'ns-resize' : document.body.style.cursor = 'nwse-resize', __var_38.preventDefault());
        };
      __var_9.addEventListener('mousedown', __var_38 => __var_28(__var_38, 'left')), __var_8.addEventListener('mousedown', __var_38 => __var_28(__var_38, 'top')), __var_10.addEventListener('mousedown', __var_38 => __var_28(__var_38, 'corner')), document.addEventListener('mousemove', __var_38 => {
        if (__var_11) {
          if (__var_11 === 'left' || __var_11 === 'corner') {
            let __var_39 = __var_29 - __var_38.clientX,
              __fn_40 = Math.min(Math.max(__fn_36 + __var_39, 250), 800);
            this.container.style.width = __fn_40 + 'px';
          }
          if (__var_11 === 'top' || __var_11 === 'corner') {
            let __var_39 = __var_26 - __var_38.clientY,
              __fn_40 = Math.min(Math.max(__var_27 + __var_39, 100), 700);
            this.container.style.height = __fn_40 + 'px';
          }
        }
      }), document.addEventListener('mouseup', () => {
        __var_11 && (__var_11 = null, document.body.style.cursor = '', document.body.style.userSelect = '', this.saveSize());
      });
    }
    saveSize() {
      localStorage.setItem('chat-width', this.container.offsetWidth), localStorage.setItem('chat-height', this.container.offsetHeight);
    }
    restoreSize() {
      let __var_9 = localStorage.getItem('chat-width') ?? 525;
      if (__var_9) {
        let __var_10 = parseInt(__var_9, 10);
        __var_10 >= 250 && __var_10 <= 800 && (this.container.style.width = __var_10 + 'px');
      }
      let __var_8 = localStorage.getItem('chat-height') ?? 330;
      if (__var_8) {
        let __var_10 = parseInt(__var_8, 10);
        __var_10 >= 100 && __var_10 <= 700 && (this.container.style.height = __var_10 + 'px');
      }
    }
    createModMenu() {
      this.modMenu = document.createElement('div'), this.modMenu.id = 'chat-mod-menu', this.modMenu.hidden = !0, this.modMenu.innerHTML = `
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
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener('click', __var_9 => {
        let __var_8 = __var_9.target.dataset.action;
        if (!(!__var_8 || !this.modMenuTarget)) {
          if (__var_8 === 'jump')
            this.jumpToUserTile(this.modMenuTarget.nick);
          else if (__var_8 === 'tell') {
            let __var_10 = `/tell ${ this.modMenuTarget.nick } `;
            this.input.value = __var_10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__var_8 === 'reply') {
            let __var_10 = `@${ this.modMenuTarget.nick } `;
            this.input.value = __var_10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__var_8 === 'clear')
            __var_6.ws.sendJSON({
              type: 'mod_action',
              action: 'clear_messages',
              target: this.modMenuTarget
            });
          else if (__var_8 === 'mute') {
            let __var_10 = prompt('Mute duration (e.g. 10m, 1h, 1d):', '1d');
            __var_10 && __var_6.ws.sendJSON({
              type: 'mod_action',
              action: 'mute',
              target: this.modMenuTarget,
              duration: __var_10
            });
          } else
            __var_8 === 'ban' && confirm(`Ban ${ this.modMenuTarget.nick }? This will also delete all their tiles.`) && __var_6.ws.sendJSON({
              type: 'mod_action',
              action: 'ban',
              target: this.modMenuTarget
            });
          this.hideModMenu();
        }
      }), document.addEventListener('click', __var_9 => {
        !this.modMenu.contains(__var_9.target) && !this.userMenu.contains(__var_9.target) && !__var_9.target.classList.contains('chat-nick') && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement('div'), this.userMenu.id = 'chat-user-menu', this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener('click', __var_9 => {
        let __var_8 = __var_9.target.dataset.action;
        if (!(!__var_8 || !this.userMenuTarget)) {
          if (__var_8 === 'jump')
            this.jumpToUserTile(this.userMenuTarget);
          else if (__var_8 === 'tell') {
            let __var_10 = `/tell ${ this.userMenuTarget } `;
            this.input.value = __var_10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__var_8 === 'reply') {
            let __var_10 = `@${ this.userMenuTarget } `;
            this.input.value = __var_10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(__var_9, __var_8, __var_10) {
      this.userMenuTarget = __var_9, this.userMenu.hidden = !1;
      let __var_11 = this.userMenu.getBoundingClientRect(),
        __var_29 = window.innerHeight,
        __var_26 = window.innerWidth;
      __var_10 + __var_11.height > __var_29 && (__var_10 = __var_29 - __var_11.height - 5), __var_8 + __var_11.width > __var_26 && (__var_8 = __var_26 - __var_11.width - 5), this.userMenu.style.left = __var_8 + 'px', this.userMenu.style.top = __var_10 + 'px';
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(__var_9) {
      if (!__var_6.plot?.tileCache)
        return null;
      for (let __var_8 in __var_6.plot.tileCache)
        for (let __var_10 in __var_6.plot.tileCache[__var_8]) {
          let __var_11 = __var_6.plot.tileCache[__var_8][__var_10];
          if ((typeof __var_11 == 'string' ? __var_11 : __var_11?.domain ?? null) === __var_9)
            return {
              __var_47: parseInt(__var_8),
              __var_82: parseInt(__var_10)
            };
        }
      return null;
    }
    findTileByDomain(__var_9) {
      if (!__var_6.plot?.tileCache)
        return null;
      for (let __var_8 in __var_6.plot.tileCache)
        for (let __var_10 in __var_6.plot.tileCache[__var_8]) {
          let __var_11 = __var_6.plot.tileCache[__var_8][__var_10];
          if ((typeof __var_11 == 'string' ? __var_11 : __var_11?.domain ?? null) === __var_9)
            return {
              __var_47: parseInt(__var_8),
              __var_82: parseInt(__var_10)
            };
        }
      return null;
    }
    jumpToUserTile(__var_9) {
      if (!__var_6.camera)
        return;
      let __var_8 = this.findUserTile(__var_9);
      __var_8 && __var_6.camera.centerOn(__var_8.__var_47 * 250 + 250 / 2, __var_8.__var_82 * 250 + 250 / 2);
    }
    jumpToDomain(__var_9) {
      if (!__var_6.camera)
        return !1;
      let __var_8 = this.findTileByDomain(__var_9);
      return __var_8 ? (__var_6.camera.centerOn(__var_8.__var_47 * 250 + 250 / 2, __var_8.__var_82 * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(__var_9, __var_8, __var_10) {
      if (__var_9.admin || __var_9.discord)
        return;
      this.modMenuTarget = __var_9, this.modMenu.querySelector('#mod-menu-user-id').textContent = __var_9.id || '-', this.modMenu.querySelector('#mod-menu-ip').textContent = __var_9.ip || '-', this.modMenu.hidden = !1;
      let __var_11 = this.modMenu.getBoundingClientRect(),
        __var_29 = window.innerHeight,
        __var_26 = window.innerWidth;
      __var_10 + __var_11.height > __var_29 && (__var_10 = __var_29 - __var_11.height - 5), __var_8 + __var_11.width > __var_26 && (__var_8 = __var_26 - __var_11.width - 5), this.modMenu.style.left = __var_8 + 'px', this.modMenu.style.top = __var_10 + 'px';
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let __var_9 = __var_6.ws;
      __var_9.on('chat_history', __var_8 => {
        this.messages = __var_8.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage('Welcome to the chat! The rules are as follows:'), this.showSystemMessage('1. There is zero tolerance for NSFW conversations. Do not discuss it in chat.'), this.showSystemMessage('2. Do not spam the chat.'), this.showSystemMessage('3. Do not troll, be edgy, annoying, or disruptive. Be kind to others.'), this.showSystemMessage('4. Keep conversations in English.'), this.showSystemMessage('Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands.'), this.showedRules = !0);
      }), __var_9.on('message', __var_8 => {
        this.addMessage(__var_8);
      }), __var_9.on('system_message', __var_8 => {
        this.showSystemMessage(__var_8.message);
      }), __var_9.on('chat_cleared', () => {
        this.messages = [], this.messagesEl.innerHTML = '', this.showSystemMessage('Chat has been cleared');
      }), __var_9.on('clear_user_messages', __var_8 => {
        this.messages = this.messages.filter(__var_10 => __var_10.nick !== __var_8.nick), this.renderMessages(), (__var_6.user?.admin || __var_6.user?.moderator) && this.showSystemMessage(`Messages from ${ __var_8.nick } have been cleared`);
      }), __var_9.on('user_muted', __var_8 => {
        this.showSystemMessage(`${ __var_8.nick } has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener('keydown', __var_9 => {
        __var_9.stopPropagation(), __var_9.key === 'Enter' && !__var_9.shiftKey && (__var_9.preventDefault(), this.sendMessage());
      }), this.input.addEventListener('keyup', __var_9 => {
        __var_9.stopPropagation();
      }), this.input.addEventListener('keypress', __var_9 => {
        __var_9.stopPropagation();
      }), this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? '\u2212' : '+', this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = 'auto';
    }
    addMessage(__var_9) {
      __var_9.time = Date.now();
      let __var_8 = __var_6.cursors?.currentNick,
        __var_10 = __var_6.user?.sites?.map(__var_11 => __var_11.domain);
      if (__var_8 && __var_9.message) {
        let __var_11 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          __var_29 = __var_9.message.matchAll(__var_11);
        for (let __var_26 of __var_29)
          if (__var_10.includes(__var_26[1])) {
            __var_9.isPinged = !0;
            try {
              let __fn_36 = new Audio('/s/ping.mp3');
              __fn_36.volume = 0.5, __fn_36.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(__var_9), this.messages.length > __var_114 && this.messages.shift(), this.appendMessageEl(__var_9), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(__var_9) {
      return __var_9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
    escapeURL(__var_9) {
      return __var_9.replaceAll('"', '%22').replaceAll('\'', '%27').replaceAll('`', '%60');
    }
    escapeURLDisplay(__var_9) {
      return __var_9.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    parseMessage(__var_9) {
      let __var_8 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        __var_10 = [];
      __var_9 = __var_9.replace(__var_8, (__var_38, __var_39) => (__var_10.push(__var_39), `<span class="chat-ping">@${ this.escapeHTML(__var_39) }</span>`));
      let __var_11 = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        __var_29 = 250,
        __fn_36 = 50 / 2;
      __var_9 = __var_9.replace(__var_11, (__var_38, __var_39, __fn_40, __var_42) => {
        if (__var_39) {
          let __fn_43 = __var_39.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (__fn_43) {
            let __var_44 = parseInt(__fn_43[1]),
              __var_45 = parseInt(__fn_43[2]),
              __fn_48 = Math.floor(__var_44 / __var_29),
              __var_49 = Math.floor(__var_45 / __var_29);
            if (__fn_48 >= -__fn_36 && __fn_48 <= __fn_36 && __var_49 >= -__fn_36 && __var_49 <= __fn_36)
              return `<a href="#" class="chat-coord-link" data-x="${ __fn_48 }" data-y="${ __var_49 }">${ __fn_48 }, ${ __var_49 }</a>`;
          }
          return `<a href="${ this.escapeURL(__var_39) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(this.escapeURL(__var_39)) }</a>`;
        }
        if (__fn_40 && __var_113.has(__var_42.toLowerCase()) && !__var_10.includes(__fn_40)) {
          let __fn_43 = 'https://' + __fn_40;
          return `<a href="${ this.escapeURL(__fn_43) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(__fn_40) }</a>`;
        }
        return __var_38;
      });
      let __var_27 = /(-?\d+),\s*(-?\d+)/g;
      __var_9 = __var_9.replace(__var_27, (__var_38, __var_39, __fn_40) => {
        let __var_42 = parseInt(__var_39),
          __fn_43 = parseInt(__fn_40);
        return __var_42 >= -__fn_36 && __var_42 <= __fn_36 && __fn_43 >= -__fn_36 && __fn_43 <= __fn_36 ? `<a href="#" class="chat-coord-link" data-x="${ __var_39 }" data-y="${ __fn_40 }">${ __var_38 }</a>` : __var_38;
      });
      let __var_28 = (__var_38, __var_39, __fn_40, __var_42) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${ __var_42 }.${ __var_39 ? 'gif' : 'png' }?v=1" alt=":${ this.escapeHTML(__fn_40) }:" title=":${ this.escapeHTML(__fn_40) }:" width="20">`;
      return __var_9 = __var_9.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, __var_28), __var_9 = __var_9.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, __var_28), __var_9 = __var_9.replace(/\*\*([^*]+)\*\*/g, (__var_38, __var_39) => `<strong>${ __var_39 }</strong>`), __var_9 = __var_9.replace(/\*([^*]+)\*/g, (__var_38, __var_39) => `<em>${ __var_39 }</em>`), __var_9 = __var_9.replace(/~~([^~]+)~~/g, (__var_38, __var_39) => `<s>${ __var_39 }</s>`), __var_9 = __var_9.replace(/__([^_]+)__/g, (__var_38, __var_39) => `<u>${ __var_39 }</u>`), __var_9 = __var_9.replace(/\|\|([^|]+)\|\|/g, (__var_38, __var_39) => `<span class="chat-spoiler">${ __var_39 }</span>`), __var_9;
    }
    appendMessageEl(__var_9) {
      let __var_8 = document.createElement('div');
      __var_8.className = 'chat-message', __var_9.admin && __var_8.classList.add('chat-admin'), __var_9.mod && __var_8.classList.add('chat-mod'), __var_9.discord && __var_8.classList.add('chat-discord'), __var_9.isPinged && __var_8.classList.add('chat-pinged');
      let __var_10 = document.createElement('span');
      __var_10.className = 'chat-nick', __var_10.dataset.nick = __var_9.nick;
      let __var_11 = __var_6.user?.admin || __var_6.user?.moderator;
      __var_9.discord || (__var_10.classList.add('chat-nick-clickable'), __var_10.addEventListener('click', __var_38 => {
        __var_38.stopPropagation(), __var_11 && !__var_9.admin ? this.showModMenu(__var_9, __var_38.clientX, __var_38.clientY) : this.findUserTile(__var_9.nick) && this.showUserMenu(__var_9.nick, __var_38.clientX, __var_38.clientY);
      })), __var_9.admin ? __var_10.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(__var_9.nick) + ': ' : __var_9.mod ? __var_10.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(__var_9.nick) + ': ' : __var_9.discord ? __var_10.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(__var_9.nick) + ': ' : __var_10.textContent = __var_9.nick + ': ';
      let __var_29 = document.createElement('span');
      __var_29.className = 'chat-text', __var_9.admin || __var_9.mod ? __var_29.innerHTML = this.parseMessage(__var_9.message).replace(/\n/g, '<br>') : __var_29.innerHTML = this.parseMessage(this.escapeHTML(__var_9.message)).replace(/\n/g, '<br>');
      let __var_26 = __var_29.querySelectorAll('.emoji');
      for (let __var_38 of __var_26)
        __var_38.addEventListener('error', __var_39 => {
          __var_39.target.remove();
        });
      let __fn_36 = __var_29.querySelectorAll('.chat-spoiler');
      for (let __var_38 of __fn_36)
        __var_38.addEventListener('click', __var_39 => {
          __var_39.target.closest('.chat-spoiler').classList.toggle('chat-spoiler-revealed');
        });
      let __var_27 = document.createElement('span');
      __var_27.className = 'chat-time';
      let __var_28 = new Date(__var_9.time || Date.now());
      for (__var_27.textContent = __var_28.getHours().toString().padStart(2, '0') + ':' + __var_28.getMinutes().toString().padStart(2, '0'), __var_8.appendChild(__var_10), __var_8.appendChild(__var_29), __var_8.appendChild(__var_27), this.messagesEl.appendChild(__var_8); this.messagesEl.children.length > __var_114;)
        this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = '';
      for (let __var_9 of this.messages)
        this.appendMessageEl(__var_9);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(__var_9 = !1) {
      let __var_8 = this.messagesEl;
      (__var_8.scrollHeight - __var_8.scrollTop - __var_8.clientHeight <= 120 || __var_9) && (__var_8.scrollTop = __var_8.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!__var_6.user) {
        this.showSystemMessage('Please login to chat');
        return;
      }
      let __var_9 = this.input.value.trim();
      if (!__var_9 || __var_9.length > 500)
        return;
      let __var_8 = __var_9.split(`
`);
      if (__var_8.length > 5 && (__var_9 = __var_8.slice(0, 5).join(`
`)), __var_9 === '/help') {
        this.showSystemMessage('Available commands:'), this.showSystemMessage('/jump [domain] - Jump to a tile by domain'), this.showSystemMessage('/jump X Y - Jump to coordinates X, Y'), this.showSystemMessage('/tell [domain] [msg] - Send a message to a specific domain'), this.input.value = '';
        return;
      }
      if (__var_9.startsWith('/jump ') || __var_9.startsWith('/tp ')) {
        let __var_10 = __var_9.split(' ').slice(1).join(' ');
        if (__var_10) {
          let __var_11 = __var_10.match(/^(-?\d+)\s+(-?\d+)$/);
          if (__var_11) {
            let __var_29 = parseInt(__var_11[1]),
              __var_26 = parseInt(__var_11[2]),
              __var_27 = 50 / 2;
            !isNaN(__var_29) && !isNaN(__var_26) && __var_6.camera && __var_29 >= -__var_27 && __var_29 <= __var_27 && __var_26 >= -__var_27 && __var_26 <= __var_27 ? (__var_6.camera.centerOn(__var_29 * 250 + 250 / 2, __var_26 * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${ __var_29 }, ${ __var_26 }`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${ __var_27 } and ${ __var_27 }`);
          } else {
            let __var_29 = __var_10;
            this.jumpToDomain(__var_29) ? this.showSystemMessage(`Jumped to ${ __var_29 }`) : this.showSystemMessage(`Tile with domain "${ __var_29 }" not found`);
          }
        } else
          this.showSystemMessage('Usage: /jump [domain] or /jump X Y');
        this.input.value = '';
        return;
      }
      if (!__var_6.cursors?.currentNick) {
        this.showSystemMessage('Select a site to chat');
        return;
      }
      if (!__var_9.startsWith('/')) {
        let __var_10 = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(__var_11 => __var_10 - __var_11 < __var_116), this.messageTimestamps.length >= __var_115)
          return;
        this.messageTimestamps.push(__var_10);
      }
      __var_6.ws.sendJSON({
        type: 'message',
        value: __var_9
      }), this.input.value = '';
    }
    showSystemMessage(__var_9) {
      let __var_8 = document.createElement('div');
      __var_8.className = 'chat-message chat-system', __var_8.innerHTML = this.parseMessage(this.escapeHTML(__var_9)).replace(/\n/g, '<br>'), this.messagesEl.appendChild(__var_8), this.scrollToBottom();
    }
  };
__var_6.chat = new __var_117();
var __var_118 = __var_6.chat;
var __var_119 = document.getElementById('loading-text'),
  __var_120 = 0,
  __var_121 = setInterval(() => {
    __var_119.innerText = `Loading${ '.'.repeat(__var_120++ % 4) }`;
  }, 200),
  __var_122 = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById('plot'), this.worldSize = __var_34, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let __var_9 in this.tiles) {
          let __var_8 = this.tiles[__var_9];
          !__var_8.rendered && Date.now() - __var_8.lastRender > 30000 && delete this.tiles[__var_9];
        }
      }, 10000), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1000 * 60), setInterval(() => this.fetchTiles(), 1000 * 60), this.editorChannel = new BroadcastChannel('editor'), this.editorChannel.onmessage = __var_9 => {
        if (__var_9.data.type === 'saved') {
          let {
            path: __var_8,
            site: __var_10
          } = __var_9.data;
          this.refreshTile(__var_10, __var_8);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      __var_6.ws && (__var_6.ws.on('refresh', __var_9 => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          let __var_8 = null;
          for (let __var_10 in this.tileCache) {
            for (let __var_11 in this.tileCache[__var_10]) {
              let __var_29 = this.tileCache[__var_10][__var_11];
              if ((typeof __var_29 == 'string' ? null : __var_29?.domain ?? null) === __var_9.domain) {
                __var_8 = typeof __var_29 == 'object' && __var_29.updated_at ? __var_29.updated_at : Math.floor(Date.now() / 1000);
                break;
              }
            }
            if (__var_8 !== null)
              break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: 'tile-refresh',
            domain: __var_9.domain,
            lastUpdate: __var_8 || Math.floor(Date.now() / 1000)
          });
        }
        setTimeout(() => {
          this.refreshTile(__var_9.domain, __var_9.path);
        }, 500);
      }), __var_6.ws.on('claim', __var_9 => {
        this.tileCache[__var_9.__var_47] = this.tileCache[__var_9.__var_47] || {}, this.tileCache[__var_9.__var_47][__var_9.__var_82] = typeof __var_9.domain == 'string' ? {
          domain: __var_9.domain,
          updated_at: Math.floor(Date.now() / 1000)
        } : __var_9.domain;
        let __var_8 = this.tiles[`${ __var_9.__var_47 },${ __var_9.__var_82 }`];
        if (__var_8) {
          let __var_10 = typeof this.tileCache[__var_9.__var_47][__var_9.__var_82] == 'string' ? this.tileCache[__var_9.__var_47][__var_9.__var_82] : this.tileCache[__var_9.__var_47][__var_9.__var_82].domain;
          __var_8.setDomain(__var_10);
        }
      }), __var_6.ws.on('free', __var_9 => {
        this.tileCache[__var_9.__var_47] && delete this.tileCache[__var_9.__var_47][__var_9.__var_82];
        let __var_8 = this.tiles[`${ __var_9.__var_47 },${ __var_9.__var_82 }`];
        __var_8 && __var_8.setFree();
      }), __var_6.ws.on('lock', __var_9 => {
        __var_9.locked ? this.lockCache[__var_9.__var_47 + ',' + __var_9.__var_82] = !0 : delete this.lockCache[__var_9.__var_47 + ',' + __var_9.__var_82];
        let __var_8 = this.tiles[`${ __var_9.__var_47 },${ __var_9.__var_82 }`];
        __var_8 && __var_8.setLocked(__var_9.locked);
      }), __var_6.ws.on('user_count', __var_9 => {
        let __var_8 = document.getElementById('user-count');
        __var_8 && (__var_8.textContent = `${ __var_9.count } online`);
      }), __var_6.ws.on('clan_invite', __var_9 => {
        __var_9.invite && (__var_6.ui.pendingClanInvites.find(__var_10 => __var_10.id === __var_9.invite.id) || (__var_6.ui.pendingClanInvites.push({
          id: __var_9.invite.id,
          clan_id: __var_9.invite.clan_id,
          clan_name: __var_9.invite.clan_name
        }), __var_6.ui.updateClanIndicator()));
      }));
    }
    refreshTile(__var_9, __var_8) {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __var_10 = null;
        for (let __var_11 in this.tileCache) {
          for (let __var_29 in this.tileCache[__var_11]) {
            let __var_26 = this.tileCache[__var_11][__var_29];
            if ((typeof __var_26 == 'string' ? null : __var_26?.domain ?? null) === __var_9) {
              __var_10 = typeof __var_26 == 'object' && __var_26.updated_at ? __var_26.updated_at : Math.floor(Date.now() / 1000);
              break;
            }
          }
          if (__var_10 !== null)
            break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: 'tile-refresh',
          domain: __var_9,
          lastUpdate: __var_10 || Math.floor(Date.now() / 1000)
        });
      }
      for (let __var_10 in this.tiles) {
        let __var_11 = this.tiles[__var_10];
        if (__var_11.domain === __var_9 && __var_11.path === __var_8) {
          if (__var_11.active)
            break;
          __var_11.fetchContent(__var_11.path, !0);
          break;
        }
      }
    }
    addTile(__var_9) {
      this.tiles[`${ __var_9.__var_47 },${ __var_9.__var_82 }`] = __var_9;
    }
    getTile(__var_9, __var_8) {
      if (__var_9 > this.worldSize / 2 || __var_9 < -this.worldSize / 2 || __var_8 > this.worldSize / 2 || __var_8 < -this.worldSize / 2)
        return null;
      if (!this.tiles[`${ __var_9 },${ __var_8 }`]) {
        let __var_10 = this.tileCache?.[__var_9]?.[__var_8],
          __var_11 = typeof __var_10 == 'string' ? __var_10 : __var_10?.domain ?? null;
        this.tiles[`${ __var_9 },${ __var_8 }`] = new __var_99({
          __var_47: __var_9,
          __var_82: __var_8,
          domain: __var_11 ?? null
        });
      }
      return this.tiles[`${ __var_9 },${ __var_8 }`];
    }
    removeTile(__var_9) {
      __var_9.unrender(), delete this.tiles[`${ __var_9.__var_47 },${ __var_9.__var_82 }`];
    }
    clear() {
      Object.values(this.tiles).forEach(__var_9 => __var_9.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await __var_6.api.makeRequest('/api/tiles').then(__var_9 => __var_9.json())).tiles, 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __var_9 = {};
        for (let __var_8 in this.tileCache)
          for (let __var_10 in this.tileCache[__var_8]) {
            let __var_11 = this.tileCache[__var_8][__var_10];
            typeof __var_11 == 'object' && __var_11.domain && __var_11.updated_at && (__var_9[__var_11.domain] = __var_11.updated_at.toString());
          }
        Object.keys(__var_9).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: 'tile-updates',
          updates: __var_9
        });
      }
      for (let __var_9 in this.tileCache)
        for (let __var_8 in this.tileCache[__var_9]) {
          let __var_10 = this.tileCache[__var_9][__var_8],
            __var_11 = typeof __var_10 == 'string' ? __var_10 : __var_10?.domain ?? null,
            __var_29 = this.tiles[`${ __var_9 },${ __var_8 }`];
          __var_29 && __var_29.domain !== __var_11 && __var_29.setDomain(__var_11);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let __var_9 = document.getElementById('loading'),
          __var_8 = document.getElementById('app');
        __var_9.hidden = !0, __var_8.hidden = !1, clearInterval(__var_121);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await __var_6.api.makeRequest('/api/locks').then(__var_9 => __var_9.json())).locks;
      for (let __var_9 in this.lockCache) {
        let __var_8 = this.tiles[__var_9];
        __var_8 && __var_8.element && __var_8.setLocked(!0);
      }
    }
  };
__var_6.plot = new __var_122();
var __var_123 = document.getElementById('plot'),
  __var_124 = class {
    constructor() {
      if (this.__var_47 = 0, this.__var_82 = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith('#') && location.hash.includes(','))
        try {
          let [__var_39, __fn_40] = location.hash.slice(1).split(',');
          this.centerOn(parseInt(__var_39), parseInt(__fn_40)), location.hash = '';
        } catch {}
      let __var_9 = 0,
        __var_8 = 0;
      setInterval(() => {
        let __var_39 = this.__var_47 + this.width / 2,
          __fn_40 = this.__var_82 + this.height / 2;
        (__var_39 != __var_9 || __fn_40 != __var_8) && (__var_9 = __var_39, __var_8 = __fn_40);
      }, 1000), window.addEventListener('resize', () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let __var_10 = 0;
      this.zoomEnabled = !0, this.wheelHandler = __var_39 => {
        if (!this.zoomEnabled || __var_39.target.closest('.tile.active'))
          return;
        __var_39.preventDefault();
        let __fn_40 = __var_39.deltaY;
        if (Math.abs(__fn_40) > 1 && Date.now() - __var_10 > 100) {
          let __fn_43 = __var_33.indexOf(this.zoom) + (__fn_40 > 0 ? -1 : 1);
          if (__fn_43 >= 1 && __fn_43 < __var_33.length) {
            let __var_44 = __var_6.mouse?.__var_47 || this.width / 2,
              __var_45 = __var_6.mouse?.__var_82 || this.height / 2;
            this.zoomTo(__var_44, __var_45, __var_33[__fn_43]), __var_10 = Date.now();
          }
        }
      }, window.addEventListener('wheel', this.wheelHandler, {
        passive: !1
      });
      let __var_11 = 0,
        __var_29 = {
          __var_47: 0,
          __var_82: 0
        },
        __var_26 = __var_39 => {
          let __fn_40 = __var_39[0].clientX - __var_39[1].clientX,
            __var_42 = __var_39[0].clientY - __var_39[1].clientY;
          return Math.sqrt(__fn_40 * __fn_40 + __var_42 * __var_42);
        },
        __fn_36 = __var_39 => ({
          __var_47: (__var_39[0].clientX + __var_39[1].clientX) / 2,
          __var_82: (__var_39[0].clientY + __var_39[1].clientY) / 2
        });
      document.addEventListener('touchstart', __var_39 => {
        __var_39.touches.length === 2 && (__var_11 = __var_26(__var_39.touches), __var_29 = __fn_36(__var_39.touches));
      }, {
        passive: !0
      }), document.addEventListener('touchmove', __var_39 => {
        if (this.zoomEnabled && __var_39.touches.length === 2) {
          if (__var_39.target.closest('.tile.active'))
            return;
          let __fn_40 = __var_26(__var_39.touches),
            __var_42 = __fn_36(__var_39.touches);
          if (__var_11 > 0) {
            let __fn_43 = __fn_40 / __var_11,
              __var_44 = __var_33.indexOf(this.zoom);
            __fn_43 > 1.1 && __var_44 < __var_33.length - 1 ? (this.zoomTo(__var_42.__var_47, __var_42.__var_82, __var_33[__var_44 + 1]), __var_11 = __fn_40) : __fn_43 < 0.9 && __var_44 > 1 && (this.zoomTo(__var_42.__var_47, __var_42.__var_82, __var_33[__var_44 - 1]), __var_11 = __fn_40);
          }
          __var_29 = __var_42, __var_39.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener('touchend', __var_39 => {
        __var_39.touches.length < 2 && (__var_11 = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let __var_27 = __var_39 => {
          __var_39.key in this.keysPressed && (__var_39.preventDefault(), this.keysPressed[__var_39.key] = !0);
        },
        __var_28 = __var_39 => {
          __var_39.key in this.keysPressed && (__var_39.preventDefault(), this.keysPressed[__var_39.key] = !1);
        };
      window.addEventListener('keydown', __var_27), window.addEventListener('keyup', __var_28);
      let __var_38 = () => {
        if (!__var_6.plot?.activeTile) {
          let __var_39 = 0,
            __fn_40 = 0;
          this.keysPressed.ArrowLeft && (__var_39 -= this.moveSpeed), this.keysPressed.ArrowRight && (__var_39 += this.moveSpeed), this.keysPressed.ArrowUp && (__fn_40 -= this.moveSpeed), this.keysPressed.ArrowDown && (__fn_40 += this.moveSpeed), (__var_39 !== 0 || __fn_40 !== 0) && this.move(this.__var_47 + __var_39, this.__var_82 + __fn_40);
        }
        requestAnimationFrame(__var_38);
      };
      __var_38();
    }
    move(__var_9, __var_8) {
      this.__var_47 = Math.round(__var_9), this.__var_82 = Math.round(__var_8), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      __var_123.style.transform = `translate3d(${ -this.__var_47 }px, ${ -this.__var_82 }px, 0) scale(${ this.zoom })`;
    }
    zoomTo(__var_9, __var_8, __var_10) {
      let __var_11 = (this.__var_47 + __var_9) / this.zoom,
        __var_29 = (this.__var_82 + __var_8) / this.zoom;
      this.zoom = __var_10, this.__var_47 = __var_11 * this.zoom - __var_9, this.__var_82 = __var_29 * this.zoom - __var_8, __var_6.ui.zoomSlider.value = this.zoom, this.move(this.__var_47, this.__var_82);
    }
    centerOn(__var_9, __var_8) {
        let __var_10 = __var_9 * this.zoom - this.width / 2,
          __var_11 = __var_8 * this.zoom - this.height / 2;
        this.move(__var_10, __var_11);
      }
      * getTilesInView() {
        let __var_9 = __var_99.toTilePosition((this.__var_47 - 250 * this.zoom) / this.zoom, (this.__var_82 - 250 * this.zoom) / this.zoom),
          __var_8 = __var_99.toTilePosition((this.__var_47 + 250 * this.zoom + this.width) / this.zoom, (this.__var_82 + 250 * this.zoom + this.height) / this.zoom);
        for (let __var_10 = __var_9.__var_47; __var_10 < __var_8.__var_47; __var_10++)
          for (let __var_11 = __var_9.__var_82; __var_11 < __var_8.__var_82; __var_11++) {
            let __var_29 = __var_6.plot.getTile(__var_10, __var_11);
            __var_29 && (yield __var_29);
          }
      }
      * getTilesInViewWithBuffer(__var_9 = 500) {
        let __var_8 = __var_99.toTilePosition((this.__var_47 - 250 * this.zoom - __var_9) / this.zoom, (this.__var_82 - 250 * this.zoom - __var_9) / this.zoom),
          __var_10 = __var_99.toTilePosition((this.__var_47 + 250 * this.zoom + this.width + __var_9) / this.zoom, (this.__var_82 + 250 * this.zoom + this.height + __var_9) / this.zoom);
        for (let __var_11 = __var_8.__var_47; __var_11 < __var_10.__var_47; __var_11++)
          for (let __var_29 = __var_8.__var_82; __var_29 < __var_10.__var_82; __var_29++) {
            let __var_26 = __var_6.plot.getTile(__var_11, __var_29);
            __var_26 && (yield __var_26);
          }
      }
    isTileWithinBuffer(__var_9, __var_8 = 500) {
      let __var_10 = __var_9.__var_47 * 250,
        __var_11 = __var_9.__var_82 * 250,
        __var_29 = 250,
        __var_26 = this.__var_47 / this.zoom,
        __fn_36 = (this.__var_47 + this.width) / this.zoom,
        __var_27 = this.__var_82 / this.zoom,
        __var_28 = (this.__var_82 + this.height) / this.zoom,
        __var_38 = __var_10 + __var_29,
        __var_39 = __var_11 + __var_29,
        __fn_40 = __var_8 / this.zoom,
        __var_42 = 0;
      __var_38 < __var_26 ? __var_42 = __var_26 - __var_38 : __var_10 > __fn_36 && (__var_42 = __var_10 - __fn_36);
      let __fn_43 = 0;
      return __var_39 < __var_27 ? __fn_43 = __var_27 - __var_39 : __var_11 > __var_28 && (__fn_43 = __var_11 - __var_28), Math.sqrt(__var_42 * __var_42 + __fn_43 * __fn_43) <= __fn_40;
    }
    renderTilesInView() {
      let __var_9 = new Set(),
        __var_8 = 260;
      for (let __var_10 of this.getTilesInViewWithBuffer(__var_8))
        __var_10.render(), __var_9.add(__var_10);
      if (this.renderedTiles)
        for (let __var_10 of this.renderedTiles)
          __var_9.has(__var_10) || (this.isTileWithinBuffer(__var_10, __var_8) ? __var_9.add(__var_10) : __var_10.unrender());
      this.renderedTiles = __var_9;
    }
    setZoomEnabled(__var_9) {
      this.zoomEnabled = __var_9;
    }
  };
__var_6.camera = new __var_124();
var __var_125 = class {
  constructor() {
    this.__var_47 = 0, this.__var_82 = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let __var_9 = 0,
      __var_8 = 0,
      __var_10 = 0,
      __var_11 = 0,
      __var_29 = 0,
      __var_26 = (__var_28, __var_38, __var_39) => {
        if (!__var_39.closest('#plot') || __var_39.closest('.tile-info, .tile-admin-panel, .tile-vote-menu'))
          return !1;
        let __fn_40 = __var_6.plot.getTile(this.tileX, this.tileY);
        return __var_6.plot.activeTile && __var_6.plot.activeTile.id === __fn_40.id ? !1 : (this.down = !0, __var_10 = __var_28, __var_11 = __var_38, __var_9 = __var_6.camera.__var_47, __var_8 = __var_6.camera.__var_82, __var_29 = Date.now(), !0);
      },
      __fn_36 = () => {
        if (!this.down)
          return;
        this.down = !1;
        let __var_28 = Math.abs(this.__var_47 - __var_10),
          __var_38 = Math.abs(this.__var_82 - __var_11);
        Date.now() - __var_29 < 400 && __var_28 < 10 && __var_38 < 10 && __var_6.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      __var_27 = (__var_28, __var_38) => {
        this.__var_47 = __var_28, this.__var_82 = __var_38;
        let __var_39 = __var_6.camera;
        this.worldX = (__var_39.__var_47 + this.__var_47) / __var_39.zoom, this.worldY = (__var_39.__var_82 + this.__var_82) / __var_39.zoom;
        let __fn_40 = __var_99.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = __fn_40.__var_47, this.tileY = __fn_40.__var_82, __var_6.ui.coords.textContent = `${ this.tileX }, ${ this.tileY }`, document.documentElement.style.setProperty('--coords-width', __var_6.ui.coords.offsetWidth + 'px'), this.down) {
          let __var_42 = this.__var_47 - __var_10,
            __fn_43 = this.__var_82 - __var_11;
          __var_39.move(__var_9 - __var_42, __var_8 - __fn_43);
        }
      };
    document.addEventListener('mousedown', __var_28 => {
      __var_26(__var_28.clientX, __var_28.clientY, __var_28.target) && __var_28.preventDefault();
    }), document.addEventListener('mouseup', __var_28 => {
      __fn_36();
    }), document.addEventListener('mousemove', __var_28 => {
      __var_27(__var_28.clientX, __var_28.clientY);
    }), document.addEventListener('touchstart', __var_28 => {
      if (__var_28.touches.length === 1) {
        let __var_38 = __var_28.touches[0];
        __var_26(__var_38.clientX, __var_38.clientY, __var_38.target);
      }
    }, {
      passive: !0
    }), document.addEventListener('touchend', __var_28 => {
      __fn_36();
    }), document.addEventListener('touchcancel', __var_28 => {
      this.down = !1;
    }), document.addEventListener('touchmove', __var_28 => {
      if (__var_28.touches.length === 1) {
        let __var_38 = __var_28.touches[0];
        __var_27(__var_38.clientX, __var_38.clientY), this.down && __var_38.target.closest('#plot') && !__var_38.target.closest('.tile.active') && __var_28.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
__var_6.mouse = new __var_125();
var __var_126 = document.getElementById('plot'),
  __var_127 = document.getElementById('dashboard-modal'),
  __var_128 = '/s/img/cursor.png',
  __var_129 = 150,
  __var_130 = 50,
  __var_131 = 100,
  __var_132 = 100,
  __var_133 = 150,
  __var_134 = 500,
  __var_135 = 0.6,
  __var_136 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let __var_9 = __var_6.ws;
      __var_9.on('open', () => {
        this.sendNickIfSelected();
      }), __var_9.on('close', () => {
        this.clearAllCursors();
      }), __var_9.on('cursors', __var_8 => {
        for (let __var_10 of __var_8.cursors)
          this.addCursor(__var_10.id, __var_10.nick, __var_10.__var_47, __var_10.__var_82);
      }), __var_9.on('join', __var_8 => {
        this.addCursor(__var_8.id, __var_8.nick, 0, 0);
      }), __var_9.on('leave', __var_8 => {
        this.removeCursor(__var_8.id);
      }), __var_9.onBinary(__var_8 => {
        let __var_10 = new Int32Array(__var_8);
        if (__var_10.length >= 3) {
          let __var_11 = __var_10[0],
            __var_29 = __var_10[1],
            __var_26 = __var_10[2];
          this.updateCursorPosition(__var_11, __var_29, __var_26);
        }
      });
    }
    addCursor(__var_9, __var_8, __var_10, __var_11) {
      if (__var_8 === this.currentNick)
        return;
      if (this.cursors.has(__var_9)) {
        this.updateCursorPosition(__var_9, __var_10, __var_11);
        return;
      }
      this.cursors.set(__var_9, {
        id: __var_9,
        nick: __var_8,
        __var_47: __var_10,
        __var_82: __var_11,
        element: null
      }), this.updateElementPosition(__var_9, __var_10, __var_11);
      let __var_29 = this.cursors.get(__var_9);
      __var_29.element && (__var_29.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(__var_9) {
      let __var_8 = this.cursors.get(__var_9);
      __var_8 && (__var_8.element && __var_8.element.parentNode && __var_8.element.remove(), this.cursors.delete(__var_9));
    }
    updateCursorPosition(__var_9, __var_8, __var_10) {
      let __var_11 = this.cursors.get(__var_9);
      __var_11 && (__var_11.__var_47 = __var_8, __var_11.__var_82 = __var_10, this.updateElementPosition(__var_9, __var_8, __var_10));
    }
    isCursorOnScreen(__var_9, __var_8) {
      let __var_10 = __var_6.camera;
      if (!__var_10)
        return !0;
      let __var_11 = __var_10.__var_47 / __var_10.zoom,
        __var_29 = (__var_10.__var_47 + __var_10.width) / __var_10.zoom,
        __var_26 = __var_10.__var_82 / __var_10.zoom,
        __fn_36 = (__var_10.__var_82 + __var_10.height) / __var_10.zoom;
      return __var_9 >= __var_11 && __var_9 <= __var_29 && __var_8 >= __var_26 && __var_8 <= __fn_36;
    }
    updateElementPosition(__var_9, __var_8, __var_10) {
      let __var_11 = this.cursors.get(__var_9);
      if (!__var_11)
        return;
      let __var_29 = this.isCursorOnScreen(__var_8, __var_10);
      if (__var_8 === 0 && __var_10 === 0 || !__var_29)
        __var_11.element && __var_11.element.parentNode && (__var_11.element.remove(), __var_11.element = null);
      else {
        if (!__var_11.element || !__var_11.element.parentNode) {
          let __var_26 = document.createElement('div');
          __var_26.className = 'cursor-container', __var_26.innerHTML = `
                    <img class="cursor-image" src="${ __var_128 }" alt="cursor" />
                    <div class="cursor-nick">${ this.escapeHTML(__var_11.nick) }</div>
                `, __var_26.style.opacity = this.getCursorOpacityFromCenter(), __var_11.element = __var_26, __var_126.appendChild(__var_26);
        }
        __var_11.element.style.transform = `translate(${ __var_8 }px, ${ __var_10 }px)`, this.updateNickOpacity(__var_11.element, __var_8, __var_10);
      }
    }
    updateNickOpacity(__var_9, __var_8, __var_10) {
      let __var_11 = __var_9.querySelector('.cursor-nick');
      if (!__var_11)
        return;
      let __var_29 = this.mouseWorldX - __var_8,
        __var_26 = this.mouseWorldY - __var_10,
        __fn_36 = Math.sqrt(__var_29 * __var_29 + __var_26 * __var_26),
        __var_27 = Math.max(0, 1 - __fn_36 / __var_129);
      __var_11.style.opacity = __var_27;
    }
    updateAllNickOpacities() {
      for (let __var_9 of this.cursors.values())
        __var_9.element && this.updateNickOpacity(__var_9.element, __var_9.__var_47, __var_9.__var_82);
    }
    getCursorOpacityFromCenter() {
      let __var_9 = this.mouseWorldX - __var_131,
        __var_8 = this.mouseWorldY - __var_132,
        __var_10 = Math.sqrt(__var_9 * __var_9 + __var_8 * __var_8);
      return __var_10 <= __var_133 ? 0 : __var_10 >= __var_134 ? __var_135 : (__var_10 - __var_133) / (__var_134 - __var_133) * __var_135;
    }
    updateAllCursorOpacities() {
      let __var_9 = this.getCursorOpacityFromCenter();
      for (let __var_8 of this.cursors.values())
        __var_8.element && (__var_8.element.style.opacity = __var_9);
    }
    clearAllCursors() {
      for (let __var_9 of this.cursors.values())
        __var_9.element && __var_9.element.parentNode && __var_9.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let __var_9 of this.cursors.values())
        this.updateElementPosition(__var_9.id, __var_9.__var_47, __var_9.__var_82);
    }
    setupMouseTracking() {
      document.addEventListener('mousemove', __var_9 => {
        let __var_8 = __var_6.camera;
        if (!__var_8 || (this.mouseWorldX = Math.round((__var_8.__var_47 + __var_9.clientX) / __var_8.zoom), this.mouseWorldY = Math.round((__var_8.__var_82 + __var_9.clientY) / __var_8.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !__var_6.ws.isConnected) || !this.currentNick || __var_12.activeModal || __var_127?.classList.contains('active') || Date.now() - this.lastPositionSent < 25)
          return;
        let __var_10 = new Int16Array(3);
        __var_10[0] = this.mouseWorldX, __var_10[1] = this.mouseWorldY, __var_10[2] = 0, __var_6.ws.send(__var_10.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let __var_9 = __var_6.ui?.siteSelector;
      __var_9 && __var_9.addEventListener('change', () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener('resize', () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener('mousedown', __var_9 => {
        if (__var_9.button !== 1 || this.getCursorOpacityFromCenter() < 0.05)
          return;
        let __var_10 = this.getClosestCursor();
        __var_10 && __var_10.distance <= __var_130 && (__var_9.preventDefault(), window.open(`https://${ __var_10.cursor.nick }`, '_blank'));
      });
    }
    getClosestCursor() {
      let __var_9 = null,
        __var_8 = 1 / 0;
      for (let __var_10 of this.cursors.values()) {
        let __var_11 = this.mouseWorldX - __var_10.__var_47,
          __var_29 = this.mouseWorldY - __var_10.__var_82,
          __var_26 = Math.sqrt(__var_11 * __var_11 + __var_29 * __var_29);
        __var_26 < __var_8 && (__var_8 = __var_26, __var_9 = __var_10);
      }
      return __var_9 ? {
        cursor: __var_9,
        distance: __var_8
      } : null;
    }
    sendNickIfSelected() {
      if (!__var_6.ws.isConnected)
        return;
      let __var_9 = __var_6.user?.selectedSite;
      if (!__var_9 || !__var_9.domain) {
        this.currentNick = null;
        return;
      }
      let __var_8 = __var_9.domain;
      this.currentNick = __var_8;
      for (let [__var_10, __var_11] of this.cursors.entries())
        __var_11.nick === __var_8 && this.removeCursor(__var_10);
      __var_6.ws.sendJSON({
        type: 'nick',
        value: __var_8
      });
    }
    escapeHTML(__var_9) {
      return __var_9 ? __var_9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }
  },
  __var_137 = __var_136;
if ('serviceWorker' in navigator) {
  let __var_9 = 'sw_version',
    __var_8 = async () => {
      try {
        let __var_11 = await navigator.serviceWorker.register('/sw.js');
        return console.log('[SW] Service Worker registered:', __var_11.scope), __var_11;
      } catch (__var_11) {
        return console.error('[SW] Service Worker registration failed:', __var_11), null;
      }
    };
  (async () => {
    let __var_11 = localStorage.getItem(__var_9),
      __var_29 = '12';
    if (__var_11 !== __var_29) {
      console.log(`[SW] Version mismatch: stored=${ __var_11 }, current=${ __var_29 }`);
      let __var_26 = await navigator.serviceWorker.getRegistrations();
      for (let __var_27 of __var_26)
        await __var_27.unregister(), console.log('[SW] Unregistered old service worker');
      let __fn_36 = await caches.keys();
      await Promise.all(__fn_36.map(__var_27 => {
        if (__var_27.includes('webtiles'))
          return console.log(`[SW] Deleting cache: ${ __var_27 }`), caches.delete(__var_27);
      })), localStorage.setItem(__var_9, __var_29), await __var_8();
    } else
      (await navigator.serviceWorker.getRegistrations()).length === 0 && await __var_8();
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: 'clear-cache'
    });
  });
}
__var_6.cursors = new __var_137();
__var_6.user?.admin && (window.WebTiles = {
  ...__var_6,
  classes: {
    Tile: __var_99,
    Camera: __var_124,
    Plot: __var_122,
    Mouse: __var_125,
    Cursors: __var_137
  }
});
var __var_138 = Date.now();
async function __fn_139() {
  let __var_9 = await (await __var_6.api.makeRequest('/s/dist/buildtime.txt')).text();
  return parseInt(__var_9);
}
__fn_139().then(__var_5 => {
  __var_138 = __var_5;
});
var __var_140 = setInterval(async () => {
  let __var_5 = await __fn_139();
  if (__var_5 !== __var_138) {
    clearInterval(__var_140), __var_138 = __var_5;
    let __var_9 = document.createElement('div');
    __var_9.id = 'update-toast', __var_9.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(__var_9), document.getElementById('refresh-btn').addEventListener('click', () => {
      location.reload();
    });
  }
}, 60000);