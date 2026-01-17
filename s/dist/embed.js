/* a2cc455d49924ac02805b08b6ce0f02d93aad70079eba8dfd0855d847344720c */
var v0 = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === 'true',
      disableJS: localStorage.disableJS === 'true'
    }
  },
  v1 = document.getElementById('user-data');
if (v1)
  try {
    let v2 = JSON.parse(v1.textContent);
    v2 && v2.email_verified && (v0.user = v2);
  } catch (v2) {
    console.error(v2);
  }
var v3 = v0;

function v4(v2, u, l) {
  let v5 = new WeakMap(),
    v6 = 2048,
    v7 = 10000,
    v8 = new WeakMap();

  function v9(n) {}

  function v10() {
    v8.clear = new WeakMap();
  }

  function v11(n, s) {
    if (!n)
      return null;
    if (v5.has(n))
      return v5.get(n);
    let v12 = v2.createObject(U);
    return v12.native = n, v12.canvas = s, v5.set(n, v12), v12;
  }
  let v13 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'CanvasGradient', v13);
  let v14 = v2.getProperty(v13, 'prototype');
  v2.setProperty(v14, 'addColorStop', v2.createNativeFunction(function(n, s) {
    this.native.addColorStop(n, s);
  }));

  function v15(n) {
    let v16 = v2.createObject(v13);
    return v16.native = n, v16;
  }
  let v17 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'CanvasPattern', v17);

  function v18(n) {
    let v16 = v2.createObject(v17);
    return v16.native = n, v16;
  }
  let v19 = v2.createNativeFunction(function(n, v16) {
    if (n > v6 || v16 > v6)
      throw new Error(`ImageData size exceeds maximum (${ v6 }x${ v6 })`);
    v3.settings.logCalls && console.log(l.domain, 'create ImageData', this, n, v16);
    let v12 = new ImageData(n, v16);
    this.native = v12, this.width = n, this.height = v16;
  }, !0);
  v2.setProperty(u, 'ImageData', v19);
  let v20 = v2.getProperty(v19, 'prototype');
  v2.setProperty(v20, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native.width;
    })
  }), v2.setProperty(v20, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native.height;
    })
  }), v2.setProperty(v20, 'data', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      let v21 = this.native.data,
        v16 = v2.createObjectProto(v2.ARRAY_PROTO);
      v2.setProperty(v16, 'length', v21.length);
      let v12 = v2.nativeToPseudo({});
      v2.setProperty(v12, 'length', v21.length), v2.setProperty(v12, 'get', v2.createNativeFunction(function(v) {
        return v21[v];
      })), v2.setProperty(v12, 'set', v2.createNativeFunction(function(v, E) {
        v3.settings.logCalls && console.log(l.domain, 'setImageData', this, v, E), v21[v] = E;
      }));
      for (let v22 = 0; v22 < Math.min(v21.length, 1000); v22++)
        (E => {
          v2.setProperty(v12, E, Interpreter.VALUE_IN_DESCRIPTOR, {
            get: v2.createNativeFunction(function() {
              return v21[E];
            }),
            set: v2.createNativeFunction(function(A) {
              v3.settings.logCalls && console.log(l.domain, 'setImageData', this, E, A), v21[E] = A;
            })
          });
        })(v22);
      return v12;
    })
  });

  function v23(v21) {
    let v16 = v2.createObject(v19);
    return v16.native = v21, v16;
  }
  let v24 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'TextMetrics', v24);
  let v25 = v2.getProperty(v24, 'prototype'),
    v26 = [
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
  for (let v21 of v26)
    v2.setProperty(v25, v21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return this.native[v21];
      })
    });

  function v27(v21) {
    let v16 = v2.createObject(v24);
    return v16.native = v21, v16;
  }
  let v28 = v2.createNativeFunction(function(v21) {
    v21 && v21.native ? this.native = new Path2D(v21.native) : typeof v21 == 'string' ? this.native = new Path2D(v21) : this.native = new Path2D();
  }, !0);
  v2.setProperty(u, 'Path2D', v28);
  let v29 = v2.getProperty(v28, 'prototype'),
    v30 = {
      addPath: function(v21, v16) {
        v21?.native && this.native.addPath(v21.native, v16);
      },
      closePath: function() {
        this.native.closePath();
      },
      moveTo: function(v21, v16) {
        this.native.moveTo(v21, v16);
      },
      lineTo: function(v21, v16) {
        this.native.lineTo(v21, v16);
      },
      bezierCurveTo: function(v21, v16, v12, v22, E, A) {
        this.native.bezierCurveTo(v21, v16, v12, v22, E, A);
      },
      quadraticCurveTo: function(v21, v16, v12, v22) {
        this.native.quadraticCurveTo(v21, v16, v12, v22);
      },
      arc: function(v21, v16, v12, v22, E, A) {
        this.native.arc(v21, v16, v12, v22, E, A);
      },
      arcTo: function(v21, v16, v12, v22, E) {
        this.native.arcTo(v21, v16, v12, v22, E);
      },
      ellipse: function(v21, v16, v12, v22, E, A, D, k) {
        this.native.ellipse(v21, v16, v12, v22, E, A, D, k);
      },
      rect: function(v21, v16, v12, v22) {
        this.native.rect(v21, v16, v12, v22);
      },
      roundRect: function(v21, v16, v12, v22, E) {
        this.native.roundRect(v21, v16, v12, v22, E);
      }
    };
  for (let [v21, v16] of Object.entries(v30))
    v2.setProperty(v29, v21, v2.createNativeFunction(v16));
  let v31 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'CanvasRenderingContext2D', v31);
  let v32 = v2.getProperty(v31, 'prototype'),
    v33 = [
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
  for (let v21 of v33)
    v2.setProperty(v32, v21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return this.native[v21];
      }),
      set: v2.createNativeFunction(function(v16) {
        v3.settings.logCalls && console.log(l.domain, 'context set ' + v21, this, v16), this.native[v21] = v16;
      })
    });
  for (let v21 of [
      'fillStyle',
      'strokeStyle'
    ])
    v2.setProperty(v32, v21, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        let v16 = this.native[v21];
        return v16;
      }),
      set: v2.createNativeFunction(function(v16) {
        v16?.native ? this.native[v21] = v16.native : this.native[v21] = v16;
      })
    });
  v2.setProperty(v32, 'canvas', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.canvas;
    })
  });
  let v34 = {
    clearRect: function(v21, v16, v12, v22) {
      this.native, this.native.clearRect(v21, v16, v12, v22);
    },
    fillRect: function(v21, v16, v12, v22) {
      this.native, this.native.fillRect(v21, v16, v12, v22);
    },
    strokeRect: function(v21, v16, v12, v22) {
      this.native, this.native.strokeRect(v21, v16, v12, v22);
    },
    fillText: function(v21, v16, v12, v22) {
      this.native, v22 !== void 0 ? this.native.fillText(String(v21).slice(0, 1000), v16, v12, v22) : this.native.fillText(String(v21).slice(0, 1000), v16, v12);
    },
    strokeText: function(v21, v16, v12, v22) {
      this.native, v22 !== void 0 ? this.native.strokeText(String(v21).slice(0, 1000), v16, v12, v22) : this.native.strokeText(String(v21).slice(0, 1000), v16, v12);
    },
    measureText: function(v21) {
      return v27(this.native.measureText(String(v21).slice(0, 1000)));
    },
    getLineDash: function() {
      return v2.nativeToPseudo(this.native.getLineDash());
    },
    setLineDash: function(v21) {
      let v16 = v2.pseudoToNative(v21);
      this.native.setLineDash(v16);
    },
    createLinearGradient: function(v21, v16, v12, v22) {
      return v15(this.native.createLinearGradient(v21, v16, v12, v22));
    },
    createRadialGradient: function(v21, v16, v12, v22, E, A) {
      return v15(this.native.createRadialGradient(v21, v16, v12, v22, E, A));
    },
    createConicGradient: function(v21, v16, v12) {
      return v15(this.native.createConicGradient(v21, v16, v12));
    },
    createPattern: function(v21, v16) {
      let v12 = v21?.native || v21;
      if (!v12)
        return null;
      let v22 = this.native.createPattern(v12, v16);
      return v22 ? v18(v22) : null;
    },
    beginPath: function() {
      this.native.beginPath();
    },
    closePath: function() {
      this.native.closePath();
    },
    moveTo: function(v21, v16) {
      this.native.moveTo(v21, v16);
    },
    lineTo: function(v21, v16) {
      this.native.lineTo(v21, v16);
    },
    bezierCurveTo: function(v21, v16, v12, v22, E, A) {
      this.native.bezierCurveTo(v21, v16, v12, v22, E, A);
    },
    quadraticCurveTo: function(v21, v16, v12, v22) {
      this.native.quadraticCurveTo(v21, v16, v12, v22);
    },
    arc: function(v21, v16, v12, v22, E, A) {
      this.native.arc(v21, v16, v12, v22, E, A);
    },
    arcTo: function(v21, v16, v12, v22, E) {
      this.native.arcTo(v21, v16, v12, v22, E);
    },
    ellipse: function(v21, v16, v12, v22, E, A, D, k) {
      this.native.ellipse(v21, v16, v12, v22, E, A, D, k);
    },
    rect: function(v21, v16, v12, v22) {
      this.native.rect(v21, v16, v12, v22);
    },
    roundRect: function(v21, v16, v12, v22, E) {
      let v35 = v2.pseudoToNative(E);
      this.native.roundRect(v21, v16, v12, v22, v35);
    },
    fill: function(v21, v16) {
      this.native, v21?.native ? this.native.fill(v21.native, v16) : this.native.fill(v21);
    },
    stroke: function(v21) {
      this.native, v21?.native ? this.native.stroke(v21.native) : this.native.stroke();
    },
    clip: function(v21, v16) {
      v21?.native ? this.native.clip(v21.native, v16) : this.native.clip(v21);
    },
    isPointInPath: function(v21, v16, v12, v22) {
      return v21?.native ? this.native.isPointInPath(v21.native, v16, v12, v22) : this.native.isPointInPath(v21, v16, v12);
    },
    isPointInStroke: function(v21, v16, v12) {
      return v21?.native ? this.native.isPointInStroke(v21.native, v16, v12) : this.native.isPointInStroke(v21, v16);
    },
    getTransform: function() {
      let v21 = this.native.getTransform();
      return v2.nativeToPseudo({
        a: v21.a,
        v10: v21.v10,
        v20: v21.v20,
        v3: v21.v3,
        e: v21.e,
        v12: v21.v12
      });
    },
    rotate: function(v21) {
      this.native.rotate(v21);
    },
    scale: function(v21, v16) {
      this.native.scale(v21, v16);
    },
    translate: function(v21, v16) {
      this.native.translate(v21, v16);
    },
    transform: function(v21, v16, v12, v22, E, v35) {
      this.native.transform(v21, v16, v12, v22, E, v35);
    },
    setTransform: function(v21, v16, v12, v22, E, v35) {
      if (typeof v21 == 'object' && v21 !== null) {
        let v36 = v2.pseudoToNative(v21);
        this.native.setTransform(v36);
      } else
        this.native.setTransform(v21, v16, v12, v22, E, v35);
    },
    resetTransform: function() {
      this.native.resetTransform();
    },
    drawImage: function(v21, v16, v12, v22, E, v35, v36, k, Y) {
      this.native;
      let v37 = v21?.native || v21;
      v37 && (k !== void 0 ? this.native.drawImage(v37, v16, v12, v22, E, v35, v36, k, Y) : v22 !== void 0 ? this.native.drawImage(v37, v16, v12, v22, E) : this.native.drawImage(v37, v16, v12));
    },
    createImageData: function(v21, v16) {
      if (v21?.native)
        return v23(this.native.createImageData(v21.native));
      if (v21 > v6 || v16 > v6)
        throw new Error(`ImageData size exceeds maximum (${ v6 }x${ v6 })`);
      return v23(this.native.createImageData(v21, v16));
    },
    getImageData: function(v21, v16, v12, v22) {
      if (v12 > v6 || v22 > v6)
        throw new Error(`ImageData size exceeds maximum (${ v6 }x${ v6 })`);
      return v23(this.native.getImageData(v21, v16, v12, v22));
    },
    putImageData: function(v21, v16, v12, v22, E, v35, v36) {
      this.native, v21?.native && (v22 !== void 0 ? this.native.putImageData(v21.native, v16, v12, v22, E, v35, v36) : this.native.putImageData(v21.native, v16, v12));
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
  for (let [v21, v16] of Object.entries(v34))
    v2.setProperty(v32, v21, v2.createNativeFunction(v16));
  return {
    extendElement: function(v21, v16) {
      v2.setProperty(v21, 'getContext', v2.createNativeFunction(function(v12, v22) {
        v3.settings.logCalls && console.log(l.domain, 'getContext', this, v12, v22);
        let v38 = this.native;
        if (v38.tagName !== 'CANVAS')
          throw new Error('getContext is only available on canvas elements');
        if (v38.width > v6 && (v38.width = v6), v38.height > v6 && (v38.height = v6), v12 === '2d') {
          let v35 = v38.getContext('2d', v22 ? v2.pseudoToNative(v22) : void 0);
          return v11(v35, this);
        }
        throw new Error(`Context type "${ v12 }" is not supported`);
      })), v2.setProperty(v21, 'width', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.width : this.native.width;
        }),
        set: v2.createNativeFunction(function(v12) {
          v3.settings.logCalls && console.log(l.domain, 'set width', this, v12), this.native.tagName === 'CANVAS' && (this.native.width = Math.min(v12, v6));
        })
      }), v2.setProperty(v21, 'height', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.tagName === 'CANVAS' ? this.native.height : this.native.height;
        }),
        set: v2.createNativeFunction(function(v12) {
          v3.settings.logCalls && console.log(l.domain, 'set height', this, v12), this.native.tagName === 'CANVAS' && (this.native.height = Math.min(v12, v6));
        })
      }), v2.setProperty(v21, 'toDataURL', v2.createNativeFunction(function(v12, v22) {
        if (this.native.tagName !== 'CANVAS')
          throw new Error('toDataURL is only available on canvas elements');
        return v3.settings.logCalls && console.log(l.domain, 'toDataURL', this, v12, v22), this.native.toDataURL(v12, v22);
      }));
    },
    resetDrawCounts: v10,
    contextToPseudo: v11
  };
}

function v39(v2, u, l) {
  let v8 = 0,
    v9 = window.location.origin;

  function v10(v19) {
    if (typeof v19 != 'string' || v19.startsWith('/') || v19.startsWith('./') || v19.startsWith('../') || !v19.startsWith('http://') && !v19.startsWith('https://'))
      return !1;
    try {
      let v20 = new URL(v19);
      if (v20.origin === v9 || v20.hostname === 'kicya.net' || v20.hostname.endsWith('.kicya.net') || v20.hostname === 'nekoweb.org')
        return !1;
      let v23 = v20.hostname.toLowerCase();
      return !(v23 === 'localhost' || v23 === '127.0.0.1' || v23 === '0.0.0.0' || v23.startsWith('192.168.') || v23.startsWith('10.') || v23.startsWith('172.16.') || v23.startsWith('172.17.') || v23.startsWith('172.18.') || v23.startsWith('172.19.') || v23.startsWith('172.2') || v23.startsWith('172.30.') || v23.startsWith('172.31.') || v23 === '[::1]');
    } catch {
      return !1;
    }
  }
  let v11 = 0,
    v13 = v2.nativeToPseudo({});
  v2.setProperty(u, '__xhrCallbacks', v13);

  function v14(v19, ...v20) {
    if (!v19 || typeof v19 != 'object')
      return;
    let v23 = v11++;
    v2.setProperty(v13, 'fn' + v23, v19);
    let v24 = v20.map((v26, v27) => {
        let v28 = 'arg' + v23 + '_' + v27;
        return v2.setProperty(v13, v28, v26), v28;
      }),
      v25 = v24.map(v26 => `__xhrCallbacks.${ v26 }`).join(',');
    v2.appendCode(`__xhrCallbacks.fn${ v23 }(${ v25 }); delete __xhrCallbacks.fn${ v23 }; ${ v24.map(v26 => `delete __xhrCallbacks.${ v26 }`).join('; ') };`);
  }
  let v15 = v2.createNativeFunction(function() {
    v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest', this), this.native = new window.XMLHttpRequest(), this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let v20 = this;
    this.native.onreadystatechange = function() {
      v2.setProperty(v20, 'readyState', v20.native.readyState), v20.native.readyState === 4 && (v2.setProperty(v20, 'status', v20.native.status), v2.setProperty(v20, 'statusText', v20.native.statusText), v2.setProperty(v20, 'responseText', v20.native.responseText?.slice(0, 5242880) || ''), v2.setProperty(v20, 'responseURL', v20.native.responseURL), v8 = Math.max(0, v8 - 1)), v20._eventHandlers.onreadystatechange && v14(v20._eventHandlers.onreadystatechange);
    }, this.native.onload = function() {
      v20._eventHandlers.onload && v14(v20._eventHandlers.onload);
    }, this.native.onerror = function() {
      v8 = Math.max(0, v8 - 1), v20._eventHandlers.onerror && v14(v20._eventHandlers.onerror);
    }, this.native.ontimeout = function() {
      v8 = Math.max(0, v8 - 1), v20._eventHandlers.ontimeout && v14(v20._eventHandlers.ontimeout);
    }, this.native.onabort = function() {
      v8 = Math.max(0, v8 - 1), v20._eventHandlers.onabort && v14(v20._eventHandlers.onabort);
    }, this.native.onprogress = function(v23) {
      if (v20._eventHandlers.onprogress) {
        let v24 = v2.nativeToPseudo({
          loaded: v23.loaded,
          total: v23.total,
          lengthComputable: v23.lengthComputable
        });
        v14(v20._eventHandlers.onprogress, v24);
      }
    }, this.native.onloadstart = function() {
      v20._eventHandlers.onloadstart && v14(v20._eventHandlers.onloadstart);
    }, this.native.onloadend = function() {
      v20._eventHandlers.onloadend && v14(v20._eventHandlers.onloadend);
    }, v2.setProperty(this, 'readyState', 0), v2.setProperty(this, 'status', 0), v2.setProperty(this, 'statusText', ''), v2.setProperty(this, 'responseText', ''), v2.setProperty(this, 'responseURL', '');
  }, !0);
  v2.setProperty(u, 'XMLHttpRequest', v15);
  let v17 = v2.getProperty(v15, 'prototype');
  v2.setProperty(v15, 'UNSENT', 0), v2.setProperty(v15, 'OPENED', 1), v2.setProperty(v15, 'HEADERS_RECEIVED', 2), v2.setProperty(v15, 'LOADING', 3), v2.setProperty(v15, 'DONE', 4), v2.setProperty(v17, 'UNSENT', 0), v2.setProperty(v17, 'OPENED', 1), v2.setProperty(v17, 'HEADERS_RECEIVED', 2), v2.setProperty(v17, 'LOADING', 3), v2.setProperty(v17, 'DONE', 4);
  let v18 = [
    'onreadystatechange',
    'onload',
    'onerror',
    'ontimeout',
    'onabort',
    'onprogress',
    'onloadstart',
    'onloadend'
  ];
  for (let v19 of v18)
    v2.setProperty(v17, v19, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return this._eventHandlers[v19] || null;
      }),
      set: v2.createNativeFunction(function(v20) {
        v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest set ' + v19, this, v20), this._eventHandlers[v19] = v20;
      })
    });
  v2.setProperty(v17, 'timeout', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native.timeout;
    }),
    set: v2.createNativeFunction(function(v19) {
      this.native.timeout = Math.min(v19, 30000);
    })
  }), v2.setProperty(v17, 'withCredentials', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native.withCredentials;
    }),
    set: v2.createNativeFunction(function(v19) {
      this.native.withCredentials = !1;
    })
  }), v2.setProperty(v17, 'responseType', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native.responseType;
    }),
    set: v2.createNativeFunction(function(v19) {
      (v19 === '' || v19 === 'text' || v19 === 'json') && (this.native.responseType = v19);
    })
  }), v2.setProperty(v17, 'response', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      let v19 = this.native.response;
      return this.native.responseType === 'json' ? v2.nativeToPseudo(v19) : typeof v19 == 'string' ? v19.slice(0, 5242880) : v19;
    })
  }), v2.setProperty(v17, 'open', v2.createNativeFunction(function(v19, v20, v23, v24, v25) {
    if (!v10(v20))
      throw new Error(`XHR request blocked: URL "${ v20 }" is not allowed. Only absolute URLs to external origins are permitted.`);
    let v26 = [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS'
    ];
    if (v19 = String(v19).toUpperCase(), !v26.includes(v19))
      throw new Error(`HTTP method "${ v19 }" is not allowed`);
    v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest open', this, v19, v20, v23, v24, v25), this._method = v19, this._url = v20, this._async = v23 !== !1, this.native.open(v19, v20, this._async), this.native.timeout = 30000, v2.setProperty(this, 'readyState', this.native.readyState);
  })), v2.setProperty(v17, 'setRequestHeader', v2.createNativeFunction(function(v19, v20) {
    if ([
        'cookie',
        'cookie2',
        'set-cookie',
        'set-cookie2',
        'host',
        'origin',
        'referer'
      ].includes(v19.toLowerCase()))
      throw new Error(`Setting header "${ v19 }" is not allowed`);
    v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest setRequestHeader', this, v19, v20), this._headers[v19] = v20, this.native.setRequestHeader(v19, v20);
  })), v2.setProperty(v17, 'send', v2.createNativeFunction(function(v19) {
    if (v8 >= 5)
      throw new Error('Maximum concurrent requests (5) exceeded');
    v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest send', this, v19), v8++;
    let v20 = null;
    v19 != null && (typeof v19 == 'string' ? v20 = v19.slice(0, 5242880) : typeof v19 == 'object' && (v20 = JSON.stringify(v2.pseudoToNative(v19)))), this.native.send(v20);
  })), v2.setProperty(v17, 'abort', v2.createNativeFunction(function() {
    v3.settings.logCalls && console.log(l.domain, 'XMLHttpRequest abort', this), this.native.abort(), v8 = Math.max(0, v8 - 1);
  })), v2.setProperty(v17, 'getResponseHeader', v2.createNativeFunction(function(v19) {
    return this.native.getResponseHeader(v19);
  })), v2.setProperty(v17, 'getAllResponseHeaders', v2.createNativeFunction(function() {
    return this.native.getAllResponseHeaders();
  })), v2.setProperty(v17, 'overrideMimeType', v2.createNativeFunction(function(v19) {
    this.native.overrideMimeType(v19);
  }));
}
var v40 = 'webtiles_storage',
  v41 = 1,
  v42 = 'localStorage',
  v43 = 1024 * 1024,
  v44 = 100,
  v45 = null,
  v46 = null;

function v47() {
  return v46 || (v46 = new Promise((v2, u) => {
    let v48 = indexedDB.open(v40, v41);
    v48.onerror = () => u(v48.error), v48.onsuccess = () => {
      v45 = v48.result, v2(v45);
    }, v48.onupgradeneeded = v5 => {
      let v6 = v5.target.result;
      v6.objectStoreNames.contains(v42) || v6.createObjectStore(v42, {
        keyPath: [
          'site',
          'key'
        ]
      }).createIndex('site', 'site', {
        unique: !1
      });
    };
  }), v46);
}
async function v49(v2, u) {
  return await v47(), new Promise((v48, v5) => {
    let v8 = v45.transaction(v42, 'readonly').objectStore(v42).get([
      v2,
      u
    ]);
    v8.onsuccess = () => v48(v8.result?.value ?? null), v8.onerror = () => v5(v8.error);
  });
}
async function v50(v2, u, v48) {
  return await v47(), new Promise((v5, v6) => {
    let v9 = v45.transaction(v42, 'readwrite').objectStore(v42).put({
      site: v2,
      key: u,
      value: v48
    });
    v9.onsuccess = () => v5(), v9.onerror = () => v6(v9.error);
  });
}
async function v51(v2, u) {
  return await v47(), new Promise((v48, v5) => {
    let v8 = v45.transaction(v42, 'readwrite').objectStore(v42).delete([
      v2,
      u
    ]);
    v8.onsuccess = () => v48(), v8.onerror = () => v5(v8.error);
  });
}
async function v52(v2) {
  return await v47(), new Promise((u, v48) => {
    let v8 = v45.transaction(v42, 'readonly').objectStore(v42).index('site').getAll(v2);
    v8.onsuccess = () => {
      let v9 = v8.result.map(v10 => v10.key);
      u(v9);
    }, v8.onerror = () => v48(v8.error);
  });
}
async function v53(v2) {
  return await v47(), new Promise((u, v48) => {
    let v8 = v45.transaction(v42, 'readonly').objectStore(v42).index('site').getAll(v2);
    v8.onsuccess = () => {
      let v9 = 0;
      for (let v10 of v8.result)
        v9 += (v10.key.length + v10.value.length) * 2;
      u({
        size: v9,
        count: v8.result.length
      });
    }, v8.onerror = () => v48(v8.error);
  });
}
async function v54(v2) {
  return await v47(), new Promise((u, v48) => {
    let v8 = v45.transaction(v42, 'readwrite').objectStore(v42).index('site').openCursor(v2);
    v8.onsuccess = v9 => {
      let v10 = v9.target.result;
      v10 ? (v10.delete(), v10.continue()) : u();
    }, v8.onerror = () => v48(v8.error);
  });
}

function v55(v2, u, v48) {
  let v5 = v2.nativeToPseudo({});
  v2.setProperty(v5, 'getItem', v2.createAsyncFunction(function(v6, v7) {
    if (v3.settings.logCalls && console.log(v48, 'localStorage.getItem', this, v6), v6 == null) {
      v7(null);
      return;
    }
    v6 = String(v6), v49(v48, v6).then(v8 => v7(v8)).catch(v8 => {
      console.error('localStorage.getItem error:', v8), v7(null);
    });
  })), v2.setProperty(v5, 'setItem', v2.createAsyncFunction(function(v6, v7, v8) {
    if (v3.settings.logCalls && console.log(v48, 'localStorage.setItem', this, v6, v7), v6 == null) {
      v8();
      return;
    }
    v6 = String(v6), v7 = String(v7), v53(v48).then(({
      size: v9,
      count: v10
    }) => {
      v49(v48, v6).then(v11 => {
        if (v11 === null && v10 >= v44)
          throw new Error(`localStorage item limit exceeded (max ${ v44 } items)`);
        let v14 = v11 ? (v6.length + v11.length) * 2 : 0,
          v15 = (v6.length + v7.length) * 2;
        if (v9 - v14 + v15 > v43)
          throw new Error(`localStorage size limit exceeded (max ${ v43 / 1024 }KB)`);
        return v50(v48, v6, v7);
      }).then(() => v8()).catch(v11 => {
        throw console.error('localStorage.setItem error:', v11), v11;
      });
    }).catch(v9 => {
      console.error('localStorage.setItem error:', v9), v8();
    });
  })), v2.setProperty(v5, 'removeItem', v2.createAsyncFunction(function(v6, v7) {
    if (v3.settings.logCalls && console.log(v48, 'localStorage.removeItem', this, v6), v6 == null) {
      v7();
      return;
    }
    v6 = String(v6), v51(v48, v6).then(() => v7()).catch(v8 => {
      console.error('localStorage.removeItem error:', v8), v7();
    });
  })), v2.setProperty(v5, 'clear', v2.createAsyncFunction(function(v6) {
    v3.settings.logCalls && console.log(v48, 'localStorage.clear', this), v54(v48).then(() => v6()).catch(v7 => {
      console.error('localStorage.clear error:', v7), v6();
    });
  })), v2.setProperty(v5, 'key', v2.createAsyncFunction(function(v6, v7) {
    v6 = parseInt(v6) || 0, v52(v48).then(v8 => {
      v7(v6 >= 0 && v6 < v8.length ? v8[v6] : null);
    }).catch(v8 => {
      console.error('localStorage.key error:', v8), v7(null);
    });
  })), v2.setProperty(v5, 'getLength', v2.createAsyncFunction(function(v6) {
    v53(v48).then(({
      count: v7
    }) => v6(v7)).catch(v7 => {
      console.error('localStorage.getLength error:', v7), v6(0);
    });
  })), v2.setProperty(u, 'localStorage', v5), v2.setProperty(u, 'sessionStorage', v5);
}
v47().catch(v2 => {
  console.error('Failed to initialize storage DB:', v2);
});

function v56(v2, u, v48, v5) {
  let v6 = v2.createNativeFunction(function() {}, !0);
  v2.setProperty(u, 'DOMParser', v6);
  let v7 = v2.getProperty(v6, 'prototype');
  v2.setProperty(v7, 'parseFromString', v2.createNativeFunction(function(v8, v9) {
    if (v3.settings.logCalls && console.log(v5.domain, 'DOMParser parseFromString', this, v8, v9), ![
        'text/html',
        'text/xml',
        'application/xml',
        'application/xhtml+xml',
        'image/svg+xml'
      ].includes(v9))
      throw new Error(`DOMParser: Unsupported MIME type "${ v9 }"`);
    if (typeof v8 != 'string' && (v8 = String(v8)), v8.length > 100000)
      throw new Error('DOMParser: Input string too large (max 100KB)');
    let v13 = new DOMParser().parseFromString(v8, v9),
      v14 = v2.createObjectProto(v2.OBJECT_PROTO);

    function v15(v17) {
      if (v17 == null)
        return null;
      let v18 = v2.createObjectProto(v2.OBJECT_PROTO);
      return v18.native = v17, v18.fromDOMParser = !0, v2.setProperty(v18, 'nodeName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.nodeName;
        })
      }), v2.setProperty(v18, 'nodeType', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.nodeType;
        })
      }), v2.setProperty(v18, 'nodeValue', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.nodeValue;
        }),
        set: v2.createNativeFunction(function(v19) {
          v3.settings.logCalls && console.log(v5.domain, 'DOMParser set nodeValue', this, v19), this.native.nodeValue = v19;
        })
      }), v2.setProperty(v18, 'textContent', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.textContent;
        }),
        set: v2.createNativeFunction(function(v19) {
          v3.settings.logCalls && console.log(v5.domain, 'DOMParser set textContent', this, v19), this.native.textContent = String(v19).slice(0, 50000);
        })
      }), v2.setProperty(v18, 'tagName', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.tagName;
        })
      }), v2.setProperty(v18, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.id;
        }),
        set: v2.createNativeFunction(function(v19) {
          v3.settings.logCalls && console.log(v5.domain, 'DOMParser set id', this, v19), this.native.id = String(v19).slice(0, 100);
        })
      }), v2.setProperty(v18, 'className', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.className;
        }),
        set: v2.createNativeFunction(function(v19) {
          v3.settings.logCalls && console.log(v5.domain, 'DOMParser set className', this, v19), this.native.className = String(v19).slice(0, 1000);
        })
      }), v2.setProperty(v18, 'innerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.innerHTML;
        }),
        set: v2.createNativeFunction(function(v19) {
          throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
        })
      }), v2.setProperty(v18, 'outerHTML', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return this.native.outerHTML;
        })
      }), v2.setProperty(v18, 'children', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          let v19 = Array.from(this.native.children),
            v20 = v2.createObjectProto(v2.ARRAY_PROTO);
          for (let v23 = 0; v23 < v19.length; v23++)
            v2.setProperty(v20, v23, v15(v19[v23]));
          return v2.setProperty(v20, 'length', v19.length), v20;
        })
      }), v2.setProperty(v18, 'childNodes', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          let v19 = Array.from(this.native.childNodes),
            v20 = v2.createObjectProto(v2.ARRAY_PROTO);
          for (let v23 = 0; v23 < v19.length; v23++)
            v2.setProperty(v20, v23, v15(v19[v23]));
          return v2.setProperty(v20, 'length', v19.length), v20;
        })
      }), v2.setProperty(v18, 'firstChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return v15(this.native.firstChild);
        })
      }), v2.setProperty(v18, 'lastChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return v15(this.native.lastChild);
        })
      }), v2.setProperty(v18, 'firstElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return v15(this.native.firstElementChild);
        })
      }), v2.setProperty(v18, 'lastElementChild', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return v15(this.native.lastElementChild);
        })
      }), v2.setProperty(v18, 'parentNode', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v48) ? null : (v3.settings.logCalls && console.log(v5.domain, 'DOMParser get parentNode', this), v15(this.native.parentNode));
        })
      }), v2.setProperty(v18, 'parentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v48) ? null : (v3.settings.logCalls && console.log(v5.domain, 'DOMParser get parentElement', this), v15(this.native.parentElement));
        })
      }), v2.setProperty(v18, 'nextSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v48) ? null : (v3.settings.logCalls && console.log(v5.domain, 'DOMParser get nextSibling', this), v15(this.native.nextSibling));
        })
      }), v2.setProperty(v18, 'previousSibling', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          if (!this.fromDOMParser)
            throw new Error('No access.');
          return this.native.isSameNode(v48) ? null : (v3.settings.logCalls && console.log(v5.domain, 'DOMParser get previousSibling', this), v15(this.native.previousSibling));
        })
      }), v2.setProperty(v18, 'getAttributeNames', v2.createNativeFunction(function() {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v19 = Array.from(this.native.getAttributeNames()),
          v20 = v2.createObjectProto(v2.ARRAY_PROTO);
        for (let v23 = 0; v23 < v19.length; v23++)
          v2.setProperty(v20, v23, v19[v23]);
        return v2.setProperty(v20, 'length', v19.length), v20;
      })), v2.setProperty(v18, 'getAttribute', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.getAttribute(v19);
      })), v2.setProperty(v18, 'setAttribute', v2.createNativeFunction(function(v19, v20) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (v19 = String(v19).toLowerCase(), v19.startsWith('on'))
          throw new Error('Event handlers are not allowed');
        this.native.setAttribute(v19, String(v20)), v3.settings.logCalls && console.log(v5.domain, 'DOMParser set attribute', this, v19, v20);
      })), v2.setProperty(v18, 'hasAttribute', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return this.native.hasAttribute(v19);
      })), v2.setProperty(v18, 'removeAttribute', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        if (this.native.isSameNode(v48))
          throw new Error('No access.');
        this.native.removeAttribute(v19), v3.settings.logCalls && console.log(v5.domain, 'DOMParser remove attribute', this, v19);
      })), v2.setProperty(v18, 'querySelector', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return v15(this.native.querySelector(v19));
      })), v2.setProperty(v18, 'querySelectorAll', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v20 = Array.from(this.native.querySelectorAll(v19)),
          v23 = v2.createObjectProto(v2.ARRAY_PROTO);
        for (let v24 = 0; v24 < v20.length; v24++)
          v2.setProperty(v23, v24, v15(v20[v24]));
        return v2.setProperty(v23, 'length', v20.length), v23;
      })), v2.setProperty(v18, 'getElementsByTagName', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v20 = Array.from(this.native.getElementsByTagName(v19)),
          v23 = v2.createObjectProto(v2.ARRAY_PROTO);
        for (let v24 = 0; v24 < v20.length; v24++)
          v2.setProperty(v23, v24, v15(v20[v24]));
        return v2.setProperty(v23, 'length', v20.length), v23;
      })), v2.setProperty(v18, 'getElementsByClassName', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        let v20 = Array.from(this.native.getElementsByClassName(v19)),
          v23 = v2.createObjectProto(v2.ARRAY_PROTO);
        for (let v24 = 0; v24 < v20.length; v24++)
          v2.setProperty(v23, v24, v15(v20[v24]));
        return v2.setProperty(v23, 'length', v20.length), v23;
      })), v2.setProperty(v18, 'getElementById', v2.createNativeFunction(function(v19) {
        if (!this.fromDOMParser)
          throw new Error('No access.');
        return v15(this.native.getElementById ? this.native.getElementById(v19) : null);
      })), v18;
    }
    return v2.setProperty(v14, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v15(v13.documentElement);
      })
    }), v2.setProperty(v14, 'head', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v3.settings.logCalls && console.log(v5.domain, 'DOMParser get head', this), v15(v13.head);
      })
    }), v2.setProperty(v14, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v3.settings.logCalls && console.log(v5.domain, 'DOMParser get body', this), v15(v13.body);
      })
    }), v2.setProperty(v14, 'title', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v13.title;
      })
    }), v2.setProperty(v14, 'querySelector', v2.createNativeFunction(function(v17) {
      return v15(v13.querySelector(v17));
    })), v2.setProperty(v14, 'querySelectorAll', v2.createNativeFunction(function(v17) {
      let v18 = Array.from(v13.querySelectorAll(v17)),
        v19 = v2.createObjectProto(v2.ARRAY_PROTO);
      for (let v20 = 0; v20 < v18.length; v20++)
        v2.setProperty(v19, v20, v15(v18[v20]));
      return v2.setProperty(v19, 'length', v18.length), v19;
    })), v2.setProperty(v14, 'getElementById', v2.createNativeFunction(function(v17) {
      return v15(v13.getElementById(v17));
    })), v2.setProperty(v14, 'getElementsByTagName', v2.createNativeFunction(function(v17) {
      let v18 = Array.from(v13.getElementsByTagName(v17)),
        v19 = v2.createObjectProto(v2.ARRAY_PROTO);
      for (let v20 = 0; v20 < v18.length; v20++)
        v2.setProperty(v19, v20, v15(v18[v20]));
      return v2.setProperty(v19, 'length', v18.length), v19;
    })), v2.setProperty(v14, 'getElementsByClassName', v2.createNativeFunction(function(v17) {
      let v18 = Array.from(v13.getElementsByClassName(v17)),
        v19 = v2.createObjectProto(v2.ARRAY_PROTO);
      for (let v20 = 0; v20 < v18.length; v20++)
        v2.setProperty(v19, v20, v15(v18[v20]));
      return v2.setProperty(v19, 'length', v18.length), v19;
    })), v14;
  }));
}

function v57(v2, u, v48, v5) {
  let v6 = new WeakMap(),
    v7 = 1000,
    v8 = 5,
    v9 = new WeakMap(),
    v10 = 0,
    v11 = v2.nativeToPseudo({});
  v2.setProperty(u, '__eventCallbacks', v11);

  function v13(v37, o) {
    let v58 = v10++;
    v2.setProperty(v11, 'fn' + v58, v37), v2.setProperty(v11, 'ev' + v58, o), v2.appendCode(`__eventCallbacks.fn${ v58 }(__eventCallbacks.ev${ v58 }); delete __eventCallbacks.fn${ v58 }; delete __eventCallbacks.ev${ v58 };`);
  }

  function v14() {
    return v48.getElementsByTagName('*').length;
  }

  function v15(v37 = 1) {
    if (v14() + v37 > v7)
      throw new Error(`DOM element limit exceeded (max ${ v7 })`);
  }

  function v17(v37) {
    return v37 instanceof Element ? 1 + v37.getElementsByTagName('*').length : 0;
  }

  function v18(v37, o = !1) {
    if (v37 == null)
      return null;
    if (v6.has(v37))
      return v6.get(v37);
    let v58 = v37 instanceof Element ? v29 : v24,
      v59 = v2.createObject(v58);
    return v59.native = v37, v59.fromDOMParser || (v59.fromDOMParser = o), v6.set(v37, v59), v59;
  }

  function v19(v37) {
    return v37 && v48.contains(v37);
  }

  function v20(v37) {
    return v19(v37) ? v37 : null;
  }

  function v23(v37) {
    let v60 = v2.createObjectProto(v2.ARRAY_PROTO);
    for (let v58 = 0; v58 < v37.length; v58++)
      v2.setProperty(v60, v58, v18(v37[v58]));
    return v2.setProperty(v60, 'length', v37.length), v60;
  }
  let v24 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'Node', v24);
  let v25 = v2.getProperty(v24, 'prototype'),
    v26 = {
      firstChild: function() {
        return v18(v20(this.native.firstChild));
      },
      lastChild: function() {
        return v18(v20(this.native.lastChild));
      },
      parentNode: function() {
        return v18(v20(this.native.parentNode));
      },
      parentElement: function() {
        return v18(v20(this.native.parentElement));
      },
      nextSibling: function() {
        return v18(v20(this.native.nextSibling));
      },
      previousSibling: function() {
        return v18(v20(this.native.previousSibling));
      },
      childNodes: function() {
        let v37 = Array.from(this.native.childNodes).filter(v19);
        return v23(v37);
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
    v27 = {
      textContent: function(v37) {
        v3.settings.logCalls && console.log(v5.domain, 'set textContent', this, v37), this.native.textContent = v37;
      },
      nodeValue: function(v37) {
        v3.settings.logCalls && console.log(v5.domain, 'set nodeValue', this, v37), this.native.nodeValue = v37;
      }
    };
  for (let [v37, v60] of Object.entries(v26)) {
    let v58 = {
      get: v2.createNativeFunction(v60)
    };
    v27[v37] && (v58.set = v2.createNativeFunction(v27[v37])), v2.setProperty(v25, v37, Interpreter.VALUE_IN_DESCRIPTOR, v58);
  }
  let v28 = {
    hasChildNodes: function() {
      return this.native.hasChildNodes();
    },
    appendChild: function(v37) {
      if (!v37?.native)
        return null;
      if (v37.fromDOMParser)
        throw new Error('You cannot append DOMParser elements to the DOM.');
      return v15(v17(v37.native)), this.native.appendChild(v37.native), v3.settings.logCalls && console.log(v5.domain, 'appendChild', this, v37), v37;
    },
    append: function(v37) {
      for (let v60 of v37)
        if (v60?.native) {
          if (v60.fromDOMParser)
            throw new Error('You cannot append DOMParser elements to the DOM.');
          v15(v17(v60.native)), this.native.appendChild(v60.native);
        }
      return v3.settings.logCalls && console.log(v5.domain, 'append', this, v37), v37;
    },
    removeChild: function(v37) {
      return !v37?.native || !v19(v37.native) ? null : (v3.settings.logCalls && console.log(v5.domain, 'removeChild', this, v37), v18(this.native.removeChild(v37.native)));
    },
    insertBefore: function(v37, v60) {
      if (!v37?.native)
        return null;
      if (v37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v48))
        throw new Error('No access.');
      v15(v17(v37.native));
      let v58 = v60?.native || null;
      return this.native.insertBefore(v37.native, v58), v3.settings.logCalls && console.log(v5.domain, 'insertBefore', this, v37, v58), v37;
    },
    cloneNode: function(v37) {
      return v3.settings.logCalls && console.log(v5.domain, 'cloneNode', this, v37), v18(this.native.cloneNode(v37), this.fromDOMParser);
    },
    contains: function(v37) {
      return v37?.native ? this.native.contains(v37.native) : !1;
    },
    remove: function() {
      if (this.native.isSameNode(v48))
        throw new Error('No access.');
      this.native.remove(), v3.settings.logCalls && console.log(v5.domain, 'remove', this);
    },
    after: function(v37) {
      if (!v37?.native)
        return null;
      if (v37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v48))
        throw new Error('No access.');
      return v15(v17(v37.native)), this.native.after(v37.native), v3.settings.logCalls && console.log(v5.domain, 'after', this, v37), v37;
    },
    before: function(v37) {
      if (!v37?.native)
        return null;
      if (v37.fromDOMParser)
        throw new Error('You cannot insert DOMParser elements into the DOM.');
      if (this.native.isSameNode(v48))
        throw new Error('No access.');
      return v15(v17(v37.native)), this.native.before(v37.native), v3.settings.logCalls && console.log(v5.domain, 'before', this, v37), v37;
    }
  };
  for (let [v37, v60] of Object.entries(v28))
    v2.setProperty(v25, v37, v2.createNativeFunction(v60));
  let v29 = v2.createNativeFunction(function() {
    throw TypeError('Illegal constructor');
  }, !0);
  v2.setProperty(u, 'Element', v29);
  let v30 = v2.createObject(v24);
  v2.setProperty(v29, 'prototype', v30);

  function v31(v37) {
    if (!v37)
      return '';
    v37 = String(v37);
    let v60 = v37.toLowerCase().trim();
    if (v60.startsWith('javascript:') || v60.startsWith('vbscript:'))
      throw new Error('javascript: URLs are not allowed');
    if (v60.startsWith('data:'))
      return v37;
    try {
      let v58 = new URL(v37, location.href);
      if (v58.hostname !== location.hostname)
        throw new Error('External URLs are not allowed');
      let v59 = v58.pathname + v58.search + v58.hash;
      return v59.startsWith(`/t/${ v5.domain }/`) || (v59 = `/t/${ v5.domain }/${ v59 }`.replaceAll('//', '/')), v59;
    } catch (v58) {
      if (v58.message.includes('not allowed'))
        throw v58;
      let v59 = v37;
      return !v59.startsWith(`/t/${ v5.domain }/`) && !v59.startsWith('#') && (v59 = `/t/${ v5.domain }/${ v59 }`.replaceAll('//', '/')), v59;
    }
  }
  let v32 = {
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
        let v37 = Array.from(this.native.children).filter(v19);
        return v23(v37);
      },
      firstElementChild: function() {
        return v18(v20(this.native.firstElementChild));
      },
      lastElementChild: function() {
        return v18(v20(this.native.lastElementChild));
      },
      nextElementSibling: function() {
        return v18(v20(this.native.nextElementSibling));
      },
      previousElementSibling: function() {
        return v18(v20(this.native.previousElementSibling));
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
    v33 = {
      innerText: function(v37) {
        this.native.innerText = v37.slice(0, 1000);
      },
      innerHTML: function(v37) {
        throw new Error('innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.');
      },
      id: function(v37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.id = v37, v3.settings.logCalls && console.log(v5.domain, 'set id', this, v37);
      },
      className: function(v37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.className = v37, v3.settings.logCalls && console.log(v5.domain, 'set className', this, v37);
      },
      src: function(v37) {
        this.native.src = v31(v37), v3.settings.logCalls && console.log(v5.domain, 'set src', this, v37);
      },
      href: function(v37) {
        this.native.href = this.native.tagName === 'A' ? v37 : v31(v37), v3.settings.logCalls && console.log(v5.domain, 'set href', this, v37);
      },
      hidden: function(v37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.hidden = !!v37;
      },
      disabled: function(v37) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        this.native.disabled = !!v37;
      },
      checked: function(v37) {
        this.native.checked = !!v37;
      },
      selected: function(v37) {
        this.native.selected = !!v37;
      },
      readOnly: function(v37) {
        this.native.readOnly = !!v37;
      },
      required: function(v37) {
        this.native.required = !!v37;
      },
      draggable: function(v37) {
        this.native.draggable = !!v37;
      },
      title: function(v37) {
        this.native.title = String(v37).slice(0, 1000);
      },
      alt: function(v37) {
        this.native.alt = String(v37).slice(0, 1000);
      },
      name: function(v37) {
        this.native.name = String(v37).slice(0, 100);
      },
      type: function(v37) {
        this.native.type = String(v37).slice(0, 50);
      },
      value: function(v37) {
        this.native.value = String(v37).slice(0, 10000);
      },
      placeholder: function(v37) {
        this.native.placeholder = String(v37).slice(0, 500);
      },
      tabIndex: function(v37) {
        this.native.tabIndex = parseInt(v37) || 0;
      },
      scrollTop: function(v37) {
        this.native.scrollTop = v37;
      },
      scrollLeft: function(v37) {
        this.native.scrollLeft = v37;
      },
      currentTime: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(v37) || 0));
      },
      muted: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!v37);
      },
      volume: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(v37) || 0)));
      },
      loop: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!v37);
      },
      autoplay: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!v37);
      },
      controls: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!v37);
      },
      playbackRate: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(0.25, Math.min(4, Number(v37) || 1)));
      },
      defaultPlaybackRate: function(v37) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(0.25, Math.min(4, Number(v37) || 1)));
      },
      preload: function(v37) {
        if (this.native instanceof HTMLMediaElement) {
          let v60 = [
            'none',
            'metadata',
            'auto'
          ];
          this.native.preload = v60.includes(v37) ? v37 : 'auto';
        }
      },
      poster: function(v37) {
        this.native instanceof HTMLVideoElement && (this.native.poster = v31(v37));
      }
    };
  for (let [v37, v60] of Object.entries(v32)) {
    let v58 = {
      get: v2.createNativeFunction(v60)
    };
    v33[v37] && (v58.set = v2.createNativeFunction(v33[v37])), v2.setProperty(v30, v37, Interpreter.VALUE_IN_DESCRIPTOR, v58);
  }
  let v34 = {
    getAttributeNames: function() {
      let v37 = Array.from(this.native.getAttributeNames()),
        v60 = v2.createObjectProto(v2.ARRAY_PROTO);
      for (let v58 = 0; v58 < v37.length; v58++)
        v2.setProperty(v60, v58, v37[v58]);
      return v2.setProperty(v60, 'length', v37.length), v60;
    },
    getAttribute: function(v37) {
      return this.native.getAttribute(v37);
    },
    setAttribute: function(v37, v60) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (v37 = String(v37).toLowerCase(), v60 = String(v60), v3.settings.logCalls && console.log(v5.domain, 'setAttribute', this, v37, v60), v37 === 'style' && v60.includes('animation-play-state') && v60.includes('!important'))
        throw new Error('Cannot set animation-play-state to !important');
      if (v37 === 'src' || v37 === 'poster' || v37 === 'data' || this.native.tagName !== 'A' && v37 === 'href') {
        this.native.setAttribute(v37, v31(v60));
        return;
      }
      if (v37 === 'autoplay')
        throw new Error('autoplay is not allowed');
      if (v37 === 'srcset')
        throw new Error('srcset is not allowed');
      if (v37 === 'action' || v37 === 'formaction')
        throw new Error('action and formaction are not allowed');
      if (v37.startsWith('on'))
        throw new Error('Event handlers are not allowed. Use addEventListener instead.');
      if (v37 === 'width' || v37 === 'height') {
        let v58 = parseFloat(v60);
        if (isNaN(v58) || v58 < 0 || v58 > 4096)
          throw new Error('Invalid width or height');
      }
      this.native.setAttribute(v37, v60);
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
    scrollIntoView: function(v37) {
      v37 && typeof v37 == 'object' ? this.native.scrollIntoView(v2.pseudoToNative(v37)) : this.native.scrollIntoView(v37);
    },
    scrollTo: function(v37, v60) {
      this.native.scrollTo(v37, v60);
    },
    scrollBy: function(v37, v60) {
      this.native.scrollBy(v37, v60);
    },
    removeAttribute: function(v37) {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      if (v37 = String(v37).toLowerCase(), v37 === 'target')
        throw new Error('removing target is not allowed');
      v3.settings.logCalls && console.log(v5.domain, 'removeAttribute', this, v37), this.native.removeAttribute(v37);
    },
    hasAttribute: function(v37) {
      return this.native.hasAttribute(v37);
    },
    querySelector: function(v37) {
      let v60 = this.native.querySelector(v37);
      return v18(v20(v60));
    },
    querySelectorAll: function(v37) {
      let v60 = Array.from(this.native.querySelectorAll(v37)).filter(v19);
      return v23(v60);
    },
    getElementsByClassName: function(v37) {
      let v60 = Array.from(this.native.getElementsByClassName(v37)).filter(v19);
      return v23(v60);
    },
    getElementsByTagName: function(v37) {
      let v60 = Array.from(this.native.getElementsByTagName(v37)).filter(v19);
      return v23(v60);
    },
    closest: function(v37) {
      let v60 = this.native.closest(v37);
      for (; v60 && !v48.contains(v60);)
        v60 = null;
      return v18(v60);
    },
    matches: function(v37) {
      return this.native.matches(v37);
    },
    classList: function() {
      if (this.native.className === 'tile-body')
        throw new Error('No access.');
      let v37 = this.native.classList;
      return v2.nativeToPseudo({
        add: (...v60) => v37.add(...v60),
        remove: (...v60) => v37.remove(...v60),
        toggle: (v60, v58) => v37.toggle(v60, v58),
        contains: v60 => v37.contains(v60),
        replace: (v60, v58) => v37.replace(v60, v58)
      });
    },
    getBoundingClientRect: function() {
      let v37 = this.native.getBoundingClientRect();
      return v2.nativeToPseudo({
        v26: v37.v26,
        v18: v37.v18,
        width: v37.width,
        height: v37.height,
        top: v37.top,
        right: v37.right,
        bottom: v37.bottom,
        left: v37.left
      });
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement))
        return v2.createObjectProto(v2.OBJECT_PROTO);
      if (!this.native.isConnected)
        throw new Error('Element is not connected to the DOM. Append it to the DOM before playing.');
      let v37 = v2.createObjectProto(v2.OBJECT_PROTO),
        v60 = this,
        v58 = null,
        v59 = null;
      return v3.settings.logCalls && console.log(v5.domain, 'play', this), v2.setProperty(v37, 'then', v2.createNativeFunction(function(S) {
        return v58 = S, v37;
      })), v2.setProperty(v37, 'catch', v2.createNativeFunction(function(S) {
        return v59 = S, v37;
      })), v60.native.play().then(() => {
        v58 && v13(v58, v2.nativeToPseudo(void 0));
      }).catch(S => {
        v59 && v13(v59, v2.nativeToPseudo({
          message: S.message,
          name: S.name
        }));
      }), v37;
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause();
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load();
    },
    canPlayType: function(v37) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(v37 || '')) : '';
    },
    fastSeek: function(v37) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == 'function' && this.native.fastSeek(Math.max(0, Number(v37) || 0));
    },
    getAnimations: function(v37) {
      if (!this.native.getAnimations)
        return v23([]);
      let v60 = v37 ? {
          subtree: !!v2.pseudoToNative(v37)?.subtree
        } : {},
        v58 = this.native.getAnimations(v60),
        v59 = v2.createObjectProto(v2.ARRAY_PROTO);
      for (let v61 = 0; v61 < v58.length; v61++)
        v59.properties[v61] = v21(v58[v61]);
      return v2.setProperty(v59, 'length', v58.length), v59;
    }
  };
  for (let [v37, v60] of Object.entries(v34))
    v2.setProperty(v30, v37, v2.createNativeFunction(v60));

  function v21(v37) {
    let v60 = v2.createObjectProto(v2.OBJECT_PROTO);
    return v2.setProperty(v60, 'id', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.id;
      })
    }), v2.setProperty(v60, 'playState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.playState;
      })
    }), v2.setProperty(v60, 'pending', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.pending;
      })
    }), v2.setProperty(v60, 'replaceState', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.replaceState;
      })
    }), v2.setProperty(v60, 'currentTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.currentTime;
      }),
      set: v2.createNativeFunction(function(v58) {
        v37.currentTime = v58;
      })
    }), v2.setProperty(v60, 'playbackRate', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.playbackRate;
      }),
      set: v2.createNativeFunction(function(v58) {
        v37.playbackRate = Math.max(-10, Math.min(10, Number(v58) || 1));
      })
    }), v2.setProperty(v60, 'startTime', Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        return v37.startTime;
      }),
      set: v2.createNativeFunction(function(v58) {
        v37.startTime = v58;
      })
    }), v2.setProperty(v60, 'play', v2.createNativeFunction(function() {
      v37.play();
    })), v2.setProperty(v60, 'pause', v2.createNativeFunction(function() {
      v37.pause();
    })), v2.setProperty(v60, 'cancel', v2.createNativeFunction(function() {
      v37.cancel();
    })), v2.setProperty(v60, 'finish', v2.createNativeFunction(function() {
      v37.finish();
    })), v2.setProperty(v60, 'reverse', v2.createNativeFunction(function() {
      v37.reverse();
    })), v2.setProperty(v60, 'updatePlaybackRate', v2.createNativeFunction(function(v58) {
      v37.updatePlaybackRate(Math.max(-10, Math.min(10, Number(v58) || 1)));
    })), v60;
  }

  function v16(v37) {
    let v60 = v2.createObjectProto(v2.OBJECT_PROTO),
      v58 = v37 ? v37.length : 0;
    return v2.setProperty(v60, 'length', v58), v2.setProperty(v60, 'start', v2.createNativeFunction(function(v59) {
      if (!v37 || v59 < 0 || v59 >= v37.length)
        throw new Error('Index out of bounds');
      return v37.start(v59);
    })), v2.setProperty(v60, 'end', v2.createNativeFunction(function(v59) {
      if (!v37 || v59 < 0 || v59 >= v37.length)
        throw new Error('Index out of bounds');
      return v37.end(v59);
    })), v60;
  }
  v2.setProperty(v30, 'buffered', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v16(this.native.buffered) : v16(null);
    })
  }), v2.setProperty(v30, 'played', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v16(this.native.played) : v16(null);
    })
  }), v2.setProperty(v30, 'seekable', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? v16(this.native.seekable) : v16(null);
    })
  }), v2.setProperty(v30, 'classList', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      let v37 = this.native.classList,
        v60 = v2.nativeToPseudo({});
      return v2.setProperty(v60, 'add', v2.createNativeFunction(function(...v58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        v37.add(...v58);
      })), v2.setProperty(v60, 'remove', v2.createNativeFunction(function(...v58) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        v37.remove(...v58);
      })), v2.setProperty(v60, 'toggle', v2.createNativeFunction(function(v58, v59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return v37.toggle(v58, v59);
      })), v2.setProperty(v60, 'contains', v2.createNativeFunction(function(v58) {
        return v37.contains(v58);
      })), v2.setProperty(v60, 'replace', v2.createNativeFunction(function(v58, v59) {
        if (this.native.className === 'tile-body')
          throw new Error('No access.');
        return v37.replace(v58, v59);
      })), v60;
    })
  }), v2.setProperty(v30, 'style', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      let v37 = this.native.style,
        v60 = v2.nativeToPseudo({}),
        v58 = [
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
      for (let v59 of v58)
        v2.setProperty(v60, v59, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: v2.createNativeFunction(function() {
            return v37[v59];
          }),
          set: v2.createNativeFunction(function(v61) {
            v37[v59] = v61, v3.settings.logCalls && console.log(v5.domain, 'set style', this, v59, v61);
          })
        });
      return v2.setProperty(v60, 'cssText', Interpreter.VALUE_IN_DESCRIPTOR, {
        get: v2.createNativeFunction(function() {
          return v37.cssText;
        }),
        set: v2.createNativeFunction(function(v59) {
          v37.cssText = v59, v3.settings.logCalls && console.log(v5.domain, 'set cssText', this, v59);
        })
      }), v2.setProperty(v60, 'setProperty', v2.createNativeFunction(function(v59, v61, L) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        v37.setProperty(v59, v61, L), v3.settings.logCalls && console.log(v5.domain, 'setProperty', this, v59, v61, L);
      })), v2.setProperty(v60, 'getPropertyValue', v2.createNativeFunction(function(v59) {
        return v37.getPropertyValue(v59);
      })), v2.setProperty(v60, 'removeProperty', v2.createNativeFunction(function(v59) {
        if (this.native?.className === 'tile-body')
          throw new Error('No access.');
        return v3.settings.logCalls && console.log(v5.domain, 'removeProperty', this, v59), v37.removeProperty(v59);
      })), v60;
    })
  }), v2.setProperty(v30, 'dataset', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      let v37 = this.native.dataset,
        v60 = v2.nativeToPseudo({});
      for (let v58 in v37)
        v2.setProperty(v60, v58, v37[v58]);
      return v2.setProperty(v60, 'get', v2.createNativeFunction(function(v58) {
        return v37[v58];
      })), v2.setProperty(v60, 'set', v2.createNativeFunction(function(v58, v59) {
        v37[v58] = String(v59).slice(0, 1000), v3.settings.logCalls && console.log(v5.domain, 'set dataset', this, v58, v59);
      })), v2.setProperty(v60, 'delete', v2.createNativeFunction(function(v58) {
        delete v37[v58], v3.settings.logCalls && console.log(v5.domain, 'delete dataset', this, v58);
      })), v2.setProperty(v60, 'has', v2.createNativeFunction(function(v58) {
        return v58 in v37;
      })), v60;
    })
  }), v2.setProperty(v30, 'offsetParent', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return v18(v20(this.native.offsetParent));
    })
  });
  let v12 = [
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

  function v22(v37) {
    let v60 = v2.nativeToPseudo({}),
      v58 = [
        'type',
        'bubbles',
        'cancelable',
        'defaultPrevented',
        'timeStamp'
      ];
    for (let v59 of v58)
      v2.setProperty(v60, v59, v37[v59]);
    if (v37 instanceof MouseEvent || v37 instanceof PointerEvent) {
      let v59 = [
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
      for (let v61 of v59)
        v2.setProperty(v60, v61, v37[v61]);
    }
    if (v37 instanceof KeyboardEvent) {
      let v59 = [
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
      for (let v61 of v59)
        v2.setProperty(v60, v61, v37[v61]);
    }
    return typeof TouchEvent == 'function' && v37 instanceof TouchEvent && (v2.setProperty(v60, 'touches', v2.nativeToPseudo({
      length: v37.touches.length
    })), v2.setProperty(v60, 'changedTouches', v2.nativeToPseudo({
      length: v37.changedTouches.length
    }))), typeof WheelEvent == 'function' && v37 instanceof WheelEvent && (v2.setProperty(v60, 'deltaX', v37.deltaX), v2.setProperty(v60, 'deltaY', v37.deltaY), v2.setProperty(v60, 'deltaZ', v37.deltaZ), v2.setProperty(v60, 'deltaMode', v37.deltaMode)), v37.target && v19(v37.target) && v2.setProperty(v60, 'target', v18(v37.target)), v37.currentTarget && v19(v37.currentTarget) && v2.setProperty(v60, 'currentTarget', v18(v37.currentTarget)), v2.setProperty(v60, 'preventDefault', v2.createNativeFunction(function() {
      v37.preventDefault();
    })), v2.setProperty(v60, 'stopPropagation', v2.createNativeFunction(function() {
      v37.stopPropagation();
    })), v2.setProperty(v60, 'stopImmediatePropagation', v2.createNativeFunction(function() {
      v37.stopImmediatePropagation();
    })), v60;
  }
  v2.setProperty(v30, 'addEventListener', v2.createNativeFunction(function(v37, v60) {
    if (!v37 || typeof v37 != 'string' || !v60 || typeof v60 != 'object')
      return;
    if (v37 = v37.toLowerCase(), !v12.includes(v37))
      throw new Error(`Event type "${ v37 }" is not allowed`);
    v3.settings.logCalls && console.log(v5.domain, 'addEventListener', this, v37, v60);
    let v58 = this.native;
    v9.has(v58) || v9.set(v58, new Map());
    let v59 = v9.get(v58);
    v59.has(v37) || v59.set(v37, []);
    let v61 = v59.get(v37);
    if (v61.length >= v8)
      throw new Error(`Maximum listeners (${ v8 }) reached for event "${ v37 }"`);
    if (v61.some(H => H.pseudo === v60))
      return;
    let v62 = function(H) {
      let v63 = v22(H);
      v13(v60, v63);
    };
    v61.push({
      pseudo: v60,
      native: v62
    }), v58.addEventListener(v37, v62);
  })), v2.setProperty(v30, 'removeEventListener', v2.createNativeFunction(function(v37, v60) {
    if (!v37 || typeof v37 != 'string' || !v60 || typeof v60 != 'object')
      return;
    v3.settings.logCalls && console.log(v5.domain, 'removeEventListener', this, v37, v60), v37 = v37.toLowerCase();
    let v58 = this.native;
    if (!v9.has(v58))
      return;
    let v59 = v9.get(v58);
    if (!v59.has(v37))
      return;
    let v61 = v59.get(v37),
      v62 = v61.findIndex(H => H.pseudo === v60);
    v62 !== -1 && (v58.removeEventListener(v37, v61[v62].native), v61.splice(v62, 1));
  }));
  let v38 = [
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
  for (let v37 of v38) {
    let v60 = 'on' + v37;
    v2.setProperty(v30, v60, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: v2.createNativeFunction(function() {
        let v58 = this.native;
        if (!v9.has(v58))
          return null;
        let v59 = v9.get(v58),
          v61 = `__${ v60 }`;
        return v59.get(v61) || null;
      }),
      set: v2.createNativeFunction(function(v58) {
        let v59 = this.native;
        v9.has(v59) || v9.set(v59, new Map());
        let v61 = v9.get(v59),
          v62 = `__${ v60 }`;
        v3.settings.logCalls && console.log(v5.domain, 'setOn' + v37, this, v58);
        let v64 = v61.get(v62 + '_native');
        if (v64 && (v59.removeEventListener(v37, v64), v61.delete(v62), v61.delete(v62 + '_native')), v58 && typeof v58 == 'object') {
          let v63 = function(gt) {
            let v65 = v22(gt);
            v13(v58, v65);
          };
          v59.addEventListener(v37, v63), v61.set(v62, v58), v61.set(v62 + '_native', v63);
        }
      })
    });
  }
  v4(v2, u, v5).extendElement(v30, v18), v39(v2, u, v5), v55(v2, u, v5.domain), v56(v2, u, v48, v5);
  let v36 = v2.nativeToPseudo({});
  v2.setProperty(u, 'document', v36);
  let v66 = {
    getElementById: function(v37) {
      let v60 = v48.querySelector(`#${ CSS.escape(v37) }`);
      return v18(v60);
    },
    getElementsByClassName: function(v37) {
      let v60 = Array.from(v48.getElementsByClassName(v37));
      return v23(v60);
    },
    getElementsByTagName: function(v37) {
      let v60 = Array.from(v48.getElementsByTagName(v37));
      return v23(v60);
    },
    querySelector: function(v37) {
      return v18(v48.querySelector(v37));
    },
    querySelectorAll: function(v37) {
      let v60 = Array.from(v48.querySelectorAll(v37));
      return v23(v60);
    },
    createElement: function(v37) {
      if (typeof v37 != 'string')
        throw new Error('Invalid tag');
      if (v37 = v37.toLowerCase().trim(), [
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
        ].includes(v37))
        throw new Error('Creating ' + v37 + ' elements is not allowed');
      return v3.settings.logCalls && console.log(v5.domain, 'createElement', this, v37), v18(document.createElement(v37));
    },
    createTextNode: function(v37) {
      return v3.settings.logCalls && console.log(v5.domain, 'createTextNode', this, v37), v18(document.createTextNode(v37));
    }
  };
  for (let [v37, v60] of Object.entries(v66))
    v2.setProperty(v36, v37, v2.createNativeFunction(v60));
  v2.setProperty(v36, 'body', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return v3.settings.logCalls && console.log(v5.domain, 'get body', this), v18(v48);
    })
  }), v2.setProperty(v36, 'documentElement', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return v3.settings.logCalls && console.log(v5.domain, 'get documentElement', this), v18(v48);
    })
  });
  let v67 = v2.nativeToPseudo({});
  v2.setProperty(u, 'location', v67), v2.setProperty(v67, 'href', Interpreter.VALUE_IN_DESCRIPTOR, {
    get: v2.createNativeFunction(function() {
      return `/t/${ v5.domain }${ v5.path }`;
    }),
    set: v2.createNativeFunction(function(v37) {
      if (typeof v37 == 'string') {
        v3.settings.logCalls && console.log(v5.domain, 'set href', this, v37);
        try {
          let v60 = new URL(v37, `http://${ v5.domain }`);
          if (v60.hostname && v60.hostname !== location.hostname)
            throw new Error('External URLs are not allowed');
          let v58 = v60.pathname + v60.search + v60.hash;
          if (v58.startsWith(`/t/${ v5.domain }/`) ? v58 = v58.substring(`/t/${ v5.domain }`.length) : v58 === `/t/${ v5.domain }` && (v58 = '/'), v58.startsWith('/') || (v58 = '/' + v58), v58.endsWith('.html') || v58 === '/' || v58 === '')
            v5.fetchContent(v58 || '/index.html'), v5.setActive(!0);
          else
            throw new Error('Only HTML files can be navigated to');
        } catch (v60) {
          if (v60.message.includes('not allowed') || v60.message.includes('Only HTML'))
            throw v60;
          let v58 = v37;
          if (v58.startsWith('/') || (v58 = '/' + v58), v58.endsWith('.html') || v58 === '/' || v58 === '')
            v5.fetchContent(v58 || '/index.html').then(() => v5.setActive(!0));
          else
            throw new Error('Only HTML files can be navigated to');
        }
      }
    })
  }), v2.setProperty(v67, 'reload', v2.createNativeFunction(function() {
    v5.fetchContent(v5.path, !0).then(() => v5.setActive(!0));
  }));
}
var v68 = {
    console: {
      log: function(...v2) {
        this.logCount++ > 1000 || console.log(`[${ this.tile.domain }]`, ...v2);
      },
      error: function(...v2) {
        this.logCount++ > 1000 || console.error(`[${ this.tile.domain }]`, ...v2);
      },
      warn: function(...v2) {
        this.logCount++ > 1000 || console.warn(`[${ this.tile.domain }]`, ...v2);
      }
    },
    alert(v2) {
      this.alertCount++ > 10 || alert(`[${ this.tile.domain }] ${ v2 }`);
    },
    prompt(v2) {
      if (!(this.alertCount++ > 10))
        return prompt(`[${ this.tile.domain }] ${ v2 }`);
    },
    confirm(v2) {
      if (!(this.alertCount++ > 10))
        return confirm(`[${ this.tile.domain }] ${ v2 }`);
    },
    atob(v2) {
      return atob(v2);
    },
    btoa(v2) {
      return btoa(v2);
    }
  },
  v69 = class {
    constructor(u) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = u, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter('', (v48, v5) => {
        let v6 = (v7, v8) => {
          for (let [v9, v10] of Object.entries(v7))
            if (typeof v10 == 'function')
              v48.setProperty(v8, v9, v48.createNativeFunction(v10.bind(this)));
            else if (typeof v10 == 'object' && v10 !== null) {
            let v11 = v48.nativeToPseudo({});
            v6(v10, v11), v48.setProperty(v8, v9, v11);
          }
        };
        v6(v68, v5), v57(v48, v5, this.tile.contentElement, this.tile), v48.setProperty(v5, 'embedded', v48.nativeToPseudo(!!this.tile.embed));
      }), this.runInterval = null, this.running = !1;
    }
    roughValueMemorySize() {
      let v70 = new Set(),
        v48 = [this.interpreter.getStateStack()],
        v5 = 0;
      for (; v48.length;) {
        let v6 = v48.pop(),
          v7 = typeof v6;
        if (v5 += 8, v7 === 'string' && !v70.has(v6))
          v70.add(v6), v5 += v6.length * 2;
        else if (v7 === 'object' && v6 !== null && !v70.has(v6)) {
          v70.add(v6);
          try {
            v48.push(...Object.keys(v6), ...Object.values(v6));
          } catch {}
        }
      }
      return v5;
    }
    start() {
      this.running || v3.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let v70 = 0; v70 < 5000; v70++)
            try {
              if (!this.interpreter.step()) {
                this.waitUntil = Date.now() + 50;
                break;
              }
              if (this.index++ % 500 === 0) {
                let v48 = this.roughValueMemorySize();
                if (v48 > 3000000) {
                  this.sizeLimitReached = !0, this.stop(), console.log(`[${ this.tile.domain }] Memory size limit reached: ${ v48 } bytes`);
                  break;
                }
              }
            } catch (v48) {
              console.error(v48), this.stop();
              break;
            }
      }, 0));
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1);
    }
    runCode(v70) {
      v3.settings.disableJS || this.interpreter.appendCode(v70);
    }
  },
  v71 = v69;
var v72 = document.getElementById('plot'),
  v73 = new CSSStyleSheet(),
  v74 = () => {
    v73.replaceSync(`
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
v74();
var v75 = new CSSStyleSheet();
v75.replaceSync(`
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
var v76 = class v2 {
  constructor(v70) {
    this.v26 = v70.v26 ?? 0, this.v18 = v70.v18 ?? 0, this.domain = v70.domain, this.free = !v70.domain, this.locked = !1, this.id = `${ this.v26 },${ this.v18 }`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = v70.path || '/index.html', this.content = '', this.lastRender = 0, this.preview = v70.nocontrols || !1, this.embed = v70.embed || !1, this.container = v70.container || v72, this.interpreter = null, this.render();
  }
  static toTilePosition(v70, v48) {
    return {
      v26: Math.floor(v70 / 250),
      v18: Math.floor(v48 / 250)
    };
  }
  render() {
    if (this.rendered || this.element)
      return;
    this.lastRender = Date.now(), this.rendered = !0;
    let v70 = document.createElement('div');
    v70.classList.add('tile'), this.free && v70.classList.add('f'), this.preview ? v70.style.cssText = 'width: 100%; height: 100%; position: relative;' : (v70.style.left = `${ this.v26 * 250 }px`, v70.style.top = `${ this.v18 * 250 }px`, this.v26 % 10 === 0 && v70.classList.add('b-left'), this.v18 % 10 === 0 && v70.classList.add('b-top')), this.element = v70;
    let v48 = document.createElement('div');
    v48.classList.add('tile-content'), this.preview && (v48.style.cssText = 'width: 100%; height: 100%;'), v48.addEventListener('click', async v6 => {
      let v7 = v6.composedPath()?.filter(v11 => v11 instanceof Element);
      if (!v7)
        return;
      let v8 = v7.findIndex(v11 => v11.isSameNode(v48));
      if (v8 === -1)
        return;
      let v10 = v7.slice(0, v8).find(v11 => v11.tagName === 'A');
      if (v10) {
        v6.preventDefault();
        try {
          let v11 = new URL(v10.href);
          if (v11.hostname !== location.hostname) {
            let v14 = document.createElement('a');
            v14.href = v10.href, v14.target = '_blank', v14.click();
            return;
          }
          let v13 = v11.pathname;
          if (v13.startsWith(`/t/${ this.domain }/`) || (v13 = `/t/${ this.domain }/${ v13 }`.replaceAll('//', '/')), v13.startsWith(`/t/${ this.domain }`) && (v13.endsWith('.html') || v13 === `/t/${ this.domain }/` || v13 === `/t/${ this.domain }`))
            await this.fetchContent(v13.replace(`/t/${ this.domain }`, '')), this.setActive(!0);
          else {
            let v14 = document.createElement('a');
            v14.href = v10.href, v14.target = '_blank', v14.click();
          }
        } catch (v11) {
          console.error(v11);
        }
      }
    }), this.shadow = v48.attachShadow({
      mode: 'open'
    });
    let v5 = document.createElement('div');
    v5.className = 'tile-body', this.embed && v5.classList.add('embedded'), v5.style = 'width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;', this.contentElement = v5, this.contentElement.innerHTML = this.preview ? 'Loading preview...' : `Loading ${ this.v26 }, ${ this.v18 }...`, this.shadow.appendChild(v5), v70.appendChild(v48), this.fonts = document.createElement('style'), v70.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(v70), v3.plot?.lockCache[this.v26 + ',' + this.v18] && this.setLocked(!0);
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null));
  }
  async fetchContent(v70, v48 = !1) {
    v70.startsWith('/') || (v70 = '/' + v70);
    let v5 = this.free ? `<div class="free">
                <p>${ this.locked ? 'Locked tile' : 'Free tile' } ${ this.v26 }, ${ this.v18 }</p>
            </div>` : this.path === v70 && this.content && !v48 ? this.content : await fetch(`/t/${ this.domain }${ v70 }`).then(v8 => v8.text()).catch(v8 => '<p>Error loading tile</p>');
    this.free ? this.shadow.adoptedStyleSheets = [v75] : this.shadow.adoptedStyleSheets = [v73], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = v70, this.contentElement.innerHTML = v5, this.content = v5;
    let v6 = this.contentElement.querySelectorAll('style');
    this.fonts.textContent = '';
    let v7 = 0;
    for (let v8 of v6) {
      if (v7 >= 3)
        break;
      let v9 = v8.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (v9)
        for (let v10 of v9) {
          if (v7 >= 3)
            break;
          this.fonts.textContent += v10, v7++;
        }
    }
    this.preview && this.setActive(!0);
  }
  executeScripts() {
    let v70 = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let v48 of v70)
      this.interpreter.runCode(v48.textContent);
    this.preview && this.interpreter.start();
  }
  setActive(v70) {
    if (this.element && (v70 && (this.interpreter || (this.interpreter = new v71(this), this.executeScripts()), this.interpreter.start()), v70 !== this.active)) {
      if (this.active = v70, v70) {
        if (this.element.classList.add('active'), this.contentElement.classList.add('active'), !this.preview && v3.ui) {
          let v5 = v3.ui.createVoteMenu(this);
          v5 && this.element.appendChild(v5);
          let v6 = v3.ui.createTileControl(this);
          if (this.element.appendChild(v6), v3.user?.admin || v3.user?.moderator) {
            let v7 = v3.ui.createAdminControl(this);
            this.element.appendChild(v7);
          }
          v3.plot?.activeTile && v3.plot.activeTile.setActive(!1), v3.plot && (v3.plot.activeTile = this), this.fetchAndShowClanBorders();
        }
        let v48 = this.contentElement.querySelectorAll('audio, video');
        for (let v5 of v48)
          v5.dataset.webtilesPaused === 'true' && (v5.dataset.webtilesPaused = !1, v5.play());
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), v3.plot.activeTile = null, this.element.classList.remove('active'), this.contentElement.classList.remove('active'), this.preview || (this.element.querySelector('.tile-vote-menu')?.remove(), this.element.querySelector('.tile-info')?.remove(), this.element.querySelector('.tile-admin-panel')?.remove(), v3.plot && (v3.plot.activeTile = null)), v2.clearClanBorders();
        let v48 = this.contentElement.querySelectorAll('audio, video');
        for (let v5 of v48)
          v5.paused || (v5.dataset.webtilesPaused = !0, v5.pause());
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain))
      try {
        let v48 = await (await v3.api.makeRequest(`/api/clans/tile-clan?domain=${ encodeURIComponent(this.domain) }`)).json();
        if (!v48.success || !v48.clan)
          return;
        let v5 = v48.clan.members;
        if (!v5 || v5.length <= 1)
          return;
        let v6 = new Set(v5.map(v7 => `${ v7.v26 },${ v7.v18 }`));
        for (let v7 of v5) {
          let v8 = v3.plot.tiles[`${ v7.v26 },${ v7.v18 }`];
          if (!v8?.element)
            continue;
          v8.element.classList.add('clan-highlight');
          let v9 = v6.has(`${ v7.v26 },${ v7.v18 - 1 }`),
            v10 = v6.has(`${ v7.v26 },${ v7.v18 + 1 }`),
            v11 = v6.has(`${ v7.v26 - 1 },${ v7.v18 }`),
            v13 = v6.has(`${ v7.v26 + 1 },${ v7.v18 }`);
          if (!v9) {
            let v14 = document.createElement('div');
            v14.className = 'clan-border clan-border-top', v8.element.appendChild(v14);
          }
          if (!v10) {
            let v14 = document.createElement('div');
            v14.className = 'clan-border clan-border-bottom', v8.element.appendChild(v14);
          }
          if (!v11) {
            let v14 = document.createElement('div');
            v14.className = 'clan-border clan-border-left', v8.element.appendChild(v14);
          }
          if (!v13) {
            let v14 = document.createElement('div');
            v14.className = 'clan-border clan-border-right', v8.element.appendChild(v14);
          }
        }
      } catch (v70) {
        console.error('Failed to fetch clan borders:', v70);
      }
  }
  static clearClanBorders() {
    if (v3.plot?.tiles)
      for (let v70 of Object.values(v3.plot.tiles))
        v70.element && (v70.element.classList.remove('clan-highlight'), v70.element.querySelectorAll('.clan-border').forEach(v5 => v5.remove()));
  }
  setDomain(v70) {
    this.domain = v70, this.free = !1, this.content = '', this.element && this.element.classList.remove('f'), this.fetchContent('/index.html');
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = '', this.element && this.element.classList.add('f'), this.fetchContent('/index.html');
  }
  setLocked(v70) {
    this.locked = v70, this.element && this.element.classList.toggle('locked', v70), this.fetchContent('/index.html', !0);
  }
};
var v77 = JSON.parse(document.getElementById('embed-data').textContent),
  v78 = document.getElementById('tile');
window.tile = new v76({
  domain: v77.domain,
  container: v78,
  nocontrols: !0,
  embed: !0,
  path: '/index.html',
  v26: v77.v26,
  v18: v77.v18
});
window.onmessage = v2 => {
  v2.data.type === 'update' && (window.tile.unrender(), v78.innerHTML = '', window.tile = new v76({
    domain: v77.domain,
    container: v78,
    nocontrols: !0,
    embed: !0,
    path: v2.data.path,
    v26: v77.v26,
    v18: v77.v18
  }));
};