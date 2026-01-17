/* 100af9aa3c9235133c43d9f1ee06fdc77dedc8d0329ec94f5018f49eef971cf1 */
var __0 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  __1 = document.getElementById('user-data');
if (__1)
  try {
    let __2 = JSON.parse(__1.textContent);
    __2 && __2.email_verified && (__0.user = __2);
  } catch (__2) {
    console.error(__2);
  }
var __3 = __0;

function __4(__2, u, l) {
  let __5 = new WeakMap(),
    __6 = 2048,
    __7 = 10000,
    __8 = new WeakMap();

  function __9(n) {}

  function __10() {
    __8.clear = new WeakMap();
  }

  function __11(n, s) {
    if (!n)
      return null;
    if (__5.has(n))
      return __5.get(n);
    let __12 = __2.createObject(U);
    return __12.native = n, __12.canvas = s, __5.set(n, __12), __12;
  }
  let __13 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'CanvasGradient', __13);
  let __14 = __2.getProperty(__13, 'prototype');
  __2.setProperty(__14, 'addColorStop', __2.createNativeFunction(function(n, s) {
    this.native.addColorStop(n, s);
  }));

  function __15(n) {
    let __16 = __2.createObject(__13);
    return __16.native = n, __16;
  }
  let __17 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'CanvasPattern', __17);

  function __18(n) {
    let __16 = __2.createObject(__17);
    return __16.native = n, __16;
  }
  let __19 = __2.createNativeFunction(function(n, __16) {
    if (n > __6 || __16 > __6)
      throw new Error(`ImageData size exceeds maximum (${ __6 }x${ __6 })`);
    __3.settings.logCalls && console.log(l.domain, 'create ImageData', this, n, __16);
    let __12 = new ImageData(n, __16);
    this.native = __12, this.width = n, this.height = __16;
  }, !0);
  __2.setProperty(u, 'ImageData', __19);
  let __20 = __2.getProperty(__19, 'prototype');
  __2.setProperty(__20, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.width;
    })
  }), __2.setProperty(__20, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.height;
    })
  }), __2.setProperty(__20, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __21 = this.native.data,
        __16 = __2.createObjectProto(__2.ARRAY_PROTO);
      __2.setProperty(__16, 'length', __21.length);
      let __12 = __2.nativeToPseudo({});
      __2.setProperty(__12, 'length', __21.length), __2.setProperty(__12, 'get', __2.createNativeFunction(function(v) {
        return __21[v];
      })), __2.setProperty(__12, 'set', __2.createNativeFunction(function(v, E) {
        __3.settings.logCalls && console.log(l.domain, 'setImageData', this, v, E), __21[v] = E;
      }));
      for (let __22 = 0; __22 < Math.min(__21.length, 1000); __22++)
        (E => {
          __2.setProperty(__12, E, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __2.createNativeFunction(function() {
              return __21[E];
            }),
            set: __2.createNativeFunction(function(A) {
              __3.settings.logCalls && console.log(l.domain, 'setImageData', this, E, A), __21[E] = A;
            })
          });
        })(__22);
      return __12;
    })
  });

  function __23(__21) {
    let __16 = __2.createObject(__19);
    return __16.native = __21, __16;
  }
  let __24 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'TextMetrics', __24);
  let __25 = __2.getProperty(__24, 'prototype'),
    __26 = [
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
  for (let __21 of __26)
    __2.setProperty(__25, __21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__21];
      })
    });

  function __27(__21) {
    let __16 = __2.createObject(__24);
    return __16.native = __21, __16;
  }
  let __28 = __2.createNativeFunction(function(__21) {
    __21 && __21.native ? this.native = new Path2D(__21.native) : typeof __21 == 'string' ? this.native = new Path2D(__21) : this.native = new Path2D();
  }, !0);
  __2.setProperty(u, 'Path2D', __28);
  let __29 = __2.getProperty(__28, 'prototype'),
    __30 = {
      addPath: function(__21, __16) {
        __21?.native && this.native.addPath(__21.native, __16);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__21, __16) {
        this.native.moveTo(__21, __16);
      },
      lineTo: function(__21, __16) {
        this.native.lineTo(__21, __16);
      },
      bezierCurveTo: function(__21, __16, __12, __22, E, A) {
        this.native.bezierCurveTo(__21, __16, __12, __22, E, A);
      },
      quadraticCurveTo: function(__21, __16, __12, __22) {
        this.native.quadraticCurveTo(__21, __16, __12, __22);
      },
      arc: function(__21, __16, __12, __22, E, A) {
        this.native.arc(__21, __16, __12, __22, E, A);
      },
      arcTo: function(__21, __16, __12, __22, E) {
        this.native.arcTo(__21, __16, __12, __22, E);
      },
      ellipse: function(__21, __16, __12, __22, E, A, D, k) {
        this.native.ellipse(__21, __16, __12, __22, E, A, D, k);
      },
      rect: function(__21, __16, __12, __22) {
        this.native.rect(__21, __16, __12, __22);
      },
      roundRect: function(__21, __16, __12, __22, E) {
        this.native.roundRect(__21, __16, __12, __22, E);
      }
    };
  for (let [__21, __16] of Object.entries(__30))
    __2.setProperty(__29, __21, __2.createNativeFunction(__16));
  let __31 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'CanvasRenderingContext2D', __31);
  let __32 = __2.getProperty(__31, 'prototype'),
    __33 = [
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
  for (let __21 of __33)
    __2.setProperty(__32, __21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__21];
      }),
      set: __2.createNativeFunction(function(__16) {
        __3.settings.logCalls && console.log(l.domain, 'context set ' + __21, this, __16), this.native[__21] = __16;
      })
    });
  for (let __21 of [
      'fillStyle',
      'strokeStyle'
    ])
    __2.setProperty(__32, __21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __16 = this.native[__21];
        return __16;
      }),
      set: __2.createNativeFunction(function(__16) {
        __16?.native ? this.native[__21] = __16.native : this.native[__21] = __16;
      })
    });
  __2.setProperty(__32, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __34 = {
    clearRect: function(__21, __16, __12, __22) {
      this.native, this.native.clearRect(__21, __16, __12, __22);
    },
    fillRect: function(__21, __16, __12, __22) {
      this.native, this.native.fillRect(__21, __16, __12, __22);
    },
    strokeRect: function(__21, __16, __12, __22) {
      this.native, this.native.strokeRect(__21, __16, __12, __22);
    },
    fillText: function(__21, __16, __12, __22) {
      this.native, __22 !== void 0 ? this.native.fillText(String(__21).slice(0, 1000), __16, __12, __22) : this.native.fillText(String(__21).slice(0, 1000), __16, __12);
    },
    strokeText: function(__21, __16, __12, __22) {
      this.native, __22 !== void 0 ? this.native.strokeText(String(__21).slice(0, 1000), __16, __12, __22) : this.native.strokeText(String(__21).slice(0, 1000), __16, __12);
    },
    measureText: function(__21) {
      return __27(this.native.measureText(String(__21).slice(0, 1000)));
    },
    getLineDash: function() {
      return __2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__21) {
      let __16 = __2.pseudoToNative(__21);
      this.native.setLineDash(__16);
    },
    createLinearGradient: function(__21, __16, __12, __22) {
      return __15(this.native.createLinearGradient(__21, __16, __12, __22));
    },
    createRadialGradient: function(__21, __16, __12, __22, E, A) {
      return __15(this.native.createRadialGradient(__21, __16, __12, __22, E, A));
    },
    createConicGradient: function(__21, __16, __12) {
      return __15(this.native.createConicGradient(__21, __16, __12));
    },
    createPattern: function(__21, __16) {
      let __12 = __21?.native || __21;
      if (!__12)
        return null;
      let __22 = this.native.createPattern(__12, __16);
      return __22 ? __18(__22) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__21, __16) {
      this.native.moveTo(__21, __16);
    },
    lineTo: function(__21, __16) {
      this.native.lineTo(__21, __16);
    },
    bezierCurveTo: function(__21, __16, __12, __22, E, A) {
      this.native.bezierCurveTo(__21, __16, __12, __22, E, A);
    },
    quadraticCurveTo: function(__21, __16, __12, __22) {
      this.native.quadraticCurveTo(__21, __16, __12, __22);
    },
    arc: function(__21, __16, __12, __22, E, A) {
      this.native.arc(__21, __16, __12, __22, E, A);
    },
    arcTo: function(__21, __16, __12, __22, E) {
      this.native.arcTo(__21, __16, __12, __22, E);
    },
    ellipse: function(__21, __16, __12, __22, E, A, D, k) {
      this.native.ellipse(__21, __16, __12, __22, E, A, D, k);
    },
    rect: function(__21, __16, __12, __22) {
      this.native.rect(__21, __16, __12, __22);
    },
    roundRect: function(__21, __16, __12, __22, E) {
      let __35 = __2.pseudoToNative(E);
      this.native.roundRect(__21, __16, __12, __22, __35);
    },
    fill: function(__21, __16) {
      this.native, __21?.native ? this.native.fill(__21.native, __16) : this.native.fill(__21);
    },
    stroke: function(__21) {
      this.native, __21?.native ? this.native.stroke(__21.native) : this.native.stroke();
    },
    clip: function(__21, __16) {
      __21?.native ? this.native.clip(__21.native, __16) : this.native.clip(__21);
    },
    isPointInPath: function(__21, __16, __12, __22) {
      return __21?.native ? this.native.isPointInPath(__21.native, __16, __12, __22) : this.native.isPointInPath(__21, __16, __12);
    },
    isPointInStroke: function(__21, __16, __12) {
      return __21?.native ? this.native.isPointInStroke(__21.native, __16, __12) : this.native.isPointInStroke(__21, __16);
    },
    getTransform: function() {
      let __21 = this.native.getTransform();
      return __2.nativeToPseudo({
        a: __21.a,
        __10: __21.__10,
        __20: __21.__20,
        __3: __21.__3,
        e: __21.e,
        __12: __21.__12
      });
    },
    rotate: function(__21) {
      this.native.rotate(__21);
    },
    scale: function(__21, __16) {
      this.native.scale(__21, __16);
    },
    translate: function(__21, __16) {
      this.native.translate(__21, __16);
    },
    transform: function(__21, __16, __12, __22, E, __35) {
      this.native.transform(__21, __16, __12, __22, E, __35);
    },
    setTransform: function(__21, __16, __12, __22, E, __35) {
      if (typeof __21 == 'object' && __21 !== null) {
        let __36 = __2.pseudoToNative(__21);
        this.native.setTransform(__36);
      } else
        this.native.setTransform(__21, __16, __12, __22, E, __35);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__21, __16, __12, __22, E, __35, __36, k, Y) {
      this.native;
      let __37 = __21?.native || __21;
      __37 && (k !== void 0 ? this.native.drawImage(__37, __16, __12, __22, E, __35, __36, k, Y) : __22 !== void 0 ? this.native.drawImage(__37, __16, __12, __22, E) : this.native.drawImage(__37, __16, __12));
    },
    createImageData: function(__21, __16) {
      if (__21?.native)
        return __23(this.native.createImageData(__21.native));
      if (__21 > __6 || __16 > __6)
        throw new Error(`ImageData size exceeds maximum (${ __6 }x${ __6 })`);
      return __23(this.native.createImageData(__21, __16));
    },
    getImageData: function(__21, __16, __12, __22) {
      if (__12 > __6 || __22 > __6)
        throw new Error(`ImageData size exceeds maximum (${ __6 }x${ __6 })`);
      return __23(this.native.getImageData(__21, __16, __12, __22));
    },
    putImageData: function(__21, __16, __12, __22, E, __35, __36) {
      this.native, __21?.native && (__22 !== void 0 ? this.native.putImageData(__21.native, __16, __12, __22, E, __35, __36) : this.native.putImageData(__21.native, __16, __12));
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
  for (let [__21, __16] of Object.entries(__34))
    __2.setProperty(__32, __21, __2.createNativeFunction(__16));
  return {
    extendElement: function(__21, __16) {
      __2.setProperty(__21, 'getContext', __2.createNativeFunction(function(__12, __22) {
        __3.settings.logCalls && console.log(l.domain, 'getContext', this, __12, __22);
        let __38 = this.native;
        if (__38.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__38.width > __6 && (__38.width = __6), __38.height > __6 && (__38.height = __6), __12 === '2d') {
          let __35 = __38.getContext('2d', __22 ? __2.pseudoToNative(__22) : void 0);
          return __11(__35, this);
        }
        throw new Error(`Context type "${ __12 }" is not supported`);
      })), __2.setProperty(__21, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __2.createNativeFunction(function(__12) {
          __3.settings.logCalls && console.log(l.domain, 'set width', this, __12), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__12, __6));
        })
      }), __2.setProperty(__21, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __2.createNativeFunction(function(__12) {
          __3.settings.logCalls && console.log(l.domain, 'set height', this, __12), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__12, __6));
        })
      }), __2.setProperty(__21, 'toDataURL', __2.createNativeFunction(function(__12, __22) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __3.settings.logCalls && console.log(l.domain, 'toDataURL', this, __12, __22), this.native.toDataURL(__12, __22);
      }));
    },
    resetDrawCounts: __10,
    contextToPseudo: __11
  };
}

function __39(__2, u, l) {
  let __8 = 0,
    __9 = window.location.origin;

  function __10(__19) {
    if (typeof __19 != 'string' || __19.startsWith('/') || __19.startsWith('./') || __19.startsWith('../') || !__19.startsWith('http://') && !__19.startsWith('https://'))
      return !1;
    try {
      let __20 = new URL(__19);
      if (__20.origin === __9 || __20.hostname === 'kicya.net' || __20.hostname.endsWith('.kicya.net') || __20.hostname === 'nekoweb.org')
        return !1;
      let __23 = __20.hostname.toLowerCase();
      return !(__23 === 'localhost' || __23 === '127.0.0.1' || __23 === '0.0.0.0' || __23.startsWith('192.168.') || __23.startsWith('10.') || __23.startsWith('172.16.') || __23.startsWith('172.17.') || __23.startsWith('172.18.') || __23.startsWith('172.19.') || __23.startsWith('172.2') || __23.startsWith('172.30.') || __23.startsWith('172.31.') || __23 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __11 = 0,
    __13 = __2.nativeToPseudo({});
  __2.setProperty(u, '__xhrCallbacks', __13);

  function __14(__19, ...__20) {
    if (!__19 || typeof __19 != 'object')
      return;
    let __23 = __11++;
    __2.setProperty(__13, 'fn' + __23, __19);
    let __24 = __20.map((__26, __27) => {
        let __28 = 'arg' + __23 + '_' + __27;
        return __2.setProperty(__13, __28, __26), __28;
      }),
      __25 = __24.map(__26 => `__xhrCallbacks.${ __26 }`).join(',');
    __2.appendCode(`__xhrCallbacks.fn${ __23 }(${ __25 }); delete __xhrCallbacks.fn${ __23 }; ${ __24.map(__26 => `delete __xhrCallbacks.${ __26 }`).join('; ') };`);
  }
  let __15 = __2.createNativeFunction(function() {
    __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __20 = this;
    this.native.onreadystatechange = function() {
      __2.setProperty(__20, 'readyState', __20.native.readyState), __20.native.readyState === 4 && (__2.setProperty(__20, 'status', __20.native.status), __2.setProperty(__20, 'statusText', __20.native.statusText), __2.setProperty(__20, 'responseText', __20.native.responseText?.slice(0, 5242880) || ''), __2.setProperty(__20, 'responseURL', __20.native.responseURL), __8 = Math.max(0, __8 - 1)), __20._eventHandlers.onreadystatechange && __14(__20._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __20._eventHandlers.onload && __14(__20._eventHandlers.onload);
    }, this.native.onerror = function() {
      __8 = Math.max(0, __8 - 1), __20._eventHandlers.onerror && __14(__20._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __8 = Math.max(0, __8 - 1), __20._eventHandlers.ontimeout && __14(__20._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __8 = Math.max(0, __8 - 1), __20._eventHandlers.onabort && __14(__20._eventHandlers.onabort);
    }, this.native.onprogress = function(__23) {
      if (__20._eventHandlers.onprogress) {
        let __24 = __2.nativeToPseudo({
          loaded: __23.loaded,
          total: __23.total,
          lengthComputable: __23.lengthComputable
        });
        __14(__20._eventHandlers.onprogress, __24);
      }
    }, this.native.onloadstart = function() {
      __20._eventHandlers.onloadstart && __14(__20._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __20._eventHandlers.onloadend && __14(__20._eventHandlers.onloadend);
    }, __2.setProperty(this, 'readyState', 0), __2.setProperty(this, 'status', 0), __2.setProperty(this, 'statusText', ''), __2.setProperty(this, 'responseText', ''), __2.setProperty(this, 'responseURL', '');
  }, !0);
  __2.setProperty(u, 'XMLHttpRequest', __15);
  let __17 = __2.getProperty(__15, 'prototype');
  __2.setProperty(__15, 'UNSENT', 0), __2.setProperty(__15, 'OPENED', 1), __2.setProperty(__15, 'HEADERS_RECEIVED', 2), __2.setProperty(__15, 'LOADING', 3), __2.setProperty(__15, 'DONE', 4), __2.setProperty(__17, 'UNSENT', 0), __2.setProperty(__17, 'OPENED', 1), __2.setProperty(__17, 'HEADERS_RECEIVED', 2), __2.setProperty(__17, 'LOADING', 3), __2.setProperty(__17, 'DONE', 4);
  let __18 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __19 of __18)
    __2.setProperty(__17, __19, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this._eventHandlers[__19] || null;
      }),
      set: __2.createNativeFunction(function(__20) {
        __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest set ' + __19, this, __20), this._eventHandlers[__19] = __20;
      })
    });
  __2.setProperty(__17, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __2.createNativeFunction(function(__19) {
      this.native.timeout = Math.min(__19, 30000);
    })
  }), __2.setProperty(__17, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __2.createNativeFunction(function(__19) {
      this.native.withCredentials = !1;
    })
  }), __2.setProperty(__17, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __2.createNativeFunction(function(__19) {
      (__19 === '' || __19 === 'text' || __19 === 'json') && (this.native.responseType = __19);
    })
  }), __2.setProperty(__17, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __19 = this.native.response;
      return this.native.responseType === 'json' ? __2.nativeToPseudo(__19) : typeof __19 == 'string' ? __19.slice(0, 5242880) : __19;
    })
  }), __2.setProperty(__17, 'open', __2.createNativeFunction(function(__19, __20, __23, __24, __25) {
    if (!__10(__20))
      throw new Error(`XHR request blocked: URL "${ __20 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __26 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__19 = String(__19).toUpperCase(), !__26.includes(__19))
      throw new Error(`HTTP method "${ __19 }" is not allowed`);
    __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest open', this, __19, __20, __23, __24, __25), this._method = __19, this._url = __20, this._async = __23 !== !1, this.native.open(__19, __20, this._async), this.native.timeout = 30000, __2.setProperty(this, 'readyState', this.native.readyState);
  })), __2.setProperty(__17, 'setRequestHeader', __2.createNativeFunction(function(__19, __20) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__19.toLowerCase()))
      throw new Error(`Setting header "${ __19 }" is not allowed`);
    __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest setRequestHeader', this, __19, __20), this._headers[__19] = __20, this.native.setRequestHeader(__19, __20);
  })), __2.setProperty(__17, 'send', __2.createNativeFunction(function(__19) {
    if (__8 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest send', this, __19), __8++;
    let __20 = null;
    __19 != null && (typeof __19 == 'string' ? __20 = __19.slice(0, 5242880) : typeof __19 == 'object' && (__20 = JSON.stringify(__2.pseudoToNative(__19)))), this.native.send(__20);
  })), __2.setProperty(__17, 'abort', __2.createNativeFunction(function() {
    __3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest abort', this), this.native.abort(), __8 = Math.max(0, __8 - 1);
  })), __2.setProperty(__17, 'getResponseHeader', __2.createNativeFunction(function(__19) {
    return this.native.getResponseHeader(__19);
  })), __2.setProperty(__17, 'getAllResponseHeaders', __2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __2.setProperty(__17, 'overrideMimeType', __2.createNativeFunction(function(__19) {
    this.native.overrideMimeType(__19);
  }));
}
var __40 = 'webtiles_storage',
  __41 = 1,
  __42 = 'localStorage',
  __43 = 1024 * 1024,
  __44 = 100,
  __45 = null,
  __46 = null;

function __47() {
  return __46 || (__46 = new Promise((__2, u) => {
    let __48 = indexedDB.open(__40, __41);
    __48.onerror = () => u(__48.error), __48.onsuccess = () => {
      __45 = __48.result, __2(__45);
    }, __48.onupgradeneeded = __5 => {
      let __6 = __5.target.result;
      __6.objectStoreNames.contains(__42) || __6.createObjectStore(__42, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __46);
}
async function __49(__2, u) {
  return await __47(), new Promise((__48, __5) => {
    let __8 = __45.transaction(__42, 'readonly').objectStore(__42).get([
      __2,
      u
    ]);
    __8.onsuccess = () => __48(__8.result?.value ?? null), __8.onerror = () => __5(__8.error);
  });
}
async function __50(__2, u, __48) {
  return await __47(), new Promise((__5, __6) => {
    let __9 = __45.transaction(__42, 'readwrite').objectStore(__42).put({
      site: __2,
      key: u,
      value: __48
    });
    __9.onsuccess = () => __5(), __9.onerror = () => __6(__9.error);
  });
}
async function __51(__2, u) {
  return await __47(), new Promise((__48, __5) => {
    let __8 = __45.transaction(__42, 'readwrite').objectStore(__42).delete([
      __2,
      u
    ]);
    __8.onsuccess = () => __48(), __8.onerror = () => __5(__8.error);
  });
}
async function __52(__2) {
  return await __47(), new Promise((u, __48) => {
    let __8 = __45.transaction(__42, 'readonly').objectStore(__42).index('site').getAll(__2);
    __8.onsuccess = () => {
      let __9 = __8.result.map(__10 => __10.key);
      u(__9);
    }, __8.onerror = () => __48(__8.error);
  });
}
async function __53(__2) {
  return await __47(), new Promise((u, __48) => {
    let __8 = __45.transaction(__42, 'readonly').objectStore(__42).index('site').getAll(__2);
    __8.onsuccess = () => {
      let __9 = 0;
      for (let __10 of __8.result)
        __9 += (__10.key.length + __10.value.length) * 2;
      u({
        size: __9,
        count: __8.result.length
      });
    }, __8.onerror = () => __48(__8.error);
  });
}
async function __54(__2) {
  return await __47(), new Promise((u, __48) => {
    let __8 = __45.transaction(__42, 'readwrite').objectStore(__42).index('site').openCursor(__2);
    __8.onsuccess = __9 => {
      let __10 = __9.target.result;
      __10 ? (__10.delete(), __10.continue()) : u();
    }, __8.onerror = () => __48(__8.error);
  });
}

function __55(__2, u, __48) {
  let __5 = __2.nativeToPseudo({});
  __2.setProperty(__5, 'getItem', __2.createAsyncFunction(function(__6, __7) {
    if (__3.settings.logCalls && console.log(__48, 'localStorage.getItem', this, __6), __6 == null) {
      __7(null);
      return;
    }
    __6 = String(__6), __49(__48, __6).then(__8 => __7(__8)).catch(__8 => {
      console.error('localStorage.getItem error:', __8), __7(null);
    });
  })), __2.setProperty(__5, 'setItem', __2.createAsyncFunction(function(__6, __7, __8) {
    if (__3.settings.logCalls && console.log(__48, 'localStorage.setItem', this, __6, __7), __6 == null) {
      __8();
      return;
    }
    __6 = String(__6), __7 = String(__7), __53(__48).then(({
      size: __9,
      count: __10
    }) => {
      __49(__48, __6).then(__11 => {
        if (__11 === null && __10 >= __44)
          throw new Error(`localStorage item limit exceeded (max ${ __44 } items)`);
        let __14 = __11 ? (__6.length + __11.length) * 2 : 0,
          __15 = (__6.length + __7.length) * 2;
        if (__9 - __14 + __15 > __43)
          throw new Error(`localStorage size limit exceeded (max ${ __43 / 1024 }KB)`);
        return __50(__48, __6, __7);
      }).then(() => __8()).catch(__11 => {
        throw console.error('localStorage.setItem error:', __11), __11;
      });
    }).catch(__9 => {
      console.error('localStorage.setItem error:', __9), __8();
    });
  })), __2.setProperty(__5, 'removeItem', __2.createAsyncFunction(function(__6, __7) {
    if (__3.settings.logCalls && console.log(__48, 'localStorage.removeItem', this, __6), __6 == null) {
      __7();
      return;
    }
    __6 = String(__6), __51(__48, __6).then(() => __7()).catch(__8 => {
      console.error('localStorage.removeItem error:', __8), __7();
    });
  })), __2.setProperty(__5, 'clear', __2.createAsyncFunction(function(__6) {
    __3.settings.logCalls && console.log(__48, 'localStorage.clear', this), __54(__48).then(() => __6()).catch(__7 => {
      console.error('localStorage.clear error:', __7), __6();
    });
  })), __2.setProperty(__5, 'key', __2.createAsyncFunction(function(__6, __7) {
    __6 = parseInt(__6) || 0, __52(__48).then(__8 => {
      __7(__6 >= 0 && __6 < __8.length ? __8[__6] : null);
    }).catch(__8 => {
      console.error('localStorage.key error:', __8), __7(null);
    });
  })), __2.setProperty(__5, 'getLength', __2.createAsyncFunction(function(__6) {
    __53(__48).then(({
      count: __7
    }) => __6(__7)).catch(__7 => {
      console.error('localStorage.getLength error:', __7), __6(0);
    });
  })), __2.setProperty(u, 'localStorage', __5), __2.setProperty(u, 'sessionStorage', __5);
}
__47().catch(__2 => {
  console.error('Failed to initialize storage DB:', __2);
});

function __56(__2, u, __48, __5) {
  let __6 = __2.createNativeFunction(function() {}, !0);
  __2.setProperty(u, 'DOMParser', __6);
  let __7 = __2.getProperty(__6, 'prototype');
  __2.setProperty(__7, 'parseFromString', __2.createNativeFunction(function(__8, __9) {
    if (__3.settings.logCalls && console.log(__5.domain, 'DOMParser parseFromString', this, __8, __9), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__9))
      throw new Error(`DOMParser: Unsupported MIME type "${ __9 }"`);
    if (typeof __8 != 'string' && (__8 = String(__8)), __8.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __13 = new DOMParser().parseFromString(__8, __9),
      __14 = __2.createObjectProto(__2.OBJECT_PROTO);

    function __15(__17) {
      if (__17 == null)
        return null;
      let __18 = __2.createObjectProto(__2.OBJECT_PROTO);
      return __18.native = __17, __18.fromDOMParser = !0, __2.setProperty(__18, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __2.setProperty(__18, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __2.setProperty(__18, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __2.createNativeFunction(function(__19) {
          __3.settings.logCalls && console.log(__5.domain, 'DOMParser set nodeValue', this, __19), this.native.nodeValue = __19;
        })
      }), __2.setProperty(__18, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __2.createNativeFunction(function(__19) {
          __3.settings.logCalls && console.log(__5.domain, 'DOMParser set textContent', this, __19), this.native.textContent = String(__19).slice(0, 50000);
        })
      }), __2.setProperty(__18, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __2.setProperty(__18, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __2.createNativeFunction(function(__19) {
          __3.settings.logCalls && console.log(__5.domain, 'DOMParser set id', this, __19), this.native.id = String(__19).slice(0, 100);
        })
      }), __2.setProperty(__18, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __2.createNativeFunction(function(__19) {
          __3.settings.logCalls && console.log(__5.domain, 'DOMParser set className', this, __19), this.native.className = String(__19).slice(0, 1000);
        })
      }), __2.setProperty(__18, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __2.createNativeFunction(function(__19) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __2.setProperty(__18, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __2.setProperty(__18, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __19 = Array.from(this.native.children),
            __20 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __23 = 0; __23 < __19.length; __23++)
            __2.setProperty(__20, __23, __15(__19[__23]));
          return __2.setProperty(__20, 'length', __19.length), __20;
        })
      }), __2.setProperty(__18, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __19 = Array.from(this.native.childNodes),
            __20 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __23 = 0; __23 < __19.length; __23++)
            __2.setProperty(__20, __23, __15(__19[__23]));
          return __2.setProperty(__20, 'length', __19.length), __20;
        })
      }), __2.setProperty(__18, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __15(this.native.firstChild);
        })
      }), __2.setProperty(__18, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __15(this.native.lastChild);
        })
      }), __2.setProperty(__18, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __15(this.native.firstElementChild);
        })
      }), __2.setProperty(__18, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __15(this.native.lastElementChild);
        })
      }), __2.setProperty(__18, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__48) ? null : (__3.settings.logCalls && console.log(__5.domain, 'DOMParser get parentNode', this), __15(this.native.parentNode));
        })
      }), __2.setProperty(__18, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__48) ? null : (__3.settings.logCalls && console.log(__5.domain, 'DOMParser get parentElement', this), __15(this.native.parentElement));
        })
      }), __2.setProperty(__18, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__48) ? null : (__3.settings.logCalls && console.log(__5.domain, 'DOMParser get nextSibling', this), __15(this.native.nextSibling));
        })
      }), __2.setProperty(__18, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__48) ? null : (__3.settings.logCalls && console.log(__5.domain, 'DOMParser get previousSibling', this), __15(this.native.previousSibling));
        })
      }), __2.setProperty(__18, 'getAttributeNames', __2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __19 = Array.from(this.native.getAttributeNames()),
          __20 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __23 = 0; __23 < __19.length; __23++)
          __2.setProperty(__20, __23, __19[__23]);
        return __2.setProperty(__20, 'length', __19.length), __20;
      })), __2.setProperty(__18, 'getAttribute', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__19);
      })), __2.setProperty(__18, 'setAttribute', __2.createNativeFunction(function(__19, __20) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__19 = String(__19).toLowerCase(), __19.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__19, String(__20)), __3.settings.logCalls && console.log(__5.domain, 'DOMParser set attribute', this, __19, __20);
      })), __2.setProperty(__18, 'hasAttribute', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__19);
      })), __2.setProperty(__18, 'removeAttribute', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__48))
          throw new Error('No access.');
        this.native.removeAttribute(__19), __3.settings.logCalls && console.log(__5.domain, 'DOMParser remove attribute', this, __19);
      })), __2.setProperty(__18, 'querySelector', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __15(this.native.querySelector(__19));
      })), __2.setProperty(__18, 'querySelectorAll', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __20 = Array.from(this.native.querySelectorAll(__19)),
          __23 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __24 = 0; __24 < __20.length; __24++)
          __2.setProperty(__23, __24, __15(__20[__24]));
        return __2.setProperty(__23, 'length', __20.length), __23;
      })), __2.setProperty(__18, 'getElementsByTagName', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __20 = Array.from(this.native.getElementsByTagName(__19)),
          __23 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __24 = 0; __24 < __20.length; __24++)
          __2.setProperty(__23, __24, __15(__20[__24]));
        return __2.setProperty(__23, 'length', __20.length), __23;
      })), __2.setProperty(__18, 'getElementsByClassName', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __20 = Array.from(this.native.getElementsByClassName(__19)),
          __23 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __24 = 0; __24 < __20.length; __24++)
          __2.setProperty(__23, __24, __15(__20[__24]));
        return __2.setProperty(__23, 'length', __20.length), __23;
      })), __2.setProperty(__18, 'getElementById', __2.createNativeFunction(function(__19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __15(this.native.getElementById ? this.native.getElementById(__19) : null);
      })), __18;
    }
    return __2.setProperty(__14, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __15(__13.documentElement);
      })
    }), __2.setProperty(__14, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __3.settings.logCalls && console.log(__5.domain, 'DOMParser get head', this), __15(__13.head);
      })
    }), __2.setProperty(__14, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __3.settings.logCalls && console.log(__5.domain, 'DOMParser get body', this), __15(__13.body);
      })
    }), __2.setProperty(__14, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __13.title;
      })
    }), __2.setProperty(__14, 'querySelector', __2.createNativeFunction(function(__17) {
      return __15(__13.querySelector(__17));
    })), __2.setProperty(__14, 'querySelectorAll', __2.createNativeFunction(function(__17) {
      let __18 = Array.from(__13.querySelectorAll(__17)),
        __19 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __20 = 0; __20 < __18.length; __20++)
        __2.setProperty(__19, __20, __15(__18[__20]));
      return __2.setProperty(__19, 'length', __18.length), __19;
    })), __2.setProperty(__14, 'getElementById', __2.createNativeFunction(function(__17) {
      return __15(__13.getElementById(__17));
    })), __2.setProperty(__14, 'getElementsByTagName', __2.createNativeFunction(function(__17) {
      let __18 = Array.from(__13.getElementsByTagName(__17)),
        __19 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __20 = 0; __20 < __18.length; __20++)
        __2.setProperty(__19, __20, __15(__18[__20]));
      return __2.setProperty(__19, 'length', __18.length), __19;
    })), __2.setProperty(__14, 'getElementsByClassName', __2.createNativeFunction(function(__17) {
      let __18 = Array.from(__13.getElementsByClassName(__17)),
        __19 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __20 = 0; __20 < __18.length; __20++)
        __2.setProperty(__19, __20, __15(__18[__20]));
      return __2.setProperty(__19, 'length', __18.length), __19;
    })), __14;
  }));
}

function __57(__2, u, __48, __5) {
  let __6 = new WeakMap(),
    __7 = 1000,
    __8 = 5,
    __9 = new WeakMap(),
    __10 = 0,
    __11 = __2.nativeToPseudo({});
  __2.setProperty(u, '__eventCallbacks', __11);

  function __13(__37, o) {
    let __58 = __10++;
    __2.setProperty(__11, 'fn' + __58, __37), __2.setProperty(__11, 'ev' + __58, o), __2.appendCode(`__eventCallbacks.fn${ __58 }(__eventCallbacks.ev${ __58 }); delete __eventCallbacks.fn${ __58 }; delete __eventCallbacks.ev${ __58 };`);
  }

  function __14() {
    return __48.getElementsByTagName('*').length;
  }

  function __15(__37 = 1) {
    if (__14() + __37 > __7)
      throw new Error(`DOM element limit exceeded (max ${ __7 })`);
  }

  function __17(__37) {
    return __37 instanceof Element ? 1 + __37.getElementsByTagName('*').length : 0;
  }

  function __18(__37, o = !1) {
    if (__37 == null)
      return null;
    if (__6.has(__37))
      return __6.get(__37);
    let __58 = __37 instanceof Element ? __29 : __24,
      __59 = __2.createObject(__58);
    return __59.native = __37, __59.fromDOMParser || (__59.fromDOMParser = o), __6.set(__37, __59), __59;
  }

  function __19(__37) {
    return __37 && __48.contains(__37);
  }

  function __20(__37) {
    return __19(__37) ? __37 : null;
  }

  function __23(__37) {
    let __60 = __2.createObjectProto(__2.ARRAY_PROTO);
    for (let __58 = 0; __58 < __37.length; __58++)
      __2.setProperty(__60, __58, __18(__37[__58]));
    return __2.setProperty(__60, 'length', __37.length), __60;
  }
  let __24 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'Node', __24);
  let __25 = __2.getProperty(__24, 'prototype'),
    __26 = {
      firstChild: function() {
        return __18(__20(this.native.firstChild));
      },
      lastChild: function() {
        return __18(__20(this.native.lastChild));
      },
      parentNode: function() {
        return __18(__20(this.native.parentNode));
      },
      parentElement: function() {
        return __18(__20(this.native.parentElement));
      },
      nextSibling: function() {
        return __18(__20(this.native.nextSibling));
      },
      previousSibling: function() {
        return __18(__20(this.native.previousSibling));
      },
      childNodes: function() {
        let __37 = Array.from(this.native.childNodes).filter(__19);
        return __23(__37);
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
    __27 = {
      textContent: function(__37) {
        __3.settings.logCalls && console.log(__5.domain, 'set textContent', this, __37), this.native.textContent = __37;
      },
      nodeValue: function(__37) {
        __3.settings.logCalls && console.log(__5.domain, 'set nodeValue', this, __37), this.native.nodeValue = __37;
      }
    };
  for (let [__37, __60] of Object.entries(__26)) {
    let __58 = {
      get: __2.createNativeFunction(__60)
    };
    __27[__37] && (__58.set = __2.createNativeFunction(__27[__37])), __2.setProperty(__25, __37, Interpreter.VALUE_IN_DESCRIPTOR, __58);
  }
  let __28 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__37) {
      if (!__37?.native)
        return null;
      if (__37.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __15(__17(__37.native)), this.native.appendChild(__37.native), __3.settings.logCalls && console.log(__5.domain, 'appendChild', this, __37), __37;
    },
    append: function(__37) {
      for (let __60 of __37)
        if (__60?.native) {
          if (__60.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __15(__17(__60.native)), this.native.appendChild(__60.native);
        }
      return __3.settings.logCalls && console.log(__5.domain, 'append', this, __37), __37;
    },
    removeChild: function(__37) {
      return !__37?.native || !__19(__37.native) ? null : (__3.settings.logCalls && console.log(__5.domain, 'removeChild', this, __37), __18(this.native.removeChild(__37.native)));
    },
    insertBefore: function(__37, __60) {
      if (!__37?.native)
        return null;
      if (__37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__48))
        throw new Error('No access.');
      __15(__17(__37.native));
      let __58 = __60?.native || null;
      return this.native.insertBefore(__37.native, __58), __3.settings.logCalls && console.log(__5.domain, 'insertBefore', this, __37, __58), __37;
    },
    cloneNode: function(__37) {
      return __3.settings.logCalls && console.log(__5.domain, 'cloneNode', this, __37), __18(this.native.cloneNode(__37), this.fromDOMParser);
    },
    contains: function(__37) {
      return __37?.native ? this.native.contains(__37.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__48))
        throw new Error('No access.');
      this.native.remove(), __3.settings.logCalls && console.log(__5.domain, 'remove', this);
    },
    after: function(__37) {
      if (!__37?.native)
        return null;
      if (__37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__48))
        throw new Error('No access.');
      return __15(__17(__37.native)), this.native.after(__37.native), __3.settings.logCalls && console.log(__5.domain, 'after', this, __37), __37;
    },
    before: function(__37) {
      if (!__37?.native)
        return null;
      if (__37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__48))
        throw new Error('No access.');
      return __15(__17(__37.native)), this.native.before(__37.native), __3.settings.logCalls && console.log(__5.domain, 'before', this, __37), __37;
    }
  };
  for (let [__37, __60] of Object.entries(__28))
    __2.setProperty(__25, __37, __2.createNativeFunction(__60));
  let __29 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(u, 'Element', __29);
  let __30 = __2.createObject(__24);
  __2.setProperty(__29, 'prototype', __30);

  function __31(__37) {
    if (!__37)
      return '';
    __37 = String(__37);
    let __60 = __37.toLowerCase().trim();
    if (__60.startsWith('javascript:') || __60.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__60.startsWith('data:'))
      return __37;
    try {
      let __58 = new URL(__37, location.href);
      if (__58.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __59 = __58.pathname + __58.search + __58.hash;
      return __59.startsWith(`/t/${ __5.domain }/`) || (__59 = `/t/${ __5.domain }/${ __59 }`.replaceAll('//', '/')), __59;
    } catch (__58) {
      if (__58.message.includes('not allowed'))
        throw __58;
      let __59 = __37;
      return !__59.startsWith(`/t/${ __5.domain }/`) && !__59.startsWith('#') && (__59 = `/t/${ __5.domain }/${ __59 }`.replaceAll('//', '/')), __59;
    }
  }
  let __32 = {
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
        let __37 = Array.from(this.native.children).filter(__19);
        return __23(__37);
      },
      firstElementChild: function() {
        return __18(__20(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __18(__20(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __18(__20(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __18(__20(this.native.previousElementSibling));
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
    __33 = {
      innerText: function(__37) {
        this.native.innerText = __37.slice(0, 1000);
      },
      innerHTML: function(__37) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __37, __3.settings.logCalls && console.log(__5.domain, 'set id', this, __37);
      },
      className: function(__37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __37, __3.settings.logCalls && console.log(__5.domain, 'set className', this, __37);
      },
      src: function(__37) {
        this.native.src = __31(__37), __3.settings.logCalls && console.log(__5.domain, 'set src', this, __37);
      },
      href: function(__37) {
        this.native.href = this.native.tagName === 'A' ? __37 : __31(__37), __3.settings.logCalls && console.log(__5.domain, 'set href', this, __37);
      },
      hidden: function(__37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__37;
      },
      disabled: function(__37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__37;
      },
      checked: function(__37) {
        this.native.checked = !!__37;
      },
      selected: function(__37) {
        this.native.selected = !!__37;
      },
      readOnly: function(__37) {
        this.native.readOnly = !!__37;
      },
      required: function(__37) {
        this.native.required = !!__37;
      },
      draggable: function(__37) {
        this.native.draggable = !!__37;
      },
      title: function(__37) {
        this.native.title = String(__37).slice(0, 1000);
      },
      alt: function(__37) {
        this.native.alt = String(__37).slice(0, 1000);
      },
      name: function(__37) {
        this.native.name = String(__37).slice(0, 100);
      },
      type: function(__37) {
        this.native.type = String(__37).slice(0, 50);
      },
      value: function(__37) {
        this.native.value = String(__37).slice(0, 10000);
      },
      placeholder: function(__37) {
        this.native.placeholder = String(__37).slice(0, 500);
      },
      tabIndex: function(__37) {
        this.native.tabIndex = parseInt(__37) || 0;
      },
      scrollTop: function(__37) {
        this.native.scrollTop = __37;
      },
      scrollLeft: function(__37) {
        this.native.scrollLeft = __37;
      },
      currentTime: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__37) || 0));
      },
      muted: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__37);
      },
      volume: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__37) || 0)));
      },
      loop: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__37);
      },
      autoplay: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__37);
      },
      controls: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__37);
      },
      playbackRate: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__37) || 1)));
      },
      defaultPlaybackRate: function(__37) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__37) || 1)));
      },
      preload: function(__37) {
        if (this.native instanceof HTMLMediaElement) {
          let __60 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __60.includes(__37) ? __37 : 'auto';
        }
      },
      poster: function(__37) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __31(__37));
      }
    };
  for (let [__37, __60] of Object.entries(__32)) {
    let __58 = {
      get: __2.createNativeFunction(__60)
    };
    __33[__37] && (__58.set = __2.createNativeFunction(__33[__37])), __2.setProperty(__30, __37, Interpreter.VALUE_IN_DESCRIPTOR, __58);
  }
  let __34 = {
    getAttributeNames: function() {
      let __37 = Array.from(this.native.getAttributeNames()),
        __60 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __58 = 0; __58 < __37.length; __58++)
        __2.setProperty(__60, __58, __37[__58]);
      return __2.setProperty(__60, 'length', __37.length), __60;
    },
    getAttribute: function(__37) {
      return this.native.getAttribute(__37);
    },
    setAttribute: function(__37, __60) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__37 = String(__37).toLowerCase(), __60 = String(__60), __3.settings.logCalls && console.log(__5.domain, 'setAttribute', this, __37, __60), __37 === 'style' && __60.includes('animation-play-state') && __60.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__37 === 'src' || __37 === 'poster' || __37 === 'data' || this.native.tagName !== 'A' && __37 === 'href') {
        this.native.setAttribute(__37, __31(__60));
        return;
      }
      if (__37 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__37 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__37 === 'action' || __37 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__37.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__37 === 'width' || __37 === 'height') {
        let __58 = parseFloat(__60);
        if (isNaN(__58) || __58 < 0 || __58 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__37, __60);
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
    scrollIntoView: function(__37) {
      __37 && typeof __37 == 'object' ? this.native.scrollIntoView(__2.pseudoToNative(__37)) : this.native.scrollIntoView(__37);
    },
    scrollTo: function(__37, __60) {
      this.native.scrollTo(__37, __60);
    },
    scrollBy: function(__37, __60) {
      this.native.scrollBy(__37, __60);
    },
    removeAttribute: function(__37) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__37 = String(__37).toLowerCase(), __37 === 'target')
        throw new Error('removing target is not allowed');
      __3.settings.logCalls && console.log(__5.domain, 'removeAttribute', this, __37), this.native.removeAttribute(__37);
    },
    hasAttribute: function(__37) {
      return this.native.hasAttribute(__37);
    },
    querySelector: function(__37) {
      let __60 = this.native.querySelector(__37);
      return __18(__20(__60));
    },
    querySelectorAll: function(__37) {
      let __60 = Array.from(this.native.querySelectorAll(__37)).filter(__19);
      return __23(__60);
    },
    getElementsByClassName: function(__37) {
      let __60 = Array.from(this.native.getElementsByClassName(__37)).filter(__19);
      return __23(__60);
    },
    getElementsByTagName: function(__37) {
      let __60 = Array.from(this.native.getElementsByTagName(__37)).filter(__19);
      return __23(__60);
    },
    closest: function(__37) {
      let __60 = this.native.closest(__37);
      for (; __60 && !__48.contains(__60);)
        __60 = null;
      return __18(__60);
    },
    matches: function(__37) {
      return this.native.matches(__37);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __37 = this.native.classList;
      return __2.nativeToPseudo({
        add: (...__60) => __37.add(...__60),
        remove: (...__60) => __37.remove(...__60),
        toggle: (__60, __58) => __37.toggle(__60, __58),
        contains: __60 => __37.contains(__60),
        replace: (__60, __58) => __37.replace(__60, __58)
      });
    },
    getBoundingClientRect: function() {
      let __37 = this.native.getBoundingClientRect();
      return __2.nativeToPseudo({
        __26: __37.__26,
        __18: __37.__18,
        width: __37.width,
        height: __37.height,
        top: __37.top,
        right: __37.right,
        bottom: __37.bottom,
        left: __37.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __2.createObjectProto(__2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __37 = __2.createObjectProto(__2.OBJECT_PROTO),
        __60 = this,
        __58 = null,
        __59 = null;
      return __3.settings.logCalls && console.log(__5.domain, 'play', this), __2.setProperty(__37, 'then', __2.createNativeFunction(function(S) {
        return __58 = S, __37;
      })), __2.setProperty(__37, 'catch', __2.createNativeFunction(function(S) {
        return __59 = S, __37;
      })), __60.native.play().then(() => {
        __58 && __13(__58, __2.nativeToPseudo(void 0));
      }).catch(S => {
        __59 && __13(__59, __2.nativeToPseudo({
          message: S.message,
          name: S.name
        }));
      }), __37;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__37) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__37 || '')) : '';
    },
    fastSeek: function(__37) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__37) || 0));
    },
    getAnimations: function(__37) {
      if (!this.native.getAnimations)
        return __23([]);
      let __60 = __37 ? {
          subtree: !!__2.pseudoToNative(__37)?.subtree
        } : {},
        __58 = this.native.getAnimations(__60),
        __59 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __61 = 0; __61 < __58.length; __61++)
        __59.properties[__61] = __21(__58[__61]);
      return __2.setProperty(__59, 'length', __58.length), __59;
    }
  };
  for (let [__37, __60] of Object.entries(__34))
    __2.setProperty(__30, __37, __2.createNativeFunction(__60));

  function __21(__37) {
    let __60 = __2.createObjectProto(__2.OBJECT_PROTO);
    return __2.setProperty(__60, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.id;
      })
    }), __2.setProperty(__60, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.playState;
      })
    }), __2.setProperty(__60, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.pending;
      })
    }), __2.setProperty(__60, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.replaceState;
      })
    }), __2.setProperty(__60, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.currentTime;
      }),
      set: __2.createNativeFunction(function(__58) {
        __37.currentTime = __58;
      })
    }), __2.setProperty(__60, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.playbackRate;
      }),
      set: __2.createNativeFunction(function(__58) {
        __37.playbackRate = Math.max(-10, Math.min(10, Number(__58) || 1));
      })
    }), __2.setProperty(__60, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __37.startTime;
      }),
      set: __2.createNativeFunction(function(__58) {
        __37.startTime = __58;
      })
    }), __2.setProperty(__60, 'play', __2.createNativeFunction(function() {
      __37.play();
    })), __2.setProperty(__60, 'pause', __2.createNativeFunction(function() {
      __37.pause();
    })), __2.setProperty(__60, 'cancel', __2.createNativeFunction(function() {
      __37.cancel();
    })), __2.setProperty(__60, 'finish', __2.createNativeFunction(function() {
      __37.finish();
    })), __2.setProperty(__60, 'reverse', __2.createNativeFunction(function() {
      __37.reverse();
    })), __2.setProperty(__60, 'updatePlaybackRate', __2.createNativeFunction(function(__58) {
      __37.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__58) || 1)));
    })), __60;
  }

  function __16(__37) {
    let __60 = __2.createObjectProto(__2.OBJECT_PROTO),
      __58 = __37 ? __37.length : 0;
    return __2.setProperty(__60, 'length', __58), __2.setProperty(__60, 'start', __2.createNativeFunction(function(__59) {
      if (!__37 || __59 < 0 || __59 >= __37.length)
        throw new Error('Index out of bounds');
      return __37.start(__59);
    })), __2.setProperty(__60, 'end', __2.createNativeFunction(function(__59) {
      if (!__37 || __59 < 0 || __59 >= __37.length)
        throw new Error('Index out of bounds');
      return __37.end(__59);
    })), __60;
  }
  __2.setProperty(__30, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __16(this.native.buffered) : __16(null);
    })
  }), __2.setProperty(__30, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __16(this.native.played) : __16(null);
    })
  }), __2.setProperty(__30, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __16(this.native.seekable) : __16(null);
    })
  }), __2.setProperty(__30, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __37 = this.native.classList,
        __60 = __2.nativeToPseudo({});
      return __2.setProperty(__60, 'add', __2.createNativeFunction(function(...__58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __37.add(...__58);
      })), __2.setProperty(__60, 'remove', __2.createNativeFunction(function(...__58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __37.remove(...__58);
      })), __2.setProperty(__60, 'toggle', __2.createNativeFunction(function(__58, __59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __37.toggle(__58, __59);
      })), __2.setProperty(__60, 'contains', __2.createNativeFunction(function(__58) {
        return __37.contains(__58);
      })), __2.setProperty(__60, 'replace', __2.createNativeFunction(function(__58, __59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __37.replace(__58, __59);
      })), __60;
    })
  }), __2.setProperty(__30, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __37 = this.native.style,
        __60 = __2.nativeToPseudo({}),
        __58 = [
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
      for (let __59 of __58)
        __2.setProperty(__60, __59, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __2.createNativeFunction(function() {
            return __37[__59];
          }),
          set: __2.createNativeFunction(function(__61) {
            __37[__59] = __61, __3.settings.logCalls && console.log(__5.domain, 'set style', this, __59, __61);
          })
        });
      return __2.setProperty(__60, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __37.cssText;
        }),
        set: __2.createNativeFunction(function(__59) {
          __37.cssText = __59, __3.settings.logCalls && console.log(__5.domain, 'set cssText', this, __59);
        })
      }), __2.setProperty(__60, 'setProperty', __2.createNativeFunction(function(__59, __61, L) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __37.setProperty(__59, __61, L), __3.settings.logCalls && console.log(__5.domain, 'setProperty', this, __59, __61, L);
      })), __2.setProperty(__60, 'getPropertyValue', __2.createNativeFunction(function(__59) {
        return __37.getPropertyValue(__59);
      })), __2.setProperty(__60, 'removeProperty', __2.createNativeFunction(function(__59) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __3.settings.logCalls && console.log(__5.domain, 'removeProperty', this, __59), __37.removeProperty(__59);
      })), __60;
    })
  }), __2.setProperty(__30, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __37 = this.native.dataset,
        __60 = __2.nativeToPseudo({});
      for (let __58 in __37)
        __2.setProperty(__60, __58, __37[__58]);
      return __2.setProperty(__60, 'get', __2.createNativeFunction(function(__58) {
        return __37[__58];
      })), __2.setProperty(__60, 'set', __2.createNativeFunction(function(__58, __59) {
        __37[__58] = String(__59).slice(0, 1000), __3.settings.logCalls && console.log(__5.domain, 'set dataset', this, __58, __59);
      })), __2.setProperty(__60, 'delete', __2.createNativeFunction(function(__58) {
        delete __37[__58], __3.settings.logCalls && console.log(__5.domain, 'delete dataset', this, __58);
      })), __2.setProperty(__60, 'has', __2.createNativeFunction(function(__58) {
        return __58 in __37;
      })), __60;
    })
  }), __2.setProperty(__30, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __18(__20(this.native.offsetParent));
    })
  });
  let __12 = [
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

  function __22(__37) {
    let __60 = __2.nativeToPseudo({}),
      __58 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __59 of __58)
      __2.setProperty(__60, __59, __37[__59]);
    if (__37 instanceof MouseEvent || __37 instanceof PointerEvent) {
      let __59 = [
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
      for (let __61 of __59)
        __2.setProperty(__60, __61, __37[__61]);
    }
    if (__37 instanceof KeyboardEvent) {
      let __59 = [
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
      for (let __61 of __59)
        __2.setProperty(__60, __61, __37[__61]);
    }
    return typeof TouchEvent == 'function' && __37 instanceof TouchEvent && (__2.setProperty(__60, 'touches', __2.nativeToPseudo({
      length: __37.touches.length
    })), __2.setProperty(__60, 'changedTouches', __2.nativeToPseudo({
      length: __37.changedTouches.length
    }))), typeof WheelEvent == 'function' && __37 instanceof WheelEvent && (__2.setProperty(__60, 'deltaX', __37.deltaX), __2.setProperty(__60, 'deltaY', __37.deltaY), __2.setProperty(__60, 'deltaZ', __37.deltaZ), __2.setProperty(__60, 'deltaMode', __37.deltaMode)), __37.target && __19(__37.target) && __2.setProperty(__60, 'target', __18(__37.target)), __37.currentTarget && __19(__37.currentTarget) && __2.setProperty(__60, 'currentTarget', __18(__37.currentTarget)), __2.setProperty(__60, 'preventDefault', __2.createNativeFunction(function() {
      __37.preventDefault();
    })), __2.setProperty(__60, 'stopPropagation', __2.createNativeFunction(function() {
      __37.stopPropagation();
    })), __2.setProperty(__60, 'stopImmediatePropagation', __2.createNativeFunction(function() {
      __37.stopImmediatePropagation();
    })), __60;
  }
  __2.setProperty(__30, 'addEventListener', __2.createNativeFunction(function(__37, __60) {
    if (!__37 || typeof __37 != 'string' || !__60 || typeof __60 != 'object')
      return;
    if (__37 = __37.toLowerCase(), !__12.includes(__37))
      throw new Error(`Event type "${ __37 }" is not allowed`);
    __3.settings.logCalls && console.log(__5.domain, 'addEventListener', this, __37, __60);
    let __58 = this.native;
    __9.has(__58) || __9.set(__58, new Map());
    let __59 = __9.get(__58);
    __59.has(__37) || __59.set(__37, []);
    let __61 = __59.get(__37);
    if (__61.length >= __8)
      throw new Error(`Maximum listeners (${ __8 }) reached for event "${ __37 }"`);
    if (__61.some(H => H.pseudo === __60))
      return;
    let __62 = function(H) {
      let __63 = __22(H);
      __13(__60, __63);
    };
    __61.push({
      pseudo: __60,
      native: __62
    }), __58.addEventListener(__37, __62);
  })), __2.setProperty(__30, 'removeEventListener', __2.createNativeFunction(function(__37, __60) {
    if (!__37 || typeof __37 != 'string' || !__60 || typeof __60 != 'object')
      return;
    __3.settings.logCalls && console.log(__5.domain, 'removeEventListener', this, __37, __60), __37 = __37.toLowerCase();
    let __58 = this.native;
    if (!__9.has(__58))
      return;
    let __59 = __9.get(__58);
    if (!__59.has(__37))
      return;
    let __61 = __59.get(__37),
      __62 = __61.findIndex(H => H.pseudo === __60);
    __62 !== -1 && (__58.removeEventListener(__37, __61[__62].native), __61.splice(__62, 1));
  }));
  let __38 = [
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
  for (let __37 of __38) {
    let __60 = 'on' + __37;
    __2.setProperty(__30, __60, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __58 = this.native;
        if (!__9.has(__58))
          return null;
        let __59 = __9.get(__58),
          __61 = `__${ __60 }`;
        return __59.get(__61) || null;
      }),
      set: __2.createNativeFunction(function(__58) {
        let __59 = this.native;
        __9.has(__59) || __9.set(__59, new Map());
        let __61 = __9.get(__59),
          __62 = `__${ __60 }`;
        __3.settings.logCalls && console.log(__5.domain, 'setOn' + __37, this, __58);
        let __64 = __61.get(__62 + '_native');
        if (__64 && (__59.removeEventListener(__37, __64), __61.delete(__62), __61.delete(__62 + '_native')), __58 && typeof __58 == 'object') {
          let __63 = function(gt) {
            let __65 = __22(gt);
            __13(__58, __65);
          };
          __59.addEventListener(__37, __63), __61.set(__62, __58), __61.set(__62 + '_native', __63);
        }
      })
    });
  }
  __4(__2, u, __5).extendElement(__30, __18), __39(__2, u, __5), __55(__2, u, __5.domain), __56(__2, u, __48, __5);
  let __36 = __2.nativeToPseudo({});
  __2.setProperty(u, 'document', __36);
  let __66 = {
    getElementById: function(__37) {
      let __60 = __48.querySelector(`#${ CSS.escape(__37) }`);
      return __18(__60);
    },
    getElementsByClassName: function(__37) {
      let __60 = Array.from(__48.getElementsByClassName(__37));
      return __23(__60);
    },
    getElementsByTagName: function(__37) {
      let __60 = Array.from(__48.getElementsByTagName(__37));
      return __23(__60);
    },
    querySelector: function(__37) {
      return __18(__48.querySelector(__37));
    },
    querySelectorAll: function(__37) {
      let __60 = Array.from(__48.querySelectorAll(__37));
      return __23(__60);
    },
    createElement: function(__37) {
      if (typeof __37 != 'string')
        throw new Error('Invalid tag');
      if (__37 = __37.toLowerCase().trim(), [
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
        ].includes(__37))
        throw new Error('Creating ' + __37 + ' elements is not allowed');
      return __3.settings.logCalls && console.log(__5.domain, 'createElement', this, __37), __18(document.createElement(__37));
    },
    createTextNode: function(__37) {
      return __3.settings.logCalls && console.log(__5.domain, 'createTextNode', this, __37), __18(document.createTextNode(__37));
    }
  };
  for (let [__37, __60] of Object.entries(__66))
    __2.setProperty(__36, __37, __2.createNativeFunction(__60));
  __2.setProperty(__36, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __3.settings.logCalls && console.log(__5.domain, 'get body', this), __18(__48);
    })
  }), __2.setProperty(__36, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __3.settings.logCalls && console.log(__5.domain, 'get documentElement', this), __18(__48);
    })
  });
  let __67 = __2.nativeToPseudo({});
  __2.setProperty(u, 'location', __67), __2.setProperty(__67, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return `/t/${ __5.domain }${ __5.path }`;
    }),
    set: __2.createNativeFunction(function(__37) {
      if (typeof __37 == 'string') {
        __3.settings.logCalls && console.log(__5.domain, 'set href', this, __37);
        try {
          let __60 = new URL(__37, `http://${ __5.domain }`);
          if (__60.hostname && __60.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __58 = __60.pathname + __60.search + __60.hash;
          if (__58.startsWith(`/t/${ __5.domain }/`) ? __58 = __58.substring(`/t/${ __5.domain }`.length) : __58 === `/t/${ __5.domain }` && (__58 = '/'), __58.startsWith('/') || (__58 = '/' + __58), __58.endsWith('.html') || __58 === '/' || __58 === '')
            __5.fetchContent(__58 || '/index.html'), __5.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__60) {
          if (__60.message.includes('not allowed') || __60.message.includes('Only HTML'))
            throw __60;
          let __58 = __37;
          if (__58.startsWith('/') || (__58 = '/' + __58), __58.endsWith('.html') || __58 === '/' || __58 === '')
            __5.fetchContent(__58 || '/index.html').then(() => __5.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __2.setProperty(__67, 'reload', __2.createNativeFunction(function() {
    __5.fetchContent(__5.path, !0).then(() => __5.setActive(!0));
  }));
}
var __68 = {
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
  __69 = class {
    constructor(u) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = u, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__48, __5) => {
        let __6 = (__7, __8) => {
          for (let [__9, __10] of Object.entries(__7))
            if (typeof __10 == 'function')
              __48.setProperty(__8, __9, __48.createNativeFunction(__10.bind(this)));
            else if (typeof __10 == 'object' && __10 !== null) {
            let __11 = __48.nativeToPseudo({});
            __6(__10, __11), __48.setProperty(__8, __9, __11);
          }
        };
        __6(__68, __5), __57(__48, __5, this.tile.contentElement, this.tile), __48.setProperty(__5, 'embedded', __48.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __70 = new Set(),
        __48 = [this.interpreter.getStateStack()],
        __5 = 0;
      for (; __48.length;) {
        let __6 = __48.pop(),
          __7 = typeof __6;
        if (__5 += 8, __7 === 'string' && !__70.has(__6))
          __70.add(__6), __5 += __6.length * 2;
        else if (__7 === 'object' && __6 !== null && !__70.has(__6)) {
          __70.add(__6);
          try {
            __48.push(...Object.keys(__6), ...Object.values(__6));
          } catch {}
        }
      }
      return __5;
    }
    start() {
      this.running || __3.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __70 = 0; __70 < 5000; __70++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __48 = this.roughValueMemorySize();
                if (__48 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __48 } bytes`);
                  break;
                }
              }
            } catch (__48) {
              console.error(__48), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__70) {
      __3.settings.disableJS || this.interpreter.appendCode(__70);
    }
  },
  __71 = __69;
var __72 = document.getElementById('plot'),
  __73 = new CSSStyleSheet(),
  __74 = () => {
    __73.replaceSync(`
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
__74();
var __75 = new CSSStyleSheet();
__75.replaceSync(`
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
var __76 = class __2 {
  constructor(__70) {
    this.__26 = __70.__26 ?? 0, this.__18 = __70.__18 ?? 0, this.domain = __70.domain, this.free = !__70.domain, this.locked = !1, this.id = `${ this.__26 },${ this.__18 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __70.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __70.nocontrols || !1, this.embed = __70.embed || !1, this.container = __70.container || __72, this.interpreter = null, this.render();
  }
  static toTilePosition(__70, __48) {
    return {
      __26: Math.floor(__70 / 250),
      __18: Math.floor(__48 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __70 = document.createElement('div');
    __70.classList.add('tile'), this.free && __70.classList.add('f'), this.preview ? __70.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__70.style.left = `${ this.__26 * 250 }px`, __70.style.top = `${ this.__18 * 250 }px`, this.__26 % 10 === 0 && __70.classList.add('b-left'), this.__18 % 10 === 0 && __70.classList.add('b-top')), this.element = __70;
    let __48 = document.createElement('div');
    __48.classList.add('tile-content'), this.preview && (__48.style.cssText = 'width: 100%; height: 100%;'), __48.addEventListener('click', async __6 => {
      let __7 = __6.composedPath()?.filter(__11 => __11 instanceof Element);
      if (!__7)
        return;
      let __8 = __7.findIndex(__11 => __11.isSameNode(__48));
      if (__8 === -1)
        return;
      let __10 = __7.slice(0, __8).find(__11 => __11.tagName === 'A');
      if (__10) {
        __6.preventDefault();
        try {
          let __11 = new URL(__10.href);
          if (__11.hostname !== location.hostname) {
            let __14 = document.createElement('a');
            __14.href = __10.href, __14.target = '_blank', __14.click();
            return;
          }
          let __13 = __11.pathname;
          if (__13.startsWith(`/t/${ this.domain }/`) || (__13 = `/t/${ this.domain }/${ __13 }`.replaceAll('//', '/')), __13.startsWith(`/t/${ this.domain }`) && (__13.endsWith('.html') || __13 === `/t/${ this.domain }/` || __13 === `/t/${ this.domain }`))
            await this.fetchContent(__13.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __14 = document.createElement('a');
            __14.href = __10.href, __14.target = '_blank', __14.click();
          }
        } catch (__11) {
          console.error(__11);
        }
      }
    }), this.shadow = __48.attachShadow({
      mode: 'open'
    });
    let __5 = document.createElement('div');
    __5.className = 'tile-body', this.embed && __5.classList.add('embedded'), __5.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __5, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__26 }, ${ this.__18 }...`, this.shadow.appendChild(__5), __70.appendChild(__48), this.fonts = document.createElement('style'), __70.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__70), __3.plot?.lockCache[this.__26 + ',' + this.__18] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__70, __48 = !1) {
    __70.startsWith('/') || (__70 = '/' + __70);
    let __5 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__26 }, ${ this.__18 }</p>
            </div>` : this.path === __70 && this.content && !__48 ? this.content : await fetch(`/t/${ this.domain }${ __70 }`).then(__8 => __8.text()).catch(__8 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__75] : this.shadow.adoptedStyleSheets = [__73], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __70, this.contentElement.innerHTML = __5, this.content = __5;
    let __6 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __7 = 0;
    for (let __8 of __6) {
      if (__7 >= 3)
        break;
      let __9 = __8.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__9)
        for (let __10 of __9) {
          if (__7 >= 3)
            break;
          this.fonts.textContent += __10, __7++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __70 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __48 of __70)
      this.interpreter.runCode(__48.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__70) {
    if (this.element && (__70 && (this.interpreter || (this.interpreter = new __71(this), this.executeScripts()), this.interpreter.start()), __70 !== this.active)) {
      if (this.active = __70, __70) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __3.ui) {
          let __5 = __3.ui.createVoteMenu(this);
          __5 && this.element.appendChild(__5);
          let __6 = __3.ui.createTileControl(this);
          if (this.element.appendChild(__6), __3.user?.admin || __3.user?.moderator) {
            let __7 = __3.ui.createAdminControl(this);
            this.element.appendChild(__7);
          }
          __3.plot?.activeTile && __3.plot.activeTile.setActive(!1), __3.plot && (__3.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __48 = this.contentElement.querySelectorAll('audio, video');
        for (let __5 of __48)
          __5.dataset.webtilesPaused === 'true' && (__5.dataset.webtilesPaused = !1, __5.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __3.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __3.plot && (__3.plot.activeTile = null)), __2.clearClanBorders();
        let __48 = this.contentElement.querySelectorAll('audio, video');
        for (let __5 of __48)
          __5.paused || (__5.dataset.webtilesPaused = !0, __5.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __48 = await (await __3.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__48.success || !__48.clan)
          return;
        let __5 = __48.clan.members;
        if (!__5 || __5.length <= 1)
          return;
        let __6 = new Set(__5.map(__7 => `${ __7.__26 },${ __7.__18 }`));
        for (let __7 of __5) {
          let __8 = __3.plot.tiles[`${ __7.__26 },${ __7.__18 }`];
          if (!__8?.element)
            continue;
          __8.element.classList.add('clan-highlight');
          let __9 = __6.has(`${ __7.__26 },${ __7.__18 - 1 }`),
            __10 = __6.has(`${ __7.__26 },${ __7.__18 + 1 }`),
            __11 = __6.has(`${ __7.__26 - 1 },${ __7.__18 }`),
            __13 = __6.has(`${ __7.__26 + 1 },${ __7.__18 }`);
          if (!__9) {
            let __14 = document.createElement('div');
            __14.className = 'clan-border clan-border-top', __8.element.appendChild(__14);
          }
          if (!__10) {
            let __14 = document.createElement('div');
            __14.className = 'clan-border clan-border-bottom', __8.element.appendChild(__14);
          }
          if (!__11) {
            let __14 = document.createElement('div');
            __14.className = 'clan-border clan-border-left', __8.element.appendChild(__14);
          }
          if (!__13) {
            let __14 = document.createElement('div');
            __14.className = 'clan-border clan-border-right', __8.element.appendChild(__14);
          }
        }
      } catch (__70) {
        console.error('Failed to fetch clan borders:', __70);
      }
  }
  static clearClanBorders() {
    if (__3.plot?.tiles)
      for (let __70 of Object.values(__3.plot.tiles))
        __70.element && (__70.element.classList.remove('clan-highlight'), __70.element.querySelectorAll('.clan-border').forEach(__5 => __5.remove()));
  }
  setDomain(__70) {
    this.domain = __70, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__70) {
    this.locked = __70, this.element && this.element.classList.toggle('locked', __70), this.fetchContent('/index.html', !0);
  }
};
var __77 = JSON.parse(document.getElementById('embed-data').textContent),
  __78 = document.getElementById('tile');
window.tile = new __76({
  domain: __77.domain,
  container: __78,
  nocontrols: !0,
  embed: !0,
  path: '/index.html',
  __26: __77.__26,
  __18: __77.__18
});
window.onmessage = __2 => {
  __2.data.type === 'update' && (window.tile.unrender(), __78.innerHTML = '', window.tile = new __76({
    domain: __77.domain,
    container: __78,
    nocontrols: !0,
    embed: !0,
    path: __2.data.path,
    __26: __77.__26,
    __18: __77.__18
  }));
};