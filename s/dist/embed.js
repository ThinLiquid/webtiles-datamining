/* aad2c518ac4ca175f61f9f64c404fa2698092aa36ee1b41314c35697ee89ad4a */
var __var_0 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  __var_1 = document.getElementById('user-data');
if (__var_1)
  try {
    let __var_2 = JSON.parse(__var_1.textContent);
    __var_2 && __var_2.email_verified && (__var_0.user = __var_2);
  } catch (__var_2) {
    console.error(__var_2);
  }
var __var_3 = __var_0;

function __fn_4(__var_2, u, l) {
  let __var_5 = new WeakMap(),
    __var_6 = 2048,
    __var_7 = 10000,
    __var_8 = new WeakMap();

  function __fn_9(n) {}

  function __fn_10() {
    __var_8.clear = new WeakMap();
  }

  function __fn_11(n, s) {
    if (!n)
      return null;
    if (__var_5.has(n))
      return __var_5.get(n);
    let __var_12 = __var_2.createObject(U);
    return __var_12.native = n, __var_12.canvas = s, __var_5.set(n, __var_12), __var_12;
  }
  let __var_13 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'CanvasGradient', __var_13);
  let __var_14 = __var_2.getProperty(__var_13, 'prototype');
  __var_2.setProperty(__var_14, 'addColorStop', __var_2.createNativeFunction(function(n, s) {
    this.native.addColorStop(n, s);
  }));

  function __fn_15(n) {
    let __var_16 = __var_2.createObject(__var_13);
    return __var_16.native = n, __var_16;
  }
  let __var_17 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'CanvasPattern', __var_17);

  function __fn_18(n) {
    let __var_16 = __var_2.createObject(__var_17);
    return __var_16.native = n, __var_16;
  }
  let __var_19 = __var_2.createNativeFunction(function(n, __var_16) {
    if (n > __var_6 || __var_16 > __var_6)
      throw new Error(`ImageData size exceeds maximum (${ __var_6 }x${ __var_6 })`);
    __var_3.settings.logCalls && console.log(l.domain, 'create ImageData', this, n, __var_16);
    let __var_12 = new ImageData(n, __var_16);
    this.native = __var_12, this.width = n, this.height = __var_16;
  }, !0);
  __var_2.setProperty(u, 'ImageData', __var_19);
  let __var_20 = __var_2.getProperty(__var_19, 'prototype');
  __var_2.setProperty(__var_20, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native.width;
    })
  }), __var_2.setProperty(__var_20, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native.height;
    })
  }), __var_2.setProperty(__var_20, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      let __var_21 = this.native.data,
        __var_16 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      __var_2.setProperty(__var_16, 'length', __var_21.length);
      let __var_12 = __var_2.nativeToPseudo({});
      __var_2.setProperty(__var_12, 'length', __var_21.length), __var_2.setProperty(__var_12, 'get', __var_2.createNativeFunction(function(v) {
        return __var_21[v];
      })), __var_2.setProperty(__var_12, 'set', __var_2.createNativeFunction(function(v, E) {
        __var_3.settings.logCalls && console.log(l.domain, 'setImageData', this, v, E), __var_21[v] = E;
      }));
      for (let __var_22 = 0; __var_22 < Math.min(__var_21.length, 1000); __var_22++)
        (E => {
          __var_2.setProperty(__var_12, E, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __var_2.createNativeFunction(function() {
              return __var_21[E];
            }),
            set: __var_2.createNativeFunction(function(A) {
              __var_3.settings.logCalls && console.log(l.domain, 'setImageData', this, E, A), __var_21[E] = A;
            })
          });
        })(__var_22);
      return __var_12;
    })
  });

  function __fn_23(__var_21) {
    let __var_16 = __var_2.createObject(__var_19);
    return __var_16.native = __var_21, __var_16;
  }
  let __var_24 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'TextMetrics', __var_24);
  let __var_25 = __var_2.getProperty(__var_24, 'prototype'),
    __var_26 = [
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
  for (let __var_21 of __var_26)
    __var_2.setProperty(__var_25, __var_21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return this.native[__var_21];
      })
    });

  function __fn_27(__var_21) {
    let __var_16 = __var_2.createObject(__var_24);
    return __var_16.native = __var_21, __var_16;
  }
  let __var_28 = __var_2.createNativeFunction(function(__var_21) {
    __var_21 && __var_21.native ? this.native = new Path2D(__var_21.native) : typeof __var_21 == 'string' ? this.native = new Path2D(__var_21) : this.native = new Path2D();
  }, !0);
  __var_2.setProperty(u, 'Path2D', __var_28);
  let __var_29 = __var_2.getProperty(__var_28, 'prototype'),
    __var_30 = {
      addPath: function(__var_21, __var_16) {
        __var_21?.native && this.native.addPath(__var_21.native, __var_16);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__var_21, __var_16) {
        this.native.moveTo(__var_21, __var_16);
      },
      lineTo: function(__var_21, __var_16) {
        this.native.lineTo(__var_21, __var_16);
      },
      bezierCurveTo: function(__var_21, __var_16, __var_12, __var_22, E, A) {
        this.native.bezierCurveTo(__var_21, __var_16, __var_12, __var_22, E, A);
      },
      quadraticCurveTo: function(__var_21, __var_16, __var_12, __var_22) {
        this.native.quadraticCurveTo(__var_21, __var_16, __var_12, __var_22);
      },
      arc: function(__var_21, __var_16, __var_12, __var_22, E, A) {
        this.native.arc(__var_21, __var_16, __var_12, __var_22, E, A);
      },
      arcTo: function(__var_21, __var_16, __var_12, __var_22, E) {
        this.native.arcTo(__var_21, __var_16, __var_12, __var_22, E);
      },
      ellipse: function(__var_21, __var_16, __var_12, __var_22, E, A, D, k) {
        this.native.ellipse(__var_21, __var_16, __var_12, __var_22, E, A, D, k);
      },
      rect: function(__var_21, __var_16, __var_12, __var_22) {
        this.native.rect(__var_21, __var_16, __var_12, __var_22);
      },
      roundRect: function(__var_21, __var_16, __var_12, __var_22, E) {
        this.native.roundRect(__var_21, __var_16, __var_12, __var_22, E);
      }
    };
  for (let [__var_21, __var_16] of Object.entries(__var_30))
    __var_2.setProperty(__var_29, __var_21, __var_2.createNativeFunction(__var_16));
  let __var_31 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'CanvasRenderingContext2D', __var_31);
  let __var_32 = __var_2.getProperty(__var_31, 'prototype'),
    __var_33 = [
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
  for (let __var_21 of __var_33)
    __var_2.setProperty(__var_32, __var_21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return this.native[__var_21];
      }),
      set: __var_2.createNativeFunction(function(__var_16) {
        __var_3.settings.logCalls && console.log(l.domain, 'context set ' + __var_21, this, __var_16), this.native[__var_21] = __var_16;
      })
    });
  for (let __var_21 of [
      'fillStyle',
      'strokeStyle'
    ])
    __var_2.setProperty(__var_32, __var_21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        let __var_16 = this.native[__var_21];
        return __var_16;
      }),
      set: __var_2.createNativeFunction(function(__var_16) {
        __var_16?.native ? this.native[__var_21] = __var_16.native : this.native[__var_21] = __var_16;
      })
    });
  __var_2.setProperty(__var_32, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __var_34 = {
    clearRect: function(__var_21, __var_16, __var_12, __var_22) {
      this.native, this.native.clearRect(__var_21, __var_16, __var_12, __var_22);
    },
    fillRect: function(__var_21, __var_16, __var_12, __var_22) {
      this.native, this.native.fillRect(__var_21, __var_16, __var_12, __var_22);
    },
    strokeRect: function(__var_21, __var_16, __var_12, __var_22) {
      this.native, this.native.strokeRect(__var_21, __var_16, __var_12, __var_22);
    },
    fillText: function(__var_21, __var_16, __var_12, __var_22) {
      this.native, __var_22 !== void 0 ? this.native.fillText(String(__var_21).slice(0, 1000), __var_16, __var_12, __var_22) : this.native.fillText(String(__var_21).slice(0, 1000), __var_16, __var_12);
    },
    strokeText: function(__var_21, __var_16, __var_12, __var_22) {
      this.native, __var_22 !== void 0 ? this.native.strokeText(String(__var_21).slice(0, 1000), __var_16, __var_12, __var_22) : this.native.strokeText(String(__var_21).slice(0, 1000), __var_16, __var_12);
    },
    measureText: function(__var_21) {
      return __fn_27(this.native.measureText(String(__var_21).slice(0, 1000)));
    },
    getLineDash: function() {
      return __var_2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__var_21) {
      let __var_16 = __var_2.pseudoToNative(__var_21);
      this.native.setLineDash(__var_16);
    },
    createLinearGradient: function(__var_21, __var_16, __var_12, __var_22) {
      return __fn_15(this.native.createLinearGradient(__var_21, __var_16, __var_12, __var_22));
    },
    createRadialGradient: function(__var_21, __var_16, __var_12, __var_22, E, A) {
      return __fn_15(this.native.createRadialGradient(__var_21, __var_16, __var_12, __var_22, E, A));
    },
    createConicGradient: function(__var_21, __var_16, __var_12) {
      return __fn_15(this.native.createConicGradient(__var_21, __var_16, __var_12));
    },
    createPattern: function(__var_21, __var_16) {
      let __var_12 = __var_21?.native || __var_21;
      if (!__var_12)
        return null;
      let __var_22 = this.native.createPattern(__var_12, __var_16);
      return __var_22 ? __fn_18(__var_22) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__var_21, __var_16) {
      this.native.moveTo(__var_21, __var_16);
    },
    lineTo: function(__var_21, __var_16) {
      this.native.lineTo(__var_21, __var_16);
    },
    bezierCurveTo: function(__var_21, __var_16, __var_12, __var_22, E, A) {
      this.native.bezierCurveTo(__var_21, __var_16, __var_12, __var_22, E, A);
    },
    quadraticCurveTo: function(__var_21, __var_16, __var_12, __var_22) {
      this.native.quadraticCurveTo(__var_21, __var_16, __var_12, __var_22);
    },
    arc: function(__var_21, __var_16, __var_12, __var_22, E, A) {
      this.native.arc(__var_21, __var_16, __var_12, __var_22, E, A);
    },
    arcTo: function(__var_21, __var_16, __var_12, __var_22, E) {
      this.native.arcTo(__var_21, __var_16, __var_12, __var_22, E);
    },
    ellipse: function(__var_21, __var_16, __var_12, __var_22, E, A, D, k) {
      this.native.ellipse(__var_21, __var_16, __var_12, __var_22, E, A, D, k);
    },
    rect: function(__var_21, __var_16, __var_12, __var_22) {
      this.native.rect(__var_21, __var_16, __var_12, __var_22);
    },
    roundRect: function(__var_21, __var_16, __var_12, __var_22, E) {
      let __var_35 = __var_2.pseudoToNative(E);
      this.native.roundRect(__var_21, __var_16, __var_12, __var_22, __var_35);
    },
    fill: function(__var_21, __var_16) {
      this.native, __var_21?.native ? this.native.fill(__var_21.native, __var_16) : this.native.fill(__var_21);
    },
    stroke: function(__var_21) {
      this.native, __var_21?.native ? this.native.stroke(__var_21.native) : this.native.stroke();
    },
    clip: function(__var_21, __var_16) {
      __var_21?.native ? this.native.clip(__var_21.native, __var_16) : this.native.clip(__var_21);
    },
    isPointInPath: function(__var_21, __var_16, __var_12, __var_22) {
      return __var_21?.native ? this.native.isPointInPath(__var_21.native, __var_16, __var_12, __var_22) : this.native.isPointInPath(__var_21, __var_16, __var_12);
    },
    isPointInStroke: function(__var_21, __var_16, __var_12) {
      return __var_21?.native ? this.native.isPointInStroke(__var_21.native, __var_16, __var_12) : this.native.isPointInStroke(__var_21, __var_16);
    },
    getTransform: function() {
      let __var_21 = this.native.getTransform();
      return __var_2.nativeToPseudo({
        a: __var_21.a,
        __fn_10: __var_21.__fn_10,
        __var_20: __var_21.__var_20,
        __var_3: __var_21.__var_3,
        e: __var_21.e,
        __var_12: __var_21.__var_12
      });
    },
    rotate: function(__var_21) {
      this.native.rotate(__var_21);
    },
    scale: function(__var_21, __var_16) {
      this.native.scale(__var_21, __var_16);
    },
    translate: function(__var_21, __var_16) {
      this.native.translate(__var_21, __var_16);
    },
    transform: function(__var_21, __var_16, __var_12, __var_22, E, __var_35) {
      this.native.transform(__var_21, __var_16, __var_12, __var_22, E, __var_35);
    },
    setTransform: function(__var_21, __var_16, __var_12, __var_22, E, __var_35) {
      if (typeof __var_21 == 'object' && __var_21 !== null) {
        let __var_36 = __var_2.pseudoToNative(__var_21);
        this.native.setTransform(__var_36);
      } else
        this.native.setTransform(__var_21, __var_16, __var_12, __var_22, E, __var_35);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__var_21, __var_16, __var_12, __var_22, E, __var_35, __var_36, k, Y) {
      this.native;
      let __var_37 = __var_21?.native || __var_21;
      __var_37 && (k !== void 0 ? this.native.drawImage(__var_37, __var_16, __var_12, __var_22, E, __var_35, __var_36, k, Y) : __var_22 !== void 0 ? this.native.drawImage(__var_37, __var_16, __var_12, __var_22, E) : this.native.drawImage(__var_37, __var_16, __var_12));
    },
    createImageData: function(__var_21, __var_16) {
      if (__var_21?.native)
        return __fn_23(this.native.createImageData(__var_21.native));
      if (__var_21 > __var_6 || __var_16 > __var_6)
        throw new Error(`ImageData size exceeds maximum (${ __var_6 }x${ __var_6 })`);
      return __fn_23(this.native.createImageData(__var_21, __var_16));
    },
    getImageData: function(__var_21, __var_16, __var_12, __var_22) {
      if (__var_12 > __var_6 || __var_22 > __var_6)
        throw new Error(`ImageData size exceeds maximum (${ __var_6 }x${ __var_6 })`);
      return __fn_23(this.native.getImageData(__var_21, __var_16, __var_12, __var_22));
    },
    putImageData: function(__var_21, __var_16, __var_12, __var_22, E, __var_35, __var_36) {
      this.native, __var_21?.native && (__var_22 !== void 0 ? this.native.putImageData(__var_21.native, __var_16, __var_12, __var_22, E, __var_35, __var_36) : this.native.putImageData(__var_21.native, __var_16, __var_12));
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
  for (let [__var_21, __var_16] of Object.entries(__var_34))
    __var_2.setProperty(__var_32, __var_21, __var_2.createNativeFunction(__var_16));
  return {
    extendElement: function(__var_21, __var_16) {
      __var_2.setProperty(__var_21, 'getContext', __var_2.createNativeFunction(function(__var_12, __var_22) {
        __var_3.settings.logCalls && console.log(l.domain, 'getContext', this, __var_12, __var_22);
        let __var_38 = this.native;
        if (__var_38.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__var_38.width > __var_6 && (__var_38.width = __var_6), __var_38.height > __var_6 && (__var_38.height = __var_6), __var_12 === '2d') {
          let __var_35 = __var_38.getContext('2d', __var_22 ? __var_2.pseudoToNative(__var_22) : void 0);
          return __fn_11(__var_35, this);
        }
        throw new Error(`Context type "${ __var_12 }" is not supported`);
      })), __var_2.setProperty(__var_21, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __var_2.createNativeFunction(function(__var_12) {
          __var_3.settings.logCalls && console.log(l.domain, 'set width', this, __var_12), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__var_12, __var_6));
        })
      }), __var_2.setProperty(__var_21, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __var_2.createNativeFunction(function(__var_12) {
          __var_3.settings.logCalls && console.log(l.domain, 'set height', this, __var_12), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__var_12, __var_6));
        })
      }), __var_2.setProperty(__var_21, 'toDataURL', __var_2.createNativeFunction(function(__var_12, __var_22) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __var_3.settings.logCalls && console.log(l.domain, 'toDataURL', this, __var_12, __var_22), this.native.toDataURL(__var_12, __var_22);
      }));
    },
    resetDrawCounts: __fn_10,
    contextToPseudo: __fn_11
  };
}

function __fn_39(__var_2, u, l) {
  let __var_8 = 0,
    __fn_9 = window.location.origin;

  function __fn_10(__var_19) {
    if (typeof __var_19 != 'string' || __var_19.startsWith('/') || __var_19.startsWith('./') || __var_19.startsWith('../') || !__var_19.startsWith('http://') && !__var_19.startsWith('https://'))
      return !1;
    try {
      let __var_20 = new URL(__var_19);
      if (__var_20.origin === __fn_9 || __var_20.hostname === 'kicya.net' || __var_20.hostname.endsWith('.kicya.net') || __var_20.hostname === 'nekoweb.org')
        return !1;
      let __fn_23 = __var_20.hostname.toLowerCase();
      return !(__fn_23 === 'localhost' || __fn_23 === '127.0.0.1' || __fn_23 === '0.0.0.0' || __fn_23.startsWith('192.168.') || __fn_23.startsWith('10.') || __fn_23.startsWith('172.16.') || __fn_23.startsWith('172.17.') || __fn_23.startsWith('172.18.') || __fn_23.startsWith('172.19.') || __fn_23.startsWith('172.2') || __fn_23.startsWith('172.30.') || __fn_23.startsWith('172.31.') || __fn_23 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __fn_11 = 0,
    __var_13 = __var_2.nativeToPseudo({});
  __var_2.setProperty(u, '__xhrCallbacks', __var_13);

  function __var_14(__var_19, ...__var_20) {
    if (!__var_19 || typeof __var_19 != 'object')
      return;
    let __fn_23 = __fn_11++;
    __var_2.setProperty(__var_13, 'fn' + __fn_23, __var_19);
    let __var_24 = __var_20.map((__var_26, __fn_27) => {
        let __var_28 = 'arg' + __fn_23 + '_' + __fn_27;
        return __var_2.setProperty(__var_13, __var_28, __var_26), __var_28;
      }),
      __var_25 = __var_24.map(__var_26 => `__xhrCallbacks.${ __var_26 }`).join(',');
    __var_2.appendCode(`__xhrCallbacks.fn${ __fn_23 }(${ __var_25 }); delete __xhrCallbacks.fn${ __fn_23 }; ${ __var_24.map(__var_26 => `delete __xhrCallbacks.${ __var_26 }`).join('; ') };`);
  }
  let __fn_15 = __var_2.createNativeFunction(function() {
    __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __var_20 = this;
    this.native.onreadystatechange = function() {
      __var_2.setProperty(__var_20, 'readyState', __var_20.native.readyState), __var_20.native.readyState === 4 && (__var_2.setProperty(__var_20, 'status', __var_20.native.status), __var_2.setProperty(__var_20, 'statusText', __var_20.native.statusText), __var_2.setProperty(__var_20, 'responseText', __var_20.native.responseText?.slice(0, 5242880) || ''), __var_2.setProperty(__var_20, 'responseURL', __var_20.native.responseURL), __var_8 = Math.max(0, __var_8 - 1)), __var_20._eventHandlers.onreadystatechange && __var_14(__var_20._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __var_20._eventHandlers.onload && __var_14(__var_20._eventHandlers.onload);
    }, this.native.onerror = function() {
      __var_8 = Math.max(0, __var_8 - 1), __var_20._eventHandlers.onerror && __var_14(__var_20._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __var_8 = Math.max(0, __var_8 - 1), __var_20._eventHandlers.ontimeout && __var_14(__var_20._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __var_8 = Math.max(0, __var_8 - 1), __var_20._eventHandlers.onabort && __var_14(__var_20._eventHandlers.onabort);
    }, this.native.onprogress = function(__fn_23) {
      if (__var_20._eventHandlers.onprogress) {
        let __var_24 = __var_2.nativeToPseudo({
          loaded: __fn_23.loaded,
          total: __fn_23.total,
          lengthComputable: __fn_23.lengthComputable
        });
        __var_14(__var_20._eventHandlers.onprogress, __var_24);
      }
    }, this.native.onloadstart = function() {
      __var_20._eventHandlers.onloadstart && __var_14(__var_20._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __var_20._eventHandlers.onloadend && __var_14(__var_20._eventHandlers.onloadend);
    }, __var_2.setProperty(this, 'readyState', 0), __var_2.setProperty(this, 'status', 0), __var_2.setProperty(this, 'statusText', ''), __var_2.setProperty(this, 'responseText', ''), __var_2.setProperty(this, 'responseURL', '');
  }, !0);
  __var_2.setProperty(u, 'XMLHttpRequest', __fn_15);
  let __var_17 = __var_2.getProperty(__fn_15, 'prototype');
  __var_2.setProperty(__fn_15, 'UNSENT', 0), __var_2.setProperty(__fn_15, 'OPENED', 1), __var_2.setProperty(__fn_15, 'HEADERS_RECEIVED', 2), __var_2.setProperty(__fn_15, 'LOADING', 3), __var_2.setProperty(__fn_15, 'DONE', 4), __var_2.setProperty(__var_17, 'UNSENT', 0), __var_2.setProperty(__var_17, 'OPENED', 1), __var_2.setProperty(__var_17, 'HEADERS_RECEIVED', 2), __var_2.setProperty(__var_17, 'LOADING', 3), __var_2.setProperty(__var_17, 'DONE', 4);
  let __fn_18 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __var_19 of __fn_18)
    __var_2.setProperty(__var_17, __var_19, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return this._eventHandlers[__var_19] || null;
      }),
      set: __var_2.createNativeFunction(function(__var_20) {
        __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest set ' + __var_19, this, __var_20), this._eventHandlers[__var_19] = __var_20;
      })
    });
  __var_2.setProperty(__var_17, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __var_2.createNativeFunction(function(__var_19) {
      this.native.timeout = Math.min(__var_19, 30000);
    })
  }), __var_2.setProperty(__var_17, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __var_2.createNativeFunction(function(__var_19) {
      this.native.withCredentials = !1;
    })
  }), __var_2.setProperty(__var_17, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __var_2.createNativeFunction(function(__var_19) {
      (__var_19 === '' || __var_19 === 'text' || __var_19 === 'json') && (this.native.responseType = __var_19);
    })
  }), __var_2.setProperty(__var_17, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      let __var_19 = this.native.response;
      return this.native.responseType === 'json' ? __var_2.nativeToPseudo(__var_19) : typeof __var_19 == 'string' ? __var_19.slice(0, 5242880) : __var_19;
    })
  }), __var_2.setProperty(__var_17, 'open', __var_2.createNativeFunction(function(__var_19, __var_20, __fn_23, __var_24, __var_25) {
    if (!__fn_10(__var_20))
      throw new Error(`XHR request blocked: URL "${ __var_20 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __var_26 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__var_19 = String(__var_19).toUpperCase(), !__var_26.includes(__var_19))
      throw new Error(`HTTP method "${ __var_19 }" is not allowed`);
    __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest open', this, __var_19, __var_20, __fn_23, __var_24, __var_25), this._method = __var_19, this._url = __var_20, this._async = __fn_23 !== !1, this.native.open(__var_19, __var_20, this._async), this.native.timeout = 30000, __var_2.setProperty(this, 'readyState', this.native.readyState);
  })), __var_2.setProperty(__var_17, 'setRequestHeader', __var_2.createNativeFunction(function(__var_19, __var_20) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__var_19.toLowerCase()))
      throw new Error(`Setting header "${ __var_19 }" is not allowed`);
    __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest setRequestHeader', this, __var_19, __var_20), this._headers[__var_19] = __var_20, this.native.setRequestHeader(__var_19, __var_20);
  })), __var_2.setProperty(__var_17, 'send', __var_2.createNativeFunction(function(__var_19) {
    if (__var_8 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest send', this, __var_19), __var_8++;
    let __var_20 = null;
    __var_19 != null && (typeof __var_19 == 'string' ? __var_20 = __var_19.slice(0, 5242880) : typeof __var_19 == 'object' && (__var_20 = JSON.stringify(__var_2.pseudoToNative(__var_19)))), this.native.send(__var_20);
  })), __var_2.setProperty(__var_17, 'abort', __var_2.createNativeFunction(function() {
    __var_3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest abort', this), this.native.abort(), __var_8 = Math.max(0, __var_8 - 1);
  })), __var_2.setProperty(__var_17, 'getResponseHeader', __var_2.createNativeFunction(function(__var_19) {
    return this.native.getResponseHeader(__var_19);
  })), __var_2.setProperty(__var_17, 'getAllResponseHeaders', __var_2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __var_2.setProperty(__var_17, 'overrideMimeType', __var_2.createNativeFunction(function(__var_19) {
    this.native.overrideMimeType(__var_19);
  }));
}
var __var_40 = 'webtiles_storage',
  __var_41 = 1,
  __var_42 = 'localStorage',
  __var_43 = 1024 * 1024,
  __var_44 = 100,
  __var_45 = null,
  __var_46 = null;

function __fn_47() {
  return __var_46 || (__var_46 = new Promise((__var_2, u) => {
    let __var_48 = indexedDB.open(__var_40, __var_41);
    __var_48.onerror = () => u(__var_48.error), __var_48.onsuccess = () => {
      __var_45 = __var_48.result, __var_2(__var_45);
    }, __var_48.onupgradeneeded = __var_5 => {
      let __var_6 = __var_5.target.result;
      __var_6.objectStoreNames.contains(__var_42) || __var_6.createObjectStore(__var_42, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __var_46);
}
async function __fn_49(__var_2, u) {
  return await __fn_47(), new Promise((__var_48, __var_5) => {
    let __var_8 = __var_45.transaction(__var_42, 'readonly').objectStore(__var_42).get([
      __var_2,
      u
    ]);
    __var_8.onsuccess = () => __var_48(__var_8.result?.value ?? null), __var_8.onerror = () => __var_5(__var_8.error);
  });
}
async function __fn_50(__var_2, u, __var_48) {
  return await __fn_47(), new Promise((__var_5, __var_6) => {
    let __fn_9 = __var_45.transaction(__var_42, 'readwrite').objectStore(__var_42).put({
      site: __var_2,
      key: u,
      value: __var_48
    });
    __fn_9.onsuccess = () => __var_5(), __fn_9.onerror = () => __var_6(__fn_9.error);
  });
}
async function __fn_51(__var_2, u) {
  return await __fn_47(), new Promise((__var_48, __var_5) => {
    let __var_8 = __var_45.transaction(__var_42, 'readwrite').objectStore(__var_42).delete([
      __var_2,
      u
    ]);
    __var_8.onsuccess = () => __var_48(), __var_8.onerror = () => __var_5(__var_8.error);
  });
}
async function __fn_52(__var_2) {
  return await __fn_47(), new Promise((u, __var_48) => {
    let __var_8 = __var_45.transaction(__var_42, 'readonly').objectStore(__var_42).index('site').getAll(__var_2);
    __var_8.onsuccess = () => {
      let __fn_9 = __var_8.result.map(__fn_10 => __fn_10.key);
      u(__fn_9);
    }, __var_8.onerror = () => __var_48(__var_8.error);
  });
}
async function __fn_53(__var_2) {
  return await __fn_47(), new Promise((u, __var_48) => {
    let __var_8 = __var_45.transaction(__var_42, 'readonly').objectStore(__var_42).index('site').getAll(__var_2);
    __var_8.onsuccess = () => {
      let __fn_9 = 0;
      for (let __fn_10 of __var_8.result)
        __fn_9 += (__fn_10.key.length + __fn_10.value.length) * 2;
      u({
        size: __fn_9,
        count: __var_8.result.length
      });
    }, __var_8.onerror = () => __var_48(__var_8.error);
  });
}
async function __fn_54(__var_2) {
  return await __fn_47(), new Promise((u, __var_48) => {
    let __var_8 = __var_45.transaction(__var_42, 'readwrite').objectStore(__var_42).index('site').openCursor(__var_2);
    __var_8.onsuccess = __fn_9 => {
      let __fn_10 = __fn_9.target.result;
      __fn_10 ? (__fn_10.delete(), __fn_10.continue()) : u();
    }, __var_8.onerror = () => __var_48(__var_8.error);
  });
}

function __fn_55(__var_2, u, __var_48) {
  let __var_5 = __var_2.nativeToPseudo({});
  __var_2.setProperty(__var_5, 'getItem', __var_2.createAsyncFunction(function(__var_6, __var_7) {
    if (__var_3.settings.logCalls && console.log(__var_48, 'localStorage.getItem', this, __var_6), __var_6 == null) {
      __var_7(null);
      return;
    }
    __var_6 = String(__var_6), __fn_49(__var_48, __var_6).then(__var_8 => __var_7(__var_8)).catch(__var_8 => {
      console.error('localStorage.getItem error:', __var_8), __var_7(null);
    });
  })), __var_2.setProperty(__var_5, 'setItem', __var_2.createAsyncFunction(function(__var_6, __var_7, __var_8) {
    if (__var_3.settings.logCalls && console.log(__var_48, 'localStorage.setItem', this, __var_6, __var_7), __var_6 == null) {
      __var_8();
      return;
    }
    __var_6 = String(__var_6), __var_7 = String(__var_7), __fn_53(__var_48).then(({
      size: __fn_9,
      count: __fn_10
    }) => {
      __fn_49(__var_48, __var_6).then(__fn_11 => {
        if (__fn_11 === null && __fn_10 >= __var_44)
          throw new Error(`localStorage item limit exceeded (max ${ __var_44 } items)`);
        let __var_14 = __fn_11 ? (__var_6.length + __fn_11.length) * 2 : 0,
          __fn_15 = (__var_6.length + __var_7.length) * 2;
        if (__fn_9 - __var_14 + __fn_15 > __var_43)
          throw new Error(`localStorage size limit exceeded (max ${ __var_43 / 1024 }KB)`);
        return __fn_50(__var_48, __var_6, __var_7);
      }).then(() => __var_8()).catch(__fn_11 => {
        throw console.error('localStorage.setItem error:', __fn_11), __fn_11;
      });
    }).catch(__fn_9 => {
      console.error('localStorage.setItem error:', __fn_9), __var_8();
    });
  })), __var_2.setProperty(__var_5, 'removeItem', __var_2.createAsyncFunction(function(__var_6, __var_7) {
    if (__var_3.settings.logCalls && console.log(__var_48, 'localStorage.removeItem', this, __var_6), __var_6 == null) {
      __var_7();
      return;
    }
    __var_6 = String(__var_6), __fn_51(__var_48, __var_6).then(() => __var_7()).catch(__var_8 => {
      console.error('localStorage.removeItem error:', __var_8), __var_7();
    });
  })), __var_2.setProperty(__var_5, 'clear', __var_2.createAsyncFunction(function(__var_6) {
    __var_3.settings.logCalls && console.log(__var_48, 'localStorage.clear', this), __fn_54(__var_48).then(() => __var_6()).catch(__var_7 => {
      console.error('localStorage.clear error:', __var_7), __var_6();
    });
  })), __var_2.setProperty(__var_5, 'key', __var_2.createAsyncFunction(function(__var_6, __var_7) {
    __var_6 = parseInt(__var_6) || 0, __fn_52(__var_48).then(__var_8 => {
      __var_7(__var_6 >= 0 && __var_6 < __var_8.length ? __var_8[__var_6] : null);
    }).catch(__var_8 => {
      console.error('localStorage.key error:', __var_8), __var_7(null);
    });
  })), __var_2.setProperty(__var_5, 'getLength', __var_2.createAsyncFunction(function(__var_6) {
    __fn_53(__var_48).then(({
      count: __var_7
    }) => __var_6(__var_7)).catch(__var_7 => {
      console.error('localStorage.getLength error:', __var_7), __var_6(0);
    });
  })), __var_2.setProperty(u, 'localStorage', __var_5), __var_2.setProperty(u, 'sessionStorage', __var_5);
}
__fn_47().catch(__var_2 => {
  console.error('Failed to initialize storage DB:', __var_2);
});

function __fn_56(__var_2, u, __var_48, __var_5) {
  let __var_6 = __var_2.createNativeFunction(function() {}, !0);
  __var_2.setProperty(u, 'DOMParser', __var_6);
  let __var_7 = __var_2.getProperty(__var_6, 'prototype');
  __var_2.setProperty(__var_7, 'parseFromString', __var_2.createNativeFunction(function(__var_8, __fn_9) {
    if (__var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser parseFromString', this, __var_8, __fn_9), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__fn_9))
      throw new Error(`DOMParser: Unsupported MIME type "${ __fn_9 }"`);
    if (typeof __var_8 != 'string' && (__var_8 = String(__var_8)), __var_8.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __var_13 = new DOMParser().parseFromString(__var_8, __fn_9),
      __var_14 = __var_2.createObjectProto(__var_2.OBJECT_PROTO);

    function __fn_15(__var_17) {
      if (__var_17 == null)
        return null;
      let __fn_18 = __var_2.createObjectProto(__var_2.OBJECT_PROTO);
      return __fn_18.native = __var_17, __fn_18.fromDOMParser = !0, __var_2.setProperty(__fn_18, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __var_2.setProperty(__fn_18, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __var_2.setProperty(__fn_18, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __var_2.createNativeFunction(function(__var_19) {
          __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser set nodeValue', this, __var_19), this.native.nodeValue = __var_19;
        })
      }), __var_2.setProperty(__fn_18, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __var_2.createNativeFunction(function(__var_19) {
          __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser set textContent', this, __var_19), this.native.textContent = String(__var_19).slice(0, 50000);
        })
      }), __var_2.setProperty(__fn_18, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __var_2.setProperty(__fn_18, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __var_2.createNativeFunction(function(__var_19) {
          __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser set id', this, __var_19), this.native.id = String(__var_19).slice(0, 100);
        })
      }), __var_2.setProperty(__fn_18, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __var_2.createNativeFunction(function(__var_19) {
          __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser set className', this, __var_19), this.native.className = String(__var_19).slice(0, 1000);
        })
      }), __var_2.setProperty(__fn_18, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __var_2.createNativeFunction(function(__var_19) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __var_2.setProperty(__fn_18, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __var_2.setProperty(__fn_18, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          let __var_19 = Array.from(this.native.children),
            __var_20 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
          for (let __fn_23 = 0; __fn_23 < __var_19.length; __fn_23++)
            __var_2.setProperty(__var_20, __fn_23, __fn_15(__var_19[__fn_23]));
          return __var_2.setProperty(__var_20, 'length', __var_19.length), __var_20;
        })
      }), __var_2.setProperty(__fn_18, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          let __var_19 = Array.from(this.native.childNodes),
            __var_20 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
          for (let __fn_23 = 0; __fn_23 < __var_19.length; __fn_23++)
            __var_2.setProperty(__var_20, __fn_23, __fn_15(__var_19[__fn_23]));
          return __var_2.setProperty(__var_20, 'length', __var_19.length), __var_20;
        })
      }), __var_2.setProperty(__fn_18, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return __fn_15(this.native.firstChild);
        })
      }), __var_2.setProperty(__fn_18, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return __fn_15(this.native.lastChild);
        })
      }), __var_2.setProperty(__fn_18, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return __fn_15(this.native.firstElementChild);
        })
      }), __var_2.setProperty(__fn_18, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return __fn_15(this.native.lastElementChild);
        })
      }), __var_2.setProperty(__fn_18, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_48) ? null : (__var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get parentNode', this), __fn_15(this.native.parentNode));
        })
      }), __var_2.setProperty(__fn_18, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_48) ? null : (__var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get parentElement', this), __fn_15(this.native.parentElement));
        })
      }), __var_2.setProperty(__fn_18, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_48) ? null : (__var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get nextSibling', this), __fn_15(this.native.nextSibling));
        })
      }), __var_2.setProperty(__fn_18, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__var_48) ? null : (__var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get previousSibling', this), __fn_15(this.native.previousSibling));
        })
      }), __var_2.setProperty(__fn_18, 'getAttributeNames', __var_2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_19 = Array.from(this.native.getAttributeNames()),
          __var_20 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
        for (let __fn_23 = 0; __fn_23 < __var_19.length; __fn_23++)
          __var_2.setProperty(__var_20, __fn_23, __var_19[__fn_23]);
        return __var_2.setProperty(__var_20, 'length', __var_19.length), __var_20;
      })), __var_2.setProperty(__fn_18, 'getAttribute', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__var_19);
      })), __var_2.setProperty(__fn_18, 'setAttribute', __var_2.createNativeFunction(function(__var_19, __var_20) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__var_19 = String(__var_19).toLowerCase(), __var_19.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__var_19, String(__var_20)), __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser set attribute', this, __var_19, __var_20);
      })), __var_2.setProperty(__fn_18, 'hasAttribute', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__var_19);
      })), __var_2.setProperty(__fn_18, 'removeAttribute', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__var_48))
          throw new Error('No access.');
        this.native.removeAttribute(__var_19), __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser remove attribute', this, __var_19);
      })), __var_2.setProperty(__fn_18, 'querySelector', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __fn_15(this.native.querySelector(__var_19));
      })), __var_2.setProperty(__fn_18, 'querySelectorAll', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_20 = Array.from(this.native.querySelectorAll(__var_19)),
          __fn_23 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
        for (let __var_24 = 0; __var_24 < __var_20.length; __var_24++)
          __var_2.setProperty(__fn_23, __var_24, __fn_15(__var_20[__var_24]));
        return __var_2.setProperty(__fn_23, 'length', __var_20.length), __fn_23;
      })), __var_2.setProperty(__fn_18, 'getElementsByTagName', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_20 = Array.from(this.native.getElementsByTagName(__var_19)),
          __fn_23 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
        for (let __var_24 = 0; __var_24 < __var_20.length; __var_24++)
          __var_2.setProperty(__fn_23, __var_24, __fn_15(__var_20[__var_24]));
        return __var_2.setProperty(__fn_23, 'length', __var_20.length), __fn_23;
      })), __var_2.setProperty(__fn_18, 'getElementsByClassName', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __var_20 = Array.from(this.native.getElementsByClassName(__var_19)),
          __fn_23 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
        for (let __var_24 = 0; __var_24 < __var_20.length; __var_24++)
          __var_2.setProperty(__fn_23, __var_24, __fn_15(__var_20[__var_24]));
        return __var_2.setProperty(__fn_23, 'length', __var_20.length), __fn_23;
      })), __var_2.setProperty(__fn_18, 'getElementById', __var_2.createNativeFunction(function(__var_19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __fn_15(this.native.getElementById ? this.native.getElementById(__var_19) : null);
      })), __fn_18;
    }
    return __var_2.setProperty(__var_14, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __fn_15(__var_13.documentElement);
      })
    }), __var_2.setProperty(__var_14, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get head', this), __fn_15(__var_13.head);
      })
    }), __var_2.setProperty(__var_14, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_3.settings.logCalls && console.log(__var_5.domain, 'DOMParser get body', this), __fn_15(__var_13.body);
      })
    }), __var_2.setProperty(__var_14, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_13.title;
      })
    }), __var_2.setProperty(__var_14, 'querySelector', __var_2.createNativeFunction(function(__var_17) {
      return __fn_15(__var_13.querySelector(__var_17));
    })), __var_2.setProperty(__var_14, 'querySelectorAll', __var_2.createNativeFunction(function(__var_17) {
      let __fn_18 = Array.from(__var_13.querySelectorAll(__var_17)),
        __var_19 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      for (let __var_20 = 0; __var_20 < __fn_18.length; __var_20++)
        __var_2.setProperty(__var_19, __var_20, __fn_15(__fn_18[__var_20]));
      return __var_2.setProperty(__var_19, 'length', __fn_18.length), __var_19;
    })), __var_2.setProperty(__var_14, 'getElementById', __var_2.createNativeFunction(function(__var_17) {
      return __fn_15(__var_13.getElementById(__var_17));
    })), __var_2.setProperty(__var_14, 'getElementsByTagName', __var_2.createNativeFunction(function(__var_17) {
      let __fn_18 = Array.from(__var_13.getElementsByTagName(__var_17)),
        __var_19 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      for (let __var_20 = 0; __var_20 < __fn_18.length; __var_20++)
        __var_2.setProperty(__var_19, __var_20, __fn_15(__fn_18[__var_20]));
      return __var_2.setProperty(__var_19, 'length', __fn_18.length), __var_19;
    })), __var_2.setProperty(__var_14, 'getElementsByClassName', __var_2.createNativeFunction(function(__var_17) {
      let __fn_18 = Array.from(__var_13.getElementsByClassName(__var_17)),
        __var_19 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      for (let __var_20 = 0; __var_20 < __fn_18.length; __var_20++)
        __var_2.setProperty(__var_19, __var_20, __fn_15(__fn_18[__var_20]));
      return __var_2.setProperty(__var_19, 'length', __fn_18.length), __var_19;
    })), __var_14;
  }));
}

function __fn_57(__var_2, u, __var_48, __var_5) {
  let __var_6 = new WeakMap(),
    __var_7 = 1000,
    __var_8 = 5,
    __fn_9 = new WeakMap(),
    __fn_10 = 0,
    __fn_11 = __var_2.nativeToPseudo({});
  __var_2.setProperty(u, '__eventCallbacks', __fn_11);

  function __var_13(__var_37, o) {
    let __var_58 = __fn_10++;
    __var_2.setProperty(__fn_11, 'fn' + __var_58, __var_37), __var_2.setProperty(__fn_11, 'ev' + __var_58, o), __var_2.appendCode(`__eventCallbacks.fn${ __var_58 }(__eventCallbacks.ev${ __var_58 }); delete __eventCallbacks.fn${ __var_58 }; delete __eventCallbacks.ev${ __var_58 };`);
  }

  function __var_14() {
    return __var_48.getElementsByTagName('*').length;
  }

  function __fn_15(__var_37 = 1) {
    if (__var_14() + __var_37 > __var_7)
      throw new Error(`DOM element limit exceeded (max ${ __var_7 })`);
  }

  function __var_17(__var_37) {
    return __var_37 instanceof Element ? 1 + __var_37.getElementsByTagName('*').length : 0;
  }

  function __fn_18(__var_37, o = !1) {
    if (__var_37 == null)
      return null;
    if (__var_6.has(__var_37))
      return __var_6.get(__var_37);
    let __var_58 = __var_37 instanceof Element ? __var_29 : __var_24,
      __var_59 = __var_2.createObject(__var_58);
    return __var_59.native = __var_37, __var_59.fromDOMParser || (__var_59.fromDOMParser = o), __var_6.set(__var_37, __var_59), __var_59;
  }

  function __var_19(__var_37) {
    return __var_37 && __var_48.contains(__var_37);
  }

  function __var_20(__var_37) {
    return __var_19(__var_37) ? __var_37 : null;
  }

  function __fn_23(__var_37) {
    let __var_60 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
    for (let __var_58 = 0; __var_58 < __var_37.length; __var_58++)
      __var_2.setProperty(__var_60, __var_58, __fn_18(__var_37[__var_58]));
    return __var_2.setProperty(__var_60, 'length', __var_37.length), __var_60;
  }
  let __var_24 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'Node', __var_24);
  let __var_25 = __var_2.getProperty(__var_24, 'prototype'),
    __var_26 = {
      firstChild: function() {
        return __fn_18(__var_20(this.native.firstChild));
      },
      lastChild: function() {
        return __fn_18(__var_20(this.native.lastChild));
      },
      parentNode: function() {
        return __fn_18(__var_20(this.native.parentNode));
      },
      parentElement: function() {
        return __fn_18(__var_20(this.native.parentElement));
      },
      nextSibling: function() {
        return __fn_18(__var_20(this.native.nextSibling));
      },
      previousSibling: function() {
        return __fn_18(__var_20(this.native.previousSibling));
      },
      childNodes: function() {
        let __var_37 = Array.from(this.native.childNodes).filter(__var_19);
        return __fn_23(__var_37);
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
    __fn_27 = {
      textContent: function(__var_37) {
        __var_3.settings.logCalls && console.log(__var_5.domain, 'set textContent', this, __var_37), this.native.textContent = __var_37;
      },
      nodeValue: function(__var_37) {
        __var_3.settings.logCalls && console.log(__var_5.domain, 'set nodeValue', this, __var_37), this.native.nodeValue = __var_37;
      }
    };
  for (let [__var_37, __var_60] of Object.entries(__var_26)) {
    let __var_58 = {
      get: __var_2.createNativeFunction(__var_60)
    };
    __fn_27[__var_37] && (__var_58.set = __var_2.createNativeFunction(__fn_27[__var_37])), __var_2.setProperty(__var_25, __var_37, Interpreter.VALUE_IN_DESCRIPTOR, __var_58);
  }
  let __var_28 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__var_37) {
      if (!__var_37?.native)
        return null;
      if (__var_37.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __fn_15(__var_17(__var_37.native)), this.native.appendChild(__var_37.native), __var_3.settings.logCalls && console.log(__var_5.domain, 'appendChild', this, __var_37), __var_37;
    },
    append: function(__var_37) {
      for (let __var_60 of __var_37)
        if (__var_60?.native) {
          if (__var_60.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __fn_15(__var_17(__var_60.native)), this.native.appendChild(__var_60.native);
        }
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'append', this, __var_37), __var_37;
    },
    removeChild: function(__var_37) {
      return !__var_37?.native || !__var_19(__var_37.native) ? null : (__var_3.settings.logCalls && console.log(__var_5.domain, 'removeChild', this, __var_37), __fn_18(this.native.removeChild(__var_37.native)));
    },
    insertBefore: function(__var_37, __var_60) {
      if (!__var_37?.native)
        return null;
      if (__var_37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_48))
        throw new Error('No access.');
      __fn_15(__var_17(__var_37.native));
      let __var_58 = __var_60?.native || null;
      return this.native.insertBefore(__var_37.native, __var_58), __var_3.settings.logCalls && console.log(__var_5.domain, 'insertBefore', this, __var_37, __var_58), __var_37;
    },
    cloneNode: function(__var_37) {
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'cloneNode', this, __var_37), __fn_18(this.native.cloneNode(__var_37), this.fromDOMParser);
    },
    contains: function(__var_37) {
      return __var_37?.native ? this.native.contains(__var_37.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__var_48))
        throw new Error('No access.');
      this.native.remove(), __var_3.settings.logCalls && console.log(__var_5.domain, 'remove', this);
    },
    after: function(__var_37) {
      if (!__var_37?.native)
        return null;
      if (__var_37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_48))
        throw new Error('No access.');
      return __fn_15(__var_17(__var_37.native)), this.native.after(__var_37.native), __var_3.settings.logCalls && console.log(__var_5.domain, 'after', this, __var_37), __var_37;
    },
    before: function(__var_37) {
      if (!__var_37?.native)
        return null;
      if (__var_37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__var_48))
        throw new Error('No access.');
      return __fn_15(__var_17(__var_37.native)), this.native.before(__var_37.native), __var_3.settings.logCalls && console.log(__var_5.domain, 'before', this, __var_37), __var_37;
    }
  };
  for (let [__var_37, __var_60] of Object.entries(__var_28))
    __var_2.setProperty(__var_25, __var_37, __var_2.createNativeFunction(__var_60));
  let __var_29 = __var_2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __var_2.setProperty(u, 'Element', __var_29);
  let __var_30 = __var_2.createObject(__var_24);
  __var_2.setProperty(__var_29, 'prototype', __var_30);

  function __var_31(__var_37) {
    if (!__var_37)
      return '';
    __var_37 = String(__var_37);
    let __var_60 = __var_37.toLowerCase().trim();
    if (__var_60.startsWith('javascript:') || __var_60.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__var_60.startsWith('data:'))
      return __var_37;
    try {
      let __var_58 = new URL(__var_37, location.href);
      if (__var_58.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __var_59 = __var_58.pathname + __var_58.search + __var_58.hash;
      return __var_59.startsWith(`/t/${ __var_5.domain }/`) || (__var_59 = `/t/${ __var_5.domain }/${ __var_59 }`.replaceAll('//', '/')), __var_59;
    } catch (__var_58) {
      if (__var_58.message.includes('not allowed'))
        throw __var_58;
      let __var_59 = __var_37;
      return !__var_59.startsWith(`/t/${ __var_5.domain }/`) && !__var_59.startsWith('#') && (__var_59 = `/t/${ __var_5.domain }/${ __var_59 }`.replaceAll('//', '/')), __var_59;
    }
  }
  let __var_32 = {
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
        let __var_37 = Array.from(this.native.children).filter(__var_19);
        return __fn_23(__var_37);
      },
      firstElementChild: function() {
        return __fn_18(__var_20(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __fn_18(__var_20(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __fn_18(__var_20(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __fn_18(__var_20(this.native.previousElementSibling));
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
    __var_33 = {
      innerText: function(__var_37) {
        this.native.innerText = __var_37.slice(0, 1000);
      },
      innerHTML: function(__var_37) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__var_37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __var_37, __var_3.settings.logCalls && console.log(__var_5.domain, 'set id', this, __var_37);
      },
      className: function(__var_37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __var_37, __var_3.settings.logCalls && console.log(__var_5.domain, 'set className', this, __var_37);
      },
      src: function(__var_37) {
        this.native.src = __var_31(__var_37), __var_3.settings.logCalls && console.log(__var_5.domain, 'set src', this, __var_37);
      },
      href: function(__var_37) {
        this.native.href = this.native.tagName === 'A' ? __var_37 : __var_31(__var_37), __var_3.settings.logCalls && console.log(__var_5.domain, 'set href', this, __var_37);
      },
      hidden: function(__var_37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__var_37;
      },
      disabled: function(__var_37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__var_37;
      },
      checked: function(__var_37) {
        this.native.checked = !!__var_37;
      },
      selected: function(__var_37) {
        this.native.selected = !!__var_37;
      },
      readOnly: function(__var_37) {
        this.native.readOnly = !!__var_37;
      },
      required: function(__var_37) {
        this.native.required = !!__var_37;
      },
      draggable: function(__var_37) {
        this.native.draggable = !!__var_37;
      },
      title: function(__var_37) {
        this.native.title = String(__var_37).slice(0, 1000);
      },
      alt: function(__var_37) {
        this.native.alt = String(__var_37).slice(0, 1000);
      },
      name: function(__var_37) {
        this.native.name = String(__var_37).slice(0, 100);
      },
      type: function(__var_37) {
        this.native.type = String(__var_37).slice(0, 50);
      },
      value: function(__var_37) {
        this.native.value = String(__var_37).slice(0, 10000);
      },
      placeholder: function(__var_37) {
        this.native.placeholder = String(__var_37).slice(0, 500);
      },
      tabIndex: function(__var_37) {
        this.native.tabIndex = parseInt(__var_37) || 0;
      },
      scrollTop: function(__var_37) {
        this.native.scrollTop = __var_37;
      },
      scrollLeft: function(__var_37) {
        this.native.scrollLeft = __var_37;
      },
      currentTime: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__var_37) || 0));
      },
      muted: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__var_37);
      },
      volume: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__var_37) || 0)));
      },
      loop: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__var_37);
      },
      autoplay: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__var_37);
      },
      controls: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__var_37);
      },
      playbackRate: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__var_37) || 1)));
      },
      defaultPlaybackRate: function(__var_37) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__var_37) || 1)));
      },
      preload: function(__var_37) {
        if (this.native instanceof HTMLMediaElement) {
          let __var_60 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __var_60.includes(__var_37) ? __var_37 : 'auto';
        }
      },
      poster: function(__var_37) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __var_31(__var_37));
      }
    };
  for (let [__var_37, __var_60] of Object.entries(__var_32)) {
    let __var_58 = {
      get: __var_2.createNativeFunction(__var_60)
    };
    __var_33[__var_37] && (__var_58.set = __var_2.createNativeFunction(__var_33[__var_37])), __var_2.setProperty(__var_30, __var_37, Interpreter.VALUE_IN_DESCRIPTOR, __var_58);
  }
  let __var_34 = {
    getAttributeNames: function() {
      let __var_37 = Array.from(this.native.getAttributeNames()),
        __var_60 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      for (let __var_58 = 0; __var_58 < __var_37.length; __var_58++)
        __var_2.setProperty(__var_60, __var_58, __var_37[__var_58]);
      return __var_2.setProperty(__var_60, 'length', __var_37.length), __var_60;
    },
    getAttribute: function(__var_37) {
      return this.native.getAttribute(__var_37);
    },
    setAttribute: function(__var_37, __var_60) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__var_37 = String(__var_37).toLowerCase(), __var_60 = String(__var_60), __var_3.settings.logCalls && console.log(__var_5.domain, 'setAttribute', this, __var_37, __var_60), __var_37 === 'style' && __var_60.includes('animation-play-state') && __var_60.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__var_37 === 'src' || __var_37 === 'poster' || __var_37 === 'data' || this.native.tagName !== 'A' && __var_37 === 'href') {
        this.native.setAttribute(__var_37, __var_31(__var_60));
        return;
      }
      if (__var_37 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__var_37 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__var_37 === 'action' || __var_37 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__var_37.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__var_37 === 'width' || __var_37 === 'height') {
        let __var_58 = parseFloat(__var_60);
        if (isNaN(__var_58) || __var_58 < 0 || __var_58 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__var_37, __var_60);
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
    scrollIntoView: function(__var_37) {
      __var_37 && typeof __var_37 == 'object' ? this.native.scrollIntoView(__var_2.pseudoToNative(__var_37)) : this.native.scrollIntoView(__var_37);
    },
    scrollTo: function(__var_37, __var_60) {
      this.native.scrollTo(__var_37, __var_60);
    },
    scrollBy: function(__var_37, __var_60) {
      this.native.scrollBy(__var_37, __var_60);
    },
    removeAttribute: function(__var_37) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__var_37 = String(__var_37).toLowerCase(), __var_37 === 'target')
        throw new Error('removing target is not allowed');
      __var_3.settings.logCalls && console.log(__var_5.domain, 'removeAttribute', this, __var_37), this.native.removeAttribute(__var_37);
    },
    hasAttribute: function(__var_37) {
      return this.native.hasAttribute(__var_37);
    },
    querySelector: function(__var_37) {
      let __var_60 = this.native.querySelector(__var_37);
      return __fn_18(__var_20(__var_60));
    },
    querySelectorAll: function(__var_37) {
      let __var_60 = Array.from(this.native.querySelectorAll(__var_37)).filter(__var_19);
      return __fn_23(__var_60);
    },
    getElementsByClassName: function(__var_37) {
      let __var_60 = Array.from(this.native.getElementsByClassName(__var_37)).filter(__var_19);
      return __fn_23(__var_60);
    },
    getElementsByTagName: function(__var_37) {
      let __var_60 = Array.from(this.native.getElementsByTagName(__var_37)).filter(__var_19);
      return __fn_23(__var_60);
    },
    closest: function(__var_37) {
      let __var_60 = this.native.closest(__var_37);
      for (; __var_60 && !__var_48.contains(__var_60);)
        __var_60 = null;
      return __fn_18(__var_60);
    },
    matches: function(__var_37) {
      return this.native.matches(__var_37);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __var_37 = this.native.classList;
      return __var_2.nativeToPseudo({
        add: (...__var_60) => __var_37.add(...__var_60),
        remove: (...__var_60) => __var_37.remove(...__var_60),
        toggle: (__var_60, __var_58) => __var_37.toggle(__var_60, __var_58),
        contains: __var_60 => __var_37.contains(__var_60),
        replace: (__var_60, __var_58) => __var_37.replace(__var_60, __var_58)
      });
    },
    getBoundingClientRect: function() {
      let __var_37 = this.native.getBoundingClientRect();
      return __var_2.nativeToPseudo({
        __var_26: __var_37.__var_26,
        __fn_18: __var_37.__fn_18,
        width: __var_37.width,
        height: __var_37.height,
        top: __var_37.top,
        right: __var_37.right,
        bottom: __var_37.bottom,
        left: __var_37.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __var_2.createObjectProto(__var_2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __var_37 = __var_2.createObjectProto(__var_2.OBJECT_PROTO),
        __var_60 = this,
        __var_58 = null,
        __var_59 = null;
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'play', this), __var_2.setProperty(__var_37, 'then', __var_2.createNativeFunction(function(S) {
        return __var_58 = S, __var_37;
      })), __var_2.setProperty(__var_37, 'catch', __var_2.createNativeFunction(function(S) {
        return __var_59 = S, __var_37;
      })), __var_60.native.play().then(() => {
        __var_58 && __var_13(__var_58, __var_2.nativeToPseudo(void 0));
      }).catch(S => {
        __var_59 && __var_13(__var_59, __var_2.nativeToPseudo({
          message: S.message,
          name: S.name
        }));
      }), __var_37;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__var_37) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__var_37 || '')) : '';
    },
    fastSeek: function(__var_37) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__var_37) || 0));
    },
    getAnimations: function(__var_37) {
      if (!this.native.getAnimations)
        return __fn_23([]);
      let __var_60 = __var_37 ? {
          subtree: !!__var_2.pseudoToNative(__var_37)?.subtree
        } : {},
        __var_58 = this.native.getAnimations(__var_60),
        __var_59 = __var_2.createObjectProto(__var_2.ARRAY_PROTO);
      for (let __var_61 = 0; __var_61 < __var_58.length; __var_61++)
        __var_59.properties[__var_61] = __var_21(__var_58[__var_61]);
      return __var_2.setProperty(__var_59, 'length', __var_58.length), __var_59;
    }
  };
  for (let [__var_37, __var_60] of Object.entries(__var_34))
    __var_2.setProperty(__var_30, __var_37, __var_2.createNativeFunction(__var_60));

  function __var_21(__var_37) {
    let __var_60 = __var_2.createObjectProto(__var_2.OBJECT_PROTO);
    return __var_2.setProperty(__var_60, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.id;
      })
    }), __var_2.setProperty(__var_60, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.playState;
      })
    }), __var_2.setProperty(__var_60, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.pending;
      })
    }), __var_2.setProperty(__var_60, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.replaceState;
      })
    }), __var_2.setProperty(__var_60, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.currentTime;
      }),
      set: __var_2.createNativeFunction(function(__var_58) {
        __var_37.currentTime = __var_58;
      })
    }), __var_2.setProperty(__var_60, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.playbackRate;
      }),
      set: __var_2.createNativeFunction(function(__var_58) {
        __var_37.playbackRate = Math.max(-10, Math.min(10, Number(__var_58) || 1));
      })
    }), __var_2.setProperty(__var_60, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        return __var_37.startTime;
      }),
      set: __var_2.createNativeFunction(function(__var_58) {
        __var_37.startTime = __var_58;
      })
    }), __var_2.setProperty(__var_60, 'play', __var_2.createNativeFunction(function() {
      __var_37.play();
    })), __var_2.setProperty(__var_60, 'pause', __var_2.createNativeFunction(function() {
      __var_37.pause();
    })), __var_2.setProperty(__var_60, 'cancel', __var_2.createNativeFunction(function() {
      __var_37.cancel();
    })), __var_2.setProperty(__var_60, 'finish', __var_2.createNativeFunction(function() {
      __var_37.finish();
    })), __var_2.setProperty(__var_60, 'reverse', __var_2.createNativeFunction(function() {
      __var_37.reverse();
    })), __var_2.setProperty(__var_60, 'updatePlaybackRate', __var_2.createNativeFunction(function(__var_58) {
      __var_37.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__var_58) || 1)));
    })), __var_60;
  }

  function __var_16(__var_37) {
    let __var_60 = __var_2.createObjectProto(__var_2.OBJECT_PROTO),
      __var_58 = __var_37 ? __var_37.length : 0;
    return __var_2.setProperty(__var_60, 'length', __var_58), __var_2.setProperty(__var_60, 'start', __var_2.createNativeFunction(function(__var_59) {
      if (!__var_37 || __var_59 < 0 || __var_59 >= __var_37.length)
        throw new Error('Index out of bounds');
      return __var_37.start(__var_59);
    })), __var_2.setProperty(__var_60, 'end', __var_2.createNativeFunction(function(__var_59) {
      if (!__var_37 || __var_59 < 0 || __var_59 >= __var_37.length)
        throw new Error('Index out of bounds');
      return __var_37.end(__var_59);
    })), __var_60;
  }
  __var_2.setProperty(__var_30, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_16(this.native.buffered) : __var_16(null);
    })
  }), __var_2.setProperty(__var_30, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_16(this.native.played) : __var_16(null);
    })
  }), __var_2.setProperty(__var_30, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __var_16(this.native.seekable) : __var_16(null);
    })
  }), __var_2.setProperty(__var_30, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      let __var_37 = this.native.classList,
        __var_60 = __var_2.nativeToPseudo({});
      return __var_2.setProperty(__var_60, 'add', __var_2.createNativeFunction(function(...__var_58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __var_37.add(...__var_58);
      })), __var_2.setProperty(__var_60, 'remove', __var_2.createNativeFunction(function(...__var_58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __var_37.remove(...__var_58);
      })), __var_2.setProperty(__var_60, 'toggle', __var_2.createNativeFunction(function(__var_58, __var_59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __var_37.toggle(__var_58, __var_59);
      })), __var_2.setProperty(__var_60, 'contains', __var_2.createNativeFunction(function(__var_58) {
        return __var_37.contains(__var_58);
      })), __var_2.setProperty(__var_60, 'replace', __var_2.createNativeFunction(function(__var_58, __var_59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __var_37.replace(__var_58, __var_59);
      })), __var_60;
    })
  }), __var_2.setProperty(__var_30, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      let __var_37 = this.native.style,
        __var_60 = __var_2.nativeToPseudo({}),
        __var_58 = [
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
      for (let __var_59 of __var_58)
        __var_2.setProperty(__var_60, __var_59, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __var_2.createNativeFunction(function() {
            return __var_37[__var_59];
          }),
          set: __var_2.createNativeFunction(function(__var_61) {
            __var_37[__var_59] = __var_61, __var_3.settings.logCalls && console.log(__var_5.domain, 'set style', this, __var_59, __var_61);
          })
        });
      return __var_2.setProperty(__var_60, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __var_2.createNativeFunction(function() {
          return __var_37.cssText;
        }),
        set: __var_2.createNativeFunction(function(__var_59) {
          __var_37.cssText = __var_59, __var_3.settings.logCalls && console.log(__var_5.domain, 'set cssText', this, __var_59);
        })
      }), __var_2.setProperty(__var_60, 'setProperty', __var_2.createNativeFunction(function(__var_59, __var_61, L) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __var_37.setProperty(__var_59, __var_61, L), __var_3.settings.logCalls && console.log(__var_5.domain, 'setProperty', this, __var_59, __var_61, L);
      })), __var_2.setProperty(__var_60, 'getPropertyValue', __var_2.createNativeFunction(function(__var_59) {
        return __var_37.getPropertyValue(__var_59);
      })), __var_2.setProperty(__var_60, 'removeProperty', __var_2.createNativeFunction(function(__var_59) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __var_3.settings.logCalls && console.log(__var_5.domain, 'removeProperty', this, __var_59), __var_37.removeProperty(__var_59);
      })), __var_60;
    })
  }), __var_2.setProperty(__var_30, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      let __var_37 = this.native.dataset,
        __var_60 = __var_2.nativeToPseudo({});
      for (let __var_58 in __var_37)
        __var_2.setProperty(__var_60, __var_58, __var_37[__var_58]);
      return __var_2.setProperty(__var_60, 'get', __var_2.createNativeFunction(function(__var_58) {
        return __var_37[__var_58];
      })), __var_2.setProperty(__var_60, 'set', __var_2.createNativeFunction(function(__var_58, __var_59) {
        __var_37[__var_58] = String(__var_59).slice(0, 1000), __var_3.settings.logCalls && console.log(__var_5.domain, 'set dataset', this, __var_58, __var_59);
      })), __var_2.setProperty(__var_60, 'delete', __var_2.createNativeFunction(function(__var_58) {
        delete __var_37[__var_58], __var_3.settings.logCalls && console.log(__var_5.domain, 'delete dataset', this, __var_58);
      })), __var_2.setProperty(__var_60, 'has', __var_2.createNativeFunction(function(__var_58) {
        return __var_58 in __var_37;
      })), __var_60;
    })
  }), __var_2.setProperty(__var_30, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return __fn_18(__var_20(this.native.offsetParent));
    })
  });
  let __var_12 = [
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

  function __var_22(__var_37) {
    let __var_60 = __var_2.nativeToPseudo({}),
      __var_58 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __var_59 of __var_58)
      __var_2.setProperty(__var_60, __var_59, __var_37[__var_59]);
    if (__var_37 instanceof MouseEvent || __var_37 instanceof PointerEvent) {
      let __var_59 = [
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
      for (let __var_61 of __var_59)
        __var_2.setProperty(__var_60, __var_61, __var_37[__var_61]);
    }
    if (__var_37 instanceof KeyboardEvent) {
      let __var_59 = [
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
      for (let __var_61 of __var_59)
        __var_2.setProperty(__var_60, __var_61, __var_37[__var_61]);
    }
    return typeof TouchEvent == 'function' && __var_37 instanceof TouchEvent && (__var_2.setProperty(__var_60, 'touches', __var_2.nativeToPseudo({
      length: __var_37.touches.length
    })), __var_2.setProperty(__var_60, 'changedTouches', __var_2.nativeToPseudo({
      length: __var_37.changedTouches.length
    }))), typeof WheelEvent == 'function' && __var_37 instanceof WheelEvent && (__var_2.setProperty(__var_60, 'deltaX', __var_37.deltaX), __var_2.setProperty(__var_60, 'deltaY', __var_37.deltaY), __var_2.setProperty(__var_60, 'deltaZ', __var_37.deltaZ), __var_2.setProperty(__var_60, 'deltaMode', __var_37.deltaMode)), __var_37.target && __var_19(__var_37.target) && __var_2.setProperty(__var_60, 'target', __fn_18(__var_37.target)), __var_37.currentTarget && __var_19(__var_37.currentTarget) && __var_2.setProperty(__var_60, 'currentTarget', __fn_18(__var_37.currentTarget)), __var_2.setProperty(__var_60, 'preventDefault', __var_2.createNativeFunction(function() {
      __var_37.preventDefault();
    })), __var_2.setProperty(__var_60, 'stopPropagation', __var_2.createNativeFunction(function() {
      __var_37.stopPropagation();
    })), __var_2.setProperty(__var_60, 'stopImmediatePropagation', __var_2.createNativeFunction(function() {
      __var_37.stopImmediatePropagation();
    })), __var_60;
  }
  __var_2.setProperty(__var_30, 'addEventListener', __var_2.createNativeFunction(function(__var_37, __var_60) {
    if (!__var_37 || typeof __var_37 != 'string' || !__var_60 || typeof __var_60 != 'object')
      return;
    if (__var_37 = __var_37.toLowerCase(), !__var_12.includes(__var_37))
      throw new Error(`Event type "${ __var_37 }" is not allowed`);
    __var_3.settings.logCalls && console.log(__var_5.domain, 'addEventListener', this, __var_37, __var_60);
    let __var_58 = this.native;
    __fn_9.has(__var_58) || __fn_9.set(__var_58, new Map());
    let __var_59 = __fn_9.get(__var_58);
    __var_59.has(__var_37) || __var_59.set(__var_37, []);
    let __var_61 = __var_59.get(__var_37);
    if (__var_61.length >= __var_8)
      throw new Error(`Maximum listeners (${ __var_8 }) reached for event "${ __var_37 }"`);
    if (__var_61.some(H => H.pseudo === __var_60))
      return;
    let __var_62 = function(H) {
      let __var_63 = __var_22(H);
      __var_13(__var_60, __var_63);
    };
    __var_61.push({
      pseudo: __var_60,
      native: __var_62
    }), __var_58.addEventListener(__var_37, __var_62);
  })), __var_2.setProperty(__var_30, 'removeEventListener', __var_2.createNativeFunction(function(__var_37, __var_60) {
    if (!__var_37 || typeof __var_37 != 'string' || !__var_60 || typeof __var_60 != 'object')
      return;
    __var_3.settings.logCalls && console.log(__var_5.domain, 'removeEventListener', this, __var_37, __var_60), __var_37 = __var_37.toLowerCase();
    let __var_58 = this.native;
    if (!__fn_9.has(__var_58))
      return;
    let __var_59 = __fn_9.get(__var_58);
    if (!__var_59.has(__var_37))
      return;
    let __var_61 = __var_59.get(__var_37),
      __var_62 = __var_61.findIndex(H => H.pseudo === __var_60);
    __var_62 !== -1 && (__var_58.removeEventListener(__var_37, __var_61[__var_62].native), __var_61.splice(__var_62, 1));
  }));
  let __var_38 = [
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
  for (let __var_37 of __var_38) {
    let __var_60 = 'on' + __var_37;
    __var_2.setProperty(__var_30, __var_60, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __var_2.createNativeFunction(function() {
        let __var_58 = this.native;
        if (!__fn_9.has(__var_58))
          return null;
        let __var_59 = __fn_9.get(__var_58),
          __var_61 = `__${ __var_60 }`;
        return __var_59.get(__var_61) || null;
      }),
      set: __var_2.createNativeFunction(function(__var_58) {
        let __var_59 = this.native;
        __fn_9.has(__var_59) || __fn_9.set(__var_59, new Map());
        let __var_61 = __fn_9.get(__var_59),
          __var_62 = `__${ __var_60 }`;
        __var_3.settings.logCalls && console.log(__var_5.domain, 'setOn' + __var_37, this, __var_58);
        let __var_64 = __var_61.get(__var_62 + '_native');
        if (__var_64 && (__var_59.removeEventListener(__var_37, __var_64), __var_61.delete(__var_62), __var_61.delete(__var_62 + '_native')), __var_58 && typeof __var_58 == 'object') {
          let __var_63 = function(gt) {
            let __var_65 = __var_22(gt);
            __var_13(__var_58, __var_65);
          };
          __var_59.addEventListener(__var_37, __var_63), __var_61.set(__var_62, __var_58), __var_61.set(__var_62 + '_native', __var_63);
        }
      })
    });
  }
  __fn_4(__var_2, u, __var_5).extendElement(__var_30, __fn_18), __fn_39(__var_2, u, __var_5), __fn_55(__var_2, u, __var_5.domain), __fn_56(__var_2, u, __var_48, __var_5);
  let __var_36 = __var_2.nativeToPseudo({});
  __var_2.setProperty(u, 'document', __var_36);
  let __var_66 = {
    getElementById: function(__var_37) {
      let __var_60 = __var_48.querySelector(`#${ CSS.escape(__var_37) }`);
      return __fn_18(__var_60);
    },
    getElementsByClassName: function(__var_37) {
      let __var_60 = Array.from(__var_48.getElementsByClassName(__var_37));
      return __fn_23(__var_60);
    },
    getElementsByTagName: function(__var_37) {
      let __var_60 = Array.from(__var_48.getElementsByTagName(__var_37));
      return __fn_23(__var_60);
    },
    querySelector: function(__var_37) {
      return __fn_18(__var_48.querySelector(__var_37));
    },
    querySelectorAll: function(__var_37) {
      let __var_60 = Array.from(__var_48.querySelectorAll(__var_37));
      return __fn_23(__var_60);
    },
    createElement: function(__var_37) {
      if (typeof __var_37 != 'string')
        throw new Error('Invalid tag');
      if (__var_37 = __var_37.toLowerCase().trim(), [
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
        ].includes(__var_37))
        throw new Error('Creating ' + __var_37 + ' elements is not allowed');
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'createElement', this, __var_37), __fn_18(document.createElement(__var_37));
    },
    createTextNode: function(__var_37) {
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'createTextNode', this, __var_37), __fn_18(document.createTextNode(__var_37));
    }
  };
  for (let [__var_37, __var_60] of Object.entries(__var_66))
    __var_2.setProperty(__var_36, __var_37, __var_2.createNativeFunction(__var_60));
  __var_2.setProperty(__var_36, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'get body', this), __fn_18(__var_48);
    })
  }), __var_2.setProperty(__var_36, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return __var_3.settings.logCalls && console.log(__var_5.domain, 'get documentElement', this), __fn_18(__var_48);
    })
  });
  let __var_67 = __var_2.nativeToPseudo({});
  __var_2.setProperty(u, 'location', __var_67), __var_2.setProperty(__var_67, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __var_2.createNativeFunction(function() {
      return `/t/${ __var_5.domain }${ __var_5.path }`;
    }),
    set: __var_2.createNativeFunction(function(__var_37) {
      if (typeof __var_37 == 'string') {
        __var_3.settings.logCalls && console.log(__var_5.domain, 'set href', this, __var_37);
        try {
          let __var_60 = new URL(__var_37, `http://${ __var_5.domain }`);
          if (__var_60.hostname && __var_60.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __var_58 = __var_60.pathname + __var_60.search + __var_60.hash;
          if (__var_58.startsWith(`/t/${ __var_5.domain }/`) ? __var_58 = __var_58.substring(`/t/${ __var_5.domain }`.length) : __var_58 === `/t/${ __var_5.domain }` && (__var_58 = '/'), __var_58.startsWith('/') || (__var_58 = '/' + __var_58), __var_58.endsWith('.html') || __var_58 === '/' || __var_58 === '')
            __var_5.fetchContent(__var_58 || '/index.html'), __var_5.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__var_60) {
          if (__var_60.message.includes('not allowed') || __var_60.message.includes('Only HTML'))
            throw __var_60;
          let __var_58 = __var_37;
          if (__var_58.startsWith('/') || (__var_58 = '/' + __var_58), __var_58.endsWith('.html') || __var_58 === '/' || __var_58 === '')
            __var_5.fetchContent(__var_58 || '/index.html').then(() => __var_5.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __var_2.setProperty(__var_67, 'reload', __var_2.createNativeFunction(function() {
    __var_5.fetchContent(__var_5.path, !0).then(() => __var_5.setActive(!0));
  }));
}
var __var_68 = {
    console: {
      log: function(...__var_2) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...__var_2);
      },
      error: function(...__var_2) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...__var_2);
      },
      warn: function(...__var_2) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...__var_2);
      }
    },
    alert(__var_2) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ __var_2 }`);
    },
    prompt(__var_2) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ __var_2 }`);
    },
    confirm(__var_2) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ __var_2 }`);
    },
    atob(__var_2) {
      return atob(__var_2);
    },
    btoa(__var_2) {
      return btoa(__var_2);
    }
  },
  __var_69 = class {
    constructor(u) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = u, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__var_48, __var_5) => {
        let __var_6 = (__var_7, __var_8) => {
          for (let [__fn_9, __fn_10] of Object.entries(__var_7))
            if (typeof __fn_10 == 'function')
              __var_48.setProperty(__var_8, __fn_9, __var_48.createNativeFunction(__fn_10.bind(this)));
            else if (typeof __fn_10 == 'object' && __fn_10 !== null) {
            let __fn_11 = __var_48.nativeToPseudo({});
            __var_6(__fn_10, __fn_11), __var_48.setProperty(__var_8, __fn_9, __fn_11);
          }
        };
        __var_6(__var_68, __var_5), __fn_57(__var_48, __var_5, this.tile.contentElement, this.tile), __var_48.setProperty(__var_5, 'embedded', __var_48.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __var_70 = new Set(),
        __var_48 = [this.interpreter.getStateStack()],
        __var_5 = 0;
      for (; __var_48.length;) {
        let __var_6 = __var_48.pop(),
          __var_7 = typeof __var_6;
        if (__var_5 += 8, __var_7 === 'string' && !__var_70.has(__var_6))
          __var_70.add(__var_6), __var_5 += __var_6.length * 2;
        else if (__var_7 === 'object' && __var_6 !== null && !__var_70.has(__var_6)) {
          __var_70.add(__var_6);
          try {
            __var_48.push(...Object.keys(__var_6), ...Object.values(__var_6));
          } catch {}
        }
      }
      return __var_5;
    }
    start() {
      this.running || __var_3.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __var_70 = 0; __var_70 < 5000; __var_70++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __var_48 = this.roughValueMemorySize();
                if (__var_48 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __var_48 } bytes`);
                  break;
                }
              }
            } catch (__var_48) {
              console.error(__var_48), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__var_70) {
      __var_3.settings.disableJS || this.interpreter.appendCode(__var_70);
    }
  },
  __var_71 = __var_69;
var __var_72 = document.getElementById('plot'),
  __var_73 = new CSSStyleSheet(),
  __var_74 = () => {
    __var_73.replaceSync(`
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
__var_74();
var __var_75 = new CSSStyleSheet();
__var_75.replaceSync(`
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
var __var_76 = class __var_2 {
  constructor(__var_70) {
    this.__var_26 = __var_70.__var_26 ?? 0, this.__fn_18 = __var_70.__fn_18 ?? 0, this.domain = __var_70.domain, this.free = !__var_70.domain, this.locked = !1, this.id = `${ this.__var_26 },${ this.__fn_18 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __var_70.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __var_70.nocontrols || !1, this.embed = __var_70.embed || !1, this.container = __var_70.container || __var_72, this.interpreter = null, this.render();
  }
  static toTilePosition(__var_70, __var_48) {
    return {
      __var_26: Math.floor(__var_70 / 250),
      __fn_18: Math.floor(__var_48 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __var_70 = document.createElement('div');
    __var_70.classList.add('tile'), this.free && __var_70.classList.add('f'), this.preview ? __var_70.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__var_70.style.left = `${ this.__var_26 * 250 }px`, __var_70.style.top = `${ this.__fn_18 * 250 }px`, this.__var_26 % 10 === 0 && __var_70.classList.add('b-left'), this.__fn_18 % 10 === 0 && __var_70.classList.add('b-top')), this.element = __var_70;
    let __var_48 = document.createElement('div');
    __var_48.classList.add('tile-content'), this.preview && (__var_48.style.cssText = 'width: 100%; height: 100%;'), __var_48.addEventListener('click', async __var_6 => {
      let __var_7 = __var_6.composedPath()?.filter(__fn_11 => __fn_11 instanceof Element);
      if (!__var_7)
        return;
      let __var_8 = __var_7.findIndex(__fn_11 => __fn_11.isSameNode(__var_48));
      if (__var_8 === -1)
        return;
      let __fn_10 = __var_7.slice(0, __var_8).find(__fn_11 => __fn_11.tagName === 'A');
      if (__fn_10) {
        __var_6.preventDefault();
        try {
          let __fn_11 = new URL(__fn_10.href);
          if (__fn_11.hostname !== location.hostname) {
            let __var_14 = document.createElement('a');
            __var_14.href = __fn_10.href, __var_14.target = '_blank', __var_14.click();
            return;
          }
          let __var_13 = __fn_11.pathname;
          if (__var_13.startsWith(`/t/${ this.domain }/`) || (__var_13 = `/t/${ this.domain }/${ __var_13 }`.replaceAll('//', '/')), __var_13.startsWith(`/t/${ this.domain }`) && (__var_13.endsWith('.html') || __var_13 === `/t/${ this.domain }/` || __var_13 === `/t/${ this.domain }`))
            await this.fetchContent(__var_13.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __var_14 = document.createElement('a');
            __var_14.href = __fn_10.href, __var_14.target = '_blank', __var_14.click();
          }
        } catch (__fn_11) {
          console.error(__fn_11);
        }
      }
    }), this.shadow = __var_48.attachShadow({
      mode: 'open'
    });
    let __var_5 = document.createElement('div');
    __var_5.className = 'tile-body', this.embed && __var_5.classList.add('embedded'), __var_5.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __var_5, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__var_26 }, ${ this.__fn_18 }...`, this.shadow.appendChild(__var_5), __var_70.appendChild(__var_48), this.fonts = document.createElement('style'), __var_70.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__var_70), __var_3.plot?.lockCache[this.__var_26 + ',' + this.__fn_18] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__var_70, __var_48 = !1) {
    __var_70.startsWith('/') || (__var_70 = '/' + __var_70);
    let __var_5 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__var_26 }, ${ this.__fn_18 }</p>
            </div>` : this.path === __var_70 && this.content && !__var_48 ? this.content : await fetch(`/t/${ this.domain }${ __var_70 }`).then(__var_8 => __var_8.text()).catch(__var_8 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__var_75] : this.shadow.adoptedStyleSheets = [__var_73], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __var_70, this.contentElement.innerHTML = __var_5, this.content = __var_5;
    let __var_6 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __var_7 = 0;
    for (let __var_8 of __var_6) {
      if (__var_7 >= 3)
        break;
      let __fn_9 = __var_8.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__fn_9)
        for (let __fn_10 of __fn_9) {
          if (__var_7 >= 3)
            break;
          this.fonts.textContent += __fn_10, __var_7++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __var_70 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __var_48 of __var_70)
      this.interpreter.runCode(__var_48.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__var_70) {
    if (this.element && (__var_70 && (this.interpreter || (this.interpreter = new __var_71(this), this.executeScripts()), this.interpreter.start()), __var_70 !== this.active)) {
      if (this.active = __var_70, __var_70) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __var_3.ui) {
          let __var_5 = __var_3.ui.createVoteMenu(this);
          __var_5 && this.element.appendChild(__var_5);
          let __var_6 = __var_3.ui.createTileControl(this);
          if (this.element.appendChild(__var_6), __var_3.user?.admin || __var_3.user?.moderator) {
            let __var_7 = __var_3.ui.createAdminControl(this);
            this.element.appendChild(__var_7);
          }
          __var_3.plot?.activeTile && __var_3.plot.activeTile.setActive(!1), __var_3.plot && (__var_3.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __var_48 = this.contentElement.querySelectorAll('audio, video');
        for (let __var_5 of __var_48)
          __var_5.dataset.webtilesPaused === 'true' && (__var_5.dataset.webtilesPaused = !1, __var_5.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __var_3.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __var_3.plot && (__var_3.plot.activeTile = null)), __var_2.clearClanBorders();
        let __var_48 = this.contentElement.querySelectorAll('audio, video');
        for (let __var_5 of __var_48)
          __var_5.paused || (__var_5.dataset.webtilesPaused = !0, __var_5.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __var_48 = await (await __var_3.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__var_48.success || !__var_48.clan)
          return;
        let __var_5 = __var_48.clan.members;
        if (!__var_5 || __var_5.length <= 1)
          return;
        let __var_6 = new Set(__var_5.map(__var_7 => `${ __var_7.__var_26 },${ __var_7.__fn_18 }`));
        for (let __var_7 of __var_5) {
          let __var_8 = __var_3.plot.tiles[`${ __var_7.__var_26 },${ __var_7.__fn_18 }`];
          if (!__var_8?.element)
            continue;
          __var_8.element.classList.add('clan-highlight');
          let __fn_9 = __var_6.has(`${ __var_7.__var_26 },${ __var_7.__fn_18 - 1 }`),
            __fn_10 = __var_6.has(`${ __var_7.__var_26 },${ __var_7.__fn_18 + 1 }`),
            __fn_11 = __var_6.has(`${ __var_7.__var_26 - 1 },${ __var_7.__fn_18 }`),
            __var_13 = __var_6.has(`${ __var_7.__var_26 + 1 },${ __var_7.__fn_18 }`);
          if (!__fn_9) {
            let __var_14 = document.createElement('div');
            __var_14.className = 'clan-border clan-border-top', __var_8.element.appendChild(__var_14);
          }
          if (!__fn_10) {
            let __var_14 = document.createElement('div');
            __var_14.className = 'clan-border clan-border-bottom', __var_8.element.appendChild(__var_14);
          }
          if (!__fn_11) {
            let __var_14 = document.createElement('div');
            __var_14.className = 'clan-border clan-border-left', __var_8.element.appendChild(__var_14);
          }
          if (!__var_13) {
            let __var_14 = document.createElement('div');
            __var_14.className = 'clan-border clan-border-right', __var_8.element.appendChild(__var_14);
          }
        }
      } catch (__var_70) {
        console.error('Failed to fetch clan borders:', __var_70);
      }
  }
  static clearClanBorders() {
    if (__var_3.plot?.tiles)
      for (let __var_70 of Object.values(__var_3.plot.tiles))
        __var_70.element && (__var_70.element.classList.remove('clan-highlight'), __var_70.element.querySelectorAll('.clan-border').forEach(__var_5 => __var_5.remove()));
  }
  setDomain(__var_70) {
    this.domain = __var_70, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__var_70) {
    this.locked = __var_70, this.element && this.element.classList.toggle('locked', __var_70), this.fetchContent('/index.html', !0);
  }
};
var __var_77 = JSON.parse(document.getElementById('embed-data').textContent),
  __var_78 = document.getElementById('tile');
window.tile = new __var_76({
  domain: __var_77.domain,
  container: __var_78,
  nocontrols: !0,
  embed: !0,
  path: '/index.html',
  __var_26: __var_77.__var_26,
  __fn_18: __var_77.__fn_18
});
window.onmessage = __var_2 => {
  __var_2.data.type === 'update' && (window.tile.unrender(), __var_78.innerHTML = '', window.tile = new __var_76({
    domain: __var_77.domain,
    container: __var_78,
    nocontrols: !0,
    embed: !0,
    path: __var_2.data.path,
    __var_26: __var_77.__var_26,
    __fn_18: __var_77.__fn_18
  }));
};