!(function (t) {
  function e(e) {
    for (
      var s, n, o = e[0], l = e[1], c = e[2], u = 0, h = [];
      u < o.length;
      u++
    )
      (n = o[u]),
        Object.prototype.hasOwnProperty.call(a, n) && a[n] && h.push(a[n][0]),
        (a[n] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    for (_ && _(e); h.length; ) h.shift()();
    return r.push.apply(r, c || []), i();
  }
  function i() {
    for (var t, e = 0; e < r.length; e++) {
      for (var i = r[e], s = !0, o = 1; o < i.length; o++) {
        var l = i[o];
        0 !== a[l] && (s = !1);
      }
      s && (r.splice(e--, 1), (t = n((n.s = i[0]))));
    }
    return t;
  }
  var s = {},
    a = { 2: 0 },
    r = [];
  function n(e) {
    if (s[e]) return s[e].exports;
    var i = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = s),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          n.d(
            i,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "");
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    l = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var c = 0; c < o.length; c++) e(o[c]);
  var _ = l;
  r.push([235, 0]), i();
})({
  192: function (t, e, i) {
    "use strict";
    var s = i(88);
    i.n(s).a;
  },
  193: function (t, e, i) {
    "use strict";
    var s = i(89);
    i.n(s).a;
  },
  195: function (t, e, i) {
    "use strict";
    var s = i(91);
    i.n(s).a;
  },
  196: function (t, e, i) {
    "use strict";
    var s = i(92);
    i.n(s).a;
  },
  197: function (t, e, i) {
    "use strict";
    var s = i(93);
    i.n(s).a;
  },
  199: function (t, e, i) {
    "use strict";
    var s = i(95);
    i.n(s).a;
  },
  200: function (t, e, i) {
    "use strict";
    var s = i(96);
    i.n(s).a;
  },
  201: function (t, e, i) {
    "use strict";
    var s = i(97);
    i.n(s).a;
  },
  235: function (t, e, i) {
    "use strict";
    i.r(e);
    i(56), i(161), i(128);
    var s = i(15),
      a = i(0),
      r = i(152),
      n = i.n(r);
    i(165), i(167);
    n()(), i(168)(null, { watchMQ: !0 });
    var o = i(153),
      l = i.n(o),
      c = (i(136), i(35)),
      _ = i(73),
      u = i(4),
      h = i(9),
      f = i(13),
      v = i(1),
      d = (function () {
        function t(e) {
          Object(u.a)(this, t),
            (this.el = e),
            (this.id = this.el.dataset.modal),
            (this.elContent = e.querySelector("[data-modal-content]")),
            (this.elClose = e.querySelector("[data-modal-close]")),
            (this.elBackdrop = e.querySelector("[data-modal-backdrop]")),
            v.a.set(this.elContent, {
              opacity: 0,
              y: 40,
              willChange: "opacity, transform",
            }),
            v.a.set(this.elClose, { opacity: 0, willChange: "opacity" }),
            v.a.set(this.elBackdrop, { opacity: 0, willChange: "opacity" }),
            e.addEventListener(
              "click",
              function (t) {
                C();
              },
              f.a
            ),
            this.elContent.addEventListener(
              "click",
              function (t) {
                t.stopPropagation();
              },
              f.a
            ),
            this.elClose.addEventListener(
              "click",
              function (t) {
                C();
              },
              f.a
            );
        }
        return (
          Object(h.a)(t, [
            {
              key: "open",
              value: function (t) {
                this.el.classList.add("-open"),
                  v.a.to(this.elContent, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: function () {
                      t && t();
                    },
                  }),
                  v.a.to(this.elClose, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    delay: 0.2,
                  }),
                  v.a.to(this.elBackdrop, {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power3.out",
                  });
              },
            },
            {
              key: "close",
              value: function (t) {
                var e = this;
                v.a.to(this.elContent, {
                  opacity: 0,
                  y: 40,
                  duration: 0.35,
                  ease: "power2.out",
                }),
                  v.a.to(this.elClose, {
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.out",
                  }),
                  v.a.to(this.elBackdrop, {
                    opacity: 0,
                    duration: 0.45,
                    ease: "power3.out",
                    onComplete: function () {
                      e.el.classList.remove("-open"), t && t();
                    },
                  });
              },
            },
          ]),
          t
        );
      })(),
      m = function t(e) {
        var i = this;
        Object(u.a)(this, t),
          (this.id = e.dataset.modalTrigger),
          e.addEventListener(
            "click",
            function () {
              var t;
              (t = i.id),
                (window.obgl.isOpenModal = !0),
                (p.modalOpened = p.instance[t]),
                y(p.modalOpened),
                p.modalOpened.open();
            },
            f.a
          );
      },
      p = { instance: {}, modalOpened: null };
    function C() {
      b(),
        p.modalOpened.close(function () {
          (p.modalOpened = null), (window.obgl.isOpenModal = !1);
        });
    }
    var g, j;
    function y(t) {
      t.scrollTo(0, 0),
        document.body.classList.add("-open-modal"),
        (g = Object(_.a)(".js-fixed_full, .tp-dfwv")).push(document.body);
      var e = Object(_.b)();
      e &&
        g.forEach(function (t) {
          a.a.set(t, { paddingRight: e });
        }),
        (j = window.pageYOffset),
        a.a.set(document.body, {
          position: "fixed",
          top: "-".concat(j, "px"),
          width: "100%",
          height: "100%",
        });
    }
    function b() {
      a.a.set(document.body, {
        position: null,
        top: null,
        width: null,
        height: null,
      }),
        a.a.set(window, { scrollTo: { y: j } }),
        g.forEach(function (t) {
          a.a.set(t, { paddingRight: "" });
        }),
        (g = null),
        document.body.classList.remove("-open-modal");
    }
    var S = i(2),
      w = i(23);
    function k(t, e, i) {
      Array.prototype.forEach.call(
        document.querySelectorAll(t),
        function (t, a) {
          new s.a({ el: t, components: Object(w.a)({}, e, i) });
        }
      );
    }
    i(131), i(59), i(60);
    var x = i(5),
      T = i(6),
      O = i(14),
      E = i(12),
      P = i(11),
      A = i(28),
      M = i(3),
      R = i(8),
      I = function t(e, i) {
        Object(u.a)(this, t);
        var s = e.querySelector(".js-trigger") || e,
          a = e.querySelector(".js-text") || e,
          r = new R.b(a, {
            color: "link" === e.dataset.flicker ? "#3455fc" : void 0,
            isInvert: i || "invert" === e.dataset.flicker,
          });
        S.a.isSP ||
          Object(M.a)(s, function () {
            r.play();
          });
      },
      N = [],
      $ = {
        components: { CSvg: E.a },
        props: {
          isInvert: { type: Boolean, default: !1 },
          en: { type: Boolean, required: !0 },
        },
        mounted: function () {
          var t = this;
          this.$media.isSP ||
            (Array.prototype.forEach.call(
              this.$el.querySelectorAll(".js-list_title"),
              function (t, e) {
                var i = new A.b(
                  t.querySelector(".js-text_en"),
                  t.querySelector(".js-text_jp")
                );
                N.push(i);
                var s = new P.a(t.querySelector(".js-line"));
                Object(M.a)(t, function () {
                  i.enter(), s.show();
                }),
                  Object(M.b)(t, function () {
                    i.leave(), s.hide();
                  });
              }
            ),
            a.a.delayedCall(0, function () {
              Array.prototype.forEach.call(
                t.$el.querySelectorAll("[data-flicker]"),
                function (e, i) {
                  new I(e, t.isInvert);
                }
              );
            }));
        },
      },
      L = (i(192), i(7)),
      q = Object(L.a)(
        $,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "c-header-list" }, [
            i("div", { staticClass: "c-header-list_inner -submenu" }, [
              i("div", { staticClass: "c-header-list_language" }, [
                t.en
                  ? i(
                      "a",
                      {
                        staticClass: "c-header-list_language_link",
                        attrs: { href: "/" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("JP"),
                        ]),
                        i(
                          "span",
                          { staticClass: "c-header-list_language_link_slush" },
                          [t._v("/")]
                        ),
                      ]
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-header-list_language_link -current",
                        attrs: { href: "/" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("JP"),
                        ]),
                      ]
                    ),
                t.en
                  ? i(
                      "a",
                      {
                        staticClass: "c-header-list_language_link -current",
                        attrs: { href: "/en/" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("EN"),
                        ]),
                      ]
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-header-list_language_link",
                        attrs: { href: "/en/" },
                      },
                      [
                        i(
                          "span",
                          { staticClass: "c-header-list_language_link_slush" },
                          [t._v("/")]
                        ),
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("EN"),
                        ]),
                      ]
                    ),
              ]),
              i("div", { staticClass: "c-header-list_inner" }, [
                t.en
                  ? i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link -none",
                        attrs: {
                          href: "https://product.acsl.co.jp/",
                          target: "_blank",
                        },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("PRODUCT SITE"),
                        ]),
                        i("CSvg", {
                          staticClass: "c-header-list_inner_link_icon",
                          attrs: { name: "b-icon_blank", alt: "" },
                        }),
                      ],
                      1
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link",
                        attrs: {
                          href: "https://product.acsl.co.jp/",
                          target: "_blank",
                        },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("PRODUCT SITE"),
                        ]),
                        i("CSvg", {
                          staticClass: "c-header-list_inner_link_icon",
                          attrs: { name: "b-icon_blank", alt: "" },
                        }),
                      ],
                      1
                    ),
                t.en
                  ? i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link",
                        attrs: { href: "/en/brand/", target: "_blank" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("BRAND SITE"),
                        ]),
                        i("CSvg", {
                          staticClass: "c-header-list_inner_link_icon",
                          attrs: { name: "b-icon_blank", alt: "" },
                        }),
                      ],
                      1
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link",
                        attrs: { href: "/brand/", target: "_blank" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("BRAND SITE"),
                        ]),
                        i("CSvg", {
                          staticClass: "c-header-list_inner_link_icon",
                          attrs: { name: "b-icon_blank", alt: "" },
                        }),
                      ],
                      1
                    ),
                t.en
                  ? i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link",
                        attrs: { href: "/en/contact/", target: "" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("CONTACT"),
                        ]),
                      ]
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-header-list_inner_link",
                        attrs: { href: "/contact/", target: "" },
                      },
                      [
                        i("span", { attrs: { "data-flicker": "" } }, [
                          t._v("CONTACT"),
                        ]),
                      ]
                    ),
              ]),
            ]),
            i("div", { staticClass: "c-header-list_inner" }, [
              t.en
                ? i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -ourSolutions",
                      attrs: { href: "/en/solutions/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("OUR SOLUTIONS"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("OUR SOLUTIONS")]
                      ),
                      t._m(0),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -ourSolutions",
                      attrs: { href: "/solutions/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("OUR SOLUTIONS"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("ACSLのソリューション")]
                      ),
                      t._m(1),
                    ]
                  ),
              t.en
                ? i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -ourBusiness",
                      attrs: { href: "/en/business/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("OUR BUSINESS"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("OUR BUSINESS")]
                      ),
                      t._m(2),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -ourBusiness",
                      attrs: { href: "/business/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("OUR BUSINESS"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("ACSLの競争力")]
                      ),
                      t._m(3),
                    ]
                  ),
              t.en
                ? i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -news",
                      attrs: { href: "/en/news-release/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("NEWS RELEASE"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("NEWS RELEASE")]
                      ),
                      t._m(4),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -news",
                      attrs: { href: "/news-release/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("NEWS RELEASE"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("ニュース")]
                      ),
                      t._m(5),
                    ]
                  ),
              t.en
                ? i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -irInformation",
                      attrs: { href: "/en/ir/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("IR INFORMATION"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("IR INFORMATION")]
                      ),
                      t._m(6),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass:
                        "c-header-list_title js-list_title -irInformation",
                      attrs: { href: "/ir/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("IR INFORMATION"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("株主・投資家情報")]
                      ),
                      t._m(7),
                    ]
                  ),
              t.en
                ? i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -company",
                      attrs: { href: "/en/company/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("COMPANY"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("COMPANY")]
                      ),
                      t._m(8),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -company",
                      attrs: { href: "/company/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("COMPANY"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("ACSLについて")]
                      ),
                      t._m(9),
                    ]
                  ),
              t.en
                ? i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -recruit",
                      attrs: { href: "/en/recruit/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("RECRUIT"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("RECRUIT")]
                      ),
                      t._m(10),
                    ]
                  )
                : i(
                    "a",
                    {
                      staticClass: "c-header-list_title js-list_title -recruit",
                      attrs: { href: "/recruit/" },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "c-header-list_title_text-en" },
                        [
                          i("div", { staticClass: "js-text_en" }, [
                            t._v("RECRUIT"),
                          ]),
                          i("CSvg", {
                            staticClass: "c-header-list_title_text_icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "div",
                        {
                          staticClass: "c-header-list_title_text-jp js-text_jp",
                        },
                        [t._v("採用情報")]
                      ),
                      t._m(11),
                    ]
                  ),
            ]),
            i(
              "div",
              { staticClass: "c-header-list_inner c-header-list_inner-fixed" },
              [
                i(
                  "a",
                  {
                    staticClass: "c-header-list_inner_mail",
                    attrs: { href: t.en ? "/en/contact/" : "/contact/" },
                  },
                  [
                    i("CSvg", {
                      staticClass: "c-header-list_inner_mail_icon",
                      attrs: { name: "c-mail_icon", alt: "" },
                    }),
                  ],
                  1
                ),
              ]
            ),
          ]);
        },
        [
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "c-header-list_border" }, [
              e("p", { staticClass: "c-header-list_border_inner js-line" }),
            ]);
          },
        ],
        !1,
        null,
        null,
        null
      ).exports,
      B = {
        components: { CSvg: E.a, CHeaderList: q },
        props: {
          en: { type: Boolean, required: !0 },
          type: {
            type: String,
            validator: function (t) {
              return ["normal", "kv"].includes(t);
            },
            default: "normal",
          },
        },
        data: function () {
          return {
            isInvert: !1,
            companyText:
              'Autonomous <br class="_sp">Control <br class="_sp">Systems <br class="_sp">Laboratory',
            isFixed: !1,
            isFixedPrev: !1,
            isShow: !1,
            isMenuShow: !1,
            isAnimateMenu: !1,
          };
        },
        computed: {
          classList: function () {
            return [
              "-".concat(this.type),
              { "-active": this.isMenuShow, "-fixed": this.isFixed },
            ];
          },
        },
        mounted: function () {
          var t = this,
            e = location.hash.replace("#", "");
          e && Object(c.b)(e, { isFast: !0 });
          var i = document.getElementById("js-kv");
          if (i) {
            if (
              ((this.elHeaderInner = this.$refs.inner),
              (this.isKv = "kv" === this.type),
              this.isKv)
            )
              window.pageYOffset > 0
                ? (a.a.set(this.$el, { opacity: 1 }), this.show(0))
                : T.a.$on("startSlider", function (e) {
                    var i = O.a.parameter,
                      s = i.durationStart,
                      r = i.easeStart;
                    a.a.to(t.$el, { opacity: 1, duration: s, ease: r });
                  }),
                T.a.$on("showHeader", function () {
                  t.show();
                }),
                T.a.$on("hideHeader", function () {
                  t.hide();
                });
            else {
              var s = this.isKv
                ? -1
                : i.getBoundingClientRect().bottom + window.pageYOffset;
              (this.irMenu = document.querySelector(".js-irmenu")),
                Object(x.onScroll)(function (e) {
                  window.obgl.isOpenModal ||
                    (e > s ? t.show() : e <= s && t.hide());
                }, !0);
            }
            T.a.$on("endAnimateMenu", function () {
              t.isAnimateMenu = !1;
            });
          }
        },
        methods: {
          show: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0.8;
            this.isKv && (this.isInvert = !1),
              this.isShow ||
                ((this.isShow = !0),
                v.a.set(this.elHeaderInner, { y: "-100%" }),
                (this.isFixed = !0),
                v.a.to(this.elHeaderInner, {
                  y: 0,
                  duration: e,
                  ease: "power2.out",
                  onStart: function () {
                    t.irMenu && t.irMenu.classList.add("-fixed");
                  },
                }));
          },
          hide: function () {
            var t = this;
            this.isKv && (this.isInvert = !0),
              this.isShow &&
                ((this.isShow = !1),
                v.a.to(this.elHeaderInner, {
                  y: "-100%",
                  duration: 0.3,
                  ease: "power2.out",
                  onStart: function () {
                    t.irMenu && t.irMenu.classList.remove("-fixed");
                  },
                  onComplete: function () {
                    (t.isFixed = !1), v.a.set(t.elHeaderInner, { y: 0 });
                  },
                }));
          },
          toggleMenu: function () {
            this.isAnimateMenu ||
              ((this.isMenuShow = !this.isMenuShow),
              this.isMenuShow && (this.isFixedPrev = this.isFixed),
              (this.isFixed = this.isFixedPrev || this.isMenuShow),
              (this.isAnimateMenu = !0),
              this.isMenuShow ? T.a.$emit("showMenu") : T.a.$emit("hideMenu"));
          },
        },
      },
      D =
        (i(193),
        Object(L.a)(
          B,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "header",
              { staticClass: "t-header", class: t.classList },
              [
                i(
                  "div",
                  { ref: "inner", staticClass: "t-header_inner js-fixed" },
                  [
                    i("div", { staticClass: "t-header_title" }, [
                      i("div", { staticClass: "t-header_title_inner" }, [
                        i("h1", { staticClass: "t-header_ja" }, [
                          t._v("国産産業用ドローンのACSL"),
                        ]),
                        i("p", {
                          staticClass: "t-header_company _pc",
                          domProps: { innerHTML: t._s(t.companyText) },
                        }),
                        i(
                          "a",
                          {
                            staticClass: "t-header_logo",
                            attrs: { href: t.en ? "/en/" : "/" },
                          },
                          [
                            i("CSvg", {
                              staticClass: "t-header_logo_image",
                              attrs: { name: "c-logoEN", alt: "ACSL" },
                            }),
                          ],
                          1
                        ),
                        i(
                          "div",
                          {
                            staticClass: "t-header_buger _sp",
                            class: { "-active": t.isMenuShow },
                            on: { click: t.toggleMenu },
                          },
                          [
                            i("span", { staticClass: "t-header_buger_line" }),
                            i("span", { staticClass: "t-header_buger_line" }),
                            i("span", { staticClass: "t-header_buger_line" }),
                          ]
                        ),
                      ]),
                    ]),
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.$media.isSP,
                            expression: "!$media.isSP",
                          },
                        ],
                        staticClass: "t-header_menu",
                        class: { "-active": t.isMenuShow },
                      },
                      [
                        i("div", { staticClass: "t-header_menu-inner" }, [
                          i("p", {
                            staticClass: "t-header_company _sp",
                            domProps: { innerHTML: t._s(t.companyText) },
                          }),
                          i("div", { staticClass: "t-header_content" }, [
                            i(
                              "div",
                              { staticClass: "t-header_content_inner" },
                              [
                                i("CHeaderList", {
                                  attrs: {
                                    "is-invert": "kv" === t.type,
                                    en: t.en,
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      U = {
        components: { CSvg: E.a, CHeaderList: q },
        props: {
          en: { type: Boolean, required: !0 },
          type: {
            type: String,
            validator: function (t) {
              return ["normal", "kv"].includes(t);
            },
            default: "normal",
          },
        },
        data: function () {
          return {
            isInvert: !1,
            companyText:
              'Autonomous <br class="_sp">Control <br class="_sp">Systems <br class="_sp">Laboratory',
            isFixed: !1,
            isFixedPrev: !1,
            isShow: !1,
            isMenuShow: !1,
            isAnimateMenu: !1,
          };
        },
        mounted: function () {
          var t = this;
          (this.elMenuInner = this.$el.querySelector(".js-menu_inner")),
            (this.elsMenuItem = [
              this.$el.querySelectorAll(".js-list_title"),
              this.$el.querySelectorAll(".c-header-list_inner.-submenu"),
            ]),
            T.a.$on("showMenu", function () {
              (t.isAnimateMenu = !0), (t.isMenuShow = !0), t.showMenu();
            }),
            T.a.$on("hideMenu", function () {
              (t.isAnimateMenu = !0), (t.isMenuShow = !1), t.hideMenu();
            });
        },
        methods: {
          toggleMenu: function () {
            this.isAnimateMenu ||
              ((this.isMenuShow = !this.isMenuShow),
              this.isMenuShow && (this.isFixedPrev = this.isFixed),
              (this.isFixed = this.isFixedPrev || this.isMenuShow),
              (this.isAnimateMenu = !0),
              this.isMenuShow ? this.showMenu() : this.hideMenu());
          },
          showMenu: function () {
            var t = this;
            (window.obgl.isOpenModal = !0),
              a.a.delayedCall(0, function () {
                y(t.elMenuInner),
                  v.a.to(t.elMenuInner, {
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                  }),
                  v.a.to(t.elMenuInner, {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                  }),
                  v.a.fromTo(
                    t.elsMenuItem,
                    { x: -40 },
                    {
                      x: 0,
                      duration: 0.8,
                      ease: "power4.out",
                      stagger: 0.06,
                      onComplete: function () {
                        (t.isAnimateMenu = !1), T.a.$emit("endAnimateMenu");
                      },
                    }
                  ),
                  v.a.fromTo(
                    t.elsMenuItem,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 0.6,
                      ease: "power2.out",
                      stagger: 0.06,
                    }
                  );
              });
          },
          hideMenu: function () {
            var t = this;
            b(),
              v.a.to(this.elMenuInner, {
                y: "-100%",
                duration: 0.6,
                ease: "power3.out",
              }),
              v.a.to(this.elMenuInner, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: function () {
                  a.a.delayedCall(0, function () {
                    (t.isAnimateMenu = !1),
                      (window.obgl.isOpenModal = !1),
                      T.a.$emit("endAnimateMenu");
                  });
                },
              }),
              v.a.to(this.elsMenuItem, {
                opacity: 0,
                duration: 0.2,
                ease: "power2.out",
              });
          },
        },
      },
      F = Object(L.a)(
        U,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.$media.isSP && (t.isMenuShow || t.isAnimateMenu),
                  expression: "$media.isSP && (isMenuShow || isAnimateMenu)",
                },
              ],
              staticClass: "t-header_menu",
              class: { "-active": t.isMenuShow },
            },
            [
              i("div", { staticClass: "t-header_menu-inner js-menu_inner" }, [
                i("p", {
                  staticClass: "t-header_company _sp",
                  domProps: { innerHTML: t._s(t.companyText) },
                }),
                i("div", { staticClass: "t-header_content" }, [
                  i(
                    "div",
                    { staticClass: "t-header_content_inner" },
                    [
                      i("CHeaderList", {
                        attrs: { "is-invert": "kv" === t.type, en: t.en },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports,
      H = i(16),
      z = (i(134), i(10)),
      Y = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t),
            (this.el = e),
            (this.elTrigger = e.querySelector(".js-accordion_trigger")),
            (this.elContent = e.querySelector(".js-accordion_content")),
            this.elTrigger &&
              this.elContent &&
              ((this.lineMove = new P.a(this.el.querySelector(".js-line"))),
              (this.isOpen = !1),
              v.a.set(this.elContent, {
                overflow: "hidden",
                height: 0,
                willChange: "height",
              }),
              Object(z.onResize)(function () {
                i.setHeight();
              }, !0),
              Object(M.a)(this.elTrigger, function () {
                v.a.to(i.elTrigger, {
                  color: "#3455fc",
                  duration: 0.8,
                  ease: "power2.out",
                }),
                  i.lineMove.show();
              }),
              Object(M.b)(this.elTrigger, function () {
                v.a.to(i.elTrigger, {
                  color: "#101112",
                  duration: 0.5,
                  ease: "power2.out",
                }),
                  i.lineMove.hide();
              }),
              this.elTrigger.addEventListener(
                "click",
                function () {
                  i.isOpen ? i.close() : i.open();
                },
                f.a
              ));
        }
        return (
          Object(h.a)(t, [
            {
              key: "open",
              value: function () {
                (this.isOpen = !0),
                  this.elTrigger.classList.add("-open"),
                  v.a.to(this.elContent, {
                    height: this.height,
                    duration: 0.7,
                    ease: "power4.out",
                    onComplete: z.emitResize,
                  }),
                  this.lineMove.show();
              },
            },
            {
              key: "close",
              value: function () {
                (this.isOpen = !1),
                  this.elTrigger.classList.remove("-open"),
                  v.a.to(this.elContent, {
                    height: 0,
                    duration: 0.65,
                    ease: "power4.out",
                    onComplete: z.emitResize,
                  }),
                  this.lineMove.hide();
              },
            },
            {
              key: "setHeight",
              value: function () {
                (this.height = this.elContent.children[0].offsetHeight),
                  this.isOpen &&
                    v.a.set(this.elContent, { height: this.height });
              },
            },
          ]),
          t
        );
      })(),
      V = {
        components: { CSvg: E.a },
        mounted: function () {
          Array.prototype.forEach.call(
            this.$el.querySelectorAll(".js-list_title"),
            function (t, e) {
              var i = new R.b(t.querySelector(".js-text")),
                s = new P.a(t.querySelector(".js-line"));
              Object(M.a)(t, function () {
                i.play(), s.show();
              }),
                Object(M.b)(t, function () {
                  s.hide();
                });
            }
          ),
            Array.prototype.forEach.call(
              this.$el.querySelectorAll(".js-hover"),
              function (t, e) {
                var i = new P.a(t.querySelector(".js-hover-line"));
                Object(M.a)(t, function () {
                  v.a.to(t, {
                    color: "#3455fc",
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                    i.show();
                }),
                  Object(M.b)(t, function () {
                    v.a.to(t, {
                      color: "#101112",
                      duration: 0.5,
                      ease: "power2.out",
                    }),
                      i.hide();
                  });
              }
            );
          var t = location.pathname.split("/")[1];
          Array.prototype.forEach.call(
            this.$el.querySelectorAll(".js-link"),
            function (e, i) {
              var s = e.hash,
                a = s.substring(1);
              a &&
                e.attributes.href.value.split("/")[1] === t &&
                e.addEventListener("click", function (t) {
                  t.preventDefault(),
                    window.history.pushState("", "", s),
                    Object(c.b)(a);
                });
            }
          ),
            Array.prototype.forEach.call(
              this.$el.querySelectorAll(".js-sub-link"),
              function (t, e) {
                var i = new R.b(t.querySelector(".js-sub-link_text"));
                Object(M.a)(t, function () {
                  i.play();
                });
              }
            ),
            this.$media.isSP &&
              Array.prototype.forEach.call(
                document.querySelectorAll(".js-footer-accordion"),
                function (t, e) {
                  new Y(t);
                }
              );
        },
      },
      X =
        (i(195),
        Object(L.a)(
          V,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "c-footer-list js-stagger-slide" }, [
              i("div", { staticClass: "c-footer-list_left" }, [
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-ourSolutions",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -ourSolutions",
                        attrs: { href: "/solutions/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR SOLUTIONS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(0),
                          ],
                          1
                        ),
                        t._m(1),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -ourSolutions",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR SOLUTIONS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(2),
                          ],
                          1
                        ),
                        t._m(3),
                      ]
                    ),
                    t._m(4),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-ourBussiness",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -ourBussiness",
                        attrs: { href: "/business/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR BUSSINESS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(5),
                          ],
                          1
                        ),
                        t._m(6),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -ourBussiness",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR BUSSINESS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(7),
                          ],
                          1
                        ),
                        t._m(8),
                      ]
                    ),
                    t._m(9),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-company",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -company",
                        attrs: { href: "/company/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("COMPANY")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(10),
                          ],
                          1
                        ),
                        t._m(11),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -company",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("COMPANY")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(12),
                          ],
                          1
                        ),
                        t._m(13),
                      ]
                    ),
                    t._m(14),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-nedo",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -nedo",
                        attrs: { href: "/nedo/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("NEDO DRONE PROJECT")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(15),
                          ],
                          1
                        ),
                        t._m(16),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -nedo",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("NEDO DRONE PROJECT")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(17),
                          ],
                          1
                        ),
                        t._m(18),
                      ]
                    ),
                    t._m(19),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-irInformation",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -irInformation",
                        attrs: { href: "/ir/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("IR INFORMATION")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(20),
                          ],
                          1
                        ),
                        t._m(21),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -irInformation",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("IR INFORMATION")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(22),
                          ],
                          1
                        ),
                        t._m(23),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "c-footer-list_wrapper js-accordion_content -irInformation",
                      },
                      [
                        i("ul", { staticClass: "c-footer-list_item" }, [
                          t._m(24),
                          t._m(25),
                          t._m(26),
                          t._m(27),
                          t._m(28),
                          t._m(29),
                          i("li", { staticClass: "c-footer-list_item_inner" }, [
                            t._m(30),
                            i("div", { staticClass: "c-footer-list_submenu" }, [
                              t._m(31),
                              t._m(32),
                              t._m(33),
                              i(
                                "a",
                                {
                                  staticClass:
                                    "c-footer-list_item_inner_link js-hover",
                                  attrs: {
                                    href: "http://stocks.finance.yahoo.co.jp/stocks/detail/?code=6232",
                                    target: "_blank",
                                  },
                                },
                                [
                                  t._m(34),
                                  i("CSvg", {
                                    staticClass:
                                      "c-footer-list_item_inner_link_icon",
                                    attrs: { name: "b-icon_blank", alt: "" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._m(35),
                          t._m(36),
                          t._m(37),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
              i("div", { staticClass: "c-footer-list_right" }, [
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-stagger-slide_item c-footer-list_inner-subLink",
                  },
                  [
                    i(
                      "div",
                      { staticClass: "c-footer-list_wrapper -subLink" },
                      [
                        i("ul", { staticClass: "c-footer-list_item" }, [
                          t._m(38),
                          t._m(39),
                          t._m(40),
                          i("li", { staticClass: "c-footer-list_item_inner" }, [
                            i(
                              "a",
                              {
                                staticClass:
                                  "c-footer-list_item_inner_link js-link js-sub-link",
                                attrs: {
                                  href: "https://product.acsl.co.jp/",
                                  target: "_blank",
                                },
                              },
                              [
                                i("span", { staticClass: "js-sub-link_text" }, [
                                  t._v("PRODUCT SITE"),
                                ]),
                                i("CSvg", {
                                  staticClass:
                                    "c-footer-list_item_inner_link_icon",
                                  attrs: { name: "b-icon_blank", alt: "" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          i("li", { staticClass: "c-footer-list_item_inner" }, [
                            i(
                              "a",
                              {
                                staticClass:
                                  "c-footer-list_item_inner_link js-link js-sub-link",
                                attrs: { href: "/brand/", target: "_blank" },
                              },
                              [
                                i("span", { staticClass: "js-sub-link_text" }, [
                                  t._v("BRAND SITE"),
                                ]),
                                i("CSvg", {
                                  staticClass:
                                    "c-footer-list_item_inner_link_icon",
                                  attrs: { name: "b-icon_blank", alt: "" },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        t._m(41),
                      ]
                    ),
                  ]
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -ourSolutions",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/solutions/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLのソリューション トップ"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/solutions/#ap3", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("AP3 制御技術"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/solutions/#product", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("製品一覧"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/solutions/#features", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("AP3 制御技術の特徴"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -ourBussiness",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/business/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLの競争力 トップ"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/business/#achievements",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLの実績"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/business/#values", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLの価値"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/business/#capability", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLの技術力"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -company",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/company/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLについて トップ"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/company/#mission", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLのミッション"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/company/executive-message",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("代表ご挨拶"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/company/#board", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("役員紹介"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/company/#outline", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("会社概要"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/company/#history", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ACSLの歩み"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -nedo",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/nedo/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("プロジェクト トップ"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/nedo/#outline", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("プロジェクト概要"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/nedo/#consortium", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("開発事業者"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/nedo/#news", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("お知らせ"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/nedo/#spec", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("ドローンスペック"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link",
                    attrs: { href: "/ir/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("株主・投資家情報 トップ"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/news/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IRニュース"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/library/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IRライブラリ"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
                e("div", { staticClass: "c-footer-list_submenu" }, [
                  e(
                    "a",
                    {
                      staticClass: "c-footer-list_item_inner_link js-hover",
                      attrs: { href: "/ir/library/", target: "" },
                    },
                    [
                      e("div", { staticClass: "c-footer-list_hover" }, [
                        this._v("決算短信"),
                        e("div", {
                          staticClass: "c-footer-list_hover-line js-hover-line",
                        }),
                      ]),
                    ]
                  ),
                  e(
                    "a",
                    {
                      staticClass: "c-footer-list_item_inner_link js-hover",
                      attrs: { href: "/ir/library/securities/", target: "" },
                    },
                    [
                      e("div", { staticClass: "c-footer-list_hover" }, [
                        this._v("有価証券報告書"),
                        e("div", {
                          staticClass: "c-footer-list_hover-line js-hover-line",
                        }),
                      ]),
                    ]
                  ),
                  e(
                    "a",
                    {
                      staticClass: "c-footer-list_item_inner_link js-hover",
                      attrs: { href: "/ir/library/presentation/", target: "" },
                    },
                    [
                      e("div", { staticClass: "c-footer-list_hover" }, [
                        this._v("決算説明資料"),
                        e("div", {
                          staticClass: "c-footer-list_hover-line js-hover-line",
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/management/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("コーポレート・ガバナンス"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/highlight/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("業績ハイライト"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/schedule/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IRスケジュール"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/ir/stock/" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("株式について"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/ir/stock/", target: "" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("株式情報"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/ir/stock/meeting/", target: "" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("株主総会"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/ir/stock/analyst/", target: "" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("アナリストカバレッジ"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_hover" }, [
                this._v("ファイナンス情報"),
                e("div", {
                  staticClass: "c-footer-list_hover-line js-hover-line",
                }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/faq/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("FAQ"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/notice/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("電子公告"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/ir/disclaimer/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("免責事項"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                e("a", { staticClass: "c-footer-list_item_inner_link" }, [
                  e("div", { staticClass: "c-footer-list_hover" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass:
                      "c-footer-list_item_inner_link js-link js-sub-link",
                    attrs: { href: "/news-release/", target: "" },
                  },
                  [
                    e("span", { staticClass: "js-sub-link_text" }, [
                      this._v("NEWS RELEASE"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass:
                      "c-footer-list_item_inner_link js-link js-sub-link",
                    attrs: { href: "/recruit/", target: "" },
                  },
                  [
                    e("span", { staticClass: "js-sub-link_text" }, [
                      this._v("RECRUIT"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_language" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_language_link",
                    attrs: { href: "/" },
                  },
                  [
                    this._v("JP"),
                    e(
                      "span",
                      { staticClass: "c-footer-list_language_link_slush" },
                      [this._v("/")]
                    ),
                  ]
                ),
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_language_link",
                    attrs: { href: "/en/" },
                  },
                  [this._v("EN")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      Z = {
        components: { CSvg: E.a },
        props: { en: { type: Boolean, required: !0 } },
        mounted: function () {
          Array.prototype.forEach.call(
            this.$el.querySelectorAll(".js-list_title"),
            function (t, e) {
              var i = new R.b(t.querySelector(".js-text")),
                s = new P.a(t.querySelector(".js-line"));
              Object(M.a)(t, function () {
                i.play(), s.show();
              }),
                Object(M.b)(t, function () {
                  s.hide();
                });
            }
          ),
            Array.prototype.forEach.call(
              this.$el.querySelectorAll(".js-hover"),
              function (t, e) {
                var i = new P.a(t.querySelector(".js-hover-line"));
                Object(M.a)(t, function () {
                  v.a.to(t, {
                    color: "#3455fc",
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                    i.show();
                }),
                  Object(M.b)(t, function () {
                    v.a.to(t, {
                      color: "#101112",
                      duration: 0.5,
                      ease: "power2.out",
                    }),
                      i.hide();
                  });
              }
            );
          var t = location.pathname.split("/")[2];
          Array.prototype.forEach.call(
            this.$el.querySelectorAll(".js-link"),
            function (e, i) {
              var s = e.hash,
                a = s.substring(1);
              a &&
                e.attributes.href.value.split("/")[2] === t &&
                e.addEventListener("click", function (t) {
                  t.preventDefault(),
                    window.history.pushState("", "", s),
                    Object(c.b)(a);
                });
            }
          ),
            Array.prototype.forEach.call(
              this.$el.querySelectorAll(".js-sub-link"),
              function (t, e) {
                var i = new R.b(t.querySelector(".js-sub-link_text"));
                Object(M.a)(t, function () {
                  i.play();
                });
              }
            ),
            this.$media.isSP &&
              Array.prototype.forEach.call(
                document.querySelectorAll(".js-footer-accordion"),
                function (t, e) {
                  new Y(t);
                }
              );
        },
      },
      K =
        (i(196),
        Object(L.a)(
          Z,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "c-footer-list js-stagger-slide" }, [
              i("div", { staticClass: "c-footer-list_left" }, [
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-ourSolutions",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -ourSolutions",
                        attrs: { href: "/en/solutions/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR SOLUTIONS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(0),
                          ],
                          1
                        ),
                        t._m(1),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -ourSolutions",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR SOLUTIONS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(2),
                          ],
                          1
                        ),
                        t._m(3),
                      ]
                    ),
                    t._m(4),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-ourBussiness",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -ourBussiness",
                        attrs: { href: "/en/business/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR BUSSINESS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(5),
                          ],
                          1
                        ),
                        t._m(6),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -ourBussiness",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("OUR BUSSINESS")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(7),
                          ],
                          1
                        ),
                        t._m(8),
                      ]
                    ),
                    t._m(9),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-company",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -company",
                        attrs: { href: "/en/company/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("COMPANY")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(10),
                          ],
                          1
                        ),
                        t._m(11),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -company",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("COMPANY")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(12),
                          ],
                          1
                        ),
                        t._m(13),
                      ]
                    ),
                    t._m(14),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-nedo",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -nedo",
                        attrs: { href: "/nedo/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("NEDO DRONE PROJECT")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(15),
                          ],
                          1
                        ),
                        t._m(16),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -nedo",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("NEDO DRONE PROJECT")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(17),
                          ],
                          1
                        ),
                        t._m(18),
                      ]
                    ),
                    t._m(19),
                  ]
                ),
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-footer-accordion js-stagger-slide_item c-footer-list_inner-irInformation",
                  },
                  [
                    i(
                      "a",
                      {
                        staticClass:
                          "_pc c-footer-list_title js-list_title -irInformation",
                        attrs: { href: "/en/ir/" },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("IR INFORMATION")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(20),
                          ],
                          1
                        ),
                        t._m(21),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "_sp c-footer-list_title js-accordion_trigger -irInformation",
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-footer-list_title_inner" },
                          [
                            i(
                              "div",
                              {
                                staticClass: "c-footer-list_title_text js-text",
                              },
                              [t._v("IR INFORMATION")]
                            ),
                            i("CSvg", {
                              staticClass: "c-footer-list_title_icon _pc",
                              attrs: { name: "b-icon_arrow", alt: "" },
                            }),
                            t._m(22),
                          ],
                          1
                        ),
                        t._m(23),
                      ]
                    ),
                    i(
                      "div",
                      {
                        staticClass:
                          "c-footer-list_wrapper js-accordion_content -irInformation",
                      },
                      [
                        i("ul", { staticClass: "c-footer-list_item" }, [
                          t._m(24),
                          t._m(25),
                          t._m(26),
                          t._m(27),
                          t._m(28),
                          t._m(29),
                          i("li", { staticClass: "c-footer-list_item_inner" }, [
                            t._m(30),
                            i("div", { staticClass: "c-footer-list_submenu" }, [
                              t._m(31),
                              t._m(32),
                              i(
                                "a",
                                {
                                  staticClass:
                                    "c-footer-list_item_inner_link js-hover",
                                  attrs: {
                                    href: "http://stocks.finance.yahoo.co.jp/stocks/detail/?code=6232",
                                    target: "_blank",
                                  },
                                },
                                [
                                  t._m(33),
                                  i("CSvg", {
                                    staticClass:
                                      "c-footer-list_item_inner_link_icon",
                                    attrs: { name: "b-icon_blank", alt: "" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                          ]),
                          t._m(34),
                          t._m(35),
                          t._m(36),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
              i("div", { staticClass: "c-footer-list_right" }, [
                i(
                  "div",
                  {
                    staticClass:
                      "c-footer-list_inner js-stagger-slide_item c-footer-list_inner-subLink",
                  },
                  [
                    i(
                      "div",
                      { staticClass: "c-footer-list_wrapper -subLink" },
                      [
                        i("ul", { staticClass: "c-footer-list_item" }, [
                          t._m(37),
                          t._m(38),
                          t._m(39),
                          i("li", { staticClass: "c-footer-list_item_inner" }, [
                            i(
                              "a",
                              {
                                staticClass:
                                  "c-footer-list_item_inner_link js-link js-sub-link",
                                attrs: { href: "/en/brand/", target: "_blank" },
                              },
                              [
                                i("span", { staticClass: "js-sub-link_text" }, [
                                  t._v("BRAND SITE"),
                                ]),
                                i("CSvg", {
                                  staticClass:
                                    "c-footer-list_item_inner_link_icon",
                                  attrs: { name: "b-icon_blank", alt: "" },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        t._m(40),
                      ]
                    ),
                  ]
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -ourSolutions",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/en/solutions/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("OUR SOLUTIONS TOP"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/solutions/#ap3", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("AP3 CONTROL TECHNOLOGY"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/solutions/#product", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("PRODUCT PORTFOLIO"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/en/solutions/#features",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("FEATURES"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -ourBussiness",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/en/business/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("OUR BUSSINESS TOP"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/en/business/#achievements",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("OUR ACHIEVEMENTS"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/business/#values", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("OUR VALUES"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/en/business/#capability",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("OUR CAPABILITY"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -company",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/en/company/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("COMPANY TOP"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/company/#mission", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("MISSION"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: {
                            href: "/en/company/executive-message",
                            target: "",
                          },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("CEO MESSAGE"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/company/#board", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("BOARD MEMBER"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/company/#outline", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("COMPANY OUTLINE"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/company/#history", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("HISTORY"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass:
                    "c-footer-list_wrapper js-accordion_content -nedo",
                },
                [
                  e("ul", { staticClass: "c-footer-list_item" }, [
                    e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-footer-list_item_inner_link",
                          attrs: { href: "/nedo/" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("PROJECT TOP"),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/nedo/#outline", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("PROJECT OUTLINE"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/nedo/#consortium", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("CONSORTIUM"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/nedo/#news", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("NEWS"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    e("li", { staticClass: "c-footer-list_item_inner" }, [
                      e(
                        "a",
                        {
                          staticClass:
                            "c-footer-list_item_inner_link js-link js-hover",
                          attrs: { href: "/en/nedo/#spec", target: "" },
                        },
                        [
                          e("div", { staticClass: "c-footer-list_hover" }, [
                            this._v("DRONE SPEC"),
                            e("div", {
                              staticClass:
                                "c-footer-list_hover-line js-hover-line",
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_title_icon _sp" }, [
                e("span"),
                e("span"),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_border" }, [
                e("div", { staticClass: "c-footer-list_border_inner js-line" }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link",
                    attrs: { href: "/en/ir/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IR INFORMATION TOP"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/news/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IR NEWS"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/library/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IR LIBRARY"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/management/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("CORPORATE GOVERNANCE"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/highlight/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("FINANCIAL HIGHLIGHTS"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/schedule/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("IR SCHEDULE"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/en/ir/stock/" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("STOCK INFORMATION"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/en/ir/stock/", target: "" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("STOCK OVERVIEW"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "a",
                {
                  staticClass: "c-footer-list_item_inner_link js-hover",
                  attrs: { href: "/en/ir/stock/analyst/", target: "" },
                },
                [
                  e("div", { staticClass: "c-footer-list_hover" }, [
                    this._v("ANALYST COVERAGE"),
                    e("div", {
                      staticClass: "c-footer-list_hover-line js-hover-line",
                    }),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_hover" }, [
                this._v("STOCK QUOTATIONS"),
                e("div", {
                  staticClass: "c-footer-list_hover-line js-hover-line",
                }),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/faq/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("FAQ"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/notice/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("ELECTRONIC PUBLIC NOTICE"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_item_inner_link js-hover",
                    attrs: { href: "/en/ir/disclaimer/" },
                  },
                  [
                    e("div", { staticClass: "c-footer-list_hover" }, [
                      this._v("DISCLAIMER"),
                      e("div", {
                        staticClass: "c-footer-list_hover-line js-hover-line",
                      }),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner _sp" }, [
                e("a", { staticClass: "c-footer-list_item_inner_link" }, [
                  e("div", { staticClass: "c-footer-list_hover" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass:
                      "c-footer-list_item_inner_link js-link js-sub-link",
                    attrs: { href: "/en/news-release/", target: "" },
                  },
                  [
                    e("span", { staticClass: "js-sub-link_text" }, [
                      this._v("NEWS RELEASE"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", { staticClass: "c-footer-list_item_inner" }, [
                e(
                  "a",
                  {
                    staticClass:
                      "c-footer-list_item_inner_link js-link js-sub-link",
                    attrs: { href: "/en/recruit/", target: "" },
                  },
                  [
                    e("span", { staticClass: "js-sub-link_text" }, [
                      this._v("RECRUIT"),
                    ]),
                  ]
                ),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-footer-list_language" }, [
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_language_link",
                    attrs: { href: "/" },
                  },
                  [
                    this._v("JP"),
                    e(
                      "span",
                      { staticClass: "c-footer-list_language_link_slush" },
                      [this._v("/")]
                    ),
                  ]
                ),
                e(
                  "a",
                  {
                    staticClass: "c-footer-list_language_link",
                    attrs: { href: "/en/" },
                  },
                  [this._v("EN")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      G = {
        components: {
          CButton: H.a,
          CSvg: E.a,
          CFooterList: X,
          CFooterListEn: K,
        },
        props: { en: { type: Boolean, required: !0 } },
      },
      W =
        (i(197),
        Object(L.a)(
          G,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("footer", { staticClass: "t-footer" }, [
              i("div", { staticClass: "t-footer_top" }, [
                i("div", { staticClass: "t-footer_header js-stagger-slide" }, [
                  t.en
                    ? i(
                        "a",
                        {
                          staticClass: "js-stagger-slide_item",
                          attrs: { href: "/en/" },
                        },
                        [
                          i("CSvg", {
                            staticClass: "t-footer_logo",
                            attrs: { name: "c-logoEN", alt: "ACSL" },
                          }),
                        ],
                        1
                      )
                    : i(
                        "a",
                        {
                          staticClass: "js-stagger-slide_item",
                          attrs: { href: "/" },
                        },
                        [
                          i("CSvg", {
                            staticClass: "t-footer_logo",
                            attrs: { name: "c-logoEN", alt: "ACSL" },
                          }),
                        ],
                        1
                      ),
                  i(
                    "p",
                    { staticClass: "t-footer_company js-stagger-slide_item" },
                    [t._v("Autonomous Control Systems Laboratory")]
                  ),
                  i(
                    "div",
                    { staticClass: "t-footer_contact" },
                    [
                      t.en
                        ? i(
                            "CButton",
                            {
                              attrs: {
                                to: "/en/contact/",
                                type: "invert",
                                "size-sp": "full",
                              },
                            },
                            [t._v("CONTACT")]
                          )
                        : i(
                            "CButton",
                            {
                              attrs: {
                                to: "/contact/",
                                type: "invert",
                                "size-sp": "full",
                              },
                            },
                            [t._v("CONTACT")]
                          ),
                    ],
                    1
                  ),
                ]),
                i("div", { staticClass: "t-footer_content" }, [
                  i(
                    "div",
                    { staticClass: "t-footer_content_inner" },
                    [
                      t.en
                        ? i("CFooterListEn", { attrs: { en: t.en } })
                        : i("CFooterList"),
                    ],
                    1
                  ),
                  i(
                    "div",
                    { staticClass: "t-footer_content_smoothTop" },
                    [
                      i("CButton", {
                        directives: [
                          { name: "anchor-smooth", rawName: "v-anchor-smooth" },
                        ],
                        attrs: { href: "#top", size: "min" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              i("div", { staticClass: "t-footer_bottom" }, [
                i("div", { staticClass: "t-footer_bottom_inner" }, [
                  t.en
                    ? i("div", { staticClass: "t-footer_bottom_inner_links" }, [
                        i(
                          "a",
                          {
                            staticClass: "t-footer_bottom_inner_link en",
                            attrs: { href: "/en/privacypolicy/" },
                          },
                          [t._v("PRIVACY POLICY")]
                        ),
                      ])
                    : i("div", { staticClass: "t-footer_bottom_inner_links" }, [
                        i(
                          "a",
                          {
                            staticClass: "t-footer_bottom_inner_link",
                            attrs: { href: "/privacypolicy/" },
                          },
                          [t._v("個人情報取扱方針")]
                        ),
                        i(
                          "a",
                          {
                            staticClass: "t-footer_bottom_inner_link",
                            attrs: { href: "/securitypolicy/" },
                          },
                          [t._v("情報セキュリティ方針")]
                        ),
                      ]),
                  i("p", { staticClass: "t-footer_bottom_inner_copy" }, [
                    t._v("©ACSL All Rights Reserved."),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      J = i(17),
      Q = {
        components: { CSvg: E.a },
        props: {
          to: { type: String, default: null },
          href: { type: String, default: null },
          target: { type: String, default: null },
          type: {
            type: String,
            validator: function (t) {
              return ["normal", "invert", "transparent", "lowerLayer"].includes(
                t
              );
            },
            default: "normal",
          },
          size: {
            type: String,
            validator: function (t) {
              return ["normal", "large", "full", "min"].includes(t);
            },
            default: "full",
          },
          sizeSp: {
            type: String,
            validator: function (t) {
              return ["normal", "large", "full", "min"].includes(t);
            },
            default: function () {
              return this.size;
            },
          },
          isManual: { type: Boolean, default: !1 },
        },
        computed: {
          className: function () {
            var t = this.$media.isSP ? this.sizeSp : this.size;
            return "-".concat(this.type, " -size-").concat(t);
          },
        },
        mounted: function () {
          switch (this.type) {
            case "transparent":
              this.setAnimationTransparent();
              break;
            case "normal":
            case "invert":
            default:
              this.setAnimationDefault();
          }
          if (!this.isManual) {
            var t = 0.2,
              e = 1.2,
              i =
                this.$el.getBoundingClientRect().top +
                window.pageYOffset -
                window.innerHeight +
                window.innerHeight * t,
              s = !1,
              r = a.a.fromTo(
                this.$el,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: e,
                  ease: "power4.out",
                  paused: !0,
                }
              );
            Object(x.onScroll)(function (t) {
              !s && t > i && ((s = !0), r.play());
            }, !0);
          }
        },
        methods: {
          setAnimationDefault: function () {
            var t = new A.a(
                this.$el.querySelector(".js-button_text"),
                this.$el.querySelector(".js-button_icon"),
                "normal" === this.type ? "double" : this.type
              ),
              e = new P.a(this.$el.querySelector(".js-line")),
              i = this.$el.querySelector(".js-button_inner");
            Object(M.a)(this.$el, function () {
              v.a.to(i, {
                borderColor: "#3455fc",
                duration: 0.5,
                ease: "power2.in",
              }),
                t.enter(),
                e.show();
            }),
              Object(M.b)(this.$el, function () {
                v.a.to(i, {
                  borderColor: "#e9ebf3",
                  duration: 0.3,
                  ease: "power2.out",
                }),
                  t.leave(),
                  e.hide();
              });
          },
          setAnimationTransparent: function () {
            var t = new A.a(
                this.$el.querySelector(".js-button_text"),
                this.$el.querySelector(".js-button_icon"),
                this.type
              ),
              e = new P.a(this.$el.querySelector(".js-line")),
              i = this.$el.querySelector(".js-button_inner");
            Object(M.a)(this.$el, function () {
              v.a.to(i, {
                borderColor: "rgba(255, 255, 255, 1)",
                duration: 0.5,
                ease: "power2.in",
              }),
                t.enter(),
                e.show();
            }),
              Object(M.b)(this.$el, function () {
                v.a.to(i, {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  duration: 0.3,
                  ease: "power2.out",
                }),
                  t.leave(),
                  e.hide();
              });
          },
        },
      },
      tt =
        (i(199),
        Object(L.a)(
          Q,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "a",
              {
                staticClass: "c-button-double",
                class: this.className,
                attrs: { href: this.href || this.to, target: this.target },
              },
              [
                e(
                  "div",
                  { staticClass: "c-button-double_inner js-button_inner" },
                  [
                    e(
                      "div",
                      { staticClass: "c-button-double_text js-button_text" },
                      [
                        e(
                          "div",
                          { staticClass: "c-button-double_text-inner" },
                          [
                            e(
                              "div",
                              { staticClass: "c-button-double_text-en" },
                              [this._t("en"), this._m(0)],
                              2
                            ),
                            e(
                              "div",
                              { staticClass: "c-button-double_text-ja" },
                              [this._t("ja")],
                              2
                            ),
                          ]
                        ),
                      ]
                    ),
                    e("CSvg", {
                      staticClass: "c-button-double_icon js-button_icon",
                      attrs: { name: "b-icon_arrow", alt: "" },
                    }),
                  ],
                  1
                ),
                e("div", { staticClass: "c-button-double_bg js-button_bg" }),
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "c-button-double_line" }, [
                e("div", { staticClass: "c-button-double_line-inner js-line" }),
              ]);
            },
          ],
          !1,
          null,
          "6ca0f18d",
          null
        ).exports),
      et =
        (i(83),
        {
          components: { CSvg: E.a },
          props: {
            item: { type: Object, required: !0 },
            type: { type: String, default: "" },
          },
          mounted: function () {
            var t = new R.b(this.$refs.name),
              e = this.$el.querySelector("svg");
            a.a.set(this.$el, { willChange: "transform" }),
              Object(M.a)(this.$el, function () {
                v.a.to(e, {
                  scale: 1.2,
                  rotate: "0.1deg",
                  duration: 0.6,
                  ease: "power3.out",
                }),
                  t.play();
              }),
              Object(M.b)(this.$el, function () {
                v.a.to(e, { scale: 1, duration: 0.3, ease: "power3.out" });
              });
          },
        }),
      it =
        (i(200),
        {
          components: {
            CIrLinkItem: Object(L.a)(
              et,
              function () {
                var t = this,
                  e = t.$createElement,
                  i = t._self._c || e;
                return "ir" === t.type
                  ? i(
                      "a",
                      {
                        ref: "icon",
                        staticClass: "c-ir-news-link-list_link",
                        attrs: { href: t.item.href },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "c-ir-link-item_wrap" },
                          [
                            i("CSvg", {
                              staticClass: "c-ir-news-link-list_icon",
                              attrs: { name: t.item.svg, alt: "" },
                            }),
                          ],
                          1
                        ),
                        i("div", {
                          ref: "name",
                          staticClass: "c-ir-news-link-list_name",
                          domProps: { innerHTML: t._s(t.item.name) },
                        }),
                      ]
                    )
                  : i(
                      "a",
                      {
                        staticClass: "c-ir-link-item",
                        attrs: { href: t.item.href },
                      },
                      [
                        i(
                          "div",
                          { ref: "icon", staticClass: "c-ir-link-item_icon" },
                          [
                            i("CSvg", {
                              staticClass: "c-ir-link-item_svg",
                              attrs: { name: t.item.svg, alt: "" },
                            }),
                          ],
                          1
                        ),
                        i("div", {
                          ref: "name",
                          staticClass: "c-ir-link-item_name",
                          domProps: { innerHTML: t._s(t.item.name) },
                        }),
                      ]
                    );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
          },
          props: { type: { type: String, default: "" } },
          data: function () {
            return {
              list: [
                {
                  svg: "b-ir_icon_01",
                  name: 'コーポレート・<br class="_sp">ガバナンス',
                  href: "/ir/management/",
                },
                {
                  svg: "b-ir_icon_02",
                  name: "業績ハイライト",
                  href: "/ir/highlight/",
                },
                {
                  svg: "b-ir_icon_03",
                  name: "IR スケジュール",
                  href: "/ir/schedule/",
                },
                {
                  svg: "b-ir_icon_04",
                  name: "株式について",
                  href: "/ir/stock/",
                },
                { svg: "b-ir_icon_05", name: "FAQ", href: "/ir/faq/" },
              ],
              list_en: [
                {
                  svg: "b-ir_icon_01",
                  name: 'CORPORATE <br class="_sp _pc-small">GOVERNANCE',
                  href: "/en/ir/management/",
                },
                {
                  svg: "b-ir_icon_02",
                  name: 'FINANCIAL <br class="_sp _pc-small">HIGHLIGHTS',
                  href: "/en/ir/highlight/",
                },
                {
                  svg: "b-ir_icon_03",
                  name: "IR SCHEDULE",
                  href: "/en/ir/schedule/",
                },
                {
                  svg: "b-ir_icon_04",
                  name: 'STOCK <br class="_pc-small">INFORMATION',
                  href: "/en/ir/stock/",
                },
                { svg: "b-ir_icon_05", name: "FAQ", href: "/en/ir/faq/" },
              ],
            };
          },
          mounted: function () {
            var t = 0.2,
              e = 1.2,
              i = this.$el.querySelectorAll(".js-item"),
              s =
                this.$el.getBoundingClientRect().top +
                window.pageYOffset -
                window.innerHeight +
                window.innerHeight * t,
              r = !1,
              n = a.a.fromTo(
                i,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: e,
                  ease: "power4.out",
                  stagger: 0.12,
                  paused: !0,
                }
              );
            Object(x.onScroll)(function (t) {
              !r && t > s && ((r = !0), n.play());
            }, !0);
          },
        }),
      st =
        (i(201),
        Object(L.a)(
          it,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return "ir" === t.type
              ? i(
                  "ul",
                  t._l(t.list, function (t) {
                    return i(
                      "li",
                      { staticClass: "c-ir-news-link-list_item js-item" },
                      [
                        i("CIrLinkItem", {
                          staticClass: "c-ir-news-link-list_link",
                          attrs: { item: t, type: "ir" },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                )
              : "irEn" === t.type
              ? i(
                  "ul",
                  t._l(t.list_en, function (t) {
                    return i(
                      "li",
                      { staticClass: "c-ir-news-link-list_item js-item" },
                      [
                        i("CIrLinkItem", {
                          staticClass: "c-ir-news-link-list_link",
                          attrs: { item: t, type: "ir" },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                )
              : "en" === t.type
              ? i(
                  "ul",
                  t._l(t.list_en, function (t) {
                    return i(
                      "li",
                      { staticClass: "c-ir-link_item js-item" },
                      [
                        i("CIrLinkItem", {
                          staticClass: "c-ir-link_link",
                          attrs: { item: t },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                )
              : i(
                  "ul",
                  t._l(t.list, function (t) {
                    return i(
                      "li",
                      { staticClass: "c-ir-link_item js-item" },
                      [
                        i("CIrLinkItem", {
                          staticClass: "c-ir-link_link",
                          attrs: { item: t },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      at = i(19),
      rt = i(52);
    window.obgl || (window.obgl = {});
    var nt = window.obgl;
    nt.globalParameter = nt && nt.globalParameter ? nt.globalParameter : {};
    var ot = nt.globalParameter,
      lt = (i(86), i(87), i(40), i(34), i(31), i(51), i(46)),
      ct = i(116),
      _t = i(25),
      ut = i(47);
    function ht(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function ft(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ht(Object(i), !0).forEach(function (e) {
              Object(w.a)(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : ht(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var vt = {
        folders: [
          {
            name: "h1背景",
            folders: [
              {
                name: "h1ノイズ",
                parameters: [
                  {
                    name: "ease out",
                    key: "easeNoiseOutTTitle",
                    value: "power2.in",
                  },
                  {
                    name: "ease in",
                    key: "easeNoiseInTTitle",
                    value: "power2.out",
                  },
                ],
              },
            ],
          },
        ],
      },
      dt = {
        folders: [
          {
            name: "h1背景",
            folders: [
              {
                name: "h1トランジション",
                parameters: [
                  {
                    name: "拡大率(out時)",
                    key: "pZoomOutTTitle",
                    value: 1.2,
                    range: [1, 2],
                  },
                  {
                    name: "拡大率(in時)",
                    key: "pZoomInTTitle",
                    value: 1.3,
                    range: [0, 2],
                  },
                  {
                    name: "横移動",
                    key: "pTranslateXMaxTTitle",
                    value: 0.58,
                    range: [0, 1],
                  },
                  {
                    name: "透過距離",
                    key: "pOpacityLengthTTitle",
                    value: 0.79,
                    range: [0, 1],
                  },
                ],
              },
              {
                name: "h1ノイズ",
                parameters: [
                  {
                    name: "細かさmin",
                    key: "pMagnificationMinTTitle",
                    value: 0.68,
                    range: [0, 1],
                  },
                  {
                    name: "細かさmax",
                    key: "pMagnificationMaxTTitle",
                    value: 2.2,
                    range: [0, 5],
                  },
                  {
                    name: "強さ",
                    key: "pNoiseKTTitle",
                    value: 0.07,
                    range: [0, 1],
                  },
                ],
              },
            ],
          },
        ],
      },
      mt = (function () {
        function t() {
          Object(u.a)(this, t);
        }
        return (
          Object(h.a)(t, [
            {
              key: "init",
              value: function (t, e, i, s) {
                var r = this;
                (this.parameter = at.a.convertDataset(vt)),
                  (this.scale = s || 1);
                var n = Object(ut.a)(Object(_t.a)(t), function () {
                  a.a.to(r.uniformsNoValue, {
                    uFadeBackground: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                });
                return this.set(n, e, i);
              },
            },
            {
              key: "set",
              value: function (t, e, i) {
                var s = new THREE.PlaneBufferGeometry(),
                  a = {
                    uSizeImage: { value: new THREE.Vector2(e, i) },
                    uResolution: { value: new THREE.Vector2() },
                    uTime: { value: 0 },
                    uMouseX: { value: 0 },
                    uMouseY: { value: 0 },
                    uProgressTransitionMain: { value: 0 },
                    uProgressTransitionPrev: { value: 0 },
                    uProgressTransitionNext: { value: 0 },
                    uSlidePrev: { value: t },
                    uSlidePrevBlur: { value: t },
                    uSlidePrevDepth: { value: t },
                    uSlideNext: { value: t },
                    uSlideNextBlur: { value: t },
                    uSlideNextDepth: { value: t },
                    uIndexPrev: { value: 0 },
                    uIndexNext: { value: 0 },
                    uFadeBackground: { value: 0 },
                  };
                this.uniformsNoValue = Object(lt.a)(a);
                var r = at.a.convertDatasetUniform(dt),
                  n = new THREE.RawShaderMaterial({
                    uniforms: ft({}, a, {}, r),
                    vertexShader: ct.a,
                    fragmentShader:
                      "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uResolution;\nuniform float uTime;\nuniform float uMouseX;\nuniform float uMouseY;\nuniform float uProgressTransitionMain;\nuniform float uProgressTransitionPrev;\nuniform float uProgressTransitionNext;\nuniform float uIndexPrev;\nuniform float uIndexNext;\nuniform sampler2D uSlidePrev;\nuniform sampler2D uSlidePrevBlur;\nuniform sampler2D uSlidePrevDepth;\nuniform sampler2D uSlideNext;\nuniform sampler2D uSlideNextBlur;\nuniform sampler2D uSlideNextDepth;\nuniform vec2 uSizeImage;\nuniform float uFadeBackground;\n\nuniform float pZoomOutTTitle;\nuniform float pZoomInTTitle;\nuniform float pTranslateXMaxTTitle;\nuniform float pMagnificationMinTTitle;\nuniform float pMagnificationMaxTTitle;\nuniform float pNoiseKTTitle;\nuniform float pOpacityLengthTTitle;\n\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvec2 adjustRatio(vec2 coord, vec2 inputResolution, vec2 outputResolution) {\n  vec2 ratio = vec2(\n    min((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),\n    min((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)\n  );\n  return coord * ratio + (1. - ratio) * 0.5;\n}\n\nvec2 getZoomedUv(vec2 uv, float zoom, vec2 origin) {\n  origin.x = -origin.x;\n  uv += origin;\n  float scale = 1. / zoom;\n  vec2 zoomedUv = uv * scale;\n  zoomedUv -= 0.5 * (scale - 1.);\n  return zoomedUv;\n}\n\n// const vec2 sizeImage = vec2(1520., 400.);\n\n// const float pZoomInTTitle = 1.01;\n// const float pTranslateXMaxTTitle = 0.1;\n// const float pMagnificationMinTTitle = 0.3;\n// const float pMagnificationMaxTTitle = 1.3;\n// const float pNoiseKTTitle = 0.1;\n// const float pOpacityLengthTTitle = 0.6;\n// const float pMouseKBackgroundX3 = 0.02;\n\nvoid main() {\n  vec2 uv = vUv;\n  uv = adjustRatio(uv, uSizeImage, uResolution);\n\n  float progressPrev = uProgressTransitionPrev;\n  float progressNext = uProgressTransitionNext;\n\n  vec2 uvPrev = getZoomedUv(uv, mix(1., pZoomOutTTitle, progressPrev), vec2(mix(0., pTranslateXMaxTTitle, progressPrev), 0.));\n\n  float noise = snoise(vec2(uvPrev.y * mix(pMagnificationMinTTitle, pMagnificationMaxTTitle, uProgressTransitionMain))) * pNoiseKTTitle * uProgressTransitionMain;\n  float mouseX = uMouseX / (uResolution.x / 2.);\n  float mouseY = uMouseY / (uResolution.y / 2.);\n\n  float translatePrev = clamp(-(uvPrev.x + noise) + progressPrev * 2., 0., 1.);\n  uvPrev.x -= mix(0., 0.5, translatePrev);\n\n  vec4 colorSlidePrev = vec4(1.);\n  vec4 colorSlidePrevBlur = vec4(1.);\n  colorSlidePrev = mix(colorSlidePrev, colorSlidePrevBlur, pow(progressPrev, 0.5));\n  colorSlidePrev = mix(colorSlidePrev, colorSlidePrevBlur, min(translatePrev * 5., 1.));\n  colorSlidePrev.a = 1. - min(translatePrev / max(pOpacityLengthTTitle, 0.01), 1.);\n\n  vec2 uvNext = getZoomedUv(uv, mix(1., pZoomInTTitle, progressNext), vec2(mix(0., -pTranslateXMaxTTitle, progressNext), 0.));\n\n  float translateNext = clamp(-(1. - uvNext.x - noise) + progressNext * 2., 0., 1.);\n  uvNext.x -= mix(0., 0.5, translateNext);\n\n  vec4 colorSlideNext = texture2D(uSlideNext, uvNext);\n  vec4 colorSlideNextBlur = texture2D(uSlideNextBlur, uvNext);\n\n  colorSlideNext.rgb = mix(\n    mix(\n      vec3(52. / 255., 85. / 255., 252. / 255.),\n      vec3(40. / 255., 133. / 255., 249. / 255.),\n      length(vec2(1. - uvNext.x, uvNext.y)) / length(vec2(1.))\n    ),\n    colorSlideNext.rgb,\n    uFadeBackground\n  );\n\n  colorSlideNext = mix(colorSlideNext, colorSlideNextBlur, pow(progressNext, 0.5));\n  colorSlideNext = mix(colorSlideNext, colorSlideNextBlur, min(translateNext * 5., 2.));\n\n  vec3 colorDest = mix(colorSlideNext.rgb, colorSlidePrev.rgb, colorSlidePrev.a);\n\n  gl_FragColor = vec4(colorDest, 1.);\n}\n",
                  });
                return (this.mesh = new THREE.Mesh(s, n)), this.mesh;
              },
            },
            {
              key: "change",
              value: function (t, e) {
                var i = this.uniformsNoValue,
                  s = ot.parameter.durationTTitle,
                  r = this.parameter,
                  n = r.easeNoiseOutTTitle,
                  o = r.easeNoiseInTTitle,
                  l = s / 2,
                  c = a.a.timeline();
                c.fromTo(
                  i,
                  { uProgressTransitionMain: 0 },
                  { uProgressTransitionMain: 1, duration: l, ease: n }
                ),
                  c.to(i, { uProgressTransitionMain: 0, duration: l, ease: o }),
                  a.a.fromTo(
                    i,
                    { uProgressTransitionPrev: 0 },
                    {
                      uProgressTransitionPrev: 1,
                      duration: s,
                      ease: "power3.in",
                    }
                  ),
                  a.a.fromTo(
                    i,
                    { uProgressTransitionNext: 1 },
                    {
                      uProgressTransitionNext: 0,
                      duration: s,
                      ease: "power3.out",
                    }
                  );
              },
            },
            {
              key: "resize",
              value: function (t, e) {
                this.uniformsNoValue.uResolution.set(t, e),
                  this.mesh.scale.set(t * this.scale, e * this.scale, 1);
              },
            },
            {
              key: "onUpdateAnimationFrame",
              value: function (t, e, i) {
                (this.uniformsNoValue.uTime = t),
                  (this.uniformsNoValue.uMouseX = e),
                  (this.uniformsNoValue.uMouseY = i);
              },
            },
          ]),
          t
        );
      })();
    function pt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function Ct(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pt(Object(i), !0).forEach(function (e) {
              Object(w.a)(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : pt(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var gt = {
        folders: [
          {
            name: "h1パーティクル",
            parameters: [
              {
                name: "ease",
                key: "easeParticleTTitle",
                value: "power3.inOut",
              },
              {
                name: "移動距離",
                key: "distanceParticleTTitle",
                value: 1.2,
                range: [0, 5],
              },
            ],
          },
        ],
      },
      jt = {
        folders: [
          {
            name: "h1パーティクル",
            parameters: [
              { name: "奥行き移動", key: "pDirectionDepthTTitle", value: !0 },
              { name: "個数", key: "pCountTTitle", value: 60, range: [0, 60] },
              {
                name: "サイズ",
                key: "pSizeTTitle",
                value: S.a.isSP ? 50 : 200,
                range: [0, 1e3],
              },
              {
                name: "スピード",
                key: "pSpeedTTitle",
                value: 0.02,
                range: [0, 0.1],
              },
              { name: "ブラー", key: "pBlurTTitle", value: 0.8, range: [0, 1] },
              {
                name: "透過度",
                key: "pAlphaMaxTTitle",
                value: 0.4,
                range: [0, 1],
              },
              {
                name: "透過度min",
                key: "pAlphaMinTTitle",
                value: 0.1,
                range: [0, 1],
              },
              {
                name: "焦点",
                key: "pReferencePointTTitle",
                value: 0.6,
                range: [0, 1],
              },
              {
                name: "疑似3D移動距離X",
                key: "pMouseKParticleXTTitle",
                value: 0.1,
                range: [0, 0.2],
              },
              {
                name: "疑似3D移動距離Y",
                key: "pMouseKParticleYTTitle",
                value: 0.08,
                range: [0, 0.2],
              },
            ],
          },
        ],
      },
      yt = (function () {
        function t() {
          Object(u.a)(this, t);
        }
        return (
          Object(h.a)(t, [
            {
              key: "init",
              value: function (t) {
                this.parameter = at.a.convertDataset(gt);
                for (
                  var e = new THREE.BufferGeometry(), i = [], s = [], a = 0;
                  a < 60;
                  a++
                )
                  i.push(
                    Math.random(),
                    Math.random(),
                    Math.random(),
                    Math.random()
                  ),
                    s.push(a);
                e.setAttribute(
                  "position",
                  new THREE.Float32BufferAttribute(i, 4)
                ),
                  e.setAttribute("id", new THREE.Float32BufferAttribute(s, 1));
                var r = {
                  uResolution: { value: new THREE.Vector2() },
                  uTime: { value: 0 },
                  uMouseX: { value: 0 },
                  uMouseY: { value: 0 },
                  uPixelRatio: { value: window.devicePixelRatio },
                  uProgressTransition: { value: 0 },
                  uCameraZ: { value: t },
                };
                this.uniformsNoValue = Object(lt.a)(r);
                var n = at.a.convertDatasetUniform(jt),
                  o = new THREE.RawShaderMaterial({
                    uniforms: Ct({}, r, {}, n),
                    vertexShader:
                      "#define GLSLIFY 1\nattribute vec4 position;\nattribute float id;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform vec2 uResolution;\nuniform float uTime;\nuniform float uMouseX;\nuniform float uMouseY;\nuniform float uPixelRatio;\nuniform float uProgressTransition;\nuniform float uCameraZ;\n\nuniform bool pDirectionDepthTTitle;\nuniform float pSizeTTitle;\nuniform float pSpeedTTitle;\nuniform float pMouseKParticleXTTitle;\nuniform float pMouseKParticleYTTitle;\n\nvarying float vRandom;\nvarying float vPositionZ;\nvarying float vId;\n\nvoid main () {\n  float randomValue = position.w;\n  float mouseX = uMouseX / (uResolution.x / 2.);\n  float mouseY = uMouseY / (uResolution.x / 2.);\n\n  vec3 currentPosition = position.xyz;\n  if (pDirectionDepthTTitle) {\n    currentPosition.z = fract(currentPosition.z + uProgressTransition);\n  } else {\n    currentPosition.x = fract(currentPosition.x - uProgressTransition);\n  }\n\n  float nPositionZ = currentPosition.z;\n\n  currentPosition.x = fract(currentPosition.x - uTime * mix(0.01, pSpeedTTitle, nPositionZ * randomValue));\n  currentPosition.x -= mouseX * pMouseKParticleXTTitle * mix(-0.2, 1.5, nPositionZ);\n  currentPosition.y += mouseY * pMouseKParticleYTTitle * mix(-0.2, 1.5, nPositionZ);\n\n  currentPosition.xy = currentPosition.xy * 2. - 1.;\n\n  currentPosition.xy *= uResolution * 0.5;\n  currentPosition.z *= uCameraZ;\n\n  vRandom = randomValue;\n  vPositionZ = nPositionZ;\n  vId = id;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(currentPosition, 1.);\n  gl_PointSize = nPositionZ * uPixelRatio * mix(uPixelRatio > 1. ? 4. : 2., pSizeTTitle, pow(randomValue, 0.8));\n}\n",
                    fragmentShader:
                      "precision highp float;\n#define GLSLIFY 1\n\nuniform float pBlurTTitle;\nuniform float pAlphaMaxTTitle;\nuniform float pAlphaMinTTitle;\nuniform float pReferencePointTTitle;\nuniform float pCountTTitle;\n\nvarying float vRandom;\nvarying float vPositionZ;\nvarying float vId;\n\nconst vec3 baseColor = vec3(52., 85., 252.) / 255.;\n\n// const float pReferencePointTTitle = 0.5;\n\nvoid main(){\n  if (vId >= pCountTTitle) discard;\n\n\tvec2 p = gl_PointCoord * 2. - 1.;\n\tfloat len = length(p);\n\n  float referencePoint = abs(vPositionZ - pReferencePointTTitle) * (1. - pReferencePointTTitle);\n\n  float cBlur = pBlurTTitle;\n  cBlur *= mix(1., 0.5, referencePoint);\n  cBlur *= mix(0.1, 0.9, vRandom);\n\n\tfloat shape = smoothstep(1. - cBlur, 1. + cBlur, (1. - cBlur) / len);\n  shape *= mix(0.5, 1., vRandom);\n\n  if (shape == 0.) discard;\n\n  float alpha = mix(pAlphaMinTTitle, pAlphaMaxTTitle, pow(1. - vPositionZ, 2.) * vRandom);\n\n\tgl_FragColor = vec4(baseColor * mix(0.5, 1., vRandom), shape * alpha);\n}\n",
                    transparent: !0,
                    depthTest: !1,
                    blending: THREE.AdditiveBlending,
                  });
                return (
                  (this.mesh = new THREE.Points(e, o)),
                  (this.mesh.frustumCulled = !1),
                  (this.mesh.position.z = 2),
                  this.mesh
                );
              },
            },
            {
              key: "change",
              value: function () {
                var t = this.uniformsNoValue,
                  e = ot.parameter.durationTTitle,
                  i = this.parameter,
                  s = i.easeParticleTTitle,
                  r = i.distanceParticleTTitle;
                a.a.to(t, {
                  uProgressTransition: "+=".concat(r),
                  duration: e,
                  ease: s,
                  onComplete: function () {
                    a.a.set(t, {
                      uProgressTransition: t.uProgressTransition % 1,
                    });
                  },
                });
              },
            },
            {
              key: "resize",
              value: function (t, e) {
                this.uniformsNoValue.uResolution.set(t, e);
              },
            },
            {
              key: "onUpdateAnimationFrame",
              value: function (t, e, i) {
                (this.uniformsNoValue.uTime = t),
                  (this.uniformsNoValue.uMouseX = e),
                  (this.uniformsNoValue.uMouseY = i);
              },
            },
            {
              key: "updateCameraZ",
              value: function (t) {
                this.uniformsNoValue.uCameraZ = t;
              },
            },
          ]),
          t
        );
      })(),
      bt = {
        folders: [
          {
            name: "h1",
            parameters: [
              { key: "durationTTitle", value: 1.6, range: [0, 5] },
              { key: "fovTTitle", value: 50, range: [26, 179] },
            ],
          },
          {
            name: "h1マウス",
            parameters: [
              {
                name: "イージング",
                key: "easingMouseTTitle",
                value: 0.08,
                range: [0, 0.3],
              },
            ],
          },
        ],
      },
      St = (function () {
        function t(e) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Object(u.a)(this, t);
          var s = i.isAutoStart,
            a = void 0 === s || s;
          (this.isStop = !0),
            (this.frame = 0),
            (this.indexCurrent = 0),
            (this.mouse = { x: 0, y: 0 }),
            (this.mouseProgress = { x: 0, y: 0 }),
            (this.canvas = e),
            (this.isAutoStart = a),
            (ot.parameter = at.a.convertDataset(bt));
        }
        return (
          Object(h.a)(t, [
            {
              key: "init",
              value: function (t, e, i, s, a) {
                this._initWebGL(this.canvas),
                  (this.background = new mt()),
                  (this.particle = new yt());
                var r = this.particle.init(this.camera.position.z);
                this.scene.add(r);
                var n = this.background.init(t, e, i, s);
                this.scene.add(n), this._addEventListener(), a && a();
              },
            },
            {
              key: "start",
              value: function () {
                (this.isStart = !0),
                  this._play(),
                  this.particle.change(),
                  this.background.change(-1, 0);
              },
            },
            {
              key: "_initWebGL",
              value: function (t) {
                (this.renderer = new THREE.WebGLRenderer({
                  canvas: t,
                  alpha: !0,
                })),
                  this.renderer.setClearColor("#fff", 1),
                  (this.scene = new THREE.Scene()),
                  (this.camera = new THREE.PerspectiveCamera(
                    ot.parameter.fovTTitle
                  ));
              },
            },
            {
              key: "_updateMouse",
              value: function (t, e) {
                (this.mouse.x = t - ot.width / 2),
                  (this.mouse.y = e - ot.height / 2);
              },
            },
            {
              key: "_updateCameraZ",
              value: function () {
                (this.camera.position.z =
                  Math.min(ot.width, ot.height) /
                  2 /
                  Math.tan((this.camera.fov / 2) * (Math.PI / 180))),
                  this.particle.updateCameraZ(this.camera.position.z);
              },
            },
            {
              key: "_pause",
              value: function () {
                (this.isStop = !0), clearTimeout(this.timer);
              },
            },
            {
              key: "_play",
              value: function () {
                this.isStop = !1;
              },
            },
            {
              key: "_resize",
              value: function () {
                var t = this.renderer,
                  e = this.camera,
                  i = t.domElement;
                (i.style.width = ""), (i.style.height = "");
                var s = (ot.width = i.clientWidth),
                  a = (ot.height = i.clientHeight);
                (e.aspect = s / a),
                  this._updateCameraZ(),
                  e.updateProjectionMatrix(),
                  t.setSize(s, a),
                  (this.scrollStart =
                    i.getBoundingClientRect().top +
                    window.pageYOffset -
                    1.2 * window.innerHeight),
                  (this.topStop =
                    i.getBoundingClientRect().bottom + window.pageYOffset),
                  this.particle.resize(s, a),
                  this.background.resize(s, a),
                  this._updateMouse(this.mouseProgress.x, this.mouseProgress.y);
              },
            },
            {
              key: "_addEventListener",
              value: function () {
                var t = this;
                Object(rt.onUpdateAnimationFrame)(function (e) {
                  if (!t.isStop && t.frame++ % 2 == 0) {
                    var i = ot.parameter.easingMouseTTitle;
                    (t.mouseProgress.x += (t.mouse.x - t.mouseProgress.x) * i),
                      Math.abs(t.mouseProgress.x) < 1e-4 &&
                        (t.mouseProgress.x = 0),
                      (t.mouseProgress.y +=
                        (t.mouse.y - t.mouseProgress.y) * i),
                      Math.abs(t.mouseProgress.y) < 1e-4 &&
                        (t.mouseProgress.y = 0),
                      t.particle.onUpdateAnimationFrame(
                        e,
                        t.mouseProgress.x,
                        t.mouseProgress.y
                      ),
                      t.background.onUpdateAnimationFrame(
                        e,
                        t.mouseProgress.x,
                        t.mouseProgress.y
                      ),
                      t.renderer.render(t.scene, t.camera);
                  }
                }),
                  this.renderer.domElement.addEventListener(
                    "mousemove",
                    function (e) {
                      t._updateMouse(e.clientX, e.clientY);
                    },
                    f.a
                  ),
                  Object(z.onResize)(function () {
                    t._resize();
                  }, !0),
                  Object(x.onScroll)(function (e) {
                    !t.isStop && (e <= t.scrollStart || e > t.topStop)
                      ? t.isStart && t._pause()
                      : t.isStop &&
                        e > t.scrollStart &&
                        e <= t.topStop &&
                        (t.isStart
                          ? t.isStart && t._play()
                          : t.isAutoStart && t.start());
                  }, !0);
              },
            },
          ]),
          t
        );
      })(),
      wt = 0.05;
    var kt = 0.8,
      xt = 1.4;
    function Tt() {
      var t = document.querySelectorAll(".js-c-news-list, .js-c-link-list");
      0 !== t.length && Array.prototype.forEach.call(t, Ot);
    }
    function Ot(t) {
      var e,
        i = t.querySelectorAll(".js-item"),
        s = !1;
      Object(z.onResize)(function () {
        s ||
          (e =
            t.getBoundingClientRect().top +
            window.pageYOffset -
            window.innerHeight * kt);
      }, !0);
      var r = a.a.fromTo(
        i,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: xt,
          ease: "power4.out",
          stagger: 0.2,
          paused: !0,
        }
      );
      Object(x.onScroll)(function (t) {
        !s && t > e && ((s = !0), r.play());
      }, !0),
        Array.prototype.forEach.call(
          t.querySelectorAll(".js-link"),
          function (t, e) {
            var i = new P.a(t.querySelector(".js-line")),
              s = t.querySelector(".js-date"),
              a = t.querySelector(".js-text");
            Object(M.a)(t, function () {
              i.show(),
                v.a.to(s, {
                  color: "#d5d7de",
                  duration: 0.8,
                  ease: "power3.out",
                }),
                v.a.to(a, {
                  color: "#3455fc",
                  duration: 0.8,
                  ease: "power3.out",
                });
            }),
              Object(M.b)(t, function () {
                i.hide(),
                  v.a.to(s, {
                    color: "#c1c4cb",
                    duration: 0.5,
                    ease: "power3.out",
                  }),
                  v.a.to(a, {
                    color: "#101112",
                    duration: 0.5,
                    ease: "power3.out",
                  });
              });
          }
        );
    }
    var Et = 1,
      Pt = 1.4;
    function At(t) {
      var e,
        i = t.querySelectorAll(".js-item"),
        s = !1;
      Object(z.onResize)(function () {
        s ||
          (e =
            t.getBoundingClientRect().top +
            window.pageYOffset -
            window.innerHeight * Et);
      }, !0),
        a.a.set(i, { opacity: 0, x: -60, willChange: "opacity, transform" });
      var r = a.a.to(i, {
        opacity: 1,
        x: 0,
        duration: Pt,
        ease: "power4.out",
        stagger: 0.2,
        paused: !0,
      });
      Object(x.onScroll)(function (t) {
        !s && t > e && ((s = !0), r.play());
      }, !0);
    }
    var Mt = i(72),
      Rt = [];
    function It() {
      Rt.forEach(function (t) {
        t.reset();
      });
    }
    var Nt = (function () {
        function t(e) {
          var i = this,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          Object(u.a)(this, t);
          var a = e.querySelectorAll(".c-tab_naviitem"),
            r = e.querySelectorAll(".js-tab-select");
          0 !== a.length &&
            ((this.triggers = []),
            Array.prototype.forEach.call(a, function (t) {
              i.triggers.push(
                new $t(
                  t.querySelector(".c-tab_navilink"),
                  t,
                  s,
                  i.allDeactivate.bind(i)
                )
              );
            }),
            r.length > 0 &&
              Array.prototype.forEach.call(r, function (t) {
                new Lt({ el: t });
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "allDeactivate",
              value: function () {
                this.triggers.forEach(function (t) {
                  t.elParent.classList.remove("-active"), t.deactivate();
                });
              },
            },
            {
              key: "reset",
              value: function () {
                this.triggers.forEach(function (t) {
                  t.reset();
                });
              },
            },
          ]),
          t
        );
      })(),
      $t = (function () {
        function t(e, i) {
          var s = this,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          if (
            (Object(u.a)(this, t),
            (this.lineMove = new P.a(e.querySelector(".c-tab_navilink-line"))),
            this.lineMove &&
              ((this.el = e),
              (this.elParent = i),
              (this.sortArray = []),
              (this.allDeactivate = r),
              this.elParent.classList.contains("-active") &&
                this.lineMove.show(),
              Object(M.a)(this.el, function () {
                s.elParent.classList.contains("-active") || s.activate();
              }),
              Object(M.b)(this.el, function () {
                s.elParent.classList.contains("-active") || s.deactivate();
              }),
              a))
          ) {
            var n = document.querySelector('button[data-category="all"]');
            this.el === n &&
              (this.el.parentNode.classList.add("-active"), this.activate()),
              this.el.addEventListener("click", this.eClick.bind(this));
          }
        }
        return (
          Object(h.a)(t, [
            {
              key: "activate",
              value: function () {
                v.a.to(this.el, {
                  color: "#3455fc",
                  duration: 0.8,
                  ease: "power2.out",
                }),
                  this.lineMove.show();
              },
            },
            {
              key: "deactivate",
              value: function () {
                v.a.to(this.el, {
                  color: "#101112",
                  duration: 0.5,
                  ease: "power2.out",
                }),
                  this.lineMove.hide();
              },
            },
            {
              key: "reset",
              value: function () {
                this.elParent.classList.contains("-active")
                  ? this.activate()
                  : this.deactivate();
              },
            },
            {
              key: "eClick",
              value: function () {
                var t = this.el.dataset.category,
                  e = Object(Mt.a)(document.querySelectorAll(".js-tab-sort"));
                if (
                  (this.allDeactivate(),
                  this.tl && this.tl.kill(),
                  (this.tl = v.a.timeline()),
                  this.tl.to(e, { opacity: 0, duration: 0.3 }),
                  "all" === t)
                )
                  this.tl
                    .set(e, { display: "block" })
                    .to(e, { opacity: 1, duration: 0.3 });
                else {
                  var i = e.filter(function (e) {
                    return e.dataset.category === t;
                  });
                  this.tl
                    .set(e, { display: "none" })
                    .set(i, { display: "block" })
                    .to(i, { opacity: 1, duration: 0.5 })
                    .call(function () {
                      T.a.$emit("reCalcFromTop");
                    });
                }
                this.elParent.classList.add("-active"), this.activate();
              },
            },
          ]),
          t
        );
      })(),
      Lt = (function () {
        function t(e) {
          var i = e.el;
          Object(u.a)(this, t),
            i.addEventListener("change", this.eChangeSelect);
        }
        return (
          Object(h.a)(t, [
            {
              key: "eChangeSelect",
              value: function (t) {
                var e = t.target.value,
                  i = Object(Mt.a)(document.querySelectorAll(".js-tab-sort"));
                if (
                  (this.tl && this.tl.kill(),
                  (this.tl = v.a.timeline()),
                  this.tl.to(i, { opacity: 0, duration: 0.3 }),
                  "all" === e)
                )
                  this.tl
                    .set(i, { display: "block" })
                    .to(i, { opacity: 1, duration: 0.3 });
                else {
                  var s = i.filter(function (t) {
                    return t.dataset.category === e;
                  });
                  this.tl
                    .set(i, { display: "none" })
                    .set(s, { display: "block" })
                    .to(s, { opacity: 1, duration: 0.5 })
                    .call(function () {
                      return T.a.$emit("reCalcFromTop");
                    });
                }
              },
            },
          ]),
          t
        );
      })();
    var qt = function t(e) {
        Object(u.a)(this, t),
          e.addEventListener(
            "change",
            function () {
              e.value
                ? e.classList.remove("-empty")
                : e.classList.add("-empty");
            },
            { passive: !1 }
          );
      },
      Bt = 1,
      Dt = 0.5,
      Ut = 1.4,
      Ft = 0.8,
      Ht = 0.5;
    var zt = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t),
            (this.elsStaggerItem = e.querySelectorAll(
              ".js-stagger-slide_item"
            )),
            (this.el = e),
            a.a.set(this.elsStaggerItem, {
              opacity: 0,
              x: S.a.isSP ? -30 : -40,
              willChange: "opacity, transform",
            }),
            (this.scrollStart = 0),
            (this.isShowed = !1),
            T.a.$on("reCalcFromTop", this.reCalcFromTop.bind(this)),
            Object(z.onResize)(function () {
              i.isShowed ||
                (i.scrollStart =
                  e.getBoundingClientRect().top +
                  window.pageYOffset -
                  0.95 * window.innerHeight);
            }, !0),
            Object(x.onScroll)(function (t) {
              !i.isShowed && t > i.scrollStart && ((i.isShowed = !0), i.show());
            }, !0);
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                a.a.to(this.elsStaggerItem, {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                  stagger: { each: 0.12 },
                }),
                  a.a.to(this.elsStaggerItem, {
                    x: 0,
                    duration: 1.3,
                    ease: "power4.out",
                    stagger: { each: 0.12 },
                  });
              },
            },
            {
              key: "reCalcFromTop",
              value: function () {
                (this.scrollStart =
                  this.el.getBoundingClientRect().top +
                  window.pageYOffset -
                  0.95 * window.innerHeight),
                  !this.isShowed &&
                    scrollY > this.scrollStart &&
                    ((this.isShowed = !0), this.show());
              },
            },
          ]),
          t
        );
      })(),
      Yt = i(36),
      Vt = i(117),
      Xt = function t(e) {
        Object(u.a)(this, t);
        var i = e.querySelector(".js-line");
        if (i) {
          var s = e.querySelector(".js-trigger") || e,
            a = e.classList.contains("-active"),
            r = new P.a(i, a);
          S.a.isSP ||
            a ||
            (Object(M.a)(s, function () {
              "true" === e.dataset.changeColor &&
                v.a.to(e, {
                  color: "#3455fc",
                  duration: 0.8,
                  ease: "power2.out",
                }),
                r.show();
            }),
            Object(M.b)(s, function () {
              "true" === e.dataset.changeColor &&
                v.a.to(e, {
                  color: "#101112",
                  duration: 0.5,
                  ease: "power2.out",
                }),
                r.hide();
            }));
        }
      },
      Zt = i(61),
      Kt = 0.8,
      Gt = 0.5,
      Wt = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t), (this.el = e);
          var s = this.el.querySelector(".js-trigger") || this.el;
          (this.textFade = new A.a(
            this.el.querySelector(".js-text"),
            void 0,
            "hover"
          )),
            (this.lineMove = new P.a(this.el.querySelector(".js-line"))),
            (this.elBackground = this.el.querySelector(".js-background")),
            v.a.set(this.elBackground, { scaleX: 0 }),
            S.a.isSP ||
              (Object(M.a)(s, function () {
                i.show();
              }),
              Object(M.b)(s, function () {
                i.hide();
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                var t = Kt;
                this.el.classList.remove("-hide"),
                  v.a.to(this.el, {
                    color: "#3455fc",
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                  this.textFade.enter(),
                  this.lineMove.show(),
                  v.a.fromTo(
                    this.elBackground,
                    { scaleX: 0 },
                    { scaleX: 1, duration: t, ease: "power3.out" }
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                var t = Gt;
                this.el.classList.add("-hide"),
                  v.a.to(this.el, {
                    color: "#101112",
                    duration: 0.5,
                    ease: "power2.out",
                  }),
                  this.textFade.leave(),
                  this.lineMove.hide(),
                  v.a.to(this.elBackground, {
                    scaleX: 0,
                    duration: t,
                    ease: "power3.out",
                  });
              },
            },
          ]),
          t
        );
      })(),
      Jt = 0.8,
      Qt = 0.5,
      te = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t), (this.el = e);
          var s = this.el.querySelector(".js-trigger") || this.el;
          (this.textFade = new A.a(
            this.el.querySelector(".js-text"),
            void 0,
            "hover"
          )),
            (this.lineMove = new P.a(
              this.el.querySelector(".js-textbox-line")
            )),
            (this.elBackground = this.el.querySelector(".js-background")),
            v.a.set(this.elBackground, { scaleX: 0 }),
            S.a.isSP ||
              (Object(M.a)(s, function () {
                i.show();
              }),
              Object(M.b)(s, function () {
                i.hide();
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                var t = Jt;
                this.el.classList.remove("-hide"),
                  v.a.to(this.el, {
                    color: "#3455fc",
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                  this.textFade.enter(),
                  this.lineMove.show(),
                  v.a.fromTo(
                    this.elBackground,
                    { scaleX: 0 },
                    { scaleX: 1, duration: t, ease: "power3.out" }
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                var t = Qt;
                this.el.classList.add("-hide"),
                  v.a.to(this.el, {
                    color: "#101112",
                    duration: 0.5,
                    ease: "power2.out",
                  }),
                  this.textFade.leave(),
                  this.lineMove.hide(),
                  v.a.to(this.elBackground, {
                    scaleX: 0,
                    duration: t,
                    ease: "power3.out",
                  });
              },
            },
          ]),
          t
        );
      })(),
      ee = 0.8,
      ie = 0.5,
      se = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t), (this.el = e);
          var s = this.el;
          (this.elIcon = this.el.querySelector(".js-icon")),
            (this.elBackground = this.el.querySelector(".js-background")),
            v.a.set(this.elBackground, { scaleX: 0 }),
            S.a.isSP ||
              (Object(M.a)(s, function () {
                i.show();
              }),
              Object(M.b)(s, function () {
                i.hide();
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                var t = ee;
                this.el.classList.remove("-hide"),
                  v.a.to(this.el, {
                    color: "#3455fc",
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                  v.a.fromTo(
                    this.elIcon,
                    { scale: 1 },
                    { scale: 1.3, duration: t, ease: "power3.out" }
                  ),
                  v.a.fromTo(
                    this.elBackground,
                    { scaleX: 0, transformOrigin: "left" },
                    {
                      scaleX: 1,
                      transformOrigin: "left",
                      duration: t,
                      ease: "power3.out",
                    }
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                var t = ie;
                this.el.classList.add("-hide"),
                  v.a.to(this.el, {
                    color: "#101112",
                    duration: 0.5,
                    ease: "power2.out",
                  }),
                  v.a.to(this.elIcon, {
                    scale: 1,
                    duration: t,
                    ease: "power3.out",
                  }),
                  v.a.to(this.elBackground, {
                    scaleX: 0,
                    transformOrigin: "right",
                    duration: t,
                    ease: "power3.out",
                  });
              },
            },
          ]),
          t
        );
      })(),
      ae = { positionPlay: 1, duration: 0.8, durationHide: 0.5 },
      re = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t), (this.el = e);
          var s = this.el.querySelector(".js-trigger") || this.el;
          (this.lineMove = new P.a(this.el.querySelector(".js-line"))),
            (this.elBackground = this.el.querySelector(".js-background")),
            (this.elVisual = this.el.querySelector(".js-c-visual-hover")),
            (this.flickerEn = new R.a(e.querySelector(".js-en"), {
              isInvert: !0,
            })),
            (this.visual = new Zt.a(this.elVisual));
          var a,
            r = e.querySelector(".js-link");
          (this.flickerLink = new R.b(r, { isInvert: !0 })),
            v.a.set(r, { opacity: 0 });
          var n = !1;
          Object(z.onResize)(function () {
            n ||
              (a =
                e.getBoundingClientRect().top +
                window.pageYOffset -
                window.innerHeight * ae.positionPlay);
          }, !0),
            Object(x.onScroll)(function (t) {
              !n &&
                t > a &&
                ((n = !0),
                i.flickerEn.play(),
                v.a.to(r, {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                  delay: ae.delayLink,
                }));
            }, !0),
            S.a.isSP ||
              (Object(M.a)(s, function () {
                i.show();
              }),
              Object(M.b)(s, function () {
                i.hide();
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                var t = ae.duration;
                this.elVisual.classList.remove("-hide"),
                  this.flickerLink.play(),
                  this.lineMove.show(),
                  this.flickerEn.hover(),
                  v.a.fromTo(
                    this.elBackground,
                    { x: "-100%" },
                    { x: 0, duration: t, ease: "power3.out" }
                  );
              },
            },
            {
              key: "hide",
              value: function () {
                var t = ae.durationHide;
                this.elVisual.classList.add("-hide"),
                  this.lineMove.hide(),
                  v.a.to(this.elBackground, {
                    x: "100%",
                    duration: t,
                    ease: "power3.out",
                  });
              },
            },
          ]),
          t
        );
      })(),
      ne = i(114),
      oe = (function () {
        function t(e) {
          var i = this;
          Object(u.a)(this, t), (this.el = e);
          var s = this.el.querySelector("[data-link-back-trigger]") || this.el;
          (this.flicker = new R.b(
            this.el.querySelector("[data-link-back-text]"),
            { color: "#3455fc" }
          )),
            (this.button = new ne.a(
              e.querySelector("[data-link-back-background]")
            )),
            S.a.isSP ||
              (Object(M.a)(s, function () {
                i.show();
              }),
              Object(M.b)(s, function () {
                i.hide();
              }));
        }
        return (
          Object(h.a)(t, [
            {
              key: "show",
              value: function () {
                this.el.classList.remove("-hide"),
                  this.flicker.play(),
                  this.button.enter();
              },
            },
            {
              key: "hide",
              value: function () {
                this.el.classList.add("-hide"), this.button.leave();
              },
            },
          ]),
          t
        );
      })();
    function le() {
      !(function () {
        var t = document.querySelector(".eir_controller_newstype_pc");
        if (!t) return;
        var e = document.querySelector(".c-subheading-title"),
          i = t.querySelectorAll(".c-tab_naviitem");
        Array.prototype.forEach.call(i, function (t, i) {
          var s = t.querySelector(".c-tab_navilink");
          s.addEventListener("click", function () {
            a.a.delayedCall(0, function () {
              It(), Tt(), (e.firstElementChild.textContent = s.textContent);
            });
          });
        });
      })(),
        (function () {
          var t = document.querySelector(".eir_controller_newstype_sp");
          if (!t) return;
          var e = document.querySelector(".c-subheading-title");
          a.a.delayedCall(0, function () {
            var i = t.querySelector(".c-tab-selectlist");
            i.addEventListener("change", function () {
              It(),
                Tt(),
                (e.firstElementChild.textContent =
                  i.childNodes[i.value].textContent);
            });
          });
        })(),
        (function () {
          var t = document.querySelector(".eir_controller_year");
          if (!t) return;
          t.querySelector(".c-selectbox-select").addEventListener(
            "change",
            function () {
              Tt();
            }
          );
        })();
    }
    l.a.add(document.querySelectorAll(".js-sticky")),
      Object(c.a)(),
      Array.prototype.forEach.call(
        document.querySelectorAll("[data-modal]"),
        function (t, e) {
          var i = new d(t);
          p.instance[i.id] = i;
        }
      ),
      Array.prototype.forEach.call(
        document.querySelectorAll("[data-modal-trigger]"),
        function (t, e) {
          new m(t);
        }
      ),
      a.a.delayedCall(0, function () {
        var t;
        !(function () {
          var t = document.querySelector(".js-t-title");
          if (t) {
            var e,
              i = new P.a(t.querySelector(".js-line")),
              s = new R.a(t.querySelector(".js-en"), {
                isInvert: !0,
                delay: wt,
              }),
              r = t.querySelector(".js-jp");
            r && (e = new R.a(r, { isInvert: !0, delay: wt }));
            var n = t.querySelector(".js-image"),
              o = new St(n, { isAutoStart: !1 });
            o.init(
              n.dataset[S.a.isSP && n.dataset.imgSp ? "imgSp" : "img"],
              n.dataset[S.a.isSP && n.dataset.widthSp ? "widthSp" : "width"],
              n.dataset[S.a.isSP && n.dataset.heightSp ? "heightSp" : "height"],
              1,
              function () {
                o.start(),
                  a.a.delayedCall(1.2, function () {
                    i.show();
                  }),
                  a.a.delayedCall(0.85, function () {
                    s.play(), r && e.play();
                  });
              }
            );
          }
        })(),
          (function () {
            var t = document.querySelector(".js-irmenu-wrapper");
            if (t) {
              var e = document.querySelector(".js-irmenu-wrapper-sp");
              if (e) {
                var i = document.querySelector(".js-irmenu-btn");
                t.offsetHeight > window.innerHeight - 130 &&
                  t.classList.add("-static"),
                  i.addEventListener("click", function () {
                    i.classList.toggle("is-active"),
                      i.classList.contains("is-active")
                        ? (a.a.set(e, { display: "block" }),
                          a.a.to(e, {
                            x: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power3.out",
                            onComplete: function () {},
                          }))
                        : a.a.to(e, {
                            x: 50,
                            opacity: 0,
                            duration: 0.5,
                            ease: "power3.out",
                            onComplete: function () {
                              a.a.set(e, { display: "none" });
                            },
                          }),
                      i.classList.toggle(".is-active");
                  });
              }
            }
          })(),
          0 !== (t = document.querySelectorAll(".js-library_link")).length &&
            Array.prototype.forEach.call(t, At),
          (function () {
            var t = document.querySelector(".js-t-link-related");
            if (t) {
              var e,
                i = t.querySelector(".js-trigger") || t,
                s = new R.a(t.querySelector(".js-en"), { isInvert: !0 }),
                r = t.querySelector(".js-jp");
              r && (e = new R.a(r, { isInvert: !0, delay: Dt }));
              var n = t.querySelector(".js-link"),
                o = new R.b(n, { isInvert: !0 });
              a.a.set(n, { opacity: 0 });
              var l,
                c = t.querySelector(".js-background"),
                _ = t.querySelector(".js-c-visual-hover"),
                u = !1;
              Object(z.onResize)(function () {
                u ||
                  (l =
                    t.getBoundingClientRect().top +
                    window.pageYOffset -
                    window.innerHeight * Bt);
              }, !0),
                Object(x.onScroll)(function (t) {
                  !u &&
                    t > l &&
                    ((u = !0),
                    r && e.play(),
                    s.play(),
                    a.a.to(n, {
                      opacity: 1,
                      duration: 1,
                      ease: "power2.out",
                      delay: Ut,
                    }));
                }, !0),
                Object(M.a)(i, function () {
                  o.play(),
                    s.hover(),
                    _.classList.remove("-hide"),
                    v.a.fromTo(
                      c,
                      { x: "-100%" },
                      { x: 0, duration: Ft, ease: "power3.out" }
                    );
                }),
                Object(M.b)(i, function () {
                  _.classList.add("-hide"),
                    v.a.to(c, { x: "100%", duration: Ht, ease: "power3.out" });
                });
            }
          })(),
          (function () {
            var t = document.querySelectorAll(".js-select");
            0 !== t.length &&
              Array.prototype.forEach.call(t, function (t) {
                new qt(t);
              });
          })();
        var e = function () {
          Tt(),
            (function () {
              var t = document.querySelectorAll(".js-tab");
              0 !== t.length &&
                Array.prototype.forEach.call(t, function (t) {
                  var e = t.hasAttribute("data-js-sort");
                  Rt.push(new Nt(t, e));
                });
            })(),
            le();
        };
        Array.prototype.find.call(
          document.getElementsByTagName("script"),
          function (t) {
            return t.src.endsWith("/eir.js") || t.src.endsWith("/eir_en.js");
          }
        )
          ? window.isCompleteEirDom
            ? e()
            : (window.onCompleteEirDom = e)
          : e(),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-stagger-slide"),
            function (t, e) {
              new zt(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-stagger-rise"),
            function (t, e) {
              new Yt.a(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-rise"),
            function (t, e) {
              new Vt.a(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-hover"),
            function (t, e) {
              new Xt(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll("[data-flicker]"),
            function (t, e) {
              new I(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-accordion"),
            function (t, e) {
              new Y(t);
            }
          ),
          setTimeout(function () {
            Array.prototype.forEach.call(
              document.querySelectorAll(".js-c-visual"),
              function (t, e) {
                new Zt.a(t);
              }
            );
          }, 0),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-portfolio"),
            function (t, e) {
              new Wt(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-recruitInterview"),
            function (t, e) {
              new te(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-solutions"),
            function (t, e) {
              new se(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-company"),
            function (t, e) {
              new re(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll("[data-link-back]"),
            function (t, e) {
              new oe(t);
            }
          ),
          Array.prototype.forEach.call(
            document.querySelectorAll(".js-c-particle-image"),
            function (t, e) {
              new St(t).init(
                t.dataset[S.a.isSP && t.dataset.imgSp ? "imgSp" : "img"],
                Number(
                  t.dataset[S.a.isSP && t.dataset.widthSp ? "widthSp" : "width"]
                ),
                Number(
                  t.dataset[
                    S.a.isSP && t.dataset.heightSp ? "heightSp" : "height"
                  ]
                ),
                Number(
                  t.dataset[
                    S.a.isSP && t.dataset.scaleSp
                      ? "scaleSp"
                      : t.dataset.scale
                      ? "scale"
                      : 1
                  ]
                )
              );
            }
          );
      }),
      a.a.delayedCall(0, function () {
        new s.a({ el: "t-header", components: { THeader: D } });
      }),
      new s.a({ el: "t-menu", components: { TMenu: F } }),
      new s.a({ el: "t-footer", components: { TFooter: W } }),
      k("c-heading", "CHeading", J.a),
      k("c-button", "CButton", H.a),
      k("c-button-double", "CButtonDouble", tt),
      k("c-ir-link", "CIrLink", st),
      window.addEventListener("orientationchange", function () {
        var t = document.querySelector(".spLandscape");
        0 === window.orientation
          ? (t.style.display = "none")
          : (t.style.display = "block");
      });
  },
  88: function (t, e, i) {},
  89: function (t, e, i) {},
  91: function (t, e, i) {},
  92: function (t, e, i) {},
  93: function (t, e, i) {},
  95: function (t, e, i) {},
  96: function (t, e, i) {},
  97: function (t, e, i) {},
});
