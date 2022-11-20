(()=>{
  var e, a, s, i = {
      4907: (e,a,s)=>{
          "use strict";
          s.d(a, {
              F8: ()=>h,
              Kf: ()=>x,
              lr: ()=>f
          });
          var i = s(4942)
            , t = (s(7294),
          s(6066))
            , n = s(5697)
            , r = s(7762)
            , o = s.n(r)
            , l = s(518)
            , c = s.n(l)
            , d = s(5893);
          function m(e, a) {
              var s = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  a && (i = i.filter((function(a) {
                      return Object.getOwnPropertyDescriptor(e, a).enumerable
                  }
                  ))),
                  s.push.apply(s, i)
              }
              return s
          }
          function p(e) {
              for (var a = 1; a < arguments.length; a++) {
                  var s = null != arguments[a] ? arguments[a] : {};
                  a % 2 ? m(Object(s), !0).forEach((function(a) {
                      (0,
                      i.Z)(e, a, s[a])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : m(Object(s)).forEach((function(a) {
                      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                  }
                  ))
              }
              return e
          }
          var g = function(e) {
              e.target.style.filter = "brightness(200%)"
          }
            , u = function(e) {
              e.target.style.filter = "brightness(100%)"
          };
          function h(e) {
              var a = e.className
                , s = e.style
                , i = e.onClick;
              return (0,
              d.jsx)("div", {
                  onMouseOver: g,
                  onMouseLeave: u,
                  className: a,
                  style: p(p({}, s), {}, {
                      display: "block",
                      backgroundImage: "url('".concat(c(), "')"),
                      backgroundSize: "100% 100%"
                  }),
                  onClick: i
              })
          }
          function x(e) {
              var a = e.className
                , s = e.style
                , i = e.onClick;
              return (0,
              d.jsx)("div", {
                  onMouseOver: g,
                  onMouseLeave: u,
                  className: a,
                  style: p(p({}, s), {}, {
                      display: "block",
                      backgroundImage: "url('".concat(o(), "')"),
                      backgroundSize: "100% 100%"
                  }),
                  onClick: i
              })
          }
          var f = function(e) {
              return (0,
              d.jsx)(d.Fragment, {
                  children: (0,
                  d.jsx)(t.Z, p(p({}, e.settings), {}, {
                      children: e.items
                  }))
              })
          };
          f.propTypes = {
              items: n.array.isRequired,
              settings: n.object.isRequired
          }
      }
      ,
      5591: (e,a,s)=>{
          "use strict";
          s.d(a, {
              w: ()=>p
          });
          var i, t = s(8152), n = s(168), r = s(7294), o = s(540), l = function(e) {
              return ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200", "1296", "1400", "1600", "1800", "2000", "2200", "2400", "2592"].map((function(a) {
                  return "".concat(e, "?width=").concat(a, " ").concat(a, "w")
              }
              )).join(", ")
          }, c = s(5893), d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII", m = o.ZP.img(i || (i = (0,
          n.Z)(["\n  display: block;\n  // Add a smooth animation on loading\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  // I use utilitary classes instead of props to avoid style regenerating\n  &.loaded:not(.has-error) {\n    animation: loaded 100ms ease-in-out;\n  }\n  &.has-error {\n    // fallback to placeholder image on error\n    content: url(", ");\n  }\n"])), d), p = function(e) {
              var a = e.title
                , s = e.dataSrc
                , i = e.dataSrcset
                , n = e.alt
                , o = void 0 === n ? "placeholder" : n
                , p = e.fitSize
                , g = e.thumbnail
                , u = e.width
                , h = e.height
                , x = e.style
                , f = e.className
                , b = e.onClick
                , v = r.useState(d)
                , j = (0,
              t.Z)(v, 1)[0];
              return (0,
              c.jsx)(m, {
                  title: a,
                  className: "".concat(null != f ? f : "", " img lazy fade-in"),
                  src: j,
                  "data-src": p ? l(s) : s,
                  "data-srcset": p ? l(i) : i,
                  alt: o,
                  onLoad: function(e) {
                      e.target.classList.add("loaded")
                  },
                  onError: function(e) {
                      e.target.classList.add("has-error")
                  },
                  thumbnail: g,
                  width: u,
                  height: h,
                  style: x,
                  onClick: b,
                  loading: "lazy"
              }, a)
          }
      }
      ,
      3244: (e,a,s)=>{
          "use strict";
          s.d(a, {
              i: ()=>l
          });
          var i = s(8152)
            , t = s(7294)
            , n = s(5172)
            , r = s(9872)
            , o = s(5893);
          var l = function(e) {
              var a = e.children
                , s = e.fromLeft
                , l = void 0 === s || s
                , c = (0,
              n._)()
                , d = t.useRef()
                , m = function(e) {
                  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0px"
                    , s = t.useState(!1)
                    , n = (0,
                  i.Z)(s, 2)
                    , r = n[0]
                    , o = n[1];
                  return t.useEffect((function() {
                      var s = null
                        , t = new IntersectionObserver((function(e) {
                          var a = (0,
                          i.Z)(e, 1)[0];
                          o(a.isIntersecting)
                      }
                      ),{
                          rootMargin: a
                      });
                      return e.current && (s = e.current,
                      t.observe(s)),
                      function() {
                          t.unobserve(s)
                      }
                  }
                  ), [e, a]),
                  r
              }(d);
              return t.useEffect((function() {
                  m && c.start({
                      x: 0,
                      opacity: 1,
                      transition: {
                          duration: .4,
                          ease: "easeOut"
                      }
                  })
              }
              ), [m, c]),
              (0,
              o.jsx)(r.E.div, {
                  className: "lazy-div",
                  ref: d,
                  initial: {
                      opacity: 0,
                      x: l ? -150 : 150
                  },
                  animate: c,
                  children: a
              })
          }
      }
      ,
      9852: (e,a,s)=>{
          "use strict";
          s.d(a, {
              lr: ()=>w.lr,
              Lr: ()=>te,
              Oc: ()=>ya,
              F: ()=>yt,
              cf: ()=>Dt,
              $_: ()=>ut,
              Bs: ()=>Va,
              h4: ()=>N,
              ip: ()=>k.i,
              Xw: ()=>ui,
              kT: ()=>Ea,
              F8: ()=>w.F8,
              Kf: ()=>w.Kf,
              y3: ()=>_,
              cN: ()=>nt
          });
          var i = s(8152)
            , t = s(7294)
            , n = s(288)
            , r = s.n(n)
            , o = s(1860)
            , l = s.n(o)
            , c = s(2086)
            , d = s.n(c)
            , m = s(9948)
            , p = s.n(m)
            , g = s(3440)
            , u = s.n(g)
            , h = s(5893)
            , x = function() {
              var e = function() {
                  var e = document.getElementById("dgMobileNav");
                  e && (e.style.display = "block" === e.style.display ? "none" : "block")
              };
              return (0,
              h.jsx)("header", {
                  className: "dg-mobile-header",
                  children: (0,
                  h.jsxs)("div", {
                      className: "dg-mobile-header-inner",
                      children: [(0,
                      h.jsx)("div", {
                          className: "dg-mobile-header-holder",
                          style: {
                              backgroundImage: "url('".concat(u(), "')"),
                              backgroundSize: "100% 100%"
                          },
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-grid",
                              children: (0,
                              h.jsxs)("div", {
                                  className: "dg-vertical-align-containers",
                                  children: [(0,
                                  h.jsx)("div", {
                                      className: "dg-mobile-menu-opener",
                                      children: (0,
                                      h.jsx)("a", {
                                          onClick: e,
                                          children: (0,
                                          h.jsxs)("span", {
                                              className: "dg-mobile-opener-icon-holder",
                                              children: [(0,
                                              h.jsx)("i", {
                                                  className: "dg-icon-font-awesome fa fa-bars",
                                                  style: {
                                                      color: "white"
                                                  }
                                              }), " "]
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("div", {
                                      className: "dg-position-center",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "dg-position-center-inner",
                                          children: (0,
                                          h.jsx)("div", {
                                              className: "dg-mobile-logo-wrapper",
                                              children: (0,
                                              h.jsx)("a", {
                                                  href: "/",
                                                  style: {
                                                      height: "90px"
                                                  },
                                                  children: (0,
                                                  h.jsx)("img", {
                                                      height: "200",
                                                      width: "410",
                                                      src: d(),
                                                      alt: "mobile-logo"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("div", {
                                      className: "dg-position-right",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "dg-position-right-inner"
                                      })
                                  })]
                              })
                          })
                      }), (0,
                      h.jsx)("nav", {
                          className: "dg-mobile-nav",
                          id: "dgMobileNav",
                          style: {
                              backgroundImage: "url('".concat(u(), "')"),
                              backgroundSize: "100% 100%"
                          },
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-grid",
                              children: (0,
                              h.jsxs)("ul", {
                                  id: "menu-main-menu-main-navigation-mobile-navigation-2",
                                  className: "",
                                  children: [(0,
                                  h.jsxs)("li", {
                                      id: "nav-menu-item-200",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dg-active-item has_sub narrow",
                                      children: [(0,
                                      h.jsx)("a", {
                                          href: "#",
                                          onClick: function(e) {
                                              var a = document.getElementById("game-play-dropdown-mobile").style.display;
                                              document.getElementById("game-play-dropdown-mobile").style.display = "none" === a ? "block" : "none"
                                          },
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "GamePlays"
                                                  })
                                              })
                                          })
                                      }), (0,
                                      h.jsxs)("ul", {
                                          id: "game-play-dropdown-mobile",
                                          className: "sub_menu",
                                          style: {
                                              display: "none"
                                          },
                                          children: [(0,
                                          h.jsx)("li", {
                                              className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ",
                                              children: (0,
                                              h.jsx)("a", {
                                                  href: "#dragons",
                                                  className: "",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      children: "Dragon"
                                                  })
                                              })
                                          }), (0,
                                          h.jsx)("li", {
                                              className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ",
                                              children: (0,
                                              h.jsx)("a", {
                                                  href: "#characters",
                                                  className: "",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      children: "Characters"
                                                  })
                                              })
                                          })]
                                      })]
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#features",
                                          className: "",
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              onClick: e,
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Features"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#roadmap",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Roadmap"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#partners",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Partners"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsxs)("li", {
                                      id: "nav-menu-item-200",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dg-active-item has_sub narrow",
                                      children: [(0,
                                      h.jsx)("a", {
                                          href: "#",
                                          onClick: function(e) {
                                              var a = document.getElementById("game-lore-dropdown-mobile").style.display;
                                              document.getElementById("game-lore-dropdown-mobile").style.display = "none" === a ? "block" : "none"
                                          },
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Documents"
                                                  })
                                              })
                                          })
                                      }), (0,
                                      h.jsxs)("ul", {
                                          id: "game-lore-dropdown-mobile",
                                          className: "sub_menu",
                                          style: {
                                              display: "none"
                                          },
                                          children: [(0,
                                          h.jsx)("li", {
                                              className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ",
                                              children: (0,
                                              h.jsx)("a", {
                                                  href: "#",
                                                  className: "",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      children: "White Paper"
                                                  })
                                              })
                                          }), (0,
                                          h.jsx)("li", {
                                              className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-128 current_page_item ",
                                              children: (0,
                                              h.jsx)("a", {
                                                  href: "#",
                                                  className: "",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      children: "Token Metrics"
                                                  })
                                              })
                                          }), (0,
                                          h.jsx)]
                                      })]
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#tokenInfo",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Tokens"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Stake"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          target: "_blank",
                                          href: "#",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "Marketplace"
                                                  })
                                              })
                                          })
                                      })
                                  }), (0,
                                  h.jsx)("li", {
                                      id: "nav-menu-item",
                                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow",
                                      children: (0,
                                      h.jsx)("a", {
                                          href: "#nfts",
                                          className: "",
                                          onClick: e,
                                          children: (0,
                                          h.jsx)("span", {
                                              className: "item_outer",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_inner",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_text",
                                                      children: "NFTS"
                                                  })
                                              })
                                          })
                                      })
                                  })]
                              })
                          })
                      })]
                  })
              })
          }
            , f = s(5998)
            , b = s(5818)
            , v = s(6488)
            , j = {
              itemInner: {
                  fontWeight: "bold",
                  color: "white"
              },
              menuArea: {
                  height: 60
              }
          }
            , y = function(e) {
              var a = e.hideNavItems
                , s = (0,
              f.I0)()
                , n = (0,
              f.v9)(v.i)
                , o = t.useState(!0)
                , l = (0,
              i.Z)(o, 2);
              l[0],
              l[1],
              t.useRef();
              return (0,
              h.jsxs)(h.Fragment, {
                  children: [(0,
                  h.jsx)("li", {
                      id: "nav-menu-item",
                      className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow dg-active-item",
                      children: (0,
                      h.jsx)("a", {
                          href: "/",
                          className: "dg-header-logo-container",
                          children: (0,
                          h.jsx)("img", {
                              className: "dg-normal-logo",
                              style: {
                                  maxHeight: "12vh"
                              },
                              src: d(),
                              alt: "dark logo"
                          })
                      })
                  }), !a && (0,
                  h.jsxs)(h.Fragment, {
                      children: [(0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              href: "#roadmap",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "Roadmap"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              href: "#partners",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "Partners"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsxs)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow dg-active-item",
                          onMouseOver: function(e) {
                              return document.getElementById("game-lore-dropdown").classList.add("dg-drop-down-start")
                          },
                          onMouseOut: function(e) {
                              return document.getElementById("game-lore-dropdown").classList.remove("dg-drop-down-start")
                          },
                          children: [(0,
                          h.jsx)("a", {
                              href: "#",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsxs)("span", {
                                          className: "bold-item",
                                          children: ["Documents  ", (0,
                                          h.jsx)("img", {
                                              src: p(),
                                              width: 13,
                                              alt: "vectordown",
                                              style: {
                                                  display: "inline"
                                              }
                                          })]
                                      })
                                  })
                              })
                          }), (0,
                          h.jsx)("div", {
                              id: "game-lore-dropdown",
                              className: "second",
                              children: (0,
                              h.jsx)("div", {
                                  className: "inner",
                                  children: (0,
                                  h.jsxs)("ul", {
                                      children: [(0,
                                      h.jsx)("li", {
                                          className: "menu-item menu-item-type-post_type menu-item-object-page ",
                                          children: (0,
                                          h.jsx)("a", {
                                              target: "_blank",
                                              href: "#",
                                              className: "",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_outer",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_inner",
                                                      children: (0,
                                                      h.jsx)("span", {
                                                          className: "item_text",
                                                          children: "White Paper"
                                                      })
                                                  })
                                              })
                                          })
                                      }), (0,
                                      h.jsx)("li", {
                                          className: "menu-item menu-item-type-post_type menu-item-object-page ",
                                          children: (0,
                                          h.jsx)("a", {
                                              href: "#",
                                              className: "",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_outer",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_inner",
                                                      children: (0,
                                                      h.jsx)("span", {
                                                          className: "item_text",
                                                          children: "Token Metrics"
                                                      })
                                                  })
                                              })
                                          })
                                      }),  (0,
                                      h.jsx)("li", {
                                          className: "menu-item menu-item-type-post_type menu-item-object-page ",
                                          children: (0,
                                          h.jsx)("a", {
                                              target: "_blank",
                                              href: "#",
                                              className: " ",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_outer",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_inner",
                                                      children: (0,
                                                      h.jsx)("span", {
                                                          className: "item_text",
                                                          children: "Pitch Deck"
                                                      })
                                                  })
                                              })
                                          })
                                      }), (0,
                                      h.jsx)("li", {
                                          className: "menu-item menu-item-type-post_type menu-item-object-page ",
                                          children: (0,
                                          h.jsx)("a", {
                                              target: "_blank",
                                              href: "#",
                                              className: "",
                                              children: (0,
                                              h.jsx)("span", {
                                                  className: "item_outer",
                                                  children: (0,
                                                  h.jsx)("span", {
                                                      className: "item_inner",
                                                      children: (0,
                                                      h.jsx)("span", {
                                                          className: "item_text",
                                                          children: "All about Mainnet"
                                                      })
                                                  })
                                              })
                                          })
                                      })]
                                  })
                              })
                          })]
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              href: "#tokenInfo",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "Tokens"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              href: "#",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "Stake"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              target: "_blank",
                              href: "#",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "MARKETPLACE"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow",
                          children: (0,
                          h.jsx)("a", {
                              href: "#nfts",
                              className: "",
                              children: (0,
                              h.jsx)("span", {
                                  className: "item_outer",
                                  children: (0,
                                  h.jsx)("span", {
                                      className: "item_inner",
                                      style: j.itemInner,
                                      children: (0,
                                      h.jsx)("span", {
                                          className: "bold-item",
                                          children: "NFTS"
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("li", {
                          id: "nav-menu-item",
                          className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub wide",
                          children: (0,
                          h.jsx)("a", {
                              href: "#playnow",
                              className: "dg-header-logo-container",
                              children: (0,
                              h.jsx)("img", {
                                  onClick: function() {
                                      return s((0,
                                      b.Z)(!n.playnow))
                                  },
                                  className: "dg-normal-logo playnow-btn",
                                  src: r(),
                                  alt: "dark logo"
                              })
                          })
                      })]
                  })]
              })
          }
            , N = function() {
              var e, a, s, n = 0, r = function() {
                  var e = document.getElementById("stickyHeader")
                    , a = window.pageYOffset || document.documentElement.scrollTop;
                  e && (n = a <= 0 ? 0 : a);
                  var s = document.getElementById("dg-back-to-top");
                  s && (n > window.innerHeight + 200 ? s.classList.add("on") : s.classList.remove("on"))
              }, o = t.useState("/event" === (null !== (e = null === (a = window) || void 0 === a || null === (s = a.location) || void 0 === s ? void 0 : s.pathname) && void 0 !== e ? e : "")), c = (0,
              i.Z)(o, 2), d = c[0];
              c[1];
              return t.useEffect((function() {
                  return window.addEventListener("scroll", r),
                  function() {
                      window.removeEventListener("scroll", r)
                  }
              }
              )),
              (0,
              h.jsxs)(h.Fragment, {
                  children: [(0,
                  h.jsx)("header", {
                      className: "dg-page-header",
                      id: "header",
                      children: (0,
                      h.jsx)("div", {
                          id: "stickyHeader",
                          className: "dg-sticky-header header-appear  animate__animated  animate__fadeInDown",
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-sticky-holder",
                              children: (0,
                              h.jsx)("div", {
                                  className: "dg-vertical-align-containers",
                                  style: {
                                      paddingRight: 0
                                  },
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "dg-position-center",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "dg-position-center-inner",
                                          children: (0,
                                          h.jsx)("nav", {
                                              className: "dg-main-menu dg-drop-down dg-sticky-nav",
                                              children: (0,
                                              h.jsx)("ul", {
                                                  id: "menu-main-menu-main-navigation-mobile-navigation",
                                                  className: "clearfix",
                                                  children: (0,
                                                  h.jsx)(y, {
                                                      hideNavItems: d
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  }), (0,
                  h.jsx)(x, {}), (0,
                  h.jsx)("a", {
                      id: "dg-back-to-top",
                      href: "#",
                      className: "",
                      style: {
                          left: 29,
                          right: "auto",
                          bottom: 30
                      },
                      children: (0,
                      h.jsx)("span", {
                          className: "dg-icon-stack",
                          children: (0,
                          h.jsx)("img", {
                              src: l(),
                              alt: "Back to Top"
                          })
                      })
                  })]
              })
          }
            , w = s(4907)
            , _ = function() {
              return (0,
              h.jsx)(h.Fragment, {
                  children: (0,
                  h.jsxs)("div", {
                      className: "dots-loading",
                      children: [(0,
                      h.jsx)("div", {}), (0,
                      h.jsx)("div", {}), (0,
                      h.jsx)("div", {}), (0,
                      h.jsx)("div", {})]
                  })
              })
          }
            , k = s(3244)
            , S = s(4327)
            , T = s.n(S)
            , D = s(536)
            , E = s.n(D)
            , A = s(526)
            , O = s.n(A)
            , C = s(4346)
            , B = s.n(C)
            , q = s(8747)
            , L = s.n(q)
            , M = s(1008)
            , I = s.n(M)
            , P = s(1777)
            , F = s.n(P)
            , G = s(4661)
            , R = s.n(G)
            , z = (s(7636),
          s(2947))
            , U = s.n(z)
            , H = s(7219)
            , W = s.n(H)
            , K = s(9105)
            , V = s.n(K)
            , Z = s(9500)
            , Q = s.n(Z)
            , Y = s(867)
            , X = s.n(Y)
            , J = {
              sectionBackground: "",
              raceList: [{
                  raceName: " BRINX ",
                  raceDescription: '<p><span >  One of the most entertaining fighter soldiers who loved the arena    </span> </p>\n\n<p>and won many bets against the general whenever he was to fight </p> \n\n<p> any prisoner that was put before him. He singlehandedly killed  over 100 prisoners who hoped to fight their way to freedom. </p>',
                  raceLogo: I(),
                  raceBackground: W(),
                  raceCharacter: {
                      male: {
                          image: E(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/4/45/Vo_skywrath_mage_drag_attack_11.mp3"
                      },
                      female: {
                          image: E(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/9/97/Vo_windrunner_wind_spawn_08.mp3"
                      }
                  },
                  raceAbilities: [{
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }]
              }, {
                  raceName: " DURELL ",
                  raceDescription: '<p><span>He was the leader of the army and plotted the plan that resulted in </span>  the murder of the emperor and hoped to take over the throne and <span>marry the Queen but was stopped by his lieutenant. </span> </p>\n\n<p> </p>\n\n<p> <br />\n\n</p>\n',
                  raceLogo: F(),
                  raceBackground: V(),
                  raceCharacter: {
                      male: {
                          image: O(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/ed/Vo_doom_bringer_doom_ability_doom_06.mp3"
                      },
                      female: {
                          image: O(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/8b/Vo_queenofpain_pain_kill_13.mp3"
                      }
                  },
                  raceAbilities: [{
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }]
              }, {
                  raceName: "GAMBALL ",
                  raceDescription: '<p><span>A very loyal Blockombatant with close alliance to the Royal family,   </span>  found out about the plot to kill the emperor late but vowed to <span> revenge the death of the emperor.</span> </p>\n\n<p></p>\n\n<p> <br />\n <br />\n </p>\n',
                  raceLogo: L(),
                  raceBackground: Q(),
                  raceCharacter: {
                      male: {
                          image: T(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/16/Vo_oracle_orac_randomprophecies_04.mp3"
                      },
                      female: {
                          image: T(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3e/Vo_mirana_mir_rare_11.mp3"
                      }
                  },
                  raceAbilities: [{
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Death Blade",
                      image: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/blade_spell_example.png?alt=media",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }]
              }, {
                  raceName: "GOWRELL",
                  raceDescription: '  <p> the emperor had been killed he restored normalcy and oversaw the installation of a new and younger emperor and  <span >protected the realms. He later married the Queen after a new  emperor was enthroned. </span></p>\n\n  <p></p>\n\n  <p><br />\n  <br />\n  </p>\n',
                  raceLogo: R(),
                  raceBackground: X(),
                  raceCharacter: {
                      male: {
                          image: B(),
                          voice: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/88/Vo_axe_axe_firstblood_01.mp3"
                      },
                      female: {
                          image: B(),
                          voice: "https://firebasestorage.googleapis.com/v0/b/shamdi-34989.appspot.com/o/Vo_legion_commander_legcom_dem_inthebag_01.mp3?alt=media&token=4ac330da-c237-4cc3-9de1-8f4195a27132"
                      }
                  },
                  raceAbilities: [{
                      name: "Berserker's Call",
                      image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_berserkers_call.png",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Battle Hunger",
                      image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_battle_hunger.png",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Counter Helix",
                      image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_counter_helix.png",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }, {
                      name: "Culling Blade",
                      image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/axe_culling_blade.png",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }]
              }]
          }
            , $ = U()
            , ee = s(4356)
            , ae = s.n(ee)
            , se = s(1574)
            , ie = s.n(se)
            , te = function() {
              var e, a, s, n, r, o = t.useState(0), l = (0,
              i.Z)(o, 2), c = l[0], d = l[1], m = t.useState([]), p = (0,
              i.Z)(m, 2), g = p[0], u = p[1], x = function(e) {
                  var a;
                  u(null === (a = J.raceList) || void 0 === a ? void 0 : a.map((function(a, s) {
                      var i, t;
                      return (0,
                      h.jsx)("div", {
                          className: "dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-right race-image-container",
                          style: {
                              display: e != s ? "none" : ""
                          },
                          children: (0,
                          h.jsxs)("div", {
                              className: "character-images-container",
                              children: [(0,
                              h.jsx)("img", {
                                  src: null == a ? void 0 : a.raceBackground,
                                  alt: "".concat(a.raceName, " background"),
                                  className: "vc_single_image-img attachment-full race-image-background",
                                  loading: "eager"
                              }), (0,
                              h.jsx)("img", {
                                  src: null == a || null === (i = a.raceCharacter) || void 0 === i || null === (t = i.male) || void 0 === t ? void 0 : t.image,
                                  className: "character-img",
                                  alt: "".concat(a.raceName, " background"),
                                  loading: "eager"
                              })]
                          })
                      }, s)
                  }
                  )))
              };
              return t.useEffect((function() {
                  x(0)
              }
              ), []),
              (0,
              h.jsxs)("section", {
                  className: "dg-characters text-align-center",
                  id: "Heroes",
                  children: [(0,
                  h.jsx)("img", {
                      src: ie(),
                      className: "section-separator",
                      alt: "separator"
                  }), (0,
                  h.jsx)("div", {
                      "data-dg-parallax-speed": "1",
                      className: "dg-character-container m-auto container-xxl",
                      children: (0,
                      h.jsx)("div", {
                          className: "clearfix dg-full-section-inner",
                          children: (0,
                          h.jsx)("div", {
                              className: "wpb_column vc_column_container vc_col-sm-12",
                              children: (0,
                              h.jsx)("div", {
                                  className: "vc_column-inner",
                                  children: (0,
                                  h.jsxs)("div", {
                                      className: "wpb_wrapper",
                                      children: [(0,
                                      h.jsxs)("div", {
                                          className: "dg-section-title dg-section-align-center",
                                          children: [(0,
                                          h.jsx)("div", {
                                              className: "dg-st-inner",
                                              children: (0,
                                              h.jsx)("div", {
                                                  className: "dg-st-title-holder",
                                                  children: (0,
                                                  h.jsx)("h2", {
                                                      className: "dg-st-title",
                                                      children: (0,
                                                      h.jsx)("span", {
                                                          children: "BlocKombatants"
                                                      })
                                                  })
                                              })
                                          }), (0,
                                          h.jsx)(k.i, {
                                              children: (0,
                                              h.jsxs)(h.Fragment, {
                                                  children: [(0,
                                                  h.jsxs)("div", {
                                                      children: [(0,
                                                      h.jsx)("img", {
                                                          src: ae(),
                                                          alt: "dg-separator-image"
                                                      }), (0,
                                                      h.jsx)("br", {}), (0,
                                                      h.jsx)("div", {
                                                          className: "race-list-container",
                                                          children: (0,
                                                          h.jsx)("div", {
                                                              className: "race-list-flex",
                                                              children: null === (e = J.raceList) || void 0 === e ? void 0 : e.map((function(e, a) {
                                                                  return (0,
                                                                  h.jsx)("div", {
                                                                      className: "animation-bounce character-avatar-wrapper",
                                                                      style: {
                                                                          backgroundImage: "url('".concat(c === a ? $ : "", "')")
                                                                      },
                                                                      onClick: function() {
                                                                          return function(e) {
                                                                              d(e),
                                                                              x(e)
                                                                          }(a)
                                                                      },
                                                                      title: "".concat(e.raceName),
                                                                      children: (0,
                                                                      h.jsx)("img", {
                                                                          className: "race-logo",
                                                                          src: null == e ? void 0 : e.raceLogo,
                                                                          alt: e.raceName
                                                                      })
                                                                  }, a)
                                                              }
                                                              ))
                                                          })
                                                      })]
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: "dg-st-text-holder",
                                                      children: (0,
                                                      h.jsx)("div", {
                                                          className: "dg-st-text-text"
                                                      })
                                                  })]
                                              })
                                          })]
                                      }), (0,
                                      h.jsx)(k.i, {
                                          children: (0,
                                          h.jsxs)("div", {
                                              className: "dg-elements-holder dg-responsive-mode-1024",
                                              children: [(0,
                                              h.jsxs)("div", {
                                                  className: "dg-elements-holder-item dg-width-1-2 dg-vertical-alignment-top",
                                                  style: {
                                                      zIndex: 999
                                                  },
                                                  children: [(0,
                                                  h.jsx)("div", {
                                                      className: " dg-elements-holder-item dg-width-1-3"
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: " dg-elements-holder-item dg-width-1-1 dg-horizontal-alignment-left",
                                                      children: (0,
                                                      h.jsxs)("div", {
                                                          className: "hide-md",
                                                          children: [(0,
                                                          h.jsx)("div", {
                                                              className: "wpb_wrapper",
                                                              children: (0,
                                                              h.jsx)("h2", {
                                                                  children: (0,
                                                                  h.jsx)("span", {
                                                                      children: null === (a = J.raceList[c]) || void 0 === a ? void 0 : a.raceName
                                                                  })
                                                              })
                                                          }), (0,
                                                          h.jsx)("div", {
                                                              className: "wpb_text_column wpb_content_element ",
                                                              children: (0,
                                                              h.jsx)("div", {
                                                                  className: "wpb_wrapper character-info",
                                                                  dangerouslySetInnerHTML: {
                                                                      __html: null === (s = J.raceList[c]) || void 0 === s ? void 0 : s.raceDescription
                                                                  }
                                                              })
                                                          })]
                                                      })
                                                  })]
                                              }), g, (0,
                                              h.jsx)("div", {
                                                  className: "dg-elements-holder-item dg-width-1-2 dg-vertical-alignment-middle dg-horizontal-alignment-left",
                                                  children: (0,
                                                  h.jsxs)("div", {
                                                      className: "show-md",
                                                      children: [(0,
                                                      h.jsx)("div", {
                                                          className: "wpb_wrapper",
                                                          children: (0,
                                                          h.jsx)("h2", {
                                                              children: (0,
                                                              h.jsx)("span", {
                                                                  children: null === (n = J.raceList[c]) || void 0 === n ? void 0 : n.raceName
                                                              })
                                                          })
                                                      }), (0,
                                                      h.jsx)("img", {
                                                          src: ae(),
                                                          alt: "dg-separator-image"
                                                      }), (0,
                                                      h.jsx)("div", {
                                                          className: "wpb_text_column wpb_content_element ",
                                                          children: (0,
                                                          h.jsx)("div", {
                                                              className: "wpb_wrapper character-info",
                                                              dangerouslySetInnerHTML: {
                                                                  __html: null === (r = J.raceList[c]) || void 0 === r ? void 0 : r.raceDescription
                                                              }
                                                          })
                                                      })]
                                                  })
                                              })]
                                          })
                                      })]
                                  })
                              })
                          })
                      })
                  })]
              })
          }
            , ne = s(9418)
            , re = s.n(ne)
            , oe = s(3766)
            , le = s.n(oe)
            , ce = s(2286)
            , de = s.n(ce)
            , me = s(392)
            , pe = s.n(me)
            , ge = s(5174)
            , ue = s.n(ge)
            , he = s(4389)
            , xe = s.n(he)
            , fe = s(6942)
            , be = s.n(fe)
            , ve = s(1544)
            , je = s.n(ve)
            , ye = s(6848)
            , Ne = s.n(ye)
            , we = s(474)
            , _e = s.n(we)
            , ke = s(4880)
            , Se = s.n(ke)
            , Te = s(1231)
            , De = s.n(Te)
            , Ee = s(2434)
            , Ae = s.n(Ee)
            , Oe = s(3076)
            , Ce = s.n(Oe)
            , Be = s(6152)
            , qe = s.n(Be)
            , Le = s(409)
            , Me = s.n(Le)
            , Ie = (s(3769),
          s(7159))
            , Pe = s.n(Ie)
            , Fe = s(3686)
            , Ge = s.n(Fe)
            , Re = s(1707)
            , ze = s.n(Re)
            , Ue = s(3902)
            , He = s.n(Ue)
            , We = s(5877)
            , Ke = s.n(We)
            , Ve = s(2363)
            , Ze = s.n(Ve)
            , Qe = s(769)
            , Ye = s.n(Qe)
            , Xe = s(4289)
            , Je = s.n(Xe)
            , $e = s(950)
            , ea = s.n($e)
            , aa = s(8505)
            , sa = s.n(aa)
            , ia = s(7127)
            , ta = s.n(ia)
            , na = s(4107)
            , ra = s.n(na)
            , oa = s(6313)
            , la = s.n(oa)
            , ca = s(4258)
            , da = s.n(ca)
            , ma = s(8911)
            , pa = s.n(ma)
            , ga = s(504)
            , ua = s.n(ga)
            , ha = s(6379)
            , xa = s.n(ha)
            , fa = [{
              dragonName: "Earth",
              dragonDescription: "The horrifying Undead army, called the Scourge, consists of thousands of walking corpses, disembodied spirits, damned mortal men and insidious extra-dimensional entities. The Scourge was created by the Burning Legion for the sole purpose of sowing terror across the world in anticipation of the Legion's inevitable invasion. The Undead are ruled by Ner'zhul, the Lich King, who lords over the icy realm of Northrend from his frozen throne. Ner'zhul commands the terrible plague of undeath, which he sends ever southward into the human lands. As the plague encroaches on the southlands, more and more humans fall prey to Ner'zhul's mental control and life-draining sickness every day. In this way, Ner'zhul has swelled the ranks of the already considerable Scourge. The Undead employ necromantic magics and the elemental powers of the cold north against their enemies.",
              dragonImage: re(),
              dragonAvatar: be(),
              dragonBackground: Ke(),
              dragonElement: sa(),
              dragonRole: {
                  roleName: "Tanker",
                  roleImage: Ae()
              },
              bodyPart: [{
                  image: la(),
                  name: "Gem",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ra(),
                  name: "Rune",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: da(),
                  name: "Claws",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: pa(),
                  name: "Eyes",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ua(),
                  name: "Horn",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: xa(),
                  name: "Tail",
                  rate: "Epic",
                  color: "#a67c52"
              }]
          }, {
              dragonName: "Fire",
              dragonDescription: "The horrifying Undead army, called the Scourge, consists of thousands of walking corpses, disembodied spirits, damned mortal men and insidious extra-dimensional entities. The Scourge was created by the Burning Legion for the sole purpose of sowing terror across the world in anticipation of the Legion's inevitable invasion. The Undead are ruled by Ner'zhul, the Lich King, who lords over the icy realm of Northrend from his frozen throne. Ner'zhul commands the terrible plague of undeath, which he sends ever southward into the human lands. As the plague encroaches on the southlands, more and more humans fall prey to Ner'zhul's mental control and life-draining sickness every day. In this way, Ner'zhul has swelled the ranks of the already considerable Scourge. The Undead employ necromantic magics and the elemental powers of the cold north against their enemies.",
              dragonImage: le(),
              dragonAvatar: xe(),
              dragonBackground: Pe(),
              dragonElement: Ze(),
              dragonRole: {
                  roleName: "Warrior",
                  roleImage: De()
              },
              bodyPart: [{
                  image: la(),
                  name: "Gem",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ra(),
                  name: "Rune",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: da(),
                  name: "Claws",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: pa(),
                  name: "Eyes",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ua(),
                  name: "Horn",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: xa(),
                  name: "Tail",
                  rate: "Epic",
                  color: "#a67c52"
              }]
          }, {
              dragonName: "Water",
              dragonDescription: "The horrifying Undead army, called the Scourge, consists of thousands of walking corpses, disembodied spirits, damned mortal men and insidious extra-dimensional entities. The Scourge was created by the Burning Legion for the sole purpose of sowing terror across the world in anticipation of the Legion's inevitable invasion. The Undead are ruled by Ner'zhul, the Lich King, who lords over the icy realm of Northrend from his frozen throne. Ner'zhul commands the terrible plague of undeath, which he sends ever southward into the human lands. As the plague encroaches on the southlands, more and more humans fall prey to Ner'zhul's mental control and life-draining sickness every day. In this way, Ner'zhul has swelled the ranks of the already considerable Scourge. The Undead employ necromantic magics and the elemental powers of the cold north against their enemies.",
              dragonImage: de(),
              dragonAvatar: Ne(),
              dragonBackground: Ge(),
              dragonElement: Ye(),
              dragonRole: {
                  roleName: "Ranger",
                  roleImage: qe()
              },
              bodyPart: [{
                  image: la(),
                  name: "Gem",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ra(),
                  name: "Rune",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: da(),
                  name: "Claws",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: pa(),
                  name: "Eyes",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ua(),
                  name: "Horn",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: xa(),
                  name: "Tail",
                  rate: "Epic",
                  color: "#a67c52"
              }]
          }, {
              dragonName: "Grass",
              dragonDescription: "The horrifying Undead army, called the Scourge, consists of thousands of walking corpses, disembodied spirits, damned mortal men and insidious extra-dimensional entities. The Scourge was created by the Burning Legion for the sole purpose of sowing terror across the world in anticipation of the Legion's inevitable invasion. The Undead are ruled by Ner'zhul, the Lich King, who lords over the icy realm of Northrend from his frozen throne. Ner'zhul commands the terrible plague of undeath, which he sends ever southward into the human lands. As the plague encroaches on the southlands, more and more humans fall prey to Ner'zhul's mental control and life-draining sickness every day. In this way, Ner'zhul has swelled the ranks of the already considerable Scourge. The Undead employ necromantic magics and the elemental powers of the cold north against their enemies.",
              dragonImage: pe(),
              dragonAvatar: _e(),
              dragonBackground: ze(),
              dragonElement: Je(),
              dragonRole: {
                  roleName: "Support/Healer",
                  roleImage: Me()
              },
              bodyPart: [{
                  image: la(),
                  name: "Gem",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ra(),
                  name: "Rune",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: da(),
                  name: "Claws",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: pa(),
                  name: "Eyes",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ua(),
                  name: "Horn",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: xa(),
                  name: "Tail",
                  rate: "Epic",
                  color: "#a67c52"
              }]
          }, {
              dragonName: "Thunder",
              dragonDescription: "The horrifying Undead army, called the Scourge, consists of thousands of walking corpses, disembodied spirits, damned mortal men and insidious extra-dimensional entities. The Scourge was created by the Burning Legion for the sole purpose of sowing terror across the world in anticipation of the Legion's inevitable invasion. The Undead are ruled by Ner'zhul, the Lich King, who lords over the icy realm of Northrend from his frozen throne. Ner'zhul commands the terrible plague of undeath, which he sends ever southward into the human lands. As the plague encroaches on the southlands, more and more humans fall prey to Ner'zhul's mental control and life-draining sickness every day. In this way, Ner'zhul has swelled the ranks of the already considerable Scourge. The Undead employ necromantic magics and the elemental powers of the cold north against their enemies.",
              dragonImage: ue(),
              dragonAvatar: je(),
              dragonBackground: He(),
              dragonElement: ea(),
              dragonRole: {
                  roleName: "Mage",
                  roleImage: Ce()
              },
              bodyPart: [{
                  image: la(),
                  name: "Gem",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ra(),
                  name: "Rune",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: da(),
                  name: "Claws",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: pa(),
                  name: "Eyes",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: ua(),
                  name: "Horn",
                  rate: "Epic",
                  color: "#a67c52"
              }, {
                  image: xa(),
                  name: "Tail",
                  rate: "Epic",
                  color: "#a67c52"
              }]
          }]
            , ba = ta()
            , va = Se()
            , ja = s(5591)
            , ya = function() {
              var e = {
                  dots: !1,
                  infinite: !0,
                  faded: !0,
                  speed: 500,
                  slidesToShow: 5,
                  swipeToSlide: !0,
                  slidesToScroll: 1,
                  nextArrow: (0,
                  h.jsx)(w.F8, {}),
                  prevArrow: (0,
                  h.jsx)(w.Kf, {}),
                  responsive: [{
                      breakpoint: 1600,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1
                      }
                  }, {
                      breakpoint: 1400,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1
                      }
                  }, {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1
                      }
                  }, {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1
                      }
                  }, {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          initialSlide: 1,
                          infinite: !1,
                          dots: !1,
                          afterChange: function(e) {
                              return m(e)
                          }
                      }
                  }, {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1,
                          afterChange: function(e) {
                              return m(e)
                          }
                      }
                  }, {
                      breakpoint: 380,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: !1,
                          dots: !1,
                          afterChange: function(e) {
                              return m(e)
                          }
                      }
                  }]
              }
                , a = t.useState(!1)
                , s = (0,
              i.Z)(a, 2)
                , n = s[0]
                , r = s[1]
                , o = t.useState(0)
                , l = (0,
              i.Z)(o, 2)
                , c = l[0]
                , d = l[1]
                , m = function(e) {
                  d(e)
              };
              return t.useEffect((function() {
                  fa.forEach((function(e, a) {
                      var s = new Image;
                      s.src = e.dragonBackground,
                      fa[a].dragonBackground = s;
                      var i = new Image;
                      i.src = e.dragonImage,
                      fa[a].dragonImage = i
                  }
                  )),
                  r(!0)
              }
              ), []),
              (0,
              h.jsxs)("section", {
                  className: "dg-dragons text-align-center dg-preload-background dragon-background",
                  id: "dragons",
                  children: [(0,
                  h.jsx)("img", {
                      className: "background-img",
                      src: fa[n ? c : 0].dragonBackground.src,
                      alt: "dragon background"
                  }), (0,
                  h.jsx)("img", {
                      src: ie(),
                      className: "section-separator",
                      alt: "separator"
                  }), (0,
                  h.jsxs)("div", {
                      className: "dg-section-title dg-section-align-center",
                      style: {
                          margin: "auto 1.2vw"
                      },
                      children: [(0,
                      h.jsx)("div", {
                          className: "dg-st-inner",
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-st-title-holder",
                              children: (0,
                              h.jsx)("h2", {
                                  className: "dg-st-title",
                                  children: (0,
                                  h.jsx)("span", {
                                      children: "Dragons"
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("img", {
                          src: ae(),
                          alt: "dg-separator-image"
                      }), (0,
                      h.jsx)("br", {}), (0,
                      h.jsx)("div", {
                          style: {
                              margin: "0 auto",
                              textAlign: "center",
                              maxWidth: 900
                          },
                          children: (0,
                          h.jsx)("div", {
                              className: "",
                              children: (0,
                              h.jsx)("div", {
                                  className: "wpb_text_column wpb_content_element ",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "wpb_wrapper character-info",
                                      children: (0,
                                      h.jsx)("p", {
                                          style: {
                                              fontFamily: "Univers LT Std",
                                              fontStyle: "normal",
                                              fontSize: "small"
                                          },
                                          children: "There are a diversity of dragons, which comes from the perfect combination of 5 Dragon Classes and Elements, and 6 Body Parts with different Rarities Levels from Common to Rare. Each dragon will become unique and worthwhile in your dragon collection."
                                      })
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("div", {
                          style: {
                              display: "table",
                              margin: "0 auto"
                          },
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-element-container",
                              children: fa.map((function(e, a) {
                                  return (0,
                                  h.jsx)("div", {
                                      onClick: function() {
                                          return m(a)
                                      },
                                      className: "hide-xs",
                                      style: {
                                          marginLeft: -20,
                                          marginRight: -20
                                      },
                                      children: (0,
                                      h.jsx)("img", {
                                          className: "element-icon",
                                          src: e.dragonElement,
                                          style: {
                                              backgroundImage: "url('".concat(c === a ? ba : "", "')")
                                          },
                                          alt: "element of dragon"
                                      })
                                  }, a)
                              }
                              ))
                          })
                      }), (0,
                      h.jsxs)("div", {
                          className: "dg-elements-holder dg-responsive-mode-600",
                          children: [(0,
                          h.jsx)("div", {
                              className: "dg-elements-holder-item dg-width-1-4 dg-vertical-alignment-middle dg-horizontal-alignment-left"
                          }), (0,
                          h.jsxs)("div", {
                              className: "dg-elements-holder-item dg-width-1-1 dg-vertical-alignment-middle dg-horizontal-alignment-right dragon-info",
                              children: [(0,
                              h.jsxs)("div", {
                                  className: "dg-elements-holder dg-responsive-mode-600",
                                  children: [(0,
                                  h.jsx)("div", {
                                      className: "dg-elements-holder-item dg-width-1-2 dg-vertical-alignment-middle dg-horizontal-alignment-right",
                                      children: (0,
                                      h.jsx)("img", {
                                          src: fa[n ? c : 0].dragonImage.src,
                                          alt: "",
                                          className: "dragon-image"
                                      })
                                  }), (0,
                                  h.jsx)("div", {
                                      className: "dg-elements-holder-item dg-width-1-3 dg-vertical-alignment-middle dg-horizontal-alignment-left",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "MuiBox-root jss16",
                                          children: (0,
                                          h.jsxs)("div", {
                                              className: "MuiGrid-root backers__grid MuiGrid-container MuiGrid-spacing-xs-2",
                                              children: [(0,
                                              h.jsx)("div", {
                                                  className: "MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 MuiGrid-grid-md-3"
                                              }), (0,
                                              h.jsxs)("div", {
                                                  className: "dragon-role-container MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6",
                                                  children: [(0,
                                                  h.jsx)("img", {
                                                      alt: "moonrock",
                                                      className: "dragon-part-image-role",
                                                      src: fa[c].dragonRole.roleImage
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: "dragon-role-wraper",
                                                      children: (0,
                                                      h.jsx)("div", {
                                                          className: "dragon-role-wraper-middle",
                                                          children: (0,
                                                          h.jsx)("h4", {
                                                              className: "dragon-bodypart-name",
                                                              children: fa[c].dragonRole.roleName
                                                          })
                                                      })
                                                  })]
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-3 MuiGrid-grid-sm-3 MuiGrid-grid-md-3"
                                              }), fa[c].bodyPart.map((function(e, a) {
                                                  return (0,
                                                  h.jsxs)("div", {
                                                      className: "dragon-part-container MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-6",
                                                      children: [(0,
                                                      h.jsx)("img", {
                                                          alt: "moonrock",
                                                          className: "dragon-part-image",
                                                          src: e.image
                                                      }), (0,
                                                      h.jsxs)("div", {
                                                          children: [(0,
                                                          h.jsx)("h4", {
                                                              className: "dragon-bodypart-name",
                                                              children: e.name
                                                          }), (0,
                                                          h.jsx)("h5", {
                                                              className: "dragon-bodypart-rate",
                                                              style: {
                                                                  color: e.color
                                                              },
                                                              children: e.rate
                                                          })]
                                                      })]
                                                  }, a)
                                              }
                                              ))]
                                          })
                                      })
                                  })]
                              }), (0,
                              h.jsx)(k.i, {
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "dg-dragon-container",
                                      children: (0,
                                      h.jsx)(w.lr, {
                                          items: fa.map((function(e, a) {
                                              return (0,
                                              h.jsx)("div", {
                                                  onClick: function() {
                                                      return m(a)
                                                  },
                                                  style: {
                                                      cursor: "pointer"
                                                  },
                                                  children: (0,
                                                  h.jsx)("div", {
                                                      className: c === a ? "control-item active" : "control-item",
                                                      children: (0,
                                                      h.jsxs)("div", {
                                                          className: "img",
                                                          children: [(0,
                                                          h.jsx)(ja.w, {
                                                              className: "dragon-logo",
                                                              dataSrc: e.dragonAvatar,
                                                              dataSrcset: e.dragonAvatar,
                                                              alt: e.dragonName,
                                                              fitSize: !0
                                                          }), (0,
                                                          h.jsx)("img", {
                                                              src: va,
                                                              alt: "selected",
                                                              style: {
                                                                  objectFit: "contain",
                                                                  visibility: c === a ? "visible" : "hidden"
                                                              }
                                                          })]
                                                      })
                                                  })
                                              }, a)
                                          }
                                          )),
                                          settings: e
                                      })
                                  })
                              })]
                          }), (0,
                          h.jsx)("div", {
                              className: "dg-elements-holder-item dg-width-1-3 dg-vertical-alignment-middle dg-horizontal-alignment-left"
                          })]
                      })]
                  })]
              })
          }
            , Na = [{
              Time: "2022-1",
              displayTime: "Q2-2021",
              title: "Stage 1",
              description: '\n        <p><b style="color:#ADFF2F">&#x2714;</b> Ideation \n  \n <p><b style="color:#ADFF2F">&#x2714;</b>Project team compiling</p>\n <p><b style="color:#ADFF2F">&#x2714;</b> Project infrastructure </p>\n                  '
          }, {
              Time: "2022-4",
              title: "Stage 2",
              displayTime: "Q3-Q4-2021",
              description: '\n <p><b style="color:#ADFF2F">&#x2714;</b> MVP development </p>\n  <h4>Q1-2022</h4>   <p>Andriod development build</p>\n   <p> IOS build </p>\n   \n    <h4>Q2-Q3-2022</h4>\n       <p>Partners</p>\n            <p>Promotions</p>\n  \n        '
          }, {
              Time: "2022-10",
              displayTime: "Q4-2022",
              title: "Stage 3",
              description: "\n            <p>Private and seed round initialization</p>\n            <p>Development team expansion.</p>\n            <p>Marketing and mainstream media engagement.</p>\n            <p >Social media Influencer partnerships.</p>\n            <p >&nbsp; &nbsp;Dex listing and token distribution.&nbsp;</p>\n            <p >&nbsp; &nbsp;Lp and Single Staking.&nbsp;</p>\n            <p >NFTs minting for Tournaments. </p>\n            <p>Android and iOS store uploads.</p>\n            <p>▪ CEX listing</p>  \n <p>▪ First global tournament</p>  \n    <p>▪ Mainstream media partnership. </p>   \n      <p><br></p>"
          }, {
              Time: "2023-1",
              title: "Stage 4",
              displayTime: "Q1-2023 and beyond",
              description: "\n            <p>▪ WebGL development </p>\n            <p>▪ Development of Staking platform.</p>\n            <p>More Innovations as time goes:</p>\n  \n          <p>▪ Development of a Dex (Multi-chain Swap). </p>\n         <p>▪ Development of IDO platform. </p>\n       <p>▪ Development of INO platform. </p>\n       <p>▪ Development of BKB blockchain. </p>\n     "
          }]
            , wa = [{
              time: "2022-03-30",
              title: "Open beta - Only user hold DRAW"
          }, {
              time: "2022-04-02",
              title: "AMA - Hunter bug",
              description: "An investor is interested in the company and wants to purchase 1,000 shares"
          }, {
              time: "2022-04-06",
              title: "Sale NFT on marketplace",
              description: "For example, suppose company ABC's stock increased in price by 10% over the past month. An investor is interested in the company and wants to purchase 1,000 shares"
          }]
            , _a = s(8506)
            , ka = s.n(_a)
            , Sa = s(4278)
            , Ta = s.n(Sa)
            , Da = {
              timelineItemTitle: {
                  lineHeight: 1.45
              }
          }
            , Ea = function() {
              var e = Date.parse((new Date).toString()) - Date.parse(Na[0].Time)
                , a = Date.parse(Na[Na.length - 1].Time) - Date.parse(Na[0].Time)
                , s = e < 0 ? 5 : e / a * 100;
              return (0,
              h.jsxs)("section", {
                  className: "dg-roadmap text-align-center",
                  id: "roadmap",
                  children: [(0,
                  h.jsx)("img", {
                      src: ie(),
                      className: "section-separator",
                      alt: "separator"
                  }), (0,
                  h.jsxs)("div", {
                      className: "roadmap-warper",
                      children: [(0,
                      h.jsx)("div", {
                          className: "dg-section-title dg-section-align-center",
                          children: (0,
                          h.jsx)("div", {
                              className: "dg-st-inner",
                              children: (0,
                              h.jsx)("div", {
                                  className: "dg-st-title-holder",
                                  children: (0,
                                  h.jsxs)("h2", {
                                      className: "dg-st-title",
                                      children: [(0,
                                      h.jsx)("p", {
                                          children: "Road Map"
                                      }), (0,
                                      h.jsx)("p", {
                                          children: " "
                                      })]
                                  })
                              })
                          })
                      }), (0,
                      h.jsx)("div", {
                          className: "roadmap-timeline-wraper",
                          children: (0,
                          h.jsxs)("div", {
                              className: "roadmap-timeline",
                              children: [(0,
                              h.jsx)("div", {
                                  className: "roadmap-progress-bar"
                              }), (0,
                              h.jsxs)("div", {
                                  className: "roadmap-progress-bar-inner-bar",
                                  style: {
                                      height: "".concat(s, "%")
                                  },
                                  children: [(0,
                                  h.jsx)("span", {
                                      className: "roadmap-small-energy-bar-1"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "roadmap-small-energy-bar-2"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "roadmap-small-energy-bar-3"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "roadmap-small-energy-bar-4"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "roadmap-small-energy-bar-5"
                                  }), (0,
                                  h.jsx)("div", {
                                      className: "roadmap-energy-bar-cover-up"
                                  })]
                              }), Na.map((function(e, a) {
                                  return (0,
                                  h.jsx)("div", {
                                      className: "roadmap-container roadmap-" + (a % 2 == 0 ? "right " : "left ") + (Date.parse((new Date).toString()) > Date.parse(e.Time) ? "complete" : ""),
                                      children: (0,
                                      h.jsx)(k.i, {
                                          fromLeft: a % 2 == 0,
                                          children: (0,
                                          h.jsxs)("div", {
                                              className: "roadmap-content",
                                              children: [(0,
                                              h.jsx)("h3", {
                                                  style: Da.timelineItemTitle,
                                                  children: e.title
                                              }), (0,
                                              h.jsxs)("h4", {
                                                  children: [(0,
                                                  h.jsx)("span", {
                                                      children: (0,
                                                      h.jsx)("img", {
                                                          src: ka(),
                                                          alt: "right"
                                                      })
                                                  }), "  " + e.displayTime + " ", (0,
                                                  h.jsx)("span", {
                                                      children: (0,
                                                      h.jsx)("img", {
                                                          src: Ta(),
                                                          alt: "left"
                                                      })
                                                  })]
                                              }), (0,
                                              h.jsx)("div", {
                                                  dangerouslySetInnerHTML: {
                                                      __html: e.description
                                                  }
                                              })]
                                          })
                                      })
                                  }, a)
                              }
                              ))]
                          })
                      })]
                  })]
              })
          }
            , Aa = s(6228)
            , Oa = s.n(Aa)
            , Ca = s(6237)
            , Ba = s.n(Ca)
            , qa = s(1800)
            , La = s.n(qa)
            , Ma = s(1912)
            , Ia = s.n(Ma)
            , Pa = s(8731)
            , Fa = s.n(Pa)
            , Ga = s(4134)
            , Ra = s.n(Ga)
            , za = s(9035)
            , Ua = s.n(za)
            , Ha = s(4224)
            , Wa = s.n(Ha)
            , Ka = {
              title: "",
              describe1: " ",
              describe2: "",
              video: '     \n                                ',
              screenshots: [{
                  type: 0,
                  data: Ba()
              }, {
                  type: 0,
                  data: La()
              }, {
                  type: 0,
                  data: Ia()
              }, {
                  type: 0,
                  data: Fa()
              }, {
                  type: 0,
                  data: Ra()
              }, {
                  type: 0,
                  data: Ua()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }, {
                  type: 0,
                  data: Wa()
              }]
          }
            , Va = function() {
              return (0,
              h.jsxs)("section", {
                  className: "dg-describe text-align-center",
                  children: [(0,
                  h.jsx), (0,
                  h.jsxs)("div", {
                      className: "dg-game-describe-warper",
                      style: {
                          margin: "auto 1.2vw"
                      },
                      children: [(0,
                      h.jsx)("h2", {
                          children: Ka.title
                      }), (0,
                      h.jsx)("img", {
                          src: ae(),
                          alt: "dg-separator-image"
                      }), (0,
                      h.jsx)("div", {
                          children: (0,
                          h.jsx)(k.i, {
                              fromLeft: !1,
                              children: (0,
                              h.jsx)("div", {
                                  className: "screenshot-frame",
                                 
                                 
                              })
                          })
                      })]
                  }), (0,
                  h.jsx)("div", {
                      className: "scrolldown-btn-container"
                  })]
              })
          }
            , Za = s(4942)
            , Qa = s(5365)
            , Ya = s.n(Qa)
            , Xa = s(6389)
            , Ja = s.n(Xa)
            , $a = s(341)
            , es = s.n($a)
            , as = s(9348)
            , ss = s.n(as)
            , is = s(6227)
            , ts = s.n(is)
            , ns = s(7561)
            , rs = s.n(ns)
            , os = s(5345)
            , ls = s.n(os)
            , cs = s(1322)
            , ds = s.n(cs)
            , ms = s(3443)
            , ps = s.n(ms)
            , gs = s(7413)
            , us = s.n(gs)
            , hs = s(2925)
            , xs = s.n(hs)
            , fs = s(9836)
            , bs = s.n(fs)
            , vs = s(1817)
            , js = s.n(vs)
            , ys = s(8796)
            , Ns = s.n(ys)
            , ws = s(7676)
            , _s = s.n(ws)
            , ks = s(8760)
            , Ss = s.n(ks)
            , Ts = s(6298)
            , Ds = s.n(Ts)
            , Es = s(5147)
            , As = s.n(Es)
            , Os = s(2403)
            , Cs = s.n(Os)
            , Bs = s(6025)
            , qs = s.n(Bs)
            , Ls = s(3746)
            , Ms = s.n(Ls)
            , Is = s(2948)
            , Ps = s.n(Is)
            , Fs = s(9119)
            , Gs = s.n(Fs)
            , Rs = s(8407)
            , zs = s.n(Rs)
            , Us = s(2490)
            , Hs = s.n(Us)
            , Ws = s(7171)
            , Ks = s.n(Ws)
            , Vs = s(471)
            , Zs = s.n(Vs)
            , Qs = s(798)
            , Ys = s.n(Qs)
            , Xs = s(1789)
            , Js = s.n(Xs)
            , $s = s(3993)
            , ei = s.n($s)
            , ai = s(1938)
            , si = s.n(ai)
            , ii = s(9808)
            , ti = s.n(ii)
            , ni = s(5286)
            , ri = s.n(ni)
            , oi = s(9205)
            , li = s.n(oi)
            , ci = s(9223)
            , di = s.n(ci);
          const mi = [{
              icon: ts(),
              title: "solana",
              url: "https://solana.com/vi",
              description: ""
          },  {
              icon: Ja(),
              title: "redkite",
              url: "https://www.coinex.org/",
              description: ""
          },  {
              icon: Hs(),
              title: "solanium",
              url: "#",
              description: ""
          }, {
              icon: As(),
              title: "au21",
              url: "https://caduceus.foundation/",
              description: ""
          }, {
              icon: Ks(),
              title: "daomaker",
              url: "https://www.cherryswap.net/",
              description: ""
          },   {
              icon: bs(),
              title: "maven_m",
              url: "https://www.okx.com/okc",
              description: ""
          }, {
              icon: Gs(),
              title: "goodgame",
              url: "https://miniutopia.co/",
              description: ""
          }, {
              icon: us(),
              title: "hgventures",
              url: "#",
              description: "",
              containerStyle: {
                  position: "relative"
              },
              imgStyle: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)"
              }
          } ];
          function pi(e, a) {
              var s = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  a && (i = i.filter((function(a) {
                      return Object.getOwnPropertyDescriptor(e, a).enumerable
                  }
                  ))),
                  s.push.apply(s, i)
              }
              return s
          }
          function gi(e) {
              for (var a = 1; a < arguments.length; a++) {
                  var s = null != arguments[a] ? arguments[a] : {};
                  a % 2 ? pi(Object(s), !0).forEach((function(a) {
                      (0,
                      Za.Z)(e, a, s[a])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : pi(Object(s)).forEach((function(a) {
                      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                  }
                  ))
              }
              return e
          }
          var ui = function() {
              return (0,
              h.jsxs)("section", {
                  className: "dg-partners text-align-center dg-preload-background",
                  id: "partners",
                  children: [(0,
                  h.jsx)("img", {
                      src: ie(),
                      className: "section-separator",
                      alt: "separator"
                  }), (0,
                  h.jsxs)("div", {
                      className: "partners-warper",
                      children: [(0,
                      h.jsxs)("div", {
                          className: "dg-section-title dg-section-align-center",
                          children: [(0,
                          h.jsx)("div", {
                              className: "dg-st-inner",
                              children: (0,
                              h.jsx)("div", {
                                  className: "dg-st-title-holder",
                                  children: (0,
                                  h.jsx)("h2", {
                                      className: "dg-st-title",
                                      children: (0,
                                      h.jsx)("span", {
                                          children: "BACKERS & PARTNERS"
                                      })
                                  })
                              })
                          }), (0,
                          h.jsxs)("div", {
                              children: [(0,
                              h.jsx)("img", {
                                  src: ae(),
                                  alt: "dg-separator-image"
                              }), (0,
                              h.jsx)("br", {})]
                          })]
                      }), (0,
                      h.jsx)(k.i, {
                          fromLeft: !1,
                          children: (0,
                          h.jsx)("div", {
                              className: "MuiBox-root jss16",
                              children: (0,
                              h.jsx)("div", {
                                  className: "MuiGrid-root backers__grid MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-content-xs-left partner-container",
                                  children: mi.map((function(e, a) {
                                      var s = mi.length < 6 ? Math.round(12 / mi.length) : 2
                                        , i = mi.length < 2 ? Math.round(12 / mi.length) : 6;
                                      return (0,
                                      h.jsx)("div", {
                                          style: gi({}, e.containerStyle),
                                          className: "MuiGrid-root backers__grid-item MuiGrid-item MuiGrid-grid-xs-".concat(i, " MuiGrid-grid-sm-").concat(s, " MuiGrid-grid-md-").concat(s, " partners-item  animation-bounce"),
                                          children: (0,
                                          h.jsx)("img", {
                                              style: gi({}, e.imgStyle),
                                              className: "partners-img backer",
                                              alt: e.title,
                                              src: e.icon,
                                              onClick: function() {
                                                  return a = e.url,
                                                  void window.open(a, "_blank");
                                                  var a
                                              }
                                          })
                                      }, a)
                                  }
                                  ))
                              })
                          })
                      })]
                  })]
              })
          }
            , hi = s(6006)
            , xi = s.n(hi)
            , fi = s(7879)
            , bi = s.n(fi)
            , vi = s(932)
            , ji = s.n(vi)
            , yi = s(3812)
            , Ni = s.n(yi)
            , wi = s(3098)
            , _i = s.n(wi)
            , ki = s(2024)
            , Si = s.n(ki)
            , Ti = s(2987)
            , Di = s.n(Ti)
            , Ei = s(9934)
            , Ai = s.n(Ei)
            , Oi = s(3361)
            , Ci = s.n(Oi)
            , Bi = s(3511)
            , qi = s.n(Bi)
            , Li = s(6935)
            , Mi = s.n(Li)
            , Ii = s(4310)
            , Pi = s.n(Ii)
            , Fi = s(2253)
            , Gi = s.n(Fi)
            , Ri = s(1861)
            , zi = s.n(Ri)
            , Ui = s(3197)
            , Hi = s.n(Ui)
            , Wi = s(8021)
            , Ki = s.n(Wi)
            , Vi = s(4830)
            , Zi = s.n(Vi)
            , Qi = s(9210)
            , Yi = s.n(Qi)
            , Xi = s(7509)
            , Ji = s.n(Xi)
            , $i = [{
              icon: _i(),
              title: "Son Pham",
              role: "Game developer"
          }, {
              icon: Si(),
              title: "Phuoc Nguyen",
              role: "Game developer"
          }, {
              icon: Di(),
              title: "An Ngo",
              role: "Game developer"
          }, {
              icon: Ai(),
              title: "Cuong Nguyen",
              role: "Game developer"
          }, {
              icon: Ci(),
              title: "Dai Phan",
              role: "Blockchain developer"
          }, {
              icon: qi(),
              title: "Vu Nguyen",
              role: "Game artist"
          }, {
              icon: Mi(),
              title: "Khoa Duong",
              role: "Game artist"
          }, {
              icon: Pi(),
              title: "Nam Do",
              role: "UIUX Game Designer"
          }, {
              icon: Gi(),
              title: "Luyen Ngo",
              role: "Game designer"
          }]
            , et = [{
              icon: zi(),
              title: "Huy Van",
              role: "Execution Lead",
              description: "<p> ▪ 12 years as IT Solution\n   Consultant, PM, Entrepreneur.</p>\n<p> ▪ 4 years as Crypto enthusiast.</p>\n<p> ▪ Former Co-founder of\n   Scanomi Singapore.</p>\n<p> ▪ Co-founder of Heatmob Vietnam.</p>"
          }, {
              icon: Hi(),
              title: "Hung Nguyen",
              role: "Tech Lead (Game Dev)",
              description: "<p> ▪ 12 years as Mobile Game Development, Entrepreneur.</p>\n<p> ▪ Former Co-founder of Engalab, Riomotis Game Studio.</p>\n<p> ▪ Co-founder of Heatmob Viet Nam.</p>"
          }, {
              icon: Yi(),
              title: "Phuc Vo",
              role: "Tech Lead (Blockchain)",
              description: "<p> ▪ 14 years as Software Engineering, Entrepreneur.</p><p> ▪ 8 years intro Mobile Game Development.</p><p> ▪ Founder of Inotech, Software & Game Development Company.</p>"
          }, {
              icon: Ki(),
              title: "Huy Nguyen",
              role: "Game Design Leader",
              description: "<p> ▪ 15 years of experience as QC Leader, Game Design Leader, Product Manager.</p>\n        <p> ▪ Extensive experiences on Strategic games (Tam Quoc Chi, Thuan Thien Kiem, Nam De 1-2-3).</p>\n<p> ▪ Former Founder of Co Non Game Studio, Creator of Nam De 1-2-3.</p>"
          }, {
              icon: Zi(),
              title: "Tram Do",
              role: "HR & Ops Manager",
              description: "<p> ▪ Over 4 years as Talent Acquisition Specialist in the multiple industries and Operation Manager.</p>"
          }, {
              icon: Ji(),
              title: "Vinh Nguyen",
              role: "Project Manager",
              description: "<p> ▪ 10+ years in Game Industry.</p>\n        <p> ▪ Ex-cofounder XBean Game.</p>\n        <p> ▪ PMI - ACP Certification.</p>"
          }]
            , at = [{
              icon: xi(),
              title: "Ian Chan",
              description: "<ul>\n\t<li>28 years as Tech solution leader on many sectors and topics in Singapore.</li>\n\t<li>CIO of IBD Technology Pte Ltd.</li>\n\t<li>Interviewed by Channel News Asia &amp; BBC on the Blockchain &amp; Crypto topics.</li>\n</ul>"
          }, {
              icon: bi(),
              title: "Alvin Ng",
              description: "<ul>\n\t<li>20 Years in the areas of Data Analytics, Business Intelligence and Performance Management on Solution Architect and Project Management from Oracle, Hyperion.</li>\n\t<li>Co-founder of Just Analytics, Consulting firm in Singapore.</li>\n</ul>"
          }, {
              icon: ji(),
              title: "Minh Do",
              description: "<ul>\n\t<li>CEO &amp; Co-founder at Imba, the studio behinds 2 popular NFT Games Heroes &amp; Empire, Kawaii Islands.</li>\n\t<li>Co-founder at Suga Group.</li>\n</ul>\n"
          }, {
              icon: Ni(),
              title: "Thi Truong",
              description: "<ul>\n\t<li>Founder of Icetea Labs.</li>\n\t<li>Creator of GameFi.org and Red Kite.</li>\n\t<li>Thi is also the incubator of several high profile gaming and metaverse projects.</li>\n</ul>\n"
          }]
            , st = {
              dots: !1,
              infinite: !0,
              faded: !0,
              speed: 500,
              slidesToShow: 4,
              swipeToSlide: !0,
              slidesToScroll: 1,
              nextArrow: (0,
              h.jsx)(w.F8, {}),
              prevArrow: (0,
              h.jsx)(w.Kf, {}),
              responsive: [{
                  breakpoint: 1600,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      infinite: !1,
                      dots: !1
                  }
              }, {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }, {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }]
          }
            , it = {
              dots: !1,
              infinite: !0,
              faded: !0,
              speed: 500,
              slidesToShow: 4,
              swipeToSlide: !0,
              slidesToScroll: 1,
              nextArrow: (0,
              h.jsx)(w.F8, {}),
              prevArrow: (0,
              h.jsx)(w.Kf, {}),
              responsive: [{
                  breakpoint: 1920,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      infinite: !1,
                      dots: !1
                  }
              }, {
                  breakpoint: 1008,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: !1,
                      dots: !1
                  }
              }, {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }, {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }]
          }
            , tt = {
              dots: !1,
              faded: !0,
              speed: 500,
              infinite: !1,
              slidesToShow: 7,
              swipeToSlide: !0,
              slidesToScroll: 1,
              nextArrow: (0,
              h.jsx)(w.F8, {}),
              prevArrow: (0,
              h.jsx)(w.Kf, {}),
              responsive: [{
                  breakpoint: 2180,
                  settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                      infinite: !1,
                      autoplay: !1
                  }
              }, {
                  breakpoint: 1920,
                  settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      infinite: !1,
                      autoplay: !1
                  }
              }, {
                  breakpoint: 1600,
                  settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      infinite: !1,
                      autoplay: !1
                  }
              }, {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }, {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: !0,
                      autoplay: !0
                  }
              }]
          }
            , nt = function() {
              return (0,
              h.jsxs)(h.Fragment, {
                  children: [(0,
                  h.jsxs)("section", {
                      className: "dg-advisors dg-teams text-align-center dg-preload-background",
                      id: "advisors",
                      children: [(0,
                      h.jsx)("img", {
                          src: ie(),
                          className: "section-separator",
                          alt: "separator"
                      }), (0,
                      h.jsxs)("div", {
                          className: "advisor-warper",
                          children: [(0,
                          h.jsxs)("div", {
                              className: "dg-section-title dg-section-align-center",
                              children: [(0,
                              h.jsx)("div", {
                                  className: "dg-st-inner",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "dg-st-title-holder",
                                      children: (0,
                                      h.jsx)("h2", {
                                          className: "dg-st-title",
                                          children: (0,
                                          h.jsx)("span", {
                                              children: "Our Advisors"
                                          })
                                      })
                                  })
                              }), (0,
                              h.jsxs)("div", {
                                  children: [(0,
                                  h.jsx)("img", {
                                      src: ae(),
                                      alt: "dg-separator-image"
                                  }), (0,
                                  h.jsx)("br", {})]
                              })]
                          }), (0,
                          h.jsx)(k.i, {
                              children: (0,
                              h.jsx)("div", {
                                  className: "MuiBox-root jss16 advisors",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "partner-container",
                                      children: (0,
                                      h.jsx)(w.lr, {
                                          settings: st,
                                          items: at.map((function(e, a) {
                                              return (0,
                                              h.jsxs)("div", {
                                                  className: "team-member",
                                                  children: [(0,
                                                  h.jsx)("img", {
                                                      alt: "teamm members",
                                                      src: e.icon
                                                  }), (0,
                                                  h.jsx)("h5", {
                                                      children: e.title
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: "content",
                                                      dangerouslySetInnerHTML: {
                                                          __html: e.description
                                                      }
                                                  })]
                                              }, a)
                                          }
                                          ))
                                      })
                                  })
                              })
                          })]
                      })]
                  }), (0,
                  h.jsxs)("section", {
                      className: "dg-teams text-align-center",
                      id: "teams",
                      children: [(0,
                      h.jsx)("img", {
                          src: ie(),
                          className: "section-separator",
                          alt: "separator"
                      }), (0,
                      h.jsxs)("div", {
                          className: "leader-warper",
                          children: [(0,
                          h.jsxs)("div", {
                              className: "dg-section-title dg-section-align-center",
                              children: [(0,
                              h.jsx)("div", {
                                  className: "dg-st-inner",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "dg-st-title-holder",
                                      children: (0,
                                      h.jsx)("h2", {
                                          className: "dg-st-title",
                                          children: (0,
                                          h.jsx)("span", {
                                              children: "Our Teams"
                                          })
                                      })
                                  })
                              }), (0,
                              h.jsxs)("div", {
                                  children: [(0,
                                  h.jsx)("img", {
                                      src: ae(),
                                      alt: "dg-separator-image"
                                  }), (0,
                                  h.jsx)("br", {})]
                              })]
                          }), (0,
                          h.jsx)(k.i, {
                              children: (0,
                              h.jsx)("div", {
                                  className: "MuiBox-root jss16",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "partner-container",
                                      children: (0,
                                      h.jsx)(w.lr, {
                                          settings: it,
                                          items: et.map((function(e, a) {
                                              return (0,
                                              h.jsxs)("div", {
                                                  className: "team-member",
                                                  children: [(0,
                                                  h.jsx)("img", {
                                                      alt: "teamm members",
                                                      src: e.icon
                                                  }), (0,
                                                  h.jsx)("h5", {
                                                      children: e.title
                                                  }), (0,
                                                  h.jsx)("h6", {
                                                      children: e.role
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: "content",
                                                      dangerouslySetInnerHTML: {
                                                          __html: e.description
                                                      }
                                                  })]
                                              }, a)
                                          }
                                          ))
                                      })
                                  })
                              })
                          })]
                      }), (0,
                      h.jsx)("img", {
                          src: ae(),
                          alt: "dg-separator-image"
                      }), (0,
                      h.jsx)("br", {}), (0,
                      h.jsx)("div", {
                          style: {
                              backgroundColor: "#1A1A1A"
                          },
                          children: (0,
                          h.jsx)("div", {
                              className: "teams-warper",
                              children: (0,
                              h.jsx)(k.i, {
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "MuiBox-root jss16",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "partner-container",
                                          children: (0,
                                          h.jsx)(w.lr, {
                                              settings: tt,
                                              items: $i.map((function(e, a) {
                                                  return (0,
                                                  h.jsxs)("div", {
                                                      className: "team-member",
                                                      children: [(0,
                                                      h.jsx)("img", {
                                                          alt: "teamm members",
                                                          src: e.icon
                                                      }), (0,
                                                      h.jsx)("h5", {
                                                          children: e.title
                                                      }), (0,
                                                      h.jsx)("h6", {
                                                          children: e.role
                                                      })]
                                                  }, a)
                                              }
                                              ))
                                          })
                                      })
                                  })
                              })
                          })
                      })]
                  })]
              })
          }
            , rt = s(1526)
            , ot = s.n(rt)
            , lt = s(8143)
            , ct = s.n(lt)
            , dt = s(7700)
            , mt = s.n(dt)
            , pt = s(6220)
            , gt = s.n(pt)
            , ut = function() {
              return (0,
              h.jsxs)("footer", {
                  className: "dg-page-footer",
                  id: "footer",
                  children: [(0,
                  h.jsxs)("div", {
                      className: "animate__animated animate__backInUp",
                      style: {
                          position: "fixed",
                          right: "29px",
                          bottom: 10,
                          zIndex: 9999,
                          maxWidth: "200px",
                          width: "30vw"
                      },
                      children: [(0,
                      h.jsx)("a", {
                          href: "#",
                          target: "_blank",
                          children: (0,
                          h.jsx)("img", {
                              src: mt(),
                              alt: "Buy DRAW"
                          })
                      }), (0,
                      h.jsx)("br", {}), (0,
                      h.jsx)("div", {
                          className: "wrapper-kreep",
                          children: (new Date).getTime() > 1656141789536 ? "" : (0,
                          h.jsx)("a", {
                              className: "button-kreep",
                              href: "#",
                              target: "_blank",
                              children: (0,
                              h.jsx)("img", {
                                  src: gt(),
                                  alt: "Buy DRAW"
                              })
                          })
                      })]
                  }), (0,
                  h.jsxs)("div", {
                      className: "dg-footer-inner clearfix",
                      children: [(0,
                      h.jsx)("img", {
                          className: "divine-bar",
                          src: ot(),
                          alt: "divine"
                      }),
                       (0,
                      h.jsxs)("div", {
                          className: "dg-footer-top-holder",
                          children: [(0,
                          h.jsx)("div", {
                              className: "dg-footer-top dg-footer-top-aligment-left",
                              children: (0,
                              h.jsxs)("div", {
                                  className: "dg-container",
                                  children: [(0,
                                  h.jsx)("div", {
                                      className: "footer-center-img-container",
                                      children: (0,
                                      h.jsx)("img", {
                                          className: "dg-light-logo footer-center-img",
                                          src: ct(),
                                          alt: "light logo",
                                         
                                      }),
                                    
                                  }),
                                  (0,
                                    h.jsx)  ("div", {
                                        className: "d-flex justify-content-center icon-foot",
                                        children: [(0,
                                            h.jsx)("img", {
                                                className: "pt-2 ps4",
                                                src:'https://ik.imagekit.io/l4k8brcjb/kombat/icon/ps4_tm.e1716b09.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666553494100'
                                                
                                               
                                            }), (0,
                                            h.jsx)("img", {
                                                className: "pt-2 ps5",
                                                src:'https://ik.imagekit.io/l4k8brcjb/kombat/icon/ps5_tm.be18ce49.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666553494171',
                                                alt:''

                                                
                                            }), (0,
                                            h.jsx)("img", {
                                                className: "pt-2 xbox",
                                            src:'https://ik.imagekit.io/l4k8brcjb/kombat/icon/xbox-one.bf152ff2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666553494066',

                                              
                                            })
                                            , (0,
                                                h.jsx)("img", {
                                                    className: "pt-2 xbox1",
                                                src:'https://ik.imagekit.io/l4k8brcjb/kombat/icon/xbox-series-x.7f45b405.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666553494097',
    
                                                  
                                                })
                                                , (0,
                                                    h.jsx)("img", {
                                                        className: "pt-2 pc",
                                                    src:'https://ik.imagekit.io/l4k8brcjb/kombat/icon/pc-digital-download-logo.71166f18.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666553494171',
        
                                                      
                                                    })
                                                    
                                        
                                        
                                        
                                        ]
                                    }),(0,
                                  h.jsx)("div", {
                                      className: "container-lg p-5",
                                      children: (0,
                                      h.jsxs)("div", {
                                          className: "row",
                                          children: [(0,
                                          h.jsxs)("div", {
                                              className: "row col-md-6 text-left",
                                              children: [(0,
                                              h.jsxs)("div", {
                                                  className: "col-6",
                                                  children: [(0,
                                                  h.jsx)("a", {
                                                      className: "pt-2",
                                                      target: "_blank",
                                                      href: "https://blockombat.gitbook.io/whitepaper/",
                                                      children: (0,
                                                      h.jsx)("p", {
                                                          children: " ▪ White Paper"
                                                      })
                                                  }), (0,
                                                  h.jsx)("a", {
                                                      className: "pt-2",
                                                      target: "_blank",
                                                      href: "https://blockombat.com/Tokenomics.pdf",
                                                      children: (0,
                                                      h.jsx)("p", {
                                                          children: " ▪ Token Metrics"
                                                      })
                                                  }), (0,
                                                  h.jsx)("a", {
                                                      className: "pt-2",
                                                      target: "_blank",
                                                      href: "https://blockombat.com/blockombat_pitchdeck.pdf",
                                                      children: (0,
                                                      h.jsx)("p", {
                                                          children: " ▪ Pitch Deck"
                                                      })
                                                  })]
                                              }), (0,
                                              h.jsxs)("div", {
                                                  className: "col-6",
                                                  children: [(0,
                                                  h.jsx)("a", {}), (0,
                                                  h.jsx)("a", {
                                                    
                                                  }), (0,
                                                  h.jsx)("a", {
                                                    
                                                  })]
                                              })]
                                          }), (0,
                                          h.jsxs)("div", {
                                              className: "row col-md-6 justify-content-center mt-5",
                                              style: {
                                                  textAlign: "center"
                                              },
                                              children: [(0,
                                              h.jsx)("p", {
                                                  children: "Follow us on social media"
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://t.me/blockombatANN",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("i", {
                                                          className: "fab fa-telegram-plane fa-2x"
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://t.me/blockombat",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("i", {
                                                          className: "fab fa-telegram-plane fa-2x"
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://coinmarketcap.com/community/profile/Blockombat",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("img", {
                                                          className: "cmc fa-2x",
                                                          src:"https://ik.imagekit.io/l4k8brcjb/kombat/CoinMarketCap-Logo-300x300.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666530112003"
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://twitter.com/blockombat",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("i", {
                                                          className: "fab fa-twitter fa-2x"
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://www.youtube.com/channel/UC1X7I5u6u8bpQCVr7w2H7xw",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("i", {
                                                          className: "fab fa-youtube fa-2x"
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "col-2",
                                                  children: (0,
                                                  h.jsx)("a", {
                                                      href: "https://medium.com/@blockombat",
                                                      target: "_blank",
                                                      children: (0,
                                                      h.jsx)("i", {
                                                          className: "fa-brands fa-medium fa-2x"
                                                      })
                                                  })
                                              })]
                                          })]
                                      })
                                  })]
                              })
                          }), (0,
                          h.jsx)("div", {
                              className: "dg-footer-bottom-holder dg-footer-bottom-disable-border",
                              children: (0,
                              h.jsx)("div", {
                                  className: "dg-footer-bottom-holder-inner",
                                  children: (0,
                                  h.jsx)("div", {
                                      className: "dg-container",
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "dg-container-inner",
                                          children: (0,
                                          h.jsxs)("div", {
                                              className: "dg-grid-row dg-footer-bottom-two-cols",
                                              children: [(0,
                                              h.jsx)("div", {
                                                  className: "dg-grid-col-12 dg-center",
                                                  children: (0,
                                                  h.jsx)("div", {
                                                      className: "widget dg-footer-bottom-center widget_text",
                                                      children: (0,
                                                      h.jsx)("div", {
                                                          className: "textwidget text-align-center",
                                                          children: (0,
                                                          h.jsx)("p", {
                                                              children: (0,
                                                              h.jsx)("a", {
                                                                  style: {
                                                                      color: "#fff",
                                                                      fontWeight: 300
                                                                  },
                                                                  href: "#",
                                                                  rel: "nofollow noopener noreferrer",
                                                                  children: "Copyright© 2022 Blockombat."
                                                              })
                                                          })
                                                      })
                                                  })
                                              }), (0,
                                              h.jsx)("div", {
                                                  className: "dg-grid-col-6 dg-right",
                                                  children: (0,
                                                  h.jsx)("div", {
                                                      id: "dg_social_icon_widget-2",
                                                      className: "widget dg-footer-bottom-right widget_dg_social_icon_widget",
                                                      children: (0,
                                                      h.jsx)("a", {
                                                          className: "dg-social-icon-widget-holder",
                                                          "data-hover-color": "#928e75",
                                                          style: {
                                                              color: "#ffffff",
                                                              fontSize: "17px",
                                                              margin: "0 0 0 0px"
                                                          },
                                                          href: "#",
                                                          target: "_blank",
                                                          children: (0,
                                                          h.jsx)("span", {
                                                              className: "dg-social-icon-widget social_facebook"
                                                          })
                                                      })
                                                  })
                                              })]
                                          })
                                      })
                                  })
                              })
                          })]
                      })]
                  })]
              })
          }
            , ht = s(7519)
            , xt = s.n(ht)
            , ft = s(9945)
            , bt = s.n(ft)
            , vt = s(6147)
            , jt = s.n(vt)
            , yt = function() {
              var e = t.useState(!1)
                , a = (0,
              i.Z)(e, 2)
                , s = a[0]
                , n = a[1];
              return (0,
              h.jsx)(h.Fragment, {
                  children: (0,
                  h.jsxs)("section", {
                      className: "dg-banner dg-preload-background",
                      children: [!s && (0,
                      h.jsx)("img", {
                          src: xt(),
                          alt: "banner"
                      }), (0,
                      h.jsx)("img", {
                          src: jt(),
                          alt: "banner",
                          onLoad: function() {
                              n(!0)
                          }
                          .bind(undefined)
                      }), (0,
                      h.jsx)("div", {
                          className: "event-separate",
                          style: {
                              position: "absolute",
                              bottom: "-15px",
                              left: "calc((100vw - 600px) / 2)",
                              zIndex: 2
                          },
                          children: (0,
                          h.jsx)("img", {
                              src: bt(),
                              alt: "event-separator"
                          })
                      })]
                  })
              })
          }
            , Nt = s(2451)
            , wt = s.n(Nt)
            , _t = s(4292)
            , kt = s.n(_t)
            , St = s(6844)
            , Tt = s.n(St)
            , Dt = function() {
              var e = Date.parse((new Date).toString()) - Date.parse(Na[0].Time)
                , a = Date.parse(Na[Na.length - 1].Time) - Date.parse(Na[0].Time)
                , s = e < 0 ? 5 : e / a * 100;
              return (0,
              h.jsxs)("div", {
                  className: "event-content-container",
                  children: [(0,
                  h.jsxs)("div", {
                      className: "event-deep-layer",
                      children: [(0,
                      h.jsx)("div", {
                          className: "fire-dragon-container"
                      }), (0,
                      h.jsx)("div", {
                          className: "fire-dragon",
                          children: (0,
                          h.jsx)("img", {
                              src: wt(),
                              alt: "Fire dragon"
                          })
                      }), (0,
                      h.jsx)("div", {
                          className: "water-dragon-container"
                      }), (0,
                      h.jsx)("div", {
                          className: "water-dragon",
                          children: (0,
                          h.jsx)("img", {
                              src: kt(),
                              alt: "Water dragon"
                          })
                      })]
                  }), (0,
                  h.jsxs)("div", {
                      className: "event-interact-layer",
                      children: [(0,
                      h.jsxs)("div", {
                          className: "buttons",
                          children: [(0,
                          h.jsx)("div", {
                              className: "up-coming-button",
                              children: "UP-COMING"
                          }), (0,
                          h.jsx)("div", {
                              className: "finished-button",
                              children: "FINISHED"
                          })]
                      }), (0,
                      h.jsx)("div", {
                          className: "road-map",
                          children: (0,
                          h.jsxs)("div", {
                              className: "road-map_timeline",
                              children: [(0,
                              h.jsx)("div", {
                                  className: "road-map_progress-bar"
                              }), (0,
                              h.jsxs)("div", {
                                  className: "road-map_progress-bar-inner-bar",
                                  style: {
                                      height: "".concat(s, "%")
                                  },
                                  children: [(0,
                                  h.jsx)("span", {
                                      className: "road-map-small-energy-bar-1"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "road-map-small-energy-bar-2"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "road-map-small-energy-bar-3"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "road-map-small-energy-bar-4"
                                  }), (0,
                                  h.jsx)("span", {
                                      className: "road-map-small-energy-bar-5"
                                  }), (0,
                                  h.jsx)("div", {
                                      className: "road-map-energy-bar-cover-up"
                                  })]
                              }), wa.map((function(e, a) {
                                  return (0,
                                  h.jsx)(h.Fragment, {
                                      children: (0,
                                      h.jsx)("div", {
                                          className: "road-map_container road-map_left" + (Date.parse((new Date).toString()) > Date.parse(e.time) ? " complete" : ""),
                                          children: (0,
                                          h.jsx)("div", {
                                              className: "road-map_content",
                                              children: (0,
                                              h.jsxs)("div", {
                                                  style: {
                                                      fontSize: "22px",
                                                      lineHeight: "26px",
                                                      letterSpacing: "0.05em",
                                                      color: "#40B3EC",
                                                      display: "flex",
                                                      alignItems: "center"
                                                  },
                                                  children: [(0,
                                                  h.jsx)("img", {
                                                      src: Tt(),
                                                      alt: "right"
                                                  }), (0,
                                                  h.jsx)("span", {
                                                      style: {
                                                          marginLeft: "1vw"
                                                      },
                                                      children: "  " + e.time + " "
                                                  }), (0,
                                                  h.jsx)("div", {
                                                      className: "road-map_event-info",
                                                      children: (0,
                                                      h.jsxs)("div", {
                                                          children: [(0,
                                                          h.jsxs)("div", {
                                                              className: "text",
                                                              children: [(0,
                                                              h.jsx)("div", {
                                                                  className: "title",
                                                                  children: e.title
                                                              }), (0,
                                                              h.jsx)("div", {
                                                                  className: "description",
                                                                  children: e.description
                                                              })]
                                                          }), (0,
                                                          h.jsx)("div", {
                                                              className: "btn-detail-event",
                                                              children: "Detail"
                                                          })]
                                                      })
                                                  })]
                                              })
                                          })
                                      }, a)
                                  })
                              }
                              ))]
                          })
                      })]
                  })]
              })
          }
      }
      ,
      6748: (e,a,s)=>{
          "use strict";
          var i = s(8152)
            , t = s(7294)
            , n = s(3727)
            , r = s(6550)
            , o = s(3935)
            , l = s(9852)
            , c = s(7519)
            , d = s.n(c)
            , m = s(5893)
            , p = function(e) {
              var a = e.children;
              return (0,
              m.jsx)("div", {
                  className: "dg-wrapper",
                  style: {
                      backgroundColor: "gray"
                  },
                  children: (0,
                  m.jsxs)("div", {
                      className: "dg-wrapper-inner",
                      children: [(0,
                      m.jsx)(l.h4, {}), (0,
                      m.jsx)("div", {
                          className: "dg-content",
                          style: {
                              background: "url('".concat(d(), "')"),
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              minHeight: "100vh"
                          },
                          children: (0,
                          m.jsx)("div", {
                              className: "dg-content-inner",
                              children: (0,
                              m.jsx)(t.Suspense, {
                                  fallback: l.y3,
                                  children: (0,
                                  m.jsx)("div", {
                                      children: a
                                  })
                              })
                          })
                      }), (0,
                      m.jsx)(l.$_, {})]
                  })
              })
          }
            , g = s(9249)
            , u = s(4890)
            , h = s(6488)
            , x = s(5998)
            , f = s(1897)
            , b = f.filter((function(e) {
              return "*" === e.route
          }
          ))
            , v = (0,
          i.Z)(b, 1)[0]
            , j = f.filter((function(e) {
              return e !== v
          }
          ))
            , y = {
              playNowReducer: h.Z
          }
            , N = function() {
              var e = (0,
              u.MT)((0,
              u.UY)(y));
              return (0,
              m.jsx)(n.VK, {
                  children: (0,
                  m.jsx)(x.zt, {
                      store: e,
                      children: (0,
                      m.jsxs)(p, {
                          children: [(0,
                          m.jsxs)(r.rs, {
                              children: [j.map((function(e) {
                                  return (0,
                                  m.jsx)(r.AW, {
                                      path: e.route,
                                      exact: !0,
                                      component: e.content
                                  }, e.route)
                              }
                              )), v && (0,
                              m.jsx)(r.AW, {
                                  component: v.content
                              })]
                          }), (0,
                          m.jsx)(g.Ix, {
                              position: "bottom-left",
                              autoClose: 5e3,
                              hideProgressBar: !1,
                              newestOnTop: !1,
                              closeOnClick: !0,
                              rtl: !1,
                              pauseOnFocusLoss: !0,
                              draggable: !0,
                              pauseOnHover: !0
                          })]
                      })
                  })
              })
          };
          (0,
          o.hydrate)((0,
          m.jsx)(N, {}), document.getElementById("root1"))
      }
      ,
      5818: (e,a,s)=>{
          "use strict";
          s.d(a, {
              Z: ()=>t,
              k: ()=>i
          });
          var i = "SET_PLAY_NOW"
            , t = function(e) {
              return {
                  type: i,
                  payload: {
                      playnow: e,
                      first: !1
                  }
              }
          }
      }
      ,
      6488: (e,a,s)=>{
          "use strict";
          s.d(a, {
              Z: ()=>c,
              i: ()=>o
          });
          var i = s(4942)
            , t = s(5818);
          function n(e, a) {
              var s = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  a && (i = i.filter((function(a) {
                      return Object.getOwnPropertyDescriptor(e, a).enumerable
                  }
                  ))),
                  s.push.apply(s, i)
              }
              return s
          }
          function r(e) {
              for (var a = 1; a < arguments.length; a++) {
                  var s = null != arguments[a] ? arguments[a] : {};
                  a % 2 ? n(Object(s), !0).forEach((function(a) {
                      (0,
                      i.Z)(e, a, s[a])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : n(Object(s)).forEach((function(a) {
                      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                  }
                  ))
              }
              return e
          }
          var o = function(e) {
              return e.playNowReducer
          }
            , l = {
              playnow: !1,
              first: !0
          };
          const c = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
                , a = arguments.length > 1 ? arguments[1] : void 0;
              return a.type === t.k ? r(r({}, e), a.payload) : r({}, e)
          }
      }
      ,
      288: (e,a,s)=>{
          e.exports = s.p + "assets/images/play-btn.png"
      }
      ,
      9948: (e,a,s)=>{
          e.exports = s.p + "assets/images/vector_down.png"
      }
      ,
      7762: (e,a,s)=>{
          e.exports =  "assets/images/arrow_left.png"
      }
      ,
      518: (e,a,s)=>{
          e.exports =  "assets/images/arrow_right.png"
      }
      ,
      1860: (e,a,s)=>{
          e.exports =  "assets/images/arrow_white.png"
      }
      ,
      7519: (e,a,s)=>{
          e.exports = "assets/images/banner_preload.png"
      }
      ,
      7700: (e,a,s)=>{
          e.exports = "assets/images/buy-draw-btn1.png"
      }
      ,
      6220: (e,a,s)=>{
          e.exports = s.p + "assets/images/event-btn.png"
      }
      ,
      2947: (e,a,s)=>{
          e.exports = s.p + "assets/images/avata_outline.png"
      }
      ,
      9105: (e,a,s)=>{
          e.exports = s.p + "assets/images/character_bg_dark_elf.png"
      }
      ,
      9500: (e,a,s)=>{
          e.exports = s.p + "assets/images/character_bg_elf.png"
      }
      ,
      7219: (e,a,s)=>{
          e.exports = s.p + "assets/images/character_bg_human.png"
      }
      ,
      867: (e,a,s)=>{
          e.exports = s.p + "assets/images/character_bg_orc.png"
      }
      ,
      526: (e,a,s)=>{
          e.exports = "assets/images/chr_dark_elf.gif"
      }
      ,
      4327: (e,a,s)=>{
          e.exports =  "assets/images/chr_elf.gif"
      }
      ,
      4346: (e,a,s)=>{
          e.exports = "assets/images/chr_ore.gif"
      }
      ,
      8747: (e,a,s)=>{
          e.exports = "https://ik.imagekit.io/l4k8brcjb/kombat/Hero_3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666540791140"
      }
      ,
      536: (e,a,s)=>{
          e.exports ="assets/images/human.gif"
      }
      ,
      1008: (e,a,s)=>{
          e.exports ="https://ik.imagekit.io/l4k8brcjb/kombat/Hero_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666540791011"
      }
      ,
      4661: (e,a,s)=>{
          e.exports = "https://ik.imagekit.io/l4k8brcjb/kombat/Hero_4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666540791035"
      }
      ,
      1777: (e,a,s)=>{
          e.exports = "https://ik.imagekit.io/l4k8brcjb/kombat/Hero_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666540791232"
      }
      ,
      1526: (e,a,s)=>{
          e.exports = s.p + "assets/images/divine_bar.png"
      }
      ,
      4880: (e,a,s)=>{
          e.exports = s.p + "assets/images/avata_outline.png"
      }
      ,
      6942: (e,a,s)=>{
          e.exports = s.p + "assets/images/earthavatar.png"
      }
      ,
      4389: (e,a,s)=>{
          e.exports = s.p + "assets/images/fireavatar.png"
      }
      ,
      474: (e,a,s)=>{
          e.exports = s.p + "assets/images/grassavatar.png"
      }
      ,
      1544: (e,a,s)=>{
          e.exports = s.p + "assets/images/thunderavatar.png"
      }
      ,
      6848: (e,a,s)=>{
          e.exports = s.p + "assets/images/wateravatar.png"
      }
      ,
      5877: (e,a,s)=>{
          e.exports = s.p + "assets/images/background_earth.png"
      }
      ,
      7159: (e,a,s)=>{
          e.exports = s.p + "assets/images/background_fire.png"
      }
      ,
      1707: (e,a,s)=>{
          e.exports = s.p + "assets/images/background_grass.png"
      }
      ,
      3902: (e,a,s)=>{
          e.exports = s.p + "assets/images/background_thunder.png"
      }
      ,
      3686: (e,a,s)=>{
          e.exports = s.p + "assets/images/background_water.png"
      }
      ,
      6313: (e,a,s)=>{
          e.exports = s.p + "assets/images/chest.png"
      }
      ,
      4258: (e,a,s)=>{
          e.exports = s.p + "assets/images/claw.png"
      }
      ,
      8911: (e,a,s)=>{
          e.exports = s.p + "assets/images/eye.png"
      }
      ,
      504: (e,a,s)=>{
          e.exports = s.p + "assets/images/horn.png"
      }
      ,
      4107: (e,a,s)=>{
          e.exports = s.p + "assets/images/rune.png"
      }
      ,
      6379: (e,a,s)=>{
          e.exports = s.p + "assets/images/tail.png"
      }
      ,
      3769: (e,a,s)=>{
          e.exports = s.p + "assets/images/dragon_background.png"
      }
      ,
      9418: (e,a,s)=>{
          e.exports = s.p + "assets/images/earth.gif"
      }
      ,
      8505: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_earth.png"
      }
      ,
      2363: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_fire.png"
      }
      ,
      4289: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_grass.png"
      }
      ,
      7127: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_outline.png"
      }
      ,
      950: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_thunder.png"
      }
      ,
      769: (e,a,s)=>{
          e.exports = s.p + "assets/images/element_water.png"
      }
      ,
      2451: (e,a,s)=>{
          e.exports = s.p + "assets/images/fire-dragon-event.png"
      }
      ,
      3766: (e,a,s)=>{
          e.exports = s.p + "assets/images/fire.gif"
      }
      ,
      392: (e,a,s)=>{
          e.exports = s.p + "assets/images/grass.gif"
      }
      ,
      2434: (e,a,s)=>{
          e.exports = s.p + "assets/images/role_earth.png"
      }
      ,
      1231: (e,a,s)=>{
          e.exports = s.p + "assets/images/role_fire.png"
      }
      ,
      409: (e,a,s)=>{
          e.exports = s.p + "assets/images/role_grass.png"
      }
      ,
      3076: (e,a,s)=>{
          e.exports = s.p + "assets/images/role_thunder.png"
      }
      ,
      6152: (e,a,s)=>{
          e.exports = s.p + "assets/images/role_water.png"
      }
      ,
      5174: (e,a,s)=>{
          e.exports = s.p + "assets/images/thunder.gif"
      }
      ,
      4292: (e,a,s)=>{
          e.exports = s.p + "assets/images/water-dragon-event.png"
      }
      ,
      2286: (e,a,s)=>{
          e.exports = s.p + "assets/images/water.gif"
      }
      ,
      9945: (e,a,s)=>{
          e.exports = s.p + "assets/images/event-separator.png"
      }
      ,
      6228: (e,a,s)=>{
          e.exports = s.p + "assets/images/boxframe2.png"
      }
      ,
      2086: (e,a,s)=>{
          e.exports = "assets/images/logo-dark.png"
      }
      ,
      8143: (e,a,s)=>{
          e.exports =  "assets/images/logo-dark.png"
      }
      ,
      7636: (e,a,s)=>{
          e.exports = s.p + "assets/images/old-paper.png"
      }
      ,
      6147: (e,a,s)=>{
          e.exports = s.p + "assets/images/opentest_banner.png"
      }
      ,
      2403: (e,a,s)=>{
          e.exports = s.p + "assets/images/athena.png"
      }
      ,
      5147: (e,a,s)=>{
          e.exports =  "assets/images/au21.png"
      }
      ,
      5345: (e,a,s)=>{
          e.exports = s.p + "assets/images/avstar.png"
      }
      ,
      6025: (e,a,s)=>{
          e.exports = s.p + "assets/images/az.png"
      }
      ,
      1322: (e,a,s)=>{
          e.exports = s.p + "assets/images/bitcoinaddictthailand.png"
      }
      ,
      3443: (e,a,s)=>{
          e.exports = s.p + "assets/images/brandless.png"
      }
      ,
      9223: (e,a,s)=>{
          e.exports = s.p + "assets/images/carv.png"
      }
      ,
      8760: (e,a,s)=>{
          e.exports = s.p + "assets/images/crypto_time.png"
      }
      ,
      7171: (e,a,s)=>{
          e.exports =  "assets/images/daomaker.png"
      }
      ,
      341: (e,a,s)=>{
          e.exports =  "assets/images/gamefi.png"
      }
      ,
      9119: (e,a,s)=>{
          e.exports =  "assets/images/goodgame.png"
      }
      ,
      7413: (e,a,s)=>{
          e.exports =  "assets/images/hgventures.png"
      }
      ,
      7561: (e,a,s)=>{
          e.exports = "assets/images/hub.png"
      }
      ,
      3746: (e,a,s)=>{
          e.exports = "assets/images/hyper_growth.png"
      }
      ,
      5365: (e,a,s)=>{
          e.exports = "assets/images/icetealabs.png"
      }
      ,
      2925: (e,a,s)=>{
          e.exports =  "assets/images/irv_research.png"
      }
      ,
      8796: (e,a,s)=>{
          e.exports = "assets/images/luaventures.png"
      }
      ,
      1789: (e,a,s)=>{
          e.exports = s.p + "assets/images/magiceden.png"
      }
      ,
      9836: (e,a,s)=>{
          e.exports = "assets/images/maven_m.png"
      }
      ,
      798: (e,a,s)=>{
          e.exports = s.p + "assets/images/mexc.png"
      }
      ,
      8407: (e,a,s)=>{
          e.exports =  "assets/images/mgg.png"
      }
      ,
      3993: (e,a,s)=>{
          e.exports = s.p + "assets/images/moonly.png"
      }
      ,
      1817: (e,a,s)=>{
          e.exports = s.p + "assets/images/one_max_captial.png"
      }
      ,
      6298: (e,a,s)=>{
          e.exports = s.p + "assets/images/raptor.png"
      }
      ,
      6389: (e,a,s)=>{
          e.exports = "assets/images/redkite.png"
      }
      ,
      9205: (e,a,s)=>{
          e.exports = s.p + "assets/images/senguild.png"
      }
      ,
      9808: (e,a,s)=>{
          e.exports = s.p + "assets/images/sol_sea.png"
      }
      ,
      5286: (e,a,s)=>{
          e.exports = s.p + "assets/images/sol_sniper.png"
      }
      ,
      6227: (e,a,s)=>{
          e.exports =  "assets/images/solana.png"
      }
      ,
      2490: (e,a,s)=>{
          e.exports = "assets/images/solanium.png"
      }
      ,
      471: (e,a,s)=>{
          e.exports = s.p + "assets/images/spores.png"
      }
      ,
      2948: (e,a,s)=>{
          e.exports = "assets/images/starpunk.png"
      }
      ,
      9348: (e,a,s)=>{
          e.exports = "assets/images/sugagroup.png"
      }
      ,
      7676: (e,a,s)=>{
          e.exports = "assets/images/vendettacapital.png"
      }
      ,
      1938: (e,a,s)=>{
          e.exports = s.p + "assets/images/x8g.png"
      }
      ,
      3440: (e,a,s)=>{
          e.exports = s.p + "assets/images/pattern-dark.png"
      }
      ,
      6844: (e,a,s)=>{
          e.exports = s.p + "assets/images/roadmap-pointer.png"
      }
      ,
      4278: (e,a,s)=>{
          e.exports = s.p + "assets/images/roadmap_left.png"
      }
      ,
      8506: (e,a,s)=>{
          e.exports = s.p + "assets/images/roadmap_right.png"
      }
      ,
      6237: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss1.png"
      }
      ,
      1800: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss2.png"
      }
      ,
      1912: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss3.png"
      }
      ,
      8731: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss4.png"
      }
      ,
      4134: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss5.png"
      }
      ,
      9035: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss6.png"
      }
      ,
      4224: (e,a,s)=>{
          e.exports = s.p + "assets/images/ss7.png"
      }
      ,
      4356: (e,a,s)=>{
          e.exports = s.p + "assets/images/section-title-border.png"
      }
      ,
      1574: (e,a,s)=>{
          e.exports = s.p + "assets/images/sectionseparate.png"
      }
      ,
      7879: (e,a,s)=>{
          e.exports = "assets/images/Alvin_NG.png"
      }
      ,
      2987: (e,a,s)=>{
          e.exports = s.p + "assets/images/An_Ngo.png"
      }
      ,
      9934: (e,a,s)=>{
          e.exports = s.p + "assets/images/Cuong_Nguyen.png"
      }
      ,
      3361: (e,a,s)=>{
          e.exports = s.p + "assets/images/Dai_Phan.png"
      }
      ,
      3197: (e,a,s)=>{
          e.exports = s.p + "assets/images/Hung_Nguyen.png"
      }
      ,
      8021: (e,a,s)=>{
          e.exports = "assets/images/Huy_Nguyen.png"
      }
      ,
      1861: (e,a,s)=>{
          e.exports = s.p + "assets/images/Huy_Van.png"
      }
      ,
      6935: (e,a,s)=>{
          e.exports = s.p + "assets/images/Khoa_Duong.png"
      }
      ,
      6006: (e,a,s)=>{
          e.exports = s.p + "assets/images/Lan_Chan.png"
      }
      ,
      2253: (e,a,s)=>{
          e.exports = s.p + "assets/images/Luyen_Ngo.png"
      }
      ,
      932: (e,a,s)=>{
          e.exports = s.p + "assets/images/Minh_Do.png"
      }
      ,
      4310: (e,a,s)=>{
          e.exports = s.p + "assets/images/Nam_Do.png"
      }
      ,
      9210: (e,a,s)=>{
          e.exports = s.p + "assets/images/Phuc_Vo.png"
      }
      ,
      2024: (e,a,s)=>{
          e.exports = s.p + "assets/images/Phuoc_Nguyen.png"
      }
      ,
      3098: (e,a,s)=>{
          e.exports = s.p + "assets/images/Son_Pham.png"
      }
      ,
      3812: (e,a,s)=>{
          e.exports = s.p + "assets/images/Thi_Truong.png"
      }
      ,
      4830: (e,a,s)=>{
          e.exports = s.p + "assets/images/Tram_Do.png"
      }
      ,
      3511: (e,a,s)=>{
          e.exports = s.p + "assets/images/Vu_Nguyen.png"
      }
      ,
      7509: (e,a,s)=>{
          e.exports = s.p + "assets/images/anh_vinh.png"
      }
      ,
      1897: (e,a,s)=>{
          const {lazy: i} = s(7294);
          e.exports = [{
              content: i((()=>s.e(653).then(s.bind(s, 9653)))),
              route: "/about"
          }, {
              content: i((()=>s.e(181).then(s.bind(s, 4181)))),
              route: "/event"
          }, {
              content: i((()=>Promise.all([s.e(45), s.e(199)]).then(s.bind(s, 8199)))),
              route: "/"
          }, {
              content: i((()=>s.e(76).then(s.bind(s, 4076)))),
              route: "*"
          }, {
              content: i((()=>s.e(90).then(s.bind(s, 5662)))),
              route: "/privacy-policy"
          }, {
              content: i((()=>s.e(537).then(s.bind(s, 8537)))),
              route: "/terms-of-service"
          }]
      }
  }, t = {};
  function n(e) {
      var a = t[e];
      if (void 0 !== a)
          return a.exports;
      var s = t[e] = {
          exports: {}
      };
      return i[e](s, s.exports, n),
      s.exports
  }
  n.m = i,
  e = [],
  n.O = (a,s,i,t)=>{
      if (!s) {
          var r = 1 / 0;
          for (d = 0; d < e.length; d++) {
              for (var [s,i,t] = e[d], o = !0, l = 0; l < s.length; l++)
                  (!1 & t || r >= t) && Object.keys(n.O).every((e=>n.O[e](s[l]))) ? s.splice(l--, 1) : (o = !1,
                  t < r && (r = t));
              if (o) {
                  e.splice(d--, 1);
                  var c = i();
                  void 0 !== c && (a = c)
              }
          }
          return a
      }
      t = t || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > t; d--)
          e[d] = e[d - 1];
      e[d] = [s, i, t]
  }
  ,
  n.n = e=>{
      var a = e && e.__esModule ? ()=>e.default : ()=>e;
      return n.d(a, {
          a
      }),
      a
  }
  ,
  n.d = (e,a)=>{
      for (var s in a)
          n.o(a, s) && !n.o(e, s) && Object.defineProperty(e, s, {
              enumerable: !0,
              get: a[s]
          })
  }
  ,
  n.f = {},
  n.e = e=>Promise.all(Object.keys(n.f).reduce(((a,s)=>(n.f[s](e, a),
  a)), [])),
  n.u = e=>"assets/js/" + e + "." + {
      45: "b606f139027db7bf0680",
      76: "8e8e823089679652e046",
      90: "7580081d0876ef4d1f9a",
      181: "058dbefdacfb8f7e508d",
      199: "a9e7c7d4c80a5f5b9362",
      537: "0f65a3046b6dbd906b33",
      653: "748520279418d2dc688c"
  }[e] + ".bundle.js",
  n.miniCssF = e=>{}
  ,
  n.g = function() {
      if ("object" == typeof globalThis)
          return globalThis;
      try {
          return this || new Function("return this")()
      } catch (e) {
          if ("object" == typeof window)
              return window
      }
  }(),
  n.o = (e,a)=>Object.prototype.hasOwnProperty.call(e, a),
  a = {},
  s = "main-website:",
  n.l = (e,i,t,r)=>{
      if (a[e])
          a[e].push(i);
      else {
          var o, l;
          if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                  var m = c[d];
                  if (m.getAttribute("src") == e || m.getAttribute("data-webpack") == s + t) {
                      o = m;
                      break
                  }
              }
          o || (l = !0,
          (o = document.createElement("script")).charset = "utf-8",
          o.timeout = 120,
          n.nc && o.setAttribute("nonce", n.nc),
          o.setAttribute("data-webpack", s + t),
          o.src = e),
          a[e] = [i];
          var p = (s,i)=>{
              o.onerror = o.onload = null,
              clearTimeout(g);
              var t = a[e];
              if (delete a[e],
              o.parentNode && o.parentNode.removeChild(o),
              t && t.forEach((e=>e(i))),
              s)
                  return s(i)
          }
            , g = setTimeout(p.bind(null, void 0, {
              type: "timeout",
              target: o
          }), 12e4);
          o.onerror = p.bind(null, o.onerror),
          o.onload = p.bind(null, o.onload),
          l && document.head.appendChild(o)
      }
  }
  ,
  n.r = e=>{
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  n.p = "",
  (()=>{
      var e = {
          179: 0,
          532: 0
      };
      n.f.j = (a,s)=>{
          var i = n.o(e, a) ? e[a] : void 0;
          if (0 !== i)
              if (i)
                  s.push(i[2]);
              else if (532 != a) {
                  var t = new Promise(((s,t)=>i = e[a] = [s, t]));
                  s.push(i[2] = t);
                  var r = n.p + n.u(a)
                    , o = new Error;
                  n.l(r, (s=>{
                      if (n.o(e, a) && (0 !== (i = e[a]) && (e[a] = void 0),
                      i)) {
                          var t = s && ("load" === s.type ? "missing" : s.type)
                            , r = s && s.target && s.target.src;
                          o.message = "Loading chunk " + a + " failed.\n(" + t + ": " + r + ")",
                          o.name = "ChunkLoadError",
                          o.type = t,
                          o.request = r,
                          i[1](o)
                      }
                  }
                  ), "chunk-" + a, a)
              } else
                  e[a] = 0
      }
      ,
      n.O.j = a=>0 === e[a];
      var a = (a,s)=>{
          var i, t, [r,o,l] = s, c = 0;
          if (r.some((a=>0 !== e[a]))) {
              for (i in o)
                  n.o(o, i) && (n.m[i] = o[i]);
              if (l)
                  var d = l(n)
          }
          for (a && a(s); c < r.length; c++)
              t = r[c],
              n.o(e, t) && e[t] && e[t][0](),
              e[t] = 0;
          return n.O(d)
      }
        , s = self.webpackChunkmain_website = self.webpackChunkmain_website || [];
      s.forEach(a.bind(null, 0)),
      s.push = a.bind(null, s.push.bind(s))
  }
  )(),
  n.nc = void 0;
  var r = n.O(void 0, [216, 532], (()=>n(6748)));
  r = n.O(r)
}
)();
