var v0 = Object.defineProperty;
var v1 = (e, t, n) => t in e ? v0(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var v2 = (e, t, n) => v1(e, typeof t != 'symbol' ? t + '' : t, n);
var v3 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  v4 = document.getElementById('user-data');
if (v4)
  try {
    let v5 = JSON.parse(v4.textContent);
    v5 && v5.email_verified && (v3.user = v5);
  } catch (v5) {
    console.error(v5);
  }
var v6 = v3;
var v7 = class v7 {
  static init() {
    v7.container || (v7.container = document.createElement('div'), v7.container.id = 'modal-container', v7.container.className = 'modal-overlay', v7.container.addEventListener('click', t => {
      t.target === v7.container && v7.activeModal && v7.activeModal.close();
    }), document.body.appendChild(v7.container));
  }
  constructor(t = {}) {
    this.title = t.title || '', this.content = t.content || '', this.warning = t.warning || null, this.buttons = t.buttons || [], this.onClose = t.onClose || null, this.element = null, this._buttonElements = new Map();
  }
  _createButton(t) {
    let v8 = document.createElement('button');
    return v8.className = `modal-btn modal-btn-${ t.type || 'default' }`, v8.textContent = t.text, t.disabled && (v8.disabled = !0), v8.addEventListener('click', async () => {
      t.onClick && await t.onClick(this, v8);
    }), this._buttonElements.set(t.id || t.text, v8), v8;
  }
  _build() {
    let v9 = document.createElement('div');
    if (v9.className = 'modal-content', this.title) {
      let v8 = document.createElement('h3');
      v8.className = 'modal-title', v8.textContent = this.title, v9.appendChild(v8);
    }
    if (this.content) {
      let v8 = document.createElement('div');
      v8.className = 'modal-body', typeof this.content == 'string' ? v8.innerHTML = this.content : this.content instanceof HTMLElement && v8.appendChild(this.content), v9.appendChild(v8);
    }
    if (this._warningEl = document.createElement('div'), this._warningEl.className = 'modal-warning', this.warning ? (this._warningEl.innerHTML = this.warning, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none', v9.appendChild(this._warningEl), this.buttons.length > 0) {
      let v8 = document.createElement('div');
      v8.className = 'modal-actions';
      for (let v10 of this.buttons)
        v8.appendChild(this._createButton(v10));
      v9.appendChild(v8);
    }
    return this.element = v9, v9;
  }
  open() {
    return v7.init(), v7.activeModal && v7.activeModal.close(), this._build(), v7.container.innerHTML = '', v7.container.appendChild(this.element), v7.container.classList.add('active'), v7.activeModal = this, v6.camera && v6.camera.setZoomEnabled(!1), this;
  }
  close() {
    return v7.container && v7.container.classList.remove('active'), v7.activeModal = null, this._buttonElements.clear(), v6.camera && v6.camera.setZoomEnabled(!0), this.onClose && this.onClose(this), this;
  }
  setContent(v9) {
    let v8 = this.element?.querySelector('.modal-body');
    return v8 && (typeof v9 == 'string' ? v8.innerHTML = v9 : v9 instanceof HTMLElement && (v8.innerHTML = '', v8.appendChild(v9))), this.content = v9, this;
  }
  setWarning(v9) {
    return this._warningEl && (v9 ? (this._warningEl.innerHTML = v9, this._warningEl.style.display = 'block') : this._warningEl.style.display = 'none'), this.warning = v9, this;
  }
  getButton(v9) {
    return this._buttonElements.get(v9);
  }
  setButtonLoading(v9, v8, v10) {
    let v11 = this.getButton(v9);
    return v11 ? (v8 ? (v11._originalText = v11._originalText || v11.textContent, v11.textContent = v10 || 'Loading...', v11.disabled = !0) : (v11.textContent = v11._originalText || v11.textContent, v11.disabled = !1), this) : this;
  }
};
v2(v7, 'container', null), v2(v7, 'activeModal', null);
var v12 = v7;

function v13() {
  return document.querySelector('meta[name="turnstile-sitekey"]')?.content || '';
}
var v14 = v13(),
  v15 = localStorage.getItem('captchaToken'),
  v16 = parseInt(localStorage.getItem('captchaExpiresAt') || '0'),
  v17 = null,
  v18 = [],
  v19 = !1,
  v20 = 0,
  v21 = 5000;
v16 < Date.now() && (v15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt'));

function v22() {
  v15 = null, localStorage.removeItem('captchaToken'), localStorage.removeItem('captchaExpiresAt');
}

function v23(v5, v9) {
  v15 = v5, v16 = v9, localStorage.setItem('captchaToken', v5), localStorage.setItem('captchaExpiresAt', v9);
}

function v24() {
  return v19 ? !0 : window.turnstile ? (v19 = !0, !0) : !1;
}

function v25(v5, v9) {
  if (!v24())
    return console.error('[Captcha] Turnstile not ready'), !1;
  let v8 = v13() || v14 || '';
  if (!v8)
    return !0;
  let v10 = typeof v5 == 'string' ? document.querySelector(v5) : v5;
  if (!v10)
    return console.error('[Captcha] Container not found:', v5), !1;
  v10.innerHTML = '';
  let v11 = window.turnstile;
  return v11.render(v10, {
    sitekey: v8,
    callback: async function(r) {
      let v26 = document.getElementById('loading-text');
      v26 && (v26.textContent = 'Verifying...');
      try {
        let v27 = await (await fetch('/api/captcha/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            turnstileToken: r
          })
        })).json();
        if (v27.success) {
          if (v23(v27.token, v27.expiresAt), v26 && (v26.textContent = 'Loading...'), v9 && v17) {
            v17.close(), v17 = null;
            let v28 = [...v18];
            v18 = [], v28.forEach(d => d());
          }
        } else
          v26 && (v26.textContent = 'Verification failed. Please try again.'), v11.reset(v10);
      } catch (p) {
        console.error('[Captcha] Verification error:', p), v26 && (v26.textContent = 'Verification failed. Please try again.'), v11.reset(v10);
      }
    },
    'error-callback': function() {
      let v29 = document.getElementById('loading-text');
      v29 && (v29.textContent = 'Captcha failed. Please refresh.');
    },
    'expired-callback': function() {
      v11.reset(v10);
    }
  }), !0;
}

function v30() {
  if (v13())
    return new Promise(v5 => {
      if (Date.now() - v20 < v21) {
        v5();
        return;
      }
      if (v12.activeModal) {
        v18.push(v5);
        return;
      }
      v20 = Date.now(), v18.push(v5);
      let v8 = document.createElement('div');
      v8.id = 'captcha-modal-turnstile', v8.style.display = 'flex', v8.style.justifyContent = 'center', v8.style.padding = '20px';
      let v10 = document.createElement('div'),
        v11 = document.createElement('p');
      if (v11.textContent = 'Please complete the captcha to continue.', v10.appendChild(v11), v10.appendChild(v8), v17 = new v12({
          title: 'Verification Required',
          content: v10,
          buttons: [{
            text: 'Cancel',
            type: 'cancel',
            onClick: v29 => {
              v29.close(), v17 = null, v18 = [];
            }
          }],
          onClose: () => {
            v17 = null;
          }
        }), v17.open(), v24())
        v25(v8, !0);
      else {
        let v29 = setInterval(() => {
          v24() && (clearInterval(v29), v25(v8, !0));
        }, 100);
        setTimeout(() => clearInterval(v29), 10000);
      }
    });
}

function v31() {
  if (v15)
    return;
  let v5 = document.querySelector('#turnstile-container');
  if (v5)
    if (v24())
      v25(v5, !1);
    else {
      let v9 = setInterval(() => {
        v24() && (clearInterval(v9), v15 || v25(v5, !1));
      }, 100);
      setTimeout(() => clearInterval(v9), 10000);
    }
}
window.onTurnstileLoad = function() {
  v19 = !0, v15 || v31();
};
window.turnstile && (v19 = !0, v15 || v31());
v6.api = {
  getToken() {
    return v15;
  },
  getTokenExpiry() {
    return v16;
  },
  clearToken: v22,
  showCaptchaModal: v30,
  renderCaptchaOnLoadingScreen: v31,
  getTurnstileSiteKey: v13,
  async makeRequest(v5, v9 = {}) {
    let v8 = (v9.method || 'GET').toUpperCase();
    v8 !== 'GET' && v15 && (v9.headers = v9.headers || {}, v9.headers['X-Captcha-Token'] = v15);
    let v10 = await fetch(v5, v9);
    if (v10.status === 403) {
      let v11 = v10.clone();
      try {
        if ((await v11.json()).code === 'CAPTCHA_REQUIRED')
          return v22(), await v30(), v8 !== 'GET' && v15 && (v9.headers = v9.headers || {}, v9.headers['X-Captcha-Token'] = v15), fetch(v5, v9);
      } catch {}
    }
    return v10;
  }
};
var v32 = v6.api;
var v33 = [
    0.25,
    0.5,
    0.75,
    1,
    1.5
  ],
  v34 = 50;

function v35(v5, v9, v8) {
  let v10 = new WeakMap(),
    v11 = 2048,
    v29 = 10000,
    v26 = new WeakMap();

  function v36(l) {}

  function v27() {
    v26.clear = new WeakMap();
  }

  function v28(l, m) {
    if (!l)
      return null;
    if (v10.has(l))
      return v10.get(l);
    let v37 = v5.createObject(z);
    return v37.native = l, v37.canvas = m, v10.set(l, v37), v37;
  }
  let v38 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'CanvasGradient', v38);
  let v39 = v5.getProperty(v38, 'prototype');
  v5.setProperty(v39, 'addColorStop', v5.createNativeFunction(function(l, m) {
    this.native.addColorStop(l, m);
  }));

  function v40(l) {
    let v41 = v5.createObject(v38);
    return v41.native = l, v41;
  }
  let v42 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'CanvasPattern', v42);

  function v43(l) {
    let v41 = v5.createObject(v42);
    return v41.native = l, v41;
  }
  let v44 = v5.createNativeFunction(function(l, v41) {
    if (l > v11 || v41 > v11)
      throw new Error(`ImageData size exceeds maximum (${ v11 }x${ v11 })`);
    v6.settings.logCalls && console.log(v8.domain, 'create ImageData', this, l, v41);
    let v37 = new ImageData(l, v41);
    this.native = v37, this.width = l, this.height = v41;
  }, !0);
  v5.setProperty(v9, 'ImageData', v44);
  let v45 = v5.getProperty(v44, 'prototype');
  v5.setProperty(v45, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native.width;
    })
  }), v5.setProperty(v45, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native.height;
    })
  }), v5.setProperty(v45, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      let v46 = this.native.data,
        v41 = v5.createObjectProto(v5.ARRAY_PROTO);
      v5.setProperty(v41, 'length', v46.length);
      let v37 = v5.nativeToPseudo({});
      v5.setProperty(v37, 'length', v46.length), v5.setProperty(v37, 'get', v5.createNativeFunction(function(x) {
        return v46[x];
      })), v5.setProperty(v37, 'set', v5.createNativeFunction(function(x, P) {
        v6.settings.logCalls && console.log(v8.domain, 'setImageData', this, x, P), v46[x] = P;
      }));
      for (let v47 = 0; v47 < Math.min(v46.length, 1000); v47++)
        (P => {
          v5.setProperty(v37, P, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: v5.createNativeFunction(function() {
              return v46[P];
            }),
            set: v5.createNativeFunction(function(N) {
              v6.settings.logCalls && console.log(v8.domain, 'setImageData', this, P, N), v46[P] = N;
            })
          });
        })(v47);
      return v37;
    })
  });

  function v48(v46) {
    let v41 = v5.createObject(v44);
    return v41.native = v46, v41;
  }
  let v49 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'TextMetrics', v49);
  let v50 = v5.getProperty(v49, 'prototype'),
    v51 = [
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
  for (let v46 of v51)
    v5.setProperty(v50, v46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return this.native[v46];
      })
    });

  function v52(v46) {
    let v41 = v5.createObject(v49);
    return v41.native = v46, v41;
  }
  let v53 = v5.createNativeFunction(function(v46) {
    v46 && v46.native ? this.native = new Path2D(v46.native) : typeof v46 == 'string' ? this.native = new Path2D(v46) : this.native = new Path2D();
  }, !0);
  v5.setProperty(v9, 'Path2D', v53);
  let v54 = v5.getProperty(v53, 'prototype'),
    v55 = {
      addPath: function(v46, v41) {
        v46?.native && this.native.addPath(v46.native, v41);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(v46, v41) {
        this.native.moveTo(v46, v41);
      },
      lineTo: function(v46, v41) {
        this.native.lineTo(v46, v41);
      },
      bezierCurveTo: function(v46, v41, v37, v47, P, N) {
        this.native.bezierCurveTo(v46, v41, v37, v47, P, N);
      },
      quadraticCurveTo: function(v46, v41, v37, v47) {
        this.native.quadraticCurveTo(v46, v41, v37, v47);
      },
      arc: function(v46, v41, v37, v47, P, N) {
        this.native.arc(v46, v41, v37, v47, P, N);
      },
      arcTo: function(v46, v41, v37, v47, P) {
        this.native.arcTo(v46, v41, v37, v47, P);
      },
      ellipse: function(v46, v41, v37, v47, P, N, D, q) {
        this.native.ellipse(v46, v41, v37, v47, P, N, D, q);
      },
      rect: function(v46, v41, v37, v47) {
        this.native.rect(v46, v41, v37, v47);
      },
      roundRect: function(v46, v41, v37, v47, P) {
        this.native.roundRect(v46, v41, v37, v47, P);
      }
    };
  for (let [v46, v41] of Object.entries(v55))
    v5.setProperty(v54, v46, v5.createNativeFunction(v41));
  let v56 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'CanvasRenderingContext2D', v56);
  let v57 = v5.getProperty(v56, 'prototype'),
    v58 = [
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
  for (let v46 of v58)
    v5.setProperty(v57, v46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return this.native[v46];
      }),
      set: v5.createNativeFunction(function(v41) {
        v6.settings.logCalls && console.log(v8.domain, 'context set ' + v46, this, v41), this.native[v46] = v41;
      })
    });
  for (let v46 of [
      'fillStyle',
      'strokeStyle'
    ])
    v5.setProperty(v57, v46, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        let v41 = this.native[v46];
        return v41;
      }),
      set: v5.createNativeFunction(function(v41) {
        v41?.native ? this.native[v46] = v41.native : this.native[v46] = v41;
      })
    });
  v5.setProperty(v57, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let v59 = {
    clearRect: function(v46, v41, v37, v47) {
      this.native, this.native.clearRect(v46, v41, v37, v47);
    },
    fillRect: function(v46, v41, v37, v47) {
      this.native, this.native.fillRect(v46, v41, v37, v47);
    },
    strokeRect: function(v46, v41, v37, v47) {
      this.native, this.native.strokeRect(v46, v41, v37, v47);
    },
    fillText: function(v46, v41, v37, v47) {
      this.native, v47 !== void 0 ? this.native.fillText(String(v46).slice(0, 1000), v41, v37, v47) : this.native.fillText(String(v46).slice(0, 1000), v41, v37);
    },
    strokeText: function(v46, v41, v37, v47) {
      this.native, v47 !== void 0 ? this.native.strokeText(String(v46).slice(0, 1000), v41, v37, v47) : this.native.strokeText(String(v46).slice(0, 1000), v41, v37);
    },
    measureText: function(v46) {
      return v52(this.native.measureText(String(v46).slice(0, 1000)));
    },
    getLineDash: function() {
      return v5.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(v46) {
      let v41 = v5.pseudoToNative(v46);
      this.native.setLineDash(v41);
    },
    createLinearGradient: function(v46, v41, v37, v47) {
      return v40(this.native.createLinearGradient(v46, v41, v37, v47));
    },
    createRadialGradient: function(v46, v41, v37, v47, P, N) {
      return v40(this.native.createRadialGradient(v46, v41, v37, v47, P, N));
    },
    createConicGradient: function(v46, v41, v37) {
      return v40(this.native.createConicGradient(v46, v41, v37));
    },
    createPattern: function(v46, v41) {
      let v37 = v46?.native || v46;
      if (!v37)
        return null;
      let v47 = this.native.createPattern(v37, v41);
      return v47 ? v43(v47) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(v46, v41) {
      this.native.moveTo(v46, v41);
    },
    lineTo: function(v46, v41) {
      this.native.lineTo(v46, v41);
    },
    bezierCurveTo: function(v46, v41, v37, v47, P, N) {
      this.native.bezierCurveTo(v46, v41, v37, v47, P, N);
    },
    quadraticCurveTo: function(v46, v41, v37, v47) {
      this.native.quadraticCurveTo(v46, v41, v37, v47);
    },
    arc: function(v46, v41, v37, v47, P, N) {
      this.native.arc(v46, v41, v37, v47, P, N);
    },
    arcTo: function(v46, v41, v37, v47, P) {
      this.native.arcTo(v46, v41, v37, v47, P);
    },
    ellipse: function(v46, v41, v37, v47, P, N, D, q) {
      this.native.ellipse(v46, v41, v37, v47, P, N, D, q);
    },
    rect: function(v46, v41, v37, v47) {
      this.native.rect(v46, v41, v37, v47);
    },
    roundRect: function(v46, v41, v37, v47, P) {
      let v60 = v5.pseudoToNative(P);
      this.native.roundRect(v46, v41, v37, v47, v60);
    },
    fill: function(v46, v41) {
      this.native, v46?.native ? this.native.fill(v46.native, v41) : this.native.fill(v46);
    },
    stroke: function(v46) {
      this.native, v46?.native ? this.native.stroke(v46.native) : this.native.stroke();
    },
    clip: function(v46, v41) {
      v46?.native ? this.native.clip(v46.native, v41) : this.native.clip(v46);
    },
    isPointInPath: function(v46, v41, v37, v47) {
      return v46?.native ? this.native.isPointInPath(v46.native, v41, v37, v47) : this.native.isPointInPath(v46, v41, v37);
    },
    isPointInStroke: function(v46, v41, v37) {
      return v46?.native ? this.native.isPointInStroke(v46.native, v41, v37) : this.native.isPointInStroke(v46, v41);
    },
    getTransform: function() {
      let v46 = this.native.getTransform();
      return v5.nativeToPseudo({
        a: v46.a,
        v40: v46.v40,
        v26: v46.v26,
        v38: v46.v38,
        v5: v46.v5,
        v44: v46.v44
      });
    },
    rotate: function(v46) {
      this.native.rotate(v46);
    },
    scale: function(v46, v41) {
      this.native.scale(v46, v41);
    },
    translate: function(v46, v41) {
      this.native.translate(v46, v41);
    },
    transform: function(v46, v41, v37, v47, P, v60) {
      this.native.transform(v46, v41, v37, v47, P, v60);
    },
    setTransform: function(v46, v41, v37, v47, P, v60) {
      if (typeof v46 == 'object' && v46 !== null) {
        let v61 = v5.pseudoToNative(v46);
        this.native.setTransform(v61);
      } else
        this.native.setTransform(v46, v41, v37, v47, P, v60);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(v46, v41, v37, v47, P, v60, v61, q, ie) {
      this.native;
      let v62 = v46?.native || v46;
      v62 && (q !== void 0 ? this.native.drawImage(v62, v41, v37, v47, P, v60, v61, q, ie) : v47 !== void 0 ? this.native.drawImage(v62, v41, v37, v47, P) : this.native.drawImage(v62, v41, v37));
    },
    createImageData: function(v46, v41) {
      if (v46?.native)
        return v48(this.native.createImageData(v46.native));
      if (v46 > v11 || v41 > v11)
        throw new Error(`ImageData size exceeds maximum (${ v11 }x${ v11 })`);
      return v48(this.native.createImageData(v46, v41));
    },
    getImageData: function(v46, v41, v37, v47) {
      if (v37 > v11 || v47 > v11)
        throw new Error(`ImageData size exceeds maximum (${ v11 }x${ v11 })`);
      return v48(this.native.getImageData(v46, v41, v37, v47));
    },
    putImageData: function(v46, v41, v37, v47, P, v60, v61) {
      this.native, v46?.native && (v47 !== void 0 ? this.native.putImageData(v46.native, v41, v37, v47, P, v60, v61) : this.native.putImageData(v46.native, v41, v37));
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
  for (let [v46, v41] of Object.entries(v59))
    v5.setProperty(v57, v46, v5.createNativeFunction(v41));
  return {
    extendElement: function(v46, v41) {
      v5.setProperty(v46, 'getContext', v5.createNativeFunction(function(v37, v47) {
        v6.settings.logCalls && console.log(v8.domain, 'getContext', this, v37, v47);
        let v63 = this.native;
        if (v63.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (v63.width > v11 && (v63.width = v11), v63.height > v11 && (v63.height = v11), v37 === '2d') {
          let v60 = v63.getContext('2d', v47 ? v5.pseudoToNative(v47) : void 0);
          return v28(v60, this);
        }
        throw new Error(`Context type "${ v37 }" is not supported`);
      })), v5.setProperty(v46, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: v5.createNativeFunction(function(v37) {
          v6.settings.logCalls && console.log(v8.domain, 'set width', this, v37), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(v37, v11));
        })
      }), v5.setProperty(v46, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: v5.createNativeFunction(function(v37) {
          v6.settings.logCalls && console.log(v8.domain, 'set height', this, v37), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(v37, v11));
        })
      }), v5.setProperty(v46, 'toDataURL', v5.createNativeFunction(function(v37, v47) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return v6.settings.logCalls && console.log(v8.domain, 'toDataURL', this, v37, v47), this.native.toDataURL(v37, v47);
      }));
    },
    resetDrawCounts: v27,
    contextToPseudo: v28
  };
}

function v64(v5, v9, v8) {
  let v26 = 0,
    v36 = window.location.origin;

  function v27(v44) {
    if (typeof v44 != 'string' || v44.startsWith('/') || v44.startsWith('./') || v44.startsWith('../') || !v44.startsWith('http://') && !v44.startsWith('https://'))
      return !1;
    try {
      let v45 = new URL(v44);
      if (v45.origin === v36 || v45.hostname === 'kicya.net' || v45.hostname.endsWith('.kicya.net') || v45.hostname === 'nekoweb.org')
        return !1;
      let v48 = v45.hostname.toLowerCase();
      return !(v48 === 'localhost' || v48 === '127.0.0.1' || v48 === '0.0.0.0' || v48.startsWith('192.168.') || v48.startsWith('10.') || v48.startsWith('172.16.') || v48.startsWith('172.17.') || v48.startsWith('172.18.') || v48.startsWith('172.19.') || v48.startsWith('172.2') || v48.startsWith('172.30.') || v48.startsWith('172.31.') || v48 === '[::1]');
    } catch {
      return !1;
    }
  }
  let v28 = 0,
    v38 = v5.nativeToPseudo({});
  v5.setProperty(v9, '__xhrCallbacks', v38);

  function v39(v44, ...v45) {
    if (!v44 || typeof v44 != 'object')
      return;
    let v48 = v28++;
    v5.setProperty(v38, 'fn' + v48, v44);
    let v49 = v45.map((v51, v52) => {
        let v53 = 'arg' + v48 + '_' + v52;
        return v5.setProperty(v38, v53, v51), v53;
      }),
      v50 = v49.map(v51 => `__xhrCallbacks.${ v51 }`).join(',');
    v5.appendCode(`__xhrCallbacks.fn${ v48 }(${ v50 }); delete __xhrCallbacks.fn${ v48 }; ${ v49.map(v51 => `delete __xhrCallbacks.${ v51 }`).join('; ') };`);
  }
  let v40 = v5.createNativeFunction(function() {
    v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let v45 = this;
    this.native.onreadystatechange = function() {
      v5.setProperty(v45, 'readyState', v45.native.readyState), v45.native.readyState === 4 && (v5.setProperty(v45, 'status', v45.native.status), v5.setProperty(v45, 'statusText', v45.native.statusText), v5.setProperty(v45, 'responseText', v45.native.responseText?.slice(0, 5242880) || ''), v5.setProperty(v45, 'responseURL', v45.native.responseURL), v26 = Math.max(0, v26 - 1)), v45._eventHandlers.onreadystatechange && v39(v45._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      v45._eventHandlers.onload && v39(v45._eventHandlers.onload);
    }, this.native.onerror = function() {
      v26 = Math.max(0, v26 - 1), v45._eventHandlers.onerror && v39(v45._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      v26 = Math.max(0, v26 - 1), v45._eventHandlers.ontimeout && v39(v45._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      v26 = Math.max(0, v26 - 1), v45._eventHandlers.onabort && v39(v45._eventHandlers.onabort);
    }, this.native.onprogress = function(v48) {
      if (v45._eventHandlers.onprogress) {
        let v49 = v5.nativeToPseudo({
          loaded: v48.loaded,
          total: v48.total,
          lengthComputable: v48.lengthComputable
        });
        v39(v45._eventHandlers.onprogress, v49);
      }
    }, this.native.onloadstart = function() {
      v45._eventHandlers.onloadstart && v39(v45._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      v45._eventHandlers.onloadend && v39(v45._eventHandlers.onloadend);
    }, v5.setProperty(this, 'readyState', 0), v5.setProperty(this, 'status', 0), v5.setProperty(this, 'statusText', ''), v5.setProperty(this, 'responseText', ''), v5.setProperty(this, 'responseURL', '');
  }, !0);
  v5.setProperty(v9, 'XMLHttpRequest', v40);
  let v42 = v5.getProperty(v40, 'prototype');
  v5.setProperty(v40, 'UNSENT', 0), v5.setProperty(v40, 'OPENED', 1), v5.setProperty(v40, 'HEADERS_RECEIVED', 2), v5.setProperty(v40, 'LOADING', 3), v5.setProperty(v40, 'DONE', 4), v5.setProperty(v42, 'UNSENT', 0), v5.setProperty(v42, 'OPENED', 1), v5.setProperty(v42, 'HEADERS_RECEIVED', 2), v5.setProperty(v42, 'LOADING', 3), v5.setProperty(v42, 'DONE', 4);
  let v43 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let v44 of v43)
    v5.setProperty(v42, v44, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return this._eventHandlers[v44] || null;
      }),
      set: v5.createNativeFunction(function(v45) {
        v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest set ' + v44, this, v45), this._eventHandlers[v44] = v45;
      })
    });
  v5.setProperty(v42, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: v5.createNativeFunction(function(v44) {
      this.native.timeout = Math.min(v44, 30000);
    })
  }), v5.setProperty(v42, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: v5.createNativeFunction(function(v44) {
      this.native.withCredentials = !1;
    })
  }), v5.setProperty(v42, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: v5.createNativeFunction(function(v44) {
      (v44 === '' || v44 === 'text' || v44 === 'json') && (this.native.responseType = v44);
    })
  }), v5.setProperty(v42, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      let v44 = this.native.response;
      return this.native.responseType === 'json' ? v5.nativeToPseudo(v44) : typeof v44 == 'string' ? v44.slice(0, 5242880) : v44;
    })
  }), v5.setProperty(v42, 'open', v5.createNativeFunction(function(v44, v45, v48, v49, v50) {
    if (!v27(v45))
      throw new Error(`XHR request blocked: URL "${ v45 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let v51 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (v44 = String(v44).toUpperCase(), !v51.includes(v44))
      throw new Error(`HTTP method "${ v44 }" is not allowed`);
    v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest open', this, v44, v45, v48, v49, v50), this._method = v44, this._url = v45, this._async = v48 !== !1, this.native.open(v44, v45, this._async), this.native.timeout = 30000, v5.setProperty(this, 'readyState', this.native.readyState);
  })), v5.setProperty(v42, 'setRequestHeader', v5.createNativeFunction(function(v44, v45) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(v44.toLowerCase()))
      throw new Error(`Setting header "${ v44 }" is not allowed`);
    v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest setRequestHeader', this, v44, v45), this._headers[v44] = v45, this.native.setRequestHeader(v44, v45);
  })), v5.setProperty(v42, 'send', v5.createNativeFunction(function(v44) {
    if (v26 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest send', this, v44), v26++;
    let v45 = null;
    v44 != null && (typeof v44 == 'string' ? v45 = v44.slice(0, 5242880) : typeof v44 == 'object' && (v45 = JSON.stringify(v5.pseudoToNative(v44)))), this.native.send(v45);
  })), v5.setProperty(v42, 'abort', v5.createNativeFunction(function() {
    v6.settings.logCalls && console.log(v8.domain, 'XMLHttpRequest abort', this), this.native.abort(), v26 = Math.max(0, v26 - 1);
  })), v5.setProperty(v42, 'getResponseHeader', v5.createNativeFunction(function(v44) {
    return this.native.getResponseHeader(v44);
  })), v5.setProperty(v42, 'getAllResponseHeaders', v5.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), v5.setProperty(v42, 'overrideMimeType', v5.createNativeFunction(function(v44) {
    this.native.overrideMimeType(v44);
  }));
}
var v65 = 'webtiles_storage',
  v66 = 1,
  v67 = 'localStorage',
  v68 = 1024 * 1024,
  v69 = 100,
  v70 = null,
  v71 = null;

function v72() {
  return v71 || (v71 = new Promise((v5, v9) => {
    let v8 = indexedDB.open(v65, v66);
    v8.onerror = () => v9(v8.error), v8.onsuccess = () => {
      v70 = v8.result, v5(v70);
    }, v8.onupgradeneeded = v10 => {
      let v11 = v10.target.result;
      v11.objectStoreNames.contains(v67) || v11.createObjectStore(v67, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), v71);
}
async function v73(v5, v9) {
  return await v72(), new Promise((v8, v10) => {
    let v26 = v70.transaction(v67, 'readonly').objectStore(v67).get([
      v5,
      v9
    ]);
    v26.onsuccess = () => v8(v26.result?.value ?? null), v26.onerror = () => v10(v26.error);
  });
}
async function v74(v5, v9, v8) {
  return await v72(), new Promise((v10, v11) => {
    let v36 = v70.transaction(v67, 'readwrite').objectStore(v67).put({
      site: v5,
      key: v9,
      value: v8
    });
    v36.onsuccess = () => v10(), v36.onerror = () => v11(v36.error);
  });
}
async function v75(v5, v9) {
  return await v72(), new Promise((v8, v10) => {
    let v26 = v70.transaction(v67, 'readwrite').objectStore(v67).delete([
      v5,
      v9
    ]);
    v26.onsuccess = () => v8(), v26.onerror = () => v10(v26.error);
  });
}
async function v76(v5) {
  return await v72(), new Promise((v9, v8) => {
    let v26 = v70.transaction(v67, 'readonly').objectStore(v67).index('site').getAll(v5);
    v26.onsuccess = () => {
      let v36 = v26.result.map(v27 => v27.key);
      v9(v36);
    }, v26.onerror = () => v8(v26.error);
  });
}
async function v77(v5) {
  return await v72(), new Promise((v9, v8) => {
    let v26 = v70.transaction(v67, 'readonly').objectStore(v67).index('site').getAll(v5);
    v26.onsuccess = () => {
      let v36 = 0;
      for (let v27 of v26.result)
        v36 += (v27.key.length + v27.value.length) * 2;
      v9({
        size: v36,
        count: v26.result.length
      });
    }, v26.onerror = () => v8(v26.error);
  });
}
async function v78(v5) {
  return await v72(), new Promise((v9, v8) => {
    let v26 = v70.transaction(v67, 'readwrite').objectStore(v67).index('site').openCursor(v5);
    v26.onsuccess = v36 => {
      let v27 = v36.target.result;
      v27 ? (v27.delete(), v27.continue()) : v9();
    }, v26.onerror = () => v8(v26.error);
  });
}

function v79(v5, v9, v8) {
  let v10 = v5.nativeToPseudo({});
  v5.setProperty(v10, 'getItem', v5.createAsyncFunction(function(v11, v29) {
    if (v6.settings.logCalls && console.log(v8, 'localStorage.getItem', this, v11), v11 == null) {
      v29(null);
      return;
    }
    v11 = String(v11), v73(v8, v11).then(v26 => v29(v26)).catch(v26 => {
      console.error('localStorage.getItem error:', v26), v29(null);
    });
  })), v5.setProperty(v10, 'setItem', v5.createAsyncFunction(function(v11, v29, v26) {
    if (v6.settings.logCalls && console.log(v8, 'localStorage.setItem', this, v11, v29), v11 == null) {
      v26();
      return;
    }
    v11 = String(v11), v29 = String(v29), v77(v8).then(({
      size: v36,
      count: v27
    }) => {
      v73(v8, v11).then(v28 => {
        if (v28 === null && v27 >= v69)
          throw new Error(`localStorage item limit exceeded (max ${ v69 } items)`);
        let v39 = v28 ? (v11.length + v28.length) * 2 : 0,
          v40 = (v11.length + v29.length) * 2;
        if (v36 - v39 + v40 > v68)
          throw new Error(`localStorage size limit exceeded (max ${ v68 / 1024 }KB)`);
        return v74(v8, v11, v29);
      }).then(() => v26()).catch(v28 => {
        throw console.error('localStorage.setItem error:', v28), v28;
      });
    }).catch(v36 => {
      console.error('localStorage.setItem error:', v36), v26();
    });
  })), v5.setProperty(v10, 'removeItem', v5.createAsyncFunction(function(v11, v29) {
    if (v6.settings.logCalls && console.log(v8, 'localStorage.removeItem', this, v11), v11 == null) {
      v29();
      return;
    }
    v11 = String(v11), v75(v8, v11).then(() => v29()).catch(v26 => {
      console.error('localStorage.removeItem error:', v26), v29();
    });
  })), v5.setProperty(v10, 'clear', v5.createAsyncFunction(function(v11) {
    v6.settings.logCalls && console.log(v8, 'localStorage.clear', this), v78(v8).then(() => v11()).catch(v29 => {
      console.error('localStorage.clear error:', v29), v11();
    });
  })), v5.setProperty(v10, 'key', v5.createAsyncFunction(function(v11, v29) {
    v11 = parseInt(v11) || 0, v76(v8).then(v26 => {
      v29(v11 >= 0 && v11 < v26.length ? v26[v11] : null);
    }).catch(v26 => {
      console.error('localStorage.key error:', v26), v29(null);
    });
  })), v5.setProperty(v10, 'getLength', v5.createAsyncFunction(function(v11) {
    v77(v8).then(({
      count: v29
    }) => v11(v29)).catch(v29 => {
      console.error('localStorage.getLength error:', v29), v11(0);
    });
  })), v5.setProperty(v9, 'localStorage', v10), v5.setProperty(v9, 'sessionStorage', v10);
}
v72().catch(v5 => {
  console.error('Failed to initialize storage DB:', v5);
});

function v80(v5, v9, v8, v10) {
  let v11 = v5.createNativeFunction(function() {}, !0);
  v5.setProperty(v9, 'DOMParser', v11);
  let v29 = v5.getProperty(v11, 'prototype');
  v5.setProperty(v29, 'parseFromString', v5.createNativeFunction(function(v26, v36) {
    if (v6.settings.logCalls && console.log(v10.domain, 'DOMParser parseFromString', this, v26, v36), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(v36))
      throw new Error(`DOMParser: Unsupported MIME type "${ v36 }"`);
    if (typeof v26 != 'string' && (v26 = String(v26)), v26.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let v38 = new DOMParser().parseFromString(v26, v36),
      v39 = v5.createObjectProto(v5.OBJECT_PROTO);

    function v40(v42) {
      if (v42 == null)
        return null;
      let v43 = v5.createObjectProto(v5.OBJECT_PROTO);
      return v43.native = v42, v43.fromDOMParser = !0, v5.setProperty(v43, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), v5.setProperty(v43, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), v5.setProperty(v43, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: v5.createNativeFunction(function(v44) {
          v6.settings.logCalls && console.log(v10.domain, 'DOMParser set nodeValue', this, v44), this.native.nodeValue = v44;
        })
      }), v5.setProperty(v43, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: v5.createNativeFunction(function(v44) {
          v6.settings.logCalls && console.log(v10.domain, 'DOMParser set textContent', this, v44), this.native.textContent = String(v44).slice(0, 50000);
        })
      }), v5.setProperty(v43, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), v5.setProperty(v43, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.id;
        }),
        set: v5.createNativeFunction(function(v44) {
          v6.settings.logCalls && console.log(v10.domain, 'DOMParser set id', this, v44), this.native.id = String(v44).slice(0, 100);
        })
      }), v5.setProperty(v43, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.className;
        }),
        set: v5.createNativeFunction(function(v44) {
          v6.settings.logCalls && console.log(v10.domain, 'DOMParser set className', this, v44), this.native.className = String(v44).slice(0, 1000);
        })
      }), v5.setProperty(v43, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: v5.createNativeFunction(function(v44) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), v5.setProperty(v43, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), v5.setProperty(v43, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          let v44 = Array.from(this.native.children),
            v45 = v5.createObjectProto(v5.ARRAY_PROTO);
          for (let v48 = 0; v48 < v44.length; v48++)
            v5.setProperty(v45, v48, v40(v44[v48]));
          return v5.setProperty(v45, 'length', v44.length), v45;
        })
      }), v5.setProperty(v43, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          let v44 = Array.from(this.native.childNodes),
            v45 = v5.createObjectProto(v5.ARRAY_PROTO);
          for (let v48 = 0; v48 < v44.length; v48++)
            v5.setProperty(v45, v48, v40(v44[v48]));
          return v5.setProperty(v45, 'length', v44.length), v45;
        })
      }), v5.setProperty(v43, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return v40(this.native.firstChild);
        })
      }), v5.setProperty(v43, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return v40(this.native.lastChild);
        })
      }), v5.setProperty(v43, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return v40(this.native.firstElementChild);
        })
      }), v5.setProperty(v43, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return v40(this.native.lastElementChild);
        })
      }), v5.setProperty(v43, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v8) ? null : (v6.settings.logCalls && console.log(v10.domain, 'DOMParser get parentNode', this), v40(this.native.parentNode));
        })
      }), v5.setProperty(v43, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v8) ? null : (v6.settings.logCalls && console.log(v10.domain, 'DOMParser get parentElement', this), v40(this.native.parentElement));
        })
      }), v5.setProperty(v43, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v8) ? null : (v6.settings.logCalls && console.log(v10.domain, 'DOMParser get nextSibling', this), v40(this.native.nextSibling));
        })
      }), v5.setProperty(v43, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v8) ? null : (v6.settings.logCalls && console.log(v10.domain, 'DOMParser get previousSibling', this), v40(this.native.previousSibling));
        })
      }), v5.setProperty(v43, 'getAttributeNames', v5.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v44 = Array.from(this.native.getAttributeNames()),
          v45 = v5.createObjectProto(v5.ARRAY_PROTO);
        for (let v48 = 0; v48 < v44.length; v48++)
          v5.setProperty(v45, v48, v44[v48]);
        return v5.setProperty(v45, 'length', v44.length), v45;
      })), v5.setProperty(v43, 'getAttribute', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(v44);
      })), v5.setProperty(v43, 'setAttribute', v5.createNativeFunction(function(v44, v45) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (v44 = String(v44).toLowerCase(), v44.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(v44, String(v45)), v6.settings.logCalls && console.log(v10.domain, 'DOMParser set attribute', this, v44, v45);
      })), v5.setProperty(v43, 'hasAttribute', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(v44);
      })), v5.setProperty(v43, 'removeAttribute', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(v8))
          throw new Error('No access.');
        this.native.removeAttribute(v44), v6.settings.logCalls && console.log(v10.domain, 'DOMParser remove attribute', this, v44);
      })), v5.setProperty(v43, 'querySelector', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return v40(this.native.querySelector(v44));
      })), v5.setProperty(v43, 'querySelectorAll', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v45 = Array.from(this.native.querySelectorAll(v44)),
          v48 = v5.createObjectProto(v5.ARRAY_PROTO);
        for (let v49 = 0; v49 < v45.length; v49++)
          v5.setProperty(v48, v49, v40(v45[v49]));
        return v5.setProperty(v48, 'length', v45.length), v48;
      })), v5.setProperty(v43, 'getElementsByTagName', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v45 = Array.from(this.native.getElementsByTagName(v44)),
          v48 = v5.createObjectProto(v5.ARRAY_PROTO);
        for (let v49 = 0; v49 < v45.length; v49++)
          v5.setProperty(v48, v49, v40(v45[v49]));
        return v5.setProperty(v48, 'length', v45.length), v48;
      })), v5.setProperty(v43, 'getElementsByClassName', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v45 = Array.from(this.native.getElementsByClassName(v44)),
          v48 = v5.createObjectProto(v5.ARRAY_PROTO);
        for (let v49 = 0; v49 < v45.length; v49++)
          v5.setProperty(v48, v49, v40(v45[v49]));
        return v5.setProperty(v48, 'length', v45.length), v48;
      })), v5.setProperty(v43, 'getElementById', v5.createNativeFunction(function(v44) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return v40(this.native.getElementById ? this.native.getElementById(v44) : null);
      })), v43;
    }
    return v5.setProperty(v39, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v40(v38.documentElement);
      })
    }), v5.setProperty(v39, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v6.settings.logCalls && console.log(v10.domain, 'DOMParser get head', this), v40(v38.head);
      })
    }), v5.setProperty(v39, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v6.settings.logCalls && console.log(v10.domain, 'DOMParser get body', this), v40(v38.body);
      })
    }), v5.setProperty(v39, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v38.title;
      })
    }), v5.setProperty(v39, 'querySelector', v5.createNativeFunction(function(v42) {
      return v40(v38.querySelector(v42));
    })), v5.setProperty(v39, 'querySelectorAll', v5.createNativeFunction(function(v42) {
      let v43 = Array.from(v38.querySelectorAll(v42)),
        v44 = v5.createObjectProto(v5.ARRAY_PROTO);
      for (let v45 = 0; v45 < v43.length; v45++)
        v5.setProperty(v44, v45, v40(v43[v45]));
      return v5.setProperty(v44, 'length', v43.length), v44;
    })), v5.setProperty(v39, 'getElementById', v5.createNativeFunction(function(v42) {
      return v40(v38.getElementById(v42));
    })), v5.setProperty(v39, 'getElementsByTagName', v5.createNativeFunction(function(v42) {
      let v43 = Array.from(v38.getElementsByTagName(v42)),
        v44 = v5.createObjectProto(v5.ARRAY_PROTO);
      for (let v45 = 0; v45 < v43.length; v45++)
        v5.setProperty(v44, v45, v40(v43[v45]));
      return v5.setProperty(v44, 'length', v43.length), v44;
    })), v5.setProperty(v39, 'getElementsByClassName', v5.createNativeFunction(function(v42) {
      let v43 = Array.from(v38.getElementsByClassName(v42)),
        v44 = v5.createObjectProto(v5.ARRAY_PROTO);
      for (let v45 = 0; v45 < v43.length; v45++)
        v5.setProperty(v44, v45, v40(v43[v45]));
      return v5.setProperty(v44, 'length', v43.length), v44;
    })), v39;
  }));
}

function v81(v5, v9, v8, v10) {
  let v11 = new WeakMap(),
    v29 = 1000,
    v26 = 5,
    v36 = new WeakMap(),
    v27 = 0,
    v28 = v5.nativeToPseudo({});
  v5.setProperty(v9, '__eventCallbacks', v28);

  function v38(v62, h) {
    let v82 = v27++;
    v5.setProperty(v28, 'fn' + v82, v62), v5.setProperty(v28, 'ev' + v82, h), v5.appendCode(`__eventCallbacks.fn${ v82 }(__eventCallbacks.ev${ v82 }); delete __eventCallbacks.fn${ v82 }; delete __eventCallbacks.ev${ v82 };`);
  }

  function v39() {
    return v8.getElementsByTagName('*').length;
  }

  function v40(v62 = 1) {
    if (v39() + v62 > v29)
      throw new Error(`DOM element limit exceeded (max ${ v29 })`);
  }

  function v42(v62) {
    return v62 instanceof Element ? 1 + v62.getElementsByTagName('*').length : 0;
  }

  function v43(v62, h = !1) {
    if (v62 == null)
      return null;
    if (v11.has(v62))
      return v11.get(v62);
    let v82 = v62 instanceof Element ? v54 : v49,
      v83 = v5.createObject(v82);
    return v83.native = v62, v83.fromDOMParser || (v83.fromDOMParser = h), v11.set(v62, v83), v83;
  }

  function v44(v62) {
    return v62 && v8.contains(v62);
  }

  function v45(v62) {
    return v44(v62) ? v62 : null;
  }

  function v48(v62) {
    let v84 = v5.createObjectProto(v5.ARRAY_PROTO);
    for (let v82 = 0; v82 < v62.length; v82++)
      v5.setProperty(v84, v82, v43(v62[v82]));
    return v5.setProperty(v84, 'length', v62.length), v84;
  }
  let v49 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'Node', v49);
  let v50 = v5.getProperty(v49, 'prototype'),
    v51 = {
      firstChild: function() {
        return v43(v45(this.native.firstChild));
      },
      lastChild: function() {
        return v43(v45(this.native.lastChild));
      },
      parentNode: function() {
        return v43(v45(this.native.parentNode));
      },
      parentElement: function() {
        return v43(v45(this.native.parentElement));
      },
      nextSibling: function() {
        return v43(v45(this.native.nextSibling));
      },
      previousSibling: function() {
        return v43(v45(this.native.previousSibling));
      },
      childNodes: function() {
        let v62 = Array.from(this.native.childNodes).filter(v44);
        return v48(v62);
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
    v52 = {
      textContent: function(v62) {
        v6.settings.logCalls && console.log(v10.domain, 'set textContent', this, v62), this.native.textContent = v62;
      },
      nodeValue: function(v62) {
        v6.settings.logCalls && console.log(v10.domain, 'set nodeValue', this, v62), this.native.nodeValue = v62;
      }
    };
  for (let [v62, v84] of Object.entries(v51)) {
    let v82 = {
      get: v5.createNativeFunction(v84)
    };
    v52[v62] && (v82.set = v5.createNativeFunction(v52[v62])), v5.setProperty(v50, v62, Interpreter.VALUE_IN_DESCRIPTOR, v82);
  }
  let v53 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(v62) {
      if (!v62?.native)
        return null;
      if (v62.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return v40(v42(v62.native)), this.native.appendChild(v62.native), v6.settings.logCalls && console.log(v10.domain, 'appendChild', this, v62), v62;
    },
    append: function(v62) {
      for (let v84 of v62)
        if (v84?.native) {
          if (v84.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          v40(v42(v84.native)), this.native.appendChild(v84.native);
        }
      return v6.settings.logCalls && console.log(v10.domain, 'append', this, v62), v62;
    },
    removeChild: function(v62) {
      return !v62?.native || !v44(v62.native) ? null : (v6.settings.logCalls && console.log(v10.domain, 'removeChild', this, v62), v43(this.native.removeChild(v62.native)));
    },
    insertBefore: function(v62, v84) {
      if (!v62?.native)
        return null;
      if (v62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v8))
        throw new Error('No access.');
      v40(v42(v62.native));
      let v82 = v84?.native || null;
      return this.native.insertBefore(v62.native, v82), v6.settings.logCalls && console.log(v10.domain, 'insertBefore', this, v62, v82), v62;
    },
    cloneNode: function(v62) {
      return v6.settings.logCalls && console.log(v10.domain, 'cloneNode', this, v62), v43(this.native.cloneNode(v62), this.fromDOMParser);
    },
    contains: function(v62) {
      return v62?.native ? this.native.contains(v62.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(v8))
        throw new Error('No access.');
      this.native.remove(), v6.settings.logCalls && console.log(v10.domain, 'remove', this);
    },
    after: function(v62) {
      if (!v62?.native)
        return null;
      if (v62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v8))
        throw new Error('No access.');
      return v40(v42(v62.native)), this.native.after(v62.native), v6.settings.logCalls && console.log(v10.domain, 'after', this, v62), v62;
    },
    before: function(v62) {
      if (!v62?.native)
        return null;
      if (v62.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v8))
        throw new Error('No access.');
      return v40(v42(v62.native)), this.native.before(v62.native), v6.settings.logCalls && console.log(v10.domain, 'before', this, v62), v62;
    }
  };
  for (let [v62, v84] of Object.entries(v53))
    v5.setProperty(v50, v62, v5.createNativeFunction(v84));
  let v54 = v5.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v5.setProperty(v9, 'Element', v54);
  let v55 = v5.createObject(v49);
  v5.setProperty(v54, 'prototype', v55);

  function v56(v62) {
    if (!v62)
      return '';
    v62 = String(v62);
    let v84 = v62.toLowerCase().trim();
    if (v84.startsWith('javascript:') || v84.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (v84.startsWith('data:'))
      return v62;
    try {
      let v82 = new URL(v62, location.href);
      if (v82.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let v83 = v82.pathname + v82.search + v82.hash;
      return v83.startsWith(`/t/${ v10.domain }/`) || (v83 = `/t/${ v10.domain }/${ v83 }`.replaceAll('//', '/')), v83;
    } catch (v82) {
      if (v82.message.includes('not allowed'))
        throw v82;
      let v83 = v62;
      return !v83.startsWith(`/t/${ v10.domain }/`) && !v83.startsWith('#') && (v83 = `/t/${ v10.domain }/${ v83 }`.replaceAll('//', '/')), v83;
    }
  }
  let v57 = {
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
        let v62 = Array.from(this.native.children).filter(v44);
        return v48(v62);
      },
      firstElementChild: function() {
        return v43(v45(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return v43(v45(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return v43(v45(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return v43(v45(this.native.previousElementSibling));
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
    v58 = {
      innerText: function(v62) {
        this.native.innerText = v62.slice(0, 1000);
      },
      innerHTML: function(v62) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(v62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = v62, v6.settings.logCalls && console.log(v10.domain, 'set id', this, v62);
      },
      className: function(v62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = v62, v6.settings.logCalls && console.log(v10.domain, 'set className', this, v62);
      },
      src: function(v62) {
        this.native.src = v56(v62), v6.settings.logCalls && console.log(v10.domain, 'set src', this, v62);
      },
      href: function(v62) {
        this.native.href = this.native.tagName === 'A' ? v62 : v56(v62), v6.settings.logCalls && console.log(v10.domain, 'set href', this, v62);
      },
      hidden: function(v62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!v62;
      },
      disabled: function(v62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!v62;
      },
      checked: function(v62) {
        this.native.checked = !!v62;
      },
      selected: function(v62) {
        this.native.selected = !!v62;
      },
      readOnly: function(v62) {
        this.native.readOnly = !!v62;
      },
      required: function(v62) {
        this.native.required = !!v62;
      },
      draggable: function(v62) {
        this.native.draggable = !!v62;
      },
      title: function(v62) {
        this.native.title = String(v62).slice(0, 1000);
      },
      alt: function(v62) {
        this.native.alt = String(v62).slice(0, 1000);
      },
      name: function(v62) {
        this.native.name = String(v62).slice(0, 100);
      },
      type: function(v62) {
        this.native.type = String(v62).slice(0, 50);
      },
      value: function(v62) {
        this.native.value = String(v62).slice(0, 10000);
      },
      placeholder: function(v62) {
        this.native.placeholder = String(v62).slice(0, 500);
      },
      tabIndex: function(v62) {
        this.native.tabIndex = parseInt(v62) || 0;
      },
      scrollTop: function(v62) {
        this.native.scrollTop = v62;
      },
      scrollLeft: function(v62) {
        this.native.scrollLeft = v62;
      },
      currentTime: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(v62) || 0));
      },
      muted: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!v62);
      },
      volume: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(v62) || 0)));
      },
      loop: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!v62);
      },
      autoplay: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!v62);
      },
      controls: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!v62);
      },
      playbackRate: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(v62) || 1)));
      },
      defaultPlaybackRate: function(v62) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(v62) || 1)));
      },
      preload: function(v62) {
        if (this.native instanceof HTMLMediaElement) {
          let v84 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = v84.includes(v62) ? v62 : 'auto';
        }
      },
      poster: function(v62) {
        this.native instanceof HTMLVideoElement && (this.native.poster = v56(v62));
      }
    };
  for (let [v62, v84] of Object.entries(v57)) {
    let v82 = {
      get: v5.createNativeFunction(v84)
    };
    v58[v62] && (v82.set = v5.createNativeFunction(v58[v62])), v5.setProperty(v55, v62, Interpreter.VALUE_IN_DESCRIPTOR, v82);
  }
  let v59 = {
    getAttributeNames: function() {
      let v62 = Array.from(this.native.getAttributeNames()),
        v84 = v5.createObjectProto(v5.ARRAY_PROTO);
      for (let v82 = 0; v82 < v62.length; v82++)
        v5.setProperty(v84, v82, v62[v82]);
      return v5.setProperty(v84, 'length', v62.length), v84;
    },
    getAttribute: function(v62) {
      return this.native.getAttribute(v62);
    },
    setAttribute: function(v62, v84) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (v62 = String(v62).toLowerCase(), v84 = String(v84), v6.settings.logCalls && console.log(v10.domain, 'setAttribute', this, v62, v84), v62 === 'style' && v84.includes('animation-play-state') && v84.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (v62 === 'src' || v62 === 'poster' || v62 === 'data' || this.native.tagName !== 'A' && v62 === 'href') {
        this.native.setAttribute(v62, v56(v84));
        return;
      }
      if (v62 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (v62 === 'srcset')
        throw new Error('srcset is not allowed');
      if (v62 === 'action' || v62 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (v62.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (v62 === 'width' || v62 === 'height') {
        let v82 = parseFloat(v84);
        if (isNaN(v82) || v82 < 0 || v82 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(v62, v84);
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
    scrollIntoView: function(v62) {
      v62 && typeof v62 == 'object' ? this.native.scrollIntoView(v5.pseudoToNative(v62)) : this.native.scrollIntoView(v62);
    },
    scrollTo: function(v62, v84) {
      this.native.scrollTo(v62, v84);
    },
    scrollBy: function(v62, v84) {
      this.native.scrollBy(v62, v84);
    },
    removeAttribute: function(v62) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (v62 = String(v62).toLowerCase(), v62 === 'target')
        throw new Error('removing target is not allowed');
      v6.settings.logCalls && console.log(v10.domain, 'removeAttribute', this, v62), this.native.removeAttribute(v62);
    },
    hasAttribute: function(v62) {
      return this.native.hasAttribute(v62);
    },
    querySelector: function(v62) {
      let v84 = this.native.querySelector(v62);
      return v43(v45(v84));
    },
    querySelectorAll: function(v62) {
      let v84 = Array.from(this.native.querySelectorAll(v62)).filter(v44);
      return v48(v84);
    },
    getElementsByClassName: function(v62) {
      let v84 = Array.from(this.native.getElementsByClassName(v62)).filter(v44);
      return v48(v84);
    },
    getElementsByTagName: function(v62) {
      let v84 = Array.from(this.native.getElementsByTagName(v62)).filter(v44);
      return v48(v84);
    },
    closest: function(v62) {
      let v84 = this.native.closest(v62);
      for (; v84 && !v8.contains(v84);)
        v84 = null;
      return v43(v84);
    },
    matches: function(v62) {
      return this.native.matches(v62);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let v62 = this.native.classList;
      return v5.nativeToPseudo({
        add: (...v84) => v62.add(...v84),
        remove: (...v84) => v62.remove(...v84),
        toggle: (v84, v82) => v62.toggle(v84, v82),
        contains: v84 => v62.contains(v84),
        replace: (v84, v82) => v62.replace(v84, v82)
      });
    },
    getBoundingClientRect: function() {
      let v62 = this.native.getBoundingClientRect();
      return v5.nativeToPseudo({
        v47: v62.v47,
        v82: v62.v82,
        width: v62.width,
        height: v62.height,
        top: v62.top,
        right: v62.right,
        bottom: v62.bottom,
        left: v62.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return v5.createObjectProto(v5.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let v62 = v5.createObjectProto(v5.OBJECT_PROTO),
        v84 = this,
        v82 = null,
        v83 = null;
      return v6.settings.logCalls && console.log(v10.domain, 'play', this), v5.setProperty(v62, 'then', v5.createNativeFunction(function(L) {
        return v82 = L, v62;
      })), v5.setProperty(v62, 'catch', v5.createNativeFunction(function(L) {
        return v83 = L, v62;
      })), v84.native.play().then(() => {
        v82 && v38(v82, v5.nativeToPseudo(void 0));
      }).catch(L => {
        v83 && v38(v83, v5.nativeToPseudo({
          message: L.message,
          name: L.name
        }));
      }), v62;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(v62) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(v62 || '')) : '';
    },
    fastSeek: function(v62) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(v62) || 0));
    },
    getAnimations: function(v62) {
      if (!this.native.getAnimations)
        return v48([]);
      let v84 = v62 ? {
          subtree: !!v5.pseudoToNative(v62)?.subtree
        } : {},
        v82 = this.native.getAnimations(v84),
        v83 = v5.createObjectProto(v5.ARRAY_PROTO);
      for (let v85 = 0; v85 < v82.length; v85++)
        v83.properties[v85] = v46(v82[v85]);
      return v5.setProperty(v83, 'length', v82.length), v83;
    }
  };
  for (let [v62, v84] of Object.entries(v59))
    v5.setProperty(v55, v62, v5.createNativeFunction(v84));

  function v46(v62) {
    let v84 = v5.createObjectProto(v5.OBJECT_PROTO);
    return v5.setProperty(v84, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.id;
      })
    }), v5.setProperty(v84, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.playState;
      })
    }), v5.setProperty(v84, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.pending;
      })
    }), v5.setProperty(v84, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.replaceState;
      })
    }), v5.setProperty(v84, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.currentTime;
      }),
      set: v5.createNativeFunction(function(v82) {
        v62.currentTime = v82;
      })
    }), v5.setProperty(v84, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.playbackRate;
      }),
      set: v5.createNativeFunction(function(v82) {
        v62.playbackRate = Math.max(-10, Math.min(10, Number(v82) || 1));
      })
    }), v5.setProperty(v84, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        return v62.startTime;
      }),
      set: v5.createNativeFunction(function(v82) {
        v62.startTime = v82;
      })
    }), v5.setProperty(v84, 'play', v5.createNativeFunction(function() {
      v62.play();
    })), v5.setProperty(v84, 'pause', v5.createNativeFunction(function() {
      v62.pause();
    })), v5.setProperty(v84, 'cancel', v5.createNativeFunction(function() {
      v62.cancel();
    })), v5.setProperty(v84, 'finish', v5.createNativeFunction(function() {
      v62.finish();
    })), v5.setProperty(v84, 'reverse', v5.createNativeFunction(function() {
      v62.reverse();
    })), v5.setProperty(v84, 'updatePlaybackRate', v5.createNativeFunction(function(v82) {
      v62.updatePlaybackRate(Math.max(-10, Math.min(10, Number(v82) || 1)));
    })), v84;
  }

  function v41(v62) {
    let v84 = v5.createObjectProto(v5.OBJECT_PROTO),
      v82 = v62 ? v62.length : 0;
    return v5.setProperty(v84, 'length', v82), v5.setProperty(v84, 'start', v5.createNativeFunction(function(v83) {
      if (!v62 || v83 < 0 || v83 >= v62.length)
        throw new Error('Index out of bounds');
      return v62.start(v83);
    })), v5.setProperty(v84, 'end', v5.createNativeFunction(function(v83) {
      if (!v62 || v83 < 0 || v83 >= v62.length)
        throw new Error('Index out of bounds');
      return v62.end(v83);
    })), v84;
  }
  v5.setProperty(v55, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v41(this.native.buffered) : v41(null);
    })
  }), v5.setProperty(v55, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v41(this.native.played) : v41(null);
    })
  }), v5.setProperty(v55, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v41(this.native.seekable) : v41(null);
    })
  }), v5.setProperty(v55, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      let v62 = this.native.classList,
        v84 = v5.nativeToPseudo({});
      return v5.setProperty(v84, 'add', v5.createNativeFunction(function(...v82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        v62.add(...v82);
      })), v5.setProperty(v84, 'remove', v5.createNativeFunction(function(...v82) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        v62.remove(...v82);
      })), v5.setProperty(v84, 'toggle', v5.createNativeFunction(function(v82, v83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return v62.toggle(v82, v83);
      })), v5.setProperty(v84, 'contains', v5.createNativeFunction(function(v82) {
        return v62.contains(v82);
      })), v5.setProperty(v84, 'replace', v5.createNativeFunction(function(v82, v83) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return v62.replace(v82, v83);
      })), v84;
    })
  }), v5.setProperty(v55, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      let v62 = this.native.style,
        v84 = v5.nativeToPseudo({}),
        v82 = [
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
      for (let v83 of v82)
        v5.setProperty(v84, v83, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: v5.createNativeFunction(function() {
            return v62[v83];
          }),
          set: v5.createNativeFunction(function(v85) {
            v62[v83] = v85, v6.settings.logCalls && console.log(v10.domain, 'set style', this, v83, v85);
          })
        });
      return v5.setProperty(v84, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v5.createNativeFunction(function() {
          return v62.cssText;
        }),
        set: v5.createNativeFunction(function(v83) {
          v62.cssText = v83, v6.settings.logCalls && console.log(v10.domain, 'set cssText', this, v83);
        })
      }), v5.setProperty(v84, 'setProperty', v5.createNativeFunction(function(v83, v85, O) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        v62.setProperty(v83, v85, O), v6.settings.logCalls && console.log(v10.domain, 'setProperty', this, v83, v85, O);
      })), v5.setProperty(v84, 'getPropertyValue', v5.createNativeFunction(function(v83) {
        return v62.getPropertyValue(v83);
      })), v5.setProperty(v84, 'removeProperty', v5.createNativeFunction(function(v83) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return v6.settings.logCalls && console.log(v10.domain, 'removeProperty', this, v83), v62.removeProperty(v83);
      })), v84;
    })
  }), v5.setProperty(v55, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      let v62 = this.native.dataset,
        v84 = v5.nativeToPseudo({});
      for (let v82 in v62)
        v5.setProperty(v84, v82, v62[v82]);
      return v5.setProperty(v84, 'get', v5.createNativeFunction(function(v82) {
        return v62[v82];
      })), v5.setProperty(v84, 'set', v5.createNativeFunction(function(v82, v83) {
        v62[v82] = String(v83).slice(0, 1000), v6.settings.logCalls && console.log(v10.domain, 'set dataset', this, v82, v83);
      })), v5.setProperty(v84, 'delete', v5.createNativeFunction(function(v82) {
        delete v62[v82], v6.settings.logCalls && console.log(v10.domain, 'delete dataset', this, v82);
      })), v5.setProperty(v84, 'has', v5.createNativeFunction(function(v82) {
        return v82 in v62;
      })), v84;
    })
  }), v5.setProperty(v55, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return v43(v45(this.native.offsetParent));
    })
  });
  let v37 = [
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

  function v47(v62) {
    let v84 = v5.nativeToPseudo({}),
      v82 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let v83 of v82)
      v5.setProperty(v84, v83, v62[v83]);
    if (v62 instanceof MouseEvent || v62 instanceof PointerEvent) {
      let v83 = [
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
      for (let v85 of v83)
        v5.setProperty(v84, v85, v62[v85]);
    }
    if (v62 instanceof KeyboardEvent) {
      let v83 = [
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
      for (let v85 of v83)
        v5.setProperty(v84, v85, v62[v85]);
    }
    return typeof TouchEvent == 'function' && v62 instanceof TouchEvent && (v5.setProperty(v84, 'touches', v5.nativeToPseudo({
      length: v62.touches.length
    })), v5.setProperty(v84, 'changedTouches', v5.nativeToPseudo({
      length: v62.changedTouches.length
    }))), typeof WheelEvent == 'function' && v62 instanceof WheelEvent && (v5.setProperty(v84, 'deltaX', v62.deltaX), v5.setProperty(v84, 'deltaY', v62.deltaY), v5.setProperty(v84, 'deltaZ', v62.deltaZ), v5.setProperty(v84, 'deltaMode', v62.deltaMode)), v62.target && v44(v62.target) && v5.setProperty(v84, 'target', v43(v62.target)), v62.currentTarget && v44(v62.currentTarget) && v5.setProperty(v84, 'currentTarget', v43(v62.currentTarget)), v5.setProperty(v84, 'preventDefault', v5.createNativeFunction(function() {
      v62.preventDefault();
    })), v5.setProperty(v84, 'stopPropagation', v5.createNativeFunction(function() {
      v62.stopPropagation();
    })), v5.setProperty(v84, 'stopImmediatePropagation', v5.createNativeFunction(function() {
      v62.stopImmediatePropagation();
    })), v84;
  }
  v5.setProperty(v55, 'addEventListener', v5.createNativeFunction(function(v62, v84) {
    if (!v62 || typeof v62 != 'string' || !v84 || typeof v84 != 'object')
      return;
    if (v62 = v62.toLowerCase(), !v37.includes(v62))
      throw new Error(`Event type "${ v62 }" is not allowed`);
    v6.settings.logCalls && console.log(v10.domain, 'addEventListener', this, v62, v84);
    let v82 = this.native;
    v36.has(v82) || v36.set(v82, new Map());
    let v83 = v36.get(v82);
    v83.has(v62) || v83.set(v62, []);
    let v85 = v83.get(v62);
    if (v85.length >= v26)
      throw new Error(`Maximum listeners (${ v26 }) reached for event "${ v62 }"`);
    if (v85.some(U => U.pseudo === v84))
      return;
    let v86 = function(U) {
      let v87 = v47(U);
      v38(v84, v87);
    };
    v85.push({
      pseudo: v84,
      native: v86
    }), v82.addEventListener(v62, v86);
  })), v5.setProperty(v55, 'removeEventListener', v5.createNativeFunction(function(v62, v84) {
    if (!v62 || typeof v62 != 'string' || !v84 || typeof v84 != 'object')
      return;
    v6.settings.logCalls && console.log(v10.domain, 'removeEventListener', this, v62, v84), v62 = v62.toLowerCase();
    let v82 = this.native;
    if (!v36.has(v82))
      return;
    let v83 = v36.get(v82);
    if (!v83.has(v62))
      return;
    let v85 = v83.get(v62),
      v86 = v85.findIndex(U => U.pseudo === v84);
    v86 !== -1 && (v82.removeEventListener(v62, v85[v86].native), v85.splice(v86, 1));
  }));
  let v63 = [
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
  for (let v62 of v63) {
    let v84 = 'on' + v62;
    v5.setProperty(v55, v84, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v5.createNativeFunction(function() {
        let v82 = this.native;
        if (!v36.has(v82))
          return null;
        let v83 = v36.get(v82),
          v85 = `__${ v84 }`;
        return v83.get(v85) || null;
      }),
      set: v5.createNativeFunction(function(v82) {
        let v83 = this.native;
        v36.has(v83) || v36.set(v83, new Map());
        let v85 = v36.get(v83),
          v86 = `__${ v84 }`;
        v6.settings.logCalls && console.log(v10.domain, 'setOn' + v62, this, v82);
        let v88 = v85.get(v86 + '_native');
        if (v88 && (v83.removeEventListener(v62, v88), v85.delete(v86), v85.delete(v86 + '_native')), v82 && typeof v82 == 'object') {
          let v87 = function(Ke) {
            let v89 = v47(Ke);
            v38(v82, v89);
          };
          v83.addEventListener(v62, v87), v85.set(v86, v82), v85.set(v86 + '_native', v87);
        }
      })
    });
  }
  v35(v5, v9, v10).extendElement(v55, v43), v64(v5, v9, v10), v79(v5, v9, v10.domain), v80(v5, v9, v8, v10);
  let v61 = v5.nativeToPseudo({});
  v5.setProperty(v9, 'document', v61);
  let v90 = {
    getElementById: function(v62) {
      let v84 = v8.querySelector(`#${ CSS.escape(v62) }`);
      return v43(v84);
    },
    getElementsByClassName: function(v62) {
      let v84 = Array.from(v8.getElementsByClassName(v62));
      return v48(v84);
    },
    getElementsByTagName: function(v62) {
      let v84 = Array.from(v8.getElementsByTagName(v62));
      return v48(v84);
    },
    querySelector: function(v62) {
      return v43(v8.querySelector(v62));
    },
    querySelectorAll: function(v62) {
      let v84 = Array.from(v8.querySelectorAll(v62));
      return v48(v84);
    },
    createElement: function(v62) {
      if (typeof v62 != 'string')
        throw new Error('Invalid tag');
      if (v62 = v62.toLowerCase().trim(), [
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
        ].includes(v62))
        throw new Error('Creating ' + v62 + ' elements is not allowed');
      return v6.settings.logCalls && console.log(v10.domain, 'createElement', this, v62), v43(document.createElement(v62));
    },
    createTextNode: function(v62) {
      return v6.settings.logCalls && console.log(v10.domain, 'createTextNode', this, v62), v43(document.createTextNode(v62));
    }
  };
  for (let [v62, v84] of Object.entries(v90))
    v5.setProperty(v61, v62, v5.createNativeFunction(v84));
  v5.setProperty(v61, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return v6.settings.logCalls && console.log(v10.domain, 'get body', this), v43(v8);
    })
  }), v5.setProperty(v61, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return v6.settings.logCalls && console.log(v10.domain, 'get documentElement', this), v43(v8);
    })
  });
  let v91 = v5.nativeToPseudo({});
  v5.setProperty(v9, 'location', v91), v5.setProperty(v91, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v5.createNativeFunction(function() {
      return `/t/${ v10.domain }${ v10.path }`;
    }),
    set: v5.createNativeFunction(function(v62) {
      if (typeof v62 == 'string') {
        v6.settings.logCalls && console.log(v10.domain, 'set href', this, v62);
        try {
          let v84 = new URL(v62, `http://${ v10.domain }`);
          if (v84.hostname && v84.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let v82 = v84.pathname + v84.search + v84.hash;
          if (v82.startsWith(`/t/${ v10.domain }/`) ? v82 = v82.substring(`/t/${ v10.domain }`.length) : v82 === `/t/${ v10.domain }` && (v82 = '/'), v82.startsWith('/') || (v82 = '/' + v82), v82.endsWith('.html') || v82 === '/' || v82 === '')
            v10.fetchContent(v82 || '/index.html'), v10.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (v84) {
          if (v84.message.includes('not allowed') || v84.message.includes('Only HTML'))
            throw v84;
          let v82 = v62;
          if (v82.startsWith('/') || (v82 = '/' + v82), v82.endsWith('.html') || v82 === '/' || v82 === '')
            v10.fetchContent(v82 || '/index.html').then(() => v10.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), v5.setProperty(v91, 'reload', v5.createNativeFunction(function() {
    v10.fetchContent(v10.path, !0).then(() => v10.setActive(!0));
  }));
}
var v92 = {
    console: {
      log: function(...v5) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...v5);
      },
      error: function(...v5) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...v5);
      },
      warn: function(...v5) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...v5);
      }
    },
    alert(v5) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ v5 }`);
    },
    prompt(v5) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ v5 }`);
    },
    confirm(v5) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ v5 }`);
    },
    atob(v5) {
      return atob(v5);
    },
    btoa(v5) {
      return btoa(v5);
    }
  },
  v93 = class {
    constructor(v9) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = v9, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (v8, v10) => {
        let v11 = (v29, v26) => {
          for (let [v36, v27] of Object.entries(v29))
            if (typeof v27 == 'function')
              v8.setProperty(v26, v36, v8.createNativeFunction(v27.bind(this)));
            else if (typeof v27 == 'object' && v27 !== null) {
            let v28 = v8.nativeToPseudo({});
            v11(v27, v28), v8.setProperty(v26, v36, v28);
          }
        };
        v11(v92, v10), v81(v8, v10, this.tile.contentElement, this.tile), v8.setProperty(v10, 'embedded', v8.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let v9 = new Set(),
        v8 = [this.interpreter.getStateStack()],
        v10 = 0;
      for (; v8.length;) {
        let v11 = v8.pop(),
          v29 = typeof v11;
        if (v10 += 8, v29 === 'string' && !v9.has(v11))
          v9.add(v11), v10 += v11.length * 2;
        else if (v29 === 'object' && v11 !== null && !v9.has(v11)) {
          v9.add(v11);
          try {
            v8.push(...Object.keys(v11), ...Object.values(v11));
          } catch {}
        }
      }
      return v10;
    }
    start() {
      this.running || v6.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let v9 = 0; v9 < 5000; v9++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let v8 = this.roughValueMemorySize();
                if (v8 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ v8 } bytes`);
                  break;
                }
              }
            } catch (v8) {
              console.error(v8), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(v9) {
      v6.settings.disableJS || this.interpreter.appendCode(v9);
    }
  },
  v94 = v93;
var v95 = document.getElementById('plot'),
  v96 = new CSSStyleSheet(),
  v97 = () => {
    v96.replaceSync(`
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
v97();
var v98 = new CSSStyleSheet();
v98.replaceSync(`
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
var v99 = class v5 {
  constructor(v9) {
    this.v47 = v9.v47 ?? 0, this.v82 = v9.v82 ?? 0, this.domain = v9.domain, this.free = !v9.domain, this.locked = !1, this.id = `${ this.v47 },${ this.v82 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = v9.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = v9.nocontrols || !1, this.embed = v9.embed || !1, this.container = v9.container || v95, this.interpreter = null, this.render();
  }
  static toTilePosition(v9, v8) {
    return {
      v47: Math.floor(v9 / 250),
      v82: Math.floor(v8 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let v9 = document.createElement('div');
    v9.classList.add('tile'), this.free && v9.classList.add('f'), this.preview ? v9.style.cssText = 'width: 100%; height: 100%; position: relative;' : (v9.style.left = `${ this.v47 * 250 }px`, v9.style.top = `${ this.v82 * 250 }px`, this.v47 % 10 === 0 && v9.classList.add('b-left'), this.v82 % 10 === 0 && v9.classList.add('b-top')), this.element = v9;
    let v8 = document.createElement('div');
    v8.classList.add('tile-content'), this.preview && (v8.style.cssText = 'width: 100%; height: 100%;'), v8.addEventListener('click', async v11 => {
      let v29 = v11.composedPath()?.filter(v28 => v28 instanceof Element);
      if (!v29)
        return;
      let v26 = v29.findIndex(v28 => v28.isSameNode(v8));
      if (v26 === -1)
        return;
      let v27 = v29.slice(0, v26).find(v28 => v28.tagName === 'A');
      if (v27) {
        v11.preventDefault();
        try {
          let v28 = new URL(v27.href);
          if (v28.hostname !== location.hostname) {
            let v39 = document.createElement('a');
            v39.href = v27.href, v39.target = '_blank', v39.click();
            return;
          }
          let v38 = v28.pathname;
          if (v38.startsWith(`/t/${ this.domain }/`) || (v38 = `/t/${ this.domain }/${ v38 }`.replaceAll('//', '/')), v38.startsWith(`/t/${ this.domain }`) && (v38.endsWith('.html') || v38 === `/t/${ this.domain }/` || v38 === `/t/${ this.domain }`))
            await this.fetchContent(v38.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let v39 = document.createElement('a');
            v39.href = v27.href, v39.target = '_blank', v39.click();
          }
        } catch (v28) {
          console.error(v28);
        }
      }
    }), this.shadow = v8.attachShadow({
      mode: 'open'
    });
    let v10 = document.createElement('div');
    v10.className = 'tile-body', this.embed && v10.classList.add('embedded'), v10.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = v10, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.v47 }, ${ this.v82 }...`, this.shadow.appendChild(v10), v9.appendChild(v8), this.fonts = document.createElement('style'), v9.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(v9), v6.plot?.lockCache[this.v47 + ',' + this.v82] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(v9, v8 = !1) {
    v9.startsWith('/') || (v9 = '/' + v9);
    let v10 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.v47 }, ${ this.v82 }</p>
            </div>` : this.path === v9 && this.content && !v8 ? this.content : await fetch(`/t/${ this.domain }${ v9 }`).then(v26 => v26.text()).catch(v26 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [v98] : this.shadow.adoptedStyleSheets = [v96], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = v9, this.contentElement.innerHTML = v10, this.content = v10;
    let v11 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let v29 = 0;
    for (let v26 of v11) {
      if (v29 >= 3)
        break;
      let v36 = v26.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (v36)
        for (let v27 of v36) {
          if (v29 >= 3)
            break;
          this.fonts.textContent += v27, v29++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let v9 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let v8 of v9)
      this.interpreter.runCode(v8.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(v9) {
    if (this.element && (v9 && (this.interpreter || (this.interpreter = new v94(this), this.executeScripts()), this.interpreter.start()), v9 !== this.active)) {
      if (this.active = v9, v9) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && v6.ui) {
          let v10 = v6.ui.createVoteMenu(this);
          v10 && this.element.appendChild(v10);
          let v11 = v6.ui.createTileControl(this);
          if (this.element.appendChild(v11), v6.user?.admin || v6.user?.moderator) {
            let v29 = v6.ui.createAdminControl(this);
            this.element.appendChild(v29);
          }
          v6.plot?.activeTile && v6.plot.activeTile.setActive(!1), v6.plot && (v6.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let v8 = this.contentElement.querySelectorAll('audio, video');
        for (let v10 of v8)
          v10.dataset.webtilesPaused === 'true' && (v10.dataset.webtilesPaused = !1, v10.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), v6.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), v6.plot && (v6.plot.activeTile = null)), v5.clearClanBorders();
        let v8 = this.contentElement.querySelectorAll('audio, video');
        for (let v10 of v8)
          v10.paused || (v10.dataset.webtilesPaused = !0, v10.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let v8 = await (await v6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!v8.success || !v8.clan)
          return;
        let v10 = v8.clan.members;
        if (!v10 || v10.length <= 1)
          return;
        let v11 = new Set(v10.map(v29 => `${ v29.v47 },${ v29.v82 }`));
        for (let v29 of v10) {
          let v26 = v6.plot.tiles[`${ v29.v47 },${ v29.v82 }`];
          if (!v26?.element)
            continue;
          v26.element.classList.add('clan-highlight');
          let v36 = v11.has(`${ v29.v47 },${ v29.v82 - 1 }`),
            v27 = v11.has(`${ v29.v47 },${ v29.v82 + 1 }`),
            v28 = v11.has(`${ v29.v47 - 1 },${ v29.v82 }`),
            v38 = v11.has(`${ v29.v47 + 1 },${ v29.v82 }`);
          if (!v36) {
            let v39 = document.createElement('div');
            v39.className = 'clan-border clan-border-top', v26.element.appendChild(v39);
          }
          if (!v27) {
            let v39 = document.createElement('div');
            v39.className = 'clan-border clan-border-bottom', v26.element.appendChild(v39);
          }
          if (!v28) {
            let v39 = document.createElement('div');
            v39.className = 'clan-border clan-border-left', v26.element.appendChild(v39);
          }
          if (!v38) {
            let v39 = document.createElement('div');
            v39.className = 'clan-border clan-border-right', v26.element.appendChild(v39);
          }
        }
      } catch (v9) {
        console.error('Failed to fetch clan borders:', v9);
      }
  }
  static clearClanBorders() {
    if (v6.plot?.tiles)
      for (let v9 of Object.values(v6.plot.tiles))
        v9.element && (v9.element.classList.remove('clan-highlight'), v9.element.querySelectorAll('.clan-border').forEach(v10 => v10.remove()));
  }
  setDomain(v9) {
    this.domain = v9, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(v9) {
    this.locked = v9, this.element && this.element.classList.toggle('locked', v9), this.fetchContent('/index.html', !0);
  }
};
v6.ui = {
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
  createElement: (v5, v9 = {}) => {
    let v8 = document.createElement(v5);
    for (let [v10, v11] of Object.entries(v9))
      v10 === 'innerText' ? v8.innerText = v11 : v10 === 'innerHTML' ? v8.innerHTML = v11 : v10.startsWith('on') ? v8.addEventListener(v10.slice(2).toLowerCase(), v11) : v8.setAttribute(v10, v11);
    return v8;
  },
  escapeHTML: v5 => v5 ? v5.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '',
  showDashboard: v5 => {
    Ye.src = `/dashboard?site=${ encodeURIComponent(v5) }&path=/`, We && (We.textContent = `File Manager - ${ v5 }`), Ve.classList.add('active'), fe && (fe.style.display = 'none'), v6.camera && v6.camera.setZoomEnabled(!1), v6.ws?.isConnected && setTimeout(() => {
      let v9 = new Int16Array(3);
      v9[0] = 0, v9[1] = 0, v9[2] = 0, v6.ws.send(v9.buffer);
    }, 100);
  },
  showClaimModal: v5 => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let v9 = v6.user.selectedSite;
    if (!v9) {
      alert('Please select a site first');
      return;
    }
    let v8 = v9.domain,
      v10 = v9.tile ? `<strong>Warning</strong>Your current tile at (${ v9.tile.v47 }, ${ v9.tile.v82 }) will be unclaimed and your site will be moved to this new tile.` : null;
    new v12({
      title: 'Claim Tile',
      content: `<p>Do you want to claim tile (${ v5.v47 }, ${ v5.v82 }) for <strong>${ v6.ui.escapeHTML(v8) }</strong>?</p>`,
      warning: v10,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: v29 => v29.close()
        },
        {
          text: 'Claim',
          type: 'confirm',
          id: 'confirm',
          onClick: async v29 => {
            v29.setButtonLoading('confirm', !0, 'Claiming...');
            try {
              let v36 = await (await v6.api.makeRequest('/api/claim', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82
                })
              })).json();
              if (v36.success) {
                if (v6.user.selectedSite) {
                  if (v6.user.selectedSite.tile) {
                    let v27 = v6.plot.getTile(v6.user.selectedSite.tile.v47, v6.user.selectedSite.tile.v82);
                    v27 && v27.setFree();
                  }
                  v6.user.selectedSite.tile = {
                    v47: v5.v47,
                    v82: v5.v82,
                    code: v36.code,
                    domain: v6.user.selectedSite.domain,
                    created_at: Date.now()
                  };
                }
                setTimeout(() => {
                  v5.setDomain(v6.user.selectedSite.domain), v5.setActive(!1), v5.element && v5.element.classList.toggle('locked', !1);
                }, 400), v29.close(), Q();
              } else
                alert(v36.error || 'Failed to claim tile'), v29.setButtonLoading('confirm', !1);
            } catch (v26) {
              console.error(v26), alert('Failed to claim tile: ' + v26.message), v29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showUnlockModal: v5 => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let v9 = v6.user.selectedSite;
    if (!v9) {
      alert('Please select a site first');
      return;
    }
    let v8 = v9.domain,
      v10 = v9.tile ? `<strong>Warning</strong>Your current tile at (${ v9.tile.v47 }, ${ v9.tile.v82 }) will be unclaimed and your site will be moved to this new tile.` : null,
      v11 = new v12({
        title: 'Unlock & Claim Tile',
        content: `
                <p>Enter the unlock code to claim the tile at (${ v5.v47 }, ${ v5.v82 }) for <strong>${ v6.ui.escapeHTML(v8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="unlock-code-input" class="modal-input" placeholder="Enter unlock code..." autocomplete="off" />
                </div>
            `,
        warning: v10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: v29 => v29.close()
          },
          {
            text: 'Unlock & Claim',
            type: 'confirm',
            id: 'confirm',
            onClick: async v29 => {
              let v36 = v11.element.querySelector('#unlock-code-input').value.trim();
              if (!v36) {
                alert('Please enter a code');
                return;
              }
              v29.setButtonLoading('confirm', !0, 'Unlocking...');
              try {
                let v28 = await (await v6.api.makeRequest('/api/claim', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    v47: v5.v47,
                    v82: v5.v82,
                    code: v36
                  })
                })).json();
                if (v28.success) {
                  if (delete v6.plot.lockCache[v5.v47 + ',' + v5.v82], v6.user.selectedSite) {
                    if (v6.user.selectedSite.tile) {
                      let v38 = v6.plot.getTile(v6.user.selectedSite.tile.v47, v6.user.selectedSite.tile.v82);
                      v38 && v38.setFree();
                    }
                    v6.user.selectedSite.tile = {
                      v47: v5.v47,
                      v82: v5.v82,
                      code: v28.code,
                      domain: v6.user.selectedSite.domain,
                      created_at: Date.now()
                    };
                  }
                  v5.setDomain(v6.user.selectedSite.domain), v5.setActive(!1), v29.close(), Q();
                } else
                  alert(v28.error || 'Failed to unlock tile'), v29.setButtonLoading('confirm', !1);
              } catch (v27) {
                console.error(v27), alert('Failed to unlock tile: ' + v27.message), v29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    v11.open(), setTimeout(() => {
      let v29 = v11.element.querySelector('#unlock-code-input');
      v29 && v29.focus();
    }, 100);
  },
  updateClanIndicator: () => {
    v6.ui.clanIndicator && (v6.ui.clanIndicator.hidden = v6.ui.pendingClanInvites.length === 0);
  },
  fetchClanInvites: async () => {
    if (!(!v6.user || !v6.user.selectedSite))
      try {
        let v9 = await (await v6.api.makeRequest('/api/clans/invites')).json();
        v9.success && (v6.ui.pendingClanInvites = v9.invites || [], v6.ui.updateClanIndicator());
      } catch (v5) {
        console.error('Failed to fetch clan invites:', v5);
      }
  },
  showClanModal: async () => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!v6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    let v5 = new v12({
      title: 'Clan Management',
      content: '<p>Loading...</p>',
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: v9 => v9.close()
      }]
    });
    v5.open();
    try {
      let [v9, v8] = await Promise.all([
        v6.api.makeRequest('/api/clans/current'),
        v6.api.makeRequest('/api/clans/invites')
      ]), v10 = await v9.json(), v11 = await v8.json();
      v6.ui.pendingClanInvites = v11.invites || [], v6.ui.updateClanIndicator();
      let v29 = v6.user?.admin || v6.user?.moderator;
      v10.success && v10.clan ? v6.ui.renderClanInfo(v5, v10.clan, v29) : v6.ui.renderNoClan(v5, v11.invites || [], v29);
    } catch (v9) {
      console.error(v9), v5.setContent('<p>Failed to load clan data: ' + v6.ui.escapeHTML(v9.message) + '</p>');
    }
  },
  renderClanInfo: (v5, v9, v8) => {
    let v10 = `
            <div class="clan-name-display">${ v6.ui.escapeHTML(v9.name) }</div>
            <div class="clan-stats">${ v9.members.length }/5 members. ${ v9.members.length < 3 ? 'Unprotected! Reach 3 members to protect your tiles.' : 'Your tiles are protected.' }</div>
        `;
    v10 += `<div class="clan-section">
            <div class="clan-section-title">Members</div>
            <div class="clan-members-list">`;
    for (let v38 of v9.members) {
      let v39 = v38.domain === v6.user.sites.find(v40 => v40.tile?.v47 === v38.v47 && v40.tile?.v82 === v38.v82)?.domain;
      v10 += `<div class="clan-member-item">
                <span class="clan-member-domain">${ v6.ui.escapeHTML(v38.domain) }</span>
                <div>`, v9.isOwner && v38.domain !== v6.user.selectedSite?.domain && (v10 += `<button class="clan-member-kick" data-domain="${ v6.ui.escapeHTML(v38.domain) }">Kick</button>`), v10 += `</div>
            </div>`;
    }
    if (v10 += '</div></div>', v9.isOwner && v9.pendingInvites && v9.pendingInvites.length > 0) {
      v10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-pending-list">`;
      for (let v38 of v9.pendingInvites)
        v10 += `<div class="clan-pending-item">
                    <span>${ v6.ui.escapeHTML(v38.domain) }</span>
                    <button class="clan-pending-cancel" data-invite="${ v38.id }">Cancel</button>
                </div>`;
      v10 += '</div></div>';
    }
    v9.isOwner && v9.members.length < 5 && (v10 += `<div class="clan-section">
                <div class="clan-section-title">Invite Neighboring Tile</div>
                <div class="code-input-container" style="margin: 5px 0;">
                    <input type="text" id="clan-invite-domain" class="modal-input" placeholder="Enter domain..." autocomplete="off" style="font-family: inherit;" />
                </div>
                <button class="modal-btn modal-btn-confirm" id="clan-invite-btn" style="margin-top: 5px;">Send Invite</button>
            </div>`), v8 && (v10 += `<div class="clan-section">
                <div class="clan-section-title">Admin Tools</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), v5.setContent(v10);
    let v11 = [{
      text: 'Close',
      type: 'cancel',
      id: 'close',
      onClick: v38 => v38.close()
    }];
    v9.isOwner ? v11.unshift({
      text: 'Disband Clan',
      type: 'cancel',
      id: 'disband',
      onClick: async v38 => {
        if (confirm('Are you sure you want to disband this clan?')) {
          v38.setButtonLoading('disband', !0, 'Disbanding...');
          try {
            let v40 = await (await v6.api.makeRequest('/api/clans/disband', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            v40.success ? (v38.close(), v6.ui.showClanModal()) : (alert(v40.error || 'Failed to disband clan'), v38.setButtonLoading('disband', !1));
          } catch (v39) {
            alert('Failed to disband clan: ' + v39.message), v38.setButtonLoading('disband', !1);
          }
        }
      }
    }) : v11.unshift({
      text: 'Leave Clan',
      type: 'cancel',
      id: 'leave',
      onClick: async v38 => {
        if (confirm('Are you sure you want to leave this clan?')) {
          v38.setButtonLoading('leave', !0, 'Leaving...');
          try {
            let v40 = await (await v6.api.makeRequest('/api/clans/leave', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })).json();
            v40.success ? (v38.close(), v6.ui.showClanModal()) : (alert(v40.error || 'Failed to leave clan'), v38.setButtonLoading('leave', !1));
          } catch (v39) {
            alert('Failed to leave clan: ' + v39.message), v38.setButtonLoading('leave', !1);
          }
        }
      }
    }), v5.buttons = v11;
    let v29 = v5.element.querySelector('.modal-actions');
    v29.innerHTML = '', v5._buttonElements.clear();
    for (let v38 of v5.buttons)
      v29.appendChild(v5._createButton(v38));
    v5.element.querySelectorAll('.clan-member-kick').forEach(v38 => {
      v38.addEventListener('click', async () => {
        let v39 = v38.dataset.domain;
        if (confirm(`Are you sure you want to kick ${ v39 }?`)) {
          v38.disabled = !0, v38.textContent = '...';
          try {
            let v42 = await (await v6.api.makeRequest('/api/clans/kick', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                domain: v39
              })
            })).json();
            v42.success ? (v6.ui.showClanModal(), v5.close()) : (alert(v42.error || 'Failed to kick member'), v38.disabled = !1, v38.textContent = 'Kick');
          } catch (v40) {
            alert('Failed to kick member: ' + v40.message), v38.disabled = !1, v38.textContent = 'Kick';
          }
        }
      });
    }), v5.element.querySelectorAll('.clan-pending-cancel').forEach(v38 => {
      v38.addEventListener('click', async () => {
        let v39 = v38.dataset.invite;
        v38.disabled = !0, v38.textContent = '...';
        try {
          let v42 = await (await v6.api.makeRequest('/api/clans/cancel-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(v39)
            })
          })).json();
          v42.success ? v38.closest('.clan-pending-item').remove() : (alert(v42.error || 'Failed to cancel invite'), v38.disabled = !1, v38.textContent = 'Cancel');
        } catch (v40) {
          alert('Failed to cancel invite: ' + v40.message), v38.disabled = !1, v38.textContent = 'Cancel';
        }
      });
    });
    let v26 = v5.element.querySelector('#clan-invite-btn'),
      v36 = v5.element.querySelector('#clan-invite-domain');
    v26 && v36 && v26.addEventListener('click', async () => {
      let v38 = v36.value.trim();
      if (!v38) {
        alert('Please enter a domain');
        return;
      }
      v26.disabled = !0, v26.textContent = 'Sending...';
      try {
        let v40 = await (await v6.api.makeRequest('/api/clans/invite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            domain: v38
          })
        })).json();
        v40.success ? (v36.value = '', v6.ui.showClanModal(), v5.close()) : (alert(v40.error || 'Failed to send invite'), v26.disabled = !1, v26.textContent = 'Send Invite');
      } catch (v39) {
        alert('Failed to send invite: ' + v39.message), v26.disabled = !1, v26.textContent = 'Send Invite';
      }
    });
    let v27 = v5.element.querySelector('#clan-admin-invites-btn');
    v27 && v27.addEventListener('click', () => {
      v5.close(), setTimeout(() => v6.ui.showAdminInvitesModal(), 50);
    });
    let v28 = v5.element.querySelector('#clan-admin-clans-btn');
    v28 && v28.addEventListener('click', () => {
      v5.close(), setTimeout(() => v6.ui.showAdminClansModal(), 50);
    });
  },
  renderNoClan: (v5, v9, v8) => {
    let v10 = '';
    if (v9.length > 0) {
      v10 += `<div class="clan-section">
                <div class="clan-section-title">Pending Invites</div>
                <div class="clan-invites-list">`;
      for (let v27 of v9)
        v10 += `<div class="clan-invite-item">
                    <span class="clan-invite-info">
                        Clan: <strong>${ v6.ui.escapeHTML(v27.clan_name) }</strong>
                        ${ v27.inviter_domain ? `<br><span style="font-size: 11px; color: #888;">Invited by: ${ v6.ui.escapeHTML(v27.inviter_domain) }</span>` : '' }
                    </span>
                    <div class="clan-invite-actions">
                        <button class="clan-invite-accept" data-invite="${ v27.id }">Accept</button>
                        <button class="clan-invite-reject" data-invite="${ v27.id }">Reject</button>
                    </div>
                </div>`;
      v10 += '</div></div>';
    }
    v10 += `<div class="clan-section">
            <div class="clan-section-title">Create a New Clan</div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">Create a clan to group neighboring tiles together (max 5 tiles).</p>
            <div class="code-input-container" style="margin: 5px 0;">
                <input type="text" id="clan-create-name" class="modal-input" placeholder="Clan name (3-20 chars, alphanumeric)" autocomplete="off" style="font-family: inherit;" maxlength="20" />
            </div>
            <button class="modal-btn modal-btn-confirm" id="clan-create-btn" style="margin-top: 5px;">Create Clan</button>
        </div>`, v8 && (v10 += `<div class="clan-section">
                <div class="clan-section-title">Admin: Manage Invites</div>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-invites-btn">View All Invites</button>
                <button class="modal-btn modal-btn-cancel" id="clan-admin-clans-btn" style="margin-left: 5px;">View All Clans</button>
            </div>`), v5.setContent(v10), v5.element.querySelectorAll('.clan-invite-accept').forEach(v27 => {
      v27.addEventListener('click', async () => {
        let v28 = v27.dataset.invite;
        v27.disabled = !0, v27.textContent = '...';
        try {
          let v39 = await (await v6.api.makeRequest('/api/clans/accept-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(v28)
            })
          })).json();
          v39.success ? (v6.ui.pendingClanInvites = v6.ui.pendingClanInvites.filter(v40 => v40.id !== parseInt(v28)), v6.ui.updateClanIndicator(), v6.ui.showClanModal(), v5.close()) : (alert(v39.error || 'Failed to accept invite'), v27.disabled = !1, v27.textContent = 'Accept');
        } catch (v38) {
          alert('Failed to accept invite: ' + v38.message), v27.disabled = !1, v27.textContent = 'Accept';
        }
      });
    }), v5.element.querySelectorAll('.clan-invite-reject').forEach(v27 => {
      v27.addEventListener('click', async () => {
        let v28 = v27.dataset.invite;
        v27.disabled = !0, v27.textContent = '...';
        try {
          let v39 = await (await v6.api.makeRequest('/api/clans/reject-invite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              invite: parseInt(v28)
            })
          })).json();
          v39.success ? (v6.ui.pendingClanInvites = v6.ui.pendingClanInvites.filter(v40 => v40.id !== parseInt(v28)), v6.ui.updateClanIndicator(), v27.closest('.clan-invite-item').remove()) : (alert(v39.error || 'Failed to reject invite'), v27.disabled = !1, v27.textContent = 'Reject');
        } catch (v38) {
          alert('Failed to reject invite: ' + v38.message), v27.disabled = !1, v27.textContent = 'Reject';
        }
      });
    });
    let v11 = v5.element.querySelector('#clan-create-btn'),
      v29 = v5.element.querySelector('#clan-create-name');
    v11 && v29 && v11.addEventListener('click', async () => {
      let v27 = v29.value.trim();
      if (!v27) {
        alert('Please enter a clan name');
        return;
      }
      if (v27.length < 3 || v27.length > 20) {
        alert('Clan name must be between 3 and 20 characters');
        return;
      }
      if (!/^[a-zA-Z0-9\s]+$/.test(v27)) {
        alert('Clan name must only contain letters and numbers');
        return;
      }
      v11.disabled = !0, v11.textContent = 'Creating...';
      try {
        let v38 = await (await v6.api.makeRequest('/api/clans/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: v27
          })
        })).json();
        v38.success ? (v6.ui.showClanModal(), v5.close()) : (alert(v38.error || 'Failed to create clan'), v11.disabled = !1, v11.textContent = 'Create Clan');
      } catch (v28) {
        alert('Failed to create clan: ' + v28.message), v11.disabled = !1, v11.textContent = 'Create Clan';
      }
    });
    let v26 = v5.element.querySelector('#clan-admin-invites-btn');
    v26 && v26.addEventListener('click', () => {
      v5.close(), setTimeout(() => v6.ui.showAdminInvitesModal(), 50);
    });
    let v36 = v5.element.querySelector('#clan-admin-clans-btn');
    v36 && v36.addEventListener('click', () => {
      v5.close(), setTimeout(() => v6.ui.showAdminClansModal(), 50);
    });
  },
  showAdminInvitesModal: async () => {
    let v5 = new v12({
      title: 'Admin: All Clan Invites',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: v9 => {
            v9.close(), v6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: v9 => v9.close()
        }
      ]
    });
    v5.open();
    try {
      let v8 = await (await v6.api.makeRequest('/api/clans/admin/invites')).json();
      if (v8.success)
        if (v8.invites.length === 0)
          v5.setContent('<p>No pending invites.</p>');
        else {
          let v10 = '<div class="clan-invites-list" style="max-height: 300px;">';
          for (let v11 of v8.invites)
            v10 += `<div class="clan-invite-item">
                            <div>
                                <div><strong>${ v6.ui.escapeHTML(v11.domain) }</strong></div>
                                <div style="font-size: 11px; color: #888;">Clan: ${ v6.ui.escapeHTML(v11.clan_name) }</div>
                            </div>
                            <button class="clan-invite-reject" data-invite="${ v11.id }">Delete</button>
                        </div>`;
          v10 += '</div>', v5.setContent(v10), v5.element.querySelectorAll('.clan-invite-reject').forEach(v11 => {
            v11.addEventListener('click', async () => {
              let v29 = v11.dataset.invite;
              v11.disabled = !0, v11.textContent = '...';
              try {
                let v36 = await (await v6.api.makeRequest('/api/clans/admin/delete-invite', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    invite: parseInt(v29)
                  })
                })).json();
                v36.success ? v11.closest('.clan-invite-item').remove() : (alert(v36.error || 'Failed to delete invite'), v11.disabled = !1, v11.textContent = 'Delete');
              } catch (v26) {
                alert('Failed to delete invite: ' + v26.message), v11.disabled = !1, v11.textContent = 'Delete';
              }
            });
          });
        }
      else
        v5.setContent('<p>Failed to load invites: ' + v6.ui.escapeHTML(v8.error) + '</p>');
    } catch (v9) {
      v5.setContent('<p>Failed to load invites: ' + v6.ui.escapeHTML(v9.message) + '</p>');
    }
  },
  showAdminClansModal: async () => {
    let v5 = new v12({
      title: 'Admin: All Clans',
      content: '<p>Loading...</p>',
      buttons: [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: v9 => {
            v9.close(), v6.ui.showClanModal();
          }
        },
        {
          text: 'Close',
          type: 'cancel',
          id: 'close',
          onClick: v9 => v9.close()
        }
      ]
    });
    v5.open();
    try {
      let v8 = await (await v6.api.makeRequest('/api/clans/admin/clans')).json();
      if (v8.success)
        if (v8.clans.length === 0)
          v5.setContent('<p>No clans.</p>');
        else {
          let v10 = '<div class="clan-members-list" style="max-height: 300px;">';
          for (let v11 of v8.clans)
            v10 += `<div class="clan-member-item">
                            <div>
                                <div><strong>${ v6.ui.escapeHTML(v11.name) }</strong></div>
                                <div style="font-size: 11px; color: #888;">${ v11.member_count }/5 members</div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                ${ v11.owner_x !== null && v11.owner_y !== null ? `<button class="clan-jump-owner" data-x="${ v11.owner_x }" data-y="${ v11.owner_y }">Jump</button>` : '' }
                                <button class="clan-member-kick" data-clan="${ v11.id }">Disband</button>
                            </div>
                        </div>`;
          v10 += '</div>', v5.setContent(v10), v5.element.querySelectorAll('.clan-jump-owner').forEach(v11 => {
            v11.addEventListener('click', () => {
              let v29 = parseInt(v11.dataset.v47),
                v26 = parseInt(v11.dataset.v82);
              v6.camera && !isNaN(v29) && !isNaN(v26) && (v6.camera.centerOn(v29 * 250 + 250 / 2, v26 * 250 + 250 / 2), v5.close());
            });
          }), v5.element.querySelectorAll('.clan-member-kick').forEach(v11 => {
            v11.addEventListener('click', async () => {
              let v29 = v11.dataset.clan;
              if (confirm('Are you sure you want to disband this clan?')) {
                v11.disabled = !0, v11.textContent = '...';
                try {
                  let v36 = await (await v6.api.makeRequest('/api/clans/admin/disband', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      clan_id: parseInt(v29)
                    })
                  })).json();
                  v36.success ? v11.closest('.clan-member-item').remove() : (alert(v36.error || 'Failed to disband clan'), v11.disabled = !1, v11.textContent = 'Disband');
                } catch (v26) {
                  alert('Failed to disband clan: ' + v26.message), v11.disabled = !1, v11.textContent = 'Disband';
                }
              }
            });
          });
        }
      else
        v5.setContent('<p>Failed to load clans: ' + v6.ui.escapeHTML(v8.error) + '</p>');
    } catch (v9) {
      v5.setContent('<p>Failed to load clans: ' + v6.ui.escapeHTML(v9.message) + '</p>');
    }
  },
  showFreeModal: v5 => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let v9 = new v12({
      title: 'Free Tile',
      content: `
                <p>What would you like to do with the tile at (${ v5.v47 }, ${ v5.v82 })?</p>
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
        onClick: v11 => v11.close()
      }]
    });
    v9.open();
    let v8 = v9.element.querySelector('#option-transfer'),
      v10 = v9.element.querySelector('#option-free');
    v8.addEventListener('click', async () => {
      v8.disabled = !0, v10.disabled = !0, v8.innerHTML = '<strong>Loading...</strong>';
      try {
        let v29 = await (await v6.api.makeRequest('/api/getcode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            v47: v5.v47,
            v82: v5.v82
          })
        })).json();
        if (v29.success) {
          v9.setContent(`
                        <p>Share this code with another person to let them take your tile at (${ v5.v47 }, ${ v5.v82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ v6.ui.escapeHTML(v29.code) }</code>
                            <button class="btn" id="copy-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">The other person needs to select the tile and click "Take", then enter this code.</p>
                    `);
          let v26 = v9.element.querySelector('#copy-code-btn');
          v26.addEventListener('click', () => {
            navigator.clipboard.writeText(v29.code), v26.textContent = 'Copied!', setTimeout(() => {
              v26.textContent = 'Copy';
            }, 1500);
          });
        } else
          alert(v29.error || 'Failed to get tile code'), v8.disabled = !1, v10.disabled = !1, v8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      } catch (v11) {
        console.error(v11), alert('Failed to get tile code: ' + v11.message), v8.disabled = !1, v10.disabled = !1, v8.innerHTML = '<strong>\uD83D\uDD11 Transfer to Someone</strong><span>Get a code to share with another person. They can use this code to take the tile.</span>';
      }
    }), v10.addEventListener('click', () => {
      v9.setContent(`<p>Are you sure you want to free the tile at (${ v5.v47 }, ${ v5.v82 })?</p><p>The tile for <strong>${ v6.ui.escapeHTML(v5.domain) }</strong> will become available for <strong>anyone</strong> to claim.</p>`), v9.buttons = [{
          text: 'Back',
          type: 'cancel',
          id: 'back',
          onClick: v29 => {
            v29.close(), v6.ui.showFreeModal(v5);
          }
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async v29 => {
            v29.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let v36 = await (await v6.api.makeRequest('/api/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82
                })
              })).json();
              if (v36.success) {
                let v27 = v6.user.sites.find(v28 => v28.domain === v5.domain);
                v27 && (v27.tile = null), v5.setFree(), v5.setActive(!1), v29.close(), Q();
              } else
                alert(v36.error || 'Failed to free tile'), v29.setButtonLoading('confirm', !1);
            } catch (v26) {
              console.error(v26), alert('Failed to free tile: ' + v26.message), v29.setButtonLoading('confirm', !1);
            }
          }
        }
      ];
      let v11 = v9.element.querySelector('.modal-actions');
      v11.innerHTML = '', v9._buttonElements.clear();
      for (let v29 of v9.buttons)
        v11.appendChild(v9._createButton(v29));
    });
  },
  showTakeModal: v5 => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let v9 = v6.user.selectedSite;
    if (!v9) {
      alert('Please select a site first');
      return;
    }
    let v8 = v9.domain,
      v10 = v9.tile ? `<strong>Warning</strong>Your current tile at (${ v9.tile.v47 }, ${ v9.tile.v82 }) will be freed and your site will be moved to this new tile.` : null,
      v11 = new v12({
        title: 'Take Tile',
        content: `
                <p>Enter the code to take the tile at (${ v5.v47 }, ${ v5.v82 }) for <strong>${ v6.ui.escapeHTML(v8) }</strong>:</p>
                <div class="code-input-container">
                    <input type="text" id="take-code-input" class="modal-input" placeholder="Enter tile code..." autocomplete="off" />
                </div>
            `,
        warning: v10,
        buttons: [{
            text: 'Cancel',
            type: 'cancel',
            id: 'cancel',
            onClick: v29 => v29.close()
          },
          {
            text: 'Take Tile',
            type: 'confirm',
            id: 'confirm',
            onClick: async v29 => {
              let v36 = v11.element.querySelector('#take-code-input').value.trim();
              if (!v36) {
                alert('Please enter a code');
                return;
              }
              v29.setButtonLoading('confirm', !0, 'Taking...');
              try {
                let v28 = await (await v6.api.makeRequest('/api/take', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    v47: v5.v47,
                    v82: v5.v82,
                    code: v36
                  })
                })).json();
                if (v28.success) {
                  if (v6.user.selectedSite && v6.user.selectedSite.tile) {
                    let v38 = v6.plot.getTile(v6.user.selectedSite.tile.v47, v6.user.selectedSite.tile.v82);
                    v38 && v38.setFree();
                  }
                  v6.user.selectedSite && (v6.user.selectedSite.tile = {
                    v47: v5.v47,
                    v82: v5.v82,
                    domain: v6.user.selectedSite.domain,
                    created_at: Date.now()
                  }), v5.setDomain(v8), v5.setActive(!1), v29.close(), Q();
                } else
                  alert(v28.error || 'Failed to take tile'), v29.setButtonLoading('confirm', !1);
              } catch (v27) {
                console.error(v27), alert('Failed to take tile: ' + v27.message), v29.setButtonLoading('confirm', !1);
              }
            }
          }
        ]
      });
    v11.open(), setTimeout(() => {
      let v29 = v11.element.querySelector('#take-code-input');
      v29 && v29.focus();
    }, 100);
  },
  showAdminFreeModal: v5 => {
    new v12({
      title: 'Admin: Free Tile',
      content: `
                <p>Are you sure you want to <strong>free</strong> the tile at (${ v5.v47 }, ${ v5.v82 })?</p>
                <p>This will remove <strong>${ v6.ui.escapeHTML(v5.domain) }</strong> from this tile.</p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: v8 => v8.close()
        },
        {
          text: 'Free Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async v8 => {
            v8.setButtonLoading('confirm', !0, 'Freeing...');
            try {
              let v11 = await (await v6.api.makeRequest('/api/admin/free', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82
                })
              })).json();
              v11.success ? (v5.setFree(), v5.setActive(!1), v8.close()) : (alert(v11.error || 'Failed to free tile'), v8.setButtonLoading('confirm', !1));
            } catch (v10) {
              console.error(v10), alert('Failed to free tile: ' + v10.message), v8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminBanModal: v5 => {
    new v12({
      title: 'Admin: Ban User',
      content: `
                <p>Are you sure you want to <strong>ban</strong> the owner of <strong>${ v6.ui.escapeHTML(v5.domain) }</strong>?</p>
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
          onClick: v8 => v8.close()
        },
        {
          text: 'Ban User',
          type: 'confirm',
          id: 'confirm',
          onClick: async v8 => {
            v8.setButtonLoading('confirm', !0, 'Banning...');
            try {
              let v11 = await (await v6.api.makeRequest('/api/admin/ban', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82
                })
              })).json();
              v11.success ? (v5.setFree(), v5.setActive(!1), v8.close(), alert('User banned.')) : (alert(v11.error || 'Failed to ban user'), v8.setButtonLoading('confirm', !1));
            } catch (v10) {
              console.error(v10), alert('Failed to ban user: ' + v10.message), v8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockModal: (v5, v9) => {
    let v8 = v9 ? 'unlock' : 'lock',
      v10 = v9 ? 'unlocked' : 'locked';
    new v12({
      title: `Admin: ${ v9 ? 'Unlock' : 'Lock' } Tile`,
      content: `
                <p>Are you sure you want to <strong>${ v8 }</strong> the tile at (${ v5.v47 }, ${ v5.v82 })?</p>
                ${ v9 ? '<p>This tile will become available for claiming again.</p>' : '<p>This tile will be reserved and cannot be claimed by regular users.</p>' }
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: v29 => v29.close()
        },
        {
          text: v9 ? 'Unlock Tile' : 'Lock Tile',
          type: 'confirm',
          id: 'confirm',
          onClick: async v29 => {
            v29.setButtonLoading('confirm', !0, v9 ? 'Unlocking...' : 'Locking...');
            try {
              let v36 = await (await v6.api.makeRequest('/api/admin/lock', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82,
                  lock: !v9
                })
              })).json();
              v36.success ? (v9 ? delete v6.plot.lockCache[v5.v47 + ',' + v5.v82] : v6.plot.lockCache[v5.v47 + ',' + v5.v82] = !0, v29.close(), v5.setActive(!1), v5.setActive(!0)) : (alert(v36.error || `Failed to ${ v8 } tile`), v29.setButtonLoading('confirm', !1));
            } catch (v26) {
              console.error(v26), alert(`Failed to ${ v8 } tile: ` + v26.message), v29.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showAdminLockCodeModal: async v5 => {
    try {
      let v8 = await (await v6.api.makeRequest(`/api/admin/lockcode?x=${ v5.v47 }&y=${ v5.v82 }`)).json();
      if (v8.success) {
        let v10 = new v12({
          title: 'Lock Code',
          content: `
                        <p>Lock code for tile at (${ v5.v47 }, ${ v5.v82 }):</p>
                        <div class="code-display">
                            <code id="lock-code">${ v6.ui.escapeHTML(v8.code) }</code>
                            <button class="btn" id="copy-lock-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">Share this code to allow someone to claim this locked tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: v29 => v29.close()
          }]
        });
        v10.open();
        let v11 = v10.element.querySelector('#copy-lock-code-btn');
        v11.addEventListener('click', () => {
          navigator.clipboard.writeText(v8.code), v11.textContent = 'Copied!', setTimeout(() => {
            v11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(v8.error || 'Failed to get lock code');
    } catch (v9) {
      console.error(v9), alert('Failed to get lock code: ' + v9.message);
    }
  },
  showAdminTileCodeModal: async v5 => {
    try {
      let v8 = await (await v6.api.makeRequest(`/api/admin/tilecode?x=${ v5.v47 }&y=${ v5.v82 }`)).json();
      if (v8.success) {
        let v10 = new v12({
          title: 'Tile Secret Code',
          content: `
                        <p>Secret code for tile at (${ v5.v47 }, ${ v5.v82 }):</p>
                        <div class="code-display">
                            <code id="tile-code">${ v6.ui.escapeHTML(v8.code) }</code>
                            <button class="btn" id="copy-tile-code-btn">Copy</button>
                        </div>
                        <p class="modal-hint">This is the secret code for this tile. Share it to allow someone to take this tile.</p>
                    `,
          buttons: [{
            text: 'Close',
            type: 'cancel',
            id: 'close',
            onClick: v29 => v29.close()
          }]
        });
        v10.open();
        let v11 = v10.element.querySelector('#copy-tile-code-btn');
        v11.addEventListener('click', () => {
          navigator.clipboard.writeText(v8.code), v11.textContent = 'Copied!', setTimeout(() => {
            v11.textContent = 'Copy';
          }, 1500);
        });
      } else
        alert(v8.error || 'Failed to get tile code');
    } catch (v9) {
      console.error(v9), alert('Failed to get tile code: ' + v9.message);
    }
  },
  showAdminSwapModal: v5 => {
    let v9 = new v12({
      title: 'Admin: Swap Tiles',
      content: `
                <p>Enter the coordinates of the tile to swap with tile at (${ v5.v47 }, ${ v5.v82 }):</p>
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
          onClick: v8 => v8.close()
        },
        {
          text: 'Swap',
          type: 'confirm',
          id: 'confirm',
          onClick: async v8 => {
            let v10 = v9.element.querySelector('#swap-x-input'),
              v11 = v9.element.querySelector('#swap-y-input'),
              v29 = parseInt(v10.value.trim()),
              v26 = parseInt(v11.value.trim());
            if (isNaN(v29) || isNaN(v26)) {
              alert('Please enter valid X and Y coordinates');
              return;
            }
            if (v5.v47 === v29 && v5.v82 === v26) {
              alert('Cannot swap a tile with itself');
              return;
            }
            v8.setButtonLoading('confirm', !0, 'Swapping...');
            try {
              let v27 = await (await v6.api.makeRequest('/api/admin/swap', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  x1: v5.v47,
                  y1: v5.v82,
                  x2: v29,
                  y2: v26
                })
              })).json();
              v27.success ? (v8.close(), v5.setActive(!1), setTimeout(() => {
                let v28 = v6.plot.getTile(v5.v47, v5.v82),
                  v38 = v6.plot.getTile(v29, v26);
                v28 && (v28.setActive(!1), v28.fetchContent('/index.html', !0)), v38 && (v38.setActive(!1), v38.fetchContent('/index.html', !0));
              }, 100)) : (alert(v27.error || 'Failed to swap tiles'), v8.setButtonLoading('confirm', !1));
            } catch (v36) {
              console.error(v36), alert('Failed to swap tiles: ' + v36.message), v8.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    });
    v9.open(), setTimeout(() => {
      let v8 = v9.element.querySelector('#swap-x-input');
      v8 && v8.focus();
    }, 100);
  },
  createAdminControl: v5 => {
    let v9 = v6.ui.createElement('div', {
      class: 'tile-admin-panel'
    });
    v5.free || (v9.appendChild(v6.ui.createElement('button', {
      innerText: 'Edit',
      onclick: () => {
        v6.ui.showDashboard(v5.domain);
      }
    })), v9.appendChild(v6.ui.createElement('span', {
      class: 'separator'
    })), v9.appendChild(v6.ui.createElement('button', {
      innerText: 'Free',
      onclick: () => {
        v6.ui.showAdminFreeModal(v5);
      }
    })), v9.appendChild(v6.ui.createElement('button', {
      class: 'danger',
      innerText: 'Ban',
      onclick: () => {
        v6.ui.showAdminBanModal(v5);
      }
    })), v9.appendChild(v6.ui.createElement('button', {
      innerText: 'Swap',
      onclick: () => {
        v6.ui.showAdminSwapModal(v5);
      }
    })));
    let v8 = v6.plot.lockCache[v5.v47 + ',' + v5.v82],
      v10 = v6.ui.createElement('button', {
        innerText: v8 ? 'Unlock' : 'Lock',
        onclick: async () => {
          try {
            let v29 = await (await v6.api.makeRequest(`/api/admin/lockstatus?x=${ v5.v47 }&y=${ v5.v82 }`)).json();
            v29.success ? v6.ui.showAdminLockModal(v5, v29.locked) : alert(v29.error || 'Failed to check lock status');
          } catch (v11) {
            console.error(v11), alert('Failed to check lock status: ' + v11.message);
          }
        }
      });
    if (v5.free || v9.appendChild(v6.ui.createElement('span', {
        class: 'separator'
      })), v9.appendChild(v10), v8) {
      let v11 = v6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          v6.ui.showAdminLockCodeModal(v5);
        }
      });
      v9.appendChild(v11);
    }
    if (!v5.free) {
      let v11 = v6.ui.createElement('button', {
        innerText: 'Show',
        onclick: () => {
          v6.ui.showAdminTileCodeModal(v5);
        }
      });
      v9.appendChild(v11);
    }
    return v9;
  },
  createTileControl: v5 => {
    let v9 = v6.ui.createElement('div', {
        class: 'tile-info',
        innerHTML: `
                <div class="tile-domain">
                    ${ v5.domain ? `<a href="https://${ v6.ui.escapeHTML(v5.domain) }" target="_blank">${ v6.ui.escapeHTML(v5.domain) }</a>` : `${ v5.locked ? 'Locked tile' : 'Free tile' } ${ v5.v47 }, ${ v5.v82 }` }
                </div>
                <div class="tile-controls">
            `
      }),
      v8 = v9.querySelector('.tile-controls');
    if (v5.free)
      v6.plot.lockCache[v5.v47 + ',' + v5.v82] ? v8.appendChild(v6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Unlock',
        onclick: () => {
          v6.ui.showUnlockModal(v5);
        }
      })) : v8.appendChild(v6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Claim',
        onclick: () => {
          v6.ui.showClaimModal(v5);
        }
      }));
    else {
      let v10 = v6?.user?.sites?.find(v11 => v11.domain === v5.domain);
      if (v10 && (v8.appendChild(v6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Edit',
          onclick: () => {
            v6.ui.showDashboard(v5.domain);
          }
        })), v8.appendChild(v6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Give',
          onclick: () => {
            v6.ui.showFreeModal(v5);
          }
        }))), (!v10 || v6?.user?.selectedSite?.domain !== v5.domain && v6?.user?.sites?.length >= 2) && v8.appendChild(v6.ui.createElement('button', {
          class: 'btn',
          innerText: 'Take',
          onclick: () => {
            v6.ui.showTakeModal(v5);
          }
        })), !v10 && v6?.user?.selectedSite?.tile) {
        let v11 = v6.user.selectedSite.tile;
        Math.abs(v11.v47 - v5.v47) <= 1 && Math.abs(v11.v82 - v5.v82) <= 1 && v6.ui.checkAndShowAttackButton(v5, v8);
      }
    }
    return v8.appendChild(v6.ui.createElement('button', {
      class: 'btn',
      innerHTML: 'Link',
      onclick: v10 => {
        v10.target.innerText = 'Copied!', setTimeout(() => {
          v10.target.innerText = 'Link';
        }, 500);
        let v11 = v5.v47 * 250 + 250 / 2,
          v29 = v5.v82 * 250 + 250 / 2;
        navigator.clipboard.writeText(`https://webtiles.kicya.net/#${ v11 },${ v29 }`);
      }
    })), v8.appendChild(v6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '\u27F3',
      onclick: () => {
        v5.fetchContent(v5.path, !0), v5.setActive(!1);
      }
    })), v8.appendChild(v6.ui.createElement('button', {
      class: 'btn',
      innerHTML: '&times;',
      onclick: () => {
        v5.setActive(!1);
      }
    })), v9.appendChild(v8), v9;
  },
  createVoteMenu: v5 => {
    if (v5.free || !v5.domain)
      return null;
    let v9 = v6.ui.createElement('div', {
        class: 'tile-vote-menu'
      }),
      v8 = v6.ui.createElement('button', {
        class: 'vote-btn vote-up',
        innerHTML: '\u25B2',
        onclick: () => v6.ui.handleVote(v5, 1, v8, v11, v10)
      }),
      v10 = v6.ui.createElement('div', {
        class: 'vote-score',
        innerText: '...'
      }),
      v11 = v6.ui.createElement('button', {
        class: 'vote-btn vote-down',
        innerHTML: '\u25BC',
        onclick: () => v6.ui.handleVote(v5, -1, v8, v11, v10)
      });
    return v9.appendChild(v8), v9.appendChild(v10), v9.appendChild(v11), v6.ui.fetchVoteData(v5, v8, v11, v10), v9;
  },
  fetchVoteData: async (v5, v9, v8, v10) => {
    try {
      let v29 = await (await v6.api.makeRequest(`/api/votes/score?domain=${ encodeURIComponent(v5.domain) }`)).json();
      if (v29.success) {
        let v26 = v29.score || 0;
        v10.textContent = v26;
        let v36 = v29.myVote || 0;
        v9.classList.remove('active'), v8.classList.remove('active'), v36 === 1 ? v9.classList.add('active') : v36 === -1 && v8.classList.add('active');
      } else
        v10.textContent = '0';
    } catch (v11) {
      console.error('Failed to fetch vote score:', v11), v10.textContent = '0';
    }
  },
  handleVote: async (v5, v9, v8, v10, v11) => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    let v29 = v8.classList.contains('active'),
      v26 = v10.classList.contains('active'),
      v36 = v9;
    (v9 === 1 && v29 || v9 === -1 && v26) && (v36 = 0), v8.disabled = !0, v10.disabled = !0;
    try {
      let v28 = await (await v6.api.makeRequest('/api/votes/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: v5.domain,
          vote: v36
        })
      })).json();
      if (v28.success) {
        let v38 = v28.score || 0;
        v11.textContent = v38, v8.classList.remove('active'), v10.classList.remove('active'), v36 === 1 ? v8.classList.add('active') : v36 === -1 && v10.classList.add('active');
      } else
        alert(v28.error || 'Failed to vote');
    } catch (v27) {
      console.error('Failed to vote:', v27), alert('Failed to vote: ' + v27.message);
    } finally {
      v8.disabled = !1, v10.disabled = !1;
    }
  },
  checkAndShowAttackButton: async (v5, v9) => {
    try {
      let v10 = await (await v6.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(v5.domain) }`)).json();
      if (v10.success && v10.clan && v10.clan.members && v10.clan.members.length >= 3)
        return;
      v9.prepend(v6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          v6.ui.showAttackModal(v5);
        }
      }));
    } catch (v8) {
      console.error('Failed to check clan for attack button:', v8), v9.prepend(v6.ui.createElement('button', {
        class: 'btn',
        innerText: 'Attack',
        onclick: () => {
          v6.ui.showAttackModal(v5);
        }
      }));
    }
  },
  showAttackModal: async v5 => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!v6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!v6.user.selectedSite.tile) {
      alert('You must have a tile to attack from');
      return;
    }
    let v8 = v6.user.selectedSite.domain,
      v10 = v5.domain,
      v11 = 0,
      v29 = null,
      v26 = null;
    try {
      let v38 = await (await v6.api.makeRequest(`/api/attack/success-chance?attacked_domain=${ encodeURIComponent(v10) }`)).json();
      v38.success ? (v11 = v38.successChance, v29 = v38.cooldown) : v26 = v38.error || 'Failed to get attack success chance';
    } catch (v28) {
      console.error(v28), v26 = 'Failed to get attack success chance: ' + v28.message;
    }
    if (v26) {
      alert(v26);
      return;
    }
    if (v11 < 1) {
      alert('Attack chance is too low to attempt an attack. If you just attacked, wait a few hours before attacking again.');
      return;
    }
    let v36 = '';
    if (v29 && v29.isOnCooldown) {
      let v28 = v29.hoursRemaining;
      v36 = `
                <p style="margin: 15px 0; padding: 10px; background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; color: #856404;">
                    <strong>Warning:</strong> Your attack chance is penalized because less than 12 hours have passed since your last attack. 
                    ${ v28 > 1 ? `Approximately ${ v28 } hours remaining until full chance.` : 'Less than 1 hour remaining until full chance.' }
                </p>
            `;
    }
    new v12({
      title: 'Attack Tile',
      content: `
                <p>
                    Attack the tile at (${ v5.v47 }, ${ v5.v82 }) owned by <strong>${ v6.ui.escapeHTML(v10) }</strong>?<br>
                    Attack success chance: ${ v11.toFixed(1) }%
                </p>
                ${ v36 }
                <p style="font-size: 12px; color: #666; margin-top: 10px;">
                    If successful, your tile and the attacked tile will swap positions.
                </p>
            `,
      buttons: [{
          text: 'Cancel',
          type: 'cancel',
          id: 'cancel',
          onClick: v28 => v28.close()
        },
        {
          text: 'Attack',
          type: 'confirm',
          id: 'confirm',
          onClick: async v28 => {
            v28.setButtonLoading('confirm', !0, 'Attacking...');
            try {
              let v39 = await (await v6.api.makeRequest('/api/attack/perform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  v47: v5.v47,
                  v82: v5.v82
                })
              })).json();
              if (v39.success) {
                v28.setContent(`
                                    <p style="color: #4caf50; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2713 Attack Successful!
                                    </p>
                                    <p style="text-align: center;">
                                        Your tile and the attacked tile have been swapped.
                                    </p>
                                `), setTimeout(() => {
                  let v42 = v6.plot.getTile(v6.user.selectedSite.tile.v47, v6.user.selectedSite.tile.v82);
                  v42 && (v42.fetchContent('/index.html', !0), v42.setActive(!1)), v5.fetchContent('/index.html', !0), v5.setActive(!1), v6.user.selectedSite && (v6.user.selectedSite.tile = {
                    v47: v5.v47,
                    v82: v5.v82,
                    domain: v8,
                    created_at: Date.now()
                  });
                }, 500), v28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: v42 => v42.close()
                }];
                let v40 = v28.element.querySelector('.modal-actions');
                v40.innerHTML = '', v28._buttonElements.clear();
                for (let v42 of v28.buttons)
                  v40.appendChild(v28._createButton(v42));
              } else {
                v28.setContent(`
                                    <p style="color: #f44336; font-weight: bold; text-align: center; padding: 0px;">
                                        \u2717 Attack Failed
                                    </p>
                                    <p style="text-align: center;">
                                        ${ v6.ui.escapeHTML(v39.error || 'The attack was unsuccessful.') }
                                    </p>
                                `), v28.buttons = [{
                  text: 'Close',
                  type: 'cancel',
                  id: 'close',
                  onClick: v42 => v42.close()
                }];
                let v40 = v28.element.querySelector('.modal-actions');
                v40.innerHTML = '', v28._buttonElements.clear();
                for (let v42 of v28.buttons)
                  v40.appendChild(v28._createButton(v42));
              }
            } catch (v38) {
              console.error(v38), alert('Failed to attack tile: ' + v38.message), v28.setButtonLoading('confirm', !1);
            }
          }
        }
      ]
    }).open();
  },
  showEmbedModal: () => {
    if (!v6.user) {
      location.href = 'https://kicya.net/auth/login?redirect=' + encodeURIComponent('https://webtiles.kicya.net/');
      return;
    }
    if (!v6.user.selectedSite) {
      alert('Please select a site first');
      return;
    }
    if (!v6.user.selectedSite.tile) {
      alert('Your site must have a tile to embed it');
      return;
    }
    let v5 = v6.user.selectedSite.domain,
      v9 = !1,
      v8 = v48 => {
        let v49 = `/e/${ v5 }`;
        return v48 ? `${ v49 }?dark=true` : v49;
      },
      v10 = v48 => `<iframe src="https://webtiles.kicya.net${ v8(v48) }" width="250" height="270" frameborder="0"></iframe>`,
      v11 = document.createElement('div');
    v11.style.cssText = 'display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;';
    let v29 = document.createElement('div');
    v29.style.cssText = 'min-width: 250px; max-width: 100%;';
    let v26 = document.createElement('h4');
    v26.textContent = 'Preview', v26.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', v29.appendChild(v26);
    let v36 = document.createElement('iframe');
    v36.src = v8(v9), v36.width = '250', v36.height = '270', v36.style.cssText = 'border: 1px solid #ddd; border-radius: 4px;', v36.setAttribute('frameborder', '0'), v29.appendChild(v36);
    let v27 = document.createElement('div');
    v27.style.cssText = 'flex: 1; min-width: 300px; max-width: 100%;';
    let v28 = document.createElement('h4');
    v28.textContent = 'Embed Code', v28.style.cssText = 'margin: 0 0 10px 0; font-size: 14px;', v27.appendChild(v28);
    let v38 = document.createElement('div');
    v38.style.cssText = 'margin-bottom: 10px; display: flex; align-items: center; gap: 3px;';
    let v39 = document.createElement('input');
    v39.type = 'checkbox', v39.id = 'embed-dark-mode', v39.style.cssText = 'cursor: pointer;';
    let v40 = document.createElement('label');
    v40.setAttribute('for', 'embed-dark-mode'), v40.textContent = 'Dark mode', v40.style.cssText = 'cursor: pointer; font-size: 13px; user-select: none;', v38.appendChild(v39), v38.appendChild(v40), v29.appendChild(v38);
    let v42 = document.createElement('textarea');
    v42.value = v10(v9), v42.style.cssText = 'width: 100%; height: 80px; padding: 8px; font-family: monospace; font-size: 12px; border: 1px solid #ddd; border-radius: 4px; resize: vertical; box-sizing: border-box;', v42.readOnly = !0, v27.appendChild(v42);
    let v43 = document.createElement('button');
    v43.textContent = 'Copy Code', v43.style.cssText = 'margin-top: 10px; padding: 6px 12px; background-color: var(--main-color, #d85252); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;', v43.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(v42.value), v43.textContent = 'Copied!', setTimeout(() => {
          v43.textContent = 'Copy Code';
        }, 2000);
      } catch {
        v42.select(), document.execCommand('copy'), v43.textContent = 'Copied!', setTimeout(() => {
          v43.textContent = 'Copy Code';
        }, 2000);
      }
    }), v27.appendChild(v43);
    let v44 = document.createElement('div');
    v44.style.cssText = 'font-size: 12px; color: #666; margin-top: 10px;', v44.innerHTML = 'You can detect if your tile is embedded in JS by checking the <b>embedded</b> variable. For CSS, body has an <b>embedded</b> class.', v27.appendChild(v44), v39.addEventListener('change', v48 => {
      v9 = v48.target.checked, v36.src = v8(v9), v42.value = v10(v9);
    }), v11.appendChild(v29), v11.appendChild(v27);
    let v45 = new v12({
      title: 'Embed Tile',
      content: v11,
      buttons: [{
        text: 'Close',
        type: 'cancel',
        id: 'close',
        onClick: v48 => v48.close()
      }]
    });
    v45.open(), v45.element && (v45.element.style.maxWidth = '700px');
  }
};

function v100() {
  if (!v6.user)
    return;
  let v5 = v6.ui.siteSelector.value,
    v9 = v6.user.sites.find(v10 => v10.domain === v5);
  v5 === 'select' || v5 === 'add' || !v9 ? (v6.ui.siteJumpButton.hidden = !0, v6.ui.siteEditButton.hidden = !0, v6.ui.siteEmbedButton.hidden = !0, v6.ui.siteClanButton.hidden = !0) : (v6.ui.siteEditButton.hidden = !1, v6.ui.siteJumpButton.hidden = !v9.tile, v6.ui.siteClanButton.hidden = !v9.tile, v6.ui.siteEmbedButton.hidden = !v9.tile), v6.user.selectedSite = v9;
  let v8 = v6?.plot?.activeTile;
  v8 && (v8.setActive(!1), v8.setActive(!0));
}
v6.ui.siteSelector && v6.ui.siteSelector.addEventListener('change', () => {
  if (!v6.user)
    return;
  let v5 = v6.ui.siteSelector.value;
  v5 === 'add' && (location.href = v6.user ? 'https://kicya.net/account/sites' : 'https://kicya.net/auth/register');
  let v9 = v6.user.sites.find(v8 => v8.domain === v5);
  if (v9) {
    document.cookie = `site=${ v9.domain }; path=/`;
    let v8 = document.querySelector('#kicya-site-select-option');
    v8 && v8.remove(), v6.ui.fetchClanInvites();
  }
  v100();
});
v100();
var v101 = document.getElementById('dashboard-modal'),
  v102 = document.getElementById('dashboard-iframe'),
  v103 = document.getElementById('dashboard-modal-close'),
  v104 = document.getElementById('dashboard-modal-title'),
  v105 = document.getElementById('app');
v6.ui.siteEditButton && v6.ui.siteEditButton.addEventListener('click', () => {
  !v6.user || !v6.user.selectedSite || v6.ui.showDashboard(v6.user.selectedSite.domain);
});
v6.ui.siteJumpButton && v6.ui.siteJumpButton.addEventListener('click', () => {
  if (!v6.user || !v6.user.selectedSite || !v6.user.selectedSite.tile)
    return;
  let v5 = v6.user.selectedSite.tile,
    v9 = v5.v47 * 250 + 250 / 2,
    v8 = v5.v82 * 250 + 250 / 2;
  v6.camera.centerOn(v9, v8);
});
v6.ui.siteCenterButton && v6.ui.siteCenterButton.addEventListener('click', () => {
  v6.camera && v6.camera.centerOn(100, 100);
});
v6.ui.siteClanButton && v6.ui.siteClanButton.addEventListener('click', () => {
  v6.ui.showClanModal();
});
v6.ui.siteEmbedButton && v6.ui.siteEmbedButton.addEventListener('click', () => {
  v6.ui.showEmbedModal();
});

function v106() {
  v101.classList.remove('active'), v102.src = '', v105 && (v105.style.display = ''), v6.camera && v6.camera.setZoomEnabled(!0);
}
v103 && v103.addEventListener('click', v106);
v6.ui.zoomSlider.addEventListener('input', v5 => {
  v6.camera.zoomTo(v6.camera.width / 2, v6.camera.height / 2, +v5.target.value);
});
var v107 = document.getElementById('kicya-menu-toggle'),
  v108 = document.getElementById('kicya-links');
v107 && v108 && (v107.addEventListener('click', function(v5) {
  v5.stopPropagation(), v108.classList.toggle('active');
}), document.addEventListener('click', function(v5) {
  !v108.contains(v5.target) && !v107.contains(v5.target) && v108.classList.remove('active');
}), v108.querySelectorAll('a').forEach(function(v5) {
  v5.addEventListener('click', function() {
    v108.classList.remove('active');
  });
}));

function v109() {
  if (!v6.user || localStorage.getItem('rules_accepted'))
    return;
  new v12({
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
      onClick: v9 => {
        localStorage.setItem('rules_accepted', '1'), v9.close();
      }
    }]
  }).open();
}
v109();
v6.user && v6.user.selectedSite && v6.ui.fetchClanInvites();
var v110 = v6.ui;
var v111 = class {
  constructor() {
    this.ws = null, this.reconnectTimeout = null, this.handlers = new Map(), this.binaryHandlers = [], this.connected = !1, this.messageQueue = [], this.connectionAttempted = !1, this.consecutiveFailures = 0, this.lastConnectionTime = 0, this.waitForCaptchaAndConnect();
  }
  async waitForCaptchaAndConnect() {
    let v9 = v6.api.getToken(),
      v8 = v6.api.getTokenExpiry();
    if (!v6.api.getTurnstileSiteKey()) {
      this.connect();
      return;
    }
    (!v9 || v8 < Date.now()) && await v6.api.showCaptchaModal();
    let v10 = 60000,
      v11 = Date.now();
    for (; !v6.api.getToken() || v6.api.getTokenExpiry() < Date.now();) {
      if (Date.now() - v11 > v10) {
        console.error('[WS] Captcha timeout');
        let v29 = document.getElementById('loading-text');
        v29 && (v29.textContent = 'Verification timeout. Please refresh.');
        return;
      }
      await new Promise(v29 => setTimeout(v29, 100));
    }
    this.connect();
  }
  connect() {
    let v9 = location.protocol === 'https:' ? 'wss:' : 'ws:',
      v8 = v6.api.getToken() || '';
    this.connectionAttempted = !0, this.lastConnectionTime = Date.now(), this.ws = new WebSocket(`${ v9 }//${ location.host }/ws?t=${ encodeURIComponent(v8) }`), this.ws.binaryType = 'arraybuffer', this.ws.onopen = () => {
      console.log('[WS] Connected'), this.connected = !0, this.consecutiveFailures = 0, this.emit('open');
      for (let v10 of this.messageQueue)
        this.ws.send(v10);
      this.messageQueue = [];
    }, this.ws.onmessage = v10 => {
      if (v10.data instanceof ArrayBuffer)
        for (let v11 of this.binaryHandlers)
          v11(v10.data);
      else
        try {
          let v11 = JSON.parse(v10.data);
          this.emit(v11.type, v11);
        } catch (v11) {
          console.error('[WS] Failed to parse message:', v11);
        }
    }, this.ws.onclose = v10 => {
      console.log('[WS] Disconnected, reconnecting...', v10.code, v10.reason);
      let v11 = this.connected;
      this.connected = !1, this.emit('close');
      let v29 = Date.now() - this.lastConnectionTime;
      !v11 && v29 < 1000 ? this.consecutiveFailures++ : this.consecutiveFailures = 0, this.scheduleReconnect();
    }, this.ws.onerror = v10 => {
      console.error('[WS] Error:', v10);
    };
  }
  scheduleReconnect() {
    if (this.reconnectTimeout)
      return;
    let v9 = Math.min(3000 * Math.pow(2, this.consecutiveFailures), 30000);
    this.reconnectTimeout = setTimeout(async () => {
      this.reconnectTimeout = null;
      let v8 = v6.api.getToken(),
        v10 = v6.api.getTokenExpiry();
      (!v8 || v10 < Date.now()) && await v6.api.showCaptchaModal();
      let v11 = 30000,
        v29 = Date.now();
      for (; !v6.api.getToken() || v6.api.getTokenExpiry() < Date.now();) {
        if (Date.now() - v29 > v11) {
          console.error('[WS] Reconnect captcha timeout');
          return;
        }
        await new Promise(v26 => setTimeout(v26, 100));
      }
      this.connect();
    }, v9);
  }
  on(v9, v8) {
    this.handlers.has(v9) || this.handlers.set(v9, []), this.handlers.get(v9).push(v8);
  }
  off(v9, v8) {
    if (!this.handlers.has(v9))
      return;
    let v10 = this.handlers.get(v9),
      v11 = v10.indexOf(v8);
    v11 !== -1 && v10.splice(v11, 1);
  }
  onBinary(v9) {
    this.binaryHandlers.push(v9);
  }
  emit(v9, v8) {
    if (this.handlers.has(v9))
      for (let v10 of this.handlers.get(v9))
        v10(v8);
  }
  send(v9) {
    this.ws && this.ws.readyState === WebSocket.OPEN ? this.ws.send(v9) : typeof v9 == 'string' && this.messageQueue.push(v9);
  }
  sendJSON(v9) {
    this.send(JSON.stringify(v9));
  }
  get isConnected() {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }
};
v6.ws = new v111();
var v112 = v6.ws;
var v113 = new Set([
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
  v114 = 100,
  v115 = 3,
  v116 = 5000,
  v117 = class {
    constructor() {
      this.messages = [], this.isOpen = !0, this.unreadCount = 0, this.container = document.getElementById('chat-container'), this.messageTimestamps = [], this.showedRules = !1, this.container && (this.createUI(), this.setupWsHandlers(), this.setupInputHandlers(), this.createUserMenu(), this.createModMenu());
    }
    createUI() {
      this.header = this.container.querySelector('#chat-header'), this.body = this.container.querySelector('#chat-body'), this.messagesEl = this.container.querySelector('#chat-messages'), this.input = this.container.querySelector('#chat-input'), this.sendBtn = this.container.querySelector('#chat-send'), this.toggleBtn = this.container.querySelector('#chat-toggle'), this.unreadEl = this.container.querySelector('#chat-unread'), this.header.addEventListener('click', () => this.toggle()), this.container.addEventListener('wheel', v9 => {
        v9.stopPropagation();
      }), this.messagesEl.addEventListener('click', v9 => {
        let v8 = v9.target.closest('.chat-coord-link');
        if (v8) {
          v9.preventDefault();
          let v10 = parseInt(v8.dataset.v47),
            v11 = parseInt(v8.dataset.v82),
            v26 = 50 / 2;
          !isNaN(v10) && !isNaN(v11) && v6.camera && v10 >= -v26 && v10 <= v26 && v11 >= -v26 && v11 <= v26 && v6.camera.centerOn(v10 * 250 + 250 / 2, v11 * 250 + 250 / 2);
        }
      }), this.setupResize(), this.restoreSize();
    }
    setupResize() {
      let v9 = document.createElement('div');
      v9.id = 'chat-resize-left', v9.className = 'chat-resize-handle', this.container.appendChild(v9);
      let v8 = document.createElement('div');
      v8.id = 'chat-resize-top', v8.className = 'chat-resize-handle', this.container.appendChild(v8);
      let v10 = document.createElement('div');
      v10.id = 'chat-resize-corner', v10.className = 'chat-resize-handle', this.container.appendChild(v10);
      let v11 = null,
        v29 = 0,
        v26 = 0,
        v36 = 0,
        v27 = 0,
        v28 = (v38, v39) => {
          this.isOpen && (v11 = v39, v29 = v38.clientX, v26 = v38.clientY, v36 = this.container.offsetWidth, v27 = this.container.offsetHeight, document.body.style.userSelect = 'none', v39 === 'left' ? document.body.style.cursor = 'ew-resize' : v39 === 'top' ? document.body.style.cursor = 'ns-resize' : document.body.style.cursor = 'nwse-resize', v38.preventDefault());
        };
      v9.addEventListener('mousedown', v38 => v28(v38, 'left')), v8.addEventListener('mousedown', v38 => v28(v38, 'top')), v10.addEventListener('mousedown', v38 => v28(v38, 'corner')), document.addEventListener('mousemove', v38 => {
        if (v11) {
          if (v11 === 'left' || v11 === 'corner') {
            let v39 = v29 - v38.clientX,
              v40 = Math.min(Math.max(v36 + v39, 250), 800);
            this.container.style.width = v40 + 'px';
          }
          if (v11 === 'top' || v11 === 'corner') {
            let v39 = v26 - v38.clientY,
              v40 = Math.min(Math.max(v27 + v39, 100), 700);
            this.container.style.height = v40 + 'px';
          }
        }
      }), document.addEventListener('mouseup', () => {
        v11 && (v11 = null, document.body.style.cursor = '', document.body.style.userSelect = '', this.saveSize());
      });
    }
    saveSize() {
      localStorage.setItem('chat-width', this.container.offsetWidth), localStorage.setItem('chat-height', this.container.offsetHeight);
    }
    restoreSize() {
      let v9 = localStorage.getItem('chat-width') ?? 525;
      if (v9) {
        let v10 = parseInt(v9, 10);
        v10 >= 250 && v10 <= 800 && (this.container.style.width = v10 + 'px');
      }
      let v8 = localStorage.getItem('chat-height') ?? 330;
      if (v8) {
        let v10 = parseInt(v8, 10);
        v10 >= 100 && v10 <= 700 && (this.container.style.height = v10 + 'px');
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
        `, document.body.appendChild(this.modMenu), this.modMenu.addEventListener('click', v9 => {
        let v8 = v9.target.dataset.action;
        if (!(!v8 || !this.modMenuTarget)) {
          if (v8 === 'jump')
            this.jumpToUserTile(this.modMenuTarget.nick);
          else if (v8 === 'tell') {
            let v10 = `/tell ${ this.modMenuTarget.nick } `;
            this.input.value = v10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (v8 === 'reply') {
            let v10 = `@${ this.modMenuTarget.nick } `;
            this.input.value = v10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (v8 === 'clear')
            v6.ws.sendJSON({
              type: 'mod_action',
              action: 'clear_messages',
              target: this.modMenuTarget
            });
          else if (v8 === 'mute') {
            let v10 = prompt('Mute duration (e.g. 10m, 1h, 1d):', '1d');
            v10 && v6.ws.sendJSON({
              type: 'mod_action',
              action: 'mute',
              target: this.modMenuTarget,
              duration: v10
            });
          } else
            v8 === 'ban' && confirm(`Ban ${ this.modMenuTarget.nick }? This will also delete all their tiles.`) && v6.ws.sendJSON({
              type: 'mod_action',
              action: 'ban',
              target: this.modMenuTarget
            });
          this.hideModMenu();
        }
      }), document.addEventListener('click', v9 => {
        !this.modMenu.contains(v9.target) && !this.userMenu.contains(v9.target) && !v9.target.classList.contains('chat-nick') && (this.hideModMenu(), this.hideUserMenu());
      });
    }
    createUserMenu() {
      this.userMenu = document.createElement('div'), this.userMenu.id = 'chat-user-menu', this.userMenu.hidden = !0, this.userMenu.innerHTML = `
            <button data-action="jump">Jump to tile</button>
            <button data-action="tell">Tell...</button>
            <button data-action="reply">Reply</button>
        `, document.body.appendChild(this.userMenu), this.userMenu.addEventListener('click', v9 => {
        let v8 = v9.target.dataset.action;
        if (!(!v8 || !this.userMenuTarget)) {
          if (v8 === 'jump')
            this.jumpToUserTile(this.userMenuTarget);
          else if (v8 === 'tell') {
            let v10 = `/tell ${ this.userMenuTarget } `;
            this.input.value = v10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          } else if (v8 === 'reply') {
            let v10 = `@${ this.userMenuTarget } `;
            this.input.value = v10 + this.input.value, this.input.focus(), this.input.setSelectionRange(this.input.value.length, this.input.value.length);
          }
          this.hideUserMenu();
        }
      });
    }
    showUserMenu(v9, v8, v10) {
      this.userMenuTarget = v9, this.userMenu.hidden = !1;
      let v11 = this.userMenu.getBoundingClientRect(),
        v29 = window.innerHeight,
        v26 = window.innerWidth;
      v10 + v11.height > v29 && (v10 = v29 - v11.height - 5), v8 + v11.width > v26 && (v8 = v26 - v11.width - 5), this.userMenu.style.left = v8 + 'px', this.userMenu.style.top = v10 + 'px';
    }
    hideUserMenu() {
      this.userMenu.hidden = !0, this.userMenuTarget = null;
    }
    findUserTile(v9) {
      if (!v6.plot?.tileCache)
        return null;
      for (let v8 in v6.plot.tileCache)
        for (let v10 in v6.plot.tileCache[v8]) {
          let v11 = v6.plot.tileCache[v8][v10];
          if ((typeof v11 == 'string' ? v11 : v11?.domain ?? null) === v9)
            return {
              v47: parseInt(v8),
              v82: parseInt(v10)
            };
        }
      return null;
    }
    findTileByDomain(v9) {
      if (!v6.plot?.tileCache)
        return null;
      for (let v8 in v6.plot.tileCache)
        for (let v10 in v6.plot.tileCache[v8]) {
          let v11 = v6.plot.tileCache[v8][v10];
          if ((typeof v11 == 'string' ? v11 : v11?.domain ?? null) === v9)
            return {
              v47: parseInt(v8),
              v82: parseInt(v10)
            };
        }
      return null;
    }
    jumpToUserTile(v9) {
      if (!v6.camera)
        return;
      let v8 = this.findUserTile(v9);
      v8 && v6.camera.centerOn(v8.v47 * 250 + 250 / 2, v8.v82 * 250 + 250 / 2);
    }
    jumpToDomain(v9) {
      if (!v6.camera)
        return !1;
      let v8 = this.findTileByDomain(v9);
      return v8 ? (v6.camera.centerOn(v8.v47 * 250 + 250 / 2, v8.v82 * 250 + 250 / 2), !0) : !1;
    }
    showModMenu(v9, v8, v10) {
      if (v9.admin || v9.discord)
        return;
      this.modMenuTarget = v9, this.modMenu.querySelector('#mod-menu-user-id').textContent = v9.id || '-', this.modMenu.querySelector('#mod-menu-ip').textContent = v9.ip || '-', this.modMenu.hidden = !1;
      let v11 = this.modMenu.getBoundingClientRect(),
        v29 = window.innerHeight,
        v26 = window.innerWidth;
      v10 + v11.height > v29 && (v10 = v29 - v11.height - 5), v8 + v11.width > v26 && (v8 = v26 - v11.width - 5), this.modMenu.style.left = v8 + 'px', this.modMenu.style.top = v10 + 'px';
    }
    hideModMenu() {
      this.modMenu.hidden = !0, this.modMenuTarget = null;
    }
    setupWsHandlers() {
      let v9 = v6.ws;
      v9.on('chat_history', v8 => {
        this.messages = v8.messages || [], this.renderMessages(), this.showedRules || (this.showSystemMessage('Welcome to the chat! The rules are as follows:'), this.showSystemMessage('1. There is zero tolerance for NSFW conversations. Do not discuss it in chat.'), this.showSystemMessage('2. Do not spam the chat.'), this.showSystemMessage('3. Do not troll, be edgy, annoying, or disruptive. Be kind to others.'), this.showSystemMessage('4. Keep conversations in English.'), this.showSystemMessage('Punishments vary between a temporary mute and in worst case a ban (your tiles will be deleted!). Type /help for commands.'), this.showedRules = !0);
      }), v9.on('message', v8 => {
        this.addMessage(v8);
      }), v9.on('system_message', v8 => {
        this.showSystemMessage(v8.message);
      }), v9.on('chat_cleared', () => {
        this.messages = [], this.messagesEl.innerHTML = '', this.showSystemMessage('Chat has been cleared');
      }), v9.on('clear_user_messages', v8 => {
        this.messages = this.messages.filter(v10 => v10.nick !== v8.nick), this.renderMessages(), (v6.user?.admin || v6.user?.moderator) && this.showSystemMessage(`Messages from ${ v8.nick } have been cleared`);
      }), v9.on('user_muted', v8 => {
        this.showSystemMessage(`${ v8.nick } has been muted`);
      });
    }
    setupInputHandlers() {
      this.input.addEventListener('keydown', v9 => {
        v9.stopPropagation(), v9.key === 'Enter' && !v9.shiftKey && (v9.preventDefault(), this.sendMessage());
      }), this.input.addEventListener('keyup', v9 => {
        v9.stopPropagation();
      }), this.input.addEventListener('keypress', v9 => {
        v9.stopPropagation();
      }), this.sendBtn.addEventListener('click', () => this.sendMessage());
    }
    toggle() {
      this.isOpen = !this.isOpen, this.body.hidden = !this.isOpen, this.toggleBtn.textContent = this.isOpen ? '\u2212' : '+', this.isOpen ? (this.restoreSize(), this.unreadCount = 0, this.updateUnreadBadge(), this.scrollToBottom()) : this.container.style.height = 'auto';
    }
    addMessage(v9) {
      v9.time = Date.now();
      let v8 = v6.cursors?.currentNick,
        v10 = v6.user?.sites?.map(v11 => v11.domain);
      if (v8 && v9.message) {
        let v11 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
          v29 = v9.message.matchAll(v11);
        for (let v26 of v29)
          if (v10.includes(v26[1])) {
            v9.isPinged = !0;
            try {
              let v36 = new Audio('/s/ping.mp3');
              v36.volume = 0.5, v36.play().catch(() => {});
            } catch {}
            break;
          }
      }
      this.messages.push(v9), this.messages.length > v114 && this.messages.shift(), this.appendMessageEl(v9), this.isOpen ? this.scrollToBottom() : (this.unreadCount++, this.updateUnreadBadge());
    }
    escapeHTML(v9) {
      return v9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
    escapeURL(v9) {
      return v9.replaceAll('"', '%22').replaceAll('\'', '%27').replaceAll('`', '%60');
    }
    escapeURLDisplay(v9) {
      return v9.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    parseMessage(v9) {
      let v8 = /@([a-zA-Z0-9][-a-zA-Z0-9]*(?:\.[a-zA-Z0-9][-a-zA-Z0-9]*)*\.[a-zA-Z]{2,})/g,
        v10 = [];
      v9 = v9.replace(v8, (v38, v39) => (v10.push(v39), `<span class="chat-ping">@${ this.escapeHTML(v39) }</span>`));
      let v11 = /(?!\.)(https?:\/\/[^\s<>"']+)|(?<![/])(\b(?:[a-zA-Z0-9][-a-zA-Z0-9]*\.)+([a-zA-Z]{2,})(?:\/[^\s<>"']*)?)/g,
        v29 = 250,
        v36 = 50 / 2;
      v9 = v9.replace(v11, (v38, v39, v40, v42) => {
        if (v39) {
          let v43 = v39.match(/^https?:\/\/(?:www\.)?webtiles\.kicya\.net\/?#(-?\d+),(-?\d+)$/);
          if (v43) {
            let v44 = parseInt(v43[1]),
              v45 = parseInt(v43[2]),
              v48 = Math.floor(v44 / v29),
              v49 = Math.floor(v45 / v29);
            if (v48 >= -v36 && v48 <= v36 && v49 >= -v36 && v49 <= v36)
              return `<a href="#" class="chat-coord-link" data-x="${ v48 }" data-y="${ v49 }">${ v48 }, ${ v49 }</a>`;
          }
          return `<a href="${ this.escapeURL(v39) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(this.escapeURL(v39)) }</a>`;
        }
        if (v40 && v113.has(v42.toLowerCase()) && !v10.includes(v40)) {
          let v43 = 'https://' + v40;
          return `<a href="${ this.escapeURL(v43) }" target="_blank" rel="noopener noreferrer">${ this.escapeURLDisplay(v40) }</a>`;
        }
        return v38;
      });
      let v27 = /(-?\d+),\s*(-?\d+)/g;
      v9 = v9.replace(v27, (v38, v39, v40) => {
        let v42 = parseInt(v39),
          v43 = parseInt(v40);
        return v42 >= -v36 && v42 <= v36 && v43 >= -v36 && v43 <= v36 ? `<a href="#" class="chat-coord-link" data-x="${ v39 }" data-y="${ v40 }">${ v38 }</a>` : v38;
      });
      let v28 = (v38, v39, v40, v42) => `<img class="emoji" src="https://cdn.discordapp.com/emojis/${ v42 }.${ v39 ? 'gif' : 'png' }?v=1" alt=":${ this.escapeHTML(v40) }:" title=":${ this.escapeHTML(v40) }:" width="20">`;
      return v9 = v9.replace(/&lt;(a?):([a-zA-Z0-9_~]+):(\d{1,20})&gt;/g, v28), v9 = v9.replace(/<(a?):([a-zA-Z0-9_~]+):(\d{1,20})>/g, v28), v9 = v9.replace(/\*\*([^*]+)\*\*/g, (v38, v39) => `<strong>${ v39 }</strong>`), v9 = v9.replace(/\*([^*]+)\*/g, (v38, v39) => `<em>${ v39 }</em>`), v9 = v9.replace(/~~([^~]+)~~/g, (v38, v39) => `<s>${ v39 }</s>`), v9 = v9.replace(/__([^_]+)__/g, (v38, v39) => `<u>${ v39 }</u>`), v9 = v9.replace(/\|\|([^|]+)\|\|/g, (v38, v39) => `<span class="chat-spoiler">${ v39 }</span>`), v9;
    }
    appendMessageEl(v9) {
      let v8 = document.createElement('div');
      v8.className = 'chat-message', v9.admin && v8.classList.add('chat-admin'), v9.mod && v8.classList.add('chat-mod'), v9.discord && v8.classList.add('chat-discord'), v9.isPinged && v8.classList.add('chat-pinged');
      let v10 = document.createElement('span');
      v10.className = 'chat-nick', v10.dataset.nick = v9.nick;
      let v11 = v6.user?.admin || v6.user?.moderator;
      v9.discord || (v10.classList.add('chat-nick-clickable'), v10.addEventListener('click', v38 => {
        v38.stopPropagation(), v11 && !v9.admin ? this.showModMenu(v9, v38.clientX, v38.clientY) : this.findUserTile(v9.nick) && this.showUserMenu(v9.nick, v38.clientX, v38.clientY);
      })), v9.admin ? v10.innerHTML = '<span class="chat-admin-icon">\u2605</span> ' + this.escapeHTML(v9.nick) + ': ' : v9.mod ? v10.innerHTML = '<span class="chat-mod-icon">\u25C6</span> ' + this.escapeHTML(v9.nick) + ': ' : v9.discord ? v10.innerHTML = '<span class="chat-discord-icon">[D]</span> ' + this.escapeHTML(v9.nick) + ': ' : v10.textContent = v9.nick + ': ';
      let v29 = document.createElement('span');
      v29.className = 'chat-text', v9.admin || v9.mod ? v29.innerHTML = this.parseMessage(v9.message).replace(/\n/g, '<br>') : v29.innerHTML = this.parseMessage(this.escapeHTML(v9.message)).replace(/\n/g, '<br>');
      let v26 = v29.querySelectorAll('.emoji');
      for (let v38 of v26)
        v38.addEventListener('error', v39 => {
          v39.target.remove();
        });
      let v36 = v29.querySelectorAll('.chat-spoiler');
      for (let v38 of v36)
        v38.addEventListener('click', v39 => {
          v39.target.closest('.chat-spoiler').classList.toggle('chat-spoiler-revealed');
        });
      let v27 = document.createElement('span');
      v27.className = 'chat-time';
      let v28 = new Date(v9.time || Date.now());
      for (v27.textContent = v28.getHours().toString().padStart(2, '0') + ':' + v28.getMinutes().toString().padStart(2, '0'), v8.appendChild(v10), v8.appendChild(v29), v8.appendChild(v27), this.messagesEl.appendChild(v8); this.messagesEl.children.length > v114;)
        this.messagesEl.removeChild(this.messagesEl.firstChild);
    }
    renderMessages() {
      this.messagesEl.innerHTML = '';
      for (let v9 of this.messages)
        this.appendMessageEl(v9);
      setTimeout(() => {
        this.scrollToBottom(!0);
      }, 100);
    }
    scrollToBottom(v9 = !1) {
      let v8 = this.messagesEl;
      (v8.scrollHeight - v8.scrollTop - v8.clientHeight <= 120 || v9) && (v8.scrollTop = v8.scrollHeight);
    }
    updateUnreadBadge() {
      this.unreadCount > 0 ? (this.unreadEl.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount, this.unreadEl.hidden = !1) : this.unreadEl.hidden = !0;
    }
    sendMessage() {
      if (!v6.user) {
        this.showSystemMessage('Please login to chat');
        return;
      }
      let v9 = this.input.value.trim();
      if (!v9 || v9.length > 500)
        return;
      let v8 = v9.split(`
`);
      if (v8.length > 5 && (v9 = v8.slice(0, 5).join(`
`)), v9 === '/help') {
        this.showSystemMessage('Available commands:'), this.showSystemMessage('/jump [domain] - Jump to a tile by domain'), this.showSystemMessage('/jump X Y - Jump to coordinates X, Y'), this.showSystemMessage('/tell [domain] [msg] - Send a message to a specific domain'), this.input.value = '';
        return;
      }
      if (v9.startsWith('/jump ') || v9.startsWith('/tp ')) {
        let v10 = v9.split(' ').slice(1).join(' ');
        if (v10) {
          let v11 = v10.match(/^(-?\d+)\s+(-?\d+)$/);
          if (v11) {
            let v29 = parseInt(v11[1]),
              v26 = parseInt(v11[2]),
              v27 = 50 / 2;
            !isNaN(v29) && !isNaN(v26) && v6.camera && v29 >= -v27 && v29 <= v27 && v26 >= -v27 && v26 <= v27 ? (v6.camera.centerOn(v29 * 250 + 250 / 2, v26 * 250 + 250 / 2), this.showSystemMessage(`Jumped to ${ v29 }, ${ v26 }`)) : this.showSystemMessage(`Invalid coordinates. Must be between -${ v27 } and ${ v27 }`);
          } else {
            let v29 = v10;
            this.jumpToDomain(v29) ? this.showSystemMessage(`Jumped to ${ v29 }`) : this.showSystemMessage(`Tile with domain "${ v29 }" not found`);
          }
        } else
          this.showSystemMessage('Usage: /jump [domain] or /jump X Y');
        this.input.value = '';
        return;
      }
      if (!v6.cursors?.currentNick) {
        this.showSystemMessage('Select a site to chat');
        return;
      }
      if (!v9.startsWith('/')) {
        let v10 = Date.now();
        if (this.messageTimestamps = this.messageTimestamps.filter(v11 => v10 - v11 < v116), this.messageTimestamps.length >= v115)
          return;
        this.messageTimestamps.push(v10);
      }
      v6.ws.sendJSON({
        type: 'message',
        value: v9
      }), this.input.value = '';
    }
    showSystemMessage(v9) {
      let v8 = document.createElement('div');
      v8.className = 'chat-message chat-system', v8.innerHTML = this.parseMessage(this.escapeHTML(v9)).replace(/\n/g, '<br>'), this.messagesEl.appendChild(v8), this.scrollToBottom();
    }
  };
v6.chat = new v117();
var v118 = v6.chat;
var v119 = document.getElementById('loading-text'),
  v120 = 0,
  v121 = setInterval(() => {
    v119.innerText = `Loading${ '.'.repeat(v120++ % 4) }`;
  }, 200),
  v122 = class {
    constructor() {
      this.tiles = {}, this.container = document.getElementById('plot'), this.worldSize = v34, this.activeTile = null, this.tileCache = {}, this.lockCache = {}, this.loaded = !1, setInterval(() => {
        for (let v9 in this.tiles) {
          let v8 = this.tiles[v9];
          !v8.rendered && Date.now() - v8.lastRender > 30000 && delete this.tiles[v9];
        }
      }, 10000), this.fetchTiles(), this.fetchLocks(), setInterval(() => this.fetchLocks(), 1000 * 60), setInterval(() => this.fetchTiles(), 1000 * 60), this.editorChannel = new BroadcastChannel('editor'), this.editorChannel.onmessage = v9 => {
        if (v9.data.type === 'saved') {
          let {
            path: v8,
            site: v10
          } = v9.data;
          this.refreshTile(v10, v8);
        }
      }, this.setupWsHandlers();
    }
    setupWsHandlers() {
      v6.ws && (v6.ws.on('refresh', v9 => {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          let v8 = null;
          for (let v10 in this.tileCache) {
            for (let v11 in this.tileCache[v10]) {
              let v29 = this.tileCache[v10][v11];
              if ((typeof v29 == 'string' ? null : v29?.domain ?? null) === v9.domain) {
                v8 = typeof v29 == 'object' && v29.updated_at ? v29.updated_at : Math.floor(Date.now() / 1000);
                break;
              }
            }
            if (v8 !== null)
              break;
          }
          navigator.serviceWorker.controller.postMessage({
            type: 'tile-refresh',
            domain: v9.domain,
            lastUpdate: v8 || Math.floor(Date.now() / 1000)
          });
        }
        setTimeout(() => {
          this.refreshTile(v9.domain, v9.path);
        }, 500);
      }), v6.ws.on('claim', v9 => {
        this.tileCache[v9.v47] = this.tileCache[v9.v47] || {}, this.tileCache[v9.v47][v9.v82] = typeof v9.domain == 'string' ? {
          domain: v9.domain,
          updated_at: Math.floor(Date.now() / 1000)
        } : v9.domain;
        let v8 = this.tiles[`${ v9.v47 },${ v9.v82 }`];
        if (v8) {
          let v10 = typeof this.tileCache[v9.v47][v9.v82] == 'string' ? this.tileCache[v9.v47][v9.v82] : this.tileCache[v9.v47][v9.v82].domain;
          v8.setDomain(v10);
        }
      }), v6.ws.on('free', v9 => {
        this.tileCache[v9.v47] && delete this.tileCache[v9.v47][v9.v82];
        let v8 = this.tiles[`${ v9.v47 },${ v9.v82 }`];
        v8 && v8.setFree();
      }), v6.ws.on('lock', v9 => {
        v9.locked ? this.lockCache[v9.v47 + ',' + v9.v82] = !0 : delete this.lockCache[v9.v47 + ',' + v9.v82];
        let v8 = this.tiles[`${ v9.v47 },${ v9.v82 }`];
        v8 && v8.setLocked(v9.locked);
      }), v6.ws.on('user_count', v9 => {
        let v8 = document.getElementById('user-count');
        v8 && (v8.textContent = `${ v9.count } online`);
      }), v6.ws.on('clan_invite', v9 => {
        v9.invite && (v6.ui.pendingClanInvites.find(v10 => v10.id === v9.invite.id) || (v6.ui.pendingClanInvites.push({
          id: v9.invite.id,
          clan_id: v9.invite.clan_id,
          clan_name: v9.invite.clan_name
        }), v6.ui.updateClanIndicator()));
      }));
    }
    refreshTile(v9, v8) {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let v10 = null;
        for (let v11 in this.tileCache) {
          for (let v29 in this.tileCache[v11]) {
            let v26 = this.tileCache[v11][v29];
            if ((typeof v26 == 'string' ? null : v26?.domain ?? null) === v9) {
              v10 = typeof v26 == 'object' && v26.updated_at ? v26.updated_at : Math.floor(Date.now() / 1000);
              break;
            }
          }
          if (v10 !== null)
            break;
        }
        navigator.serviceWorker.controller.postMessage({
          type: 'tile-refresh',
          domain: v9,
          lastUpdate: v10 || Math.floor(Date.now() / 1000)
        });
      }
      for (let v10 in this.tiles) {
        let v11 = this.tiles[v10];
        if (v11.domain === v9 && v11.path === v8) {
          if (v11.active)
            break;
          v11.fetchContent(v11.path, !0);
          break;
        }
      }
    }
    addTile(v9) {
      this.tiles[`${ v9.v47 },${ v9.v82 }`] = v9;
    }
    getTile(v9, v8) {
      if (v9 > this.worldSize / 2 || v9 < -this.worldSize / 2 || v8 > this.worldSize / 2 || v8 < -this.worldSize / 2)
        return null;
      if (!this.tiles[`${ v9 },${ v8 }`]) {
        let v10 = this.tileCache?.[v9]?.[v8],
          v11 = typeof v10 == 'string' ? v10 : v10?.domain ?? null;
        this.tiles[`${ v9 },${ v8 }`] = new v99({
          v47: v9,
          v82: v8,
          domain: v11 ?? null
        });
      }
      return this.tiles[`${ v9 },${ v8 }`];
    }
    removeTile(v9) {
      v9.unrender(), delete this.tiles[`${ v9.v47 },${ v9.v82 }`];
    }
    clear() {
      Object.values(this.tiles).forEach(v9 => v9.unrender()), this.tiles = {};
    }
    async fetchTiles() {
      if (this.tileCache = (await v6.api.makeRequest('/api/tiles').then(v9 => v9.json())).tiles, 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        let v9 = {};
        for (let v8 in this.tileCache)
          for (let v10 in this.tileCache[v8]) {
            let v11 = this.tileCache[v8][v10];
            typeof v11 == 'object' && v11.domain && v11.updated_at && (v9[v11.domain] = v11.updated_at.toString());
          }
        Object.keys(v9).length > 0 && navigator.serviceWorker.controller.postMessage({
          type: 'tile-updates',
          updates: v9
        });
      }
      for (let v9 in this.tileCache)
        for (let v8 in this.tileCache[v9]) {
          let v10 = this.tileCache[v9][v8],
            v11 = typeof v10 == 'string' ? v10 : v10?.domain ?? null,
            v29 = this.tiles[`${ v9 },${ v8 }`];
          v29 && v29.domain !== v11 && v29.setDomain(v11);
        }
      this.loaded || setTimeout(() => {
        this.loaded = !0;
        let v9 = document.getElementById('loading'),
          v8 = document.getElementById('app');
        v9.hidden = !0, v8.hidden = !1, clearInterval(v121);
      }, 300);
    }
    async fetchLocks() {
      this.lockCache = (await v6.api.makeRequest('/api/locks').then(v9 => v9.json())).locks;
      for (let v9 in this.lockCache) {
        let v8 = this.tiles[v9];
        v8 && v8.element && v8.setLocked(!0);
      }
    }
  };
v6.plot = new v122();
var v123 = document.getElementById('plot'),
  v124 = class {
    constructor() {
      if (this.v47 = 0, this.v82 = 0, this.zoom = 1, this.width = window.innerWidth, this.height = window.innerHeight, this.renderedTiles = new Set(), this.centerOn(100, 100), location.hash.startsWith('#') && location.hash.includes(','))
        try {
          let [v39, v40] = location.hash.slice(1).split(',');
          this.centerOn(parseInt(v39), parseInt(v40)), location.hash = '';
        } catch {}
      let v9 = 0,
        v8 = 0;
      setInterval(() => {
        let v39 = this.v47 + this.width / 2,
          v40 = this.v82 + this.height / 2;
        (v39 != v9 || v40 != v8) && (v9 = v39, v8 = v40);
      }, 1000), window.addEventListener('resize', () => {
        this.width = window.innerWidth, this.height = window.innerHeight, this.renderTilesInView();
      });
      let v10 = 0;
      this.zoomEnabled = !0, this.wheelHandler = v39 => {
        if (!this.zoomEnabled || v39.target.closest('.tile.active'))
          return;
        v39.preventDefault();
        let v40 = v39.deltaY;
        if (Math.abs(v40) > 1 && Date.now() - v10 > 100) {
          let v43 = v33.indexOf(this.zoom) + (v40 > 0 ? -1 : 1);
          if (v43 >= 1 && v43 < v33.length) {
            let v44 = v6.mouse?.v47 || this.width / 2,
              v45 = v6.mouse?.v82 || this.height / 2;
            this.zoomTo(v44, v45, v33[v43]), v10 = Date.now();
          }
        }
      }, window.addEventListener('wheel', this.wheelHandler, {
        passive: !1
      });
      let v11 = 0,
        v29 = {
          v47: 0,
          v82: 0
        },
        v26 = v39 => {
          let v40 = v39[0].clientX - v39[1].clientX,
            v42 = v39[0].clientY - v39[1].clientY;
          return Math.sqrt(v40 * v40 + v42 * v42);
        },
        v36 = v39 => ({
          v47: (v39[0].clientX + v39[1].clientX) / 2,
          v82: (v39[0].clientY + v39[1].clientY) / 2
        });
      document.addEventListener('touchstart', v39 => {
        v39.touches.length === 2 && (v11 = v26(v39.touches), v29 = v36(v39.touches));
      }, {
        passive: !0
      }), document.addEventListener('touchmove', v39 => {
        if (this.zoomEnabled && v39.touches.length === 2) {
          if (v39.target.closest('.tile.active'))
            return;
          let v40 = v26(v39.touches),
            v42 = v36(v39.touches);
          if (v11 > 0) {
            let v43 = v40 / v11,
              v44 = v33.indexOf(this.zoom);
            v43 > 1.1 && v44 < v33.length - 1 ? (this.zoomTo(v42.v47, v42.v82, v33[v44 + 1]), v11 = v40) : v43 < 0.9 && v44 > 1 && (this.zoomTo(v42.v47, v42.v82, v33[v44 - 1]), v11 = v40);
          }
          v29 = v42, v39.preventDefault();
        }
      }, {
        passive: !1
      }), document.addEventListener('touchend', v39 => {
        v39.touches.length < 2 && (v11 = 0);
      }), this.keysPressed = {
        ArrowUp: !1,
        ArrowDown: !1,
        ArrowLeft: !1,
        ArrowRight: !1
      }, this.moveSpeed = 5;
      let v27 = v39 => {
          v39.key in this.keysPressed && (v39.preventDefault(), this.keysPressed[v39.key] = !0);
        },
        v28 = v39 => {
          v39.key in this.keysPressed && (v39.preventDefault(), this.keysPressed[v39.key] = !1);
        };
      window.addEventListener('keydown', v27), window.addEventListener('keyup', v28);
      let v38 = () => {
        if (!v6.plot?.activeTile) {
          let v39 = 0,
            v40 = 0;
          this.keysPressed.ArrowLeft && (v39 -= this.moveSpeed), this.keysPressed.ArrowRight && (v39 += this.moveSpeed), this.keysPressed.ArrowUp && (v40 -= this.moveSpeed), this.keysPressed.ArrowDown && (v40 += this.moveSpeed), (v39 !== 0 || v40 !== 0) && this.move(this.v47 + v39, this.v82 + v40);
        }
        requestAnimationFrame(v38);
      };
      v38();
    }
    move(v9, v8) {
      this.v47 = Math.round(v9), this.v82 = Math.round(v8), this.updatePlotTransform(), this.renderTilesInView();
    }
    updatePlotTransform() {
      v123.style.transform = `translate3d(${ -this.v47 }px, ${ -this.v82 }px, 0) scale(${ this.zoom })`;
    }
    zoomTo(v9, v8, v10) {
      let v11 = (this.v47 + v9) / this.zoom,
        v29 = (this.v82 + v8) / this.zoom;
      this.zoom = v10, this.v47 = v11 * this.zoom - v9, this.v82 = v29 * this.zoom - v8, v6.ui.zoomSlider.value = this.zoom, this.move(this.v47, this.v82);
    }
    centerOn(v9, v8) {
        let v10 = v9 * this.zoom - this.width / 2,
          v11 = v8 * this.zoom - this.height / 2;
        this.move(v10, v11);
      }
      * getTilesInView() {
        let v9 = v99.toTilePosition((this.v47 - 250 * this.zoom) / this.zoom, (this.v82 - 250 * this.zoom) / this.zoom),
          v8 = v99.toTilePosition((this.v47 + 250 * this.zoom + this.width) / this.zoom, (this.v82 + 250 * this.zoom + this.height) / this.zoom);
        for (let v10 = v9.v47; v10 < v8.v47; v10++)
          for (let v11 = v9.v82; v11 < v8.v82; v11++) {
            let v29 = v6.plot.getTile(v10, v11);
            v29 && (yield v29);
          }
      }
      * getTilesInViewWithBuffer(v9 = 500) {
        let v8 = v99.toTilePosition((this.v47 - 250 * this.zoom - v9) / this.zoom, (this.v82 - 250 * this.zoom - v9) / this.zoom),
          v10 = v99.toTilePosition((this.v47 + 250 * this.zoom + this.width + v9) / this.zoom, (this.v82 + 250 * this.zoom + this.height + v9) / this.zoom);
        for (let v11 = v8.v47; v11 < v10.v47; v11++)
          for (let v29 = v8.v82; v29 < v10.v82; v29++) {
            let v26 = v6.plot.getTile(v11, v29);
            v26 && (yield v26);
          }
      }
    isTileWithinBuffer(v9, v8 = 500) {
      let v10 = v9.v47 * 250,
        v11 = v9.v82 * 250,
        v29 = 250,
        v26 = this.v47 / this.zoom,
        v36 = (this.v47 + this.width) / this.zoom,
        v27 = this.v82 / this.zoom,
        v28 = (this.v82 + this.height) / this.zoom,
        v38 = v10 + v29,
        v39 = v11 + v29,
        v40 = v8 / this.zoom,
        v42 = 0;
      v38 < v26 ? v42 = v26 - v38 : v10 > v36 && (v42 = v10 - v36);
      let v43 = 0;
      return v39 < v27 ? v43 = v27 - v39 : v11 > v28 && (v43 = v11 - v28), Math.sqrt(v42 * v42 + v43 * v43) <= v40;
    }
    renderTilesInView() {
      let v9 = new Set(),
        v8 = 260;
      for (let v10 of this.getTilesInViewWithBuffer(v8))
        v10.render(), v9.add(v10);
      if (this.renderedTiles)
        for (let v10 of this.renderedTiles)
          v9.has(v10) || (this.isTileWithinBuffer(v10, v8) ? v9.add(v10) : v10.unrender());
      this.renderedTiles = v9;
    }
    setZoomEnabled(v9) {
      this.zoomEnabled = v9;
    }
  };
v6.camera = new v124();
var v125 = class {
  constructor() {
    this.v47 = 0, this.v82 = 0, this.worldX = 0, this.worldY = 0, this.tileX = 0, this.tileY = 0, this.down = !1;
    let v9 = 0,
      v8 = 0,
      v10 = 0,
      v11 = 0,
      v29 = 0,
      v26 = (v28, v38, v39) => {
        if (!v39.closest('#plot') || v39.closest('.tile-info, .tile-admin-panel, .tile-vote-menu'))
          return !1;
        let v40 = v6.plot.getTile(this.tileX, this.tileY);
        return v6.plot.activeTile && v6.plot.activeTile.id === v40.id ? !1 : (this.down = !0, v10 = v28, v11 = v38, v9 = v6.camera.v47, v8 = v6.camera.v82, v29 = Date.now(), !0);
      },
      v36 = () => {
        if (!this.down)
          return;
        this.down = !1;
        let v28 = Math.abs(this.v47 - v10),
          v38 = Math.abs(this.v82 - v11);
        Date.now() - v29 < 400 && v28 < 10 && v38 < 10 && v6.plot.getTile(this.tileX, this.tileY).setActive(!0);
      },
      v27 = (v28, v38) => {
        this.v47 = v28, this.v82 = v38;
        let v39 = v6.camera;
        this.worldX = (v39.v47 + this.v47) / v39.zoom, this.worldY = (v39.v82 + this.v82) / v39.zoom;
        let v40 = v99.toTilePosition(this.worldX, this.worldY);
        if (this.tileX = v40.v47, this.tileY = v40.v82, v6.ui.coords.textContent = `${ this.tileX }, ${ this.tileY }`, document.documentElement.style.setProperty('--coords-width', v6.ui.coords.offsetWidth + 'px'), this.down) {
          let v42 = this.v47 - v10,
            v43 = this.v82 - v11;
          v39.move(v9 - v42, v8 - v43);
        }
      };
    document.addEventListener('mousedown', v28 => {
      v26(v28.clientX, v28.clientY, v28.target) && v28.preventDefault();
    }), document.addEventListener('mouseup', v28 => {
      v36();
    }), document.addEventListener('mousemove', v28 => {
      v27(v28.clientX, v28.clientY);
    }), document.addEventListener('touchstart', v28 => {
      if (v28.touches.length === 1) {
        let v38 = v28.touches[0];
        v26(v38.clientX, v38.clientY, v38.target);
      }
    }, {
      passive: !0
    }), document.addEventListener('touchend', v28 => {
      v36();
    }), document.addEventListener('touchcancel', v28 => {
      this.down = !1;
    }), document.addEventListener('touchmove', v28 => {
      if (v28.touches.length === 1) {
        let v38 = v28.touches[0];
        v27(v38.clientX, v38.clientY), this.down && v38.target.closest('#plot') && !v38.target.closest('.tile.active') && v28.preventDefault();
      }
    }, {
      passive: !1
    });
  }
};
v6.mouse = new v125();
var v126 = document.getElementById('plot'),
  v127 = document.getElementById('dashboard-modal'),
  v128 = '/s/img/cursor.png',
  v129 = 150,
  v130 = 50,
  v131 = 100,
  v132 = 100,
  v133 = 150,
  v134 = 500,
  v135 = 0.6,
  v136 = class {
    constructor() {
      this.cursors = new Map(), this.lastPositionSent = 0, this.currentNick = null, this.mouseWorldX = 0, this.mouseWorldY = 0, this.setupWsHandlers(), this.setupMouseTracking(), this.setupSiteChangeListener(), this.setupMiddleClick(), this.setupViewportChangeListener();
    }
    setupWsHandlers() {
      let v9 = v6.ws;
      v9.on('open', () => {
        this.sendNickIfSelected();
      }), v9.on('close', () => {
        this.clearAllCursors();
      }), v9.on('cursors', v8 => {
        for (let v10 of v8.cursors)
          this.addCursor(v10.id, v10.nick, v10.v47, v10.v82);
      }), v9.on('join', v8 => {
        this.addCursor(v8.id, v8.nick, 0, 0);
      }), v9.on('leave', v8 => {
        this.removeCursor(v8.id);
      }), v9.onBinary(v8 => {
        let v10 = new Int32Array(v8);
        if (v10.length >= 3) {
          let v11 = v10[0],
            v29 = v10[1],
            v26 = v10[2];
          this.updateCursorPosition(v11, v29, v26);
        }
      });
    }
    addCursor(v9, v8, v10, v11) {
      if (v8 === this.currentNick)
        return;
      if (this.cursors.has(v9)) {
        this.updateCursorPosition(v9, v10, v11);
        return;
      }
      this.cursors.set(v9, {
        id: v9,
        nick: v8,
        v47: v10,
        v82: v11,
        element: null
      }), this.updateElementPosition(v9, v10, v11);
      let v29 = this.cursors.get(v9);
      v29.element && (v29.element.style.opacity = this.getCursorOpacityFromCenter());
    }
    removeCursor(v9) {
      let v8 = this.cursors.get(v9);
      v8 && (v8.element && v8.element.parentNode && v8.element.remove(), this.cursors.delete(v9));
    }
    updateCursorPosition(v9, v8, v10) {
      let v11 = this.cursors.get(v9);
      v11 && (v11.v47 = v8, v11.v82 = v10, this.updateElementPosition(v9, v8, v10));
    }
    isCursorOnScreen(v9, v8) {
      let v10 = v6.camera;
      if (!v10)
        return !0;
      let v11 = v10.v47 / v10.zoom,
        v29 = (v10.v47 + v10.width) / v10.zoom,
        v26 = v10.v82 / v10.zoom,
        v36 = (v10.v82 + v10.height) / v10.zoom;
      return v9 >= v11 && v9 <= v29 && v8 >= v26 && v8 <= v36;
    }
    updateElementPosition(v9, v8, v10) {
      let v11 = this.cursors.get(v9);
      if (!v11)
        return;
      let v29 = this.isCursorOnScreen(v8, v10);
      if (v8 === 0 && v10 === 0 || !v29)
        v11.element && v11.element.parentNode && (v11.element.remove(), v11.element = null);
      else {
        if (!v11.element || !v11.element.parentNode) {
          let v26 = document.createElement('div');
          v26.className = 'cursor-container', v26.innerHTML = `
                    <img class="cursor-image" src="${ v128 }" alt="cursor" />
                    <div class="cursor-nick">${ this.escapeHTML(v11.nick) }</div>
                `, v26.style.opacity = this.getCursorOpacityFromCenter(), v11.element = v26, v126.appendChild(v26);
        }
        v11.element.style.transform = `translate(${ v8 }px, ${ v10 }px)`, this.updateNickOpacity(v11.element, v8, v10);
      }
    }
    updateNickOpacity(v9, v8, v10) {
      let v11 = v9.querySelector('.cursor-nick');
      if (!v11)
        return;
      let v29 = this.mouseWorldX - v8,
        v26 = this.mouseWorldY - v10,
        v36 = Math.sqrt(v29 * v29 + v26 * v26),
        v27 = Math.max(0, 1 - v36 / v129);
      v11.style.opacity = v27;
    }
    updateAllNickOpacities() {
      for (let v9 of this.cursors.values())
        v9.element && this.updateNickOpacity(v9.element, v9.v47, v9.v82);
    }
    getCursorOpacityFromCenter() {
      let v9 = this.mouseWorldX - v131,
        v8 = this.mouseWorldY - v132,
        v10 = Math.sqrt(v9 * v9 + v8 * v8);
      return v10 <= v133 ? 0 : v10 >= v134 ? v135 : (v10 - v133) / (v134 - v133) * v135;
    }
    updateAllCursorOpacities() {
      let v9 = this.getCursorOpacityFromCenter();
      for (let v8 of this.cursors.values())
        v8.element && (v8.element.style.opacity = v9);
    }
    clearAllCursors() {
      for (let v9 of this.cursors.values())
        v9.element && v9.element.parentNode && v9.element.remove();
      this.cursors.clear();
    }
    updateAllCursorVisibility() {
      for (let v9 of this.cursors.values())
        this.updateElementPosition(v9.id, v9.v47, v9.v82);
    }
    setupMouseTracking() {
      document.addEventListener('mousemove', v9 => {
        let v8 = v6.camera;
        if (!v8 || (this.mouseWorldX = Math.round((v8.v47 + v9.clientX) / v8.zoom), this.mouseWorldY = Math.round((v8.v82 + v9.clientY) / v8.zoom), this.updateAllNickOpacities(), this.updateAllCursorOpacities(), this.updateAllCursorVisibility(), !v6.ws.isConnected) || !this.currentNick || v12.activeModal || v127?.classList.contains('active') || Date.now() - this.lastPositionSent < 25)
          return;
        let v10 = new Int16Array(3);
        v10[0] = this.mouseWorldX, v10[1] = this.mouseWorldY, v10[2] = 0, v6.ws.send(v10.buffer), this.lastPositionSent = Date.now();
      });
    }
    setupSiteChangeListener() {
      let v9 = v6.ui?.siteSelector;
      v9 && v9.addEventListener('change', () => {
        this.sendNickIfSelected();
      });
    }
    setupViewportChangeListener() {
      window.addEventListener('resize', () => {
        this.updateAllCursorVisibility();
      });
    }
    setupMiddleClick() {
      document.addEventListener('mousedown', v9 => {
        if (v9.button !== 1 || this.getCursorOpacityFromCenter() < 0.05)
          return;
        let v10 = this.getClosestCursor();
        v10 && v10.distance <= v130 && (v9.preventDefault(), window.open(`https://${ v10.cursor.nick }`, '_blank'));
      });
    }
    getClosestCursor() {
      let v9 = null,
        v8 = 1 / 0;
      for (let v10 of this.cursors.values()) {
        let v11 = this.mouseWorldX - v10.v47,
          v29 = this.mouseWorldY - v10.v82,
          v26 = Math.sqrt(v11 * v11 + v29 * v29);
        v26 < v8 && (v8 = v26, v9 = v10);
      }
      return v9 ? {
        cursor: v9,
        distance: v8
      } : null;
    }
    sendNickIfSelected() {
      if (!v6.ws.isConnected)
        return;
      let v9 = v6.user?.selectedSite;
      if (!v9 || !v9.domain) {
        this.currentNick = null;
        return;
      }
      let v8 = v9.domain;
      this.currentNick = v8;
      for (let [v10, v11] of this.cursors.entries())
        v11.nick === v8 && this.removeCursor(v10);
      v6.ws.sendJSON({
        type: 'nick',
        value: v8
      });
    }
    escapeHTML(v9) {
      return v9 ? v9.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }
  },
  v137 = v136;
if ('serviceWorker' in navigator) {
  let v9 = 'sw_version',
    v8 = async () => {
      try {
        let v11 = await navigator.serviceWorker.register('/sw.js');
        return console.log('[SW] Service Worker registered:', v11.scope), v11;
      } catch (v11) {
        return console.error('[SW] Service Worker registration failed:', v11), null;
      }
    };
  (async () => {
    let v11 = localStorage.getItem(v9),
      v29 = '12';
    if (v11 !== v29) {
      console.log(`[SW] Version mismatch: stored=${ v11 }, current=${ v29 }`);
      let v26 = await navigator.serviceWorker.getRegistrations();
      for (let v27 of v26)
        await v27.unregister(), console.log('[SW] Unregistered old service worker');
      let v36 = await caches.keys();
      await Promise.all(v36.map(v27 => {
        if (v27.includes('webtiles'))
          return console.log(`[SW] Deleting cache: ${ v27 }`), caches.delete(v27);
      })), localStorage.setItem(v9, v29), await v8();
    } else
      (await navigator.serviceWorker.getRegistrations()).length === 0 && await v8();
  })(), navigator.serviceWorker.ready.then(() => {
    navigator.serviceWorker.controller.postMessage({
      type: 'clear-cache'
    });
  });
}
v6.cursors = new v137();
v6.user?.admin && (window.WebTiles = {
  ...v6,
  classes: {
    Tile: v99,
    Camera: v124,
    Plot: v122,
    Mouse: v125,
    Cursors: v137
  }
});
var v138 = Date.now();
async function v139() {
  let v9 = await (await v6.api.makeRequest('/s/dist/buildtime.txt')).text();
  return parseInt(v9);
}
v139().then(v5 => {
  v138 = v5;
});
var v140 = setInterval(async () => {
  let v5 = await v139();
  if (v5 !== v138) {
    clearInterval(v140), v138 = v5;
    let v9 = document.createElement('div');
    v9.id = 'update-toast', v9.innerHTML = `
            <span>A new WebTiles version is available!</span>
            <button id="refresh-btn">Refresh</button>
        `, document.body.appendChild(v9), document.getElementById('refresh-btn').addEventListener('click', () => {
      location.reload();
    });
  }
}, 60000);