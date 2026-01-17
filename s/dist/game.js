/* 9f5b86109cef50b16674d41f09baf0e5fc56536db8c9e2111ef8d4fb524f6719 */
var __0 = Object.defineProperty;
var __1 = (e, t, n) => t in e ? __0(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var __2 = (e, t, n) => __1(e, typeof t != 'symbol' ? t + '' : t, n);
var __3 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  __4 = document.getElementById('user-data');
if (__4)
  try {
    let __5 = JSON.parse(__4.textContent);
    __5 && __5.email_verified && (__3.user = __5);
  } catch (__5) {
    console.error(__5);
  }
var __6 = __3;
var __7 = class __7 {
  static init() {
    __7.container || (__7.container = document.createElement('div'), __7.container.id = 'modal-container', __7.container.className = 'modal-overlay', __7.container.addEventListener('click', t => {
      t.target === __7.container && __7.activeModal && __7.activeModal.close();
    }), document.body.appendChild(__7.container));
  }
  constructor(t = {}) {
    this.title = t.title || '', this.content = t.content || '', this.warning = t.warning || null, this.buttons = t.buttons || [], this.onClose = t.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(t) {
    let __8 = document.createElement('button');
    return __8.className = `modal-btn modal-btn-${ t.type || 'default' }`, __8.textContent = t.text, t.disabled && (__8.disabled = !0), __8.addEventListener('click', async () => {
      t.onClick && await t.onClick(this, __8);
    }), this._buttonElements.set(t.id || t.text, __8), __8;
  }
  _build() {
    let __9 = document.createElement('div');
    if (__9.className = 'modal-content', this.title) {
      let __8 = document.createElement('h3');
      __8.className = 'modal-title', __8.textContent = this.title, __9.appendChild(__8);
    }
    if (this.content) {
      let __8 = document.createElement('div');
      __8.className = 'modal-body', typeof this.content == 'string' ? __8.innerHTML = this.content : this.content instanceof HTMLElement && __8.appendChild(this.content), __9.appendChild(__8);
    }
    if (this._warningEl = document.createElement('div'), this._warningEl.className = 'modal-warning', this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none', __9.appendChild(this._warningEl), this.buttons.length > 0) {
      let __8 = document.createElement('div');
      __8.className = 'modal-actions';
      for (let __10 of this.buttons)
        __8.appendChild(this._createButton(__10));
      __9.appendChild(__8);
    }
    return this.element = __9, __9;
  }
  open() {
    return __7.init(), __7.activeModal && __7.activeModal.close(), this._build(), __7.container.innerHTML = '', __7.container.appendChild(this.element), __7.container.classList.add('active'), __7.activeModal = this, __6.camera && __6.camera.setZoomEnabled(!1), this;
  }
  close() {
    return __7.container && __7.container.classList.remove('active'), __7.activeModal = null, this._buttonElements.clear(), __6.camera && __6.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(__9) {
    let __8 = this.element?.querySelector('.modal-body');
    return __8 && (typeof __9 == 'string' ? __8.innerHTML = __9 : __9 instanceof HTMLElement && (__8.innerHTML = '', __8.appendChild(__9))), this.content = __9, this;
  }
  setWarning(__9) {
    return this._warningEl && (__9 ? (this._warningEl.innerHTML = __9, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none'), this.warning = __9, this;
  }
  getButton(__9) {
    return this._buttonElements.get(__9);
  }
  setButtonLoading(__9, __8, __10) {
    let __11 = this.getButton(__9);
    return __11 ? (__8 ? (__11._originalText = __11._originalText || __11.textContent, __11.textContent = __10 || 'Loading...', __11.disabled = !0) : (__11.textContent = __11._originalText || __11.textContent, __11.disabled = !1), this) : this;
  }
};
__2(__7, 'container', null), __2(__7, 'activeModal', null);
var __12 = __7;

function __13() {
  return document.querySelector('meta[name="turnstile-sitekey"]')?.content || '';
}
var __14 = __13(),
  __15 = localStorage.getItem('captchaToken'),
  __16 = parseInt(localStorage.getItem('captchaExpiresAt') || '0'),
  __17 = null,
  __18 = [],
  __19 = !1,
  __20 = 0,
  __21 = 5000;
__16 < Date.now() && (__15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt'));

function __22() {
  __15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt');
}

function __23(__5, __9) {
  __15 = __5, __16 = __9, localStorage.setItem('captchaToken', __5), localStorage.setItem('captchaExpiresAt', __9);
}

function __24() {
  return __19 ? !0 : window.turnstile ? (__19 = !0, !0) : !1;
}

function __25(__5, __9) {
  if (!__24())
    return console.error('[Captcha] Turnstile not ready'), !1;
  let __8 = __13() || __14 || '';
  if (!__8)
    return !0;
  let __10 = typeof __5 == 'string' ? document.querySelector(__5) : __5;
  if (!__10)
    return console.error('[Captcha] Container not found:', __5), !1;
  __10.innerHTML = '';
  let __11 = window.turnstile;
  return __11.render(__10, {
    sitekey: __8,
    callback: async function(r) {
      let __26 = document.getElementById('loading-text');
      __26 && (__26.textContent = 'Verifying...');
      try {
        let __27 = await (await fetch('/api/captcha/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnstileToken: r
          })
        })).json();
        if (__27.success) {
          if (__23(__27.token, __27.expiresAt), __26 && (__26.textContent = 'Loading...'), __9 && __17) {
            __17.close(), __17 = null;
            let __28 = [...__18];
            __18 = [], __28.forEach(d => d());
          }
        } else
          __26 && (__26.textContent = 'Verification failed. Please try again.'), __11.reset(__10);
      } catch (p) {
        console.error('[Captcha] Verification error:', p), __26 && (__26.textContent = 'Verification failed. Please try again.'), __11.reset(__10);
      }
    },
    'error-callback': function() {
      let __29 = document.getElementById('loading-text');
      __29 && (__29.textContent = 'Captcha failed. Please refresh.');
    },
    'expired-callback': function() {
      __11.reset(__10);
    }
  }), !0;
}

function __30() {
  if (__13())
    return new Promise(__5 => {
      if (Date.now() - __20 < __21) {
        __5();
        return;
      }
      if (__12.activeModal) {
        __18.push(__5);
        return;
      }
      __20 = Date.now(), __18.push(__5);
      let __8 = document.createElement('div');
      __8.id = 'captcha-modal-turnstile', __8.style.display = 'flex', __8.style.justifyContent = 'center', __8.style.padding = '20px';
      let __10 = document.createElement('div'),
        __11 = document.createElement('p');
      if (__11.textContent = 'Please complete the captcha to continue.', __10.appendChild(__11), __10.appendChild(__8), __17 = new __12({
          title: 'Verification Required',
          content: __10,
          buttons: [{
            text: 'Cancel',
            type: 'cancel',
            onClick: __29 => {
              __29.close(), __17 = null, __18 = [];
            }
          }],
          onClose: () => {
            __17 = null;
          }
        }), __17.open(), __24())
        __25(__8, !0);
      else {
        let __29 = setInterval(() => {
          __24() && (clearInterval(__29), __25(__8, !0));
        }, 100);
        setTimeout(() => clearInterval(__29), 10000);
      }
    });
}

function __31() {
  if (__15)
    return;
  let __5 = document.querySelector('#turnstile-container');
  if (__5)
    if (__24())
      __25(__5, !1);
    else {
      let __9 = setInterval(() => {
        __24() && (clearInterval(__9), __15 || __25(__5, !1));
      }, 100);
      setTimeout(() => clearInterval(__9), 10000);
    }
}
window.onTurnstileLoad = function() {
  __19 = !0, __15 || __31();
};
window.turnstile && (__19 = !0, __15 || __31());
__6.api = {
  getToken() {
    return __15;
  },
  getTokenExpiry() {
    return __16;
  },
  clearToken: __22,
  showCaptchaModal: __30,
  renderCaptchaOnLoadingScreen: __31,
  getTurnstileSiteKey: __13,
  async makeRequest(__5, __9 = {}) {
    let __8 = (__9.method || 'GET').toUpperCase();
    __8 !== 'GET' && __15 && (__9.headers = __9.headers || {}, __9.headers['X-Captcha-Token'] = __15);
    let __10 = await fetch(__5, __9);
    if (__10.status === 403) {
      let __11 = __10.clone();
      try {
        if ((await __11.json()).code === 'CAPTCHA_REQUIRED')
          return __22(), await __30(), __8 !== 'GET' && __15 && (__9.headers = __9.headers || {}, __9.headers['X-Captcha-Token'] = __15), fetch(__5, __9);
      } catch {}
    }
    return __10;
  }
};
var __32 = __6.api;
var __33 = [
    0.25,
    0.5,
    0.75,
    1,
    1.5
  ],
  __34 = 50;

function __35(__5, __9, __8) {
  let __10 = new WeakMap(),
    __11 = 2048,
    __29 = 10000,
    __26 = new WeakMap();

  function __36(l) {}

  function __27() {
    __26.clear = new WeakMap();
  }

  function __28(l, m) {
    if (!l)
      return null;
    if (__10.has(l))
      return __10.get(l);
    let __37 = __5.createObject(z);
    return __37.native = l, __37.canvas = m, __10.set(l, __37), __37;
  }
  let __38 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'CanvasGradient', __38);
  let __39 = __5.getProperty(__38, 'prototype');
  __5.setProperty(__39, 'addColorStop', __5.createNativeFunction(function(l, m) {
    this.native.addColorStop(l, m);
  }));

  function __40(l) {
    let __41 = __5.createObject(__38);
    return __41.native = l, __41;
  }
  let __42 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'CanvasPattern', __42);

  function __43(l) {
    let __41 = __5.createObject(__42);
    return __41.native = l, __41;
  }
  let __44 = __5.createNativeFunction(function(l, __41) {
    if (l > __11 || __41 > __11)
      throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
    __6.settings.logCalls && console.log(__8.domain, 'create ImageData', this, l, __41);
    let __37 = new ImageData(l, __41);
    this.native = __37, this.width = l, this.height = __41;
  }, !0);
  __5.setProperty(__9, 'ImageData', __44);
  let __45 = __5.getProperty(__44, 'prototype');
  __5.setProperty(__45, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native.width;
    })
  }), __5.setProperty(__45, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native.height;
    })
  }), __5.setProperty(__45, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      let __46 = this.native.data,
        __41 = __5.createObjectProto(__5.ARRAY_PROTO);
      __5.setProperty(__41, 'length', __46.length);
      let __37 = __5.nativeToPseudo({});
      __5.setProperty(__37, 'length', __46.length), __5.setProperty(__37, 'get', __5.createNativeFunction(function(x) {
        return __46[x];
      })), __5.setProperty(__37, 'set', __5.createNativeFunction(function(x, P) {
        __6.settings.logCalls && console.log(__8.domain, 'setImageData', this, x, P), __46[x] = P;
      }));
      for (let __47 = 0; __47 < Math.min(__46.length, 1000); __47++)
        (P => {
          __5.setProperty(__37, P, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __5.createNativeFunction(function() {
              return __46[P];
            }),
            set: __5.createNativeFunction(function(N) {
              __6.settings.logCalls && console.log(__8.domain, 'setImageData', this, P, N), __46[P] = N;
            })
          });
        })(__47);
      return __37;
    })
  });

  function __48(__46) {
    let __41 = __5.createObject(__44);
    return __41.native = __46, __41;
  }
  let __49 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'TextMetrics', __49);
  let __50 = __5.getProperty(__49, 'prototype'),
    __51 = [
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
  for (let __46 of __51)
    __5.setProperty(__50, __46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return this.native[__46];
      })
    });

  function __52(__46) {
    let __41 = __5.createObject(__49);
    return __41.native = __46, __41;
  }
  let __53 = __5.createNativeFunction(function(__46) {
    __46 && __46.native ? this.native = new Path2D(__46.native) : typeof __46 == 'string' ? this.native = new Path2D(__46) : this.native = new Path2D();
  }, !0);
  __5.setProperty(__9, 'Path2D', __53);
  let __54 = __5.getProperty(__53, 'prototype'),
    __55 = {
      addPath: function(__46, __41) {
        __46?.native && this.native.addPath(__46.native, __41);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__46, __41) {
        this.native.moveTo(__46, __41);
      },
      lineTo: function(__46, __41) {
        this.native.lineTo(__46, __41);
      },
      bezierCurveTo: function(__46, __41, __37, __47, P, N) {
        this.native.bezierCurveTo(__46, __41, __37, __47, P, N);
      },
      quadraticCurveTo: function(__46, __41, __37, __47) {
        this.native.quadraticCurveTo(__46, __41, __37, __47);
      },
      arc: function(__46, __41, __37, __47, P, N) {
        this.native.arc(__46, __41, __37, __47, P, N);
      },
      arcTo: function(__46, __41, __37, __47, P) {
        this.native.arcTo(__46, __41, __37, __47, P);
      },
      ellipse: function(__46, __41, __37, __47, P, N, D, q) {
        this.native.ellipse(__46, __41, __37, __47, P, N, D, q);
      },
      rect: function(__46, __41, __37, __47) {
        this.native.rect(__46, __41, __37, __47);
      },
      roundRect: function(__46, __41, __37, __47, P) {
        this.native.roundRect(__46, __41, __37, __47, P);
      }
    };
  for (let [__46, __41] of Object.entries(__55))
    __5.setProperty(__54, __46, __5.createNativeFunction(__41));
  let __56 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'CanvasRenderingContext2D', __56);
  let __57 = __5.getProperty(__56, 'prototype'),
    __58 = [
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
  for (let __46 of __58)
    __5.setProperty(__57, __46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return this.native[__46];
      }),
      set: __5.createNativeFunction(function(__41) {
        __6.settings.logCalls && console.log(__8.domain, 'context set ' + __46, this, __41), this.native[__46] = __41;
      })
    });
  for (let __46 of [
      'fillStyle',
      'strokeStyle'
    ])
    __5.setProperty(__57, __46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        let __41 = this.native[__46];
        return __41;
      }),
      set: __5.createNativeFunction(function(__41) {
        __41?.native ? this.native[__46] = __41.native : this.native[__46] = __41;
      })
    });
  __5.setProperty(__57, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __59 = {
    clearRect: function(__46, __41, __37, __47) {
      this.native, this.native.clearRect(__46, __41, __37, __47);
    },
    fillRect: function(__46, __41, __37, __47) {
      this.native, this.native.fillRect(__46, __41, __37, __47);
    },
    strokeRect: function(__46, __41, __37, __47) {
      this.native, this.native.strokeRect(__46, __41, __37, __47);
    },
    fillText: function(__46, __41, __37, __47) {
      this.native, __47 !== void 0 ? this.native.fillText(String(__46).slice(0, 1000), __41, __37, __47) : this.native.fillText(String(__46).slice(0, 1000), __41, __37);
    },
    strokeText: function(__46, __41, __37, __47) {
      this.native, __47 !== void 0 ? this.native.strokeText(String(__46).slice(0, 1000), __41, __37, __47) : this.native.strokeText(String(__46).slice(0, 1000), __41, __37);
    },
    measureText: function(__46) {
      return __52(this.native.measureText(String(__46).slice(0, 1000)));
    },
    getLineDash: function() {
      return __5.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__46) {
      let __41 = __5.pseudoToNative(__46);
      this.native.setLineDash(__41);
    },
    createLinearGradient: function(__46, __41, __37, __47) {
      return __40(this.native.createLinearGradient(__46, __41, __37, __47));
    },
    createRadialGradient: function(__46, __41, __37, __47, P, N) {
      return __40(this.native.createRadialGradient(__46, __41, __37, __47, P, N));
    },
    createConicGradient: function(__46, __41, __37) {
      return __40(this.native.createConicGradient(__46, __41, __37));
    },
    createPattern: function(__46, __41) {
      let __37 = __46?.native || __46;
      if (!__37)
        return null;
      let __47 = this.native.createPattern(__37, __41);
      return __47 ? __43(__47) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__46, __41) {
      this.native.moveTo(__46, __41);
    },
    lineTo: function(__46, __41) {
      this.native.lineTo(__46, __41);
    },
    bezierCurveTo: function(__46, __41, __37, __47, P, N) {
      this.native.bezierCurveTo(__46, __41, __37, __47, P, N);
    },
    quadraticCurveTo: function(__46, __41, __37, __47) {
      this.native.quadraticCurveTo(__46, __41, __37, __47);
    },
    arc: function(__46, __41, __37, __47, P, N) {
      this.native.arc(__46, __41, __37, __47, P, N);
    },
    arcTo: function(__46, __41, __37, __47, P) {
      this.native.arcTo(__46, __41, __37, __47, P);
    },
    ellipse: function(__46, __41, __37, __47, P, N, D, q) {
      this.native.ellipse(__46, __41, __37, __47, P, N, D, q);
    },
    rect: function(__46, __41, __37, __47) {
      this.native.rect(__46, __41, __37, __47);
    },
    roundRect: function(__46, __41, __37, __47, P) {
      let __60 = __5.pseudoToNative(P);
      this.native.roundRect(__46, __41, __37, __47, __60);
    },
    fill: function(__46, __41) {
      this.native, __46?.native ? this.native.fill(__46.native, __41) : this.native.fill(__46);
    },
    stroke: function(__46) {
      this.native, __46?.native ? this.native.stroke(__46.native) : this.native.stroke();
    },
    clip: function(__46, __41) {
      __46?.native ? this.native.clip(__46.native, __41) : this.native.clip(__46);
    },
    isPointInPath: function(__46, __41, __37, __47) {
      return __46?.native ? this.native.isPointInPath(__46.native, __41, __37, __47) : this.native.isPointInPath(__46, __41, __37);
    },
    isPointInStroke: function(__46, __41, __37) {
      return __46?.native ? this.native.isPointInStroke(__46.native, __41, __37) : this.native.isPointInStroke(__46, __41);
    },
    getTransform: function() {
      let __46 = this.native.getTransform();
      return __5.nativeToPseudo({
        a: __46.a,
        __40: __46.__40,
        __26: __46.__26,
        __38: __46.__38,
        __5: __46.__5,
        __44: __46.__44
      });
    },
    rotate: function(__46) {
      this.native.rotate(__46);
    },
    scale: function(__46, __41) {
      this.native.scale(__46, __41);
    },
    translate: function(__46, __41) {
      this.native.translate(__46, __41);
    },
    transform: function(__46, __41, __37, __47, P, __60) {
      this.native.transform(__46, __41, __37, __47, P, __60);
    },
    setTransform: function(__46, __41, __37, __47, P, __60) {
      if (typeof __46 == 'object' && __46 !== null) {
        let __61 = __5.pseudoToNative(__46);
        this.native.setTransform(__61);
      } else
        this.native.setTransform(__46, __41, __37, __47, P, __60);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__46, __41, __37, __47, P, __60, __61, q, ie) {
      this.native;
      let __62 = __46?.native || __46;
      __62 && (q !== void 0 ? this.native.drawImage(__62, __41, __37, __47, P, __60, __61, q, ie) : __47 !== void 0 ? this.native.drawImage(__62, __41, __37, __47, P) : this.native.drawImage(__62, __41, __37));
    },
    createImageData: function(__46, __41) {
      if (__46?.native)
        return __48(this.native.createImageData(__46.native));
      if (__46 > __11 || __41 > __11)
        throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
      return __48(this.native.createImageData(__46, __41));
    },
    getImageData: function(__46, __41, __37, __47) {
      if (__37 > __11 || __47 > __11)
        throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
      return __48(this.native.getImageData(__46, __41, __37, __47));
    },
    putImageData: function(__46, __41, __37, __47, P, __60, __61) {
      this.native, __46?.native && (__47 !== void 0 ? this.native.putImageData(__46.native, __41, __37, __47, P, __60, __61) : this.native.putImageData(__46.native, __41, __37));
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
  for (let [__46, __41] of Object.entries(__59))
    __5.setProperty(__57, __46, __5.createNativeFunction(__41));
  return {
    extendElement: function(__46, __41) {
      __5.setProperty(__46, 'getContext', __5.createNativeFunction(function(__37, __47) {
        __6.settings.logCalls && console.log(__8.domain, 'getContext', this, __37, __47);
        let __63 = this.native;
        if (__63.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__63.width > __11 && (__63.width = __11), __63.height > __11 && (__63.height = __11), __37 === '2d') {
          let __60 = __63.getContext('2d', __47 ? __5.pseudoToNative(__47) : void 0);
          return __28(__60, this);
        }
        throw new Error(`Context type "${ __37 }" is not supported`);
      })), __5.setProperty(__46, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __5.createNativeFunction(function(__37) {
          __6.settings.logCalls && console.log(__8.domain, 'set width', this, __37), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__37, __11));
        })
      }), __5.setProperty(__46, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __5.createNativeFunction(function(__37) {
          __6.settings.logCalls && console.log(__8.domain, 'set height', this, __37), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__37, __11));
        })
      }), __5.setProperty(__46, 'toDataURL', __5.createNativeFunction(function(__37, __47) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __6.settings.logCalls && console.log(__8.domain, 'toDataURL', this, __37, __47), this.native.toDataURL(__37, __47);
      }));
    },
    resetDrawCounts: __27,
    contextToPseudo: __28
  };
}

function __64(__5, __9, __8) {
  let __26 = 0,
    __36 = window.location.origin;

  function __27(__44) {
    if (typeof __44 != 'string' || __44.startsWith('/') || __44.startsWith('./') || __44.startsWith('../') || !__44.startsWith('http://') && !__44.startsWith('https://'))
      return !1;
    try {
      let __45 = new URL(__44);
      if (__45.origin === __36 || __45.hostname === 'kicya.net' || __45.hostname.endsWith('.kicya.net') || __45.hostname === 'nekoweb.org')
        return !1;
      let __48 = __45.hostname.toLowerCase();
      return !(__48 === 'localhost' || __48 === '127.0.0.1' || __48 === '0.0.0.0' || __48.startsWith('192.168.') || __48.startsWith('10.') || __48.startsWith('172.16.') || __48.startsWith('172.17.') || __48.startsWith('172.18.') || __48.startsWith('172.19.') || __48.startsWith('172.2') || __48.startsWith('172.30.') || __48.startsWith('172.31.') || __48 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __28 = 0,
    __38 = __5.nativeToPseudo({});
  __5.setProperty(__9, '__xhrCallbacks', __38);

  function __39(__44, ...__45) {
    if (!__44 || typeof __44 != 'object')
      return;
    let __48 = __28++;
    __5.setProperty(__38, 'fn' + __48, __44);
    let __49 = __45.map((__51, __52) => {
        let __53 = 'arg' + __48 + '_' + __52;
        return __5.setProperty(__38, __53, __51), __53;
      }),
      __50 = __49.map(__51 => `__xhrCallbacks.${ __51 }`).join(',');
    __5.appendCode(`__xhrCallbacks.fn${ __48 }(${ __50 }); delete __xhrCallbacks.fn${ __48 }; ${ __49.map(__51 => `delete __xhrCallbacks.${ __51 }`).join('; ') };`);
  }
  let __40 = __5.createNativeFunction(function() {
    __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __45 = this;
    this.native.onreadystatechange = function() {
      __5.setProperty(__45, 'readyState', __45.native.readyState), __45.native.readyState === 4 && (__5.setProperty(__45, 'status', __45.native.status), __5.setProperty(__45, 'statusText', __45.native.statusText), __5.setProperty(__45, 'responseText', __45.native.responseText?.slice(0, 5242880) || ''), __5.setProperty(__45, 'responseURL', __45.native.responseURL), __26 = Math.max(0, __26 - 1)), __45._eventHandlers.onreadystatechange && __39(__45._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __45._eventHandlers.onload && __39(__45._eventHandlers.onload);
    }, this.native.onerror = function() {
      __26 = Math.max(0, __26 - 1), __45._eventHandlers.onerror && __39(__45._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __26 = Math.max(0, __26 - 1), __45._eventHandlers.ontimeout && __39(__45._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __26 = Math.max(0, __26 - 1), __45._eventHandlers.onabort && __39(__45._eventHandlers.onabort);
    }, this.native.onprogress = function(__48) {
      if (__45._eventHandlers.onprogress) {
        let __49 = __5.nativeToPseudo({
          loaded: __48.loaded,
          total: __48.total,
          lengthComputable: __48.lengthComputable
        });
        __39(__45._eventHandlers.onprogress, __49);
      }
    }, this.native.onloadstart = function() {
      __45._eventHandlers.onloadstart && __39(__45._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __45._eventHandlers.onloadend && __39(__45._eventHandlers.onloadend);
    }, __5.setProperty(this, 'readyState', 0), __5.setProperty(this, 'status', 0), __5.setProperty(this, 'statusText', ''), __5.setProperty(this, 'responseText', ''), __5.setProperty(this, 'responseURL', '');
  }, !0);
  __5.setProperty(__9, 'XMLHttpRequest', __40);
  let __42 = __5.getProperty(__40, 'prototype');
  __5.setProperty(__40, 'UNSENT', 0), __5.setProperty(__40, 'OPENED', 1), __5.setProperty(__40, 'HEADERS_RECEIVED', 2), __5.setProperty(__40, 'LOADING', 3), __5.setProperty(__40, 'DONE', 4), __5.setProperty(__42, 'UNSENT', 0), __5.setProperty(__42, 'OPENED', 1), __5.setProperty(__42, 'HEADERS_RECEIVED', 2), __5.setProperty(__42, 'LOADING', 3), __5.setProperty(__42, 'DONE', 4);
  let __43 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __44 of __43)
    __5.setProperty(__42, __44, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return this._eventHandlers[__44] || null;
      }),
      set: __5.createNativeFunction(function(__45) {
        __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest set ' + __44, this, __45), this._eventHandlers[__44] = __45;
      })
    });
  __5.setProperty(__42, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __5.createNativeFunction(function(__44) {
      this.native.timeout = Math.min(__44, 30000);
    })
  }), __5.setProperty(__42, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __5.createNativeFunction(function(__44) {
      this.native.withCredentials = !1;
    })
  }), __5.setProperty(__42, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __5.createNativeFunction(function(__44) {
      (__44 === '' || __44 === 'text' || __44 === 'json') && (this.native.responseType = __44);
    })
  }), __5.setProperty(__42, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      let __44 = this.native.response;
      return this.native.responseType === 'json' ? __5.nativeToPseudo(__44) : typeof __44 == 'string' ? __44.slice(0, 5242880) : __44;
    })
  }), __5.setProperty(__42, 'open', __5.createNativeFunction(function(__44, __45, __48, __49, __50) {
    if (!__27(__45))
      throw new Error(`XHR request blocked: URL "${ __45 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __51 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__44 = String(__44).toUpperCase(), !__51.includes(__44))
      throw new Error(`HTTP method "${ __44 }" is not allowed`);
    __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest open', this, __44, __45, __48, __49, __50), this._method = __44, this._url = __45, this._async = __48 !== !1, this.native.open(__44, __45, this._async), this.native.timeout = 30000, __5.setProperty(this, 'readyState', this.native.readyState);
  })), __5.setProperty(__42, 'setRequestHeader', __5.createNativeFunction(function(__44, __45) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__44.toLowerCase()))
      throw new Error(`Setting header "${ __44 }" is not allowed`);
    __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest setRequestHeader', this, __44, __45), this._headers[__44] = __45, this.native.setRequestHeader(__44, __45);
  })), __5.setProperty(__42, 'send', __5.createNativeFunction(function(__44) {
    if (__26 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest send', this, __44), __26++;
    let __45 = null;
    __44 != null && (typeof __44 == 'string' ? __45 = __44.slice(0, 5242880) : typeof __44 == 'object' && (__45 = JSON.stringify(__5.pseudoToNative(__44)))), this.native.send(__45);
  })), __5.setProperty(__42, 'abort', __5.createNativeFunction(function() {
    __6.settings.logCalls && console.log(__8.domain, 'XMLHttpRequest abort', this), this.native.abort(), __26 = Math.max(0, __26 - 1);
  })), __5.setProperty(__42, 'getResponseHeader', __5.createNativeFunction(function(__44) {
    return this.native.getResponseHeader(__44);
  })), __5.setProperty(__42, 'getAllResponseHeaders', __5.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __5.setProperty(__42, 'overrideMimeType', __5.createNativeFunction(function(__44) {
    this.native.overrideMimeType(__44);
  }));
}
var __65 = 'webtiles_storage',
  __66 = 1,
  __67 = 'localStorage',
  __68 = 1024 * 1024,
  __69 = 100,
  __70 = null,
  __71 = null;

function __72() {
  return __71 || (__71 = new Promise((__5, __9) => {
    let __8 = indexedDB.open(__65, __66);
    __8.onerror = () => __9(__8.error), __8.onsuccess = () => {
      __70 = __8.result, __5(__70);
    }, __8.onupgradeneeded = __10 => {
      let __11 = __10.target.result;
      __11.objectStoreNames.contains(__67) || __11.createObjectStore(__67, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __71);
}
async function __73(__5, __9) {
  return await __72(), new Promise((__8, __10) => {
    let __26 = __70.transaction(__67, 'readonly').objectStore(__67).get([
      __5,
      __9
    ]);
    __26.onsuccess = () => __8(__26.result?.value ?? null), __26.onerror = () => __10(__26.error);
  });
}
async function __74(__5, __9, __8) {
  return await __72(), new Promise((__10, __11) => {
    let __36 = __70.transaction(__67, 'readwrite').objectStore(__67).put({
      site: __5,
      key: __9,
      value: __8
    });
    __36.onsuccess = () => __10(), __36.onerror = () => __11(__36.error);
  });
}
async function __75(__5, __9) {
  return await __72(), new Promise((__8, __10) => {
    let __26 = __70.transaction(__67, 'readwrite').objectStore(__67).delete([
      __5,
      __9
    ]);
    __26.onsuccess = () => __8(), __26.onerror = () => __10(__26.error);
  });
}
async function __76(__5) {
  return await __72(), new Promise((__9, __8) => {
    let __26 = __70.transaction(__67, 'readonly').objectStore(__67).index('site').getAll(__5);
    __26.onsuccess = () => {
      let __36 = __26.result.map(__27 => __27.key);
      __9(__36);
    }, __26.onerror = () => __8(__26.error);
  });
}
async function __77(__5) {
  return await __72(), new Promise((__9, __8) => {
    let __26 = __70.transaction(__67, 'readonly').objectStore(__67).index('site').getAll(__5);
    __26.onsuccess = () => {
      let __36 = 0;
      for (let __27 of __26.result)
        __36 += (__27.key.length + __27.value.length) * 2;
      __9({
        size: __36,
        count: __26.result.length
      });
    }, __26.onerror = () => __8(__26.error);
  });
}
async function __78(__5) {
  return await __72(), new Promise((__9, __8) => {
    let __26 = __70.transaction(__67, 'readwrite').objectStore(__67).index('site').openCursor(__5);
    __26.onsuccess = __36 => {
      let __27 = __36.target.result;
      __27 ? (__27.delete(), __27.continue()) : __9();
    }, __26.onerror = () => __8(__26.error);
  });
}

function __79(__5, __9, __8) {
  let __10 = __5.nativeToPseudo({});
  __5.setProperty(__10, 'getItem', __5.createAsyncFunction(function(__11, __29) {
    if (__6.settings.logCalls && console.log(__8, 'localStorage.getItem', this, __11), __11 == null) {
      __29(null);
      return;
    }
    __11 = String(__11), __73(__8, __11).then(__26 => __29(__26)).catch(__26 => {
      console.error('localStorage.getItem error:', __26), __29(null);
    });
  })), __5.setProperty(__10, 'setItem', __5.createAsyncFunction(function(__11, __29, __26) {
    if (__6.settings.logCalls && console.log(__8, 'localStorage.setItem', this, __11, __29), __11 == null) {
      __26();
      return;
    }
    __11 = String(__11), __29 = String(__29), __77(__8).then(({
      size: __36,
      count: __27
    }) => {
      __73(__8, __11).then(__28 => {
        if (__28 === null && __27 >= __69)
          throw new Error(`localStorage item limit exceeded (max ${ __69 } items)`);
        let __39 = __28 ? (__11.length + __28.length) * 2 : 0,
          __40 = (__11.length + __29.length) * 2;
        if (__36 - __39 + __40 > __68)
          throw new Error(`localStorage size limit exceeded (max ${ __68 / 1024 }KB)`);
        return __74(__8, __11, __29);
      }).then(() => __26()).catch(__28 => {
        throw console.error('localStorage.setItem error:', __28), __28;
      });
    }).catch(__36 => {
      console.error('localStorage.setItem error:', __36), __26();
    });
  })), __5.setProperty(__10, 'removeItem', __5.createAsyncFunction(function(__11, __29) {
    if (__6.settings.logCalls && console.log(__8, 'localStorage.removeItem', this, __11), __11 == null) {
      __29();
      return;
    }
    __11 = String(__11), __75(__8, __11).then(() => __29()).catch(__26 => {
      console.error('localStorage.removeItem error:', __26), __29();
    });
  })), __5.setProperty(__10, 'clear', __5.createAsyncFunction(function(__11) {
    __6.settings.logCalls && console.log(__8, 'localStorage.clear', this), __78(__8).then(() => __11()).catch(__29 => {
      console.error('localStorage.clear error:', __29), __11();
    });
  })), __5.setProperty(__10, 'key', __5.createAsyncFunction(function(__11, __29) {
    __11 = parseInt(__11) || 0, __76(__8).then(__26 => {
      __29(__11 >= 0 && __11 < __26.length ? __26[__11] : null);
    }).catch(__26 => {
      console.error('localStorage.key error:', __26), __29(null);
    });
  })), __5.setProperty(__10, 'getLength', __5.createAsyncFunction(function(__11) {
    __77(__8).then(({
      count: __29
    }) => __11(__29)).catch(__29 => {
      console.error('localStorage.getLength error:', __29), __11(0);
    });
  })), __5.setProperty(__9, 'localStorage', __10), __5.setProperty(__9, 'sessionStorage', __10);
}
__72().catch(__5 => {
  console.error('Failed to initialize storage DB:', __5);
});

function __80(__5, __9, __8, __10) {
  let __11 = __5.createNativeFunction(function() {}, !0);
  __5.setProperty(__9, 'DOMParser', __11);
  let __29 = __5.getProperty(__11, 'prototype');
  __5.setProperty(__29, 'parseFromString', __5.createNativeFunction(function(__26, __36) {
    if (__6.settings.logCalls && console.log(__10.domain, 'DOMParser parseFromString', this, __26, __36), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__36))
      throw new Error(`DOMParser: Unsupported MIME type "${ __36 }"`);
    if (typeof __26 != 'string' && (__26 = String(__26)), __26.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __38 = new DOMParser().parseFromString(__26, __36),
      __39 = __5.createObjectProto(__5.OBJECT_PROTO);

    function __40(__42) {
      if (__42 == null)
        return null;
      let __43 = __5.createObjectProto(__5.OBJECT_PROTO);
      return __43.native = __42, __43.fromDOMParser = !0, __5.setProperty(__43, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __5.setProperty(__43, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __5.setProperty(__43, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __5.createNativeFunction(function(__44) {
          __6.settings.logCalls && console.log(__10.domain, 'DOMParser set nodeValue', this, __44), this.native.nodeValue = __44;
        })
      }), __5.setProperty(__43, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __5.createNativeFunction(function(__44) {
          __6.settings.logCalls && console.log(__10.domain, 'DOMParser set textContent', this, __44), this.native.textContent = String(__44).slice(0, 50000);
        })
      }), __5.setProperty(__43, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __5.setProperty(__43, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __5.createNativeFunction(function(__44) {
          __6.settings.logCalls && console.log(__10.domain, 'DOMParser set id', this, __44), this.native.id = String(__44).slice(0, 100);
        })
      }), __5.setProperty(__43, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __5.createNativeFunction(function(__44) {
          __6.settings.logCalls && console.log(__10.domain, 'DOMParser set className', this, __44), this.native.className = String(__44).slice(0, 1000);
        })
      }), __5.setProperty(__43, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __5.createNativeFunction(function(__44) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __5.setProperty(__43, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __5.setProperty(__43, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          let __44 = Array.from(this.native.children),
            __45 = __5.createObjectProto(__5.ARRAY_PROTO);
          for (let __48 = 0; __48 < __44.length; __48++)
            __5.setProperty(__45, __48, __40(__44[__48]));
          return __5.setProperty(__45, 'length', __44.length), __45;
        })
      }), __5.setProperty(__43, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          let __44 = Array.from(this.native.childNodes),
            __45 = __5.createObjectProto(__5.ARRAY_PROTO);
          for (let __48 = 0; __48 < __44.length; __48++)
            __5.setProperty(__45, __48, __40(__44[__48]));
          return __5.setProperty(__45, 'length', __44.length), __45;
        })
      }), __5.setProperty(__43, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return __40(this.native.firstChild);
        })
      }), __5.setProperty(__43, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return __40(this.native.lastChild);
        })
      }), __5.setProperty(__43, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return __40(this.native.firstElementChild);
        })
      }), __5.setProperty(__43, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return __40(this.native.lastElementChild);
        })
      }), __5.setProperty(__43, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__8) ? null : (__6.settings.logCalls && console.log(__10.domain, 'DOMParser get parentNode', this), __40(this.native.parentNode));
        })
      }), __5.setProperty(__43, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__8) ? null : (__6.settings.logCalls && console.log(__10.domain, 'DOMParser get parentElement', this), __40(this.native.parentElement));
        })
      }), __5.setProperty(__43, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__8) ? null : (__6.settings.logCalls && console.log(__10.domain, 'DOMParser get nextSibling', this), __40(this.native.nextSibling));
        })
      }), __5.setProperty(__43, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__8) ? null : (__6.settings.logCalls && console.log(__10.domain, 'DOMParser get previousSibling', this), __40(this.native.previousSibling));
        })
      }), __5.setProperty(__43, 'getAttributeNames', __5.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __44 = Array.from(this.native.getAttributeNames()),
          __45 = __5.createObjectProto(__5.ARRAY_PROTO);
        for (let __48 = 0; __48 < __44.length; __48++)
          __5.setProperty(__45, __48, __44[__48]);
        return __5.setProperty(__45, 'length', __44.length), __45;
      })), __5.setProperty(__43, 'getAttribute', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__44);
      })), __5.setProperty(__43, 'setAttribute', __5.createNativeFunction(function(__44, __45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__44 = String(__44).toLowerCase(), __44.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__44, String(__45)), __6.settings.logCalls && console.log(__10.domain, 'DOMParser set attribute', this, __44, __45);
      })), __5.setProperty(__43, 'hasAttribute', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__44);
      })), __5.setProperty(__43, 'removeAttribute', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__8))
          throw new Error('No access.');
        this.native.removeAttribute(__44), __6.settings.logCalls && console.log(__10.domain, 'DOMParser remove attribute', this, __44);
      })), __5.setProperty(__43, 'querySelector', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __40(this.native.querySelector(__44));
      })), __5.setProperty(__43, 'querySelectorAll', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __45 = Array.from(this.native.querySelectorAll(__44)),
          __48 = __5.createObjectProto(__5.ARRAY_PROTO);
        for (let __49 = 0; __49 < __45.length; __49++)
          __5.setProperty(__48, __49, __40(__45[__49]));
        return __5.setProperty(__48, 'length', __45.length), __48;
      })), __5.setProperty(__43, 'getElementsByTagName', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __45 = Array.from(this.native.getElementsByTagName(__44)),
          __48 = __5.createObjectProto(__5.ARRAY_PROTO);
        for (let __49 = 0; __49 < __45.length; __49++)
          __5.setProperty(__48, __49, __40(__45[__49]));
        return __5.setProperty(__48, 'length', __45.length), __48;
      })), __5.setProperty(__43, 'getElementsByClassName', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __45 = Array.from(this.native.getElementsByClassName(__44)),
          __48 = __5.createObjectProto(__5.ARRAY_PROTO);
        for (let __49 = 0; __49 < __45.length; __49++)
          __5.setProperty(__48, __49, __40(__45[__49]));
        return __5.setProperty(__48, 'length', __45.length), __48;
      })), __5.setProperty(__43, 'getElementById', __5.createNativeFunction(function(__44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __40(this.native.getElementById ? this.native.getElementById(__44) : null);
      })), __43;
    }
    return __5.setProperty(__39, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __40(__38.documentElement);
      })
    }), __5.setProperty(__39, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __6.settings.logCalls && console.log(__10.domain, 'DOMParser get head', this), __40(__38.head);
      })
    }), __5.setProperty(__39, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __6.settings.logCalls && console.log(__10.domain, 'DOMParser get body', this), __40(__38.body);
      })
    }), __5.setProperty(__39, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __38.title;
      })
    }), __5.setProperty(__39, 'querySelector', __5.createNativeFunction(function(__42) {
      return __40(__38.querySelector(__42));
    })), __5.setProperty(__39, 'querySelectorAll', __5.createNativeFunction(function(__42) {
      let __43 = Array.from(__38.querySelectorAll(__42)),
        __44 = __5.createObjectProto(__5.ARRAY_PROTO);
      for (let __45 = 0; __45 < __43.length; __45++)
        __5.setProperty(__44, __45, __40(__43[__45]));
      return __5.setProperty(__44, 'length', __43.length), __44;
    })), __5.setProperty(__39, 'getElementById', __5.createNativeFunction(function(__42) {
      return __40(__38.getElementById(__42));
    })), __5.setProperty(__39, 'getElementsByTagName', __5.createNativeFunction(function(__42) {
      let __43 = Array.from(__38.getElementsByTagName(__42)),
        __44 = __5.createObjectProto(__5.ARRAY_PROTO);
      for (let __45 = 0; __45 < __43.length; __45++)
        __5.setProperty(__44, __45, __40(__43[__45]));
      return __5.setProperty(__44, 'length', __43.length), __44;
    })), __5.setProperty(__39, 'getElementsByClassName', __5.createNativeFunction(function(__42) {
      let __43 = Array.from(__38.getElementsByClassName(__42)),
        __44 = __5.createObjectProto(__5.ARRAY_PROTO);
      for (let __45 = 0; __45 < __43.length; __45++)
        __5.setProperty(__44, __45, __40(__43[__45]));
      return __5.setProperty(__44, 'length', __43.length), __44;
    })), __39;
  }));
}

function __81(__5, __9, __8, __10) {
  let __11 = new WeakMap(),
    __29 = 1000,
    __26 = 5,
    __36 = new WeakMap(),
    __27 = 0,
    __28 = __5.nativeToPseudo({});
  __5.setProperty(__9, '__eventCallbacks', __28);

  function __38(__62, h) {
    let __82 = __27++;
    __5.setProperty(__28, 'fn' + __82, __62), __5.setProperty(__28, 'ev' + __82, h), __5.appendCode(`__eventCallbacks.fn${ __82 }(__eventCallbacks.ev${ __82 }); delete __eventCallbacks.fn${ __82 }; delete __eventCallbacks.ev${ __82 };`);
  }

  function __39() {
    return __8.getElementsByTagName('*').length;
  }

  function __40(__62 = 1) {
    if (__39() + __62 > __29)
      throw new Error(`DOM element limit exceeded (max ${ __29 })`);
  }

  function __42(__62) {
    return __62 instanceof Element ? 1 + __62.getElementsByTagName('*').length : 0;
  }

  function __43(__62, h = !1) {
    if (__62 == null)
      return null;
    if (__11.has(__62))
      return __11.get(__62);
    let __82 = __62 instanceof Element ? __54 : __49,
      __83 = __5.createObject(__82);
    return __83.native = __62, __83.fromDOMParser || (__83.fromDOMParser = h), __11.set(__62, __83), __83;
  }

  function __44(__62) {
    return __62 && __8.contains(__62);
  }

  function __45(__62) {
    return __44(__62) ? __62 : null;
  }

  function __48(__62) {
    let __84 = __5.createObjectProto(__5.ARRAY_PROTO);
    for (let __82 = 0; __82 < __62.length; __82++)
      __5.setProperty(__84, __82, __43(__62[__82]));
    return __5.setProperty(__84, 'length', __62.length), __84;
  }
  let __49 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'Node', __49);
  let __50 = __5.getProperty(__49, 'prototype'),
    __51 = {
      firstChild: function() {
        return __43(__45(this.native.firstChild));
      },
      lastChild: function() {
        return __43(__45(this.native.lastChild));
      },
      parentNode: function() {
        return __43(__45(this.native.parentNode));
      },
      parentElement: function() {
        return __43(__45(this.native.parentElement));
      },
      nextSibling: function() {
        return __43(__45(this.native.nextSibling));
      },
      previousSibling: function() {
        return __43(__45(this.native.previousSibling));
      },
      childNodes: function() {
        let __62 = Array.from(this.native.childNodes).filter(__44);
        return __48(__62);
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
    __52 = {
      textContent: function(__62) {
        __6.settings.logCalls && console.log(__10.domain, 'set textContent', this, __62), this.native.textContent = __62;
      },
      nodeValue: function(__62) {
        __6.settings.logCalls && console.log(__10.domain, 'set nodeValue', this, __62), this.native.nodeValue = __62;
      }
    };
  for (let [__62, __84] of Object.entries(__51)) {
    let __82 = {
      get: __5.createNativeFunction(__84)
    };
    __52[__62] && (__82.set = __5.createNativeFunction(__52[__62])), __5.setProperty(__50, __62, Interpreter.VALUE_IN_DESCRIPTOR, __82);
  }
  let __53 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__62) {
      if (!__62?.native)
        return null;
      if (__62.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __40(__42(__62.native)), this.native.appendChild(__62.native), __6.settings.logCalls && console.log(__10.domain, 'appendChild', this, __62), __62;
    },
    append: function(__62) {
      for (let __84 of __62)
        if (__84?.native) {
          if (__84.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __40(__42(__84.native)), this.native.appendChild(__84.native);
        }
      return __6.settings.logCalls && console.log(__10.domain, 'append', this, __62), __62;
    },
    removeChild: function(__62) {
      return !__62?.native || !__44(__62.native) ? null : (__6.settings.logCalls && console.log(__10.domain, 'removeChild', this, __62), __43(this.native.removeChild(__62.native)));
    },
    insertBefore: function(__62, __84) {
      if (!__62?.native)
        return null;
      if (__62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__8))
        throw new Error('No access.');
      __40(__42(__62.native));
      let __82 = __84?.native || null;
      return this.native.insertBefore(__62.native, __82), __6.settings.logCalls && console.log(__10.domain, 'insertBefore', this, __62, __82), __62;
    },
    cloneNode: function(__62) {
      return __6.settings.logCalls && console.log(__10.domain, 'cloneNode', this, __62), __43(this.native.cloneNode(__62), this.fromDOMParser);
    },
    contains: function(__62) {
      return __62?.native ? this.native.contains(__62.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__8))
        throw new Error('No access.');
      this.native.remove(), __6.settings.logCalls && console.log(__10.domain, 'remove', this);
    },
    after: function(__62) {
      if (!__62?.native)
        return null;
      if (__62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__8))
        throw new Error('No access.');
      return __40(__42(__62.native)), this.native.after(__62.native), __6.settings.logCalls && console.log(__10.domain, 'after', this, __62), __62;
    },
    before: function(__62) {
      if (!__62?.native)
        return null;
      if (__62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__8))
        throw new Error('No access.');
      return __40(__42(__62.native)), this.native.before(__62.native), __6.settings.logCalls && console.log(__10.domain, 'before', this, __62), __62;
    }
  };
  for (let [__62, __84] of Object.entries(__53))
    __5.setProperty(__50, __62, __5.createNativeFunction(__84));
  let __54 = __5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __5.setProperty(__9, 'Element', __54);
  let __55 = __5.createObject(__49);
  __5.setProperty(__54, 'prototype', __55);

  function __56(__62) {
    if (!__62)
      return '';
    __62 = String(__62);
    let __84 = __62.toLowerCase().trim();
    if (__84.startsWith('javascript:') || __84.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__84.startsWith('data:'))
      return __62;
    try {
      let __82 = new URL(__62, location.href);
      if (__82.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __83 = __82.pathname + __82.search + __82.hash;
      return __83.startsWith(`/t/${ __10.domain }/`) || (__83 = `/t/${ __10.domain }/${ __83 }`.replaceAll('//', '/')), __83;
    } catch (__82) {
      if (__82.message.includes('not allowed'))
        throw __82;
      let __83 = __62;
      return !__83.startsWith(`/t/${ __10.domain }/`) && !__83.startsWith('#') && (__83 = `/t/${ __10.domain }/${ __83 }`.replaceAll('//', '/')), __83;
    }
  }
  let __57 = {
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
        let __62 = Array.from(this.native.children).filter(__44);
        return __48(__62);
      },
      firstElementChild: function() {
        return __43(__45(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __43(__45(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __43(__45(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __43(__45(this.native.previousElementSibling));
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
    __58 = {
      innerText: function(__62) {
        this.native.innerText = __62.slice(0, 1000);
      },
      innerHTML: function(__62) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __62, __6.settings.logCalls && console.log(__10.domain, 'set id', this, __62);
      },
      className: function(__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __62, __6.settings.logCalls && console.log(__10.domain, 'set className', this, __62);
      },
      src: function(__62) {
        this.native.src = __56(__62), __6.settings.logCalls && console.log(__10.domain, 'set src', this, __62);
      },
      href: function(__62) {
        this.native.href = this.native.tagName === 'A' ? __62 : __56(__62), __6.settings.logCalls && console.log(__10.domain, 'set href', this, __62);
      },
      hidden: function(__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__62;
      },
      disabled: function(__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__62;
      },
      checked: function(__62) {
        this.native.checked = !!__62;
      },
      selected: function(__62) {
        this.native.selected = !!__62;
      },
      readOnly: function(__62) {
        this.native.readOnly = !!__62;
      },
      required: function(__62) {
        this.native.required = !!__62;
      },
      draggable: function(__62) {
        this.native.draggable = !!__62;
      },
      title: function(__62) {
        this.native.title = String(__62).slice(0, 1000);
      },
      alt: function(__62) {
        this.native.alt = String(__62).slice(0, 1000);
      },
      name: function(__62) {
        this.native.name = String(__62).slice(0, 100);
      },
      type: function(__62) {
        this.native.type = String(__62).slice(0, 50);
      },
      value: function(__62) {
        this.native.value = String(__62).slice(0, 10000);
      },
      placeholder: function(__62) {
        this.native.placeholder = String(__62).slice(0, 500);
      },
      tabIndex: function(__62) {
        this.native.tabIndex = parseInt(__62) || 0;
      },
      scrollTop: function(__62) {
        this.native.scrollTop = __62;
      },
      scrollLeft: function(__62) {
        this.native.scrollLeft = __62;
      },
      currentTime: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__62) || 0));
      },
      muted: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__62);
      },
      volume: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__62) || 0)));
      },
      loop: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__62);
      },
      autoplay: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__62);
      },
      controls: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__62);
      },
      playbackRate: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__62) || 1)));
      },
      defaultPlaybackRate: function(__62) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__62) || 1)));
      },
      preload: function(__62) {
        if (this.native instanceof HTMLMediaElement) {
          let __84 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __84.includes(__62) ? __62 : 'auto';
        }
      },
      poster: function(__62) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __56(__62));
      }
    };
  for (let [__62, __84] of Object.entries(__57)) {
    let __82 = {
      get: __5.createNativeFunction(__84)
    };
    __58[__62] && (__82.set = __5.createNativeFunction(__58[__62])), __5.setProperty(__55, __62, Interpreter.VALUE_IN_DESCRIPTOR, __82);
  }
  let __59 = {
    getAttributeNames: function() {
      let __62 = Array.from(this.native.getAttributeNames()),
        __84 = __5.createObjectProto(__5.ARRAY_PROTO);
      for (let __82 = 0; __82 < __62.length; __82++)
        __5.setProperty(__84, __82, __62[__82]);
      return __5.setProperty(__84, 'length', __62.length), __84;
    },
    getAttribute: function(__62) {
      return this.native.getAttribute(__62);
    },
    setAttribute: function(__62, __84) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__62 = String(__62).toLowerCase(), __84 = String(__84), __6.settings.logCalls && console.log(__10.domain, 'setAttribute', this, __62, __84), __62 === 'style' && __84.includes('animation-play-state') && __84.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__62 === 'src' || __62 === 'poster' || __62 === 'data' || this.native.tagName !== 'A' && __62 === 'href') {
        this.native.setAttribute(__62, __56(__84));
        return;
      }
      if (__62 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__62 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__62 === 'action' || __62 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__62.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__62 === 'width' || __62 === 'height') {
        let __82 = parseFloat(__84);
        if (isNaN(__82) || __82 < 0 || __82 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__62, __84);
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
    scrollIntoView: function(__62) {
      __62 && typeof __62 == 'object' ? this.native.scrollIntoView(__5.pseudoToNative(__62)) : this.native.scrollIntoView(__62);
    },
    scrollTo: function(__62, __84) {
      this.native.scrollTo(__62, __84);
    },
    scrollBy: function(__62, __84) {
      this.native.scrollBy(__62, __84);
    },
    removeAttribute: function(__62) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__62 = String(__62).toLowerCase(), __62 === 'target')
        throw new Error('removing target is not allowed');
      __6.settings.logCalls && console.log(__10.domain, 'removeAttribute', this, __62), this.native.removeAttribute(__62);
    },
    hasAttribute: function(__62) {
      return this.native.hasAttribute(__62);
    },
    querySelector: function(__62) {
      let __84 = this.native.querySelector(__62);
      return __43(__45(__84));
    },
    querySelectorAll: function(__62) {
      let __84 = Array.from(this.native.querySelectorAll(__62)).filter(__44);
      return __48(__84);
    },
    getElementsByClassName: function(__62) {
      let __84 = Array.from(this.native.getElementsByClassName(__62)).filter(__44);
      return __48(__84);
    },
    getElementsByTagName: function(__62) {
      let __84 = Array.from(this.native.getElementsByTagName(__62)).filter(__44);
      return __48(__84);
    },
    closest: function(__62) {
      let __84 = this.native.closest(__62);
      for (; __84 && !__8.contains(__84);)
        __84 = null;
      return __43(__84);
    },
    matches: function(__62) {
      return this.native.matches(__62);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __62 = this.native.classList;
      return __5.nativeToPseudo({
        add: (...__84) => __62.add(...__84),
        remove: (...__84) => __62.remove(...__84),
        toggle: (__84, __82) => __62.toggle(__84, __82),
        contains: __84 => __62.contains(__84),
        replace: (__84, __82) => __62.replace(__84, __82)
      });
    },
    getBoundingClientRect: function() {
      let __62 = this.native.getBoundingClientRect();
      return __5.nativeToPseudo({
        __47: __62.__47,
        __82: __62.__82,
        width: __62.width,
        height: __62.height,
        top: __62.top,
        right: __62.right,
        bottom: __62.bottom,
        left: __62.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __5.createObjectProto(__5.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __62 = __5.createObjectProto(__5.OBJECT_PROTO),
        __84 = this,
        __82 = null,
        __83 = null;
      return __6.settings.logCalls && console.log(__10.domain, 'play', this), __5.setProperty(__62, 'then', __5.createNativeFunction(function(L) {
        return __82 = L, __62;
      })), __5.setProperty(__62, 'catch', __5.createNativeFunction(function(L) {
        return __83 = L, __62;
      })), __84.native.play().then(() => {
        __82 && __38(__82, __5.nativeToPseudo(void 0));
      }).catch(L => {
        __83 && __38(__83, __5.nativeToPseudo({
          message: L.message,
          name: L.name
        }));
      }), __62;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__62) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__62 || '')) : '';
    },
    fastSeek: function(__62) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__62) || 0));
    },
    getAnimations: function(__62) {
      if (!this.native.getAnimations)
        return __48([]);
      let __84 = __62 ? {
          subtree: !!__5.pseudoToNative(__62)?.subtree
        } : {},
        __82 = this.native.getAnimations(__84),
        __83 = __5.createObjectProto(__5.ARRAY_PROTO);
      for (let __85 = 0; __85 < __82.length; __85++)
        __83.properties[__85] = __46(__82[__85]);
      return __5.setProperty(__83, 'length', __82.length), __83;
    }
  };
  for (let [__62, __84] of Object.entries(__59))
    __5.setProperty(__55, __62, __5.createNativeFunction(__84));

  function __46(__62) {
    let __84 = __5.createObjectProto(__5.OBJECT_PROTO);
    return __5.setProperty(__84, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.id;
      })
    }), __5.setProperty(__84, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.playState;
      })
    }), __5.setProperty(__84, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.pending;
      })
    }), __5.setProperty(__84, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.replaceState;
      })
    }), __5.setProperty(__84, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.currentTime;
      }),
      set: __5.createNativeFunction(function(__82) {
        __62.currentTime = __82;
      })
    }), __5.setProperty(__84, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.playbackRate;
      }),
      set: __5.createNativeFunction(function(__82) {
        __62.playbackRate = Math.max(-10, Math.min(10, Number(__82) || 1));
      })
    }), __5.setProperty(__84, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        return __62.startTime;
      }),
      set: __5.createNativeFunction(function(__82) {
        __62.startTime = __82;
      })
    }), __5.setProperty(__84, 'play', __5.createNativeFunction(function() {
      __62.play();
    })), __5.setProperty(__84, 'pause', __5.createNativeFunction(function() {
      __62.pause();
    })), __5.setProperty(__84, 'cancel', __5.createNativeFunction(function() {
      __62.cancel();
    })), __5.setProperty(__84, 'finish', __5.createNativeFunction(function() {
      __62.finish();
    })), __5.setProperty(__84, 'reverse', __5.createNativeFunction(function() {
      __62.reverse();
    })), __5.setProperty(__84, 'updatePlaybackRate', __5.createNativeFunction(function(__82) {
      __62.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__82) || 1)));
    })), __84;
  }

  function __41(__62) {
    let __84 = __5.createObjectProto(__5.OBJECT_PROTO),
      __82 = __62 ? __62.length : 0;
    return __5.setProperty(__84, 'length', __82), __5.setProperty(__84, 'start', __5.createNativeFunction(function(__83) {
      if (!__62 || __83 < 0 || __83 >= __62.length)
        throw new Error('Index out of bounds');
      return __62.start(__83);
    })), __5.setProperty(__84, 'end', __5.createNativeFunction(function(__83) {
      if (!__62 || __83 < 0 || __83 >= __62.length)
        throw new Error('Index out of bounds');
      return __62.end(__83);
    })), __84;
  }
  __5.setProperty(__55, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __41(this.native.buffered) : __41(null);
    })
  }), __5.setProperty(__55, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __41(this.native.played) : __41(null);
    })
  }), __5.setProperty(__55, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __41(this.native.seekable) : __41(null);
    })
  }), __5.setProperty(__55, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      let __62 = this.native.classList,
        __84 = __5.nativeToPseudo({});
      return __5.setProperty(__84, 'add', __5.createNativeFunction(function(...__82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __62.add(...__82);
      })), __5.setProperty(__84, 'remove', __5.createNativeFunction(function(...__82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __62.remove(...__82);
      })), __5.setProperty(__84, 'toggle', __5.createNativeFunction(function(__82, __83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __62.toggle(__82, __83);
      })), __5.setProperty(__84, 'contains', __5.createNativeFunction(function(__82) {
        return __62.contains(__82);
      })), __5.setProperty(__84, 'replace', __5.createNativeFunction(function(__82, __83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __62.replace(__82, __83);
      })), __84;
    })
  }), __5.setProperty(__55, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      let __62 = this.native.style,
        __84 = __5.nativeToPseudo({}),
        __82 = [
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
      for (let __83 of __82)
        __5.setProperty(__84, __83, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __5.createNativeFunction(function() {
            return __62[__83];
          }),
          set: __5.createNativeFunction(function(__85) {
            __62[__83] = __85, __6.settings.logCalls && console.log(__10.domain, 'set style', this, __83, __85);
          })
        });
      return __5.setProperty(__84, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __5.createNativeFunction(function() {
          return __62.cssText;
        }),
        set: __5.createNativeFunction(function(__83) {
          __62.cssText = __83, __6.settings.logCalls && console.log(__10.domain, 'set cssText', this, __83);
        })
      }), __5.setProperty(__84, 'setProperty', __5.createNativeFunction(function(__83, __85, O) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __62.setProperty(__83, __85, O), __6.settings.logCalls && console.log(__10.domain, 'setProperty', this, __83, __85, O);
      })), __5.setProperty(__84, 'getPropertyValue', __5.createNativeFunction(function(__83) {
        return __62.getPropertyValue(__83);
      })), __5.setProperty(__84, 'removeProperty', __5.createNativeFunction(function(__83) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __6.settings.logCalls && console.log(__10.domain, 'removeProperty', this, __83), __62.removeProperty(__83);
      })), __84;
    })
  }), __5.setProperty(__55, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      let __62 = this.native.dataset,
        __84 = __5.nativeToPseudo({});
      for (let __82 in __62)
        __5.setProperty(__84, __82, __62[__82]);
      return __5.setProperty(__84, 'get', __5.createNativeFunction(function(__82) {
        return __62[__82];
      })), __5.setProperty(__84, 'set', __5.createNativeFunction(function(__82, __83) {
        __62[__82] = String(__83).slice(0, 1000), __6.settings.logCalls && console.log(__10.domain, 'set dataset', this, __82, __83);
      })), __5.setProperty(__84, 'delete', __5.createNativeFunction(function(__82) {
        delete __62[__82], __6.settings.logCalls && console.log(__10.domain, 'delete dataset', this, __82);
      })), __5.setProperty(__84, 'has', __5.createNativeFunction(function(__82) {
        return __82 in __62;
      })), __84;
    })
  }), __5.setProperty(__55, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return __43(__45(this.native.offsetParent));
    })
  });
  let __37 = [
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

  function __47(__62) {
    let __84 = __5.nativeToPseudo({}),
      __82 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __83 of __82)
      __5.setProperty(__84, __83, __62[__83]);
    if (__62 instanceof MouseEvent || __62 instanceof PointerEvent) {
      let __83 = [
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
      for (let __85 of __83)
        __5.setProperty(__84, __85, __62[__85]);
    }
    if (__62 instanceof KeyboardEvent) {
      let __83 = [
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
      for (let __85 of __83)
        __5.setProperty(__84, __85, __62[__85]);
    }
    return typeof TouchEvent == 'function' && __62 instanceof TouchEvent && (__5.setProperty(__84, 'touches', __5.nativeToPseudo({
      length: __62.touches.length
    })), __5.setProperty(__84, 'changedTouches', __5.nativeToPseudo({
      length: __62.changedTouches.length
    }))), typeof WheelEvent == 'function' && __62 instanceof WheelEvent && (__5.setProperty(__84, 'deltaX', __62.deltaX), __5.setProperty(__84, 'deltaY', __62.deltaY), __5.setProperty(__84, 'deltaZ', __62.deltaZ), __5.setProperty(__84, 'deltaMode', __62.deltaMode)), __62.target && __44(__62.target) && __5.setProperty(__84, 'target', __43(__62.target)), __62.currentTarget && __44(__62.currentTarget) && __5.setProperty(__84, 'currentTarget', __43(__62.currentTarget)), __5.setProperty(__84, 'preventDefault', __5.createNativeFunction(function() {
      __62.preventDefault();
    })), __5.setProperty(__84, 'stopPropagation', __5.createNativeFunction(function() {
      __62.stopPropagation();
    })), __5.setProperty(__84, 'stopImmediatePropagation', __5.createNativeFunction(function() {
      __62.stopImmediatePropagation();
    })), __84;
  }
  __5.setProperty(__55, 'addEventListener', __5.createNativeFunction(function(__62, __84) {
    if (!__62 || typeof __62 != 'string' || !__84 || typeof __84 != 'object')
      return;
    if (__62 = __62.toLowerCase(), !__37.includes(__62))
      throw new Error(`Event type "${ __62 }" is not allowed`);
    __6.settings.logCalls && console.log(__10.domain, 'addEventListener', this, __62, __84);
    let __82 = this.native;
    __36.has(__82) || __36.set(__82, new Map());
    let __83 = __36.get(__82);
    __83.has(__62) || __83.set(__62, []);
    let __85 = __83.get(__62);
    if (__85.length >= __26)
      throw new Error(`Maximum listeners (${ __26 }) reached for event "${ __62 }"`);
    if (__85.some(U => U.pseudo === __84))
      return;
    let __86 = function(U) {
      let __87 = __47(U);
      __38(__84, __87);
    };
    __85.push({
      pseudo: __84,
      native: __86
    }), __82.addEventListener(__62, __86);
  })), __5.setProperty(__55, 'removeEventListener', __5.createNativeFunction(function(__62, __84) {
    if (!__62 || typeof __62 != 'string' || !__84 || typeof __84 != 'object')
      return;
    __6.settings.logCalls && console.log(__10.domain, 'removeEventListener', this, __62, __84), __62 = __62.toLowerCase();
    let __82 = this.native;
    if (!__36.has(__82))
      return;
    let __83 = __36.get(__82);
    if (!__83.has(__62))
      return;
    let __85 = __83.get(__62),
      __86 = __85.findIndex(U => U.pseudo === __84);
    __86 !== -1 && (__82.removeEventListener(__62, __85[__86].native), __85.splice(__86, 1));
  }));
  let __63 = [
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
  for (let __62 of __63) {
    let __84 = 'on' + __62;
    __5.setProperty(__55, __84, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __5.createNativeFunction(function() {
        let __82 = this.native;
        if (!__36.has(__82))
          return null;
        let __83 = __36.get(__82),
          __85 = `__${ __84 }`;
        return __83.get(__85) || null;
      }),
      set: __5.createNativeFunction(function(__82) {
        let __83 = this.native;
        __36.has(__83) || __36.set(__83, new Map());
        let __85 = __36.get(__83),
          __86 = `__${ __84 }`;
        __6.settings.logCalls && console.log(__10.domain, 'setOn' + __62, this, __82);
        let __88 = __85.get(__86 + '_native');
        if (__88 && (__83.removeEventListener(__62, __88), __85.delete(__86), __85.delete(__86 + '_native')), __82 && typeof __82 == 'object') {
          let __87 = function(Ke) {
            let __89 = __47(Ke);
            __38(__82, __89);
          };
          __83.addEventListener(__62, __87), __85.set(__86, __82), __85.set(__86 + '_native', __87);
        }
      })
    });
  }
  __35(__5, __9, __10).extendElement(__55, __43), __64(__5, __9, __10), __79(__5, __9, __10.domain), __80(__5, __9, __8, __10);
  let __61 = __5.nativeToPseudo({});
  __5.setProperty(__9, 'document', __61);
  let __90 = {
    getElementById: function(__62) {
      let __84 = __8.querySelector(`#${ CSS.escape(__62) }`);
      return __43(__84);
    },
    getElementsByClassName: function(__62) {
      let __84 = Array.from(__8.getElementsByClassName(__62));
      return __48(__84);
    },
    getElementsByTagName: function(__62) {
      let __84 = Array.from(__8.getElementsByTagName(__62));
      return __48(__84);
    },
    querySelector: function(__62) {
      return __43(__8.querySelector(__62));
    },
    querySelectorAll: function(__62) {
      let __84 = Array.from(__8.querySelectorAll(__62));
      return __48(__84);
    },
    createElement: function(__62) {
      if (typeof __62 != 'string')
        throw new Error('Invalid tag');
      if (__62 = __62.toLowerCase().trim(), [
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
        ].includes(__62))
        throw new Error('Creating ' + __62 + ' elements is not allowed');
      return __6.settings.logCalls && console.log(__10.domain, 'createElement', this, __62), __43(document.createElement(__62));
    },
    createTextNode: function(__62) {
      return __6.settings.logCalls && console.log(__10.domain, 'createTextNode', this, __62), __43(document.createTextNode(__62));
    }
  };
  for (let [__62, __84] of Object.entries(__90))
    __5.setProperty(__61, __62, __5.createNativeFunction(__84));
  __5.setProperty(__61, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return __6.settings.logCalls && console.log(__10.domain, 'get body', this), __43(__8);
    })
  }), __5.setProperty(__61, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return __6.settings.logCalls && console.log(__10.domain, 'get documentElement', this), __43(__8);
    })
  });
  let __91 = __5.nativeToPseudo({});
  __5.setProperty(__9, 'location', __91), __5.setProperty(__91, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __5.createNativeFunction(function() {
      return `/t/${ __10.domain }${ __10.path }`;
    }),
    set: __5.createNativeFunction(function(__62) {
      if (typeof __62 == 'string') {
        __6.settings.logCalls && console.log(__10.domain, 'set href', this, __62);
        try {
          let __84 = new URL(__62, `http://${ __10.domain }`);
          if (__84.hostname && __84.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __82 = __84.pathname + __84.search + __84.hash;
          if (__82.startsWith(`/t/${ __10.domain }/`) ? __82 = __82.substring(`/t/${ __10.domain }`.length) : __82 === `/t/${ __10.domain }` && (__82 = '/'), __82.startsWith('/') || (__82 = '/' + __82), __82.endsWith('.html') || __82 === '/' || __82 === '')
            __10.fetchContent(__82 || '/index.html'), __10.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__84) {
          if (__84.message.includes('not allowed') || __84.message.includes('Only HTML'))
            throw __84;
          let __82 = __62;
          if (__82.startsWith('/') || (__82 = '/' + __82), __82.endsWith('.html') || __82 === '/' || __82 === '')
            __10.fetchContent(__82 || '/index.html').then(() => __10.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __5.setProperty(__91, 'reload', __5.createNativeFunction(function() {
    __10.fetchContent(__10.path, !0).then(() => __10.setActive(!0));
  }));
}
var __92 = {
    console: {
      log: function(...__5) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...__5);
      },
      error: function(...__5) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...__5);
      },
      warn: function(...__5) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...__5);
      }
    },
    alert(__5) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ __5 }`);
    },
    prompt(__5) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ __5 }`);
    },
    confirm(__5) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ __5 }`);
    },
    atob(__5) {
      return atob(__5);
    },
    btoa(__5) {
      return btoa(__5);
    }
  },
  __93 = class {
    constructor(__9) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = __9, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__8, __10) => {
        let __11 = (__29, __26) => {
          for (let [__36, __27] of Object.entries(__29))
            if (typeof __27 == 'function')
              __8.setProperty(__26, __36, __8.createNativeFunction(__27.bind(this)));
            else if (typeof __27 == 'object' && __27 !== null) {
            let __28 = __8.nativeToPseudo({});
            __11(__27, __28), __8.setProperty(__26, __36, __28);
          }
        };
        __11(__92, __10), __81(__8, __10, this.tile.contentElement, this.tile), __8.setProperty(__10, 'embedded', __8.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __9 = new Set(),
        __8 = [this.interpreter.getStateStack()],
        __10 = 0;
      for (; __8.length;) {
        let __11 = __8.pop(),
          __29 = typeof __11;
        if (__10 += 8, __29 === 'string' && !__9.has(__11))
          __9.add(__11), __10 += __11.length * 2;
        else if (__29 === 'object' && __11 !== null && !__9.has(__11)) {
          __9.add(__11);
          try {
            __8.push(...Object.keys(__11), ...Object.values(__11));
          } catch {}
        }
      }
      return __10;
    }
    start() {
      this.running || __6.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __9 = 0; __9 < 5000; __9++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __8 = this.roughValueMemorySize();
                if (__8 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __8 } bytes`);
                  break;
                }
              }
            } catch (__8) {
              console.error(__8), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__9) {
      __6.settings.disableJS || this.interpreter.appendCode(__9);
    }
  },
  __94 = __93;
var __95 = document.getElementById('plot'),
  __96 = new CSSStyleSheet(),
  __97 = () => {
    __96.replaceSync(`
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
__97();
var __98 = new CSSStyleSheet();
__98.replaceSync(`
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
var __99 = class __5 {
  constructor(__9) {
    this.__47 = __9.__47 ?? 0, this.__82 = __9.__82 ?? 0, this.domain = __9.domain, this.free = !__9.domain, this.locked = !1, this.id = `${ this.__47 },${ this.__82 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __9.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __9.nocontrols || !1, this.embed = __9.embed || !1, this.container = __9.container || __95, this.interpreter = null, this.render();
  }
  static toTilePosition(__9, __8) {
    return {
      __47: Math.floor(__9 / 250),
      __82: Math.floor(__8 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __9 = document.createElement('div');
    __9.classList.add('tile'), this.free && __9.classList.add('f'), this.preview ? __9.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__9.style.left = `${ this.__47 * 250 }px`, __9.style.top = `${ this.__82 * 250 }px`, this.__47 % 10 === 0 && __9.classList.add('b-left'), this.__82 % 10 === 0 && __9.classList.add('b-top')), this.element = __9;
    let __8 = document.createElement('div');
    __8.classList.add('tile-content'), this.preview && (__8.style.cssText = 'width: 100%; height: 100%;'), __8.addEventListener('click', async __11 => {
      let __29 = __11.composedPath()?.filter(__28 => __28 instanceof Element);
      if (!__29)
        return;
      let __26 = __29.findIndex(__28 => __28.isSameNode(__8));
      if (__26 === -1)
        return;
      let __27 = __29.slice(0, __26).find(__28 => __28.tagName === 'A');
      if (__27) {
        __11.preventDefault();
        try {
          let __28 = new URL(__27.href);
          if (__28.hostname !== location.hostname) {
            let __39 = document.createElement('a');
            __39.href = __27.href, __39.target = '_blank', __39.click();
            return;
          }
          let __38 = __28.pathname;
          if (__38.startsWith(`/t/${ this.domain }/`) || (__38 = `/t/${ this.domain }/${ __38 }`.replaceAll('//', '/')), __38.startsWith(`/t/${ this.domain }`) && (__38.endsWith('.html') || __38 === `/t/${ this.domain }/` || __38 === `/t/${ this.domain }`))
            await this.fetchContent(__38.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __39 = document.createElement('a');
            __39.href = __27.href, __39.target = '_blank', __39.click();
          }
        } catch (__28) {
          console.error(__28);
        }
      }
    }), this.shadow = __8.attachShadow({
      mode: 'open'
    });
    let __10 = document.createElement('div');
    __10.className = 'tile-body', this.embed && __10.classList.add('embedded'), __10.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __10, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__47 }, ${ this.__82 }...`, this.shadow.appendChild(__10), __9.appendChild(__8), this.fonts = document.createElement('style'), __9.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__9), __6.plot?.lockCache[this.__47 + ',' + this.__82] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__9, __8 = !1) {
    __9.startsWith('/') || (__9 = '/' + __9);
    let __10 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__47 }, ${ this.__82 }</p>
            </div>` : this.path === __9 && this.content && !__8 ? this.content : await fetch(`/t/${ this.domain }${ __9 }`).then(__26 => __26.text()).catch(__26 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__98] : this.shadow.adoptedStyleSheets = [__96], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __9, this.contentElement.innerHTML = __10, this.content = __10;
    let __11 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __29 = 0;
    for (let __26 of __11) {
      if (__29 >= 3)
        break;
      let __36 = __26.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__36)
        for (let __27 of __36) {
          if (__29 >= 3)
            break;
          this.fonts.textContent += __27, __29++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __9 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __8 of __9)
      this.interpreter.runCode(__8.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__9) {
    if (this.element && (__9 && (this.interpreter || (this.interpreter = new __94(this), this.executeScripts()), this.interpreter.start()), __9 !== this.active)) {
      if (this.active = __9, __9) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __6.ui) {
          let __10 = __6.ui.createVoteMenu(this);
          __10 && this.element.appendChild(__10);
          let __11 = __6.ui.createTileControl(this);
          if (this.element.appendChild(__11), __6.user?.admin || __6.user?.moderator) {
            let __29 = __6.ui.createAdminControl(this);
            this.element.appendChild(__29);
          }
          __6.plot?.activeTile && __6.plot.activeTile.setActive(!1), __6.plot && (__6.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __8 = this.contentElement.querySelectorAll('audio, video');
        for (let __10 of __8)
          __10.dataset.webtilesPaused === 'true' && (__10.dataset.webtilesPaused = !1, __10.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __6.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __6.plot && (__6.plot.activeTile = null)), __5.clearClanBorders();
        let __8 = this.contentElement.querySelectorAll('audio, video');
        for (let __10 of __8)
          __10.paused || (__10.dataset.webtilesPaused = !0, __10.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __8 = await (await __6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__8.success || !__8.clan)
          return;
        let __10 = __8.clan.members;
        if (!__10 || __10.length <= 1)
          return;
        let __11 = new Set(__10.map(__29 => `${ __29.__47 },${ __29.__82 }`));
        for (let __29 of __10) {
          let __26 = __6.plot.tiles[`${ __29.__47 },${ __29.__82 }`];
          if (!__26?.element)
            continue;
          __26.element.classList.add('clan-highlight');
          let __36 = __11.has(`${ __29.__47 },${ __29.__82 - 1 }`),
            __27 = __11.has(`${ __29.__47 },${ __29.__82 + 1 }`),
            __28 = __11.has(`${ __29.__47 - 1 },${ __29.__82 }`),
            __38 = __11.has(`${ __29.__47 + 1 },${ __29.__82 }`);
          if (!__36) {
            let __39 = document.createElement('div');
            __39.className = 'clan-border clan-border-top', __26.element.appendChild(__39);
          }
          if (!__27) {
            let __39 = document.createElement('div');
            __39.className = 'clan-border clan-border-bottom', __26.element.appendChild(__39);
          }
          if (!__28) {
            let __39 = document.createElement('div');
            __39.className = 'clan-border clan-border-left', __26.element.appendChild(__39);
          }
          if (!__38) {
            let __39 = document.createElement('div');
            __39.className = 'clan-border clan-border-right', __26.element.appendChild(__39);
          }
        }
      } catch (__9) {
        console.error('Failed to fetch clan borders:', __9);
      }
  }
  static clearClanBorders() {
    if (__6.plot?.tiles)
      for (let __9 of Object.values(__6.plot.tiles))
        __9.element && (__9.element.classList.remove('clan-highlight'), __9.element.querySelectorAll('.clan-border').forEach(__10 => __10.remove()));
  }
  setDomain(__9) {
    this.domain = __9, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__9) {
    this.locked = __9, this.element && this.element.classList.toggle('locked', __9), this.fetchContent('/index.html', !0);
  }
};
__6.ui = {
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
  createElement: (__5, __9 = {}) => {
    let __8 = document.createElement(__5);
    for (let [__10, __11] of Object.entries(__9))
      __10 === 'innerText' ? __8.innerText = __11 : __10 === 'innerHTML' ? __8.innerHTML = __11 : __10.startsWith('on') ? __8.addEventListener(__10.slice(2).toLowerCase(), __11) : __8.setAttribute(__10, __11);
    return __8;
  },
  escapeHTML: __5 => __5 ? __5.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '',
  showDashboard: __5 => {
    Ye.src = `/dashboard?site=${ encodeURIComponent(__5) }&path=/`, We && (We.textContent = `File Manager - ${ __5 }`), Ve.classList.add('active'), fe && (fe.style.display = 'none'), __6.camera && __6.camera.setZoomEnabled(!1), __6.ws?.isConnected && setTimeout(() => {
      let __9 = new Int16Array(3);
      __9[0] = 0, __9[1] = 0, __9[2] = 0, __6.ws.send(__9.buffer);
    }, 100);
  },
  showClaimModal: __5 => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __9 = __6.user.selectedSite;
    if (!__9) {
      alert('Please select a site first');
      return;
    }
    let __8 = __9.domain,
      __10 = __9.tile ? `<strong>Warning</strong>Your current tile at (${ __9.tile.__47 }, ${ __9.tile.__82 }) will be unclaimed and your site will be moved to this new tile.` : null;
    new __12({
      title: 'Claim Tile',
      content: `<p>Do you want to claim tile (${ __5.__47 }, ${ __5.__82 }) for <strong>${ __6.ui.escapeHTML(__8) }</strong>?</p>`,
      warning: __10,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __29 => __29.close()
        },
        {
          text: 'Claim',
          type: 'confirm',
          id: 'confirm',
          onClick: async __29 => {
            __29.setButtonLoading('confirm', !0, 'Claiming...');
            try {
              let __36 = await (await __6.api.makeRequest('/api/claim', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82
                })
              })).json();
              if (__36.success) {
                if (__6.user.selectedSite) {
                  if (__6.user.selectedSite.tile) {
                    let __27 = __6.plot.getTile(__6.user.selectedSite.tile.__47, __6.user.selectedSite.tile.__82);
                    __27 && __27.setFree();
                  }
                  __6.user.selectedSite.tile = {
                    __47: __5.__47,
                    __82: __5.__82,
                    code: __36.code,
                    domain: __6.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                setTimeout(() => {
                  __5.setDomain(__6.user.selectedSite.domain), __5.setActive(!1), __5.element && __5.element.classList.toggle('locked', !1);
                }, 400), __29.close(), Q();
              } else
                alert(__36.error || 'Failed to claim tile'), __29.setButtonLoading('confirm', !1);
            } catch (__26) {
              console.error(__26), alert('Failed to claim tile: ' + __26.message), __29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showUnlockModal: __5 => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __9 = __6.user.selectedSite;
    if (!__9) {
      alert('Please select a site first');
      return;
    }
    let __8 = __9.domain,
      __10 = __9.tile ? `<strong>Warning</strong>Your current tile at (${ __9.tile.__47 }, ${ __9.tile.__82 }) will be unclaimed and your site will be moved to this new tile.` : null,
      __11 = new __12({
        title: 'Unlock & Claim Tile',
        content: `
                <p>Enter the unlock code to claim the tile at (${ __5.__47 }, ${ __5.__82 }) for <strong>${ __6.ui.escapeHTML(__8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: __10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __29 => __29.close()
          },
          {
            text: 'Unlock & Claim',
            type: 'confirm',
            id: 'confirm',
            onClick: async __29 => {
              let __36 = __11.element.querySelector('#unlock-code-input').value.trim();
              if (!__36) {
                alert('Please enter a code');
                return;
              }
              __29.setButtonLoading('confirm', !0, 'Unlocking...');
              try {
                let __28 = await (await __6.api.makeRequest('/api/claim', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __47: __5.__47,
                    __82: __5.__82,
                    code: __36
                  })
                })).json();
                if (__28.success) {
                  if (delete __6.plot.lockCache[__5.__47 + ',' + __5.__82], __6.user.selectedSite) {
                    if (__6.user.selectedSite.tile) {
                      let __38 = __6.plot.getTile(__6.user.selectedSite.tile.__47, __6.user.selectedSite.tile.__82);
                      __38 && __38.setFree();
                    }
                    __6.user.selectedSite.tile = {
                      __47: __5.__47,
                      __82: __5.__82,
                      code: __28.code,
                      domain: __6.user.selectedSite.domain,
                      created_at: Date.now()
                    };
                  }
                  __5.setDomain(__6.user.selectedSite.domain), __5.setActive(!1), __29.close(), Q();
                } else
                  alert(__28.error || 'Failed to unlock tile'), __29.setButtonLoading('confirm', !1);
              } catch (__27) {
                console.error(__27), alert('Failed to unlock tile: ' + __27.message), __29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __11.open(), setTimeout(() => {
      let __29 = __11.element.querySelector('#unlock-code-input');
      __29 && __29.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    __6.ui.clanIndicator && (__6.ui.clanIndicator.hidden = __6.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!__6.user || !__6.user.selectedSite))
      try {
        let __9 = await (await __6.api.makeRequest('/api/clans/invites')).json();
        __9.success && (__6.ui.pendingClanInvites = __9.invites || [], __6.ui.updateClanIndicator());
      } catch (__5) {
        console.error('Failed to fetch clan invites:', __5);
      }
  },
  showClanModal: async () => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    let __5 = new __12({
      title: 'Clan Management',
      content: '<p>Loading...</p>',
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __9 => __9.close()
      }]
    });
    __5.open();
    try {
      let [__9, __8] = await Promise.all([
        __6.api.makeRequest('/api/clans/current'),
        __6.api.makeRequest('/api/clans/invites')
      ]), __10 = await __9.json(), __11 = await __8.json();
      __6.ui.pendingClanInvites = __11.invites || [], __6.ui.updateClanIndicator();
      let __29 = __6.user?.admin || __6.user?.moderator;
      __10.success && __10.clan ? __6.ui.renderClanInfo(__5, __10.clan, __29) : __6.ui.renderNoClan(__5, __11.invites || [], __29);
    } catch (__9) {
      console.error(__9), __5.setContent('<p>Failed to load clan data: ' + __6.ui.escapeHTML(__9.message) + '</p>');
    }
  },
  renderClanInfo: (__5, __9, __8) => {
    let __10 = `
            <div class="clan-name-display">${ __6.ui.escapeHTML(__9.name) }</div>
            <div class="clan-stats">${ __9.members.length }/5 members. ${ __9.members.length < 3 ? 'Unprotected! Reach 3 members to protect your tiles.' : 'Your tiles are protected.' }</div>
        `;
    __10 += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let __38 of __9.members) {
      let __39 = __38.domain === __6.user.sites.find(__40 => __40.tile?.__47 === __38.__47 && __40.tile?.__82 === __38.__82)?.domain;
      __10 += `<div class="clan-member-item">
                <span class="clan-member-domain">${ __6.ui.escapeHTML(__38.domain) }</span>
                <div>`, __9.isOwner && __38.domain !== __6.user.selectedSite?.domain && (__10 += `<button class="clan-member-kick" data-domain="${ __6.ui.escapeHTML(__38.domain) }">Kick</button>`), __10 += `</div>
            </div>`;
    }
    if (__10 += '</div></div>', __9.isOwner && __9.pendingInvites && __9.pendingInvites.length > 0) {
      __10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let __38 of __9.pendingInvites)
        __10 += `<div class="clan-pending-item">
                    <span>${ __6.ui.escapeHTML(__38.domain) }</span>
                    <button class="clan-pending-cancel" data-invite="${ __38.id }">Cancel</button>
                </div>`;
      __10 += '</div></div>';
    }
    __9.isOwner && __9.members.length < 5 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), __8 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __5.setContent(__10);
    let __11 = [{
      text: 'Close',
      type: 'cancel',
      id: 'close',
      onClick: __38 => __38.close()
    }];
    __9.isOwner ? __11.unshift({
      text: 'Disband Clan',
      type: 'cancel',
      id: 'disband',
      onClick: async __38 => {
        if (confirm('Are you sure you want to disband this clan?')) {
          __38.setButtonLoading('disband', !0, 'Disbanding...');
          try {
            let __40 = await (await __6.api.makeRequest('/api/clans/disband', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __40.success ? (__38.close(), __6.ui.showClanModal()) : (alert(__40.error || 'Failed to disband clan'), __38.setButtonLoading('disband', !1));
          } catch (__39) {
            alert('Failed to disband clan: ' + __39.message), __38.setButtonLoading('disband', !1);
          }
        }
      }
    }) : __11.unshift({
      text: 'Leave Clan',
      type: 'cancel',
      id: 'leave',
      onClick: async __38 => {
        if (confirm('Are you sure you want to leave this clan?')) {
          __38.setButtonLoading('leave', !0, 'Leaving...');
          try {
            let __40 = await (await __6.api.makeRequest('/api/clans/leave', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __40.success ? (__38.close(), __6.ui.showClanModal()) : (alert(__40.error || 'Failed to leave clan'), __38.setButtonLoading('leave', !1));
          } catch (__39) {
            alert('Failed to leave clan: ' + __39.message), __38.setButtonLoading('leave', !1);
          }
        }
      }
    }), __5.buttons = __11;
    let __29 = __5.element.querySelector('.modal-actions');
    __29.innerHTML = '', __5._buttonElements.clear();
    for (let __38 of __5.buttons)
      __29.appendChild(__5._createButton(__38));
    __5.element.querySelectorAll('.clan-member-kick').forEach(__38 => {
      __38.addEventListener('click', async () => {
        let __39 = __38.dataset.domain;
        if (confirm(`Are you sure you want to kick ${ __39 }?`)) {
          __38.disabled = !0, __38.textContent = '...';
          try {
            let __42 = await (await __6.api.makeRequest('/api/clans/kick', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                domain: __39
              })
            })).json();
            __42.success ? (__6.ui.showClanModal(), __5.close()) : (alert(__42.error || 'Failed to kick member'), __38.disabled = !1, __38.textContent = 'Kick');
          } catch (__40) {
            alert('Failed to kick member: ' + __40.message), __38.disabled = !1, __38.textContent = 'Kick';
          }
        }
      });
    }), __5.element.querySelectorAll('.clan-pending-cancel').forEach(__38 => {
      __38.addEventListener('click', async () => {
        let __39 = __38.dataset.invite;
        __38.disabled = !0, __38.textContent = '...';
        try {
          let __42 = await (await __6.api.makeRequest('/api/clans/cancel-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__39)
            })
          })).json();
          __42.success ? __38.closest('.clan-pending-item').remove() : (alert(__42.error || 'Failed to cancel invite'), __38.disabled = !1, __38.textContent = 'Cancel');
        } catch (__40) {
          alert('Failed to cancel invite: ' + __40.message), __38.disabled = !1, __38.textContent = 'Cancel';
        }
      });
    });
    let __26 = __5.element.querySelector('#clan-invite-btn'),
      __36 = __5.element.querySelector('#clan-invite-domain');
    __26 && __36 && __26.addEventListener('click', async () => {
      let __38 = __36.value.trim();
      if (!__38) {
        alert('Please enter a domain');
        return;
      }
      __26.disabled = !0, __26.textContent = 'Sending...';
      try {
        let __40 = await (await __6.api.makeRequest('/api/clans/invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            domain: __38
          })
        })).json();
        __40.success ? (__36.value = '', __6.ui.showClanModal(), __5.close()) : (alert(__40.error || 'Failed to send invite'), __26.disabled = !1, __26.textContent = 'Send Invite');
      } catch (__39) {
        alert('Failed to send invite: ' + __39.message), __26.disabled = !1, __26.textContent = 'Send Invite';
      }
    });
    let __27 = __5.element.querySelector('#clan-admin-invites-btn');
    __27 && __27.addEventListener('click', () => {
      __5.close(), setTimeout(() => __6.ui.showAdminInvitesModal(), 50);
    });
    let __28 = __5.element.querySelector('#clan-admin-clans-btn');
    __28 && __28.addEventListener('click', () => {
      __5.close(), setTimeout(() => __6.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (__5, __9, __8) => {
    let __10 = '';
    if (__9.length > 0) {
      __10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let __27 of __9)
        __10 += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${ __6.ui.escapeHTML(__27.clan_name) }</strong>
                        ${ __27.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${ __6.ui.escapeHTML(__27.inviter_domain) }</span>` : '' }
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${ __27.id }">Accept</button>
                        <button class="clan-invite-reject" data-invite="${ __27.id }">Reject</button>
                    </div>
                </div>`;
      __10 += '</div></div>';
    }
    __10 += `<div class="clan-section">
            <div class="clan-section-title">Create a New Clan</div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">Create a clan to group neighboring tiles together (max 5 tiles).</p>
            <div class="code-input-container" style="margin: 5px 0;">
                <input type="text" id="clan-create-name" class="modal-input" placeholder="Clan name (3-20 chars, alphanumeric)" autocomplete="off" style="font-family: inherit;" maxlength="20" />
            </div>
            <button class="modal-btn modal-btn-confirm" id="clan-create-btn" style="margin-top: 5px;">Create Clan</button>
        </div>`, __8 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __5.setContent(__10), __5.element.querySelectorAll('.clan-invite-accept').forEach(__27 => {
      __27.addEventListener('click', async () => {
        let __28 = __27.dataset.invite;
        __27.disabled = !0, __27.textContent = '...';
        try {
          let __39 = await (await __6.api.makeRequest('/api/clans/accept-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__28)
            })
          })).json();
          __39.success ? (__6.ui.pendingClanInvites = __6.ui.pendingClanInvites.filter(__40 => __40.id !== parseInt(__28)), __6.ui.updateClanIndicator(), __6.ui.showClanModal(), __5.close()) : (alert(__39.error || 'Failed to accept invite'), __27.disabled = !1, __27.textContent = 'Accept');
        } catch (__38) {
          alert('Failed to accept invite: ' + __38.message), __27.disabled = !1, __27.textContent = 'Accept';
        }
      });
    }), __5.element.querySelectorAll('.clan-invite-reject').forEach(__27 => {
      __27.addEventListener('click', async () => {
        let __28 = __27.dataset.invite;
        __27.disabled = !0, __27.textContent = '...';
        try {
          let __39 = await (await __6.api.makeRequest('/api/clans/reject-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__28)
            })
          })).json();
          __39.success ? (__6.ui.pendingClanInvites = __6.ui.pendingClanInvites.filter(__40 => __40.id !== parseInt(__28)), __6.ui.updateClanIndicator(), __27.closest('.clan-invite-item').remove()) : (alert(__39.error || 'Failed to reject invite'), __27.disabled = !1, __27.textContent = 'Reject');
        } catch (__38) {
          alert('Failed to reject invite: ' + __38.message), __27.disabled = !1, __27.textContent = 'Reject';
        }
      });
    });
    let __11 = __5.element.querySelector('#clan-create-btn'),
      __29 = __5.element.querySelector('#clan-create-name');
    __11 && __29 && __11.addEventListener('click', async () => {
      let __27 = __29.value.trim();
      if (!__27) {
        alert('Please enter a clan name');
        return;
      }
      if (__27.length < 3 || __27.length > 20) {
        alert('Clan name must be between 3 and 20 characters');
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(__27)) {
        alert('Clan name must only contain letters and numbers');
        return;
      }
      __11.disabled = !0, __11.textContent = 'Creating...';
      try {
        let __38 = await (await __6.api.makeRequest('/api/clans/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: __27
          })
        })).json();
        __38.success ? (__6.ui.showClanModal(), __5.close()) : (alert(__38.error || 'Failed to create clan'), __11.disabled = !1, __11.textContent = 'Create Clan');
      } catch (__28) {
        alert('Failed to create clan: ' + __28.message), __11.disabled = !1, __11.textContent = 'Create Clan';
      }
    });
    let __26 = __5.element.querySelector('#clan-admin-invites-btn');
    __26 && __26.addEventListener('click', () => {
      __5.close(), setTimeout(() => __6.ui.showAdminInvitesModal(), 50);
    });
    let __36 = __5.element.querySelector('#clan-admin-clans-btn');
    __36 && __36.addEventListener('click', () => {
      __5.close(), setTimeout(() => __6.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let __5 = new __12({
      title: 'Admin: All Clan Invites',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __9 => {
            __9.close(), __6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __9 => __9.close()
        }
      ]
    });
    __5.open();
    try {
      let __8 = await (await __6.api.makeRequest('/api/clans/admin/invites')).json();
      if (__8.success)
        if (__8.invites.length === 0)
          __5.setContent('<p>No pending invites.</p>');
        else {
          let __10 = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let __11 of __8.invites)
            __10 += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${ __6.ui.escapeHTML(__11.domain) }</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${ __6.ui.escapeHTML(__11.clan_name) }</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${ __11.id }">Delete</button>
                        </div>`;
          __10 += '</div>', __5.setContent(__10), __5.element.querySelectorAll('.clan-invite-reject').forEach(__11 => {
            __11.addEventListener('click', async () => {
              let __29 = __11.dataset.invite;
              __11.disabled = !0, __11.textContent = '...';
              try {
                let __36 = await (await __6.api.makeRequest('/api/clans/admin/delete-invite', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    invite: parseInt(__29)
                  })
                })).json();
                __36.success ? __11.closest('.clan-invite-item').remove() : (alert(__36.error || 'Failed to delete invite'), __11.disabled = !1, __11.textContent = 'Delete');
              } catch (__26) {
                alert('Failed to delete invite: ' + __26.message), __11.disabled = !1, __11.textContent = 'Delete';
              }
            });
          });
        }
      else
        __5.setContent('<p>Failed to load invites: ' + __6.ui.escapeHTML(__8.error) + '</p>');
    } catch (__9) {
      __5.setContent('<p>Failed to load invites: ' + __6.ui.escapeHTML(__9.message) + '</p>');
    }
  },
  showAdminClansModal: async () => {
    let __5 = new __12({
      title: 'Admin: All Clans',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __9 => {
            __9.close(), __6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __9 => __9.close()
        }
      ]
    });
    __5.open();
    try {
      let __8 = await (await __6.api.makeRequest('/api/clans/admin/clans')).json();
      if (__8.success)
        if (__8.clans.length === 0)
          __5.setContent('<p>No clans.</p>');
        else {
          let __10 = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let __11 of __8.clans)
            __10 += `<div class="clan-member-item">
                            <div>
                                <div><strong>${ __6.ui.escapeHTML(__11.name) }</strong></div>
                                <div style="font-size: 11px; color: #888;">${ __11.member_count }/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${ __11.owner_x !== null && __11.owner_y !== null ? `<button class="clan-jump-owner" data-x="${ __11.owner_x }" data-y="${ __11.owner_y }">Jump</button>` : '' }
                                <button class="clan-member-kick" data-clan="${ __11.id }">Disband</button>
                            </div>
                        </div>`;
          __10 += '</div>', __5.setContent(__10), __5.element.querySelectorAll('.clan-jump-owner').forEach(__11 => {
            __11.addEventListener('click', () => {
              let __29 = parseInt(__11.dataset.__47),
                __26 = parseInt(__11.dataset.__82);
              __6.camera && !isNaN(__29) && !isNaN(__26) && (__6.camera.centerOn(__29 * 250 + 250 / 2, __26 * 250 + 250 / 2), __5.close());
            });
          }), __5.element.querySelectorAll('.clan-member-kick').forEach(__11 => {
            __11.addEventListener('click', async () => {
              let __29 = __11.dataset.clan;
              if (confirm('Are you sure you want to disband this clan?')) {
                __11.disabled = !0, __11.textContent = '...';
                try {
                  let __36 = await (await __6.api.makeRequest('/api/clans/admin/disband', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(__29)
                    })
                  })).json();
                  __36.success ? __11.closest('.clan-member-item').remove() : (alert(__36.error || 'Failed to disband clan'), __11.disabled = !1, __11.textContent = 'Disband');
                } catch (__26) {
                  alert('Failed to disband clan: ' + __26.message), __11.disabled = !1, __11.textContent = 'Disband';
                }
              }
            });
          });
        }
      else
        __5.setContent('<p>Failed to load clans: ' + __6.ui.escapeHTML(__8.error) + '</p>');
    } catch (__9) {
      __5.setContent('<p>Failed to load clans: ' + __6.ui.escapeHTML(__9.message) + '</p>');
    }
  },
  showFreeModal: __5 => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __9 = new __12({
      title: 'Free Tile',
      content: `
                <p>What would you like to do with the tile at (${ __5.__47 }, ${ __5.__82 })?</p>
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
        onClick: __11 => __11.close()
      }]
    });
    __9.open();
    let __8 = __9.element.querySelector('#option-transfer'),
      __10 = __9.element.querySelector('#option-free');
    __8.addEventListener('click', async () => {
      __8.disabled = !0, __10.disabled = !0, __8.innerHTML = '<strong>Loading...</strong>';
      try {
        let __29 = await (await __6.api.makeRequest('/api/getcode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            __47: __5.__47,
            __82: __5.__82
          })
        })).json();
        if (__29.success) {
          __9.setContent(`
                        <p>Share this code with another person to let them take your tile at (${ __5.__47 }, ${ __5.__82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __6.ui.escapeHTML(__29.code) }</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let __26 = __9.element.querySelector('#copy-code-btn');
          __26.addEventListener('click', () => {
            navigator.clipboard.writeText(__29.code), __26.textContent = 'Copied!', setTimeout(() => {
              __26.textContent = 'Copy';
            }, 1500);
          });
        } else
          alert(__29.error || 'Failed to get tile code'), __8.disabled = !1, __10.disabled = !1, __8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      } catch (__11) {
        console.error(__11), alert('Failed to get tile code: ' + __11.message), __8.disabled = !1, __10.disabled = !1, __8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      }
    }), __10.addEventListener('click', () => {
      __9.setContent(`<p>Are you sure you want to free the tile at (${ __5.__47 }, ${ __5.__82 })?</p><p>The tile for <strong>${ __6.ui.escapeHTML(__5.domain) }</strong> will become available for <strong>anyone</strong> to claim.</p>`), __9.buttons = [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __29 => {
            __29.close(), __6.ui.showFreeModal(__5);
          }
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __29 => {
            __29.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __36 = await (await __6.api.makeRequest('/api/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82
                })
              })).json();
              if (__36.success) {
                let __27 = __6.user.sites.find(__28 => __28.domain === __5.domain);
                __27 && (__27.tile = null), __5.setFree(), __5.setActive(!1), __29.close(), Q();
              } else
                alert(__36.error || 'Failed to free tile'), __29.setButtonLoading('confirm', !1);
            } catch (__26) {
              console.error(__26), alert('Failed to free tile: ' + __26.message), __29.setButtonLoading('confirm', !1);
            }
          }
        }
      ];
      let __11 = __9.element.querySelector('.modal-actions');
      __11.innerHTML = '', __9._buttonElements.clear();
      for (let __29 of __9.buttons)
        __11.appendChild(__9._createButton(__29));
    });
  },
  showTakeModal: __5 => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __9 = __6.user.selectedSite;
    if (!__9) {
      alert('Please select a site first');
      return;
    }
    let __8 = __9.domain,
      __10 = __9.tile ? `<strong>Warning</strong>Your current tile at (${ __9.tile.__47 }, ${ __9.tile.__82 }) will be freed and your site will be moved to this new tile.` : null,
      __11 = new __12({
        title: 'Take Tile',
        content: `
                <p>Enter the code to take the tile at (${ __5.__47 }, ${ __5.__82 }) for <strong>${ __6.ui.escapeHTML(__8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: __10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __29 => __29.close()
          },
          {
            text: 'Take Tile',
            type: 'confirm',
            id: 'confirm',
            onClick: async __29 => {
              let __36 = __11.element.querySelector('#take-code-input').value.trim();
              if (!__36) {
                alert('Please enter a code');
                return;
              }
              __29.setButtonLoading('confirm', !0, 'Taking...');
              try {
                let __28 = await (await __6.api.makeRequest('/api/take', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __47: __5.__47,
                    __82: __5.__82,
                    code: __36
                  })
                })).json();
                if (__28.success) {
                  if (__6.user.selectedSite && __6.user.selectedSite.tile) {
                    let __38 = __6.plot.getTile(__6.user.selectedSite.tile.__47, __6.user.selectedSite.tile.__82);
                    __38 && __38.setFree();
                  }
                  __6.user.selectedSite && (__6.user.selectedSite.tile = {
                    __47: __5.__47,
                    __82: __5.__82,
                    domain: __6.user.selectedSite.domain,
                    created_at: Date.now()
                  }), __5.setDomain(__8), __5.setActive(!1), __29.close(), Q();
                } else
                  alert(__28.error || 'Failed to take tile'), __29.setButtonLoading('confirm', !1);
              } catch (__27) {
                console.error(__27), alert('Failed to take tile: ' + __27.message), __29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __11.open(), setTimeout(() => {
      let __29 = __11.element.querySelector('#take-code-input');
      __29 && __29.focus();
    }, 100);
  },
  showAdminFreeModal: __5 => {
    new __12({
      title: 'Admin: Free Tile',
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${ __5.__47 }, ${ __5.__82 })?</p>
                <p>This will remove <strong>${ __6.ui.escapeHTML(__5.domain) }</strong> from this tile.</p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __8 => __8.close()
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __8 => {
            __8.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __11 = await (await __6.api.makeRequest('/api/admin/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82
                })
              })).json();
              __11.success ? (__5.setFree(), __5.setActive(!1), __8.close()) : (alert(__11.error || 'Failed to free tile'), __8.setButtonLoading('confirm', !1));
            } catch (__10) {
              console.error(__10), alert('Failed to free tile: ' + __10.message), __8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminBanModal: __5 => {
    new __12({
      title: 'Admin: Ban User',
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${ __6.ui.escapeHTML(__5.domain) }</strong>?</p>
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
          onClick: __8 => __8.close()
        },
        {
          text: 'Ban User',
          type: 'confirm',
          id: 'confirm',
          onClick: async __8 => {
            __8.setButtonLoading('confirm', !0, 'Banning...');
            try {
              let __11 = await (await __6.api.makeRequest('/api/admin/ban', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82
                })
              })).json();
              __11.success ? (__5.setFree(), __5.setActive(!1), __8.close(), alert('User banned.')) : (alert(__11.error || 'Failed to ban user'), __8.setButtonLoading('confirm', !1));
            } catch (__10) {
              console.error(__10), alert('Failed to ban user: ' + __10.message), __8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockModal: (__5, __9) => {
    let __8 = __9 ? 'unlock' : 'lock',
      __10 = __9 ? 'unlocked' : 'locked';
    new __12({
      title: `Admin: ${ __9 ? 'Unlock' : 'Lock' } Tile`,
      content: `
                <p>Are you sure you want to <strong>${ __8 }</strong> the tile at (${ __5.__47 }, ${ __5.__82 })?</p>
                ${ __9 ? '<p>This tile will become available for claiming again.</p>' : '<p>This tile will be reserved and cannot be claimed by regular users.</p>' }
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __29 => __29.close()
        },
        {
          text: __9 ? 'Unlock Tile' : 'Lock Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __29 => {
            __29.setButtonLoading('confirm', !0, __9 ? 'Unlocking...' : 'Locking...');
            try {
              let __36 = await (await __6.api.makeRequest('/api/admin/lock', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82,
                  lock: !__9
                })
              })).json();
              __36.success ? (__9 ? delete __6.plot.lockCache[__5.__47 + ',' + __5.__82] : __6.plot.lockCache[__5.__47 + ',' + __5.__82] = !0, __29.close(), __5.setActive(!1), __5.setActive(!0)) : (alert(__36.error || `Failed to ${ __8 } tile`), __29.setButtonLoading('confirm', !1));
            } catch (__26) {
              console.error(__26), alert(`Failed to ${ __8 } tile: ` + __26.message), __29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockCodeModal: async __5 => {
    try {
      let __8 = await (await __6.api.makeRequest(`/api/admin/lockcode?x=${ __5.__47 }&y=${ __5.__82 }`)).json();
      if (__8.success) {
        let __10 = new __12({
          title: 'Lock Code',
          content: `
                        <p>Lock code for tile at (${ __5.__47 }, ${ __5.__82 }):</p>
                        <div class="code-display">
                            <code id="lock-code">${ __6.ui.escapeHTML(__8.code) }</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __29 => __29.close()
          }]
        });
        __10.open();
        let __11 = __10.element.querySelector('#copy-lock-code-btn');
        __11.addEventListener('click', () => {
          navigator.clipboard.writeText(__8.code), __11.textContent = 'Copied!', setTimeout(() => {
            __11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__8.error || 'Failed to get lock code');
    } catch (__9) {
      console.error(__9), alert('Failed to get lock code: ' + __9.message);
    }
  },
  showAdminTileCodeModal: async __5 => {
    try {
      let __8 = await (await __6.api.makeRequest(`/api/admin/tilecode?x=${ __5.__47 }&y=${ __5.__82 }`)).json();
      if (__8.success) {
        let __10 = new __12({
          title: 'Tile Secret Code',
          content: `
                        <p>Secret code for tile at (${ __5.__47 }, ${ __5.__82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __6.ui.escapeHTML(__8.code) }</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __29 => __29.close()
          }]
        });
        __10.open();
        let __11 = __10.element.querySelector('#copy-tile-code-btn');
        __11.addEventListener('click', () => {
          navigator.clipboard.writeText(__8.code), __11.textContent = 'Copied!', setTimeout(() => {
            __11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__8.error || 'Failed to get tile code');
    } catch (__9) {
      console.error(__9), alert('Failed to get tile code: ' + __9.message);
    }
  },
  showAdminSwapModal: __5 => {
    let __9 = new __12({
      title: 'Admin: Swap Tiles',
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${ __5.__47 }, ${ __5.__82 }):</p>
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
          onClick: __8 => __8.close()
        },
        {
          text: 'Swap',
          type: 'confirm',
          id: 'confirm',
          onClick: async __8 => {
            let __10 = __9.element.querySelector('#swap-x-input'),
              __11 = __9.element.querySelector('#swap-y-input'),
              __29 = parseInt(__10.value.trim()),
              __26 = parseInt(__11.value.trim());
            if (isNaN(__29) || isNaN(__26)) {
              alert('Please enter valid X and Y coordinates');
              return;
            }
            if (__5.__47 === __29 && __5.__82 === __26) {
              alert('Cannot swap a tile with itself');
              return;
            }
            __8.setButtonLoading('confirm', !0, 'Swapping...');
            try {
              let __27 = await (await __6.api.makeRequest('/api/admin/swap', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  x1: __5.__47,
                  y1: __5.__82,
                  x2: __29,
                  y2: __26
                })
              })).json();
              __27.success ? (__8.close(), __5.setActive(!1), setTimeout(() => {
                let __28 = __6.plot.getTile(__5.__47, __5.__82),
                  __38 = __6.plot.getTile(__29, __26);
                __28 && (__28.setActive(!1), __28.fetchContent('/index.html', !0)), __38 && (__38.setActive(!1), __38.fetchContent('/index.html', !0));
              }, 100)) : (alert(__27.error || 'Failed to swap tiles'), __8.setButtonLoading('confirm', !1));
            } catch (__36) {
              console.error(__36), alert('Failed to swap tiles: ' + __36.message), __8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    });
    __9.open(), setTimeout(() => {
      let __8 = __9.element.querySelector('#swap-x-input');
      __8 && __8.focus();
    }, 100);
  },
  createAdminControl: __5 => {
    let __9 = __6.ui.createElement('div', {
      class: 'tile-admin-panel'
    });
    __5.free || (__9.appendChild(__6.ui.createElement('button', {
      innerText: 'Edit',
      onclick: () => {
        __6.ui.showDashboard(__5.domain);
      }
    })), __9.appendChild(__6.ui.createElement('span', {
      class: 'separator'
    })), __9.appendChild(__6.ui.createElement('button', {
      innerText: 'Free',
      onclick: () => {
        __6.ui.showAdminFreeModal(__5);
      }
    })), __9.appendChild(__6.ui.createElement('button', {
      class: 'danger',
      innerText: 'Ban',
      onclick: () => {
        __6.ui.showAdminBanModal(__5);
      }
    })), __9.appendChild(__6.ui.createElement('button', {
      innerText: 'Swap',
      onclick: () => {
        __6.ui.showAdminSwapModal(__5);
      }
    })));
    let __8 = __6.plot.lockCache[__5.__47 + ',' + __5.__82],
      __10 = __6.ui.createElement('button', {
        innerText: __8 ? 'Unlock' : 'Lock',
        onclick: async () => {
          try {
            let __29 = await (await __6.api.makeRequest(`/api/admin/lockstatus?x=${ __5.__47 }&y=${ __5.__82 }`)).json();
            __29.success ? __6.ui.showAdminLockModal(__5, __29.locked) : alert(__29.error || 'Failed to check lock status');
          } catch (__11) {
            console.error(__11), alert('Failed to check lock status: ' + __11.message);
          }
        }
      });
    if (__5.free || __9.appendChild(__6.ui.createElement('span', {
        class: 'separator'
      })), __9.appendChild(__10), __8) {
      let __11 = __6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __6.ui.showAdminLockCodeModal(__5);
        }
      });
      __9.appendChild(__11);
    }
    if (!__5.free) {
      let __11 = __6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __6.ui.showAdminTileCodeModal(__5);
        }
      });
      __9.appendChild(__11);
    }
    return __9;
  },
  createTileControl: __5 => {
    let __9 = __6.ui.createElement('div', {
        class: 'tile-info',
        innerHTML: `
                <div class="tile-domain">
                    ${ __5.domain ? `<a href="https://${ __6.ui.escapeHTML(__5.domain) }" target="_blank">${ __6.ui.escapeHTML(__5.domain) }</a>` : `${ __5.locked ? 'Locked tile' : 'Free tile' } ${ __5.__47 }, ${ __5.__82 }` }
                </div>
                <div class="tile-controls">
            `
      }),
      __8 = __9.querySelector('.tile-controls');
    if (__5.free)
      __6.plot.lockCache[__5.__47 + ',' + __5.__82] ? __8.appendChild(__6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Unlock',
        onclick: () => {
          __6.ui.showUnlockModal(__5);
        }
      })) : __8.appendChild(__6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Claim',
        onclick: () => {
          __6.ui.showClaimModal(__5);
        }
      }));
    else {
      let __10 = __6?.user?.sites?.find(__11 => __11.domain === __5.domain);
      if (__10 && (__8.appendChild(__6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Edit',
          onclick: () => {
            __6.ui.showDashboard(__5.domain);
          }
        })), __8.appendChild(__6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Give',
          onclick: () => {
            __6.ui.showFreeModal(__5);
          }
        }))), (!__10 || __6?.user?.selectedSite?.domain !== __5.domain && __6?.user?.sites?.length >= 2) && __8.appendChild(__6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Take',
          onclick: () => {
            __6.ui.showTakeModal(__5);
          }
        })), !__10 && __6?.user?.selectedSite?.tile) {
        let __11 = __6.user.selectedSite.tile;
        Math.abs(__11.__47 - __5.__47) <= 1 && Math.abs(__11.__82 - __5.__82) <= 1 && __6.ui.checkAndShowAttackButton(__5, __8);
      }
    }
    return __8.appendChild(__6.ui.createElement('button', {
      class: 'btn',
      innerHTML: 'Link',
      onclick: __10 => {
        __10.target.innerText = 'Copied!', setTimeout(() => {
          __10.target.innerText = 'Link';
        }, 500);
        let __11 = __5.__47 * 250 + 250 / 2,
          __29 = __5.__82 * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${ __11 },${ __29 }`);
      }
    })), __8.appendChild(__6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '\u27F3',
      onclick: () => {
        __5.fetchContent(__5.path, !0), __5.setActive(!1);
      }
    })), __8.appendChild(__6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '&times;',
      onclick: () => {
        __5.setActive(!1);
      }
    })), __9.appendChild(__8), __9;
  },
  createVoteMenu: __5 => {
    if (__5.free || !__5.domain)
      return null;
    let __9 = __6.ui.createElement('div', {
        class: 'tile-vote-menu'
      }),
      __8 = __6.ui.createElement('button', {
        class: 'vote-btn vote-up',
        innerHTML: '\u25B2',
        onclick: () => __6.ui.handleVote(__5, 1, __8, __11, __10)
      }),
      __10 = __6.ui.createElement('div', {
        class: 'vote-score',
        innerText: '...'
      }),
      __11 = __6.ui.createElement('button', {
        class: 'vote-btn vote-down',
        innerHTML: '\u25BC',
        onclick: () => __6.ui.handleVote(__5, -1, __8, __11, __10)
      });
    return __9.appendChild(__8), __9.appendChild(__10), __9.appendChild(__11), __6.ui.fetchVoteData(__5, __8, __11, __10), __9;
  },
  fetchVoteData: async (__5, __9, __8, __10) => {
    try {
      let __29 = await (await __6.api.makeRequest(`/api/votes/score?domain=${ encodeURIComponent(__5.domain) }`)).json();
      if (__29.success) {
        let __26 = __29.score || 0;
        __10.textContent = __26;
        let __36 = __29.myVote || 0;
        __9.classList.remove('active'), __8.classList.remove('active'), __36 === 1 ? __9.classList.add('active') : __36 === -1 && __8.classList.add('active');
      } else
        __10.textContent = '0';
    } catch (__11) {
      console.error('Failed to fetch vote score:', __11), __10.textContent = '0';
    }
  },
  handleVote: async (__5, __9, __8, __10, __11) => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __29 = __8.classList.contains('active'),
      __26 = __10.classList.contains('active'),
      __36 = __9;
    (__9 === 1 && __29 || __9 === -1 && __26) && (__36 = 0), __8.disabled = !0, __10.disabled = !0;
    try {
      let __28 = await (await __6.api.makeRequest('/api/votes/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: __5.domain,
          vote: __36
        })
      })).json();
      if (__28.success) {
        let __38 = __28.score || 0;
        __11.textContent = __38, __8.classList.remove('active'), __10.classList.remove('active'), __36 === 1 ? __8.classList.add('active') : __36 === -1 && __10.classList.add('active');
      } else
        alert(__28.error || 'Failed to vote');
    } catch (__27) {
      console.error('Failed to vote:', __27), alert('Failed to vote: ' + __27.message);
    } finally {
      __8.disabled = !1, __10.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (__5, __9) => {
    try {
      let __10 = await (await __6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(__5.domain) }`)).json();
      if (__10.success && __10.clan && __10.clan.members && __10.clan.members.length >= 3)
        return;
      __9.prepend(__6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __6.ui.showAttackModal(__5);
        }
      }));
    } catch (__8) {
      console.error('Failed to check clan for attack button:', __8), __9.prepend(__6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __6.ui.showAttackModal(__5);
        }
      }));
    }
  },
  showAttackModal: async __5 => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__6.user.selectedSite.tile) {
      alert('You must have a tile to attack from');
      return;
    }
    let __8 = __6.user.selectedSite.domain,
      __10 = __5.domain,
      __11 = 0,
      __29 = null,
      __26 = null;
    try {
      let __38 = await (await __6.api.makeRequest(`/api/attack/success-chance?attacked_domain=${ encodeURIComponent(__10) }`)).json();
      __38.success ? (__11 = __38.successChance, __29 = __38.cooldown) : __26 = __38.error || 'Failed to get attack success chance';
    } catch (__28) {
      console.error(__28), __26 = 'Failed to get attack success chance: ' + __28.message;
    }
    if (__26) {
      alert(__26);
      return;
    }
    if (__11 < 1) {
      alert('Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.');
      return;
    }
    let __36 = '';
    if (__29 && __29.isOnCooldown) {
      let __28 = __29.hoursRemaining;
      __36 = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${ __28 > 1 ? `Approximately ${ __28 } hours remaining until full chance.` : 'Less than 1 hour remaining until full chance.' }
                </p>
            `;
    }
    new __12({
      title: 'Attack Tile',
      content: `
                <p>
                    Attack the tile at (${ __5.__47 }, ${ __5.__82 }) owned by <strong>${ __6.ui.escapeHTML(__10) }</strong>?<br>
                    Attack success chance: ${ __11.toFixed(1) }%
                </p>
                ${ __36 }
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __28 => __28.close()
        },
        {
          text: 'Attack',
          type: 'confirm',
          id: 'confirm',
          onClick: async __28 => {
            __28.setButtonLoading('confirm', !0, 'Attacking...');
            try {
              let __39 = await (await __6.api.makeRequest('/api/attack/perform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __5.__47,
                  __82: __5.__82
                })
              })).json();
              if (__39.success) {
                __28.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                  let __42 = __6.plot.getTile(__6.user.selectedSite.tile.__47, __6.user.selectedSite.tile.__82);
                  __42 && (__42.fetchContent('/index.html', !0), __42.setActive(!1)), __5.fetchContent('/index.html', !0), __5.setActive(!1), __6.user.selectedSite && (__6.user.selectedSite.tile = {
                    __47: __5.__47,
                    __82: __5.__82,
                    domain: __8,
                    created_at: Date.now()
                  });
                }, 500), __28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __42 => __42.close()
                }];
                let __40 = __28.element.querySelector('.modal-actions');
                __40.innerHTML = '', __28._buttonElements.clear();
                for (let __42 of __28.buttons)
                  __40.appendChild(__28._createButton(__42));
              } else {
                __28.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${ __6.ui.escapeHTML(__39.error || 'The attack was unsuccessful.') }
                                    </p>
                                `), __28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __42 => __42.close()
                }];
                let __40 = __28.element.querySelector('.modal-actions');
                __40.innerHTML = '', __28._buttonElements.clear();
                for (let __42 of __28.buttons)
                  __40.appendChild(__28._createButton(__42));
              }
            } catch (__38) {
              console.error(__38), alert('Failed to attack tile: ' + __38.message), __28.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showEmbedModal: () => {
    if (!__6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__6.user.selectedSite.tile) {
      alert('Your site must have a tile to embed it');
      return;
    }
    let __5 = __6.user.selectedSite.domain,
      __9 = !1,
      __8 = __48 => {
        let __49 = `/e/${ __5 }`;
        return __48 ? `${ __49 }?dark=true` : __49;
      },
      __10 = __48 => `<iframe src="https://webtiles.kicya.net${ __8(__48) }" width="250" height="270" frameborder="0"></iframe>`,
      __11 = document.createElement('div');
    __11.style.cssText = 'display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;';
    let __29 = document.createElement('div');
    __29.style.cssText = 'min-width: 250px; max-width: 100%;';
    let __26 = document.createElement('h4');
    __26.textContent = 'Preview', __26.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __29.appendChild(__26);
    let __36 = document.createElement('iframe');
    __36.src = __8(__9), __36.width = '250', __36.height = '270', __36.style.cssText = 'border: 1px solid #ddd; border-radius: 4px;', __36.setAttribute('frameborder', '0'), __29.appendChild(__36);
    let __27 = document.createElement('div');
    __27.style.cssText = 'flex: 1; min-width: 300px; max-width: 100%;';
    let __28 = document.createElement('h4');
    __28.textContent = 'Embed Code', __28.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __27.appendChild(__28);
    let __38 = document.createElement('div');
    __38.style.cssText = 'margin-bottom: 10px; display: flex; align-items: center; gap: 3px;';
    let __39 = document.createElement('input');
    __39.type = 'checkbox', __39.id = 'embed-dark-mode', __39.style.cssText = 'cursor: pointer;';
    let __40 = document.createElement('label');
    __40.setAttribute('for', 'embed-dark-mode'), __40.textContent = 'Dark mode', __40.style.cssText = 'cursor: pointer; font-size: 13px; user-select: none;', __38.appendChild(__39), __38.appendChild(__40), __29.appendChild(__38);
    let __42 = document.createElement('textarea');
    __42.value = __10(__9), __42.style.cssText = 'width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;', __42.readOnly = !0, __27.appendChild(__42);
    let __43 = document.createElement('button');
    __43.textContent = 'Copy Code', __43.style.cssText = 'margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;', __43.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(__42.value), __43.textContent = 'Copied!', setTimeout(() => {
          __43.textContent = 'Copy Code';
        }, 2000);
      } catch {
        __42.select(), document.execCommand('copy'), __43.textContent = 'Copied!', setTimeout(() => {
          __43.textContent = 'Copy Code';
        }, 2000);
      }
    }), __27.appendChild(__43);
    let __44 = document.createElement('div');
    __44.style.cssText = 'font-size: 12px; color: #666; margin-top: 10px;', __44.innerHTML = 'You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.', __27.appendChild(__44), __39.addEventListener('change', __48 => {
      __9 = __48.target.checked, __36.src = __8(__9), __42.value = __10(__9);
    }), __11.appendChild(__29), __11.appendChild(__27);
    let __45 = new __12({
      title: 'Embed Tile',
      content: __11,
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __48 => __48.close()
      }]
    });
    __45.open(), __45.element && (__45.element.style.maxWidth = '700px');
  }
};

function __100() {
  if (!__6.user)
    return;
  let __5 = __6.ui.siteSelector.value,
    __9 = __6.user.sites.find(__10 => __10.domain === __5);
  __5 === 'select' || __5 === 'add' || !__9 ? (__6.ui.siteJumpButton.hidden = !0, __6.ui.siteEditButton.hidden = !0, __6.ui.siteEmbedButton.hidden = !0, __6.ui.siteClanButton.hidden = !0) : (__6.ui.siteEditButton.hidden = !1, __6.ui.siteJumpButton.hidden = !__9.tile, __6.ui.siteClanButton.hidden = !__9.tile, __6.ui.siteEmbedButton.hidden = !__9.tile), __6.user.selectedSite = __9;
  let __8 = __6?.plot?.activeTile;
  __8 && (__8.setActive(!1), __8.setActive(!0));
}
__6.ui.siteSelector && __6.ui.siteSelector.addEventListener('change', () => {
  if (!__6.user)
    return;
  let __5 = __6.ui.siteSelector.value;
  __5 === 'add' && (location.href = __6.user ? 'https://kicya.net/account/sites' : 'https://kicya.net/auth/register');
  let __9 = __6.user.sites.find(__8 => __8.domain === __5);
  if (__9) {
    document.cookie = `site=${ __9.domain }; path=/`;
    let __8 = document.querySelector('#kicya-site-select-option');
    __8 && __8.remove(), __6.ui.fetchClanInvites();
  }
  __100();
});
__100();
var __101 = document.getElementById('dashboard-modal'),
  __102 = document.getElementById('dashboard-iframe'),
  __103 = document.getElementById('dashboard-modal-close'),
  __104 = document.getElementById('dashboard-modal-title'),
  __105 = document.getElementById('app');
__6.ui.siteEditButton && __6.ui.siteEditButton.addEventListener('click', () => {
  !__6.user || !__6.user.selectedSite || __6.ui.showDashboard(__6.user.selectedSite.domain);
});
__6.ui.siteJumpButton && __6.ui.siteJumpButton.addEventListener('click', () => {
  if (!__6.user || !__6.user.selectedSite || !__6.user.selectedSite.tile)
    return;
  let __5 = __6.user.selectedSite.tile,
    __9 = __5.__47 * 250 + 250 / 2,
    __8 = __5.__82 * 250 + 250 / 2;
  __6.camera.centerOn(__9, __8);
});
__6.ui.siteCenterButton && __6.ui.siteCenterButton.addEventListener('click', () => {
  __6.camera && __6.camera.centerOn(100, 100);
});
__6.ui.siteClanButton && __6.ui.siteClanButton.addEventListener('click', () => {
  __6.ui.showClanModal();
});
__6.ui.siteEmbedButton && __6.ui.siteEmbedButton.addEventListener('click', () => {
  __6.ui.showEmbedModal();
});

function __106() {
  __101.classList.remove('active'), __102.src = '', __105 && (__105.style.display = ''), __6.camera && __6.camera.setZoomEnabled(!0);
}
__103 && __103.addEventListener('click', __106);
__6.ui.zoomSlider.addEventListener('input', __5 => {
  __6.camera.zoomTo(__6.camera.width / 2, __6.camera.height / 2, +__5.target.value);
});
var __107 = document.getElementById('kicya-menu-toggle'),
  __108 = document.getElementById('kicya-links');
__107 && __108 && (__107.addEventListener('click', function(__5) {
  __5.stopPropagation(), __108.classList.toggle('active');
}), document.addEventListener('click', function(__5) {
  !__108.contains(__5.target) && !__107.contains(__5.target) && __108.classList.remove('active');
}), __108.querySelectorAll('a').forEach(function(__5) {
  __5.addEventListener('click', function() {
    __108.classList.remove('active');
  });
}));

function __109() {
  if (!__6.user || localStorage.getItem('rules_accepted'))
    return;
  new __12({
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
      onClick: __9 => {
        localStorage.setItem('rules_accepted', '1'), __9.close();
      }
    }]
  }).open();
}
__109();
__6.user && __6.user.selectedSite && __6.ui.fetchClanInvites();
var __110 = __6.ui;
var __111 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let __9 = __6.api.getToken(),
      __8 = __6.api.getTokenExpiry();
    if (!__6.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!__9 || __8 < Date.now()) && await __6.api.showCaptchaModal();
    let __10 = 60000,
      __11 = Date.now();
    for (; !__6.api.getToken() || __6.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - __11 > __10) {
        console.error('[WS] Captcha timeout');
        let __29 = document.getElementById('loading-text');
        __29 && (__29.textContent = 'Verification timeout. Please refresh.');
        return;
      }
      await new Promise(__29 => setTimeout(__29, 100));
    }
    this.connect();
  }
  connect() {
    let __9 = location.protocol === 'https:' ? 'wss:' : 'ws:',
      __8 = __6.api.getToken() || '';
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${ __9 }//${ location.host }/ws?t=${ encodeURIComponent(__8) }`), this.ws.binaryType = 'arraybuffer', this.ws.onopen = () => {
      console.log('[WS] Connected'), this.connected = !0, this.consecutiveFailures = 0, this.emit('open');
      for (let __10 of this.messageQueue)
        this.ws.send(__10);
      this.messageQueue = [];
    }, this.ws.onmessage = __10 => {
      if (__10.data instanceof ArrayBuffer)
        for (let __11 of this.binaryHandlers)
          __11(__10.data);
      else
        try {
          let __11 = JSON.parse(__10.data);
          this.emit(__11.type, __11);
        } catch (__11) {
          console.error('[WS] Failed to parse message:', __11);
        }
    }, this.ws.onclose = __10 => {
      console.log('[WS] Disconnected, reconnecting...', __10.code, __10.reason);
      let __11 = this.connected;
      this.connected = !1, this.emit('close');
      let __29 = Date.now() - this.lastConnectionTime;
      !__11 && __29 < 1000 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = __10 => {
      console.error('[WS] Error:', __10);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout)
      return;
    let __9 = Math.min(3000 * Math.pow(2, this.consecutiveFailures), 30000);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let __8 = __6.api.getToken(),
        __10 = __6.api.getTokenExpiry();
      (!__8 || __10 < Date.now()) && await __6.api.showCaptchaModal();
      let __11 = 30000,
        __29 = Date.now();
      for (; !__6.api.getToken() || __6.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - __29 > __11) {
          console.error('[WS] Reconnect captcha timeout');
          return;
        }
        await new Promise(__26 => setTimeout(__26, 100));
      }
      this.connect();
    }, __9);
  }
  on(__9, __8) {
    this.handlers.has(__9) || this.handlers.set(__9, []), this.handlers.get(__9).push(__8);
  }
  off(__9, __8) {
    if (!this.handlers.has(__9))
      return;
    let __10 = this.handlers.get(__9),
      __11 = __10.indexOf(__8);
    __11 !== -1 && __10.splice(__11, 1);
  }
  onBinary(__9) {
    this.binaryHandlers.push(__9);
  }
  emit(__9, __8) {
    if (this.handlers.has(__9))
      for (let __10 of this.handlers.get(__9))
        __10(__8);
  }
  send(__9) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(__9) : typeof __9 == 'string' && this.messageQueue.push(__9);
  }
  sendJSON(__9) {
    this.send(JSON.stringify(__9));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
__6.ws = new __111();
var __112 = __6.ws;
var __113 = new Set([
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
  __114 = 100,
  __115 = 3,
  __116 = 5000,
  __117 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById('chat-container'), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector('#chat-header'), this.body = this.container.querySelector('#chat-body'), this.messagesEl = this.container.querySelector('#chat-messages'), this.input = this.container.querySelector('#chat-input'), this.sendBtn = this.container.querySelector('#chat-send'), this.toggleBtn = this.container.querySelector('#chat-toggle'), this.unreadEl = this.container.querySelector('#chat-unread'), this.header.addEventListener('click', () => this.toggle()), this.container.addEventListener('wheel', __9 => {
        __9.stopPropagation();
      }), this.messagesEl.addEventListener('click', __9 => {
        let __8 = __9.target.closest('.chat-coord-link');
        if (__8) {
          __9.preventDefault();
          let __10 = parseInt(__8.dataset.__47),
            __11 = parseInt(__8.dataset.__82),
            __26 = 50 / 2;
          !isNaN(__10) && !isNaN(__11) && __6.camera && __10 >= -__26 && __10 <= __26 && __11 >= -__26 && __11 <= __26 && __6.camera.centerOn(__10 * 250 + 250 / 2, __11 * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let __9 = document.createElement('div');
      __9.id = 'chat-resize-left', __9.className = 'chat-resize-handle', this.container.appendChild(__9);
      let __8 = document.createElement('div');
      __8.id = 'chat-resize-top', __8.className = 'chat-resize-handle', this.container.appendChild(__8);
      let __10 = document.createElement('div');
      __10.id = 'chat-resize-corner', __10.className = 'chat-resize-handle', this.container.appendChild(__10);
      let __11 = null,
        __29 = 0,
        __26 = 0,
        __36 = 0,
        __27 = 0,
        __28 = (__38, __39) => {
          this.isOpen && (__11 = __39, __29 = __38.clientX, __26 = __38.clientY, __36 = this.container.offsetWidth, __27 = this.container.offsetHeight, document.body.style.userSelect = 'none', __39 === 'left' ? document.body.style.cursor = 'ew-resize' : __39 === 'top' ? document.body.style.cursor = 'ns-resize' : document.body.style.cursor = 'nwse-resize', __38.preventDefault());
        };
      __9.addEventListener('mousedown', __38 => __28(__38, 'left')), __8.addEventListener('mousedown', __38 => __28(__38, 'top')), __10.addEventListener('mousedown', __38 => __28(__38, 'corner')), document.addEventListener('mousemove', __38 => {
        if (__11) {
          if (__11 === 'left' || __11 === 'corner') {
            let __39 = __29 - __38.clientX,
              __40 = Math.min(Math.max(__36 + __39, 250), 800);
            this.container.style.width = __40 + 'px';
          }
          if (__11 === 'top' || __11 === 'corner') {
            let __39 = __26 - __38.clientY,
              __40 = Math.min(Math.max(__27 + __39, 100), 700);
            this.container.style.height = __40 + 'px';
          }
        }
      }), document.addEventListener('mouseup', () => {
        __11 && (__11 = null, document.body.style.cursor = '', document.body.style.userSelect = '', this.saveSize());
      });
    }
    saveSize() {
      localStorage.setItem('chat-width', this.container.offsetWidth), localStorage.setItem('chat-height', this.container.offsetHeight);
    }
    restoreSize() {
      let __9 = localStorage.getItem('chat-width') ?? 525;
      if (__9) {
        let __10 = parseInt(__9, 10);
        __10 >= 250 && __10 <= 800 && (this.container.style.width = __10 + 'px');
      }
      let __8 = localStorage.getItem('chat-height') ?? 330;
      if (__8) {
        let __10 = parseInt(__8, 10);
        __10 >= 100 && __10 <= 700 && (this.container.style.height = __10 + 'px');
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
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener('click', __9 => {
        let __8 = __9.target.dataset.action;
        if (!(!__8 || !this.modMenuTarget)) {
          if (__8 === 'jump')
            this.jumpToUserTile(this.modMenuTarget.nick);
          else if (__8 === 'tell') {
            let __10 = `/tell ${ this.modMenuTarget.nick } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__8 === 'reply') {
            let __10 = `@${ this.modMenuTarget.nick } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__8 === 'clear')
            __6.ws.sendJSON({
              type: 'mod_action',
              action: 'clear_messages',
              target: this.modMenuTarget
            });
          else if (__8 === 'mute') {
            let __10 = prompt('Mute duration (e.g. 10m, 1h, 1d):', '1d');
            __10 && __6.ws.sendJSON({
              type: 'mod_action',
              action: 'mute',
              target: this.modMenuTarget,
              duration: __10
            });
          } else
            __8 === 'ban' && confirm(`Ban ${ this.modMenuTarget.nick }? This will also delete all their tiles.`) && __6.ws.sendJSON({
              type: 'mod_action',
              action: 'ban',
              target: this.modMenuTarget
            });
          this.hideModMenu();
        }
      }), document.addEventListener('click', __9 => {
        !this.modMenu.contains(__9.target) && !this.userMenu.contains(__9.target) && !__9.target.classList.contains('chat-nick') && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement('div'), this.userMenu.id = 'chat-user-menu', this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener('click', __9 => {
        let __8 = __9.target.dataset.action;
        if (!(!__8 || !this.userMenuTarget)) {
          if (__8 === 'jump')
            this.jumpToUserTile(this.userMenuTarget);
          else if (__8 === 'tell') {
            let __10 = `/tell ${ this.userMenuTarget } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__8 === 'reply') {
            let __10 = `@${ this.userMenuTarget } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(__9, __8, __10) {
      this.userMenuTarget = __9, this.userMenu.hidden = !1;
      let __11 = this.userMenu.getBoundingClientRect(),
        __29 = window.innerHeight,
        __26 = window.innerWidth;
      __10 + __11.height > __29 && (__10 = __29 - __11.height - 5), __8 + __11.width > __26 && (__8 = __26 - __11.width - 5), this.userMenu.style.left = __8 + 'px', this.userMenu.style.top = __10 + 'px';
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(__9) {
      if (!__6.plot?.tileCache)
        return null;
      for (let __8 in __6.plot.tileCache)
        for (let __10 in __6.plot.tileCache[__8]) {
          let __11 = __6.plot.tileCache[__8][__10];
          if ((typeof __11 == 'string' ? __11 : __11?.domain ?? null) === __9)
            return {
              __47: parseInt(__8),
              __82: parseInt(__10)
            };
        }
      return null;
    }
    findTileByDomain(__9) {
      if (!__6.plot?.tileCache)
        return null;
      for (let __8 in __6.plot.tileCache)
        for (let __10 in __6.plot.tileCache[__8]) {
          let __11 = __6.plot.tileCache[__8][__10];
          if ((typeof __11 == 'string' ? __11 : __11?.domain ?? null) === __9)
            return {
              __47: parseInt(__8),
              __82: parseInt(__10)
            };
        }
      return null;
    }
    jumpToUserTile(__9) {
      if (!__6.camera)
        return;
      let __8 = this.findUserTile(__9);
      __8 && __6.camera.centerOn(__8.__47 * 250 + 250 / 2, __8.__82 * 250 + 250 / 2);
    }
    jumpToDomain(__9) {
      if (!__6.camera)
        return !1;
      let __8 = this.findTileByDomain(__9);
      return __8 ? (__6.camera.centerOn(__8.__47 * 250 + 250 / 2, __8.__82 * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(__9, __8, __10) {
      if (__9.admin || __9.discord)
        return;
      this.modMenuTarget = __9, this.modMenu.querySelector('#mod-menu-user-id').textContent = __9.id || '-', this.modMenu.querySelector('#mod-menu-ip').textContent = __9.ip || '-', this.modMenu.hidden = !1;
      let __11 = this.modMenu.getBoundingClientRect(),
        __29 = window.innerHeight,
        __26 = window.innerWidth;
      __10 + __11.height > __29 && (__10 = __29 - __11.height - 5), __8 + __11.width > __26 && (__8 = __26 - __11.width - 5), this.modMenu.style.left = __8 + 'px', this.modMenu.style.top = __10 + 'px';
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let __9 = __6.ws;
      __9.on('chat_history', __8 => {
        this.messages = __8.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage('Welcome to the chat! The rules are as follows:'), this.showSystemMessage('1. There is zero tolerance for NSFW conversations. Do not discuss it in chat.'), this.showSystemMessage('2. Do not spam the chat.'), this.showSystemMessage('3. Do not troll, be edgy, annoying, or disruptive. Be kind to others.'), this.showSystemMessage('4. Keep conversations in English.'), this.showSystemMessage('Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands.'), this.showedRules = !0);
      }), __9.on('message', __8 => {
        this.addMessage(__8);
      }), __9.on('system_message', __8 => {
        this.showSystemMessage(__8.message);
      }), __9.on('chat_cleared', () => {
        this.messages = [], this.messagesEl.innerHTML = '', this.showSystemMessage('Chat has been cleared');
      }), __9.on('clear_user_messages', __8 => {
        this.messages = this.messages.filter(__10 => __10.nick !== __8.nick), this.renderMessages(), (__6.user?.admin || __6.user?.moderator) && this.showSystemMessage(`Messages from ${ __8.nick } have been cleared`);
      }), __9.on('user_muted', __8 => {
        this.showSystemMessage(`${ __8.nick } has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener('keydown', __9 => {
        __9.stopPropagation(), __9.key === 'Enter' && !__9.shiftKey && (__9.preventDefault(), this.sendMessage());
      }), this.input.addEventListener('keyup', __9 => {
        __9.stopPropagation();
      }), this.input.addEventListener('keypress', __9 => {
        __9.stopPropagation();
      }), this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? '\u2212' : '+', this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = 'auto';
    }
    addMessage(__9) {
      __9.time = Date.now();
      let __8 = __6.cursors?.currentNick,
        __10 = __6.user?.sites?.map(__11 => __11.domain);
      if (__8 && __9.message) {
        let __11 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          __29 = __9.message.matchAll(__11);
        for (let __26 of __29)
          if (__10.includes(__26[1])) {
            __9.isPinged = !0;
            try {
              let __36 = new Audio('/s/ping.mp3');
              __36.volume = 0.5, __36.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(__9), this.messages.length > __114 && this.messages.shift(), this.appendMessageEl(__9), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(__9) {
      return __9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
    escapeURL(__9) {
      return __9.replaceAll('"', '%22').replaceAll('\'', '%27').replaceAll('`', '%60');
    }
    escapeURLDisplay(__9) {
      return __9.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    parseMessage(__9) {
      let __8 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        __10 = [];
      __9 = __9.replace(__8, (__38, __39) => (__10.push(__39), `<span class="chat-ping">@${ this.escapeHTML(__39) }</span>`));
      let __11 = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        __29 = 250,
        __36 = 50 / 2;
      __9 = __9.replace(__11, (__38, __39, __40, __42) => {
        if (__39) {
          let __43 = __39.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (__43) {
            let __44 = parseInt(__43[1]),
              __45 = parseInt(__43[2]),
              __48 = Math.floor(__44 / __29),
              __49 = Math.floor(__45 / __29);
            if (__48 >= -__36 && __48 <= __36 && __49 >= -__36 && __49 <= __36)
              return `<a href="#" class="chat-coord-link" data-x="${ __48 }" data-y="${ __49 }">${ __48 }, ${ __49 }</a>`;
          }
          return `<a href="${ this.escapeURL(__39) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(this.escapeURL(__39)) }</a>`;
        }
        if (__40 && __113.has(__42.toLowerCase()) && !__10.includes(__40)) {
          let __43 = 'https://' + __40;
          return `<a href="${ this.escapeURL(__43) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(__40) }</a>`;
        }
        return __38;
      });
      let __27 = /(-?\d+),\s*(-?\d+)/g;
      __9 = __9.replace(__27, (__38, __39, __40) => {
        let __42 = parseInt(__39),
          __43 = parseInt(__40);
        return __42 >= -__36 && __42 <= __36 && __43 >= -__36 && __43 <= __36 ? `<a href="#" class="chat-coord-link" data-x="${ __39 }" data-y="${ __40 }">${ __38 }</a>` : __38;
      });
      let __28 = (__38, __39, __40, __42) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${ __42 }.${ __39 ? 'gif' : 'png' }?v=1" alt=":${ this.escapeHTML(__40) }:" title=":${ this.escapeHTML(__40) }:" width="20">`;
      return __9 = __9.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, __28), __9 = __9.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, __28), __9 = __9.replace(/\*\*([^*]+)\*\*/g, (__38, __39) => `<strong>${ __39 }</strong>`), __9 = __9.replace(/\*([^*]+)\*/g, (__38, __39) => `<em>${ __39 }</em>`), __9 = __9.replace(/~~([^~]+)~~/g, (__38, __39) => `<s>${ __39 }</s>`), __9 = __9.replace(/__([^_]+)__/g, (__38, __39) => `<u>${ __39 }</u>`), __9 = __9.replace(/\|\|([^|]+)\|\|/g, (__38, __39) => `<span class="chat-spoiler">${ __39 }</span>`), __9;
    }
    appendMessageEl(__9) {
      let __8 = document.createElement('div');
      __8.className = 'chat-message', __9.admin && __8.classList.add('chat-admin'), __9.mod && __8.classList.add('chat-mod'), __9.discord && __8.classList.add('chat-discord'), __9.isPinged && __8.classList.add('chat-pinged');
      let __10 = document.createElement('span');
      __10.className = 'chat-nick', __10.dataset.nick = __9.nick;
      let __11 = __6.user?.admin || __6.user?.moderator;
      __9.discord || (__10.classList.add('chat-nick-clickable'), __10.addEventListener('click', __38 => {
        __38.stopPropagation(), __11 && !__9.admin ? this.showModMenu(__9, __38.clientX, __38.clientY) : this.findUserTile(__9.nick) && this.showUserMenu(__9.nick, __38.clientX, __38.clientY);
      })), __9.admin ? __10.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(__9.nick) + ': ' : __9.mod ? __10.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(__9.nick) + ': ' : __9.discord ? __10.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(__9.nick) + ': ' : __10.textContent = __9.nick + ': ';
      let __29 = document.createElement('span');
      __29.className = 'chat-text', __9.admin || __9.mod ? __29.innerHTML = this.parseMessage(__9.message).replace(/\n/g, '<br>') : __29.innerHTML = this.parseMessage(this.escapeHTML(__9.message)).replace(/\n/g, '<br>');
      let __26 = __29.querySelectorAll('.emoji');
      for (let __38 of __26)
        __38.addEventListener('error', __39 => {
          __39.target.remove();
        });
      let __36 = __29.querySelectorAll('.chat-spoiler');
      for (let __38 of __36)
        __38.addEventListener('click', __39 => {
          __39.target.closest('.chat-spoiler').classList.toggle('chat-spoiler-revealed');
        });
      let __27 = document.createElement('span');
      __27.className = 'chat-time';
      let __28 = new Date(__9.time || Date.now());
      for (__27.textContent = __28.getHours().toString().padStart(2, '0') + ':' + __28.getMinutes().toString().padStart(2, '0'), __8.appendChild(__10), __8.appendChild(__29), __8.appendChild(__27), this.messagesEl.appendChild(__8); this.messagesEl.children.length > __114;)
        this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = '';
      for (let __9 of this.messages)
        this.appendMessageEl(__9);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(__9 = !1) {
      let __8 = this.messagesEl;
      (__8.scrollHeight - __8.scrollTop - __8.clientHeight <= 120 || __9) && (__8.scrollTop = __8.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!__6.user) {
        this.showSystemMessage('Please login to chat');
        return;
      }
      let __9 = this.input.value.trim();
      if (!__9 || __9.length > 500)
        return;
      let __8 = __9.split(`
`);
      if (__8.length > 5 && (__9 = __8.slice(0, 5).join(`
`)), __9 === '/help') {
        this.showSystemMessage('Available commands:'), this.showSystemMessage('/jump [domain] - Jump to a tile by domain'), this.showSystemMessage('/jump X Y - Jump to coordinates X, Y'), this.showSystemMessage('/tell [domain] [msg] - Send a message to a specific domain'), this.input.value = '';
        return;
      }
      if (__9.startsWith('/jump ') || __9.startsWith('/tp ')) {
        let __10 = __9.split(' ').slice(1).join(' ');
        if (__10) {
          let __11 = __10.match(/^(-?\d+)\s+(-?\d+)$/);
          if (__11) {
            let __29 = parseInt(__11[1]),
              __26 = parseInt(__11[2]),
              __27 = 50 / 2;
            !isNaN(__29) && !isNaN(__26) && __6.camera && __29 >= -__27 && __29 <= __27 && __26 >= -__27 && __26 <= __27 ? (__6.camera.centerOn(__29 * 250 + 250 / 2, __26 * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${ __29 }, ${ __26 }`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${ __27 } and ${ __27 }`);
          } else {
            let __29 = __10;
            this.jumpToDomain(__29) ? this.showSystemMessage(`Jumped to ${ __29 }`) : this.showSystemMessage(`Tile with domain "${ __29 }" not found`);
          }
        } else
          this.showSystemMessage('Usage: /jump [domain] or /jump X Y');
        this.input.value = '';
        return;
      }
      if (!__6.cursors?.currentNick) {
        this.showSystemMessage('Select a site to chat');
        return;
      }
      if (!__9.startsWith('/')) {
        let __10 = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(__11 => __10 - __11 < __116), this.messageTimestamps.length >= __115)
          return;
        this.messageTimestamps.push(__10);
      }
      __6.ws.sendJSON({
        type: 'message',
        value: __9
      }), this.input.value = '';
    }
    showSystemMessage(__9) {
      let __8 = document.createElement('div');
      __8.className = 'chat-message chat-system', __8.innerHTML = this.parseMessage(this.escapeHTML(__9)).replace(/\n/g, '<br>'), this.messagesEl.appendChild(__8), this.scrollToBottom();
    }
  };
__6.chat = new __117();
var __118 = __6.chat;
var __119 = document.getElementById('loading-text'),
  __120 = 0,
  __121 = setInterval(() => {
    __119.innerText = `Loading${ '.'.repeat(__120++ % 4) }`;
  }, 200),
  __122 = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById('plot'), this.worldSize = __34, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let __9 in this.tiles) {
          let __8 = this.tiles[__9];
          !__8.rendered && Date.now() - __8.lastRender > 30000 && delete this.tiles[__9];
        }
      }, 10000), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1000 * 60), setInterval(() => this.fetchTiles(), 1000 * 60), this.editorChannel = new BroadcastChannel('editor'), this.editorChannel.onmessage = __9 => {
        if (__9.data.type === 'saved') {
          let {
            path: __8,
            site: __10
          } = __9.data;
          this.refreshTile(__10, __8);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      __6.ws && (__6.ws.on('refresh', __9 => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          let __8 = null;
          for (let __10 in this.tileCache) {
            for (let __11 in this.tileCache[__10]) {
              let __29 = this.tileCache[__10][__11];
              if ((typeof __29 == 'string' ? null : __29?.domain ?? null) === __9.domain) {
                __8 = typeof __29 == 'object' && __29.updated_at ? __29.updated_at : Math.floor(Date.now() / 1000);
                break;
              }
            }
            if (__8 !== null)
              break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: 'tile-refresh',
            domain: __9.domain,
            lastUpdate: __8 || Math.floor(Date.now() / 1000)
          });
        }
        setTimeout(() => {
          this.refreshTile(__9.domain, __9.path);
        }, 500);
      }), __6.ws.on('claim', __9 => {
        this.tileCache[__9.__47] = this.tileCache[__9.__47] || {}, this.tileCache[__9.__47][__9.__82] = typeof __9.domain == 'string' ? {
          domain: __9.domain,
          updated_at: Math.floor(Date.now() / 1000)
        } : __9.domain;
        let __8 = this.tiles[`${ __9.__47 },${ __9.__82 }`];
        if (__8) {
          let __10 = typeof this.tileCache[__9.__47][__9.__82] == 'string' ? this.tileCache[__9.__47][__9.__82] : this.tileCache[__9.__47][__9.__82].domain;
          __8.setDomain(__10);
        }
      }), __6.ws.on('free', __9 => {
        this.tileCache[__9.__47] && delete this.tileCache[__9.__47][__9.__82];
        let __8 = this.tiles[`${ __9.__47 },${ __9.__82 }`];
        __8 && __8.setFree();
      }), __6.ws.on('lock', __9 => {
        __9.locked ? this.lockCache[__9.__47 + ',' + __9.__82] = !0 : delete this.lockCache[__9.__47 + ',' + __9.__82];
        let __8 = this.tiles[`${ __9.__47 },${ __9.__82 }`];
        __8 && __8.setLocked(__9.locked);
      }), __6.ws.on('user_count', __9 => {
        let __8 = document.getElementById('user-count');
        __8 && (__8.textContent = `${ __9.count } online`);
      }), __6.ws.on('clan_invite', __9 => {
        __9.invite && (__6.ui.pendingClanInvites.find(__10 => __10.id === __9.invite.id) || (__6.ui.pendingClanInvites.push({
          id: __9.invite.id,
          clan_id: __9.invite.clan_id,
          clan_name: __9.invite.clan_name
        }), __6.ui.updateClanIndicator()));
      }));
    }
    refreshTile(__9, __8) {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __10 = null;
        for (let __11 in this.tileCache) {
          for (let __29 in this.tileCache[__11]) {
            let __26 = this.tileCache[__11][__29];
            if ((typeof __26 == 'string' ? null : __26?.domain ?? null) === __9) {
              __10 = typeof __26 == 'object' && __26.updated_at ? __26.updated_at : Math.floor(Date.now() / 1000);
              break;
            }
          }
          if (__10 !== null)
            break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: 'tile-refresh',
          domain: __9,
          lastUpdate: __10 || Math.floor(Date.now() / 1000)
        });
      }
      for (let __10 in this.tiles) {
        let __11 = this.tiles[__10];
        if (__11.domain === __9 && __11.path === __8) {
          if (__11.active)
            break;
          __11.fetchContent(__11.path, !0);
          break;
        }
      }
    }
    addTile(__9) {
      this.tiles[`${ __9.__47 },${ __9.__82 }`] = __9;
    }
    getTile(__9, __8) {
      if (__9 > this.worldSize / 2 || __9 < -this.worldSize / 2 || __8 > this.worldSize / 2 || __8 < -this.worldSize / 2)
        return null;
      if (!this.tiles[`${ __9 },${ __8 }`]) {
        let __10 = this.tileCache?.[__9]?.[__8],
          __11 = typeof __10 == 'string' ? __10 : __10?.domain ?? null;
        this.tiles[`${ __9 },${ __8 }`] = new __99({
          __47: __9,
          __82: __8,
          domain: __11 ?? null
        });
      }
      return this.tiles[`${ __9 },${ __8 }`];
    }
    removeTile(__9) {
      __9.unrender(), delete this.tiles[`${ __9.__47 },${ __9.__82 }`];
    }
    clear() {
      Object.values(this.tiles).forEach(__9 => __9.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await __6.api.makeRequest('/api/tiles').then(__9 => __9.json())).tiles, 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __9 = {};
        for (let __8 in this.tileCache)
          for (let __10 in this.tileCache[__8]) {
            let __11 = this.tileCache[__8][__10];
            typeof __11 == 'object' && __11.domain && __11.updated_at && (__9[__11.domain] = __11.updated_at.toString());
          }
        Object.keys(__9).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: 'tile-updates',
          updates: __9
        });
      }
      for (let __9 in this.tileCache)
        for (let __8 in this.tileCache[__9]) {
          let __10 = this.tileCache[__9][__8],
            __11 = typeof __10 == 'string' ? __10 : __10?.domain ?? null,
            __29 = this.tiles[`${ __9 },${ __8 }`];
          __29 && __29.domain !== __11 && __29.setDomain(__11);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let __9 = document.getElementById('loading'),
          __8 = document.getElementById('app');
        __9.hidden = !0, __8.hidden = !1, clearInterval(__121);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await __6.api.makeRequest('/api/locks').then(__9 => __9.json())).locks;
      for (let __9 in this.lockCache) {
        let __8 = this.tiles[__9];
        __8 && __8.element && __8.setLocked(!0);
      }
    }
  };
__6.plot = new __122();
var __123 = document.getElementById('plot'),
  __124 = class {
    constructor() {
      if (this.__47 = 0, this.__82 = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith('#') && location.hash.includes(','))
        try {
          let [__39, __40] = location.hash.slice(1).split(',');
          this.centerOn(parseInt(__39), parseInt(__40)), location.hash = '';
        } catch {}
      let __9 = 0,
        __8 = 0;
      setInterval(() => {
        let __39 = this.__47 + this.width / 2,
          __40 = this.__82 + this.height / 2;
        (__39 != __9 || __40 != __8) && (__9 = __39, __8 = __40);
      }, 1000), window.addEventListener('resize', () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let __10 = 0;
      this.zoomEnabled = !0, this.wheelHandler = __39 => {
        if (!this.zoomEnabled || __39.target.closest('.tile.active'))
          return;
        __39.preventDefault();
        let __40 = __39.deltaY;
        if (Math.abs(__40) > 1 && Date.now() - __10 > 100) {
          let __43 = __33.indexOf(this.zoom) + (__40 > 0 ? -1 : 1);
          if (__43 >= 1 && __43 < __33.length) {
            let __44 = __6.mouse?.__47 || this.width / 2,
              __45 = __6.mouse?.__82 || this.height / 2;
            this.zoomTo(__44, __45, __33[__43]), __10 = Date.now();
          }
        }
      }, window.addEventListener('wheel', this.wheelHandler, {
        passive: !1
      });
      let __11 = 0,
        __29 = {
          __47: 0,
          __82: 0
        },
        __26 = __39 => {
          let __40 = __39[0].clientX - __39[1].clientX,
            __42 = __39[0].clientY - __39[1].clientY;
          return Math.sqrt(__40 * __40 + __42 * __42);
        },
        __36 = __39 => ({
          __47: (__39[0].clientX + __39[1].clientX) / 2,
          __82: (__39[0].clientY + __39[1].clientY) / 2
        });
      document.addEventListener('touchstart', __39 => {
        __39.touches.length === 2 && (__11 = __26(__39.touches), __29 = __36(__39.touches));
      }, {
        passive: !0
      }), document.addEventListener('touchmove', __39 => {
        if (this.zoomEnabled && __39.touches.length === 2) {
          if (__39.target.closest('.tile.active'))
            return;
          let __40 = __26(__39.touches),
            __42 = __36(__39.touches);
          if (__11 > 0) {
            let __43 = __40 / __11,
              __44 = __33.indexOf(this.zoom);
            __43 > 1.1 && __44 < __33.length - 1 ? (this.zoomTo(__42.__47, __42.__82, __33[__44 + 1]), __11 = __40) : __43 < 0.9 && __44 > 1 && (this.zoomTo(__42.__47, __42.__82, __33[__44 - 1]), __11 = __40);
          }
          __29 = __42, __39.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener('touchend', __39 => {
        __39.touches.length < 2 && (__11 = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let __27 = __39 => {
          __39.key in this.keysPressed && (__39.preventDefault(), this.keysPressed[__39.key] = !0);
        },
        __28 = __39 => {
          __39.key in this.keysPressed && (__39.preventDefault(), this.keysPressed[__39.key] = !1);
        };
      window.addEventListener('keydown', __27), window.addEventListener('keyup', __28);
      let __38 = () => {
        if (!__6.plot?.activeTile) {
          let __39 = 0,
            __40 = 0;
          this.keysPressed.ArrowLeft && (__39 -= this.moveSpeed), this.keysPressed.ArrowRight && (__39 += this.moveSpeed), this.keysPressed.ArrowUp && (__40 -= this.moveSpeed), this.keysPressed.ArrowDown && (__40 += this.moveSpeed), (__39 !== 0 || __40 !== 0) && this.move(this.__47 + __39, this.__82 + __40);
        }
        requestAnimationFrame(__38);
      };
      __38();
    }
    move(__9, __8) {
      this.__47 = Math.round(__9), this.__82 = Math.round(__8), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      __123.style.transform = `translate3d(${ -this.__47 }px, ${ -this.__82 }px, 0) scale(${ this.zoom })`;
    }
    zoomTo(__9, __8, __10) {
      let __11 = (this.__47 + __9) / this.zoom,
        __29 = (this.__82 + __8) / this.zoom;
      this.zoom = __10, this.__47 = __11 * this.zoom - __9, this.__82 = __29 * this.zoom - __8, __6.ui.zoomSlider.value = this.zoom, this.move(this.__47, this.__82);
    }
    centerOn(__9, __8) {
        let __10 = __9 * this.zoom - this.width / 2,
          __11 = __8 * this.zoom - this.height / 2;
        this.move(__10, __11);
      }
      * getTilesInView() {
        let __9 = __99.toTilePosition((this.__47 - 250 * this.zoom) / this.zoom, (this.__82 - 250 * this.zoom) / this.zoom),
          __8 = __99.toTilePosition((this.__47 + 250 * this.zoom + this.width) / this.zoom, (this.__82 + 250 * this.zoom + this.height) / this.zoom);
        for (let __10 = __9.__47; __10 < __8.__47; __10++)
          for (let __11 = __9.__82; __11 < __8.__82; __11++) {
            let __29 = __6.plot.getTile(__10, __11);
            __29 && (yield __29);
          }
      }
      * getTilesInViewWithBuffer(__9 = 500) {
        let __8 = __99.toTilePosition((this.__47 - 250 * this.zoom - __9) / this.zoom, (this.__82 - 250 * this.zoom - __9) / this.zoom),
          __10 = __99.toTilePosition((this.__47 + 250 * this.zoom + this.width + __9) / this.zoom, (this.__82 + 250 * this.zoom + this.height + __9) / this.zoom);
        for (let __11 = __8.__47; __11 < __10.__47; __11++)
          for (let __29 = __8.__82; __29 < __10.__82; __29++) {
            let __26 = __6.plot.getTile(__11, __29);
            __26 && (yield __26);
          }
      }
    isTileWithinBuffer(__9, __8 = 500) {
      let __10 = __9.__47 * 250,
        __11 = __9.__82 * 250,
        __29 = 250,
        __26 = this.__47 / this.zoom,
        __36 = (this.__47 + this.width) / this.zoom,
        __27 = this.__82 / this.zoom,
        __28 = (this.__82 + this.height) / this.zoom,
        __38 = __10 + __29,
        __39 = __11 + __29,
        __40 = __8 / this.zoom,
        __42 = 0;
      __38 < __26 ? __42 = __26 - __38 : __10 > __36 && (__42 = __10 - __36);
      let __43 = 0;
      return __39 < __27 ? __43 = __27 - __39 : __11 > __28 && (__43 = __11 - __28), Math.sqrt(__42 * __42 + __43 * __43) <= __40;
    }
    renderTilesInView() {
      let __9 = new Set(),
        __8 = 260;
      for (let __10 of this.getTilesInViewWithBuffer(__8))
        __10.render(), __9.add(__10);
      if (this.renderedTiles)
        for (let __10 of this.renderedTiles)
          __9.has(__10) || (this.isTileWithinBuffer(__10, __8) ? __9.add(__10) : __10.unrender());
      this.renderedTiles = __9;
    }
    setZoomEnabled(__9) {
      this.zoomEnabled = __9;
    }
  };
__6.camera = new __124();
var __125 = class {
  constructor() {
    this.__47 = 0, this.__82 = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let __9 = 0,
      __8 = 0,
      __10 = 0,
      __11 = 0,
      __29 = 0,
      __26 = (__28, __38, __39) => {
        if (!__39.closest('#plot') || __39.closest('.tile-info, .tile-admin-panel, .tile-vote-menu'))
          return !1;
        let __40 = __6.plot.getTile(this.tileX, this.tileY);
        return __6.plot.activeTile && __6.plot.activeTile.id === __40.id ? !1 : (this.down = !0, __10 = __28, __11 = __38, __9 = __6.camera.__47, __8 = __6.camera.__82, __29 = Date.now(), !0);
      },
      __36 = () => {
        if (!this.down)
          return;
        this.down = !1;
        let __28 = Math.abs(this.__47 - __10),
          __38 = Math.abs(this.__82 - __11);
        Date.now() - __29 < 400 && __28 < 10 && __38 < 10 && __6.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      __27 = (__28, __38) => {
        this.__47 = __28, this.__82 = __38;
        let __39 = __6.camera;
        this.worldX = (__39.__47 + this.__47) / __39.zoom, this.worldY = (__39.__82 + this.__82) / __39.zoom;
        let __40 = __99.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = __40.__47, this.tileY = __40.__82, __6.ui.coords.textContent = `${ this.tileX }, ${ this.tileY }`, document.documentElement.style.setProperty('--coords-width', __6.ui.coords.offsetWidth + 'px'), this.down) {
          let __42 = this.__47 - __10,
            __43 = this.__82 - __11;
          __39.move(__9 - __42, __8 - __43);
        }
      };
    document.addEventListener('mousedown', __28 => {
      __26(__28.clientX, __28.clientY, __28.target) && __28.preventDefault();
    }), document.addEventListener('mouseup', __28 => {
      __36();
    }), document.addEventListener('mousemove', __28 => {
      __27(__28.clientX, __28.clientY);
    }), document.addEventListener('touchstart', __28 => {
      if (__28.touches.length === 1) {
        let __38 = __28.touches[0];
        __26(__38.clientX, __38.clientY, __38.target);
      }
    }, {
      passive: !0
    }), document.addEventListener('touchend', __28 => {
      __36();
    }), document.addEventListener('touchcancel', __28 => {
      this.down = !1;
    }), document.addEventListener('touchmove', __28 => {
      if (__28.touches.length === 1) {
        let __38 = __28.touches[0];
        __27(__38.clientX, __38.clientY), this.down && __38.target.closest('#plot') && !__38.target.closest('.tile.active') && __28.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
__6.mouse = new __125();
var __126 = document.getElementById('plot'),
  __127 = document.getElementById('dashboard-modal'),
  __128 = '/s/img/cursor.png',
  __129 = 150,
  __130 = 50,
  __131 = 100,
  __132 = 100,
  __133 = 150,
  __134 = 500,
  __135 = 0.6,
  __136 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let __9 = __6.ws;
      __9.on('open', () => {
        this.sendNickIfSelected();
      }), __9.on('close', () => {
        this.clearAllCursors();
      }), __9.on('cursors', __8 => {
        for (let __10 of __8.cursors)
          this.addCursor(__10.id, __10.nick, __10.__47, __10.__82);
      }), __9.on('join', __8 => {
        this.addCursor(__8.id, __8.nick, 0, 0);
      }), __9.on('leave', __8 => {
        this.removeCursor(__8.id);
      }), __9.onBinary(__8 => {
        let __10 = new Int32Array(__8);
        if (__10.length >= 3) {
          let __11 = __10[0],
            __29 = __10[1],
            __26 = __10[2];
          this.updateCursorPosition(__11, __29, __26);
        }
      });
    }
    addCursor(__9, __8, __10, __11) {
      if (__8 === this.currentNick)
        return;
      if (this.cursors.has(__9)) {
        this.updateCursorPosition(__9, __10, __11);
        return;
      }
      this.cursors.set(__9, {
        id: __9,
        nick: __8,
        __47: __10,
        __82: __11,
        element: null
      }), this.updateElementPosition(__9, __10, __11);
      let __29 = this.cursors.get(__9);
      __29.element && (__29.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(__9) {
      let __8 = this.cursors.get(__9);
      __8 && (__8.element && __8.element.parentNode && __8.element.remove(), this.cursors.delete(__9));
    }
    updateCursorPosition(__9, __8, __10) {
      let __11 = this.cursors.get(__9);
      __11 && (__11.__47 = __8, __11.__82 = __10, this.updateElementPosition(__9, __8, __10));
    }
    isCursorOnScreen(__9, __8) {
      let __10 = __6.camera;
      if (!__10)
        return !0;
      let __11 = __10.__47 / __10.zoom,
        __29 = (__10.__47 + __10.width) / __10.zoom,
        __26 = __10.__82 / __10.zoom,
        __36 = (__10.__82 + __10.height) / __10.zoom;
      return __9 >= __11 && __9 <= __29 && __8 >= __26 && __8 <= __36;
    }
    updateElementPosition(__9, __8, __10) {
      let __11 = this.cursors.get(__9);
      if (!__11)
        return;
      let __29 = this.isCursorOnScreen(__8, __10);
      if (__8 === 0 && __10 === 0 || !__29)
        __11.element && __11.element.parentNode && (__11.element.remove(), __11.element = null);
      else {
        if (!__11.element || !__11.element.parentNode) {
          let __26 = document.createElement('div');
          __26.className = 'cursor-container', __26.innerHTML = `
                    <img class="cursor-image" src="${ __128 }" alt="cursor" />
                    <div class="cursor-nick">${ this.escapeHTML(__11.nick) }</div>
                `, __26.style.opacity = this.getCursorOpacityFromCenter(), __11.element = __26, __126.appendChild(__26);
        }
        __11.element.style.transform = `translate(${ __8 }px, ${ __10 }px)`, this.updateNickOpacity(__11.element, __8, __10);
      }
    }
    updateNickOpacity(__9, __8, __10) {
      let __11 = __9.querySelector('.cursor-nick');
      if (!__11)
        return;
      let __29 = this.mouseWorldX - __8,
        __26 = this.mouseWorldY - __10,
        __36 = Math.sqrt(__29 * __29 + __26 * __26),
        __27 = Math.max(0, 1 - __36 / __129);
      __11.style.opacity = __27;
    }
    updateAllNickOpacities() {
      for (let __9 of this.cursors.values())
        __9.element && this.updateNickOpacity(__9.element, __9.__47, __9.__82);
    }
    getCursorOpacityFromCenter() {
      let __9 = this.mouseWorldX - __131,
        __8 = this.mouseWorldY - __132,
        __10 = Math.sqrt(__9 * __9 + __8 * __8);
      return __10 <= __133 ? 0 : __10 >= __134 ? __135 : (__10 - __133) / (__134 - __133) * __135;
    }
    updateAllCursorOpacities() {
      let __9 = this.getCursorOpacityFromCenter();
      for (let __8 of this.cursors.values())
        __8.element && (__8.element.style.opacity = __9);
    }
    clearAllCursors() {
      for (let __9 of this.cursors.values())
        __9.element && __9.element.parentNode && __9.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let __9 of this.cursors.values())
        this.updateElementPosition(__9.id, __9.__47, __9.__82);
    }
    setupMouseTracking() {
      document.addEventListener('mousemove', __9 => {
        let __8 = __6.camera;
        if (!__8 || (this.mouseWorldX = Math.round((__8.__47 + __9.clientX) / __8.zoom), this.mouseWorldY = Math.round((__8.__82 + __9.clientY) / __8.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !__6.ws.isConnected) || !this.currentNick || __12.activeModal || __127?.classList.contains('active') || Date.now() - this.lastPositionSent < 25)
          return;
        let __10 = new Int16Array(3);
        __10[0] = this.mouseWorldX, __10[1] = this.mouseWorldY, __10[2] = 0, __6.ws.send(__10.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let __9 = __6.ui?.siteSelector;
      __9 && __9.addEventListener('change', () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener('resize', () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener('mousedown', __9 => {
        if (__9.button !== 1 || this.getCursorOpacityFromCenter() < 0.05)
          return;
        let __10 = this.getClosestCursor();
        __10 && __10.distance <= __130 && (__9.preventDefault(), window.open(`https://${ __10.cursor.nick }`, '_blank'));
      });
    }
    getClosestCursor() {
      let __9 = null,
        __8 = 1 / 0;
      for (let __10 of this.cursors.values()) {
        let __11 = this.mouseWorldX - __10.__47,
          __29 = this.mouseWorldY - __10.__82,
          __26 = Math.sqrt(__11 * __11 + __29 * __29);
        __26 < __8 && (__8 = __26, __9 = __10);
      }
      return __9 ? {
        cursor: __9,
        distance: __8
      } : null;
    }
    sendNickIfSelected() {
      if (!__6.ws.isConnected)
        return;
      let __9 = __6.user?.selectedSite;
      if (!__9 || !__9.domain) {
        this.currentNick = null;
        return;
      }
      let __8 = __9.domain;
      this.currentNick = __8;
      for (let [__10, __11] of this.cursors.entries())
        __11.nick === __8 && this.removeCursor(__10);
      __6.ws.sendJSON({
        type: 'nick',
        value: __8
      });
    }
    escapeHTML(__9) {
      return __9 ? __9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }
  },
  __137 = __136;
if ('serviceWorker' in navigator) {
  let __9 = 'sw_version',
    __8 = async () => {
      try {
        let __11 = await navigator.serviceWorker.register('/sw.js');
        return console.log('[SW] Service Worker registered:', __11.scope), __11;
      } catch (__11) {
        return console.error('[SW] Service Worker registration failed:', __11), null;
      }
    };
  (async () => {
    let __11 = localStorage.getItem(__9),
      __29 = '12';
    if (__11 !== __29) {
      console.log(`[SW] Version mismatch: stored=${ __11 }, current=${ __29 }`);
      let __26 = await navigator.serviceWorker.getRegistrations();
      for (let __27 of __26)
        await __27.unregister(), console.log('[SW] Unregistered old service worker');
      let __36 = await caches.keys();
      await Promise.all(__36.map(__27 => {
        if (__27.includes('webtiles'))
          return console.log(`[SW] Deleting cache: ${ __27 }`), caches.delete(__27);
      })), localStorage.setItem(__9, __29), await __8();
    } else
      (await navigator.serviceWorker.getRegistrations()).length === 0 && await __8();
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: 'clear-cache'
    });
  });
}
__6.cursors = new __137();
__6.user?.admin && (window.WebTiles = {
  ...__6,
  classes: {
    Tile: __99,
    Camera: __124,
    Plot: __122,
    Mouse: __125,
    Cursors: __137
  }
});
var __138 = Date.now();
async function __139() {
  let __9 = await (await __6.api.makeRequest('/s/dist/buildtime.txt')).text();
  return parseInt(__9);
}
__139().then(__5 => {
  __138 = __5;
});
var __140 = setInterval(async () => {
  let __5 = await __139();
  if (__5 !== __138) {
    clearInterval(__140), __138 = __5;
    let __9 = document.createElement('div');
    __9.id = 'update-toast', __9.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(__9), document.getElementById('refresh-btn').addEventListener('click', () => {
      location.reload();
    });
  }
}, 60000);