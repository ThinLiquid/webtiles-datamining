/* c2fdc21ec477b787a199ebc9c5404158d0cbb66909e18b89fae83071a67d4516 */
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

function __4(__2, __5, __6) {
  let __7 = new WeakMap(),
    __8 = 2048,
    __9 = 10000,
    __10 = new WeakMap();

  function __11(__12) {}

  function __13() {
    __10.clear = new WeakMap();
  }

  function __14(__12, __15) {
    if (!__12)
      return null;
    if (__7.has(__12))
      return __7.get(__12);
    let __16 = __2.createObject(U);
    return __16.native = __12, __16.canvas = __15, __7.set(__12, __16), __16;
  }
  let __17 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'CanvasGradient', __17);
  let __18 = __2.getProperty(__17, 'prototype');
  __2.setProperty(__18, 'addColorStop', __2.createNativeFunction(function(__12, __15) {
    this.native.addColorStop(__12, __15);
  }));

  function __19(__12) {
    let __15 = __2.createObject(__17);
    return __15.native = __12, __15;
  }
  let __20 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'CanvasPattern', __20);

  function __21(__12) {
    let __15 = __2.createObject(__20);
    return __15.native = __12, __15;
  }
  let __22 = __2.createNativeFunction(function(__12, __15) {
    if (__12 > __8 || __15 > __8)
      throw new Error(`ImageData size exceeds maximum (${ __8 }x${ __8 })`);
    __3.settings.logCalls && console.log(__6.domain, 'create ImageData', this, __12, __15);
    let __16 = new ImageData(__12, __15);
    this.native = __16, this.width = __12, this.height = __15;
  }, !0);
  __2.setProperty(__5, 'ImageData', __22);
  let __23 = __2.getProperty(__22, 'prototype');
  __2.setProperty(__23, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.width;
    })
  }), __2.setProperty(__23, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.height;
    })
  }), __2.setProperty(__23, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __12 = this.native.data,
        __15 = __2.createObjectProto(__2.ARRAY_PROTO);
      __2.setProperty(__15, 'length', __12.length);
      let __16 = __2.nativeToPseudo({});
      __2.setProperty(__16, 'length', __12.length), __2.setProperty(__16, 'get', __2.createNativeFunction(function(__24) {
        return __12[__24];
      })), __2.setProperty(__16, 'set', __2.createNativeFunction(function(__24, __25) {
        __3.settings.logCalls && console.log(__6.domain, 'setImageData', this, __24, __25), __12[__24] = __25;
      }));
      for (let __24 = 0; __24 < Math.min(__12.length, 1000); __24++)
        (__25 => {
          __2.setProperty(__16, __25, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: __2.createNativeFunction(function() {
              return __12[__25];
            }),
            set: __2.createNativeFunction(function(__26) {
              __3.settings.logCalls && console.log(__6.domain, 'setImageData', this, __25, __26), __12[__25] = __26;
            })
          });
        })(__24);
      return __16;
    })
  });

  function __27(__12) {
    let __15 = __2.createObject(__22);
    return __15.native = __12, __15;
  }
  let __28 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'TextMetrics', __28);
  let __29 = __2.getProperty(__28, 'prototype'),
    __30 = [
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
  for (let __12 of __30)
    __2.setProperty(__29, __12, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__12];
      })
    });

  function __31(__12) {
    let __15 = __2.createObject(__28);
    return __15.native = __12, __15;
  }
  let __32 = __2.createNativeFunction(function(__12) {
    __12 && __12.native ? this.native = new Path2D(__12.native) : typeof __12 == 'string' ? this.native = new Path2D(__12) : this.native = new Path2D();
  }, !0);
  __2.setProperty(__5, 'Path2D', __32);
  let __33 = __2.getProperty(__32, 'prototype'),
    __34 = {
      addPath: function(__12, __15) {
        __12?.native && this.native.addPath(__12.native, __15);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(__12, __15) {
        this.native.moveTo(__12, __15);
      },
      lineTo: function(__12, __15) {
        this.native.lineTo(__12, __15);
      },
      bezierCurveTo: function(__12, __15, __16, __24, __25, __26) {
        this.native.bezierCurveTo(__12, __15, __16, __24, __25, __26);
      },
      quadraticCurveTo: function(__12, __15, __16, __24) {
        this.native.quadraticCurveTo(__12, __15, __16, __24);
      },
      arc: function(__12, __15, __16, __24, __25, __26) {
        this.native.arc(__12, __15, __16, __24, __25, __26);
      },
      arcTo: function(__12, __15, __16, __24, __25) {
        this.native.arcTo(__12, __15, __16, __24, __25);
      },
      ellipse: function(__12, __15, __16, __24, __25, __26, __35, __36) {
        this.native.ellipse(__12, __15, __16, __24, __25, __26, __35, __36);
      },
      rect: function(__12, __15, __16, __24) {
        this.native.rect(__12, __15, __16, __24);
      },
      roundRect: function(__12, __15, __16, __24, __25) {
        this.native.roundRect(__12, __15, __16, __24, __25);
      }
    };
  for (let [__12, __15] of Object.entries(__34))
    __2.setProperty(__33, __12, __2.createNativeFunction(__15));
  let __37 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'CanvasRenderingContext2D', __37);
  let __38 = __2.getProperty(__37, 'prototype'),
    __39 = [
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
  for (let __12 of __39)
    __2.setProperty(__38, __12, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this.native[__12];
      }),
      set: __2.createNativeFunction(function(__15) {
        __3.settings.logCalls && console.log(__6.domain, 'context set ' + __12, this, __15), this.native[__12] = __15;
      })
    });
  for (let __12 of [
      'fillStyle',
      'strokeStyle'
    ])
    __2.setProperty(__38, __12, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __15 = this.native[__12];
        return __15;
      }),
      set: __2.createNativeFunction(function(__15) {
        __15?.native ? this.native[__12] = __15.native : this.native[__12] = __15;
      })
    });
  __2.setProperty(__38, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let __40 = {
    clearRect: function(__12, __15, __16, __24) {
      this.native, this.native.clearRect(__12, __15, __16, __24);
    },
    fillRect: function(__12, __15, __16, __24) {
      this.native, this.native.fillRect(__12, __15, __16, __24);
    },
    strokeRect: function(__12, __15, __16, __24) {
      this.native, this.native.strokeRect(__12, __15, __16, __24);
    },
    fillText: function(__12, __15, __16, __24) {
      this.native, __24 !== void 0 ? this.native.fillText(String(__12).slice(0, 1000), __15, __16, __24) : this.native.fillText(String(__12).slice(0, 1000), __15, __16);
    },
    strokeText: function(__12, __15, __16, __24) {
      this.native, __24 !== void 0 ? this.native.strokeText(String(__12).slice(0, 1000), __15, __16, __24) : this.native.strokeText(String(__12).slice(0, 1000), __15, __16);
    },
    measureText: function(__12) {
      return __31(this.native.measureText(String(__12).slice(0, 1000)));
    },
    getLineDash: function() {
      return __2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(__12) {
      let __15 = __2.pseudoToNative(__12);
      this.native.setLineDash(__15);
    },
    createLinearGradient: function(__12, __15, __16, __24) {
      return __19(this.native.createLinearGradient(__12, __15, __16, __24));
    },
    createRadialGradient: function(__12, __15, __16, __24, __25, __26) {
      return __19(this.native.createRadialGradient(__12, __15, __16, __24, __25, __26));
    },
    createConicGradient: function(__12, __15, __16) {
      return __19(this.native.createConicGradient(__12, __15, __16));
    },
    createPattern: function(__12, __15) {
      let __16 = __12?.native || __12;
      if (!__16)
        return null;
      let __24 = this.native.createPattern(__16, __15);
      return __24 ? __21(__24) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(__12, __15) {
      this.native.moveTo(__12, __15);
    },
    lineTo: function(__12, __15) {
      this.native.lineTo(__12, __15);
    },
    bezierCurveTo: function(__12, __15, __16, __24, __25, __26) {
      this.native.bezierCurveTo(__12, __15, __16, __24, __25, __26);
    },
    quadraticCurveTo: function(__12, __15, __16, __24) {
      this.native.quadraticCurveTo(__12, __15, __16, __24);
    },
    arc: function(__12, __15, __16, __24, __25, __26) {
      this.native.arc(__12, __15, __16, __24, __25, __26);
    },
    arcTo: function(__12, __15, __16, __24, __25) {
      this.native.arcTo(__12, __15, __16, __24, __25);
    },
    ellipse: function(__12, __15, __16, __24, __25, __26, __35, __36) {
      this.native.ellipse(__12, __15, __16, __24, __25, __26, __35, __36);
    },
    rect: function(__12, __15, __16, __24) {
      this.native.rect(__12, __15, __16, __24);
    },
    roundRect: function(__12, __15, __16, __24, __25) {
      let __26 = __2.pseudoToNative(__25);
      this.native.roundRect(__12, __15, __16, __24, __26);
    },
    fill: function(__12, __15) {
      this.native, __12?.native ? this.native.fill(__12.native, __15) : this.native.fill(__12);
    },
    stroke: function(__12) {
      this.native, __12?.native ? this.native.stroke(__12.native) : this.native.stroke();
    },
    clip: function(__12, __15) {
      __12?.native ? this.native.clip(__12.native, __15) : this.native.clip(__12);
    },
    isPointInPath: function(__12, __15, __16, __24) {
      return __12?.native ? this.native.isPointInPath(__12.native, __15, __16, __24) : this.native.isPointInPath(__12, __15, __16);
    },
    isPointInStroke: function(__12, __15, __16) {
      return __12?.native ? this.native.isPointInStroke(__12.native, __15, __16) : this.native.isPointInStroke(__12, __15);
    },
    getTransform: function() {
      let __12 = this.native.getTransform();
      return __2.nativeToPseudo({
        a: __12.a,
        __13: __12.__13,
        __23: __12.__23,
        __3: __12.__3,
        e: __12.e,
        __16: __12.__16
      });
    },
    rotate: function(__12) {
      this.native.rotate(__12);
    },
    scale: function(__12, __15) {
      this.native.scale(__12, __15);
    },
    translate: function(__12, __15) {
      this.native.translate(__12, __15);
    },
    transform: function(__12, __15, __16, __24, __25, __26) {
      this.native.transform(__12, __15, __16, __24, __25, __26);
    },
    setTransform: function(__12, __15, __16, __24, __25, __26) {
      if (typeof __12 == 'object' && __12 !== null) {
        let __35 = __2.pseudoToNative(__12);
        this.native.setTransform(__35);
      } else
        this.native.setTransform(__12, __15, __16, __24, __25, __26);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(__12, __15, __16, __24, __25, __26, __35, __36, __41) {
      this.native;
      let __42 = __12?.native || __12;
      __42 && (__36 !== void 0 ? this.native.drawImage(__42, __15, __16, __24, __25, __26, __35, __36, __41) : __24 !== void 0 ? this.native.drawImage(__42, __15, __16, __24, __25) : this.native.drawImage(__42, __15, __16));
    },
    createImageData: function(__12, __15) {
      if (__12?.native)
        return __27(this.native.createImageData(__12.native));
      if (__12 > __8 || __15 > __8)
        throw new Error(`ImageData size exceeds maximum (${ __8 }x${ __8 })`);
      return __27(this.native.createImageData(__12, __15));
    },
    getImageData: function(__12, __15, __16, __24) {
      if (__16 > __8 || __24 > __8)
        throw new Error(`ImageData size exceeds maximum (${ __8 }x${ __8 })`);
      return __27(this.native.getImageData(__12, __15, __16, __24));
    },
    putImageData: function(__12, __15, __16, __24, __25, __26, __35) {
      this.native, __12?.native && (__24 !== void 0 ? this.native.putImageData(__12.native, __15, __16, __24, __25, __26, __35) : this.native.putImageData(__12.native, __15, __16));
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
  for (let [__12, __15] of Object.entries(__40))
    __2.setProperty(__38, __12, __2.createNativeFunction(__15));
  return {
    extendElement: function(__12, __15) {
      __2.setProperty(__12, 'getContext', __2.createNativeFunction(function(__16, __24) {
        __3.settings.logCalls && console.log(__6.domain, 'getContext', this, __16, __24);
        let __25 = this.native;
        if (__25.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (__25.width > __8 && (__25.width = __8), __25.height > __8 && (__25.height = __8), __16 === '2d') {
          let __26 = __25.getContext('2d', __24 ? __2.pseudoToNative(__24) : void 0);
          return __14(__26, this);
        }
        throw new Error(`Context type "${ __16 }" is not supported`);
      })), __2.setProperty(__12, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: __2.createNativeFunction(function(__16) {
          __3.settings.logCalls && console.log(__6.domain, 'set width', this, __16), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(__16, __8));
        })
      }), __2.setProperty(__12, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: __2.createNativeFunction(function(__16) {
          __3.settings.logCalls && console.log(__6.domain, 'set height', this, __16), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(__16, __8));
        })
      }), __2.setProperty(__12, 'toDataURL', __2.createNativeFunction(function(__16, __24) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return __3.settings.logCalls && console.log(__6.domain, 'toDataURL', this, __16, __24), this.native.toDataURL(__16, __24);
      }));
    },
    resetDrawCounts: __13,
    contextToPseudo: __14
  };
}

function __43(__2, __5, __6) {
  let __10 = 0,
    __11 = window.location.origin;

  function __13(__22) {
    if (typeof __22 != 'string' || __22.startsWith('/') || __22.startsWith('./') || __22.startsWith('../') || !__22.startsWith('http://') && !__22.startsWith('https://'))
      return !1;
    try {
      let __23 = new URL(__22);
      if (__23.origin === __11 || __23.hostname === 'kicya.net' || __23.hostname.endsWith('.kicya.net') || __23.hostname === 'nekoweb.org')
        return !1;
      let __27 = __23.hostname.toLowerCase();
      return !(__27 === 'localhost' || __27 === '127.0.0.1' || __27 === '0.0.0.0' || __27.startsWith('192.168.') || __27.startsWith('10.') || __27.startsWith('172.16.') || __27.startsWith('172.17.') || __27.startsWith('172.18.') || __27.startsWith('172.19.') || __27.startsWith('172.2') || __27.startsWith('172.30.') || __27.startsWith('172.31.') || __27 === '[::1]');
    } catch {
      return !1;
    }
  }
  let __14 = 0,
    __17 = __2.nativeToPseudo({});
  __2.setProperty(__5, '__xhrCallbacks', __17);

  function __18(__22, ...__23) {
    if (!__22 || typeof __22 != 'object')
      return;
    let __27 = __14++;
    __2.setProperty(__17, 'fn' + __27, __22);
    let __28 = __23.map((__30, __31) => {
        let __32 = 'arg' + __27 + '_' + __31;
        return __2.setProperty(__17, __32, __30), __32;
      }),
      __29 = __28.map(__30 => `__xhrCallbacks.${ __30 }`).join(',');
    __2.appendCode(`__xhrCallbacks.fn${ __27 }(${ __29 }); delete __xhrCallbacks.fn${ __27 }; ${ __28.map(__30 => `delete __xhrCallbacks.${ __30 }`).join('; ') };`);
  }
  let __19 = __2.createNativeFunction(function() {
    __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let __23 = this;
    this.native.onreadystatechange = function() {
      __2.setProperty(__23, 'readyState', __23.native.readyState), __23.native.readyState === 4 && (__2.setProperty(__23, 'status', __23.native.status), __2.setProperty(__23, 'statusText', __23.native.statusText), __2.setProperty(__23, 'responseText', __23.native.responseText?.slice(0, 5242880) || ''), __2.setProperty(__23, 'responseURL', __23.native.responseURL), __10 = Math.max(0, __10 - 1)), __23._eventHandlers.onreadystatechange && __18(__23._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      __23._eventHandlers.onload && __18(__23._eventHandlers.onload);
    }, this.native.onerror = function() {
      __10 = Math.max(0, __10 - 1), __23._eventHandlers.onerror && __18(__23._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      __10 = Math.max(0, __10 - 1), __23._eventHandlers.ontimeout && __18(__23._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      __10 = Math.max(0, __10 - 1), __23._eventHandlers.onabort && __18(__23._eventHandlers.onabort);
    }, this.native.onprogress = function(__27) {
      if (__23._eventHandlers.onprogress) {
        let __28 = __2.nativeToPseudo({
          loaded: __27.loaded,
          total: __27.total,
          lengthComputable: __27.lengthComputable
        });
        __18(__23._eventHandlers.onprogress, __28);
      }
    }, this.native.onloadstart = function() {
      __23._eventHandlers.onloadstart && __18(__23._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      __23._eventHandlers.onloadend && __18(__23._eventHandlers.onloadend);
    }, __2.setProperty(this, 'readyState', 0), __2.setProperty(this, 'status', 0), __2.setProperty(this, 'statusText', ''), __2.setProperty(this, 'responseText', ''), __2.setProperty(this, 'responseURL', '');
  }, !0);
  __2.setProperty(__5, 'XMLHttpRequest', __19);
  let __20 = __2.getProperty(__19, 'prototype');
  __2.setProperty(__19, 'UNSENT', 0), __2.setProperty(__19, 'OPENED', 1), __2.setProperty(__19, 'HEADERS_RECEIVED', 2), __2.setProperty(__19, 'LOADING', 3), __2.setProperty(__19, 'DONE', 4), __2.setProperty(__20, 'UNSENT', 0), __2.setProperty(__20, 'OPENED', 1), __2.setProperty(__20, 'HEADERS_RECEIVED', 2), __2.setProperty(__20, 'LOADING', 3), __2.setProperty(__20, 'DONE', 4);
  let __21 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let __22 of __21)
    __2.setProperty(__20, __22, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return this._eventHandlers[__22] || null;
      }),
      set: __2.createNativeFunction(function(__23) {
        __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest set ' + __22, this, __23), this._eventHandlers[__22] = __23;
      })
    });
  __2.setProperty(__20, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: __2.createNativeFunction(function(__22) {
      this.native.timeout = Math.min(__22, 30000);
    })
  }), __2.setProperty(__20, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: __2.createNativeFunction(function(__22) {
      this.native.withCredentials = !1;
    })
  }), __2.setProperty(__20, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: __2.createNativeFunction(function(__22) {
      (__22 === '' || __22 === 'text' || __22 === 'json') && (this.native.responseType = __22);
    })
  }), __2.setProperty(__20, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __22 = this.native.response;
      return this.native.responseType === 'json' ? __2.nativeToPseudo(__22) : typeof __22 == 'string' ? __22.slice(0, 5242880) : __22;
    })
  }), __2.setProperty(__20, 'open', __2.createNativeFunction(function(__22, __23, __27, __28, __29) {
    if (!__13(__23))
      throw new Error(`XHR request blocked: URL "${ __23 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let __30 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (__22 = String(__22).toUpperCase(), !__30.includes(__22))
      throw new Error(`HTTP method "${ __22 }" is not allowed`);
    __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest open', this, __22, __23, __27, __28, __29), this._method = __22, this._url = __23, this._async = __27 !== !1, this.native.open(__22, __23, this._async), this.native.timeout = 30000, __2.setProperty(this, 'readyState', this.native.readyState);
  })), __2.setProperty(__20, 'setRequestHeader', __2.createNativeFunction(function(__22, __23) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(__22.toLowerCase()))
      throw new Error(`Setting header "${ __22 }" is not allowed`);
    __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest setRequestHeader', this, __22, __23), this._headers[__22] = __23, this.native.setRequestHeader(__22, __23);
  })), __2.setProperty(__20, 'send', __2.createNativeFunction(function(__22) {
    if (__10 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest send', this, __22), __10++;
    let __23 = null;
    __22 != null && (typeof __22 == 'string' ? __23 = __22.slice(0, 5242880) : typeof __22 == 'object' && (__23 = JSON.stringify(__2.pseudoToNative(__22)))), this.native.send(__23);
  })), __2.setProperty(__20, 'abort', __2.createNativeFunction(function() {
    __3.settings.logCalls && console.log(__6.domain, 'XMLHttpRequest abort', this), this.native.abort(), __10 = Math.max(0, __10 - 1);
  })), __2.setProperty(__20, 'getResponseHeader', __2.createNativeFunction(function(__22) {
    return this.native.getResponseHeader(__22);
  })), __2.setProperty(__20, 'getAllResponseHeaders', __2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), __2.setProperty(__20, 'overrideMimeType', __2.createNativeFunction(function(__22) {
    this.native.overrideMimeType(__22);
  }));
}
var __44 = 'webtiles_storage',
  __45 = 1,
  __46 = 'localStorage',
  __47 = 1024 * 1024,
  __48 = 100,
  __49 = null,
  __50 = null;

function __51() {
  return __50 || (__50 = new Promise((__2, __5) => {
    let __6 = indexedDB.open(__44, __45);
    __6.onerror = () => __5(__6.error), __6.onsuccess = () => {
      __49 = __6.result, __2(__49);
    }, __6.onupgradeneeded = __7 => {
      let __8 = __7.target.result;
      __8.objectStoreNames.contains(__46) || __8.createObjectStore(__46, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), __50);
}
async function __52(__2, __5) {
  return await __51(), new Promise((__6, __7) => {
    let __10 = __49.transaction(__46, 'readonly').objectStore(__46).get([
      __2,
      __5
    ]);
    __10.onsuccess = () => __6(__10.result?.value ?? null), __10.onerror = () => __7(__10.error);
  });
}
async function __53(__2, __5, __6) {
  return await __51(), new Promise((__7, __8) => {
    let __11 = __49.transaction(__46, 'readwrite').objectStore(__46).put({
      site: __2,
      key: __5,
      value: __6
    });
    __11.onsuccess = () => __7(), __11.onerror = () => __8(__11.error);
  });
}
async function __54(__2, __5) {
  return await __51(), new Promise((__6, __7) => {
    let __10 = __49.transaction(__46, 'readwrite').objectStore(__46).delete([
      __2,
      __5
    ]);
    __10.onsuccess = () => __6(), __10.onerror = () => __7(__10.error);
  });
}
async function __55(__2) {
  return await __51(), new Promise((__5, __6) => {
    let __10 = __49.transaction(__46, 'readonly').objectStore(__46).index('site').getAll(__2);
    __10.onsuccess = () => {
      let __11 = __10.result.map(__13 => __13.key);
      __5(__11);
    }, __10.onerror = () => __6(__10.error);
  });
}
async function __56(__2) {
  return await __51(), new Promise((__5, __6) => {
    let __10 = __49.transaction(__46, 'readonly').objectStore(__46).index('site').getAll(__2);
    __10.onsuccess = () => {
      let __11 = 0;
      for (let __13 of __10.result)
        __11 += (__13.key.length + __13.value.length) * 2;
      __5({
        size: __11,
        count: __10.result.length
      });
    }, __10.onerror = () => __6(__10.error);
  });
}
async function __57(__2) {
  return await __51(), new Promise((__5, __6) => {
    let __10 = __49.transaction(__46, 'readwrite').objectStore(__46).index('site').openCursor(__2);
    __10.onsuccess = __11 => {
      let __13 = __11.target.result;
      __13 ? (__13.delete(), __13.continue()) : __5();
    }, __10.onerror = () => __6(__10.error);
  });
}

function __58(__2, __5, __6) {
  let __7 = __2.nativeToPseudo({});
  __2.setProperty(__7, 'getItem', __2.createAsyncFunction(function(__8, __9) {
    if (__3.settings.logCalls && console.log(__6, 'localStorage.getItem', this, __8), __8 == null) {
      __9(null);
      return;
    }
    __8 = String(__8), __52(__6, __8).then(__10 => __9(__10)).catch(__10 => {
      console.error('localStorage.getItem error:', __10), __9(null);
    });
  })), __2.setProperty(__7, 'setItem', __2.createAsyncFunction(function(__8, __9, __10) {
    if (__3.settings.logCalls && console.log(__6, 'localStorage.setItem', this, __8, __9), __8 == null) {
      __10();
      return;
    }
    __8 = String(__8), __9 = String(__9), __56(__6).then(({
      size: __11,
      count: __13
    }) => {
      __52(__6, __8).then(__14 => {
        if (__14 === null && __13 >= __48)
          throw new Error(`localStorage item limit exceeded (max ${ __48 } items)`);
        let __18 = __14 ? (__8.length + __14.length) * 2 : 0,
          __19 = (__8.length + __9.length) * 2;
        if (__11 - __18 + __19 > __47)
          throw new Error(`localStorage size limit exceeded (max ${ __47 / 1024 }KB)`);
        return __53(__6, __8, __9);
      }).then(() => __10()).catch(__14 => {
        throw console.error('localStorage.setItem error:', __14), __14;
      });
    }).catch(__11 => {
      console.error('localStorage.setItem error:', __11), __10();
    });
  })), __2.setProperty(__7, 'removeItem', __2.createAsyncFunction(function(__8, __9) {
    if (__3.settings.logCalls && console.log(__6, 'localStorage.removeItem', this, __8), __8 == null) {
      __9();
      return;
    }
    __8 = String(__8), __54(__6, __8).then(() => __9()).catch(__10 => {
      console.error('localStorage.removeItem error:', __10), __9();
    });
  })), __2.setProperty(__7, 'clear', __2.createAsyncFunction(function(__8) {
    __3.settings.logCalls && console.log(__6, 'localStorage.clear', this), __57(__6).then(() => __8()).catch(__9 => {
      console.error('localStorage.clear error:', __9), __8();
    });
  })), __2.setProperty(__7, 'key', __2.createAsyncFunction(function(__8, __9) {
    __8 = parseInt(__8) || 0, __55(__6).then(__10 => {
      __9(__8 >= 0 && __8 < __10.length ? __10[__8] : null);
    }).catch(__10 => {
      console.error('localStorage.key error:', __10), __9(null);
    });
  })), __2.setProperty(__7, 'getLength', __2.createAsyncFunction(function(__8) {
    __56(__6).then(({
      count: __9
    }) => __8(__9)).catch(__9 => {
      console.error('localStorage.getLength error:', __9), __8(0);
    });
  })), __2.setProperty(__5, 'localStorage', __7), __2.setProperty(__5, 'sessionStorage', __7);
}
__51().catch(__2 => {
  console.error('Failed to initialize storage DB:', __2);
});

function __59(__2, __5, __6, __7) {
  let __8 = __2.createNativeFunction(function() {}, !0);
  __2.setProperty(__5, 'DOMParser', __8);
  let __9 = __2.getProperty(__8, 'prototype');
  __2.setProperty(__9, 'parseFromString', __2.createNativeFunction(function(__10, __11) {
    if (__3.settings.logCalls && console.log(__7.domain, 'DOMParser parseFromString', this, __10, __11), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(__11))
      throw new Error(`DOMParser: Unsupported MIME type "${ __11 }"`);
    if (typeof __10 != 'string' && (__10 = String(__10)), __10.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let __17 = new DOMParser().parseFromString(__10, __11),
      __18 = __2.createObjectProto(__2.OBJECT_PROTO);

    function __19(__20) {
      if (__20 == null)
        return null;
      let __21 = __2.createObjectProto(__2.OBJECT_PROTO);
      return __21.native = __20, __21.fromDOMParser = !0, __2.setProperty(__21, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), __2.setProperty(__21, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), __2.setProperty(__21, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: __2.createNativeFunction(function(__22) {
          __3.settings.logCalls && console.log(__7.domain, 'DOMParser set nodeValue', this, __22), this.native.nodeValue = __22;
        })
      }), __2.setProperty(__21, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: __2.createNativeFunction(function(__22) {
          __3.settings.logCalls && console.log(__7.domain, 'DOMParser set textContent', this, __22), this.native.textContent = String(__22).slice(0, 50000);
        })
      }), __2.setProperty(__21, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), __2.setProperty(__21, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: __2.createNativeFunction(function(__22) {
          __3.settings.logCalls && console.log(__7.domain, 'DOMParser set id', this, __22), this.native.id = String(__22).slice(0, 100);
        })
      }), __2.setProperty(__21, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: __2.createNativeFunction(function(__22) {
          __3.settings.logCalls && console.log(__7.domain, 'DOMParser set className', this, __22), this.native.className = String(__22).slice(0, 1000);
        })
      }), __2.setProperty(__21, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: __2.createNativeFunction(function(__22) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), __2.setProperty(__21, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), __2.setProperty(__21, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __22 = Array.from(this.native.children),
            __23 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __27 = 0; __27 < __22.length; __27++)
            __2.setProperty(__23, __27, __19(__22[__27]));
          return __2.setProperty(__23, 'length', __22.length), __23;
        })
      }), __2.setProperty(__21, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          let __22 = Array.from(this.native.childNodes),
            __23 = __2.createObjectProto(__2.ARRAY_PROTO);
          for (let __27 = 0; __27 < __22.length; __27++)
            __2.setProperty(__23, __27, __19(__22[__27]));
          return __2.setProperty(__23, 'length', __22.length), __23;
        })
      }), __2.setProperty(__21, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __19(this.native.firstChild);
        })
      }), __2.setProperty(__21, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __19(this.native.lastChild);
        })
      }), __2.setProperty(__21, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __19(this.native.firstElementChild);
        })
      }), __2.setProperty(__21, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __19(this.native.lastElementChild);
        })
      }), __2.setProperty(__21, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__6) ? null : (__3.settings.logCalls && console.log(__7.domain, 'DOMParser get parentNode', this), __19(this.native.parentNode));
        })
      }), __2.setProperty(__21, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__6) ? null : (__3.settings.logCalls && console.log(__7.domain, 'DOMParser get parentElement', this), __19(this.native.parentElement));
        })
      }), __2.setProperty(__21, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__6) ? null : (__3.settings.logCalls && console.log(__7.domain, 'DOMParser get nextSibling', this), __19(this.native.nextSibling));
        })
      }), __2.setProperty(__21, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(__6) ? null : (__3.settings.logCalls && console.log(__7.domain, 'DOMParser get previousSibling', this), __19(this.native.previousSibling));
        })
      }), __2.setProperty(__21, 'getAttributeNames', __2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __22 = Array.from(this.native.getAttributeNames()),
          __23 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __27 = 0; __27 < __22.length; __27++)
          __2.setProperty(__23, __27, __22[__27]);
        return __2.setProperty(__23, 'length', __22.length), __23;
      })), __2.setProperty(__21, 'getAttribute', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(__22);
      })), __2.setProperty(__21, 'setAttribute', __2.createNativeFunction(function(__22, __23) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (__22 = String(__22).toLowerCase(), __22.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(__22, String(__23)), __3.settings.logCalls && console.log(__7.domain, 'DOMParser set attribute', this, __22, __23);
      })), __2.setProperty(__21, 'hasAttribute', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(__22);
      })), __2.setProperty(__21, 'removeAttribute', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(__6))
          throw new Error('No access.');
        this.native.removeAttribute(__22), __3.settings.logCalls && console.log(__7.domain, 'DOMParser remove attribute', this, __22);
      })), __2.setProperty(__21, 'querySelector', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __19(this.native.querySelector(__22));
      })), __2.setProperty(__21, 'querySelectorAll', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __23 = Array.from(this.native.querySelectorAll(__22)),
          __27 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __28 = 0; __28 < __23.length; __28++)
          __2.setProperty(__27, __28, __19(__23[__28]));
        return __2.setProperty(__27, 'length', __23.length), __27;
      })), __2.setProperty(__21, 'getElementsByTagName', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __23 = Array.from(this.native.getElementsByTagName(__22)),
          __27 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __28 = 0; __28 < __23.length; __28++)
          __2.setProperty(__27, __28, __19(__23[__28]));
        return __2.setProperty(__27, 'length', __23.length), __27;
      })), __2.setProperty(__21, 'getElementsByClassName', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let __23 = Array.from(this.native.getElementsByClassName(__22)),
          __27 = __2.createObjectProto(__2.ARRAY_PROTO);
        for (let __28 = 0; __28 < __23.length; __28++)
          __2.setProperty(__27, __28, __19(__23[__28]));
        return __2.setProperty(__27, 'length', __23.length), __27;
      })), __2.setProperty(__21, 'getElementById', __2.createNativeFunction(function(__22) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return __19(this.native.getElementById ? this.native.getElementById(__22) : null);
      })), __21;
    }
    return __2.setProperty(__18, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __19(__17.documentElement);
      })
    }), __2.setProperty(__18, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __3.settings.logCalls && console.log(__7.domain, 'DOMParser get head', this), __19(__17.head);
      })
    }), __2.setProperty(__18, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __3.settings.logCalls && console.log(__7.domain, 'DOMParser get body', this), __19(__17.body);
      })
    }), __2.setProperty(__18, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __17.title;
      })
    }), __2.setProperty(__18, 'querySelector', __2.createNativeFunction(function(__20) {
      return __19(__17.querySelector(__20));
    })), __2.setProperty(__18, 'querySelectorAll', __2.createNativeFunction(function(__20) {
      let __21 = Array.from(__17.querySelectorAll(__20)),
        __22 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __23 = 0; __23 < __21.length; __23++)
        __2.setProperty(__22, __23, __19(__21[__23]));
      return __2.setProperty(__22, 'length', __21.length), __22;
    })), __2.setProperty(__18, 'getElementById', __2.createNativeFunction(function(__20) {
      return __19(__17.getElementById(__20));
    })), __2.setProperty(__18, 'getElementsByTagName', __2.createNativeFunction(function(__20) {
      let __21 = Array.from(__17.getElementsByTagName(__20)),
        __22 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __23 = 0; __23 < __21.length; __23++)
        __2.setProperty(__22, __23, __19(__21[__23]));
      return __2.setProperty(__22, 'length', __21.length), __22;
    })), __2.setProperty(__18, 'getElementsByClassName', __2.createNativeFunction(function(__20) {
      let __21 = Array.from(__17.getElementsByClassName(__20)),
        __22 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __23 = 0; __23 < __21.length; __23++)
        __2.setProperty(__22, __23, __19(__21[__23]));
      return __2.setProperty(__22, 'length', __21.length), __22;
    })), __18;
  }));
}

function __60(__2, __5, __6, __7) {
  let __8 = new WeakMap(),
    __9 = 1000,
    __10 = 5,
    __11 = new WeakMap(),
    __13 = 0,
    __14 = __2.nativeToPseudo({});
  __2.setProperty(__5, '__eventCallbacks', __14);

  function __17(__42, __61) {
    let __62 = __13++;
    __2.setProperty(__14, 'fn' + __62, __42), __2.setProperty(__14, 'ev' + __62, __61), __2.appendCode(`__eventCallbacks.fn${ __62 }(__eventCallbacks.ev${ __62 }); delete __eventCallbacks.fn${ __62 }; delete __eventCallbacks.ev${ __62 };`);
  }

  function __18() {
    return __6.getElementsByTagName('*').length;
  }

  function __19(__42 = 1) {
    if (__18() + __42 > __9)
      throw new Error(`DOM element limit exceeded (max ${ __9 })`);
  }

  function __20(__42) {
    return __42 instanceof Element ? 1 + __42.getElementsByTagName('*').length : 0;
  }

  function __21(__42, __61 = !1) {
    if (__42 == null)
      return null;
    if (__8.has(__42))
      return __8.get(__42);
    let __62 = __42 instanceof Element ? __33 : __28,
      __63 = __2.createObject(__62);
    return __63.native = __42, __63.fromDOMParser || (__63.fromDOMParser = __61), __8.set(__42, __63), __63;
  }

  function __22(__42) {
    return __42 && __6.contains(__42);
  }

  function __23(__42) {
    return __22(__42) ? __42 : null;
  }

  function __27(__42) {
    let __61 = __2.createObjectProto(__2.ARRAY_PROTO);
    for (let __62 = 0; __62 < __42.length; __62++)
      __2.setProperty(__61, __62, __21(__42[__62]));
    return __2.setProperty(__61, 'length', __42.length), __61;
  }
  let __28 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'Node', __28);
  let __29 = __2.getProperty(__28, 'prototype'),
    __30 = {
      firstChild: function() {
        return __21(__23(this.native.firstChild));
      },
      lastChild: function() {
        return __21(__23(this.native.lastChild));
      },
      parentNode: function() {
        return __21(__23(this.native.parentNode));
      },
      parentElement: function() {
        return __21(__23(this.native.parentElement));
      },
      nextSibling: function() {
        return __21(__23(this.native.nextSibling));
      },
      previousSibling: function() {
        return __21(__23(this.native.previousSibling));
      },
      childNodes: function() {
        let __42 = Array.from(this.native.childNodes).filter(__22);
        return __27(__42);
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
    __31 = {
      textContent: function(__42) {
        __3.settings.logCalls && console.log(__7.domain, 'set textContent', this, __42), this.native.textContent = __42;
      },
      nodeValue: function(__42) {
        __3.settings.logCalls && console.log(__7.domain, 'set nodeValue', this, __42), this.native.nodeValue = __42;
      }
    };
  for (let [__42, __61] of Object.entries(__30)) {
    let __62 = {
      get: __2.createNativeFunction(__61)
    };
    __31[__42] && (__62.set = __2.createNativeFunction(__31[__42])), __2.setProperty(__29, __42, Interpreter.VALUE_IN_DESCRIPTOR, __62);
  }
  let __32 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(__42) {
      if (!__42?.native)
        return null;
      if (__42.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return __19(__20(__42.native)), this.native.appendChild(__42.native), __3.settings.logCalls && console.log(__7.domain, 'appendChild', this, __42), __42;
    },
    append: function(__42) {
      for (let __61 of __42)
        if (__61?.native) {
          if (__61.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          __19(__20(__61.native)), this.native.appendChild(__61.native);
        }
      return __3.settings.logCalls && console.log(__7.domain, 'append', this, __42), __42;
    },
    removeChild: function(__42) {
      return !__42?.native || !__22(__42.native) ? null : (__3.settings.logCalls && console.log(__7.domain, 'removeChild', this, __42), __21(this.native.removeChild(__42.native)));
    },
    insertBefore: function(__42, __61) {
      if (!__42?.native)
        return null;
      if (__42.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__6))
        throw new Error('No access.');
      __19(__20(__42.native));
      let __62 = __61?.native || null;
      return this.native.insertBefore(__42.native, __62), __3.settings.logCalls && console.log(__7.domain, 'insertBefore', this, __42, __62), __42;
    },
    cloneNode: function(__42) {
      return __3.settings.logCalls && console.log(__7.domain, 'cloneNode', this, __42), __21(this.native.cloneNode(__42), this.fromDOMParser);
    },
    contains: function(__42) {
      return __42?.native ? this.native.contains(__42.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(__6))
        throw new Error('No access.');
      this.native.remove(), __3.settings.logCalls && console.log(__7.domain, 'remove', this);
    },
    after: function(__42) {
      if (!__42?.native)
        return null;
      if (__42.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__6))
        throw new Error('No access.');
      return __19(__20(__42.native)), this.native.after(__42.native), __3.settings.logCalls && console.log(__7.domain, 'after', this, __42), __42;
    },
    before: function(__42) {
      if (!__42?.native)
        return null;
      if (__42.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(__6))
        throw new Error('No access.');
      return __19(__20(__42.native)), this.native.before(__42.native), __3.settings.logCalls && console.log(__7.domain, 'before', this, __42), __42;
    }
  };
  for (let [__42, __61] of Object.entries(__32))
    __2.setProperty(__29, __42, __2.createNativeFunction(__61));
  let __33 = __2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  __2.setProperty(__5, 'Element', __33);
  let __34 = __2.createObject(__28);
  __2.setProperty(__33, 'prototype', __34);

  function __37(__42) {
    if (!__42)
      return '';
    __42 = String(__42);
    let __61 = __42.toLowerCase().trim();
    if (__61.startsWith('javascript:') || __61.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (__61.startsWith('data:'))
      return __42;
    try {
      let __62 = new URL(__42, location.href);
      if (__62.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let __63 = __62.pathname + __62.search + __62.hash;
      return __63.startsWith(`/t/${ __7.domain }/`) || (__63 = `/t/${ __7.domain }/${ __63 }`.replaceAll('//', '/')), __63;
    } catch (__62) {
      if (__62.message.includes('not allowed'))
        throw __62;
      let __63 = __42;
      return !__63.startsWith(`/t/${ __7.domain }/`) && !__63.startsWith('#') && (__63 = `/t/${ __7.domain }/${ __63 }`.replaceAll('//', '/')), __63;
    }
  }
  let __38 = {
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
        let __42 = Array.from(this.native.children).filter(__22);
        return __27(__42);
      },
      firstElementChild: function() {
        return __21(__23(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return __21(__23(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return __21(__23(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return __21(__23(this.native.previousElementSibling));
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
    __39 = {
      innerText: function(__42) {
        this.native.innerText = __42.slice(0, 1000);
      },
      innerHTML: function(__42) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(__42) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = __42, __3.settings.logCalls && console.log(__7.domain, 'set id', this, __42);
      },
      className: function(__42) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = __42, __3.settings.logCalls && console.log(__7.domain, 'set className', this, __42);
      },
      src: function(__42) {
        this.native.src = __37(__42), __3.settings.logCalls && console.log(__7.domain, 'set src', this, __42);
      },
      href: function(__42) {
        this.native.href = this.native.tagName === 'A' ? __42 : __37(__42), __3.settings.logCalls && console.log(__7.domain, 'set href', this, __42);
      },
      hidden: function(__42) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!__42;
      },
      disabled: function(__42) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!__42;
      },
      checked: function(__42) {
        this.native.checked = !!__42;
      },
      selected: function(__42) {
        this.native.selected = !!__42;
      },
      readOnly: function(__42) {
        this.native.readOnly = !!__42;
      },
      required: function(__42) {
        this.native.required = !!__42;
      },
      draggable: function(__42) {
        this.native.draggable = !!__42;
      },
      title: function(__42) {
        this.native.title = String(__42).slice(0, 1000);
      },
      alt: function(__42) {
        this.native.alt = String(__42).slice(0, 1000);
      },
      name: function(__42) {
        this.native.name = String(__42).slice(0, 100);
      },
      type: function(__42) {
        this.native.type = String(__42).slice(0, 50);
      },
      value: function(__42) {
        this.native.value = String(__42).slice(0, 10000);
      },
      placeholder: function(__42) {
        this.native.placeholder = String(__42).slice(0, 500);
      },
      tabIndex: function(__42) {
        this.native.tabIndex = parseInt(__42) || 0;
      },
      scrollTop: function(__42) {
        this.native.scrollTop = __42;
      },
      scrollLeft: function(__42) {
        this.native.scrollLeft = __42;
      },
      currentTime: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(__42) || 0));
      },
      muted: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!__42);
      },
      volume: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(__42) || 0)));
      },
      loop: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!__42);
      },
      autoplay: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!__42);
      },
      controls: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!__42);
      },
      playbackRate: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(__42) || 1)));
      },
      defaultPlaybackRate: function(__42) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(__42) || 1)));
      },
      preload: function(__42) {
        if (this.native instanceof HTMLMediaElement) {
          let __61 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = __61.includes(__42) ? __42 : 'auto';
        }
      },
      poster: function(__42) {
        this.native instanceof HTMLVideoElement && (this.native.poster = __37(__42));
      }
    };
  for (let [__42, __61] of Object.entries(__38)) {
    let __62 = {
      get: __2.createNativeFunction(__61)
    };
    __39[__42] && (__62.set = __2.createNativeFunction(__39[__42])), __2.setProperty(__34, __42, Interpreter.VALUE_IN_DESCRIPTOR, __62);
  }
  let __40 = {
    getAttributeNames: function() {
      let __42 = Array.from(this.native.getAttributeNames()),
        __61 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __62 = 0; __62 < __42.length; __62++)
        __2.setProperty(__61, __62, __42[__62]);
      return __2.setProperty(__61, 'length', __42.length), __61;
    },
    getAttribute: function(__42) {
      return this.native.getAttribute(__42);
    },
    setAttribute: function(__42, __61) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__42 = String(__42).toLowerCase(), __61 = String(__61), __3.settings.logCalls && console.log(__7.domain, 'setAttribute', this, __42, __61), __42 === 'style' && __61.includes('animation-play-state') && __61.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (__42 === 'src' || __42 === 'poster' || __42 === 'data' || this.native.tagName !== 'A' && __42 === 'href') {
        this.native.setAttribute(__42, __37(__61));
        return;
      }
      if (__42 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (__42 === 'srcset')
        throw new Error('srcset is not allowed');
      if (__42 === 'action' || __42 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (__42.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (__42 === 'width' || __42 === 'height') {
        let __62 = parseFloat(__61);
        if (isNaN(__62) || __62 < 0 || __62 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(__42, __61);
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
    scrollIntoView: function(__42) {
      __42 && typeof __42 == 'object' ? this.native.scrollIntoView(__2.pseudoToNative(__42)) : this.native.scrollIntoView(__42);
    },
    scrollTo: function(__42, __61) {
      this.native.scrollTo(__42, __61);
    },
    scrollBy: function(__42, __61) {
      this.native.scrollBy(__42, __61);
    },
    removeAttribute: function(__42) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (__42 = String(__42).toLowerCase(), __42 === 'target')
        throw new Error('removing target is not allowed');
      __3.settings.logCalls && console.log(__7.domain, 'removeAttribute', this, __42), this.native.removeAttribute(__42);
    },
    hasAttribute: function(__42) {
      return this.native.hasAttribute(__42);
    },
    querySelector: function(__42) {
      let __61 = this.native.querySelector(__42);
      return __21(__23(__61));
    },
    querySelectorAll: function(__42) {
      let __61 = Array.from(this.native.querySelectorAll(__42)).filter(__22);
      return __27(__61);
    },
    getElementsByClassName: function(__42) {
      let __61 = Array.from(this.native.getElementsByClassName(__42)).filter(__22);
      return __27(__61);
    },
    getElementsByTagName: function(__42) {
      let __61 = Array.from(this.native.getElementsByTagName(__42)).filter(__22);
      return __27(__61);
    },
    closest: function(__42) {
      let __61 = this.native.closest(__42);
      for (; __61 && !__6.contains(__61);)
        __61 = null;
      return __21(__61);
    },
    matches: function(__42) {
      return this.native.matches(__42);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let __42 = this.native.classList;
      return __2.nativeToPseudo({
        add: (...__61) => __42.add(...__61),
        remove: (...__61) => __42.remove(...__61),
        toggle: (__61, __62) => __42.toggle(__61, __62),
        contains: __61 => __42.contains(__61),
        replace: (__61, __62) => __42.replace(__61, __62)
      });
    },
    getBoundingClientRect: function() {
      let __42 = this.native.getBoundingClientRect();
      return __2.nativeToPseudo({
        __30: __42.__30,
        __21: __42.__21,
        width: __42.width,
        height: __42.height,
        top: __42.top,
        right: __42.right,
        bottom: __42.bottom,
        left: __42.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return __2.createObjectProto(__2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let __42 = __2.createObjectProto(__2.OBJECT_PROTO),
        __61 = this,
        __62 = null,
        __63 = null;
      return __3.settings.logCalls && console.log(__7.domain, 'play', this), __2.setProperty(__42, 'then', __2.createNativeFunction(function(__64) {
        return __62 = __64, __42;
      })), __2.setProperty(__42, 'catch', __2.createNativeFunction(function(__64) {
        return __63 = __64, __42;
      })), __61.native.play().then(() => {
        __62 && __17(__62, __2.nativeToPseudo(void 0));
      }).catch(__64 => {
        __63 && __17(__63, __2.nativeToPseudo({
          message: __64.message,
          name: __64.name
        }));
      }), __42;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(__42) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(__42 || '')) : '';
    },
    fastSeek: function(__42) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(__42) || 0));
    },
    getAnimations: function(__42) {
      if (!this.native.getAnimations)
        return __27([]);
      let __61 = __42 ? {
          subtree: !!__2.pseudoToNative(__42)?.subtree
        } : {},
        __62 = this.native.getAnimations(__61),
        __63 = __2.createObjectProto(__2.ARRAY_PROTO);
      for (let __64 = 0; __64 < __62.length; __64++)
        __63.properties[__64] = __12(__62[__64]);
      return __2.setProperty(__63, 'length', __62.length), __63;
    }
  };
  for (let [__42, __61] of Object.entries(__40))
    __2.setProperty(__34, __42, __2.createNativeFunction(__61));

  function __12(__42) {
    let __61 = __2.createObjectProto(__2.OBJECT_PROTO);
    return __2.setProperty(__61, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.id;
      })
    }), __2.setProperty(__61, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.playState;
      })
    }), __2.setProperty(__61, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.pending;
      })
    }), __2.setProperty(__61, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.replaceState;
      })
    }), __2.setProperty(__61, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.currentTime;
      }),
      set: __2.createNativeFunction(function(__62) {
        __42.currentTime = __62;
      })
    }), __2.setProperty(__61, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.playbackRate;
      }),
      set: __2.createNativeFunction(function(__62) {
        __42.playbackRate = Math.max(-10, Math.min(10, Number(__62) || 1));
      })
    }), __2.setProperty(__61, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        return __42.startTime;
      }),
      set: __2.createNativeFunction(function(__62) {
        __42.startTime = __62;
      })
    }), __2.setProperty(__61, 'play', __2.createNativeFunction(function() {
      __42.play();
    })), __2.setProperty(__61, 'pause', __2.createNativeFunction(function() {
      __42.pause();
    })), __2.setProperty(__61, 'cancel', __2.createNativeFunction(function() {
      __42.cancel();
    })), __2.setProperty(__61, 'finish', __2.createNativeFunction(function() {
      __42.finish();
    })), __2.setProperty(__61, 'reverse', __2.createNativeFunction(function() {
      __42.reverse();
    })), __2.setProperty(__61, 'updatePlaybackRate', __2.createNativeFunction(function(__62) {
      __42.updatePlaybackRate(Math.max(-10, Math.min(10, Number(__62) || 1)));
    })), __61;
  }

  function __15(__42) {
    let __61 = __2.createObjectProto(__2.OBJECT_PROTO),
      __62 = __42 ? __42.length : 0;
    return __2.setProperty(__61, 'length', __62), __2.setProperty(__61, 'start', __2.createNativeFunction(function(__63) {
      if (!__42 || __63 < 0 || __63 >= __42.length)
        throw new Error('Index out of bounds');
      return __42.start(__63);
    })), __2.setProperty(__61, 'end', __2.createNativeFunction(function(__63) {
      if (!__42 || __63 < 0 || __63 >= __42.length)
        throw new Error('Index out of bounds');
      return __42.end(__63);
    })), __61;
  }
  __2.setProperty(__34, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __15(this.native.buffered) : __15(null);
    })
  }), __2.setProperty(__34, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __15(this.native.played) : __15(null);
    })
  }), __2.setProperty(__34, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? __15(this.native.seekable) : __15(null);
    })
  }), __2.setProperty(__34, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __42 = this.native.classList,
        __61 = __2.nativeToPseudo({});
      return __2.setProperty(__61, 'add', __2.createNativeFunction(function(...__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __42.add(...__62);
      })), __2.setProperty(__61, 'remove', __2.createNativeFunction(function(...__62) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        __42.remove(...__62);
      })), __2.setProperty(__61, 'toggle', __2.createNativeFunction(function(__62, __63) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __42.toggle(__62, __63);
      })), __2.setProperty(__61, 'contains', __2.createNativeFunction(function(__62) {
        return __42.contains(__62);
      })), __2.setProperty(__61, 'replace', __2.createNativeFunction(function(__62, __63) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return __42.replace(__62, __63);
      })), __61;
    })
  }), __2.setProperty(__34, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __42 = this.native.style,
        __61 = __2.nativeToPseudo({}),
        __62 = [
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
      for (let __63 of __62)
        __2.setProperty(__61, __63, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: __2.createNativeFunction(function() {
            return __42[__63];
          }),
          set: __2.createNativeFunction(function(__64) {
            __42[__63] = __64, __3.settings.logCalls && console.log(__7.domain, 'set style', this, __63, __64);
          })
        });
      return __2.setProperty(__61, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: __2.createNativeFunction(function() {
          return __42.cssText;
        }),
        set: __2.createNativeFunction(function(__63) {
          __42.cssText = __63, __3.settings.logCalls && console.log(__7.domain, 'set cssText', this, __63);
        })
      }), __2.setProperty(__61, 'setProperty', __2.createNativeFunction(function(__63, __64, __65) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        __42.setProperty(__63, __64, __65), __3.settings.logCalls && console.log(__7.domain, 'setProperty', this, __63, __64, __65);
      })), __2.setProperty(__61, 'getPropertyValue', __2.createNativeFunction(function(__63) {
        return __42.getPropertyValue(__63);
      })), __2.setProperty(__61, 'removeProperty', __2.createNativeFunction(function(__63) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return __3.settings.logCalls && console.log(__7.domain, 'removeProperty', this, __63), __42.removeProperty(__63);
      })), __61;
    })
  }), __2.setProperty(__34, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      let __42 = this.native.dataset,
        __61 = __2.nativeToPseudo({});
      for (let __62 in __42)
        __2.setProperty(__61, __62, __42[__62]);
      return __2.setProperty(__61, 'get', __2.createNativeFunction(function(__62) {
        return __42[__62];
      })), __2.setProperty(__61, 'set', __2.createNativeFunction(function(__62, __63) {
        __42[__62] = String(__63).slice(0, 1000), __3.settings.logCalls && console.log(__7.domain, 'set dataset', this, __62, __63);
      })), __2.setProperty(__61, 'delete', __2.createNativeFunction(function(__62) {
        delete __42[__62], __3.settings.logCalls && console.log(__7.domain, 'delete dataset', this, __62);
      })), __2.setProperty(__61, 'has', __2.createNativeFunction(function(__62) {
        return __62 in __42;
      })), __61;
    })
  }), __2.setProperty(__34, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __21(__23(this.native.offsetParent));
    })
  });
  let __16 = [
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

  function __24(__42) {
    let __61 = __2.nativeToPseudo({}),
      __62 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let __63 of __62)
      __2.setProperty(__61, __63, __42[__63]);
    if (__42 instanceof MouseEvent || __42 instanceof PointerEvent) {
      let __63 = [
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
      for (let __64 of __63)
        __2.setProperty(__61, __64, __42[__64]);
    }
    if (__42 instanceof KeyboardEvent) {
      let __63 = [
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
      for (let __64 of __63)
        __2.setProperty(__61, __64, __42[__64]);
    }
    return typeof TouchEvent == 'function' && __42 instanceof TouchEvent && (__2.setProperty(__61, 'touches', __2.nativeToPseudo({
      length: __42.touches.length
    })), __2.setProperty(__61, 'changedTouches', __2.nativeToPseudo({
      length: __42.changedTouches.length
    }))), typeof WheelEvent == 'function' && __42 instanceof WheelEvent && (__2.setProperty(__61, 'deltaX', __42.deltaX), __2.setProperty(__61, 'deltaY', __42.deltaY), __2.setProperty(__61, 'deltaZ', __42.deltaZ), __2.setProperty(__61, 'deltaMode', __42.deltaMode)), __42.target && __22(__42.target) && __2.setProperty(__61, 'target', __21(__42.target)), __42.currentTarget && __22(__42.currentTarget) && __2.setProperty(__61, 'currentTarget', __21(__42.currentTarget)), __2.setProperty(__61, 'preventDefault', __2.createNativeFunction(function() {
      __42.preventDefault();
    })), __2.setProperty(__61, 'stopPropagation', __2.createNativeFunction(function() {
      __42.stopPropagation();
    })), __2.setProperty(__61, 'stopImmediatePropagation', __2.createNativeFunction(function() {
      __42.stopImmediatePropagation();
    })), __61;
  }
  __2.setProperty(__34, 'addEventListener', __2.createNativeFunction(function(__42, __61) {
    if (!__42 || typeof __42 != 'string' || !__61 || typeof __61 != 'object')
      return;
    if (__42 = __42.toLowerCase(), !__16.includes(__42))
      throw new Error(`Event type "${ __42 }" is not allowed`);
    __3.settings.logCalls && console.log(__7.domain, 'addEventListener', this, __42, __61);
    let __62 = this.native;
    __11.has(__62) || __11.set(__62, new Map());
    let __63 = __11.get(__62);
    __63.has(__42) || __63.set(__42, []);
    let __64 = __63.get(__42);
    if (__64.length >= __10)
      throw new Error(`Maximum listeners (${ __10 }) reached for event "${ __42 }"`);
    if (__64.some(__66 => __66.pseudo === __61))
      return;
    let __65 = function(__66) {
      let __67 = __24(__66);
      __17(__61, __67);
    };
    __64.push({
      pseudo: __61,
      native: __65
    }), __62.addEventListener(__42, __65);
  })), __2.setProperty(__34, 'removeEventListener', __2.createNativeFunction(function(__42, __61) {
    if (!__42 || typeof __42 != 'string' || !__61 || typeof __61 != 'object')
      return;
    __3.settings.logCalls && console.log(__7.domain, 'removeEventListener', this, __42, __61), __42 = __42.toLowerCase();
    let __62 = this.native;
    if (!__11.has(__62))
      return;
    let __63 = __11.get(__62);
    if (!__63.has(__42))
      return;
    let __64 = __63.get(__42),
      __65 = __64.findIndex(__66 => __66.pseudo === __61);
    __65 !== -1 && (__62.removeEventListener(__42, __64[__65].native), __64.splice(__65, 1));
  }));
  let __25 = [
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
  for (let __42 of __25) {
    let __61 = 'on' + __42;
    __2.setProperty(__34, __61, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: __2.createNativeFunction(function() {
        let __62 = this.native;
        if (!__11.has(__62))
          return null;
        let __63 = __11.get(__62),
          __64 = `__${ __61 }`;
        return __63.get(__64) || null;
      }),
      set: __2.createNativeFunction(function(__62) {
        let __63 = this.native;
        __11.has(__63) || __11.set(__63, new Map());
        let __64 = __11.get(__63),
          __65 = `__${ __61 }`;
        __3.settings.logCalls && console.log(__7.domain, 'setOn' + __42, this, __62);
        let __66 = __64.get(__65 + '_native');
        if (__66 && (__63.removeEventListener(__42, __66), __64.delete(__65), __64.delete(__65 + '_native')), __62 && typeof __62 == 'object') {
          let __67 = function(__68) {
            let __69 = __24(__68);
            __17(__62, __69);
          };
          __63.addEventListener(__42, __67), __64.set(__65, __62), __64.set(__65 + '_native', __67);
        }
      })
    });
  }
  __4(__2, __5, __7).extendElement(__34, __21), __43(__2, __5, __7), __58(__2, __5, __7.domain), __59(__2, __5, __6, __7);
  let __35 = __2.nativeToPseudo({});
  __2.setProperty(__5, 'document', __35);
  let __36 = {
    getElementById: function(__42) {
      let __61 = __6.querySelector(`#${ CSS.escape(__42) }`);
      return __21(__61);
    },
    getElementsByClassName: function(__42) {
      let __61 = Array.from(__6.getElementsByClassName(__42));
      return __27(__61);
    },
    getElementsByTagName: function(__42) {
      let __61 = Array.from(__6.getElementsByTagName(__42));
      return __27(__61);
    },
    querySelector: function(__42) {
      return __21(__6.querySelector(__42));
    },
    querySelectorAll: function(__42) {
      let __61 = Array.from(__6.querySelectorAll(__42));
      return __27(__61);
    },
    createElement: function(__42) {
      if (typeof __42 != 'string')
        throw new Error('Invalid tag');
      if (__42 = __42.toLowerCase().trim(), [
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
        ].includes(__42))
        throw new Error('Creating ' + __42 + ' elements is not allowed');
      return __3.settings.logCalls && console.log(__7.domain, 'createElement', this, __42), __21(document.createElement(__42));
    },
    createTextNode: function(__42) {
      return __3.settings.logCalls && console.log(__7.domain, 'createTextNode', this, __42), __21(document.createTextNode(__42));
    }
  };
  for (let [__42, __61] of Object.entries(__36))
    __2.setProperty(__35, __42, __2.createNativeFunction(__61));
  __2.setProperty(__35, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __3.settings.logCalls && console.log(__7.domain, 'get body', this), __21(__6);
    })
  }), __2.setProperty(__35, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return __3.settings.logCalls && console.log(__7.domain, 'get documentElement', this), __21(__6);
    })
  });
  let __41 = __2.nativeToPseudo({});
  __2.setProperty(__5, 'location', __41), __2.setProperty(__41, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: __2.createNativeFunction(function() {
      return `/t/${ __7.domain }${ __7.path }`;
    }),
    set: __2.createNativeFunction(function(__42) {
      if (typeof __42 == 'string') {
        __3.settings.logCalls && console.log(__7.domain, 'set href', this, __42);
        try {
          let __61 = new URL(__42, `http://${ __7.domain }`);
          if (__61.hostname && __61.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let __62 = __61.pathname + __61.search + __61.hash;
          if (__62.startsWith(`/t/${ __7.domain }/`) ? __62 = __62.substring(`/t/${ __7.domain }`.length) : __62 === `/t/${ __7.domain }` && (__62 = '/'), __62.startsWith('/') || (__62 = '/' + __62), __62.endsWith('.html') || __62 === '/' || __62 === '')
            __7.fetchContent(__62 || '/index.html'), __7.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (__61) {
          if (__61.message.includes('not allowed') || __61.message.includes('Only HTML'))
            throw __61;
          let __62 = __42;
          if (__62.startsWith('/') || (__62 = '/' + __62), __62.endsWith('.html') || __62 === '/' || __62 === '')
            __7.fetchContent(__62 || '/index.html').then(() => __7.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), __2.setProperty(__41, 'reload', __2.createNativeFunction(function() {
    __7.fetchContent(__7.path, !0).then(() => __7.setActive(!0));
  }));
}
var __70 = {
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
  __71 = class {
    constructor(__5) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = __5, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (__6, __7) => {
        let __8 = (__9, __10) => {
          for (let [__11, __13] of Object.entries(__9))
            if (typeof __13 == 'function')
              __6.setProperty(__10, __11, __6.createNativeFunction(__13.bind(this)));
            else if (typeof __13 == 'object' && __13 !== null) {
            let __14 = __6.nativeToPseudo({});
            __8(__13, __14), __6.setProperty(__10, __11, __14);
          }
        };
        __8(__70, __7), __60(__6, __7, this.tile.contentElement, this.tile), __6.setProperty(__7, 'embedded', __6.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let __5 = new Set(),
        __6 = [this.interpreter.getStateStack()],
        __7 = 0;
      for (; __6.length;) {
        let __8 = __6.pop(),
          __9 = typeof __8;
        if (__7 += 8, __9 === 'string' && !__5.has(__8))
          __5.add(__8), __7 += __8.length * 2;
        else if (__9 === 'object' && __8 !== null && !__5.has(__8)) {
          __5.add(__8);
          try {
            __6.push(...Object.keys(__8), ...Object.values(__8));
          } catch {}
        }
      }
      return __7;
    }
    start() {
      this.running || __3.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let __5 = 0; __5 < 5000; __5++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let __6 = this.roughValueMemorySize();
                if (__6 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ __6 } bytes`);
                  break;
                }
              }
            } catch (__6) {
              console.error(__6), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(__5) {
      __3.settings.disableJS || this.interpreter.appendCode(__5);
    }
  },
  __72 = __71;
var __73 = document.getElementById('plot'),
  __74 = new CSSStyleSheet(),
  __75 = () => {
    __74.replaceSync(`
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
__75();
var __76 = new CSSStyleSheet();
__76.replaceSync(`
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
var __77 = class __2 {
  constructor(__5) {
    this.__30 = __5.__30 ?? 0, this.__21 = __5.__21 ?? 0, this.domain = __5.domain, this.free = !__5.domain, this.locked = !1, this.id = `${ this.__30 },${ this.__21 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = __5.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = __5.nocontrols || !1, this.embed = __5.embed || !1, this.container = __5.container || __73, this.interpreter = null, this.render();
  }
  static toTilePosition(__5, __6) {
    return {
      __30: Math.floor(__5 / 250),
      __21: Math.floor(__6 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let __5 = document.createElement('div');
    __5.classList.add('tile'), this.free && __5.classList.add('f'), this.preview ? __5.style.cssText = 'width: 100%; height: 100%; position: relative;' : (__5.style.left = `${ this.__30 * 250 }px`, __5.style.top = `${ this.__21 * 250 }px`, this.__30 % 10 === 0 && __5.classList.add('b-left'), this.__21 % 10 === 0 && __5.classList.add('b-top')), this.element = __5;
    let __6 = document.createElement('div');
    __6.classList.add('tile-content'), this.preview && (__6.style.cssText = 'width: 100%; height: 100%;'), __6.addEventListener('click', async __8 => {
      let __9 = __8.composedPath()?.filter(__14 => __14 instanceof Element);
      if (!__9)
        return;
      let __10 = __9.findIndex(__14 => __14.isSameNode(__6));
      if (__10 === -1)
        return;
      let __13 = __9.slice(0, __10).find(__14 => __14.tagName === 'A');
      if (__13) {
        __8.preventDefault();
        try {
          let __14 = new URL(__13.href);
          if (__14.hostname !== location.hostname) {
            let __18 = document.createElement('a');
            __18.href = __13.href, __18.target = '_blank', __18.click();
            return;
          }
          let __17 = __14.pathname;
          if (__17.startsWith(`/t/${ this.domain }/`) || (__17 = `/t/${ this.domain }/${ __17 }`.replaceAll('//', '/')), __17.startsWith(`/t/${ this.domain }`) && (__17.endsWith('.html') || __17 === `/t/${ this.domain }/` || __17 === `/t/${ this.domain }`))
            await this.fetchContent(__17.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let __18 = document.createElement('a');
            __18.href = __13.href, __18.target = '_blank', __18.click();
          }
        } catch (__14) {
          console.error(__14);
        }
      }
    }), this.shadow = __6.attachShadow({
      mode: 'open'
    });
    let __7 = document.createElement('div');
    __7.className = 'tile-body', this.embed && __7.classList.add('embedded'), __7.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = __7, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.__30 }, ${ this.__21 }...`, this.shadow.appendChild(__7), __5.appendChild(__6), this.fonts = document.createElement('style'), __5.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(__5), __3.plot?.lockCache[this.__30 + ',' + this.__21] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(__5, __6 = !1) {
    __5.startsWith('/') || (__5 = '/' + __5);
    let __7 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.__30 }, ${ this.__21 }</p>
            </div>` : this.path === __5 && this.content && !__6 ? this.content : await fetch(`/t/${ this.domain }${ __5 }`).then(__10 => __10.text()).catch(__10 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [__76] : this.shadow.adoptedStyleSheets = [__74], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = __5, this.contentElement.innerHTML = __7, this.content = __7;
    let __8 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let __9 = 0;
    for (let __10 of __8) {
      if (__9 >= 3)
        break;
      let __11 = __10.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (__11)
        for (let __13 of __11) {
          if (__9 >= 3)
            break;
          this.fonts.textContent += __13, __9++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let __5 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let __6 of __5)
      this.interpreter.runCode(__6.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(__5) {
    if (this.element && (__5 && (this.interpreter || (this.interpreter = new __72(this), this.executeScripts()), this.interpreter.start()), __5 !== this.active)) {
      if (this.active = __5, __5) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && __3.ui) {
          let __7 = __3.ui.createVoteMenu(this);
          __7 && this.element.appendChild(__7);
          let __8 = __3.ui.createTileControl(this);
          if (this.element.appendChild(__8), __3.user?.admin || __3.user?.moderator) {
            let __9 = __3.ui.createAdminControl(this);
            this.element.appendChild(__9);
          }
          __3.plot?.activeTile && __3.plot.activeTile.setActive(!1), __3.plot && (__3.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let __6 = this.contentElement.querySelectorAll('audio, video');
        for (let __7 of __6)
          __7.dataset.webtilesPaused === 'true' && (__7.dataset.webtilesPaused = !1, __7.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), __3.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), __3.plot && (__3.plot.activeTile = null)), __2.clearClanBorders();
        let __6 = this.contentElement.querySelectorAll('audio, video');
        for (let __7 of __6)
          __7.paused || (__7.dataset.webtilesPaused = !0, __7.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let __6 = await (await __3.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!__6.success || !__6.clan)
          return;
        let __7 = __6.clan.members;
        if (!__7 || __7.length <= 1)
          return;
        let __8 = new Set(__7.map(__9 => `${ __9.__30 },${ __9.__21 }`));
        for (let __9 of __7) {
          let __10 = __3.plot.tiles[`${ __9.__30 },${ __9.__21 }`];
          if (!__10?.element)
            continue;
          __10.element.classList.add('clan-highlight');
          let __11 = __8.has(`${ __9.__30 },${ __9.__21 - 1 }`),
            __13 = __8.has(`${ __9.__30 },${ __9.__21 + 1 }`),
            __14 = __8.has(`${ __9.__30 - 1 },${ __9.__21 }`),
            __17 = __8.has(`${ __9.__30 + 1 },${ __9.__21 }`);
          if (!__11) {
            let __18 = document.createElement('div');
            __18.className = 'clan-border clan-border-top', __10.element.appendChild(__18);
          }
          if (!__13) {
            let __18 = document.createElement('div');
            __18.className = 'clan-border clan-border-bottom', __10.element.appendChild(__18);
          }
          if (!__14) {
            let __18 = document.createElement('div');
            __18.className = 'clan-border clan-border-left', __10.element.appendChild(__18);
          }
          if (!__17) {
            let __18 = document.createElement('div');
            __18.className = 'clan-border clan-border-right', __10.element.appendChild(__18);
          }
        }
      } catch (__5) {
        console.error('Failed to fetch clan borders:', __5);
      }
  }
  static clearClanBorders() {
    if (__3.plot?.tiles)
      for (let __5 of Object.values(__3.plot.tiles))
        __5.element && (__5.element.classList.remove('clan-highlight'), __5.element.querySelectorAll('.clan-border').forEach(__7 => __7.remove()));
  }
  setDomain(__5) {
    this.domain = __5, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(__5) {
    this.locked = __5, this.element && this.element.classList.toggle('locked', __5), this.fetchContent('/index.html', !0);
  }
};
var __78 = JSON.parse(document.getElementById('embed-data').textContent),
  __79 = document.getElementById('tile');
window.tile = new __77({
  domain: __78.domain,
  container: __79,
  nocontrols: !0,
  embed: !0,
  path: '/index.html',
  __30: __78.__30,
  __21: __78.__21
});
window.onmessage = __2 => {
  __2.data.type === 'update' && (window.tile.unrender(), __79.innerHTML = '', window.tile = new __77({
    domain: __78.domain,
    container: __79,
    nocontrols: !0,
    embed: !0,
    path: __2.data.path,
    __30: __78.__30,
    __21: __78.__21
  }));
};