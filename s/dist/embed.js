var G = {
    user: null,
    settings: {
      logCalls: localStorage.logCalls === "true"
    }
  },
  st = document.getElementById("user-data");
if (st) try {
  let t = JSON.parse(st.textContent);
  t && t.email_verified && (G.user = t, G.user.admin || (G.settings.logCalls = !1))
} catch (t) {
  console.error(t)
}
var f = G;

function it(t, c, h, g) {
  let d = new WeakMap,
    l = 2048,
    P = 1e4,
    S = new WeakMap;

  function _(n) {}

  function C() {
    S.clear = new WeakMap
  }

  function T(n, i) {
    if (!n) return null;
    if (d.has(n)) return d.get(n);
    let u = t.createObject(z);
    return u.native = n, u.canvas = i, d.set(n, u), u
  }
  let N = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "CanvasGradient", N);
  let w = t.getProperty(N, "prototype");
  t.setProperty(w, "addColorStop", t.createNativeFunction(function(n, i) {
    this.native.addColorStop(n, i)
  }));

  function E(n) {
    let i = t.createObject(N);
    return i.native = n, i
  }
  let s = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "CanvasPattern", s);

  function r(n) {
    let i = t.createObject(s);
    return i.native = n, i
  }
  let y = t.createNativeFunction(function(n, i) {
    if (n > l || i > l) throw new Error(`ImageData size exceeds maximum (${l}x${l})`);
    f.settings.logCalls && console.log("create ImageData", this, n, i);
    let u = new ImageData(n, i);
    this.native = u, this.width = n, this.height = i
  }, !0);
  t.setProperty(c, "ImageData", y);
  let b = t.getProperty(y, "prototype");
  t.setProperty(b, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.width
    })
  }), t.setProperty(b, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.height
    })
  }), t.setProperty(b, "data", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let n = this.native.data,
        i = t.createObjectProto(t.ARRAY_PROTO);
      t.setProperty(i, "length", n.length);
      let u = t.nativeToPseudo({});
      t.setProperty(u, "length", n.length), t.setProperty(u, "get", t.createNativeFunction(function(v) {
        return n[v]
      })), t.setProperty(u, "set", t.createNativeFunction(function(v, p) {
        f.settings.logCalls && console.log("setImageData", this, v, p), n[v] = p
      }));
      for (let v = 0; v < Math.min(n.length, 1e3); v++)(p => {
        t.setProperty(u, p, Interpreter.VALUE_IN_DESCRIPTOR, {
          get: t.createNativeFunction(function() {
            return n[p]
          }),
          set: t.createNativeFunction(function(R) {
            f.settings.logCalls && console.log("setImageData", this, p, R), n[p] = R
          })
        })
      })(v);
      return u
    })
  });

  function M(n) {
    let i = t.createObject(y);
    return i.native = n, i
  }
  let L = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "TextMetrics", L);
  let X = t.getProperty(L, "prototype"),
    H = ["width", "actualBoundingBoxLeft", "actualBoundingBoxRight", "fontBoundingBoxAscent", "fontBoundingBoxDescent", "actualBoundingBoxAscent", "actualBoundingBoxDescent", "emHeightAscent", "emHeightDescent", "hangingBaseline", "alphabeticBaseline", "ideographicBaseline"];
  for (let n of H) t.setProperty(X, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[n]
    })
  });

  function J(n) {
    let i = t.createObject(L);
    return i.native = n, i
  }
  let B = t.createNativeFunction(function(n) {
    n && n.native ? this.native = new Path2D(n.native) : typeof n == "string" ? this.native = new Path2D(n) : this.native = new Path2D
  }, !0);
  t.setProperty(c, "Path2D", B);
  let A = t.getProperty(B, "prototype"),
    j = {
      addPath: function(n, i) {
        n?.native && this.native.addPath(n.native, i)
      },
      closePath: function() {
        this.native.closePath()
      },
      moveTo: function(n, i) {
        this.native.moveTo(n, i)
      },
      lineTo: function(n, i) {
        this.native.lineTo(n, i)
      },
      bezierCurveTo: function(n, i, u, v, p, R) {
        this.native.bezierCurveTo(n, i, u, v, p, R)
      },
      quadraticCurveTo: function(n, i, u, v) {
        this.native.quadraticCurveTo(n, i, u, v)
      },
      arc: function(n, i, u, v, p, R) {
        this.native.arc(n, i, u, v, p, R)
      },
      arcTo: function(n, i, u, v, p) {
        this.native.arcTo(n, i, u, v, p)
      },
      ellipse: function(n, i, u, v, p, R, x, F) {
        this.native.ellipse(n, i, u, v, p, R, x, F)
      },
      rect: function(n, i, u, v) {
        this.native.rect(n, i, u, v)
      },
      roundRect: function(n, i, u, v, p) {
        this.native.roundRect(n, i, u, v, p)
      }
    };
  for (let [n, i] of Object.entries(j)) t.setProperty(A, n, t.createNativeFunction(i));
  let z = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "CanvasRenderingContext2D", z);
  let V = t.getProperty(z, "prototype"),
    Q = ["globalAlpha", "globalCompositeOperation", "lineWidth", "lineCap", "lineJoin", "miterLimit", "lineDashOffset", "font", "textAlign", "textBaseline", "direction", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "imageSmoothingEnabled", "imageSmoothingQuality", "filter"];
  for (let n of Q) t.setProperty(V, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native[n]
    }),
    set: t.createNativeFunction(function(i) {
      f.settings.logCalls && console.log("context set " + n, this, i), this.native[n] = i
    })
  });
  for (let n of ["fillStyle", "strokeStyle"]) t.setProperty(V, n, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let i = this.native[n];
      return i
    }),
    set: t.createNativeFunction(function(i) {
      i?.native ? this.native[n] = i.native : this.native[n] = i
    })
  });
  t.setProperty(V, "canvas", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.canvas
    })
  });
  let tt = {
    clearRect: function(n, i, u, v) {
      this.native, this.native.clearRect(n, i, u, v)
    },
    fillRect: function(n, i, u, v) {
      this.native, this.native.fillRect(n, i, u, v)
    },
    strokeRect: function(n, i, u, v) {
      this.native, this.native.strokeRect(n, i, u, v)
    },
    fillText: function(n, i, u, v) {
      this.native, v !== void 0 ? this.native.fillText(String(n).slice(0, 1e3), i, u, v) : this.native.fillText(String(n).slice(0, 1e3), i, u)
    },
    strokeText: function(n, i, u, v) {
      this.native, v !== void 0 ? this.native.strokeText(String(n).slice(0, 1e3), i, u, v) : this.native.strokeText(String(n).slice(0, 1e3), i, u)
    },
    measureText: function(n) {
      return J(this.native.measureText(String(n).slice(0, 1e3)))
    },
    getLineDash: function() {
      return t.nativeToPseudo(this.native.getLineDash())
    },
    setLineDash: function(n) {
      let i = t.pseudoToNative(n);
      this.native.setLineDash(i)
    },
    createLinearGradient: function(n, i, u, v) {
      return E(this.native.createLinearGradient(n, i, u, v))
    },
    createRadialGradient: function(n, i, u, v, p, R) {
      return E(this.native.createRadialGradient(n, i, u, v, p, R))
    },
    createConicGradient: function(n, i, u) {
      return E(this.native.createConicGradient(n, i, u))
    },
    createPattern: function(n, i) {
      let u = n?.native || n;
      if (!u) return null;
      let v = this.native.createPattern(u, i);
      return v ? r(v) : null
    },
    beginPath: function() {
      this.native.beginPath()
    },
    closePath: function() {
      this.native.closePath()
    },
    moveTo: function(n, i) {
      this.native.moveTo(n, i)
    },
    lineTo: function(n, i) {
      this.native.lineTo(n, i)
    },
    bezierCurveTo: function(n, i, u, v, p, R) {
      this.native.bezierCurveTo(n, i, u, v, p, R)
    },
    quadraticCurveTo: function(n, i, u, v) {
      this.native.quadraticCurveTo(n, i, u, v)
    },
    arc: function(n, i, u, v, p, R) {
      this.native.arc(n, i, u, v, p, R)
    },
    arcTo: function(n, i, u, v, p) {
      this.native.arcTo(n, i, u, v, p)
    },
    ellipse: function(n, i, u, v, p, R, x, F) {
      this.native.ellipse(n, i, u, v, p, R, x, F)
    },
    rect: function(n, i, u, v) {
      this.native.rect(n, i, u, v)
    },
    roundRect: function(n, i, u, v, p) {
      let R = t.pseudoToNative(p);
      this.native.roundRect(n, i, u, v, R)
    },
    fill: function(n, i) {
      this.native, n?.native ? this.native.fill(n.native, i) : this.native.fill(n)
    },
    stroke: function(n) {
      this.native, n?.native ? this.native.stroke(n.native) : this.native.stroke()
    },
    clip: function(n, i) {
      n?.native ? this.native.clip(n.native, i) : this.native.clip(n)
    },
    isPointInPath: function(n, i, u, v) {
      return n?.native ? this.native.isPointInPath(n.native, i, u, v) : this.native.isPointInPath(n, i, u)
    },
    isPointInStroke: function(n, i, u) {
      return n?.native ? this.native.isPointInStroke(n.native, i, u) : this.native.isPointInStroke(n, i)
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
    scale: function(n, i) {
      this.native.scale(n, i)
    },
    translate: function(n, i) {
      this.native.translate(n, i)
    },
    transform: function(n, i, u, v, p, R) {
      this.native.transform(n, i, u, v, p, R)
    },
    setTransform: function(n, i, u, v, p, R) {
      if (typeof n == "object" && n !== null) {
        let x = t.pseudoToNative(n);
        this.native.setTransform(x)
      } else this.native.setTransform(n, i, u, v, p, R)
    },
    resetTransform: function() {
      this.native.resetTransform()
    },
    drawImage: function(n, i, u, v, p, R, x, F, e) {
      this.native;
      let o = n?.native || n;
      o && (F !== void 0 ? this.native.drawImage(o, i, u, v, p, R, x, F, e) : v !== void 0 ? this.native.drawImage(o, i, u, v, p) : this.native.drawImage(o, i, u))
    },
    createImageData: function(n, i) {
      if (n?.native) return M(this.native.createImageData(n.native));
      if (n > l || i > l) throw new Error(`ImageData size exceeds maximum (${l}x${l})`);
      return M(this.native.createImageData(n, i))
    },
    getImageData: function(n, i, u, v) {
      if (u > l || v > l) throw new Error(`ImageData size exceeds maximum (${l}x${l})`);
      return M(this.native.getImageData(n, i, u, v))
    },
    putImageData: function(n, i, u, v, p, R, x) {
      this.native, n?.native && (v !== void 0 ? this.native.putImageData(n.native, i, u, v, p, R, x) : this.native.putImageData(n.native, i, u))
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
  for (let [n, i] of Object.entries(tt)) t.setProperty(V, n, t.createNativeFunction(i));
  return {
    extendElement: function(n, i) {
      t.setProperty(n, "getContext", t.createNativeFunction(function(u, v) {
        f.settings.logCalls && console.log("getContext", this, u, v);
        let p = this.native;
        if (p.tagName !== "CANVAS") throw new Error("getContext is only available on canvas elements");
        if (p.width > l && (p.width = l), p.height > l && (p.height = l), u === "2d") {
          let R = p.getContext("2d", v ? t.pseudoToNative(v) : void 0);
          return T(R, this)
        }
        throw new Error(`Context type "${u}" is not supported`)
      })), t.setProperty(n, "width", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.width : this.native.width
        }),
        set: t.createNativeFunction(function(u) {
          f.settings.logCalls && console.log("set width", this, u), this.native.tagName === "CANVAS" && (this.native.width = Math.min(u, l))
        })
      }), t.setProperty(n, "height", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName === "CANVAS" ? this.native.height : this.native.height
        }),
        set: t.createNativeFunction(function(u) {
          f.settings.logCalls && console.log("set height", this, u), this.native.tagName === "CANVAS" && (this.native.height = Math.min(u, l))
        })
      }), t.setProperty(n, "toDataURL", t.createNativeFunction(function(u, v) {
        if (this.native.tagName !== "CANVAS") throw new Error("toDataURL is only available on canvas elements");
        return f.settings.logCalls && console.log("toDataURL", this, u, v), this.native.toDataURL(u, v)
      }))
    },
    resetDrawCounts: C,
    contextToPseudo: T
  }
}

function at(t, c) {
  let l = 0,
    P = window.location.origin;

  function S(s) {
    if (typeof s != "string" || s.startsWith("/") || s.startsWith("./") || s.startsWith("../") || !s.startsWith("http://") && !s.startsWith("https://")) return !1;
    try {
      let r = new URL(s);
      if (r.origin === P || r.hostname === "kicya.net" || r.hostname.endsWith(".kicya.net") || r.hostname === "nekoweb.org") return !1;
      let y = r.hostname.toLowerCase();
      return !(y === "localhost" || y === "127.0.0.1" || y === "0.0.0.0" || y.startsWith("192.168.") || y.startsWith("10.") || y.startsWith("172.16.") || y.startsWith("172.17.") || y.startsWith("172.18.") || y.startsWith("172.19.") || y.startsWith("172.2") || y.startsWith("172.30.") || y.startsWith("172.31.") || y === "[::1]")
    } catch {
      return !1
    }
  }
  let _ = 0,
    C = t.nativeToPseudo({});
  t.setProperty(c, "__xhrCallbacks", C);

  function T(s, ...r) {
    if (!s || typeof s != "object") return;
    let y = _++;
    t.setProperty(C, "fn" + y, s);
    let b = r.map((L, X) => {
        let H = "arg" + y + "_" + X;
        return t.setProperty(C, H, L), H
      }),
      M = b.map(L => `__xhrCallbacks.${L}`).join(",");
    t.appendCode(`__xhrCallbacks.fn${y}(${M}); delete __xhrCallbacks.fn${y}; ${b.map(L=>`delete __xhrCallbacks.${L}`).join("; ")};`)
  }
  let N = t.createNativeFunction(function() {
    f.settings.logCalls && console.log("XMLHttpRequest", this), this.native = new window.XMLHttpRequest, this._method = null, this._url = null, this._async = !0, this._headers = {}, this._eventHandlers = {};
    let r = this;
    this.native.onreadystatechange = function() {
      t.setProperty(r, "readyState", r.native.readyState), r.native.readyState === 4 && (t.setProperty(r, "status", r.native.status), t.setProperty(r, "statusText", r.native.statusText), t.setProperty(r, "responseText", r.native.responseText?.slice(0, 5242880) || ""), t.setProperty(r, "responseURL", r.native.responseURL), l = Math.max(0, l - 1)), r._eventHandlers.onreadystatechange && T(r._eventHandlers.onreadystatechange)
    }, this.native.onload = function() {
      r._eventHandlers.onload && T(r._eventHandlers.onload)
    }, this.native.onerror = function() {
      l = Math.max(0, l - 1), r._eventHandlers.onerror && T(r._eventHandlers.onerror)
    }, this.native.ontimeout = function() {
      l = Math.max(0, l - 1), r._eventHandlers.ontimeout && T(r._eventHandlers.ontimeout)
    }, this.native.onabort = function() {
      l = Math.max(0, l - 1), r._eventHandlers.onabort && T(r._eventHandlers.onabort)
    }, this.native.onprogress = function(y) {
      if (r._eventHandlers.onprogress) {
        let b = t.nativeToPseudo({
          loaded: y.loaded,
          total: y.total,
          lengthComputable: y.lengthComputable
        });
        T(r._eventHandlers.onprogress, b)
      }
    }, this.native.onloadstart = function() {
      r._eventHandlers.onloadstart && T(r._eventHandlers.onloadstart)
    }, this.native.onloadend = function() {
      r._eventHandlers.onloadend && T(r._eventHandlers.onloadend)
    }, t.setProperty(this, "readyState", 0), t.setProperty(this, "status", 0), t.setProperty(this, "statusText", ""), t.setProperty(this, "responseText", ""), t.setProperty(this, "responseURL", "")
  }, !0);
  t.setProperty(c, "XMLHttpRequest", N);
  let w = t.getProperty(N, "prototype");
  t.setProperty(N, "UNSENT", 0), t.setProperty(N, "OPENED", 1), t.setProperty(N, "HEADERS_RECEIVED", 2), t.setProperty(N, "LOADING", 3), t.setProperty(N, "DONE", 4), t.setProperty(w, "UNSENT", 0), t.setProperty(w, "OPENED", 1), t.setProperty(w, "HEADERS_RECEIVED", 2), t.setProperty(w, "LOADING", 3), t.setProperty(w, "DONE", 4);
  let E = ["onreadystatechange", "onload", "onerror", "ontimeout", "onabort", "onprogress", "onloadstart", "onloadend"];
  for (let s of E) t.setProperty(w, s, Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this._eventHandlers[s] || null
    }),
    set: t.createNativeFunction(function(r) {
      f.settings.logCalls && console.log("XMLHttpRequest set " + s, this, r), this._eventHandlers[s] = r
    })
  });
  t.setProperty(w, "timeout", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.timeout
    }),
    set: t.createNativeFunction(function(s) {
      this.native.timeout = Math.min(s, 3e4)
    })
  }), t.setProperty(w, "withCredentials", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.withCredentials
    }),
    set: t.createNativeFunction(function(s) {
      this.native.withCredentials = !1
    })
  }), t.setProperty(w, "responseType", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native.responseType
    }),
    set: t.createNativeFunction(function(s) {
      (s === "" || s === "text" || s === "json") && (this.native.responseType = s)
    })
  }), t.setProperty(w, "response", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let s = this.native.response;
      return this.native.responseType === "json" ? t.nativeToPseudo(s) : typeof s == "string" ? s.slice(0, 5242880) : s
    })
  }), t.setProperty(w, "open", t.createNativeFunction(function(s, r, y, b, M) {
    if (!S(r)) throw new Error(`XHR request blocked: URL "${r}" is not allowed. Only absolute URLs to external origins are permitted.`);
    let L = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (s = String(s).toUpperCase(), !L.includes(s)) throw new Error(`HTTP method "${s}" is not allowed`);
    f.settings.logCalls && console.log("XMLHttpRequest open", this, s, r, y, b, M), this._method = s, this._url = r, this._async = y !== !1, this.native.open(s, r, this._async), this.native.timeout = 3e4, t.setProperty(this, "readyState", this.native.readyState)
  })), t.setProperty(w, "setRequestHeader", t.createNativeFunction(function(s, r) {
    if (["cookie", "cookie2", "set-cookie", "set-cookie2", "host", "origin", "referer"].includes(s.toLowerCase())) throw new Error(`Setting header "${s}" is not allowed`);
    f.settings.logCalls && console.log("XMLHttpRequest setRequestHeader", this, s, r), this._headers[s] = r, this.native.setRequestHeader(s, r)
  })), t.setProperty(w, "send", t.createNativeFunction(function(s) {
    if (l >= 5) throw new Error("Maximum concurrent requests (5) exceeded");
    f.settings.logCalls && console.log("XMLHttpRequest send", this, s), l++;
    let r = null;
    s != null && (typeof s == "string" ? r = s.slice(0, 5242880) : typeof s == "object" && (r = JSON.stringify(t.pseudoToNative(s)))), this.native.send(r)
  })), t.setProperty(w, "abort", t.createNativeFunction(function() {
    f.settings.logCalls && console.log("XMLHttpRequest abort", this), this.native.abort(), l = Math.max(0, l - 1)
  })), t.setProperty(w, "getResponseHeader", t.createNativeFunction(function(s) {
    return this.native.getResponseHeader(s)
  })), t.setProperty(w, "getAllResponseHeaders", t.createNativeFunction(function() {
    return this.native.getAllResponseHeaders()
  })), t.setProperty(w, "overrideMimeType", t.createNativeFunction(function(s) {
    this.native.overrideMimeType(s)
  }))
}
var Nt = "webtiles_storage",
  Et = 1,
  D = "localStorage",
  rt = 1024 * 1024,
  ct = 100,
  k = null,
  K = null;

function $() {
  return K || (K = new Promise((t, c) => {
    let h = indexedDB.open(Nt, Et);
    h.onerror = () => c(h.error), h.onsuccess = () => {
      k = h.result, t(k)
    }, h.onupgradeneeded = g => {
      let d = g.target.result;
      d.objectStoreNames.contains(D) || d.createObjectStore(D, {
        keyPath: ["site", "key"]
      }).createIndex("site", "site", {
        unique: !1
      })
    }
  }), K)
}
async function lt(t, c) {
  return await $(), new Promise((h, g) => {
    let P = k.transaction(D, "readonly").objectStore(D).get([t, c]);
    P.onsuccess = () => h(P.result?.value ?? null), P.onerror = () => g(P.error)
  })
}
async function pt(t, c, h) {
  return await $(), new Promise((g, d) => {
    let S = k.transaction(D, "readwrite").objectStore(D).put({
      site: t,
      key: c,
      value: h
    });
    S.onsuccess = () => g(), S.onerror = () => d(S.error)
  })
}
async function Ct(t, c) {
  return await $(), new Promise((h, g) => {
    let P = k.transaction(D, "readwrite").objectStore(D).delete([t, c]);
    P.onsuccess = () => h(), P.onerror = () => g(P.error)
  })
}
async function wt(t) {
  return await $(), new Promise((c, h) => {
    let P = k.transaction(D, "readonly").objectStore(D).index("site").getAll(t);
    P.onsuccess = () => {
      let S = P.result.map(_ => _.key);
      c(S)
    }, P.onerror = () => h(P.error)
  })
}
async function ut(t) {
  return await $(), new Promise((c, h) => {
    let P = k.transaction(D, "readonly").objectStore(D).index("site").getAll(t);
    P.onsuccess = () => {
      let S = 0;
      for (let _ of P.result) S += (_.key.length + _.value.length) * 2;
      c({
        size: S,
        count: P.result.length
      })
    }, P.onerror = () => h(P.error)
  })
}
async function St(t) {
  return await $(), new Promise((c, h) => {
    let P = k.transaction(D, "readwrite").objectStore(D).index("site").openCursor(t);
    P.onsuccess = S => {
      let _ = S.target.result;
      _ ? (_.delete(), _.continue()) : c()
    }, P.onerror = () => h(P.error)
  })
}

function ht(t, c, h) {
  let g = t.nativeToPseudo({});
  t.setProperty(g, "getItem", t.createAsyncFunction(function(d, l) {
    if (f.settings.logCalls && console.log("localStorage.getItem", this, d), d == null) {
      l(null);
      return
    }
    d = String(d), lt(h, d).then(P => l(P)).catch(P => {
      console.error("localStorage.getItem error:", P), l(null)
    })
  })), t.setProperty(g, "setItem", t.createAsyncFunction(function(d, l, P) {
    if (f.settings.logCalls && console.log("localStorage.setItem", this, d, l), d == null) {
      P();
      return
    }
    d = String(d), l = String(l), ut(h).then(({
      size: S,
      count: _
    }) => {
      lt(h, d).then(C => {
        if (C === null && _ >= ct) throw new Error(`localStorage item limit exceeded (max ${ct} items)`);
        let N = C ? (d.length + C.length) * 2 : 0,
          w = (d.length + l.length) * 2;
        if (S - N + w > rt) throw new Error(`localStorage size limit exceeded (max ${rt/1024}KB)`);
        return pt(h, d, l)
      }).then(() => P()).catch(C => {
        throw console.error("localStorage.setItem error:", C), C
      })
    }).catch(S => {
      console.error("localStorage.setItem error:", S), P()
    })
  })), t.setProperty(g, "removeItem", t.createAsyncFunction(function(d, l) {
    if (f.settings.logCalls && console.log("localStorage.removeItem", this, d), d == null) {
      l();
      return
    }
    d = String(d), Ct(h, d).then(() => l()).catch(P => {
      console.error("localStorage.removeItem error:", P), l()
    })
  })), t.setProperty(g, "clear", t.createAsyncFunction(function(d) {
    f.settings.logCalls && console.log("localStorage.clear", this), St(h).then(() => d()).catch(l => {
      console.error("localStorage.clear error:", l), d()
    })
  })), t.setProperty(g, "key", t.createAsyncFunction(function(d, l) {
    d = parseInt(d) || 0, wt(h).then(P => {
      l(d >= 0 && d < P.length ? P[d] : null)
    }).catch(P => {
      console.error("localStorage.key error:", P), l(null)
    })
  })), t.setProperty(g, "getLength", t.createAsyncFunction(function(d) {
    ut(h).then(({
      count: l
    }) => d(l)).catch(l => {
      console.error("localStorage.getLength error:", l), d(0)
    })
  })), t.setProperty(c, "localStorage", g), t.setProperty(c, "sessionStorage", g)
}
$().catch(t => {
  console.error("Failed to initialize storage DB:", t)
});

function ft(t, c, h) {
  let g = t.createNativeFunction(function() {}, !0);
  t.setProperty(c, "DOMParser", g);
  let d = t.getProperty(g, "prototype");
  t.setProperty(d, "parseFromString", t.createNativeFunction(function(l, P) {
    if (f.settings.logCalls && console.log("DOMParser parseFromString", this, l, P), !["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"].includes(P)) throw new Error(`DOMParser: Unsupported MIME type "${P}"`);
    if (typeof l != "string" && (l = String(l)), l.length > 1e5) throw new Error("DOMParser: Input string too large (max 100KB)");
    let C = new DOMParser().parseFromString(l, P),
      T = t.createObjectProto(t.OBJECT_PROTO);

    function N(w) {
      if (w == null) return null;
      let E = t.createObjectProto(t.OBJECT_PROTO);
      return E.native = w, E.fromDOMParser = !0, t.setProperty(E, "nodeName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeName
        })
      }), t.setProperty(E, "nodeType", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeType
        })
      }), t.setProperty(E, "nodeValue", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.nodeValue
        }),
        set: t.createNativeFunction(function(s) {
          f.settings.logCalls && console.log("DOMParser set nodeValue", this, s), this.native.nodeValue = s
        })
      }), t.setProperty(E, "textContent", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.textContent
        }),
        set: t.createNativeFunction(function(s) {
          f.settings.logCalls && console.log("DOMParser set textContent", this, s), this.native.textContent = String(s).slice(0, 5e4)
        })
      }), t.setProperty(E, "tagName", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.tagName
        })
      }), t.setProperty(E, "id", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.id
        }),
        set: t.createNativeFunction(function(s) {
          f.settings.logCalls && console.log("DOMParser set id", this, s), this.native.id = String(s).slice(0, 100)
        })
      }), t.setProperty(E, "className", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.className
        }),
        set: t.createNativeFunction(function(s) {
          f.settings.logCalls && console.log("DOMParser set className", this, s), this.native.className = String(s).slice(0, 1e3)
        })
      }), t.setProperty(E, "innerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.innerHTML
        }),
        set: t.createNativeFunction(function(s) {
          throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.")
        })
      }), t.setProperty(E, "outerHTML", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return this.native.outerHTML
        })
      }), t.setProperty(E, "children", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let s = Array.from(this.native.children),
            r = t.createObjectProto(t.ARRAY_PROTO);
          for (let y = 0; y < s.length; y++) t.setProperty(r, y, N(s[y]));
          return t.setProperty(r, "length", s.length), r
        })
      }), t.setProperty(E, "childNodes", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          let s = Array.from(this.native.childNodes),
            r = t.createObjectProto(t.ARRAY_PROTO);
          for (let y = 0; y < s.length; y++) t.setProperty(r, y, N(s[y]));
          return t.setProperty(r, "length", s.length), r
        })
      }), t.setProperty(E, "firstChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return N(this.native.firstChild)
        })
      }), t.setProperty(E, "lastChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return N(this.native.lastChild)
        })
      }), t.setProperty(E, "firstElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return N(this.native.firstElementChild)
        })
      }), t.setProperty(E, "lastElementChild", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return N(this.native.lastElementChild)
        })
      }), t.setProperty(E, "parentNode", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(h) ? null : (f.settings.logCalls && console.log("DOMParser get parentNode", this), N(this.native.parentNode))
        })
      }), t.setProperty(E, "parentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(h) ? null : (f.settings.logCalls && console.log("DOMParser get parentElement", this), N(this.native.parentElement))
        })
      }), t.setProperty(E, "nextSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(h) ? null : (f.settings.logCalls && console.log("DOMParser get nextSibling", this), N(this.native.nextSibling))
        })
      }), t.setProperty(E, "previousSibling", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          if (!this.fromDOMParser) throw new Error("No access.");
          return this.native.isSameNode(h) ? null : (f.settings.logCalls && console.log("DOMParser get previousSibling", this), N(this.native.previousSibling))
        })
      }), t.setProperty(E, "getAttributeNames", t.createNativeFunction(function() {
        if (!this.fromDOMParser) throw new Error("No access.");
        let s = Array.from(this.native.getAttributeNames()),
          r = t.createObjectProto(t.ARRAY_PROTO);
        for (let y = 0; y < s.length; y++) t.setProperty(r, y, s[y]);
        return t.setProperty(r, "length", s.length), r
      })), t.setProperty(E, "getAttribute", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.getAttribute(s)
      })), t.setProperty(E, "setAttribute", t.createNativeFunction(function(s, r) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (s = String(s).toLowerCase(), s.startsWith("on")) throw new Error("Event handlers are not allowed");
        this.native.setAttribute(s, String(r)), f.settings.logCalls && console.log("DOMParser set attribute", this, s, r)
      })), t.setProperty(E, "hasAttribute", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return this.native.hasAttribute(s)
      })), t.setProperty(E, "removeAttribute", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        if (this.native.isSameNode(h)) throw new Error("No access.");
        this.native.removeAttribute(s), f.settings.logCalls && console.log("DOMParser remove attribute", this, s)
      })), t.setProperty(E, "querySelector", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return N(this.native.querySelector(s))
      })), t.setProperty(E, "querySelectorAll", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let r = Array.from(this.native.querySelectorAll(s)),
          y = t.createObjectProto(t.ARRAY_PROTO);
        for (let b = 0; b < r.length; b++) t.setProperty(y, b, N(r[b]));
        return t.setProperty(y, "length", r.length), y
      })), t.setProperty(E, "getElementsByTagName", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let r = Array.from(this.native.getElementsByTagName(s)),
          y = t.createObjectProto(t.ARRAY_PROTO);
        for (let b = 0; b < r.length; b++) t.setProperty(y, b, N(r[b]));
        return t.setProperty(y, "length", r.length), y
      })), t.setProperty(E, "getElementsByClassName", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        let r = Array.from(this.native.getElementsByClassName(s)),
          y = t.createObjectProto(t.ARRAY_PROTO);
        for (let b = 0; b < r.length; b++) t.setProperty(y, b, N(r[b]));
        return t.setProperty(y, "length", r.length), y
      })), t.setProperty(E, "getElementById", t.createNativeFunction(function(s) {
        if (!this.fromDOMParser) throw new Error("No access.");
        return N(this.native.getElementById ? this.native.getElementById(s) : null)
      })), E
    }
    return t.setProperty(T, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return N(C.documentElement)
      })
    }), t.setProperty(T, "head", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return f.settings.logCalls && console.log("DOMParser get head", this), N(C.head)
      })
    }), t.setProperty(T, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return f.settings.logCalls && console.log("DOMParser get body", this), N(C.body)
      })
    }), t.setProperty(T, "title", Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        return C.title
      })
    }), t.setProperty(T, "querySelector", t.createNativeFunction(function(w) {
      return N(C.querySelector(w))
    })), t.setProperty(T, "querySelectorAll", t.createNativeFunction(function(w) {
      let E = Array.from(C.querySelectorAll(w)),
        s = t.createObjectProto(t.ARRAY_PROTO);
      for (let r = 0; r < E.length; r++) t.setProperty(s, r, N(E[r]));
      return t.setProperty(s, "length", E.length), s
    })), t.setProperty(T, "getElementById", t.createNativeFunction(function(w) {
      return N(C.getElementById(w))
    })), t.setProperty(T, "getElementsByTagName", t.createNativeFunction(function(w) {
      let E = Array.from(C.getElementsByTagName(w)),
        s = t.createObjectProto(t.ARRAY_PROTO);
      for (let r = 0; r < E.length; r++) t.setProperty(s, r, N(E[r]));
      return t.setProperty(s, "length", E.length), s
    })), t.setProperty(T, "getElementsByClassName", t.createNativeFunction(function(w) {
      let E = Array.from(C.getElementsByClassName(w)),
        s = t.createObjectProto(t.ARRAY_PROTO);
      for (let r = 0; r < E.length; r++) t.setProperty(s, r, N(E[r]));
      return t.setProperty(s, "length", E.length), s
    })), T
  }))
}

function dt(t, c, h, g) {
  let d = new WeakMap,
    l = 1e3,
    P = 5,
    S = new WeakMap,
    _ = 0,
    C = t.nativeToPseudo({});
  t.setProperty(c, "__eventCallbacks", C);

  function T(e, o) {
    let a = _++;
    t.setProperty(C, "fn" + a, e), t.setProperty(C, "ev" + a, o), t.appendCode(`__eventCallbacks.fn${a}(__eventCallbacks.ev${a}); delete __eventCallbacks.fn${a}; delete __eventCallbacks.ev${a};`)
  }

  function N() {
    return h.getElementsByTagName("*").length
  }

  function w(e = 1) {
    if (N() + e > l) throw new Error(`DOM element limit exceeded (max ${l})`)
  }

  function E(e) {
    return e instanceof Element ? 1 + e.getElementsByTagName("*").length : 0
  }

  function s(e, o = !1) {
    if (e == null) return null;
    if (d.has(e)) return d.get(e);
    let a = e instanceof Element ? B : M,
      m = t.createObject(a);
    return m.native = e, m.fromDOMParser || (m.fromDOMParser = o), d.set(e, m), m
  }

  function r(e) {
    return e && h.contains(e)
  }

  function y(e) {
    return r(e) ? e : null
  }

  function b(e) {
    let o = t.createObjectProto(t.ARRAY_PROTO);
    for (let a = 0; a < e.length; a++) t.setProperty(o, a, s(e[a]));
    return t.setProperty(o, "length", e.length), o
  }
  let M = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "Node", M);
  let L = t.getProperty(M, "prototype"),
    X = {
      firstChild: function() {
        return s(y(this.native.firstChild))
      },
      lastChild: function() {
        return s(y(this.native.lastChild))
      },
      parentNode: function() {
        return s(y(this.native.parentNode))
      },
      parentElement: function() {
        return s(y(this.native.parentElement))
      },
      nextSibling: function() {
        return s(y(this.native.nextSibling))
      },
      previousSibling: function() {
        return s(y(this.native.previousSibling))
      },
      childNodes: function() {
        let e = Array.from(this.native.childNodes).filter(r);
        return b(e)
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
    H = {
      textContent: function(e) {
        f.settings.logCalls && console.log("set textContent", this, e), this.native.textContent = e
      },
      nodeValue: function(e) {
        f.settings.logCalls && console.log("set nodeValue", this, e), this.native.nodeValue = e
      }
    };
  for (let [e, o] of Object.entries(X)) {
    let a = {
      get: t.createNativeFunction(o)
    };
    H[e] && (a.set = t.createNativeFunction(H[e])), t.setProperty(L, e, Interpreter.VALUE_IN_DESCRIPTOR, a)
  }
  let J = {
    hasChildNodes: function() {
      return this.native.hasChildNodes()
    },
    appendChild: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
      return w(E(e.native)), this.native.appendChild(e.native), f.settings.logCalls && console.log("appendChild", this, e), e
    },
    append: function(e) {
      for (let o of e)
        if (o?.native) {
          if (o.fromDOMParser) throw new Error("You cannot append DOMParser elements to the DOM.");
          w(E(o.native)), this.native.appendChild(o.native)
        } return f.settings.logCalls && console.log("append", this, e), e
    },
    removeChild: function(e) {
      return !e?.native || !r(e.native) ? null : (f.settings.logCalls && console.log("removeChild", this, e), s(this.native.removeChild(e.native)))
    },
    insertBefore: function(e, o) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(h)) throw new Error("No access.");
      w(E(e.native));
      let a = o?.native || null;
      return this.native.insertBefore(e.native, a), f.settings.logCalls && console.log("insertBefore", this, e, a), e
    },
    cloneNode: function(e) {
      return f.settings.logCalls && console.log("cloneNode", this, e), s(this.native.cloneNode(e), this.fromDOMParser)
    },
    contains: function(e) {
      return e?.native ? this.native.contains(e.native) : !1
    },
    remove: function() {
      if (this.native.isSameNode(h)) throw new Error("No access.");
      this.native.remove(), f.settings.logCalls && console.log("remove", this)
    },
    after: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(h)) throw new Error("No access.");
      return w(E(e.native)), this.native.after(e.native), f.settings.logCalls && console.log("after", this, e), e
    },
    before: function(e) {
      if (!e?.native) return null;
      if (e.fromDOMParser) throw new Error("You cannot insert DOMParser elements into the DOM.");
      if (this.native.isSameNode(h)) throw new Error("No access.");
      return w(E(e.native)), this.native.before(e.native), f.settings.logCalls && console.log("before", this, e), e
    }
  };
  for (let [e, o] of Object.entries(J)) t.setProperty(L, e, t.createNativeFunction(o));
  let B = t.createNativeFunction(function() {
    throw TypeError("Illegal constructor")
  }, !0);
  t.setProperty(c, "Element", B);
  let A = t.createObject(M);
  t.setProperty(B, "prototype", A);

  function j(e) {
    if (!e) return "";
    e = String(e);
    let o = e.toLowerCase().trim();
    if (o.startsWith("javascript:") || o.startsWith("vbscript:")) throw new Error("javascript: URLs are not allowed");
    if (o.startsWith("data:")) return e;
    try {
      let a = new URL(e, location.href);
      if (a.hostname !== location.hostname) throw new Error("External URLs are not allowed");
      let m = a.pathname + a.search + a.hash;
      return m.startsWith(`/t/${g.domain}/`) || (m = `/t/${g.domain}/${m}`.replaceAll("//", "/")), m
    } catch (a) {
      if (a.message.includes("not allowed")) throw a;
      let m = e;
      return !m.startsWith(`/t/${g.domain}/`) && !m.startsWith("#") && (m = `/t/${g.domain}/${m}`.replaceAll("//", "/")), m
    }
  }
  let z = {
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
        let e = Array.from(this.native.children).filter(r);
        return b(e)
      },
      firstElementChild: function() {
        return s(y(this.native.firstElementChild))
      },
      lastElementChild: function() {
        return s(y(this.native.lastElementChild))
      },
      nextElementSibling: function() {
        return s(y(this.native.nextElementSibling))
      },
      previousElementSibling: function() {
        return s(y(this.native.previousElementSibling))
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
    V = {
      innerText: function(e) {
        this.native.innerText = e.slice(0, 1e3)
      },
      innerHTML: function(e) {
        throw new Error("innerHTML is not allowed. Create elements using document.createElement and append them instead or use innerText instead.")
      },
      id: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.id = e, f.settings.logCalls && console.log("set id", this, e)
      },
      className: function(e) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        this.native.className = e, f.settings.logCalls && console.log("set className", this, e)
      },
      src: function(e) {
        this.native.src = j(e), f.settings.logCalls && console.log("set src", this, e)
      },
      href: function(e) {
        this.native.href = this.native.tagName === "A" ? e : j(e), f.settings.logCalls && console.log("set href", this, e)
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
        this.native instanceof HTMLVideoElement && (this.native.poster = j(e))
      }
    };
  for (let [e, o] of Object.entries(z)) {
    let a = {
      get: t.createNativeFunction(o)
    };
    V[e] && (a.set = t.createNativeFunction(V[e])), t.setProperty(A, e, Interpreter.VALUE_IN_DESCRIPTOR, a)
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
      if (e = String(e).toLowerCase(), o = String(o), f.settings.logCalls && console.log("setAttribute", this, e, o), e === "style" && o.includes("animation-play-state") && o.includes("!important")) throw new Error("Cannot set animation-play-state to !important");
      if (e === "src" || e === "poster" || e === "data" || this.native.tagName !== "A" && e === "href") {
        this.native.setAttribute(e, j(o));
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
      f.settings.logCalls && console.log("removeAttribute", this, e), this.native.removeAttribute(e)
    },
    hasAttribute: function(e) {
      return this.native.hasAttribute(e)
    },
    querySelector: function(e) {
      let o = this.native.querySelector(e);
      return s(y(o))
    },
    querySelectorAll: function(e) {
      let o = Array.from(this.native.querySelectorAll(e)).filter(r);
      return b(o)
    },
    getElementsByClassName: function(e) {
      let o = Array.from(this.native.getElementsByClassName(e)).filter(r);
      return b(o)
    },
    getElementsByTagName: function(e) {
      let o = Array.from(this.native.getElementsByTagName(e)).filter(r);
      return b(o)
    },
    closest: function(e) {
      let o = this.native.closest(e);
      for (; o && !h.contains(o);) o = null;
      return s(o)
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
        m = null;
      return f.settings.logCalls && console.log("play", this), t.setProperty(e, "then", t.createNativeFunction(function(I) {
        return a = I, e
      })), t.setProperty(e, "catch", t.createNativeFunction(function(I) {
        return m = I, e
      })), o.native.play().then(() => {
        a && T(a, t.nativeToPseudo(void 0))
      }).catch(I => {
        m && T(m, t.nativeToPseudo({
          message: I.message,
          name: I.name
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
      if (!this.native.getAnimations) return b([]);
      let o = e ? {
          subtree: !!t.pseudoToNative(e)?.subtree
        } : {},
        a = this.native.getAnimations(o),
        m = t.createObjectProto(t.ARRAY_PROTO);
      for (let I = 0; I < a.length; I++) m.properties[I] = tt(a[I]);
      return t.setProperty(m, "length", a.length), m
    }
  };
  for (let [e, o] of Object.entries(Q)) t.setProperty(A, e, t.createNativeFunction(o));

  function tt(e) {
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

  function n(e) {
    let o = t.createObjectProto(t.OBJECT_PROTO),
      a = e ? e.length : 0;
    return t.setProperty(o, "length", a), t.setProperty(o, "start", t.createNativeFunction(function(m) {
      if (!e || m < 0 || m >= e.length) throw new Error("Index out of bounds");
      return e.start(m)
    })), t.setProperty(o, "end", t.createNativeFunction(function(m) {
      if (!e || m < 0 || m >= e.length) throw new Error("Index out of bounds");
      return e.end(m)
    })), o
  }
  t.setProperty(A, "buffered", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? n(this.native.buffered) : n(null)
    })
  }), t.setProperty(A, "played", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? n(this.native.played) : n(null)
    })
  }), t.setProperty(A, "seekable", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return this.native instanceof HTMLMediaElement ? n(this.native.seekable) : n(null)
    })
  }), t.setProperty(A, "classList", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.classList,
        o = t.nativeToPseudo({});
      return t.setProperty(o, "add", t.createNativeFunction(function(...a) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        e.add(...a)
      })), t.setProperty(o, "remove", t.createNativeFunction(function(...a) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        e.remove(...a)
      })), t.setProperty(o, "toggle", t.createNativeFunction(function(a, m) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return e.toggle(a, m)
      })), t.setProperty(o, "contains", t.createNativeFunction(function(a) {
        return e.contains(a)
      })), t.setProperty(o, "replace", t.createNativeFunction(function(a, m) {
        if (this.native.className === "tile-body") throw new Error("No access.");
        return e.replace(a, m)
      })), o
    })
  }), t.setProperty(A, "style", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.style,
        o = t.nativeToPseudo({}),
        a = ["color", "backgroundColor", "width", "height", "margin", "padding", "border", "display", "position", "top", "left", "right", "bottom", "fontSize", "fontFamily", "fontWeight", "textAlign", "lineHeight", "opacity", "visibility", "overflow", "zIndex", "transform", "transition", "animation", "flexDirection", "justifyContent", "alignItems", "gap", "gridTemplateColumns", "gridTemplateRows"];
      for (let m of a) t.setProperty(o, m, Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return e[m]
        }),
        set: t.createNativeFunction(function(I) {
          e[m] = I, f.settings.logCalls && console.log("set style", this, m, I)
        })
      });
      return t.setProperty(o, "cssText", Interpreter.VALUE_IN_DESCRIPTOR, {
        get: t.createNativeFunction(function() {
          return e.cssText
        }),
        set: t.createNativeFunction(function(m) {
          e.cssText = m, f.settings.logCalls && console.log("set cssText", this, m)
        })
      }), t.setProperty(o, "setProperty", t.createNativeFunction(function(m, I, O) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        e.setProperty(m, I, O), f.settings.logCalls && console.log("setProperty", this, m, I, O)
      })), t.setProperty(o, "getPropertyValue", t.createNativeFunction(function(m) {
        return e.getPropertyValue(m)
      })), t.setProperty(o, "removeProperty", t.createNativeFunction(function(m) {
        if (this.native?.className === "tile-body") throw new Error("No access.");
        return f.settings.logCalls && console.log("removeProperty", this, m), e.removeProperty(m)
      })), o
    })
  }), t.setProperty(A, "dataset", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      let e = this.native.dataset,
        o = t.nativeToPseudo({});
      for (let a in e) t.setProperty(o, a, e[a]);
      return t.setProperty(o, "get", t.createNativeFunction(function(a) {
        return e[a]
      })), t.setProperty(o, "set", t.createNativeFunction(function(a, m) {
        e[a] = String(m).slice(0, 1e3), f.settings.logCalls && console.log("set dataset", this, a, m)
      })), t.setProperty(o, "delete", t.createNativeFunction(function(a) {
        delete e[a], f.settings.logCalls && console.log("delete dataset", this, a)
      })), t.setProperty(o, "has", t.createNativeFunction(function(a) {
        return a in e
      })), o
    })
  }), t.setProperty(A, "offsetParent", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return s(y(this.native.offsetParent))
    })
  });
  let i = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "focusin", "focusout", "input", "change", "submit", "reset", "touchstart", "touchend", "touchmove", "touchcancel", "wheel", "scroll", "resize", "dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop", "animationstart", "animationend", "animationiteration", "transitionstart", "transitionend", "transitioncancel", "contextmenu", "pointerdown", "pointerup", "pointermove", "pointerenter", "pointerleave", "pointerover", "pointerout", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];

  function u(e) {
    let o = t.nativeToPseudo({}),
      a = ["type", "bubbles", "cancelable", "defaultPrevented", "timeStamp"];
    for (let m of a) t.setProperty(o, m, e[m]);
    if (e instanceof MouseEvent || e instanceof PointerEvent) {
      let m = ["clientX", "clientY", "pageX", "pageY", "screenX", "screenY", "offsetX", "offsetY", "movementX", "movementY", "button", "buttons", "altKey", "ctrlKey", "shiftKey", "metaKey"];
      for (let I of m) t.setProperty(o, I, e[I])
    }
    if (e instanceof KeyboardEvent) {
      let m = ["key", "code", "keyCode", "charCode", "altKey", "ctrlKey", "shiftKey", "metaKey", "repeat"];
      for (let I of m) t.setProperty(o, I, e[I])
    }
    return typeof TouchEvent == "function" && e instanceof TouchEvent && (t.setProperty(o, "touches", t.nativeToPseudo({
      length: e.touches.length
    })), t.setProperty(o, "changedTouches", t.nativeToPseudo({
      length: e.changedTouches.length
    }))), typeof WheelEvent == "function" && e instanceof WheelEvent && (t.setProperty(o, "deltaX", e.deltaX), t.setProperty(o, "deltaY", e.deltaY), t.setProperty(o, "deltaZ", e.deltaZ), t.setProperty(o, "deltaMode", e.deltaMode)), e.target && r(e.target) && t.setProperty(o, "target", s(e.target)), e.currentTarget && r(e.currentTarget) && t.setProperty(o, "currentTarget", s(e.currentTarget)), t.setProperty(o, "preventDefault", t.createNativeFunction(function() {
      e.preventDefault()
    })), t.setProperty(o, "stopPropagation", t.createNativeFunction(function() {
      e.stopPropagation()
    })), t.setProperty(o, "stopImmediatePropagation", t.createNativeFunction(function() {
      e.stopImmediatePropagation()
    })), o
  }
  t.setProperty(A, "addEventListener", t.createNativeFunction(function(e, o) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    if (e = e.toLowerCase(), !i.includes(e)) throw new Error(`Event type "${e}" is not allowed`);
    f.settings.logCalls && console.log("addEventListener", this, e, o);
    let a = this.native;
    S.has(a) || S.set(a, new Map);
    let m = S.get(a);
    m.has(e) || m.set(e, []);
    let I = m.get(e);
    if (I.length >= P) throw new Error(`Maximum listeners (${P}) reached for event "${e}"`);
    if (I.some(U => U.pseudo === o)) return;
    let O = function(U) {
      let Y = u(U);
      T(o, Y)
    };
    I.push({
      pseudo: o,
      native: O
    }), a.addEventListener(e, O)
  })), t.setProperty(A, "removeEventListener", t.createNativeFunction(function(e, o) {
    if (!e || typeof e != "string" || !o || typeof o != "object") return;
    f.settings.logCalls && console.log("removeEventListener", this, e, o), e = e.toLowerCase();
    let a = this.native;
    if (!S.has(a)) return;
    let m = S.get(a);
    if (!m.has(e)) return;
    let I = m.get(e),
      O = I.findIndex(U => U.pseudo === o);
    O !== -1 && (a.removeEventListener(e, I[O].native), I.splice(O, 1))
  }));
  let v = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "keydown", "keyup", "keypress", "focus", "blur", "input", "change", "submit", "touchstart", "touchend", "touchmove", "wheel", "scroll", "contextmenu", "play", "pause", "playing", "waiting", "seeking", "seeked", "ended", "loadstart", "loadeddata", "loadedmetadata", "progress", "canplay", "canplaythrough", "timeupdate", "durationchange", "volumechange", "ratechange", "stalled", "suspend", "emptied", "abort", "error", "load"];
  for (let e of v) {
    let o = "on" + e;
    t.setProperty(A, o, Interpreter.VALUE_IN_DESCRIPTOR, {
      get: t.createNativeFunction(function() {
        let a = this.native;
        if (!S.has(a)) return null;
        let m = S.get(a),
          I = `__${o}`;
        return m.get(I) || null
      }),
      set: t.createNativeFunction(function(a) {
        let m = this.native;
        S.has(m) || S.set(m, new Map);
        let I = S.get(m),
          O = `__${o}`;
        f.settings.logCalls && console.log("setOn" + e, this, a);
        let U = I.get(O + "_native");
        if (U && (m.removeEventListener(e, U), I.delete(O), I.delete(O + "_native")), a && typeof a == "object") {
          let Y = function(yt) {
            let Pt = u(yt);
            T(a, Pt)
          };
          m.addEventListener(e, Y), I.set(O, a), I.set(O + "_native", Y)
        }
      })
    })
  }
  it(t, c, s, r).extendElement(A, s), at(t, c), ht(t, c, g.domain), ft(t, c, h);
  let R = t.nativeToPseudo({});
  t.setProperty(c, "document", R);
  let x = {
    getElementById: function(e) {
      let o = h.querySelector(`#${CSS.escape(e)}`);
      return s(o)
    },
    getElementsByClassName: function(e) {
      let o = Array.from(h.getElementsByClassName(e));
      return b(o)
    },
    getElementsByTagName: function(e) {
      let o = Array.from(h.getElementsByTagName(e));
      return b(o)
    },
    querySelector: function(e) {
      return s(h.querySelector(e))
    },
    querySelectorAll: function(e) {
      let o = Array.from(h.querySelectorAll(e));
      return b(o)
    },
    createElement: function(e) {
      if (typeof e != "string") throw new Error("Invalid tag");
      if (e = e.toLowerCase().trim(), ["script", "style", "iframe", "embed", "object", "frame", "frameset", "layer", "ilayer", "applet", "meta", "base", "link", "title", "source", "geolocation", "permission"].includes(e)) throw new Error("Creating " + e + " elements is not allowed");
      return f.settings.logCalls && console.log("createElement", this, e), s(document.createElement(e))
    },
    createTextNode: function(e) {
      return f.settings.logCalls && console.log("createTextNode", this, e), s(document.createTextNode(e))
    }
  };
  for (let [e, o] of Object.entries(x)) t.setProperty(R, e, t.createNativeFunction(o));
  t.setProperty(R, "body", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return f.settings.logCalls && console.log("get body", this), s(h)
    })
  }), t.setProperty(R, "documentElement", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return f.settings.logCalls && console.log("get documentElement", this), s(h)
    })
  });
  let F = t.nativeToPseudo({});
  t.setProperty(c, "location", F), t.setProperty(F, "href", Interpreter.VALUE_IN_DESCRIPTOR, {
    get: t.createNativeFunction(function() {
      return `/t/${g.domain}${g.path}`
    }),
    set: t.createNativeFunction(function(e) {
      if (typeof e == "string") {
        f.settings.logCalls && console.log("set href", this, e);
        try {
          let o = new URL(e, `http://${g.domain}`);
          if (o.hostname && o.hostname !== location.hostname) throw new Error("External URLs are not allowed");
          let a = o.pathname + o.search + o.hash;
          if (a.startsWith(`/t/${g.domain}/`) ? a = a.substring(`/t/${g.domain}`.length) : a === `/t/${g.domain}` && (a = "/"), a.startsWith("/") || (a = "/" + a), a.endsWith(".html") || a === "/" || a === "") g.fetchContent(a || "/index.html"), g.setActive(!0);
          else throw new Error("Only HTML files can be navigated to")
        } catch (o) {
          if (o.message.includes("not allowed") || o.message.includes("Only HTML")) throw o;
          let a = e;
          if (a.startsWith("/") || (a = "/" + a), a.endsWith(".html") || a === "/" || a === "") g.fetchContent(a || "/index.html").then(() => g.setActive(!0));
          else throw new Error("Only HTML files can be navigated to")
        }
      }
    })
  }), t.setProperty(F, "reload", t.createNativeFunction(function() {
    g.fetchContent(g.path, !0).then(() => g.setActive(!0))
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
  et = class {
    constructor(c) {
      this.running = !1, this.logCount = 0, this.alertCount = 0, this.tile = c, this.waitUntil = null, this.index = 0, this.sizeLimitReached = !1, this.interpreter = new Interpreter("", (h, g) => {
        let d = (l, P) => {
          for (let [S, _] of Object.entries(l))
            if (typeof _ == "function") h.setProperty(P, S, h.createNativeFunction(_.bind(this)));
            else if (typeof _ == "object" && _ !== null) {
            let C = h.nativeToPseudo({});
            d(_, C), h.setProperty(P, S, C)
          }
        };
        d(Tt, g), dt(h, g, this.tile.contentElement, this.tile), h.setProperty(g, "embedded", h.nativeToPseudo(!!this.tile.embed))
      }), this.runInterval = null, this.running = !1
    }
    roughValueMemorySize() {
      let c = new Set,
        h = [this.interpreter.getStateStack()],
        g = 0;
      for (; h.length;) {
        let d = h.pop(),
          l = typeof d;
        if (g += 8, l === "string" && !c.has(d)) c.add(d), g += d.length * 2;
        else if (l === "object" && d !== null && !c.has(d)) {
          c.add(d);
          try {
            h.push(...Object.keys(d), ...Object.values(d))
          } catch {}
        }
      }
      return g
    }
    start() {
      this.running || this.sizeLimitReached || (this.running = !0, this.runInterval = setInterval(() => {
        if (!(this.waitUntil && Date.now() < this.waitUntil) && this.running)
          for (let c = 0; c < 5e3; c++) try {
            if (!this.interpreter.step()) {
              this.waitUntil = Date.now() + 50;
              break
            }
            if (this.index++ % 500 === 0) {
              let h = this.roughValueMemorySize();
              if (h > 3e6) {
                this.sizeLimitReached = !0, this.stop(), console.log(`[${this.tile.domain}] Memory size limit reached: ${h} bytes`);
                break
              }
            }
          } catch (h) {
            console.error(h), this.stop();
            break
          }
      }, 0))
    }
    stop() {
      this.running && (clearInterval(this.runInterval), this.running = !1)
    }
    runCode(c) {
      this.interpreter.appendCode(c)
    }
  },
  vt = et;
var It = document.getElementById("plot");
localStorage.getItem("lowend") || (localStorage.lowend = "true");
var nt = new CSSStyleSheet,
  gt = () => {
    nt.replaceSync(`
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
gt();
var mt = new CSSStyleSheet;
mt.replaceSync(`
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
var q = class t {
  constructor(c) {
    this.x = c.x ?? 0, this.y = c.y ?? 0, this.domain = c.domain, this.free = !c.domain, this.locked = !1, this.id = `${this.x},${this.y}`, this.rendered = !1, this.active = !1, this.element = null, this.contentElement = null, this.path = c.path || "/index.html", this.content = "", this.lastRender = 0, this.preview = c.nocontrols || !1, this.embed = c.embed || !1, this.container = c.container || It, this.interpreter = null, this.render()
  }
  static toTilePosition(c, h) {
    return {
      x: Math.floor(c / 250),
      y: Math.floor(h / 250)
    }
  }
  render() {
    if (this.rendered || this.element) return;
    this.lastRender = Date.now(), this.rendered = !0;
    let c = document.createElement("div");
    c.classList.add("tile"), this.free && c.classList.add("f"), this.preview ? c.style.cssText = "width: 100%; height: 100%; position: relative;" : (c.style.left = `${this.x*250}px`, c.style.top = `${this.y*250}px`, this.x % 10 === 0 && c.classList.add("b-left"), this.y % 10 === 0 && c.classList.add("b-top")), this.element = c;
    let h = document.createElement("div");
    h.classList.add("tile-content"), this.preview && (h.style.cssText = "width: 100%; height: 100%;"), h.addEventListener("click", async d => {
      let l = d.composedPath()?.filter(C => C instanceof Element);
      if (!l) return;
      let P = l.findIndex(C => C.isSameNode(h));
      if (P === -1) return;
      let _ = l.slice(0, P).find(C => C.tagName === "A");
      if (_) {
        d.preventDefault();
        try {
          let C = new URL(_.href);
          if (C.hostname !== location.hostname) {
            let N = document.createElement("a");
            N.href = _.href, N.target = "_blank", N.click();
            return
          }
          let T = C.pathname;
          if (T.startsWith(`/t/${this.domain}/`) || (T = `/t/${this.domain}/${T}`.replaceAll("//", "/")), T.startsWith(`/t/${this.domain}`) && (T.endsWith(".html") || T === `/t/${this.domain}/` || T === `/t/${this.domain}`)) await this.fetchContent(T.replace(`/t/${this.domain}`, "")), this.setActive(!0);
          else {
            let N = document.createElement("a");
            N.href = _.href, N.target = "_blank", N.click()
          }
        } catch (C) {
          console.error(C)
        }
      }
    }), this.shadow = h.attachShadow({
      mode: "open"
    });
    let g = document.createElement("div");
    g.className = "tile-body", this.embed && g.classList.add("embedded"), g.style = "width: 100%!important; height: 100%!important;position:absolute!important;top:0!important;left:0!important;", this.contentElement = g, this.contentElement.innerHTML = this.preview ? "Loading preview..." : `Loading ${this.x}, ${this.y}...`, this.shadow.appendChild(g), c.appendChild(h), this.fonts = document.createElement("style"), c.appendChild(this.fonts), this.fetchContent(this.path), this.container && this.container.appendChild(c), f.plot?.lockCache[this.x + "," + this.y] && this.setLocked(!0)
  }
  unrender() {
    !this.rendered || !this.element || (this.active && this.setActive(!1), this.element.remove(), this.element = null, this.rendered = !1, this.interpreter && (this.interpreter.stop(), this.interpreter = null))
  }
  async fetchContent(c, h = !1) {
    c.startsWith("/") || (c = "/" + c);
    let g = this.free ? `<div class="free">
                <p>${this.locked?"Locked tile":"Free tile"} ${this.x}, ${this.y}</p>
            </div>` : this.path === c && this.content && !h ? this.content : await fetch(`/t/${this.domain}${c}`).then(P => P.text()).catch(P => "<p>Error loading tile</p>");
    this.free ? this.shadow.adoptedStyleSheets = [mt] : this.shadow.adoptedStyleSheets = [nt], this.interpreter && (this.interpreter.stop(), this.interpreter = null), this.path = c, this.contentElement.innerHTML = g, this.content = g;
    let d = this.contentElement.querySelectorAll("style");
    this.fonts.textContent = "";
    let l = 0;
    for (let P of d) {
      if (l >= 3) break;
      let S = P.textContent.match(/@font-face\s*{([^}]*)}/g);
      if (S)
        for (let _ of S) {
          if (l >= 3) break;
          this.fonts.textContent += _, l++
        }
    }
    this.preview && this.setActive(!0)
  }
  executeScripts() {
    let c = this.contentElement.querySelectorAll('script[type="text/tilescript"]');
    for (let h of c) this.interpreter.runCode(h.textContent);
    this.preview && this.interpreter.start()
  }
  setActive(c) {
    if (this.element && (c && (this.interpreter || (this.interpreter = new vt(this), this.executeScripts()), this.interpreter.start()), c !== this.active)) {
      if (this.active = c, c) {
        if (this.element.classList.add("active"), this.contentElement.classList.add("active"), !this.preview && f.ui) {
          let g = f.ui.createVoteMenu(this);
          g && this.element.appendChild(g);
          let d = f.ui.createTileControl(this);
          if (this.element.appendChild(d), f.user?.admin || f.user?.moderator) {
            let l = f.ui.createAdminControl(this);
            this.element.appendChild(l)
          }
          f.plot?.activeTile && f.plot.activeTile.setActive(!1), f.plot && (f.plot.activeTile = this), this.fetchAndShowClanBorders()
        }
        let h = this.contentElement.querySelectorAll("audio, video");
        for (let g of h) g.dataset.webtilesPaused === "true" && (g.dataset.webtilesPaused = !1, g.play())
      } else if (!this.preview) {
        this.interpreter && this.interpreter.stop(), f.plot.activeTile = null, this.element.classList.remove("active"), this.contentElement.classList.remove("active"), this.preview || (this.element.querySelector(".tile-vote-menu")?.remove(), this.element.querySelector(".tile-info")?.remove(), this.element.querySelector(".tile-admin-panel")?.remove(), f.plot && (f.plot.activeTile = null)), t.clearClanBorders();
        let h = this.contentElement.querySelectorAll("audio, video");
        for (let g of h) g.paused || (g.dataset.webtilesPaused = !0, g.pause())
      }
    }
  }
  async fetchAndShowClanBorders() {
    if (!(this.free || !this.domain)) try {
      let h = await (await f.api.makeRequest(`/api/clans/tile-clan?domain=${encodeURIComponent(this.domain)}`)).json();
      if (!h.success || !h.clan) return;
      let g = h.clan.members;
      if (!g || g.length <= 1) return;
      let d = new Set(g.map(l => `${l.x},${l.y}`));
      for (let l of g) {
        let P = f.plot.tiles[`${l.x},${l.y}`];
        if (!P?.element) continue;
        P.element.classList.add("clan-highlight");
        let S = d.has(`${l.x},${l.y-1}`),
          _ = d.has(`${l.x},${l.y+1}`),
          C = d.has(`${l.x-1},${l.y}`),
          T = d.has(`${l.x+1},${l.y}`);
        if (!S) {
          let N = document.createElement("div");
          N.className = "clan-border clan-border-top", P.element.appendChild(N)
        }
        if (!_) {
          let N = document.createElement("div");
          N.className = "clan-border clan-border-bottom", P.element.appendChild(N)
        }
        if (!C) {
          let N = document.createElement("div");
          N.className = "clan-border clan-border-left", P.element.appendChild(N)
        }
        if (!T) {
          let N = document.createElement("div");
          N.className = "clan-border clan-border-right", P.element.appendChild(N)
        }
      }
    } catch (c) {
      console.error("Failed to fetch clan borders:", c)
    }
  }
  static clearClanBorders() {
    if (f.plot?.tiles)
      for (let c of Object.values(f.plot.tiles)) c.element && (c.element.classList.remove("clan-highlight"), c.element.querySelectorAll(".clan-border").forEach(g => g.remove()))
  }
  setDomain(c) {
    this.domain = c, this.free = !1, this.content = "", this.element && this.element.classList.remove("f"), this.fetchContent("/index.html")
  }
  setFree() {
    this.interpreter && this.interpreter.stop(), this.domain = null, this.free = !0, this.content = "", this.element && this.element.classList.add("f"), this.fetchContent("/index.html")
  }
  static updateLowendStyles() {
    if (gt(), f.plot && f.plot.tiles)
      for (let c of Object.values(f.plot.tiles)) c.shadow && !c.free && (c.shadow.adoptedStyleSheets = [nt])
  }
  setLocked(c) {
    this.locked = c, this.element && this.element.classList.toggle("locked", c), this.fetchContent("/index.html", !0)
  }
};
var W = JSON.parse(document.getElementById("embed-data").textContent),
  ot = document.getElementById("tile");
window.tile = new q({
  domain: W.domain,
  container: ot,
  nocontrols: !0,
  embed: !0,
  path: "/index.html",
  x: W.x,
  y: W.y
});
window.onmessage = t => {
  t.data.type === "update" && (window.tile.unrender(), ot.innerHTML = "", window.tile = new q({
    domain: W.domain,
    container: ot,
    nocontrols: !0,
    embed: !0,
    path: t.data.path,
    x: W.x,
    y: W.y
  }))
};