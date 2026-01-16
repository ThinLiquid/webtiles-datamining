/* 86f28ecaeaf64f27a9aeba207a6959dc64966db31c1cca0bf0ac14657d3c1e8f */
var st = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === "true",
      disableJS: localStorage.disableJS === "true"
    }
  },
  ot = document.getElementById("user-data");
if (ot) try {
  let t = JSON.parse(ot.textContent);
  t && t.email_verified && (st.user = t)
} catch (t) {
  console.error(t)
}
var d = st;

function it(t, u, l) {
  let r = new WeakMap,
    h = 2048,
    N = 1e4,
    m = new WeakMap;

  function w(n) {}

  function b() {
    m.clear = new WeakMap
  }

  function R(n, s) {
    if (!n) return null;
    if (r.has(n)) return r.get(n);
    let f = t.createObject(U);
    return f.native = n, f.canvas = s, r.set(n, f), f
  }
  let I = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "CanvasGradient", I);
  let E = t.getProperty(I, "prototype");
  t.setProperty(E, "addColorStop", t.createNativeFunction(function(n, s) {
    this.native.addColorStop(n, s)
  }));

  function C(n) {
    let s = t.createObject(I);
    return s.native = n, s
  }
  let S = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "CanvasPattern", S);

  function y(n) {
    let s = t.createObject(S);
    return s.native = n, s
  }
  let i = t.createNativeFunction(function(n, s) {
    if (n > h || s > h) throw new Error(`ImageData size exceeds maximum (${h}x${h})`);
    d.settings.logCalls && console.log(l.domain, "create ImageData", this, n, s);
    let f = new ImageData(n, s);
    this.native = f, this.width = n, this.height = s
  }, !0);
  t.setProperty(u, "ImageData", i);
  let c = t.getProperty(i, "prototype");
  t.setProperty(c, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.width
    })
  }), t.setProperty(c, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.height
    })
  }), t.setProperty(c, "data", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let n = this.native.data,
        s = t.createObjectProto(t.ARRAY_PROTO);
      t.setProperty(s, "length", n.length);
      let f = t.nativeToPseudo({});
      t.setProperty(f, "length", n.length), t.setProperty(f, "get", t.createNativeFunction(function(v) {
        return n[v]
      })), t.setProperty(f, "set", t.createNativeFunction(function(v, p) {
        d.settings.logCalls && console.log(l.domain, "setImageData", this, v, p), n[v] = p
      }));
      for (let v = 0; v < Math.min(n.length, 1e3); v++)(p => {
        t.setProperty(f, p, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: t.createNativeFunction(function() {
            return n[p]
          }),
          set: t.createNativeFunction(function(A) {
            d.settings.logCalls && console.log(l.domain, "setImageData", this, p, A), n[p] = A
          })
        })
      })(v);
      return f
    })
  });

  function P(n) {
    let s = t.createObject(i);
    return s.native = n, s
  }
  let _ = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "TextMetrics", _);
  let F = t.getProperty(_, "prototype"),
    x = ["width", "actualBoundingBoxLeft", "actualBoundingBoxRight", "fontBoundingBoxAscent", "fontBoundingBoxDescent", "actualBoundingBoxAscent", "actualBoundingBoxDescent", "emHeightAscent", "emHeightDescent", "hangingBaseline", "alphabeticBaseline", "ideographicBaseline"];
  for (let n of x) t.setProperty(F, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[n]
    })
  });

  function j(n) {
    let s = t.createObject(_);
    return s.native = n, s
  }
  let $ = t.createNativeFunction(function(n) {
    n && n.native ? this.native = new Path2D(n.native) : typeof n == "string" ? this.native = new Path2D(n) : this.native = new Path2D
  }, !0);
  t.setProperty(u, "Path2D", $);
  let z = t.getProperty($, "prototype"),
    O = {
      addPath: function(n, s) {
        n?.native && this.native.addPath(n.native, s)
      },
      closePath: function() {
        this.native.closePath()
      },
      moveTo: function(n, s) {
        this.native.moveTo(n, s)
      },
      lineTo: function(n, s) {
        this.native.lineTo(n, s)
      },
      bezierCurveTo: function(n, s, f, v, p, A) {
        this.native.bezierCurveTo(n, s, f, v, p, A)
      },
      quadraticCurveTo: function(n, s, f, v) {
        this.native.quadraticCurveTo(n, s, f, v)
      },
      arc: function(n, s, f, v, p, A) {
        this.native.arc(n, s, f, v, p, A)
      },
      arcTo: function(n, s, f, v, p) {
        this.native.arcTo(n, s, f, v, p)
      },
      ellipse: function(n, s, f, v, p, A, D, k) {
        this.native.ellipse(n, s, f, v, p, A, D, k)
      },
      rect: function(n, s, f, v) {
        this.native.rect(n, s, f, v)
      },
      roundRect: function(n, s, f, v, p) {
        this.native.roundRect(n, s, f, v, p)
      }
    };
  for (let [n, s] of Object.entries(O)) t.setProperty(z, n, t.createNativeFunction(s));
  let U = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "CanvasRenderingContext2D", U);
  let q = t.getProperty(U, "prototype"),
    G = ["globalAlpha", "globalCompositeOperation", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "textAlign", "textBaseline", "direction", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "imageSmoothingEnabled", "imageSmoothingQuality", "filter"];
  for (let n of G) t.setProperty(q, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[n]
    }),
    set: t.createNativeFunction(function(s) {
      d.settings.logCalls && console.log(l.domain, "context set " + n, this, s), this.native[n] = s
    })
  });
  for (let n of ["fillStyle", "strokeStyle"]) t.setProperty(q, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let s = this.native[n];
      return s
    }),
    set: t.createNativeFunction(function(s) {
      s?.native ? this.native[n] = s.native : this.native[n] = s
    })
  });
  t.setProperty(q, "canvas", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.canvas
    })
  });
  let Q = {
    clearRect: function(n, s, f, v) {
      this.native, this.native.clearRect(n, s, f, v)
    },
    fillRect: function(n, s, f, v) {
      this.native, this.native.fillRect(n, s, f, v)
    },
    strokeRect: function(n, s, f, v) {
      this.native, this.native.strokeRect(n, s, f, v)
    },
    fillText: function(n, s, f, v) {
      this.native, v !== void 0 ? this.native.fillText(String(n).slice(0, 1e3), s, f, v) : this.native.fillText(String(n).slice(0, 1e3), s, f)
    },
    strokeText: function(n, s, f, v) {
      this.native, v !== void 0 ? this.native.strokeText(String(n).slice(0, 1e3), s, f, v) : this.native.strokeText(String(n).slice(0, 1e3), s, f)
    },
    measureText: function(n) {
      return j(this.native.measureText(String(n).slice(0, 1e3)))
    },
    getLineDash: function() {
      return t.nativeToPseudo(this.native.getLineDash())
    },
    setLineDash: function(n) {
      let s = t.pseudoToNative(n);
      this.native.setLineDash(s)
    },
    createLinearGradient: function(n, s, f, v) {
      return C(this.native.createLinearGradient(n, s, f, v))
    },
    createRadialGradient: function(n, s, f, v, p, A) {
      return C(this.native.createRadialGradient(n, s, f, v, p, A))
    },
    createConicGradient: function(n, s, f) {
      return C(this.native.createConicGradient(n, s, f))
    },
    createPattern: function(n, s) {
      let f = n?.native || n;
      if (!f) return null;
      let v = this.native.createPattern(f, s);
      return v ? y(v) : null
    },
    beginPath: function() {
      this.native.beginPath()
    },
    closePath: function() {
      this.native.closePath()
    },
    moveTo: function(n, s) {
      this.native.moveTo(n, s)
    },
    lineTo: function(n, s) {
      this.native.lineTo(n, s)
    },
    bezierCurveTo: function(n, s, f, v, p, A) {
      this.native.bezierCurveTo(n, s, f, v, p, A)
    },
    quadraticCurveTo: function(n, s, f, v) {
      this.native.quadraticCurveTo(n, s, f, v)
    },
    arc: function(n, s, f, v, p, A) {
      this.native.arc(n, s, f, v, p, A)
    },
    arcTo: function(n, s, f, v, p) {
      this.native.arcTo(n, s, f, v, p)
    },
    ellipse: function(n, s, f, v, p, A, D, k) {
      this.native.ellipse(n, s, f, v, p, A, D, k)
    },
    rect: function(n, s, f, v) {
      this.native.rect(n, s, f, v)
    },
    roundRect: function(n, s, f, v, p) {
      let A = t.pseudoToNative(p);
      this.native.roundRect(n, s, f, v, A)
    },
    fill: function(n, s) {
      this.native, n?.native ? this.native.fill(n.native, s) : this.native.fill(n)
    },
    stroke: function(n) {
      this.native, n?.native ? this.native.stroke(n.native) : this.native.stroke()
    },
    clip: function(n, s) {
      n?.native ? this.native.clip(n.native, s) : this.native.clip(n)
    },
    isPointInPath: function(n, s, f, v) {
      return n?.native ? this.native.isPointInPath(n.native, s, f, v) : this.native.isPointInPath(n, s, f)
    },
    isPointInStroke: function(n, s, f) {
      return n?.native ? this.native.isPointInStroke(n.native, s, f) : this.native.isPointInStroke(n, s)
    },
    getTransform: function() {
      let n = this.native.getTransform();
      return t.nativeToPseudo({
        a: n.a,
        b: n.b,
        c: n.c,
        d: n.d,
        e: n.e,
        f: n.f
      })
    },
    rotate: function(n) {
      this.native.rotate(n)
    },
    scale: function(n, s) {
      this.native.scale(n, s)
    },
    translate: function(n, s) {
      this.native.translate(n, s)
    },
    transform: function(n, s, f, v, p, A) {
      this.native.transform(n, s, f, v, p, A)
    },
    setTransform: function(n, s, f, v, p, A) {
      if (typeof n == "object" && n !== null) {
        let D = t.pseudoToNative(n);
        this.native.setTransform(D)
      } else this.native.setTransform(n, s, f, v, p, A)
    },
    resetTransform: function() {
      this.native.resetTransform()
    },
    drawImage: function(n, s, f, v, p, A, D, k, Y) {
      this.native;
      let e = n?.native || n;
      e && (k !== void 0 ? this.native.drawImage(e, s, f, v, p, A, D, k, Y) : v !== void 0 ? this.native.drawImage(e, s, f, v, p) : this.native.drawImage(e, s, f))
    },
    createImageData: function(n, s) {
      if (n?.native) return P(this.native.createImageData(n.native));
      if (n > h || s > h) throw new Error(`ImageData size exceeds maximum (${h}x${h})`);
      return P(this.native.createImageData(n, s))
    },
    getImageData: function(n, s, f, v) {
      if (f > h || v > h) throw new Error(`ImageData size exceeds maximum (${h}x${h})`);
      return P(this.native.getImageData(n, s, f, v))
    },
    putImageData: function(n, s, f, v, p, A, D) {
      this.native, n?.native && (v !== void 0 ? this.native.putImageData(n.native, s, f, v, p, A, D) : this.native.putImageData(n.native, s, f))
    },
    save: function() {
      this.native.save()
    },
    restore: function() {
      this.native.restore()
    },
    reset: function() {
      this.native.reset()
    }
  };
  for (let [n, s] of Object.entries(Q)) t.setProperty(q, n, t.createNativeFunction(s));
  return {
    extendElement: function(n, s) {
      t.setProperty(n, "getContext", t.createNativeFunction(function(f, v) {
        d.settings.logCalls && console.log(l.domain, "getContext", this, f, v);
        let p = this.native;
        if (p.tagName !== "CANVAS") throw new Error("getContext is only available on canvas elements");
        if (p.width > h && (p.width = h), p.height > h && (p.height = h), f === "2d") {
          let A = p.getContext("2d", v ? t.pseudoToNative(v) : void 0);
          return R(A, this)
        }
        throw new Error(`Context type "${f}" is not supported`)
      })), t.setProperty(n, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.width : this.native.width
        }),
        set: t.createNativeFunction(function(f) {
          d.settings.logCalls && console.log(l.domain, "set width", this, f), this.native.tagName === "CANVAS" && (this.native.width = Math.min(f, h))
        })
      }), t.setProperty(n, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.height : this.native.height
        }),
        set: t.createNativeFunction(function(f) {
          d.settings.logCalls && console.log(l.domain, "set height", this, f), this.native.tagName === "CANVAS" && (this.native.height = Math.min(f, h))
        })
      }), t.setProperty(n, "toDataURL", t.createNativeFunction(function(f, v) {
        if (this.native.tagName !== "CANVAS") throw new Error("toDataURL is only available on canvas elements");
        return d.settings.logCalls && console.log(l.domain, "toDataURL", this, f, v), this.native.toDataURL(f, v)
      }))
    },
    resetDrawCounts: b,
    contextToPseudo: R
  }
}

function at(t, u, l) {
  let m = 0,
    w = window.location.origin;

  function b(i) {
    if (typeof i != "string" || i.startsWith("/") || i.startsWith("./") || i.startsWith("../") || !i.startsWith("http://") && !i.startsWith("https://")) return !1;
    try {
      let c = new URL(i);
      if (c.origin === w || c.hostname === "kicya.net" || c.hostname.endsWith(".kicya.net") || c.hostname === "nekoweb.org") return !1;
      let P = c.hostname.toLowerCase();
      return !(P === "localhost" || P === "127.0.0.1" || P === "0.0.0.0" || P.startsWith("192.168.") || P.startsWith("10.") || P.startsWith("172.16.") || P.startsWith("172.17.") || P.startsWith("172.18.") || P.startsWith("172.19.") || P.startsWith("172.2") || P.startsWith("172.30.") || P.startsWith("172.31.") || P === "[::1]")
    } catch {
      return !1
    }
  }
  let R = 0,
    I = t.nativeToPseudo({});
  t.setProperty(u, "__xhrCallbacks", I);

  function E(i, ...c) {
    if (!i || typeof i != "object") return;
    let P = R++;
    t.setProperty(I, "fn" + P, i);
    let _ = c.map((x, j) => {
        let $ = "arg" + P + "_" + j;
        return t.setProperty(I, $, x), $
      }),
      F = _.map(x => `__xhrCallbacks.${x}`).join(",");
    t.appendCode(`__xhrCallbacks.fn${P}(${F}); delete __xhrCallbacks.fn${P}; ${_.map(x=>`delete __xhrCallbacks.${x}`).join("; ")};`)
  }
  let C = t.createNativeFunction(function() {
    d.settings.logCalls && console.log(l.domain, "XMLHttpRequest", this), this.native = new window.XMLHttpRequest, this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let c = this;
    this.native.onreadystatechange = function() {
      t.setProperty(c, "readyState", c.native.readyState), c.native.readyState === 4 && (t.setProperty(c, "status", c.native.status), t.setProperty(c, "statusText", c.native.statusText), t.setProperty(c, "responseText", c.native.responseText?.slice(0, 5242880) || ""), t.setProperty(c, "responseURL", c.native.responseURL), m = Math.max(0, m - 1)), c._eventHandlers.onreadystatechange && E(c._eventHandlers.onreadystatechange)
    }, this.native.onload = function() {
      c._eventHandlers.onload && E(c._eventHandlers.onload)
    }, this.native.onerror = function() {
      m = Math.max(0, m - 1), c._eventHandlers.onerror && E(c._eventHandlers.onerror)
    }, this.native.ontimeout = function() {
      m = Math.max(0, m - 1), c._eventHandlers.ontimeout && E(c._eventHandlers.ontimeout)
    }, this.native.onabort = function() {
      m = Math.max(0, m - 1), c._eventHandlers.onabort && E(c._eventHandlers.onabort)
    }, this.native.onprogress = function(P) {
      if (c._eventHandlers.onprogress) {
        let _ = t.nativeToPseudo({
          loaded: P.loaded,
          total: P.total,
          lengthComputable: P.lengthComputable
        });
        E(c._eventHandlers.onprogress, _)
      }
    }, this.native.onloadstart = function() {
      c._eventHandlers.onloadstart && E(c._eventHandlers.onloadstart)
    }, this.native.onloadend = function() {
      c._eventHandlers.onloadend && E(c._eventHandlers.onloadend)
    }, t.setProperty(this, "readyState", 0), t.setProperty(this, "status", 0), t.setProperty(this, "statusText", ""), t.setProperty(this, "responseText", ""), t.setProperty(this, "responseURL", "")
  }, !0);
  t.setProperty(u, "XMLHttpRequest", C);
  let S = t.getProperty(C, "prototype");
  t.setProperty(C, "UNSENT", 0), t.setProperty(C, "OPENED", 1), t.setProperty(C, "HEADERS_RECEIVED", 2), t.setProperty(C, "LOADING", 3), t.setProperty(C, "DONE", 4), t.setProperty(S, "UNSENT", 0), t.setProperty(S, "OPENED", 1), t.setProperty(S, "HEADERS_RECEIVED", 2), t.setProperty(S, "LOADING", 3), t.setProperty(S, "DONE", 4);
  let y = ["onreadystatechange", "onload", "onerror", "ontimeout", "onabort", "onprogress", "onloadstart", "onloadend"];
  for (let i of y) t.setProperty(S, i, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this._eventHandlers[i] || null
    }),
    set: t.createNativeFunction(function(c) {
      d.settings.logCalls && console.log(l.domain, "XMLHttpRequest set " + i, this, c), this._eventHandlers[i] = c
    })
  });
  t.setProperty(S, "timeout", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.timeout
    }),
    set: t.createNativeFunction(function(i) {
      this.native.timeout = Math.min(i, 3e4)
    })
  }), t.setProperty(S, "withCredentials", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.withCredentials
    }),
    set: t.createNativeFunction(function(i) {
      this.native.withCredentials = !1
    })
  }), t.setProperty(S, "responseType", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.responseType
    }),
    set: t.createNativeFunction(function(i) {
      (i === "" || i === "text" || i === "json") && (this.native.responseType = i)
    })
  }), t.setProperty(S, "response", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let i = this.native.response;
      return this.native.responseType === "json" ? t.nativeToPseudo(i) : typeof i == "string" ? i.slice(0, 5242880) : i
    })
  }), t.setProperty(S, "open", t.createNativeFunction(function(i, c, P, _, F) {
    if (!b(c)) throw new Error(`XHR request blocked: URL "${c}" is not allowed. Only absolute URLs to external origins are permitted.`);
    let x = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (i = String(i).toUpperCase(), !x.includes(i)) throw new Error(`HTTP method "${i}" is not allowed`);
    d.settings.logCalls && console.log(l.domain, "XMLHttpRequest open", this, i, c, P, _, F), this._method = i, this._url = c, this._async = P !== !1, this.native.open(i, c, this._async), this.native.timeout = 3e4, t.setProperty(this, "readyState", this.native.readyState)
  })), t.setProperty(S, "setRequestHeader", t.createNativeFunction(function(i, c) {
    if (["cookie", "cookie2", "set-cookie", "set-cookie2", "host", "origin", "referer"].includes(i.toLowerCase())) throw new Error(`Setting header "${i}" is not allowed`);
    d.settings.logCalls && console.log(l.domain, "XMLHttpRequest setRequestHeader", this, i, c), this._headers[i] = c, this.native.setRequestHeader(i, c)
  })), t.setProperty(S, "send", t.createNativeFunction(function(i) {
    if (m >= 5) throw new Error("Maximum concurrent requests (5) exceeded");
    d.settings.logCalls && console.log(l.domain, "XMLHttpRequest send", this, i), m++;
    let c = null;
    i != null && (typeof i == "string" ? c = i.slice(0, 5242880) : typeof i == "object" && (c = JSON.stringify(t.pseudoToNative(i)))), this.native.send(c)
  })), t.setProperty(S, "abort", t.createNativeFunction(function() {
    d.settings.logCalls && console.log(l.domain, "XMLHttpRequest abort", this), this.native.abort(), m = Math.max(0, m - 1)
  })), t.setProperty(S, "getResponseHeader", t.createNativeFunction(function(i) {
    return this.native.getResponseHeader(i)
  })), t.setProperty(S, "getAllResponseHeaders", t.createNativeFunction(function() {
    return this.native.getAllResponseHeaders()
  })), t.setProperty(S, "overrideMimeType", t.createNativeFunction(function(i) {
    this.native.overrideMimeType(i)
  }))
}
var Nt = "webtiles_storage",
  pt = 1,
  M = "localStorage",
  rt = 1024 * 1024,
  ct = 100,
  V = null,
  K = null;

function B() {
  return K || (K = new Promise((t, u) => {
    let l = indexedDB.open(Nt, pt);
    l.onerror = () => u(l.error), l.onsuccess = () => {
      V = l.result, t(V)
    }, l.onupgradeneeded = r => {
      let h = r.target.result;
      h.objectStoreNames.contains(M) || h.createObjectStore(M, {
        keyPath: ["site", "key"]
      }).createIndex("site", "site", {
        unique: !1
      })
    }
  }), K)
}
async function lt(t, u) {
  return await B(), new Promise((l, r) => {
    let m = V.transaction(M, "readonly").objectStore(M).get([t, u]);
    m.onsuccess = () => l(m.result?.value ?? null), m.onerror = () => r(m.error)
  })
}
async function Et(t, u, l) {
  return await B(), new Promise((r, h) => {
    let w = V.transaction(M, "readwrite").objectStore(M).put({
      site: t,
      key: u,
      value: l
    });
    w.onsuccess = () => r(), w.onerror = () => h(w.error)
  })
}
async function Ct(t, u) {
  return await B(), new Promise((l, r) => {
    let m = V.transaction(M, "readwrite").objectStore(M).delete([t, u]);
    m.onsuccess = () => l(), m.onerror = () => r(m.error)
  })
}
async function wt(t) {
  return await B(), new Promise((u, l) => {
    let m = V.transaction(M, "readonly").objectStore(M).index("site").getAll(t);
    m.onsuccess = () => {
      let w = m.result.map(b => b.key);
      u(w)
    }, m.onerror = () => l(m.error)
  })
}
async function ut(t) {
  return await B(), new Promise((u, l) => {
    let m = V.transaction(M, "readonly").objectStore(M).index("site").getAll(t);
    m.onsuccess = () => {
      let w = 0;
      for (let b of m.result) w += (b.key.length + b.value.length) * 2;
      u({
        size: w,
        count: m.result.length
      })
    }, m.onerror = () => l(m.error)
  })
}
async function St(t) {
  return await B(), new Promise((u, l) => {
    let m = V.transaction(M, "readwrite").objectStore(M).index("site").openCursor(t);
    m.onsuccess = w => {
      let b = w.target.result;
      b ? (b.delete(), b.continue()) : u()
    }, m.onerror = () => l(m.error)
  })
}

function ht(t, u, l) {
  let r = t.nativeToPseudo({});
  t.setProperty(r, "getItem", t.createAsyncFunction(function(h, N) {
    if (d.settings.logCalls && console.log(l, "localStorage.getItem", this, h), h == null) {
      N(null);
      return
    }
    h = String(h), lt(l, h).then(m => N(m)).catch(m => {
      console.error("localStorage.getItem error:", m), N(null)
    })
  })), t.setProperty(r, "setItem", t.createAsyncFunction(function(h, N, m) {
    if (d.settings.logCalls && console.log(l, "localStorage.setItem", this, h, N), h == null) {
      m();
      return
    }
    h = String(h), N = String(N), ut(l).then(({
      size: w,
      count: b
    }) => {
      lt(l, h).then(R => {
        if (R === null && b >= ct) throw new Error(`localStorage item limit exceeded (max ${ct} items)`);
        let E = R ? (h.length + R.length) * 2 : 0,
          C = (h.length + N.length) * 2;
        if (w - E + C > rt) throw new Error(`localStorage size limit exceeded (max ${rt/1024}KB)`);
        return Et(l, h, N)
      }).then(() => m()).catch(R => {
        throw console.error("localStorage.setItem error:", R), R
      })
    }).catch(w => {
      console.error("localStorage.setItem error:", w), m()
    })
  })), t.setProperty(r, "removeItem", t.createAsyncFunction(function(h, N) {
    if (d.settings.logCalls && console.log(l, "localStorage.removeItem", this, h), h == null) {
      N();
      return
    }
    h = String(h), Ct(l, h).then(() => N()).catch(m => {
      console.error("localStorage.removeItem error:", m), N()
    })
  })), t.setProperty(r, "clear", t.createAsyncFunction(function(h) {
    d.settings.logCalls && console.log(l, "localStorage.clear", this), St(l).then(() => h()).catch(N => {
      console.error("localStorage.clear error:", N), h()
    })
  })), t.setProperty(r, "key", t.createAsyncFunction(function(h, N) {
    h = parseInt(h) || 0, wt(l).then(m => {
      N(h >= 0 && h < m.length ? m[h] : null)
    }).catch(m => {
      console.error("localStorage.key error:", m), N(null)
    })
  })), t.setProperty(r, "getLength", t.createAsyncFunction(function(h) {
    ut(l).then(({
      count: N
    }) => h(N)).catch(N => {
      console.error("localStorage.getLength error:", N), h(0)
    })
  })), t.setProperty(u, "localStorage", r), t.setProperty(u, "sessionStorage", r)
}
B().catch(t => {
  console.error("Failed to initialize storage DB:", t)
});

function ft(t, u, l, r) {
  let h = t.createNativeFunction(function() {}, !0);
  t.setProperty(u, "DOMParser", h);
  let N = t.getProperty(h, "prototype");
  t.setProperty(N, "parseFromString", t.createNativeFunction(function(m, w) {
    if (d.settings.logCalls && console.log(r.domain, "DOMParser parseFromString", this, m, w), !["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"].includes(w)) throw new Error(`DOMParser: Unsupported MIME type "${w}"`);
    if (typeof m != "string" && (m = String(m)), m.length > 1e5) throw new Error("DOMParser: Input string too large (max 100KB)");
    let I = new DOMParser().parseFromString(m, w),
      E = t.createObjectProto(t.OBJECT_PROTO);

    function C(S) {
      if (S == null) return null;
      let y = t.createObjectProto(t.OBJECT_PROTO);
      return y.native = S, y.fromDOMParser = !0, t.setProperty(y, "nodeName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeName
        })
      }), t.setProperty(y, "nodeType", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeType
        })
      }), t.setProperty(y, "nodeValue", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeValue
        }),
        set: t.createNativeFunction(function(i) {
          d.settings.logCalls && console.log(r.domain, "DOMParser set nodeValue", this, i), this.native.nodeValue = i
        })
      }), t.setProperty(y, "textContent", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.textContent
        }),
        set: t.createNativeFunction(function(i) {
          d.settings.logCalls && console.log(r.domain, "DOMParser set textContent", this, i), this.native.textContent = String(i).slice(0, 5e4)
        })
      }), t.setProperty(y, "tagName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName
        })
      }), t.setProperty(y, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.id
        }),
        set: t.createNativeFunction(function(i) {
          d.settings.logCalls && console.log(r.domain, "DOMParser set id", this, i), this.native.id = String(i).slice(0, 100)
        })
      }), t.setProperty(y, "className", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.className
        }),
        set: t.createNativeFunction(function(i) {
          d.settings.logCalls && console.log(r.domain, "DOMParser set className", this, i), this.native.className = String(i).slice(0, 1e3)
        })
      }), t.setProperty(y, "innerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.innerHTML
        }),
        set: t.createNativeFunction(function(i) {
          throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.")
        })
      }), t.setProperty(y, "outerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.outerHTML
        })
      }), t.setProperty(y, "children", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let i = Array.from(this.native.children),
            c = t.createObjectProto(t.ARRAY_PROTO);
          for (let P = 0; P < i.length; P++) t.setProperty(c, P, C(i[P]));
          return t.setProperty(c, "length", i.length), c
        })
      }), t.setProperty(y, "childNodes", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let i = Array.from(this.native.childNodes),
            c = t.createObjectProto(t.ARRAY_PROTO);
          for (let P = 0; P < i.length; P++) t.setProperty(c, P, C(i[P]));
          return t.setProperty(c, "length", i.length), c
        })
      }), t.setProperty(y, "firstChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return C(this.native.firstChild)
        })
      }), t.setProperty(y, "lastChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return C(this.native.lastChild)
        })
      }), t.setProperty(y, "firstElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return C(this.native.firstElementChild)
        })
      }), t.setProperty(y, "lastElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return C(this.native.lastElementChild)
        })
      }), t.setProperty(y, "parentNode", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (d.settings.logCalls && console.log(r.domain, "DOMParser get parentNode", this), C(this.native.parentNode))
        })
      }), t.setProperty(y, "parentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (d.settings.logCalls && console.log(r.domain, "DOMParser get parentElement", this), C(this.native.parentElement))
        })
      }), t.setProperty(y, "nextSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (d.settings.logCalls && console.log(r.domain, "DOMParser get nextSibling", this), C(this.native.nextSibling))
        })
      }), t.setProperty(y, "previousSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(l) ? null : (d.settings.logCalls && console.log(r.domain, "DOMParser get previousSibling", this), C(this.native.previousSibling))
        })
      }), t.setProperty(y, "getAttributeNames", t.createNativeFunction(function() {
        if (!this.fromDOMParser) throw new Error("No access.");
        let i = Array.from(this.native.getAttributeNames()),
          c = t.createObjectProto(t.ARRAY_PROTO);
        for (let P = 0; P < i.length; P++) t.setProperty(c, P, i[P]);
        return t.setProperty(c, "length", i.length), c
      })), t.setProperty(y, "getAttribute", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.getAttribute(i)
      })), t.setProperty(y, "setAttribute", t.createNativeFunction(function(i, c) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (i = String(i).toLowerCase(), i.startsWith("on")) throw new Error("Event handlers are not allowed");
        this.native.setAttribute(i, String(c)), d.settings.logCalls && console.log(r.domain, "DOMParser set attribute", this, i, c)
      })), t.setProperty(y, "hasAttribute", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.hasAttribute(i)
      })), t.setProperty(y, "removeAttribute", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (this.native.isSameNode(l)) throw new Error("No access.");
        this.native.removeAttribute(i), d.settings.logCalls && console.log(r.domain, "DOMParser remove attribute", this, i)
      })), t.setProperty(y, "querySelector", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return C(this.native.querySelector(i))
      })), t.setProperty(y, "querySelectorAll", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let c = Array.from(this.native.querySelectorAll(i)),
          P = t.createObjectProto(t.ARRAY_PROTO);
        for (let _ = 0; _ < c.length; _++) t.setProperty(P, _, C(c[_]));
        return t.setProperty(P, "length", c.length), P
      })), t.setProperty(y, "getElementsByTagName", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let c = Array.from(this.native.getElementsByTagName(i)),
          P = t.createObjectProto(t.ARRAY_PROTO);
        for (let _ = 0; _ < c.length; _++) t.setProperty(P, _, C(c[_]));
        return t.setProperty(P, "length", c.length), P
      })), t.setProperty(y, "getElementsByClassName", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let c = Array.from(this.native.getElementsByClassName(i)),
          P = t.createObjectProto(t.ARRAY_PROTO);
        for (let _ = 0; _ < c.length; _++) t.setProperty(P, _, C(c[_]));
        return t.setProperty(P, "length", c.length), P
      })), t.setProperty(y, "getElementById", t.createNativeFunction(function(i) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return C(this.native.getElementById ? this.native.getElementById(i) : null)
      })), y
    }
    return t.setProperty(E, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return C(I.documentElement)
      })
    }), t.setProperty(E, "head", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return d.settings.logCalls && console.log(r.domain, "DOMParser get head", this), C(I.head)
      })
    }), t.setProperty(E, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return d.settings.logCalls && console.log(r.domain, "DOMParser get body", this), C(I.body)
      })
    }), t.setProperty(E, "title", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return I.title
      })
    }), t.setProperty(E, "querySelector", t.createNativeFunction(function(S) {
      return C(I.querySelector(S))
    })), t.setProperty(E, "querySelectorAll", t.createNativeFunction(function(S) {
      let y = Array.from(I.querySelectorAll(S)),
        i = t.createObjectProto(t.ARRAY_PROTO);
      for (let c = 0; c < y.length; c++) t.setProperty(i, c, C(y[c]));
      return t.setProperty(i, "length", y.length), i
    })), t.setProperty(E, "getElementById", t.createNativeFunction(function(S) {
      return C(I.getElementById(S))
    })), t.setProperty(E, "getElementsByTagName", t.createNativeFunction(function(S) {
      let y = Array.from(I.getElementsByTagName(S)),
        i = t.createObjectProto(t.ARRAY_PROTO);
      for (let c = 0; c < y.length; c++) t.setProperty(i, c, C(y[c]));
      return t.setProperty(i, "length", y.length), i
    })), t.setProperty(E, "getElementsByClassName", t.createNativeFunction(function(S) {
      let y = Array.from(I.getElementsByClassName(S)),
        i = t.createObjectProto(t.ARRAY_PROTO);
      for (let c = 0; c < y.length; c++) t.setProperty(i, c, C(y[c]));
      return t.setProperty(i, "length", y.length), i
    })), E
  }))
}

function dt(t, u, l, r) {
  let h = new WeakMap,
    N = 1e3,
    m = 5,
    w = new WeakMap,
    b = 0,
    R = t.nativeToPseudo({});
  t.setProperty(u, "__eventCallbacks", R);

  function I(e, o) {
    let a = b++;
    t.setProperty(R, "fn" + a, e), t.setProperty(R, "ev" + a, o), t.appendCode(`__eventCallbacks.fn${a}(__eventCallbacks.ev${a}); delete __eventCallbacks.fn${a}; delete __eventCallbacks.ev${a};`)
  }

  function E() {
    return l.getElementsByTagName("*").length
  }

  function C(e = 1) {
    if (E() + e > N) throw new Error(`DOM element limit exceeded (max ${N})`)
  }

  function S(e) {
    return e instanceof Element ? 1 + e.getElementsByTagName("*").length : 0
  }

  function y(e, o = !1) {
    if (e == null) return null;
    if (h.has(e)) return h.get(e);
    let a = e instanceof Element ? z : _,
      g = t.createObject(a);
    return g.native = e, g.fromDOMParser || (g.fromDOMParser = o), h.set(e, g), g
  }

  function i(e) {
    return e && l.contains(e)
  }

  function c(e) {
    return i(e) ? e : null
  }

  function P(e) {
    let o = t.createObjectProto(t.ARRAY_PROTO);
    for (let a = 0; a < e.length; a++) t.setProperty(o, a, y(e[a]));
    return t.setProperty(o, "length", e.length), o
  }
  let _ = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "Node", _);
  let F = t.getProperty(_, "prototype"),
    x = {
      firstChild: function() {
        return y(c(this.native.firstChild))
      },
      lastChild: function() {
        return y(c(this.native.lastChild))
      },
      parentNode: function() {
        return y(c(this.native.parentNode))
      },
      parentElement: function() {
        return y(c(this.native.parentElement))
      },
      nextSibling: function() {
        return y(c(this.native.nextSibling))
      },
      previousSibling: function() {
        return y(c(this.native.previousSibling))
      },
      childNodes: function() {
        let e = Array.from(this.native.childNodes).filter(i);
        return P(e)
      },
      nodeName: function() {
        return this.native.nodeName
      },
      nodeType: function() {
        return this.native.nodeType
      },
      nodeValue: function() {
        return this.native.nodeValue
      },
      textContent: function() {
        return this.native.textContent
      }
    },
    j = {
      textContent: function(e) {
        d.settings.logCalls && console.log(r.domain, "set textContent", this, e), this.native.textContent = e
      },
      nodeValue: function(e) {
        d.settings.logCalls && console.log(r.domain, "set nodeValue", this, e), this.native.nodeValue = e
      }
    };
  for (let [e, o] of Object.entries(x)) {
    let a = {
      get: t.createNativeFunction(o)
    };
    j[e] && (a.set = t.createNativeFunction(j[e])), t.setProperty(F, e, Interpreter.VALUE_IN_DESCRIPTOR, a)
  }
  let $ = {
    hasChildNodes: function() {
      return this.native.hasChildNodes()
    },
    appendChild: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
      return C(S(e.native)), this.native.appendChild(e.native), d.settings.logCalls && console.log(r.domain, "appendChild", this, e), e
    },
    append: function(e) {
      for (let o of e)
        if (o?.native) {
          if (o.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
          C(S(o.native)), this.native.appendChild(o.native)
        } return d.settings.logCalls && console.log(r.domain, "append", this, e), e
    },
    removeChild: function(e) {
      return !e?.native || !i(e.native) ? null : (d.settings.logCalls && console.log(r.domain, "removeChild", this, e), y(this.native.removeChild(e.native)))
    },
    insertBefore: function(e, o) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      C(S(e.native));
      let a = o?.native || null;
      return this.native.insertBefore(e.native, a), d.settings.logCalls && console.log(r.domain, "insertBefore", this, e, a), e
    },
    cloneNode: function(e) {
      return d.settings.logCalls && console.log(r.domain, "cloneNode", this, e), y(this.native.cloneNode(e), this.fromDOMParser)
    },
    contains: function(e) {
      return e?.native ? this.native.contains(e.native) : !1
    },
    remove: function() {
      if (this.native.isSameNode(l)) throw new Error("No access.");
      this.native.remove(), d.settings.logCalls && console.log(r.domain, "remove", this)
    },
    after: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      return C(S(e.native)), this.native.after(e.native), d.settings.logCalls && console.log(r.domain, "after", this, e), e
    },
    before: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(l)) throw new Error("No access.");
      return C(S(e.native)), this.native.before(e.native), d.settings.logCalls && console.log(r.domain, "before", this, e), e
    }
  };
  for (let [e, o] of Object.entries($)) t.setProperty(F, e, t.createNativeFunction(o));
  let z = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(u, "Element", z);
  let O = t.createObject(_);
  t.setProperty(z, "prototype", O);

  function U(e) {
    if (!e) return "";
    e = String(e);
    let o = e.toLowerCase().trim();
    if (o.startsWith("javascript:") || o.startsWith("vbscript:")) throw new Error("javascript: URLs are not allowed");
    if (o.startsWith("data:")) return e;
    try {
      let a = new URL(e, location.href);
      if (a.hostname !== location.hostname) throw new Error("External URLs are not allowed");
      let g = a.pathname + a.search + a.hash;
      return g.startsWith(`/t/${r.domain}/`) || (g = `/t/${r.domain}/${g}`.replaceAll("//", "/")), g
    } catch (a) {
      if (a.message.includes("not allowed")) throw a;
      let g = e;
      return !g.startsWith(`/t/${r.domain}/`) && !g.startsWith("#") && (g = `/t/${r.domain}/${g}`.replaceAll("//", "/")), g
    }
  }
  let q = {
      innerText: function() {
        return this.native.innerText
      },
      innerHTML: function() {
        return this.native.innerHTML
      },
      outerHTML: function() {
        return this.native.outerHTML
      },
      id: function() {
        return this.native.id
      },
      className: function() {
        return this.native.className
      },
      tagName: function() {
        return this.native.tagName
      },
      children: function() {
        let e = Array.from(this.native.children).filter(i);
        return P(e)
      },
      firstElementChild: function() {
        return y(c(this.native.firstElementChild))
      },
      lastElementChild: function() {
        return y(c(this.native.lastElementChild))
      },
      nextElementSibling: function() {
        return y(c(this.native.nextElementSibling))
      },
      previousElementSibling: function() {
        return y(c(this.native.previousElementSibling))
      },
      childElementCount: function() {
        return this.native.childElementCount
      },
      src: function() {
        return this.native.src
      },
      href: function() {
        return this.native.href
      },
      hidden: function() {
        return this.native.hidden
      },
      disabled: function() {
        return this.native.disabled
      },
      checked: function() {
        return this.native.checked
      },
      selected: function() {
        return this.native.selected
      },
      readOnly: function() {
        return this.native.readOnly
      },
      required: function() {
        return this.native.required
      },
      draggable: function() {
        return this.native.draggable
      },
      title: function() {
        return this.native.title
      },
      alt: function() {
        return this.native.alt
      },
      name: function() {
        return this.native.name
      },
      type: function() {
        return this.native.type
      },
      value: function() {
        return this.native.value
      },
      placeholder: function() {
        return this.native.placeholder
      },
      tabIndex: function() {
        return this.native.tabIndex
      },
      offsetWidth: function() {
        return this.native.offsetWidth
      },
      offsetHeight: function() {
        return this.native.offsetHeight
      },
      offsetTop: function() {
        return this.native.offsetTop
      },
      offsetLeft: function() {
        return this.native.offsetLeft
      },
      clientWidth: function() {
        return this.native.clientWidth
      },
      clientHeight: function() {
        return this.native.clientHeight
      },
      scrollWidth: function() {
        return this.native.scrollWidth
      },
      scrollHeight: function() {
        return this.native.scrollHeight
      },
      scrollTop: function() {
        return this.native.scrollTop
      },
      scrollLeft: function() {
        return this.native.scrollLeft
      },
      currentTime: function() {
        return this.native.currentTime || 0
      },
      duration: function() {
        return this.native.duration || 0
      },
      paused: function() {
        return this.native.paused !== void 0 ? this.native.paused : !0
      },
      ended: function() {
        return this.native.ended || !1
      },
      muted: function() {
        return this.native.muted || !1
      },
      volume: function() {
        return this.native.volume !== void 0 ? this.native.volume : 1
      },
      loop: function() {
        return this.native.loop || !1
      },
      autoplay: function() {
        return this.native.autoplay || !1
      },
      controls: function() {
        return this.native.controls || !1
      },
      playbackRate: function() {
        return this.native.playbackRate !== void 0 ? this.native.playbackRate : 1
      },
      defaultPlaybackRate: function() {
        return this.native.defaultPlaybackRate !== void 0 ? this.native.defaultPlaybackRate : 1
      },
      currentSrc: function() {
        return this.native.currentSrc || ""
      },
      readyState: function() {
        return this.native.readyState || 0
      },
      networkState: function() {
        return this.native.networkState || 0
      },
      seeking: function() {
        return this.native.seeking || !1
      },
      preload: function() {
        return this.native.preload || "auto"
      },
      poster: function() {
        return this.native.poster || ""
      },
      videoWidth: function() {
        return this.native.videoWidth || 0
      },
      videoHeight: function() {
        return this.native.videoHeight || 0
      }
    },
    G = {
      innerText: function(e) {
        this.native.innerText = e.slice(0, 1e3)
      },
      innerHTML: function(e) {
        throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.")
      },
      id: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.id = e, d.settings.logCalls && console.log(r.domain, "set id", this, e)
      },
      className: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.className = e, d.settings.logCalls && console.log(r.domain, "set className", this, e)
      },
      src: function(e) {
        this.native.src = U(e), d.settings.logCalls && console.log(r.domain, "set src", this, e)
      },
      href: function(e) {
        this.native.href = this.native.tagName === "A" ? e : U(e), d.settings.logCalls && console.log(r.domain, "set href", this, e)
      },
      hidden: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.hidden = !!e
      },
      disabled: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.disabled = !!e
      },
      checked: function(e) {
        this.native.checked = !!e
      },
      selected: function(e) {
        this.native.selected = !!e
      },
      readOnly: function(e) {
        this.native.readOnly = !!e
      },
      required: function(e) {
        this.native.required = !!e
      },
      draggable: function(e) {
        this.native.draggable = !!e
      },
      title: function(e) {
        this.native.title = String(e).slice(0, 1e3)
      },
      alt: function(e) {
        this.native.alt = String(e).slice(0, 1e3)
      },
      name: function(e) {
        this.native.name = String(e).slice(0, 100)
      },
      type: function(e) {
        this.native.type = String(e).slice(0, 50)
      },
      value: function(e) {
        this.native.value = String(e).slice(0, 1e4)
      },
      placeholder: function(e) {
        this.native.placeholder = String(e).slice(0, 500)
      },
      tabIndex: function(e) {
        this.native.tabIndex = parseInt(e) || 0
      },
      scrollTop: function(e) {
        this.native.scrollTop = e
      },
      scrollLeft: function(e) {
        this.native.scrollLeft = e
      },
      currentTime: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.currentTime = Math.max(0, Number(e) || 0))
      },
      muted: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.muted = !!e)
      },
      volume: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.volume = Math.max(0, Math.min(1, Number(e) || 0)))
      },
      loop: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.loop = !!e)
      },
      autoplay: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.autoplay = !!e)
      },
      controls: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.controls = !!e)
      },
      playbackRate: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.playbackRate = Math.max(.25, Math.min(4, Number(e) || 1)))
      },
      defaultPlaybackRate: function(e) {
        this.native instanceof HTMLMediaElement && (this.native.defaultPlaybackRate = Math.max(.25, Math.min(4, Number(e) || 1)))
      },
      preload: function(e) {
        if (this.native instanceof HTMLMediaElement) {
          let o = ["none", "metadata", "auto"];
          this.native.preload = o.includes(e) ? e : "auto"
        }
      },
      poster: function(e) {
        this.native instanceof HTMLVideoElement && (this.native.poster = U(e))
      }
    };
  for (let [e, o] of Object.entries(q)) {
    let a = {
      get: t.createNativeFunction(o)
    };
    G[e] && (a.set = t.createNativeFunction(G[e])), t.setProperty(O, e, Interpreter.VALUE_IN_DESCRIPTOR, a)
  }
  let Q = {
    getAttributeNames: function() {
      let e = Array.from(this.native.getAttributeNames()),
        o = t.createObjectProto(t.ARRAY_PROTO);
      for (let a = 0; a < e.length; a++) t.setProperty(o, a, e[a]);
      return t.setProperty(o, "length", e.length), o
    },
    getAttribute: function(e) {
      return this.native.getAttribute(e)
    },
    setAttribute: function(e, o) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (e = String(e).toLowerCase(), o = String(o), d.settings.logCalls && console.log(r.domain, "setAttribute", this, e, o), e === "style" && o.includes("animation-play-state") && o.includes("!important")) throw new Error("Cannot set animation-play-state to !important");
      if (e === "src" || e === "poster" || e === "data" || this.native.tagName !== "A" && e === "href") {
        this.native.setAttribute(e, U(o));
        return
      }
      if (e === "autoplay") throw new Error("autoplay is not allowed");
      if (e === "srcset") throw new Error("srcset is not allowed");
      if (e === "action" || e === "formaction") throw new Error("action and formaction are not allowed");
      if (e.startsWith("on")) throw new Error("Event handlers are not allowed. Use addEventListener instead.");
      if (e === "width" || e === "height") {
        let a = parseFloat(o);
        if (isNaN(a) || a < 0 || a > 4096) throw new Error("Invalid width or height")
      }
      this.native.setAttribute(e, o)
    },
    focus: function() {
      this.native.focus()
    },
    blur: function() {
      this.native.blur()
    },
    click: function() {
      this.native.click()
    },
    scrollIntoView: function(e) {
      e && typeof e == "object" ? this.native.scrollIntoView(t.pseudoToNative(e)) : this.native.scrollIntoView(e)
    },
    scrollTo: function(e, o) {
      this.native.scrollTo(e, o)
    },
    scrollBy: function(e, o) {
      this.native.scrollBy(e, o)
    },
    removeAttribute: function(e) {
      if (this.native.className === "tile-body") throw new Error("No access.");
      if (e = String(e).toLowerCase(), e === "target") throw new Error("removing target is not allowed");
      d.settings.logCalls && console.log(r.domain, "removeAttribute", this, e), this.native.removeAttribute(e)
    },
    hasAttribute: function(e) {
      return this.native.hasAttribute(e)
    },
    querySelector: function(e) {
      let o = this.native.querySelector(e);
      return y(c(o))
    },
    querySelectorAll: function(e) {
      let o = Array.from(this.native.querySelectorAll(e)).filter(i);
      return P(o)
    },
    getElementsByClassName: function(e) {
      let o = Array.from(this.native.getElementsByClassName(e)).filter(i);
      return P(o)
    },
    getElementsByTagName: function(e) {
      let o = Array.from(this.native.getElementsByTagName(e)).filter(i);
      return P(o)
    },
    closest: function(e) {
      let o = this.native.closest(e);
      for (; o && !l.contains(o);) o = null;
      return y(o)
    },
    matches: function(e) {
      return this.native.matches(e)
    },
    classList: function() {
      if (this.native.className === "tile-body") throw new Error("No access.");
      let e = this.native.classList;
      return t.nativeToPseudo({
        add: (...o) => e.add(...o),
        remove: (...o) => e.remove(...o),
        toggle: (o, a) => e.toggle(o, a),
        contains: o => e.contains(o),
        replace: (o, a) => e.replace(o, a)
      })
    },
    getBoundingClientRect: function() {
      let e = this.native.getBoundingClientRect();
      return t.nativeToPseudo({
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left
      })
    },
    play: function() {
      if (!(this.native instanceof HTMLMediaElement)) return t.createObjectProto(t.OBJECT_PROTO);
      if (!this.native.isConnected) throw new Error("Element is not connected to the DOM. Append it to the DOM before playing.");
      let e = t.createObjectProto(t.OBJECT_PROTO),
        o = this,
        a = null,
        g = null;
      return d.settings.logCalls && console.log(r.domain, "play", this), t.setProperty(e, "then", t.createNativeFunction(function(T) {
        return a = T, e
      })), t.setProperty(e, "catch", t.createNativeFunction(function(T) {
        return g = T, e
      })), o.native.play().then(() => {
        a && I(a, t.nativeToPseudo(void 0))
      }).catch(T => {
        g && I(g, t.nativeToPseudo({
          message: T.message,
          name: T.name
        }))
      }), e
    },
    pause: function() {
      this.native instanceof HTMLMediaElement && this.native.pause()
    },
    load: function() {
      this.native instanceof HTMLMediaElement && this.native.load()
    },
    canPlayType: function(e) {
      return this.native instanceof HTMLMediaElement ? this.native.canPlayType(String(e || "")) : ""
    },
    fastSeek: function(e) {
      this.native instanceof HTMLMediaElement && typeof this.native.fastSeek == "function" && this.native.fastSeek(Math.max(0, Number(e) || 0))
    },
    getAnimations: function(e) {
      if (!this.native.getAnimations) return P([]);
      let o = e ? {
          subtree: !!t.pseudoToNative(e)?.subtree
        } : {},
        a = this.native.getAnimations(o),
        g = t.createObjectProto(t.ARRAY_PROTO);
      for (let T = 0; T < a.length; T++) g.properties[T] = n(a[T]);
      return t.setProperty(g, "length", a.length), g
    }
  };
  for (let [e, o] of Object.entries(Q)) t.setProperty(O, e, t.createNativeFunction(o));

  function n(e) {
    let o = t.createObjectProto(t.OBJECT_PROTO);
    return t.setProperty(o, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.id
      })
    }), t.setProperty(o, "playState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.playState
      })
    }), t.setProperty(o, "pending", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.pending
      })
    }), t.setProperty(o, "replaceState", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.replaceState
      })
    }), t.setProperty(o, "currentTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.currentTime
      }),
      set: t.createNativeFunction(function(a) {
        e.currentTime = a
      })
    }), t.setProperty(o, "playbackRate", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.playbackRate
      }),
      set: t.createNativeFunction(function(a) {
        e.playbackRate = Math.max(-10, Math.min(10, Number(a) || 1))
      })
    }), t.setProperty(o, "startTime", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return e.startTime
      }),
      set: t.createNativeFunction(function(a) {
        e.startTime = a
      })
    }), t.setProperty(o, "play", t.createNativeFunction(function() {
      e.play()
    })), t.setProperty(o, "pause", t.createNativeFunction(function() {
      e.pause()
    })), t.setProperty(o, "cancel", t.createNativeFunction(function() {
      e.cancel()
    })), t.setProperty(o, "finish", t.createNativeFunction(function() {
      e.finish()
    })), t.setProperty(o, "reverse", t.createNativeFunction(function() {
      e.reverse()
    })), t.setProperty(o, "updatePlaybackRate", t.createNativeFunction(function(a) {
      e.updatePlaybackRate(Math.max(-10, Math.min(10, Number(a) || 1)))
    })), o
  }

  function s(e) {
    let o = t.createObjectProto(t.OBJECT_PROTO),
      a = e ? e.length : 0;
    return t.setProperty(o, "length", a), t.setProperty(o, "start", t.createNativeFunction(function(g) {
      if (!e || g < 0 || g >= e.length) throw new Error("Index out of bounds");
      return e.start(g)
    })), t.setProperty(o, "end", t.createNativeFunction(function(g) {
      if (!e || g < 0 || g >= e.length) throw new Error("Index out of bounds");
      return e.end(g)
    })), o
  }
  t.setProperty(O, "buffered", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? s(this.native.buffered) : s(null)
    })
  }), t.setProperty(O, "played", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? s(this.native.played) : s(null)
    })
  }), t.setProperty(O, "seekable", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? s(this.native.seekable) : s(null)
    })
  }), t.setProperty(O, "classList", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.classList,
        o = t.nativeToPseudo({});
      return t.setProperty(o, "add", t.createNativeFunction(function(...a) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        e.add(...a)
      })), t.setProperty(o, "remove", t.createNativeFunction(function(...a) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        e.remove(...a)
      })), t.setProperty(o, "toggle", t.createNativeFunction(function(a, g) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return e.toggle(a, g)
      })), t.setProperty(o, "contains", t.createNativeFunction(function(a) {
        return e.contains(a)
      })), t.setProperty(o, "replace", t.createNativeFunction(function(a, g) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return e.replace(a, g)
      })), o
    })
  }), t.setProperty(O, "style", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.style,
        o = t.nativeToPseudo({}),
        a = ["color", "backgroundColor", "width", "height", "margin", "padding", "border", "display", "position", "top", "left", "right", "bottom", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "opacity", "visibility", "overflow", "zIndex", "transform", "transition", "animation", "flexDirection", "justifyContent", "alignItems", "gap", "gridTemplateColumns", "gridTemplateRows"];
      for (let g of a) t.setProperty(o, g, Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return e[g]
        }),
        set: t.createNativeFunction(function(T) {
          e[g] = T, d.settings.logCalls && console.log(r.domain, "set style", this, g, T)
        })
      });
      return t.setProperty(o, "cssText", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return e.cssText
        }),
        set: t.createNativeFunction(function(g) {
          e.cssText = g, d.settings.logCalls && console.log(r.domain, "set cssText", this, g)
        })
      }), t.setProperty(o, "setProperty", t.createNativeFunction(function(g, T, L) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        e.setProperty(g, T, L), d.settings.logCalls && console.log(r.domain, "setProperty", this, g, T, L)
      })), t.setProperty(o, "getPropertyValue", t.createNativeFunction(function(g) {
        return e.getPropertyValue(g)
      })), t.setProperty(o, "removeProperty", t.createNativeFunction(function(g) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        return d.settings.logCalls && console.log(r.domain, "removeProperty", this, g), e.removeProperty(g)
      })), o
    })
  }), t.setProperty(O, "dataset", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.dataset,
        o = t.nativeToPseudo({});
      for (let a in e) t.setProperty(o, a, e[a]);
      return t.setProperty(o, "get", t.createNativeFunction(function(a) {
        return e[a]
      })), t.setProperty(o, "set", t.createNativeFunction(function(a, g) {
        e[a] = String(g).slice(0, 1e3), d.settings.logCalls && console.log(r.domain, "set dataset", this, a, g)
      })), t.setProperty(o, "delete", t.createNativeFunction(function(a) {
        delete e[a], d.settings.logCalls && console.log(r.domain, "delete dataset", this, a)
      })), t.setProperty(o, "has", t.createNativeFunction(function(a) {
        return a in e
      })), o
    })
  }), t.setProperty(O, "offsetParent", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return y(c(this.native.offsetParent))
    })
  });
  let f = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "focusin", "focusout", "input", "change", "submit", "reset", "touchstart", "touchend", "touchmove", "touchcancel", "wheel", "scroll", "resize", "dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop", "animationstart", "animationend", "animationiteration", "transitionstart", "transitionend", "transitioncancel", "contextmenu", "pointerdown", "pointerup", "pointermove", "pointerenter", "pointerleave", "pointerover", "pointerout", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];

  function v(e) {
    let o = t.nativeToPseudo({}),
      a = ["type", "bubbles", "cancelable", "defaultPrevented", "timeStamp"];
    for (let g of a) t.setProperty(o, g, e[g]);
    if (e instanceof MouseEvent || e instanceof PointerEvent) {
      let g = ["clientX", "clientY", "pageX", "pageY", "screenX", "screenY", "offsetX", "offsetY", "movementX", "movementY", "button", "buttons", "altKey", "ctrlKey", "shiftKey", "metaKey"];
      for (let T of g) t.setProperty(o, T, e[T])
    }
    if (e instanceof KeyboardEvent) {
      let g = ["key", "code", "keyCode", "charCode", "altKey", "ctrlKey", "shiftKey", "metaKey", "repeat"];
      for (let T of g) t.setProperty(o, T, e[T])
    }
    return typeof TouchEvent == "function" && e instanceof TouchEvent && (t.setProperty(o, "touches", t.nativeToPseudo({
      length: e.touches.length
    })), t.setProperty(o, "changedTouches", t.nativeToPseudo({
      length: e.changedTouches.length
    }))), typeof WheelEvent == "function" && e instanceof WheelEvent && (t.setProperty(o, "deltaX", e.deltaX), t.setProperty(o, "deltaY", e.deltaY), t.setProperty(o, "deltaZ", e.deltaZ), t.setProperty(o, "deltaMode", e.deltaMode)), e.target && i(e.target) && t.setProperty(o, "target", y(e.target)), e.currentTarget && i(e.currentTarget) && t.setProperty(o, "currentTarget", y(e.currentTarget)), t.setProperty(o, "preventDefault", t.createNativeFunction(function() {
      e.preventDefault()
    })), t.setProperty(o, "stopPropagation", t.createNativeFunction(function() {
      e.stopPropagation()
    })), t.setProperty(o, "stopImmediatePropagation", t.createNativeFunction(function() {
      e.stopImmediatePropagation()
    })), o
  }
  t.setProperty(O, "addEventListener", t.createNativeFunction(function(e, o) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    if (e = e.toLowerCase(), !f.includes(e)) throw new Error(`Event type "${e}" is not allowed`);
    d.settings.logCalls && console.log(r.domain, "addEventListener", this, e, o);
    let a = this.native;
    w.has(a) || w.set(a, new Map);
    let g = w.get(a);
    g.has(e) || g.set(e, []);
    let T = g.get(e);
    if (T.length >= m) throw new Error(`Maximum listeners (${m}) reached for event "${e}"`);
    if (T.some(H => H.pseudo === o)) return;
    let L = function(H) {
      let J = v(H);
      I(o, J)
    };
    T.push({
      pseudo: o,
      native: L
    }), a.addEventListener(e, L)
  })), t.setProperty(O, "removeEventListener", t.createNativeFunction(function(e, o) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    d.settings.logCalls && console.log(r.domain, "removeEventListener", this, e, o), e = e.toLowerCase();
    let a = this.native;
    if (!w.has(a)) return;
    let g = w.get(a);
    if (!g.has(e)) return;
    let T = g.get(e),
      L = T.findIndex(H => H.pseudo === o);
    L !== -1 && (a.removeEventListener(e, T[L].native), T.splice(L, 1))
  }));
  let p = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "input", "change", "submit", "touchstart", "touchend", "touchmove", "wheel", "scroll", "contextmenu", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];
  for (let e of p) {
    let o = "on" + e;
    t.setProperty(O, o, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        let a = this.native;
        if (!w.has(a)) return null;
        let g = w.get(a),
          T = `__${o}`;
        return g.get(T) || null
      }),
      set: t.createNativeFunction(function(a) {
        let g = this.native;
        w.has(g) || w.set(g, new Map);
        let T = w.get(g),
          L = `__${o}`;
        d.settings.logCalls && console.log(r.domain, "setOn" + e, this, a);
        let H = T.get(L + "_native");
        if (H && (g.removeEventListener(e, H), T.delete(L), T.delete(L + "_native")), a && typeof a == "object") {
          let J = function(yt) {
            let Pt = v(yt);
            I(a, Pt)
          };
          g.addEventListener(e, J), T.set(L, a), T.set(L + "_native", J)
        }
      })
    })
  }
  it(t, u, r).extendElement(O, y), at(t, u, r), ht(t, u, r.domain), ft(t, u, l, r);
  let D = t.nativeToPseudo({});
  t.setProperty(u, "document", D);
  let k = {
    getElementById: function(e) {
      let o = l.querySelector(`#${CSS.escape(e)}`);
      return y(o)
    },
    getElementsByClassName: function(e) {
      let o = Array.from(l.getElementsByClassName(e));
      return P(o)
    },
    getElementsByTagName: function(e) {
      let o = Array.from(l.getElementsByTagName(e));
      return P(o)
    },
    querySelector: function(e) {
      return y(l.querySelector(e))
    },
    querySelectorAll: function(e) {
      let o = Array.from(l.querySelectorAll(e));
      return P(o)
    },
    createElement: function(e) {
      if (typeof e != "string") throw new Error("Invalid tag");
      if (e = e.toLowerCase().trim(), ["script", "style", "iframe", "embed", "object", "frame", "frameset", "layer", "ilayer", "applet", "meta", "base", "link", "title", "source", "geolocation", "permission"].includes(e)) throw new Error("Creating " + e + " elements is not allowed");
      return d.settings.logCalls && console.log(r.domain, "createElement", this, e), y(document.createElement(e))
    },
    createTextNode: function(e) {
      return d.settings.logCalls && console.log(r.domain, "createTextNode", this, e), y(document.createTextNode(e))
    }
  };
  for (let [e, o] of Object.entries(k)) t.setProperty(D, e, t.createNativeFunction(o));
  t.setProperty(D, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return d.settings.logCalls && console.log(r.domain, "get body", this), y(l)
    })
  }), t.setProperty(D, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return d.settings.logCalls && console.log(r.domain, "get documentElement", this), y(l)
    })
  });
  let Y = t.nativeToPseudo({});
  t.setProperty(u, "location", Y), t.setProperty(Y, "href", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return `/t/${r.domain}${r.path}`
    }),
    set: t.createNativeFunction(function(e) {
      if (typeof e == "string") {
        d.settings.logCalls && console.log(r.domain, "set href", this, e);
        try {
          let o = new URL(e, `http://${r.domain}`);
          if (o.hostname && o.hostname !== location.hostname) throw new Error("External URLs are not allowed");
          let a = o.pathname + o.search + o.hash;
          if (a.startsWith(`/t/${r.domain}/`) ? a = a.substring(`/t/${r.domain}`.length) : a === `/t/${r.domain}` && (a = "/"), a.startsWith("/") || (a = "/" + a), a.endsWith(".html") || a === "/" || a === "") r.fetchContent(a || "/index.html"), r.setActive(!0);
          else throw new Error("Only HTML files can be navigated to")
        } catch (o) {
          if (o.message.includes("not allowed") || o.message.includes("Only HTML")) throw o;
          let a = e;
          if (a.startsWith("/") || (a = "/" + a), a.endsWith(".html") || a === "/" || a === "") r.fetchContent(a || "/index.html").then(() => r.setActive(!0));
          else throw new Error("Only HTML files can be navigated to")
        }
      }
    })
  }), t.setProperty(Y, "reload", t.createNativeFunction(function() {
    r.fetchContent(r.path, !0).then(() => r.setActive(!0))
  }))
}
var Tt = {
    console: {
      log: function(...t) {
        this.logCount++ > 1e3 || console.log(`[${this.tile.domain}]`, ...t)
      },
      error: function(...t) {
        this.logCount++ > 1e3 || console.error(`[${this.tile.domain}]`, ...t)
      },
      warn: function(...t) {
        this.logCount++ > 1e3 || console.warn(`[${this.tile.domain}]`, ...t)
      }
    },
    alert(t) {
      this.alertCount++ > 10 || alert(`[${this.tile.domain}] ${t}`)
    },
    prompt(t) {
      if (!(this.alertCount++ > 10)) return prompt(`[${this.tile.domain}] ${t}`)
    },
    confirm(t) {
      if (!(this.alertCount++ > 10)) return confirm(`[${this.tile.domain}] ${t}`)
    },
    atob(t) {
      return atob(t)
    },
    btoa(t) {
      return btoa(t)
    }
  },
  tt = class {
    constructor(u) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = u, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter("", (l, r) => {
        let h = (N, m) => {
          for (let [w, b] of Object.entries(N))
            if (typeof b == "function") l.setProperty(m, w, l.createNativeFunction(b.bind(this)));
            else if (typeof b == "object" && b !== null) {
            let R = l.nativeToPseudo({});
            h(b, R), l.setProperty(m, w, R)
          }
        };
        h(Tt, r), dt(l, r, this.tile.contentElement, this.tile), l.setProperty(r, "embedded", l.nativeToPseudo(!!this.tile.embed))
      }), this.runInterval = null, this.running = !1
    }
    roughValueMemorySize() {
      let u = new Set,
        l = [this.interpreter.getStateStack()],
        r = 0;
      for (; l.length;) {
        let h = l.pop(),
          N = typeof h;
        if (r += 8, N === "string" && !u.has(h)) u.add(h), r += h.length * 2;
        else if (N === "object" && h !== null && !u.has(h)) {
          u.add(h);
          try {
            l.push(...Object.keys(h), ...Object.values(h))
          } catch {}
        }
      }
      return r
    }
    start() {
      this.running || d.settings.disableJS || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let u = 0; u < 5e3; u++) try {
            if (!this.interpreter.step()) {
              this.waitUntil = Date.now() + 50;
              break
            }
            if (this.index++ % 500 === 0) {
              let l = this.roughValueMemorySize();
              if (l > 3e6) {
                this.sizeLimitReached = !0, this.stop(), console.log(`[${this.tile.domain}] Memory size limit reached: ${l} bytes`);
                break
              }
            }
          } catch (l) {
            console.error(l), this.stop();
            break
          }
      }, 0))
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1)
    }
    runCode(u) {
      d.settings.disableJS || this.interpreter.appendCode(u)
    }
  },
  mt = tt;
var It = document.getElementById("plot");
localStorage.getItem("lowend") || (localStorage.lowend = "true");
var et = new CSSStyleSheet,
  vt = () => {
    et.replaceSync(`
        .tile-body:not(.active) * {
            animation-play-state: paused !important;
        }
        ${localStorage.lowend,`
        .tile-body:not(.active) * {
            text-shadow: none !important;
            box-shadow: none !important;
            filter: none !important;
            backdrop-filter: none !important;
        }
        `}
    `)
  };
vt();
var gt = new CSSStyleSheet;
gt.replaceSync(`
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
var W = class t {
  constructor(u) {
    this.x = u.x ?? 0, this.y = u.y ?? 0, this.domain = u.domain, this.free = !u.domain, this.locked = !1, this.id = `${this.x},${this.y}`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = u.path || "/index.html", this.content = "", this.lastRender = 0, this.preview = u.nocontrols || !1, this.embed = u.embed || !1, this.container = u.container || It, this.interpreter = null, this.render()
  }
  static toTilePosition(u, l) {
    return {
      x: Math.floor(u / 250),
      y: Math.floor(l / 250)
    }
  }
  render() {
    if (this.rendered || this.element) return;
    this.lastRender = Date.now(), this.rendered = !0;
    let u = document.createElement("div");
    u.classList.add("tile"), this.free && u.classList.add("f"), this.preview ? u.style.cssText = "width: 100%; height: 100%; position: relative;" : (u.style.left = `${this.x*250}px`, u.style.top = `${this.y*250}px`, this.x % 10 === 0 && u.classList.add("b-left"), this.y % 10 === 0 && u.classList.add("b-top")), this.element = u;
    let l = document.createElement("div");
    l.classList.add("tile-content"), this.preview && (l.style.cssText = "width: 100%; height: 100%;"), l.addEventListener("click", async h => {
      let N = h.composedPath()?.filter(R => R instanceof Element);
      if (!N) return;
      let m = N.findIndex(R => R.isSameNode(l));
      if (m === -1) return;
      let b = N.slice(0, m).find(R => R.tagName === "A");
      if (b) {
        h.preventDefault();
        try {
          let R = new URL(b.href);
          if (R.hostname !== location.hostname) {
            let E = document.createElement("a");
            E.href = b.href, E.target = "_blank", E.click();
            return
          }
          let I = R.pathname;
          if (I.startsWith(`/t/${this.domain}/`) || (I = `/t/${this.domain}/${I}`.replaceAll("//", "/")), I.startsWith(`/t/${this.domain}`) && (I.endsWith(".html") || I === `/t/${this.domain}/` || I === `/t/${this.domain}`)) await this.fetchContent(I.replace(`/t/${this.domain}`, "")), this.setActive(!0);
          else {
            let E = document.createElement("a");
            E.href = b.href, E.target = "_blank", E.click()
          }
        } catch (R) {
          console.error(R)
        }
      }
    }), this.shadow = l.attachShadow({
      mode: "open"
    });
    let r = document.createElement("div");
    r.className = "tile-body", this.embed && r.classList.add("embedded"), r.style = "width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;", this.contentElement = r, this.contentElement.innerHTML = this.preview ? "Loading preview..." : `Loading ${this.x}, ${this.y}...`, this.shadow.appendChild(r), u.appendChild(l), this.fonts = document.createElement("style"), u.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(u), d.plot?.lockCache[this.x + "," + this.y] && this.setLocked(!0)
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null))
  }
  async fetchContent(u, l = !1) {
    u.startsWith("/") || (u = "/" + u);
    let r = this.free ? `<div class="free">
                <p>${this.locked?"Locked tile":"Free tile"} ${this.x}, ${this.y}</p>
            </div>` : this.path === u && this.content && !l ? this.content : await fetch(`/t/${this.domain}${u}`).then(m => m.text()).catch(m => "<p>Error loading tile</p>");
    this.free ? this.shadow.adoptedStyleSheets = [gt] : this.shadow.adoptedStyleSheets = [et], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = u, this.contentElement.innerHTML = r, this.content = r;
    let h = this.contentElement.querySelectorAll("style");
    this.fonts.textContent = "";
    let N = 0;
    for (let m of h) {
      if (N >= 3) break;
      let w = m.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (w)
        for (let b of w) {
          if (N >= 3) break;
          this.fonts.textContent += b, N++
        }
    }
    this.preview && this.setActive(!0)
  }
  executeScripts() {
    let u = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let l of u) this.interpreter.runCode(l.textContent);
    this.preview && this.interpreter.start()
  }
  setActive(u) {
    if (this.element && (u && (this.interpreter || (this.interpreter = new mt(this), this.executeScripts()), this.interpreter.start()), u !== this.active)) {
      if (this.active = u, u) {
        if (this.element.classList.add("active"), this.contentElement.classList.add("active"), !this.preview && d.ui) {
          let r = d.ui.createVoteMenu(this);
          r && this.element.appendChild(r);
          let h = d.ui.createTileControl(this);
          if (this.element.appendChild(h), d.user?.admin || d.user?.moderator) {
            let N = d.ui.createAdminControl(this);
            this.element.appendChild(N)
          }
          d.plot?.activeTile && d.plot.activeTile.setActive(!1), d.plot && (d.plot.activeTile = this), this.fetchAndShowClanBorders()
        }
        let l = this.contentElement.querySelectorAll("audio, video");
        for (let r of l) r.dataset.webtilesPaused === "true" && (r.dataset.webtilesPaused = !1, r.play())
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), d.plot.activeTile = null, this.element.classList.remove("active"), this.contentElement.classList.remove("active"), this.preview || (this.element.querySelector(".tile-vote-menu")?.remove(), this.element.querySelector(".tile-info")?.remove(), this.element.querySelector(".tile-admin-panel")?.remove(), d.plot && (d.plot.activeTile = null)), t.clearClanBorders();
        let l = this.contentElement.querySelectorAll("audio, video");
        for (let r of l) r.paused || (r.dataset.webtilesPaused = !0, r.pause())
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain)) try {
      let l = await (await d.api.makeRequest(`/api/clans/tile-clan?domain=${encodeURIComponent(this.domain)}`)).json();
      if (!l.success || !l.clan) return;
      let r = l.clan.members;
      if (!r || r.length <= 1) return;
      let h = new Set(r.map(N => `${N.x},${N.y}`));
      for (let N of r) {
        let m = d.plot.tiles[`${N.x},${N.y}`];
        if (!m?.element) continue;
        m.element.classList.add("clan-highlight");
        let w = h.has(`${N.x},${N.y-1}`),
          b = h.has(`${N.x},${N.y+1}`),
          R = h.has(`${N.x-1},${N.y}`),
          I = h.has(`${N.x+1},${N.y}`);
        if (!w) {
          let E = document.createElement("div");
          E.className = "clan-border clan-border-top", m.element.appendChild(E)
        }
        if (!b) {
          let E = document.createElement("div");
          E.className = "clan-border clan-border-bottom", m.element.appendChild(E)
        }
        if (!R) {
          let E = document.createElement("div");
          E.className = "clan-border clan-border-left", m.element.appendChild(E)
        }
        if (!I) {
          let E = document.createElement("div");
          E.className = "clan-border clan-border-right", m.element.appendChild(E)
        }
      }
    } catch (u) {
      console.error("Failed to fetch clan borders:", u)
    }
  }
  static clearClanBorders() {
    if (d.plot?.tiles)
      for (let u of Object.values(d.plot.tiles)) u.element && (u.element.classList.remove("clan-highlight"), u.element.querySelectorAll(".clan-border").forEach(r => r.remove()))
  }
  setDomain(u) {
    this.domain = u, this.free = !1, this.content = "", this.element && this.element.classList.remove("f"), this.fetchContent("/index.html")
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = "", this.element && this.element.classList.add("f"), this.fetchContent("/index.html")
  }
  static updateLowendStyles() {
    if (vt(), d.plot && d.plot.tiles)
      for (let u of Object.values(d.plot.tiles)) u.shadow && !u.free && (u.shadow.adoptedStyleSheets = [et])
  }
  setLocked(u) {
    this.locked = u, this.element && this.element.classList.toggle("locked", u), this.fetchContent("/index.html", !0)
  }
};
var X = JSON.parse(document.getElementById("embed-data").textContent),
  nt = document.getElementById("tile");
window.tile = new W({
  domain: X.domain,
  container: nt,
  nocontrols: !0,
  embed: !0,
  path: "/index.html",
  x: X.x,
  y: X.y
});
window.onmessage = t => {
  t.data.type === "update" && (window.tile.unrender(), nt.innerHTML = "", window.tile = new W({
    domain: X.domain,
    container: nt,
    nocontrols: !0,
    embed: !0,
    path: t.data.path,
    x: X.x,
    y: X.y
  }))
};