"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function swing(t, e, i, n, a) {
    return jQuery.easing[jQuery.easing.def](t, e, i, n, a);
  },
  easeInQuad: function easeInQuad(t, e, i, n, a) {
    return n * (e /= a) * e + i;
  },
  easeOutQuad: function easeOutQuad(t, e, i, n, a) {
    return -n * (e /= a) * (e - 2) + i;
  },
  easeInOutQuad: function easeInOutQuad(t, e, i, n, a) {
    return (e /= a / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i;
  },
  easeInCubic: function easeInCubic(t, e, i, n, a) {
    return n * (e /= a) * e * e + i;
  },
  easeOutCubic: function easeOutCubic(t, e, i, n, a) {
    return n * ((e = e / a - 1) * e * e + 1) + i;
  },
  easeInOutCubic: function easeInOutCubic(t, e, i, n, a) {
    return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i;
  },
  easeInQuart: function easeInQuart(t, e, i, n, a) {
    return n * (e /= a) * e * e * e + i;
  },
  easeOutQuart: function easeOutQuart(t, e, i, n, a) {
    return -n * ((e = e / a - 1) * e * e * e - 1) + i;
  },
  easeInOutQuart: function easeInOutQuart(t, e, i, n, a) {
    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i;
  },
  easeInQuint: function easeInQuint(t, e, i, n, a) {
    return n * (e /= a) * e * e * e * e + i;
  },
  easeOutQuint: function easeOutQuint(t, e, i, n, a) {
    return n * ((e = e / a - 1) * e * e * e * e + 1) + i;
  },
  easeInOutQuint: function easeInOutQuint(t, e, i, n, a) {
    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i;
  },
  easeInSine: function easeInSine(t, e, i, n, a) {
    return -n * Math.cos(e / a * (Math.PI / 2)) + n + i;
  },
  easeOutSine: function easeOutSine(t, e, i, n, a) {
    return n * Math.sin(e / a * (Math.PI / 2)) + i;
  },
  easeInOutSine: function easeInOutSine(t, e, i, n, a) {
    return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + i;
  },
  easeInExpo: function easeInExpo(t, e, i, n, a) {
    return 0 == e ? i : n * Math.pow(2, 10 * (e / a - 1)) + i;
  },
  easeOutExpo: function easeOutExpo(t, e, i, n, a) {
    return e == a ? i + n : n * (1 - Math.pow(2, -10 * e / a)) + i;
  },
  easeInOutExpo: function easeInOutExpo(t, e, i, n, a) {
    return 0 == e ? i : e == a ? i + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i;
  },
  easeInCirc: function easeInCirc(t, e, i, n, a) {
    return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + i;
  },
  easeOutCirc: function easeOutCirc(t, e, i, n, a) {
    return n * Math.sqrt(1 - (e = e / a - 1) * e) + i;
  },
  easeInOutCirc: function easeInOutCirc(t, e, i, n, a) {
    return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
  },
  easeInElastic: function easeInElastic(t, e, i, n, a) {
    var r = 1.70158,
        o = 0,
        s = n;
    if (0 == e) return i;
    if (1 == (e /= a)) return i + n;

    if (o || (o = .3 * a), s < Math.abs(n)) {
      s = n;
      r = o / 4;
    } else r = o / (2 * Math.PI) * Math.asin(n / s);

    return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) + i;
  },
  easeOutElastic: function easeOutElastic(t, e, i, n, a) {
    var r = 1.70158,
        o = 0,
        s = n;
    if (0 == e) return i;
    if (1 == (e /= a)) return i + n;

    if (o || (o = .3 * a), s < Math.abs(n)) {
      s = n;
      r = o / 4;
    } else r = o / (2 * Math.PI) * Math.asin(n / s);

    return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / o) + n + i;
  },
  easeInOutElastic: function easeInOutElastic(t, e, i, n, a) {
    var r = 1.70158,
        o = 0,
        s = n;
    if (0 == e) return i;
    if (2 == (e /= a / 2)) return i + n;

    if (o || (o = a * (.3 * 1.5)), s < Math.abs(n)) {
      s = n;
      r = o / 4;
    } else r = o / (2 * Math.PI) * Math.asin(n / s);

    return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * -.5 + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / o) * .5 + n + i;
  },
  easeInBack: function easeInBack(t, e, i, n, a, r) {
    return void 0 == r && (r = 1.70158), n * (e /= a) * e * ((r + 1) * e - r) + i;
  },
  easeOutBack: function easeOutBack(t, e, i, n, a, r) {
    return void 0 == r && (r = 1.70158), n * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + i;
  },
  easeInOutBack: function easeInOutBack(t, e, i, n, a, r) {
    return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i;
  },
  easeInBounce: function easeInBounce(t, e, i, n, a) {
    return n - jQuery.easing.easeOutBounce(t, a - e, 0, n, a) + i;
  },
  easeOutBounce: function easeOutBounce(t, e, i, n, a) {
    return (e /= a) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i;
  },
  easeInOutBounce: function easeInOutBounce(t, e, i, n, a) {
    return e < a / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, a) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - a, 0, n, a) + .5 * n + i;
  }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
  function e(t) {
    var e = t.length,
        n = i.type(t);
    return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }

  if (!t.jQuery) {
    var i = function i(t, e) {
      return new i.fn.init(t, e);
    };

    i.isWindow = function (t) {
      return null != t && t == t.window;
    }, i.type = function (t) {
      return null == t ? t + "" : "object" == _typeof(t) || "function" == typeof t ? a[o.call(t)] || "object" : _typeof(t);
    }, i.isArray = Array.isArray || function (t) {
      return "array" === i.type(t);
    }, i.isPlainObject = function (t) {
      var e;
      if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;

      try {
        if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (t) {
        return !1;
      }

      for (e in t) {
        ;
      }

      return void 0 === e || r.call(t, e);
    }, i.each = function (t, i, n) {
      var a = 0,
          r = t.length,
          o = e(t);

      if (n) {
        if (o) for (; r > a && !1 !== i.apply(t[a], n); a++) {
          ;
        } else for (a in t) {
          if (!1 === i.apply(t[a], n)) break;
        }
      } else if (o) for (; r > a && !1 !== i.call(t[a], a, t[a]); a++) {
        ;
      } else for (a in t) {
        if (!1 === i.call(t[a], a, t[a])) break;
      }

      return t;
    }, i.data = function (t, e, a) {
      if (void 0 === a) {
        var r = (o = t[i.expando]) && n[o];
        if (void 0 === e) return r;
        if (r && e in r) return r[e];
      } else if (void 0 !== e) {
        var o = t[i.expando] || (t[i.expando] = ++i.uuid);
        return n[o] = n[o] || {}, n[o][e] = a, a;
      }
    }, i.removeData = function (t, e) {
      var a = t[i.expando],
          r = a && n[a];
      r && i.each(e, function (t, e) {
        delete r[e];
      });
    }, i.extend = function () {
      var t,
          e,
          n,
          a,
          r,
          o,
          s = arguments[0] || {},
          l = 1,
          u = arguments.length,
          d = !1;

      for ("boolean" == typeof s && (d = s, s = arguments[l] || {}, l++), "object" != _typeof(s) && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
        if (null != (r = arguments[l])) for (a in r) {
          t = s[a], s !== (n = r[a]) && (d && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, o = t && i.isArray(t) ? t : []) : o = t && i.isPlainObject(t) ? t : {}, s[a] = i.extend(d, o, n)) : void 0 !== n && (s[a] = n));
        }
      }

      return s;
    }, i.queue = function (t, n, a) {
      if (t) {
        n = (n || "fx") + "queue";
        var r = i.data(t, n);
        return a ? (!r || i.isArray(a) ? r = i.data(t, n, function (t, i) {
          var n = i || [];
          return null != t && (e(Object(t)) ? function (t, e) {
            for (var i = +e.length, n = 0, a = t.length; i > n;) {
              t[a++] = e[n++];
            }

            if (i != i) for (; void 0 !== e[n];) {
              t[a++] = e[n++];
            }
            t.length = a;
          }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n;
        }(a)) : r.push(a), r) : r || [];
      }
    }, i.dequeue = function (t, e) {
      i.each(t.nodeType ? [t] : t, function (t, n) {
        e = e || "fx";
        var a = i.queue(n, e),
            r = a.shift();
        "inprogress" === r && (r = a.shift()), r && ("fx" === e && a.unshift("inprogress"), r.call(n, function () {
          i.dequeue(n, e);
        }));
      });
    }, i.fn = i.prototype = {
      init: function init(t) {
        if (t.nodeType) return this[0] = t, this;
        throw new Error("Not a DOM node.");
      },
      offset: function offset() {
        var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
          top: 0,
          left: 0
        };
        return {
          top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        };
      },
      position: function position() {
        function t() {
          for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) {
            t = t.offsetParent;
          }

          return t || document;
        }

        var e = this[0],
            t = t.apply(e),
            n = this.offset(),
            a = /^(?:body|html)$/i.test(t.nodeName) ? {
          top: 0,
          left: 0
        } : i(t).offset();
        return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (a.top += parseFloat(t.style.borderTopWidth) || 0, a.left += parseFloat(t.style.borderLeftWidth) || 0), {
          top: n.top - a.top,
          left: n.left - a.left
        };
      }
    };
    var n = {};
    i.expando = "velocity" + new Date().getTime(), i.uuid = 0;

    for (var a = {}, r = a.hasOwnProperty, o = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
      a["[object " + s[l] + "]"] = s[l].toLowerCase();
    }

    i.fn.init.prototype = i.fn, t.Velocity = {
      Utilities: i
    };
  }
}(window), function (t) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t();
}(function () {
  return function (t, e, i, n) {
    function a(t) {
      return f.isWrapped(t) ? t = [].slice.call(t) : f.isNode(t) && (t = [t]), t;
    }

    function r(t) {
      var e = d.data(t, "velocity");
      return null === e ? n : e;
    }

    function o(t, i, n, a) {
      function r(t, e) {
        return 1 - 3 * e + 3 * t;
      }

      function o(t, e) {
        return 3 * e - 6 * t;
      }

      function s(t) {
        return 3 * t;
      }

      function l(t, e, i) {
        return ((r(e, i) * t + o(e, i)) * t + s(e)) * t;
      }

      function u(t, e, i) {
        return 3 * r(e, i) * t * t + 2 * o(e, i) * t + s(e);
      }

      function d(e, i) {
        for (var a = 0; f > a; ++a) {
          var r = u(i, t, n);
          if (0 === r) return i;
          i -= (l(i, t, n) - e) / r;
        }

        return i;
      }

      function c(e, i, a) {
        var r,
            o,
            s = 0;

        do {
          (r = l(o = i + (a - i) / 2, t, n) - e) > 0 ? a = o : i = o;
        } while (Math.abs(r) > g && ++s < m);

        return o;
      }

      function h() {
        k = !0, (t != i || n != a) && function () {
          for (var e = 0; v > e; ++e) {
            w[e] = l(e * b, t, n);
          }
        }();
      }

      var f = 4,
          p = .001,
          g = 1e-7,
          m = 10,
          v = 11,
          b = 1 / (v - 1),
          y = "Float32Array" in e;
      if (4 !== arguments.length) return !1;

      for (var x = 0; 4 > x; ++x) {
        if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
      }

      t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);

      var w = y ? new Float32Array(v) : new Array(v),
          k = !1,
          S = function S(e) {
        return k || h(), t === i && n === a ? e : 0 === e ? 0 : 1 === e ? 1 : l(function (e) {
          for (var i = 0, a = 1, r = v - 1; a != r && w[a] <= e; ++a) {
            i += b;
          }

          var o = i + (e - w[--a]) / (w[a + 1] - w[a]) * b,
              s = u(o, t, n);
          return s >= p ? d(e, o) : 0 == s ? o : c(e, i, i + b);
        }(e), i, a);
      };

      S.getControlPoints = function () {
        return [{
          x: t,
          y: i
        }, {
          x: n,
          y: a
        }];
      };

      var C = "generateBezier(" + [t, i, n, a] + ")";
      return S.toString = function () {
        return C;
      }, S;
    }

    function s(t, e) {
      var i = t;
      return f.isString(t) ? v.Easings[t] || (i = !1) : i = f.isArray(t) && 1 === t.length ? function (t) {
        return function (e) {
          return Math.round(e * t) * (1 / t);
        };
      }.apply(null, t) : f.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!f.isArray(t) || 4 !== t.length) && o.apply(null, t), !1 === i && (i = v.Easings[v.defaults.easing] ? v.defaults.easing : m), i;
    }

    function l(t) {
      if (t) {
        var e = new Date().getTime(),
            i = v.State.calls.length;
        i > 1e4 && (v.State.calls = function (t) {
          for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
            var a = t[e];
            a && n.push(a);
          }

          return n;
        }(v.State.calls));

        for (var a = 0; i > a; a++) {
          if (v.State.calls[a]) {
            var o = v.State.calls[a],
                s = o[0],
                c = o[2],
                h = o[3],
                p = !!h,
                g = null;
            h || (h = v.State.calls[a][3] = e - 16);

            for (var m = Math.min((e - h) / c.duration, 1), b = 0, x = s.length; x > b; b++) {
              var k = s[b],
                  S = k.element;

              if (r(S)) {
                var C = !1;

                if (c.display !== n && null !== c.display && "none" !== c.display) {
                  if ("flex" === c.display) {
                    d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (t, e) {
                      y.setPropertyValue(S, "display", e);
                    });
                  }

                  y.setPropertyValue(S, "display", c.display);
                }

                for (var M in c.visibility !== n && "hidden" !== c.visibility && y.setPropertyValue(S, "visibility", c.visibility), k) {
                  if ("element" !== M) {
                    var P,
                        A = k[M],
                        T = f.isString(A.easing) ? v.Easings[A.easing] : A.easing;
                    if (1 === m) P = A.endValue;else {
                      var I = A.endValue - A.startValue;
                      if (P = A.startValue + I * T(m, c, I), !p && P === A.currentValue) continue;
                    }
                    if (A.currentValue = P, "tween" === M) g = P;else {
                      if (y.Hooks.registered[M]) {
                        var _ = y.Hooks.getRoot(M),
                            D = r(S).rootPropertyValueCache[_];

                        D && (A.rootPropertyValue = D);
                      }

                      var F = y.setPropertyValue(S, M, A.currentValue + (0 === parseFloat(P) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                      y.Hooks.registered[M] && (r(S).rootPropertyValueCache[_] = y.Normalizations.registered[_] ? y.Normalizations.registered[_]("extract", null, F[1]) : F[1]), "transform" === F[0] && (C = !0);
                    }
                  }
                }

                c.mobileHA && r(S).transformCache.translate3d === n && (r(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && y.flushTransformCache(S);
              }
            }

            c.display !== n && "none" !== c.display && (v.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (v.State.calls[a][2].visibility = !1), c.progress && c.progress.call(o[1], o[1], m, Math.max(0, h + c.duration - e), h, g), 1 === m && u(a);
          }
        }
      }

      v.State.isTicking && w(l);
    }

    function u(t, e) {
      if (!v.State.calls[t]) return !1;

      for (var i = v.State.calls[t][0], a = v.State.calls[t][1], o = v.State.calls[t][2], s = v.State.calls[t][4], l = !1, u = 0, c = i.length; c > u; u++) {
        var h = i[u].element;

        if (e || o.loop || ("none" === o.display && y.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && y.setPropertyValue(h, "visibility", o.visibility)), !0 !== o.loop && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && r(h)) {
          r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
          var f = !1;
          d.each(y.Lists.transforms3D, function (t, e) {
            var i = /^scale/.test(e) ? 1 : 0,
                a = r(h).transformCache[e];
            r(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(a) && (f = !0, delete r(h).transformCache[e]);
          }), o.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && y.flushTransformCache(h), y.Values.removeClass(h, "velocity-animating");
        }

        if (!e && o.complete && !o.loop && u === c - 1) try {
          o.complete.call(a, a);
        } catch (t) {
          setTimeout(function () {
            throw t;
          }, 1);
        }
        s && !0 !== o.loop && s(a), r(h) && !0 === o.loop && !e && (d.each(r(h).tweensContainer, function (t, e) {
          /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100);
        }), v(h, "reverse", {
          loop: !0,
          delay: o.delay
        })), !1 !== o.queue && d.dequeue(h, o.queue);
      }

      v.State.calls[t] = !1;

      for (var p = 0, g = v.State.calls.length; g > p; p++) {
        if (!1 !== v.State.calls[p]) {
          l = !0;
          break;
        }
      }

      !1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = []);
    }

    var d,
        c = function () {
      if (i.documentMode) return i.documentMode;

      for (var t = 7; t > 4; t--) {
        var e = i.createElement("div");
        if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t;
      }

      return n;
    }(),
        h = function () {
      var t = 0;
      return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
        var i,
            n = new Date().getTime();
        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function () {
          e(n + i);
        }, i);
      };
    }(),
        f = {
      isString: function isString(t) {
        return "string" == typeof t;
      },
      isArray: Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
      isFunction: function isFunction(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      },
      isNode: function isNode(t) {
        return t && t.nodeType;
      },
      isNodeList: function isNodeList(t) {
        return "object" == _typeof(t) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == _typeof(t[0]) && t[0].nodeType > 0);
      },
      isWrapped: function isWrapped(t) {
        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t));
      },
      isSVG: function isSVG(t) {
        return e.SVGElement && _instanceof(t, e.SVGElement);
      },
      isEmptyObject: function isEmptyObject(t) {
        for (var e in t) {
          return !1;
        }

        return !0;
      }
    },
        p = !1;

    if (t.fn && t.fn.jquery ? (d = t, p = !0) : d = e.Velocity.Utilities, 8 >= c && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");

    if (!(7 >= c)) {
      var g = 400,
          m = "swing",
          v = {
        State: {
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          isAndroid: /Android/i.test(navigator.userAgent),
          isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
          isChrome: e.chrome,
          isFirefox: /Firefox/i.test(navigator.userAgent),
          prefixElement: i.createElement("div"),
          prefixMatches: {},
          scrollAnchor: null,
          scrollPropertyLeft: null,
          scrollPropertyTop: null,
          isTicking: !1,
          calls: []
        },
        CSS: {},
        Utilities: d,
        Redirects: {},
        Easings: {},
        Promise: e.Promise,
        defaults: {
          queue: "",
          duration: g,
          easing: m,
          begin: n,
          complete: n,
          progress: n,
          display: n,
          visibility: n,
          loop: !1,
          delay: !1,
          mobileHA: !0,
          _cacheValues: !0
        },
        init: function init(t) {
          d.data(t, "velocity", {
            isSVG: f.isSVG(t),
            isAnimating: !1,
            computedStyle: null,
            tweensContainer: null,
            rootPropertyValueCache: {},
            transformCache: {}
          });
        },
        hook: null,
        mock: !1,
        version: {
          major: 1,
          minor: 2,
          patch: 2
        },
        debug: !1
      };
      e.pageYOffset !== n ? (v.State.scrollAnchor = e, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");

      var b = function () {
        function t(t) {
          return -t.tension * t.x - t.friction * t.v;
        }

        function e(e, i, n) {
          var a = {
            x: e.x + n.dx * i,
            v: e.v + n.dv * i,
            tension: e.tension,
            friction: e.friction
          };
          return {
            dx: a.v,
            dv: t(a)
          };
        }

        function i(i, n) {
          var a = {
            dx: i.v,
            dv: t(i)
          },
              r = e(i, .5 * n, a),
              o = e(i, .5 * n, r),
              s = e(i, n, o),
              l = 1 / 6 * (a.dx + 2 * (r.dx + o.dx) + s.dx),
              u = 1 / 6 * (a.dv + 2 * (r.dv + o.dv) + s.dv);
          return i.x = i.x + l * n, i.v = i.v + u * n, i;
        }

        return function t(e, n, a) {
          var r,
              o,
              s,
              l = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
          },
              u = [0],
              d = 0;

          for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, a = a || null, l.tension = e, l.friction = n, (r = null !== a) ? o = (d = t(e, n)) / a * .016 : o = .016; s = i(s || l, o), u.push(1 + s.x), d += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;) {
            ;
          }

          return r ? function (t) {
            return u[t * (u.length - 1) | 0];
          } : d;
        };
      }();

      v.Easings = {
        linear: function linear(t) {
          return t;
        },
        swing: function swing(t) {
          return .5 - Math.cos(t * Math.PI) / 2;
        },
        spring: function spring(t) {
          return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t);
        }
      }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
        v.Easings[e[0]] = o.apply(null, e[1]);
      });
      var y = v.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function register() {
            for (var t = 0; t < y.Lists.colors.length; t++) {
              var e = "color" === y.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
              y.Hooks.templates[y.Lists.colors[t]] = ["Red Green Blue Alpha", e];
            }

            var i, n, a;
            if (c) for (i in y.Hooks.templates) {
              a = (n = y.Hooks.templates[i])[0].split(" ");
              var r = n[1].match(y.RegEx.valueSplit);
              "Color" === a[0] && (a.push(a.shift()), r.push(r.shift()), y.Hooks.templates[i] = [a.join(" "), r.join(" ")]);
            }

            for (i in y.Hooks.templates) {
              for (var t in a = (n = y.Hooks.templates[i])[0].split(" ")) {
                var o = i + a[t],
                    s = t;
                y.Hooks.registered[o] = [i, s];
              }
            }
          },
          getRoot: function getRoot(t) {
            var e = y.Hooks.registered[t];
            return e ? e[0] : t;
          },
          cleanRootPropertyValue: function cleanRootPropertyValue(t, e) {
            return y.RegEx.valueUnwrap.test(e) && (e = e.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(e) && (e = y.Hooks.templates[t][1]), e;
          },
          extractValue: function extractValue(t, e) {
            var i = y.Hooks.registered[t];

            if (i) {
              var n = i[0],
                  a = i[1];
              return (e = y.Hooks.cleanRootPropertyValue(n, e)).toString().match(y.RegEx.valueSplit)[a];
            }

            return e;
          },
          injectValue: function injectValue(t, e, i) {
            var n = y.Hooks.registered[t];

            if (n) {
              var a,
                  r = n[0],
                  o = n[1];
              return (a = (i = y.Hooks.cleanRootPropertyValue(r, i)).toString().match(y.RegEx.valueSplit))[o] = e, a.join(" ");
            }

            return i;
          }
        },
        Normalizations: {
          registered: {
            clip: function clip(t, e, i) {
              switch (t) {
                case "name":
                  return "clip";

                case "extract":
                  var n;
                  return y.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(y.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;

                case "inject":
                  return "rect(" + i + ")";
              }
            },
            blur: function blur(t, e, i) {
              switch (t) {
                case "name":
                  return v.State.isFirefox ? "filter" : "-webkit-filter";

                case "extract":
                  var n = parseFloat(i);

                  if (!n && 0 !== n) {
                    var a = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    n = a ? a[1] : 0;
                  }

                  return n;

                case "inject":
                  return parseFloat(i) ? "blur(" + i + ")" : "none";
              }
            },
            opacity: function opacity(t, e, i) {
              if (8 >= c) switch (t) {
                case "name":
                  return "filter";

                case "extract":
                  var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                  return n ? n[1] / 100 : 1;

                case "inject":
                  return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")";
              } else switch (t) {
                case "name":
                  return "opacity";

                case "extract":
                case "inject":
                  return i;
              }
            }
          },
          register: function register() {
            9 >= c || v.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));

            for (var t = 0; t < y.Lists.transformsBase.length; t++) {
              !function () {
                var e = y.Lists.transformsBase[t];

                y.Normalizations.registered[e] = function (t, i, a) {
                  switch (t) {
                    case "name":
                      return "transform";

                    case "extract":
                      return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");

                    case "inject":
                      var o = !1;

                      switch (e.substr(0, e.length - 1)) {
                        case "translate":
                          o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                          break;

                        case "scal":
                        case "scale":
                          v.State.isAndroid && r(i).transformCache[e] === n && 1 > a && (a = 1), o = !/(\d)$/i.test(a);
                          break;

                        case "skew":
                          o = !/(deg|\d)$/i.test(a);
                          break;

                        case "rotate":
                          o = !/(deg|\d)$/i.test(a);
                      }

                      return o || (r(i).transformCache[e] = "(" + a + ")"), r(i).transformCache[e];
                  }
                };
              }();
            }

            for (t = 0; t < y.Lists.colors.length; t++) {
              !function () {
                var e = y.Lists.colors[t];

                y.Normalizations.registered[e] = function (t, i, a) {
                  switch (t) {
                    case "name":
                      return e;

                    case "extract":
                      var r;
                      if (y.RegEx.wrappedValueAlreadyExtracted.test(a)) r = a;else {
                        var o,
                            s = {
                          black: "rgb(0, 0, 0)",
                          blue: "rgb(0, 0, 255)",
                          gray: "rgb(128, 128, 128)",
                          green: "rgb(0, 128, 0)",
                          red: "rgb(255, 0, 0)",
                          white: "rgb(255, 255, 255)"
                        };
                        /^[A-z]+$/i.test(a) ? o = s[a] !== n ? s[a] : s.black : y.RegEx.isHex.test(a) ? o = "rgb(" + y.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = s.black), r = (o || a).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                      }
                      return 8 >= c || 3 !== r.split(" ").length || (r += " 1"), r;

                    case "inject":
                      return 8 >= c ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (8 >= c ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                  }
                };
              }();
            }
          }
        },
        Names: {
          camelCase: function camelCase(t) {
            return t.replace(/-(\w)/g, function (t, e) {
              return e.toUpperCase();
            });
          },
          SVGAttribute: function SVGAttribute(t) {
            var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (c || v.State.isAndroid && !v.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t);
          },
          prefixCheck: function prefixCheck(t) {
            if (v.State.prefixMatches[t]) return [v.State.prefixMatches[t], !0];

            for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
              var a;
              if (a = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
                return t.toUpperCase();
              }), f.isString(v.State.prefixElement.style[a])) return v.State.prefixMatches[t] = a, [a, !0];
            }

            return [t, !1];
          }
        },
        Values: {
          hexToRgb: function hexToRgb(t) {
            var e;
            return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n) {
              return e + e + i + i + n + n;
            }), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0];
          },
          isCSSNullValue: function isCSSNullValue(t) {
            return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t);
          },
          getUnitType: function getUnitType(t) {
            return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px";
          },
          getDisplayType: function getDisplayType(t) {
            var e = t && t.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block";
          },
          addClass: function addClass(t, e) {
            t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e;
          },
          removeClass: function removeClass(t, e) {
            t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
          }
        },
        getPropertyValue: function getPropertyValue(t, i, a, o) {
          function s(t, i) {
            function a() {
              h && y.setPropertyValue(t, "display", "none");
            }

            var l = 0;
            if (8 >= c) l = d.css(t, i);else {
              var u,
                  h = !1;

              if (/^(width|height)$/.test(i) && 0 === y.getPropertyValue(t, "display") && (h = !0, y.setPropertyValue(t, "display", y.Values.getDisplayType(t))), !o) {
                if ("height" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                  var f = t.offsetHeight - (parseFloat(y.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingBottom")) || 0);
                  return a(), f;
                }

                if ("width" === i && "border-box" !== y.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                  var p = t.offsetWidth - (parseFloat(y.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(t, "paddingRight")) || 0);
                  return a(), p;
                }
              }

              u = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === c && "filter" === i ? u.getPropertyValue(i) : u[i]) || null === l) && (l = t.style[i]), a();
            }

            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
              var g = s(t, "position");
              ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = d(t).position()[i] + "px");
            }

            return l;
          }

          var l;

          if (y.Hooks.registered[i]) {
            var u = i,
                h = y.Hooks.getRoot(u);
            a === n && (a = y.getPropertyValue(t, y.Names.prefixCheck(h)[0])), y.Normalizations.registered[h] && (a = y.Normalizations.registered[h]("extract", t, a)), l = y.Hooks.extractValue(u, a);
          } else if (y.Normalizations.registered[i]) {
            var f, p;
            "transform" !== (f = y.Normalizations.registered[i]("name", t)) && (p = s(t, y.Names.prefixCheck(f)[0]), y.Values.isCSSNullValue(p) && y.Hooks.templates[i] && (p = y.Hooks.templates[i][1])), l = y.Normalizations.registered[i]("extract", t, p);
          }

          if (!/^[\d-]/.test(l)) if (r(t) && r(t).isSVG && y.Names.SVGAttribute(i)) {
            if (/^(height|width)$/i.test(i)) try {
              l = t.getBBox()[i];
            } catch (t) {
              l = 0;
            } else l = t.getAttribute(i);
          } else l = s(t, y.Names.prefixCheck(i)[0]);
          return y.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + i + ": " + l), l;
        },
        setPropertyValue: function setPropertyValue(t, i, n, a, o) {
          var s = i;
          if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);else if (y.Normalizations.registered[i] && "transform" === y.Normalizations.registered[i]("name", t)) y.Normalizations.registered[i]("inject", t, n), s = "transform", n = r(t).transformCache[i];else {
            if (y.Hooks.registered[i]) {
              var l = i,
                  u = y.Hooks.getRoot(i);
              a = a || y.getPropertyValue(t, u), n = y.Hooks.injectValue(l, n, a), i = u;
            }

            if (y.Normalizations.registered[i] && (n = y.Normalizations.registered[i]("inject", t, n), i = y.Normalizations.registered[i]("name", t)), s = y.Names.prefixCheck(i)[0], 8 >= c) try {
              t.style[s] = n;
            } catch (t) {
              v.debug && console.log("Browser does not support [" + n + "] for [" + s + "]");
            } else r(t) && r(t).isSVG && y.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;
            v.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n);
          }
          return [s, n];
        },
        flushTransformCache: function flushTransformCache(t) {
          function e(e) {
            return parseFloat(y.getPropertyValue(t, e));
          }

          var i = "";

          if ((c || v.State.isAndroid && !v.State.isChrome) && r(t).isSVG) {
            var n = {
              translate: [e("translateX"), e("translateY")],
              skewX: [e("skewX")],
              skewY: [e("skewY")],
              scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
              rotate: [e("rotateZ"), 0, 0]
            };
            d.each(r(t).transformCache, function (t) {
              /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t]);
            });
          } else {
            var a, o;
            d.each(r(t).transformCache, function (e) {
              return a = r(t).transformCache[e], "transformPerspective" === e ? (o = a, !0) : (9 === c && "rotateZ" === e && (e = "rotate"), void (i += e + a + " "));
            }), o && (i = "perspective" + o + " " + i);
          }

          y.setPropertyValue(t, "transform", i);
        }
      };
      y.Hooks.register(), y.Normalizations.register(), v.hook = function (t, e, i) {
        var o = n;
        return t = a(t), d.each(t, function (t, a) {
          if (r(a) === n && v.init(a), i === n) o === n && (o = v.CSS.getPropertyValue(a, e));else {
            var s = v.CSS.setPropertyValue(a, e, i);
            "transform" === s[0] && v.CSS.flushTransformCache(a), o = s;
          }
        }), o;
      };

      var x = function x() {
        function t() {
          return c ? A.promise || null : h;
        }

        function o() {
          function t(t) {
            function h(t, e) {
              var i = n,
                  a = n,
                  r = n;
              return f.isArray(t) ? (i = t[0], !f.isArray(t[1]) && /^[\d-]/.test(t[1]) || f.isFunction(t[1]) || y.RegEx.isHex.test(t[1]) ? r = t[1] : (f.isString(t[1]) && !y.RegEx.isHex.test(t[1]) || f.isArray(t[1])) && (a = e ? t[1] : s(t[1], u.duration), t[2] !== n && (r = t[2]))) : i = t, e || (a = a || u.easing), f.isFunction(i) && (i = i.call(o, C, S)), f.isFunction(r) && (r = r.call(o, C, S)), [i || 0, a, r];
            }

            function p(t, e) {
              var i, n;
              return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                return i = t, "";
              }), i || (i = y.Values.getUnitType(t)), [n, i];
            }

            function g() {
              var t = {
                myParent: o.parentNode || i.body,
                position: y.getPropertyValue(o, "position"),
                fontSize: y.getPropertyValue(o, "fontSize")
              },
                  n = t.position === L.lastPosition && t.myParent === L.lastParent,
                  a = t.fontSize === L.lastFontSize;
              L.lastParent = t.myParent, L.lastPosition = t.position, L.lastFontSize = t.fontSize;
              var s = 100,
                  l = {};
              if (a && n) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
                var u = r(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                v.init(u), t.myParent.appendChild(u), d.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                  v.CSS.setPropertyValue(u, e, "hidden");
                }), v.CSS.setPropertyValue(u, "position", t.position), v.CSS.setPropertyValue(u, "fontSize", t.fontSize), v.CSS.setPropertyValue(u, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                  v.CSS.setPropertyValue(u, e, s + "%");
                }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(y.getPropertyValue(u, "paddingLeft")) || 1) / s, t.myParent.removeChild(u);
              }
              return null === L.remToPx && (L.remToPx = parseFloat(y.getPropertyValue(i.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
            }

            if (u.begin && 0 === C) try {
              u.begin.call(m, m);
            } catch (t) {
              setTimeout(function () {
                throw t;
              }, 1);
            }

            if ("scroll" === P) {
              var x,
                  k,
                  M,
                  T = /^x$/i.test(u.axis) ? "Left" : "Top",
                  I = parseFloat(u.offset) || 0;
              u.container ? f.isWrapped(u.container) || f.isNode(u.container) ? (u.container = u.container[0] || u.container, M = (x = u.container["scroll" + T]) + d(o).position()[T.toLowerCase()] + I) : u.container = null : (x = v.State.scrollAnchor[v.State["scrollProperty" + T]], k = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === T ? "Top" : "Left")]], M = d(o).offset()[T.toLowerCase()] + I), c = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: x,
                  currentValue: x,
                  endValue: M,
                  unitType: "",
                  easing: u.easing,
                  scrollData: {
                    container: u.container,
                    direction: T,
                    alternateValue: k
                  }
                },
                element: o
              }, v.debug && console.log("tweensContainer (scroll): ", c.scroll, o);
            } else if ("reverse" === P) {
              if (!r(o).tweensContainer) return void d.dequeue(o, u.queue);
              "none" === r(o).opts.display && (r(o).opts.display = "auto"), "hidden" === r(o).opts.visibility && (r(o).opts.visibility = "visible"), r(o).opts.loop = !1, r(o).opts.begin = null, r(o).opts.complete = null, w.easing || delete u.easing, w.duration || delete u.duration, u = d.extend({}, r(o).opts, u);

              var _ = d.extend(!0, {}, r(o).tweensContainer);

              for (var D in _) {
                if ("element" !== D) {
                  var F = _[D].startValue;
                  _[D].startValue = _[D].currentValue = _[D].endValue, _[D].endValue = F, f.isEmptyObject(w) || (_[D].easing = u.easing), v.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(_[D]), o);
                }
              }

              c = _;
            } else if ("start" === P) {
              for (var O in r(o).tweensContainer && !0 === r(o).isAnimating && (_ = r(o).tweensContainer), d.each(b, function (t, e) {
                if (RegExp("^" + y.Lists.colors.join("$|^") + "$").test(t)) {
                  var i = h(e, !0),
                      a = i[0],
                      r = i[1],
                      o = i[2];

                  if (y.RegEx.isHex.test(a)) {
                    for (var s = ["Red", "Green", "Blue"], l = y.Values.hexToRgb(a), u = o ? y.Values.hexToRgb(o) : n, d = 0; d < s.length; d++) {
                      var c = [l[d]];
                      r && c.push(r), u !== n && c.push(u[d]), b[t + s[d]] = c;
                    }

                    delete b[t];
                  }
                }
              }), b) {
                var V = h(b[O]),
                    z = V[0],
                    N = V[1],
                    B = V[2];
                O = y.Names.camelCase(O);
                var W = y.Hooks.getRoot(O),
                    E = !1;

                if (r(o).isSVG || "tween" === W || !1 !== y.Names.prefixCheck(W)[1] || y.Normalizations.registered[W] !== n) {
                  (u.display !== n && null !== u.display && "none" !== u.display || u.visibility !== n && "hidden" !== u.visibility) && /opacity|filter/.test(O) && !B && 0 !== z && (B = 0), u._cacheValues && _ && _[O] ? (B === n && (B = _[O].endValue + _[O].unitType), E = r(o).rootPropertyValueCache[W]) : y.Hooks.registered[O] ? B === n ? (E = y.getPropertyValue(o, W), B = y.getPropertyValue(o, O, E)) : E = y.Hooks.templates[W][1] : B === n && (B = y.getPropertyValue(o, O));
                  var H,
                      j,
                      q,
                      Y = !1;
                  if (B = (H = p(O, B))[0], q = H[1], z = (H = p(O, z))[0].replace(/^([+-\/*])=/, function (t, e) {
                    return Y = e, "";
                  }), j = H[1], B = parseFloat(B) || 0, z = parseFloat(z) || 0, "%" === j && (/^(fontSize|lineHeight)$/.test(O) ? (z /= 100, j = "em") : /^scale/.test(O) ? (z /= 100, j = "") : /(Red|Green|Blue)$/i.test(O) && (z = z / 100 * 255, j = "")), /[\/*]/.test(Y)) j = q;else if (q !== j && 0 !== B) if (0 === z) j = q;else {
                    a = a || g();
                    var $ = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";

                    switch (q) {
                      case "%":
                        B *= "x" === $ ? a.percentToPxWidth : a.percentToPxHeight;
                        break;

                      case "px":
                        break;

                      default:
                        B *= a[q + "ToPx"];
                    }

                    switch (j) {
                      case "%":
                        B *= 1 / ("x" === $ ? a.percentToPxWidth : a.percentToPxHeight);
                        break;

                      case "px":
                        break;

                      default:
                        B *= 1 / a[j + "ToPx"];
                    }
                  }

                  switch (Y) {
                    case "+":
                      z = B + z;
                      break;

                    case "-":
                      z = B - z;
                      break;

                    case "*":
                      z *= B;
                      break;

                    case "/":
                      z = B / z;
                  }

                  c[O] = {
                    rootPropertyValue: E,
                    startValue: B,
                    currentValue: B,
                    endValue: z,
                    unitType: j,
                    easing: N
                  }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(c[O]), o);
                } else v.debug && console.log("Skipping [" + W + "] due to a lack of browser support.");
              }

              c.element = o;
            }

            c.element && (y.Values.addClass(o, "velocity-animating"), R.push(c), "" === u.queue && (r(o).tweensContainer = c, r(o).opts = u), r(o).isAnimating = !0, C === S - 1 ? (v.State.calls.push([R, m, u, null, A.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : C++);
          }

          var a,
              o = this,
              u = d.extend({}, v.defaults, w),
              c = {};

          switch (r(o) === n && v.init(o), parseFloat(u.delay) && !1 !== u.queue && d.queue(o, u.queue, function (t) {
            v.velocityQueueEntryFlag = !0, r(o).delayTimer = {
              setTimeout: setTimeout(t, parseFloat(u.delay)),
              next: t
            };
          }), u.duration.toString().toLowerCase()) {
            case "fast":
              u.duration = 200;
              break;

            case "normal":
              u.duration = g;
              break;

            case "slow":
              u.duration = 600;
              break;

            default:
              u.duration = parseFloat(u.duration) || 1;
          }

          !1 !== v.mock && (!0 === v.mock ? u.duration = u.delay = 1 : (u.duration *= parseFloat(v.mock) || 1, u.delay *= parseFloat(v.mock) || 1)), u.easing = s(u.easing, u.duration), u.begin && !f.isFunction(u.begin) && (u.begin = null), u.progress && !f.isFunction(u.progress) && (u.progress = null), u.complete && !f.isFunction(u.complete) && (u.complete = null), u.display !== n && null !== u.display && (u.display = u.display.toString().toLowerCase(), "auto" === u.display && (u.display = v.CSS.Values.getDisplayType(o))), u.visibility !== n && null !== u.visibility && (u.visibility = u.visibility.toString().toLowerCase()), u.mobileHA = u.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === u.queue ? u.delay ? setTimeout(t, u.delay) : t() : d.queue(o, u.queue, function (e, i) {
            return !0 === i ? (A.promise && A.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void t());
          }), "" !== u.queue && "fx" !== u.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o);
        }

        var c,
            h,
            p,
            m,
            b,
            w,
            k = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));

        if (f.isWrapped(this) ? (c = !1, p = 0, m = this, h = this) : (c = !0, p = 1, m = k ? arguments[0].elements || arguments[0].e : arguments[0]), m = a(m)) {
          k ? (b = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (b = arguments[p], w = arguments[p + 1]);
          var S = m.length,
              C = 0;

          if (!/^(stop|finish)$/i.test(b) && !d.isPlainObject(w)) {
            w = {};

            for (var M = p + 1; M < arguments.length; M++) {
              f.isArray(arguments[M]) || !/^(fast|normal|slow)$/i.test(arguments[M]) && !/^\d/.test(arguments[M]) ? f.isString(arguments[M]) || f.isArray(arguments[M]) ? w.easing = arguments[M] : f.isFunction(arguments[M]) && (w.complete = arguments[M]) : w.duration = arguments[M];
            }
          }

          var P,
              A = {
            promise: null,
            resolver: null,
            rejecter: null
          };

          switch (c && v.Promise && (A.promise = new v.Promise(function (t, e) {
            A.resolver = t, A.rejecter = e;
          })), b) {
            case "scroll":
              P = "scroll";
              break;

            case "reverse":
              P = "reverse";
              break;

            case "finish":
            case "stop":
              d.each(m, function (t, e) {
                r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer);
              });
              var T = [];
              return d.each(v.State.calls, function (t, e) {
                e && d.each(e[1], function (i, a) {
                  var o = w === n ? "" : w;
                  return !0 !== o && e[2].queue !== o && (w !== n || !1 !== e[2].queue) || void d.each(m, function (i, n) {
                    n === a && ((!0 === w || f.isString(w)) && (d.each(d.queue(n, f.isString(w) ? w : ""), function (t, e) {
                      f.isFunction(e) && e(null, !0);
                    }), d.queue(n, f.isString(w) ? w : "", [])), "stop" === b ? (r(n) && r(n).tweensContainer && !1 !== o && d.each(r(n).tweensContainer, function (t, e) {
                      e.endValue = e.currentValue;
                    }), T.push(t)) : "finish" === b && (e[2].duration = 1));
                  });
                });
              }), "stop" === b && (d.each(T, function (t, e) {
                u(e, !0);
              }), A.promise && A.resolver(m)), t();

            default:
              if (!d.isPlainObject(b) || f.isEmptyObject(b)) {
                if (f.isString(b) && v.Redirects[b]) {
                  var I = (O = d.extend({}, w)).duration,
                      _ = O.delay || 0;

                  return !0 === O.backwards && (m = d.extend(!0, [], m).reverse()), d.each(m, function (t, e) {
                    parseFloat(O.stagger) ? O.delay = _ + parseFloat(O.stagger) * t : f.isFunction(O.stagger) && (O.delay = _ + O.stagger.call(e, t, S)), O.drag && (O.duration = parseFloat(I) || (/^(callout|transition)/.test(b) ? 1e3 : g), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / S : (t + 1) / S), .75 * O.duration, 200)), v.Redirects[b].call(e, e, O || {}, t, S, m, A.promise ? A : n);
                  }), t();
                }

                var D = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return A.promise ? A.rejecter(new Error(D)) : console.log(D), t();
              }

              P = "start";
          }

          var F,
              O,
              L = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPx: null,
            vwToPx: null,
            vhToPx: null
          },
              R = [];
          if (d.each(m, function (t, e) {
            f.isNode(e) && o.call(e);
          }), (O = d.extend({}, v.defaults, w)).loop = parseInt(O.loop), F = 2 * O.loop - 1, O.loop) for (var V = 0; F > V; V++) {
            var z = {
              delay: O.delay,
              progress: O.progress
            };
            V === F - 1 && (z.display = O.display, z.visibility = O.visibility, z.complete = O.complete), x(m, "reverse", z);
          }
          return t();
        }
      };

      (v = d.extend(x, v)).animate = x;
      var w = e.requestAnimationFrame || h;
      return v.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
        i.hidden ? (w = function w(t) {
          return setTimeout(function () {
            t(!0);
          }, 16);
        }, l()) : w = e.requestAnimationFrame || h;
      }), t.Velocity = v, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = v.defaults), d.each(["Down", "Up"], function (t, e) {
        v.Redirects["slide" + e] = function (t, i, a, r, o, s) {
          var l = d.extend({}, i),
              u = l.begin,
              c = l.complete,
              h = {
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: ""
          },
              f = {};
          l.display === n && (l.display = "Down" === e ? "inline" === v.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
            for (var i in u && u.call(o, o), h) {
              f[i] = t.style[i];
              var n = v.CSS.getPropertyValue(t, i);
              h[i] = "Down" === e ? [n, 0] : [0, n];
            }

            f.overflow = t.style.overflow, t.style.overflow = "hidden";
          }, l.complete = function () {
            for (var e in f) {
              t.style[e] = f[e];
            }

            c && c.call(o, o), s && s.resolver(o);
          }, v(t, h, l);
        };
      }), d.each(["In", "Out"], function (t, e) {
        v.Redirects["fade" + e] = function (t, i, a, r, o, s) {
          var l = d.extend({}, i),
              u = {
            opacity: "In" === e ? 1 : 0
          },
              c = l.complete;
          l.complete = a !== r - 1 ? l.begin = null : function () {
            c && c.call(o, o), s && s.resolver(o);
          }, l.display === n && (l.display = "In" === e ? "auto" : "none"), v(this, u, l);
        };
      }), v;
    }

    jQuery.fn.velocity = jQuery.fn.animate;
  }(window.jQuery || window.Zepto || window, window, document);
})), function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t();
  }
}(function () {
  return function () {
    return function t(e, i, n) {
      function a(o, s) {
        if (!i[o]) {
          if (!e[o]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(o, !0);
            if (r) return r(o, !0);
            var u = new Error("Cannot find module '" + o + "'");
            throw u.code = "MODULE_NOT_FOUND", u;
          }

          var d = i[o] = {
            exports: {}
          };
          e[o][0].call(d.exports, function (t) {
            var i = e[o][1][t];
            return a(i || t);
          }, d, d.exports, t, e, i, n);
        }

        return i[o].exports;
      }

      for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) {
        a(n[o]);
      }

      return a;
    };
  }()({
    1: [function (t, e, i) {}, {}],
    2: [function (t, e, i) {
      var n = t(6);

      function a(t) {
        if (t) {
          var e = [0, 0, 0],
              i = 1,
              a = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (a) {
            a = a[1];

            for (var r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r] + a[r], 16);
            }
          } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            a = a[1];

            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16);
            }
          } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = parseInt(a[r + 1]);
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < e.length; r++) {
              e[r] = Math.round(2.55 * parseFloat(a[r + 1]));
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/(\w+)/)) {
            if ("transparent" == a[1]) return [0, 0, 0, 0];
            if (!(e = n[a[1]])) return;
          }

          for (r = 0; r < e.length; r++) {
            e[r] = d(e[r], 0, 255);
          }

          return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e;
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function d(t, e, i) {
        return Math.min(Math.max(e, t), i);
      }

      function c(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      e.exports = {
        getRgba: a,
        getHsla: r,
        getRgb: function getRgb(t) {
          var e = a(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = r(t);
          return e && e.slice(0, 3);
        },
        getHwb: o,
        getAlpha: function getAlpha(t) {
          var e = a(t);
          if (e) return e[3];
          if (e = r(t)) return e[3];
          if (e = o(t)) return e[3];
        },
        hexString: function hexString(t) {
          return "#" + c(t[0]) + c(t[1]) + c(t[2]);
        },
        rgbString: function rgbString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return s(t, e);
          return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: s,
        percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return l(t, e);
          var i = Math.round(t[0] / 255 * 100),
              n = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);
          return "rgb(" + i + "%, " + n + "%, " + a + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return u(t, e);
          return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: u,
        hwbString: function hwbString(t, e) {
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
          return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return h[t.slice(0, 3)];
        }
      };
      var h = {};

      for (var f in n) {
        h[n[f]] = f;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, i) {
      var n = t(5),
          a = t(2),
          r = function r(t) {
        return _instanceof(t, r) ? t : _instanceof(this, r) ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
        var e;
      };

      r.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;
            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              i = t.luminosity();
          return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              i = (e[0] + t) % 360;
          return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var i = t,
              n = void 0 === e ? .5 : e,
              a = 2 * n - 1,
              r = this.alpha() - i.alpha(),
              o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
              s = 1 - o;
          return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              i = new r(),
              n = this.values,
              a = i.values;

          for (var o in n) {
            n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
          }

          return i;
        }
      }, r.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, r.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, r.prototype.getValues = function (t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) {
          i[t.charAt(n)] = e[t][n];
        }

        return 1 !== e.alpha && (i.a = e.alpha), i;
      }, r.prototype.setValues = function (t, e) {
        var i,
            a,
            r = this.values,
            o = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) r[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) {
            r[t][i] = e[t.charAt(i)];
          }

          l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var u = o[t];

          for (i = 0; i < t.length; i++) {
            r[t][i] = e[u[i]];
          }

          l = e.alpha;
        }
        if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)), "alpha" === t) return !1;

        for (i = 0; i < t.length; i++) {
          a = Math.max(0, Math.min(s[t][i], r[t][i])), r[t][i] = Math.round(a);
        }

        for (var d in o) {
          d !== t && (r[d] = n[t][d](r[t]));
        }

        return !0;
      }, r.prototype.setSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
      }, r.prototype.setChannel = function (t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
      }, "undefined" != typeof window && (window.Color = r), e.exports = r;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, i) {
      function n(t) {
        var e,
            i,
            n = t[0] / 255,
            a = t[1] / 255,
            r = t[2] / 255,
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i];
      }

      function a(t) {
        var e,
            i,
            n = t[0],
            a = t[1],
            r = t[2],
            o = Math.min(n, a, r),
            s = Math.max(n, a, r),
            l = s - o;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
      }

      function o(t) {
        var e = t[0],
            i = t[1],
            a = t[2];
        return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))];
      }

      function s(t) {
        var e,
            i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }

      function l(t) {
        return M[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
      }

      function d(t) {
        var e = u(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }

      function c(t) {
        var e,
            i,
            n,
            a,
            r,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * r;
        }

        return a;
      }

      function h(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * n * (1 - i),
            s = 255 * n * (1 - i * r),
            l = 255 * n * (1 - i * (1 - r));
        n *= 255;

        switch (a) {
          case 0:
            return [n, l, o];

          case 1:
            return [s, n, o];

          case 2:
            return [o, n, l];

          case 3:
            return [o, s, n];

          case 4:
            return [l, o, n];

          case 5:
            return [n, o, s];
        }
      }

      function f(t) {
        var e,
            i,
            n,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;

        switch (u > 1 && (s /= u, l /= u), i = 1 - l, n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * (i - s), e) {
          default:
          case 6:
          case 0:
            r = i, g = a, b = s;
            break;

          case 1:
            r = a, g = i, b = s;
            break;

          case 2:
            r = s, g = i, b = a;
            break;

          case 3:
            r = s, g = a, b = i;
            break;

          case 4:
            r = a, g = s, b = i;
            break;

          case 5:
            r = i, g = s, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function p(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
      }

      function m(t) {
        var e,
            i,
            n,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
        return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
      }

      function v(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
      }

      function y(t) {
        var e,
            i,
            n,
            a,
            r = t[0],
            o = t[1],
            s = t[2];
        return r <= 8 ? a = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
      }

      function x(t) {
        var e,
            i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
      }

      function w(t) {
        return m(y(t));
      }

      function k(t) {
        var e,
            i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
      }

      function S(t) {
        return C[t];
      }

      e.exports = {
        rgb2hsl: n,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: function rgb2lch(t) {
          return x(d(t));
        },
        hsl2rgb: c,
        hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              i = t[1] / 100,
              n = t[2] / 100;
          if (0 === n) return [0, 0, 0];
          return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
        },
        hsl2hwb: function hsl2hwb(t) {
          return o(c(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return s(c(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return l(c(t));
        },
        hsv2rgb: h,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              i,
              n = t[0],
              a = t[1] / 100,
              r = t[2] / 100;
          return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
        },
        hsv2hwb: function hsv2hwb(t) {
          return o(h(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return s(h(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return l(h(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return n(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        },
        cmyk2rgb: p,
        cmyk2hsl: function cmyk2hsl(t) {
          return n(p(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return a(p(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return o(p(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return l(p(t));
        },
        keyword2rgb: S,
        keyword2hsl: function keyword2hsl(t) {
          return n(S(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return a(S(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return o(S(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return s(S(t));
        },
        keyword2lab: function keyword2lab(t) {
          return d(S(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(S(t));
        },
        xyz2rgb: m,
        xyz2lab: v,
        xyz2lch: function xyz2lch(t) {
          return x(v(t));
        },
        lab2xyz: y,
        lab2rgb: w,
        lab2lch: x,
        lch2lab: k,
        lch2xyz: function lch2xyz(t) {
          return y(k(t));
        },
        lch2rgb: function lch2rgb(t) {
          return w(k(t));
        }
      };
      var C = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          M = {};

      for (var P in C) {
        M[JSON.stringify(C[P])] = P;
      }
    }, {}],
    5: [function (t, e, i) {
      var n = t(4),
          a = function a() {
        return new u();
      };

      for (var r in n) {
        a[r + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e);
          };
        }(r);

        var o = /(\w+)2(\w+)/.exec(r),
            s = o[1],
            l = o[2];

        (a[s] = a[s] || {})[l] = a[r] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var i = n[t](e);
            if ("string" == typeof i || void 0 === i) return i;

            for (var a = 0; a < i.length; a++) {
              i[a] = Math.round(i[a]);
            }

            return i;
          };
        }(r);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var i = this.space,
              n = this.convs[i];
          e = a[i][t](n), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      4: 4
    }],
    6: [function (t, e, i) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, i) {
      var n = t(29)();
      n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
      var a = t(49);

      for (var r in a) {
        a.hasOwnProperty(r) && n.plugins.register(a[r]);
      }

      n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      8: 8,
      9: 9
    }],
    8: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, i) {
          return i.type = "bar", new t(e, i);
        };
      };
    }, {}],
    9: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, i) {
          return i.type = "bubble", new t(e, i);
        };
      };
    }, {}],
    10: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, i) {
          return i.type = "doughnut", new t(e, i);
        };
      };
    }, {}],
    11: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, i) {
          return i.type = "line", new t(e, i);
        };
      };
    }, {}],
    12: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, i) {
          return i.type = "polarArea", new t(e, i);
        };
      };
    }, {}],
    13: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, i) {
          return i.type = "radar", new t(e, i);
        };
      };
    }, {}],
    14: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, i) {
          return i.type = "scatter", new t(e, i);
        };
      };
    }, {}],
    15: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), n._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var i = "";
              return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: a.Rectangle,
          initialize: function initialize() {
            var e;
            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                i,
                n = this.getMeta().data;

            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) {
              this.updateElement(n[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                o = n.getMeta(),
                s = n.getDataset(),
                l = t.custom || {},
                u = a.options.elements.rectangle;
            t._xScale = n.getScaleForId(o.xAxisID), t._yScale = n.getScaleForId(o.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
              datasetLabel: s.label,
              label: a.data.labels[e],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
            }, n.updateElementGeometry(t, e, i), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, i) {
            var n = this,
                a = t._model,
                r = n.getValueScale(),
                o = r.getBasePixel(),
                s = r.isHorizontal(),
                l = n._ruler || n.getRuler(),
                u = n.calculateBarValuePixels(n.index, e),
                d = n.calculateBarIndexPixels(n.index, e, l);
            a.horizontal = s, a.base = i ? o : u.base, a.x = s ? i ? o : u.head : d.center, a.y = s ? d.center : i ? o : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          _getStacks: function _getStacks(t) {
            var e,
                i,
                n = this.chart,
                a = this.getIndexScale().options.stacked,
                r = void 0 === t ? n.data.datasets.length : t + 1,
                o = [];

            for (e = 0; e < r; ++e) {
              (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === o.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === o.indexOf(i.stack))) && o.push(i.stack);
            }

            return o;
          },
          getStackCount: function getStackCount() {
            return this._getStacks().length;
          },
          getStackIndex: function getStackIndex(t, e) {
            var i = this._getStacks(t),
                n = void 0 !== e ? i.indexOf(e) : -1;

            return -1 === n ? i.length - 1 : n;
          },
          getRuler: function getRuler() {
            var t,
                e,
                i = this.getIndexScale(),
                n = this.getStackCount(),
                a = this.index,
                o = i.isHorizontal(),
                s = o ? i.left : i.top,
                l = s + (o ? i.width : i.height),
                u = [];

            for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              u.push(i.getPixelForValue(null, t, a));
            }

            return {
              min: r.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                var i,
                    n,
                    a,
                    r,
                    o = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();

                for (a = 1, r = e.length; a < r; ++a) {
                  o = Math.min(o, e[a] - e[a - 1]);
                }

                for (a = 0, r = s.length; a < r; ++a) {
                  n = t.getPixelForTick(a), o = a > 0 ? Math.min(o, n - i) : o, i = n;
                }

                return o;
              }(i, u) : -1,
              pixels: u,
              start: s,
              end: l,
              stackCount: n,
              scale: i
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var i,
                n,
                a,
                r,
                o,
                s,
                l = this.chart,
                u = this.getMeta(),
                d = this.getValueScale(),
                c = l.data.datasets,
                h = d.getRightValue(c[t].data[e]),
                f = d.options.stacked,
                p = u.stack,
                g = 0;
            if (f || void 0 === f && void 0 !== p) for (i = 0; i < t; ++i) {
              (n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (g += a));
            }
            return r = d.getPixelForValue(g), {
              size: s = ((o = d.getPixelForValue(g + h)) - r) / 2,
              base: r,
              head: o,
              center: o + s / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
            var n = i.scale.options,
                a = "flex" === n.barThickness ? function (t, e, i) {
              var n,
                  a = e.pixels,
                  r = a[t],
                  o = t > 0 ? a[t - 1] : null,
                  s = t < a.length - 1 ? a[t + 1] : null,
                  l = i.categoryPercentage;
              return null === o && (o = r - (null === s ? e.end - r : s - r)), null === s && (s = r + r - o), n = r - (r - o) / 2 * l, {
                chunk: (s - o) / 2 * l / e.stackCount,
                ratio: i.barPercentage,
                start: n
              };
            }(e, i, n) : function (t, e, i) {
              var n,
                  a,
                  o = i.barThickness,
                  s = e.stackCount,
                  l = e.pixels[t];
              return r.isNullOrUndef(o) ? (n = e.min * i.categoryPercentage, a = i.barPercentage) : (n = o * s, a = 1), {
                chunk: n / s,
                ratio: a,
                start: l - n / 2
              };
            }(e, i, n),
                o = this.getStackIndex(t, this.getMeta().stack),
                s = a.start + a.chunk * o + a.chunk / 2,
                l = Math.min(r.valueOrDefault(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
            return {
              base: s - l / 2,
              head: s + l / 2,
              center: s,
              size: l
            };
          },
          draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                i = this.getMeta().data,
                n = this.getDataset(),
                a = i.length,
                o = 0;

            for (r.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) {
              isNaN(e.getRightValue(n.data[o])) || i[o].draw();
            }

            r.canvas.unclipArea(t.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(e.hoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(e.hoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                o = this.chart.options.elements.rectangle;
            a.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(e.backgroundColor, i, o.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(e.borderColor, i, o.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(e.borderWidth, i, o.borderWidth);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
              return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: a.Point,
          update: function update(t) {
            var e = this,
                i = e.getMeta().data;
            r.each(i, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.getMeta(),
                r = t.custom || {},
                o = n.getScaleForId(a.xAxisID),
                s = n.getScaleForId(a.yAxisID),
                l = n._resolveElementOptions(t, e),
                u = n.getDataset().data[e],
                d = n.index,
                c = i ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
                h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);

            t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: i ? 0 : l.radius,
              skip: r.skip || isNaN(c) || isNaN(h),
              x: c,
              y: h
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = r.valueOrDefault(i.hoverBackgroundColor, r.getHoverColor(i.backgroundColor)), e.borderColor = r.valueOrDefault(i.hoverBorderColor, r.getHoverColor(i.borderColor)), e.borderWidth = r.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var i,
                n,
                a,
                o = this.chart,
                s = o.data.datasets[this.index],
                l = t.custom || {},
                u = o.options.elements.point,
                d = r.options.resolve,
                c = s.data[e],
                h = {},
                f = {
              chart: o,
              dataIndex: e,
              dataset: s,
              datasetIndex: this.index
            },
                p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];

            for (i = 0, n = p.length; i < n; ++i) {
              h[a = p[i]] = d([l[a], s[a], u[a]], f, e);
            }

            return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var r = 0; r < n[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[n],
                    l = s && s.custom || {},
                    u = r.valueAtIndexOrDefault,
                    d = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, n, d.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(o.borderColor, n, d.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(o.borderWidth, n, d.borderWidth),
                  hidden: isNaN(o.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                r = e.index,
                o = this.chart;

            for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) {
              (a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
            }

            o.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.labels[t.index],
                  n = ": " + e.datasets[t.datasetIndex].data[t.index];
              return r.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
            }
          }
        }
      }), n._set("pie", r.clone(n.doughnut)), n._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: r.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, i = 0; i < t; ++i) {
              this.chart.isDatasetVisible(i) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = i.options,
                o = a.elements.arc,
                s = n.right - n.left - o.borderWidth,
                l = n.bottom - n.top - o.borderWidth,
                u = Math.min(s, l),
                d = {
              x: 0,
              y: 0
            },
                c = e.getMeta(),
                h = a.cutoutPercentage,
                f = a.circumference;

            if (f < 2 * Math.PI) {
              var p = a.rotation % (2 * Math.PI),
                  g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                  m = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  v = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  b = p <= 0 && g >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= g,
                  y = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                  x = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                  w = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                  k = h / 100,
                  S = {
                x: x ? -1 : Math.min(m.x * (m.x < 0 ? 1 : k), v.x * (v.x < 0 ? 1 : k)),
                y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : k), v.y * (v.y < 0 ? 1 : k))
              },
                  C = {
                x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : k), v.x * (v.x > 0 ? 1 : k)),
                y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : k), v.y * (v.y > 0 ? 1 : k))
              },
                  M = {
                width: .5 * (C.x - S.x),
                height: .5 * (C.y - S.y)
              };
              u = Math.min(s / M.width, l / M.height), d = {
                x: -.5 * (C.x + S.x),
                y: -.5 * (C.y + S.y)
              };
            }

            i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), r.each(c.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                o = a.chartArea,
                s = a.options,
                l = s.animation,
                u = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                c = s.rotation,
                h = s.rotation,
                f = n.getDataset(),
                p = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                g = i && l.animateScale ? 0 : n.innerRadius,
                m = i && l.animateScale ? 0 : n.outerRadius,
                v = r.valueAtIndexOrDefault;
            r.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _model: {
                x: u + a.offsetX,
                y: d + a.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: p,
                outerRadius: m,
                innerRadius: g,
                label: v(f.label, e, a.data.labels[e])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return r.each(i.data, function (i, a) {
              t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, i, n = 0, a = this.index, r = t.length, o = 0; o < r; o++) {
              e = t[o]._model ? t[o]._model.borderWidth : 0, n = (i = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
            }

            return n;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return r.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          update: function update(t) {
            var i,
                n,
                a,
                o = this,
                s = o.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = o.chart.options,
                c = d.elements.line,
                h = o.getScaleForId(s.yAxisID),
                f = o.getDataset(),
                p = e(f, d);

            for (p && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: a.tension ? a.tension : r.valueOrDefault(f.lineTension, c.tension),
              backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: a.steppedLine ? a.steppedLine : r.valueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
            }, l.pivot()), i = 0, n = u.length; i < n; ++i) {
              o.updateElement(u[i], i, t);
            }

            for (p && 0 !== l._model.tension && o.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) {
              u[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = r.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = r.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                a = t.custom || {};
            return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? i = r.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i;
          },
          updateElement: function updateElement(t, e, i) {
            var n,
                a,
                o = this,
                s = o.getMeta(),
                l = t.custom || {},
                u = o.getDataset(),
                d = o.index,
                c = u.data[e],
                h = o.getScaleForId(s.yAxisID),
                f = o.getScaleForId(s.xAxisID),
                p = o.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, d), a = i ? h.getBasePixel() : o.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
              x: n,
              y: a,
              skip: l.skip || isNaN(n) || isNaN(a),
              radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, e, p.radius),
              pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, e, p.pointStyle),
              backgroundColor: o.getPointBackgroundColor(t, e),
              borderColor: o.getPointBorderColor(t, e),
              borderWidth: o.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
              hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, e, p.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, i) {
            var n,
                a,
                r,
                o = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                d = 0;

            if (l.options.stacked) {
              for (n = 0; n < i; n++) {
                if (a = o.data.datasets[n], "line" === (r = o.getDatasetMeta(n)).type && r.yAxisID === l.id && o.isDatasetVisible(n)) {
                  var c = Number(l.getRightValue(a.data[e]));
                  c < 0 ? d += c || 0 : u += c || 0;
                }
              }

              var h = Number(l.getRightValue(t));
              return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
            }

            return l.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                i,
                n,
                a = this.getMeta(),
                o = this.chart.chartArea,
                s = a.data || [];

            function l(t, e, i) {
              return Math.max(Math.min(t, i), e);
            }

            if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === a.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              i = s[t]._model, n = r.splineCurve(r.previousItem(s, t)._model, i, r.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
            }
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, o.left, o.right), i.controlPointPreviousY = l(i.controlPointPreviousY, o.top, o.bottom), i.controlPointNextX = l(i.controlPointNextX, o.left, o.right), i.controlPointNextY = l(i.controlPointNextY, o.top, o.bottom);
            }
          },
          draw: function draw() {
            var t = this.chart,
                i = this.getMeta(),
                n = i.data || [],
                a = t.chartArea,
                o = n.length,
                s = 0;

            for (r.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), r.canvas.unclipArea(t.ctx); s < o; ++s) {
              n[s].draw(a);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.radius = n.hoverRadius || r.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, r.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(e.pointHoverBorderColor, i, r.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                o = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), o.radius = a.radius || r.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, n), o.borderColor = e.getPointBorderColor(t, n), o.borderWidth = e.getPointBorderWidth(t, n);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var r = 0; r < n[0].data.length; ++r) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    o = e.datasets[0],
                    s = a.data[n].custom || {},
                    l = r.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, n, u.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, n, u.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, n, u.borderWidth),
                  hidden: isNaN(o.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                r = e.index,
                o = this.chart;

            for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) {
              (a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
            }

            o.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: r.noop,
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = e.getMeta(),
                o = i.options,
                s = o.elements.arc,
                l = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(o.cutoutPercentage ? i.outerRadius / 100 * o.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), r.each(a.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            for (var n = this, a = n.chart, o = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(o.data[e]), h = u.xCenter, f = u.yCenter, p = 0, g = n.getMeta(), m = 0; m < e; ++m) {
              isNaN(o.data[m]) || g.data[m].hidden || ++p;
            }

            var v = s.startAngle,
                b = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[e]),
                y = v + c * p,
                x = y + (t.hidden ? 0 : c),
                w = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[e]);
            r.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: u,
              _model: {
                x: h,
                y: f,
                innerRadius: 0,
                outerRadius: i ? w : b,
                startAngle: i && l.animateRotate ? v : y,
                endAngle: i && l.animateRotate ? v : x,
                label: r.valueAtIndexOrDefault(d, e, d[e])
              }
            }), n.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                i = 0;
            return r.each(e.data, function (e, n) {
              isNaN(t.data[n]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);
      n._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          linkScales: r.noop,
          update: function update(t) {
            var e = this,
                i = e.getMeta(),
                n = i.dataset,
                a = i.data,
                o = n.custom || {},
                s = e.getDataset(),
                l = e.chart.options.elements.line,
                u = e.chart.scale;
            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(i.dataset, {
              _datasetIndex: e.index,
              _scale: u,
              _children: a,
              _loop: !0,
              _model: {
                tension: o.tension ? o.tension : r.valueOrDefault(s.lineTension, l.tension),
                backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
              }
            }), i.dataset.pivot(), r.each(a, function (i, n) {
              e.updateElement(i, n, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = t.custom || {},
                o = n.getDataset(),
                s = n.chart.scale,
                l = n.chart.options.elements.point,
                u = s.getPointPositionForValue(e, o.data[e]);
            void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), r.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: s,
              _model: {
                x: i ? s.xCenter : u.x,
                y: i ? s.yCenter : u.y,
                tension: a.tension ? a.tension : r.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension),
                radius: a.radius ? a.radius : r.valueAtIndexOrDefault(o.pointRadius, e, l.radius),
                backgroundColor: a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(o.pointBackgroundColor, e, l.backgroundColor),
                borderColor: a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(o.pointBorderColor, e, l.borderColor),
                borderWidth: a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(o.pointBorderWidth, e, l.borderWidth),
                pointStyle: a.pointStyle ? a.pointStyle : r.valueAtIndexOrDefault(o.pointStyle, e, l.pointStyle),
                hitRadius: a.hitRadius ? a.hitRadius : r.valueAtIndexOrDefault(o.pointHitRadius, e, l.hitRadius)
              }
            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            r.each(e.data, function (i, n) {
              var a = i._model,
                  o = r.splineCurve(r.previousItem(e.data, n, !0)._model, a, r.nextItem(e.data, n, !0)._model, a.tension);
              a.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), i.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model;
            a.radius = i.hoverRadius ? i.hoverRadius : r.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, r.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(e.pointHoverBorderColor, n, r.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model,
                o = this.chart.options.elements.point;
            a.radius = i.radius ? i.radius : r.valueAtIndexOrDefault(e.pointRadius, n, o.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(e.pointBackgroundColor, n, o.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(e.pointBorderColor, n, o.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(e.pointBorderWidth, n, o.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function (t, e, i) {
      "use strict";

      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      25: 25
    }],
    22: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45);
      n._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: r.noop,
          onComplete: r.noop
        }
      }), e.exports = function (t) {
        t.Animation = a.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, i, n) {
            var a,
                r,
                o = this.animations;

            for (e.chart = t, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a) {
              if (o[a].chart === t) return void (o[a] = e);
            }

            o.push(e), 1 === o.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var e = r.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = r.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                i = 0;
            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
            var n = Date.now();
            t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var e, i, n = this.animations, a = 0; a < n.length;) {
              i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), r.callback(e.render, [i, e], i), r.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (r.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          r = t(28),
          o = t(30),
          s = t(48),
          l = t(31);

      e.exports = function (t) {
        function e(t) {
          return "top" === t || "bottom" === t;
        }

        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(e, i) {
            var r = this;

            i = function (t) {
              var e = (t = t || {}).data = t.data || {};
              return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(n.global, n[t.type], t.options || {}), t;
            }(i);

            var o = s.acquireContext(e, i),
                l = o && o.canvas,
                u = l && l.height,
                d = l && l.width;
            r.id = a.uid(), r.ctx = o, r.canvas = l, r.config = i, r.width = d, r.height = u, r.aspectRatio = u ? d / u : null, r.options = i.options, r._bufferedRender = !1, r.chart = r, r.controller = r, t.instances[r.id] = r, Object.defineProperty(r, "data", {
              get: function get() {
                return r.config.data;
              },
              set: function set(t) {
                r.config.data = t;
              }
            }), o && l ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                r = i.maintainAspectRatio && e.aspectRatio || null,
                o = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                s = Math.max(0, Math.floor(r ? o / r : a.getMaximumHeight(n)));

            if ((e.width !== o || e.height !== s) && (n.width = e.width = o, n.height = e.height = s, n.style.width = o + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
              var u = {
                width: o,
                height: s
              };
              l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), i && (i.id = i.id || "scale");
          },
          buildOrUpdateScales: function buildOrUpdateScales() {
            var i = this,
                n = i.options,
                r = i.scales || {},
                o = [],
                s = Object.keys(r).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});
            n.scales && (o = o.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && o.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(o, function (n) {
              var o = n.options,
                  l = o.id,
                  u = a.valueOrDefault(o.type, n.dtype);
              e(o.position) !== e(n.dposition) && (o.position = n.dposition), s[l] = !0;
              var d = null;
              if (l in r && r[l].type === u) (d = r[l]).options = o, d.ctx = i.ctx, d.chart = i;else {
                var c = t.scaleService.getScaleConstructor(u);
                if (!c) return;
                d = new c({
                  id: l,
                  type: u,
                  options: o,
                  ctx: i.ctx,
                  chart: i
                }), r[d.id] = d;
              }
              d.mergeTicksOptions(), n.isDefault && (i.scale = d);
            }), a.each(s, function (t, e) {
              t || delete r[e];
            }), i.scales = r, t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                i = [],
                n = [];
            return a.each(e.data.datasets, function (a, r) {
              var o = e.getDatasetMeta(r),
                  s = a.type || e.config.type;
              if (o.type && o.type !== s && (e.destroyDatasetMeta(r), o = e.getDatasetMeta(r)), o.type = s, i.push(o.type), o.controller) o.controller.updateIndex(r), o.controller.linkScales();else {
                var l = t.controllers[o.type];
                if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                o.controller = new l(e, r), n.push(o.controller);
              }
            }, e), n;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, i) {
              t.getDatasetMeta(i).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(e) {
            var i,
                n,
                r = this;

            if (e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            }), n = (i = r).options, a.each(i.scales, function (t) {
              o.removeBox(i, t);
            }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(r), !1 !== l.notify(r, "beforeUpdate")) {
              r.tooltip._data = r.data;
              var s = r.buildOrUpdateControllers();
              a.each(r.data.datasets, function (t, e) {
                r.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, r), r.updateLayout(), r.options.animation && r.options.animation.duration && a.each(s, function (t) {
                t.reset();
              }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], l.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                duration: e.duration,
                easing: e.easing,
                lazy: e.lazy
              } : r.render(e);
            }
          },
          updateLayout: function updateLayout() {
            !1 !== l.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
                this.updateDataset(t);
              }

              l.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this.getDatasetMeta(t),
                i = {
              meta: e,
              index: t
            };
            !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]));
          },
          render: function render(e) {
            var i = this;
            e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            });
            var n = e.duration,
                r = e.lazy;

            if (!1 !== l.notify(i, "beforeRender")) {
              var o = i.options.animation,
                  s = function s(t) {
                l.notify(i, "afterRender"), a.callback(o && o.onComplete, [t], i);
              };

              if (o && (void 0 !== n && 0 !== n || void 0 === n && 0 !== o.duration)) {
                var u = new t.Animation({
                  numSteps: (n || o.duration) / 16.66,
                  easing: e.easing || o.easing,
                  render: function render(t, e) {
                    var i = a.easing.effects[e.easing],
                        n = e.currentStep,
                        r = n / e.numSteps;
                    t.draw(i(r), r, n);
                  },
                  onAnimationProgress: o.onProgress,
                  onAnimationComplete: s
                });
                t.animationService.addAnimation(i, u, n, r);
              } else i.draw(), s(new t.Animation({
                numSteps: 0,
                chart: i
              }));

              return i;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }

            this.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) {
                e.isDatasetVisible(i) && e.drawDataset(i, t);
              }

              l.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
              meta: i,
              index: t,
              easingValue: e
            };
            !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var e = this.tooltip,
                i = {
              tooltip: e,
              easingValue: t
            };
            !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return r.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return r.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return r.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
            var n = r.modes[e];
            return "function" == typeof n ? n(this, t, i) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return r.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e]);
          },
          destroy: function destroy() {
            var e,
                i,
                n = this,
                r = n.canvas;

            for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) {
              n.destroyDatasetMeta(e);
            }

            r && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                i = function i() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (n) {
              s.addEventListener(t, n, i), e[n] = i;
            }), t.options.responsive && (i = function i() {
              t.resize();
            }, s.addEventListener(t, "resize", i), e.resize = i);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, i) {
              s.removeEventListener(t, i, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, i) {
            var n,
                a,
                r,
                o = i ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, r = t.length; a < r; ++a) {
              (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o](n);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                i = e.tooltip;

            if (!1 !== l.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var n = e.handleEvent(t);
              i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i.options || {},
                r = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, r.mode, r), a.callback(n.onHover || n.hover.onHover, [t["native"], i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, r.mode, !1), i.active.length && r.mode && i.updateHoverStyle(i.active, r.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
          }
        }), t.Controller = t;
      };
    }, {
      25: 25,
      28: 28,
      30: 30,
      31: 31,
      45: 45,
      48: 48
    }],
    24: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function i(t, i) {
          var n = t._chartjs;

          if (n) {
            var a = n.listeners,
                r = a.indexOf(i);
            -1 !== r && a.splice(r, 1), a.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, n.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && i(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;

            for (t = 0, e = n.length; t < e; ++t) {
              a[t] = a[t] || this.createMetaData(t);
            }

            i.dataset = i.dataset || this.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                a,
                r = this,
                o = r.getDataset(),
                s = o.data || (o.data = []);
            r._data !== s && (r._data && i(r._data, r), a = r, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [a]
              }
            }), e.forEach(function (e) {
              var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  a = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      r = a.apply(this, e);
                  return n.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[i] && t[i].apply(t, e);
                  }), r;
                }
              });
            })), r._data = s), r.resyncElements();
          },
          update: n.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) {
              i[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;

            for (t.dataset && t.dataset.draw(); n < i; ++n) {
              e[n].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var i = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = n.valueAtIndexOrDefault,
                s = t._model;
            s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(i.backgroundColor, a, e.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(i.borderColor, a, e.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(i.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = n.valueAtIndexOrDefault,
                o = n.getHoverColor,
                s = t._model;
            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, i, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, i, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, i, s.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
          },
          insertElements: function insertElements(t, e) {
            for (var i = 0; i < e; ++i) {
              this.addElementAndReset(t + i);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = n.inherits;
      };
    }, {
      45: 45
    }],
    25: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        _set: function _set(t, e) {
          return n.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      45: 45
    }],
    26: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(45);

      var r = function r(t) {
        a.extend(this, t), this.initialize.apply(this, arguments);
      };

      a.extend(r.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = a.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              i = e._model,
              a = e._start,
              r = e._view;
          return i && 1 !== t ? (r || (r = e._view = {}), a || (a = e._start = {}), function (t, e, i, a) {
            var r,
                o,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                p = Object.keys(i);

            for (r = 0, o = p.length; r < o; ++r) {
              if (d = i[s = p[r]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (c = _typeof(d)) == _typeof(u = t[s])) if ("string" === c) {
                  if ((h = n(u)).valid && (f = n(d)).valid) {
                    e[s] = f.mix(h, a).rgbString();
                    continue;
                  }
                } else if ("number" === c && isFinite(u) && isFinite(d)) {
                  e[s] = u + (d - u) * a;
                  continue;
                }
                e[s] = d;
              }
            }
          }(a, r, i, t), e) : (e._view = i, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return a.isNumber(this._model.x) && a.isNumber(this._model.y);
        }
      }), r.extend = a.inherits, e.exports = r;
    }, {
      3: 3,
      45: 45
    }],
    27: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(25),
          r = t(45);

      e.exports = function (t) {
        function e(t, e, i) {
          var n;
          return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
        }

        function i(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }

        function o(t, n, a) {
          var r = document.defaultView,
              o = t.parentNode,
              s = r.getComputedStyle(t)[n],
              l = r.getComputedStyle(o)[n],
              u = i(s),
              d = i(l),
              c = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, o, a) : c) : "none";
        }

        r.configMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              var o = i[e] || {},
                  s = n[e];
              "scales" === e ? i[e] = r.scaleMerge(o, s) : "scale" === e ? i[e] = r.merge(o, [t.scaleService.getScaleDefaults(s.type), s]) : r._merger(e, i, n, a);
            }
          });
        }, r.scaleMerge = function () {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var o,
                    s,
                    l,
                    u = n[e].length;

                for (i[e] || (i[e] = []), o = 0; o < u; ++o) {
                  l = n[e][o], s = r.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), o >= i[e].length && i[e].push({}), !i[e][o].type || l.type && l.type !== i[e][o].type ? r.merge(i[e][o], [t.scaleService.getScaleDefaults(s), l]) : r.merge(i[e][o], l);
                }
              } else r._merger(e, i, n, a);
            }
          });
        }, r.where = function (t, e) {
          if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
          var i = [];
          return r.each(t, function (t) {
            e(t) && i.push(t);
          }), i;
        }, r.findIndex = Array.prototype.findIndex ? function (t, e, i) {
          return t.findIndex(e, i);
        } : function (t, e, i) {
          i = void 0 === i ? t : i;

          for (var n = 0, a = t.length; n < a; ++n) {
            if (e.call(i, t[n], n, t)) return n;
          }

          return -1;
        }, r.findNextWhere = function (t, e, i) {
          r.isNullOrUndef(i) && (i = -1);

          for (var n = i + 1; n < t.length; n++) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, r.findPreviousWhere = function (t, e, i) {
          r.isNullOrUndef(i) && (i = t.length);

          for (var n = i - 1; n >= 0; n--) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, r.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, r.almostEquals = function (t, e, i) {
          return Math.abs(t - e) < i;
        }, r.almostWhole = function (t, e) {
          var i = Math.round(t);
          return i - e < t && i + e > t;
        }, r.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              i = Math.round(e);
          return t === Math.pow(10, i) ? i : e;
        }, r.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, r.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, r.getAngleFromPoint = function (t, e) {
          var i = e.x - t.x,
              n = e.y - t.y,
              a = Math.sqrt(i * i + n * n),
              r = Math.atan2(n, i);
          return r < -.5 * Math.PI && (r += 2 * Math.PI), {
            angle: r,
            distance: a
          };
        }, r.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, r.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, r.splineCurve = function (t, e, i, n) {
          var a = t.skip ? e : t,
              r = e,
              o = i.skip ? e : i,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              d = l / (s + l),
              c = n * (u = isNaN(u) ? 0 : u),
              h = n * (d = isNaN(d) ? 0 : d);
          return {
            previous: {
              x: r.x - c * (o.x - a.x),
              y: r.y - c * (o.y - a.y)
            },
            next: {
              x: r.x + h * (o.x - a.x),
              y: r.y + h * (o.y - a.y)
            }
          };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
          var e,
              i,
              n,
              a,
              o,
              s,
              l,
              u,
              d,
              c = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              h = c.length;

          for (e = 0; e < h; ++e) {
            if (!(n = c[e]).model.skip) {
              if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
                var f = a.model.x - n.model.x;
                n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0;
              }

              !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
            }
          }

          for (e = 0; e < h - 1; ++e) {
            n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = o * l * n.deltaK, a.mK = s * l * n.deltaK)));
          }

          for (e = 0; e < h; ++e) {
            (n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
          }
        }, r.nextItem = function (t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, r.previousItem = function (t, e, i) {
          return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, r.niceNum = function (t, e) {
          var i = Math.floor(r.log10(t)),
              n = t / Math.pow(10, i);
          return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
        }, r.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, r.getRelativePosition = function (t, e) {
          var i,
              n,
              a = t.originalEvent || t,
              o = t.currentTarget || t.srcElement,
              s = o.getBoundingClientRect(),
              l = a.touches;
          l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
          var u = parseFloat(r.getStyle(o, "padding-left")),
              d = parseFloat(r.getStyle(o, "padding-top")),
              c = parseFloat(r.getStyle(o, "padding-right")),
              h = parseFloat(r.getStyle(o, "padding-bottom")),
              f = s.right - s.left - u - c,
              p = s.bottom - s.top - d - h;
          return {
            x: i = Math.round((i - s.left - u) / f * o.width / e.currentDevicePixelRatio),
            y: n = Math.round((n - s.top - d) / p * o.height / e.currentDevicePixelRatio)
          };
        }, r.getConstraintWidth = function (t) {
          return o(t, "max-width", "clientWidth");
        }, r.getConstraintHeight = function (t) {
          return o(t, "max-height", "clientHeight");
        }, r.getMaximumWidth = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var i = parseInt(r.getStyle(e, "padding-left"), 10),
              n = parseInt(r.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - i - n,
              o = r.getConstraintWidth(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getMaximumHeight = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var i = parseInt(r.getStyle(e, "padding-top"), 10),
              n = parseInt(r.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - i - n,
              o = r.getConstraintHeight(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, r.retinaScale = function (t, e) {
          var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;

          if (1 !== i) {
            var n = t.canvas,
                a = t.height,
                r = t.width;
            n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px");
          }
        }, r.fontString = function (t, e, i) {
          return e + " " + t + "px " + i;
        }, r.longestText = function (t, e, i, n) {
          var a = (n = n || {}).data = n.data || {},
              o = n.garbageCollect = n.garbageCollect || [];
          n.font !== e && (a = n.data = {}, o = n.garbageCollect = [], n.font = e), t.font = e;
          var s = 0;
          r.each(i, function (e) {
            void 0 !== e && null !== e && !0 !== r.isArray(e) ? s = r.measureText(t, a, o, s, e) : r.isArray(e) && r.each(e, function (e) {
              void 0 === e || null === e || r.isArray(e) || (s = r.measureText(t, a, o, s, e));
            });
          });
          var l = o.length / 2;

          if (l > i.length) {
            for (var u = 0; u < l; u++) {
              delete a[o[u]];
            }

            o.splice(0, l);
          }

          return s;
        }, r.measureText = function (t, e, i, n, a) {
          var r = e[a];
          return r || (r = e[a] = t.measureText(a).width, i.push(a)), r > n && (n = r), n;
        }, r.numberOfLabelLines = function (t) {
          var e = 1;
          return r.each(t, function (t) {
            r.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, r.color = n ? function (t) {
          return _instanceof(t, CanvasGradient) && (t = a.global.defaultColor), n(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, r.getHoverColor = function (t) {
          return _instanceof(t, CanvasPattern) ? t : r.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      25: 25,
      3: 3,
      45: 45
    }],
    28: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return t["native"] ? {
          x: t.x,
          y: t.y
        } : n.getRelativePosition(t, e);
      }

      function r(t, e) {
        var i, n, a, r, o;

        for (n = 0, r = t.data.datasets.length; n < r; ++n) {
          if (t.isDatasetVisible(n)) for (a = 0, o = (i = t.getDatasetMeta(n)).data.length; a < o; ++a) {
            var s = i.data[a];
            s._view.skip || e(s);
          }
        }
      }

      function o(t, e) {
        var i = [];
        return r(t, function (t) {
          t.inRange(e.x, e.y) && i.push(t);
        }), i;
      }

      function s(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY,
            o = [];
        return r(t, function (t) {
          if (!i || t.inRange(e.x, e.y)) {
            var r = t.getCenterPoint(),
                s = n(e, r);
            s < a ? (o = [t], a = s) : s === a && o.push(t);
          }
        }), o;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
        return function (t, n) {
          var a = e ? Math.abs(t.x - n.x) : 0,
              r = i ? Math.abs(t.y - n.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
      }

      function u(t, e, i) {
        var n = a(e, t);
        i.axis = i.axis || "x";
        var r = l(i.axis),
            u = i.intersect ? o(t, n) : s(t, n, !1, r),
            d = [];
        return u.length ? (t.data.datasets.forEach(function (e, i) {
          if (t.isDatasetVisible(i)) {
            var n = t.getDatasetMeta(i).data[u[0]._index];

            n && !n._view.skip && d.push(n);
          }
        }), d) : [];
      }

      e.exports = {
        modes: {
          single: function single(t, e) {
            var i = a(e, t),
                n = [];
            return r(t, function (t) {
              if (t.inRange(i.x, i.y)) return n.push(t), n;
            }), n.slice(0, 1);
          },
          label: u,
          index: u,
          dataset: function dataset(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var r = l(i.axis),
                u = i.intersect ? o(t, n) : s(t, n, !1, r);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return u(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return o(t, a(e, t));
          },
          nearest: function nearest(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var r = l(i.axis),
                o = s(t, n, i.intersect, r);
            return o.length > 1 && o.sort(function (t, e) {
              var i = t.getArea() - e.getArea();
              return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
            }), o.slice(0, 1);
          },
          x: function x(t, e, i) {
            var n = a(e, t),
                o = [],
                s = !1;
            return r(t, function (t) {
              t.inXRange(n.x) && o.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (o = []), o;
          },
          y: function y(t, e, i) {
            var n = a(e, t),
                o = [],
                s = !1;
            return r(t, function (t) {
              t.inYRange(n.y) && o.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (o = []), o;
          }
        }
      };
    }, {
      45: 45
    }],
    29: [function (t, e, i) {
      "use strict";

      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t, e) {
          return this.construct(_t, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      25: 25
    }],
    30: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return n.where(t, function (t) {
          return t.position === e;
        });
      }

      function r(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, i) {
          var n = e ? i : t,
              a = e ? t : i;
          return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }

      e.exports = {
        defaults: {},
        addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        },
        removeBox: function removeBox(t, e) {
          var i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure: function configure(t, e, i) {
          for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) {
            n = a[o], i.hasOwnProperty(n) && (e[n] = i[n]);
          }
        },
        update: function update(t, e, i) {
          if (t) {
            var o = t.options.layout || {},
                s = n.options.toPadding(o.padding),
                l = s.left,
                u = s.right,
                d = s.top,
                c = s.bottom,
                h = a(t.boxes, "left"),
                f = a(t.boxes, "right"),
                p = a(t.boxes, "top"),
                g = a(t.boxes, "bottom"),
                m = a(t.boxes, "chartArea");
            r(h, !0), r(f, !1), r(p, !0), r(g, !1);
            var v = e - l - u,
                b = i - d - c,
                y = b / 2,
                x = (e - v / 2) / (h.length + f.length),
                w = (i - y) / (p.length + g.length),
                k = v,
                S = b,
                C = [];
            n.each(h.concat(f, p, g), function (t) {
              var e,
                  i = t.isHorizontal();
              i ? (e = t.update(t.fullWidth ? v : k, w), S -= e.height) : (e = t.update(x, S), k -= e.width), C.push({
                horizontal: i,
                minSize: e,
                box: t
              });
            });
            var M = 0,
                P = 0,
                A = 0,
                T = 0;
            n.each(p.concat(g), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                M = Math.max(M, e.left), P = Math.max(P, e.right);
              }
            }), n.each(h.concat(f), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                A = Math.max(A, e.top), T = Math.max(T, e.bottom);
              }
            });
            var I = l,
                _ = u,
                D = d,
                F = c;
            n.each(h.concat(f), B), n.each(h, function (t) {
              I += t.width;
            }), n.each(f, function (t) {
              _ += t.width;
            }), n.each(p.concat(g), B), n.each(p, function (t) {
              D += t.height;
            }), n.each(g, function (t) {
              F += t.height;
            }), n.each(h.concat(f), function (t) {
              var e = n.findNextWhere(C, function (e) {
                return e.box === t;
              }),
                  i = {
                left: 0,
                right: 0,
                top: D,
                bottom: F
              };
              e && t.update(e.minSize.width, S, i);
            }), I = l, _ = u, D = d, F = c, n.each(h, function (t) {
              I += t.width;
            }), n.each(f, function (t) {
              _ += t.width;
            }), n.each(p, function (t) {
              D += t.height;
            }), n.each(g, function (t) {
              F += t.height;
            });
            var O = Math.max(M - I, 0);
            I += O, _ += Math.max(P - _, 0);
            var L = Math.max(A - D, 0);
            D += L, F += Math.max(T - F, 0);
            var R = i - D - F,
                V = e - I - _;
            V === k && R === S || (n.each(h, function (t) {
              t.height = R;
            }), n.each(f, function (t) {
              t.height = R;
            }), n.each(p, function (t) {
              t.fullWidth || (t.width = V);
            }), n.each(g, function (t) {
              t.fullWidth || (t.width = V);
            }), S = R, k = V);
            var z = l + O,
                N = d + L;
            n.each(h.concat(p), W), z += k, N += S, n.each(f, W), n.each(g, W), t.chartArea = {
              left: I,
              top: D,
              right: I + k,
              bottom: D + S
            }, n.each(m, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S);
            });
          }

          function B(t) {
            var e = n.findNextWhere(C, function (e) {
              return e.box === t;
            });
            if (e) if (t.isHorizontal()) {
              var i = {
                left: Math.max(I, M),
                right: Math.max(_, P),
                top: 0,
                bottom: 0
              };
              t.update(t.fullWidth ? v : k, b / 2, i);
            } else t.update(e.minSize.width, S);
          }

          function W(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? l : I, t.right = t.fullWidth ? e - u : I + k, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = z, t.right = z + t.width, t.top = D, t.bottom = D + S, z = t.right);
          }
        }
      };
    }, {
      45: 45
    }],
    31: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45);
      n._set("global", {
        plugins: {}
      }), e.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function register(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        },
        unregister: function unregister(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            var i = e.indexOf(t);
            -1 !== i && e.splice(i, 1);
          }), this._cacheId++;
        },
        clear: function clear() {
          this._plugins = [], this._cacheId++;
        },
        count: function count() {
          return this._plugins.length;
        },
        getAll: function getAll() {
          return this._plugins;
        },
        notify: function notify(t, e, i) {
          var n,
              a,
              r,
              o,
              s,
              l = this.descriptors(t),
              u = l.length;

          for (n = 0; n < u; ++n) {
            if ("function" == typeof (s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
          }

          return !0;
        },
        descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});
          if (e.id === this._cacheId) return e.descriptors;
          var i = [],
              r = [],
              o = t && t.config || {},
              s = o.options && o.options.plugins || {};
          return this._plugins.concat(o.plugins || []).forEach(function (t) {
            if (-1 === i.indexOf(t)) {
              var e = t.id,
                  o = s[e];
              !1 !== o && (!0 === o && (o = a.clone(n.global.plugins[e])), i.push(t), r.push({
                plugin: t,
                options: o || {}
              }));
            }
          }), e.descriptors = r, e.id = this._cacheId, r;
        },
        _invalidate: function _invalidate(t) {
          delete t.$plugins;
        }
      };
    }, {
      25: 25,
      45: 45
    }],
    32: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(34);

      function s(t) {
        var e,
            i,
            n = [];

        for (e = 0, i = t.length; e < i; ++e) {
          n.push(t[e].label);
        }

        return n;
      }

      function l(t, e, i) {
        var n = t.getPixelForTick(e);
        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
      }

      n._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: o.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function (t) {
        function e(t, e, i) {
          return r.isArray(e) ? r.longestText(t, i, e) : t.measureText(e).width;
        }

        function i(t) {
          var e = r.valueOrDefault,
              i = n.global,
              a = e(t.fontSize, i.defaultFontSize),
              o = e(t.fontStyle, i.defaultFontStyle),
              s = e(t.fontFamily, i.defaultFontFamily);
          return {
            size: a,
            style: o,
            family: s,
            font: r.fontString(a, o, s)
          };
        }

        function o(t) {
          return r.options.toLineHeight(r.valueOrDefault(t.lineHeight, 1.2), r.valueOrDefault(t.fontSize, n.global.defaultFontSize));
        }

        t.Scale = a.extend({
          getPadding: function getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          },
          getTicks: function getTicks() {
            return this._ticks;
          },
          mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;

            for (var e in !1 === t.minor && (t.minor = {
              display: !1
            }), !1 === t.major && (t.major = {
              display: !1
            }), t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          },
          beforeUpdate: function beforeUpdate() {
            r.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, i) {
            var n,
                a,
                o,
                s,
                l,
                u,
                d = this;

            for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = r.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, n = 0, a = o.length; n < a; ++n) {
              s = o[n], (u = l[n]) ? u.label = s : l.push(u = {
                label: s,
                major: !1
              });
            }

            return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          },
          afterUpdate: function afterUpdate() {
            r.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            r.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            r.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            r.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: r.noop,
          afterDataLimits: function afterDataLimits() {
            r.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            r.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: r.noop,
          afterBuildTicks: function afterBuildTicks() {
            r.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            r.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            r.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            r.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks,
                a = s(t._ticks),
                o = i(n);
            e.font = o.font;
            var l = n.minRotation || 0;
            if (a.length && t.options.display && t.isHorizontal()) for (var u, d = r.longestText(e, o.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
              var f = r.toRadians(l);

              if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                l--;
                break;
              }

              l++, c = u * d;
            }
            t.labelRotation = l;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            r.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            r.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                n = t.minSize = {
              width: 0,
              height: 0
            },
                a = s(t._ticks),
                l = t.options,
                u = l.ticks,
                d = l.scaleLabel,
                c = l.gridLines,
                h = l.display,
                f = t.isHorizontal(),
                p = i(u),
                g = l.gridLines.tickMarkLength;

            if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? g : 0, n.height = f ? h && c.drawTicks ? g : 0 : t.maxHeight, d.display && h) {
              var m = o(d) + r.options.toPadding(d.padding).height;
              f ? n.height += m : n.width += m;
            }

            if (u.display && h) {
              var v = r.longestText(t.ctx, p.font, a, t.longestTextCache),
                  b = r.numberOfLabelLines(a),
                  y = .5 * p.size,
                  x = t.options.ticks.padding;

              if (f) {
                t.longestLabelWidth = v;
                var w = r.toRadians(t.labelRotation),
                    k = Math.cos(w),
                    S = Math.sin(w) * v + p.size * b + y * (b - 1) + y;
                n.height = Math.min(t.maxHeight, n.height + S + x), t.ctx.font = p.font;
                var C = e(t.ctx, a[0], p.font),
                    M = e(t.ctx, a[a.length - 1], p.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? k * C + 3 : k * y + 3, t.paddingRight = "bottom" === l.position ? k * y + 3 : k * M + 3) : (t.paddingLeft = C / 2 + 3, t.paddingRight = M / 2 + 3);
              } else u.mirror ? v = 0 : v += x + y, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2;
            }

            t.handleMargins(), t.width = n.width, t.height = n.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            r.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            if (r.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          getLabelForIndex: r.noop,
          getPixelForValue: r.noop,
          getValueForPixel: r.noop,
          getPixelForTick: function getPixelForTick(t) {
            var e = this,
                i = e.options.offset;

            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = n * t + e.paddingLeft;
              i && (a += n / 2);
              var r = e.left + Math.round(a);
              return r += e.isFullWidth() ? e.margins.left : 0;
            }

            var o = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (o / (e._ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  n = e.left + Math.round(i);
              return n += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          },
          _autoSkip: function _autoSkip(t) {
            var e,
                i,
                n,
                a,
                o = this,
                s = o.isHorizontal(),
                l = o.options.ticks.minor,
                u = t.length,
                d = r.toRadians(o.labelRotation),
                c = Math.cos(d),
                h = o.longestLabelWidth * c,
                f = [];

            for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) {
              n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
            }

            return f;
          },
          draw: function draw(t) {
            var e = this,
                a = e.options;

            if (a.display) {
              var s = e.ctx,
                  u = n.global,
                  d = a.ticks.minor,
                  c = a.ticks.major || d,
                  h = a.gridLines,
                  f = a.scaleLabel,
                  p = 0 !== e.labelRotation,
                  g = e.isHorizontal(),
                  m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  v = r.valueOrDefault(d.fontColor, u.defaultFontColor),
                  b = i(d),
                  y = r.valueOrDefault(c.fontColor, u.defaultFontColor),
                  x = i(c),
                  w = h.drawTicks ? h.tickMarkLength : 0,
                  k = r.valueOrDefault(f.fontColor, u.defaultFontColor),
                  S = i(f),
                  C = r.options.toPadding(f.padding),
                  M = r.toRadians(e.labelRotation),
                  P = [],
                  A = e.options.gridLines.lineWidth,
                  T = "right" === a.position ? e.right : e.right - A - w,
                  I = "right" === a.position ? e.right + w : e.right,
                  _ = "bottom" === a.position ? e.top + A : e.bottom - w - A,
                  D = "bottom" === a.position ? e.top + A + w : e.bottom + A;

              if (r.each(m, function (i, n) {
                if (!r.isNullOrUndef(i.label)) {
                  var o,
                      s,
                      c,
                      f,
                      v,
                      b,
                      y,
                      x,
                      k,
                      S,
                      C,
                      F,
                      O,
                      L,
                      R = i.label;
                  n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (o = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (o = r.valueAtIndexOrDefault(h.lineWidth, n), s = r.valueAtIndexOrDefault(h.color, n), c = r.valueOrDefault(h.borderDash, u.borderDash), f = r.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                  var V = "middle",
                      z = "middle",
                      N = d.padding;

                  if (g) {
                    var B = w + N;
                    "bottom" === a.position ? (z = p ? "middle" : "top", V = p ? "right" : "center", L = e.top + B) : (z = p ? "middle" : "bottom", V = p ? "left" : "center", L = e.bottom - B);
                    var W = l(e, n, h.offsetGridLines && m.length > 1);
                    W < e.left && (s = "rgba(0,0,0,0)"), W += r.aliasPixel(o), O = e.getPixelForTick(n) + d.labelOffset, v = y = k = C = W, b = _, x = D, S = t.top, F = t.bottom + A;
                  } else {
                    var E,
                        H = "left" === a.position;
                    d.mirror ? (V = H ? "left" : "right", E = N) : (V = H ? "right" : "left", E = w + N), O = H ? e.right - E : e.left + E;
                    var j = l(e, n, h.offsetGridLines && m.length > 1);
                    j < e.top && (s = "rgba(0,0,0,0)"), j += r.aliasPixel(o), L = e.getPixelForTick(n) + d.labelOffset, v = T, y = I, k = t.left, C = t.right + A, b = x = S = F = j;
                  }

                  P.push({
                    tx1: v,
                    ty1: b,
                    tx2: y,
                    ty2: x,
                    x1: k,
                    y1: S,
                    x2: C,
                    y2: F,
                    labelX: O,
                    labelY: L,
                    glWidth: o,
                    glColor: s,
                    glBorderDash: c,
                    glBorderDashOffset: f,
                    rotation: -1 * M,
                    label: R,
                    major: i.major,
                    textBaseline: z,
                    textAlign: V
                  });
                }
              }), r.each(P, function (t) {
                if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? x.font : b.font, s.fillStyle = t.major ? y : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                  var i = t.label;
                  if (r.isArray(i)) for (var n = i.length, a = 1.5 * b.size, o = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) {
                    s.fillText("" + i[l], 0, o), o += a;
                  } else s.fillText(i, 0, 0);
                  s.restore();
                }
              }), f.display) {
                var F,
                    O,
                    L = 0,
                    R = o(f) / 2;
                if (g) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - R - C.bottom : e.top + R + C.top;else {
                  var V = "left" === a.position;
                  F = V ? e.left + R + C.top : e.right - R - C.top, O = e.top + (e.bottom - e.top) / 2, L = V ? -.5 * Math.PI : .5 * Math.PI;
                }
                s.save(), s.translate(F, O), s.rotate(L), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = k, s.font = S.font, s.fillText(f.labelString, 0, 0), s.restore();
              }

              if (h.drawBorder) {
                s.lineWidth = r.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = r.valueAtIndexOrDefault(h.color, 0);
                var z = e.left,
                    N = e.right + A,
                    B = e.top,
                    W = e.bottom + A,
                    E = r.aliasPixel(s.lineWidth);
                g ? (B = W = "top" === a.position ? e.bottom : e.top, B += E, W += E) : (z = N = "left" === a.position ? e.right : e.left, z += E, N += E), s.beginPath(), s.moveTo(z, B), s.lineTo(N, W), s.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          r = t(30);

      e.exports = function (t) {
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, e, i) {
            this.constructors[t] = e, this.defaults[t] = a.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
          },
          addScalesToLayout: function addScalesToLayout(t) {
            a.each(t.scales, function (e) {
              e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, r.addBox(t, e);
            });
          }
        };
      };
    }, {
      25: 25,
      30: 30,
      45: 45
    }],
    34: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        formatters: {
          values: function values(t) {
            return n.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, i) {
            var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
            var r = n.log10(Math.abs(a)),
                o = "";

            if (0 !== t) {
              var s = -1 * Math.floor(r);
              s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
            } else o = "0";

            return o;
          },
          logarithmic: function logarithmic(t, e, i) {
            var a = t / Math.pow(10, Math.floor(n.log10(t)));
            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    }],
    35: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45);
      n._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: r.noop,
            title: function title(t, e) {
              var i = "",
                  n = e.labels,
                  a = n ? n.length : 0;

              if (t.length > 0) {
                var r = t[0];
                r.xLabel ? i = r.xLabel : a > 0 && r.index < a && (i = n[r.index]);
              }

              return i;
            },
            afterTitle: r.noop,
            beforeBody: r.noop,
            beforeLabel: r.noop,
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i && (i += ": "), i += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: r.noop,
            afterBody: r.noop,
            beforeFooter: r.noop,
            footer: r.noop,
            afterFooter: r.noop
          }
        }
      }), e.exports = function (t) {
        function e(t, e) {
          var i = r.color(t);
          return i.alpha(e * i.alpha()).rgbaString();
        }

        function i(t, e) {
          return e && (r.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function o(t) {
          var e = n.global,
              i = r.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          };
        }

        t.Tooltip = a.extend({
          initialize: function initialize() {
            this._model = o(this._options), this._lastActive = [];
          },
          getTitle: function getTitle() {
            var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                n = t.title.apply(this, arguments),
                a = t.afterTitle.apply(this, arguments),
                r = [];
            return r = i(r = i(r = i(r, e), n), a);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var n = this,
                a = n._options.callbacks,
                o = [];
            return r.each(t, function (t) {
              var r = {
                before: [],
                lines: [],
                after: []
              };
              i(r.before, a.beforeLabel.call(n, t, e)), i(r.lines, a.label.call(n, t, e)), i(r.after, a.afterLabel.call(n, t, e)), o.push(r);
            }), o;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return r.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                n = t.footer.apply(this, arguments),
                a = t.afterFooter.apply(this, arguments),
                r = [];
            return r = i(r = i(r = i(r, e), n), a);
          },
          update: function update(e) {
            var i,
                n,
                a,
                s,
                l,
                u,
                d,
                c = this,
                h = c._options,
                f = c._model,
                p = c._model = o(h),
                g = c._active,
                m = c._data,
                v = {
              xAlign: f.xAlign,
              yAlign: f.yAlign
            },
                b = {
              x: f.x,
              y: f.y
            },
                y = {
              width: f.width,
              height: f.height
            },
                x = {
              x: f.caretX,
              y: f.caretY
            };

            if (g.length) {
              p.opacity = 1;
              var w = [],
                  k = [];
              x = t.Tooltip.positioners[h.position].call(c, g, c._eventPosition);
              var S = [];

              for (i = 0, n = g.length; i < n; ++i) {
                S.push((a = g[i], s = void 0, l = void 0, void 0, void 0, s = a._xScale, l = a._yScale || a._scale, u = a._index, d = a._datasetIndex, {
                  xLabel: s ? s.getLabelForIndex(u, d) : "",
                  yLabel: l ? l.getLabelForIndex(u, d) : "",
                  index: u,
                  datasetIndex: d,
                  x: a._model.x,
                  y: a._model.y
                }));
              }

              h.filter && (S = S.filter(function (t) {
                return h.filter(t, m);
              })), h.itemSort && (S = S.sort(function (t, e) {
                return h.itemSort(t, e, m);
              })), r.each(S, function (t) {
                w.push(h.callbacks.labelColor.call(c, t, c._chart)), k.push(h.callbacks.labelTextColor.call(c, t, c._chart));
              }), p.title = c.getTitle(S, m), p.beforeBody = c.getBeforeBody(S, m), p.body = c.getBody(S, m), p.afterBody = c.getAfterBody(S, m), p.footer = c.getFooter(S, m), p.x = Math.round(x.x), p.y = Math.round(x.y), p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = S, b = function (t, e, i, n) {
                var a = t.x,
                    r = t.y,
                    o = t.caretSize,
                    s = t.caretPadding,
                    l = t.cornerRadius,
                    u = i.xAlign,
                    d = i.yAlign,
                    c = o + s,
                    h = l + s;
                return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === d ? r += c : r -= "bottom" === d ? e.height + c : e.height / 2, "center" === d ? "left" === u ? a += c : "right" === u && (a -= c) : "left" === u ? a -= h : "right" === u && (a += h), {
                  x: a,
                  y: r
                };
              }(p, y = function (t, e) {
                var i = t._chart.ctx,
                    n = 2 * e.yPadding,
                    a = 0,
                    o = e.body,
                    s = o.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);
                s += e.beforeBody.length + e.afterBody.length;
                var l = e.title.length,
                    u = e.footer.length,
                    d = e.titleFontSize,
                    c = e.bodyFontSize,
                    h = e.footerFontSize;
                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;

                var f = 0,
                    p = function p(t) {
                  a = Math.max(a, i.measureText(t).width + f);
                };

                return i.font = r.fontString(d, e._titleFontStyle, e._titleFontFamily), r.each(e.title, p), i.font = r.fontString(c, e._bodyFontStyle, e._bodyFontFamily), r.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? c + 2 : 0, r.each(o, function (t) {
                  r.each(t.before, p), r.each(t.lines, p), r.each(t.after, p);
                }), f = 0, i.font = r.fontString(h, e._footerFontStyle, e._footerFontFamily), r.each(e.footer, p), {
                  width: a += 2 * e.xPadding,
                  height: n
                };
              }(this, p), v = function (t, e) {
                var i,
                    n,
                    a,
                    r,
                    o,
                    s = t._model,
                    l = t._chart,
                    u = t._chart.chartArea,
                    d = "center",
                    c = "center";
                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                var h = (u.left + u.right) / 2,
                    f = (u.top + u.bottom) / 2;
                "center" === c ? (i = function i(t) {
                  return t <= h;
                }, n = function n(t) {
                  return t > h;
                }) : (i = function i(t) {
                  return t <= e.width / 2;
                }, n = function n(t) {
                  return t >= l.width - e.width / 2;
                }), a = function a(t) {
                  return t + e.width + s.caretSize + s.caretPadding > l.width;
                }, r = function r(t) {
                  return t - e.width - s.caretSize - s.caretPadding < 0;
                }, o = function o(t) {
                  return t <= f ? "top" : "bottom";
                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = o(s.y))) : n(s.x) && (d = "right", r(s.x) && (d = "center", c = o(s.y)));
                var p = t._options;
                return {
                  xAlign: p.xAlign ? p.xAlign : d,
                  yAlign: p.yAlign ? p.yAlign : c
                };
              }(this, y), c._chart);
            } else p.opacity = 0;

            return p.xAlign = v.xAlign, p.yAlign = v.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, c._model = p, e && h.custom && h.custom.call(c, p), c;
          },
          drawCaret: function drawCaret(t, e) {
            var i = this._chart.ctx,
                n = this._view,
                a = this.getCaretPosition(t, e, n);
            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, i) {
            var n,
                a,
                r,
                o,
                s,
                l,
                u = i.caretSize,
                d = i.cornerRadius,
                c = i.xAlign,
                h = i.yAlign,
                f = t.x,
                p = t.y,
                g = e.width,
                m = e.height;
            if ("center" === h) s = p + m / 2, "left" === c ? (a = (n = f) - u, r = n, o = s + u, l = s - u) : (a = (n = f + g) + u, r = n, o = s - u, l = s + u);else if ("left" === c ? (n = (a = f + d + u) - u, r = a + u) : "right" === c ? (n = (a = f + g - d - u) - u, r = a + u) : (n = (a = i.caretX) - u, r = a + u), "top" === h) s = (o = p) - u, l = o;else {
              s = (o = p + m) + u, l = o;
              var v = r;
              r = n, n = v;
            }
            return {
              x1: n,
              x2: a,
              x3: r,
              y1: o,
              y2: s,
              y3: l
            };
          },
          drawTitle: function drawTitle(t, i, n, a) {
            var o = i.title;

            if (o.length) {
              n.textAlign = i._titleAlign, n.textBaseline = "top";
              var s,
                  l,
                  u = i.titleFontSize,
                  d = i.titleSpacing;

              for (n.fillStyle = e(i.titleFontColor, a), n.font = r.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = o.length; s < l; ++s) {
                n.fillText(o[s], t.x, t.y), t.y += u + d, s + 1 === o.length && (t.y += i.titleMarginBottom - d);
              }
            }
          },
          drawBody: function drawBody(t, i, n, a) {
            var o = i.bodyFontSize,
                s = i.bodySpacing,
                l = i.body;
            n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = r.fontString(o, i._bodyFontStyle, i._bodyFontFamily);

            var u = 0,
                d = function d(e) {
              n.fillText(e, t.x + u, t.y), t.y += o + s;
            };

            n.fillStyle = e(i.bodyFontColor, a), r.each(i.beforeBody, d);
            var c = i.displayColors;
            u = c ? o + 2 : 0, r.each(l, function (s, l) {
              var u = e(i.labelTextColors[l], a);
              n.fillStyle = u, r.each(s.before, d), r.each(s.lines, function (r) {
                c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, o, o), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, o, o), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), n.fillStyle = u), d(r);
              }), r.each(s.after, d);
            }), u = 0, r.each(i.afterBody, d), t.y -= s;
          },
          drawFooter: function drawFooter(t, i, n, a) {
            var o = i.footer;
            o.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = r.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), r.each(o, function (e) {
              n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, i, n, a, r) {
            n.fillStyle = e(i.backgroundColor, r), n.strokeStyle = e(i.borderColor, r), n.lineWidth = i.borderWidth;
            var o = i.xAlign,
                s = i.yAlign,
                l = t.x,
                u = t.y,
                d = a.width,
                c = a.height,
                h = i.cornerRadius;
            n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === o && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === o && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var i = {
                width: e.width,
                height: e.height
              },
                  n = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && r && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i._options;
            return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !r.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
              x: t.x,
              y: t.y
            }, i.update(!0), i.pivot())), e;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                i,
                n = 0,
                a = 0,
                r = 0;

            for (e = 0, i = t.length; e < i; ++e) {
              var o = t[e];

              if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                n += s.x, a += s.y, ++r;
              }
            }

            return {
              x: Math.round(n / r),
              y: Math.round(a / r)
            };
          },
          nearest: function nearest(t, e) {
            var i,
                n,
                a,
                o = e.x,
                s = e.y,
                l = Number.POSITIVE_INFINITY;

            for (i = 0, n = t.length; i < n; ++i) {
              var u = t[i];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = r.distanceBetweenPoints(e, d);
                c < l && (l = c, a = u);
              }
            }

            if (a) {
              var h = a.tooltipPosition();
              o = h.x, s = h.y;
            }

            return {
              x: o,
              y: s
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45);
      n._set("global", {
        elements: {
          arc: {
            backgroundColor: n.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = a.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var i = this._view;

          if (i) {
            for (var n = r.getAngleFromPoint(i, {
              x: t,
              y: e
            }), a = n.angle, o = n.distance, s = i.startAngle, l = i.endAngle; l < s;) {
              l += 2 * Math.PI;
            }

            for (; a > l;) {
              a -= 2 * Math.PI;
            }

            for (; a < s;) {
              a += 2 * Math.PI;
            }

            var u = a >= s && a <= l,
                d = o >= i.innerRadius && o <= i.outerRadius;
            return u && d;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              i = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              i = e.startAngle,
              n = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45),
          o = n.global;
      n._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: o.defaultColor,
            borderWidth: 3,
            borderColor: o.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a = this._view,
              s = this._chart.ctx,
              l = a.spanGaps,
              u = this._children.slice(),
              d = o.elements.line,
              c = -1;

          for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || o.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) {
            e = u[t], i = r.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : r.canvas.lineTo(s, i._view, e._view), c = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45),
          o = n.global.defaultColor;

      function s(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }

      n._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: o,
            borderColor: o,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = a.extend({
        inRange: function inRange(t, e) {
          var i = this._view;
          return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
        },
        inLabelRange: s,
        inXRange: s,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              i = this._model,
              a = this._chart.ctx,
              s = e.pointStyle,
              l = e.radius,
              u = e.x,
              d = e.y,
              c = r.color,
              h = 0;
          e.skip || (a.strokeStyle = e.borderColor || o, a.lineWidth = r.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || o, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), r.canvas.drawPoint(a, s, l, u, d));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26);

      function r(t) {
        return void 0 !== t._view.width;
      }

      function o(t) {
        var e,
            i,
            n,
            a,
            o = t._view;

        if (r(t)) {
          var s = o.width / 2;
          e = o.x - s, i = o.x + s, n = Math.min(o.y, o.base), a = Math.max(o.y, o.base);
        } else {
          var l = o.height / 2;
          e = Math.min(o.x, o.base), i = Math.max(o.x, o.base), n = o.y - l, a = o.y + l;
        }

        return {
          left: e,
          top: n,
          right: i,
          bottom: a
        };
      }

      n._set("global", {
        elements: {
          rectangle: {
            backgroundColor: n.global.defaultColor,
            borderColor: n.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a,
              r,
              o,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;

          if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, r = 1, o = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, r = (n = l.base) > i ? 1 : -1, o = l.borderSkipped || "bottom"), u) {
            var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                c = (u = u > d ? d : u) / 2,
                h = t + ("left" !== o ? c * a : 0),
                f = e + ("right" !== o ? -c * a : 0),
                p = i + ("top" !== o ? c * r : 0),
                g = n + ("bottom" !== o ? -c * r : 0);
            h !== f && (i = p, n = g), p !== g && (t = h, e = f);
          }

          s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
          var m = [[t, n], [t, i], [e, i], [e, n]],
              v = ["bottom", "left", "top", "right"].indexOf(o, 0);

          function b(t) {
            return m[(v + t) % 4];
          }

          -1 === v && (v = 0);
          var y = b(0);
          s.moveTo(y[0], y[1]);

          for (var x = 1; x < 4; x++) {
            y = b(x), s.lineTo(y[0], y[1]);
          }

          s.fill(), u && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var i = !1;

          if (this._view) {
            var n = o(this);
            i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
          }

          return i;
        },
        inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;
          var i = o(this);
          return r(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
        },
        inXRange: function inXRange(t) {
          var e = o(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = o(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              i = this._view;
          return r(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    }],
    40: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function (t, e, i) {
      "use strict";

      var n = t(42);
      i = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, i, n, a, r) {
          if (r) {
            var o = Math.min(r, n / 2),
                s = Math.min(r, a / 2);
            t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - o, i + a), t.lineTo(e + o, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + o, i);
          } else t.rect(e, i, n, a);
        },
        drawPoint: function drawPoint(t, e, i, n, a) {
          var r, o, s, l, u, d;

          if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
            if (!(isNaN(i) || i <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;

                case "triangle":
                  t.beginPath(), u = (o = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - o / 2, a + u / 3), t.lineTo(n + o / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var c = i / Math.SQRT2,
                      h = n - c,
                      f = a - c,
                      p = Math.SQRT2 * i;
                  t.beginPath(), this.roundedRect(t, h, f, p, p, i / 2), t.closePath(), t.fill();
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
                  break;

                case "cross":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "star":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "line":
                  t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "dash":
                  t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath();
              }

              t.stroke();
            }
          } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
          i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
        }
      };
      n.clear = i.clear, n.drawRoundedRectangle = function (t) {
        t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath();
      };
    }, {
      42: 42
    }],
    42: [function (t, e, i) {
      "use strict";

      var n,
          a = {
        noop: function noop() {},
        uid: (n = 0, function () {
          return n++;
        }),
        isNullOrUndef: function isNullOrUndef(t) {
          return null === t || void 0 === t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
          return a.valueOrDefault(a.isArray(t) ? t[e] : t, i);
        },
        callback: function callback(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        },
        each: function each(t, e, i, n) {
          var r, o, s;
          if (a.isArray(t)) {
            if (o = t.length, n) for (r = o - 1; r >= 0; r--) {
              e.call(i, t[r], r);
            } else for (r = 0; r < o; r++) {
              e.call(i, t[r], r);
            }
          } else if (a.isObject(t)) for (o = (s = Object.keys(t)).length, r = 0; r < o; r++) {
            e.call(i, t[s[r]], s[r]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var i, n, r, o;
          if (!t || !e || t.length !== e.length) return !1;

          for (i = 0, n = t.length; i < n; ++i) {
            if (r = t[i], o = e[i], _instanceof(r, Array) && _instanceof(o, Array)) {
              if (!a.arrayEquals(r, o)) return !1;
            } else if (r !== o) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (a.isArray(t)) return t.map(a.clone);

          if (a.isObject(t)) {
            for (var e = {}, i = Object.keys(t), n = i.length, r = 0; r < n; ++r) {
              e[i[r]] = a.clone(t[i[r]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, i, n) {
          var r = e[t],
              o = i[t];
          a.isObject(r) && a.isObject(o) ? a.merge(r, o, n) : e[t] = a.clone(o);
        },
        _mergerIf: function _mergerIf(t, e, i) {
          var n = e[t],
              r = i[t];
          a.isObject(n) && a.isObject(r) ? a.mergeIf(n, r) : e.hasOwnProperty(t) || (e[t] = a.clone(r));
        },
        merge: function merge(t, e, i) {
          var n,
              r,
              o,
              s,
              l,
              u = a.isArray(e) ? e : [e],
              d = u.length;
          if (!a.isObject(t)) return t;

          for (n = (i = i || {}).merger || a._merger, r = 0; r < d; ++r) {
            if (e = u[r], a.isObject(e)) for (l = 0, s = (o = Object.keys(e)).length; l < s; ++l) {
              n(o[l], t, e, i);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return a.merge(t, e, {
            merger: a._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = function e(_e, i) {
            t[i] = _e;
          }, i = 1, n = arguments.length; i < n; ++i) {
            a.each(arguments[i], e);
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              n = function n() {
            this.constructor = i;
          };

          return n.prototype = e.prototype, i.prototype = new n(), i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i;
        }
      };
      e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, i) {
        return Array.prototype.indexOf.call(t, e, i);
      }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault;
    }, {}],
    43: [function (t, e, i) {
      "use strict";

      var n = t(42),
          a = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack: function easeOutBack(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: a
      }, n.easingEffects = a;
    }, {
      42: 42
    }],
    44: [function (t, e, i) {
      "use strict";

      var n = t(42);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!i || "normal" === i[1]) return 1.2 * e;

          switch (t = +i[2], i[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, i, a, r;
          return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, r = +t.left || 0) : e = i = a = r = +t || 0, {
            top: e,
            right: i,
            bottom: a,
            left: r,
            height: e + a,
            width: r + i
          };
        },
        resolve: function resolve(t, e, i) {
          var a, r, o;

          for (a = 0, r = t.length; a < r; ++a) {
            if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && n.isArray(o) && (o = o[i]), void 0 !== o)) return o;
          }
        }
      };
    }, {
      42: 42
    }],
    45: [function (t, e, i) {
      "use strict";

      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function (t, e, i) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    47: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = "$chartjs",
          r = "chartjs-",
          o = r + "render-monitor",
          s = r + "render-animation",
          l = ["animationstart", "webkitAnimationStart"],
          u = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

      function d(t, e) {
        var i = n.getStyle(t, e),
            a = i && i.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : void 0;
      }

      var c = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (t) {}

        return t;
      }() && {
        passive: !0
      };

      function h(t, e, i) {
        t.addEventListener(e, i, c);
      }

      function f(t, e, i) {
        t.removeEventListener(e, i, c);
      }

      function p(t, e, i, n, a) {
        return {
          type: t,
          chart: e,
          "native": a || null,
          x: void 0 !== i ? i : null,
          y: void 0 !== n ? n : null
        };
      }

      function g(t, e, i) {
        var u,
            d,
            c,
            f,
            g = t[a] || (t[a] = {}),
            m = g.resizer = function (t) {
          var e = document.createElement("div"),
              i = r + "size-monitor",
              n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
          e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
          var a = e.childNodes[0],
              o = e.childNodes[1];

          e._reset = function () {
            a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6;
          };

          var s = function s() {
            e._reset(), t();
          };

          return h(a, "scroll", s.bind(a, "expand")), h(o, "scroll", s.bind(o, "shrink")), e;
        }((u = function u() {
          if (g.resizer) return e(p("resize", i));
        }, c = !1, f = [], function () {
          f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function () {
            c = !1, u.apply(d, f);
          }));
        }));

        !function (t, e) {
          var i = t[a] || (t[a] = {}),
              r = i.renderProxy = function (t) {
            t.animationName === s && e();
          };

          n.each(l, function (e) {
            h(t, e, r);
          }), i.reflow = !!t.offsetParent, t.classList.add(o);
        }(t, function () {
          if (g.resizer) {
            var e = t.parentNode;
            e && e !== m.parentNode && e.insertBefore(m, e.firstChild), m._reset();
          }
        });
      }

      function m(t) {
        var e = t[a] || {},
            i = e.resizer;
        delete e.resizer, function (t) {
          var e = t[a] || {},
              i = e.renderProxy;
          i && (n.each(l, function (e) {
            f(t, e, i);
          }), delete e.renderProxy), t.classList.remove(o);
        }(t), i && i.parentNode && i.parentNode.removeChild(i);
      }

      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t,
              e,
              i,
              n = "from{opacity:0.99}to{opacity:1}";
          e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + o + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e));
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t ? (function (t, e) {
            var i = t.style,
                n = t.getAttribute("height"),
                r = t.getAttribute("width");

            if (t[a] = {
              initial: {
                height: n,
                width: r,
                style: {
                  display: i.display,
                  height: i.height,
                  width: i.width
                }
              }
            }, i.display = i.display || "block", null === r || "" === r) {
              var o = d(t, "width");
              void 0 !== o && (t.width = o);
            }

            if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = d(t, "height");
              void 0 !== o && (t.height = s);
            }
          }(t, e), i) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e[a]) {
            var i = e[a].initial;
            ["height", "width"].forEach(function (t) {
              var a = i[t];
              n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
            }), n.each(i.style || {}, function (t, i) {
              e.style[i] = t;
            }), e.width = e.width, delete e[a];
          }
        },
        addEventListener: function addEventListener(t, e, i) {
          var r = t.canvas;

          if ("resize" !== e) {
            var o = i[a] || (i[a] = {});
            h(r, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function (e) {
              i(function (t, e) {
                var i = u[t.type] || t.type,
                    a = n.getRelativePosition(t, e);
                return p(i, e, a.x, a.y, t);
              }(e, t));
            });
          } else g(r, i, t);
        },
        removeEventListener: function removeEventListener(t, e, i) {
          var n = t.canvas;

          if ("resize" !== e) {
            var r = ((i[a] || {}).proxies || {})[t.id + "_" + e];
            r && f(n, e, r);
          } else m(n);
        }
      }, n.addEvent = h, n.removeEvent = f;
    }, {
      45: 45
    }],
    48: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(46),
          r = t(47),
          o = r._enabled ? r : a;
      e.exports = n.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, o);
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52);
    }, {
      50: 50,
      51: 51,
      52: 52
    }],
    50: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          r = t(45);

      n._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      });

      var o = {
        dataset: function dataset(t) {
          var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              a = n && i.isDatasetVisible(e) && n.dataset._children || [],
              r = a.length || 0;
          return r ? function (t, e) {
            return e < r && a[e]._view || null;
          } : null;
        },
        boundary: function boundary(t) {
          var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;
          return function (t) {
            return {
              x: null === i ? t.x : i,
              y: null === n ? t.y : n
            };
          };
        }
      };

      function s(t, e, i) {
        var n,
            a = t._model || {},
            r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;

        switch (r) {
          case "bottom":
            return "start";

          case "top":
            return "end";

          case "zero":
            return "origin";

          case "origin":
          case "start":
          case "end":
            return r;

          default:
            return !1;
        }
      }

      function l(t) {
        var e,
            i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            r = null;
        if (isFinite(a)) return null;

        if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), void 0 !== r && null !== r) {
          if (void 0 !== r.x && void 0 !== r.y) return r;
          if ("number" == typeof r && isFinite(r)) return {
            x: (e = n.isHorizontal()) ? r : null,
            y: e ? null : r
          };
        }

        return null;
      }

      function u(t, e, i) {
        var n,
            a = t[e].fill,
            r = [e];
        if (!i) return a;

        for (; !1 !== a && -1 === r.indexOf(a);) {
          if (!isFinite(a)) return a;
          if (!(n = t[a])) return !1;
          if (n.visible) return a;
          r.push(a), a = n.fill;
        }

        return !1;
      }

      function d(t) {
        var e = t.fill,
            i = "dataset";
        return !1 === e ? null : (isFinite(e) || (i = "boundary"), o[i](t));
      }

      function c(t) {
        return t && !t.skip;
      }

      function h(t, e, i, n, a) {
        var o;

        if (n && a) {
          for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) {
            r.canvas.lineTo(t, e[o - 1], e[o]);
          }

          for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; o > 0; --o) {
            r.canvas.lineTo(t, i[o], i[o - 1], !0);
          }
        }
      }

      e.exports = {
        id: "filler",
        afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var i,
              n,
              r,
              o,
              c = (t.data.datasets || []).length,
              h = e.propagate,
              f = [];

          for (n = 0; n < c; ++n) {
            o = null, (r = (i = t.getDatasetMeta(n)).dataset) && r._model && _instanceof(r, a.Line) && (o = {
              visible: t.isDatasetVisible(n),
              fill: s(r, n, c),
              chart: t,
              el: r
            }), i.$filler = o, f.push(o);
          }

          for (n = 0; n < c; ++n) {
            (o = f[n]) && (o.fill = u(f, n, h), o.boundary = l(o), o.mapper = d(o));
          }
        },
        beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var i = e.meta.$filler;

          if (i) {
            var a = t.ctx,
                o = i.el,
                s = o._view,
                l = o._children || [],
                u = i.mapper,
                d = s.backgroundColor || n.global.defaultColor;
            u && d && l.length && (r.canvas.clipArea(a, t.chartArea), function (t, e, i, n, a, r) {
              var o,
                  s,
                  l,
                  u,
                  d,
                  f,
                  p,
                  g = e.length,
                  m = n.spanGaps,
                  v = [],
                  b = [],
                  y = 0,
                  x = 0;

              for (t.beginPath(), o = 0, s = g + !!r; o < s; ++o) {
                d = i(u = e[l = o % g]._view, l, n), f = c(u), p = c(d), f && p ? (y = v.push(u), x = b.push(d)) : y && x && (m ? (f && v.push(u), p && b.push(d)) : (h(t, v, b, y, x), y = x = 0, v = [], b = []));
              }

              h(t, v, b, y, x), t.closePath(), t.fillStyle = a, t.fill();
            }(a, l, u, s, d, o._loop), r.canvas.unclipArea(a));
          }
        }
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    51: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(30),
          s = r.noop;

      function l(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
      }

      n._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var i = e.datasetIndex,
                n = this.chart,
                a = n.getDatasetMeta(i);
            a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return r.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return {
                  text: e.label,
                  fillStyle: r.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(i),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var i = 0; i < t.data.datasets.length; i++) {
            e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      });

      var u = a.extend({
        initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              i = r.callback(e.generateLabels, [t.chart], t) || [];
          e.filter && (i = i.filter(function (i) {
            return e.filter(i, t.chart.data);
          })), t.options.reverse && i.reverse(), t.legendItems = i;
        },
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = e.display,
              o = t.ctx,
              s = n.global,
              u = r.valueOrDefault,
              d = u(i.fontSize, s.defaultFontSize),
              c = u(i.fontStyle, s.defaultFontStyle),
              h = u(i.fontFamily, s.defaultFontFamily),
              f = r.fontString(d, c, h),
              p = t.legendHitBoxes = [],
              g = t.minSize,
              m = t.isHorizontal();
          if (m ? (g.width = t.maxWidth, g.height = a ? 10 : 0) : (g.width = a ? 10 : 0, g.height = t.maxHeight), a) if (o.font = f, m) {
            var v = t.lineWidths = [0],
                b = t.legendItems.length ? d + i.padding : 0;
            o.textAlign = "left", o.textBaseline = "top", r.each(t.legendItems, function (e, n) {
              var a = l(i, d) + d / 2 + o.measureText(e.text).width;
              v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), p[n] = {
                left: 0,
                top: 0,
                width: a,
                height: d
              }, v[v.length - 1] += a + i.padding;
            }), g.height += b;
          } else {
            var y = i.padding,
                x = t.columnWidths = [],
                w = i.padding,
                k = 0,
                S = 0,
                C = d + y;
            r.each(t.legendItems, function (t, e) {
              var n = l(i, d) + d / 2 + o.measureText(t.text).width;
              S + C > g.height && (w += k + i.padding, x.push(k), k = 0, S = 0), k = Math.max(k, n), S += C, p[e] = {
                left: 0,
                top: 0,
                width: n,
                height: d
              };
            }), w += k, x.push(k), g.width += w;
          }
          t.width = g.width, t.height = g.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function draw() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = n.global,
              o = a.elements.line,
              s = t.width,
              u = t.lineWidths;

          if (e.display) {
            var d,
                c = t.ctx,
                h = r.valueOrDefault,
                f = h(i.fontColor, a.defaultFontColor),
                p = h(i.fontSize, a.defaultFontSize),
                g = h(i.fontStyle, a.defaultFontStyle),
                m = h(i.fontFamily, a.defaultFontFamily),
                v = r.fontString(p, g, m);
            c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
            var b = l(i, p),
                y = t.legendHitBoxes,
                x = t.isHorizontal();
            d = x ? {
              x: t.left + (s - u[0]) / 2,
              y: t.top + i.padding,
              line: 0
            } : {
              x: t.left + i.padding,
              y: t.top + i.padding,
              line: 0
            };
            var w = p + i.padding;
            r.each(t.legendItems, function (n, l) {
              var f = c.measureText(n.text).width,
                  g = b + p / 2 + f,
                  m = d.x,
                  v = d.y;
              x ? m + g >= s && (v = d.y += w, d.line++, m = d.x = t.left + (s - u[d.line]) / 2) : v + w > t.bottom && (m = d.x = m + t.columnWidths[d.line] + i.padding, v = d.y = t.top + i.padding, d.line++), function (t, i, n) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, o.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, o.borderDashOffset), c.lineJoin = h(n.lineJoin, o.borderJoinStyle), c.lineWidth = h(n.lineWidth, o.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
                  var s = 0 === h(n.lineWidth, o.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(n.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                    var l = p * Math.SQRT2 / 2,
                        u = l / Math.SQRT2,
                        d = t + u,
                        f = i + u;
                    r.canvas.drawPoint(c, n.pointStyle, l, d, f);
                  } else s || c.strokeRect(t, i, b, p), c.fillRect(t, i, b, p);

                  c.restore();
                }
              }(m, v, n), y[l].left = m, y[l].top = v, function (t, e, i, n) {
                var a = p / 2,
                    r = b + a + t,
                    o = e + a;
                c.fillText(i.text, r, o), i.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(r + n, o), c.stroke());
              }(m, v, n, f), x ? d.x += g + i.padding : d.y += w;
            });
          }
        },
        handleEvent: function handleEvent(t) {
          var e = this,
              i = e.options,
              n = "mouseup" === t.type ? "click" : t.type,
              a = !1;

          if ("mousemove" === n) {
            if (!i.onHover) return;
          } else {
            if ("click" !== n) return;
            if (!i.onClick) return;
          }

          var r = t.x,
              o = t.y;
          if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
            var u = s[l];

            if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
              if ("click" === n) {
                i.onClick.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }

              if ("mousemove" === n) {
                i.onHover.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }
            }
          }
          return a;
        }
      });

      function d(t, e) {
        var i = new u({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        o.configure(t, i, e), o.addBox(t, i), t.legend = i;
      }

      e.exports = {
        id: "legend",
        _element: u,
        beforeInit: function beforeInit(t) {
          var e = t.options.legend;
          e && d(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              i = t.legend;
          e ? (r.mergeIf(e, n.global.legend), i ? (o.configure(t, i, e), i.options = e) : d(t, e)) : i && (o.removeBox(t, i), delete t.legend);
        },
        afterEvent: function afterEvent(t, e) {
          var i = t.legend;
          i && i.handleEvent(e);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    52: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          r = t(45),
          o = t(30),
          s = r.noop;

      n._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });

      var l = a.extend({
        initialize: function initialize(t) {
          r.extend(this, t), this.legendHitBoxes = [];
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: s,
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = r.valueOrDefault,
              i = t.options,
              a = i.display,
              o = e(i.fontSize, n.global.defaultFontSize),
              s = t.minSize,
              l = r.isArray(i.text) ? i.text.length : 1,
              u = r.options.toLineHeight(i.lineHeight, o),
              d = a ? l * u + 2 * i.padding : 0;
          t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function draw() {
          var t = this,
              e = t.ctx,
              i = r.valueOrDefault,
              a = t.options,
              o = n.global;

          if (a.display) {
            var s,
                l,
                u,
                d = i(a.fontSize, o.defaultFontSize),
                c = i(a.fontStyle, o.defaultFontStyle),
                h = i(a.fontFamily, o.defaultFontFamily),
                f = r.fontString(d, c, h),
                p = r.options.toLineHeight(a.lineHeight, d),
                g = p / 2 + a.padding,
                m = 0,
                v = t.top,
                b = t.left,
                y = t.bottom,
                x = t.right;
            e.fillStyle = i(a.fontColor, o.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (x - b) / 2, u = v + g, s = x - b) : (l = "left" === a.position ? b + g : x - g, u = v + (y - v) / 2, s = y - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
            var w = a.text;
            if (r.isArray(w)) for (var k = 0, S = 0; S < w.length; ++S) {
              e.fillText(w[S], 0, k, s), k += p;
            } else e.fillText(w, 0, 0, s);
            e.restore();
          }
        }
      });

      function u(t, e) {
        var i = new l({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        o.configure(t, i, e), o.addBox(t, i), t.titleBlock = i;
      }

      e.exports = {
        id: "title",
        _element: l,
        beforeInit: function beforeInit(t) {
          var e = t.options.title;
          e && u(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              i = t.titleBlock;
          e ? (r.mergeIf(e, n.global.title), i ? (o.configure(t, i, e), i.options = e) : u(t, e)) : i && (o.removeBox(t, i), delete t.titleBlock);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    53: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        var e = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                i = e.getLabels();
            e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this,
                n = i.chart.data,
                a = i.isHorizontal();
            return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var i,
                n = this,
                a = n.options.offset,
                r = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);

            if (void 0 !== t && null !== t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
              var o = n.getLabels();
              t = i || t;
              var s = o.indexOf(t);
              e = -1 !== s ? s : e;
            }

            if (n.isHorizontal()) {
              var l = n.width / r,
                  u = l * (e - n.minIndex);
              return a && (u += l / 2), n.left + Math.round(u);
            }

            var d = n.height / r,
                c = d * (e - n.minIndex);
            return a && (c += d / 2), n.top + Math.round(c);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.options.offset,
                n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                a = e.isHorizontal(),
                r = (a ? e.width : e.height) / n;
            return t -= a ? e.left : e.top, i && (t -= r / 2), (t <= 0 ? 0 : Math.round(t / r)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        });
      };
    }, {}],
    54: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          r = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: r.formatters.linear
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                r = t.isHorizontal();

            function o(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null;
            var s = e.stacked;

            if (void 0 === s && a.each(n, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              a.each(n, function (n, r) {
                var s = i.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = l[u].positiveValues,
                    c = l[u].negativeValues;
                i.isDatasetVisible(r) && o(s) && a.each(n.data, function (i, n) {
                  var a = +t.getRightValue(i);
                  isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a);
                });
              }), a.each(l, function (e) {
                var i = e.positiveValues.concat(e.negativeValues),
                    n = a.min(i),
                    r = a.max(i);
                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r);
              });
            } else a.each(n, function (e, n) {
              var r = i.getDatasetMeta(n);
              i.isDatasetVisible(n) && o(r) && a.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || r.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
              });
            });

            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;
            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e = this,
                i = e.start,
                n = +e.getRightValue(t),
                a = e.end - i;
            return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.isHorizontal(),
                n = i ? e.width : e.height,
                a = (i ? t - e.left : e.bottom - t) / n;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, e);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    55: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = n.noop;
        t.LinearScaleBase = t.Scale.extend({
          getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var i = n.sign(t.min),
                  a = n.sign(t.max);
              i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0);
            }

            var r = void 0 !== e.min || void 0 !== e.suggestedMin,
                o = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = t.getTickLimit(),
                a = {
              maxTicks: i = Math.max(2, i),
              min: e.min,
              max: e.max,
              stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                r = t.ticks = function (t, e) {
              var i,
                  a = [];
              if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var r = n.niceNum(e.max - e.min, !1);
                i = n.niceNum(r / (t.maxTicks - 1), !0);
              }
              var o = Math.floor(e.min / i) * i,
                  s = Math.ceil(e.max / i) * i;
              t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (o = t.min, s = t.max);
              var l = (s - o) / i;
              l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
              var u = 1;
              i < 1 && (u = Math.pow(10, i.toString().length - 2), o = Math.round(o * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : o);

              for (var d = 1; d < l; ++d) {
                a.push(Math.round((o + d * i) * u) / u);
              }

              return a.push(void 0 !== t.max ? t.max : s), a;
            }(a, t);

            t.handleDirectionalChanges(), t.max = n.max(r), t.min = n.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {
      45: 45
    }],
    56: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                a = i.data.datasets,
                r = t.isHorizontal();

            function o(e) {
              return r ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null, t.minNotZero = null;
            var s = e.stacked;

            if (void 0 === s && n.each(a, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && o(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              n.each(a, function (a, r) {
                var s = i.getDatasetMeta(r),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? r : "", s.stack].join(".");
                i.isDatasetVisible(r) && o(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function (e, i) {
                  var n = l[u],
                      a = +t.getRightValue(e);
                  isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
                }));
              }), n.each(l, function (e) {
                if (e.length > 0) {
                  var i = n.min(e),
                      a = n.max(e);
                  t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a);
                }
              });
            } else n.each(a, function (e, a) {
              var r = i.getDatasetMeta(a);
              i.isDatasetVisible(a) && o(r) && n.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || r.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
              });
            });

            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks,
                i = n.valueOrDefault;
            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1);
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = !t.isHorizontal(),
                a = {
              min: e.min,
              max: e.max
            },
                r = t.ticks = function (t, e) {
              var i,
                  a,
                  r = [],
                  o = n.valueOrDefault,
                  s = o(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                  l = Math.floor(n.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));
              0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), r.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));
              var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1;

              do {
                r.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d;
              } while (i < l || i === l && a < u);

              var c = o(t.max, s);
              return r.push(c), r;
            }(a, t);

            t.max = n.max(r), t.min = n.min(r), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && r.reverse();
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          _getFirstTickValue: function _getFirstTickValue(t) {
            var e = Math.floor(n.log10(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          },
          getPixelForValue: function getPixelForValue(e) {
            var i,
                a,
                r,
                o,
                s,
                l = this,
                u = l.options.ticks.reverse,
                d = n.log10,
                c = l._getFirstTickValue(l.minNotZero),
                h = 0;

            return e = +l.getRightValue(e), u ? (r = l.end, o = l.start, s = -1) : (r = l.start, o = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== r && (0 === r && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), r = c), 0 !== e && (h += i / (d(o) - d(r)) * (d(e) - d(r))), a += s * h), a;
          },
          getValueForPixel: function getValueForPixel(e) {
            var i,
                a,
                r,
                o,
                s = this,
                l = s.options.ticks.reverse,
                u = n.log10,
                d = s._getFirstTickValue(s.minNotZero);

            if (l ? (a = s.end, r = s.start) : (a = s.start, r = s.end), s.isHorizontal() ? (i = s.width, o = l ? s.right - e : e - s.left) : (i = s.height, o = l ? e - s.top : s.bottom - e), o !== a) {
              if (0 === a) {
                var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                o -= c, i -= c, a = d;
              }

              o *= u(r) - u(a), o /= i, o = Math.pow(10, u(a) + o);
            }

            return o;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, e);
      };
    }, {
      34: 34,
      45: 45
    }],
    57: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          r = t(34);

      e.exports = function (t) {
        var e = n.global,
            i = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: r.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        };

        function o(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function s(t) {
          var i = t.options.pointLabels,
              n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
              r = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
              o = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
          return {
            size: n,
            style: r,
            family: o,
            font: a.fontString(n, r, o)
          };
        }

        function l(t, e, i, n, a) {
          return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
          } : t < n || t > a ? {
            start: e - i - 5,
            end: e
          } : {
            start: e,
            end: e + i + 5
          };
        }

        function u(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }

        function d(t, e, i, n) {
          if (a.isArray(e)) for (var r = i.y, o = 1.5 * n, s = 0; s < e.length; ++s) {
            t.fillText(e[s], i.x, r), r += o;
          } else t.fillText(e, i.x, i.y);
        }

        function c(t, e, i) {
          90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h);
        }

        function h(t) {
          return a.isNumber(t) ? t : 0;
        }

        var f = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var r = a.min([t.height, t.width]),
                o = a.valueOrDefault(n.fontSize, e.defaultFontSize);
            t.drawingArea = i.display ? r / 2 - (o / 2 + n.backdropPaddingY) : r / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                i = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
            a.each(e.data.datasets, function (r, o) {
              if (e.isDatasetVisible(o)) {
                var s = e.getDatasetMeta(o);
                a.each(r.data, function (e, a) {
                  var r = +t.getRightValue(e);
                  isNaN(r) || s.data[a].hidden || (i = Math.min(r, i), n = Math.max(r, n));
                });
              }
            }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t, e;
            this.options.pointLabels.display ? function (t) {
              var e,
                  i,
                  n,
                  r = s(t),
                  u = Math.min(t.height / 2, t.width / 2),
                  d = {
                r: t.width,
                l: 0,
                t: t.height,
                b: 0
              },
                  c = {};
              t.ctx.font = r.font, t._pointLabelSizes = [];
              var h,
                  f,
                  p,
                  g = o(t);

              for (e = 0; e < g; e++) {
                n = t.getPointPosition(e, u), h = t.ctx, f = r.size, p = t.pointLabels[e] || "", i = a.isArray(p) ? {
                  w: a.longestText(h, h.font, p),
                  h: p.length * f + 1.5 * (p.length - 1) * f
                } : {
                  w: h.measureText(p).width,
                  h: f
                }, t._pointLabelSizes[e] = i;
                var m = t.getIndexAngle(e),
                    v = a.toDegrees(m) % 360,
                    b = l(v, n.x, i.w, 0, 180),
                    y = l(v, n.y, i.h, 90, 270);
                b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), y.start < d.t && (d.t = y.start, c.t = m), y.end > d.b && (d.b = y.end, c.b = m);
              }

              t.setReductions(u, d, c);
            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function setReductions(t, e, i) {
            var n = e.l / Math.sin(i.l),
                a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                r = -e.t / Math.cos(i.t),
                o = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
            n = h(n), a = h(a), r = h(r), o = h(o), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (r + o) / 2)), this.setCenterPoint(n, a, r, o);
          },
          setCenterPoint: function setCenterPoint(t, e, i, n) {
            var a = this,
                r = a.width - e - a.drawingArea,
                o = t + a.drawingArea,
                s = i + a.drawingArea,
                l = a.height - n - a.drawingArea;
            a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var i = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
          },
          getPointPosition: function getPointPosition(t, e) {
            var i = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * e) + this.xCenter,
              y: Math.round(Math.sin(i) * e) + this.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          },
          draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                r = i.ticks,
                l = a.valueOrDefault;

            if (i.display) {
              var h = t.ctx,
                  f = this.getIndexAngle(0),
                  p = l(r.fontSize, e.defaultFontSize),
                  g = l(r.fontStyle, e.defaultFontStyle),
                  m = l(r.fontFamily, e.defaultFontFamily),
                  v = a.fontString(p, g, m);
              a.each(t.ticks, function (i, s) {
                if (s > 0 || r.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

                  if (n.display && 0 !== s && function (t, e, i, n) {
                    var r = t.ctx;
                    if (r.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), r.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
                      var s = o(t);
                      if (0 === s) return;
                      r.beginPath();
                      var l = t.getPointPosition(0, i);
                      r.moveTo(l.x, l.y);

                      for (var u = 1; u < s; u++) {
                        l = t.getPointPosition(u, i), r.lineTo(l.x, l.y);
                      }

                      r.closePath(), r.stroke();
                    }
                  }(t, n, u, s), r.display) {
                    var d = l(r.fontColor, e.defaultFontColor);

                    if (h.font = v, h.save(), h.translate(t.xCenter, t.yCenter), h.rotate(f), r.showLabelBackdrop) {
                      var c = h.measureText(i).width;
                      h.fillStyle = r.backdropColor, h.fillRect(-c / 2 - r.backdropPaddingX, -u - p / 2 - r.backdropPaddingY, c + 2 * r.backdropPaddingX, p + 2 * r.backdropPaddingY);
                    }

                    h.textAlign = "center", h.textBaseline = "middle", h.fillStyle = d, h.fillText(i, 0, -u), h.restore();
                  }
                }
              }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                var i = t.ctx,
                    n = t.options,
                    r = n.angleLines,
                    l = n.pointLabels;
                i.lineWidth = r.lineWidth, i.strokeStyle = r.color;
                var h = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                    f = s(t);
                i.textBaseline = "top";

                for (var p = o(t) - 1; p >= 0; p--) {
                  if (r.display) {
                    var g = t.getPointPosition(p, h);
                    i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(g.x, g.y), i.stroke(), i.closePath();
                  }

                  if (l.display) {
                    var m = t.getPointPosition(p, h + 5),
                        v = a.valueAtIndexOrDefault(l.fontColor, p, e.defaultFontColor);
                    i.font = f.font, i.fillStyle = v;
                    var b = t.getIndexAngle(p),
                        y = a.toDegrees(b);
                    i.textAlign = u(y), c(y, t._pointLabelSizes[p], m), d(i, t.pointLabels[p] || "", m, f.size);
                  }
                }
              }(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", f, i);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    58: [function (t, e, i) {
      "use strict";

      var n = t(1);
      n = "function" == typeof n ? n : window.moment;
      var a = t(25),
          r = t(45),
          o = Number.MIN_SAFE_INTEGER || -9007199254740991,
          s = Number.MAX_SAFE_INTEGER || 9007199254740991,
          l = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          u = Object.keys(l);

      function d(t, e) {
        return t - e;
      }

      function c(t) {
        var e,
            i,
            n,
            a = {},
            r = [];

        for (e = 0, i = t.length; e < i; ++e) {
          a[n = t[e]] || (a[n] = !0, r.push(n));
        }

        return r;
      }

      function h(t, e, i, n) {
        var a = function (t, e, i) {
          for (var n, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
            if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return {
              lo: null,
              hi: r
            };
            if (r[e] < i) o = n + 1;else {
              if (!(a[e] > i)) return {
                lo: a,
                hi: r
              };
              s = n - 1;
            }
          }

          return {
            lo: r,
            hi: null
          };
        }(t, e, i),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (i - r[e]) / s : 0,
            u = (o[n] - r[n]) * l;

        return r[n] + u;
      }

      function f(t, e) {
        var i = e.parser,
            a = e.parser || e.format;
        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (_instanceof(t, n) || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t);
      }

      function p(t, e) {
        if (r.isNullOrUndef(t)) return null;
        var i = e.options.time,
            n = f(e.getRightValue(t), i);
        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
      }

      function g(t) {
        for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) {
          if (l[u[e]].common) return u[e];
        }
      }

      function m(t, e, i, a) {
        var o,
            d = a.time,
            c = d.unit || function (t, e, i, n) {
          var a,
              r,
              o,
              d = u.length;

          for (a = u.indexOf(t); a < d - 1; ++a) {
            if (o = (r = l[u[a]]).steps ? r.steps[r.steps.length - 1] : s, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return u[a];
          }

          return u[d - 1];
        }(d.minUnit, t, e, i),
            h = g(c),
            f = r.valueOrDefault(d.stepSize, d.unitStepSize),
            p = "week" === c && d.isoWeekday,
            m = a.ticks.major.enabled,
            v = l[c],
            b = n(t),
            y = n(e),
            x = [];

        for (f || (f = function (t, e, i, n) {
          var a,
              r,
              o,
              s = e - t,
              u = l[i],
              d = u.size,
              c = u.steps;
          if (!c) return Math.ceil(s / (n * d));

          for (a = 0, r = c.length; a < r && (o = c[a], !(Math.ceil(s / (d * o)) <= n)); ++a) {
            ;
          }

          return o;
        }(t, e, c, i)), p && (b = b.isoWeekday(p), y = y.isoWeekday(p)), b = b.startOf(p ? "day" : c), (y = y.startOf(p ? "day" : c)) < e && y.add(1, c), o = n(b), m && h && !p && !d.round && (o.startOf(h), o.add(~~((b - o) / (v.size * f)) * f, c)); o < y; o.add(f, c)) {
          x.push(+o);
        }

        return x.push(+o), x;
      }

      e.exports = function (t) {
        var e = t.Scale.extend({
          initialize: function initialize() {
            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          },
          update: function update() {
            var e = this.options;
            return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments);
          },
          getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                i,
                a,
                l,
                u,
                h = this,
                f = h.chart,
                g = h.options.time,
                m = g.unit || "day",
                v = s,
                b = o,
                y = [],
                x = [],
                w = [];

            for (t = 0, i = f.data.labels.length; t < i; ++t) {
              w.push(p(f.data.labels[t], h));
            }

            for (t = 0, i = (f.data.datasets || []).length; t < i; ++t) {
              if (f.isDatasetVisible(t)) {
                if (l = f.data.datasets[t].data, r.isObject(l[0])) for (x[t] = [], e = 0, a = l.length; e < a; ++e) {
                  u = p(l[e], h), y.push(u), x[t][e] = u;
                } else y.push.apply(y, w), x[t] = w.slice(0);
              } else x[t] = [];
            }

            w.length && (w = c(w).sort(d), v = Math.min(v, w[0]), b = Math.max(b, w[w.length - 1])), y.length && (y = c(y).sort(d), v = Math.min(v, y[0]), b = Math.max(b, y[y.length - 1])), v = p(g.min, h) || v, b = p(g.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === o ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
              data: y,
              datasets: x,
              labels: w
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                i,
                a = this,
                r = a.min,
                o = a.max,
                s = a.options,
                d = s.time,
                c = [],
                v = [];

            switch (s.ticks.source) {
              case "data":
                c = a._timestamps.data;
                break;

              case "labels":
                c = a._timestamps.labels;
                break;

              case "auto":
              default:
                c = m(r, o, a.getLabelCapacity(r), s);
            }

            for ("ticks" === s.bounds && c.length && (r = c[0], o = c[c.length - 1]), r = p(d.min, a) || r, o = p(d.max, a) || o, t = 0, e = c.length; t < e; ++t) {
              (i = c[t]) >= r && i <= o && v.push(i);
            }

            return a.min = r, a.max = o, a._unit = d.unit || function (t, e, i, a) {
              var r,
                  o,
                  s = n.duration(n(a).diff(n(i)));

              for (r = u.length - 1; r >= u.indexOf(e); r--) {
                if (o = u[r], l[o].common && s.as(o) >= t.length) return o;
              }

              return u[e ? u.indexOf(e) : 0];
            }(v, d.minUnit, a.min, a.max), a._majorUnit = g(a._unit), a._table = function (t, e, i, n) {
              if ("linear" === n || !t.length) return [{
                time: e,
                pos: 0
              }, {
                time: i,
                pos: 1
              }];
              var a,
                  r,
                  o,
                  s,
                  l,
                  u = [],
                  d = [e];

              for (a = 0, r = t.length; a < r; ++a) {
                (s = t[a]) > e && s < i && d.push(s);
              }

              for (d.push(i), a = 0, r = d.length; a < r; ++a) {
                l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                  time: s,
                  pos: a / (r - 1)
                });
              }

              return u;
            }(a._timestamps.data, r, o, s.distribution), a._offsets = function (t, e, i, n, a) {
              var r,
                  o,
                  s = 0,
                  l = 0;
              return a.offset && e.length && (a.time.min || (r = e.length > 1 ? e[1] : n, o = e[0], s = (h(t, "time", r, "pos") - h(t, "time", o, "pos")) / 2), a.time.max || (r = e[e.length - 1], o = e.length > 1 ? e[e.length - 2] : i, l = (h(t, "time", r, "pos") - h(t, "time", o, "pos")) / 2)), {
                left: s,
                right: l
              };
            }(a._table, v, r, o, s), a._labelFormat = function (t, e) {
              var i,
                  n,
                  a,
                  r = t.length;

              for (i = 0; i < r; i++) {
                if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0);
              }

              return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(a._timestamps.data, d), function (t, e) {
              var i,
                  a,
                  r,
                  o,
                  s = [];

              for (i = 0, a = t.length; i < a; ++i) {
                r = t[i], o = !!e && r === +n(r).startOf(e), s.push({
                  value: r,
                  major: o
                });
              }

              return s;
            }(v, a._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this.chart.data,
                n = this.options.time,
                a = i.labels && t < i.labels.length ? i.labels[t] : "",
                o = i.datasets[e].data[t];
            return r.isObject(o) && (a = this.getRightValue(o)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat);
          },
          tickFormatFunction: function tickFormatFunction(t, e, i, n) {
            var a = this.options,
                o = t.valueOf(),
                s = a.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                d = s[u],
                c = t.clone().startOf(u).valueOf(),
                h = a.ticks.major,
                f = h.enabled && u && d && o === c,
                p = t.format(n || (f ? d : l)),
                g = f ? h : a.ticks.minor,
                m = r.valueOrDefault(g.callback, g.userCallback);
            return m ? m(p, e, i) : p;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                i,
                a = [];

            for (e = 0, i = t.length; e < i; ++e) {
              a.push(this.tickFormatFunction(n(t[e].value), e, t));
            }

            return a;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = h(e._table, "time", t, "pos");
            return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = p(t, this)), null !== n) return this.getPixelForOffset(n);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                a = e._horizontal ? e.left : e.top,
                r = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                o = h(e._table, "pos", r, "time");
            return n(o);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = r.toRadians(e.maxRotation),
                o = Math.cos(n),
                s = Math.sin(n);
            return i * o + r.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                i = e.options.time.displayFormats.millisecond,
                a = e.tickFormatFunction(n(t), 0, [], i),
                r = e.getLabelWidth(a),
                o = e.isHorizontal() ? e.width : e.height,
                s = Math.floor(o / r);
            return s > 0 ? s : 1;
          }
        });
        t.scaleService.registerScaleType("time", e, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      25: 25,
      45: 45
    }]
  }, {}, [7])(7);
}), function (t) {
  WOW = function WOW() {
    return {
      init: function init() {
        var e = [],
            i = 1;

        function n() {
          var i = window.innerHeight,
              n = window.scrollY;
          t(".wow").each(function () {
            if ("visible" != t(this).css("visibility") && (i + n - 100 > a(this) && n < a(this) || i + n - 100 > a(this) + t(this).height() && n < a(this) + t(this).height() || i + n == t(document).height() && a(this) + 100 > t(document).height())) {
              var r = t(this).index(".wow"),
                  o = t(this).attr("data-wow-delay");

              if (o) {
                o = t(this).attr("data-wow-delay").slice(0, -1);
                var s = this;
                parseFloat(o);
                t(s).addClass("animated"), t(s).css({
                  visibility: "visible"
                }), t(s).css({
                  "animation-delay": o
                }), t(s).css({
                  "animation-name": e[r]
                });
                var l = 1e3 * t(this).css("animation-duration").slice(0, -1);
                t(this).attr("data-wow-delay") && (l += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
                s = this;
                setTimeout(function () {
                  t(s).removeClass("animated");
                }, l);
              } else {
                t(this).addClass("animated"), t(this).css({
                  visibility: "visible"
                }), t(this).css({
                  "animation-name": e[r]
                });
                l = 1e3 * t(this).css("animation-duration").slice(0, -1), s = this;
                setTimeout(function () {
                  t(s).removeClass("animated");
                }, l);
              }
            }
          });
        }

        function a(t) {
          var e = t.getBoundingClientRect(),
              i = document.body,
              n = document.documentElement,
              a = window.pageYOffset || n.scrollTop || i.scrollTop,
              r = n.clientTop || i.clientTop || 0,
              o = e.top + a - r;
          return Math.round(o);
        }

        t(".wow").each(function () {
          t(this).css({
            visibility: "hidden"
          }), e[t(this).index(".wow")] = t(this).css("animation-name"), t(this).css({
            "animation-name": "none"
          });
        }), t(window).scroll(function () {
          var e, r;
          i ? (e = window.innerHeight, r = window.scrollY, t(".wow.animated").each(function () {
            if (e + r - 100 > a(this) && r > a(this) + 100 || e + r - 100 < a(this) && r < a(this) + 100 || a(this) + t(this).height > t(document).height() - 100) t(this).removeClass("animated"), t(this).css({
              "animation-name": "none"
            }), t(this).css({
              visibility: "hidden"
            });else {
              var i = 1e3 * t(this).css("animation-duration").slice(0, -1);
              t(this).attr("data-wow-delay") && (i += 1e3 * t(this).attr("data-wow-delay").slice(0, -1));
              var n = this;
              setTimeout(function () {
                t(n).removeClass("animated");
              }, i);
            }
          }), n(), i--) : n();
        }), t(".wow").each(function () {
          var i = t(this).index(".wow"),
              n = t(this).attr("data-wow-delay");
          n ? (n = t(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), t(this).addClass("animated"), t(this).css({
            visibility: "visible"
          }), t(this).css({
            "animation-delay": n + "s"
          }), t(this).css({
            "animation-name": e[i]
          })) : (t(this).addClass("animated"), t(this).css({
            visibility: "visible"
          }), t(this).css({
            "animation-name": e[i]
          }));
        });
      }
    };
  };
}(jQuery);
var OFFSET_TOP = 50;
$(window).scroll(function () {
  $(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"));
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define([], function () {
    return e.apply(t);
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e.call(t) : t.Waves = e.call(t);
}("object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : void 0, function () {
  "use strict";

  var t = t || {},
      e = document.querySelectorAll.bind(document),
      i = Object.prototype.toString,
      n = "ontouchstart" in window;

  function a(t) {
    var e = _typeof(t);

    return "function" === e || "object" === e && !!t;
  }

  function r(t) {
    var n,
        r = i.call(t);
    return "[object String]" === r ? e(t) : a(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && t.hasOwnProperty("length") ? t : a(n = t) && n.nodeType > 0 ? [t] : [];
  }

  function o(t) {
    var e,
        i,
        n = {
      top: 0,
      left: 0
    },
        a = t && t.ownerDocument;
    return e = a.documentElement, void 0 !== t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = function (t) {
      return null !== (e = t) && e === e.window ? t : 9 === t.nodeType && t.defaultView;
      var e;
    }(a), {
      top: n.top + i.pageYOffset - e.clientTop,
      left: n.left + i.pageXOffset - e.clientLeft
    };
  }

  function s(t) {
    var e = "";

    for (var i in t) {
      t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
    }

    return e;
  }

  var l = {
    duration: 750,
    delay: 200,
    show: function show(t, e, i) {
      if (2 === t.button) return !1;
      e = e || this;
      var n = document.createElement("div");
      n.className = "waves-ripple waves-rippling", e.appendChild(n);
      var a = o(e),
          r = 0,
          u = 0;
      "touches" in t && t.touches.length ? (r = t.touches[0].pageY - a.top, u = t.touches[0].pageX - a.left) : (r = t.pageY - a.top, u = t.pageX - a.left), u = u >= 0 ? u : 0, r = r >= 0 ? r : 0;
      var d = "scale(" + e.clientWidth / 100 * 3 + ")",
          c = "translate(0,0)";
      i && (c = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", u), n.setAttribute("data-y", r), n.setAttribute("data-scale", d), n.setAttribute("data-translate", c);
      var h = {
        top: r + "px",
        left: u + "px"
      };
      n.classList.add("waves-notransition"), n.setAttribute("style", s(h)), n.classList.remove("waves-notransition"), h["-webkit-transform"] = d + " " + c, h["-moz-transform"] = d + " " + c, h["-ms-transform"] = d + " " + c, h["-o-transform"] = d + " " + c, h.transform = d + " " + c, h.opacity = "1";
      var f = "mousemove" === t.type ? 2500 : l.duration;
      h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", n.setAttribute("style", s(h));
    },
    hide: function hide(t, e) {
      for (var i = (e = e || this).getElementsByClassName("waves-rippling"), n = 0, a = i.length; n < a; n++) {
        d(t, e, i[n]);
      }
    }
  },
      u = {
    input: function input(t) {
      var e = t.parentNode;

      if ("div" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var i = document.createElement("div");
        i.className = "waves-input-wrapper", e.replaceChild(i, t), i.appendChild(t);
        var n = window.getComputedStyle(t, null);
        n.color, n.backgroundColor;
      }
    },
    img: function img(t) {
      var e = t.parentNode;

      if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var i = document.createElement("i");
        e.replaceChild(i, t), i.appendChild(t);
      }
    }
  };

  function d(t, e, i) {
    if (i) {
      i.classList.remove("waves-rippling");
      var n = i.getAttribute("data-x"),
          a = i.getAttribute("data-y"),
          r = i.getAttribute("data-scale"),
          o = i.getAttribute("data-translate"),
          u = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
      u < 0 && (u = 0), "mousemove" === t.type && (u = 150);
      var d = "mousemove" === t.type ? 2500 : l.duration;
      setTimeout(function () {
        var t = {
          top: a + "px",
          left: n + "px",
          opacity: "0",
          "-webkit-transition-duration": d + "ms",
          "-moz-transition-duration": d + "ms",
          "-o-transition-duration": d + "ms",
          "transition-duration": d + "ms",
          "-webkit-transform": r + " " + o,
          "-moz-transform": r + " " + o,
          "-ms-transform": r + " " + o,
          "-o-transform": r + " " + o,
          transform: r + " " + o
        };
        i.setAttribute("style", s(t)), setTimeout(function () {
          try {
            e.removeChild(i);
          } catch (t) {
            return !1;
          }
        }, d);
      }, u);
    }
  }

  var c = {
    touches: 0,
    allowEvent: function allowEvent(t) {
      var e = !0;
      return /^(mousedown|mousemove)$/.test(t.type) && c.touches && (e = !1), e;
    },
    registerEvent: function registerEvent(t) {
      var e = t.type;
      "touchstart" === e ? c.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
        c.touches && (c.touches -= 1);
      }, 500);
    }
  };

  function h(t) {
    var e = function (t) {
      if (!1 === c.allowEvent(t)) return null;

      for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
        if (i.classList.contains("waves-effect") && !_instanceof(i, SVGElement)) {
          e = i;
          break;
        }

        i = i.parentElement;
      }

      return e;
    }(t);

    if (null !== e) {
      if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;

      if (c.registerEvent(t), "touchstart" === t.type && l.delay) {
        var i = !1,
            a = setTimeout(function () {
          a = null, l.show(t, e);
        }, l.delay),
            r = function r(n) {
          a && (clearTimeout(a), a = null, l.show(t, e)), i || (i = !0, l.hide(n, e));
        };

        e.addEventListener("touchmove", function (t) {
          a && (clearTimeout(a), a = null), r(t);
        }, !1), e.addEventListener("touchend", r, !1), e.addEventListener("touchcancel", r, !1);
      } else l.show(t, e), n && (e.addEventListener("touchend", l.hide, !1), e.addEventListener("touchcancel", l.hide, !1)), e.addEventListener("mouseup", l.hide, !1), e.addEventListener("mouseleave", l.hide, !1);
    }
  }

  return t.init = function (t) {
    var e = document.body;
    "duration" in (t = t || {}) && (l.duration = t.duration), "delay" in t && (l.delay = t.delay), n && (e.addEventListener("touchstart", h, !1), e.addEventListener("touchcancel", c.registerEvent, !1), e.addEventListener("touchend", c.registerEvent, !1)), e.addEventListener("mousedown", h, !1);
  }, t.attach = function (t, e) {
    var n, a;
    t = r(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";

    for (var o = 0, s = t.length; o < s; o++) {
      a = (n = t[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (u[a](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e);
    }
  }, t.ripple = function (t, e) {
    var i = (t = r(t)).length;
    if ((e = e || {}).wait = e.wait || 0, e.position = e.position || null, i) for (var n, a, s, u = {}, d = 0, c = {
      type: "mousedown",
      button: 1
    }, h = function h(t, e) {
      return function () {
        l.hide(t, e);
      };
    }; d < i; d++) {
      if (n = t[d], a = e.position || {
        x: n.clientWidth / 2,
        y: n.clientHeight / 2
      }, s = o(n), u.x = s.left + a.x, u.y = s.top + a.y, c.pageX = u.x, c.pageY = u.y, l.show(c, n), e.wait >= 0 && null !== e.wait) {
        setTimeout(h({
          type: "mouseup",
          button: 1
        }, n), e.wait);
      }
    }
  }, t.calm = function (t) {
    for (var e = {
      type: "mouseup",
      button: 1
    }, i = 0, n = (t = r(t)).length; i < n; i++) {
      l.hide(e, t[i]);
    }
  }, t.displayEffect = function (e) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e);
  }, t;
}), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(), function (t) {
  t(document).ready(function () {
    var e = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (t) {
      return "input[type=" + t + "]";
    }).join(", ") + ", textarea",
        i = function i(t) {
      var e = t.siblings("label, i"),
          i = t.val().length,
          n = t.attr("placeholder");
      e[(i || n ? "add" : "remove") + "Class"]("active");
    },
        n = function n(t) {
      if (t.hasClass("validate")) {
        var e = t.val(),
            i = !e.length,
            n = !t[0].validity.badInput;
        if (i && n) t.removeClass("valid").removeClass("invalid");else {
          var a = t.is(":valid"),
              r = Number(t.attr("length")) || 0;
          a && (!r || r > e.length) ? t.removeClass("invalid").addClass("valid") : t.removeClass("valid").addClass("invalid");
        }
      }
    },
        a = function a() {
      var e = t(void 0);

      if (e.val().length) {
        var i = t(".hiddendiv"),
            n = e.css("font-family"),
            a = e.css("font-size");
        a && i.css("font-size", a), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
        var r = i.html().replace(/\n/g, "<br>");
        i.html(r), i.css("width", e.is(":visible") ? e.width() : t(window).width() / 2), e.css("height", i.height());
      }
    };

    if (t(e).each(function (e, n) {
      var a = t(n),
          r = a.siblings("label, i");
      i(a), n.validity.badInput && r.addClass("active");
    }), t(document).on("focus", e, function (e) {
      t(e.target).siblings("label, i").addClass("active");
    }), t(document).on("blur", e, function (e) {
      var i = t(e.target),
          a = !i.val(),
          r = !e.target.validity.badInput,
          o = void 0 === i.attr("placeholder");
      a && r && o && i.siblings("label, i").removeClass("active"), n(i);
    }), t(document).on("change", e, function (e) {
      var a = t(e.target);
      i(a), n(a);
    }), t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("reset", function (i) {
      var n = t(i.target);
      n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid").each(function (e, i) {
        var n = t(i),
            a = !n.val(),
            r = !n.attr("placeholder");
        a && r && n.siblings("label, i").removeClass("active");
      }), n.find("select.initialized").each(function (e, i) {
        var n = t(i),
            a = n.siblings("input.select-dropdown"),
            r = n.children("[selected]").val();
        n.val(r), a.val(r);
      }));
    }), t(".md-textarea-auto").length) {
      var r;
      r = window.attachEvent ? function (t, e, i) {
        t.attachEvent("on" + e, i);
      } : function (t, e, i) {
        t.addEventListener(e, i, !1);
      }, t(".md-textarea-auto").each(function () {
        var t = this;

        function e() {
          t.style.height = "auto", t.style.height = t.scrollHeight + "px";
        }

        function i() {
          window.setTimeout(e, 0);
        }

        r(t, "change", e), r(t, "cut", i), r(t, "paste", i), r(t, "drop", i), r(t, "keydown", i), e();
      });
    }

    t(".hiddendiv").first().length || ($hiddenDiv = t('<div class="hiddendiv common"></div>'), t("body").append($hiddenDiv)), t(".materialize-textarea").each(a), t("body").on("keyup keydown", ".materialize-textarea", a);
  });
}(jQuery), $("body").on("shown.bs.modal", ".modal", function () {
  $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")));
}), $("body").on("hidden.bs.modal", ".modal", function () {
  $("body").removeClass("scrollable");
});