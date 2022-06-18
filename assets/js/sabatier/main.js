!(function (t) {
  function s(s) {
    for (
      var i, a, r = s[0], l = s[1], c = s[2], d = 0, p = [];
      d < r.length;
      d++
    )
      (a = r[d]),
        Object.prototype.hasOwnProperty.call(n, a) && n[a] && p.push(n[a][0]),
        (n[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    for (u && u(s); p.length; ) p.shift()();
    return o.push.apply(o, c || []), e();
  }
  function e() {
    for (var t, s = 0; s < o.length; s++) {
      for (var e = o[s], i = !0, r = 1; r < e.length; r++) {
        var l = e[r];
        0 !== n[l] && (i = !1);
      }
      i && (o.splice(s--, 1), (t = a((a.s = e[0]))));
    }
    return t;
  }
  var i = {},
    n = { 5: 0 },
    o = [];
  function a(s) {
    if (i[s]) return i[s].exports;
    var e = (i[s] = { i: s, l: !1, exports: {} });
    return t[s].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = t),
    (a.c = i),
    (a.d = function (t, s, e) {
      a.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: e });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, s) {
      if ((1 & s && (t = a(t)), 8 & s)) return t;
      if (4 & s && "object" == typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (a.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            e,
            i,
            function (s) {
              return t[s];
            }.bind(null, i)
          );
      return e;
    }),
    (a.n = function (t) {
      var s =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(s, "a", s), s;
    }),
    (a.o = function (t, s) {
      return Object.prototype.hasOwnProperty.call(t, s);
    }),
    (a.p = "");
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    l = r.push.bind(r);
  (r.push = s), (r = r.slice());
  for (var c = 0; c < r.length; c++) s(r[c]);
  var u = l;
  o.push([237, 0]), e();
})({
  108: function (t, s, e) {},
  109: function (t, s, e) {},
  110: function (t, s, e) {},
  111: function (t, s, e) {},
  112: function (t, s, e) {},
  225: function (t, s, e) {
    "use strict";
    var i = e(108);
    e.n(i).a;
  },
  226: function (t, s, e) {
    "use strict";
    var i = e(109);
    e.n(i).a;
  },
  227: function (t, s, e) {
    "use strict";
    var i = e(110);
    e.n(i).a;
  },
  228: function (t, s, e) {
    "use strict";
    var i = e(111);
    e.n(i).a;
  },
  229: function (t, s, e) {
    "use strict";
    var i = e(112);
    e.n(i).a;
  },
  237: function (t, s, e) {
    "use strict";
    e.r(s);
    var i = e(15),
      n = e(0),
      o = e(5),
      a = e(10),
      r = e(6),
      l = (e(136), e(62)),
      c = e(37),
      u = e(118),
      d = e(119),
      p = e(1),
      h = e(26),
      m = e(8),
      _ = e(3),
      v = e(17),
      f = e(16),
      g = e(12),
      C = (e(56), e(53)),
      y = e.n(C),
      b = e(63),
      w = {
        components: { CHeading: v.a, CButton: f.a, CSvg: g.a, CCircle: b.a },
        props: {
          item: { type: Object, required: !0 },
          isActive: { type: Boolean, default: !1 },
          index: { type: Number, default: 0 },
          realIndex: { type: Number, default: 0 },
        },
        data: function () {
          return { valueFront: 0, valueProgress: 0 };
        },
        computed: {
          diameter: function () {
            return this.$media.isSP ? 520 : 200;
          },
        },
        watch: {
          isActive: function (t) {
            t ? this.show() : this.hide();
          },
        },
        mounted: function () {
          var t = this;
          (this.elSolutionsItemInner = this.$el.querySelector(
            ".js-solutions_item_inner"
          )),
            this.$refs.icon.addEventListener("click", function (s) {
              "touch" !== !y.a.ask("intent") &&
                (t.isActive || (s.preventDefault(), t.$emit("touch", t.index)));
            });
        },
        methods: {
          show: function () {
            p.a.to(this.elSolutionsItemInner, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }),
              n.a.set(this.$refs.icon, { scaleX: 1 }),
              n.a.set(this, { valueProgress: 0 }),
              p.a.fromTo(
                this,
                { valueFront: 0 },
                { valueFront: 1, duration: 1.5, ease: "power3.out" }
              );
          },
          hide: function () {
            p.a.to(this.elSolutionsItemInner, {
              opacity: 0.15,
              duration: 0.5,
              ease: "power2.out",
            }),
              n.a.set(this.$refs.icon, { scaleX: 1 }),
              p.a.to(this, {
                valueProgress: 1,
                duration: 0.7,
                ease: "power3.out",
              });
          },
        },
      },
      j = (e(225), e(7)),
      S = Object(j.a)(
        w,
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "li",
            {
              staticClass: "c-solutions-item",
              class: { "-active": t.isActive },
            },
            [
              e(
                "div",
                {
                  staticClass: "c-solutions-item_inner js-solutions_item_inner",
                },
                [
                  e(
                    "a",
                    {
                      ref: "icon",
                      staticClass: "c-solutions-item_icon",
                      attrs: { href: "/en/solutions/#" + t.item.link },
                    },
                    [
                      e("img", {
                        staticClass: "c-solutions-item_icon_svg _pc",
                        attrs: {
                          src: "/assets/img/top/" + t.item.svg + ".jpg",
                          alt: "",
                          "data-loading": "lazy",
                        },
                      }),
                      e("img", {
                        staticClass: "c-solutions-item_icon_svg _sp",
                        attrs: {
                          src: "/assets/img/top/" + t.item.svg + "_sp.jpg",
                          alt: "",
                          "data-loading": "lazy",
                        },
                      }),
                      e("CCircle", {
                        staticClass: "c-solutions-item_icon_circle",
                        attrs: {
                          diameter: t.diameter,
                          "color-back": "#0af0f2",
                          "color-front": "#3455fc",
                          "is-active": t.isActive,
                          "value-back": 1,
                          "value-front": t.valueFront,
                          "value-progress": t.valueProgress,
                        },
                      }),
                    ],
                    1
                  ),
                  e("h3", { staticClass: "c-solutions-item_name" }, [
                    t._v(t._s(t.item.name)),
                  ]),
                  e("p", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.$media.isSP,
                        expression: "$media.isSP",
                      },
                    ],
                    staticClass: "c-solutions-item_copy",
                    domProps: { innerHTML: t._s(t.item.copy) },
                  }),
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
      ).exports,
      O = { listEls: null },
      x = {
        components: {
          CHeading: v.a,
          CButton: f.a,
          CSvg: g.a,
          CSolutionsItem: S,
        },
        data: function () {
          return {
            list: [
              {
                link: "delivery",
                svg: "pict_1",
                name: "DELIVERY",
                copy: "Fast and safe delivery without the need for  an operator",
                background: "b-top_solution_01.png",
              },
              {
                link: "inspection",
                svg: "pict_2",
                name: "INSPECTION",
                copy: "Autonomous flight for close visual inspection under bridges and indoors",
                background: "b-top_solution_02.png",
              },
              {
                link: "disaster-relief",
                svg: "pict_3",
                name: "DISASTER RELIEF",
                copy: "Immediately surveying  in the event of  a disaster ",
                background: "b-top_solution_03.png",
              },
              {
                link: "emerging-usecase",
                svg: "pict_4",
                name: "EMERGING USE-CASE",
                copy: "Counting and mapping location of goods inside warehouses",
                background: "b-top_solution_04.png",
              },
            ],
            indexCurrentItem: -1,
            indexCurrent: -1,
            indexPrev: -1,
            swiper: null,
            isLoad: !1,
            isStart: !1,
          };
        },
        computed: {
          itemCurrent: function () {
            return O.listEls[this.indexCurrent];
          },
          itemPrev: function () {
            return O.listEls[this.indexPrev];
          },
          background: function () {
            return this.list[this.indexCurrent]
              ? "/assets/img/top/".concat(
                  this.list[this.indexCurrent].background
                )
              : "/assets/img/top/".concat(this.list[0].background);
          },
        },
        watch: {
          isLoad: function (t) {
            t && (this.isStart && this.show(), (this.isLoad = !1));
          },
        },
        mounted: function () {
          this.$media.isSP ? this.initSp() : this.initPc();
        },
        methods: {
          initPc: function () {
            var t = this,
              s = this.$el.querySelector(".js-solutions_list"),
              e = s.querySelectorAll(".js-solutions_item"),
              i = this.$el.querySelector(".js-solutions_link");
            this.elSolutionsBackground = this.$el.querySelector(
              ".js-solutions_background"
            );
            var r = this.$el.querySelector(".js-solutions_background"),
              l = window.innerWidth,
              c = window.innerHeight;
            document.addEventListener("mousemove", function (t) {
              p.a.to(r, {
                rotateX: (-t.clientY + c / 2) / 50,
                rotateY: (t.clientX - l / 2) / 50,
              });
            });
            var u = [e, i];
            (O.listEls = Array.prototype.map.call(
              this.$el.querySelectorAll(".js-solutions_copy_item"),
              function (t, s) {
                var e = t.querySelector(".js-solutions_copy_line"),
                  i = t.querySelector(".js-solutions_copy_number"),
                  o = t.querySelector(".js-solutions_copy_text"),
                  a = new m.a(o, { amount: 0.6 });
                return (
                  n.a.set(e, { scaleY: 0, willChange: "transform" }),
                  n.a.set([i, o], { opacity: 0, willChange: "opacity" }),
                  { el: t, elLine: e, elNumber: i, elText: o, flickerCopy: a }
                );
              }
            )),
              n.a.set([this.elSolutionsBackground, u], {
                willChange: "transform, opacity",
              });
            var d,
              h = n.a.timeline({
                paused: !0,
                onComplete: function () {
                  t.isStart = !0;
                },
              });
            h.add([
              n.a.fromTo(
                this.elSolutionsBackground,
                { y: 30 },
                { y: 0, duration: 1.2, ease: "power2.out" }
              ),
              n.a.fromTo(
                this.elSolutionsBackground,
                { opacity: 0 },
                { opacity: 1, duration: 1.2, ease: "power1.out" }
              ),
            ]),
              h.add(
                [
                  n.a.fromTo(
                    u,
                    { y: 30 },
                    { y: 0, duration: 1.2, ease: "power2.out", stagger: 0.2 }
                  ),
                  n.a.fromTo(
                    u,
                    { opacity: 0 },
                    {
                      opacity: 1,
                      duration: 1.2,
                      ease: "power1.out",
                      stagger: 0.2,
                    }
                  ),
                ],
                "<0.5"
              ),
              h.add(function () {
                t.change(0), t.start();
              }, "-=1.4"),
              this.elSolutionsBackground.addEventListener("load", function () {
                t.isLoad = !0;
              });
            var v = !1;
            Object(a.onResize)(function () {
              v ||
                (d =
                  s.getBoundingClientRect().top +
                  window.pageYOffset -
                  0.8 * window.innerHeight);
            }, !0),
              Object(o.onScroll)(function (t) {
                !v && t > d && ((v = !0), h.play());
              }, !0),
              Array.prototype.forEach.call(e, function (s, e) {
                Object(_.a)(s, function () {
                  t.isStart && t.change(e);
                });
              });
          },
          initSp: function () {
            this.swiper = new Swiper(".swiper-container", {
              loop: !0,
              loopedSlides: this.list.length,
              slidesPerView: "auto",
              centeredSlides: !0,
              spaceBetween: ((65 / 750) * (2 * window.innerWidth)) / 2,
              pagination: {
                el: ".c-solutions_pagination",
                type: "custom",
                renderCustom: function (t, s, e) {
                  return '<span class="swiper-pagination-current">'
                    .concat(
                      Object(h.a)(s),
                      '</span> / <span class="swiper-pagination-total">'
                    )
                    .concat(Object(h.a)(e), "</span>");
                },
              },
            });
          },
          change: function (t) {
            var s = this;
            t !== this.indexCurrent &&
              (this.indexCurrent < 0
                ? (this.indexCurrent = this.indexCurrentItem = t)
                : ((this.indexPrev = this.indexCurrent),
                  (this.indexCurrentItem = t),
                  this.hide(function () {
                    s.indexCurrent = t;
                  })));
          },
          start: function () {
            this.itemCurrent.el.classList.add("-current"),
              p.a.fromTo(
                this.itemCurrent.elLine,
                { scaleY: 0, transformOrigin: "bottom" },
                { scaleY: 1, duration: 1.2, ease: "power2.out" }
              ),
              p.a.to([this.itemCurrent.elNumber, this.itemCurrent.elJa], {
                opacity: 1,
                duration: 1.2,
                ease: "power1.out",
              }),
              this.itemCurrent.flickerCopy.play();
          },
          show: function () {
            this.itemCurrent.el.classList.add("-current"),
              p.a.fromTo(
                this.itemCurrent.elLine,
                { scaleY: 0, transformOrigin: "bottom" },
                { scaleY: 1, duration: 1.2, ease: "power2.out" }
              ),
              p.a.fromTo(
                this.elSolutionsBackground,
                { x: -45, rotateY: 7, scale: 1.01 },
                {
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                  duration: 1.2,
                  ease: "power2.out",
                }
              ),
              p.a.to(
                [
                  this.itemCurrent.elNumber,
                  this.itemCurrent.elJa,
                  this.elSolutionsBackground,
                ],
                { opacity: 1, duration: 1.2, ease: "power1.out" }
              ),
              this.itemCurrent.flickerCopy.play();
          },
          hide: function (t) {
            var s = this;
            p.a.fromTo(
              this.itemPrev.elLine,
              { transformOrigin: "top" },
              { scaleY: 0, duration: 0.25, ease: "power3.out" }
            ),
              p.a.to(this.elSolutionsBackground, {
                x: 45,
                rotateY: -7,
                scale: 1.01,
                duration: 1.2,
                ease: "power2.out",
              }),
              p.a.to(
                [
                  this.itemPrev.elNumber,
                  this.itemPrev.elText,
                  this.elSolutionsBackground,
                ],
                {
                  opacity: 0,
                  duration: 0.25,
                  ease: "power1.out",
                  onComplete: function () {
                    s.itemPrev.el.classList.remove("-current"), t && t();
                  },
                }
              );
          },
          onTouch: function (t) {
            this.isStart && this.change(t);
          },
        },
      },
      k =
        (e(226),
        Object(j.a)(
          x,
          function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("section", { staticClass: "c-solutions" }, [
              e(
                "div",
                { staticClass: "c-solutions_content" },
                [
                  e("CHeading", {
                    staticClass: "c-solutions_heading",
                    attrs: { en: "OUR SOLUTIONS", ja: "" },
                  }),
                  e("div", { staticClass: "_pc" }, [
                    e(
                      "ul",
                      { staticClass: "c-solutions_list js-solutions_list" },
                      t._l(t.list, function (s, i) {
                        return e("CSolutionsItem", {
                          key: s.name,
                          staticClass: "c-solutions_item js-solutions_item",
                          attrs: {
                            item: s,
                            "is-active": t.indexCurrentItem === i,
                          },
                          on: {
                            touch: function (s) {
                              return t.onTouch(i);
                            },
                          },
                        });
                      }),
                      1
                    ),
                    t._m(0),
                    t._m(1),
                    t._m(2),
                    t._m(3),
                  ]),
                  e(
                    "div",
                    { staticClass: "c-solutions_wrapper swiper-container _sp" },
                    [
                      e(
                        "ul",
                        {
                          staticClass:
                            "c-solutions_list js-solutions_list swiper-wrapper",
                        },
                        t._l(t.list, function (s, i) {
                          return e("CSolutionsItem", {
                            key: s.name,
                            staticClass:
                              "c-solutions_item js-solutions_item swiper-slide",
                            attrs: {
                              item: s,
                              "is-active": t.swiper && t.swiper.realIndex === i,
                              index: i,
                              "real-index": t.swiper && t.swiper.realIndex,
                            },
                          });
                        }),
                        1
                      ),
                      e("div", { staticClass: "c-solutions_pagination" }),
                    ]
                  ),
                  e(
                    "div",
                    { staticClass: "c-solutions_link" },
                    [
                      e(
                        "CButton",
                        {
                          staticClass: "js-solutions_link",
                          attrs: { to: "/en/solutions/", "is-manual": !0 },
                        },
                        [t._v("OUR SOLUTIONS")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.$media.isSP,
                    expression: "!$media.isSP",
                  },
                ],
                staticClass: "c-solutions_background js-solutions_background",
                attrs: {
                  src: t._f("fullPath")(t.background),
                  alt: "",
                  width: "1400",
                  height: "845",
                },
              }),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "c-solutions_copy js-solutions_copy_item" },
                [
                  s("div", { staticClass: "c-solutions_copy-number" }, [
                    s("div", { staticClass: "js-solutions_copy_number" }, [
                      this._v("01"),
                    ]),
                    s("div", {
                      staticClass:
                        "c-solutions_copy-line js-solutions_copy_line",
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "c-solutions_copy-text js-solutions_copy_text",
                    },
                    [
                      this._v("Fast and safe delivery"),
                      s("br"),
                      this._v("without the need for"),
                      s("br"),
                      this._v("an operator"),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "c-solutions_copy js-solutions_copy_item" },
                [
                  s("div", { staticClass: "c-solutions_copy-number" }, [
                    s("div", { staticClass: "js-solutions_copy_number" }, [
                      this._v("02"),
                    ]),
                    s("div", {
                      staticClass:
                        "c-solutions_copy-line js-solutions_copy_line",
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "c-solutions_copy-text js-solutions_copy_text",
                    },
                    [
                      this._v("Autonomous flight for"),
                      s("br"),
                      this._v("close visual inspection"),
                      s("br"),
                      this._v("under bridges and indoors"),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "c-solutions_copy js-solutions_copy_item" },
                [
                  s("div", { staticClass: "c-solutions_copy-number" }, [
                    s("div", { staticClass: "js-solutions_copy_number" }, [
                      this._v("03"),
                    ]),
                    s("div", {
                      staticClass:
                        "c-solutions_copy-line js-solutions_copy_line",
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "c-solutions_copy-text js-solutions_copy_text",
                    },
                    [
                      this._v("Immediately surveying"),
                      s("br"),
                      this._v("in the event of"),
                      s("br"),
                      this._v("a disaster "),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "c-solutions_copy js-solutions_copy_item" },
                [
                  s("div", { staticClass: "c-solutions_copy-number" }, [
                    s("div", { staticClass: "js-solutions_copy_number" }, [
                      this._v("04"),
                    ]),
                    s("div", {
                      staticClass:
                        "c-solutions_copy-line js-solutions_copy_line",
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "c-solutions_copy-text js-solutions_copy_text",
                    },
                    [
                      this._v("Counting and mapping"),
                      s("br"),
                      this._v("location of goods inside"),
                      s("br"),
                      this._v("warehouses"),
                    ]
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      E = e(22),
      $ = e(24),
      P = e(120),
      I = 0.7,
      L = { listEls: [] },
      T = 0,
      B = {
        components: {
          CHeading: v.a,
          CButton: f.a,
          CSvg: g.a,
          CVisual: $.a,
          CBusinessItem: P.a,
        },
        data: function () {
          return {
            list: [
              {
                image: this.$getFullPath(
                  "/assets/img/top/b-top_achievements_img.jpg"
                ),
                title: "OUR ACHIEVEMENTS",
                copy: "ACSL achievements - leader in autonomous technology",
                description:
                  "ACSL has tackled various social issues by implementing autonomous technology into society.",
                link: "/en/business/#achievements",
              },
              {
                image: this.$getFullPath(
                  "/assets/img/top/b-top_values_img.jpg"
                ),
                title: "OUR VALUES",
                copy: "Business models for social implementation",
                description:
                  "We set objectives and challenges, and comprehensively examine the drones and peripheral technologies needed to resolve these issues.",
                link: "/en/business/#values",
              },
              {
                image: this.$getFullPath(
                  "/assets/img/top/b-top_capability_img.jpg"
                ),
                title: "OUR CAPABILITY",
                copy: "ACSL's ability to solve issues",
                description:
                  'We will introduce the technology of ACSL and its core autonomous control systems, the "cerebrum" and "cerebellum".',
                link: "/en/business/#capability",
              },
            ],
            indexCurrent: -1,
          };
        },
        computed: {
          item: function () {
            return this.list[this.indexCurrent];
          },
          number: function () {
            return Object(h.a)(this.indexCurrent + 1);
          },
          itemCurrent: function () {
            return L.listEls[this.indexCurrent];
          },
        },
        mounted: function () {
          var t = this;
          (this.elsProgress = this.$el.querySelectorAll(".js-progress")),
            n.a.delayedCall(0, function () {
              T =
                t.$refs.content.getBoundingClientRect().top +
                window.pageYOffset -
                window.innerHeight * I;
            });
          var s = !1;
          Object(o.onScroll)(function (e) {
            !s && e > T && ((s = !0), t.change(0));
          }, !0);
        },
        methods: {
          change: function () {
            var t = this,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Object(E.a)(this.indexCurrent + 1, this.list.length);
            this.timer && this.timer.kill(),
              (this.indexCurrent = s),
              this.tween && this.tween.kill(),
              (this.tween = p.a.fromTo(
                this.elsProgress[this.indexCurrent],
                { scaleY: 0 },
                { scaleY: 1, duration: 5, ease: "power0" }
              )),
              (this.timer = n.a.delayedCall(5, function () {
                t.change();
              }));
          },
          prev: function () {
            this.change(Object(E.a)(this.indexCurrent - 1, this.list.length));
          },
          next: function () {
            this.change();
          },
          padStartWithZero2: h.a,
        },
      },
      A =
        (e(227),
        Object(j.a)(
          B,
          function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e(
              "section",
              { staticClass: "c-business" },
              [
                e("CHeading", {
                  staticClass: "c-business_heading",
                  attrs: { en: "OUR BUSINESS", ja: "" },
                }),
                e(
                  "div",
                  { ref: "content", staticClass: "c-business_content" },
                  [
                    t._l(t.list, function (s, i) {
                      return e("CBusinessItem", {
                        key: s.title,
                        staticClass: "c-business_item",
                        class: { "-current": t.indexCurrent === i },
                        attrs: {
                          item: s,
                          index: i,
                          "is-active": i === t.indexCurrent,
                        },
                      });
                    }),
                    e(
                      "div",
                      { staticClass: "c-business_pagination" },
                      t._l(t.list, function (s, i) {
                        return e(
                          "a",
                          {
                            key: s.title,
                            staticClass: "c-business_pagination_item",
                            class: { "-active": t.indexCurrent === i },
                            on: {
                              click: function (s) {
                                return t.change(i);
                              },
                            },
                          },
                          [
                            t._m(0, !0),
                            e(
                              "div",
                              { staticClass: "c-business_pagination_number" },
                              [t._v(t._s(t.padStartWithZero2(i + 1)))]
                            ),
                            e(
                              "div",
                              { staticClass: "c-business_pagination_title" },
                              [t._v(t._s(s.title))]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    e("div", { staticClass: "c-business_nav" }, [
                      e(
                        "a",
                        {
                          staticClass: "c-business_nav-trigger -prev",
                          on: { click: t.prev },
                        },
                        [
                          e("CSvg", {
                            staticClass: "c-business_nav-icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                      e("div", { staticClass: "c-business_nav-separater" }),
                      e(
                        "a",
                        {
                          staticClass: "c-business_nav-trigger -next",
                          on: { click: t.next },
                        },
                        [
                          e("CSvg", {
                            staticClass: "c-business_nav-icon",
                            attrs: { name: "b-icon_arrow", alt: "" },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ],
                  2
                ),
                e(
                  "CButton",
                  {
                    staticClass: "c-business_link",
                    attrs: { to: "/en/business/", size: "large" },
                  },
                  [t._v("OUR BUSINESS")]
                ),
              ],
              1
            );
          },
          [
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "div",
                { staticClass: "c-business_pagination_progress" },
                [
                  s("div", {
                    staticClass:
                      "c-business_pagination_progress-bar js-progress",
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      R = e(29),
      Y = {
        components: { CHeading: v.a, CButton: f.a, CVisual: $.a },
        mounted: function () {
          var t,
            s = this,
            e = !1;
          Object(a.onResize)(function () {
            e ||
              (t =
                s.$refs.visuals.getBoundingClientRect().top +
                window.pageYOffset -
                1 * window.innerHeight);
          }, !0),
            Object(o.onScroll)(function (i) {
              !e &&
                i > t &&
                ((e = !0),
                [s.$refs.visual1, s.$refs.visual2, s.$refs.visual3].forEach(
                  function (t, s) {
                    n.a.delayedCall(0.15 * s, function () {
                      t.show();
                    });
                  }
                ));
            }, !0);
          var i = 0.1,
            r = 0.3,
            l = 0.2,
            c = 0.05,
            u = 0.1,
            d = 0.15;
          new R.a(this.$refs.visual1.$el, this.$refs.visuals, i, c),
            new R.a(this.$refs.visual2.$el, this.$refs.visuals, r, u),
            new R.a(this.$refs.visual3.$el, this.$refs.visuals, l, d);
        },
      },
      N =
        (e(228),
        Object(j.a)(
          Y,
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s("section", { staticClass: "c-recruit" }, [
              s(
                "div",
                { staticClass: "c-recruit_content" },
                [
                  s("CHeading", {
                    attrs: { en: "RECRUIT", ja: "", position: "outside" },
                  }),
                  this._m(0),
                  s(
                    "CButton",
                    {
                      staticClass: "c-recruit_link",
                      attrs: { to: "/en/recruit/" },
                    },
                    [this._v("READ MORE")]
                  ),
                ],
                1
              ),
              s(
                "div",
                { ref: "visuals", staticClass: "c-recruit_visuals" },
                [
                  s("div", { staticClass: "c-recruit_join" }, [
                    this._v("JOIN OUR TEAM"),
                  ]),
                  s("CVisual", {
                    ref: "visual1",
                    staticClass: "c-recruit_visual -no-1",
                    attrs: {
                      src: this._f("fullPath")(
                        "/assets/img/top/b-top_recruit_img_1.jpg"
                      ),
                      "is-manual": !0,
                    },
                  }),
                  s("CVisual", {
                    ref: "visual2",
                    staticClass: "c-recruit_visual -no-2",
                    attrs: {
                      src: this._f("fullPath")(
                        "/assets/img/top/b-top_recruit_img_2.jpg"
                      ),
                      "is-manual": !0,
                    },
                  }),
                  s("CVisual", {
                    ref: "visual3",
                    staticClass: "c-recruit_visual -no-3",
                    attrs: {
                      src: this._f("fullPath")(
                        "/assets/img/top/b-top_recruit_img_3.jpg"
                      ),
                      "is-manual": !0,
                    },
                  }),
                ],
                1
              ),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("p", { staticClass: "c-recruit_description" }, [
                this._v("ACSL is actively recruiting"),
                s("br"),
                this._v("new graduates and interns"),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      U = e(11),
      H = {
        components: { CSvg: g.a, CVisual: $.a },
        mounted: function () {
          var t = 0.4,
            s = 0.8,
            e = this.$el.querySelector(".js-trigger") || this.$el,
            i = e.querySelectorAll(".js-catch"),
            a = new m.a(i, { isInvert: !0 }),
            r = e.querySelector(".js-link"),
            l = new m.b(r, { isInvert: !0 });
          n.a.set(r, { opacity: 0 });
          var c = new U.a(e.querySelector(".js-line")),
            u = new m.a(e.querySelector(".js-title"), { isInvert: !0 }),
            d =
              this.$el.getBoundingClientRect().top +
              window.pageYOffset -
              window.innerHeight +
              window.innerHeight * t,
            p = !1,
            h = !1;
          Object(o.onScroll)(function (t) {
            !p &&
              t > d &&
              ((p = !0),
              a.play(),
              c.show(),
              u.play(function () {
                h = !0;
              }),
              n.a.to(r, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: s,
              }));
          }, !0),
            Object(_.a)(e, function () {
              h && (a.hover(), l.play());
            });
        },
      },
      q =
        (e(229),
        Object(j.a)(
          H,
          function () {
            var t = this.$createElement,
              s = this._self._c || t;
            return s("div", { staticClass: "c-vision" }, [
              s(
                "a",
                {
                  staticClass: "c-vision_inner js-trigger",
                  attrs: { href: "/en/brand/", target: "_blank" },
                },
                [
                  s("div", { staticClass: "c-vision_content" }, [
                    this._m(0),
                    this._m(1),
                    s("p", { staticClass: "c-vision_catch -sub js-catch" }, [
                      this._v("AUTONOMOUS CONTROL"),
                    ]),
                    s("div", { staticClass: "c-vision_link" }, [
                      s(
                        "div",
                        { staticClass: "js-link" },
                        [
                          this._v("READ MORE"),
                          s("CSvg", {
                            staticClass: "c-vision_link_icon",
                            attrs: { name: "b-icon_blank", alt: "" },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  s("CVisual", {
                    staticClass: "_pc c-vision_background",
                    attrs: {
                      src: this._f("fullPath")(
                        "/assets/img/top/b-banner_vision.jpg"
                      ),
                    },
                  }),
                  s("CVisual", {
                    staticClass: "_sp c-vision_background",
                    attrs: {
                      src: this._f("fullPath")(
                        "/assets/img/top/b-banner_vision_sp.jpg"
                      ),
                    },
                  }),
                ],
                1
              ),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("div", { staticClass: "c-vision_title" }, [
                s("div", { staticClass: "c-vision_title-line js-line" }),
                s("div", { staticClass: "js-title" }, [this._v("BRAND SITE")]),
              ]);
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s("p", { staticClass: "c-vision_catch js-catch" }, [
                this._v("PATHWAY TO "),
                s("br", { staticClass: "_sp" }),
                this._v("THE FUTURE"),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports),
      F = {
        duration: 1,
        durationOut: 0.8,
        durationOutFade: 0.48,
        yContents: 200,
      },
      M = !0,
      V = !0,
      D = !1,
      W = document.getElementById("js-kv"),
      z = document.getElementById("js-contents"),
      J = document.getElementById("js-contents_top");
    function X() {
      (V = !0),
        (M = !1),
        c.c(function () {
          r.a.$emit("pauseKv");
        }),
        n.a.fromTo(
          J,
          { y: F.yContents },
          { y: 0, duration: F.duration, ease: "power4.out" }
        ),
        n.a.fromTo(
          J,
          { opacity: 0 },
          { opacity: 1, duration: F.duration, ease: "power2.out" }
        ),
        n.a.delayedCall(0.2 * F.duration, function () {
          r.a.$emit("showHeader");
        }),
        n.a.delayedCall(0.8 * F.duration, function () {
          document.documentElement.classList.remove("-full"),
            window.pageYOffset <= 1 && n.a.set(window, { scrollTo: { y: 2 } }),
            n.a.set(W, { display: "none" }),
            (V = !1);
        });
    }
    function K() {
      (V = !0),
        r.a.$emit("hideHeader"),
        document.documentElement.classList.add("-full"),
        c.a(function () {
          r.a.$emit("playKv"), (M = !0), (V = !1);
        }),
        n.a.set(W, { display: "flex" }),
        n.a.to(J, {
          opacity: 0,
          duration: F.durationOutFade,
          ease: "power2.out",
        });
    }
    function G() {
      D ||
        ((D = !0),
        new i.a({ el: "c-solutions", components: { CSolutions: k } }),
        new i.a({ el: "c-business", components: { CBusiness: A } }),
        new i.a({ el: "c-recruit", components: { CRecruit: N } }),
        new i.a({ el: "c-vision", components: { CVision: q } }),
        n.a.delayedCall(0, function () {
          u.a(), Object(a.emitResize)();
        }));
    }
    new i.a({
      el: "p-index-kv-pagination",
      components: { PIndexKvPagination: d.a },
    }),
      c.b(),
      window.pageYOffset > 0
        ? ((V = !1),
          (M = !1),
          G(),
          W.classList.add("-show"),
          z.classList.add("-show"),
          c.c(void 0, !0),
          n.a.set(W, { display: "none" }),
          n.a.set(J, {
            opacity: 1,
            onComplete: function () {
              document.documentElement.classList.remove("-full");
            },
          }),
          Object(o.emitScroll)())
        : document.documentElement.classList.add("-full"),
      r.a.$on("startSlider", function (t) {
        (V = !1), G(), W.classList.add("-show"), z.classList.add("-show");
      }),
      new l.a(W, function (t) {
        V ||
          window.obgl.isOpenModal ||
          (M && "Down" === t
            ? X()
            : !M && window.pageYOffset <= 1 && "Up" === t && K());
      }),
      Object(o.onScroll)(function (t) {
        V ||
          window.obgl.isOpenModal ||
          (M && t > 1 ? X() : !M && t <= 1 && K());
      });
  },
});
