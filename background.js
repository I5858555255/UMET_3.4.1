(function() {
    "use strict";
    var t = {
            79306: function(t, e, r) {
                var n = r(94901),
                    o = r(16823),
                    i = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new i(o(t) + " is not a function")
                }
            },
            90679: function(t, e, r) {
                var n = r(1625),
                    o = TypeError;
                t.exports = function(t, e) {
                    if (n(e, t)) return t;
                    throw new o("Incorrect invocation")
                }
            },
            28551: function(t, e, r) {
                var n = r(20034),
                    o = String,
                    i = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new i(o(t) + " is not an object")
                }
            },
            19617: function(t, e, r) {
                var n = r(25397),
                    o = r(35610),
                    i = r(26198),
                    a = function(t) {
                        return function(e, r, a) {
                            var c = n(e),
                                u = i(c);
                            if (0 === u) return !t && -1;
                            var s, f = o(a, u);
                            if (t && r !== r) {
                                while (u > f)
                                    if (s = c[f++], s !== s) return !0
                            } else
                                for (; u > f; f++)
                                    if ((t || f in c) && c[f] === r) return t || f || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                }
            },
            34527: function(t, e, r) {
                var n = r(43724),
                    o = r(34376),
                    i = TypeError,
                    a = Object.getOwnPropertyDescriptor,
                    c = n && ! function() {
                        if (void 0 !== this) return !0;
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).length = 1
                        } catch (t) {
                            return t instanceof TypeError
                        }
                    }();
                t.exports = c ? function(t, e) {
                    if (o(t) && !a(t, "length").writable) throw new i("Cannot set read only .length");
                    return t.length = e
                } : function(t, e) {
                    return t.length = e
                }
            },
            96319: function(t, e, r) {
                var n = r(28551),
                    o = r(9539);
                t.exports = function(t, e, r, i) {
                    try {
                        return i ? e(n(r)[0], r[1]) : e(r)
                    } catch (a) {
                        o(t, "throw", a)
                    }
                }
            },
            22195: function(t, e, r) {
                var n = r(79504),
                    o = n({}.toString),
                    i = n("".slice);
                t.exports = function(t) {
                    return i(o(t), 8, -1)
                }
            },
            36955: function(t, e, r) {
                var n = r(92140),
                    o = r(94901),
                    i = r(22195),
                    a = r(78227),
                    c = a("toStringTag"),
                    u = Object,
                    s = "Arguments" === i(function() {
                        return arguments
                    }()),
                    f = function(t, e) {
                        try {
                            return t[e]
                        } catch (r) {}
                    };
                t.exports = n ? i : function(t) {
                    var e, r, n;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = f(e = u(t), c)) ? r : s ? i(e) : "Object" === (n = i(e)) && o(e.callee) ? "Arguments" : n
                }
            },
            77740: function(t, e, r) {
                var n = r(39297),
                    o = r(35031),
                    i = r(77347),
                    a = r(24913);
                t.exports = function(t, e, r) {
                    for (var c = o(e), u = a.f, s = i.f, f = 0; f < c.length; f++) {
                        var l = c[f];
                        n(t, l) || r && n(r, l) || u(t, l, s(e, l))
                    }
                }
            },
            12211: function(t, e, r) {
                var n = r(79039);
                t.exports = !n((function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                }))
            },
            62529: function(t) {
                t.exports = function(t, e) {
                    return {
                        value: t,
                        done: e
                    }
                }
            },
            66699: function(t, e, r) {
                var n = r(43724),
                    o = r(24913),
                    i = r(6980);
                t.exports = n ? function(t, e, r) {
                    return o.f(t, e, i(1, r))
                } : function(t, e, r) {
                    return t[e] = r, t
                }
            },
            6980: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            97040: function(t, e, r) {
                var n = r(43724),
                    o = r(24913),
                    i = r(6980);
                t.exports = function(t, e, r) {
                    n ? o.f(t, e, i(0, r)) : t[e] = r
                }
            },
            62106: function(t, e, r) {
                var n = r(50283),
                    o = r(24913);
                t.exports = function(t, e, r) {
                    return r.get && n(r.get, e, {
                        getter: !0
                    }), r.set && n(r.set, e, {
                        setter: !0
                    }), o.f(t, e, r)
                }
            },
            36840: function(t, e, r) {
                var n = r(94901),
                    o = r(24913),
                    i = r(50283),
                    a = r(39433);
                t.exports = function(t, e, r, c) {
                    c || (c = {});
                    var u = c.enumerable,
                        s = void 0 !== c.name ? c.name : e;
                    if (n(r) && i(r, s, c), c.global) u ? t[e] = r : a(e, r);
                    else {
                        try {
                            c.unsafe ? t[e] && (u = !0) : delete t[e]
                        } catch (f) {}
                        u ? t[e] = r : o.f(t, e, {
                            value: r,
                            enumerable: !1,
                            configurable: !c.nonConfigurable,
                            writable: !c.nonWritable
                        })
                    }
                    return t
                }
            },
            56279: function(t, e, r) {
                var n = r(36840);
                t.exports = function(t, e, r) {
                    for (var o in e) n(t, o, e[o], r);
                    return t
                }
            },
            39433: function(t, e, r) {
                var n = r(44576),
                    o = Object.defineProperty;
                t.exports = function(t, e) {
                    try {
                        o(n, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (r) {
                        n[t] = e
                    }
                    return e
                }
            },
            43724: function(t, e, r) {
                var n = r(79039);
                t.exports = !n((function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            4055: function(t, e, r) {
                var n = r(44576),
                    o = r(20034),
                    i = n.document,
                    a = o(i) && o(i.createElement);
                t.exports = function(t) {
                    return a ? i.createElement(t) : {}
                }
            },
            96837: function(t) {
                var e = TypeError,
                    r = 9007199254740991;
                t.exports = function(t) {
                    if (t > r) throw e("Maximum allowed index exceeded");
                    return t
                }
            },
            88727: function(t) {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            82839: function(t, e, r) {
                var n = r(44576),
                    o = n.navigator,
                    i = o && o.userAgent;
                t.exports = i ? String(i) : ""
            },
            39519: function(t, e, r) {
                var n, o, i = r(44576),
                    a = r(82839),
                    c = i.process,
                    u = i.Deno,
                    s = c && c.versions || u && u.version,
                    f = s && s.v8;
                f && (n = f.split("."), o = n[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (n = a.match(/Edge\/(\d+)/), (!n || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/), n && (o = +n[1]))), t.exports = o
            },
            46518: function(t, e, r) {
                var n = r(44576),
                    o = r(77347).f,
                    i = r(66699),
                    a = r(36840),
                    c = r(39433),
                    u = r(77740),
                    s = r(92796);
                t.exports = function(t, e) {
                    var r, f, l, p, d, h, y = t.target,
                        m = t.global,
                        v = t.stat;
                    if (f = m ? n : v ? n[y] || c(y, {}) : n[y] && n[y].prototype, f)
                        for (l in e) {
                            if (d = e[l], t.dontCallGetSet ? (h = o(f, l), p = h && h.value) : p = f[l], r = s(m ? l : y + (v ? "." : "#") + l, t.forced), !r && void 0 !== p) {
                                if (typeof d == typeof p) continue;
                                u(d, p)
                            }(t.sham || p && p.sham) && i(d, "sham", !0), a(f, l, d, t)
                        }
                }
            },
            79039: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (e) {
                        return !0
                    }
                }
            },
            76080: function(t, e, r) {
                var n = r(27476),
                    o = r(79306),
                    i = r(40616),
                    a = n(n.bind);
                t.exports = function(t, e) {
                    return o(t), void 0 === e ? t : i ? a(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            40616: function(t, e, r) {
                var n = r(79039);
                t.exports = !n((function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                }))
            },
            69565: function(t, e, r) {
                var n = r(40616),
                    o = Function.prototype.call;
                t.exports = n ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            10350: function(t, e, r) {
                var n = r(43724),
                    o = r(39297),
                    i = Function.prototype,
                    a = n && Object.getOwnPropertyDescriptor,
                    c = o(i, "name"),
                    u = c && "something" === function() {}.name,
                    s = c && (!n || n && a(i, "name").configurable);
                t.exports = {
                    EXISTS: c,
                    PROPER: u,
                    CONFIGURABLE: s
                }
            },
            27476: function(t, e, r) {
                var n = r(22195),
                    o = r(79504);
                t.exports = function(t) {
                    if ("Function" === n(t)) return o(t)
                }
            },
            79504: function(t, e, r) {
                var n = r(40616),
                    o = Function.prototype,
                    i = o.call,
                    a = n && o.bind.bind(i, i);
                t.exports = n ? a : function(t) {
                    return function() {
                        return i.apply(t, arguments)
                    }
                }
            },
            97751: function(t, e, r) {
                var n = r(44576),
                    o = r(94901),
                    i = function(t) {
                        return o(t) ? t : void 0
                    };
                t.exports = function(t, e) {
                    return arguments.length < 2 ? i(n[t]) : n[t] && n[t][e]
                }
            },
            1767: function(t) {
                t.exports = function(t) {
                    return {
                        iterator: t,
                        next: t.next,
                        done: !1
                    }
                }
            },
            50851: function(t, e, r) {
                var n = r(36955),
                    o = r(55966),
                    i = r(64117),
                    a = r(26269),
                    c = r(78227),
                    u = c("iterator");
                t.exports = function(t) {
                    if (!i(t)) return o(t, u) || o(t, "@@iterator") || a[n(t)]
                }
            },
            70081: function(t, e, r) {
                var n = r(69565),
                    o = r(79306),
                    i = r(28551),
                    a = r(16823),
                    c = r(50851),
                    u = TypeError;
                t.exports = function(t, e) {
                    var r = arguments.length < 2 ? c(t) : e;
                    if (o(r)) return i(n(r, t));
                    throw new u(a(t) + " is not iterable")
                }
            },
            55966: function(t, e, r) {
                var n = r(79306),
                    o = r(64117);
                t.exports = function(t, e) {
                    var r = t[e];
                    return o(r) ? void 0 : n(r)
                }
            },
            44576: function(t, e, r) {
                var n = function(t) {
                    return t && t.Math === Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            },
            39297: function(t, e, r) {
                var n = r(79504),
                    o = r(48981),
                    i = n({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return i(o(t), e)
                }
            },
            30421: function(t) {
                t.exports = {}
            },
            20397: function(t, e, r) {
                var n = r(97751);
                t.exports = n("document", "documentElement")
            },
            35917: function(t, e, r) {
                var n = r(43724),
                    o = r(79039),
                    i = r(4055);
                t.exports = !n && !o((function() {
                    return 7 !== Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            47055: function(t, e, r) {
                var n = r(79504),
                    o = r(79039),
                    i = r(22195),
                    a = Object,
                    c = n("".split);
                t.exports = o((function() {
                    return !a("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" === i(t) ? c(t, "") : a(t)
                } : a
            },
            33706: function(t, e, r) {
                var n = r(79504),
                    o = r(94901),
                    i = r(77629),
                    a = n(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(t) {
                    return a(t)
                }), t.exports = i.inspectSource
            },
            91181: function(t, e, r) {
                var n, o, i, a = r(58622),
                    c = r(44576),
                    u = r(20034),
                    s = r(66699),
                    f = r(39297),
                    l = r(77629),
                    p = r(66119),
                    d = r(30421),
                    h = "Object already initialized",
                    y = c.TypeError,
                    m = c.WeakMap,
                    v = function(t) {
                        return i(t) ? o(t) : n(t, {})
                    },
                    g = function(t) {
                        return function(e) {
                            var r;
                            if (!u(e) || (r = o(e)).type !== t) throw new y("Incompatible receiver, " + t + " required");
                            return r
                        }
                    };
                if (a || l.state) {
                    var b = l.state || (l.state = new m);
                    b.get = b.get, b.has = b.has, b.set = b.set, n = function(t, e) {
                        if (b.has(t)) throw new y(h);
                        return e.facade = t, b.set(t, e), e
                    }, o = function(t) {
                        return b.get(t) || {}
                    }, i = function(t) {
                        return b.has(t)
                    }
                } else {
                    var w = p("state");
                    d[w] = !0, n = function(t, e) {
                        if (f(t, w)) throw new y(h);
                        return e.facade = t, s(t, w, e), e
                    }, o = function(t) {
                        return f(t, w) ? t[w] : {}
                    }, i = function(t) {
                        return f(t, w)
                    }
                }
                t.exports = {
                    set: n,
                    get: o,
                    has: i,
                    enforce: v,
                    getterFor: g
                }
            },
            44209: function(t, e, r) {
                var n = r(78227),
                    o = r(26269),
                    i = n("iterator"),
                    a = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (o.Array === t || a[i] === t)
                }
            },
            34376: function(t, e, r) {
                var n = r(22195);
                t.exports = Array.isArray || function(t) {
                    return "Array" === n(t)
                }
            },
            94901: function(t) {
                var e = "object" == typeof document && document.all;
                t.exports = "undefined" == typeof e && void 0 !== e ? function(t) {
                    return "function" == typeof t || t === e
                } : function(t) {
                    return "function" == typeof t
                }
            },
            92796: function(t, e, r) {
                var n = r(79039),
                    o = r(94901),
                    i = /#|\.prototype\./,
                    a = function(t, e) {
                        var r = u[c(t)];
                        return r === f || r !== s && (o(e) ? n(e) : !!e)
                    },
                    c = a.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase()
                    },
                    u = a.data = {},
                    s = a.NATIVE = "N",
                    f = a.POLYFILL = "P";
                t.exports = a
            },
            64117: function(t) {
                t.exports = function(t) {
                    return null === t || void 0 === t
                }
            },
            20034: function(t, e, r) {
                var n = r(94901);
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : n(t)
                }
            },
            96395: function(t) {
                t.exports = !1
            },
            10757: function(t, e, r) {
                var n = r(97751),
                    o = r(94901),
                    i = r(1625),
                    a = r(7040),
                    c = Object;
                t.exports = a ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = n("Symbol");
                    return o(e) && i(e.prototype, c(t))
                }
            },
            72652: function(t, e, r) {
                var n = r(76080),
                    o = r(69565),
                    i = r(28551),
                    a = r(16823),
                    c = r(44209),
                    u = r(26198),
                    s = r(1625),
                    f = r(70081),
                    l = r(50851),
                    p = r(9539),
                    d = TypeError,
                    h = function(t, e) {
                        this.stopped = t, this.result = e
                    },
                    y = h.prototype;
                t.exports = function(t, e, r) {
                    var m, v, g, b, w, x, j, O = r && r.that,
                        S = !(!r || !r.AS_ENTRIES),
                        P = !(!r || !r.IS_RECORD),
                        E = !(!r || !r.IS_ITERATOR),
                        k = !(!r || !r.INTERRUPTED),
                        C = n(e, O),
                        A = function(t) {
                            return m && p(m, "normal", t), new h(!0, t)
                        },
                        T = function(t) {
                            return S ? (i(t), k ? C(t[0], t[1], A) : C(t[0], t[1])) : k ? C(t, A) : C(t)
                        };
                    if (P) m = t.iterator;
                    else if (E) m = t;
                    else {
                        if (v = l(t), !v) throw new d(a(t) + " is not iterable");
                        if (c(v)) {
                            for (g = 0, b = u(t); b > g; g++)
                                if (w = T(t[g]), w && s(y, w)) return w;
                            return new h(!1)
                        }
                        m = f(t, v)
                    }
                    x = P ? t.next : m.next;
                    while (!(j = o(x, m)).done) {
                        try {
                            w = T(j.value)
                        } catch (I) {
                            p(m, "throw", I)
                        }
                        if ("object" == typeof w && w && s(y, w)) return w
                    }
                    return new h(!1)
                }
            },
            9539: function(t, e, r) {
                var n = r(69565),
                    o = r(28551),
                    i = r(55966);
                t.exports = function(t, e, r) {
                    var a, c;
                    o(t);
                    try {
                        if (a = i(t, "return"), !a) {
                            if ("throw" === e) throw r;
                            return r
                        }
                        a = n(a, t)
                    } catch (u) {
                        c = !0, a = u
                    }
                    if ("throw" === e) throw r;
                    if (c) throw a;
                    return o(a), r
                }
            },
            19462: function(t, e, r) {
                var n = r(69565),
                    o = r(2360),
                    i = r(66699),
                    a = r(56279),
                    c = r(78227),
                    u = r(91181),
                    s = r(55966),
                    f = r(57657).IteratorPrototype,
                    l = r(62529),
                    p = r(9539),
                    d = c("toStringTag"),
                    h = "IteratorHelper",
                    y = "WrapForValidIterator",
                    m = u.set,
                    v = function(t) {
                        var e = u.getterFor(t ? y : h);
                        return a(o(f), {
                            next: function() {
                                var r = e(this);
                                if (t) return r.nextHandler();
                                try {
                                    var n = r.done ? void 0 : r.nextHandler();
                                    return l(n, r.done)
                                } catch (o) {
                                    throw r.done = !0, o
                                }
                            },
                            return: function() {
                                var r = e(this),
                                    o = r.iterator;
                                if (r.done = !0, t) {
                                    var i = s(o, "return");
                                    return i ? n(i, o) : l(void 0, !0)
                                }
                                if (r.inner) try {
                                    p(r.inner.iterator, "normal")
                                } catch (a) {
                                    return p(o, "throw", a)
                                }
                                return o && p(o, "normal"), l(void 0, !0)
                            }
                        })
                    },
                    g = v(!0),
                    b = v(!1);
                i(b, d, "Iterator Helper"), t.exports = function(t, e) {
                    var r = function(r, n) {
                        n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = e ? y : h, n.nextHandler = t, n.counter = 0, n.done = !1, m(this, n)
                    };
                    return r.prototype = e ? g : b, r
                }
            },
            20713: function(t, e, r) {
                var n = r(69565),
                    o = r(79306),
                    i = r(28551),
                    a = r(1767),
                    c = r(19462),
                    u = r(96319),
                    s = c((function() {
                        var t = this.iterator,
                            e = i(n(this.next, t)),
                            r = this.done = !!e.done;
                        if (!r) return u(t, this.mapper, [e.value, this.counter++], !0)
                    }));
                t.exports = function(t) {
                    return i(this), o(t), new s(a(this), {
                        mapper: t
                    })
                }
            },
            57657: function(t, e, r) {
                var n, o, i, a = r(79039),
                    c = r(94901),
                    u = r(20034),
                    s = r(2360),
                    f = r(42787),
                    l = r(36840),
                    p = r(78227),
                    d = r(96395),
                    h = p("iterator"),
                    y = !1;
                [].keys && (i = [].keys(), "next" in i ? (o = f(f(i)), o !== Object.prototype && (n = o)) : y = !0);
                var m = !u(n) || a((function() {
                    var t = {};
                    return n[h].call(t) !== t
                }));
                m ? n = {} : d && (n = s(n)), c(n[h]) || l(n, h, (function() {
                    return this
                })), t.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: y
                }
            },
            26269: function(t) {
                t.exports = {}
            },
            26198: function(t, e, r) {
                var n = r(18014);
                t.exports = function(t) {
                    return n(t.length)
                }
            },
            50283: function(t, e, r) {
                var n = r(79504),
                    o = r(79039),
                    i = r(94901),
                    a = r(39297),
                    c = r(43724),
                    u = r(10350).CONFIGURABLE,
                    s = r(33706),
                    f = r(91181),
                    l = f.enforce,
                    p = f.get,
                    d = String,
                    h = Object.defineProperty,
                    y = n("".slice),
                    m = n("".replace),
                    v = n([].join),
                    g = c && !o((function() {
                        return 8 !== h((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    b = String(String).split("String"),
                    w = t.exports = function(t, e, r) {
                        "Symbol(" === y(d(e), 0, 7) && (e = "[" + m(d(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!a(t, "name") || u && t.name !== e) && (c ? h(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), g && r && a(r, "arity") && t.length !== r.arity && h(t, "length", {
                            value: r.arity
                        });
                        try {
                            r && a(r, "constructor") && r.constructor ? c && h(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (o) {}
                        var n = l(t);
                        return a(n, "source") || (n.source = v(b, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = w((function() {
                    return i(this) && p(this).source || s(this)
                }), "toString")
            },
            80741: function(t) {
                var e = Math.ceil,
                    r = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var n = +t;
                    return (n > 0 ? r : e)(n)
                }
            },
            2360: function(t, e, r) {
                var n, o = r(28551),
                    i = r(96801),
                    a = r(88727),
                    c = r(30421),
                    u = r(20397),
                    s = r(4055),
                    f = r(66119),
                    l = ">",
                    p = "<",
                    d = "prototype",
                    h = "script",
                    y = f("IE_PROTO"),
                    m = function() {},
                    v = function(t) {
                        return p + h + l + t + p + "/" + h + l
                    },
                    g = function(t) {
                        t.write(v("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    },
                    b = function() {
                        var t, e = s("iframe"),
                            r = "java" + h + ":";
                        return e.style.display = "none", u.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(v("document.F=Object")), t.close(), t.F
                    },
                    w = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (e) {}
                        w = "undefined" != typeof document ? document.domain && n ? g(n) : b() : g(n);
                        var t = a.length;
                        while (t--) delete w[d][a[t]];
                        return w()
                    };
                c[y] = !0, t.exports = Object.create || function(t, e) {
                    var r;
                    return null !== t ? (m[d] = o(t), r = new m, m[d] = null, r[y] = t) : r = w(), void 0 === e ? r : i.f(r, e)
                }
            },
            96801: function(t, e, r) {
                var n = r(43724),
                    o = r(48686),
                    i = r(24913),
                    a = r(28551),
                    c = r(25397),
                    u = r(71072);
                e.f = n && !o ? Object.defineProperties : function(t, e) {
                    a(t);
                    var r, n = c(e),
                        o = u(e),
                        s = o.length,
                        f = 0;
                    while (s > f) i.f(t, r = o[f++], n[r]);
                    return t
                }
            },
            24913: function(t, e, r) {
                var n = r(43724),
                    o = r(35917),
                    i = r(48686),
                    a = r(28551),
                    c = r(56969),
                    u = TypeError,
                    s = Object.defineProperty,
                    f = Object.getOwnPropertyDescriptor,
                    l = "enumerable",
                    p = "configurable",
                    d = "writable";
                e.f = n ? i ? function(t, e, r) {
                    if (a(t), e = c(e), a(r), "function" === typeof t && "prototype" === e && "value" in r && d in r && !r[d]) {
                        var n = f(t, e);
                        n && n[d] && (t[e] = r.value, r = {
                            configurable: p in r ? r[p] : n[p],
                            enumerable: l in r ? r[l] : n[l],
                            writable: !1
                        })
                    }
                    return s(t, e, r)
                } : s : function(t, e, r) {
                    if (a(t), e = c(e), a(r), o) try {
                        return s(t, e, r)
                    } catch (n) {}
                    if ("get" in r || "set" in r) throw new u("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t
                }
            },
            77347: function(t, e, r) {
                var n = r(43724),
                    o = r(69565),
                    i = r(48773),
                    a = r(6980),
                    c = r(25397),
                    u = r(56969),
                    s = r(39297),
                    f = r(35917),
                    l = Object.getOwnPropertyDescriptor;
                e.f = n ? l : function(t, e) {
                    if (t = c(t), e = u(e), f) try {
                        return l(t, e)
                    } catch (r) {}
                    if (s(t, e)) return a(!o(i.f, t, e), t[e])
                }
            },
            38480: function(t, e, r) {
                var n = r(61828),
                    o = r(88727),
                    i = o.concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return n(t, i)
                }
            },
            33717: function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            42787: function(t, e, r) {
                var n = r(39297),
                    o = r(94901),
                    i = r(48981),
                    a = r(66119),
                    c = r(12211),
                    u = a("IE_PROTO"),
                    s = Object,
                    f = s.prototype;
                t.exports = c ? s.getPrototypeOf : function(t) {
                    var e = i(t);
                    if (n(e, u)) return e[u];
                    var r = e.constructor;
                    return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null
                }
            },
            1625: function(t, e, r) {
                var n = r(79504);
                t.exports = n({}.isPrototypeOf)
            },
            61828: function(t, e, r) {
                var n = r(79504),
                    o = r(39297),
                    i = r(25397),
                    a = r(19617).indexOf,
                    c = r(30421),
                    u = n([].push);
                t.exports = function(t, e) {
                    var r, n = i(t),
                        s = 0,
                        f = [];
                    for (r in n) !o(c, r) && o(n, r) && u(f, r);
                    while (e.length > s) o(n, r = e[s++]) && (~a(f, r) || u(f, r));
                    return f
                }
            },
            71072: function(t, e, r) {
                var n = r(61828),
                    o = r(88727);
                t.exports = Object.keys || function(t) {
                    return n(t, o)
                }
            },
            48773: function(t, e) {
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    o = n && !r.call({
                        1: 2
                    }, 1);
                e.f = o ? function(t) {
                    var e = n(this, t);
                    return !!e && e.enumerable
                } : r
            },
            84270: function(t, e, r) {
                var n = r(69565),
                    o = r(94901),
                    i = r(20034),
                    a = TypeError;
                t.exports = function(t, e) {
                    var r, c;
                    if ("string" === e && o(r = t.toString) && !i(c = n(r, t))) return c;
                    if (o(r = t.valueOf) && !i(c = n(r, t))) return c;
                    if ("string" !== e && o(r = t.toString) && !i(c = n(r, t))) return c;
                    throw new a("Can't convert object to primitive value")
                }
            },
            35031: function(t, e, r) {
                var n = r(97751),
                    o = r(79504),
                    i = r(38480),
                    a = r(33717),
                    c = r(28551),
                    u = o([].concat);
                t.exports = n("Reflect", "ownKeys") || function(t) {
                    var e = i.f(c(t)),
                        r = a.f;
                    return r ? u(e, r(t)) : e
                }
            },
            67750: function(t, e, r) {
                var n = r(64117),
                    o = TypeError;
                t.exports = function(t) {
                    if (n(t)) throw new o("Can't call method on " + t);
                    return t
                }
            },
            66119: function(t, e, r) {
                var n = r(25745),
                    o = r(33392),
                    i = n("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = o(t))
                }
            },
            77629: function(t, e, r) {
                var n = r(96395),
                    o = r(44576),
                    i = r(39433),
                    a = "__core-js_shared__",
                    c = t.exports = o[a] || i(a, {});
                (c.versions || (c.versions = [])).push({
                    version: "3.39.0",
                    mode: n ? "pure" : "global",
                    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            25745: function(t, e, r) {
                var n = r(77629);
                t.exports = function(t, e) {
                    return n[t] || (n[t] = e || {})
                }
            },
            4495: function(t, e, r) {
                var n = r(39519),
                    o = r(79039),
                    i = r(44576),
                    a = i.String;
                t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var t = Symbol("symbol detection");
                    return !a(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
                }))
            },
            35610: function(t, e, r) {
                var n = r(91291),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, e) {
                    var r = n(t);
                    return r < 0 ? o(r + e, 0) : i(r, e)
                }
            },
            25397: function(t, e, r) {
                var n = r(47055),
                    o = r(67750);
                t.exports = function(t) {
                    return n(o(t))
                }
            },
            91291: function(t, e, r) {
                var n = r(80741);
                t.exports = function(t) {
                    var e = +t;
                    return e !== e || 0 === e ? 0 : n(e)
                }
            },
            18014: function(t, e, r) {
                var n = r(91291),
                    o = Math.min;
                t.exports = function(t) {
                    var e = n(t);
                    return e > 0 ? o(e, 9007199254740991) : 0
                }
            },
            48981: function(t, e, r) {
                var n = r(67750),
                    o = Object;
                t.exports = function(t) {
                    return o(n(t))
                }
            },
            72777: function(t, e, r) {
                var n = r(69565),
                    o = r(20034),
                    i = r(10757),
                    a = r(55966),
                    c = r(84270),
                    u = r(78227),
                    s = TypeError,
                    f = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!o(t) || i(t)) return t;
                    var r, u = a(t, f);
                    if (u) {
                        if (void 0 === e && (e = "default"), r = n(u, t, e), !o(r) || i(r)) return r;
                        throw new s("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), c(t, e)
                }
            },
            56969: function(t, e, r) {
                var n = r(72777),
                    o = r(10757);
                t.exports = function(t) {
                    var e = n(t, "string");
                    return o(e) ? e : e + ""
                }
            },
            92140: function(t, e, r) {
                var n = r(78227),
                    o = n("toStringTag"),
                    i = {};
                i[o] = "z", t.exports = "[object z]" === String(i)
            },
            655: function(t, e, r) {
                var n = r(36955),
                    o = String;
                t.exports = function(t) {
                    if ("Symbol" === n(t)) throw new TypeError("Cannot convert a Symbol value to a string");
                    return o(t)
                }
            },
            16823: function(t) {
                var e = String;
                t.exports = function(t) {
                    try {
                        return e(t)
                    } catch (r) {
                        return "Object"
                    }
                }
            },
            33392: function(t, e, r) {
                var n = r(79504),
                    o = 0,
                    i = Math.random(),
                    a = n(1..toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36)
                }
            },
            7040: function(t, e, r) {
                var n = r(4495);
                t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            48686: function(t, e, r) {
                var n = r(43724),
                    o = r(79039);
                t.exports = n && o((function() {
                    return 42 !== Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            22812: function(t) {
                var e = TypeError;
                t.exports = function(t, r) {
                    if (t < r) throw new e("Not enough arguments");
                    return t
                }
            },
            58622: function(t, e, r) {
                var n = r(44576),
                    o = r(94901),
                    i = n.WeakMap;
                t.exports = o(i) && /native code/.test(String(i))
            },
            78227: function(t, e, r) {
                var n = r(44576),
                    o = r(25745),
                    i = r(39297),
                    a = r(33392),
                    c = r(4495),
                    u = r(7040),
                    s = n.Symbol,
                    f = o("wks"),
                    l = u ? s["for"] || s : s && s.withoutSetter || a;
                t.exports = function(t) {
                    return i(f, t) || (f[t] = c && i(s, t) ? s[t] : l("Symbol." + t)), f[t]
                }
            },
            44114: function(t, e, r) {
                var n = r(46518),
                    o = r(48981),
                    i = r(26198),
                    a = r(34527),
                    c = r(96837),
                    u = r(79039),
                    s = u((function() {
                        return 4294967297 !== [].push.call({
                            length: 4294967296
                        }, 1)
                    })),
                    f = function() {
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).push()
                        } catch (t) {
                            return t instanceof TypeError
                        }
                    },
                    l = s || !f();
                n({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: l
                }, {
                    push: function(t) {
                        var e = o(this),
                            r = i(e),
                            n = arguments.length;
                        c(r + n);
                        for (var u = 0; u < n; u++) e[r] = arguments[u], r++;
                        return a(e, r), r
                    }
                })
            },
            18111: function(t, e, r) {
                var n = r(46518),
                    o = r(44576),
                    i = r(90679),
                    a = r(28551),
                    c = r(94901),
                    u = r(42787),
                    s = r(62106),
                    f = r(97040),
                    l = r(79039),
                    p = r(39297),
                    d = r(78227),
                    h = r(57657).IteratorPrototype,
                    y = r(43724),
                    m = r(96395),
                    v = "constructor",
                    g = "Iterator",
                    b = d("toStringTag"),
                    w = TypeError,
                    x = o[g],
                    j = m || !c(x) || x.prototype !== h || !l((function() {
                        x({})
                    })),
                    O = function() {
                        if (i(this, h), u(this) === h) throw new w("Abstract class Iterator not directly constructable")
                    },
                    S = function(t, e) {
                        y ? s(h, t, {
                            configurable: !0,
                            get: function() {
                                return e
                            },
                            set: function(e) {
                                if (a(this), this === h) throw new w("You can't redefine this property");
                                p(this, t) ? this[t] = e : f(this, t, e)
                            }
                        }) : h[t] = e
                    };
                p(h, b) || S(b, g), !j && p(h, v) && h[v] !== Object || S(v, O), O.prototype = h, n({
                    global: !0,
                    constructor: !0,
                    forced: j
                }, {
                    Iterator: O
                })
            },
            7588: function(t, e, r) {
                var n = r(46518),
                    o = r(72652),
                    i = r(79306),
                    a = r(28551),
                    c = r(1767);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    forEach: function(t) {
                        a(this), i(t);
                        var e = c(this),
                            r = 0;
                        o(e, (function(e) {
                            t(e, r++)
                        }), {
                            IS_RECORD: !0
                        })
                    }
                })
            },
            61701: function(t, e, r) {
                var n = r(46518),
                    o = r(20713),
                    i = r(96395);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    map: o
                })
            },
            98992: function(t, e, r) {
                r(18111)
            },
            3949: function(t, e, r) {
                r(7588)
            },
            81454: function(t, e, r) {
                r(61701)
            },
            14603: function(t, e, r) {
                var n = r(36840),
                    o = r(79504),
                    i = r(655),
                    a = r(22812),
                    c = URLSearchParams,
                    u = c.prototype,
                    s = o(u.append),
                    f = o(u["delete"]),
                    l = o(u.forEach),
                    p = o([].push),
                    d = new c("a=1&a=2&b=3");
                d["delete"]("a", 1), d["delete"]("b", void 0), d + "" !== "a=2" && n(u, "delete", (function(t) {
                    var e = arguments.length,
                        r = e < 2 ? void 0 : arguments[1];
                    if (e && void 0 === r) return f(this, t);
                    var n = [];
                    l(this, (function(t, e) {
                        p(n, {
                            key: e,
                            value: t
                        })
                    })), a(e, 1);
                    var o, c = i(t),
                        u = i(r),
                        d = 0,
                        h = 0,
                        y = !1,
                        m = n.length;
                    while (d < m) o = n[d++], y || o.key === c ? (y = !0, f(this, o.key)) : h++;
                    while (h < m) o = n[h++], o.key === c && o.value === u || s(this, o.key, o.value)
                }), {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            47566: function(t, e, r) {
                var n = r(36840),
                    o = r(79504),
                    i = r(655),
                    a = r(22812),
                    c = URLSearchParams,
                    u = c.prototype,
                    s = o(u.getAll),
                    f = o(u.has),
                    l = new c("a=1");
                !l.has("a", 2) && l.has("a", void 0) || n(u, "has", (function(t) {
                    var e = arguments.length,
                        r = e < 2 ? void 0 : arguments[1];
                    if (e && void 0 === r) return f(this, t);
                    var n = s(this, t);
                    a(e, 1);
                    var o = i(r),
                        c = 0;
                    while (c < n.length)
                        if (n[c++] === o) return !0;
                    return !1
                }), {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            98721: function(t, e, r) {
                var n = r(43724),
                    o = r(79504),
                    i = r(62106),
                    a = URLSearchParams.prototype,
                    c = o(a.forEach);
                n && !("size" in a) && i(a, "size", {
                    get: function() {
                        var t = 0;
                        return c(this, (function() {
                            t++
                        })), t
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }
        },
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.exports
    }! function() {
        r.d = function(t, e) {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
        }
    }(),
    function() {
        r.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window) return window
            }
        }()
    }(),
    function() {
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(),
    function() {
        r.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }();
    var n = {};
    r.r(n), r.d(n, {
        exclude: function() {
            return F
        },
        extract: function() {
            return E
        },
        parse: function() {
            return k
        },
        parseUrl: function() {
            return A
        },
        pick: function() {
            return I
        },
        stringify: function() {
            return C
        },
        stringifyUrl: function() {
            return T
        }
    });
    r(44114), r(98992), r(3949), r(81454), r(14603), r(47566), r(98721);
    const o = (t, e, r, n = (new Date).getTime()) => (t = t?.split("_")[0], console.log("获取sign的参数:", t, e, r, n), {
            t: n,
            sign: function(t) {
                function e(t, e) {
                    return t << e | t >>> 32 - e
                }

                function r(t, e) {
                    var r, n, o, i, a;
                    return o = 2147483648 & t, i = 2147483648 & e, a = (1073741823 & t) + (1073741823 & e), (r = 1073741824 & t) & (n = 1073741824 & e) ? 2147483648 ^ a ^ o ^ i : r | n ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
                }

                function n(t, n, o, i, a, c, u) {
                    return t = r(t, r(r(function(t, e, r) {
                        return t & e | ~t & r
                    }(n, o, i), a), u)), r(e(t, c), n)
                }

                function o(t, n, o, i, a, c, u) {
                    return t = r(t, r(r(function(t, e, r) {
                        return t & r | e & ~r
                    }(n, o, i), a), u)), r(e(t, c), n)
                }

                function i(t, n, o, i, a, c, u) {
                    return t = r(t, r(r(function(t, e, r) {
                        return t ^ e ^ r
                    }(n, o, i), a), u)), r(e(t, c), n)
                }

                function a(t, n, o, i, a, c, u) {
                    return t = r(t, r(r(function(t, e, r) {
                        return e ^ (t | ~r)
                    }(n, o, i), a), u)), r(e(t, c), n)
                }

                function c(t) {
                    var e, r = "",
                        n = "";
                    for (e = 0; 3 >= e; e++) r += (n = "0" + (t >>> 8 * e & 255).toString(16)).substr(n.length - 2, 2);
                    return r
                }
                var u, s, f, l, p, d, h, y, m, v;
                for (v = function(t) {
                        for (var e, r = t.length, n = r + 8, o = 16 * ((n - n % 64) / 64 + 1), i = new Array(o - 1), a = 0, c = 0; r > c;) a = c % 4 * 8, i[e = (c - c % 4) / 4] = i[e] | t.charCodeAt(c) << a, c++;
                        return a = c % 4 * 8, i[e = (c - c % 4) / 4] = i[e] | 128 << a, i[o - 2] = r << 3, i[o - 1] = r >>> 29, i
                    }(t = function(t) {
                        t = t.replace(/\r\n/g, "\n");
                        for (var e = "", r = 0; r < t.length; r++) {
                            var n = t.charCodeAt(r);
                            128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
                        }
                        return e
                    }(t)), d = 1732584193, h = 4023233417, y = 2562383102, m = 271733878, u = 0; u < v.length; u += 16) s = d, f = h, l = y, p = m, d = n(d, h, y, m, v[u], 7, 3614090360), m = n(m, d, h, y, v[u + 1], 12, 3905402710), y = n(y, m, d, h, v[u + 2], 17, 606105819), h = n(h, y, m, d, v[u + 3], 22, 3250441966), d = n(d, h, y, m, v[u + 4], 7, 4118548399), m = n(m, d, h, y, v[u + 5], 12, 1200080426), y = n(y, m, d, h, v[u + 6], 17, 2821735955), h = n(h, y, m, d, v[u + 7], 22, 4249261313), d = n(d, h, y, m, v[u + 8], 7, 1770035416), m = n(m, d, h, y, v[u + 9], 12, 2336552879), y = n(y, m, d, h, v[u + 10], 17, 4294925233), h = n(h, y, m, d, v[u + 11], 22, 2304563134), d = n(d, h, y, m, v[u + 12], 7, 1804603682), m = n(m, d, h, y, v[u + 13], 12, 4254626195), y = n(y, m, d, h, v[u + 14], 17, 2792965006), d = o(d, h = n(h, y, m, d, v[u + 15], 22, 1236535329), y, m, v[u + 1], 5, 4129170786), m = o(m, d, h, y, v[u + 6], 9, 3225465664), y = o(y, m, d, h, v[u + 11], 14, 643717713), h = o(h, y, m, d, v[u], 20, 3921069994), d = o(d, h, y, m, v[u + 5], 5, 3593408605), m = o(m, d, h, y, v[u + 10], 9, 38016083), y = o(y, m, d, h, v[u + 15], 14, 3634488961), h = o(h, y, m, d, v[u + 4], 20, 3889429448), d = o(d, h, y, m, v[u + 9], 5, 568446438), m = o(m, d, h, y, v[u + 14], 9, 3275163606), y = o(y, m, d, h, v[u + 3], 14, 4107603335), h = o(h, y, m, d, v[u + 8], 20, 1163531501), d = o(d, h, y, m, v[u + 13], 5, 2850285829), m = o(m, d, h, y, v[u + 2], 9, 4243563512), y = o(y, m, d, h, v[u + 7], 14, 1735328473), d = i(d, h = o(h, y, m, d, v[u + 12], 20, 2368359562), y, m, v[u + 5], 4, 4294588738), m = i(m, d, h, y, v[u + 8], 11, 2272392833), y = i(y, m, d, h, v[u + 11], 16, 1839030562), h = i(h, y, m, d, v[u + 14], 23, 4259657740), d = i(d, h, y, m, v[u + 1], 4, 2763975236), m = i(m, d, h, y, v[u + 4], 11, 1272893353), y = i(y, m, d, h, v[u + 7], 16, 4139469664), h = i(h, y, m, d, v[u + 10], 23, 3200236656), d = i(d, h, y, m, v[u + 13], 4, 681279174), m = i(m, d, h, y, v[u], 11, 3936430074), y = i(y, m, d, h, v[u + 3], 16, 3572445317), h = i(h, y, m, d, v[u + 6], 23, 76029189), d = i(d, h, y, m, v[u + 9], 4, 3654602809), m = i(m, d, h, y, v[u + 12], 11, 3873151461), y = i(y, m, d, h, v[u + 15], 16, 530742520), d = a(d, h = i(h, y, m, d, v[u + 2], 23, 3299628645), y, m, v[u], 6, 4096336452), m = a(m, d, h, y, v[u + 7], 10, 1126891415), y = a(y, m, d, h, v[u + 14], 15, 2878612391), h = a(h, y, m, d, v[u + 5], 21, 4237533241), d = a(d, h, y, m, v[u + 12], 6, 1700485571), m = a(m, d, h, y, v[u + 3], 10, 2399980690), y = a(y, m, d, h, v[u + 10], 15, 4293915773), h = a(h, y, m, d, v[u + 1], 21, 2240044497), d = a(d, h, y, m, v[u + 8], 6, 1873313359), m = a(m, d, h, y, v[u + 15], 10, 4264355552), y = a(y, m, d, h, v[u + 6], 15, 2734768916), h = a(h, y, m, d, v[u + 13], 21, 1309151649), d = a(d, h, y, m, v[u + 4], 6, 4149444226), m = a(m, d, h, y, v[u + 11], 10, 3174756917), y = a(y, m, d, h, v[u + 2], 15, 718787259), h = a(h, y, m, d, v[u + 9], 21, 3951481745), d = r(d, s), h = r(h, f), y = r(y, l), m = r(m, p);
                return (c(d) + c(h) + c(y) + c(m)).toLowerCase()
            }(t + "&" + n + "&" + e + "&" + r)
        }),
        i = "%[a-f0-9]{2}",
        a = new RegExp("(" + i + ")|([^%]+?)", "gi"),
        c = new RegExp("(" + i + ")+", "gi");

    function u(t, e) {
        try {
            return [decodeURIComponent(t.join(""))]
        } catch {}
        if (1 === t.length) return t;
        e = e || 1;
        const r = t.slice(0, e),
            n = t.slice(e);
        return Array.prototype.concat.call([], u(r), u(n))
    }

    function s(t) {
        try {
            return decodeURIComponent(t)
        } catch {
            let e = t.match(a) || [];
            for (let r = 1; r < e.length; r++) t = u(e, r).join(""), e = t.match(a) || [];
            return t
        }
    }

    function f(t) {
        const e = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        };
        let r = c.exec(t);
        while (r) {
            try {
                e[r[0]] = decodeURIComponent(r[0])
            } catch {
                const t = s(r[0]);
                t !== r[0] && (e[r[0]] = t)
            }
            r = c.exec(t)
        }
        e["%C2"] = "�";
        const n = Object.keys(e);
        for (const o of n) t = t.replace(new RegExp(o, "g"), e[o]);
        return t
    }

    function l(t) {
        if ("string" !== typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
            return decodeURIComponent(t)
        } catch {
            return f(t)
        }
    }

    function p(t, e) {
        const r = {};
        if (Array.isArray(e))
            for (const n of e) {
                const e = Object.getOwnPropertyDescriptor(t, n);
                e?.enumerable && Object.defineProperty(r, n, e)
            } else
                for (const n of Reflect.ownKeys(t)) {
                    const o = Object.getOwnPropertyDescriptor(t, n);
                    if (o.enumerable) {
                        const i = t[n];
                        e(n, i, t) && Object.defineProperty(r, n, o)
                    }
                }
        return r
    }

    function d(t, e) {
        if ("string" !== typeof t || "string" !== typeof e) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t || "" === e) return [];
        const r = t.indexOf(e);
        return -1 === r ? [] : [t.slice(0, r), t.slice(r + e.length)]
    }
    const h = t => null === t || void 0 === t,
        y = t => encodeURIComponent(t).replaceAll(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)),
        m = Symbol("encodeFragmentIdentifier");

    function v(t) {
        switch (t.arrayFormat) {
            case "index":
                return e => (r, n) => {
                    const o = r.length;
                    return void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [w(e, t), "[", o, "]"].join("")] : [...r, [w(e, t), "[", w(o, t), "]=", w(n, t)].join("")]
                };
            case "bracket":
                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [w(e, t), "[]"].join("")] : [...r, [w(e, t), "[]=", w(n, t)].join("")];
            case "colon-list-separator":
                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, [w(e, t), ":list="].join("")] : [...r, [w(e, t), ":list=", w(n, t)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator": {
                const e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                return r => (n, o) => void 0 === o || t.skipNull && null === o || t.skipEmptyString && "" === o ? n : (o = null === o ? "" : o, 0 === n.length ? [
                    [w(r, t), e, w(o, t)].join("")
                ] : [
                    [n, w(o, t)].join(t.arrayFormatSeparator)
                ])
            }
            default:
                return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? r : null === n ? [...r, w(e, t)] : [...r, [w(e, t), "=", w(n, t)].join("")]
        }
    }

    function g(t) {
        let e;
        switch (t.arrayFormat) {
            case "index":
                return (t, r, n) => {
                    e = /\[(\d*)]$/.exec(t), t = t.replace(/\[\d*]$/, ""), e ? (void 0 === n[t] && (n[t] = {}), n[t][e[1]] = r) : n[t] = r
                };
            case "bracket":
                return (t, r, n) => {
                    e = /(\[])$/.exec(t), t = t.replace(/\[]$/, ""), e ? void 0 !== n[t] ? n[t] = [...n[t], r] : n[t] = [r] : n[t] = r
                };
            case "colon-list-separator":
                return (t, r, n) => {
                    e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), e ? void 0 !== n[t] ? n[t] = [...n[t], r] : n[t] = [r] : n[t] = r
                };
            case "comma":
            case "separator":
                return (e, r, n) => {
                    const o = "string" === typeof r && r.includes(t.arrayFormatSeparator),
                        i = "string" === typeof r && !o && x(r, t).includes(t.arrayFormatSeparator);
                    r = i ? x(r, t) : r;
                    const a = o || i ? r.split(t.arrayFormatSeparator).map((e => x(e, t))) : null === r ? r : x(r, t);
                    n[e] = a
                };
            case "bracket-separator":
                return (e, r, n) => {
                    const o = /(\[])$/.test(e);
                    if (e = e.replace(/\[]$/, ""), !o) return void(n[e] = r ? x(r, t) : r);
                    const i = null === r ? [] : x(r, t).split(t.arrayFormatSeparator);
                    void 0 !== n[e] ? n[e] = [...n[e], ...i] : n[e] = i
                };
            default:
                return (t, e, r) => {
                    void 0 !== r[t] ? r[t] = [...[r[t]].flat(), e] : r[t] = e
                }
        }
    }

    function b(t) {
        if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function w(t, e) {
        return e.encode ? e.strict ? y(t) : encodeURIComponent(t) : t
    }

    function x(t, e) {
        return e.decode ? l(t) : t
    }

    function j(t) {
        return Array.isArray(t) ? t.sort() : "object" === typeof t ? j(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t
    }

    function O(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t
    }

    function S(t) {
        let e = "";
        const r = t.indexOf("#");
        return -1 !== r && (e = t.slice(r)), e
    }

    function P(t, e, r) {
        return "string" === r && "string" === typeof t ? t : "function" === typeof r && "string" === typeof t ? r(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() ? "number" !== r || Number.isNaN(Number(t)) || "string" !== typeof t || "" === t.trim() ? e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? Number(t) : t : Number(t) : "true" === t.toLowerCase()
    }

    function E(t) {
        t = O(t);
        const e = t.indexOf("?");
        return -1 === e ? "" : t.slice(e + 1)
    }

    function k(t, e) {
        e = {
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1,
            types: Object.create(null),
            ...e
        }, b(e.arrayFormatSeparator);
        const r = g(e),
            n = Object.create(null);
        if ("string" !== typeof t) return n;
        if (t = t.trim().replace(/^[?#&]/, ""), !t) return n;
        for (const o of t.split("&")) {
            if ("" === o) continue;
            const t = e.decode ? o.replaceAll("+", " ") : o;
            let [i, a] = d(t, "=");
            void 0 === i && (i = t), a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? a : x(a, e), r(x(i, e), a, n)
        }
        for (const [o, i] of Object.entries(n))
            if ("object" === typeof i && null !== i && "string" !== e.types[o])
                for (const [t, r] of Object.entries(i)) {
                    const n = e.types[o] ? e.types[o].replace("[]", "") : void 0;
                    i[t] = P(r, e, n)
                } else "object" === typeof i && null !== i && "string" === e.types[o] ? n[o] = Object.values(i).join(e.arrayFormatSeparator) : n[o] = P(i, e, e.types[o]);
        return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce(((t, e) => {
            const r = n[e];
            return t[e] = Boolean(r) && "object" === typeof r && !Array.isArray(r) ? j(r) : r, t
        }), Object.create(null))
    }

    function C(t, e) {
        if (!t) return "";
        e = {
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            ...e
        }, b(e.arrayFormatSeparator);
        const r = r => e.skipNull && h(t[r]) || e.skipEmptyString && "" === t[r],
            n = v(e),
            o = {};
        for (const [a, c] of Object.entries(t)) r(a) || (o[a] = c);
        const i = Object.keys(o);
        return !1 !== e.sort && i.sort(e.sort), i.map((r => {
            const o = t[r];
            return void 0 === o ? "" : null === o ? w(r, e) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === e.arrayFormat ? w(r, e) + "[]" : o.reduce(n(r), []).join("&") : w(r, e) + "=" + w(o, e)
        })).filter((t => t.length > 0)).join("&")
    }

    function A(t, e) {
        e = {
            decode: !0,
            ...e
        };
        let [r, n] = d(t, "#");
        return void 0 === r && (r = t), {
            url: r?.split("?")?.[0] ?? "",
            query: k(E(t), e),
            ...e && e.parseFragmentIdentifier && n ? {
                fragmentIdentifier: x(n, e)
            } : {}
        }
    }

    function T(t, e) {
        e = {
            encode: !0,
            strict: !0,
            [m]: !0,
            ...e
        };
        const r = O(t.url).split("?")[0] || "",
            n = E(t.url),
            o = {
                ...k(n, {
                    sort: !1
                }),
                ...t.query
            };
        let i = C(o, e);
        i &&= `?${i}`;
        let a = S(t.url);
        if ("string" === typeof t.fragmentIdentifier) {
            const n = new URL(r);
            n.hash = t.fragmentIdentifier, a = e[m] ? n.hash : `#${t.fragmentIdentifier}`
        }
        return `${r}${i}${a}`
    }

    function I(t, e, r) {
        r = {
            parseFragmentIdentifier: !0,
            [m]: !1,
            ...r
        };
        const {
            url: n,
            query: o,
            fragmentIdentifier: i
        } = A(t, r);
        return T({
            url: n,
            query: p(o, e),
            fragmentIdentifier: i
        }, r)
    }

    function F(t, e, r) {
        const n = Array.isArray(e) ? t => !e.includes(t) : (t, r) => !e(t, r);
        return I(t, n, r)
    }
    var R = n;

    function N(t) {
        return new Promise((e => {
            fetch(t).then((t => t.blob())).then((r => {
                const n = t.match(/\/([^/]+)$/).at(-1),
                    o = new FileReader;
                o.onloadend = function() {
                    const t = {
                        blobData: r,
                        fileName: n
                    };
                    e({
                        image: t
                    })
                }, o.readAsArrayBuffer(r)
            }))
        }))
    }

    function D(t) {
        const e = t.split(";"),
            r = {};
        for (let n = 0; n < e.length; n++) {
            const [t, o] = e[n].split("=");
            r[t] = o
        }
        return r
    }

    function U() {
        const t = new URL("https://seller.kuajingmaihuo.com/");
        let e = "";
        return chrome.cookies.getAll({
            domain: t.host
        }, (t => {
            t.map((t => {
                e += t.name + "=" + t.value + ";"
            }))
        })), e
    }

    function L() {
        const t = new URL("https://www.temu.com/");
        let e = "";
        return chrome.cookies.getAll({
            domain: t.host
        }, (t => {
            t.map((t => {
                e += t.name + "=" + t.value + ";"
            }))
        })), e
    }

    function _() {
        const t = new URL("https://www.shein.com/");
        let e = "";
        return chrome.cookies.getAll({
            domain: t.host
        }, (t => {
            t.map((t => {
                e += t.name + "=" + t.value + ";"
            }))
        })), e
    }

    function $(t = "https://csp.aliexpress.com/") {
        let e = "";
        return new Promise(((r, n) => {
            chrome.cookies.getAll({
                url: t
            }, (t => {
                t.map((t => {
                    e += t.name + "=" + t.value + ";"
                })), r(e)
            }))
        }))
    }

    function q(t = "http://xc.rqlis.com:888/") {
        let e = "";
        return new Promise(((r, n) => {
            chrome.cookies.getAll({
                url: t
            }, (t => {
                t.map((t => {
                    e += t.name + "=" + t.value + ";"
                })), r(e)
            }))
        }))
    }

    function M(t) {
        const e = [];
        for (let r in t) e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
        return e.join("&")
    }
    async function H() {
        let t = await chrome.tabs.query({
            url: "https://oms.xlwms.com/*"
        });
        if (t.length > 0) {
            let e = await chrome.scripting.executeScript({
                    target: {
                        tabId: t[0].id
                    },
                    func: () => JSON.stringify({
                        localStorage: window.localStorage
                    })
                }),
                r = JSON.parse(e[0].result);
            return r.localStorage["oms-token"]
        }
        console.log("没有找到匹配的tab")
    }
    chrome.runtime.onMessage.addListener(((t, e, r) => {
        if ("api" == t.type) {
            let e, n = {};
            new Promise((r => {
                if (t.needMallId && (n.Mallid = t.mallId), t.anti && (n["Anti-Content"] = t.anti), t.isFormData) {
                    const r = new FormData;
                    Object.keys(t.data).forEach((e => {
                        const n = t.data[e];
                        Array.isArray(n) ? n.forEach(((t, n) => {
                            r.append(e + `[${n}]`, t)
                        })) : "image" == e || r.append(e, t.data[e])
                    })), e = r
                } else n["Content-Type"] = "application/json", e = JSON.stringify(t.data);
                n.cookie = U(), t.isFormData && t.data.image ? N(t.data.image).then((t => e.append("image", t.image.blobData))).then(r) : r()
            })).then((() => fetch(t.url, {
                headers: n,
                method: "POST",
                referrerPolicy: "no-referrer",
                credentials: "include",
                body: e,
                mode: "cors"
            }))).then((t => t.json())).then(r)
        } else "temuApi" == t.type ? new Promise((e => {
            let r = {};
            t.anti && (r["Anti-Content"] = t.anti), r["Content-Type"] = "application/json", r.cookie = L(), Promise.resolve().then((() => fetch(t.url, {
                headers: r,
                method: "POST",
                referrerPolicy: "no-referrer",
                credentials: "include",
                body: JSON.stringify(t.data),
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((() => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "temu" == t.type ? new Promise((e => {
            let r = {
                "Content-Type": "text/html"
            };
            Promise.resolve().then((() => fetch(t.url, {
                headers: r,
                method: "GET",
                referrerPolicy: "no-referrer",
                mode: "cors"
            }))).then((t => {
                const r = t.body.getReader(),
                    n = new TextDecoder;
                let o = "";
                r.read().then((function t({
                    done: i,
                    value: a
                }) {
                    if (!i) return o += n.decode(a), r.read().then(t);
                    e(o)
                }))
            }))
        })).then(r) : "usps" == t.type ? new Promise((e => {
            let r = {
                "Content-Type": "text/html"
            };
            Promise.resolve().then((() => fetch(t.url, {
                headers: r,
                method: "GET",
                referrerPolicy: "no-referrer",
                mode: "cors"
            }))).then((t => {
                const r = t.body.getReader(),
                    n = new TextDecoder;
                let o = "";
                r.read().then((function t({
                    done: i,
                    value: a
                }) {
                    if (!i) return o += n.decode(a), r.read().then(t);
                    e(o)
                }))
            }))
        })).then(r) : "aliexpress" == t.type ? new Promise((async e => {
            let r = {
                "Content-Type": "text/html"
            };
            const n = await $(t.url),
                {
                    _m_h5_c: i,
                    _m_h5_tk: a
                } = D(n),
                {
                    query: {
                        data: c,
                        appKey: u
                    }
                } = R.parseUrl(t.url),
                {
                    formData: s = c
                } = t,
                {
                    sign: f,
                    t: l
                } = o(i || a, u, s),
                p = R.stringifyUrl({
                    url: t.url,
                    query: {
                        sign: f,
                        t: l
                    }
                });
            r.cookie = await $(p), Promise.resolve().then((() => fetch(p, {
                headers: r,
                method: "POST",
                referrerPolicy: "no-referrer",
                credentials: "include",
                mode: "cors"
            }))).then((t => {
                const r = t.body.getReader(),
                    n = new TextDecoder;
                let o = "";
                r.read().then((function t({
                    done: i,
                    value: a
                }) {
                    if (!i) return o += n.decode(a), r.read().then(t);
                    e(o)
                }))
            }))
        })).then(r) : "sheinApi" == t.type ? new Promise((e => {
            let r = {
                "Content-Type": "application/json"
            };
            r.cookie = _(), t.params = M(t.params);
            let n = t.url + (t.params ? "?" + t.params : "");
            Promise.resolve().then((() => fetch(n, {
                headers: r,
                method: t.method,
                referrerPolicy: "no-referrer",
                credentials: "include",
                body: JSON.stringify(t.data),
                mode: "cors"
            }))).then((t => {
                e(t.json())
            }))
        })).then(r) : "geiwohuoApi" == t.type ? new Promise((e => {
            let r = {
                "Content-Type": "application/json",
                "X-Req-Zone-Id": "Asia/Shanghai",
                "X-Lt-Language": "CN"
            };
            Promise.resolve().then((() => fetch(t.url, {
                headers: r,
                method: t.method,
                referrerPolicy: "no-referrer",
                credentials: "include",
                body: JSON.stringify(t.data),
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((() => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "goodcangApi" == t.type ? new Promise((e => {
            let r = {
                "Content-Type": "application/json"
            };
            Promise.resolve().then((() => fetch(t.url, {
                headers: r,
                method: t.method,
                referrerPolicy: "no-referrer",
                credentials: "include",
                body: JSON.stringify(t.data),
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((() => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "xcApi" == t.type ? new Promise((async e => {
            let r, n = {};
            if (n.cookie = await q(), console.log(n), t.isFormData) {
                const e = new FormData;
                Object.keys(t.data).forEach((r => {
                    const n = t.data[r];
                    Array.isArray(n) ? n.forEach(((t, n) => {
                        e.append(r + `[${n}]`, t)
                    })) : "image" == r || e.append(r, t.data[r])
                })), r = e
            } else n["Content-Type"] = "application/json", r = JSON.stringify(t.data);
            Promise.resolve().then((() => fetch(t.url, {
                headers: n,
                method: t.method,
                referrerPolicy: "strict-origin-when-cross-origin",
                credentials: "include",
                body: r,
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((() => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "cocpApi" == t.type ? new Promise((async e => {
            let r, n = {};
            if (n.cookie = await q(), t.isFormData) {
                const e = new FormData;
                Object.keys(t.data).forEach((r => {
                    const n = t.data[r];
                    Array.isArray(n) ? n.forEach(((t, n) => {
                        e.append(r + `[${n}]`, t)
                    })) : "image" == r || e.append(r, t.data[r])
                })), r = e
            } else n["Content-Type"] = "application/json", r = JSON.stringify(t.data);
            Promise.resolve().then((() => fetch(t.url, {
                headers: n,
                method: t.method,
                referrerPolicy: "strict-origin-when-cross-origin",
                credentials: "include",
                body: r,
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((() => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "zhengcangApi" == t.type ? new Promise((async e => {
            let r, n, o = {};
            if (n = await H(), o["Authorization"] = "Bearer " + n, t.isFormData) {
                const e = new FormData;
                Object.keys(t.data).forEach((r => {
                    const n = t.data[r];
                    Array.isArray(n) ? n.forEach(((t, n) => {
                        e.append(r + `[${n}]`, t)
                    })) : "image" == r || e.append(r, t.data[r])
                })), r = e
            } else o["Content-Type"] = "application/json", r = JSON.stringify(t.data);
            Promise.resolve().then((() => fetch(t.url, {
                headers: o,
                method: t.method,
                referrerPolicy: "strict-origin-when-cross-origin",
                credentials: "include",
                body: r,
                mode: "cors"
            }))).then((t => {
                e(t.json())
            })).catch((t => {
                e({
                    success: !1,
                    errorCode: -1
                })
            }))
        })).then(r) : "notify" == t.type && chrome.notifications.create("" + Math.random(), {
            type: "basic",
            title: "TEMU助手",
            message: "您店铺【" + t.mallName + "】的商品【" + t.productName + "】成功加入发货台，请尽快处理",
            iconUrl: "./icons/48.png"
        }, null);
        return !0
    })), chrome.action.onClicked.addListener((function() {
        chrome.tabs.create({
            url: "./popup.html"
        }, (function(t) {
            console.log("tab is:" + t)
        }))
    })), chrome.webRequest.onSendHeaders.addListener((t => {
        if (t.url && -1 != t.url.indexOf("joinDeliveryGoodsOrderPlatform")) {
            t.requestHeaders.push({
                name: "Referer",
                value: "https://seller.kuajingmaihuo.com/main/order-manage"
            });
            for (let e = 0; e < t.requestHeaders.length; e++)
                if ("Origin" == t.requestHeaders[e].name) {
                    t.requestHeaders[e].value = "https://seller.kuajingmaihuo.com";
                    break
                }
        } else if (t.url && -1 != t.url.indexOf("mms/userInfo")) {
            t.requestHeaders.push({
                name: "Referer",
                value: "https://seller.kuajingmaihuo.com/main/order-manage"
            });
            for (let e = 0; e < t.requestHeaders.length; e++)
                if ("Origin" == t.requestHeaders[e].name) {
                    t.requestHeaders[e].value = "https://seller.kuajingmaihuo.com";
                    break
                }
        }
    }), {
        urls: ["<all_urls>"]
    }, ["requestHeaders", "extraHeaders"])
})();