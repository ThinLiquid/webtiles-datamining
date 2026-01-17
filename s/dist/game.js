/* fa906080c32cba3cfdfff54e4ad49ebe51b079f754eafb6e9df390f45849a96b */
var __0 = Object.defineProperty;
var __1 = (__2, __3, __4) => __3 in __2 ? __0(__2, __3, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: __4
}) : __2[__3] = __4;
var __5 = (__2, __3, __4) => __1(__2, typeof __3 != 'symbol' ? __3 + '' : __3, __4);
var __6 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  __7 = document.getElementById('user-data');
if (__7)
  try {
    let __2 = JSON.parse(__7.textContent);
    __2 && __2.email_verified && (__6.user = __2);
  } catch (__2) {
    console.error(__2);
  }
var __8 = __6;
var __9 = class __9 {
  static init() {
    __9.container || (__9.container = document.createElement('div'), __9.container.id = 'modal-container', __9.container.className = 'modal-overlay', __9.container.addEventListener('click', __3 => {
      __3.target === __9.container && __9.activeModal && __9.activeModal.close();
    }), document.body.appendChild(__9.container));
  }
  constructor(__3 = {}) {
    this.title = __3.title || '', this.content = __3.content || '', this.warning = __3.warning || null, this.buttons = __3.buttons || [], this.onClose = __3.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(__3) {
    let __4 = document.createElement('button');
    return __4.className = `modal-btn modal-btn-${ __3.type || 'default' }`, __4.textContent = __3.text, __3.disabled && (__4.disabled = !0), __4.addEventListener('click', async () => {
      __3.onClick && await __3.onClick(this, __4);
    }), this._buttonElements.set(__3.id || __3.text, __4), __4;
  }
  _build() {
    let __3 = document.createElement('div');
    if (__3.className = 'modal-content', this.title) {
      let __4 = document.createElement('h3');
      __4.className = 'modal-title', __4.textContent = this.title, __3.appendChild(__4);
    }
    if (this.content) {
      let __4 = document.createElement('div');
      __4.className = 'modal-body', typeof this.content == 'string' ? __4.innerHTML = this.content : this.content instanceof HTMLElement && __4.appendChild(this.content), __3.appendChild(__4);
    }
    if (this._warningEl = document.createElement('div'), this._warningEl.className = 'modal-warning', this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none', __3.appendChild(this._warningEl), this.buttons.length > 0) {
      let __4 = document.createElement('div');
      __4.className = 'modal-actions';
      for (let __10 of this.buttons)
        __4.appendChild(this._createButton(__10));
      __3.appendChild(__4);
    }
    return this.element = __3, __3;
  }
  open() {
    return __9.init(), __9.activeModal && __9.activeModal.close(), this._build(), __9.container.innerHTML = '', __9.container.appendChild(this.element), __9.container.classList.add('active'), __9.activeModal = this, __8.camera && __8.camera.setZoomEnabled(!1), this;
  }
  close() {
    return __9.container && __9.container.classList.remove('active'), __9.activeModal = null, this._buttonElements.clear(), __8.camera && __8.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(__3) {
    let __4 = this.element?.querySelector('.modal-body');
    return __4 && (typeof __3 == 'string' ? __4.innerHTML = __3 : __3 instanceof HTMLElement && (__4.innerHTML = '', __4.appendChild(__3))), this.content = __3, this;
  }
  setWarning(__3) {
    return this._warningEl && (__3 ? (this._warningEl.innerHTML = __3, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none'), this.warning = __3, this;
  }
  getButton(__3) {
    return this._buttonElements.get(__3);
  }
  setButtonLoading(__3, __4, __10) {
    let __11 = this.getButton(__3);
    return __11 ? (__4 ? (__11._originalText = __11._originalText || __11.textContent, __11.textContent = __10 || 'Loading...', __11.disabled = !0) : (__11.textContent = __11._originalText || __11.textContent, __11.disabled = !1), this) : this;
  }
};
__5(__9, 'container', null), __5(__9, 'activeModal', null);
var __12 = __9;

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

function __23(__2, __3) {
  __15 = __2, __16 = __3, localStorage.setItem('captchaToken', __2), localStorage.setItem('captchaExpiresAt', __3);
}

function __24() {
  return __19 ? !0 : window.turnstile ? (__19 = !0, !0) : !1;
}

function __25(__2, __3) {
  if (!__24())
    return console.error('[Captcha] Turnstile not ready'), !1;
  let __4 = __13() || __14 || '';
  if (!__4)
    return !0;
  let __10 = typeof __2 == 'string' ? document.querySelector(__2) : __2;
  if (!__10)
    return console.error('[Captcha] Container not found:', __2), !1;
  __10.innerHTML = '';
  let __11 = window.turnstile;
  return __11.render(__10, {
    sitekey: __4,
    callback: async function(__26) {
      let __27 = document.getElementById('loading-text');
      __27 && (__27.textContent = 'Verifying...');
      try {
        let __28 = await (await fetch('/api/captcha/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnstileToken: __26
          })
        })).json();
        if (__28.success) {
          if (__23(__28.token, __28.expiresAt), __27 && (__27.textContent = 'Loading...'), __3 && __17) {
            __17.close(), __17 = null;
            let __29 = [...__18];
            __18 = [], __29.forEach(__30 => __30());
          }
        } else
          __27 && (__27.textContent = 'Verification failed. Please try again.'), __11.reset(__10);
      } catch (__31) {
        console.error('[Captcha] Verification error:', __31), __27 && (__27.textContent = 'Verification failed. Please try again.'), __11.reset(__10);
      }
    },
    'error-callback': function() {
      let __26 = document.getElementById('loading-text');
      __26 && (__26.textContent = 'Captcha failed. Please refresh.');
    },
    'expired-callback': function() {
      __11.reset(__10);
    }
  }), !0;
}

function __32() {
  if (__13())
    return new Promise(__2 => {
      if (Date.now() - __20 < __21) {
        __2();
        return;
      }
      if (__12.activeModal) {
        __18.push(__2);
        return;
      }
      __20 = Date.now(), __18.push(__2);
      let __4 = document.createElement('div');
      __4.id = 'captcha-modal-turnstile', __4.style.display = 'flex', __4.style.justifyContent = 'center', __4.style.padding = '20px';
      let __10 = document.createElement('div'),
        __11 = document.createElement('p');
      if (__11.textContent = 'Please complete the captcha to continue.', __10.appendChild(__11), __10.appendChild(__4), __17 = new __12({
          title: 'Verification Required',
          content: __10,
          buttons: [{
            text: 'Cancel',
            type: 'cancel',
            onClick: __26 => {
              __26.close(), __17 = null, __18 = [];
            }
          }],
          onClose: () => {
            __17 = null;
          }
        }), __17.open(), __24())
        __25(__4, !0);
      else {
        let __26 = setInterval(() => {
          __24() && (clearInterval(__26), __25(__4, !0));
        }, 100);
        setTimeout(() => clearInterval(__26), 10000);
      }
    });
}

function __33() {
  if (__15)
    return;
  let __2 = document.querySelector('#turnstile-container');
  if (__2)
    if (__24())
      __25(__2, !1);
    else {
      let __3 = setInterval(() => {
        __24() && (clearInterval(__3), __15 || __25(__2, !1));
      }, 100);
      setTimeout(() => clearInterval(__3), 10000);
    }
}
window.onTurnstileLoad = function() {
  __19 = !0, __15 || __33();
};
window.turnstile && (__19 = !0, __15 || __33());
__8.api = {
  getToken() {
    return __15;
  },
  getTokenExpiry() {
    return __16;
  },
  clearToken: __22,
  showCaptchaModal: __32,
  renderCaptchaOnLoadingScreen: __33,
  getTurnstileSiteKey: __13,
  async makeRequest(__2, __3 = {}) {
    let __4 = (__3.method || 'GET').toUpperCase();
    __4 !== 'GET' && __15 && (__3.headers = __3.headers || {}, __3.headers['X-Captcha-Token'] = __15);
    let __10 = await fetch(__2, __3);
    if (__10.status === 403) {
      let __11 = __10.clone();
      try {
        if ((await __11.json()).code === 'CAPTCHA_REQUIRED')
          return __22(), await __32(), __4 !== 'GET' && __15 && (__3.headers = __3.headers || {}, __3.headers['X-Captcha-Token'] = __15), fetch(__2, __3);
      } catch {}
    }
    return __10;
  }
};
var __34 = __8.api;
var __35 = [
    0.25,
    0.5,
    0.75,
    1,
    1.5
  ],
  __36 = 50;

function __37(__2, __3, __4) {
  let __10 = new WeakMap(),
    __11 = 2048,
    __26 = 10000,
    __27 = new WeakMap();

  function __31(__38) {}

  function __28() {
    __27.clear = new WeakMap();
  }

  function __29(__38, __39) {
    if (!__38)
      return null;
    if (__10.has(__38))
      return __10.get(__38);
    let __40 = __2.createObject(z);
    return __40.native = __38, __40.canvas = __39, __10.set(__38, __40), __40;
  }
  let __30 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'CanvasGradient', __30);
  let __41 = __2.getProperty(__30, 'prototype');
  __2.setProperty(__41, 'addColorStop', __2.createNativeFunction(function(__38, __39) {
    this.native.addColorStop(__38, __39);
  }));

  function __42(__38) {
    let __39 = __2.createObject(__30);
    return __39.native = __38, __39;
  }
  let __43 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'CanvasPattern', __43);

  function __44(__38) {
    let __39 = __2.createObject(__43);
    return __39.native = __38, __39;
  }
  let __45 = __2.createNativeFunction(function(__38, __39) {
    if (__38 > __11 || __39 > __11)
      throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
    __8.settings.logCalls && console.log(__4.domain, 'create ImageData', this, __38, __39);
    let __40 = new ImageData(__38, __39);
    this.native = __40, this.width = __38, this.height = __39;
  }, !0);
  __2.setProperty(__3, 'ImageData', __45);
  let __46 = __2.getProperty(__45, 'prototype');
  __2.setProperty(__46, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.width;
    })
  }), __2.setProperty(__46, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.height;
    })
  }), __2.setProperty(__46, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __38 = this.native.data,
        __39 = __2.createObjectProto(__2.ARRAY_PROTO);
      __2.setProperty(__39, 'length', __38.length);
      let __40 = __2.nativeToPseudo({});
      __2.setProperty(__40, 'length', __38.length), __2.setProperty(__40, 'get', __2.createNativeFunction(function(__47) {
        return __38[__47];
      })), __2.setProperty(__40, 'set', __2.createNativeFunction(function(__47, __48) {
        __8.settings.logCalls && console.log(__4.domain, 'setImageData', this, __47, __48), __38[__47] = __48;
      }));
      for (let __47 = 0; __47 < Math.min(__38.length, 1000); __47++)
        (__48 => {
          __2.setProperty(__40, __48, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __2.createNativeFunction(function() {
              return __38[__48];
            }),
            set: __2.createNativeFunction(function(__49) {
              __8.settings.logCalls && console.log(__4.domain, 'setImageData', this, __48, __49), __38[__48] = __49;
            })
          });
        })(__47);
      return __40;
    })
  });

  function __50(__38) {
    let __39 = __2.createObject(__45);
    return __39.native = __38, __39;
  }
  let __51 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'TextMetrics', __51);
  let __52 = __2.getProperty(__51, 'prototype'),
    __53 = [
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
  for (let __38 of __53)
    __2.setProperty(__52, __38, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__38];
      })
    });

  function __54(__38) {
    let __39 = __2.createObject(__51);
    return __39.native = __38, __39;
  }
  let __55 = __2.createNativeFunction(function(__38) {
    __38 && __38.native ? this.native = new Path2D(__38.native) : typeof __38 == 'string' ? this.native = new Path2D(__38) : this.native = new Path2D();
  }, !0);
  __2.setProperty(__3, 'Path2D', __55);
  let __56 = __2.getProperty(__55, 'prototype'),
    __57 = {
      addPath: function(__38, __39) {
        __38?.native && this.native.addPath(__38.native, __39);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__38, __39) {
        this.native.moveTo(__38, __39);
      },
      lineTo: function(__38, __39) {
        this.native.lineTo(__38, __39);
      },
      bezierCurveTo: function(__38, __39, __40, __47, __48, __49) {
        this.native.bezierCurveTo(__38, __39, __40, __47, __48, __49);
      },
      quadraticCurveTo: function(__38, __39, __40, __47) {
        this.native.quadraticCurveTo(__38, __39, __40, __47);
      },
      arc: function(__38, __39, __40, __47, __48, __49) {
        this.native.arc(__38, __39, __40, __47, __48, __49);
      },
      arcTo: function(__38, __39, __40, __47, __48) {
        this.native.arcTo(__38, __39, __40, __47, __48);
      },
      ellipse: function(__38, __39, __40, __47, __48, __49, __58, __59) {
        this.native.ellipse(__38, __39, __40, __47, __48, __49, __58, __59);
      },
      rect: function(__38, __39, __40, __47) {
        this.native.rect(__38, __39, __40, __47);
      },
      roundRect: function(__38, __39, __40, __47, __48) {
        this.native.roundRect(__38, __39, __40, __47, __48);
      }
    };
  for (let [__38, __39] of Object.entries(__57))
    __2.setProperty(__56, __38, __2.createNativeFunction(__39));
  let __60 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'CanvasRenderingContext2D', __60);
  let __61 = __2.getProperty(__60, 'prototype'),
    __62 = [
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
  for (let __38 of __62)
    __2.setProperty(__61, __38, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__38];
      }),
      set: __2.createNativeFunction(function(__39) {
        __8.settings.logCalls && console.log(__4.domain, 'context set ' + __38, this, __39), this.native[__38] = __39;
      })
    });
  for (let __38 of [
      'fillStyle',
      'strokeStyle'
    ])
    __2.setProperty(__61, __38, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __39 = this.native[__38];
        return __39;
      }),
      set: __2.createNativeFunction(function(__39) {
        __39?.native ? this.native[__38] = __39.native : this.native[__38] = __39;
      })
    });
  __2.setProperty(__61, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __63 = {
    clearRect: function(__38, __39, __40, __47) {
      this.native, this.native.clearRect(__38, __39, __40, __47);
    },
    fillRect: function(__38, __39, __40, __47) {
      this.native, this.native.fillRect(__38, __39, __40, __47);
    },
    strokeRect: function(__38, __39, __40, __47) {
      this.native, this.native.strokeRect(__38, __39, __40, __47);
    },
    fillText: function(__38, __39, __40, __47) {
      this.native, __47 !== void 0 ? this.native.fillText(String(__38).slice(0, 1000), __39, __40, __47) : this.native.fillText(String(__38).slice(0, 1000), __39, __40);
    },
    strokeText: function(__38, __39, __40, __47) {
      this.native, __47 !== void 0 ? this.native.strokeText(String(__38).slice(0, 1000), __39, __40, __47) : this.native.strokeText(String(__38).slice(0, 1000), __39, __40);
    },
    measureText: function(__38) {
      return __54(this.native.measureText(String(__38).slice(0, 1000)));
    },
    getLineDash: function() {
      return __2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__38) {
      let __39 = __2.pseudoToNative(__38);
      this.native.setLineDash(__39);
    },
    createLinearGradient: function(__38, __39, __40, __47) {
      return __42(this.native.createLinearGradient(__38, __39, __40, __47));
    },
    createRadialGradient: function(__38, __39, __40, __47, __48, __49) {
      return __42(this.native.createRadialGradient(__38, __39, __40, __47, __48, __49));
    },
    createConicGradient: function(__38, __39, __40) {
      return __42(this.native.createConicGradient(__38, __39, __40));
    },
    createPattern: function(__38, __39) {
      let __40 = __38?.native || __38;
      if (!__40)
        return null;
      let __47 = this.native.createPattern(__40, __39);
      return __47 ? __44(__47) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__38, __39) {
      this.native.moveTo(__38, __39);
    },
    lineTo: function(__38, __39) {
      this.native.lineTo(__38, __39);
    },
    bezierCurveTo: function(__38, __39, __40, __47, __48, __49) {
      this.native.bezierCurveTo(__38, __39, __40, __47, __48, __49);
    },
    quadraticCurveTo: function(__38, __39, __40, __47) {
      this.native.quadraticCurveTo(__38, __39, __40, __47);
    },
    arc: function(__38, __39, __40, __47, __48, __49) {
      this.native.arc(__38, __39, __40, __47, __48, __49);
    },
    arcTo: function(__38, __39, __40, __47, __48) {
      this.native.arcTo(__38, __39, __40, __47, __48);
    },
    ellipse: function(__38, __39, __40, __47, __48, __49, __58, __59) {
      this.native.ellipse(__38, __39, __40, __47, __48, __49, __58, __59);
    },
    rect: function(__38, __39, __40, __47) {
      this.native.rect(__38, __39, __40, __47);
    },
    roundRect: function(__38, __39, __40, __47, __48) {
      let __49 = __2.pseudoToNative(__48);
      this.native.roundRect(__38, __39, __40, __47, __49);
    },
    fill: function(__38, __39) {
      this.native, __38?.native ? this.native.fill(__38.native, __39) : this.native.fill(__38);
    },
    stroke: function(__38) {
      this.native, __38?.native ? this.native.stroke(__38.native) : this.native.stroke();
    },
    clip: function(__38, __39) {
      __38?.native ? this.native.clip(__38.native, __39) : this.native.clip(__38);
    },
    isPointInPath: function(__38, __39, __40, __47) {
      return __38?.native ? this.native.isPointInPath(__38.native, __39, __40, __47) : this.native.isPointInPath(__38, __39, __40);
    },
    isPointInStroke: function(__38, __39, __40) {
      return __38?.native ? this.native.isPointInStroke(__38.native, __39, __40) : this.native.isPointInStroke(__38, __39);
    },
    getTransform: function() {
      let __38 = this.native.getTransform();
      return __2.nativeToPseudo({
        a: __38.a,
        __42: __38.__42,
        __27: __38.__27,
        __30: __38.__30,
        __2: __38.__2,
        __45: __38.__45
      });
    },
    rotate: function(__38) {
      this.native.rotate(__38);
    },
    scale: function(__38, __39) {
      this.native.scale(__38, __39);
    },
    translate: function(__38, __39) {
      this.native.translate(__38, __39);
    },
    transform: function(__38, __39, __40, __47, __48, __49) {
      this.native.transform(__38, __39, __40, __47, __48, __49);
    },
    setTransform: function(__38, __39, __40, __47, __48, __49) {
      if (typeof __38 == 'object' && __38 !== null) {
        let __58 = __2.pseudoToNative(__38);
        this.native.setTransform(__58);
      } else
        this.native.setTransform(__38, __39, __40, __47, __48, __49);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__38, __39, __40, __47, __48, __49, __58, __59, __64) {
      this.native;
      let __65 = __38?.native || __38;
      __65 && (__59 !== void 0 ? this.native.drawImage(__65, __39, __40, __47, __48, __49, __58, __59, __64) : __47 !== void 0 ? this.native.drawImage(__65, __39, __40, __47, __48) : this.native.drawImage(__65, __39, __40));
    },
    createImageData: function(__38, __39) {
      if (__38?.native)
        return __50(this.native.createImageData(__38.native));
      if (__38 > __11 || __39 > __11)
        throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
      return __50(this.native.createImageData(__38, __39));
    },
    getImageData: function(__38, __39, __40, __47) {
      if (__40 > __11 || __47 > __11)
        throw new Error(`ImageData size exceeds maximum (${ __11 }x${ __11 })`);
      return __50(this.native.getImageData(__38, __39, __40, __47));
    },
    putImageData: function(__38, __39, __40, __47, __48, __49, __58) {
      this.native, __38?.native && (__47 !== void 0 ? this.native.putImageData(__38.native, __39, __40, __47, __48, __49, __58) : this.native.putImageData(__38.native, __39, __40));
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
  for (let [__38, __39] of Object.entries(__63))
    __2.setProperty(__61, __38, __2.createNativeFunction(__39));
  return {
    extendElement: function(__38, __39) {
      __2.setProperty(__38, 'getContext', __2.createNativeFunction(function(__40, __47) {
        __8.settings.logCalls && console.log(__4.domain, 'getContext', this, __40, __47);
        let __48 = this.native;
        if (__48.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__48.width > __11 && (__48.width = __11), __48.height > __11 && (__48.height = __11), __40 === '2d') {
          let __49 = __48.getContext('2d', __47 ? __2.pseudoToNative(__47) : void 0);
          return __29(__49, this);
        }
        throw new Error(`Context type "${ __40 }" is not supported`);
      })), __2.setProperty(__38, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __2.createNativeFunction(function(__40) {
          __8.settings.logCalls && console.log(__4.domain, 'set width', this, __40), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__40, __11));
        })
      }), __2.setProperty(__38, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __2.createNativeFunction(function(__40) {
          __8.settings.logCalls && console.log(__4.domain, 'set height', this, __40), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__40, __11));
        })
      }), __2.setProperty(__38, 'toDataURL', __2.createNativeFunction(function(__40, __47) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __8.settings.logCalls && console.log(__4.domain, 'toDataURL', this, __40, __47), this.native.toDataURL(__40, __47);
      }));
    },
    resetDrawCounts: __28,
    contextToPseudo: __29
  };
}

function __66(__2, __3, __4) {
  let __27 = 0,
    __31 = window.location.origin;

  function __28(__45) {
    if (typeof __45 != 'string' || __45.startsWith('/') || __45.startsWith('./') || __45.startsWith('../') || !__45.startsWith('http://') && !__45.startsWith('https://'))
      return !1;
    try {
      let __46 = new URL(__45);
      if (__46.origin === __31 || __46.hostname === 'kicya.net' || __46.hostname.endsWith('.kicya.net') || __46.hostname === 'nekoweb.org')
        return !1;
      let __50 = __46.hostname.toLowerCase();
      return !(__50 === 'localhost' || __50 === '127.0.0.1' || __50 === '0.0.0.0' || __50.startsWith('192.168.') || __50.startsWith('10.') || __50.startsWith('172.16.') || __50.startsWith('172.17.') || __50.startsWith('172.18.') || __50.startsWith('172.19.') || __50.startsWith('172.2') || __50.startsWith('172.30.') || __50.startsWith('172.31.') || __50 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __29 = 0,
    __30 = __2.nativeToPseudo({});
  __2.setProperty(__3, '__xhrCallbacks', __30);

  function __41(__45, ...__46) {
    if (!__45 || typeof __45 != 'object')
      return;
    let __50 = __29++;
    __2.setProperty(__30, 'fn' + __50, __45);
    let __51 = __46.map((__53, __54) => {
        let __55 = 'arg' + __50 + '_' + __54;
        return __2.setProperty(__30, __55, __53), __55;
      }),
      __52 = __51.map(__53 => `__xhrCallbacks.${ __53 }`).join(',');
    __2.appendCode(`__xhrCallbacks.fn${ __50 }(${ __52 }); delete __xhrCallbacks.fn${ __50 }; ${ __51.map(__53 => `delete __xhrCallbacks.${ __53 }`).join('; ') };`);
  }
  let __42 = __2.createNativeFunction(function() {
    __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __46 = this;
    this.native.onreadystatechange = function() {
      __2.setProperty(__46, 'readyState', __46.native.readyState), __46.native.readyState === 4 && (__2.setProperty(__46, 'status', __46.native.status), __2.setProperty(__46, 'statusText', __46.native.statusText), __2.setProperty(__46, 'responseText', __46.native.responseText?.slice(0, 5242880) || ''), __2.setProperty(__46, 'responseURL', __46.native.responseURL), __27 = Math.max(0, __27 - 1)), __46._eventHandlers.onreadystatechange && __41(__46._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __46._eventHandlers.onload && __41(__46._eventHandlers.onload);
    }, this.native.onerror = function() {
      __27 = Math.max(0, __27 - 1), __46._eventHandlers.onerror && __41(__46._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __27 = Math.max(0, __27 - 1), __46._eventHandlers.ontimeout && __41(__46._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __27 = Math.max(0, __27 - 1), __46._eventHandlers.onabort && __41(__46._eventHandlers.onabort);
    }, this.native.onprogress = function(__50) {
      if (__46._eventHandlers.onprogress) {
        let __51 = __2.nativeToPseudo({
          loaded: __50.loaded,
          total: __50.total,
          lengthComputable: __50.lengthComputable
        });
        __41(__46._eventHandlers.onprogress, __51);
      }
    }, this.native.onloadstart = function() {
      __46._eventHandlers.onloadstart && __41(__46._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __46._eventHandlers.onloadend && __41(__46._eventHandlers.onloadend);
    }, __2.setProperty(this, 'readyState', 0), __2.setProperty(this, 'status', 0), __2.setProperty(this, 'statusText', ''), __2.setProperty(this, 'responseText', ''), __2.setProperty(this, 'responseURL', '');
  }, !0);
  __2.setProperty(__3, 'XMLHttpRequest', __42);
  let __43 = __2.getProperty(__42, 'prototype');
  __2.setProperty(__42, 'UNSENT', 0), __2.setProperty(__42, 'OPENED', 1), __2.setProperty(__42, 'HEADERS_RECEIVED', 2), __2.setProperty(__42, 'LOADING', 3), __2.setProperty(__42, 'DONE', 4), __2.setProperty(__43, 'UNSENT', 0), __2.setProperty(__43, 'OPENED', 1), __2.setProperty(__43, 'HEADERS_RECEIVED', 2), __2.setProperty(__43, 'LOADING', 3), __2.setProperty(__43, 'DONE', 4);
  let __44 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __45 of __44)
    __2.setProperty(__43, __45, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this._eventHandlers[__45] || null;
      }),
      set: __2.createNativeFunction(function(__46) {
        __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest set ' + __45, this, __46), this._eventHandlers[__45] = __46;
      })
    });
  __2.setProperty(__43, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __2.createNativeFunction(function(__45) {
      this.native.timeout = Math.min(__45, 30000);
    })
  }), __2.setProperty(__43, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __2.createNativeFunction(function(__45) {
      this.native.withCredentials = !1;
    })
  }), __2.setProperty(__43, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __2.createNativeFunction(function(__45) {
      (__45 === '' || __45 === 'text' || __45 === 'json') && (this.native.responseType = __45);
    })
  }), __2.setProperty(__43, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __45 = this.native.response;
      return this.native.responseType === 'json' ? __2.nativeToPseudo(__45) : typeof __45 == 'string' ? __45.slice(0, 5242880) : __45;
    })
  }), __2.setProperty(__43, 'open', __2.createNativeFunction(function(__45, __46, __50, __51, __52) {
    if (!__28(__46))
      throw new Error(`XHR request blocked: URL "${ __46 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __53 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__45 = String(__45).toUpperCase(), !__53.includes(__45))
      throw new Error(`HTTP method "${ __45 }" is not allowed`);
    __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest open', this, __45, __46, __50, __51, __52), this._method = __45, this._url = __46, this._async = __50 !== !1, this.native.open(__45, __46, this._async), this.native.timeout = 30000, __2.setProperty(this, 'readyState', this.native.readyState);
  })), __2.setProperty(__43, 'setRequestHeader', __2.createNativeFunction(function(__45, __46) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__45.toLowerCase()))
      throw new Error(`Setting header "${ __45 }" is not allowed`);
    __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest setRequestHeader', this, __45, __46), this._headers[__45] = __46, this.native.setRequestHeader(__45, __46);
  })), __2.setProperty(__43, 'send', __2.createNativeFunction(function(__45) {
    if (__27 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest send', this, __45), __27++;
    let __46 = null;
    __45 != null && (typeof __45 == 'string' ? __46 = __45.slice(0, 5242880) : typeof __45 == 'object' && (__46 = JSON.stringify(__2.pseudoToNative(__45)))), this.native.send(__46);
  })), __2.setProperty(__43, 'abort', __2.createNativeFunction(function() {
    __8.settings.logCalls && console.log(__4.domain, 'XMLHttpRequest abort', this), this.native.abort(), __27 = Math.max(0, __27 - 1);
  })), __2.setProperty(__43, 'getResponseHeader', __2.createNativeFunction(function(__45) {
    return this.native.getResponseHeader(__45);
  })), __2.setProperty(__43, 'getAllResponseHeaders', __2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __2.setProperty(__43, 'overrideMimeType', __2.createNativeFunction(function(__45) {
    this.native.overrideMimeType(__45);
  }));
}
var __67 = 'webtiles_storage',
  __68 = 1,
  __69 = 'localStorage',
  __70 = 1024 * 1024,
  __71 = 100,
  __72 = null,
  __73 = null;

function __74() {
  return __73 || (__73 = new Promise((__2, __3) => {
    let __4 = indexedDB.open(__67, __68);
    __4.onerror = () => __3(__4.error), __4.onsuccess = () => {
      __72 = __4.result, __2(__72);
    }, __4.onupgradeneeded = __10 => {
      let __11 = __10.target.result;
      __11.objectStoreNames.contains(__69) || __11.createObjectStore(__69, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __73);
}
async function __75(__2, __3) {
  return await __74(), new Promise((__4, __10) => {
    let __27 = __72.transaction(__69, 'readonly').objectStore(__69).get([
      __2,
      __3
    ]);
    __27.onsuccess = () => __4(__27.result?.value ?? null), __27.onerror = () => __10(__27.error);
  });
}
async function __76(__2, __3, __4) {
  return await __74(), new Promise((__10, __11) => {
    let __31 = __72.transaction(__69, 'readwrite').objectStore(__69).put({
      site: __2,
      key: __3,
      value: __4
    });
    __31.onsuccess = () => __10(), __31.onerror = () => __11(__31.error);
  });
}
async function __77(__2, __3) {
  return await __74(), new Promise((__4, __10) => {
    let __27 = __72.transaction(__69, 'readwrite').objectStore(__69).delete([
      __2,
      __3
    ]);
    __27.onsuccess = () => __4(), __27.onerror = () => __10(__27.error);
  });
}
async function __78(__2) {
  return await __74(), new Promise((__3, __4) => {
    let __27 = __72.transaction(__69, 'readonly').objectStore(__69).index('site').getAll(__2);
    __27.onsuccess = () => {
      let __31 = __27.result.map(__28 => __28.key);
      __3(__31);
    }, __27.onerror = () => __4(__27.error);
  });
}
async function __79(__2) {
  return await __74(), new Promise((__3, __4) => {
    let __27 = __72.transaction(__69, 'readonly').objectStore(__69).index('site').getAll(__2);
    __27.onsuccess = () => {
      let __31 = 0;
      for (let __28 of __27.result)
        __31 += (__28.key.length + __28.value.length) * 2;
      __3({
        size: __31,
        count: __27.result.length
      });
    }, __27.onerror = () => __4(__27.error);
  });
}
async function __80(__2) {
  return await __74(), new Promise((__3, __4) => {
    let __27 = __72.transaction(__69, 'readwrite').objectStore(__69).index('site').openCursor(__2);
    __27.onsuccess = __31 => {
      let __28 = __31.target.result;
      __28 ? (__28.delete(), __28.continue()) : __3();
    }, __27.onerror = () => __4(__27.error);
  });
}

function __81(__2, __3, __4) {
  let __10 = __2.nativeToPseudo({});
  __2.setProperty(__10, 'getItem', __2.createAsyncFunction(function(__11, __26) {
    if (__8.settings.logCalls && console.log(__4, 'localStorage.getItem', this, __11), __11 == null) {
      __26(null);
      return;
    }
    __11 = String(__11), __75(__4, __11).then(__27 => __26(__27)).catch(__27 => {
      console.error('localStorage.getItem error:', __27), __26(null);
    });
  })), __2.setProperty(__10, 'setItem', __2.createAsyncFunction(function(__11, __26, __27) {
    if (__8.settings.logCalls && console.log(__4, 'localStorage.setItem', this, __11, __26), __11 == null) {
      __27();
      return;
    }
    __11 = String(__11), __26 = String(__26), __79(__4).then(({
      size: __31,
      count: __28
    }) => {
      __75(__4, __11).then(__29 => {
        if (__29 === null && __28 >= __71)
          throw new Error(`localStorage item limit exceeded (max ${ __71 } items)`);
        let __41 = __29 ? (__11.length + __29.length) * 2 : 0,
          __42 = (__11.length + __26.length) * 2;
        if (__31 - __41 + __42 > __70)
          throw new Error(`localStorage size limit exceeded (max ${ __70 / 1024 }KB)`);
        return __76(__4, __11, __26);
      }).then(() => __27()).catch(__29 => {
        throw console.error('localStorage.setItem error:', __29), __29;
      });
    }).catch(__31 => {
      console.error('localStorage.setItem error:', __31), __27();
    });
  })), __2.setProperty(__10, 'removeItem', __2.createAsyncFunction(function(__11, __26) {
    if (__8.settings.logCalls && console.log(__4, 'localStorage.removeItem', this, __11), __11 == null) {
      __26();
      return;
    }
    __11 = String(__11), __77(__4, __11).then(() => __26()).catch(__27 => {
      console.error('localStorage.removeItem error:', __27), __26();
    });
  })), __2.setProperty(__10, 'clear', __2.createAsyncFunction(function(__11) {
    __8.settings.logCalls && console.log(__4, 'localStorage.clear', this), __80(__4).then(() => __11()).catch(__26 => {
      console.error('localStorage.clear error:', __26), __11();
    });
  })), __2.setProperty(__10, 'key', __2.createAsyncFunction(function(__11, __26) {
    __11 = parseInt(__11) || 0, __78(__4).then(__27 => {
      __26(__11 >= 0 && __11 < __27.length ? __27[__11] : null);
    }).catch(__27 => {
      console.error('localStorage.key error:', __27), __26(null);
    });
  })), __2.setProperty(__10, 'getLength', __2.createAsyncFunction(function(__11) {
    __79(__4).then(({
      count: __26
    }) => __11(__26)).catch(__26 => {
      console.error('localStorage.getLength error:', __26), __11(0);
    });
  })), __2.setProperty(__3, 'localStorage', __10), __2.setProperty(__3, 'sessionStorage', __10);
}
__74().catch(__2 => {
  console.error('Failed to initialize storage DB:', __2);
});

function __82(__2, __3, __4, __10) {
  let __11 = __2.createNativeFunction(function() {}, !0);
  __2.setProperty(__3, 'DOMParser', __11);
  let __26 = __2.getProperty(__11, 'prototype');
  __2.setProperty(__26, 'parseFromString', __2.createNativeFunction(function(__27, __31) {
    if (__8.settings.logCalls && console.log(__10.domain, 'DOMParser parseFromString', this, __27, __31), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__31))
      throw new Error(`DOMParser: Unsupported MIME type "${ __31 }"`);
    if (typeof __27 != 'string' && (__27 = String(__27)), __27.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __30 = new DOMParser().parseFromString(__27, __31),
      __41 = __2.createObjectProto(__2.OBJECT_PROTO);

    function __42(__43) {
      if (__43 == null)
        return null;
      let __44 = __2.createObjectProto(__2.OBJECT_PROTO);
      return __44.native = __43, __44.fromDOMParser = !0, __2.setProperty(__44, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __2.setProperty(__44, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __2.setProperty(__44, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __2.createNativeFunction(function(__45) {
          __8.settings.logCalls && console.log(__10.domain, 'DOMParser set nodeValue', this, __45), this.native.nodeValue = __45;
        })
      }), __2.setProperty(__44, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __2.createNativeFunction(function(__45) {
          __8.settings.logCalls && console.log(__10.domain, 'DOMParser set textContent', this, __45), this.native.textContent = String(__45).slice(0, 50000);
        })
      }), __2.setProperty(__44, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __2.setProperty(__44, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __2.createNativeFunction(function(__45) {
          __8.settings.logCalls && console.log(__10.domain, 'DOMParser set id', this, __45), this.native.id = String(__45).slice(0, 100);
        })
      }), __2.setProperty(__44, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __2.createNativeFunction(function(__45) {
          __8.settings.logCalls && console.log(__10.domain, 'DOMParser set className', this, __45), this.native.className = String(__45).slice(0, 1000);
        })
      }), __2.setProperty(__44, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __2.createNativeFunction(function(__45) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __2.setProperty(__44, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __2.setProperty(__44, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __45 = Array.from(this.native.children),
            __46 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __50 = 0; __50 < __45.length; __50++)
            __2.setProperty(__46, __50, __42(__45[__50]));
          return __2.setProperty(__46, 'length', __45.length), __46;
        })
      }), __2.setProperty(__44, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __45 = Array.from(this.native.childNodes),
            __46 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __50 = 0; __50 < __45.length; __50++)
            __2.setProperty(__46, __50, __42(__45[__50]));
          return __2.setProperty(__46, 'length', __45.length), __46;
        })
      }), __2.setProperty(__44, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __42(this.native.firstChild);
        })
      }), __2.setProperty(__44, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __42(this.native.lastChild);
        })
      }), __2.setProperty(__44, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __42(this.native.firstElementChild);
        })
      }), __2.setProperty(__44, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __42(this.native.lastElementChild);
        })
      }), __2.setProperty(__44, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__4) ? null : (__8.settings.logCalls && console.log(__10.domain, 'DOMParser get parentNode', this), __42(this.native.parentNode));
        })
      }), __2.setProperty(__44, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__4) ? null : (__8.settings.logCalls && console.log(__10.domain, 'DOMParser get parentElement', this), __42(this.native.parentElement));
        })
      }), __2.setProperty(__44, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__4) ? null : (__8.settings.logCalls && console.log(__10.domain, 'DOMParser get nextSibling', this), __42(this.native.nextSibling));
        })
      }), __2.setProperty(__44, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__4) ? null : (__8.settings.logCalls && console.log(__10.domain, 'DOMParser get previousSibling', this), __42(this.native.previousSibling));
        })
      }), __2.setProperty(__44, 'getAttributeNames', __2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __45 = Array.from(this.native.getAttributeNames()),
          __46 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __50 = 0; __50 < __45.length; __50++)
          __2.setProperty(__46, __50, __45[__50]);
        return __2.setProperty(__46, 'length', __45.length), __46;
      })), __2.setProperty(__44, 'getAttribute', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__45);
      })), __2.setProperty(__44, 'setAttribute', __2.createNativeFunction(function(__45, __46) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__45 = String(__45).toLowerCase(), __45.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__45, String(__46)), __8.settings.logCalls && console.log(__10.domain, 'DOMParser set attribute', this, __45, __46);
      })), __2.setProperty(__44, 'hasAttribute', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__45);
      })), __2.setProperty(__44, 'removeAttribute', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__4))
          throw new Error('No access.');
        this.native.removeAttribute(__45), __8.settings.logCalls && console.log(__10.domain, 'DOMParser remove attribute', this, __45);
      })), __2.setProperty(__44, 'querySelector', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __42(this.native.querySelector(__45));
      })), __2.setProperty(__44, 'querySelectorAll', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __46 = Array.from(this.native.querySelectorAll(__45)),
          __50 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __51 = 0; __51 < __46.length; __51++)
          __2.setProperty(__50, __51, __42(__46[__51]));
        return __2.setProperty(__50, 'length', __46.length), __50;
      })), __2.setProperty(__44, 'getElementsByTagName', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __46 = Array.from(this.native.getElementsByTagName(__45)),
          __50 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __51 = 0; __51 < __46.length; __51++)
          __2.setProperty(__50, __51, __42(__46[__51]));
        return __2.setProperty(__50, 'length', __46.length), __50;
      })), __2.setProperty(__44, 'getElementsByClassName', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __46 = Array.from(this.native.getElementsByClassName(__45)),
          __50 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __51 = 0; __51 < __46.length; __51++)
          __2.setProperty(__50, __51, __42(__46[__51]));
        return __2.setProperty(__50, 'length', __46.length), __50;
      })), __2.setProperty(__44, 'getElementById', __2.createNativeFunction(function(__45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __42(this.native.getElementById ? this.native.getElementById(__45) : null);
      })), __44;
    }
    return __2.setProperty(__41, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42(__30.documentElement);
      })
    }), __2.setProperty(__41, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __8.settings.logCalls && console.log(__10.domain, 'DOMParser get head', this), __42(__30.head);
      })
    }), __2.setProperty(__41, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __8.settings.logCalls && console.log(__10.domain, 'DOMParser get body', this), __42(__30.body);
      })
    }), __2.setProperty(__41, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __30.title;
      })
    }), __2.setProperty(__41, 'querySelector', __2.createNativeFunction(function(__43) {
      return __42(__30.querySelector(__43));
    })), __2.setProperty(__41, 'querySelectorAll', __2.createNativeFunction(function(__43) {
      let __44 = Array.from(__30.querySelectorAll(__43)),
        __45 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __46 = 0; __46 < __44.length; __46++)
        __2.setProperty(__45, __46, __42(__44[__46]));
      return __2.setProperty(__45, 'length', __44.length), __45;
    })), __2.setProperty(__41, 'getElementById', __2.createNativeFunction(function(__43) {
      return __42(__30.getElementById(__43));
    })), __2.setProperty(__41, 'getElementsByTagName', __2.createNativeFunction(function(__43) {
      let __44 = Array.from(__30.getElementsByTagName(__43)),
        __45 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __46 = 0; __46 < __44.length; __46++)
        __2.setProperty(__45, __46, __42(__44[__46]));
      return __2.setProperty(__45, 'length', __44.length), __45;
    })), __2.setProperty(__41, 'getElementsByClassName', __2.createNativeFunction(function(__43) {
      let __44 = Array.from(__30.getElementsByClassName(__43)),
        __45 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __46 = 0; __46 < __44.length; __46++)
        __2.setProperty(__45, __46, __42(__44[__46]));
      return __2.setProperty(__45, 'length', __44.length), __45;
    })), __41;
  }));
}

function __83(__2, __3, __4, __10) {
  let __11 = new WeakMap(),
    __26 = 1000,
    __27 = 5,
    __31 = new WeakMap(),
    __28 = 0,
    __29 = __2.nativeToPseudo({});
  __2.setProperty(__3, '__eventCallbacks', __29);

  function __30(__65, __84) {
    let __85 = __28++;
    __2.setProperty(__29, 'fn' + __85, __65), __2.setProperty(__29, 'ev' + __85, __84), __2.appendCode(`__eventCallbacks.fn${ __85 }(__eventCallbacks.ev${ __85 }); delete __eventCallbacks.fn${ __85 }; delete __eventCallbacks.ev${ __85 };`);
  }

  function __41() {
    return __4.getElementsByTagName('*').length;
  }

  function __42(__65 = 1) {
    if (__41() + __65 > __26)
      throw new Error(`DOM element limit exceeded (max ${ __26 })`);
  }

  function __43(__65) {
    return __65 instanceof Element ? 1 + __65.getElementsByTagName('*').length : 0;
  }

  function __44(__65, __84 = !1) {
    if (__65 == null)
      return null;
    if (__11.has(__65))
      return __11.get(__65);
    let __85 = __65 instanceof Element ? __56 : __51,
      __86 = __2.createObject(__85);
    return __86.native = __65, __86.fromDOMParser || (__86.fromDOMParser = __84), __11.set(__65, __86), __86;
  }

  function __45(__65) {
    return __65 && __4.contains(__65);
  }

  function __46(__65) {
    return __45(__65) ? __65 : null;
  }

  function __50(__65) {
    let __84 = __2.createObjectProto(__2.ARRAY_PROTO);
    for (let __85 = 0; __85 < __65.length; __85++)
      __2.setProperty(__84, __85, __44(__65[__85]));
    return __2.setProperty(__84, 'length', __65.length), __84;
  }
  let __51 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'Node', __51);
  let __52 = __2.getProperty(__51, 'prototype'),
    __53 = {
      firstChild: function() {
        return __44(__46(this.native.firstChild));
      },
      lastChild: function() {
        return __44(__46(this.native.lastChild));
      },
      parentNode: function() {
        return __44(__46(this.native.parentNode));
      },
      parentElement: function() {
        return __44(__46(this.native.parentElement));
      },
      nextSibling: function() {
        return __44(__46(this.native.nextSibling));
      },
      previousSibling: function() {
        return __44(__46(this.native.previousSibling));
      },
      childNodes: function() {
        let __65 = Array.from(this.native.childNodes).filter(__45);
        return __50(__65);
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
    __54 = {
      textContent: function(__65) {
        __8.settings.logCalls && console.log(__10.domain, 'set textContent', this, __65), this.native.textContent = __65;
      },
      nodeValue: function(__65) {
        __8.settings.logCalls && console.log(__10.domain, 'set nodeValue', this, __65), this.native.nodeValue = __65;
      }
    };
  for (let [__65, __84] of Object.entries(__53)) {
    let __85 = {
      get: __2.createNativeFunction(__84)
    };
    __54[__65] && (__85.set = __2.createNativeFunction(__54[__65])), __2.setProperty(__52, __65, Interpreter.VALUE_IN_DESCRIPTOR, __85);
  }
  let __55 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__65) {
      if (!__65?.native)
        return null;
      if (__65.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __42(__43(__65.native)), this.native.appendChild(__65.native), __8.settings.logCalls && console.log(__10.domain, 'appendChild', this, __65), __65;
    },
    append: function(__65) {
      for (let __84 of __65)
        if (__84?.native) {
          if (__84.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __42(__43(__84.native)), this.native.appendChild(__84.native);
        }
      return __8.settings.logCalls && console.log(__10.domain, 'append', this, __65), __65;
    },
    removeChild: function(__65) {
      return !__65?.native || !__45(__65.native) ? null : (__8.settings.logCalls && console.log(__10.domain, 'removeChild', this, __65), __44(this.native.removeChild(__65.native)));
    },
    insertBefore: function(__65, __84) {
      if (!__65?.native)
        return null;
      if (__65.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__4))
        throw new Error('No access.');
      __42(__43(__65.native));
      let __85 = __84?.native || null;
      return this.native.insertBefore(__65.native, __85), __8.settings.logCalls && console.log(__10.domain, 'insertBefore', this, __65, __85), __65;
    },
    cloneNode: function(__65) {
      return __8.settings.logCalls && console.log(__10.domain, 'cloneNode', this, __65), __44(this.native.cloneNode(__65), this.fromDOMParser);
    },
    contains: function(__65) {
      return __65?.native ? this.native.contains(__65.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__4))
        throw new Error('No access.');
      this.native.remove(), __8.settings.logCalls && console.log(__10.domain, 'remove', this);
    },
    after: function(__65) {
      if (!__65?.native)
        return null;
      if (__65.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__4))
        throw new Error('No access.');
      return __42(__43(__65.native)), this.native.after(__65.native), __8.settings.logCalls && console.log(__10.domain, 'after', this, __65), __65;
    },
    before: function(__65) {
      if (!__65?.native)
        return null;
      if (__65.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__4))
        throw new Error('No access.');
      return __42(__43(__65.native)), this.native.before(__65.native), __8.settings.logCalls && console.log(__10.domain, 'before', this, __65), __65;
    }
  };
  for (let [__65, __84] of Object.entries(__55))
    __2.setProperty(__52, __65, __2.createNativeFunction(__84));
  let __56 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__3, 'Element', __56);
  let __57 = __2.createObject(__51);
  __2.setProperty(__56, 'prototype', __57);

  function __60(__65) {
    if (!__65)
      return '';
    __65 = String(__65);
    let __84 = __65.toLowerCase().trim();
    if (__84.startsWith('javascript:') || __84.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__84.startsWith('data:'))
      return __65;
    try {
      let __85 = new URL(__65, location.href);
      if (__85.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __86 = __85.pathname + __85.search + __85.hash;
      return __86.startsWith(`/t/${ __10.domain }/`) || (__86 = `/t/${ __10.domain }/${ __86 }`.replaceAll('//', '/')), __86;
    } catch (__85) {
      if (__85.message.includes('not allowed'))
        throw __85;
      let __86 = __65;
      return !__86.startsWith(`/t/${ __10.domain }/`) && !__86.startsWith('#') && (__86 = `/t/${ __10.domain }/${ __86 }`.replaceAll('//', '/')), __86;
    }
  }
  let __61 = {
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
        let __65 = Array.from(this.native.children).filter(__45);
        return __50(__65);
      },
      firstElementChild: function() {
        return __44(__46(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __44(__46(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __44(__46(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __44(__46(this.native.previousElementSibling));
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
    __62 = {
      innerText: function(__65) {
        this.native.innerText = __65.slice(0, 1000);
      },
      innerHTML: function(__65) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__65) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __65, __8.settings.logCalls && console.log(__10.domain, 'set id', this, __65);
      },
      className: function(__65) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __65, __8.settings.logCalls && console.log(__10.domain, 'set className', this, __65);
      },
      src: function(__65) {
        this.native.src = __60(__65), __8.settings.logCalls && console.log(__10.domain, 'set src', this, __65);
      },
      href: function(__65) {
        this.native.href = this.native.tagName === 'A' ? __65 : __60(__65), __8.settings.logCalls && console.log(__10.domain, 'set href', this, __65);
      },
      hidden: function(__65) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__65;
      },
      disabled: function(__65) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__65;
      },
      checked: function(__65) {
        this.native.checked = !!__65;
      },
      selected: function(__65) {
        this.native.selected = !!__65;
      },
      readOnly: function(__65) {
        this.native.readOnly = !!__65;
      },
      required: function(__65) {
        this.native.required = !!__65;
      },
      draggable: function(__65) {
        this.native.draggable = !!__65;
      },
      title: function(__65) {
        this.native.title = String(__65).slice(0, 1000);
      },
      alt: function(__65) {
        this.native.alt = String(__65).slice(0, 1000);
      },
      name: function(__65) {
        this.native.name = String(__65).slice(0, 100);
      },
      type: function(__65) {
        this.native.type = String(__65).slice(0, 50);
      },
      value: function(__65) {
        this.native.value = String(__65).slice(0, 10000);
      },
      placeholder: function(__65) {
        this.native.placeholder = String(__65).slice(0, 500);
      },
      tabIndex: function(__65) {
        this.native.tabIndex = parseInt(__65) || 0;
      },
      scrollTop: function(__65) {
        this.native.scrollTop = __65;
      },
      scrollLeft: function(__65) {
        this.native.scrollLeft = __65;
      },
      currentTime: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__65) || 0));
      },
      muted: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__65);
      },
      volume: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__65) || 0)));
      },
      loop: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__65);
      },
      autoplay: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__65);
      },
      controls: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__65);
      },
      playbackRate: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__65) || 1)));
      },
      defaultPlaybackRate: function(__65) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__65) || 1)));
      },
      preload: function(__65) {
        if (this.native instanceof HTMLMediaElement) {
          let __84 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __84.includes(__65) ? __65 : 'auto';
        }
      },
      poster: function(__65) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __60(__65));
      }
    };
  for (let [__65, __84] of Object.entries(__61)) {
    let __85 = {
      get: __2.createNativeFunction(__84)
    };
    __62[__65] && (__85.set = __2.createNativeFunction(__62[__65])), __2.setProperty(__57, __65, Interpreter.VALUE_IN_DESCRIPTOR, __85);
  }
  let __63 = {
    getAttributeNames: function() {
      let __65 = Array.from(this.native.getAttributeNames()),
        __84 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __85 = 0; __85 < __65.length; __85++)
        __2.setProperty(__84, __85, __65[__85]);
      return __2.setProperty(__84, 'length', __65.length), __84;
    },
    getAttribute: function(__65) {
      return this.native.getAttribute(__65);
    },
    setAttribute: function(__65, __84) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__65 = String(__65).toLowerCase(), __84 = String(__84), __8.settings.logCalls && console.log(__10.domain, 'setAttribute', this, __65, __84), __65 === 'style' && __84.includes('animation-play-state') && __84.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__65 === 'src' || __65 === 'poster' || __65 === 'data' || this.native.tagName !== 'A' && __65 === 'href') {
        this.native.setAttribute(__65, __60(__84));
        return;
      }
      if (__65 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__65 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__65 === 'action' || __65 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__65.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__65 === 'width' || __65 === 'height') {
        let __85 = parseFloat(__84);
        if (isNaN(__85) || __85 < 0 || __85 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__65, __84);
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
    scrollIntoView: function(__65) {
      __65 && typeof __65 == 'object' ? this.native.scrollIntoView(__2.pseudoToNative(__65)) : this.native.scrollIntoView(__65);
    },
    scrollTo: function(__65, __84) {
      this.native.scrollTo(__65, __84);
    },
    scrollBy: function(__65, __84) {
      this.native.scrollBy(__65, __84);
    },
    removeAttribute: function(__65) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__65 = String(__65).toLowerCase(), __65 === 'target')
        throw new Error('removing target is not allowed');
      __8.settings.logCalls && console.log(__10.domain, 'removeAttribute', this, __65), this.native.removeAttribute(__65);
    },
    hasAttribute: function(__65) {
      return this.native.hasAttribute(__65);
    },
    querySelector: function(__65) {
      let __84 = this.native.querySelector(__65);
      return __44(__46(__84));
    },
    querySelectorAll: function(__65) {
      let __84 = Array.from(this.native.querySelectorAll(__65)).filter(__45);
      return __50(__84);
    },
    getElementsByClassName: function(__65) {
      let __84 = Array.from(this.native.getElementsByClassName(__65)).filter(__45);
      return __50(__84);
    },
    getElementsByTagName: function(__65) {
      let __84 = Array.from(this.native.getElementsByTagName(__65)).filter(__45);
      return __50(__84);
    },
    closest: function(__65) {
      let __84 = this.native.closest(__65);
      for (; __84 && !__4.contains(__84);)
        __84 = null;
      return __44(__84);
    },
    matches: function(__65) {
      return this.native.matches(__65);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __65 = this.native.classList;
      return __2.nativeToPseudo({
        add: (...__84) => __65.add(...__84),
        remove: (...__84) => __65.remove(...__84),
        toggle: (__84, __85) => __65.toggle(__84, __85),
        contains: __84 => __65.contains(__84),
        replace: (__84, __85) => __65.replace(__84, __85)
      });
    },
    getBoundingClientRect: function() {
      let __65 = this.native.getBoundingClientRect();
      return __2.nativeToPseudo({
        __47: __65.__47,
        __85: __65.__85,
        width: __65.width,
        height: __65.height,
        top: __65.top,
        right: __65.right,
        bottom: __65.bottom,
        left: __65.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __2.createObjectProto(__2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __65 = __2.createObjectProto(__2.OBJECT_PROTO),
        __84 = this,
        __85 = null,
        __86 = null;
      return __8.settings.logCalls && console.log(__10.domain, 'play', this), __2.setProperty(__65, 'then', __2.createNativeFunction(function(__87) {
        return __85 = __87, __65;
      })), __2.setProperty(__65, 'catch', __2.createNativeFunction(function(__87) {
        return __86 = __87, __65;
      })), __84.native.play().then(() => {
        __85 && __30(__85, __2.nativeToPseudo(void 0));
      }).catch(__87 => {
        __86 && __30(__86, __2.nativeToPseudo({
          message: __87.message,
          name: __87.name
        }));
      }), __65;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__65) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__65 || '')) : '';
    },
    fastSeek: function(__65) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__65) || 0));
    },
    getAnimations: function(__65) {
      if (!this.native.getAnimations)
        return __50([]);
      let __84 = __65 ? {
          subtree: !!__2.pseudoToNative(__65)?.subtree
        } : {},
        __85 = this.native.getAnimations(__84),
        __86 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __87 = 0; __87 < __85.length; __87++)
        __86.properties[__87] = __38(__85[__87]);
      return __2.setProperty(__86, 'length', __85.length), __86;
    }
  };
  for (let [__65, __84] of Object.entries(__63))
    __2.setProperty(__57, __65, __2.createNativeFunction(__84));

  function __38(__65) {
    let __84 = __2.createObjectProto(__2.OBJECT_PROTO);
    return __2.setProperty(__84, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.id;
      })
    }), __2.setProperty(__84, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.playState;
      })
    }), __2.setProperty(__84, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.pending;
      })
    }), __2.setProperty(__84, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.replaceState;
      })
    }), __2.setProperty(__84, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.currentTime;
      }),
      set: __2.createNativeFunction(function(__85) {
        __65.currentTime = __85;
      })
    }), __2.setProperty(__84, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.playbackRate;
      }),
      set: __2.createNativeFunction(function(__85) {
        __65.playbackRate = Math.max(-10, Math.min(10, Number(__85) || 1));
      })
    }), __2.setProperty(__84, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __65.startTime;
      }),
      set: __2.createNativeFunction(function(__85) {
        __65.startTime = __85;
      })
    }), __2.setProperty(__84, 'play', __2.createNativeFunction(function() {
      __65.play();
    })), __2.setProperty(__84, 'pause', __2.createNativeFunction(function() {
      __65.pause();
    })), __2.setProperty(__84, 'cancel', __2.createNativeFunction(function() {
      __65.cancel();
    })), __2.setProperty(__84, 'finish', __2.createNativeFunction(function() {
      __65.finish();
    })), __2.setProperty(__84, 'reverse', __2.createNativeFunction(function() {
      __65.reverse();
    })), __2.setProperty(__84, 'updatePlaybackRate', __2.createNativeFunction(function(__85) {
      __65.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__85) || 1)));
    })), __84;
  }

  function __39(__65) {
    let __84 = __2.createObjectProto(__2.OBJECT_PROTO),
      __85 = __65 ? __65.length : 0;
    return __2.setProperty(__84, 'length', __85), __2.setProperty(__84, 'start', __2.createNativeFunction(function(__86) {
      if (!__65 || __86 < 0 || __86 >= __65.length)
        throw new Error('Index out of bounds');
      return __65.start(__86);
    })), __2.setProperty(__84, 'end', __2.createNativeFunction(function(__86) {
      if (!__65 || __86 < 0 || __86 >= __65.length)
        throw new Error('Index out of bounds');
      return __65.end(__86);
    })), __84;
  }
  __2.setProperty(__57, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __39(this.native.buffered) : __39(null);
    })
  }), __2.setProperty(__57, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __39(this.native.played) : __39(null);
    })
  }), __2.setProperty(__57, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __39(this.native.seekable) : __39(null);
    })
  }), __2.setProperty(__57, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __65 = this.native.classList,
        __84 = __2.nativeToPseudo({});
      return __2.setProperty(__84, 'add', __2.createNativeFunction(function(...__85) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __65.add(...__85);
      })), __2.setProperty(__84, 'remove', __2.createNativeFunction(function(...__85) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __65.remove(...__85);
      })), __2.setProperty(__84, 'toggle', __2.createNativeFunction(function(__85, __86) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __65.toggle(__85, __86);
      })), __2.setProperty(__84, 'contains', __2.createNativeFunction(function(__85) {
        return __65.contains(__85);
      })), __2.setProperty(__84, 'replace', __2.createNativeFunction(function(__85, __86) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __65.replace(__85, __86);
      })), __84;
    })
  }), __2.setProperty(__57, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __65 = this.native.style,
        __84 = __2.nativeToPseudo({}),
        __85 = [
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
      for (let __86 of __85)
        __2.setProperty(__84, __86, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __2.createNativeFunction(function() {
            return __65[__86];
          }),
          set: __2.createNativeFunction(function(__87) {
            __65[__86] = __87, __8.settings.logCalls && console.log(__10.domain, 'set style', this, __86, __87);
          })
        });
      return __2.setProperty(__84, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __65.cssText;
        }),
        set: __2.createNativeFunction(function(__86) {
          __65.cssText = __86, __8.settings.logCalls && console.log(__10.domain, 'set cssText', this, __86);
        })
      }), __2.setProperty(__84, 'setProperty', __2.createNativeFunction(function(__86, __87, __88) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __65.setProperty(__86, __87, __88), __8.settings.logCalls && console.log(__10.domain, 'setProperty', this, __86, __87, __88);
      })), __2.setProperty(__84, 'getPropertyValue', __2.createNativeFunction(function(__86) {
        return __65.getPropertyValue(__86);
      })), __2.setProperty(__84, 'removeProperty', __2.createNativeFunction(function(__86) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __8.settings.logCalls && console.log(__10.domain, 'removeProperty', this, __86), __65.removeProperty(__86);
      })), __84;
    })
  }), __2.setProperty(__57, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __65 = this.native.dataset,
        __84 = __2.nativeToPseudo({});
      for (let __85 in __65)
        __2.setProperty(__84, __85, __65[__85]);
      return __2.setProperty(__84, 'get', __2.createNativeFunction(function(__85) {
        return __65[__85];
      })), __2.setProperty(__84, 'set', __2.createNativeFunction(function(__85, __86) {
        __65[__85] = String(__86).slice(0, 1000), __8.settings.logCalls && console.log(__10.domain, 'set dataset', this, __85, __86);
      })), __2.setProperty(__84, 'delete', __2.createNativeFunction(function(__85) {
        delete __65[__85], __8.settings.logCalls && console.log(__10.domain, 'delete dataset', this, __85);
      })), __2.setProperty(__84, 'has', __2.createNativeFunction(function(__85) {
        return __85 in __65;
      })), __84;
    })
  }), __2.setProperty(__57, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __44(__46(this.native.offsetParent));
    })
  });
  let __40 = [
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

  function __47(__65) {
    let __84 = __2.nativeToPseudo({}),
      __85 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __86 of __85)
      __2.setProperty(__84, __86, __65[__86]);
    if (__65 instanceof MouseEvent || __65 instanceof PointerEvent) {
      let __86 = [
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
      for (let __87 of __86)
        __2.setProperty(__84, __87, __65[__87]);
    }
    if (__65 instanceof KeyboardEvent) {
      let __86 = [
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
      for (let __87 of __86)
        __2.setProperty(__84, __87, __65[__87]);
    }
    return typeof TouchEvent == 'function' && __65 instanceof TouchEvent && (__2.setProperty(__84, 'touches', __2.nativeToPseudo({
      length: __65.touches.length
    })), __2.setProperty(__84, 'changedTouches', __2.nativeToPseudo({
      length: __65.changedTouches.length
    }))), typeof WheelEvent == 'function' && __65 instanceof WheelEvent && (__2.setProperty(__84, 'deltaX', __65.deltaX), __2.setProperty(__84, 'deltaY', __65.deltaY), __2.setProperty(__84, 'deltaZ', __65.deltaZ), __2.setProperty(__84, 'deltaMode', __65.deltaMode)), __65.target && __45(__65.target) && __2.setProperty(__84, 'target', __44(__65.target)), __65.currentTarget && __45(__65.currentTarget) && __2.setProperty(__84, 'currentTarget', __44(__65.currentTarget)), __2.setProperty(__84, 'preventDefault', __2.createNativeFunction(function() {
      __65.preventDefault();
    })), __2.setProperty(__84, 'stopPropagation', __2.createNativeFunction(function() {
      __65.stopPropagation();
    })), __2.setProperty(__84, 'stopImmediatePropagation', __2.createNativeFunction(function() {
      __65.stopImmediatePropagation();
    })), __84;
  }
  __2.setProperty(__57, 'addEventListener', __2.createNativeFunction(function(__65, __84) {
    if (!__65 || typeof __65 != 'string' || !__84 || typeof __84 != 'object')
      return;
    if (__65 = __65.toLowerCase(), !__40.includes(__65))
      throw new Error(`Event type "${ __65 }" is not allowed`);
    __8.settings.logCalls && console.log(__10.domain, 'addEventListener', this, __65, __84);
    let __85 = this.native;
    __31.has(__85) || __31.set(__85, new Map());
    let __86 = __31.get(__85);
    __86.has(__65) || __86.set(__65, []);
    let __87 = __86.get(__65);
    if (__87.length >= __27)
      throw new Error(`Maximum listeners (${ __27 }) reached for event "${ __65 }"`);
    if (__87.some(__89 => __89.pseudo === __84))
      return;
    let __88 = function(__89) {
      let __90 = __47(__89);
      __30(__84, __90);
    };
    __87.push({
      pseudo: __84,
      native: __88
    }), __85.addEventListener(__65, __88);
  })), __2.setProperty(__57, 'removeEventListener', __2.createNativeFunction(function(__65, __84) {
    if (!__65 || typeof __65 != 'string' || !__84 || typeof __84 != 'object')
      return;
    __8.settings.logCalls && console.log(__10.domain, 'removeEventListener', this, __65, __84), __65 = __65.toLowerCase();
    let __85 = this.native;
    if (!__31.has(__85))
      return;
    let __86 = __31.get(__85);
    if (!__86.has(__65))
      return;
    let __87 = __86.get(__65),
      __88 = __87.findIndex(__89 => __89.pseudo === __84);
    __88 !== -1 && (__85.removeEventListener(__65, __87[__88].native), __87.splice(__88, 1));
  }));
  let __48 = [
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
  for (let __65 of __48) {
    let __84 = 'on' + __65;
    __2.setProperty(__57, __84, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __85 = this.native;
        if (!__31.has(__85))
          return null;
        let __86 = __31.get(__85),
          __87 = `__${ __84 }`;
        return __86.get(__87) || null;
      }),
      set: __2.createNativeFunction(function(__85) {
        let __86 = this.native;
        __31.has(__86) || __31.set(__86, new Map());
        let __87 = __31.get(__86),
          __88 = `__${ __84 }`;
        __8.settings.logCalls && console.log(__10.domain, 'setOn' + __65, this, __85);
        let __89 = __87.get(__88 + '_native');
        if (__89 && (__86.removeEventListener(__65, __89), __87.delete(__88), __87.delete(__88 + '_native')), __85 && typeof __85 == 'object') {
          let __90 = function(__91) {
            let __92 = __47(__91);
            __30(__85, __92);
          };
          __86.addEventListener(__65, __90), __87.set(__88, __85), __87.set(__88 + '_native', __90);
        }
      })
    });
  }
  __37(__2, __3, __10).extendElement(__57, __44), __66(__2, __3, __10), __81(__2, __3, __10.domain), __82(__2, __3, __4, __10);
  let __58 = __2.nativeToPseudo({});
  __2.setProperty(__3, 'document', __58);
  let __59 = {
    getElementById: function(__65) {
      let __84 = __4.querySelector(`#${ CSS.escape(__65) }`);
      return __44(__84);
    },
    getElementsByClassName: function(__65) {
      let __84 = Array.from(__4.getElementsByClassName(__65));
      return __50(__84);
    },
    getElementsByTagName: function(__65) {
      let __84 = Array.from(__4.getElementsByTagName(__65));
      return __50(__84);
    },
    querySelector: function(__65) {
      return __44(__4.querySelector(__65));
    },
    querySelectorAll: function(__65) {
      let __84 = Array.from(__4.querySelectorAll(__65));
      return __50(__84);
    },
    createElement: function(__65) {
      if (typeof __65 != 'string')
        throw new Error('Invalid tag');
      if (__65 = __65.toLowerCase().trim(), [
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
        ].includes(__65))
        throw new Error('Creating ' + __65 + ' elements is not allowed');
      return __8.settings.logCalls && console.log(__10.domain, 'createElement', this, __65), __44(document.createElement(__65));
    },
    createTextNode: function(__65) {
      return __8.settings.logCalls && console.log(__10.domain, 'createTextNode', this, __65), __44(document.createTextNode(__65));
    }
  };
  for (let [__65, __84] of Object.entries(__59))
    __2.setProperty(__58, __65, __2.createNativeFunction(__84));
  __2.setProperty(__58, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __8.settings.logCalls && console.log(__10.domain, 'get body', this), __44(__4);
    })
  }), __2.setProperty(__58, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __8.settings.logCalls && console.log(__10.domain, 'get documentElement', this), __44(__4);
    })
  });
  let __64 = __2.nativeToPseudo({});
  __2.setProperty(__3, 'location', __64), __2.setProperty(__64, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return `/t/${ __10.domain }${ __10.path }`;
    }),
    set: __2.createNativeFunction(function(__65) {
      if (typeof __65 == 'string') {
        __8.settings.logCalls && console.log(__10.domain, 'set href', this, __65);
        try {
          let __84 = new URL(__65, `http://${ __10.domain }`);
          if (__84.hostname && __84.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __85 = __84.pathname + __84.search + __84.hash;
          if (__85.startsWith(`/t/${ __10.domain }/`) ? __85 = __85.substring(`/t/${ __10.domain }`.length) : __85 === `/t/${ __10.domain }` && (__85 = '/'), __85.startsWith('/') || (__85 = '/' + __85), __85.endsWith('.html') || __85 === '/' || __85 === '')
            __10.fetchContent(__85 || '/index.html'), __10.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__84) {
          if (__84.message.includes('not allowed') || __84.message.includes('Only HTML'))
            throw __84;
          let __85 = __65;
          if (__85.startsWith('/') || (__85 = '/' + __85), __85.endsWith('.html') || __85 === '/' || __85 === '')
            __10.fetchContent(__85 || '/index.html').then(() => __10.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __2.setProperty(__64, 'reload', __2.createNativeFunction(function() {
    __10.fetchContent(__10.path, !0).then(() => __10.setActive(!0));
  }));
}
var __93 = {
    console: {
      log: function(...__2) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...__2);
      },
      error: function(...__2) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...__2);
      },
      warn: function(...__2) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...__2);
      }
    },
    alert(__2) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ __2 }`);
    },
    prompt(__2) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ __2 }`);
    },
    confirm(__2) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ __2 }`);
    },
    atob(__2) {
      return atob(__2);
    },
    btoa(__2) {
      return btoa(__2);
    }
  },
  __94 = class {
    constructor(__3) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = __3, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__4, __10) => {
        let __11 = (__26, __27) => {
          for (let [__31, __28] of Object.entries(__26))
            if (typeof __28 == 'function')
              __4.setProperty(__27, __31, __4.createNativeFunction(__28.bind(this)));
            else if (typeof __28 == 'object' && __28 !== null) {
            let __29 = __4.nativeToPseudo({});
            __11(__28, __29), __4.setProperty(__27, __31, __29);
          }
        };
        __11(__93, __10), __83(__4, __10, this.tile.contentElement, this.tile), __4.setProperty(__10, 'embedded', __4.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __3 = new Set(),
        __4 = [this.interpreter.getStateStack()],
        __10 = 0;
      for (; __4.length;) {
        let __11 = __4.pop(),
          __26 = typeof __11;
        if (__10 += 8, __26 === 'string' && !__3.has(__11))
          __3.add(__11), __10 += __11.length * 2;
        else if (__26 === 'object' && __11 !== null && !__3.has(__11)) {
          __3.add(__11);
          try {
            __4.push(...Object.keys(__11), ...Object.values(__11));
          } catch {}
        }
      }
      return __10;
    }
    start() {
      this.running || __8.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __3 = 0; __3 < 5000; __3++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __4 = this.roughValueMemorySize();
                if (__4 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __4 } bytes`);
                  break;
                }
              }
            } catch (__4) {
              console.error(__4), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__3) {
      __8.settings.disableJS || this.interpreter.appendCode(__3);
    }
  },
  __95 = __94;
var __96 = document.getElementById('plot'),
  __97 = new CSSStyleSheet(),
  __98 = () => {
    __97.replaceSync(`
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
__98();
var __99 = new CSSStyleSheet();
__99.replaceSync(`
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
var __100 = class __2 {
  constructor(__3) {
    this.__47 = __3.__47 ?? 0, this.__85 = __3.__85 ?? 0, this.domain = __3.domain, this.free = !__3.domain, this.locked = !1, this.id = `${ this.__47 },${ this.__85 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __3.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __3.nocontrols || !1, this.embed = __3.embed || !1, this.container = __3.container || __96, this.interpreter = null, this.render();
  }
  static toTilePosition(__3, __4) {
    return {
      __47: Math.floor(__3 / 250),
      __85: Math.floor(__4 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __3 = document.createElement('div');
    __3.classList.add('tile'), this.free && __3.classList.add('f'), this.preview ? __3.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__3.style.left = `${ this.__47 * 250 }px`, __3.style.top = `${ this.__85 * 250 }px`, this.__47 % 10 === 0 && __3.classList.add('b-left'), this.__85 % 10 === 0 && __3.classList.add('b-top')), this.element = __3;
    let __4 = document.createElement('div');
    __4.classList.add('tile-content'), this.preview && (__4.style.cssText = 'width: 100%; height: 100%;'), __4.addEventListener('click', async __11 => {
      let __26 = __11.composedPath()?.filter(__29 => __29 instanceof Element);
      if (!__26)
        return;
      let __27 = __26.findIndex(__29 => __29.isSameNode(__4));
      if (__27 === -1)
        return;
      let __28 = __26.slice(0, __27).find(__29 => __29.tagName === 'A');
      if (__28) {
        __11.preventDefault();
        try {
          let __29 = new URL(__28.href);
          if (__29.hostname !== location.hostname) {
            let __41 = document.createElement('a');
            __41.href = __28.href, __41.target = '_blank', __41.click();
            return;
          }
          let __30 = __29.pathname;
          if (__30.startsWith(`/t/${ this.domain }/`) || (__30 = `/t/${ this.domain }/${ __30 }`.replaceAll('//', '/')), __30.startsWith(`/t/${ this.domain }`) && (__30.endsWith('.html') || __30 === `/t/${ this.domain }/` || __30 === `/t/${ this.domain }`))
            await this.fetchContent(__30.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __41 = document.createElement('a');
            __41.href = __28.href, __41.target = '_blank', __41.click();
          }
        } catch (__29) {
          console.error(__29);
        }
      }
    }), this.shadow = __4.attachShadow({
      mode: 'open'
    });
    let __10 = document.createElement('div');
    __10.className = 'tile-body', this.embed && __10.classList.add('embedded'), __10.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __10, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__47 }, ${ this.__85 }...`, this.shadow.appendChild(__10), __3.appendChild(__4), this.fonts = document.createElement('style'), __3.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__3), __8.plot?.lockCache[this.__47 + ',' + this.__85] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__3, __4 = !1) {
    __3.startsWith('/') || (__3 = '/' + __3);
    let __10 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__47 }, ${ this.__85 }</p>
            </div>` : this.path === __3 && this.content && !__4 ? this.content : await fetch(`/t/${ this.domain }${ __3 }`).then(__27 => __27.text()).catch(__27 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__99] : this.shadow.adoptedStyleSheets = [__97], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __3, this.contentElement.innerHTML = __10, this.content = __10;
    let __11 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __26 = 0;
    for (let __27 of __11) {
      if (__26 >= 3)
        break;
      let __31 = __27.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__31)
        for (let __28 of __31) {
          if (__26 >= 3)
            break;
          this.fonts.textContent += __28, __26++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __3 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __4 of __3)
      this.interpreter.runCode(__4.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__3) {
    if (this.element && (__3 && (this.interpreter || (this.interpreter = new __95(this), this.executeScripts()), this.interpreter.start()), __3 !== this.active)) {
      if (this.active = __3, __3) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __8.ui) {
          let __10 = __8.ui.createVoteMenu(this);
          __10 && this.element.appendChild(__10);
          let __11 = __8.ui.createTileControl(this);
          if (this.element.appendChild(__11), __8.user?.admin || __8.user?.moderator) {
            let __26 = __8.ui.createAdminControl(this);
            this.element.appendChild(__26);
          }
          __8.plot?.activeTile && __8.plot.activeTile.setActive(!1), __8.plot && (__8.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __4 = this.contentElement.querySelectorAll('audio, video');
        for (let __10 of __4)
          __10.dataset.webtilesPaused === 'true' && (__10.dataset.webtilesPaused = !1, __10.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __8.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __8.plot && (__8.plot.activeTile = null)), __2.clearClanBorders();
        let __4 = this.contentElement.querySelectorAll('audio, video');
        for (let __10 of __4)
          __10.paused || (__10.dataset.webtilesPaused = !0, __10.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __4 = await (await __8.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__4.success || !__4.clan)
          return;
        let __10 = __4.clan.members;
        if (!__10 || __10.length <= 1)
          return;
        let __11 = new Set(__10.map(__26 => `${ __26.__47 },${ __26.__85 }`));
        for (let __26 of __10) {
          let __27 = __8.plot.tiles[`${ __26.__47 },${ __26.__85 }`];
          if (!__27?.element)
            continue;
          __27.element.classList.add('clan-highlight');
          let __31 = __11.has(`${ __26.__47 },${ __26.__85 - 1 }`),
            __28 = __11.has(`${ __26.__47 },${ __26.__85 + 1 }`),
            __29 = __11.has(`${ __26.__47 - 1 },${ __26.__85 }`),
            __30 = __11.has(`${ __26.__47 + 1 },${ __26.__85 }`);
          if (!__31) {
            let __41 = document.createElement('div');
            __41.className = 'clan-border clan-border-top', __27.element.appendChild(__41);
          }
          if (!__28) {
            let __41 = document.createElement('div');
            __41.className = 'clan-border clan-border-bottom', __27.element.appendChild(__41);
          }
          if (!__29) {
            let __41 = document.createElement('div');
            __41.className = 'clan-border clan-border-left', __27.element.appendChild(__41);
          }
          if (!__30) {
            let __41 = document.createElement('div');
            __41.className = 'clan-border clan-border-right', __27.element.appendChild(__41);
          }
        }
      } catch (__3) {
        console.error('Failed to fetch clan borders:', __3);
      }
  }
  static clearClanBorders() {
    if (__8.plot?.tiles)
      for (let __3 of Object.values(__8.plot.tiles))
        __3.element && (__3.element.classList.remove('clan-highlight'), __3.element.querySelectorAll('.clan-border').forEach(__10 => __10.remove()));
  }
  setDomain(__3) {
    this.domain = __3, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__3) {
    this.locked = __3, this.element && this.element.classList.toggle('locked', __3), this.fetchContent('/index.html', !0);
  }
};
__8.ui = {
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
  createElement: (__2, __3 = {}) => {
    let __4 = document.createElement(__2);
    for (let [__10, __11] of Object.entries(__3))
      __10 === 'innerText' ? __4.innerText = __11 : __10 === 'innerHTML' ? __4.innerHTML = __11 : __10.startsWith('on') ? __4.addEventListener(__10.slice(2).toLowerCase(), __11) : __4.setAttribute(__10, __11);
    return __4;
  },
  escapeHTML: __2 => __2 ? __2.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '',
  showDashboard: __2 => {
    Ye.src = `/dashboard?site=${ encodeURIComponent(__2) }&path=/`, We && (We.textContent = `File Manager - ${ __2 }`), Ve.classList.add('active'), fe && (fe.style.display = 'none'), __8.camera && __8.camera.setZoomEnabled(!1), __8.ws?.isConnected && setTimeout(() => {
      let __3 = new Int16Array(3);
      __3[0] = 0, __3[1] = 0, __3[2] = 0, __8.ws.send(__3.buffer);
    }, 100);
  },
  showClaimModal: __2 => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __3 = __8.user.selectedSite;
    if (!__3) {
      alert('Please select a site first');
      return;
    }
    let __4 = __3.domain,
      __10 = __3.tile ? `<strong>Warning</strong>Your current tile at (${ __3.tile.__47 }, ${ __3.tile.__85 }) will be unclaimed and your site will be moved to this new tile.` : null;
    new __12({
      title: 'Claim Tile',
      content: `<p>Do you want to claim tile (${ __2.__47 }, ${ __2.__85 }) for <strong>${ __8.ui.escapeHTML(__4) }</strong>?</p>`,
      warning: __10,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __26 => __26.close()
        },
        {
          text: 'Claim',
          type: 'confirm',
          id: 'confirm',
          onClick: async __26 => {
            __26.setButtonLoading('confirm', !0, 'Claiming...');
            try {
              let __31 = await (await __8.api.makeRequest('/api/claim', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85
                })
              })).json();
              if (__31.success) {
                if (__8.user.selectedSite) {
                  if (__8.user.selectedSite.tile) {
                    let __28 = __8.plot.getTile(__8.user.selectedSite.tile.__47, __8.user.selectedSite.tile.__85);
                    __28 && __28.setFree();
                  }
                  __8.user.selectedSite.tile = {
                    __47: __2.__47,
                    __85: __2.__85,
                    code: __31.code,
                    domain: __8.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                setTimeout(() => {
                  __2.setDomain(__8.user.selectedSite.domain), __2.setActive(!1), __2.element && __2.element.classList.toggle('locked', !1);
                }, 400), __26.close(), Q();
              } else
                alert(__31.error || 'Failed to claim tile'), __26.setButtonLoading('confirm', !1);
            } catch (__27) {
              console.error(__27), alert('Failed to claim tile: ' + __27.message), __26.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showUnlockModal: __2 => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __3 = __8.user.selectedSite;
    if (!__3) {
      alert('Please select a site first');
      return;
    }
    let __4 = __3.domain,
      __10 = __3.tile ? `<strong>Warning</strong>Your current tile at (${ __3.tile.__47 }, ${ __3.tile.__85 }) will be unclaimed and your site will be moved to this new tile.` : null,
      __11 = new __12({
        title: 'Unlock & Claim Tile',
        content: `
                <p>Enter the unlock code to claim the tile at (${ __2.__47 }, ${ __2.__85 }) for <strong>${ __8.ui.escapeHTML(__4) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: __10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __26 => __26.close()
          },
          {
            text: 'Unlock & Claim',
            type: 'confirm',
            id: 'confirm',
            onClick: async __26 => {
              let __31 = __11.element.querySelector('#unlock-code-input').value.trim();
              if (!__31) {
                alert('Please enter a code');
                return;
              }
              __26.setButtonLoading('confirm', !0, 'Unlocking...');
              try {
                let __29 = await (await __8.api.makeRequest('/api/claim', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __47: __2.__47,
                    __85: __2.__85,
                    code: __31
                  })
                })).json();
                if (__29.success) {
                  if (delete __8.plot.lockCache[__2.__47 + ',' + __2.__85], __8.user.selectedSite) {
                    if (__8.user.selectedSite.tile) {
                      let __30 = __8.plot.getTile(__8.user.selectedSite.tile.__47, __8.user.selectedSite.tile.__85);
                      __30 && __30.setFree();
                    }
                    __8.user.selectedSite.tile = {
                      __47: __2.__47,
                      __85: __2.__85,
                      code: __29.code,
                      domain: __8.user.selectedSite.domain,
                      created_at: Date.now()
                    };
                  }
                  __2.setDomain(__8.user.selectedSite.domain), __2.setActive(!1), __26.close(), Q();
                } else
                  alert(__29.error || 'Failed to unlock tile'), __26.setButtonLoading('confirm', !1);
              } catch (__28) {
                console.error(__28), alert('Failed to unlock tile: ' + __28.message), __26.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __11.open(), setTimeout(() => {
      let __26 = __11.element.querySelector('#unlock-code-input');
      __26 && __26.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    __8.ui.clanIndicator && (__8.ui.clanIndicator.hidden = __8.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!__8.user || !__8.user.selectedSite))
      try {
        let __3 = await (await __8.api.makeRequest('/api/clans/invites')).json();
        __3.success && (__8.ui.pendingClanInvites = __3.invites || [], __8.ui.updateClanIndicator());
      } catch (__2) {
        console.error('Failed to fetch clan invites:', __2);
      }
  },
  showClanModal: async () => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    let __2 = new __12({
      title: 'Clan Management',
      content: '<p>Loading...</p>',
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __3 => __3.close()
      }]
    });
    __2.open();
    try {
      let [__3, __4] = await Promise.all([
        __8.api.makeRequest('/api/clans/current'),
        __8.api.makeRequest('/api/clans/invites')
      ]), __10 = await __3.json(), __11 = await __4.json();
      __8.ui.pendingClanInvites = __11.invites || [], __8.ui.updateClanIndicator();
      let __26 = __8.user?.admin || __8.user?.moderator;
      __10.success && __10.clan ? __8.ui.renderClanInfo(__2, __10.clan, __26) : __8.ui.renderNoClan(__2, __11.invites || [], __26);
    } catch (__3) {
      console.error(__3), __2.setContent('<p>Failed to load clan data: ' + __8.ui.escapeHTML(__3.message) + '</p>');
    }
  },
  renderClanInfo: (__2, __3, __4) => {
    let __10 = `
            <div class="clan-name-display">${ __8.ui.escapeHTML(__3.name) }</div>
            <div class="clan-stats">${ __3.members.length }/5 members. ${ __3.members.length < 3 ? 'Unprotected! Reach 3 members to protect your tiles.' : 'Your tiles are protected.' }</div>
        `;
    __10 += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let __30 of __3.members) {
      let __41 = __30.domain === __8.user.sites.find(__42 => __42.tile?.__47 === __30.__47 && __42.tile?.__85 === __30.__85)?.domain;
      __10 += `<div class="clan-member-item">
                <span class="clan-member-domain">${ __8.ui.escapeHTML(__30.domain) }</span>
                <div>`, __3.isOwner && __30.domain !== __8.user.selectedSite?.domain && (__10 += `<button class="clan-member-kick" data-domain="${ __8.ui.escapeHTML(__30.domain) }">Kick</button>`), __10 += `</div>
            </div>`;
    }
    if (__10 += '</div></div>', __3.isOwner && __3.pendingInvites && __3.pendingInvites.length > 0) {
      __10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let __30 of __3.pendingInvites)
        __10 += `<div class="clan-pending-item">
                    <span>${ __8.ui.escapeHTML(__30.domain) }</span>
                    <button class="clan-pending-cancel" data-invite="${ __30.id }">Cancel</button>
                </div>`;
      __10 += '</div></div>';
    }
    __3.isOwner && __3.members.length < 5 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), __4 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __2.setContent(__10);
    let __11 = [{
      text: 'Close',
      type: 'cancel',
      id: 'close',
      onClick: __30 => __30.close()
    }];
    __3.isOwner ? __11.unshift({
      text: 'Disband Clan',
      type: 'cancel',
      id: 'disband',
      onClick: async __30 => {
        if (confirm('Are you sure you want to disband this clan?')) {
          __30.setButtonLoading('disband', !0, 'Disbanding...');
          try {
            let __42 = await (await __8.api.makeRequest('/api/clans/disband', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __42.success ? (__30.close(), __8.ui.showClanModal()) : (alert(__42.error || 'Failed to disband clan'), __30.setButtonLoading('disband', !1));
          } catch (__41) {
            alert('Failed to disband clan: ' + __41.message), __30.setButtonLoading('disband', !1);
          }
        }
      }
    }) : __11.unshift({
      text: 'Leave Clan',
      type: 'cancel',
      id: 'leave',
      onClick: async __30 => {
        if (confirm('Are you sure you want to leave this clan?')) {
          __30.setButtonLoading('leave', !0, 'Leaving...');
          try {
            let __42 = await (await __8.api.makeRequest('/api/clans/leave', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            __42.success ? (__30.close(), __8.ui.showClanModal()) : (alert(__42.error || 'Failed to leave clan'), __30.setButtonLoading('leave', !1));
          } catch (__41) {
            alert('Failed to leave clan: ' + __41.message), __30.setButtonLoading('leave', !1);
          }
        }
      }
    }), __2.buttons = __11;
    let __26 = __2.element.querySelector('.modal-actions');
    __26.innerHTML = '', __2._buttonElements.clear();
    for (let __30 of __2.buttons)
      __26.appendChild(__2._createButton(__30));
    __2.element.querySelectorAll('.clan-member-kick').forEach(__30 => {
      __30.addEventListener('click', async () => {
        let __41 = __30.dataset.domain;
        if (confirm(`Are you sure you want to kick ${ __41 }?`)) {
          __30.disabled = !0, __30.textContent = '...';
          try {
            let __43 = await (await __8.api.makeRequest('/api/clans/kick', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                domain: __41
              })
            })).json();
            __43.success ? (__8.ui.showClanModal(), __2.close()) : (alert(__43.error || 'Failed to kick member'), __30.disabled = !1, __30.textContent = 'Kick');
          } catch (__42) {
            alert('Failed to kick member: ' + __42.message), __30.disabled = !1, __30.textContent = 'Kick';
          }
        }
      });
    }), __2.element.querySelectorAll('.clan-pending-cancel').forEach(__30 => {
      __30.addEventListener('click', async () => {
        let __41 = __30.dataset.invite;
        __30.disabled = !0, __30.textContent = '...';
        try {
          let __43 = await (await __8.api.makeRequest('/api/clans/cancel-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__41)
            })
          })).json();
          __43.success ? __30.closest('.clan-pending-item').remove() : (alert(__43.error || 'Failed to cancel invite'), __30.disabled = !1, __30.textContent = 'Cancel');
        } catch (__42) {
          alert('Failed to cancel invite: ' + __42.message), __30.disabled = !1, __30.textContent = 'Cancel';
        }
      });
    });
    let __27 = __2.element.querySelector('#clan-invite-btn'),
      __31 = __2.element.querySelector('#clan-invite-domain');
    __27 && __31 && __27.addEventListener('click', async () => {
      let __30 = __31.value.trim();
      if (!__30) {
        alert('Please enter a domain');
        return;
      }
      __27.disabled = !0, __27.textContent = 'Sending...';
      try {
        let __42 = await (await __8.api.makeRequest('/api/clans/invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            domain: __30
          })
        })).json();
        __42.success ? (__31.value = '', __8.ui.showClanModal(), __2.close()) : (alert(__42.error || 'Failed to send invite'), __27.disabled = !1, __27.textContent = 'Send Invite');
      } catch (__41) {
        alert('Failed to send invite: ' + __41.message), __27.disabled = !1, __27.textContent = 'Send Invite';
      }
    });
    let __28 = __2.element.querySelector('#clan-admin-invites-btn');
    __28 && __28.addEventListener('click', () => {
      __2.close(), setTimeout(() => __8.ui.showAdminInvitesModal(), 50);
    });
    let __29 = __2.element.querySelector('#clan-admin-clans-btn');
    __29 && __29.addEventListener('click', () => {
      __2.close(), setTimeout(() => __8.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (__2, __3, __4) => {
    let __10 = '';
    if (__3.length > 0) {
      __10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let __28 of __3)
        __10 += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${ __8.ui.escapeHTML(__28.clan_name) }</strong>
                        ${ __28.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${ __8.ui.escapeHTML(__28.inviter_domain) }</span>` : '' }
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${ __28.id }">Accept</button>
                        <button class="clan-invite-reject" data-invite="${ __28.id }">Reject</button>
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
        </div>`, __4 && (__10 += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), __2.setContent(__10), __2.element.querySelectorAll('.clan-invite-accept').forEach(__28 => {
      __28.addEventListener('click', async () => {
        let __29 = __28.dataset.invite;
        __28.disabled = !0, __28.textContent = '...';
        try {
          let __41 = await (await __8.api.makeRequest('/api/clans/accept-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__29)
            })
          })).json();
          __41.success ? (__8.ui.pendingClanInvites = __8.ui.pendingClanInvites.filter(__42 => __42.id !== parseInt(__29)), __8.ui.updateClanIndicator(), __8.ui.showClanModal(), __2.close()) : (alert(__41.error || 'Failed to accept invite'), __28.disabled = !1, __28.textContent = 'Accept');
        } catch (__30) {
          alert('Failed to accept invite: ' + __30.message), __28.disabled = !1, __28.textContent = 'Accept';
        }
      });
    }), __2.element.querySelectorAll('.clan-invite-reject').forEach(__28 => {
      __28.addEventListener('click', async () => {
        let __29 = __28.dataset.invite;
        __28.disabled = !0, __28.textContent = '...';
        try {
          let __41 = await (await __8.api.makeRequest('/api/clans/reject-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(__29)
            })
          })).json();
          __41.success ? (__8.ui.pendingClanInvites = __8.ui.pendingClanInvites.filter(__42 => __42.id !== parseInt(__29)), __8.ui.updateClanIndicator(), __28.closest('.clan-invite-item').remove()) : (alert(__41.error || 'Failed to reject invite'), __28.disabled = !1, __28.textContent = 'Reject');
        } catch (__30) {
          alert('Failed to reject invite: ' + __30.message), __28.disabled = !1, __28.textContent = 'Reject';
        }
      });
    });
    let __11 = __2.element.querySelector('#clan-create-btn'),
      __26 = __2.element.querySelector('#clan-create-name');
    __11 && __26 && __11.addEventListener('click', async () => {
      let __28 = __26.value.trim();
      if (!__28) {
        alert('Please enter a clan name');
        return;
      }
      if (__28.length < 3 || __28.length > 20) {
        alert('Clan name must be between 3 and 20 characters');
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(__28)) {
        alert('Clan name must only contain letters and numbers');
        return;
      }
      __11.disabled = !0, __11.textContent = 'Creating...';
      try {
        let __30 = await (await __8.api.makeRequest('/api/clans/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: __28
          })
        })).json();
        __30.success ? (__8.ui.showClanModal(), __2.close()) : (alert(__30.error || 'Failed to create clan'), __11.disabled = !1, __11.textContent = 'Create Clan');
      } catch (__29) {
        alert('Failed to create clan: ' + __29.message), __11.disabled = !1, __11.textContent = 'Create Clan';
      }
    });
    let __27 = __2.element.querySelector('#clan-admin-invites-btn');
    __27 && __27.addEventListener('click', () => {
      __2.close(), setTimeout(() => __8.ui.showAdminInvitesModal(), 50);
    });
    let __31 = __2.element.querySelector('#clan-admin-clans-btn');
    __31 && __31.addEventListener('click', () => {
      __2.close(), setTimeout(() => __8.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let __2 = new __12({
      title: 'Admin: All Clan Invites',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __3 => {
            __3.close(), __8.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __3 => __3.close()
        }
      ]
    });
    __2.open();
    try {
      let __4 = await (await __8.api.makeRequest('/api/clans/admin/invites')).json();
      if (__4.success)
        if (__4.invites.length === 0)
          __2.setContent('<p>No pending invites.</p>');
        else {
          let __10 = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let __11 of __4.invites)
            __10 += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${ __8.ui.escapeHTML(__11.domain) }</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${ __8.ui.escapeHTML(__11.clan_name) }</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${ __11.id }">Delete</button>
                        </div>`;
          __10 += '</div>', __2.setContent(__10), __2.element.querySelectorAll('.clan-invite-reject').forEach(__11 => {
            __11.addEventListener('click', async () => {
              let __26 = __11.dataset.invite;
              __11.disabled = !0, __11.textContent = '...';
              try {
                let __31 = await (await __8.api.makeRequest('/api/clans/admin/delete-invite', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    invite: parseInt(__26)
                  })
                })).json();
                __31.success ? __11.closest('.clan-invite-item').remove() : (alert(__31.error || 'Failed to delete invite'), __11.disabled = !1, __11.textContent = 'Delete');
              } catch (__27) {
                alert('Failed to delete invite: ' + __27.message), __11.disabled = !1, __11.textContent = 'Delete';
              }
            });
          });
        }
      else
        __2.setContent('<p>Failed to load invites: ' + __8.ui.escapeHTML(__4.error) + '</p>');
    } catch (__3) {
      __2.setContent('<p>Failed to load invites: ' + __8.ui.escapeHTML(__3.message) + '</p>');
    }
  },
  showAdminClansModal: async () => {
    let __2 = new __12({
      title: 'Admin: All Clans',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __3 => {
            __3.close(), __8.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: __3 => __3.close()
        }
      ]
    });
    __2.open();
    try {
      let __4 = await (await __8.api.makeRequest('/api/clans/admin/clans')).json();
      if (__4.success)
        if (__4.clans.length === 0)
          __2.setContent('<p>No clans.</p>');
        else {
          let __10 = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let __11 of __4.clans)
            __10 += `<div class="clan-member-item">
                            <div>
                                <div><strong>${ __8.ui.escapeHTML(__11.name) }</strong></div>
                                <div style="font-size: 11px; color: #888;">${ __11.member_count }/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${ __11.owner_x !== null && __11.owner_y !== null ? `<button class="clan-jump-owner" data-x="${ __11.owner_x }" data-y="${ __11.owner_y }">Jump</button>` : '' }
                                <button class="clan-member-kick" data-clan="${ __11.id }">Disband</button>
                            </div>
                        </div>`;
          __10 += '</div>', __2.setContent(__10), __2.element.querySelectorAll('.clan-jump-owner').forEach(__11 => {
            __11.addEventListener('click', () => {
              let __26 = parseInt(__11.dataset.__47),
                __27 = parseInt(__11.dataset.__85);
              __8.camera && !isNaN(__26) && !isNaN(__27) && (__8.camera.centerOn(__26 * 250 + 250 / 2, __27 * 250 + 250 / 2), __2.close());
            });
          }), __2.element.querySelectorAll('.clan-member-kick').forEach(__11 => {
            __11.addEventListener('click', async () => {
              let __26 = __11.dataset.clan;
              if (confirm('Are you sure you want to disband this clan?')) {
                __11.disabled = !0, __11.textContent = '...';
                try {
                  let __31 = await (await __8.api.makeRequest('/api/clans/admin/disband', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(__26)
                    })
                  })).json();
                  __31.success ? __11.closest('.clan-member-item').remove() : (alert(__31.error || 'Failed to disband clan'), __11.disabled = !1, __11.textContent = 'Disband');
                } catch (__27) {
                  alert('Failed to disband clan: ' + __27.message), __11.disabled = !1, __11.textContent = 'Disband';
                }
              }
            });
          });
        }
      else
        __2.setContent('<p>Failed to load clans: ' + __8.ui.escapeHTML(__4.error) + '</p>');
    } catch (__3) {
      __2.setContent('<p>Failed to load clans: ' + __8.ui.escapeHTML(__3.message) + '</p>');
    }
  },
  showFreeModal: __2 => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __3 = new __12({
      title: 'Free Tile',
      content: `
                <p>What would you like to do with the tile at (${ __2.__47 }, ${ __2.__85 })?</p>
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
    __3.open();
    let __4 = __3.element.querySelector('#option-transfer'),
      __10 = __3.element.querySelector('#option-free');
    __4.addEventListener('click', async () => {
      __4.disabled = !0, __10.disabled = !0, __4.innerHTML = '<strong>Loading...</strong>';
      try {
        let __26 = await (await __8.api.makeRequest('/api/getcode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            __47: __2.__47,
            __85: __2.__85
          })
        })).json();
        if (__26.success) {
          __3.setContent(`
                        <p>Share this code with another person to let them take your tile at (${ __2.__47 }, ${ __2.__85 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __8.ui.escapeHTML(__26.code) }</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let __27 = __3.element.querySelector('#copy-code-btn');
          __27.addEventListener('click', () => {
            navigator.clipboard.writeText(__26.code), __27.textContent = 'Copied!', setTimeout(() => {
              __27.textContent = 'Copy';
            }, 1500);
          });
        } else
          alert(__26.error || 'Failed to get tile code'), __4.disabled = !1, __10.disabled = !1, __4.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      } catch (__11) {
        console.error(__11), alert('Failed to get tile code: ' + __11.message), __4.disabled = !1, __10.disabled = !1, __4.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      }
    }), __10.addEventListener('click', () => {
      __3.setContent(`<p>Are you sure you want to free the tile at (${ __2.__47 }, ${ __2.__85 })?</p><p>The tile for <strong>${ __8.ui.escapeHTML(__2.domain) }</strong> will become available for <strong>anyone</strong> to claim.</p>`), __3.buttons = [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: __26 => {
            __26.close(), __8.ui.showFreeModal(__2);
          }
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __26 => {
            __26.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __31 = await (await __8.api.makeRequest('/api/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85
                })
              })).json();
              if (__31.success) {
                let __28 = __8.user.sites.find(__29 => __29.domain === __2.domain);
                __28 && (__28.tile = null), __2.setFree(), __2.setActive(!1), __26.close(), Q();
              } else
                alert(__31.error || 'Failed to free tile'), __26.setButtonLoading('confirm', !1);
            } catch (__27) {
              console.error(__27), alert('Failed to free tile: ' + __27.message), __26.setButtonLoading('confirm', !1);
            }
          }
        }
      ];
      let __11 = __3.element.querySelector('.modal-actions');
      __11.innerHTML = '', __3._buttonElements.clear();
      for (let __26 of __3.buttons)
        __11.appendChild(__3._createButton(__26));
    });
  },
  showTakeModal: __2 => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __3 = __8.user.selectedSite;
    if (!__3) {
      alert('Please select a site first');
      return;
    }
    let __4 = __3.domain,
      __10 = __3.tile ? `<strong>Warning</strong>Your current tile at (${ __3.tile.__47 }, ${ __3.tile.__85 }) will be freed and your site will be moved to this new tile.` : null,
      __11 = new __12({
        title: 'Take Tile',
        content: `
                <p>Enter the code to take the tile at (${ __2.__47 }, ${ __2.__85 }) for <strong>${ __8.ui.escapeHTML(__4) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: __10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: __26 => __26.close()
          },
          {
            text: 'Take Tile',
            type: 'confirm',
            id: 'confirm',
            onClick: async __26 => {
              let __31 = __11.element.querySelector('#take-code-input').value.trim();
              if (!__31) {
                alert('Please enter a code');
                return;
              }
              __26.setButtonLoading('confirm', !0, 'Taking...');
              try {
                let __29 = await (await __8.api.makeRequest('/api/take', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    __47: __2.__47,
                    __85: __2.__85,
                    code: __31
                  })
                })).json();
                if (__29.success) {
                  if (__8.user.selectedSite && __8.user.selectedSite.tile) {
                    let __30 = __8.plot.getTile(__8.user.selectedSite.tile.__47, __8.user.selectedSite.tile.__85);
                    __30 && __30.setFree();
                  }
                  __8.user.selectedSite && (__8.user.selectedSite.tile = {
                    __47: __2.__47,
                    __85: __2.__85,
                    domain: __8.user.selectedSite.domain,
                    created_at: Date.now()
                  }), __2.setDomain(__4), __2.setActive(!1), __26.close(), Q();
                } else
                  alert(__29.error || 'Failed to take tile'), __26.setButtonLoading('confirm', !1);
              } catch (__28) {
                console.error(__28), alert('Failed to take tile: ' + __28.message), __26.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    __11.open(), setTimeout(() => {
      let __26 = __11.element.querySelector('#take-code-input');
      __26 && __26.focus();
    }, 100);
  },
  showAdminFreeModal: __2 => {
    new __12({
      title: 'Admin: Free Tile',
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${ __2.__47 }, ${ __2.__85 })?</p>
                <p>This will remove <strong>${ __8.ui.escapeHTML(__2.domain) }</strong> from this tile.</p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __4 => __4.close()
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __4 => {
            __4.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let __11 = await (await __8.api.makeRequest('/api/admin/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85
                })
              })).json();
              __11.success ? (__2.setFree(), __2.setActive(!1), __4.close()) : (alert(__11.error || 'Failed to free tile'), __4.setButtonLoading('confirm', !1));
            } catch (__10) {
              console.error(__10), alert('Failed to free tile: ' + __10.message), __4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminBanModal: __2 => {
    new __12({
      title: 'Admin: Ban User',
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${ __8.ui.escapeHTML(__2.domain) }</strong>?</p>
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
          onClick: __4 => __4.close()
        },
        {
          text: 'Ban User',
          type: 'confirm',
          id: 'confirm',
          onClick: async __4 => {
            __4.setButtonLoading('confirm', !0, 'Banning...');
            try {
              let __11 = await (await __8.api.makeRequest('/api/admin/ban', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85
                })
              })).json();
              __11.success ? (__2.setFree(), __2.setActive(!1), __4.close(), alert('User banned.')) : (alert(__11.error || 'Failed to ban user'), __4.setButtonLoading('confirm', !1));
            } catch (__10) {
              console.error(__10), alert('Failed to ban user: ' + __10.message), __4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockModal: (__2, __3) => {
    let __4 = __3 ? 'unlock' : 'lock',
      __10 = __3 ? 'unlocked' : 'locked';
    new __12({
      title: `Admin: ${ __3 ? 'Unlock' : 'Lock' } Tile`,
      content: `
                <p>Are you sure you want to <strong>${ __4 }</strong> the tile at (${ __2.__47 }, ${ __2.__85 })?</p>
                ${ __3 ? '<p>This tile will become available for claiming again.</p>' : '<p>This tile will be reserved and cannot be claimed by regular users.</p>' }
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __26 => __26.close()
        },
        {
          text: __3 ? 'Unlock Tile' : 'Lock Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async __26 => {
            __26.setButtonLoading('confirm', !0, __3 ? 'Unlocking...' : 'Locking...');
            try {
              let __31 = await (await __8.api.makeRequest('/api/admin/lock', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85,
                  lock: !__3
                })
              })).json();
              __31.success ? (__3 ? delete __8.plot.lockCache[__2.__47 + ',' + __2.__85] : __8.plot.lockCache[__2.__47 + ',' + __2.__85] = !0, __26.close(), __2.setActive(!1), __2.setActive(!0)) : (alert(__31.error || `Failed to ${ __4 } tile`), __26.setButtonLoading('confirm', !1));
            } catch (__27) {
              console.error(__27), alert(`Failed to ${ __4 } tile: ` + __27.message), __26.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockCodeModal: async __2 => {
    try {
      let __4 = await (await __8.api.makeRequest(`/api/admin/lockcode?x=${ __2.__47 }&y=${ __2.__85 }`)).json();
      if (__4.success) {
        let __10 = new __12({
          title: 'Lock Code',
          content: `
                        <p>Lock code for tile at (${ __2.__47 }, ${ __2.__85 }):</p>
                        <div class="code-display">
                            <code id="lock-code">${ __8.ui.escapeHTML(__4.code) }</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __26 => __26.close()
          }]
        });
        __10.open();
        let __11 = __10.element.querySelector('#copy-lock-code-btn');
        __11.addEventListener('click', () => {
          navigator.clipboard.writeText(__4.code), __11.textContent = 'Copied!', setTimeout(() => {
            __11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__4.error || 'Failed to get lock code');
    } catch (__3) {
      console.error(__3), alert('Failed to get lock code: ' + __3.message);
    }
  },
  showAdminTileCodeModal: async __2 => {
    try {
      let __4 = await (await __8.api.makeRequest(`/api/admin/tilecode?x=${ __2.__47 }&y=${ __2.__85 }`)).json();
      if (__4.success) {
        let __10 = new __12({
          title: 'Tile Secret Code',
          content: `
                        <p>Secret code for tile at (${ __2.__47 }, ${ __2.__85 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ __8.ui.escapeHTML(__4.code) }</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: __26 => __26.close()
          }]
        });
        __10.open();
        let __11 = __10.element.querySelector('#copy-tile-code-btn');
        __11.addEventListener('click', () => {
          navigator.clipboard.writeText(__4.code), __11.textContent = 'Copied!', setTimeout(() => {
            __11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(__4.error || 'Failed to get tile code');
    } catch (__3) {
      console.error(__3), alert('Failed to get tile code: ' + __3.message);
    }
  },
  showAdminSwapModal: __2 => {
    let __3 = new __12({
      title: 'Admin: Swap Tiles',
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${ __2.__47 }, ${ __2.__85 }):</p>
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
          onClick: __4 => __4.close()
        },
        {
          text: 'Swap',
          type: 'confirm',
          id: 'confirm',
          onClick: async __4 => {
            let __10 = __3.element.querySelector('#swap-x-input'),
              __11 = __3.element.querySelector('#swap-y-input'),
              __26 = parseInt(__10.value.trim()),
              __27 = parseInt(__11.value.trim());
            if (isNaN(__26) || isNaN(__27)) {
              alert('Please enter valid X and Y coordinates');
              return;
            }
            if (__2.__47 === __26 && __2.__85 === __27) {
              alert('Cannot swap a tile with itself');
              return;
            }
            __4.setButtonLoading('confirm', !0, 'Swapping...');
            try {
              let __28 = await (await __8.api.makeRequest('/api/admin/swap', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  x1: __2.__47,
                  y1: __2.__85,
                  x2: __26,
                  y2: __27
                })
              })).json();
              __28.success ? (__4.close(), __2.setActive(!1), setTimeout(() => {
                let __29 = __8.plot.getTile(__2.__47, __2.__85),
                  __30 = __8.plot.getTile(__26, __27);
                __29 && (__29.setActive(!1), __29.fetchContent('/index.html', !0)), __30 && (__30.setActive(!1), __30.fetchContent('/index.html', !0));
              }, 100)) : (alert(__28.error || 'Failed to swap tiles'), __4.setButtonLoading('confirm', !1));
            } catch (__31) {
              console.error(__31), alert('Failed to swap tiles: ' + __31.message), __4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    });
    __3.open(), setTimeout(() => {
      let __4 = __3.element.querySelector('#swap-x-input');
      __4 && __4.focus();
    }, 100);
  },
  createAdminControl: __2 => {
    let __3 = __8.ui.createElement('div', {
      class: 'tile-admin-panel'
    });
    __2.free || (__3.appendChild(__8.ui.createElement('button', {
      innerText: 'Edit',
      onclick: () => {
        __8.ui.showDashboard(__2.domain);
      }
    })), __3.appendChild(__8.ui.createElement('span', {
      class: 'separator'
    })), __3.appendChild(__8.ui.createElement('button', {
      innerText: 'Free',
      onclick: () => {
        __8.ui.showAdminFreeModal(__2);
      }
    })), __3.appendChild(__8.ui.createElement('button', {
      class: 'danger',
      innerText: 'Ban',
      onclick: () => {
        __8.ui.showAdminBanModal(__2);
      }
    })), __3.appendChild(__8.ui.createElement('button', {
      innerText: 'Swap',
      onclick: () => {
        __8.ui.showAdminSwapModal(__2);
      }
    })));
    let __4 = __8.plot.lockCache[__2.__47 + ',' + __2.__85],
      __10 = __8.ui.createElement('button', {
        innerText: __4 ? 'Unlock' : 'Lock',
        onclick: async () => {
          try {
            let __26 = await (await __8.api.makeRequest(`/api/admin/lockstatus?x=${ __2.__47 }&y=${ __2.__85 }`)).json();
            __26.success ? __8.ui.showAdminLockModal(__2, __26.locked) : alert(__26.error || 'Failed to check lock status');
          } catch (__11) {
            console.error(__11), alert('Failed to check lock status: ' + __11.message);
          }
        }
      });
    if (__2.free || __3.appendChild(__8.ui.createElement('span', {
        class: 'separator'
      })), __3.appendChild(__10), __4) {
      let __11 = __8.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __8.ui.showAdminLockCodeModal(__2);
        }
      });
      __3.appendChild(__11);
    }
    if (!__2.free) {
      let __11 = __8.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          __8.ui.showAdminTileCodeModal(__2);
        }
      });
      __3.appendChild(__11);
    }
    return __3;
  },
  createTileControl: __2 => {
    let __3 = __8.ui.createElement('div', {
        class: 'tile-info',
        innerHTML: `
                <div class="tile-domain">
                    ${ __2.domain ? `<a href="https://${ __8.ui.escapeHTML(__2.domain) }" target="_blank">${ __8.ui.escapeHTML(__2.domain) }</a>` : `${ __2.locked ? 'Locked tile' : 'Free tile' } ${ __2.__47 }, ${ __2.__85 }` }
                </div>
                <div class="tile-controls">
            `
      }),
      __4 = __3.querySelector('.tile-controls');
    if (__2.free)
      __8.plot.lockCache[__2.__47 + ',' + __2.__85] ? __4.appendChild(__8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Unlock',
        onclick: () => {
          __8.ui.showUnlockModal(__2);
        }
      })) : __4.appendChild(__8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Claim',
        onclick: () => {
          __8.ui.showClaimModal(__2);
        }
      }));
    else {
      let __10 = __8?.user?.sites?.find(__11 => __11.domain === __2.domain);
      if (__10 && (__4.appendChild(__8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Edit',
          onclick: () => {
            __8.ui.showDashboard(__2.domain);
          }
        })), __4.appendChild(__8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Give',
          onclick: () => {
            __8.ui.showFreeModal(__2);
          }
        }))), (!__10 || __8?.user?.selectedSite?.domain !== __2.domain && __8?.user?.sites?.length >= 2) && __4.appendChild(__8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Take',
          onclick: () => {
            __8.ui.showTakeModal(__2);
          }
        })), !__10 && __8?.user?.selectedSite?.tile) {
        let __11 = __8.user.selectedSite.tile;
        Math.abs(__11.__47 - __2.__47) <= 1 && Math.abs(__11.__85 - __2.__85) <= 1 && __8.ui.checkAndShowAttackButton(__2, __4);
      }
    }
    return __4.appendChild(__8.ui.createElement('button', {
      class: 'btn',
      innerHTML: 'Link',
      onclick: __10 => {
        __10.target.innerText = 'Copied!', setTimeout(() => {
          __10.target.innerText = 'Link';
        }, 500);
        let __11 = __2.__47 * 250 + 250 / 2,
          __26 = __2.__85 * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${ __11 },${ __26 }`);
      }
    })), __4.appendChild(__8.ui.createElement('button', {
      class: 'btn',
      innerHTML: '\u27F3',
      onclick: () => {
        __2.fetchContent(__2.path, !0), __2.setActive(!1);
      }
    })), __4.appendChild(__8.ui.createElement('button', {
      class: 'btn',
      innerHTML: '&times;',
      onclick: () => {
        __2.setActive(!1);
      }
    })), __3.appendChild(__4), __3;
  },
  createVoteMenu: __2 => {
    if (__2.free || !__2.domain)
      return null;
    let __3 = __8.ui.createElement('div', {
        class: 'tile-vote-menu'
      }),
      __4 = __8.ui.createElement('button', {
        class: 'vote-btn vote-up',
        innerHTML: '\u25B2',
        onclick: () => __8.ui.handleVote(__2, 1, __4, __11, __10)
      }),
      __10 = __8.ui.createElement('div', {
        class: 'vote-score',
        innerText: '...'
      }),
      __11 = __8.ui.createElement('button', {
        class: 'vote-btn vote-down',
        innerHTML: '\u25BC',
        onclick: () => __8.ui.handleVote(__2, -1, __4, __11, __10)
      });
    return __3.appendChild(__4), __3.appendChild(__10), __3.appendChild(__11), __8.ui.fetchVoteData(__2, __4, __11, __10), __3;
  },
  fetchVoteData: async (__2, __3, __4, __10) => {
    try {
      let __26 = await (await __8.api.makeRequest(`/api/votes/score?domain=${ encodeURIComponent(__2.domain) }`)).json();
      if (__26.success) {
        let __27 = __26.score || 0;
        __10.textContent = __27;
        let __31 = __26.myVote || 0;
        __3.classList.remove('active'), __4.classList.remove('active'), __31 === 1 ? __3.classList.add('active') : __31 === -1 && __4.classList.add('active');
      } else
        __10.textContent = '0';
    } catch (__11) {
      console.error('Failed to fetch vote score:', __11), __10.textContent = '0';
    }
  },
  handleVote: async (__2, __3, __4, __10, __11) => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let __26 = __4.classList.contains('active'),
      __27 = __10.classList.contains('active'),
      __31 = __3;
    (__3 === 1 && __26 || __3 === -1 && __27) && (__31 = 0), __4.disabled = !0, __10.disabled = !0;
    try {
      let __29 = await (await __8.api.makeRequest('/api/votes/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: __2.domain,
          vote: __31
        })
      })).json();
      if (__29.success) {
        let __30 = __29.score || 0;
        __11.textContent = __30, __4.classList.remove('active'), __10.classList.remove('active'), __31 === 1 ? __4.classList.add('active') : __31 === -1 && __10.classList.add('active');
      } else
        alert(__29.error || 'Failed to vote');
    } catch (__28) {
      console.error('Failed to vote:', __28), alert('Failed to vote: ' + __28.message);
    } finally {
      __4.disabled = !1, __10.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (__2, __3) => {
    try {
      let __10 = await (await __8.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(__2.domain) }`)).json();
      if (__10.success && __10.clan && __10.clan.members && __10.clan.members.length >= 3)
        return;
      __3.prepend(__8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __8.ui.showAttackModal(__2);
        }
      }));
    } catch (__4) {
      console.error('Failed to check clan for attack button:', __4), __3.prepend(__8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          __8.ui.showAttackModal(__2);
        }
      }));
    }
  },
  showAttackModal: async __2 => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__8.user.selectedSite.tile) {
      alert('You must have a tile to attack from');
      return;
    }
    let __4 = __8.user.selectedSite.domain,
      __10 = __2.domain,
      __11 = 0,
      __26 = null,
      __27 = null;
    try {
      let __30 = await (await __8.api.makeRequest(`/api/attack/success-chance?attacked_domain=${ encodeURIComponent(__10) }`)).json();
      __30.success ? (__11 = __30.successChance, __26 = __30.cooldown) : __27 = __30.error || 'Failed to get attack success chance';
    } catch (__29) {
      console.error(__29), __27 = 'Failed to get attack success chance: ' + __29.message;
    }
    if (__27) {
      alert(__27);
      return;
    }
    if (__11 < 1) {
      alert('Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.');
      return;
    }
    let __31 = '';
    if (__26 && __26.isOnCooldown) {
      let __29 = __26.hoursRemaining;
      __31 = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${ __29 > 1 ? `Approximately ${ __29 } hours remaining until full chance.` : 'Less than 1 hour remaining until full chance.' }
                </p>
            `;
    }
    new __12({
      title: 'Attack Tile',
      content: `
                <p>
                    Attack the tile at (${ __2.__47 }, ${ __2.__85 }) owned by <strong>${ __8.ui.escapeHTML(__10) }</strong>?<br>
                    Attack success chance: ${ __11.toFixed(1) }%
                </p>
                ${ __31 }
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: __29 => __29.close()
        },
        {
          text: 'Attack',
          type: 'confirm',
          id: 'confirm',
          onClick: async __29 => {
            __29.setButtonLoading('confirm', !0, 'Attacking...');
            try {
              let __41 = await (await __8.api.makeRequest('/api/attack/perform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  __47: __2.__47,
                  __85: __2.__85
                })
              })).json();
              if (__41.success) {
                __29.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                  let __43 = __8.plot.getTile(__8.user.selectedSite.tile.__47, __8.user.selectedSite.tile.__85);
                  __43 && (__43.fetchContent('/index.html', !0), __43.setActive(!1)), __2.fetchContent('/index.html', !0), __2.setActive(!1), __8.user.selectedSite && (__8.user.selectedSite.tile = {
                    __47: __2.__47,
                    __85: __2.__85,
                    domain: __4,
                    created_at: Date.now()
                  });
                }, 500), __29.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __43 => __43.close()
                }];
                let __42 = __29.element.querySelector('.modal-actions');
                __42.innerHTML = '', __29._buttonElements.clear();
                for (let __43 of __29.buttons)
                  __42.appendChild(__29._createButton(__43));
              } else {
                __29.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${ __8.ui.escapeHTML(__41.error || 'The attack was unsuccessful.') }
                                    </p>
                                `), __29.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: __43 => __43.close()
                }];
                let __42 = __29.element.querySelector('.modal-actions');
                __42.innerHTML = '', __29._buttonElements.clear();
                for (let __43 of __29.buttons)
                  __42.appendChild(__29._createButton(__43));
              }
            } catch (__30) {
              console.error(__30), alert('Failed to attack tile: ' + __30.message), __29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showEmbedModal: () => {
    if (!__8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!__8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!__8.user.selectedSite.tile) {
      alert('Your site must have a tile to embed it');
      return;
    }
    let __2 = __8.user.selectedSite.domain,
      __3 = !1,
      __4 = __50 => {
        let __51 = `/e/${ __2 }`;
        return __50 ? `${ __51 }?dark=true` : __51;
      },
      __10 = __50 => `<iframe src="https://webtiles.kicya.net${ __4(__50) }" width="250" height="270" frameborder="0"></iframe>`,
      __11 = document.createElement('div');
    __11.style.cssText = 'display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;';
    let __26 = document.createElement('div');
    __26.style.cssText = 'min-width: 250px; max-width: 100%;';
    let __27 = document.createElement('h4');
    __27.textContent = 'Preview', __27.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __26.appendChild(__27);
    let __31 = document.createElement('iframe');
    __31.src = __4(__3), __31.width = '250', __31.height = '270', __31.style.cssText = 'border: 1px solid #ddd; border-radius: 4px;', __31.setAttribute('frameborder', '0'), __26.appendChild(__31);
    let __28 = document.createElement('div');
    __28.style.cssText = 'flex: 1; min-width: 300px; max-width: 100%;';
    let __29 = document.createElement('h4');
    __29.textContent = 'Embed Code', __29.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', __28.appendChild(__29);
    let __30 = document.createElement('div');
    __30.style.cssText = 'margin-bottom: 10px; display: flex; align-items: center; gap: 3px;';
    let __41 = document.createElement('input');
    __41.type = 'checkbox', __41.id = 'embed-dark-mode', __41.style.cssText = 'cursor: pointer;';
    let __42 = document.createElement('label');
    __42.setAttribute('for', 'embed-dark-mode'), __42.textContent = 'Dark mode', __42.style.cssText = 'cursor: pointer; font-size: 13px; user-select: none;', __30.appendChild(__41), __30.appendChild(__42), __26.appendChild(__30);
    let __43 = document.createElement('textarea');
    __43.value = __10(__3), __43.style.cssText = 'width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;', __43.readOnly = !0, __28.appendChild(__43);
    let __44 = document.createElement('button');
    __44.textContent = 'Copy Code', __44.style.cssText = 'margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;', __44.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(__43.value), __44.textContent = 'Copied!', setTimeout(() => {
          __44.textContent = 'Copy Code';
        }, 2000);
      } catch {
        __43.select(), document.execCommand('copy'), __44.textContent = 'Copied!', setTimeout(() => {
          __44.textContent = 'Copy Code';
        }, 2000);
      }
    }), __28.appendChild(__44);
    let __45 = document.createElement('div');
    __45.style.cssText = 'font-size: 12px; color: #666; margin-top: 10px;', __45.innerHTML = 'You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.', __28.appendChild(__45), __41.addEventListener('change', __50 => {
      __3 = __50.target.checked, __31.src = __4(__3), __43.value = __10(__3);
    }), __11.appendChild(__26), __11.appendChild(__28);
    let __46 = new __12({
      title: 'Embed Tile',
      content: __11,
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: __50 => __50.close()
      }]
    });
    __46.open(), __46.element && (__46.element.style.maxWidth = '700px');
  }
};

function __101() {
  if (!__8.user)
    return;
  let __2 = __8.ui.siteSelector.value,
    __3 = __8.user.sites.find(__10 => __10.domain === __2);
  __2 === 'select' || __2 === 'add' || !__3 ? (__8.ui.siteJumpButton.hidden = !0, __8.ui.siteEditButton.hidden = !0, __8.ui.siteEmbedButton.hidden = !0, __8.ui.siteClanButton.hidden = !0) : (__8.ui.siteEditButton.hidden = !1, __8.ui.siteJumpButton.hidden = !__3.tile, __8.ui.siteClanButton.hidden = !__3.tile, __8.ui.siteEmbedButton.hidden = !__3.tile), __8.user.selectedSite = __3;
  let __4 = __8?.plot?.activeTile;
  __4 && (__4.setActive(!1), __4.setActive(!0));
}
__8.ui.siteSelector && __8.ui.siteSelector.addEventListener('change', () => {
  if (!__8.user)
    return;
  let __2 = __8.ui.siteSelector.value;
  __2 === 'add' && (location.href = __8.user ? 'https://kicya.net/account/sites' : 'https://kicya.net/auth/register');
  let __3 = __8.user.sites.find(__4 => __4.domain === __2);
  if (__3) {
    document.cookie = `site=${ __3.domain }; path=/`;
    let __4 = document.querySelector('#kicya-site-select-option');
    __4 && __4.remove(), __8.ui.fetchClanInvites();
  }
  __101();
});
__101();
var __102 = document.getElementById('dashboard-modal'),
  __103 = document.getElementById('dashboard-iframe'),
  __104 = document.getElementById('dashboard-modal-close'),
  __105 = document.getElementById('dashboard-modal-title'),
  __106 = document.getElementById('app');
__8.ui.siteEditButton && __8.ui.siteEditButton.addEventListener('click', () => {
  !__8.user || !__8.user.selectedSite || __8.ui.showDashboard(__8.user.selectedSite.domain);
});
__8.ui.siteJumpButton && __8.ui.siteJumpButton.addEventListener('click', () => {
  if (!__8.user || !__8.user.selectedSite || !__8.user.selectedSite.tile)
    return;
  let __2 = __8.user.selectedSite.tile,
    __3 = __2.__47 * 250 + 250 / 2,
    __4 = __2.__85 * 250 + 250 / 2;
  __8.camera.centerOn(__3, __4);
});
__8.ui.siteCenterButton && __8.ui.siteCenterButton.addEventListener('click', () => {
  __8.camera && __8.camera.centerOn(100, 100);
});
__8.ui.siteClanButton && __8.ui.siteClanButton.addEventListener('click', () => {
  __8.ui.showClanModal();
});
__8.ui.siteEmbedButton && __8.ui.siteEmbedButton.addEventListener('click', () => {
  __8.ui.showEmbedModal();
});

function __107() {
  __102.classList.remove('active'), __103.src = '', __106 && (__106.style.display = ''), __8.camera && __8.camera.setZoomEnabled(!0);
}
__104 && __104.addEventListener('click', __107);
__8.ui.zoomSlider.addEventListener('input', __2 => {
  __8.camera.zoomTo(__8.camera.width / 2, __8.camera.height / 2, +__2.target.value);
});
var __108 = document.getElementById('kicya-menu-toggle'),
  __109 = document.getElementById('kicya-links');
__108 && __109 && (__108.addEventListener('click', function(__2) {
  __2.stopPropagation(), __109.classList.toggle('active');
}), document.addEventListener('click', function(__2) {
  !__109.contains(__2.target) && !__108.contains(__2.target) && __109.classList.remove('active');
}), __109.querySelectorAll('a').forEach(function(__2) {
  __2.addEventListener('click', function() {
    __109.classList.remove('active');
  });
}));

function __110() {
  if (!__8.user || localStorage.getItem('rules_accepted'))
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
      onClick: __3 => {
        localStorage.setItem('rules_accepted', '1'), __3.close();
      }
    }]
  }).open();
}
__110();
__8.user && __8.user.selectedSite && __8.ui.fetchClanInvites();
var __111 = __8.ui;
var __112 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let __3 = __8.api.getToken(),
      __4 = __8.api.getTokenExpiry();
    if (!__8.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!__3 || __4 < Date.now()) && await __8.api.showCaptchaModal();
    let __10 = 60000,
      __11 = Date.now();
    for (; !__8.api.getToken() || __8.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - __11 > __10) {
        console.error('[WS] Captcha timeout');
        let __26 = document.getElementById('loading-text');
        __26 && (__26.textContent = 'Verification timeout. Please refresh.');
        return;
      }
      await new Promise(__26 => setTimeout(__26, 100));
    }
    this.connect();
  }
  connect() {
    let __3 = location.protocol === 'https:' ? 'wss:' : 'ws:',
      __4 = __8.api.getToken() || '';
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${ __3 }//${ location.host }/ws?t=${ encodeURIComponent(__4) }`), this.ws.binaryType = 'arraybuffer', this.ws.onopen = () => {
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
      let __26 = Date.now() - this.lastConnectionTime;
      !__11 && __26 < 1000 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = __10 => {
      console.error('[WS] Error:', __10);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout)
      return;
    let __3 = Math.min(3000 * Math.pow(2, this.consecutiveFailures), 30000);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let __4 = __8.api.getToken(),
        __10 = __8.api.getTokenExpiry();
      (!__4 || __10 < Date.now()) && await __8.api.showCaptchaModal();
      let __11 = 30000,
        __26 = Date.now();
      for (; !__8.api.getToken() || __8.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - __26 > __11) {
          console.error('[WS] Reconnect captcha timeout');
          return;
        }
        await new Promise(__27 => setTimeout(__27, 100));
      }
      this.connect();
    }, __3);
  }
  on(__3, __4) {
    this.handlers.has(__3) || this.handlers.set(__3, []), this.handlers.get(__3).push(__4);
  }
  off(__3, __4) {
    if (!this.handlers.has(__3))
      return;
    let __10 = this.handlers.get(__3),
      __11 = __10.indexOf(__4);
    __11 !== -1 && __10.splice(__11, 1);
  }
  onBinary(__3) {
    this.binaryHandlers.push(__3);
  }
  emit(__3, __4) {
    if (this.handlers.has(__3))
      for (let __10 of this.handlers.get(__3))
        __10(__4);
  }
  send(__3) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(__3) : typeof __3 == 'string' && this.messageQueue.push(__3);
  }
  sendJSON(__3) {
    this.send(JSON.stringify(__3));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
__8.ws = new __112();
var __113 = __8.ws;
var __114 = new Set([
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
  __115 = 100,
  __116 = 3,
  __117 = 5000,
  __118 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById('chat-container'), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector('#chat-header'), this.body = this.container.querySelector('#chat-body'), this.messagesEl = this.container.querySelector('#chat-messages'), this.input = this.container.querySelector('#chat-input'), this.sendBtn = this.container.querySelector('#chat-send'), this.toggleBtn = this.container.querySelector('#chat-toggle'), this.unreadEl = this.container.querySelector('#chat-unread'), this.header.addEventListener('click', () => this.toggle()), this.container.addEventListener('wheel', __3 => {
        __3.stopPropagation();
      }), this.messagesEl.addEventListener('click', __3 => {
        let __4 = __3.target.closest('.chat-coord-link');
        if (__4) {
          __3.preventDefault();
          let __10 = parseInt(__4.dataset.__47),
            __11 = parseInt(__4.dataset.__85),
            __27 = 50 / 2;
          !isNaN(__10) && !isNaN(__11) && __8.camera && __10 >= -__27 && __10 <= __27 && __11 >= -__27 && __11 <= __27 && __8.camera.centerOn(__10 * 250 + 250 / 2, __11 * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let __3 = document.createElement('div');
      __3.id = 'chat-resize-left', __3.className = 'chat-resize-handle', this.container.appendChild(__3);
      let __4 = document.createElement('div');
      __4.id = 'chat-resize-top', __4.className = 'chat-resize-handle', this.container.appendChild(__4);
      let __10 = document.createElement('div');
      __10.id = 'chat-resize-corner', __10.className = 'chat-resize-handle', this.container.appendChild(__10);
      let __11 = null,
        __26 = 0,
        __27 = 0,
        __31 = 0,
        __28 = 0,
        __29 = (__30, __41) => {
          this.isOpen && (__11 = __41, __26 = __30.clientX, __27 = __30.clientY, __31 = this.container.offsetWidth, __28 = this.container.offsetHeight, document.body.style.userSelect = 'none', __41 === 'left' ? document.body.style.cursor = 'ew-resize' : __41 === 'top' ? document.body.style.cursor = 'ns-resize' : document.body.style.cursor = 'nwse-resize', __30.preventDefault());
        };
      __3.addEventListener('mousedown', __30 => __29(__30, 'left')), __4.addEventListener('mousedown', __30 => __29(__30, 'top')), __10.addEventListener('mousedown', __30 => __29(__30, 'corner')), document.addEventListener('mousemove', __30 => {
        if (__11) {
          if (__11 === 'left' || __11 === 'corner') {
            let __41 = __26 - __30.clientX,
              __42 = Math.min(Math.max(__31 + __41, 250), 800);
            this.container.style.width = __42 + 'px';
          }
          if (__11 === 'top' || __11 === 'corner') {
            let __41 = __27 - __30.clientY,
              __42 = Math.min(Math.max(__28 + __41, 100), 700);
            this.container.style.height = __42 + 'px';
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
      let __3 = localStorage.getItem('chat-width') ?? 525;
      if (__3) {
        let __10 = parseInt(__3, 10);
        __10 >= 250 && __10 <= 800 && (this.container.style.width = __10 + 'px');
      }
      let __4 = localStorage.getItem('chat-height') ?? 330;
      if (__4) {
        let __10 = parseInt(__4, 10);
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
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener('click', __3 => {
        let __4 = __3.target.dataset.action;
        if (!(!__4 || !this.modMenuTarget)) {
          if (__4 === 'jump')
            this.jumpToUserTile(this.modMenuTarget.nick);
          else if (__4 === 'tell') {
            let __10 = `/tell ${ this.modMenuTarget.nick } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__4 === 'reply') {
            let __10 = `@${ this.modMenuTarget.nick } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__4 === 'clear')
            __8.ws.sendJSON({
              type: 'mod_action',
              action: 'clear_messages',
              target: this.modMenuTarget
            });
          else if (__4 === 'mute') {
            let __10 = prompt('Mute duration (e.g. 10m, 1h, 1d):', '1d');
            __10 && __8.ws.sendJSON({
              type: 'mod_action',
              action: 'mute',
              target: this.modMenuTarget,
              duration: __10
            });
          } else
            __4 === 'ban' && confirm(`Ban ${ this.modMenuTarget.nick }? This will also delete all their tiles.`) && __8.ws.sendJSON({
              type: 'mod_action',
              action: 'ban',
              target: this.modMenuTarget
            });
          this.hideModMenu();
        }
      }), document.addEventListener('click', __3 => {
        !this.modMenu.contains(__3.target) && !this.userMenu.contains(__3.target) && !__3.target.classList.contains('chat-nick') && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement('div'), this.userMenu.id = 'chat-user-menu', this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener('click', __3 => {
        let __4 = __3.target.dataset.action;
        if (!(!__4 || !this.userMenuTarget)) {
          if (__4 === 'jump')
            this.jumpToUserTile(this.userMenuTarget);
          else if (__4 === 'tell') {
            let __10 = `/tell ${ this.userMenuTarget } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (__4 === 'reply') {
            let __10 = `@${ this.userMenuTarget } `;
            this.input.value = __10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(__3, __4, __10) {
      this.userMenuTarget = __3, this.userMenu.hidden = !1;
      let __11 = this.userMenu.getBoundingClientRect(),
        __26 = window.innerHeight,
        __27 = window.innerWidth;
      __10 + __11.height > __26 && (__10 = __26 - __11.height - 5), __4 + __11.width > __27 && (__4 = __27 - __11.width - 5), this.userMenu.style.left = __4 + 'px', this.userMenu.style.top = __10 + 'px';
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(__3) {
      if (!__8.plot?.tileCache)
        return null;
      for (let __4 in __8.plot.tileCache)
        for (let __10 in __8.plot.tileCache[__4]) {
          let __11 = __8.plot.tileCache[__4][__10];
          if ((typeof __11 == 'string' ? __11 : __11?.domain ?? null) === __3)
            return {
              __47: parseInt(__4),
              __85: parseInt(__10)
            };
        }
      return null;
    }
    findTileByDomain(__3) {
      if (!__8.plot?.tileCache)
        return null;
      for (let __4 in __8.plot.tileCache)
        for (let __10 in __8.plot.tileCache[__4]) {
          let __11 = __8.plot.tileCache[__4][__10];
          if ((typeof __11 == 'string' ? __11 : __11?.domain ?? null) === __3)
            return {
              __47: parseInt(__4),
              __85: parseInt(__10)
            };
        }
      return null;
    }
    jumpToUserTile(__3) {
      if (!__8.camera)
        return;
      let __4 = this.findUserTile(__3);
      __4 && __8.camera.centerOn(__4.__47 * 250 + 250 / 2, __4.__85 * 250 + 250 / 2);
    }
    jumpToDomain(__3) {
      if (!__8.camera)
        return !1;
      let __4 = this.findTileByDomain(__3);
      return __4 ? (__8.camera.centerOn(__4.__47 * 250 + 250 / 2, __4.__85 * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(__3, __4, __10) {
      if (__3.admin || __3.discord)
        return;
      this.modMenuTarget = __3, this.modMenu.querySelector('#mod-menu-user-id').textContent = __3.id || '-', this.modMenu.querySelector('#mod-menu-ip').textContent = __3.ip || '-', this.modMenu.hidden = !1;
      let __11 = this.modMenu.getBoundingClientRect(),
        __26 = window.innerHeight,
        __27 = window.innerWidth;
      __10 + __11.height > __26 && (__10 = __26 - __11.height - 5), __4 + __11.width > __27 && (__4 = __27 - __11.width - 5), this.modMenu.style.left = __4 + 'px', this.modMenu.style.top = __10 + 'px';
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let __3 = __8.ws;
      __3.on('chat_history', __4 => {
        this.messages = __4.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage('Welcome to the chat! The rules are as follows:'), this.showSystemMessage('1. There is zero tolerance for NSFW conversations. Do not discuss it in chat.'), this.showSystemMessage('2. Do not spam the chat.'), this.showSystemMessage('3. Do not troll, be edgy, annoying, or disruptive. Be kind to others.'), this.showSystemMessage('4. Keep conversations in English.'), this.showSystemMessage('Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands.'), this.showedRules = !0);
      }), __3.on('message', __4 => {
        this.addMessage(__4);
      }), __3.on('system_message', __4 => {
        this.showSystemMessage(__4.message);
      }), __3.on('chat_cleared', () => {
        this.messages = [], this.messagesEl.innerHTML = '', this.showSystemMessage('Chat has been cleared');
      }), __3.on('clear_user_messages', __4 => {
        this.messages = this.messages.filter(__10 => __10.nick !== __4.nick), this.renderMessages(), (__8.user?.admin || __8.user?.moderator) && this.showSystemMessage(`Messages from ${ __4.nick } have been cleared`);
      }), __3.on('user_muted', __4 => {
        this.showSystemMessage(`${ __4.nick } has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener('keydown', __3 => {
        __3.stopPropagation(), __3.key === 'Enter' && !__3.shiftKey && (__3.preventDefault(), this.sendMessage());
      }), this.input.addEventListener('keyup', __3 => {
        __3.stopPropagation();
      }), this.input.addEventListener('keypress', __3 => {
        __3.stopPropagation();
      }), this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? '\u2212' : '+', this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = 'auto';
    }
    addMessage(__3) {
      __3.time = Date.now();
      let __4 = __8.cursors?.currentNick,
        __10 = __8.user?.sites?.map(__11 => __11.domain);
      if (__4 && __3.message) {
        let __11 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          __26 = __3.message.matchAll(__11);
        for (let __27 of __26)
          if (__10.includes(__27[1])) {
            __3.isPinged = !0;
            try {
              let __31 = new Audio('/s/ping.mp3');
              __31.volume = 0.5, __31.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(__3), this.messages.length > __115 && this.messages.shift(), this.appendMessageEl(__3), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(__3) {
      return __3.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
    escapeURL(__3) {
      return __3.replaceAll('"', '%22').replaceAll('\'', '%27').replaceAll('`', '%60');
    }
    escapeURLDisplay(__3) {
      return __3.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    parseMessage(__3) {
      let __4 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        __10 = [];
      __3 = __3.replace(__4, (__30, __41) => (__10.push(__41), `<span class="chat-ping">@${ this.escapeHTML(__41) }</span>`));
      let __11 = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        __26 = 250,
        __31 = 50 / 2;
      __3 = __3.replace(__11, (__30, __41, __42, __43) => {
        if (__41) {
          let __44 = __41.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (__44) {
            let __45 = parseInt(__44[1]),
              __46 = parseInt(__44[2]),
              __50 = Math.floor(__45 / __26),
              __51 = Math.floor(__46 / __26);
            if (__50 >= -__31 && __50 <= __31 && __51 >= -__31 && __51 <= __31)
              return `<a href="#" class="chat-coord-link" data-x="${ __50 }" data-y="${ __51 }">${ __50 }, ${ __51 }</a>`;
          }
          return `<a href="${ this.escapeURL(__41) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(this.escapeURL(__41)) }</a>`;
        }
        if (__42 && __114.has(__43.toLowerCase()) && !__10.includes(__42)) {
          let __44 = 'https://' + __42;
          return `<a href="${ this.escapeURL(__44) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(__42) }</a>`;
        }
        return __30;
      });
      let __28 = /(-?\d+),\s*(-?\d+)/g;
      __3 = __3.replace(__28, (__30, __41, __42) => {
        let __43 = parseInt(__41),
          __44 = parseInt(__42);
        return __43 >= -__31 && __43 <= __31 && __44 >= -__31 && __44 <= __31 ? `<a href="#" class="chat-coord-link" data-x="${ __41 }" data-y="${ __42 }">${ __30 }</a>` : __30;
      });
      let __29 = (__30, __41, __42, __43) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${ __43 }.${ __41 ? 'gif' : 'png' }?v=1" alt=":${ this.escapeHTML(__42) }:" title=":${ this.escapeHTML(__42) }:" width="20">`;
      return __3 = __3.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, __29), __3 = __3.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, __29), __3 = __3.replace(/\*\*([^*]+)\*\*/g, (__30, __41) => `<strong>${ __41 }</strong>`), __3 = __3.replace(/\*([^*]+)\*/g, (__30, __41) => `<em>${ __41 }</em>`), __3 = __3.replace(/~~([^~]+)~~/g, (__30, __41) => `<s>${ __41 }</s>`), __3 = __3.replace(/__([^_]+)__/g, (__30, __41) => `<u>${ __41 }</u>`), __3 = __3.replace(/\|\|([^|]+)\|\|/g, (__30, __41) => `<span class="chat-spoiler">${ __41 }</span>`), __3;
    }
    appendMessageEl(__3) {
      let __4 = document.createElement('div');
      __4.className = 'chat-message', __3.admin && __4.classList.add('chat-admin'), __3.mod && __4.classList.add('chat-mod'), __3.discord && __4.classList.add('chat-discord'), __3.isPinged && __4.classList.add('chat-pinged');
      let __10 = document.createElement('span');
      __10.className = 'chat-nick', __10.dataset.nick = __3.nick;
      let __11 = __8.user?.admin || __8.user?.moderator;
      __3.discord || (__10.classList.add('chat-nick-clickable'), __10.addEventListener('click', __30 => {
        __30.stopPropagation(), __11 && !__3.admin ? this.showModMenu(__3, __30.clientX, __30.clientY) : this.findUserTile(__3.nick) && this.showUserMenu(__3.nick, __30.clientX, __30.clientY);
      })), __3.admin ? __10.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(__3.nick) + ': ' : __3.mod ? __10.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(__3.nick) + ': ' : __3.discord ? __10.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(__3.nick) + ': ' : __10.textContent = __3.nick + ': ';
      let __26 = document.createElement('span');
      __26.className = 'chat-text', __3.admin || __3.mod ? __26.innerHTML = this.parseMessage(__3.message).replace(/\n/g, '<br>') : __26.innerHTML = this.parseMessage(this.escapeHTML(__3.message)).replace(/\n/g, '<br>');
      let __27 = __26.querySelectorAll('.emoji');
      for (let __30 of __27)
        __30.addEventListener('error', __41 => {
          __41.target.remove();
        });
      let __31 = __26.querySelectorAll('.chat-spoiler');
      for (let __30 of __31)
        __30.addEventListener('click', __41 => {
          __41.target.closest('.chat-spoiler').classList.toggle('chat-spoiler-revealed');
        });
      let __28 = document.createElement('span');
      __28.className = 'chat-time';
      let __29 = new Date(__3.time || Date.now());
      for (__28.textContent = __29.getHours().toString().padStart(2, '0') + ':' + __29.getMinutes().toString().padStart(2, '0'), __4.appendChild(__10), __4.appendChild(__26), __4.appendChild(__28), this.messagesEl.appendChild(__4); this.messagesEl.children.length > __115;)
        this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = '';
      for (let __3 of this.messages)
        this.appendMessageEl(__3);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(__3 = !1) {
      let __4 = this.messagesEl;
      (__4.scrollHeight - __4.scrollTop - __4.clientHeight <= 120 || __3) && (__4.scrollTop = __4.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!__8.user) {
        this.showSystemMessage('Please login to chat');
        return;
      }
      let __3 = this.input.value.trim();
      if (!__3 || __3.length > 500)
        return;
      let __4 = __3.split(`
`);
      if (__4.length > 5 && (__3 = __4.slice(0, 5).join(`
`)), __3 === '/help') {
        this.showSystemMessage('Available commands:'), this.showSystemMessage('/jump [domain] - Jump to a tile by domain'), this.showSystemMessage('/jump X Y - Jump to coordinates X, Y'), this.showSystemMessage('/tell [domain] [msg] - Send a message to a specific domain'), this.input.value = '';
        return;
      }
      if (__3.startsWith('/jump ') || __3.startsWith('/tp ')) {
        let __10 = __3.split(' ').slice(1).join(' ');
        if (__10) {
          let __11 = __10.match(/^(-?\d+)\s+(-?\d+)$/);
          if (__11) {
            let __26 = parseInt(__11[1]),
              __27 = parseInt(__11[2]),
              __28 = 50 / 2;
            !isNaN(__26) && !isNaN(__27) && __8.camera && __26 >= -__28 && __26 <= __28 && __27 >= -__28 && __27 <= __28 ? (__8.camera.centerOn(__26 * 250 + 250 / 2, __27 * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${ __26 }, ${ __27 }`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${ __28 } and ${ __28 }`);
          } else {
            let __26 = __10;
            this.jumpToDomain(__26) ? this.showSystemMessage(`Jumped to ${ __26 }`) : this.showSystemMessage(`Tile with domain "${ __26 }" not found`);
          }
        } else
          this.showSystemMessage('Usage: /jump [domain] or /jump X Y');
        this.input.value = '';
        return;
      }
      if (!__8.cursors?.currentNick) {
        this.showSystemMessage('Select a site to chat');
        return;
      }
      if (!__3.startsWith('/')) {
        let __10 = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(__11 => __10 - __11 < __117), this.messageTimestamps.length >= __116)
          return;
        this.messageTimestamps.push(__10);
      }
      __8.ws.sendJSON({
        type: 'message',
        value: __3
      }), this.input.value = '';
    }
    showSystemMessage(__3) {
      let __4 = document.createElement('div');
      __4.className = 'chat-message chat-system', __4.innerHTML = this.parseMessage(this.escapeHTML(__3)).replace(/\n/g, '<br>'), this.messagesEl.appendChild(__4), this.scrollToBottom();
    }
  };
__8.chat = new __118();
var __119 = __8.chat;
var __120 = document.getElementById('loading-text'),
  __121 = 0,
  __122 = setInterval(() => {
    __120.innerText = `Loading${ '.'.repeat(__121++ % 4) }`;
  }, 200),
  __123 = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById('plot'), this.worldSize = __36, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let __3 in this.tiles) {
          let __4 = this.tiles[__3];
          !__4.rendered && Date.now() - __4.lastRender > 30000 && delete this.tiles[__3];
        }
      }, 10000), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1000 * 60), setInterval(() => this.fetchTiles(), 1000 * 60), this.editorChannel = new BroadcastChannel('editor'), this.editorChannel.onmessage = __3 => {
        if (__3.data.type === 'saved') {
          let {
            path: __4,
            site: __10
          } = __3.data;
          this.refreshTile(__10, __4);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      __8.ws && (__8.ws.on('refresh', __3 => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          let __4 = null;
          for (let __10 in this.tileCache) {
            for (let __11 in this.tileCache[__10]) {
              let __26 = this.tileCache[__10][__11];
              if ((typeof __26 == 'string' ? null : __26?.domain ?? null) === __3.domain) {
                __4 = typeof __26 == 'object' && __26.updated_at ? __26.updated_at : Math.floor(Date.now() / 1000);
                break;
              }
            }
            if (__4 !== null)
              break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: 'tile-refresh',
            domain: __3.domain,
            lastUpdate: __4 || Math.floor(Date.now() / 1000)
          });
        }
        setTimeout(() => {
          this.refreshTile(__3.domain, __3.path);
        }, 500);
      }), __8.ws.on('claim', __3 => {
        this.tileCache[__3.__47] = this.tileCache[__3.__47] || {}, this.tileCache[__3.__47][__3.__85] = typeof __3.domain == 'string' ? {
          domain: __3.domain,
          updated_at: Math.floor(Date.now() / 1000)
        } : __3.domain;
        let __4 = this.tiles[`${ __3.__47 },${ __3.__85 }`];
        if (__4) {
          let __10 = typeof this.tileCache[__3.__47][__3.__85] == 'string' ? this.tileCache[__3.__47][__3.__85] : this.tileCache[__3.__47][__3.__85].domain;
          __4.setDomain(__10);
        }
      }), __8.ws.on('free', __3 => {
        this.tileCache[__3.__47] && delete this.tileCache[__3.__47][__3.__85];
        let __4 = this.tiles[`${ __3.__47 },${ __3.__85 }`];
        __4 && __4.setFree();
      }), __8.ws.on('lock', __3 => {
        __3.locked ? this.lockCache[__3.__47 + ',' + __3.__85] = !0 : delete this.lockCache[__3.__47 + ',' + __3.__85];
        let __4 = this.tiles[`${ __3.__47 },${ __3.__85 }`];
        __4 && __4.setLocked(__3.locked);
      }), __8.ws.on('user_count', __3 => {
        let __4 = document.getElementById('user-count');
        __4 && (__4.textContent = `${ __3.count } online`);
      }), __8.ws.on('clan_invite', __3 => {
        __3.invite && (__8.ui.pendingClanInvites.find(__10 => __10.id === __3.invite.id) || (__8.ui.pendingClanInvites.push({
          id: __3.invite.id,
          clan_id: __3.invite.clan_id,
          clan_name: __3.invite.clan_name
        }), __8.ui.updateClanIndicator()));
      }));
    }
    refreshTile(__3, __4) {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __10 = null;
        for (let __11 in this.tileCache) {
          for (let __26 in this.tileCache[__11]) {
            let __27 = this.tileCache[__11][__26];
            if ((typeof __27 == 'string' ? null : __27?.domain ?? null) === __3) {
              __10 = typeof __27 == 'object' && __27.updated_at ? __27.updated_at : Math.floor(Date.now() / 1000);
              break;
            }
          }
          if (__10 !== null)
            break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: 'tile-refresh',
          domain: __3,
          lastUpdate: __10 || Math.floor(Date.now() / 1000)
        });
      }
      for (let __10 in this.tiles) {
        let __11 = this.tiles[__10];
        if (__11.domain === __3 && __11.path === __4) {
          if (__11.active)
            break;
          __11.fetchContent(__11.path, !0);
          break;
        }
      }
    }
    addTile(__3) {
      this.tiles[`${ __3.__47 },${ __3.__85 }`] = __3;
    }
    getTile(__3, __4) {
      if (__3 > this.worldSize / 2 || __3 < -this.worldSize / 2 || __4 > this.worldSize / 2 || __4 < -this.worldSize / 2)
        return null;
      if (!this.tiles[`${ __3 },${ __4 }`]) {
        let __10 = this.tileCache?.[__3]?.[__4],
          __11 = typeof __10 == 'string' ? __10 : __10?.domain ?? null;
        this.tiles[`${ __3 },${ __4 }`] = new __100({
          __47: __3,
          __85: __4,
          domain: __11 ?? null
        });
      }
      return this.tiles[`${ __3 },${ __4 }`];
    }
    removeTile(__3) {
      __3.unrender(), delete this.tiles[`${ __3.__47 },${ __3.__85 }`];
    }
    clear() {
      Object.values(this.tiles).forEach(__3 => __3.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await __8.api.makeRequest('/api/tiles').then(__3 => __3.json())).tiles, 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let __3 = {};
        for (let __4 in this.tileCache)
          for (let __10 in this.tileCache[__4]) {
            let __11 = this.tileCache[__4][__10];
            typeof __11 == 'object' && __11.domain && __11.updated_at && (__3[__11.domain] = __11.updated_at.toString());
          }
        Object.keys(__3).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: 'tile-updates',
          updates: __3
        });
      }
      for (let __3 in this.tileCache)
        for (let __4 in this.tileCache[__3]) {
          let __10 = this.tileCache[__3][__4],
            __11 = typeof __10 == 'string' ? __10 : __10?.domain ?? null,
            __26 = this.tiles[`${ __3 },${ __4 }`];
          __26 && __26.domain !== __11 && __26.setDomain(__11);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let __3 = document.getElementById('loading'),
          __4 = document.getElementById('app');
        __3.hidden = !0, __4.hidden = !1, clearInterval(__122);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await __8.api.makeRequest('/api/locks').then(__3 => __3.json())).locks;
      for (let __3 in this.lockCache) {
        let __4 = this.tiles[__3];
        __4 && __4.element && __4.setLocked(!0);
      }
    }
  };
__8.plot = new __123();
var __124 = document.getElementById('plot'),
  __125 = class {
    constructor() {
      if (this.__47 = 0, this.__85 = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith('#') && location.hash.includes(','))
        try {
          let [__41, __42] = location.hash.slice(1).split(',');
          this.centerOn(parseInt(__41), parseInt(__42)), location.hash = '';
        } catch {}
      let __3 = 0,
        __4 = 0;
      setInterval(() => {
        let __41 = this.__47 + this.width / 2,
          __42 = this.__85 + this.height / 2;
        (__41 != __3 || __42 != __4) && (__3 = __41, __4 = __42);
      }, 1000), window.addEventListener('resize', () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let __10 = 0;
      this.zoomEnabled = !0, this.wheelHandler = __41 => {
        if (!this.zoomEnabled || __41.target.closest('.tile.active'))
          return;
        __41.preventDefault();
        let __42 = __41.deltaY;
        if (Math.abs(__42) > 1 && Date.now() - __10 > 100) {
          let __44 = __35.indexOf(this.zoom) + (__42 > 0 ? -1 : 1);
          if (__44 >= 1 && __44 < __35.length) {
            let __45 = __8.mouse?.__47 || this.width / 2,
              __46 = __8.mouse?.__85 || this.height / 2;
            this.zoomTo(__45, __46, __35[__44]), __10 = Date.now();
          }
        }
      }, window.addEventListener('wheel', this.wheelHandler, {
        passive: !1
      });
      let __11 = 0,
        __26 = {
          __47: 0,
          __85: 0
        },
        __27 = __41 => {
          let __42 = __41[0].clientX - __41[1].clientX,
            __43 = __41[0].clientY - __41[1].clientY;
          return Math.sqrt(__42 * __42 + __43 * __43);
        },
        __31 = __41 => ({
          __47: (__41[0].clientX + __41[1].clientX) / 2,
          __85: (__41[0].clientY + __41[1].clientY) / 2
        });
      document.addEventListener('touchstart', __41 => {
        __41.touches.length === 2 && (__11 = __27(__41.touches), __26 = __31(__41.touches));
      }, {
        passive: !0
      }), document.addEventListener('touchmove', __41 => {
        if (this.zoomEnabled && __41.touches.length === 2) {
          if (__41.target.closest('.tile.active'))
            return;
          let __42 = __27(__41.touches),
            __43 = __31(__41.touches);
          if (__11 > 0) {
            let __44 = __42 / __11,
              __45 = __35.indexOf(this.zoom);
            __44 > 1.1 && __45 < __35.length - 1 ? (this.zoomTo(__43.__47, __43.__85, __35[__45 + 1]), __11 = __42) : __44 < 0.9 && __45 > 1 && (this.zoomTo(__43.__47, __43.__85, __35[__45 - 1]), __11 = __42);
          }
          __26 = __43, __41.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener('touchend', __41 => {
        __41.touches.length < 2 && (__11 = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let __28 = __41 => {
          __41.key in this.keysPressed && (__41.preventDefault(), this.keysPressed[__41.key] = !0);
        },
        __29 = __41 => {
          __41.key in this.keysPressed && (__41.preventDefault(), this.keysPressed[__41.key] = !1);
        };
      window.addEventListener('keydown', __28), window.addEventListener('keyup', __29);
      let __30 = () => {
        if (!__8.plot?.activeTile) {
          let __41 = 0,
            __42 = 0;
          this.keysPressed.ArrowLeft && (__41 -= this.moveSpeed), this.keysPressed.ArrowRight && (__41 += this.moveSpeed), this.keysPressed.ArrowUp && (__42 -= this.moveSpeed), this.keysPressed.ArrowDown && (__42 += this.moveSpeed), (__41 !== 0 || __42 !== 0) && this.move(this.__47 + __41, this.__85 + __42);
        }
        requestAnimationFrame(__30);
      };
      __30();
    }
    move(__3, __4) {
      this.__47 = Math.round(__3), this.__85 = Math.round(__4), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      __124.style.transform = `translate3d(${ -this.__47 }px, ${ -this.__85 }px, 0) scale(${ this.zoom })`;
    }
    zoomTo(__3, __4, __10) {
      let __11 = (this.__47 + __3) / this.zoom,
        __26 = (this.__85 + __4) / this.zoom;
      this.zoom = __10, this.__47 = __11 * this.zoom - __3, this.__85 = __26 * this.zoom - __4, __8.ui.zoomSlider.value = this.zoom, this.move(this.__47, this.__85);
    }
    centerOn(__3, __4) {
        let __10 = __3 * this.zoom - this.width / 2,
          __11 = __4 * this.zoom - this.height / 2;
        this.move(__10, __11);
      }
      * getTilesInView() {
        let __3 = __100.toTilePosition((this.__47 - 250 * this.zoom) / this.zoom, (this.__85 - 250 * this.zoom) / this.zoom),
          __4 = __100.toTilePosition((this.__47 + 250 * this.zoom + this.width) / this.zoom, (this.__85 + 250 * this.zoom + this.height) / this.zoom);
        for (let __10 = __3.__47; __10 < __4.__47; __10++)
          for (let __11 = __3.__85; __11 < __4.__85; __11++) {
            let __26 = __8.plot.getTile(__10, __11);
            __26 && (yield __26);
          }
      }
      * getTilesInViewWithBuffer(__3 = 500) {
        let __4 = __100.toTilePosition((this.__47 - 250 * this.zoom - __3) / this.zoom, (this.__85 - 250 * this.zoom - __3) / this.zoom),
          __10 = __100.toTilePosition((this.__47 + 250 * this.zoom + this.width + __3) / this.zoom, (this.__85 + 250 * this.zoom + this.height + __3) / this.zoom);
        for (let __11 = __4.__47; __11 < __10.__47; __11++)
          for (let __26 = __4.__85; __26 < __10.__85; __26++) {
            let __27 = __8.plot.getTile(__11, __26);
            __27 && (yield __27);
          }
      }
    isTileWithinBuffer(__3, __4 = 500) {
      let __10 = __3.__47 * 250,
        __11 = __3.__85 * 250,
        __26 = 250,
        __27 = this.__47 / this.zoom,
        __31 = (this.__47 + this.width) / this.zoom,
        __28 = this.__85 / this.zoom,
        __29 = (this.__85 + this.height) / this.zoom,
        __30 = __10 + __26,
        __41 = __11 + __26,
        __42 = __4 / this.zoom,
        __43 = 0;
      __30 < __27 ? __43 = __27 - __30 : __10 > __31 && (__43 = __10 - __31);
      let __44 = 0;
      return __41 < __28 ? __44 = __28 - __41 : __11 > __29 && (__44 = __11 - __29), Math.sqrt(__43 * __43 + __44 * __44) <= __42;
    }
    renderTilesInView() {
      let __3 = new Set(),
        __4 = 260;
      for (let __10 of this.getTilesInViewWithBuffer(__4))
        __10.render(), __3.add(__10);
      if (this.renderedTiles)
        for (let __10 of this.renderedTiles)
          __3.has(__10) || (this.isTileWithinBuffer(__10, __4) ? __3.add(__10) : __10.unrender());
      this.renderedTiles = __3;
    }
    setZoomEnabled(__3) {
      this.zoomEnabled = __3;
    }
  };
__8.camera = new __125();
var __126 = class {
  constructor() {
    this.__47 = 0, this.__85 = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let __3 = 0,
      __4 = 0,
      __10 = 0,
      __11 = 0,
      __26 = 0,
      __27 = (__29, __30, __41) => {
        if (!__41.closest('#plot') || __41.closest('.tile-info, .tile-admin-panel, .tile-vote-menu'))
          return !1;
        let __42 = __8.plot.getTile(this.tileX, this.tileY);
        return __8.plot.activeTile && __8.plot.activeTile.id === __42.id ? !1 : (this.down = !0, __10 = __29, __11 = __30, __3 = __8.camera.__47, __4 = __8.camera.__85, __26 = Date.now(), !0);
      },
      __31 = () => {
        if (!this.down)
          return;
        this.down = !1;
        let __29 = Math.abs(this.__47 - __10),
          __30 = Math.abs(this.__85 - __11);
        Date.now() - __26 < 400 && __29 < 10 && __30 < 10 && __8.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      __28 = (__29, __30) => {
        this.__47 = __29, this.__85 = __30;
        let __41 = __8.camera;
        this.worldX = (__41.__47 + this.__47) / __41.zoom, this.worldY = (__41.__85 + this.__85) / __41.zoom;
        let __42 = __100.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = __42.__47, this.tileY = __42.__85, __8.ui.coords.textContent = `${ this.tileX }, ${ this.tileY }`, document.documentElement.style.setProperty('--coords-width', __8.ui.coords.offsetWidth + 'px'), this.down) {
          let __43 = this.__47 - __10,
            __44 = this.__85 - __11;
          __41.move(__3 - __43, __4 - __44);
        }
      };
    document.addEventListener('mousedown', __29 => {
      __27(__29.clientX, __29.clientY, __29.target) && __29.preventDefault();
    }), document.addEventListener('mouseup', __29 => {
      __31();
    }), document.addEventListener('mousemove', __29 => {
      __28(__29.clientX, __29.clientY);
    }), document.addEventListener('touchstart', __29 => {
      if (__29.touches.length === 1) {
        let __30 = __29.touches[0];
        __27(__30.clientX, __30.clientY, __30.target);
      }
    }, {
      passive: !0
    }), document.addEventListener('touchend', __29 => {
      __31();
    }), document.addEventListener('touchcancel', __29 => {
      this.down = !1;
    }), document.addEventListener('touchmove', __29 => {
      if (__29.touches.length === 1) {
        let __30 = __29.touches[0];
        __28(__30.clientX, __30.clientY), this.down && __30.target.closest('#plot') && !__30.target.closest('.tile.active') && __29.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
__8.mouse = new __126();
var __127 = document.getElementById('plot'),
  __128 = document.getElementById('dashboard-modal'),
  __129 = '/s/img/cursor.png',
  __130 = 150,
  __131 = 50,
  __132 = 100,
  __133 = 100,
  __134 = 150,
  __135 = 500,
  __136 = 0.6,
  __137 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let __3 = __8.ws;
      __3.on('open', () => {
        this.sendNickIfSelected();
      }), __3.on('close', () => {
        this.clearAllCursors();
      }), __3.on('cursors', __4 => {
        for (let __10 of __4.cursors)
          this.addCursor(__10.id, __10.nick, __10.__47, __10.__85);
      }), __3.on('join', __4 => {
        this.addCursor(__4.id, __4.nick, 0, 0);
      }), __3.on('leave', __4 => {
        this.removeCursor(__4.id);
      }), __3.onBinary(__4 => {
        let __10 = new Int32Array(__4);
        if (__10.length >= 3) {
          let __11 = __10[0],
            __26 = __10[1],
            __27 = __10[2];
          this.updateCursorPosition(__11, __26, __27);
        }
      });
    }
    addCursor(__3, __4, __10, __11) {
      if (__4 === this.currentNick)
        return;
      if (this.cursors.has(__3)) {
        this.updateCursorPosition(__3, __10, __11);
        return;
      }
      this.cursors.set(__3, {
        id: __3,
        nick: __4,
        __47: __10,
        __85: __11,
        element: null
      }), this.updateElementPosition(__3, __10, __11);
      let __26 = this.cursors.get(__3);
      __26.element && (__26.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(__3) {
      let __4 = this.cursors.get(__3);
      __4 && (__4.element && __4.element.parentNode && __4.element.remove(), this.cursors.delete(__3));
    }
    updateCursorPosition(__3, __4, __10) {
      let __11 = this.cursors.get(__3);
      __11 && (__11.__47 = __4, __11.__85 = __10, this.updateElementPosition(__3, __4, __10));
    }
    isCursorOnScreen(__3, __4) {
      let __10 = __8.camera;
      if (!__10)
        return !0;
      let __11 = __10.__47 / __10.zoom,
        __26 = (__10.__47 + __10.width) / __10.zoom,
        __27 = __10.__85 / __10.zoom,
        __31 = (__10.__85 + __10.height) / __10.zoom;
      return __3 >= __11 && __3 <= __26 && __4 >= __27 && __4 <= __31;
    }
    updateElementPosition(__3, __4, __10) {
      let __11 = this.cursors.get(__3);
      if (!__11)
        return;
      let __26 = this.isCursorOnScreen(__4, __10);
      if (__4 === 0 && __10 === 0 || !__26)
        __11.element && __11.element.parentNode && (__11.element.remove(), __11.element = null);
      else {
        if (!__11.element || !__11.element.parentNode) {
          let __27 = document.createElement('div');
          __27.className = 'cursor-container', __27.innerHTML = `
                    <img class="cursor-image" src="${ __129 }" alt="cursor" />
                    <div class="cursor-nick">${ this.escapeHTML(__11.nick) }</div>
                `, __27.style.opacity = this.getCursorOpacityFromCenter(), __11.element = __27, __127.appendChild(__27);
        }
        __11.element.style.transform = `translate(${ __4 }px, ${ __10 }px)`, this.updateNickOpacity(__11.element, __4, __10);
      }
    }
    updateNickOpacity(__3, __4, __10) {
      let __11 = __3.querySelector('.cursor-nick');
      if (!__11)
        return;
      let __26 = this.mouseWorldX - __4,
        __27 = this.mouseWorldY - __10,
        __31 = Math.sqrt(__26 * __26 + __27 * __27),
        __28 = Math.max(0, 1 - __31 / __130);
      __11.style.opacity = __28;
    }
    updateAllNickOpacities() {
      for (let __3 of this.cursors.values())
        __3.element && this.updateNickOpacity(__3.element, __3.__47, __3.__85);
    }
    getCursorOpacityFromCenter() {
      let __3 = this.mouseWorldX - __132,
        __4 = this.mouseWorldY - __133,
        __10 = Math.sqrt(__3 * __3 + __4 * __4);
      return __10 <= __134 ? 0 : __10 >= __135 ? __136 : (__10 - __134) / (__135 - __134) * __136;
    }
    updateAllCursorOpacities() {
      let __3 = this.getCursorOpacityFromCenter();
      for (let __4 of this.cursors.values())
        __4.element && (__4.element.style.opacity = __3);
    }
    clearAllCursors() {
      for (let __3 of this.cursors.values())
        __3.element && __3.element.parentNode && __3.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let __3 of this.cursors.values())
        this.updateElementPosition(__3.id, __3.__47, __3.__85);
    }
    setupMouseTracking() {
      document.addEventListener('mousemove', __3 => {
        let __4 = __8.camera;
        if (!__4 || (this.mouseWorldX = Math.round((__4.__47 + __3.clientX) / __4.zoom), this.mouseWorldY = Math.round((__4.__85 + __3.clientY) / __4.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !__8.ws.isConnected) || !this.currentNick || __12.activeModal || __128?.classList.contains('active') || Date.now() - this.lastPositionSent < 25)
          return;
        let __10 = new Int16Array(3);
        __10[0] = this.mouseWorldX, __10[1] = this.mouseWorldY, __10[2] = 0, __8.ws.send(__10.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let __3 = __8.ui?.siteSelector;
      __3 && __3.addEventListener('change', () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener('resize', () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener('mousedown', __3 => {
        if (__3.button !== 1 || this.getCursorOpacityFromCenter() < 0.05)
          return;
        let __10 = this.getClosestCursor();
        __10 && __10.distance <= __131 && (__3.preventDefault(), window.open(`https://${ __10.cursor.nick }`, '_blank'));
      });
    }
    getClosestCursor() {
      let __3 = null,
        __4 = 1 / 0;
      for (let __10 of this.cursors.values()) {
        let __11 = this.mouseWorldX - __10.__47,
          __26 = this.mouseWorldY - __10.__85,
          __27 = Math.sqrt(__11 * __11 + __26 * __26);
        __27 < __4 && (__4 = __27, __3 = __10);
      }
      return __3 ? {
        cursor: __3,
        distance: __4
      } : null;
    }
    sendNickIfSelected() {
      if (!__8.ws.isConnected)
        return;
      let __3 = __8.user?.selectedSite;
      if (!__3 || !__3.domain) {
        this.currentNick = null;
        return;
      }
      let __4 = __3.domain;
      this.currentNick = __4;
      for (let [__10, __11] of this.cursors.entries())
        __11.nick === __4 && this.removeCursor(__10);
      __8.ws.sendJSON({
        type: 'nick',
        value: __4
      });
    }
    escapeHTML(__3) {
      return __3 ? __3.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }
  },
  __138 = __137;
if ('serviceWorker' in navigator) {
  let __3 = 'sw_version',
    __4 = async () => {
      try {
        let __11 = await navigator.serviceWorker.register('/sw.js');
        return console.log('[SW] Service Worker registered:', __11.scope), __11;
      } catch (__11) {
        return console.error('[SW] Service Worker registration failed:', __11), null;
      }
    };
  (async () => {
    let __11 = localStorage.getItem(__3),
      __26 = '12';
    if (__11 !== __26) {
      console.log(`[SW] Version mismatch: stored=${ __11 }, current=${ __26 }`);
      let __27 = await navigator.serviceWorker.getRegistrations();
      for (let __28 of __27)
        await __28.unregister(), console.log('[SW] Unregistered old service worker');
      let __31 = await caches.keys();
      await Promise.all(__31.map(__28 => {
        if (__28.includes('webtiles'))
          return console.log(`[SW] Deleting cache: ${ __28 }`), caches.delete(__28);
      })), localStorage.setItem(__3, __26), await __4();
    } else
      (await navigator.serviceWorker.getRegistrations()).length === 0 && await __4();
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: 'clear-cache'
    });
  });
}
__8.cursors = new __138();
__8.user?.admin && (window.WebTiles = {
  ...__8,
  classes: {
    Tile: __100,
    Camera: __125,
    Plot: __123,
    Mouse: __126,
    Cursors: __138
  }
});
var __139 = Date.now();
async function __140() {
  let __3 = await (await __8.api.makeRequest('/s/dist/buildtime.txt')).text();
  return parseInt(__3);
}
__140().then(__2 => {
  __139 = __2;
});
var __141 = setInterval(async () => {
  let __2 = await __140();
  if (__2 !== __139) {
    clearInterval(__141), __139 = __2;
    let __3 = document.createElement('div');
    __3.id = 'update-toast', __3.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(__3), document.getElementById('refresh-btn').addEventListener('click', () => {
      location.reload();
    });
  }
}, 60000);