/* 860c375cbdab38ab8f9161dd0e3791c73f6316d880ea16090b00d457acfbe42a */
var _0x0 = Object.defineProperty;
var _0x1 = (_0x2, _0x3, _0x4) => _0x3 in _0x2 ? _0x0(_0x2, _0x3, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: _0x4
}) : _0x2[_0x3] = _0x4;
var _0x5 = (_0x2, _0x3, _0x4) => _0x1(_0x2, typeof _0x3 != 'symbol' ? _0x3 + '' : _0x3, _0x4);
var _0x6 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  _0x7 = document.getElementById('user-data');
if (_0x7)
  try {
    let _0x2 = JSON.parse(_0x7.textContent);
    _0x2 && _0x2.email_verified && (_0x6.user = _0x2);
  } catch (_0x2) {
    console.error(_0x2);
  }
var _0x8 = _0x6;
var _0x9 = class _0x9 {
  static init() {
    _0x9.container || (_0x9.container = document.createElement('div'), _0x9.container.id = 'modal-container', _0x9.container.className = 'modal-overlay', _0x9.container.addEventListener('click', _0x3 => {
      _0x3.target === _0x9.container && _0x9.activeModal && _0x9.activeModal.close();
    }), document.body.appendChild(_0x9.container));
  }
  constructor(_0x3 = {}) {
    this.title = _0x3.title || '', this.content = _0x3.content || '', this.warning = _0x3.warning || null, this.buttons = _0x3.buttons || [], this.onClose = _0x3.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(_0x3) {
    let _0x4 = document.createElement('button');
    return _0x4.className = `modal-btn modal-btn-${ _0x3.type || 'default' }`, _0x4.textContent = _0x3.text, _0x3.disabled && (_0x4.disabled = !0), _0x4.addEventListener('click', async () => {
      _0x3.onClick && await _0x3.onClick(this, _0x4);
    }), this._buttonElements.set(_0x3.id || _0x3.text, _0x4), _0x4;
  }
  _build() {
    let _0x3 = document.createElement('div');
    if (_0x3.className = 'modal-content', this.title) {
      let _0x4 = document.createElement('h3');
      _0x4.className = 'modal-title', _0x4.textContent = this.title, _0x3.appendChild(_0x4);
    }
    if (this.content) {
      let _0x4 = document.createElement('div');
      _0x4.className = 'modal-body', typeof this.content == 'string' ? _0x4.innerHTML = this.content : this.content instanceof HTMLElement && _0x4.appendChild(this.content), _0x3.appendChild(_0x4);
    }
    if (this._warningEl = document.createElement('div'), this._warningEl.className = 'modal-warning', this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none', _0x3.appendChild(this._warningEl), this.buttons.length > 0) {
      let _0x4 = document.createElement('div');
      _0x4.className = 'modal-actions';
      for (let _0xa of this.buttons)
        _0x4.appendChild(this._createButton(_0xa));
      _0x3.appendChild(_0x4);
    }
    return this.element = _0x3, _0x3;
  }
  open() {
    return _0x9.init(), _0x9.activeModal && _0x9.activeModal.close(), this._build(), _0x9.container.innerHTML = '', _0x9.container.appendChild(this.element), _0x9.container.classList.add('active'), _0x9.activeModal = this, _0x8.camera && _0x8.camera.setZoomEnabled(!1), this;
  }
  close() {
    return _0x9.container && _0x9.container.classList.remove('active'), _0x9.activeModal = null, this._buttonElements.clear(), _0x8.camera && _0x8.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(_0x3) {
    let _0x4 = this.element?.querySelector('.modal-body');
    return _0x4 && (typeof _0x3 == 'string' ? _0x4.innerHTML = _0x3 : _0x3 instanceof HTMLElement && (_0x4.innerHTML = '', _0x4.appendChild(_0x3))), this.content = _0x3, this;
  }
  setWarning(_0x3) {
    return this._warningEl && (_0x3 ? (this._warningEl.innerHTML = _0x3, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none'), this.warning = _0x3, this;
  }
  getButton(_0x3) {
    return this._buttonElements.get(_0x3);
  }
  setButtonLoading(_0x3, _0x4, _0xa) {
    let _0xb = this.getButton(_0x3);
    return _0xb ? (_0x4 ? (_0xb._originalText = _0xb._originalText || _0xb.textContent, _0xb.textContent = _0xa || 'Loading...', _0xb.disabled = !0) : (_0xb.textContent = _0xb._originalText || _0xb.textContent, _0xb.disabled = !1), this) : this;
  }
};
_0x5(_0x9, 'container', null), _0x5(_0x9, 'activeModal', null);
var _0xc = _0x9;

function _0xd() {
  return document.querySelector('meta[name="turnstile-sitekey"]')?.content || '';
}
var _0xe = _0xd(),
  _0xf = localStorage.getItem('captchaToken'),
  _0x10 = parseInt(localStorage.getItem('captchaExpiresAt') || '0'),
  _0x11 = null,
  _0x12 = [],
  _0x13 = !1,
  _0x14 = 0,
  _0x15 = 5000;
_0x10 < Date.now() && (_0xf = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt'));

function _0x16() {
  _0xf = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt');
}

function _0x17(_0x2, _0x3) {
  _0xf = _0x2, _0x10 = _0x3, localStorage.setItem('captchaToken', _0x2), localStorage.setItem('captchaExpiresAt', _0x3);
}

function _0x18() {
  return _0x13 ? !0 : window.turnstile ? (_0x13 = !0, !0) : !1;
}

function _0x19(_0x2, _0x3) {
  if (!_0x18())
    return console.error('[Captcha] Turnstile not ready'), !1;
  let _0x4 = _0xd() || _0xe || '';
  if (!_0x4)
    return !0;
  let _0xa = typeof _0x2 == 'string' ? document.querySelector(_0x2) : _0x2;
  if (!_0xa)
    return console.error('[Captcha] Container not found:', _0x2), !1;
  _0xa.innerHTML = '';
  let _0xb = window.turnstile;
  return _0xb.render(_0xa, {
    sitekey: _0x4,
    callback: async function(_0x1a) {
      let _0x1b = document.getElementById('loading-text');
      _0x1b && (_0x1b.textContent = 'Verifying...');
      try {
        let _0x1c = await (await fetch('/api/captcha/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnstileToken: _0x1a
          })
        })).json();
        if (_0x1c.success) {
          if (_0x17(_0x1c.token, _0x1c.expiresAt), _0x1b && (_0x1b.textContent = 'Loading...'), _0x3 && _0x11) {
            _0x11.close(), _0x11 = null;
            let _0x1d = [..._0x12];
            _0x12 = [], _0x1d.forEach(_0x1e => _0x1e());
          }
        } else
          _0x1b && (_0x1b.textContent = 'Verification failed. Please try again.'), _0xb.reset(_0xa);
      } catch (_0x1f) {
        console.error('[Captcha] Verification error:', _0x1f), _0x1b && (_0x1b.textContent = 'Verification failed. Please try again.'), _0xb.reset(_0xa);
      }
    },
    'error-callback': function() {
      let _0x1a = document.getElementById('loading-text');
      _0x1a && (_0x1a.textContent = 'Captcha failed. Please refresh.');
    },
    'expired-callback': function() {
      _0xb.reset(_0xa);
    }
  }), !0;
}

function _0x20() {
  if (_0xd())
    return new Promise(_0x2 => {
      if (Date.now() - _0x14 < _0x15) {
        _0x2();
        return;
      }
      if (_0xc.activeModal) {
        _0x12.push(_0x2);
        return;
      }
      _0x14 = Date.now(), _0x12.push(_0x2);
      let _0x4 = document.createElement('div');
      _0x4.id = 'captcha-modal-turnstile', _0x4.style.display = 'flex', _0x4.style.justifyContent = 'center', _0x4.style.padding = '20px';
      let _0xa = document.createElement('div'),
        _0xb = document.createElement('p');
      if (_0xb.textContent = 'Please complete the captcha to continue.', _0xa.appendChild(_0xb), _0xa.appendChild(_0x4), _0x11 = new _0xc({
          title: 'Verification Required',
          content: _0xa,
          buttons: [{
            text: 'Cancel',
            type: 'cancel',
            onClick: _0x1a => {
              _0x1a.close(), _0x11 = null, _0x12 = [];
            }
          }],
          onClose: () => {
            _0x11 = null;
          }
        }), _0x11.open(), _0x18())
        _0x19(_0x4, !0);
      else {
        let _0x1a = setInterval(() => {
          _0x18() && (clearInterval(_0x1a), _0x19(_0x4, !0));
        }, 100);
        setTimeout(() => clearInterval(_0x1a), 10000);
      }
    });
}

function _0x21() {
  if (_0xf)
    return;
  let _0x2 = document.querySelector('#turnstile-container');
  if (_0x2)
    if (_0x18())
      _0x19(_0x2, !1);
    else {
      let _0x3 = setInterval(() => {
        _0x18() && (clearInterval(_0x3), _0xf || _0x19(_0x2, !1));
      }, 100);
      setTimeout(() => clearInterval(_0x3), 10000);
    }
}
window.onTurnstileLoad = function() {
  _0x13 = !0, _0xf || _0x21();
};
window.turnstile && (_0x13 = !0, _0xf || _0x21());
_0x8.api = {
  getToken() {
    return _0xf;
  },
  getTokenExpiry() {
    return _0x10;
  },
  clearToken: _0x16,
  showCaptchaModal: _0x20,
  renderCaptchaOnLoadingScreen: _0x21,
  getTurnstileSiteKey: _0xd,
  async makeRequest(_0x2, _0x3 = {}) {
    let _0x4 = (_0x3.method || 'GET').toUpperCase();
    _0x4 !== 'GET' && _0xf && (_0x3.headers = _0x3.headers || {}, _0x3.headers['X-Captcha-Token'] = _0xf);
    let _0xa = await fetch(_0x2, _0x3);
    if (_0xa.status === 403) {
      let _0xb = _0xa.clone();
      try {
        if ((await _0xb.json()).code === 'CAPTCHA_REQUIRED')
          return _0x16(), await _0x20(), _0x4 !== 'GET' && _0xf && (_0x3.headers = _0x3.headers || {}, _0x3.headers['X-Captcha-Token'] = _0xf), fetch(_0x2, _0x3);
      } catch {}
    }
    return _0xa;
  }
};
var _0x22 = _0x8.api;
var _0x23 = [
    0.25,
    0.5,
    0.75,
    1,
    1.5
  ],
  _0x24 = 50;

function _0x25(_0x2, _0x3, _0x4) {
  let _0xa = new WeakMap(),
    _0xb = 2048,
    _0x1a = 10000,
    _0x1b = new WeakMap();

  function _0x1f(_0x26) {}

  function _0x1c() {
    _0x1b.clear = new WeakMap();
  }

  function _0x1d(_0x26, _0x27) {
    if (!_0x26)
      return null;
    if (_0xa.has(_0x26))
      return _0xa.get(_0x26);
    let _0x28 = _0x2.createObject(z);
    return _0x28.native = _0x26, _0x28.canvas = _0x27, _0xa.set(_0x26, _0x28), _0x28;
  }
  let _0x1e = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'CanvasGradient', _0x1e);
  let _0x29 = _0x2.getProperty(_0x1e, 'prototype');
  _0x2.setProperty(_0x29, 'addColorStop', _0x2.createNativeFunction(function(_0x26, _0x27) {
    this.native.addColorStop(_0x26, _0x27);
  }));

  function _0x2a(_0x26) {
    let _0x27 = _0x2.createObject(_0x1e);
    return _0x27.native = _0x26, _0x27;
  }
  let _0x2b = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'CanvasPattern', _0x2b);

  function _0x2c(_0x26) {
    let _0x27 = _0x2.createObject(_0x2b);
    return _0x27.native = _0x26, _0x27;
  }
  let _0x2d = _0x2.createNativeFunction(function(_0x26, _0x27) {
    if (_0x26 > _0xb || _0x27 > _0xb)
      throw new Error(`ImageData size exceeds maximum (${ _0xb }x${ _0xb })`);
    _0x8.settings.logCalls && console.log(_0x4.domain, 'create ImageData', this, _0x26, _0x27);
    let _0x28 = new ImageData(_0x26, _0x27);
    this.native = _0x28, this.width = _0x26, this.height = _0x27;
  }, !0);
  _0x2.setProperty(_0x3, 'ImageData', _0x2d);
  let _0x2e = _0x2.getProperty(_0x2d, 'prototype');
  _0x2.setProperty(_0x2e, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native.width;
    })
  }), _0x2.setProperty(_0x2e, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native.height;
    })
  }), _0x2.setProperty(_0x2e, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      let _0x26 = this.native.data,
        _0x27 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      _0x2.setProperty(_0x27, 'length', _0x26.length);
      let _0x28 = _0x2.nativeToPseudo({});
      _0x2.setProperty(_0x28, 'length', _0x26.length), _0x2.setProperty(_0x28, 'get', _0x2.createNativeFunction(function(_0x2f) {
        return _0x26[_0x2f];
      })), _0x2.setProperty(_0x28, 'set', _0x2.createNativeFunction(function(_0x2f, _0x30) {
        _0x8.settings.logCalls && console.log(_0x4.domain, 'setImageData', this, _0x2f, _0x30), _0x26[_0x2f] = _0x30;
      }));
      for (let _0x2f = 0; _0x2f < Math.min(_0x26.length, 1000); _0x2f++)
        (_0x30 => {
          _0x2.setProperty(_0x28, _0x30, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: _0x2.createNativeFunction(function() {
              return _0x26[_0x30];
            }),
            set: _0x2.createNativeFunction(function(_0x31) {
              _0x8.settings.logCalls && console.log(_0x4.domain, 'setImageData', this, _0x30, _0x31), _0x26[_0x30] = _0x31;
            })
          });
        })(_0x2f);
      return _0x28;
    })
  });

  function _0x32(_0x26) {
    let _0x27 = _0x2.createObject(_0x2d);
    return _0x27.native = _0x26, _0x27;
  }
  let _0x33 = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'TextMetrics', _0x33);
  let _0x34 = _0x2.getProperty(_0x33, 'prototype'),
    _0x35 = [
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
  for (let _0x26 of _0x35)
    _0x2.setProperty(_0x34, _0x26, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return this.native[_0x26];
      })
    });

  function _0x36(_0x26) {
    let _0x27 = _0x2.createObject(_0x33);
    return _0x27.native = _0x26, _0x27;
  }
  let _0x37 = _0x2.createNativeFunction(function(_0x26) {
    _0x26 && _0x26.native ? this.native = new Path2D(_0x26.native) : typeof _0x26 == 'string' ? this.native = new Path2D(_0x26) : this.native = new Path2D();
  }, !0);
  _0x2.setProperty(_0x3, 'Path2D', _0x37);
  let _0x38 = _0x2.getProperty(_0x37, 'prototype'),
    _0x39 = {
      addPath: function(_0x26, _0x27) {
        _0x26?.native && this.native.addPath(_0x26.native, _0x27);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(_0x26, _0x27) {
        this.native.moveTo(_0x26, _0x27);
      },
      lineTo: function(_0x26, _0x27) {
        this.native.lineTo(_0x26, _0x27);
      },
      bezierCurveTo: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
        this.native.bezierCurveTo(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
      },
      quadraticCurveTo: function(_0x26, _0x27, _0x28, _0x2f) {
        this.native.quadraticCurveTo(_0x26, _0x27, _0x28, _0x2f);
      },
      arc: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
        this.native.arc(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
      },
      arcTo: function(_0x26, _0x27, _0x28, _0x2f, _0x30) {
        this.native.arcTo(_0x26, _0x27, _0x28, _0x2f, _0x30);
      },
      ellipse: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b) {
        this.native.ellipse(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b);
      },
      rect: function(_0x26, _0x27, _0x28, _0x2f) {
        this.native.rect(_0x26, _0x27, _0x28, _0x2f);
      },
      roundRect: function(_0x26, _0x27, _0x28, _0x2f, _0x30) {
        this.native.roundRect(_0x26, _0x27, _0x28, _0x2f, _0x30);
      }
    };
  for (let [_0x26, _0x27] of Object.entries(_0x39))
    _0x2.setProperty(_0x38, _0x26, _0x2.createNativeFunction(_0x27));
  let _0x3c = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'CanvasRenderingContext2D', _0x3c);
  let _0x3d = _0x2.getProperty(_0x3c, 'prototype'),
    _0x3e = [
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
  for (let _0x26 of _0x3e)
    _0x2.setProperty(_0x3d, _0x26, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return this.native[_0x26];
      }),
      set: _0x2.createNativeFunction(function(_0x27) {
        _0x8.settings.logCalls && console.log(_0x4.domain, 'context set ' + _0x26, this, _0x27), this.native[_0x26] = _0x27;
      })
    });
  for (let _0x26 of [
      'fillStyle',
      'strokeStyle'
    ])
    _0x2.setProperty(_0x3d, _0x26, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        let _0x27 = this.native[_0x26];
        return _0x27;
      }),
      set: _0x2.createNativeFunction(function(_0x27) {
        _0x27?.native ? this.native[_0x26] = _0x27.native : this.native[_0x26] = _0x27;
      })
    });
  _0x2.setProperty(_0x3d, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let _0x3f = {
    clearRect: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native, this.native.clearRect(_0x26, _0x27, _0x28, _0x2f);
    },
    fillRect: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native, this.native.fillRect(_0x26, _0x27, _0x28, _0x2f);
    },
    strokeRect: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native, this.native.strokeRect(_0x26, _0x27, _0x28, _0x2f);
    },
    fillText: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native, _0x2f !== void 0 ? this.native.fillText(String(_0x26).slice(0, 1000), _0x27, _0x28, _0x2f) : this.native.fillText(String(_0x26).slice(0, 1000), _0x27, _0x28);
    },
    strokeText: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native, _0x2f !== void 0 ? this.native.strokeText(String(_0x26).slice(0, 1000), _0x27, _0x28, _0x2f) : this.native.strokeText(String(_0x26).slice(0, 1000), _0x27, _0x28);
    },
    measureText: function(_0x26) {
      return _0x36(this.native.measureText(String(_0x26).slice(0, 1000)));
    },
    getLineDash: function() {
      return _0x2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(_0x26) {
      let _0x27 = _0x2.pseudoToNative(_0x26);
      this.native.setLineDash(_0x27);
    },
    createLinearGradient: function(_0x26, _0x27, _0x28, _0x2f) {
      return _0x2a(this.native.createLinearGradient(_0x26, _0x27, _0x28, _0x2f));
    },
    createRadialGradient: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
      return _0x2a(this.native.createRadialGradient(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31));
    },
    createConicGradient: function(_0x26, _0x27, _0x28) {
      return _0x2a(this.native.createConicGradient(_0x26, _0x27, _0x28));
    },
    createPattern: function(_0x26, _0x27) {
      let _0x28 = _0x26?.native || _0x26;
      if (!_0x28)
        return null;
      let _0x2f = this.native.createPattern(_0x28, _0x27);
      return _0x2f ? _0x2c(_0x2f) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(_0x26, _0x27) {
      this.native.moveTo(_0x26, _0x27);
    },
    lineTo: function(_0x26, _0x27) {
      this.native.lineTo(_0x26, _0x27);
    },
    bezierCurveTo: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
      this.native.bezierCurveTo(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
    },
    quadraticCurveTo: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native.quadraticCurveTo(_0x26, _0x27, _0x28, _0x2f);
    },
    arc: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
      this.native.arc(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
    },
    arcTo: function(_0x26, _0x27, _0x28, _0x2f, _0x30) {
      this.native.arcTo(_0x26, _0x27, _0x28, _0x2f, _0x30);
    },
    ellipse: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b) {
      this.native.ellipse(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b);
    },
    rect: function(_0x26, _0x27, _0x28, _0x2f) {
      this.native.rect(_0x26, _0x27, _0x28, _0x2f);
    },
    roundRect: function(_0x26, _0x27, _0x28, _0x2f, _0x30) {
      let _0x31 = _0x2.pseudoToNative(_0x30);
      this.native.roundRect(_0x26, _0x27, _0x28, _0x2f, _0x31);
    },
    fill: function(_0x26, _0x27) {
      this.native, _0x26?.native ? this.native.fill(_0x26.native, _0x27) : this.native.fill(_0x26);
    },
    stroke: function(_0x26) {
      this.native, _0x26?.native ? this.native.stroke(_0x26.native) : this.native.stroke();
    },
    clip: function(_0x26, _0x27) {
      _0x26?.native ? this.native.clip(_0x26.native, _0x27) : this.native.clip(_0x26);
    },
    isPointInPath: function(_0x26, _0x27, _0x28, _0x2f) {
      return _0x26?.native ? this.native.isPointInPath(_0x26.native, _0x27, _0x28, _0x2f) : this.native.isPointInPath(_0x26, _0x27, _0x28);
    },
    isPointInStroke: function(_0x26, _0x27, _0x28) {
      return _0x26?.native ? this.native.isPointInStroke(_0x26.native, _0x27, _0x28) : this.native.isPointInStroke(_0x26, _0x27);
    },
    getTransform: function() {
      let _0x26 = this.native.getTransform();
      return _0x2.nativeToPseudo({
        a: _0x26.a,
        _0x2a: _0x26._0x2a,
        _0x1b: _0x26._0x1b,
        _0x1e: _0x26._0x1e,
        _0x2: _0x26._0x2,
        _0x2d: _0x26._0x2d
      });
    },
    rotate: function(_0x26) {
      this.native.rotate(_0x26);
    },
    scale: function(_0x26, _0x27) {
      this.native.scale(_0x26, _0x27);
    },
    translate: function(_0x26, _0x27) {
      this.native.translate(_0x26, _0x27);
    },
    transform: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
      this.native.transform(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
    },
    setTransform: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31) {
      if (typeof _0x26 == 'object' && _0x26 !== null) {
        let _0x3a = _0x2.pseudoToNative(_0x26);
        this.native.setTransform(_0x3a);
      } else
        this.native.setTransform(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b, _0x40) {
      this.native;
      let _0x41 = _0x26?.native || _0x26;
      _0x41 && (_0x3b !== void 0 ? this.native.drawImage(_0x41, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a, _0x3b, _0x40) : _0x2f !== void 0 ? this.native.drawImage(_0x41, _0x27, _0x28, _0x2f, _0x30) : this.native.drawImage(_0x41, _0x27, _0x28));
    },
    createImageData: function(_0x26, _0x27) {
      if (_0x26?.native)
        return _0x32(this.native.createImageData(_0x26.native));
      if (_0x26 > _0xb || _0x27 > _0xb)
        throw new Error(`ImageData size exceeds maximum (${ _0xb }x${ _0xb })`);
      return _0x32(this.native.createImageData(_0x26, _0x27));
    },
    getImageData: function(_0x26, _0x27, _0x28, _0x2f) {
      if (_0x28 > _0xb || _0x2f > _0xb)
        throw new Error(`ImageData size exceeds maximum (${ _0xb }x${ _0xb })`);
      return _0x32(this.native.getImageData(_0x26, _0x27, _0x28, _0x2f));
    },
    putImageData: function(_0x26, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a) {
      this.native, _0x26?.native && (_0x2f !== void 0 ? this.native.putImageData(_0x26.native, _0x27, _0x28, _0x2f, _0x30, _0x31, _0x3a) : this.native.putImageData(_0x26.native, _0x27, _0x28));
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
  for (let [_0x26, _0x27] of Object.entries(_0x3f))
    _0x2.setProperty(_0x3d, _0x26, _0x2.createNativeFunction(_0x27));
  return {
    extendElement: function(_0x26, _0x27) {
      _0x2.setProperty(_0x26, 'getContext', _0x2.createNativeFunction(function(_0x28, _0x2f) {
        _0x8.settings.logCalls && console.log(_0x4.domain, 'getContext', this, _0x28, _0x2f);
        let _0x30 = this.native;
        if (_0x30.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (_0x30.width > _0xb && (_0x30.width = _0xb), _0x30.height > _0xb && (_0x30.height = _0xb), _0x28 === '2d') {
          let _0x31 = _0x30.getContext('2d', _0x2f ? _0x2.pseudoToNative(_0x2f) : void 0);
          return _0x1d(_0x31, this);
        }
        throw new Error(`Context type "${ _0x28 }" is not supported`);
      })), _0x2.setProperty(_0x26, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: _0x2.createNativeFunction(function(_0x28) {
          _0x8.settings.logCalls && console.log(_0x4.domain, 'set width', this, _0x28), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(_0x28, _0xb));
        })
      }), _0x2.setProperty(_0x26, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: _0x2.createNativeFunction(function(_0x28) {
          _0x8.settings.logCalls && console.log(_0x4.domain, 'set height', this, _0x28), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(_0x28, _0xb));
        })
      }), _0x2.setProperty(_0x26, 'toDataURL', _0x2.createNativeFunction(function(_0x28, _0x2f) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return _0x8.settings.logCalls && console.log(_0x4.domain, 'toDataURL', this, _0x28, _0x2f), this.native.toDataURL(_0x28, _0x2f);
      }));
    },
    resetDrawCounts: _0x1c,
    contextToPseudo: _0x1d
  };
}

function _0x42(_0x2, _0x3, _0x4) {
  let _0x1b = 0,
    _0x1f = window.location.origin;

  function _0x1c(_0x2d) {
    if (typeof _0x2d != 'string' || _0x2d.startsWith('/') || _0x2d.startsWith('./') || _0x2d.startsWith('../') || !_0x2d.startsWith('http://') && !_0x2d.startsWith('https://'))
      return !1;
    try {
      let _0x2e = new URL(_0x2d);
      if (_0x2e.origin === _0x1f || _0x2e.hostname === 'kicya.net' || _0x2e.hostname.endsWith('.kicya.net') || _0x2e.hostname === 'nekoweb.org')
        return !1;
      let _0x32 = _0x2e.hostname.toLowerCase();
      return !(_0x32 === 'localhost' || _0x32 === '127.0.0.1' || _0x32 === '0.0.0.0' || _0x32.startsWith('192.168.') || _0x32.startsWith('10.') || _0x32.startsWith('172.16.') || _0x32.startsWith('172.17.') || _0x32.startsWith('172.18.') || _0x32.startsWith('172.19.') || _0x32.startsWith('172.2') || _0x32.startsWith('172.30.') || _0x32.startsWith('172.31.') || _0x32 === '[::1]');
    } catch {
      return !1;
    }
  }
  let _0x1d = 0,
    _0x1e = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x3, '__xhrCallbacks', _0x1e);

  function _0x29(_0x2d, ..._0x2e) {
    if (!_0x2d || typeof _0x2d != 'object')
      return;
    let _0x32 = _0x1d++;
    _0x2.setProperty(_0x1e, 'fn' + _0x32, _0x2d);
    let _0x33 = _0x2e.map((_0x35, _0x36) => {
        let _0x37 = 'arg' + _0x32 + '_' + _0x36;
        return _0x2.setProperty(_0x1e, _0x37, _0x35), _0x37;
      }),
      _0x34 = _0x33.map(_0x35 => `__xhrCallbacks.${ _0x35 }`).join(',');
    _0x2.appendCode(`__xhrCallbacks.fn${ _0x32 }(${ _0x34 }); delete __xhrCallbacks.fn${ _0x32 }; ${ _0x33.map(_0x35 => `delete __xhrCallbacks.${ _0x35 }`).join('; ') };`);
  }
  let _0x2a = _0x2.createNativeFunction(function() {
    _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let _0x2e = this;
    this.native.onreadystatechange = function() {
      _0x2.setProperty(_0x2e, 'readyState', _0x2e.native.readyState), _0x2e.native.readyState === 4 && (_0x2.setProperty(_0x2e, 'status', _0x2e.native.status), _0x2.setProperty(_0x2e, 'statusText', _0x2e.native.statusText), _0x2.setProperty(_0x2e, 'responseText', _0x2e.native.responseText?.slice(0, 5242880) || ''), _0x2.setProperty(_0x2e, 'responseURL', _0x2e.native.responseURL), _0x1b = Math.max(0, _0x1b - 1)), _0x2e._eventHandlers.onreadystatechange && _0x29(_0x2e._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      _0x2e._eventHandlers.onload && _0x29(_0x2e._eventHandlers.onload);
    }, this.native.onerror = function() {
      _0x1b = Math.max(0, _0x1b - 1), _0x2e._eventHandlers.onerror && _0x29(_0x2e._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      _0x1b = Math.max(0, _0x1b - 1), _0x2e._eventHandlers.ontimeout && _0x29(_0x2e._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      _0x1b = Math.max(0, _0x1b - 1), _0x2e._eventHandlers.onabort && _0x29(_0x2e._eventHandlers.onabort);
    }, this.native.onprogress = function(_0x32) {
      if (_0x2e._eventHandlers.onprogress) {
        let _0x33 = _0x2.nativeToPseudo({
          loaded: _0x32.loaded,
          total: _0x32.total,
          lengthComputable: _0x32.lengthComputable
        });
        _0x29(_0x2e._eventHandlers.onprogress, _0x33);
      }
    }, this.native.onloadstart = function() {
      _0x2e._eventHandlers.onloadstart && _0x29(_0x2e._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      _0x2e._eventHandlers.onloadend && _0x29(_0x2e._eventHandlers.onloadend);
    }, _0x2.setProperty(this, 'readyState', 0), _0x2.setProperty(this, 'status', 0), _0x2.setProperty(this, 'statusText', ''), _0x2.setProperty(this, 'responseText', ''), _0x2.setProperty(this, 'responseURL', '');
  }, !0);
  _0x2.setProperty(_0x3, 'XMLHttpRequest', _0x2a);
  let _0x2b = _0x2.getProperty(_0x2a, 'prototype');
  _0x2.setProperty(_0x2a, 'UNSENT', 0), _0x2.setProperty(_0x2a, 'OPENED', 1), _0x2.setProperty(_0x2a, 'HEADERS_RECEIVED', 2), _0x2.setProperty(_0x2a, 'LOADING', 3), _0x2.setProperty(_0x2a, 'DONE', 4), _0x2.setProperty(_0x2b, 'UNSENT', 0), _0x2.setProperty(_0x2b, 'OPENED', 1), _0x2.setProperty(_0x2b, 'HEADERS_RECEIVED', 2), _0x2.setProperty(_0x2b, 'LOADING', 3), _0x2.setProperty(_0x2b, 'DONE', 4);
  let _0x2c = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let _0x2d of _0x2c)
    _0x2.setProperty(_0x2b, _0x2d, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return this._eventHandlers[_0x2d] || null;
      }),
      set: _0x2.createNativeFunction(function(_0x2e) {
        _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest set ' + _0x2d, this, _0x2e), this._eventHandlers[_0x2d] = _0x2e;
      })
    });
  _0x2.setProperty(_0x2b, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: _0x2.createNativeFunction(function(_0x2d) {
      this.native.timeout = Math.min(_0x2d, 30000);
    })
  }), _0x2.setProperty(_0x2b, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: _0x2.createNativeFunction(function(_0x2d) {
      this.native.withCredentials = !1;
    })
  }), _0x2.setProperty(_0x2b, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: _0x2.createNativeFunction(function(_0x2d) {
      (_0x2d === '' || _0x2d === 'text' || _0x2d === 'json') && (this.native.responseType = _0x2d);
    })
  }), _0x2.setProperty(_0x2b, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      let _0x2d = this.native.response;
      return this.native.responseType === 'json' ? _0x2.nativeToPseudo(_0x2d) : typeof _0x2d == 'string' ? _0x2d.slice(0, 5242880) : _0x2d;
    })
  }), _0x2.setProperty(_0x2b, 'open', _0x2.createNativeFunction(function(_0x2d, _0x2e, _0x32, _0x33, _0x34) {
    if (!_0x1c(_0x2e))
      throw new Error(`XHR request blocked: URL "${ _0x2e }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let _0x35 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (_0x2d = String(_0x2d).toUpperCase(), !_0x35.includes(_0x2d))
      throw new Error(`HTTP method "${ _0x2d }" is not allowed`);
    _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest open', this, _0x2d, _0x2e, _0x32, _0x33, _0x34), this._method = _0x2d, this._url = _0x2e, this._async = _0x32 !== !1, this.native.open(_0x2d, _0x2e, this._async), this.native.timeout = 30000, _0x2.setProperty(this, 'readyState', this.native.readyState);
  })), _0x2.setProperty(_0x2b, 'setRequestHeader', _0x2.createNativeFunction(function(_0x2d, _0x2e) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(_0x2d.toLowerCase()))
      throw new Error(`Setting header "${ _0x2d }" is not allowed`);
    _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest setRequestHeader', this, _0x2d, _0x2e), this._headers[_0x2d] = _0x2e, this.native.setRequestHeader(_0x2d, _0x2e);
  })), _0x2.setProperty(_0x2b, 'send', _0x2.createNativeFunction(function(_0x2d) {
    if (_0x1b >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest send', this, _0x2d), _0x1b++;
    let _0x2e = null;
    _0x2d != null && (typeof _0x2d == 'string' ? _0x2e = _0x2d.slice(0, 5242880) : typeof _0x2d == 'object' && (_0x2e = JSON.stringify(_0x2.pseudoToNative(_0x2d)))), this.native.send(_0x2e);
  })), _0x2.setProperty(_0x2b, 'abort', _0x2.createNativeFunction(function() {
    _0x8.settings.logCalls && console.log(_0x4.domain, 'XMLHttpRequest abort', this), this.native.abort(), _0x1b = Math.max(0, _0x1b - 1);
  })), _0x2.setProperty(_0x2b, 'getResponseHeader', _0x2.createNativeFunction(function(_0x2d) {
    return this.native.getResponseHeader(_0x2d);
  })), _0x2.setProperty(_0x2b, 'getAllResponseHeaders', _0x2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), _0x2.setProperty(_0x2b, 'overrideMimeType', _0x2.createNativeFunction(function(_0x2d) {
    this.native.overrideMimeType(_0x2d);
  }));
}
var _0x43 = 'webtiles_storage',
  _0x44 = 1,
  _0x45 = 'localStorage',
  _0x46 = 1024 * 1024,
  _0x47 = 100,
  _0x48 = null,
  _0x49 = null;

function _0x4a() {
  return _0x49 || (_0x49 = new Promise((_0x2, _0x3) => {
    let _0x4 = indexedDB.open(_0x43, _0x44);
    _0x4.onerror = () => _0x3(_0x4.error), _0x4.onsuccess = () => {
      _0x48 = _0x4.result, _0x2(_0x48);
    }, _0x4.onupgradeneeded = _0xa => {
      let _0xb = _0xa.target.result;
      _0xb.objectStoreNames.contains(_0x45) || _0xb.createObjectStore(_0x45, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), _0x49);
}
async function _0x4b(_0x2, _0x3) {
  return await _0x4a(), new Promise((_0x4, _0xa) => {
    let _0x1b = _0x48.transaction(_0x45, 'readonly').objectStore(_0x45).get([
      _0x2,
      _0x3
    ]);
    _0x1b.onsuccess = () => _0x4(_0x1b.result?.value ?? null), _0x1b.onerror = () => _0xa(_0x1b.error);
  });
}
async function _0x4c(_0x2, _0x3, _0x4) {
  return await _0x4a(), new Promise((_0xa, _0xb) => {
    let _0x1f = _0x48.transaction(_0x45, 'readwrite').objectStore(_0x45).put({
      site: _0x2,
      key: _0x3,
      value: _0x4
    });
    _0x1f.onsuccess = () => _0xa(), _0x1f.onerror = () => _0xb(_0x1f.error);
  });
}
async function _0x4d(_0x2, _0x3) {
  return await _0x4a(), new Promise((_0x4, _0xa) => {
    let _0x1b = _0x48.transaction(_0x45, 'readwrite').objectStore(_0x45).delete([
      _0x2,
      _0x3
    ]);
    _0x1b.onsuccess = () => _0x4(), _0x1b.onerror = () => _0xa(_0x1b.error);
  });
}
async function _0x4e(_0x2) {
  return await _0x4a(), new Promise((_0x3, _0x4) => {
    let _0x1b = _0x48.transaction(_0x45, 'readonly').objectStore(_0x45).index('site').getAll(_0x2);
    _0x1b.onsuccess = () => {
      let _0x1f = _0x1b.result.map(_0x1c => _0x1c.key);
      _0x3(_0x1f);
    }, _0x1b.onerror = () => _0x4(_0x1b.error);
  });
}
async function _0x4f(_0x2) {
  return await _0x4a(), new Promise((_0x3, _0x4) => {
    let _0x1b = _0x48.transaction(_0x45, 'readonly').objectStore(_0x45).index('site').getAll(_0x2);
    _0x1b.onsuccess = () => {
      let _0x1f = 0;
      for (let _0x1c of _0x1b.result)
        _0x1f += (_0x1c.key.length + _0x1c.value.length) * 2;
      _0x3({
        size: _0x1f,
        count: _0x1b.result.length
      });
    }, _0x1b.onerror = () => _0x4(_0x1b.error);
  });
}
async function _0x50(_0x2) {
  return await _0x4a(), new Promise((_0x3, _0x4) => {
    let _0x1b = _0x48.transaction(_0x45, 'readwrite').objectStore(_0x45).index('site').openCursor(_0x2);
    _0x1b.onsuccess = _0x1f => {
      let _0x1c = _0x1f.target.result;
      _0x1c ? (_0x1c.delete(), _0x1c.continue()) : _0x3();
    }, _0x1b.onerror = () => _0x4(_0x1b.error);
  });
}

function _0x51(_0x2, _0x3, _0x4) {
  let _0xa = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0xa, 'getItem', _0x2.createAsyncFunction(function(_0xb, _0x1a) {
    if (_0x8.settings.logCalls && console.log(_0x4, 'localStorage.getItem', this, _0xb), _0xb == null) {
      _0x1a(null);
      return;
    }
    _0xb = String(_0xb), _0x4b(_0x4, _0xb).then(_0x1b => _0x1a(_0x1b)).catch(_0x1b => {
      console.error('localStorage.getItem error:', _0x1b), _0x1a(null);
    });
  })), _0x2.setProperty(_0xa, 'setItem', _0x2.createAsyncFunction(function(_0xb, _0x1a, _0x1b) {
    if (_0x8.settings.logCalls && console.log(_0x4, 'localStorage.setItem', this, _0xb, _0x1a), _0xb == null) {
      _0x1b();
      return;
    }
    _0xb = String(_0xb), _0x1a = String(_0x1a), _0x4f(_0x4).then(({
      size: _0x1f,
      count: _0x1c
    }) => {
      _0x4b(_0x4, _0xb).then(_0x1d => {
        if (_0x1d === null && _0x1c >= _0x47)
          throw new Error(`localStorage item limit exceeded (max ${ _0x47 } items)`);
        let _0x29 = _0x1d ? (_0xb.length + _0x1d.length) * 2 : 0,
          _0x2a = (_0xb.length + _0x1a.length) * 2;
        if (_0x1f - _0x29 + _0x2a > _0x46)
          throw new Error(`localStorage size limit exceeded (max ${ _0x46 / 1024 }KB)`);
        return _0x4c(_0x4, _0xb, _0x1a);
      }).then(() => _0x1b()).catch(_0x1d => {
        throw console.error('localStorage.setItem error:', _0x1d), _0x1d;
      });
    }).catch(_0x1f => {
      console.error('localStorage.setItem error:', _0x1f), _0x1b();
    });
  })), _0x2.setProperty(_0xa, 'removeItem', _0x2.createAsyncFunction(function(_0xb, _0x1a) {
    if (_0x8.settings.logCalls && console.log(_0x4, 'localStorage.removeItem', this, _0xb), _0xb == null) {
      _0x1a();
      return;
    }
    _0xb = String(_0xb), _0x4d(_0x4, _0xb).then(() => _0x1a()).catch(_0x1b => {
      console.error('localStorage.removeItem error:', _0x1b), _0x1a();
    });
  })), _0x2.setProperty(_0xa, 'clear', _0x2.createAsyncFunction(function(_0xb) {
    _0x8.settings.logCalls && console.log(_0x4, 'localStorage.clear', this), _0x50(_0x4).then(() => _0xb()).catch(_0x1a => {
      console.error('localStorage.clear error:', _0x1a), _0xb();
    });
  })), _0x2.setProperty(_0xa, 'key', _0x2.createAsyncFunction(function(_0xb, _0x1a) {
    _0xb = parseInt(_0xb) || 0, _0x4e(_0x4).then(_0x1b => {
      _0x1a(_0xb >= 0 && _0xb < _0x1b.length ? _0x1b[_0xb] : null);
    }).catch(_0x1b => {
      console.error('localStorage.key error:', _0x1b), _0x1a(null);
    });
  })), _0x2.setProperty(_0xa, 'getLength', _0x2.createAsyncFunction(function(_0xb) {
    _0x4f(_0x4).then(({
      count: _0x1a
    }) => _0xb(_0x1a)).catch(_0x1a => {
      console.error('localStorage.getLength error:', _0x1a), _0xb(0);
    });
  })), _0x2.setProperty(_0x3, 'localStorage', _0xa), _0x2.setProperty(_0x3, 'sessionStorage', _0xa);
}
_0x4a().catch(_0x2 => {
  console.error('Failed to initialize storage DB:', _0x2);
});

function _0x52(_0x2, _0x3, _0x4, _0xa) {
  let _0xb = _0x2.createNativeFunction(function() {}, !0);
  _0x2.setProperty(_0x3, 'DOMParser', _0xb);
  let _0x1a = _0x2.getProperty(_0xb, 'prototype');
  _0x2.setProperty(_0x1a, 'parseFromString', _0x2.createNativeFunction(function(_0x1b, _0x1f) {
    if (_0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser parseFromString', this, _0x1b, _0x1f), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(_0x1f))
      throw new Error(`DOMParser: Unsupported MIME type "${ _0x1f }"`);
    if (typeof _0x1b != 'string' && (_0x1b = String(_0x1b)), _0x1b.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let _0x1e = new DOMParser().parseFromString(_0x1b, _0x1f),
      _0x29 = _0x2.createObjectProto(_0x2.OBJECT_PROTO);

    function _0x2a(_0x2b) {
      if (_0x2b == null)
        return null;
      let _0x2c = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
      return _0x2c.native = _0x2b, _0x2c.fromDOMParser = !0, _0x2.setProperty(_0x2c, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), _0x2.setProperty(_0x2c, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), _0x2.setProperty(_0x2c, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: _0x2.createNativeFunction(function(_0x2d) {
          _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser set nodeValue', this, _0x2d), this.native.nodeValue = _0x2d;
        })
      }), _0x2.setProperty(_0x2c, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: _0x2.createNativeFunction(function(_0x2d) {
          _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser set textContent', this, _0x2d), this.native.textContent = String(_0x2d).slice(0, 50000);
        })
      }), _0x2.setProperty(_0x2c, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), _0x2.setProperty(_0x2c, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: _0x2.createNativeFunction(function(_0x2d) {
          _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser set id', this, _0x2d), this.native.id = String(_0x2d).slice(0, 100);
        })
      }), _0x2.setProperty(_0x2c, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: _0x2.createNativeFunction(function(_0x2d) {
          _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser set className', this, _0x2d), this.native.className = String(_0x2d).slice(0, 1000);
        })
      }), _0x2.setProperty(_0x2c, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: _0x2.createNativeFunction(function(_0x2d) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), _0x2.setProperty(_0x2c, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), _0x2.setProperty(_0x2c, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          let _0x2d = Array.from(this.native.children),
            _0x2e = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
          for (let _0x32 = 0; _0x32 < _0x2d.length; _0x32++)
            _0x2.setProperty(_0x2e, _0x32, _0x2a(_0x2d[_0x32]));
          return _0x2.setProperty(_0x2e, 'length', _0x2d.length), _0x2e;
        })
      }), _0x2.setProperty(_0x2c, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          let _0x2d = Array.from(this.native.childNodes),
            _0x2e = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
          for (let _0x32 = 0; _0x32 < _0x2d.length; _0x32++)
            _0x2.setProperty(_0x2e, _0x32, _0x2a(_0x2d[_0x32]));
          return _0x2.setProperty(_0x2e, 'length', _0x2d.length), _0x2e;
        })
      }), _0x2.setProperty(_0x2c, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return _0x2a(this.native.firstChild);
        })
      }), _0x2.setProperty(_0x2c, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return _0x2a(this.native.lastChild);
        })
      }), _0x2.setProperty(_0x2c, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return _0x2a(this.native.firstElementChild);
        })
      }), _0x2.setProperty(_0x2c, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return _0x2a(this.native.lastElementChild);
        })
      }), _0x2.setProperty(_0x2c, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(_0x4) ? null : (_0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get parentNode', this), _0x2a(this.native.parentNode));
        })
      }), _0x2.setProperty(_0x2c, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(_0x4) ? null : (_0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get parentElement', this), _0x2a(this.native.parentElement));
        })
      }), _0x2.setProperty(_0x2c, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(_0x4) ? null : (_0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get nextSibling', this), _0x2a(this.native.nextSibling));
        })
      }), _0x2.setProperty(_0x2c, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(_0x4) ? null : (_0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get previousSibling', this), _0x2a(this.native.previousSibling));
        })
      }), _0x2.setProperty(_0x2c, 'getAttributeNames', _0x2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let _0x2d = Array.from(this.native.getAttributeNames()),
          _0x2e = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
        for (let _0x32 = 0; _0x32 < _0x2d.length; _0x32++)
          _0x2.setProperty(_0x2e, _0x32, _0x2d[_0x32]);
        return _0x2.setProperty(_0x2e, 'length', _0x2d.length), _0x2e;
      })), _0x2.setProperty(_0x2c, 'getAttribute', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(_0x2d);
      })), _0x2.setProperty(_0x2c, 'setAttribute', _0x2.createNativeFunction(function(_0x2d, _0x2e) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (_0x2d = String(_0x2d).toLowerCase(), _0x2d.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(_0x2d, String(_0x2e)), _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser set attribute', this, _0x2d, _0x2e);
      })), _0x2.setProperty(_0x2c, 'hasAttribute', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(_0x2d);
      })), _0x2.setProperty(_0x2c, 'removeAttribute', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(_0x4))
          throw new Error('No access.');
        this.native.removeAttribute(_0x2d), _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser remove attribute', this, _0x2d);
      })), _0x2.setProperty(_0x2c, 'querySelector', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return _0x2a(this.native.querySelector(_0x2d));
      })), _0x2.setProperty(_0x2c, 'querySelectorAll', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let _0x2e = Array.from(this.native.querySelectorAll(_0x2d)),
          _0x32 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
        for (let _0x33 = 0; _0x33 < _0x2e.length; _0x33++)
          _0x2.setProperty(_0x32, _0x33, _0x2a(_0x2e[_0x33]));
        return _0x2.setProperty(_0x32, 'length', _0x2e.length), _0x32;
      })), _0x2.setProperty(_0x2c, 'getElementsByTagName', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let _0x2e = Array.from(this.native.getElementsByTagName(_0x2d)),
          _0x32 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
        for (let _0x33 = 0; _0x33 < _0x2e.length; _0x33++)
          _0x2.setProperty(_0x32, _0x33, _0x2a(_0x2e[_0x33]));
        return _0x2.setProperty(_0x32, 'length', _0x2e.length), _0x32;
      })), _0x2.setProperty(_0x2c, 'getElementsByClassName', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let _0x2e = Array.from(this.native.getElementsByClassName(_0x2d)),
          _0x32 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
        for (let _0x33 = 0; _0x33 < _0x2e.length; _0x33++)
          _0x2.setProperty(_0x32, _0x33, _0x2a(_0x2e[_0x33]));
        return _0x2.setProperty(_0x32, 'length', _0x2e.length), _0x32;
      })), _0x2.setProperty(_0x2c, 'getElementById', _0x2.createNativeFunction(function(_0x2d) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return _0x2a(this.native.getElementById ? this.native.getElementById(_0x2d) : null);
      })), _0x2c;
    }
    return _0x2.setProperty(_0x29, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x2a(_0x1e.documentElement);
      })
    }), _0x2.setProperty(_0x29, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get head', this), _0x2a(_0x1e.head);
      })
    }), _0x2.setProperty(_0x29, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x8.settings.logCalls && console.log(_0xa.domain, 'DOMParser get body', this), _0x2a(_0x1e.body);
      })
    }), _0x2.setProperty(_0x29, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x1e.title;
      })
    }), _0x2.setProperty(_0x29, 'querySelector', _0x2.createNativeFunction(function(_0x2b) {
      return _0x2a(_0x1e.querySelector(_0x2b));
    })), _0x2.setProperty(_0x29, 'querySelectorAll', _0x2.createNativeFunction(function(_0x2b) {
      let _0x2c = Array.from(_0x1e.querySelectorAll(_0x2b)),
        _0x2d = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x2e = 0; _0x2e < _0x2c.length; _0x2e++)
        _0x2.setProperty(_0x2d, _0x2e, _0x2a(_0x2c[_0x2e]));
      return _0x2.setProperty(_0x2d, 'length', _0x2c.length), _0x2d;
    })), _0x2.setProperty(_0x29, 'getElementById', _0x2.createNativeFunction(function(_0x2b) {
      return _0x2a(_0x1e.getElementById(_0x2b));
    })), _0x2.setProperty(_0x29, 'getElementsByTagName', _0x2.createNativeFunction(function(_0x2b) {
      let _0x2c = Array.from(_0x1e.getElementsByTagName(_0x2b)),
        _0x2d = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x2e = 0; _0x2e < _0x2c.length; _0x2e++)
        _0x2.setProperty(_0x2d, _0x2e, _0x2a(_0x2c[_0x2e]));
      return _0x2.setProperty(_0x2d, 'length', _0x2c.length), _0x2d;
    })), _0x2.setProperty(_0x29, 'getElementsByClassName', _0x2.createNativeFunction(function(_0x2b) {
      let _0x2c = Array.from(_0x1e.getElementsByClassName(_0x2b)),
        _0x2d = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x2e = 0; _0x2e < _0x2c.length; _0x2e++)
        _0x2.setProperty(_0x2d, _0x2e, _0x2a(_0x2c[_0x2e]));
      return _0x2.setProperty(_0x2d, 'length', _0x2c.length), _0x2d;
    })), _0x29;
  }));
}

function _0x53(_0x2, _0x3, _0x4, _0xa) {
  let _0xb = new WeakMap(),
    _0x1a = 1000,
    _0x1b = 5,
    _0x1f = new WeakMap(),
    _0x1c = 0,
    _0x1d = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x3, '__eventCallbacks', _0x1d);

  function _0x1e(_0x41, _0x54) {
    let _0x55 = _0x1c++;
    _0x2.setProperty(_0x1d, 'fn' + _0x55, _0x41), _0x2.setProperty(_0x1d, 'ev' + _0x55, _0x54), _0x2.appendCode(`__eventCallbacks.fn${ _0x55 }(__eventCallbacks.ev${ _0x55 }); delete __eventCallbacks.fn${ _0x55 }; delete __eventCallbacks.ev${ _0x55 };`);
  }

  function _0x29() {
    return _0x4.getElementsByTagName('*').length;
  }

  function _0x2a(_0x41 = 1) {
    if (_0x29() + _0x41 > _0x1a)
      throw new Error(`DOM element limit exceeded (max ${ _0x1a })`);
  }

  function _0x2b(_0x41) {
    return _0x41 instanceof Element ? 1 + _0x41.getElementsByTagName('*').length : 0;
  }

  function _0x2c(_0x41, _0x54 = !1) {
    if (_0x41 == null)
      return null;
    if (_0xb.has(_0x41))
      return _0xb.get(_0x41);
    let _0x55 = _0x41 instanceof Element ? _0x38 : _0x33,
      _0x56 = _0x2.createObject(_0x55);
    return _0x56.native = _0x41, _0x56.fromDOMParser || (_0x56.fromDOMParser = _0x54), _0xb.set(_0x41, _0x56), _0x56;
  }

  function _0x2d(_0x41) {
    return _0x41 && _0x4.contains(_0x41);
  }

  function _0x2e(_0x41) {
    return _0x2d(_0x41) ? _0x41 : null;
  }

  function _0x32(_0x41) {
    let _0x54 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
    for (let _0x55 = 0; _0x55 < _0x41.length; _0x55++)
      _0x2.setProperty(_0x54, _0x55, _0x2c(_0x41[_0x55]));
    return _0x2.setProperty(_0x54, 'length', _0x41.length), _0x54;
  }
  let _0x33 = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'Node', _0x33);
  let _0x34 = _0x2.getProperty(_0x33, 'prototype'),
    _0x35 = {
      firstChild: function() {
        return _0x2c(_0x2e(this.native.firstChild));
      },
      lastChild: function() {
        return _0x2c(_0x2e(this.native.lastChild));
      },
      parentNode: function() {
        return _0x2c(_0x2e(this.native.parentNode));
      },
      parentElement: function() {
        return _0x2c(_0x2e(this.native.parentElement));
      },
      nextSibling: function() {
        return _0x2c(_0x2e(this.native.nextSibling));
      },
      previousSibling: function() {
        return _0x2c(_0x2e(this.native.previousSibling));
      },
      childNodes: function() {
        let _0x41 = Array.from(this.native.childNodes).filter(_0x2d);
        return _0x32(_0x41);
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
    _0x36 = {
      textContent: function(_0x41) {
        _0x8.settings.logCalls && console.log(_0xa.domain, 'set textContent', this, _0x41), this.native.textContent = _0x41;
      },
      nodeValue: function(_0x41) {
        _0x8.settings.logCalls && console.log(_0xa.domain, 'set nodeValue', this, _0x41), this.native.nodeValue = _0x41;
      }
    };
  for (let [_0x41, _0x54] of Object.entries(_0x35)) {
    let _0x55 = {
      get: _0x2.createNativeFunction(_0x54)
    };
    _0x36[_0x41] && (_0x55.set = _0x2.createNativeFunction(_0x36[_0x41])), _0x2.setProperty(_0x34, _0x41, Interpreter.VALUE_IN_DESCRIPTOR, _0x55);
  }
  let _0x37 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(_0x41) {
      if (!_0x41?.native)
        return null;
      if (_0x41.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return _0x2a(_0x2b(_0x41.native)), this.native.appendChild(_0x41.native), _0x8.settings.logCalls && console.log(_0xa.domain, 'appendChild', this, _0x41), _0x41;
    },
    append: function(_0x41) {
      for (let _0x54 of _0x41)
        if (_0x54?.native) {
          if (_0x54.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          _0x2a(_0x2b(_0x54.native)), this.native.appendChild(_0x54.native);
        }
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'append', this, _0x41), _0x41;
    },
    removeChild: function(_0x41) {
      return !_0x41?.native || !_0x2d(_0x41.native) ? null : (_0x8.settings.logCalls && console.log(_0xa.domain, 'removeChild', this, _0x41), _0x2c(this.native.removeChild(_0x41.native)));
    },
    insertBefore: function(_0x41, _0x54) {
      if (!_0x41?.native)
        return null;
      if (_0x41.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(_0x4))
        throw new Error('No access.');
      _0x2a(_0x2b(_0x41.native));
      let _0x55 = _0x54?.native || null;
      return this.native.insertBefore(_0x41.native, _0x55), _0x8.settings.logCalls && console.log(_0xa.domain, 'insertBefore', this, _0x41, _0x55), _0x41;
    },
    cloneNode: function(_0x41) {
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'cloneNode', this, _0x41), _0x2c(this.native.cloneNode(_0x41), this.fromDOMParser);
    },
    contains: function(_0x41) {
      return _0x41?.native ? this.native.contains(_0x41.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(_0x4))
        throw new Error('No access.');
      this.native.remove(), _0x8.settings.logCalls && console.log(_0xa.domain, 'remove', this);
    },
    after: function(_0x41) {
      if (!_0x41?.native)
        return null;
      if (_0x41.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(_0x4))
        throw new Error('No access.');
      return _0x2a(_0x2b(_0x41.native)), this.native.after(_0x41.native), _0x8.settings.logCalls && console.log(_0xa.domain, 'after', this, _0x41), _0x41;
    },
    before: function(_0x41) {
      if (!_0x41?.native)
        return null;
      if (_0x41.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(_0x4))
        throw new Error('No access.');
      return _0x2a(_0x2b(_0x41.native)), this.native.before(_0x41.native), _0x8.settings.logCalls && console.log(_0xa.domain, 'before', this, _0x41), _0x41;
    }
  };
  for (let [_0x41, _0x54] of Object.entries(_0x37))
    _0x2.setProperty(_0x34, _0x41, _0x2.createNativeFunction(_0x54));
  let _0x38 = _0x2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  _0x2.setProperty(_0x3, 'Element', _0x38);
  let _0x39 = _0x2.createObject(_0x33);
  _0x2.setProperty(_0x38, 'prototype', _0x39);

  function _0x3c(_0x41) {
    if (!_0x41)
      return '';
    _0x41 = String(_0x41);
    let _0x54 = _0x41.toLowerCase().trim();
    if (_0x54.startsWith('javascript:') || _0x54.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (_0x54.startsWith('data:'))
      return _0x41;
    try {
      let _0x55 = new URL(_0x41, location.href);
      if (_0x55.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let _0x56 = _0x55.pathname + _0x55.search + _0x55.hash;
      return _0x56.startsWith(`/t/${ _0xa.domain }/`) || (_0x56 = `/t/${ _0xa.domain }/${ _0x56 }`.replaceAll('//', '/')), _0x56;
    } catch (_0x55) {
      if (_0x55.message.includes('not allowed'))
        throw _0x55;
      let _0x56 = _0x41;
      return !_0x56.startsWith(`/t/${ _0xa.domain }/`) && !_0x56.startsWith('#') && (_0x56 = `/t/${ _0xa.domain }/${ _0x56 }`.replaceAll('//', '/')), _0x56;
    }
  }
  let _0x3d = {
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
        let _0x41 = Array.from(this.native.children).filter(_0x2d);
        return _0x32(_0x41);
      },
      firstElementChild: function() {
        return _0x2c(_0x2e(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return _0x2c(_0x2e(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return _0x2c(_0x2e(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return _0x2c(_0x2e(this.native.previousElementSibling));
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
    _0x3e = {
      innerText: function(_0x41) {
        this.native.innerText = _0x41.slice(0, 1000);
      },
      innerHTML: function(_0x41) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(_0x41) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = _0x41, _0x8.settings.logCalls && console.log(_0xa.domain, 'set id', this, _0x41);
      },
      className: function(_0x41) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = _0x41, _0x8.settings.logCalls && console.log(_0xa.domain, 'set className', this, _0x41);
      },
      src: function(_0x41) {
        this.native.src = _0x3c(_0x41), _0x8.settings.logCalls && console.log(_0xa.domain, 'set src', this, _0x41);
      },
      href: function(_0x41) {
        this.native.href = this.native.tagName === 'A' ? _0x41 : _0x3c(_0x41), _0x8.settings.logCalls && console.log(_0xa.domain, 'set href', this, _0x41);
      },
      hidden: function(_0x41) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!_0x41;
      },
      disabled: function(_0x41) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!_0x41;
      },
      checked: function(_0x41) {
        this.native.checked = !!_0x41;
      },
      selected: function(_0x41) {
        this.native.selected = !!_0x41;
      },
      readOnly: function(_0x41) {
        this.native.readOnly = !!_0x41;
      },
      required: function(_0x41) {
        this.native.required = !!_0x41;
      },
      draggable: function(_0x41) {
        this.native.draggable = !!_0x41;
      },
      title: function(_0x41) {
        this.native.title = String(_0x41).slice(0, 1000);
      },
      alt: function(_0x41) {
        this.native.alt = String(_0x41).slice(0, 1000);
      },
      name: function(_0x41) {
        this.native.name = String(_0x41).slice(0, 100);
      },
      type: function(_0x41) {
        this.native.type = String(_0x41).slice(0, 50);
      },
      value: function(_0x41) {
        this.native.value = String(_0x41).slice(0, 10000);
      },
      placeholder: function(_0x41) {
        this.native.placeholder = String(_0x41).slice(0, 500);
      },
      tabIndex: function(_0x41) {
        this.native.tabIndex = parseInt(_0x41) || 0;
      },
      scrollTop: function(_0x41) {
        this.native.scrollTop = _0x41;
      },
      scrollLeft: function(_0x41) {
        this.native.scrollLeft = _0x41;
      },
      currentTime: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(_0x41) || 0));
      },
      muted: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!_0x41);
      },
      volume: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(_0x41) || 0)));
      },
      loop: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!_0x41);
      },
      autoplay: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!_0x41);
      },
      controls: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!_0x41);
      },
      playbackRate: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(_0x41) || 1)));
      },
      defaultPlaybackRate: function(_0x41) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(_0x41) || 1)));
      },
      preload: function(_0x41) {
        if (this.native instanceof HTMLMediaElement) {
          let _0x54 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = _0x54.includes(_0x41) ? _0x41 : 'auto';
        }
      },
      poster: function(_0x41) {
        this.native instanceof HTMLVideoElement && (this.native.poster = _0x3c(_0x41));
      }
    };
  for (let [_0x41, _0x54] of Object.entries(_0x3d)) {
    let _0x55 = {
      get: _0x2.createNativeFunction(_0x54)
    };
    _0x3e[_0x41] && (_0x55.set = _0x2.createNativeFunction(_0x3e[_0x41])), _0x2.setProperty(_0x39, _0x41, Interpreter.VALUE_IN_DESCRIPTOR, _0x55);
  }
  let _0x3f = {
    getAttributeNames: function() {
      let _0x41 = Array.from(this.native.getAttributeNames()),
        _0x54 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x55 = 0; _0x55 < _0x41.length; _0x55++)
        _0x2.setProperty(_0x54, _0x55, _0x41[_0x55]);
      return _0x2.setProperty(_0x54, 'length', _0x41.length), _0x54;
    },
    getAttribute: function(_0x41) {
      return this.native.getAttribute(_0x41);
    },
    setAttribute: function(_0x41, _0x54) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (_0x41 = String(_0x41).toLowerCase(), _0x54 = String(_0x54), _0x8.settings.logCalls && console.log(_0xa.domain, 'setAttribute', this, _0x41, _0x54), _0x41 === 'style' && _0x54.includes('animation-play-state') && _0x54.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (_0x41 === 'src' || _0x41 === 'poster' || _0x41 === 'data' || this.native.tagName !== 'A' && _0x41 === 'href') {
        this.native.setAttribute(_0x41, _0x3c(_0x54));
        return;
      }
      if (_0x41 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (_0x41 === 'srcset')
        throw new Error('srcset is not allowed');
      if (_0x41 === 'action' || _0x41 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (_0x41.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (_0x41 === 'width' || _0x41 === 'height') {
        let _0x55 = parseFloat(_0x54);
        if (isNaN(_0x55) || _0x55 < 0 || _0x55 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(_0x41, _0x54);
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
    scrollIntoView: function(_0x41) {
      _0x41 && typeof _0x41 == 'object' ? this.native.scrollIntoView(_0x2.pseudoToNative(_0x41)) : this.native.scrollIntoView(_0x41);
    },
    scrollTo: function(_0x41, _0x54) {
      this.native.scrollTo(_0x41, _0x54);
    },
    scrollBy: function(_0x41, _0x54) {
      this.native.scrollBy(_0x41, _0x54);
    },
    removeAttribute: function(_0x41) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (_0x41 = String(_0x41).toLowerCase(), _0x41 === 'target')
        throw new Error('removing target is not allowed');
      _0x8.settings.logCalls && console.log(_0xa.domain, 'removeAttribute', this, _0x41), this.native.removeAttribute(_0x41);
    },
    hasAttribute: function(_0x41) {
      return this.native.hasAttribute(_0x41);
    },
    querySelector: function(_0x41) {
      let _0x54 = this.native.querySelector(_0x41);
      return _0x2c(_0x2e(_0x54));
    },
    querySelectorAll: function(_0x41) {
      let _0x54 = Array.from(this.native.querySelectorAll(_0x41)).filter(_0x2d);
      return _0x32(_0x54);
    },
    getElementsByClassName: function(_0x41) {
      let _0x54 = Array.from(this.native.getElementsByClassName(_0x41)).filter(_0x2d);
      return _0x32(_0x54);
    },
    getElementsByTagName: function(_0x41) {
      let _0x54 = Array.from(this.native.getElementsByTagName(_0x41)).filter(_0x2d);
      return _0x32(_0x54);
    },
    closest: function(_0x41) {
      let _0x54 = this.native.closest(_0x41);
      for (; _0x54 && !_0x4.contains(_0x54);)
        _0x54 = null;
      return _0x2c(_0x54);
    },
    matches: function(_0x41) {
      return this.native.matches(_0x41);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let _0x41 = this.native.classList;
      return _0x2.nativeToPseudo({
        add: (..._0x54) => _0x41.add(..._0x54),
        remove: (..._0x54) => _0x41.remove(..._0x54),
        toggle: (_0x54, _0x55) => _0x41.toggle(_0x54, _0x55),
        contains: _0x54 => _0x41.contains(_0x54),
        replace: (_0x54, _0x55) => _0x41.replace(_0x54, _0x55)
      });
    },
    getBoundingClientRect: function() {
      let _0x41 = this.native.getBoundingClientRect();
      return _0x2.nativeToPseudo({
        _0x2f: _0x41._0x2f,
        _0x55: _0x41._0x55,
        width: _0x41.width,
        height: _0x41.height,
        top: _0x41.top,
        right: _0x41.right,
        bottom: _0x41.bottom,
        left: _0x41.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return _0x2.createObjectProto(_0x2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let _0x41 = _0x2.createObjectProto(_0x2.OBJECT_PROTO),
        _0x54 = this,
        _0x55 = null,
        _0x56 = null;
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'play', this), _0x2.setProperty(_0x41, 'then', _0x2.createNativeFunction(function(_0x57) {
        return _0x55 = _0x57, _0x41;
      })), _0x2.setProperty(_0x41, 'catch', _0x2.createNativeFunction(function(_0x57) {
        return _0x56 = _0x57, _0x41;
      })), _0x54.native.play().then(() => {
        _0x55 && _0x1e(_0x55, _0x2.nativeToPseudo(void 0));
      }).catch(_0x57 => {
        _0x56 && _0x1e(_0x56, _0x2.nativeToPseudo({
          message: _0x57.message,
          name: _0x57.name
        }));
      }), _0x41;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(_0x41) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(_0x41 || '')) : '';
    },
    fastSeek: function(_0x41) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(_0x41) || 0));
    },
    getAnimations: function(_0x41) {
      if (!this.native.getAnimations)
        return _0x32([]);
      let _0x54 = _0x41 ? {
          subtree: !!_0x2.pseudoToNative(_0x41)?.subtree
        } : {},
        _0x55 = this.native.getAnimations(_0x54),
        _0x56 = _0x2.createObjectProto(_0x2.ARRAY_PROTO);
      for (let _0x57 = 0; _0x57 < _0x55.length; _0x57++)
        _0x56.properties[_0x57] = _0x26(_0x55[_0x57]);
      return _0x2.setProperty(_0x56, 'length', _0x55.length), _0x56;
    }
  };
  for (let [_0x41, _0x54] of Object.entries(_0x3f))
    _0x2.setProperty(_0x39, _0x41, _0x2.createNativeFunction(_0x54));

  function _0x26(_0x41) {
    let _0x54 = _0x2.createObjectProto(_0x2.OBJECT_PROTO);
    return _0x2.setProperty(_0x54, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.id;
      })
    }), _0x2.setProperty(_0x54, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.playState;
      })
    }), _0x2.setProperty(_0x54, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.pending;
      })
    }), _0x2.setProperty(_0x54, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.replaceState;
      })
    }), _0x2.setProperty(_0x54, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.currentTime;
      }),
      set: _0x2.createNativeFunction(function(_0x55) {
        _0x41.currentTime = _0x55;
      })
    }), _0x2.setProperty(_0x54, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.playbackRate;
      }),
      set: _0x2.createNativeFunction(function(_0x55) {
        _0x41.playbackRate = Math.max(-10, Math.min(10, Number(_0x55) || 1));
      })
    }), _0x2.setProperty(_0x54, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        return _0x41.startTime;
      }),
      set: _0x2.createNativeFunction(function(_0x55) {
        _0x41.startTime = _0x55;
      })
    }), _0x2.setProperty(_0x54, 'play', _0x2.createNativeFunction(function() {
      _0x41.play();
    })), _0x2.setProperty(_0x54, 'pause', _0x2.createNativeFunction(function() {
      _0x41.pause();
    })), _0x2.setProperty(_0x54, 'cancel', _0x2.createNativeFunction(function() {
      _0x41.cancel();
    })), _0x2.setProperty(_0x54, 'finish', _0x2.createNativeFunction(function() {
      _0x41.finish();
    })), _0x2.setProperty(_0x54, 'reverse', _0x2.createNativeFunction(function() {
      _0x41.reverse();
    })), _0x2.setProperty(_0x54, 'updatePlaybackRate', _0x2.createNativeFunction(function(_0x55) {
      _0x41.updatePlaybackRate(Math.max(-10, Math.min(10, Number(_0x55) || 1)));
    })), _0x54;
  }

  function _0x27(_0x41) {
    let _0x54 = _0x2.createObjectProto(_0x2.OBJECT_PROTO),
      _0x55 = _0x41 ? _0x41.length : 0;
    return _0x2.setProperty(_0x54, 'length', _0x55), _0x2.setProperty(_0x54, 'start', _0x2.createNativeFunction(function(_0x56) {
      if (!_0x41 || _0x56 < 0 || _0x56 >= _0x41.length)
        throw new Error('Index out of bounds');
      return _0x41.start(_0x56);
    })), _0x2.setProperty(_0x54, 'end', _0x2.createNativeFunction(function(_0x56) {
      if (!_0x41 || _0x56 < 0 || _0x56 >= _0x41.length)
        throw new Error('Index out of bounds');
      return _0x41.end(_0x56);
    })), _0x54;
  }
  _0x2.setProperty(_0x39, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? _0x27(this.native.buffered) : _0x27(null);
    })
  }), _0x2.setProperty(_0x39, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? _0x27(this.native.played) : _0x27(null);
    })
  }), _0x2.setProperty(_0x39, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? _0x27(this.native.seekable) : _0x27(null);
    })
  }), _0x2.setProperty(_0x39, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      let _0x41 = this.native.classList,
        _0x54 = _0x2.nativeToPseudo({});
      return _0x2.setProperty(_0x54, 'add', _0x2.createNativeFunction(function(..._0x55) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        _0x41.add(..._0x55);
      })), _0x2.setProperty(_0x54, 'remove', _0x2.createNativeFunction(function(..._0x55) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        _0x41.remove(..._0x55);
      })), _0x2.setProperty(_0x54, 'toggle', _0x2.createNativeFunction(function(_0x55, _0x56) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return _0x41.toggle(_0x55, _0x56);
      })), _0x2.setProperty(_0x54, 'contains', _0x2.createNativeFunction(function(_0x55) {
        return _0x41.contains(_0x55);
      })), _0x2.setProperty(_0x54, 'replace', _0x2.createNativeFunction(function(_0x55, _0x56) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return _0x41.replace(_0x55, _0x56);
      })), _0x54;
    })
  }), _0x2.setProperty(_0x39, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      let _0x41 = this.native.style,
        _0x54 = _0x2.nativeToPseudo({}),
        _0x55 = [
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
      for (let _0x56 of _0x55)
        _0x2.setProperty(_0x54, _0x56, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: _0x2.createNativeFunction(function() {
            return _0x41[_0x56];
          }),
          set: _0x2.createNativeFunction(function(_0x57) {
            _0x41[_0x56] = _0x57, _0x8.settings.logCalls && console.log(_0xa.domain, 'set style', this, _0x56, _0x57);
          })
        });
      return _0x2.setProperty(_0x54, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: _0x2.createNativeFunction(function() {
          return _0x41.cssText;
        }),
        set: _0x2.createNativeFunction(function(_0x56) {
          _0x41.cssText = _0x56, _0x8.settings.logCalls && console.log(_0xa.domain, 'set cssText', this, _0x56);
        })
      }), _0x2.setProperty(_0x54, 'setProperty', _0x2.createNativeFunction(function(_0x56, _0x57, _0x58) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        _0x41.setProperty(_0x56, _0x57, _0x58), _0x8.settings.logCalls && console.log(_0xa.domain, 'setProperty', this, _0x56, _0x57, _0x58);
      })), _0x2.setProperty(_0x54, 'getPropertyValue', _0x2.createNativeFunction(function(_0x56) {
        return _0x41.getPropertyValue(_0x56);
      })), _0x2.setProperty(_0x54, 'removeProperty', _0x2.createNativeFunction(function(_0x56) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return _0x8.settings.logCalls && console.log(_0xa.domain, 'removeProperty', this, _0x56), _0x41.removeProperty(_0x56);
      })), _0x54;
    })
  }), _0x2.setProperty(_0x39, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      let _0x41 = this.native.dataset,
        _0x54 = _0x2.nativeToPseudo({});
      for (let _0x55 in _0x41)
        _0x2.setProperty(_0x54, _0x55, _0x41[_0x55]);
      return _0x2.setProperty(_0x54, 'get', _0x2.createNativeFunction(function(_0x55) {
        return _0x41[_0x55];
      })), _0x2.setProperty(_0x54, 'set', _0x2.createNativeFunction(function(_0x55, _0x56) {
        _0x41[_0x55] = String(_0x56).slice(0, 1000), _0x8.settings.logCalls && console.log(_0xa.domain, 'set dataset', this, _0x55, _0x56);
      })), _0x2.setProperty(_0x54, 'delete', _0x2.createNativeFunction(function(_0x55) {
        delete _0x41[_0x55], _0x8.settings.logCalls && console.log(_0xa.domain, 'delete dataset', this, _0x55);
      })), _0x2.setProperty(_0x54, 'has', _0x2.createNativeFunction(function(_0x55) {
        return _0x55 in _0x41;
      })), _0x54;
    })
  }), _0x2.setProperty(_0x39, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return _0x2c(_0x2e(this.native.offsetParent));
    })
  });
  let _0x28 = [
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

  function _0x2f(_0x41) {
    let _0x54 = _0x2.nativeToPseudo({}),
      _0x55 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let _0x56 of _0x55)
      _0x2.setProperty(_0x54, _0x56, _0x41[_0x56]);
    if (_0x41 instanceof MouseEvent || _0x41 instanceof PointerEvent) {
      let _0x56 = [
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
      for (let _0x57 of _0x56)
        _0x2.setProperty(_0x54, _0x57, _0x41[_0x57]);
    }
    if (_0x41 instanceof KeyboardEvent) {
      let _0x56 = [
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
      for (let _0x57 of _0x56)
        _0x2.setProperty(_0x54, _0x57, _0x41[_0x57]);
    }
    return typeof TouchEvent == 'function' && _0x41 instanceof TouchEvent && (_0x2.setProperty(_0x54, 'touches', _0x2.nativeToPseudo({
      length: _0x41.touches.length
    })), _0x2.setProperty(_0x54, 'changedTouches', _0x2.nativeToPseudo({
      length: _0x41.changedTouches.length
    }))), typeof WheelEvent == 'function' && _0x41 instanceof WheelEvent && (_0x2.setProperty(_0x54, 'deltaX', _0x41.deltaX), _0x2.setProperty(_0x54, 'deltaY', _0x41.deltaY), _0x2.setProperty(_0x54, 'deltaZ', _0x41.deltaZ), _0x2.setProperty(_0x54, 'deltaMode', _0x41.deltaMode)), _0x41.target && _0x2d(_0x41.target) && _0x2.setProperty(_0x54, 'target', _0x2c(_0x41.target)), _0x41.currentTarget && _0x2d(_0x41.currentTarget) && _0x2.setProperty(_0x54, 'currentTarget', _0x2c(_0x41.currentTarget)), _0x2.setProperty(_0x54, 'preventDefault', _0x2.createNativeFunction(function() {
      _0x41.preventDefault();
    })), _0x2.setProperty(_0x54, 'stopPropagation', _0x2.createNativeFunction(function() {
      _0x41.stopPropagation();
    })), _0x2.setProperty(_0x54, 'stopImmediatePropagation', _0x2.createNativeFunction(function() {
      _0x41.stopImmediatePropagation();
    })), _0x54;
  }
  _0x2.setProperty(_0x39, 'addEventListener', _0x2.createNativeFunction(function(_0x41, _0x54) {
    if (!_0x41 || typeof _0x41 != 'string' || !_0x54 || typeof _0x54 != 'object')
      return;
    if (_0x41 = _0x41.toLowerCase(), !_0x28.includes(_0x41))
      throw new Error(`Event type "${ _0x41 }" is not allowed`);
    _0x8.settings.logCalls && console.log(_0xa.domain, 'addEventListener', this, _0x41, _0x54);
    let _0x55 = this.native;
    _0x1f.has(_0x55) || _0x1f.set(_0x55, new Map());
    let _0x56 = _0x1f.get(_0x55);
    _0x56.has(_0x41) || _0x56.set(_0x41, []);
    let _0x57 = _0x56.get(_0x41);
    if (_0x57.length >= _0x1b)
      throw new Error(`Maximum listeners (${ _0x1b }) reached for event "${ _0x41 }"`);
    if (_0x57.some(_0x59 => _0x59.pseudo === _0x54))
      return;
    let _0x58 = function(_0x59) {
      let _0x5a = _0x2f(_0x59);
      _0x1e(_0x54, _0x5a);
    };
    _0x57.push({
      pseudo: _0x54,
      native: _0x58
    }), _0x55.addEventListener(_0x41, _0x58);
  })), _0x2.setProperty(_0x39, 'removeEventListener', _0x2.createNativeFunction(function(_0x41, _0x54) {
    if (!_0x41 || typeof _0x41 != 'string' || !_0x54 || typeof _0x54 != 'object')
      return;
    _0x8.settings.logCalls && console.log(_0xa.domain, 'removeEventListener', this, _0x41, _0x54), _0x41 = _0x41.toLowerCase();
    let _0x55 = this.native;
    if (!_0x1f.has(_0x55))
      return;
    let _0x56 = _0x1f.get(_0x55);
    if (!_0x56.has(_0x41))
      return;
    let _0x57 = _0x56.get(_0x41),
      _0x58 = _0x57.findIndex(_0x59 => _0x59.pseudo === _0x54);
    _0x58 !== -1 && (_0x55.removeEventListener(_0x41, _0x57[_0x58].native), _0x57.splice(_0x58, 1));
  }));
  let _0x30 = [
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
  for (let _0x41 of _0x30) {
    let _0x54 = 'on' + _0x41;
    _0x2.setProperty(_0x39, _0x54, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: _0x2.createNativeFunction(function() {
        let _0x55 = this.native;
        if (!_0x1f.has(_0x55))
          return null;
        let _0x56 = _0x1f.get(_0x55),
          _0x57 = `__${ _0x54 }`;
        return _0x56.get(_0x57) || null;
      }),
      set: _0x2.createNativeFunction(function(_0x55) {
        let _0x56 = this.native;
        _0x1f.has(_0x56) || _0x1f.set(_0x56, new Map());
        let _0x57 = _0x1f.get(_0x56),
          _0x58 = `__${ _0x54 }`;
        _0x8.settings.logCalls && console.log(_0xa.domain, 'setOn' + _0x41, this, _0x55);
        let _0x59 = _0x57.get(_0x58 + '_native');
        if (_0x59 && (_0x56.removeEventListener(_0x41, _0x59), _0x57.delete(_0x58), _0x57.delete(_0x58 + '_native')), _0x55 && typeof _0x55 == 'object') {
          let _0x5a = function(_0x5b) {
            let _0x5c = _0x2f(_0x5b);
            _0x1e(_0x55, _0x5c);
          };
          _0x56.addEventListener(_0x41, _0x5a), _0x57.set(_0x58, _0x55), _0x57.set(_0x58 + '_native', _0x5a);
        }
      })
    });
  }
  _0x25(_0x2, _0x3, _0xa).extendElement(_0x39, _0x2c), _0x42(_0x2, _0x3, _0xa), _0x51(_0x2, _0x3, _0xa.domain), _0x52(_0x2, _0x3, _0x4, _0xa);
  let _0x3a = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x3, 'document', _0x3a);
  let _0x3b = {
    getElementById: function(_0x41) {
      let _0x54 = _0x4.querySelector(`#${ CSS.escape(_0x41) }`);
      return _0x2c(_0x54);
    },
    getElementsByClassName: function(_0x41) {
      let _0x54 = Array.from(_0x4.getElementsByClassName(_0x41));
      return _0x32(_0x54);
    },
    getElementsByTagName: function(_0x41) {
      let _0x54 = Array.from(_0x4.getElementsByTagName(_0x41));
      return _0x32(_0x54);
    },
    querySelector: function(_0x41) {
      return _0x2c(_0x4.querySelector(_0x41));
    },
    querySelectorAll: function(_0x41) {
      let _0x54 = Array.from(_0x4.querySelectorAll(_0x41));
      return _0x32(_0x54);
    },
    createElement: function(_0x41) {
      if (typeof _0x41 != 'string')
        throw new Error('Invalid tag');
      if (_0x41 = _0x41.toLowerCase().trim(), [
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
        ].includes(_0x41))
        throw new Error('Creating ' + _0x41 + ' elements is not allowed');
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'createElement', this, _0x41), _0x2c(document.createElement(_0x41));
    },
    createTextNode: function(_0x41) {
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'createTextNode', this, _0x41), _0x2c(document.createTextNode(_0x41));
    }
  };
  for (let [_0x41, _0x54] of Object.entries(_0x3b))
    _0x2.setProperty(_0x3a, _0x41, _0x2.createNativeFunction(_0x54));
  _0x2.setProperty(_0x3a, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'get body', this), _0x2c(_0x4);
    })
  }), _0x2.setProperty(_0x3a, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return _0x8.settings.logCalls && console.log(_0xa.domain, 'get documentElement', this), _0x2c(_0x4);
    })
  });
  let _0x40 = _0x2.nativeToPseudo({});
  _0x2.setProperty(_0x3, 'location', _0x40), _0x2.setProperty(_0x40, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: _0x2.createNativeFunction(function() {
      return `/t/${ _0xa.domain }${ _0xa.path }`;
    }),
    set: _0x2.createNativeFunction(function(_0x41) {
      if (typeof _0x41 == 'string') {
        _0x8.settings.logCalls && console.log(_0xa.domain, 'set href', this, _0x41);
        try {
          let _0x54 = new URL(_0x41, `http://${ _0xa.domain }`);
          if (_0x54.hostname && _0x54.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let _0x55 = _0x54.pathname + _0x54.search + _0x54.hash;
          if (_0x55.startsWith(`/t/${ _0xa.domain }/`) ? _0x55 = _0x55.substring(`/t/${ _0xa.domain }`.length) : _0x55 === `/t/${ _0xa.domain }` && (_0x55 = '/'), _0x55.startsWith('/') || (_0x55 = '/' + _0x55), _0x55.endsWith('.html') || _0x55 === '/' || _0x55 === '')
            _0xa.fetchContent(_0x55 || '/index.html'), _0xa.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (_0x54) {
          if (_0x54.message.includes('not allowed') || _0x54.message.includes('Only HTML'))
            throw _0x54;
          let _0x55 = _0x41;
          if (_0x55.startsWith('/') || (_0x55 = '/' + _0x55), _0x55.endsWith('.html') || _0x55 === '/' || _0x55 === '')
            _0xa.fetchContent(_0x55 || '/index.html').then(() => _0xa.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), _0x2.setProperty(_0x40, 'reload', _0x2.createNativeFunction(function() {
    _0xa.fetchContent(_0xa.path, !0).then(() => _0xa.setActive(!0));
  }));
}
var _0x5d = {
    console: {
      log: function(..._0x2) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ..._0x2);
      },
      error: function(..._0x2) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ..._0x2);
      },
      warn: function(..._0x2) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ..._0x2);
      }
    },
    alert(_0x2) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ _0x2 }`);
    },
    prompt(_0x2) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ _0x2 }`);
    },
    confirm(_0x2) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ _0x2 }`);
    },
    atob(_0x2) {
      return atob(_0x2);
    },
    btoa(_0x2) {
      return btoa(_0x2);
    }
  },
  _0x5e = class {
    constructor(_0x3) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = _0x3, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (_0x4, _0xa) => {
        let _0xb = (_0x1a, _0x1b) => {
          for (let [_0x1f, _0x1c] of Object.entries(_0x1a))
            if (typeof _0x1c == 'function')
              _0x4.setProperty(_0x1b, _0x1f, _0x4.createNativeFunction(_0x1c.bind(this)));
            else if (typeof _0x1c == 'object' && _0x1c !== null) {
            let _0x1d = _0x4.nativeToPseudo({});
            _0xb(_0x1c, _0x1d), _0x4.setProperty(_0x1b, _0x1f, _0x1d);
          }
        };
        _0xb(_0x5d, _0xa), _0x53(_0x4, _0xa, this.tile.contentElement, this.tile), _0x4.setProperty(_0xa, 'embedded', _0x4.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let _0x3 = new Set(),
        _0x4 = [this.interpreter.getStateStack()],
        _0xa = 0;
      for (; _0x4.length;) {
        let _0xb = _0x4.pop(),
          _0x1a = typeof _0xb;
        if (_0xa += 8, _0x1a === 'string' && !_0x3.has(_0xb))
          _0x3.add(_0xb), _0xa += _0xb.length * 2;
        else if (_0x1a === 'object' && _0xb !== null && !_0x3.has(_0xb)) {
          _0x3.add(_0xb);
          try {
            _0x4.push(...Object.keys(_0xb), ...Object.values(_0xb));
          } catch {}
        }
      }
      return _0xa;
    }
    start() {
      this.running || _0x8.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let _0x3 = 0; _0x3 < 5000; _0x3++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let _0x4 = this.roughValueMemorySize();
                if (_0x4 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ _0x4 } bytes`);
                  break;
                }
              }
            } catch (_0x4) {
              console.error(_0x4), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(_0x3) {
      _0x8.settings.disableJS || this.interpreter.appendCode(_0x3);
    }
  },
  _0x5f = _0x5e;
var _0x60 = document.getElementById('plot'),
  _0x61 = new CSSStyleSheet(),
  _0x62 = () => {
    _0x61.replaceSync(`
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
_0x62();
var _0x63 = new CSSStyleSheet();
_0x63.replaceSync(`
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
var _0x64 = class _0x2 {
  constructor(_0x3) {
    this._0x2f = _0x3._0x2f ?? 0, this._0x55 = _0x3._0x55 ?? 0, this.domain = _0x3.domain, this.free = !_0x3.domain, this.locked = !1, this.id = `${ this._0x2f },${ this._0x55 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = _0x3.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = _0x3.nocontrols || !1, this.embed = _0x3.embed || !1, this.container = _0x3.container || _0x60, this.interpreter = null, this.render();
  }
  static toTilePosition(_0x3, _0x4) {
    return {
      _0x2f: Math.floor(_0x3 / 250),
      _0x55: Math.floor(_0x4 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let _0x3 = document.createElement('div');
    _0x3.classList.add('tile'), this.free && _0x3.classList.add('f'), this.preview ? _0x3.style.cssText = 'width: 100%; height: 100%; position: relative;' : (_0x3.style.left = `${ this._0x2f * 250 }px`, _0x3.style.top = `${ this._0x55 * 250 }px`, this._0x2f % 10 === 0 && _0x3.classList.add('b-left'), this._0x55 % 10 === 0 && _0x3.classList.add('b-top')), this.element = _0x3;
    let _0x4 = document.createElement('div');
    _0x4.classList.add('tile-content'), this.preview && (_0x4.style.cssText = 'width: 100%; height: 100%;'), _0x4.addEventListener('click', async _0xb => {
      let _0x1a = _0xb.composedPath()?.filter(_0x1d => _0x1d instanceof Element);
      if (!_0x1a)
        return;
      let _0x1b = _0x1a.findIndex(_0x1d => _0x1d.isSameNode(_0x4));
      if (_0x1b === -1)
        return;
      let _0x1c = _0x1a.slice(0, _0x1b).find(_0x1d => _0x1d.tagName === 'A');
      if (_0x1c) {
        _0xb.preventDefault();
        try {
          let _0x1d = new URL(_0x1c.href);
          if (_0x1d.hostname !== location.hostname) {
            let _0x29 = document.createElement('a');
            _0x29.href = _0x1c.href, _0x29.target = '_blank', _0x29.click();
            return;
          }
          let _0x1e = _0x1d.pathname;
          if (_0x1e.startsWith(`/t/${ this.domain }/`) || (_0x1e = `/t/${ this.domain }/${ _0x1e }`.replaceAll('//', '/')), _0x1e.startsWith(`/t/${ this.domain }`) && (_0x1e.endsWith('.html') || _0x1e === `/t/${ this.domain }/` || _0x1e === `/t/${ this.domain }`))
            await this.fetchContent(_0x1e.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let _0x29 = document.createElement('a');
            _0x29.href = _0x1c.href, _0x29.target = '_blank', _0x29.click();
          }
        } catch (_0x1d) {
          console.error(_0x1d);
        }
      }
    }), this.shadow = _0x4.attachShadow({
      mode: 'open'
    });
    let _0xa = document.createElement('div');
    _0xa.className = 'tile-body', this.embed && _0xa.classList.add('embedded'), _0xa.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = _0xa, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this._0x2f }, ${ this._0x55 }...`, this.shadow.appendChild(_0xa), _0x3.appendChild(_0x4), this.fonts = document.createElement('style'), _0x3.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(_0x3), _0x8.plot?.lockCache[this._0x2f + ',' + this._0x55] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(_0x3, _0x4 = !1) {
    _0x3.startsWith('/') || (_0x3 = '/' + _0x3);
    let _0xa = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this._0x2f }, ${ this._0x55 }</p>
            </div>` : this.path === _0x3 && this.content && !_0x4 ? this.content : await fetch(`/t/${ this.domain }${ _0x3 }`).then(_0x1b => _0x1b.text()).catch(_0x1b => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [_0x63] : this.shadow.adoptedStyleSheets = [_0x61], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = _0x3, this.contentElement.innerHTML = _0xa, this.content = _0xa;
    let _0xb = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let _0x1a = 0;
    for (let _0x1b of _0xb) {
      if (_0x1a >= 3)
        break;
      let _0x1f = _0x1b.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (_0x1f)
        for (let _0x1c of _0x1f) {
          if (_0x1a >= 3)
            break;
          this.fonts.textContent += _0x1c, _0x1a++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let _0x3 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let _0x4 of _0x3)
      this.interpreter.runCode(_0x4.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(_0x3) {
    if (this.element && (_0x3 && (this.interpreter || (this.interpreter = new _0x5f(this), this.executeScripts()), this.interpreter.start()), _0x3 !== this.active)) {
      if (this.active = _0x3, _0x3) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && _0x8.ui) {
          let _0xa = _0x8.ui.createVoteMenu(this);
          _0xa && this.element.appendChild(_0xa);
          let _0xb = _0x8.ui.createTileControl(this);
          if (this.element.appendChild(_0xb), _0x8.user?.admin || _0x8.user?.moderator) {
            let _0x1a = _0x8.ui.createAdminControl(this);
            this.element.appendChild(_0x1a);
          }
          _0x8.plot?.activeTile && _0x8.plot.activeTile.setActive(!1), _0x8.plot && (_0x8.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let _0x4 = this.contentElement.querySelectorAll('audio, video');
        for (let _0xa of _0x4)
          _0xa.dataset.webtilesPaused === 'true' && (_0xa.dataset.webtilesPaused = !1, _0xa.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), _0x8.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), _0x8.plot && (_0x8.plot.activeTile = null)), _0x2.clearClanBorders();
        let _0x4 = this.contentElement.querySelectorAll('audio, video');
        for (let _0xa of _0x4)
          _0xa.paused || (_0xa.dataset.webtilesPaused = !0, _0xa.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let _0x4 = await (await _0x8.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!_0x4.success || !_0x4.clan)
          return;
        let _0xa = _0x4.clan.members;
        if (!_0xa || _0xa.length <= 1)
          return;
        let _0xb = new Set(_0xa.map(_0x1a => `${ _0x1a._0x2f },${ _0x1a._0x55 }`));
        for (let _0x1a of _0xa) {
          let _0x1b = _0x8.plot.tiles[`${ _0x1a._0x2f },${ _0x1a._0x55 }`];
          if (!_0x1b?.element)
            continue;
          _0x1b.element.classList.add('clan-highlight');
          let _0x1f = _0xb.has(`${ _0x1a._0x2f },${ _0x1a._0x55 - 1 }`),
            _0x1c = _0xb.has(`${ _0x1a._0x2f },${ _0x1a._0x55 + 1 }`),
            _0x1d = _0xb.has(`${ _0x1a._0x2f - 1 },${ _0x1a._0x55 }`),
            _0x1e = _0xb.has(`${ _0x1a._0x2f + 1 },${ _0x1a._0x55 }`);
          if (!_0x1f) {
            let _0x29 = document.createElement('div');
            _0x29.className = 'clan-border clan-border-top', _0x1b.element.appendChild(_0x29);
          }
          if (!_0x1c) {
            let _0x29 = document.createElement('div');
            _0x29.className = 'clan-border clan-border-bottom', _0x1b.element.appendChild(_0x29);
          }
          if (!_0x1d) {
            let _0x29 = document.createElement('div');
            _0x29.className = 'clan-border clan-border-left', _0x1b.element.appendChild(_0x29);
          }
          if (!_0x1e) {
            let _0x29 = document.createElement('div');
            _0x29.className = 'clan-border clan-border-right', _0x1b.element.appendChild(_0x29);
          }
        }
      } catch (_0x3) {
        console.error('Failed to fetch clan borders:', _0x3);
      }
  }
  static clearClanBorders() {
    if (_0x8.plot?.tiles)
      for (let _0x3 of Object.values(_0x8.plot.tiles))
        _0x3.element && (_0x3.element.classList.remove('clan-highlight'), _0x3.element.querySelectorAll('.clan-border').forEach(_0xa => _0xa.remove()));
  }
  setDomain(_0x3) {
    this.domain = _0x3, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(_0x3) {
    this.locked = _0x3, this.element && this.element.classList.toggle('locked', _0x3), this.fetchContent('/index.html', !0);
  }
};
_0x8.ui = {
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
  createElement: (_0x2, _0x3 = {}) => {
    let _0x4 = document.createElement(_0x2);
    for (let [_0xa, _0xb] of Object.entries(_0x3))
      _0xa === 'innerText' ? _0x4.innerText = _0xb : _0xa === 'innerHTML' ? _0x4.innerHTML = _0xb : _0xa.startsWith('on') ? _0x4.addEventListener(_0xa.slice(2).toLowerCase(), _0xb) : _0x4.setAttribute(_0xa, _0xb);
    return _0x4;
  },
  escapeHTML: _0x2 => _0x2 ? _0x2.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '',
  showDashboard: _0x2 => {
    Ye.src = `/dashboard?site=${ encodeURIComponent(_0x2) }&path=/`, We && (We.textContent = `File Manager - ${ _0x2 }`), Ve.classList.add('active'), fe && (fe.style.display = 'none'), _0x8.camera && _0x8.camera.setZoomEnabled(!1), _0x8.ws?.isConnected && setTimeout(() => {
      let _0x3 = new Int16Array(3);
      _0x3[0] = 0, _0x3[1] = 0, _0x3[2] = 0, _0x8.ws.send(_0x3.buffer);
    }, 100);
  },
  showClaimModal: _0x2 => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let _0x3 = _0x8.user.selectedSite;
    if (!_0x3) {
      alert('Please select a site first');
      return;
    }
    let _0x4 = _0x3.domain,
      _0xa = _0x3.tile ? `<strong>Warning</strong>Your current tile at (${ _0x3.tile._0x2f }, ${ _0x3.tile._0x55 }) will be unclaimed and your site will be moved to this new tile.` : null;
    new _0xc({
      title: 'Claim Tile',
      content: `<p>Do you want to claim tile (${ _0x2._0x2f }, ${ _0x2._0x55 }) for <strong>${ _0x8.ui.escapeHTML(_0x4) }</strong>?</p>`,
      warning: _0xa,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: _0x1a => _0x1a.close()
        },
        {
          text: 'Claim',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x1a => {
            _0x1a.setButtonLoading('confirm', !0, 'Claiming...');
            try {
              let _0x1f = await (await _0x8.api.makeRequest('/api/claim', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55
                })
              })).json();
              if (_0x1f.success) {
                if (_0x8.user.selectedSite) {
                  if (_0x8.user.selectedSite.tile) {
                    let _0x1c = _0x8.plot.getTile(_0x8.user.selectedSite.tile._0x2f, _0x8.user.selectedSite.tile._0x55);
                    _0x1c && _0x1c.setFree();
                  }
                  _0x8.user.selectedSite.tile = {
                    _0x2f: _0x2._0x2f,
                    _0x55: _0x2._0x55,
                    code: _0x1f.code,
                    domain: _0x8.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                setTimeout(() => {
                  _0x2.setDomain(_0x8.user.selectedSite.domain), _0x2.setActive(!1), _0x2.element && _0x2.element.classList.toggle('locked', !1);
                }, 400), _0x1a.close(), Q();
              } else
                alert(_0x1f.error || 'Failed to claim tile'), _0x1a.setButtonLoading('confirm', !1);
            } catch (_0x1b) {
              console.error(_0x1b), alert('Failed to claim tile: ' + _0x1b.message), _0x1a.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showUnlockModal: _0x2 => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let _0x3 = _0x8.user.selectedSite;
    if (!_0x3) {
      alert('Please select a site first');
      return;
    }
    let _0x4 = _0x3.domain,
      _0xa = _0x3.tile ? `<strong>Warning</strong>Your current tile at (${ _0x3.tile._0x2f }, ${ _0x3.tile._0x55 }) will be unclaimed and your site will be moved to this new tile.` : null,
      _0xb = new _0xc({
        title: 'Unlock & Claim Tile',
        content: `
                <p>Enter the unlock code to claim the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }) for <strong>${ _0x8.ui.escapeHTML(_0x4) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: _0xa,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: _0x1a => _0x1a.close()
          },
          {
            text: 'Unlock & Claim',
            type: 'confirm',
            id: 'confirm',
            onClick: async _0x1a => {
              let _0x1f = _0xb.element.querySelector('#unlock-code-input').value.trim();
              if (!_0x1f) {
                alert('Please enter a code');
                return;
              }
              _0x1a.setButtonLoading('confirm', !0, 'Unlocking...');
              try {
                let _0x1d = await (await _0x8.api.makeRequest('/api/claim', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    _0x2f: _0x2._0x2f,
                    _0x55: _0x2._0x55,
                    code: _0x1f
                  })
                })).json();
                if (_0x1d.success) {
                  if (delete _0x8.plot.lockCache[_0x2._0x2f + ',' + _0x2._0x55], _0x8.user.selectedSite) {
                    if (_0x8.user.selectedSite.tile) {
                      let _0x1e = _0x8.plot.getTile(_0x8.user.selectedSite.tile._0x2f, _0x8.user.selectedSite.tile._0x55);
                      _0x1e && _0x1e.setFree();
                    }
                    _0x8.user.selectedSite.tile = {
                      _0x2f: _0x2._0x2f,
                      _0x55: _0x2._0x55,
                      code: _0x1d.code,
                      domain: _0x8.user.selectedSite.domain,
                      created_at: Date.now()
                    };
                  }
                  _0x2.setDomain(_0x8.user.selectedSite.domain), _0x2.setActive(!1), _0x1a.close(), Q();
                } else
                  alert(_0x1d.error || 'Failed to unlock tile'), _0x1a.setButtonLoading('confirm', !1);
              } catch (_0x1c) {
                console.error(_0x1c), alert('Failed to unlock tile: ' + _0x1c.message), _0x1a.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    _0xb.open(), setTimeout(() => {
      let _0x1a = _0xb.element.querySelector('#unlock-code-input');
      _0x1a && _0x1a.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    _0x8.ui.clanIndicator && (_0x8.ui.clanIndicator.hidden = _0x8.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!_0x8.user || !_0x8.user.selectedSite))
      try {
        let _0x3 = await (await _0x8.api.makeRequest('/api/clans/invites')).json();
        _0x3.success && (_0x8.ui.pendingClanInvites = _0x3.invites || [], _0x8.ui.updateClanIndicator());
      } catch (_0x2) {
        console.error('Failed to fetch clan invites:', _0x2);
      }
  },
  showClanModal: async () => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!_0x8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    let _0x2 = new _0xc({
      title: 'Clan Management',
      content: '<p>Loading...</p>',
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: _0x3 => _0x3.close()
      }]
    });
    _0x2.open();
    try {
      let [_0x3, _0x4] = await Promise.all([
        _0x8.api.makeRequest('/api/clans/current'),
        _0x8.api.makeRequest('/api/clans/invites')
      ]), _0xa = await _0x3.json(), _0xb = await _0x4.json();
      _0x8.ui.pendingClanInvites = _0xb.invites || [], _0x8.ui.updateClanIndicator();
      let _0x1a = _0x8.user?.admin || _0x8.user?.moderator;
      _0xa.success && _0xa.clan ? _0x8.ui.renderClanInfo(_0x2, _0xa.clan, _0x1a) : _0x8.ui.renderNoClan(_0x2, _0xb.invites || [], _0x1a);
    } catch (_0x3) {
      console.error(_0x3), _0x2.setContent('<p>Failed to load clan data: ' + _0x8.ui.escapeHTML(_0x3.message) + '</p>');
    }
  },
  renderClanInfo: (_0x2, _0x3, _0x4) => {
    let _0xa = `
            <div class="clan-name-display">${ _0x8.ui.escapeHTML(_0x3.name) }</div>
            <div class="clan-stats">${ _0x3.members.length }/5 members. ${ _0x3.members.length < 3 ? 'Unprotected! Reach 3 members to protect your tiles.' : 'Your tiles are protected.' }</div>
        `;
    _0xa += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let _0x1e of _0x3.members) {
      let _0x29 = _0x1e.domain === _0x8.user.sites.find(_0x2a => _0x2a.tile?._0x2f === _0x1e._0x2f && _0x2a.tile?._0x55 === _0x1e._0x55)?.domain;
      _0xa += `<div class="clan-member-item">
                <span class="clan-member-domain">${ _0x8.ui.escapeHTML(_0x1e.domain) }</span>
                <div>`, _0x3.isOwner && _0x1e.domain !== _0x8.user.selectedSite?.domain && (_0xa += `<button class="clan-member-kick" data-domain="${ _0x8.ui.escapeHTML(_0x1e.domain) }">Kick</button>`), _0xa += `</div>
            </div>`;
    }
    if (_0xa += '</div></div>', _0x3.isOwner && _0x3.pendingInvites && _0x3.pendingInvites.length > 0) {
      _0xa += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let _0x1e of _0x3.pendingInvites)
        _0xa += `<div class="clan-pending-item">
                    <span>${ _0x8.ui.escapeHTML(_0x1e.domain) }</span>
                    <button class="clan-pending-cancel" data-invite="${ _0x1e.id }">Cancel</button>
                </div>`;
      _0xa += '</div></div>';
    }
    _0x3.isOwner && _0x3.members.length < 5 && (_0xa += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), _0x4 && (_0xa += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), _0x2.setContent(_0xa);
    let _0xb = [{
      text: 'Close',
      type: 'cancel',
      id: 'close',
      onClick: _0x1e => _0x1e.close()
    }];
    _0x3.isOwner ? _0xb.unshift({
      text: 'Disband Clan',
      type: 'cancel',
      id: 'disband',
      onClick: async _0x1e => {
        if (confirm('Are you sure you want to disband this clan?')) {
          _0x1e.setButtonLoading('disband', !0, 'Disbanding...');
          try {
            let _0x2a = await (await _0x8.api.makeRequest('/api/clans/disband', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            _0x2a.success ? (_0x1e.close(), _0x8.ui.showClanModal()) : (alert(_0x2a.error || 'Failed to disband clan'), _0x1e.setButtonLoading('disband', !1));
          } catch (_0x29) {
            alert('Failed to disband clan: ' + _0x29.message), _0x1e.setButtonLoading('disband', !1);
          }
        }
      }
    }) : _0xb.unshift({
      text: 'Leave Clan',
      type: 'cancel',
      id: 'leave',
      onClick: async _0x1e => {
        if (confirm('Are you sure you want to leave this clan?')) {
          _0x1e.setButtonLoading('leave', !0, 'Leaving...');
          try {
            let _0x2a = await (await _0x8.api.makeRequest('/api/clans/leave', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            _0x2a.success ? (_0x1e.close(), _0x8.ui.showClanModal()) : (alert(_0x2a.error || 'Failed to leave clan'), _0x1e.setButtonLoading('leave', !1));
          } catch (_0x29) {
            alert('Failed to leave clan: ' + _0x29.message), _0x1e.setButtonLoading('leave', !1);
          }
        }
      }
    }), _0x2.buttons = _0xb;
    let _0x1a = _0x2.element.querySelector('.modal-actions');
    _0x1a.innerHTML = '', _0x2._buttonElements.clear();
    for (let _0x1e of _0x2.buttons)
      _0x1a.appendChild(_0x2._createButton(_0x1e));
    _0x2.element.querySelectorAll('.clan-member-kick').forEach(_0x1e => {
      _0x1e.addEventListener('click', async () => {
        let _0x29 = _0x1e.dataset.domain;
        if (confirm(`Are you sure you want to kick ${ _0x29 }?`)) {
          _0x1e.disabled = !0, _0x1e.textContent = '...';
          try {
            let _0x2b = await (await _0x8.api.makeRequest('/api/clans/kick', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                domain: _0x29
              })
            })).json();
            _0x2b.success ? (_0x8.ui.showClanModal(), _0x2.close()) : (alert(_0x2b.error || 'Failed to kick member'), _0x1e.disabled = !1, _0x1e.textContent = 'Kick');
          } catch (_0x2a) {
            alert('Failed to kick member: ' + _0x2a.message), _0x1e.disabled = !1, _0x1e.textContent = 'Kick';
          }
        }
      });
    }), _0x2.element.querySelectorAll('.clan-pending-cancel').forEach(_0x1e => {
      _0x1e.addEventListener('click', async () => {
        let _0x29 = _0x1e.dataset.invite;
        _0x1e.disabled = !0, _0x1e.textContent = '...';
        try {
          let _0x2b = await (await _0x8.api.makeRequest('/api/clans/cancel-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(_0x29)
            })
          })).json();
          _0x2b.success ? _0x1e.closest('.clan-pending-item').remove() : (alert(_0x2b.error || 'Failed to cancel invite'), _0x1e.disabled = !1, _0x1e.textContent = 'Cancel');
        } catch (_0x2a) {
          alert('Failed to cancel invite: ' + _0x2a.message), _0x1e.disabled = !1, _0x1e.textContent = 'Cancel';
        }
      });
    });
    let _0x1b = _0x2.element.querySelector('#clan-invite-btn'),
      _0x1f = _0x2.element.querySelector('#clan-invite-domain');
    _0x1b && _0x1f && _0x1b.addEventListener('click', async () => {
      let _0x1e = _0x1f.value.trim();
      if (!_0x1e) {
        alert('Please enter a domain');
        return;
      }
      _0x1b.disabled = !0, _0x1b.textContent = 'Sending...';
      try {
        let _0x2a = await (await _0x8.api.makeRequest('/api/clans/invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            domain: _0x1e
          })
        })).json();
        _0x2a.success ? (_0x1f.value = '', _0x8.ui.showClanModal(), _0x2.close()) : (alert(_0x2a.error || 'Failed to send invite'), _0x1b.disabled = !1, _0x1b.textContent = 'Send Invite');
      } catch (_0x29) {
        alert('Failed to send invite: ' + _0x29.message), _0x1b.disabled = !1, _0x1b.textContent = 'Send Invite';
      }
    });
    let _0x1c = _0x2.element.querySelector('#clan-admin-invites-btn');
    _0x1c && _0x1c.addEventListener('click', () => {
      _0x2.close(), setTimeout(() => _0x8.ui.showAdminInvitesModal(), 50);
    });
    let _0x1d = _0x2.element.querySelector('#clan-admin-clans-btn');
    _0x1d && _0x1d.addEventListener('click', () => {
      _0x2.close(), setTimeout(() => _0x8.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (_0x2, _0x3, _0x4) => {
    let _0xa = '';
    if (_0x3.length > 0) {
      _0xa += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let _0x1c of _0x3)
        _0xa += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${ _0x8.ui.escapeHTML(_0x1c.clan_name) }</strong>
                        ${ _0x1c.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${ _0x8.ui.escapeHTML(_0x1c.inviter_domain) }</span>` : '' }
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${ _0x1c.id }">Accept</button>
                        <button class="clan-invite-reject" data-invite="${ _0x1c.id }">Reject</button>
                    </div>
                </div>`;
      _0xa += '</div></div>';
    }
    _0xa += `<div class="clan-section">
            <div class="clan-section-title">Create a New Clan</div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">Create a clan to group neighboring tiles together (max 5 tiles).</p>
            <div class="code-input-container" style="margin: 5px 0;">
                <input type="text" id="clan-create-name" class="modal-input" placeholder="Clan name (3-20 chars, alphanumeric)" autocomplete="off" style="font-family: inherit;" maxlength="20" />
            </div>
            <button class="modal-btn modal-btn-confirm" id="clan-create-btn" style="margin-top: 5px;">Create Clan</button>
        </div>`, _0x4 && (_0xa += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), _0x2.setContent(_0xa), _0x2.element.querySelectorAll('.clan-invite-accept').forEach(_0x1c => {
      _0x1c.addEventListener('click', async () => {
        let _0x1d = _0x1c.dataset.invite;
        _0x1c.disabled = !0, _0x1c.textContent = '...';
        try {
          let _0x29 = await (await _0x8.api.makeRequest('/api/clans/accept-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(_0x1d)
            })
          })).json();
          _0x29.success ? (_0x8.ui.pendingClanInvites = _0x8.ui.pendingClanInvites.filter(_0x2a => _0x2a.id !== parseInt(_0x1d)), _0x8.ui.updateClanIndicator(), _0x8.ui.showClanModal(), _0x2.close()) : (alert(_0x29.error || 'Failed to accept invite'), _0x1c.disabled = !1, _0x1c.textContent = 'Accept');
        } catch (_0x1e) {
          alert('Failed to accept invite: ' + _0x1e.message), _0x1c.disabled = !1, _0x1c.textContent = 'Accept';
        }
      });
    }), _0x2.element.querySelectorAll('.clan-invite-reject').forEach(_0x1c => {
      _0x1c.addEventListener('click', async () => {
        let _0x1d = _0x1c.dataset.invite;
        _0x1c.disabled = !0, _0x1c.textContent = '...';
        try {
          let _0x29 = await (await _0x8.api.makeRequest('/api/clans/reject-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(_0x1d)
            })
          })).json();
          _0x29.success ? (_0x8.ui.pendingClanInvites = _0x8.ui.pendingClanInvites.filter(_0x2a => _0x2a.id !== parseInt(_0x1d)), _0x8.ui.updateClanIndicator(), _0x1c.closest('.clan-invite-item').remove()) : (alert(_0x29.error || 'Failed to reject invite'), _0x1c.disabled = !1, _0x1c.textContent = 'Reject');
        } catch (_0x1e) {
          alert('Failed to reject invite: ' + _0x1e.message), _0x1c.disabled = !1, _0x1c.textContent = 'Reject';
        }
      });
    });
    let _0xb = _0x2.element.querySelector('#clan-create-btn'),
      _0x1a = _0x2.element.querySelector('#clan-create-name');
    _0xb && _0x1a && _0xb.addEventListener('click', async () => {
      let _0x1c = _0x1a.value.trim();
      if (!_0x1c) {
        alert('Please enter a clan name');
        return;
      }
      if (_0x1c.length < 3 || _0x1c.length > 20) {
        alert('Clan name must be between 3 and 20 characters');
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(_0x1c)) {
        alert('Clan name must only contain letters and numbers');
        return;
      }
      _0xb.disabled = !0, _0xb.textContent = 'Creating...';
      try {
        let _0x1e = await (await _0x8.api.makeRequest('/api/clans/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: _0x1c
          })
        })).json();
        _0x1e.success ? (_0x8.ui.showClanModal(), _0x2.close()) : (alert(_0x1e.error || 'Failed to create clan'), _0xb.disabled = !1, _0xb.textContent = 'Create Clan');
      } catch (_0x1d) {
        alert('Failed to create clan: ' + _0x1d.message), _0xb.disabled = !1, _0xb.textContent = 'Create Clan';
      }
    });
    let _0x1b = _0x2.element.querySelector('#clan-admin-invites-btn');
    _0x1b && _0x1b.addEventListener('click', () => {
      _0x2.close(), setTimeout(() => _0x8.ui.showAdminInvitesModal(), 50);
    });
    let _0x1f = _0x2.element.querySelector('#clan-admin-clans-btn');
    _0x1f && _0x1f.addEventListener('click', () => {
      _0x2.close(), setTimeout(() => _0x8.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let _0x2 = new _0xc({
      title: 'Admin: All Clan Invites',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: _0x3 => {
            _0x3.close(), _0x8.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: _0x3 => _0x3.close()
        }
      ]
    });
    _0x2.open();
    try {
      let _0x4 = await (await _0x8.api.makeRequest('/api/clans/admin/invites')).json();
      if (_0x4.success)
        if (_0x4.invites.length === 0)
          _0x2.setContent('<p>No pending invites.</p>');
        else {
          let _0xa = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let _0xb of _0x4.invites)
            _0xa += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${ _0x8.ui.escapeHTML(_0xb.domain) }</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${ _0x8.ui.escapeHTML(_0xb.clan_name) }</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${ _0xb.id }">Delete</button>
                        </div>`;
          _0xa += '</div>', _0x2.setContent(_0xa), _0x2.element.querySelectorAll('.clan-invite-reject').forEach(_0xb => {
            _0xb.addEventListener('click', async () => {
              let _0x1a = _0xb.dataset.invite;
              _0xb.disabled = !0, _0xb.textContent = '...';
              try {
                let _0x1f = await (await _0x8.api.makeRequest('/api/clans/admin/delete-invite', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    invite: parseInt(_0x1a)
                  })
                })).json();
                _0x1f.success ? _0xb.closest('.clan-invite-item').remove() : (alert(_0x1f.error || 'Failed to delete invite'), _0xb.disabled = !1, _0xb.textContent = 'Delete');
              } catch (_0x1b) {
                alert('Failed to delete invite: ' + _0x1b.message), _0xb.disabled = !1, _0xb.textContent = 'Delete';
              }
            });
          });
        }
      else
        _0x2.setContent('<p>Failed to load invites: ' + _0x8.ui.escapeHTML(_0x4.error) + '</p>');
    } catch (_0x3) {
      _0x2.setContent('<p>Failed to load invites: ' + _0x8.ui.escapeHTML(_0x3.message) + '</p>');
    }
  },
  showAdminClansModal: async () => {
    let _0x2 = new _0xc({
      title: 'Admin: All Clans',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: _0x3 => {
            _0x3.close(), _0x8.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: _0x3 => _0x3.close()
        }
      ]
    });
    _0x2.open();
    try {
      let _0x4 = await (await _0x8.api.makeRequest('/api/clans/admin/clans')).json();
      if (_0x4.success)
        if (_0x4.clans.length === 0)
          _0x2.setContent('<p>No clans.</p>');
        else {
          let _0xa = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let _0xb of _0x4.clans)
            _0xa += `<div class="clan-member-item">
                            <div>
                                <div><strong>${ _0x8.ui.escapeHTML(_0xb.name) }</strong></div>
                                <div style="font-size: 11px; color: #888;">${ _0xb.member_count }/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${ _0xb.owner_x !== null && _0xb.owner_y !== null ? `<button class="clan-jump-owner" data-x="${ _0xb.owner_x }" data-y="${ _0xb.owner_y }">Jump</button>` : '' }
                                <button class="clan-member-kick" data-clan="${ _0xb.id }">Disband</button>
                            </div>
                        </div>`;
          _0xa += '</div>', _0x2.setContent(_0xa), _0x2.element.querySelectorAll('.clan-jump-owner').forEach(_0xb => {
            _0xb.addEventListener('click', () => {
              let _0x1a = parseInt(_0xb.dataset._0x2f),
                _0x1b = parseInt(_0xb.dataset._0x55);
              _0x8.camera && !isNaN(_0x1a) && !isNaN(_0x1b) && (_0x8.camera.centerOn(_0x1a * 250 + 250 / 2, _0x1b * 250 + 250 / 2), _0x2.close());
            });
          }), _0x2.element.querySelectorAll('.clan-member-kick').forEach(_0xb => {
            _0xb.addEventListener('click', async () => {
              let _0x1a = _0xb.dataset.clan;
              if (confirm('Are you sure you want to disband this clan?')) {
                _0xb.disabled = !0, _0xb.textContent = '...';
                try {
                  let _0x1f = await (await _0x8.api.makeRequest('/api/clans/admin/disband', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(_0x1a)
                    })
                  })).json();
                  _0x1f.success ? _0xb.closest('.clan-member-item').remove() : (alert(_0x1f.error || 'Failed to disband clan'), _0xb.disabled = !1, _0xb.textContent = 'Disband');
                } catch (_0x1b) {
                  alert('Failed to disband clan: ' + _0x1b.message), _0xb.disabled = !1, _0xb.textContent = 'Disband';
                }
              }
            });
          });
        }
      else
        _0x2.setContent('<p>Failed to load clans: ' + _0x8.ui.escapeHTML(_0x4.error) + '</p>');
    } catch (_0x3) {
      _0x2.setContent('<p>Failed to load clans: ' + _0x8.ui.escapeHTML(_0x3.message) + '</p>');
    }
  },
  showFreeModal: _0x2 => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let _0x3 = new _0xc({
      title: 'Free Tile',
      content: `
                <p>What would you like to do with the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 })?</p>
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
        onClick: _0xb => _0xb.close()
      }]
    });
    _0x3.open();
    let _0x4 = _0x3.element.querySelector('#option-transfer'),
      _0xa = _0x3.element.querySelector('#option-free');
    _0x4.addEventListener('click', async () => {
      _0x4.disabled = !0, _0xa.disabled = !0, _0x4.innerHTML = '<strong>Loading...</strong>';
      try {
        let _0x1a = await (await _0x8.api.makeRequest('/api/getcode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            _0x2f: _0x2._0x2f,
            _0x55: _0x2._0x55
          })
        })).json();
        if (_0x1a.success) {
          _0x3.setContent(`
                        <p>Share this code with another person to let them take your tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ _0x8.ui.escapeHTML(_0x1a.code) }</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let _0x1b = _0x3.element.querySelector('#copy-code-btn');
          _0x1b.addEventListener('click', () => {
            navigator.clipboard.writeText(_0x1a.code), _0x1b.textContent = 'Copied!', setTimeout(() => {
              _0x1b.textContent = 'Copy';
            }, 1500);
          });
        } else
          alert(_0x1a.error || 'Failed to get tile code'), _0x4.disabled = !1, _0xa.disabled = !1, _0x4.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      } catch (_0xb) {
        console.error(_0xb), alert('Failed to get tile code: ' + _0xb.message), _0x4.disabled = !1, _0xa.disabled = !1, _0x4.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      }
    }), _0xa.addEventListener('click', () => {
      _0x3.setContent(`<p>Are you sure you want to free the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 })?</p><p>The tile for <strong>${ _0x8.ui.escapeHTML(_0x2.domain) }</strong> will become available for <strong>anyone</strong> to claim.</p>`), _0x3.buttons = [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: _0x1a => {
            _0x1a.close(), _0x8.ui.showFreeModal(_0x2);
          }
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x1a => {
            _0x1a.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let _0x1f = await (await _0x8.api.makeRequest('/api/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55
                })
              })).json();
              if (_0x1f.success) {
                let _0x1c = _0x8.user.sites.find(_0x1d => _0x1d.domain === _0x2.domain);
                _0x1c && (_0x1c.tile = null), _0x2.setFree(), _0x2.setActive(!1), _0x1a.close(), Q();
              } else
                alert(_0x1f.error || 'Failed to free tile'), _0x1a.setButtonLoading('confirm', !1);
            } catch (_0x1b) {
              console.error(_0x1b), alert('Failed to free tile: ' + _0x1b.message), _0x1a.setButtonLoading('confirm', !1);
            }
          }
        }
      ];
      let _0xb = _0x3.element.querySelector('.modal-actions');
      _0xb.innerHTML = '', _0x3._buttonElements.clear();
      for (let _0x1a of _0x3.buttons)
        _0xb.appendChild(_0x3._createButton(_0x1a));
    });
  },
  showTakeModal: _0x2 => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let _0x3 = _0x8.user.selectedSite;
    if (!_0x3) {
      alert('Please select a site first');
      return;
    }
    let _0x4 = _0x3.domain,
      _0xa = _0x3.tile ? `<strong>Warning</strong>Your current tile at (${ _0x3.tile._0x2f }, ${ _0x3.tile._0x55 }) will be freed and your site will be moved to this new tile.` : null,
      _0xb = new _0xc({
        title: 'Take Tile',
        content: `
                <p>Enter the code to take the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }) for <strong>${ _0x8.ui.escapeHTML(_0x4) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: _0xa,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: _0x1a => _0x1a.close()
          },
          {
            text: 'Take Tile',
            type: 'confirm',
            id: 'confirm',
            onClick: async _0x1a => {
              let _0x1f = _0xb.element.querySelector('#take-code-input').value.trim();
              if (!_0x1f) {
                alert('Please enter a code');
                return;
              }
              _0x1a.setButtonLoading('confirm', !0, 'Taking...');
              try {
                let _0x1d = await (await _0x8.api.makeRequest('/api/take', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    _0x2f: _0x2._0x2f,
                    _0x55: _0x2._0x55,
                    code: _0x1f
                  })
                })).json();
                if (_0x1d.success) {
                  if (_0x8.user.selectedSite && _0x8.user.selectedSite.tile) {
                    let _0x1e = _0x8.plot.getTile(_0x8.user.selectedSite.tile._0x2f, _0x8.user.selectedSite.tile._0x55);
                    _0x1e && _0x1e.setFree();
                  }
                  _0x8.user.selectedSite && (_0x8.user.selectedSite.tile = {
                    _0x2f: _0x2._0x2f,
                    _0x55: _0x2._0x55,
                    domain: _0x8.user.selectedSite.domain,
                    created_at: Date.now()
                  }), _0x2.setDomain(_0x4), _0x2.setActive(!1), _0x1a.close(), Q();
                } else
                  alert(_0x1d.error || 'Failed to take tile'), _0x1a.setButtonLoading('confirm', !1);
              } catch (_0x1c) {
                console.error(_0x1c), alert('Failed to take tile: ' + _0x1c.message), _0x1a.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    _0xb.open(), setTimeout(() => {
      let _0x1a = _0xb.element.querySelector('#take-code-input');
      _0x1a && _0x1a.focus();
    }, 100);
  },
  showAdminFreeModal: _0x2 => {
    new _0xc({
      title: 'Admin: Free Tile',
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 })?</p>
                <p>This will remove <strong>${ _0x8.ui.escapeHTML(_0x2.domain) }</strong> from this tile.</p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: _0x4 => _0x4.close()
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x4 => {
            _0x4.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let _0xb = await (await _0x8.api.makeRequest('/api/admin/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55
                })
              })).json();
              _0xb.success ? (_0x2.setFree(), _0x2.setActive(!1), _0x4.close()) : (alert(_0xb.error || 'Failed to free tile'), _0x4.setButtonLoading('confirm', !1));
            } catch (_0xa) {
              console.error(_0xa), alert('Failed to free tile: ' + _0xa.message), _0x4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminBanModal: _0x2 => {
    new _0xc({
      title: 'Admin: Ban User',
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${ _0x8.ui.escapeHTML(_0x2.domain) }</strong>?</p>
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
          onClick: _0x4 => _0x4.close()
        },
        {
          text: 'Ban User',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x4 => {
            _0x4.setButtonLoading('confirm', !0, 'Banning...');
            try {
              let _0xb = await (await _0x8.api.makeRequest('/api/admin/ban', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55
                })
              })).json();
              _0xb.success ? (_0x2.setFree(), _0x2.setActive(!1), _0x4.close(), alert('User banned.')) : (alert(_0xb.error || 'Failed to ban user'), _0x4.setButtonLoading('confirm', !1));
            } catch (_0xa) {
              console.error(_0xa), alert('Failed to ban user: ' + _0xa.message), _0x4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockModal: (_0x2, _0x3) => {
    let _0x4 = _0x3 ? 'unlock' : 'lock',
      _0xa = _0x3 ? 'unlocked' : 'locked';
    new _0xc({
      title: `Admin: ${ _0x3 ? 'Unlock' : 'Lock' } Tile`,
      content: `
                <p>Are you sure you want to <strong>${ _0x4 }</strong> the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 })?</p>
                ${ _0x3 ? '<p>This tile will become available for claiming again.</p>' : '<p>This tile will be reserved and cannot be claimed by regular users.</p>' }
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: _0x1a => _0x1a.close()
        },
        {
          text: _0x3 ? 'Unlock Tile' : 'Lock Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x1a => {
            _0x1a.setButtonLoading('confirm', !0, _0x3 ? 'Unlocking...' : 'Locking...');
            try {
              let _0x1f = await (await _0x8.api.makeRequest('/api/admin/lock', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55,
                  lock: !_0x3
                })
              })).json();
              _0x1f.success ? (_0x3 ? delete _0x8.plot.lockCache[_0x2._0x2f + ',' + _0x2._0x55] : _0x8.plot.lockCache[_0x2._0x2f + ',' + _0x2._0x55] = !0, _0x1a.close(), _0x2.setActive(!1), _0x2.setActive(!0)) : (alert(_0x1f.error || `Failed to ${ _0x4 } tile`), _0x1a.setButtonLoading('confirm', !1));
            } catch (_0x1b) {
              console.error(_0x1b), alert(`Failed to ${ _0x4 } tile: ` + _0x1b.message), _0x1a.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockCodeModal: async _0x2 => {
    try {
      let _0x4 = await (await _0x8.api.makeRequest(`/api/admin/lockcode?x=${ _0x2._0x2f }&y=${ _0x2._0x55 }`)).json();
      if (_0x4.success) {
        let _0xa = new _0xc({
          title: 'Lock Code',
          content: `
                        <p>Lock code for tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }):</p>
                        <div class="code-display">
                            <code id="lock-code">${ _0x8.ui.escapeHTML(_0x4.code) }</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: _0x1a => _0x1a.close()
          }]
        });
        _0xa.open();
        let _0xb = _0xa.element.querySelector('#copy-lock-code-btn');
        _0xb.addEventListener('click', () => {
          navigator.clipboard.writeText(_0x4.code), _0xb.textContent = 'Copied!', setTimeout(() => {
            _0xb.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(_0x4.error || 'Failed to get lock code');
    } catch (_0x3) {
      console.error(_0x3), alert('Failed to get lock code: ' + _0x3.message);
    }
  },
  showAdminTileCodeModal: async _0x2 => {
    try {
      let _0x4 = await (await _0x8.api.makeRequest(`/api/admin/tilecode?x=${ _0x2._0x2f }&y=${ _0x2._0x55 }`)).json();
      if (_0x4.success) {
        let _0xa = new _0xc({
          title: 'Tile Secret Code',
          content: `
                        <p>Secret code for tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ _0x8.ui.escapeHTML(_0x4.code) }</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: _0x1a => _0x1a.close()
          }]
        });
        _0xa.open();
        let _0xb = _0xa.element.querySelector('#copy-tile-code-btn');
        _0xb.addEventListener('click', () => {
          navigator.clipboard.writeText(_0x4.code), _0xb.textContent = 'Copied!', setTimeout(() => {
            _0xb.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(_0x4.error || 'Failed to get tile code');
    } catch (_0x3) {
      console.error(_0x3), alert('Failed to get tile code: ' + _0x3.message);
    }
  },
  showAdminSwapModal: _0x2 => {
    let _0x3 = new _0xc({
      title: 'Admin: Swap Tiles',
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }):</p>
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
          onClick: _0x4 => _0x4.close()
        },
        {
          text: 'Swap',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x4 => {
            let _0xa = _0x3.element.querySelector('#swap-x-input'),
              _0xb = _0x3.element.querySelector('#swap-y-input'),
              _0x1a = parseInt(_0xa.value.trim()),
              _0x1b = parseInt(_0xb.value.trim());
            if (isNaN(_0x1a) || isNaN(_0x1b)) {
              alert('Please enter valid X and Y coordinates');
              return;
            }
            if (_0x2._0x2f === _0x1a && _0x2._0x55 === _0x1b) {
              alert('Cannot swap a tile with itself');
              return;
            }
            _0x4.setButtonLoading('confirm', !0, 'Swapping...');
            try {
              let _0x1c = await (await _0x8.api.makeRequest('/api/admin/swap', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  x1: _0x2._0x2f,
                  y1: _0x2._0x55,
                  x2: _0x1a,
                  y2: _0x1b
                })
              })).json();
              _0x1c.success ? (_0x4.close(), _0x2.setActive(!1), setTimeout(() => {
                let _0x1d = _0x8.plot.getTile(_0x2._0x2f, _0x2._0x55),
                  _0x1e = _0x8.plot.getTile(_0x1a, _0x1b);
                _0x1d && (_0x1d.setActive(!1), _0x1d.fetchContent('/index.html', !0)), _0x1e && (_0x1e.setActive(!1), _0x1e.fetchContent('/index.html', !0));
              }, 100)) : (alert(_0x1c.error || 'Failed to swap tiles'), _0x4.setButtonLoading('confirm', !1));
            } catch (_0x1f) {
              console.error(_0x1f), alert('Failed to swap tiles: ' + _0x1f.message), _0x4.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    });
    _0x3.open(), setTimeout(() => {
      let _0x4 = _0x3.element.querySelector('#swap-x-input');
      _0x4 && _0x4.focus();
    }, 100);
  },
  createAdminControl: _0x2 => {
    let _0x3 = _0x8.ui.createElement('div', {
      class: 'tile-admin-panel'
    });
    _0x2.free || (_0x3.appendChild(_0x8.ui.createElement('button', {
      innerText: 'Edit',
      onclick: () => {
        _0x8.ui.showDashboard(_0x2.domain);
      }
    })), _0x3.appendChild(_0x8.ui.createElement('span', {
      class: 'separator'
    })), _0x3.appendChild(_0x8.ui.createElement('button', {
      innerText: 'Free',
      onclick: () => {
        _0x8.ui.showAdminFreeModal(_0x2);
      }
    })), _0x3.appendChild(_0x8.ui.createElement('button', {
      class: 'danger',
      innerText: 'Ban',
      onclick: () => {
        _0x8.ui.showAdminBanModal(_0x2);
      }
    })), _0x3.appendChild(_0x8.ui.createElement('button', {
      innerText: 'Swap',
      onclick: () => {
        _0x8.ui.showAdminSwapModal(_0x2);
      }
    })));
    let _0x4 = _0x8.plot.lockCache[_0x2._0x2f + ',' + _0x2._0x55],
      _0xa = _0x8.ui.createElement('button', {
        innerText: _0x4 ? 'Unlock' : 'Lock',
        onclick: async () => {
          try {
            let _0x1a = await (await _0x8.api.makeRequest(`/api/admin/lockstatus?x=${ _0x2._0x2f }&y=${ _0x2._0x55 }`)).json();
            _0x1a.success ? _0x8.ui.showAdminLockModal(_0x2, _0x1a.locked) : alert(_0x1a.error || 'Failed to check lock status');
          } catch (_0xb) {
            console.error(_0xb), alert('Failed to check lock status: ' + _0xb.message);
          }
        }
      });
    if (_0x2.free || _0x3.appendChild(_0x8.ui.createElement('span', {
        class: 'separator'
      })), _0x3.appendChild(_0xa), _0x4) {
      let _0xb = _0x8.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          _0x8.ui.showAdminLockCodeModal(_0x2);
        }
      });
      _0x3.appendChild(_0xb);
    }
    if (!_0x2.free) {
      let _0xb = _0x8.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          _0x8.ui.showAdminTileCodeModal(_0x2);
        }
      });
      _0x3.appendChild(_0xb);
    }
    return _0x3;
  },
  createTileControl: _0x2 => {
    let _0x3 = _0x8.ui.createElement('div', {
        class: 'tile-info',
        innerHTML: `
                <div class="tile-domain">
                    ${ _0x2.domain ? `<a href="https://${ _0x8.ui.escapeHTML(_0x2.domain) }" target="_blank">${ _0x8.ui.escapeHTML(_0x2.domain) }</a>` : `${ _0x2.locked ? 'Locked tile' : 'Free tile' } ${ _0x2._0x2f }, ${ _0x2._0x55 }` }
                </div>
                <div class="tile-controls">
            `
      }),
      _0x4 = _0x3.querySelector('.tile-controls');
    if (_0x2.free)
      _0x8.plot.lockCache[_0x2._0x2f + ',' + _0x2._0x55] ? _0x4.appendChild(_0x8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Unlock',
        onclick: () => {
          _0x8.ui.showUnlockModal(_0x2);
        }
      })) : _0x4.appendChild(_0x8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Claim',
        onclick: () => {
          _0x8.ui.showClaimModal(_0x2);
        }
      }));
    else {
      let _0xa = _0x8?.user?.sites?.find(_0xb => _0xb.domain === _0x2.domain);
      if (_0xa && (_0x4.appendChild(_0x8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Edit',
          onclick: () => {
            _0x8.ui.showDashboard(_0x2.domain);
          }
        })), _0x4.appendChild(_0x8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Give',
          onclick: () => {
            _0x8.ui.showFreeModal(_0x2);
          }
        }))), (!_0xa || _0x8?.user?.selectedSite?.domain !== _0x2.domain && _0x8?.user?.sites?.length >= 2) && _0x4.appendChild(_0x8.ui.createElement('button', {
          class: 'btn',
          innerText: 'Take',
          onclick: () => {
            _0x8.ui.showTakeModal(_0x2);
          }
        })), !_0xa && _0x8?.user?.selectedSite?.tile) {
        let _0xb = _0x8.user.selectedSite.tile;
        Math.abs(_0xb._0x2f - _0x2._0x2f) <= 1 && Math.abs(_0xb._0x55 - _0x2._0x55) <= 1 && _0x8.ui.checkAndShowAttackButton(_0x2, _0x4);
      }
    }
    return _0x4.appendChild(_0x8.ui.createElement('button', {
      class: 'btn',
      innerHTML: 'Link',
      onclick: _0xa => {
        _0xa.target.innerText = 'Copied!', setTimeout(() => {
          _0xa.target.innerText = 'Link';
        }, 500);
        let _0xb = _0x2._0x2f * 250 + 250 / 2,
          _0x1a = _0x2._0x55 * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${ _0xb },${ _0x1a }`);
      }
    })), _0x4.appendChild(_0x8.ui.createElement('button', {
      class: 'btn',
      innerHTML: '\u27F3',
      onclick: () => {
        _0x2.fetchContent(_0x2.path, !0), _0x2.setActive(!1);
      }
    })), _0x4.appendChild(_0x8.ui.createElement('button', {
      class: 'btn',
      innerHTML: '&times;',
      onclick: () => {
        _0x2.setActive(!1);
      }
    })), _0x3.appendChild(_0x4), _0x3;
  },
  createVoteMenu: _0x2 => {
    if (_0x2.free || !_0x2.domain)
      return null;
    let _0x3 = _0x8.ui.createElement('div', {
        class: 'tile-vote-menu'
      }),
      _0x4 = _0x8.ui.createElement('button', {
        class: 'vote-btn vote-up',
        innerHTML: '\u25B2',
        onclick: () => _0x8.ui.handleVote(_0x2, 1, _0x4, _0xb, _0xa)
      }),
      _0xa = _0x8.ui.createElement('div', {
        class: 'vote-score',
        innerText: '...'
      }),
      _0xb = _0x8.ui.createElement('button', {
        class: 'vote-btn vote-down',
        innerHTML: '\u25BC',
        onclick: () => _0x8.ui.handleVote(_0x2, -1, _0x4, _0xb, _0xa)
      });
    return _0x3.appendChild(_0x4), _0x3.appendChild(_0xa), _0x3.appendChild(_0xb), _0x8.ui.fetchVoteData(_0x2, _0x4, _0xb, _0xa), _0x3;
  },
  fetchVoteData: async (_0x2, _0x3, _0x4, _0xa) => {
    try {
      let _0x1a = await (await _0x8.api.makeRequest(`/api/votes/score?domain=${ encodeURIComponent(_0x2.domain) }`)).json();
      if (_0x1a.success) {
        let _0x1b = _0x1a.score || 0;
        _0xa.textContent = _0x1b;
        let _0x1f = _0x1a.myVote || 0;
        _0x3.classList.remove('active'), _0x4.classList.remove('active'), _0x1f === 1 ? _0x3.classList.add('active') : _0x1f === -1 && _0x4.classList.add('active');
      } else
        _0xa.textContent = '0';
    } catch (_0xb) {
      console.error('Failed to fetch vote score:', _0xb), _0xa.textContent = '0';
    }
  },
  handleVote: async (_0x2, _0x3, _0x4, _0xa, _0xb) => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let _0x1a = _0x4.classList.contains('active'),
      _0x1b = _0xa.classList.contains('active'),
      _0x1f = _0x3;
    (_0x3 === 1 && _0x1a || _0x3 === -1 && _0x1b) && (_0x1f = 0), _0x4.disabled = !0, _0xa.disabled = !0;
    try {
      let _0x1d = await (await _0x8.api.makeRequest('/api/votes/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: _0x2.domain,
          vote: _0x1f
        })
      })).json();
      if (_0x1d.success) {
        let _0x1e = _0x1d.score || 0;
        _0xb.textContent = _0x1e, _0x4.classList.remove('active'), _0xa.classList.remove('active'), _0x1f === 1 ? _0x4.classList.add('active') : _0x1f === -1 && _0xa.classList.add('active');
      } else
        alert(_0x1d.error || 'Failed to vote');
    } catch (_0x1c) {
      console.error('Failed to vote:', _0x1c), alert('Failed to vote: ' + _0x1c.message);
    } finally {
      _0x4.disabled = !1, _0xa.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (_0x2, _0x3) => {
    try {
      let _0xa = await (await _0x8.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(_0x2.domain) }`)).json();
      if (_0xa.success && _0xa.clan && _0xa.clan.members && _0xa.clan.members.length >= 3)
        return;
      _0x3.prepend(_0x8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          _0x8.ui.showAttackModal(_0x2);
        }
      }));
    } catch (_0x4) {
      console.error('Failed to check clan for attack button:', _0x4), _0x3.prepend(_0x8.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          _0x8.ui.showAttackModal(_0x2);
        }
      }));
    }
  },
  showAttackModal: async _0x2 => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!_0x8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!_0x8.user.selectedSite.tile) {
      alert('You must have a tile to attack from');
      return;
    }
    let _0x4 = _0x8.user.selectedSite.domain,
      _0xa = _0x2.domain,
      _0xb = 0,
      _0x1a = null,
      _0x1b = null;
    try {
      let _0x1e = await (await _0x8.api.makeRequest(`/api/attack/success-chance?attacked_domain=${ encodeURIComponent(_0xa) }`)).json();
      _0x1e.success ? (_0xb = _0x1e.successChance, _0x1a = _0x1e.cooldown) : _0x1b = _0x1e.error || 'Failed to get attack success chance';
    } catch (_0x1d) {
      console.error(_0x1d), _0x1b = 'Failed to get attack success chance: ' + _0x1d.message;
    }
    if (_0x1b) {
      alert(_0x1b);
      return;
    }
    if (_0xb < 1) {
      alert('Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.');
      return;
    }
    let _0x1f = '';
    if (_0x1a && _0x1a.isOnCooldown) {
      let _0x1d = _0x1a.hoursRemaining;
      _0x1f = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${ _0x1d > 1 ? `Approximately ${ _0x1d } hours remaining until full chance.` : 'Less than 1 hour remaining until full chance.' }
                </p>
            `;
    }
    new _0xc({
      title: 'Attack Tile',
      content: `
                <p>
                    Attack the tile at (${ _0x2._0x2f }, ${ _0x2._0x55 }) owned by <strong>${ _0x8.ui.escapeHTML(_0xa) }</strong>?<br>
                    Attack success chance: ${ _0xb.toFixed(1) }%
                </p>
                ${ _0x1f }
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: _0x1d => _0x1d.close()
        },
        {
          text: 'Attack',
          type: 'confirm',
          id: 'confirm',
          onClick: async _0x1d => {
            _0x1d.setButtonLoading('confirm', !0, 'Attacking...');
            try {
              let _0x29 = await (await _0x8.api.makeRequest('/api/attack/perform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  _0x2f: _0x2._0x2f,
                  _0x55: _0x2._0x55
                })
              })).json();
              if (_0x29.success) {
                _0x1d.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                  let _0x2b = _0x8.plot.getTile(_0x8.user.selectedSite.tile._0x2f, _0x8.user.selectedSite.tile._0x55);
                  _0x2b && (_0x2b.fetchContent('/index.html', !0), _0x2b.setActive(!1)), _0x2.fetchContent('/index.html', !0), _0x2.setActive(!1), _0x8.user.selectedSite && (_0x8.user.selectedSite.tile = {
                    _0x2f: _0x2._0x2f,
                    _0x55: _0x2._0x55,
                    domain: _0x4,
                    created_at: Date.now()
                  });
                }, 500), _0x1d.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: _0x2b => _0x2b.close()
                }];
                let _0x2a = _0x1d.element.querySelector('.modal-actions');
                _0x2a.innerHTML = '', _0x1d._buttonElements.clear();
                for (let _0x2b of _0x1d.buttons)
                  _0x2a.appendChild(_0x1d._createButton(_0x2b));
              } else {
                _0x1d.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${ _0x8.ui.escapeHTML(_0x29.error || 'The attack was unsuccessful.') }
                                    </p>
                                `), _0x1d.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: _0x2b => _0x2b.close()
                }];
                let _0x2a = _0x1d.element.querySelector('.modal-actions');
                _0x2a.innerHTML = '', _0x1d._buttonElements.clear();
                for (let _0x2b of _0x1d.buttons)
                  _0x2a.appendChild(_0x1d._createButton(_0x2b));
              }
            } catch (_0x1e) {
              console.error(_0x1e), alert('Failed to attack tile: ' + _0x1e.message), _0x1d.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showEmbedModal: () => {
    if (!_0x8.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!_0x8.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!_0x8.user.selectedSite.tile) {
      alert('Your site must have a tile to embed it');
      return;
    }
    let _0x2 = _0x8.user.selectedSite.domain,
      _0x3 = !1,
      _0x4 = _0x32 => {
        let _0x33 = `/e/${ _0x2 }`;
        return _0x32 ? `${ _0x33 }?dark=true` : _0x33;
      },
      _0xa = _0x32 => `<iframe src="https://webtiles.kicya.net${ _0x4(_0x32) }" width="250" height="270" frameborder="0"></iframe>`,
      _0xb = document.createElement('div');
    _0xb.style.cssText = 'display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;';
    let _0x1a = document.createElement('div');
    _0x1a.style.cssText = 'min-width: 250px; max-width: 100%;';
    let _0x1b = document.createElement('h4');
    _0x1b.textContent = 'Preview', _0x1b.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', _0x1a.appendChild(_0x1b);
    let _0x1f = document.createElement('iframe');
    _0x1f.src = _0x4(_0x3), _0x1f.width = '250', _0x1f.height = '270', _0x1f.style.cssText = 'border: 1px solid #ddd; border-radius: 4px;', _0x1f.setAttribute('frameborder', '0'), _0x1a.appendChild(_0x1f);
    let _0x1c = document.createElement('div');
    _0x1c.style.cssText = 'flex: 1; min-width: 300px; max-width: 100%;';
    let _0x1d = document.createElement('h4');
    _0x1d.textContent = 'Embed Code', _0x1d.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', _0x1c.appendChild(_0x1d);
    let _0x1e = document.createElement('div');
    _0x1e.style.cssText = 'margin-bottom: 10px; display: flex; align-items: center; gap: 3px;';
    let _0x29 = document.createElement('input');
    _0x29.type = 'checkbox', _0x29.id = 'embed-dark-mode', _0x29.style.cssText = 'cursor: pointer;';
    let _0x2a = document.createElement('label');
    _0x2a.setAttribute('for', 'embed-dark-mode'), _0x2a.textContent = 'Dark mode', _0x2a.style.cssText = 'cursor: pointer; font-size: 13px; user-select: none;', _0x1e.appendChild(_0x29), _0x1e.appendChild(_0x2a), _0x1a.appendChild(_0x1e);
    let _0x2b = document.createElement('textarea');
    _0x2b.value = _0xa(_0x3), _0x2b.style.cssText = 'width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;', _0x2b.readOnly = !0, _0x1c.appendChild(_0x2b);
    let _0x2c = document.createElement('button');
    _0x2c.textContent = 'Copy Code', _0x2c.style.cssText = 'margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;', _0x2c.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(_0x2b.value), _0x2c.textContent = 'Copied!', setTimeout(() => {
          _0x2c.textContent = 'Copy Code';
        }, 2000);
      } catch {
        _0x2b.select(), document.execCommand('copy'), _0x2c.textContent = 'Copied!', setTimeout(() => {
          _0x2c.textContent = 'Copy Code';
        }, 2000);
      }
    }), _0x1c.appendChild(_0x2c);
    let _0x2d = document.createElement('div');
    _0x2d.style.cssText = 'font-size: 12px; color: #666; margin-top: 10px;', _0x2d.innerHTML = 'You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.', _0x1c.appendChild(_0x2d), _0x29.addEventListener('change', _0x32 => {
      _0x3 = _0x32.target.checked, _0x1f.src = _0x4(_0x3), _0x2b.value = _0xa(_0x3);
    }), _0xb.appendChild(_0x1a), _0xb.appendChild(_0x1c);
    let _0x2e = new _0xc({
      title: 'Embed Tile',
      content: _0xb,
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: _0x32 => _0x32.close()
      }]
    });
    _0x2e.open(), _0x2e.element && (_0x2e.element.style.maxWidth = '700px');
  }
};

function _0x65() {
  if (!_0x8.user)
    return;
  let _0x2 = _0x8.ui.siteSelector.value,
    _0x3 = _0x8.user.sites.find(_0xa => _0xa.domain === _0x2);
  _0x2 === 'select' || _0x2 === 'add' || !_0x3 ? (_0x8.ui.siteJumpButton.hidden = !0, _0x8.ui.siteEditButton.hidden = !0, _0x8.ui.siteEmbedButton.hidden = !0, _0x8.ui.siteClanButton.hidden = !0) : (_0x8.ui.siteEditButton.hidden = !1, _0x8.ui.siteJumpButton.hidden = !_0x3.tile, _0x8.ui.siteClanButton.hidden = !_0x3.tile, _0x8.ui.siteEmbedButton.hidden = !_0x3.tile), _0x8.user.selectedSite = _0x3;
  let _0x4 = _0x8?.plot?.activeTile;
  _0x4 && (_0x4.setActive(!1), _0x4.setActive(!0));
}
_0x8.ui.siteSelector && _0x8.ui.siteSelector.addEventListener('change', () => {
  if (!_0x8.user)
    return;
  let _0x2 = _0x8.ui.siteSelector.value;
  _0x2 === 'add' && (location.href = _0x8.user ? 'https://kicya.net/account/sites' : 'https://kicya.net/auth/register');
  let _0x3 = _0x8.user.sites.find(_0x4 => _0x4.domain === _0x2);
  if (_0x3) {
    document.cookie = `site=${ _0x3.domain }; path=/`;
    let _0x4 = document.querySelector('#kicya-site-select-option');
    _0x4 && _0x4.remove(), _0x8.ui.fetchClanInvites();
  }
  _0x65();
});
_0x65();
var _0x66 = document.getElementById('dashboard-modal'),
  _0x67 = document.getElementById('dashboard-iframe'),
  _0x68 = document.getElementById('dashboard-modal-close'),
  _0x69 = document.getElementById('dashboard-modal-title'),
  _0x6a = document.getElementById('app');
_0x8.ui.siteEditButton && _0x8.ui.siteEditButton.addEventListener('click', () => {
  !_0x8.user || !_0x8.user.selectedSite || _0x8.ui.showDashboard(_0x8.user.selectedSite.domain);
});
_0x8.ui.siteJumpButton && _0x8.ui.siteJumpButton.addEventListener('click', () => {
  if (!_0x8.user || !_0x8.user.selectedSite || !_0x8.user.selectedSite.tile)
    return;
  let _0x2 = _0x8.user.selectedSite.tile,
    _0x3 = _0x2._0x2f * 250 + 250 / 2,
    _0x4 = _0x2._0x55 * 250 + 250 / 2;
  _0x8.camera.centerOn(_0x3, _0x4);
});
_0x8.ui.siteCenterButton && _0x8.ui.siteCenterButton.addEventListener('click', () => {
  _0x8.camera && _0x8.camera.centerOn(100, 100);
});
_0x8.ui.siteClanButton && _0x8.ui.siteClanButton.addEventListener('click', () => {
  _0x8.ui.showClanModal();
});
_0x8.ui.siteEmbedButton && _0x8.ui.siteEmbedButton.addEventListener('click', () => {
  _0x8.ui.showEmbedModal();
});

function _0x6b() {
  _0x66.classList.remove('active'), _0x67.src = '', _0x6a && (_0x6a.style.display = ''), _0x8.camera && _0x8.camera.setZoomEnabled(!0);
}
_0x68 && _0x68.addEventListener('click', _0x6b);
_0x8.ui.zoomSlider.addEventListener('input', _0x2 => {
  _0x8.camera.zoomTo(_0x8.camera.width / 2, _0x8.camera.height / 2, +_0x2.target.value);
});
var _0x6c = document.getElementById('kicya-menu-toggle'),
  _0x6d = document.getElementById('kicya-links');
_0x6c && _0x6d && (_0x6c.addEventListener('click', function(_0x2) {
  _0x2.stopPropagation(), _0x6d.classList.toggle('active');
}), document.addEventListener('click', function(_0x2) {
  !_0x6d.contains(_0x2.target) && !_0x6c.contains(_0x2.target) && _0x6d.classList.remove('active');
}), _0x6d.querySelectorAll('a').forEach(function(_0x2) {
  _0x2.addEventListener('click', function() {
    _0x6d.classList.remove('active');
  });
}));

function _0x6e() {
  if (!_0x8.user || localStorage.getItem('rules_accepted'))
    return;
  new _0xc({
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
      onClick: _0x3 => {
        localStorage.setItem('rules_accepted', '1'), _0x3.close();
      }
    }]
  }).open();
}
_0x6e();
_0x8.user && _0x8.user.selectedSite && _0x8.ui.fetchClanInvites();
var _0x6f = _0x8.ui;
var _0x70 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let _0x3 = _0x8.api.getToken(),
      _0x4 = _0x8.api.getTokenExpiry();
    if (!_0x8.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!_0x3 || _0x4 < Date.now()) && await _0x8.api.showCaptchaModal();
    let _0xa = 60000,
      _0xb = Date.now();
    for (; !_0x8.api.getToken() || _0x8.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - _0xb > _0xa) {
        console.error('[WS] Captcha timeout');
        let _0x1a = document.getElementById('loading-text');
        _0x1a && (_0x1a.textContent = 'Verification timeout. Please refresh.');
        return;
      }
      await new Promise(_0x1a => setTimeout(_0x1a, 100));
    }
    this.connect();
  }
  connect() {
    let _0x3 = location.protocol === 'https:' ? 'wss:' : 'ws:',
      _0x4 = _0x8.api.getToken() || '';
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${ _0x3 }//${ location.host }/ws?t=${ encodeURIComponent(_0x4) }`), this.ws.binaryType = 'arraybuffer', this.ws.onopen = () => {
      console.log('[WS] Connected'), this.connected = !0, this.consecutiveFailures = 0, this.emit('open');
      for (let _0xa of this.messageQueue)
        this.ws.send(_0xa);
      this.messageQueue = [];
    }, this.ws.onmessage = _0xa => {
      if (_0xa.data instanceof ArrayBuffer)
        for (let _0xb of this.binaryHandlers)
          _0xb(_0xa.data);
      else
        try {
          let _0xb = JSON.parse(_0xa.data);
          this.emit(_0xb.type, _0xb);
        } catch (_0xb) {
          console.error('[WS] Failed to parse message:', _0xb);
        }
    }, this.ws.onclose = _0xa => {
      console.log('[WS] Disconnected, reconnecting...', _0xa.code, _0xa.reason);
      let _0xb = this.connected;
      this.connected = !1, this.emit('close');
      let _0x1a = Date.now() - this.lastConnectionTime;
      !_0xb && _0x1a < 1000 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = _0xa => {
      console.error('[WS] Error:', _0xa);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout)
      return;
    let _0x3 = Math.min(3000 * Math.pow(2, this.consecutiveFailures), 30000);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let _0x4 = _0x8.api.getToken(),
        _0xa = _0x8.api.getTokenExpiry();
      (!_0x4 || _0xa < Date.now()) && await _0x8.api.showCaptchaModal();
      let _0xb = 30000,
        _0x1a = Date.now();
      for (; !_0x8.api.getToken() || _0x8.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - _0x1a > _0xb) {
          console.error('[WS] Reconnect captcha timeout');
          return;
        }
        await new Promise(_0x1b => setTimeout(_0x1b, 100));
      }
      this.connect();
    }, _0x3);
  }
  on(_0x3, _0x4) {
    this.handlers.has(_0x3) || this.handlers.set(_0x3, []), this.handlers.get(_0x3).push(_0x4);
  }
  off(_0x3, _0x4) {
    if (!this.handlers.has(_0x3))
      return;
    let _0xa = this.handlers.get(_0x3),
      _0xb = _0xa.indexOf(_0x4);
    _0xb !== -1 && _0xa.splice(_0xb, 1);
  }
  onBinary(_0x3) {
    this.binaryHandlers.push(_0x3);
  }
  emit(_0x3, _0x4) {
    if (this.handlers.has(_0x3))
      for (let _0xa of this.handlers.get(_0x3))
        _0xa(_0x4);
  }
  send(_0x3) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(_0x3) : typeof _0x3 == 'string' && this.messageQueue.push(_0x3);
  }
  sendJSON(_0x3) {
    this.send(JSON.stringify(_0x3));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
_0x8.ws = new _0x70();
var _0x71 = _0x8.ws;
var _0x72 = new Set([
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
  _0x73 = 100,
  _0x74 = 3,
  _0x75 = 5000,
  _0x76 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById('chat-container'), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector('#chat-header'), this.body = this.container.querySelector('#chat-body'), this.messagesEl = this.container.querySelector('#chat-messages'), this.input = this.container.querySelector('#chat-input'), this.sendBtn = this.container.querySelector('#chat-send'), this.toggleBtn = this.container.querySelector('#chat-toggle'), this.unreadEl = this.container.querySelector('#chat-unread'), this.header.addEventListener('click', () => this.toggle()), this.container.addEventListener('wheel', _0x3 => {
        _0x3.stopPropagation();
      }), this.messagesEl.addEventListener('click', _0x3 => {
        let _0x4 = _0x3.target.closest('.chat-coord-link');
        if (_0x4) {
          _0x3.preventDefault();
          let _0xa = parseInt(_0x4.dataset._0x2f),
            _0xb = parseInt(_0x4.dataset._0x55),
            _0x1b = 50 / 2;
          !isNaN(_0xa) && !isNaN(_0xb) && _0x8.camera && _0xa >= -_0x1b && _0xa <= _0x1b && _0xb >= -_0x1b && _0xb <= _0x1b && _0x8.camera.centerOn(_0xa * 250 + 250 / 2, _0xb * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let _0x3 = document.createElement('div');
      _0x3.id = 'chat-resize-left', _0x3.className = 'chat-resize-handle', this.container.appendChild(_0x3);
      let _0x4 = document.createElement('div');
      _0x4.id = 'chat-resize-top', _0x4.className = 'chat-resize-handle', this.container.appendChild(_0x4);
      let _0xa = document.createElement('div');
      _0xa.id = 'chat-resize-corner', _0xa.className = 'chat-resize-handle', this.container.appendChild(_0xa);
      let _0xb = null,
        _0x1a = 0,
        _0x1b = 0,
        _0x1f = 0,
        _0x1c = 0,
        _0x1d = (_0x1e, _0x29) => {
          this.isOpen && (_0xb = _0x29, _0x1a = _0x1e.clientX, _0x1b = _0x1e.clientY, _0x1f = this.container.offsetWidth, _0x1c = this.container.offsetHeight, document.body.style.userSelect = 'none', _0x29 === 'left' ? document.body.style.cursor = 'ew-resize' : _0x29 === 'top' ? document.body.style.cursor = 'ns-resize' : document.body.style.cursor = 'nwse-resize', _0x1e.preventDefault());
        };
      _0x3.addEventListener('mousedown', _0x1e => _0x1d(_0x1e, 'left')), _0x4.addEventListener('mousedown', _0x1e => _0x1d(_0x1e, 'top')), _0xa.addEventListener('mousedown', _0x1e => _0x1d(_0x1e, 'corner')), document.addEventListener('mousemove', _0x1e => {
        if (_0xb) {
          if (_0xb === 'left' || _0xb === 'corner') {
            let _0x29 = _0x1a - _0x1e.clientX,
              _0x2a = Math.min(Math.max(_0x1f + _0x29, 250), 800);
            this.container.style.width = _0x2a + 'px';
          }
          if (_0xb === 'top' || _0xb === 'corner') {
            let _0x29 = _0x1b - _0x1e.clientY,
              _0x2a = Math.min(Math.max(_0x1c + _0x29, 100), 700);
            this.container.style.height = _0x2a + 'px';
          }
        }
      }), document.addEventListener('mouseup', () => {
        _0xb && (_0xb = null, document.body.style.cursor = '', document.body.style.userSelect = '', this.saveSize());
      });
    }
    saveSize() {
      localStorage.setItem('chat-width', this.container.offsetWidth), localStorage.setItem('chat-height', this.container.offsetHeight);
    }
    restoreSize() {
      let _0x3 = localStorage.getItem('chat-width') ?? 525;
      if (_0x3) {
        let _0xa = parseInt(_0x3, 10);
        _0xa >= 250 && _0xa <= 800 && (this.container.style.width = _0xa + 'px');
      }
      let _0x4 = localStorage.getItem('chat-height') ?? 330;
      if (_0x4) {
        let _0xa = parseInt(_0x4, 10);
        _0xa >= 100 && _0xa <= 700 && (this.container.style.height = _0xa + 'px');
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
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener('click', _0x3 => {
        let _0x4 = _0x3.target.dataset.action;
        if (!(!_0x4 || !this.modMenuTarget)) {
          if (_0x4 === 'jump')
            this.jumpToUserTile(this.modMenuTarget.nick);
          else if (_0x4 === 'tell') {
            let _0xa = `/tell ${ this.modMenuTarget.nick } `;
            this.input.value = _0xa + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (_0x4 === 'reply') {
            let _0xa = `@${ this.modMenuTarget.nick } `;
            this.input.value = _0xa + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (_0x4 === 'clear')
            _0x8.ws.sendJSON({
              type: 'mod_action',
              action: 'clear_messages',
              target: this.modMenuTarget
            });
          else if (_0x4 === 'mute') {
            let _0xa = prompt('Mute duration (e.g. 10m, 1h, 1d):', '1d');
            _0xa && _0x8.ws.sendJSON({
              type: 'mod_action',
              action: 'mute',
              target: this.modMenuTarget,
              duration: _0xa
            });
          } else
            _0x4 === 'ban' && confirm(`Ban ${ this.modMenuTarget.nick }? This will also delete all their tiles.`) && _0x8.ws.sendJSON({
              type: 'mod_action',
              action: 'ban',
              target: this.modMenuTarget
            });
          this.hideModMenu();
        }
      }), document.addEventListener('click', _0x3 => {
        !this.modMenu.contains(_0x3.target) && !this.userMenu.contains(_0x3.target) && !_0x3.target.classList.contains('chat-nick') && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement('div'), this.userMenu.id = 'chat-user-menu', this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener('click', _0x3 => {
        let _0x4 = _0x3.target.dataset.action;
        if (!(!_0x4 || !this.userMenuTarget)) {
          if (_0x4 === 'jump')
            this.jumpToUserTile(this.userMenuTarget);
          else if (_0x4 === 'tell') {
            let _0xa = `/tell ${ this.userMenuTarget } `;
            this.input.value = _0xa + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (_0x4 === 'reply') {
            let _0xa = `@${ this.userMenuTarget } `;
            this.input.value = _0xa + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(_0x3, _0x4, _0xa) {
      this.userMenuTarget = _0x3, this.userMenu.hidden = !1;
      let _0xb = this.userMenu.getBoundingClientRect(),
        _0x1a = window.innerHeight,
        _0x1b = window.innerWidth;
      _0xa + _0xb.height > _0x1a && (_0xa = _0x1a - _0xb.height - 5), _0x4 + _0xb.width > _0x1b && (_0x4 = _0x1b - _0xb.width - 5), this.userMenu.style.left = _0x4 + 'px', this.userMenu.style.top = _0xa + 'px';
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(_0x3) {
      if (!_0x8.plot?.tileCache)
        return null;
      for (let _0x4 in _0x8.plot.tileCache)
        for (let _0xa in _0x8.plot.tileCache[_0x4]) {
          let _0xb = _0x8.plot.tileCache[_0x4][_0xa];
          if ((typeof _0xb == 'string' ? _0xb : _0xb?.domain ?? null) === _0x3)
            return {
              _0x2f: parseInt(_0x4),
              _0x55: parseInt(_0xa)
            };
        }
      return null;
    }
    findTileByDomain(_0x3) {
      if (!_0x8.plot?.tileCache)
        return null;
      for (let _0x4 in _0x8.plot.tileCache)
        for (let _0xa in _0x8.plot.tileCache[_0x4]) {
          let _0xb = _0x8.plot.tileCache[_0x4][_0xa];
          if ((typeof _0xb == 'string' ? _0xb : _0xb?.domain ?? null) === _0x3)
            return {
              _0x2f: parseInt(_0x4),
              _0x55: parseInt(_0xa)
            };
        }
      return null;
    }
    jumpToUserTile(_0x3) {
      if (!_0x8.camera)
        return;
      let _0x4 = this.findUserTile(_0x3);
      _0x4 && _0x8.camera.centerOn(_0x4._0x2f * 250 + 250 / 2, _0x4._0x55 * 250 + 250 / 2);
    }
    jumpToDomain(_0x3) {
      if (!_0x8.camera)
        return !1;
      let _0x4 = this.findTileByDomain(_0x3);
      return _0x4 ? (_0x8.camera.centerOn(_0x4._0x2f * 250 + 250 / 2, _0x4._0x55 * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(_0x3, _0x4, _0xa) {
      if (_0x3.admin || _0x3.discord)
        return;
      this.modMenuTarget = _0x3, this.modMenu.querySelector('#mod-menu-user-id').textContent = _0x3.id || '-', this.modMenu.querySelector('#mod-menu-ip').textContent = _0x3.ip || '-', this.modMenu.hidden = !1;
      let _0xb = this.modMenu.getBoundingClientRect(),
        _0x1a = window.innerHeight,
        _0x1b = window.innerWidth;
      _0xa + _0xb.height > _0x1a && (_0xa = _0x1a - _0xb.height - 5), _0x4 + _0xb.width > _0x1b && (_0x4 = _0x1b - _0xb.width - 5), this.modMenu.style.left = _0x4 + 'px', this.modMenu.style.top = _0xa + 'px';
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let _0x3 = _0x8.ws;
      _0x3.on('chat_history', _0x4 => {
        this.messages = _0x4.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage('Welcome to the chat! The rules are as follows:'), this.showSystemMessage('1. There is zero tolerance for NSFW conversations. Do not discuss it in chat.'), this.showSystemMessage('2. Do not spam the chat.'), this.showSystemMessage('3. Do not troll, be edgy, annoying, or disruptive. Be kind to others.'), this.showSystemMessage('4. Keep conversations in English.'), this.showSystemMessage('Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands.'), this.showedRules = !0);
      }), _0x3.on('message', _0x4 => {
        this.addMessage(_0x4);
      }), _0x3.on('system_message', _0x4 => {
        this.showSystemMessage(_0x4.message);
      }), _0x3.on('chat_cleared', () => {
        this.messages = [], this.messagesEl.innerHTML = '', this.showSystemMessage('Chat has been cleared');
      }), _0x3.on('clear_user_messages', _0x4 => {
        this.messages = this.messages.filter(_0xa => _0xa.nick !== _0x4.nick), this.renderMessages(), (_0x8.user?.admin || _0x8.user?.moderator) && this.showSystemMessage(`Messages from ${ _0x4.nick } have been cleared`);
      }), _0x3.on('user_muted', _0x4 => {
        this.showSystemMessage(`${ _0x4.nick } has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener('keydown', _0x3 => {
        _0x3.stopPropagation(), _0x3.key === 'Enter' && !_0x3.shiftKey && (_0x3.preventDefault(), this.sendMessage());
      }), this.input.addEventListener('keyup', _0x3 => {
        _0x3.stopPropagation();
      }), this.input.addEventListener('keypress', _0x3 => {
        _0x3.stopPropagation();
      }), this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? '\u2212' : '+', this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = 'auto';
    }
    addMessage(_0x3) {
      _0x3.time = Date.now();
      let _0x4 = _0x8.cursors?.currentNick,
        _0xa = _0x8.user?.sites?.map(_0xb => _0xb.domain);
      if (_0x4 && _0x3.message) {
        let _0xb = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          _0x1a = _0x3.message.matchAll(_0xb);
        for (let _0x1b of _0x1a)
          if (_0xa.includes(_0x1b[1])) {
            _0x3.isPinged = !0;
            try {
              let _0x1f = new Audio('/s/ping.mp3');
              _0x1f.volume = 0.5, _0x1f.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(_0x3), this.messages.length > _0x73 && this.messages.shift(), this.appendMessageEl(_0x3), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(_0x3) {
      return _0x3.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
    escapeURL(_0x3) {
      return _0x3.replaceAll('"', '%22').replaceAll('\'', '%27').replaceAll('`', '%60');
    }
    escapeURLDisplay(_0x3) {
      return _0x3.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    parseMessage(_0x3) {
      let _0x4 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        _0xa = [];
      _0x3 = _0x3.replace(_0x4, (_0x1e, _0x29) => (_0xa.push(_0x29), `<span class="chat-ping">@${ this.escapeHTML(_0x29) }</span>`));
      let _0xb = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        _0x1a = 250,
        _0x1f = 50 / 2;
      _0x3 = _0x3.replace(_0xb, (_0x1e, _0x29, _0x2a, _0x2b) => {
        if (_0x29) {
          let _0x2c = _0x29.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (_0x2c) {
            let _0x2d = parseInt(_0x2c[1]),
              _0x2e = parseInt(_0x2c[2]),
              _0x32 = Math.floor(_0x2d / _0x1a),
              _0x33 = Math.floor(_0x2e / _0x1a);
            if (_0x32 >= -_0x1f && _0x32 <= _0x1f && _0x33 >= -_0x1f && _0x33 <= _0x1f)
              return `<a href="#" class="chat-coord-link" data-x="${ _0x32 }" data-y="${ _0x33 }">${ _0x32 }, ${ _0x33 }</a>`;
          }
          return `<a href="${ this.escapeURL(_0x29) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(this.escapeURL(_0x29)) }</a>`;
        }
        if (_0x2a && _0x72.has(_0x2b.toLowerCase()) && !_0xa.includes(_0x2a)) {
          let _0x2c = 'https://' + _0x2a;
          return `<a href="${ this.escapeURL(_0x2c) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(_0x2a) }</a>`;
        }
        return _0x1e;
      });
      let _0x1c = /(-?\d+),\s*(-?\d+)/g;
      _0x3 = _0x3.replace(_0x1c, (_0x1e, _0x29, _0x2a) => {
        let _0x2b = parseInt(_0x29),
          _0x2c = parseInt(_0x2a);
        return _0x2b >= -_0x1f && _0x2b <= _0x1f && _0x2c >= -_0x1f && _0x2c <= _0x1f ? `<a href="#" class="chat-coord-link" data-x="${ _0x29 }" data-y="${ _0x2a }">${ _0x1e }</a>` : _0x1e;
      });
      let _0x1d = (_0x1e, _0x29, _0x2a, _0x2b) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${ _0x2b }.${ _0x29 ? 'gif' : 'png' }?v=1" alt=":${ this.escapeHTML(_0x2a) }:" title=":${ this.escapeHTML(_0x2a) }:" width="20">`;
      return _0x3 = _0x3.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, _0x1d), _0x3 = _0x3.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, _0x1d), _0x3 = _0x3.replace(/\*\*([^*]+)\*\*/g, (_0x1e, _0x29) => `<strong>${ _0x29 }</strong>`), _0x3 = _0x3.replace(/\*([^*]+)\*/g, (_0x1e, _0x29) => `<em>${ _0x29 }</em>`), _0x3 = _0x3.replace(/~~([^~]+)~~/g, (_0x1e, _0x29) => `<s>${ _0x29 }</s>`), _0x3 = _0x3.replace(/__([^_]+)__/g, (_0x1e, _0x29) => `<u>${ _0x29 }</u>`), _0x3 = _0x3.replace(/\|\|([^|]+)\|\|/g, (_0x1e, _0x29) => `<span class="chat-spoiler">${ _0x29 }</span>`), _0x3;
    }
    appendMessageEl(_0x3) {
      let _0x4 = document.createElement('div');
      _0x4.className = 'chat-message', _0x3.admin && _0x4.classList.add('chat-admin'), _0x3.mod && _0x4.classList.add('chat-mod'), _0x3.discord && _0x4.classList.add('chat-discord'), _0x3.isPinged && _0x4.classList.add('chat-pinged');
      let _0xa = document.createElement('span');
      _0xa.className = 'chat-nick', _0xa.dataset.nick = _0x3.nick;
      let _0xb = _0x8.user?.admin || _0x8.user?.moderator;
      _0x3.discord || (_0xa.classList.add('chat-nick-clickable'), _0xa.addEventListener('click', _0x1e => {
        _0x1e.stopPropagation(), _0xb && !_0x3.admin ? this.showModMenu(_0x3, _0x1e.clientX, _0x1e.clientY) : this.findUserTile(_0x3.nick) && this.showUserMenu(_0x3.nick, _0x1e.clientX, _0x1e.clientY);
      })), _0x3.admin ? _0xa.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(_0x3.nick) + ': ' : _0x3.mod ? _0xa.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(_0x3.nick) + ': ' : _0x3.discord ? _0xa.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(_0x3.nick) + ': ' : _0xa.textContent = _0x3.nick + ': ';
      let _0x1a = document.createElement('span');
      _0x1a.className = 'chat-text', _0x3.admin || _0x3.mod ? _0x1a.innerHTML = this.parseMessage(_0x3.message).replace(/\n/g, '<br>') : _0x1a.innerHTML = this.parseMessage(this.escapeHTML(_0x3.message)).replace(/\n/g, '<br>');
      let _0x1b = _0x1a.querySelectorAll('.emoji');
      for (let _0x1e of _0x1b)
        _0x1e.addEventListener('error', _0x29 => {
          _0x29.target.remove();
        });
      let _0x1f = _0x1a.querySelectorAll('.chat-spoiler');
      for (let _0x1e of _0x1f)
        _0x1e.addEventListener('click', _0x29 => {
          _0x29.target.closest('.chat-spoiler').classList.toggle('chat-spoiler-revealed');
        });
      let _0x1c = document.createElement('span');
      _0x1c.className = 'chat-time';
      let _0x1d = new Date(_0x3.time || Date.now());
      for (_0x1c.textContent = _0x1d.getHours().toString().padStart(2, '0') + ':' + _0x1d.getMinutes().toString().padStart(2, '0'), _0x4.appendChild(_0xa), _0x4.appendChild(_0x1a), _0x4.appendChild(_0x1c), this.messagesEl.appendChild(_0x4); this.messagesEl.children.length > _0x73;)
        this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = '';
      for (let _0x3 of this.messages)
        this.appendMessageEl(_0x3);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(_0x3 = !1) {
      let _0x4 = this.messagesEl;
      (_0x4.scrollHeight - _0x4.scrollTop - _0x4.clientHeight <= 120 || _0x3) && (_0x4.scrollTop = _0x4.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!_0x8.user) {
        this.showSystemMessage('Please login to chat');
        return;
      }
      let _0x3 = this.input.value.trim();
      if (!_0x3 || _0x3.length > 500)
        return;
      let _0x4 = _0x3.split(`
`);
      if (_0x4.length > 5 && (_0x3 = _0x4.slice(0, 5).join(`
`)), _0x3 === '/help') {
        this.showSystemMessage('Available commands:'), this.showSystemMessage('/jump [domain] - Jump to a tile by domain'), this.showSystemMessage('/jump X Y - Jump to coordinates X, Y'), this.showSystemMessage('/tell [domain] [msg] - Send a message to a specific domain'), this.input.value = '';
        return;
      }
      if (_0x3.startsWith('/jump ') || _0x3.startsWith('/tp ')) {
        let _0xa = _0x3.split(' ').slice(1).join(' ');
        if (_0xa) {
          let _0xb = _0xa.match(/^(-?\d+)\s+(-?\d+)$/);
          if (_0xb) {
            let _0x1a = parseInt(_0xb[1]),
              _0x1b = parseInt(_0xb[2]),
              _0x1c = 50 / 2;
            !isNaN(_0x1a) && !isNaN(_0x1b) && _0x8.camera && _0x1a >= -_0x1c && _0x1a <= _0x1c && _0x1b >= -_0x1c && _0x1b <= _0x1c ? (_0x8.camera.centerOn(_0x1a * 250 + 250 / 2, _0x1b * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${ _0x1a }, ${ _0x1b }`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${ _0x1c } and ${ _0x1c }`);
          } else {
            let _0x1a = _0xa;
            this.jumpToDomain(_0x1a) ? this.showSystemMessage(`Jumped to ${ _0x1a }`) : this.showSystemMessage(`Tile with domain "${ _0x1a }" not found`);
          }
        } else
          this.showSystemMessage('Usage: /jump [domain] or /jump X Y');
        this.input.value = '';
        return;
      }
      if (!_0x8.cursors?.currentNick) {
        this.showSystemMessage('Select a site to chat');
        return;
      }
      if (!_0x3.startsWith('/')) {
        let _0xa = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(_0xb => _0xa - _0xb < _0x75), this.messageTimestamps.length >= _0x74)
          return;
        this.messageTimestamps.push(_0xa);
      }
      _0x8.ws.sendJSON({
        type: 'message',
        value: _0x3
      }), this.input.value = '';
    }
    showSystemMessage(_0x3) {
      let _0x4 = document.createElement('div');
      _0x4.className = 'chat-message chat-system', _0x4.innerHTML = this.parseMessage(this.escapeHTML(_0x3)).replace(/\n/g, '<br>'), this.messagesEl.appendChild(_0x4), this.scrollToBottom();
    }
  };
_0x8.chat = new _0x76();
var _0x77 = _0x8.chat;
var _0x78 = document.getElementById('loading-text'),
  _0x79 = 0,
  _0x7a = setInterval(() => {
    _0x78.innerText = `Loading${ '.'.repeat(_0x79++ % 4) }`;
  }, 200),
  _0x7b = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById('plot'), this.worldSize = _0x24, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let _0x3 in this.tiles) {
          let _0x4 = this.tiles[_0x3];
          !_0x4.rendered && Date.now() - _0x4.lastRender > 30000 && delete this.tiles[_0x3];
        }
      }, 10000), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1000 * 60), setInterval(() => this.fetchTiles(), 1000 * 60), this.editorChannel = new BroadcastChannel('editor'), this.editorChannel.onmessage = _0x3 => {
        if (_0x3.data.type === 'saved') {
          let {
            path: _0x4,
            site: _0xa
          } = _0x3.data;
          this.refreshTile(_0xa, _0x4);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      _0x8.ws && (_0x8.ws.on('refresh', _0x3 => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          let _0x4 = null;
          for (let _0xa in this.tileCache) {
            for (let _0xb in this.tileCache[_0xa]) {
              let _0x1a = this.tileCache[_0xa][_0xb];
              if ((typeof _0x1a == 'string' ? null : _0x1a?.domain ?? null) === _0x3.domain) {
                _0x4 = typeof _0x1a == 'object' && _0x1a.updated_at ? _0x1a.updated_at : Math.floor(Date.now() / 1000);
                break;
              }
            }
            if (_0x4 !== null)
              break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: 'tile-refresh',
            domain: _0x3.domain,
            lastUpdate: _0x4 || Math.floor(Date.now() / 1000)
          });
        }
        setTimeout(() => {
          this.refreshTile(_0x3.domain, _0x3.path);
        }, 500);
      }), _0x8.ws.on('claim', _0x3 => {
        this.tileCache[_0x3._0x2f] = this.tileCache[_0x3._0x2f] || {}, this.tileCache[_0x3._0x2f][_0x3._0x55] = typeof _0x3.domain == 'string' ? {
          domain: _0x3.domain,
          updated_at: Math.floor(Date.now() / 1000)
        } : _0x3.domain;
        let _0x4 = this.tiles[`${ _0x3._0x2f },${ _0x3._0x55 }`];
        if (_0x4) {
          let _0xa = typeof this.tileCache[_0x3._0x2f][_0x3._0x55] == 'string' ? this.tileCache[_0x3._0x2f][_0x3._0x55] : this.tileCache[_0x3._0x2f][_0x3._0x55].domain;
          _0x4.setDomain(_0xa);
        }
      }), _0x8.ws.on('free', _0x3 => {
        this.tileCache[_0x3._0x2f] && delete this.tileCache[_0x3._0x2f][_0x3._0x55];
        let _0x4 = this.tiles[`${ _0x3._0x2f },${ _0x3._0x55 }`];
        _0x4 && _0x4.setFree();
      }), _0x8.ws.on('lock', _0x3 => {
        _0x3.locked ? this.lockCache[_0x3._0x2f + ',' + _0x3._0x55] = !0 : delete this.lockCache[_0x3._0x2f + ',' + _0x3._0x55];
        let _0x4 = this.tiles[`${ _0x3._0x2f },${ _0x3._0x55 }`];
        _0x4 && _0x4.setLocked(_0x3.locked);
      }), _0x8.ws.on('user_count', _0x3 => {
        let _0x4 = document.getElementById('user-count');
        _0x4 && (_0x4.textContent = `${ _0x3.count } online`);
      }), _0x8.ws.on('clan_invite', _0x3 => {
        _0x3.invite && (_0x8.ui.pendingClanInvites.find(_0xa => _0xa.id === _0x3.invite.id) || (_0x8.ui.pendingClanInvites.push({
          id: _0x3.invite.id,
          clan_id: _0x3.invite.clan_id,
          clan_name: _0x3.invite.clan_name
        }), _0x8.ui.updateClanIndicator()));
      }));
    }
    refreshTile(_0x3, _0x4) {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let _0xa = null;
        for (let _0xb in this.tileCache) {
          for (let _0x1a in this.tileCache[_0xb]) {
            let _0x1b = this.tileCache[_0xb][_0x1a];
            if ((typeof _0x1b == 'string' ? null : _0x1b?.domain ?? null) === _0x3) {
              _0xa = typeof _0x1b == 'object' && _0x1b.updated_at ? _0x1b.updated_at : Math.floor(Date.now() / 1000);
              break;
            }
          }
          if (_0xa !== null)
            break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: 'tile-refresh',
          domain: _0x3,
          lastUpdate: _0xa || Math.floor(Date.now() / 1000)
        });
      }
      for (let _0xa in this.tiles) {
        let _0xb = this.tiles[_0xa];
        if (_0xb.domain === _0x3 && _0xb.path === _0x4) {
          if (_0xb.active)
            break;
          _0xb.fetchContent(_0xb.path, !0);
          break;
        }
      }
    }
    addTile(_0x3) {
      this.tiles[`${ _0x3._0x2f },${ _0x3._0x55 }`] = _0x3;
    }
    getTile(_0x3, _0x4) {
      if (_0x3 > this.worldSize / 2 || _0x3 < -this.worldSize / 2 || _0x4 > this.worldSize / 2 || _0x4 < -this.worldSize / 2)
        return null;
      if (!this.tiles[`${ _0x3 },${ _0x4 }`]) {
        let _0xa = this.tileCache?.[_0x3]?.[_0x4],
          _0xb = typeof _0xa == 'string' ? _0xa : _0xa?.domain ?? null;
        this.tiles[`${ _0x3 },${ _0x4 }`] = new _0x64({
          _0x2f: _0x3,
          _0x55: _0x4,
          domain: _0xb ?? null
        });
      }
      return this.tiles[`${ _0x3 },${ _0x4 }`];
    }
    removeTile(_0x3) {
      _0x3.unrender(), delete this.tiles[`${ _0x3._0x2f },${ _0x3._0x55 }`];
    }
    clear() {
      Object.values(this.tiles).forEach(_0x3 => _0x3.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await _0x8.api.makeRequest('/api/tiles').then(_0x3 => _0x3.json())).tiles, 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let _0x3 = {};
        for (let _0x4 in this.tileCache)
          for (let _0xa in this.tileCache[_0x4]) {
            let _0xb = this.tileCache[_0x4][_0xa];
            typeof _0xb == 'object' && _0xb.domain && _0xb.updated_at && (_0x3[_0xb.domain] = _0xb.updated_at.toString());
          }
        Object.keys(_0x3).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: 'tile-updates',
          updates: _0x3
        });
      }
      for (let _0x3 in this.tileCache)
        for (let _0x4 in this.tileCache[_0x3]) {
          let _0xa = this.tileCache[_0x3][_0x4],
            _0xb = typeof _0xa == 'string' ? _0xa : _0xa?.domain ?? null,
            _0x1a = this.tiles[`${ _0x3 },${ _0x4 }`];
          _0x1a && _0x1a.domain !== _0xb && _0x1a.setDomain(_0xb);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let _0x3 = document.getElementById('loading'),
          _0x4 = document.getElementById('app');
        _0x3.hidden = !0, _0x4.hidden = !1, clearInterval(_0x7a);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await _0x8.api.makeRequest('/api/locks').then(_0x3 => _0x3.json())).locks;
      for (let _0x3 in this.lockCache) {
        let _0x4 = this.tiles[_0x3];
        _0x4 && _0x4.element && _0x4.setLocked(!0);
      }
    }
  };
_0x8.plot = new _0x7b();
var _0x7c = document.getElementById('plot'),
  _0x7d = class {
    constructor() {
      if (this._0x2f = 0, this._0x55 = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith('#') && location.hash.includes(','))
        try {
          let [_0x29, _0x2a] = location.hash.slice(1).split(',');
          this.centerOn(parseInt(_0x29), parseInt(_0x2a)), location.hash = '';
        } catch {}
      let _0x3 = 0,
        _0x4 = 0;
      setInterval(() => {
        let _0x29 = this._0x2f + this.width / 2,
          _0x2a = this._0x55 + this.height / 2;
        (_0x29 != _0x3 || _0x2a != _0x4) && (_0x3 = _0x29, _0x4 = _0x2a);
      }, 1000), window.addEventListener('resize', () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let _0xa = 0;
      this.zoomEnabled = !0, this.wheelHandler = _0x29 => {
        if (!this.zoomEnabled || _0x29.target.closest('.tile.active'))
          return;
        _0x29.preventDefault();
        let _0x2a = _0x29.deltaY;
        if (Math.abs(_0x2a) > 1 && Date.now() - _0xa > 100) {
          let _0x2c = _0x23.indexOf(this.zoom) + (_0x2a > 0 ? -1 : 1);
          if (_0x2c >= 1 && _0x2c < _0x23.length) {
            let _0x2d = _0x8.mouse?._0x2f || this.width / 2,
              _0x2e = _0x8.mouse?._0x55 || this.height / 2;
            this.zoomTo(_0x2d, _0x2e, _0x23[_0x2c]), _0xa = Date.now();
          }
        }
      }, window.addEventListener('wheel', this.wheelHandler, {
        passive: !1
      });
      let _0xb = 0,
        _0x1a = {
          _0x2f: 0,
          _0x55: 0
        },
        _0x1b = _0x29 => {
          let _0x2a = _0x29[0].clientX - _0x29[1].clientX,
            _0x2b = _0x29[0].clientY - _0x29[1].clientY;
          return Math.sqrt(_0x2a * _0x2a + _0x2b * _0x2b);
        },
        _0x1f = _0x29 => ({
          _0x2f: (_0x29[0].clientX + _0x29[1].clientX) / 2,
          _0x55: (_0x29[0].clientY + _0x29[1].clientY) / 2
        });
      document.addEventListener('touchstart', _0x29 => {
        _0x29.touches.length === 2 && (_0xb = _0x1b(_0x29.touches), _0x1a = _0x1f(_0x29.touches));
      }, {
        passive: !0
      }), document.addEventListener('touchmove', _0x29 => {
        if (this.zoomEnabled && _0x29.touches.length === 2) {
          if (_0x29.target.closest('.tile.active'))
            return;
          let _0x2a = _0x1b(_0x29.touches),
            _0x2b = _0x1f(_0x29.touches);
          if (_0xb > 0) {
            let _0x2c = _0x2a / _0xb,
              _0x2d = _0x23.indexOf(this.zoom);
            _0x2c > 1.1 && _0x2d < _0x23.length - 1 ? (this.zoomTo(_0x2b._0x2f, _0x2b._0x55, _0x23[_0x2d + 1]), _0xb = _0x2a) : _0x2c < 0.9 && _0x2d > 1 && (this.zoomTo(_0x2b._0x2f, _0x2b._0x55, _0x23[_0x2d - 1]), _0xb = _0x2a);
          }
          _0x1a = _0x2b, _0x29.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener('touchend', _0x29 => {
        _0x29.touches.length < 2 && (_0xb = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let _0x1c = _0x29 => {
          _0x29.key in this.keysPressed && (_0x29.preventDefault(), this.keysPressed[_0x29.key] = !0);
        },
        _0x1d = _0x29 => {
          _0x29.key in this.keysPressed && (_0x29.preventDefault(), this.keysPressed[_0x29.key] = !1);
        };
      window.addEventListener('keydown', _0x1c), window.addEventListener('keyup', _0x1d);
      let _0x1e = () => {
        if (!_0x8.plot?.activeTile) {
          let _0x29 = 0,
            _0x2a = 0;
          this.keysPressed.ArrowLeft && (_0x29 -= this.moveSpeed), this.keysPressed.ArrowRight && (_0x29 += this.moveSpeed), this.keysPressed.ArrowUp && (_0x2a -= this.moveSpeed), this.keysPressed.ArrowDown && (_0x2a += this.moveSpeed), (_0x29 !== 0 || _0x2a !== 0) && this.move(this._0x2f + _0x29, this._0x55 + _0x2a);
        }
        requestAnimationFrame(_0x1e);
      };
      _0x1e();
    }
    move(_0x3, _0x4) {
      this._0x2f = Math.round(_0x3), this._0x55 = Math.round(_0x4), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      _0x7c.style.transform = `translate3d(${ -this._0x2f }px, ${ -this._0x55 }px, 0) scale(${ this.zoom })`;
    }
    zoomTo(_0x3, _0x4, _0xa) {
      let _0xb = (this._0x2f + _0x3) / this.zoom,
        _0x1a = (this._0x55 + _0x4) / this.zoom;
      this.zoom = _0xa, this._0x2f = _0xb * this.zoom - _0x3, this._0x55 = _0x1a * this.zoom - _0x4, _0x8.ui.zoomSlider.value = this.zoom, this.move(this._0x2f, this._0x55);
    }
    centerOn(_0x3, _0x4) {
        let _0xa = _0x3 * this.zoom - this.width / 2,
          _0xb = _0x4 * this.zoom - this.height / 2;
        this.move(_0xa, _0xb);
      }
      * getTilesInView() {
        let _0x3 = _0x64.toTilePosition((this._0x2f - 250 * this.zoom) / this.zoom, (this._0x55 - 250 * this.zoom) / this.zoom),
          _0x4 = _0x64.toTilePosition((this._0x2f + 250 * this.zoom + this.width) / this.zoom, (this._0x55 + 250 * this.zoom + this.height) / this.zoom);
        for (let _0xa = _0x3._0x2f; _0xa < _0x4._0x2f; _0xa++)
          for (let _0xb = _0x3._0x55; _0xb < _0x4._0x55; _0xb++) {
            let _0x1a = _0x8.plot.getTile(_0xa, _0xb);
            _0x1a && (yield _0x1a);
          }
      }
      * getTilesInViewWithBuffer(_0x3 = 500) {
        let _0x4 = _0x64.toTilePosition((this._0x2f - 250 * this.zoom - _0x3) / this.zoom, (this._0x55 - 250 * this.zoom - _0x3) / this.zoom),
          _0xa = _0x64.toTilePosition((this._0x2f + 250 * this.zoom + this.width + _0x3) / this.zoom, (this._0x55 + 250 * this.zoom + this.height + _0x3) / this.zoom);
        for (let _0xb = _0x4._0x2f; _0xb < _0xa._0x2f; _0xb++)
          for (let _0x1a = _0x4._0x55; _0x1a < _0xa._0x55; _0x1a++) {
            let _0x1b = _0x8.plot.getTile(_0xb, _0x1a);
            _0x1b && (yield _0x1b);
          }
      }
    isTileWithinBuffer(_0x3, _0x4 = 500) {
      let _0xa = _0x3._0x2f * 250,
        _0xb = _0x3._0x55 * 250,
        _0x1a = 250,
        _0x1b = this._0x2f / this.zoom,
        _0x1f = (this._0x2f + this.width) / this.zoom,
        _0x1c = this._0x55 / this.zoom,
        _0x1d = (this._0x55 + this.height) / this.zoom,
        _0x1e = _0xa + _0x1a,
        _0x29 = _0xb + _0x1a,
        _0x2a = _0x4 / this.zoom,
        _0x2b = 0;
      _0x1e < _0x1b ? _0x2b = _0x1b - _0x1e : _0xa > _0x1f && (_0x2b = _0xa - _0x1f);
      let _0x2c = 0;
      return _0x29 < _0x1c ? _0x2c = _0x1c - _0x29 : _0xb > _0x1d && (_0x2c = _0xb - _0x1d), Math.sqrt(_0x2b * _0x2b + _0x2c * _0x2c) <= _0x2a;
    }
    renderTilesInView() {
      let _0x3 = new Set(),
        _0x4 = 260;
      for (let _0xa of this.getTilesInViewWithBuffer(_0x4))
        _0xa.render(), _0x3.add(_0xa);
      if (this.renderedTiles)
        for (let _0xa of this.renderedTiles)
          _0x3.has(_0xa) || (this.isTileWithinBuffer(_0xa, _0x4) ? _0x3.add(_0xa) : _0xa.unrender());
      this.renderedTiles = _0x3;
    }
    setZoomEnabled(_0x3) {
      this.zoomEnabled = _0x3;
    }
  };
_0x8.camera = new _0x7d();
var _0x7e = class {
  constructor() {
    this._0x2f = 0, this._0x55 = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let _0x3 = 0,
      _0x4 = 0,
      _0xa = 0,
      _0xb = 0,
      _0x1a = 0,
      _0x1b = (_0x1d, _0x1e, _0x29) => {
        if (!_0x29.closest('#plot') || _0x29.closest('.tile-info, .tile-admin-panel, .tile-vote-menu'))
          return !1;
        let _0x2a = _0x8.plot.getTile(this.tileX, this.tileY);
        return _0x8.plot.activeTile && _0x8.plot.activeTile.id === _0x2a.id ? !1 : (this.down = !0, _0xa = _0x1d, _0xb = _0x1e, _0x3 = _0x8.camera._0x2f, _0x4 = _0x8.camera._0x55, _0x1a = Date.now(), !0);
      },
      _0x1f = () => {
        if (!this.down)
          return;
        this.down = !1;
        let _0x1d = Math.abs(this._0x2f - _0xa),
          _0x1e = Math.abs(this._0x55 - _0xb);
        Date.now() - _0x1a < 400 && _0x1d < 10 && _0x1e < 10 && _0x8.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      _0x1c = (_0x1d, _0x1e) => {
        this._0x2f = _0x1d, this._0x55 = _0x1e;
        let _0x29 = _0x8.camera;
        this.worldX = (_0x29._0x2f + this._0x2f) / _0x29.zoom, this.worldY = (_0x29._0x55 + this._0x55) / _0x29.zoom;
        let _0x2a = _0x64.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = _0x2a._0x2f, this.tileY = _0x2a._0x55, _0x8.ui.coords.textContent = `${ this.tileX }, ${ this.tileY }`, document.documentElement.style.setProperty('--coords-width', _0x8.ui.coords.offsetWidth + 'px'), this.down) {
          let _0x2b = this._0x2f - _0xa,
            _0x2c = this._0x55 - _0xb;
          _0x29.move(_0x3 - _0x2b, _0x4 - _0x2c);
        }
      };
    document.addEventListener('mousedown', _0x1d => {
      _0x1b(_0x1d.clientX, _0x1d.clientY, _0x1d.target) && _0x1d.preventDefault();
    }), document.addEventListener('mouseup', _0x1d => {
      _0x1f();
    }), document.addEventListener('mousemove', _0x1d => {
      _0x1c(_0x1d.clientX, _0x1d.clientY);
    }), document.addEventListener('touchstart', _0x1d => {
      if (_0x1d.touches.length === 1) {
        let _0x1e = _0x1d.touches[0];
        _0x1b(_0x1e.clientX, _0x1e.clientY, _0x1e.target);
      }
    }, {
      passive: !0
    }), document.addEventListener('touchend', _0x1d => {
      _0x1f();
    }), document.addEventListener('touchcancel', _0x1d => {
      this.down = !1;
    }), document.addEventListener('touchmove', _0x1d => {
      if (_0x1d.touches.length === 1) {
        let _0x1e = _0x1d.touches[0];
        _0x1c(_0x1e.clientX, _0x1e.clientY), this.down && _0x1e.target.closest('#plot') && !_0x1e.target.closest('.tile.active') && _0x1d.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
_0x8.mouse = new _0x7e();
var _0x7f = document.getElementById('plot'),
  _0x80 = document.getElementById('dashboard-modal'),
  _0x81 = '/s/img/cursor.png',
  _0x82 = 150,
  _0x83 = 50,
  _0x84 = 100,
  _0x85 = 100,
  _0x86 = 150,
  _0x87 = 500,
  _0x88 = 0.6,
  _0x89 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let _0x3 = _0x8.ws;
      _0x3.on('open', () => {
        this.sendNickIfSelected();
      }), _0x3.on('close', () => {
        this.clearAllCursors();
      }), _0x3.on('cursors', _0x4 => {
        for (let _0xa of _0x4.cursors)
          this.addCursor(_0xa.id, _0xa.nick, _0xa._0x2f, _0xa._0x55);
      }), _0x3.on('join', _0x4 => {
        this.addCursor(_0x4.id, _0x4.nick, 0, 0);
      }), _0x3.on('leave', _0x4 => {
        this.removeCursor(_0x4.id);
      }), _0x3.onBinary(_0x4 => {
        let _0xa = new Int32Array(_0x4);
        if (_0xa.length >= 3) {
          let _0xb = _0xa[0],
            _0x1a = _0xa[1],
            _0x1b = _0xa[2];
          this.updateCursorPosition(_0xb, _0x1a, _0x1b);
        }
      });
    }
    addCursor(_0x3, _0x4, _0xa, _0xb) {
      if (_0x4 === this.currentNick)
        return;
      if (this.cursors.has(_0x3)) {
        this.updateCursorPosition(_0x3, _0xa, _0xb);
        return;
      }
      this.cursors.set(_0x3, {
        id: _0x3,
        nick: _0x4,
        _0x2f: _0xa,
        _0x55: _0xb,
        element: null
      }), this.updateElementPosition(_0x3, _0xa, _0xb);
      let _0x1a = this.cursors.get(_0x3);
      _0x1a.element && (_0x1a.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(_0x3) {
      let _0x4 = this.cursors.get(_0x3);
      _0x4 && (_0x4.element && _0x4.element.parentNode && _0x4.element.remove(), this.cursors.delete(_0x3));
    }
    updateCursorPosition(_0x3, _0x4, _0xa) {
      let _0xb = this.cursors.get(_0x3);
      _0xb && (_0xb._0x2f = _0x4, _0xb._0x55 = _0xa, this.updateElementPosition(_0x3, _0x4, _0xa));
    }
    isCursorOnScreen(_0x3, _0x4) {
      let _0xa = _0x8.camera;
      if (!_0xa)
        return !0;
      let _0xb = _0xa._0x2f / _0xa.zoom,
        _0x1a = (_0xa._0x2f + _0xa.width) / _0xa.zoom,
        _0x1b = _0xa._0x55 / _0xa.zoom,
        _0x1f = (_0xa._0x55 + _0xa.height) / _0xa.zoom;
      return _0x3 >= _0xb && _0x3 <= _0x1a && _0x4 >= _0x1b && _0x4 <= _0x1f;
    }
    updateElementPosition(_0x3, _0x4, _0xa) {
      let _0xb = this.cursors.get(_0x3);
      if (!_0xb)
        return;
      let _0x1a = this.isCursorOnScreen(_0x4, _0xa);
      if (_0x4 === 0 && _0xa === 0 || !_0x1a)
        _0xb.element && _0xb.element.parentNode && (_0xb.element.remove(), _0xb.element = null);
      else {
        if (!_0xb.element || !_0xb.element.parentNode) {
          let _0x1b = document.createElement('div');
          _0x1b.className = 'cursor-container', _0x1b.innerHTML = `
                    <img class="cursor-image" src="${ _0x81 }" alt="cursor" />
                    <div class="cursor-nick">${ this.escapeHTML(_0xb.nick) }</div>
                `, _0x1b.style.opacity = this.getCursorOpacityFromCenter(), _0xb.element = _0x1b, _0x7f.appendChild(_0x1b);
        }
        _0xb.element.style.transform = `translate(${ _0x4 }px, ${ _0xa }px)`, this.updateNickOpacity(_0xb.element, _0x4, _0xa);
      }
    }
    updateNickOpacity(_0x3, _0x4, _0xa) {
      let _0xb = _0x3.querySelector('.cursor-nick');
      if (!_0xb)
        return;
      let _0x1a = this.mouseWorldX - _0x4,
        _0x1b = this.mouseWorldY - _0xa,
        _0x1f = Math.sqrt(_0x1a * _0x1a + _0x1b * _0x1b),
        _0x1c = Math.max(0, 1 - _0x1f / _0x82);
      _0xb.style.opacity = _0x1c;
    }
    updateAllNickOpacities() {
      for (let _0x3 of this.cursors.values())
        _0x3.element && this.updateNickOpacity(_0x3.element, _0x3._0x2f, _0x3._0x55);
    }
    getCursorOpacityFromCenter() {
      let _0x3 = this.mouseWorldX - _0x84,
        _0x4 = this.mouseWorldY - _0x85,
        _0xa = Math.sqrt(_0x3 * _0x3 + _0x4 * _0x4);
      return _0xa <= _0x86 ? 0 : _0xa >= _0x87 ? _0x88 : (_0xa - _0x86) / (_0x87 - _0x86) * _0x88;
    }
    updateAllCursorOpacities() {
      let _0x3 = this.getCursorOpacityFromCenter();
      for (let _0x4 of this.cursors.values())
        _0x4.element && (_0x4.element.style.opacity = _0x3);
    }
    clearAllCursors() {
      for (let _0x3 of this.cursors.values())
        _0x3.element && _0x3.element.parentNode && _0x3.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let _0x3 of this.cursors.values())
        this.updateElementPosition(_0x3.id, _0x3._0x2f, _0x3._0x55);
    }
    setupMouseTracking() {
      document.addEventListener('mousemove', _0x3 => {
        let _0x4 = _0x8.camera;
        if (!_0x4 || (this.mouseWorldX = Math.round((_0x4._0x2f + _0x3.clientX) / _0x4.zoom), this.mouseWorldY = Math.round((_0x4._0x55 + _0x3.clientY) / _0x4.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !_0x8.ws.isConnected) || !this.currentNick || _0xc.activeModal || _0x80?.classList.contains('active') || Date.now() - this.lastPositionSent < 25)
          return;
        let _0xa = new Int16Array(3);
        _0xa[0] = this.mouseWorldX, _0xa[1] = this.mouseWorldY, _0xa[2] = 0, _0x8.ws.send(_0xa.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let _0x3 = _0x8.ui?.siteSelector;
      _0x3 && _0x3.addEventListener('change', () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener('resize', () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener('mousedown', _0x3 => {
        if (_0x3.button !== 1 || this.getCursorOpacityFromCenter() < 0.05)
          return;
        let _0xa = this.getClosestCursor();
        _0xa && _0xa.distance <= _0x83 && (_0x3.preventDefault(), window.open(`https://${ _0xa.cursor.nick }`, '_blank'));
      });
    }
    getClosestCursor() {
      let _0x3 = null,
        _0x4 = 1 / 0;
      for (let _0xa of this.cursors.values()) {
        let _0xb = this.mouseWorldX - _0xa._0x2f,
          _0x1a = this.mouseWorldY - _0xa._0x55,
          _0x1b = Math.sqrt(_0xb * _0xb + _0x1a * _0x1a);
        _0x1b < _0x4 && (_0x4 = _0x1b, _0x3 = _0xa);
      }
      return _0x3 ? {
        cursor: _0x3,
        distance: _0x4
      } : null;
    }
    sendNickIfSelected() {
      if (!_0x8.ws.isConnected)
        return;
      let _0x3 = _0x8.user?.selectedSite;
      if (!_0x3 || !_0x3.domain) {
        this.currentNick = null;
        return;
      }
      let _0x4 = _0x3.domain;
      this.currentNick = _0x4;
      for (let [_0xa, _0xb] of this.cursors.entries())
        _0xb.nick === _0x4 && this.removeCursor(_0xa);
      _0x8.ws.sendJSON({
        type: 'nick',
        value: _0x4
      });
    }
    escapeHTML(_0x3) {
      return _0x3 ? _0x3.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }
  },
  _0x8a = _0x89;
if ('serviceWorker' in navigator) {
  let _0x3 = 'sw_version',
    _0x4 = async () => {
      try {
        let _0xb = await navigator.serviceWorker.register('/sw.js');
        return console.log('[SW] Service Worker registered:', _0xb.scope), _0xb;
      } catch (_0xb) {
        return console.error('[SW] Service Worker registration failed:', _0xb), null;
      }
    };
  (async () => {
    let _0xb = localStorage.getItem(_0x3),
      _0x1a = '12';
    if (_0xb !== _0x1a) {
      console.log(`[SW] Version mismatch: stored=${ _0xb }, current=${ _0x1a }`);
      let _0x1b = await navigator.serviceWorker.getRegistrations();
      for (let _0x1c of _0x1b)
        await _0x1c.unregister(), console.log('[SW] Unregistered old service worker');
      let _0x1f = await caches.keys();
      await Promise.all(_0x1f.map(_0x1c => {
        if (_0x1c.includes('webtiles'))
          return console.log(`[SW] Deleting cache: ${ _0x1c }`), caches.delete(_0x1c);
      })), localStorage.setItem(_0x3, _0x1a), await _0x4();
    } else
      (await navigator.serviceWorker.getRegistrations()).length === 0 && await _0x4();
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: 'clear-cache'
    });
  });
}
_0x8.cursors = new _0x8a();
_0x8.user?.admin && (window.WebTiles = {
  ..._0x8,
  classes: {
    Tile: _0x64,
    Camera: _0x7d,
    Plot: _0x7b,
    Mouse: _0x7e,
    Cursors: _0x8a
  }
});
var _0x8b = Date.now();
async function _0x8c() {
  let _0x3 = await (await _0x8.api.makeRequest('/s/dist/buildtime.txt')).text();
  return parseInt(_0x3);
}
_0x8c().then(_0x2 => {
  _0x8b = _0x2;
});
var _0x8d = setInterval(async () => {
  let _0x2 = await _0x8c();
  if (_0x2 !== _0x8b) {
    clearInterval(_0x8d), _0x8b = _0x2;
    let _0x3 = document.createElement('div');
    _0x3.id = 'update-toast', _0x3.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(_0x3), document.getElementById('refresh-btn').addEventListener('click', () => {
      location.reload();
    });
  }
}, 60000);